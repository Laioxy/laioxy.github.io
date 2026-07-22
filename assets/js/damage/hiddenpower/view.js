import * as eos from '../const.js';
import { WEATHER_STRINGS, VALID_MAX_DUNGEON_ID } from '../../param.js';
import { getJsonData, getJsonDatas } from '../../json_script.js';
// ダメージ計算関連import
import { RunCalcDamage, getTypeMatchUp } from '../calc.js';
import { TYPE_MATCHUP_COMBINATOR_TABLE } from '../mechanics.js';
import { Monster, DungeonState, DamageData, Move } from '../structure.js';

/**
 * 機能実装予定メモ
 * ・めざパのタイプ固定 (既にタイプがわかる用)
 */

/** 攻撃ログクラス */
class Attack {
  /** ダメージ */
  damage = 0;
  /** タイプ相性 */
  matchup = null;
  /** カテキン */
  ginseng = 0;
  /** [表示用] 敵情報 */
  enemy = '';
  /** ダメージデータ */
  damageDatas = [];
  /** タイプ候補 */
  candidateType = [];

  /** 攻撃側データ (予備) */
  attacker = new Monster();
  /** 防御側データ (予備) */
  defender = new Monster();
  /** ダンジョンステータス (予備) */
  dungeonState = new DungeonState();
}

const choicesInstances = [];

/** デフォルトのポケモンID */
const DEFAULT_POKEMON_ID = 1;
/** デフォルトのダンジョンID */
const DEFAULT_DUNGEON_ID = 104;
/** カクレオンのポケモンID */
const POKEMON_KECREON_ID = 383;
/** なにかのポケモンID */
const POKEMON_DUMMY_ID = 553;
/** めざめるパワー 技ID */
const MOVE_HIDDENPOWER = 0x144;
/** めざめるパワー 威力テーブル */
const HIDDENPOWER_TABLE = [2, 4, 6, 7, 8, 9, 10, 13, 15, 17];

/** 攻撃ログ */
let attackLog = [];
/** ログの現在位置 (0=未指定(一番後), 1以上=攻撃ログIdx) */
let attackLogPointer = -1;

let attackerPokemonElement = null;
let attackerType1Element = null;
let attackerType2Element = null;
let attackerAbility1Element = null;
let attackerAbility2Element = null;
let attackerLevelElement = null;
let attackerApplyStatusElement = null;
let attackerStatusCElement = null;
let attackerStatusCStageElement = null;
let attackerStatusCStageHalfElement = null;
let attackerItemElement = null;
let attackerFlashFireElement = null;
let attackerPlusMinusElement = null;
let attackerAirBradeElement = null;
let defenderDungeonElement = null;
let defenderFloorElement = null;
let defenderEnemyElement = null;
let defenderStatusDElement = null;
let defenderStatusDStageElement = null;
let defenderIQElement = null;
let defenderSkillWrapElement = null;
let moveDamageElement = null;
let moveMatchupElement = null;
let moveGinsengElement = null;
let moveWeatherElement = null;
let moveFixedTypeElement = null;
let moveCriticalElement = null;
let moveBtnAttackElement = null;
let ctrlUndoElement = null;
let ctrlRedoElement = null;
let ctrlResetElement = null;
let tableAttackLogElement = null;
let btnModalResetElement = null;
let resultWrapElement = null;

