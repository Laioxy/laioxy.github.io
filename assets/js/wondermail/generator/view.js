import * as params from './params.js';
import * as mechanics from './mechanics.js';
import { getJsonDatas } from '../../json_script.js';
import { WonderMail } from '../password.js';
import { checkPasswordString } from '../../utils/passwordConverter.js';

let resultPasswordElement = null;

let versionSkyElement = null;
let versionOldElement = null;
let regionJPElement = null;
let regionNAElement = null;
let regionEUElement = null;
let regionOldInfoElement = null;
let missionChecksumBaseElement = null;
let missionChecksumGenerateElement = null;
let missionTypeElement = null;
let missionFlagElement = null;
let missionRewardTypeElement = null;
let missionRewardValueInputWrapElement = null;
let missionRewardValueInputElement = null;
let missionRewardValueListWrapElement = null;
let missionRewardValueListElement = null;
let missionClientWrapElement = null;
let missionClientElement = null;
let missionTarget1WrapElement = null;
let missionTarget1Element = null;
let missionTarget2WrapElement = null;
let missionTarget2Element = null;
let missionTargetItemElement = null;
let missionDungeonElement = null;
let missionFloorElement = null;
let missionFixedElement = null;
let missionRestTypeElement = null;
let missionRestValueElement = null;
let missionSeedElement = null;
let missionTemplateWrapElement = null;
let missionTemplateElement = null;
let btnMissionRewardValueRandomElement = null;
let btnMissionSeedRandomElement = null;
let modeRandomRewardValueElement = null;
let modeRandomSeedElement = null;
let modeDSElement = null;
let modeAdvancedElement = null;
let advancedElements = null;

let btnDeployElement = null;
let btnGenerateElement = null;
let btnShareElement = null;
let passwordElement = null;
let errorMsgWrapElement = null;
let shareUrlElement = null;
let shareCopyBtnElement = null;

// choicesデータ
let pokemonChoicesData = null;
let itemChoicesData = null;
let typeChoicesData = null;
let dungeonChoicesData = null;
let fixedChoicesData = null;
const choicesInstances = [];

// modal
let shareModal = null;

// その他
let latestMissionData = null; // 最後に作成した依頼データ
let validationElements = null;
let advanced = false;
let prevMissionType = -1;
const filteringItem = []; // 絞り込み中の項目

/**
 * 予定:
 * ・最近作成したパスワードを保存、お気に入りを保存 (localStorage)
 */

document.addEventListener('DOMContentLoaded', async function () {
  resultPasswordElement = document.getElementById('result-password');

  versionSkyElement = document.getElementById('version-sky');
  versionOldElement = document.getElementById('version-old');
  regionJPElement = document.getElementById('region-jp');
  regionNAElement = document.getElementById('region-na');
  regionEUElement = document.getElementById('region-eu');
  regionOldInfoElement = document.getElementById('region-old-info');
  missionChecksumBaseElement = document.getElementById('mission-checksum-base');
  missionChecksumGenerateElement = document.getElementById('mission-checksum-generate');
  missionTypeElement = document.getElementById('mission-type');
  missionFlagElement = document.getElementById('mission-flag');
  missionRewardTypeElement = document.getElementById('mission-reward-type');
  missionRewardValueInputWrapElement = document.getElementById('mission-reward-value-input-wrap');
  missionRewardValueInputElement = document.getElementById('mission-reward-value-input');
  missionRewardValueListWrapElement = document.getElementById('mission-reward-value-list-wrap');
  missionRewardValueListElement = document.getElementById('mission-reward-value-list');
  missionClientWrapElement = document.getElementById('mission-client-wrap');
  missionClientElement = document.getElementById('mission-client');
  missionTarget1WrapElement = document.getElementById('mission-target-1-wrap');
  missionTarget1Element = document.getElementById('mission-target-1');
  missionTarget2WrapElement = document.getElementById('mission-target-2-wrap');
  missionTarget2Element = document.getElementById('mission-target-2');
  missionTargetItemElement = document.getElementById('mission-target-item');
  missionDungeonElement = document.getElementById('mission-dungeon');
  missionFloorElement = document.getElementById('mission-floor');
  missionFixedElement = document.getElementById('mission-fixed');
  missionRestTypeElement = document.getElementById('mission-rest-type');
  missionRestValueElement = document.getElementById('mission-rest-value');
  missionSeedElement = document.getElementById('mission-seed');
  missionTemplateWrapElement = document.getElementById('mission-template-wrap');
  missionTemplateElement = document.getElementById('mission-template');
  btnMissionRewardValueRandomElement = document.getElementById('btn-mission-reward-value-random');
  btnMissionSeedRandomElement = document.getElementById('btn-mission-seed-random');
  modeRandomRewardValueElement = document.getElementById('mode-random-reward-value');
  modeRandomSeedElement = document.getElementById('mode-random-seed');
  modeDSElement = document.getElementById('mode-ds');
  modeAdvancedElement = document.getElementById('mode-advanced');
  advancedElements = document.getElementsByClassName('advanced');

  btnDeployElement = document.getElementById('btn-deploy');
  btnGenerateElement = document.getElementById('btn-generate');
  btnShareElement = document.getElementById('btn-share');
  passwordElement = document.getElementById('password');
  errorMsgWrapElement = document.getElementById('error-msg-wrap');
  shareUrlElement = document.getElementById('share-url');
  shareCopyBtnElement = document.getElementById('share-copy-btn');
  validationElements = document.querySelectorAll(`
    #wondermail-generator select,
    #wondermail-generator input[type="radio"],
    #wondermail-generator input[type="checkbox"]
  `);

  shareModal = new bootstrap.Modal('#share-modal');

  // JSONデータ読込
  ({
    pokemon: window.PokemonData,
    item: window.ItemData,
    dungeon: window.DungeonData,
    floor: window.FloorData,
    type: window.TypeData,
    rescue: window.RescueData,
    message: window.MessageData,
  } = await getJsonDatas(['pokemon', 'item', 'dungeon', 'floor', 'type', 'rescue', 'message']));

  // イベント
  setEvent();

  // choices
  initChoices();

  // 初期化
  applyMissionTypeOptions();
  applyMissionFlagOptions();
  applyMissionRewardElements();
  applyMissionFloorElements();
  applyMissionRestValueElements();
  changeControlStatus();
  changeTemplateMonsters();
  refreshAdvancedMode();

  // バリデーション
  for (const element of validationElements) runValidation(element);
  changeDropdownBGColor();

  // 共有された依頼パスを展開してセット
  passwordExpansionByUrlParams();
});

/**
 * イベントリスナー
 */
