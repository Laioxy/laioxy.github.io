/*
  This code includes portions based on damage-eos by UsernameFodder
  https://github.com/UsernameFodder/damage-eos

  Original code portions:
  - MIT License (c) 2023 UsernameFodder

  ----------------------------------------------------------------
  Original License:
  ----------------------------------------------------------------
  MIT License

  Copyright (c) 2023 UsernameFodder

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/

import * as eos from './const.js';
import * as Mechanics from './mechanics.js';

/**
 * ポケモン構造体
 */
export class Monster {
  id = 0; // ポケモンID
  is_leader = false; // リーダーフラグ
  is_member = false; // チームメンバーフラグ
  gender = 0; // 性別 (0: 無効, 1: オス, 2: メス, 3: 不明)
  level = 0; // Lv
  hp = 0; // HP
  hp_max = 0; // 最大HP
  atk = 0; // 攻撃
  def = 0; // 防御
  sp_atk = 0; // 特攻
  sp_def = 0; // 特防
  stage_atk = 10; // 能力ランク 攻撃
  stage_def = 10; // 能力ランク 防御
  stage_sp_atk = 10; // 能力ランク 特攻
  stage_sp_def = 10; // 能力ランク 特防
  stage_accuracy = 10; // 能力ランク 命中率
  stage_evasion = 10; // 能力ランク 回避率
  iq = 0; // かしこさ
  half_atk = 0; // 半減ランク 攻撃
  half_def = 0; // 半減ランク 防御
  half_sp_atk = 0; // 半減ランク 特攻
  half_sp_def = 0; // 半減ランク 特防
  flash_fire_boost = 0; // もらいび数
  types = [0, 0]; // タイプ
  abilities = [0, 0]; // 特性
  hidden_power_type = 0; // めざめるパワーのタイプ
  hidden_power_base_power = 0; // めざめるパワーの威力
  heldItem = 0; // 装備中の道具
  heldItem_sticky = false; // ネバつき
  belly = 0; // おなか
  statuses = new Statuses(); // 状態異常
  iq_skill = new Array(69).fill(false); // かしこさフラグ
  exclusive_item_effect_flags = new Array(129).fill(false); // 専用道具効果フラグ
  exclusive_item_atk = 0; // 専用道具加算分 攻撃
  exclusive_item_def = 0; // 専用道具加算分 防御
  exclusive_item_sp_atk = 0; // 専用道具加算分 特攻
  exclusive_item_sp_def = 0; // 専用道具加算分 特防
  flag_me_first = false; // さきどりフラグ
  flag_practice_swinger = false; // かたならしフラグ
  flag_anger_point = false; // いかりのつぼフラグ

  n_moves_out_of_pp = 0; // (とっておき用) PPが残っている技数

  flag_td_timesheald = false; // [時闇]タイムシールドフラグ

  /**
   * ディープコピーの作成
   * @returns
   */
  clone() {
    const copy = new Monster();
    Object.assign(copy, this);
    return copy;
  }

  /**
   * 有効性を返す (常にtrue)
   * @returns
   */
  isValid() {
    return true;
  }
  isMonster() {
    return true;
  }

  /**
   * 対象の特性が有効であるかチェック
   * @param {*} abilityId
   * @returns
   */
  abilityActive(abilityId) {
    if (abilityId == 0) {
      return false;
    }
    return this.abilities.includes(abilityId);
  }
  /**
   * 対象の特性が有効であるかチェック (いえき・かたやぶり考慮)
   * @param {Number} abilityId
   * @param {Monster} attacker
   * @param {Boolean} attackerAbilityActive
   * @returns
   */
  abilityActiveDetails(abilityId, attacker, attackerAbilityActive) {
    if (this != attacker && attackerAbilityActive && this.abilityActive(83)) {
      return false;
    }
    return this.abilityActive(abilityId);
  }

