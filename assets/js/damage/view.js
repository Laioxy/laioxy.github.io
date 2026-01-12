import * as eos from './const.js';
import * as Mechanics from './mechanics.js';
import * as pokeParam from '../poke_param.js';
import { RunCalcDamage } from './calc.js';
import { Monster, DungeonState, DamageData, Move } from './structure.js';

const fighterClassNames = ['attacker', 'defender'];
const moveCategoryNames = ['物理', '特殊', '変化'];
const choicesInstances = [];

/**
 * memo:
 * ・レべルの所にプラス/マイナスボタン追加してレべルの上げ下げできるようにしたい
 *   成長率参照してその分だけステータスを変動させる
 */

// 要素キャッシュ
let moveInfoElement = null;

document.addEventListener('DOMContentLoaded', async function () {
  const moveElement = document.getElementById('move');

  // tooltip初期化
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
  // JSON読込
  await fetchJsonData();

  // choices.js 初期化
  InitChoices();

  // 要素キャッシュ
  moveInfoElement = document.getElementById('move-info');

  // イベント登録 (ダメージ計算処理)
  const damageCalcInputElement = document.querySelectorAll(
    '#damage-calc input:not([type="search"]), #damage-calc select',
  );
  for (const element of damageCalcInputElement) {
    if (element.tagName === 'INPUT') {
      element.addEventListener('input', function (e) {
        // inputの上限下限を超える値を入力できないようにする
        if (element.type == 'number') {
          const min = Number(this.min);
          const max = Number(this.max);
          const value = Number(this.value);
          if (isNaN(value)) return;
          if (value < min) this.value = min;
          else if (value > max) this.value = max;
        }
        // ダメージ計算
        Calculation();
        // 技情報更新 (時闇の威力適用)
        if (element.id == 'damage-support-td') {
          ApplyMoveInfo(moveElement);
        }
      });
    } else if (element.tagName === 'SELECT') {
      element.addEventListener('change', function (e) {
        // ポケモン変更時、タイプ・特性・性別をセット
        if (element.classList.contains('pokemon')) {
          ApplyPokemonInfo(e.target);
        }
        // ダメージ計算
        Calculation();
      });
    }
  }

  // 技変更時、技情報更新
  moveElement.addEventListener('change', function (e) {
    ApplyMoveInfo(e.target);
  });
  // ステータス適用ボタンで現在のレベルのステータスをセット
  const applyStatusBtnElements = document.querySelectorAll('#damage-calc .btn-apply-status');
  for (const element of applyStatusBtnElements) {
    element.addEventListener('click', function (e) {
      LevelApplyStatus(e.target, true); // ボタン押下時はダメ計を行う
    });
  }
  // 交換ボタンで攻撃側と防御側を交換する
  const fighterSwapBtnElements = document.querySelectorAll('#damage-calc .btn-fighter-swap');
  for (const element of fighterSwapBtnElements) {
    element.addEventListener('click', function (e) {
      SwapMonster();
    });
  }
  // モーダル非表示時のイベント
  const modalElement = document.querySelector('.modal');
  modalElement.addEventListener('hide.bs.modal', () => {
    document.activeElement.blur();
  });
  // ページの一番上へジャンプ
  const topBtnElement = document.querySelector('#top-btn');
  topBtnElement.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 情報初期化
  ApplyMoveInfo(moveElement);
  const pokemonElements = document.querySelectorAll('#damage-calc select.pokemon');
  for (const element of pokemonElements) ApplyPokemonInfo(element, false);
  for (const element of applyStatusBtnElements) LevelApplyStatus(element, false);

  await Calculation(); // 計算

  // ローディング解除
  hideLoading();
});

/**
 * Choices.js 初期化 (インスタンスのセット)
 */
function InitChoices() {
  const choicesOptionsMove = {
    ...choicesOptions,
    callbackOnCreateTemplates: function (template, escapeForTemplate, getClassNames) {
      return {
        choice: ({ classNames }, data) => {
          return template(`
          <div class="${getClassNames(classNames.item).join(' ')} ${getClassNames(classNames.itemChoice).join(' ')} ${getClassNames(
            data.disabled ? classNames.itemDisabled : classNames.itemSelectable,
          ).join(' ')}" data-choice ${
            data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'
          } data-id="${data.id}" data-value="${escapeForTemplate(data.value)}" ${
            data.groupId > 0 ? 'role="treeitem"' : 'role="option"'
          } data-group="${data.group.label}">
            <span>${data.label}</span>
          </div>
          `);
        },
      };
    },
  };

  const choicesElements = document.querySelectorAll('#damage-calc select[data-choices]');
  for (const element of choicesElements) {
    if (element.id == 'move') {
      choicesInstances[element.id] = new Choices(element, choicesOptionsMove);
    } else {
      choicesInstances[element.id] = new Choices(element, choicesOptions);
    }
  }
}

/**
 * 技情報更新
 * @param {*} target
 */
