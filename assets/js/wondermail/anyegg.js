import { getJsonDatas } from '../json_script.js';
import { WonderMail } from './password.js';
import { checkPasswordString } from '../utils/passwordConverter.js';

let versionSkyElement = null;
let versionOldElement = null;
let regionJPElement = null;
let regionNAElement = null;
let regionEUElement = null;
let regionOldInfoElement = null;
let recruitPokemonElement = null;
let passwordElement = null;
let passGenerateElement = null;
let optionOutputHalfWidthElement = null;
let optionOutputWithoutSpacesLinebreak = null;

// choicesデータ
let pokemonChoicesData = null;
const choicesInstances = [];

document.addEventListener('DOMContentLoaded', async function () {
  versionSkyElement = document.getElementById('version-sky');
  versionOldElement = document.getElementById('version-old');
  regionJPElement = document.getElementById('region-jp');
  regionNAElement = document.getElementById('region-na');
  regionEUElement = document.getElementById('region-eu');
  regionOldInfoElement = document.getElementById('region-old-info');
  recruitPokemonElement = document.getElementById('recruit-pokemon');
  passwordElement = document.getElementById('password');
  passGenerateElement = document.getElementById('pass-generate');
  optionOutputHalfWidthElement = document.getElementById('option-output-half-width');
  optionOutputWithoutSpacesLinebreak = document.getElementById('option-output-without-space-linebreak');

  // JSONデータ読込
  ({ pokemon: window.PokemonData, message: window.MessageData } = await getJsonDatas(['pokemon', 'message']));

  // イベント
  setEvent();

  // choices
  initChoices();

  // バリデーション
  runValidation(recruitPokemonElement);
});

/**
 * イベント
 */
function setEvent() {
  const versionElements = [versionSkyElement, versionOldElement];
  for (const element of versionElements) {
    element.addEventListener('change', function () {
      // リージョン活性切替
      const isOldVersion = versionOldElement.checked;
      for (const element of [regionJPElement, regionNAElement, regionEUElement]) {
        element.disabled = isOldVersion;
      }
      if (isOldVersion) {
        regionOldInfoElement.classList.remove('d-none');
      } else {
        regionOldInfoElement.classList.add('d-none');
      }
    });
  }

  recruitPokemonElement.addEventListener('change', () => {
    runValidation(recruitPokemonElement);

    const value = choicesInstances[recruitPokemonElement.id].getValue();
    if (value.value > 600 && value.customProperties.warningType == 'genderInvalid') {
      console.log('!');
    }
  });

  passGenerateElement.addEventListener('click', () => {
    const wm = new WonderMail();
    const isSky = isVersionSky();
    const region = getRegionType();
    if (!region) {
      console.error('region unchecked');
      return;
    }

    // SEEDをランダム化
    const seed = Math.floor(Math.random() * 0xffffff);

    // 依頼作成
    wm.Sky = isSky;
    wm.Region = region;
    wm.Status = 4;
    wm.MissionType = 0x6;
    wm.MissionFlag = 0x0;
    wm.RewardType = 0x5;
    wm.RewardValue = recruitPokemonElement.value ?? 0;
    wm.Client = 0x11e; // ミズゴロウ
    wm.Target1 = 0x11e; // ミズゴロウ
    wm.Target2 = 0x000;
    wm.TargetItem = 0x05c; // ガバイトのウロコ
    wm.Dungeon = 0x5b; // めいきゅうのどうくつ
    wm.Floor = 0x00; // B0F
    wm.Fixed = 0x00;
    wm.RestType = 0x00;
    wm.RestValue = 0x00;
    wm.Seed = seed;
    wm.encode();

    const widthType = optionOutputHalfWidthElement.checked ? 1 : 0;
    const spaceBreak = !optionOutputWithoutSpacesLinebreak.checked;
    passwordElement.value = wm.output(widthType, spaceBreak);
  });
}

/**
 * Choices 初期化
 */