  /**
   * かしこさが有効であるかチェック
   * @param {*} iq
   * @param {DungeonState} dungeonState
   * @returns
   */
  iqSkillEnabled(iq, dungeonState) {
    if (this.is_member && dungeonState.iq_disabled) {
      return false;
    }
    return this.iq_skill[iq];
  }

  /**
   * 道具を持っているかチェック (ネバつきを考慮)
   * @param {*} itemId
   */
  hasHeldItem(itemId) {
    return !this.heldItem_sticky && this.heldItem == itemId;
  }

  /**
   * 道具が有効であるかチェック (ぶきようを考慮)
   * @param {*} itemId
   * @returns
   */
  itemActive(itemId) {
    return !this.abilityActive(0x6f) && this.hasHeldItem(itemId);
  }

  /**
   * どの天気の影響を受けるか取得
   * @param {DungeonState} dungeon
   */
  perceivedWeather(dungeon) {
    // ノーてんバンダナを持っている場合, はれとみなす
    if (this.itemActive(0x34)) {
      return eos.WEATHER_CLEAR;
    }
    return dungeon.weather;
  }

  /**
   * 他のポケモンが対象の特性を持っているかチェック
   * @param {*} abilityId
   * @param {DungeonState} dungeon
   */
  otherMonsterAbilityActive(abilityId, dungeon) {
    return abilityId != 0 && !this.abilityActive(0x53) && dungeon.otherMonsters.abilities.includes(abilityId);
  }

  /**
   * 専用道具のステータス上昇効果を取得 (攻撃系)
   * @param {*} moveCategory
   * @returns
   */
  exclusiveItemOffenseBoost(moveCategory) {
    return moveCategory == eos.CATEGORY_PHYSICAL ? this.exclusive_item_atk : this.exclusive_item_sp_atk;
  }

  /**
   * 専用道具のステータス上昇効果を取得 (防御系)
   * @param {*} moveCategory
   * @returns
   */
  exclusiveItemDefenseBoost(moveCategory) {
    return moveCategory == eos.CATEGORY_PHYSICAL ? this.exclusive_item_def : this.exclusive_item_sp_def;
  }

  /**
   * 波動色リボンが有効かチェック
   * @returns
   */
  auraBowActive() {
    return (
      !this.abilityActive(0x6f) &&
      this.heldItem > 0 &&
      Mechanics.isAuraBow(this.heldItem) &&
      this.hasHeldItem(this.heldItem)
    );
  }

  /**
   * 悪い状態を持っているかチェック
   * @param {*} checkHeldItem 装備中の道具を考慮する
   * @returns
   */
  hasNegativeStatus(checkHeldItem = false) {
    const speedDown = this.speed == 0;
    return (
      // すいみん
      this.statuses.sleep ||
      // あくむ
      this.statuses.nightmare ||
      // やけど
      this.statuses.burn ||
      // どく
      this.statuses.poison ||
      // もうどく
      this.statuses.bad_poison ||
      // まひ
      this.statuses.paralysis ||
      // しきべつ？みやぶられた？
      this.statuses.identifying ||
      // こんらん
      this.statuses.confusion ||
      // いえき
      this.statuses.gastro_acid ||
      // えんまく
      this.statuses.whiffer ||
      // みおとしメガネ (リーダー以外)
      (checkHeldItem && !this.is_leader && this.itemActive(0xe)) ||
      // まどわし
      this.statuses.cross_eyed ||
      // ミラクルアイ
      this.statuses.miracle_eye ||
      // みやぶる
      this.statuses.exposed ||
      // どんそく
      speedDown ||
      // その他悪い状態
      this.statuses.other_negative_status
    );
  }

