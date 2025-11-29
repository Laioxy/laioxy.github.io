(() => {
  // ns-hugo-imp:F:\Git\laioxy.github.io\assets\js\damage\const.js
  var CATEGORY_PHYSICAL = 0;
  var CATEGORY_SPECIAL = 1;
  var CATEGORY_STATUS = 2;
  var GENDER_FEMALE = 2;
  var GENDER_GENDERLESS = 3;
  var WEATHER_CLEAR = 0;
  var WEATHER_SUNNY = 1;
  var WEATHER_SANDSTORM = 2;
  var WEATHER_CLOUDY = 3;
  var WEATHER_RAIN = 4;
  var WEATHER_HAIL = 5;
  var WEATHER_FOG = 6;
  var WEATHER_SNOW = 7;
  var FIXED_SUBSTITUTE_ROOM = 110;
  var MATCHUP_IMMUNE = 0;
  var MATCHUP_NOT_VERY_EFFECTIVE = 1;
  var MATCHUP_NEUTRAL = 2;
  var MATCHUP_SUPER_EFFECTIVE = 3;
  var TYPE_NONE = 0;
  var TYPE_NORMAL = 1;
  var TYPE_FIRE = 2;
  var TYPE_WATER = 3;
  var TYPE_GRASS = 4;
  var TYPE_ELECTRIC = 5;
  var TYPE_ICE = 6;
  var TYPE_FIGHTING = 7;
  var TYPE_POISON = 8;
  var TYPE_GROUND = 9;
  var TYPE_FLYING = 10;
  var TYPE_PSYCHIC = 11;
  var TYPE_BUG = 12;
  var TYPE_ROCK = 13;
  var TYPE_GHOST = 14;
  var TYPE_DRAGON = 15;
  var TYPE_DARK = 16;
  var TYPE_STEEL = 17;
  var DAMAGE_MESSAGE_MOVE = 0;
  var DAMAGE_MESSAGE_BURN = 1;
  var DAMAGE_MESSAGE_CONSTRICTION = 2;
  var DAMAGE_MESSAGE_POISON = 3;
  var DAMAGE_MESSAGE_RECOIL_1 = 4;
  var DAMAGE_MESSAGE_WRAP = 5;
  var DAMAGE_MESSAGE_COUNTER = 6;
  var DAMAGE_MESSAGE_CURSE = 7;
  var DAMAGE_MESSAGE_NIGHTMARE = 8;
  var DAMAGE_MESSAGE_LEECH_SEED = 9;
  var DAMAGE_MESSAGE_SPIKES = 10;
  var DAMAGE_MESSAGE_PERISH_SONG = 11;
  var DAMAGE_MESSAGE_DESTINY_BOND = 12;
  var DAMAGE_MESSAGE_SLUDGE = 13;
  var DAMAGE_MESSAGE_HUNGER = 14;
  var DAMAGE_MESSAGE_CHESTNUT_1 = 15;
  var DAMAGE_MESSAGE_CHESTNUT_2 = 16;
  var DAMAGE_MESSAGE_PITFALL_TRAP = 17;
  var DAMAGE_MESSAGE_BAD_WEATHER = 18;
  var DAMAGE_MESSAGE_MISSED_MOVE = 19;
  var DAMAGE_MESSAGE_RECOIL_2 = 20;
  var DAMAGE_MESSAGE_STEALTH_ROCK = 21;
  var DAMAGE_MESSAGE_TOXIC_SPIKES = 22;
  var DAMAGE_MESSAGE_ALMOST_FAINTED = 23;
  var DAMAGE_MESSAGE_BAD_DREAMS = 24;
  var DAMAGE_MESSAGE_SOLAR_POWER = 25;
  var DAMAGE_MESSAGE_DRY_SKIN = 26;

  // ns-hugo-imp:F:\Git\laioxy.github.io\assets\js\damage\structure.js
  var Monster = class _Monster {
    id = 0;
    // ポケモンID
    is_leader = false;
    // リーダーフラグ
    is_member = false;
    // チームメンバーフラグ
    gender = 0;
    // 性別 (0: 無効, 1: オス, 2: メス, 3: 不明)
    level = 0;
    // Lv
    hp = 0;
    // HP
    hp_max = 0;
    // 最大HP
    atk = 0;
    // 攻撃
    def = 0;
    // 防御
    sp_atk = 0;
    // 特攻
    sp_def = 0;
    // 特防
    stage_atk = 10;
    // 能力ランク 攻撃
    stage_def = 10;
    // 能力ランク 防御
    stage_sp_atk = 10;
    // 能力ランク 特攻
    stage_sp_def = 10;
    // 能力ランク 特防
    stage_accuracy = 10;
    // 能力ランク 命中率
    stage_evasion = 10;
    // 能力ランク 回避率
    iq = 0;
    // かしこさ
    half_atk = 0;
    // 半減ランク 攻撃
    half_def = 0;
    // 半減ランク 防御
    half_sp_atk = 0;
    // 半減ランク 特攻
    half_sp_def = 0;
    // 半減ランク 特防
    flash_fire_boost = 0;
    // もらいび数
    types = [0, 0];
    // タイプ
    abilities = [0, 0];
    // 特性
    hidden_power_type = 0;
    // めざめるパワーのタイプ
    hidden_power_base_power = 0;
    // めざめるパワーの威力
    heldItem = 0;
    // 装備中の道具
    heldItem_sticky = false;
    // ネバつき
    belly = 0;
    // おなか
    statuses = new Statuses();
    // 状態異常
    iq_skill = new Array(69).fill(false);
    // かしこさフラグ
    exclusive_item_effect_flags = new Array(129).fill(false);
    // 専用道具効果フラグ
    exclusive_item_atk = 0;
    // 専用道具加算分 攻撃
    exclusive_item_def = 0;
    // 専用道具加算分 防御
    exclusive_item_sp_atk = 0;
    // 専用道具加算分 特攻
    exclusive_item_sp_def = 0;
    // 専用道具加算分 特防
    flag_me_first = false;
    // さきどりフラグ
    flag_practice_swinger = false;
    // かたならしフラグ
    flag_anger_point = false;
    // いかりのつぼフラグ
    n_moves_out_of_pp = 0;
    // (とっておき用) PPが残っている技数
    flag_td_timesheald = false;
    // [時闇]タイムシールドフラグ
    /**
     * ディープコピーの作成
     * @returns
     */
    clone() {
      const copy = new _Monster();
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
      return !this.abilityActive(111) && this.hasHeldItem(itemId);
    }
    /**
     * どの天気の影響を受けるか取得
     * @param {DungeonState} dungeon
     */
    perceivedWeather(dungeon) {
      if (this.itemActive(52)) {
        return WEATHER_CLEAR;
      }
      return dungeon.weather;
    }
    /**
     * 他のポケモンが対象の特性を持っているかチェック
     * @param {*} abilityId
     * @param {DungeonState} dungeon
     */
    otherMonsterAbilityActive(abilityId, dungeon) {
      return abilityId != 0 && !this.abilityActive(83) && dungeon.otherMonsters.abilities.includes(abilityId);
    }
    /**
     * 専用道具のステータス上昇効果を取得 (攻撃系)
     * @param {*} moveCategory
     * @returns
     */
    exclusiveItemOffenseBoost(moveCategory) {
      return moveCategory == CATEGORY_PHYSICAL ? this.exclusive_item_atk : this.exclusive_item_sp_atk;
    }
    /**
     * 専用道具のステータス上昇効果を取得 (防御系)
     * @param {*} moveCategory
     * @returns
     */
    exclusiveItemDefenseBoost(moveCategory) {
      return moveCategory == CATEGORY_PHYSICAL ? this.exclusive_item_def : this.exclusive_item_sp_def;
    }
    /**
     * 波動色リボンが有効かチェック
     * @returns
     */
    auraBowActive() {
      return !this.abilityActive(111) && this.heldItem > 0 && isAuraBow(this.heldItem) && this.hasHeldItem(this.heldItem);
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
        this.statuses.sleep || // あくむ
        this.statuses.nightmare || // やけど
        this.statuses.burn || // どく
        this.statuses.poison || // もうどく
        this.statuses.bad_poison || // まひ
        this.statuses.paralysis || // しきべつ？みやぶられた？
        this.statuses.identifying || // こんらん
        this.statuses.confusion || // いえき
        this.statuses.gastro_acid || // えんまく
        this.statuses.whiffer || // みおとしメガネ (リーダー以外)
        checkHeldItem && !this.is_leader && this.itemActive(14) || // まどわし
        this.statuses.cross_eyed || // ミラクルアイ
        this.statuses.miracle_eye || // みやぶる
        this.statuses.exposed || // どんそく
        speedDown || // その他悪い状態
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
        if (this.abilityActive(87) && // きもったまが有効
        defender.types[i] == TYPE_GHOST && // 防御側のタイプがゴースト
        typeIneffectiveAgainstGhost(moveType)) {
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
      return this.types[typeIdx] == TYPE_GHOST && !attacker.statuses.exposed && !attacker.exclusiveItemEffectActive(69);
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
      return !dungeon.gravity && this.abilityActive(55);
    }
    /**
     * ポケモンのタイプが対象のタイプと一致しているか
     * @param {*} typeId
     * @returns
     */
    isType(typeId) {
      return typeId != TYPE_NONE && (this.types[0] == typeId || this.types[1] == typeId);
    }
    /**
     * 技のタイプを取得 (ポケモンの特性・ステータスの影響を受ける)
     * @param {Number} moveId
     * @param {DungeonState} dungeon
     * @returns
     */
    getMoveType(moveId, dungeon) {
      if (!isRegularAttackOrProjectile(moveId) && this.isValid() && this.abilityActive(107)) {
        return TYPE_NORMAL;
      }
      if (moveId == 324) {
        return this.hidden_power_type;
      }
      if (moveId == 471) {
        const ngInfo = this.naturalGiftInfo();
        if (ngInfo) {
          return ngInfo.typeId;
        }
      }
      if (moveId == 31) {
        return this.weatherBallType(dungeon);
      }
      return getMoveType(moveId);
    }
    /**
     * 技の威力を取得 (増加分を考慮)
     * @param {Move} move
     * @returns
     */
    getMovePower(move2) {
      if (move2.id == 324) {
        return move2.ginseng + this.hidden_power_base_power;
      }
      let power = move2.ginseng + getMoveBasePower(move2.id, move2.timeDarkness);
      if (this.itemActive(43)) power *= 2;
      return power;
    }
    /**
     * 擬似的な無敵状態になる溜め技をキャンセルさせるかチェック
     * @param {*} moveId
     * @returns
     */
    twoTurnMoveForcedMiss(moveId) {
      if (this.statuses.flying || this.statuses.bouncing) {
        return moveId != 136 && moveId != 162 && moveId != 57 && moveId != 64;
      }
      if (!this.statuses.diving && !this.statuses.digging && !this.statuses.shadow_force) {
        return false;
      }
      if (this.statuses.diving && (moveId == 32 || moveId == 219)) {
        return false;
      } else if (this.statuses.digging) {
        if (moveId == 118 || moveId == 296) {
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
      for (let i = 0; i < NATURAL_GIFT_ITEM_TABLE.length; i++) {
        const ngInfo = NATURAL_GIFT_ITEM_TABLE[i];
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
      return WEATHER_BALL_TYPE_TABLE[this.perceivedWeather(dungeon)];
    }
    /**
     * ポケモンの大きさを取得する (ひれいだま用)
     * @returns
     */
    getSize() {
      if (!PokemonData) {
        console.error("PokemonData not found");
        return false;
      }
      return PokemonData[this.id].Size;
    }
  };
  var Statuses = class {
    /* 眠り */
    sleep = false;
    // すいみん
    nightmare = false;
    // あくむ
    napping = false;
    // あくび
    /* ケガ */
    burn = false;
    // やけど
    poison = false;
    // どく
    bad_poison = false;
    // もうどく
    paralysis = false;
    // まひ
    identifying = false;
    // しきべつ (?)
    /* 心 */
    confusion = false;
    // こんらん
    /* 溜め技 */
    skull_bash = false;
    // ロケットずつき
    flying = false;
    // そらをとぶ
    bouncing = false;
    // とびはねる
    diving = false;
    // ダイビング
    digging = false;
    // あなをほる
    charge = false;
    // じゅうでん
    shadow_force = false;
    // シャドーダイブ
    /* 受け身 */
    reflect = false;
    // リフレクター
    light_screen = false;
    // ひかりのかべ
    lucky_chant = false;
    // おまじない
    /* 超能力 */
    gastro_acid = false;
    // いえき
    /* 命中 */
    sure_shot = false;
    // ひっちゅう
    whiffer = false;
    // えんまく
    focus_energy = false;
    // きあいだめ
    /* 視覚 */
    cross_eyed = false;
    // まどわし
    /* ミラクルアイ */
    miracle_eye = false;
    // ミラクルアイ
    /* でんじふゆう */
    magnet_rise = false;
    // でんじふゆう
    /* みやぶる */
    exposed = false;
    // みやぶる
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
  };
  var DungeonGenerationInfo = class {
    fixedRoomId = 0;
  };
  var DungeonState = class {
    weather = 0;
    // 天気
    mud_sport = false;
    // どろあそび
    water_sport = false;
    // みずあそび
    gravity = false;
    // じゅうりょく
    plus = [false, false];
    // プラス (敵側, チーム側)
    minus = [false, false];
    // マイナス (敵側, チーム側)
    iq_disabled = false;
    // かしこさ無効
    genInfo = new DungeonGenerationInfo();
    damageCalc = new DamageCalcDiag();
    rng = new DungeonRNG();
    otherMonsters = new Monster();
    // 以下オリジナル
    damageDetailLog = new DamageDetailLog();
    region_jp = true;
    // 日本版 (ギラティナフォルム補正バグ)
  };
  var DamageData = class {
    damage = 0;
    // 技のダメージ
    damageMessage = 0;
    typeMatchup = 2;
    // タイプ相性値 (0=効果無い, 1=今一つ, 2=普通, 3=抜群)
    type = 0;
    // 技のタイプ
    category = 0;
    // 技の分類
    // 急所に当たったか
    criticalHit = false;
    // もらいび, ふゆう, でんじふゆうによって無効化したか
    fullTypeImmunity = false;
    // ダメージを無効化したか
    noDamage = false;
    // 回復したか (ツール上では未使用)
    healed = false;
  };
  var DamageCalcDiag = class {
    moveType = 0;
    // 技のタイプ
    moveCategory = 0;
    // 技の分類
    moveIndivTypeMatchups = [0, 0];
    // タイプ相性
    offensiveStatStage = 10;
    defensiveStatStage = 10;
    offensiveStat = 1;
    defensiveStat = 1;
    flashFireBoost = 0;
    // もらいび回数 (0～2)
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
  };
  var DungeonRNG = class {
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
      let simulatedRandOutcome = Math.min(Math.max(Math.round(this.varianceDial * 16383), 0), 16383);
      return (simulatedRandOutcome + 57344) / 65536;
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
      return Math.min(this.hitChance1 ?? 100, 100) * Math.min(this.hitChance2 ?? 100, 100) * (this.forewarnActive ? 80 : 100);
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
  };
  var Move = class _Move {
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
      const copy = new _Move();
      Object.assign(copy, this);
      return copy;
    }
  };
  var NaturalGiftInfo = class {
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
  };
  var DamageDetailLog = class {
    /** 最終的な技の威力 */
    attackPower = 0;
    /** 最終的な技のタイプ */
    attackType = TYPE_NONE;
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
  };

  // ns-hugo-imp:F:\Git\laioxy.github.io\assets\js\damage\mechanics.js
  var CONST_0_25 = 64 / 256;
  var CONST_0_50 = 128 / 256;
  var CONST_0_60 = 153 / 256;
  var CONST_0_70 = 181 / 256;
  var CONST_0_75 = 192 / 256;
  var CONST_0_80 = 204 / 256;
  var CONST_1_20 = 1 + 51 / 256;
  var CONST_1_25 = 1 + 64 / 256;
  var CONST_1_33 = 1 + 84 / 256;
  var CONST_1_40 = 1 + 102 / 256;
  var CONST_1_50 = 1 + 128 / 256;
  var CONST_1_70 = 1 + 179 / 256;
  var CONST_NEG0_5 = -1 + 128 / 256;
  var CONST_153_DIV_256 = 153 / 256;
  var CONST_1_DIV_SQRT2 = 181 / 256;
  var CONST_85_DIV_64 = 1 + 84 / 256;
  var TYPE_MATCHUP_COMBINATOR_TABLE = [
    [MATCHUP_IMMUNE, MATCHUP_IMMUNE, MATCHUP_IMMUNE, MATCHUP_NOT_VERY_EFFECTIVE],
    [MATCHUP_IMMUNE, MATCHUP_NOT_VERY_EFFECTIVE, MATCHUP_NOT_VERY_EFFECTIVE, MATCHUP_NEUTRAL],
    [MATCHUP_IMMUNE, MATCHUP_NOT_VERY_EFFECTIVE, MATCHUP_NEUTRAL, MATCHUP_SUPER_EFFECTIVE],
    [MATCHUP_NOT_VERY_EFFECTIVE, MATCHUP_NEUTRAL, MATCHUP_SUPER_EFFECTIVE, MATCHUP_SUPER_EFFECTIVE]
  ];
  var MATCHUP_IMMUNE2 = CONST_0_50;
  var MATCHUP_NOTVERY = CONST_0_70;
  var MATCHUP_NEUTRAL2 = 1;
  var MATCHUP_SUPER = CONST_1_40;
  var MATCHUP_IMMUNE_ERRATIC = CONST_0_25;
  var MATCHUP_NOTVERY_ERRATIC = CONST_0_50;
  var MATCHUP_NEUTRAL_ERRATIC = 1;
  var MATCHUP_SUPER_ERRATIC = CONST_1_70;
  var TYPE_DAMAGE_NEGATING_EXCLUSIVE_ITEM_EFFECTS = [
    // 無効
    { type: TYPE_FIRE, effect: 102 },
    { type: TYPE_WATER, effect: 103 },
    { type: TYPE_GRASS, effect: 104 },
    { type: TYPE_ELECTRIC, effect: 105 },
    { type: TYPE_FIGHTING, effect: 106 },
    { type: TYPE_GROUND, effect: 107 },
    { type: TYPE_FLYING, effect: 108 },
    { type: TYPE_PSYCHIC, effect: 109 },
    { type: TYPE_GHOST, effect: 110 },
    { type: TYPE_DRAGON, effect: 111 },
    { type: TYPE_DARK, effect: 112 },
    { type: TYPE_STEEL, effect: 113 },
    // 吸収
    { type: TYPE_FIRE, effect: 114 },
    { type: TYPE_WATER, effect: 115 },
    { type: TYPE_GRASS, effect: 116 },
    { type: TYPE_ELECTRIC, effect: 117 },
    { type: TYPE_ICE, effect: 118 },
    { type: TYPE_FIGHTING, effect: 119 },
    { type: TYPE_GROUND, effect: 120 },
    { type: TYPE_FLYING, effect: 121 },
    { type: TYPE_PSYCHIC, effect: 122 },
    { type: TYPE_BUG, effect: 123 },
    { type: TYPE_ROCK, effect: 124 },
    { type: TYPE_GHOST, effect: 125 },
    { type: TYPE_DRAGON, effect: 126 },
    { type: TYPE_DARK, effect: 127 },
    { type: TYPE_STEEL, effect: 128 },
    { type: TYPE_NONE, effect: 129 }
  ];
  var EXCL_ITEM_EFFECTS_EVASION_BOOST = [61, 62, 63, 64, 65, 66, 67, 0];
  var DIG_DAMAGE_MULTIPLIER = 2;
  var RAZOR_WIND_DAMAGE_MULTIPLIER = 2;
  var FACADE_DAMAGE_MULTIPLIER = 2;
  var FOCUS_PUNCH_DAMAGE_MULTIPLIER = 2;
  var SKY_ATTACK_DAMAGE_MULTIPLIER = 2;
  var SOLARBEAM_DAMAGE_MULTIPLIER = 2;
  var FLY_DAMAGE_MULTIPLIER = 2;
  var DIVE_DAMAGE_MULTIPLIER = 2;
  var BOUNCE_DAMAGE_MULTIPLIER = 2;
  var SKULL_BASH_DAMAGE_MULTIPLIER = 2;
  var SHADOW_FORCE_DAMAGE_MULTIPLIER = 2;
  var ROLLOUT_DAMAGE_MULT_TABLE = [
    1,
    1 + 25 / 256,
    // 1.10
    CONST_1_20,
    1 + 76 / 256,
    // 1.30
    CONST_1_40,
    CONST_1_50,
    1 + 153 / 256,
    // 1.60
    CONST_1_70,
    1 + 204 / 256,
    // 1.80
    1 + 230 / 256
    // 1.90
  ];
  var REVERSAL_DAMAGE_MULT_TABLE = [2, CONST_1_50, 1, 1];
  var WATER_SPOUT_DAMAGE_MULT_TABLE = [
    25 / 256,
    // 0.10
    51 / 256,
    // 0.20
    CONST_0_50,
    1
  ];
  var ERUPTION_DAMAGE_MULT_TABLE = [
    25 / 256,
    // 0.10
    51 / 256,
    // 0.20
    CONST_0_50,
    1
  ];
  var WRING_OUT_DAMAGE_MULT_TABLE = [
    25 / 256,
    // 0.10
    51 / 256,
    // 0.20
    CONST_0_50,
    1
  ];
  var LAST_RESORT_DAMAGE_MULT_TABLE = [
    1,
    CONST_0_50,
    2,
    2
    // 未使用
  ];
  var WEATHER_BALL_DAMAGE_MULT_TABLE = [
    1,
    // はれ
    2,
    // ひざしがつよい (2倍)
    2,
    // すなあらし (2倍)
    1,
    // くもり
    2,
    // あめ (2倍)
    2,
    // あられ (2倍)
    1,
    // きり
    2
    // ゆき (2倍)
  ];
  var WEATHER_BALL_TYPE_TABLE = [
    1,
    // はれ -> ノーマル
    2,
    // ひざしがつよい -> ほのお
    13,
    // すなあらし -> いわ
    1,
    // くもり -> ノーマル
    3,
    // あめ -> みず
    6,
    // あられ -> こおり
    1,
    // きり -> ノーマル
    6
    // ゆき -> こおり
  ];
  var OFFENSIVE_STAT_STAGE_MULTIPLIERS = [
    0 + 128 / 256,
    // 0.5
    0 + 133 / 256,
    // 0.52
    0 + 138 / 256,
    // 0.54
    0 + 143 / 256,
    // 0.56
    0 + 148 / 256,
    // 0.58
    0 + 153 / 256,
    // 0.6
    0 + 161 / 256,
    // 0.63
    0 + 171 / 256,
    // 0.67
    0 + 179 / 256,
    // 0.7
    0 + 204 / 256,
    // 0.8
    1 + 0 / 256,
    // 1
    1 + 51 / 256,
    // 1.2
    1 + 76 / 256,
    // 1.3
    1 + 102 / 256,
    // 1.4
    1 + 128 / 256,
    // 1.5
    1 + 153 / 256,
    // 1.6
    1 + 166 / 256,
    // 1.64
    1 + 179 / 256,
    // 1.7
    1 + 192 / 256,
    // 1.75
    1 + 204 / 256,
    // 1.8
    1 + 217 / 256
    // 1.85
  ];
  var DEFENSIVE_STAT_STAGE_MULTIPLIERS = [
    0 + 7 / 256,
    // 0.03
    0 + 12 / 256,
    // 0.05
    0 + 25 / 256,
    // 0.1
    0 + 38 / 256,
    // 0.15
    0 + 51 / 256,
    // 0.2
    0 + 64 / 256,
    // 0.25
    0 + 76 / 256,
    // 0.3
    0 + 102 / 256,
    // 0.4
    0 + 128 / 256,
    // 0.5
    0 + 179 / 256,
    // 0.7
    1 + 0 / 256,
    // 1
    1 + 76 / 256,
    // 1.3
    1 + 153 / 256,
    // 1.6
    1 + 230 / 256,
    // 1.9
    2 + 25 / 256,
    // 2.1
    2 + 76 / 256,
    // 2.3
    2 + 128 / 256,
    // 2.5
    2 + 179 / 256,
    // 2.7
    2 + 230 / 256,
    // 2.9
    3 + 25 / 256,
    // 3.1
    3 + 76 / 256
    // 3.3
  ];
  var MALE_ACCURACY_STAGE_MULTIPLIERS = [
    0 + 84 / 256,
    // 0.33
    0 + 89 / 256,
    // 0.35
    0 + 94 / 256,
    // 0.37
    0 + 102 / 256,
    // 0.4
    0 + 110 / 256,
    // 0.43
    0 + 115 / 256,
    // 0.45
    0 + 140 / 256,
    // 0.55
    0 + 153 / 256,
    // 0.6
    0 + 179 / 256,
    // 0.7
    0 + 204 / 256,
    // 0.8
    1 + 0 / 256,
    // 1
    1 + 64 / 256,
    // 1.25
    1 + 128 / 256,
    // 1.5
    1 + 153 / 256,
    // 1.6
    1 + 166 / 256,
    // 1.65
    1 + 179 / 256,
    // 1.7
    1 + 192 / 256,
    // 1.75
    1 + 204 / 256,
    // 1.8
    1 + 217 / 256,
    // 1.85
    1 + 230 / 256,
    // 1.9
    2 + 0 / 256
    // 2
  ];
  var MALE_EVASION_STAGE_MULTIPLIERS = [
    2 + 0 / 256,
    // 2
    1 + 230 / 256,
    // 1.9
    1 + 217 / 256,
    // 1.85
    1 + 204 / 256,
    // 1.8
    1 + 192 / 256,
    // 1.75
    1 + 179 / 256,
    // 1.7
    1 + 166 / 256,
    // 1.65
    1 + 153 / 256,
    // 1.6
    1 + 128 / 256,
    // 1.5
    1 + 89 / 256,
    // 1.35
    1 + 7 / 256,
    // 1.03
    0 + 204 / 256,
    // 0.8
    0 + 179 / 256,
    // 0.7
    0 + 153 / 256,
    // 0.6
    0 + 128 / 256,
    // 0.5
    0 + 102 / 256,
    // 0.4
    0 + 89 / 256,
    // 0.35
    0 + 76 / 256,
    // 0.3
    0 + 64 / 256,
    // 0.25
    0 + 51 / 256,
    // 0.2
    0 + 38 / 256
    // 0.15
  ];
  var FEMALE_ACCURACY_STAGE_MULTIPLIERS = [
    0 + 84 / 256,
    // 0.33
    0 + 89 / 256,
    // 0.35
    0 + 94 / 256,
    // 0.37
    0 + 102 / 256,
    // 0.4
    0 + 110 / 256,
    // 0.43
    0 + 115 / 256,
    // 0.45
    0 + 140 / 256,
    // 0.55
    0 + 153 / 256,
    // 0.6
    0 + 179 / 256,
    // 0.7
    0 + 204 / 256,
    // 0.8
    1 + 12 / 256,
    // 1.05
    1 + 64 / 256,
    // 1.25
    1 + 128 / 256,
    // 1.5
    1 + 153 / 256,
    // 1.6
    1 + 166 / 256,
    // 1.65
    1 + 179 / 256,
    // 1.7
    1 + 192 / 256,
    // 1.75
    1 + 204 / 256,
    // 1.8
    1 + 217 / 256,
    // 1.85
    1 + 230 / 256,
    // 1.9
    2 + 0 / 256
    // 2
  ];
  var FEMALE_EVASION_STAGE_MULTIPLIERS = [
    2 + 0 / 256,
    // 2
    1 + 230 / 256,
    // 1.9
    1 + 217 / 256,
    // 1.85
    1 + 204 / 256,
    // 1.8
    1 + 192 / 256,
    // 1.75
    1 + 179 / 256,
    // 1.7
    1 + 166 / 256,
    // 1.65
    1 + 153 / 256,
    // 1.6
    1 + 128 / 256,
    // 1.5
    1 + 89 / 256,
    // 1.35
    1 + 0 / 256,
    // 1
    0 + 204 / 256,
    // 0.8
    0 + 179 / 256,
    // 0.7
    0 + 153 / 256,
    // 0.6
    0 + 128 / 256,
    // 0.5
    0 + 102 / 256,
    // 0.4
    0 + 89 / 256,
    // 0.35
    0 + 76 / 256,
    // 0.3
    0 + 64 / 256,
    // 0.25
    0 + 51 / 256,
    // 0.2
    0 + 38 / 256
    // 0.15
  ];
  var TINTED_LENS_MULTIPLIER = CONST_1_20;
  var SOLID_ROCK_MULTIPLIER = CONST_0_75;
  var BURN_DAMAGE_MULTIPLIER = CONST_0_80;
  var CLOUDY_DAMAGE_MULTIPLIER = CONST_0_75;
  var ME_FIRST_MULTIPLIER = CONST_1_50;
  var POWER_PITCHER_DAMAGE_MULTIPLIER = CONST_1_50;
  var AIR_BLADE_DAMAGE_MULTIPLIER = CONST_1_50;
  var POWER_BAND_STAT_BOOST = 12;
  var SPECIAL_BAND_STAT_BOOST = 12;
  var DEF_SCARF_STAT_BOOST = 8;
  var ZINC_BAND_STAT_BOOST = 8;
  var AURA_BOW_STAT_BOOST = 1;
  var MUNCH_BELT_STAT_BOOST = 8;
  var SCOPE_LENS_CRIT_RATE_BOOST = 15;
  var SUPER_LUCK_CRIT_RATE_BOOST = 10;
  var TYPE_ADVANTAGE_MASTER_CRIT_RATE = 40;
  var DETECT_BAND_MOVE_ACCURACY_DROP = 30;
  var QUICK_DODGER_MOVE_ACCURACY_DROP = 10;
  var TECHNICIAN_MOVE_POWER_THRESHOLD = 4;
  var OFFENSE_STAT_MAX = 999;
  var MAX_HP_CAP = 999;
  var NATURAL_GIFT_ITEM_TABLE = [
    new NaturalGiftInfo(69, TYPE_GRASS, 1),
    // いやしのタネ
    new NaturalGiftInfo(70, TYPE_POISON, 1),
    // オレンのみ
    new NaturalGiftInfo(71, TYPE_PSYCHIC, 3),
    // オボンのみ
    new NaturalGiftInfo(72, TYPE_GHOST, 2),
    // めぐすりのタネ
    new NaturalGiftInfo(73, TYPE_GROUND, 1),
    // ふっかつのタネ
    new NaturalGiftInfo(74, TYPE_DARK, 2),
    // めつぶしのタネ
    new NaturalGiftInfo(75, TYPE_STEEL, 1),
    // ふこうのタネ
    new NaturalGiftInfo(76, TYPE_DARK, 2),
    // まどわしのタネ
    new NaturalGiftInfo(77, TYPE_FIGHTING, 3),
    // いのちのタネ
    new NaturalGiftInfo(78, TYPE_GRASS, 2),
    // チーゴのみ
    new NaturalGiftInfo(79, TYPE_ROCK, 5),
    // くうふくのタネ
    new NaturalGiftInfo(80, TYPE_FLYING, 2),
    // しゅんそくのタネ
    new NaturalGiftInfo(81, TYPE_ELECTRIC, 2),
    // モモンのみ
    new NaturalGiftInfo(82, TYPE_FIRE, 2),
    // クラボのみ
    new NaturalGiftInfo(83, TYPE_GHOST, 2),
    // ふらふらのタネ
    new NaturalGiftInfo(84, TYPE_ICE, 2),
    // すいみんのタネ
    new NaturalGiftInfo(85, TYPE_NORMAL, 15),
    // ただのタネ
    new NaturalGiftInfo(86, TYPE_PSYCHIC, 2),
    // ワープのタネ
    new NaturalGiftInfo(87, TYPE_DRAGON, 5),
    // ばくれつのタネ
    new NaturalGiftInfo(89, TYPE_NORMAL, 3),
    // しあわせのタネ
    new NaturalGiftInfo(90, TYPE_WATER, 2),
    // カゴのみ
    new NaturalGiftInfo(91, TYPE_BUG, 2),
    // しばられのタネ
    new NaturalGiftInfo(93, TYPE_DRAGON, 10),
    // おうごんのタネ
    new NaturalGiftInfo(94, TYPE_POISON, 5),
    // じゃあくなタネ
    new NaturalGiftInfo(95, TYPE_WATER, 5),
    // せいなるタネ
    new NaturalGiftInfo(96, TYPE_FIGHTING, 5),
    // もうげきのタネ
    new NaturalGiftInfo(97, TYPE_BUG, 5),
    // ドロンのタネ
    new NaturalGiftInfo(104, TYPE_GHOST, 5),
    // めくすぐりのタネ
    new NaturalGiftInfo(105, TYPE_GROUND, 2),
    // ぷっかつのタネ
    new NaturalGiftInfo(106, TYPE_ICE, 10),
    // すいみんぐのタネ
    new NaturalGiftInfo(107, TYPE_POISON, 2),
    // じゃあなのタネ
    new NaturalGiftInfo(117, TYPE_POISON, 2),
    // オレソのみ
    new NaturalGiftInfo(118, TYPE_STEEL, 5),
    // ふごうのタネ
    new NaturalGiftInfo(0, TYPE_NONE, 0)
    // (空き)
  ];
  var TIME_DARKNESS_BASE_POWER = [
    { id: 1, power: 20 },
    // アイアンテール 20 -> 40
    { id: 64, power: 24 },
    // かみなり 24 -> 45
    { id: 75, power: 20 },
    // きあいパンチ 20 -> 55
    { id: 109, power: 18 },
    // サイコキネシス 18 -> 38
    { id: 149, power: 20 },
    // せいなるほのお 20 -> 50
    { id: 157, power: 24 },
    // だいもんじ 24 -> 33
    { id: 219, power: 18 },
    // なみのり 18 -> 30
    { id: 221, power: 12 },
    // ニードルアーム 12 -> 36
    { id: 238, power: 30 },
    // ハードプラント 30 -> 45
    { id: 239, power: 30 },
    // ハイドロカノン 30 -> 33
    { id: 244, power: 14 },
    // はがねのつばさ 14 -> 35
    { id: 278, power: 30 },
    // ふんか 30 -> 40
    { id: 323, power: 24 }
    // メガホーン 24 -> 38
  ];
  var MAGNITUDE_DAMAGE_TABLE = [5, 10, 15, 25, 30, 35, 40];
  var SONICBOOM_FIXED_DAMAGE = 20;
  var VACUUM_CUT_FIXED_DAMAGE = 18;
  var DRAGON_RAGE_FIXED_DAMAGE = 30;
  var RETURN_FIXED_DAMAGE_TABLE = [
    { iq: 50, damage: 5 },
    { iq: 100, damage: 10 },
    { iq: 200, damage: 15 },
    { iq: 300, damage: 20 },
    { iq: 400, damage: 25 },
    { iq: 500, damage: 30 },
    { iq: 600, damage: 35 },
    { iq: 700, damage: 40 },
    { iq: 1e3, damage: 45 },
    { iq: 1e4, damage: 9999 },
    { iq: -1, damage: 1 }
    // 0xffff
  ];
  var FRUSTRATION_FIXED_DAMAGE_TABLE = [
    { iq: 0, damage: 9999 },
    { iq: 50, damage: 45 },
    { iq: 100, damage: 40 },
    { iq: 200, damage: 35 },
    { iq: 300, damage: 30 },
    { iq: 400, damage: 25 },
    { iq: 500, damage: 20 },
    { iq: 600, damage: 15 },
    { iq: 700, damage: 10 },
    { iq: 1e3, damage: 5 },
    { iq: 1e4, damage: 1 },
    { iq: -1, damage: 1 }
    // 0xffff
  ];
  function getMoveType(moveId) {
    if (!MoveData) {
      console.error("MoveData not found");
      return;
    }
    return MoveData[moveId].Type;
  }
  function isRegularAttackOrProjectile(moveId) {
    return moveId == 355 || moveId == 405;
  }
  function isAuraBow(itemId) {
    return itemId >= 428 && itemId <= 443;
  }
  function typeIneffectiveAgainstGhost(typeId) {
    return typeId == TYPE_NORMAL || typeId == TYPE_FIGHTING;
  }
  function getMoveBasePower(moveId, timeDarkness) {
    if (!MoveData) {
      console.error("MoveData not found");
      return;
    }
    const move2 = MoveData[moveId];
    if (timeDarkness) {
      const tdBasePower = getMoveBasePowerTimeDarkness(moveId);
      if (tdBasePower) return tdBasePower;
    }
    return move2.Power;
  }
  function getMoveAccuracy(moveId, accuracy2) {
    if (!MoveData) {
      console.error("MoveData not found");
      return;
    }
    const move2 = MoveData[moveId];
    if (accuracy2) {
      return move2.Accuracy2;
    }
    return move2.Accuracy1;
  }
  function getMoveCritChance(moveId) {
    if (!MoveData) {
      console.error("MoveData not found");
      return;
    }
    const move2 = MoveData[moveId];
    return move2.Critical;
  }
  function getMoveBasePowerTimeDarkness(moveId) {
    for (let i = 0; i < TIME_DARKNESS_BASE_POWER.length; i++) {
      const entry = TIME_DARKNESS_BASE_POWER[i];
      if (entry.id == moveId) {
        return entry.power;
      }
    }
    return null;
  }
  function getMoveMaxPP(moveId) {
    if (!MoveData) {
      console.error("MoveData not found");
    }
    return MoveData[moveId].PP;
  }
  function isRecoilMove(moveId) {
    return [
      116,
      // じごくぐるま
      140,
      // すてみタックル
      203,
      // とっしん
      204,
      // とびげり
      206,
      // とびひざげり
      354,
      // ボルテッカー
      441,
      // ウッドハンマー
      517,
      // フレアドライブ
      518,
      // ブレイブバード
      533
      // もろはのずつき
    ].includes(moveId);
  }
  function isPunchMove(moveId) {
    return [
      65,
      // かみなりパンチ
      75,
      // きあいパンチ
      103,
      // コメットパンチ
      126,
      // シャドーパンチ
      136,
      // スカイアッパー
      246,
      // ばくれつパンチ
      264,
      // ピヨピヨパンチ
      292,
      // ほのおのパンチ
      322,
      // マッハパンチ
      344,
      // メガトンパンチ
      347,
      // れいとうパンチ
      430,
      // れんぞくパンチ
      500,
      // アームハンマー
      510
      // バレットパンチ
    ].includes(moveId);
  }
  function isSoundMove(moveId) {
    return [
      25,
      // いびき
      26,
      // いやしのすず
      27,
      // いやなおと
      34,
      // うたう
      83,
      // きんぞくおん
      84,
      // くさぶえ
      171,
      // ちょうおんぱ
      217,
      // なきごえ
      241,
      // ハイパーボイス
      284,
      // ほえる
      293,
      // ほろびのうた
      530,
      // むしのさざめき
      446
      // おしゃべり
    ].includes(moveId);
  }
  function getMonsterWeight(pokemonId) {
    if (!PokemonData) {
      console.error("PokemonData not found");
      return;
    }
    const pokemon = PokemonData[pokemonId];
    const raw = pokemon.Weight;
    return ((raw >> 8) + (raw & 255)) / 256;
  }

  // ns-hugo-imp:F:\Git\laioxy.github.io\assets\js\poke_param.js
  var pokeGender = [
    { id: 0, name: "\u7121\u52B9" },
    { id: 1, name: "\u30AA\u30B9" },
    { id: 2, name: "\u30E1\u30B9" },
    { id: 3, name: "\u4E0D\u660E" }
  ];

  // ns-hugo-imp:F:\Git\laioxy.github.io\assets\js\damage\idmap.js
  var IDMap = class {
    id = 0;
    text = "";
    constructor(id, text) {
      this.id = id;
      this.text = text;
    }
  };
  var MOVE_CATEGORY = [
    new IDMap(CATEGORY_PHYSICAL, "\u7269\u7406"),
    new IDMap(CATEGORY_SPECIAL, "\u7279\u6B8A"),
    new IDMap(2, "\u5909\u5316")
  ];
  var TYPE_MATCHUP = [
    new IDMap(MATCHUP_IMMUNE, "\u52B9\u679C\u306A\u3057"),
    new IDMap(MATCHUP_NOT_VERY_EFFECTIVE, "\u4ECA\u3072\u3068\u3064"),
    new IDMap(MATCHUP_NEUTRAL, "\u666E\u901A"),
    new IDMap(MATCHUP_SUPER_EFFECTIVE, "\u52B9\u679C\u629C\u7FA4")
  ];
  var DAMAGE_MESSAGE = [
    new IDMap(DAMAGE_MESSAGE_MOVE, "\u6280"),
    new IDMap(DAMAGE_MESSAGE_BURN, "\u3084\u3051\u3069"),
    new IDMap(DAMAGE_MESSAGE_CONSTRICTION, "\u3057\u3081\u3064\u3051"),
    new IDMap(DAMAGE_MESSAGE_POISON, "\u3069\u304F"),
    new IDMap(DAMAGE_MESSAGE_RECOIL_1, "\u53CD\u52D51"),
    new IDMap(DAMAGE_MESSAGE_WRAP, "\u307E\u304D\u3064\u304F"),
    new IDMap(DAMAGE_MESSAGE_COUNTER, "\u30AB\u30A6\u30F3\u30BF\u30FC"),
    new IDMap(DAMAGE_MESSAGE_CURSE, "\u306E\u308D\u3044"),
    new IDMap(DAMAGE_MESSAGE_NIGHTMARE, "\u3042\u304F\u3080"),
    new IDMap(DAMAGE_MESSAGE_LEECH_SEED, "\u3084\u3069\u308A\u304E"),
    new IDMap(DAMAGE_MESSAGE_SPIKES, "\u307E\u304D\u3073\u3057"),
    new IDMap(DAMAGE_MESSAGE_PERISH_SONG, "\u307B\u308D\u3073\u306E\u3046\u305F"),
    new IDMap(DAMAGE_MESSAGE_DESTINY_BOND, "\u307F\u3061\u3065\u308C"),
    new IDMap(DAMAGE_MESSAGE_SLUDGE, "\u30D8\u30C9\u30ED\u3048\u304D"),
    new IDMap(DAMAGE_MESSAGE_HUNGER, "\u304F\u3046\u3075\u304F"),
    new IDMap(DAMAGE_MESSAGE_CHESTNUT_1, "\u30A4\u30AC\u30B0\u30EA1"),
    new IDMap(DAMAGE_MESSAGE_CHESTNUT_2, "\u30A4\u30AC\u30B0\u30EA2"),
    new IDMap(DAMAGE_MESSAGE_PITFALL_TRAP, "\u304A\u3068\u3057\u3042\u306A"),
    new IDMap(DAMAGE_MESSAGE_BAD_WEATHER, "\u60AA\u5929\u5019"),
    new IDMap(DAMAGE_MESSAGE_MISSED_MOVE, "\u6280\u5931\u6557\u81EA\u50B7"),
    new IDMap(DAMAGE_MESSAGE_RECOIL_2, "\u53CD\u52D52"),
    new IDMap(DAMAGE_MESSAGE_STEALTH_ROCK, "\u30B9\u30C6\u30EB\u30B9\u30ED\u30C3\u30AF"),
    new IDMap(DAMAGE_MESSAGE_TOXIC_SPIKES, "\u3069\u304F\u3073\u3057"),
    new IDMap(DAMAGE_MESSAGE_ALMOST_FAINTED, "HP1\u81EA\u50B7"),
    new IDMap(DAMAGE_MESSAGE_BAD_DREAMS, "\u30CA\u30A4\u30C8\u30E1\u30A2"),
    new IDMap(DAMAGE_MESSAGE_SOLAR_POWER, "\u30B5\u30F3\u30D1\u30EF\u30FC"),
    new IDMap(DAMAGE_MESSAGE_DRY_SKIN, "\u304B\u3093\u305D\u3046\u306F\u3060")
  ];

  // ns-hugo-imp:F:\Git\laioxy.github.io\assets\js\damage\mathutil.js
  function clampedLn(x) {
    const LOG_VALUE_TABLE = [
      0 / 65536,
      0 / 65536,
      45424 / 65536,
      71984 / 65536,
      90848 / 65536,
      105472 / 65536,
      117424 / 65536,
      127520 / 65536,
      136272 / 65536,
      143984 / 65536,
      150896 / 65536,
      157136 / 65536,
      162848 / 65536,
      168096 / 65536,
      172944 / 65536,
      177472 / 65536,
      181696 / 65536,
      185664 / 65536,
      189408 / 65536,
      192960 / 65536,
      196320 / 65536,
      199520 / 65536,
      202560 / 65536,
      205472 / 65536,
      208272 / 65536,
      210944 / 65536,
      213520 / 65536,
      215984 / 65536,
      218368 / 65536,
      220672 / 65536,
      222896 / 65536,
      225040 / 65536,
      227120 / 65536,
      229136 / 65536,
      231088 / 65536,
      232992 / 65536,
      234848 / 65536,
      236640 / 65536,
      238384 / 65536,
      240080 / 65536,
      241744 / 65536,
      243360 / 65536,
      244944 / 65536,
      246480 / 65536,
      248e3 / 65536,
      249472 / 65536,
      250912 / 65536,
      252320 / 65536,
      253696 / 65536,
      255040 / 65536,
      256368 / 65536,
      257664 / 65536,
      258944 / 65536,
      260192 / 65536,
      261408 / 65536,
      262624 / 65536,
      263792 / 65536,
      264960 / 65536,
      266096 / 65536,
      267216 / 65536,
      268320 / 65536,
      269408 / 65536,
      270464 / 65536,
      271520 / 65536,
      272544 / 65536,
      273568 / 65536,
      274560 / 65536,
      275552 / 65536,
      276528 / 65536,
      277472 / 65536,
      278416 / 65536,
      279344 / 65536,
      280272 / 65536,
      281168 / 65536,
      282064 / 65536,
      282944 / 65536,
      283808 / 65536,
      284672 / 65536,
      285520 / 65536,
      286352 / 65536,
      287168 / 65536,
      287984 / 65536,
      288784 / 65536,
      289584 / 65536,
      290368 / 65536,
      291152 / 65536,
      291920 / 65536,
      292672 / 65536,
      293424 / 65536,
      294160 / 65536,
      294896 / 65536,
      295616 / 65536,
      296336 / 65536,
      297040 / 65536,
      297744 / 65536,
      298432 / 65536,
      299120 / 65536,
      299808 / 65536,
      300480 / 65536,
      301136 / 65536,
      301792 / 65536,
      302448 / 65536,
      303088 / 65536,
      303728 / 65536,
      304368 / 65536,
      304992 / 65536,
      305616 / 65536,
      306224 / 65536,
      306848 / 65536,
      307440 / 65536,
      308048 / 65536,
      308640 / 65536,
      309216 / 65536,
      309808 / 65536,
      310384 / 65536,
      310960 / 65536,
      311520 / 65536,
      312080 / 65536,
      312640 / 65536,
      313200 / 65536,
      313744 / 65536,
      314288 / 65536,
      314832 / 65536,
      315360 / 65536,
      315888 / 65536,
      316416 / 65536,
      316944 / 65536,
      317456 / 65536,
      317968 / 65536,
      318480 / 65536,
      318992 / 65536,
      319488 / 65536,
      319984 / 65536,
      320480 / 65536,
      320976 / 65536,
      321472 / 65536,
      321952 / 65536,
      322432 / 65536,
      322912 / 65536,
      323376 / 65536,
      323840 / 65536,
      324320 / 65536,
      324784 / 65536,
      325232 / 65536,
      325696 / 65536,
      326144 / 65536,
      326592 / 65536,
      327040 / 65536,
      327488 / 65536,
      327936 / 65536,
      328368 / 65536,
      328800 / 65536,
      329232 / 65536,
      329664 / 65536,
      330096 / 65536,
      330512 / 65536,
      330944 / 65536,
      331360 / 65536,
      331776 / 65536,
      332192 / 65536,
      332592 / 65536,
      333008 / 65536,
      333408 / 65536,
      333824 / 65536,
      334224 / 65536,
      334608 / 65536,
      335008 / 65536,
      335408 / 65536,
      335792 / 65536,
      336192 / 65536,
      336576 / 65536,
      336960 / 65536,
      337344 / 65536,
      337712 / 65536,
      338096 / 65536,
      338464 / 65536,
      338848 / 65536,
      339216 / 65536,
      339584 / 65536,
      339952 / 65536,
      340320 / 65536,
      340688 / 65536,
      341040 / 65536,
      341408 / 65536,
      341760 / 65536,
      342112 / 65536,
      342464 / 65536,
      342816 / 65536,
      343168 / 65536,
      343520 / 65536,
      343856 / 65536,
      344208 / 65536,
      344544 / 65536,
      344880 / 65536,
      345232 / 65536,
      345568 / 65536,
      345904 / 65536,
      346240 / 65536,
      346560 / 65536,
      346896 / 65536,
      347216 / 65536,
      347552 / 65536,
      347872 / 65536,
      348192 / 65536,
      348528 / 65536,
      348848 / 65536,
      349152 / 65536,
      349472 / 65536,
      349792 / 65536,
      350112 / 65536,
      350416 / 65536,
      350736 / 65536,
      351040 / 65536,
      351344 / 65536,
      351664 / 65536,
      351968 / 65536,
      352272 / 65536,
      352576 / 65536,
      352864 / 65536,
      353168 / 65536,
      353472 / 65536,
      353760 / 65536,
      354064 / 65536,
      354352 / 65536,
      354656 / 65536,
      354944 / 65536,
      355232 / 65536,
      355520 / 65536,
      355808 / 65536,
      356096 / 65536,
      356384 / 65536,
      356672 / 65536,
      356944 / 65536,
      357232 / 65536,
      357504 / 65536,
      357792 / 65536,
      358064 / 65536,
      358352 / 65536,
      358624 / 65536,
      358896 / 65536,
      359168 / 65536,
      359440 / 65536,
      359712 / 65536,
      359984 / 65536,
      360256 / 65536,
      360528 / 65536,
      360784 / 65536,
      361056 / 65536,
      361328 / 65536,
      361584 / 65536,
      361840 / 65536,
      362112 / 65536,
      362368 / 65536,
      362624 / 65536,
      362880 / 65536,
      363152 / 65536,
      363408 / 65536,
      363664 / 65536,
      363904 / 65536,
      364160 / 65536,
      364416 / 65536,
      364672 / 65536,
      364912 / 65536,
      365168 / 65536,
      365424 / 65536,
      365664 / 65536,
      365920 / 65536,
      366160 / 65536,
      366400 / 65536,
      366640 / 65536,
      366896 / 65536,
      367136 / 65536,
      367376 / 65536,
      367616 / 65536,
      367856 / 65536,
      368096 / 65536,
      368336 / 65536,
      368560 / 65536,
      368800 / 65536,
      369040 / 65536,
      369280 / 65536,
      369504 / 65536,
      369744 / 65536,
      369968 / 65536,
      370208 / 65536,
      370432 / 65536,
      370656 / 65536,
      370896 / 65536,
      371120 / 65536,
      371344 / 65536,
      371568 / 65536,
      371792 / 65536,
      372016 / 65536,
      372240 / 65536,
      372464 / 65536,
      372688 / 65536,
      372912 / 65536,
      373136 / 65536,
      373360 / 65536,
      373584 / 65536,
      373792 / 65536,
      374016 / 65536,
      374224 / 65536,
      374448 / 65536,
      374656 / 65536,
      374880 / 65536,
      375088 / 65536,
      375312 / 65536,
      375520 / 65536,
      375728 / 65536,
      375952 / 65536,
      376160 / 65536,
      376368 / 65536,
      376576 / 65536,
      376784 / 65536,
      376992 / 65536,
      377200 / 65536,
      377408 / 65536,
      377616 / 65536,
      377824 / 65536,
      378032 / 65536,
      378224 / 65536,
      378432 / 65536,
      378640 / 65536,
      378832 / 65536,
      379040 / 65536,
      379248 / 65536,
      379440 / 65536,
      379648 / 65536,
      379840 / 65536,
      380048 / 65536,
      380240 / 65536,
      380432 / 65536,
      380640 / 65536,
      380832 / 65536,
      381024 / 65536,
      381216 / 65536,
      381424 / 65536,
      381616 / 65536,
      381808 / 65536,
      382e3 / 65536,
      382192 / 65536,
      382384 / 65536,
      382576 / 65536,
      382768 / 65536,
      382960 / 65536,
      383152 / 65536,
      383328 / 65536,
      383520 / 65536,
      383712 / 65536,
      383904 / 65536,
      384080 / 65536,
      384272 / 65536,
      384464 / 65536,
      384640 / 65536,
      384832 / 65536,
      385008 / 65536,
      385200 / 65536,
      385376 / 65536,
      385568 / 65536,
      385744 / 65536,
      385920 / 65536,
      386112 / 65536,
      386288 / 65536,
      386464 / 65536,
      386640 / 65536,
      386832 / 65536,
      387008 / 65536,
      387184 / 65536,
      387360 / 65536,
      387536 / 65536,
      387712 / 65536,
      387888 / 65536,
      388064 / 65536,
      388240 / 65536,
      388416 / 65536,
      388592 / 65536,
      388768 / 65536,
      388944 / 65536,
      389120 / 65536,
      389280 / 65536,
      389456 / 65536,
      389632 / 65536,
      389808 / 65536,
      389968 / 65536,
      390144 / 65536,
      390320 / 65536,
      390480 / 65536,
      390656 / 65536,
      390816 / 65536,
      390992 / 65536,
      391152 / 65536,
      391328 / 65536,
      391488 / 65536,
      391664 / 65536,
      391824 / 65536,
      391984 / 65536,
      392160 / 65536,
      392320 / 65536,
      392480 / 65536,
      392656 / 65536,
      392816 / 65536,
      392976 / 65536,
      393136 / 65536,
      393296 / 65536,
      393456 / 65536,
      393632 / 65536,
      393792 / 65536,
      393952 / 65536,
      394112 / 65536,
      394272 / 65536,
      394432 / 65536,
      394592 / 65536,
      394752 / 65536,
      394896 / 65536,
      395056 / 65536,
      395216 / 65536,
      395376 / 65536,
      395536 / 65536,
      395696 / 65536,
      395840 / 65536,
      396e3 / 65536,
      396160 / 65536,
      396320 / 65536,
      396464 / 65536,
      396624 / 65536,
      396768 / 65536,
      396928 / 65536,
      397088 / 65536,
      397232 / 65536,
      397392 / 65536,
      397536 / 65536,
      397696 / 65536,
      397840 / 65536,
      398e3 / 65536,
      398144 / 65536,
      398304 / 65536,
      398448 / 65536,
      398592 / 65536,
      398752 / 65536,
      398896 / 65536,
      399040 / 65536,
      399200 / 65536,
      399344 / 65536,
      399488 / 65536,
      399632 / 65536,
      399776 / 65536,
      399936 / 65536,
      400080 / 65536,
      400224 / 65536,
      400368 / 65536,
      400512 / 65536,
      400656 / 65536,
      400800 / 65536,
      400944 / 65536,
      401088 / 65536,
      401232 / 65536,
      401376 / 65536,
      401520 / 65536,
      401664 / 65536,
      401808 / 65536,
      401952 / 65536,
      402096 / 65536,
      402240 / 65536,
      402368 / 65536,
      402512 / 65536,
      402656 / 65536,
      402800 / 65536,
      402944 / 65536,
      403072 / 65536,
      403216 / 65536,
      403360 / 65536,
      403488 / 65536,
      403632 / 65536,
      403776 / 65536,
      403904 / 65536,
      404048 / 65536,
      404192 / 65536,
      404320 / 65536,
      404464 / 65536,
      404592 / 65536,
      404736 / 65536,
      404864 / 65536,
      405008 / 65536,
      405136 / 65536,
      405280 / 65536,
      405408 / 65536,
      405552 / 65536,
      405680 / 65536,
      405808 / 65536,
      405952 / 65536,
      406080 / 65536,
      406208 / 65536,
      406352 / 65536,
      406480 / 65536,
      406608 / 65536,
      406752 / 65536,
      406880 / 65536,
      407008 / 65536,
      407136 / 65536,
      407280 / 65536,
      407408 / 65536,
      407536 / 65536,
      407664 / 65536,
      407792 / 65536,
      407920 / 65536,
      408048 / 65536,
      408176 / 65536,
      408320 / 65536,
      408448 / 65536,
      408576 / 65536,
      408704 / 65536,
      408832 / 65536,
      408960 / 65536,
      409088 / 65536,
      409216 / 65536,
      409344 / 65536,
      409456 / 65536,
      409584 / 65536,
      409712 / 65536,
      409840 / 65536,
      409968 / 65536,
      410096 / 65536,
      410224 / 65536,
      410352 / 65536,
      410464 / 65536,
      410592 / 65536,
      410720 / 65536,
      410848 / 65536,
      410960 / 65536,
      411088 / 65536,
      411216 / 65536,
      411344 / 65536,
      411456 / 65536,
      411584 / 65536,
      411712 / 65536,
      411824 / 65536,
      411952 / 65536,
      412080 / 65536,
      412192 / 65536,
      412320 / 65536,
      412432 / 65536,
      412560 / 65536,
      412672 / 65536,
      412800 / 65536,
      412928 / 65536,
      413040 / 65536,
      413168 / 65536,
      413280 / 65536,
      413392 / 65536,
      413520 / 65536,
      413632 / 65536,
      413760 / 65536,
      413872 / 65536,
      414e3 / 65536,
      414112 / 65536,
      414224 / 65536,
      414352 / 65536,
      414464 / 65536,
      414576 / 65536,
      414704 / 65536,
      414816 / 65536,
      414928 / 65536,
      415056 / 65536,
      415168 / 65536,
      415280 / 65536,
      415392 / 65536,
      415520 / 65536,
      415632 / 65536,
      415744 / 65536,
      415856 / 65536,
      415968 / 65536,
      416096 / 65536,
      416208 / 65536,
      416320 / 65536,
      416432 / 65536,
      416544 / 65536,
      416656 / 65536,
      416768 / 65536,
      416880 / 65536,
      416992 / 65536,
      417120 / 65536,
      417232 / 65536,
      417344 / 65536,
      417456 / 65536,
      417568 / 65536,
      417680 / 65536,
      417792 / 65536,
      417904 / 65536,
      418016 / 65536,
      418112 / 65536,
      418224 / 65536,
      418336 / 65536,
      418448 / 65536,
      418560 / 65536,
      418672 / 65536,
      418784 / 65536,
      418896 / 65536,
      419008 / 65536,
      419104 / 65536,
      419216 / 65536,
      419328 / 65536,
      419440 / 65536,
      419552 / 65536,
      419664 / 65536,
      419760 / 65536,
      419872 / 65536,
      419984 / 65536,
      420096 / 65536,
      420192 / 65536,
      420304 / 65536,
      420416 / 65536,
      420512 / 65536,
      420624 / 65536,
      420736 / 65536,
      420832 / 65536,
      420944 / 65536,
      421056 / 65536,
      421152 / 65536,
      421264 / 65536,
      421376 / 65536,
      421472 / 65536,
      421584 / 65536,
      421680 / 65536,
      421792 / 65536,
      421904 / 65536,
      422e3 / 65536,
      422112 / 65536,
      422208 / 65536,
      422320 / 65536,
      422416 / 65536,
      422528 / 65536,
      422624 / 65536,
      422736 / 65536,
      422832 / 65536,
      422944 / 65536,
      423040 / 65536,
      423136 / 65536,
      423248 / 65536,
      423344 / 65536,
      423456 / 65536,
      423552 / 65536,
      423648 / 65536,
      423760 / 65536,
      423856 / 65536,
      423968 / 65536,
      424064 / 65536,
      424160 / 65536,
      424272 / 65536,
      424368 / 65536,
      424464 / 65536,
      424560 / 65536,
      424672 / 65536,
      424768 / 65536,
      424864 / 65536,
      424976 / 65536,
      425072 / 65536,
      425168 / 65536,
      425264 / 65536,
      425376 / 65536,
      425472 / 65536,
      425568 / 65536,
      425664 / 65536,
      425760 / 65536,
      425856 / 65536,
      425968 / 65536,
      426064 / 65536,
      426160 / 65536,
      426256 / 65536,
      426352 / 65536,
      426448 / 65536,
      426544 / 65536,
      426656 / 65536,
      426752 / 65536,
      426848 / 65536,
      426944 / 65536,
      427040 / 65536,
      427136 / 65536,
      427232 / 65536,
      427328 / 65536,
      427424 / 65536,
      427520 / 65536,
      427616 / 65536,
      427712 / 65536,
      427808 / 65536,
      427904 / 65536,
      428e3 / 65536,
      428096 / 65536,
      428192 / 65536,
      428288 / 65536,
      428384 / 65536,
      428480 / 65536,
      428576 / 65536,
      428672 / 65536,
      428752 / 65536,
      428848 / 65536,
      428944 / 65536,
      429040 / 65536,
      429136 / 65536,
      429232 / 65536,
      429328 / 65536,
      429424 / 65536,
      429504 / 65536,
      429600 / 65536,
      429696 / 65536,
      429792 / 65536,
      429888 / 65536,
      429968 / 65536,
      430064 / 65536,
      430160 / 65536,
      430256 / 65536,
      430352 / 65536,
      430432 / 65536,
      430528 / 65536,
      430624 / 65536,
      430720 / 65536,
      430800 / 65536,
      430896 / 65536,
      430992 / 65536,
      431072 / 65536,
      431168 / 65536,
      431264 / 65536,
      431344 / 65536,
      431440 / 65536,
      431536 / 65536,
      431616 / 65536,
      431712 / 65536,
      431808 / 65536,
      431888 / 65536,
      431984 / 65536,
      432080 / 65536,
      432160 / 65536,
      432256 / 65536,
      432336 / 65536,
      432432 / 65536,
      432528 / 65536,
      432608 / 65536,
      432704 / 65536,
      432784 / 65536,
      432880 / 65536,
      432960 / 65536,
      433056 / 65536,
      433136 / 65536,
      433232 / 65536,
      433312 / 65536,
      433408 / 65536,
      433488 / 65536,
      433584 / 65536,
      433664 / 65536,
      433760 / 65536,
      433840 / 65536,
      433936 / 65536,
      434016 / 65536,
      434112 / 65536,
      434192 / 65536,
      434288 / 65536,
      434368 / 65536,
      434448 / 65536,
      434544 / 65536,
      434624 / 65536,
      434720 / 65536,
      434800 / 65536,
      434880 / 65536,
      434976 / 65536,
      435056 / 65536,
      435136 / 65536,
      435232 / 65536,
      435312 / 65536,
      435392 / 65536,
      435488 / 65536,
      435568 / 65536,
      435648 / 65536,
      435744 / 65536,
      435824 / 65536,
      435904 / 65536,
      436e3 / 65536,
      436080 / 65536,
      436160 / 65536,
      436240 / 65536,
      436336 / 65536,
      436416 / 65536,
      436496 / 65536,
      436576 / 65536,
      436672 / 65536,
      436752 / 65536,
      436832 / 65536,
      436912 / 65536,
      437008 / 65536,
      437088 / 65536,
      437168 / 65536,
      437248 / 65536,
      437328 / 65536,
      437424 / 65536,
      437504 / 65536,
      437584 / 65536,
      437664 / 65536,
      437744 / 65536,
      437824 / 65536,
      437904 / 65536,
      438e3 / 65536,
      438080 / 65536,
      438160 / 65536,
      438240 / 65536,
      438320 / 65536,
      438400 / 65536,
      438480 / 65536,
      438560 / 65536,
      438640 / 65536,
      438720 / 65536,
      438800 / 65536,
      438896 / 65536,
      438976 / 65536,
      439056 / 65536,
      439136 / 65536,
      439216 / 65536,
      439296 / 65536,
      439376 / 65536,
      439456 / 65536,
      439536 / 65536,
      439616 / 65536,
      439696 / 65536,
      439776 / 65536,
      439856 / 65536,
      439936 / 65536,
      440016 / 65536,
      440096 / 65536,
      440176 / 65536,
      440256 / 65536,
      440336 / 65536,
      440416 / 65536,
      440480 / 65536,
      440560 / 65536,
      440640 / 65536,
      440720 / 65536,
      440800 / 65536,
      440880 / 65536,
      440960 / 65536,
      441040 / 65536,
      441120 / 65536,
      441200 / 65536,
      441280 / 65536,
      441344 / 65536,
      441424 / 65536,
      441504 / 65536,
      441584 / 65536,
      441664 / 65536,
      441744 / 65536,
      441824 / 65536,
      441888 / 65536,
      441968 / 65536,
      442048 / 65536,
      442128 / 65536,
      442208 / 65536,
      442272 / 65536,
      442352 / 65536,
      442432 / 65536,
      442512 / 65536,
      442592 / 65536,
      442656 / 65536,
      442736 / 65536,
      442816 / 65536,
      442896 / 65536,
      442960 / 65536,
      443040 / 65536,
      443120 / 65536,
      443200 / 65536,
      443264 / 65536,
      443344 / 65536,
      443424 / 65536,
      443504 / 65536,
      443568 / 65536,
      443648 / 65536,
      443728 / 65536,
      443792 / 65536,
      443872 / 65536,
      443952 / 65536,
      444016 / 65536,
      444096 / 65536,
      444176 / 65536,
      444240 / 65536,
      444320 / 65536,
      444400 / 65536,
      444464 / 65536,
      444544 / 65536,
      444624 / 65536,
      444688 / 65536,
      444768 / 65536,
      444848 / 65536,
      444912 / 65536,
      444992 / 65536,
      445056 / 65536,
      445136 / 65536,
      445216 / 65536,
      445280 / 65536,
      445360 / 65536,
      445424 / 65536,
      445504 / 65536,
      445568 / 65536,
      445648 / 65536,
      445728 / 65536,
      445792 / 65536,
      445872 / 65536,
      445936 / 65536,
      446016 / 65536,
      446080 / 65536,
      446160 / 65536,
      446224 / 65536,
      446304 / 65536,
      446368 / 65536,
      446448 / 65536,
      446512 / 65536,
      446592 / 65536,
      446656 / 65536,
      446736 / 65536,
      446800 / 65536,
      446880 / 65536,
      446944 / 65536,
      447024 / 65536,
      447088 / 65536,
      447168 / 65536,
      447232 / 65536,
      447312 / 65536,
      447376 / 65536,
      447440 / 65536,
      447520 / 65536,
      447584 / 65536,
      447664 / 65536,
      447728 / 65536,
      447808 / 65536,
      447872 / 65536,
      447936 / 65536,
      448016 / 65536,
      448080 / 65536,
      448160 / 65536,
      448224 / 65536,
      448288 / 65536,
      448368 / 65536,
      448432 / 65536,
      448496 / 65536,
      448576 / 65536,
      448640 / 65536,
      448720 / 65536,
      448784 / 65536,
      448848 / 65536,
      448928 / 65536,
      448992 / 65536,
      449056 / 65536,
      449136 / 65536,
      449200 / 65536,
      449264 / 65536,
      449344 / 65536,
      449408 / 65536,
      449472 / 65536,
      449536 / 65536,
      449616 / 65536,
      449680 / 65536,
      449744 / 65536,
      449824 / 65536,
      449888 / 65536,
      449952 / 65536,
      450016 / 65536,
      450096 / 65536,
      450160 / 65536,
      450224 / 65536,
      450288 / 65536,
      450368 / 65536,
      450432 / 65536,
      450496 / 65536,
      450560 / 65536,
      450640 / 65536,
      450704 / 65536,
      450768 / 65536,
      450832 / 65536,
      450912 / 65536,
      450976 / 65536,
      451040 / 65536,
      451104 / 65536,
      451168 / 65536,
      451248 / 65536,
      451312 / 65536,
      451376 / 65536,
      451440 / 65536,
      451504 / 65536,
      451568 / 65536,
      451648 / 65536,
      451712 / 65536,
      451776 / 65536,
      451840 / 65536,
      451904 / 65536,
      451968 / 65536,
      452032 / 65536,
      452112 / 65536,
      452176 / 65536,
      452240 / 65536,
      452304 / 65536,
      452368 / 65536,
      452432 / 65536,
      452496 / 65536,
      452560 / 65536,
      452640 / 65536,
      452704 / 65536,
      452768 / 65536,
      452832 / 65536,
      452896 / 65536,
      452960 / 65536,
      453024 / 65536,
      453088 / 65536,
      453152 / 65536,
      453216 / 65536,
      453280 / 65536,
      453344 / 65536,
      453408 / 65536,
      453488 / 65536,
      453552 / 65536,
      453616 / 65536,
      453680 / 65536,
      453744 / 65536,
      453808 / 65536,
      453872 / 65536,
      453936 / 65536,
      454e3 / 65536,
      454064 / 65536,
      454128 / 65536,
      454192 / 65536,
      454256 / 65536,
      454320 / 65536,
      454384 / 65536,
      454448 / 65536,
      454512 / 65536,
      454576 / 65536,
      454640 / 65536,
      454704 / 65536,
      454768 / 65536,
      454832 / 65536,
      454896 / 65536,
      454960 / 65536,
      455024 / 65536,
      455072 / 65536,
      455136 / 65536,
      455200 / 65536,
      455264 / 65536,
      455328 / 65536,
      455392 / 65536,
      455456 / 65536,
      455520 / 65536,
      455584 / 65536,
      455648 / 65536,
      455712 / 65536,
      455776 / 65536,
      455840 / 65536,
      455904 / 65536,
      455952 / 65536,
      456016 / 65536,
      456080 / 65536,
      456144 / 65536,
      456208 / 65536,
      456272 / 65536,
      456336 / 65536,
      456400 / 65536,
      456448 / 65536,
      456512 / 65536,
      456576 / 65536,
      456640 / 65536,
      456704 / 65536,
      456768 / 65536,
      456832 / 65536,
      456880 / 65536,
      456944 / 65536,
      457008 / 65536,
      457072 / 65536,
      457136 / 65536,
      457200 / 65536,
      457248 / 65536,
      457312 / 65536,
      457376 / 65536,
      457440 / 65536,
      457504 / 65536,
      457568 / 65536,
      457616 / 65536,
      457680 / 65536,
      457744 / 65536,
      457808 / 65536,
      457856 / 65536,
      457920 / 65536,
      457984 / 65536,
      458048 / 65536,
      458112 / 65536,
      458160 / 65536,
      458224 / 65536,
      458288 / 65536,
      458352 / 65536,
      458400 / 65536,
      458464 / 65536,
      458528 / 65536,
      458592 / 65536,
      458640 / 65536,
      458704 / 65536,
      458768 / 65536,
      458832 / 65536,
      458880 / 65536,
      458944 / 65536,
      459008 / 65536,
      459056 / 65536,
      459120 / 65536,
      459184 / 65536,
      459248 / 65536,
      459296 / 65536,
      459360 / 65536,
      459424 / 65536,
      459472 / 65536,
      459536 / 65536,
      459600 / 65536,
      459648 / 65536,
      459712 / 65536,
      459776 / 65536,
      459840 / 65536,
      459888 / 65536,
      459952 / 65536,
      460016 / 65536,
      460064 / 65536,
      460128 / 65536,
      460192 / 65536,
      460240 / 65536,
      460304 / 65536,
      460352 / 65536,
      460416 / 65536,
      460480 / 65536,
      460528 / 65536,
      460592 / 65536,
      460656 / 65536,
      460704 / 65536,
      460768 / 65536,
      460832 / 65536,
      460880 / 65536,
      460944 / 65536,
      460992 / 65536,
      461056 / 65536,
      461120 / 65536,
      461168 / 65536,
      461232 / 65536,
      461280 / 65536,
      461344 / 65536,
      461408 / 65536,
      461456 / 65536,
      461520 / 65536,
      461568 / 65536,
      461632 / 65536,
      461680 / 65536,
      461744 / 65536,
      461808 / 65536,
      461856 / 65536,
      461920 / 65536,
      461968 / 65536,
      462032 / 65536,
      462080 / 65536,
      462144 / 65536,
      462192 / 65536,
      462256 / 65536,
      462320 / 65536,
      462368 / 65536,
      462432 / 65536,
      462480 / 65536,
      462544 / 65536,
      462592 / 65536,
      462656 / 65536,
      462704 / 65536,
      462768 / 65536,
      462816 / 65536,
      462880 / 65536,
      462928 / 65536,
      462992 / 65536,
      463040 / 65536,
      463104 / 65536,
      463152 / 65536,
      463216 / 65536,
      463264 / 65536,
      463328 / 65536,
      463376 / 65536,
      463440 / 65536,
      463488 / 65536,
      463552 / 65536,
      463600 / 65536,
      463664 / 65536,
      463712 / 65536,
      463760 / 65536,
      463824 / 65536,
      463872 / 65536,
      463936 / 65536,
      463984 / 65536,
      464048 / 65536,
      464096 / 65536,
      464160 / 65536,
      464208 / 65536,
      464256 / 65536,
      464320 / 65536,
      464368 / 65536,
      464432 / 65536,
      464480 / 65536,
      464544 / 65536,
      464592 / 65536,
      464640 / 65536,
      464704 / 65536,
      464752 / 65536,
      464816 / 65536,
      464864 / 65536,
      464912 / 65536,
      464976 / 65536,
      465024 / 65536,
      465088 / 65536,
      465136 / 65536,
      465184 / 65536,
      465248 / 65536,
      465296 / 65536,
      465360 / 65536,
      465408 / 65536,
      465456 / 65536,
      465520 / 65536,
      465568 / 65536,
      465616 / 65536,
      465680 / 65536,
      465728 / 65536,
      465792 / 65536,
      465840 / 65536,
      465888 / 65536,
      465952 / 65536,
      466e3 / 65536,
      466048 / 65536,
      466112 / 65536,
      466160 / 65536,
      466208 / 65536,
      466272 / 65536,
      466320 / 65536,
      466368 / 65536,
      466432 / 65536,
      466480 / 65536,
      466528 / 65536,
      466592 / 65536,
      466640 / 65536,
      466688 / 65536,
      466736 / 65536,
      466800 / 65536,
      466848 / 65536,
      466896 / 65536,
      466960 / 65536,
      467008 / 65536,
      467056 / 65536,
      467120 / 65536,
      467168 / 65536,
      467216 / 65536,
      467264 / 65536,
      467328 / 65536,
      467376 / 65536,
      467424 / 65536,
      467472 / 65536,
      467536 / 65536,
      467584 / 65536,
      467632 / 65536,
      467696 / 65536,
      467744 / 65536,
      467792 / 65536,
      467840 / 65536,
      467904 / 65536,
      467952 / 65536,
      468e3 / 65536,
      468048 / 65536,
      468112 / 65536,
      468160 / 65536,
      468208 / 65536,
      468256 / 65536,
      468256 / 65536,
      468368 / 65536,
      468416 / 65536,
      468464 / 65536,
      468512 / 65536,
      468576 / 65536,
      468624 / 65536,
      468672 / 65536,
      468720 / 65536,
      468768 / 65536,
      468832 / 65536,
      468880 / 65536,
      468928 / 65536,
      468976 / 65536,
      469024 / 65536,
      469088 / 65536,
      469136 / 65536,
      469184 / 65536,
      469232 / 65536,
      469280 / 65536,
      469344 / 65536,
      469392 / 65536,
      469440 / 65536,
      469488 / 65536,
      469536 / 65536,
      469584 / 65536,
      469648 / 65536,
      469696 / 65536,
      469744 / 65536,
      469792 / 65536,
      469840 / 65536,
      469888 / 65536,
      469936 / 65536,
      47e4 / 65536,
      470048 / 65536,
      470096 / 65536,
      470144 / 65536,
      470192 / 65536,
      470240 / 65536,
      470288 / 65536,
      470352 / 65536,
      470400 / 65536,
      470448 / 65536,
      470496 / 65536,
      470544 / 65536,
      470592 / 65536,
      470640 / 65536,
      470688 / 65536,
      470752 / 65536,
      470800 / 65536,
      470848 / 65536,
      470896 / 65536,
      470944 / 65536,
      470992 / 65536,
      471040 / 65536,
      471088 / 65536,
      471136 / 65536,
      471184 / 65536,
      471248 / 65536,
      471296 / 65536,
      471344 / 65536,
      471392 / 65536,
      471440 / 65536,
      471488 / 65536,
      471536 / 65536,
      471584 / 65536,
      471632 / 65536,
      471680 / 65536,
      471728 / 65536,
      471776 / 65536,
      471824 / 65536,
      471872 / 65536,
      471920 / 65536,
      471984 / 65536,
      472032 / 65536,
      472080 / 65536,
      472128 / 65536,
      472176 / 65536,
      472224 / 65536,
      472272 / 65536,
      472320 / 65536,
      472368 / 65536,
      472416 / 65536,
      472464 / 65536,
      472512 / 65536,
      472560 / 65536,
      472608 / 65536,
      472656 / 65536,
      472704 / 65536,
      472752 / 65536,
      472800 / 65536,
      472848 / 65536,
      472896 / 65536,
      472944 / 65536,
      472992 / 65536,
      473040 / 65536,
      473088 / 65536,
      473136 / 65536,
      473184 / 65536,
      473232 / 65536,
      473280 / 65536,
      473328 / 65536,
      473376 / 65536,
      473424 / 65536,
      473472 / 65536,
      473520 / 65536,
      473568 / 65536,
      473616 / 65536,
      473664 / 65536,
      473712 / 65536,
      473760 / 65536,
      473808 / 65536,
      473856 / 65536,
      473904 / 65536,
      473952 / 65536,
      474e3 / 65536,
      474048 / 65536,
      474096 / 65536,
      474144 / 65536,
      474192 / 65536,
      474240 / 65536,
      474272 / 65536,
      474320 / 65536,
      474368 / 65536,
      474416 / 65536,
      474464 / 65536,
      474512 / 65536,
      474560 / 65536,
      474608 / 65536,
      474656 / 65536,
      474704 / 65536,
      474752 / 65536,
      474800 / 65536,
      474848 / 65536,
      474896 / 65536,
      474944 / 65536,
      474976 / 65536,
      475024 / 65536,
      475072 / 65536,
      475120 / 65536,
      475168 / 65536,
      475216 / 65536,
      475264 / 65536,
      475312 / 65536,
      475360 / 65536,
      475408 / 65536,
      475456 / 65536,
      475488 / 65536,
      475536 / 65536,
      475584 / 65536,
      475632 / 65536,
      475680 / 65536,
      475728 / 65536,
      475776 / 65536,
      475824 / 65536,
      475856 / 65536,
      475904 / 65536,
      475952 / 65536,
      476e3 / 65536,
      476048 / 65536,
      476096 / 65536,
      476144 / 65536,
      476192 / 65536,
      476224 / 65536,
      476272 / 65536,
      476320 / 65536,
      476368 / 65536,
      476416 / 65536,
      476464 / 65536,
      476512 / 65536,
      476544 / 65536,
      476592 / 65536,
      476640 / 65536,
      476688 / 65536,
      476736 / 65536,
      476784 / 65536,
      476816 / 65536,
      476864 / 65536,
      476912 / 65536,
      476960 / 65536,
      477008 / 65536,
      477056 / 65536,
      477088 / 65536,
      477136 / 65536,
      477184 / 65536,
      477232 / 65536,
      477280 / 65536,
      477328 / 65536,
      477360 / 65536,
      477408 / 65536,
      477456 / 65536,
      477504 / 65536,
      477552 / 65536,
      477584 / 65536,
      477632 / 65536,
      477680 / 65536,
      477728 / 65536,
      477776 / 65536,
      477808 / 65536,
      477856 / 65536,
      477904 / 65536,
      477952 / 65536,
      477984 / 65536,
      478032 / 65536,
      478080 / 65536,
      478128 / 65536,
      478176 / 65536,
      478208 / 65536,
      478256 / 65536,
      478304 / 65536,
      478352 / 65536,
      478384 / 65536,
      478432 / 65536,
      478480 / 65536,
      478528 / 65536,
      478576 / 65536,
      478608 / 65536,
      478656 / 65536,
      478704 / 65536,
      478752 / 65536,
      478784 / 65536,
      478832 / 65536,
      478880 / 65536,
      478928 / 65536,
      478960 / 65536,
      479008 / 65536,
      479056 / 65536,
      479104 / 65536,
      479136 / 65536,
      479184 / 65536,
      479232 / 65536,
      479264 / 65536,
      479312 / 65536,
      479360 / 65536,
      479408 / 65536,
      479440 / 65536,
      479488 / 65536,
      479536 / 65536,
      479584 / 65536,
      479616 / 65536,
      479664 / 65536,
      479712 / 65536,
      479744 / 65536,
      479792 / 65536,
      479840 / 65536,
      479888 / 65536,
      479920 / 65536,
      479968 / 65536,
      480016 / 65536,
      480048 / 65536,
      480096 / 65536,
      480144 / 65536,
      480176 / 65536,
      480224 / 65536,
      480272 / 65536,
      480304 / 65536,
      480352 / 65536,
      480400 / 65536,
      480448 / 65536,
      480480 / 65536,
      480528 / 65536,
      480576 / 65536,
      480608 / 65536,
      480656 / 65536,
      480704 / 65536,
      480736 / 65536,
      480784 / 65536,
      480832 / 65536,
      480864 / 65536,
      480912 / 65536,
      480960 / 65536,
      480992 / 65536,
      481040 / 65536,
      481088 / 65536,
      481120 / 65536,
      481168 / 65536,
      481216 / 65536,
      481248 / 65536,
      481296 / 65536,
      481328 / 65536,
      481376 / 65536,
      481424 / 65536,
      481456 / 65536,
      481504 / 65536,
      481552 / 65536,
      481584 / 65536,
      481632 / 65536,
      481680 / 65536,
      481712 / 65536,
      481760 / 65536,
      481792 / 65536,
      481840 / 65536,
      481888 / 65536,
      481920 / 65536,
      481968 / 65536,
      482016 / 65536,
      482048 / 65536,
      482096 / 65536,
      482128 / 65536,
      482176 / 65536,
      482224 / 65536,
      482256 / 65536,
      482304 / 65536,
      482336 / 65536,
      482384 / 65536,
      482432 / 65536,
      482464 / 65536,
      482512 / 65536,
      482544 / 65536,
      482592 / 65536,
      482640 / 65536,
      482672 / 65536,
      482720 / 65536,
      482752 / 65536,
      482800 / 65536,
      482848 / 65536,
      482880 / 65536,
      482928 / 65536,
      482960 / 65536,
      483008 / 65536,
      483056 / 65536,
      483088 / 65536,
      483136 / 65536,
      483168 / 65536,
      483216 / 65536,
      483248 / 65536,
      483296 / 65536,
      483344 / 65536,
      483376 / 65536,
      483424 / 65536,
      483456 / 65536,
      483504 / 65536,
      483536 / 65536,
      483584 / 65536,
      483616 / 65536,
      483664 / 65536,
      483712 / 65536,
      483744 / 65536,
      483792 / 65536,
      483824 / 65536,
      483872 / 65536,
      483904 / 65536,
      483952 / 65536,
      483984 / 65536,
      484032 / 65536,
      484064 / 65536,
      484112 / 65536,
      484160 / 65536,
      484192 / 65536,
      484240 / 65536,
      484272 / 65536,
      484320 / 65536,
      484352 / 65536,
      484400 / 65536,
      484432 / 65536,
      484480 / 65536,
      484512 / 65536,
      484560 / 65536,
      484592 / 65536,
      484640 / 65536,
      484672 / 65536,
      484720 / 65536,
      484752 / 65536,
      484800 / 65536,
      484832 / 65536,
      484880 / 65536,
      484912 / 65536,
      484960 / 65536,
      484992 / 65536,
      485040 / 65536,
      485072 / 65536,
      485120 / 65536,
      485152 / 65536,
      485200 / 65536,
      485232 / 65536,
      485280 / 65536,
      485312 / 65536,
      485360 / 65536,
      485392 / 65536,
      485440 / 65536,
      485472 / 65536,
      485520 / 65536,
      485552 / 65536,
      485600 / 65536,
      485632 / 65536,
      485680 / 65536,
      485712 / 65536,
      485760 / 65536,
      485792 / 65536,
      485840 / 65536,
      485872 / 65536,
      485920 / 65536,
      485952 / 65536,
      486e3 / 65536,
      486032 / 65536,
      486064 / 65536,
      486112 / 65536,
      486144 / 65536,
      486192 / 65536,
      486224 / 65536,
      486272 / 65536,
      486304 / 65536,
      486352 / 65536,
      486384 / 65536,
      486432 / 65536,
      486464 / 65536,
      486496 / 65536,
      486544 / 65536,
      486576 / 65536,
      486624 / 65536,
      486656 / 65536,
      486704 / 65536,
      486736 / 65536,
      486784 / 65536,
      486816 / 65536,
      486848 / 65536,
      486896 / 65536,
      486928 / 65536,
      486976 / 65536,
      487008 / 65536,
      487056 / 65536,
      487088 / 65536,
      487120 / 65536,
      487168 / 65536,
      487200 / 65536,
      487248 / 65536,
      487280 / 65536,
      487312 / 65536,
      487360 / 65536,
      487392 / 65536,
      487440 / 65536,
      487472 / 65536,
      487520 / 65536,
      487552 / 65536,
      487584 / 65536,
      487632 / 65536,
      487664 / 65536,
      487712 / 65536,
      487744 / 65536,
      487776 / 65536,
      487824 / 65536,
      487856 / 65536,
      487904 / 65536,
      487936 / 65536,
      487968 / 65536,
      488016 / 65536,
      488048 / 65536,
      488080 / 65536,
      488128 / 65536,
      488160 / 65536,
      488208 / 65536,
      488240 / 65536,
      488272 / 65536,
      488320 / 65536,
      488352 / 65536,
      488400 / 65536,
      488432 / 65536,
      488464 / 65536,
      488512 / 65536,
      488544 / 65536,
      488576 / 65536,
      488624 / 65536,
      488656 / 65536,
      488704 / 65536,
      488736 / 65536,
      488768 / 65536,
      488816 / 65536,
      488848 / 65536,
      488880 / 65536,
      488928 / 65536,
      488960 / 65536,
      488992 / 65536,
      489040 / 65536,
      489072 / 65536,
      489104 / 65536,
      489152 / 65536,
      489184 / 65536,
      489216 / 65536,
      489264 / 65536,
      489296 / 65536,
      489344 / 65536,
      489376 / 65536,
      489408 / 65536,
      489456 / 65536,
      489488 / 65536,
      489520 / 65536,
      489568 / 65536,
      489600 / 65536,
      489632 / 65536,
      489680 / 65536,
      489712 / 65536,
      489744 / 65536,
      489792 / 65536,
      489824 / 65536,
      489856 / 65536,
      489888 / 65536,
      489936 / 65536,
      489968 / 65536,
      49e4 / 65536,
      490048 / 65536,
      490080 / 65536,
      490112 / 65536,
      490160 / 65536,
      490192 / 65536,
      490224 / 65536,
      490272 / 65536,
      490304 / 65536,
      490336 / 65536,
      490384 / 65536,
      490416 / 65536,
      490448 / 65536,
      490480 / 65536,
      490528 / 65536,
      490560 / 65536,
      490592 / 65536,
      490640 / 65536,
      490672 / 65536,
      490704 / 65536,
      490752 / 65536,
      490784 / 65536,
      490816 / 65536,
      490848 / 65536,
      490896 / 65536,
      490928 / 65536,
      490960 / 65536,
      491008 / 65536,
      491040 / 65536,
      491072 / 65536,
      491104 / 65536,
      491152 / 65536,
      491184 / 65536,
      491216 / 65536,
      491264 / 65536,
      491296 / 65536,
      491328 / 65536,
      491360 / 65536,
      491408 / 65536,
      491440 / 65536,
      491472 / 65536,
      491504 / 65536,
      491552 / 65536,
      491584 / 65536,
      491616 / 65536,
      491648 / 65536,
      491696 / 65536,
      491728 / 65536,
      491760 / 65536,
      491792 / 65536,
      491840 / 65536,
      491872 / 65536,
      491904 / 65536,
      491936 / 65536,
      491984 / 65536,
      492016 / 65536,
      492048 / 65536,
      492080 / 65536,
      492128 / 65536,
      492160 / 65536,
      492192 / 65536,
      492224 / 65536,
      492272 / 65536,
      492304 / 65536,
      492336 / 65536,
      492368 / 65536,
      492416 / 65536,
      492448 / 65536,
      492480 / 65536,
      492512 / 65536,
      492560 / 65536,
      492592 / 65536,
      492624 / 65536,
      492656 / 65536,
      492688 / 65536,
      492736 / 65536,
      492768 / 65536,
      492800 / 65536,
      492832 / 65536,
      492880 / 65536,
      492912 / 65536,
      492944 / 65536,
      492976 / 65536,
      493008 / 65536,
      493056 / 65536,
      493088 / 65536,
      493120 / 65536,
      493152 / 65536,
      493200 / 65536,
      493232 / 65536,
      493264 / 65536,
      493296 / 65536,
      493328 / 65536,
      493376 / 65536,
      493408 / 65536,
      493440 / 65536,
      493472 / 65536,
      493504 / 65536,
      493552 / 65536,
      493584 / 65536,
      493616 / 65536,
      493648 / 65536,
      493680 / 65536,
      493728 / 65536,
      493760 / 65536,
      493792 / 65536,
      493824 / 65536,
      493856 / 65536,
      493888 / 65536,
      493936 / 65536,
      493968 / 65536,
      494e3 / 65536,
      494032 / 65536,
      494064 / 65536,
      494112 / 65536,
      494144 / 65536,
      494176 / 65536,
      494208 / 65536,
      494240 / 65536,
      494272 / 65536,
      494320 / 65536,
      494352 / 65536,
      494384 / 65536,
      494416 / 65536,
      494448 / 65536,
      494480 / 65536,
      494528 / 65536,
      494560 / 65536,
      494592 / 65536,
      494624 / 65536,
      494656 / 65536,
      494688 / 65536,
      494736 / 65536,
      494768 / 65536,
      494800 / 65536,
      494832 / 65536,
      494864 / 65536,
      494896 / 65536,
      494928 / 65536,
      494976 / 65536,
      495008 / 65536,
      495040 / 65536,
      495072 / 65536,
      495104 / 65536,
      495136 / 65536,
      495168 / 65536,
      495216 / 65536,
      495248 / 65536,
      495280 / 65536,
      495312 / 65536,
      495344 / 65536,
      495376 / 65536,
      495408 / 65536,
      495456 / 65536,
      495488 / 65536,
      495520 / 65536,
      495552 / 65536,
      495584 / 65536,
      495616 / 65536,
      495648 / 65536,
      495680 / 65536,
      495728 / 65536,
      495760 / 65536,
      495792 / 65536,
      495824 / 65536,
      495856 / 65536,
      495888 / 65536,
      495920 / 65536,
      495952 / 65536,
      496e3 / 65536,
      496032 / 65536,
      496064 / 65536,
      496096 / 65536,
      496128 / 65536,
      496160 / 65536,
      496192 / 65536,
      496224 / 65536,
      496256 / 65536,
      496304 / 65536,
      496336 / 65536,
      496368 / 65536,
      496400 / 65536,
      496432 / 65536,
      496464 / 65536,
      496496 / 65536,
      496528 / 65536,
      496560 / 65536,
      496592 / 65536,
      496640 / 65536,
      496672 / 65536,
      496704 / 65536,
      496736 / 65536,
      496768 / 65536,
      496800 / 65536,
      496832 / 65536,
      496864 / 65536,
      496896 / 65536,
      496928 / 65536,
      496960 / 65536,
      497008 / 65536,
      497040 / 65536,
      497072 / 65536,
      497104 / 65536,
      497136 / 65536,
      497168 / 65536,
      497200 / 65536,
      497232 / 65536,
      497264 / 65536,
      497296 / 65536,
      497328 / 65536,
      497360 / 65536,
      497392 / 65536,
      497440 / 65536,
      497472 / 65536,
      497504 / 65536,
      497536 / 65536,
      497568 / 65536,
      497600 / 65536,
      497632 / 65536,
      497664 / 65536,
      497696 / 65536,
      497728 / 65536,
      497760 / 65536,
      497792 / 65536,
      497824 / 65536,
      497856 / 65536,
      497888 / 65536,
      497920 / 65536,
      497968 / 65536,
      498e3 / 65536,
      498032 / 65536,
      498064 / 65536,
      498096 / 65536,
      498128 / 65536,
      498160 / 65536,
      498192 / 65536,
      498224 / 65536,
      498256 / 65536,
      498288 / 65536,
      498320 / 65536,
      498352 / 65536,
      498384 / 65536,
      498416 / 65536,
      498448 / 65536,
      498480 / 65536,
      498512 / 65536,
      498544 / 65536,
      498576 / 65536,
      498608 / 65536,
      498640 / 65536,
      498672 / 65536,
      498704 / 65536,
      498752 / 65536,
      498784 / 65536,
      498816 / 65536,
      498848 / 65536,
      498880 / 65536,
      498912 / 65536,
      498944 / 65536,
      498976 / 65536,
      499008 / 65536,
      499040 / 65536,
      499072 / 65536,
      499104 / 65536,
      499136 / 65536,
      499168 / 65536,
      499200 / 65536,
      499232 / 65536,
      499264 / 65536,
      499296 / 65536,
      499328 / 65536,
      499360 / 65536,
      499392 / 65536,
      499424 / 65536,
      499456 / 65536,
      499488 / 65536,
      499520 / 65536,
      499552 / 65536,
      499584 / 65536,
      499616 / 65536,
      499648 / 65536
    ];
    if (x < 1) x = 1;
    if (x > 2047) x = 2047;
    return LOG_VALUE_TABLE[x];
  }

  // ns-hugo-imp:F:\Git\laioxy.github.io\assets\js\damage\calc.js
  function getTypeMatchUp(dungeon, attacker, defender, targetTypeIdx, attackType) {
    if (!TypeData) {
      console.error("TypeData not found");
      return;
    }
    if ((defender.statuses.miracle_eye || attacker.exclusiveItemEffectActive(70)) && attackType == TYPE_PSYCHIC && defender.types[targetTypeIdx] == TYPE_DARK) {
      return MATCHUP_NEUTRAL;
    }
    if (attackType == TYPE_GROUND) {
      if (dungeon.gravity) {
        if (defender.types[targetTypeIdx] == TYPE_FLYING) {
          return MATCHUP_NEUTRAL;
        }
      } else if (defender.hasConditionalGroundImmunity(dungeon)) {
        return MATCHUP_IMMUNE;
      }
    }
    return TypeData[attackType].MatchUp[defender.types[targetTypeIdx]];
  }
  function flashFireShouldActivate(attacker, defender) {
    if (!defender.isValid()) return 0;
    if (attacker.abilityActive(107) || !defender.abilityActiveDetails(72, attacker, true)) {
      return 0;
    }
    return defender.flash_fire_boost < 2 ? 2 : 1;
  }
  function GendersEqualNotGenderless(monster1, monster2) {
    let gender1 = monster1.gender;
    let gender2 = monster2.gender;
    if (gender1 == GENDER_GENDERLESS || gender2 == GENDER_GENDERLESS) {
      return false;
    }
    return gender1 == gender2;
  }
  function CalcTypeBasedDamageEffects(dungeon, attacker, defender, attackPower, attackType, damageOut, partial) {
    dungeon.damageDetailLog.attackPower = attackPower;
    dungeon.damageDetailLog.attackType = attackType;
    let damageMultOut = 1;
    damageOut.criticalHit = false;
    damageOut.fullTypeImmunity = false;
    if (!defender.isValid()) {
      return true;
    }
    if (!TypeData) {
      console.error("TypeData not found");
      return null;
    }
    damageOut.typeMatchup = 0;
    const typeMatchups = new Array(2);
    for (let i = 0; i < 2; i++) {
      const matchupMultipliers = new Array(4);
      if (!partial && (attacker.iqSkillEnabled(59, dungeon) || defender.iqSkillEnabled(59, dungeon))) {
        matchupMultipliers[0] = MATCHUP_IMMUNE_ERRATIC;
        matchupMultipliers[1] = MATCHUP_NOTVERY_ERRATIC;
        matchupMultipliers[2] = MATCHUP_NEUTRAL_ERRATIC;
        matchupMultipliers[3] = MATCHUP_SUPER_ERRATIC;
      } else {
        matchupMultipliers[0] = MATCHUP_IMMUNE2;
        matchupMultipliers[1] = MATCHUP_NOTVERY;
        matchupMultipliers[2] = MATCHUP_NEUTRAL2;
        matchupMultipliers[3] = MATCHUP_SUPER;
      }
      if (damageMultOut == 0) break;
      let matchup = MATCHUP_NEUTRAL;
      if (!attacker.scrappyShouldActivate(defender, attackType, dungeon) && typeIneffectiveAgainstGhost(attackType) && defender.ghostImmunityActive(attacker, i)) {
        matchup = MATCHUP_IMMUNE;
        dungeon.damageCalc.ghostImmunityActivated = true;
      } else {
        matchup = getTypeMatchUp(dungeon, attacker, defender, i, attackType);
      }
      if (attacker.iqSkillEnabled(59, dungeon) || matchup != MATCHUP_NEUTRAL) {
        damageMultOut *= matchupMultipliers[matchup];
      }
      typeMatchups[i] = matchup;
    }
    dungeon.damageCalc.moveIndivTypeMatchups[0] = typeMatchups[0];
    dungeon.damageCalc.moveIndivTypeMatchups[1] = typeMatchups[1];
    damageOut.typeMatchup = TYPE_MATCHUP_COMBINATOR_TABLE[typeMatchups[0]][typeMatchups[1]];
    let superEffective = damageOut.typeMatchup == MATCHUP_SUPER_EFFECTIVE;
    if (!superEffective) {
      if (defender.abilityActiveDetails(53, attacker, true) && attackType != TYPE_NONE) {
        damageMultOut = 0;
        dungeon.damageDetailLog.isWonderGuardActive = true;
      }
    }
    if (attacker.abilityActive(80) && damageOut.typeMatchup == MATCHUP_NOT_VERY_EFFECTIVE) {
      damageMultOut *= TINTED_LENS_MULTIPLIER;
      dungeon.damageDetailLog.isTintedLensActive = true;
    }
    if ((defender.abilityActiveDetails(108, attacker, true) || defender.abilityActiveDetails(110, attacker, true)) && damageOut.typeMatchup == MATCHUP_SUPER_EFFECTIVE) {
      damageMultOut *= SOLID_ROCK_MULTIPLIER;
      if (defender.abilityActiveDetails(108, attacker, true)) {
        dungeon.damageDetailLog.isSolidRockActive = true;
      } else if (defender.abilityActiveDetails(110, attacker, true)) {
        dungeon.damageDetailLog.isFilterActive = true;
      }
    }
    if (defender.exclusiveItemEffectActive(90)) {
      damageMultOut *= CONST_0_50;
      dungeon.damageDetailLog.isTimeShieldActive = true;
    }
    if (attacker.exclusiveItemEffectActive(90) && attacker.flag_td_timesheald) {
      damageMultOut *= 2;
      dungeon.damageDetailLog.isTimeShieldGlitch = true;
    }
    if (!partial && attacker.abilityActive(100) && attackPower <= TECHNICIAN_MOVE_POWER_THRESHOLD) {
      damageMultOut *= CONST_1_50;
      dungeon.damageDetailLog.isTechnicianActive = true;
    }
    if ((attackType == TYPE_FIRE || attackType == TYPE_ICE) && defender.abilityActiveDetails(2, attacker, true)) {
      dungeon.damageCalc.fireMoveAbilityDropActivated = true;
      damageMultOut *= CONST_0_50;
    }
    if (attackType == TYPE_FIRE && flashFireShouldActivate(attacker, defender)) {
      dungeon.damageCalc.flashFireActivated = true;
      damageMultOut = 0;
      superEffective = false;
      damageOut.typeMatchup = MATCHUP_IMMUNE;
      damageOut.criticalHit = false;
      damageOut.fullTypeImmunity = true;
      dungeon.damageDetailLog.isThickFatActive = true;
    }
    if (attackType == TYPE_FIRE && defender.abilityActiveDetails(95, attacker, true)) {
      dungeon.damageCalc.fireMoveAbilityDropActivated = true;
      damageMultOut *= CONST_0_50;
      dungeon.damageDetailLog.isHeatproofActive = true;
    }
    if (attackType == TYPE_GROUND && (!attacker.abilityActive(83) && defender.levitateActive(dungeon) || defender.hasConditionalGroundImmunity(dungeon))) {
      damageMultOut = 0;
      superEffective = false;
      damageOut.typeMatchup = MATCHUP_IMMUNE;
      damageOut.criticalHit = false;
      damageOut.fullTypeImmunity = true;
      dungeon.damageDetailLog.isLevitateActive = true;
    }
    if (attackType == TYPE_WATER && attacker.abilityActive(16)) {
      let maxHp = attacker.hp_max;
      if (maxHp > MAX_HP_CAP) {
        maxHp = MAX_HP_CAP;
      }
      if (attacker.hp <= Math.trunc(maxHp / 4)) {
        dungeon.damageCalc.torrentBoostActivated = true;
        damageMultOut *= 2;
        dungeon.damageDetailLog.isTorrentActive = true;
      }
    }
    if (attackType == TYPE_GRASS && attacker.abilityActive(26)) {
      let maxHp = attacker.hp_max;
      if (maxHp > MAX_HP_CAP) {
        maxHp = MAX_HP_CAP;
      }
      if (attacker.hp <= Math.trunc(maxHp / 4)) {
        dungeon.damageCalc.overgrowBoostActivated = true;
        damageMultOut *= 2;
        dungeon.damageDetailLog.isOvergrowActive = true;
      }
    }
    if (attackType == TYPE_BUG && attacker.abilityActive(67)) {
      let maxHp = attacker.hp_max;
      if (maxHp > MAX_HP_CAP) {
        maxHp = MAX_HP_CAP;
      }
      if (attacker.hp <= Math.trunc(maxHp / 4)) {
        dungeon.damageCalc.swarmBoostActivated = true;
        damageMultOut *= 2;
        dungeon.damageDetailLog.isSwarmActive = true;
      }
    }
    if (attackType == TYPE_FIRE) {
      if (attacker.abilityActive(70)) {
        let maxHp = attacker.hp_max;
        if (maxHp > MAX_HP_CAP) {
          maxHp = MAX_HP_CAP;
        }
        if (attacker.hp <= Math.trunc(maxHp / 4)) {
          dungeon.damageCalc.fireMoveAbilityBoostActivated = true;
          damageMultOut *= 2;
          dungeon.damageDetailLog.isBlazeActive = true;
        }
      }
      if (defender.abilityActiveDetails(85, attacker, true)) {
        dungeon.damageCalc.fireMoveAbilityBoostActivated = true;
        damageMultOut *= CONST_1_50;
        dungeon.damageDetailLog.isDrySkinActive = true;
      }
    }
    if (attacker.statuses.burn) {
      damageMultOut *= BURN_DAMAGE_MULTIPLIER;
      dungeon.damageDetailLog.isBurnActive = true;
    }
    if (damageMultOut != 0 && attacker.isType(attackType)) {
      dungeon.damageCalc.stabBoostActivated = true;
      if (attacker.abilityActive(99)) {
        damageMultOut *= 2;
        dungeon.damageDetailLog.isAdaptabilitySTAB = true;
      } else {
        damageMultOut *= CONST_1_50;
        dungeon.damageDetailLog.isSTAB = true;
      }
    }
    const weather = attacker.perceivedWeather(dungeon);
    if (weather == WEATHER_SUNNY) {
      if (attackType == TYPE_FIRE) {
        dungeon.damageCalc.sunnyMultiplierActivated = true;
        damageMultOut *= CONST_1_50;
        dungeon.damageDetailLog.isSunnyFireActive = true;
      } else if (attackType == TYPE_WATER) {
        dungeon.damageCalc.sunnyMultiplierActivated = true;
        damageMultOut *= CONST_0_50;
        dungeon.damageDetailLog.isSunnyWaterActive = true;
      }
    }
    if (weather == WEATHER_RAIN) {
      if (attackType == TYPE_FIRE) {
        dungeon.damageCalc.rainMultiplierActivated = true;
        damageMultOut *= CONST_0_50;
      } else if (attackType == TYPE_WATER) {
        dungeon.damageCalc.rainMultiplierActivated = true;
        damageMultOut *= CONST_1_50;
      }
    }
    if (weather == WEATHER_CLOUDY && attackType != TYPE_NORMAL) {
      damageMultOut *= CLOUDY_DAMAGE_MULTIPLIER;
      dungeon.damageCalc.cloudyDropActivated = true;
      dungeon.damageDetailLog.isCloudyActive = true;
    }
    if ((dungeon.mud_sport || weather == WEATHER_FOG) && attackType == TYPE_ELECTRIC) {
      dungeon.damageCalc.electricMoveDampened = true;
      damageMultOut *= CONST_0_50;
      if (weather == WEATHER_FOG) {
        dungeon.damageDetailLog.isFogActive = true;
      } else if (dungeon.mud_sport) {
        dungeon.damageDetailLog.isMudSportActive = true;
      }
    }
    if (dungeon.water_sport && attackType == TYPE_FIRE) {
      dungeon.damageCalc.waterSportDropActivated = true;
      damageMultOut *= CONST_0_50;
      dungeon.damageDetailLog.isWaterSportActive = true;
    }
    if (attackType == TYPE_ELECTRIC && attacker.statuses.charge) {
      dungeon.damageCalc.chargeBoostActivated = true;
      damageMultOut *= 2;
      dungeon.damageDetailLog.isChargeActive = true;
    }
    return {
      superEffective,
      damageMultOut
    };
  }
  function CalcDamage(dungeon, attacker, defender, moveType, movePower, critChance, damageOut, damageMult, moveId, fullCalc) {
    let atk_stage_boost = 0;
    let def_stage_boost = 0;
    let def_stage = 0;
    const moveCategory = getMoveCategory(moveId);
    let atk_stage_mult = moveCategory == CATEGORY_PHYSICAL ? Math.pow(0.5, Math.abs(attacker.half_atk)) : Math.pow(0.5, Math.abs(attacker.half_sp_atk));
    let def_stage_mult = moveCategory == CATEGORY_PHYSICAL ? Math.pow(0.5, Math.abs(defender.half_def)) : Math.pow(0.5, Math.abs(defender.half_sp_def));
    if (attacker.flag_me_first) {
      damageMult *= ME_FIRST_MULTIPLIER;
      dungeon.damageDetailLog.isMeFirstActive = true;
    }
    if (attacker.abilityActive(92) && isRecoilMove(moveId)) {
      damageMult = damageMult * 3 / 2;
      dungeon.damageDetailLog.isRecklessActive = true;
    }
    if (attacker.abilityActive(101) && isPunchMove(moveId)) {
      damageMult *= CONST_1_50;
      dungeon.damageDetailLog.isIronFistActive = true;
    }
    if (attacker.abilityActive(107)) {
      moveType = 1;
      dungeon.damageDetailLog.isNormalizeActive = true;
    }
    if (moveId == 467) {
      moveType = attacker.types[0];
    }
    dungeon.damageCalc = new DamageCalcDiag();
    if (!attacker.is_leader && attacker.belly == 0 || moveId == 355 && defender.abilityActiveDetails(53, attacker, true)) {
      damageOut.damage = 1;
      damageOut.damageMessage = DAMAGE_MESSAGE_MOVE;
      damageOut.typeMatchup = MATCHUP_NEUTRAL;
      damageOut.type = moveType;
      damageOut.category = getMoveCategory(moveId);
      damageOut.criticalHit = false;
      damageOut.fullTypeImmunity = false;
      damageOut.noDamage = false;
      if (!attacker.is_leader && attacker.belly == 0) {
        dungeon.damageDetailLog.isHungryPalActive = true;
      } else if (moveId == 355 && defender.abilityActiveDetails(53, attacker, true)) {
        dungeon.damageDetailLog.isWonderGuardActive = true;
      }
      return damageOut;
    }
    damageOut.type = moveType;
    damageOut.category = moveCategory;
    if (attacker.abilityActive(96)) {
      if (defender.stage_def < defender.stage_sp_def) {
        if (moveCategory == CATEGORY_PHYSICAL) {
          atk_stage_boost = 1;
          dungeon.damageCalc.abilityOffenseModifier += 1;
        }
      } else {
        if (moveCategory == CATEGORY_SPECIAL) {
          atk_stage_boost = 1;
          dungeon.damageCalc.abilityOffenseModifier += 1;
        }
      }
    }
    if (attacker.types.includes(2)) {
      let flashFireBoost = attacker.flash_fire_boost;
      dungeon.damageCalc.flashFireBoost = flashFireBoost;
      atk_stage_boost += flashFireBoost;
    }
    if (attacker.iqSkillEnabled(34, dungeon)) {
      atk_stage_boost += 1;
      dungeon.damageCalc.iqSkillOffenseModifier += 1;
    }
    if (attacker.iqSkillEnabled(35, dungeon)) {
      atk_stage_boost -= 1;
      dungeon.damageCalc.iqSkillOffenseModifier -= 1;
    }
    if (attacker.iqSkillEnabled(60, dungeon) && attacker.flag_practice_swinger) {
      atk_stage_boost += 1;
      dungeon.damageCalc.iqSkillOffenseModifier += 1;
    }
    if (dungeon.otherMonsters.iqSkillEnabled(50, dungeon)) {
      atk_stage_boost += 1;
    }
    if (moveCategory == CATEGORY_PHYSICAL) {
      if (attacker.abilityActive(104)) {
        if (GendersEqualNotGenderless(attacker, defender)) {
          atk_stage_boost += 1;
          dungeon.damageCalc.abilityOffenseModifier += 1;
        } else if (attacker.gender != GENDER_GENDERLESS && defender.gender != GENDER_GENDERLESS) {
          atk_stage_boost -= 1;
          dungeon.damageCalc.abilityOffenseModifier -= 1;
        }
      }
      if (attacker.perceivedWeather(dungeon) == WEATHER_SUNNY && (attacker.abilityActive(113) || attacker.otherMonsterAbilityActive(113, dungeon))) {
        atk_stage_boost += 1;
        dungeon.damageCalc.abilityOffenseModifier += 1;
      }
    } else {
      if (attacker.abilityActive(90) && attacker.perceivedWeather(WEATHER_SUNNY)) {
        atk_stage_boost += 2;
        dungeon.damageCalc.abilityOffenseModifier += 2;
      }
      if (defender.perceivedWeather(dungeon) == WEATHER_SUNNY && (defender.abilityActive(113) || defender.otherMonsterAbilityActive(113, dungeon))) {
        def_stage = 1;
        dungeon.damageCalc.abilityDefenseModifier += 1;
      }
      if (defender.perceivedWeather(dungeon) == WEATHER_SANDSTORM) {
        if (defender.types.includes(13)) {
          def_stage += 2;
        }
      }
    }
    if (attacker.id == 419) {
      atk_stage_boost += 2;
    }
    if (attacker.id == 420) {
      atk_stage_boost -= 2;
    }
    if (attacker.id == 421) {
      atk_stage_boost -= 2;
    }
    if (attacker.id == 529) {
      atk_stage_boost -= 2;
    }
    if (attacker.id == 536) {
      atk_stage_boost += 2;
    }
    let atk_stage = moveCategory == CATEGORY_PHYSICAL ? attacker.stage_atk + atk_stage_boost : attacker.stage_sp_atk + atk_stage_boost;
    if (attacker.flag_anger_point && attacker.abilityActive(79)) {
      atk_stage = 20;
    }
    if (moveCategory == CATEGORY_PHYSICAL) {
      if (defender.statuses.skull_bash) {
        dungeon.damageCalc.skullBashDefenseBoostActivated = true;
        def_stage += 1;
      }
      if (defender.iqSkillEnabled(49, dungeon)) {
        def_stage -= 1;
        dungeon.damageCalc.iqSkillDefenseModifier -= 1;
      }
    }
    if (defender.iqSkillEnabled(34, dungeon)) {
      def_stage -= 1;
      dungeon.damageCalc.iqSkillDefenseModifier -= 1;
    }
    if (defender.iqSkillEnabled(35, dungeon)) {
      def_stage += 1;
      dungeon.damageCalc.iqSkillDefenseModifier += 1;
    }
    if (defender.id == 419) {
      def_stage -= 2;
    }
    if (defender.id == 420) {
      def_stage += 2;
    }
    if (defender.id == 421) {
      def_stage -= 2;
    }
    const entity_jpGiratina = dungeon.region_jp ? attacker : defender;
    if (entity_jpGiratina.id == 529) {
      def_stage += 2;
    }
    if (entity_jpGiratina.id == 536) {
      def_stage -= 2;
    }
    def_stage += moveCategory == CATEGORY_PHYSICAL ? defender.stage_def : defender.stage_sp_def;
    if (moveId == 445) {
      atk_stage_boost = 0;
      let stage = defender.stage_atk;
      if (stage > 10) atk_stage_boost = stage - 10 << 16 >> 16;
      stage = defender.stage_def;
      if (stage > 10) atk_stage_boost = atk_stage_boost + stage - 10 << 16 >> 16;
      stage = defender.stage_sp_atk;
      if (stage > 10) atk_stage_boost = atk_stage_boost + stage - 10 << 16 >> 16;
      stage = defender.stage_sp_def;
      if (stage > 10) atk_stage_boost = atk_stage_boost + stage - 10 << 16 >> 16;
      atk_stage += atk_stage_boost;
    }
    if (attacker.abilityActive(103)) {
      def_stage = 10;
      def_stage_mult = 1;
    } else if (defender.abilityActive(103)) {
      atk_stage = 10;
      atk_stage_mult = 1;
    }
    if (atk_stage < 0) atk_stage = 0;
    if (atk_stage > 20) atk_stage = 20;
    dungeon.damageCalc.offensiveStatStage = atk_stage;
    dungeon.damageCalc.offensiveStat = moveCategory == CATEGORY_PHYSICAL ? attacker.atk : attacker.sp_atk;
    const atk_stat_stage_mult = OFFENSIVE_STAT_STAGE_MULTIPLIERS[atk_stage];
    const atk_mult = moveCategory == CATEGORY_PHYSICAL ? attacker.atk * atk_stat_stage_mult : attacker.sp_atk * atk_stat_stage_mult;
    let atk = Math.trunc(atk_mult * atk_stage_mult);
    if (def_stage < 0) def_stage = 0;
    if (def_stage > 20) def_stage = 20;
    dungeon.damageCalc.defensiveStatStage = def_stage;
    dungeon.damageCalc.defensiveStat = moveCategory == CATEGORY_PHYSICAL ? defender.def : defender.sp_def;
    const def_mult = moveCategory == CATEGORY_PHYSICAL ? defender.def * DEFENSIVE_STAT_STAGE_MULTIPLIERS[def_stage] : defender.sp_def * DEFENSIVE_STAT_STAGE_MULTIPLIERS[def_stage];
    let def = Math.trunc(def_mult * def_stage_mult);
    if (attacker.is_member) {
      atk += attacker.exclusiveItemOffenseBoost(moveCategory);
    }
    if (defender.is_member) {
      def += defender.exclusiveItemDefenseBoost(moveCategory);
    }
    if (moveCategory == CATEGORY_PHYSICAL) {
      if (attacker.itemActive(26)) {
        atk += POWER_BAND_STAT_BOOST;
        dungeon.damageCalc.itemAtkModifier += POWER_BAND_STAT_BOOST;
      }
      if (attacker.itemActive(50)) {
        atk += MUNCH_BELT_STAT_BOOST;
        dungeon.damageCalc.itemAtkModifier += MUNCH_BELT_STAT_BOOST;
      }
      if (attacker.auraBowActive()) {
        atk += AURA_BOW_STAT_BOOST;
        dungeon.damageCalc.itemSpAtkModifier += AURA_BOW_STAT_BOOST;
      }
      if (fullCalc) {
        if (defender.itemActive(37)) {
          def += DEF_SCARF_STAT_BOOST;
          dungeon.damageCalc.itemDefModifier += DEF_SCARF_STAT_BOOST;
        }
        if (defender.auraBowActive()) {
          def += AURA_BOW_STAT_BOOST;
          dungeon.damageCalc.itemDefModifier += AURA_BOW_STAT_BOOST;
        }
      }
    } else {
      if (fullCalc) {
        if (defender.itemActive(41)) {
          def += ZINC_BAND_STAT_BOOST;
          dungeon.damageCalc.itemSpDefModifier += ZINC_BAND_STAT_BOOST;
        }
        if (defender.auraBowActive()) {
          def += AURA_BOW_STAT_BOOST;
          dungeon.damageCalc.itemDefModifier += AURA_BOW_STAT_BOOST;
        }
      }
      if (attacker.itemActive(40)) {
        atk += SPECIAL_BAND_STAT_BOOST;
        dungeon.damageCalc.itemSpAtkModifier += SPECIAL_BAND_STAT_BOOST;
      }
      if (attacker.itemActive(50)) {
        atk += MUNCH_BELT_STAT_BOOST;
        dungeon.damageCalc.itemSpAtkModifier += MUNCH_BELT_STAT_BOOST;
      }
      if (defender.auraBowActive()) {
        atk += AURA_BOW_STAT_BOOST;
        dungeon.damageCalc.itemSpAtkModifier += AURA_BOW_STAT_BOOST;
      }
    }
    const power = movePower * atk_stat_stage_mult * atk_stage_mult;
    let atk_mult_int = 1;
    let atk_div = 1;
    let def_mult_int = 1;
    let def_div = 1;
    let not_physical = MoveNotPhysial2(moveId);
    if (!not_physical && attacker.abilityActive(17) && attacker.hasNegativeStatus(true)) {
      atk_mult_int = 2;
    }
    if (attacker.abilityActive(34) || attacker.abilityActive(75)) {
      if (dungeon.rng.rollHugePurePower() && !not_physical) {
        atk_mult_int *= 3;
        atk_div = 2;
      }
    }
    if (attacker.abilityActive(48) && !not_physical) {
      atk_mult_int *= 3;
      atk_div <<= 1;
    }
    const teamIdx = attacker.is_member ? 1 : 0;
    if (attacker.abilityActive(56) && not_physical && dungeon.minus[teamIdx]) {
      atk_div *= 10;
      atk_mult_int *= 15;
    }
    if (attacker.abilityActive(63) && not_physical && dungeon.plus[teamIdx]) {
      atk_div *= 10;
      atk_mult_int *= 15;
    }
    if (defender.abilityActiveDetails(6, attacker, true)) {
      atk_mult_int <<= 2;
      atk_div *= 5;
    }
    if (defender.abilityActiveDetails(52, attacker, true)) {
      if (defender.hasNegativeStatus(true)) {
        def_mult_int = 3;
        def_div = 2;
      }
    }
    atk *= atk_mult_int;
    def *= def_mult_int;
    if (atk_div != 1) atk /= atk_div;
    if (def_div != 1) def /= def_div;
    dungeon.damageCalc.offenseCalc = atk;
    dungeon.damageCalc.defenseCalc = def;
    if (atk < 0) atk = 0;
    if (atk >= OFFENSE_STAT_MAX) atk = OFFENSE_STAT_MAX;
    dungeon.damageCalc.damageCalcDef = def;
    const def_fx = def;
    const level = attacker.level;
    const flv = attacker.level + (atk - def) / 8;
    const at = power + atk;
    dungeon.damageCalc.damageCalcAt = Math.round(at);
    dungeon.damageCalc.attackerLevel = attacker.level;
    dungeon.damageCalc.damageCalcFlv = Math.round(flv);
    const atScaled = at * CONST_153_DIV_256;
    const defScaled = def_fx * CONST_NEG0_5;
    const lnArg = Math.round((flv + 50) * 10);
    const ln = clampedLn(lnArg);
    const lnScaled = ln * 50;
    let base = defScaled + atScaled + lnScaled + -311;
    if (dungeon.genInfo.fixedRoomId != FIXED_SUBSTITUTE_ROOM && !attacker.is_member) {
      base /= CONST_85_DIV_64;
    }
    if (999 < base) base = 999;
    if (base < 1) base = 1;
    const calcTypeBasedDamageEffectsResult = CalcTypeBasedDamageEffects(
      dungeon,
      attacker,
      defender,
      movePower,
      moveType,
      damageOut,
      isRegularAttackOrProjectile(moveId)
    );
    let damageMultDynamic = calcTypeBasedDamageEffectsResult.damageMultOut;
    let superEffective = calcTypeBasedDamageEffectsResult.superEffective;
    if (fullCalc && !attacker.exclusiveItemEffectActive(68)) {
      if (moveCategory == CATEGORY_PHYSICAL && (moveId != 72 && defender.statuses.reflect || defender.exclusiveItemEffectActive(30))) {
        damageMultDynamic *= CONST_0_50;
        dungeon.damageCalc.halfPhysicalDamageActivated = true;
      }
      if (moveCategory == CATEGORY_SPECIAL && (defender.statuses.light_screen || defender.exclusiveItemEffectActive(31))) {
        damageMultDynamic *= CONST_0_50;
        dungeon.damageCalc.halfSpecialDamageActivated = true;
      }
    }
    if (!defender.statuses.lucky_chant && !defender.abilityActiveDetails(12, attacker, true) && !defender.abilityActiveDetails(19) && !defender.iqSkillEnabled(64, dungeon)) {
      if (attacker.gender != GENDER_FEMALE) {
        critChance += critChance / 2;
      }
      if (attacker.statuses.focus_energy) {
        dungeon.damageCalc.focusEnergyActivated = true;
        critChance = OFFENSE_STAT_MAX;
      } else {
        if (attacker.itemActive(19) || attacker.iqSkillEnabled(29, dungeon)) {
          dungeon.damageCalc.scopeLensOrSharpshooterActivated = true;
          critChance += SCOPE_LENS_CRIT_RATE_BOOST;
        }
        if (attacker.abilityActive(88)) {
          dungeon.damageCalc.superLuckActivated = true;
          critChance += SUPER_LUCK_CRIT_RATE_BOOST;
        }
        if (defender.itemActive(20)) {
          dungeon.damageCalc.patsyBandActivated = true;
          critChance += SCOPE_LENS_CRIT_RATE_BOOST;
        }
        if (superEffective && attacker.iqSkillEnabled(1, dungeon)) {
          critChance = TYPE_ADVANTAGE_MASTER_CRIT_RATE;
          dungeon.damageCalc.typeAdvantageMasterActivated = true;
        }
      }
      if (dungeon.rng.rollCriticalHit(critChance) && !defender.exclusiveItemEffectActive(5)) {
        damageOut.criticalHit = true;
        if (attacker.abilityActive(93)) {
          damageMultDynamic *= 2;
          dungeon.damageCalc.sniperActivated = true;
        } else {
          damageMultDynamic *= CONST_1_50;
        }
      }
    }
    dungeon.damageCalc.damageCalcBase = Math.round(base);
    base *= damageMultDynamic;
    dungeon.damageCalc.staticDamageMult = damageMult;
    base *= damageMult;
    dungeon.damageCalc.damageCalc = Math.round(base);
    const variance = dungeon.rng.rollDamageVariance();
    base *= variance;
    dungeon.damageCalc.damageCalcRandomMultPct = Math.round(100 * variance);
    damageOut.damage = Math.round(base);
    if (moveId == 405) {
      damageOut.damage = Math.ceil(damageOut.damage * CONST_0_50);
    }
    if (moveId == 405 && attacker.iqSkillEnabled(47, dungeon)) {
      damageOut.damage = Math.ceil(damageOut.damage * POWER_PITCHER_DAMAGE_MULTIPLIER);
      dungeon.damageDetailLog.isPowerPitcherActive = true;
    }
    if (damageOut.damage > 0 && attacker.exclusiveItemEffectActive(91)) {
      damageOut.damage = Math.ceil(damageOut.damage * AIR_BLADE_DAMAGE_MULTIPLIER);
      dungeon.damageDetailLog.isAirBladeActive = true;
    }
    if (damageOut.damage == 0) {
      damageOut.criticalHit = false;
    }
    defender.flag_anger_point = damageOut.criticalHit;
  }
  function MoveHitCheck(dungeon, attacker, defender, moveId, useSecondAccuracy, neverMissSelf) {
    if (neverMissSelf && attacker === defender) {
      return true;
    }
    if (moveId == 355 && attacker.iqSkillEnabled(4, dungeon)) {
      return true;
    }
    if (attacker.statuses.sure_shot) {
      return true;
    }
    if (attacker.statuses.whiffer) {
      return false;
    }
    let moveAccuracy = getMoveAccuracy(moveId, useSecondAccuracy);
    if (moveAccuracy > 100) {
      return true;
    }
    if (defender.itemActive(42)) {
      moveAccuracy -= DETECT_BAND_MOVE_ACCURACY_DROP;
    }
    if (defender.iqSkillEnabled(5, dungeon)) {
      moveAccuracy -= QUICK_DODGER_MOVE_ACCURACY_DROP;
    }
    let accuracyBoost = 0;
    if (attacker.abilityActive(51)) {
      accuracyBoost = 2;
    }
    if (moveId == 64) {
      const weather2 = attacker.perceivedWeather(dungeon);
      if (weather2 == WEATHER_RAIN) {
        return true;
      }
      if (weather2 == WEATHER_SUNNY) {
        accuracyBoost -= 2;
      }
    }
    if (moveId == 270 && attacker.perceivedWeather(dungeon) == WEATHER_HAIL) {
      return true;
    }
    if (attacker.iqSkillEnabled(48, dungeon)) {
      accuracyBoost += 1;
    }
    let evasionStage = defender.stage_evasion;
    if (defender.statuses.exposed) {
      evasionStage = 10;
    }
    let evasionBoost = 0;
    if (defender.perceivedWeather(dungeon) == WEATHER_SANDSTORM && defender.abilityActiveDetails(29, attacker, true)) {
      evasionBoost = 2;
    }
    if (attacker.abilityActive(48) && !(void 0)(moveId)) {
      evasionBoost += 2;
    }
    if (defender.iqSkillEnabled(63, dungeon)) {
      let maxHp = defender.hp_max;
      if (maxHp > MAX_HP_CAP) {
        maxHp = MAX_HP_CAP;
      }
      if (defender.hp <= Math.trunc(maxHp / 4)) {
        evasionBoost += 2;
      }
    }
    if (defender.iqSkillEnabled(48, dungeon)) {
      evasionBoost -= 1;
    }
    if (defender.abilityActiveDetails(98, attacker, true) && (defender.statuses.confusion || defender.statuses.cross_eyed)) {
      evasionBoost += 3;
    }
    if (defender.abilityActiveDetails(119, attacker, true) && (defender.perceivedWeather(dungeon) == WEATHER_HAIL || defender.perceivedWeather(dungeon) == WEATHER_SNOW)) {
      evasionBoost += 2;
    }
    const weather = defender.perceivedWeather(dungeon);
    if (EXCL_ITEM_EFFECTS_EVASION_BOOST[weather] != 0 && defender.exclusiveItemEffectActive(EXCL_ITEM_EFFECTS_EVASION_BOOST[weather])) {
      evasionBoost += 1;
    }
    evasionStage += evasionBoost;
    let accuracyStage = attacker.stage_accuracy + accuracyBoost;
    if (attacker.abilityActive(106) || defender.abilityActiveDetails(106, attacker, true)) {
      evasionStage = 10;
      accuracyStage = 10;
    }
    if (accuracyStage < 0) accuracyStage = 0;
    if (accuracyStage > 20) accuracyStage = 20;
    const ACCURACY_MULTIPLIERS = attacker.gender == GENDER_FEMALE ? FEMALE_ACCURACY_STAGE_MULTIPLIERS : MALE_ACCURACY_STAGE_MULTIPLIERS;
    let accuracy = ACCURACY_MULTIPLIERS[accuracyStage];
    if (evasionStage < 0) evasionStage = 0;
    if (evasionStage > 20) evasionStage = 20;
    if (accuracy < 0) accuracy = 0;
    if (accuracy > 100) accuracy = 100;
    const EVASION_MULTIPLIERS = defender.gender == GENDER_FEMALE ? FEMALE_EVASION_STAGE_MULTIPLIERS : MALE_EVASION_STAGE_MULTIPLIERS;
    let evasion = EVASION_MULTIPLIERS[evasionStage];
    if (evasion < 0) evasion = 0;
    if (evasion > 100) evasion = 100;
    return dungeon.rng.rollHitChance(Math.trunc(moveAccuracy * accuracy * evasion), useSecondAccuracy);
  }
  function ApplyAbilityAndEffectImmunities(attacker, defender, damageData) {
    if (!defender.isMonster() || !attacker.isMonster()) {
      return;
    }
    if (defender.abilityActiveDetails(13, attacker, true) && damageData.damage == 9999) {
      damageData.noDamage = true;
      return;
    }
    if (defender.abilityActiveDetails(35, attacker, true) && damageData.type == TYPE_ELECTRIC) {
      damageData.noDamage = true;
      damageData.healed = true;
      return;
    }
    if ((defender.abilityActiveDetails(36, attacker, true) || defender.abilityActiveDetails(85, attacker, true)) && damageData.type == TYPE_WATER) {
      damageData.noDamage = true;
      damageData.healed = true;
      return;
    }
    if (defender.abilityActive(102, attacker, true) && damageData.type == TYPE_ELECTRIC) {
      damageData.noDamage = true;
      return;
    }
    for (let i = 0; i < TYPE_DAMAGE_NEGATING_EXCLUSIVE_ITEM_EFFECTS.length; i++) {
      const entry = TYPE_DAMAGE_NEGATING_EXCLUSIVE_ITEM_EFFECTS[i];
      if (entry.type == damageData.type && defender.exclusiveItemEffectActive(entry.effect)) {
        if (entry.effect < 114) {
          damageData.noDamage = true;
          return;
        } else {
          damageData.healed = true;
          return;
        }
      }
    }
  }
  function runMockDamageSequence(dungeon, attacker, defender, moveId, damageData) {
    if (MoveHitCheck(dungeon, attacker, defender, moveId, true, true)) {
      ApplyAbilityAndEffectImmunities(attacker, defender, damageData);
      attacker.flag_practice_swinger = false;
      attacker.flag_anger_point = false;
    } else {
      damageData.noDamage = true;
      if (moveId != 355) {
        attacker.flag_practice_swinger = true;
      }
    }
    if (damageData.noDamage) return 0;
    return damageData.damage;
  }
  function executeMoveEffectPrechecks(dungeon, attacker, defender, moveId) {
    let reflectedByMagicCoatEtc = false;
    const lightningrod = (defender.abilityActive(50) || dungeon.otherMonsters.abilities.includes(50)) && attacker.getMoveType(moveId, dungeon) == TYPE_ELECTRIC;
    const stormDrain = (defender.abilityActive(122) || dungeon.otherMonsters.abilities.includes(122)) && attacker.getMoveType(moveId, dungeon) == TYPE_WATER;
    let hit = true;
    if (defender.twoTurnMoveForcedMiss(moveId)) {
      hit = false;
      dungeon.damageCalc.twoTurnMoveForcedMiss = true;
    }
    if (hit && defender.abilityActiveDetails(60, attacker, true) && isSoundMove(moveId)) {
      hit = false;
      dungeon.damageCalc.soundproofActivated = true;
    }
    if (hit && defender.abilityActiveDetails(121, attacker, true) && dungeon.rng.rollForewarn()) {
      hit = false;
    }
    let neverMissSelf = moveId != 104 && moveId != 305 && moveId != 301 && !reflectedByMagicCoatEtc;
    if (hit && !MoveHitCheck(dungeon, attacker, defender, moveId, false, neverMissSelf)) {
      hit = false;
      dungeon.damageCalc.firstHitCheckFailed = true;
    }
    if (hit) {
      if (lightningrod) {
        dungeon.damageCalc.lightningrodActivated = true;
        hit = false;
      }
      if (stormDrain) {
        dungeon.damageCalc.stormDrainActivated = true;
        hit = false;
      }
    }
    if (!hit && moveId != 355) {
      attacker.flag_practice_swinger = true;
    }
    return hit;
  }
  function simulateDamageCalcShared(damageData, dungeon, attacker, defender, attackType, attackPower, damageMult, moveId) {
    const critChance = getMoveCritChance(moveId);
    CalcDamage(dungeon, attacker, defender, attackType, attackPower, critChance, damageData, damageMult, moveId, true);
    return runMockDamageSequence(dungeon, attacker, defender, moveId, damageData);
  }
  function simulateDamageCalcWithMult(damageData, dungeon, attacker, defender, move2, damageMult) {
    if (!executeMoveEffectPrechecks(dungeon, attacker, defender, move2.id)) {
      return 0;
    }
    const attackType = attacker.getMoveType(move2.id, dungeon);
    const attackPower = attacker.getMovePower(move2);
    return simulateDamageCalcShared(
      damageData,
      dungeon,
      attacker,
      defender,
      attackType,
      attackPower,
      damageMult,
      move2.id
    );
  }
  function simulateDamageCalcWeatherBall(damageData, dungeon, attacker, defender, ginseng = 0) {
    if (!executeMoveEffectPrechecks(dungeon, attacker, defender, 31)) {
      return 0;
    }
    const weather = attacker.perceivedWeather(dungeon);
    const attackType = WEATHER_BALL_TYPE_TABLE[weather];
    const move2 = new Move();
    move2.id = 31;
    move2.ginseng = ginseng;
    const damageMult = WEATHER_BALL_DAMAGE_MULT_TABLE[weather];
    const attackPower = attacker.getMovePower(move2);
    dungeon.damageDetailLog.damageMult = damageMult;
    return simulateDamageCalcShared(damageData, dungeon, attacker, defender, attackType, attackPower, damageMult, 31);
  }
  function simulateDamageCalcNaturalGift(damageData, dungeon, attacker, defender, ginseng = 0) {
    if (!executeMoveEffectPrechecks(dungeon, attacker, defender, 471)) {
      return 0;
    }
    const move2 = new Move();
    move2.id = 471;
    move2.ginseng = ginseng;
    if (attacker.heldItem != 0) {
      const ngInfo = attacker.naturalGiftInfo();
      if (ngInfo) {
        let attackPower = attacker.getMovePower(move2) + ngInfo.basePowerBoost;
        if (attackPower > 32767) {
          attackPower -= 1 << 16;
        }
        return simulateDamageCalcShared(damageData, dungeon, attacker, defender, ngInfo.typeId, attackPower, 1, 471);
      }
    }
    return simulateDamageCalcWithMult(damageData, dungeon, attacker, defender, move2, 1);
  }
  function getHpDepMultTableIdx(entity) {
    const hp = entity.hp;
    const maxHp = Math.min(entity.hp_max, 999);
    if (hp <= Math.trunc(maxHp / 4)) {
      return 0;
    }
    if (hp <= Math.trunc(maxHp * 2 / 4)) {
      return 1;
    }
    if (hp <= Math.trunc(maxHp * 3 / 4)) {
      return 2;
    }
    return 3;
  }
  function simulateDamageCalc(damageData, dungeon, attacker, defender, move2) {
    let damageMult = 1;
    let fixedDamage = 0;
    switch (move2.id) {
      case 0:
        damageMult = 0;
        break;
      case 2:
      // アイスボール
      case 105:
        damageMult = ROLLOUT_DAMAGE_MULT_TABLE[Math.min(move2.priorSuccessiveHits, 9)];
        break;
      case 8:
        damageMult = DIG_DAMAGE_MULTIPLIER;
        break;
      case 20:
        fixedDamage = Math.floor(defender.hp / 2);
        return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move2, fixedDamage);
      case 31:
        return simulateDamageCalcWeatherBall(damageData, dungeon, attacker, defender, move2.ginseng);
      case 32:
      // うずしお
      case 219:
        if (defender.statuses.diving) {
          damageMult = 2;
        }
        break;
      case 48:
        for (const dmg of RETURN_FIXED_DAMAGE_TABLE) {
          if (dmg.iq < 0) break;
          if (attacker.iq < dmg.iq) {
            fixedDamage = dmg.damage;
            break;
          }
        }
        return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move2, fixedDamage);
      case 57:
      // かぜおこし
      case 162:
        if (defender.statuses.flying || defender.statuses.bouncing) {
          damageMult = 2;
        }
        break;
      case 60:
        damageMult = RAZOR_WIND_DAMAGE_MULTIPLIER;
        break;
      case 66:
        const diff = defender.hp - attacker.hp;
        fixedDamage = Math.max(diff, 0);
        return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move2, fixedDamage);
      case 67:
        if (attacker.statuses.burn || attacker.statuses.poison || attacker.statuses.bad_poison || attacker.statuses.paralysis || attacker.statuses.identifying) {
          damageMult = FACADE_DAMAGE_MULTIPLIER;
        }
        break;
      case 75:
        damageMult = FOCUS_PUNCH_DAMAGE_MULTIPLIER;
        break;
      case 77:
      // きしかいせい
      case 121:
        damageMult = REVERSAL_DAMAGE_MULT_TABLE[getHpDepMultTableIdx(attacker)];
        break;
      case 78:
        if (defender.statuses.paralysis) {
          damageMult = 2;
        }
        break;
      case 92:
      // けたぐり
      case 458:
        damageMult = getMonsterWeight(defender.id);
        break;
      case 100:
        damageMult = SKY_ATTACK_DAMAGE_MULTIPLIER;
        break;
      case 108:
        const lv = attacker.level;
        const mult = 256 * (dungeon.rng.varianceDial + 0.5);
        fixedDamage = lv * mult >> 8;
        if (fixedDamage < 0) fixedDamage = 1;
        if (199 < fixedDamage) fixedDamage = 199;
        return simulateDamageCalcFixedDynamic(damageData, dungeon, attacker, defender, move2, fixedDamage);
      case 113:
        damageMult = WATER_SPOUT_DAMAGE_MULT_TABLE[getHpDepMultTableIdx(attacker)];
        break;
      case 118:
        if (defender.statuses.digging) {
          damageMult = 2;
        }
        break;
      // じわれ
      case 131: {
        const moveType = attacker.getMoveType(move2.id, dungeon);
        const isMoldBreaker = attacker.abilityActive(83);
        if (!isMoldBreaker && defender.levitateActive(dungeon)) {
          fixedDamage = 0;
        } else if (checkMoveHitOhko(dungeon, attacker, defender, moveType)) {
          fixedDamage = 9999;
        }
        return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move2, fixedDamage);
      }
      case 150:
      // ぜったいれいど, つのドリル, ハサミギロチン
      case 177:
      case 247: {
        const moveType = attacker.getMoveType(move2.id, dungeon);
        if (checkMoveHitOhko(dungeon, attacker, defender, moveType)) {
          fixedDamage = 9999;
        }
        return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move2, fixedDamage);
      }
      case 151:
        const weather = attacker.perceivedWeather(dungeon);
        damageMult = SOLARBEAM_DAMAGE_MULTIPLIER;
        if (weather == WEATHER_SANDSTORM || weather == WEATHER_RAIN || weather == WEATHER_HAIL) {
          damageMult /= 2;
        }
        break;
      case 152:
        fixedDamage = SONICBOOM_FIXED_DAMAGE;
        return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move2, fixedDamage);
      case 153:
        damageMult = FLY_DAMAGE_MULTIPLIER;
        break;
      case 156:
        damageMult = DIVE_DAMAGE_MULTIPLIER;
        break;
      case 170:
      // ちきゅうなげ
      case 216:
        fixedDamage = attacker.level;
        return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move2, fixedDamage);
      case 205:
        damageMult = BOUNCE_DAMAGE_MULTIPLIER;
        break;
      case 206:
      // とびひざげり
      case 272:
        damageMult = 2;
        break;
      case 210:
        damageMult = Math.min(move2.priorSuccessiveHits + 1, 3);
        break;
      case 245:
        damageMult = attacker.statuses.stockpile;
        break;
      case 277:
        fixedDamage = getValueByRatio([0, 25, 50, 75], dungeon.rng.varianceDial);
        return simulateDamageCalcFixedDynamic(damageData, dungeon, attacker, defender, move2, fixedDamage);
      case 278:
        damageMult = ERUPTION_DAMAGE_MULT_TABLE[getHpDepMultTableIdx(attacker)];
        break;
      case 296:
        fixedDamage = getValueByRatio(MAGNITUDE_DAMAGE_TABLE, dungeon.rng.varianceDial);
        if (defender.statuses.digging) {
          fixedDamage *= 2;
        }
        return simulateDamageCalcFixedDynamic(damageData, dungeon, attacker, defender, move2, fixedDamage);
      case 328:
        for (const dmg of FRUSTRATION_FIXED_DAMAGE_TABLE) {
          if (dmg.iq < 0) break;
          if (attacker.iq < dmg.iq) {
            fixedDamage = dmg.damage;
            break;
          }
        }
        return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move2, fixedDamage);
      case 331:
        if (!defender.statuses.sleep && !defender.statuses.nightmare && !defender.statuses.napping) {
          dungeon.damageCalc.dreamEaterFailed = true;
          return 0;
        }
        break;
      case 341:
        fixedDamage = DRAGON_RAGE_FIXED_DAMAGE;
        return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move2, fixedDamage);
      case 348:
        damageMult = SKULL_BASH_DAMAGE_MULTIPLIER;
        break;
      case 355:
        damageMult = CONST_0_50;
        break;
      case 394:
        fixedDamage = VACUUM_CUT_FIXED_DAMAGE;
        return simulateDamageCalcFixedDynamic(damageData, dungeon, attacker, defender, move2, fixedDamage);
      case 397:
        fixedDamage = defender.getSize();
        return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move2, fixedDamage);
      case 471:
        return simulateDamageCalcNaturalGift(damageData, dungeon, attacker, defender, move2.ginseng);
      case 457:
        let maxPP = getMoveMaxPP(move2.id);
        if (maxPP == 0) {
          maxPP = 1;
        }
        let ppFrac = move2.pp * 100 / maxPP;
        if (ppFrac < 26) {
          damageMult = CONST_1_25;
        } else if (ppFrac < 51) {
          damageMult = 1;
        } else if (ppFrac < 76) {
          damageMult = CONST_0_75;
        } else {
          damageMult = CONST_0_50;
        }
        break;
      case 469:
      // しおみず
      case 488:
        let maxHp = defender.hp_max;
        if (maxHp > MAX_HP_CAP) {
          maxHp = MAX_HP_CAP;
        }
        if (defender.hp * 2 <= maxHp) {
          damageMult = 2;
        }
        break;
      case 474:
      // しぼりとる
      case 505:
        damageMult = WRING_OUT_DAMAGE_MULT_TABLE[getHpDepMultTableIdx(defender)];
        break;
      case 475:
        if (attacker.statuses.speed == 0) {
          damageMult = 2;
        }
        break;
      case 477:
        damageMult = SHADOW_FORCE_DAMAGE_MULTIPLIER;
        break;
      case 497:
        let nMovesOutOfPP = attacker.n_moves_out_of_pp;
        if (nMovesOutOfPP > 0 && move2.pp == 0) {
          nMovesOutOfPP--;
        }
        if (nMovesOutOfPP < 1) {
          dungeon.damageCalc.lastResortFailed = true;
          return 0;
        }
        damageMult = LAST_RESORT_DAMAGE_MULT_TABLE[nMovesOutOfPP - 1];
        break;
      case 531:
        if (defender.statuses.sleep || defender.statuses.nightmare || defender.statuses.napping) {
          damageMult = 2;
        }
        break;
      default:
        if (checkNoDamageMove(move2.id)) {
          return simulateDamageCalcStatusMoves(damageData, dungeon, attacker, defender, move2);
        }
        break;
    }
    dungeon.damageDetailLog.damageMult = damageMult;
    return simulateDamageCalcWithMult(damageData, dungeon, attacker, defender, move2, damageMult);
  }
  function getValueByRatio(array, ratio) {
    ratio = Math.min(Math.max(ratio, 0), 1);
    const index = Math.floor(ratio * (array.length - 1));
    return array[index];
  }
  function simulateDamageCalcProjectile(damageData, dungeon, attacker, defender, attackPower) {
    const attackType = attacker.getMoveType(405, dungeon);
    return simulateDamageCalcShared(damageData, dungeon, attacker, defender, attackType, attackPower, 1, 405);
  }
  function getMoveCategory(moveId) {
    let res = null;
    if (MoveData) res = MoveData[moveId].Category;
    else console.error("MoveData Not Found");
    return res;
  }
  function MoveNotPhysial2(moveId) {
    return getMoveCategory(moveId) != CATEGORY_PHYSICAL;
  }
  var ModifierDetails = class {
    itemAtk = 0;
    itemSpatk = 0;
    itemDef = 0;
    itemSpdef = 0;
    abilityOffense = 0;
    abilityDefense = 0;
    iqSkillOffense = 0;
    iqSkillDefense = 0;
    scopeLensOrSharpshooter = false;
    patsyBand = false;
    halfPhysicalDamage = false;
    halfSpecialDamage = false;
    focusEnergy = false;
    typeAdvantageMaster = false;
    cloudyDrop = false;
    rainMultiplier = false;
    sunnyMultiplier = false;
    thickFatHeatproof = false;
    flashFire = false;
    levitate = false;
    overgrow = false;
    swarm = false;
    blazeDrySkin = false;
    scrappy = false;
    superLuck = false;
    sniper = false;
    stab = false;
    mudSportFog = false;
    waterSport = false;
    charge = false;
    ghostImmunity = false;
    skullBash = false;
  };
  var CalcDetails = class {
    offensiveStatStage = 0;
    defensiveStatStage = 0;
    offensiveStat = 0;
    defensiveStat = 0;
    offenseCalc = 0;
    defenseCalc = 0;
    damageCalcAt = 0;
    damageCalcDef = 0;
    damageCalcFlv = 0;
    damageCalcBase = 0;
    staticDamageMult = 0;
    damageCalc = 0;
    avgRandomDamageMultPct = 0;
    minRandomDamageMultPct = 0;
    maxRandomDamageMultPct = 0;
    modifiers = new ModifierDetails();
  };
  var ResultDetails = class {
    damageMessage = "";
    typeMatchup = "";
    indivTypeMatchup1 = "";
    indivTypeMatchup2 = "";
    moveType = "";
    moveCategory = "";
    criticalHit = false;
    fullTypeImmunity = false;
    noDamage = false;
    calc = new CalcDetails();
  };
  var CalcDamageResult = class {
    /** 平均ダメージ */
    avgDamage = 0;
    /** 最低ダメージ */
    minDamage = 0;
    /** 最大ダメージ */
    maxDamage = 0;
    /** 回復フラグ */
    healed = false;
    /** 命中率 */
    hitChance = 0;
    /** 命中はしたがミスが発生 */
    guaranteedMiss = false;
    /** 急所率 */
    critChance = 0;
    /** 詳細 */
    details = new ResultDetails();
  };
  function RunCalcDamage(dungeon, attacker, defender, move2, attackPower) {
    if (!MoveData) {
      console.error("MoveData not found");
      return;
    }
    if (!TypeData) {
      console.error("TypeData not found");
      return;
    }
    const dungeonMin = deepClone(dungeon);
    const dungeonMax = deepClone(dungeon);
    const attackerMin = deepClone(attacker);
    const defenderMin = deepClone(defender);
    const attackerMax = deepClone(attacker);
    const defenderMax = deepClone(defender);
    const moveMin = deepClone(move2);
    const moveMax = deepClone(move2);
    dungeon.rng.varianceDial = 0.5;
    dungeonMin.rng.varianceDial = 0;
    dungeonMax.rng.varianceDial = 1;
    const details = new DamageData();
    const detailsMinVar = new DamageData();
    const detailsMaxVar = new DamageData();
    let damage = 0;
    let damageMinVar = 0;
    let damageMaxVar = 0;
    if (move2.id == 405) {
      damage = simulateDamageCalcProjectile(details, dungeon, attacker, defender, attackPower);
      damageMinVar = simulateDamageCalcProjectile(details, dungeonMin, attackerMin, defenderMin, attackPower);
      damageMaxVar = simulateDamageCalcProjectile(details, dungeonMax, attackerMax, defenderMax, attackPower);
    } else {
      damage = simulateDamageCalc(details, dungeon, attacker, defender, move2);
      damageMinVar = simulateDamageCalc(details, dungeonMin, attackerMin, defenderMin, moveMin);
      damageMaxVar = simulateDamageCalc(details, dungeonMax, attackerMax, defenderMax, moveMax);
    }
    const result = new CalcDamageResult();
    if (details.healed) {
      result.avgDamage = details.damage;
      result.minDamage = detailsMinVar.damage;
      result.maxDamage = detailsMaxVar.damage;
    } else {
      result.avgDamage = damage;
      result.minDamage = damageMinVar;
      result.maxDamage = damageMaxVar;
    }
    result.healed = details.healed;
    if (dungeon.damageCalc.twoTurnMoveForcedMiss || dungeon.damageCalc.soundproofActivated || dungeon.damageCalc.firstHitCheckFailed || dungeon.damageCalc.dreamEaterFailed || dungeon.damageCalc.lastResortFailed) {
      result.guaranteedMiss = true;
      return result;
    }
    result.hitChance = dungeon.rng.getCombinedHitPercentage();
    result.critChance = dungeon.rng.getComputedCritChance();
    const calc = dungeon.damageCalc;
    const resDetails = result.details;
    resDetails.damageMessage = DAMAGE_MESSAGE[details.damageMessage];
    resDetails.typeMatchup = TYPE_MATCHUP[details.typeMatchup];
    resDetails.indivTypeMatchup1 = TYPE_MATCHUP[calc.moveIndivTypeMatchups[0]];
    resDetails.indivTypeMatchup2 = TYPE_MATCHUP[calc.moveIndivTypeMatchups[1]];
    resDetails.moveType = TypeData[details.type];
    resDetails.moveCategory = MOVE_CATEGORY[details.category];
    resDetails.criticalHit = details.criticalHit;
    resDetails.fullTypeImmunity = details.fullTypeImmunity;
    resDetails.noDamage = details.noDamage;
    const calcDetails = resDetails.calc;
    calcDetails.offensiveStatStage = calc.offensiveStatStage;
    calcDetails.defensiveStatStage = calc.defensiveStatStage;
    calcDetails.offensiveStat = calc.offensiveStat;
    calcDetails.defensiveStat = calc.defensiveStat;
    calcDetails.offenseCalc = calc.offenseCalc;
    calcDetails.defenseCalc = calc.defenseCalc;
    calcDetails.damageCalcAt = calc.damageCalcAt;
    calcDetails.damageCalcDef = calc.damageCalcDef;
    calcDetails.damageCalcFlv = calc.damageCalcFlv;
    calcDetails.damageCalcBase = calc.damageCalcBase;
    calcDetails.staticDamageMult = calc.staticDamageMult;
    calcDetails.damageCalc = calc.damageCalc;
    calcDetails.avgRandomDamageMultPct = calc.damageCalcRandomMultPct;
    calcDetails.minRandomDamageMultPct = dungeonMin.damageCalc.damageCalcRandomMultPct;
    calcDetails.maxRandomDamageMultPct = dungeonMax.damageCalc.damageCalcRandomMultPct;
    const modDetails = calcDetails.modifiers;
    modDetails.itemAtk = calc.itemAtkModifier;
    modDetails.itemSpatk = calc.itemSpAtkModifier;
    modDetails.itemDef = calc.itemDefModifier;
    modDetails.itemSpdef = calc.itemSpDefModifier;
    modDetails.abilityOffense = calc.abilityOffenseModifier;
    modDetails.abilityDefense = calc.abilityDefenseModifier;
    modDetails.iqSkillOffense = calc.iqSkillOffenseModifier;
    modDetails.iqSkillDefense = calc.iqSkillDefenseModifier;
    modDetails.iqSkillDefense = calc.iqSkillDefenseModifier;
    modDetails.scopeLensOrSharpshooter = calc.scopeLensOrSharpshooterActivated;
    modDetails.patsyBand = calc.patsyBandActivated;
    modDetails.halfPhysicalDamage = calc.halfPhysicalDamageActivated;
    modDetails.halfSpecialDamage = calc.halfSpecialDamageActivated;
    modDetails.focusEnergy = calc.focusEnergyActivated;
    modDetails.typeAdvantageMaster = calc.typeAdvantageMasterActivated;
    modDetails.cloudyDrop = calc.cloudyDropActivated;
    modDetails.rainMultiplier = calc.rainMultiplierActivated;
    modDetails.sunnyMultiplier = calc.sunnyMultiplierActivated;
    modDetails.thickFatHeatproof = calc.fireMoveAbilityDropActivated;
    modDetails.flashFire = calc.flashFireActivated;
    modDetails.levitate = calc.levitateActivated;
    modDetails.overgrow = calc.overgrowBoostActivated;
    modDetails.swarm = calc.swarmBoostActivated;
    modDetails.blazeDrySkin = calc.fireMoveAbilityBoostActivated;
    modDetails.scrappy = calc.scrappyActivated;
    modDetails.superLuck = calc.superLuckActivated;
    modDetails.sniper = calc.sniperActivated;
    modDetails.stab = calc.stabBoostActivated;
    modDetails.mudSportFog = calc.electricMoveDampened;
    modDetails.waterSport = calc.waterSportDropActivated;
    modDetails.charge = calc.chargeBoostActivated;
    modDetails.ghostImmunity = calc.ghostImmunityActivated;
    modDetails.skullBash = calc.skullBashDefenseBoostActivated;
    return result;
  }
  function deepClone(obj) {
    const copy = new obj.constructor();
    for (const key of Object.getOwnPropertyNames(obj)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        copy[key] = value.map((v) => typeof v === "object" && v !== null ? deepClone(v) : v);
      } else if (typeof value === "object" && value !== null) {
        if (typeof value.clone === "function") {
          copy[key] = value.clone();
        } else {
          copy[key] = deepClone(value);
        }
      } else {
        copy[key] = value;
      }
    }
    return copy;
  }
  function simulateDamageCalcFixedDynamic(damageData, dungeon, attacker, defender, move2, damage) {
    const attackType = attacker.getMoveType(move2.id, dungeon);
    const moveCategory = getMoveCategory(move2.id);
    const fixedDamage = calcDamageFixedApplyEffects(
      damageData,
      dungeon,
      attacker,
      defender,
      attackType,
      moveCategory,
      damage
    );
    damageData.type = attackType;
    damageData.category = moveCategory;
    if (move2.id == 277 && damage == 0) {
      damageData.damage = 0;
    } else {
      damageData.damage = fixedDamage;
    }
    dungeon.damageDetailLog.isFixedDamage = true;
    return runMockDamageSequence(dungeon, attacker, defender, move2.id, damageData);
  }
  function calcDamageFixedApplyEffects(damageData, dungeon, attacker, defender, attackType, moveCategory, damage) {
    if (damage < 1) damage = 1;
    if (999 < damage) damage = 999;
    const effect = CalcTypeBasedDamageEffects(dungeon, attacker, defender, damage, attackType, damageData, false);
    const fixedDamage = Math.ceil(damage * effect.damageMultOut);
    return fixedDamage;
  }
  function simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move2, damage) {
    const attackType = attacker.getMoveType(move2.id, dungeon);
    const moveCategory = getMoveCategory(move2.id);
    let fixedDamage = 0;
    if (damage > 0) {
      fixedDamage = calcDamageFixed(dungeon, attacker, defender, damage, damageData, attackType, moveCategory, move2.id);
    }
    damageData.type = attackType;
    damageData.category = moveCategory;
    damageData.damage = fixedDamage;
    dungeon.damageDetailLog.isFixedDamage = true;
    return runMockDamageSequence(dungeon, attacker, defender, move2.id, damageData);
  }
  function calcDamageFixed(dungeon, attacker, defender, fixedDamage, damageOut, attackType, moveCategory, moveId) {
    const typeMatchups = [
      getTypeMatchUp(dungeon, attacker, defender, 0, attackType),
      getTypeMatchUp(dungeon, attacker, defender, 1, attackType)
    ];
    dungeon.damageCalc.moveIndivTypeMatchups[0] = typeMatchups[0];
    dungeon.damageCalc.moveIndivTypeMatchups[1] = typeMatchups[1];
    damageOut.typeMatchup = TYPE_MATCHUP_COMBINATOR_TABLE[typeMatchups[0]][typeMatchups[1]];
    let superEffective = damageOut.typeMatchup == MATCHUP_SUPER_EFFECTIVE;
    if (!superEffective) {
      if (defender.abilityActiveDetails(53, attacker, true) && attackType != TYPE_NONE) {
        fixedDamage = 0;
        dungeon.damageDetailLog.isWonderGuardActive = true;
      }
    }
    if (moveId == 405 && attacker.iqSkillEnabled(47, dungeon)) {
      fixedDamage *= Math.ceil(fixedDamage * POWER_PITCHER_DAMAGE_MULTIPLIER);
      dungeon.damageDetailLog.isPowerPitcherActive = true;
    }
    let resFixedDamage = Math.ceil(fixedDamage);
    if (fixedDamage == 0) resFixedDamage = 1;
    return resFixedDamage;
  }
  function checkMoveHitOhko(dungeon, attacker, defender, attackType) {
    if (!attacker.scrappyShouldActivate(defender, attackType, dungeon) && typeIneffectiveAgainstGhost(attackType) && (defender.ghostImmunityActive(attacker, 0) || defender.ghostImmunityActive(attacker, 1))) {
      return false;
    }
    let i = 0;
    while (true) {
      if (1 < i) return true;
      const matchUp = getTypeMatchUp(dungeon, attacker, defender, i, attackType);
      if (matchUp == 0) break;
      i++;
    }
    return false;
  }
  function checkNoDamageMove(moveId) {
    const moveCategory = getMoveCategory(moveId);
    const noDamageMove = [7, 38, 50, 51, 61, 123, 155, 249, 305, 316, 340, 359, 472, 532];
    return moveCategory == CATEGORY_STATUS || noDamageMove.includes(move.id);
  }
  function simulateDamageCalcStatusMoves(damageData, dungeon, attacker, defender, move2) {
    const moveCategory = getMoveCategory(move2.id);
    const moveType = attacker.getMoveType(move2.id, dungeon);
    damageData.category = moveCategory;
    damageData.type = moveType;
    MoveHitCheck(dungeon, attacker, defender, move2.id, false, false);
    return 0;
  }

  // <stdin>
  var fighterClassNames = ["attacker", "defender"];
  var moveCategoryNames = ["\u7269\u7406", "\u7279\u6B8A", "\u5909\u5316"];
  var choicesInstances = [];
  var moveInfoElement = null;
  document.addEventListener("DOMContentLoaded", async function() {
    const moveElement = document.getElementById("move");
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
    await fetchJsonData();
    InitChoices();
    moveInfoElement = document.getElementById("move-info");
    const damageCalcInputElement = document.querySelectorAll(
      '#damage-calc input:not([type="search"]), #damage-calc select'
    );
    for (const element of damageCalcInputElement) {
      if (element.tagName === "INPUT") {
        element.addEventListener("input", function(e) {
          if (element.type == "number") {
            const min = Number(this.min);
            const max = Number(this.max);
            const value = Number(this.value);
            if (isNaN(value)) return;
            if (value < min) this.value = min;
            else if (value > max) this.value = max;
          }
          Calculation();
          if (element.id == "damage-support-td") {
            ApplyMoveInfo(moveElement);
          }
        });
      } else if (element.tagName === "SELECT") {
        element.addEventListener("change", function(e) {
          if (element.classList.contains("pokemon")) {
            ApplyPokemonInfo(e.target);
          }
          Calculation();
        });
      }
    }
    moveElement.addEventListener("change", function(e) {
      ApplyMoveInfo(e.target);
    });
    const applyStatusBtnElements = document.querySelectorAll("#damage-calc .btn-apply-status");
    for (const element of applyStatusBtnElements) {
      element.addEventListener("click", function(e) {
        LevelApplyStatus(e.target, true);
      });
    }
    const fighterSwapBtnElements = document.querySelectorAll("#damage-calc .btn-fighter-swap");
    for (const element of fighterSwapBtnElements) {
      element.addEventListener("click", function(e) {
        SwapMonster();
      });
    }
    const modalElement = document.querySelector(".modal");
    modalElement.addEventListener("hide.bs.modal", () => {
      document.activeElement.blur();
    });
    const topBtnElement = document.querySelector("#top-btn");
    topBtnElement.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    ApplyMoveInfo(moveElement);
    const pokemonElements = document.querySelectorAll("#damage-calc select.pokemon");
    for (const element of pokemonElements) ApplyPokemonInfo(element, false);
    for (const element of applyStatusBtnElements) LevelApplyStatus(element, false);
    await Calculation();
    hideLoading();
  });
  function InitChoices() {
    const choicesOptionsMove = {
      ...choicesOptions,
      callbackOnCreateTemplates: function(template, escapeForTemplate, getClassNames) {
        return {
          choice: ({ classNames }, data) => {
            return template(`
          <div class="${getClassNames(classNames.item).join(" ")} ${getClassNames(classNames.itemChoice).join(" ")} ${getClassNames(
              data.disabled ? classNames.itemDisabled : classNames.itemSelectable
            ).join(" ")}" data-choice ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : "data-choice-selectable"} data-id="${data.id}" data-value="${escapeForTemplate(data.value)}" ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'} data-group="${data.group.label}">
            <span>${data.label}</span>
          </div>
          `);
          }
        };
      }
    };
    const choicesElements = document.querySelectorAll("#damage-calc select[data-choices]");
    for (const element of choicesElements) {
      if (element.id == "move") {
        choicesInstances[element.id] = new Choices(element, choicesOptionsMove);
      } else {
        choicesInstances[element.id] = new Choices(element, choicesOptions);
      }
    }
  }
  function ApplyMoveInfo(target) {
    if (!MoveData) {
      console.error("MoveData not found");
      return false;
    }
    if (!moveInfoElement) {
      console.error("moveInfoElement not found");
      return false;
    }
    const move2 = MoveData[target.value];
    let power = move2.Power;
    const option = target.options[target.selectedIndex];
    if ("power" in option.dataset) power = option.dataset["power"];
    const tdBasePower = TIME_DARKNESS_BASE_POWER.find((item) => item.id == move2.Id);
    const damageSupportTdElement = document.querySelector("#damage-support-td");
    if (damageSupportTdElement.checked && tdBasePower != void 0) power = tdBasePower.power;
    const movePowerElement = moveInfoElement.querySelector("#move-power");
    const moveTypeElement = moveInfoElement.querySelector("#move-type");
    const moveCategoryElement = moveInfoElement.querySelector("#move-category");
    const movePPElement = moveInfoElement.querySelector("#move-pp");
    const moveAccuracy1Element = moveInfoElement.querySelector("#move-accuracy-1");
    const moveAccuracy2Element = moveInfoElement.querySelector("#move-accuracy-2");
    const moveAccuracyBaseElement = moveInfoElement.querySelector("#move-accuracy-base");
    const moveStrikesElement = moveInfoElement.querySelector("#move-strikes");
    const moveCriticalElement = moveInfoElement.querySelector("#move-critical");
    movePowerElement.innerHTML = move2.Category != 2 || move2.power == 0 ? power : '<span class="text-danger">\u975E\u5BFE\u5FDC</span>';
    moveTypeElement.textContent = TypeData[move2.Type].Name;
    moveCategoryElement.textContent = moveCategoryNames[move2.Category];
    movePPElement.textContent = move2.PP;
    moveAccuracy1Element.textContent = move2.Accuracy1;
    moveAccuracy2Element.textContent = move2.Accuracy2;
    moveAccuracyBaseElement.textContent = getMoveBaseAccuracy(move2.Accuracy1, move2.Accuracy2, move2.Ginseng).toFixed(2) + "%";
    moveStrikesElement.textContent = move2.MaxHit;
    moveCriticalElement.textContent = move2.Critical + "%";
  }
  function ApplyPokemonInfo(target, calc) {
    if (!PokemonData) {
      console.error("PokemonData not found");
      return false;
    }
    const pokemon = PokemonData[target.value];
    const fighter = getFighterElement(target);
    const fighterName = getFighterType(target);
    if (fighterName) {
      choicesInstances[`type-1-${fighterName}`].setChoiceByValue(`${pokemon.Type1}`);
      choicesInstances[`type-2-${fighterName}`].setChoiceByValue(`${pokemon.Type2}`);
      choicesInstances[`ability-1-${fighterName}`].setChoiceByValue(`${pokemon.Ability1}`);
      choicesInstances[`ability-2-${fighterName}`].setChoiceByValue(`${pokemon.Ability2}`);
      ApplyGenderControl(fighterName, target.value, -1, calc);
    }
  }
  function ApplyGenderControl(fighterName, pokemonId, genderId = -1, calc = true) {
    if (!PokemonData) {
      console.error("PokemonData not found");
      return;
    }
    const pokemon = PokemonData[pokemonId];
    const fighter = document.querySelector(`.${fighterName}`);
    const genderElements = fighter.querySelectorAll(`#gender-${fighterName}-1, #gender-${fighterName}-2`);
    const genderLabelElements = fighter.querySelectorAll(
      `label[for="gender-${fighterName}-1"], label[for="gender-${fighterName}-2"]`
    );
    let changed = false;
    for (let i = 0; i < 2; i++) {
      if (pokemon.Genders.length > i) {
        const baseGenderValue = genderElements[i].value;
        genderElements[i].value = pokemon.Genders[i];
        genderElements[i].disabled = false;
        genderLabelElements[i].textContent = pokeGender[pokemon.Genders[i]].name;
        if (genderId > 0 && pokemon.Genders[i] == genderId) {
          genderElements[i].checked = true;
        }
        if (baseGenderValue.value != "on" && baseGenderValue != pokemon.Genders[i]) {
          changed = true;
        }
      } else {
        genderElements[i].value = -1;
        genderElements[i].disabled = true;
        genderLabelElements[i].textContent = "\xD7";
        if (genderElements[i].checked) {
          genderElements[i].checked = false;
        }
        if (i > 0) {
          genderElements[i - 1].checked = true;
          changed = true;
        }
      }
    }
    if (changed && calc) {
      Calculation();
    }
  }
  function LevelApplyStatus(target, calc = true) {
    if (!PokemonData) {
      console.error("PokemonData not found");
      return false;
    }
    const fighter = getFighterElement(target);
    if (fighter) {
      const fighterName = getFighterType(fighter);
      const pokemonElement = fighter.querySelector(".pokemon");
      const pokemonId = pokemonElement.value;
      const levelElement = fighter.querySelector(".status-lv");
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
      const HPElement = fighter.querySelector(".status-hp");
      const HPMaxElement = fighter.querySelector(".status-hp-max");
      const AElement = fighter.querySelector(".status-value-atk");
      const BElement = fighter.querySelector(".status-value-def");
      const CElement = fighter.querySelector(".status-value-spa");
      const DElement = fighter.querySelector(".status-value-spd");
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
  function GetStructure(fighterName) {
    if (fighterClassNames.includes(fighterName)) {
      const monster = new Monster();
      const fighter = document.querySelector(`.${fighterName}`);
      const pokemonElement = fighter.querySelector(".pokemon");
      const isLeaderElement = fighter.querySelector(".flag-leader");
      const isMemberElement = fighter.querySelector(".flag-member");
      const levelElement = fighter.querySelector(".status-lv");
      const hpElement = fighter.querySelector(".status-hp");
      const hpMaxElement = fighter.querySelector(".status-hp-max");
      const atkValueElement = fighter.querySelector(".status-value-atk");
      const atkStageElement = fighter.querySelector(".status-stage-atk");
      const atkHalfElement = fighter.querySelector(".status-half-atk");
      const defValueElement = fighter.querySelector(".status-value-def");
      const defStageElement = fighter.querySelector(".status-stage-def");
      const defHalfElement = fighter.querySelector(".status-half-def");
      const spaValueElement = fighter.querySelector(".status-value-spa");
      const spaStageElement = fighter.querySelector(".status-stage-spa");
      const spaHalfElement = fighter.querySelector(".status-half-spa");
      const spdValueElement = fighter.querySelector(".status-value-spd");
      const spdStageElement = fighter.querySelector(".status-stage-spd");
      const spdHalfElement = fighter.querySelector(".status-half-spd");
      const accuracyElement = fighter.querySelector(".stage-accuracy");
      const evasionElement = fighter.querySelector(".stage-evasion");
      const exStatusAtkElement = fighter.querySelector(".ex-status-atk");
      const exStatusDefElement = fighter.querySelector(".ex-status-def");
      const exStatusSpAElement = fighter.querySelector(".ex-status-spa");
      const exStatusSpDElement = fighter.querySelector(".ex-status-spd");
      const stageStockpileElement = fighter.querySelector(".stage-stockpile");
      const boostFlashfireElement = fighter.querySelector(".boost-flashfire");
      const heldItemElement = fighter.querySelector(".held-item");
      const heldItemStickyElement = fighter.querySelector(".held-item-sticky");
      const iqValueElement = fighter.querySelector(".iq-value");
      const type1Element = fighter.querySelector(".type-1");
      const type2Element = fighter.querySelector(".type-2");
      const ability1Element = fighter.querySelector(".ability-1");
      const ability2Element = fighter.querySelector(".ability-2");
      const genderElement = fighter.querySelector(".gender:checked");
      const stockpileElement = fighter.querySelector(".stage-stockpile");
      const flashFireElement = fighter.querySelector(".boost-flashfire");
      const hiddenPowerTypeElement = fighter.querySelector(".hidden-power-type");
      const hiddenPowerPowerElement = fighter.querySelector(".hidden-power-power");
      const bellyValueElement = fighter.querySelector(".belly-value");
      const movementSpeedElement = fighter.querySelector(".movement-speed");
      const meFirstElement = fighter.querySelector(".flag-me-first");
      const practiceSwingerElement = fighter.querySelector(".flag-practice-swinger");
      const angerPointElement = fighter.querySelector(".flag-anger-point");
      const tdTimeShieldElement = fighter.querySelector(".flag-td-timeshield");
      const iqSkillGroupElements = fighter.querySelectorAll(".iqskill-group input");
      const statusGroupElements = fighter.querySelectorAll(".status-group input");
      const exEffectGroupElements = fighter.querySelectorAll(".exeffect-group input");
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
      for (const input of iqSkillGroupElements) {
        monster.iq_skill[input.value] = input.checked;
      }
      for (const input of statusGroupElements) {
        monster.statuses[input.value] = input.checked;
      }
      for (const input of exEffectGroupElements) {
        monster.exclusive_item_effect_flags[input.value] = input.checked;
      }
      return monster;
    }
  }
  function SetFormByMonster(fighterName, monster) {
    if (fighterClassNames.includes(fighterName)) {
      const fighter = document.querySelector(`#damage-calc .${fighterName}`);
      choicesInstances[`pokemon-${fighterName}`].setChoiceByValue(`${monster.id}`);
      choicesInstances[`type-1-${fighterName}`].setChoiceByValue(`${monster.types[0]}`);
      choicesInstances[`type-2-${fighterName}`].setChoiceByValue(`${monster.types[1]}`);
      choicesInstances[`ability-1-${fighterName}`].setChoiceByValue(`${monster.abilities[0]}`);
      choicesInstances[`ability-2-${fighterName}`].setChoiceByValue(`${monster.abilities[1]}`);
      ApplyGenderControl(fighterName, monster.id, monster.gender, false);
      fighter.querySelector(".status-lv").value = monster.level;
      fighter.querySelector(".status-hp").value = monster.hp;
      fighter.querySelector(".status-hp-max").value = monster.hp_max;
      fighter.querySelector(".flag-leader").checked = monster.is_leader;
      fighter.querySelector(".flag-member").checked = monster.is_member;
      fighter.querySelector(".status-value-atk").value = monster.atk;
      fighter.querySelector(".status-stage-atk").value = monster.stage_atk;
      fighter.querySelector(".status-half-atk").value = monster.half_atk;
      fighter.querySelector(".status-value-def").value = monster.def;
      fighter.querySelector(".status-stage-def").value = monster.stage_def;
      fighter.querySelector(".status-half-def").value = monster.half_def;
      fighter.querySelector(".status-value-spa").value = monster.sp_atk;
      fighter.querySelector(".status-stage-spa").value = monster.stage_sp_atk;
      fighter.querySelector(".status-half-spa").value = monster.half_sp_atk;
      fighter.querySelector(".status-value-spd").value = monster.sp_def;
      fighter.querySelector(".status-stage-spd").value = monster.stage_sp_def;
      fighter.querySelector(".status-half-spd").value = monster.half_sp_def;
      fighter.querySelector(".stage-accuracy").value = monster.stage_accuracy;
      fighter.querySelector(".stage-evasion").value = monster.stage_evasion;
      fighter.querySelector(".ex-status-atk").value = monster.exclusive_item_atk;
      fighter.querySelector(".ex-status-def").value = monster.exclusive_item_def;
      fighter.querySelector(".ex-status-spa").value = monster.exclusive_item_sp_atk;
      fighter.querySelector(".ex-status-spd").value = monster.exclusive_item_sp_def;
      fighter.querySelector(".stage-stockpile").value = monster.statuses.stockpile;
      fighter.querySelector(".boost-flashfire").value = monster.flash_fire_boost;
      choicesInstances[`held-item-${fighterName}`].setChoiceByValue(`${monster.heldItem}`);
      fighter.querySelector(".held-item-sticky").checked = monster.heldItem_sticky;
      fighter.querySelector(".hidden-power-type").value = monster.hidden_power_type;
      fighter.querySelector(".hidden-power-power").value = monster.hidden_power_base_power;
      fighter.querySelector(".iq-value").value = monster.iq;
      fighter.querySelector(".belly-value").value = monster.belly;
      fighter.querySelector(".movement-speed").value = monster.statuses.speed;
      fighter.querySelector(".flag-me-first").checked = monster.flag_me_first;
      fighter.querySelector(".flag-practice-swinger").checked = monster.flag_practice_swinger;
      fighter.querySelector(".flag-anger-point").checked = monster.flag_anger_point;
      fighter.querySelector(".flag-td-timeshield").checked = monster.flag_td_timesheald;
      const iqSkillGroupElements = fighter.querySelectorAll(".iqskill-group input");
      for (const element of iqSkillGroupElements) {
        element.checked = monster.iq_skill[Number(element.value)];
      }
      const statusGroupElements = fighter.querySelectorAll(".status-group input");
      for (const element of statusGroupElements) {
        element.checked = monster.statuses[element.value];
      }
      const exEffectGroupElements = fighter.querySelectorAll(".exeffect-group input");
      for (const element of exEffectGroupElements) {
        element.checked = monster.exclusive_item_effect_flags[Number(element.value)];
      }
    }
  }
  function SwapMonster() {
    const attacker = GetStructure(fighterClassNames[0]);
    const defender = GetStructure(fighterClassNames[1]);
    SetFormByMonster(fighterClassNames[0], defender);
    SetFormByMonster(fighterClassNames[1], attacker);
    Calculation();
  }
  function Calculation() {
    if (!PokemonData) {
      console.error("PokemonData not found");
      return;
    }
    if (!MoveData) {
      console.error("MoveData not found");
      return;
    }
    const moveElement = document.getElementById("move");
    const moveGinsengBoostElement = document.getElementById("ginseng-boost");
    const movePPElement = document.getElementById("move-now-pp");
    const moveHitsElement = document.getElementById("move-hits");
    const moveDamageCriticalElement = document.getElementById("damage-critical");
    const moveHugePurePowerElement = document.getElementById("damage-hugepower");
    const moveTimeDarknessElement = document.getElementById("damage-support-td");
    const dungeonWeatherElement = document.getElementById("dungeon-weather");
    const dungeonPlusTeamElement = document.getElementById("dungeon-plus-team");
    const dungeonPlusEnemyElement = document.getElementById("dungeon-plus-enemy");
    const dungeonMinusTeamElement = document.getElementById("dungeon-minus-team");
    const dungeonMinusEnemyElement = document.getElementById("dungeon-minus-enemy");
    const dungeonCheerleaderElement = document.getElementById("dungeon-cheerleader");
    const dungeonFlowerGiftElement = document.getElementById("dungeon-flower-gift");
    const dungeonLightningRodElement = document.getElementById("dungeon-lightning-rod");
    const dungeonStormDrainElement = document.getElementById("dungeon-storm-drain");
    const dungeonMudSportElement = document.getElementById("dungeon-mud-sport");
    const dungeonWaterSportElement = document.getElementById("dungeon-water-sport");
    const dungeonGravityElement = document.getElementById("dungeon-gravity");
    const dungeonIqDisabledElement = document.getElementById("dungeon-iq-disabled");
    const dungeonExplorerMazeElement = document.getElementById("dungeon-explorer-maze");
    const JpVersionElement = document.getElementById("jp-version");
    const attacker = GetStructure(fighterClassNames[0]);
    const defender = GetStructure(fighterClassNames[1]);
    const dungeon = new DungeonState();
    const damageData = new DamageData();
    const move2 = new Move();
    move2.id = Number(moveElement.value);
    move2.ginseng = Number(moveGinsengBoostElement.value);
    move2.pp = Number(movePPElement.value);
    move2.priorSuccessiveHits = Number(moveHitsElement.value);
    move2.timeDarkness = moveTimeDarknessElement.checked;
    if (moveDamageCriticalElement.checked) {
      dungeon.rng.criticalHit = true;
      dungeon.rng.critChance = 100;
    }
    dungeon.rng.hugePurePower = moveHugePurePowerElement.checked;
    dungeon.weather = Number(dungeonWeatherElement.value);
    dungeon.plus = [dungeonPlusEnemyElement.checked, dungeonPlusTeamElement.checked];
    dungeon.minus = [dungeonMinusEnemyElement.checked, dungeonMinusTeamElement.checked];
    dungeon.otherMonsters.iq_skill[50] = dungeonCheerleaderElement.checked;
    if (dungeonFlowerGiftElement.checked) {
      dungeon.otherMonsters.abilities.push(113);
    }
    if (dungeonLightningRodElement.checked) {
      dungeon.otherMonsters.abilities.push(50);
    }
    if (dungeonStormDrainElement.checked) {
      dungeon.otherMonsters.abilities.push(122);
    }
    dungeon.mud_sport = dungeonMudSportElement.checked;
    dungeon.water_sport = dungeonWaterSportElement.checked;
    dungeon.gravity = dungeonGravityElement.checked;
    dungeon.iq_disabled = dungeonIqDisabledElement.checked;
    dungeon.genInfo.fixedRoomId = dungeonExplorerMazeElement.checked ? 110 : 0;
    dungeon.region_jp = JpVersionElement.checked;
    let result;
    const projectilePower = moveElement.options[moveElement.selectedIndex].dataset.power;
    if (projectilePower) {
      result = RunCalcDamage(dungeon, attacker, defender, move2, projectilePower);
    } else {
      result = RunCalcDamage(dungeon, attacker, defender, move2, MoveData[move2.id].Power);
    }
    const damageMinElement = document.getElementById("damage-min");
    const damageMaxElement = document.getElementById("damage-max");
    const damageAvgElement = document.getElementById("damage-avg");
    damageMinElement.textContent = result.minDamage;
    damageMaxElement.textContent = result.maxDamage;
    damageAvgElement.textContent = `(\u5E73\u5747: ${result.avgDamage})`;
    const accuracyResultElement = document.getElementById("accuracy-result");
    accuracyResultElement.textContent = `${result.hitChance}%`;
    const criticalResultElement = document.getElementById("critical-result");
    criticalResultElement.textContent = `${result.critChance}%`;
    const damageResultBadgeWrapElement = document.getElementById("damage-result-badge");
    damageResultBadgeWrapElement.innerHTML = "";
    let bgClassName = "";
    switch (result.details.typeMatchup.id) {
      case 0:
        bgClassName = "text-bg-light";
        break;
      case 1:
        bgClassName = "text-bg-warning";
        break;
      case 2:
        break;
      case 3:
        bgClassName = "text-bg-danger";
        break;
    }
    if (bgClassName.length > 0) {
      const badgeHtml = `
      <span class="badge ${bgClassName}">${result.details.typeMatchup.text}</span>
    `;
      damageResultBadgeWrapElement.innerHTML += badgeHtml;
    }
    if (dungeon.damageDetailLog.isFixedDamage) {
      damageResultBadgeWrapElement.innerHTML += `
      <span class="badge text-bg-dark">\u56FA\u5B9A</span>
    `;
    }
    const modalElement = document.querySelector("#modal-damage");
    modalElement.querySelector("#attacker-name").textContent = PokemonData[attacker.id].Name;
    modalElement.querySelector("#attacker-level").textContent = `Lv${attacker.level}`;
    modalElement.querySelector("#attacker-status").textContent = `${MoveData[move2.id].Category == CATEGORY_PHYSICAL ? "\u653B\u6483" : "\u7279\u653B"}${result.details.calc.offenseCalc}`;
    modalElement.querySelector("#defender-name").textContent = PokemonData[defender.id].Name;
    modalElement.querySelector("#defender-level").textContent = `Lv${defender.level}`;
    modalElement.querySelector("#defender-status").textContent = `${MoveData[move2.id].Category == CATEGORY_PHYSICAL ? "\u9632\u5FA1" : "\u7279\u9632"}${result.details.calc.defenseCalc}`;
    const moveName = `${MoveData[move2.id].Name}${move2.ginseng > 0 ? `+${move2.ginseng}` : ""}`;
    modalElement.querySelector(".move-name").textContent = `${moveName} ${move2.id == 405 ? ` (${moveElement.options[moveElement.selectedIndex].text})` : ""}`;
    modalElement.querySelector(".damage-min").textContent = result.minDamage;
    modalElement.querySelector(".damage-max").textContent = result.maxDamage;
    modalElement.querySelector(".damage-avg").textContent = `(\u5E73\u5747: ${result.avgDamage})`;
    modalElement.querySelector(".hit-chance").textContent = `${result.hitChance}%`;
    modalElement.querySelector(".crit-chance").textContent = `${result.critChance}%`;
    modalElement.querySelector(".type-matchup").textContent = result.details.typeMatchup.text;
    modalElement.querySelector(".move-type").textContent = result.details.moveType.Name;
    modalElement.querySelector(".move-category").textContent = result.details.moveCategory.text;
    modalElement.querySelector(".critical-hit").textContent = result.details.criticalHit ? "\u25CB" : "\xD7";
    modalElement.querySelector(".full-type-immunity").textContent = result.details.fullTypeImmunity ? "\u25CB" : "\xD7";
    modalElement.querySelector(".no-damage").textContent = result.details.noDamage ? "\u25CB" : "\xD7";
    modalElement.querySelector(".offensive-stat-stage").textContent = result.details.calc.offensiveStatStage;
    modalElement.querySelector(".defensive-stat-stage").textContent = result.details.calc.defensiveStatStage;
    modalElement.querySelector(".offensive-stat").textContent = result.details.calc.offensiveStat;
    modalElement.querySelector(".defensive-stat").textContent = result.details.calc.defensiveStat;
    modalElement.querySelector(".offense-calc").textContent = result.details.calc.offenseCalc;
    modalElement.querySelector(".defense-calc").textContent = result.details.calc.defenseCalc;
    modalElement.querySelector(".damage-calc-at").textContent = result.details.calc.damageCalcAt;
    modalElement.querySelector(".damage-calc-def").textContent = result.details.calc.damageCalcDef;
    modalElement.querySelector(".damage-calc-flv").textContent = result.details.calc.damageCalcFlv;
    modalElement.querySelector(".damage-calc-base").textContent = result.details.calc.damageCalcBase;
    modalElement.querySelector(".static-damage-mult").textContent = result.details.calc.staticDamageMult;
    modalElement.querySelector(".damage-calc").textContent = result.details.calc.damageCalc;
    modalElement.querySelector(".min-random-damage-mult-pct").textContent = `${result.details.calc.minRandomDamageMultPct}%`;
    modalElement.querySelector(".max-random-damage-mult-pct").textContent = `${result.details.calc.maxRandomDamageMultPct}%`;
    const typeMatchMults = [1, 1];
    const erratic = attacker.iqSkillEnabled(59, dungeon) || defender.iqSkillEnabled(56, dungeon);
    for (let i = 0; i < 2; i++) {
      switch (result.details[`indivTypeMatchup${i + 1}`].id) {
        case 0:
          typeMatchMults[i] = erratic ? MATCHUP_IMMUNE_ERRATIC : MATCHUP_IMMUNE2;
          break;
        case 1:
          typeMatchMults[i] = erratic ? MATCHUP_NOTVERY_ERRATIC : MATCHUP_NOTVERY;
          break;
        case 2:
          typeMatchMults[i] = erratic ? MATCHUP_NEUTRAL_ERRATIC : MATCHUP_NEUTRAL2;
          break;
        case 3:
          typeMatchMults[i] = erratic ? MATCHUP_SUPER_ERRATIC : MATCHUP_SUPER;
          break;
      }
    }
    const typeMatchMult = Math.floor(typeMatchMults[0] * typeMatchMults[1] * 100) / 100;
    const sniper = attacker.abilityActive(93);
    const damageBadgeWrapElement = modalElement.querySelector("#damage-badge-wrap");
    const damageBadgeData = [
      {
        label: `${result.details.typeMatchup.text}${erratic ? "(\u30E0\u30E9\u3063\u3051)" : ""} x${typeMatchMult}`,
        multiplier: typeMatchMult,
        value: typeMatchMult != 1
      },
      {
        label: `\u6025\u6240${sniper ? "(\u30B9\u30CA\u30A4\u30D1\u30FC)" : ""} x${sniper ? "2" : "1.5"}`,
        multiplier: sniper ? 2 : 1.5,
        value: result.details.criticalHit
      },
      { label: "\u30BF\u30A4\u30D7\u7121\u52B9", multiplier: 0, value: result.details.fullTypeImmunity },
      { label: "\u30C0\u30E1\u30FC\u30B8\u7121\u52B9", multiplier: 0, value: result.details.noDamage },
      { label: "\u3075\u3057\u304E\u306A\u307E\u3082\u308A", multiplier: 0, value: dungeon.damageDetailLog.isWonderGuardActive },
      { label: "\u3044\u308D\u3081\u304C\u306D x1.2", multiplier: 1.2, value: dungeon.damageDetailLog.isTintedLensActive },
      { label: "\u30CF\u30FC\u30C9\u30ED\u30C3\u30AF x0.75", multiplier: 0.75, value: dungeon.damageDetailLog.isSolidRockActive },
      { label: "\u30D5\u30A3\u30EB\u30BF\u30FC x0.75", multiplier: 0.75, value: dungeon.damageDetailLog.isFilterActive },
      { label: "\u30BF\u30A4\u30E0\u30B7\u30FC\u30EB\u30C9 x0.5", multiplier: 0.5, value: dungeon.damageDetailLog.isTimeShieldActive },
      { label: "\u30BF\u30A4\u30E0\u30B7\u30FC\u30EB\u30C9\u30D0\u30B0 x2", multiplier: 2, value: dungeon.damageDetailLog.isTimeShieldGlitch },
      { label: "\u30C6\u30AF\u30CB\u30B7\u30E3\u30F3 x1.5", multiplier: 1.5, value: dungeon.damageDetailLog.isTechnicianActive },
      { label: "\u3042\u3064\u3044\u3057\u307C\u3046 x0.5", multiplier: 1.5, value: dungeon.damageDetailLog.isThickFatActive },
      { label: "\u3052\u304D\u308A\u3085\u3046 x2", multiplier: 2, value: dungeon.damageDetailLog.isTorrentActive },
      { label: "\u3057\u3093\u308A\u3087\u304F x2", multiplier: 2, value: dungeon.damageDetailLog.isOvergrowActive },
      { label: "\u3080\u3057\u306E\u3057\u3089\u305B x2", multiplier: 2, value: dungeon.damageDetailLog.isSwarmActive },
      { label: "\u3082\u3046\u304B x2", multiplier: 2, value: dungeon.damageDetailLog.isBlazeActive },
      { label: "\u304B\u3093\u305D\u3046\u306F\u3060 x1.5", multiplier: 1.5, value: dungeon.damageDetailLog.isDrySkinActive },
      { label: "\u3084\u3051\u3069 x0.8", multiplier: 0.8, value: dungeon.damageDetailLog.isBurnActive },
      { label: "\u30BF\u30A4\u30D7\u4E00\u81F4(\u3066\u304D\u304A\u3046\u308A\u3087\u304F) x2", multiplier: 2, value: dungeon.damageDetailLog.isAdaptabilitySTAB },
      { label: "\u30BF\u30A4\u30D7\u4E00\u81F4 x1.5", multiplier: 1.5, value: dungeon.damageDetailLog.isSTAB },
      { label: "\u3072\u3056\u3057\u304C\u3064\u3088\u3044 x1.5", multiplier: 1.5, value: dungeon.damageDetailLog.isSunnyFireActive },
      { label: "\u3072\u3056\u3057\u304C\u3064\u3088\u3044 x0.5", multiplier: 0.5, value: dungeon.damageDetailLog.isSunnyWaterActive },
      { label: "\u3042\u3081 x0.5", multiplier: 0.5, value: dungeon.damageDetailLog.isRainyFireActive },
      { label: "\u3042\u3081 x1.5", multiplier: 1.5, value: dungeon.damageDetailLog.isRainyWaterActive },
      { label: "\u304F\u3082\u308A x0.75", multiplier: 0.75, value: dungeon.damageDetailLog.isCloudyActive },
      { label: "\u304D\u308A x0.5", multiplier: 0.5, value: dungeon.damageDetailLog.isFogActive },
      { label: "\u3069\u308D\u3042\u305D\u3073 x0.5", multiplier: 0.5, value: dungeon.damageDetailLog.isMudSportActive },
      { label: "\u307F\u305A\u3042\u305D\u3073 x0.5", multiplier: 0.5, value: dungeon.damageDetailLog.isWaterSportActive },
      { label: "\u3058\u3085\u3046\u3067\u3093 x2", multiplier: 2, value: dungeon.damageDetailLog.isChargeActive },
      { label: "\u3055\u304D\u3069\u308A x1.5", multiplier: 1.5, value: dungeon.damageDetailLog.isMeFirstActive },
      { label: "\u3059\u3066\u307F x1.5", multiplier: 1.5, value: dungeon.damageDetailLog.isRecklessActive },
      { label: "\u3066\u3064\u306E\u3053\u3076\u3057 x1.5", multiplier: 1.5, value: dungeon.damageDetailLog.isIronFistActive },
      { label: "\u7269\u7406\u30C0\u30E1\u534A\u6E1B x0.5", multiplier: 0.5, value: result.details.calc.modifiers.halfPhysicalDamage },
      { label: "\u7279\u6B8A\u30C0\u30E1\u534A\u6E1B x0.5", multiplier: 0.5, value: result.details.calc.modifiers.halfSpecialDamage },
      { label: "\u901A\u5E38\u653B\u6483 x0.5", multiplier: 0.5, value: move2.id == 355 },
      { label: "\u6295\u64F2\u7269 x0.5", multiplier: 0.5, value: move2.id == 405 },
      {
        label: `${MoveData[move2.id].Name} x${dungeon.damageDetailLog.damageMult}`,
        multiplier: dungeon.damageDetailLog.damageMult,
        value: dungeon.damageDetailLog.damageMult != 1 && move2.id != 355 && move2.id != 405
      },
      { label: "\u3054\u3046\u308F\u3093 x1.5", multiplier: 1.5, value: dungeon.damageDetailLog.isPowerPitcherActive },
      { label: "\u30A8\u30A2\u30FC\u30D6\u30EC\u30FC\u30C9 x1.5", multiplier: 1.5, value: dungeon.damageDetailLog.isAirBladeActive }
    ];
    damageBadgeData.sort((a, b) => a.multiplier > b.multiplier ? -1 : 1);
    damageBadgeWrapElement.innerHTML = "";
    for (const data of damageBadgeData) {
      const className = data.multiplier >= 1 ? "text-bg-danger" : data.multiplier > 0 ? "text-bg-warning" : "text-bg-secondary";
      if (data.value) {
        damageBadgeWrapElement.innerHTML += `
      <span class="badge ${className}">${data.label}</span>
    `;
      }
    }
  }
  function getFighterElement(target) {
    let elem = null;
    if (target.closest(".attacker")) {
      elem = target.closest(".attacker");
    } else if (target.closest(".defender")) {
      elem = target.closest(".defender");
    }
    return elem;
  }
  function getFighterType(target) {
    let res = null;
    if (target.closest(".attacker")) {
      res = "attacker";
    } else if (target.closest(".defender")) {
      res = "defender";
    }
    return res;
  }
  function getMoveBaseAccuracy(accuracy1, accuracy2, maxGinseng = 0) {
    const acc1 = Math.min(accuracy1, 100);
    const acc2 = Math.min(accuracy2, 100);
    if (maxGinseng == 0) return acc1;
    else return acc1 * acc2 / 100;
  }
  async function fetchJsonData() {
    try {
      const [pokemonData, moveData, messageData, iqgroupData, typeData] = await Promise.all([
        getJsonData("pokemon"),
        getJsonData("move"),
        getJsonData("message"),
        getJsonData("iqgroup"),
        getJsonData("type")
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
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibnMtaHVnby1pbXA6RjpcXEdpdFxcbGFpb3h5LmdpdGh1Yi5pb1xcYXNzZXRzXFxqc1xcZGFtYWdlXFxjb25zdC5qcyIsICJucy1odWdvLWltcDpGOlxcR2l0XFxsYWlveHkuZ2l0aHViLmlvXFxhc3NldHNcXGpzXFxkYW1hZ2VcXHN0cnVjdHVyZS5qcyIsICJucy1odWdvLWltcDpGOlxcR2l0XFxsYWlveHkuZ2l0aHViLmlvXFxhc3NldHNcXGpzXFxkYW1hZ2VcXG1lY2hhbmljcy5qcyIsICJucy1odWdvLWltcDpGOlxcR2l0XFxsYWlveHkuZ2l0aHViLmlvXFxhc3NldHNcXGpzXFxwb2tlX3BhcmFtLmpzIiwgIm5zLWh1Z28taW1wOkY6XFxHaXRcXGxhaW94eS5naXRodWIuaW9cXGFzc2V0c1xcanNcXGRhbWFnZVxcaWRtYXAuanMiLCAibnMtaHVnby1pbXA6RjpcXEdpdFxcbGFpb3h5LmdpdGh1Yi5pb1xcYXNzZXRzXFxqc1xcZGFtYWdlXFxtYXRodXRpbC5qcyIsICJucy1odWdvLWltcDpGOlxcR2l0XFxsYWlveHkuZ2l0aHViLmlvXFxhc3NldHNcXGpzXFxkYW1hZ2VcXGNhbGMuanMiLCAiPHN0ZGluPiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLypcclxuICBUaGlzIGNvZGUgaW5jbHVkZXMgcG9ydGlvbnMgYmFzZWQgb24gZGFtYWdlLWVvcyBieSBVc2VybmFtZUZvZGRlclxyXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9Vc2VybmFtZUZvZGRlci9kYW1hZ2UtZW9zXHJcblxyXG4gIE9yaWdpbmFsIGNvZGUgcG9ydGlvbnM6XHJcbiAgLSBNSVQgTGljZW5zZSAoYykgMjAyMyBVc2VybmFtZUZvZGRlclxyXG5cclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgT3JpZ2luYWwgTGljZW5zZTpcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgTUlUIExpY2Vuc2VcclxuXHJcbiAgQ29weXJpZ2h0IChjKSAyMDIzIFVzZXJuYW1lRm9kZGVyXHJcblxyXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcbiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG4gIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuICBTT0ZUV0FSRS5cclxuKi9cclxuXHJcbi8qKiBcdTcyNjlcdTc0MDZcdTYyODAgKi9cclxuZXhwb3J0IGNvbnN0IENBVEVHT1JZX1BIWVNJQ0FMID0gMDtcclxuLyoqIFx1NzI3OVx1NkI4QVx1NjI4MCAqL1xyXG5leHBvcnQgY29uc3QgQ0FURUdPUllfU1BFQ0lBTCA9IDE7XHJcbi8qKiBcdTU5MDlcdTUzMTZcdTYyODAgKi9cclxuZXhwb3J0IGNvbnN0IENBVEVHT1JZX1NUQVRVUyA9IDI7XHJcblxyXG4vKiogXHU2MDI3XHU1MjI1IFx1NzEyMVx1NTJCOSAqL1xyXG5leHBvcnQgY29uc3QgR0VOREVSX0lOVkFMSUQgPSAwO1xyXG4vKiogXHU2MDI3XHU1MjI1IFx1MzBBQVx1MzBCOSAqL1xyXG5leHBvcnQgY29uc3QgR0VOREVSX01BTEUgPSAxO1xyXG4vKiogXHU2MDI3XHU1MjI1IFx1MzBFMVx1MzBCOSAqL1xyXG5leHBvcnQgY29uc3QgR0VOREVSX0ZFTUFMRSA9IDI7XHJcbi8qKiBcdTYwMjdcdTUyMjUgXHU0RTBEXHU2NjBFICovXHJcbmV4cG9ydCBjb25zdCBHRU5ERVJfR0VOREVSTEVTUyA9IDM7XHJcblxyXG4vKiogXHU1OTI5XHU1MDE5IFx1MzA2Rlx1MzA4QyAqL1xyXG5leHBvcnQgY29uc3QgV0VBVEhFUl9DTEVBUiA9IDA7XHJcbi8qKiBcdTU5MjlcdTUwMTkgXHUzMDcyXHUzMDU2XHUzMDU3XHUzMDRDXHUzMDY0XHUzMDg4XHUzMDQ0ICovXHJcbmV4cG9ydCBjb25zdCBXRUFUSEVSX1NVTk5ZID0gMTtcclxuLyoqIFx1NTkyOVx1NTAxOSBcdTMwNTlcdTMwNkFcdTMwNDJcdTMwODlcdTMwNTcgKi9cclxuZXhwb3J0IGNvbnN0IFdFQVRIRVJfU0FORFNUT1JNID0gMjtcclxuLyoqIFx1NTkyOVx1NTAxOSBcdTMwNEZcdTMwODJcdTMwOEEgKi9cclxuZXhwb3J0IGNvbnN0IFdFQVRIRVJfQ0xPVURZID0gMztcclxuLyoqIFx1NTkyOVx1NTAxOSBcdTMwNDJcdTMwODEgKi9cclxuZXhwb3J0IGNvbnN0IFdFQVRIRVJfUkFJTiA9IDQ7XHJcbi8qKiBcdTU5MjlcdTUwMTkgXHUzMDQyXHUzMDg5XHUzMDhDICovXHJcbmV4cG9ydCBjb25zdCBXRUFUSEVSX0hBSUwgPSA1O1xyXG4vKiogXHU1OTI5XHU1MDE5IFx1MzA0RFx1MzA4QSAqL1xyXG5leHBvcnQgY29uc3QgV0VBVEhFUl9GT0cgPSA2O1xyXG4vKiogXHU1OTI5XHU1MDE5IFx1MzA4Nlx1MzA0RCAqL1xyXG5leHBvcnQgY29uc3QgV0VBVEhFUl9TTk9XID0gNztcclxuLyoqIFx1NTkyOVx1NTAxOSBcdTMwRTlcdTMwRjNcdTMwQzBcdTMwRTAgKi9cclxuZXhwb3J0IGNvbnN0IFdFQVRIRVJfUkFORE9NID0gODtcclxuXHJcbi8qKiBcdTMwNUZcdTMwOTNcdTMwNTFcdTMwOTNcdTMwNUZcdTMwNDRcdTMwNkVcdTMwN0UgXHU1NkZBXHU1QjlBXHUzMEQ1XHUzMEVEXHUzMEEySUQgKi9cclxuZXhwb3J0IGNvbnN0IEZJWEVEX1NVQlNUSVRVVEVfUk9PTSA9IDB4NmU7XHJcblxyXG4vKiogXHUzMEJGXHUzMEE0XHUzMEQ3XHU3NkY4XHU2MDI3IFx1NTJCOVx1Njc5Q1x1MzA2Rlx1MzA2QVx1MzA0NCAqL1xyXG5leHBvcnQgY29uc3QgTUFUQ0hVUF9JTU1VTkUgPSAwO1xyXG4vKiogXHUzMEJGXHUzMEE0XHUzMEQ3XHU3NkY4XHU2MDI3IFx1NEVDQVx1NEUwMFx1MzA2NCAqL1xyXG5leHBvcnQgY29uc3QgTUFUQ0hVUF9OT1RfVkVSWV9FRkZFQ1RJVkUgPSAxO1xyXG4vKiogXHUzMEJGXHUzMEE0XHUzMEQ3XHU3NkY4XHU2MDI3IFx1NjY2RVx1OTAxQSAqL1xyXG5leHBvcnQgY29uc3QgTUFUQ0hVUF9ORVVUUkFMID0gMjtcclxuLyoqIFx1MzBCRlx1MzBBNFx1MzBEN1x1NzZGOFx1NjAyNyBcdTYyOUNcdTdGQTQgKi9cclxuZXhwb3J0IGNvbnN0IE1BVENIVVBfU1VQRVJfRUZGRUNUSVZFID0gMztcclxuXHJcbi8qKiBcdTMwQkZcdTMwQTRcdTMwRDcgXHUzMDZBXHUzMDU3ICovXHJcbmV4cG9ydCBjb25zdCBUWVBFX05PTkUgPSAwO1xyXG4vKiogXHUzMEJGXHUzMEE0XHUzMEQ3IFx1MzBDRVx1MzBGQ1x1MzBERVx1MzBFQiAqL1xyXG5leHBvcnQgY29uc3QgVFlQRV9OT1JNQUwgPSAxO1xyXG4vKiogXHUzMEJGXHUzMEE0XHUzMEQ3IFx1MzA3Qlx1MzA2RVx1MzA0QSAqL1xyXG5leHBvcnQgY29uc3QgVFlQRV9GSVJFID0gMjtcclxuLyoqIFx1MzBCRlx1MzBBNFx1MzBENyBcdTMwN0ZcdTMwNUEgKi9cclxuZXhwb3J0IGNvbnN0IFRZUEVfV0FURVIgPSAzO1xyXG4vKiogXHUzMEJGXHUzMEE0XHUzMEQ3IFx1MzA0Rlx1MzA1NSAqL1xyXG5leHBvcnQgY29uc3QgVFlQRV9HUkFTUyA9IDQ7XHJcbi8qKiBcdTMwQkZcdTMwQTRcdTMwRDcgXHUzMDY3XHUzMDkzXHUzMDREICovXHJcbmV4cG9ydCBjb25zdCBUWVBFX0VMRUNUUklDID0gNTtcclxuLyoqIFx1MzBCRlx1MzBBNFx1MzBENyBcdTMwNTNcdTMwNEFcdTMwOEEgKi9cclxuZXhwb3J0IGNvbnN0IFRZUEVfSUNFID0gNjtcclxuLyoqIFx1MzBCRlx1MzBBNFx1MzBENyBcdTMwNEJcdTMwNEZcdTMwNjhcdTMwNDYgKi9cclxuZXhwb3J0IGNvbnN0IFRZUEVfRklHSFRJTkcgPSA3O1xyXG4vKiogXHUzMEJGXHUzMEE0XHUzMEQ3IFx1MzA2OVx1MzA0RiAqL1xyXG5leHBvcnQgY29uc3QgVFlQRV9QT0lTT04gPSA4O1xyXG4vKiogXHUzMEJGXHUzMEE0XHUzMEQ3IFx1MzA1OFx1MzA4MVx1MzA5MyAqL1xyXG5leHBvcnQgY29uc3QgVFlQRV9HUk9VTkQgPSA5O1xyXG4vKiogXHUzMEJGXHUzMEE0XHUzMEQ3IFx1MzA3Mlx1MzA1M1x1MzA0NiAqL1xyXG5leHBvcnQgY29uc3QgVFlQRV9GTFlJTkcgPSAxMDtcclxuLyoqIFx1MzBCRlx1MzBBNFx1MzBENyBcdTMwQThcdTMwQjlcdTMwRDFcdTMwRkMgKi9cclxuZXhwb3J0IGNvbnN0IFRZUEVfUFNZQ0hJQyA9IDExO1xyXG4vKiogXHUzMEJGXHUzMEE0XHUzMEQ3IFx1MzA4MFx1MzA1NyAqL1xyXG5leHBvcnQgY29uc3QgVFlQRV9CVUcgPSAxMjtcclxuLyoqIFx1MzBCRlx1MzBBNFx1MzBENyBcdTMwNDRcdTMwOEYgKi9cclxuZXhwb3J0IGNvbnN0IFRZUEVfUk9DSyA9IDEzO1xyXG4vKiogXHUzMEJGXHUzMEE0XHUzMEQ3IFx1MzBCNFx1MzBGQ1x1MzBCOVx1MzBDOCAqL1xyXG5leHBvcnQgY29uc3QgVFlQRV9HSE9TVCA9IDE0O1xyXG4vKiogXHUzMEJGXHUzMEE0XHUzMEQ3IFx1MzBDOVx1MzBFOVx1MzBCNFx1MzBGMyAqL1xyXG5leHBvcnQgY29uc3QgVFlQRV9EUkFHT04gPSAxNTtcclxuLyoqIFx1MzBCRlx1MzBBNFx1MzBENyBcdTMwNDJcdTMwNEYgKi9cclxuZXhwb3J0IGNvbnN0IFRZUEVfREFSSyA9IDE2O1xyXG4vKiogXHUzMEJGXHUzMEE0XHUzMEQ3IFx1MzA2Rlx1MzA0Q1x1MzA2RCAqL1xyXG5leHBvcnQgY29uc3QgVFlQRV9TVEVFTCA9IDE3O1xyXG4vKiogXHUzMEJGXHUzMEE0XHUzMEQ3IFx1MzA4MFx1MzA1RVx1MzA0Rlx1MzA1Qlx1MzA0NCAqL1xyXG5leHBvcnQgY29uc3QgVFlQRV9ORVVUUkFMID0gMTg7XHJcblxyXG4vLyBcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdTMwRTFcdTMwQzNcdTMwQkJcdTMwRkNcdTMwQjhcclxuZXhwb3J0IGNvbnN0IERBTUFHRV9NRVNTQUdFX01PVkUgPSAwO1xyXG5leHBvcnQgY29uc3QgREFNQUdFX01FU1NBR0VfQlVSTiA9IDE7XHJcbmV4cG9ydCBjb25zdCBEQU1BR0VfTUVTU0FHRV9DT05TVFJJQ1RJT04gPSAyO1xyXG5leHBvcnQgY29uc3QgREFNQUdFX01FU1NBR0VfUE9JU09OID0gMztcclxuZXhwb3J0IGNvbnN0IERBTUFHRV9NRVNTQUdFX1JFQ09JTF8xID0gNDtcclxuZXhwb3J0IGNvbnN0IERBTUFHRV9NRVNTQUdFX1dSQVAgPSA1O1xyXG5leHBvcnQgY29uc3QgREFNQUdFX01FU1NBR0VfQ09VTlRFUiA9IDY7XHJcbmV4cG9ydCBjb25zdCBEQU1BR0VfTUVTU0FHRV9DVVJTRSA9IDc7XHJcbmV4cG9ydCBjb25zdCBEQU1BR0VfTUVTU0FHRV9OSUdIVE1BUkUgPSA4O1xyXG5leHBvcnQgY29uc3QgREFNQUdFX01FU1NBR0VfTEVFQ0hfU0VFRCA9IDk7XHJcbmV4cG9ydCBjb25zdCBEQU1BR0VfTUVTU0FHRV9TUElLRVMgPSAxMDtcclxuZXhwb3J0IGNvbnN0IERBTUFHRV9NRVNTQUdFX1BFUklTSF9TT05HID0gMTE7XHJcbmV4cG9ydCBjb25zdCBEQU1BR0VfTUVTU0FHRV9ERVNUSU5ZX0JPTkQgPSAxMjtcclxuZXhwb3J0IGNvbnN0IERBTUFHRV9NRVNTQUdFX1NMVURHRSA9IDEzO1xyXG5leHBvcnQgY29uc3QgREFNQUdFX01FU1NBR0VfSFVOR0VSID0gMTQ7XHJcbmV4cG9ydCBjb25zdCBEQU1BR0VfTUVTU0FHRV9DSEVTVE5VVF8xID0gMTU7XHJcbmV4cG9ydCBjb25zdCBEQU1BR0VfTUVTU0FHRV9DSEVTVE5VVF8yID0gMTY7XHJcbmV4cG9ydCBjb25zdCBEQU1BR0VfTUVTU0FHRV9QSVRGQUxMX1RSQVAgPSAxNztcclxuZXhwb3J0IGNvbnN0IERBTUFHRV9NRVNTQUdFX0JBRF9XRUFUSEVSID0gMTg7XHJcbmV4cG9ydCBjb25zdCBEQU1BR0VfTUVTU0FHRV9NSVNTRURfTU9WRSA9IDE5O1xyXG5leHBvcnQgY29uc3QgREFNQUdFX01FU1NBR0VfUkVDT0lMXzIgPSAyMDtcclxuZXhwb3J0IGNvbnN0IERBTUFHRV9NRVNTQUdFX1NURUFMVEhfUk9DSyA9IDIxO1xyXG5leHBvcnQgY29uc3QgREFNQUdFX01FU1NBR0VfVE9YSUNfU1BJS0VTID0gMjI7XHJcbmV4cG9ydCBjb25zdCBEQU1BR0VfTUVTU0FHRV9BTE1PU1RfRkFJTlRFRCA9IDIzO1xyXG5leHBvcnQgY29uc3QgREFNQUdFX01FU1NBR0VfQkFEX0RSRUFNUyA9IDI0O1xyXG5leHBvcnQgY29uc3QgREFNQUdFX01FU1NBR0VfU09MQVJfUE9XRVIgPSAyNTtcclxuZXhwb3J0IGNvbnN0IERBTUFHRV9NRVNTQUdFX0RSWV9TS0lOID0gMjY7XHJcbiIsICIvKlxyXG4gIFRoaXMgY29kZSBpbmNsdWRlcyBwb3J0aW9ucyBiYXNlZCBvbiBkYW1hZ2UtZW9zIGJ5IFVzZXJuYW1lRm9kZGVyXHJcbiAgaHR0cHM6Ly9naXRodWIuY29tL1VzZXJuYW1lRm9kZGVyL2RhbWFnZS1lb3NcclxuXHJcbiAgT3JpZ2luYWwgY29kZSBwb3J0aW9uczpcclxuICAtIE1JVCBMaWNlbnNlIChjKSAyMDIzIFVzZXJuYW1lRm9kZGVyXHJcblxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBPcmlnaW5hbCBMaWNlbnNlOlxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBNSVQgTGljZW5zZVxyXG5cclxuICBDb3B5cmlnaHQgKGMpIDIwMjMgVXNlcm5hbWVGb2RkZXJcclxuXHJcbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG4gIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG4gIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG4gIFNPRlRXQVJFLlxyXG4qL1xyXG5cclxuaW1wb3J0ICogYXMgZW9zIGZyb20gJy4vY29uc3QuanMnO1xyXG5pbXBvcnQgKiBhcyBNZWNoYW5pY3MgZnJvbSAnLi9tZWNoYW5pY3MuanMnO1xyXG5cclxuLyoqXHJcbiAqIFx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1NjlDQlx1OTAyMFx1NEY1M1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1vbnN0ZXIge1xyXG4gIGlkID0gMDsgLy8gXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzSURcclxuICBpc19sZWFkZXIgPSBmYWxzZTsgLy8gXHUzMEVBXHUzMEZDXHUzMEMwXHUzMEZDXHUzMEQ1XHUzMEU5XHUzMEIwXHJcbiAgaXNfbWVtYmVyID0gZmFsc2U7IC8vIFx1MzBDMVx1MzBGQ1x1MzBFMFx1MzBFMVx1MzBGM1x1MzBEMFx1MzBGQ1x1MzBENVx1MzBFOVx1MzBCMFxyXG4gIGdlbmRlciA9IDA7IC8vIFx1NjAyN1x1NTIyNSAoMDogXHU3MTIxXHU1MkI5LCAxOiBcdTMwQUFcdTMwQjksIDI6IFx1MzBFMVx1MzBCOSwgMzogXHU0RTBEXHU2NjBFKVxyXG4gIGxldmVsID0gMDsgLy8gTHZcclxuICBocCA9IDA7IC8vIEhQXHJcbiAgaHBfbWF4ID0gMDsgLy8gXHU2NzAwXHU1OTI3SFBcclxuICBhdGsgPSAwOyAvLyBcdTY1M0JcdTY0ODNcclxuICBkZWYgPSAwOyAvLyBcdTk2MzJcdTVGQTFcclxuICBzcF9hdGsgPSAwOyAvLyBcdTcyNzlcdTY1M0JcclxuICBzcF9kZWYgPSAwOyAvLyBcdTcyNzlcdTk2MzJcclxuICBzdGFnZV9hdGsgPSAxMDsgLy8gXHU4MEZEXHU1MjlCXHUzMEU5XHUzMEYzXHUzMEFGIFx1NjUzQlx1NjQ4M1xyXG4gIHN0YWdlX2RlZiA9IDEwOyAvLyBcdTgwRkRcdTUyOUJcdTMwRTlcdTMwRjNcdTMwQUYgXHU5NjMyXHU1RkExXHJcbiAgc3RhZ2Vfc3BfYXRrID0gMTA7IC8vIFx1ODBGRFx1NTI5Qlx1MzBFOVx1MzBGM1x1MzBBRiBcdTcyNzlcdTY1M0JcclxuICBzdGFnZV9zcF9kZWYgPSAxMDsgLy8gXHU4MEZEXHU1MjlCXHUzMEU5XHUzMEYzXHUzMEFGIFx1NzI3OVx1OTYzMlxyXG4gIHN0YWdlX2FjY3VyYWN5ID0gMTA7IC8vIFx1ODBGRFx1NTI5Qlx1MzBFOVx1MzBGM1x1MzBBRiBcdTU0N0RcdTRFMkRcdTczODdcclxuICBzdGFnZV9ldmFzaW9uID0gMTA7IC8vIFx1ODBGRFx1NTI5Qlx1MzBFOVx1MzBGM1x1MzBBRiBcdTU2REVcdTkwN0ZcdTczODdcclxuICBpcSA9IDA7IC8vIFx1MzA0Qlx1MzA1N1x1MzA1M1x1MzA1NVxyXG4gIGhhbGZfYXRrID0gMDsgLy8gXHU1MzRBXHU2RTFCXHUzMEU5XHUzMEYzXHUzMEFGIFx1NjUzQlx1NjQ4M1xyXG4gIGhhbGZfZGVmID0gMDsgLy8gXHU1MzRBXHU2RTFCXHUzMEU5XHUzMEYzXHUzMEFGIFx1OTYzMlx1NUZBMVxyXG4gIGhhbGZfc3BfYXRrID0gMDsgLy8gXHU1MzRBXHU2RTFCXHUzMEU5XHUzMEYzXHUzMEFGIFx1NzI3OVx1NjUzQlxyXG4gIGhhbGZfc3BfZGVmID0gMDsgLy8gXHU1MzRBXHU2RTFCXHUzMEU5XHUzMEYzXHUzMEFGIFx1NzI3OVx1OTYzMlxyXG4gIGZsYXNoX2ZpcmVfYm9vc3QgPSAwOyAvLyBcdTMwODJcdTMwODlcdTMwNDRcdTMwNzNcdTY1NzBcclxuICB0eXBlcyA9IFswLCAwXTsgLy8gXHUzMEJGXHUzMEE0XHUzMEQ3XHJcbiAgYWJpbGl0aWVzID0gWzAsIDBdOyAvLyBcdTcyNzlcdTYwMjdcclxuICBoaWRkZW5fcG93ZXJfdHlwZSA9IDA7IC8vIFx1MzA4MVx1MzA1Nlx1MzA4MVx1MzA4Qlx1MzBEMVx1MzBFRlx1MzBGQ1x1MzA2RVx1MzBCRlx1MzBBNFx1MzBEN1xyXG4gIGhpZGRlbl9wb3dlcl9iYXNlX3Bvd2VyID0gMDsgLy8gXHUzMDgxXHUzMDU2XHUzMDgxXHUzMDhCXHUzMEQxXHUzMEVGXHUzMEZDXHUzMDZFXHU1QTAxXHU1MjlCXHJcbiAgaGVsZEl0ZW0gPSAwOyAvLyBcdTg4QzVcdTUwOTlcdTRFMkRcdTMwNkVcdTkwNTNcdTUxNzdcclxuICBoZWxkSXRlbV9zdGlja3kgPSBmYWxzZTsgLy8gXHUzMENEXHUzMEQwXHUzMDY0XHUzMDREXHJcbiAgYmVsbHkgPSAwOyAvLyBcdTMwNEFcdTMwNkFcdTMwNEJcclxuICBzdGF0dXNlcyA9IG5ldyBTdGF0dXNlcygpOyAvLyBcdTcyQjZcdTYxNEJcdTc1NzBcdTVFMzhcclxuICBpcV9za2lsbCA9IG5ldyBBcnJheSg2OSkuZmlsbChmYWxzZSk7IC8vIFx1MzA0Qlx1MzA1N1x1MzA1M1x1MzA1NVx1MzBENVx1MzBFOVx1MzBCMFxyXG4gIGV4Y2x1c2l2ZV9pdGVtX2VmZmVjdF9mbGFncyA9IG5ldyBBcnJheSgxMjkpLmZpbGwoZmFsc2UpOyAvLyBcdTVDMDJcdTc1MjhcdTkwNTNcdTUxNzdcdTUyQjlcdTY3OUNcdTMwRDVcdTMwRTlcdTMwQjBcclxuICBleGNsdXNpdmVfaXRlbV9hdGsgPSAwOyAvLyBcdTVDMDJcdTc1MjhcdTkwNTNcdTUxNzdcdTUyQTBcdTdCOTdcdTUyMDYgXHU2NTNCXHU2NDgzXHJcbiAgZXhjbHVzaXZlX2l0ZW1fZGVmID0gMDsgLy8gXHU1QzAyXHU3NTI4XHU5MDUzXHU1MTc3XHU1MkEwXHU3Qjk3XHU1MjA2IFx1OTYzMlx1NUZBMVxyXG4gIGV4Y2x1c2l2ZV9pdGVtX3NwX2F0ayA9IDA7IC8vIFx1NUMwMlx1NzUyOFx1OTA1M1x1NTE3N1x1NTJBMFx1N0I5N1x1NTIwNiBcdTcyNzlcdTY1M0JcclxuICBleGNsdXNpdmVfaXRlbV9zcF9kZWYgPSAwOyAvLyBcdTVDMDJcdTc1MjhcdTkwNTNcdTUxNzdcdTUyQTBcdTdCOTdcdTUyMDYgXHU3Mjc5XHU5NjMyXHJcbiAgZmxhZ19tZV9maXJzdCA9IGZhbHNlOyAvLyBcdTMwNTVcdTMwNERcdTMwNjlcdTMwOEFcdTMwRDVcdTMwRTlcdTMwQjBcclxuICBmbGFnX3ByYWN0aWNlX3N3aW5nZXIgPSBmYWxzZTsgLy8gXHUzMDRCXHUzMDVGXHUzMDZBXHUzMDg5XHUzMDU3XHUzMEQ1XHUzMEU5XHUzMEIwXHJcbiAgZmxhZ19hbmdlcl9wb2ludCA9IGZhbHNlOyAvLyBcdTMwNDRcdTMwNEJcdTMwOEFcdTMwNkVcdTMwNjRcdTMwN0NcdTMwRDVcdTMwRTlcdTMwQjBcclxuXHJcbiAgbl9tb3Zlc19vdXRfb2ZfcHAgPSAwOyAvLyAoXHUzMDY4XHUzMDYzXHUzMDY2XHUzMDRBXHUzMDREXHU3NTI4KSBQUFx1MzA0Q1x1NkI4Qlx1MzA2M1x1MzA2Nlx1MzA0NFx1MzA4Qlx1NjI4MFx1NjU3MFxyXG5cclxuICBmbGFnX3RkX3RpbWVzaGVhbGQgPSBmYWxzZTsgLy8gW1x1NjY0Mlx1OTVDN11cdTMwQkZcdTMwQTRcdTMwRTBcdTMwQjdcdTMwRkNcdTMwRUJcdTMwQzlcdTMwRDVcdTMwRTlcdTMwQjBcclxuXHJcbiAgLyoqXHJcbiAgICogXHUzMEM3XHUzMEEzXHUzMEZDXHUzMEQ3XHUzMEIzXHUzMEQ0XHUzMEZDXHUzMDZFXHU0RjVDXHU2MjEwXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBjbG9uZSgpIHtcclxuICAgIGNvbnN0IGNvcHkgPSBuZXcgTW9uc3RlcigpO1xyXG4gICAgT2JqZWN0LmFzc2lnbihjb3B5LCB0aGlzKTtcclxuICAgIHJldHVybiBjb3B5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHU2NzA5XHU1MkI5XHU2MDI3XHUzMDkyXHU4RkQ0XHUzMDU5IChcdTVFMzhcdTMwNkJ0cnVlKVxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgaXNWYWxpZCgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBpc01vbnN0ZXIoKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFx1NUJGRVx1OEM2MVx1MzA2RVx1NzI3OVx1NjAyN1x1MzA0Q1x1NjcwOVx1NTJCOVx1MzA2N1x1MzA0Mlx1MzA4Qlx1MzA0Qlx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlxyXG4gICAqIEBwYXJhbSB7Kn0gYWJpbGl0eUlkXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBhYmlsaXR5QWN0aXZlKGFiaWxpdHlJZCkge1xyXG4gICAgaWYgKGFiaWxpdHlJZCA9PSAwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmFiaWxpdGllcy5pbmNsdWRlcyhhYmlsaXR5SWQpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBcdTVCRkVcdThDNjFcdTMwNkVcdTcyNzlcdTYwMjdcdTMwNENcdTY3MDlcdTUyQjlcdTMwNjdcdTMwNDJcdTMwOEJcdTMwNEJcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUYgKFx1MzA0NFx1MzA0OFx1MzA0RFx1MzBGQlx1MzA0Qlx1MzA1Rlx1MzA4NFx1MzA3Nlx1MzA4QVx1ODAwM1x1NjE2RSlcclxuICAgKiBAcGFyYW0ge051bWJlcn0gYWJpbGl0eUlkXHJcbiAgICogQHBhcmFtIHtNb25zdGVyfSBhdHRhY2tlclxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gYXR0YWNrZXJBYmlsaXR5QWN0aXZlXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBhYmlsaXR5QWN0aXZlRGV0YWlscyhhYmlsaXR5SWQsIGF0dGFja2VyLCBhdHRhY2tlckFiaWxpdHlBY3RpdmUpIHtcclxuICAgIGlmICh0aGlzICE9IGF0dGFja2VyICYmIGF0dGFja2VyQWJpbGl0eUFjdGl2ZSAmJiB0aGlzLmFiaWxpdHlBY3RpdmUoODMpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmFiaWxpdHlBY3RpdmUoYWJpbGl0eUlkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFx1MzA0Qlx1MzA1N1x1MzA1M1x1MzA1NVx1MzA0Q1x1NjcwOVx1NTJCOVx1MzA2N1x1MzA0Mlx1MzA4Qlx1MzA0Qlx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlxyXG4gICAqIEBwYXJhbSB7Kn0gaXFcclxuICAgKiBAcGFyYW0ge0R1bmdlb25TdGF0ZX0gZHVuZ2VvblN0YXRlXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBpcVNraWxsRW5hYmxlZChpcSwgZHVuZ2VvblN0YXRlKSB7XHJcbiAgICBpZiAodGhpcy5pc19tZW1iZXIgJiYgZHVuZ2VvblN0YXRlLmlxX2Rpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmlxX3NraWxsW2lxXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFx1OTA1M1x1NTE3N1x1MzA5Mlx1NjMwMVx1MzA2M1x1MzA2Nlx1MzA0NFx1MzA4Qlx1MzA0Qlx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRiAoXHUzMENEXHUzMEQwXHUzMDY0XHUzMDREXHUzMDkyXHU4MDAzXHU2MTZFKVxyXG4gICAqIEBwYXJhbSB7Kn0gaXRlbUlkXHJcbiAgICovXHJcbiAgaGFzSGVsZEl0ZW0oaXRlbUlkKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuaGVsZEl0ZW1fc3RpY2t5ICYmIHRoaXMuaGVsZEl0ZW0gPT0gaXRlbUlkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHU5MDUzXHU1MTc3XHUzMDRDXHU2NzA5XHU1MkI5XHUzMDY3XHUzMDQyXHUzMDhCXHUzMDRCXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGIChcdTMwNzZcdTMwNERcdTMwODhcdTMwNDZcdTMwOTJcdTgwMDNcdTYxNkUpXHJcbiAgICogQHBhcmFtIHsqfSBpdGVtSWRcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIGl0ZW1BY3RpdmUoaXRlbUlkKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuYWJpbGl0eUFjdGl2ZSgweDZmKSAmJiB0aGlzLmhhc0hlbGRJdGVtKGl0ZW1JZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcdTMwNjlcdTMwNkVcdTU5MjlcdTZDMTdcdTMwNkVcdTVGNzFcdTk3RkZcdTMwOTJcdTUzRDdcdTMwNTFcdTMwOEJcdTMwNEJcdTUzRDZcdTVGOTdcclxuICAgKiBAcGFyYW0ge0R1bmdlb25TdGF0ZX0gZHVuZ2VvblxyXG4gICAqL1xyXG4gIHBlcmNlaXZlZFdlYXRoZXIoZHVuZ2Vvbikge1xyXG4gICAgLy8gXHUzMENFXHUzMEZDXHUzMDY2XHUzMDkzXHUzMEQwXHUzMEYzXHUzMEMwXHUzMENBXHUzMDkyXHU2MzAxXHUzMDYzXHUzMDY2XHUzMDQ0XHUzMDhCXHU1ODM0XHU1NDA4LCBcdTMwNkZcdTMwOENcdTMwNjhcdTMwN0ZcdTMwNkFcdTMwNTlcclxuICAgIGlmICh0aGlzLml0ZW1BY3RpdmUoMHgzNCkpIHtcclxuICAgICAgcmV0dXJuIGVvcy5XRUFUSEVSX0NMRUFSO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGR1bmdlb24ud2VhdGhlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFx1NEVENlx1MzA2RVx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1MzA0Q1x1NUJGRVx1OEM2MVx1MzA2RVx1NzI3OVx1NjAyN1x1MzA5Mlx1NjMwMVx1MzA2M1x1MzA2Nlx1MzA0NFx1MzA4Qlx1MzA0Qlx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlxyXG4gICAqIEBwYXJhbSB7Kn0gYWJpbGl0eUlkXHJcbiAgICogQHBhcmFtIHtEdW5nZW9uU3RhdGV9IGR1bmdlb25cclxuICAgKi9cclxuICBvdGhlck1vbnN0ZXJBYmlsaXR5QWN0aXZlKGFiaWxpdHlJZCwgZHVuZ2Vvbikge1xyXG4gICAgcmV0dXJuIGFiaWxpdHlJZCAhPSAwICYmICF0aGlzLmFiaWxpdHlBY3RpdmUoMHg1MykgJiYgZHVuZ2Vvbi5vdGhlck1vbnN0ZXJzLmFiaWxpdGllcy5pbmNsdWRlcyhhYmlsaXR5SWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHU1QzAyXHU3NTI4XHU5MDUzXHU1MTc3XHUzMDZFXHUzMEI5XHUzMEM2XHUzMEZDXHUzMEJGXHUzMEI5XHU0RTBBXHU2NjA3XHU1MkI5XHU2NzlDXHUzMDkyXHU1M0Q2XHU1Rjk3IChcdTY1M0JcdTY0ODNcdTdDRkIpXHJcbiAgICogQHBhcmFtIHsqfSBtb3ZlQ2F0ZWdvcnlcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIGV4Y2x1c2l2ZUl0ZW1PZmZlbnNlQm9vc3QobW92ZUNhdGVnb3J5KSB7XHJcbiAgICByZXR1cm4gbW92ZUNhdGVnb3J5ID09IGVvcy5DQVRFR09SWV9QSFlTSUNBTCA/IHRoaXMuZXhjbHVzaXZlX2l0ZW1fYXRrIDogdGhpcy5leGNsdXNpdmVfaXRlbV9zcF9hdGs7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcdTVDMDJcdTc1MjhcdTkwNTNcdTUxNzdcdTMwNkVcdTMwQjlcdTMwQzZcdTMwRkNcdTMwQkZcdTMwQjlcdTRFMEFcdTY2MDdcdTUyQjlcdTY3OUNcdTMwOTJcdTUzRDZcdTVGOTcgKFx1OTYzMlx1NUZBMVx1N0NGQilcclxuICAgKiBAcGFyYW0geyp9IG1vdmVDYXRlZ29yeVxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgZXhjbHVzaXZlSXRlbURlZmVuc2VCb29zdChtb3ZlQ2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiBtb3ZlQ2F0ZWdvcnkgPT0gZW9zLkNBVEVHT1JZX1BIWVNJQ0FMID8gdGhpcy5leGNsdXNpdmVfaXRlbV9kZWYgOiB0aGlzLmV4Y2x1c2l2ZV9pdGVtX3NwX2RlZjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFx1NkNFMlx1NTJENVx1ODI3Mlx1MzBFQVx1MzBEQ1x1MzBGM1x1MzA0Q1x1NjcwOVx1NTJCOVx1MzA0Qlx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgYXVyYUJvd0FjdGl2ZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICF0aGlzLmFiaWxpdHlBY3RpdmUoMHg2ZikgJiZcclxuICAgICAgdGhpcy5oZWxkSXRlbSA+IDAgJiZcclxuICAgICAgTWVjaGFuaWNzLmlzQXVyYUJvdyh0aGlzLmhlbGRJdGVtKSAmJlxyXG4gICAgICB0aGlzLmhhc0hlbGRJdGVtKHRoaXMuaGVsZEl0ZW0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHU2MEFBXHUzMDQ0XHU3MkI2XHU2MTRCXHUzMDkyXHU2MzAxXHUzMDYzXHUzMDY2XHUzMDQ0XHUzMDhCXHUzMDRCXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHJcbiAgICogQHBhcmFtIHsqfSBjaGVja0hlbGRJdGVtIFx1ODhDNVx1NTA5OVx1NEUyRFx1MzA2RVx1OTA1M1x1NTE3N1x1MzA5Mlx1ODAwM1x1NjE2RVx1MzA1OVx1MzA4QlxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgaGFzTmVnYXRpdmVTdGF0dXMoY2hlY2tIZWxkSXRlbSA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBzcGVlZERvd24gPSB0aGlzLnNwZWVkID09IDA7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAvLyBcdTMwNTlcdTMwNDRcdTMwN0ZcdTMwOTNcclxuICAgICAgdGhpcy5zdGF0dXNlcy5zbGVlcCB8fFxyXG4gICAgICAvLyBcdTMwNDJcdTMwNEZcdTMwODBcclxuICAgICAgdGhpcy5zdGF0dXNlcy5uaWdodG1hcmUgfHxcclxuICAgICAgLy8gXHUzMDg0XHUzMDUxXHUzMDY5XHJcbiAgICAgIHRoaXMuc3RhdHVzZXMuYnVybiB8fFxyXG4gICAgICAvLyBcdTMwNjlcdTMwNEZcclxuICAgICAgdGhpcy5zdGF0dXNlcy5wb2lzb24gfHxcclxuICAgICAgLy8gXHUzMDgyXHUzMDQ2XHUzMDY5XHUzMDRGXHJcbiAgICAgIHRoaXMuc3RhdHVzZXMuYmFkX3BvaXNvbiB8fFxyXG4gICAgICAvLyBcdTMwN0VcdTMwNzJcclxuICAgICAgdGhpcy5zdGF0dXNlcy5wYXJhbHlzaXMgfHxcclxuICAgICAgLy8gXHUzMDU3XHUzMDREXHUzMDc5XHUzMDY0XHVGRjFGXHUzMDdGXHUzMDg0XHUzMDc2XHUzMDg5XHUzMDhDXHUzMDVGXHVGRjFGXHJcbiAgICAgIHRoaXMuc3RhdHVzZXMuaWRlbnRpZnlpbmcgfHxcclxuICAgICAgLy8gXHUzMDUzXHUzMDkzXHUzMDg5XHUzMDkzXHJcbiAgICAgIHRoaXMuc3RhdHVzZXMuY29uZnVzaW9uIHx8XHJcbiAgICAgIC8vIFx1MzA0NFx1MzA0OFx1MzA0RFxyXG4gICAgICB0aGlzLnN0YXR1c2VzLmdhc3Ryb19hY2lkIHx8XHJcbiAgICAgIC8vIFx1MzA0OFx1MzA5M1x1MzA3RVx1MzA0RlxyXG4gICAgICB0aGlzLnN0YXR1c2VzLndoaWZmZXIgfHxcclxuICAgICAgLy8gXHUzMDdGXHUzMDRBXHUzMDY4XHUzMDU3XHUzMEUxXHUzMEFDXHUzMENEIChcdTMwRUFcdTMwRkNcdTMwQzBcdTMwRkNcdTRFRTVcdTU5MTYpXHJcbiAgICAgIChjaGVja0hlbGRJdGVtICYmICF0aGlzLmlzX2xlYWRlciAmJiB0aGlzLml0ZW1BY3RpdmUoMHhlKSkgfHxcclxuICAgICAgLy8gXHUzMDdFXHUzMDY5XHUzMDhGXHUzMDU3XHJcbiAgICAgIHRoaXMuc3RhdHVzZXMuY3Jvc3NfZXllZCB8fFxyXG4gICAgICAvLyBcdTMwREZcdTMwRTlcdTMwQUZcdTMwRUJcdTMwQTJcdTMwQTRcclxuICAgICAgdGhpcy5zdGF0dXNlcy5taXJhY2xlX2V5ZSB8fFxyXG4gICAgICAvLyBcdTMwN0ZcdTMwODRcdTMwNzZcdTMwOEJcclxuICAgICAgdGhpcy5zdGF0dXNlcy5leHBvc2VkIHx8XHJcbiAgICAgIC8vIFx1MzA2OVx1MzA5M1x1MzA1RFx1MzA0RlxyXG4gICAgICBzcGVlZERvd24gfHxcclxuICAgICAgLy8gXHUzMDVEXHUzMDZFXHU0RUQ2XHU2MEFBXHUzMDQ0XHU3MkI2XHU2MTRCXHJcbiAgICAgIHRoaXMuc3RhdHVzZXMub3RoZXJfbmVnYXRpdmVfc3RhdHVzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHUzMDREXHUzMDgyXHUzMDYzXHUzMDVGXHUzMDdFXHUzMDRDXHU2NzA5XHU1MkI5XHUzMDZBXHU3NkY4XHU2MjRCXHUzMDRCXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHJcbiAgICogQHBhcmFtIHtNb25zdGVyfSBkZWZlbmRlclxyXG4gICAqIEBwYXJhbSB7Kn0gbW92ZVR5cGVcclxuICAgKiBAcGFyYW0ge0R1bmdlb25TdGF0ZX0gZHVuZ2VvblxyXG4gICAqL1xyXG4gIHNjcmFwcHlTaG91bGRBY3RpdmF0ZShkZWZlbmRlciwgbW92ZVR5cGUsIGR1bmdlb24pIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmFiaWxpdHlBY3RpdmUoMHg1NykgJiYgLy8gXHUzMDREXHUzMDgyXHUzMDYzXHUzMDVGXHUzMDdFXHUzMDRDXHU2NzA5XHU1MkI5XHJcbiAgICAgICAgZGVmZW5kZXIudHlwZXNbaV0gPT0gZW9zLlRZUEVfR0hPU1QgJiYgLy8gXHU5NjMyXHU1RkExXHU1MDc0XHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDRDXHUzMEI0XHUzMEZDXHUzMEI5XHUzMEM4XHJcbiAgICAgICAgTWVjaGFuaWNzLnR5cGVJbmVmZmVjdGl2ZUFnYWluc3RHaG9zdChtb3ZlVHlwZSkgLy8gXHU2MjgwXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDRDXHUzMENFXHUzMEZDXHUzMERFXHUzMEVCXHUzMDRCXHU2ODNDXHU5NUQ4XHJcbiAgICAgICkge1xyXG4gICAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5zY3JhcHB5QWN0aXZhdGVkID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHUzMDUzXHUzMDZFXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMDZCXHUzMDREXHUzMDgyXHUzMDYzXHUzMDVGXHUzMDdFXHUzMDZFXHU1MkI5XHU2NzlDXHUzMDRDXHU3NjdBXHU1MkQ1XHUzMDU5XHUzMDhCXHUzMDRCXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHJcbiAgICogQHBhcmFtIHtNb25zdGVyfSBhdHRhY2tlclxyXG4gICAqIEBwYXJhbSB7Kn0gdHlwZUlkeCBcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNkVcdTMwQTRcdTMwRjNcdTMwQzdcdTMwQzNcdTMwQUZcdTMwQjkgXHUyMDNCXHUzMEJGXHUzMEE0XHUzMEQ3SURcdTMwNjdcdTMwNkZcdTMwNkFcdTMwNDRcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIGdob3N0SW1tdW5pdHlBY3RpdmUoYXR0YWNrZXIsIHR5cGVJZHgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMudHlwZXNbdHlwZUlkeF0gPT0gZW9zLlRZUEVfR0hPU1QgJiYgIWF0dGFja2VyLnN0YXR1c2VzLmV4cG9zZWQgJiYgIWF0dGFja2VyLmV4Y2x1c2l2ZUl0ZW1FZmZlY3RBY3RpdmUoMHg0NSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcdTVCRkVcdThDNjFcdTMwNkVcdTVDMDJcdTc1MjhcdTkwNTNcdTUxNzdcdTUyQjlcdTY3OUNcdTMwNENcdTY3MDlcdTUyQjlcdTMwNjdcdTMwNDJcdTMwOEJcdTMwNEJcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcclxuICAgKiBAcGFyYW0geyp9IGVmZmVjdElkXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBleGNsdXNpdmVJdGVtRWZmZWN0QWN0aXZlKGVmZmVjdElkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc19tZW1iZXIgJiYgdGhpcy5leGNsdXNpdmVfaXRlbV9lZmZlY3RfZmxhZ3NbZWZmZWN0SWRdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMDRDXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDg0XHU3Mjc5XHU2MDI3XHU0RUU1XHU1OTE2XHUzMDZFXHU4OTgxXHU1NkUwXHUzMDY3XHU2RDZFXHUzMDQ0XHUzMDY2XHUzMDQ0XHUzMDhCXHUzMDRCXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHJcbiAgICogQHBhcmFtIHsqfSBkdW5nZW9uXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBoYXNDb25kaXRpb25hbEdyb3VuZEltbXVuaXR5KGR1bmdlb24pIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSAmJiAhZHVuZ2Vvbi5ncmF2aXR5ICYmIHRoaXMuc3RhdHVzZXMubWFnbmV0X3Jpc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcdTcyNzlcdTYwMjdcdTMwNzVcdTMwODZcdTMwNDZcdTMwNENcdTY3MDlcdTUyQjlcdTMwNjdcdTMwNDJcdTMwOEJcdTMwNEJcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUYgKFx1MzA1OFx1MzA4NVx1MzA0Nlx1MzA4QVx1MzA4N1x1MzA0Rlx1NzJCNlx1NjE0Qlx1MzA5Mlx1ODAwM1x1NjE2RSlcclxuICAgKiBAcGFyYW0ge0R1bmdlb25TdGF0ZX0gZHVuZ2VvblxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgbGV2aXRhdGVBY3RpdmUoZHVuZ2Vvbikge1xyXG4gICAgcmV0dXJuICFkdW5nZW9uLmdyYXZpdHkgJiYgdGhpcy5hYmlsaXR5QWN0aXZlKDB4MzcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDRDXHU1QkZFXHU4QzYxXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDY4XHU0RTAwXHU4MUY0XHUzMDU3XHUzMDY2XHUzMDQ0XHUzMDhCXHUzMDRCXHJcbiAgICogQHBhcmFtIHsqfSB0eXBlSWRcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIGlzVHlwZSh0eXBlSWQpIHtcclxuICAgIHJldHVybiB0eXBlSWQgIT0gZW9zLlRZUEVfTk9ORSAmJiAodGhpcy50eXBlc1swXSA9PSB0eXBlSWQgfHwgdGhpcy50eXBlc1sxXSA9PSB0eXBlSWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHU2MjgwXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDkyXHU1M0Q2XHU1Rjk3IChcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNcdTMwNkVcdTcyNzlcdTYwMjdcdTMwRkJcdTMwQjlcdTMwQzZcdTMwRkNcdTMwQkZcdTMwQjlcdTMwNkVcdTVGNzFcdTk3RkZcdTMwOTJcdTUzRDdcdTMwNTFcdTMwOEIpXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1vdmVJZFxyXG4gICAqIEBwYXJhbSB7RHVuZ2VvblN0YXRlfSBkdW5nZW9uXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBnZXRNb3ZlVHlwZShtb3ZlSWQsIGR1bmdlb24pIHtcclxuICAgIC8vIFx1MzBDRVx1MzBGQ1x1MzBERVx1MzBFQlx1MzBCOVx1MzBBRFx1MzBGMyAtPiBcdTMwQ0VcdTMwRkNcdTMwREVcdTMwRUJcclxuICAgIGlmICghTWVjaGFuaWNzLmlzUmVndWxhckF0dGFja09yUHJvamVjdGlsZShtb3ZlSWQpICYmIHRoaXMuaXNWYWxpZCgpICYmIHRoaXMuYWJpbGl0eUFjdGl2ZSgweDZiKSkge1xyXG4gICAgICByZXR1cm4gZW9zLlRZUEVfTk9STUFMO1xyXG4gICAgfVxyXG4gICAgLy8gXHUzMDgxXHUzMDU2XHUzMDgxXHUzMDhCXHUzMEQxXHUzMEVGXHUzMEZDXHJcbiAgICBpZiAobW92ZUlkID09IDB4MTQ0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhpZGRlbl9wb3dlcl90eXBlO1xyXG4gICAgfVxyXG4gICAgLy8gXHUzMDU3XHUzMDVDXHUzMDkzXHUzMDZFXHUzMDgxXHUzMDUwXHUzMDdGXHJcbiAgICBpZiAobW92ZUlkID09IDB4MWQ3KSB7XHJcbiAgICAgIGNvbnN0IG5nSW5mbyA9IHRoaXMubmF0dXJhbEdpZnRJbmZvKCk7XHJcbiAgICAgIGlmIChuZ0luZm8pIHtcclxuICAgICAgICByZXR1cm4gbmdJbmZvLnR5cGVJZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gXHUzMEE2XHUzMEE3XHUzMEI2XHUzMEZDXHUzMERDXHUzMEZDXHUzMEVCXHJcbiAgICBpZiAobW92ZUlkID09IDB4MWYpIHtcclxuICAgICAgcmV0dXJuIHRoaXMud2VhdGhlckJhbGxUeXBlKGR1bmdlb24pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1lY2hhbmljcy5nZXRNb3ZlVHlwZShtb3ZlSWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHU2MjgwXHUzMDZFXHU1QTAxXHU1MjlCXHUzMDkyXHU1M0Q2XHU1Rjk3IChcdTU4OTdcdTUyQTBcdTUyMDZcdTMwOTJcdTgwMDNcdTYxNkUpXHJcbiAgICogQHBhcmFtIHtNb3ZlfSBtb3ZlXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBnZXRNb3ZlUG93ZXIobW92ZSkge1xyXG4gICAgLy8gXHUzMDgxXHUzMDU2XHUzMDgxXHUzMDhCXHUzMEQxXHUzMEVGXHUzMEZDXHJcbiAgICBpZiAobW92ZS5pZCA9PSAweDE0NCkge1xyXG4gICAgICByZXR1cm4gbW92ZS5naW5zZW5nICsgdGhpcy5oaWRkZW5fcG93ZXJfYmFzZV9wb3dlcjtcclxuICAgIH1cclxuICAgIGxldCBwb3dlciA9IG1vdmUuZ2luc2VuZyArIE1lY2hhbmljcy5nZXRNb3ZlQmFzZVBvd2VyKG1vdmUuaWQsIG1vdmUudGltZURhcmtuZXNzKTtcclxuICAgIC8vIFx1MzA1OFx1MzA0Rlx1MzA0Nlx1MzA2RVx1MzBBQVx1MzBGQ1x1MzBENiAtPiBcdTVBMDFcdTUyOUJ4MlxyXG4gICAgaWYgKHRoaXMuaXRlbUFjdGl2ZSgweDJiKSkgcG93ZXIgKj0gMjtcclxuICAgIHJldHVybiBwb3dlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFx1NjRFQ1x1NEYzQ1x1NzY4NFx1MzA2QVx1NzEyMVx1NjU3NVx1NzJCNlx1NjE0Qlx1MzA2Qlx1MzA2QVx1MzA4Qlx1NkU5Q1x1MzA4MVx1NjI4MFx1MzA5Mlx1MzBBRFx1MzBFM1x1MzBGM1x1MzBCQlx1MzBFQlx1MzA1NVx1MzA1Qlx1MzA4Qlx1MzA0Qlx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlxyXG4gICAqIEBwYXJhbSB7Kn0gbW92ZUlkXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICB0d29UdXJuTW92ZUZvcmNlZE1pc3MobW92ZUlkKSB7XHJcbiAgICAvLyBcdTMwNURcdTMwODlcdTMwOTJcdTMwNjhcdTMwNzYsIFx1MzA2OFx1MzA3M1x1MzA2Rlx1MzA2RFx1MzA4QiAtPiBcdTMwQjlcdTMwQUJcdTMwQTRcdTMwQTJcdTMwQzNcdTMwRDFcdTMwRkMsIFx1MzA1Rlx1MzA2NFx1MzA3RVx1MzA0RCwgXHUzMDRCXHUzMDVDXHUzMDRBXHUzMDUzXHUzMDU3LCBcdTMwNEJcdTMwN0ZcdTMwNkFcdTMwOEEgXHUzMDY3XHU2QjYyXHUzMDdFXHUzMDhCXHJcbiAgICBpZiAodGhpcy5zdGF0dXNlcy5mbHlpbmcgfHwgdGhpcy5zdGF0dXNlcy5ib3VuY2luZykge1xyXG4gICAgICByZXR1cm4gbW92ZUlkICE9IDB4ODggJiYgbW92ZUlkICE9IDB4YTIgJiYgbW92ZUlkICE9IDB4MzkgJiYgbW92ZUlkICE9IDB4NDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnN0YXR1c2VzLmRpdmluZyAmJiAhdGhpcy5zdGF0dXNlcy5kaWdnaW5nICYmICF0aGlzLnN0YXR1c2VzLnNoYWRvd19mb3JjZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyBcdTMwQzBcdTMwQTRcdTMwRDNcdTMwRjNcdTMwQjAgLT4gXHUzMDQ2XHUzMDVBXHUzMDU3XHUzMDRBLCBcdTMwNkFcdTMwN0ZcdTMwNkVcdTMwOEEgXHUzMDY3XHU2QjYyXHUzMDdFXHUzMDhCXHJcbiAgICBpZiAodGhpcy5zdGF0dXNlcy5kaXZpbmcgJiYgKG1vdmVJZCA9PSAweDIwIHx8IG1vdmVJZCA9PSAweGRiKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyBcdTMwNDJcdTMwNkFcdTMwOTJcdTMwN0JcdTMwOEIgLT4gXHUzMDU4XHUzMDU3XHUzMDkzLCBcdTMwREVcdTMwQjBcdTMwQ0JcdTMwQzFcdTMwRTVcdTMwRkNcdTMwQzkgXHUzMDY3XHU2QjYyXHUzMDdFXHUzMDhCXHJcbiAgICBlbHNlIGlmICh0aGlzLnN0YXR1c2VzLmRpZ2dpbmcpIHtcclxuICAgICAgaWYgKG1vdmVJZCA9PSAweDc2IHx8IG1vdmVJZCA9PSAweDEyOCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcdTMwNTdcdTMwNUNcdTMwOTNcdTMwNkVcdTMwODFcdTMwNTBcdTMwN0ZcdTMwNkVcdTgwRkRcdTUyOUJcdTMwOTJcdTUzRDZcdTVGOTdcdTMwNTlcdTMwOEJcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIG5hdHVyYWxHaWZ0SW5mbygpIHtcclxuICAgIGlmICghdGhpcy5pc01vbnN0ZXIoKSB8fCB0aGlzLmhlbGRJdGVtLmlkID09IDApIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1lY2hhbmljcy5OQVRVUkFMX0dJRlRfSVRFTV9UQUJMRS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBuZ0luZm8gPSBNZWNoYW5pY3MuTkFUVVJBTF9HSUZUX0lURU1fVEFCTEVbaV07XHJcbiAgICAgIGlmICh0aGlzLmhlbGRJdGVtID09IG5nSW5mby5pdGVtSWQpIHtcclxuICAgICAgICByZXR1cm4gbmdJbmZvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFx1MzBBNlx1MzBBN1x1MzBCNlx1MzBGQ1x1MzBEQ1x1MzBGQ1x1MzBFQlx1MzA2RVx1MzBCRlx1MzBBNFx1MzBEN1x1MzA5Mlx1NTNENlx1NUY5N1x1MzA1OVx1MzA4QlxyXG4gICAqIEBwYXJhbSB7RHVuZ2VvblN0YXRlfSBkdW5nZW9uXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICB3ZWF0aGVyQmFsbFR5cGUoZHVuZ2Vvbikge1xyXG4gICAgcmV0dXJuIE1lY2hhbmljcy5XRUFUSEVSX0JBTExfVFlQRV9UQUJMRVt0aGlzLnBlcmNlaXZlZFdlYXRoZXIoZHVuZ2VvbildO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMDZFXHU1OTI3XHUzMDREXHUzMDU1XHUzMDkyXHU1M0Q2XHU1Rjk3XHUzMDU5XHUzMDhCIChcdTMwNzJcdTMwOENcdTMwNDRcdTMwNjBcdTMwN0VcdTc1MjgpXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBnZXRTaXplKCkge1xyXG4gICAgaWYgKCFQb2tlbW9uRGF0YSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdQb2tlbW9uRGF0YSBub3QgZm91bmQnKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBva2Vtb25EYXRhW3RoaXMuaWRdLlNpemU7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHU3MkI2XHU2MTRCXHU3NTcwXHU1RTM4XHJcbiAqL1xyXG5jbGFzcyBTdGF0dXNlcyB7XHJcbiAgLyogXHU3NzIwXHUzMDhBICovXHJcbiAgc2xlZXAgPSBmYWxzZTsgLy8gXHUzMDU5XHUzMDQ0XHUzMDdGXHUzMDkzXHJcbiAgbmlnaHRtYXJlID0gZmFsc2U7IC8vIFx1MzA0Mlx1MzA0Rlx1MzA4MFxyXG4gIG5hcHBpbmcgPSBmYWxzZTsgLy8gXHUzMDQyXHUzMDRGXHUzMDczXHJcblxyXG4gIC8qIFx1MzBCMVx1MzBBQyAqL1xyXG4gIGJ1cm4gPSBmYWxzZTsgLy8gXHUzMDg0XHUzMDUxXHUzMDY5XHJcbiAgcG9pc29uID0gZmFsc2U7IC8vIFx1MzA2OVx1MzA0RlxyXG4gIGJhZF9wb2lzb24gPSBmYWxzZTsgLy8gXHUzMDgyXHUzMDQ2XHUzMDY5XHUzMDRGXHJcbiAgcGFyYWx5c2lzID0gZmFsc2U7IC8vIFx1MzA3RVx1MzA3MlxyXG4gIGlkZW50aWZ5aW5nID0gZmFsc2U7IC8vIFx1MzA1N1x1MzA0RFx1MzA3OVx1MzA2NCAoPylcclxuXHJcbiAgLyogXHU1RkMzICovXHJcbiAgY29uZnVzaW9uID0gZmFsc2U7IC8vIFx1MzA1M1x1MzA5M1x1MzA4OVx1MzA5M1xyXG5cclxuICAvKiBcdTZFOUNcdTMwODFcdTYyODAgKi9cclxuICBza3VsbF9iYXNoID0gZmFsc2U7IC8vIFx1MzBFRFx1MzBCMVx1MzBDM1x1MzBDOFx1MzA1QVx1MzA2NFx1MzA0RFxyXG4gIGZseWluZyA9IGZhbHNlOyAvLyBcdTMwNURcdTMwODlcdTMwOTJcdTMwNjhcdTMwNzZcclxuICBib3VuY2luZyA9IGZhbHNlOyAvLyBcdTMwNjhcdTMwNzNcdTMwNkZcdTMwNkRcdTMwOEJcclxuICBkaXZpbmcgPSBmYWxzZTsgLy8gXHUzMEMwXHUzMEE0XHUzMEQzXHUzMEYzXHUzMEIwXHJcbiAgZGlnZ2luZyA9IGZhbHNlOyAvLyBcdTMwNDJcdTMwNkFcdTMwOTJcdTMwN0JcdTMwOEJcclxuICBjaGFyZ2UgPSBmYWxzZTsgLy8gXHUzMDU4XHUzMDg1XHUzMDQ2XHUzMDY3XHUzMDkzXHJcbiAgc2hhZG93X2ZvcmNlID0gZmFsc2U7IC8vIFx1MzBCN1x1MzBFM1x1MzBDOVx1MzBGQ1x1MzBDMFx1MzBBNFx1MzBENlxyXG5cclxuICAvKiBcdTUzRDdcdTMwNTFcdThFQUIgKi9cclxuICByZWZsZWN0ID0gZmFsc2U7IC8vIFx1MzBFQVx1MzBENVx1MzBFQ1x1MzBBRlx1MzBCRlx1MzBGQ1xyXG4gIGxpZ2h0X3NjcmVlbiA9IGZhbHNlOyAvLyBcdTMwNzJcdTMwNEJcdTMwOEFcdTMwNkVcdTMwNEJcdTMwNzlcclxuICBsdWNreV9jaGFudCA9IGZhbHNlOyAvLyBcdTMwNEFcdTMwN0VcdTMwNThcdTMwNkFcdTMwNDRcclxuXHJcbiAgLyogXHU4RDg1XHU4MEZEXHU1MjlCICovXHJcbiAgZ2FzdHJvX2FjaWQgPSBmYWxzZTsgLy8gXHUzMDQ0XHUzMDQ4XHUzMDREXHJcblxyXG4gIC8qIFx1NTQ3RFx1NEUyRCAqL1xyXG4gIHN1cmVfc2hvdCA9IGZhbHNlOyAvLyBcdTMwNzJcdTMwNjNcdTMwNjFcdTMwODVcdTMwNDZcclxuICB3aGlmZmVyID0gZmFsc2U7IC8vIFx1MzA0OFx1MzA5M1x1MzA3RVx1MzA0RlxyXG4gIGZvY3VzX2VuZXJneSA9IGZhbHNlOyAvLyBcdTMwNERcdTMwNDJcdTMwNDRcdTMwNjBcdTMwODFcclxuXHJcbiAgLyogXHU4OTk2XHU4OTlBICovXHJcbiAgY3Jvc3NfZXllZCA9IGZhbHNlOyAvLyBcdTMwN0VcdTMwNjlcdTMwOEZcdTMwNTdcclxuXHJcbiAgLyogXHUzMERGXHUzMEU5XHUzMEFGXHUzMEVCXHUzMEEyXHUzMEE0ICovXHJcbiAgbWlyYWNsZV9leWUgPSBmYWxzZTsgLy8gXHUzMERGXHUzMEU5XHUzMEFGXHUzMEVCXHUzMEEyXHUzMEE0XHJcblxyXG4gIC8qIFx1MzA2N1x1MzA5M1x1MzA1OFx1MzA3NVx1MzA4Nlx1MzA0NiAqL1xyXG4gIG1hZ25ldF9yaXNlID0gZmFsc2U7IC8vIFx1MzA2N1x1MzA5M1x1MzA1OFx1MzA3NVx1MzA4Nlx1MzA0NlxyXG5cclxuICAvKiBcdTMwN0ZcdTMwODRcdTMwNzZcdTMwOEIgKi9cclxuICBleHBvc2VkID0gZmFsc2U7IC8vIFx1MzA3Rlx1MzA4NFx1MzA3Nlx1MzA4QlxyXG5cclxuICAvLyBcdTc5RkJcdTUyRDVcdTkwMUZcdTVFQTZcclxuICAvLyAwPVx1MzA2OVx1MzA5M1x1MzA1RFx1MzA0RiwgMT1cdTkwMUFcdTVFMzgsIDI9XHUzMDcwXHUzMDQ0XHUzMDVEXHUzMDRGLCAzPVx1MzA1NVx1MzA5M1x1MzA3MFx1MzA0NFx1MzA1RFx1MzA0RiwgND1cdTMwODhcdTMwOTNcdTMwNzBcdTMwNDRcdTMwNURcdTMwNEZcclxuICBzcGVlZCA9IDE7XHJcblxyXG4gIC8vIFx1MzA1Rlx1MzA0Rlx1MzA4Rlx1MzA0OFx1MzA4Qlx1NTZERVx1NjU3MFxyXG4gIHN0b2NrcGlsZSA9IDA7XHJcblxyXG4gIC8qIFx1MzA1RFx1MzA2RVx1NEVENlx1NjBBQVx1MzA0NFx1NzJCNlx1NjE0QiAqL1xyXG4gIG90aGVyX25lZ2F0aXZlX3N0YXR1cyA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBcdTY3MDlcdTUyQjlcdTYwMjdcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUYgKFx1NzJCNlx1NjE0Qlx1NzU3MFx1NUUzOFx1MzBCMFx1MzBFQlx1MzBGQ1x1MzBENywgXHU3OUZCXHU1MkQ1XHU5MDFGXHU1RUE2XHUzMEZCXHUzMDVGXHUzMDRGXHUzMDhGXHUzMDQ4XHUzMDhCXHUzMDZFXHU0RTBCXHU5NjUwXHU0RTBBXHU5NjUwKVxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgaXNWYWxpZCgpIHtcclxuICAgIGlmICh0aGlzLnNsZWVwICsgdGhpcy5uaWdodG1hcmUgKyB0aGlzLm5hcHBpbmcgPiAxKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJ1cm4gKyB0aGlzLnBvaXNvbiArIHRoaXMuYmFkX3BvaXNvbiArIHRoaXMucGFyYWx5c2lzICsgdGhpcy5pZGVudGlmeWluZyA+IDEpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucmVmbGVjdCArIHRoaXMubGlnaHRfc2NyZWVuICsgdGhpcy5sdWNreV9jaGFudCA+IDEpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3VyZV9zaG90ICsgdGhpcy53aGlmZmVyICsgdGhpcy5mb2N1c19lbmVyZ3kgPiAxKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNwZWVkIDwgMCB8fCB0aGlzLnNwZWVkID4gNCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdG9ja3BpbGUgPiAzKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBDMFx1MzBGM1x1MzBCOFx1MzBFN1x1MzBGM1x1NzUxRlx1NjIxMFx1NjBDNVx1NTgzMVxyXG4gKi9cclxuY2xhc3MgRHVuZ2VvbkdlbmVyYXRpb25JbmZvIHtcclxuICBmaXhlZFJvb21JZCA9IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTMwQzBcdTMwRjNcdTMwQjhcdTMwRTdcdTMwRjNcdTMwNkVcdTcyQjZcdTYxNEJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBEdW5nZW9uU3RhdGUge1xyXG4gIHdlYXRoZXIgPSAwOyAvLyBcdTU5MjlcdTZDMTdcclxuICBtdWRfc3BvcnQgPSBmYWxzZTsgLy8gXHUzMDY5XHUzMDhEXHUzMDQyXHUzMDVEXHUzMDczXHJcbiAgd2F0ZXJfc3BvcnQgPSBmYWxzZTsgLy8gXHUzMDdGXHUzMDVBXHUzMDQyXHUzMDVEXHUzMDczXHJcbiAgZ3Jhdml0eSA9IGZhbHNlOyAvLyBcdTMwNThcdTMwODVcdTMwNDZcdTMwOEFcdTMwODdcdTMwNEZcclxuICBwbHVzID0gW2ZhbHNlLCBmYWxzZV07IC8vIFx1MzBEN1x1MzBFOVx1MzBCOSAoXHU2NTc1XHU1MDc0LCBcdTMwQzFcdTMwRkNcdTMwRTBcdTUwNzQpXHJcbiAgbWludXMgPSBbZmFsc2UsIGZhbHNlXTsgLy8gXHUzMERFXHUzMEE0XHUzMENBXHUzMEI5IChcdTY1NzVcdTUwNzQsIFx1MzBDMVx1MzBGQ1x1MzBFMFx1NTA3NClcclxuICBpcV9kaXNhYmxlZCA9IGZhbHNlOyAvLyBcdTMwNEJcdTMwNTdcdTMwNTNcdTMwNTVcdTcxMjFcdTUyQjlcclxuXHJcbiAgZ2VuSW5mbyA9IG5ldyBEdW5nZW9uR2VuZXJhdGlvbkluZm8oKTtcclxuICBkYW1hZ2VDYWxjID0gbmV3IERhbWFnZUNhbGNEaWFnKCk7XHJcblxyXG4gIHJuZyA9IG5ldyBEdW5nZW9uUk5HKCk7XHJcbiAgb3RoZXJNb25zdGVycyA9IG5ldyBNb25zdGVyKCk7XHJcblxyXG4gIC8vIFx1NEVFNVx1NEUwQlx1MzBBQVx1MzBFQVx1MzBCOFx1MzBDQVx1MzBFQlxyXG4gIGRhbWFnZURldGFpbExvZyA9IG5ldyBEYW1hZ2VEZXRhaWxMb2coKTtcclxuICByZWdpb25fanAgPSB0cnVlOyAvLyBcdTY1RTVcdTY3MkNcdTcyNDggKFx1MzBBRVx1MzBFOVx1MzBDNlx1MzBBM1x1MzBDQVx1MzBENVx1MzBBOVx1MzBFQlx1MzBFMFx1ODhEQ1x1NkI2M1x1MzBEMFx1MzBCMClcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1MzBDN1x1MzBGQ1x1MzBCRiAocG1kc2t5LWRlYnVnOiBkYW1hZ2VfZGF0YSlcclxuICovXHJcbmV4cG9ydCBjbGFzcyBEYW1hZ2VEYXRhIHtcclxuICBkYW1hZ2UgPSAwOyAvLyBcdTYyODBcdTMwNkVcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcclxuICBkYW1hZ2VNZXNzYWdlID0gMDtcclxuICB0eXBlTWF0Y2h1cCA9IDI7IC8vIFx1MzBCRlx1MzBBNFx1MzBEN1x1NzZGOFx1NjAyN1x1NTAyNCAoMD1cdTUyQjlcdTY3OUNcdTcxMjFcdTMwNDQsIDE9XHU0RUNBXHU0RTAwXHUzMDY0LCAyPVx1NjY2RVx1OTAxQSwgMz1cdTYyOUNcdTdGQTQpXHJcbiAgdHlwZSA9IDA7IC8vIFx1NjI4MFx1MzA2RVx1MzBCRlx1MzBBNFx1MzBEN1xyXG4gIGNhdGVnb3J5ID0gMDsgLy8gXHU2MjgwXHUzMDZFXHU1MjA2XHU5ODVFXHJcblxyXG4gIC8vIFx1NjAyNVx1NjI0MFx1MzA2Qlx1NUY1M1x1MzA1Rlx1MzA2M1x1MzA1Rlx1MzA0QlxyXG4gIGNyaXRpY2FsSGl0ID0gZmFsc2U7XHJcbiAgLy8gXHUzMDgyXHUzMDg5XHUzMDQ0XHUzMDczLCBcdTMwNzVcdTMwODZcdTMwNDYsIFx1MzA2N1x1MzA5M1x1MzA1OFx1MzA3NVx1MzA4Nlx1MzA0Nlx1MzA2Qlx1MzA4OFx1MzA2M1x1MzA2Nlx1NzEyMVx1NTJCOVx1NTMxNlx1MzA1N1x1MzA1Rlx1MzA0QlxyXG4gIGZ1bGxUeXBlSW1tdW5pdHkgPSBmYWxzZTtcclxuICAvLyBcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdTMwOTJcdTcxMjFcdTUyQjlcdTUzMTZcdTMwNTdcdTMwNUZcdTMwNEJcclxuICBub0RhbWFnZSA9IGZhbHNlO1xyXG5cclxuICAvLyBcdTU2REVcdTVGQTlcdTMwNTdcdTMwNUZcdTMwNEIgKFx1MzBDNFx1MzBGQ1x1MzBFQlx1NEUwQVx1MzA2N1x1MzA2Rlx1NjcyQVx1NEY3Rlx1NzUyOClcclxuICBoZWFsZWQgPSBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1OEEwOFx1N0I5N1x1MzBDN1x1MzBGQ1x1MzBCRiAocG1kc2t5LWRlYnVnOiBkYW1hZ2VfY2FsY19kaWFnKVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERhbWFnZUNhbGNEaWFnIHtcclxuICBtb3ZlVHlwZSA9IDA7IC8vIFx1NjI4MFx1MzA2RVx1MzBCRlx1MzBBNFx1MzBEN1xyXG4gIG1vdmVDYXRlZ29yeSA9IDA7IC8vIFx1NjI4MFx1MzA2RVx1NTIwNlx1OTg1RVxyXG4gIG1vdmVJbmRpdlR5cGVNYXRjaHVwcyA9IFswLCAwXTsgLy8gXHUzMEJGXHUzMEE0XHUzMEQ3XHU3NkY4XHU2MDI3XHJcbiAgb2ZmZW5zaXZlU3RhdFN0YWdlID0gMTA7XHJcbiAgZGVmZW5zaXZlU3RhdFN0YWdlID0gMTA7XHJcbiAgb2ZmZW5zaXZlU3RhdCA9IDE7XHJcbiAgZGVmZW5zaXZlU3RhdCA9IDE7XHJcbiAgZmxhc2hGaXJlQm9vc3QgPSAwOyAvLyBcdTMwODJcdTMwODlcdTMwNDRcdTMwNzNcdTU2REVcdTY1NzAgKDBcdUZGNUUyKVxyXG5cclxuICAvLyBcdThBMDhcdTdCOTdcdTVGOENcdTMwNkVcdTY1M0JcdTY0ODNcdTMwQjlcdTMwQzZcdTMwRkNcdTMwQkZcdTMwQjlcdTUwMjRcclxuICBvZmZlbnNlQ2FsYyA9IDA7XHJcbiAgLy8gXHU4QTA4XHU3Qjk3XHU1RjhDXHUzMDZFXHU5NjMyXHU1RkExXHUzMEI5XHUzMEM2XHUzMEZDXHUzMEJGXHUzMEI5XHU1MDI0XHJcbiAgZGVmZW5zZUNhbGMgPSAwO1xyXG4gIC8vIFx1NjUzQlx1NjQ4M1x1NTA3NFx1MzA2RVx1MzBFQ1x1MzBEOVx1MzBFQlxyXG4gIGF0dGFja2VyTGV2ZWwgPSAwO1xyXG4gIC8vIEFUXHJcbiAgZGFtYWdlQ2FsY0F0ID0gMDtcclxuICAvLyBERUZcclxuICBkYW1hZ2VDYWxjRGVmID0gMDtcclxuICAvLyBGTFZcclxuICBkYW1hZ2VDYWxjRmx2ID0gMDtcclxuICAvLyBcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdThBMDhcdTdCOTdcdTdENTBcdTY3OUNcclxuICBkYW1hZ2VDYWxjID0gMDtcclxuICBkYW1hZ2VDYWxjQmFzZSA9IDA7XHJcbiAgZGFtYWdlQ2FsY1JhbmRvbU11bHRQY3QgPSAwO1xyXG4gIHN0YXRpY0RhbWFnZU11bHQgPSAwO1xyXG4gIC8vIFx1OTA1M1x1NTE3N1x1MzA2Qlx1MzA4OFx1MzA4Qlx1NjUzQlx1NjQ4M1x1MzA2RVx1NEUwQVx1NjYwN1x1OTFDRlxyXG4gIGl0ZW1BdGtNb2RpZmllciA9IDA7XHJcbiAgLy8gXHU5MDUzXHU1MTc3XHUzMDZCXHUzMDg4XHUzMDhCXHU3Mjc5XHU2NTNCXHUzMDZFXHU0RTBBXHU2NjA3XHU5MUNGXHJcbiAgaXRlbVNwQXRrTW9kaWZpZXIgPSAwO1xyXG4gIC8vIFx1NzI3OVx1NjAyN1x1MzA2Qlx1MzA4OFx1MzA4Qlx1NjUzQlx1NjQ4M1x1N0NGQlx1MzBFOVx1MzBGM1x1MzBBRlx1MzA2RVx1NEUwQVx1NjYwN1x1OTFDRlxyXG4gIGFiaWxpdHlPZmZlbnNlTW9kaWZpZXIgPSAwO1xyXG4gIC8vIFx1NzI3OVx1NjAyN1x1MzA2Qlx1MzA4OFx1MzA4Qlx1OTYzMlx1NUZBMVx1N0NGQlx1MzBFOVx1MzBGM1x1MzBBRlx1MzA2RVx1NEUwQVx1NjYwN1x1OTFDRlxyXG4gIGFiaWxpdHlEZWZlbnNlTW9kaWZpZXIgPSAwO1xyXG4gIC8vIFx1MzA0Qlx1MzA1N1x1MzA1M1x1MzA1NVx1MzA2Qlx1MzA4OFx1MzA4Qlx1NjUzQlx1NjQ4M1x1N0NGQlx1MzBFOVx1MzBGM1x1MzBBRlx1MzA2RVx1NEUwQVx1NjYwN1x1OTFDRlxyXG4gIGlxU2tpbGxPZmZlbnNlTW9kaWZpZXIgPSAwO1xyXG4gIC8vIFx1MzA0Qlx1MzA1N1x1MzA1M1x1MzA1NVx1MzA2Qlx1MzA4OFx1MzA4Qlx1OTYzMlx1NUZBMVx1N0NGQlx1MzBFOVx1MzBGM1x1MzBBRlx1MzA2RVx1NEUwQVx1NjYwN1x1OTFDRlxyXG4gIGlxU2tpbGxEZWZlbnNlTW9kaWZpZXIgPSAwO1xyXG4gIC8vIFx1OTA1M1x1NTE3N1x1MzA2Qlx1MzA4OFx1MzA4Qlx1OTYzMlx1NUZBMVx1MzA2RVx1NEUwQVx1NjYwN1x1OTFDRlxyXG4gIGl0ZW1EZWZNb2RpZmllciA9IDA7XHJcbiAgLy8gXHU5MDUzXHU1MTc3XHUzMDZCXHUzMDg4XHUzMDhCXHU3Mjc5XHU5NjMyXHUzMDZFXHU0RTBBXHU2NjA3XHU5MUNGXHJcbiAgaXRlbVNwRGVmTW9kaWZpZXIgPSAwO1xyXG5cclxuICAvLyBcdTMwRDRcdTMwRjNcdTMwNjhcdTMwRUNcdTMwRjNcdTMwQkEsIFx1MzA2RFx1MzA4OVx1MzA0NFx1MzA0Nlx1MzA2MVx1MzA2N1x1NjAyNVx1NjI0MFx1NzM4N1x1MzA5Mlx1NEUwQVx1MzA1Mlx1MzA2Nlx1MzA0NFx1MzA4Qlx1MzA0QlxyXG4gIHNjb3BlTGVuc09yU2hhcnBzaG9vdGVyQWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgLy8gXHUzMDZEXHUzMDg5XHUzMDhGXHUzMDhDXHUzMENGXHUzMEMxXHUzMERFXHUzMEFEXHUzMDY3XHU2MDI1XHU2MjQwXHU3Mzg3XHUzMDkyXHU0RTBBXHUzMDUyXHUzMDY2XHUzMDQ0XHUzMDhCXHUzMDRCXHJcbiAgcGF0c3lCYW5kQWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgLy8gXHUzMEVBXHUzMEQ1XHUzMEVDXHUzMEFGXHUzMEJGXHUzMEZDLCBcdTMwQkZcdTMwQTRcdTMwRTBcdTMwQjdcdTMwRkNcdTMwRUJcdTMwQzlcdTMwNjdcdTcyNjlcdTc0MDZcdTYyODBcdTMwOTJcdTUzNEFcdTZFMUJcdTMwNTdcdTMwNjZcdTMwNDRcdTMwOEJcdTMwNEJcclxuICBoYWxmUGh5c2ljYWxEYW1hZ2VBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAvLyBcdTMwNzJcdTMwNEJcdTMwOEFcdTMwNkVcdTMwNEJcdTMwNzksIFx1MzA3Rlx1MzA1QVx1MzA2RVx1MzA2Rlx1MzA1NFx1MzA4RFx1MzA4Mlx1MzA2N1x1NzI3OVx1NkI4QVx1NjI4MFx1MzA5Mlx1NTM0QVx1NkUxQlx1MzA1N1x1MzA2Nlx1MzA0NFx1MzA4Qlx1MzA0QlxyXG4gIGhhbGZTcGVjaWFsRGFtYWdlQWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgLy8gXHU2MDI1XHU2MjQwXHU3Mzg3XHUzMDRDXHU2NzAwXHU1OTI3XHUzMDdFXHUzMDY3XHU0RTBBXHU2NjA3XHUzMDU3XHUzMDY2XHUzMDQ0XHUzMDhCXHUzMDRCXHJcbiAgZm9jdXNFbmVyZ3lBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAvLyBcdTMwNDJcdTMwNDRcdTMwNTdcdTMwODdcdTMwNDZcdTMwNzBcdTMwNjRcdTMwNTBcdTMwOTNcdTMwNkVcdTUyQjlcdTY3OUNcdTMwNENcdTc2N0FcdTUyRDVcdTMwNTdcdTMwNjZcdTMwNDRcdTMwOEJcdTMwNEIgKFx1NUYzMVx1NzBCOVx1NjY0Mlx1NjAyNVx1NjI0MDQwJSlcclxuICB0eXBlQWR2YW50YWdlTWFzdGVyQWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgLy8gXHUzMENFXHUzMEZDXHUzMERFXHUzMEVCXHUzMEJGXHUzMEE0XHUzMEQ3XHU0RUU1XHU1OTE2XHUzMDZFXHU2MjgwXHUzMDRDXHUzMDRGXHUzMDgyXHUzMDhBXHUzMDZFXHU1RjcxXHU5N0ZGXHUzMDkyXHU1M0Q3XHUzMDUxXHUzMDY2XHUzMDQ0XHUzMDhCXHUzMDRCXHJcbiAgY2xvdWR5RHJvcEFjdGl2YXRlZCA9IGZhbHNlO1xyXG4gIC8vIFx1NzA4RSwgXHU2QzM0XHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDZFXHU2MjgwXHUzMDRDXHUzMDQyXHUzMDgxXHUzMDZFXHU1RjcxXHU5N0ZGXHUzMDkyXHU1M0Q3XHUzMDUxXHUzMDY2XHUzMDQ0XHUzMDhCXHUzMDRCXHJcbiAgcmFpbk11bHRpcGxpZXJBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAvLyBcdTcwOEUsIFx1NkMzNFx1MzBCRlx1MzBBNFx1MzBEN1x1MzA2RVx1NjI4MFx1MzA0Q1x1MzA3Mlx1MzA1Nlx1MzA1N1x1MzA0Q1x1MzA2NFx1MzA4OFx1MzA0NFx1MzA2RVx1NUY3MVx1OTdGRlx1MzA5Mlx1NTNEN1x1MzA1MVx1MzA2Nlx1MzA0NFx1MzA4Qlx1MzA0QlxyXG4gIHN1bm55TXVsdGlwbGllckFjdGl2YXRlZCA9IGZhbHNlO1xyXG4gIC8vIFx1NzA4RVx1MzBCRlx1MzBBNFx1MzBEN1x1MzA2RVx1NjI4MFx1MzA0Q1x1MzA0Mlx1MzA2NFx1MzA0NFx1MzA1N1x1MzA3Q1x1MzA0NiwgXHUzMDVGXHUzMDQ0XHUzMDZEXHUzMDY0XHUzMDZFXHU1RjcxXHU5N0ZGXHUzMDkyXHU1M0Q3XHUzMDUxXHUzMDY2XHUzMDQ0XHUzMDhCXHUzMDRCXHJcbiAgZmlyZU1vdmVBYmlsaXR5RHJvcEFjdGl2YXRlZCA9IGZhbHNlO1xyXG4gIC8vIFx1MzA4Mlx1MzA4OVx1MzA0NFx1MzA3M1x1MzA2RVx1NTJCOVx1Njc5Q1x1MzA2N1x1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1MzA5Mlx1NzEyMVx1NTJCOVx1NTMxNlx1MzA1N1x1MzA1Rlx1MzA0QlxyXG4gIGZsYXNoRmlyZUFjdGl2YXRlZCA9IGZhbHNlO1xyXG4gIC8vIFx1MzA3NVx1MzA4Nlx1MzA0Nlx1MzA2RVx1NTJCOVx1Njc5Q1x1MzA2N1x1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1MzA5Mlx1NzEyMVx1NTJCOVx1NTMxNlx1MzA1N1x1MzA1Rlx1MzA0QlxyXG4gIGxldml0YXRlQWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgLy8gXHUzMDUyXHUzMDREXHUzMDhBXHUzMDg1XHUzMDQ2XHUzMDZFXHU1MkI5XHU2NzlDXHUzMDY3XHU2QzM0XHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDZFXHU2MjgwXHUzMDRDXHU1RjM3XHU1MzE2XHUzMDU1XHUzMDhDXHUzMDVGXHUzMDRCXHJcbiAgdG9ycmVudEJvb3N0QWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgLy8gXHUzMDU3XHUzMDkzXHUzMDhBXHUzMDg3XHUzMDRGXHUzMDZFXHU1MkI5XHU2NzlDXHUzMDY3XHU4MzQ5XHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDZFXHU2MjgwXHUzMDRDXHU1RjM3XHU1MzE2XHUzMDU1XHUzMDhDXHUzMDVGXHUzMDRCXHJcbiAgb3Zlcmdyb3dCb29zdEFjdGl2YXRlZCA9IGZhbHNlO1xyXG4gIC8vIFx1MzA4MFx1MzA1N1x1MzA2RVx1MzA1N1x1MzA4OVx1MzA1Qlx1MzA2RVx1NTJCOVx1Njc5Q1x1MzA2N1x1ODY2Qlx1MzBCRlx1MzBBNFx1MzBEN1x1MzA2RVx1NjI4MFx1MzA0Q1x1NUYzN1x1NTMxNlx1MzA1NVx1MzA4Q1x1MzA1Rlx1MzA0QlxyXG4gIHN3YXJtQm9vc3RBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAvLyBcdTMwODJcdTMwNDZcdTMwNEJcdTMwNkVcdTUyQjlcdTY3OUNcdTMwNjdcdTcwOEVcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNkVcdTYyODBcdTMwNENcdTVGMzdcdTUzMTZcdTMwNTVcdTMwOENcdTMwNUZcdTMwNEJcclxuICBmaXJlTW92ZUFiaWxpdHlCb29zdEFjdGl2YXRlZCA9IGZhbHNlO1xyXG4gIC8vIFx1MzA0RFx1MzA4Mlx1MzA2M1x1MzA1Rlx1MzA3RVx1MzA2RVx1NTJCOVx1Njc5Q1x1MzA0Q1x1NzY3QVx1NTJENVx1MzA1N1x1MzA1Rlx1MzA0QlxyXG4gIHNjcmFwcHlBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAvLyBcdTMwNERcdTMwODdcdTMwNDZcdTMwNDZcdTMwOTNcdTMwNkVcdTUyQjlcdTY3OUNcdTMwNENcdTc2N0FcdTUyRDVcdTMwNTdcdTMwNUZcdTMwNEJcclxuICBzdXBlckx1Y2tBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAvLyBcdTMwQjlcdTMwQ0FcdTMwQTRcdTMwRDFcdTMwRkNcdTMwNkVcdTUyQjlcdTY3OUNcdTMwNENcdTc2N0FcdTUyRDVcdTMwNTdcdTMwNUZcdTMwNEJcclxuICBzbmlwZXJBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAvLyBcdTMwNjZcdTMwNERcdTMwNEFcdTMwNDZcdTMwOEFcdTMwODdcdTMwNEZcdTMwNkVcdTUyQjlcdTY3OUNcdTMwNENcdTc2N0FcdTUyRDVcdTMwNTdcdTMwNUZcdTMwNEJcclxuICBzdGFiQm9vc3RBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAvLyBcdTk2RkJcdTZDMTdcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNkVcdTYyODBcdTMwNENcdTMwNjlcdTMwOERcdTMwNDJcdTMwNURcdTMwNzNcdTMwNkVcdTVGNzFcdTk3RkZcdTMwOTJcdTUzRDdcdTMwNTFcdTMwNjZcdTMwNDRcdTMwOEJcdTMwNEJcclxuICBlbGVjdHJpY01vdmVEYW1wZW5lZCA9IGZhbHNlO1xyXG4gIC8vIFx1NzA4RVx1MzBCRlx1MzBBNFx1MzBEN1x1MzA2RVx1NjI4MFx1MzA0Q1x1MzA3Rlx1MzA1QVx1MzA0Mlx1MzA1RFx1MzA3M1x1MzA2RVx1NUY3MVx1OTdGRlx1MzA5Mlx1NTNEN1x1MzA1MVx1MzA2Nlx1MzA0NFx1MzA4Qlx1MzA0QlxyXG4gIHdhdGVyU3BvcnREcm9wQWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgLy8gXHUzMDU4XHUzMDg1XHUzMDQ2XHUzMDY3XHUzMDkzXHUzMDRDXHU2NzA5XHU1MkI5XHUzMDRCXHJcbiAgY2hhcmdlQm9vc3RBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAvLyBcdTMwN0ZcdTMwODRcdTMwNzZcdTMwOEJcdTcyQjZcdTYxNEJcdTMwNkVcdTUyQjlcdTY3OUNcdTMwNENcdTY3MDlcdTUyQjlcdTMwNEJcclxuICBnaG9zdEltbXVuaXR5QWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgLy8gXHUzMEVEXHUzMEIxXHUzMEMzXHUzMEM4XHUzMDVBXHUzMDY0XHUzMDREXHUzMDZFXHU2RTlDXHUzMDgxXHU0RTJEXHUzMDZCXHU1M0Q3XHUzMDUxXHUzMDVGXHU3MjY5XHU3NDA2XHU2MjgwXHUzMDZFXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHUzMDRDXHU4RUZEXHU2RTFCXHUzMDU1XHUzMDhDXHUzMDVGXHUzMDRCXHJcbiAgc2t1bGxCYXNoRGVmZW5zZUJvb3N0QWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgLy8gXHU2NEVDXHU0RjNDXHU3MTIxXHU2NTc1XHU3MkI2XHU2MTRCXHUzMDZCXHUzMDZBXHUzMDhCXHU2RTlDXHUzMDgxXHU2MjgwXHUzMDkyXHUzMEFEXHUzMEUzXHUzMEYzXHUzMEJCXHUzMEVCXHUzMDU3XHUzMDVGXHUzMDRCXHJcbiAgdHdvVHVybk1vdmVGb3JjZWRNaXNzID0gZmFsc2U7XHJcbiAgLy8gXHUzMDdDXHUzMDQ2XHUzMDRBXHUzMDkzXHUzMDZCXHUzMDg4XHUzMDYzXHUzMDY2XHU2MjgwXHUzMDRDXHU1OTMxXHU2NTU3XHUzMDU3XHUzMDVGXHUzMDRCXHJcbiAgc291bmRwcm9vZkFjdGl2YXRlZCA9IGZhbHNlO1xyXG4gIGZpcnN0SGl0Q2hlY2tGYWlsZWQgPSBmYWxzZTtcclxuICAvLyBcdTMwNzJcdTMwODlcdTMwNDRcdTMwNTdcdTMwOTNcdTMwNkJcdTMwODhcdTMwNjNcdTMwNjZcdTYyODBcdTMwNENcdTU5MzFcdTY1NTdcdTMwNTdcdTMwNUZcdTMwNEJcclxuICBsaWdodG5pbmdyb2RBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAvLyBcdTMwODhcdTMwNzNcdTMwN0ZcdTMwNUFcdTMwNkJcdTMwODhcdTMwNjNcdTMwNjZcdTYyODBcdTMwNENcdTU5MzFcdTY1NTdcdTMwNTdcdTMwNUZcdTMwNEJcclxuICBzdG9ybURyYWluQWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgLy8gXHUzMDg2XHUzMDgxXHUzMDRGXHUzMDQ0XHUzMDRDXHU1OTMxXHU2NTU3XHUzMDU3XHUzMDVGXHUzMDRCXHJcbiAgZHJlYW1FYXRlckZhaWxlZCA9IGZhbHNlO1xyXG4gIC8vIFx1MzA2OFx1MzA2M1x1MzA2Nlx1MzA0QVx1MzA0RFx1MzA0Q1x1NTkzMVx1NjU1N1x1MzA1N1x1MzA1Rlx1MzA0QlxyXG4gIGxhc3RSZXNvcnRGYWlsZWQgPSBmYWxzZTtcclxufVxyXG5cclxuY2xhc3MgRHVuZ2VvblJORyB7XHJcbiAgLyoqIFx1MzA2MVx1MzA0Qlx1MzA4OVx1MzA4Mlx1MzA2MS9cdTMwRThcdTMwQUNcdTMwRDFcdTMwRUZcdTMwRkNcdTMwOTJcdTRGN0ZcdTc1MjggKi9cclxuICBodWdlUHVyZVBvd2VyID0gZmFsc2U7XHJcbiAgLyoqIFx1NUYzN1x1NTIzNlx1NzY4NFx1MzA2Qlx1NjAyNVx1NjI0MCAqL1xyXG4gIGNyaXRpY2FsSGl0ID0gZmFsc2U7XHJcbiAgLyoqIFx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1NEU3MVx1NjU3MFx1ODhEQ1x1NkI2MyAoMC4wXHVGRjVFMS4wKSAqL1xyXG4gIHZhcmlhbmNlRGlhbCA9IDA7XHJcblxyXG4gIC8qKiBcdTYwMjVcdTYyNDBcdTczODcgKi9cclxuICBjcml0Q2hhbmNlID0gMDtcclxuICAvKiogXHUzMDg4XHUzMDYxXHUzMDgwXHUzMDRDXHU2NzA5XHU1MkI5ICovXHJcbiAgZm9yZXdhcm5BY3RpdmUgPSBmYWxzZTtcclxuICAvKiogXHU1NDdEXHU0RTJEMSAqL1xyXG4gIGhpdENoYW5jZTEgPSAxMjU7XHJcbiAgLyoqIFx1NTQ3RFx1NEUyRDIgKi9cclxuICBoaXRDaGFuY2UyID0gMTI1O1xyXG5cclxuICByb2xsSHVnZVB1cmVQb3dlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmh1Z2VQdXJlUG93ZXI7XHJcbiAgfVxyXG4gIHJvbGxDcml0aWNhbEhpdChjcml0Q2hhbmNlKSB7XHJcbiAgICB0aGlzLmNyaXRDaGFuY2UgPSBjcml0Q2hhbmNlO1xyXG4gICAgcmV0dXJuIHRoaXMuY3JpdGljYWxIaXQ7XHJcbiAgfVxyXG4gIGdldENvbXB1dGVkQ3JpdENoYW5jZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNyaXRDaGFuY2U7XHJcbiAgfVxyXG4gIHJvbGxEYW1hZ2VWYXJpYW5jZSgpIHtcclxuICAgIGxldCBzaW11bGF0ZWRSYW5kT3V0Y29tZSA9IE1hdGgubWluKE1hdGgubWF4KE1hdGgucm91bmQodGhpcy52YXJpYW5jZURpYWwgKiAweDNmZmYpLCAwKSwgMHgzZmZmKTtcclxuICAgIHJldHVybiAoc2ltdWxhdGVkUmFuZE91dGNvbWUgKyAweGUwMDApIC8gMHgxMDAwMDtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogXHUzMDg4XHUzMDYxXHUzMDgwIChtb2NrKVxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgcm9sbEZvcmV3YXJuKCkge1xyXG4gICAgdGhpcy5mb3Jld2FybkFjdGl2ZSA9IHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGZvcmV3YXJuV2FzUm9sbGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9yZXdhcm5BY3RpdmU7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFx1NjI4MFx1MzA2RVx1NTQ3RFx1NEUyRFx1MzA5Mlx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRiAobW9jaylcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaGl0Q2hhbmNlXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSBhY2N1cmFjeTJcclxuICAgKi9cclxuICByb2xsSGl0Q2hhbmNlKGhpdENoYW5jZSwgYWNjdXJhY3kyKSB7XHJcbiAgICBpZiAoYWNjdXJhY3kyKSB7XHJcbiAgICAgIHRoaXMuaGl0Q2hhbmNlMiA9IGhpdENoYW5jZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGl0Q2hhbmNlMSA9IGhpdENoYW5jZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBnZXRIaXRDaGFuY2UxKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGl0Q2hhbmNlMTtcclxuICB9XHJcbiAgZ2V0SGl0Q2hhbmNlMigpIHtcclxuICAgIHJldHVybiB0aGlzLmhpdENoYW5jZTI7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFx1NzUxRlx1MzA2RVx1NTQ3RFx1NEUyRFx1NzM4N1x1MzA5Mlx1NTNENlx1NUY5N1xyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgZ2V0Q29tYmluZWRIaXRDaGFuY2VSYXcoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBNYXRoLm1pbih0aGlzLmhpdENoYW5jZTEgPz8gMTAwLCAxMDApICogTWF0aC5taW4odGhpcy5oaXRDaGFuY2UyID8/IDEwMCwgMTAwKSAqICh0aGlzLmZvcmV3YXJuQWN0aXZlID8gODAgOiAxMDApXHJcbiAgICApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBcdTU0N0RcdTRFMkRcdTczODdcdTMwOTJcdTUzRDZcdTVGOTdcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIGdldENvbWJpbmVkSGl0UHJvYmFiaWxpdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDb21iaW5lZEhpdENoYW5jZVJhdygpIC8gMWU2O1xyXG4gIH1cclxuICAvKipcclxuICAgKiBcdTU0N0RcdTRFMkRcdTczODdcdTMwOTIlXHUzMDY3XHU1M0Q2XHU1Rjk3XHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBnZXRDb21iaW5lZEhpdFBlcmNlbnRhZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDb21iaW5lZEhpdENoYW5jZVJhdygpIC8gMWU0O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NjI4MFx1NjlDQlx1OTAyMFx1NEY1M1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1vdmUge1xyXG4gIC8qKiBcdTYyODBJRCAqL1xyXG4gIGlkID0gMDtcclxuICAvKiogXHU0RkVFXHU2QjYzXHU1MDI0ICovXHJcbiAgZ2luc2VuZyA9IDA7XHJcbiAgLyoqIFBQICovXHJcbiAgcHAgPSAwO1xyXG4gIC8qKiBcdTkwMjNcdTdEOUFcdTU0N0RcdTRFMkRcdTU2REVcdTY1NzAgKi9cclxuICBwcmlvclN1Y2Nlc3NpdmVIaXRzID0gMDtcclxuICAvKiogXHU2NjQyXHU5NUM3XHUzMDZFXHU1QTAxXHU1MjlCXHUzMDY3XHU4QTA4XHU3Qjk3ICovXHJcbiAgdGltZURhcmtuZXNzID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFx1MzBDN1x1MzBBM1x1MzBGQ1x1MzBEN1x1MzBCM1x1MzBENFx1MzBGQ1x1MzA2RVx1NEY1Q1x1NjIxMFxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgY2xvbmUoKSB7XHJcbiAgICBjb25zdCBjb3B5ID0gbmV3IE1vdmUoKTtcclxuICAgIE9iamVjdC5hc3NpZ24oY29weSwgdGhpcyk7XHJcbiAgICByZXR1cm4gY29weTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTMwNTdcdTMwNUNcdTMwOTNcdTMwNkVcdTMwODFcdTMwNTBcdTMwN0ZcdTY5Q0JcdTkwMjBcdTRGNTNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBOYXR1cmFsR2lmdEluZm8ge1xyXG4gIC8qKiBcdTkwNTNcdTUxNzdJRCAqL1xyXG4gIGl0ZW1JZCA9IDA7XHJcbiAgLyoqIFx1MzBCRlx1MzBBNFx1MzBENyAqL1xyXG4gIHR5cGVJZCA9IDA7XHJcbiAgLyoqIFx1OEZGRFx1NTJBMFx1MzA1NVx1MzA4Q1x1MzA4Qlx1NUEwMVx1NTI5QiAqL1xyXG4gIGJhc2VQb3dlckJvb3N0ID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoaXRlbUlkLCB0eXBlSWQsIGJhc2VQb3dlckJvb3N0KSB7XHJcbiAgICB0aGlzLml0ZW1JZCA9IGl0ZW1JZDtcclxuICAgIHRoaXMudHlwZUlkID0gdHlwZUlkO1xyXG4gICAgdGhpcy5iYXNlUG93ZXJCb29zdCA9IGJhc2VQb3dlckJvb3N0O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1OEE3M1x1N0QzMFx1OEExOFx1OTMzMlx1NzUyOCAob3JpZ2luYWwpXHJcbiAqL1xyXG5jbGFzcyBEYW1hZ2VEZXRhaWxMb2cge1xyXG4gIC8qKiBcdTY3MDBcdTdENDJcdTc2ODRcdTMwNkFcdTYyODBcdTMwNkVcdTVBMDFcdTUyOUIgKi9cclxuICBhdHRhY2tQb3dlciA9IDA7XHJcbiAgLyoqIFx1NjcwMFx1N0Q0Mlx1NzY4NFx1MzA2QVx1NjI4MFx1MzA2RVx1MzBCRlx1MzBBNFx1MzBENyAqL1xyXG4gIGF0dGFja1R5cGUgPSBlb3MuVFlQRV9OT05FO1xyXG5cclxuICAvKiogXHUzMDc1XHUzMDU3XHUzMDRFXHUzMDZBXHUzMDdFXHUzMDgyXHUzMDhBXHU3NjdBXHU1MkQ1ICovXHJcbiAgaXNXb25kZXJHdWFyZEFjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwNDRcdTMwOERcdTMwODFcdTMwNENcdTMwNkRcdTc2N0FcdTUyRDUgKi9cclxuICBpc1RpbnRlZExlbnNBY3RpdmUgPSBmYWxzZTtcclxuICAvKiogXHUzMENGXHUzMEZDXHUzMEM5XHUzMEVEXHUzMEMzXHUzMEFGXHU3NjdBXHU1MkQ1ICovXHJcbiAgaXNTb2xpZFJvY2tBY3RpdmUgPSBmYWxzZTtcclxuICAvKiogXHUzMEQ1XHUzMEEzXHUzMEVCXHUzMEJGXHUzMEZDXHU3NjdBXHU1MkQ1ICovXHJcbiAgaXNGaWx0ZXJBY3RpdmUgPSBmYWxzZTtcclxuICAvKiogXHUzMEJGXHUzMEE0XHUzMEUwXHUzMEI3XHUzMEZDXHUzMEVCXHUzMEM5XHU3NjdBXHU1MkQ1ICovXHJcbiAgaXNUaW1lU2hpZWxkQWN0aXZlID0gZmFsc2U7XHJcbiAgLyoqIFx1MzBCRlx1MzBBNFx1MzBFMFx1MzBCN1x1MzBGQ1x1MzBFQlx1MzBDOVx1MzBEMFx1MzBCMCAqL1xyXG4gIGlzVGltZVNoaWVsZEdsaXRjaCA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwQzZcdTMwQUZcdTMwQ0JcdTMwQjdcdTMwRTNcdTMwRjNcdTc2N0FcdTUyRDUgKi9cclxuICBpc1RlY2huaWNpYW5BY3RpdmUgPSBmYWxzZTtcclxuICAvKiogXHUzMDQyXHUzMDY0XHUzMDQ0XHUzMDU3XHUzMDdDXHUzMDQ2XHU3NjdBXHU1MkQ1ICovXHJcbiAgaXNUaGlja0ZhdEFjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwODJcdTMwODlcdTMwNDRcdTMwNzNcdTc2N0FcdTUyRDUgKi9cclxuICBpc0ZsYXNoRmlyZUFjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwNUZcdTMwNDRcdTMwNkRcdTMwNjRcdTc2N0FcdTUyRDUgKi9cclxuICBpc0hlYXRwcm9vZkFjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwNzVcdTMwODZcdTMwNDZcdTc2N0FcdTUyRDUgKi9cclxuICBpc0xldml0YXRlQWN0aXZlID0gZmFsc2U7XHJcbiAgLyoqIFx1MzA1Mlx1MzA0RFx1MzA4QVx1MzA4NVx1MzA0Nlx1NzY3QVx1NTJENSAqL1xyXG4gIGlzVG9ycmVudEFjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwNTdcdTMwOTNcdTMwOEFcdTMwODdcdTMwNEZcdTc2N0FcdTUyRDUgKi9cclxuICBpc092ZXJncm93QWN0aXZlID0gZmFsc2U7XHJcbiAgLyoqIFx1MzA4MFx1MzA1N1x1MzA2RVx1MzA1N1x1MzA4OVx1MzA1Qlx1NzY3QVx1NTJENSAqL1xyXG4gIGlzU3dhcm1BY3RpdmUgPSBmYWxzZTtcclxuICAvKiogXHUzMDgyXHUzMDQ2XHUzMDRCXHU3NjdBXHU1MkQ1ICovXHJcbiAgaXNCbGF6ZUFjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwNEJcdTMwOTNcdTMwNURcdTMwNDZcdTMwNkZcdTMwNjBcdTc2N0FcdTUyRDUgKi9cclxuICBpc0RyeVNraW5BY3RpdmUgPSBmYWxzZTtcclxuICAvKiogXHUzMDg0XHUzMDUxXHUzMDY5XHUzMDZFXHU1MkI5XHU2NzlDXHU3NjdBXHU1MkQ1ICovXHJcbiAgaXNCdXJuQWN0aXZlID0gZmFsc2U7XHJcbiAgLyoqIFx1MzA2Nlx1MzA0RFx1MzA0QVx1MzA0Nlx1MzA4QVx1MzA4N1x1MzA0Rlx1MzBCRlx1MzBBNFx1MzBEN1x1NEUwMFx1ODFGNCAqL1xyXG4gIGlzQWRhcHRhYmlsaXR5U1RBQiA9IGZhbHNlO1xyXG4gIC8qKiBcdTkwMUFcdTVFMzhcdTMwQkZcdTMwQTRcdTMwRDdcdTRFMDBcdTgxRjQgKi9cclxuICBpc1NUQUIgPSBmYWxzZTtcclxuICAvKiogXHUzMDcyXHUzMDU2XHUzMDU3XHUzMDRDXHUzMDY0XHUzMDg4XHUzMDQ0XHU3MDhFXHU4OERDXHU2QjYzICovXHJcbiAgaXNTdW5ueUZpcmVBY3RpdmUgPSBmYWxzZTtcclxuICAvKiogXHUzMDcyXHUzMDU2XHUzMDU3XHUzMDRDXHUzMDY0XHUzMDg4XHUzMDQ0XHU2QzM0XHU4OERDXHU2QjYzICovXHJcbiAgaXNTdW5ueVdhdGVyQWN0aXZlID0gZmFsc2U7XHJcbiAgLyoqIFx1MzA0Mlx1MzA4MVx1NzA4RVx1ODhEQ1x1NkI2MyAqL1xyXG4gIGlzUmFpbnlGaXJlQWN0aXZlID0gZmFsc2U7XHJcbiAgLyoqIFx1MzA0Mlx1MzA4MVx1NkMzNFx1ODhEQ1x1NkI2MyAqL1xyXG4gIGlzUmFpbnlXYXRlckFjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwNEZcdTMwODJcdTMwOEFcdTg4RENcdTZCNjMgKi9cclxuICBpc0Nsb3VkeUFjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwNERcdTMwOEFcdTg4RENcdTZCNjMgKi9cclxuICBpc0ZvZ0FjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwNjlcdTMwOERcdTMwNDJcdTMwNURcdTMwNzNcdTg4RENcdTZCNjMgKi9cclxuICBpc011ZFNwb3J0QWN0aXZlID0gZmFsc2U7XHJcbiAgLyoqIFx1MzA3Rlx1MzA1QVx1MzA0Mlx1MzA1RFx1MzA3M1x1ODhEQ1x1NkI2MyAqL1xyXG4gIGlzV2F0ZXJTcG9ydEFjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwNThcdTMwODVcdTMwNDZcdTMwNjdcdTMwOTNcdTg4RENcdTZCNjMgKi9cclxuICBpc0NoYXJnZUFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAvLyBjYWxjRGFtYWdlXHJcbiAgLyoqIFx1MzA1NVx1MzA0RFx1MzA2OVx1MzA4QVx1NzY3QVx1NTJENSAqL1xyXG4gIGlzTWVGaXJzdEFjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwNTlcdTMwNjZcdTMwN0ZcdTc2N0FcdTUyRDUgKi9cclxuICBpc1JlY2tsZXNzQWN0aXZlID0gZmFsc2U7XHJcbiAgLyoqIFx1MzA2Nlx1MzA2NFx1MzA2RVx1MzA1M1x1MzA3Nlx1MzA1N1x1NzY3QVx1NTJENSAqL1xyXG4gIGlzSXJvbkZpc3RBY3RpdmUgPSBmYWxzZTtcclxuICAvKiogXHUzMENFXHUzMEZDXHUzMERFXHUzMEVCXHUzMEI5XHUzMEFEXHUzMEYzXHU3NjdBXHU1MkQ1ICovXHJcbiAgaXNOb3JtYWxpemVBY3RpdmUgPSBmYWxzZTtcclxuICAvKiogXHUzMDZBXHUzMDRCXHUzMDdFXHUzMDRGXHUzMDQ2XHUzMDc1XHUzMDRGXHU3MkI2XHU2MTRCICovXHJcbiAgaXNIdW5ncnlQYWxBY3RpdmUgPSBmYWxzZTtcclxuICAvKiogXHUzMDU0XHUzMDQ2XHUzMDhGXHUzMDkzXHU3NjdBXHU1MkQ1ICovXHJcbiAgaXNQb3dlclBpdGNoZXJBY3RpdmUgPSBmYWxzZTtcclxuICAvKiogXHUzMEE4XHUzMEEyXHUzMEZDXHUzMEQ2XHUzMEVDXHUzMEZDXHUzMEM5XHU3NjdBXHU1MkQ1ICovXHJcbiAgaXNBaXJCbGFkZUFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAvKiogXHU1NkZBXHU1QjlBXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4ICovXHJcbiAgaXNGaXhlZERhbWFnZSA9IGZhbHNlO1xyXG5cclxuICAvLyBzaW11bGF0ZURhbWFnZUNhbGNcclxuICBkYW1hZ2VNdWx0ID0gMTtcclxufVxyXG4iLCAiLypcclxuICBUaGlzIGNvZGUgaW5jbHVkZXMgcG9ydGlvbnMgYmFzZWQgb24gZGFtYWdlLWVvcyBieSBVc2VybmFtZUZvZGRlclxyXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9Vc2VybmFtZUZvZGRlci9kYW1hZ2UtZW9zXHJcblxyXG4gIE9yaWdpbmFsIGNvZGUgcG9ydGlvbnM6XHJcbiAgLSBNSVQgTGljZW5zZSAoYykgMjAyMyBVc2VybmFtZUZvZGRlclxyXG5cclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgT3JpZ2luYWwgTGljZW5zZTpcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgTUlUIExpY2Vuc2VcclxuXHJcbiAgQ29weXJpZ2h0IChjKSAyMDIzIFVzZXJuYW1lRm9kZGVyXHJcblxyXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcbiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG4gIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuICBTT0ZUV0FSRS5cclxuKi9cclxuXHJcbmltcG9ydCAqIGFzIGVvcyBmcm9tICcuL2NvbnN0LmpzJztcclxuaW1wb3J0IHsgTmF0dXJhbEdpZnRJbmZvIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTlNUXzBfMjUgPSAweDQwIC8gMjU2O1xyXG5leHBvcnQgY29uc3QgQ09OU1RfMF81MCA9IDB4ODAgLyAyNTY7XHJcbmV4cG9ydCBjb25zdCBDT05TVF8wXzYwID0gMHg5OSAvIDI1NjtcclxuZXhwb3J0IGNvbnN0IENPTlNUXzBfNzAgPSAweGI1IC8gMjU2O1xyXG5leHBvcnQgY29uc3QgQ09OU1RfMF83NSA9IDB4YzAgLyAyNTY7XHJcbmV4cG9ydCBjb25zdCBDT05TVF8wXzgwID0gMHhjYyAvIDI1NjtcclxuZXhwb3J0IGNvbnN0IENPTlNUXzFfMjAgPSAxICsgMHgzMyAvIDI1NjtcclxuZXhwb3J0IGNvbnN0IENPTlNUXzFfMjUgPSAxICsgMHg0MCAvIDI1NjtcclxuZXhwb3J0IGNvbnN0IENPTlNUXzFfMzMgPSAxICsgMHg1NCAvIDI1NjtcclxuZXhwb3J0IGNvbnN0IENPTlNUXzFfNDAgPSAxICsgMHg2NiAvIDI1NjtcclxuZXhwb3J0IGNvbnN0IENPTlNUXzFfNTAgPSAxICsgMHg4MCAvIDI1NjtcclxuZXhwb3J0IGNvbnN0IENPTlNUXzFfNzAgPSAxICsgMHhiMyAvIDI1NjtcclxuZXhwb3J0IGNvbnN0IENPTlNUX05FRzBfNSA9IC0xICsgMHg4MCAvIDI1NjtcclxuZXhwb3J0IGNvbnN0IENPTlNUXzE1M19ESVZfMjU2ID0gMTUzIC8gMjU2O1xyXG5leHBvcnQgY29uc3QgQ09OU1RfMV9ESVZfU1FSVDIgPSAweGI1IC8gMjU2O1xyXG5leHBvcnQgY29uc3QgQ09OU1RfODVfRElWXzY0ID0gMSArIDB4NTQgLyAyNTY7XHJcblxyXG4vLyBcdTg5MDdcdTU0MDhcdTMwNkVcdTc2RjhcdTYwMjdcdTUwMERcdTczODdcdTUwMjRcclxuZXhwb3J0IGNvbnN0IFRZUEVfTUFUQ0hVUF9DT01CSU5BVE9SX1RBQkxFID0gW1xyXG4gIFtlb3MuTUFUQ0hVUF9JTU1VTkUsIGVvcy5NQVRDSFVQX0lNTVVORSwgZW9zLk1BVENIVVBfSU1NVU5FLCBlb3MuTUFUQ0hVUF9OT1RfVkVSWV9FRkZFQ1RJVkVdLFxyXG4gIFtlb3MuTUFUQ0hVUF9JTU1VTkUsIGVvcy5NQVRDSFVQX05PVF9WRVJZX0VGRkVDVElWRSwgZW9zLk1BVENIVVBfTk9UX1ZFUllfRUZGRUNUSVZFLCBlb3MuTUFUQ0hVUF9ORVVUUkFMXSxcclxuICBbZW9zLk1BVENIVVBfSU1NVU5FLCBlb3MuTUFUQ0hVUF9OT1RfVkVSWV9FRkZFQ1RJVkUsIGVvcy5NQVRDSFVQX05FVVRSQUwsIGVvcy5NQVRDSFVQX1NVUEVSX0VGRkVDVElWRV0sXHJcbiAgW2Vvcy5NQVRDSFVQX05PVF9WRVJZX0VGRkVDVElWRSwgZW9zLk1BVENIVVBfTkVVVFJBTCwgZW9zLk1BVENIVVBfU1VQRVJfRUZGRUNUSVZFLCBlb3MuTUFUQ0hVUF9TVVBFUl9FRkZFQ1RJVkVdLFxyXG5dO1xyXG5cclxuLy8gXHU3NkY4XHU2MDI3XHU1MDBEXHU3Mzg3XHJcbmV4cG9ydCBjb25zdCBNQVRDSFVQX0lNTVVORSA9IENPTlNUXzBfNTA7IC8vIFx1NzEyMVx1NTJCOVxyXG5leHBvcnQgY29uc3QgTUFUQ0hVUF9OT1RWRVJZID0gQ09OU1RfMF83MDsgLy8gXHU0RUNBXHU0RTAwXHUzMDY0XHJcbmV4cG9ydCBjb25zdCBNQVRDSFVQX05FVVRSQUwgPSAxOyAvLyBcdTdCNDlcdTUwMERcclxuZXhwb3J0IGNvbnN0IE1BVENIVVBfU1VQRVIgPSBDT05TVF8xXzQwOyAvLyBcdTYyOUNcdTdGQTRcclxuXHJcbi8vIFx1NzZGOFx1NjAyN1x1NTAwRFx1NzM4NyAoXHUzMEUwXHUzMEU5XHUzMDYzXHUzMDUxKVxyXG5leHBvcnQgY29uc3QgTUFUQ0hVUF9JTU1VTkVfRVJSQVRJQyA9IENPTlNUXzBfMjU7XHJcbmV4cG9ydCBjb25zdCBNQVRDSFVQX05PVFZFUllfRVJSQVRJQyA9IENPTlNUXzBfNTA7XHJcbmV4cG9ydCBjb25zdCBNQVRDSFVQX05FVVRSQUxfRVJSQVRJQyA9IDE7XHJcbmV4cG9ydCBjb25zdCBNQVRDSFVQX1NVUEVSX0VSUkFUSUMgPSBDT05TVF8xXzcwO1xyXG5cclxuLy8gXHU3Mjc5XHU1QjlBXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDkyXHU3MTIxXHU1MkI5XHU1MzE2XHUzMDU5XHUzMDhCXHU1QzAyXHU3NTI4XHU5MDUzXHU1MTc3XHU1MkI5XHU2NzlDSURcclxuZXhwb3J0IGNvbnN0IFRZUEVfREFNQUdFX05FR0FUSU5HX0VYQ0xVU0lWRV9JVEVNX0VGRkVDVFMgPSBbXHJcbiAgLy8gXHU3MTIxXHU1MkI5XHJcbiAgeyB0eXBlOiBlb3MuVFlQRV9GSVJFLCBlZmZlY3Q6IDB4NjYgfSxcclxuICB7IHR5cGU6IGVvcy5UWVBFX1dBVEVSLCBlZmZlY3Q6IDB4NjcgfSxcclxuICB7IHR5cGU6IGVvcy5UWVBFX0dSQVNTLCBlZmZlY3Q6IDB4NjggfSxcclxuICB7IHR5cGU6IGVvcy5UWVBFX0VMRUNUUklDLCBlZmZlY3Q6IDB4NjkgfSxcclxuICB7IHR5cGU6IGVvcy5UWVBFX0ZJR0hUSU5HLCBlZmZlY3Q6IDB4NmEgfSxcclxuICB7IHR5cGU6IGVvcy5UWVBFX0dST1VORCwgZWZmZWN0OiAweDZiIH0sXHJcbiAgeyB0eXBlOiBlb3MuVFlQRV9GTFlJTkcsIGVmZmVjdDogMHg2YyB9LFxyXG4gIHsgdHlwZTogZW9zLlRZUEVfUFNZQ0hJQywgZWZmZWN0OiAweDZkIH0sXHJcbiAgeyB0eXBlOiBlb3MuVFlQRV9HSE9TVCwgZWZmZWN0OiAweDZlIH0sXHJcbiAgeyB0eXBlOiBlb3MuVFlQRV9EUkFHT04sIGVmZmVjdDogMHg2ZiB9LFxyXG4gIHsgdHlwZTogZW9zLlRZUEVfREFSSywgZWZmZWN0OiAweDcwIH0sXHJcbiAgeyB0eXBlOiBlb3MuVFlQRV9TVEVFTCwgZWZmZWN0OiAweDcxIH0sXHJcblxyXG4gIC8vIFx1NTQzOFx1NTNDRVxyXG4gIHsgdHlwZTogZW9zLlRZUEVfRklSRSwgZWZmZWN0OiAweDcyIH0sXHJcbiAgeyB0eXBlOiBlb3MuVFlQRV9XQVRFUiwgZWZmZWN0OiAweDczIH0sXHJcbiAgeyB0eXBlOiBlb3MuVFlQRV9HUkFTUywgZWZmZWN0OiAweDc0IH0sXHJcbiAgeyB0eXBlOiBlb3MuVFlQRV9FTEVDVFJJQywgZWZmZWN0OiAweDc1IH0sXHJcbiAgeyB0eXBlOiBlb3MuVFlQRV9JQ0UsIGVmZmVjdDogMHg3NiB9LFxyXG4gIHsgdHlwZTogZW9zLlRZUEVfRklHSFRJTkcsIGVmZmVjdDogMHg3NyB9LFxyXG4gIHsgdHlwZTogZW9zLlRZUEVfR1JPVU5ELCBlZmZlY3Q6IDB4NzggfSxcclxuICB7IHR5cGU6IGVvcy5UWVBFX0ZMWUlORywgZWZmZWN0OiAweDc5IH0sXHJcbiAgeyB0eXBlOiBlb3MuVFlQRV9QU1lDSElDLCBlZmZlY3Q6IDB4N2EgfSxcclxuICB7IHR5cGU6IGVvcy5UWVBFX0JVRywgZWZmZWN0OiAweDdiIH0sXHJcbiAgeyB0eXBlOiBlb3MuVFlQRV9ST0NLLCBlZmZlY3Q6IDB4N2MgfSxcclxuICB7IHR5cGU6IGVvcy5UWVBFX0dIT1NULCBlZmZlY3Q6IDB4N2QgfSxcclxuICB7IHR5cGU6IGVvcy5UWVBFX0RSQUdPTiwgZWZmZWN0OiAweDdlIH0sXHJcbiAgeyB0eXBlOiBlb3MuVFlQRV9EQVJLLCBlZmZlY3Q6IDB4N2YgfSxcclxuICB7IHR5cGU6IGVvcy5UWVBFX1NURUVMLCBlZmZlY3Q6IDB4ODAgfSxcclxuXHJcbiAgeyB0eXBlOiBlb3MuVFlQRV9OT05FLCBlZmZlY3Q6IDB4ODEgfSxcclxuXTtcclxuXHJcbi8vIFx1NTZERVx1OTA3Rlx1NzM4N1x1MzA0Q1x1NEUwQVx1NjYwN1x1MzA1OVx1MzA4Qlx1NUMwMlx1NzUyOFx1OTA1M1x1NTE3N1x1NTJCOVx1Njc5Q0lEXHJcbmV4cG9ydCBjb25zdCBFWENMX0lURU1fRUZGRUNUU19FVkFTSU9OX0JPT1NUID0gWzB4M2QsIDB4M2UsIDB4M2YsIDB4NDAsIDB4NDEsIDB4NDIsIDB4NDMsIDB4MDBdO1xyXG5cclxuLy8gXHUzMDQyXHUzMDZBXHUzMDkyXHUzMDdCXHUzMDhCXHU1MDBEXHU3Mzg3XHJcbmV4cG9ydCBjb25zdCBESUdfREFNQUdFX01VTFRJUExJRVIgPSAyO1xyXG4vLyBcdTMwNEJcdTMwN0VcdTMwNDRcdTMwNUZcdTMwNjFcdTUwMERcdTczODdcclxuZXhwb3J0IGNvbnN0IFJBWk9SX1dJTkRfREFNQUdFX01VTFRJUExJRVIgPSAyO1xyXG4vLyBcdTMwNEJcdTMwODlcdTMwNTJcdTMwOTNcdTMwNERcdTUwMERcdTczODdcclxuZXhwb3J0IGNvbnN0IEZBQ0FERV9EQU1BR0VfTVVMVElQTElFUiA9IDI7XHJcbi8vIFx1MzA0RFx1MzA0Mlx1MzA0NFx1MzBEMVx1MzBGM1x1MzBDMVx1NTAwRFx1NzM4N1xyXG5leHBvcnQgY29uc3QgRk9DVVNfUFVOQ0hfREFNQUdFX01VTFRJUExJRVIgPSAyO1xyXG4vLyBcdTMwQjRcdTMwQzNcdTMwQzlcdTMwRDBcdTMwRkNcdTMwQzlcdTUwMERcdTczODdcclxuZXhwb3J0IGNvbnN0IFNLWV9BVFRBQ0tfREFNQUdFX01VTFRJUExJRVIgPSAyO1xyXG4vLyBcdTMwQkRcdTMwRkNcdTMwRTlcdTMwRkNcdTMwRDNcdTMwRkNcdTMwRTBcdTUwMERcdTczODdcclxuZXhwb3J0IGNvbnN0IFNPTEFSQkVBTV9EQU1BR0VfTVVMVElQTElFUiA9IDI7XHJcbi8vIFx1MzA1RFx1MzA4OVx1MzA5Mlx1MzA2OFx1MzA3Nlx1NTAwRFx1NzM4N1xyXG5leHBvcnQgY29uc3QgRkxZX0RBTUFHRV9NVUxUSVBMSUVSID0gMjtcclxuLy8gXHUzMEMwXHUzMEE0XHUzMEQzXHUzMEYzXHUzMEIwXHU1MDBEXHU3Mzg3XHJcbmV4cG9ydCBjb25zdCBESVZFX0RBTUFHRV9NVUxUSVBMSUVSID0gMjtcclxuLy8gXHUzMDY4XHUzMDczXHUzMDZGXHUzMDZEXHUzMDhCXHU1MDBEXHU3Mzg3XHJcbmV4cG9ydCBjb25zdCBCT1VOQ0VfREFNQUdFX01VTFRJUExJRVIgPSAyO1xyXG4vLyBcdTMwRURcdTMwQjFcdTMwQzNcdTMwQzhcdTMwNUFcdTMwNjRcdTMwNERcdTUwMERcdTczODdcclxuZXhwb3J0IGNvbnN0IFNLVUxMX0JBU0hfREFNQUdFX01VTFRJUExJRVIgPSAyO1xyXG4vLyBcdTMwQjdcdTMwRTNcdTMwQzlcdTMwRkNcdTMwQzBcdTMwQTRcdTMwRDZcdTUwMERcdTczODdcclxuZXhwb3J0IGNvbnN0IFNIQURPV19GT1JDRV9EQU1BR0VfTVVMVElQTElFUiA9IDI7XHJcbi8vIFx1MzA1M1x1MzA4RFx1MzA0Q1x1MzA4Qlx1NTAwRFx1NzM4N1xyXG5leHBvcnQgY29uc3QgUk9MTE9VVF9EQU1BR0VfTVVMVF9UQUJMRSA9IFtcclxuICAxLFxyXG4gIDEgKyAweDE5IC8gMjU2LCAvLyAxLjEwXHJcbiAgQ09OU1RfMV8yMCxcclxuICAxICsgMHg0YyAvIDI1NiwgLy8gMS4zMFxyXG4gIENPTlNUXzFfNDAsXHJcbiAgQ09OU1RfMV81MCxcclxuICAxICsgMHg5OSAvIDI1NiwgLy8gMS42MFxyXG4gIENPTlNUXzFfNzAsXHJcbiAgMSArIDB4Y2MgLyAyNTYsIC8vIDEuODBcclxuICAxICsgMHhlNiAvIDI1NiwgLy8gMS45MFxyXG5dO1xyXG4vLyBcdTMwNERcdTMwNTdcdTMwNEJcdTMwNDRcdTMwNUJcdTMwNDRcdTUwMERcdTczODdcclxuZXhwb3J0IGNvbnN0IFJFVkVSU0FMX0RBTUFHRV9NVUxUX1RBQkxFID0gWzIsIENPTlNUXzFfNTAsIDEsIDFdO1xyXG4vLyBcdTMwN0ZcdTMwNUFcdTMwNDJcdTMwNURcdTMwNzNcdTUwMERcdTczODdcclxuZXhwb3J0IGNvbnN0IFdBVEVSX1NQT1VUX0RBTUFHRV9NVUxUX1RBQkxFID0gW1xyXG4gIDB4MTkgLyAyNTYsIC8vIDAuMTBcclxuICAweDMzIC8gMjU2LCAvLyAwLjIwXHJcbiAgQ09OU1RfMF81MCxcclxuICAxLFxyXG5dO1xyXG4vLyBcdTMwNzVcdTMwOTNcdTMwNEJcdTUwMERcdTczODdcclxuZXhwb3J0IGNvbnN0IEVSVVBUSU9OX0RBTUFHRV9NVUxUX1RBQkxFID0gW1xyXG4gIDB4MTkgLyAyNTYsIC8vIDAuMTBcclxuICAweDMzIC8gMjU2LCAvLyAwLjIwXHJcbiAgQ09OU1RfMF81MCxcclxuICAxLFxyXG5dO1xyXG4vLyBcdTMwNTdcdTMwN0NcdTMwOEFcdTMwNjhcdTMwOEJcdTUwMERcdTczODdcclxuZXhwb3J0IGNvbnN0IFdSSU5HX09VVF9EQU1BR0VfTVVMVF9UQUJMRSA9IFtcclxuICAweDE5IC8gMjU2LCAvLyAwLjEwXHJcbiAgMHgzMyAvIDI1NiwgLy8gMC4yMFxyXG4gIENPTlNUXzBfNTAsXHJcbiAgMSxcclxuXTtcclxuLy8gXHUzMDY4XHUzMDYzXHUzMDY2XHUzMDRBXHUzMDREXHU1MDBEXHU3Mzg3XHJcbmV4cG9ydCBjb25zdCBMQVNUX1JFU09SVF9EQU1BR0VfTVVMVF9UQUJMRSA9IFtcclxuICAxLFxyXG4gIENPTlNUXzBfNTAsXHJcbiAgMixcclxuICAyLCAvLyBcdTY3MkFcdTRGN0ZcdTc1MjhcclxuXTtcclxuLy8gXHUzMEE2XHUzMEE3XHUzMEI2XHUzMEZDXHUzMERDXHUzMEZDXHUzMEVCXHU1MDBEXHU3Mzg3XHJcbmV4cG9ydCBjb25zdCBXRUFUSEVSX0JBTExfREFNQUdFX01VTFRfVEFCTEUgPSBbXHJcbiAgMSwgLy8gXHUzMDZGXHUzMDhDXHJcbiAgMiwgLy8gXHUzMDcyXHUzMDU2XHUzMDU3XHUzMDRDXHUzMDY0XHUzMDg4XHUzMDQ0ICgyXHU1MDBEKVxyXG4gIDIsIC8vIFx1MzA1OVx1MzA2QVx1MzA0Mlx1MzA4OVx1MzA1NyAoMlx1NTAwRClcclxuICAxLCAvLyBcdTMwNEZcdTMwODJcdTMwOEFcclxuICAyLCAvLyBcdTMwNDJcdTMwODEgKDJcdTUwMEQpXHJcbiAgMiwgLy8gXHUzMDQyXHUzMDg5XHUzMDhDICgyXHU1MDBEKVxyXG4gIDEsIC8vIFx1MzA0RFx1MzA4QVxyXG4gIDIsIC8vIFx1MzA4Nlx1MzA0RCAoMlx1NTAwRClcclxuXTtcclxuLy8gXHUzMEE2XHUzMEE3XHUzMEI2XHUzMEZDXHUzMERDXHUzMEZDXHUzMEVCXHUzMEJGXHUzMEE0XHUzMEQ3XHJcbmV4cG9ydCBjb25zdCBXRUFUSEVSX0JBTExfVFlQRV9UQUJMRSA9IFtcclxuICAxLCAvLyBcdTMwNkZcdTMwOEMgLT4gXHUzMENFXHUzMEZDXHUzMERFXHUzMEVCXHJcbiAgMiwgLy8gXHUzMDcyXHUzMDU2XHUzMDU3XHUzMDRDXHUzMDY0XHUzMDg4XHUzMDQ0IC0+IFx1MzA3Qlx1MzA2RVx1MzA0QVxyXG4gIDEzLCAvLyBcdTMwNTlcdTMwNkFcdTMwNDJcdTMwODlcdTMwNTcgLT4gXHUzMDQ0XHUzMDhGXHJcbiAgMSwgLy8gXHUzMDRGXHUzMDgyXHUzMDhBIC0+IFx1MzBDRVx1MzBGQ1x1MzBERVx1MzBFQlxyXG4gIDMsIC8vIFx1MzA0Mlx1MzA4MSAtPiBcdTMwN0ZcdTMwNUFcclxuICA2LCAvLyBcdTMwNDJcdTMwODlcdTMwOEMgLT4gXHUzMDUzXHUzMDRBXHUzMDhBXHJcbiAgMSwgLy8gXHUzMDREXHUzMDhBIC0+IFx1MzBDRVx1MzBGQ1x1MzBERVx1MzBFQlxyXG4gIDYsIC8vIFx1MzA4Nlx1MzA0RCAtPiBcdTMwNTNcdTMwNEFcdTMwOEFcclxuXTtcclxuXHJcbi8vIFx1NjUzQlx1NjQ4M1x1MzBGQlx1NzI3OVx1NjUzQlx1MzBFOVx1MzBGM1x1MzBBRlx1NTAwRFx1NzM4N1xyXG5leHBvcnQgY29uc3QgT0ZGRU5TSVZFX1NUQVRfU1RBR0VfTVVMVElQTElFUlMgPSBbXHJcbiAgMCArIDB4ODAgLyAyNTYsIC8vIDAuNVxyXG4gIDAgKyAweDg1IC8gMjU2LCAvLyAwLjUyXHJcbiAgMCArIDB4OGEgLyAyNTYsIC8vIDAuNTRcclxuICAwICsgMHg4ZiAvIDI1NiwgLy8gMC41NlxyXG4gIDAgKyAweDk0IC8gMjU2LCAvLyAwLjU4XHJcbiAgMCArIDB4OTkgLyAyNTYsIC8vIDAuNlxyXG4gIDAgKyAweGExIC8gMjU2LCAvLyAwLjYzXHJcbiAgMCArIDB4YWIgLyAyNTYsIC8vIDAuNjdcclxuICAwICsgMHhiMyAvIDI1NiwgLy8gMC43XHJcbiAgMCArIDB4Y2MgLyAyNTYsIC8vIDAuOFxyXG4gIDEgKyAweDAwIC8gMjU2LCAvLyAxXHJcbiAgMSArIDB4MzMgLyAyNTYsIC8vIDEuMlxyXG4gIDEgKyAweDRjIC8gMjU2LCAvLyAxLjNcclxuICAxICsgMHg2NiAvIDI1NiwgLy8gMS40XHJcbiAgMSArIDB4ODAgLyAyNTYsIC8vIDEuNVxyXG4gIDEgKyAweDk5IC8gMjU2LCAvLyAxLjZcclxuICAxICsgMHhhNiAvIDI1NiwgLy8gMS42NFxyXG4gIDEgKyAweGIzIC8gMjU2LCAvLyAxLjdcclxuICAxICsgMHhjMCAvIDI1NiwgLy8gMS43NVxyXG4gIDEgKyAweGNjIC8gMjU2LCAvLyAxLjhcclxuICAxICsgMHhkOSAvIDI1NiwgLy8gMS44NVxyXG5dO1xyXG4vLyBcdTk2MzJcdTVGQTFcdTMwRkJcdTcyNzlcdTk2MzJcdTMwRTlcdTMwRjNcdTMwQUZcdTUwMERcdTczODdcclxuZXhwb3J0IGNvbnN0IERFRkVOU0lWRV9TVEFUX1NUQUdFX01VTFRJUExJRVJTID0gW1xyXG4gIDAgKyAweDA3IC8gMjU2LCAvLyAwLjAzXHJcbiAgMCArIDB4MGMgLyAyNTYsIC8vIDAuMDVcclxuICAwICsgMHgxOSAvIDI1NiwgLy8gMC4xXHJcbiAgMCArIDB4MjYgLyAyNTYsIC8vIDAuMTVcclxuICAwICsgMHgzMyAvIDI1NiwgLy8gMC4yXHJcbiAgMCArIDB4NDAgLyAyNTYsIC8vIDAuMjVcclxuICAwICsgMHg0YyAvIDI1NiwgLy8gMC4zXHJcbiAgMCArIDB4NjYgLyAyNTYsIC8vIDAuNFxyXG4gIDAgKyAweDgwIC8gMjU2LCAvLyAwLjVcclxuICAwICsgMHhiMyAvIDI1NiwgLy8gMC43XHJcbiAgMSArIDB4MDAgLyAyNTYsIC8vIDFcclxuICAxICsgMHg0YyAvIDI1NiwgLy8gMS4zXHJcbiAgMSArIDB4OTkgLyAyNTYsIC8vIDEuNlxyXG4gIDEgKyAweGU2IC8gMjU2LCAvLyAxLjlcclxuICAyICsgMHgxOSAvIDI1NiwgLy8gMi4xXHJcbiAgMiArIDB4NGMgLyAyNTYsIC8vIDIuM1xyXG4gIDIgKyAweDgwIC8gMjU2LCAvLyAyLjVcclxuICAyICsgMHhiMyAvIDI1NiwgLy8gMi43XHJcbiAgMiArIDB4ZTYgLyAyNTYsIC8vIDIuOVxyXG4gIDMgKyAweDE5IC8gMjU2LCAvLyAzLjFcclxuICAzICsgMHg0YyAvIDI1NiwgLy8gMy4zXHJcbl07XHJcbi8vIFx1MzBBQVx1MzBCOVx1NTQ3RFx1NEUyRFx1MzBFOVx1MzBGM1x1MzBBRlx1NTAwRFx1NzM4N1xyXG5leHBvcnQgY29uc3QgTUFMRV9BQ0NVUkFDWV9TVEFHRV9NVUxUSVBMSUVSUyA9IFtcclxuICAwICsgMHg1NCAvIDI1NiwgLy8gMC4zM1xyXG4gIDAgKyAweDU5IC8gMjU2LCAvLyAwLjM1XHJcbiAgMCArIDB4NWUgLyAyNTYsIC8vIDAuMzdcclxuICAwICsgMHg2NiAvIDI1NiwgLy8gMC40XHJcbiAgMCArIDB4NmUgLyAyNTYsIC8vIDAuNDNcclxuICAwICsgMHg3MyAvIDI1NiwgLy8gMC40NVxyXG4gIDAgKyAweDhjIC8gMjU2LCAvLyAwLjU1XHJcbiAgMCArIDB4OTkgLyAyNTYsIC8vIDAuNlxyXG4gIDAgKyAweGIzIC8gMjU2LCAvLyAwLjdcclxuICAwICsgMHhjYyAvIDI1NiwgLy8gMC44XHJcbiAgMSArIDB4MDAgLyAyNTYsIC8vIDFcclxuICAxICsgMHg0MCAvIDI1NiwgLy8gMS4yNVxyXG4gIDEgKyAweDgwIC8gMjU2LCAvLyAxLjVcclxuICAxICsgMHg5OSAvIDI1NiwgLy8gMS42XHJcbiAgMSArIDB4YTYgLyAyNTYsIC8vIDEuNjVcclxuICAxICsgMHhiMyAvIDI1NiwgLy8gMS43XHJcbiAgMSArIDB4YzAgLyAyNTYsIC8vIDEuNzVcclxuICAxICsgMHhjYyAvIDI1NiwgLy8gMS44XHJcbiAgMSArIDB4ZDkgLyAyNTYsIC8vIDEuODVcclxuICAxICsgMHhlNiAvIDI1NiwgLy8gMS45XHJcbiAgMiArIDB4MDAgLyAyNTYsIC8vIDJcclxuXTtcclxuLy8gXHUzMEFBXHUzMEI5XHU1NkRFXHU5MDdGXHUzMEU5XHUzMEYzXHUzMEFGXHU1MDBEXHU3Mzg3XHJcbmV4cG9ydCBjb25zdCBNQUxFX0VWQVNJT05fU1RBR0VfTVVMVElQTElFUlMgPSBbXHJcbiAgMiArIDB4MDAgLyAyNTYsIC8vIDJcclxuICAxICsgMHhlNiAvIDI1NiwgLy8gMS45XHJcbiAgMSArIDB4ZDkgLyAyNTYsIC8vIDEuODVcclxuICAxICsgMHhjYyAvIDI1NiwgLy8gMS44XHJcbiAgMSArIDB4YzAgLyAyNTYsIC8vIDEuNzVcclxuICAxICsgMHhiMyAvIDI1NiwgLy8gMS43XHJcbiAgMSArIDB4YTYgLyAyNTYsIC8vIDEuNjVcclxuICAxICsgMHg5OSAvIDI1NiwgLy8gMS42XHJcbiAgMSArIDB4ODAgLyAyNTYsIC8vIDEuNVxyXG4gIDEgKyAweDU5IC8gMjU2LCAvLyAxLjM1XHJcbiAgMSArIDB4MDcgLyAyNTYsIC8vIDEuMDNcclxuICAwICsgMHhjYyAvIDI1NiwgLy8gMC44XHJcbiAgMCArIDB4YjMgLyAyNTYsIC8vIDAuN1xyXG4gIDAgKyAweDk5IC8gMjU2LCAvLyAwLjZcclxuICAwICsgMHg4MCAvIDI1NiwgLy8gMC41XHJcbiAgMCArIDB4NjYgLyAyNTYsIC8vIDAuNFxyXG4gIDAgKyAweDU5IC8gMjU2LCAvLyAwLjM1XHJcbiAgMCArIDB4NGMgLyAyNTYsIC8vIDAuM1xyXG4gIDAgKyAweDQwIC8gMjU2LCAvLyAwLjI1XHJcbiAgMCArIDB4MzMgLyAyNTYsIC8vIDAuMlxyXG4gIDAgKyAweDI2IC8gMjU2LCAvLyAwLjE1XHJcbl07XHJcbi8vIFx1MzBFMVx1MzBCOVx1NTQ3RFx1NEUyRFx1MzBFOVx1MzBGM1x1MzBBRlx1NTAwRFx1NzM4N1xyXG5leHBvcnQgY29uc3QgRkVNQUxFX0FDQ1VSQUNZX1NUQUdFX01VTFRJUExJRVJTID0gW1xyXG4gIDAgKyAweDU0IC8gMjU2LCAvLyAwLjMzXHJcbiAgMCArIDB4NTkgLyAyNTYsIC8vIDAuMzVcclxuICAwICsgMHg1ZSAvIDI1NiwgLy8gMC4zN1xyXG4gIDAgKyAweDY2IC8gMjU2LCAvLyAwLjRcclxuICAwICsgMHg2ZSAvIDI1NiwgLy8gMC40M1xyXG4gIDAgKyAweDczIC8gMjU2LCAvLyAwLjQ1XHJcbiAgMCArIDB4OGMgLyAyNTYsIC8vIDAuNTVcclxuICAwICsgMHg5OSAvIDI1NiwgLy8gMC42XHJcbiAgMCArIDB4YjMgLyAyNTYsIC8vIDAuN1xyXG4gIDAgKyAweGNjIC8gMjU2LCAvLyAwLjhcclxuICAxICsgMHgwYyAvIDI1NiwgLy8gMS4wNVxyXG4gIDEgKyAweDQwIC8gMjU2LCAvLyAxLjI1XHJcbiAgMSArIDB4ODAgLyAyNTYsIC8vIDEuNVxyXG4gIDEgKyAweDk5IC8gMjU2LCAvLyAxLjZcclxuICAxICsgMHhhNiAvIDI1NiwgLy8gMS42NVxyXG4gIDEgKyAweGIzIC8gMjU2LCAvLyAxLjdcclxuICAxICsgMHhjMCAvIDI1NiwgLy8gMS43NVxyXG4gIDEgKyAweGNjIC8gMjU2LCAvLyAxLjhcclxuICAxICsgMHhkOSAvIDI1NiwgLy8gMS44NVxyXG4gIDEgKyAweGU2IC8gMjU2LCAvLyAxLjlcclxuICAyICsgMHgwMCAvIDI1NiwgLy8gMlxyXG5dO1xyXG4vLyBcdTMwRTFcdTMwQjlcdTU2REVcdTkwN0ZcdTMwRTlcdTMwRjNcdTMwQUZcdTUwMERcdTczODdcclxuZXhwb3J0IGNvbnN0IEZFTUFMRV9FVkFTSU9OX1NUQUdFX01VTFRJUExJRVJTID0gW1xyXG4gIDIgKyAweDAwIC8gMjU2LCAvLyAyXHJcbiAgMSArIDB4ZTYgLyAyNTYsIC8vIDEuOVxyXG4gIDEgKyAweGQ5IC8gMjU2LCAvLyAxLjg1XHJcbiAgMSArIDB4Y2MgLyAyNTYsIC8vIDEuOFxyXG4gIDEgKyAweGMwIC8gMjU2LCAvLyAxLjc1XHJcbiAgMSArIDB4YjMgLyAyNTYsIC8vIDEuN1xyXG4gIDEgKyAweGE2IC8gMjU2LCAvLyAxLjY1XHJcbiAgMSArIDB4OTkgLyAyNTYsIC8vIDEuNlxyXG4gIDEgKyAweDgwIC8gMjU2LCAvLyAxLjVcclxuICAxICsgMHg1OSAvIDI1NiwgLy8gMS4zNVxyXG4gIDEgKyAweDAwIC8gMjU2LCAvLyAxXHJcbiAgMCArIDB4Y2MgLyAyNTYsIC8vIDAuOFxyXG4gIDAgKyAweGIzIC8gMjU2LCAvLyAwLjdcclxuICAwICsgMHg5OSAvIDI1NiwgLy8gMC42XHJcbiAgMCArIDB4ODAgLyAyNTYsIC8vIDAuNVxyXG4gIDAgKyAweDY2IC8gMjU2LCAvLyAwLjRcclxuICAwICsgMHg1OSAvIDI1NiwgLy8gMC4zNVxyXG4gIDAgKyAweDRjIC8gMjU2LCAvLyAwLjNcclxuICAwICsgMHg0MCAvIDI1NiwgLy8gMC4yNVxyXG4gIDAgKyAweDMzIC8gMjU2LCAvLyAwLjJcclxuICAwICsgMHgyNiAvIDI1NiwgLy8gMC4xNVxyXG5dO1xyXG5cclxuLy8gXHU3Mjc5XHU2MDI3XHUzMDQ0XHUzMDhEXHUzMDgxXHUzMDRDXHUzMDZEXHU4OERDXHU2QjYzXHJcbmV4cG9ydCBjb25zdCBUSU5URURfTEVOU19NVUxUSVBMSUVSID0gQ09OU1RfMV8yMDtcclxuLy8gXHU3Mjc5XHU2MDI3XHUzMENGXHUzMEZDXHUzMEM5XHUzMEVEXHUzMEMzXHUzMEFGXHU4OERDXHU2QjYzXHJcbmV4cG9ydCBjb25zdCBTT0xJRF9ST0NLX01VTFRJUExJRVIgPSBDT05TVF8wXzc1O1xyXG4vLyBcdTMwODRcdTMwNTFcdTMwNjlcdTY2NDJcdTMwNkVcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdTg4RENcdTZCNjNcclxuZXhwb3J0IGNvbnN0IEJVUk5fREFNQUdFX01VTFRJUExJRVIgPSBDT05TVF8wXzgwO1xyXG4vLyBcdTU5MjlcdTUwMTlcdTMwNEZcdTMwODJcdTMwOEFcdTY2NDJcdTMwNkVcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdTg4RENcdTZCNjNcclxuZXhwb3J0IGNvbnN0IENMT1VEWV9EQU1BR0VfTVVMVElQTElFUiA9IENPTlNUXzBfNzU7XHJcbi8vIFx1MzA1NVx1MzA0RFx1MzA2OVx1MzA4QVx1ODhEQ1x1NkI2M1xyXG5leHBvcnQgY29uc3QgTUVfRklSU1RfTVVMVElQTElFUiA9IENPTlNUXzFfNTA7XHJcbi8vIFx1MzA1NFx1MzA0Nlx1MzA4Rlx1MzA5M1x1ODhEQ1x1NkI2M1xyXG5leHBvcnQgY29uc3QgUE9XRVJfUElUQ0hFUl9EQU1BR0VfTVVMVElQTElFUiA9IENPTlNUXzFfNTA7XHJcbi8vIFx1MzBBOFx1MzBBMlx1MzBGQ1x1MzBENlx1MzBFQ1x1MzBGQ1x1MzBDOVx1ODhEQ1x1NkI2M1xyXG5leHBvcnQgY29uc3QgQUlSX0JMQURFX0RBTUFHRV9NVUxUSVBMSUVSID0gQ09OU1RfMV81MDtcclxuLy8gKFx1NjY0Mlx1OTVDNylcdTMwQkZcdTMwQTRcdTMwRTBcdTMwQjdcdTMwRkNcdTMwRUJcdTMwQzlcdTg4RENcdTZCNjNcclxuZXhwb3J0IGNvbnN0IFREX1RJTUVfU0hFQUxEX0RBTUFHRV9NVUxUSVBMSUVSID0gMjtcclxuXHJcbi8vIFx1MzBEMVx1MzBFRlx1MzBGQ1x1MzBEMFx1MzBGM1x1MzBDMFx1MzBDQVx1NEUwQVx1NjYwN1x1OTFDRlxyXG5leHBvcnQgY29uc3QgUE9XRVJfQkFORF9TVEFUX0JPT1NUID0gMTI7XHJcbi8vIFx1MzBCOVx1MzBEQVx1MzBCN1x1MzBFM1x1MzBFQlx1MzBFQVx1MzBEQ1x1MzBGM1x1NEUwQVx1NjYwN1x1OTFDRlxyXG5leHBvcnQgY29uc3QgU1BFQ0lBTF9CQU5EX1NUQVRfQk9PU1QgPSAxMjtcclxuLy8gXHUzMDdDXHUzMDQ2XHUzMDRFXHUzMDg3XHUzMEI5XHUzMEFCXHUzMEZDXHUzMEQ1XHU0RTBBXHU2NjA3XHU5MUNGXHJcbmV4cG9ydCBjb25zdCBERUZfU0NBUkZfU1RBVF9CT09TVCA9IDg7XHJcbi8vIFx1MzBBRFx1MzBDOFx1MzBCNVx1MzBGM1x1MzBEMFx1MzBGM1x1MzBDMFx1MzBDQVx1NEUwQVx1NjYwN1x1OTFDRlxyXG5leHBvcnQgY29uc3QgWklOQ19CQU5EX1NUQVRfQk9PU1QgPSA4O1xyXG4vLyBcdTZDRTJcdTUyRDVcdTgyNzJcdTMwRUFcdTMwRENcdTMwRjNcdTRFMEFcdTY2MDdcdTkxQ0ZcclxuZXhwb3J0IGNvbnN0IEFVUkFfQk9XX1NUQVRfQk9PU1QgPSAxO1xyXG4vLyBcdTMwQjRcdTMwRjNcdTMwRDlcdTMwNkVcdTMwQ0ZcdTMwRTlcdTMwREVcdTMwQURcdTRFMEFcdTY2MDdcdTkxQ0ZcclxuZXhwb3J0IGNvbnN0IE1VTkNIX0JFTFRfU1RBVF9CT09TVCA9IDg7XHJcbi8vIFx1MzBENFx1MzBGM1x1MzBDOFx1MzBFQ1x1MzBGM1x1MzBCQVx1NjAyNVx1NjI0MFx1NzM4N1x1NEUwQVx1NjYwN1x1OTFDRlxyXG5leHBvcnQgY29uc3QgU0NPUEVfTEVOU19DUklUX1JBVEVfQk9PU1QgPSAxNTtcclxuLy8gXHUzMDREXHUzMDg3XHUzMDQ2XHUzMDQ2XHUzMDkzXHU2MDI1XHU2MjQwXHU3Mzg3XHU0RTBBXHU2NjA3XHU5MUNGXHJcbmV4cG9ydCBjb25zdCBTVVBFUl9MVUNLX0NSSVRfUkFURV9CT09TVCA9IDEwO1xyXG4vLyBcdTMwNDJcdTMwNDRcdTMwNTdcdTMwODdcdTMwNDZcdTMwNzBcdTMwNjRcdTMwNTBcdTMwOTNcdTYwMjVcdTYyNDBcdTczODdcclxuZXhwb3J0IGNvbnN0IFRZUEVfQURWQU5UQUdFX01BU1RFUl9DUklUX1JBVEUgPSA0MDtcclxuLy8gXHUzMDdGXHUzMDREXHUzMDhBXHUzMENGXHUzMEMxXHUzMERFXHUzMEFEXHU1NDdEXHU0RTJEXHU1MDI0XHU2RTFCXHU1QzExXHU5MUNGXHJcbmV4cG9ydCBjb25zdCBERVRFQ1RfQkFORF9NT1ZFX0FDQ1VSQUNZX0RST1AgPSAzMDtcclxuLy8gXHUzMDU5XHUzMDcwXHUzMDg0XHUzMDRGXHUzMDRCXHUzMDQ0XHUzMDcyXHU1NDdEXHU0RTJEXHU1MDI0XHU2RTFCXHU1QzExXHU5MUNGXHJcbmV4cG9ydCBjb25zdCBRVUlDS19ET0RHRVJfTU9WRV9BQ0NVUkFDWV9EUk9QID0gMTA7XHJcblxyXG4vLyBcdTMwQzZcdTMwQUZcdTMwQ0JcdTMwQjdcdTMwRTNcdTMwRjNcdTMwNENcdTkwNjlcdTc1MjhcdTMwNTVcdTMwOENcdTMwOEJcdTVBMDFcdTUyOUJcdTMwNkVcdTRFMEFcdTk2NTBcclxuZXhwb3J0IGNvbnN0IFRFQ0hOSUNJQU5fTU9WRV9QT1dFUl9USFJFU0hPTEQgPSA0O1xyXG4vLyBcdTY1M0JcdTY0ODNcdTdDRkJcdTMwQjlcdTMwQzZcdTMwRkNcdTMwQkZcdTMwQjlcdTMwNkVcdTY3MDBcdTU5MjdcdTUwMjRcclxuZXhwb3J0IGNvbnN0IE9GRkVOU0VfU1RBVF9NQVggPSA5OTk7XHJcbi8vIEhQXHU2NzAwXHU1OTI3XHU1MDI0XHJcbmV4cG9ydCBjb25zdCBNQVhfSFBfQ0FQID0gOTk5O1xyXG5cclxuLyoqIFx1MzA1N1x1MzA1Q1x1MzA5M1x1MzA2RVx1MzA4MVx1MzA1MFx1MzA3Rlx1ODBGRFx1NTI5Qlx1MzBDNlx1MzBGQ1x1MzBENlx1MzBFQiAqL1xyXG5leHBvcnQgY29uc3QgTkFUVVJBTF9HSUZUX0lURU1fVEFCTEUgPSBbXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDQ1LCBlb3MuVFlQRV9HUkFTUywgMSksIC8vIFx1MzA0NFx1MzA4NFx1MzA1N1x1MzA2RVx1MzBCRlx1MzBDRFxyXG4gIG5ldyBOYXR1cmFsR2lmdEluZm8oMHg0NiwgZW9zLlRZUEVfUE9JU09OLCAxKSwgLy8gXHUzMEFBXHUzMEVDXHUzMEYzXHUzMDZFXHUzMDdGXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDQ3LCBlb3MuVFlQRV9QU1lDSElDLCAzKSwgLy8gXHUzMEFBXHUzMERDXHUzMEYzXHUzMDZFXHUzMDdGXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDQ4LCBlb3MuVFlQRV9HSE9TVCwgMiksIC8vIFx1MzA4MVx1MzA1MFx1MzA1OVx1MzA4QVx1MzA2RVx1MzBCRlx1MzBDRFxyXG4gIG5ldyBOYXR1cmFsR2lmdEluZm8oMHg0OSwgZW9zLlRZUEVfR1JPVU5ELCAxKSwgLy8gXHUzMDc1XHUzMDYzXHUzMDRCXHUzMDY0XHUzMDZFXHUzMEJGXHUzMENEXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDRhLCBlb3MuVFlQRV9EQVJLLCAyKSwgLy8gXHUzMDgxXHUzMDY0XHUzMDc2XHUzMDU3XHUzMDZFXHUzMEJGXHUzMENEXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDRiLCBlb3MuVFlQRV9TVEVFTCwgMSksIC8vIFx1MzA3NVx1MzA1M1x1MzA0Nlx1MzA2RVx1MzBCRlx1MzBDRFxyXG4gIG5ldyBOYXR1cmFsR2lmdEluZm8oMHg0YywgZW9zLlRZUEVfREFSSywgMiksIC8vIFx1MzA3RVx1MzA2OVx1MzA4Rlx1MzA1N1x1MzA2RVx1MzBCRlx1MzBDRFxyXG4gIG5ldyBOYXR1cmFsR2lmdEluZm8oMHg0ZCwgZW9zLlRZUEVfRklHSFRJTkcsIDMpLCAvLyBcdTMwNDRcdTMwNkVcdTMwNjFcdTMwNkVcdTMwQkZcdTMwQ0RcclxuICBuZXcgTmF0dXJhbEdpZnRJbmZvKDB4NGUsIGVvcy5UWVBFX0dSQVNTLCAyKSwgLy8gXHUzMEMxXHUzMEZDXHUzMEI0XHUzMDZFXHUzMDdGXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDRmLCBlb3MuVFlQRV9ST0NLLCA1KSwgLy8gXHUzMDRGXHUzMDQ2XHUzMDc1XHUzMDRGXHUzMDZFXHUzMEJGXHUzMENEXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDUwLCBlb3MuVFlQRV9GTFlJTkcsIDIpLCAvLyBcdTMwNTdcdTMwODVcdTMwOTNcdTMwNURcdTMwNEZcdTMwNkVcdTMwQkZcdTMwQ0RcclxuICBuZXcgTmF0dXJhbEdpZnRJbmZvKDB4NTEsIGVvcy5UWVBFX0VMRUNUUklDLCAyKSwgLy8gXHUzMEUyXHUzMEUyXHUzMEYzXHUzMDZFXHUzMDdGXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDUyLCBlb3MuVFlQRV9GSVJFLCAyKSwgLy8gXHUzMEFGXHUzMEU5XHUzMERDXHUzMDZFXHUzMDdGXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDUzLCBlb3MuVFlQRV9HSE9TVCwgMiksIC8vIFx1MzA3NVx1MzA4OVx1MzA3NVx1MzA4OVx1MzA2RVx1MzBCRlx1MzBDRFxyXG4gIG5ldyBOYXR1cmFsR2lmdEluZm8oMHg1NCwgZW9zLlRZUEVfSUNFLCAyKSwgLy8gXHUzMDU5XHUzMDQ0XHUzMDdGXHUzMDkzXHUzMDZFXHUzMEJGXHUzMENEXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDU1LCBlb3MuVFlQRV9OT1JNQUwsIDE1KSwgLy8gXHUzMDVGXHUzMDYwXHUzMDZFXHUzMEJGXHUzMENEXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDU2LCBlb3MuVFlQRV9QU1lDSElDLCAyKSwgLy8gXHUzMEVGXHUzMEZDXHUzMEQ3XHUzMDZFXHUzMEJGXHUzMENEXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDU3LCBlb3MuVFlQRV9EUkFHT04sIDUpLCAvLyBcdTMwNzBcdTMwNEZcdTMwOENcdTMwNjRcdTMwNkVcdTMwQkZcdTMwQ0RcclxuICBuZXcgTmF0dXJhbEdpZnRJbmZvKDB4NTksIGVvcy5UWVBFX05PUk1BTCwgMyksIC8vIFx1MzA1N1x1MzA0Mlx1MzA4Rlx1MzA1Qlx1MzA2RVx1MzBCRlx1MzBDRFxyXG4gIG5ldyBOYXR1cmFsR2lmdEluZm8oMHg1YSwgZW9zLlRZUEVfV0FURVIsIDIpLCAvLyBcdTMwQUJcdTMwQjRcdTMwNkVcdTMwN0ZcclxuICBuZXcgTmF0dXJhbEdpZnRJbmZvKDB4NWIsIGVvcy5UWVBFX0JVRywgMiksIC8vIFx1MzA1N1x1MzA3MFx1MzA4OVx1MzA4Q1x1MzA2RVx1MzBCRlx1MzBDRFxyXG4gIG5ldyBOYXR1cmFsR2lmdEluZm8oMHg1ZCwgZW9zLlRZUEVfRFJBR09OLCAxMCksIC8vIFx1MzA0QVx1MzA0Nlx1MzA1NFx1MzA5M1x1MzA2RVx1MzBCRlx1MzBDRFxyXG4gIG5ldyBOYXR1cmFsR2lmdEluZm8oMHg1ZSwgZW9zLlRZUEVfUE9JU09OLCA1KSwgLy8gXHUzMDU4XHUzMDgzXHUzMDQyXHUzMDRGXHUzMDZBXHUzMEJGXHUzMENEXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDVmLCBlb3MuVFlQRV9XQVRFUiwgNSksIC8vIFx1MzA1Qlx1MzA0NFx1MzA2QVx1MzA4Qlx1MzBCRlx1MzBDRFxyXG4gIG5ldyBOYXR1cmFsR2lmdEluZm8oMHg2MCwgZW9zLlRZUEVfRklHSFRJTkcsIDUpLCAvLyBcdTMwODJcdTMwNDZcdTMwNTJcdTMwNERcdTMwNkVcdTMwQkZcdTMwQ0RcclxuICBuZXcgTmF0dXJhbEdpZnRJbmZvKDB4NjEsIGVvcy5UWVBFX0JVRywgNSksIC8vIFx1MzBDOVx1MzBFRFx1MzBGM1x1MzA2RVx1MzBCRlx1MzBDRFxyXG4gIG5ldyBOYXR1cmFsR2lmdEluZm8oMHg2OCwgZW9zLlRZUEVfR0hPU1QsIDUpLCAvLyBcdTMwODFcdTMwNEZcdTMwNTlcdTMwNTBcdTMwOEFcdTMwNkVcdTMwQkZcdTMwQ0RcclxuICBuZXcgTmF0dXJhbEdpZnRJbmZvKDB4NjksIGVvcy5UWVBFX0dST1VORCwgMiksIC8vIFx1MzA3N1x1MzA2M1x1MzA0Qlx1MzA2NFx1MzA2RVx1MzBCRlx1MzBDRFxyXG4gIG5ldyBOYXR1cmFsR2lmdEluZm8oMHg2YSwgZW9zLlRZUEVfSUNFLCAxMCksIC8vIFx1MzA1OVx1MzA0NFx1MzA3Rlx1MzA5M1x1MzA1MFx1MzA2RVx1MzBCRlx1MzBDRFxyXG4gIG5ldyBOYXR1cmFsR2lmdEluZm8oMHg2YiwgZW9zLlRZUEVfUE9JU09OLCAyKSwgLy8gXHUzMDU4XHUzMDgzXHUzMDQyXHUzMDZBXHUzMDZFXHUzMEJGXHUzMENEXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDc1LCBlb3MuVFlQRV9QT0lTT04sIDIpLCAvLyBcdTMwQUFcdTMwRUNcdTMwQkRcdTMwNkVcdTMwN0ZcclxuICBuZXcgTmF0dXJhbEdpZnRJbmZvKDB4NzYsIGVvcy5UWVBFX1NURUVMLCA1KSwgLy8gXHUzMDc1XHUzMDU0XHUzMDQ2XHUzMDZFXHUzMEJGXHUzMENEXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDAwLCBlb3MuVFlQRV9OT05FLCAwKSwgLy8gKFx1N0E3QVx1MzA0RClcclxuXTtcclxuXHJcbi8qKiBcdTY2NDJcdTk1QzdcdTMwNkVcdTYyODBcdTMwNkVcdTVBMDFcdTUyOUIgKi9cclxuZXhwb3J0IGNvbnN0IFRJTUVfREFSS05FU1NfQkFTRV9QT1dFUiA9IFtcclxuICB7IGlkOiAweDAwMSwgcG93ZXI6IDIwIH0sIC8vIFx1MzBBMlx1MzBBNFx1MzBBMlx1MzBGM1x1MzBDNlx1MzBGQ1x1MzBFQiAyMCAtPiA0MFxyXG4gIHsgaWQ6IDB4MDQwLCBwb3dlcjogMjQgfSwgLy8gXHUzMDRCXHUzMDdGXHUzMDZBXHUzMDhBIDI0IC0+IDQ1XHJcbiAgeyBpZDogMHgwNGIsIHBvd2VyOiAyMCB9LCAvLyBcdTMwNERcdTMwNDJcdTMwNDRcdTMwRDFcdTMwRjNcdTMwQzEgMjAgLT4gNTVcclxuICB7IGlkOiAweDA2ZCwgcG93ZXI6IDE4IH0sIC8vIFx1MzBCNVx1MzBBNFx1MzBCM1x1MzBBRFx1MzBDRFx1MzBCN1x1MzBCOSAxOCAtPiAzOFxyXG4gIHsgaWQ6IDB4MDk1LCBwb3dlcjogMjAgfSwgLy8gXHUzMDVCXHUzMDQ0XHUzMDZBXHUzMDhCXHUzMDdCXHUzMDZFXHUzMDRBIDIwIC0+IDUwXHJcbiAgeyBpZDogMHgwOWQsIHBvd2VyOiAyNCB9LCAvLyBcdTMwNjBcdTMwNDRcdTMwODJcdTMwOTNcdTMwNTggMjQgLT4gMzNcclxuICB7IGlkOiAweDBkYiwgcG93ZXI6IDE4IH0sIC8vIFx1MzA2QVx1MzA3Rlx1MzA2RVx1MzA4QSAxOCAtPiAzMFxyXG4gIHsgaWQ6IDB4MGRkLCBwb3dlcjogMTIgfSwgLy8gXHUzMENCXHUzMEZDXHUzMEM5XHUzMEVCXHUzMEEyXHUzMEZDXHUzMEUwIDEyIC0+IDM2XHJcbiAgeyBpZDogMHgwZWUsIHBvd2VyOiAzMCB9LCAvLyBcdTMwQ0ZcdTMwRkNcdTMwQzlcdTMwRDdcdTMwRTlcdTMwRjNcdTMwQzggMzAgLT4gNDVcclxuICB7IGlkOiAweDBlZiwgcG93ZXI6IDMwIH0sIC8vIFx1MzBDRlx1MzBBNFx1MzBDOVx1MzBFRFx1MzBBQlx1MzBDRVx1MzBGMyAzMCAtPiAzM1xyXG4gIHsgaWQ6IDB4MGY0LCBwb3dlcjogMTQgfSwgLy8gXHUzMDZGXHUzMDRDXHUzMDZEXHUzMDZFXHUzMDY0XHUzMDcwXHUzMDU1IDE0IC0+IDM1XHJcbiAgeyBpZDogMHgxMTYsIHBvd2VyOiAzMCB9LCAvLyBcdTMwNzVcdTMwOTNcdTMwNEIgMzAgLT4gNDBcclxuICB7IGlkOiAweDE0MywgcG93ZXI6IDI0IH0sIC8vIFx1MzBFMVx1MzBBQ1x1MzBEQlx1MzBGQ1x1MzBGMyAyNCAtPiAzOFxyXG5dO1xyXG5cclxuLyoqIFx1MzBERVx1MzBCMFx1MzBDQlx1MzBDMVx1MzBFNVx1MzBGQ1x1MzBDOSBcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdTMwQzZcdTMwRkNcdTMwRDZcdTMwRUIgKFx1NTdGQVx1NjcyQykgKi9cclxuZXhwb3J0IGNvbnN0IE1BR05JVFVERV9EQU1BR0VfVEFCTEUgPSBbNSwgMTAsIDE1LCAyNSwgMzAsIDM1LCA0MF07XHJcbi8qKiBcdTMwQkRcdTMwQ0JcdTMwQzNcdTMwQUZcdTMwRDZcdTMwRkNcdTMwRTAgXHU1NkZBXHU1QjlBXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4ICovXHJcbmV4cG9ydCBjb25zdCBTT05JQ0JPT01fRklYRURfREFNQUdFID0gMjA7XHJcbi8qKiBcdTMwNTdcdTMwOTNcdTMwNEZcdTMwNDZcdTMwNEVcdTMwOEEgXHU1NkZBXHU1QjlBXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4IChcdTU3RkFcdTY3MkMpICovXHJcbmV4cG9ydCBjb25zdCBWQUNVVU1fQ1VUX0ZJWEVEX0RBTUFHRSA9IDE4O1xyXG4vKiogXHUzMDhBXHUzMDg1XHUzMDQ2XHUzMDZFXHUzMDQ0XHUzMDRCXHUzMDhBIFx1NTZGQVx1NUI5QVx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOCAqL1xyXG5leHBvcnQgY29uc3QgRFJBR09OX1JBR0VfRklYRURfREFNQUdFID0gMzA7XHJcbi8qKiBcdTMwNDRcdTMwNTdcdTMwNkVcdTMwNjRcdTMwNzZcdTMwNjYgXHU1NkZBXHU1QjlBXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4ICovXHJcbmV4cG9ydCBjb25zdCBHRU9fUEVCQkxFX0RBTUFHRSA9IDEwO1xyXG4vKiogXHUzMEI0XHUzMEVEXHUzMEZDXHUzMEYzXHUzMDZFXHUzMDQ0XHUzMDU3IFx1NTZGQVx1NUI5QVx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOCAqL1xyXG5leHBvcnQgY29uc3QgR1JBVkVMRVJPQ0tfREFNQUdFID0gMjA7XHJcbi8qKiBcdTMwNUZcdTMwNDRcdTMwNTNcdTMwNkVcdTMwNEJcdTMwNUJcdTMwNEQgXHU1NkZBXHU1QjlBXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4ICovXHJcbmV4cG9ydCBjb25zdCBSQVJFX0ZPU1NJTF9EQU1BR0UgPSAxMDA7XHJcbi8qKiBcdTMwQTJcdTMwRjNcdTMwQ0VcdTMwRkNcdTMwRjNcdTMwNkVcdTMwNDRcdTMwNTcgXHU1NkZBXHU1QjlBXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4ICovXHJcbmV4cG9ydCBjb25zdCBVTk9XTl9ST0NLX0RBTUFHRSA9IDYwO1xyXG4vKiogXHUzMDRBXHUzMDkzXHUzMDRDXHUzMDQ4XHUzMDU3IFx1NTZGQVx1NUI5QVx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1MzBDNlx1MzBGQ1x1MzBENlx1MzBFQiAqL1xyXG5leHBvcnQgY29uc3QgUkVUVVJOX0ZJWEVEX0RBTUFHRV9UQUJMRSA9IFtcclxuICB7IGlxOiA1MCwgZGFtYWdlOiA1IH0sXHJcbiAgeyBpcTogMTAwLCBkYW1hZ2U6IDEwIH0sXHJcbiAgeyBpcTogMjAwLCBkYW1hZ2U6IDE1IH0sXHJcbiAgeyBpcTogMzAwLCBkYW1hZ2U6IDIwIH0sXHJcbiAgeyBpcTogNDAwLCBkYW1hZ2U6IDI1IH0sXHJcbiAgeyBpcTogNTAwLCBkYW1hZ2U6IDMwIH0sXHJcbiAgeyBpcTogNjAwLCBkYW1hZ2U6IDM1IH0sXHJcbiAgeyBpcTogNzAwLCBkYW1hZ2U6IDQwIH0sXHJcbiAgeyBpcTogMTAwMCwgZGFtYWdlOiA0NSB9LFxyXG4gIHsgaXE6IDEwMDAwLCBkYW1hZ2U6IDk5OTkgfSxcclxuICB7IGlxOiAtMSwgZGFtYWdlOiAxIH0sIC8vIDB4ZmZmZlxyXG5dO1xyXG4vKiogXHUzMDg0XHUzMDY0XHUzMDQyXHUzMDVGXHUzMDhBIFx1NTZGQVx1NUI5QVx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1MzBDNlx1MzBGQ1x1MzBENlx1MzBFQiAqL1xyXG5leHBvcnQgY29uc3QgRlJVU1RSQVRJT05fRklYRURfREFNQUdFX1RBQkxFID0gW1xyXG4gIHsgaXE6IDAsIGRhbWFnZTogOTk5OSB9LFxyXG4gIHsgaXE6IDUwLCBkYW1hZ2U6IDQ1IH0sXHJcbiAgeyBpcTogMTAwLCBkYW1hZ2U6IDQwIH0sXHJcbiAgeyBpcTogMjAwLCBkYW1hZ2U6IDM1IH0sXHJcbiAgeyBpcTogMzAwLCBkYW1hZ2U6IDMwIH0sXHJcbiAgeyBpcTogNDAwLCBkYW1hZ2U6IDI1IH0sXHJcbiAgeyBpcTogNTAwLCBkYW1hZ2U6IDIwIH0sXHJcbiAgeyBpcTogNjAwLCBkYW1hZ2U6IDE1IH0sXHJcbiAgeyBpcTogNzAwLCBkYW1hZ2U6IDEwIH0sXHJcbiAgeyBpcTogMTAwMCwgZGFtYWdlOiA1IH0sXHJcbiAgeyBpcTogMTAwMDAsIGRhbWFnZTogMSB9LFxyXG4gIHsgaXE6IC0xLCBkYW1hZ2U6IDEgfSwgLy8gMHhmZmZmXHJcbl07XHJcblxyXG4vKipcclxuICogXHU2MjgwXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDkyXHU1M0Q2XHU1Rjk3XHJcbiAqIEBwYXJhbSB7Kn0gbW92ZUlkXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW92ZVR5cGUobW92ZUlkKSB7XHJcbiAgaWYgKCFNb3ZlRGF0YSkge1xyXG4gICAgY29uc29sZS5lcnJvcignTW92ZURhdGEgbm90IGZvdW5kJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHJldHVybiBNb3ZlRGF0YVttb3ZlSWRdLlR5cGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTVCRkVcdThDNjFcdTMwNkVcdTYyODBcdTMwNENcdTkwMUFcdTVFMzhcdTY1M0JcdTY0ODNcdTMwN0VcdTMwNUZcdTMwNkZcdTYyOTVcdTY0RjJcdTcyNjlcdTMwNjdcdTMwNDJcdTMwOEJcdTMwNEJcclxuICogQHBhcmFtIHsqfSBtb3ZlSWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1JlZ3VsYXJBdHRhY2tPclByb2plY3RpbGUobW92ZUlkKSB7XHJcbiAgcmV0dXJuIG1vdmVJZCA9PSAweDE2MyB8fCBtb3ZlSWQgPT0gMHgxOTU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTVCRkVcdThDNjFcdTMwNkVcdTkwNTNcdTUxNzdcdTMwNENcdTZDRTJcdTUyRDVcdTgyNzJcdTMwRUFcdTMwRENcdTMwRjNcdTMwNjdcdTMwNDJcdTMwOEJcdTMwNEJcclxuICogQHBhcmFtIHsqfSBpdGVtSWRcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0F1cmFCb3coaXRlbUlkKSB7XHJcbiAgcmV0dXJuIGl0ZW1JZCA+PSAweDFhYyAmJiBpdGVtSWQgPD0gMHgxYmI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTMwQjRcdTMwRkNcdTMwQjlcdTMwQzhcdTMwNkJcdTVCRkVcdTMwNTdcdTMwNjZcdTcxMjFcdTUyQjlcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNjdcdTMwNDJcdTMwOEJcdTMwNEJcclxuICogQHBhcmFtIHtOdW1iZXJ9IHR5cGVJZCBcdTMwQkZcdTMwQTRcdTMwRDdJRFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVJbmVmZmVjdGl2ZUFnYWluc3RHaG9zdCh0eXBlSWQpIHtcclxuICByZXR1cm4gdHlwZUlkID09IGVvcy5UWVBFX05PUk1BTCB8fCB0eXBlSWQgPT0gZW9zLlRZUEVfRklHSFRJTkc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTYyODBcdTMwNkVcdTVBMDFcdTUyOUJcdTMwOTJcdTUzRDZcdTVGOTdcclxuICogQHBhcmFtIHtOdW1iZXJ9IG1vdmVJZFxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHRpbWVEYXJrbmVzc1xyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vdmVCYXNlUG93ZXIobW92ZUlkLCB0aW1lRGFya25lc3MpIHtcclxuICBpZiAoIU1vdmVEYXRhKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdNb3ZlRGF0YSBub3QgZm91bmQnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29uc3QgbW92ZSA9IE1vdmVEYXRhW21vdmVJZF07XHJcbiAgaWYgKHRpbWVEYXJrbmVzcykge1xyXG4gICAgY29uc3QgdGRCYXNlUG93ZXIgPSBnZXRNb3ZlQmFzZVBvd2VyVGltZURhcmtuZXNzKG1vdmVJZCk7XHJcbiAgICBpZiAodGRCYXNlUG93ZXIpIHJldHVybiB0ZEJhc2VQb3dlcjtcclxuICB9XHJcbiAgcmV0dXJuIG1vdmUuUG93ZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTYyODBcdTMwNkVcdTU0N0RcdTRFMkRcdTUwMjRcdTMwOTJcdTUzRDZcdTVGOTdcclxuICogQHBhcmFtIHtOdW1iZXJ9IG1vdmVJZCBcdTYyODBJRFxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGFjY3VyYWN5MiBcdTU0N0RcdTRFMkRcdTUwMjQyXHUzMDkyXHU1M0Q2XHU1Rjk3XHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW92ZUFjY3VyYWN5KG1vdmVJZCwgYWNjdXJhY3kyKSB7XHJcbiAgaWYgKCFNb3ZlRGF0YSkge1xyXG4gICAgY29uc29sZS5lcnJvcignTW92ZURhdGEgbm90IGZvdW5kJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGNvbnN0IG1vdmUgPSBNb3ZlRGF0YVttb3ZlSWRdO1xyXG4gIGlmIChhY2N1cmFjeTIpIHtcclxuICAgIHJldHVybiBtb3ZlLkFjY3VyYWN5MjtcclxuICB9XHJcbiAgcmV0dXJuIG1vdmUuQWNjdXJhY3kxO1xyXG59XHJcblxyXG4vKipcclxuICogXHU2MjgwXHUzMDZFXHU2MDI1XHU2MjQwXHU3Mzg3XHUzMDkyXHU1M0Q2XHU1Rjk3XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtb3ZlSWQgXHU2MjgwSURcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNb3ZlQ3JpdENoYW5jZShtb3ZlSWQpIHtcclxuICBpZiAoIU1vdmVEYXRhKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdNb3ZlRGF0YSBub3QgZm91bmQnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29uc3QgbW92ZSA9IE1vdmVEYXRhW21vdmVJZF07XHJcbiAgcmV0dXJuIG1vdmUuQ3JpdGljYWw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTY2NDJcdTk1QzdcdTMwNkVcdTYyODBcdTMwNkVcdTVBMDFcdTUyOUJcdTMwOTJcdTUzRDZcdTVGOTdcclxuICogQHBhcmFtIHtOdW1iZXJ9IG1vdmVJZFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vdmVCYXNlUG93ZXJUaW1lRGFya25lc3MobW92ZUlkKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBUSU1FX0RBUktORVNTX0JBU0VfUE9XRVIubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGVudHJ5ID0gVElNRV9EQVJLTkVTU19CQVNFX1BPV0VSW2ldO1xyXG4gICAgaWYgKGVudHJ5LmlkID09IG1vdmVJZCkge1xyXG4gICAgICByZXR1cm4gZW50cnkucG93ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogXHU2MjgwXHUzMDZFUFBcdTMwOTJcdTUzRDZcdTVGOTdcclxuICogQHBhcmFtIHsqfSBtb3ZlSWRcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNb3ZlTWF4UFAobW92ZUlkKSB7XHJcbiAgaWYgKCFNb3ZlRGF0YSkge1xyXG4gICAgY29uc29sZS5lcnJvcignTW92ZURhdGEgbm90IGZvdW5kJyk7XHJcbiAgfVxyXG4gIHJldHVybiBNb3ZlRGF0YVttb3ZlSWRdLlBQO1xyXG59XHJcblxyXG4vKipcclxuICogXHU1M0NEXHU1MkQ1XHU2MjgwXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHJcbiAqIEBwYXJhbSB7Kn0gbW92ZUlkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNSZWNvaWxNb3ZlKG1vdmVJZCkge1xyXG4gIHJldHVybiBbXHJcbiAgICAweDA3NCwgLy8gXHUzMDU4XHUzMDU0XHUzMDRGXHUzMDUwXHUzMDhCXHUzMDdFXHJcbiAgICAweDA4YywgLy8gXHUzMDU5XHUzMDY2XHUzMDdGXHUzMEJGXHUzMEMzXHUzMEFGXHUzMEVCXHJcbiAgICAweDBjYiwgLy8gXHUzMDY4XHUzMDYzXHUzMDU3XHUzMDkzXHJcbiAgICAweDBjYywgLy8gXHUzMDY4XHUzMDczXHUzMDUyXHUzMDhBXHJcbiAgICAweDBjZSwgLy8gXHUzMDY4XHUzMDczXHUzMDcyXHUzMDU2XHUzMDUyXHUzMDhBXHJcbiAgICAweDE2MiwgLy8gXHUzMERDXHUzMEVCXHUzMEM2XHUzMEMzXHUzMEFCXHUzMEZDXHJcbiAgICAweDFiOSwgLy8gXHUzMEE2XHUzMEMzXHUzMEM5XHUzMENGXHUzMEYzXHUzMERFXHUzMEZDXHJcbiAgICAweDIwNSwgLy8gXHUzMEQ1XHUzMEVDXHUzMEEyXHUzMEM5XHUzMEU5XHUzMEE0XHUzMEQ2XHJcbiAgICAweDIwNiwgLy8gXHUzMEQ2XHUzMEVDXHUzMEE0XHUzMEQ2XHUzMEQwXHUzMEZDXHUzMEM5XHJcbiAgICAweDIxNSwgLy8gXHUzMDgyXHUzMDhEXHUzMDZGXHUzMDZFXHUzMDVBXHUzMDY0XHUzMDREXHJcbiAgXS5pbmNsdWRlcyhtb3ZlSWQpO1xyXG59XHJcblxyXG4vKipcclxuICogXHUzMEQxXHUzMEYzXHUzMEMxXHU2MjgwXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHJcbiAqIEBwYXJhbSB7Kn0gbW92ZUlkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNQdW5jaE1vdmUobW92ZUlkKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIDB4MDQxLCAvLyBcdTMwNEJcdTMwN0ZcdTMwNkFcdTMwOEFcdTMwRDFcdTMwRjNcdTMwQzFcclxuICAgIDB4MDRiLCAvLyBcdTMwNERcdTMwNDJcdTMwNDRcdTMwRDFcdTMwRjNcdTMwQzFcclxuICAgIDB4MDY3LCAvLyBcdTMwQjNcdTMwRTFcdTMwQzNcdTMwQzhcdTMwRDFcdTMwRjNcdTMwQzFcclxuICAgIDB4MDdlLCAvLyBcdTMwQjdcdTMwRTNcdTMwQzlcdTMwRkNcdTMwRDFcdTMwRjNcdTMwQzFcclxuICAgIDB4MDg4LCAvLyBcdTMwQjlcdTMwQUJcdTMwQTRcdTMwQTJcdTMwQzNcdTMwRDFcdTMwRkNcclxuICAgIDB4MGY2LCAvLyBcdTMwNzBcdTMwNEZcdTMwOENcdTMwNjRcdTMwRDFcdTMwRjNcdTMwQzFcclxuICAgIDB4MTA4LCAvLyBcdTMwRDRcdTMwRThcdTMwRDRcdTMwRThcdTMwRDFcdTMwRjNcdTMwQzFcclxuICAgIDB4MTI0LCAvLyBcdTMwN0JcdTMwNkVcdTMwNEFcdTMwNkVcdTMwRDFcdTMwRjNcdTMwQzFcclxuICAgIDB4MTQyLCAvLyBcdTMwREVcdTMwQzNcdTMwQ0ZcdTMwRDFcdTMwRjNcdTMwQzFcclxuICAgIDB4MTU4LCAvLyBcdTMwRTFcdTMwQUNcdTMwQzhcdTMwRjNcdTMwRDFcdTMwRjNcdTMwQzFcclxuICAgIDB4MTViLCAvLyBcdTMwOENcdTMwNDRcdTMwNjhcdTMwNDZcdTMwRDFcdTMwRjNcdTMwQzFcclxuICAgIDB4MWFlLCAvLyBcdTMwOENcdTMwOTNcdTMwNUVcdTMwNEZcdTMwRDFcdTMwRjNcdTMwQzFcclxuICAgIDB4MWY0LCAvLyBcdTMwQTJcdTMwRkNcdTMwRTBcdTMwQ0ZcdTMwRjNcdTMwREVcdTMwRkNcclxuICAgIDB4MWZlLCAvLyBcdTMwRDBcdTMwRUNcdTMwQzNcdTMwQzhcdTMwRDFcdTMwRjNcdTMwQzFcclxuICBdLmluY2x1ZGVzKG1vdmVJZCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTk3RjNcdTYyODBcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcclxuICogQHBhcmFtIHsqfSBtb3ZlSWRcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1NvdW5kTW92ZShtb3ZlSWQpIHtcclxuICByZXR1cm4gW1xyXG4gICAgMHgwMTksIC8vIFx1MzA0NFx1MzA3M1x1MzA0RFxyXG4gICAgMHgwMWEsIC8vIFx1MzA0NFx1MzA4NFx1MzA1N1x1MzA2RVx1MzA1OVx1MzA1QVxyXG4gICAgMHgwMWIsIC8vIFx1MzA0NFx1MzA4NFx1MzA2QVx1MzA0QVx1MzA2OFxyXG4gICAgMHgwMjIsIC8vIFx1MzA0Nlx1MzA1Rlx1MzA0NlxyXG4gICAgMHgwNTMsIC8vIFx1MzA0RFx1MzA5M1x1MzA1RVx1MzA0Rlx1MzA0QVx1MzA5M1xyXG4gICAgMHgwNTQsIC8vIFx1MzA0Rlx1MzA1NVx1MzA3Nlx1MzA0OFxyXG4gICAgMHgwYWIsIC8vIFx1MzA2MVx1MzA4N1x1MzA0Nlx1MzA0QVx1MzA5M1x1MzA3MVxyXG4gICAgMHgwZDksIC8vIFx1MzA2QVx1MzA0RFx1MzA1NFx1MzA0OFxyXG4gICAgMHgwZjEsIC8vIFx1MzBDRlx1MzBBNFx1MzBEMVx1MzBGQ1x1MzBEQ1x1MzBBNFx1MzBCOVxyXG4gICAgMHgxMWMsIC8vIFx1MzA3Qlx1MzA0OFx1MzA4QlxyXG4gICAgMHgxMjUsIC8vIFx1MzA3Qlx1MzA4RFx1MzA3M1x1MzA2RVx1MzA0Nlx1MzA1RlxyXG4gICAgMHgyMTIsIC8vIFx1MzA4MFx1MzA1N1x1MzA2RVx1MzA1NVx1MzA1Nlx1MzA4MVx1MzA0RFxyXG4gICAgMHgxYmUsIC8vIFx1MzA0QVx1MzA1N1x1MzA4M1x1MzA3OVx1MzA4QVxyXG4gIF0uaW5jbHVkZXMobW92ZUlkKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1MzA2RVx1OTFDRFx1MzA1NVx1NTAwRFx1NzM4N1x1MzA5Mlx1NTNENlx1NUY5N1xyXG4gKiBAcGFyYW0geyp9IHBva2Vtb25JZFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vbnN0ZXJXZWlnaHQocG9rZW1vbklkKSB7XHJcbiAgaWYgKCFQb2tlbW9uRGF0YSkge1xyXG4gICAgY29uc29sZS5lcnJvcignUG9rZW1vbkRhdGEgbm90IGZvdW5kJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGNvbnN0IHBva2Vtb24gPSBQb2tlbW9uRGF0YVtwb2tlbW9uSWRdO1xyXG4gIGNvbnN0IHJhdyA9IHBva2Vtb24uV2VpZ2h0O1xyXG4gIHJldHVybiAoKHJhdyA+PiA4KSArIChyYXcgJiAweGZmKSkgLyAweDEwMDtcclxufVxyXG4iLCAiLy8gXHUzMEJGXHUzMEE0XHUzMEQ3XHJcbmV4cG9ydCBjb25zdCBwb2tlVHlwZSA9IFtcclxuICB7IGlkOiAwLCBuYW1lOiAnXHUzMDZBXHUzMDU3JyB9LFxyXG4gIHsgaWQ6IDEsIG5hbWU6ICdcdTMwQ0VcdTMwRkNcdTMwREVcdTMwRUInIH0sXHJcbiAgeyBpZDogMiwgbmFtZTogJ1x1MzA3Qlx1MzA2RVx1MzA0QScgfSxcclxuICB7IGlkOiAzLCBuYW1lOiAnXHUzMDdGXHUzMDVBJyB9LFxyXG4gIHsgaWQ6IDQsIG5hbWU6ICdcdTMwNEZcdTMwNTUnIH0sXHJcbiAgeyBpZDogNSwgbmFtZTogJ1x1MzA2N1x1MzA5M1x1MzA0RCcgfSxcclxuICB7IGlkOiA2LCBuYW1lOiAnXHUzMDUzXHUzMDRBXHUzMDhBJyB9LFxyXG4gIHsgaWQ6IDcsIG5hbWU6ICdcdTMwNEJcdTMwNEZcdTMwNjhcdTMwNDYnIH0sXHJcbiAgeyBpZDogOCwgbmFtZTogJ1x1MzA2OVx1MzA0RicgfSxcclxuICB7IGlkOiA5LCBuYW1lOiAnXHUzMDU4XHUzMDgxXHUzMDkzJyB9LFxyXG4gIHsgaWQ6IDEwLCBuYW1lOiAnXHUzMDcyXHUzMDUzXHUzMDQ2JyB9LFxyXG4gIHsgaWQ6IDExLCBuYW1lOiAnXHUzMEE4XHUzMEI5XHUzMEQxXHUzMEZDJyB9LFxyXG4gIHsgaWQ6IDEyLCBuYW1lOiAnXHUzMDgwXHUzMDU3JyB9LFxyXG4gIHsgaWQ6IDEzLCBuYW1lOiAnXHUzMDQ0XHUzMDhGJyB9LFxyXG4gIHsgaWQ6IDE0LCBuYW1lOiAnXHUzMEI0XHUzMEZDXHUzMEI5XHUzMEM4JyB9LFxyXG4gIHsgaWQ6IDE1LCBuYW1lOiAnXHUzMEM5XHUzMEU5XHUzMEI0XHUzMEYzJyB9LFxyXG4gIHsgaWQ6IDE2LCBuYW1lOiAnXHUzMDQyXHUzMDRGJyB9LFxyXG4gIHsgaWQ6IDE3LCBuYW1lOiAnXHUzMDZGXHUzMDRDXHUzMDZEJyB9LFxyXG5dO1xyXG5cclxuLy8gXHU2MDI3XHU1MjI1XHJcbmV4cG9ydCBjb25zdCBwb2tlR2VuZGVyID0gW1xyXG4gIHsgaWQ6IDAsIG5hbWU6ICdcdTcxMjFcdTUyQjknIH0sXHJcbiAgeyBpZDogMSwgbmFtZTogJ1x1MzBBQVx1MzBCOScgfSxcclxuICB7IGlkOiAyLCBuYW1lOiAnXHUzMEUxXHUzMEI5JyB9LFxyXG4gIHsgaWQ6IDMsIG5hbWU6ICdcdTRFMERcdTY2MEUnIH0sXHJcbl07XHJcblxyXG4vLyBcdTc5RkJcdTUyRDVcdTMwQkZcdTMwQTRcdTMwRDdcclxuZXhwb3J0IGNvbnN0IHBva2VNb3ZldHlwZSA9IFtcclxuICB7IGlkOiAwLCBuYW1lOiAnXHU5MDFBXHU1RTM4JyB9LFxyXG4gIHsgaWQ6IDEsIG5hbWU6ICc/IChcdTRFMERcdTY2MEUpJyB9LFxyXG4gIHsgaWQ6IDIsIG5hbWU6ICdcdTdBN0FcdTRFMkQnIH0sXHJcbiAgeyBpZDogMywgbmFtZTogJ1x1OTAxQVx1OTA0RScgfSxcclxuICB7IGlkOiA0LCBuYW1lOiAnXHUzMERFXHUzMEIwXHUzMERFJyB9LFxyXG4gIHsgaWQ6IDUsIG5hbWU6ICdcdTZDMzRcdTRFMEEnIH0sXHJcbl07XHJcblxyXG4vLyBcdTMwNEJcdTMwNTdcdTMwNTNcdTMwNTVcdTMwQjBcdTMwRUJcdTMwRkNcdTMwRDdcclxuZXhwb3J0IGNvbnN0IHBva2VJcWdyb3VwID0gW1xyXG4gIHsgaWQ6IDAsIG5hbWU6ICdBJyB9LFxyXG4gIHsgaWQ6IDEsIG5hbWU6ICdCJyB9LFxyXG4gIHsgaWQ6IDIsIG5hbWU6ICdDJyB9LFxyXG4gIHsgaWQ6IDMsIG5hbWU6ICdEJyB9LFxyXG4gIHsgaWQ6IDQsIG5hbWU6ICdFJyB9LFxyXG4gIHsgaWQ6IDUsIG5hbWU6ICdGJyB9LFxyXG4gIHsgaWQ6IDYsIG5hbWU6ICdHJyB9LFxyXG4gIHsgaWQ6IDcsIG5hbWU6ICdIJyB9LFxyXG4gIHsgaWQ6IDgsIG5hbWU6ICdcdTY3MkFcdTRGN0ZcdTc1MjgnIH0sXHJcbiAgeyBpZDogOSwgbmFtZTogJ1x1NjcyQVx1NEY3Rlx1NzUyOCcgfSxcclxuICB7IGlkOiAxMCwgbmFtZTogJ0knIH0sXHJcbiAgeyBpZDogMTEsIG5hbWU6ICdKJyB9LFxyXG4gIHsgaWQ6IDEyLCBuYW1lOiAnXHU2NzJBXHU0RjdGXHU3NTI4JyB9LFxyXG4gIHsgaWQ6IDEzLCBuYW1lOiAnXHU2NzJBXHU0RjdGXHU3NTI4JyB9LFxyXG4gIHsgaWQ6IDE0LCBuYW1lOiAnXHU2NzJBXHU0RjdGXHU3NTI4JyB9LFxyXG4gIHsgaWQ6IDE1LCBuYW1lOiAnXHU2NzJBXHU0RjdGXHU3NTI4JyB9LFxyXG5dO1xyXG4iLCAiLypcclxuICBUaGlzIGNvZGUgaW5jbHVkZXMgcG9ydGlvbnMgYmFzZWQgb24gZGFtYWdlLWVvcyBieSBVc2VybmFtZUZvZGRlclxyXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9Vc2VybmFtZUZvZGRlci9kYW1hZ2UtZW9zXHJcblxyXG4gIE9yaWdpbmFsIGNvZGUgcG9ydGlvbnM6XHJcbiAgLSBNSVQgTGljZW5zZSAoYykgMjAyMyBVc2VybmFtZUZvZGRlclxyXG5cclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgT3JpZ2luYWwgTGljZW5zZTpcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgTUlUIExpY2Vuc2VcclxuXHJcbiAgQ29weXJpZ2h0IChjKSAyMDIzIFVzZXJuYW1lRm9kZGVyXHJcblxyXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcbiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG4gIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuICBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuICBTT0ZUV0FSRS5cclxuKi9cclxuXHJcbmltcG9ydCAqIGFzIGVvcyBmcm9tICcuL2NvbnN0LmpzJztcclxuXHJcbmNsYXNzIElETWFwIHtcclxuICBpZCA9IDA7XHJcbiAgdGV4dCA9ICcnO1xyXG4gIGNvbnN0cnVjdG9yKGlkLCB0ZXh0KSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gIH1cclxufVxyXG5cclxuLyoqIFx1NjI4MFx1MzA2RVx1NTIwNlx1OTg1RSAqL1xyXG5leHBvcnQgY29uc3QgTU9WRV9DQVRFR09SWSA9IFtcclxuICBuZXcgSURNYXAoZW9zLkNBVEVHT1JZX1BIWVNJQ0FMLCAnXHU3MjY5XHU3NDA2JyksXHJcbiAgbmV3IElETWFwKGVvcy5DQVRFR09SWV9TUEVDSUFMLCAnXHU3Mjc5XHU2QjhBJyksXHJcbiAgbmV3IElETWFwKDIsICdcdTU5MDlcdTUzMTYnKSxcclxuXTtcclxuXHJcbi8qKiBcdTMwQkZcdTMwQTRcdTMwRDdcdTc2RjhcdTYwMjcgKi9cclxuZXhwb3J0IGNvbnN0IFRZUEVfTUFUQ0hVUCA9IFtcclxuICBuZXcgSURNYXAoZW9zLk1BVENIVVBfSU1NVU5FLCAnXHU1MkI5XHU2NzlDXHUzMDZBXHUzMDU3JyksXHJcbiAgbmV3IElETWFwKGVvcy5NQVRDSFVQX05PVF9WRVJZX0VGRkVDVElWRSwgJ1x1NEVDQVx1MzA3Mlx1MzA2OFx1MzA2NCcpLFxyXG4gIG5ldyBJRE1hcChlb3MuTUFUQ0hVUF9ORVVUUkFMLCAnXHU2NjZFXHU5MDFBJyksXHJcbiAgbmV3IElETWFwKGVvcy5NQVRDSFVQX1NVUEVSX0VGRkVDVElWRSwgJ1x1NTJCOVx1Njc5Q1x1NjI5Q1x1N0ZBNCcpLFxyXG5dO1xyXG5cclxuLyoqIFx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1MzBCRFx1MzBGQ1x1MzBCOSAqL1xyXG5leHBvcnQgY29uc3QgREFNQUdFX01FU1NBR0UgPSBbXHJcbiAgbmV3IElETWFwKGVvcy5EQU1BR0VfTUVTU0FHRV9NT1ZFLCAnXHU2MjgwJyksXHJcbiAgbmV3IElETWFwKGVvcy5EQU1BR0VfTUVTU0FHRV9CVVJOLCAnXHUzMDg0XHUzMDUxXHUzMDY5JyksXHJcbiAgbmV3IElETWFwKGVvcy5EQU1BR0VfTUVTU0FHRV9DT05TVFJJQ1RJT04sICdcdTMwNTdcdTMwODFcdTMwNjRcdTMwNTEnKSxcclxuICBuZXcgSURNYXAoZW9zLkRBTUFHRV9NRVNTQUdFX1BPSVNPTiwgJ1x1MzA2OVx1MzA0RicpLFxyXG4gIG5ldyBJRE1hcChlb3MuREFNQUdFX01FU1NBR0VfUkVDT0lMXzEsICdcdTUzQ0RcdTUyRDUxJyksXHJcbiAgbmV3IElETWFwKGVvcy5EQU1BR0VfTUVTU0FHRV9XUkFQLCAnXHUzMDdFXHUzMDREXHUzMDY0XHUzMDRGJyksXHJcbiAgbmV3IElETWFwKGVvcy5EQU1BR0VfTUVTU0FHRV9DT1VOVEVSLCAnXHUzMEFCXHUzMEE2XHUzMEYzXHUzMEJGXHUzMEZDJyksXHJcbiAgbmV3IElETWFwKGVvcy5EQU1BR0VfTUVTU0FHRV9DVVJTRSwgJ1x1MzA2RVx1MzA4RFx1MzA0NCcpLFxyXG4gIG5ldyBJRE1hcChlb3MuREFNQUdFX01FU1NBR0VfTklHSFRNQVJFLCAnXHUzMDQyXHUzMDRGXHUzMDgwJyksXHJcbiAgbmV3IElETWFwKGVvcy5EQU1BR0VfTUVTU0FHRV9MRUVDSF9TRUVELCAnXHUzMDg0XHUzMDY5XHUzMDhBXHUzMDRFJyksXHJcbiAgbmV3IElETWFwKGVvcy5EQU1BR0VfTUVTU0FHRV9TUElLRVMsICdcdTMwN0VcdTMwNERcdTMwNzNcdTMwNTcnKSxcclxuICBuZXcgSURNYXAoZW9zLkRBTUFHRV9NRVNTQUdFX1BFUklTSF9TT05HLCAnXHUzMDdCXHUzMDhEXHUzMDczXHUzMDZFXHUzMDQ2XHUzMDVGJyksXHJcbiAgbmV3IElETWFwKGVvcy5EQU1BR0VfTUVTU0FHRV9ERVNUSU5ZX0JPTkQsICdcdTMwN0ZcdTMwNjFcdTMwNjVcdTMwOEMnKSxcclxuICBuZXcgSURNYXAoZW9zLkRBTUFHRV9NRVNTQUdFX1NMVURHRSwgJ1x1MzBEOFx1MzBDOVx1MzBFRFx1MzA0OFx1MzA0RCcpLFxyXG4gIG5ldyBJRE1hcChlb3MuREFNQUdFX01FU1NBR0VfSFVOR0VSLCAnXHUzMDRGXHUzMDQ2XHUzMDc1XHUzMDRGJyksXHJcbiAgbmV3IElETWFwKGVvcy5EQU1BR0VfTUVTU0FHRV9DSEVTVE5VVF8xLCAnXHUzMEE0XHUzMEFDXHUzMEIwXHUzMEVBMScpLFxyXG4gIG5ldyBJRE1hcChlb3MuREFNQUdFX01FU1NBR0VfQ0hFU1ROVVRfMiwgJ1x1MzBBNFx1MzBBQ1x1MzBCMFx1MzBFQTInKSxcclxuICBuZXcgSURNYXAoZW9zLkRBTUFHRV9NRVNTQUdFX1BJVEZBTExfVFJBUCwgJ1x1MzA0QVx1MzA2OFx1MzA1N1x1MzA0Mlx1MzA2QScpLFxyXG4gIG5ldyBJRE1hcChlb3MuREFNQUdFX01FU1NBR0VfQkFEX1dFQVRIRVIsICdcdTYwQUFcdTU5MjlcdTUwMTknKSxcclxuICBuZXcgSURNYXAoZW9zLkRBTUFHRV9NRVNTQUdFX01JU1NFRF9NT1ZFLCAnXHU2MjgwXHU1OTMxXHU2NTU3XHU4MUVBXHU1MEI3JyksXHJcbiAgbmV3IElETWFwKGVvcy5EQU1BR0VfTUVTU0FHRV9SRUNPSUxfMiwgJ1x1NTNDRFx1NTJENTInKSxcclxuICBuZXcgSURNYXAoZW9zLkRBTUFHRV9NRVNTQUdFX1NURUFMVEhfUk9DSywgJ1x1MzBCOVx1MzBDNlx1MzBFQlx1MzBCOVx1MzBFRFx1MzBDM1x1MzBBRicpLFxyXG4gIG5ldyBJRE1hcChlb3MuREFNQUdFX01FU1NBR0VfVE9YSUNfU1BJS0VTLCAnXHUzMDY5XHUzMDRGXHUzMDczXHUzMDU3JyksXHJcbiAgbmV3IElETWFwKGVvcy5EQU1BR0VfTUVTU0FHRV9BTE1PU1RfRkFJTlRFRCwgJ0hQMVx1ODFFQVx1NTBCNycpLFxyXG4gIG5ldyBJRE1hcChlb3MuREFNQUdFX01FU1NBR0VfQkFEX0RSRUFNUywgJ1x1MzBDQVx1MzBBNFx1MzBDOFx1MzBFMVx1MzBBMicpLFxyXG4gIG5ldyBJRE1hcChlb3MuREFNQUdFX01FU1NBR0VfU09MQVJfUE9XRVIsICdcdTMwQjVcdTMwRjNcdTMwRDFcdTMwRUZcdTMwRkMnKSxcclxuICBuZXcgSURNYXAoZW9zLkRBTUFHRV9NRVNTQUdFX0RSWV9TS0lOLCAnXHUzMDRCXHUzMDkzXHUzMDVEXHUzMDQ2XHUzMDZGXHUzMDYwJyksXHJcbl07XHJcbiIsICIvKlxyXG4gIFRoaXMgY29kZSBpbmNsdWRlcyBwb3J0aW9ucyBiYXNlZCBvbiBkYW1hZ2UtZW9zIGJ5IFVzZXJuYW1lRm9kZGVyXHJcbiAgaHR0cHM6Ly9naXRodWIuY29tL1VzZXJuYW1lRm9kZGVyL2RhbWFnZS1lb3NcclxuXHJcbiAgT3JpZ2luYWwgY29kZSBwb3J0aW9uczpcclxuICAtIE1JVCBMaWNlbnNlIChjKSAyMDIzIFVzZXJuYW1lRm9kZGVyXHJcblxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBPcmlnaW5hbCBMaWNlbnNlOlxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBNSVQgTGljZW5zZVxyXG5cclxuICBDb3B5cmlnaHQgKGMpIDIwMjMgVXNlcm5hbWVGb2RkZXJcclxuXHJcbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG4gIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG4gIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG4gIFNPRlRXQVJFLlxyXG4qL1xyXG5cclxuLyoqXHJcbiAqIGxuXHU1MUU2XHU3NDA2IChwbWRza3ktZGVidWc6IDB4MjAwMjFGNClcclxuICogQHBhcmFtIHsqfSB4XHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2xhbXBlZExuKHgpIHtcclxuICBjb25zdCBMT0dfVkFMVUVfVEFCTEUgPSBbXHJcbiAgICAweDAgLyAweDEwMDAwLFxyXG4gICAgMHgwIC8gMHgxMDAwMCxcclxuICAgIDB4YjE3MCAvIDB4MTAwMDAsXHJcbiAgICAweDExOTMwIC8gMHgxMDAwMCxcclxuICAgIDB4MTYyZTAgLyAweDEwMDAwLFxyXG4gICAgMHgxOWMwMCAvIDB4MTAwMDAsXHJcbiAgICAweDFjYWIwIC8gMHgxMDAwMCxcclxuICAgIDB4MWYyMjAgLyAweDEwMDAwLFxyXG4gICAgMHgyMTQ1MCAvIDB4MTAwMDAsXHJcbiAgICAweDIzMjcwIC8gMHgxMDAwMCxcclxuICAgIDB4MjRkNzAgLyAweDEwMDAwLFxyXG4gICAgMHgyNjVkMCAvIDB4MTAwMDAsXHJcbiAgICAweDI3YzIwIC8gMHgxMDAwMCxcclxuICAgIDB4MjkwYTAgLyAweDEwMDAwLFxyXG4gICAgMHgyYTM5MCAvIDB4MTAwMDAsXHJcbiAgICAweDJiNTQwIC8gMHgxMDAwMCxcclxuICAgIDB4MmM1YzAgLyAweDEwMDAwLFxyXG4gICAgMHgyZDU0MCAvIDB4MTAwMDAsXHJcbiAgICAweDJlM2UwIC8gMHgxMDAwMCxcclxuICAgIDB4MmYxYzAgLyAweDEwMDAwLFxyXG4gICAgMHgyZmVlMCAvIDB4MTAwMDAsXHJcbiAgICAweDMwYjYwIC8gMHgxMDAwMCxcclxuICAgIDB4MzE3NDAgLyAweDEwMDAwLFxyXG4gICAgMHgzMjJhMCAvIDB4MTAwMDAsXHJcbiAgICAweDMyZDkwIC8gMHgxMDAwMCxcclxuICAgIDB4MzM4MDAgLyAweDEwMDAwLFxyXG4gICAgMHgzNDIxMCAvIDB4MTAwMDAsXHJcbiAgICAweDM0YmIwIC8gMHgxMDAwMCxcclxuICAgIDB4MzU1MDAgLyAweDEwMDAwLFxyXG4gICAgMHgzNWUwMCAvIDB4MTAwMDAsXHJcbiAgICAweDM2NmIwIC8gMHgxMDAwMCxcclxuICAgIDB4MzZmMTAgLyAweDEwMDAwLFxyXG4gICAgMHgzNzczMCAvIDB4MTAwMDAsXHJcbiAgICAweDM3ZjEwIC8gMHgxMDAwMCxcclxuICAgIDB4Mzg2YjAgLyAweDEwMDAwLFxyXG4gICAgMHgzOGUyMCAvIDB4MTAwMDAsXHJcbiAgICAweDM5NTYwIC8gMHgxMDAwMCxcclxuICAgIDB4MzljNjAgLyAweDEwMDAwLFxyXG4gICAgMHgzYTMzMCAvIDB4MTAwMDAsXHJcbiAgICAweDNhOWQwIC8gMHgxMDAwMCxcclxuICAgIDB4M2IwNTAgLyAweDEwMDAwLFxyXG4gICAgMHgzYjZhMCAvIDB4MTAwMDAsXHJcbiAgICAweDNiY2QwIC8gMHgxMDAwMCxcclxuICAgIDB4M2MyZDAgLyAweDEwMDAwLFxyXG4gICAgMHgzYzhjMCAvIDB4MTAwMDAsXHJcbiAgICAweDNjZTgwIC8gMHgxMDAwMCxcclxuICAgIDB4M2Q0MjAgLyAweDEwMDAwLFxyXG4gICAgMHgzZDlhMCAvIDB4MTAwMDAsXHJcbiAgICAweDNkZjAwIC8gMHgxMDAwMCxcclxuICAgIDB4M2U0NDAgLyAweDEwMDAwLFxyXG4gICAgMHgzZTk3MCAvIDB4MTAwMDAsXHJcbiAgICAweDNlZTgwIC8gMHgxMDAwMCxcclxuICAgIDB4M2YzODAgLyAweDEwMDAwLFxyXG4gICAgMHgzZjg2MCAvIDB4MTAwMDAsXHJcbiAgICAweDNmZDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NDAxZTAgLyAweDEwMDAwLFxyXG4gICAgMHg0MDY3MCAvIDB4MTAwMDAsXHJcbiAgICAweDQwYjAwIC8gMHgxMDAwMCxcclxuICAgIDB4NDBmNzAgLyAweDEwMDAwLFxyXG4gICAgMHg0MTNkMCAvIDB4MTAwMDAsXHJcbiAgICAweDQxODIwIC8gMHgxMDAwMCxcclxuICAgIDB4NDFjNjAgLyAweDEwMDAwLFxyXG4gICAgMHg0MjA4MCAvIDB4MTAwMDAsXHJcbiAgICAweDQyNGEwIC8gMHgxMDAwMCxcclxuICAgIDB4NDI4YTAgLyAweDEwMDAwLFxyXG4gICAgMHg0MmNhMCAvIDB4MTAwMDAsXHJcbiAgICAweDQzMDgwIC8gMHgxMDAwMCxcclxuICAgIDB4NDM0NjAgLyAweDEwMDAwLFxyXG4gICAgMHg0MzgzMCAvIDB4MTAwMDAsXHJcbiAgICAweDQzYmUwIC8gMHgxMDAwMCxcclxuICAgIDB4NDNmOTAgLyAweDEwMDAwLFxyXG4gICAgMHg0NDMzMCAvIDB4MTAwMDAsXHJcbiAgICAweDQ0NmQwIC8gMHgxMDAwMCxcclxuICAgIDB4NDRhNTAgLyAweDEwMDAwLFxyXG4gICAgMHg0NGRkMCAvIDB4MTAwMDAsXHJcbiAgICAweDQ1MTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NDU0YTAgLyAweDEwMDAwLFxyXG4gICAgMHg0NTgwMCAvIDB4MTAwMDAsXHJcbiAgICAweDQ1YjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NDVlOTAgLyAweDEwMDAwLFxyXG4gICAgMHg0NjFjMCAvIDB4MTAwMDAsXHJcbiAgICAweDQ2NGYwIC8gMHgxMDAwMCxcclxuICAgIDB4NDY4MTAgLyAweDEwMDAwLFxyXG4gICAgMHg0NmIzMCAvIDB4MTAwMDAsXHJcbiAgICAweDQ2ZTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NDcxNTAgLyAweDEwMDAwLFxyXG4gICAgMHg0NzQ1MCAvIDB4MTAwMDAsXHJcbiAgICAweDQ3NzQwIC8gMHgxMDAwMCxcclxuICAgIDB4NDdhMzAgLyAweDEwMDAwLFxyXG4gICAgMHg0N2QxMCAvIDB4MTAwMDAsXHJcbiAgICAweDQ3ZmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NDgyYzAgLyAweDEwMDAwLFxyXG4gICAgMHg0ODU5MCAvIDB4MTAwMDAsXHJcbiAgICAweDQ4ODUwIC8gMHgxMDAwMCxcclxuICAgIDB4NDhiMTAgLyAweDEwMDAwLFxyXG4gICAgMHg0OGRjMCAvIDB4MTAwMDAsXHJcbiAgICAweDQ5MDcwIC8gMHgxMDAwMCxcclxuICAgIDB4NDkzMjAgLyAweDEwMDAwLFxyXG4gICAgMHg0OTVjMCAvIDB4MTAwMDAsXHJcbiAgICAweDQ5ODUwIC8gMHgxMDAwMCxcclxuICAgIDB4NDlhZTAgLyAweDEwMDAwLFxyXG4gICAgMHg0OWQ3MCAvIDB4MTAwMDAsXHJcbiAgICAweDQ5ZmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NGEyNzAgLyAweDEwMDAwLFxyXG4gICAgMHg0YTRmMCAvIDB4MTAwMDAsXHJcbiAgICAweDRhNzYwIC8gMHgxMDAwMCxcclxuICAgIDB4NGE5ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg0YWMzMCAvIDB4MTAwMDAsXHJcbiAgICAweDRhZWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NGIwZjAgLyAweDEwMDAwLFxyXG4gICAgMHg0YjM1MCAvIDB4MTAwMDAsXHJcbiAgICAweDRiNWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NGI3ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg0YmEzMCAvIDB4MTAwMDAsXHJcbiAgICAweDRiYzcwIC8gMHgxMDAwMCxcclxuICAgIDB4NGJlYjAgLyAweDEwMDAwLFxyXG4gICAgMHg0YzBlMCAvIDB4MTAwMDAsXHJcbiAgICAweDRjMzEwIC8gMHgxMDAwMCxcclxuICAgIDB4NGM1NDAgLyAweDEwMDAwLFxyXG4gICAgMHg0Yzc3MCAvIDB4MTAwMDAsXHJcbiAgICAweDRjOTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NGNiYjAgLyAweDEwMDAwLFxyXG4gICAgMHg0Y2RkMCAvIDB4MTAwMDAsXHJcbiAgICAweDRjZmUwIC8gMHgxMDAwMCxcclxuICAgIDB4NGQxZjAgLyAweDEwMDAwLFxyXG4gICAgMHg0ZDQwMCAvIDB4MTAwMDAsXHJcbiAgICAweDRkNjEwIC8gMHgxMDAwMCxcclxuICAgIDB4NGQ4MTAgLyAweDEwMDAwLFxyXG4gICAgMHg0ZGExMCAvIDB4MTAwMDAsXHJcbiAgICAweDRkYzEwIC8gMHgxMDAwMCxcclxuICAgIDB4NGRlMTAgLyAweDEwMDAwLFxyXG4gICAgMHg0ZTAwMCAvIDB4MTAwMDAsXHJcbiAgICAweDRlMWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NGUzZTAgLyAweDEwMDAwLFxyXG4gICAgMHg0ZTVkMCAvIDB4MTAwMDAsXHJcbiAgICAweDRlN2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NGU5YTAgLyAweDEwMDAwLFxyXG4gICAgMHg0ZWI4MCAvIDB4MTAwMDAsXHJcbiAgICAweDRlZDYwIC8gMHgxMDAwMCxcclxuICAgIDB4NGVmMzAgLyAweDEwMDAwLFxyXG4gICAgMHg0ZjEwMCAvIDB4MTAwMDAsXHJcbiAgICAweDRmMmUwIC8gMHgxMDAwMCxcclxuICAgIDB4NGY0YjAgLyAweDEwMDAwLFxyXG4gICAgMHg0ZjY3MCAvIDB4MTAwMDAsXHJcbiAgICAweDRmODQwIC8gMHgxMDAwMCxcclxuICAgIDB4NGZhMDAgLyAweDEwMDAwLFxyXG4gICAgMHg0ZmJjMCAvIDB4MTAwMDAsXHJcbiAgICAweDRmZDgwIC8gMHgxMDAwMCxcclxuICAgIDB4NGZmNDAgLyAweDEwMDAwLFxyXG4gICAgMHg1MDEwMCAvIDB4MTAwMDAsXHJcbiAgICAweDUwMmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NTA0NjAgLyAweDEwMDAwLFxyXG4gICAgMHg1MDYxMCAvIDB4MTAwMDAsXHJcbiAgICAweDUwN2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NTA5NzAgLyAweDEwMDAwLFxyXG4gICAgMHg1MGIxMCAvIDB4MTAwMDAsXHJcbiAgICAweDUwY2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NTBlNjAgLyAweDEwMDAwLFxyXG4gICAgMHg1MTAwMCAvIDB4MTAwMDAsXHJcbiAgICAweDUxMWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NTEzMzAgLyAweDEwMDAwLFxyXG4gICAgMHg1MTRkMCAvIDB4MTAwMDAsXHJcbiAgICAweDUxNjYwIC8gMHgxMDAwMCxcclxuICAgIDB4NTE4MDAgLyAweDEwMDAwLFxyXG4gICAgMHg1MTk5MCAvIDB4MTAwMDAsXHJcbiAgICAweDUxYjEwIC8gMHgxMDAwMCxcclxuICAgIDB4NTFjYTAgLyAweDEwMDAwLFxyXG4gICAgMHg1MWUzMCAvIDB4MTAwMDAsXHJcbiAgICAweDUxZmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NTIxNDAgLyAweDEwMDAwLFxyXG4gICAgMHg1MjJjMCAvIDB4MTAwMDAsXHJcbiAgICAweDUyNDQwIC8gMHgxMDAwMCxcclxuICAgIDB4NTI1YzAgLyAweDEwMDAwLFxyXG4gICAgMHg1MjczMCAvIDB4MTAwMDAsXHJcbiAgICAweDUyOGIwIC8gMHgxMDAwMCxcclxuICAgIDB4NTJhMjAgLyAweDEwMDAwLFxyXG4gICAgMHg1MmJhMCAvIDB4MTAwMDAsXHJcbiAgICAweDUyZDEwIC8gMHgxMDAwMCxcclxuICAgIDB4NTJlODAgLyAweDEwMDAwLFxyXG4gICAgMHg1MmZmMCAvIDB4MTAwMDAsXHJcbiAgICAweDUzMTYwIC8gMHgxMDAwMCxcclxuICAgIDB4NTMyZDAgLyAweDEwMDAwLFxyXG4gICAgMHg1MzQzMCAvIDB4MTAwMDAsXHJcbiAgICAweDUzNWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NTM3MDAgLyAweDEwMDAwLFxyXG4gICAgMHg1Mzg2MCAvIDB4MTAwMDAsXHJcbiAgICAweDUzOWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NTNiMjAgLyAweDEwMDAwLFxyXG4gICAgMHg1M2M4MCAvIDB4MTAwMDAsXHJcbiAgICAweDUzZGUwIC8gMHgxMDAwMCxcclxuICAgIDB4NTNmMzAgLyAweDEwMDAwLFxyXG4gICAgMHg1NDA5MCAvIDB4MTAwMDAsXHJcbiAgICAweDU0MWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NTQzMzAgLyAweDEwMDAwLFxyXG4gICAgMHg1NDQ5MCAvIDB4MTAwMDAsXHJcbiAgICAweDU0NWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NTQ3MzAgLyAweDEwMDAwLFxyXG4gICAgMHg1NDg4MCAvIDB4MTAwMDAsXHJcbiAgICAweDU0OWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NTRiMTAgLyAweDEwMDAwLFxyXG4gICAgMHg1NGM1MCAvIDB4MTAwMDAsXHJcbiAgICAweDU0ZGEwIC8gMHgxMDAwMCxcclxuICAgIDB4NTRlZTAgLyAweDEwMDAwLFxyXG4gICAgMHg1NTAyMCAvIDB4MTAwMDAsXHJcbiAgICAweDU1MTcwIC8gMHgxMDAwMCxcclxuICAgIDB4NTUyYjAgLyAweDEwMDAwLFxyXG4gICAgMHg1NTNlMCAvIDB4MTAwMDAsXHJcbiAgICAweDU1NTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NTU2NjAgLyAweDEwMDAwLFxyXG4gICAgMHg1NTdhMCAvIDB4MTAwMDAsXHJcbiAgICAweDU1OGQwIC8gMHgxMDAwMCxcclxuICAgIDB4NTVhMTAgLyAweDEwMDAwLFxyXG4gICAgMHg1NWI0MCAvIDB4MTAwMDAsXHJcbiAgICAweDU1YzcwIC8gMHgxMDAwMCxcclxuICAgIDB4NTVkYjAgLyAweDEwMDAwLFxyXG4gICAgMHg1NWVlMCAvIDB4MTAwMDAsXHJcbiAgICAweDU2MDEwIC8gMHgxMDAwMCxcclxuICAgIDB4NTYxNDAgLyAweDEwMDAwLFxyXG4gICAgMHg1NjI2MCAvIDB4MTAwMDAsXHJcbiAgICAweDU2MzkwIC8gMHgxMDAwMCxcclxuICAgIDB4NTY0YzAgLyAweDEwMDAwLFxyXG4gICAgMHg1NjVlMCAvIDB4MTAwMDAsXHJcbiAgICAweDU2NzEwIC8gMHgxMDAwMCxcclxuICAgIDB4NTY4MzAgLyAweDEwMDAwLFxyXG4gICAgMHg1Njk2MCAvIDB4MTAwMDAsXHJcbiAgICAweDU2YTgwIC8gMHgxMDAwMCxcclxuICAgIDB4NTZiYTAgLyAweDEwMDAwLFxyXG4gICAgMHg1NmNjMCAvIDB4MTAwMDAsXHJcbiAgICAweDU2ZGUwIC8gMHgxMDAwMCxcclxuICAgIDB4NTZmMDAgLyAweDEwMDAwLFxyXG4gICAgMHg1NzAyMCAvIDB4MTAwMDAsXHJcbiAgICAweDU3MTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NTcyNTAgLyAweDEwMDAwLFxyXG4gICAgMHg1NzM3MCAvIDB4MTAwMDAsXHJcbiAgICAweDU3NDgwIC8gMHgxMDAwMCxcclxuICAgIDB4NTc1YTAgLyAweDEwMDAwLFxyXG4gICAgMHg1NzZiMCAvIDB4MTAwMDAsXHJcbiAgICAweDU3N2QwIC8gMHgxMDAwMCxcclxuICAgIDB4NTc4ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg1NzlmMCAvIDB4MTAwMDAsXHJcbiAgICAweDU3YjAwIC8gMHgxMDAwMCxcclxuICAgIDB4NTdjMTAgLyAweDEwMDAwLFxyXG4gICAgMHg1N2QyMCAvIDB4MTAwMDAsXHJcbiAgICAweDU3ZTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NTdmNDAgLyAweDEwMDAwLFxyXG4gICAgMHg1ODA1MCAvIDB4MTAwMDAsXHJcbiAgICAweDU4MTUwIC8gMHgxMDAwMCxcclxuICAgIDB4NTgyNjAgLyAweDEwMDAwLFxyXG4gICAgMHg1ODM3MCAvIDB4MTAwMDAsXHJcbiAgICAweDU4NDcwIC8gMHgxMDAwMCxcclxuICAgIDB4NTg1NzAgLyAweDEwMDAwLFxyXG4gICAgMHg1ODY4MCAvIDB4MTAwMDAsXHJcbiAgICAweDU4NzgwIC8gMHgxMDAwMCxcclxuICAgIDB4NTg4ODAgLyAweDEwMDAwLFxyXG4gICAgMHg1ODk4MCAvIDB4MTAwMDAsXHJcbiAgICAweDU4YTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NThiOTAgLyAweDEwMDAwLFxyXG4gICAgMHg1OGM5MCAvIDB4MTAwMDAsXHJcbiAgICAweDU4ZDgwIC8gMHgxMDAwMCxcclxuICAgIDB4NThlODAgLyAweDEwMDAwLFxyXG4gICAgMHg1OGY4MCAvIDB4MTAwMDAsXHJcbiAgICAweDU5MDgwIC8gMHgxMDAwMCxcclxuICAgIDB4NTkxNzAgLyAweDEwMDAwLFxyXG4gICAgMHg1OTI3MCAvIDB4MTAwMDAsXHJcbiAgICAweDU5MzcwIC8gMHgxMDAwMCxcclxuICAgIDB4NTk0NjAgLyAweDEwMDAwLFxyXG4gICAgMHg1OTU2MCAvIDB4MTAwMDAsXHJcbiAgICAweDU5NjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NTk3NDAgLyAweDEwMDAwLFxyXG4gICAgMHg1OTgzMCAvIDB4MTAwMDAsXHJcbiAgICAweDU5OTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NTlhMjAgLyAweDEwMDAwLFxyXG4gICAgMHg1OWIxMCAvIDB4MTAwMDAsXHJcbiAgICAweDU5YzAwIC8gMHgxMDAwMCxcclxuICAgIDB4NTljZjAgLyAweDEwMDAwLFxyXG4gICAgMHg1OWRlMCAvIDB4MTAwMDAsXHJcbiAgICAweDU5ZWQwIC8gMHgxMDAwMCxcclxuICAgIDB4NTlmYjAgLyAweDEwMDAwLFxyXG4gICAgMHg1YTBhMCAvIDB4MTAwMDAsXHJcbiAgICAweDVhMTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NWEyODAgLyAweDEwMDAwLFxyXG4gICAgMHg1YTM2MCAvIDB4MTAwMDAsXHJcbiAgICAweDVhNDUwIC8gMHgxMDAwMCxcclxuICAgIDB4NWE1MzAgLyAweDEwMDAwLFxyXG4gICAgMHg1YTYyMCAvIDB4MTAwMDAsXHJcbiAgICAweDVhNzAwIC8gMHgxMDAwMCxcclxuICAgIDB4NWE3ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg1YThkMCAvIDB4MTAwMDAsXHJcbiAgICAweDVhOWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NWFhOTAgLyAweDEwMDAwLFxyXG4gICAgMHg1YWI3MCAvIDB4MTAwMDAsXHJcbiAgICAweDVhYzUwIC8gMHgxMDAwMCxcclxuICAgIDB4NWFkMzAgLyAweDEwMDAwLFxyXG4gICAgMHg1YWUxMCAvIDB4MTAwMDAsXHJcbiAgICAweDVhZWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NWFmZDAgLyAweDEwMDAwLFxyXG4gICAgMHg1YjBiMCAvIDB4MTAwMDAsXHJcbiAgICAweDViMTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NWIyNzAgLyAweDEwMDAwLFxyXG4gICAgMHg1YjM1MCAvIDB4MTAwMDAsXHJcbiAgICAweDViNDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NWI1MDAgLyAweDEwMDAwLFxyXG4gICAgMHg1YjVkMCAvIDB4MTAwMDAsXHJcbiAgICAweDViNmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NWI3ODAgLyAweDEwMDAwLFxyXG4gICAgMHg1Yjg2MCAvIDB4MTAwMDAsXHJcbiAgICAweDViOTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NWJhMTAgLyAweDEwMDAwLFxyXG4gICAgMHg1YmFlMCAvIDB4MTAwMDAsXHJcbiAgICAweDViYmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NWJjOTAgLyAweDEwMDAwLFxyXG4gICAgMHg1YmQ2MCAvIDB4MTAwMDAsXHJcbiAgICAweDViZTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NWJmMDAgLyAweDEwMDAwLFxyXG4gICAgMHg1YmZkMCAvIDB4MTAwMDAsXHJcbiAgICAweDVjMGEwIC8gMHgxMDAwMCxcclxuICAgIDB4NWMxNzAgLyAweDEwMDAwLFxyXG4gICAgMHg1YzI0MCAvIDB4MTAwMDAsXHJcbiAgICAweDVjMzEwIC8gMHgxMDAwMCxcclxuICAgIDB4NWMzZTAgLyAweDEwMDAwLFxyXG4gICAgMHg1YzRiMCAvIDB4MTAwMDAsXHJcbiAgICAweDVjNTcwIC8gMHgxMDAwMCxcclxuICAgIDB4NWM2NDAgLyAweDEwMDAwLFxyXG4gICAgMHg1YzcxMCAvIDB4MTAwMDAsXHJcbiAgICAweDVjN2QwIC8gMHgxMDAwMCxcclxuICAgIDB4NWM4YTAgLyAweDEwMDAwLFxyXG4gICAgMHg1Yzk3MCAvIDB4MTAwMDAsXHJcbiAgICAweDVjYTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NWNiMDAgLyAweDEwMDAwLFxyXG4gICAgMHg1Y2JjMCAvIDB4MTAwMDAsXHJcbiAgICAweDVjYzkwIC8gMHgxMDAwMCxcclxuICAgIDB4NWNkNTAgLyAweDEwMDAwLFxyXG4gICAgMHg1Y2UxMCAvIDB4MTAwMDAsXHJcbiAgICAweDVjZWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NWNmYTAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZDA2MCAvIDB4MTAwMDAsXHJcbiAgICAweDVkMTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NWQxZjAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZDJiMCAvIDB4MTAwMDAsXHJcbiAgICAweDVkMzcwIC8gMHgxMDAwMCxcclxuICAgIDB4NWQ0MzAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZDRmMCAvIDB4MTAwMDAsXHJcbiAgICAweDVkNWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NWQ2NzAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZDczMCAvIDB4MTAwMDAsXHJcbiAgICAweDVkN2YwIC8gMHgxMDAwMCxcclxuICAgIDB4NWQ4YjAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZDk2MCAvIDB4MTAwMDAsXHJcbiAgICAweDVkYTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NWRhZTAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZGJhMCAvIDB4MTAwMDAsXHJcbiAgICAweDVkYzUwIC8gMHgxMDAwMCxcclxuICAgIDB4NWRkMTAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZGRkMCAvIDB4MTAwMDAsXHJcbiAgICAweDVkZTgwIC8gMHgxMDAwMCxcclxuICAgIDB4NWRmNDAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZGZmMCAvIDB4MTAwMDAsXHJcbiAgICAweDVlMGIwIC8gMHgxMDAwMCxcclxuICAgIDB4NWUxNjAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZTIyMCAvIDB4MTAwMDAsXHJcbiAgICAweDVlMmQwIC8gMHgxMDAwMCxcclxuICAgIDB4NWUzODAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZTQ0MCAvIDB4MTAwMDAsXHJcbiAgICAweDVlNGYwIC8gMHgxMDAwMCxcclxuICAgIDB4NWU1YTAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZTY1MCAvIDB4MTAwMDAsXHJcbiAgICAweDVlNzEwIC8gMHgxMDAwMCxcclxuICAgIDB4NWU3YzAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZTg3MCAvIDB4MTAwMDAsXHJcbiAgICAweDVlOTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NWU5ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZWE4MCAvIDB4MTAwMDAsXHJcbiAgICAweDVlYjMwIC8gMHgxMDAwMCxcclxuICAgIDB4NWViZTAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZWM5MCAvIDB4MTAwMDAsXHJcbiAgICAweDVlZDQwIC8gMHgxMDAwMCxcclxuICAgIDB4NWVkZjAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZWVhMCAvIDB4MTAwMDAsXHJcbiAgICAweDVlZjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NWYwMDAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZjBhMCAvIDB4MTAwMDAsXHJcbiAgICAweDVmMTUwIC8gMHgxMDAwMCxcclxuICAgIDB4NWYyMDAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZjJiMCAvIDB4MTAwMDAsXHJcbiAgICAweDVmMzUwIC8gMHgxMDAwMCxcclxuICAgIDB4NWY0MDAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZjRiMCAvIDB4MTAwMDAsXHJcbiAgICAweDVmNTUwIC8gMHgxMDAwMCxcclxuICAgIDB4NWY2MDAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZjZhMCAvIDB4MTAwMDAsXHJcbiAgICAweDVmNzUwIC8gMHgxMDAwMCxcclxuICAgIDB4NWY3ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZjhhMCAvIDB4MTAwMDAsXHJcbiAgICAweDVmOTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NWY5ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZmE5MCAvIDB4MTAwMDAsXHJcbiAgICAweDVmYjMwIC8gMHgxMDAwMCxcclxuICAgIDB4NWZiZTAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZmM4MCAvIDB4MTAwMDAsXHJcbiAgICAweDVmZDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NWZkZDAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZmU3MCAvIDB4MTAwMDAsXHJcbiAgICAweDVmZjEwIC8gMHgxMDAwMCxcclxuICAgIDB4NWZmYjAgLyAweDEwMDAwLFxyXG4gICAgMHg2MDA1MCAvIDB4MTAwMDAsXHJcbiAgICAweDYwMGYwIC8gMHgxMDAwMCxcclxuICAgIDB4NjAxYTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MDI0MCAvIDB4MTAwMDAsXHJcbiAgICAweDYwMmUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjAzODAgLyAweDEwMDAwLFxyXG4gICAgMHg2MDQyMCAvIDB4MTAwMDAsXHJcbiAgICAweDYwNGMwIC8gMHgxMDAwMCxcclxuICAgIDB4NjA1NjAgLyAweDEwMDAwLFxyXG4gICAgMHg2MDYwMCAvIDB4MTAwMDAsXHJcbiAgICAweDYwNjkwIC8gMHgxMDAwMCxcclxuICAgIDB4NjA3MzAgLyAweDEwMDAwLFxyXG4gICAgMHg2MDdkMCAvIDB4MTAwMDAsXHJcbiAgICAweDYwODcwIC8gMHgxMDAwMCxcclxuICAgIDB4NjA5MTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MDliMCAvIDB4MTAwMDAsXHJcbiAgICAweDYwYTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NjBhZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MGI4MCAvIDB4MTAwMDAsXHJcbiAgICAweDYwYzIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjBjYjAgLyAweDEwMDAwLFxyXG4gICAgMHg2MGQ1MCAvIDB4MTAwMDAsXHJcbiAgICAweDYwZGUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjBlODAgLyAweDEwMDAwLFxyXG4gICAgMHg2MGYyMCAvIDB4MTAwMDAsXHJcbiAgICAweDYwZmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjEwNTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MTBlMCAvIDB4MTAwMDAsXHJcbiAgICAweDYxMTgwIC8gMHgxMDAwMCxcclxuICAgIDB4NjEyMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MTJiMCAvIDB4MTAwMDAsXHJcbiAgICAweDYxMzQwIC8gMHgxMDAwMCxcclxuICAgIDB4NjEzZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MTQ3MCAvIDB4MTAwMDAsXHJcbiAgICAweDYxNTAwIC8gMHgxMDAwMCxcclxuICAgIDB4NjE1YTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MTYzMCAvIDB4MTAwMDAsXHJcbiAgICAweDYxNmMwIC8gMHgxMDAwMCxcclxuICAgIDB4NjE3NjAgLyAweDEwMDAwLFxyXG4gICAgMHg2MTdmMCAvIDB4MTAwMDAsXHJcbiAgICAweDYxODgwIC8gMHgxMDAwMCxcclxuICAgIDB4NjE5MTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MTlhMCAvIDB4MTAwMDAsXHJcbiAgICAweDYxYTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NjFhZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2MWI2MCAvIDB4MTAwMDAsXHJcbiAgICAweDYxYmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NjFjODAgLyAweDEwMDAwLFxyXG4gICAgMHg2MWQxMCAvIDB4MTAwMDAsXHJcbiAgICAweDYxZGEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjFlMzAgLyAweDEwMDAwLFxyXG4gICAgMHg2MWVjMCAvIDB4MTAwMDAsXHJcbiAgICAweDYxZjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjFmZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MjA3MCAvIDB4MTAwMDAsXHJcbiAgICAweDYyMTAwIC8gMHgxMDAwMCxcclxuICAgIDB4NjIxOTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MjIyMCAvIDB4MTAwMDAsXHJcbiAgICAweDYyMmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjIzNDAgLyAweDEwMDAwLFxyXG4gICAgMHg2MjNjMCAvIDB4MTAwMDAsXHJcbiAgICAweDYyNDUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjI0ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MjU3MCAvIDB4MTAwMDAsXHJcbiAgICAweDYyNjAwIC8gMHgxMDAwMCxcclxuICAgIDB4NjI2ODAgLyAweDEwMDAwLFxyXG4gICAgMHg2MjcxMCAvIDB4MTAwMDAsXHJcbiAgICAweDYyN2EwIC8gMHgxMDAwMCxcclxuICAgIDB4NjI4MjAgLyAweDEwMDAwLFxyXG4gICAgMHg2MjhiMCAvIDB4MTAwMDAsXHJcbiAgICAweDYyOTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NjI5YzAgLyAweDEwMDAwLFxyXG4gICAgMHg2MmE1MCAvIDB4MTAwMDAsXHJcbiAgICAweDYyYWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjJiNjAgLyAweDEwMDAwLFxyXG4gICAgMHg2MmJmMCAvIDB4MTAwMDAsXHJcbiAgICAweDYyYzcwIC8gMHgxMDAwMCxcclxuICAgIDB4NjJkMDAgLyAweDEwMDAwLFxyXG4gICAgMHg2MmQ4MCAvIDB4MTAwMDAsXHJcbiAgICAweDYyZTEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjJlOTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MmYyMCAvIDB4MTAwMDAsXHJcbiAgICAweDYyZmEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjMwMzAgLyAweDEwMDAwLFxyXG4gICAgMHg2MzBiMCAvIDB4MTAwMDAsXHJcbiAgICAweDYzMTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NjMxYzAgLyAweDEwMDAwLFxyXG4gICAgMHg2MzI0MCAvIDB4MTAwMDAsXHJcbiAgICAweDYzMmMwIC8gMHgxMDAwMCxcclxuICAgIDB4NjMzNTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MzNkMCAvIDB4MTAwMDAsXHJcbiAgICAweDYzNDUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjM0ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MzU2MCAvIDB4MTAwMDAsXHJcbiAgICAweDYzNWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjM2NjAgLyAweDEwMDAwLFxyXG4gICAgMHg2MzZmMCAvIDB4MTAwMDAsXHJcbiAgICAweDYzNzcwIC8gMHgxMDAwMCxcclxuICAgIDB4NjM3ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2Mzg3MCAvIDB4MTAwMDAsXHJcbiAgICAweDYzOGYwIC8gMHgxMDAwMCxcclxuICAgIDB4NjM5NzAgLyAweDEwMDAwLFxyXG4gICAgMHg2MzlmMCAvIDB4MTAwMDAsXHJcbiAgICAweDYzYTcwIC8gMHgxMDAwMCxcclxuICAgIDB4NjNiMDAgLyAweDEwMDAwLFxyXG4gICAgMHg2M2I4MCAvIDB4MTAwMDAsXHJcbiAgICAweDYzYzAwIC8gMHgxMDAwMCxcclxuICAgIDB4NjNjODAgLyAweDEwMDAwLFxyXG4gICAgMHg2M2QwMCAvIDB4MTAwMDAsXHJcbiAgICAweDYzZDgwIC8gMHgxMDAwMCxcclxuICAgIDB4NjNlMDAgLyAweDEwMDAwLFxyXG4gICAgMHg2M2U4MCAvIDB4MTAwMDAsXHJcbiAgICAweDYzZjAwIC8gMHgxMDAwMCxcclxuICAgIDB4NjNmNzAgLyAweDEwMDAwLFxyXG4gICAgMHg2M2ZmMCAvIDB4MTAwMDAsXHJcbiAgICAweDY0MDcwIC8gMHgxMDAwMCxcclxuICAgIDB4NjQwZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2NDE3MCAvIDB4MTAwMDAsXHJcbiAgICAweDY0MWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NjQyNzAgLyAweDEwMDAwLFxyXG4gICAgMHg2NDJmMCAvIDB4MTAwMDAsXHJcbiAgICAweDY0MzYwIC8gMHgxMDAwMCxcclxuICAgIDB4NjQzZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NDQ2MCAvIDB4MTAwMDAsXHJcbiAgICAweDY0NGUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjQ1NTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NDVkMCAvIDB4MTAwMDAsXHJcbiAgICAweDY0NjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjQ2ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2NDc0MCAvIDB4MTAwMDAsXHJcbiAgICAweDY0N2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NjQ4NDAgLyAweDEwMDAwLFxyXG4gICAgMHg2NDhiMCAvIDB4MTAwMDAsXHJcbiAgICAweDY0OTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NjQ5YjAgLyAweDEwMDAwLFxyXG4gICAgMHg2NGEyMCAvIDB4MTAwMDAsXHJcbiAgICAweDY0YWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjRiMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NGI5MCAvIDB4MTAwMDAsXHJcbiAgICAweDY0YzAwIC8gMHgxMDAwMCxcclxuICAgIDB4NjRjODAgLyAweDEwMDAwLFxyXG4gICAgMHg2NGQwMCAvIDB4MTAwMDAsXHJcbiAgICAweDY0ZDcwIC8gMHgxMDAwMCxcclxuICAgIDB4NjRkZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2NGU2MCAvIDB4MTAwMDAsXHJcbiAgICAweDY0ZWQwIC8gMHgxMDAwMCxcclxuICAgIDB4NjRmNTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NGZjMCAvIDB4MTAwMDAsXHJcbiAgICAweDY1MDQwIC8gMHgxMDAwMCxcclxuICAgIDB4NjUwYjAgLyAweDEwMDAwLFxyXG4gICAgMHg2NTEzMCAvIDB4MTAwMDAsXHJcbiAgICAweDY1MWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjUyMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NTI5MCAvIDB4MTAwMDAsXHJcbiAgICAweDY1MzAwIC8gMHgxMDAwMCxcclxuICAgIDB4NjUzNzAgLyAweDEwMDAwLFxyXG4gICAgMHg2NTNmMCAvIDB4MTAwMDAsXHJcbiAgICAweDY1NDYwIC8gMHgxMDAwMCxcclxuICAgIDB4NjU0ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2NTU1MCAvIDB4MTAwMDAsXHJcbiAgICAweDY1NWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NjU2MzAgLyAweDEwMDAwLFxyXG4gICAgMHg2NTZhMCAvIDB4MTAwMDAsXHJcbiAgICAweDY1NzIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjU3OTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NTgwMCAvIDB4MTAwMDAsXHJcbiAgICAweDY1ODcwIC8gMHgxMDAwMCxcclxuICAgIDB4NjU4ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NTk2MCAvIDB4MTAwMDAsXHJcbiAgICAweDY1OWQwIC8gMHgxMDAwMCxcclxuICAgIDB4NjVhNDAgLyAweDEwMDAwLFxyXG4gICAgMHg2NWFiMCAvIDB4MTAwMDAsXHJcbiAgICAweDY1YjIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjViOTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NWMwMCAvIDB4MTAwMDAsXHJcbiAgICAweDY1YzcwIC8gMHgxMDAwMCxcclxuICAgIDB4NjVjZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NWQ2MCAvIDB4MTAwMDAsXHJcbiAgICAweDY1ZGQwIC8gMHgxMDAwMCxcclxuICAgIDB4NjVlNDAgLyAweDEwMDAwLFxyXG4gICAgMHg2NWViMCAvIDB4MTAwMDAsXHJcbiAgICAweDY1ZjIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjVmOTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NjAwMCAvIDB4MTAwMDAsXHJcbiAgICAweDY2MDcwIC8gMHgxMDAwMCxcclxuICAgIDB4NjYwZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NjE0MCAvIDB4MTAwMDAsXHJcbiAgICAweDY2MWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjYyMjAgLyAweDEwMDAwLFxyXG4gICAgMHg2NjI5MCAvIDB4MTAwMDAsXHJcbiAgICAweDY2MzAwIC8gMHgxMDAwMCxcclxuICAgIDB4NjYzNzAgLyAweDEwMDAwLFxyXG4gICAgMHg2NjNlMCAvIDB4MTAwMDAsXHJcbiAgICAweDY2NDUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjY0YzAgLyAweDEwMDAwLFxyXG4gICAgMHg2NjUyMCAvIDB4MTAwMDAsXHJcbiAgICAweDY2NTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NjY2MDAgLyAweDEwMDAwLFxyXG4gICAgMHg2NjY3MCAvIDB4MTAwMDAsXHJcbiAgICAweDY2NmUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjY3NTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NjdiMCAvIDB4MTAwMDAsXHJcbiAgICAweDY2ODIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjY4OTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NjkwMCAvIDB4MTAwMDAsXHJcbiAgICAweDY2OTYwIC8gMHgxMDAwMCxcclxuICAgIDB4NjY5ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2NmE0MCAvIDB4MTAwMDAsXHJcbiAgICAweDY2YWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjZiMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NmI4MCAvIDB4MTAwMDAsXHJcbiAgICAweDY2YmUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjZjNTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NmNjMCAvIDB4MTAwMDAsXHJcbiAgICAweDY2ZDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjZkOTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NmUwMCAvIDB4MTAwMDAsXHJcbiAgICAweDY2ZTYwIC8gMHgxMDAwMCxcclxuICAgIDB4NjZlZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2NmYzMCAvIDB4MTAwMDAsXHJcbiAgICAweDY2ZmEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjcwMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NzA3MCAvIDB4MTAwMDAsXHJcbiAgICAweDY3MGUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjcxNDAgLyAweDEwMDAwLFxyXG4gICAgMHg2NzFiMCAvIDB4MTAwMDAsXHJcbiAgICAweDY3MjEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjcyODAgLyAweDEwMDAwLFxyXG4gICAgMHg2NzJlMCAvIDB4MTAwMDAsXHJcbiAgICAweDY3MzUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjczYjAgLyAweDEwMDAwLFxyXG4gICAgMHg2NzQyMCAvIDB4MTAwMDAsXHJcbiAgICAweDY3NDgwIC8gMHgxMDAwMCxcclxuICAgIDB4Njc0ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NzU1MCAvIDB4MTAwMDAsXHJcbiAgICAweDY3NWIwIC8gMHgxMDAwMCxcclxuICAgIDB4Njc2MjAgLyAweDEwMDAwLFxyXG4gICAgMHg2NzY4MCAvIDB4MTAwMDAsXHJcbiAgICAweDY3NmUwIC8gMHgxMDAwMCxcclxuICAgIDB4Njc3NTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NzdiMCAvIDB4MTAwMDAsXHJcbiAgICAweDY3ODIwIC8gMHgxMDAwMCxcclxuICAgIDB4Njc4ODAgLyAweDEwMDAwLFxyXG4gICAgMHg2NzhlMCAvIDB4MTAwMDAsXHJcbiAgICAweDY3OTUwIC8gMHgxMDAwMCxcclxuICAgIDB4Njc5YjAgLyAweDEwMDAwLFxyXG4gICAgMHg2N2ExMCAvIDB4MTAwMDAsXHJcbiAgICAweDY3YTcwIC8gMHgxMDAwMCxcclxuICAgIDB4NjdhZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2N2I0MCAvIDB4MTAwMDAsXHJcbiAgICAweDY3YmEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjdjMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2N2M3MCAvIDB4MTAwMDAsXHJcbiAgICAweDY3Y2QwIC8gMHgxMDAwMCxcclxuICAgIDB4NjdkMzAgLyAweDEwMDAwLFxyXG4gICAgMHg2N2RhMCAvIDB4MTAwMDAsXHJcbiAgICAweDY3ZTAwIC8gMHgxMDAwMCxcclxuICAgIDB4NjdlNjAgLyAweDEwMDAwLFxyXG4gICAgMHg2N2VjMCAvIDB4MTAwMDAsXHJcbiAgICAweDY3ZjIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjdmODAgLyAweDEwMDAwLFxyXG4gICAgMHg2N2ZmMCAvIDB4MTAwMDAsXHJcbiAgICAweDY4MDUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjgwYjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ODExMCAvIDB4MTAwMDAsXHJcbiAgICAweDY4MTcwIC8gMHgxMDAwMCxcclxuICAgIDB4NjgxZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2ODIzMCAvIDB4MTAwMDAsXHJcbiAgICAweDY4MmEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjgzMDAgLyAweDEwMDAwLFxyXG4gICAgMHg2ODM2MCAvIDB4MTAwMDAsXHJcbiAgICAweDY4M2MwIC8gMHgxMDAwMCxcclxuICAgIDB4Njg0MjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ODQ4MCAvIDB4MTAwMDAsXHJcbiAgICAweDY4NGUwIC8gMHgxMDAwMCxcclxuICAgIDB4Njg1NDAgLyAweDEwMDAwLFxyXG4gICAgMHg2ODVhMCAvIDB4MTAwMDAsXHJcbiAgICAweDY4NjAwIC8gMHgxMDAwMCxcclxuICAgIDB4Njg2NjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ODZjMCAvIDB4MTAwMDAsXHJcbiAgICAweDY4NzIwIC8gMHgxMDAwMCxcclxuICAgIDB4Njg3ODAgLyAweDEwMDAwLFxyXG4gICAgMHg2ODdlMCAvIDB4MTAwMDAsXHJcbiAgICAweDY4ODQwIC8gMHgxMDAwMCxcclxuICAgIDB4Njg4YTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ODkwMCAvIDB4MTAwMDAsXHJcbiAgICAweDY4OTYwIC8gMHgxMDAwMCxcclxuICAgIDB4Njg5YzAgLyAweDEwMDAwLFxyXG4gICAgMHg2OGEyMCAvIDB4MTAwMDAsXHJcbiAgICAweDY4YTgwIC8gMHgxMDAwMCxcclxuICAgIDB4NjhhZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2OGIzMCAvIDB4MTAwMDAsXHJcbiAgICAweDY4YjkwIC8gMHgxMDAwMCxcclxuICAgIDB4NjhiZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2OGM1MCAvIDB4MTAwMDAsXHJcbiAgICAweDY4Y2IwIC8gMHgxMDAwMCxcclxuICAgIDB4NjhkMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2OGQ3MCAvIDB4MTAwMDAsXHJcbiAgICAweDY4ZGMwIC8gMHgxMDAwMCxcclxuICAgIDB4NjhlMjAgLyAweDEwMDAwLFxyXG4gICAgMHg2OGU4MCAvIDB4MTAwMDAsXHJcbiAgICAweDY4ZWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjhmNDAgLyAweDEwMDAwLFxyXG4gICAgMHg2OGY5MCAvIDB4MTAwMDAsXHJcbiAgICAweDY4ZmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NjkwNTAgLyAweDEwMDAwLFxyXG4gICAgMHg2OTBiMCAvIDB4MTAwMDAsXHJcbiAgICAweDY5MTEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjkxNjAgLyAweDEwMDAwLFxyXG4gICAgMHg2OTFjMCAvIDB4MTAwMDAsXHJcbiAgICAweDY5MjIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjkyODAgLyAweDEwMDAwLFxyXG4gICAgMHg2OTJkMCAvIDB4MTAwMDAsXHJcbiAgICAweDY5MzMwIC8gMHgxMDAwMCxcclxuICAgIDB4NjkzOTAgLyAweDEwMDAwLFxyXG4gICAgMHg2OTNlMCAvIDB4MTAwMDAsXHJcbiAgICAweDY5NDQwIC8gMHgxMDAwMCxcclxuICAgIDB4Njk0YTAgLyAweDEwMDAwLFxyXG4gICAgMHg2OTRmMCAvIDB4MTAwMDAsXHJcbiAgICAweDY5NTUwIC8gMHgxMDAwMCxcclxuICAgIDB4Njk1YjAgLyAweDEwMDAwLFxyXG4gICAgMHg2OTYwMCAvIDB4MTAwMDAsXHJcbiAgICAweDY5NjYwIC8gMHgxMDAwMCxcclxuICAgIDB4Njk2YzAgLyAweDEwMDAwLFxyXG4gICAgMHg2OTcxMCAvIDB4MTAwMDAsXHJcbiAgICAweDY5NzcwIC8gMHgxMDAwMCxcclxuICAgIDB4Njk3ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2OTgyMCAvIDB4MTAwMDAsXHJcbiAgICAweDY5ODgwIC8gMHgxMDAwMCxcclxuICAgIDB4Njk4ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2OTkzMCAvIDB4MTAwMDAsXHJcbiAgICAweDY5OTkwIC8gMHgxMDAwMCxcclxuICAgIDB4Njk5ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2OWE0MCAvIDB4MTAwMDAsXHJcbiAgICAweDY5YTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NjlhZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2OWI0MCAvIDB4MTAwMDAsXHJcbiAgICAweDY5YmEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjliZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2OWM1MCAvIDB4MTAwMDAsXHJcbiAgICAweDY5Y2EwIC8gMHgxMDAwMCxcclxuICAgIDB4NjlkMDAgLyAweDEwMDAwLFxyXG4gICAgMHg2OWQ1MCAvIDB4MTAwMDAsXHJcbiAgICAweDY5ZGIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjllMDAgLyAweDEwMDAwLFxyXG4gICAgMHg2OWU2MCAvIDB4MTAwMDAsXHJcbiAgICAweDY5ZWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjlmMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2OWY2MCAvIDB4MTAwMDAsXHJcbiAgICAweDY5ZmMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmEwMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YTA3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhMGMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmExMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YTE3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhMWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmEyMjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YTI3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhMmMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmEzMjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YTM3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhM2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NmE0MjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YTQ3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhNGMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmE1MjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YTU3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhNWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmE2MjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YTY3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhNmMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmE3MjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YTc3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhN2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NmE4MTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YTg3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhOGMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmE5MTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YTk2MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhOWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmFhMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YWE2MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhYWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmFiMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YWI2MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhYmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmFjMDAgLyAweDEwMDAwLFxyXG4gICAgMHg2YWM1MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhY2IwIC8gMHgxMDAwMCxcclxuICAgIDB4NmFkMDAgLyAweDEwMDAwLFxyXG4gICAgMHg2YWQ1MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhZGEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmFkZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YWU0MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhZTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NmFlZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YWY0MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhZjkwIC8gMHgxMDAwMCxcclxuICAgIDB4NmFmZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YjAzMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiMDgwIC8gMHgxMDAwMCxcclxuICAgIDB4NmIwZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2YjEyMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiMTcwIC8gMHgxMDAwMCxcclxuICAgIDB4NmIxYzAgLyAweDEwMDAwLFxyXG4gICAgMHg2YjIxMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiMjcwIC8gMHgxMDAwMCxcclxuICAgIDB4NmIyYzAgLyAweDEwMDAwLFxyXG4gICAgMHg2YjMxMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiMzYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmIzYjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YjQwMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiNDUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmI0YTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YjRmMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiNTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NmI1OTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YjVlMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiNjMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmI2ODAgLyAweDEwMDAwLFxyXG4gICAgMHg2YjZkMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiNzIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmI3NzAgLyAweDEwMDAwLFxyXG4gICAgMHg2YjdjMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiODEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmI4NjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YjhhMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiOGYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmI5NDAgLyAweDEwMDAwLFxyXG4gICAgMHg2Yjk5MCAvIDB4MTAwMDAsXHJcbiAgICAweDZiOWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmJhMzAgLyAweDEwMDAwLFxyXG4gICAgMHg2YmE4MCAvIDB4MTAwMDAsXHJcbiAgICAweDZiYWQwIC8gMHgxMDAwMCxcclxuICAgIDB4NmJiMjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YmI3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZiYmMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmJjMDAgLyAweDEwMDAwLFxyXG4gICAgMHg2YmM1MCAvIDB4MTAwMDAsXHJcbiAgICAweDZiY2EwIC8gMHgxMDAwMCxcclxuICAgIDB4NmJjZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YmQ0MCAvIDB4MTAwMDAsXHJcbiAgICAweDZiZDkwIC8gMHgxMDAwMCxcclxuICAgIDB4NmJkZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YmUyMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiZTcwIC8gMHgxMDAwMCxcclxuICAgIDB4NmJlYzAgLyAweDEwMDAwLFxyXG4gICAgMHg2YmYxMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiZjYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmJmYTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YmZmMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjMDQwIC8gMHgxMDAwMCxcclxuICAgIDB4NmMwOTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YzBlMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjMTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmMxNzAgLyAweDEwMDAwLFxyXG4gICAgMHg2YzFjMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjMjEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmMyNTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YzJhMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjMmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmMzNDAgLyAweDEwMDAwLFxyXG4gICAgMHg2YzM4MCAvIDB4MTAwMDAsXHJcbiAgICAweDZjM2QwIC8gMHgxMDAwMCxcclxuICAgIDB4NmM0MjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YzQ3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZjNGIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmM1MDAgLyAweDEwMDAwLFxyXG4gICAgMHg2YzU1MCAvIDB4MTAwMDAsXHJcbiAgICAweDZjNTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NmM1ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YzYzMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjNjcwIC8gMHgxMDAwMCxcclxuICAgIDB4NmM2YzAgLyAweDEwMDAwLFxyXG4gICAgMHg2YzcxMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjNzUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmM3YTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YzdmMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjODMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmM4ODAgLyAweDEwMDAwLFxyXG4gICAgMHg2YzhkMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjOTEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmM5NjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YzliMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjOWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmNhNDAgLyAweDEwMDAwLFxyXG4gICAgMHg2Y2E4MCAvIDB4MTAwMDAsXHJcbiAgICAweDZjYWQwIC8gMHgxMDAwMCxcclxuICAgIDB4NmNiMjAgLyAweDEwMDAwLFxyXG4gICAgMHg2Y2I2MCAvIDB4MTAwMDAsXHJcbiAgICAweDZjYmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmNiZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2Y2M0MCAvIDB4MTAwMDAsXHJcbiAgICAweDZjYzgwIC8gMHgxMDAwMCxcclxuICAgIDB4NmNjZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2Y2QyMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjZDYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmNkYjAgLyAweDEwMDAwLFxyXG4gICAgMHg2Y2RmMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjZTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NmNlODAgLyAweDEwMDAwLFxyXG4gICAgMHg2Y2VkMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjZjEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmNmNjAgLyAweDEwMDAwLFxyXG4gICAgMHg2Y2ZhMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjZmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQwMzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDA4MCAvIDB4MTAwMDAsXHJcbiAgICAweDZkMGMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQxMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDE1MCAvIDB4MTAwMDAsXHJcbiAgICAweDZkMWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQxZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDIzMCAvIDB4MTAwMDAsXHJcbiAgICAweDZkMjcwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQyYzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDMwMCAvIDB4MTAwMDAsXHJcbiAgICAweDZkMzUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQzOTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDNkMCAvIDB4MTAwMDAsXHJcbiAgICAweDZkNDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQ0NjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDRiMCAvIDB4MTAwMDAsXHJcbiAgICAweDZkNGYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQ1NDAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDU4MCAvIDB4MTAwMDAsXHJcbiAgICAweDZkNWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQ2MTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDY1MCAvIDB4MTAwMDAsXHJcbiAgICAweDZkNmEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQ2ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDcyMCAvIDB4MTAwMDAsXHJcbiAgICAweDZkNzcwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQ3YjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDdmMCAvIDB4MTAwMDAsXHJcbiAgICAweDZkODQwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQ4ODAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDhkMCAvIDB4MTAwMDAsXHJcbiAgICAweDZkOTEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQ5NTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDlhMCAvIDB4MTAwMDAsXHJcbiAgICAweDZkOWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmRhMjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZGE3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZkYWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmRhZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZGI0MCAvIDB4MTAwMDAsXHJcbiAgICAweDZkYjgwIC8gMHgxMDAwMCxcclxuICAgIDB4NmRiYzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZGMwMCAvIDB4MTAwMDAsXHJcbiAgICAweDZkYzUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmRjOTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZGNkMCAvIDB4MTAwMDAsXHJcbiAgICAweDZkZDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmRkNjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZGRhMCAvIDB4MTAwMDAsXHJcbiAgICAweDZkZGUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmRlMzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZGU3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZkZWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmRlZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZGY0MCAvIDB4MTAwMDAsXHJcbiAgICAweDZkZjgwIC8gMHgxMDAwMCxcclxuICAgIDB4NmRmYzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTAwMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlMDUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmUwOTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTBkMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlMTEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmUxNjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTFhMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlMWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmUyMjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTI2MCAvIDB4MTAwMDAsXHJcbiAgICAweDZlMmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmUyZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTMzMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlMzcwIC8gMHgxMDAwMCxcclxuICAgIDB4NmUzYjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTNmMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlNDQwIC8gMHgxMDAwMCxcclxuICAgIDB4NmU0ODAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTRjMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlNTAwIC8gMHgxMDAwMCxcclxuICAgIDB4NmU1NDAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTU4MCAvIDB4MTAwMDAsXHJcbiAgICAweDZlNWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmU2MTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTY1MCAvIDB4MTAwMDAsXHJcbiAgICAweDZlNjkwIC8gMHgxMDAwMCxcclxuICAgIDB4NmU2ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTcxMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlNzUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmU3OTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTdkMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlODIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmU4NjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZThhMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlOGUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmU5MjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTk2MCAvIDB4MTAwMDAsXHJcbiAgICAweDZlOWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmU5ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZWEyMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlYTYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmVhYTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZWFlMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlYjIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmViNzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZWJiMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlYmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmVjMzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZWM3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZlY2IwIC8gMHgxMDAwMCxcclxuICAgIDB4NmVjZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZWQzMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlZDcwIC8gMHgxMDAwMCxcclxuICAgIDB4NmVkYjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZWRmMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlZTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmVlNzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZWViMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlZWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmVmMzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZWY3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZlZmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmVmZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjAzMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmMDcwIC8gMHgxMDAwMCxcclxuICAgIDB4NmYwYjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjBmMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmMTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmYxNzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjFhMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmMWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmYyMjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjI2MCAvIDB4MTAwMDAsXHJcbiAgICAweDZmMmEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmYyZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjMyMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmMzYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmYzYTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjNlMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmNDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmY0NjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjRhMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmNGUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmY1MTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjU1MCAvIDB4MTAwMDAsXHJcbiAgICAweDZmNTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NmY1ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjYxMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmNjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmY2OTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjZkMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmNzAwIC8gMHgxMDAwMCxcclxuICAgIDB4NmY3NDAgLyAweDEwMDAwLFxyXG4gICAgMHg2Zjc4MCAvIDB4MTAwMDAsXHJcbiAgICAweDZmN2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NmY4MDAgLyAweDEwMDAwLFxyXG4gICAgMHg2Zjg0MCAvIDB4MTAwMDAsXHJcbiAgICAweDZmODgwIC8gMHgxMDAwMCxcclxuICAgIDB4NmY4YjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjhmMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmOTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmY5NzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjliMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmOWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmZhMjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZmE2MCAvIDB4MTAwMDAsXHJcbiAgICAweDZmYWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmZhZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZmIyMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmYjYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmZiOTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZmJkMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmYzEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmZjNTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZmM4MCAvIDB4MTAwMDAsXHJcbiAgICAweDZmY2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NmZkMDAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZmQ0MCAvIDB4MTAwMDAsXHJcbiAgICAweDZmZDgwIC8gMHgxMDAwMCxcclxuICAgIDB4NmZkYjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZmRmMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmZTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmZlNzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZmVhMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmZWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmZmMjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZmY2MCAvIDB4MTAwMDAsXHJcbiAgICAweDZmZjkwIC8gMHgxMDAwMCxcclxuICAgIDB4NmZmZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDAxMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwMDUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzAwODAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDBjMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwMTAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzAxMzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDE3MCAvIDB4MTAwMDAsXHJcbiAgICAweDcwMWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzAxZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDIyMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwMjYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzAyYTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDJkMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwMzEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzAzNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDM4MCAvIDB4MTAwMDAsXHJcbiAgICAweDcwM2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NzA0MDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDQ0MCAvIDB4MTAwMDAsXHJcbiAgICAweDcwNDcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzA0YjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDRmMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwNTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzA1NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDVhMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwNWQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzA2MTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDY0MCAvIDB4MTAwMDAsXHJcbiAgICAweDcwNjgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzA2YzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDZmMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwNzMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzA3NzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDdhMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwN2UwIC8gMHgxMDAwMCxcclxuICAgIDB4NzA4MjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDg1MCAvIDB4MTAwMDAsXHJcbiAgICAweDcwODkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzA4YzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDkwMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwOTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzA5NzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDliMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwOWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzBhMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MGE2MCAvIDB4MTAwMDAsXHJcbiAgICAweDcwYTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzBhZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MGIwMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwYjQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzBiNzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MGJiMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwYmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzBjMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MGM2MCAvIDB4MTAwMDAsXHJcbiAgICAweDcwYzkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzBjZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MGQwMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwZDQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzBkNzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MGRiMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwZGYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzBlMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MGU2MCAvIDB4MTAwMDAsXHJcbiAgICAweDcwZTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzBlZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MGYwMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwZjQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzBmNzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MGZiMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwZmUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzEwMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTA1MCAvIDB4MTAwMDAsXHJcbiAgICAweDcxMDkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzEwYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTEwMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxMTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzExNzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTFhMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxMWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzEyMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTI1MCAvIDB4MTAwMDAsXHJcbiAgICAweDcxMjgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzEyYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTJmMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxMzMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzEzNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTM5MCAvIDB4MTAwMDAsXHJcbiAgICAweDcxM2QwIC8gMHgxMDAwMCxcclxuICAgIDB4NzE0MDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTQ0MCAvIDB4MTAwMDAsXHJcbiAgICAweDcxNDcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzE0YjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTRlMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxNTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzE1NTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTU4MCAvIDB4MTAwMDAsXHJcbiAgICAweDcxNWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzE1ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTYzMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxNjYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzE2YTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTZkMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxNzAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzE3NDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTc3MCAvIDB4MTAwMDAsXHJcbiAgICAweDcxN2IwIC8gMHgxMDAwMCxcclxuICAgIDB4NzE3ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTgxMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxODUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzE4ODAgLyAweDEwMDAwLFxyXG4gICAgMHg3MThjMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxOGYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzE5MjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTk2MCAvIDB4MTAwMDAsXHJcbiAgICAweDcxOTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzE5ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MWEwMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxYTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzFhNzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MWFhMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxYWQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzFiMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MWI0MCAvIDB4MTAwMDAsXHJcbiAgICAweDcxYjgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzFiYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MWJlMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxYzIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzFjNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MWM4MCAvIDB4MTAwMDAsXHJcbiAgICAweDcxY2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NzFjZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MWQyMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxZDYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzFkOTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MWRjMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxZTAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzFlMzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MWU2MCAvIDB4MTAwMDAsXHJcbiAgICAweDcxZWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzFlZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MWYwMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxZjMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzFmNzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MWZhMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxZmQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzIwMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjA0MCAvIDB4MTAwMDAsXHJcbiAgICAweDcyMDcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzIwYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjBlMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyMTEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzIxNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjE4MCAvIDB4MTAwMDAsXHJcbiAgICAweDcyMWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzIxZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjIxMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyMjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzIyODAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjJiMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyMmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzIzMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjM1MCAvIDB4MTAwMDAsXHJcbiAgICAweDcyMzgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzIzYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjNmMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyNDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzI0NTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjQ5MCAvIDB4MTAwMDAsXHJcbiAgICAweDcyNGMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzI0ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjUyMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyNTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzI1OTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjVjMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyNWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzI2MjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjY2MCAvIDB4MTAwMDAsXHJcbiAgICAweDcyNjkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzI2YzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjZmMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyNzIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzI3NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3Mjc5MCAvIDB4MTAwMDAsXHJcbiAgICAweDcyN2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NzI3ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjgyMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyODYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzI4OTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjhjMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyOGYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzI5MjAgLyAweDEwMDAwLFxyXG4gICAgMHg3Mjk2MCAvIDB4MTAwMDAsXHJcbiAgICAweDcyOTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzI5YzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjlmMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyYTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzJhNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MmE5MCAvIDB4MTAwMDAsXHJcbiAgICAweDcyYWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzJhZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MmIyMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyYjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzJiODAgLyAweDEwMDAwLFxyXG4gICAgMHg3MmJiMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyYmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzJjMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MmM1MCAvIDB4MTAwMDAsXHJcbiAgICAweDcyYzgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzJjYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MmNlMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyZDEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzJkNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MmQ4MCAvIDB4MTAwMDAsXHJcbiAgICAweDcyZGIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzJkZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MmUxMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyZTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzJlNzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MmVhMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyZWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzJmMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MmY0MCAvIDB4MTAwMDAsXHJcbiAgICAweDcyZjcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzJmYTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MmZkMCAvIDB4MTAwMDAsXHJcbiAgICAweDczMDAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzMwMzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzA2MCAvIDB4MTAwMDAsXHJcbiAgICAweDczMDkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzMwZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzEwMCAvIDB4MTAwMDAsXHJcbiAgICAweDczMTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzMxNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzE5MCAvIDB4MTAwMDAsXHJcbiAgICAweDczMWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzMxZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzIyMCAvIDB4MTAwMDAsXHJcbiAgICAweDczMjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzMyODAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzJiMCAvIDB4MTAwMDAsXHJcbiAgICAweDczMmUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzMzMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzM0MCAvIDB4MTAwMDAsXHJcbiAgICAweDczMzcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzMzYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzNlMCAvIDB4MTAwMDAsXHJcbiAgICAweDczNDEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzM0NDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzQ3MCAvIDB4MTAwMDAsXHJcbiAgICAweDczNGEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzM0ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzUwMCAvIDB4MTAwMDAsXHJcbiAgICAweDczNTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzM1NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzU5MCAvIDB4MTAwMDAsXHJcbiAgICAweDczNWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzM1ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzYyMCAvIDB4MTAwMDAsXHJcbiAgICAweDczNjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzM2ODAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzZiMCAvIDB4MTAwMDAsXHJcbiAgICAweDczNmUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzM3MTAgLyAweDEwMDAwLFxyXG4gICAgMHg3Mzc0MCAvIDB4MTAwMDAsXHJcbiAgICAweDczNzcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzM3YTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzdkMCAvIDB4MTAwMDAsXHJcbiAgICAweDczODAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzM4MzAgLyAweDEwMDAwLFxyXG4gICAgMHg3Mzg2MCAvIDB4MTAwMDAsXHJcbiAgICAweDczODkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzM4YzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzhmMCAvIDB4MTAwMDAsXHJcbiAgICAweDczOTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzM5NTAgLyAweDEwMDAwLFxyXG4gICAgMHg3Mzk4MCAvIDB4MTAwMDAsXHJcbiAgICAweDczOWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzM5ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3M2ExMCAvIDB4MTAwMDAsXHJcbiAgICAweDczYTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzNhNzAgLyAweDEwMDAwLFxyXG4gICAgMHg3M2FhMCAvIDB4MTAwMDAsXHJcbiAgICAweDczYWQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzNiMDAgLyAweDEwMDAwLFxyXG4gICAgMHg3M2IzMCAvIDB4MTAwMDAsXHJcbiAgICAweDczYjYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzNiOTAgLyAweDEwMDAwLFxyXG4gICAgMHg3M2JjMCAvIDB4MTAwMDAsXHJcbiAgICAweDczYmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzNjMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3M2M1MCAvIDB4MTAwMDAsXHJcbiAgICAweDczYzgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzNjYTAgLyAweDEwMDAwLFxyXG4gICAgMHg3M2NkMCAvIDB4MTAwMDAsXHJcbiAgICAweDczZDAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzNkMzAgLyAweDEwMDAwLFxyXG4gICAgMHg3M2Q2MCAvIDB4MTAwMDAsXHJcbiAgICAweDczZDkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzNkYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3M2RmMCAvIDB4MTAwMDAsXHJcbiAgICAweDczZTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzNlNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3M2U4MCAvIDB4MTAwMDAsXHJcbiAgICAweDczZWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzNlZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3M2YxMCAvIDB4MTAwMDAsXHJcbiAgICAweDczZjQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzNmNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3M2Y5MCAvIDB4MTAwMDAsXHJcbiAgICAweDczZmMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzNmZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDAyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0MDUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQwODAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDBiMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0MGUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQxMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDE0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0MTYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQxOTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDFjMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0MWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQyMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDI1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0MjgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQyYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDJkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0MzAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQzMzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDM2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0MzkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQzYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDNmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0NDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQ0NDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDQ3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0NGEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQ0ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDUwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0NTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQ1NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDU4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0NWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQ1ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDYxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0NjQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQ2NzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDY5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0NmMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQ2ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDcyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0NzUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQ3ODAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDdhMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0N2QwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQ4MDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDgzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0ODYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQ4OTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDhiMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0OGUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQ5MTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDk0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0OTcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQ5OTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDljMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0OWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRhMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NGE1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0YTcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRhYTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NGFkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0YjAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRiMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NGI1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0YjgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRiYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NGJlMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0YzAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRjMzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NGM2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0YzkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRjYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NGNlMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0ZDEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRkNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NGQ3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0ZDkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRkYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NGRmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0ZTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRlNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NGU3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0ZWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRlZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NGVmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0ZjIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRmNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NGY4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0ZmEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRmZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTAwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1MDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzUwNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTA4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1MGIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzUwZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTEwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1MTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzUxNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTE4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1MWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzUxZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTIwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1MjMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzUyNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTI5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1MmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzUyZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTMxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1MzMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzUzNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTM5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1M2IwIC8gMHgxMDAwMCxcclxuICAgIDB4NzUzZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTQxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1NDMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU0NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTQ5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1NGMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU0ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTUxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1NTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU1NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTU5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1NWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU1ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTYxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1NjQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU2NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTY5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1NmMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU2ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTcxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1NzQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU3NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTc5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1N2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU3ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTgxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1ODMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU4NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTg5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1OGIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU4ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTkxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1OTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU5NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTk5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1OWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU5ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWEwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1YTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzVhNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWE4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1YWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzVhZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWIwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1YjMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzViNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWI4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1YmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzViZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWMwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1YzIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzVjNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWM4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1Y2EwIC8gMHgxMDAwMCxcclxuICAgIDB4NzVjZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWNmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1ZDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzVkNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWQ3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1ZGEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzVkYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWRmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1ZTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzVlNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWU3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1ZTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzVlYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWVmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1ZjEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzVmNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWY2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1ZjkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzVmYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWZlMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2MDEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzYwMzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjA2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2MDgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzYwYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjBkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2MTAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzYxMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjE1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2MTgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzYxYTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjFkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2MWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzYyMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjI0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2MjcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzYyOTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjJjMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2MmUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzYzMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjM0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2MzYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzYzOTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjNiMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2M2UwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY0MDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjQzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2NDUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY0ODAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjRhMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2NGQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY0ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjUyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2NTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY1NzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjU5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2NWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY1ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjYxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2NjMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY2NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjY4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2NmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY2ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjcwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2NzIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY3NTAgLyAweDEwMDAwLFxyXG4gICAgMHg3Njc3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2N2EwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY3YzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjdmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2ODEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY4NDAgLyAweDEwMDAwLFxyXG4gICAgMHg3Njg2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2ODkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY4YjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjhlMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2OTAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY5MzAgLyAweDEwMDAwLFxyXG4gICAgMHg3Njk1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2OTgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY5YTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjlkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2OWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZhMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmE0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2YTcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZhOTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmFiMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2YWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZiMDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmIzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2YjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZiODAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmJhMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2YmQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZiZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmMyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2YzQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZjNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmM5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2Y2IwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZjZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmQwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2ZDMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZkNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmQ4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2ZGEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZkYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmRmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2ZTEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZlNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmU2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2ZTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZlYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmVkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2ZjAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZmMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmY1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2ZjcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZmOTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmZjMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2ZmUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzcwMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzAzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3MDYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzcwODAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzBhMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3MGQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzcwZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzEyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3MTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzcxNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzE5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3MWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzcxZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzIwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3MjIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzcyNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzI3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3MjkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzcyYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzJlMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3MzEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzczMzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzM1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3MzgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzczYTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzNkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3M2YwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc0MTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzQ0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3NDYwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc0ODAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzRiMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3NGQwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc1MDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzUyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3NTQwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc1NzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzU5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3NWIwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc1ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzYwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3NjIwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc2NTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzY3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3NjkwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc2YzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzZlMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3NzAwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc3MzAgLyAweDEwMDAwLFxyXG4gICAgMHg3Nzc1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3NzgwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc3YTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzdjMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3N2YwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc4MTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzgzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3ODYwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc4ODAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzhhMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3OGQwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc4ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzkxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3OTQwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc5NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3Nzk4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3OWEwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc5ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzlmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3YTEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdhNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2E2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3YTgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdhYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2FkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3YWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdiMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2I0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3YjYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdiOTAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2JiMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3YmQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdiZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2MyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3YzQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdjNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2M5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3Y2IwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdjZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2QwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3ZDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdkNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2Q2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3ZDkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdkYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2RkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3ZTAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdlMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2U0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3ZTYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdlOTAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2ViMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3ZWQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdmMDAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2YyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3ZjQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdmNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2Y5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3ZmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdmZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2ZmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4MDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzgwNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODA2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4MDgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzgwYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODBkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4MGYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzgxMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODE0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4MTYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzgxODAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODFhMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4MWQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzgxZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODIxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4MjMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzgyNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODI4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4MmEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzgyYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODJmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4MzEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzgzMzAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODM1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4MzgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzgzYTAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODNjMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4M2UwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg0MTAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODQzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4NDUwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg0NzAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODQ5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4NGMwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg0ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODUwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4NTIwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg1NTAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODU3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4NTkwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg1YjAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODVkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4NjAwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg2MjAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODY0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4NjYwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg2OTAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODZiMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4NmQwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg2ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODcxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4NzQwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg3NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODc4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4N2EwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg3YzAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODdmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4ODEwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg4MzAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODg1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4ODcwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg4YTAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODhjMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4OGUwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg5MDAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODkyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4OTQwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg5NzAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODk5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4OWIwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg5ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODlmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4YTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhhNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGE2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4YTgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhhYTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGFjMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4YWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhiMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGIzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4YjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhiNzAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGI5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4YmMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhiZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGMwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4YzIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhjNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGM2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4YzkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhjYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGNkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4Y2YwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhkMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGQzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4ZDUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhkODAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGRhMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4ZGMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhkZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGUwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4ZTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhlNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGU3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4ZTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhlYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGVkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4ZWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhmMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGYzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4ZjYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhmODAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGZhMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4ZmMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhmZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTAwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5MDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzkwNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTA3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5MDkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzkwYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTBkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5MGYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzkxMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTEzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5MTUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzkxODAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTFhMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5MWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzkxZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTIwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5MjIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzkyNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTI2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5MjgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzkyYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTJkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5MmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzkzMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTMzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5MzUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzkzNzAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTM5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5M2IwIC8gMHgxMDAwMCxcclxuICAgIDB4NzkzZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTQwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5NDIwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk0NDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTQ2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5NDgwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk0YTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTRjMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5NGUwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk1MDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTUyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5NTQwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk1NzAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTU5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5NWIwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk1ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTVmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5NjEwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk2MzAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTY1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5NjcwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk2OTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTZiMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5NmQwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk2ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTcyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5NzQwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk3NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTc4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5N2EwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk3YzAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTdlMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5ODAwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk4MjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTg0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5ODYwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk4ODAgLyAweDEwMDAwLFxyXG4gICAgMHg3OThhMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5OGMwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk4ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTkwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5OTMwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk5NTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTk3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5OTkwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk5YjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTlkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5OWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzlhMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWEzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5YTUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzlhNzAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWE5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5YWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzlhZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWFmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5YjEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzliMzAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWI1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5YjcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzliOTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWJiMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5YmQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzliZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWMxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5YzQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzljNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWM4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5Y2EwIC8gMHgxMDAwMCxcclxuICAgIDB4NzljYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWNlMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5ZDAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzlkMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWQ0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5ZDYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzlkODAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWRhMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5ZGMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzlkZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWUwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5ZTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzllNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWU2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5ZTgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzllYTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWVjMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5ZWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzlmMDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWYyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5ZjQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzlmNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWY4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5ZmEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzlmYzAgLyAweDEwMDAwLFxyXG4gIF07XHJcbiAgaWYgKHggPCAxKSB4ID0gMTtcclxuICBpZiAoeCA+IDIwNDcpIHggPSAyMDQ3O1xyXG4gIHJldHVybiBMT0dfVkFMVUVfVEFCTEVbeF07XHJcbn1cclxuIiwgIi8qXHJcbiAgVGhpcyBjb2RlIGluY2x1ZGVzIHBvcnRpb25zIGJhc2VkIG9uIGRhbWFnZS1lb3MgYnkgVXNlcm5hbWVGb2RkZXJcclxuICBodHRwczovL2dpdGh1Yi5jb20vVXNlcm5hbWVGb2RkZXIvZGFtYWdlLWVvc1xyXG5cclxuICBPcmlnaW5hbCBjb2RlIHBvcnRpb25zOlxyXG4gIC0gTUlUIExpY2Vuc2UgKGMpIDIwMjMgVXNlcm5hbWVGb2RkZXJcclxuXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIE9yaWdpbmFsIExpY2Vuc2U6XHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIE1JVCBMaWNlbnNlXHJcblxyXG4gIENvcHlyaWdodCAoYykgMjAyMyBVc2VybmFtZUZvZGRlclxyXG5cclxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG4gIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcbiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcbiAgU09GVFdBUkUuXHJcbiovXHJcblxyXG5pbXBvcnQgKiBhcyBlb3MgZnJvbSAnLi9jb25zdC5qcyc7XHJcbmltcG9ydCAqIGFzIGlkcyBmcm9tICcuL2lkbWFwLmpzJztcclxuaW1wb3J0ICogYXMgTWVjaGFuaWNzIGZyb20gJy4vbWVjaGFuaWNzLmpzJztcclxuaW1wb3J0ICogYXMgTWF0aFV0aWwgZnJvbSAnLi9tYXRodXRpbC5qcyc7XHJcbmltcG9ydCB7IE1vbnN0ZXIsIERhbWFnZURhdGEsIER1bmdlb25TdGF0ZSwgRGFtYWdlQ2FsY0RpYWcsIE1vdmUsIE5hdHVyYWxHaWZ0SW5mbyB9IGZyb20gJy4vc3RydWN0dXJlLmpzJztcclxuXHJcbi8qKlxyXG4gKiBcdTk2MzJcdTVGQTFcdTUwNzRcdTMwNkJcdTVCRkVcdTMwNTdcdTMwNjZcdTY1M0JcdTY0ODNcdTMwNTdcdTMwNUZcdTY2NDJcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcdTc2RjhcdTYwMjdcdTMwOTJcdTUzRDZcdTVGOTdcclxuICogQHBhcmFtIHtEdW5nZW9uU3RhdGV9IGR1bmdlb25cclxuICogQHBhcmFtIHtNb25zdGVyfSBhdHRhY2tlclxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGRlZmVuZGVyXHJcbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0VHlwZUlkeFxyXG4gKiBAcGFyYW0geyp9IGF0dGFja1R5cGVcclxuICovXHJcbmZ1bmN0aW9uIGdldFR5cGVNYXRjaFVwKGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgdGFyZ2V0VHlwZUlkeCwgYXR0YWNrVHlwZSkge1xyXG4gIGlmICghVHlwZURhdGEpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1R5cGVEYXRhIG5vdCBmb3VuZCcpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvLyBcdTMwQThcdTMwQjlcdTMwRDFcdTMwRkNcdTMwNEJcdTMwODlcdTYwQUFcdTMwNkJcdTY1M0JcdTY0ODNcdTMwNTdcdTMwNUZcdTY2NDJcdTMwNkVcdTMwREZcdTMwRTlcdTMwQUZcdTMwRUJcdTMwQTJcdTMwQTRcdTUyQjlcdTY3OUMgKFx1NUMwMlx1NzUyOFx1OTA1M1x1NTE3N1x1MzA2RVx1NTJCOVx1Njc5Q1x1MzA5Mlx1NTQyQlx1MzA4MClcclxuICBpZiAoXHJcbiAgICAoZGVmZW5kZXIuc3RhdHVzZXMubWlyYWNsZV9leWUgfHwgYXR0YWNrZXIuZXhjbHVzaXZlSXRlbUVmZmVjdEFjdGl2ZSgweDQ2KSkgJiZcclxuICAgIGF0dGFja1R5cGUgPT0gZW9zLlRZUEVfUFNZQ0hJQyAmJlxyXG4gICAgZGVmZW5kZXIudHlwZXNbdGFyZ2V0VHlwZUlkeF0gPT0gZW9zLlRZUEVfREFSS1xyXG4gICkge1xyXG4gICAgcmV0dXJuIGVvcy5NQVRDSFVQX05FVVRSQUw7XHJcbiAgfVxyXG4gIC8vIFx1NTczMFx1OTc2Mlx1ODAxMFx1NjAyN1x1MzA2RVx1NTJCOVx1Njc5Q1xyXG4gIGlmIChhdHRhY2tUeXBlID09IGVvcy5UWVBFX0dST1VORCkge1xyXG4gICAgaWYgKGR1bmdlb24uZ3Jhdml0eSkge1xyXG4gICAgICBpZiAoZGVmZW5kZXIudHlwZXNbdGFyZ2V0VHlwZUlkeF0gPT0gZW9zLlRZUEVfRkxZSU5HKSB7XHJcbiAgICAgICAgcmV0dXJuIGVvcy5NQVRDSFVQX05FVVRSQUw7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZGVmZW5kZXIuaGFzQ29uZGl0aW9uYWxHcm91bmRJbW11bml0eShkdW5nZW9uKSkge1xyXG4gICAgICByZXR1cm4gZW9zLk1BVENIVVBfSU1NVU5FO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gVHlwZURhdGFbYXR0YWNrVHlwZV0uTWF0Y2hVcFtkZWZlbmRlci50eXBlc1t0YXJnZXRUeXBlSWR4XV07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTk2MzJcdTVGQTFcdTUwNzRcdTMwNENcdTcwOEVcdTYyODBcdTMwOTJcdTUzRDdcdTMwNTFcdTMwNUZcdTY2NDJcdTMwNkJcdTMwODJcdTMwODlcdTMwNDRcdTMwNzNcdTMwNENcdTc2N0FcdTUyRDVcdTMwNTlcdTMwOEJcdTMwNEJcclxuICogQHBhcmFtIHtNb25zdGVyfSBhdHRhY2tlclxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGRlZmVuZGVyXHJcbiAqIEByZXR1cm5zIDI6IFx1MzA4Mlx1MzA4OVx1MzA0NFx1MzA3M1x1MzA5Mlx1NzY3QVx1NTJENVx1MzA1N1x1MzA2Nlx1MzBFOVx1MzBGM1x1MzBBRlx1MzA5MjFcdTZCQjVcdTk2OEVcdTRFMEFcdTMwNTJcdTMwOEIsIDE6IFx1MzA4Mlx1MzA4OVx1MzA0NFx1MzA3M1x1MzA5Mlx1NzY3QVx1NTJENVx1MzA1OVx1MzA4Qlx1MzA0Q1x1MzBFOVx1MzBGM1x1MzBBRlx1MzA2Rlx1NEUwQVx1MzA0Q1x1MzA4OVx1MzA2QVx1MzA0NCwgMDogXHUzMDgyXHUzMDg5XHUzMDQ0XHUzMDczXHUzMDZGXHU3NjdBXHU1MkQ1XHUzMDU3XHUzMDZBXHUzMDQ0XHJcbiAqL1xyXG5mdW5jdGlvbiBmbGFzaEZpcmVTaG91bGRBY3RpdmF0ZShhdHRhY2tlciwgZGVmZW5kZXIpIHtcclxuICBpZiAoIWRlZmVuZGVyLmlzVmFsaWQoKSkgcmV0dXJuIDA7XHJcblxyXG4gIC8vIFx1NjUzQlx1NjQ4M1x1NTA3NFx1MzA0Q1x1MzBDRVx1MzBGQ1x1MzBERVx1MzBFQlx1MzBCOVx1MzBBRFx1MzBGM1x1MzAwMVx1MzA3RVx1MzA1Rlx1MzA2Rlx1OTYzMlx1NUZBMVx1NTA3NFx1MzA0Q1x1MzA4Mlx1MzA4OVx1MzA0NFx1MzA3M1x1NEVFNVx1NTkxNiAtPiBmYWxzZVxyXG4gIGlmIChhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4NmIpIHx8ICFkZWZlbmRlci5hYmlsaXR5QWN0aXZlRGV0YWlscygweDQ4LCBhdHRhY2tlciwgdHJ1ZSkpIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuICByZXR1cm4gZGVmZW5kZXIuZmxhc2hfZmlyZV9ib29zdCA8IDIgPyAyIDogMTtcclxufVxyXG5cclxuLyoqXHJcbiAqIDJcdTRGNTNcdTMwNkVcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNcdTMwNkVcdTYwMjdcdTUyMjVcdTMwNENcdTdCNDlcdTMwNTdcdTMwNDRcdTMwNEJcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUYgKFx1MzA2OVx1MzA2MVx1MzA4OVx1MzA0Qlx1MzA0Q1x1NjAyN1x1NTIyNVx1NEUwRFx1NjYwRVx1MzA2N1x1MzA0Mlx1MzA4Q1x1MzA3MGZhbHNlKVxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IG1vbnN0ZXIxXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gbW9uc3RlcjJcclxuICovXHJcbmZ1bmN0aW9uIEdlbmRlcnNFcXVhbE5vdEdlbmRlcmxlc3MobW9uc3RlcjEsIG1vbnN0ZXIyKSB7XHJcbiAgbGV0IGdlbmRlcjEgPSBtb25zdGVyMS5nZW5kZXI7XHJcbiAgbGV0IGdlbmRlcjIgPSBtb25zdGVyMi5nZW5kZXI7XHJcbiAgaWYgKGdlbmRlcjEgPT0gZW9zLkdFTkRFUl9HRU5ERVJMRVNTIHx8IGdlbmRlcjIgPT0gZW9zLkdFTkRFUl9HRU5ERVJMRVNTKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiBnZW5kZXIxID09IGdlbmRlcjI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdTUwMERcdTczODdcdTMwOTJcdThBMDhcdTdCOTdcclxuICogQHBhcmFtIHtEdW5nZW9uU3RhdGV9IGR1bmdlb25cclxuICogQHBhcmFtIHtNb25zdGVyfSBhdHRhY2tlclxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGRlZmVuZGVyXHJcbiAqIEBwYXJhbSB7Kn0gYXR0YWNrUG93ZXJcclxuICogQHBhcmFtIHsqfSBhdHRhY2tUeXBlXHJcbiAqIEBwYXJhbSB7RGFtYWdlRGF0YX0gZGFtYWdlT3V0XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFydGlhbCBcdTMwRTBcdTMwRTlcdTMwNjNcdTMwNTFcdTMwMDFcdTMwQzZcdTMwQUZcdTMwQ0JcdTMwQjdcdTMwRTNcdTMwRjNcdTMwNkVcdTVGNzFcdTk3RkZcdTMwOTJcdTUzRDdcdTMwNTFcdTMwOEJcdTMwNEJcclxuICogQHJldHVybnMgXHU1MkI5XHU2NzlDXHU2MjlDXHU3RkE0XHUzMEQ1XHUzMEU5XHUzMEIwKHN1cGVyRWZmZWN0aXZlKSwgXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU1MDBEXHU3Mzg3KGRhbWFnZU11bHRPdXQpXHJcbiAqL1xyXG5mdW5jdGlvbiBDYWxjVHlwZUJhc2VkRGFtYWdlRWZmZWN0cyhkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIGF0dGFja1Bvd2VyLCBhdHRhY2tUeXBlLCBkYW1hZ2VPdXQsIHBhcnRpYWwpIHtcclxuICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5hdHRhY2tQb3dlciA9IGF0dGFja1Bvd2VyO1xyXG4gIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmF0dGFja1R5cGUgPSBhdHRhY2tUeXBlO1xyXG5cclxuICAvKiogXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU1MDBEXHU3Mzg3ICovXHJcbiAgbGV0IGRhbWFnZU11bHRPdXQgPSAxO1xyXG5cclxuICBkYW1hZ2VPdXQuY3JpdGljYWxIaXQgPSBmYWxzZTtcclxuICBkYW1hZ2VPdXQuZnVsbFR5cGVJbW11bml0eSA9IGZhbHNlO1xyXG4gIGlmICghZGVmZW5kZXIuaXNWYWxpZCgpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmICghVHlwZURhdGEpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1R5cGVEYXRhIG5vdCBmb3VuZCcpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBkYW1hZ2VPdXQudHlwZU1hdGNodXAgPSAwO1xyXG4gIGNvbnN0IHR5cGVNYXRjaHVwcyA9IG5ldyBBcnJheSgyKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgY29uc3QgbWF0Y2h1cE11bHRpcGxpZXJzID0gbmV3IEFycmF5KDQpO1xyXG4gICAgLy8gXHUzMEUwXHUzMEU5XHUzMDYzXHUzMDUxXHU2NjQyXHUzMDZFXHU3NkY4XHU2MDI3XHU1MDBEXHU3Mzg3XHJcbiAgICBpZiAoIXBhcnRpYWwgJiYgKGF0dGFja2VyLmlxU2tpbGxFbmFibGVkKDB4M2IsIGR1bmdlb24pIHx8IGRlZmVuZGVyLmlxU2tpbGxFbmFibGVkKDB4M2IsIGR1bmdlb24pKSkge1xyXG4gICAgICBtYXRjaHVwTXVsdGlwbGllcnNbMF0gPSBNZWNoYW5pY3MuTUFUQ0hVUF9JTU1VTkVfRVJSQVRJQztcclxuICAgICAgbWF0Y2h1cE11bHRpcGxpZXJzWzFdID0gTWVjaGFuaWNzLk1BVENIVVBfTk9UVkVSWV9FUlJBVElDO1xyXG4gICAgICBtYXRjaHVwTXVsdGlwbGllcnNbMl0gPSBNZWNoYW5pY3MuTUFUQ0hVUF9ORVVUUkFMX0VSUkFUSUM7XHJcbiAgICAgIG1hdGNodXBNdWx0aXBsaWVyc1szXSA9IE1lY2hhbmljcy5NQVRDSFVQX1NVUEVSX0VSUkFUSUM7XHJcbiAgICB9XHJcbiAgICAvLyBcdTkwMUFcdTVFMzhcdTMwNkVcdTc2RjhcdTYwMjdcdTUwMERcdTczODdcclxuICAgIGVsc2Uge1xyXG4gICAgICBtYXRjaHVwTXVsdGlwbGllcnNbMF0gPSBNZWNoYW5pY3MuTUFUQ0hVUF9JTU1VTkU7XHJcbiAgICAgIG1hdGNodXBNdWx0aXBsaWVyc1sxXSA9IE1lY2hhbmljcy5NQVRDSFVQX05PVFZFUlk7XHJcbiAgICAgIG1hdGNodXBNdWx0aXBsaWVyc1syXSA9IE1lY2hhbmljcy5NQVRDSFVQX05FVVRSQUw7XHJcbiAgICAgIG1hdGNodXBNdWx0aXBsaWVyc1szXSA9IE1lY2hhbmljcy5NQVRDSFVQX1NVUEVSO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhbWFnZU11bHRPdXQgPT0gMCkgYnJlYWs7XHJcblxyXG4gICAgbGV0IG1hdGNodXAgPSBlb3MuTUFUQ0hVUF9ORVVUUkFMO1xyXG4gICAgaWYgKFxyXG4gICAgICAhYXR0YWNrZXIuc2NyYXBweVNob3VsZEFjdGl2YXRlKGRlZmVuZGVyLCBhdHRhY2tUeXBlLCBkdW5nZW9uKSAmJlxyXG4gICAgICBNZWNoYW5pY3MudHlwZUluZWZmZWN0aXZlQWdhaW5zdEdob3N0KGF0dGFja1R5cGUpICYmXHJcbiAgICAgIGRlZmVuZGVyLmdob3N0SW1tdW5pdHlBY3RpdmUoYXR0YWNrZXIsIGkpXHJcbiAgICApIHtcclxuICAgICAgLy8gXHUzMDREXHUzMDgyXHUzMDYzXHUzMDVGXHUzMDdFXHUzMDZFXHU1MkI5XHU2NzlDXHUzMDZBXHUzMDU3IC0+IFx1NTJCOVx1Njc5Q1x1MzA2Rlx1MzA2QVx1MzA0NFxyXG4gICAgICBtYXRjaHVwID0gZW9zLk1BVENIVVBfSU1NVU5FO1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuZ2hvc3RJbW11bml0eUFjdGl2YXRlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBcdTMwNERcdTMwODJcdTMwNjNcdTMwNUZcdTMwN0VcdTMwNkVcdTUyQjlcdTY3OUNcdTMwNDJcdTMwOEEgLT4gXHUzMEJGXHUzMEE0XHUzMEQ3XHU3NkY4XHU2MDI3XHUzMDkyXHU1M0Q2XHU1Rjk3XHJcbiAgICAgIG1hdGNodXAgPSBnZXRUeXBlTWF0Y2hVcChkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIGksIGF0dGFja1R5cGUpO1xyXG4gICAgfVxyXG4gICAgLy8gXHU2NTNCXHU2NDgzXHU1MDc0XHUzMDRDXHUzMEUwXHUzMEU5XHUzMDYzXHUzMDUxIG9yIFx1NTJCOVx1Njc5Q1x1MzA0Q1x1NjY2RVx1OTAxQVx1NEVFNVx1NTkxNiAtPiBcdTc2RjhcdTYwMjdcdTUwMERcdTczODdcdTMwOTJcdTUzRDZcdTVGOTdcclxuICAgIGlmIChhdHRhY2tlci5pcVNraWxsRW5hYmxlZCgweDNiLCBkdW5nZW9uKSB8fCBtYXRjaHVwICE9IGVvcy5NQVRDSFVQX05FVVRSQUwpIHtcclxuICAgICAgZGFtYWdlTXVsdE91dCAqPSBtYXRjaHVwTXVsdGlwbGllcnNbbWF0Y2h1cF07XHJcbiAgICB9XHJcbiAgICB0eXBlTWF0Y2h1cHNbaV0gPSBtYXRjaHVwO1xyXG4gIH1cclxuXHJcbiAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLm1vdmVJbmRpdlR5cGVNYXRjaHVwc1swXSA9IHR5cGVNYXRjaHVwc1swXTtcclxuICBkdW5nZW9uLmRhbWFnZUNhbGMubW92ZUluZGl2VHlwZU1hdGNodXBzWzFdID0gdHlwZU1hdGNodXBzWzFdO1xyXG4gIGRhbWFnZU91dC50eXBlTWF0Y2h1cCA9IE1lY2hhbmljcy5UWVBFX01BVENIVVBfQ09NQklOQVRPUl9UQUJMRVt0eXBlTWF0Y2h1cHNbMF1dW3R5cGVNYXRjaHVwc1sxXV07XHJcblxyXG4gIC8vIFx1NzZGOFx1NjAyN1x1MzA0Q1x1NTJCOVx1Njc5Q1x1NjI5Q1x1N0ZBNFx1NEVFNVx1NTkxNlx1MzAwMVx1OTYzMlx1NUZBMVx1NTA3NFx1MzA0Q1x1MzA3NVx1MzA1N1x1MzA0RVx1MzA2QVx1MzA3RVx1MzA4Mlx1MzA4QVx1MzAwMVx1NjUzQlx1NjQ4M1x1MzBCRlx1MzBBNFx1MzBEN1x1MzA0Q1x1MzA2QVx1MzA1N1x1NEVFNVx1NTkxNiAtPiB4MFxyXG4gIGxldCBzdXBlckVmZmVjdGl2ZSA9IGRhbWFnZU91dC50eXBlTWF0Y2h1cCA9PSBlb3MuTUFUQ0hVUF9TVVBFUl9FRkZFQ1RJVkU7XHJcbiAgaWYgKCFzdXBlckVmZmVjdGl2ZSkge1xyXG4gICAgaWYgKGRlZmVuZGVyLmFiaWxpdHlBY3RpdmVEZXRhaWxzKDB4MzUsIGF0dGFja2VyLCB0cnVlKSAmJiBhdHRhY2tUeXBlICE9IGVvcy5UWVBFX05PTkUpIHtcclxuICAgICAgZGFtYWdlTXVsdE91dCA9IDA7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzV29uZGVyR3VhcmRBY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBcdTY1M0JcdTY0ODNcdTUwNzRcdTMwNENcdTMwNDRcdTMwOERcdTMwODFcdTMwNENcdTMwNkRcdTMwMDFcdTc2RjhcdTYwMjdcdTMwNENcdTRFQ0FcdTRFMDBcdTMwNjQgLT4geDEuMlxyXG4gIGlmIChhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4NTApICYmIGRhbWFnZU91dC50eXBlTWF0Y2h1cCA9PSBlb3MuTUFUQ0hVUF9OT1RfVkVSWV9FRkZFQ1RJVkUpIHtcclxuICAgIGRhbWFnZU11bHRPdXQgKj0gTWVjaGFuaWNzLlRJTlRFRF9MRU5TX01VTFRJUExJRVI7XHJcbiAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc1RpbnRlZExlbnNBY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuICAvLyBcdTk2MzJcdTVGQTFcdTUwNzRcdTMwNENcdTMwQ0ZcdTMwRkNcdTMwQzlcdTMwRURcdTMwQzNcdTMwQUZcdTMwNEJcdTMwRDVcdTMwQTNcdTMwRUJcdTMwQkZcdTMwRkNcdTMwMDFcdTc2RjhcdTYwMjdcdTMwNENcdTYyOUNcdTdGQTQgLT4geDAuNzVcclxuICBpZiAoXHJcbiAgICAoZGVmZW5kZXIuYWJpbGl0eUFjdGl2ZURldGFpbHMoMHg2YywgYXR0YWNrZXIsIHRydWUpIHx8IGRlZmVuZGVyLmFiaWxpdHlBY3RpdmVEZXRhaWxzKDB4NmUsIGF0dGFja2VyLCB0cnVlKSkgJiZcclxuICAgIGRhbWFnZU91dC50eXBlTWF0Y2h1cCA9PSBlb3MuTUFUQ0hVUF9TVVBFUl9FRkZFQ1RJVkVcclxuICApIHtcclxuICAgIGRhbWFnZU11bHRPdXQgKj0gTWVjaGFuaWNzLlNPTElEX1JPQ0tfTVVMVElQTElFUjtcclxuICAgIGlmIChkZWZlbmRlci5hYmlsaXR5QWN0aXZlRGV0YWlscygweDZjLCBhdHRhY2tlciwgdHJ1ZSkpIHtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNTb2xpZFJvY2tBY3RpdmUgPSB0cnVlOyAvLyBcdTMwQ0ZcdTMwRkNcdTMwQzlcdTMwRURcdTMwQzNcdTMwQUZcclxuICAgIH0gZWxzZSBpZiAoZGVmZW5kZXIuYWJpbGl0eUFjdGl2ZURldGFpbHMoMHg2ZSwgYXR0YWNrZXIsIHRydWUpKSB7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzRmlsdGVyQWN0aXZlID0gdHJ1ZTsgLy8gXHUzMEQ1XHUzMEEzXHUzMEVCXHUzMEJGXHUzMEZDXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIFx1NUMwMlx1NzUyOFx1OTA1M1x1NTE3N1x1MzA2RVx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1NTM0QVx1NkUxQlx1NTJCOVx1Njc5QyhcdTMwQkZcdTMwQTRcdTMwRTBcdTMwQjdcdTMwRkNcdTMwRUJcdTMwQzkpIC0+IHgwLjVcclxuICBpZiAoZGVmZW5kZXIuZXhjbHVzaXZlSXRlbUVmZmVjdEFjdGl2ZSgweDVhKSkge1xyXG4gICAgZGFtYWdlTXVsdE91dCAqPSBNZWNoYW5pY3MuQ09OU1RfMF81MDtcclxuICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzVGltZVNoaWVsZEFjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG4gIC8vIFtvcmlnaW5hbF0gXHU2NjQyXHU5NUM3XHUzMDZFXHUzMEJGXHUzMEE0XHUzMEUwXHUzMEI3XHUzMEZDXHUzMEVCXHUzMEM5IC0+IHgyXHJcbiAgaWYgKGF0dGFja2VyLmV4Y2x1c2l2ZUl0ZW1FZmZlY3RBY3RpdmUoMHg1YSkgJiYgYXR0YWNrZXIuZmxhZ190ZF90aW1lc2hlYWxkKSB7XHJcbiAgICBkYW1hZ2VNdWx0T3V0ICo9IDI7XHJcbiAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc1RpbWVTaGllbGRHbGl0Y2ggPSB0cnVlO1xyXG4gIH1cclxuICAvLyBcdTkwMUFcdTVFMzhcdTY1M0JcdTY0ODNcdTMwNEJcdTYyOTVcdTY0RjJcdTcyNjlcdTRFRTVcdTU5MTZcdTMwNkVcdTY1M0JcdTY0ODNcdTMwMDFcdTY1M0JcdTY0ODNcdTUwNzRcdTMwNENcdTMwQzZcdTMwQUZcdTMwQ0JcdTMwQjdcdTMwRTNcdTMwRjNcdTMwMDFcdTVBMDFcdTUyOUI0XHU0RUU1XHU0RTBCIC0+IHgxLjVcclxuICBpZiAoIXBhcnRpYWwgJiYgYXR0YWNrZXIuYWJpbGl0eUFjdGl2ZSgweDY0KSAmJiBhdHRhY2tQb3dlciA8PSBNZWNoYW5pY3MuVEVDSE5JQ0lBTl9NT1ZFX1BPV0VSX1RIUkVTSE9MRCkge1xyXG4gICAgZGFtYWdlTXVsdE91dCAqPSBNZWNoYW5pY3MuQ09OU1RfMV81MDtcclxuICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzVGVjaG5pY2lhbkFjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG4gIC8vIFx1NjI4MFx1MzA2RVx1MzBCRlx1MzBBNFx1MzBEN1x1MzA0Q1x1NzA4RVx1MzA0Qlx1NkMzN1x1MzAwMVx1OTYzMlx1NUZBMVx1NTA3NFx1MzA0Q1x1MzA0Mlx1MzA2NFx1MzA0NFx1MzA1N1x1MzA3Q1x1MzA0NiAtPiB4MC41XHJcbiAgaWYgKFxyXG4gICAgKGF0dGFja1R5cGUgPT0gZW9zLlRZUEVfRklSRSB8fCBhdHRhY2tUeXBlID09IGVvcy5UWVBFX0lDRSkgJiZcclxuICAgIGRlZmVuZGVyLmFiaWxpdHlBY3RpdmVEZXRhaWxzKDB4MiwgYXR0YWNrZXIsIHRydWUpXHJcbiAgKSB7XHJcbiAgICBkdW5nZW9uLmRhbWFnZUNhbGMuZmlyZU1vdmVBYmlsaXR5RHJvcEFjdGl2YXRlZCA9IHRydWU7XHJcbiAgICBkYW1hZ2VNdWx0T3V0ICo9IE1lY2hhbmljcy5DT05TVF8wXzUwO1xyXG4gIH1cclxuICAvLyBcdTYyODBcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNENcdTcwOEVcdTMwMDFcdTMwODJcdTMwODlcdTMwNDRcdTMwNzNcdTMwNENcdTc2N0FcdTUyRDUgLT4geDBcclxuICBpZiAoYXR0YWNrVHlwZSA9PSBlb3MuVFlQRV9GSVJFICYmIGZsYXNoRmlyZVNob3VsZEFjdGl2YXRlKGF0dGFja2VyLCBkZWZlbmRlcikpIHtcclxuICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5mbGFzaEZpcmVBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgZGFtYWdlTXVsdE91dCA9IDA7XHJcbiAgICBzdXBlckVmZmVjdGl2ZSA9IGZhbHNlO1xyXG4gICAgZGFtYWdlT3V0LnR5cGVNYXRjaHVwID0gZW9zLk1BVENIVVBfSU1NVU5FO1xyXG4gICAgZGFtYWdlT3V0LmNyaXRpY2FsSGl0ID0gZmFsc2U7XHJcbiAgICBkYW1hZ2VPdXQuZnVsbFR5cGVJbW11bml0eSA9IHRydWU7XHJcbiAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc1RoaWNrRmF0QWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcbiAgLy8gXHU2MjgwXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDRDXHU3MDhFXHUzMDAxXHU5NjMyXHU1RkExXHU1MDc0XHUzMDRDXHUzMDVGXHUzMDQ0XHUzMDZEXHUzMDY0IC0+IHgwLjVcclxuICBpZiAoYXR0YWNrVHlwZSA9PSBlb3MuVFlQRV9GSVJFICYmIGRlZmVuZGVyLmFiaWxpdHlBY3RpdmVEZXRhaWxzKDB4NWYsIGF0dGFja2VyLCB0cnVlKSkge1xyXG4gICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmZpcmVNb3ZlQWJpbGl0eURyb3BBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgZGFtYWdlTXVsdE91dCAqPSBNZWNoYW5pY3MuQ09OU1RfMF81MDtcclxuICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzSGVhdHByb29mQWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcbiAgLy8gXHU2MjgwXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDRDXHU1NzMwXHU5NzYyXHUzMDAxXHU2NTNCXHU2NDgzXHU1MDc0XHUzMDRDXHUzMDRCXHUzMDVGXHUzMDg0XHUzMDc2XHUzMDhBXHU0RUU1XHU1OTE2XHUzMDRCXHUzMDY0XHU5NjMyXHU1RkExXHU1MDc0XHUzMDZFXHUzMDc1XHUzMDg2XHUzMDQ2XHUzMDRDXHU3NjdBXHU1MkQ1IC0+IHgwXHJcbiAgaWYgKFxyXG4gICAgYXR0YWNrVHlwZSA9PSBlb3MuVFlQRV9HUk9VTkQgJiZcclxuICAgICgoIWF0dGFja2VyLmFiaWxpdHlBY3RpdmUoMHg1MykgJiYgZGVmZW5kZXIubGV2aXRhdGVBY3RpdmUoZHVuZ2VvbikpIHx8XHJcbiAgICAgIGRlZmVuZGVyLmhhc0NvbmRpdGlvbmFsR3JvdW5kSW1tdW5pdHkoZHVuZ2VvbikpXHJcbiAgKSB7XHJcbiAgICBkYW1hZ2VNdWx0T3V0ID0gMDtcclxuICAgIHN1cGVyRWZmZWN0aXZlID0gZmFsc2U7XHJcbiAgICBkYW1hZ2VPdXQudHlwZU1hdGNodXAgPSBlb3MuTUFUQ0hVUF9JTU1VTkU7XHJcbiAgICBkYW1hZ2VPdXQuY3JpdGljYWxIaXQgPSBmYWxzZTtcclxuICAgIGRhbWFnZU91dC5mdWxsVHlwZUltbXVuaXR5ID0gdHJ1ZTtcclxuICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzTGV2aXRhdGVBY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuICAvLyBcdTYyODBcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNENcdTZDMzRcdTMwMDFcdTY1M0JcdTY0ODNcdTUwNzRcdTMwNENcdTMwNTJcdTMwNERcdTMwOEFcdTMwODVcdTMwNDZcdTMwMDFcdTY1M0JcdTY0ODNcdTUwNzRcdTMwNkVIUFx1MzA0QzEvNFx1NEVFNVx1NEUwQiAtPiB4MlxyXG4gIGlmIChhdHRhY2tUeXBlID09IGVvcy5UWVBFX1dBVEVSICYmIGF0dGFja2VyLmFiaWxpdHlBY3RpdmUoMHgxMCkpIHtcclxuICAgIGxldCBtYXhIcCA9IGF0dGFja2VyLmhwX21heDtcclxuICAgIGlmIChtYXhIcCA+IE1lY2hhbmljcy5NQVhfSFBfQ0FQKSB7XHJcbiAgICAgIG1heEhwID0gTWVjaGFuaWNzLk1BWF9IUF9DQVA7XHJcbiAgICB9XHJcbiAgICBpZiAoYXR0YWNrZXIuaHAgPD0gTWF0aC50cnVuYyhtYXhIcCAvIDQpKSB7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy50b3JyZW50Qm9vc3RBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgICBkYW1hZ2VNdWx0T3V0ICo9IDI7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzVG9ycmVudEFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIFx1NjI4MFx1MzA2RVx1MzBCRlx1MzBBNFx1MzBEN1x1MzA0Q1x1ODM0OVx1MzAwMVx1NjUzQlx1NjQ4M1x1NTA3NFx1MzA0Q1x1MzA1N1x1MzA5M1x1MzA4QVx1MzA4N1x1MzA0Rlx1MzAwMVx1NjUzQlx1NjQ4M1x1NTA3NFx1MzA2RUhQXHUzMDRDMS80XHU0RUU1XHU0RTBCIC0+IHgyXHJcbiAgaWYgKGF0dGFja1R5cGUgPT0gZW9zLlRZUEVfR1JBU1MgJiYgYXR0YWNrZXIuYWJpbGl0eUFjdGl2ZSgweDFhKSkge1xyXG4gICAgbGV0IG1heEhwID0gYXR0YWNrZXIuaHBfbWF4O1xyXG4gICAgaWYgKG1heEhwID4gTWVjaGFuaWNzLk1BWF9IUF9DQVApIHtcclxuICAgICAgbWF4SHAgPSBNZWNoYW5pY3MuTUFYX0hQX0NBUDtcclxuICAgIH1cclxuICAgIGlmIChhdHRhY2tlci5ocCA8PSBNYXRoLnRydW5jKG1heEhwIC8gNCkpIHtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLm92ZXJncm93Qm9vc3RBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgICBkYW1hZ2VNdWx0T3V0ICo9IDI7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzT3Zlcmdyb3dBY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBcdTYyODBcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNENcdTg2NkJcdTMwMDFcdTY1M0JcdTY0ODNcdTUwNzRcdTMwNENcdTMwODBcdTMwNTdcdTMwNkVcdTMwNTdcdTMwODlcdTMwNUJcdTMwMDFcdTY1M0JcdTY0ODNcdTUwNzRcdTMwNkVIUFx1MzA0QzEvNFx1NEVFNVx1NEUwQiAtPiB4MlxyXG4gIGlmIChhdHRhY2tUeXBlID09IGVvcy5UWVBFX0JVRyAmJiBhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4NDMpKSB7XHJcbiAgICBsZXQgbWF4SHAgPSBhdHRhY2tlci5ocF9tYXg7XHJcbiAgICBpZiAobWF4SHAgPiBNZWNoYW5pY3MuTUFYX0hQX0NBUCkge1xyXG4gICAgICBtYXhIcCA9IE1lY2hhbmljcy5NQVhfSFBfQ0FQO1xyXG4gICAgfVxyXG4gICAgaWYgKGF0dGFja2VyLmhwIDw9IE1hdGgudHJ1bmMobWF4SHAgLyA0KSkge1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuc3dhcm1Cb29zdEFjdGl2YXRlZCA9IHRydWU7XHJcbiAgICAgIGRhbWFnZU11bHRPdXQgKj0gMjtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNTd2FybUFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIFx1NjI4MFx1MzA2RVx1MzBCRlx1MzBBNFx1MzBEN1x1MzA0Q1x1NzA4RVx1MzAwMVx1NjUzQlx1NjQ4M1x1NTA3NFx1MzA0Q1x1MzA4Mlx1MzA0Nlx1MzA0Qlx1MzAwMVx1NjUzQlx1NjQ4M1x1NTA3NFx1MzA2RUhQXHUzMDRDMS80XHU0RUU1XHU0RTBCIC0+IHgyXHJcbiAgaWYgKGF0dGFja1R5cGUgPT0gZW9zLlRZUEVfRklSRSkge1xyXG4gICAgaWYgKGF0dGFja2VyLmFiaWxpdHlBY3RpdmUoMHg0NikpIHtcclxuICAgICAgbGV0IG1heEhwID0gYXR0YWNrZXIuaHBfbWF4O1xyXG4gICAgICBpZiAobWF4SHAgPiBNZWNoYW5pY3MuTUFYX0hQX0NBUCkge1xyXG4gICAgICAgIG1heEhwID0gTWVjaGFuaWNzLk1BWF9IUF9DQVA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGF0dGFja2VyLmhwIDw9IE1hdGgudHJ1bmMobWF4SHAgLyA0KSkge1xyXG4gICAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5maXJlTW92ZUFiaWxpdHlCb29zdEFjdGl2YXRlZCA9IHRydWU7XHJcbiAgICAgICAgZGFtYWdlTXVsdE91dCAqPSAyO1xyXG4gICAgICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzQmxhemVBY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBcdTYyODBcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNENcdTcwOEVcdTMwMDFcdTk2MzJcdTVGQTFcdTUwNzRcdTMwNENcdTMwNEJcdTMwOTNcdTMwNURcdTMwNDZcdTMwNkZcdTMwNjAgLT4geDEuNVxyXG4gICAgaWYgKGRlZmVuZGVyLmFiaWxpdHlBY3RpdmVEZXRhaWxzKDB4NTUsIGF0dGFja2VyLCB0cnVlKSkge1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuZmlyZU1vdmVBYmlsaXR5Qm9vc3RBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgICBkYW1hZ2VNdWx0T3V0ICo9IE1lY2hhbmljcy5DT05TVF8xXzUwO1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc0RyeVNraW5BY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gXHU2NTNCXHU2NDgzXHU1MDc0XHUzMDRDXHUzMDg0XHUzMDUxXHUzMDY5XHU3MkI2XHU2MTRCIC0+IHgwLjhcclxuICBpZiAoYXR0YWNrZXIuc3RhdHVzZXMuYnVybikge1xyXG4gICAgZGFtYWdlTXVsdE91dCAqPSBNZWNoYW5pY3MuQlVSTl9EQU1BR0VfTVVMVElQTElFUjtcclxuICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzQnVybkFjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvLyBcdTMwQkZcdTMwQTRcdTMwRDdcdTRFMDBcdTgxRjRcclxuICBpZiAoZGFtYWdlTXVsdE91dCAhPSAwICYmIGF0dGFja2VyLmlzVHlwZShhdHRhY2tUeXBlKSkge1xyXG4gICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLnN0YWJCb29zdEFjdGl2YXRlZCA9IHRydWU7XHJcbiAgICAvLyBcdTY1M0JcdTY0ODNcdTUwNzRcdTMwNENcdTMwNjZcdTMwNERcdTMwNEFcdTMwNDZcdTMwOEFcdTMwODdcdTMwNEYgLT4geDJcclxuICAgIGlmIChhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4NjMpKSB7XHJcbiAgICAgIGRhbWFnZU11bHRPdXQgKj0gMjtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNBZGFwdGFiaWxpdHlTVEFCID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIFx1MzA1RFx1MzA4Q1x1NEVFNVx1NTkxNiAtPiB4MS41XHJcbiAgICBlbHNlIHtcclxuICAgICAgZGFtYWdlTXVsdE91dCAqPSBNZWNoYW5pY3MuQ09OU1RfMV81MDtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNTVEFCID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHdlYXRoZXIgPSBhdHRhY2tlci5wZXJjZWl2ZWRXZWF0aGVyKGR1bmdlb24pO1xyXG4gIC8vIFx1MzA3Mlx1MzA1Nlx1MzA1N1x1MzA0Q1x1MzA2NFx1MzA4OFx1MzA0NFxyXG4gIGlmICh3ZWF0aGVyID09IGVvcy5XRUFUSEVSX1NVTk5ZKSB7XHJcbiAgICAvLyBcdTYyODBcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNENcdTcwOEUgLT4geDEuNVxyXG4gICAgaWYgKGF0dGFja1R5cGUgPT0gZW9zLlRZUEVfRklSRSkge1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuc3VubnlNdWx0aXBsaWVyQWN0aXZhdGVkID0gdHJ1ZTtcclxuICAgICAgZGFtYWdlTXVsdE91dCAqPSBNZWNoYW5pY3MuQ09OU1RfMV81MDtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNTdW5ueUZpcmVBY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8gXHU2MjgwXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDRDXHU2QzM0IC0+IHgwLjVcclxuICAgIGVsc2UgaWYgKGF0dGFja1R5cGUgPT0gZW9zLlRZUEVfV0FURVIpIHtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLnN1bm55TXVsdGlwbGllckFjdGl2YXRlZCA9IHRydWU7XHJcbiAgICAgIGRhbWFnZU11bHRPdXQgKj0gTWVjaGFuaWNzLkNPTlNUXzBfNTA7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzU3VubnlXYXRlckFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIFx1MzA0Mlx1MzA4MVxyXG4gIGlmICh3ZWF0aGVyID09IGVvcy5XRUFUSEVSX1JBSU4pIHtcclxuICAgIC8vIFx1NjI4MFx1MzA2RVx1MzBCRlx1MzBBNFx1MzBEN1x1MzA0Q1x1NzA4RSAtPiB4MC41XHJcbiAgICBpZiAoYXR0YWNrVHlwZSA9PSBlb3MuVFlQRV9GSVJFKSB7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5yYWluTXVsdGlwbGllckFjdGl2YXRlZCA9IHRydWU7XHJcbiAgICAgIGRhbWFnZU11bHRPdXQgKj0gTWVjaGFuaWNzLkNPTlNUXzBfNTA7XHJcbiAgICB9XHJcbiAgICAvLyBcdTYyODBcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNENcdTZDMzQgLT4geDEuNVxyXG4gICAgZWxzZSBpZiAoYXR0YWNrVHlwZSA9PSBlb3MuVFlQRV9XQVRFUikge1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZUNhbGMucmFpbk11bHRpcGxpZXJBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgICBkYW1hZ2VNdWx0T3V0ICo9IE1lY2hhbmljcy5DT05TVF8xXzUwO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBcdTMwNEZcdTMwODJcdTMwOEFcdTMwMDFcdTYyODBcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNENcdTMwQ0VcdTMwRkNcdTMwREVcdTMwRUJcdTRFRTVcdTU5MTYgLT4geDAuNzVcclxuICBpZiAod2VhdGhlciA9PSBlb3MuV0VBVEhFUl9DTE9VRFkgJiYgYXR0YWNrVHlwZSAhPSBlb3MuVFlQRV9OT1JNQUwpIHtcclxuICAgIGRhbWFnZU11bHRPdXQgKj0gTWVjaGFuaWNzLkNMT1VEWV9EQU1BR0VfTVVMVElQTElFUjtcclxuICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5jbG91ZHlEcm9wQWN0aXZhdGVkID0gdHJ1ZTtcclxuICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzQ2xvdWR5QWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcbiAgLy8gXHUzMDY5XHUzMDhEXHUzMDQyXHUzMDVEXHUzMDczXHU3MkI2XHU2MTRCXHUzMDdFXHUzMDVGXHUzMDZGXHU1OTI5XHU1MDE5XHUzMDREXHUzMDhBXHUzMDAxXHU2MjgwXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDRDXHU5NkZCXHU2QzE3IC0+IHgwLjVcclxuICBpZiAoKGR1bmdlb24ubXVkX3Nwb3J0IHx8IHdlYXRoZXIgPT0gZW9zLldFQVRIRVJfRk9HKSAmJiBhdHRhY2tUeXBlID09IGVvcy5UWVBFX0VMRUNUUklDKSB7XHJcbiAgICBkdW5nZW9uLmRhbWFnZUNhbGMuZWxlY3RyaWNNb3ZlRGFtcGVuZWQgPSB0cnVlO1xyXG4gICAgZGFtYWdlTXVsdE91dCAqPSBNZWNoYW5pY3MuQ09OU1RfMF81MDtcclxuXHJcbiAgICBpZiAod2VhdGhlciA9PSBlb3MuV0VBVEhFUl9GT0cpIHtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNGb2dBY3RpdmUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChkdW5nZW9uLm11ZF9zcG9ydCkge1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc011ZFNwb3J0QWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gXHUzMDdGXHUzMDVBXHUzMDQyXHUzMDVEXHUzMDczXHU3MkI2XHU2MTRCXHUzMDAxXHU2MjgwXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDRDXHU3MDhFIC0+IHgwLjVcclxuICBpZiAoZHVuZ2Vvbi53YXRlcl9zcG9ydCAmJiBhdHRhY2tUeXBlID09IGVvcy5UWVBFX0ZJUkUpIHtcclxuICAgIGR1bmdlb24uZGFtYWdlQ2FsYy53YXRlclNwb3J0RHJvcEFjdGl2YXRlZCA9IHRydWU7XHJcbiAgICBkYW1hZ2VNdWx0T3V0ICo9IE1lY2hhbmljcy5DT05TVF8wXzUwO1xyXG4gICAgZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNXYXRlclNwb3J0QWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8vIFx1NjI4MFx1MzA2RVx1MzBCRlx1MzBBNFx1MzBEN1x1MzA0Q1x1OTZGQlx1NkMxN1x1MzAwMVx1NjUzQlx1NjQ4M1x1NTA3NFx1MzA0Q1x1MzA1OFx1MzA4NVx1MzA0Nlx1MzA2N1x1MzA5M1x1NzJCNlx1NjE0QlxyXG4gIGlmIChhdHRhY2tUeXBlID09IGVvcy5UWVBFX0VMRUNUUklDICYmIGF0dGFja2VyLnN0YXR1c2VzLmNoYXJnZSkge1xyXG4gICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmNoYXJnZUJvb3N0QWN0aXZhdGVkID0gdHJ1ZTtcclxuICAgIGRhbWFnZU11bHRPdXQgKj0gMjtcclxuICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzQ2hhcmdlQWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzdXBlckVmZmVjdGl2ZTogc3VwZXJFZmZlY3RpdmUsXHJcbiAgICBkYW1hZ2VNdWx0T3V0OiBkYW1hZ2VNdWx0T3V0LFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdThBMDhcdTdCOTdcclxuICogQHBhcmFtIHtEdW5nZW9uU3RhdGV9IGR1bmdlb24gXHUzMEMwXHUzMEYzXHUzMEI4XHUzMEU3XHUzMEYzXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gYXR0YWNrZXIgXHU2NTNCXHU2NDgzXHU1MDc0XHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gZGVmZW5kZXIgXHU5NjMyXHU1RkExXHU1MDc0XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtb3ZlVHlwZSBcdTYyODBcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcclxuICogQHBhcmFtIHtOdW1iZXJ9IG1vdmVQb3dlciBcdTYyODBcdTMwNkVcdTVBMDFcdTUyOUJcclxuICogQHBhcmFtIHtOdW1iZXJ9IG1vdmVDcml0IFx1NjI4MFx1MzA2RVx1NjAyNVx1NjI0MFx1NzM4N1xyXG4gKiBAcGFyYW0ge0RhbWFnZURhdGF9IGRhbWFnZU91dFxyXG4gKiBAcGFyYW0geyp9IGRhbWFnZU11bHRcclxuICogQHBhcmFtIHtOdW1iZXJ9IG1vdmVJZCBcdTYyODBJRFxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZ1bGxDYWxjXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQ2FsY0RhbWFnZShcclxuICBkdW5nZW9uLFxyXG4gIGF0dGFja2VyLFxyXG4gIGRlZmVuZGVyLFxyXG4gIG1vdmVUeXBlLFxyXG4gIG1vdmVQb3dlcixcclxuICBjcml0Q2hhbmNlLFxyXG4gIGRhbWFnZU91dCxcclxuICBkYW1hZ2VNdWx0LFxyXG4gIG1vdmVJZCxcclxuICBmdWxsQ2FsYyxcclxuKSB7XHJcbiAgLy8gZGFtYWdlT3V0ID0gbmV3IERhbWFnZURhdGEoKTtcclxuICBsZXQgYXRrX3N0YWdlX2Jvb3N0ID0gMDsgLy8gXHU2NTNCXHU2NDgzXHU3Q0ZCXHU4MEZEXHU1MjlCXHUzMEU5XHUzMEYzXHUzMEFGXHU0RTBBXHU2NjA3XHU5MUNGXHJcbiAgbGV0IGRlZl9zdGFnZV9ib29zdCA9IDA7IC8vIFx1OTYzMlx1NUZBMVx1N0NGQlx1ODBGRFx1NTI5Qlx1MzBFOVx1MzBGM1x1MzBBRlx1NEUwQVx1NjYwN1x1OTFDRlxyXG4gIGxldCBkZWZfc3RhZ2UgPSAwOyAvLyBcdTk2MzJcdTVGQTFcdTdDRkJcdTMwRTlcdTMwRjNcdTMwQUZcclxuICBjb25zdCBtb3ZlQ2F0ZWdvcnkgPSBnZXRNb3ZlQ2F0ZWdvcnkobW92ZUlkKTsgLy8gXHU2MjgwXHUzMDZFXHU1MjA2XHU5ODVFICgwPVx1NzI2OVx1NzQwNiwgMT1cdTcyNzlcdTZCOEEsIDI9XHU1OTA5XHU1MzE2KVxyXG5cclxuICAvLyBcdTMwQjlcdTMwQzZcdTMwRkNcdTMwQkZcdTMwQjlcdTUwMERcdTczODdcclxuICBsZXQgYXRrX3N0YWdlX211bHQgPVxyXG4gICAgbW92ZUNhdGVnb3J5ID09IGVvcy5DQVRFR09SWV9QSFlTSUNBTFxyXG4gICAgICA/IE1hdGgucG93KDAuNSwgTWF0aC5hYnMoYXR0YWNrZXIuaGFsZl9hdGspKVxyXG4gICAgICA6IE1hdGgucG93KDAuNSwgTWF0aC5hYnMoYXR0YWNrZXIuaGFsZl9zcF9hdGspKTtcclxuICBsZXQgZGVmX3N0YWdlX211bHQgPVxyXG4gICAgbW92ZUNhdGVnb3J5ID09IGVvcy5DQVRFR09SWV9QSFlTSUNBTFxyXG4gICAgICA/IE1hdGgucG93KDAuNSwgTWF0aC5hYnMoZGVmZW5kZXIuaGFsZl9kZWYpKVxyXG4gICAgICA6IE1hdGgucG93KDAuNSwgTWF0aC5hYnMoZGVmZW5kZXIuaGFsZl9zcF9kZWYpKTtcclxuXHJcbiAgLy8gXHUzMDU1XHUzMDREXHUzMDY5XHUzMDhBXHU2NzA5XHU1MkI5IC0+IHgxLjVcclxuICBpZiAoYXR0YWNrZXIuZmxhZ19tZV9maXJzdCkge1xyXG4gICAgZGFtYWdlTXVsdCAqPSBNZWNoYW5pY3MuTUVfRklSU1RfTVVMVElQTElFUjtcclxuICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzTWVGaXJzdEFjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG4gIC8vIFx1NzI3OVx1NjAyN1x1MzA1OVx1MzA2Nlx1MzA3RiArIFx1NTNDRFx1NTJENVx1NjI4MCAtPiB4MS41XHJcbiAgaWYgKGF0dGFja2VyLmFiaWxpdHlBY3RpdmUoOTIpICYmIE1lY2hhbmljcy5pc1JlY29pbE1vdmUobW92ZUlkKSkge1xyXG4gICAgZGFtYWdlTXVsdCA9IChkYW1hZ2VNdWx0ICogMykgLyAyO1xyXG4gICAgZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNSZWNrbGVzc0FjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG4gIC8vIFx1NzI3OVx1NjAyN1x1MzA2Nlx1MzA2NFx1MzA2RVx1MzA1M1x1MzA3Nlx1MzA1NyArIFx1MzBEMVx1MzBGM1x1MzBDMVx1NjI4MCAtPiB4MS41XHJcbiAgaWYgKGF0dGFja2VyLmFiaWxpdHlBY3RpdmUoMTAxKSAmJiBNZWNoYW5pY3MuaXNQdW5jaE1vdmUobW92ZUlkKSkge1xyXG4gICAgZGFtYWdlTXVsdCAqPSBNZWNoYW5pY3MuQ09OU1RfMV81MDtcclxuICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzSXJvbkZpc3RBY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuICAvLyBcdTcyNzlcdTYwMjdcdTMwQ0VcdTMwRkNcdTMwREVcdTMwRUJcdTMwQjlcdTMwQURcdTMwRjMgLT4gXHUzMENFXHUzMEZDXHUzMERFXHUzMEVCXHU2MjgwXHUzMDZCXHUzMDU5XHUzMDhCXHJcbiAgaWYgKGF0dGFja2VyLmFiaWxpdHlBY3RpdmUoMTA3KSkge1xyXG4gICAgbW92ZVR5cGUgPSAxO1xyXG4gICAgZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNOb3JtYWxpemVBY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuICAvLyBcdTYyODBcdTMwNTVcdTMwNzBcdTMwNERcdTMwNkVcdTMwNjRcdTMwNzZcdTMwNjYgLT4gXHU2MjgwXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDkyXHU2NTNCXHU2NDgzXHU1MDc0XHUzMDZFXHU3QjJDXHU0RTAwXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDZCXHUzMDU5XHUzMDhCXHJcbiAgaWYgKG1vdmVJZCA9PSA0NjcpIHtcclxuICAgIG1vdmVUeXBlID0gYXR0YWNrZXIudHlwZXNbMF07XHJcbiAgfVxyXG5cclxuICBkdW5nZW9uLmRhbWFnZUNhbGMgPSBuZXcgRGFtYWdlQ2FsY0RpYWcoKTtcclxuXHJcbiAgLy8gXHUzMEVBXHUzMEZDXHUzMEMwXHUzMEZDXHU0RUU1XHU1OTE2XHUzMDY3XHUzMDRBXHUzMDZBXHUzMDRCXHUzMDRDMCBvciBcdTkwMUFcdTVFMzhcdTY1M0JcdTY0ODNcdTMwNEJcdTMwNjRcdTk2MzJcdTVGQTFcdTUwNzRcdTMwNkVcdTcyNzlcdTYwMjdcdTMwNzVcdTMwNTdcdTMwNEVcdTMwNkFcdTMwN0VcdTMwODJcdTMwOEFcclxuICBpZiAoXHJcbiAgICAoIWF0dGFja2VyLmlzX2xlYWRlciAmJiBhdHRhY2tlci5iZWxseSA9PSAwKSB8fFxyXG4gICAgKG1vdmVJZCA9PSAzNTUgJiYgZGVmZW5kZXIuYWJpbGl0eUFjdGl2ZURldGFpbHMoNTMsIGF0dGFja2VyLCB0cnVlKSlcclxuICApIHtcclxuICAgIC8vIFx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1MzA5MjFcdTMwNkJcdTMwNTlcdTMwOEJcclxuICAgIGRhbWFnZU91dC5kYW1hZ2UgPSAxO1xyXG4gICAgZGFtYWdlT3V0LmRhbWFnZU1lc3NhZ2UgPSBlb3MuREFNQUdFX01FU1NBR0VfTU9WRTtcclxuICAgIGRhbWFnZU91dC50eXBlTWF0Y2h1cCA9IGVvcy5NQVRDSFVQX05FVVRSQUw7XHJcbiAgICBkYW1hZ2VPdXQudHlwZSA9IG1vdmVUeXBlO1xyXG4gICAgZGFtYWdlT3V0LmNhdGVnb3J5ID0gZ2V0TW92ZUNhdGVnb3J5KG1vdmVJZCk7XHJcbiAgICBkYW1hZ2VPdXQuY3JpdGljYWxIaXQgPSBmYWxzZTtcclxuICAgIGRhbWFnZU91dC5mdWxsVHlwZUltbXVuaXR5ID0gZmFsc2U7XHJcbiAgICBkYW1hZ2VPdXQubm9EYW1hZ2UgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAoIWF0dGFja2VyLmlzX2xlYWRlciAmJiBhdHRhY2tlci5iZWxseSA9PSAwKSB7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzSHVuZ3J5UGFsQWN0aXZlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAobW92ZUlkID09IDM1NSAmJiBkZWZlbmRlci5hYmlsaXR5QWN0aXZlRGV0YWlscyg1MywgYXR0YWNrZXIsIHRydWUpKSB7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzV29uZGVyR3VhcmRBY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhbWFnZU91dDtcclxuICB9XHJcblxyXG4gIGRhbWFnZU91dC50eXBlID0gbW92ZVR5cGU7XHJcbiAgZGFtYWdlT3V0LmNhdGVnb3J5ID0gbW92ZUNhdGVnb3J5O1xyXG5cclxuICAvLyBcdTcyNzlcdTYwMjdcdTMwQzBcdTMwQTZcdTMwRjNcdTMwRURcdTMwRkNcdTMwQzlcclxuICBpZiAoYXR0YWNrZXIuYWJpbGl0eUFjdGl2ZSg5NikpIHtcclxuICAgIGlmIChkZWZlbmRlci5zdGFnZV9kZWYgPCBkZWZlbmRlci5zdGFnZV9zcF9kZWYpIHtcclxuICAgICAgLy8gXHU5NjMyXHU1RkExXHU1MDc0XHUzMDZFXHUzMEI5XHUzMEM2XHUzMEZDXHUzMEJGXHUzMEI5XHUzMDRDXHU5NjMyXHU1RkExXHVGRjFDXHU3Mjc5XHU5NjMyLCBcdTMwNEJcdTMwNjRcdTcyNjlcdTc0MDZcdTYyODBcdTMwOTJcdTRGN0ZcdTc1MjggPT4gXHU2NTNCXHU2NDgzKzFcdTMwNjdcdThBMDhcdTdCOTdcclxuICAgICAgaWYgKG1vdmVDYXRlZ29yeSA9PSBlb3MuQ0FURUdPUllfUEhZU0lDQUwpIHtcclxuICAgICAgICBhdGtfc3RhZ2VfYm9vc3QgPSAxO1xyXG4gICAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5hYmlsaXR5T2ZmZW5zZU1vZGlmaWVyICs9IDE7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFx1OTYzMlx1NUZBMVx1NTA3NFx1MzA2RVx1MzBCOVx1MzBDNlx1MzBGQ1x1MzBCRlx1MzBCOVx1MzA0Q1x1OTYzMlx1NUZBMVx1MjI2N1x1NzI3OVx1OTYzMiwgXHUzMDRCXHUzMDY0XHU3Mjc5XHU2QjhBXHU2MjgwXHUzMDkyXHU0RjdGXHU3NTI4ID0+IFx1NzI3OVx1NjUzQisxXHUzMDY3XHU4QTA4XHU3Qjk3XHJcbiAgICAgIGlmIChtb3ZlQ2F0ZWdvcnkgPT0gZW9zLkNBVEVHT1JZX1NQRUNJQUwpIHtcclxuICAgICAgICBhdGtfc3RhZ2VfYm9vc3QgPSAxO1xyXG4gICAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5hYmlsaXR5T2ZmZW5zZU1vZGlmaWVyICs9IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFx1NzA4RVx1MzBCRlx1MzBBNFx1MzBEN1x1MzA2RVx1MzA3Rlx1MzAwMVx1NzI3OVx1NjAyN1x1MzA4Mlx1MzA4OVx1MzA0NFx1MzA3M1x1MzA2RVx1ODhEQ1x1NkI2M1x1MzA5Mlx1ODAwM1x1NjE2RVx1MzA1OVx1MzA4QlxyXG4gIGlmIChhdHRhY2tlci50eXBlcy5pbmNsdWRlcygyKSkge1xyXG4gICAgbGV0IGZsYXNoRmlyZUJvb3N0ID0gYXR0YWNrZXIuZmxhc2hfZmlyZV9ib29zdDtcclxuICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5mbGFzaEZpcmVCb29zdCA9IGZsYXNoRmlyZUJvb3N0O1xyXG4gICAgYXRrX3N0YWdlX2Jvb3N0ICs9IGZsYXNoRmlyZUJvb3N0O1xyXG4gIH1cclxuICAvLyBcdTMwNTNcdTMwNDZcdTMwNTJcdTMwNERcdTMwNjZcdTMwNEQgLT4gXHU2NTNCXHU2NDgzLCBcdTcyNzlcdTY1M0IrMVxyXG4gIGlmIChhdHRhY2tlci5pcVNraWxsRW5hYmxlZCgweDIyLCBkdW5nZW9uKSkge1xyXG4gICAgYXRrX3N0YWdlX2Jvb3N0ICs9IDE7XHJcbiAgICBkdW5nZW9uLmRhbWFnZUNhbGMuaXFTa2lsbE9mZmVuc2VNb2RpZmllciArPSAxO1xyXG4gIH1cclxuICAvLyBcdTMwN0ZcdTMwNENcdTMwN0VcdTMwNDhcdTMwOEIgLT4gXHU2NTNCXHU2NDgzLCBcdTcyNzlcdTY1M0ItMVxyXG4gIGlmIChhdHRhY2tlci5pcVNraWxsRW5hYmxlZCgweDIzLCBkdW5nZW9uKSkge1xyXG4gICAgYXRrX3N0YWdlX2Jvb3N0IC09IDE7XHJcbiAgICBkdW5nZW9uLmRhbWFnZUNhbGMuaXFTa2lsbE9mZmVuc2VNb2RpZmllciAtPSAxO1xyXG4gIH1cclxuICAvLyBcdTMwNEJcdTMwNUZcdTMwNkFcdTMwODlcdTMwNTcgLT4gXHU2NTNCXHU2NDgzLCBcdTcyNzlcdTY1M0IrMVxyXG4gIGlmIChhdHRhY2tlci5pcVNraWxsRW5hYmxlZCgweDNjLCBkdW5nZW9uKSAmJiBhdHRhY2tlci5mbGFnX3ByYWN0aWNlX3N3aW5nZXIpIHtcclxuICAgIGF0a19zdGFnZV9ib29zdCArPSAxO1xyXG4gICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmlxU2tpbGxPZmZlbnNlTW9kaWZpZXIgKz0gMTtcclxuICB9XHJcbiAgLy8gXHUzMDRBXHUzMDQ2XHUzMDQ4XHUzMDkzXHU2MzAxXHUzMDYxXHUzMDZFXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMDRDXHU5NkEzXHU2M0E1IC0+IFx1NjUzQlx1NjQ4MywgXHU3Mjc5XHU2NTNCKzFcclxuICBpZiAoZHVuZ2Vvbi5vdGhlck1vbnN0ZXJzLmlxU2tpbGxFbmFibGVkKDB4MzIsIGR1bmdlb24pKSB7XHJcbiAgICBhdGtfc3RhZ2VfYm9vc3QgKz0gMTtcclxuICB9XHJcblxyXG4gIC8vIFx1NzI2OVx1NzQwNlxyXG4gIGlmIChtb3ZlQ2F0ZWdvcnkgPT0gZW9zLkNBVEVHT1JZX1BIWVNJQ0FMKSB7XHJcbiAgICAvLyBcdTMwNjhcdTMwNDZcdTMwNURcdTMwNDZcdTMwNTdcdTMwOTMgKFx1NTQwQ1x1NjAyN1x1MzA2N1x1NjUzQlx1NjQ4MysxLCBcdTc1NzBcdTYwMjdcdTMwNjdcdTY1M0JcdTY0ODMtMSlcclxuICAgIGlmIChhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4NjgpKSB7XHJcbiAgICAgIGlmIChHZW5kZXJzRXF1YWxOb3RHZW5kZXJsZXNzKGF0dGFja2VyLCBkZWZlbmRlcikpIHtcclxuICAgICAgICBhdGtfc3RhZ2VfYm9vc3QgKz0gMTtcclxuICAgICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuYWJpbGl0eU9mZmVuc2VNb2RpZmllciArPSAxO1xyXG4gICAgICB9IGVsc2UgaWYgKGF0dGFja2VyLmdlbmRlciAhPSBlb3MuR0VOREVSX0dFTkRFUkxFU1MgJiYgZGVmZW5kZXIuZ2VuZGVyICE9IGVvcy5HRU5ERVJfR0VOREVSTEVTUykge1xyXG4gICAgICAgIGF0a19zdGFnZV9ib29zdCAtPSAxO1xyXG4gICAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5hYmlsaXR5T2ZmZW5zZU1vZGlmaWVyIC09IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFx1NjUzQlx1NjQ4M1x1NTA3NFx1MzA3RVx1MzA1Rlx1MzA2Rlx1NjUzQlx1NjQ4M1x1NTA3NFx1MzA2RVx1NEVGMlx1OTU5M1x1MzA0Q1x1MzBENVx1MzBFOVx1MzBFRlx1MzBGQ1x1MzBBRVx1MzBENVx1MzBDOCxcclxuICAgIC8vIFx1MzA0Qlx1MzA2NFx1NjUzQlx1NjQ4M1x1NTA3NFx1MzA0Q1x1MzA3Mlx1MzA1Nlx1MzA1N1x1MzA0Q1x1MzA2NFx1MzA4OFx1MzA0NFx1MzA2RVx1NUY3MVx1OTdGRlx1MzA5Mlx1NTNEN1x1MzA1MVx1MzA2Nlx1MzA0NFx1MzA4QiAtPiBcdTY1M0JcdTY0ODMrMVxyXG4gICAgaWYgKFxyXG4gICAgICBhdHRhY2tlci5wZXJjZWl2ZWRXZWF0aGVyKGR1bmdlb24pID09IGVvcy5XRUFUSEVSX1NVTk5ZICYmXHJcbiAgICAgIChhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4NzEpIHx8IGF0dGFja2VyLm90aGVyTW9uc3RlckFiaWxpdHlBY3RpdmUoMHg3MSwgZHVuZ2VvbikpXHJcbiAgICApIHtcclxuICAgICAgYXRrX3N0YWdlX2Jvb3N0ICs9IDE7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5hYmlsaXR5T2ZmZW5zZU1vZGlmaWVyICs9IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIFx1NzI3OVx1NkI4QVxyXG4gIGVsc2Uge1xyXG4gICAgLy8gXHUzMEI1XHUzMEYzXHUzMEQxXHUzMEVGXHUzMEZDXHUzMDRCXHUzMDY0XHUzMDcyXHUzMDU2XHUzMDU3XHUzMDRDXHUzMDY0XHUzMDg4XHUzMDQ0XHUzMDZFXHU1RjcxXHU5N0ZGXHUzMDkyXHU1M0Q3XHUzMDUxXHUzMDY2XHUzMDQ0XHUzMDhCIC0+IFx1NzI3OVx1NjUzQisyXHJcbiAgICBpZiAoYXR0YWNrZXIuYWJpbGl0eUFjdGl2ZSgweDVhKSAmJiBhdHRhY2tlci5wZXJjZWl2ZWRXZWF0aGVyKGVvcy5XRUFUSEVSX1NVTk5ZKSkge1xyXG4gICAgICBhdGtfc3RhZ2VfYm9vc3QgKz0gMjtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmFiaWxpdHlPZmZlbnNlTW9kaWZpZXIgKz0gMjtcclxuICAgIH1cclxuICAgIC8vIFx1OTYzMlx1NUZBMVx1NTA3NFx1MzA0Q1x1MzA3Mlx1MzA1Nlx1MzA1N1x1MzA0Q1x1MzA2NFx1MzA4OFx1MzA0NFx1MzA2RVx1NUY3MVx1OTdGRlx1MzA5Mlx1NTNEN1x1MzA1MVx1MzA2Nlx1MzA0NFx1MzA4QixcclxuICAgIC8vIFx1MzA0Qlx1MzA2NFx1OTYzMlx1NUZBMVx1NTA3NFx1MzA3RVx1MzA1Rlx1MzA2Rlx1OTYzMlx1NUZBMVx1NTA3NFx1MzA2RVx1NEVGMlx1OTU5M1x1MzA0Q1x1MzBENVx1MzBFOVx1MzBFRlx1MzBGQ1x1MzBBRVx1MzBENVx1MzBDOCAtPiBcdTcyNzlcdTk2MzIrMVxyXG4gICAgaWYgKFxyXG4gICAgICBkZWZlbmRlci5wZXJjZWl2ZWRXZWF0aGVyKGR1bmdlb24pID09IGVvcy5XRUFUSEVSX1NVTk5ZICYmXHJcbiAgICAgIChkZWZlbmRlci5hYmlsaXR5QWN0aXZlKDB4NzEpIHx8IGRlZmVuZGVyLm90aGVyTW9uc3RlckFiaWxpdHlBY3RpdmUoMHg3MSwgZHVuZ2VvbikpXHJcbiAgICApIHtcclxuICAgICAgZGVmX3N0YWdlID0gMTtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmFiaWxpdHlEZWZlbnNlTW9kaWZpZXIgKz0gMTtcclxuICAgIH1cclxuICAgIC8vIFx1OTYzMlx1NUZBMVx1NTA3NFx1MzA0Q1x1MzA1OVx1MzA2QVx1MzA0Mlx1MzA4OVx1MzA1N1x1MzA2RVx1NUY3MVx1OTdGRlx1MzA5Mlx1NTNEN1x1MzA1MVx1MzA2Nlx1MzA0NFx1MzA4QixcclxuICAgIC8vIFx1MzA0Qlx1MzA2NFx1OTYzMlx1NUZBMVx1NTA3NFx1MzA2RVx1MzBCRlx1MzBBNFx1MzBEN1x1MzA0Q1x1NUNBOVx1MzBCRlx1MzBBNFx1MzBENyAtPiBcdTcyNzlcdTk2MzIrMlxyXG4gICAgaWYgKGRlZmVuZGVyLnBlcmNlaXZlZFdlYXRoZXIoZHVuZ2VvbikgPT0gZW9zLldFQVRIRVJfU0FORFNUT1JNKSB7XHJcbiAgICAgIGlmIChkZWZlbmRlci50eXBlcy5pbmNsdWRlcygweGQpKSB7XHJcbiAgICAgICAgZGVmX3N0YWdlICs9IDI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFx1MzBDN1x1MzBBQVx1MzBBRFx1MzBCN1x1MzBCOSAoXHUzMEEyXHUzMEJGXHUzMEMzXHUzMEFGKSAtPiBcdTY1M0JcdTY0ODMsIFx1NzI3OVx1NjUzQisyXHJcbiAgaWYgKGF0dGFja2VyLmlkID09IDB4MWEzKSB7XHJcbiAgICBhdGtfc3RhZ2VfYm9vc3QgKz0gMjtcclxuICB9XHJcbiAgLy8gXHUzMEM3XHUzMEFBXHUzMEFEXHUzMEI3XHUzMEI5IChcdTMwQzdcdTMwQTNcdTMwRDVcdTMwQTdcdTMwRjNcdTMwQjkpIC0+IFx1NjUzQlx1NjQ4MywgXHU3Mjc5XHU2NTNCLTJcclxuICBpZiAoYXR0YWNrZXIuaWQgPT0gMHgxYTQpIHtcclxuICAgIGF0a19zdGFnZV9ib29zdCAtPSAyO1xyXG4gIH1cclxuICAvLyBcdTMwQzdcdTMwQUFcdTMwQURcdTMwQjdcdTMwQjkgKFx1MzBCOVx1MzBENFx1MzBGQ1x1MzBDOSkgLT4gXHU2NTNCXHU2NDgzLCBcdTcyNzlcdTY1M0ItMlxyXG4gIGlmIChhdHRhY2tlci5pZCA9PSAweDFhNSkge1xyXG4gICAgYXRrX3N0YWdlX2Jvb3N0IC09IDI7XHJcbiAgfVxyXG4gIC8vIFx1MzBBRVx1MzBFOVx1MzBDNlx1MzBBM1x1MzBDQSAoXHUzMEEyXHUzMENBXHUzMEI2XHUzMEZDKSAtPiBcdTY1M0JcdTY0ODMsIFx1NzI3OVx1NjUzQi0yXHJcbiAgaWYgKGF0dGFja2VyLmlkID09IDB4MjExKSB7XHJcbiAgICBhdGtfc3RhZ2VfYm9vc3QgLT0gMjtcclxuICB9XHJcbiAgLy8gXHUzMEFFXHUzMEU5XHUzMEM2XHUzMEEzXHUzMENBIChcdTMwQUFcdTMwRUFcdTMwQjhcdTMwRjMpIC0+IFx1NjUzQlx1NjQ4MywgXHU3Mjc5XHU2NTNCKzJcclxuICBpZiAoYXR0YWNrZXIuaWQgPT0gMHgyMTgpIHtcclxuICAgIGF0a19zdGFnZV9ib29zdCArPSAyO1xyXG4gIH1cclxuXHJcbiAgLy8gXHU2NTNCXHU2NDgzXHU3Q0ZCXHUzMEU5XHUzMEYzXHUzMEFGXHU3RDcxXHU1NDA4XHJcbiAgbGV0IGF0a19zdGFnZSA9XHJcbiAgICBtb3ZlQ2F0ZWdvcnkgPT0gZW9zLkNBVEVHT1JZX1BIWVNJQ0FMXHJcbiAgICAgID8gYXR0YWNrZXIuc3RhZ2VfYXRrICsgYXRrX3N0YWdlX2Jvb3N0XHJcbiAgICAgIDogYXR0YWNrZXIuc3RhZ2Vfc3BfYXRrICsgYXRrX3N0YWdlX2Jvb3N0O1xyXG4gIC8vIFx1MzA0NFx1MzA0Qlx1MzA4QVx1MzA2RVx1MzA2NFx1MzA3Q1x1MzA0Q1x1NjcwOVx1NTJCOSAtPiBcdTY1M0JcdTY0ODNcdTdDRkJcdTMwRTlcdTMwRjNcdTMwQUZcdTY3MDBcdTU5MjcoMjApXHJcbiAgaWYgKGF0dGFja2VyLmZsYWdfYW5nZXJfcG9pbnQgJiYgYXR0YWNrZXIuYWJpbGl0eUFjdGl2ZSgweDRmKSkge1xyXG4gICAgYXRrX3N0YWdlID0gMjA7XHJcbiAgfVxyXG5cclxuICAvLyBcdTcyNjlcdTc0MDZcclxuICBpZiAobW92ZUNhdGVnb3J5ID09IGVvcy5DQVRFR09SWV9QSFlTSUNBTCkge1xyXG4gICAgLy8gXHUzMEVEXHUzMEIxXHUzMEMzXHUzMEM4XHUzMDVBXHUzMDY0XHUzMDREXHU0RTJEXHUzMDZGXHU5NjMyXHU1RkExKzFcclxuICAgIGlmIChkZWZlbmRlci5zdGF0dXNlcy5za3VsbF9iYXNoKSB7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5za3VsbEJhc2hEZWZlbnNlQm9vc3RBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgICBkZWZfc3RhZ2UgKz0gMTtcclxuICAgIH1cclxuICAgIC8vIFx1MzA3RVx1MzA1MVx1MzA5M1x1MzA0RCAtPiBcdTk2MzJcdTVGQTEtMVxyXG4gICAgaWYgKGRlZmVuZGVyLmlxU2tpbGxFbmFibGVkKDB4MzEsIGR1bmdlb24pKSB7XHJcbiAgICAgIGRlZl9zdGFnZSAtPSAxO1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuaXFTa2lsbERlZmVuc2VNb2RpZmllciAtPSAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gXHUzMDUzXHUzMDQ2XHUzMDUyXHUzMDREXHUzMDY2XHUzMDREIC0+IFx1OTYzMlx1NUZBMSwgXHU3Mjc5XHU5NjMyLTFcclxuICBpZiAoZGVmZW5kZXIuaXFTa2lsbEVuYWJsZWQoMHgyMiwgZHVuZ2VvbikpIHtcclxuICAgIGRlZl9zdGFnZSAtPSAxO1xyXG4gICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmlxU2tpbGxEZWZlbnNlTW9kaWZpZXIgLT0gMTtcclxuICB9XHJcbiAgLy8gXHUzMDdGXHUzMDRDXHUzMDdFXHUzMDQ4XHUzMDhCIC0+IFx1OTYzMlx1NUZBMSwgXHU3Mjc5XHU5NjMyKzFcclxuICBpZiAoZGVmZW5kZXIuaXFTa2lsbEVuYWJsZWQoMHgyMywgZHVuZ2VvbikpIHtcclxuICAgIGRlZl9zdGFnZSArPSAxO1xyXG4gICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmlxU2tpbGxEZWZlbnNlTW9kaWZpZXIgKz0gMTtcclxuICB9XHJcblxyXG4gIC8vIFx1MzBDN1x1MzBBQVx1MzBBRFx1MzBCN1x1MzBCOSAoXHUzMEEyXHUzMEJGXHUzMEMzXHUzMEFGKSAtPiBcdTk2MzJcdTVGQTEsIFx1NzI3OVx1OTYzMi0yXHJcbiAgaWYgKGRlZmVuZGVyLmlkID09IDB4MWEzKSB7XHJcbiAgICBkZWZfc3RhZ2UgLT0gMjtcclxuICB9XHJcbiAgLy8gXHUzMEM3XHUzMEFBXHUzMEFEXHUzMEI3XHUzMEI5IChcdTMwQzdcdTMwQTNcdTMwRDVcdTMwQTdcdTMwRjNcdTMwQjkpIC0+IFx1OTYzMlx1NUZBMSwgXHU3Mjc5XHU5NjMyKzJcclxuICBpZiAoZGVmZW5kZXIuaWQgPT0gMHgxYTQpIHtcclxuICAgIGRlZl9zdGFnZSArPSAyO1xyXG4gIH1cclxuICAvLyBcdTMwQzdcdTMwQUFcdTMwQURcdTMwQjdcdTMwQjkgKFx1MzBCOVx1MzBENFx1MzBGQ1x1MzBDOSkgLT4gXHU5NjMyXHU1RkExLCBcdTcyNzlcdTk2MzItMlxyXG4gIGlmIChkZWZlbmRlci5pZCA9PSAweDFhNSkge1xyXG4gICAgZGVmX3N0YWdlIC09IDI7XHJcbiAgfVxyXG4gIC8vIFx1NjVFNVx1NjcyQ1x1NzI0OFx1MzA2RVx1MzA3Rlx1MzBBRVx1MzBFOVx1MzBDNlx1MzBBM1x1MzBDQVx1MzA2RVx1MzBENVx1MzBBOVx1MzBFQlx1MzBFMFx1ODhEQ1x1NkI2M1x1MzA2Qlx1MzBEMFx1MzBCMFx1MzA0Q1x1MzA0Mlx1MzA4QVx1MzAwMVxyXG4gIC8vIFx1OTYzMlx1NUZBMVx1OTVBMlx1OTAyM1x1MzA2RVx1ODhEQ1x1NkI2M1x1MzA0Q1x1NzZGOFx1NjI0QihhdHRhY2tlcilcdTMwNkJcdTkwNjlcdTc1MjhcdTMwNTVcdTMwOENcdTMwOEJcclxuICAvLyBcdTZENzdcdTU5MTZcdTcyNDhcdTMwNjdcdTMwNkZcdTZCNjNcdTMwNTdcdTMwNEZcdTgxRUFcdTUyMDZcdTgxRUFcdThFQUIoZGVmZW5kZXIpXHUzMDZCXHU5MDY5XHU3NTI4XHUzMDU5XHUzMDhCXHJcbiAgY29uc3QgZW50aXR5X2pwR2lyYXRpbmEgPSBkdW5nZW9uLnJlZ2lvbl9qcCA/IGF0dGFja2VyIDogZGVmZW5kZXI7XHJcbiAgLy8gXHUzMEFFXHUzMEU5XHUzMEM2XHUzMEEzXHUzMENBIChcdTMwQTJcdTMwQ0FcdTMwQjZcdTMwRkMpIC0+IFx1OTYzMlx1NUZBMSwgXHU3Mjc5XHU5NjMyKzJcclxuICBpZiAoZW50aXR5X2pwR2lyYXRpbmEuaWQgPT0gMHgyMTEpIHtcclxuICAgIGRlZl9zdGFnZSArPSAyO1xyXG4gIH1cclxuICAvLyBcdTMwQUVcdTMwRTlcdTMwQzZcdTMwQTNcdTMwQ0EgKFx1MzBBQVx1MzBFQVx1MzBCOFx1MzBGMykgLT4gXHU5NjMyXHU1RkExLCBcdTcyNzlcdTk2MzItMlxyXG4gIGlmIChlbnRpdHlfanBHaXJhdGluYS5pZCA9PSAweDIxOCkge1xyXG4gICAgZGVmX3N0YWdlIC09IDI7XHJcbiAgfVxyXG5cclxuICBkZWZfc3RhZ2UgKz0gbW92ZUNhdGVnb3J5ID09IGVvcy5DQVRFR09SWV9QSFlTSUNBTCA/IGRlZmVuZGVyLnN0YWdlX2RlZiA6IGRlZmVuZGVyLnN0YWdlX3NwX2RlZjtcclxuXHJcbiAgLy8gXHUzMDRBXHUzMDU3XHUzMDRBXHUzMDREIC0+IFx1NzZGOFx1NjI0Qlx1MzA2RVx1NEUwQVx1NjYwN1x1MzA1N1x1MzA1Rlx1MzBFOVx1MzBGM1x1MzBBRlx1NjU3MFx1NTIwNlx1MzA5Mlx1ODFFQVx1OEVBQlx1MzA2RVx1NjUzQlx1NjQ4M1x1MzBFOVx1MzBGM1x1MzBBRlx1MzA2OFx1MzA1N1x1MzA2Nlx1NjUzQlx1NjQ4M1xyXG4gIGlmIChtb3ZlSWQgPT0gMHgxYmQpIHtcclxuICAgIGF0a19zdGFnZV9ib29zdCA9IDA7XHJcblxyXG4gICAgLy8gXHU3NkY4XHU2MjRCXHUzMDZFXHU2NTNCXHU2NDgzXHUzMEU5XHUzMEYzXHUzMEFGXHU1MjA2XHUzMDZFXHU4OERDXHU2QjYzXHUzMDkyXHU5MDY5XHU3NTI4XHJcbiAgICBsZXQgc3RhZ2UgPSBkZWZlbmRlci5zdGFnZV9hdGs7XHJcbiAgICBpZiAoc3RhZ2UgPiAxMCkgYXRrX3N0YWdlX2Jvb3N0ID0gKChzdGFnZSAtIDEwKSA8PCAxNikgPj4gMTY7XHJcbiAgICAvLyBcdTc2RjhcdTYyNEJcdTMwNkVcdTk2MzJcdTVGQTFcdTMwRTlcdTMwRjNcdTMwQUZcdTUyMDZcdTMwNkVcdTg4RENcdTZCNjNcdTMwOTJcdTkwNjlcdTc1MjhcclxuICAgIHN0YWdlID0gZGVmZW5kZXIuc3RhZ2VfZGVmO1xyXG4gICAgaWYgKHN0YWdlID4gMTApIGF0a19zdGFnZV9ib29zdCA9ICgoYXRrX3N0YWdlX2Jvb3N0ICsgc3RhZ2UgLSAxMCkgPDwgMTYpID4+IDE2O1xyXG4gICAgLy8gXHU3NkY4XHU2MjRCXHUzMDZFXHU3Mjc5XHU2NTNCXHUzMEU5XHUzMEYzXHUzMEFGXHU1MjA2XHUzMDZFXHU4OERDXHU2QjYzXHUzMDkyXHU5MDY5XHU3NTI4XHJcbiAgICBzdGFnZSA9IGRlZmVuZGVyLnN0YWdlX3NwX2F0aztcclxuICAgIGlmIChzdGFnZSA+IDEwKSBhdGtfc3RhZ2VfYm9vc3QgPSAoKGF0a19zdGFnZV9ib29zdCArIHN0YWdlIC0gMTApIDw8IDE2KSA+PiAxNjtcclxuICAgIC8vIFx1NzZGOFx1NjI0Qlx1MzA2RVx1NzI3OVx1OTYzMlx1MzBFOVx1MzBGM1x1MzBBRlx1NTIwNlx1MzA2RVx1ODhEQ1x1NkI2M1x1MzA5Mlx1OTA2OVx1NzUyOFxyXG4gICAgc3RhZ2UgPSBkZWZlbmRlci5zdGFnZV9zcF9kZWY7XHJcbiAgICBpZiAoc3RhZ2UgPiAxMCkgYXRrX3N0YWdlX2Jvb3N0ID0gKChhdGtfc3RhZ2VfYm9vc3QgKyBzdGFnZSAtIDEwKSA8PCAxNikgPj4gMTY7XHJcblxyXG4gICAgYXRrX3N0YWdlICs9IGF0a19zdGFnZV9ib29zdDtcclxuICB9XHJcblxyXG4gIC8vIFx1MzA2Nlx1MzA5M1x1MzA2RFx1MzA5M1xyXG4gIGlmIChhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4NjcpKSB7XHJcbiAgICBkZWZfc3RhZ2UgPSAxMDtcclxuICAgIGRlZl9zdGFnZV9tdWx0ID0gMTtcclxuICB9IGVsc2UgaWYgKGRlZmVuZGVyLmFiaWxpdHlBY3RpdmUoMHg2NykpIHtcclxuICAgIGF0a19zdGFnZSA9IDEwO1xyXG4gICAgYXRrX3N0YWdlX211bHQgPSAxO1xyXG4gIH1cclxuXHJcbiAgLy8gXHU0RTBCXHU5NjUwXHU1MUU2XHU3NDA2XHJcbiAgaWYgKGF0a19zdGFnZSA8IDApIGF0a19zdGFnZSA9IDA7XHJcbiAgLy8gXHU0RTBBXHU5NjUwXHU1MUU2XHU3NDA2XHJcbiAgaWYgKGF0a19zdGFnZSA+IDIwKSBhdGtfc3RhZ2UgPSAyMDtcclxuXHJcbiAgLy8gXHU2NTNCXHU2NDgzXHU2MzA3XHU2NTcwXHUzMDZFXHU4QTA4XHU3Qjk3XHJcbiAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLm9mZmVuc2l2ZVN0YXRTdGFnZSA9IGF0a19zdGFnZTtcclxuICBkdW5nZW9uLmRhbWFnZUNhbGMub2ZmZW5zaXZlU3RhdCA9IG1vdmVDYXRlZ29yeSA9PSBlb3MuQ0FURUdPUllfUEhZU0lDQUwgPyBhdHRhY2tlci5hdGsgOiBhdHRhY2tlci5zcF9hdGs7XHJcbiAgY29uc3QgYXRrX3N0YXRfc3RhZ2VfbXVsdCA9IE1lY2hhbmljcy5PRkZFTlNJVkVfU1RBVF9TVEFHRV9NVUxUSVBMSUVSU1thdGtfc3RhZ2VdO1xyXG4gIGNvbnN0IGF0a19tdWx0ID1cclxuICAgIG1vdmVDYXRlZ29yeSA9PSBlb3MuQ0FURUdPUllfUEhZU0lDQUwgPyBhdHRhY2tlci5hdGsgKiBhdGtfc3RhdF9zdGFnZV9tdWx0IDogYXR0YWNrZXIuc3BfYXRrICogYXRrX3N0YXRfc3RhZ2VfbXVsdDtcclxuICBsZXQgYXRrID0gTWF0aC50cnVuYyhhdGtfbXVsdCAqIGF0a19zdGFnZV9tdWx0KTtcclxuXHJcbiAgLy8gXHU0RTBCXHU5NjUwXHU1MUU2XHU3NDA2XHJcbiAgaWYgKGRlZl9zdGFnZSA8IDApIGRlZl9zdGFnZSA9IDA7XHJcbiAgLy8gXHU0RTBBXHU5NjUwXHU1MUU2XHU3NDA2XHJcbiAgaWYgKGRlZl9zdGFnZSA+IDIwKSBkZWZfc3RhZ2UgPSAyMDtcclxuXHJcbiAgLy8gXHU5NjMyXHU1RkExXHU2MzA3XHU2NTcwXHUzMDZFXHU4QTA4XHU3Qjk3XHJcbiAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmRlZmVuc2l2ZVN0YXRTdGFnZSA9IGRlZl9zdGFnZTtcclxuICBkdW5nZW9uLmRhbWFnZUNhbGMuZGVmZW5zaXZlU3RhdCA9IG1vdmVDYXRlZ29yeSA9PSBlb3MuQ0FURUdPUllfUEhZU0lDQUwgPyBkZWZlbmRlci5kZWYgOiBkZWZlbmRlci5zcF9kZWY7XHJcbiAgY29uc3QgZGVmX211bHQgPVxyXG4gICAgbW92ZUNhdGVnb3J5ID09IGVvcy5DQVRFR09SWV9QSFlTSUNBTFxyXG4gICAgICA/IGRlZmVuZGVyLmRlZiAqIE1lY2hhbmljcy5ERUZFTlNJVkVfU1RBVF9TVEFHRV9NVUxUSVBMSUVSU1tkZWZfc3RhZ2VdXHJcbiAgICAgIDogZGVmZW5kZXIuc3BfZGVmICogTWVjaGFuaWNzLkRFRkVOU0lWRV9TVEFUX1NUQUdFX01VTFRJUExJRVJTW2RlZl9zdGFnZV07XHJcbiAgbGV0IGRlZiA9IE1hdGgudHJ1bmMoZGVmX211bHQgKiBkZWZfc3RhZ2VfbXVsdCk7XHJcblxyXG4gIC8vIFx1NUMwMlx1NzUyOFx1OTA1M1x1NTE3N1x1MzA2RVx1MzBCOVx1MzBDNlx1MzBGQ1x1MzBCRlx1MzBCOVx1NEUwQVx1NjYwN1x1NTJCOVx1Njc5Q1x1MzA5Mlx1OTA2OVx1NzUyOCAoXHUzMEMxXHUzMEZDXHUzMEUwXHUzMEUxXHUzMEYzXHUzMEQwXHUzMEZDXHUzMDZFXHUzMDdGKVxyXG4gIGlmIChhdHRhY2tlci5pc19tZW1iZXIpIHtcclxuICAgIGF0ayArPSBhdHRhY2tlci5leGNsdXNpdmVJdGVtT2ZmZW5zZUJvb3N0KG1vdmVDYXRlZ29yeSk7XHJcbiAgfVxyXG4gIGlmIChkZWZlbmRlci5pc19tZW1iZXIpIHtcclxuICAgIGRlZiArPSBkZWZlbmRlci5leGNsdXNpdmVJdGVtRGVmZW5zZUJvb3N0KG1vdmVDYXRlZ29yeSk7XHJcbiAgfVxyXG5cclxuICAvLyBcdTcyNjlcdTc0MDZcclxuICBpZiAobW92ZUNhdGVnb3J5ID09IGVvcy5DQVRFR09SWV9QSFlTSUNBTCkge1xyXG4gICAgLy8gXHUzMEQxXHUzMEVGXHUzMEZDXHUzMEQwXHUzMEYzXHUzMEMwXHUzMENBXHJcbiAgICBpZiAoYXR0YWNrZXIuaXRlbUFjdGl2ZSgweDFhKSkge1xyXG4gICAgICBhdGsgKz0gTWVjaGFuaWNzLlBPV0VSX0JBTkRfU1RBVF9CT09TVDtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLml0ZW1BdGtNb2RpZmllciArPSBNZWNoYW5pY3MuUE9XRVJfQkFORF9TVEFUX0JPT1NUO1xyXG4gICAgfVxyXG4gICAgLy8gXHUzMEI0XHUzMEYzXHUzMEQ5XHUzMDZFXHUzMENGXHUzMEU5XHUzMERFXHUzMEFEXHJcbiAgICBpZiAoYXR0YWNrZXIuaXRlbUFjdGl2ZSgweDMyKSkge1xyXG4gICAgICBhdGsgKz0gTWVjaGFuaWNzLk1VTkNIX0JFTFRfU1RBVF9CT09TVDtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLml0ZW1BdGtNb2RpZmllciArPSBNZWNoYW5pY3MuTVVOQ0hfQkVMVF9TVEFUX0JPT1NUO1xyXG4gICAgfVxyXG4gICAgLy8gXHU2Q0UyXHU1MkQ1XHU4MjcyXHUzMEVBXHUzMERDXHUzMEYzXHJcbiAgICBpZiAoYXR0YWNrZXIuYXVyYUJvd0FjdGl2ZSgpKSB7XHJcbiAgICAgIGF0ayArPSBNZWNoYW5pY3MuQVVSQV9CT1dfU1RBVF9CT09TVDtcclxuICAgICAgLy8gW1x1MzBEMFx1MzBCMF0gXHU0RjU1XHU2NTQ1XHUzMDRCXHU2NTNCXHU2NDgzXHU0RTBBXHU2NjA3XHU1MjA2XHUzMDRDXHU3Mjc5XHU2NTNCXHU0RTBBXHU2NjA3XHU1MjA2XHUzMDY4XHUzMDU3XHUzMDY2XHUzMEFCXHUzMEE2XHUzMEYzXHUzMEM4XHUzMDU1XHUzMDhDXHUzMDhCXHVGRjFGIChcdThBMDhcdTdCOTdcdTMwNkJcdTMwNkZcdTVGNzFcdTk3RkZcdTMwNkFcdTMwNTcpXHJcbiAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5pdGVtU3BBdGtNb2RpZmllciArPSBNZWNoYW5pY3MuQVVSQV9CT1dfU1RBVF9CT09TVDtcclxuICAgIH1cclxuICAgIGlmIChmdWxsQ2FsYykge1xyXG4gICAgICAvLyBcdTMwN0NcdTMwNDZcdTMwNEVcdTMwODdcdTMwQjlcdTMwQUJcdTMwRkNcdTMwRDVcclxuICAgICAgaWYgKGRlZmVuZGVyLml0ZW1BY3RpdmUoMHgwMjUpKSB7XHJcbiAgICAgICAgZGVmICs9IE1lY2hhbmljcy5ERUZfU0NBUkZfU1RBVF9CT09TVDtcclxuICAgICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuaXRlbURlZk1vZGlmaWVyICs9IE1lY2hhbmljcy5ERUZfU0NBUkZfU1RBVF9CT09TVDtcclxuICAgICAgfVxyXG4gICAgICAvLyBcdTZDRTJcdTUyRDVcdTgyNzJcdTMwRUFcdTMwRENcdTMwRjNcclxuICAgICAgaWYgKGRlZmVuZGVyLmF1cmFCb3dBY3RpdmUoKSkge1xyXG4gICAgICAgIGRlZiArPSBNZWNoYW5pY3MuQVVSQV9CT1dfU1RBVF9CT09TVDtcclxuICAgICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuaXRlbURlZk1vZGlmaWVyICs9IE1lY2hhbmljcy5BVVJBX0JPV19TVEFUX0JPT1NUO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIFx1NzI3OVx1NkI4QVxyXG4gIGVsc2Uge1xyXG4gICAgaWYgKGZ1bGxDYWxjKSB7XHJcbiAgICAgIC8vIFx1MzBBRFx1MzBDOFx1MzBCNVx1MzBGM1x1MzBEMFx1MzBGM1x1MzBDMFx1MzBDQVxyXG4gICAgICBpZiAoZGVmZW5kZXIuaXRlbUFjdGl2ZSgweDI5KSkge1xyXG4gICAgICAgIGRlZiArPSBNZWNoYW5pY3MuWklOQ19CQU5EX1NUQVRfQk9PU1Q7XHJcbiAgICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLml0ZW1TcERlZk1vZGlmaWVyICs9IE1lY2hhbmljcy5aSU5DX0JBTkRfU1RBVF9CT09TVDtcclxuICAgICAgfVxyXG4gICAgICAvLyBcdTZDRTJcdTUyRDVcdTgyNzJcdTMwRUFcdTMwRENcdTMwRjNcclxuICAgICAgaWYgKGRlZmVuZGVyLmF1cmFCb3dBY3RpdmUoKSkge1xyXG4gICAgICAgIGRlZiArPSBNZWNoYW5pY3MuQVVSQV9CT1dfU1RBVF9CT09TVDtcclxuICAgICAgICAvLyBbXHUzMEQwXHUzMEIwXSBcdTRGNTVcdTY1NDVcdTMwNEJcdTcyNzlcdTk2MzJcdTRFMEFcdTY2MDdcdTUyMDZcdTMwNENcdTk2MzJcdTVGQTFcdTRFMEFcdTY2MDdcdTUyMDZcdTMwNjhcdTMwNTdcdTMwNjZcdTMwQUJcdTMwQTZcdTMwRjNcdTMwQzhcdTMwNTVcdTMwOENcdTMwOEJcdUZGMUYgKFx1OEEwOFx1N0I5N1x1MzA2Qlx1MzA2Rlx1NUY3MVx1OTdGRlx1MzA2QVx1MzA1NylcclxuICAgICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuaXRlbURlZk1vZGlmaWVyICs9IE1lY2hhbmljcy5BVVJBX0JPV19TVEFUX0JPT1NUO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBcdTMwQjlcdTMwREFcdTMwQjdcdTMwRTNcdTMwRUJcdTMwRUFcdTMwRENcdTMwRjNcclxuICAgIGlmIChhdHRhY2tlci5pdGVtQWN0aXZlKDB4MjgpKSB7XHJcbiAgICAgIGF0ayArPSBNZWNoYW5pY3MuU1BFQ0lBTF9CQU5EX1NUQVRfQk9PU1Q7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5pdGVtU3BBdGtNb2RpZmllciArPSBNZWNoYW5pY3MuU1BFQ0lBTF9CQU5EX1NUQVRfQk9PU1Q7XHJcbiAgICB9XHJcbiAgICAvLyBcdTMwQjRcdTMwRjNcdTMwRDlcdTMwNkVcdTMwQ0ZcdTMwRTlcdTMwREVcdTMwQURcclxuICAgIGlmIChhdHRhY2tlci5pdGVtQWN0aXZlKDB4MzIpKSB7XHJcbiAgICAgIGF0ayArPSBNZWNoYW5pY3MuTVVOQ0hfQkVMVF9TVEFUX0JPT1NUO1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuaXRlbVNwQXRrTW9kaWZpZXIgKz0gTWVjaGFuaWNzLk1VTkNIX0JFTFRfU1RBVF9CT09TVDtcclxuICAgIH1cclxuICAgIC8vIFx1NkNFMlx1NTJENVx1ODI3Mlx1MzBFQVx1MzBEQ1x1MzBGMyAoW1x1MzBEMFx1MzBCMF0gXHU5NjMyXHU1RkExXHU1MDc0XHUzMDRDXHU2MzAxXHUzMDYzXHUzMDY2XHUzMDQ0XHUzMDhCXHUzMDY4XHU2NTNCXHU2NDgzXHU1MDc0XHUzMDZFXHU3Mjc5XHU2NTNCXHUzMDRDXHU0RTBBXHUzMDRDXHUzMDhCXHVGRjFGKVxyXG4gICAgaWYgKGRlZmVuZGVyLmF1cmFCb3dBY3RpdmUoKSkge1xyXG4gICAgICBhdGsgKz0gTWVjaGFuaWNzLkFVUkFfQk9XX1NUQVRfQk9PU1Q7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5pdGVtU3BBdGtNb2RpZmllciArPSBNZWNoYW5pY3MuQVVSQV9CT1dfU1RBVF9CT09TVDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFx1NUEwMVx1NTI5Qlx1OEEwOFx1N0I5N1xyXG4gIGNvbnN0IHBvd2VyID0gbW92ZVBvd2VyICogYXRrX3N0YXRfc3RhZ2VfbXVsdCAqIGF0a19zdGFnZV9tdWx0O1xyXG5cclxuICBsZXQgYXRrX211bHRfaW50ID0gMTsgLy8gYXRrIFx1NEU1N1x1N0I5N1x1NTAyNFxyXG4gIGxldCBhdGtfZGl2ID0gMTsgLy8gYXRrIFx1OTY2NFx1N0I5N1x1NTAyNFxyXG4gIGxldCBkZWZfbXVsdF9pbnQgPSAxOyAvLyBkZWYgXHU0RTU3XHU3Qjk3XHU1MDI0XHJcbiAgbGV0IGRlZl9kaXYgPSAxOyAvLyBkZWYgXHU5NjY0XHU3Qjk3XHU1MDI0XHJcbiAgbGV0IG5vdF9waHlzaWNhbCA9IE1vdmVOb3RQaHlzaWFsKG1vdmVJZCk7XHJcblxyXG4gIC8vIFx1MzA1M1x1MzA5M1x1MzA1OFx1MzA4N1x1MzA0Nlx1NzY3QVx1NTJENVx1MzA0Qlx1MzA2NFx1NzI2OVx1NzQwNlx1NjI4MCAtPiB4MlxyXG4gIGlmICghbm90X3BoeXNpY2FsICYmIGF0dGFja2VyLmFiaWxpdHlBY3RpdmUoMHgxMSkgJiYgYXR0YWNrZXIuaGFzTmVnYXRpdmVTdGF0dXModHJ1ZSkpIHtcclxuICAgIGF0a19tdWx0X2ludCA9IDI7XHJcbiAgfVxyXG4gIC8vIFx1MzA2MVx1MzA0Qlx1MzA4OVx1MzA4Mlx1MzA2MS9cdTMwRThcdTMwQUNcdTMwRDFcdTMwRUZcdTMwRkNcdTc2N0FcdTUyRDVcdTMwNEJcdTMwNjRcdTcyNjlcdTc0MDZcdTYyODAgLT4geDEuNVxyXG4gIGlmIChhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4MjIpIHx8IGF0dGFja2VyLmFiaWxpdHlBY3RpdmUoMHg0YikpIHtcclxuICAgIGlmIChkdW5nZW9uLnJuZy5yb2xsSHVnZVB1cmVQb3dlcigpICYmICFub3RfcGh5c2ljYWwpIHtcclxuICAgICAgYXRrX211bHRfaW50ICo9IDM7XHJcbiAgICAgIGF0a19kaXYgPSAyO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBcdTMwNkZcdTMwOEFcdTMwNERcdTMwOEFcdTMwNEJcdTMwNjRcdTcyNjlcdTc0MDZcdTYyODAgLT4geDEuNVxyXG4gIGlmIChhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4MzApICYmICFub3RfcGh5c2ljYWwpIHtcclxuICAgIGF0a19tdWx0X2ludCAqPSAzO1xyXG4gICAgYXRrX2RpdiA8PD0gMTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRlYW1JZHggPSBhdHRhY2tlci5pc19tZW1iZXIgPyAxIDogMDtcclxuICAvLyBcdTMwRDdcdTMwRTlcdTMwQjlcdTMwNEJcdTMwNjRcdTMwREVcdTMwQTRcdTMwQ0FcdTMwQjlcdTMwNkVcdTRFRjJcdTk1OTNcdTMwNENcdTk2QTNcdTYzQTUgLT4geDEuNVxyXG4gIGlmIChhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4MzgpICYmIG5vdF9waHlzaWNhbCAmJiBkdW5nZW9uLm1pbnVzW3RlYW1JZHhdKSB7XHJcbiAgICBhdGtfZGl2ICo9IDEwO1xyXG4gICAgYXRrX211bHRfaW50ICo9IDE1O1xyXG4gIH1cclxuICAvLyBcdTMwREVcdTMwQTRcdTMwQ0FcdTMwQjlcdTMwNEJcdTMwNjRcdTMwRDdcdTMwRTlcdTMwQjlcdTMwNkVcdTRFRjJcdTk1OTNcdTMwNENcdTk2QTNcdTYzQTUgLT4geDEuNVxyXG4gIGlmIChhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4M2YpICYmIG5vdF9waHlzaWNhbCAmJiBkdW5nZW9uLnBsdXNbdGVhbUlkeF0pIHtcclxuICAgIGF0a19kaXYgKj0gMTA7XHJcbiAgICBhdGtfbXVsdF9pbnQgKj0gMTU7XHJcbiAgfVxyXG5cclxuICAvLyBcdTMwNDRcdTMwNEJcdTMwNEYgLT4gXHU3NkY4XHU2MjRCXHUzMDZCXHU2NTNCXHU2NDgzeDAuOFxyXG4gIGlmIChkZWZlbmRlci5hYmlsaXR5QWN0aXZlRGV0YWlscygweDYsIGF0dGFja2VyLCB0cnVlKSkge1xyXG4gICAgYXRrX211bHRfaW50IDw8PSAyO1xyXG4gICAgYXRrX2RpdiAqPSA1O1xyXG4gIH1cclxuICAvLyBcdTMwNzVcdTMwNTdcdTMwNEVcdTMwNkFcdTMwNDZcdTMwOERcdTMwNTMgLT4gXHU5NjMyXHU1RkExeDEuNVxyXG4gIGlmIChkZWZlbmRlci5hYmlsaXR5QWN0aXZlRGV0YWlscygweDM0LCBhdHRhY2tlciwgdHJ1ZSkpIHtcclxuICAgIGlmIChkZWZlbmRlci5oYXNOZWdhdGl2ZVN0YXR1cyh0cnVlKSkge1xyXG4gICAgICBkZWZfbXVsdF9pbnQgPSAzO1xyXG4gICAgICBkZWZfZGl2ID0gMjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF0ayAqPSBhdGtfbXVsdF9pbnQ7XHJcbiAgZGVmICo9IGRlZl9tdWx0X2ludDtcclxuXHJcbiAgaWYgKGF0a19kaXYgIT0gMSkgYXRrIC89IGF0a19kaXY7XHJcbiAgaWYgKGRlZl9kaXYgIT0gMSkgZGVmIC89IGRlZl9kaXY7XHJcblxyXG4gIGR1bmdlb24uZGFtYWdlQ2FsYy5vZmZlbnNlQ2FsYyA9IGF0aztcclxuICBkdW5nZW9uLmRhbWFnZUNhbGMuZGVmZW5zZUNhbGMgPSBkZWY7XHJcblxyXG4gIC8vIFx1NEUwQVx1OTY1MFx1MzBGQlx1NEUwQlx1OTY1MFx1NTFFNlx1NzQwNlxyXG4gIGlmIChhdGsgPCAwKSBhdGsgPSAwO1xyXG4gIGlmIChhdGsgPj0gTWVjaGFuaWNzLk9GRkVOU0VfU1RBVF9NQVgpIGF0ayA9IE1lY2hhbmljcy5PRkZFTlNFX1NUQVRfTUFYO1xyXG5cclxuICBkdW5nZW9uLmRhbWFnZUNhbGMuZGFtYWdlQ2FsY0RlZiA9IGRlZjtcclxuXHJcbiAgLy8gXHUzMEVDXHUzMEQ5XHUzMEVCXHU4OERDXHU2QjYzXHJcbiAgY29uc3QgZGVmX2Z4ID0gZGVmO1xyXG4gIGNvbnN0IGxldmVsID0gYXR0YWNrZXIubGV2ZWw7XHJcbiAgY29uc3QgZmx2ID0gYXR0YWNrZXIubGV2ZWwgKyAoYXRrIC0gZGVmKSAvIDg7XHJcbiAgY29uc3QgYXQgPSBwb3dlciArIGF0aztcclxuICBkdW5nZW9uLmRhbWFnZUNhbGMuZGFtYWdlQ2FsY0F0ID0gTWF0aC5yb3VuZChhdCk7XHJcbiAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmF0dGFja2VyTGV2ZWwgPSBhdHRhY2tlci5sZXZlbDtcclxuICBkdW5nZW9uLmRhbWFnZUNhbGMuZGFtYWdlQ2FsY0ZsdiA9IE1hdGgucm91bmQoZmx2KTtcclxuXHJcbiAgLy8gXHU1N0ZBXHU3OTBFXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU4QTA4XHU3Qjk3XHJcbiAgY29uc3QgYXRTY2FsZWQgPSBhdCAqIE1lY2hhbmljcy5DT05TVF8xNTNfRElWXzI1NjtcclxuICBjb25zdCBkZWZTY2FsZWQgPSBkZWZfZnggKiBNZWNoYW5pY3MuQ09OU1RfTkVHMF81O1xyXG4gIGNvbnN0IGxuQXJnID0gTWF0aC5yb3VuZCgoZmx2ICsgNTApICogMTApO1xyXG4gIGNvbnN0IGxuID0gTWF0aFV0aWwuY2xhbXBlZExuKGxuQXJnKTtcclxuICBjb25zdCBsblNjYWxlZCA9IGxuICogNTA7XHJcbiAgbGV0IGJhc2UgPSBkZWZTY2FsZWQgKyBhdFNjYWxlZCArIGxuU2NhbGVkICsgLTMxMTtcclxuXHJcbiAgLy8gXHU2NTc1XHU4OERDXHU2QjYzXHJcbiAgaWYgKGR1bmdlb24uZ2VuSW5mby5maXhlZFJvb21JZCAhPSBlb3MuRklYRURfU1VCU1RJVFVURV9ST09NICYmICFhdHRhY2tlci5pc19tZW1iZXIpIHtcclxuICAgIGJhc2UgLz0gTWVjaGFuaWNzLkNPTlNUXzg1X0RJVl82NDtcclxuICB9XHJcbiAgLy8gXHU1N0ZBXHU3OTBFXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU0RTBBXHU5NjUwXHU0RTBCXHU5NjUwXHJcbiAgaWYgKDk5OSA8IGJhc2UpIGJhc2UgPSA5OTk7XHJcbiAgaWYgKGJhc2UgPCAxKSBiYXNlID0gMTtcclxuXHJcbiAgLy8gXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU1MDBEXHU3Mzg3XHUzMDZFXHU4QTA4XHU3Qjk3XHJcbiAgY29uc3QgY2FsY1R5cGVCYXNlZERhbWFnZUVmZmVjdHNSZXN1bHQgPSBDYWxjVHlwZUJhc2VkRGFtYWdlRWZmZWN0cyhcclxuICAgIGR1bmdlb24sXHJcbiAgICBhdHRhY2tlcixcclxuICAgIGRlZmVuZGVyLFxyXG4gICAgbW92ZVBvd2VyLFxyXG4gICAgbW92ZVR5cGUsXHJcbiAgICBkYW1hZ2VPdXQsXHJcbiAgICBNZWNoYW5pY3MuaXNSZWd1bGFyQXR0YWNrT3JQcm9qZWN0aWxlKG1vdmVJZCksXHJcbiAgKTtcclxuICBsZXQgZGFtYWdlTXVsdER5bmFtaWMgPSBjYWxjVHlwZUJhc2VkRGFtYWdlRWZmZWN0c1Jlc3VsdC5kYW1hZ2VNdWx0T3V0O1xyXG4gIGxldCBzdXBlckVmZmVjdGl2ZSA9IGNhbGNUeXBlQmFzZWREYW1hZ2VFZmZlY3RzUmVzdWx0LnN1cGVyRWZmZWN0aXZlO1xyXG5cclxuICAvLyBcdTMwRUFcdTMwRDVcdTMwRUNcdTMwQUZcdTMwQkZcdTMwRkMsIFx1MzA3Mlx1MzA0Qlx1MzA4QVx1MzA2RVx1MzA0Qlx1MzA3OSAoXHU3MTIxXHU1MkI5XHU1MzE2XHUzMDU5XHUzMDhCXHU1QzAyXHU3NTI4XHU5MDUzXHU1MTc3XHUzMDkyXHU2MzAxXHUzMDYzXHUzMDY2XHUzMDQ0XHUzMDZBXHUzMDQ0KVxyXG4gIGlmIChmdWxsQ2FsYyAmJiAhYXR0YWNrZXIuZXhjbHVzaXZlSXRlbUVmZmVjdEFjdGl2ZSgweDQ0KSkge1xyXG4gICAgLy8gXHU3MjY5XHU3NDA2XHU2MjgwXHUzMDRCXHUzMDY0XHUzMDAxXHUzMDRCXHUzMDhGXHUzMDg5XHUzMDhGXHUzMDhBXHU0RUU1XHU1OTE2XHUzMDZFXHU2MjgwXHUzMDkyXHU0RjdGXHUzMDYzXHUzMDY2XHUzMDQ0XHUzMDY2XHU5NjMyXHU1RkExXHU1MDc0XHUzMDRDXHUzMEVBXHUzMEQ1XHUzMEVDXHUzMEFGXHUzMEJGXHUzMEZDXHU3MkI2XHU2MTRCXHUzMDdFXHUzMDVGXHUzMDZGXHU3MjY5XHU3NDA2XHU1MzRBXHU2RTFCXHUzMDZFXHU1QzAyXHU3NTI4XHU5MDUzXHU1MTc3XHUzMDZFXHU1MkI5XHU2NzlDXHUzMDRDXHU3NjdBXHU1MkQ1XHJcbiAgICAvLyAtPiB4MC41XHJcbiAgICBpZiAoXHJcbiAgICAgIG1vdmVDYXRlZ29yeSA9PSBlb3MuQ0FURUdPUllfUEhZU0lDQUwgJiZcclxuICAgICAgKChtb3ZlSWQgIT0gMHg0OCAmJiBkZWZlbmRlci5zdGF0dXNlcy5yZWZsZWN0KSB8fCBkZWZlbmRlci5leGNsdXNpdmVJdGVtRWZmZWN0QWN0aXZlKDB4MWUpKVxyXG4gICAgKSB7XHJcbiAgICAgIGRhbWFnZU11bHREeW5hbWljICo9IE1lY2hhbmljcy5DT05TVF8wXzUwO1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuaGFsZlBoeXNpY2FsRGFtYWdlQWN0aXZhdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIFx1NzI3OVx1NkI4QVx1NjI4MFx1MzA0Qlx1MzA2NFx1MzAwMVx1OTYzMlx1NUZBMVx1NTA3NFx1MzA0Q1x1MzA3Mlx1MzA0Qlx1MzA4QVx1MzA2RVx1MzA0Qlx1MzA3OVx1NzJCNlx1NjE0Qlx1MzA3RVx1MzA1Rlx1MzA2Rlx1NzI3OVx1NkI4QVx1NTM0QVx1NkUxQlx1MzA2RVx1NUMwMlx1NzUyOFx1OTA1M1x1NTE3N1x1MzA2RVx1NTJCOVx1Njc5Q1x1MzA0Q1x1NzY3QVx1NTJENSAtPiB4MC41XHJcbiAgICBpZiAoXHJcbiAgICAgIG1vdmVDYXRlZ29yeSA9PSBlb3MuQ0FURUdPUllfU1BFQ0lBTCAmJlxyXG4gICAgICAoZGVmZW5kZXIuc3RhdHVzZXMubGlnaHRfc2NyZWVuIHx8IGRlZmVuZGVyLmV4Y2x1c2l2ZUl0ZW1FZmZlY3RBY3RpdmUoMHgxZikpXHJcbiAgICApIHtcclxuICAgICAgZGFtYWdlTXVsdER5bmFtaWMgKj0gTWVjaGFuaWNzLkNPTlNUXzBfNTA7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5oYWxmU3BlY2lhbERhbWFnZUFjdGl2YXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBcdTk2MzJcdTVGQTFcdTUwNzRcdTMwNENcdTMwNEFcdTMwN0VcdTMwNThcdTMwNkFcdTMwNDRcdTcyQjZcdTYxNEJcdTRFRTVcdTU5MTZcdTMwNEJcdTMwNjRcdTMwMDFcdTk2MzJcdTVGQTFcdTUwNzRcdTMwNENcdTMwQUJcdTMwRDZcdTMwQzhcdTMwQTJcdTMwRkNcdTMwREVcdTMwRkNcdTRFRTVcdTU5MTZcdTMwNEJcdTMwNjRcdTMwMDFcdTk2MzJcdTVGQTFcdTUwNzRcdTMwNENcdTMwQjdcdTMwQTdcdTMwRUJcdTMwQTJcdTMwRkNcdTMwREVcdTMwRkNcdTRFRTVcdTU5MTZcdTMwNEJcdTMwNjRcdTMwMDFcdTk2MzJcdTVGQTFcdTUwNzRcdTMwNENcdTMwNEJcdTMwNTdcdTMwNTNcdTMwNTVcdTMwMENcdTMwNEJcdTMwN0ZcdTMwNzJcdTMwNjhcdTMwNDhcdTMwMERcdTMwOTJcdTYzMDFcdTMwNUZcdTMwNkFcdTMwNDRcclxuICBpZiAoXHJcbiAgICAhZGVmZW5kZXIuc3RhdHVzZXMubHVja3lfY2hhbnQgJiZcclxuICAgICFkZWZlbmRlci5hYmlsaXR5QWN0aXZlRGV0YWlscygweGMsIGF0dGFja2VyLCB0cnVlKSAmJlxyXG4gICAgIWRlZmVuZGVyLmFiaWxpdHlBY3RpdmVEZXRhaWxzKDB4MTMpICYmXHJcbiAgICAhZGVmZW5kZXIuaXFTa2lsbEVuYWJsZWQoMHg0MCwgZHVuZ2VvbilcclxuICApIHtcclxuICAgIC8vIFx1MzBFMVx1MzBCOVx1NEVFNVx1NTkxNiAtPiBcdTYwMjVcdTYyNDBcdTczODd4MS41XHJcbiAgICBpZiAoYXR0YWNrZXIuZ2VuZGVyICE9IGVvcy5HRU5ERVJfRkVNQUxFKSB7XHJcbiAgICAgIGNyaXRDaGFuY2UgKz0gY3JpdENoYW5jZSAvIDI7XHJcbiAgICB9XHJcbiAgICAvLyBcdTMwNERcdTMwNDJcdTMwNDRcdTMwNjBcdTMwODFcdTcyQjZcdTYxNEIgLT4gXHU2MDI1XHU2MjQwXHU3Mzg3MTAwJSAoXHU1MTg1XHU5MEU4XHU3Njg0XHUzMDZCOTk5JVx1MzA2OFx1MzA1N1x1MzA2Nlx1NjI3MVx1MzA4Rlx1MzA4Q1x1MzA4QilcclxuICAgIGlmIChhdHRhY2tlci5zdGF0dXNlcy5mb2N1c19lbmVyZ3kpIHtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmZvY3VzRW5lcmd5QWN0aXZhdGVkID0gdHJ1ZTtcclxuICAgICAgY3JpdENoYW5jZSA9IE1lY2hhbmljcy5PRkZFTlNFX1NUQVRfTUFYO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gXHU2NTNCXHU2NDgzXHU1MDc0XHUzMDRDXHUzMEQ0XHUzMEYzXHUzMEM4XHUzMEVDXHUzMEYzXHUzMEJBXHU4OEM1XHU1MDk5LCBcdTMwN0VcdTMwNUZcdTMwNkZcdTY1M0JcdTY0ODNcdTUwNzRcdTMwNkVcdTMwNEJcdTMwNTdcdTMwNTNcdTMwNTVcdTMwMENcdTMwNkRcdTMwODlcdTMwNDRcdTMwNDZcdTMwNjFcdTMwMERcdTMwNENcdTY3MDlcdTUyQjkgLT4gXHU2MDI1XHU2MjQwXHU3Mzg3KzE1JVxyXG4gICAgICBpZiAoYXR0YWNrZXIuaXRlbUFjdGl2ZSgweDEzKSB8fCBhdHRhY2tlci5pcVNraWxsRW5hYmxlZCgweDFkLCBkdW5nZW9uKSkge1xyXG4gICAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5zY29wZUxlbnNPclNoYXJwc2hvb3RlckFjdGl2YXRlZCA9IHRydWU7XHJcbiAgICAgICAgY3JpdENoYW5jZSArPSBNZWNoYW5pY3MuU0NPUEVfTEVOU19DUklUX1JBVEVfQk9PU1Q7XHJcbiAgICAgIH1cclxuICAgICAgLy8gXHU2NTNCXHU2NDgzXHU1MDc0XHUzMDRDXHUzMDREXHUzMDg3XHUzMDQ2XHUzMDQ2XHUzMDkzIC0+IFx1NjAyNVx1NjI0MFx1NzM4NysxMCVcclxuICAgICAgaWYgKGF0dGFja2VyLmFiaWxpdHlBY3RpdmUoMHg1OCkpIHtcclxuICAgICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuc3VwZXJMdWNrQWN0aXZhdGVkID0gdHJ1ZTtcclxuICAgICAgICBjcml0Q2hhbmNlICs9IE1lY2hhbmljcy5TVVBFUl9MVUNLX0NSSVRfUkFURV9CT09TVDtcclxuICAgICAgfVxyXG4gICAgICAvLyBcdTk2MzJcdTVGQTFcdTUwNzRcdTMwNENcdTMwNkRcdTMwODlcdTMwOEZcdTMwOENcdTMwQ0ZcdTMwQzFcdTMwREVcdTMwQURcdTg4QzVcdTUwOTkgLT4gXHU2MDI1XHU2MjQwXHU3Mzg3KzE1JVxyXG4gICAgICBpZiAoZGVmZW5kZXIuaXRlbUFjdGl2ZSgweDE0KSkge1xyXG4gICAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5wYXRzeUJhbmRBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIGNyaXRDaGFuY2UgKz0gTWVjaGFuaWNzLlNDT1BFX0xFTlNfQ1JJVF9SQVRFX0JPT1NUOyAvLyBcdTMwRDRcdTMwRjNcdTMwQzhcdTMwRUNcdTMwRjNcdTMwQkFcdTMwNjhcdTU0MENcdTMwNThcdTdCODdcdTYyNDBcdTMwNEJcdTMwODlcdTUzQzJcdTcxNjdcclxuICAgICAgfVxyXG4gICAgICAvLyBcdTUyQjlcdTY3OUNcdTYyOUNcdTdGQTRcdTMwNEJcdTMwNjRcdTMwMDFcdTY1M0JcdTY0ODNcdTUwNzRcdTMwNkVcdTMwNEJcdTMwNTdcdTMwNTNcdTMwNTVcdTMwMENcdTMwNDJcdTMwNDRcdTMwNTdcdTMwODdcdTMwNDZcdTMwNzBcdTMwNjRcdTMwNTBcdTMwOTNcdTMwMERcdTMwNENcdTY3MDlcdTUyQjkgLT4gXHU2MDI1XHU2MjQwXHU3Mzg3NDAlIChcdTRFMEFcdTY2RjhcdTMwNEQpXHJcbiAgICAgIGlmIChzdXBlckVmZmVjdGl2ZSAmJiBhdHRhY2tlci5pcVNraWxsRW5hYmxlZCgweDEsIGR1bmdlb24pKSB7XHJcbiAgICAgICAgY3JpdENoYW5jZSA9IE1lY2hhbmljcy5UWVBFX0FEVkFOVEFHRV9NQVNURVJfQ1JJVF9SQVRFO1xyXG4gICAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy50eXBlQWR2YW50YWdlTWFzdGVyQWN0aXZhdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFx1NjAyNVx1NjI0MCAoXHU1QzAyXHU3NTI4XHU5MDUzXHU1MTc3XHUzMDZFXHU2MDI1XHU2MjQwXHU3MTIxXHU1MkI5XHU1MkI5XHU2NzlDXHUzMDRDXHU3NjdBXHU1MkQ1XHUzMDU3XHUzMDY2XHUzMDQ0XHUzMDZBXHUzMDQ0KVxyXG4gICAgaWYgKGR1bmdlb24ucm5nLnJvbGxDcml0aWNhbEhpdChjcml0Q2hhbmNlKSAmJiAhZGVmZW5kZXIuZXhjbHVzaXZlSXRlbUVmZmVjdEFjdGl2ZSgweDUpKSB7XHJcbiAgICAgIGRhbWFnZU91dC5jcml0aWNhbEhpdCA9IHRydWU7XHJcbiAgICAgIC8vIFx1MzBCOVx1MzBDQVx1MzBBNFx1MzBEMVx1MzBGQyAtPiB4MlxyXG4gICAgICBpZiAoYXR0YWNrZXIuYWJpbGl0eUFjdGl2ZSgweDVkKSkge1xyXG4gICAgICAgIGRhbWFnZU11bHREeW5hbWljICo9IDI7XHJcbiAgICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLnNuaXBlckFjdGl2YXRlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgLy8gXHUzMDVEXHUzMDhDXHU0RUU1XHU1OTE2IC0+IHgxLjVcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgZGFtYWdlTXVsdER5bmFtaWMgKj0gTWVjaGFuaWNzLkNPTlNUXzFfNTA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFx1NjcwMFx1N0Q0Mlx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1OEEwOFx1N0I5N1xyXG4gIGR1bmdlb24uZGFtYWdlQ2FsYy5kYW1hZ2VDYWxjQmFzZSA9IE1hdGgucm91bmQoYmFzZSk7XHJcbiAgYmFzZSAqPSBkYW1hZ2VNdWx0RHluYW1pYztcclxuICBkdW5nZW9uLmRhbWFnZUNhbGMuc3RhdGljRGFtYWdlTXVsdCA9IGRhbWFnZU11bHQ7XHJcbiAgYmFzZSAqPSBkYW1hZ2VNdWx0O1xyXG4gIGR1bmdlb24uZGFtYWdlQ2FsYy5kYW1hZ2VDYWxjID0gTWF0aC5yb3VuZChiYXNlKTtcclxuXHJcbiAgY29uc3QgdmFyaWFuY2UgPSBkdW5nZW9uLnJuZy5yb2xsRGFtYWdlVmFyaWFuY2UoKTtcclxuICBiYXNlICo9IHZhcmlhbmNlO1xyXG4gIGR1bmdlb24uZGFtYWdlQ2FsYy5kYW1hZ2VDYWxjUmFuZG9tTXVsdFBjdCA9IE1hdGgucm91bmQoMTAwICogdmFyaWFuY2UpO1xyXG4gIGRhbWFnZU91dC5kYW1hZ2UgPSBNYXRoLnJvdW5kKGJhc2UpO1xyXG5cclxuICAvLyBcdTYyOTVcdTY0RjJcdTcyNjkgKFx1MzA2QVx1MzA1Mlx1MzA1Rlx1MzA4Mlx1MzA2RSkgLT4geDAuNVxyXG4gIGlmIChtb3ZlSWQgPT0gMHgxOTUpIHtcclxuICAgIGRhbWFnZU91dC5kYW1hZ2UgPSBNYXRoLmNlaWwoZGFtYWdlT3V0LmRhbWFnZSAqIE1lY2hhbmljcy5DT05TVF8wXzUwKTtcclxuICB9XHJcbiAgLy8gXHUzMDU0XHUzMDQ2XHUzMDhGXHUzMDkzXHU4OERDXHU2QjYzIC0+IHgxLjVcclxuICBpZiAobW92ZUlkID09IDB4MTk1ICYmIGF0dGFja2VyLmlxU2tpbGxFbmFibGVkKDB4MmYsIGR1bmdlb24pKSB7XHJcbiAgICBkYW1hZ2VPdXQuZGFtYWdlID0gTWF0aC5jZWlsKGRhbWFnZU91dC5kYW1hZ2UgKiBNZWNoYW5pY3MuUE9XRVJfUElUQ0hFUl9EQU1BR0VfTVVMVElQTElFUik7XHJcbiAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc1Bvd2VyUGl0Y2hlckFjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvLyBcdTMwQThcdTMwQTJcdTMwRkNcdTMwRDZcdTMwRUNcdTMwRkNcdTMwQzkgLT4geDEuNVxyXG4gIGlmIChkYW1hZ2VPdXQuZGFtYWdlID4gMCAmJiBhdHRhY2tlci5leGNsdXNpdmVJdGVtRWZmZWN0QWN0aXZlKDB4NWIpKSB7XHJcbiAgICBkYW1hZ2VPdXQuZGFtYWdlID0gTWF0aC5jZWlsKGRhbWFnZU91dC5kYW1hZ2UgKiBNZWNoYW5pY3MuQUlSX0JMQURFX0RBTUFHRV9NVUxUSVBMSUVSKTtcclxuICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzQWlyQmxhZGVBY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRhbWFnZU91dC5kYW1hZ2UgPT0gMCkge1xyXG4gICAgZGFtYWdlT3V0LmNyaXRpY2FsSGl0ID0gZmFsc2U7XHJcbiAgfVxyXG4gIGRlZmVuZGVyLmZsYWdfYW5nZXJfcG9pbnQgPSBkYW1hZ2VPdXQuY3JpdGljYWxIaXQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTYyODBcdTMwNkVcdTU0N0RcdTRFMkRcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcclxuICogQHBhcmFtIHtEdW5nZW9uU3RhdGV9IGR1bmdlb25cclxuICogQHBhcmFtIHtNb25zdGVyfSBhdHRhY2tlclxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGRlZmVuZGVyXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtb3ZlSWRcclxuICogQHBhcmFtIHtCb29sZWFufSB1c2VTZWNvbmRBY2N1cmFjeVxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG5ldmVyTWlzc1NlbGZcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBNb3ZlSGl0Q2hlY2soZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlSWQsIHVzZVNlY29uZEFjY3VyYWN5LCBuZXZlck1pc3NTZWxmKSB7XHJcbiAgaWYgKG5ldmVyTWlzc1NlbGYgJiYgYXR0YWNrZXIgPT09IGRlZmVuZGVyKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8vIFx1OTAxQVx1NUUzOFx1NjUzQlx1NjQ4M1x1MzA2N1x1MzA0NFx1MzA2M1x1MzA3MVx1MzA2NFx1MzA3Mlx1MzA2M1x1MzA2MVx1MzA4NVx1MzA0Nlx1MzA0Q1x1NjcwOVx1NTJCOSAtPiBcdTVGQzVcdTRFMkRcclxuICBpZiAobW92ZUlkID09IDB4MTYzICYmIGF0dGFja2VyLmlxU2tpbGxFbmFibGVkKDB4NCwgZHVuZ2VvbikpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICAvLyBcdTMwNzJcdTMwNjNcdTMwNjFcdTMwODVcdTMwNDZcdTcyQjZcdTYxNEIgLT4gXHU1RkM1XHU0RTJEXHJcbiAgaWYgKGF0dGFja2VyLnN0YXR1c2VzLnN1cmVfc2hvdCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIC8vIFx1MzA0Qlx1MzA4OVx1MzA3Nlx1MzA4QVx1NzJCNlx1NjE0QiAtPiBcdTU5MTZcdTMwOENcdTMwOEJcclxuICBpZiAoYXR0YWNrZXIuc3RhdHVzZXMud2hpZmZlcikge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbGV0IG1vdmVBY2N1cmFjeSA9IE1lY2hhbmljcy5nZXRNb3ZlQWNjdXJhY3kobW92ZUlkLCB1c2VTZWNvbmRBY2N1cmFjeSk7XHJcbiAgaWYgKG1vdmVBY2N1cmFjeSA+IDEwMCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIC8vIFx1MzA3Rlx1MzA0RFx1MzA4QVx1MzBDRlx1MzBDMVx1MzBERVx1MzBBRCAtPiBcdTU0N0RcdTRFMkRcdTUwMjQtMzBcclxuICBpZiAoZGVmZW5kZXIuaXRlbUFjdGl2ZSgweDJhKSkge1xyXG4gICAgbW92ZUFjY3VyYWN5IC09IE1lY2hhbmljcy5ERVRFQ1RfQkFORF9NT1ZFX0FDQ1VSQUNZX0RST1A7XHJcbiAgfVxyXG4gIC8vIFx1MzA1OVx1MzA3MFx1MzA4NFx1MzA0Rlx1MzA0Qlx1MzA0NFx1MzA3MiAtPiBcdTU0N0RcdTRFMkRcdTUwMjQtMTBcclxuICBpZiAoZGVmZW5kZXIuaXFTa2lsbEVuYWJsZWQoMHg1LCBkdW5nZW9uKSkge1xyXG4gICAgbW92ZUFjY3VyYWN5IC09IE1lY2hhbmljcy5RVUlDS19ET0RHRVJfTU9WRV9BQ0NVUkFDWV9EUk9QO1xyXG4gIH1cclxuXHJcbiAgbGV0IGFjY3VyYWN5Qm9vc3QgPSAwO1xyXG4gIC8vIFx1NzI3OVx1NjAyN1x1MzA3NVx1MzA0Rlx1MzA0Q1x1MzA5MyAtPiBcdTU0N0RcdTRFMkQrMlxyXG4gIGlmIChhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4MzMpKSB7XHJcbiAgICBhY2N1cmFjeUJvb3N0ID0gMjtcclxuICB9XHJcbiAgLy8gXHUzMDRCXHUzMDdGXHUzMDZBXHUzMDhBXHJcbiAgaWYgKG1vdmVJZCA9PSAweDQwKSB7XHJcbiAgICBjb25zdCB3ZWF0aGVyID0gYXR0YWNrZXIucGVyY2VpdmVkV2VhdGhlcihkdW5nZW9uKTtcclxuICAgIC8vIFx1NTkyOVx1NTAxOVx1MzA0Mlx1MzA4MSAtPiBcdTVGQzVcdTRFMkRcclxuICAgIGlmICh3ZWF0aGVyID09IGVvcy5XRUFUSEVSX1JBSU4pIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICAvLyBcdTU5MjlcdTUwMTlcdTMwNzJcdTMwNTZcdTMwNTdcdTMwNENcdTMwNjRcdTMwODhcdTMwNDQgLT4gXHU1NDdEXHU0RTJELTJcclxuICAgIGlmICh3ZWF0aGVyID09IGVvcy5XRUFUSEVSX1NVTk5ZKSB7XHJcbiAgICAgIGFjY3VyYWN5Qm9vc3QgLT0gMjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFx1NTkyOVx1NTAxOVx1MzA0Q1x1MzA0Mlx1MzA4OVx1MzA4Q1x1MzA2RVx1NzJCNlx1NjE0Qlx1MzA2N1x1MzA3NVx1MzA3Nlx1MzA0RCAtPiBcdTVGQzVcdTRFMkRcclxuICBpZiAobW92ZUlkID09IDB4MTBlICYmIGF0dGFja2VyLnBlcmNlaXZlZFdlYXRoZXIoZHVuZ2VvbikgPT0gZW9zLldFQVRIRVJfSEFJTCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIC8vIFx1MzA1N1x1MzA4NVx1MzA0Nlx1MzA2MVx1MzA4NVx1MzA0NlxyXG4gIGlmIChhdHRhY2tlci5pcVNraWxsRW5hYmxlZCgweDMwLCBkdW5nZW9uKSkge1xyXG4gICAgYWNjdXJhY3lCb29zdCArPSAxO1xyXG4gIH1cclxuXHJcbiAgLy8gXHUzMDdGXHUzMDg0XHUzMDc2XHUzMDhCXHU3MkI2XHU2MTRCIC0+IFx1NTZERVx1OTA3Rlx1NzM4N1x1MzA5Mlx1NzEyMVx1ODk5NlxyXG4gIGxldCBldmFzaW9uU3RhZ2UgPSBkZWZlbmRlci5zdGFnZV9ldmFzaW9uO1xyXG4gIGlmIChkZWZlbmRlci5zdGF0dXNlcy5leHBvc2VkKSB7XHJcbiAgICBldmFzaW9uU3RhZ2UgPSAxMDtcclxuICB9XHJcblxyXG4gIGxldCBldmFzaW9uQm9vc3QgPSAwO1xyXG4gIC8vIFx1MzA1OVx1MzA2QVx1MzA0Q1x1MzA0Rlx1MzA4Q1x1NzY3QVx1NTJENSAtPiBcdTU2REVcdTkwN0YrMlxyXG4gIGlmIChcclxuICAgIGRlZmVuZGVyLnBlcmNlaXZlZFdlYXRoZXIoZHVuZ2VvbikgPT0gZW9zLldFQVRIRVJfU0FORFNUT1JNICYmXHJcbiAgICBkZWZlbmRlci5hYmlsaXR5QWN0aXZlRGV0YWlscygweDFkLCBhdHRhY2tlciwgdHJ1ZSlcclxuICApIHtcclxuICAgIGV2YXNpb25Cb29zdCA9IDI7XHJcbiAgfVxyXG4gIC8vIFx1NjUzQlx1NjQ4M1x1NTA3NFx1MzA2RVx1MzA2Rlx1MzA4QVx1MzA0RFx1MzA4QVx1MzA0Q1x1NzY3QVx1NTJENSAoXHU3MjY5XHU3NDA2XHU2MjgwKSAtPiBcdTU2REVcdTkwN0YrMlxyXG4gIGlmIChhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4MzApICYmICFNZWNoYW5pY3MuTW92ZU5vdFBoeXNpYWwobW92ZUlkKSkge1xyXG4gICAgZXZhc2lvbkJvb3N0ICs9IDI7XHJcbiAgfVxyXG4gIC8vIFx1MzA2OVx1MzA1Rlx1MzA5M1x1MzA3MFx1MzA0Q1x1NjcwOVx1NTJCOSwgSFBcdTMwNEMxLzRcdTRFRTVcdTRFMEIgLT4gXHU1NkRFXHU5MDdGKzJcclxuICBpZiAoZGVmZW5kZXIuaXFTa2lsbEVuYWJsZWQoMHgzZiwgZHVuZ2VvbikpIHtcclxuICAgIGxldCBtYXhIcCA9IGRlZmVuZGVyLmhwX21heDtcclxuICAgIGlmIChtYXhIcCA+IE1lY2hhbmljcy5NQVhfSFBfQ0FQKSB7XHJcbiAgICAgIG1heEhwID0gTWVjaGFuaWNzLk1BWF9IUF9DQVA7XHJcbiAgICB9XHJcbiAgICBpZiAoZGVmZW5kZXIuaHAgPD0gTWF0aC50cnVuYyhtYXhIcCAvIDQpKSB7XHJcbiAgICAgIGV2YXNpb25Cb29zdCArPSAyO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBcdTMwNTdcdTMwODVcdTMwNDZcdTMwNjFcdTMwODVcdTMwNDZcdTMwNENcdTY3MDlcdTUyQjkgLT4gXHU1NkRFXHU5MDdGLTFcclxuICBpZiAoZGVmZW5kZXIuaXFTa2lsbEVuYWJsZWQoMHgzMCwgZHVuZ2VvbikpIHtcclxuICAgIGV2YXNpb25Cb29zdCAtPSAxO1xyXG4gIH1cclxuICAvLyBcdTMwNjFcdTMwNjlcdTMwOEFcdTMwNDJcdTMwNTdcdTc2N0FcdTUyRDUgKFx1MzA1M1x1MzA5M1x1MzA4OVx1MzA5M29yXHUzMDdFXHUzMDY5XHUzMDhGXHUzMDU3KSAtPiBcdTU2REVcdTkwN0YrM1xyXG4gIGlmIChcclxuICAgIGRlZmVuZGVyLmFiaWxpdHlBY3RpdmVEZXRhaWxzKDB4NjIsIGF0dGFja2VyLCB0cnVlKSAmJlxyXG4gICAgKGRlZmVuZGVyLnN0YXR1c2VzLmNvbmZ1c2lvbiB8fCBkZWZlbmRlci5zdGF0dXNlcy5jcm9zc19leWVkKVxyXG4gICkge1xyXG4gICAgZXZhc2lvbkJvb3N0ICs9IDM7XHJcbiAgfVxyXG4gIC8vIFx1MzA4Nlx1MzA0RFx1MzA0Q1x1MzA0Rlx1MzA4Q1x1NzY3QVx1NTJENSAtPiBcdTU2REVcdTkwN0YrMlxyXG4gIGlmIChcclxuICAgIGRlZmVuZGVyLmFiaWxpdHlBY3RpdmVEZXRhaWxzKDB4NzcsIGF0dGFja2VyLCB0cnVlKSAmJlxyXG4gICAgKGRlZmVuZGVyLnBlcmNlaXZlZFdlYXRoZXIoZHVuZ2VvbikgPT0gZW9zLldFQVRIRVJfSEFJTCB8fCBkZWZlbmRlci5wZXJjZWl2ZWRXZWF0aGVyKGR1bmdlb24pID09IGVvcy5XRUFUSEVSX1NOT1cpXHJcbiAgKSB7XHJcbiAgICBldmFzaW9uQm9vc3QgKz0gMjtcclxuICB9XHJcbiAgLy8gXHU1OTI5XHU1MDE5XHUzMDY3XHU1NkRFXHU5MDdGXHU3Mzg3XHUzMDRDXHU0RTBBXHUzMDRDXHUzMDhCXHU1QzAyXHU3NTI4XHU5MDUzXHU1MTc3XHU1MkI5XHU2NzlDXHU3NjdBXHU1MkQ1IC0+IFx1NTZERVx1OTA3RisxXHJcbiAgY29uc3Qgd2VhdGhlciA9IGRlZmVuZGVyLnBlcmNlaXZlZFdlYXRoZXIoZHVuZ2Vvbik7XHJcbiAgaWYgKFxyXG4gICAgTWVjaGFuaWNzLkVYQ0xfSVRFTV9FRkZFQ1RTX0VWQVNJT05fQk9PU1Rbd2VhdGhlcl0gIT0gMCAmJlxyXG4gICAgZGVmZW5kZXIuZXhjbHVzaXZlSXRlbUVmZmVjdEFjdGl2ZShNZWNoYW5pY3MuRVhDTF9JVEVNX0VGRkVDVFNfRVZBU0lPTl9CT09TVFt3ZWF0aGVyXSlcclxuICApIHtcclxuICAgIGV2YXNpb25Cb29zdCArPSAxO1xyXG4gIH1cclxuICBldmFzaW9uU3RhZ2UgKz0gZXZhc2lvbkJvb3N0O1xyXG5cclxuICBsZXQgYWNjdXJhY3lTdGFnZSA9IGF0dGFja2VyLnN0YWdlX2FjY3VyYWN5ICsgYWNjdXJhY3lCb29zdDtcclxuICAvLyBcdTY1M0JcdTY0ODNcdTUwNzQsIFx1OTYzMlx1NUZBMVx1NTA3NFx1MzA2OVx1MzA2MVx1MzA4OVx1MzA0Qlx1MzA0Q1x1MzBDRVx1MzBGQ1x1MzBBQ1x1MzBGQ1x1MzBDOSAtPiBcdTU2REVcdTkwN0ZcdTMwRTlcdTMwRjNcdTMwQUYsIFx1NTQ3RFx1NEUyRFx1MzBFOVx1MzBGM1x1MzBBRlx1MzA5Mlx1NzEyMVx1ODk5NlxyXG4gIGlmIChhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4NmEpIHx8IGRlZmVuZGVyLmFiaWxpdHlBY3RpdmVEZXRhaWxzKDB4NmEsIGF0dGFja2VyLCB0cnVlKSkge1xyXG4gICAgZXZhc2lvblN0YWdlID0gMTA7XHJcbiAgICBhY2N1cmFjeVN0YWdlID0gMTA7XHJcbiAgfVxyXG4gIGlmIChhY2N1cmFjeVN0YWdlIDwgMCkgYWNjdXJhY3lTdGFnZSA9IDA7XHJcbiAgaWYgKGFjY3VyYWN5U3RhZ2UgPiAyMCkgYWNjdXJhY3lTdGFnZSA9IDIwO1xyXG5cclxuICBjb25zdCBBQ0NVUkFDWV9NVUxUSVBMSUVSUyA9XHJcbiAgICBhdHRhY2tlci5nZW5kZXIgPT0gZW9zLkdFTkRFUl9GRU1BTEVcclxuICAgICAgPyBNZWNoYW5pY3MuRkVNQUxFX0FDQ1VSQUNZX1NUQUdFX01VTFRJUExJRVJTXHJcbiAgICAgIDogTWVjaGFuaWNzLk1BTEVfQUNDVVJBQ1lfU1RBR0VfTVVMVElQTElFUlM7XHJcbiAgbGV0IGFjY3VyYWN5ID0gQUNDVVJBQ1lfTVVMVElQTElFUlNbYWNjdXJhY3lTdGFnZV07XHJcbiAgaWYgKGV2YXNpb25TdGFnZSA8IDApIGV2YXNpb25TdGFnZSA9IDA7XHJcbiAgaWYgKGV2YXNpb25TdGFnZSA+IDIwKSBldmFzaW9uU3RhZ2UgPSAyMDtcclxuICBpZiAoYWNjdXJhY3kgPCAwKSBhY2N1cmFjeSA9IDA7XHJcbiAgaWYgKGFjY3VyYWN5ID4gMTAwKSBhY2N1cmFjeSA9IDEwMDtcclxuXHJcbiAgY29uc3QgRVZBU0lPTl9NVUxUSVBMSUVSUyA9XHJcbiAgICBkZWZlbmRlci5nZW5kZXIgPT0gZW9zLkdFTkRFUl9GRU1BTEVcclxuICAgICAgPyBNZWNoYW5pY3MuRkVNQUxFX0VWQVNJT05fU1RBR0VfTVVMVElQTElFUlNcclxuICAgICAgOiBNZWNoYW5pY3MuTUFMRV9FVkFTSU9OX1NUQUdFX01VTFRJUExJRVJTO1xyXG4gIGxldCBldmFzaW9uID0gRVZBU0lPTl9NVUxUSVBMSUVSU1tldmFzaW9uU3RhZ2VdO1xyXG4gIGlmIChldmFzaW9uIDwgMCkgZXZhc2lvbiA9IDA7XHJcbiAgaWYgKGV2YXNpb24gPiAxMDApIGV2YXNpb24gPSAxMDA7XHJcblxyXG4gIHJldHVybiBkdW5nZW9uLnJuZy5yb2xsSGl0Q2hhbmNlKE1hdGgudHJ1bmMobW92ZUFjY3VyYWN5ICogYWNjdXJhY3kgKiBldmFzaW9uKSwgdXNlU2Vjb25kQWNjdXJhY3kpO1xyXG59XHJcblxyXG4vKipcclxuICogXHU3Mjc5XHU2MDI3XHUzMDg0XHU1QzAyXHU3NTI4XHU5MDUzXHU1MTc3XHUzMDZFXHU1MkI5XHU2NzlDXHUzMDY3XHU2MjgwXHUzMDkyXHU3MTIxXHU1MkI5XHU1MzE2XHUzMDU5XHUzMDhCXHU1MUU2XHU3NDA2XHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gYXR0YWNrZXJcclxuICogQHBhcmFtIHtNb25zdGVyfSBkZWZlbmRlclxyXG4gKiBAcGFyYW0ge0RhbWFnZURhdGF9IGRhbWFnZURhdGFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBBcHBseUFiaWxpdHlBbmRFZmZlY3RJbW11bml0aWVzKGF0dGFja2VyLCBkZWZlbmRlciwgZGFtYWdlRGF0YSkge1xyXG4gIGlmICghZGVmZW5kZXIuaXNNb25zdGVyKCkgfHwgIWF0dGFja2VyLmlzTW9uc3RlcigpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8vIFx1MzA0Q1x1MzA5M1x1MzA1OFx1MzA4N1x1MzA0Nlx1MzA2RVx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1MzA0Q1x1NEUwMFx1NjQ4M1x1NjI4MFx1MzA5Mlx1NTNEN1x1MzA1MVx1MzA4QlxyXG4gIGlmIChkZWZlbmRlci5hYmlsaXR5QWN0aXZlRGV0YWlscygweGQsIGF0dGFja2VyLCB0cnVlKSAmJiBkYW1hZ2VEYXRhLmRhbWFnZSA9PSA5OTk5KSB7XHJcbiAgICBkYW1hZ2VEYXRhLm5vRGFtYWdlID0gdHJ1ZTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLy8gXHUzMDYxXHUzMDRGXHUzMDY3XHUzMDkzXHUzMDZFXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMDRDXHU5NkZCXHU2QzE3XHU2MjgwXHUzMDkyXHU1M0Q3XHUzMDUxXHUzMDhCXHJcbiAgaWYgKGRlZmVuZGVyLmFiaWxpdHlBY3RpdmVEZXRhaWxzKDB4MjMsIGF0dGFja2VyLCB0cnVlKSAmJiBkYW1hZ2VEYXRhLnR5cGUgPT0gZW9zLlRZUEVfRUxFQ1RSSUMpIHtcclxuICAgIGRhbWFnZURhdGEubm9EYW1hZ2UgPSB0cnVlO1xyXG4gICAgZGFtYWdlRGF0YS5oZWFsZWQgPSB0cnVlO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvLyBcdTMwNjFcdTMwODdcdTMwNTlcdTMwNDQsIFx1MzA0Qlx1MzA5M1x1MzA1RFx1MzA0Nlx1MzA2Rlx1MzA2MFx1MzA2RVx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1MzA0Q1x1NkMzNFx1NjI4MFx1MzA5Mlx1NTNEN1x1MzA1MVx1MzA4QlxyXG4gIGlmIChcclxuICAgIChkZWZlbmRlci5hYmlsaXR5QWN0aXZlRGV0YWlscygweDI0LCBhdHRhY2tlciwgdHJ1ZSkgfHwgZGVmZW5kZXIuYWJpbGl0eUFjdGl2ZURldGFpbHMoMHg1NSwgYXR0YWNrZXIsIHRydWUpKSAmJlxyXG4gICAgZGFtYWdlRGF0YS50eXBlID09IGVvcy5UWVBFX1dBVEVSXHJcbiAgKSB7XHJcbiAgICBkYW1hZ2VEYXRhLm5vRGFtYWdlID0gdHJ1ZTtcclxuICAgIGRhbWFnZURhdGEuaGVhbGVkID0gdHJ1ZTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLy8gXHUzMDY3XHUzMDkzXHUzMDREXHUzMEE4XHUzMEYzXHUzMEI4XHUzMEYzXHUzMDZFXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMDRDXHU5NkZCXHU2QzE3XHU2MjgwXHUzMDkyXHU1M0Q3XHUzMDUxXHUzMDhCXHJcbiAgaWYgKGRlZmVuZGVyLmFiaWxpdHlBY3RpdmUoMHg2NiwgYXR0YWNrZXIsIHRydWUpICYmIGRhbWFnZURhdGEudHlwZSA9PSBlb3MuVFlQRV9FTEVDVFJJQykge1xyXG4gICAgZGFtYWdlRGF0YS5ub0RhbWFnZSA9IHRydWU7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBcdTVDMDJcdTc1MjhcdTkwNTNcdTUxNzdcdTMwNkVcdTUyQjlcdTY3OUNcdTMwNjdcdTU0MDRcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNjdcdTUzRDdcdTMwNTFcdTMwNUZcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdTMwOTJcdTcxMjFcdTUyQjlcdTUzMTZcdTMwMDFcdTMwN0VcdTMwNUZcdTMwNkZcdTU0MzhcdTUzQ0VcdTMwNTlcdTMwOEJcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IE1lY2hhbmljcy5UWVBFX0RBTUFHRV9ORUdBVElOR19FWENMVVNJVkVfSVRFTV9FRkZFQ1RTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBlbnRyeSA9IE1lY2hhbmljcy5UWVBFX0RBTUFHRV9ORUdBVElOR19FWENMVVNJVkVfSVRFTV9FRkZFQ1RTW2ldO1xyXG4gICAgaWYgKGVudHJ5LnR5cGUgPT0gZGFtYWdlRGF0YS50eXBlICYmIGRlZmVuZGVyLmV4Y2x1c2l2ZUl0ZW1FZmZlY3RBY3RpdmUoZW50cnkuZWZmZWN0KSkge1xyXG4gICAgICBpZiAoZW50cnkuZWZmZWN0IDwgMHg3Mikge1xyXG4gICAgICAgIC8vIFx1NzEyMVx1NTJCOVxyXG4gICAgICAgIGRhbWFnZURhdGEubm9EYW1hZ2UgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBcdTU0MzhcdTUzQ0VcclxuICAgICAgICBkYW1hZ2VEYXRhLmhlYWxlZCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHUzMEI3XHUzMEZDXHUzMEIxXHUzMEYzXHUzMEI5XHUzMDZFXHU1QjlGXHU4ODRDIChtb2NrKVxyXG4gKiBAcGFyYW0ge0R1bmdlb25TdGF0ZX0gZHVuZ2VvblxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGF0dGFja2VyXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gZGVmZW5kZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IG1vdmVJZFxyXG4gKiBAcGFyYW0ge0RhbWFnZURhdGF9IGRhbWFnZURhdGFcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBydW5Nb2NrRGFtYWdlU2VxdWVuY2UoZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlSWQsIGRhbWFnZURhdGEpIHtcclxuICBpZiAoTW92ZUhpdENoZWNrKGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZUlkLCB0cnVlLCB0cnVlKSkge1xyXG4gICAgLy8gXHU1NDdEXHU0RTJEXHUzMDU3XHUzMDVGXHJcbiAgICBBcHBseUFiaWxpdHlBbmRFZmZlY3RJbW11bml0aWVzKGF0dGFja2VyLCBkZWZlbmRlciwgZGFtYWdlRGF0YSk7XHJcbiAgICBhdHRhY2tlci5mbGFnX3ByYWN0aWNlX3N3aW5nZXIgPSBmYWxzZTtcclxuICAgIGF0dGFja2VyLmZsYWdfYW5nZXJfcG9pbnQgPSBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gXHU1NDdEXHU0RTJEXHUzMDU3XHUzMDZBXHUzMDQ0XHJcbiAgICBkYW1hZ2VEYXRhLm5vRGFtYWdlID0gdHJ1ZTtcclxuICAgIGlmIChtb3ZlSWQgIT0gMHgxNjMpIHtcclxuICAgICAgYXR0YWNrZXIuZmxhZ19wcmFjdGljZV9zd2luZ2VyID0gdHJ1ZTsgLy8gXHU5MDFBXHU1RTM4XHU2NTNCXHU2NDgzXHU0RUU1XHU1OTE2XHUzMDZFXHU1ODM0XHU1NDA4XHUzMDRCXHUzMDVGXHUzMDZBXHUzMDg5XHUzMDU3XHUzMDkyXHU2NzA5XHU1MkI5XHU1MzE2XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChkYW1hZ2VEYXRhLm5vRGFtYWdlKSByZXR1cm4gMDtcclxuICByZXR1cm4gZGFtYWdlRGF0YS5kYW1hZ2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTcyNzlcdTYwMjdcdTMwODRcdTcyQjZcdTYxNEJcdTMwOTJcdTgwMDNcdTYxNkVcdTMwNTdcdTMwNjZcdTYyODBcdTMwNENcdTZCNjNcdTMwNTdcdTMwNEZcdTU0N0RcdTRFMkRcdTMwNTlcdTMwOEJcdTMwNEJcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcdTMwNTlcdTMwOEJcclxuICogQHBhcmFtIHtEdW5nZW9uU3RhdGV9IGR1bmdlb25cclxuICogQHBhcmFtIHtNb25zdGVyfSBhdHRhY2tlclxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGRlZmVuZGVyXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtb3ZlSWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlTW92ZUVmZmVjdFByZWNoZWNrcyhkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmVJZCkge1xyXG4gIGxldCByZWZsZWN0ZWRCeU1hZ2ljQ29hdEV0YyA9IGZhbHNlO1xyXG4gIC8vIFx1MzA3Mlx1MzA4OVx1MzA0NFx1MzA1N1x1MzA5M1x1MzBENVx1MzBFOVx1MzBCMFxyXG4gIGNvbnN0IGxpZ2h0bmluZ3JvZCA9XHJcbiAgICAoZGVmZW5kZXIuYWJpbGl0eUFjdGl2ZSgweDMyKSB8fCBkdW5nZW9uLm90aGVyTW9uc3RlcnMuYWJpbGl0aWVzLmluY2x1ZGVzKDB4MzIpKSAmJlxyXG4gICAgYXR0YWNrZXIuZ2V0TW92ZVR5cGUobW92ZUlkLCBkdW5nZW9uKSA9PSBlb3MuVFlQRV9FTEVDVFJJQztcclxuICAvLyBcdTMwODhcdTMwNzNcdTMwN0ZcdTMwNUFcdTMwRDVcdTMwRTlcdTMwQjBcclxuICBjb25zdCBzdG9ybURyYWluID1cclxuICAgIChkZWZlbmRlci5hYmlsaXR5QWN0aXZlKDB4N2EpIHx8IGR1bmdlb24ub3RoZXJNb25zdGVycy5hYmlsaXRpZXMuaW5jbHVkZXMoMHg3YSkpICYmXHJcbiAgICBhdHRhY2tlci5nZXRNb3ZlVHlwZShtb3ZlSWQsIGR1bmdlb24pID09IGVvcy5UWVBFX1dBVEVSO1xyXG5cclxuICBsZXQgaGl0ID0gdHJ1ZTtcclxuICAvLyBcdTY0RUNcdTRGM0NcdTcxMjFcdTY1NzVcdTcyQjZcdTYxNEJcdTMwNkJcdTMwNkFcdTMwOEJcdTZFOUNcdTMwODFcdTYyODBcdTMwOTJcdTMwQURcdTMwRTNcdTMwRjNcdTMwQkJcdTMwRUJcdTMwNTdcdTMwNUZcdTU4MzRcdTU0MDhcdTMwMDFcdTYyODBcdTMwNkZcdTU5MzFcdTY1NTdcdTMwNTlcdTMwOEJcclxuICBpZiAoZGVmZW5kZXIudHdvVHVybk1vdmVGb3JjZWRNaXNzKG1vdmVJZCkpIHtcclxuICAgIGhpdCA9IGZhbHNlO1xyXG4gICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLnR3b1R1cm5Nb3ZlRm9yY2VkTWlzcyA9IHRydWU7XHJcbiAgfVxyXG4gIC8vIFx1MzA3Q1x1MzA0Nlx1MzA0QVx1MzA5M1x1MzA2RVx1NzZGOFx1NjI0Qlx1MzA2Qlx1OTdGM1x1NjI4MFx1MzA5Mlx1NTQ3RFx1NEUyRFx1MzA1NVx1MzA1Qlx1MzA1Rlx1NTgzNFx1NTQwOFx1MzAwMVx1NjI4MFx1MzA2Rlx1NTkzMVx1NjU1N1x1MzA1OVx1MzA4QlxyXG4gIGlmIChoaXQgJiYgZGVmZW5kZXIuYWJpbGl0eUFjdGl2ZURldGFpbHMoMHgzYywgYXR0YWNrZXIsIHRydWUpICYmIE1lY2hhbmljcy5pc1NvdW5kTW92ZShtb3ZlSWQpKSB7XHJcbiAgICBoaXQgPSBmYWxzZTtcclxuICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5zb3VuZHByb29mQWN0aXZhdGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgLy8gXHU5NjMyXHU1RkExXHU1MDc0XHUzMDZFXHUzMDg4XHUzMDYxXHUzMDgwXHUzMDRDXHU3NjdBXHU1MkQ1XHUzMDU3XHUzMDVGXHU1ODM0XHU1NDA4XHUzMDAxXHU2MjgwXHUzMDZGXHU1OTMxXHU2NTU3XHUzMDU5XHUzMDhCXHJcbiAgaWYgKGhpdCAmJiBkZWZlbmRlci5hYmlsaXR5QWN0aXZlRGV0YWlscygweDc5LCBhdHRhY2tlciwgdHJ1ZSkgJiYgZHVuZ2Vvbi5ybmcucm9sbEZvcmV3YXJuKCkpIHtcclxuICAgIGhpdCA9IGZhbHNlO1xyXG4gIH1cclxuICAvLyBcdTYyODBcdTU0N0RcdTRFMkRcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcclxuICBsZXQgbmV2ZXJNaXNzU2VsZiA9IG1vdmVJZCAhPSAweDY4ICYmIG1vdmVJZCAhPSAweDEzMSAmJiBtb3ZlSWQgIT0gMHgxMmQgJiYgIXJlZmxlY3RlZEJ5TWFnaWNDb2F0RXRjO1xyXG4gIGlmIChoaXQgJiYgIU1vdmVIaXRDaGVjayhkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmVJZCwgZmFsc2UsIG5ldmVyTWlzc1NlbGYpKSB7XHJcbiAgICBoaXQgPSBmYWxzZTtcclxuICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5maXJzdEhpdENoZWNrRmFpbGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKGhpdCkge1xyXG4gICAgLy8gXHUzMDcyXHUzMDg5XHUzMDQ0XHUzMDU3XHUzMDkzXHUzMDRDXHU3NjdBXHU1MkQ1XHUzMDU3XHUzMDVGXHU1ODM0XHU1NDA4XHUzMDAxXHU2MjgwXHUzMDZGXHU1OTMxXHU2NTU3XHUzMDU5XHUzMDhCXHJcbiAgICBpZiAobGlnaHRuaW5ncm9kKSB7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5saWdodG5pbmdyb2RBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgICBoaXQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIFx1MzA4OFx1MzA3M1x1MzA3Rlx1MzA1QVx1MzA0Q1x1NzY3QVx1NTJENVx1MzA1N1x1MzA1Rlx1NTgzNFx1NTQwOFx1MzAwMVx1NjI4MFx1MzA2Rlx1NTkzMVx1NjU1N1x1MzA1OVx1MzA4QlxyXG4gICAgaWYgKHN0b3JtRHJhaW4pIHtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLnN0b3JtRHJhaW5BY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgICBoaXQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFx1OTAxQVx1NUUzOFx1NjUzQlx1NjQ4M1x1NEVFNVx1NTkxNlx1MzA2RVx1NjI4MFx1MzA5Mlx1NTkzMVx1NjU1NyAtPiBcdTMwNEJcdTMwNUZcdTMwNkFcdTMwODlcdTMwNTdcdTMwOTJcdTY3MDlcdTUyQjlcdTUzMTZcclxuICBpZiAoIWhpdCAmJiBtb3ZlSWQgIT0gMHgxNjMpIHtcclxuICAgIGF0dGFja2VyLmZsYWdfcHJhY3RpY2Vfc3dpbmdlciA9IHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBoaXQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTY1M0JcdTY0ODNcdTUwNzRcdTMwNENcdTRGN0ZcdTc1MjhcdTMwNTdcdTMwNUZcdTYyODBcdTMwODRcdTkwNTNcdTUxNzdcdTMwNkVcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdTMwOTJcdThBMDhcdTdCOTdcclxuICogQHBhcmFtIHtEYW1hZ2VEYXRhfSBkYW1hZ2VEYXRhXHJcbiAqIEBwYXJhbSB7RHVuZ2VvblN0YXRlfSBkdW5nZW9uXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gYXR0YWNrZXJcclxuICogQHBhcmFtIHtNb25zdGVyfSBkZWZlbmRlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gYXR0YWNrVHlwZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYXR0YWNrUG93ZXJcclxuICogQHBhcmFtIHsqfSBkYW1hZ2VNdWx0XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtb3ZlSWRcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW11bGF0ZURhbWFnZUNhbGNTaGFyZWQoXHJcbiAgZGFtYWdlRGF0YSxcclxuICBkdW5nZW9uLFxyXG4gIGF0dGFja2VyLFxyXG4gIGRlZmVuZGVyLFxyXG4gIGF0dGFja1R5cGUsXHJcbiAgYXR0YWNrUG93ZXIsXHJcbiAgZGFtYWdlTXVsdCxcclxuICBtb3ZlSWQsXHJcbikge1xyXG4gIGNvbnN0IGNyaXRDaGFuY2UgPSBNZWNoYW5pY3MuZ2V0TW92ZUNyaXRDaGFuY2UobW92ZUlkKTtcclxuICBDYWxjRGFtYWdlKGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgYXR0YWNrVHlwZSwgYXR0YWNrUG93ZXIsIGNyaXRDaGFuY2UsIGRhbWFnZURhdGEsIGRhbWFnZU11bHQsIG1vdmVJZCwgdHJ1ZSk7XHJcbiAgcmV0dXJuIHJ1bk1vY2tEYW1hZ2VTZXF1ZW5jZShkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmVJZCwgZGFtYWdlRGF0YSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTYyODBcdTMwNkVcdTU0N0RcdTRFMkRcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcdTMwOTJcdTU0MkJcdTMwODFcdTMwNUZcdThBMDhcdTdCOTdcdTMwOTJcdTg4NENcdTMwNDZcclxuICogQHBhcmFtIHtEYW1hZ2VEYXRhfSBkYW1hZ2VEYXRhXHJcbiAqIEBwYXJhbSB7RHVuZ2VvblN0YXRlfSBkdW5nZW9uXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gYXR0YWNrZXJcclxuICogQHBhcmFtIHtNb25zdGVyfSBkZWZlbmRlclxyXG4gKiBAcGFyYW0ge01vdmV9IG1vdmVcclxuICogQHBhcmFtIHsqfSBkYW1hZ2VNdWx0XHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2ltdWxhdGVEYW1hZ2VDYWxjV2l0aE11bHQoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlLCBkYW1hZ2VNdWx0KSB7XHJcbiAgaWYgKCFleGVjdXRlTW92ZUVmZmVjdFByZWNoZWNrcyhkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUuaWQpKSB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbiAgY29uc3QgYXR0YWNrVHlwZSA9IGF0dGFja2VyLmdldE1vdmVUeXBlKG1vdmUuaWQsIGR1bmdlb24pO1xyXG4gIGNvbnN0IGF0dGFja1Bvd2VyID0gYXR0YWNrZXIuZ2V0TW92ZVBvd2VyKG1vdmUpO1xyXG4gIHJldHVybiBzaW11bGF0ZURhbWFnZUNhbGNTaGFyZWQoXHJcbiAgICBkYW1hZ2VEYXRhLFxyXG4gICAgZHVuZ2VvbixcclxuICAgIGF0dGFja2VyLFxyXG4gICAgZGVmZW5kZXIsXHJcbiAgICBhdHRhY2tUeXBlLFxyXG4gICAgYXR0YWNrUG93ZXIsXHJcbiAgICBkYW1hZ2VNdWx0LFxyXG4gICAgbW92ZS5pZCxcclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtEYW1hZ2VEYXRhfSBkYW1hZ2VEYXRhXHJcbiAqIEBwYXJhbSB7RHVuZ2VvblN0YXRlfSBkdW5nZW9uXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gYXR0YWNrZXJcclxuICogQHBhcmFtIHtNb25zdGVyfSBkZWZlbmRlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gYXR0YWNrVHlwZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYXR0YWNrUG93ZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IG1vdmVJZFxyXG4gKiBAcGFyYW0geyp9IGNyaXRDaGFuY2VcclxuICogQHBhcmFtIHsqfSBkYW1hZ2VNdWx0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2ltdWxhdGVEYW1hZ2VDYWxjR2VuZXJpYyhcclxuICBkYW1hZ2VEYXRhLFxyXG4gIGR1bmdlb24sXHJcbiAgYXR0YWNrZXIsXHJcbiAgZGVmZW5kZXIsXHJcbiAgYXR0YWNrVHlwZSxcclxuICBhdHRhY2tQb3dlcixcclxuICBtb3ZlSWQsXHJcbiAgY3JpdENoYW5jZSxcclxuICBkYW1hZ2VNdWx0LFxyXG4pIHtcclxuICBpZiAoIWV4ZWN1dGVNb3ZlRWZmZWN0UHJlY2hlY2tzKGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZUlkKSkge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG4gIENhbGNEYW1hZ2UoZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBhdHRhY2tUeXBlLCBhdHRhY2tQb3dlciwgY3JpdENoYW5jZSwgZGFtYWdlRGF0YSwgZGFtYWdlTXVsdCwgbW92ZUlkLCB0cnVlKTtcclxuICByZXR1cm4gcnVuTW9ja0RhbWFnZVNlcXVlbmNlKGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZUlkLCBkYW1hZ2VEYXRhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBBNlx1MzBBN1x1MzBCNlx1MzBGQ1x1MzBEQ1x1MzBGQ1x1MzBFQlx1MzA5Mlx1NEY3Rlx1NzUyOFx1MzA1OVx1MzA4QlxyXG4gKiBAcGFyYW0ge0RhbWFnZURhdGF9IGRhbWFnZURhdGFcclxuICogQHBhcmFtIHtEdW5nZW9uU3RhdGV9IGR1bmdlb25cclxuICogQHBhcmFtIHtNb25zdGVyfSBhdHRhY2tlclxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGRlZmVuZGVyXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBnaW5zZW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2ltdWxhdGVEYW1hZ2VDYWxjV2VhdGhlckJhbGwoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBnaW5zZW5nID0gMCkge1xyXG4gIGlmICghZXhlY3V0ZU1vdmVFZmZlY3RQcmVjaGVja3MoZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCAweDFmKSkge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG4gIGNvbnN0IHdlYXRoZXIgPSBhdHRhY2tlci5wZXJjZWl2ZWRXZWF0aGVyKGR1bmdlb24pO1xyXG4gIGNvbnN0IGF0dGFja1R5cGUgPSBNZWNoYW5pY3MuV0VBVEhFUl9CQUxMX1RZUEVfVEFCTEVbd2VhdGhlcl07XHJcbiAgY29uc3QgbW92ZSA9IG5ldyBNb3ZlKCk7XHJcbiAgbW92ZS5pZCA9IDB4MWY7XHJcbiAgbW92ZS5naW5zZW5nID0gZ2luc2VuZztcclxuICBjb25zdCBkYW1hZ2VNdWx0ID0gTWVjaGFuaWNzLldFQVRIRVJfQkFMTF9EQU1BR0VfTVVMVF9UQUJMRVt3ZWF0aGVyXTtcclxuICBjb25zdCBhdHRhY2tQb3dlciA9IGF0dGFja2VyLmdldE1vdmVQb3dlcihtb3ZlKTtcclxuICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5kYW1hZ2VNdWx0ID0gZGFtYWdlTXVsdDtcclxuICByZXR1cm4gc2ltdWxhdGVEYW1hZ2VDYWxjU2hhcmVkKGRhbWFnZURhdGEsIGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgYXR0YWNrVHlwZSwgYXR0YWNrUG93ZXIsIGRhbWFnZU11bHQsIDB4MWYpO1xyXG59XHJcblxyXG4vKipcclxuICogXHUzMDU3XHUzMDVDXHUzMDkzXHUzMDZFXHUzMDgxXHUzMDUwXHUzMDdGXHUzMDkyXHU0RjdGXHU3NTI4XHUzMDU5XHUzMDhCXHJcbiAqIEBwYXJhbSB7RGFtYWdlRGF0YX0gZGFtYWdlRGF0YVxyXG4gKiBAcGFyYW0ge0R1bmdlb25TdGF0ZX0gZHVuZ2VvblxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGF0dGFja2VyXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gZGVmZW5kZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IGdpbnNlbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW11bGF0ZURhbWFnZUNhbGNOYXR1cmFsR2lmdChkYW1hZ2VEYXRhLCBkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIGdpbnNlbmcgPSAwKSB7XHJcbiAgaWYgKCFleGVjdXRlTW92ZUVmZmVjdFByZWNoZWNrcyhkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIDB4MWQ3KSkge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG4gIGNvbnN0IG1vdmUgPSBuZXcgTW92ZSgpO1xyXG4gIG1vdmUuaWQgPSAweDFkNztcclxuICBtb3ZlLmdpbnNlbmcgPSBnaW5zZW5nO1xyXG4gIGlmIChhdHRhY2tlci5oZWxkSXRlbSAhPSAwKSB7XHJcbiAgICBjb25zdCBuZ0luZm8gPSBhdHRhY2tlci5uYXR1cmFsR2lmdEluZm8oKTtcclxuICAgIGlmIChuZ0luZm8pIHtcclxuICAgICAgbGV0IGF0dGFja1Bvd2VyID0gYXR0YWNrZXIuZ2V0TW92ZVBvd2VyKG1vdmUpICsgbmdJbmZvLmJhc2VQb3dlckJvb3N0O1xyXG4gICAgICBpZiAoYXR0YWNrUG93ZXIgPiAweDdmZmYpIHtcclxuICAgICAgICBhdHRhY2tQb3dlciAtPSAxIDw8IDE2O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzaW11bGF0ZURhbWFnZUNhbGNTaGFyZWQoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBuZ0luZm8udHlwZUlkLCBhdHRhY2tQb3dlciwgMSwgMHgxZDcpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gc2ltdWxhdGVEYW1hZ2VDYWxjV2l0aE11bHQoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlLCAxKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NzNGRVx1NTcyOEhQXHUzMDRDXHU2NzAwXHU1OTI3SFBcdTMwNjhcdTZCRDRcdThGMDNcdTMwNTdcdTMwNjZcdTMwNjlcdTMwNkVcdTMwNTBcdTMwODlcdTMwNDRcdTZCOEJcdTMwNjNcdTMwNjZcdTMwNDRcdTMwOEJcdTMwNEJcclxuICogQHBhcmFtIHtNb25zdGVyfSBlbnRpdHlcclxuICogQHJldHVybnMgMDpcdUZGNUUyNSUsIDE6XHVGRjVFNTAlLCAyOlx1RkY1RTc1JSwgMzpcdUZGNUUxMDAlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SHBEZXBNdWx0VGFibGVJZHgoZW50aXR5KSB7XHJcbiAgY29uc3QgaHAgPSBlbnRpdHkuaHA7XHJcbiAgY29uc3QgbWF4SHAgPSBNYXRoLm1pbihlbnRpdHkuaHBfbWF4LCA5OTkpO1xyXG4gIGlmIChocCA8PSBNYXRoLnRydW5jKG1heEhwIC8gNCkpIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuICBpZiAoaHAgPD0gTWF0aC50cnVuYygobWF4SHAgKiAyKSAvIDQpKSB7XHJcbiAgICByZXR1cm4gMTtcclxuICB9XHJcbiAgaWYgKGhwIDw9IE1hdGgudHJ1bmMoKG1heEhwICogMykgLyA0KSkge1xyXG4gICAgcmV0dXJuIDI7XHJcbiAgfVxyXG4gIHJldHVybiAzO1xyXG59XHJcblxyXG4vKipcclxuICogXHU2MjgwXHU2QkNFXHUzMDZFXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU1MDBEXHU3Mzg3XHUzMDkyXHU5MDY5XHU3NTI4XHUzMDU3XHUzMDAxXHU5MDY5XHUzMDU3XHUzMDVGXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU4QTA4XHU3Qjk3XHU5NUEyXHU2NTcwXHUzMDkyXHU1QjlGXHU4ODRDXHUzMDU5XHUzMDhCXHJcbiAqIEBwYXJhbSB7RGFtYWdlRGF0YX0gZGFtYWdlRGF0YVxyXG4gKiBAcGFyYW0ge0R1bmdlb25TdGF0ZX0gZHVuZ2VvblxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGF0dGFja2VyXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gZGVmZW5kZXJcclxuICogQHBhcmFtIHtNb3ZlfSBtb3ZlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2ltdWxhdGVEYW1hZ2VDYWxjKGRhbWFnZURhdGEsIGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZSkge1xyXG4gIGxldCBkYW1hZ2VNdWx0ID0gMTtcclxuICBsZXQgZml4ZWREYW1hZ2UgPSAwO1xyXG5cclxuICBzd2l0Y2ggKG1vdmUuaWQpIHtcclxuICAgIGNhc2UgMDogLy8gXHUzMDZBXHUzMDU3XHJcbiAgICAgIGRhbWFnZU11bHQgPSAwO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMHgyOiAvLyBcdTMwQTJcdTMwQTRcdTMwQjlcdTMwRENcdTMwRkNcdTMwRUJcclxuICAgIGNhc2UgMHg2OTogLy8gXHUzMDUzXHUzMDhEXHUzMDRDXHUzMDhCXHJcbiAgICAgIGRhbWFnZU11bHQgPSBNZWNoYW5pY3MuUk9MTE9VVF9EQU1BR0VfTVVMVF9UQUJMRVtNYXRoLm1pbihtb3ZlLnByaW9yU3VjY2Vzc2l2ZUhpdHMsIDkpXTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDB4ODogLy8gXHUzMDQyXHUzMDZBXHUzMDkyXHUzMDdCXHUzMDhCXHJcbiAgICAgIGRhbWFnZU11bHQgPSBNZWNoYW5pY3MuRElHX0RBTUFHRV9NVUxUSVBMSUVSO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMHgxNDogLy8gXHUzMDQ0XHUzMDRCXHUzMDhBXHUzMDZFXHUzMDdFXHUzMDQ4XHUzMDcwXHJcbiAgICAgIGZpeGVkRGFtYWdlID0gTWF0aC5mbG9vcihkZWZlbmRlci5ocCAvIDIpO1xyXG4gICAgICByZXR1cm4gc2ltdWxhdGVEYW1hZ2VDYWxjRml4ZWRTdGF0aWMoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlLCBmaXhlZERhbWFnZSk7XHJcbiAgICBjYXNlIDB4MWY6IC8vIFx1MzBBNlx1MzBBN1x1MzBCNlx1MzBGQ1x1MzBEQ1x1MzBGQ1x1MzBFQlxyXG4gICAgICByZXR1cm4gc2ltdWxhdGVEYW1hZ2VDYWxjV2VhdGhlckJhbGwoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlLmdpbnNlbmcpO1xyXG4gICAgY2FzZSAweDIwOiAvLyBcdTMwNDZcdTMwNUFcdTMwNTdcdTMwNEFcclxuICAgIGNhc2UgMHhkYjogLy8gXHUzMDZBXHUzMDdGXHUzMDZFXHUzMDhBXHJcbiAgICAgIGlmIChkZWZlbmRlci5zdGF0dXNlcy5kaXZpbmcpIHtcclxuICAgICAgICBkYW1hZ2VNdWx0ID0gMjtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMHgzMDogLy8gXHUzMDRBXHUzMDkzXHUzMDRDXHUzMDQ4XHUzMDU3XHJcbiAgICAgIGZvciAoY29uc3QgZG1nIG9mIE1lY2hhbmljcy5SRVRVUk5fRklYRURfREFNQUdFX1RBQkxFKSB7XHJcbiAgICAgICAgaWYgKGRtZy5pcSA8IDApIGJyZWFrO1xyXG4gICAgICAgIGlmIChhdHRhY2tlci5pcSA8IGRtZy5pcSkge1xyXG4gICAgICAgICAgZml4ZWREYW1hZ2UgPSBkbWcuZGFtYWdlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzaW11bGF0ZURhbWFnZUNhbGNGaXhlZFN0YXRpYyhkYW1hZ2VEYXRhLCBkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUsIGZpeGVkRGFtYWdlKTtcclxuICAgIGNhc2UgMHgzOTogLy8gXHUzMDRCXHUzMDVDXHUzMDRBXHUzMDUzXHUzMDU3XHJcbiAgICBjYXNlIDB4YTI6IC8vIFx1MzA1Rlx1MzA2NFx1MzA3RVx1MzA0RFxyXG4gICAgICBpZiAoZGVmZW5kZXIuc3RhdHVzZXMuZmx5aW5nIHx8IGRlZmVuZGVyLnN0YXR1c2VzLmJvdW5jaW5nKSB7XHJcbiAgICAgICAgZGFtYWdlTXVsdCA9IDI7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDB4M2M6IC8vIFx1MzA0Qlx1MzA3RVx1MzA0NFx1MzA1Rlx1MzA2MVxyXG4gICAgICBkYW1hZ2VNdWx0ID0gTWVjaGFuaWNzLlJBWk9SX1dJTkRfREFNQUdFX01VTFRJUExJRVI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAweDQyOiAvLyBcdTMwNENcdTMwODBcdTMwNTdcdTMwODNcdTMwODlcclxuICAgICAgY29uc3QgZGlmZiA9IGRlZmVuZGVyLmhwIC0gYXR0YWNrZXIuaHA7XHJcbiAgICAgIGZpeGVkRGFtYWdlID0gTWF0aC5tYXgoZGlmZiwgMCk7XHJcbiAgICAgIHJldHVybiBzaW11bGF0ZURhbWFnZUNhbGNGaXhlZFN0YXRpYyhkYW1hZ2VEYXRhLCBkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUsIGZpeGVkRGFtYWdlKTtcclxuICAgIGNhc2UgMHg0MzogLy8gXHUzMDRCXHUzMDg5XHUzMDUyXHUzMDkzXHUzMDREXHJcbiAgICAgIGlmIChcclxuICAgICAgICBhdHRhY2tlci5zdGF0dXNlcy5idXJuIHx8XHJcbiAgICAgICAgYXR0YWNrZXIuc3RhdHVzZXMucG9pc29uIHx8XHJcbiAgICAgICAgYXR0YWNrZXIuc3RhdHVzZXMuYmFkX3BvaXNvbiB8fFxyXG4gICAgICAgIGF0dGFja2VyLnN0YXR1c2VzLnBhcmFseXNpcyB8fFxyXG4gICAgICAgIGF0dGFja2VyLnN0YXR1c2VzLmlkZW50aWZ5aW5nXHJcbiAgICAgICkge1xyXG4gICAgICAgIGRhbWFnZU11bHQgPSBNZWNoYW5pY3MuRkFDQURFX0RBTUFHRV9NVUxUSVBMSUVSO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAweDRiOiAvLyBcdTMwNERcdTMwNDJcdTMwNDRcdTMwRDFcdTMwRjNcdTMwQzFcclxuICAgICAgZGFtYWdlTXVsdCA9IE1lY2hhbmljcy5GT0NVU19QVU5DSF9EQU1BR0VfTVVMVElQTElFUjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDB4NGQ6IC8vIFx1MzA0RFx1MzA1N1x1MzA0Qlx1MzA0NFx1MzA1Qlx1MzA0NFxyXG4gICAgY2FzZSAweDc5OiAvLyBcdTMwNThcdTMwNUZcdTMwNzBcdTMwNUZcclxuICAgICAgZGFtYWdlTXVsdCA9IE1lY2hhbmljcy5SRVZFUlNBTF9EQU1BR0VfTVVMVF9UQUJMRVtnZXRIcERlcE11bHRUYWJsZUlkeChhdHRhY2tlcildO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMHg0ZTogLy8gXHUzMDREXHUzMDY0XHUzMDUxXHJcbiAgICAgIGlmIChkZWZlbmRlci5zdGF0dXNlcy5wYXJhbHlzaXMpIHtcclxuICAgICAgICBkYW1hZ2VNdWx0ID0gMjtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMHg1YzogLy8gXHUzMDUxXHUzMDVGXHUzMDUwXHUzMDhBXHJcbiAgICBjYXNlIDB4MWNhOiAvLyBcdTMwNEZcdTMwNTVcdTMwODBcdTMwNTlcdTMwNzNcclxuICAgICAgZGFtYWdlTXVsdCA9IE1lY2hhbmljcy5nZXRNb25zdGVyV2VpZ2h0KGRlZmVuZGVyLmlkKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDB4NjQ6IC8vIFx1MzBCNFx1MzBDM1x1MzBDOVx1MzBEMFx1MzBGQ1x1MzBDOVxyXG4gICAgICBkYW1hZ2VNdWx0ID0gTWVjaGFuaWNzLlNLWV9BVFRBQ0tfREFNQUdFX01VTFRJUExJRVI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAweDZjOiAvLyBcdTMwQjVcdTMwQTRcdTMwQjNcdTMwQTZcdTMwQTdcdTMwRkNcdTMwRDZcclxuICAgICAgY29uc3QgbHYgPSBhdHRhY2tlci5sZXZlbDtcclxuICAgICAgY29uc3QgbXVsdCA9IDI1NiAqIChkdW5nZW9uLnJuZy52YXJpYW5jZURpYWwgKyAwLjUpO1xyXG5cclxuICAgICAgLy8gXHU0RTBCXHU5NjUwXHU0RTBBXHU5NjUwMVx1RkY1RTE5OVx1MzA2N1x1MzBDOFx1MzBFQVx1MzBERlx1MzBGM1x1MzBCMFxyXG4gICAgICBmaXhlZERhbWFnZSA9IChsdiAqIG11bHQpID4+IDg7XHJcbiAgICAgIGlmIChmaXhlZERhbWFnZSA8IDApIGZpeGVkRGFtYWdlID0gMTtcclxuICAgICAgaWYgKDE5OSA8IGZpeGVkRGFtYWdlKSBmaXhlZERhbWFnZSA9IDE5OTtcclxuXHJcbiAgICAgIHJldHVybiBzaW11bGF0ZURhbWFnZUNhbGNGaXhlZER5bmFtaWMoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlLCBmaXhlZERhbWFnZSk7XHJcbiAgICBjYXNlIDB4NzE6IC8vIFx1MzA1N1x1MzA0QVx1MzA3NVx1MzA0RFxyXG4gICAgICBkYW1hZ2VNdWx0ID0gTWVjaGFuaWNzLldBVEVSX1NQT1VUX0RBTUFHRV9NVUxUX1RBQkxFW2dldEhwRGVwTXVsdFRhYmxlSWR4KGF0dGFja2VyKV07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAweDc2OiAvLyBcdTMwNThcdTMwNTdcdTMwOTNcclxuICAgICAgaWYgKGRlZmVuZGVyLnN0YXR1c2VzLmRpZ2dpbmcpIHtcclxuICAgICAgICBkYW1hZ2VNdWx0ID0gMjtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIC8vIFx1MzA1OFx1MzA4Rlx1MzA4Q1xyXG4gICAgY2FzZSAweDgzOiB7XHJcbiAgICAgIGNvbnN0IG1vdmVUeXBlID0gYXR0YWNrZXIuZ2V0TW92ZVR5cGUobW92ZS5pZCwgZHVuZ2Vvbik7XHJcbiAgICAgIGNvbnN0IGlzTW9sZEJyZWFrZXIgPSBhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4NTMpO1xyXG5cclxuICAgICAgLy8gXHUzMDc1XHUzMDg2XHUzMDQ2XHU3NkY4XHU2MjRCXHUzMDZCXHU1NDdEXHU0RTJEXHUzMDU5XHUzMDhCXHUzMDRCXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHJcbiAgICAgIGlmICghaXNNb2xkQnJlYWtlciAmJiBkZWZlbmRlci5sZXZpdGF0ZUFjdGl2ZShkdW5nZW9uKSkge1xyXG4gICAgICAgIGZpeGVkRGFtYWdlID0gMDtcclxuICAgICAgfVxyXG4gICAgICAvLyBcdTRFMDBcdTY0ODNcdTYyODBcdTMwNENcdTU0N0RcdTRFMkRcdTMwNTlcdTMwOEJcdTMwNEJcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcclxuICAgICAgZWxzZSBpZiAoY2hlY2tNb3ZlSGl0T2hrbyhkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmVUeXBlKSkge1xyXG4gICAgICAgIGZpeGVkRGFtYWdlID0gOTk5OTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2ltdWxhdGVEYW1hZ2VDYWxjRml4ZWRTdGF0aWMoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlLCBmaXhlZERhbWFnZSk7XHJcbiAgICB9XHJcbiAgICBjYXNlIDB4OTY6IC8vIFx1MzA1Q1x1MzA2M1x1MzA1Rlx1MzA0NFx1MzA4Q1x1MzA0NFx1MzA2OSwgXHUzMDY0XHUzMDZFXHUzMEM5XHUzMEVBXHUzMEVCLCBcdTMwQ0ZcdTMwQjVcdTMwREZcdTMwQUVcdTMwRURcdTMwQzFcdTMwRjNcclxuICAgIGNhc2UgMHhiMTpcclxuICAgIGNhc2UgMHhmNzoge1xyXG4gICAgICBjb25zdCBtb3ZlVHlwZSA9IGF0dGFja2VyLmdldE1vdmVUeXBlKG1vdmUuaWQsIGR1bmdlb24pO1xyXG4gICAgICBpZiAoY2hlY2tNb3ZlSGl0T2hrbyhkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmVUeXBlKSkge1xyXG4gICAgICAgIGZpeGVkRGFtYWdlID0gOTk5OTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2ltdWxhdGVEYW1hZ2VDYWxjRml4ZWRTdGF0aWMoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlLCBmaXhlZERhbWFnZSk7XHJcbiAgICB9XHJcbiAgICBjYXNlIDB4OTc6IC8vIFx1MzBCRFx1MzBGQ1x1MzBFOVx1MzBGQ1x1MzBEM1x1MzBGQ1x1MzBFMFxyXG4gICAgICBjb25zdCB3ZWF0aGVyID0gYXR0YWNrZXIucGVyY2VpdmVkV2VhdGhlcihkdW5nZW9uKTtcclxuICAgICAgZGFtYWdlTXVsdCA9IE1lY2hhbmljcy5TT0xBUkJFQU1fREFNQUdFX01VTFRJUExJRVI7XHJcbiAgICAgIGlmICh3ZWF0aGVyID09IGVvcy5XRUFUSEVSX1NBTkRTVE9STSB8fCB3ZWF0aGVyID09IGVvcy5XRUFUSEVSX1JBSU4gfHwgd2VhdGhlciA9PSBlb3MuV0VBVEhFUl9IQUlMKSB7XHJcbiAgICAgICAgZGFtYWdlTXVsdCAvPSAyOyAvLyBcdTMwNTlcdTMwNkFcdTMwNDJcdTMwODlcdTMwNTcsIFx1MzA0Mlx1MzA4MSwgXHUzMDQyXHUzMDg5XHUzMDhDIFx1MzA2QVx1MzA4OTFcdTUwMERcdTMwNkJcdTYyM0JcdTMwNTlcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMHg5ODogLy8gXHUzMEJEXHUzMENCXHUzMEMzXHUzMEFGXHUzMEQ2XHUzMEZDXHUzMEUwXHJcbiAgICAgIGZpeGVkRGFtYWdlID0gTWVjaGFuaWNzLlNPTklDQk9PTV9GSVhFRF9EQU1BR0U7XHJcbiAgICAgIHJldHVybiBzaW11bGF0ZURhbWFnZUNhbGNGaXhlZFN0YXRpYyhkYW1hZ2VEYXRhLCBkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUsIGZpeGVkRGFtYWdlKTtcclxuICAgIGNhc2UgMHg5OTogLy8gXHUzMDVEXHUzMDg5XHUzMDkyXHUzMDY4XHUzMDc2XHJcbiAgICAgIGRhbWFnZU11bHQgPSBNZWNoYW5pY3MuRkxZX0RBTUFHRV9NVUxUSVBMSUVSO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMHg5YzogLy8gXHUzMEMwXHUzMEE0XHUzMEQzXHUzMEYzXHUzMEIwXHJcbiAgICAgIGRhbWFnZU11bHQgPSBNZWNoYW5pY3MuRElWRV9EQU1BR0VfTVVMVElQTElFUjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDB4YWE6IC8vIFx1MzA2MVx1MzA0RFx1MzA4NVx1MzA0Nlx1MzA2QVx1MzA1MlxyXG4gICAgY2FzZSAweGQ4OiAvLyBcdTMwQ0FcdTMwQTRcdTMwQzhcdTMwRDhcdTMwQzNcdTMwQzlcclxuICAgICAgZml4ZWREYW1hZ2UgPSBhdHRhY2tlci5sZXZlbDtcclxuICAgICAgcmV0dXJuIHNpbXVsYXRlRGFtYWdlQ2FsY0ZpeGVkU3RhdGljKGRhbWFnZURhdGEsIGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZSwgZml4ZWREYW1hZ2UpO1xyXG4gICAgY2FzZSAweGNkOiAvLyBcdTMwNjhcdTMwNzNcdTMwNkZcdTMwNkRcdTMwOEJcclxuICAgICAgZGFtYWdlTXVsdCA9IE1lY2hhbmljcy5CT1VOQ0VfREFNQUdFX01VTFRJUExJRVI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAweGNlOiAvLyBcdTMwNjhcdTMwNzNcdTMwNzJcdTMwNTZcdTMwNTJcdTMwOEFcclxuICAgIGNhc2UgMHgxMTA6IC8vIFx1MzBENlx1MzBFOVx1MzBCOVx1MzBDOFx1MzBEMFx1MzBGQ1x1MzBGM1xyXG4gICAgICBkYW1hZ2VNdWx0ID0gMjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDB4ZDI6IC8vIFx1MzBDOFx1MzBFQVx1MzBEN1x1MzBFQlx1MzBBRFx1MzBDM1x1MzBBRlxyXG4gICAgICBkYW1hZ2VNdWx0ID0gTWF0aC5taW4obW92ZS5wcmlvclN1Y2Nlc3NpdmVIaXRzICsgMSwgMyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAweGY1OiAvLyBcdTMwNkZcdTMwNERcdTMwNjBcdTMwNTlcclxuICAgICAgZGFtYWdlTXVsdCA9IGF0dGFja2VyLnN0YXR1c2VzLnN0b2NrcGlsZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDB4MTE1OiAvLyBcdTMwRDdcdTMwRUNcdTMwQkNcdTMwRjNcdTMwQzhcclxuICAgICAgZml4ZWREYW1hZ2UgPSBnZXRWYWx1ZUJ5UmF0aW8oWzAsIDI1LCA1MCwgNzVdLCBkdW5nZW9uLnJuZy52YXJpYW5jZURpYWwpO1xyXG4gICAgICByZXR1cm4gc2ltdWxhdGVEYW1hZ2VDYWxjRml4ZWREeW5hbWljKGRhbWFnZURhdGEsIGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZSwgZml4ZWREYW1hZ2UpO1xyXG4gICAgY2FzZSAweDExNjogLy8gXHUzMDc1XHUzMDkzXHUzMDRCXHJcbiAgICAgIGRhbWFnZU11bHQgPSBNZWNoYW5pY3MuRVJVUFRJT05fREFNQUdFX01VTFRfVEFCTEVbZ2V0SHBEZXBNdWx0VGFibGVJZHgoYXR0YWNrZXIpXTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDB4MTI4OiAvLyBcdTMwREVcdTMwQjBcdTMwQ0JcdTMwQzFcdTMwRTVcdTMwRkNcdTMwQzlcclxuICAgICAgZml4ZWREYW1hZ2UgPSBnZXRWYWx1ZUJ5UmF0aW8oTWVjaGFuaWNzLk1BR05JVFVERV9EQU1BR0VfVEFCTEUsIGR1bmdlb24ucm5nLnZhcmlhbmNlRGlhbCk7XHJcbiAgICAgIGlmIChkZWZlbmRlci5zdGF0dXNlcy5kaWdnaW5nKSB7XHJcbiAgICAgICAgZml4ZWREYW1hZ2UgKj0gMjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2ltdWxhdGVEYW1hZ2VDYWxjRml4ZWREeW5hbWljKGRhbWFnZURhdGEsIGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZSwgZml4ZWREYW1hZ2UpO1xyXG4gICAgY2FzZSAweDE0ODogLy8gXHUzMDg0XHUzMDY0XHUzMDQyXHUzMDVGXHUzMDhBXHJcbiAgICAgIGZvciAoY29uc3QgZG1nIG9mIE1lY2hhbmljcy5GUlVTVFJBVElPTl9GSVhFRF9EQU1BR0VfVEFCTEUpIHtcclxuICAgICAgICBpZiAoZG1nLmlxIDwgMCkgYnJlYWs7XHJcbiAgICAgICAgaWYgKGF0dGFja2VyLmlxIDwgZG1nLmlxKSB7XHJcbiAgICAgICAgICBmaXhlZERhbWFnZSA9IGRtZy5kYW1hZ2U7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNpbXVsYXRlRGFtYWdlQ2FsY0ZpeGVkU3RhdGljKGRhbWFnZURhdGEsIGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZSwgZml4ZWREYW1hZ2UpO1xyXG4gICAgY2FzZSAweDE0YjogLy8gXHUzMDg2XHUzMDgxXHUzMDRGXHUzMDQ0XHJcbiAgICAgIGlmICghZGVmZW5kZXIuc3RhdHVzZXMuc2xlZXAgJiYgIWRlZmVuZGVyLnN0YXR1c2VzLm5pZ2h0bWFyZSAmJiAhZGVmZW5kZXIuc3RhdHVzZXMubmFwcGluZykge1xyXG4gICAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5kcmVhbUVhdGVyRmFpbGVkID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMHgxNTU6IC8vIFx1MzA4QVx1MzA4NVx1MzA0Nlx1MzA2RVx1MzA0NFx1MzA0Qlx1MzA4QVxyXG4gICAgICBmaXhlZERhbWFnZSA9IE1lY2hhbmljcy5EUkFHT05fUkFHRV9GSVhFRF9EQU1BR0U7XHJcbiAgICAgIHJldHVybiBzaW11bGF0ZURhbWFnZUNhbGNGaXhlZFN0YXRpYyhkYW1hZ2VEYXRhLCBkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUsIGZpeGVkRGFtYWdlKTtcclxuICAgIGNhc2UgMHgxNWM6IC8vIFx1MzBFRFx1MzBCMVx1MzBDM1x1MzBDOFx1MzA1QVx1MzA2NFx1MzA0RFxyXG4gICAgICBkYW1hZ2VNdWx0ID0gTWVjaGFuaWNzLlNLVUxMX0JBU0hfREFNQUdFX01VTFRJUExJRVI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAweDE2MzogLy8gXHUzMDUzXHUzMDQ2XHUzMDUyXHUzMDREIChcdTkwMUFcdTVFMzhcdTY1M0JcdTY0ODMpXHJcbiAgICAgIGRhbWFnZU11bHQgPSBNZWNoYW5pY3MuQ09OU1RfMF81MDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDB4MThhOiAvLyBcdTMwNTdcdTMwOTNcdTMwNEZcdTMwNDZcdTMwNEVcdTMwOEFcclxuICAgICAgZml4ZWREYW1hZ2UgPSBNZWNoYW5pY3MuVkFDVVVNX0NVVF9GSVhFRF9EQU1BR0U7XHJcbiAgICAgIHJldHVybiBzaW11bGF0ZURhbWFnZUNhbGNGaXhlZER5bmFtaWMoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlLCBmaXhlZERhbWFnZSk7XHJcbiAgICBjYXNlIDB4MThkOiAvLyBcdTMwNzJcdTMwOENcdTMwNDRcdTMwNjBcdTMwN0UgKFx1MzA0RFx1MzA4N1x1MzA0Nlx1MzA4MVx1MzA0NClcclxuICAgICAgZml4ZWREYW1hZ2UgPSBkZWZlbmRlci5nZXRTaXplKCk7XHJcbiAgICAgIHJldHVybiBzaW11bGF0ZURhbWFnZUNhbGNGaXhlZFN0YXRpYyhkYW1hZ2VEYXRhLCBkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUsIGZpeGVkRGFtYWdlKTtcclxuICAgIGNhc2UgMHgxZDc6IC8vIFx1MzA1N1x1MzA1Q1x1MzA5M1x1MzA2RVx1MzA4MVx1MzA1MFx1MzA3RlxyXG4gICAgICByZXR1cm4gc2ltdWxhdGVEYW1hZ2VDYWxjTmF0dXJhbEdpZnQoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlLmdpbnNlbmcpO1xyXG4gICAgY2FzZSAweDFjOTogLy8gXHUzMDREXHUzMDhBXHUzMDc1XHUzMDYwXHJcbiAgICAgIGxldCBtYXhQUCA9IE1lY2hhbmljcy5nZXRNb3ZlTWF4UFAobW92ZS5pZCk7XHJcbiAgICAgIGlmIChtYXhQUCA9PSAwKSB7XHJcbiAgICAgICAgbWF4UFAgPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBwcEZyYWMgPSAobW92ZS5wcCAqIDEwMCkgLyBtYXhQUDtcclxuICAgICAgaWYgKHBwRnJhYyA8IDI2KSB7XHJcbiAgICAgICAgZGFtYWdlTXVsdCA9IE1lY2hhbmljcy5DT05TVF8xXzI1O1xyXG4gICAgICB9IGVsc2UgaWYgKHBwRnJhYyA8IDUxKSB7XHJcbiAgICAgICAgZGFtYWdlTXVsdCA9IDE7XHJcbiAgICAgIH0gZWxzZSBpZiAocHBGcmFjIDwgNzYpIHtcclxuICAgICAgICBkYW1hZ2VNdWx0ID0gTWVjaGFuaWNzLkNPTlNUXzBfNzU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGFtYWdlTXVsdCA9IE1lY2hhbmljcy5DT05TVF8wXzUwO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAweDFkNTogLy8gXHUzMDU3XHUzMDRBXHUzMDdGXHUzMDVBXHJcbiAgICBjYXNlIDB4MWU4OiAvLyBcdTMwQzBcdTMwRTFcdTMwNEFcdTMwNTdcclxuICAgICAgbGV0IG1heEhwID0gZGVmZW5kZXIuaHBfbWF4O1xyXG4gICAgICBpZiAobWF4SHAgPiBNZWNoYW5pY3MuTUFYX0hQX0NBUCkge1xyXG4gICAgICAgIG1heEhwID0gTWVjaGFuaWNzLk1BWF9IUF9DQVA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRlZmVuZGVyLmhwICogMiA8PSBtYXhIcCkge1xyXG4gICAgICAgIGRhbWFnZU11bHQgPSAyO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAweDFkYTogLy8gXHUzMDU3XHUzMDdDXHUzMDhBXHUzMDY4XHUzMDhCXHJcbiAgICBjYXNlIDB4MWY5OiAvLyBcdTMwNkJcdTMwNEVcdTMwOEFcdTMwNjRcdTMwNzZcdTMwNTlcclxuICAgICAgZGFtYWdlTXVsdCA9IE1lY2hhbmljcy5XUklOR19PVVRfREFNQUdFX01VTFRfVEFCTEVbZ2V0SHBEZXBNdWx0VGFibGVJZHgoZGVmZW5kZXIpXTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDB4MWRiOiAvLyBcdTMwQjhcdTMwRTNcdTMwQTRcdTMwRURcdTMwRENcdTMwRkNcdTMwRUJcclxuICAgICAgaWYgKGF0dGFja2VyLnN0YXR1c2VzLnNwZWVkID09IDApIHtcclxuICAgICAgICBkYW1hZ2VNdWx0ID0gMjtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMHgxZGQ6IC8vIFx1MzBCN1x1MzBFM1x1MzBDOVx1MzBGQ1x1MzBDMFx1MzBBNFx1MzBENlxyXG4gICAgICBkYW1hZ2VNdWx0ID0gTWVjaGFuaWNzLlNIQURPV19GT1JDRV9EQU1BR0VfTVVMVElQTElFUjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDB4MWYxOiAvLyBcdTMwNjhcdTMwNjNcdTMwNjZcdTMwNEFcdTMwNERcclxuICAgICAgbGV0IG5Nb3Zlc091dE9mUFAgPSBhdHRhY2tlci5uX21vdmVzX291dF9vZl9wcDtcclxuICAgICAgaWYgKG5Nb3Zlc091dE9mUFAgPiAwICYmIG1vdmUucHAgPT0gMCkge1xyXG4gICAgICAgIG5Nb3Zlc091dE9mUFAtLTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobk1vdmVzT3V0T2ZQUCA8IDEpIHtcclxuICAgICAgICBkdW5nZW9uLmRhbWFnZUNhbGMubGFzdFJlc29ydEZhaWxlZCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH1cclxuICAgICAgZGFtYWdlTXVsdCA9IE1lY2hhbmljcy5MQVNUX1JFU09SVF9EQU1BR0VfTVVMVF9UQUJMRVtuTW92ZXNPdXRPZlBQIC0gMV07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAweDIxMzogLy8gXHUzMDgxXHUzMDU2XHUzMDdFXHUzMDU3XHUzMEQzXHUzMEYzXHUzMEJGXHJcbiAgICAgIGlmIChkZWZlbmRlci5zdGF0dXNlcy5zbGVlcCB8fCBkZWZlbmRlci5zdGF0dXNlcy5uaWdodG1hcmUgfHwgZGVmZW5kZXIuc3RhdHVzZXMubmFwcGluZykge1xyXG4gICAgICAgIGRhbWFnZU11bHQgPSAyO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgLy8gXHU1OTA5XHU1MzE2XHU2MjgwXHUzMEZCXHUzMDVEXHUzMDZFXHU0RUQ2XHU5NzVFXHU1QkZFXHU1RkRDXHU2MjgwXHUzMDZGXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU4QTA4XHU3Qjk3XHUzMDkyXHU4ODRDXHUzMDhGXHUzMDVBXHU1NDdEXHU0RTJEXHU3Mzg3XHUzMDZFXHU4QTA4XHU3Qjk3XHUzMDZFXHUzMDdGXHUzMDkyXHU4ODRDXHUzMDQ2XHJcbiAgICAgIC8vIFx1NTQ3RFx1NEUyRFx1NzM4N1x1MzA2Rlx1NTQ3RFx1NEUyRFx1NTAyNDFcdTMwNkVcdTMwN0ZcdTMwOTJcdTRGN0ZcdTc1MjhcdTMwNTlcdTMwOEJcclxuICAgICAgaWYgKGNoZWNrTm9EYW1hZ2VNb3ZlKG1vdmUuaWQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHNpbXVsYXRlRGFtYWdlQ2FsY1N0YXR1c01vdmVzKGRhbWFnZURhdGEsIGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZSk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIC8vIFx1OTAxQVx1NUUzOFx1MzA2RVx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1OEEwOFx1N0I5N1x1MzA5Mlx1ODg0Q1x1MzA0NlxyXG4gIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmRhbWFnZU11bHQgPSBkYW1hZ2VNdWx0O1xyXG4gIHJldHVybiBzaW11bGF0ZURhbWFnZUNhbGNXaXRoTXVsdChkYW1hZ2VEYXRhLCBkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUsIGRhbWFnZU11bHQpO1xyXG59XHJcblxyXG4vKipcclxuICogMFx1RkY1RTFcdTMwNkVcdTdCQzRcdTU2RjJcdTMwNjdcdTUwMjRcdTMwOTJcdTYzMDdcdTVCOUFcdTMwNTdcdTMwMDFcdTkxNERcdTUyMTdcdTMwNEJcdTMwODlcdTUyNzJcdTU0MDhcdTMwNjdcdTMwQzdcdTMwRkNcdTMwQkZcdTMwOTJcdTUzRDZcdTVGOTdcdTMwNTlcdTMwOEJcclxuICogQHBhcmFtIHsqfSBhcnJheSBcdTkxNERcdTUyMTdcclxuICogQHBhcmFtIHsqfSByYXRpbyAwXHVGRjVFMVxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0VmFsdWVCeVJhdGlvKGFycmF5LCByYXRpbykge1xyXG4gIC8vIHJhdGlvXHUzMDkyMFx1RkY1RTFcdTMwNkJcdTUyMzZcdTk2NTBcclxuICByYXRpbyA9IE1hdGgubWluKE1hdGgubWF4KHJhdGlvLCAwKSwgMSk7XHJcbiAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKHJhdGlvICogKGFycmF5Lmxlbmd0aCAtIDEpKTtcclxuICByZXR1cm4gYXJyYXlbaW5kZXhdO1xyXG59XHJcblxyXG4vKipcclxuICogXHU2Mjk1XHU2NEYyXHU3MjY5XHUzMDZFXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU4QTA4XHU3Qjk3XHJcbiAqIEBwYXJhbSB7RGFtYWdlRGF0YX0gZGFtYWdlRGF0YVxyXG4gKiBAcGFyYW0ge0R1bmdlb25TdGF0ZX0gZHVuZ2VvblxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGF0dGFja2VyXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gZGVmZW5kZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IGF0dGFja1Bvd2VyXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2ltdWxhdGVEYW1hZ2VDYWxjUHJvamVjdGlsZShkYW1hZ2VEYXRhLCBkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIGF0dGFja1Bvd2VyKSB7XHJcbiAgY29uc3QgYXR0YWNrVHlwZSA9IGF0dGFja2VyLmdldE1vdmVUeXBlKDB4MTk1LCBkdW5nZW9uKTtcclxuICByZXR1cm4gc2ltdWxhdGVEYW1hZ2VDYWxjU2hhcmVkKGRhbWFnZURhdGEsIGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgYXR0YWNrVHlwZSwgYXR0YWNrUG93ZXIsIDEsIDB4MTk1KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NjI4MFx1MzA2RVx1NTIwNlx1OTg1RVx1MzA5Mlx1NTNENlx1NUY5NyAoMD1cdTcyNjlcdTc0MDYsIDE9XHU3Mjc5XHU2QjhBLCAyPVx1NTkwOVx1NTMxNilcclxuICogQHBhcmFtIHsqfSBtb3ZlSWRcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIGdldE1vdmVDYXRlZ29yeShtb3ZlSWQpIHtcclxuICBsZXQgcmVzID0gbnVsbDtcclxuICBpZiAoTW92ZURhdGEpIHJlcyA9IE1vdmVEYXRhW21vdmVJZF0uQ2F0ZWdvcnk7XHJcbiAgZWxzZSBjb25zb2xlLmVycm9yKCdNb3ZlRGF0YSBOb3QgRm91bmQnKTtcclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG4vKipcclxuICogXHU3MjY5XHU3NDA2XHU2MjgwXHU0RUU1XHU1OTE2XHUzMDY3XHUzMDQyXHUzMDhCXHUzMDRCXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHJcbiAqIEBwYXJhbSB7Kn0gbW92ZUlkXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5mdW5jdGlvbiBNb3ZlTm90UGh5c2lhbChtb3ZlSWQpIHtcclxuICByZXR1cm4gZ2V0TW92ZUNhdGVnb3J5KG1vdmVJZCkgIT0gZW9zLkNBVEVHT1JZX1BIWVNJQ0FMO1xyXG59XHJcblxyXG4vKipcclxuICogXHU1MDBEXHU3Mzg3XHUzMDZFXHU4QTczXHU3RDMwXHJcbiAqL1xyXG5jbGFzcyBNb2RpZmllckRldGFpbHMge1xyXG4gIGl0ZW1BdGsgPSAwO1xyXG4gIGl0ZW1TcGF0ayA9IDA7XHJcbiAgaXRlbURlZiA9IDA7XHJcbiAgaXRlbVNwZGVmID0gMDtcclxuICBhYmlsaXR5T2ZmZW5zZSA9IDA7XHJcbiAgYWJpbGl0eURlZmVuc2UgPSAwO1xyXG4gIGlxU2tpbGxPZmZlbnNlID0gMDtcclxuICBpcVNraWxsRGVmZW5zZSA9IDA7XHJcbiAgc2NvcGVMZW5zT3JTaGFycHNob290ZXIgPSBmYWxzZTtcclxuICBwYXRzeUJhbmQgPSBmYWxzZTtcclxuICBoYWxmUGh5c2ljYWxEYW1hZ2UgPSBmYWxzZTtcclxuICBoYWxmU3BlY2lhbERhbWFnZSA9IGZhbHNlO1xyXG4gIGZvY3VzRW5lcmd5ID0gZmFsc2U7XHJcbiAgdHlwZUFkdmFudGFnZU1hc3RlciA9IGZhbHNlO1xyXG4gIGNsb3VkeURyb3AgPSBmYWxzZTtcclxuICByYWluTXVsdGlwbGllciA9IGZhbHNlO1xyXG4gIHN1bm55TXVsdGlwbGllciA9IGZhbHNlO1xyXG4gIHRoaWNrRmF0SGVhdHByb29mID0gZmFsc2U7XHJcbiAgZmxhc2hGaXJlID0gZmFsc2U7XHJcbiAgbGV2aXRhdGUgPSBmYWxzZTtcclxuICBvdmVyZ3JvdyA9IGZhbHNlO1xyXG4gIHN3YXJtID0gZmFsc2U7XHJcbiAgYmxhemVEcnlTa2luID0gZmFsc2U7XHJcbiAgc2NyYXBweSA9IGZhbHNlO1xyXG4gIHN1cGVyTHVjayA9IGZhbHNlO1xyXG4gIHNuaXBlciA9IGZhbHNlO1xyXG4gIHN0YWIgPSBmYWxzZTtcclxuICBtdWRTcG9ydEZvZyA9IGZhbHNlO1xyXG4gIHdhdGVyU3BvcnQgPSBmYWxzZTtcclxuICBjaGFyZ2UgPSBmYWxzZTtcclxuICBnaG9zdEltbXVuaXR5ID0gZmFsc2U7XHJcbiAgc2t1bGxCYXNoID0gZmFsc2U7XHJcbn1cclxuLyoqXHJcbiAqIFx1OEEwOFx1N0I5N1x1MzA2RVx1OEE3M1x1N0QzMFxyXG4gKi9cclxuY2xhc3MgQ2FsY0RldGFpbHMge1xyXG4gIG9mZmVuc2l2ZVN0YXRTdGFnZSA9IDA7XHJcbiAgZGVmZW5zaXZlU3RhdFN0YWdlID0gMDtcclxuICBvZmZlbnNpdmVTdGF0ID0gMDtcclxuICBkZWZlbnNpdmVTdGF0ID0gMDtcclxuICBvZmZlbnNlQ2FsYyA9IDA7XHJcbiAgZGVmZW5zZUNhbGMgPSAwO1xyXG4gIGRhbWFnZUNhbGNBdCA9IDA7XHJcbiAgZGFtYWdlQ2FsY0RlZiA9IDA7XHJcbiAgZGFtYWdlQ2FsY0ZsdiA9IDA7XHJcbiAgZGFtYWdlQ2FsY0Jhc2UgPSAwO1xyXG4gIHN0YXRpY0RhbWFnZU11bHQgPSAwO1xyXG4gIGRhbWFnZUNhbGMgPSAwO1xyXG4gIGF2Z1JhbmRvbURhbWFnZU11bHRQY3QgPSAwO1xyXG4gIG1pblJhbmRvbURhbWFnZU11bHRQY3QgPSAwO1xyXG4gIG1heFJhbmRvbURhbWFnZU11bHRQY3QgPSAwO1xyXG4gIG1vZGlmaWVycyA9IG5ldyBNb2RpZmllckRldGFpbHMoKTtcclxufVxyXG4vKipcclxuICogXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU4QTA4XHU3Qjk3XHU3RDUwXHU2NzlDXHU4QTczXHU3RDMwXHJcbiAqL1xyXG5jbGFzcyBSZXN1bHREZXRhaWxzIHtcclxuICBkYW1hZ2VNZXNzYWdlID0gJyc7XHJcbiAgdHlwZU1hdGNodXAgPSAnJztcclxuICBpbmRpdlR5cGVNYXRjaHVwMSA9ICcnO1xyXG4gIGluZGl2VHlwZU1hdGNodXAyID0gJyc7XHJcbiAgbW92ZVR5cGUgPSAnJztcclxuICBtb3ZlQ2F0ZWdvcnkgPSAnJztcclxuICBjcml0aWNhbEhpdCA9IGZhbHNlO1xyXG4gIGZ1bGxUeXBlSW1tdW5pdHkgPSBmYWxzZTtcclxuICBub0RhbWFnZSA9IGZhbHNlO1xyXG4gIGNhbGMgPSBuZXcgQ2FsY0RldGFpbHMoKTtcclxufVxyXG4vKipcclxuICogXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU4QTA4XHU3Qjk3XHU3RDUwXHU2NzlDXHJcbiAqL1xyXG5jbGFzcyBDYWxjRGFtYWdlUmVzdWx0IHtcclxuICAvKiogXHU1RTczXHU1NzQ3XHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4ICovXHJcbiAgYXZnRGFtYWdlID0gMDtcclxuICAvKiogXHU2NzAwXHU0RjRFXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4ICovXHJcbiAgbWluRGFtYWdlID0gMDtcclxuICAvKiogXHU2NzAwXHU1OTI3XHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4ICovXHJcbiAgbWF4RGFtYWdlID0gMDtcclxuICAvKiogXHU1NkRFXHU1RkE5XHUzMEQ1XHUzMEU5XHUzMEIwICovXHJcbiAgaGVhbGVkID0gZmFsc2U7XHJcbiAgLyoqIFx1NTQ3RFx1NEUyRFx1NzM4NyAqL1xyXG4gIGhpdENoYW5jZSA9IDA7XHJcbiAgLyoqIFx1NTQ3RFx1NEUyRFx1MzA2Rlx1MzA1N1x1MzA1Rlx1MzA0Q1x1MzBERlx1MzBCOVx1MzA0Q1x1NzY3QVx1NzUxRiAqL1xyXG4gIGd1YXJhbnRlZWRNaXNzID0gZmFsc2U7XHJcbiAgLyoqIFx1NjAyNVx1NjI0MFx1NzM4NyAqL1xyXG4gIGNyaXRDaGFuY2UgPSAwO1xyXG4gIC8qKiBcdThBNzNcdTdEMzAgKi9cclxuICBkZXRhaWxzID0gbmV3IFJlc3VsdERldGFpbHMoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1OEEwOFx1N0I5N1xyXG4gKiBAcGFyYW0ge0R1bmdlb25TdGF0ZX0gZHVuZ2VvblxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGF0dGFja2VyXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gZGVmZW5kZXJcclxuICogQHBhcmFtIHtNb3ZlfSBtb3ZlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhdHRhY2tQb3dlciBcdTYyODBcdTMwNkVcdTVBMDFcdTUyOUIgKFx1NjI5NVx1NjRGMlx1NzI2OVx1MzA2RVx1NUEwMVx1NTI5QilcclxuICogQHJldHVybnMgXHU4QTA4XHU3Qjk3XHU3RDUwXHU2NzlDXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gUnVuQ2FsY0RhbWFnZShkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUsIGF0dGFja1Bvd2VyKSB7XHJcbiAgaWYgKCFNb3ZlRGF0YSkge1xyXG4gICAgY29uc29sZS5lcnJvcignTW92ZURhdGEgbm90IGZvdW5kJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmICghVHlwZURhdGEpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1R5cGVEYXRhIG5vdCBmb3VuZCcpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBjb25zdCBkdW5nZW9uTWluID0gZGVlcENsb25lKGR1bmdlb24pO1xyXG4gIGNvbnN0IGR1bmdlb25NYXggPSBkZWVwQ2xvbmUoZHVuZ2Vvbik7XHJcbiAgY29uc3QgYXR0YWNrZXJNaW4gPSBkZWVwQ2xvbmUoYXR0YWNrZXIpO1xyXG4gIGNvbnN0IGRlZmVuZGVyTWluID0gZGVlcENsb25lKGRlZmVuZGVyKTtcclxuICBjb25zdCBhdHRhY2tlck1heCA9IGRlZXBDbG9uZShhdHRhY2tlcik7XHJcbiAgY29uc3QgZGVmZW5kZXJNYXggPSBkZWVwQ2xvbmUoZGVmZW5kZXIpO1xyXG4gIGNvbnN0IG1vdmVNaW4gPSBkZWVwQ2xvbmUobW92ZSk7XHJcbiAgY29uc3QgbW92ZU1heCA9IGRlZXBDbG9uZShtb3ZlKTtcclxuXHJcbiAgZHVuZ2Vvbi5ybmcudmFyaWFuY2VEaWFsID0gMC41O1xyXG4gIGR1bmdlb25NaW4ucm5nLnZhcmlhbmNlRGlhbCA9IDA7XHJcbiAgZHVuZ2Vvbk1heC5ybmcudmFyaWFuY2VEaWFsID0gMTtcclxuXHJcbiAgY29uc3QgZGV0YWlscyA9IG5ldyBEYW1hZ2VEYXRhKCk7XHJcbiAgY29uc3QgZGV0YWlsc01pblZhciA9IG5ldyBEYW1hZ2VEYXRhKCk7XHJcbiAgY29uc3QgZGV0YWlsc01heFZhciA9IG5ldyBEYW1hZ2VEYXRhKCk7XHJcbiAgbGV0IGRhbWFnZSA9IDA7XHJcbiAgbGV0IGRhbWFnZU1pblZhciA9IDA7XHJcbiAgbGV0IGRhbWFnZU1heFZhciA9IDA7XHJcblxyXG4gIC8vIFx1MzA2QVx1MzA1Mlx1MzA1Rlx1MzA4Mlx1MzA2RSAoXHU2Mjk1XHU2NEYyXHU3MjY5KVxyXG4gIGlmIChtb3ZlLmlkID09IDB4MTk1KSB7XHJcbiAgICBkYW1hZ2UgPSBzaW11bGF0ZURhbWFnZUNhbGNQcm9qZWN0aWxlKGRldGFpbHMsIGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgYXR0YWNrUG93ZXIpO1xyXG4gICAgZGFtYWdlTWluVmFyID0gc2ltdWxhdGVEYW1hZ2VDYWxjUHJvamVjdGlsZShkZXRhaWxzLCBkdW5nZW9uTWluLCBhdHRhY2tlck1pbiwgZGVmZW5kZXJNaW4sIGF0dGFja1Bvd2VyKTtcclxuICAgIGRhbWFnZU1heFZhciA9IHNpbXVsYXRlRGFtYWdlQ2FsY1Byb2plY3RpbGUoZGV0YWlscywgZHVuZ2Vvbk1heCwgYXR0YWNrZXJNYXgsIGRlZmVuZGVyTWF4LCBhdHRhY2tQb3dlcik7XHJcbiAgfVxyXG4gIC8vIFx1OTAxQVx1NUUzOFx1MzA2RVx1NjI4MFxyXG4gIGVsc2Uge1xyXG4gICAgZGFtYWdlID0gc2ltdWxhdGVEYW1hZ2VDYWxjKGRldGFpbHMsIGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZSk7XHJcbiAgICBkYW1hZ2VNaW5WYXIgPSBzaW11bGF0ZURhbWFnZUNhbGMoZGV0YWlscywgZHVuZ2Vvbk1pbiwgYXR0YWNrZXJNaW4sIGRlZmVuZGVyTWluLCBtb3ZlTWluKTtcclxuICAgIGRhbWFnZU1heFZhciA9IHNpbXVsYXRlRGFtYWdlQ2FsYyhkZXRhaWxzLCBkdW5nZW9uTWF4LCBhdHRhY2tlck1heCwgZGVmZW5kZXJNYXgsIG1vdmVNYXgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzdWx0ID0gbmV3IENhbGNEYW1hZ2VSZXN1bHQoKTtcclxuICBpZiAoZGV0YWlscy5oZWFsZWQpIHtcclxuICAgIHJlc3VsdC5hdmdEYW1hZ2UgPSBkZXRhaWxzLmRhbWFnZTtcclxuICAgIHJlc3VsdC5taW5EYW1hZ2UgPSBkZXRhaWxzTWluVmFyLmRhbWFnZTtcclxuICAgIHJlc3VsdC5tYXhEYW1hZ2UgPSBkZXRhaWxzTWF4VmFyLmRhbWFnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzdWx0LmF2Z0RhbWFnZSA9IGRhbWFnZTtcclxuICAgIHJlc3VsdC5taW5EYW1hZ2UgPSBkYW1hZ2VNaW5WYXI7XHJcbiAgICByZXN1bHQubWF4RGFtYWdlID0gZGFtYWdlTWF4VmFyO1xyXG4gIH1cclxuICByZXN1bHQuaGVhbGVkID0gZGV0YWlscy5oZWFsZWQ7XHJcblxyXG4gIGlmIChcclxuICAgIGR1bmdlb24uZGFtYWdlQ2FsYy50d29UdXJuTW92ZUZvcmNlZE1pc3MgfHxcclxuICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5zb3VuZHByb29mQWN0aXZhdGVkIHx8XHJcbiAgICBkdW5nZW9uLmRhbWFnZUNhbGMuZmlyc3RIaXRDaGVja0ZhaWxlZCB8fFxyXG4gICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmRyZWFtRWF0ZXJGYWlsZWQgfHxcclxuICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5sYXN0UmVzb3J0RmFpbGVkXHJcbiAgKSB7XHJcbiAgICByZXN1bHQuZ3VhcmFudGVlZE1pc3MgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbiAgcmVzdWx0LmhpdENoYW5jZSA9IGR1bmdlb24ucm5nLmdldENvbWJpbmVkSGl0UGVyY2VudGFnZSgpO1xyXG4gIHJlc3VsdC5jcml0Q2hhbmNlID0gZHVuZ2Vvbi5ybmcuZ2V0Q29tcHV0ZWRDcml0Q2hhbmNlKCk7XHJcblxyXG4gIGNvbnN0IGNhbGMgPSBkdW5nZW9uLmRhbWFnZUNhbGM7XHJcbiAgY29uc3QgcmVzRGV0YWlscyA9IHJlc3VsdC5kZXRhaWxzO1xyXG4gIHJlc0RldGFpbHMuZGFtYWdlTWVzc2FnZSA9IGlkcy5EQU1BR0VfTUVTU0FHRVtkZXRhaWxzLmRhbWFnZU1lc3NhZ2VdO1xyXG4gIHJlc0RldGFpbHMudHlwZU1hdGNodXAgPSBpZHMuVFlQRV9NQVRDSFVQW2RldGFpbHMudHlwZU1hdGNodXBdO1xyXG4gIHJlc0RldGFpbHMuaW5kaXZUeXBlTWF0Y2h1cDEgPSBpZHMuVFlQRV9NQVRDSFVQW2NhbGMubW92ZUluZGl2VHlwZU1hdGNodXBzWzBdXTtcclxuICByZXNEZXRhaWxzLmluZGl2VHlwZU1hdGNodXAyID0gaWRzLlRZUEVfTUFUQ0hVUFtjYWxjLm1vdmVJbmRpdlR5cGVNYXRjaHVwc1sxXV07XHJcbiAgcmVzRGV0YWlscy5tb3ZlVHlwZSA9IFR5cGVEYXRhW2RldGFpbHMudHlwZV07XHJcbiAgcmVzRGV0YWlscy5tb3ZlQ2F0ZWdvcnkgPSBpZHMuTU9WRV9DQVRFR09SWVtkZXRhaWxzLmNhdGVnb3J5XTtcclxuICByZXNEZXRhaWxzLmNyaXRpY2FsSGl0ID0gZGV0YWlscy5jcml0aWNhbEhpdDtcclxuICByZXNEZXRhaWxzLmZ1bGxUeXBlSW1tdW5pdHkgPSBkZXRhaWxzLmZ1bGxUeXBlSW1tdW5pdHk7XHJcbiAgcmVzRGV0YWlscy5ub0RhbWFnZSA9IGRldGFpbHMubm9EYW1hZ2U7XHJcblxyXG4gIGNvbnN0IGNhbGNEZXRhaWxzID0gcmVzRGV0YWlscy5jYWxjO1xyXG4gIGNhbGNEZXRhaWxzLm9mZmVuc2l2ZVN0YXRTdGFnZSA9IGNhbGMub2ZmZW5zaXZlU3RhdFN0YWdlO1xyXG4gIGNhbGNEZXRhaWxzLmRlZmVuc2l2ZVN0YXRTdGFnZSA9IGNhbGMuZGVmZW5zaXZlU3RhdFN0YWdlO1xyXG4gIGNhbGNEZXRhaWxzLm9mZmVuc2l2ZVN0YXQgPSBjYWxjLm9mZmVuc2l2ZVN0YXQ7XHJcbiAgY2FsY0RldGFpbHMuZGVmZW5zaXZlU3RhdCA9IGNhbGMuZGVmZW5zaXZlU3RhdDtcclxuICBjYWxjRGV0YWlscy5vZmZlbnNlQ2FsYyA9IGNhbGMub2ZmZW5zZUNhbGM7XHJcbiAgY2FsY0RldGFpbHMuZGVmZW5zZUNhbGMgPSBjYWxjLmRlZmVuc2VDYWxjO1xyXG4gIGNhbGNEZXRhaWxzLmRhbWFnZUNhbGNBdCA9IGNhbGMuZGFtYWdlQ2FsY0F0O1xyXG4gIGNhbGNEZXRhaWxzLmRhbWFnZUNhbGNEZWYgPSBjYWxjLmRhbWFnZUNhbGNEZWY7XHJcbiAgY2FsY0RldGFpbHMuZGFtYWdlQ2FsY0ZsdiA9IGNhbGMuZGFtYWdlQ2FsY0ZsdjtcclxuICBjYWxjRGV0YWlscy5kYW1hZ2VDYWxjQmFzZSA9IGNhbGMuZGFtYWdlQ2FsY0Jhc2U7XHJcbiAgY2FsY0RldGFpbHMuc3RhdGljRGFtYWdlTXVsdCA9IGNhbGMuc3RhdGljRGFtYWdlTXVsdDtcclxuICBjYWxjRGV0YWlscy5kYW1hZ2VDYWxjID0gY2FsYy5kYW1hZ2VDYWxjO1xyXG4gIGNhbGNEZXRhaWxzLmF2Z1JhbmRvbURhbWFnZU11bHRQY3QgPSBjYWxjLmRhbWFnZUNhbGNSYW5kb21NdWx0UGN0O1xyXG4gIGNhbGNEZXRhaWxzLm1pblJhbmRvbURhbWFnZU11bHRQY3QgPSBkdW5nZW9uTWluLmRhbWFnZUNhbGMuZGFtYWdlQ2FsY1JhbmRvbU11bHRQY3Q7XHJcbiAgY2FsY0RldGFpbHMubWF4UmFuZG9tRGFtYWdlTXVsdFBjdCA9IGR1bmdlb25NYXguZGFtYWdlQ2FsYy5kYW1hZ2VDYWxjUmFuZG9tTXVsdFBjdDtcclxuXHJcbiAgY29uc3QgbW9kRGV0YWlscyA9IGNhbGNEZXRhaWxzLm1vZGlmaWVycztcclxuICBtb2REZXRhaWxzLml0ZW1BdGsgPSBjYWxjLml0ZW1BdGtNb2RpZmllcjtcclxuICBtb2REZXRhaWxzLml0ZW1TcGF0ayA9IGNhbGMuaXRlbVNwQXRrTW9kaWZpZXI7XHJcbiAgbW9kRGV0YWlscy5pdGVtRGVmID0gY2FsYy5pdGVtRGVmTW9kaWZpZXI7XHJcbiAgbW9kRGV0YWlscy5pdGVtU3BkZWYgPSBjYWxjLml0ZW1TcERlZk1vZGlmaWVyO1xyXG4gIG1vZERldGFpbHMuYWJpbGl0eU9mZmVuc2UgPSBjYWxjLmFiaWxpdHlPZmZlbnNlTW9kaWZpZXI7XHJcbiAgbW9kRGV0YWlscy5hYmlsaXR5RGVmZW5zZSA9IGNhbGMuYWJpbGl0eURlZmVuc2VNb2RpZmllcjtcclxuICBtb2REZXRhaWxzLmlxU2tpbGxPZmZlbnNlID0gY2FsYy5pcVNraWxsT2ZmZW5zZU1vZGlmaWVyO1xyXG4gIG1vZERldGFpbHMuaXFTa2lsbERlZmVuc2UgPSBjYWxjLmlxU2tpbGxEZWZlbnNlTW9kaWZpZXI7XHJcbiAgbW9kRGV0YWlscy5pcVNraWxsRGVmZW5zZSA9IGNhbGMuaXFTa2lsbERlZmVuc2VNb2RpZmllcjtcclxuICBtb2REZXRhaWxzLnNjb3BlTGVuc09yU2hhcnBzaG9vdGVyID0gY2FsYy5zY29wZUxlbnNPclNoYXJwc2hvb3RlckFjdGl2YXRlZDtcclxuICBtb2REZXRhaWxzLnBhdHN5QmFuZCA9IGNhbGMucGF0c3lCYW5kQWN0aXZhdGVkO1xyXG4gIG1vZERldGFpbHMuaGFsZlBoeXNpY2FsRGFtYWdlID0gY2FsYy5oYWxmUGh5c2ljYWxEYW1hZ2VBY3RpdmF0ZWQ7XHJcbiAgbW9kRGV0YWlscy5oYWxmU3BlY2lhbERhbWFnZSA9IGNhbGMuaGFsZlNwZWNpYWxEYW1hZ2VBY3RpdmF0ZWQ7XHJcbiAgbW9kRGV0YWlscy5mb2N1c0VuZXJneSA9IGNhbGMuZm9jdXNFbmVyZ3lBY3RpdmF0ZWQ7XHJcbiAgbW9kRGV0YWlscy50eXBlQWR2YW50YWdlTWFzdGVyID0gY2FsYy50eXBlQWR2YW50YWdlTWFzdGVyQWN0aXZhdGVkO1xyXG4gIG1vZERldGFpbHMuY2xvdWR5RHJvcCA9IGNhbGMuY2xvdWR5RHJvcEFjdGl2YXRlZDtcclxuICBtb2REZXRhaWxzLnJhaW5NdWx0aXBsaWVyID0gY2FsYy5yYWluTXVsdGlwbGllckFjdGl2YXRlZDtcclxuICBtb2REZXRhaWxzLnN1bm55TXVsdGlwbGllciA9IGNhbGMuc3VubnlNdWx0aXBsaWVyQWN0aXZhdGVkO1xyXG4gIG1vZERldGFpbHMudGhpY2tGYXRIZWF0cHJvb2YgPSBjYWxjLmZpcmVNb3ZlQWJpbGl0eURyb3BBY3RpdmF0ZWQ7XHJcbiAgbW9kRGV0YWlscy5mbGFzaEZpcmUgPSBjYWxjLmZsYXNoRmlyZUFjdGl2YXRlZDtcclxuICBtb2REZXRhaWxzLmxldml0YXRlID0gY2FsYy5sZXZpdGF0ZUFjdGl2YXRlZDtcclxuICBtb2REZXRhaWxzLm92ZXJncm93ID0gY2FsYy5vdmVyZ3Jvd0Jvb3N0QWN0aXZhdGVkO1xyXG4gIG1vZERldGFpbHMuc3dhcm0gPSBjYWxjLnN3YXJtQm9vc3RBY3RpdmF0ZWQ7XHJcbiAgbW9kRGV0YWlscy5ibGF6ZURyeVNraW4gPSBjYWxjLmZpcmVNb3ZlQWJpbGl0eUJvb3N0QWN0aXZhdGVkO1xyXG4gIG1vZERldGFpbHMuc2NyYXBweSA9IGNhbGMuc2NyYXBweUFjdGl2YXRlZDtcclxuICBtb2REZXRhaWxzLnN1cGVyTHVjayA9IGNhbGMuc3VwZXJMdWNrQWN0aXZhdGVkO1xyXG4gIG1vZERldGFpbHMuc25pcGVyID0gY2FsYy5zbmlwZXJBY3RpdmF0ZWQ7XHJcbiAgbW9kRGV0YWlscy5zdGFiID0gY2FsYy5zdGFiQm9vc3RBY3RpdmF0ZWQ7XHJcbiAgbW9kRGV0YWlscy5tdWRTcG9ydEZvZyA9IGNhbGMuZWxlY3RyaWNNb3ZlRGFtcGVuZWQ7XHJcbiAgbW9kRGV0YWlscy53YXRlclNwb3J0ID0gY2FsYy53YXRlclNwb3J0RHJvcEFjdGl2YXRlZDtcclxuICBtb2REZXRhaWxzLmNoYXJnZSA9IGNhbGMuY2hhcmdlQm9vc3RBY3RpdmF0ZWQ7XHJcbiAgbW9kRGV0YWlscy5naG9zdEltbXVuaXR5ID0gY2FsYy5naG9zdEltbXVuaXR5QWN0aXZhdGVkO1xyXG4gIG1vZERldGFpbHMuc2t1bGxCYXNoID0gY2FsYy5za3VsbEJhc2hEZWZlbnNlQm9vc3RBY3RpdmF0ZWQ7XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTMwQUFcdTMwRDZcdTMwQjhcdTMwQTdcdTMwQUZcdTMwQzhcdTMwNkVcdTMwQzdcdTMwQTNcdTMwRkNcdTMwRDdcdTMwQjNcdTMwRDRcdTMwRkNcdTMwOTJcdTRGNUNcdTYyMTBcclxuICogQHBhcmFtIHsqfSBvYmpcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIGRlZXBDbG9uZShvYmopIHtcclxuICBjb25zdCBjb3B5ID0gbmV3IG9iai5jb25zdHJ1Y3RvcigpO1xyXG5cclxuICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICBjb3B5W2tleV0gPSB2YWx1ZS5tYXAoKHYpID0+ICh0eXBlb2YgdiA9PT0gJ29iamVjdCcgJiYgdiAhPT0gbnVsbCA/IGRlZXBDbG9uZSh2KSA6IHYpKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICBpZiAodHlwZW9mIHZhbHVlLmNsb25lID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgY29weVtrZXldID0gdmFsdWUuY2xvbmUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb3B5W2tleV0gPSBkZWVwQ2xvbmUodmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb3B5W2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjb3B5O1xyXG59XHJcblxyXG4vKipcclxuICogXHU1MkQ1XHU3Njg0XHU1NkZBXHU1QjlBXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHUzMDkyXHU4QTA4XHU3Qjk3IChcdTMwQjVcdTMwQTRcdTMwQjNcdTMwQTZcdTMwQTdcdTMwRkNcdTMwRDZcdTMwMDFcdTMwRDdcdTMwRUNcdTMwQkNcdTMwRjNcdTMwQzhcdTMwMDFcdTMwREVcdTMwQjBcdTMwQ0JcdTMwQzFcdTMwRTVcdTMwRkNcdTMwQzlcdTMwMDFcdTMwNTdcdTMwOTNcdTMwNEZcdTMwNDZcdTMwNEVcdTMwOEEpXHJcbiAqIEpQOiAweDIzMzQzMDRcclxuICogQHBhcmFtIHtEYW1hZ2VEYXRhfSBkYW1hZ2VEYXRhXHJcbiAqIEBwYXJhbSB7RHVuZ2VvblN0YXRlfSBkdW5nZW9uXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gYXR0YWNrZXJcclxuICogQHBhcmFtIHtNb25zdGVyfSBkZWZlbmRlclxyXG4gKiBAcGFyYW0ge01vdmV9IG1vdmVcclxuICogQHBhcmFtIHtOdW1iZXJ9IGRhbWFnZSBcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcclxuICovXHJcbmZ1bmN0aW9uIHNpbXVsYXRlRGFtYWdlQ2FsY0ZpeGVkRHluYW1pYyhkYW1hZ2VEYXRhLCBkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUsIGRhbWFnZSkge1xyXG4gIGNvbnN0IGF0dGFja1R5cGUgPSBhdHRhY2tlci5nZXRNb3ZlVHlwZShtb3ZlLmlkLCBkdW5nZW9uKTtcclxuICBjb25zdCBtb3ZlQ2F0ZWdvcnkgPSBnZXRNb3ZlQ2F0ZWdvcnkobW92ZS5pZCk7XHJcbiAgY29uc3QgZml4ZWREYW1hZ2UgPSBjYWxjRGFtYWdlRml4ZWRBcHBseUVmZmVjdHMoXHJcbiAgICBkYW1hZ2VEYXRhLFxyXG4gICAgZHVuZ2VvbixcclxuICAgIGF0dGFja2VyLFxyXG4gICAgZGVmZW5kZXIsXHJcbiAgICBhdHRhY2tUeXBlLFxyXG4gICAgbW92ZUNhdGVnb3J5LFxyXG4gICAgZGFtYWdlLFxyXG4gICk7XHJcblxyXG4gIGRhbWFnZURhdGEudHlwZSA9IGF0dGFja1R5cGU7XHJcbiAgZGFtYWdlRGF0YS5jYXRlZ29yeSA9IG1vdmVDYXRlZ29yeTtcclxuXHJcbiAgLy8gW29yaWdpbmFsXSBcdTMwRDdcdTMwRUNcdTMwQkNcdTMwRjNcdTMwQzhcdTMwNEJcdTMwNjQwXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHUzMDY3XHU1NDdDXHUzMDczXHU1MUZBXHUzMDU1XHUzMDhDXHUzMDVGXHUzMDZBXHUzMDg5MFx1MzA2OFx1MzA1OVx1MzA4QlxyXG4gIGlmIChtb3ZlLmlkID09IDB4MTE1ICYmIGRhbWFnZSA9PSAwKSB7XHJcbiAgICBkYW1hZ2VEYXRhLmRhbWFnZSA9IDA7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRhbWFnZURhdGEuZGFtYWdlID0gZml4ZWREYW1hZ2U7XHJcbiAgfVxyXG4gIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzRml4ZWREYW1hZ2UgPSB0cnVlO1xyXG5cclxuICByZXR1cm4gcnVuTW9ja0RhbWFnZVNlcXVlbmNlKGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZS5pZCwgZGFtYWdlRGF0YSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTU2RkFcdTVCOUFcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdTMwOTJcdTMwQzhcdTMwRUFcdTMwREZcdTMwRjNcdTMwQjBcdTMwNTdcdTMwMDFcdTg4RENcdTZCNjNcdTMwOTJcdTkwNjlcdTc1MjhcdTMwNTdcdTMwNjZcdThBMDhcdTdCOTdcclxuICogSlA6IDB4MjMwZTVjOFxyXG4gKiBAcGFyYW0ge0R1bmdlb25TdGF0ZX0gZHVuZ2VvblxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGF0dGFja2VyXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gZGVmZW5kZXJcclxuICogQHBhcmFtIHsqfSBhdHRhY2tUeXBlXHJcbiAqIEBwYXJhbSB7Kn0gbW92ZUNhdGVnb3J5XHJcbiAqIEBwYXJhbSB7Kn0gZGFtYWdlXHJcbiAqIEBwYXJhbSB7Kn0gZGFtYWdlT3V0XHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5mdW5jdGlvbiBjYWxjRGFtYWdlRml4ZWRBcHBseUVmZmVjdHMoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBhdHRhY2tUeXBlLCBtb3ZlQ2F0ZWdvcnksIGRhbWFnZSkge1xyXG4gIC8vIDFcdUZGNUU5OTlcdTMwNjdcdTMwQzhcdTMwRUFcdTMwREZcdTMwRjNcdTMwQjBcclxuICBpZiAoZGFtYWdlIDwgMSkgZGFtYWdlID0gMTtcclxuICBpZiAoOTk5IDwgZGFtYWdlKSBkYW1hZ2UgPSA5OTk7XHJcblxyXG4gIC8vIFx1ODhEQ1x1NkI2M1x1MzA5Mlx1NTNENlx1NUY5N1xyXG4gIGNvbnN0IGVmZmVjdCA9IENhbGNUeXBlQmFzZWREYW1hZ2VFZmZlY3RzKGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgZGFtYWdlLCBhdHRhY2tUeXBlLCBkYW1hZ2VEYXRhLCBmYWxzZSk7XHJcblxyXG4gIC8vIFx1OEEwOFx1N0I5N1xyXG4gIGNvbnN0IGZpeGVkRGFtYWdlID0gTWF0aC5jZWlsKGRhbWFnZSAqIGVmZmVjdC5kYW1hZ2VNdWx0T3V0KTtcclxuICByZXR1cm4gZml4ZWREYW1hZ2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTk3NTlcdTc2ODRcdTU2RkFcdTVCOUFcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdTMwOTJcdThBMDhcdTdCOTdcclxuICogQHBhcmFtIHtEdW5nZW9uU3RhdGV9IGR1bmdlb25cclxuICogQHBhcmFtIHtNb25zdGVyfSBhdHRhY2tlclxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGRlZmVuZGVyXHJcbiAqIEBwYXJhbSB7TW92ZX0gbW92ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gZGFtYWdlXHJcbiAqL1xyXG5mdW5jdGlvbiBzaW11bGF0ZURhbWFnZUNhbGNGaXhlZFN0YXRpYyhkYW1hZ2VEYXRhLCBkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUsIGRhbWFnZSkge1xyXG4gIGNvbnN0IGF0dGFja1R5cGUgPSBhdHRhY2tlci5nZXRNb3ZlVHlwZShtb3ZlLmlkLCBkdW5nZW9uKTtcclxuICBjb25zdCBtb3ZlQ2F0ZWdvcnkgPSBnZXRNb3ZlQ2F0ZWdvcnkobW92ZS5pZCk7XHJcbiAgbGV0IGZpeGVkRGFtYWdlID0gMDtcclxuICBpZiAoZGFtYWdlID4gMCkge1xyXG4gICAgZml4ZWREYW1hZ2UgPSBjYWxjRGFtYWdlRml4ZWQoZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBkYW1hZ2UsIGRhbWFnZURhdGEsIGF0dGFja1R5cGUsIG1vdmVDYXRlZ29yeSwgbW92ZS5pZCk7XHJcbiAgfVxyXG5cclxuICBkYW1hZ2VEYXRhLnR5cGUgPSBhdHRhY2tUeXBlO1xyXG4gIGRhbWFnZURhdGEuY2F0ZWdvcnkgPSBtb3ZlQ2F0ZWdvcnk7XHJcbiAgZGFtYWdlRGF0YS5kYW1hZ2UgPSBmaXhlZERhbWFnZTtcclxuICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc0ZpeGVkRGFtYWdlID0gdHJ1ZTtcclxuXHJcbiAgcmV0dXJuIHJ1bk1vY2tEYW1hZ2VTZXF1ZW5jZShkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUuaWQsIGRhbWFnZURhdGEpO1xyXG59XHJcblxyXG4vKipcclxuICogXHU1NkZBXHU1QjlBXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHUzMDkyXHU4QTA4XHU3Qjk3XHJcbiAqIEBwYXJhbSB7RHVuZ2VvblN0YXRlfSBkdW5nZW9uXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gYXR0YWNrZXJcclxuICogQHBhcmFtIHtNb25zdGVyfSBkZWZlbmRlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gZml4ZWREYW1hZ2VcclxuICogQHBhcmFtIHtEYW1hZ2VEYXRhfSBkYW1hZ2VPdXRcclxuICogQHBhcmFtIHtOdW1iZXJ9IGF0dGFja1R5cGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IG1vdmVDYXRlZ29yeVxyXG4gKi9cclxuZnVuY3Rpb24gY2FsY0RhbWFnZUZpeGVkKGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgZml4ZWREYW1hZ2UsIGRhbWFnZU91dCwgYXR0YWNrVHlwZSwgbW92ZUNhdGVnb3J5LCBtb3ZlSWQpIHtcclxuICAvLyBcdTMwQkZcdTMwQTRcdTMwRDdcdTc2RjhcdTYwMjdcdTMwNkVcdTUzRDZcdTVGOTdcclxuICBjb25zdCB0eXBlTWF0Y2h1cHMgPSBbXHJcbiAgICBnZXRUeXBlTWF0Y2hVcChkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIDAsIGF0dGFja1R5cGUpLFxyXG4gICAgZ2V0VHlwZU1hdGNoVXAoZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCAxLCBhdHRhY2tUeXBlKSxcclxuICBdO1xyXG5cclxuICBkdW5nZW9uLmRhbWFnZUNhbGMubW92ZUluZGl2VHlwZU1hdGNodXBzWzBdID0gdHlwZU1hdGNodXBzWzBdO1xyXG4gIGR1bmdlb24uZGFtYWdlQ2FsYy5tb3ZlSW5kaXZUeXBlTWF0Y2h1cHNbMV0gPSB0eXBlTWF0Y2h1cHNbMV07XHJcbiAgZGFtYWdlT3V0LnR5cGVNYXRjaHVwID0gTWVjaGFuaWNzLlRZUEVfTUFUQ0hVUF9DT01CSU5BVE9SX1RBQkxFW3R5cGVNYXRjaHVwc1swXV1bdHlwZU1hdGNodXBzWzFdXTtcclxuXHJcbiAgLy8gXHU3NkY4XHU2MDI3XHUzMDRDXHU1MkI5XHU2NzlDXHU2MjlDXHU3RkE0XHU0RUU1XHU1OTE2XHUzMDAxXHU5NjMyXHU1RkExXHU1MDc0XHUzMDRDXHUzMDc1XHUzMDU3XHUzMDRFXHUzMDZBXHUzMDdFXHUzMDgyXHUzMDhBXHUzMDAxXHU2NTNCXHU2NDgzXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDRDXHUzMDZBXHUzMDU3XHU0RUU1XHU1OTE2IC0+IHgwXHJcbiAgbGV0IHN1cGVyRWZmZWN0aXZlID0gZGFtYWdlT3V0LnR5cGVNYXRjaHVwID09IGVvcy5NQVRDSFVQX1NVUEVSX0VGRkVDVElWRTtcclxuICBpZiAoIXN1cGVyRWZmZWN0aXZlKSB7XHJcbiAgICBpZiAoZGVmZW5kZXIuYWJpbGl0eUFjdGl2ZURldGFpbHMoMHgzNSwgYXR0YWNrZXIsIHRydWUpICYmIGF0dGFja1R5cGUgIT0gZW9zLlRZUEVfTk9ORSkge1xyXG4gICAgICBmaXhlZERhbWFnZSA9IDA7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzV29uZGVyR3VhcmRBY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBcdTMwNTRcdTMwNDZcdTMwOEZcdTMwOTNcdTg4RENcdTZCNjMgLT4geDEuNVxyXG4gIGlmIChtb3ZlSWQgPT0gMHgxOTUgJiYgYXR0YWNrZXIuaXFTa2lsbEVuYWJsZWQoMHgyZiwgZHVuZ2VvbikpIHtcclxuICAgIGZpeGVkRGFtYWdlICo9IE1hdGguY2VpbChmaXhlZERhbWFnZSAqIE1lY2hhbmljcy5QT1dFUl9QSVRDSEVSX0RBTUFHRV9NVUxUSVBMSUVSKTtcclxuICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzUG93ZXJQaXRjaGVyQWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGxldCByZXNGaXhlZERhbWFnZSA9IE1hdGguY2VpbChmaXhlZERhbWFnZSk7XHJcbiAgaWYgKGZpeGVkRGFtYWdlID09IDApIHJlc0ZpeGVkRGFtYWdlID0gMTtcclxuXHJcbiAgcmV0dXJuIHJlc0ZpeGVkRGFtYWdlO1xyXG59XHJcblxyXG4vKipcclxuICogXHU0RTAwXHU2NDgzXHU1RkM1XHU2QkJBXHU2MjgwXHUzMDRDXHU1NDdEXHU0RTJEXHUzMDU5XHUzMDhCXHUzMDRCXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHJcbiAqIEpQOiAweDIzMEU5RTBcclxuICogQHBhcmFtIHtNb25zdGVyfSBhdHRhY2tlclxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGRlZmVuZGVyXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhdHRhY2tUeXBlXHJcbiAqL1xyXG5mdW5jdGlvbiBjaGVja01vdmVIaXRPaGtvKGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgYXR0YWNrVHlwZSkge1xyXG4gIC8vIFx1MzA0RFx1MzA4Mlx1MzA2M1x1MzA1Rlx1MzA3RVx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlxyXG4gIGlmIChcclxuICAgICFhdHRhY2tlci5zY3JhcHB5U2hvdWxkQWN0aXZhdGUoZGVmZW5kZXIsIGF0dGFja1R5cGUsIGR1bmdlb24pICYmXHJcbiAgICBNZWNoYW5pY3MudHlwZUluZWZmZWN0aXZlQWdhaW5zdEdob3N0KGF0dGFja1R5cGUpICYmXHJcbiAgICAoZGVmZW5kZXIuZ2hvc3RJbW11bml0eUFjdGl2ZShhdHRhY2tlciwgMCkgfHwgZGVmZW5kZXIuZ2hvc3RJbW11bml0eUFjdGl2ZShhdHRhY2tlciwgMSkpXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBcdTMwQkZcdTMwQTRcdTMwRDdcdTc2RjhcdTYwMjdcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcclxuICAvLyBcdTUyQjlcdTY3OUNcdTMwNENcdTMwNkFcdTMwNDQgPT4gZmFsc2UsIFx1MzA1RFx1MzA4Q1x1NEVFNVx1NTkxNiA9PiB0cnVlXHJcbiAgbGV0IGkgPSAwO1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBpZiAoMSA8IGkpIHJldHVybiB0cnVlO1xyXG4gICAgY29uc3QgbWF0Y2hVcCA9IGdldFR5cGVNYXRjaFVwKGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgaSwgYXR0YWNrVHlwZSk7XHJcbiAgICBpZiAobWF0Y2hVcCA9PSAwKSBicmVhaztcclxuICAgIGkrKztcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHUzMDkyXHU0RTBFXHUzMDQ4XHUzMDZBXHUzMDQ0XHU2MjgwXHUzMDRCXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGIChcdTU5MDlcdTUzMTZcdTYyODAgb3IgXHUzMDQyXHUzMDY2XHUzMDdGXHUzMDZBXHUzMDUyLCBcdTMwNEFcdTMwNDRcdTMwNDZcdTMwNjEsIFx1MzA0Qlx1MzA0NFx1MzA4QVx1MzA0RCwgXHUzMEFCXHUzMEE2XHUzMEYzXHUzMEJGXHUzMEZDLCBcdTMwNENcdTMwN0VcdTMwOTMsIFx1MzA1OFx1MzA3MFx1MzA0RiwgXHUzMDYwXHUzMDQ0XHUzMDcwXHUzMDRGXHUzMDZGXHUzMDY0LCBcdTMwNkZcdTMwNUZcdTMwNERcdTMwNEFcdTMwNjhcdTMwNTksIFx1MzA3RVx1MzA0RFx1MzA2NFx1MzA0RiwgXHUzMERGXHUzMEU5XHUzMEZDXHUzMEIzXHUzMEZDXHUzMEM4LCBcdTMwRUFcdTMwRDlcdTMwRjNcdTMwQjgsIFx1MzA4Nlx1MzA0RFx1MzA2QVx1MzA2MFx1MzA4QywgXHUzMDU3XHUzMDYzXHUzMDdBXHUzMDRDXHUzMDQ4XHUzMDU3LCBcdTMwRTFcdTMwQkZcdTMwRUJcdTMwRDBcdTMwRkNcdTMwQjlcdTMwQzgpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtb3ZlSWRcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIGNoZWNrTm9EYW1hZ2VNb3ZlKG1vdmVJZCkge1xyXG4gIGNvbnN0IG1vdmVDYXRlZ29yeSA9IGdldE1vdmVDYXRlZ29yeShtb3ZlSWQpO1xyXG4gIGNvbnN0IG5vRGFtYWdlTW92ZSA9IFsweDcsIDB4MjYsIDB4MzIsIDB4MzMsIDB4M2QsIDB4N2IsIDB4OWIsIDB4ZjksIDB4MTMxLCAweDEzYywgMHgxNTQsIDB4MTY3LCAweDFkOCwgMHgyMTRdO1xyXG4gIHJldHVybiBtb3ZlQ2F0ZWdvcnkgPT0gZW9zLkNBVEVHT1JZX1NUQVRVUyB8fCBub0RhbWFnZU1vdmUuaW5jbHVkZXMobW92ZS5pZCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdTMwOTJcdTRFMEVcdTMwNDhcdTMwNkFcdTMwNDRcdTYyODBcdTMwOTJcdTVCOUZcdTg4NEMgKFx1NTQ3RFx1NEUyRFx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlx1MzA2RVx1MzA3Rlx1ODg0Q1x1MzA0Nlx1MzAwMVx1NTQ3RFx1NEUyRFx1NTAyNDFcdTMwNkVcdTMwN0ZcdTRGN0ZcdTc1MjgpXHJcbiAqIEBwYXJhbSB7RGFtYWdlRGF0YX0gZGFtYWdlRGF0YVxyXG4gKiBAcGFyYW0ge0R1bmdlb25TdGF0ZX0gZHVuZ2VvblxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGF0dGFja2VyXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gZGVmZW5kZXJcclxuICogQHBhcmFtIHtNb3ZlfSBtb3ZlXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5mdW5jdGlvbiBzaW11bGF0ZURhbWFnZUNhbGNTdGF0dXNNb3ZlcyhkYW1hZ2VEYXRhLCBkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUpIHtcclxuICBjb25zdCBtb3ZlQ2F0ZWdvcnkgPSBnZXRNb3ZlQ2F0ZWdvcnkobW92ZS5pZCk7XHJcbiAgY29uc3QgbW92ZVR5cGUgPSBhdHRhY2tlci5nZXRNb3ZlVHlwZShtb3ZlLmlkLCBkdW5nZW9uKTtcclxuICBkYW1hZ2VEYXRhLmNhdGVnb3J5ID0gbW92ZUNhdGVnb3J5O1xyXG4gIGRhbWFnZURhdGEudHlwZSA9IG1vdmVUeXBlO1xyXG4gIE1vdmVIaXRDaGVjayhkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUuaWQsIGZhbHNlLCBmYWxzZSk7XHJcbiAgcmV0dXJuIDA7XHJcbn1cclxuIiwgImltcG9ydCAqIGFzIGVvcyBmcm9tICcuL2NvbnN0LmpzJztcclxuaW1wb3J0ICogYXMgTWVjaGFuaWNzIGZyb20gJy4vbWVjaGFuaWNzLmpzJztcclxuaW1wb3J0ICogYXMgcG9rZVBhcmFtIGZyb20gJy4uL3Bva2VfcGFyYW0uanMnO1xyXG5pbXBvcnQgeyBSdW5DYWxjRGFtYWdlIH0gZnJvbSAnLi9jYWxjLmpzJztcclxuaW1wb3J0IHsgTW9uc3RlciwgRHVuZ2VvblN0YXRlLCBEYW1hZ2VEYXRhLCBNb3ZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuanMnO1xyXG5cclxuY29uc3QgZmlnaHRlckNsYXNzTmFtZXMgPSBbJ2F0dGFja2VyJywgJ2RlZmVuZGVyJ107XHJcbmNvbnN0IG1vdmVDYXRlZ29yeU5hbWVzID0gWydcdTcyNjlcdTc0MDYnLCAnXHU3Mjc5XHU2QjhBJywgJ1x1NTkwOVx1NTMxNiddO1xyXG5jb25zdCBjaG9pY2VzSW5zdGFuY2VzID0gW107XHJcblxyXG4vKipcclxuICogbWVtbzpcclxuICogXHUzMEZCXHUzMEVDXHUzMDc5XHUzMEVCXHUzMDZFXHU2MjQwXHUzMDZCXHUzMEQ3XHUzMEU5XHUzMEI5L1x1MzBERVx1MzBBNFx1MzBDQVx1MzBCOVx1MzBEQ1x1MzBCRlx1MzBGM1x1OEZGRFx1NTJBMFx1MzA1N1x1MzA2Nlx1MzBFQ1x1MzA3OVx1MzBFQlx1MzA2RVx1NEUwQVx1MzA1Mlx1NEUwQlx1MzA1Mlx1MzA2N1x1MzA0RFx1MzA4Qlx1MzA4OFx1MzA0Nlx1MzA2Qlx1MzA1N1x1MzA1Rlx1MzA0NFxyXG4gKiAgIFx1NjIxMFx1OTU3N1x1NzM4N1x1NTNDMlx1NzE2N1x1MzA1N1x1MzA2Nlx1MzA1RFx1MzA2RVx1NTIwNlx1MzA2MFx1MzA1MVx1MzBCOVx1MzBDNlx1MzBGQ1x1MzBCRlx1MzBCOVx1MzA5Mlx1NTkwOVx1NTJENVx1MzA1NVx1MzA1Qlx1MzA4QlxyXG4gKi9cclxuXHJcbi8vIFx1ODk4MVx1N0QyMFx1MzBBRFx1MzBFM1x1MzBDM1x1MzBCN1x1MzBFNVxyXG5sZXQgbW92ZUluZm9FbGVtZW50ID0gbnVsbDtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgbW92ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW92ZScpO1xyXG5cclxuICAvLyB0b29sdGlwXHU1MjFEXHU2NzFGXHU1MzE2XHJcbiAgY29uc3QgdG9vbHRpcFRyaWdnZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYnMtdG9nZ2xlPVwidG9vbHRpcFwiXScpO1xyXG4gIGNvbnN0IHRvb2x0aXBMaXN0ID0gWy4uLnRvb2x0aXBUcmlnZ2VyTGlzdF0ubWFwKCh0b29sdGlwVHJpZ2dlckVsKSA9PiBuZXcgYm9vdHN0cmFwLlRvb2x0aXAodG9vbHRpcFRyaWdnZXJFbCkpO1xyXG4gIC8vIEpTT05cdThBQURcdThGQkNcclxuICBhd2FpdCBmZXRjaEpzb25EYXRhKCk7XHJcblxyXG4gIC8vIGNob2ljZXMuanMgXHU1MjFEXHU2NzFGXHU1MzE2XHJcbiAgSW5pdENob2ljZXMoKTtcclxuXHJcbiAgLy8gXHU4OTgxXHU3RDIwXHUzMEFEXHUzMEUzXHUzMEMzXHUzMEI3XHUzMEU1XHJcbiAgbW92ZUluZm9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmUtaW5mbycpO1xyXG5cclxuICAvLyBcdTMwQTRcdTMwRDlcdTMwRjNcdTMwQzhcdTc2N0JcdTkzMzIgKFx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1OEEwOFx1N0I5N1x1NTFFNlx1NzQwNilcclxuICBjb25zdCBkYW1hZ2VDYWxjSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcjZGFtYWdlLWNhbGMgaW5wdXQ6bm90KFt0eXBlPVwic2VhcmNoXCJdKSwgI2RhbWFnZS1jYWxjIHNlbGVjdCcsXHJcbiAgKTtcclxuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZGFtYWdlQ2FsY0lucHV0RWxlbWVudCkge1xyXG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xyXG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAvLyBpbnB1dFx1MzA2RVx1NEUwQVx1OTY1MFx1NEUwQlx1OTY1MFx1MzA5Mlx1OEQ4NVx1MzA0OFx1MzA4Qlx1NTAyNFx1MzA5Mlx1NTE2NVx1NTI5Qlx1MzA2N1x1MzA0RFx1MzA2QVx1MzA0NFx1MzA4OFx1MzA0Nlx1MzA2Qlx1MzA1OVx1MzA4QlxyXG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgIGNvbnN0IG1pbiA9IE51bWJlcih0aGlzLm1pbik7XHJcbiAgICAgICAgICBjb25zdCBtYXggPSBOdW1iZXIodGhpcy5tYXgpO1xyXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIodGhpcy52YWx1ZSk7XHJcbiAgICAgICAgICBpZiAoaXNOYU4odmFsdWUpKSByZXR1cm47XHJcbiAgICAgICAgICBpZiAodmFsdWUgPCBtaW4pIHRoaXMudmFsdWUgPSBtaW47XHJcbiAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IG1heCkgdGhpcy52YWx1ZSA9IG1heDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU4QTA4XHU3Qjk3XHJcbiAgICAgICAgQ2FsY3VsYXRpb24oKTtcclxuICAgICAgICAvLyBcdTYyODBcdTYwQzVcdTU4MzFcdTY2RjRcdTY1QjAgKFx1NjY0Mlx1OTVDN1x1MzA2RVx1NUEwMVx1NTI5Qlx1OTA2OVx1NzUyOClcclxuICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSAnZGFtYWdlLXN1cHBvcnQtdGQnKSB7XHJcbiAgICAgICAgICBBcHBseU1vdmVJbmZvKG1vdmVFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdTRUxFQ1QnKSB7XHJcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAvLyBcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNcdTU5MDlcdTY2RjRcdTY2NDJcdTMwMDFcdTMwQkZcdTMwQTRcdTMwRDdcdTMwRkJcdTcyNzlcdTYwMjdcdTMwRkJcdTYwMjdcdTUyMjVcdTMwOTJcdTMwQkJcdTMwQzNcdTMwQzhcclxuICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3Bva2Vtb24nKSkge1xyXG4gICAgICAgICAgQXBwbHlQb2tlbW9uSW5mbyhlLnRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1OEEwOFx1N0I5N1xyXG4gICAgICAgIENhbGN1bGF0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gXHU2MjgwXHU1OTA5XHU2NkY0XHU2NjQyXHUzMDAxXHU2MjgwXHU2MEM1XHU1ODMxXHU2NkY0XHU2NUIwXHJcbiAgbW92ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIEFwcGx5TW92ZUluZm8oZS50YXJnZXQpO1xyXG4gIH0pO1xyXG4gIC8vIFx1MzBCOVx1MzBDNlx1MzBGQ1x1MzBCRlx1MzBCOVx1OTA2OVx1NzUyOFx1MzBEQ1x1MzBCRlx1MzBGM1x1MzA2N1x1NzNGRVx1NTcyOFx1MzA2RVx1MzBFQ1x1MzBEOVx1MzBFQlx1MzA2RVx1MzBCOVx1MzBDNlx1MzBGQ1x1MzBCRlx1MzBCOVx1MzA5Mlx1MzBCQlx1MzBDM1x1MzBDOFxyXG4gIGNvbnN0IGFwcGx5U3RhdHVzQnRuRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZGFtYWdlLWNhbGMgLmJ0bi1hcHBseS1zdGF0dXMnKTtcclxuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYXBwbHlTdGF0dXNCdG5FbGVtZW50cykge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIExldmVsQXBwbHlTdGF0dXMoZS50YXJnZXQsIHRydWUpOyAvLyBcdTMwRENcdTMwQkZcdTMwRjNcdTYyQkNcdTRFMEJcdTY2NDJcdTMwNkZcdTMwQzBcdTMwRTFcdThBMDhcdTMwOTJcdTg4NENcdTMwNDZcclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyBcdTRFQTRcdTYzREJcdTMwRENcdTMwQkZcdTMwRjNcdTMwNjdcdTY1M0JcdTY0ODNcdTUwNzRcdTMwNjhcdTk2MzJcdTVGQTFcdTUwNzRcdTMwOTJcdTRFQTRcdTYzREJcdTMwNTlcdTMwOEJcclxuICBjb25zdCBmaWdodGVyU3dhcEJ0bkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2RhbWFnZS1jYWxjIC5idG4tZmlnaHRlci1zd2FwJyk7XHJcbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIGZpZ2h0ZXJTd2FwQnRuRWxlbWVudHMpIHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBTd2FwTW9uc3RlcigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vIFx1MzBFMlx1MzBGQ1x1MzBDMFx1MzBFQlx1OTc1RVx1ODg2OFx1NzkzQVx1NjY0Mlx1MzA2RVx1MzBBNFx1MzBEOVx1MzBGM1x1MzBDOFxyXG4gIGNvbnN0IG1vZGFsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG4gIG1vZGFsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdoaWRlLmJzLm1vZGFsJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgfSk7XHJcbiAgLy8gXHUzMERBXHUzMEZDXHUzMEI4XHUzMDZFXHU0RTAwXHU3NTZBXHU0RTBBXHUzMDc4XHUzMEI4XHUzMEUzXHUzMEYzXHUzMEQ3XHJcbiAgY29uc3QgdG9wQnRuRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3AtYnRuJyk7XHJcbiAgdG9wQnRuRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBcdTYwQzVcdTU4MzFcdTUyMURcdTY3MUZcdTUzMTZcclxuICBBcHBseU1vdmVJbmZvKG1vdmVFbGVtZW50KTtcclxuICBjb25zdCBwb2tlbW9uRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZGFtYWdlLWNhbGMgc2VsZWN0LnBva2Vtb24nKTtcclxuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgcG9rZW1vbkVsZW1lbnRzKSBBcHBseVBva2Vtb25JbmZvKGVsZW1lbnQsIGZhbHNlKTtcclxuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYXBwbHlTdGF0dXNCdG5FbGVtZW50cykgTGV2ZWxBcHBseVN0YXR1cyhlbGVtZW50LCBmYWxzZSk7XHJcblxyXG4gIGF3YWl0IENhbGN1bGF0aW9uKCk7IC8vIFx1OEEwOFx1N0I5N1xyXG5cclxuICAvLyBcdTMwRURcdTMwRkNcdTMwQzdcdTMwQTNcdTMwRjNcdTMwQjBcdTg5RTNcdTk2NjRcclxuICBoaWRlTG9hZGluZygpO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBDaG9pY2VzLmpzIFx1NTIxRFx1NjcxRlx1NTMxNiAoXHUzMEE0XHUzMEYzXHUzMEI5XHUzMEJGXHUzMEYzXHUzMEI5XHUzMDZFXHUzMEJCXHUzMEMzXHUzMEM4KVxyXG4gKi9cclxuZnVuY3Rpb24gSW5pdENob2ljZXMoKSB7XHJcbiAgY29uc3QgY2hvaWNlc09wdGlvbnNNb3ZlID0ge1xyXG4gICAgLi4uY2hvaWNlc09wdGlvbnMsXHJcbiAgICBjYWxsYmFja09uQ3JlYXRlVGVtcGxhdGVzOiBmdW5jdGlvbiAodGVtcGxhdGUsIGVzY2FwZUZvclRlbXBsYXRlLCBnZXRDbGFzc05hbWVzKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY2hvaWNlOiAoeyBjbGFzc05hbWVzIH0sIGRhdGEpID0+IHtcclxuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZShgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtnZXRDbGFzc05hbWVzKGNsYXNzTmFtZXMuaXRlbSkuam9pbignICcpfSAke2dldENsYXNzTmFtZXMoY2xhc3NOYW1lcy5pdGVtQ2hvaWNlKS5qb2luKCcgJyl9ICR7Z2V0Q2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgZGF0YS5kaXNhYmxlZCA/IGNsYXNzTmFtZXMuaXRlbURpc2FibGVkIDogY2xhc3NOYW1lcy5pdGVtU2VsZWN0YWJsZSxcclxuICAgICAgICAgICkuam9pbignICcpfVwiIGRhdGEtY2hvaWNlICR7XHJcbiAgICAgICAgICAgIGRhdGEuZGlzYWJsZWQgPyAnZGF0YS1jaG9pY2UtZGlzYWJsZWQgYXJpYS1kaXNhYmxlZD1cInRydWVcIicgOiAnZGF0YS1jaG9pY2Utc2VsZWN0YWJsZSdcclxuICAgICAgICAgIH0gZGF0YS1pZD1cIiR7ZGF0YS5pZH1cIiBkYXRhLXZhbHVlPVwiJHtlc2NhcGVGb3JUZW1wbGF0ZShkYXRhLnZhbHVlKX1cIiAke1xyXG4gICAgICAgICAgICBkYXRhLmdyb3VwSWQgPiAwID8gJ3JvbGU9XCJ0cmVlaXRlbVwiJyA6ICdyb2xlPVwib3B0aW9uXCInXHJcbiAgICAgICAgICB9IGRhdGEtZ3JvdXA9XCIke2RhdGEuZ3JvdXAubGFiZWx9XCI+XHJcbiAgICAgICAgICAgIDxzcGFuPiR7ZGF0YS5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIGApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNob2ljZXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNkYW1hZ2UtY2FsYyBzZWxlY3RbZGF0YS1jaG9pY2VzXScpO1xyXG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBjaG9pY2VzRWxlbWVudHMpIHtcclxuICAgIGlmIChlbGVtZW50LmlkID09ICdtb3ZlJykge1xyXG4gICAgICBjaG9pY2VzSW5zdGFuY2VzW2VsZW1lbnQuaWRdID0gbmV3IENob2ljZXMoZWxlbWVudCwgY2hvaWNlc09wdGlvbnNNb3ZlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNob2ljZXNJbnN0YW5jZXNbZWxlbWVudC5pZF0gPSBuZXcgQ2hvaWNlcyhlbGVtZW50LCBjaG9pY2VzT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHU2MjgwXHU2MEM1XHU1ODMxXHU2NkY0XHU2NUIwXHJcbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0XHJcbiAqL1xyXG5mdW5jdGlvbiBBcHBseU1vdmVJbmZvKHRhcmdldCkge1xyXG4gIGlmICghTW92ZURhdGEpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ01vdmVEYXRhIG5vdCBmb3VuZCcpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoIW1vdmVJbmZvRWxlbWVudCkge1xyXG4gICAgY29uc29sZS5lcnJvcignbW92ZUluZm9FbGVtZW50IG5vdCBmb3VuZCcpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbW92ZSA9IE1vdmVEYXRhW3RhcmdldC52YWx1ZV07XHJcbiAgbGV0IHBvd2VyID0gbW92ZS5Qb3dlcjtcclxuXHJcbiAgLy8gb3B0aW9uXHU4OTgxXHU3RDIwXHUzMDZCXHU1QTAxXHU1MjlCXHUzMDRDXHU1QjlBXHU3RkE5XHUzMDU1XHUzMDhDXHUzMDY2XHUzMDQ0XHUzMDhCXHU1ODM0XHU1NDA4XHUzMDAxXHUzMDVEXHUzMDhDXHUzMDZCXHU0RTBBXHU2NkY4XHUzMDREXHUzMDU5XHUzMDhCXHJcbiAgLy8gKFx1NjI5NVx1NjRGMlx1MzBBMlx1MzBBNFx1MzBDNlx1MzBFMFx1MzA2RVx1NUJGRVx1NUZEQylcclxuICBjb25zdCBvcHRpb24gPSB0YXJnZXQub3B0aW9uc1t0YXJnZXQuc2VsZWN0ZWRJbmRleF07XHJcbiAgaWYgKCdwb3dlcicgaW4gb3B0aW9uLmRhdGFzZXQpIHBvd2VyID0gb3B0aW9uLmRhdGFzZXRbJ3Bvd2VyJ107XHJcblxyXG4gIC8vIFx1NjY0Mlx1OTVDN1xyXG4gIGNvbnN0IHRkQmFzZVBvd2VyID0gTWVjaGFuaWNzLlRJTUVfREFSS05FU1NfQkFTRV9QT1dFUi5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09IG1vdmUuSWQpO1xyXG4gIGNvbnN0IGRhbWFnZVN1cHBvcnRUZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGFtYWdlLXN1cHBvcnQtdGQnKTtcclxuICBpZiAoZGFtYWdlU3VwcG9ydFRkRWxlbWVudC5jaGVja2VkICYmIHRkQmFzZVBvd2VyICE9IHVuZGVmaW5lZCkgcG93ZXIgPSB0ZEJhc2VQb3dlci5wb3dlcjtcclxuXHJcbiAgY29uc3QgbW92ZVBvd2VyRWxlbWVudCA9IG1vdmVJbmZvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjbW92ZS1wb3dlcicpO1xyXG4gIGNvbnN0IG1vdmVUeXBlRWxlbWVudCA9IG1vdmVJbmZvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjbW92ZS10eXBlJyk7XHJcbiAgY29uc3QgbW92ZUNhdGVnb3J5RWxlbWVudCA9IG1vdmVJbmZvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjbW92ZS1jYXRlZ29yeScpO1xyXG4gIGNvbnN0IG1vdmVQUEVsZW1lbnQgPSBtb3ZlSW5mb0VsZW1lbnQucXVlcnlTZWxlY3RvcignI21vdmUtcHAnKTtcclxuICBjb25zdCBtb3ZlQWNjdXJhY3kxRWxlbWVudCA9IG1vdmVJbmZvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjbW92ZS1hY2N1cmFjeS0xJyk7XHJcbiAgY29uc3QgbW92ZUFjY3VyYWN5MkVsZW1lbnQgPSBtb3ZlSW5mb0VsZW1lbnQucXVlcnlTZWxlY3RvcignI21vdmUtYWNjdXJhY3ktMicpO1xyXG4gIGNvbnN0IG1vdmVBY2N1cmFjeUJhc2VFbGVtZW50ID0gbW92ZUluZm9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3ZlLWFjY3VyYWN5LWJhc2UnKTtcclxuICBjb25zdCBtb3ZlU3RyaWtlc0VsZW1lbnQgPSBtb3ZlSW5mb0VsZW1lbnQucXVlcnlTZWxlY3RvcignI21vdmUtc3RyaWtlcycpO1xyXG4gIGNvbnN0IG1vdmVDcml0aWNhbEVsZW1lbnQgPSBtb3ZlSW5mb0VsZW1lbnQucXVlcnlTZWxlY3RvcignI21vdmUtY3JpdGljYWwnKTtcclxuXHJcbiAgbW92ZVBvd2VyRWxlbWVudC5pbm5lckhUTUwgPVxyXG4gICAgbW92ZS5DYXRlZ29yeSAhPSAyIHx8IG1vdmUucG93ZXIgPT0gMCA/IHBvd2VyIDogJzxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5cdTk3NUVcdTVCRkVcdTVGREM8L3NwYW4+JztcclxuICBtb3ZlVHlwZUVsZW1lbnQudGV4dENvbnRlbnQgPSBUeXBlRGF0YVttb3ZlLlR5cGVdLk5hbWU7XHJcbiAgbW92ZUNhdGVnb3J5RWxlbWVudC50ZXh0Q29udGVudCA9IG1vdmVDYXRlZ29yeU5hbWVzW21vdmUuQ2F0ZWdvcnldO1xyXG4gIG1vdmVQUEVsZW1lbnQudGV4dENvbnRlbnQgPSBtb3ZlLlBQOyAvLyBcdTMwNUZcdTMwNTJcdTMwNDRcdTMwNkZcdTgwMDNcdTYxNkVcdTMwNTdcdTMwNkFcdTMwNDRcdUZGMUZcclxuICBtb3ZlQWNjdXJhY3kxRWxlbWVudC50ZXh0Q29udGVudCA9IG1vdmUuQWNjdXJhY3kxO1xyXG4gIG1vdmVBY2N1cmFjeTJFbGVtZW50LnRleHRDb250ZW50ID0gbW92ZS5BY2N1cmFjeTI7XHJcbiAgbW92ZUFjY3VyYWN5QmFzZUVsZW1lbnQudGV4dENvbnRlbnQgPVxyXG4gICAgZ2V0TW92ZUJhc2VBY2N1cmFjeShtb3ZlLkFjY3VyYWN5MSwgbW92ZS5BY2N1cmFjeTIsIG1vdmUuR2luc2VuZykudG9GaXhlZCgyKSArICclJztcclxuICBtb3ZlU3RyaWtlc0VsZW1lbnQudGV4dENvbnRlbnQgPSBtb3ZlLk1heEhpdDtcclxuICBtb3ZlQ3JpdGljYWxFbGVtZW50LnRleHRDb250ZW50ID0gbW92ZS5Dcml0aWNhbCArICclJztcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1NjBDNVx1NTgzMVx1NjZGNFx1NjVCMFxyXG4gKiAoXHU0RTNCXHUzMDZCXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHU1OTA5XHU2NkY0XHU2NjQyXHUzMDZCXHU1QjlGXHU4ODRDKVxyXG4gKiBAcGFyYW0geyp9IHRhcmdldFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZnVuY3Rpb24gQXBwbHlQb2tlbW9uSW5mbyh0YXJnZXQsIGNhbGMpIHtcclxuICBpZiAoIVBva2Vtb25EYXRhKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdQb2tlbW9uRGF0YSBub3QgZm91bmQnKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBva2Vtb24gPSBQb2tlbW9uRGF0YVt0YXJnZXQudmFsdWVdO1xyXG4gIGNvbnN0IGZpZ2h0ZXIgPSBnZXRGaWdodGVyRWxlbWVudCh0YXJnZXQpO1xyXG4gIGNvbnN0IGZpZ2h0ZXJOYW1lID0gZ2V0RmlnaHRlclR5cGUodGFyZ2V0KTtcclxuXHJcbiAgaWYgKGZpZ2h0ZXJOYW1lKSB7XHJcbiAgICAvLyBcdTMwQkZcdTMwQTRcdTMwRDcxXHJcbiAgICBjaG9pY2VzSW5zdGFuY2VzW2B0eXBlLTEtJHtmaWdodGVyTmFtZX1gXS5zZXRDaG9pY2VCeVZhbHVlKGAke3Bva2Vtb24uVHlwZTF9YCk7XHJcbiAgICAvLyBcdTMwQkZcdTMwQTRcdTMwRDcyXHJcbiAgICBjaG9pY2VzSW5zdGFuY2VzW2B0eXBlLTItJHtmaWdodGVyTmFtZX1gXS5zZXRDaG9pY2VCeVZhbHVlKGAke3Bva2Vtb24uVHlwZTJ9YCk7XHJcbiAgICAvLyBcdTcyNzlcdTYwMjcxXHJcbiAgICBjaG9pY2VzSW5zdGFuY2VzW2BhYmlsaXR5LTEtJHtmaWdodGVyTmFtZX1gXS5zZXRDaG9pY2VCeVZhbHVlKGAke3Bva2Vtb24uQWJpbGl0eTF9YCk7XHJcbiAgICAvLyBcdTcyNzlcdTYwMjcyXHJcbiAgICBjaG9pY2VzSW5zdGFuY2VzW2BhYmlsaXR5LTItJHtmaWdodGVyTmFtZX1gXS5zZXRDaG9pY2VCeVZhbHVlKGAke3Bva2Vtb24uQWJpbGl0eTJ9YCk7XHJcbiAgICAvLyBcdTYwMjdcdTUyMjVcclxuICAgIEFwcGx5R2VuZGVyQ29udHJvbChmaWdodGVyTmFtZSwgdGFyZ2V0LnZhbHVlLCAtMSwgY2FsYyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMDRDXHU2MzAxXHUzMDY0XHU2MDI3XHU1MjI1XHUzMDRCXHUzMDg5XHUzMEM2XHUzMEFEXHUzMEI5XHUzMEM4XHUzMDY4XHU1MDI0XHUzMDkyXHU1OTA5XHU2NkY0XHUzMDU3XHUzMDAxXHU5MDc4XHU2MjlFXHUzMDU5XHUzMDhCXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWdodGVyTmFtZSBcdTY5Q0JcdTkwMjBcdTRGNTNcdTMwQUZcdTMwRTlcdTMwQjlcdTU0MEQgKGF0dGFja2VyLCBkZWZlbmRlcilcclxuICogQHBhcmFtIHtOdW1iZXJ9IHBva2Vtb25JZCBcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNJRFxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2dlbmRlcklkPS0xXSBcdTkwNzhcdTYyOUVcdTMwNTlcdTMwOEJcdTYwMjdcdTUyMjVJRCAoXHU2NzJBXHU2MzA3XHU1QjlBXHUzMDZFXHU1ODM0XHU1NDA4XHU5MDc4XHU2MjlFXHU1MUU2XHU3NDA2XHUzMDkyXHUzMEI5XHUzMEFEXHUzMEMzXHUzMEQ3KVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtjYWxjPXRydWVdIFx1N0JDNFx1NTZGMlx1NTkxNlx1MzA2RVx1NjAyN1x1NTIyNVx1MzA0Qlx1MzA4OVx1NTkwOVx1NjZGNFx1MzA1NVx1MzA4Q1x1MzA1Rlx1NjY0Mlx1MzA2Qlx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1NTE4RFx1OEEwOFx1N0I5N1x1MzA5Mlx1ODg0Q1x1MzA0Nlx1MzA0QlxyXG4gKi9cclxuZnVuY3Rpb24gQXBwbHlHZW5kZXJDb250cm9sKGZpZ2h0ZXJOYW1lLCBwb2tlbW9uSWQsIGdlbmRlcklkID0gLTEsIGNhbGMgPSB0cnVlKSB7XHJcbiAgaWYgKCFQb2tlbW9uRGF0YSkge1xyXG4gICAgY29uc29sZS5lcnJvcignUG9rZW1vbkRhdGEgbm90IGZvdW5kJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBwb2tlbW9uID0gUG9rZW1vbkRhdGFbcG9rZW1vbklkXTtcclxuICBjb25zdCBmaWdodGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZmlnaHRlck5hbWV9YCk7XHJcbiAgY29uc3QgZ2VuZGVyRWxlbWVudHMgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3JBbGwoYCNnZW5kZXItJHtmaWdodGVyTmFtZX0tMSwgI2dlbmRlci0ke2ZpZ2h0ZXJOYW1lfS0yYCk7XHJcbiAgY29uc3QgZ2VuZGVyTGFiZWxFbGVtZW50cyA9IGZpZ2h0ZXIucXVlcnlTZWxlY3RvckFsbChcclxuICAgIGBsYWJlbFtmb3I9XCJnZW5kZXItJHtmaWdodGVyTmFtZX0tMVwiXSwgbGFiZWxbZm9yPVwiZ2VuZGVyLSR7ZmlnaHRlck5hbWV9LTJcIl1gLFxyXG4gICk7XHJcblxyXG4gIGxldCBjaGFuZ2VkID0gZmFsc2U7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgIGlmIChwb2tlbW9uLkdlbmRlcnMubGVuZ3RoID4gaSkge1xyXG4gICAgICBjb25zdCBiYXNlR2VuZGVyVmFsdWUgPSBnZW5kZXJFbGVtZW50c1tpXS52YWx1ZTtcclxuICAgICAgLy8gXHU2MDI3XHU1MjI1XHUzMDkyXHUzMEJCXHUzMEMzXHUzMEM4XHJcbiAgICAgIGdlbmRlckVsZW1lbnRzW2ldLnZhbHVlID0gcG9rZW1vbi5HZW5kZXJzW2ldO1xyXG4gICAgICBnZW5kZXJFbGVtZW50c1tpXS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICBnZW5kZXJMYWJlbEVsZW1lbnRzW2ldLnRleHRDb250ZW50ID0gcG9rZVBhcmFtLnBva2VHZW5kZXJbcG9rZW1vbi5HZW5kZXJzW2ldXS5uYW1lO1xyXG4gICAgICBpZiAoZ2VuZGVySWQgPiAwICYmIHBva2Vtb24uR2VuZGVyc1tpXSA9PSBnZW5kZXJJZCkge1xyXG4gICAgICAgIGdlbmRlckVsZW1lbnRzW2ldLmNoZWNrZWQgPSB0cnVlOyAvLyBcdTRFMDBcdTgxRjRcdTMwNTlcdTMwOEJcdTYwMjdcdTUyMjVcdTMwOTJcdTkwNzhcdTYyOUVcdTMwNTlcdTMwOEJcclxuICAgICAgfVxyXG4gICAgICAvLyBcdTUyMURcdTU2REUodmFsdWU9J29uJylcdTRFRTVcdTU5MTZcdTMwMDFcdTMwNEJcdTMwNjRcdTYwMjdcdTUyMjVcdTMwNkVcdTUwMjRcdTMwNkJcdTU5MDlcdTY2RjRcdTMwNENcdTMwNDJcdTMwOEJcclxuICAgICAgaWYgKGJhc2VHZW5kZXJWYWx1ZS52YWx1ZSAhPSAnb24nICYmIGJhc2VHZW5kZXJWYWx1ZSAhPSBwb2tlbW9uLkdlbmRlcnNbaV0pIHtcclxuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gXHU2MDI3XHU1MjI1XHUzMDkyXHU5MDc4XHU2MjlFXHUzMDY3XHUzMDREXHUzMDZBXHUzMDQ0XHUzMDg4XHUzMDQ2XHUzMDZCXHUzMDU5XHUzMDhCXHJcbiAgICAgIGdlbmRlckVsZW1lbnRzW2ldLnZhbHVlID0gLTE7XHJcbiAgICAgIGdlbmRlckVsZW1lbnRzW2ldLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgZ2VuZGVyTGFiZWxFbGVtZW50c1tpXS50ZXh0Q29udGVudCA9ICdcdTAwRDcnO1xyXG4gICAgICBpZiAoZ2VuZGVyRWxlbWVudHNbaV0uY2hlY2tlZCkge1xyXG4gICAgICAgIGdlbmRlckVsZW1lbnRzW2ldLmNoZWNrZWQgPSBmYWxzZTsgLy8gXHU2MDI3XHU1MjI1XHUzMDZFXHU3QkM0XHU1NkYyXHU1OTE2XHUzMDZBXHUzMDg5XHU5MDc4XHU2MjlFXHUzMDkyXHU1OTE2XHUzMDU5XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGkgPiAwKSB7XHJcbiAgICAgICAgZ2VuZGVyRWxlbWVudHNbaSAtIDFdLmNoZWNrZWQgPSB0cnVlOyAvLyAxXHUzMDY0XHU1MjREXHUzMDZFXHU2MDI3XHU1MjI1XHUzMDkyXHU5MDc4XHU2MjlFXHJcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaWYgKGNoYW5nZWQgJiYgY2FsYykge1xyXG4gICAgQ2FsY3VsYXRpb24oKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTczRkVcdTU3MjhcdTMwRUNcdTMwRDlcdTMwRUJcdTMwNkVcdTMwQjlcdTMwQzZcdTMwRkNcdTMwQkZcdTMwQjlcdTMwOTJcdTkwNjlcdTc1MjhcclxuICogQHBhcmFtIHsqfSB0YXJnZXRcclxuICogQHBhcmFtIHtib29sZWFufSBbY2FsYz10cnVlXSBcdThBMDhcdTdCOTdcdTMwOTJcdTg4NENcdTMwNDZcdTMwNEJcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIExldmVsQXBwbHlTdGF0dXModGFyZ2V0LCBjYWxjID0gdHJ1ZSkge1xyXG4gIGlmICghUG9rZW1vbkRhdGEpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1Bva2Vtb25EYXRhIG5vdCBmb3VuZCcpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlnaHRlciA9IGdldEZpZ2h0ZXJFbGVtZW50KHRhcmdldCk7XHJcbiAgaWYgKGZpZ2h0ZXIpIHtcclxuICAgIGNvbnN0IGZpZ2h0ZXJOYW1lID0gZ2V0RmlnaHRlclR5cGUoZmlnaHRlcik7XHJcbiAgICBjb25zdCBwb2tlbW9uRWxlbWVudCA9IGZpZ2h0ZXIucXVlcnlTZWxlY3RvcignLnBva2Vtb24nKTtcclxuICAgIGNvbnN0IHBva2Vtb25JZCA9IHBva2Vtb25FbGVtZW50LnZhbHVlO1xyXG4gICAgY29uc3QgbGV2ZWxFbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzLWx2Jyk7XHJcbiAgICBjb25zdCBsZXZlbCA9IGxldmVsRWxlbWVudC52YWx1ZTtcclxuICAgIGNvbnN0IHBva2Vtb24gPSBQb2tlbW9uRGF0YVtwb2tlbW9uSWRdO1xyXG4gICAgY29uc3QgcmVzdWx0ID0geyBIOiAwLCBBOiAwLCBCOiAwLCBDOiAwLCBEOiAwIH07XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxldmVsICYmIGkgPCBwb2tlbW9uLlN0YXRzLmxlbmd0aCAmJiBpIDwgbGV2ZWxFbGVtZW50Lm1heDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHN0YXQgPSBwb2tlbW9uLlN0YXRzW2ldO1xyXG4gICAgICByZXN1bHQuSCArPSBzdGF0Lkg7XHJcbiAgICAgIHJlc3VsdC5BICs9IHN0YXQuQTtcclxuICAgICAgcmVzdWx0LkIgKz0gc3RhdC5CO1xyXG4gICAgICByZXN1bHQuQyArPSBzdGF0LkM7XHJcbiAgICAgIHJlc3VsdC5EICs9IHN0YXQuRDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBIUEVsZW1lbnQgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMtaHAnKTtcclxuICAgIGNvbnN0IEhQTWF4RWxlbWVudCA9IGZpZ2h0ZXIucXVlcnlTZWxlY3RvcignLnN0YXR1cy1ocC1tYXgnKTtcclxuICAgIGNvbnN0IEFFbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzLXZhbHVlLWF0aycpO1xyXG4gICAgY29uc3QgQkVsZW1lbnQgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMtdmFsdWUtZGVmJyk7XHJcbiAgICBjb25zdCBDRWxlbWVudCA9IGZpZ2h0ZXIucXVlcnlTZWxlY3RvcignLnN0YXR1cy12YWx1ZS1zcGEnKTtcclxuICAgIGNvbnN0IERFbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzLXZhbHVlLXNwZCcpO1xyXG4gICAgSFBFbGVtZW50LnZhbHVlID0gTWF0aC5taW4ocmVzdWx0LkgsIEhQRWxlbWVudC5tYXgpO1xyXG4gICAgSFBNYXhFbGVtZW50LnZhbHVlID0gTWF0aC5taW4ocmVzdWx0LkgsIEhQTWF4RWxlbWVudC5tYXgpO1xyXG4gICAgQUVsZW1lbnQudmFsdWUgPSBNYXRoLm1pbihyZXN1bHQuQSwgQUVsZW1lbnQubWF4KTtcclxuICAgIEJFbGVtZW50LnZhbHVlID0gTWF0aC5taW4ocmVzdWx0LkIsIEJFbGVtZW50Lm1heCk7XHJcbiAgICBDRWxlbWVudC52YWx1ZSA9IE1hdGgubWluKHJlc3VsdC5DLCBDRWxlbWVudC5tYXgpO1xyXG4gICAgREVsZW1lbnQudmFsdWUgPSBNYXRoLm1pbihyZXN1bHQuRCwgREVsZW1lbnQubWF4KTtcclxuXHJcbiAgICBpZiAoY2FsYykge1xyXG4gICAgICBDYWxjdWxhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NjlDQlx1OTAyMFx1NEY1M1x1MzA3OFx1MzBCQlx1MzBDM1x1MzBDOFx1MzA1N1x1MzA2Nlx1NTNENlx1NUY5N1xyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlnaHRlck5hbWVcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIEdldFN0cnVjdHVyZShmaWdodGVyTmFtZSkge1xyXG4gIGlmIChmaWdodGVyQ2xhc3NOYW1lcy5pbmNsdWRlcyhmaWdodGVyTmFtZSkpIHtcclxuICAgIGNvbnN0IG1vbnN0ZXIgPSBuZXcgTW9uc3RlcigpO1xyXG5cclxuICAgIC8vIFx1NTAyNFx1MzA2RVx1NTNENlx1NUY5N1xyXG4gICAgY29uc3QgZmlnaHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2ZpZ2h0ZXJOYW1lfWApO1xyXG4gICAgY29uc3QgcG9rZW1vbkVsZW1lbnQgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5wb2tlbW9uJyk7XHJcbiAgICBjb25zdCBpc0xlYWRlckVsZW1lbnQgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5mbGFnLWxlYWRlcicpO1xyXG4gICAgY29uc3QgaXNNZW1iZXJFbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuZmxhZy1tZW1iZXInKTtcclxuICAgIGNvbnN0IGxldmVsRWxlbWVudCA9IGZpZ2h0ZXIucXVlcnlTZWxlY3RvcignLnN0YXR1cy1sdicpO1xyXG4gICAgY29uc3QgaHBFbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzLWhwJyk7XHJcbiAgICBjb25zdCBocE1heEVsZW1lbnQgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMtaHAtbWF4Jyk7XHJcbiAgICBjb25zdCBhdGtWYWx1ZUVsZW1lbnQgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMtdmFsdWUtYXRrJyk7XHJcbiAgICBjb25zdCBhdGtTdGFnZUVsZW1lbnQgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMtc3RhZ2UtYXRrJyk7XHJcbiAgICBjb25zdCBhdGtIYWxmRWxlbWVudCA9IGZpZ2h0ZXIucXVlcnlTZWxlY3RvcignLnN0YXR1cy1oYWxmLWF0aycpO1xyXG4gICAgY29uc3QgZGVmVmFsdWVFbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzLXZhbHVlLWRlZicpO1xyXG4gICAgY29uc3QgZGVmU3RhZ2VFbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzLXN0YWdlLWRlZicpO1xyXG4gICAgY29uc3QgZGVmSGFsZkVsZW1lbnQgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMtaGFsZi1kZWYnKTtcclxuICAgIGNvbnN0IHNwYVZhbHVlRWxlbWVudCA9IGZpZ2h0ZXIucXVlcnlTZWxlY3RvcignLnN0YXR1cy12YWx1ZS1zcGEnKTtcclxuICAgIGNvbnN0IHNwYVN0YWdlRWxlbWVudCA9IGZpZ2h0ZXIucXVlcnlTZWxlY3RvcignLnN0YXR1cy1zdGFnZS1zcGEnKTtcclxuICAgIGNvbnN0IHNwYUhhbGZFbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzLWhhbGYtc3BhJyk7XHJcbiAgICBjb25zdCBzcGRWYWx1ZUVsZW1lbnQgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMtdmFsdWUtc3BkJyk7XHJcbiAgICBjb25zdCBzcGRTdGFnZUVsZW1lbnQgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMtc3RhZ2Utc3BkJyk7XHJcbiAgICBjb25zdCBzcGRIYWxmRWxlbWVudCA9IGZpZ2h0ZXIucXVlcnlTZWxlY3RvcignLnN0YXR1cy1oYWxmLXNwZCcpO1xyXG4gICAgY29uc3QgYWNjdXJhY3lFbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuc3RhZ2UtYWNjdXJhY3knKTtcclxuICAgIGNvbnN0IGV2YXNpb25FbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuc3RhZ2UtZXZhc2lvbicpO1xyXG4gICAgY29uc3QgZXhTdGF0dXNBdGtFbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuZXgtc3RhdHVzLWF0aycpO1xyXG4gICAgY29uc3QgZXhTdGF0dXNEZWZFbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuZXgtc3RhdHVzLWRlZicpO1xyXG4gICAgY29uc3QgZXhTdGF0dXNTcEFFbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuZXgtc3RhdHVzLXNwYScpO1xyXG4gICAgY29uc3QgZXhTdGF0dXNTcERFbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuZXgtc3RhdHVzLXNwZCcpO1xyXG4gICAgY29uc3Qgc3RhZ2VTdG9ja3BpbGVFbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuc3RhZ2Utc3RvY2twaWxlJyk7XHJcbiAgICBjb25zdCBib29zdEZsYXNoZmlyZUVsZW1lbnQgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5ib29zdC1mbGFzaGZpcmUnKTtcclxuICAgIGNvbnN0IGhlbGRJdGVtRWxlbWVudCA9IGZpZ2h0ZXIucXVlcnlTZWxlY3RvcignLmhlbGQtaXRlbScpO1xyXG4gICAgY29uc3QgaGVsZEl0ZW1TdGlja3lFbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuaGVsZC1pdGVtLXN0aWNreScpO1xyXG4gICAgY29uc3QgaXFWYWx1ZUVsZW1lbnQgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5pcS12YWx1ZScpO1xyXG4gICAgY29uc3QgdHlwZTFFbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcudHlwZS0xJyk7XHJcbiAgICBjb25zdCB0eXBlMkVsZW1lbnQgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy50eXBlLTInKTtcclxuICAgIGNvbnN0IGFiaWxpdHkxRWxlbWVudCA9IGZpZ2h0ZXIucXVlcnlTZWxlY3RvcignLmFiaWxpdHktMScpO1xyXG4gICAgY29uc3QgYWJpbGl0eTJFbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuYWJpbGl0eS0yJyk7XHJcbiAgICBjb25zdCBnZW5kZXJFbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuZ2VuZGVyOmNoZWNrZWQnKTtcclxuICAgIGNvbnN0IHN0b2NrcGlsZUVsZW1lbnQgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5zdGFnZS1zdG9ja3BpbGUnKTtcclxuICAgIGNvbnN0IGZsYXNoRmlyZUVsZW1lbnQgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5ib29zdC1mbGFzaGZpcmUnKTtcclxuICAgIGNvbnN0IGhpZGRlblBvd2VyVHlwZUVsZW1lbnQgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5oaWRkZW4tcG93ZXItdHlwZScpO1xyXG4gICAgY29uc3QgaGlkZGVuUG93ZXJQb3dlckVsZW1lbnQgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5oaWRkZW4tcG93ZXItcG93ZXInKTtcclxuICAgIGNvbnN0IGJlbGx5VmFsdWVFbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuYmVsbHktdmFsdWUnKTtcclxuICAgIGNvbnN0IG1vdmVtZW50U3BlZWRFbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcubW92ZW1lbnQtc3BlZWQnKTtcclxuICAgIGNvbnN0IG1lRmlyc3RFbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuZmxhZy1tZS1maXJzdCcpO1xyXG4gICAgY29uc3QgcHJhY3RpY2VTd2luZ2VyRWxlbWVudCA9IGZpZ2h0ZXIucXVlcnlTZWxlY3RvcignLmZsYWctcHJhY3RpY2Utc3dpbmdlcicpO1xyXG4gICAgY29uc3QgYW5nZXJQb2ludEVsZW1lbnQgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5mbGFnLWFuZ2VyLXBvaW50Jyk7XHJcbiAgICBjb25zdCB0ZFRpbWVTaGllbGRFbGVtZW50ID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuZmxhZy10ZC10aW1lc2hpZWxkJyk7XHJcblxyXG4gICAgY29uc3QgaXFTa2lsbEdyb3VwRWxlbWVudHMgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pcXNraWxsLWdyb3VwIGlucHV0Jyk7XHJcbiAgICBjb25zdCBzdGF0dXNHcm91cEVsZW1lbnRzID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhdHVzLWdyb3VwIGlucHV0Jyk7XHJcbiAgICBjb25zdCBleEVmZmVjdEdyb3VwRWxlbWVudHMgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5leGVmZmVjdC1ncm91cCBpbnB1dCcpO1xyXG5cclxuICAgIC8vIFx1NjlDQlx1OTAyMFx1NEY1M1x1MzBCQlx1MzBDM1x1MzBDOFxyXG4gICAgbW9uc3Rlci5pZCA9IE51bWJlcihwb2tlbW9uRWxlbWVudC52YWx1ZSk7XHJcbiAgICBtb25zdGVyLmlzX2xlYWRlciA9IGlzTGVhZGVyRWxlbWVudC5jaGVja2VkO1xyXG4gICAgbW9uc3Rlci5pc19tZW1iZXIgPSBpc01lbWJlckVsZW1lbnQuY2hlY2tlZDtcclxuICAgIG1vbnN0ZXIuZ2VuZGVyID0gTnVtYmVyKGdlbmRlckVsZW1lbnQudmFsdWUpO1xyXG4gICAgbW9uc3Rlci5sZXZlbCA9IE51bWJlcihsZXZlbEVsZW1lbnQudmFsdWUpO1xyXG4gICAgbW9uc3Rlci5ocCA9IE51bWJlcihocEVsZW1lbnQudmFsdWUpO1xyXG4gICAgbW9uc3Rlci5ocF9tYXggPSBOdW1iZXIoaHBNYXhFbGVtZW50LnZhbHVlKTtcclxuICAgIG1vbnN0ZXIuYXRrID0gTnVtYmVyKGF0a1ZhbHVlRWxlbWVudC52YWx1ZSk7XHJcbiAgICBtb25zdGVyLmRlZiA9IE51bWJlcihkZWZWYWx1ZUVsZW1lbnQudmFsdWUpO1xyXG4gICAgbW9uc3Rlci5zcF9hdGsgPSBOdW1iZXIoc3BhVmFsdWVFbGVtZW50LnZhbHVlKTtcclxuICAgIG1vbnN0ZXIuc3BfZGVmID0gTnVtYmVyKHNwZFZhbHVlRWxlbWVudC52YWx1ZSk7XHJcbiAgICBtb25zdGVyLnN0YWdlX2F0ayA9IE51bWJlcihhdGtTdGFnZUVsZW1lbnQudmFsdWUpO1xyXG4gICAgbW9uc3Rlci5zdGFnZV9kZWYgPSBOdW1iZXIoZGVmU3RhZ2VFbGVtZW50LnZhbHVlKTtcclxuICAgIG1vbnN0ZXIuc3RhZ2Vfc3BfYXRrID0gTnVtYmVyKHNwYVN0YWdlRWxlbWVudC52YWx1ZSk7XHJcbiAgICBtb25zdGVyLnN0YWdlX3NwX2RlZiA9IE51bWJlcihzcGRTdGFnZUVsZW1lbnQudmFsdWUpO1xyXG4gICAgbW9uc3Rlci5zdGFnZV9hY2N1cmFjeSA9IE51bWJlcihhY2N1cmFjeUVsZW1lbnQudmFsdWUpO1xyXG4gICAgbW9uc3Rlci5zdGFnZV9ldmFzaW9uID0gTnVtYmVyKGV2YXNpb25FbGVtZW50LnZhbHVlKTtcclxuICAgIG1vbnN0ZXIuaXEgPSBOdW1iZXIoaXFWYWx1ZUVsZW1lbnQudmFsdWUpO1xyXG4gICAgbW9uc3Rlci5oYWxmX2F0ayA9IE51bWJlcihhdGtIYWxmRWxlbWVudC52YWx1ZSk7XHJcbiAgICBtb25zdGVyLmhhbGZfZGVmID0gTnVtYmVyKGRlZkhhbGZFbGVtZW50LnZhbHVlKTtcclxuICAgIG1vbnN0ZXIuaGFsZl9zcF9hdGsgPSBOdW1iZXIoc3BhSGFsZkVsZW1lbnQudmFsdWUpO1xyXG4gICAgbW9uc3Rlci5oYWxmX3NwX2RlZiA9IE51bWJlcihzcGRIYWxmRWxlbWVudC52YWx1ZSk7XHJcbiAgICBtb25zdGVyLnR5cGVzID0gW051bWJlcih0eXBlMUVsZW1lbnQudmFsdWUpLCBOdW1iZXIodHlwZTJFbGVtZW50LnZhbHVlKV07XHJcbiAgICBtb25zdGVyLmFiaWxpdGllcyA9IFtOdW1iZXIoYWJpbGl0eTFFbGVtZW50LnZhbHVlKSwgTnVtYmVyKGFiaWxpdHkyRWxlbWVudC52YWx1ZSldO1xyXG4gICAgbW9uc3Rlci5oaWRkZW5fcG93ZXJfdHlwZSA9IE51bWJlcihoaWRkZW5Qb3dlclR5cGVFbGVtZW50LnZhbHVlKTtcclxuICAgIG1vbnN0ZXIuaGlkZGVuX3Bvd2VyX2Jhc2VfcG93ZXIgPSBOdW1iZXIoaGlkZGVuUG93ZXJQb3dlckVsZW1lbnQudmFsdWUpO1xyXG4gICAgbW9uc3Rlci5oZWxkSXRlbSA9IE51bWJlcihoZWxkSXRlbUVsZW1lbnQudmFsdWUpO1xyXG4gICAgbW9uc3Rlci5oZWxkSXRlbV9zdGlja3kgPSBoZWxkSXRlbVN0aWNreUVsZW1lbnQuY2hlY2tlZDtcclxuICAgIG1vbnN0ZXIuYmVsbHkgPSBOdW1iZXIoYmVsbHlWYWx1ZUVsZW1lbnQudmFsdWUpO1xyXG4gICAgbW9uc3Rlci5leGNsdXNpdmVfaXRlbV9hdGsgPSBOdW1iZXIoZXhTdGF0dXNBdGtFbGVtZW50LnZhbHVlKTtcclxuICAgIG1vbnN0ZXIuZXhjbHVzaXZlX2l0ZW1fZGVmID0gTnVtYmVyKGV4U3RhdHVzRGVmRWxlbWVudC52YWx1ZSk7XHJcbiAgICBtb25zdGVyLmV4Y2x1c2l2ZV9pdGVtX3NwX2F0ayA9IE51bWJlcihleFN0YXR1c1NwQUVsZW1lbnQudmFsdWUpO1xyXG4gICAgbW9uc3Rlci5leGNsdXNpdmVfaXRlbV9zcF9kZWYgPSBOdW1iZXIoZXhTdGF0dXNTcERFbGVtZW50LnZhbHVlKTtcclxuICAgIG1vbnN0ZXIuc3RhdHVzZXMuc3RvY2twaWxlID0gTnVtYmVyKHN0b2NrcGlsZUVsZW1lbnQudmFsdWUpO1xyXG4gICAgbW9uc3Rlci5zdGF0dXNlcy5zcGVlZCA9IE51bWJlcihtb3ZlbWVudFNwZWVkRWxlbWVudC52YWx1ZSk7XHJcbiAgICBtb25zdGVyLmZsYXNoX2ZpcmVfYm9vc3QgPSBOdW1iZXIoZmxhc2hGaXJlRWxlbWVudC52YWx1ZSk7XHJcbiAgICBtb25zdGVyLmhpZGRlbl9wb3dlcl90eXBlID0gTnVtYmVyKGhpZGRlblBvd2VyVHlwZUVsZW1lbnQudmFsdWUpO1xyXG4gICAgbW9uc3Rlci5oaWRkZW5fcG93ZXJfYmFzZV9wb3dlciA9IE51bWJlcihoaWRkZW5Qb3dlclBvd2VyRWxlbWVudC52YWx1ZSk7XHJcbiAgICBtb25zdGVyLmZsYWdfbWVfZmlyc3QgPSBtZUZpcnN0RWxlbWVudC5jaGVja2VkO1xyXG4gICAgbW9uc3Rlci5mbGFnX3ByYWN0aWNlX3N3aW5nZXIgPSBwcmFjdGljZVN3aW5nZXJFbGVtZW50LmNoZWNrZWQ7XHJcbiAgICBtb25zdGVyLmZsYWdfYW5nZXJfcG9pbnQgPSBhbmdlclBvaW50RWxlbWVudC5jaGVja2VkO1xyXG4gICAgbW9uc3Rlci5mbGFnX3RkX3RpbWVzaGVhbGQgPSB0ZFRpbWVTaGllbGRFbGVtZW50LmNoZWNrZWQ7XHJcblxyXG4gICAgLy8gXHUzMDRCXHUzMDU3XHUzMDUzXHUzMDU1XHJcbiAgICBmb3IgKGNvbnN0IGlucHV0IG9mIGlxU2tpbGxHcm91cEVsZW1lbnRzKSB7XHJcbiAgICAgIG1vbnN0ZXIuaXFfc2tpbGxbaW5wdXQudmFsdWVdID0gaW5wdXQuY2hlY2tlZDtcclxuICAgIH1cclxuICAgIC8vIFx1NzJCNlx1NjE0Qlx1NzU3MFx1NUUzOFxyXG4gICAgZm9yIChjb25zdCBpbnB1dCBvZiBzdGF0dXNHcm91cEVsZW1lbnRzKSB7XHJcbiAgICAgIG1vbnN0ZXIuc3RhdHVzZXNbaW5wdXQudmFsdWVdID0gaW5wdXQuY2hlY2tlZDtcclxuICAgIH1cclxuICAgIC8vIFx1NUMwMlx1NzUyOFx1OTA1M1x1NTE3N1xyXG4gICAgZm9yIChjb25zdCBpbnB1dCBvZiBleEVmZmVjdEdyb3VwRWxlbWVudHMpIHtcclxuICAgICAgbW9uc3Rlci5leGNsdXNpdmVfaXRlbV9lZmZlY3RfZmxhZ3NbaW5wdXQudmFsdWVdID0gaW5wdXQuY2hlY2tlZDtcclxuICAgIH1cclxuICAgIHJldHVybiBtb25zdGVyO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NjlDQlx1OTAyMFx1NEY1M1x1MzBDN1x1MzBGQ1x1MzBCRlx1MzA0Qlx1MzA4OVx1MzBENVx1MzBBOVx1MzBGQ1x1MzBFMFx1MzA2Qlx1MzBCQlx1MzBDM1x1MzBDOFx1MzA1OVx1MzA4QlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlnaHRlck5hbWVcclxuICogQHBhcmFtIHtNb25zdGVyfSBtb25zdGVyXHJcbiAqL1xyXG5mdW5jdGlvbiBTZXRGb3JtQnlNb25zdGVyKGZpZ2h0ZXJOYW1lLCBtb25zdGVyKSB7XHJcbiAgaWYgKGZpZ2h0ZXJDbGFzc05hbWVzLmluY2x1ZGVzKGZpZ2h0ZXJOYW1lKSkge1xyXG4gICAgY29uc3QgZmlnaHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkYW1hZ2UtY2FsYyAuJHtmaWdodGVyTmFtZX1gKTtcclxuICAgIC8vIFx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1xyXG4gICAgY2hvaWNlc0luc3RhbmNlc1tgcG9rZW1vbi0ke2ZpZ2h0ZXJOYW1lfWBdLnNldENob2ljZUJ5VmFsdWUoYCR7bW9uc3Rlci5pZH1gKTtcclxuICAgIC8vIFx1MzBCRlx1MzBBNFx1MzBENzFcclxuICAgIGNob2ljZXNJbnN0YW5jZXNbYHR5cGUtMS0ke2ZpZ2h0ZXJOYW1lfWBdLnNldENob2ljZUJ5VmFsdWUoYCR7bW9uc3Rlci50eXBlc1swXX1gKTtcclxuICAgIC8vIFx1MzBCRlx1MzBBNFx1MzBENzJcclxuICAgIGNob2ljZXNJbnN0YW5jZXNbYHR5cGUtMi0ke2ZpZ2h0ZXJOYW1lfWBdLnNldENob2ljZUJ5VmFsdWUoYCR7bW9uc3Rlci50eXBlc1sxXX1gKTtcclxuICAgIC8vIFx1NzI3OVx1NjAyNzFcclxuICAgIGNob2ljZXNJbnN0YW5jZXNbYGFiaWxpdHktMS0ke2ZpZ2h0ZXJOYW1lfWBdLnNldENob2ljZUJ5VmFsdWUoYCR7bW9uc3Rlci5hYmlsaXRpZXNbMF19YCk7XHJcbiAgICAvLyBcdTcyNzlcdTYwMjcyXHJcbiAgICBjaG9pY2VzSW5zdGFuY2VzW2BhYmlsaXR5LTItJHtmaWdodGVyTmFtZX1gXS5zZXRDaG9pY2VCeVZhbHVlKGAke21vbnN0ZXIuYWJpbGl0aWVzWzFdfWApO1xyXG4gICAgLy8gXHU2MDI3XHU1MjI1XHJcbiAgICBBcHBseUdlbmRlckNvbnRyb2woZmlnaHRlck5hbWUsIG1vbnN0ZXIuaWQsIG1vbnN0ZXIuZ2VuZGVyLCBmYWxzZSk7XHJcbiAgICAvLyBcdTMwRUNcdTMwRDlcdTMwRUJcclxuICAgIGZpZ2h0ZXIucXVlcnlTZWxlY3RvcignLnN0YXR1cy1sdicpLnZhbHVlID0gbW9uc3Rlci5sZXZlbDtcclxuICAgIC8vIFx1NzNGRVx1NTcyOEhQXHJcbiAgICBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMtaHAnKS52YWx1ZSA9IG1vbnN0ZXIuaHA7XHJcbiAgICAvLyBcdTY3MDBcdTU5MjdIUFxyXG4gICAgZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzLWhwLW1heCcpLnZhbHVlID0gbW9uc3Rlci5ocF9tYXg7XHJcbiAgICAvLyBcdTMwRUFcdTMwRkNcdTMwQzBcdTMwRkNcclxuICAgIGZpZ2h0ZXIucXVlcnlTZWxlY3RvcignLmZsYWctbGVhZGVyJykuY2hlY2tlZCA9IG1vbnN0ZXIuaXNfbGVhZGVyO1xyXG4gICAgLy8gXHUzMEMxXHUzMEZDXHUzMEUwXHUzMEUxXHUzMEYzXHUzMEQwXHUzMEZDXHJcbiAgICBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5mbGFnLW1lbWJlcicpLmNoZWNrZWQgPSBtb25zdGVyLmlzX21lbWJlcjtcclxuICAgIC8vIFx1NjUzQlx1NjQ4M1xyXG4gICAgZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzLXZhbHVlLWF0aycpLnZhbHVlID0gbW9uc3Rlci5hdGs7XHJcbiAgICAvLyBcdTY1M0JcdTY0ODNcdTMwRTlcdTMwRjNcdTMwQUZcclxuICAgIGZpZ2h0ZXIucXVlcnlTZWxlY3RvcignLnN0YXR1cy1zdGFnZS1hdGsnKS52YWx1ZSA9IG1vbnN0ZXIuc3RhZ2VfYXRrO1xyXG4gICAgLy8gXHU2NTNCXHU2NDgzXHU1MzRBXHU2RTFCXHUzMEU5XHUzMEYzXHUzMEFGXHJcbiAgICBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMtaGFsZi1hdGsnKS52YWx1ZSA9IG1vbnN0ZXIuaGFsZl9hdGs7XHJcbiAgICAvLyBcdTk2MzJcdTVGQTFcclxuICAgIGZpZ2h0ZXIucXVlcnlTZWxlY3RvcignLnN0YXR1cy12YWx1ZS1kZWYnKS52YWx1ZSA9IG1vbnN0ZXIuZGVmO1xyXG4gICAgLy8gXHU2NTNCXHU2NDgzXHUzMEU5XHUzMEYzXHUzMEFGXHJcbiAgICBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMtc3RhZ2UtZGVmJykudmFsdWUgPSBtb25zdGVyLnN0YWdlX2RlZjtcclxuICAgIC8vIFx1NjUzQlx1NjQ4M1x1NTM0QVx1NkUxQlx1MzBFOVx1MzBGM1x1MzBBRlxyXG4gICAgZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzLWhhbGYtZGVmJykudmFsdWUgPSBtb25zdGVyLmhhbGZfZGVmO1xyXG4gICAgLy8gXHU3Mjc5XHU2NTNCXHJcbiAgICBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMtdmFsdWUtc3BhJykudmFsdWUgPSBtb25zdGVyLnNwX2F0aztcclxuICAgIC8vIFx1NzI3OVx1NjUzQlx1MzBFOVx1MzBGM1x1MzBBRlxyXG4gICAgZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzLXN0YWdlLXNwYScpLnZhbHVlID0gbW9uc3Rlci5zdGFnZV9zcF9hdGs7XHJcbiAgICAvLyBcdTcyNzlcdTY1M0JcdTUzNEFcdTZFMUJcdTMwRTlcdTMwRjNcdTMwQUZcclxuICAgIGZpZ2h0ZXIucXVlcnlTZWxlY3RvcignLnN0YXR1cy1oYWxmLXNwYScpLnZhbHVlID0gbW9uc3Rlci5oYWxmX3NwX2F0aztcclxuICAgIC8vIFx1NzI3OVx1OTYzMlxyXG4gICAgZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzLXZhbHVlLXNwZCcpLnZhbHVlID0gbW9uc3Rlci5zcF9kZWY7XHJcbiAgICAvLyBcdTcyNzlcdTk2MzJcdTMwRTlcdTMwRjNcdTMwQUZcclxuICAgIGZpZ2h0ZXIucXVlcnlTZWxlY3RvcignLnN0YXR1cy1zdGFnZS1zcGQnKS52YWx1ZSA9IG1vbnN0ZXIuc3RhZ2Vfc3BfZGVmO1xyXG4gICAgLy8gXHU3Mjc5XHU5NjMyXHU1MzRBXHU2RTFCXHUzMEU5XHUzMEYzXHUzMEFGXHJcbiAgICBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMtaGFsZi1zcGQnKS52YWx1ZSA9IG1vbnN0ZXIuaGFsZl9zcF9kZWY7XHJcbiAgICAvLyBcdTU0N0RcdTRFMkRcdTMwRTlcdTMwRjNcdTMwQUZcclxuICAgIGZpZ2h0ZXIucXVlcnlTZWxlY3RvcignLnN0YWdlLWFjY3VyYWN5JykudmFsdWUgPSBtb25zdGVyLnN0YWdlX2FjY3VyYWN5O1xyXG4gICAgLy8gXHU1NkRFXHU5MDdGXHUzMEU5XHUzMEYzXHUzMEFGXHJcbiAgICBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5zdGFnZS1ldmFzaW9uJykudmFsdWUgPSBtb25zdGVyLnN0YWdlX2V2YXNpb247XHJcbiAgICAvLyBcdTVDMDJcdTc1MjhcdTkwNTNcdTUxNzcgXHU2NTNCXHU2NDgzXHJcbiAgICBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5leC1zdGF0dXMtYXRrJykudmFsdWUgPSBtb25zdGVyLmV4Y2x1c2l2ZV9pdGVtX2F0aztcclxuICAgIC8vIFx1NUMwMlx1NzUyOFx1OTA1M1x1NTE3NyBcdTk2MzJcdTVGQTFcclxuICAgIGZpZ2h0ZXIucXVlcnlTZWxlY3RvcignLmV4LXN0YXR1cy1kZWYnKS52YWx1ZSA9IG1vbnN0ZXIuZXhjbHVzaXZlX2l0ZW1fZGVmO1xyXG4gICAgLy8gXHU1QzAyXHU3NTI4XHU5MDUzXHU1MTc3IFx1NzI3OVx1NjUzQlxyXG4gICAgZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuZXgtc3RhdHVzLXNwYScpLnZhbHVlID0gbW9uc3Rlci5leGNsdXNpdmVfaXRlbV9zcF9hdGs7XHJcbiAgICAvLyBcdTVDMDJcdTc1MjhcdTkwNTNcdTUxNzcgXHU3Mjc5XHU5NjMyXHJcbiAgICBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5leC1zdGF0dXMtc3BkJykudmFsdWUgPSBtb25zdGVyLmV4Y2x1c2l2ZV9pdGVtX3NwX2RlZjtcclxuICAgIC8vIFx1MzA1Rlx1MzA0Rlx1MzA4Rlx1MzA0OFx1MzA4QlxyXG4gICAgZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuc3RhZ2Utc3RvY2twaWxlJykudmFsdWUgPSBtb25zdGVyLnN0YXR1c2VzLnN0b2NrcGlsZTtcclxuICAgIC8vIFx1MzA4Mlx1MzA4OVx1MzA0NFx1MzA3M1xyXG4gICAgZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuYm9vc3QtZmxhc2hmaXJlJykudmFsdWUgPSBtb25zdGVyLmZsYXNoX2ZpcmVfYm9vc3Q7XHJcbiAgICAvLyBcdTg4QzVcdTUwOTlcdTRFMkRcdTMwNkVcdTkwNTNcdTUxNzdcclxuICAgIGNob2ljZXNJbnN0YW5jZXNbYGhlbGQtaXRlbS0ke2ZpZ2h0ZXJOYW1lfWBdLnNldENob2ljZUJ5VmFsdWUoYCR7bW9uc3Rlci5oZWxkSXRlbX1gKTtcclxuICAgIC8vIFx1MzBDRFx1MzBEMFx1MzA2NFx1MzA0RFxyXG4gICAgZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuaGVsZC1pdGVtLXN0aWNreScpLmNoZWNrZWQgPSBtb25zdGVyLmhlbGRJdGVtX3N0aWNreTtcclxuICAgIC8vIFx1MzA4MVx1MzA1Nlx1MzA4MVx1MzA4Qlx1MzBEMVx1MzBFRlx1MzBGQyBcdTMwQkZcdTMwQTRcdTMwRDdcclxuICAgIGZpZ2h0ZXIucXVlcnlTZWxlY3RvcignLmhpZGRlbi1wb3dlci10eXBlJykudmFsdWUgPSBtb25zdGVyLmhpZGRlbl9wb3dlcl90eXBlO1xyXG4gICAgLy8gXHUzMDgxXHUzMDU2XHUzMDgxXHUzMDhCXHUzMEQxXHUzMEVGXHUzMEZDIFx1NUEwMVx1NTI5QlxyXG4gICAgZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuaGlkZGVuLXBvd2VyLXBvd2VyJykudmFsdWUgPSBtb25zdGVyLmhpZGRlbl9wb3dlcl9iYXNlX3Bvd2VyO1xyXG4gICAgLy8gXHUzMDRCXHUzMDU3XHUzMDUzXHUzMDU1XHU1MDI0XHJcbiAgICBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5pcS12YWx1ZScpLnZhbHVlID0gbW9uc3Rlci5pcTtcclxuICAgIC8vIFx1MzA0QVx1MzA2QVx1MzA0QlxyXG4gICAgZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuYmVsbHktdmFsdWUnKS52YWx1ZSA9IG1vbnN0ZXIuYmVsbHk7XHJcbiAgICAvLyBcdTc5RkJcdTUyRDVcdTkwMUZcdTVFQTZcclxuICAgIGZpZ2h0ZXIucXVlcnlTZWxlY3RvcignLm1vdmVtZW50LXNwZWVkJykudmFsdWUgPSBtb25zdGVyLnN0YXR1c2VzLnNwZWVkO1xyXG4gICAgLy8gXHUzMDU1XHUzMDREXHUzMDY5XHUzMDhBXHJcbiAgICBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5mbGFnLW1lLWZpcnN0JykuY2hlY2tlZCA9IG1vbnN0ZXIuZmxhZ19tZV9maXJzdDtcclxuICAgIC8vIFx1MzA0Qlx1MzA1Rlx1MzA2QVx1MzA4OVx1MzA1N1xyXG4gICAgZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuZmxhZy1wcmFjdGljZS1zd2luZ2VyJykuY2hlY2tlZCA9IG1vbnN0ZXIuZmxhZ19wcmFjdGljZV9zd2luZ2VyO1xyXG4gICAgLy8gXHUzMDQ0XHUzMDRCXHUzMDhBXHUzMDZFXHUzMDY0XHUzMDdDXHJcbiAgICBmaWdodGVyLnF1ZXJ5U2VsZWN0b3IoJy5mbGFnLWFuZ2VyLXBvaW50JykuY2hlY2tlZCA9IG1vbnN0ZXIuZmxhZ19hbmdlcl9wb2ludDtcclxuICAgIC8vIFtcdTY2NDJcdTk1QzddIFx1MzBCRlx1MzBBNFx1MzBFMFx1MzBCN1x1MzBGQ1x1MzBFQlx1MzBDOVx1MzBEMFx1MzBCMFxyXG4gICAgZmlnaHRlci5xdWVyeVNlbGVjdG9yKCcuZmxhZy10ZC10aW1lc2hpZWxkJykuY2hlY2tlZCA9IG1vbnN0ZXIuZmxhZ190ZF90aW1lc2hlYWxkO1xyXG5cclxuICAgIC8vIFx1MzA0Qlx1MzA1N1x1MzA1M1x1MzA1NVxyXG4gICAgY29uc3QgaXFTa2lsbEdyb3VwRWxlbWVudHMgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pcXNraWxsLWdyb3VwIGlucHV0Jyk7XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgaXFTa2lsbEdyb3VwRWxlbWVudHMpIHtcclxuICAgICAgZWxlbWVudC5jaGVja2VkID0gbW9uc3Rlci5pcV9za2lsbFtOdW1iZXIoZWxlbWVudC52YWx1ZSldO1xyXG4gICAgfVxyXG4gICAgLy8gXHU3MkI2XHU2MTRCXHU3NTcwXHU1RTM4XHJcbiAgICBjb25zdCBzdGF0dXNHcm91cEVsZW1lbnRzID0gZmlnaHRlci5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhdHVzLWdyb3VwIGlucHV0Jyk7XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygc3RhdHVzR3JvdXBFbGVtZW50cykge1xyXG4gICAgICBlbGVtZW50LmNoZWNrZWQgPSBtb25zdGVyLnN0YXR1c2VzW2VsZW1lbnQudmFsdWVdO1xyXG4gICAgfVxyXG4gICAgLy8gXHU1QzAyXHU3NTI4XHU5MDUzXHU1MTc3XHU1MkI5XHU2NzlDXHJcbiAgICBjb25zdCBleEVmZmVjdEdyb3VwRWxlbWVudHMgPSBmaWdodGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5leGVmZmVjdC1ncm91cCBpbnB1dCcpO1xyXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGV4RWZmZWN0R3JvdXBFbGVtZW50cykge1xyXG4gICAgICBlbGVtZW50LmNoZWNrZWQgPSBtb25zdGVyLmV4Y2x1c2l2ZV9pdGVtX2VmZmVjdF9mbGFnc1tOdW1iZXIoZWxlbWVudC52YWx1ZSldO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NjUzQlx1NjQ4M1x1NTA3NFx1MzA2OFx1OTYzMlx1NUZBMVx1NTA3NFx1MzA5Mlx1NEVBNFx1NjNEQlx1MzA1OVx1MzA4QlxyXG4gKi9cclxuZnVuY3Rpb24gU3dhcE1vbnN0ZXIoKSB7XHJcbiAgY29uc3QgYXR0YWNrZXIgPSBHZXRTdHJ1Y3R1cmUoZmlnaHRlckNsYXNzTmFtZXNbMF0pO1xyXG4gIGNvbnN0IGRlZmVuZGVyID0gR2V0U3RydWN0dXJlKGZpZ2h0ZXJDbGFzc05hbWVzWzFdKTtcclxuXHJcbiAgU2V0Rm9ybUJ5TW9uc3RlcihmaWdodGVyQ2xhc3NOYW1lc1swXSwgZGVmZW5kZXIpO1xyXG4gIFNldEZvcm1CeU1vbnN0ZXIoZmlnaHRlckNsYXNzTmFtZXNbMV0sIGF0dGFja2VyKTtcclxuXHJcbiAgQ2FsY3VsYXRpb24oKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1OEEwOFx1N0I5N1x1NTFFNlx1NzQwNlx1MzA5Mlx1NUI5Rlx1ODg0Q1xyXG4gKi9cclxuZnVuY3Rpb24gQ2FsY3VsYXRpb24oKSB7XHJcbiAgaWYgKCFQb2tlbW9uRGF0YSkge1xyXG4gICAgY29uc29sZS5lcnJvcignUG9rZW1vbkRhdGEgbm90IGZvdW5kJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmICghTW92ZURhdGEpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ01vdmVEYXRhIG5vdCBmb3VuZCcpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbW92ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW92ZScpO1xyXG4gIGNvbnN0IG1vdmVHaW5zZW5nQm9vc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpbnNlbmctYm9vc3QnKTtcclxuICBjb25zdCBtb3ZlUFBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmUtbm93LXBwJyk7XHJcbiAgY29uc3QgbW92ZUhpdHNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmUtaGl0cycpO1xyXG4gIGNvbnN0IG1vdmVEYW1hZ2VDcml0aWNhbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFtYWdlLWNyaXRpY2FsJyk7XHJcbiAgY29uc3QgbW92ZUh1Z2VQdXJlUG93ZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhbWFnZS1odWdlcG93ZXInKTtcclxuICBjb25zdCBtb3ZlVGltZURhcmtuZXNzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYW1hZ2Utc3VwcG9ydC10ZCcpO1xyXG4gIGNvbnN0IGR1bmdlb25XZWF0aGVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdW5nZW9uLXdlYXRoZXInKTtcclxuICBjb25zdCBkdW5nZW9uUGx1c1RlYW1FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1bmdlb24tcGx1cy10ZWFtJyk7XHJcbiAgY29uc3QgZHVuZ2VvblBsdXNFbmVteUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVuZ2Vvbi1wbHVzLWVuZW15Jyk7XHJcbiAgY29uc3QgZHVuZ2Vvbk1pbnVzVGVhbUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVuZ2Vvbi1taW51cy10ZWFtJyk7XHJcbiAgY29uc3QgZHVuZ2Vvbk1pbnVzRW5lbXlFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1bmdlb24tbWludXMtZW5lbXknKTtcclxuICBjb25zdCBkdW5nZW9uQ2hlZXJsZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1bmdlb24tY2hlZXJsZWFkZXInKTtcclxuICBjb25zdCBkdW5nZW9uRmxvd2VyR2lmdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVuZ2Vvbi1mbG93ZXItZ2lmdCcpO1xyXG4gIGNvbnN0IGR1bmdlb25MaWdodG5pbmdSb2RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1bmdlb24tbGlnaHRuaW5nLXJvZCcpO1xyXG4gIGNvbnN0IGR1bmdlb25TdG9ybURyYWluRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdW5nZW9uLXN0b3JtLWRyYWluJyk7XHJcbiAgY29uc3QgZHVuZ2Vvbk11ZFNwb3J0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdW5nZW9uLW11ZC1zcG9ydCcpO1xyXG4gIGNvbnN0IGR1bmdlb25XYXRlclNwb3J0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdW5nZW9uLXdhdGVyLXNwb3J0Jyk7XHJcbiAgY29uc3QgZHVuZ2VvbkdyYXZpdHlFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1bmdlb24tZ3Jhdml0eScpO1xyXG4gIGNvbnN0IGR1bmdlb25JcURpc2FibGVkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdW5nZW9uLWlxLWRpc2FibGVkJyk7XHJcbiAgY29uc3QgZHVuZ2VvbkV4cGxvcmVyTWF6ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVuZ2Vvbi1leHBsb3Jlci1tYXplJyk7XHJcbiAgY29uc3QgSnBWZXJzaW9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcC12ZXJzaW9uJyk7XHJcblxyXG4gIC8vIFx1NjlDQlx1OTAyMFx1NEY1M1x1MzA2RVx1NjZGNFx1NjVCMFxyXG4gIGNvbnN0IGF0dGFja2VyID0gR2V0U3RydWN0dXJlKGZpZ2h0ZXJDbGFzc05hbWVzWzBdKTtcclxuICBjb25zdCBkZWZlbmRlciA9IEdldFN0cnVjdHVyZShmaWdodGVyQ2xhc3NOYW1lc1sxXSk7XHJcblxyXG4gIC8vIFx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1OEEwOFx1N0I5N1xyXG4gIGNvbnN0IGR1bmdlb24gPSBuZXcgRHVuZ2VvblN0YXRlKCk7XHJcbiAgY29uc3QgZGFtYWdlRGF0YSA9IG5ldyBEYW1hZ2VEYXRhKCk7XHJcbiAgY29uc3QgbW92ZSA9IG5ldyBNb3ZlKCk7XHJcblxyXG4gIC8vIFx1NjI4MFx1NjBDNVx1NTgzMVx1MzA2RVx1OEEyRFx1NUI5QVxyXG4gIG1vdmUuaWQgPSBOdW1iZXIobW92ZUVsZW1lbnQudmFsdWUpO1xyXG4gIG1vdmUuZ2luc2VuZyA9IE51bWJlcihtb3ZlR2luc2VuZ0Jvb3N0RWxlbWVudC52YWx1ZSk7XHJcbiAgbW92ZS5wcCA9IE51bWJlcihtb3ZlUFBFbGVtZW50LnZhbHVlKTtcclxuICBtb3ZlLnByaW9yU3VjY2Vzc2l2ZUhpdHMgPSBOdW1iZXIobW92ZUhpdHNFbGVtZW50LnZhbHVlKTtcclxuICBtb3ZlLnRpbWVEYXJrbmVzcyA9IG1vdmVUaW1lRGFya25lc3NFbGVtZW50LmNoZWNrZWQ7XHJcbiAgaWYgKG1vdmVEYW1hZ2VDcml0aWNhbEVsZW1lbnQuY2hlY2tlZCkge1xyXG4gICAgZHVuZ2Vvbi5ybmcuY3JpdGljYWxIaXQgPSB0cnVlO1xyXG4gICAgZHVuZ2Vvbi5ybmcuY3JpdENoYW5jZSA9IDEwMDtcclxuICB9XHJcbiAgZHVuZ2Vvbi5ybmcuaHVnZVB1cmVQb3dlciA9IG1vdmVIdWdlUHVyZVBvd2VyRWxlbWVudC5jaGVja2VkO1xyXG5cclxuICAvLyBcdTMwQzBcdTMwRjNcdTMwQjhcdTMwRTdcdTMwRjNcdTYwQzVcdTU4MzFcdTMwNkVcdThBMkRcdTVCOUFcclxuICBkdW5nZW9uLndlYXRoZXIgPSBOdW1iZXIoZHVuZ2VvbldlYXRoZXJFbGVtZW50LnZhbHVlKTtcclxuICBkdW5nZW9uLnBsdXMgPSBbZHVuZ2VvblBsdXNFbmVteUVsZW1lbnQuY2hlY2tlZCwgZHVuZ2VvblBsdXNUZWFtRWxlbWVudC5jaGVja2VkXTtcclxuICBkdW5nZW9uLm1pbnVzID0gW2R1bmdlb25NaW51c0VuZW15RWxlbWVudC5jaGVja2VkLCBkdW5nZW9uTWludXNUZWFtRWxlbWVudC5jaGVja2VkXTtcclxuICBkdW5nZW9uLm90aGVyTW9uc3RlcnMuaXFfc2tpbGxbMHgzMl0gPSBkdW5nZW9uQ2hlZXJsZWFkZXJFbGVtZW50LmNoZWNrZWQ7XHJcbiAgaWYgKGR1bmdlb25GbG93ZXJHaWZ0RWxlbWVudC5jaGVja2VkKSB7XHJcbiAgICBkdW5nZW9uLm90aGVyTW9uc3RlcnMuYWJpbGl0aWVzLnB1c2goMHg3MSk7XHJcbiAgfVxyXG4gIGlmIChkdW5nZW9uTGlnaHRuaW5nUm9kRWxlbWVudC5jaGVja2VkKSB7XHJcbiAgICBkdW5nZW9uLm90aGVyTW9uc3RlcnMuYWJpbGl0aWVzLnB1c2goMHgzMik7XHJcbiAgfVxyXG4gIGlmIChkdW5nZW9uU3Rvcm1EcmFpbkVsZW1lbnQuY2hlY2tlZCkge1xyXG4gICAgZHVuZ2Vvbi5vdGhlck1vbnN0ZXJzLmFiaWxpdGllcy5wdXNoKDB4N2EpO1xyXG4gIH1cclxuICBkdW5nZW9uLm11ZF9zcG9ydCA9IGR1bmdlb25NdWRTcG9ydEVsZW1lbnQuY2hlY2tlZDtcclxuICBkdW5nZW9uLndhdGVyX3Nwb3J0ID0gZHVuZ2VvbldhdGVyU3BvcnRFbGVtZW50LmNoZWNrZWQ7XHJcbiAgZHVuZ2Vvbi5ncmF2aXR5ID0gZHVuZ2VvbkdyYXZpdHlFbGVtZW50LmNoZWNrZWQ7XHJcbiAgZHVuZ2Vvbi5pcV9kaXNhYmxlZCA9IGR1bmdlb25JcURpc2FibGVkRWxlbWVudC5jaGVja2VkO1xyXG4gIGR1bmdlb24uZ2VuSW5mby5maXhlZFJvb21JZCA9IGR1bmdlb25FeHBsb3Jlck1hemVFbGVtZW50LmNoZWNrZWQgPyAweDZlIDogMHgwMDtcclxuICBkdW5nZW9uLnJlZ2lvbl9qcCA9IEpwVmVyc2lvbkVsZW1lbnQuY2hlY2tlZDtcclxuXHJcbiAgbGV0IHJlc3VsdDtcclxuICBjb25zdCBwcm9qZWN0aWxlUG93ZXIgPSBtb3ZlRWxlbWVudC5vcHRpb25zW21vdmVFbGVtZW50LnNlbGVjdGVkSW5kZXhdLmRhdGFzZXQucG93ZXI7XHJcbiAgaWYgKHByb2plY3RpbGVQb3dlcikge1xyXG4gICAgcmVzdWx0ID0gUnVuQ2FsY0RhbWFnZShkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUsIHByb2plY3RpbGVQb3dlcik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlc3VsdCA9IFJ1bkNhbGNEYW1hZ2UoZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlLCBNb3ZlRGF0YVttb3ZlLmlkXS5Qb3dlcik7XHJcbiAgfVxyXG4gIC8vIGNvbnNvbGUubG9nKCdSRVNVTFQnLCByZXN1bHQpO1xyXG5cclxuICAvLyBcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdThBMDhcdTdCOTdcdTdENTBcdTY3OUNcdTg4NjhcdTc5M0FcclxuICBjb25zdCBkYW1hZ2VNaW5FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhbWFnZS1taW4nKTtcclxuICBjb25zdCBkYW1hZ2VNYXhFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhbWFnZS1tYXgnKTtcclxuICBjb25zdCBkYW1hZ2VBdmdFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhbWFnZS1hdmcnKTtcclxuICBkYW1hZ2VNaW5FbGVtZW50LnRleHRDb250ZW50ID0gcmVzdWx0Lm1pbkRhbWFnZTtcclxuICBkYW1hZ2VNYXhFbGVtZW50LnRleHRDb250ZW50ID0gcmVzdWx0Lm1heERhbWFnZTtcclxuICBkYW1hZ2VBdmdFbGVtZW50LnRleHRDb250ZW50ID0gYChcdTVFNzNcdTU3NDc6ICR7cmVzdWx0LmF2Z0RhbWFnZX0pYDtcclxuICAvLyBcdTU0N0RcdTRFMkRcdTczODdcdThBMDhcdTdCOTdcdTdENTBcdTY3OUNcdTg4NjhcdTc5M0FcclxuICBjb25zdCBhY2N1cmFjeVJlc3VsdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjdXJhY3ktcmVzdWx0Jyk7XHJcbiAgYWNjdXJhY3lSZXN1bHRFbGVtZW50LnRleHRDb250ZW50ID0gYCR7cmVzdWx0LmhpdENoYW5jZX0lYDtcclxuICAvLyBcdTYwMjVcdTYyNDBcdTczODdcdThBMDhcdTdCOTdcdTdENTBcdTY3OUNcdTg4NjhcdTc5M0FcclxuICBjb25zdCBjcml0aWNhbFJlc3VsdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JpdGljYWwtcmVzdWx0Jyk7XHJcbiAgY3JpdGljYWxSZXN1bHRFbGVtZW50LnRleHRDb250ZW50ID0gYCR7cmVzdWx0LmNyaXRDaGFuY2V9JWA7XHJcblxyXG4gIC8vIFx1MzBEMFx1MzBDM1x1MzBCOFx1ODg2OFx1NzkzQVxyXG4gIGNvbnN0IGRhbWFnZVJlc3VsdEJhZGdlV3JhcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFtYWdlLXJlc3VsdC1iYWRnZScpO1xyXG4gIGRhbWFnZVJlc3VsdEJhZGdlV3JhcEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgbGV0IGJnQ2xhc3NOYW1lID0gJyc7XHJcbiAgc3dpdGNoIChyZXN1bHQuZGV0YWlscy50eXBlTWF0Y2h1cC5pZCkge1xyXG4gICAgY2FzZSAwOiAvLyBcdTUyQjlcdTY3OUNcdTMwNkFcdTMwNTdcclxuICAgICAgYmdDbGFzc05hbWUgPSAndGV4dC1iZy1saWdodCc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAxOiAvLyBcdTRFQ0FcdTMwNzJcdTMwNjhcdTMwNjRcclxuICAgICAgYmdDbGFzc05hbWUgPSAndGV4dC1iZy13YXJuaW5nJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDI6IC8vIFx1OTAxQVx1NUUzOFxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMzogLy8gXHU1MkI5XHU2NzlDXHU2MjlDXHU3RkE0XHJcbiAgICAgIGJnQ2xhc3NOYW1lID0gJ3RleHQtYmctZGFuZ2VyJztcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIGlmIChiZ0NsYXNzTmFtZS5sZW5ndGggPiAwKSB7XHJcbiAgICBjb25zdCBiYWRnZUh0bWwgPSBgXHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgJHtiZ0NsYXNzTmFtZX1cIj4ke3Jlc3VsdC5kZXRhaWxzLnR5cGVNYXRjaHVwLnRleHR9PC9zcGFuPlxyXG4gICAgYDtcclxuICAgIGRhbWFnZVJlc3VsdEJhZGdlV3JhcEVsZW1lbnQuaW5uZXJIVE1MICs9IGJhZGdlSHRtbDtcclxuICB9XHJcbiAgLy8gXHU1NkZBXHU1QjlBXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHUzMEQwXHUzMEMzXHUzMEI4XHU4ODY4XHU3OTNBXHJcbiAgaWYgKGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzRml4ZWREYW1hZ2UpIHtcclxuICAgIGRhbWFnZVJlc3VsdEJhZGdlV3JhcEVsZW1lbnQuaW5uZXJIVE1MICs9IGBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSB0ZXh0LWJnLWRhcmtcIj5cdTU2RkFcdTVCOUE8L3NwYW4+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgLy8gXHUzMEUyXHUzMEZDXHUzMEMwXHUzMEVCXHUzMDZCXHU4QTczXHU3RDMwXHU4ODY4XHU3OTNBXHJcbiAgY29uc3QgbW9kYWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWRhbWFnZScpO1xyXG4gIG1vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjYXR0YWNrZXItbmFtZScpLnRleHRDb250ZW50ID0gUG9rZW1vbkRhdGFbYXR0YWNrZXIuaWRdLk5hbWU7XHJcbiAgbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdHRhY2tlci1sZXZlbCcpLnRleHRDb250ZW50ID0gYEx2JHthdHRhY2tlci5sZXZlbH1gO1xyXG4gIG1vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjYXR0YWNrZXItc3RhdHVzJykudGV4dENvbnRlbnQgPSBgJHtcclxuICAgIE1vdmVEYXRhW21vdmUuaWRdLkNhdGVnb3J5ID09IGVvcy5DQVRFR09SWV9QSFlTSUNBTCA/ICdcdTY1M0JcdTY0ODMnIDogJ1x1NzI3OVx1NjUzQidcclxuICB9JHtyZXN1bHQuZGV0YWlscy5jYWxjLm9mZmVuc2VDYWxjfWA7XHJcbiAgbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWZlbmRlci1uYW1lJykudGV4dENvbnRlbnQgPSBQb2tlbW9uRGF0YVtkZWZlbmRlci5pZF0uTmFtZTtcclxuICBtb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcignI2RlZmVuZGVyLWxldmVsJykudGV4dENvbnRlbnQgPSBgTHYke2RlZmVuZGVyLmxldmVsfWA7XHJcbiAgbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWZlbmRlci1zdGF0dXMnKS50ZXh0Q29udGVudCA9XHJcbiAgICBgJHtNb3ZlRGF0YVttb3ZlLmlkXS5DYXRlZ29yeSA9PSBlb3MuQ0FURUdPUllfUEhZU0lDQUwgPyAnXHU5NjMyXHU1RkExJyA6ICdcdTcyNzlcdTk2MzInfSR7cmVzdWx0LmRldGFpbHMuY2FsYy5kZWZlbnNlQ2FsY31gO1xyXG4gIGNvbnN0IG1vdmVOYW1lID0gYCR7TW92ZURhdGFbbW92ZS5pZF0uTmFtZX0ke21vdmUuZ2luc2VuZyA+IDAgPyBgKyR7bW92ZS5naW5zZW5nfWAgOiAnJ31gO1xyXG4gIG1vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubW92ZS1uYW1lJykudGV4dENvbnRlbnQgPVxyXG4gICAgYCR7bW92ZU5hbWV9ICR7bW92ZS5pZCA9PSAweDE5NSA/IGAgKCR7bW92ZUVsZW1lbnQub3B0aW9uc1ttb3ZlRWxlbWVudC5zZWxlY3RlZEluZGV4XS50ZXh0fSlgIDogJyd9YDtcclxuICBtb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRhbWFnZS1taW4nKS50ZXh0Q29udGVudCA9IHJlc3VsdC5taW5EYW1hZ2U7XHJcbiAgbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYW1hZ2UtbWF4JykudGV4dENvbnRlbnQgPSByZXN1bHQubWF4RGFtYWdlO1xyXG4gIG1vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGFtYWdlLWF2ZycpLnRleHRDb250ZW50ID0gYChcdTVFNzNcdTU3NDc6ICR7cmVzdWx0LmF2Z0RhbWFnZX0pYDtcclxuICBtb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmhpdC1jaGFuY2UnKS50ZXh0Q29udGVudCA9IGAke3Jlc3VsdC5oaXRDaGFuY2V9JWA7XHJcbiAgbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcml0LWNoYW5jZScpLnRleHRDb250ZW50ID0gYCR7cmVzdWx0LmNyaXRDaGFuY2V9JWA7XHJcbiAgbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50eXBlLW1hdGNodXAnKS50ZXh0Q29udGVudCA9IHJlc3VsdC5kZXRhaWxzLnR5cGVNYXRjaHVwLnRleHQ7XHJcbiAgbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZlLXR5cGUnKS50ZXh0Q29udGVudCA9IHJlc3VsdC5kZXRhaWxzLm1vdmVUeXBlLk5hbWU7XHJcbiAgbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZlLWNhdGVnb3J5JykudGV4dENvbnRlbnQgPSByZXN1bHQuZGV0YWlscy5tb3ZlQ2F0ZWdvcnkudGV4dDtcclxuICBtb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNyaXRpY2FsLWhpdCcpLnRleHRDb250ZW50ID0gcmVzdWx0LmRldGFpbHMuY3JpdGljYWxIaXQgPyAnXHUyNUNCJyA6ICdcdTAwRDcnO1xyXG4gIG1vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZnVsbC10eXBlLWltbXVuaXR5JykudGV4dENvbnRlbnQgPSByZXN1bHQuZGV0YWlscy5mdWxsVHlwZUltbXVuaXR5ID8gJ1x1MjVDQicgOiAnXHUwMEQ3JztcclxuICBtb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm5vLWRhbWFnZScpLnRleHRDb250ZW50ID0gcmVzdWx0LmRldGFpbHMubm9EYW1hZ2UgPyAnXHUyNUNCJyA6ICdcdTAwRDcnO1xyXG4gIG1vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcub2ZmZW5zaXZlLXN0YXQtc3RhZ2UnKS50ZXh0Q29udGVudCA9IHJlc3VsdC5kZXRhaWxzLmNhbGMub2ZmZW5zaXZlU3RhdFN0YWdlO1xyXG4gIG1vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGVmZW5zaXZlLXN0YXQtc3RhZ2UnKS50ZXh0Q29udGVudCA9IHJlc3VsdC5kZXRhaWxzLmNhbGMuZGVmZW5zaXZlU3RhdFN0YWdlO1xyXG4gIG1vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcub2ZmZW5zaXZlLXN0YXQnKS50ZXh0Q29udGVudCA9IHJlc3VsdC5kZXRhaWxzLmNhbGMub2ZmZW5zaXZlU3RhdDtcclxuICBtb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRlZmVuc2l2ZS1zdGF0JykudGV4dENvbnRlbnQgPSByZXN1bHQuZGV0YWlscy5jYWxjLmRlZmVuc2l2ZVN0YXQ7XHJcbiAgbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vZmZlbnNlLWNhbGMnKS50ZXh0Q29udGVudCA9IHJlc3VsdC5kZXRhaWxzLmNhbGMub2ZmZW5zZUNhbGM7XHJcbiAgbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWZlbnNlLWNhbGMnKS50ZXh0Q29udGVudCA9IHJlc3VsdC5kZXRhaWxzLmNhbGMuZGVmZW5zZUNhbGM7XHJcbiAgbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYW1hZ2UtY2FsYy1hdCcpLnRleHRDb250ZW50ID0gcmVzdWx0LmRldGFpbHMuY2FsYy5kYW1hZ2VDYWxjQXQ7XHJcbiAgbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYW1hZ2UtY2FsYy1kZWYnKS50ZXh0Q29udGVudCA9IHJlc3VsdC5kZXRhaWxzLmNhbGMuZGFtYWdlQ2FsY0RlZjtcclxuICBtb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRhbWFnZS1jYWxjLWZsdicpLnRleHRDb250ZW50ID0gcmVzdWx0LmRldGFpbHMuY2FsYy5kYW1hZ2VDYWxjRmx2O1xyXG4gIG1vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGFtYWdlLWNhbGMtYmFzZScpLnRleHRDb250ZW50ID0gcmVzdWx0LmRldGFpbHMuY2FsYy5kYW1hZ2VDYWxjQmFzZTtcclxuICBtb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRpYy1kYW1hZ2UtbXVsdCcpLnRleHRDb250ZW50ID0gcmVzdWx0LmRldGFpbHMuY2FsYy5zdGF0aWNEYW1hZ2VNdWx0O1xyXG4gIG1vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGFtYWdlLWNhbGMnKS50ZXh0Q29udGVudCA9IHJlc3VsdC5kZXRhaWxzLmNhbGMuZGFtYWdlQ2FsYztcclxuICBtb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1pbi1yYW5kb20tZGFtYWdlLW11bHQtcGN0JykudGV4dENvbnRlbnQgPVxyXG4gICAgYCR7cmVzdWx0LmRldGFpbHMuY2FsYy5taW5SYW5kb21EYW1hZ2VNdWx0UGN0fSVgO1xyXG4gIG1vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubWF4LXJhbmRvbS1kYW1hZ2UtbXVsdC1wY3QnKS50ZXh0Q29udGVudCA9XHJcbiAgICBgJHtyZXN1bHQuZGV0YWlscy5jYWxjLm1heFJhbmRvbURhbWFnZU11bHRQY3R9JWA7XHJcblxyXG4gIC8vIFttb2RhbF0gXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU4QTczXHU3RDMwXHUzMEQwXHUzMEMzXHUzMEI4XHJcbiAgY29uc3QgdHlwZU1hdGNoTXVsdHMgPSBbMSwgMV07XHJcbiAgY29uc3QgZXJyYXRpYyA9IGF0dGFja2VyLmlxU2tpbGxFbmFibGVkKDB4M2IsIGR1bmdlb24pIHx8IGRlZmVuZGVyLmlxU2tpbGxFbmFibGVkKDB4MzgsIGR1bmdlb24pO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICBzd2l0Y2ggKHJlc3VsdC5kZXRhaWxzW2BpbmRpdlR5cGVNYXRjaHVwJHtpICsgMX1gXS5pZCkge1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgdHlwZU1hdGNoTXVsdHNbaV0gPSBlcnJhdGljID8gTWVjaGFuaWNzLk1BVENIVVBfSU1NVU5FX0VSUkFUSUMgOiBNZWNoYW5pY3MuTUFUQ0hVUF9JTU1VTkU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICB0eXBlTWF0Y2hNdWx0c1tpXSA9IGVycmF0aWMgPyBNZWNoYW5pY3MuTUFUQ0hVUF9OT1RWRVJZX0VSUkFUSUMgOiBNZWNoYW5pY3MuTUFUQ0hVUF9OT1RWRVJZO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgdHlwZU1hdGNoTXVsdHNbaV0gPSBlcnJhdGljID8gTWVjaGFuaWNzLk1BVENIVVBfTkVVVFJBTF9FUlJBVElDIDogTWVjaGFuaWNzLk1BVENIVVBfTkVVVFJBTDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHR5cGVNYXRjaE11bHRzW2ldID0gZXJyYXRpYyA/IE1lY2hhbmljcy5NQVRDSFVQX1NVUEVSX0VSUkFUSUMgOiBNZWNoYW5pY3MuTUFUQ0hVUF9TVVBFUjtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgdHlwZU1hdGNoTXVsdCA9IE1hdGguZmxvb3IodHlwZU1hdGNoTXVsdHNbMF0gKiB0eXBlTWF0Y2hNdWx0c1sxXSAqIDEwMCkgLyAxMDA7XHJcbiAgY29uc3Qgc25pcGVyID0gYXR0YWNrZXIuYWJpbGl0eUFjdGl2ZSgweDVkKTtcclxuICBjb25zdCBkYW1hZ2VCYWRnZVdyYXBFbGVtZW50ID0gbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYW1hZ2UtYmFkZ2Utd3JhcCcpO1xyXG4gIGNvbnN0IGRhbWFnZUJhZGdlRGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgbGFiZWw6IGAke3Jlc3VsdC5kZXRhaWxzLnR5cGVNYXRjaHVwLnRleHR9JHtlcnJhdGljID8gJyhcdTMwRTBcdTMwRTlcdTMwNjNcdTMwNTEpJyA6ICcnfSB4JHt0eXBlTWF0Y2hNdWx0fWAsXHJcbiAgICAgIG11bHRpcGxpZXI6IHR5cGVNYXRjaE11bHQsXHJcbiAgICAgIHZhbHVlOiB0eXBlTWF0Y2hNdWx0ICE9IDEsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogYFx1NjAyNVx1NjI0MCR7c25pcGVyID8gJyhcdTMwQjlcdTMwQ0FcdTMwQTRcdTMwRDFcdTMwRkMpJyA6ICcnfSB4JHtzbmlwZXIgPyAnMicgOiAnMS41J31gLFxyXG4gICAgICBtdWx0aXBsaWVyOiBzbmlwZXIgPyAyIDogMS41LFxyXG4gICAgICB2YWx1ZTogcmVzdWx0LmRldGFpbHMuY3JpdGljYWxIaXQsXHJcbiAgICB9LFxyXG4gICAgeyBsYWJlbDogJ1x1MzBCRlx1MzBBNFx1MzBEN1x1NzEyMVx1NTJCOScsIG11bHRpcGxpZXI6IDAsIHZhbHVlOiByZXN1bHQuZGV0YWlscy5mdWxsVHlwZUltbXVuaXR5IH0sXHJcbiAgICB7IGxhYmVsOiAnXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU3MTIxXHU1MkI5JywgbXVsdGlwbGllcjogMCwgdmFsdWU6IHJlc3VsdC5kZXRhaWxzLm5vRGFtYWdlIH0sXHJcbiAgICB7IGxhYmVsOiAnXHUzMDc1XHUzMDU3XHUzMDRFXHUzMDZBXHUzMDdFXHUzMDgyXHUzMDhBJywgbXVsdGlwbGllcjogMCwgdmFsdWU6IGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzV29uZGVyR3VhcmRBY3RpdmUgfSxcclxuICAgIHsgbGFiZWw6ICdcdTMwNDRcdTMwOERcdTMwODFcdTMwNENcdTMwNkQgeDEuMicsIG11bHRpcGxpZXI6IDEuMiwgdmFsdWU6IGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzVGludGVkTGVuc0FjdGl2ZSB9LFxyXG4gICAgeyBsYWJlbDogJ1x1MzBDRlx1MzBGQ1x1MzBDOVx1MzBFRFx1MzBDM1x1MzBBRiB4MC43NScsIG11bHRpcGxpZXI6IDAuNzUsIHZhbHVlOiBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc1NvbGlkUm9ja0FjdGl2ZSB9LFxyXG4gICAgeyBsYWJlbDogJ1x1MzBENVx1MzBBM1x1MzBFQlx1MzBCRlx1MzBGQyB4MC43NScsIG11bHRpcGxpZXI6IDAuNzUsIHZhbHVlOiBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc0ZpbHRlckFjdGl2ZSB9LFxyXG4gICAgeyBsYWJlbDogJ1x1MzBCRlx1MzBBNFx1MzBFMFx1MzBCN1x1MzBGQ1x1MzBFQlx1MzBDOSB4MC41JywgbXVsdGlwbGllcjogMC41LCB2YWx1ZTogZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNUaW1lU2hpZWxkQWN0aXZlIH0sXHJcbiAgICB7IGxhYmVsOiAnXHUzMEJGXHUzMEE0XHUzMEUwXHUzMEI3XHUzMEZDXHUzMEVCXHUzMEM5XHUzMEQwXHUzMEIwIHgyJywgbXVsdGlwbGllcjogMiwgdmFsdWU6IGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzVGltZVNoaWVsZEdsaXRjaCB9LFxyXG4gICAgeyBsYWJlbDogJ1x1MzBDNlx1MzBBRlx1MzBDQlx1MzBCN1x1MzBFM1x1MzBGMyB4MS41JywgbXVsdGlwbGllcjogMS41LCB2YWx1ZTogZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNUZWNobmljaWFuQWN0aXZlIH0sXHJcbiAgICB7IGxhYmVsOiAnXHUzMDQyXHUzMDY0XHUzMDQ0XHUzMDU3XHUzMDdDXHUzMDQ2IHgwLjUnLCBtdWx0aXBsaWVyOiAxLjUsIHZhbHVlOiBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc1RoaWNrRmF0QWN0aXZlIH0sXHJcbiAgICB7IGxhYmVsOiAnXHUzMDUyXHUzMDREXHUzMDhBXHUzMDg1XHUzMDQ2IHgyJywgbXVsdGlwbGllcjogMiwgdmFsdWU6IGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzVG9ycmVudEFjdGl2ZSB9LFxyXG4gICAgeyBsYWJlbDogJ1x1MzA1N1x1MzA5M1x1MzA4QVx1MzA4N1x1MzA0RiB4MicsIG11bHRpcGxpZXI6IDIsIHZhbHVlOiBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc092ZXJncm93QWN0aXZlIH0sXHJcbiAgICB7IGxhYmVsOiAnXHUzMDgwXHUzMDU3XHUzMDZFXHUzMDU3XHUzMDg5XHUzMDVCIHgyJywgbXVsdGlwbGllcjogMiwgdmFsdWU6IGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzU3dhcm1BY3RpdmUgfSxcclxuICAgIHsgbGFiZWw6ICdcdTMwODJcdTMwNDZcdTMwNEIgeDInLCBtdWx0aXBsaWVyOiAyLCB2YWx1ZTogZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNCbGF6ZUFjdGl2ZSB9LFxyXG4gICAgeyBsYWJlbDogJ1x1MzA0Qlx1MzA5M1x1MzA1RFx1MzA0Nlx1MzA2Rlx1MzA2MCB4MS41JywgbXVsdGlwbGllcjogMS41LCB2YWx1ZTogZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNEcnlTa2luQWN0aXZlIH0sXHJcbiAgICB7IGxhYmVsOiAnXHUzMDg0XHUzMDUxXHUzMDY5IHgwLjgnLCBtdWx0aXBsaWVyOiAwLjgsIHZhbHVlOiBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc0J1cm5BY3RpdmUgfSxcclxuICAgIHsgbGFiZWw6ICdcdTMwQkZcdTMwQTRcdTMwRDdcdTRFMDBcdTgxRjQoXHUzMDY2XHUzMDREXHUzMDRBXHUzMDQ2XHUzMDhBXHUzMDg3XHUzMDRGKSB4MicsIG11bHRpcGxpZXI6IDIsIHZhbHVlOiBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc0FkYXB0YWJpbGl0eVNUQUIgfSxcclxuICAgIHsgbGFiZWw6ICdcdTMwQkZcdTMwQTRcdTMwRDdcdTRFMDBcdTgxRjQgeDEuNScsIG11bHRpcGxpZXI6IDEuNSwgdmFsdWU6IGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzU1RBQiB9LFxyXG4gICAgeyBsYWJlbDogJ1x1MzA3Mlx1MzA1Nlx1MzA1N1x1MzA0Q1x1MzA2NFx1MzA4OFx1MzA0NCB4MS41JywgbXVsdGlwbGllcjogMS41LCB2YWx1ZTogZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNTdW5ueUZpcmVBY3RpdmUgfSxcclxuICAgIHsgbGFiZWw6ICdcdTMwNzJcdTMwNTZcdTMwNTdcdTMwNENcdTMwNjRcdTMwODhcdTMwNDQgeDAuNScsIG11bHRpcGxpZXI6IDAuNSwgdmFsdWU6IGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzU3VubnlXYXRlckFjdGl2ZSB9LFxyXG4gICAgeyBsYWJlbDogJ1x1MzA0Mlx1MzA4MSB4MC41JywgbXVsdGlwbGllcjogMC41LCB2YWx1ZTogZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNSYWlueUZpcmVBY3RpdmUgfSxcclxuICAgIHsgbGFiZWw6ICdcdTMwNDJcdTMwODEgeDEuNScsIG11bHRpcGxpZXI6IDEuNSwgdmFsdWU6IGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzUmFpbnlXYXRlckFjdGl2ZSB9LFxyXG4gICAgeyBsYWJlbDogJ1x1MzA0Rlx1MzA4Mlx1MzA4QSB4MC43NScsIG11bHRpcGxpZXI6IDAuNzUsIHZhbHVlOiBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc0Nsb3VkeUFjdGl2ZSB9LFxyXG4gICAgeyBsYWJlbDogJ1x1MzA0RFx1MzA4QSB4MC41JywgbXVsdGlwbGllcjogMC41LCB2YWx1ZTogZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNGb2dBY3RpdmUgfSxcclxuICAgIHsgbGFiZWw6ICdcdTMwNjlcdTMwOERcdTMwNDJcdTMwNURcdTMwNzMgeDAuNScsIG11bHRpcGxpZXI6IDAuNSwgdmFsdWU6IGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzTXVkU3BvcnRBY3RpdmUgfSxcclxuICAgIHsgbGFiZWw6ICdcdTMwN0ZcdTMwNUFcdTMwNDJcdTMwNURcdTMwNzMgeDAuNScsIG11bHRpcGxpZXI6IDAuNSwgdmFsdWU6IGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzV2F0ZXJTcG9ydEFjdGl2ZSB9LFxyXG4gICAgeyBsYWJlbDogJ1x1MzA1OFx1MzA4NVx1MzA0Nlx1MzA2N1x1MzA5MyB4MicsIG11bHRpcGxpZXI6IDIsIHZhbHVlOiBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc0NoYXJnZUFjdGl2ZSB9LFxyXG4gICAgeyBsYWJlbDogJ1x1MzA1NVx1MzA0RFx1MzA2OVx1MzA4QSB4MS41JywgbXVsdGlwbGllcjogMS41LCB2YWx1ZTogZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNNZUZpcnN0QWN0aXZlIH0sXHJcbiAgICB7IGxhYmVsOiAnXHUzMDU5XHUzMDY2XHUzMDdGIHgxLjUnLCBtdWx0aXBsaWVyOiAxLjUsIHZhbHVlOiBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc1JlY2tsZXNzQWN0aXZlIH0sXHJcbiAgICB7IGxhYmVsOiAnXHUzMDY2XHUzMDY0XHUzMDZFXHUzMDUzXHUzMDc2XHUzMDU3IHgxLjUnLCBtdWx0aXBsaWVyOiAxLjUsIHZhbHVlOiBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc0lyb25GaXN0QWN0aXZlIH0sXHJcbiAgICB7IGxhYmVsOiAnXHU3MjY5XHU3NDA2XHUzMEMwXHUzMEUxXHU1MzRBXHU2RTFCIHgwLjUnLCBtdWx0aXBsaWVyOiAwLjUsIHZhbHVlOiByZXN1bHQuZGV0YWlscy5jYWxjLm1vZGlmaWVycy5oYWxmUGh5c2ljYWxEYW1hZ2UgfSxcclxuICAgIHsgbGFiZWw6ICdcdTcyNzlcdTZCOEFcdTMwQzBcdTMwRTFcdTUzNEFcdTZFMUIgeDAuNScsIG11bHRpcGxpZXI6IDAuNSwgdmFsdWU6IHJlc3VsdC5kZXRhaWxzLmNhbGMubW9kaWZpZXJzLmhhbGZTcGVjaWFsRGFtYWdlIH0sXHJcbiAgICB7IGxhYmVsOiAnXHU5MDFBXHU1RTM4XHU2NTNCXHU2NDgzIHgwLjUnLCBtdWx0aXBsaWVyOiAwLjUsIHZhbHVlOiBtb3ZlLmlkID09IDB4MTYzIH0sXHJcbiAgICB7IGxhYmVsOiAnXHU2Mjk1XHU2NEYyXHU3MjY5IHgwLjUnLCBtdWx0aXBsaWVyOiAwLjUsIHZhbHVlOiBtb3ZlLmlkID09IDB4MTk1IH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBgJHtNb3ZlRGF0YVttb3ZlLmlkXS5OYW1lfSB4JHtkdW5nZW9uLmRhbWFnZURldGFpbExvZy5kYW1hZ2VNdWx0fWAsXHJcbiAgICAgIG11bHRpcGxpZXI6IGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmRhbWFnZU11bHQsXHJcbiAgICAgIHZhbHVlOiBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5kYW1hZ2VNdWx0ICE9IDEgJiYgbW92ZS5pZCAhPSAweDE2MyAmJiBtb3ZlLmlkICE9IDB4MTk1LFxyXG4gICAgfSxcclxuICAgIHsgbGFiZWw6ICdcdTMwNTRcdTMwNDZcdTMwOEZcdTMwOTMgeDEuNScsIG11bHRpcGxpZXI6IDEuNSwgdmFsdWU6IGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzUG93ZXJQaXRjaGVyQWN0aXZlIH0sXHJcbiAgICB7IGxhYmVsOiAnXHUzMEE4XHUzMEEyXHUzMEZDXHUzMEQ2XHUzMEVDXHUzMEZDXHUzMEM5IHgxLjUnLCBtdWx0aXBsaWVyOiAxLjUsIHZhbHVlOiBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc0FpckJsYWRlQWN0aXZlIH0sXHJcbiAgXTtcclxuICAvLyBcdTUwMERcdTczODdcdTk4MDZcdTMwNkJcdTMwQkRcdTMwRkNcdTMwQzhcclxuICBkYW1hZ2VCYWRnZURhdGEuc29ydCgoYSwgYikgPT4gKGEubXVsdGlwbGllciA+IGIubXVsdGlwbGllciA/IC0xIDogMSkpO1xyXG4gIGRhbWFnZUJhZGdlV3JhcEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgZm9yIChjb25zdCBkYXRhIG9mIGRhbWFnZUJhZGdlRGF0YSkge1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID1cclxuICAgICAgZGF0YS5tdWx0aXBsaWVyID49IDEgPyAndGV4dC1iZy1kYW5nZXInIDogZGF0YS5tdWx0aXBsaWVyID4gMCA/ICd0ZXh0LWJnLXdhcm5pbmcnIDogJ3RleHQtYmctc2Vjb25kYXJ5JztcclxuICAgIGlmIChkYXRhLnZhbHVlKSB7XHJcbiAgICAgIGRhbWFnZUJhZGdlV3JhcEVsZW1lbnQuaW5uZXJIVE1MICs9IGBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSAke2NsYXNzTmFtZX1cIj4ke2RhdGEubGFiZWx9PC9zcGFuPlxyXG4gICAgYDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTY1M0JcdTY0ODNcdTUwNzRcdTMwRkJcdTk2MzJcdTVGQTFcdTUwNzRcdTMwNkVcdTg5ODFcdTdEMjBcdTMwNkJcdTU0MkJcdTMwN0VcdTMwOENcdTMwNjZcdTMwNDRcdTMwOEJcdTMwNEJcdTMwOTJcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcdTMwNTdcdTMwNjZcdTUzRDZcdTVGOTdcclxuICogQHBhcmFtIHsqfSB0YXJnZXRcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIGdldEZpZ2h0ZXJFbGVtZW50KHRhcmdldCkge1xyXG4gIGxldCBlbGVtID0gbnVsbDtcclxuICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5hdHRhY2tlcicpKSB7XHJcbiAgICBlbGVtID0gdGFyZ2V0LmNsb3Nlc3QoJy5hdHRhY2tlcicpO1xyXG4gIH0gZWxzZSBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5kZWZlbmRlcicpKSB7XHJcbiAgICBlbGVtID0gdGFyZ2V0LmNsb3Nlc3QoJy5kZWZlbmRlcicpO1xyXG4gIH1cclxuICByZXR1cm4gZWxlbTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NjUzQlx1NjQ4M1x1NTA3NFx1MzBGQlx1OTYzMlx1NUZBMVx1NTA3NFx1MzA2RVx1OEI1OFx1NTIyNVx1NTQwRFx1MzA5Mlx1ODlBQVx1ODk4MVx1N0QyMFx1MzA0Qlx1MzA4OVx1NTNENlx1NUY5N1xyXG4gKiBAcGFyYW0geyp9IHRhcmdldCBcdTg5ODFcdTdEMjBcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIGdldEZpZ2h0ZXJUeXBlKHRhcmdldCkge1xyXG4gIGxldCByZXMgPSBudWxsO1xyXG4gIGlmICh0YXJnZXQuY2xvc2VzdCgnLmF0dGFja2VyJykpIHtcclxuICAgIHJlcyA9ICdhdHRhY2tlcic7XHJcbiAgfSBlbHNlIGlmICh0YXJnZXQuY2xvc2VzdCgnLmRlZmVuZGVyJykpIHtcclxuICAgIHJlcyA9ICdkZWZlbmRlcic7XHJcbiAgfVxyXG4gIHJldHVybiByZXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTU3RkFcdTc5MEVcdTU0N0RcdTRFMkRcdTczODdcdTMwOTJcdTUzRDZcdTVGOTdcclxuICogQHBhcmFtIHsqfSBhY2N1cmFjeTEgXHU1NDdEXHU0RTJEXHU1MDI0MVxyXG4gKiBAcGFyYW0geyp9IGFjY3VyYWN5MiBcdTU0N0RcdTRFMkRcdTUwMjQyXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRNb3ZlQmFzZUFjY3VyYWN5KGFjY3VyYWN5MSwgYWNjdXJhY3kyLCBtYXhHaW5zZW5nID0gMCkge1xyXG4gIGNvbnN0IGFjYzEgPSBNYXRoLm1pbihhY2N1cmFjeTEsIDEwMCk7XHJcbiAgY29uc3QgYWNjMiA9IE1hdGgubWluKGFjY3VyYWN5MiwgMTAwKTtcclxuICBpZiAobWF4R2luc2VuZyA9PSAwKSByZXR1cm4gYWNjMTtcclxuICBlbHNlIHJldHVybiAoYWNjMSAqIGFjYzIpIC8gMTAwO1xyXG59XHJcblxyXG4vKipcclxuICogSlNPTlx1MzBDN1x1MzBGQ1x1MzBCRlx1MzA5Mlx1NTNENlx1NUY5N1xyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hKc29uRGF0YSgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Bva2Vtb25EYXRhLCBtb3ZlRGF0YSwgbWVzc2FnZURhdGEsIGlxZ3JvdXBEYXRhLCB0eXBlRGF0YV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGdldEpzb25EYXRhKCdwb2tlbW9uJyksXHJcbiAgICAgIGdldEpzb25EYXRhKCdtb3ZlJyksXHJcbiAgICAgIGdldEpzb25EYXRhKCdtZXNzYWdlJyksXHJcbiAgICAgIGdldEpzb25EYXRhKCdpcWdyb3VwJyksXHJcbiAgICAgIGdldEpzb25EYXRhKCd0eXBlJyksXHJcbiAgICBdKTtcclxuICAgIHdpbmRvdy5Qb2tlbW9uRGF0YSA9IHBva2Vtb25EYXRhO1xyXG4gICAgd2luZG93Lk1vdmVEYXRhID0gbW92ZURhdGE7XHJcbiAgICB3aW5kb3cuTWVzc2FnZURhdGEgPSBtZXNzYWdlRGF0YTtcclxuICAgIHdpbmRvdy5JUUdyb3VwRGF0YSA9IGlxZ3JvdXBEYXRhO1xyXG4gICAgd2luZG93LlR5cGVEYXRhID0gdHlwZURhdGE7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7QUFrQ08sTUFBTSxvQkFBb0I7QUFFMUIsTUFBTSxtQkFBbUI7QUFFekIsTUFBTSxrQkFBa0I7QUFPeEIsTUFBTSxnQkFBZ0I7QUFFdEIsTUFBTSxvQkFBb0I7QUFHMUIsTUFBTSxnQkFBZ0I7QUFFdEIsTUFBTSxnQkFBZ0I7QUFFdEIsTUFBTSxvQkFBb0I7QUFFMUIsTUFBTSxpQkFBaUI7QUFFdkIs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LE1BQVUsZUFBZSxRQUFRLElBQUs7QUFBQSxJQUN4QyxFQUFFLE1BQVUsZUFBZSxRQUFRLElBQUs7QUFBQSxJQUN4QyxFQUFFLE1BQVUsYUFBYSxRQUFRLElBQUs7QUFBQSxJQUN0QyxFQUFFLE1BQVUsYUFBYSxRQUFRLElBQUs7QUFBQSxJQUN0QyxFQUFFLE1BQVUsY0FBYyxRQUFRLElBQUs7QUFBQSxJQUN2QyxFQUFFLE1BQVUsWUFBWSxRQUFRLElBQUs7QUFBQSxJQUNyQyxFQUFFLE1BQVUsYUFBYSxRQUFRLElBQUs7QUFBQSxJQUN0QyxFQUFFLE1BQVUsV0FBVyxRQUFRLElBQUs7QUFBQSxJQUNwQyxFQUFFLE1BQVUsWUFBWSxRQUFRLElBQUs7QUFBQTtBQUFBLElBR3JDLEVBQUUsTUFBVSxXQUFXLFFBQVEsSUFBSztBQUFBLElBQ3BDLEVBQUUsTUFBVSxZQUFZLFFBQVEsSUFBSztBQUFBLElBQ3JDLEVBQUUsTUFBVSxZQUFZLFFBQVEsSUFBSztBQUFBLElBQ3JDLEVBQUUsTUFBVSxlQUFlLFFBQVEsSUFBSztBQUFBLElBQ3hDLEVBQUUsTUFBVSxVQUFVLFFBQVEsSUFBSztBQUFBLElBQ25DLEVBQUUsTUFBVSxlQUFlLFFBQVEsSUFBSztBQUFBLElBQ3hDLEVBQUUsTUFBVSxhQUFhLFFBQVEsSUFBSztBQUFBLElBQ3RDLEVBQUUsTUFBVSxhQUFhLFFBQVEsSUFBSztBQUFBLElBQ3RDLEVBQUUsTUFBVSxjQUFjLFFBQVEsSUFBSztBQUFBLElBQ3ZDLEVBQUUsTUFBVSxVQUFVLFFBQVEsSUFBSztBQUFBLElBQ25DLEVBQUUsTUFBVSxXQUFXLFFBQVEsSUFBSztBQUFBLElBQ3BDLEVBQUUsTUFBVSxZQUFZLFFBQVEsSUFBSztBQUFBLElBQ3JDLEVBQUUsTUFBVSxhQUFhLFFBQVEsSUFBSztBQUFBLElBQ3RDLEVBQUUsTUFBVSxXQUFXLFFBQVEsSUFBSztBQUFBLElBQ3BDLEVBQUUsTUFBVSxZQUFZLFFBQVEsSUFBSztBQUFBLElBRXJDLEVBQUUsTUFBVSxXQUFXLFFBQVEsSUFBSztBQUFBLEVBQ3RDO0FBR08sTUFBTSxrQ0FBa0MsQ0FBQyxJQUFNLElBQU0sSUFBTSxJQUFNLElBQU0sSUFBTSxJQUFNLENBQUk7QUFHdkYsTUFBTSx3QkFBd0I7QUFFOUIsTUFBTSwrQkFBK0I7QUFFckMsTUFBTSwyQkFBMkI7QUFFakMsTUFBTSxnQ0FBZ0M7QUFFdEMsTUFBTSwrQkFBK0I7QUFFckMsTUFBTSw4QkFBOEI7QUFFcEMsTUFBTSx3QkFBd0I7QUFFOUIsTUFBTSx5QkFBeUI7QUFFL0IsTUFBTSwyQkFBMkI7QUFFakMsTUFBTSwrQkFBK0I7QUFFckMsTUFBTSxpQ0FBaUM7QUFFdkMsTUFBTSw0QkFBNEI7QUFBQSxJQUN2QztBQUFBLElBQ0EsSUFBSSxLQUFPO0FBQUE7QUFBQSxJQUNYO0FBQUEsSUFDQSxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsSUFDQSxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1g7QUFBQSxJQUNBLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLEVBQ2I7QUFFTyxNQUFNLDZCQUE2QixDQUFDLEdBQUcsWUFBWSxHQUFHLENBQUM7QUFFdkQsTUFBTSxnQ0FBZ0M7QUFBQSxJQUMzQyxLQUFPO0FBQUE7QUFBQSxJQUNQLEtBQU87QUFBQTtBQUFBLElBQ1A7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUVPLE1BQU0sNkJBQTZCO0FBQUEsSUFDeEMsS0FBTztBQUFBO0FBQUEsSUFDUCxLQUFPO0FBQUE7QUFBQSxJQUNQO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFFTyxNQUFNLDhCQUE4QjtBQUFBLElBQ3pDLEtBQU87QUFBQTtBQUFBLElBQ1AsS0FBTztBQUFBO0FBQUEsSUFDUDtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBRU8sTUFBTSxnQ0FBZ0M7QUFBQSxJQUMzQztBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBO0FBQUEsRUFDRjtBQUVPLE1BQU0saUNBQWlDO0FBQUEsSUFDNUM7QUFBQTtBQUFBLElBQ0E7QUFBQTtBQUFBLElBQ0E7QUFBQTtBQUFBLElBQ0E7QUFBQTtBQUFBLElBQ0E7QUFBQTtBQUFBLElBQ0E7QUFBQTtBQUFBLElBQ0E7QUFBQTtBQUFBLElBQ0E7QUFBQTtBQUFBLEVBQ0Y7QUFFTyxNQUFNLDBCQUEwQjtBQUFBLElBQ3JDO0FBQUE7QUFBQSxJQUNBO0FBQUE7QUFBQSxJQUNBO0FBQUE7QUFBQSxJQUNBO0FBQUE7QUFBQSxJQUNBO0FBQUE7QUFBQSxJQUNBO0FBQUE7QUFBQSxJQUNBO0FBQUE7QUFBQSxJQUNBO0FBQUE7QUFBQSxFQUNGO0FBR08sTUFBTSxtQ0FBbUM7QUFBQSxJQUM5QyxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxJQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksS0FBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsRUFDYjtBQUVPLE1BQU0sbUNBQW1DO0FBQUEsSUFDOUMsSUFBSSxJQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksS0FBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxLQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksS0FBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxLQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksSUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxLQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksS0FBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLEVBQ2I7QUFFTyxNQUFNLGtDQUFrQztBQUFBLElBQzdDLElBQUksS0FBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxLQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLElBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxLQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxJQUFPO0FBQUE7QUFBQSxFQUNiO0FBRU8sTUFBTSxpQ0FBaUM7QUFBQSxJQUM1QyxJQUFJLElBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxJQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxLQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksS0FBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxLQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksS0FBTztBQUFBO0FBQUEsRUFDYjtBQUVPLE1BQU0sb0NBQW9DO0FBQUEsSUFDL0MsSUFBSSxLQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksS0FBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksS0FBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLElBQU87QUFBQTtBQUFBLEVBQ2I7QUFFTyxNQUFNLG1DQUFtQztBQUFBLElBQzlDLElBQUksSUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksS0FBTztBQUFBO0FBQUEsSUFDWCxJQUFJLElBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxLQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksS0FBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxLQUFPO0FBQUE7QUFBQSxFQUNiO0FBR08sTUFBTSx5QkFBeUI7QUFFL0IsTUFBTSx3QkFBd0I7QUFFOUIsTUFBTSx5QkFBeUI7QUFFL0IsTUFBTSwyQkFBMkI7QUFFakMsTUFBTSxzQkFBc0I7QUFFNUIsTUFBTSxrQ0FBa0M7QUFFeEMsTUFBTSw4QkFBOEI7QUFLcEMsTUFBTSx3QkFBd0I7QUFFOUIsTUFBTSwwQkFBMEI7QUFFaEMsTUFBTSx1QkFBdUI7QUFFN0IsTUFBTSx1QkFBdUI7QUFFN0IsTUFBTSxzQkFBc0I7QUFFNUIsTUFBTSx3QkFBd0I7QUFFOUIsTUFBTSw2QkFBNkI7QUFFbkMsTUFBTSw2QkFBNkI7QUFFbkMsTUFBTSxrQ0FBa0M7QUFFeEMsTUFBTSxpQ0FBaUM7QUFFdkMsTUFBTSxrQ0FBa0M7QUFHeEMsTUFBTSxrQ0FBa0M7QUFFeEMsTUFBTSxtQkFBbUI7QUFFekIsTUFBTSxhQUFhO0FBR25CLE1BQU0sMEJBQTBCO0FBQUEsSUFDckMsSUFBSSxnQkFBZ0IsSUFBVSxZQUFZLENBQUM7QUFBQTtBQUFBLElBQzNDLElBQUksZ0JBQWdCLElBQVUsYUFBYSxDQUFDO0FBQUE7QUFBQSxJQUM1QyxJQUFJLGdCQUFnQixJQUFVLGNBQWMsQ0FBQztBQUFBO0FBQUEsSUFDN0MsSUFBSSxnQkFBZ0IsSUFBVSxZQUFZLENBQUM7QUFBQTtBQUFBLElBQzNDLElBQUksZ0JBQWdCLElBQVUsYUFBYSxDQUFDO0FBQUE7QUFBQSxJQUM1QyxJQUFJLGdCQUFnQixJQUFVLFdBQVcsQ0FBQztBQUFBO0FBQUEsSUFDMUMsSUFBSSxnQkFBZ0IsSUFBVSxZQUFZLENBQUM7QUFBQTtBQUFBLElBQzNDLElBQUksZ0JBQWdCLElBQVUsV0FBVyxDQUFDO0FBQUE7QUFBQSxJQUMxQyxJQUFJLGdCQUFnQixJQUFVLGVBQWUsQ0FBQztBQUFBO0FBQUEsSUFDOUMsSUFBSSxnQkFBZ0IsSUFBVSxZQUFZLENBQUM7QUFBQTtBQUFBLElBQzNDLElBQUksZ0JBQWdCLElBQVUsV0FBVyxDQUFDO0FBQUE7QUFBQSxJQUMxQyxJQUFJLGdCQUFnQixJQUFVLGFBQWEsQ0FBQztBQUFBO0FBQUEsSUFDNUMsSUFBSSxnQkFBZ0IsSUFBVSxlQUFlLENBQUM7QUFBQTtBQUFBLElBQzlDLElBQUksZ0JBQWdCLElBQVUsV0FBVyxDQUFDO0FBQUE7QUFBQSxJQUMxQyxJQUFJLGdCQUFnQixJQUFVLFlBQVksQ0FBQztBQUFBO0FBQUEsSUFDM0MsSUFBSSxnQkFBZ0IsSUFBVSxVQUFVLENBQUM7QUFBQTtBQUFBLElBQ3pDLElBQUksZ0JBQWdCLElBQVUsYUFBYSxFQUFFO0FBQUE7QUFBQSxJQUM3QyxJQUFJLGdCQUFnQixJQUFVLGNBQWMsQ0FBQztBQUFBO0FBQUEsSUFDN0MsSUFBSSxnQkFBZ0IsSUFBVSxhQUFhLENBQUM7QUFBQTtBQUFBLElBQzVDLElBQUksZ0JBQWdCLElBQVUsYUFBYSxDQUFDO0FBQUE7QUFBQSxJQUM1QyxJQUFJLGdCQUFnQixJQUFVLFlBQVksQ0FBQztBQUFBO0FBQUEsSUFDM0MsSUFBSSxnQkFBZ0IsSUFBVSxVQUFVLENBQUM7QUFBQTtBQUFBLElBQ3pDLElBQUksZ0JBQWdCLElBQVUsYUFBYSxFQUFFO0FBQUE7QUFBQSxJQUM3QyxJQUFJLGdCQUFnQixJQUFVLGFBQWEsQ0FBQztBQUFBO0FBQUEsSUFDNUMsSUFBSSxnQkFBZ0IsSUFBVSxZQUFZLENBQUM7QUFBQTtBQUFBLElBQzNDLElBQUksZ0JBQWdCLElBQVUsZUFBZSxDQUFDO0FBQUE7QUFBQSxJQUM5QyxJQUFJLGdCQUFnQixJQUFVLFVBQVUsQ0FBQztBQUFBO0FBQUEsSUFDekMsSUFBSSxnQkFBZ0IsS0FBVSxZQUFZLENBQUM7QUFBQTtBQUFBLElBQzNDLElBQUksZ0JBQWdCLEtBQVUsYUFBYSxDQUFDO0FBQUE7QUFBQSxJQUM1QyxJQUFJLGdCQUFnQixLQUFVLFVBQVUsRUFBRTtBQUFBO0FBQUEsSUFDMUMsSUFBSSxnQkFBZ0IsS0FBVSxhQUFhLENBQUM7QUFBQTtBQUFBLElBQzVDLElBQUksZ0JBQWdCLEtBQVUsYUFBYSxDQUFDO0FBQUE7QUFBQSxJQUM1QyxJQUFJLGdCQUFnQixLQUFVLFlBQVksQ0FBQztBQUFBO0FBQUEsSUFDM0MsSUFBSSxnQkFBZ0IsR0FBVSxXQUFXLENBQUM7QUFBQTtBQUFBLEVBQzVDO0FBR08sTUFBTSwyQkFBMkI7QUFBQSxJQUN0QyxFQUFFLElBQUksR0FBTyxPQUFPLEdBQUc7QUFBQTtBQUFBLElBQ3ZCLEVBQUUsSUFBSSxJQUFPLE9BQU8sR0FBRztBQUFBO0FBQUEsSUFDdkIsRUFBRSxJQUFJLElBQU8sT0FBTyxHQUFHO0FBQUE7QUFBQSxJQUN2QixFQUFFLElBQUksS0FBTyxPQUFPLEdBQUc7QUFBQTtBQUFBLElBQ3ZCLEVBQUUsSUFBSSxLQUFPLE9BQU8sR0FBRztBQUFBO0FBQUEsSUFDdkIsRUFBRSxJQUFJLEtBQU8sT0FBTyxHQUFHO0FBQUE7QUFBQSxJQUN2QixFQUFFLElBQUksS0FBTyxPQUFPLEdBQUc7QUFBQTtBQUFBLElBQ3ZCLEVBQUUsSUFBSSxLQUFPLE9BQU8sR0FBRztBQUFBO0FBQUEsSUFDdkIsRUFBRSxJQUFJLEtBQU8sT0FBTyxHQUFHO0FBQUE7QUFBQSxJQUN2QixFQUFFLElBQUksS0FBTyxPQUFPLEdBQUc7QUFBQTtBQUFBLElBQ3ZCLEVBQUUsSUFBSSxLQUFPLE9BQU8sR0FBRztBQUFBO0FBQUEsSUFDdkIsRUFBRSxJQUFJLEtBQU8sT0FBTyxHQUFHO0FBQUE7QUFBQSxJQUN2QixFQUFFLElBQUksS0FBTyxPQUFPLEdBQUc7QUFBQTtBQUFBLEVBQ3pCO0FBR08sTUFBTSx5QkFBeUIsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO0FBRXpELE1BQU0seUJBQXlCO0FBRS9CLE1BQU0sMEJBQTBCO0FBRWhDLE1BQU0sMkJBQTJCO0FBVWpDLE1BQU0sNEJBQTRCO0FBQUEsSUFDdkMsRUFBRSxJQUFJLElBQUksUUFBUSxFQUFFO0FBQUEsSUFDcEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQU0sUUFBUSxHQUFHO0FBQUEsSUFDdkIsRUFBRSxJQUFJLEtBQU8sUUFBUSxLQUFLO0FBQUEsSUFDMUIsRUFBRSxJQUFJLElBQUksUUFBUSxFQUFFO0FBQUE7QUFBQSxFQUN0QjtBQUVPLE1BQU0saUNBQWlDO0FBQUEsSUFDNUMsRUFBRSxJQUFJLEdBQUcsUUFBUSxLQUFLO0FBQUEsSUFDdEIsRUFBRSxJQUFJLElBQUksUUFBUSxHQUFHO0FBQUEsSUFDckIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQU0sUUFBUSxFQUFFO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQU8sUUFBUSxFQUFFO0FBQUEsSUFDdkIsRUFBRSxJQUFJLElBQUksUUFBUSxFQUFFO0FBQUE7QUFBQSxFQUN0QjtBQU9PLFdBQVMsWUFBWSxRQUFRO0FBQ2xDLFFBQUksQ0FBQyxVQUFVO0FBQ2IsY0FBUSxNQUFNLG9CQUFvQjtBQUNsQztBQUFBLElBQ0Y7QUFDQSxXQUFPLFNBQVMsTUFBTSxFQUFFO0FBQUEsRUFDMUI7QUFNTyxXQUFTLDRCQUE0QixRQUFRO0FBQ2xELFdBQU8sVUFBVSxPQUFTLFVBQVU7QUFBQSxFQUN0QztBQU9PLFdBQVMsVUFBVSxRQUFRO0FBQ2hDLFdBQU8sVUFBVSxPQUFTLFVBQVU7QUFBQSxFQUN0QztBQU9PLFdBQVMsNEJBQTRCLFFBQVE7QUFDbEQsV0FBTyxVQUFjLGVBQWUsVUFBYztBQUFBLEVBQ3BEO0FBUU8sV0FBUyxpQkFBaUIsUUFBUSxjQUFjO0FBQ3JELFFBQUksQ0FBQyxVQUFVO0FBQ2IsY0FBUSxNQUFNLG9CQUFvQjtBQUNsQztBQUFBLElBQ0Y7QUFDQSxVQUFNQyxRQUFPLFNBQVMsTUFBTTtBQUM1QixRQUFJLGNBQWM7QUFDaEIsWUFBTSxjQUFjLDZCQUE2QixNQUFNO0FBQ3ZELFVBQUksWUFBYSxRQUFPO0FBQUEsSUFDMUI7QUFDQSxXQUFPQSxNQUFLO0FBQUEsRUFDZDtBQVFPLFdBQVMsZ0JBQWdCLFFBQVEsV0FBVztBQUNqRCxRQUFJLENBQUMsVUFBVTtBQUNiLGNBQVEsTUFBTSxvQkFBb0I7QUFDbEM7QUFBQSxJQUNGO0FBQ0EsVUFBTUEsUUFBTyxTQUFTLE1BQU07QUFDNUIsUUFBSSxXQUFXO0FBQ2IsYUFBT0EsTUFBSztBQUFBLElBQ2Q7QUFDQSxXQUFPQSxNQUFLO0FBQUEsRUFDZDtBQU9PLFdBQVMsa0JBQWtCLFFBQVE7QUFDeEMsUUFBSSxDQUFDLFVBQVU7QUFDYixjQUFRLE1BQU0sb0JBQW9CO0FBQ2xDO0FBQUEsSUFDRjtBQUNBLFVBQU1BLFFBQU8sU0FBUyxNQUFNO0FBQzVCLFdBQU9BLE1BQUs7QUFBQSxFQUNkO0FBT08sV0FBUyw2QkFBNkIsUUFBUTtBQUNuRCxhQUFTLElBQUksR0FBRyxJQUFJLHlCQUF5QixRQUFRLEtBQUs7QUFDeEQsWUFBTSxRQUFRLHlCQUF5QixDQUFDO0FBQ3hDLFVBQUksTUFBTSxNQUFNLFFBQVE7QUFDdEIsZUFBTyxNQUFNO0FBQUEsTUFDZjtBQUFBLElBQ0Y7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQU9PLFdBQVMsYUFBYSxRQUFRO0FBQ25DLFFBQUksQ0FBQyxVQUFVO0FBQ2IsY0FBUSxNQUFNLG9CQUFvQjtBQUFBLElBQ3BDO0FBQ0EsV0FBTyxTQUFTLE1BQU0sRUFBRTtBQUFBLEVBQzFCO0FBTU8sV0FBUyxhQUFhLFFBQVE7QUFDbkMsV0FBTztBQUFBLE1BQ0w7QUFBQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLElBQ0YsRUFBRSxTQUFTLE1BQU07QUFBQSxFQUNuQjtBQU1PLFdBQVMsWUFBWSxRQUFRO0FBQ2xDLFdBQU87QUFBQSxNQUNMO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUNBO0FBQUE7QUFBQSxJQUNGLEVBQUUsU0FBUyxNQUFNO0FBQUEsRUFDbkI7QUFPTyxXQUFTLFlBQVksUUFBUTtBQUNsQyxXQUFPO0FBQUEsTUFDTDtBQUFBO0FBQUEsTUFDQTtBQUFBO0FBQUEsTUFDQTtBQUFBO0FBQUEsTUFDQTtBQUFBO0FBQUEsTUFDQTtBQUFBO0FBQUEsTUFDQTtBQUFBO0FBQUEsTUFDQTtBQUFBO0FBQUEsTUFDQTtBQUFBO0FBQUEsTUFDQTtBQUFBO0FBQUEsTUFDQTtBQUFBO0FBQUEsTUFDQTtBQUFBO0FBQUEsTUFDQTtBQUFBO0FBQUEsTUFDQTtBQUFBO0FBQUEsSUFDRixFQUFFLFNBQVMsTUFBTTtBQUFBLEVBQ25CO0FBT08sV0FBUyxpQkFBaUIsV0FBVztBQUMxQyxRQUFJLENBQUMsYUFBYTtBQUNoQixjQUFRLE1BQU0sdUJBQXVCO0FBQ3JDO0FBQUEsSUFDRjtBQUNBLFVBQU0sVUFBVSxZQUFZLFNBQVM7QUFDckMsVUFBTSxNQUFNLFFBQVE7QUFDcEIsYUFBUyxPQUFPLE1BQU0sTUFBTSxRQUFTO0FBQUEsRUFDdkM7OztBQ3pwQk8sTUFBTSxhQUFhO0FBQUEsSUFDeEIsRUFBRSxJQUFJLEdBQUcsTUFBTSxlQUFLO0FBQUEsSUFDcEIsRUFBRSxJQUFJLEdBQUcsTUFBTSxlQUFLO0FBQUEsSUFDcEIsRUFBRSxJQUFJLEdBQUcsTUFBTSxlQUFLO0FBQUEsSUFDcEIsRUFBRSxJQUFJLEdBQUcsTUFBTSxlQUFLO0FBQUEsRUFDdEI7OztBQ09BLE1BQU0sUUFBTixNQUFZO0FBQUEsSUFDVixLQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxZQUFZLElBQUksTUFBTTtBQUNwQixXQUFLLEtBQUs7QUFDVixXQUFLLE9BQU87QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUdPLE1BQU0sZ0JBQWdCO0FBQUEsSUFDM0IsSUFBSSxNQUFVLG1CQUFtQixjQUFJO0FBQUEsSUFDckMsSUFBSSxNQUFVLGtCQUFrQixjQUFJO0FBQUEsSUFDcEMsSUFBSSxNQUFNLEdBQUcsY0FBSTtBQUFBLEVBQ25CO0FBR08sTUFBTSxlQUFlO0FBQUEsSUFDMUIsSUFBSSxNQUFVLGdCQUFnQiwwQkFBTTtBQUFBLElBQ3BDLElBQUksTUFBVSw0QkFBNEIsMEJBQU07QUFBQSxJQUNoRCxJQUFJLE1BQVUsaUJBQWlCLGNBQUk7QUFBQSxJQUNuQyxJQUFJLE1BQVUseUJBQXlCLDBCQUFNO0FBQUEsRUFDL0M7QUFHTyxNQUFNLGlCQUFpQjtBQUFBLElBQzVCLElBQUksTUFBVSxxQkFBcUIsUUFBRztBQUFBLElBQ3RDLElBQUksTUFBVSxxQkFBcUIsb0JBQUs7QUFBQSxJQUN4QyxJQUFJLE1BQVUsNkJBQTZCLDBCQUFNO0FBQUEsSUFDakQsSUFBSSxNQUFVLHVCQUF1QixjQUFJO0FBQUEsSUFDekMsSUFBSSxNQUFVLHlCQUF5QixlQUFLO0FBQUEsSUFDNUMsSUFBSSxNQUFVLHFCQUFxQiwwQkFBTTtBQUFBLElBQ3pDLElBQUksTUFBVSx3QkFBd0IsZ0NBQU87QUFBQSxJQUM3QyxJQUFJLE1BQVUsc0JBQXNCLG9CQUFLO0FBQUEsSUFDekMsSUFBSSxNQUFVLDBCQUEwQixvQkFBSztBQUFBLElBQzdDLElBQUksTUFBVSwyQkFBMkIsMEJBQU07QUFBQSxJQUMvQyxJQUFJLE1BQVUsdUJBQXVCLDBCQUFNO0FBQUEsSUFDM0MsSUFBSSxNQUFVLDRCQUE0QixzQ0FBUTtBQUFBLElBQ2xELElBQUksTUFBVSw2QkFBNkIsMEJBQU07QUFBQSxJQUNqRCxJQUFJLE1BQVUsdUJBQXVCLGdDQUFPO0FBQUEsSUFDNUMsSUFBSSxNQUFVLHVCQUF1QiwwQkFBTTtBQUFBLElBQzNDLElBQUksTUFBVSwyQkFBMkIsMkJBQU87QUFBQSxJQUNoRCxJQUFJLE1BQVUsMkJBQTJCLDJCQUFPO0FBQUEsSUFDaEQsSUFBSSxNQUFVLDZCQUE2QixnQ0FBTztBQUFBLElBQ2xELElBQUksTUFBVSw0QkFBNEIsb0JBQUs7QUFBQSxJQUMvQyxJQUFJLE1BQVUsNEJBQTRCLGdDQUFPO0FBQUEsSUFDakQsSUFBSSxNQUFVLHlCQUF5QixlQUFLO0FBQUEsSUFDNUMsSUFBSSxNQUFVLDZCQUE2Qiw0Q0FBUztBQUFBLElBQ3BELElBQUksTUFBVSw2QkFBNkIsMEJBQU07QUFBQSxJQUNqRCxJQUFJLE1BQVUsK0JBQStCLGlCQUFPO0FBQUEsSUFDcEQsSUFBSSxNQUFVLDJCQUEyQixnQ0FBTztBQUFBLElBQ2hELElBQUksTUFBVSw0QkFBNEIsZ0NBQU87QUFBQSxJQUNqRCxJQUFJLE1BQVUseUJBQXlCLHNDQUFRO0FBQUEsRUFDakQ7OztBQ2xETyxXQUFTLFVBQVUsR0FBRztBQUMzQixVQUFNLGtCQUFrQjtBQUFBLE1BQ3RCLElBQU07QUFBQSxNQUNOLElBQU07QUFBQSxNQUNOLFFBQVM7QUFBQSxNQUNULFFBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLE9BQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLE9BQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxJQUNaO0FBQ0EsUUFBSSxJQUFJLEVBQUcsS0FBSTtBQUNmLFFBQUksSUFBSSxLQUFNLEtBQUk7QUFDbEIsV0FBTyxnQkFBZ0IsQ0FBQztBQUFB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LFFBQVEsV0FBVyxHQUFHO0FBQy9CLGFBQU8sT0FBTyxRQUFRLFdBQVc7QUFBQSxJQUNuQyxXQUFXLE9BQU8sUUFBUSxXQUFXLEdBQUc7QUFDdEMsYUFBTyxPQUFPLFFBQVEsV0FBVztBQUFBLElBQ25DO0FBQ0EsV0FBTztBQUFBLEVBQ1Q7QUFPQSxXQUFTLGVBQWUsUUFBUTtBQUM5QixRQUFJLE1BQU07QUFDVixRQUFJLE9BQU8sUUFBUSxXQUFXLEdBQUc7QUFDL0IsWUFBTTtBQUFBLElBQ1IsV0FBVyxPQUFPLFFBQVEsV0FBVyxHQUFHO0FBQ3RDLFlBQU07QUFBQSxJQUNSO0FBQ0EsV0FBTztBQUFBLEVBQ1Q7QUFRQSxXQUFTLG9CQUFvQixXQUFXLFdBQVcsYUFBYSxHQUFHO0FBQ2pFLFVBQU0sT0FBTyxLQUFLLElBQUksV0FBVyxHQUFHO0FBQ3BDLFVBQU0sT0FBTyxLQUFLLElBQUksV0FBVyxHQUFHO0FBQ3BDLFFBQUksY0FBYyxFQUFHLFFBQU87QUFBQSxRQUN2QixRQUFRLE9BQU8sT0FBUTtBQUFBLEVBQzlCO0FBS0EsaUJBQWUsZ0JBQWdCO0FBQzdCLFFBQUk7QUFDRixZQUFNLENBQUMsYUFBYSxVQUFVLGFBQWEsYUFBYSxRQUFRLElBQUksTUFBTSxRQUFRLElBQUk7QUFBQSxRQUNwRixZQUFZLFNBQVM7QUFBQSxRQUNyQixZQUFZLE1BQU07QUFBQSxRQUNsQixZQUFZLFNBQVM7QUFBQSxRQUNyQixZQUFZLFNBQVM7QUFBQSxRQUNyQixZQUFZLE1BQU07QUFBQSxNQUNwQixDQUFDO0FBQ0QsYUFBTyxjQUFjO0FBQ3JCLGFBQU8sV0FBVztBQUNsQixhQUFPLGNBQWM7QUFDckIsYUFBTyxjQUFjO0FBQ3JCLGFBQU8sV0FBVztBQUFBLElBQ3BCLFNBQVMsR0FBRztBQUNWLGNBQVEsTUFBTSxDQUFDO0FBQUEsSUFDakI7QUFBQSxFQUNGOyIsCiAgIm5hbWVzIjogWyJtb3ZlIiwgIk1BVENIVVBfSU1NVU5FIiwgIk1BVENIVVBfTkVVVFJBTCIsICJtb3ZlIiwgIk1BVENIVVBfSU1NVU5FIiwgIk1BVENIVVBfTkVVVFJBTCIsICJNb3ZlTm90UGh5c2lhbCIsICJ3ZWF0aGVyIiwgIm1vdmUiLCAibW92ZSIsICJNb3ZlTm90UGh5c2lhbCIsICJtb3ZlIiwgIk1BVENIVVBfSU1NVU5FIiwgIk1BVENIVVBfTkVVVFJBTCJdCn0K