document.addEventListener('DOMContentLoaded', async function () {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

  // JSON読込
  ({
    pokemon: window.PokemonData,
    move: window.MoveData,
    dungeon: window.DungeonData,
    floor: window.FloorData,
    mappa_s: window.MappaSData,
    type: window.TypeData,
    iqgroup: window.IQGroupData,
    iqskill: window.IQSkillData,
  } = await getJsonDatas(['pokemon', 'move', 'dungeon', 'floor', 'mappa_s', 'type', 'iqgroup', 'iqskill']));

  // 要素キャッシュ
  mainElement = document.getElementById('damage-hiddenpower');
  attackerPokemonElement = document.getElementById('attacker-pokemon');
  attackerType1Element = document.getElementById('attacker-type-1');
  attackerType2Element = document.getElementById('attacker-type-2');
  attackerAbility1Element = document.getElementById('attacker-ability-1');
  attackerAbility2Element = document.getElementById('attacker-ability-2');
  attackerLevelElement = document.getElementById('attacker-lv');
  attackerApplyStatusElement = document.getElementById('attacker-apply-status');
  attackerStatusCElement = document.getElementById('attacker-c');
  attackerStatusCStageElement = document.getElementById('attacker-c-stage');
  attackerStatusCStageHalfElement = document.getElementById('attacker-c-stage-half');
  attackerItemElement = document.getElementById('attacker-item');
  attackerFlashFireElement = document.getElementById('attacker-flash-fire');
  attackerPlusMinusElement = document.getElementById('attacker-plus-minus');
  attackerAirBradeElement = document.getElementById('attacker-air-brade');
  defenderDungeonElement = document.getElementById('defender-dungeon');
  defenderFloorElement = document.getElementById('defender-floor');
  defenderEnemyElement = document.getElementById('defender-enemy');
  defenderStatusDElement = document.getElementById('defender-d');
  defenderStatusDStageElement = document.getElementById('defender-d-stage');
  defenderIQElement = document.getElementById('defender-iq');
  defenderSkillWrapElement = document.getElementById('defender-skill-wrap');
  moveDamageElement = document.getElementById('move-damage');
  moveMatchupElement = document.getElementById('move-matchup');
  moveGinsengElement = document.getElementById('move-ginseng');
  moveWeatherElement = document.getElementById('move-weather');
  moveFixedTypeElement = document.getElementById('move-fixed-type');
  moveCriticalElement = document.getElementById('move-critical');
  moveBtnAttackElement = document.getElementById('move-btn-attack');
  ctrlUndoElement = document.getElementById('ctrl-undo');
  ctrlRedoElement = document.getElementById('ctrl-redo');
  ctrlResetElement = document.getElementById('ctrl-reset');
  tableAttackLogElement = document.getElementById('table-attack-log');
  btnModalResetElement = document.getElementById('btn-modal-reset');
  resultWrapElement = document.getElementById('result-wrap');

  // イベント
  const inputElements = document.querySelectorAll('#damage-hiddenpower input');
  for (const element of inputElements) {
    if (element.tagName === 'INPUT') {
      element.addEventListener('input', function (e) {
        if (element.type == 'number') {
          // inputの上限下限を超える値を入力できないようにする
          const min = Number(this.min);
          const max = Number(this.max);
          const value = Number(this.value);
          if (isNaN(value)) return;
          if (value < min) this.value = min;
          else if (value > max) this.value = max;

          // 数値以外の入力を除外
          this.value = this.value
            .replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0))
            .replace(/[^0-9]/g, '');
        }
      });
    }
  }
  attackerPokemonElement.addEventListener('change', function (e) {
    updatePokemonTypeAbility(e.target.value);
  });
  attackerApplyStatusElement.addEventListener('click', function () {
    applyAttackerStatus();
  });
  defenderDungeonElement.addEventListener('change', function () {
    setOptionsFloor();
    setOptionsEnemy();
  });
  defenderFloorElement.addEventListener('change', function () {
    setOptionsEnemy();
  });
  defenderEnemyElement.addEventListener('change', function () {
    changeEnemy();
  });
  moveWeatherElement.addEventListener('change', function () {
    applyDefenderSkill();
  });
  moveBtnAttackElement.addEventListener('click', function () {
    attackHiddenPower();
  });
  ctrlUndoElement.addEventListener('click', function () {
    undoAttackLog();
  });
  ctrlRedoElement.addEventListener('click', function () {
    redoAttackLog();
  });
  btnModalResetElement.addEventListener('click', function () {
    resetAttackLog();
  });

  // Optionセット
  setOptionsPokemon();
  setOptionsDungeon();
  setOptionsFloor();
  setOptionsEnemy();
  setOptionsWeather();

  // Choices初期化
  InitChoices();

  // 値更新
  updatePokemonTypeAbility();
  applyAttackerStatus();
});