  /**
   * きもったまが有効な相手かチェック
   * @param {Monster} defender
   * @param {*} moveType
   * @param {DungeonState} dungeon
   */
  scrappyShouldActivate(defender, moveType, dungeon) {
    for (let i = 0; i < 2; i++) {
      if (
        this.abilityActive(0x57) && // きもったまが有効
        defender.types[i] == eos.TYPE_GHOST && // 防御側のタイプがゴースト
        Mechanics.typeIneffectiveAgainstGhost(moveType) // 技のタイプがノーマルか格闘
      ) {
        dungeon.damageCalc.scrappyActivated = true;
        return true;
      }
    }
    return false;
  }

  /**
   * このポケモンにきもったまの効果が発動するかチェック
   * @param {Monster} attacker
   * @param {*} typeIdx タイプのインデックス ※タイプIDではない
   * @returns
   */
  ghostImmunityActive(attacker, typeIdx) {
    return (
      this.types[typeIdx] == eos.TYPE_GHOST && !attacker.statuses.exposed && !attacker.exclusiveItemEffectActive(0x45)
    );
  }

  /**
   * 対象の専用道具効果が有効であるかチェック
   * @param {*} effectId
   * @returns
   */
  exclusiveItemEffectActive(effectId) {
    return this.is_member && this.exclusive_item_effect_flags[effectId];
  }

  /**
   * ポケモンがタイプや特性以外の要因で浮いているかチェック
   * @param {*} dungeon
   * @returns
   */
  hasConditionalGroundImmunity(dungeon) {
    return this.isValid() && !dungeon.gravity && this.statuses.magnet_rise;
  }

  /**
   * 特性ふゆうが有効であるかチェック (じゅうりょく状態を考慮)
   * @param {DungeonState} dungeon
   * @returns
   */
  levitateActive(dungeon) {
    return !dungeon.gravity && this.abilityActive(0x37);
  }

  /**
   * ポケモンのタイプが対象のタイプと一致しているか
   * @param {*} typeId
   * @returns
   */
  isType(typeId) {
    return typeId != eos.TYPE_NONE && (this.types[0] == typeId || this.types[1] == typeId);
  }

  /**
   * 技のタイプを取得 (ポケモンの特性・ステータスの影響を受ける)
   * @param {Number} moveId
   * @param {DungeonState} dungeon
   * @returns
   */
  getMoveType(moveId, dungeon) {
    // ノーマルスキン -> ノーマル
    if (!Mechanics.isRegularAttackOrProjectile(moveId) && this.isValid() && this.abilityActive(0x6b)) {
      return eos.TYPE_NORMAL;
    }
    // めざめるパワー
    if (moveId == 0x144) {
      return this.hidden_power_type;
    }
    // しぜんのめぐみ
    if (moveId == 0x1d7) {
      const ngInfo = this.naturalGiftInfo();
      if (ngInfo) {
        return ngInfo.typeId;
      }
    }
    // ウェザーボール
    if (moveId == 0x1f) {
      return this.weatherBallType(dungeon);
    }
    return Mechanics.getMoveType(moveId);
  }

  /**
   * 技の威力を取得 (増加分を考慮)
   * @param {Move} move
   * @returns
   */
  getMovePower(move) {
    // めざめるパワー
    if (move.id == 0x144) {
      return move.ginseng + this.hidden_power_base_power;
    }
    let power = move.ginseng + Mechanics.getMoveBasePower(move.id, move.timeDarkness);
    // じくうのオーブ -> 威力x2
    if (this.itemActive(0x2b)) power *= 2;
    return power;
  }

  /**
   * 擬似的な無敵状態になる溜め技をキャンセルさせるかチェック
   * @param {*} moveId
   * @returns
   */
  twoTurnMoveForcedMiss(moveId) {
    // そらをとぶ, とびはねる -> スカイアッパー, たつまき, かぜおこし, かみなり で止まる
    if (this.statuses.flying || this.statuses.bouncing) {
      return moveId != 0x88 && moveId != 0xa2 && moveId != 0x39 && moveId != 0x40;
    }

    if (!this.statuses.diving && !this.statuses.digging && !this.statuses.shadow_force) {
      return false;
    }
    // ダイビング -> うずしお, なみのり で止まる
    if (this.statuses.diving && (moveId == 0x20 || moveId == 0xdb)) {
      return false;
    }
    // あなをほる -> じしん, マグニチュード で止まる
    else if (this.statuses.digging) {
      if (moveId == 0x76 || moveId == 0x128) {
        return false;
      }
    }
    return true;
  }