function ApplyMoveInfo(target) {
  if (!MoveData) {
    console.error('MoveData not found');
    return false;
  }
  if (!moveInfoElement) {
    console.error('moveInfoElement not found');
    return false;
  }

  const move = MoveData[target.value];
  let power = move.Power;

  // option要素に威力が定義されている場合、それに上書きする
  // (投擲アイテムの対応)
  const option = target.options[target.selectedIndex];
  if ('power' in option.dataset) power = option.dataset['power'];

  // 時闇
  const tdBasePower = Mechanics.TIME_DARKNESS_BASE_POWER.find((item) => item.id == move.Id);
  const damageSupportTdElement = document.querySelector('#damage-support-td');
  if (damageSupportTdElement.checked && tdBasePower != undefined) power = tdBasePower.power;

  const movePowerElement = moveInfoElement.querySelector('#move-power');
  const moveTypeElement = moveInfoElement.querySelector('#move-type');
  const moveCategoryElement = moveInfoElement.querySelector('#move-category');
  const movePPElement = moveInfoElement.querySelector('#move-pp');
  const moveAccuracy1Element = moveInfoElement.querySelector('#move-accuracy-1');
  const moveAccuracy2Element = moveInfoElement.querySelector('#move-accuracy-2');
  const moveAccuracyBaseElement = moveInfoElement.querySelector('#move-accuracy-base');
  const moveStrikesElement = moveInfoElement.querySelector('#move-strikes');
  const moveCriticalElement = moveInfoElement.querySelector('#move-critical');

  // いちげきのたま、変化以外、威力0以外の威力を表示し、該当しないものは「非対応」を表示
  movePowerElement.innerHTML =
    move.Id == 0x188 || move.Category != 2 || move.Power == 0 ? power : '<span class="text-danger">非対応</span>';
  moveTypeElement.textContent = TypeData[move.Type].Name;
  moveCategoryElement.textContent = moveCategoryNames[move.Category];
  movePPElement.textContent = move.PP; // たげいは考慮しない？
  moveAccuracy1Element.textContent = move.Accuracy1;
  moveAccuracy2Element.textContent = move.Accuracy2;
  moveAccuracyBaseElement.textContent =
    getMoveBaseAccuracy(move.Accuracy1, move.Accuracy2, move.MaxBoost).toFixed(2) + '%';
  moveStrikesElement.textContent = move.MaxHit;
  moveCriticalElement.textContent = move.Critical + '%';
}

/**
 * ポケモン情報更新
 * (主にポケモン変更時に実行)
 * @param {*} target
 * @returns
 */
function ApplyPokemonInfo(target, calc) {
  if (!PokemonData) {
    console.error('PokemonData not found');
    return false;
  }

  const pokemon = PokemonData[target.value];
  const fighter = getFighterElement(target);
  const fighterName = getFighterType(target);

  if (fighterName) {
    // タイプ1
    choicesInstances[`type-1-${fighterName}`].setChoiceByValue(`${pokemon.Type1}`);
    // タイプ2
    choicesInstances[`type-2-${fighterName}`].setChoiceByValue(`${pokemon.Type2}`);
    // 特性1
    choicesInstances[`ability-1-${fighterName}`].setChoiceByValue(`${pokemon.Ability1}`);
    // 特性2
    choicesInstances[`ability-2-${fighterName}`].setChoiceByValue(`${pokemon.Ability2}`);
    // 性別
    ApplyGenderControl(fighterName, target.value, -1, calc);
  }
}

/**
 * ポケモンが持つ性別からテキストと値を変更し、選択する
 * @param {String} fighterName 構造体クラス名 (attacker, defender)
 * @param {Number} pokemonId ポケモンID
 * @param {number} [genderId=-1] 選択する性別ID (未指定の場合選択処理をスキップ)
 * @param {boolean} [calc=true] 範囲外の性別から変更された時にダメージ再計算を行うか
 */
function ApplyGenderControl(fighterName, pokemonId, genderId = -1, calc = true) {
  if (!PokemonData) {
    console.error('PokemonData not found');
    return;
  }

  const pokemon = PokemonData[pokemonId];
  const fighter = document.querySelector(`.${fighterName}`);
  const genderElements = fighter.querySelectorAll(`#gender-${fighterName}-1, #gender-${fighterName}-2`);
  const genderLabelElements = fighter.querySelectorAll(
    `label[for="gender-${fighterName}-1"], label[for="gender-${fighterName}-2"]`,
  );

  let changed = false;
  for (let i = 0; i < 2; i++) {
    if (pokemon.Genders.length > i) {
      const baseGenderValue = genderElements[i].value;
      // 性別をセット
      genderElements[i].value = pokemon.Genders[i];
      genderElements[i].disabled = false;
      genderLabelElements[i].textContent = pokeParam.pokeGender[pokemon.Genders[i]].name;
      if (genderId > 0 && pokemon.Genders[i] == genderId) {
        genderElements[i].checked = true; // 一致する性別を選択する
      }
      // 初回(value='on')以外、かつ性別の値に変更がある
      if (baseGenderValue.value != 'on' && baseGenderValue != pokemon.Genders[i]) {
        changed = true;
      }
    } else {
      // 性別を選択できないようにする
      genderElements[i].value = -1;
      genderElements[i].disabled = true;
      genderLabelElements[i].textContent = '×';
      if (genderElements[i].checked) {
        genderElements[i].checked = false; // 性別の範囲外なら選択を外す
      }
      if (i > 0) {
        genderElements[i - 1].checked = true; // 1つ前の性別を選択
        changed = true;
      }
    }
  }
  if (changed && calc) {
    Calculation();
  }
}

/**
 * 現在レベルのステータスを適用
 * @param {*} target
 * @param {boolean} [calc=true] 計算を行うか
 * @returns
 */