/**
 * タイプ・特性を適用
 * @param {*} pokemonId
 * @returns
 */
function updatePokemonTypeAbility(pokemonId = -1) {
  if (!PokemonData) {
    console.error('PokemonData not found');
    return;
  }
  if (pokemonId < 0) {
    pokemonId = attackerPokemonElement.value;
  }

  const pokemon = PokemonData[pokemonId];
  // タイプ
  attackerType1Element.value = pokemon.Type1;
  attackerType2Element.value = pokemon.Type2;
  // 特性
  choicesInstances[attackerAbility1Element.id].setChoiceByValue(`${pokemon.Ability1}`);
  choicesInstances[attackerAbility2Element.id].setChoiceByValue(`${pokemon.Ability2}`);
}

/**
 * ポケモンのレベルに合わせたステータスをセット
 * @returns
 */
function applyAttackerStatus() {
  const pokemonId = attackerPokemonElement.value;
  const level = Number(attackerLevelElement.value);
  if (isNaN(level)) return;

  const status = getLevelStatus(pokemonId, level);
  attackerStatusCElement.value = status.c;
}

/**
 * 敵変更時処理 (ステータス更新/ランク初期化)
 */
function changeEnemy() {
  const pokemonId = Number(defenderEnemyElement.value);
  const level = Number(defenderEnemyElement.options[defenderEnemyElement.selectedIndex].dataset.level);
  const status = getLevelStatus(pokemonId, level);
  defenderStatusDElement.value = status.d;
  defenderStatusDStageElement.value = 10;

  // 敵のかしこさ表示を更新
  applyDefenderSkill();
}

function applyDefenderSkill() {
  let res = '';
  const defender = getDefender();
  const dungeonState = getDungeonState();
  // かしこさを適用
  defenderIQElement.value = defender.iq;
  // こうげきてき
  if (defender.iqSkillEnabled(0x22, dungeonState)) {
    res += `<span class="badge text-bg-danger">${IQSkillData[0x22].Name} 特防-1</span>`;
  }
  // みがまえる
  if (defender.iqSkillEnabled(0x23, dungeonState)) {
    res += `<span class="badge text-bg-primary">${IQSkillData[0x23].Name} 特防+1</span>`;
  }
  // すなあらし
  if (defender.perceivedWeather(dungeonState) == eos.WEATHER_SANDSTORM && defender.types.includes(eos.TYPE_ROCK)) {
    res += `<span class="badge text-bg-primary">すなあらし 特防+2</span>`;
  }
  defenderSkillWrapElement.innerHTML = res;
}

/**
 * ポケモンのレベルに合わせたステータスを取得
 * @param {*} pokemonId ポケモンID
 * @param {*} level レベル
 * @returns ステータス
 */
function getLevelStatus(pokemonId, level) {
  if (!PokemonData) {
    console.error('PokemonData not found');
    return;
  }

  const pokemon = PokemonData[pokemonId];

  // 成長率データ数、レベル数、100のうち最も近い値でループ
  let res = { a: 0, b: 0, c: 0, d: 0 };
  for (let i = 0; i < Math.min(...[pokemon.Stats.length, level, 100]); i++) {
    const stat = pokemon.Stats[i];
    res.a += Number(stat.A);
    res.b += Number(stat.B);
    res.c += Number(stat.C);
    res.d += Number(stat.D);
  }
  // 上限処理
  if (res.a > 255) res.a = 255;
  if (res.b > 255) res.b = 255;
  if (res.c > 255) res.c = 255;
  if (res.d > 255) res.d = 255;

  return res;
}