  /**
   * しぜんのめぐみの能力を取得する
   * @returns
   */
  naturalGiftInfo() {
    if (!this.isMonster() || this.heldItem.id == 0) {
      return null;
    }
    for (let i = 0; i < Mechanics.NATURAL_GIFT_ITEM_TABLE.length; i++) {
      const ngInfo = Mechanics.NATURAL_GIFT_ITEM_TABLE[i];
      if (this.heldItem == ngInfo.itemId) {
        return ngInfo;
      }
    }
    return null;
  }

  /**
   * ウェザーボールのタイプを取得する
   * @param {DungeonState} dungeon
   * @returns
   */
  weatherBallType(dungeon) {
    return Mechanics.WEATHER_BALL_TYPE_TABLE[this.perceivedWeather(dungeon)];
  }

  /**
   * ポケモンの大きさを取得する (ひれいだま用)
   * @returns
   */
  getSize() {
    if (!PokemonData) {
      console.error('PokemonData not found');
      return false;
    }
    return PokemonData[this.id].Size;
  }
}

/**
 * 状態異常
 */
class Statuses {
  /* 眠り */
  sleep = false; // すいみん
  nightmare = false; // あくむ
  napping = false; // あくび

  /* ケガ */
  burn = false; // やけど
  poison = false; // どく
  bad_poison = false; // もうどく
  paralysis = false; // まひ
  identifying = false; // しきべつ (?)

  /* 心 */
  confusion = false; // こんらん

  /* 溜め技 */
  skull_bash = false; // ロケットずつき
  flying = false; // そらをとぶ
  bouncing = false; // とびはねる
  diving = false; // ダイビング
  digging = false; // あなをほる
  charge = false; // じゅうでん
  shadow_force = false; // シャドーダイブ

  /* 受け身 */
  reflect = false; // リフレクター
  light_screen = false; // ひかりのかべ
  lucky_chant = false; // おまじない

  /* 超能力 */
  gastro_acid = false; // いえき

  /* 命中 */
  sure_shot = false; // ひっちゅう
  whiffer = false; // えんまく
  focus_energy = false; // きあいだめ

  /* 視覚 */
  cross_eyed = false; // まどわし

  /* ミラクルアイ */
  miracle_eye = false; // ミラクルアイ

  /* でんじふゆう */
  magnet_rise = false; // でんじふゆう

  /* みやぶる */
  exposed = false; // みやぶる

  // 移動速度
  // 0=どんそく, 1=通常, 2=ばいそく, 3=さんばいそく, 4=よんばいそく
  speed = 1;

  // たくわえる回数
  stockpile = 0;

  /* その他悪い状態 */
  other_negative_status = false;

  /**
   * 有効性チェック (状態異常グループ, 移動速度・たくわえるの下限上限)
   * @returns
   */
  isValid() {
    if (this.sleep + this.nightmare + this.napping > 1) {
      return false;
    }
    if (this.burn + this.poison + this.bad_poison + this.paralysis + this.identifying > 1) {
      return false;
    }
    if (this.reflect + this.light_screen + this.lucky_chant > 1) {
      return false;
    }
    if (this.sure_shot + this.whiffer + this.focus_energy > 1) {
      return false;
    }
    if (this.speed < 0 || this.speed > 4) {
      return false;
    }
    if (this.stockpile > 3) {
      return false;
    }
    return true;
  }
}

/**
 * ダンジョン生成情報
 */
class DungeonGenerationInfo {
  fixedRoomId = 0;
}

/**
 * ダンジョンの状態
 */