function LevelApplyStatus(target, calc = true) {
  if (!PokemonData) {
    console.error('PokemonData not found');
    return false;
  }

  const fighter = getFighterElement(target);
  if (fighter) {
    const fighterName = getFighterType(fighter);
    const pokemonElement = fighter.querySelector('.pokemon');
    const pokemonId = pokemonElement.value;
    const levelElement = fighter.querySelector('.status-lv');
    const level = levelElement.value;
    const pokemon = PokemonData[pokemonId];
    const result = { H: 0, A: 0, B: 0, C: 0, D: 0 };
    for (let i = 0; i < level && i < pokemon.Stats.length && i < levelElement.max; i++) {
      const stat = pokemon.Stats[i];
      result.H += stat.H;
      result.A += stat.A;
      result.B += stat.B;
      result.C += stat.C;
      result.D += stat.D;
    }

    const HPElement = fighter.querySelector('.status-hp');
    const HPMaxElement = fighter.querySelector('.status-hp-max');
    const AElement = fighter.querySelector('.status-value-atk');
    const BElement = fighter.querySelector('.status-value-def');
    const CElement = fighter.querySelector('.status-value-spa');
    const DElement = fighter.querySelector('.status-value-spd');
    HPElement.value = Math.min(result.H, HPElement.max);
    HPMaxElement.value = Math.min(result.H, HPMaxElement.max);
    AElement.value = Math.min(result.A, AElement.max);
    BElement.value = Math.min(result.B, BElement.max);
    CElement.value = Math.min(result.C, CElement.max);
    DElement.value = Math.min(result.D, DElement.max);

    if (calc) {
      Calculation();
    }
  }
}

/**
 * 構造体へセットして取得
 * @param {String} fighterName
 * @returns
 */
function GetStructure(fighterName) {
  if (fighterClassNames.includes(fighterName)) {
    const monster = new Monster();

    // 値の取得
    const fighter = document.querySelector(`.${fighterName}`);
    const pokemonElement = fighter.querySelector('.pokemon');
    const isLeaderElement = fighter.querySelector('.flag-leader');
    const isMemberElement = fighter.querySelector('.flag-member');
    const levelElement = fighter.querySelector('.status-lv');
    const hpElement = fighter.querySelector('.status-hp');
    const hpMaxElement = fighter.querySelector('.status-hp-max');
    const atkValueElement = fighter.querySelector('.status-value-atk');
    const atkStageElement = fighter.querySelector('.status-stage-atk');
    const atkHalfElement = fighter.querySelector('.status-half-atk');
    const defValueElement = fighter.querySelector('.status-value-def');
    const defStageElement = fighter.querySelector('.status-stage-def');
    const defHalfElement = fighter.querySelector('.status-half-def');
    const spaValueElement = fighter.querySelector('.status-value-spa');
    const spaStageElement = fighter.querySelector('.status-stage-spa');
    const spaHalfElement = fighter.querySelector('.status-half-spa');
    const spdValueElement = fighter.querySelector('.status-value-spd');
    const spdStageElement = fighter.querySelector('.status-stage-spd');
    const spdHalfElement = fighter.querySelector('.status-half-spd');
    const accuracyElement = fighter.querySelector('.stage-accuracy');
    const evasionElement = fighter.querySelector('.stage-evasion');
    const exStatusAtkElement = fighter.querySelector('.ex-status-atk');
    const exStatusDefElement = fighter.querySelector('.ex-status-def');
    const exStatusSpAElement = fighter.querySelector('.ex-status-spa');
    const exStatusSpDElement = fighter.querySelector('.ex-status-spd');
    const stageStockpileElement = fighter.querySelector('.stage-stockpile');
    const boostFlashfireElement = fighter.querySelector('.boost-flashfire');
    const heldItemElement = fighter.querySelector('.held-item');
    const heldItemStickyElement = fighter.querySelector('.held-item-sticky');
    const iqValueElement = fighter.querySelector('.iq-value');
    const type1Element = fighter.querySelector('.type-1');
    const type2Element = fighter.querySelector('.type-2');
    const ability1Element = fighter.querySelector('.ability-1');
    const ability2Element = fighter.querySelector('.ability-2');
    const genderElement = fighter.querySelector('.gender:checked');
    const stockpileElement = fighter.querySelector('.stage-stockpile');
    const flashFireElement = fighter.querySelector('.boost-flashfire');
    const hiddenPowerTypeElement = fighter.querySelector('.hidden-power-type');
    const hiddenPowerPowerElement = fighter.querySelector('.hidden-power-power');
    const bellyValueElement = fighter.querySelector('.belly-value');
    const movementSpeedElement = fighter.querySelector('.movement-speed');
    const meFirstElement = fighter.querySelector('.flag-me-first');
    const practiceSwingerElement = fighter.querySelector('.flag-practice-swinger');
    const angerPointElement = fighter.querySelector('.flag-anger-point');
    const tdTimeShieldElement = fighter.querySelector('.flag-td-timeshield');

    const iqSkillGroupElements = fighter.querySelectorAll('.iqskill-group input');
    const statusGroupElements = fighter.querySelectorAll('.status-group input');
    const exEffectGroupElements = fighter.querySelectorAll('.exeffect-group input');

    // 構造体セット
    monster.id = Number(pokemonElement.value);
    monster.is_leader = isLeaderElement.checked;
    monster.is_member = isMemberElement.checked;
    monster.gender = Number(genderElement.value);
    monster.level = Number(levelElement.value);
    monster.hp = Number(hpElement.value);
    monster.hp_max = Number(hpMaxElement.value);
    monster.atk = Number(atkValueElement.value);
    monster.def = Number(defValueElement.value);
    monster.sp_atk = Number(spaValueElement.value);
    monster.sp_def = Number(spdValueElement.value);
    monster.stage_atk = Number(atkStageElement.value);
    monster.stage_def = Number(defStageElement.value);
    monster.stage_sp_atk = Number(spaStageElement.value);
    monster.stage_sp_def = Number(spdStageElement.value);
    monster.stage_accuracy = Number(accuracyElement.value);
    monster.stage_evasion = Number(evasionElement.value);
    monster.iq = Number(iqValueElement.value);
    monster.half_atk = Number(atkHalfElement.value);
    monster.half_def = Number(defHalfElement.value);
    monster.half_sp_atk = Number(spaHalfElement.value);
    monster.half_sp_def = Number(spdHalfElement.value);
    monster.types = [Number(type1Element.value), Number(type2Element.value)];
    monster.abilities = [Number(ability1Element.value), Number(ability2Element.value)];
    monster.hidden_power_type = Number(hiddenPowerTypeElement.value);
    monster.hidden_power_base_power = Number(hiddenPowerPowerElement.value);
    monster.heldItem = Number(heldItemElement.value);
    monster.heldItem_sticky = heldItemStickyElement.checked;
    monster.belly = Number(bellyValueElement.value);
    monster.exclusive_item_atk = Number(exStatusAtkElement.value);
    monster.exclusive_item_def = Number(exStatusDefElement.value);
    monster.exclusive_item_sp_atk = Number(exStatusSpAElement.value);
    monster.exclusive_item_sp_def = Number(exStatusSpDElement.value);
    monster.statuses.stockpile = Number(stockpileElement.value);
    monster.statuses.speed = Number(movementSpeedElement.value);
    monster.flash_fire_boost = Number(flashFireElement.value);
    monster.hidden_power_type = Number(hiddenPowerTypeElement.value);
    monster.hidden_power_base_power = Number(hiddenPowerPowerElement.value);
    monster.flag_me_first = meFirstElement.checked;
    monster.flag_practice_swinger = practiceSwingerElement.checked;
    monster.flag_anger_point = angerPointElement.checked;
    monster.flag_td_timesheald = tdTimeShieldElement.checked;

    // かしこさ
    for (const input of iqSkillGroupElements) {
      monster.iq_skill[input.value] = input.checked;
    }
    // 状態異常
    for (const input of statusGroupElements) {
      monster.statuses[input.value] = input.checked;
    }
    // 専用道具
    for (const input of exEffectGroupElements) {
      monster.exclusive_item_effect_flags[input.value] = input.checked;
    }
    return monster;
  }
}