/**
 * 攻撃側データ取得
 * @returns 攻撃側
 */
function getAttacker() {
  const attacker = new Monster();
  attacker.id = Number(attackerPokemonElement.value);
  attacker.is_member = true;
  attacker.is_leader = true;
  attacker.types = [Number(attackerType1Element.value), Number(attackerType2Element.value)];
  attacker.abilities = [Number(attackerAbility1Element.value), Number(attackerAbility2Element.value)];
  attacker.level = Number(attackerLevelElement.value);
  attacker.sp_atk = Number(attackerStatusCElement.value);
  attacker.stage_sp_atk = Number(attackerStatusCStageElement.value);
  attacker.half_sp_atk = Number(attackerStatusCStageHalfElement.value);
  attacker.belly = 100;
  attacker.heldItem = Number(attackerItemElement.value);
  attacker.flash_fire_boost = Number(attackerFlashFireElement.value);
  attacker.exclusive_item_effect_flags[0x5b] = attackerAirBradeElement.checked;
  return attacker;
}

/**
 * 防御側データ取得
 * @returns 防御側
 */
function getDefender() {
  if (!PokemonData) {
    console.error('PokemonData not found');
    return;
  }
  const defender = new Monster();
  const defenderPokemonId = Number(defenderEnemyElement.value);
  const defenderPokemon = PokemonData[defenderPokemonId];
  const defenderLevel = Number(defenderEnemyElement.options[defenderEnemyElement.selectedIndex].dataset.level);
  //const defenderStatus = getLevelStatus(defenderPokemonId, defenderLevel);
  defender.id = defenderPokemonId;
  defender.is_member = false;
  defender.level = defenderLevel;
  defender.types = [defenderPokemon.Type1, defenderPokemon.Type2];
  defender.abilities = [defenderPokemon.Ability1, defenderPokemon.Ability2];
  defender.sp_def = Number(defenderStatusDElement.value);
  defender.stage_sp_def = Number(defenderStatusDStageElement.value);
  defender.belly = 100;
  // 防御側かしこさセット
  const enemyIQ = Number(defenderFloorElement.options[defenderFloorElement.selectedIndex].dataset.iqvalue);
  const iqgroup = IQGroupData[defenderPokemon.IQGroup];
  defender.iq = enemyIQ;
  for (const skillId of iqgroup) {
    if (enemyIQ >= IQSkillData[skillId].IQValue) {
      defender.iq_skill[skillId] = true;
    }
  }
  return defender;
}

/**
 * ダンジョン情報取得
 * @returns
 */
function getDungeonState() {
  const dungeonState = new DungeonState();
  dungeonState.weather = Number(moveWeatherElement.value);
  dungeonState.rng.criticalHit = moveCriticalElement.checked;
  dungeonState.plus[1] = attackerPlusMinusElement.checked;
  dungeonState.minus[1] = attackerPlusMinusElement.checked;
  return dungeonState;
}

/**
 * 攻撃処理
 */