function initChoices() {
  // オプション
  const choicesOptionsAnyEgg = {
    ...choicesOptions,
    callbackOnCreateTemplates: function (template, escapeForTemplate, getClassNames) {
      return {
        item: ({ classNames }, data) => {
          const listType = data.customProperties.listType ?? '';
          return template(`
          <div class="${getClassNames(classNames.item).join(' ')} ${getClassNames(
            data.highlighted ? classNames.highlightedState : classNames.itemSelectable,
          ).join(' ')} ${
            data.placeholder ? classNames.placeholder : ''
          }" data-item data-id="${data.id}" data-value="${data.value}" ${
            data.active ? 'aria-selected="true"' : ''
          } ${data.disabled ? 'aria-disabled="true"' : ''} data-listtype="${listType}">
            <span>${data.label}</span>
          </div>
        `);
        },
        choice: ({ classNames }, data) => {
          const listType = data.customProperties.listType ?? '';
          const warningType = data.customProperties.warningType ?? '';
          const gender = data.customProperties.gender ?? 0;
          return template(`
          <div class="
          ${getClassNames(classNames.item).join(' ')} ${getClassNames(classNames.itemChoice).join(' ')} ${getClassNames(
            data.disabled ? classNames.itemDisabled : classNames.itemSelectable,
          ).join(' ')}" data-choice ${
            data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'
          } data-id="${data.id}" data-value="${data.value}" ${
            data.groupId > 0 ? 'role="treeitem"' : 'role="option"'
          } data-listtype=${listType} data-warningType="${warningType}" data-gender="${gender}">
            <span>${data.label}</span>
          </div>
          `);
        },
      };
    },
  };

  // 項目データ取得
  pokemonChoicesData = getPokemonChoicesData();

  // Choicesインスタンス化
  choicesInstances[recruitPokemonElement.id] = new Choices(recruitPokemonElement, choicesOptionsAnyEgg);

  // 項目をセット
  choicesInstances[recruitPokemonElement.id].clearChoices();
  choicesInstances[recruitPokemonElement.id].setChoices(pokemonChoicesData, 'value', 'label', true, true, true);

  // デフォルト値をセット
  choicesInstances[recruitPokemonElement.id].setChoiceByValue(1);
}

/**
 * バリデーション実行
 * @param {*} element バリデーション対象要素
 */
function runValidation(element) {
  const errorMsgClassName = 'error-msg';
  let error = 0;
  let errorMsg = '';

  if (element.id in choicesInstances) {
    const value = choicesInstances[element.id].getValue();
    if (!value || !value.customProperties) return;

    const warningType = value.customProperties.warningType ?? '';
    const floating = element.closest('.form-floating');
    const choicesInner = element.closest('.choices__inner');

    switch (warningType) {
      case 'nothing':
        error = 1;
        errorMsg = window.translate.anyegg.warningNothing;
        break;
      case 'genderInvalid':
        error = 2;
        errorMsg = window.translate.anyegg.warningGenderInvalid;
        break;
    }

    // 既にエラーメッセージが出ている場合はエラー表示を消す
    const floatingNext = floating.nextElementSibling;
    if (floatingNext && floatingNext.classList.contains(errorMsgClassName)) {
      floatingNext.remove();
      choicesInner.classList.remove('border-danger');
    }

    // エラーメッセージを表示する (disabledの場合は無視)
    if (error > 0 && !element.disabled) {
      const errorElement = document.createElement('span');
      errorElement.classList.add(errorMsgClassName);
      errorElement.classList.add('text-danger');
      errorElement.innerHTML = `
        <i class="bi bi-exclamation-circle-fill me-1"></i>${errorMsg}
      `;
      floating.insertAdjacentElement('afterend', errorElement);
      choicesInner.classList.add('border-danger');
    }
  }
}

/**
 * バージョンが「空」であるか
 * @returns
 */
function isVersionSky() {
  return versionSkyElement?.checked;
}

/**
 * 選択されたリージョンを取得
 * @returns
 */
function getRegionType() {
  const region = document.querySelector('input[name="region"]:checked');
  return region ? region.value : null;
}

/**
 * [choices.js] ポケモン項目データを取得
 * @returns
 */
function getPokemonChoicesData(isClient = false, filter = []) {
  if (!PokemonData) {
    console.error('PokemonData not found');
    return;
  }

  const result = [];
  for (let i = 0; i < PokemonData.length * 2 && i < 0x483; i++) {
    if (filter.length > 0 && (!filter.includes(i % 600) || !PokemonData.some((x) => filter.includes(x.Id)))) {
      continue;
    }
    const pokemon = PokemonData[i % PokemonData.length];
    const pokemonName = MessageData[window.PARAMS['MESSAGE_POKEMON_NAME_INDEX'] + (i % PokemonData.length)];
    const pokemonSubName = window.translate.pokemon.subname[i % 600] ?? '';
    const genderIdx = Math.floor(i / 600);
    const genderId = pokemon.Genders[genderIdx];
    const genderTranslates = [
      window.translate.pokemon.gender['invalid'],
      window.translate.pokemon.gender['male'],
      window.translate.pokemon.gender['female'],
      window.translate.pokemon.gender['genderless'],
    ];
    let warningType = '';

    if (i == 0) {
      // なにものか (0x000)
      warningType = 'nothing';
    } else if (i >= 600 && genderId == 0) {
      // 性別無効 (0x258以降)
      warningType = 'genderInvalid';
    }

    result.push({
      value: i,
      label: `[${i.toString(16).padStart(3, '0').toUpperCase()}] ${pokemonName}${pokemonSubName ? ` - ${pokemonSubName}` : ''} (${genderTranslates[genderId]})`,
      selected: i == 0,
      customProperties: {
        listType: 'pokemon',
        warningType: warningType,
        gender: genderId,
      },
    });
  }
  return result;
}