/**
 * 構造体データからフォームにセットする
 * @param {String} fighterName
 * @param {Monster} monster
 */
function SetFormByMonster(fighterName, monster) {
  if (fighterClassNames.includes(fighterName)) {
    const fighter = document.querySelector(`#damage-calc .${fighterName}`);
    // ポケモン
    choicesInstances[`pokemon-${fighterName}`].setChoiceByValue(`${monster.id}`);
    // タイプ1
    choicesInstances[`type-1-${fighterName}`].setChoiceByValue(`${monster.types[0]}`);
    // タイプ2
    choicesInstances[`type-2-${fighterName}`].setChoiceByValue(`${monster.types[1]}`);
    // 特性1
    choicesInstances[`ability-1-${fighterName}`].setChoiceByValue(`${monster.abilities[0]}`);
    // 特性2
    choicesInstances[`ability-2-${fighterName}`].setChoiceByValue(`${monster.abilities[1]}`);
    // 性別
    ApplyGenderControl(fighterName, monster.id, monster.gender, false);
    // レベル
    fighter.querySelector('.status-lv').value = monster.level;
    // 現在HP
    fighter.querySelector('.status-hp').value = monster.hp;
    // 最大HP
    fighter.querySelector('.status-hp-max').value = monster.hp_max;
    // リーダー
    fighter.querySelector('.flag-leader').checked = monster.is_leader;
    // チームメンバー
    fighter.querySelector('.flag-member').checked = monster.is_member;
    // 攻撃
    fighter.querySelector('.status-value-atk').value = monster.atk;
    // 攻撃ランク
    fighter.querySelector('.status-stage-atk').value = monster.stage_atk;
    // 攻撃半減ランク
    fighter.querySelector('.status-half-atk').value = monster.half_atk;
    // 防御
    fighter.querySelector('.status-value-def').value = monster.def;
    // 攻撃ランク
    fighter.querySelector('.status-stage-def').value = monster.stage_def;
    // 攻撃半減ランク
    fighter.querySelector('.status-half-def').value = monster.half_def;
    // 特攻
    fighter.querySelector('.status-value-spa').value = monster.sp_atk;
    // 特攻ランク
    fighter.querySelector('.status-stage-spa').value = monster.stage_sp_atk;
    // 特攻半減ランク
    fighter.querySelector('.status-half-spa').value = monster.half_sp_atk;
    // 特防
    fighter.querySelector('.status-value-spd').value = monster.sp_def;
    // 特防ランク
    fighter.querySelector('.status-stage-spd').value = monster.stage_sp_def;
    // 特防半減ランク
    fighter.querySelector('.status-half-spd').value = monster.half_sp_def;
    // 命中ランク
    fighter.querySelector('.stage-accuracy').value = monster.stage_accuracy;
    // 回避ランク
    fighter.querySelector('.stage-evasion').value = monster.stage_evasion;
    // 専用道具 攻撃
    fighter.querySelector('.ex-status-atk').value = monster.exclusive_item_atk;
    // 専用道具 防御
    fighter.querySelector('.ex-status-def').value = monster.exclusive_item_def;
    // 専用道具 特攻
    fighter.querySelector('.ex-status-spa').value = monster.exclusive_item_sp_atk;
    // 専用道具 特防
    fighter.querySelector('.ex-status-spd').value = monster.exclusive_item_sp_def;
    // たくわえる
    fighter.querySelector('.stage-stockpile').value = monster.statuses.stockpile;
    // もらいび
    fighter.querySelector('.boost-flashfire').value = monster.flash_fire_boost;
    // 装備中の道具
    choicesInstances[`held-item-${fighterName}`].setChoiceByValue(`${monster.heldItem}`);
    // ネバつき
    fighter.querySelector('.held-item-sticky').checked = monster.heldItem_sticky;
    // めざめるパワー タイプ
    fighter.querySelector('.hidden-power-type').value = monster.hidden_power_type;
    // めざめるパワー 威力
    fighter.querySelector('.hidden-power-power').value = monster.hidden_power_base_power;
    // かしこさ値
    fighter.querySelector('.iq-value').value = monster.iq;
    // おなか
    fighter.querySelector('.belly-value').value = monster.belly;
    // 移動速度
    fighter.querySelector('.movement-speed').value = monster.statuses.speed;
    // さきどり
    fighter.querySelector('.flag-me-first').checked = monster.flag_me_first;
    // かたならし
    fighter.querySelector('.flag-practice-swinger').checked = monster.flag_practice_swinger;
    // いかりのつぼ
    fighter.querySelector('.flag-anger-point').checked = monster.flag_anger_point;
    // [時闇] タイムシールドバグ
    fighter.querySelector('.flag-td-timeshield').checked = monster.flag_td_timesheald;

    // かしこさ
    const iqSkillGroupElements = fighter.querySelectorAll('.iqskill-group input');
    for (const element of iqSkillGroupElements) {
      element.checked = monster.iq_skill[Number(element.value)];
    }
    // 状態異常
    const statusGroupElements = fighter.querySelectorAll('.status-group input');
    for (const element of statusGroupElements) {
      element.checked = monster.statuses[element.value];
    }
    // 専用道具効果
    const exEffectGroupElements = fighter.querySelectorAll('.exeffect-group input');
    for (const element of exEffectGroupElements) {
      element.checked = monster.exclusive_item_effect_flags[Number(element.value)];
    }
  }
}