function attackHiddenPower() {
  // 攻撃側
  const attacker = getAttacker();

  // 防御側
  const defender = getDefender();

  // ダンジョン情報
  const dungeonState = getDungeonState();

  // 技情報
  const move = new Move();
  move.id = MOVE_HIDDENPOWER;
  move.ginseng = Number(moveGinsengElement.value);

  // 攻撃情報
  const damage = Number(moveDamageElement.value);
  const matchup = Number(moveMatchupElement.value);

  // 参照先 (Undo/Redoの対応)
  const pointer = attackLogPointer >= 0 ? attackLogPointer : attackLog.length;

  // 検索対象のタイプを決める
  const allowType = new Map();
  const fixedType = parseInt(moveFixedTypeElement.value);
  if (fixedType > 0) {
    // 固定タイプが設定されていればそのタイプのみを候補とする
    allowType.set(fixedType, []);
  } else {
    const targetType = [];
    if (pointer > 0) {
      // 既に攻撃ログがあれば直前のタイプ候補が対象
      for (const key of attackLog[pointer - 1].candidateType.keys()) {
        targetType.push(key);
      }
    } else {
      // 攻撃ログが無ければなしを除く全タイプ対象
      for (let i = 1; i < TypeData.length; i++) {
        targetType.push(i);
      }
    }
    for (const type of targetType) {
      // タイプ相性をチェック
      const typeMatchups = [
        getTypeMatchUp(dungeonState, attacker, defender, 0, type),
        getTypeMatchUp(dungeonState, attacker, defender, 1, type),
      ];
      const typeMatchupRes = TYPE_MATCHUP_COMBINATOR_TABLE[typeMatchups[0]][typeMatchups[1]];
      if (typeMatchupRes == matchup) {
        allowType.set(type, []); // 候補タイプセット
      }
    }
  }

  const damageDatas = [];
  const damageDatasAll = [];
  for (const type of allowType.keys()) {
    // 検索対象のめざめるパワーの威力を決める
    let allowPower = [];
    if (pointer > 0) {
      // 直前の攻撃ログにある威力候補のみを対象 (タイプ参照)
      const allowPowerValues = attackLog[pointer - 1].candidateType.get(type);
      if (allowPowerValues) allowPower = allowPowerValues;
    } else {
      // 攻撃ログが無い(＝初回である)場合はすべての威力が対象
      allowPower = HIDDENPOWER_TABLE;
    }
    //console.log(TypeData[type].Name, allowPower);

    // めざめるパワーの各威力でダメージ計算を行い、結果を取得する
    for (const power of allowPower) {
      const attackerTmp = attacker.clone();
      attackerTmp.hidden_power_base_power = power;
      attackerTmp.hidden_power_type = type;

      const damageResult = RunCalcDamage(dungeonState, attackerTmp, defender, move, power);
      const damageData = {
        type: type,
        power: power,
        minDamage: damageResult.minDamage,
        maxDamage: damageResult.maxDamage,
        matchup: damageResult.details.typeMatchup.id,
      };
      // 入力したダメージが範囲内であれば配列にセット
      if (damageData.minDamage <= damage && damage <= damageData.maxDamage) {
        damageDatas.push(damageData);
        allowType.get(type).push(power);
      }
      damageDatasAll.push(damageData);
    }
  }
  // Undoした分のログを削除
  attackLog.splice(pointer);
  // 威力候補が無いタイプを削除
  for (const [key, arr] of allowType) {
    if (arr.length == 0) allowType.delete(key);
  }

  // 攻撃ログを追加
  const attack = new Attack();
  attack.damage = damage;
  attack.matchup = matchup;
  attack.ginseng = move.ginseng;
  attack.enemy = `Lv${defender.level} ${PokemonData[defender.id].Name}`;
  attack.damageDatas = damageDatas;
  attack.candidateType = allowType;
  attack.attacker = attacker;
  attack.defender = defender;
  attack.dungeonState = dungeonState;

  attackLog.push(attack);

  // 攻撃ログ表示を更新
  attackLogPointer = attackLog.length;
  updateAttackLogView();
  updateResultView();

  // 与ダメ値・タイプ相性・急所をリセット
  moveDamageElement.value = 0;
  moveMatchupElement.value = 2;
  moveCriticalElement.checked = false;
}

/**
 * 結果表示を更新
 */