export class DungeonState {
  weather = 0; // 天気
  mud_sport = false; // どろあそび
  water_sport = false; // みずあそび
  gravity = false; // じゅうりょく
  plus = [false, false]; // プラス (敵側, チーム側)
  minus = [false, false]; // マイナス (敵側, チーム側)
  iq_disabled = false; // かしこさ無効

  genInfo = new DungeonGenerationInfo();
  damageCalc = new DamageCalcDiag();

  rng = new DungeonRNG();
  otherMonsters = new Monster();

  // 以下オリジナル
  damageDetailLog = new DamageDetailLog();
  region_jp = true; // 日本版 (ギラティナフォルム補正バグ)
}

/**
 * ダメージデータ (pmdsky-debug: damage_data)
 */
export class DamageData {
  damage = 0; // 技のダメージ
  damageMessage = 0;
  typeMatchup = 2; // タイプ相性値 (0=効果無い, 1=今一つ, 2=普通, 3=抜群)
  type = 0; // 技のタイプ
  category = 0; // 技の分類

  // 急所に当たったか
  criticalHit = false;
  // もらいび, ふゆう, でんじふゆうによって無効化したか
  fullTypeImmunity = false;
  // ダメージを無効化したか
  noDamage = false;

  // 回復したか (ツール上では未使用)
  healed = false;
}

/**
 * ダメージ計算データ (pmdsky-debug: damage_calc_diag)
 */
export class DamageCalcDiag {
  moveType = 0; // 技のタイプ
  moveCategory = 0; // 技の分類
  moveIndivTypeMatchups = [0, 0]; // タイプ相性
  offensiveStatStage = 10;
  defensiveStatStage = 10;
  offensiveStat = 1;
  defensiveStat = 1;
  flashFireBoost = 0; // もらいび回数 (0～2)

  // 計算後の攻撃ステータス値
  offenseCalc = 0;
  // 計算後の防御ステータス値
  defenseCalc = 0;
  // 攻撃側のレベル
  attackerLevel = 0;
  // AT
  damageCalcAt = 0;
  // DEF
  damageCalcDef = 0;
  // FLV
  damageCalcFlv = 0;
  // ダメージ計算結果
  damageCalc = 0;
  damageCalcBase = 0;
  damageCalcRandomMultPct = 0;
  staticDamageMult = 0;
  // 道具による攻撃の上昇量
  itemAtkModifier = 0;
  // 道具による特攻の上昇量
  itemSpAtkModifier = 0;
  // 特性による攻撃系ランクの上昇量
  abilityOffenseModifier = 0;
  // 特性による防御系ランクの上昇量
  abilityDefenseModifier = 0;
  // かしこさによる攻撃系ランクの上昇量
  iqSkillOffenseModifier = 0;
  // かしこさによる防御系ランクの上昇量
  iqSkillDefenseModifier = 0;
  // 道具による防御の上昇量
  itemDefModifier = 0;
  // 道具による特防の上昇量
  itemSpDefModifier = 0;