/**
 * 攻撃側と防御側を交換する
 */
function SwapMonster() {
  const attacker = GetStructure(fighterClassNames[0]);
  const defender = GetStructure(fighterClassNames[1]);

  SetFormByMonster(fighterClassNames[0], defender);
  SetFormByMonster(fighterClassNames[1], attacker);

  Calculation();
}

/**
 * 計算処理を実行
 */
function Calculation() {
  if (!PokemonData) {
    console.error('PokemonData not found');
    return;
  }
  if (!MoveData) {
    console.error('MoveData not found');
    return;
  }

  const moveElement = document.getElementById('move');
  const moveGinsengBoostElement = document.getElementById('ginseng-boost');
  const movePPElement = document.getElementById('move-now-pp');
  const moveHitsElement = document.getElementById('move-hits');
  const moveDamageCriticalElement = document.getElementById('damage-critical');
  const moveHugePurePowerElement = document.getElementById('damage-hugepower');
  const moveTimeDarknessElement = document.getElementById('damage-support-td');
  const dungeonWeatherElement = document.getElementById('dungeon-weather');
  const dungeonPlusTeamElement = document.getElementById('dungeon-plus-team');
  const dungeonPlusEnemyElement = document.getElementById('dungeon-plus-enemy');
  const dungeonMinusTeamElement = document.getElementById('dungeon-minus-team');
  const dungeonMinusEnemyElement = document.getElementById('dungeon-minus-enemy');
  const dungeonCheerleaderElement = document.getElementById('dungeon-cheerleader');
  const dungeonFlowerGiftElement = document.getElementById('dungeon-flower-gift');
  const dungeonLightningRodElement = document.getElementById('dungeon-lightning-rod');
  const dungeonStormDrainElement = document.getElementById('dungeon-storm-drain');
  const dungeonMudSportElement = document.getElementById('dungeon-mud-sport');
  const dungeonWaterSportElement = document.getElementById('dungeon-water-sport');
  const dungeonGravityElement = document.getElementById('dungeon-gravity');
  const dungeonIqDisabledElement = document.getElementById('dungeon-iq-disabled');
  const dungeonExplorerMazeElement = document.getElementById('dungeon-explorer-maze');
  const JpVersionElement = document.getElementById('jp-version');

  // 構造体の更新
  const attacker = GetStructure(fighterClassNames[0]);
  const defender = GetStructure(fighterClassNames[1]);

  // ダメージ計算
  const dungeon = new DungeonState();
  const damageData = new DamageData();
  const move = new Move();

  // 技情報の設定
  move.id = Number(moveElement.value);
  move.ginseng = Number(moveGinsengBoostElement.value);
  move.pp = Number(movePPElement.value);
  move.priorSuccessiveHits = Number(moveHitsElement.value);
  move.timeDarkness = moveTimeDarknessElement.checked;
  if (moveDamageCriticalElement.checked) {
    dungeon.rng.criticalHit = true;
    dungeon.rng.critChance = 100;
  }
  dungeon.rng.hugePurePower = moveHugePurePowerElement.checked;

  // ダンジョン情報の設定
  dungeon.weather = Number(dungeonWeatherElement.value);
  dungeon.plus = [dungeonPlusEnemyElement.checked, dungeonPlusTeamElement.checked];
  dungeon.minus = [dungeonMinusEnemyElement.checked, dungeonMinusTeamElement.checked];
  dungeon.otherMonsters.iq_skill[0x32] = dungeonCheerleaderElement.checked;
  if (dungeonFlowerGiftElement.checked) {
    dungeon.otherMonsters.abilities.push(0x71);
  }
  if (dungeonLightningRodElement.checked) {
    dungeon.otherMonsters.abilities.push(0x32);
  }
  if (dungeonStormDrainElement.checked) {
    dungeon.otherMonsters.abilities.push(0x7a);
  }
  dungeon.mud_sport = dungeonMudSportElement.checked;
  dungeon.water_sport = dungeonWaterSportElement.checked;
  dungeon.gravity = dungeonGravityElement.checked;
  dungeon.iq_disabled = dungeonIqDisabledElement.checked;
  dungeon.genInfo.fixedRoomId = dungeonExplorerMazeElement.checked ? 0x6e : 0x00;
  dungeon.region_jp = JpVersionElement.checked;

  let result;
  const projectilePower = moveElement.options[moveElement.selectedIndex].dataset.power;
  if (projectilePower) {
    result = RunCalcDamage(dungeon, attacker, defender, move, projectilePower);
  } else {
    result = RunCalcDamage(dungeon, attacker, defender, move, MoveData[move.id].Power);
  }
  // console.log('RESULT', result);

  // ダメージ計算結果表示
  const damageMinElement = document.getElementById('damage-min');
  const damageMaxElement = document.getElementById('damage-max');
  const damageAvgElement = document.getElementById('damage-avg');
  damageMinElement.textContent = result.minDamage;
  damageMaxElement.textContent = result.maxDamage;
  damageAvgElement.textContent = `(平均: ${result.avgDamage})`;
  // 命中率計算結果表示
  const accuracyResultElement = document.getElementById('accuracy-result');
  accuracyResultElement.textContent = `${result.hitChance}%`;
  // 急所率計算結果表示
  const criticalResultElement = document.getElementById('critical-result');
  criticalResultElement.textContent = `${result.critChance}%`;

  // バッジ表示
  const damageResultBadgeWrapElement = document.getElementById('damage-result-badge');
  damageResultBadgeWrapElement.innerHTML = '';
  let bgClassName = '';
  switch (result.details.typeMatchup.id) {
    case 0: // 効果なし
      bgClassName = 'text-bg-light';
      break;
    case 1: // 今ひとつ
      bgClassName = 'text-bg-warning';
      break;
    case 2: // 通常
      break;
    case 3: // 効果抜群
      bgClassName = 'text-bg-danger';
      break;
  }
  if (bgClassName.length > 0) {
    const badgeHtml = `
      <span class="badge ${bgClassName}">${result.details.typeMatchup.text}</span>
    `;
    damageResultBadgeWrapElement.innerHTML += badgeHtml;
  }
  // 固定ダメージバッジ表示
  if (dungeon.damageDetailLog.isFixedDamage) {
    damageResultBadgeWrapElement.innerHTML += `
      <span class="badge text-bg-dark">固定</span>
    `;
  }

  // モーダルに詳細表示
  const modalElement = document.querySelector('#modal-damage');
  modalElement.querySelector('#attacker-name').textContent = PokemonData[attacker.id].Name;
  modalElement.querySelector('#attacker-level').textContent = `Lv${attacker.level}`;
  modalElement.querySelector('#attacker-status').textContent = `${
    MoveData[move.id].Category == eos.CATEGORY_PHYSICAL ? '攻撃' : '特攻'
  }${result.details.calc.offenseCalc}`;
  modalElement.querySelector('#defender-name').textContent = PokemonData[defender.id].Name;
  modalElement.querySelector('#defender-level').textContent = `Lv${defender.level}`;
  modalElement.querySelector('#defender-status').textContent =
    `${MoveData[move.id].Category == eos.CATEGORY_PHYSICAL ? '防御' : '特防'}${result.details.calc.defenseCalc}`;
  const moveName = `${MoveData[move.id].Name}${move.ginseng > 0 ? `+${move.ginseng}` : ''}`;
  modalElement.querySelector('.move-name').textContent =
    `${moveName} ${move.id == 0x195 ? ` (${moveElement.options[moveElement.selectedIndex].text})` : ''}`;
  modalElement.querySelector('.damage-min').textContent = result.minDamage;
  modalElement.querySelector('.damage-max').textContent = result.maxDamage;
  modalElement.querySelector('.damage-avg').textContent = `(平均: ${result.avgDamage})`;
  modalElement.querySelector('.hit-chance').textContent = `${result.hitChance}%`;
  modalElement.querySelector('.crit-chance').textContent = `${result.critChance}%`;
  modalElement.querySelector('.type-matchup').textContent = result.details.typeMatchup.text;
  modalElement.querySelector('.move-type').textContent = result.details.moveType.Name;
  modalElement.querySelector('.move-category').textContent = result.details.moveCategory.text;
  modalElement.querySelector('.critical-hit').textContent = result.details.criticalHit ? '○' : '×';
  modalElement.querySelector('.full-type-immunity').textContent = result.details.fullTypeImmunity ? '○' : '×';
  modalElement.querySelector('.no-damage').textContent = result.details.noDamage ? '○' : '×';
  modalElement.querySelector('.offensive-stat-stage').textContent = result.details.calc.offensiveStatStage;
  modalElement.querySelector('.defensive-stat-stage').textContent = result.details.calc.defensiveStatStage;
  modalElement.querySelector('.offensive-stat').textContent = result.details.calc.offensiveStat;
  modalElement.querySelector('.defensive-stat').textContent = result.details.calc.defensiveStat;
  modalElement.querySelector('.offense-calc').textContent = result.details.calc.offenseCalc;
  modalElement.querySelector('.defense-calc').textContent = result.details.calc.defenseCalc;
  modalElement.querySelector('.damage-calc-at').textContent = result.details.calc.damageCalcAt;
  modalElement.querySelector('.damage-calc-def').textContent = result.details.calc.damageCalcDef;
  modalElement.querySelector('.damage-calc-flv').textContent = result.details.calc.damageCalcFlv;
  modalElement.querySelector('.damage-calc-base').textContent = result.details.calc.damageCalcBase;
  modalElement.querySelector('.static-damage-mult').textContent = result.details.calc.staticDamageMult;
  modalElement.querySelector('.damage-calc').textContent = result.details.calc.damageCalc;
  modalElement.querySelector('.min-random-damage-mult-pct').textContent =
    `${result.details.calc.minRandomDamageMultPct}%`;
  modalElement.querySelector('.max-random-damage-mult-pct').textContent =
    `${result.details.calc.maxRandomDamageMultPct}%`;

  // [modal] ダメージ詳細バッジ
  const typeMatchMults = [1, 1];
  const erratic = attacker.iqSkillEnabled(0x3b, dungeon) || defender.iqSkillEnabled(0x38, dungeon);
  for (let i = 0; i < 2; i++) {
    switch (result.details[`indivTypeMatchup${i + 1}`].id) {
      case 0:
        typeMatchMults[i] = erratic ? Mechanics.MATCHUP_IMMUNE_ERRATIC : Mechanics.MATCHUP_IMMUNE;
        break;
      case 1:
        typeMatchMults[i] = erratic ? Mechanics.MATCHUP_NOTVERY_ERRATIC : Mechanics.MATCHUP_NOTVERY;
        break;
      case 2:
        typeMatchMults[i] = erratic ? Mechanics.MATCHUP_NEUTRAL_ERRATIC : Mechanics.MATCHUP_NEUTRAL;
        break;
      case 3:
        typeMatchMults[i] = erratic ? Mechanics.MATCHUP_SUPER_ERRATIC : Mechanics.MATCHUP_SUPER;
        break;
    }
  }
  const typeMatchMult = Math.floor(typeMatchMults[0] * typeMatchMults[1] * 100) / 100;
  const sniper = attacker.abilityActive(0x5d);
  const damageBadgeWrapElement = modalElement.querySelector('#damage-badge-wrap');
  const damageBadgeData = [
    {
      label: `${result.details.typeMatchup.text}${erratic ? '(ムラっけ)' : ''} x${typeMatchMult}`,
      multiplier: typeMatchMult,
      value: typeMatchMult != 1,
    },
    {
      label: `急所${sniper ? '(スナイパー)' : ''} x${sniper ? '2' : '1.5'}`,
      multiplier: sniper ? 2 : 1.5,
      value: result.details.criticalHit,
    },
    { label: 'タイプ無効', multiplier: 0, value: result.details.fullTypeImmunity },
    { label: 'ダメージ無効', multiplier: 0, value: result.details.noDamage },
    { label: 'ふしぎなまもり', multiplier: 0, value: dungeon.damageDetailLog.isWonderGuardActive },
    { label: 'いろめがね x1.2', multiplier: 1.2, value: dungeon.damageDetailLog.isTintedLensActive },
    { label: 'ハードロック x0.75', multiplier: 0.75, value: dungeon.damageDetailLog.isSolidRockActive },
    { label: 'フィルター x0.75', multiplier: 0.75, value: dungeon.damageDetailLog.isFilterActive },
    { label: 'タイムシールド x0.5', multiplier: 0.5, value: dungeon.damageDetailLog.isTimeShieldActive },
    { label: 'タイムシールドバグ x2', multiplier: 2, value: dungeon.damageDetailLog.isTimeShieldGlitch },
    { label: 'テクニシャン x1.5', multiplier: 1.5, value: dungeon.damageDetailLog.isTechnicianActive },
    { label: 'あついしぼう x0.5', multiplier: 1.5, value: dungeon.damageDetailLog.isThickFatActive },
    { label: 'げきりゅう x2', multiplier: 2, value: dungeon.damageDetailLog.isTorrentActive },
    { label: 'しんりょく x2', multiplier: 2, value: dungeon.damageDetailLog.isOvergrowActive },
    { label: 'むしのしらせ x2', multiplier: 2, value: dungeon.damageDetailLog.isSwarmActive },
    { label: 'もうか x2', multiplier: 2, value: dungeon.damageDetailLog.isBlazeActive },
    { label: 'かんそうはだ x1.5', multiplier: 1.5, value: dungeon.damageDetailLog.isDrySkinActive },
    { label: 'やけど x0.8', multiplier: 0.8, value: dungeon.damageDetailLog.isBurnActive },
    { label: 'タイプ一致(てきおうりょく) x2', multiplier: 2, value: dungeon.damageDetailLog.isAdaptabilitySTAB },
    { label: 'タイプ一致 x1.5', multiplier: 1.5, value: dungeon.damageDetailLog.isSTAB },
    { label: 'ひざしがつよい x1.5', multiplier: 1.5, value: dungeon.damageDetailLog.isSunnyFireActive },
    { label: 'ひざしがつよい x0.5', multiplier: 0.5, value: dungeon.damageDetailLog.isSunnyWaterActive },
    { label: 'あめ x0.5', multiplier: 0.5, value: dungeon.damageDetailLog.isRainyFireActive },
    { label: 'あめ x1.5', multiplier: 1.5, value: dungeon.damageDetailLog.isRainyWaterActive },
    { label: 'くもり x0.75', multiplier: 0.75, value: dungeon.damageDetailLog.isCloudyActive },
    { label: 'きり x0.5', multiplier: 0.5, value: dungeon.damageDetailLog.isFogActive },
    { label: 'どろあそび x0.5', multiplier: 0.5, value: dungeon.damageDetailLog.isMudSportActive },
    { label: 'みずあそび x0.5', multiplier: 0.5, value: dungeon.damageDetailLog.isWaterSportActive },
    { label: 'じゅうでん x2', multiplier: 2, value: dungeon.damageDetailLog.isChargeActive },
    { label: 'さきどり x1.5', multiplier: 1.5, value: dungeon.damageDetailLog.isMeFirstActive },
    { label: 'すてみ x1.5', multiplier: 1.5, value: dungeon.damageDetailLog.isRecklessActive },
    { label: 'てつのこぶし x1.5', multiplier: 1.5, value: dungeon.damageDetailLog.isIronFistActive },
    { label: '物理ダメ半減 x0.5', multiplier: 0.5, value: result.details.calc.modifiers.halfPhysicalDamage },
    { label: '特殊ダメ半減 x0.5', multiplier: 0.5, value: result.details.calc.modifiers.halfSpecialDamage },
    { label: '通常攻撃 x0.5', multiplier: 0.5, value: move.id == 0x163 },
    { label: '投擲物 x0.5', multiplier: 0.5, value: move.id == 0x195 },
    {
      label: `${MoveData[move.id].Name} x${dungeon.damageDetailLog.damageMult}`,
      multiplier: dungeon.damageDetailLog.damageMult,
      value: dungeon.damageDetailLog.damageMult != 1 && move.id != 0x163 && move.id != 0x195,
    },
    { label: 'ごうわん x1.5', multiplier: 1.5, value: dungeon.damageDetailLog.isPowerPitcherActive },
    { label: 'エアーブレード x1.5', multiplier: 1.5, value: dungeon.damageDetailLog.isAirBladeActive },
  ];
  // 倍率順にソート
  damageBadgeData.sort((a, b) => (a.multiplier > b.multiplier ? -1 : 1));
  damageBadgeWrapElement.innerHTML = '';
  for (const data of damageBadgeData) {
    const className =
      data.multiplier >= 1 ? 'text-bg-danger' : data.multiplier > 0 ? 'text-bg-warning' : 'text-bg-secondary';
    if (data.value) {
      damageBadgeWrapElement.innerHTML += `
      <span class="badge ${className}">${data.label}</span>
    `;
    }
  }
}