function updateResultView() {
  let res = '';
  if (attackLog.length > 0 && attackLogPointer > 0) {
    const pointer = attackLogPointer - 1;
    const log = attackLog[pointer];
    const allowType = log.candidateType;
    const damageDatas = log.damageDatas;
    // タイプ候補
    if (allowType.size > 1) {
      res = `タイプ候補: `;
      const strings = [];
      for (const [key, arr] of allowType) {
        strings.push(TypeData[key].Name.replace(' ', ''));
      }
      res += strings.join('/');
    } else if (allowType.size == 1) {
      res = `<span class="text-success fw-bold">${TypeData[allowType.keys().next().value].Name}タイプで確定！</span>`;
    } else {
      res = '候補が見つかりません';
    }
    // 威力候補
    if (damageDatas.length > 0) {
      res += '<br>';
      const min = Math.min(...damageDatas.map((x) => x.power));
      const max = Math.max(...damageDatas.map((x) => x.power));
      if (min != max) {
        res += `威力候補: ${min}～${max}`;
      } else {
        res += `<span class="text-success fw-bold">威力${damageDatas[0].power}で確定！</span>`;
      }
    }
  }
  resultWrapElement.innerHTML = res;
}

/**
 * 攻撃ログの表示を更新
 */
function updateAttackLogView() {
  const isValid = attackLog.length > 0;
  const matchupStrings = [];
  for (const option of moveMatchupElement.options) {
    matchupStrings.push(option.text);
  }

  let res = '';
  for (let i = 0; i < attackLog.length; i++) {
    const log = attackLog[i];
    res += `
        <tr ${i > attackLogPointer - 1 ? 'class="visually-hidden"' : ''}>
          <td>${i + 1}</td>
          <td>${log.damage}${log.dungeonState.rng.criticalHit ? ' (急所)' : ''}</td>
          <td>${matchupStrings[log.matchup]}</td>
          <td>${log.enemy}</td>
        </tr>`;
  }
  tableAttackLogElement.tBodies[0].innerHTML = res;

  ctrlUndoElement.disabled = !isValid;
  ctrlRedoElement.disabled = attackLog.length == 0 || attackLog.length == attackLogPointer;
  ctrlResetElement.disabled = !isValid;
}

/**
 * 攻撃ログを元に戻す
 */
function undoAttackLog() {
  if (attackLogPointer == -1) attackLogPointer = attackLog.length;
  attackLogPointer--;
  updateAttackLogView();
  updateResultView();

  ctrlRedoElement.disabled = false;
  if (attackLogPointer == 0) {
    ctrlUndoElement.disabled = true;
  }
}

/**
 * 攻撃ログをやり直す
 */
function redoAttackLog() {
  attackLogPointer++;
  updateAttackLogView();
  updateResultView();

  ctrlUndoElement.disabled = false;
  if (attackLogPointer == attackLog.length) {
    ctrlRedoElement.disabled = true;
  }
}

/**
 * 攻撃ログをリセット
 */
function resetAttackLog() {
  attackLogPointer = -1;
  attackLog.length = 0;
  updateAttackLogView();
  updateResultView();
  bootstrap.Modal.getOrCreateInstance('#modal-reset').hide();
}

/**
 * ポケモンをセット
 * @returns
 */
function setOptionsPokemon() {
  if (!PokemonData) {
    console.error('PokemonData not found');
    return;
  }

  let res = '';
  for (const pokemon of PokemonData) {
    res += `
      <option value="${pokemon.Id}" ${pokemon.Id == DEFAULT_POKEMON_ID ? 'selected' : ''}>
        ${pokemon.Name}${pokemon.SubName ? ` - ${pokemon.SubName}` : ''}
      </option>`;
  }
  attackerPokemonElement.innerHTML = res;
}

/**
 * ダンジョンをセット
 * @returns
 */
function setOptionsDungeon() {
  if (!DungeonData) {
    console.error('DungeonData not found');
    return;
  }

  let res = '';
  for (let i = 0; i < DungeonData.length && i <= VALID_MAX_DUNGEON_ID; i++) {
    const dungeon = DungeonData[i];

    // ボスダンジョン(前フロア = 0 かつ フロア数 = 1)は除外
    if (dungeon.FloorPrev > 0 && dungeon.FloorCount == 1) continue;
    // フロアデータ領域外は除外
    if (dungeon.MappaIndex >= FloorData.length) continue;
    // 無効なフロアデータは除外
    if (dungeon.FloorPrev + 1 >= FloorData[dungeon.MappaIndex].length) continue;

    res += `
      <option value="${dungeon.Id}" ${dungeon.Id == DEFAULT_DUNGEON_ID ? 'selected' : ''}>
        ${formatRemoveTagString(dungeon.Name)}
      </option>`;
  }
  defenderDungeonElement.innerHTML = res;
}