  // ピンとレンズ, ねらいうちで急所率を上げているか
  scopeLensOrSharpshooterActivated = false;
  // ねらわれハチマキで急所率を上げているか
  patsyBandActivated = false;
  // リフレクター, タイムシールドで物理技を半減しているか
  halfPhysicalDamageActivated = false;
  // ひかりのかべ, みずのはごろもで特殊技を半減しているか
  halfSpecialDamageActivated = false;
  // 急所率が最大まで上昇しているか
  focusEnergyActivated = false;
  // あいしょうばつぐんの効果が発動しているか (弱点時急所40%)
  typeAdvantageMasterActivated = false;
  // ノーマルタイプ以外の技がくもりの影響を受けているか
  cloudyDropActivated = false;
  // 炎, 水タイプの技があめの影響を受けているか
  rainMultiplierActivated = false;
  // 炎, 水タイプの技がひざしがつよいの影響を受けているか
  sunnyMultiplierActivated = false;
  // 炎タイプの技があついしぼう, たいねつの影響を受けているか
  fireMoveAbilityDropActivated = false;
  // もらいびの効果でダメージを無効化したか
  flashFireActivated = false;
  // ふゆうの効果でダメージを無効化したか
  levitateActivated = false;
  // げきりゅうの効果で水タイプの技が強化されたか
  torrentBoostActivated = false;
  // しんりょくの効果で草タイプの技が強化されたか
  overgrowBoostActivated = false;
  // むしのしらせの効果で虫タイプの技が強化されたか
  swarmBoostActivated = false;
  // もうかの効果で炎タイプの技が強化されたか
  fireMoveAbilityBoostActivated = false;
  // きもったまの効果が発動したか
  scrappyActivated = false;
  // きょううんの効果が発動したか
  superLuckActivated = false;
  // スナイパーの効果が発動したか
  sniperActivated = false;
  // てきおうりょくの効果が発動したか
  stabBoostActivated = false;
  // 電気タイプの技がどろあそびの影響を受けているか
  electricMoveDampened = false;
  // 炎タイプの技がみずあそびの影響を受けているか
  waterSportDropActivated = false;
  // じゅうでんが有効か
  chargeBoostActivated = false;
  // みやぶる状態の効果が有効か
  ghostImmunityActivated = false;
  // ロケットずつきの溜め中に受けた物理技のダメージが軽減されたか
  skullBashDefenseBoostActivated = false;
  // 擬似無敵状態になる溜め技をキャンセルしたか
  twoTurnMoveForcedMiss = false;
  // ぼうおんによって技が失敗したか
  soundproofActivated = false;
  firstHitCheckFailed = false;
  // ひらいしんによって技が失敗したか
  lightningrodActivated = false;
  // よびみずによって技が失敗したか
  stormDrainActivated = false;
  // ゆめくいが失敗したか
  dreamEaterFailed = false;
  // とっておきが失敗したか
  lastResortFailed = false;
}

class DungeonRNG {
  /** ちからもち/ヨガパワーを使用 */
  hugePurePower = false;
  /** 強制的に急所 */
  criticalHit = false;
  /** ダメージ乱数補正 (0.0～1.0) */
  varianceDial = 0;

  /** 急所率 */
  critChance = 0;
  /** よちむが有効 */
  forewarnActive = false;
  /** 命中1 */
  hitChance1 = 125;
  /** 命中2 */
  hitChance2 = 125;

  rollHugePurePower() {
    return this.hugePurePower;
  }
  rollCriticalHit(critChance) {
    this.critChance = critChance;
    return this.criticalHit;
  }
  getComputedCritChance() {
    return this.critChance;
  }
  rollDamageVariance() {
    let simulatedRandOutcome = Math.min(Math.max(Math.round(this.varianceDial * 0x3fff), 0), 0x3fff);
    return (simulatedRandOutcome + 0xe000) / 0x10000;
  }
  /**
   * よちむ (mock)
   * @returns
   */
  rollForewarn() {
    this.forewarnActive = true;
    return false;
  }
  forewarnWasRolled() {
    return this.forewarnActive;
  }
  /**
   * 技の命中をチェック (mock)
   * @param {Number} hitChance
   * @param {Boolean} accuracy2
   */
  rollHitChance(hitChance, accuracy2) {
    if (accuracy2) {
      this.hitChance2 = hitChance;
    } else {
      this.hitChance1 = hitChance;
    }
    return true;
  }
  getHitChance1() {
    return this.hitChance1;
  }
  getHitChance2() {
    return this.hitChance2;
  }
  /**
   * 生の命中率を取得
   * @returns
   */
  getCombinedHitChanceRaw() {
    return (
      Math.min(this.hitChance1 ?? 100, 100) * Math.min(this.hitChance2 ?? 100, 100) * (this.forewarnActive ? 80 : 100)
    );
  }
  /**
   * 命中率を取得
   * @returns
   */
  getCombinedHitProbability() {
    return this.getCombinedHitChanceRaw() / 1e6;
  }
  /**
   * 命中率を%で取得
   * @returns
   */
  getCombinedHitPercentage() {
    return this.getCombinedHitChanceRaw() / 1e4;
  }
}