/**
 * 攻撃側・防御側の要素に含まれているかをチェックして取得
 * @param {*} target
 * @returns
 */
function getFighterElement(target) {
  let elem = null;
  if (target.closest('.attacker')) {
    elem = target.closest('.attacker');
  } else if (target.closest('.defender')) {
    elem = target.closest('.defender');
  }
  return elem;
}

/**
 * 攻撃側・防御側の識別名を親要素から取得
 * @param {*} target 要素
 * @returns
 */
function getFighterType(target) {
  let res = null;
  if (target.closest('.attacker')) {
    res = 'attacker';
  } else if (target.closest('.defender')) {
    res = 'defender';
  }
  return res;
}

/**
 * 基礎命中率を取得
 * @param {*} accuracy1 命中値1
 * @param {*} accuracy2 命中値2
 * @returns
 */
function getMoveBaseAccuracy(accuracy1, accuracy2, maxGinseng = 0) {
  const acc1 = Math.min(accuracy1, 100);
  const acc2 = Math.min(accuracy2, 100);
  if (maxGinseng == 0) return acc1;
  else return (acc1 * acc2) / 100;
}

/**
 * JSONデータを取得
 */
async function fetchJsonData() {
  try {
    const [pokemonData, moveData, messageData, iqgroupData, typeData] = await Promise.all([
      getJsonData('pokemon'),
      getJsonData('move'),
      getJsonData('message'),
      getJsonData('iqgroup'),
      getJsonData('type'),
    ]);
    window.PokemonData = pokemonData;
    window.MoveData = moveData;
    window.MessageData = messageData;
    window.IQGroupData = iqgroupData;
    window.TypeData = typeData;
  } catch (e) {
    console.error(e);
  }
}