function setEvent() {
  // バージョン
  const versionElements = [versionSkyElement, versionOldElement];
  for (const element of versionElements) {
    element.addEventListener('change', function () {
      applyMissionTypeOptions();
      applyMissionFlagOptions(true);
      changeControlStatus();
      setDungeonTreasureMemo(true);

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

  // 依頼タイプ
  missionTypeElement.addEventListener('change', function () {
    applyMissionFlagOptions();
    applyMissionFloorElements(true);
    changeControlStatus();
    changeTemplateMonsters();
  });

  // 依頼フラグ
  missionFlagElement.addEventListener('change', function () {
    changeControlStatus();
    changeTemplateMonsters();

    // 伝説の挑戦状の場合、対象1・対象2に対応するポケモン、固定フロアをセット
    changeMissionFlagFromLegendaryChallenge();
  });

  // 報酬タイプ
  missionRewardTypeElement.addEventListener('change', function () {
    applyMissionRewardElements();
  });
  btnMissionRewardValueRandomElement.addEventListener('click', function () {
    setRandomHex(missionRewardValueInputElement);
  });

  // 報酬値
  missionRewardValueInputElement.addEventListener('input', eventHexInput);

  // 依頼主
  missionClientElement.addEventListener('change', function () {
    changeControlStatus();
  });

  // ダンジョン
  missionDungeonElement.addEventListener('change', function () {
    applyMissionFloorElements();
  });

  // 制限タイプ
  missionRestTypeElement.addEventListener('change', function () {
    applyMissionRestValueElements();
  });

  // SEED
  missionSeedElement.addEventListener('input', eventHexInput);
  btnMissionSeedRandomElement.addEventListener('click', function () {
    setRandomHex(missionSeedElement);
  });

  // テンプレート
  missionTemplateElement.addEventListener('change', function () {
    applyTemplateValue();
  });

  // オプション
  modeRandomRewardValueElement.addEventListener('change', function () {
    missionRewardValueInputElement.disabled = this.checked;
    btnMissionRewardValueRandomElement.disabled = this.checked;
  });
  modeRandomSeedElement.addEventListener('click', function () {
    missionSeedElement.disabled = this.checked;
    btnMissionSeedRandomElement.disabled = this.checked;
  });

  // DSモード
  modeDSElement.addEventListener('click', async function (e) {
    const isDS = modeDSElement.checked;

    // 解除しようとした時に確認モーダルを表示
    if (!isDS) {
      e.preventDefault();
      const confirmResult = await showConfirmModal({
        title: window.translate.wondermail.other['DSMODE_WARNING_TITLE'],
        html: window.translate.wondermail.other['DSMODE_WARNING_BODYTEXT'],
      });
      if (!confirmResult) return; // 解除しないなら終了
      modeDSElement.checked = false;
    }
    changeTemplateMonsters();
    setDungeonTreasureMemo(true);
  });

  // Advancedモード
  modeAdvancedElement.addEventListener('change', function () {
    advanced = modeAdvancedElement.checked;
    changeControlStatus();
    applyMissionFloorElements(true);
    setDungeonTreasureMemo(true);
    refreshAdvancedMode();
  });

  // 展開
  btnDeployElement.addEventListener('click', function () {
    passwordExpansion();
  });

  // 生成
  btnGenerateElement.addEventListener('click', function () {
    passwordGenerate();
  });

  // シェア
  btnShareElement.addEventListener('click', function (e) {
    if (latestMissionData) {
      const isDS = modeDSElement.checked;
      const isAdvanced = modeAdvancedElement.checked;
      const encodePassword = latestMissionData.Password;
      const selectedRegionElement = document.querySelector('input[name="region"]:checked');
      const url = new URL(location.href);

      url.searchParams.set('password', encodePassword);
      url.searchParams.set('region', selectedRegionElement.value);
      url.searchParams.set('ds', isDS);
      url.searchParams.set('advanced', isAdvanced);
      shareUrlElement.textContent = url.toString();
      shareModal.show();
    } else {
      showAlertMsg(4, window.translate.wondermail.messages.share);
    }
  });
  // シェアURL
  shareUrlElement.addEventListener('click', function () {
    this.select();
  });
  // シェアコピーボタン
  shareCopyBtnElement.addEventListener('click', async function () {
    await navigator.clipboard.writeText(shareUrlElement.value);
    const baseBtnText = shareCopyBtnElement.textContent;
    shareCopyBtnElement.disabled = true;
    shareCopyBtnElement.textContent = window.translate.wondermail.messages.copied;
    setTimeout(() => {
      shareCopyBtnElement.disabled = false;
      shareCopyBtnElement.textContent = baseBtnText;
    }, 1500);
  });

  // select共通
  for (const element of validationElements) {
    element.addEventListener('change', function () {
      // 全体バリデーション
      for (const e of validationElements) {
        runValidation(e);
      }
      changeDropdownBGColor();
    });
  }
}

/**
 * パスワード展開処理
 * @param {string|null} [pass=null] 展開するパスワード(クエリパラメータ)
 */
function passwordExpansion(pass = null) {
  hideAlertMsg();
  const regionElement = document.querySelector('input[name="region"]:checked');
  const passStr = pass ?? passwordElement.value;
  const isSky = versionSkyElement.checked;
  const wm = new WonderMail();

  wm.Region = regionElement.value;
  wm.Sky = isSky;
  wm.Password = ConvertToHalfPassString(passStr);

  // パスワード未入力
  if (wm.Password.length <= 0) {
    showAlertMsg(3, window.translate.wondermail.messages.password.errorRequired);
    return;
  }
  // パスワード文字数不足
  const passLen = isSky ? 34 : 24;
  if (wm.Password.length !== passLen) {
    showAlertMsg(
      3,
      `${window.translate.wondermail.messages.password.errorInvalidLength} (${wm.Password.length}/${passLen})`,
    );
    return;
  }
  // パスワード対象文字以外が入力されたかチェック
  const checkStrIdx = checkPasswordString(wm.Password);
  if (checkStrIdx >= 0) {
    showAlertMsg(3, window.translate.wondermail.messages.password.errorInvalidCharacter);
    return;
  }

  // 展開した内容をセット
  wm.decode();
  missionTypeElement.value = wm.MissionType;
  applyMissionFlagOptions();
  missionFlagElement.value = wm.MissionFlag;
  missionRewardTypeElement.value = wm.RewardType;
  missionRewardValueInputElement.value = wm.RewardValue.toString(16).toUpperCase();
  choicesInstances[missionClientElement.id].setChoiceByValue(wm.Client);
  choicesInstances[missionTarget1Element.id].setChoiceByValue(wm.Target1);
  choicesInstances[missionTarget2Element.id].setChoiceByValue(wm.Target2);
  choicesInstances[missionTargetItemElement.id].setChoiceByValue(wm.TargetItem);
  choicesInstances[missionDungeonElement.id].setChoiceByValue(wm.Dungeon);
  applyMissionFloorElements(); // フロア項目の更新
  missionFloorElement.value = wm.Floor;
  choicesInstances[missionFixedElement.id].setChoiceByValue(wm.Fixed);
  missionRestTypeElement.value = wm.RestType;
  choicesInstances[missionRestValueElement.id].setChoiceByValue(wm.RestValue);
  missionSeedElement.value = wm.Seed.toString(16).toUpperCase();

  // [advanced] チェックサム更新
  refreshChecksum(wm.Checksum1, wm.Checksum2);

  applyMissionRewardElements(wm.RewardValue);
  applyMissionRestValueElements(wm.RestValue);
  changeControlStatus();

  // バリデーション・背景色更新
  for (const element of validationElements) runValidation(element);
  changeDropdownBGColor();

  // チェックサム不一致
  if (wm.Checksum1 != wm.Checksum2) {
    showAlertMsg(
      4,
      `${window.translate.wondermail.messages.password.warningChecksumMismatch}<br>
        ${window.translate.wondermail.messages.password.passwordChecksum}: <strong>${wm.Checksum1.toString(16).toUpperCase()}</strong> / ${window.translate.wondermail.messages.password.calculatedChecksum}: <strong>${wm.Checksum2.toString(16).toUpperCase()}</strong>`,
      0,
    );
  } else {
    // 正常完了
    showAlertMsg(2, window.translate.wondermail.messages.password.successExtract);
  }
  // テンプレート処理
  changeTemplateMonsters(true);

  // パスワードが引数から渡されてきた場合、パスワードをセット
  if (pass) {
    passwordElement.value = wm.Sky
      ? ConvertToMultiFormat(wm.Password, 5, 7, 5)
      : ConvertToMultiFormat(wm.Password, 4, 4, 4);
  }

  // 展開した依頼データをセット
  latestMissionData = wm;
}

/**
 * パスワード生成処理
 */
function passwordGenerate() {
  hideAlertMsg();
  const regionElement = document.querySelector('input[name="region"]:checked');
  const rewardMode = parseInt(missionRewardTypeElement.options[missionRewardTypeElement.selectedIndex].dataset.mode);
  const wm = new WonderMail();

  // 報酬値ランダム化
  if (rewardMode == 0 && modeRandomRewardValueElement.checked) {
    setRandomHex(missionRewardValueInputElement);
  }

  // SEEDランダム化
  if (modeRandomSeedElement.checked) {
    setRandomHex(missionSeedElement);
  }

  wm.Region = regionElement.value;
  wm.Sky = versionSkyElement.checked;
  wm.MissionType = parseInt(missionTypeElement.value);
  wm.MissionFlag = parseInt(missionFlagElement.value);
  wm.RewardType = parseInt(missionRewardTypeElement.value);
  wm.RewardValue =
    rewardMode == 0
      ? parseInt(missionRewardValueInputElement.value, 16)
      : parseInt(missionRewardValueListElement.value);
  wm.Client = parseInt(missionClientElement.value);
  wm.Target1 = parseInt(missionTarget1Element.value);
  wm.Target2 = parseInt(missionTarget2Element.value);
  wm.TargetItem = parseInt(missionTargetItemElement.value);
  wm.Dungeon = parseInt(missionDungeonElement.value);
  wm.Floor = parseInt(missionFloorElement.value);
  wm.Fixed = parseInt(missionFixedElement.value);
  wm.RestType = parseInt(missionRestTypeElement.value);
  wm.RestValue = parseInt(missionRestValueElement.value);
  wm.Seed = parseInt(missionSeedElement.value, 16);

  wm.encode();
  passwordElement.value = wm.Sky
    ? ConvertToMultiFormat(wm.Password, 5, 7, 5)
    : ConvertToMultiFormat(wm.Password, 4, 4, 4);

  // [advanced] チェックサム更新 (生成なので同じもの)
  refreshChecksum(wm.Checksum1, wm.Checksum1);

  showAlertMsg(2, window.translate.wondermail.messages.password.successGenerate);

  // 生成した依頼データをセット
  latestMissionData = wm;
}

/**
 * Choices初期化, 再セット
 */
function initChoices() {
  // オプション
  const choicesOptionsWM = {
    ...choicesOptions,
    callbackOnCreateTemplates: function (template, escapeForTemplate, getClassNames) {
      return {
        item: ({ classNames }, data) => {
          const listType = data.customProperties.listType ?? '';
          const errorType = data.customProperties.errorType ?? '';
          return template(`
          <div class="${getClassNames(classNames.item).join(' ')} ${getClassNames(
            data.highlighted ? classNames.highlightedState : classNames.itemSelectable,
          ).join(' ')} ${
            data.placeholder ? classNames.placeholder : ''
          }" data-item data-id="${data.id}" data-value="${data.value}" ${
            data.active ? 'aria-selected="true"' : ''
          } ${data.disabled ? 'aria-disabled="true"' : ''} data-listtype="${listType}" data-errortype="${errorType}">
            <span>${data.label}</span>
          </div>
        `);
        },
        choice: ({ classNames }, data) => {
          const listType = data.customProperties.listType ?? '';
          const errorType = data.customProperties.errorType ?? '';
          const errorValue = data.customProperties.errorValue ?? '';
          const oversize = listType == 'pokemon' ? data.customProperties.oversize : false;
          const gender = data.customProperties.gender ?? 0;
          return template(`
          <div class="
          ${getClassNames(classNames.item).join(' ')} ${getClassNames(classNames.itemChoice).join(' ')} ${getClassNames(
            data.disabled ? classNames.itemDisabled : classNames.itemSelectable,
          ).join(' ')}" data-choice ${
            data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'
          } data-id="${data.id}" data-value="${data.value}" ${
            data.groupId > 0 ? 'role="treeitem"' : 'role="option"'
          } data-listtype=${listType} data-errortype="${errorType}" data-oversize="${oversize}" data-gender="${gender}">
            <span>${data.label}</span>
          </div>
          `);
        },
      };
    },
  };

  // 項目データ取得
  pokemonChoicesData = getPokemonChoicesData();
  itemChoicesData = getitemChoicesData();
  dungeonChoicesData = getDungeonChoicesData();
  typeChoicesData = getTypeChoicesData();
  fixedChoicesData = getFixedChoicesData();

  const pokemonClientChoicesData = getPokemonChoicesData(true);

  // choices対象要素
  const choicesElements = [
    // {
    //   element: missionRewardValueItemListElement,
    //   data: itemChoicesData,
    //   options: choicesOptionsWM,
    // },
    // {
    //   element: missionRewardValuePokeListElement,
    //   data: pokemonChoicesData,
    //   options: choicesOptionsWM,
    // },
    {
      element: missionRewardValueListElement,
      data: null,
      options: choicesOptionsWM,
    },
    {
      element: missionClientElement,
      data: pokemonClientChoicesData,
      default: 1,
      options: choicesOptionsWM,
    },
    {
      element: missionTarget1Element,
      data: pokemonChoicesData,
      default: 1,
      options: choicesOptionsWM,
    },
    {
      element: missionTarget2Element,
      data: pokemonChoicesData,
      options: choicesOptionsWM,
    },
    {
      element: missionTargetItemElement,
      data: itemChoicesData,
      default: 0x46, // オレンのみ
      options: choicesOptionsWM,
    },
    {
      element: missionDungeonElement,
      data: dungeonChoicesData,
      default: 1,
      options: choicesOptionsWM,
    },
    {
      element: missionFixedElement,
      data: fixedChoicesData,
      default: 0,
    },
    {
      element: missionRestValueElement,
      data: null,
      options: choicesOptionsWM,
    },
  ];

  for (const choicesInfo of choicesElements) {
    const keepValue = parseInt(choicesInfo.element.value);

    // choices.js インスタンス化 (再度行わない)
    if (!(choicesInfo.element.id in choicesInstances)) {
      if (choicesInfo.options) {
        choicesInstances[choicesInfo.element.id] = new Choices(choicesInfo.element, choicesInfo.options);
      } else {
        choicesInstances[choicesInfo.element.id] = new Choices(choicesInfo.element, choicesOptions);
      }
    }

    // 項目をセット
    if (choicesInfo.data) {
      choicesInstances[choicesInfo.element.id].clearChoices();
      choicesInstances[choicesInfo.element.id].setChoices(choicesInfo.data, 'value', 'label', true, true, true);
    }

    // 初回は初期値を設定
    if (choicesInfo.default && !isNaN(parseInt(choicesInfo.default))) {
      choicesInstances[choicesInfo.element.id].setChoiceByValue(choicesInfo.default);
    }
  }

  // 報酬値の項目を更新
  applyMissionRewardElements();
}

/**
 * [choices.js] ポケモンの項目をセット
 * @param {String} type client=依頼主, target1=対象1, target2=対象2
 * @param {Number[]} filter 配列の内容で絞り込み (未指定の場合、全ポケモン対象)
 * @param {Number} value デフォルト値 (未指定の場合、絞り込みなし: 1, 絞り込みあり: 最初の項目)
 * @returns
 */
function setChoicesForPokemon(type, filter = [], value = -1) {
  if (!PokemonData) {
    console.error('PokemonData not found');
    return;
  }

  let choicesDatas = [];
  let element = null;
  switch (type) {
    case 'client':
      choicesDatas = getPokemonChoicesData(true, filter);
      element = missionClientElement;
      break;
    case 'target1':
      choicesDatas = getPokemonChoicesData(false, filter);
      element = missionTarget1Element;
      break;
    case 'target2':
      choicesDatas = getPokemonChoicesData(false, filter);
      element = missionTarget2Element;
      break;
  }

  if (choicesDatas && element) {
    // 項目をセット
    choicesInstances[element.id].clearChoices();
    choicesInstances[element.id].setChoices(choicesDatas, 'value', 'label', true, true, true);
    // デフォルト値をセット
    let defaultValue = value >= 0 ? value : 1; // 未指定の場合は1
    if (value < 0 && filter) {
      // 絞り込まれている場合、デフォルト値を絞り込んでいる要素の最初の値にする
      defaultValue = Number(filter[0]);
      filteringItem.push(element.id); // 絞り込み中
    } else {
      filteringItem.filter((x) => x !== element.id); // 絞り込み解除
    }
    choicesInstances[element.id].setChoiceByValue(defaultValue);
    // バリデーション
    runValidation(element);
  }
}

/**
 * バージョンが「空」であるか
 * @returns
 */
function isVersionSky() {
  return versionSkyElement.checked;
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

  const isSky = isVersionSky();
  const missionType = parseInt(missionTypeElement.value);
  const missionFlag = parseInt(missionFlagElement.value);
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
    let errorType = '';

    const bannedStatus = mechanics.isMissionUsablePokemon(i, 0, isClient, isSky);
    switch (bannedStatus) {
      case 1: // 禁止ポケモン
      case 2: // 使用不可 (ピンクセレビィ, 紫カクレオン)
      case 3: // 大きさ制限
      case 4: // フォルム違い
        errorType = 'banned';
        break;
      case 5: // 無効
      case 6: // インデックス範囲外
        errorType = 'invalid';
        break;
    }

    result.push({
      value: i,
      label: `[${i.toString(16).padStart(3, '0').toUpperCase()}] ${pokemonName}${pokemonSubName ? ` - ${pokemonSubName}` : ''} (${genderTranslates[genderId]})`,
      selected: i == 0,
      customProperties: {
        listType: 'pokemon',
        errorType: errorType,
        oversize: mechanics.isMissionUsablePokemon(i, 2, 1, true) == 3,
        gender: genderId,
      },
    });
  }
  return result;
}

/**
 * [choices.js] 道具項目データを取得
 * @returns
 */
function getitemChoicesData() {
  if (!ItemData) {
    console.error('ItemData not found');
    return;
  }

  const result = [];
  for (let i = 0; i < ItemData.length; i++) {
    let errorType = '';

    const bannedStatus = isBannedItem(i);
    switch (bannedStatus) {
      case 1: // 禁止道具
        errorType = 'banned';
        break;
      case 2: // 無効
        errorType = 'invalid';
        break;
      case 3: // 空限定
        errorType = 'skyonly';
        break;
    }

    result.push({
      value: i,
      label: `[${i.toString(16).padStart(3, '0').toUpperCase()}] ${formatRemoveTagString(MessageData[window.PARAMS['MESSAGE_ITEM_NAME_INDEX'] + i])}`,
      selected: i == 0,
      customProperties: {
        listType: 'item',
        errorType: errorType,
      },
    });
  }
  return result;
}

/**
 * [choices.js] ダンジョン項目データを取得
 * @returns
 */
function getDungeonChoicesData(treasure = false) {
  if (!DungeonData) {
    console.error('DungeonData not found');
    return;
  }

  let datas = DungeonData;
  const isDS = modeDSElement.checked;

  // おたからメモの場合、おたからメモが使えるダンジョンのみに絞り込む
  if (treasure && isDS) datas = DungeonData.filter((x) => params.MISSION_TREASURE_MEMO_DUNGEON.includes(x.Id));

  const result = [];
  for (const dungeon of datas) {
    let errorType = '';

    const bannedStatus = isBannedDungeon(dungeon.Id);
    switch (bannedStatus) {
      case 1: // 道場ダンジョン
        // case 2: // 続きのダンジョン
        errorType = 'banned';
    }

    result.push({
      value: dungeon.Id,
      label: `[${dungeon.Id.toString(16).padStart(2, '0').toUpperCase()}] ${formatRemoveTagString(MessageData[window.PARAMS['MESSAGE_DUNGEON_FULL_NAME_INDEX'] + dungeon.Id])}`,
      selected: dungeon.Id == 1,
      customProperties: {
        listType: 'dungeon',
        errorType: errorType,
      },
    });
  }
  return result;
}

/**
 * おたからメモ用ダンジョンに切り替える
 * @returns
 */
function setDungeonTreasureMemo(forced = false) {
  const missionType = parseInt(missionTypeElement.value);
  const isDS = modeDSElement.checked;
  const isSky = isVersionSky();

  if (!forced) {
    // 前回/今回が0xC以外なら無視
    if (prevMissionType != 0xc && missionType != 0xc) {
      return;
    }
    // 前回/今回が両方0xCなら無視
    if (prevMissionType == 0xc && missionType == 0xc) {
      return;
    }
  }

  // ダンジョン値を保持
  const value = parseInt(missionDungeonElement.value);
  // choicesデータをセット (DSモード以外の場合は通常版を使う)
  const data = getDungeonChoicesData(isSky && missionType == 0xc && isDS);
  choicesInstances[missionDungeonElement.id].init();
  choicesInstances[missionDungeonElement.id].setChoices(data, 'value', 'label', true, true, true);

  // 保持した値を復元 (切替先ダンジョン群に無ければ初期値のままにする)
  if (data.some((x) => x.value === value)) {
    choicesInstances[missionDungeonElement.id].setChoiceByValue(value);
    applyMissionFloorElements(true);
  } else {
    // 初期値にする => ダンジョンが変わることを考慮し、フロア値を初期化
    applyMissionFloorElements();
  }
  runValidation(missionDungeonElement);
  runValidation(missionFloorElement);
}

/**
 * [choices.js] タイプ項目データを取得
 * @returns
 */
function getTypeChoicesData() {
  if (!TypeData) {
    console.error('TypeData not found');
    return;
  }

  const result = [];
  for (let i = 0; i < TypeData.length; i++) {
    result.push({
      value: i,
      label: `[${i.toString(16).padStart(2, '0').toUpperCase()}] ${formatRemoveTagString(MessageData[window.PARAMS['MESSAGE_TYPE_NAME_INDEX'] + i])}`,
      selected: i == 0,
      customProperties: {},
    });
  }
  return result;
}

/**
 * [choices.js] 固定フロア項目データを取得
 * @returns
 */
function getFixedChoicesData() {
  const fixedNames = generateFixedFloorNames();
  const result = [];
  for (let i = 0; i < fixedNames.length; i++) {
    result.push({
      value: i,
      label: `[${i.toString(16).padStart(2, '0').toUpperCase()}] ${fixedNames[i]}`,
      selected: i == 0,
      customProperties: {},
    });
  }
  return result;
}

/**
 * 依頼タイプの要素をセット (バージョンで変動)
 */
function applyMissionTypeOptions() {
  const selectedValue = parseInt(missionTypeElement.value);
  const isSky = isVersionSky();
  let types = params.missionTypes;
  let value = !isNaN(selectedValue) ? selectedValue : 0;

  // 時闇の場合、空のみの項目を除外
  if (!isSky) {
    let newTypes = [];
    for (let i = 0; i < params.missionTypes.length; i++) {
      if (!params.missionTypes[i].isSkyOnly) {
        newTypes.push(params.missionTypes[i]);
      } else if (i == value) value = 0; // 空限定の項目を選択している場合は0
    }
    types = newTypes;
  }

  // 要素作成
  let elements = '';
  for (let i = 0; i < types.length; i++) {
    elements += `
      <option value="${types[i].id}">[${i.toString(16).padStart(2, '0').toUpperCase()}] ${window.translate.wondermail.missionTypes[types[i].id]}</option>
    `;
  }

  missionTypeElement.innerHTML = elements;
  missionTypeElement.value = value;
}

/**
 * 依頼フラグの要素をセット
 */
function applyMissionFlagOptions(keep = false) {
  const isSky = isVersionSky();
  const flagData = isSky ? params.missionFlag : params.missionFlagOld;
  const missionTypeElementValue = parseInt(missionTypeElement.value);
  const missionTypeValue = !isNaN(missionTypeElementValue) ? missionTypeElementValue : 0;
  const missionType = params.missionTypes[missionTypeValue];
  const missionFlagElementValue = parseInt(missionFlagElement.value);
  const missionFlag = !isNaN(missionFlagElementValue) ? missionFlagElementValue : 0;
  const flags = flagData[missionType.flag];

  // 要素作成
  let elements = '';
  for (let i = 0; i < flags.length; i++) {
    elements += `
      <option value="${i}">[${i.toString(16).padStart(2, '0').toUpperCase()}] ${
        isSky
          ? window.translate.wondermail.missionFlag[missionType.flag][i]
          : window.translate.wondermail.missionFlagOld[missionType.flag][i]
      }</option>
    `;
  }

  missionFlagElement.innerHTML = elements;
  if (keep && missionFlag < flags.length) {
    missionFlagElement.value = missionFlag;
  } else {
    missionFlagElement.value = 0;
  }
}

/**
 * 報酬タイプに応じて報酬の表示と内容を切り替える
 */
function applyMissionRewardElements(value = -1) {
  const mode = parseInt(missionRewardTypeElement.options[missionRewardTypeElement.selectedIndex].dataset.mode);

  // 表示切替
  switch (mode) {
    case 0: // ポケ, タマゴ
      missionRewardValueInputWrapElement.classList.remove('d-none');
      missionRewardValueListWrapElement.classList.add('d-none');
      break;
    case 1: // 道具
    case 2: // ポケモン
      missionRewardValueInputWrapElement.classList.add('d-none');
      missionRewardValueListWrapElement.classList.remove('d-none');
      choicesInstances[missionRewardValueListElement.id].init();

      const choicesData = mode == 1 ? itemChoicesData : pokemonChoicesData;
      choicesInstances[missionRewardValueListElement.id].setChoices(choicesData, 'value', 'label', true, true, true);

      // 値を保持
      if (value >= 0) choicesInstances[missionRewardValueListElement.id].setChoiceByValue(value);
      break;
  }
}

/**
 * ダンジョンに応じてフロアの項目を切り替える
 * @param {boolean} [keep=false] true: 保持する
 * @returns
 */
function applyMissionFloorElements(keep = false) {
  if (!DungeonData) {
    console.error('DungeonData not found');
    return;
  }
  if (!FloorData) {
    console.error('FloorData not found');
    return;
  }

  const missionType = params.missionTypes[missionTypeElement.value];
  const dungeon = DungeonData[missionDungeonElement.value];
  const floorPrev = dungeon.FloorPrev + 1;
  const floors = FloorData[dungeon.MappaIndex].slice(floorPrev, floorPrev + dungeon.FloorCount);
  const defaultFloorValue = 1;
  const keepFloorValue = missionFloorElement.value;
  const isAdvanced = modeAdvancedElement?.checked ?? false;

  let result = '';
  const maxFloor = !isAdvanced ? floors.length : 255;
  for (let i = 0; i <= maxFloor; i++) {
    if (!isAdvanced && (i <= 0 || i > floors.length)) continue;

    const floor = floors[i - 1] ?? null;
    if (floor) {
      const floorId = floor.FloorNo - dungeon.FloorPrev;
      const difficult =
        params.difficult[
          Math.min(floor.MissionRankId + (missionType.isDifficult ? 1 : 0), params.difficult.length - 1)
        ];

      result += `
      <option value="${i}">
        ${dungeon.FlagStairs ? '' : 'B'}${i}F:
        ${difficult.name} (${difficult.value})
        ${isDungeonFixedFloor(dungeon.Id, floorId) ? '※' : ''}
      </option>
    `;
    } else if (isAdvanced) {
      result += `
      <option value="${i}">
        ${dungeon.FlagStairs ? '' : 'B'}${i}F *
      </option>
      `;
    }
  }

  // 変更があれば適用
  if (missionFloorElement.innerHTML != result) {
    missionFloorElement.innerHTML = result;
  }

  // フロアの値を保持する
  if (keep && keepFloorValue >= 0) {
    missionFloorElement.value = keepFloorValue;
  } else {
    missionFloorElement.value = defaultFloorValue;
  }
  // 該当する値が無ければ最初の項目をセット
  if (!missionFloorElement.value) {
    missionFloorElement.selectedIndex = 0;
  }
}

/**
 * 制限タイプに応じて制限の内容を切り替える
 */
function applyMissionRestValueElements(value = -1) {
  choicesInstances[missionRestValueElement.id].init();
  if (missionRestTypeElement.value == 0) {
    choicesInstances[missionRestValueElement.id].setChoices(typeChoicesData, 'value', 'label', true, true, true);
  } else {
    choicesInstances[missionRestValueElement.id].setChoices(pokemonChoicesData, 'value', 'label', true, true, true);
  }
  if (value >= 0) choicesInstances[missionRestValueElement.id].setChoiceByValue(value);
}

/**
 * 項目の状態を制御
 * @returns
 */
function changeControlStatus() {
  // 上級者モードの場合強制的に活性化して終了
  if (advanced) {
    for (const choice of Object.values(choicesInstances)) choice.enable();
    return;
  }
  const missionTypeValue = missionTypeElement.value;
  const missionFlagValue = missionFlagElement.value;
  const missionType = params.missionTypes[missionTypeValue];
  const isSky = isVersionSky();

  // 依頼主と対象ポケモンが同じ
  if (missionType.isSameClient) {
    choicesInstances[missionTarget1Element.id].disable();
    choicesInstances[missionTarget1Element.id].setChoiceByValue(parseInt(missionClientElement.value));
  } else {
    choicesInstances[missionTarget1Element.id].enable();
  }

  // [0A]お尋ね者を捕まえる + [06]アジトで戦う
  // [0B]挑戦状を受ける + [00]通常の挑戦状
  // いずれかの時、対象ポケモンの2匹目を有効
  if (
    isSky &&
    ((missionTypeValue == 10 && missionFlagValue == 6) || (missionTypeValue == 11 && missionFlagValue == 0))
  ) {
    choicesInstances[missionTarget2Element.id].enable();
  } else {
    choicesInstances[missionTarget2Element.id].disable();
    choicesInstances[missionTarget2Element.id].setChoiceByValue(0);
  }

  // 固定フロアが有効
  if (isSky && (missionType.isUsedFixed || (missionTypeValue == 10 && missionFlagValue == 6))) {
    choicesInstances[missionFixedElement.id].enable();
  } else {
    choicesInstances[missionFixedElement.id].disable();
    choicesInstances[missionFixedElement.id].setChoiceByValue(choicesInstances[missionFixedElement.id].default);
  }

  // おたからメモ
  if (isSky) {
    setDungeonTreasureMemo();
  }

  prevMissionType = missionTypeValue;
}

/**
 * ドロップダウンメニューの背景色を制御する
 */
function changeDropdownBGColor() {
  const isSky = isVersionSky();
  const missionType = parseInt(missionTypeElement.value);
  const isClient = true; // 依頼主フラグ (常にtrue)

  // 禁止ポケモン判定をスキップ
  if (isAllowBannedPokemon(isClient)) {
    document.documentElement.style.setProperty('--bg-color-banned-pokemon', 'var(--bs-body-bg)');
  } else {
    document.documentElement.style.setProperty('--bg-color-banned-pokemon', '');
  }

  // 依頼主同行系で身体の大きさ制限に引っかかるならエラーとする
  if (isClient && ((missionType + 0xfe) & 0xff) < 4) {
    document.documentElement.style.setProperty('--bg-color-oversize-pokemon', '');
  } else {
    document.documentElement.style.setProperty('--bg-color-oversize-pokemon', 'var(--bs-body-bg)');
  }

  // 時闇なら時闇限定の道具をエラーとする
  if (isSky) {
    document.documentElement.style.setProperty('--bg-color-skyonly-item', 'var(--bs-body-bg)');
  } else {
    document.documentElement.style.setProperty('--bg-color-skyonly-item', '');
  }
}

/**
 * ポケモン関連のテンプレート制御
 * @param {boolean} [expansion=false] パスワード展開処理から実行したか
 * @returns
 */
function changeTemplateMonsters(expansion = false) {
  if (!PokemonData) {
    console.error('PokemonData not found');
    return;
  }
  if (!RescueData) {
    console.error('RescueData not found');
    return;
  }

  const missionType = missionTypeElement.value;
  const missionFlag = missionFlagElement.value;
  const isSky = isVersionSky();
  const isDS = modeDSElement.checked;
  let skip = false;
  let visible = false;
  let clientFilter = [];

  // フリーズしない依頼はスキップ
  if (missionType >= 0x0 && missionType <= 0x9) skip = true;

  // 依頼テンプレートパターン
  const missionTemplates = RescueData.MissionCategory.flatMap((x) => x.MissionTemplates);
  const patterns = [];

  if (isSky && isDS && !skip) {
    let output = '';
    const filter = missionTemplates.filter(
      (x) =>
        x.MissionType == missionType &&
        x.MissionSubType == missionFlag &&
        !x.TemplateClientData1.None &&
        !x.TemplateClientData2.None,
    );
    const filterFixedClient = filter.filter(
      (x) =>
        x.TemplateClientData2.PokemonId > 0 &&
        x.TemplateTargetData2.PokemonId == 0 &&
        x.TargetBackupData2.PokemonId == 0,
    );

    if (filter) {
      // 依頼主のみ固定
      if (filterFixedClient?.length) {
        clientFilter = filterFixedClient.map((x) => x.TemplateClientData2.PokemonId);
      }
      // それ以外はテンプレート
      else {
        for (let i = 0; i < filter.length; i++) {
          const template = filter[i];
          const client = template.TemplateClientData2.PokemonId;
          const target1 = template.TemplateTargetData2.PokemonId;
          const target2 = template.TargetBackupData2.PokemonId;
          let clientTable = [];
          const clientTableIndex = template.TemplateClientData2.TemplateClientTableId;
          const clientTableLength = template.TemplateClientData1.TemplateClientTableId;
          let target1Table = [];
          const target1TableIndex = template.TemplateTargetData2.TemplateTargetTableId;
          const target1TableLength = template.TemplateTargetData1.TemplateTargetTableId;
          let target2Table = [];
          const target2TableIndex = template.TargetBackupData2.TemplateTargetTableId;
          const target2TableLength = template.TargetBackupData1.TemplateTargetTableId;

          // テーブル取得
          if (clientTableLength > 0) {
            clientTable = RescueData.Monsters.slice(clientTableIndex, clientTableIndex + clientTableLength);
          }
          if (target1TableLength > 0) {
            target1Table = RescueData.Monsters.slice(target1TableIndex, target1TableIndex + target1TableLength);
          }
          if (target2TableLength > 0) {
            target2Table = RescueData.Monsters.slice(target2TableIndex, target2TableIndex + target2TableLength);
          }

          // パターン作成
          const candidates1 = client > 0 ? [client] : clientTable.length ? clientTable : [0];
          const candidates2 = target1 > 0 ? [target1] : target1Table.length ? target1Table : [0];
          const candidates3 = target2 > 0 ? [target2] : target2Table.length ? target2Table : [0];
          for (const a of candidates1) {
            for (const b of candidates2) {
              for (const c of candidates3) {
                const pattern = [a, b, c];
                const monsters = [];
                patterns.push(pattern); // デバッグ用

                for (const p of pattern) {
                  if (p > 0) {
                    const pokemonSubName = window.translate.pokemon.subname[p % 600] ?? '';
                    monsters.push(
                      `${MessageData[window.PARAMS.MESSAGE_POKEMON_NAME_INDEX + (p % 600)]}${pokemonSubName ? `(${pokemonSubName})` : ''}`,
                    );
                  }
                }
                const label = monsters.join(' / ');
                if (label.length > 0) {
                  output += `
                <option data-client="${a}" data-target-1="${b}" data-target-2="${c}">
                  ${label}
                </option>
              `;
                }
              }
            }
          }
        }
      }
    }

    // パスワード展開から実行された場合、値に一致する項目を選択
    // 一致するものが無い場合、警告メッセージを表示
    let expansionTemplateIdx = -1;
    if (expansion) {
      const client = parseInt(missionClientElement.value);
      let target1 = parseInt(missionTarget1Element.value);
      const target2 = parseInt(missionTarget2Element.value);
      if (missionType == 0xb && target1 == client) {
        target1 = 0;
      }

      const template = [client, target1, target2];
      expansionTemplateIdx = patterns.findIndex(
        (x) => x.length === template.length && x.every((v, i) => v === template[i]),
      );
    }

    if (output.length > 0) visible = true;
    missionTemplateElement.innerHTML = output;

    if (expansion && visible) {
      if (expansionTemplateIdx >= 0) {
        missionTemplateElement.selectedIndex = expansionTemplateIdx;
      } else {
        showAlertMsg(4, window.translate.wondermail.messages.template);
      }
    }
  }

  // 依頼主を絞り込み
  if (clientFilter.length) {
    setChoicesForPokemon('client', clientFilter);
  } else {
    setChoicesForPokemon('client', [], Number(missionClientElement.value)); // 元に戻す
  }

  // テンプレートを表示する場合、依頼主・対象1・対象2を非表示
  if (visible) {
    missionTemplateWrapElement.classList.remove('d-none');
    missionClientWrapElement.classList.add('d-none');
    missionTarget1WrapElement.classList.add('d-none');
    missionTarget2WrapElement.classList.add('d-none');
    applyTemplateValue();
  } else {
    missionTemplateWrapElement.classList.add('d-none');
    missionClientWrapElement.classList.remove('d-none');
    missionTarget1WrapElement.classList.remove('d-none');
    missionTarget2WrapElement.classList.remove('d-none');
  }
}

/**
 * (依頼フラグchange用) 伝説の挑戦状のデフォルト値セット
 */
function changeMissionFlagFromLegendaryChallenge() {
  const missionType = parseInt(missionTypeElement.value);
  const missionFlag = parseInt(missionFlagElement.value);
  if (missionType == 0xb) {
    const missionClient = parseInt(missionClientElement.value);
    let fixedFloorId = 0;
    choicesInstances[missionTarget1Element.id].setChoiceByValue(missionClient);
    choicesInstances[missionTarget2Element.id].setChoiceByValue(0);
    switch (missionFlag) {
      case 1: // ミュウツー
        fixedFloorId = 0x91;
        break;
      case 2: // エンテイ
        fixedFloorId = 0x92;
        break;
      case 3: // ライコウ
        fixedFloorId = 0x93;
        break;
      case 4: // スイクン
        fixedFloorId = 0x94;
        break;
      case 5: // ジラーチ
        fixedFloorId = 0x95;
        break;
    }
    choicesInstances[missionFixedElement.id].setChoiceByValue(fixedFloorId);
  }
}

/**
 * 禁止ポケモンを許可するか (バージョン, 依頼タイプ, 依頼フラグにて判定)
 * @returns
 */
function isAllowBannedPokemon(isClient) {
  const isSky = isVersionSky();
  const missionType = parseInt(missionTypeElement.value);

  // [0A]お尋ね者を捕まえる (依頼主以外)
  // [0A]お尋ね者を捕まえる and 依頼主絞り込み中
  // [0E]その他 特別指令など (時闇の場合0xC)
  // [0B]挑戦状を受ける (時闇は無し)
  // これらの場合は禁止ポケモン判定をスキップ
  return (
    (missionType == 10 && !isClient) ||
    (missionType == 10 && isClient && filteringItem.includes(missionClientElement.id)) ||
    missionType == (isSky ? 0xe : 0xc) ||
    (isSky && missionType == 0xb)
  );
}

/**
 * バリデーション
 * @param {Element} element バリデーション対象要素
 * @returns
 */
function runValidation(element) {
  const isSky = isVersionSky();
  const errorMsgClassName = 'error-msg';
  let error;
  let errorMsg;
  let isInvalidGenderError = false; // 性別無効エラー

  if (element.id in choicesInstances) {
    const value = choicesInstances[element.id].getValue();
    if (!value) {
      // console.log('valueがないよ');
      return;
    }
    if (!value.customProperties) {
      // console.log('カスタムプロパティがないよ');
      return;
    }

    const errorType = value.customProperties.errorType ?? '';
    const listType = value.customProperties.listType ?? '';
    const floating = element.closest('.form-floating');
    const choicesInner = element.closest('.choices__inner');

    const isClient = element.id == missionClientElement.id;
    switch (listType) {
      case 'pokemon':
        const pokemonId = parseInt(element.value);
        const pokemon = PokemonData[pokemonId % 600];
        const gender = pokemon.Genders[Math.min(Math.floor(pokemonId / 600), pokemon.Genders.length - 1)];
        if (pokemonId > 0 && gender == 0) {
          error = 1;
          errorMsg = window.translate.wondermail.messages.pokemonInvalidGender; // 性別無効エラー
          isInvalidGenderError = true;
        } else {
          error = mechanics.isMissionUsablePokemon(
            pokemonId,
            parseInt(missionTypeElement.value),
            isClient,
            versionSkyElement.checked,
          );
          errorMsg = window.translate.wondermail.messages.pokemon[error];
        }
        break;
      case 'item':
        error = isBannedItem(parseInt(element.value));
        errorMsg = window.translate.wondermail.messages.item[error];
        break;
      case 'dungeon':
        error = isBannedDungeon(parseInt(element.value));
        errorMsg = window.translate.wondermail.messages.dungeon[error];
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
      // 性別無効以外かつ禁止ポケモンが許可されていればスキップ
      if (listType == 'pokemon' && !isInvalidGenderError && isAllowBannedPokemon(isClient)) return;
      // 空限定道具
      if (listType == 'item' && errorType == 'skyonly' && isSky) return;

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
  // フロア
  else if (element === missionFloorElement) {
    const dungeonId = parseInt(missionDungeonElement.value);
    const floorId = parseInt(element.value);
    if (isDungeonFixedFloor(dungeonId, floorId)) {
      error = 1;
      errorMsg = window.translate.wondermail.messages.floor;
    }

    // 既にエラーメッセージが出ている場合はエラー表示を消す
    const floating = element.closest('.form-floating');
    const floatingNext = floating.nextElementSibling;
    if (floatingNext && floatingNext.classList.contains(errorMsgClassName)) {
      floatingNext.remove();
      element.classList.remove('border-danger');
    }
    if (error > 0 && !element.disabled) {
      const errorElement = document.createElement('span');
      errorElement.classList.add(errorMsgClassName);
      errorElement.classList.add('text-danger');
      errorElement.innerHTML = `
        <i class="bi bi-exclamation-circle-fill me-1"></i>${errorMsg}
      `;
      floating.insertAdjacentElement('afterend', errorElement);
      element.classList.add('border-danger');
    }
  }
}

/**
 * [inputイベント用] 16進数に入力制限しつつ上限処理を行う
 * @param {*} e
 */
function eventHexInput(e) {
  const element = e.target;
  const max = parseInt(element.dataset.hexMax, 16);
  let value = element.value;

  // 入力制限
  value = value.replace(/[^0-9a-fA-F]/g, '');

  // 最大値を超える場合、最大値にする
  if (parseInt(value, 16) > max) value = max.toString(16);

  // 大文字化
  value = value.toUpperCase();
  element.value = value;
}

/**
 * 対象の要素に乱数をセット
 * @param {Element} element
 */
function setRandomHex(element, max = -1) {
  // 最大値が未指定かつdata-hex-maxがある場合、data-hex-maxから最大値を取得
  if (max < 0 && element.dataset.hexMax) {
    max = parseInt(element.dataset.hexMax, 16);
  }
  element.value = getRandomValue(max).toString(16).toUpperCase();
}

/**
 * 最大値を指定して乱数を取得
 * @param {*} max 最大値
 * @returns [0～最大値] のランダムな値
 */
function getRandomValue(max) {
  return Math.floor(Math.random() * (max + 1));
}

/**
 * 禁止ポケモンチェック
 * @param {*} x
 * @returns 0=許可, 1=禁止ポケモン対象, 2=その他
 */
function isBannedPokemon(x) {
  const species = getBaseForm(x);
  if (species != x) {
    return 2;
  }
  if (species >= 0x482 || species == 0) return 2;
  if (species >= 0x216 && species <= 0x257) return 2;
  if (species >= 0x216 + 600 && species <= 0x257 + 600) return 2;

  for (let i = 0; i < params.MISSION_BANNED_MONSTERS.length; i++) {
    if (species % 600 == params.MISSION_BANNED_MONSTERS[i]) return 1;
  }
  return 0;
}

/**
 * 禁止道具チェック
 * @param {*} x
 * @returns 0=許可, 1=禁止, 2=無効, 3=空限定
 */
function isBannedItem(x) {
  if (!ItemData) {
    console.error('ItemData not found');
    return;
  }

  const isSky = isVersionSky();
  const item = ItemData[x];
  const bannedList = [0xb2, 0xb7, 0xbb]; // ふしぎなタマゴ, ポケ, しようごマシン (IsStorableItem: 0x200cca8)

  if (bannedList.includes(x)) {
    return 1;
  }
  if (!item.IsValid) {
    return 2;
  }
  if (!item.IsTokiYami) {
    return 3;
  }
  return 0;
}

/**
 * 禁止ダンジョンチェック
 * @param {*} x
 * @returns
 */
function isBannedDungeon(x) {
  if (!DungeonData) {
    console.error('DungeonData not found');
    return;
  }

  // 道場ダンジョン
  if (x > 0xb3) {
    return 1;
  }
  // // 前の階層が0より大きい (他ダンジョンの続きになっている)
  // if (DungeonData[x].FloorPrev > 0) {
  //   return 2;
  // }
  return 0;
}

/**
 * 固定フロアが設定されたフロアであるかチェック
 * @param {*} dungeonId ダンジョンID
 * @param {*} floorId 階層
 * @returns 固定フロアが設定されているか (Advanced: 存在しないフロアであればfalse)
 */
function isDungeonFixedFloor(dungeonId, floorId) {
  if (!DungeonData) {
    console.error('DungeonData not found');
    return;
  }
  if (!FloorData) {
    console.error('FloorData not found');
    return;
  }
  const dungeon = DungeonData[dungeonId];
  const floorPrev = dungeon.FloorPrev + 1;
  const floors = FloorData[dungeon.MappaIndex].slice(floorPrev, floorPrev + dungeon.FloorCount);
  const floor = floors[floorId - 1] ?? null;
  return floor ? floor.FixedFloorId > 0 : false;
}

/**
 * テンプレートモードを使用しているかチェック
 * @returns
 */
function isUseTemplate() {
  return !missionTemplateWrapElement.classList.contains('d-none');
}

/**
 * テンプレートで選択した内容を依頼要素に適用する
 */
function applyTemplateValue() {
  const dataset = missionTemplateElement.selectedOptions[0].dataset;
  const client = parseInt(dataset['client']);
  let target1 = parseInt(dataset['target-1']);
  const target2 = parseInt(dataset['target-2']);

  // 対象1が未設定の場合依頼主と同じにする
  if (target1 == 0) {
    target1 = client;
  }

  choicesInstances[missionClientElement.id].setChoiceByValue(client);
  choicesInstances[missionTarget1Element.id].setChoiceByValue(target1);
  choicesInstances[missionTarget2Element.id].setChoiceByValue(target2);
}

/**
 * 固定フロア名を生成
 * @returns
 */
function generateFixedFloorNames() {
  if (!DungeonData) {
    console.error('DungeonData not found');
    return;
  }
  if (!FloorData) {
    console.error('FloorData not found');
    return;
  }

  // 再戦固定フロア (key=元の固定フロアID)
  const revisitTable = {
    1: 0x41,
    2: 0x42,
    3: 0x43,
    4: 0x44,
    5: 0x45,
    6: 0x46,
    7: 0x47,
    8: 0x48,
    9: 0x49,
    10: 0x4a,
    17: 0x4b,
    18: 0x4c,
    19: 0x4d,
  };
  // おたからメモ範囲
  const treasureMemoMin = 0x73;
  const treasureMemoMax = 0x90;
  // 挑戦状範囲
  const challengeLetterMin = 0x96;
  const challengeLetterMax = 0x9a;
  // アジト範囲
  const hideoutMin = 0xa0;
  const hideoutMax = 0xa4;

  const names = ['']; // デフォルトの0(空白)を入れておく
  for (let i = 1; i < 0xff; i++) {
    let name = '';

    let mappaId = 0;
    let floorId = 0;
    for (const [searchMappaIdx, mappa] of FloorData.entries()) {
      const matchedFloorIdx = mappa.findIndex((x) => Number(x.FixedFloorId) == i);
      if (matchedFloorIdx !== -1) {
        mappaId = searchMappaIdx;
        floorId = matchedFloorIdx;
        break;
      }
    }

    // ダンジョンから取得
    if (mappaId > 0) {
      const dungeon = DungeonData.find(
        (x) =>
          Number(x.MappaIndex) == mappaId &&
          Number(x.FloorPrev) < floorId &&
          0 < floorId - Number(x.FloorPrev) &&
          floorId - Number(x.FloorPrev) <= Number(x.FloorCount),
      );
      const floorNo = floorId - Number(dungeon.FloorPrev);

      // 1フロアダンジョンの固定フロア
      if (floorNo == 1) {
        name = MessageData[window.PARAMS['MESSAGE_DUNGEON_FULL_NAME_INDEX'] + dungeon.Id];
      }
      // フロア指定の固定フロア
      else {
        name =
          MessageData[window.PARAMS['MESSAGE_DUNGEON_FULL_NAME_INDEX'] + dungeon.Id] +
          ` ${dungeon.FlagStairs ? '' : 'B'}${floorNo}F`;
      }
    }

    // おたからメモ
    if (treasureMemoMin <= i && i <= treasureMemoMax) {
      name = `${window.translate.wondermail.other['FIXED_TREASURE_MEMO']} ${i - treasureMemoMin + 1}`;
    }

    // 挑戦状
    if (challengeLetterMin <= i && i <= challengeLetterMax) {
      name = `${window.translate.wondermail.other['FIXED_CHALLENGE_LETTER']} ${i - challengeLetterMin + 1}`;
    }

    // アジト
    if (hideoutMin <= i && i <= hideoutMax) {
      name = `${window.translate.wondermail.other['FIXED_HIDEOUT']} ${i - hideoutMin + 1}`;
    }

    // 再戦
    const revisitKey = Object.keys(revisitTable).find((key) => revisitTable[key] == i);
    if (revisitKey) {
      name = `${window.translate.wondermail.other['FIXED_REVISIT']}: ${names[revisitKey]}`;
    }

    // 直接設定
    switch (i) {
      case 0x1b:
        name = window.translate.wondermail.fixedNames['0x1B_EMPTY_ROOM'];
        break;
      case 0x2a:
        name = window.translate.wondermail.fixedNames['0x2A_DEEP_STAR_CAVE_WITH_GUILD'];
        break;
      case 0x3f:
        name = window.translate.wondermail.fixedNames['0x3F_TEST_ROOM'];
        break;
      case 0x40:
        name = window.translate.wondermail.fixedNames['0x40_EMPTY_ROOM_2'];
        break;
      case 0x68:
        name = window.translate.wondermail.fixedNames['0x68_MIDNIGHT_FOREST_COPY'];
        break;
      case 0x6f:
        name = window.translate.wondermail.fixedNames['0x6F_GOLDEN_CHAMBER'];
        break;
      case 0x70:
        name = window.translate.wondermail.fixedNames['0x70_SECRET_BAZAAR'];
        break;
      case 0x71:
        name = window.translate.wondermail.fixedNames['0x71_SECRET_ROOM'];
        break;
      case 0x91:
        name = window.translate.wondermail.fixedNames['0x91_CHALLENGE_MEWTWO'];
        break;
      case 0x92:
        name = window.translate.wondermail.fixedNames['0x92_CHALLENGE_ENTEI'];
        break;
      case 0x93:
        name = window.translate.wondermail.fixedNames['0x93_CHALLENGE_RAIKOU'];
        break;
      case 0x94:
        name = window.translate.wondermail.fixedNames['0x94_CHALLENGE_SUICUNE'];
        break;
      case 0x95:
        name = window.translate.wondermail.fixedNames['0x95_CHALLENGE_JIRATI'];
        break;
      case 0xa5:
        name = window.translate.wondermail.fixedNames['0xA5_SEALED_CHAMBER'];
        break;
      case 0xbb:
        name = window.translate.wondermail.fixedNames['0xBB_KEY_UNUSED_GUMMI'];
        break;
      case 0xbd:
        name = window.translate.wondermail.fixedNames['0xBD_KEY_UNUSED_GUMMI_SEED'];
        break;
      case 0xbe:
        name = window.translate.wondermail.fixedNames['0xBE_KEY_UNUSED_WONDER'];
        break;
      case 0xc5:
        name = window.translate.wondermail.fixedNames['0xC5_UNUSED_SEALED'];
        break;
    }

    // 改行はスペースに変換
    name = name.replace('\n', ' ');
    names.push(name);
  }
  return names;
}

/**
 * Advancedモードの状態を更新
 */
function refreshAdvancedMode() {
  // 要素表示切替
  for (const element of advancedElements) {
    if (advanced) {
      element.classList.remove('d-none');
    } else {
      element.classList.add('d-none');
    }
  }
}

/**
 * チェックサム表示更新
 * @param {*} checksum1 チェックサム1 (元)
 * @param {*} checksum2 チェックサム2 (生成)
 */
function refreshChecksum(checksum1, checksum2) {
  // チェックサムのセット
  missionChecksumBaseElement.value = getChecksumString(checksum1);
  missionChecksumGenerateElement.value = getChecksumString(checksum2);
  if (checksum1 == checksum2) {
    missionChecksumBaseElement.classList.add('is-valid');
    missionChecksumGenerateElement.classList.add('is-valid');
    missionChecksumBaseElement.classList.remove('is-invalid');
    missionChecksumGenerateElement.classList.remove('is-invalid');
  } else {
    missionChecksumBaseElement.classList.add('is-invalid');
    missionChecksumGenerateElement.classList.add('is-invalid');
    missionChecksumBaseElement.classList.remove('is-valid');
    missionChecksumGenerateElement.classList.remove('is-valid');
  }
}

/**
 * 値を16進数文字列に変換 (チェックサム用)
 * @param {*} value 値
 * @returns 空の場合8桁, 時闇の場合2桁
 */
function getChecksumString(value) {
  const digit = versionSkyElement.checked ? 8 : 2;
  return value.toString(16).toUpperCase().padStart(digit, '0');
}

/**
 * クエリパラメータを元にパスワード展開処理を実行する
 * @returns
 */
function passwordExpansionByUrlParams() {
  const params = new URLSearchParams(location.search);
  const paramsPassword = params.get('password');
  const paramsRegion = params.get('region');
  const paramsIsDS = params.get('ds') === 'true';
  const paramsIsAdvanced = params.get('advanced') === 'true';

  // DSモードがオフであればセット
  if (params.has('ds') && !paramsIsDS) {
    modeDSElement.checked = false;
    modeDSElement.dispatchEvent(new Event('change', { bubbles: true }));
  }
  // Advancedモードがオンであればセット
  if (params.has('advanced') && paramsIsAdvanced) {
    modeAdvancedElement.checked = true;
    modeAdvancedElement.dispatchEvent(new Event('change', { bubbles: true }));
  }

  // パスワードまたはリージョンが無ければ終了
  if (!paramsPassword || !paramsRegion) return;

  // バージョンをセット
  if (paramsPassword.length == 34) {
    versionSkyElement.checked = true;
  } else if (paramsPassword.length == 24) {
    versionOldElement.checked = true;
  } else {
    return; // 時闇空のパスワードに該当しなければ終了
  }

  // リージョンをセット
  if (paramsRegion) {
    const regionElement = document.querySelector(`input[name="region"][value="${paramsRegion}"]`);
    if (regionElement) {
      regionElement.checked = true;
    } else {
      return; // 存在するリージョンでなければ終了
    }
  }

  passwordExpansion(paramsPassword);
}

/**
 * アラート表示
 * @param {Number} mode 0=primary, 1=secondary, 2=success, 3=danger, 4=warning, 5=info, 6=light, 7=dark
 * @param {*} msg メッセージ内容
 * @param {Number} ms 表示ミリ秒 (0の場合は閉じるまで永続)
 */
function showAlertMsg(mode, msg, ms = 5000) {
  const alertMode = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
  const alert = document.createElement('div');
  alert.className = `alert alert-${alertMode[mode]} alert-dismissible fade mb-2`;
  alert.role = 'alert';
  alert.innerHTML = `${msg}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
  errorMsgWrapElement.appendChild(alert);

  requestAnimationFrame(() => {
    alert.classList.add('show');
  });

  // 時間経過で消去
  if (ms > 0) {
    setTimeout(() => {
      const bsAlert = bootstrap.Alert.getOrCreateInstance(alert);
      bsAlert.close();
    }, ms);
  }
}

/**
 * アラート非表示
 */
function hideAlertMsg() {
  resultPasswordElement.querySelectorAll('.alert').forEach((el) => el.remove());
}

/**
 * 確認モーダル表示
 * @param {string} title モーダルタイトル
 * @param {string} html モーダル内容 (HTML)
 * @param {string} okText OKボタンテキスト
 * @param {string} cancelText キャンセルボタンテキスト
 * @returns Promise
 */
async function showConfirmModal({ title, html, okText = 'OK', cancelText = 'キャンセル' }) {
  const modalElement = document.getElementById('confirm-modal');
  const modal = new bootstrap.Modal(modalElement);
  const titleElement = modalElement.querySelector('.modal-title');
  const bodyElement = modalElement.querySelector('.modal-body');
  const okBtnElement = modalElement.querySelector('#confirm-modal-ok');
  const cancelBtnElement = modalElement.querySelector('#confirm-modal-cancel');

  titleElement.textContent = title;
  bodyElement.innerHTML = html;

  return new Promise((resolve) => {
    const ok = () => {
      cleanup();
      modal.hide();
      resolve(true);
    };

    const cancel = () => {
      cleanup();
      resolve(false);
    };

    const cleanup = () => {
      okBtnElement.removeEventListener('click', ok);
      modalElement.removeEventListener('hidden.bs.modal', cancel);
    };

    okBtnElement.addEventListener('click', ok, { once: true });
    modalElement.addEventListener('hidden.bs.modal', cancel, { once: true });

    modal.show();
  });
}