/**
 * フロア項目をセット
 * @returns
 */
function setOptionsFloor() {
  if (!DungeonData) {
    console.error('DungeonData not found');
    return;
  }
  if (!FloorData) {
    console.error('FloorData not found');
    return;
  }

  const dungeonId = defenderDungeonElement.value;
  const dungeon = DungeonData[dungeonId];
  const floorPrev = dungeon.FloorPrev + 1;
  const floorCount = dungeon.FloorCount;
  const floors = FloorData[Number(dungeon.MappaIndex)];
  const stairs = dungeon.FlagStairs ? '' : 'B';

  let res = '';
  for (let i = 0; i < floorCount; i++) {
    const value = floorPrev + i;
    const floor = floors[value];
    const enemy = floor.IndexGroup.SpawnEnemy;
    const fixed = floor.FixedFloorId;
    const iqvalue = floor.EnemyIQ;
    const disabled = !isEnemySpawnableFixedFloor(floor.FixedFloorId);

    res += `
      <option value="${value}" data-floor="${i + 1}" data-enemy="${enemy}" data-fixed="${fixed}" data-iqvalue="${iqvalue}" ${disabled ? 'disabled' : ''}>
        ${stairs}${i + 1}F
      </option>`;
  }
  defenderFloorElement.innerHTML = res;
}

/**
 * 敵項目をセット
 * @returns
 */
function setOptionsEnemy() {
  if (!PokemonData) {
    console.error('PokemonData not found');
    return;
  }
  if (!MappaSData) {
    console.error('MappaSData not found');
    return;
  }

  // mappaデータから敵テーブル取得
  const mappaId = Number(defenderFloorElement.options[defenderFloorElement.selectedIndex].dataset.enemy);
  const mappa = MappaSData.EnemyData[mappaId];

  // データセット作成
  const dataset = [];
  for (const enemy of mappa) {
    const pokemonId = enemy.PokemonId;
    // なにかを除外
    if (pokemonId != POKEMON_DUMMY_ID) {
      dataset.push({ id: pokemonId, name: PokemonData[pokemonId].Name, level: enemy.Level });
    }
  }

  // 五十音順にソート
  dataset.sort((a, b) => {
    // カクレオンを一番後にする
    const aLast = a.id === POKEMON_KECREON_ID;
    const bLast = b.id === POKEMON_KECREON_ID;
    if (aLast !== bLast) return aLast ? 1 : -1;
    return a.name.localeCompare(b.name);
  });

  let res = '';
  for (const enemyPoke of dataset) {
    res += `
      <option value="${enemyPoke.id}" data-level="${enemyPoke.level}">
        Lv${enemyPoke.level} ${enemyPoke.name}
      </option>
    `;
  }
  defenderEnemyElement.innerHTML = res;

  // 敵情報更新
  changeEnemy();
}

/**
 * 天候項目をセット
 */
function setOptionsWeather() {
  let res = '';
  for (let i = 0; i < WEATHER_STRINGS.length; i++) {
    res += `<option value="${i}">${WEATHER_STRINGS[i]}</option>`;
  }
  moveWeatherElement.innerHTML = res;
}

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

  const choicesElements = document.querySelectorAll('#damage-hiddenpower select[data-choices]');
  for (const element of choicesElements) {
    if (element.id == 'move') {
      choicesInstances[element.id] = new Choices(element, choicesOptionsMove);
    } else {
      choicesInstances[element.id] = new Choices(element, choicesOptions);
    }
  }
}