/**
 * 技構造体
 */
export class Move {
  /** 技ID */
  id = 0;
  /** 修正値 */
  ginseng = 0;
  /** PP */
  pp = 0;
  /** 連続命中回数 */
  priorSuccessiveHits = 0;
  /** 時闇の威力で計算 */
  timeDarkness = false;

  /**
   * ディープコピーの作成
   * @returns
   */
  clone() {
    const copy = new Move();
    Object.assign(copy, this);
    return copy;
  }
}

/**
 * しぜんのめぐみ構造体
 */
export class NaturalGiftInfo {
  /** 道具ID */
  itemId = 0;
  /** タイプ */
  typeId = 0;
  /** 追加される威力 */
  basePowerBoost = 0;

  constructor(itemId, typeId, basePowerBoost) {
    this.itemId = itemId;
    this.typeId = typeId;
    this.basePowerBoost = basePowerBoost;
  }
}

/**
 * 詳細記録用 (original)
 */
class DamageDetailLog {
  /** 最終的な技の威力 */
  attackPower = 0;
  /** 最終的な技のタイプ */
  attackType = eos.TYPE_NONE;

  /** ふしぎなまもり発動 */
  isWonderGuardActive = false;
  /** いろめがね発動 */
  isTintedLensActive = false;
  /** ハードロック発動 */
  isSolidRockActive = false;
  /** フィルター発動 */
  isFilterActive = false;
  /** タイムシールド発動 */
  isTimeShieldActive = false;
  /** タイムシールドバグ */
  isTimeShieldGlitch = false;
  /** テクニシャン発動 */
  isTechnicianActive = false;
  /** あついしぼう発動 */
  isThickFatActive = false;
  /** もらいび発動 */
  isFlashFireActive = false;
  /** たいねつ発動 */
  isHeatproofActive = false;
  /** ふゆう発動 */
  isLevitateActive = false;
  /** げきりゅう発動 */
  isTorrentActive = false;
  /** しんりょく発動 */
  isOvergrowActive = false;
  /** むしのしらせ発動 */
  isSwarmActive = false;
  /** もうか発動 */
  isBlazeActive = false;
  /** かんそうはだ発動 */
  isDrySkinActive = false;
  /** やけどの効果発動 */
  isBurnActive = false;
  /** てきおうりょくタイプ一致 */
  isAdaptabilitySTAB = false;
  /** 通常タイプ一致 */
  isSTAB = false;
  /** ひざしがつよい炎補正 */
  isSunnyFireActive = false;
  /** ひざしがつよい水補正 */
  isSunnyWaterActive = false;
  /** あめ炎補正 */
  isRainyFireActive = false;
  /** あめ水補正 */
  isRainyWaterActive = false;
  /** くもり補正 */
  isCloudyActive = false;
  /** きり補正 */
  isFogActive = false;
  /** どろあそび補正 */
  isMudSportActive = false;
  /** みずあそび補正 */
  isWaterSportActive = false;
  /** じゅうでん補正 */
  isChargeActive = false;

  // calcDamage
  /** さきどり発動 */
  isMeFirstActive = false;
  /** すてみ発動 */
  isRecklessActive = false;
  /** てつのこぶし発動 */
  isIronFistActive = false;
  /** ノーマルスキン発動 */
  isNormalizeActive = false;
  /** なかまくうふく状態 */
  isHungryPalActive = false;
  /** ごうわん発動 */
  isPowerPitcherActive = false;
  /** エアーブレード発動 */
  isAirBladeActive = false;

  /** 固定ダメージ */
  isFixedDamage = false;

  // simulateDamageCalc
  damageMult = 1;
}
