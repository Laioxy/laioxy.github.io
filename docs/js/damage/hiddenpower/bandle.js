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

  // ns-hugo-imp:F:\Git\laioxy.github.io\assets\js\param.js
  var VALID_MAX_DUNGEON_ID = 191;
  var WEATHER_STRINGS = ["\u306F\u308C", "\u3072\u3056\u3057\u304C\u3064\u3088\u3044", "\u3059\u306A\u3042\u3089\u3057", "\u304F\u3082\u308A", "\u3042\u3081", "\u3042\u3089\u308C", "\u304D\u308A", "\u3086\u304D"];

  // ns-hugo-imp:F:\Git\laioxy.github.io\assets\js\json_script.js
  var jsonPathsArray = {
    pokemon: "/data/pokemon.min.json",
    item: "/data/item.min.json",
    move: "/data/move.min.json",
    dungeon: "/data/dungeon.min.json",
    floor: "/data/floor.min.json",
    mappa_s: "/data/mappa_s.min.json",
    mappa_t: "/data/mappa_t.min.json",
    mappa_y: "/data/mappa_y.min.json",
    fixed: "/data/fixed.min.json",
    message: "/data/message.min.json",
    type: "/data/type.min.json",
    iqgroup: "/data/iqgroup.min.json",
    iqskill: "/data/iqskill.min.json",
    rescue: "/data/rescue.min.json"
  };
  async function getJsonData(key) {
    try {
      return await fetch(jsonPathsArray[key]).then((res) => res.json());
    } catch (e) {
      console.error("getJsonData Failed: ", e);
      return null;
    }
  }

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
    getMovePower(move) {
      if (move.id == 324) {
        return move.ginseng + this.hidden_power_base_power;
      }
      let power = move.ginseng + getMoveBasePower(move.id, move.timeDarkness);
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
    const move = MoveData[moveId];
    if (timeDarkness) {
      const tdBasePower = getMoveBasePowerTimeDarkness(moveId);
      if (tdBasePower) return tdBasePower;
    }
    return move.Power;
  }
  function getMoveAccuracy(moveId, accuracy2) {
    if (!MoveData) {
      console.error("MoveData not found");
      return;
    }
    const move = MoveData[moveId];
    if (accuracy2) {
      return move.Accuracy2;
    }
    return move.Accuracy1;
  }
  function getMoveCritChance(moveId) {
    if (!MoveData) {
      console.error("MoveData not found");
      return;
    }
    const move = MoveData[moveId];
    return move.Critical;
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
    let not_physical = MoveNotPhysial(moveId);
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
    if (attacker.abilityActive(48) && !MoveNotPhysial(moveId)) {
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
  function simulateDamageCalcWithMult(damageData, dungeon, attacker, defender, move, damageMult) {
    if (!executeMoveEffectPrechecks(dungeon, attacker, defender, move.id)) {
      return 0;
    }
    const attackType = attacker.getMoveType(move.id, dungeon);
    const attackPower = attacker.getMovePower(move);
    return simulateDamageCalcShared(
      damageData,
      dungeon,
      attacker,
      defender,
      attackType,
      attackPower,
      damageMult,
      move.id
    );
  }
  function simulateDamageCalcWeatherBall(damageData, dungeon, attacker, defender, ginseng = 0) {
    if (!executeMoveEffectPrechecks(dungeon, attacker, defender, 31)) {
      return 0;
    }
    const weather = attacker.perceivedWeather(dungeon);
    const attackType = WEATHER_BALL_TYPE_TABLE[weather];
    const move = new Move();
    move.id = 31;
    move.ginseng = ginseng;
    const damageMult = WEATHER_BALL_DAMAGE_MULT_TABLE[weather];
    const attackPower = attacker.getMovePower(move);
    dungeon.damageDetailLog.damageMult = damageMult;
    return simulateDamageCalcShared(damageData, dungeon, attacker, defender, attackType, attackPower, damageMult, 31);
  }
  function simulateDamageCalcNaturalGift(damageData, dungeon, attacker, defender, ginseng = 0) {
    if (!executeMoveEffectPrechecks(dungeon, attacker, defender, 471)) {
      return 0;
    }
    const move = new Move();
    move.id = 471;
    move.ginseng = ginseng;
    if (attacker.heldItem != 0) {
      const ngInfo = attacker.naturalGiftInfo();
      if (ngInfo) {
        let attackPower = attacker.getMovePower(move) + ngInfo.basePowerBoost;
        if (attackPower > 32767) {
          attackPower -= 1 << 16;
        }
        return simulateDamageCalcShared(damageData, dungeon, attacker, defender, ngInfo.typeId, attackPower, 1, 471);
      }
    }
    return simulateDamageCalcWithMult(damageData, dungeon, attacker, defender, move, 1);
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
  function simulateDamageCalc(damageData, dungeon, attacker, defender, move) {
    let damageMult = 1;
    let fixedDamage = 0;
    switch (move.id) {
      case 0:
        damageMult = 0;
        break;
      case 2:
      // アイスボール
      case 105:
        damageMult = ROLLOUT_DAMAGE_MULT_TABLE[Math.min(move.priorSuccessiveHits, 9)];
        break;
      case 8:
        damageMult = DIG_DAMAGE_MULTIPLIER;
        break;
      case 20:
        fixedDamage = Math.floor(defender.hp / 2);
        return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move, fixedDamage);
      case 31:
        return simulateDamageCalcWeatherBall(damageData, dungeon, attacker, defender, move.ginseng);
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
        return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move, fixedDamage);
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
        return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move, fixedDamage);
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
        return simulateDamageCalcFixedDynamic(damageData, dungeon, attacker, defender, move, fixedDamage);
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
        const moveType = attacker.getMoveType(move.id, dungeon);
        const isMoldBreaker = attacker.abilityActive(83);
        if (!isMoldBreaker && defender.levitateActive(dungeon)) {
          fixedDamage = 0;
        } else if (checkMoveHitOhko(dungeon, attacker, defender, moveType)) {
          fixedDamage = 9999;
        }
        return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move, fixedDamage);
      }
      case 150:
      // ぜったいれいど, つのドリル, ハサミギロチン
      case 177:
      case 247: {
        const moveType = attacker.getMoveType(move.id, dungeon);
        if (checkMoveHitOhko(dungeon, attacker, defender, moveType)) {
          fixedDamage = 9999;
        }
        return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move, fixedDamage);
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
        return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move, fixedDamage);
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
        return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move, fixedDamage);
      case 205:
        damageMult = BOUNCE_DAMAGE_MULTIPLIER;
        break;
      case 206:
      // とびひざげり
      case 272:
        damageMult = 2;
        break;
      case 210:
        damageMult = Math.min(move.priorSuccessiveHits + 1, 3);
        break;
      case 245:
        damageMult = attacker.statuses.stockpile;
        break;
      case 277:
        fixedDamage = getValueByRatio([0, 25, 50, 75], dungeon.rng.varianceDial);
        return simulateDamageCalcFixedDynamic(damageData, dungeon, attacker, defender, move, fixedDamage);
      case 278:
        damageMult = ERUPTION_DAMAGE_MULT_TABLE[getHpDepMultTableIdx(attacker)];
        break;
      case 296:
        fixedDamage = getValueByRatio(MAGNITUDE_DAMAGE_TABLE, dungeon.rng.varianceDial);
        if (defender.statuses.digging) {
          fixedDamage *= 2;
        }
        return simulateDamageCalcFixedDynamic(damageData, dungeon, attacker, defender, move, fixedDamage);
      case 328:
        for (const dmg of FRUSTRATION_FIXED_DAMAGE_TABLE) {
          if (dmg.iq < 0) break;
          if (attacker.iq < dmg.iq) {
            fixedDamage = dmg.damage;
            break;
          }
        }
        return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move, fixedDamage);
      case 331:
        if (!defender.statuses.sleep && !defender.statuses.nightmare && !defender.statuses.napping) {
          dungeon.damageCalc.dreamEaterFailed = true;
          return 0;
        }
        break;
      case 341:
        fixedDamage = DRAGON_RAGE_FIXED_DAMAGE;
        return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move, fixedDamage);
      case 348:
        damageMult = SKULL_BASH_DAMAGE_MULTIPLIER;
        break;
      case 355:
        damageMult = CONST_0_50;
        break;
      case 392:
        fixedDamage = 9999;
        return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move, fixedDamage);
      case 394:
        fixedDamage = VACUUM_CUT_FIXED_DAMAGE;
        return simulateDamageCalcFixedDynamic(damageData, dungeon, attacker, defender, move, fixedDamage);
      case 397:
        fixedDamage = defender.getSize();
        return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move, fixedDamage);
      case 471:
        return simulateDamageCalcNaturalGift(damageData, dungeon, attacker, defender, move.ginseng);
      case 457:
        let maxPP = getMoveMaxPP(move.id);
        if (maxPP == 0) {
          maxPP = 1;
        }
        let ppFrac = move.pp * 100 / maxPP;
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
        if (nMovesOutOfPP > 0 && move.pp == 0) {
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
        if (checkNoDamageMove(move.id)) {
          return simulateDamageCalcStatusMoves(damageData, dungeon, attacker, defender, move);
        }
        break;
    }
    dungeon.damageDetailLog.damageMult = damageMult;
    return simulateDamageCalcWithMult(damageData, dungeon, attacker, defender, move, damageMult);
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
  function MoveNotPhysial(moveId) {
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
  function RunCalcDamage(dungeon, attacker, defender, move, attackPower) {
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
    const moveMin = deepClone(move);
    const moveMax = deepClone(move);
    dungeon.rng.varianceDial = 0.5;
    dungeonMin.rng.varianceDial = 0;
    dungeonMax.rng.varianceDial = 1;
    const details = new DamageData();
    const detailsMinVar = new DamageData();
    const detailsMaxVar = new DamageData();
    let damage = 0;
    let damageMinVar = 0;
    let damageMaxVar = 0;
    if (move.id == 405) {
      damage = simulateDamageCalcProjectile(details, dungeon, attacker, defender, attackPower);
      damageMinVar = simulateDamageCalcProjectile(details, dungeonMin, attackerMin, defenderMin, attackPower);
      damageMaxVar = simulateDamageCalcProjectile(details, dungeonMax, attackerMax, defenderMax, attackPower);
    } else {
      damage = simulateDamageCalc(details, dungeon, attacker, defender, move);
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
  function simulateDamageCalcFixedDynamic(damageData, dungeon, attacker, defender, move, damage) {
    const attackType = attacker.getMoveType(move.id, dungeon);
    const moveCategory = getMoveCategory(move.id);
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
    if (move.id == 277 && damage == 0) {
      damageData.damage = 0;
    } else {
      damageData.damage = fixedDamage;
    }
    dungeon.damageDetailLog.isFixedDamage = true;
    return runMockDamageSequence(dungeon, attacker, defender, move.id, damageData);
  }
  function calcDamageFixedApplyEffects(damageData, dungeon, attacker, defender, attackType, moveCategory, damage) {
    if (damage < 1) damage = 1;
    if (999 < damage) damage = 999;
    const effect = CalcTypeBasedDamageEffects(dungeon, attacker, defender, damage, attackType, damageData, false);
    const fixedDamage = Math.ceil(damage * effect.damageMultOut);
    return fixedDamage;
  }
  function simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move, damage) {
    const attackType = attacker.getMoveType(move.id, dungeon);
    const moveCategory = getMoveCategory(move.id);
    let fixedDamage = 0;
    if (!executeMoveEffectPrechecks(dungeon, attacker, defender, move.id)) {
      return 0;
    }
    if (damage > 0) {
      fixedDamage = calcDamageFixed(dungeon, attacker, defender, damage, damageData, attackType, moveCategory, move.id);
    }
    damageData.type = attackType;
    damageData.category = moveCategory;
    damageData.damage = fixedDamage;
    dungeon.damageDetailLog.isFixedDamage = true;
    return runMockDamageSequence(dungeon, attacker, defender, move.id, damageData);
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
    if (moveId == 392) return false;
    return moveCategory == CATEGORY_STATUS || noDamageMove.includes(moveId);
  }
  function simulateDamageCalcStatusMoves(damageData, dungeon, attacker, defender, move) {
    const moveCategory = getMoveCategory(move.id);
    const moveType = attacker.getMoveType(move.id, dungeon);
    damageData.category = moveCategory;
    damageData.type = moveType;
    MoveHitCheck(dungeon, attacker, defender, move.id, false, false);
    return 0;
  }

  // <stdin>
  var Attack = class {
    /** ダメージ */
    damage = 0;
    /** タイプ相性 */
    matchup = null;
    /** カテキン */
    ginseng = 0;
    /** [表示用] 敵情報 */
    enemy = "";
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
  };
  var choicesInstances = [];
  var DEFAULT_POKEMON_ID = 1;
  var DEFAULT_DUNGEON_ID = 104;
  var POKEMON_KECREON_ID = 383;
  var POKEMON_DUMMY_ID = 553;
  var MOVE_HIDDENPOWER = 324;
  var HIDDENPOWER_TABLE = [2, 4, 6, 7, 8, 9, 10, 13, 15, 17];
  var attackLog = [];
  var attackLogPointer = -1;
  var attackerPokemonElement = null;
  var attackerType1Element = null;
  var attackerType2Element = null;
  var attackerAbility1Element = null;
  var attackerAbility2Element = null;
  var attackerLevelElement = null;
  var attackerApplyStatusElement = null;
  var attackerStatusCElement = null;
  var attackerStatusCStageElement = null;
  var attackerStatusCStageHalfElement = null;
  var attackerItemElement = null;
  var attackerFlashFireElement = null;
  var attackerPlusMinusElement = null;
  var attackerAirBradeElement = null;
  var defenderDungeonElement = null;
  var defenderFloorElement = null;
  var defenderEnemyElement = null;
  var defenderStatusDElement = null;
  var defenderStatusDStageElement = null;
  var defenderIQElement = null;
  var defenderSkillWrapElement = null;
  var moveDamageElement = null;
  var moveMatchupElement = null;
  var moveGinsengElement = null;
  var moveWeatherElement = null;
  var moveFixedTypeElement = null;
  var moveCriticalElement = null;
  var moveBtnAttackElement = null;
  var ctrlUndoElement = null;
  var ctrlRedoElement = null;
  var ctrlResetElement = null;
  var tableAttackLogElement = null;
  var btnModalResetElement = null;
  var resultWrapElement = null;
  document.addEventListener("DOMContentLoaded", async function() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
    await fetchJsonData();
    mainElement = document.getElementById("damage-hiddenpower");
    attackerPokemonElement = document.getElementById("attacker-pokemon");
    attackerType1Element = document.getElementById("attacker-type-1");
    attackerType2Element = document.getElementById("attacker-type-2");
    attackerAbility1Element = document.getElementById("attacker-ability-1");
    attackerAbility2Element = document.getElementById("attacker-ability-2");
    attackerLevelElement = document.getElementById("attacker-lv");
    attackerApplyStatusElement = document.getElementById("attacker-apply-status");
    attackerStatusCElement = document.getElementById("attacker-c");
    attackerStatusCStageElement = document.getElementById("attacker-c-stage");
    attackerStatusCStageHalfElement = document.getElementById("attacker-c-stage-half");
    attackerItemElement = document.getElementById("attacker-item");
    attackerFlashFireElement = document.getElementById("attacker-flash-fire");
    attackerPlusMinusElement = document.getElementById("attacker-plus-minus");
    attackerAirBradeElement = document.getElementById("attacker-air-brade");
    defenderDungeonElement = document.getElementById("defender-dungeon");
    defenderFloorElement = document.getElementById("defender-floor");
    defenderEnemyElement = document.getElementById("defender-enemy");
    defenderStatusDElement = document.getElementById("defender-d");
    defenderStatusDStageElement = document.getElementById("defender-d-stage");
    defenderIQElement = document.getElementById("defender-iq");
    defenderSkillWrapElement = document.getElementById("defender-skill-wrap");
    moveDamageElement = document.getElementById("move-damage");
    moveMatchupElement = document.getElementById("move-matchup");
    moveGinsengElement = document.getElementById("move-ginseng");
    moveWeatherElement = document.getElementById("move-weather");
    moveFixedTypeElement = document.getElementById("move-fixed-type");
    moveCriticalElement = document.getElementById("move-critical");
    moveBtnAttackElement = document.getElementById("move-btn-attack");
    ctrlUndoElement = document.getElementById("ctrl-undo");
    ctrlRedoElement = document.getElementById("ctrl-redo");
    ctrlResetElement = document.getElementById("ctrl-reset");
    tableAttackLogElement = document.getElementById("table-attack-log");
    btnModalResetElement = document.getElementById("btn-modal-reset");
    resultWrapElement = document.getElementById("result-wrap");
    const inputElements = document.querySelectorAll("#damage-hiddenpower input");
    for (const element of inputElements) {
      if (element.tagName === "INPUT") {
        element.addEventListener("input", function(e) {
          if (element.type == "number") {
            const min = Number(this.min);
            const max = Number(this.max);
            const value = Number(this.value);
            if (isNaN(value)) return;
            if (value < min) this.value = min;
            else if (value > max) this.value = max;
            this.value = this.value.replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 65248)).replace(/[^0-9]/g, "");
          }
        });
      }
    }
    attackerPokemonElement.addEventListener("change", function(e) {
      updatePokemonTypeAbility(e.target.value);
    });
    attackerApplyStatusElement.addEventListener("click", function() {
      applyAttackerStatus();
    });
    defenderDungeonElement.addEventListener("change", function() {
      setOptionsFloor();
      setOptionsEnemy();
    });
    defenderFloorElement.addEventListener("change", function() {
      setOptionsEnemy();
    });
    defenderEnemyElement.addEventListener("change", function() {
      changeEnemy();
    });
    moveWeatherElement.addEventListener("change", function() {
      applyDefenderSkill();
    });
    moveBtnAttackElement.addEventListener("click", function() {
      attackHiddenPower();
    });
    ctrlUndoElement.addEventListener("click", function() {
      undoAttackLog();
    });
    ctrlRedoElement.addEventListener("click", function() {
      redoAttackLog();
    });
    btnModalResetElement.addEventListener("click", function() {
      resetAttackLog();
    });
    setOptionsPokemon();
    setOptionsDungeon();
    setOptionsFloor();
    setOptionsEnemy();
    setOptionsWeather();
    InitChoices();
    updatePokemonTypeAbility();
    applyAttackerStatus();
  });
  function updatePokemonTypeAbility(pokemonId = -1) {
    if (!PokemonData) {
      console.error("PokemonData not found");
      return;
    }
    if (pokemonId < 0) {
      pokemonId = attackerPokemonElement.value;
    }
    const pokemon = PokemonData[pokemonId];
    attackerType1Element.value = pokemon.Type1;
    attackerType2Element.value = pokemon.Type2;
    choicesInstances[attackerAbility1Element.id].setChoiceByValue(`${pokemon.Ability1}`);
    choicesInstances[attackerAbility2Element.id].setChoiceByValue(`${pokemon.Ability2}`);
  }
  function applyAttackerStatus() {
    const pokemonId = attackerPokemonElement.value;
    const level = Number(attackerLevelElement.value);
    if (isNaN(level)) return;
    const status = getLevelStatus(pokemonId, level);
    attackerStatusCElement.value = status.c;
  }
  function changeEnemy() {
    const pokemonId = Number(defenderEnemyElement.value);
    const level = Number(defenderEnemyElement.options[defenderEnemyElement.selectedIndex].dataset.level);
    const status = getLevelStatus(pokemonId, level);
    defenderStatusDElement.value = status.d;
    defenderStatusDStageElement.value = 10;
    applyDefenderSkill();
  }
  function applyDefenderSkill() {
    let res = "";
    const defender = getDefender();
    const dungeonState = getDungeonState();
    defenderIQElement.value = defender.iq;
    if (defender.iqSkillEnabled(34, dungeonState)) {
      res += `<span class="badge text-bg-danger">${IQSkillData[34].Name} \u7279\u9632-1</span>`;
    }
    if (defender.iqSkillEnabled(35, dungeonState)) {
      res += `<span class="badge text-bg-primary">${IQSkillData[35].Name} \u7279\u9632+1</span>`;
    }
    if (defender.perceivedWeather(dungeonState) == WEATHER_SANDSTORM && defender.types.includes(TYPE_ROCK)) {
      res += `<span class="badge text-bg-primary">\u3059\u306A\u3042\u3089\u3057 \u7279\u9632+2</span>`;
    }
    defenderSkillWrapElement.innerHTML = res;
  }
  function getLevelStatus(pokemonId, level) {
    if (!PokemonData) {
      console.error("PokemonData not found");
      return;
    }
    const pokemon = PokemonData[pokemonId];
    let res = { a: 0, b: 0, c: 0, d: 0 };
    for (let i = 0; i < Math.min(...[pokemon.Stats.length, level, 100]); i++) {
      const stat = pokemon.Stats[i];
      res.a += Number(stat.A);
      res.b += Number(stat.B);
      res.c += Number(stat.C);
      res.d += Number(stat.D);
    }
    if (res.a > 255) res.a = 255;
    if (res.b > 255) res.b = 255;
    if (res.c > 255) res.c = 255;
    if (res.d > 255) res.d = 255;
    return res;
  }
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
    attacker.exclusive_item_effect_flags[91] = attackerAirBradeElement.checked;
    return attacker;
  }
  function getDefender() {
    if (!PokemonData) {
      console.error("PokemonData not found");
      return;
    }
    const defender = new Monster();
    const defenderPokemonId = Number(defenderEnemyElement.value);
    const defenderPokemon = PokemonData[defenderPokemonId];
    const defenderLevel = Number(defenderEnemyElement.options[defenderEnemyElement.selectedIndex].dataset.level);
    defender.id = defenderPokemonId;
    defender.is_member = false;
    defender.level = defenderLevel;
    defender.types = [defenderPokemon.Type1, defenderPokemon.Type2];
    defender.abilities = [defenderPokemon.Ability1, defenderPokemon.Ability2];
    defender.sp_def = Number(defenderStatusDElement.value);
    defender.stage_sp_def = Number(defenderStatusDStageElement.value);
    defender.belly = 100;
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
  function getDungeonState() {
    const dungeonState = new DungeonState();
    dungeonState.weather = Number(moveWeatherElement.value);
    dungeonState.rng.criticalHit = moveCriticalElement.checked;
    dungeonState.plus[1] = attackerPlusMinusElement.checked;
    dungeonState.minus[1] = attackerPlusMinusElement.checked;
    return dungeonState;
  }
  function attackHiddenPower() {
    const attacker = getAttacker();
    const defender = getDefender();
    const dungeonState = getDungeonState();
    const move = new Move();
    move.id = MOVE_HIDDENPOWER;
    move.ginseng = Number(moveGinsengElement.value);
    const damage = Number(moveDamageElement.value);
    const matchup = Number(moveMatchupElement.value);
    const pointer = attackLogPointer >= 0 ? attackLogPointer : attackLog.length;
    const allowType = /* @__PURE__ */ new Map();
    const fixedType = parseInt(moveFixedTypeElement.value);
    if (fixedType > 0) {
      allowType.set(fixedType, []);
    } else {
      const targetType = [];
      if (pointer > 0) {
        for (const key of attackLog[pointer - 1].candidateType.keys()) {
          targetType.push(key);
        }
      } else {
        for (let i = 1; i < TypeData.length; i++) {
          targetType.push(i);
        }
      }
      for (const type of targetType) {
        const typeMatchups = [
          getTypeMatchUp(dungeonState, attacker, defender, 0, type),
          getTypeMatchUp(dungeonState, attacker, defender, 1, type)
        ];
        const typeMatchupRes = TYPE_MATCHUP_COMBINATOR_TABLE[typeMatchups[0]][typeMatchups[1]];
        if (typeMatchupRes == matchup) {
          allowType.set(type, []);
        }
      }
    }
    const damageDatas = [];
    const damageDatasAll = [];
    for (const type of allowType.keys()) {
      let allowPower = [];
      if (pointer > 0) {
        const allowPowerValues = attackLog[pointer - 1].candidateType.get(type);
        if (allowPowerValues) allowPower = allowPowerValues;
      } else {
        allowPower = HIDDENPOWER_TABLE;
      }
      for (const power of allowPower) {
        const attackerTmp = attacker.clone();
        attackerTmp.hidden_power_base_power = power;
        attackerTmp.hidden_power_type = type;
        const damageResult = RunCalcDamage(dungeonState, attackerTmp, defender, move, power);
        const damageData = {
          type,
          power,
          minDamage: damageResult.minDamage,
          maxDamage: damageResult.maxDamage,
          matchup: damageResult.details.typeMatchup.id
        };
        if (damageData.minDamage <= damage && damage <= damageData.maxDamage) {
          damageDatas.push(damageData);
          allowType.get(type).push(power);
        }
        damageDatasAll.push(damageData);
      }
    }
    attackLog.splice(pointer);
    for (const [key, arr] of allowType) {
      if (arr.length == 0) allowType.delete(key);
    }
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
    attackLogPointer = attackLog.length;
    updateAttackLogView();
    updateResultView();
  }
  function updateResultView() {
    let res = "";
    if (attackLog.length > 0 && attackLogPointer > 0) {
      const pointer = attackLogPointer - 1;
      const log = attackLog[pointer];
      const allowType = log.candidateType;
      const damageDatas = log.damageDatas;
      if (allowType.size > 1) {
        res = `\u30BF\u30A4\u30D7\u5019\u88DC: `;
        const strings = [];
        for (const [key, arr] of allowType) {
          strings.push(TypeData[key].Name.replace(" ", ""));
        }
        res += strings.join("/");
      } else if (allowType.size == 1) {
        res = `<span class="text-success fw-bold">${TypeData[allowType.keys().next().value].Name}\u30BF\u30A4\u30D7\u3067\u78BA\u5B9A\uFF01</span>`;
      } else {
        res = "\u5019\u88DC\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093";
      }
      if (damageDatas.length > 0) {
        res += "<br>";
        const min = Math.min(...damageDatas.map((x) => x.power));
        const max = Math.max(...damageDatas.map((x) => x.power));
        if (min != max) {
          res += `\u5A01\u529B\u5019\u88DC: ${min}\uFF5E${max}`;
        } else {
          res += `<span class="text-success fw-bold">\u5A01\u529B${damageDatas[0].power}\u3067\u78BA\u5B9A\uFF01</span>`;
        }
      }
    }
    resultWrapElement.innerHTML = res;
  }
  function updateAttackLogView() {
    const isValid = attackLog.length > 0;
    const matchupStrings = [];
    for (const option of moveMatchupElement.options) {
      matchupStrings.push(option.text);
    }
    let res = "";
    for (let i = 0; i < attackLog.length; i++) {
      const log = attackLog[i];
      res += `
        <tr ${i > attackLogPointer - 1 ? 'class="visually-hidden"' : ""}>
          <td>${i + 1}</td>
          <td>${log.damage}${log.dungeonState.rng.criticalHit ? " (\u6025\u6240)" : ""}</td>
          <td>${matchupStrings[log.matchup]}</td>
          <td>${log.enemy}</td>
        </tr>`;
    }
    tableAttackLogElement.tBodies[0].innerHTML = res;
    ctrlUndoElement.disabled = !isValid;
    ctrlRedoElement.disabled = attackLog.length == 0 || attackLog.length == attackLogPointer;
    ctrlResetElement.disabled = !isValid;
  }
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
  function redoAttackLog() {
    attackLogPointer++;
    updateAttackLogView();
    updateResultView();
    ctrlUndoElement.disabled = false;
    if (attackLogPointer == attackLog.length) {
      ctrlRedoElement.disabled = true;
    }
  }
  function resetAttackLog() {
    attackLogPointer = -1;
    attackLog.length = 0;
    updateAttackLogView();
    updateResultView();
    bootstrap.Modal.getOrCreateInstance("#modal-reset").hide();
  }
  function setOptionsPokemon() {
    if (!PokemonData) {
      console.error("PokemonData not found");
      return;
    }
    let res = "";
    for (const pokemon of PokemonData) {
      res += `
      <option value="${pokemon.Id}" ${pokemon.Id == DEFAULT_POKEMON_ID ? "selected" : ""}>
        ${pokemon.Name}${pokemon.SubName ? ` - ${pokemon.SubName}` : ""}
      </option>`;
    }
    attackerPokemonElement.innerHTML = res;
  }
  function setOptionsDungeon() {
    if (!DungeonData) {
      console.error("DungeonData not found");
      return;
    }
    let res = "";
    for (let i = 0; i < DungeonData.length && i <= VALID_MAX_DUNGEON_ID; i++) {
      const dungeon = DungeonData[i];
      if (dungeon.FloorPrev > 0 && dungeon.FloorCount == 1) continue;
      if (dungeon.MappaIndex >= FloorData.length) continue;
      if (dungeon.FloorPrev + 1 >= FloorData[dungeon.MappaIndex].length) continue;
      res += `
      <option value="${dungeon.Id}" ${dungeon.Id == DEFAULT_DUNGEON_ID ? "selected" : ""}>
        ${formatRemoveTagString(dungeon.Name)}
      </option>`;
    }
    defenderDungeonElement.innerHTML = res;
  }
  function setOptionsFloor() {
    if (!DungeonData) {
      console.error("DungeonData not found");
      return;
    }
    if (!FloorData) {
      console.error("FloorData not found");
      return;
    }
    const dungeonId = defenderDungeonElement.value;
    const dungeon = DungeonData[dungeonId];
    const floorPrev = dungeon.FloorPrev + 1;
    const floorCount = dungeon.FloorCount;
    const floors = FloorData[Number(dungeon.MappaIndex)];
    const stairs = dungeon.FlagStairs ? "" : "B";
    let res = "";
    for (let i = 0; i < floorCount; i++) {
      const value = floorPrev + i;
      const floor = floors[value];
      const enemy = floor.IndexGroup.SpawnEnemy;
      const fixed = floor.FixedFloorId;
      const iqvalue = floor.EnemyIQ;
      const disabled = !isEnemySpawnableFixedFloor(floor.FixedFloorId);
      res += `
      <option value="${value}" data-floor="${i + 1}" data-enemy="${enemy}" data-fixed="${fixed}" data-iqvalue="${iqvalue}" ${disabled ? "disabled" : ""}>
        ${stairs}${i + 1}F
      </option>`;
    }
    defenderFloorElement.innerHTML = res;
  }
  function setOptionsEnemy() {
    if (!PokemonData) {
      console.error("PokemonData not found");
      return;
    }
    if (!MappaSData) {
      console.error("MappaSData not found");
      return;
    }
    const mappaId = Number(defenderFloorElement.options[defenderFloorElement.selectedIndex].dataset.enemy);
    const mappa = MappaSData.EnemyData[mappaId];
    const dataset = [];
    for (const enemy of mappa) {
      const pokemonId = enemy.PokemonId;
      if (pokemonId != POKEMON_DUMMY_ID) {
        dataset.push({ id: pokemonId, name: PokemonData[pokemonId].Name, level: enemy.Level });
      }
    }
    dataset.sort((a, b) => {
      const aLast = a.id === POKEMON_KECREON_ID;
      const bLast = b.id === POKEMON_KECREON_ID;
      if (aLast !== bLast) return aLast ? 1 : -1;
      return a.name.localeCompare(b.name);
    });
    let res = "";
    for (const enemyPoke of dataset) {
      res += `
      <option value="${enemyPoke.id}" data-level="${enemyPoke.level}">
        Lv${enemyPoke.level} ${enemyPoke.name}
      </option>
    `;
    }
    defenderEnemyElement.innerHTML = res;
    changeEnemy();
  }
  function setOptionsWeather() {
    let res = "";
    for (let i = 0; i < WEATHER_STRINGS.length; i++) {
      res += `<option value="${i}">${WEATHER_STRINGS[i]}</option>`;
    }
    moveWeatherElement.innerHTML = res;
  }
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
    const choicesElements = document.querySelectorAll("#damage-hiddenpower select[data-choices]");
    for (const element of choicesElements) {
      if (element.id == "move") {
        choicesInstances[element.id] = new Choices(element, choicesOptionsMove);
      } else {
        choicesInstances[element.id] = new Choices(element, choicesOptions);
      }
    }
  }
  async function fetchJsonData() {
    try {
      const [pokemonData, moveData, dungeonData, floorData, mappaSData, typeData, iqgroupData, iqskillData] = await Promise.all([
        getJsonData("pokemon"),
        getJsonData("move"),
        getJsonData("dungeon"),
        getJsonData("floor"),
        getJsonData("mappa_s"),
        getJsonData("type"),
        getJsonData("iqgroup"),
        getJsonData("iqskill")
      ]);
      window.PokemonData = pokemonData;
      window.MoveData = moveData;
      window.DungeonData = dungeonData;
      window.FloorData = floorData;
      window.MappaSData = mappaSData;
      window.TypeData = typeData;
      window.IQGroupData = iqgroupData;
      window.IQSkillData = iqskillData;
    } catch (e) {
      console.error(e);
    }
  }
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibnMtaHVnby1pbXA6RjpcXEdpdFxcbGFpb3h5LmdpdGh1Yi5pb1xcYXNzZXRzXFxqc1xcZGFtYWdlXFxjb25zdC5qcyIsICJucy1odWdvLWltcDpGOlxcR2l0XFxsYWlveHkuZ2l0aHViLmlvXFxhc3NldHNcXGpzXFxwYXJhbS5qcyIsICJucy1odWdvLWltcDpGOlxcR2l0XFxsYWlveHkuZ2l0aHViLmlvXFxhc3NldHNcXGpzXFxqc29uX3NjcmlwdC5qcyIsICJucy1odWdvLWltcDpGOlxcR2l0XFxsYWlveHkuZ2l0aHViLmlvXFxhc3NldHNcXGpzXFxkYW1hZ2VcXGlkbWFwLmpzIiwgIm5zLWh1Z28taW1wOkY6XFxHaXRcXGxhaW94eS5naXRodWIuaW9cXGFzc2V0c1xcanNcXGRhbWFnZVxcc3RydWN0dXJlLmpzIiwgIm5zLWh1Z28taW1wOkY6XFxHaXRcXGxhaW94eS5naXRodWIuaW9cXGFzc2V0c1xcanNcXGRhbWFnZVxcbWVjaGFuaWNzLmpzIiwgIm5zLWh1Z28taW1wOkY6XFxHaXRcXGxhaW94eS5naXRodWIuaW9cXGFzc2V0c1xcanNcXGRhbWFnZVxcbWF0aHV0aWwuanMiLCAibnMtaHVnby1pbXA6RjpcXEdpdFxcbGFpb3h5LmdpdGh1Yi5pb1xcYXNzZXRzXFxqc1xcZGFtYWdlXFxjYWxjLmpzIiwgIjxzdGRpbj4iXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qXHJcbiAgVGhpcyBjb2RlIGluY2x1ZGVzIHBvcnRpb25zIGJhc2VkIG9uIGRhbWFnZS1lb3MgYnkgVXNlcm5hbWVGb2RkZXJcclxuICBodHRwczovL2dpdGh1Yi5jb20vVXNlcm5hbWVGb2RkZXIvZGFtYWdlLWVvc1xyXG5cclxuICBPcmlnaW5hbCBjb2RlIHBvcnRpb25zOlxyXG4gIC0gTUlUIExpY2Vuc2UgKGMpIDIwMjMgVXNlcm5hbWVGb2RkZXJcclxuXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIE9yaWdpbmFsIExpY2Vuc2U6XHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIE1JVCBMaWNlbnNlXHJcblxyXG4gIENvcHlyaWdodCAoYykgMjAyMyBVc2VybmFtZUZvZGRlclxyXG5cclxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG4gIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcbiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcbiAgU09GVFdBUkUuXHJcbiovXHJcblxyXG4vKiogXHU3MjY5XHU3NDA2XHU2MjgwICovXHJcbmV4cG9ydCBjb25zdCBDQVRFR09SWV9QSFlTSUNBTCA9IDA7XHJcbi8qKiBcdTcyNzlcdTZCOEFcdTYyODAgKi9cclxuZXhwb3J0IGNvbnN0IENBVEVHT1JZX1NQRUNJQUwgPSAxO1xyXG4vKiogXHU1OTA5XHU1MzE2XHU2MjgwICovXHJcbmV4cG9ydCBjb25zdCBDQVRFR09SWV9TVEFUVVMgPSAyO1xyXG5cclxuLyoqIFx1NjAyN1x1NTIyNSBcdTcxMjFcdTUyQjkgKi9cclxuZXhwb3J0IGNvbnN0IEdFTkRFUl9JTlZBTElEID0gMDtcclxuLyoqIFx1NjAyN1x1NTIyNSBcdTMwQUFcdTMwQjkgKi9cclxuZXhwb3J0IGNvbnN0IEdFTkRFUl9NQUxFID0gMTtcclxuLyoqIFx1NjAyN1x1NTIyNSBcdTMwRTFcdTMwQjkgKi9cclxuZXhwb3J0IGNvbnN0IEdFTkRFUl9GRU1BTEUgPSAyO1xyXG4vKiogXHU2MDI3XHU1MjI1IFx1NEUwRFx1NjYwRSAqL1xyXG5leHBvcnQgY29uc3QgR0VOREVSX0dFTkRFUkxFU1MgPSAzO1xyXG5cclxuLyoqIFx1NTkyOVx1NTAxOSBcdTMwNkZcdTMwOEMgKi9cclxuZXhwb3J0IGNvbnN0IFdFQVRIRVJfQ0xFQVIgPSAwO1xyXG4vKiogXHU1OTI5XHU1MDE5IFx1MzA3Mlx1MzA1Nlx1MzA1N1x1MzA0Q1x1MzA2NFx1MzA4OFx1MzA0NCAqL1xyXG5leHBvcnQgY29uc3QgV0VBVEhFUl9TVU5OWSA9IDE7XHJcbi8qKiBcdTU5MjlcdTUwMTkgXHUzMDU5XHUzMDZBXHUzMDQyXHUzMDg5XHUzMDU3ICovXHJcbmV4cG9ydCBjb25zdCBXRUFUSEVSX1NBTkRTVE9STSA9IDI7XHJcbi8qKiBcdTU5MjlcdTUwMTkgXHUzMDRGXHUzMDgyXHUzMDhBICovXHJcbmV4cG9ydCBjb25zdCBXRUFUSEVSX0NMT1VEWSA9IDM7XHJcbi8qKiBcdTU5MjlcdTUwMTkgXHUzMDQyXHUzMDgxICovXHJcbmV4cG9ydCBjb25zdCBXRUFUSEVSX1JBSU4gPSA0O1xyXG4vKiogXHU1OTI5XHU1MDE5IFx1MzA0Mlx1MzA4OVx1MzA4QyAqL1xyXG5leHBvcnQgY29uc3QgV0VBVEhFUl9IQUlMID0gNTtcclxuLyoqIFx1NTkyOVx1NTAxOSBcdTMwNERcdTMwOEEgKi9cclxuZXhwb3J0IGNvbnN0IFdFQVRIRVJfRk9HID0gNjtcclxuLyoqIFx1NTkyOVx1NTAxOSBcdTMwODZcdTMwNEQgKi9cclxuZXhwb3J0IGNvbnN0IFdFQVRIRVJfU05PVyA9IDc7XHJcbi8qKiBcdTU5MjlcdTUwMTkgXHUzMEU5XHUzMEYzXHUzMEMwXHUzMEUwICovXHJcbmV4cG9ydCBjb25zdCBXRUFUSEVSX1JBTkRPTSA9IDg7XHJcblxyXG4vKiogXHUzMDVGXHUzMDkzXHUzMDUxXHUzMDkzXHUzMDVGXHUzMDQ0XHUzMDZFXHUzMDdFIFx1NTZGQVx1NUI5QVx1MzBENVx1MzBFRFx1MzBBMklEICovXHJcbmV4cG9ydCBjb25zdCBGSVhFRF9TVUJTVElUVVRFX1JPT00gPSAweDZlO1xyXG5cclxuLyoqIFx1MzBCRlx1MzBBNFx1MzBEN1x1NzZGOFx1NjAyNyBcdTUyQjlcdTY3OUNcdTMwNkZcdTMwNkFcdTMwNDQgKi9cclxuZXhwb3J0IGNvbnN0IE1BVENIVVBfSU1NVU5FID0gMDtcclxuLyoqIFx1MzBCRlx1MzBBNFx1MzBEN1x1NzZGOFx1NjAyNyBcdTRFQ0FcdTRFMDBcdTMwNjQgKi9cclxuZXhwb3J0IGNvbnN0IE1BVENIVVBfTk9UX1ZFUllfRUZGRUNUSVZFID0gMTtcclxuLyoqIFx1MzBCRlx1MzBBNFx1MzBEN1x1NzZGOFx1NjAyNyBcdTY2NkVcdTkwMUEgKi9cclxuZXhwb3J0IGNvbnN0IE1BVENIVVBfTkVVVFJBTCA9IDI7XHJcbi8qKiBcdTMwQkZcdTMwQTRcdTMwRDdcdTc2RjhcdTYwMjcgXHU2MjlDXHU3RkE0ICovXHJcbmV4cG9ydCBjb25zdCBNQVRDSFVQX1NVUEVSX0VGRkVDVElWRSA9IDM7XHJcblxyXG4vKiogXHUzMEJGXHUzMEE0XHUzMEQ3IFx1MzA2QVx1MzA1NyAqL1xyXG5leHBvcnQgY29uc3QgVFlQRV9OT05FID0gMDtcclxuLyoqIFx1MzBCRlx1MzBBNFx1MzBENyBcdTMwQ0VcdTMwRkNcdTMwREVcdTMwRUIgKi9cclxuZXhwb3J0IGNvbnN0IFRZUEVfTk9STUFMID0gMTtcclxuLyoqIFx1MzBCRlx1MzBBNFx1MzBENyBcdTMwN0JcdTMwNkVcdTMwNEEgKi9cclxuZXhwb3J0IGNvbnN0IFRZUEVfRklSRSA9IDI7XHJcbi8qKiBcdTMwQkZcdTMwQTRcdTMwRDcgXHUzMDdGXHUzMDVBICovXHJcbmV4cG9ydCBjb25zdCBUWVBFX1dBVEVSID0gMztcclxuLyoqIFx1MzBCRlx1MzBBNFx1MzBENyBcdTMwNEZcdTMwNTUgKi9cclxuZXhwb3J0IGNvbnN0IFRZUEVfR1JBU1MgPSA0O1xyXG4vKiogXHUzMEJGXHUzMEE0XHUzMEQ3IFx1MzA2N1x1MzA5M1x1MzA0RCAqL1xyXG5leHBvcnQgY29uc3QgVFlQRV9FTEVDVFJJQyA9IDU7XHJcbi8qKiBcdTMwQkZcdTMwQTRcdTMwRDcgXHUzMDUzXHUzMDRBXHUzMDhBICovXHJcbmV4cG9ydCBjb25zdCBUWVBFX0lDRSA9IDY7XHJcbi8qKiBcdTMwQkZcdTMwQTRcdTMwRDcgXHUzMDRCXHUzMDRGXHUzMDY4XHUzMDQ2ICovXHJcbmV4cG9ydCBjb25zdCBUWVBFX0ZJR0hUSU5HID0gNztcclxuLyoqIFx1MzBCRlx1MzBBNFx1MzBENyBcdTMwNjlcdTMwNEYgKi9cclxuZXhwb3J0IGNvbnN0IFRZUEVfUE9JU09OID0gODtcclxuLyoqIFx1MzBCRlx1MzBBNFx1MzBENyBcdTMwNThcdTMwODFcdTMwOTMgKi9cclxuZXhwb3J0IGNvbnN0IFRZUEVfR1JPVU5EID0gOTtcclxuLyoqIFx1MzBCRlx1MzBBNFx1MzBENyBcdTMwNzJcdTMwNTNcdTMwNDYgKi9cclxuZXhwb3J0IGNvbnN0IFRZUEVfRkxZSU5HID0gMTA7XHJcbi8qKiBcdTMwQkZcdTMwQTRcdTMwRDcgXHUzMEE4XHUzMEI5XHUzMEQxXHUzMEZDICovXHJcbmV4cG9ydCBjb25zdCBUWVBFX1BTWUNISUMgPSAxMTtcclxuLyoqIFx1MzBCRlx1MzBBNFx1MzBENyBcdTMwODBcdTMwNTcgKi9cclxuZXhwb3J0IGNvbnN0IFRZUEVfQlVHID0gMTI7XHJcbi8qKiBcdTMwQkZcdTMwQTRcdTMwRDcgXHUzMDQ0XHUzMDhGICovXHJcbmV4cG9ydCBjb25zdCBUWVBFX1JPQ0sgPSAxMztcclxuLyoqIFx1MzBCRlx1MzBBNFx1MzBENyBcdTMwQjRcdTMwRkNcdTMwQjlcdTMwQzggKi9cclxuZXhwb3J0IGNvbnN0IFRZUEVfR0hPU1QgPSAxNDtcclxuLyoqIFx1MzBCRlx1MzBBNFx1MzBENyBcdTMwQzlcdTMwRTlcdTMwQjRcdTMwRjMgKi9cclxuZXhwb3J0IGNvbnN0IFRZUEVfRFJBR09OID0gMTU7XHJcbi8qKiBcdTMwQkZcdTMwQTRcdTMwRDcgXHUzMDQyXHUzMDRGICovXHJcbmV4cG9ydCBjb25zdCBUWVBFX0RBUksgPSAxNjtcclxuLyoqIFx1MzBCRlx1MzBBNFx1MzBENyBcdTMwNkZcdTMwNENcdTMwNkQgKi9cclxuZXhwb3J0IGNvbnN0IFRZUEVfU1RFRUwgPSAxNztcclxuLyoqIFx1MzBCRlx1MzBBNFx1MzBENyBcdTMwODBcdTMwNUVcdTMwNEZcdTMwNUJcdTMwNDQgKi9cclxuZXhwb3J0IGNvbnN0IFRZUEVfTkVVVFJBTCA9IDE4O1xyXG5cclxuLy8gXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHUzMEUxXHUzMEMzXHUzMEJCXHUzMEZDXHUzMEI4XHJcbmV4cG9ydCBjb25zdCBEQU1BR0VfTUVTU0FHRV9NT1ZFID0gMDtcclxuZXhwb3J0IGNvbnN0IERBTUFHRV9NRVNTQUdFX0JVUk4gPSAxO1xyXG5leHBvcnQgY29uc3QgREFNQUdFX01FU1NBR0VfQ09OU1RSSUNUSU9OID0gMjtcclxuZXhwb3J0IGNvbnN0IERBTUFHRV9NRVNTQUdFX1BPSVNPTiA9IDM7XHJcbmV4cG9ydCBjb25zdCBEQU1BR0VfTUVTU0FHRV9SRUNPSUxfMSA9IDQ7XHJcbmV4cG9ydCBjb25zdCBEQU1BR0VfTUVTU0FHRV9XUkFQID0gNTtcclxuZXhwb3J0IGNvbnN0IERBTUFHRV9NRVNTQUdFX0NPVU5URVIgPSA2O1xyXG5leHBvcnQgY29uc3QgREFNQUdFX01FU1NBR0VfQ1VSU0UgPSA3O1xyXG5leHBvcnQgY29uc3QgREFNQUdFX01FU1NBR0VfTklHSFRNQVJFID0gODtcclxuZXhwb3J0IGNvbnN0IERBTUFHRV9NRVNTQUdFX0xFRUNIX1NFRUQgPSA5O1xyXG5leHBvcnQgY29uc3QgREFNQUdFX01FU1NBR0VfU1BJS0VTID0gMTA7XHJcbmV4cG9ydCBjb25zdCBEQU1BR0VfTUVTU0FHRV9QRVJJU0hfU09ORyA9IDExO1xyXG5leHBvcnQgY29uc3QgREFNQUdFX01FU1NBR0VfREVTVElOWV9CT05EID0gMTI7XHJcbmV4cG9ydCBjb25zdCBEQU1BR0VfTUVTU0FHRV9TTFVER0UgPSAxMztcclxuZXhwb3J0IGNvbnN0IERBTUFHRV9NRVNTQUdFX0hVTkdFUiA9IDE0O1xyXG5leHBvcnQgY29uc3QgREFNQUdFX01FU1NBR0VfQ0hFU1ROVVRfMSA9IDE1O1xyXG5leHBvcnQgY29uc3QgREFNQUdFX01FU1NBR0VfQ0hFU1ROVVRfMiA9IDE2O1xyXG5leHBvcnQgY29uc3QgREFNQUdFX01FU1NBR0VfUElURkFMTF9UUkFQID0gMTc7XHJcbmV4cG9ydCBjb25zdCBEQU1BR0VfTUVTU0FHRV9CQURfV0VBVEhFUiA9IDE4O1xyXG5leHBvcnQgY29uc3QgREFNQUdFX01FU1NBR0VfTUlTU0VEX01PVkUgPSAxOTtcclxuZXhwb3J0IGNvbnN0IERBTUFHRV9NRVNTQUdFX1JFQ09JTF8yID0gMjA7XHJcbmV4cG9ydCBjb25zdCBEQU1BR0VfTUVTU0FHRV9TVEVBTFRIX1JPQ0sgPSAyMTtcclxuZXhwb3J0IGNvbnN0IERBTUFHRV9NRVNTQUdFX1RPWElDX1NQSUtFUyA9IDIyO1xyXG5leHBvcnQgY29uc3QgREFNQUdFX01FU1NBR0VfQUxNT1NUX0ZBSU5URUQgPSAyMztcclxuZXhwb3J0IGNvbnN0IERBTUFHRV9NRVNTQUdFX0JBRF9EUkVBTVMgPSAyNDtcclxuZXhwb3J0IGNvbnN0IERBTUFHRV9NRVNTQUdFX1NPTEFSX1BPV0VSID0gMjU7XHJcbmV4cG9ydCBjb25zdCBEQU1BR0VfTUVTU0FHRV9EUllfU0tJTiA9IDI2O1xyXG4iLCAiLyoqIFx1NjcwOVx1NTJCOVx1MzA2QVx1MzBDMFx1MzBGM1x1MzBCOFx1MzBFN1x1MzBGM0lEXHU2NzAwXHU1OTI3XHU1MDI0ICovXHJcbmV4cG9ydCBjb25zdCBWQUxJRF9NQVhfRFVOR0VPTl9JRCA9IDB4YmY7XHJcblxyXG4vKiogXHUzMEFCXHUzMEQ1XHUzMEE3XHU1MkU3XHU4QTk4XHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzICovXHJcbmV4cG9ydCBjb25zdCBDQUZFX1JFQ1JVSVRfVEFCTEUgPSBbXHJcbiAgMHgwMGEsIDB4MDBkLCAweDAxYiwgMHgwMjksIDB4MDJiLCAweDAyZSwgMHgwMzYsIDB4MDNjLCAweDA0MiwgMHgwNDgsIDB4MDRhLCAweDA1MSwgMHgwNTMsIDB4MDU0LCAweDA1NiwgMHgwNTgsIDB4MDVhLFxyXG4gIDB4MDVjLCAweDA1ZiwgMHgwNjAsIDB4MDYyLCAweDA2OCwgMHgwNmQsIDB4MDZmLCAweDA3MiwgMHgwNzgsIDB4MDdmLCAweDA4MCwgMHgwODQsIDB4MDg5LCAweDA4YSwgMHgwOGMsIDB4MDhlLCAweDA5MyxcclxuICAweDBhMywgMHgwYTcsIDB4MGFjLCAweDBiMSwgMHgwYjMsIDB4MGJiLCAweDBjMSwgMHgwYzIsIDB4MGM4LCAweDBlNiwgMHgwZTcsIDB4MGU5LCAweDBlYywgMHgwZjAsIDB4MGY1LCAweDBmNywgMHgwZjksXHJcbiAgMHgwZmUsIDB4MGZmLCAweDEwMiwgMHgxMDUsIDB4MTA2LCAweDEwYSwgMHgxMGIsIDB4MTExLCAweDEyMywgMHgxMmEsIDB4MTMyLCAweDEzNCwgMHgxMzcsIDB4MTM5LCAweDEzZSwgMHgxNGIsIDB4MTRjLFxyXG4gIDB4MTUxLCAweDE1MywgMHgxNTQsIDB4MTU1LCAweDE1NiwgMHgxNWUsIDB4MTY0LCAweDE2NywgMHgxNmMsIDB4MTZkLCAweDE2ZSwgMHgxNmYsIDB4MTczLCAweDE3NSwgMHgxNzcsIDB4MTg1LCAweDE4NyxcclxuICAweDE4YiwgMHgxOTMsIDB4MTk2LCAweDFhZiwgMHgxYjQsIDB4MWI5LCAweDFiYiwgMHgxYmQsIDB4MWJmLCAweDFjNiwgMHgxYzgsIDB4MWNiLCAweDFjZSwgMHgxY2YsIDB4MWQzLCAweDFkNSwgMHgxZDksXHJcbiAgMHgxZGIsIDB4MWRlLCAweDFlMCwgMHgxZWIsIDB4MWVkLCAweDFmMSxcclxuXTtcclxuLyoqIFx1MzBCN1x1MzBDQVx1MzBFQVx1MzBBQVx1NjU4N1x1NUI1N1x1NTIxNyAqL1xyXG5leHBvcnQgY29uc3QgU0NFTkFSSU9fU1RSSU5HUyA9IFtcclxuICAnLScsXHJcbiAgJ0NoYXB0ZXItNVx1NEVFNVx1OTY0RCcsXHJcbiAgJ0NoYXB0ZXItMTBcdTRFRTVcdTk2NEQnLFxyXG4gICdDaGFwdGVyLTExXHU0RUU1XHU5NjREJyxcclxuICAnQ2hhcHRlci0xOVx1NEVFNVx1OTY0RCcsXHJcbiAgJ1x1MzBBOFx1MzBGM1x1MzBDN1x1MzBBM1x1MzBGM1x1MzBCMFx1NUY4QycsXHJcbiAgJ1x1MzBBRVx1MzBFQlx1MzBDOVx1NTM1Mlx1Njk2RFx1NUY4QycsXHJcbiAgJ1x1MzA0Nlx1MzA3Rlx1MzA2RVx1MzBFQVx1MzBCRVx1MzBGQ1x1MzBDOFx1ODlFM1x1Nzk4MVx1NUY4QycsXHJcbl07XHJcbi8qKiBcdTU5MjlcdTUwMTlcdTY1ODdcdTVCNTdcdTUyMTcgKi9cclxuZXhwb3J0IGNvbnN0IFdFQVRIRVJfU1RSSU5HUyA9IFsnXHUzMDZGXHUzMDhDJywgJ1x1MzA3Mlx1MzA1Nlx1MzA1N1x1MzA0Q1x1MzA2NFx1MzA4OFx1MzA0NCcsICdcdTMwNTlcdTMwNkFcdTMwNDJcdTMwODlcdTMwNTcnLCAnXHUzMDRGXHUzMDgyXHUzMDhBJywgJ1x1MzA0Mlx1MzA4MScsICdcdTMwNDJcdTMwODlcdTMwOEMnLCAnXHUzMDREXHUzMDhBJywgJ1x1MzA4Nlx1MzA0RCddO1xyXG4iLCAiLyoqXHJcbiAqIGdldEpzb25EYXRhXHUzMDZFXHU1RjE1XHU2NTcwXHUzMDZCXHU1MTY1XHUzMDhDXHUzMDhCXHUzMEFEXHUzMEZDXHU1NDBEXHUzMDY4SlNPTlx1MzBENVx1MzBBMVx1MzBBNFx1MzBFQlx1MzA2RVx1MzBEMVx1MzBCOVxyXG4gKi9cclxuY29uc3QganNvblBhdGhzQXJyYXkgPSB7XHJcbiAgcG9rZW1vbjogJy9kYXRhL3Bva2Vtb24ubWluLmpzb24nLFxyXG4gIGl0ZW06ICcvZGF0YS9pdGVtLm1pbi5qc29uJyxcclxuICBtb3ZlOiAnL2RhdGEvbW92ZS5taW4uanNvbicsXHJcbiAgZHVuZ2VvbjogJy9kYXRhL2R1bmdlb24ubWluLmpzb24nLFxyXG4gIGZsb29yOiAnL2RhdGEvZmxvb3IubWluLmpzb24nLFxyXG4gIG1hcHBhX3M6ICcvZGF0YS9tYXBwYV9zLm1pbi5qc29uJyxcclxuICBtYXBwYV90OiAnL2RhdGEvbWFwcGFfdC5taW4uanNvbicsXHJcbiAgbWFwcGFfeTogJy9kYXRhL21hcHBhX3kubWluLmpzb24nLFxyXG4gIGZpeGVkOiAnL2RhdGEvZml4ZWQubWluLmpzb24nLFxyXG4gIG1lc3NhZ2U6ICcvZGF0YS9tZXNzYWdlLm1pbi5qc29uJyxcclxuICB0eXBlOiAnL2RhdGEvdHlwZS5taW4uanNvbicsXHJcbiAgaXFncm91cDogJy9kYXRhL2lxZ3JvdXAubWluLmpzb24nLFxyXG4gIGlxc2tpbGw6ICcvZGF0YS9pcXNraWxsLm1pbi5qc29uJyxcclxuICByZXNjdWU6ICcvZGF0YS9yZXNjdWUubWluLmpzb24nLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEpTT05cdTMwOTJcdTUzRDZcdTVGOTdcclxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBcdTMwQURcdTMwRkMgKHBva2Vtb24sIGl0ZW0sIGR1bmdlb24sIGZsb29yLCBmaXhlZCwgbWVzc2FnZSlcclxuICogQHJldHVybnMgSlNPTlx1MzBDN1x1MzBGQ1x1MzBCRlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEpzb25EYXRhKGtleSkge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goanNvblBhdGhzQXJyYXlba2V5XSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdnZXRKc29uRGF0YSBGYWlsZWQ6ICcsIGUpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiIsICIvKlxyXG4gIFRoaXMgY29kZSBpbmNsdWRlcyBwb3J0aW9ucyBiYXNlZCBvbiBkYW1hZ2UtZW9zIGJ5IFVzZXJuYW1lRm9kZGVyXHJcbiAgaHR0cHM6Ly9naXRodWIuY29tL1VzZXJuYW1lRm9kZGVyL2RhbWFnZS1lb3NcclxuXHJcbiAgT3JpZ2luYWwgY29kZSBwb3J0aW9uczpcclxuICAtIE1JVCBMaWNlbnNlIChjKSAyMDIzIFVzZXJuYW1lRm9kZGVyXHJcblxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBPcmlnaW5hbCBMaWNlbnNlOlxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBNSVQgTGljZW5zZVxyXG5cclxuICBDb3B5cmlnaHQgKGMpIDIwMjMgVXNlcm5hbWVGb2RkZXJcclxuXHJcbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG4gIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG4gIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG4gIFNPRlRXQVJFLlxyXG4qL1xyXG5cclxuaW1wb3J0ICogYXMgZW9zIGZyb20gJy4vY29uc3QuanMnO1xyXG5cclxuY2xhc3MgSURNYXAge1xyXG4gIGlkID0gMDtcclxuICB0ZXh0ID0gJyc7XHJcbiAgY29uc3RydWN0b3IoaWQsIHRleHQpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKiogXHU2MjgwXHUzMDZFXHU1MjA2XHU5ODVFICovXHJcbmV4cG9ydCBjb25zdCBNT1ZFX0NBVEVHT1JZID0gW1xyXG4gIG5ldyBJRE1hcChlb3MuQ0FURUdPUllfUEhZU0lDQUwsICdcdTcyNjlcdTc0MDYnKSxcclxuICBuZXcgSURNYXAoZW9zLkNBVEVHT1JZX1NQRUNJQUwsICdcdTcyNzlcdTZCOEEnKSxcclxuICBuZXcgSURNYXAoMiwgJ1x1NTkwOVx1NTMxNicpLFxyXG5dO1xyXG5cclxuLyoqIFx1MzBCRlx1MzBBNFx1MzBEN1x1NzZGOFx1NjAyNyAqL1xyXG5leHBvcnQgY29uc3QgVFlQRV9NQVRDSFVQID0gW1xyXG4gIG5ldyBJRE1hcChlb3MuTUFUQ0hVUF9JTU1VTkUsICdcdTUyQjlcdTY3OUNcdTMwNkFcdTMwNTcnKSxcclxuICBuZXcgSURNYXAoZW9zLk1BVENIVVBfTk9UX1ZFUllfRUZGRUNUSVZFLCAnXHU0RUNBXHUzMDcyXHUzMDY4XHUzMDY0JyksXHJcbiAgbmV3IElETWFwKGVvcy5NQVRDSFVQX05FVVRSQUwsICdcdTY2NkVcdTkwMUEnKSxcclxuICBuZXcgSURNYXAoZW9zLk1BVENIVVBfU1VQRVJfRUZGRUNUSVZFLCAnXHU1MkI5XHU2NzlDXHU2MjlDXHU3RkE0JyksXHJcbl07XHJcblxyXG4vKiogXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHUzMEJEXHUzMEZDXHUzMEI5ICovXHJcbmV4cG9ydCBjb25zdCBEQU1BR0VfTUVTU0FHRSA9IFtcclxuICBuZXcgSURNYXAoZW9zLkRBTUFHRV9NRVNTQUdFX01PVkUsICdcdTYyODAnKSxcclxuICBuZXcgSURNYXAoZW9zLkRBTUFHRV9NRVNTQUdFX0JVUk4sICdcdTMwODRcdTMwNTFcdTMwNjknKSxcclxuICBuZXcgSURNYXAoZW9zLkRBTUFHRV9NRVNTQUdFX0NPTlNUUklDVElPTiwgJ1x1MzA1N1x1MzA4MVx1MzA2NFx1MzA1MScpLFxyXG4gIG5ldyBJRE1hcChlb3MuREFNQUdFX01FU1NBR0VfUE9JU09OLCAnXHUzMDY5XHUzMDRGJyksXHJcbiAgbmV3IElETWFwKGVvcy5EQU1BR0VfTUVTU0FHRV9SRUNPSUxfMSwgJ1x1NTNDRFx1NTJENTEnKSxcclxuICBuZXcgSURNYXAoZW9zLkRBTUFHRV9NRVNTQUdFX1dSQVAsICdcdTMwN0VcdTMwNERcdTMwNjRcdTMwNEYnKSxcclxuICBuZXcgSURNYXAoZW9zLkRBTUFHRV9NRVNTQUdFX0NPVU5URVIsICdcdTMwQUJcdTMwQTZcdTMwRjNcdTMwQkZcdTMwRkMnKSxcclxuICBuZXcgSURNYXAoZW9zLkRBTUFHRV9NRVNTQUdFX0NVUlNFLCAnXHUzMDZFXHUzMDhEXHUzMDQ0JyksXHJcbiAgbmV3IElETWFwKGVvcy5EQU1BR0VfTUVTU0FHRV9OSUdIVE1BUkUsICdcdTMwNDJcdTMwNEZcdTMwODAnKSxcclxuICBuZXcgSURNYXAoZW9zLkRBTUFHRV9NRVNTQUdFX0xFRUNIX1NFRUQsICdcdTMwODRcdTMwNjlcdTMwOEFcdTMwNEUnKSxcclxuICBuZXcgSURNYXAoZW9zLkRBTUFHRV9NRVNTQUdFX1NQSUtFUywgJ1x1MzA3RVx1MzA0RFx1MzA3M1x1MzA1NycpLFxyXG4gIG5ldyBJRE1hcChlb3MuREFNQUdFX01FU1NBR0VfUEVSSVNIX1NPTkcsICdcdTMwN0JcdTMwOERcdTMwNzNcdTMwNkVcdTMwNDZcdTMwNUYnKSxcclxuICBuZXcgSURNYXAoZW9zLkRBTUFHRV9NRVNTQUdFX0RFU1RJTllfQk9ORCwgJ1x1MzA3Rlx1MzA2MVx1MzA2NVx1MzA4QycpLFxyXG4gIG5ldyBJRE1hcChlb3MuREFNQUdFX01FU1NBR0VfU0xVREdFLCAnXHUzMEQ4XHUzMEM5XHUzMEVEXHUzMDQ4XHUzMDREJyksXHJcbiAgbmV3IElETWFwKGVvcy5EQU1BR0VfTUVTU0FHRV9IVU5HRVIsICdcdTMwNEZcdTMwNDZcdTMwNzVcdTMwNEYnKSxcclxuICBuZXcgSURNYXAoZW9zLkRBTUFHRV9NRVNTQUdFX0NIRVNUTlVUXzEsICdcdTMwQTRcdTMwQUNcdTMwQjBcdTMwRUExJyksXHJcbiAgbmV3IElETWFwKGVvcy5EQU1BR0VfTUVTU0FHRV9DSEVTVE5VVF8yLCAnXHUzMEE0XHUzMEFDXHUzMEIwXHUzMEVBMicpLFxyXG4gIG5ldyBJRE1hcChlb3MuREFNQUdFX01FU1NBR0VfUElURkFMTF9UUkFQLCAnXHUzMDRBXHUzMDY4XHUzMDU3XHUzMDQyXHUzMDZBJyksXHJcbiAgbmV3IElETWFwKGVvcy5EQU1BR0VfTUVTU0FHRV9CQURfV0VBVEhFUiwgJ1x1NjBBQVx1NTkyOVx1NTAxOScpLFxyXG4gIG5ldyBJRE1hcChlb3MuREFNQUdFX01FU1NBR0VfTUlTU0VEX01PVkUsICdcdTYyODBcdTU5MzFcdTY1NTdcdTgxRUFcdTUwQjcnKSxcclxuICBuZXcgSURNYXAoZW9zLkRBTUFHRV9NRVNTQUdFX1JFQ09JTF8yLCAnXHU1M0NEXHU1MkQ1MicpLFxyXG4gIG5ldyBJRE1hcChlb3MuREFNQUdFX01FU1NBR0VfU1RFQUxUSF9ST0NLLCAnXHUzMEI5XHUzMEM2XHUzMEVCXHUzMEI5XHUzMEVEXHUzMEMzXHUzMEFGJyksXHJcbiAgbmV3IElETWFwKGVvcy5EQU1BR0VfTUVTU0FHRV9UT1hJQ19TUElLRVMsICdcdTMwNjlcdTMwNEZcdTMwNzNcdTMwNTcnKSxcclxuICBuZXcgSURNYXAoZW9zLkRBTUFHRV9NRVNTQUdFX0FMTU9TVF9GQUlOVEVELCAnSFAxXHU4MUVBXHU1MEI3JyksXHJcbiAgbmV3IElETWFwKGVvcy5EQU1BR0VfTUVTU0FHRV9CQURfRFJFQU1TLCAnXHUzMENBXHUzMEE0XHUzMEM4XHUzMEUxXHUzMEEyJyksXHJcbiAgbmV3IElETWFwKGVvcy5EQU1BR0VfTUVTU0FHRV9TT0xBUl9QT1dFUiwgJ1x1MzBCNVx1MzBGM1x1MzBEMVx1MzBFRlx1MzBGQycpLFxyXG4gIG5ldyBJRE1hcChlb3MuREFNQUdFX01FU1NBR0VfRFJZX1NLSU4sICdcdTMwNEJcdTMwOTNcdTMwNURcdTMwNDZcdTMwNkZcdTMwNjAnKSxcclxuXTtcclxuIiwgIi8qXHJcbiAgVGhpcyBjb2RlIGluY2x1ZGVzIHBvcnRpb25zIGJhc2VkIG9uIGRhbWFnZS1lb3MgYnkgVXNlcm5hbWVGb2RkZXJcclxuICBodHRwczovL2dpdGh1Yi5jb20vVXNlcm5hbWVGb2RkZXIvZGFtYWdlLWVvc1xyXG5cclxuICBPcmlnaW5hbCBjb2RlIHBvcnRpb25zOlxyXG4gIC0gTUlUIExpY2Vuc2UgKGMpIDIwMjMgVXNlcm5hbWVGb2RkZXJcclxuXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIE9yaWdpbmFsIExpY2Vuc2U6XHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIE1JVCBMaWNlbnNlXHJcblxyXG4gIENvcHlyaWdodCAoYykgMjAyMyBVc2VybmFtZUZvZGRlclxyXG5cclxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG4gIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcbiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcbiAgU09GVFdBUkUuXHJcbiovXHJcblxyXG5pbXBvcnQgKiBhcyBlb3MgZnJvbSAnLi9jb25zdC5qcyc7XHJcbmltcG9ydCAqIGFzIE1lY2hhbmljcyBmcm9tICcuL21lY2hhbmljcy5qcyc7XHJcblxyXG4vKipcclxuICogXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHU2OUNCXHU5MDIwXHU0RjUzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTW9uc3RlciB7XHJcbiAgaWQgPSAwOyAvLyBcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNJRFxyXG4gIGlzX2xlYWRlciA9IGZhbHNlOyAvLyBcdTMwRUFcdTMwRkNcdTMwQzBcdTMwRkNcdTMwRDVcdTMwRTlcdTMwQjBcclxuICBpc19tZW1iZXIgPSBmYWxzZTsgLy8gXHUzMEMxXHUzMEZDXHUzMEUwXHUzMEUxXHUzMEYzXHUzMEQwXHUzMEZDXHUzMEQ1XHUzMEU5XHUzMEIwXHJcbiAgZ2VuZGVyID0gMDsgLy8gXHU2MDI3XHU1MjI1ICgwOiBcdTcxMjFcdTUyQjksIDE6IFx1MzBBQVx1MzBCOSwgMjogXHUzMEUxXHUzMEI5LCAzOiBcdTRFMERcdTY2MEUpXHJcbiAgbGV2ZWwgPSAwOyAvLyBMdlxyXG4gIGhwID0gMDsgLy8gSFBcclxuICBocF9tYXggPSAwOyAvLyBcdTY3MDBcdTU5MjdIUFxyXG4gIGF0ayA9IDA7IC8vIFx1NjUzQlx1NjQ4M1xyXG4gIGRlZiA9IDA7IC8vIFx1OTYzMlx1NUZBMVxyXG4gIHNwX2F0ayA9IDA7IC8vIFx1NzI3OVx1NjUzQlxyXG4gIHNwX2RlZiA9IDA7IC8vIFx1NzI3OVx1OTYzMlxyXG4gIHN0YWdlX2F0ayA9IDEwOyAvLyBcdTgwRkRcdTUyOUJcdTMwRTlcdTMwRjNcdTMwQUYgXHU2NTNCXHU2NDgzXHJcbiAgc3RhZ2VfZGVmID0gMTA7IC8vIFx1ODBGRFx1NTI5Qlx1MzBFOVx1MzBGM1x1MzBBRiBcdTk2MzJcdTVGQTFcclxuICBzdGFnZV9zcF9hdGsgPSAxMDsgLy8gXHU4MEZEXHU1MjlCXHUzMEU5XHUzMEYzXHUzMEFGIFx1NzI3OVx1NjUzQlxyXG4gIHN0YWdlX3NwX2RlZiA9IDEwOyAvLyBcdTgwRkRcdTUyOUJcdTMwRTlcdTMwRjNcdTMwQUYgXHU3Mjc5XHU5NjMyXHJcbiAgc3RhZ2VfYWNjdXJhY3kgPSAxMDsgLy8gXHU4MEZEXHU1MjlCXHUzMEU5XHUzMEYzXHUzMEFGIFx1NTQ3RFx1NEUyRFx1NzM4N1xyXG4gIHN0YWdlX2V2YXNpb24gPSAxMDsgLy8gXHU4MEZEXHU1MjlCXHUzMEU5XHUzMEYzXHUzMEFGIFx1NTZERVx1OTA3Rlx1NzM4N1xyXG4gIGlxID0gMDsgLy8gXHUzMDRCXHUzMDU3XHUzMDUzXHUzMDU1XHJcbiAgaGFsZl9hdGsgPSAwOyAvLyBcdTUzNEFcdTZFMUJcdTMwRTlcdTMwRjNcdTMwQUYgXHU2NTNCXHU2NDgzXHJcbiAgaGFsZl9kZWYgPSAwOyAvLyBcdTUzNEFcdTZFMUJcdTMwRTlcdTMwRjNcdTMwQUYgXHU5NjMyXHU1RkExXHJcbiAgaGFsZl9zcF9hdGsgPSAwOyAvLyBcdTUzNEFcdTZFMUJcdTMwRTlcdTMwRjNcdTMwQUYgXHU3Mjc5XHU2NTNCXHJcbiAgaGFsZl9zcF9kZWYgPSAwOyAvLyBcdTUzNEFcdTZFMUJcdTMwRTlcdTMwRjNcdTMwQUYgXHU3Mjc5XHU5NjMyXHJcbiAgZmxhc2hfZmlyZV9ib29zdCA9IDA7IC8vIFx1MzA4Mlx1MzA4OVx1MzA0NFx1MzA3M1x1NjU3MFxyXG4gIHR5cGVzID0gWzAsIDBdOyAvLyBcdTMwQkZcdTMwQTRcdTMwRDdcclxuICBhYmlsaXRpZXMgPSBbMCwgMF07IC8vIFx1NzI3OVx1NjAyN1xyXG4gIGhpZGRlbl9wb3dlcl90eXBlID0gMDsgLy8gXHUzMDgxXHUzMDU2XHUzMDgxXHUzMDhCXHUzMEQxXHUzMEVGXHUzMEZDXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHJcbiAgaGlkZGVuX3Bvd2VyX2Jhc2VfcG93ZXIgPSAwOyAvLyBcdTMwODFcdTMwNTZcdTMwODFcdTMwOEJcdTMwRDFcdTMwRUZcdTMwRkNcdTMwNkVcdTVBMDFcdTUyOUJcclxuICBoZWxkSXRlbSA9IDA7IC8vIFx1ODhDNVx1NTA5OVx1NEUyRFx1MzA2RVx1OTA1M1x1NTE3N1xyXG4gIGhlbGRJdGVtX3N0aWNreSA9IGZhbHNlOyAvLyBcdTMwQ0RcdTMwRDBcdTMwNjRcdTMwNERcclxuICBiZWxseSA9IDA7IC8vIFx1MzA0QVx1MzA2QVx1MzA0QlxyXG4gIHN0YXR1c2VzID0gbmV3IFN0YXR1c2VzKCk7IC8vIFx1NzJCNlx1NjE0Qlx1NzU3MFx1NUUzOFxyXG4gIGlxX3NraWxsID0gbmV3IEFycmF5KDY5KS5maWxsKGZhbHNlKTsgLy8gXHUzMDRCXHUzMDU3XHUzMDUzXHUzMDU1XHUzMEQ1XHUzMEU5XHUzMEIwXHJcbiAgZXhjbHVzaXZlX2l0ZW1fZWZmZWN0X2ZsYWdzID0gbmV3IEFycmF5KDEyOSkuZmlsbChmYWxzZSk7IC8vIFx1NUMwMlx1NzUyOFx1OTA1M1x1NTE3N1x1NTJCOVx1Njc5Q1x1MzBENVx1MzBFOVx1MzBCMFxyXG4gIGV4Y2x1c2l2ZV9pdGVtX2F0ayA9IDA7IC8vIFx1NUMwMlx1NzUyOFx1OTA1M1x1NTE3N1x1NTJBMFx1N0I5N1x1NTIwNiBcdTY1M0JcdTY0ODNcclxuICBleGNsdXNpdmVfaXRlbV9kZWYgPSAwOyAvLyBcdTVDMDJcdTc1MjhcdTkwNTNcdTUxNzdcdTUyQTBcdTdCOTdcdTUyMDYgXHU5NjMyXHU1RkExXHJcbiAgZXhjbHVzaXZlX2l0ZW1fc3BfYXRrID0gMDsgLy8gXHU1QzAyXHU3NTI4XHU5MDUzXHU1MTc3XHU1MkEwXHU3Qjk3XHU1MjA2IFx1NzI3OVx1NjUzQlxyXG4gIGV4Y2x1c2l2ZV9pdGVtX3NwX2RlZiA9IDA7IC8vIFx1NUMwMlx1NzUyOFx1OTA1M1x1NTE3N1x1NTJBMFx1N0I5N1x1NTIwNiBcdTcyNzlcdTk2MzJcclxuICBmbGFnX21lX2ZpcnN0ID0gZmFsc2U7IC8vIFx1MzA1NVx1MzA0RFx1MzA2OVx1MzA4QVx1MzBENVx1MzBFOVx1MzBCMFxyXG4gIGZsYWdfcHJhY3RpY2Vfc3dpbmdlciA9IGZhbHNlOyAvLyBcdTMwNEJcdTMwNUZcdTMwNkFcdTMwODlcdTMwNTdcdTMwRDVcdTMwRTlcdTMwQjBcclxuICBmbGFnX2FuZ2VyX3BvaW50ID0gZmFsc2U7IC8vIFx1MzA0NFx1MzA0Qlx1MzA4QVx1MzA2RVx1MzA2NFx1MzA3Q1x1MzBENVx1MzBFOVx1MzBCMFxyXG5cclxuICBuX21vdmVzX291dF9vZl9wcCA9IDA7IC8vIChcdTMwNjhcdTMwNjNcdTMwNjZcdTMwNEFcdTMwNERcdTc1MjgpIFBQXHUzMDRDXHU2QjhCXHUzMDYzXHUzMDY2XHUzMDQ0XHUzMDhCXHU2MjgwXHU2NTcwXHJcblxyXG4gIGZsYWdfdGRfdGltZXNoZWFsZCA9IGZhbHNlOyAvLyBbXHU2NjQyXHU5NUM3XVx1MzBCRlx1MzBBNFx1MzBFMFx1MzBCN1x1MzBGQ1x1MzBFQlx1MzBDOVx1MzBENVx1MzBFOVx1MzBCMFxyXG5cclxuICAvKipcclxuICAgKiBcdTMwQzdcdTMwQTNcdTMwRkNcdTMwRDdcdTMwQjNcdTMwRDRcdTMwRkNcdTMwNkVcdTRGNUNcdTYyMTBcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIGNsb25lKCkge1xyXG4gICAgY29uc3QgY29weSA9IG5ldyBNb25zdGVyKCk7XHJcbiAgICBPYmplY3QuYXNzaWduKGNvcHksIHRoaXMpO1xyXG4gICAgcmV0dXJuIGNvcHk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcdTY3MDlcdTUyQjlcdTYwMjdcdTMwOTJcdThGRDRcdTMwNTkgKFx1NUUzOFx1MzA2QnRydWUpXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBpc1ZhbGlkKCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIGlzTW9uc3RlcigpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHU1QkZFXHU4QzYxXHUzMDZFXHU3Mjc5XHU2MDI3XHUzMDRDXHU2NzA5XHU1MkI5XHUzMDY3XHUzMDQyXHUzMDhCXHUzMDRCXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHJcbiAgICogQHBhcmFtIHsqfSBhYmlsaXR5SWRcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIGFiaWxpdHlBY3RpdmUoYWJpbGl0eUlkKSB7XHJcbiAgICBpZiAoYWJpbGl0eUlkID09IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuYWJpbGl0aWVzLmluY2x1ZGVzKGFiaWxpdHlJZCk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFx1NUJGRVx1OEM2MVx1MzA2RVx1NzI3OVx1NjAyN1x1MzA0Q1x1NjcwOVx1NTJCOVx1MzA2N1x1MzA0Mlx1MzA4Qlx1MzA0Qlx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRiAoXHUzMDQ0XHUzMDQ4XHUzMDREXHUzMEZCXHUzMDRCXHUzMDVGXHUzMDg0XHUzMDc2XHUzMDhBXHU4MDAzXHU2MTZFKVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBhYmlsaXR5SWRcclxuICAgKiBAcGFyYW0ge01vbnN0ZXJ9IGF0dGFja2VyXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSBhdHRhY2tlckFiaWxpdHlBY3RpdmVcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIGFiaWxpdHlBY3RpdmVEZXRhaWxzKGFiaWxpdHlJZCwgYXR0YWNrZXIsIGF0dGFja2VyQWJpbGl0eUFjdGl2ZSkge1xyXG4gICAgaWYgKHRoaXMgIT0gYXR0YWNrZXIgJiYgYXR0YWNrZXJBYmlsaXR5QWN0aXZlICYmIHRoaXMuYWJpbGl0eUFjdGl2ZSg4MykpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuYWJpbGl0eUFjdGl2ZShhYmlsaXR5SWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHUzMDRCXHUzMDU3XHUzMDUzXHUzMDU1XHUzMDRDXHU2NzA5XHU1MkI5XHUzMDY3XHUzMDQyXHUzMDhCXHUzMDRCXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHJcbiAgICogQHBhcmFtIHsqfSBpcVxyXG4gICAqIEBwYXJhbSB7RHVuZ2VvblN0YXRlfSBkdW5nZW9uU3RhdGVcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIGlxU2tpbGxFbmFibGVkKGlxLCBkdW5nZW9uU3RhdGUpIHtcclxuICAgIGlmICh0aGlzLmlzX21lbWJlciAmJiBkdW5nZW9uU3RhdGUuaXFfZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaXFfc2tpbGxbaXFdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHU5MDUzXHU1MTc3XHUzMDkyXHU2MzAxXHUzMDYzXHUzMDY2XHUzMDQ0XHUzMDhCXHUzMDRCXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGIChcdTMwQ0RcdTMwRDBcdTMwNjRcdTMwNERcdTMwOTJcdTgwMDNcdTYxNkUpXHJcbiAgICogQHBhcmFtIHsqfSBpdGVtSWRcclxuICAgKi9cclxuICBoYXNIZWxkSXRlbShpdGVtSWQpIHtcclxuICAgIHJldHVybiAhdGhpcy5oZWxkSXRlbV9zdGlja3kgJiYgdGhpcy5oZWxkSXRlbSA9PSBpdGVtSWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcdTkwNTNcdTUxNzdcdTMwNENcdTY3MDlcdTUyQjlcdTMwNjdcdTMwNDJcdTMwOEJcdTMwNEJcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUYgKFx1MzA3Nlx1MzA0RFx1MzA4OFx1MzA0Nlx1MzA5Mlx1ODAwM1x1NjE2RSlcclxuICAgKiBAcGFyYW0geyp9IGl0ZW1JZFxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgaXRlbUFjdGl2ZShpdGVtSWQpIHtcclxuICAgIHJldHVybiAhdGhpcy5hYmlsaXR5QWN0aXZlKDB4NmYpICYmIHRoaXMuaGFzSGVsZEl0ZW0oaXRlbUlkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFx1MzA2OVx1MzA2RVx1NTkyOVx1NkMxN1x1MzA2RVx1NUY3MVx1OTdGRlx1MzA5Mlx1NTNEN1x1MzA1MVx1MzA4Qlx1MzA0Qlx1NTNENlx1NUY5N1xyXG4gICAqIEBwYXJhbSB7RHVuZ2VvblN0YXRlfSBkdW5nZW9uXHJcbiAgICovXHJcbiAgcGVyY2VpdmVkV2VhdGhlcihkdW5nZW9uKSB7XHJcbiAgICAvLyBcdTMwQ0VcdTMwRkNcdTMwNjZcdTMwOTNcdTMwRDBcdTMwRjNcdTMwQzBcdTMwQ0FcdTMwOTJcdTYzMDFcdTMwNjNcdTMwNjZcdTMwNDRcdTMwOEJcdTU4MzRcdTU0MDgsIFx1MzA2Rlx1MzA4Q1x1MzA2OFx1MzA3Rlx1MzA2QVx1MzA1OVxyXG4gICAgaWYgKHRoaXMuaXRlbUFjdGl2ZSgweDM0KSkge1xyXG4gICAgICByZXR1cm4gZW9zLldFQVRIRVJfQ0xFQVI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZHVuZ2Vvbi53ZWF0aGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHU0RUQ2XHUzMDZFXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMDRDXHU1QkZFXHU4QzYxXHUzMDZFXHU3Mjc5XHU2MDI3XHUzMDkyXHU2MzAxXHUzMDYzXHUzMDY2XHUzMDQ0XHUzMDhCXHUzMDRCXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHJcbiAgICogQHBhcmFtIHsqfSBhYmlsaXR5SWRcclxuICAgKiBAcGFyYW0ge0R1bmdlb25TdGF0ZX0gZHVuZ2VvblxyXG4gICAqL1xyXG4gIG90aGVyTW9uc3RlckFiaWxpdHlBY3RpdmUoYWJpbGl0eUlkLCBkdW5nZW9uKSB7XHJcbiAgICByZXR1cm4gYWJpbGl0eUlkICE9IDAgJiYgIXRoaXMuYWJpbGl0eUFjdGl2ZSgweDUzKSAmJiBkdW5nZW9uLm90aGVyTW9uc3RlcnMuYWJpbGl0aWVzLmluY2x1ZGVzKGFiaWxpdHlJZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcdTVDMDJcdTc1MjhcdTkwNTNcdTUxNzdcdTMwNkVcdTMwQjlcdTMwQzZcdTMwRkNcdTMwQkZcdTMwQjlcdTRFMEFcdTY2MDdcdTUyQjlcdTY3OUNcdTMwOTJcdTUzRDZcdTVGOTcgKFx1NjUzQlx1NjQ4M1x1N0NGQilcclxuICAgKiBAcGFyYW0geyp9IG1vdmVDYXRlZ29yeVxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgZXhjbHVzaXZlSXRlbU9mZmVuc2VCb29zdChtb3ZlQ2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiBtb3ZlQ2F0ZWdvcnkgPT0gZW9zLkNBVEVHT1JZX1BIWVNJQ0FMID8gdGhpcy5leGNsdXNpdmVfaXRlbV9hdGsgOiB0aGlzLmV4Y2x1c2l2ZV9pdGVtX3NwX2F0aztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFx1NUMwMlx1NzUyOFx1OTA1M1x1NTE3N1x1MzA2RVx1MzBCOVx1MzBDNlx1MzBGQ1x1MzBCRlx1MzBCOVx1NEUwQVx1NjYwN1x1NTJCOVx1Njc5Q1x1MzA5Mlx1NTNENlx1NUY5NyAoXHU5NjMyXHU1RkExXHU3Q0ZCKVxyXG4gICAqIEBwYXJhbSB7Kn0gbW92ZUNhdGVnb3J5XHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBleGNsdXNpdmVJdGVtRGVmZW5zZUJvb3N0KG1vdmVDYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuIG1vdmVDYXRlZ29yeSA9PSBlb3MuQ0FURUdPUllfUEhZU0lDQUwgPyB0aGlzLmV4Y2x1c2l2ZV9pdGVtX2RlZiA6IHRoaXMuZXhjbHVzaXZlX2l0ZW1fc3BfZGVmO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHU2Q0UyXHU1MkQ1XHU4MjcyXHUzMEVBXHUzMERDXHUzMEYzXHUzMDRDXHU2NzA5XHU1MkI5XHUzMDRCXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBhdXJhQm93QWN0aXZlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIXRoaXMuYWJpbGl0eUFjdGl2ZSgweDZmKSAmJlxyXG4gICAgICB0aGlzLmhlbGRJdGVtID4gMCAmJlxyXG4gICAgICBNZWNoYW5pY3MuaXNBdXJhQm93KHRoaXMuaGVsZEl0ZW0pICYmXHJcbiAgICAgIHRoaXMuaGFzSGVsZEl0ZW0odGhpcy5oZWxkSXRlbSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcdTYwQUFcdTMwNDRcdTcyQjZcdTYxNEJcdTMwOTJcdTYzMDFcdTMwNjNcdTMwNjZcdTMwNDRcdTMwOEJcdTMwNEJcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcclxuICAgKiBAcGFyYW0geyp9IGNoZWNrSGVsZEl0ZW0gXHU4OEM1XHU1MDk5XHU0RTJEXHUzMDZFXHU5MDUzXHU1MTc3XHUzMDkyXHU4MDAzXHU2MTZFXHUzMDU5XHUzMDhCXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBoYXNOZWdhdGl2ZVN0YXR1cyhjaGVja0hlbGRJdGVtID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IHNwZWVkRG93biA9IHRoaXMuc3BlZWQgPT0gMDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIC8vIFx1MzA1OVx1MzA0NFx1MzA3Rlx1MzA5M1xyXG4gICAgICB0aGlzLnN0YXR1c2VzLnNsZWVwIHx8XHJcbiAgICAgIC8vIFx1MzA0Mlx1MzA0Rlx1MzA4MFxyXG4gICAgICB0aGlzLnN0YXR1c2VzLm5pZ2h0bWFyZSB8fFxyXG4gICAgICAvLyBcdTMwODRcdTMwNTFcdTMwNjlcclxuICAgICAgdGhpcy5zdGF0dXNlcy5idXJuIHx8XHJcbiAgICAgIC8vIFx1MzA2OVx1MzA0RlxyXG4gICAgICB0aGlzLnN0YXR1c2VzLnBvaXNvbiB8fFxyXG4gICAgICAvLyBcdTMwODJcdTMwNDZcdTMwNjlcdTMwNEZcclxuICAgICAgdGhpcy5zdGF0dXNlcy5iYWRfcG9pc29uIHx8XHJcbiAgICAgIC8vIFx1MzA3RVx1MzA3MlxyXG4gICAgICB0aGlzLnN0YXR1c2VzLnBhcmFseXNpcyB8fFxyXG4gICAgICAvLyBcdTMwNTdcdTMwNERcdTMwNzlcdTMwNjRcdUZGMUZcdTMwN0ZcdTMwODRcdTMwNzZcdTMwODlcdTMwOENcdTMwNUZcdUZGMUZcclxuICAgICAgdGhpcy5zdGF0dXNlcy5pZGVudGlmeWluZyB8fFxyXG4gICAgICAvLyBcdTMwNTNcdTMwOTNcdTMwODlcdTMwOTNcclxuICAgICAgdGhpcy5zdGF0dXNlcy5jb25mdXNpb24gfHxcclxuICAgICAgLy8gXHUzMDQ0XHUzMDQ4XHUzMDREXHJcbiAgICAgIHRoaXMuc3RhdHVzZXMuZ2FzdHJvX2FjaWQgfHxcclxuICAgICAgLy8gXHUzMDQ4XHUzMDkzXHUzMDdFXHUzMDRGXHJcbiAgICAgIHRoaXMuc3RhdHVzZXMud2hpZmZlciB8fFxyXG4gICAgICAvLyBcdTMwN0ZcdTMwNEFcdTMwNjhcdTMwNTdcdTMwRTFcdTMwQUNcdTMwQ0QgKFx1MzBFQVx1MzBGQ1x1MzBDMFx1MzBGQ1x1NEVFNVx1NTkxNilcclxuICAgICAgKGNoZWNrSGVsZEl0ZW0gJiYgIXRoaXMuaXNfbGVhZGVyICYmIHRoaXMuaXRlbUFjdGl2ZSgweGUpKSB8fFxyXG4gICAgICAvLyBcdTMwN0VcdTMwNjlcdTMwOEZcdTMwNTdcclxuICAgICAgdGhpcy5zdGF0dXNlcy5jcm9zc19leWVkIHx8XHJcbiAgICAgIC8vIFx1MzBERlx1MzBFOVx1MzBBRlx1MzBFQlx1MzBBMlx1MzBBNFxyXG4gICAgICB0aGlzLnN0YXR1c2VzLm1pcmFjbGVfZXllIHx8XHJcbiAgICAgIC8vIFx1MzA3Rlx1MzA4NFx1MzA3Nlx1MzA4QlxyXG4gICAgICB0aGlzLnN0YXR1c2VzLmV4cG9zZWQgfHxcclxuICAgICAgLy8gXHUzMDY5XHUzMDkzXHUzMDVEXHUzMDRGXHJcbiAgICAgIHNwZWVkRG93biB8fFxyXG4gICAgICAvLyBcdTMwNURcdTMwNkVcdTRFRDZcdTYwQUFcdTMwNDRcdTcyQjZcdTYxNEJcclxuICAgICAgdGhpcy5zdGF0dXNlcy5vdGhlcl9uZWdhdGl2ZV9zdGF0dXNcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcdTMwNERcdTMwODJcdTMwNjNcdTMwNUZcdTMwN0VcdTMwNENcdTY3MDlcdTUyQjlcdTMwNkFcdTc2RjhcdTYyNEJcdTMwNEJcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcclxuICAgKiBAcGFyYW0ge01vbnN0ZXJ9IGRlZmVuZGVyXHJcbiAgICogQHBhcmFtIHsqfSBtb3ZlVHlwZVxyXG4gICAqIEBwYXJhbSB7RHVuZ2VvblN0YXRlfSBkdW5nZW9uXHJcbiAgICovXHJcbiAgc2NyYXBweVNob3VsZEFjdGl2YXRlKGRlZmVuZGVyLCBtb3ZlVHlwZSwgZHVuZ2Vvbikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuYWJpbGl0eUFjdGl2ZSgweDU3KSAmJiAvLyBcdTMwNERcdTMwODJcdTMwNjNcdTMwNUZcdTMwN0VcdTMwNENcdTY3MDlcdTUyQjlcclxuICAgICAgICBkZWZlbmRlci50eXBlc1tpXSA9PSBlb3MuVFlQRV9HSE9TVCAmJiAvLyBcdTk2MzJcdTVGQTFcdTUwNzRcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNENcdTMwQjRcdTMwRkNcdTMwQjlcdTMwQzhcclxuICAgICAgICBNZWNoYW5pY3MudHlwZUluZWZmZWN0aXZlQWdhaW5zdEdob3N0KG1vdmVUeXBlKSAvLyBcdTYyODBcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNENcdTMwQ0VcdTMwRkNcdTMwREVcdTMwRUJcdTMwNEJcdTY4M0NcdTk1RDhcclxuICAgICAgKSB7XHJcbiAgICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLnNjcmFwcHlBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcdTMwNTNcdTMwNkVcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNcdTMwNkJcdTMwNERcdTMwODJcdTMwNjNcdTMwNUZcdTMwN0VcdTMwNkVcdTUyQjlcdTY3OUNcdTMwNENcdTc2N0FcdTUyRDVcdTMwNTlcdTMwOEJcdTMwNEJcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcclxuICAgKiBAcGFyYW0ge01vbnN0ZXJ9IGF0dGFja2VyXHJcbiAgICogQHBhcmFtIHsqfSB0eXBlSWR4IFx1MzBCRlx1MzBBNFx1MzBEN1x1MzA2RVx1MzBBNFx1MzBGM1x1MzBDN1x1MzBDM1x1MzBBRlx1MzBCOSBcdTIwM0JcdTMwQkZcdTMwQTRcdTMwRDdJRFx1MzA2N1x1MzA2Rlx1MzA2QVx1MzA0NFxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgZ2hvc3RJbW11bml0eUFjdGl2ZShhdHRhY2tlciwgdHlwZUlkeCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy50eXBlc1t0eXBlSWR4XSA9PSBlb3MuVFlQRV9HSE9TVCAmJiAhYXR0YWNrZXIuc3RhdHVzZXMuZXhwb3NlZCAmJiAhYXR0YWNrZXIuZXhjbHVzaXZlSXRlbUVmZmVjdEFjdGl2ZSgweDQ1KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFx1NUJGRVx1OEM2MVx1MzA2RVx1NUMwMlx1NzUyOFx1OTA1M1x1NTE3N1x1NTJCOVx1Njc5Q1x1MzA0Q1x1NjcwOVx1NTJCOVx1MzA2N1x1MzA0Mlx1MzA4Qlx1MzA0Qlx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlxyXG4gICAqIEBwYXJhbSB7Kn0gZWZmZWN0SWRcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIGV4Y2x1c2l2ZUl0ZW1FZmZlY3RBY3RpdmUoZWZmZWN0SWQpIHtcclxuICAgIHJldHVybiB0aGlzLmlzX21lbWJlciAmJiB0aGlzLmV4Y2x1c2l2ZV9pdGVtX2VmZmVjdF9mbGFnc1tlZmZlY3RJZF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNcdTMwNENcdTMwQkZcdTMwQTRcdTMwRDdcdTMwODRcdTcyNzlcdTYwMjdcdTRFRTVcdTU5MTZcdTMwNkVcdTg5ODFcdTU2RTBcdTMwNjdcdTZENkVcdTMwNDRcdTMwNjZcdTMwNDRcdTMwOEJcdTMwNEJcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcclxuICAgKiBAcGFyYW0geyp9IGR1bmdlb25cclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIGhhc0NvbmRpdGlvbmFsR3JvdW5kSW1tdW5pdHkoZHVuZ2Vvbikge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpICYmICFkdW5nZW9uLmdyYXZpdHkgJiYgdGhpcy5zdGF0dXNlcy5tYWduZXRfcmlzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFx1NzI3OVx1NjAyN1x1MzA3NVx1MzA4Nlx1MzA0Nlx1MzA0Q1x1NjcwOVx1NTJCOVx1MzA2N1x1MzA0Mlx1MzA4Qlx1MzA0Qlx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRiAoXHUzMDU4XHUzMDg1XHUzMDQ2XHUzMDhBXHUzMDg3XHUzMDRGXHU3MkI2XHU2MTRCXHUzMDkyXHU4MDAzXHU2MTZFKVxyXG4gICAqIEBwYXJhbSB7RHVuZ2VvblN0YXRlfSBkdW5nZW9uXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBsZXZpdGF0ZUFjdGl2ZShkdW5nZW9uKSB7XHJcbiAgICByZXR1cm4gIWR1bmdlb24uZ3Jhdml0eSAmJiB0aGlzLmFiaWxpdHlBY3RpdmUoMHgzNyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNENcdTVCRkVcdThDNjFcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNjhcdTRFMDBcdTgxRjRcdTMwNTdcdTMwNjZcdTMwNDRcdTMwOEJcdTMwNEJcclxuICAgKiBAcGFyYW0geyp9IHR5cGVJZFxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgaXNUeXBlKHR5cGVJZCkge1xyXG4gICAgcmV0dXJuIHR5cGVJZCAhPSBlb3MuVFlQRV9OT05FICYmICh0aGlzLnR5cGVzWzBdID09IHR5cGVJZCB8fCB0aGlzLnR5cGVzWzFdID09IHR5cGVJZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcdTYyODBcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcdTMwOTJcdTUzRDZcdTVGOTcgKFx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1MzA2RVx1NzI3OVx1NjAyN1x1MzBGQlx1MzBCOVx1MzBDNlx1MzBGQ1x1MzBCRlx1MzBCOVx1MzA2RVx1NUY3MVx1OTdGRlx1MzA5Mlx1NTNEN1x1MzA1MVx1MzA4QilcclxuICAgKiBAcGFyYW0ge051bWJlcn0gbW92ZUlkXHJcbiAgICogQHBhcmFtIHtEdW5nZW9uU3RhdGV9IGR1bmdlb25cclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIGdldE1vdmVUeXBlKG1vdmVJZCwgZHVuZ2Vvbikge1xyXG4gICAgLy8gXHUzMENFXHUzMEZDXHUzMERFXHUzMEVCXHUzMEI5XHUzMEFEXHUzMEYzIC0+IFx1MzBDRVx1MzBGQ1x1MzBERVx1MzBFQlxyXG4gICAgaWYgKCFNZWNoYW5pY3MuaXNSZWd1bGFyQXR0YWNrT3JQcm9qZWN0aWxlKG1vdmVJZCkgJiYgdGhpcy5pc1ZhbGlkKCkgJiYgdGhpcy5hYmlsaXR5QWN0aXZlKDB4NmIpKSB7XHJcbiAgICAgIHJldHVybiBlb3MuVFlQRV9OT1JNQUw7XHJcbiAgICB9XHJcbiAgICAvLyBcdTMwODFcdTMwNTZcdTMwODFcdTMwOEJcdTMwRDFcdTMwRUZcdTMwRkNcclxuICAgIGlmIChtb3ZlSWQgPT0gMHgxNDQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGlkZGVuX3Bvd2VyX3R5cGU7XHJcbiAgICB9XHJcbiAgICAvLyBcdTMwNTdcdTMwNUNcdTMwOTNcdTMwNkVcdTMwODFcdTMwNTBcdTMwN0ZcclxuICAgIGlmIChtb3ZlSWQgPT0gMHgxZDcpIHtcclxuICAgICAgY29uc3QgbmdJbmZvID0gdGhpcy5uYXR1cmFsR2lmdEluZm8oKTtcclxuICAgICAgaWYgKG5nSW5mbykge1xyXG4gICAgICAgIHJldHVybiBuZ0luZm8udHlwZUlkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBcdTMwQTZcdTMwQTdcdTMwQjZcdTMwRkNcdTMwRENcdTMwRkNcdTMwRUJcclxuICAgIGlmIChtb3ZlSWQgPT0gMHgxZikge1xyXG4gICAgICByZXR1cm4gdGhpcy53ZWF0aGVyQmFsbFR5cGUoZHVuZ2Vvbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWVjaGFuaWNzLmdldE1vdmVUeXBlKG1vdmVJZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcdTYyODBcdTMwNkVcdTVBMDFcdTUyOUJcdTMwOTJcdTUzRDZcdTVGOTcgKFx1NTg5N1x1NTJBMFx1NTIwNlx1MzA5Mlx1ODAwM1x1NjE2RSlcclxuICAgKiBAcGFyYW0ge01vdmV9IG1vdmVcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIGdldE1vdmVQb3dlcihtb3ZlKSB7XHJcbiAgICAvLyBcdTMwODFcdTMwNTZcdTMwODFcdTMwOEJcdTMwRDFcdTMwRUZcdTMwRkNcclxuICAgIGlmIChtb3ZlLmlkID09IDB4MTQ0KSB7XHJcbiAgICAgIHJldHVybiBtb3ZlLmdpbnNlbmcgKyB0aGlzLmhpZGRlbl9wb3dlcl9iYXNlX3Bvd2VyO1xyXG4gICAgfVxyXG4gICAgbGV0IHBvd2VyID0gbW92ZS5naW5zZW5nICsgTWVjaGFuaWNzLmdldE1vdmVCYXNlUG93ZXIobW92ZS5pZCwgbW92ZS50aW1lRGFya25lc3MpO1xyXG4gICAgLy8gXHUzMDU4XHUzMDRGXHUzMDQ2XHUzMDZFXHUzMEFBXHUzMEZDXHUzMEQ2IC0+IFx1NUEwMVx1NTI5QngyXHJcbiAgICBpZiAodGhpcy5pdGVtQWN0aXZlKDB4MmIpKSBwb3dlciAqPSAyO1xyXG4gICAgcmV0dXJuIHBvd2VyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHU2NEVDXHU0RjNDXHU3Njg0XHUzMDZBXHU3MTIxXHU2NTc1XHU3MkI2XHU2MTRCXHUzMDZCXHUzMDZBXHUzMDhCXHU2RTlDXHUzMDgxXHU2MjgwXHUzMDkyXHUzMEFEXHUzMEUzXHUzMEYzXHUzMEJCXHUzMEVCXHUzMDU1XHUzMDVCXHUzMDhCXHUzMDRCXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHJcbiAgICogQHBhcmFtIHsqfSBtb3ZlSWRcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIHR3b1R1cm5Nb3ZlRm9yY2VkTWlzcyhtb3ZlSWQpIHtcclxuICAgIC8vIFx1MzA1RFx1MzA4OVx1MzA5Mlx1MzA2OFx1MzA3NiwgXHUzMDY4XHUzMDczXHUzMDZGXHUzMDZEXHUzMDhCIC0+IFx1MzBCOVx1MzBBQlx1MzBBNFx1MzBBMlx1MzBDM1x1MzBEMVx1MzBGQywgXHUzMDVGXHUzMDY0XHUzMDdFXHUzMDRELCBcdTMwNEJcdTMwNUNcdTMwNEFcdTMwNTNcdTMwNTcsIFx1MzA0Qlx1MzA3Rlx1MzA2QVx1MzA4QSBcdTMwNjdcdTZCNjJcdTMwN0VcdTMwOEJcclxuICAgIGlmICh0aGlzLnN0YXR1c2VzLmZseWluZyB8fCB0aGlzLnN0YXR1c2VzLmJvdW5jaW5nKSB7XHJcbiAgICAgIHJldHVybiBtb3ZlSWQgIT0gMHg4OCAmJiBtb3ZlSWQgIT0gMHhhMiAmJiBtb3ZlSWQgIT0gMHgzOSAmJiBtb3ZlSWQgIT0gMHg0MDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuc3RhdHVzZXMuZGl2aW5nICYmICF0aGlzLnN0YXR1c2VzLmRpZ2dpbmcgJiYgIXRoaXMuc3RhdHVzZXMuc2hhZG93X2ZvcmNlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIFx1MzBDMFx1MzBBNFx1MzBEM1x1MzBGM1x1MzBCMCAtPiBcdTMwNDZcdTMwNUFcdTMwNTdcdTMwNEEsIFx1MzA2QVx1MzA3Rlx1MzA2RVx1MzA4QSBcdTMwNjdcdTZCNjJcdTMwN0VcdTMwOEJcclxuICAgIGlmICh0aGlzLnN0YXR1c2VzLmRpdmluZyAmJiAobW92ZUlkID09IDB4MjAgfHwgbW92ZUlkID09IDB4ZGIpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIFx1MzA0Mlx1MzA2QVx1MzA5Mlx1MzA3Qlx1MzA4QiAtPiBcdTMwNThcdTMwNTdcdTMwOTMsIFx1MzBERVx1MzBCMFx1MzBDQlx1MzBDMVx1MzBFNVx1MzBGQ1x1MzBDOSBcdTMwNjdcdTZCNjJcdTMwN0VcdTMwOEJcclxuICAgIGVsc2UgaWYgKHRoaXMuc3RhdHVzZXMuZGlnZ2luZykge1xyXG4gICAgICBpZiAobW92ZUlkID09IDB4NzYgfHwgbW92ZUlkID09IDB4MTI4KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFx1MzA1N1x1MzA1Q1x1MzA5M1x1MzA2RVx1MzA4MVx1MzA1MFx1MzA3Rlx1MzA2RVx1ODBGRFx1NTI5Qlx1MzA5Mlx1NTNENlx1NUY5N1x1MzA1OVx1MzA4QlxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgbmF0dXJhbEdpZnRJbmZvKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzTW9uc3RlcigpIHx8IHRoaXMuaGVsZEl0ZW0uaWQgPT0gMCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWVjaGFuaWNzLk5BVFVSQUxfR0lGVF9JVEVNX1RBQkxFLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG5nSW5mbyA9IE1lY2hhbmljcy5OQVRVUkFMX0dJRlRfSVRFTV9UQUJMRVtpXTtcclxuICAgICAgaWYgKHRoaXMuaGVsZEl0ZW0gPT0gbmdJbmZvLml0ZW1JZCkge1xyXG4gICAgICAgIHJldHVybiBuZ0luZm87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHUzMEE2XHUzMEE3XHUzMEI2XHUzMEZDXHUzMERDXHUzMEZDXHUzMEVCXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDkyXHU1M0Q2XHU1Rjk3XHUzMDU5XHUzMDhCXHJcbiAgICogQHBhcmFtIHtEdW5nZW9uU3RhdGV9IGR1bmdlb25cclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIHdlYXRoZXJCYWxsVHlwZShkdW5nZW9uKSB7XHJcbiAgICByZXR1cm4gTWVjaGFuaWNzLldFQVRIRVJfQkFMTF9UWVBFX1RBQkxFW3RoaXMucGVyY2VpdmVkV2VhdGhlcihkdW5nZW9uKV07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNcdTMwNkVcdTU5MjdcdTMwNERcdTMwNTVcdTMwOTJcdTUzRDZcdTVGOTdcdTMwNTlcdTMwOEIgKFx1MzA3Mlx1MzA4Q1x1MzA0NFx1MzA2MFx1MzA3RVx1NzUyOClcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIGdldFNpemUoKSB7XHJcbiAgICBpZiAoIVBva2Vtb25EYXRhKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1Bva2Vtb25EYXRhIG5vdCBmb3VuZCcpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUG9rZW1vbkRhdGFbdGhpcy5pZF0uU2l6ZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTcyQjZcdTYxNEJcdTc1NzBcdTVFMzhcclxuICovXHJcbmNsYXNzIFN0YXR1c2VzIHtcclxuICAvKiBcdTc3MjBcdTMwOEEgKi9cclxuICBzbGVlcCA9IGZhbHNlOyAvLyBcdTMwNTlcdTMwNDRcdTMwN0ZcdTMwOTNcclxuICBuaWdodG1hcmUgPSBmYWxzZTsgLy8gXHUzMDQyXHUzMDRGXHUzMDgwXHJcbiAgbmFwcGluZyA9IGZhbHNlOyAvLyBcdTMwNDJcdTMwNEZcdTMwNzNcclxuXHJcbiAgLyogXHUzMEIxXHUzMEFDICovXHJcbiAgYnVybiA9IGZhbHNlOyAvLyBcdTMwODRcdTMwNTFcdTMwNjlcclxuICBwb2lzb24gPSBmYWxzZTsgLy8gXHUzMDY5XHUzMDRGXHJcbiAgYmFkX3BvaXNvbiA9IGZhbHNlOyAvLyBcdTMwODJcdTMwNDZcdTMwNjlcdTMwNEZcclxuICBwYXJhbHlzaXMgPSBmYWxzZTsgLy8gXHUzMDdFXHUzMDcyXHJcbiAgaWRlbnRpZnlpbmcgPSBmYWxzZTsgLy8gXHUzMDU3XHUzMDREXHUzMDc5XHUzMDY0ICg/KVxyXG5cclxuICAvKiBcdTVGQzMgKi9cclxuICBjb25mdXNpb24gPSBmYWxzZTsgLy8gXHUzMDUzXHUzMDkzXHUzMDg5XHUzMDkzXHJcblxyXG4gIC8qIFx1NkU5Q1x1MzA4MVx1NjI4MCAqL1xyXG4gIHNrdWxsX2Jhc2ggPSBmYWxzZTsgLy8gXHUzMEVEXHUzMEIxXHUzMEMzXHUzMEM4XHUzMDVBXHUzMDY0XHUzMDREXHJcbiAgZmx5aW5nID0gZmFsc2U7IC8vIFx1MzA1RFx1MzA4OVx1MzA5Mlx1MzA2OFx1MzA3NlxyXG4gIGJvdW5jaW5nID0gZmFsc2U7IC8vIFx1MzA2OFx1MzA3M1x1MzA2Rlx1MzA2RFx1MzA4QlxyXG4gIGRpdmluZyA9IGZhbHNlOyAvLyBcdTMwQzBcdTMwQTRcdTMwRDNcdTMwRjNcdTMwQjBcclxuICBkaWdnaW5nID0gZmFsc2U7IC8vIFx1MzA0Mlx1MzA2QVx1MzA5Mlx1MzA3Qlx1MzA4QlxyXG4gIGNoYXJnZSA9IGZhbHNlOyAvLyBcdTMwNThcdTMwODVcdTMwNDZcdTMwNjdcdTMwOTNcclxuICBzaGFkb3dfZm9yY2UgPSBmYWxzZTsgLy8gXHUzMEI3XHUzMEUzXHUzMEM5XHUzMEZDXHUzMEMwXHUzMEE0XHUzMEQ2XHJcblxyXG4gIC8qIFx1NTNEN1x1MzA1MVx1OEVBQiAqL1xyXG4gIHJlZmxlY3QgPSBmYWxzZTsgLy8gXHUzMEVBXHUzMEQ1XHUzMEVDXHUzMEFGXHUzMEJGXHUzMEZDXHJcbiAgbGlnaHRfc2NyZWVuID0gZmFsc2U7IC8vIFx1MzA3Mlx1MzA0Qlx1MzA4QVx1MzA2RVx1MzA0Qlx1MzA3OVxyXG4gIGx1Y2t5X2NoYW50ID0gZmFsc2U7IC8vIFx1MzA0QVx1MzA3RVx1MzA1OFx1MzA2QVx1MzA0NFxyXG5cclxuICAvKiBcdThEODVcdTgwRkRcdTUyOUIgKi9cclxuICBnYXN0cm9fYWNpZCA9IGZhbHNlOyAvLyBcdTMwNDRcdTMwNDhcdTMwNERcclxuXHJcbiAgLyogXHU1NDdEXHU0RTJEICovXHJcbiAgc3VyZV9zaG90ID0gZmFsc2U7IC8vIFx1MzA3Mlx1MzA2M1x1MzA2MVx1MzA4NVx1MzA0NlxyXG4gIHdoaWZmZXIgPSBmYWxzZTsgLy8gXHUzMDQ4XHUzMDkzXHUzMDdFXHUzMDRGXHJcbiAgZm9jdXNfZW5lcmd5ID0gZmFsc2U7IC8vIFx1MzA0RFx1MzA0Mlx1MzA0NFx1MzA2MFx1MzA4MVxyXG5cclxuICAvKiBcdTg5OTZcdTg5OUEgKi9cclxuICBjcm9zc19leWVkID0gZmFsc2U7IC8vIFx1MzA3RVx1MzA2OVx1MzA4Rlx1MzA1N1xyXG5cclxuICAvKiBcdTMwREZcdTMwRTlcdTMwQUZcdTMwRUJcdTMwQTJcdTMwQTQgKi9cclxuICBtaXJhY2xlX2V5ZSA9IGZhbHNlOyAvLyBcdTMwREZcdTMwRTlcdTMwQUZcdTMwRUJcdTMwQTJcdTMwQTRcclxuXHJcbiAgLyogXHUzMDY3XHUzMDkzXHUzMDU4XHUzMDc1XHUzMDg2XHUzMDQ2ICovXHJcbiAgbWFnbmV0X3Jpc2UgPSBmYWxzZTsgLy8gXHUzMDY3XHUzMDkzXHUzMDU4XHUzMDc1XHUzMDg2XHUzMDQ2XHJcblxyXG4gIC8qIFx1MzA3Rlx1MzA4NFx1MzA3Nlx1MzA4QiAqL1xyXG4gIGV4cG9zZWQgPSBmYWxzZTsgLy8gXHUzMDdGXHUzMDg0XHUzMDc2XHUzMDhCXHJcblxyXG4gIC8vIFx1NzlGQlx1NTJENVx1OTAxRlx1NUVBNlxyXG4gIC8vIDA9XHUzMDY5XHUzMDkzXHUzMDVEXHUzMDRGLCAxPVx1OTAxQVx1NUUzOCwgMj1cdTMwNzBcdTMwNDRcdTMwNURcdTMwNEYsIDM9XHUzMDU1XHUzMDkzXHUzMDcwXHUzMDQ0XHUzMDVEXHUzMDRGLCA0PVx1MzA4OFx1MzA5M1x1MzA3MFx1MzA0NFx1MzA1RFx1MzA0RlxyXG4gIHNwZWVkID0gMTtcclxuXHJcbiAgLy8gXHUzMDVGXHUzMDRGXHUzMDhGXHUzMDQ4XHUzMDhCXHU1NkRFXHU2NTcwXHJcbiAgc3RvY2twaWxlID0gMDtcclxuXHJcbiAgLyogXHUzMDVEXHUzMDZFXHU0RUQ2XHU2MEFBXHUzMDQ0XHU3MkI2XHU2MTRCICovXHJcbiAgb3RoZXJfbmVnYXRpdmVfc3RhdHVzID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFx1NjcwOVx1NTJCOVx1NjAyN1x1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRiAoXHU3MkI2XHU2MTRCXHU3NTcwXHU1RTM4XHUzMEIwXHUzMEVCXHUzMEZDXHUzMEQ3LCBcdTc5RkJcdTUyRDVcdTkwMUZcdTVFQTZcdTMwRkJcdTMwNUZcdTMwNEZcdTMwOEZcdTMwNDhcdTMwOEJcdTMwNkVcdTRFMEJcdTk2NTBcdTRFMEFcdTk2NTApXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBpc1ZhbGlkKCkge1xyXG4gICAgaWYgKHRoaXMuc2xlZXAgKyB0aGlzLm5pZ2h0bWFyZSArIHRoaXMubmFwcGluZyA+IDEpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYnVybiArIHRoaXMucG9pc29uICsgdGhpcy5iYWRfcG9pc29uICsgdGhpcy5wYXJhbHlzaXMgKyB0aGlzLmlkZW50aWZ5aW5nID4gMSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5yZWZsZWN0ICsgdGhpcy5saWdodF9zY3JlZW4gKyB0aGlzLmx1Y2t5X2NoYW50ID4gMSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdXJlX3Nob3QgKyB0aGlzLndoaWZmZXIgKyB0aGlzLmZvY3VzX2VuZXJneSA+IDEpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3BlZWQgPCAwIHx8IHRoaXMuc3BlZWQgPiA0KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0b2NrcGlsZSA+IDMpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHUzMEMwXHUzMEYzXHUzMEI4XHUzMEU3XHUzMEYzXHU3NTFGXHU2MjEwXHU2MEM1XHU1ODMxXHJcbiAqL1xyXG5jbGFzcyBEdW5nZW9uR2VuZXJhdGlvbkluZm8ge1xyXG4gIGZpeGVkUm9vbUlkID0gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBDMFx1MzBGM1x1MzBCOFx1MzBFN1x1MzBGM1x1MzA2RVx1NzJCNlx1NjE0QlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIER1bmdlb25TdGF0ZSB7XHJcbiAgd2VhdGhlciA9IDA7IC8vIFx1NTkyOVx1NkMxN1xyXG4gIG11ZF9zcG9ydCA9IGZhbHNlOyAvLyBcdTMwNjlcdTMwOERcdTMwNDJcdTMwNURcdTMwNzNcclxuICB3YXRlcl9zcG9ydCA9IGZhbHNlOyAvLyBcdTMwN0ZcdTMwNUFcdTMwNDJcdTMwNURcdTMwNzNcclxuICBncmF2aXR5ID0gZmFsc2U7IC8vIFx1MzA1OFx1MzA4NVx1MzA0Nlx1MzA4QVx1MzA4N1x1MzA0RlxyXG4gIHBsdXMgPSBbZmFsc2UsIGZhbHNlXTsgLy8gXHUzMEQ3XHUzMEU5XHUzMEI5IChcdTY1NzVcdTUwNzQsIFx1MzBDMVx1MzBGQ1x1MzBFMFx1NTA3NClcclxuICBtaW51cyA9IFtmYWxzZSwgZmFsc2VdOyAvLyBcdTMwREVcdTMwQTRcdTMwQ0FcdTMwQjkgKFx1NjU3NVx1NTA3NCwgXHUzMEMxXHUzMEZDXHUzMEUwXHU1MDc0KVxyXG4gIGlxX2Rpc2FibGVkID0gZmFsc2U7IC8vIFx1MzA0Qlx1MzA1N1x1MzA1M1x1MzA1NVx1NzEyMVx1NTJCOVxyXG5cclxuICBnZW5JbmZvID0gbmV3IER1bmdlb25HZW5lcmF0aW9uSW5mbygpO1xyXG4gIGRhbWFnZUNhbGMgPSBuZXcgRGFtYWdlQ2FsY0RpYWcoKTtcclxuXHJcbiAgcm5nID0gbmV3IER1bmdlb25STkcoKTtcclxuICBvdGhlck1vbnN0ZXJzID0gbmV3IE1vbnN0ZXIoKTtcclxuXHJcbiAgLy8gXHU0RUU1XHU0RTBCXHUzMEFBXHUzMEVBXHUzMEI4XHUzMENBXHUzMEVCXHJcbiAgZGFtYWdlRGV0YWlsTG9nID0gbmV3IERhbWFnZURldGFpbExvZygpO1xyXG4gIHJlZ2lvbl9qcCA9IHRydWU7IC8vIFx1NjVFNVx1NjcyQ1x1NzI0OCAoXHUzMEFFXHUzMEU5XHUzMEM2XHUzMEEzXHUzMENBXHUzMEQ1XHUzMEE5XHUzMEVCXHUzMEUwXHU4OERDXHU2QjYzXHUzMEQwXHUzMEIwKVxyXG59XHJcblxyXG4vKipcclxuICogXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHUzMEM3XHUzMEZDXHUzMEJGIChwbWRza3ktZGVidWc6IGRhbWFnZV9kYXRhKVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERhbWFnZURhdGEge1xyXG4gIGRhbWFnZSA9IDA7IC8vIFx1NjI4MFx1MzA2RVx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFxyXG4gIGRhbWFnZU1lc3NhZ2UgPSAwO1xyXG4gIHR5cGVNYXRjaHVwID0gMjsgLy8gXHUzMEJGXHUzMEE0XHUzMEQ3XHU3NkY4XHU2MDI3XHU1MDI0ICgwPVx1NTJCOVx1Njc5Q1x1NzEyMVx1MzA0NCwgMT1cdTRFQ0FcdTRFMDBcdTMwNjQsIDI9XHU2NjZFXHU5MDFBLCAzPVx1NjI5Q1x1N0ZBNClcclxuICB0eXBlID0gMDsgLy8gXHU2MjgwXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHJcbiAgY2F0ZWdvcnkgPSAwOyAvLyBcdTYyODBcdTMwNkVcdTUyMDZcdTk4NUVcclxuXHJcbiAgLy8gXHU2MDI1XHU2MjQwXHUzMDZCXHU1RjUzXHUzMDVGXHUzMDYzXHUzMDVGXHUzMDRCXHJcbiAgY3JpdGljYWxIaXQgPSBmYWxzZTtcclxuICAvLyBcdTMwODJcdTMwODlcdTMwNDRcdTMwNzMsIFx1MzA3NVx1MzA4Nlx1MzA0NiwgXHUzMDY3XHUzMDkzXHUzMDU4XHUzMDc1XHUzMDg2XHUzMDQ2XHUzMDZCXHUzMDg4XHUzMDYzXHUzMDY2XHU3MTIxXHU1MkI5XHU1MzE2XHUzMDU3XHUzMDVGXHUzMDRCXHJcbiAgZnVsbFR5cGVJbW11bml0eSA9IGZhbHNlO1xyXG4gIC8vIFx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1MzA5Mlx1NzEyMVx1NTJCOVx1NTMxNlx1MzA1N1x1MzA1Rlx1MzA0QlxyXG4gIG5vRGFtYWdlID0gZmFsc2U7XHJcblxyXG4gIC8vIFx1NTZERVx1NUZBOVx1MzA1N1x1MzA1Rlx1MzA0QiAoXHUzMEM0XHUzMEZDXHUzMEVCXHU0RTBBXHUzMDY3XHUzMDZGXHU2NzJBXHU0RjdGXHU3NTI4KVxyXG4gIGhlYWxlZCA9IGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU4QTA4XHU3Qjk3XHUzMEM3XHUzMEZDXHUzMEJGIChwbWRza3ktZGVidWc6IGRhbWFnZV9jYWxjX2RpYWcpXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRGFtYWdlQ2FsY0RpYWcge1xyXG4gIG1vdmVUeXBlID0gMDsgLy8gXHU2MjgwXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHJcbiAgbW92ZUNhdGVnb3J5ID0gMDsgLy8gXHU2MjgwXHUzMDZFXHU1MjA2XHU5ODVFXHJcbiAgbW92ZUluZGl2VHlwZU1hdGNodXBzID0gWzAsIDBdOyAvLyBcdTMwQkZcdTMwQTRcdTMwRDdcdTc2RjhcdTYwMjdcclxuICBvZmZlbnNpdmVTdGF0U3RhZ2UgPSAxMDtcclxuICBkZWZlbnNpdmVTdGF0U3RhZ2UgPSAxMDtcclxuICBvZmZlbnNpdmVTdGF0ID0gMTtcclxuICBkZWZlbnNpdmVTdGF0ID0gMTtcclxuICBmbGFzaEZpcmVCb29zdCA9IDA7IC8vIFx1MzA4Mlx1MzA4OVx1MzA0NFx1MzA3M1x1NTZERVx1NjU3MCAoMFx1RkY1RTIpXHJcblxyXG4gIC8vIFx1OEEwOFx1N0I5N1x1NUY4Q1x1MzA2RVx1NjUzQlx1NjQ4M1x1MzBCOVx1MzBDNlx1MzBGQ1x1MzBCRlx1MzBCOVx1NTAyNFxyXG4gIG9mZmVuc2VDYWxjID0gMDtcclxuICAvLyBcdThBMDhcdTdCOTdcdTVGOENcdTMwNkVcdTk2MzJcdTVGQTFcdTMwQjlcdTMwQzZcdTMwRkNcdTMwQkZcdTMwQjlcdTUwMjRcclxuICBkZWZlbnNlQ2FsYyA9IDA7XHJcbiAgLy8gXHU2NTNCXHU2NDgzXHU1MDc0XHUzMDZFXHUzMEVDXHUzMEQ5XHUzMEVCXHJcbiAgYXR0YWNrZXJMZXZlbCA9IDA7XHJcbiAgLy8gQVRcclxuICBkYW1hZ2VDYWxjQXQgPSAwO1xyXG4gIC8vIERFRlxyXG4gIGRhbWFnZUNhbGNEZWYgPSAwO1xyXG4gIC8vIEZMVlxyXG4gIGRhbWFnZUNhbGNGbHYgPSAwO1xyXG4gIC8vIFx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1OEEwOFx1N0I5N1x1N0Q1MFx1Njc5Q1xyXG4gIGRhbWFnZUNhbGMgPSAwO1xyXG4gIGRhbWFnZUNhbGNCYXNlID0gMDtcclxuICBkYW1hZ2VDYWxjUmFuZG9tTXVsdFBjdCA9IDA7XHJcbiAgc3RhdGljRGFtYWdlTXVsdCA9IDA7XHJcbiAgLy8gXHU5MDUzXHU1MTc3XHUzMDZCXHUzMDg4XHUzMDhCXHU2NTNCXHU2NDgzXHUzMDZFXHU0RTBBXHU2NjA3XHU5MUNGXHJcbiAgaXRlbUF0a01vZGlmaWVyID0gMDtcclxuICAvLyBcdTkwNTNcdTUxNzdcdTMwNkJcdTMwODhcdTMwOEJcdTcyNzlcdTY1M0JcdTMwNkVcdTRFMEFcdTY2MDdcdTkxQ0ZcclxuICBpdGVtU3BBdGtNb2RpZmllciA9IDA7XHJcbiAgLy8gXHU3Mjc5XHU2MDI3XHUzMDZCXHUzMDg4XHUzMDhCXHU2NTNCXHU2NDgzXHU3Q0ZCXHUzMEU5XHUzMEYzXHUzMEFGXHUzMDZFXHU0RTBBXHU2NjA3XHU5MUNGXHJcbiAgYWJpbGl0eU9mZmVuc2VNb2RpZmllciA9IDA7XHJcbiAgLy8gXHU3Mjc5XHU2MDI3XHUzMDZCXHUzMDg4XHUzMDhCXHU5NjMyXHU1RkExXHU3Q0ZCXHUzMEU5XHUzMEYzXHUzMEFGXHUzMDZFXHU0RTBBXHU2NjA3XHU5MUNGXHJcbiAgYWJpbGl0eURlZmVuc2VNb2RpZmllciA9IDA7XHJcbiAgLy8gXHUzMDRCXHUzMDU3XHUzMDUzXHUzMDU1XHUzMDZCXHUzMDg4XHUzMDhCXHU2NTNCXHU2NDgzXHU3Q0ZCXHUzMEU5XHUzMEYzXHUzMEFGXHUzMDZFXHU0RTBBXHU2NjA3XHU5MUNGXHJcbiAgaXFTa2lsbE9mZmVuc2VNb2RpZmllciA9IDA7XHJcbiAgLy8gXHUzMDRCXHUzMDU3XHUzMDUzXHUzMDU1XHUzMDZCXHUzMDg4XHUzMDhCXHU5NjMyXHU1RkExXHU3Q0ZCXHUzMEU5XHUzMEYzXHUzMEFGXHUzMDZFXHU0RTBBXHU2NjA3XHU5MUNGXHJcbiAgaXFTa2lsbERlZmVuc2VNb2RpZmllciA9IDA7XHJcbiAgLy8gXHU5MDUzXHU1MTc3XHUzMDZCXHUzMDg4XHUzMDhCXHU5NjMyXHU1RkExXHUzMDZFXHU0RTBBXHU2NjA3XHU5MUNGXHJcbiAgaXRlbURlZk1vZGlmaWVyID0gMDtcclxuICAvLyBcdTkwNTNcdTUxNzdcdTMwNkJcdTMwODhcdTMwOEJcdTcyNzlcdTk2MzJcdTMwNkVcdTRFMEFcdTY2MDdcdTkxQ0ZcclxuICBpdGVtU3BEZWZNb2RpZmllciA9IDA7XHJcblxyXG4gIC8vIFx1MzBENFx1MzBGM1x1MzA2OFx1MzBFQ1x1MzBGM1x1MzBCQSwgXHUzMDZEXHUzMDg5XHUzMDQ0XHUzMDQ2XHUzMDYxXHUzMDY3XHU2MDI1XHU2MjQwXHU3Mzg3XHUzMDkyXHU0RTBBXHUzMDUyXHUzMDY2XHUzMDQ0XHUzMDhCXHUzMDRCXHJcbiAgc2NvcGVMZW5zT3JTaGFycHNob290ZXJBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAvLyBcdTMwNkRcdTMwODlcdTMwOEZcdTMwOENcdTMwQ0ZcdTMwQzFcdTMwREVcdTMwQURcdTMwNjdcdTYwMjVcdTYyNDBcdTczODdcdTMwOTJcdTRFMEFcdTMwNTJcdTMwNjZcdTMwNDRcdTMwOEJcdTMwNEJcclxuICBwYXRzeUJhbmRBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAvLyBcdTMwRUFcdTMwRDVcdTMwRUNcdTMwQUZcdTMwQkZcdTMwRkMsIFx1MzBCRlx1MzBBNFx1MzBFMFx1MzBCN1x1MzBGQ1x1MzBFQlx1MzBDOVx1MzA2N1x1NzI2OVx1NzQwNlx1NjI4MFx1MzA5Mlx1NTM0QVx1NkUxQlx1MzA1N1x1MzA2Nlx1MzA0NFx1MzA4Qlx1MzA0QlxyXG4gIGhhbGZQaHlzaWNhbERhbWFnZUFjdGl2YXRlZCA9IGZhbHNlO1xyXG4gIC8vIFx1MzA3Mlx1MzA0Qlx1MzA4QVx1MzA2RVx1MzA0Qlx1MzA3OSwgXHUzMDdGXHUzMDVBXHUzMDZFXHUzMDZGXHUzMDU0XHUzMDhEXHUzMDgyXHUzMDY3XHU3Mjc5XHU2QjhBXHU2MjgwXHUzMDkyXHU1MzRBXHU2RTFCXHUzMDU3XHUzMDY2XHUzMDQ0XHUzMDhCXHUzMDRCXHJcbiAgaGFsZlNwZWNpYWxEYW1hZ2VBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAvLyBcdTYwMjVcdTYyNDBcdTczODdcdTMwNENcdTY3MDBcdTU5MjdcdTMwN0VcdTMwNjdcdTRFMEFcdTY2MDdcdTMwNTdcdTMwNjZcdTMwNDRcdTMwOEJcdTMwNEJcclxuICBmb2N1c0VuZXJneUFjdGl2YXRlZCA9IGZhbHNlO1xyXG4gIC8vIFx1MzA0Mlx1MzA0NFx1MzA1N1x1MzA4N1x1MzA0Nlx1MzA3MFx1MzA2NFx1MzA1MFx1MzA5M1x1MzA2RVx1NTJCOVx1Njc5Q1x1MzA0Q1x1NzY3QVx1NTJENVx1MzA1N1x1MzA2Nlx1MzA0NFx1MzA4Qlx1MzA0QiAoXHU1RjMxXHU3MEI5XHU2NjQyXHU2MDI1XHU2MjQwNDAlKVxyXG4gIHR5cGVBZHZhbnRhZ2VNYXN0ZXJBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAvLyBcdTMwQ0VcdTMwRkNcdTMwREVcdTMwRUJcdTMwQkZcdTMwQTRcdTMwRDdcdTRFRTVcdTU5MTZcdTMwNkVcdTYyODBcdTMwNENcdTMwNEZcdTMwODJcdTMwOEFcdTMwNkVcdTVGNzFcdTk3RkZcdTMwOTJcdTUzRDdcdTMwNTFcdTMwNjZcdTMwNDRcdTMwOEJcdTMwNEJcclxuICBjbG91ZHlEcm9wQWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgLy8gXHU3MDhFLCBcdTZDMzRcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNkVcdTYyODBcdTMwNENcdTMwNDJcdTMwODFcdTMwNkVcdTVGNzFcdTk3RkZcdTMwOTJcdTUzRDdcdTMwNTFcdTMwNjZcdTMwNDRcdTMwOEJcdTMwNEJcclxuICByYWluTXVsdGlwbGllckFjdGl2YXRlZCA9IGZhbHNlO1xyXG4gIC8vIFx1NzA4RSwgXHU2QzM0XHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDZFXHU2MjgwXHUzMDRDXHUzMDcyXHUzMDU2XHUzMDU3XHUzMDRDXHUzMDY0XHUzMDg4XHUzMDQ0XHUzMDZFXHU1RjcxXHU5N0ZGXHUzMDkyXHU1M0Q3XHUzMDUxXHUzMDY2XHUzMDQ0XHUzMDhCXHUzMDRCXHJcbiAgc3VubnlNdWx0aXBsaWVyQWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgLy8gXHU3MDhFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDZFXHU2MjgwXHUzMDRDXHUzMDQyXHUzMDY0XHUzMDQ0XHUzMDU3XHUzMDdDXHUzMDQ2LCBcdTMwNUZcdTMwNDRcdTMwNkRcdTMwNjRcdTMwNkVcdTVGNzFcdTk3RkZcdTMwOTJcdTUzRDdcdTMwNTFcdTMwNjZcdTMwNDRcdTMwOEJcdTMwNEJcclxuICBmaXJlTW92ZUFiaWxpdHlEcm9wQWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgLy8gXHUzMDgyXHUzMDg5XHUzMDQ0XHUzMDczXHUzMDZFXHU1MkI5XHU2NzlDXHUzMDY3XHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHUzMDkyXHU3MTIxXHU1MkI5XHU1MzE2XHUzMDU3XHUzMDVGXHUzMDRCXHJcbiAgZmxhc2hGaXJlQWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgLy8gXHUzMDc1XHUzMDg2XHUzMDQ2XHUzMDZFXHU1MkI5XHU2NzlDXHUzMDY3XHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHUzMDkyXHU3MTIxXHU1MkI5XHU1MzE2XHUzMDU3XHUzMDVGXHUzMDRCXHJcbiAgbGV2aXRhdGVBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAvLyBcdTMwNTJcdTMwNERcdTMwOEFcdTMwODVcdTMwNDZcdTMwNkVcdTUyQjlcdTY3OUNcdTMwNjdcdTZDMzRcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNkVcdTYyODBcdTMwNENcdTVGMzdcdTUzMTZcdTMwNTVcdTMwOENcdTMwNUZcdTMwNEJcclxuICB0b3JyZW50Qm9vc3RBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAvLyBcdTMwNTdcdTMwOTNcdTMwOEFcdTMwODdcdTMwNEZcdTMwNkVcdTUyQjlcdTY3OUNcdTMwNjdcdTgzNDlcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNkVcdTYyODBcdTMwNENcdTVGMzdcdTUzMTZcdTMwNTVcdTMwOENcdTMwNUZcdTMwNEJcclxuICBvdmVyZ3Jvd0Jvb3N0QWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgLy8gXHUzMDgwXHUzMDU3XHUzMDZFXHUzMDU3XHUzMDg5XHUzMDVCXHUzMDZFXHU1MkI5XHU2NzlDXHUzMDY3XHU4NjZCXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDZFXHU2MjgwXHUzMDRDXHU1RjM3XHU1MzE2XHUzMDU1XHUzMDhDXHUzMDVGXHUzMDRCXHJcbiAgc3dhcm1Cb29zdEFjdGl2YXRlZCA9IGZhbHNlO1xyXG4gIC8vIFx1MzA4Mlx1MzA0Nlx1MzA0Qlx1MzA2RVx1NTJCOVx1Njc5Q1x1MzA2N1x1NzA4RVx1MzBCRlx1MzBBNFx1MzBEN1x1MzA2RVx1NjI4MFx1MzA0Q1x1NUYzN1x1NTMxNlx1MzA1NVx1MzA4Q1x1MzA1Rlx1MzA0QlxyXG4gIGZpcmVNb3ZlQWJpbGl0eUJvb3N0QWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgLy8gXHUzMDREXHUzMDgyXHUzMDYzXHUzMDVGXHUzMDdFXHUzMDZFXHU1MkI5XHU2NzlDXHUzMDRDXHU3NjdBXHU1MkQ1XHUzMDU3XHUzMDVGXHUzMDRCXHJcbiAgc2NyYXBweUFjdGl2YXRlZCA9IGZhbHNlO1xyXG4gIC8vIFx1MzA0RFx1MzA4N1x1MzA0Nlx1MzA0Nlx1MzA5M1x1MzA2RVx1NTJCOVx1Njc5Q1x1MzA0Q1x1NzY3QVx1NTJENVx1MzA1N1x1MzA1Rlx1MzA0QlxyXG4gIHN1cGVyTHVja0FjdGl2YXRlZCA9IGZhbHNlO1xyXG4gIC8vIFx1MzBCOVx1MzBDQVx1MzBBNFx1MzBEMVx1MzBGQ1x1MzA2RVx1NTJCOVx1Njc5Q1x1MzA0Q1x1NzY3QVx1NTJENVx1MzA1N1x1MzA1Rlx1MzA0QlxyXG4gIHNuaXBlckFjdGl2YXRlZCA9IGZhbHNlO1xyXG4gIC8vIFx1MzA2Nlx1MzA0RFx1MzA0QVx1MzA0Nlx1MzA4QVx1MzA4N1x1MzA0Rlx1MzA2RVx1NTJCOVx1Njc5Q1x1MzA0Q1x1NzY3QVx1NTJENVx1MzA1N1x1MzA1Rlx1MzA0QlxyXG4gIHN0YWJCb29zdEFjdGl2YXRlZCA9IGZhbHNlO1xyXG4gIC8vIFx1OTZGQlx1NkMxN1x1MzBCRlx1MzBBNFx1MzBEN1x1MzA2RVx1NjI4MFx1MzA0Q1x1MzA2OVx1MzA4RFx1MzA0Mlx1MzA1RFx1MzA3M1x1MzA2RVx1NUY3MVx1OTdGRlx1MzA5Mlx1NTNEN1x1MzA1MVx1MzA2Nlx1MzA0NFx1MzA4Qlx1MzA0QlxyXG4gIGVsZWN0cmljTW92ZURhbXBlbmVkID0gZmFsc2U7XHJcbiAgLy8gXHU3MDhFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDZFXHU2MjgwXHUzMDRDXHUzMDdGXHUzMDVBXHUzMDQyXHUzMDVEXHUzMDczXHUzMDZFXHU1RjcxXHU5N0ZGXHUzMDkyXHU1M0Q3XHUzMDUxXHUzMDY2XHUzMDQ0XHUzMDhCXHUzMDRCXHJcbiAgd2F0ZXJTcG9ydERyb3BBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAvLyBcdTMwNThcdTMwODVcdTMwNDZcdTMwNjdcdTMwOTNcdTMwNENcdTY3MDlcdTUyQjlcdTMwNEJcclxuICBjaGFyZ2VCb29zdEFjdGl2YXRlZCA9IGZhbHNlO1xyXG4gIC8vIFx1MzA3Rlx1MzA4NFx1MzA3Nlx1MzA4Qlx1NzJCNlx1NjE0Qlx1MzA2RVx1NTJCOVx1Njc5Q1x1MzA0Q1x1NjcwOVx1NTJCOVx1MzA0QlxyXG4gIGdob3N0SW1tdW5pdHlBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAvLyBcdTMwRURcdTMwQjFcdTMwQzNcdTMwQzhcdTMwNUFcdTMwNjRcdTMwNERcdTMwNkVcdTZFOUNcdTMwODFcdTRFMkRcdTMwNkJcdTUzRDdcdTMwNTFcdTMwNUZcdTcyNjlcdTc0MDZcdTYyODBcdTMwNkVcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdTMwNENcdThFRkRcdTZFMUJcdTMwNTVcdTMwOENcdTMwNUZcdTMwNEJcclxuICBza3VsbEJhc2hEZWZlbnNlQm9vc3RBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAvLyBcdTY0RUNcdTRGM0NcdTcxMjFcdTY1NzVcdTcyQjZcdTYxNEJcdTMwNkJcdTMwNkFcdTMwOEJcdTZFOUNcdTMwODFcdTYyODBcdTMwOTJcdTMwQURcdTMwRTNcdTMwRjNcdTMwQkJcdTMwRUJcdTMwNTdcdTMwNUZcdTMwNEJcclxuICB0d29UdXJuTW92ZUZvcmNlZE1pc3MgPSBmYWxzZTtcclxuICAvLyBcdTMwN0NcdTMwNDZcdTMwNEFcdTMwOTNcdTMwNkJcdTMwODhcdTMwNjNcdTMwNjZcdTYyODBcdTMwNENcdTU5MzFcdTY1NTdcdTMwNTdcdTMwNUZcdTMwNEJcclxuICBzb3VuZHByb29mQWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgZmlyc3RIaXRDaGVja0ZhaWxlZCA9IGZhbHNlO1xyXG4gIC8vIFx1MzA3Mlx1MzA4OVx1MzA0NFx1MzA1N1x1MzA5M1x1MzA2Qlx1MzA4OFx1MzA2M1x1MzA2Nlx1NjI4MFx1MzA0Q1x1NTkzMVx1NjU1N1x1MzA1N1x1MzA1Rlx1MzA0QlxyXG4gIGxpZ2h0bmluZ3JvZEFjdGl2YXRlZCA9IGZhbHNlO1xyXG4gIC8vIFx1MzA4OFx1MzA3M1x1MzA3Rlx1MzA1QVx1MzA2Qlx1MzA4OFx1MzA2M1x1MzA2Nlx1NjI4MFx1MzA0Q1x1NTkzMVx1NjU1N1x1MzA1N1x1MzA1Rlx1MzA0QlxyXG4gIHN0b3JtRHJhaW5BY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAvLyBcdTMwODZcdTMwODFcdTMwNEZcdTMwNDRcdTMwNENcdTU5MzFcdTY1NTdcdTMwNTdcdTMwNUZcdTMwNEJcclxuICBkcmVhbUVhdGVyRmFpbGVkID0gZmFsc2U7XHJcbiAgLy8gXHUzMDY4XHUzMDYzXHUzMDY2XHUzMDRBXHUzMDREXHUzMDRDXHU1OTMxXHU2NTU3XHUzMDU3XHUzMDVGXHUzMDRCXHJcbiAgbGFzdFJlc29ydEZhaWxlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5jbGFzcyBEdW5nZW9uUk5HIHtcclxuICAvKiogXHUzMDYxXHUzMDRCXHUzMDg5XHUzMDgyXHUzMDYxL1x1MzBFOFx1MzBBQ1x1MzBEMVx1MzBFRlx1MzBGQ1x1MzA5Mlx1NEY3Rlx1NzUyOCAqL1xyXG4gIGh1Z2VQdXJlUG93ZXIgPSBmYWxzZTtcclxuICAvKiogXHU1RjM3XHU1MjM2XHU3Njg0XHUzMDZCXHU2MDI1XHU2MjQwICovXHJcbiAgY3JpdGljYWxIaXQgPSBmYWxzZTtcclxuICAvKiogXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU0RTcxXHU2NTcwXHU4OERDXHU2QjYzICgwLjBcdUZGNUUxLjApICovXHJcbiAgdmFyaWFuY2VEaWFsID0gMDtcclxuXHJcbiAgLyoqIFx1NjAyNVx1NjI0MFx1NzM4NyAqL1xyXG4gIGNyaXRDaGFuY2UgPSAwO1xyXG4gIC8qKiBcdTMwODhcdTMwNjFcdTMwODBcdTMwNENcdTY3MDlcdTUyQjkgKi9cclxuICBmb3Jld2FybkFjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTU0N0RcdTRFMkQxICovXHJcbiAgaGl0Q2hhbmNlMSA9IDEyNTtcclxuICAvKiogXHU1NDdEXHU0RTJEMiAqL1xyXG4gIGhpdENoYW5jZTIgPSAxMjU7XHJcblxyXG4gIHJvbGxIdWdlUHVyZVBvd2VyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHVnZVB1cmVQb3dlcjtcclxuICB9XHJcbiAgcm9sbENyaXRpY2FsSGl0KGNyaXRDaGFuY2UpIHtcclxuICAgIHRoaXMuY3JpdENoYW5jZSA9IGNyaXRDaGFuY2U7XHJcbiAgICByZXR1cm4gdGhpcy5jcml0aWNhbEhpdDtcclxuICB9XHJcbiAgZ2V0Q29tcHV0ZWRDcml0Q2hhbmNlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JpdENoYW5jZTtcclxuICB9XHJcbiAgcm9sbERhbWFnZVZhcmlhbmNlKCkge1xyXG4gICAgbGV0IHNpbXVsYXRlZFJhbmRPdXRjb21lID0gTWF0aC5taW4oTWF0aC5tYXgoTWF0aC5yb3VuZCh0aGlzLnZhcmlhbmNlRGlhbCAqIDB4M2ZmZiksIDApLCAweDNmZmYpO1xyXG4gICAgcmV0dXJuIChzaW11bGF0ZWRSYW5kT3V0Y29tZSArIDB4ZTAwMCkgLyAweDEwMDAwO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBcdTMwODhcdTMwNjFcdTMwODAgKG1vY2spXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICByb2xsRm9yZXdhcm4oKSB7XHJcbiAgICB0aGlzLmZvcmV3YXJuQWN0aXZlID0gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgZm9yZXdhcm5XYXNSb2xsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3Jld2FybkFjdGl2ZTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogXHU2MjgwXHUzMDZFXHU1NDdEXHU0RTJEXHUzMDkyXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGIChtb2NrKVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoaXRDaGFuY2VcclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGFjY3VyYWN5MlxyXG4gICAqL1xyXG4gIHJvbGxIaXRDaGFuY2UoaGl0Q2hhbmNlLCBhY2N1cmFjeTIpIHtcclxuICAgIGlmIChhY2N1cmFjeTIpIHtcclxuICAgICAgdGhpcy5oaXRDaGFuY2UyID0gaGl0Q2hhbmNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oaXRDaGFuY2UxID0gaGl0Q2hhbmNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIGdldEhpdENoYW5jZTEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oaXRDaGFuY2UxO1xyXG4gIH1cclxuICBnZXRIaXRDaGFuY2UyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGl0Q2hhbmNlMjtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogXHU3NTFGXHUzMDZFXHU1NDdEXHU0RTJEXHU3Mzg3XHUzMDkyXHU1M0Q2XHU1Rjk3XHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBnZXRDb21iaW5lZEhpdENoYW5jZVJhdygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIE1hdGgubWluKHRoaXMuaGl0Q2hhbmNlMSA/PyAxMDAsIDEwMCkgKiBNYXRoLm1pbih0aGlzLmhpdENoYW5jZTIgPz8gMTAwLCAxMDApICogKHRoaXMuZm9yZXdhcm5BY3RpdmUgPyA4MCA6IDEwMClcclxuICAgICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFx1NTQ3RFx1NEUyRFx1NzM4N1x1MzA5Mlx1NTNENlx1NUY5N1xyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgZ2V0Q29tYmluZWRIaXRQcm9iYWJpbGl0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldENvbWJpbmVkSGl0Q2hhbmNlUmF3KCkgLyAxZTY7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFx1NTQ3RFx1NEUyRFx1NzM4N1x1MzA5MiVcdTMwNjdcdTUzRDZcdTVGOTdcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIGdldENvbWJpbmVkSGl0UGVyY2VudGFnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldENvbWJpbmVkSGl0Q2hhbmNlUmF3KCkgLyAxZTQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHU2MjgwXHU2OUNCXHU5MDIwXHU0RjUzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTW92ZSB7XHJcbiAgLyoqIFx1NjI4MElEICovXHJcbiAgaWQgPSAwO1xyXG4gIC8qKiBcdTRGRUVcdTZCNjNcdTUwMjQgKi9cclxuICBnaW5zZW5nID0gMDtcclxuICAvKiogUFAgKi9cclxuICBwcCA9IDA7XHJcbiAgLyoqIFx1OTAyM1x1N0Q5QVx1NTQ3RFx1NEUyRFx1NTZERVx1NjU3MCAqL1xyXG4gIHByaW9yU3VjY2Vzc2l2ZUhpdHMgPSAwO1xyXG4gIC8qKiBcdTY2NDJcdTk1QzdcdTMwNkVcdTVBMDFcdTUyOUJcdTMwNjdcdThBMDhcdTdCOTcgKi9cclxuICB0aW1lRGFya25lc3MgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogXHUzMEM3XHUzMEEzXHUzMEZDXHUzMEQ3XHUzMEIzXHUzMEQ0XHUzMEZDXHUzMDZFXHU0RjVDXHU2MjEwXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBjbG9uZSgpIHtcclxuICAgIGNvbnN0IGNvcHkgPSBuZXcgTW92ZSgpO1xyXG4gICAgT2JqZWN0LmFzc2lnbihjb3B5LCB0aGlzKTtcclxuICAgIHJldHVybiBjb3B5O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzA1N1x1MzA1Q1x1MzA5M1x1MzA2RVx1MzA4MVx1MzA1MFx1MzA3Rlx1NjlDQlx1OTAyMFx1NEY1M1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE5hdHVyYWxHaWZ0SW5mbyB7XHJcbiAgLyoqIFx1OTA1M1x1NTE3N0lEICovXHJcbiAgaXRlbUlkID0gMDtcclxuICAvKiogXHUzMEJGXHUzMEE0XHUzMEQ3ICovXHJcbiAgdHlwZUlkID0gMDtcclxuICAvKiogXHU4RkZEXHU1MkEwXHUzMDU1XHUzMDhDXHUzMDhCXHU1QTAxXHU1MjlCICovXHJcbiAgYmFzZVBvd2VyQm9vc3QgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihpdGVtSWQsIHR5cGVJZCwgYmFzZVBvd2VyQm9vc3QpIHtcclxuICAgIHRoaXMuaXRlbUlkID0gaXRlbUlkO1xyXG4gICAgdGhpcy50eXBlSWQgPSB0eXBlSWQ7XHJcbiAgICB0aGlzLmJhc2VQb3dlckJvb3N0ID0gYmFzZVBvd2VyQm9vc3Q7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHU4QTczXHU3RDMwXHU4QTE4XHU5MzMyXHU3NTI4IChvcmlnaW5hbClcclxuICovXHJcbmNsYXNzIERhbWFnZURldGFpbExvZyB7XHJcbiAgLyoqIFx1NjcwMFx1N0Q0Mlx1NzY4NFx1MzA2QVx1NjI4MFx1MzA2RVx1NUEwMVx1NTI5QiAqL1xyXG4gIGF0dGFja1Bvd2VyID0gMDtcclxuICAvKiogXHU2NzAwXHU3RDQyXHU3Njg0XHUzMDZBXHU2MjgwXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3ICovXHJcbiAgYXR0YWNrVHlwZSA9IGVvcy5UWVBFX05PTkU7XHJcblxyXG4gIC8qKiBcdTMwNzVcdTMwNTdcdTMwNEVcdTMwNkFcdTMwN0VcdTMwODJcdTMwOEFcdTc2N0FcdTUyRDUgKi9cclxuICBpc1dvbmRlckd1YXJkQWN0aXZlID0gZmFsc2U7XHJcbiAgLyoqIFx1MzA0NFx1MzA4RFx1MzA4MVx1MzA0Q1x1MzA2RFx1NzY3QVx1NTJENSAqL1xyXG4gIGlzVGludGVkTGVuc0FjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwQ0ZcdTMwRkNcdTMwQzlcdTMwRURcdTMwQzNcdTMwQUZcdTc2N0FcdTUyRDUgKi9cclxuICBpc1NvbGlkUm9ja0FjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwRDVcdTMwQTNcdTMwRUJcdTMwQkZcdTMwRkNcdTc2N0FcdTUyRDUgKi9cclxuICBpc0ZpbHRlckFjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwQkZcdTMwQTRcdTMwRTBcdTMwQjdcdTMwRkNcdTMwRUJcdTMwQzlcdTc2N0FcdTUyRDUgKi9cclxuICBpc1RpbWVTaGllbGRBY3RpdmUgPSBmYWxzZTtcclxuICAvKiogXHUzMEJGXHUzMEE0XHUzMEUwXHUzMEI3XHUzMEZDXHUzMEVCXHUzMEM5XHUzMEQwXHUzMEIwICovXHJcbiAgaXNUaW1lU2hpZWxkR2xpdGNoID0gZmFsc2U7XHJcbiAgLyoqIFx1MzBDNlx1MzBBRlx1MzBDQlx1MzBCN1x1MzBFM1x1MzBGM1x1NzY3QVx1NTJENSAqL1xyXG4gIGlzVGVjaG5pY2lhbkFjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwNDJcdTMwNjRcdTMwNDRcdTMwNTdcdTMwN0NcdTMwNDZcdTc2N0FcdTUyRDUgKi9cclxuICBpc1RoaWNrRmF0QWN0aXZlID0gZmFsc2U7XHJcbiAgLyoqIFx1MzA4Mlx1MzA4OVx1MzA0NFx1MzA3M1x1NzY3QVx1NTJENSAqL1xyXG4gIGlzRmxhc2hGaXJlQWN0aXZlID0gZmFsc2U7XHJcbiAgLyoqIFx1MzA1Rlx1MzA0NFx1MzA2RFx1MzA2NFx1NzY3QVx1NTJENSAqL1xyXG4gIGlzSGVhdHByb29mQWN0aXZlID0gZmFsc2U7XHJcbiAgLyoqIFx1MzA3NVx1MzA4Nlx1MzA0Nlx1NzY3QVx1NTJENSAqL1xyXG4gIGlzTGV2aXRhdGVBY3RpdmUgPSBmYWxzZTtcclxuICAvKiogXHUzMDUyXHUzMDREXHUzMDhBXHUzMDg1XHUzMDQ2XHU3NjdBXHU1MkQ1ICovXHJcbiAgaXNUb3JyZW50QWN0aXZlID0gZmFsc2U7XHJcbiAgLyoqIFx1MzA1N1x1MzA5M1x1MzA4QVx1MzA4N1x1MzA0Rlx1NzY3QVx1NTJENSAqL1xyXG4gIGlzT3Zlcmdyb3dBY3RpdmUgPSBmYWxzZTtcclxuICAvKiogXHUzMDgwXHUzMDU3XHUzMDZFXHUzMDU3XHUzMDg5XHUzMDVCXHU3NjdBXHU1MkQ1ICovXHJcbiAgaXNTd2FybUFjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwODJcdTMwNDZcdTMwNEJcdTc2N0FcdTUyRDUgKi9cclxuICBpc0JsYXplQWN0aXZlID0gZmFsc2U7XHJcbiAgLyoqIFx1MzA0Qlx1MzA5M1x1MzA1RFx1MzA0Nlx1MzA2Rlx1MzA2MFx1NzY3QVx1NTJENSAqL1xyXG4gIGlzRHJ5U2tpbkFjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwODRcdTMwNTFcdTMwNjlcdTMwNkVcdTUyQjlcdTY3OUNcdTc2N0FcdTUyRDUgKi9cclxuICBpc0J1cm5BY3RpdmUgPSBmYWxzZTtcclxuICAvKiogXHUzMDY2XHUzMDREXHUzMDRBXHUzMDQ2XHUzMDhBXHUzMDg3XHUzMDRGXHUzMEJGXHUzMEE0XHUzMEQ3XHU0RTAwXHU4MUY0ICovXHJcbiAgaXNBZGFwdGFiaWxpdHlTVEFCID0gZmFsc2U7XHJcbiAgLyoqIFx1OTAxQVx1NUUzOFx1MzBCRlx1MzBBNFx1MzBEN1x1NEUwMFx1ODFGNCAqL1xyXG4gIGlzU1RBQiA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwNzJcdTMwNTZcdTMwNTdcdTMwNENcdTMwNjRcdTMwODhcdTMwNDRcdTcwOEVcdTg4RENcdTZCNjMgKi9cclxuICBpc1N1bm55RmlyZUFjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwNzJcdTMwNTZcdTMwNTdcdTMwNENcdTMwNjRcdTMwODhcdTMwNDRcdTZDMzRcdTg4RENcdTZCNjMgKi9cclxuICBpc1N1bm55V2F0ZXJBY3RpdmUgPSBmYWxzZTtcclxuICAvKiogXHUzMDQyXHUzMDgxXHU3MDhFXHU4OERDXHU2QjYzICovXHJcbiAgaXNSYWlueUZpcmVBY3RpdmUgPSBmYWxzZTtcclxuICAvKiogXHUzMDQyXHUzMDgxXHU2QzM0XHU4OERDXHU2QjYzICovXHJcbiAgaXNSYWlueVdhdGVyQWN0aXZlID0gZmFsc2U7XHJcbiAgLyoqIFx1MzA0Rlx1MzA4Mlx1MzA4QVx1ODhEQ1x1NkI2MyAqL1xyXG4gIGlzQ2xvdWR5QWN0aXZlID0gZmFsc2U7XHJcbiAgLyoqIFx1MzA0RFx1MzA4QVx1ODhEQ1x1NkI2MyAqL1xyXG4gIGlzRm9nQWN0aXZlID0gZmFsc2U7XHJcbiAgLyoqIFx1MzA2OVx1MzA4RFx1MzA0Mlx1MzA1RFx1MzA3M1x1ODhEQ1x1NkI2MyAqL1xyXG4gIGlzTXVkU3BvcnRBY3RpdmUgPSBmYWxzZTtcclxuICAvKiogXHUzMDdGXHUzMDVBXHUzMDQyXHUzMDVEXHUzMDczXHU4OERDXHU2QjYzICovXHJcbiAgaXNXYXRlclNwb3J0QWN0aXZlID0gZmFsc2U7XHJcbiAgLyoqIFx1MzA1OFx1MzA4NVx1MzA0Nlx1MzA2N1x1MzA5M1x1ODhEQ1x1NkI2MyAqL1xyXG4gIGlzQ2hhcmdlQWN0aXZlID0gZmFsc2U7XHJcblxyXG4gIC8vIGNhbGNEYW1hZ2VcclxuICAvKiogXHUzMDU1XHUzMDREXHUzMDY5XHUzMDhBXHU3NjdBXHU1MkQ1ICovXHJcbiAgaXNNZUZpcnN0QWN0aXZlID0gZmFsc2U7XHJcbiAgLyoqIFx1MzA1OVx1MzA2Nlx1MzA3Rlx1NzY3QVx1NTJENSAqL1xyXG4gIGlzUmVja2xlc3NBY3RpdmUgPSBmYWxzZTtcclxuICAvKiogXHUzMDY2XHUzMDY0XHUzMDZFXHUzMDUzXHUzMDc2XHUzMDU3XHU3NjdBXHU1MkQ1ICovXHJcbiAgaXNJcm9uRmlzdEFjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwQ0VcdTMwRkNcdTMwREVcdTMwRUJcdTMwQjlcdTMwQURcdTMwRjNcdTc2N0FcdTUyRDUgKi9cclxuICBpc05vcm1hbGl6ZUFjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwNkFcdTMwNEJcdTMwN0VcdTMwNEZcdTMwNDZcdTMwNzVcdTMwNEZcdTcyQjZcdTYxNEIgKi9cclxuICBpc0h1bmdyeVBhbEFjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwNTRcdTMwNDZcdTMwOEZcdTMwOTNcdTc2N0FcdTUyRDUgKi9cclxuICBpc1Bvd2VyUGl0Y2hlckFjdGl2ZSA9IGZhbHNlO1xyXG4gIC8qKiBcdTMwQThcdTMwQTJcdTMwRkNcdTMwRDZcdTMwRUNcdTMwRkNcdTMwQzlcdTc2N0FcdTUyRDUgKi9cclxuICBpc0FpckJsYWRlQWN0aXZlID0gZmFsc2U7XHJcblxyXG4gIC8qKiBcdTU2RkFcdTVCOUFcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjggKi9cclxuICBpc0ZpeGVkRGFtYWdlID0gZmFsc2U7XHJcblxyXG4gIC8vIHNpbXVsYXRlRGFtYWdlQ2FsY1xyXG4gIGRhbWFnZU11bHQgPSAxO1xyXG59XHJcbiIsICIvKlxyXG4gIFRoaXMgY29kZSBpbmNsdWRlcyBwb3J0aW9ucyBiYXNlZCBvbiBkYW1hZ2UtZW9zIGJ5IFVzZXJuYW1lRm9kZGVyXHJcbiAgaHR0cHM6Ly9naXRodWIuY29tL1VzZXJuYW1lRm9kZGVyL2RhbWFnZS1lb3NcclxuXHJcbiAgT3JpZ2luYWwgY29kZSBwb3J0aW9uczpcclxuICAtIE1JVCBMaWNlbnNlIChjKSAyMDIzIFVzZXJuYW1lRm9kZGVyXHJcblxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBPcmlnaW5hbCBMaWNlbnNlOlxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBNSVQgTGljZW5zZVxyXG5cclxuICBDb3B5cmlnaHQgKGMpIDIwMjMgVXNlcm5hbWVGb2RkZXJcclxuXHJcbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG4gIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG4gIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG4gIFNPRlRXQVJFLlxyXG4qL1xyXG5cclxuaW1wb3J0ICogYXMgZW9zIGZyb20gJy4vY29uc3QuanMnO1xyXG5pbXBvcnQgeyBOYXR1cmFsR2lmdEluZm8gfSBmcm9tICcuL3N0cnVjdHVyZS5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ09OU1RfMF8yNSA9IDB4NDAgLyAyNTY7XHJcbmV4cG9ydCBjb25zdCBDT05TVF8wXzUwID0gMHg4MCAvIDI1NjtcclxuZXhwb3J0IGNvbnN0IENPTlNUXzBfNjAgPSAweDk5IC8gMjU2O1xyXG5leHBvcnQgY29uc3QgQ09OU1RfMF83MCA9IDB4YjUgLyAyNTY7XHJcbmV4cG9ydCBjb25zdCBDT05TVF8wXzc1ID0gMHhjMCAvIDI1NjtcclxuZXhwb3J0IGNvbnN0IENPTlNUXzBfODAgPSAweGNjIC8gMjU2O1xyXG5leHBvcnQgY29uc3QgQ09OU1RfMV8yMCA9IDEgKyAweDMzIC8gMjU2O1xyXG5leHBvcnQgY29uc3QgQ09OU1RfMV8yNSA9IDEgKyAweDQwIC8gMjU2O1xyXG5leHBvcnQgY29uc3QgQ09OU1RfMV8zMyA9IDEgKyAweDU0IC8gMjU2O1xyXG5leHBvcnQgY29uc3QgQ09OU1RfMV80MCA9IDEgKyAweDY2IC8gMjU2O1xyXG5leHBvcnQgY29uc3QgQ09OU1RfMV81MCA9IDEgKyAweDgwIC8gMjU2O1xyXG5leHBvcnQgY29uc3QgQ09OU1RfMV83MCA9IDEgKyAweGIzIC8gMjU2O1xyXG5leHBvcnQgY29uc3QgQ09OU1RfTkVHMF81ID0gLTEgKyAweDgwIC8gMjU2O1xyXG5leHBvcnQgY29uc3QgQ09OU1RfMTUzX0RJVl8yNTYgPSAxNTMgLyAyNTY7XHJcbmV4cG9ydCBjb25zdCBDT05TVF8xX0RJVl9TUVJUMiA9IDB4YjUgLyAyNTY7XHJcbmV4cG9ydCBjb25zdCBDT05TVF84NV9ESVZfNjQgPSAxICsgMHg1NCAvIDI1NjtcclxuXHJcbi8vIFx1ODkwN1x1NTQwOFx1MzA2RVx1NzZGOFx1NjAyN1x1NTAwRFx1NzM4N1x1NTAyNFxyXG5leHBvcnQgY29uc3QgVFlQRV9NQVRDSFVQX0NPTUJJTkFUT1JfVEFCTEUgPSBbXHJcbiAgW2Vvcy5NQVRDSFVQX0lNTVVORSwgZW9zLk1BVENIVVBfSU1NVU5FLCBlb3MuTUFUQ0hVUF9JTU1VTkUsIGVvcy5NQVRDSFVQX05PVF9WRVJZX0VGRkVDVElWRV0sXHJcbiAgW2Vvcy5NQVRDSFVQX0lNTVVORSwgZW9zLk1BVENIVVBfTk9UX1ZFUllfRUZGRUNUSVZFLCBlb3MuTUFUQ0hVUF9OT1RfVkVSWV9FRkZFQ1RJVkUsIGVvcy5NQVRDSFVQX05FVVRSQUxdLFxyXG4gIFtlb3MuTUFUQ0hVUF9JTU1VTkUsIGVvcy5NQVRDSFVQX05PVF9WRVJZX0VGRkVDVElWRSwgZW9zLk1BVENIVVBfTkVVVFJBTCwgZW9zLk1BVENIVVBfU1VQRVJfRUZGRUNUSVZFXSxcclxuICBbZW9zLk1BVENIVVBfTk9UX1ZFUllfRUZGRUNUSVZFLCBlb3MuTUFUQ0hVUF9ORVVUUkFMLCBlb3MuTUFUQ0hVUF9TVVBFUl9FRkZFQ1RJVkUsIGVvcy5NQVRDSFVQX1NVUEVSX0VGRkVDVElWRV0sXHJcbl07XHJcblxyXG4vLyBcdTc2RjhcdTYwMjdcdTUwMERcdTczODdcclxuZXhwb3J0IGNvbnN0IE1BVENIVVBfSU1NVU5FID0gQ09OU1RfMF81MDsgLy8gXHU3MTIxXHU1MkI5XHJcbmV4cG9ydCBjb25zdCBNQVRDSFVQX05PVFZFUlkgPSBDT05TVF8wXzcwOyAvLyBcdTRFQ0FcdTRFMDBcdTMwNjRcclxuZXhwb3J0IGNvbnN0IE1BVENIVVBfTkVVVFJBTCA9IDE7IC8vIFx1N0I0OVx1NTAwRFxyXG5leHBvcnQgY29uc3QgTUFUQ0hVUF9TVVBFUiA9IENPTlNUXzFfNDA7IC8vIFx1NjI5Q1x1N0ZBNFxyXG5cclxuLy8gXHU3NkY4XHU2MDI3XHU1MDBEXHU3Mzg3IChcdTMwRTBcdTMwRTlcdTMwNjNcdTMwNTEpXHJcbmV4cG9ydCBjb25zdCBNQVRDSFVQX0lNTVVORV9FUlJBVElDID0gQ09OU1RfMF8yNTtcclxuZXhwb3J0IGNvbnN0IE1BVENIVVBfTk9UVkVSWV9FUlJBVElDID0gQ09OU1RfMF81MDtcclxuZXhwb3J0IGNvbnN0IE1BVENIVVBfTkVVVFJBTF9FUlJBVElDID0gMTtcclxuZXhwb3J0IGNvbnN0IE1BVENIVVBfU1VQRVJfRVJSQVRJQyA9IENPTlNUXzFfNzA7XHJcblxyXG4vLyBcdTcyNzlcdTVCOUFcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcdTMwOTJcdTcxMjFcdTUyQjlcdTUzMTZcdTMwNTlcdTMwOEJcdTVDMDJcdTc1MjhcdTkwNTNcdTUxNzdcdTUyQjlcdTY3OUNJRFxyXG5leHBvcnQgY29uc3QgVFlQRV9EQU1BR0VfTkVHQVRJTkdfRVhDTFVTSVZFX0lURU1fRUZGRUNUUyA9IFtcclxuICAvLyBcdTcxMjFcdTUyQjlcclxuICB7IHR5cGU6IGVvcy5UWVBFX0ZJUkUsIGVmZmVjdDogMHg2NiB9LFxyXG4gIHsgdHlwZTogZW9zLlRZUEVfV0FURVIsIGVmZmVjdDogMHg2NyB9LFxyXG4gIHsgdHlwZTogZW9zLlRZUEVfR1JBU1MsIGVmZmVjdDogMHg2OCB9LFxyXG4gIHsgdHlwZTogZW9zLlRZUEVfRUxFQ1RSSUMsIGVmZmVjdDogMHg2OSB9LFxyXG4gIHsgdHlwZTogZW9zLlRZUEVfRklHSFRJTkcsIGVmZmVjdDogMHg2YSB9LFxyXG4gIHsgdHlwZTogZW9zLlRZUEVfR1JPVU5ELCBlZmZlY3Q6IDB4NmIgfSxcclxuICB7IHR5cGU6IGVvcy5UWVBFX0ZMWUlORywgZWZmZWN0OiAweDZjIH0sXHJcbiAgeyB0eXBlOiBlb3MuVFlQRV9QU1lDSElDLCBlZmZlY3Q6IDB4NmQgfSxcclxuICB7IHR5cGU6IGVvcy5UWVBFX0dIT1NULCBlZmZlY3Q6IDB4NmUgfSxcclxuICB7IHR5cGU6IGVvcy5UWVBFX0RSQUdPTiwgZWZmZWN0OiAweDZmIH0sXHJcbiAgeyB0eXBlOiBlb3MuVFlQRV9EQVJLLCBlZmZlY3Q6IDB4NzAgfSxcclxuICB7IHR5cGU6IGVvcy5UWVBFX1NURUVMLCBlZmZlY3Q6IDB4NzEgfSxcclxuXHJcbiAgLy8gXHU1NDM4XHU1M0NFXHJcbiAgeyB0eXBlOiBlb3MuVFlQRV9GSVJFLCBlZmZlY3Q6IDB4NzIgfSxcclxuICB7IHR5cGU6IGVvcy5UWVBFX1dBVEVSLCBlZmZlY3Q6IDB4NzMgfSxcclxuICB7IHR5cGU6IGVvcy5UWVBFX0dSQVNTLCBlZmZlY3Q6IDB4NzQgfSxcclxuICB7IHR5cGU6IGVvcy5UWVBFX0VMRUNUUklDLCBlZmZlY3Q6IDB4NzUgfSxcclxuICB7IHR5cGU6IGVvcy5UWVBFX0lDRSwgZWZmZWN0OiAweDc2IH0sXHJcbiAgeyB0eXBlOiBlb3MuVFlQRV9GSUdIVElORywgZWZmZWN0OiAweDc3IH0sXHJcbiAgeyB0eXBlOiBlb3MuVFlQRV9HUk9VTkQsIGVmZmVjdDogMHg3OCB9LFxyXG4gIHsgdHlwZTogZW9zLlRZUEVfRkxZSU5HLCBlZmZlY3Q6IDB4NzkgfSxcclxuICB7IHR5cGU6IGVvcy5UWVBFX1BTWUNISUMsIGVmZmVjdDogMHg3YSB9LFxyXG4gIHsgdHlwZTogZW9zLlRZUEVfQlVHLCBlZmZlY3Q6IDB4N2IgfSxcclxuICB7IHR5cGU6IGVvcy5UWVBFX1JPQ0ssIGVmZmVjdDogMHg3YyB9LFxyXG4gIHsgdHlwZTogZW9zLlRZUEVfR0hPU1QsIGVmZmVjdDogMHg3ZCB9LFxyXG4gIHsgdHlwZTogZW9zLlRZUEVfRFJBR09OLCBlZmZlY3Q6IDB4N2UgfSxcclxuICB7IHR5cGU6IGVvcy5UWVBFX0RBUkssIGVmZmVjdDogMHg3ZiB9LFxyXG4gIHsgdHlwZTogZW9zLlRZUEVfU1RFRUwsIGVmZmVjdDogMHg4MCB9LFxyXG5cclxuICB7IHR5cGU6IGVvcy5UWVBFX05PTkUsIGVmZmVjdDogMHg4MSB9LFxyXG5dO1xyXG5cclxuLy8gXHU1NkRFXHU5MDdGXHU3Mzg3XHUzMDRDXHU0RTBBXHU2NjA3XHUzMDU5XHUzMDhCXHU1QzAyXHU3NTI4XHU5MDUzXHU1MTc3XHU1MkI5XHU2NzlDSURcclxuZXhwb3J0IGNvbnN0IEVYQ0xfSVRFTV9FRkZFQ1RTX0VWQVNJT05fQk9PU1QgPSBbMHgzZCwgMHgzZSwgMHgzZiwgMHg0MCwgMHg0MSwgMHg0MiwgMHg0MywgMHgwMF07XHJcblxyXG4vLyBcdTMwNDJcdTMwNkFcdTMwOTJcdTMwN0JcdTMwOEJcdTUwMERcdTczODdcclxuZXhwb3J0IGNvbnN0IERJR19EQU1BR0VfTVVMVElQTElFUiA9IDI7XHJcbi8vIFx1MzA0Qlx1MzA3RVx1MzA0NFx1MzA1Rlx1MzA2MVx1NTAwRFx1NzM4N1xyXG5leHBvcnQgY29uc3QgUkFaT1JfV0lORF9EQU1BR0VfTVVMVElQTElFUiA9IDI7XHJcbi8vIFx1MzA0Qlx1MzA4OVx1MzA1Mlx1MzA5M1x1MzA0RFx1NTAwRFx1NzM4N1xyXG5leHBvcnQgY29uc3QgRkFDQURFX0RBTUFHRV9NVUxUSVBMSUVSID0gMjtcclxuLy8gXHUzMDREXHUzMDQyXHUzMDQ0XHUzMEQxXHUzMEYzXHUzMEMxXHU1MDBEXHU3Mzg3XHJcbmV4cG9ydCBjb25zdCBGT0NVU19QVU5DSF9EQU1BR0VfTVVMVElQTElFUiA9IDI7XHJcbi8vIFx1MzBCNFx1MzBDM1x1MzBDOVx1MzBEMFx1MzBGQ1x1MzBDOVx1NTAwRFx1NzM4N1xyXG5leHBvcnQgY29uc3QgU0tZX0FUVEFDS19EQU1BR0VfTVVMVElQTElFUiA9IDI7XHJcbi8vIFx1MzBCRFx1MzBGQ1x1MzBFOVx1MzBGQ1x1MzBEM1x1MzBGQ1x1MzBFMFx1NTAwRFx1NzM4N1xyXG5leHBvcnQgY29uc3QgU09MQVJCRUFNX0RBTUFHRV9NVUxUSVBMSUVSID0gMjtcclxuLy8gXHUzMDVEXHUzMDg5XHUzMDkyXHUzMDY4XHUzMDc2XHU1MDBEXHU3Mzg3XHJcbmV4cG9ydCBjb25zdCBGTFlfREFNQUdFX01VTFRJUExJRVIgPSAyO1xyXG4vLyBcdTMwQzBcdTMwQTRcdTMwRDNcdTMwRjNcdTMwQjBcdTUwMERcdTczODdcclxuZXhwb3J0IGNvbnN0IERJVkVfREFNQUdFX01VTFRJUExJRVIgPSAyO1xyXG4vLyBcdTMwNjhcdTMwNzNcdTMwNkZcdTMwNkRcdTMwOEJcdTUwMERcdTczODdcclxuZXhwb3J0IGNvbnN0IEJPVU5DRV9EQU1BR0VfTVVMVElQTElFUiA9IDI7XHJcbi8vIFx1MzBFRFx1MzBCMVx1MzBDM1x1MzBDOFx1MzA1QVx1MzA2NFx1MzA0RFx1NTAwRFx1NzM4N1xyXG5leHBvcnQgY29uc3QgU0tVTExfQkFTSF9EQU1BR0VfTVVMVElQTElFUiA9IDI7XHJcbi8vIFx1MzBCN1x1MzBFM1x1MzBDOVx1MzBGQ1x1MzBDMFx1MzBBNFx1MzBENlx1NTAwRFx1NzM4N1xyXG5leHBvcnQgY29uc3QgU0hBRE9XX0ZPUkNFX0RBTUFHRV9NVUxUSVBMSUVSID0gMjtcclxuLy8gXHUzMDUzXHUzMDhEXHUzMDRDXHUzMDhCXHU1MDBEXHU3Mzg3XHJcbmV4cG9ydCBjb25zdCBST0xMT1VUX0RBTUFHRV9NVUxUX1RBQkxFID0gW1xyXG4gIDEsXHJcbiAgMSArIDB4MTkgLyAyNTYsIC8vIDEuMTBcclxuICBDT05TVF8xXzIwLFxyXG4gIDEgKyAweDRjIC8gMjU2LCAvLyAxLjMwXHJcbiAgQ09OU1RfMV80MCxcclxuICBDT05TVF8xXzUwLFxyXG4gIDEgKyAweDk5IC8gMjU2LCAvLyAxLjYwXHJcbiAgQ09OU1RfMV83MCxcclxuICAxICsgMHhjYyAvIDI1NiwgLy8gMS44MFxyXG4gIDEgKyAweGU2IC8gMjU2LCAvLyAxLjkwXHJcbl07XHJcbi8vIFx1MzA0RFx1MzA1N1x1MzA0Qlx1MzA0NFx1MzA1Qlx1MzA0NFx1NTAwRFx1NzM4N1xyXG5leHBvcnQgY29uc3QgUkVWRVJTQUxfREFNQUdFX01VTFRfVEFCTEUgPSBbMiwgQ09OU1RfMV81MCwgMSwgMV07XHJcbi8vIFx1MzA3Rlx1MzA1QVx1MzA0Mlx1MzA1RFx1MzA3M1x1NTAwRFx1NzM4N1xyXG5leHBvcnQgY29uc3QgV0FURVJfU1BPVVRfREFNQUdFX01VTFRfVEFCTEUgPSBbXHJcbiAgMHgxOSAvIDI1NiwgLy8gMC4xMFxyXG4gIDB4MzMgLyAyNTYsIC8vIDAuMjBcclxuICBDT05TVF8wXzUwLFxyXG4gIDEsXHJcbl07XHJcbi8vIFx1MzA3NVx1MzA5M1x1MzA0Qlx1NTAwRFx1NzM4N1xyXG5leHBvcnQgY29uc3QgRVJVUFRJT05fREFNQUdFX01VTFRfVEFCTEUgPSBbXHJcbiAgMHgxOSAvIDI1NiwgLy8gMC4xMFxyXG4gIDB4MzMgLyAyNTYsIC8vIDAuMjBcclxuICBDT05TVF8wXzUwLFxyXG4gIDEsXHJcbl07XHJcbi8vIFx1MzA1N1x1MzA3Q1x1MzA4QVx1MzA2OFx1MzA4Qlx1NTAwRFx1NzM4N1xyXG5leHBvcnQgY29uc3QgV1JJTkdfT1VUX0RBTUFHRV9NVUxUX1RBQkxFID0gW1xyXG4gIDB4MTkgLyAyNTYsIC8vIDAuMTBcclxuICAweDMzIC8gMjU2LCAvLyAwLjIwXHJcbiAgQ09OU1RfMF81MCxcclxuICAxLFxyXG5dO1xyXG4vLyBcdTMwNjhcdTMwNjNcdTMwNjZcdTMwNEFcdTMwNERcdTUwMERcdTczODdcclxuZXhwb3J0IGNvbnN0IExBU1RfUkVTT1JUX0RBTUFHRV9NVUxUX1RBQkxFID0gW1xyXG4gIDEsXHJcbiAgQ09OU1RfMF81MCxcclxuICAyLFxyXG4gIDIsIC8vIFx1NjcyQVx1NEY3Rlx1NzUyOFxyXG5dO1xyXG4vLyBcdTMwQTZcdTMwQTdcdTMwQjZcdTMwRkNcdTMwRENcdTMwRkNcdTMwRUJcdTUwMERcdTczODdcclxuZXhwb3J0IGNvbnN0IFdFQVRIRVJfQkFMTF9EQU1BR0VfTVVMVF9UQUJMRSA9IFtcclxuICAxLCAvLyBcdTMwNkZcdTMwOENcclxuICAyLCAvLyBcdTMwNzJcdTMwNTZcdTMwNTdcdTMwNENcdTMwNjRcdTMwODhcdTMwNDQgKDJcdTUwMEQpXHJcbiAgMiwgLy8gXHUzMDU5XHUzMDZBXHUzMDQyXHUzMDg5XHUzMDU3ICgyXHU1MDBEKVxyXG4gIDEsIC8vIFx1MzA0Rlx1MzA4Mlx1MzA4QVxyXG4gIDIsIC8vIFx1MzA0Mlx1MzA4MSAoMlx1NTAwRClcclxuICAyLCAvLyBcdTMwNDJcdTMwODlcdTMwOEMgKDJcdTUwMEQpXHJcbiAgMSwgLy8gXHUzMDREXHUzMDhBXHJcbiAgMiwgLy8gXHUzMDg2XHUzMDREICgyXHU1MDBEKVxyXG5dO1xyXG4vLyBcdTMwQTZcdTMwQTdcdTMwQjZcdTMwRkNcdTMwRENcdTMwRkNcdTMwRUJcdTMwQkZcdTMwQTRcdTMwRDdcclxuZXhwb3J0IGNvbnN0IFdFQVRIRVJfQkFMTF9UWVBFX1RBQkxFID0gW1xyXG4gIDEsIC8vIFx1MzA2Rlx1MzA4QyAtPiBcdTMwQ0VcdTMwRkNcdTMwREVcdTMwRUJcclxuICAyLCAvLyBcdTMwNzJcdTMwNTZcdTMwNTdcdTMwNENcdTMwNjRcdTMwODhcdTMwNDQgLT4gXHUzMDdCXHUzMDZFXHUzMDRBXHJcbiAgMTMsIC8vIFx1MzA1OVx1MzA2QVx1MzA0Mlx1MzA4OVx1MzA1NyAtPiBcdTMwNDRcdTMwOEZcclxuICAxLCAvLyBcdTMwNEZcdTMwODJcdTMwOEEgLT4gXHUzMENFXHUzMEZDXHUzMERFXHUzMEVCXHJcbiAgMywgLy8gXHUzMDQyXHUzMDgxIC0+IFx1MzA3Rlx1MzA1QVxyXG4gIDYsIC8vIFx1MzA0Mlx1MzA4OVx1MzA4QyAtPiBcdTMwNTNcdTMwNEFcdTMwOEFcclxuICAxLCAvLyBcdTMwNERcdTMwOEEgLT4gXHUzMENFXHUzMEZDXHUzMERFXHUzMEVCXHJcbiAgNiwgLy8gXHUzMDg2XHUzMDREIC0+IFx1MzA1M1x1MzA0QVx1MzA4QVxyXG5dO1xyXG5cclxuLy8gXHU2NTNCXHU2NDgzXHUzMEZCXHU3Mjc5XHU2NTNCXHUzMEU5XHUzMEYzXHUzMEFGXHU1MDBEXHU3Mzg3XHJcbmV4cG9ydCBjb25zdCBPRkZFTlNJVkVfU1RBVF9TVEFHRV9NVUxUSVBMSUVSUyA9IFtcclxuICAwICsgMHg4MCAvIDI1NiwgLy8gMC41XHJcbiAgMCArIDB4ODUgLyAyNTYsIC8vIDAuNTJcclxuICAwICsgMHg4YSAvIDI1NiwgLy8gMC41NFxyXG4gIDAgKyAweDhmIC8gMjU2LCAvLyAwLjU2XHJcbiAgMCArIDB4OTQgLyAyNTYsIC8vIDAuNThcclxuICAwICsgMHg5OSAvIDI1NiwgLy8gMC42XHJcbiAgMCArIDB4YTEgLyAyNTYsIC8vIDAuNjNcclxuICAwICsgMHhhYiAvIDI1NiwgLy8gMC42N1xyXG4gIDAgKyAweGIzIC8gMjU2LCAvLyAwLjdcclxuICAwICsgMHhjYyAvIDI1NiwgLy8gMC44XHJcbiAgMSArIDB4MDAgLyAyNTYsIC8vIDFcclxuICAxICsgMHgzMyAvIDI1NiwgLy8gMS4yXHJcbiAgMSArIDB4NGMgLyAyNTYsIC8vIDEuM1xyXG4gIDEgKyAweDY2IC8gMjU2LCAvLyAxLjRcclxuICAxICsgMHg4MCAvIDI1NiwgLy8gMS41XHJcbiAgMSArIDB4OTkgLyAyNTYsIC8vIDEuNlxyXG4gIDEgKyAweGE2IC8gMjU2LCAvLyAxLjY0XHJcbiAgMSArIDB4YjMgLyAyNTYsIC8vIDEuN1xyXG4gIDEgKyAweGMwIC8gMjU2LCAvLyAxLjc1XHJcbiAgMSArIDB4Y2MgLyAyNTYsIC8vIDEuOFxyXG4gIDEgKyAweGQ5IC8gMjU2LCAvLyAxLjg1XHJcbl07XHJcbi8vIFx1OTYzMlx1NUZBMVx1MzBGQlx1NzI3OVx1OTYzMlx1MzBFOVx1MzBGM1x1MzBBRlx1NTAwRFx1NzM4N1xyXG5leHBvcnQgY29uc3QgREVGRU5TSVZFX1NUQVRfU1RBR0VfTVVMVElQTElFUlMgPSBbXHJcbiAgMCArIDB4MDcgLyAyNTYsIC8vIDAuMDNcclxuICAwICsgMHgwYyAvIDI1NiwgLy8gMC4wNVxyXG4gIDAgKyAweDE5IC8gMjU2LCAvLyAwLjFcclxuICAwICsgMHgyNiAvIDI1NiwgLy8gMC4xNVxyXG4gIDAgKyAweDMzIC8gMjU2LCAvLyAwLjJcclxuICAwICsgMHg0MCAvIDI1NiwgLy8gMC4yNVxyXG4gIDAgKyAweDRjIC8gMjU2LCAvLyAwLjNcclxuICAwICsgMHg2NiAvIDI1NiwgLy8gMC40XHJcbiAgMCArIDB4ODAgLyAyNTYsIC8vIDAuNVxyXG4gIDAgKyAweGIzIC8gMjU2LCAvLyAwLjdcclxuICAxICsgMHgwMCAvIDI1NiwgLy8gMVxyXG4gIDEgKyAweDRjIC8gMjU2LCAvLyAxLjNcclxuICAxICsgMHg5OSAvIDI1NiwgLy8gMS42XHJcbiAgMSArIDB4ZTYgLyAyNTYsIC8vIDEuOVxyXG4gIDIgKyAweDE5IC8gMjU2LCAvLyAyLjFcclxuICAyICsgMHg0YyAvIDI1NiwgLy8gMi4zXHJcbiAgMiArIDB4ODAgLyAyNTYsIC8vIDIuNVxyXG4gIDIgKyAweGIzIC8gMjU2LCAvLyAyLjdcclxuICAyICsgMHhlNiAvIDI1NiwgLy8gMi45XHJcbiAgMyArIDB4MTkgLyAyNTYsIC8vIDMuMVxyXG4gIDMgKyAweDRjIC8gMjU2LCAvLyAzLjNcclxuXTtcclxuLy8gXHUzMEFBXHUzMEI5XHU1NDdEXHU0RTJEXHUzMEU5XHUzMEYzXHUzMEFGXHU1MDBEXHU3Mzg3XHJcbmV4cG9ydCBjb25zdCBNQUxFX0FDQ1VSQUNZX1NUQUdFX01VTFRJUExJRVJTID0gW1xyXG4gIDAgKyAweDU0IC8gMjU2LCAvLyAwLjMzXHJcbiAgMCArIDB4NTkgLyAyNTYsIC8vIDAuMzVcclxuICAwICsgMHg1ZSAvIDI1NiwgLy8gMC4zN1xyXG4gIDAgKyAweDY2IC8gMjU2LCAvLyAwLjRcclxuICAwICsgMHg2ZSAvIDI1NiwgLy8gMC40M1xyXG4gIDAgKyAweDczIC8gMjU2LCAvLyAwLjQ1XHJcbiAgMCArIDB4OGMgLyAyNTYsIC8vIDAuNTVcclxuICAwICsgMHg5OSAvIDI1NiwgLy8gMC42XHJcbiAgMCArIDB4YjMgLyAyNTYsIC8vIDAuN1xyXG4gIDAgKyAweGNjIC8gMjU2LCAvLyAwLjhcclxuICAxICsgMHgwMCAvIDI1NiwgLy8gMVxyXG4gIDEgKyAweDQwIC8gMjU2LCAvLyAxLjI1XHJcbiAgMSArIDB4ODAgLyAyNTYsIC8vIDEuNVxyXG4gIDEgKyAweDk5IC8gMjU2LCAvLyAxLjZcclxuICAxICsgMHhhNiAvIDI1NiwgLy8gMS42NVxyXG4gIDEgKyAweGIzIC8gMjU2LCAvLyAxLjdcclxuICAxICsgMHhjMCAvIDI1NiwgLy8gMS43NVxyXG4gIDEgKyAweGNjIC8gMjU2LCAvLyAxLjhcclxuICAxICsgMHhkOSAvIDI1NiwgLy8gMS44NVxyXG4gIDEgKyAweGU2IC8gMjU2LCAvLyAxLjlcclxuICAyICsgMHgwMCAvIDI1NiwgLy8gMlxyXG5dO1xyXG4vLyBcdTMwQUFcdTMwQjlcdTU2REVcdTkwN0ZcdTMwRTlcdTMwRjNcdTMwQUZcdTUwMERcdTczODdcclxuZXhwb3J0IGNvbnN0IE1BTEVfRVZBU0lPTl9TVEFHRV9NVUxUSVBMSUVSUyA9IFtcclxuICAyICsgMHgwMCAvIDI1NiwgLy8gMlxyXG4gIDEgKyAweGU2IC8gMjU2LCAvLyAxLjlcclxuICAxICsgMHhkOSAvIDI1NiwgLy8gMS44NVxyXG4gIDEgKyAweGNjIC8gMjU2LCAvLyAxLjhcclxuICAxICsgMHhjMCAvIDI1NiwgLy8gMS43NVxyXG4gIDEgKyAweGIzIC8gMjU2LCAvLyAxLjdcclxuICAxICsgMHhhNiAvIDI1NiwgLy8gMS42NVxyXG4gIDEgKyAweDk5IC8gMjU2LCAvLyAxLjZcclxuICAxICsgMHg4MCAvIDI1NiwgLy8gMS41XHJcbiAgMSArIDB4NTkgLyAyNTYsIC8vIDEuMzVcclxuICAxICsgMHgwNyAvIDI1NiwgLy8gMS4wM1xyXG4gIDAgKyAweGNjIC8gMjU2LCAvLyAwLjhcclxuICAwICsgMHhiMyAvIDI1NiwgLy8gMC43XHJcbiAgMCArIDB4OTkgLyAyNTYsIC8vIDAuNlxyXG4gIDAgKyAweDgwIC8gMjU2LCAvLyAwLjVcclxuICAwICsgMHg2NiAvIDI1NiwgLy8gMC40XHJcbiAgMCArIDB4NTkgLyAyNTYsIC8vIDAuMzVcclxuICAwICsgMHg0YyAvIDI1NiwgLy8gMC4zXHJcbiAgMCArIDB4NDAgLyAyNTYsIC8vIDAuMjVcclxuICAwICsgMHgzMyAvIDI1NiwgLy8gMC4yXHJcbiAgMCArIDB4MjYgLyAyNTYsIC8vIDAuMTVcclxuXTtcclxuLy8gXHUzMEUxXHUzMEI5XHU1NDdEXHU0RTJEXHUzMEU5XHUzMEYzXHUzMEFGXHU1MDBEXHU3Mzg3XHJcbmV4cG9ydCBjb25zdCBGRU1BTEVfQUNDVVJBQ1lfU1RBR0VfTVVMVElQTElFUlMgPSBbXHJcbiAgMCArIDB4NTQgLyAyNTYsIC8vIDAuMzNcclxuICAwICsgMHg1OSAvIDI1NiwgLy8gMC4zNVxyXG4gIDAgKyAweDVlIC8gMjU2LCAvLyAwLjM3XHJcbiAgMCArIDB4NjYgLyAyNTYsIC8vIDAuNFxyXG4gIDAgKyAweDZlIC8gMjU2LCAvLyAwLjQzXHJcbiAgMCArIDB4NzMgLyAyNTYsIC8vIDAuNDVcclxuICAwICsgMHg4YyAvIDI1NiwgLy8gMC41NVxyXG4gIDAgKyAweDk5IC8gMjU2LCAvLyAwLjZcclxuICAwICsgMHhiMyAvIDI1NiwgLy8gMC43XHJcbiAgMCArIDB4Y2MgLyAyNTYsIC8vIDAuOFxyXG4gIDEgKyAweDBjIC8gMjU2LCAvLyAxLjA1XHJcbiAgMSArIDB4NDAgLyAyNTYsIC8vIDEuMjVcclxuICAxICsgMHg4MCAvIDI1NiwgLy8gMS41XHJcbiAgMSArIDB4OTkgLyAyNTYsIC8vIDEuNlxyXG4gIDEgKyAweGE2IC8gMjU2LCAvLyAxLjY1XHJcbiAgMSArIDB4YjMgLyAyNTYsIC8vIDEuN1xyXG4gIDEgKyAweGMwIC8gMjU2LCAvLyAxLjc1XHJcbiAgMSArIDB4Y2MgLyAyNTYsIC8vIDEuOFxyXG4gIDEgKyAweGQ5IC8gMjU2LCAvLyAxLjg1XHJcbiAgMSArIDB4ZTYgLyAyNTYsIC8vIDEuOVxyXG4gIDIgKyAweDAwIC8gMjU2LCAvLyAyXHJcbl07XHJcbi8vIFx1MzBFMVx1MzBCOVx1NTZERVx1OTA3Rlx1MzBFOVx1MzBGM1x1MzBBRlx1NTAwRFx1NzM4N1xyXG5leHBvcnQgY29uc3QgRkVNQUxFX0VWQVNJT05fU1RBR0VfTVVMVElQTElFUlMgPSBbXHJcbiAgMiArIDB4MDAgLyAyNTYsIC8vIDJcclxuICAxICsgMHhlNiAvIDI1NiwgLy8gMS45XHJcbiAgMSArIDB4ZDkgLyAyNTYsIC8vIDEuODVcclxuICAxICsgMHhjYyAvIDI1NiwgLy8gMS44XHJcbiAgMSArIDB4YzAgLyAyNTYsIC8vIDEuNzVcclxuICAxICsgMHhiMyAvIDI1NiwgLy8gMS43XHJcbiAgMSArIDB4YTYgLyAyNTYsIC8vIDEuNjVcclxuICAxICsgMHg5OSAvIDI1NiwgLy8gMS42XHJcbiAgMSArIDB4ODAgLyAyNTYsIC8vIDEuNVxyXG4gIDEgKyAweDU5IC8gMjU2LCAvLyAxLjM1XHJcbiAgMSArIDB4MDAgLyAyNTYsIC8vIDFcclxuICAwICsgMHhjYyAvIDI1NiwgLy8gMC44XHJcbiAgMCArIDB4YjMgLyAyNTYsIC8vIDAuN1xyXG4gIDAgKyAweDk5IC8gMjU2LCAvLyAwLjZcclxuICAwICsgMHg4MCAvIDI1NiwgLy8gMC41XHJcbiAgMCArIDB4NjYgLyAyNTYsIC8vIDAuNFxyXG4gIDAgKyAweDU5IC8gMjU2LCAvLyAwLjM1XHJcbiAgMCArIDB4NGMgLyAyNTYsIC8vIDAuM1xyXG4gIDAgKyAweDQwIC8gMjU2LCAvLyAwLjI1XHJcbiAgMCArIDB4MzMgLyAyNTYsIC8vIDAuMlxyXG4gIDAgKyAweDI2IC8gMjU2LCAvLyAwLjE1XHJcbl07XHJcblxyXG4vLyBcdTcyNzlcdTYwMjdcdTMwNDRcdTMwOERcdTMwODFcdTMwNENcdTMwNkRcdTg4RENcdTZCNjNcclxuZXhwb3J0IGNvbnN0IFRJTlRFRF9MRU5TX01VTFRJUExJRVIgPSBDT05TVF8xXzIwO1xyXG4vLyBcdTcyNzlcdTYwMjdcdTMwQ0ZcdTMwRkNcdTMwQzlcdTMwRURcdTMwQzNcdTMwQUZcdTg4RENcdTZCNjNcclxuZXhwb3J0IGNvbnN0IFNPTElEX1JPQ0tfTVVMVElQTElFUiA9IENPTlNUXzBfNzU7XHJcbi8vIFx1MzA4NFx1MzA1MVx1MzA2OVx1NjY0Mlx1MzA2RVx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1ODhEQ1x1NkI2M1xyXG5leHBvcnQgY29uc3QgQlVSTl9EQU1BR0VfTVVMVElQTElFUiA9IENPTlNUXzBfODA7XHJcbi8vIFx1NTkyOVx1NTAxOVx1MzA0Rlx1MzA4Mlx1MzA4QVx1NjY0Mlx1MzA2RVx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1ODhEQ1x1NkI2M1xyXG5leHBvcnQgY29uc3QgQ0xPVURZX0RBTUFHRV9NVUxUSVBMSUVSID0gQ09OU1RfMF83NTtcclxuLy8gXHUzMDU1XHUzMDREXHUzMDY5XHUzMDhBXHU4OERDXHU2QjYzXHJcbmV4cG9ydCBjb25zdCBNRV9GSVJTVF9NVUxUSVBMSUVSID0gQ09OU1RfMV81MDtcclxuLy8gXHUzMDU0XHUzMDQ2XHUzMDhGXHUzMDkzXHU4OERDXHU2QjYzXHJcbmV4cG9ydCBjb25zdCBQT1dFUl9QSVRDSEVSX0RBTUFHRV9NVUxUSVBMSUVSID0gQ09OU1RfMV81MDtcclxuLy8gXHUzMEE4XHUzMEEyXHUzMEZDXHUzMEQ2XHUzMEVDXHUzMEZDXHUzMEM5XHU4OERDXHU2QjYzXHJcbmV4cG9ydCBjb25zdCBBSVJfQkxBREVfREFNQUdFX01VTFRJUExJRVIgPSBDT05TVF8xXzUwO1xyXG4vLyAoXHU2NjQyXHU5NUM3KVx1MzBCRlx1MzBBNFx1MzBFMFx1MzBCN1x1MzBGQ1x1MzBFQlx1MzBDOVx1ODhEQ1x1NkI2M1xyXG5leHBvcnQgY29uc3QgVERfVElNRV9TSEVBTERfREFNQUdFX01VTFRJUExJRVIgPSAyO1xyXG5cclxuLy8gXHUzMEQxXHUzMEVGXHUzMEZDXHUzMEQwXHUzMEYzXHUzMEMwXHUzMENBXHU0RTBBXHU2NjA3XHU5MUNGXHJcbmV4cG9ydCBjb25zdCBQT1dFUl9CQU5EX1NUQVRfQk9PU1QgPSAxMjtcclxuLy8gXHUzMEI5XHUzMERBXHUzMEI3XHUzMEUzXHUzMEVCXHUzMEVBXHUzMERDXHUzMEYzXHU0RTBBXHU2NjA3XHU5MUNGXHJcbmV4cG9ydCBjb25zdCBTUEVDSUFMX0JBTkRfU1RBVF9CT09TVCA9IDEyO1xyXG4vLyBcdTMwN0NcdTMwNDZcdTMwNEVcdTMwODdcdTMwQjlcdTMwQUJcdTMwRkNcdTMwRDVcdTRFMEFcdTY2MDdcdTkxQ0ZcclxuZXhwb3J0IGNvbnN0IERFRl9TQ0FSRl9TVEFUX0JPT1NUID0gODtcclxuLy8gXHUzMEFEXHUzMEM4XHUzMEI1XHUzMEYzXHUzMEQwXHUzMEYzXHUzMEMwXHUzMENBXHU0RTBBXHU2NjA3XHU5MUNGXHJcbmV4cG9ydCBjb25zdCBaSU5DX0JBTkRfU1RBVF9CT09TVCA9IDg7XHJcbi8vIFx1NkNFMlx1NTJENVx1ODI3Mlx1MzBFQVx1MzBEQ1x1MzBGM1x1NEUwQVx1NjYwN1x1OTFDRlxyXG5leHBvcnQgY29uc3QgQVVSQV9CT1dfU1RBVF9CT09TVCA9IDE7XHJcbi8vIFx1MzBCNFx1MzBGM1x1MzBEOVx1MzA2RVx1MzBDRlx1MzBFOVx1MzBERVx1MzBBRFx1NEUwQVx1NjYwN1x1OTFDRlxyXG5leHBvcnQgY29uc3QgTVVOQ0hfQkVMVF9TVEFUX0JPT1NUID0gODtcclxuLy8gXHUzMEQ0XHUzMEYzXHUzMEM4XHUzMEVDXHUzMEYzXHUzMEJBXHU2MDI1XHU2MjQwXHU3Mzg3XHU0RTBBXHU2NjA3XHU5MUNGXHJcbmV4cG9ydCBjb25zdCBTQ09QRV9MRU5TX0NSSVRfUkFURV9CT09TVCA9IDE1O1xyXG4vLyBcdTMwNERcdTMwODdcdTMwNDZcdTMwNDZcdTMwOTNcdTYwMjVcdTYyNDBcdTczODdcdTRFMEFcdTY2MDdcdTkxQ0ZcclxuZXhwb3J0IGNvbnN0IFNVUEVSX0xVQ0tfQ1JJVF9SQVRFX0JPT1NUID0gMTA7XHJcbi8vIFx1MzA0Mlx1MzA0NFx1MzA1N1x1MzA4N1x1MzA0Nlx1MzA3MFx1MzA2NFx1MzA1MFx1MzA5M1x1NjAyNVx1NjI0MFx1NzM4N1xyXG5leHBvcnQgY29uc3QgVFlQRV9BRFZBTlRBR0VfTUFTVEVSX0NSSVRfUkFURSA9IDQwO1xyXG4vLyBcdTMwN0ZcdTMwNERcdTMwOEFcdTMwQ0ZcdTMwQzFcdTMwREVcdTMwQURcdTU0N0RcdTRFMkRcdTUwMjRcdTZFMUJcdTVDMTFcdTkxQ0ZcclxuZXhwb3J0IGNvbnN0IERFVEVDVF9CQU5EX01PVkVfQUNDVVJBQ1lfRFJPUCA9IDMwO1xyXG4vLyBcdTMwNTlcdTMwNzBcdTMwODRcdTMwNEZcdTMwNEJcdTMwNDRcdTMwNzJcdTU0N0RcdTRFMkRcdTUwMjRcdTZFMUJcdTVDMTFcdTkxQ0ZcclxuZXhwb3J0IGNvbnN0IFFVSUNLX0RPREdFUl9NT1ZFX0FDQ1VSQUNZX0RST1AgPSAxMDtcclxuXHJcbi8vIFx1MzBDNlx1MzBBRlx1MzBDQlx1MzBCN1x1MzBFM1x1MzBGM1x1MzA0Q1x1OTA2OVx1NzUyOFx1MzA1NVx1MzA4Q1x1MzA4Qlx1NUEwMVx1NTI5Qlx1MzA2RVx1NEUwQVx1OTY1MFxyXG5leHBvcnQgY29uc3QgVEVDSE5JQ0lBTl9NT1ZFX1BPV0VSX1RIUkVTSE9MRCA9IDQ7XHJcbi8vIFx1NjUzQlx1NjQ4M1x1N0NGQlx1MzBCOVx1MzBDNlx1MzBGQ1x1MzBCRlx1MzBCOVx1MzA2RVx1NjcwMFx1NTkyN1x1NTAyNFxyXG5leHBvcnQgY29uc3QgT0ZGRU5TRV9TVEFUX01BWCA9IDk5OTtcclxuLy8gSFBcdTY3MDBcdTU5MjdcdTUwMjRcclxuZXhwb3J0IGNvbnN0IE1BWF9IUF9DQVAgPSA5OTk7XHJcblxyXG4vKiogXHUzMDU3XHUzMDVDXHUzMDkzXHUzMDZFXHUzMDgxXHUzMDUwXHUzMDdGXHU4MEZEXHU1MjlCXHUzMEM2XHUzMEZDXHUzMEQ2XHUzMEVCICovXHJcbmV4cG9ydCBjb25zdCBOQVRVUkFMX0dJRlRfSVRFTV9UQUJMRSA9IFtcclxuICBuZXcgTmF0dXJhbEdpZnRJbmZvKDB4NDUsIGVvcy5UWVBFX0dSQVNTLCAxKSwgLy8gXHUzMDQ0XHUzMDg0XHUzMDU3XHUzMDZFXHUzMEJGXHUzMENEXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDQ2LCBlb3MuVFlQRV9QT0lTT04sIDEpLCAvLyBcdTMwQUFcdTMwRUNcdTMwRjNcdTMwNkVcdTMwN0ZcclxuICBuZXcgTmF0dXJhbEdpZnRJbmZvKDB4NDcsIGVvcy5UWVBFX1BTWUNISUMsIDMpLCAvLyBcdTMwQUFcdTMwRENcdTMwRjNcdTMwNkVcdTMwN0ZcclxuICBuZXcgTmF0dXJhbEdpZnRJbmZvKDB4NDgsIGVvcy5UWVBFX0dIT1NULCAyKSwgLy8gXHUzMDgxXHUzMDUwXHUzMDU5XHUzMDhBXHUzMDZFXHUzMEJGXHUzMENEXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDQ5LCBlb3MuVFlQRV9HUk9VTkQsIDEpLCAvLyBcdTMwNzVcdTMwNjNcdTMwNEJcdTMwNjRcdTMwNkVcdTMwQkZcdTMwQ0RcclxuICBuZXcgTmF0dXJhbEdpZnRJbmZvKDB4NGEsIGVvcy5UWVBFX0RBUkssIDIpLCAvLyBcdTMwODFcdTMwNjRcdTMwNzZcdTMwNTdcdTMwNkVcdTMwQkZcdTMwQ0RcclxuICBuZXcgTmF0dXJhbEdpZnRJbmZvKDB4NGIsIGVvcy5UWVBFX1NURUVMLCAxKSwgLy8gXHUzMDc1XHUzMDUzXHUzMDQ2XHUzMDZFXHUzMEJGXHUzMENEXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDRjLCBlb3MuVFlQRV9EQVJLLCAyKSwgLy8gXHUzMDdFXHUzMDY5XHUzMDhGXHUzMDU3XHUzMDZFXHUzMEJGXHUzMENEXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDRkLCBlb3MuVFlQRV9GSUdIVElORywgMyksIC8vIFx1MzA0NFx1MzA2RVx1MzA2MVx1MzA2RVx1MzBCRlx1MzBDRFxyXG4gIG5ldyBOYXR1cmFsR2lmdEluZm8oMHg0ZSwgZW9zLlRZUEVfR1JBU1MsIDIpLCAvLyBcdTMwQzFcdTMwRkNcdTMwQjRcdTMwNkVcdTMwN0ZcclxuICBuZXcgTmF0dXJhbEdpZnRJbmZvKDB4NGYsIGVvcy5UWVBFX1JPQ0ssIDUpLCAvLyBcdTMwNEZcdTMwNDZcdTMwNzVcdTMwNEZcdTMwNkVcdTMwQkZcdTMwQ0RcclxuICBuZXcgTmF0dXJhbEdpZnRJbmZvKDB4NTAsIGVvcy5UWVBFX0ZMWUlORywgMiksIC8vIFx1MzA1N1x1MzA4NVx1MzA5M1x1MzA1RFx1MzA0Rlx1MzA2RVx1MzBCRlx1MzBDRFxyXG4gIG5ldyBOYXR1cmFsR2lmdEluZm8oMHg1MSwgZW9zLlRZUEVfRUxFQ1RSSUMsIDIpLCAvLyBcdTMwRTJcdTMwRTJcdTMwRjNcdTMwNkVcdTMwN0ZcclxuICBuZXcgTmF0dXJhbEdpZnRJbmZvKDB4NTIsIGVvcy5UWVBFX0ZJUkUsIDIpLCAvLyBcdTMwQUZcdTMwRTlcdTMwRENcdTMwNkVcdTMwN0ZcclxuICBuZXcgTmF0dXJhbEdpZnRJbmZvKDB4NTMsIGVvcy5UWVBFX0dIT1NULCAyKSwgLy8gXHUzMDc1XHUzMDg5XHUzMDc1XHUzMDg5XHUzMDZFXHUzMEJGXHUzMENEXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDU0LCBlb3MuVFlQRV9JQ0UsIDIpLCAvLyBcdTMwNTlcdTMwNDRcdTMwN0ZcdTMwOTNcdTMwNkVcdTMwQkZcdTMwQ0RcclxuICBuZXcgTmF0dXJhbEdpZnRJbmZvKDB4NTUsIGVvcy5UWVBFX05PUk1BTCwgMTUpLCAvLyBcdTMwNUZcdTMwNjBcdTMwNkVcdTMwQkZcdTMwQ0RcclxuICBuZXcgTmF0dXJhbEdpZnRJbmZvKDB4NTYsIGVvcy5UWVBFX1BTWUNISUMsIDIpLCAvLyBcdTMwRUZcdTMwRkNcdTMwRDdcdTMwNkVcdTMwQkZcdTMwQ0RcclxuICBuZXcgTmF0dXJhbEdpZnRJbmZvKDB4NTcsIGVvcy5UWVBFX0RSQUdPTiwgNSksIC8vIFx1MzA3MFx1MzA0Rlx1MzA4Q1x1MzA2NFx1MzA2RVx1MzBCRlx1MzBDRFxyXG4gIG5ldyBOYXR1cmFsR2lmdEluZm8oMHg1OSwgZW9zLlRZUEVfTk9STUFMLCAzKSwgLy8gXHUzMDU3XHUzMDQyXHUzMDhGXHUzMDVCXHUzMDZFXHUzMEJGXHUzMENEXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDVhLCBlb3MuVFlQRV9XQVRFUiwgMiksIC8vIFx1MzBBQlx1MzBCNFx1MzA2RVx1MzA3RlxyXG4gIG5ldyBOYXR1cmFsR2lmdEluZm8oMHg1YiwgZW9zLlRZUEVfQlVHLCAyKSwgLy8gXHUzMDU3XHUzMDcwXHUzMDg5XHUzMDhDXHUzMDZFXHUzMEJGXHUzMENEXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDVkLCBlb3MuVFlQRV9EUkFHT04sIDEwKSwgLy8gXHUzMDRBXHUzMDQ2XHUzMDU0XHUzMDkzXHUzMDZFXHUzMEJGXHUzMENEXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDVlLCBlb3MuVFlQRV9QT0lTT04sIDUpLCAvLyBcdTMwNThcdTMwODNcdTMwNDJcdTMwNEZcdTMwNkFcdTMwQkZcdTMwQ0RcclxuICBuZXcgTmF0dXJhbEdpZnRJbmZvKDB4NWYsIGVvcy5UWVBFX1dBVEVSLCA1KSwgLy8gXHUzMDVCXHUzMDQ0XHUzMDZBXHUzMDhCXHUzMEJGXHUzMENEXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDYwLCBlb3MuVFlQRV9GSUdIVElORywgNSksIC8vIFx1MzA4Mlx1MzA0Nlx1MzA1Mlx1MzA0RFx1MzA2RVx1MzBCRlx1MzBDRFxyXG4gIG5ldyBOYXR1cmFsR2lmdEluZm8oMHg2MSwgZW9zLlRZUEVfQlVHLCA1KSwgLy8gXHUzMEM5XHUzMEVEXHUzMEYzXHUzMDZFXHUzMEJGXHUzMENEXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDY4LCBlb3MuVFlQRV9HSE9TVCwgNSksIC8vIFx1MzA4MVx1MzA0Rlx1MzA1OVx1MzA1MFx1MzA4QVx1MzA2RVx1MzBCRlx1MzBDRFxyXG4gIG5ldyBOYXR1cmFsR2lmdEluZm8oMHg2OSwgZW9zLlRZUEVfR1JPVU5ELCAyKSwgLy8gXHUzMDc3XHUzMDYzXHUzMDRCXHUzMDY0XHUzMDZFXHUzMEJGXHUzMENEXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDZhLCBlb3MuVFlQRV9JQ0UsIDEwKSwgLy8gXHUzMDU5XHUzMDQ0XHUzMDdGXHUzMDkzXHUzMDUwXHUzMDZFXHUzMEJGXHUzMENEXHJcbiAgbmV3IE5hdHVyYWxHaWZ0SW5mbygweDZiLCBlb3MuVFlQRV9QT0lTT04sIDIpLCAvLyBcdTMwNThcdTMwODNcdTMwNDJcdTMwNkFcdTMwNkVcdTMwQkZcdTMwQ0RcclxuICBuZXcgTmF0dXJhbEdpZnRJbmZvKDB4NzUsIGVvcy5UWVBFX1BPSVNPTiwgMiksIC8vIFx1MzBBQVx1MzBFQ1x1MzBCRFx1MzA2RVx1MzA3RlxyXG4gIG5ldyBOYXR1cmFsR2lmdEluZm8oMHg3NiwgZW9zLlRZUEVfU1RFRUwsIDUpLCAvLyBcdTMwNzVcdTMwNTRcdTMwNDZcdTMwNkVcdTMwQkZcdTMwQ0RcclxuICBuZXcgTmF0dXJhbEdpZnRJbmZvKDB4MDAsIGVvcy5UWVBFX05PTkUsIDApLCAvLyAoXHU3QTdBXHUzMDREKVxyXG5dO1xyXG5cclxuLyoqIFx1NjY0Mlx1OTVDN1x1MzA2RVx1NjI4MFx1MzA2RVx1NUEwMVx1NTI5QiAqL1xyXG5leHBvcnQgY29uc3QgVElNRV9EQVJLTkVTU19CQVNFX1BPV0VSID0gW1xyXG4gIHsgaWQ6IDB4MDAxLCBwb3dlcjogMjAgfSwgLy8gXHUzMEEyXHUzMEE0XHUzMEEyXHUzMEYzXHUzMEM2XHUzMEZDXHUzMEVCIDIwIC0+IDQwXHJcbiAgeyBpZDogMHgwNDAsIHBvd2VyOiAyNCB9LCAvLyBcdTMwNEJcdTMwN0ZcdTMwNkFcdTMwOEEgMjQgLT4gNDVcclxuICB7IGlkOiAweDA0YiwgcG93ZXI6IDIwIH0sIC8vIFx1MzA0RFx1MzA0Mlx1MzA0NFx1MzBEMVx1MzBGM1x1MzBDMSAyMCAtPiA1NVxyXG4gIHsgaWQ6IDB4MDZkLCBwb3dlcjogMTggfSwgLy8gXHUzMEI1XHUzMEE0XHUzMEIzXHUzMEFEXHUzMENEXHUzMEI3XHUzMEI5IDE4IC0+IDM4XHJcbiAgeyBpZDogMHgwOTUsIHBvd2VyOiAyMCB9LCAvLyBcdTMwNUJcdTMwNDRcdTMwNkFcdTMwOEJcdTMwN0JcdTMwNkVcdTMwNEEgMjAgLT4gNTBcclxuICB7IGlkOiAweDA5ZCwgcG93ZXI6IDI0IH0sIC8vIFx1MzA2MFx1MzA0NFx1MzA4Mlx1MzA5M1x1MzA1OCAyNCAtPiAzM1xyXG4gIHsgaWQ6IDB4MGRiLCBwb3dlcjogMTggfSwgLy8gXHUzMDZBXHUzMDdGXHUzMDZFXHUzMDhBIDE4IC0+IDMwXHJcbiAgeyBpZDogMHgwZGQsIHBvd2VyOiAxMiB9LCAvLyBcdTMwQ0JcdTMwRkNcdTMwQzlcdTMwRUJcdTMwQTJcdTMwRkNcdTMwRTAgMTIgLT4gMzZcclxuICB7IGlkOiAweDBlZSwgcG93ZXI6IDMwIH0sIC8vIFx1MzBDRlx1MzBGQ1x1MzBDOVx1MzBEN1x1MzBFOVx1MzBGM1x1MzBDOCAzMCAtPiA0NVxyXG4gIHsgaWQ6IDB4MGVmLCBwb3dlcjogMzAgfSwgLy8gXHUzMENGXHUzMEE0XHUzMEM5XHUzMEVEXHUzMEFCXHUzMENFXHUzMEYzIDMwIC0+IDMzXHJcbiAgeyBpZDogMHgwZjQsIHBvd2VyOiAxNCB9LCAvLyBcdTMwNkZcdTMwNENcdTMwNkRcdTMwNkVcdTMwNjRcdTMwNzBcdTMwNTUgMTQgLT4gMzVcclxuICB7IGlkOiAweDExNiwgcG93ZXI6IDMwIH0sIC8vIFx1MzA3NVx1MzA5M1x1MzA0QiAzMCAtPiA0MFxyXG4gIHsgaWQ6IDB4MTQzLCBwb3dlcjogMjQgfSwgLy8gXHUzMEUxXHUzMEFDXHUzMERCXHUzMEZDXHUzMEYzIDI0IC0+IDM4XHJcbl07XHJcblxyXG4vKiogXHUzMERFXHUzMEIwXHUzMENCXHUzMEMxXHUzMEU1XHUzMEZDXHUzMEM5IFx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1MzBDNlx1MzBGQ1x1MzBENlx1MzBFQiAoXHU1N0ZBXHU2NzJDKSAqL1xyXG5leHBvcnQgY29uc3QgTUFHTklUVURFX0RBTUFHRV9UQUJMRSA9IFs1LCAxMCwgMTUsIDI1LCAzMCwgMzUsIDQwXTtcclxuLyoqIFx1MzBCRFx1MzBDQlx1MzBDM1x1MzBBRlx1MzBENlx1MzBGQ1x1MzBFMCBcdTU2RkFcdTVCOUFcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjggKi9cclxuZXhwb3J0IGNvbnN0IFNPTklDQk9PTV9GSVhFRF9EQU1BR0UgPSAyMDtcclxuLyoqIFx1MzA1N1x1MzA5M1x1MzA0Rlx1MzA0Nlx1MzA0RVx1MzA4QSBcdTU2RkFcdTVCOUFcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjggKFx1NTdGQVx1NjcyQykgKi9cclxuZXhwb3J0IGNvbnN0IFZBQ1VVTV9DVVRfRklYRURfREFNQUdFID0gMTg7XHJcbi8qKiBcdTMwOEFcdTMwODVcdTMwNDZcdTMwNkVcdTMwNDRcdTMwNEJcdTMwOEEgXHU1NkZBXHU1QjlBXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4ICovXHJcbmV4cG9ydCBjb25zdCBEUkFHT05fUkFHRV9GSVhFRF9EQU1BR0UgPSAzMDtcclxuLyoqIFx1MzA0NFx1MzA1N1x1MzA2RVx1MzA2NFx1MzA3Nlx1MzA2NiBcdTU2RkFcdTVCOUFcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjggKi9cclxuZXhwb3J0IGNvbnN0IEdFT19QRUJCTEVfREFNQUdFID0gMTA7XHJcbi8qKiBcdTMwQjRcdTMwRURcdTMwRkNcdTMwRjNcdTMwNkVcdTMwNDRcdTMwNTcgXHU1NkZBXHU1QjlBXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4ICovXHJcbmV4cG9ydCBjb25zdCBHUkFWRUxFUk9DS19EQU1BR0UgPSAyMDtcclxuLyoqIFx1MzA1Rlx1MzA0NFx1MzA1M1x1MzA2RVx1MzA0Qlx1MzA1Qlx1MzA0RCBcdTU2RkFcdTVCOUFcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjggKi9cclxuZXhwb3J0IGNvbnN0IFJBUkVfRk9TU0lMX0RBTUFHRSA9IDEwMDtcclxuLyoqIFx1MzBBMlx1MzBGM1x1MzBDRVx1MzBGQ1x1MzBGM1x1MzA2RVx1MzA0NFx1MzA1NyBcdTU2RkFcdTVCOUFcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjggKi9cclxuZXhwb3J0IGNvbnN0IFVOT1dOX1JPQ0tfREFNQUdFID0gNjA7XHJcbi8qKiBcdTMwNEFcdTMwOTNcdTMwNENcdTMwNDhcdTMwNTcgXHU1NkZBXHU1QjlBXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHUzMEM2XHUzMEZDXHUzMEQ2XHUzMEVCICovXHJcbmV4cG9ydCBjb25zdCBSRVRVUk5fRklYRURfREFNQUdFX1RBQkxFID0gW1xyXG4gIHsgaXE6IDUwLCBkYW1hZ2U6IDUgfSxcclxuICB7IGlxOiAxMDAsIGRhbWFnZTogMTAgfSxcclxuICB7IGlxOiAyMDAsIGRhbWFnZTogMTUgfSxcclxuICB7IGlxOiAzMDAsIGRhbWFnZTogMjAgfSxcclxuICB7IGlxOiA0MDAsIGRhbWFnZTogMjUgfSxcclxuICB7IGlxOiA1MDAsIGRhbWFnZTogMzAgfSxcclxuICB7IGlxOiA2MDAsIGRhbWFnZTogMzUgfSxcclxuICB7IGlxOiA3MDAsIGRhbWFnZTogNDAgfSxcclxuICB7IGlxOiAxMDAwLCBkYW1hZ2U6IDQ1IH0sXHJcbiAgeyBpcTogMTAwMDAsIGRhbWFnZTogOTk5OSB9LFxyXG4gIHsgaXE6IC0xLCBkYW1hZ2U6IDEgfSwgLy8gMHhmZmZmXHJcbl07XHJcbi8qKiBcdTMwODRcdTMwNjRcdTMwNDJcdTMwNUZcdTMwOEEgXHU1NkZBXHU1QjlBXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHUzMEM2XHUzMEZDXHUzMEQ2XHUzMEVCICovXHJcbmV4cG9ydCBjb25zdCBGUlVTVFJBVElPTl9GSVhFRF9EQU1BR0VfVEFCTEUgPSBbXHJcbiAgeyBpcTogMCwgZGFtYWdlOiA5OTk5IH0sXHJcbiAgeyBpcTogNTAsIGRhbWFnZTogNDUgfSxcclxuICB7IGlxOiAxMDAsIGRhbWFnZTogNDAgfSxcclxuICB7IGlxOiAyMDAsIGRhbWFnZTogMzUgfSxcclxuICB7IGlxOiAzMDAsIGRhbWFnZTogMzAgfSxcclxuICB7IGlxOiA0MDAsIGRhbWFnZTogMjUgfSxcclxuICB7IGlxOiA1MDAsIGRhbWFnZTogMjAgfSxcclxuICB7IGlxOiA2MDAsIGRhbWFnZTogMTUgfSxcclxuICB7IGlxOiA3MDAsIGRhbWFnZTogMTAgfSxcclxuICB7IGlxOiAxMDAwLCBkYW1hZ2U6IDUgfSxcclxuICB7IGlxOiAxMDAwMCwgZGFtYWdlOiAxIH0sXHJcbiAgeyBpcTogLTEsIGRhbWFnZTogMSB9LCAvLyAweGZmZmZcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBcdTYyODBcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcdTMwOTJcdTUzRDZcdTVGOTdcclxuICogQHBhcmFtIHsqfSBtb3ZlSWRcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNb3ZlVHlwZShtb3ZlSWQpIHtcclxuICBpZiAoIU1vdmVEYXRhKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdNb3ZlRGF0YSBub3QgZm91bmQnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgcmV0dXJuIE1vdmVEYXRhW21vdmVJZF0uVHlwZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NUJGRVx1OEM2MVx1MzA2RVx1NjI4MFx1MzA0Q1x1OTAxQVx1NUUzOFx1NjUzQlx1NjQ4M1x1MzA3RVx1MzA1Rlx1MzA2Rlx1NjI5NVx1NjRGMlx1NzI2OVx1MzA2N1x1MzA0Mlx1MzA4Qlx1MzA0QlxyXG4gKiBAcGFyYW0geyp9IG1vdmVJZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVndWxhckF0dGFja09yUHJvamVjdGlsZShtb3ZlSWQpIHtcclxuICByZXR1cm4gbW92ZUlkID09IDB4MTYzIHx8IG1vdmVJZCA9PSAweDE5NTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NUJGRVx1OEM2MVx1MzA2RVx1OTA1M1x1NTE3N1x1MzA0Q1x1NkNFMlx1NTJENVx1ODI3Mlx1MzBFQVx1MzBEQ1x1MzBGM1x1MzA2N1x1MzA0Mlx1MzA4Qlx1MzA0QlxyXG4gKiBAcGFyYW0geyp9IGl0ZW1JZFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQXVyYUJvdyhpdGVtSWQpIHtcclxuICByZXR1cm4gaXRlbUlkID49IDB4MWFjICYmIGl0ZW1JZCA8PSAweDFiYjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBCNFx1MzBGQ1x1MzBCOVx1MzBDOFx1MzA2Qlx1NUJGRVx1MzA1N1x1MzA2Nlx1NzEyMVx1NTJCOVx1MzBCRlx1MzBBNFx1MzBEN1x1MzA2N1x1MzA0Mlx1MzA4Qlx1MzA0QlxyXG4gKiBAcGFyYW0ge051bWJlcn0gdHlwZUlkIFx1MzBCRlx1MzBBNFx1MzBEN0lEXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHlwZUluZWZmZWN0aXZlQWdhaW5zdEdob3N0KHR5cGVJZCkge1xyXG4gIHJldHVybiB0eXBlSWQgPT0gZW9zLlRZUEVfTk9STUFMIHx8IHR5cGVJZCA9PSBlb3MuVFlQRV9GSUdIVElORztcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NjI4MFx1MzA2RVx1NUEwMVx1NTI5Qlx1MzA5Mlx1NTNENlx1NUY5N1xyXG4gKiBAcGFyYW0ge051bWJlcn0gbW92ZUlkXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdGltZURhcmtuZXNzXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW92ZUJhc2VQb3dlcihtb3ZlSWQsIHRpbWVEYXJrbmVzcykge1xyXG4gIGlmICghTW92ZURhdGEpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ01vdmVEYXRhIG5vdCBmb3VuZCcpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBjb25zdCBtb3ZlID0gTW92ZURhdGFbbW92ZUlkXTtcclxuICBpZiAodGltZURhcmtuZXNzKSB7XHJcbiAgICBjb25zdCB0ZEJhc2VQb3dlciA9IGdldE1vdmVCYXNlUG93ZXJUaW1lRGFya25lc3MobW92ZUlkKTtcclxuICAgIGlmICh0ZEJhc2VQb3dlcikgcmV0dXJuIHRkQmFzZVBvd2VyO1xyXG4gIH1cclxuICByZXR1cm4gbW92ZS5Qb3dlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NjI4MFx1MzA2RVx1NTQ3RFx1NEUyRFx1NTAyNFx1MzA5Mlx1NTNENlx1NUY5N1xyXG4gKiBAcGFyYW0ge051bWJlcn0gbW92ZUlkIFx1NjI4MElEXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYWNjdXJhY3kyIFx1NTQ3RFx1NEUyRFx1NTAyNDJcdTMwOTJcdTUzRDZcdTVGOTdcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNb3ZlQWNjdXJhY3kobW92ZUlkLCBhY2N1cmFjeTIpIHtcclxuICBpZiAoIU1vdmVEYXRhKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdNb3ZlRGF0YSBub3QgZm91bmQnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29uc3QgbW92ZSA9IE1vdmVEYXRhW21vdmVJZF07XHJcbiAgaWYgKGFjY3VyYWN5Mikge1xyXG4gICAgcmV0dXJuIG1vdmUuQWNjdXJhY3kyO1xyXG4gIH1cclxuICByZXR1cm4gbW92ZS5BY2N1cmFjeTE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTYyODBcdTMwNkVcdTYwMjVcdTYyNDBcdTczODdcdTMwOTJcdTUzRDZcdTVGOTdcclxuICogQHBhcmFtIHtOdW1iZXJ9IG1vdmVJZCBcdTYyODBJRFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vdmVDcml0Q2hhbmNlKG1vdmVJZCkge1xyXG4gIGlmICghTW92ZURhdGEpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ01vdmVEYXRhIG5vdCBmb3VuZCcpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBjb25zdCBtb3ZlID0gTW92ZURhdGFbbW92ZUlkXTtcclxuICByZXR1cm4gbW92ZS5Dcml0aWNhbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NjY0Mlx1OTVDN1x1MzA2RVx1NjI4MFx1MzA2RVx1NUEwMVx1NTI5Qlx1MzA5Mlx1NTNENlx1NUY5N1xyXG4gKiBAcGFyYW0ge051bWJlcn0gbW92ZUlkXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW92ZUJhc2VQb3dlclRpbWVEYXJrbmVzcyhtb3ZlSWQpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IFRJTUVfREFSS05FU1NfQkFTRV9QT1dFUi5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZW50cnkgPSBUSU1FX0RBUktORVNTX0JBU0VfUE9XRVJbaV07XHJcbiAgICBpZiAoZW50cnkuaWQgPT0gbW92ZUlkKSB7XHJcbiAgICAgIHJldHVybiBlbnRyeS5wb3dlcjtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTYyODBcdTMwNkVQUFx1MzA5Mlx1NTNENlx1NUY5N1xyXG4gKiBAcGFyYW0geyp9IG1vdmVJZFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vdmVNYXhQUChtb3ZlSWQpIHtcclxuICBpZiAoIU1vdmVEYXRhKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdNb3ZlRGF0YSBub3QgZm91bmQnKTtcclxuICB9XHJcbiAgcmV0dXJuIE1vdmVEYXRhW21vdmVJZF0uUFA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTUzQ0RcdTUyRDVcdTYyODBcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcclxuICogQHBhcmFtIHsqfSBtb3ZlSWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1JlY29pbE1vdmUobW92ZUlkKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIDB4MDc0LCAvLyBcdTMwNThcdTMwNTRcdTMwNEZcdTMwNTBcdTMwOEJcdTMwN0VcclxuICAgIDB4MDhjLCAvLyBcdTMwNTlcdTMwNjZcdTMwN0ZcdTMwQkZcdTMwQzNcdTMwQUZcdTMwRUJcclxuICAgIDB4MGNiLCAvLyBcdTMwNjhcdTMwNjNcdTMwNTdcdTMwOTNcclxuICAgIDB4MGNjLCAvLyBcdTMwNjhcdTMwNzNcdTMwNTJcdTMwOEFcclxuICAgIDB4MGNlLCAvLyBcdTMwNjhcdTMwNzNcdTMwNzJcdTMwNTZcdTMwNTJcdTMwOEFcclxuICAgIDB4MTYyLCAvLyBcdTMwRENcdTMwRUJcdTMwQzZcdTMwQzNcdTMwQUJcdTMwRkNcclxuICAgIDB4MWI5LCAvLyBcdTMwQTZcdTMwQzNcdTMwQzlcdTMwQ0ZcdTMwRjNcdTMwREVcdTMwRkNcclxuICAgIDB4MjA1LCAvLyBcdTMwRDVcdTMwRUNcdTMwQTJcdTMwQzlcdTMwRTlcdTMwQTRcdTMwRDZcclxuICAgIDB4MjA2LCAvLyBcdTMwRDZcdTMwRUNcdTMwQTRcdTMwRDZcdTMwRDBcdTMwRkNcdTMwQzlcclxuICAgIDB4MjE1LCAvLyBcdTMwODJcdTMwOERcdTMwNkZcdTMwNkVcdTMwNUFcdTMwNjRcdTMwNERcclxuICBdLmluY2x1ZGVzKG1vdmVJZCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTMwRDFcdTMwRjNcdTMwQzFcdTYyODBcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcclxuICogQHBhcmFtIHsqfSBtb3ZlSWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1B1bmNoTW92ZShtb3ZlSWQpIHtcclxuICByZXR1cm4gW1xyXG4gICAgMHgwNDEsIC8vIFx1MzA0Qlx1MzA3Rlx1MzA2QVx1MzA4QVx1MzBEMVx1MzBGM1x1MzBDMVxyXG4gICAgMHgwNGIsIC8vIFx1MzA0RFx1MzA0Mlx1MzA0NFx1MzBEMVx1MzBGM1x1MzBDMVxyXG4gICAgMHgwNjcsIC8vIFx1MzBCM1x1MzBFMVx1MzBDM1x1MzBDOFx1MzBEMVx1MzBGM1x1MzBDMVxyXG4gICAgMHgwN2UsIC8vIFx1MzBCN1x1MzBFM1x1MzBDOVx1MzBGQ1x1MzBEMVx1MzBGM1x1MzBDMVxyXG4gICAgMHgwODgsIC8vIFx1MzBCOVx1MzBBQlx1MzBBNFx1MzBBMlx1MzBDM1x1MzBEMVx1MzBGQ1xyXG4gICAgMHgwZjYsIC8vIFx1MzA3MFx1MzA0Rlx1MzA4Q1x1MzA2NFx1MzBEMVx1MzBGM1x1MzBDMVxyXG4gICAgMHgxMDgsIC8vIFx1MzBENFx1MzBFOFx1MzBENFx1MzBFOFx1MzBEMVx1MzBGM1x1MzBDMVxyXG4gICAgMHgxMjQsIC8vIFx1MzA3Qlx1MzA2RVx1MzA0QVx1MzA2RVx1MzBEMVx1MzBGM1x1MzBDMVxyXG4gICAgMHgxNDIsIC8vIFx1MzBERVx1MzBDM1x1MzBDRlx1MzBEMVx1MzBGM1x1MzBDMVxyXG4gICAgMHgxNTgsIC8vIFx1MzBFMVx1MzBBQ1x1MzBDOFx1MzBGM1x1MzBEMVx1MzBGM1x1MzBDMVxyXG4gICAgMHgxNWIsIC8vIFx1MzA4Q1x1MzA0NFx1MzA2OFx1MzA0Nlx1MzBEMVx1MzBGM1x1MzBDMVxyXG4gICAgMHgxYWUsIC8vIFx1MzA4Q1x1MzA5M1x1MzA1RVx1MzA0Rlx1MzBEMVx1MzBGM1x1MzBDMVxyXG4gICAgMHgxZjQsIC8vIFx1MzBBMlx1MzBGQ1x1MzBFMFx1MzBDRlx1MzBGM1x1MzBERVx1MzBGQ1xyXG4gICAgMHgxZmUsIC8vIFx1MzBEMFx1MzBFQ1x1MzBDM1x1MzBDOFx1MzBEMVx1MzBGM1x1MzBDMVxyXG4gIF0uaW5jbHVkZXMobW92ZUlkKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1OTdGM1x1NjI4MFx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlxyXG4gKiBAcGFyYW0geyp9IG1vdmVJZFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU291bmRNb3ZlKG1vdmVJZCkge1xyXG4gIHJldHVybiBbXHJcbiAgICAweDAxOSwgLy8gXHUzMDQ0XHUzMDczXHUzMDREXHJcbiAgICAweDAxYSwgLy8gXHUzMDQ0XHUzMDg0XHUzMDU3XHUzMDZFXHUzMDU5XHUzMDVBXHJcbiAgICAweDAxYiwgLy8gXHUzMDQ0XHUzMDg0XHUzMDZBXHUzMDRBXHUzMDY4XHJcbiAgICAweDAyMiwgLy8gXHUzMDQ2XHUzMDVGXHUzMDQ2XHJcbiAgICAweDA1MywgLy8gXHUzMDREXHUzMDkzXHUzMDVFXHUzMDRGXHUzMDRBXHUzMDkzXHJcbiAgICAweDA1NCwgLy8gXHUzMDRGXHUzMDU1XHUzMDc2XHUzMDQ4XHJcbiAgICAweDBhYiwgLy8gXHUzMDYxXHUzMDg3XHUzMDQ2XHUzMDRBXHUzMDkzXHUzMDcxXHJcbiAgICAweDBkOSwgLy8gXHUzMDZBXHUzMDREXHUzMDU0XHUzMDQ4XHJcbiAgICAweDBmMSwgLy8gXHUzMENGXHUzMEE0XHUzMEQxXHUzMEZDXHUzMERDXHUzMEE0XHUzMEI5XHJcbiAgICAweDExYywgLy8gXHUzMDdCXHUzMDQ4XHUzMDhCXHJcbiAgICAweDEyNSwgLy8gXHUzMDdCXHUzMDhEXHUzMDczXHUzMDZFXHUzMDQ2XHUzMDVGXHJcbiAgICAweDIxMiwgLy8gXHUzMDgwXHUzMDU3XHUzMDZFXHUzMDU1XHUzMDU2XHUzMDgxXHUzMDREXHJcbiAgICAweDFiZSwgLy8gXHUzMDRBXHUzMDU3XHUzMDgzXHUzMDc5XHUzMDhBXHJcbiAgXS5pbmNsdWRlcyhtb3ZlSWQpO1xyXG59XHJcblxyXG4vKipcclxuICogXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMDZFXHU5MUNEXHUzMDU1XHU1MDBEXHU3Mzg3XHUzMDkyXHU1M0Q2XHU1Rjk3XHJcbiAqIEBwYXJhbSB7Kn0gcG9rZW1vbklkXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9uc3RlcldlaWdodChwb2tlbW9uSWQpIHtcclxuICBpZiAoIVBva2Vtb25EYXRhKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdQb2tlbW9uRGF0YSBub3QgZm91bmQnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29uc3QgcG9rZW1vbiA9IFBva2Vtb25EYXRhW3Bva2Vtb25JZF07XHJcbiAgY29uc3QgcmF3ID0gcG9rZW1vbi5XZWlnaHQ7XHJcbiAgcmV0dXJuICgocmF3ID4+IDgpICsgKHJhdyAmIDB4ZmYpKSAvIDB4MTAwO1xyXG59XHJcbiIsICIvKlxyXG4gIFRoaXMgY29kZSBpbmNsdWRlcyBwb3J0aW9ucyBiYXNlZCBvbiBkYW1hZ2UtZW9zIGJ5IFVzZXJuYW1lRm9kZGVyXHJcbiAgaHR0cHM6Ly9naXRodWIuY29tL1VzZXJuYW1lRm9kZGVyL2RhbWFnZS1lb3NcclxuXHJcbiAgT3JpZ2luYWwgY29kZSBwb3J0aW9uczpcclxuICAtIE1JVCBMaWNlbnNlIChjKSAyMDIzIFVzZXJuYW1lRm9kZGVyXHJcblxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBPcmlnaW5hbCBMaWNlbnNlOlxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBNSVQgTGljZW5zZVxyXG5cclxuICBDb3B5cmlnaHQgKGMpIDIwMjMgVXNlcm5hbWVGb2RkZXJcclxuXHJcbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG4gIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG4gIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG4gIFNPRlRXQVJFLlxyXG4qL1xyXG5cclxuLyoqXHJcbiAqIGxuXHU1MUU2XHU3NDA2IChwbWRza3ktZGVidWc6IDB4MjAwMjFGNClcclxuICogQHBhcmFtIHsqfSB4XHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2xhbXBlZExuKHgpIHtcclxuICBjb25zdCBMT0dfVkFMVUVfVEFCTEUgPSBbXHJcbiAgICAweDAgLyAweDEwMDAwLFxyXG4gICAgMHgwIC8gMHgxMDAwMCxcclxuICAgIDB4YjE3MCAvIDB4MTAwMDAsXHJcbiAgICAweDExOTMwIC8gMHgxMDAwMCxcclxuICAgIDB4MTYyZTAgLyAweDEwMDAwLFxyXG4gICAgMHgxOWMwMCAvIDB4MTAwMDAsXHJcbiAgICAweDFjYWIwIC8gMHgxMDAwMCxcclxuICAgIDB4MWYyMjAgLyAweDEwMDAwLFxyXG4gICAgMHgyMTQ1MCAvIDB4MTAwMDAsXHJcbiAgICAweDIzMjcwIC8gMHgxMDAwMCxcclxuICAgIDB4MjRkNzAgLyAweDEwMDAwLFxyXG4gICAgMHgyNjVkMCAvIDB4MTAwMDAsXHJcbiAgICAweDI3YzIwIC8gMHgxMDAwMCxcclxuICAgIDB4MjkwYTAgLyAweDEwMDAwLFxyXG4gICAgMHgyYTM5MCAvIDB4MTAwMDAsXHJcbiAgICAweDJiNTQwIC8gMHgxMDAwMCxcclxuICAgIDB4MmM1YzAgLyAweDEwMDAwLFxyXG4gICAgMHgyZDU0MCAvIDB4MTAwMDAsXHJcbiAgICAweDJlM2UwIC8gMHgxMDAwMCxcclxuICAgIDB4MmYxYzAgLyAweDEwMDAwLFxyXG4gICAgMHgyZmVlMCAvIDB4MTAwMDAsXHJcbiAgICAweDMwYjYwIC8gMHgxMDAwMCxcclxuICAgIDB4MzE3NDAgLyAweDEwMDAwLFxyXG4gICAgMHgzMjJhMCAvIDB4MTAwMDAsXHJcbiAgICAweDMyZDkwIC8gMHgxMDAwMCxcclxuICAgIDB4MzM4MDAgLyAweDEwMDAwLFxyXG4gICAgMHgzNDIxMCAvIDB4MTAwMDAsXHJcbiAgICAweDM0YmIwIC8gMHgxMDAwMCxcclxuICAgIDB4MzU1MDAgLyAweDEwMDAwLFxyXG4gICAgMHgzNWUwMCAvIDB4MTAwMDAsXHJcbiAgICAweDM2NmIwIC8gMHgxMDAwMCxcclxuICAgIDB4MzZmMTAgLyAweDEwMDAwLFxyXG4gICAgMHgzNzczMCAvIDB4MTAwMDAsXHJcbiAgICAweDM3ZjEwIC8gMHgxMDAwMCxcclxuICAgIDB4Mzg2YjAgLyAweDEwMDAwLFxyXG4gICAgMHgzOGUyMCAvIDB4MTAwMDAsXHJcbiAgICAweDM5NTYwIC8gMHgxMDAwMCxcclxuICAgIDB4MzljNjAgLyAweDEwMDAwLFxyXG4gICAgMHgzYTMzMCAvIDB4MTAwMDAsXHJcbiAgICAweDNhOWQwIC8gMHgxMDAwMCxcclxuICAgIDB4M2IwNTAgLyAweDEwMDAwLFxyXG4gICAgMHgzYjZhMCAvIDB4MTAwMDAsXHJcbiAgICAweDNiY2QwIC8gMHgxMDAwMCxcclxuICAgIDB4M2MyZDAgLyAweDEwMDAwLFxyXG4gICAgMHgzYzhjMCAvIDB4MTAwMDAsXHJcbiAgICAweDNjZTgwIC8gMHgxMDAwMCxcclxuICAgIDB4M2Q0MjAgLyAweDEwMDAwLFxyXG4gICAgMHgzZDlhMCAvIDB4MTAwMDAsXHJcbiAgICAweDNkZjAwIC8gMHgxMDAwMCxcclxuICAgIDB4M2U0NDAgLyAweDEwMDAwLFxyXG4gICAgMHgzZTk3MCAvIDB4MTAwMDAsXHJcbiAgICAweDNlZTgwIC8gMHgxMDAwMCxcclxuICAgIDB4M2YzODAgLyAweDEwMDAwLFxyXG4gICAgMHgzZjg2MCAvIDB4MTAwMDAsXHJcbiAgICAweDNmZDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NDAxZTAgLyAweDEwMDAwLFxyXG4gICAgMHg0MDY3MCAvIDB4MTAwMDAsXHJcbiAgICAweDQwYjAwIC8gMHgxMDAwMCxcclxuICAgIDB4NDBmNzAgLyAweDEwMDAwLFxyXG4gICAgMHg0MTNkMCAvIDB4MTAwMDAsXHJcbiAgICAweDQxODIwIC8gMHgxMDAwMCxcclxuICAgIDB4NDFjNjAgLyAweDEwMDAwLFxyXG4gICAgMHg0MjA4MCAvIDB4MTAwMDAsXHJcbiAgICAweDQyNGEwIC8gMHgxMDAwMCxcclxuICAgIDB4NDI4YTAgLyAweDEwMDAwLFxyXG4gICAgMHg0MmNhMCAvIDB4MTAwMDAsXHJcbiAgICAweDQzMDgwIC8gMHgxMDAwMCxcclxuICAgIDB4NDM0NjAgLyAweDEwMDAwLFxyXG4gICAgMHg0MzgzMCAvIDB4MTAwMDAsXHJcbiAgICAweDQzYmUwIC8gMHgxMDAwMCxcclxuICAgIDB4NDNmOTAgLyAweDEwMDAwLFxyXG4gICAgMHg0NDMzMCAvIDB4MTAwMDAsXHJcbiAgICAweDQ0NmQwIC8gMHgxMDAwMCxcclxuICAgIDB4NDRhNTAgLyAweDEwMDAwLFxyXG4gICAgMHg0NGRkMCAvIDB4MTAwMDAsXHJcbiAgICAweDQ1MTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NDU0YTAgLyAweDEwMDAwLFxyXG4gICAgMHg0NTgwMCAvIDB4MTAwMDAsXHJcbiAgICAweDQ1YjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NDVlOTAgLyAweDEwMDAwLFxyXG4gICAgMHg0NjFjMCAvIDB4MTAwMDAsXHJcbiAgICAweDQ2NGYwIC8gMHgxMDAwMCxcclxuICAgIDB4NDY4MTAgLyAweDEwMDAwLFxyXG4gICAgMHg0NmIzMCAvIDB4MTAwMDAsXHJcbiAgICAweDQ2ZTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NDcxNTAgLyAweDEwMDAwLFxyXG4gICAgMHg0NzQ1MCAvIDB4MTAwMDAsXHJcbiAgICAweDQ3NzQwIC8gMHgxMDAwMCxcclxuICAgIDB4NDdhMzAgLyAweDEwMDAwLFxyXG4gICAgMHg0N2QxMCAvIDB4MTAwMDAsXHJcbiAgICAweDQ3ZmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NDgyYzAgLyAweDEwMDAwLFxyXG4gICAgMHg0ODU5MCAvIDB4MTAwMDAsXHJcbiAgICAweDQ4ODUwIC8gMHgxMDAwMCxcclxuICAgIDB4NDhiMTAgLyAweDEwMDAwLFxyXG4gICAgMHg0OGRjMCAvIDB4MTAwMDAsXHJcbiAgICAweDQ5MDcwIC8gMHgxMDAwMCxcclxuICAgIDB4NDkzMjAgLyAweDEwMDAwLFxyXG4gICAgMHg0OTVjMCAvIDB4MTAwMDAsXHJcbiAgICAweDQ5ODUwIC8gMHgxMDAwMCxcclxuICAgIDB4NDlhZTAgLyAweDEwMDAwLFxyXG4gICAgMHg0OWQ3MCAvIDB4MTAwMDAsXHJcbiAgICAweDQ5ZmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NGEyNzAgLyAweDEwMDAwLFxyXG4gICAgMHg0YTRmMCAvIDB4MTAwMDAsXHJcbiAgICAweDRhNzYwIC8gMHgxMDAwMCxcclxuICAgIDB4NGE5ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg0YWMzMCAvIDB4MTAwMDAsXHJcbiAgICAweDRhZWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NGIwZjAgLyAweDEwMDAwLFxyXG4gICAgMHg0YjM1MCAvIDB4MTAwMDAsXHJcbiAgICAweDRiNWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NGI3ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg0YmEzMCAvIDB4MTAwMDAsXHJcbiAgICAweDRiYzcwIC8gMHgxMDAwMCxcclxuICAgIDB4NGJlYjAgLyAweDEwMDAwLFxyXG4gICAgMHg0YzBlMCAvIDB4MTAwMDAsXHJcbiAgICAweDRjMzEwIC8gMHgxMDAwMCxcclxuICAgIDB4NGM1NDAgLyAweDEwMDAwLFxyXG4gICAgMHg0Yzc3MCAvIDB4MTAwMDAsXHJcbiAgICAweDRjOTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NGNiYjAgLyAweDEwMDAwLFxyXG4gICAgMHg0Y2RkMCAvIDB4MTAwMDAsXHJcbiAgICAweDRjZmUwIC8gMHgxMDAwMCxcclxuICAgIDB4NGQxZjAgLyAweDEwMDAwLFxyXG4gICAgMHg0ZDQwMCAvIDB4MTAwMDAsXHJcbiAgICAweDRkNjEwIC8gMHgxMDAwMCxcclxuICAgIDB4NGQ4MTAgLyAweDEwMDAwLFxyXG4gICAgMHg0ZGExMCAvIDB4MTAwMDAsXHJcbiAgICAweDRkYzEwIC8gMHgxMDAwMCxcclxuICAgIDB4NGRlMTAgLyAweDEwMDAwLFxyXG4gICAgMHg0ZTAwMCAvIDB4MTAwMDAsXHJcbiAgICAweDRlMWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NGUzZTAgLyAweDEwMDAwLFxyXG4gICAgMHg0ZTVkMCAvIDB4MTAwMDAsXHJcbiAgICAweDRlN2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NGU5YTAgLyAweDEwMDAwLFxyXG4gICAgMHg0ZWI4MCAvIDB4MTAwMDAsXHJcbiAgICAweDRlZDYwIC8gMHgxMDAwMCxcclxuICAgIDB4NGVmMzAgLyAweDEwMDAwLFxyXG4gICAgMHg0ZjEwMCAvIDB4MTAwMDAsXHJcbiAgICAweDRmMmUwIC8gMHgxMDAwMCxcclxuICAgIDB4NGY0YjAgLyAweDEwMDAwLFxyXG4gICAgMHg0ZjY3MCAvIDB4MTAwMDAsXHJcbiAgICAweDRmODQwIC8gMHgxMDAwMCxcclxuICAgIDB4NGZhMDAgLyAweDEwMDAwLFxyXG4gICAgMHg0ZmJjMCAvIDB4MTAwMDAsXHJcbiAgICAweDRmZDgwIC8gMHgxMDAwMCxcclxuICAgIDB4NGZmNDAgLyAweDEwMDAwLFxyXG4gICAgMHg1MDEwMCAvIDB4MTAwMDAsXHJcbiAgICAweDUwMmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NTA0NjAgLyAweDEwMDAwLFxyXG4gICAgMHg1MDYxMCAvIDB4MTAwMDAsXHJcbiAgICAweDUwN2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NTA5NzAgLyAweDEwMDAwLFxyXG4gICAgMHg1MGIxMCAvIDB4MTAwMDAsXHJcbiAgICAweDUwY2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NTBlNjAgLyAweDEwMDAwLFxyXG4gICAgMHg1MTAwMCAvIDB4MTAwMDAsXHJcbiAgICAweDUxMWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NTEzMzAgLyAweDEwMDAwLFxyXG4gICAgMHg1MTRkMCAvIDB4MTAwMDAsXHJcbiAgICAweDUxNjYwIC8gMHgxMDAwMCxcclxuICAgIDB4NTE4MDAgLyAweDEwMDAwLFxyXG4gICAgMHg1MTk5MCAvIDB4MTAwMDAsXHJcbiAgICAweDUxYjEwIC8gMHgxMDAwMCxcclxuICAgIDB4NTFjYTAgLyAweDEwMDAwLFxyXG4gICAgMHg1MWUzMCAvIDB4MTAwMDAsXHJcbiAgICAweDUxZmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NTIxNDAgLyAweDEwMDAwLFxyXG4gICAgMHg1MjJjMCAvIDB4MTAwMDAsXHJcbiAgICAweDUyNDQwIC8gMHgxMDAwMCxcclxuICAgIDB4NTI1YzAgLyAweDEwMDAwLFxyXG4gICAgMHg1MjczMCAvIDB4MTAwMDAsXHJcbiAgICAweDUyOGIwIC8gMHgxMDAwMCxcclxuICAgIDB4NTJhMjAgLyAweDEwMDAwLFxyXG4gICAgMHg1MmJhMCAvIDB4MTAwMDAsXHJcbiAgICAweDUyZDEwIC8gMHgxMDAwMCxcclxuICAgIDB4NTJlODAgLyAweDEwMDAwLFxyXG4gICAgMHg1MmZmMCAvIDB4MTAwMDAsXHJcbiAgICAweDUzMTYwIC8gMHgxMDAwMCxcclxuICAgIDB4NTMyZDAgLyAweDEwMDAwLFxyXG4gICAgMHg1MzQzMCAvIDB4MTAwMDAsXHJcbiAgICAweDUzNWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NTM3MDAgLyAweDEwMDAwLFxyXG4gICAgMHg1Mzg2MCAvIDB4MTAwMDAsXHJcbiAgICAweDUzOWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NTNiMjAgLyAweDEwMDAwLFxyXG4gICAgMHg1M2M4MCAvIDB4MTAwMDAsXHJcbiAgICAweDUzZGUwIC8gMHgxMDAwMCxcclxuICAgIDB4NTNmMzAgLyAweDEwMDAwLFxyXG4gICAgMHg1NDA5MCAvIDB4MTAwMDAsXHJcbiAgICAweDU0MWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NTQzMzAgLyAweDEwMDAwLFxyXG4gICAgMHg1NDQ5MCAvIDB4MTAwMDAsXHJcbiAgICAweDU0NWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NTQ3MzAgLyAweDEwMDAwLFxyXG4gICAgMHg1NDg4MCAvIDB4MTAwMDAsXHJcbiAgICAweDU0OWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NTRiMTAgLyAweDEwMDAwLFxyXG4gICAgMHg1NGM1MCAvIDB4MTAwMDAsXHJcbiAgICAweDU0ZGEwIC8gMHgxMDAwMCxcclxuICAgIDB4NTRlZTAgLyAweDEwMDAwLFxyXG4gICAgMHg1NTAyMCAvIDB4MTAwMDAsXHJcbiAgICAweDU1MTcwIC8gMHgxMDAwMCxcclxuICAgIDB4NTUyYjAgLyAweDEwMDAwLFxyXG4gICAgMHg1NTNlMCAvIDB4MTAwMDAsXHJcbiAgICAweDU1NTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NTU2NjAgLyAweDEwMDAwLFxyXG4gICAgMHg1NTdhMCAvIDB4MTAwMDAsXHJcbiAgICAweDU1OGQwIC8gMHgxMDAwMCxcclxuICAgIDB4NTVhMTAgLyAweDEwMDAwLFxyXG4gICAgMHg1NWI0MCAvIDB4MTAwMDAsXHJcbiAgICAweDU1YzcwIC8gMHgxMDAwMCxcclxuICAgIDB4NTVkYjAgLyAweDEwMDAwLFxyXG4gICAgMHg1NWVlMCAvIDB4MTAwMDAsXHJcbiAgICAweDU2MDEwIC8gMHgxMDAwMCxcclxuICAgIDB4NTYxNDAgLyAweDEwMDAwLFxyXG4gICAgMHg1NjI2MCAvIDB4MTAwMDAsXHJcbiAgICAweDU2MzkwIC8gMHgxMDAwMCxcclxuICAgIDB4NTY0YzAgLyAweDEwMDAwLFxyXG4gICAgMHg1NjVlMCAvIDB4MTAwMDAsXHJcbiAgICAweDU2NzEwIC8gMHgxMDAwMCxcclxuICAgIDB4NTY4MzAgLyAweDEwMDAwLFxyXG4gICAgMHg1Njk2MCAvIDB4MTAwMDAsXHJcbiAgICAweDU2YTgwIC8gMHgxMDAwMCxcclxuICAgIDB4NTZiYTAgLyAweDEwMDAwLFxyXG4gICAgMHg1NmNjMCAvIDB4MTAwMDAsXHJcbiAgICAweDU2ZGUwIC8gMHgxMDAwMCxcclxuICAgIDB4NTZmMDAgLyAweDEwMDAwLFxyXG4gICAgMHg1NzAyMCAvIDB4MTAwMDAsXHJcbiAgICAweDU3MTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NTcyNTAgLyAweDEwMDAwLFxyXG4gICAgMHg1NzM3MCAvIDB4MTAwMDAsXHJcbiAgICAweDU3NDgwIC8gMHgxMDAwMCxcclxuICAgIDB4NTc1YTAgLyAweDEwMDAwLFxyXG4gICAgMHg1NzZiMCAvIDB4MTAwMDAsXHJcbiAgICAweDU3N2QwIC8gMHgxMDAwMCxcclxuICAgIDB4NTc4ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg1NzlmMCAvIDB4MTAwMDAsXHJcbiAgICAweDU3YjAwIC8gMHgxMDAwMCxcclxuICAgIDB4NTdjMTAgLyAweDEwMDAwLFxyXG4gICAgMHg1N2QyMCAvIDB4MTAwMDAsXHJcbiAgICAweDU3ZTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NTdmNDAgLyAweDEwMDAwLFxyXG4gICAgMHg1ODA1MCAvIDB4MTAwMDAsXHJcbiAgICAweDU4MTUwIC8gMHgxMDAwMCxcclxuICAgIDB4NTgyNjAgLyAweDEwMDAwLFxyXG4gICAgMHg1ODM3MCAvIDB4MTAwMDAsXHJcbiAgICAweDU4NDcwIC8gMHgxMDAwMCxcclxuICAgIDB4NTg1NzAgLyAweDEwMDAwLFxyXG4gICAgMHg1ODY4MCAvIDB4MTAwMDAsXHJcbiAgICAweDU4NzgwIC8gMHgxMDAwMCxcclxuICAgIDB4NTg4ODAgLyAweDEwMDAwLFxyXG4gICAgMHg1ODk4MCAvIDB4MTAwMDAsXHJcbiAgICAweDU4YTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NThiOTAgLyAweDEwMDAwLFxyXG4gICAgMHg1OGM5MCAvIDB4MTAwMDAsXHJcbiAgICAweDU4ZDgwIC8gMHgxMDAwMCxcclxuICAgIDB4NThlODAgLyAweDEwMDAwLFxyXG4gICAgMHg1OGY4MCAvIDB4MTAwMDAsXHJcbiAgICAweDU5MDgwIC8gMHgxMDAwMCxcclxuICAgIDB4NTkxNzAgLyAweDEwMDAwLFxyXG4gICAgMHg1OTI3MCAvIDB4MTAwMDAsXHJcbiAgICAweDU5MzcwIC8gMHgxMDAwMCxcclxuICAgIDB4NTk0NjAgLyAweDEwMDAwLFxyXG4gICAgMHg1OTU2MCAvIDB4MTAwMDAsXHJcbiAgICAweDU5NjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NTk3NDAgLyAweDEwMDAwLFxyXG4gICAgMHg1OTgzMCAvIDB4MTAwMDAsXHJcbiAgICAweDU5OTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NTlhMjAgLyAweDEwMDAwLFxyXG4gICAgMHg1OWIxMCAvIDB4MTAwMDAsXHJcbiAgICAweDU5YzAwIC8gMHgxMDAwMCxcclxuICAgIDB4NTljZjAgLyAweDEwMDAwLFxyXG4gICAgMHg1OWRlMCAvIDB4MTAwMDAsXHJcbiAgICAweDU5ZWQwIC8gMHgxMDAwMCxcclxuICAgIDB4NTlmYjAgLyAweDEwMDAwLFxyXG4gICAgMHg1YTBhMCAvIDB4MTAwMDAsXHJcbiAgICAweDVhMTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NWEyODAgLyAweDEwMDAwLFxyXG4gICAgMHg1YTM2MCAvIDB4MTAwMDAsXHJcbiAgICAweDVhNDUwIC8gMHgxMDAwMCxcclxuICAgIDB4NWE1MzAgLyAweDEwMDAwLFxyXG4gICAgMHg1YTYyMCAvIDB4MTAwMDAsXHJcbiAgICAweDVhNzAwIC8gMHgxMDAwMCxcclxuICAgIDB4NWE3ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg1YThkMCAvIDB4MTAwMDAsXHJcbiAgICAweDVhOWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NWFhOTAgLyAweDEwMDAwLFxyXG4gICAgMHg1YWI3MCAvIDB4MTAwMDAsXHJcbiAgICAweDVhYzUwIC8gMHgxMDAwMCxcclxuICAgIDB4NWFkMzAgLyAweDEwMDAwLFxyXG4gICAgMHg1YWUxMCAvIDB4MTAwMDAsXHJcbiAgICAweDVhZWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NWFmZDAgLyAweDEwMDAwLFxyXG4gICAgMHg1YjBiMCAvIDB4MTAwMDAsXHJcbiAgICAweDViMTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NWIyNzAgLyAweDEwMDAwLFxyXG4gICAgMHg1YjM1MCAvIDB4MTAwMDAsXHJcbiAgICAweDViNDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NWI1MDAgLyAweDEwMDAwLFxyXG4gICAgMHg1YjVkMCAvIDB4MTAwMDAsXHJcbiAgICAweDViNmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NWI3ODAgLyAweDEwMDAwLFxyXG4gICAgMHg1Yjg2MCAvIDB4MTAwMDAsXHJcbiAgICAweDViOTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NWJhMTAgLyAweDEwMDAwLFxyXG4gICAgMHg1YmFlMCAvIDB4MTAwMDAsXHJcbiAgICAweDViYmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NWJjOTAgLyAweDEwMDAwLFxyXG4gICAgMHg1YmQ2MCAvIDB4MTAwMDAsXHJcbiAgICAweDViZTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NWJmMDAgLyAweDEwMDAwLFxyXG4gICAgMHg1YmZkMCAvIDB4MTAwMDAsXHJcbiAgICAweDVjMGEwIC8gMHgxMDAwMCxcclxuICAgIDB4NWMxNzAgLyAweDEwMDAwLFxyXG4gICAgMHg1YzI0MCAvIDB4MTAwMDAsXHJcbiAgICAweDVjMzEwIC8gMHgxMDAwMCxcclxuICAgIDB4NWMzZTAgLyAweDEwMDAwLFxyXG4gICAgMHg1YzRiMCAvIDB4MTAwMDAsXHJcbiAgICAweDVjNTcwIC8gMHgxMDAwMCxcclxuICAgIDB4NWM2NDAgLyAweDEwMDAwLFxyXG4gICAgMHg1YzcxMCAvIDB4MTAwMDAsXHJcbiAgICAweDVjN2QwIC8gMHgxMDAwMCxcclxuICAgIDB4NWM4YTAgLyAweDEwMDAwLFxyXG4gICAgMHg1Yzk3MCAvIDB4MTAwMDAsXHJcbiAgICAweDVjYTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NWNiMDAgLyAweDEwMDAwLFxyXG4gICAgMHg1Y2JjMCAvIDB4MTAwMDAsXHJcbiAgICAweDVjYzkwIC8gMHgxMDAwMCxcclxuICAgIDB4NWNkNTAgLyAweDEwMDAwLFxyXG4gICAgMHg1Y2UxMCAvIDB4MTAwMDAsXHJcbiAgICAweDVjZWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NWNmYTAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZDA2MCAvIDB4MTAwMDAsXHJcbiAgICAweDVkMTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NWQxZjAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZDJiMCAvIDB4MTAwMDAsXHJcbiAgICAweDVkMzcwIC8gMHgxMDAwMCxcclxuICAgIDB4NWQ0MzAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZDRmMCAvIDB4MTAwMDAsXHJcbiAgICAweDVkNWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NWQ2NzAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZDczMCAvIDB4MTAwMDAsXHJcbiAgICAweDVkN2YwIC8gMHgxMDAwMCxcclxuICAgIDB4NWQ4YjAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZDk2MCAvIDB4MTAwMDAsXHJcbiAgICAweDVkYTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NWRhZTAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZGJhMCAvIDB4MTAwMDAsXHJcbiAgICAweDVkYzUwIC8gMHgxMDAwMCxcclxuICAgIDB4NWRkMTAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZGRkMCAvIDB4MTAwMDAsXHJcbiAgICAweDVkZTgwIC8gMHgxMDAwMCxcclxuICAgIDB4NWRmNDAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZGZmMCAvIDB4MTAwMDAsXHJcbiAgICAweDVlMGIwIC8gMHgxMDAwMCxcclxuICAgIDB4NWUxNjAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZTIyMCAvIDB4MTAwMDAsXHJcbiAgICAweDVlMmQwIC8gMHgxMDAwMCxcclxuICAgIDB4NWUzODAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZTQ0MCAvIDB4MTAwMDAsXHJcbiAgICAweDVlNGYwIC8gMHgxMDAwMCxcclxuICAgIDB4NWU1YTAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZTY1MCAvIDB4MTAwMDAsXHJcbiAgICAweDVlNzEwIC8gMHgxMDAwMCxcclxuICAgIDB4NWU3YzAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZTg3MCAvIDB4MTAwMDAsXHJcbiAgICAweDVlOTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NWU5ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZWE4MCAvIDB4MTAwMDAsXHJcbiAgICAweDVlYjMwIC8gMHgxMDAwMCxcclxuICAgIDB4NWViZTAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZWM5MCAvIDB4MTAwMDAsXHJcbiAgICAweDVlZDQwIC8gMHgxMDAwMCxcclxuICAgIDB4NWVkZjAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZWVhMCAvIDB4MTAwMDAsXHJcbiAgICAweDVlZjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NWYwMDAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZjBhMCAvIDB4MTAwMDAsXHJcbiAgICAweDVmMTUwIC8gMHgxMDAwMCxcclxuICAgIDB4NWYyMDAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZjJiMCAvIDB4MTAwMDAsXHJcbiAgICAweDVmMzUwIC8gMHgxMDAwMCxcclxuICAgIDB4NWY0MDAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZjRiMCAvIDB4MTAwMDAsXHJcbiAgICAweDVmNTUwIC8gMHgxMDAwMCxcclxuICAgIDB4NWY2MDAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZjZhMCAvIDB4MTAwMDAsXHJcbiAgICAweDVmNzUwIC8gMHgxMDAwMCxcclxuICAgIDB4NWY3ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZjhhMCAvIDB4MTAwMDAsXHJcbiAgICAweDVmOTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NWY5ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZmE5MCAvIDB4MTAwMDAsXHJcbiAgICAweDVmYjMwIC8gMHgxMDAwMCxcclxuICAgIDB4NWZiZTAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZmM4MCAvIDB4MTAwMDAsXHJcbiAgICAweDVmZDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NWZkZDAgLyAweDEwMDAwLFxyXG4gICAgMHg1ZmU3MCAvIDB4MTAwMDAsXHJcbiAgICAweDVmZjEwIC8gMHgxMDAwMCxcclxuICAgIDB4NWZmYjAgLyAweDEwMDAwLFxyXG4gICAgMHg2MDA1MCAvIDB4MTAwMDAsXHJcbiAgICAweDYwMGYwIC8gMHgxMDAwMCxcclxuICAgIDB4NjAxYTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MDI0MCAvIDB4MTAwMDAsXHJcbiAgICAweDYwMmUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjAzODAgLyAweDEwMDAwLFxyXG4gICAgMHg2MDQyMCAvIDB4MTAwMDAsXHJcbiAgICAweDYwNGMwIC8gMHgxMDAwMCxcclxuICAgIDB4NjA1NjAgLyAweDEwMDAwLFxyXG4gICAgMHg2MDYwMCAvIDB4MTAwMDAsXHJcbiAgICAweDYwNjkwIC8gMHgxMDAwMCxcclxuICAgIDB4NjA3MzAgLyAweDEwMDAwLFxyXG4gICAgMHg2MDdkMCAvIDB4MTAwMDAsXHJcbiAgICAweDYwODcwIC8gMHgxMDAwMCxcclxuICAgIDB4NjA5MTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MDliMCAvIDB4MTAwMDAsXHJcbiAgICAweDYwYTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NjBhZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MGI4MCAvIDB4MTAwMDAsXHJcbiAgICAweDYwYzIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjBjYjAgLyAweDEwMDAwLFxyXG4gICAgMHg2MGQ1MCAvIDB4MTAwMDAsXHJcbiAgICAweDYwZGUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjBlODAgLyAweDEwMDAwLFxyXG4gICAgMHg2MGYyMCAvIDB4MTAwMDAsXHJcbiAgICAweDYwZmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjEwNTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MTBlMCAvIDB4MTAwMDAsXHJcbiAgICAweDYxMTgwIC8gMHgxMDAwMCxcclxuICAgIDB4NjEyMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MTJiMCAvIDB4MTAwMDAsXHJcbiAgICAweDYxMzQwIC8gMHgxMDAwMCxcclxuICAgIDB4NjEzZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MTQ3MCAvIDB4MTAwMDAsXHJcbiAgICAweDYxNTAwIC8gMHgxMDAwMCxcclxuICAgIDB4NjE1YTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MTYzMCAvIDB4MTAwMDAsXHJcbiAgICAweDYxNmMwIC8gMHgxMDAwMCxcclxuICAgIDB4NjE3NjAgLyAweDEwMDAwLFxyXG4gICAgMHg2MTdmMCAvIDB4MTAwMDAsXHJcbiAgICAweDYxODgwIC8gMHgxMDAwMCxcclxuICAgIDB4NjE5MTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MTlhMCAvIDB4MTAwMDAsXHJcbiAgICAweDYxYTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NjFhZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2MWI2MCAvIDB4MTAwMDAsXHJcbiAgICAweDYxYmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NjFjODAgLyAweDEwMDAwLFxyXG4gICAgMHg2MWQxMCAvIDB4MTAwMDAsXHJcbiAgICAweDYxZGEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjFlMzAgLyAweDEwMDAwLFxyXG4gICAgMHg2MWVjMCAvIDB4MTAwMDAsXHJcbiAgICAweDYxZjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjFmZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MjA3MCAvIDB4MTAwMDAsXHJcbiAgICAweDYyMTAwIC8gMHgxMDAwMCxcclxuICAgIDB4NjIxOTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MjIyMCAvIDB4MTAwMDAsXHJcbiAgICAweDYyMmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjIzNDAgLyAweDEwMDAwLFxyXG4gICAgMHg2MjNjMCAvIDB4MTAwMDAsXHJcbiAgICAweDYyNDUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjI0ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MjU3MCAvIDB4MTAwMDAsXHJcbiAgICAweDYyNjAwIC8gMHgxMDAwMCxcclxuICAgIDB4NjI2ODAgLyAweDEwMDAwLFxyXG4gICAgMHg2MjcxMCAvIDB4MTAwMDAsXHJcbiAgICAweDYyN2EwIC8gMHgxMDAwMCxcclxuICAgIDB4NjI4MjAgLyAweDEwMDAwLFxyXG4gICAgMHg2MjhiMCAvIDB4MTAwMDAsXHJcbiAgICAweDYyOTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NjI5YzAgLyAweDEwMDAwLFxyXG4gICAgMHg2MmE1MCAvIDB4MTAwMDAsXHJcbiAgICAweDYyYWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjJiNjAgLyAweDEwMDAwLFxyXG4gICAgMHg2MmJmMCAvIDB4MTAwMDAsXHJcbiAgICAweDYyYzcwIC8gMHgxMDAwMCxcclxuICAgIDB4NjJkMDAgLyAweDEwMDAwLFxyXG4gICAgMHg2MmQ4MCAvIDB4MTAwMDAsXHJcbiAgICAweDYyZTEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjJlOTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MmYyMCAvIDB4MTAwMDAsXHJcbiAgICAweDYyZmEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjMwMzAgLyAweDEwMDAwLFxyXG4gICAgMHg2MzBiMCAvIDB4MTAwMDAsXHJcbiAgICAweDYzMTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NjMxYzAgLyAweDEwMDAwLFxyXG4gICAgMHg2MzI0MCAvIDB4MTAwMDAsXHJcbiAgICAweDYzMmMwIC8gMHgxMDAwMCxcclxuICAgIDB4NjMzNTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MzNkMCAvIDB4MTAwMDAsXHJcbiAgICAweDYzNDUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjM0ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2MzU2MCAvIDB4MTAwMDAsXHJcbiAgICAweDYzNWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjM2NjAgLyAweDEwMDAwLFxyXG4gICAgMHg2MzZmMCAvIDB4MTAwMDAsXHJcbiAgICAweDYzNzcwIC8gMHgxMDAwMCxcclxuICAgIDB4NjM3ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2Mzg3MCAvIDB4MTAwMDAsXHJcbiAgICAweDYzOGYwIC8gMHgxMDAwMCxcclxuICAgIDB4NjM5NzAgLyAweDEwMDAwLFxyXG4gICAgMHg2MzlmMCAvIDB4MTAwMDAsXHJcbiAgICAweDYzYTcwIC8gMHgxMDAwMCxcclxuICAgIDB4NjNiMDAgLyAweDEwMDAwLFxyXG4gICAgMHg2M2I4MCAvIDB4MTAwMDAsXHJcbiAgICAweDYzYzAwIC8gMHgxMDAwMCxcclxuICAgIDB4NjNjODAgLyAweDEwMDAwLFxyXG4gICAgMHg2M2QwMCAvIDB4MTAwMDAsXHJcbiAgICAweDYzZDgwIC8gMHgxMDAwMCxcclxuICAgIDB4NjNlMDAgLyAweDEwMDAwLFxyXG4gICAgMHg2M2U4MCAvIDB4MTAwMDAsXHJcbiAgICAweDYzZjAwIC8gMHgxMDAwMCxcclxuICAgIDB4NjNmNzAgLyAweDEwMDAwLFxyXG4gICAgMHg2M2ZmMCAvIDB4MTAwMDAsXHJcbiAgICAweDY0MDcwIC8gMHgxMDAwMCxcclxuICAgIDB4NjQwZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2NDE3MCAvIDB4MTAwMDAsXHJcbiAgICAweDY0MWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NjQyNzAgLyAweDEwMDAwLFxyXG4gICAgMHg2NDJmMCAvIDB4MTAwMDAsXHJcbiAgICAweDY0MzYwIC8gMHgxMDAwMCxcclxuICAgIDB4NjQzZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NDQ2MCAvIDB4MTAwMDAsXHJcbiAgICAweDY0NGUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjQ1NTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NDVkMCAvIDB4MTAwMDAsXHJcbiAgICAweDY0NjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjQ2ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2NDc0MCAvIDB4MTAwMDAsXHJcbiAgICAweDY0N2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NjQ4NDAgLyAweDEwMDAwLFxyXG4gICAgMHg2NDhiMCAvIDB4MTAwMDAsXHJcbiAgICAweDY0OTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NjQ5YjAgLyAweDEwMDAwLFxyXG4gICAgMHg2NGEyMCAvIDB4MTAwMDAsXHJcbiAgICAweDY0YWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjRiMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NGI5MCAvIDB4MTAwMDAsXHJcbiAgICAweDY0YzAwIC8gMHgxMDAwMCxcclxuICAgIDB4NjRjODAgLyAweDEwMDAwLFxyXG4gICAgMHg2NGQwMCAvIDB4MTAwMDAsXHJcbiAgICAweDY0ZDcwIC8gMHgxMDAwMCxcclxuICAgIDB4NjRkZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2NGU2MCAvIDB4MTAwMDAsXHJcbiAgICAweDY0ZWQwIC8gMHgxMDAwMCxcclxuICAgIDB4NjRmNTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NGZjMCAvIDB4MTAwMDAsXHJcbiAgICAweDY1MDQwIC8gMHgxMDAwMCxcclxuICAgIDB4NjUwYjAgLyAweDEwMDAwLFxyXG4gICAgMHg2NTEzMCAvIDB4MTAwMDAsXHJcbiAgICAweDY1MWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjUyMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NTI5MCAvIDB4MTAwMDAsXHJcbiAgICAweDY1MzAwIC8gMHgxMDAwMCxcclxuICAgIDB4NjUzNzAgLyAweDEwMDAwLFxyXG4gICAgMHg2NTNmMCAvIDB4MTAwMDAsXHJcbiAgICAweDY1NDYwIC8gMHgxMDAwMCxcclxuICAgIDB4NjU0ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2NTU1MCAvIDB4MTAwMDAsXHJcbiAgICAweDY1NWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NjU2MzAgLyAweDEwMDAwLFxyXG4gICAgMHg2NTZhMCAvIDB4MTAwMDAsXHJcbiAgICAweDY1NzIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjU3OTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NTgwMCAvIDB4MTAwMDAsXHJcbiAgICAweDY1ODcwIC8gMHgxMDAwMCxcclxuICAgIDB4NjU4ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NTk2MCAvIDB4MTAwMDAsXHJcbiAgICAweDY1OWQwIC8gMHgxMDAwMCxcclxuICAgIDB4NjVhNDAgLyAweDEwMDAwLFxyXG4gICAgMHg2NWFiMCAvIDB4MTAwMDAsXHJcbiAgICAweDY1YjIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjViOTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NWMwMCAvIDB4MTAwMDAsXHJcbiAgICAweDY1YzcwIC8gMHgxMDAwMCxcclxuICAgIDB4NjVjZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NWQ2MCAvIDB4MTAwMDAsXHJcbiAgICAweDY1ZGQwIC8gMHgxMDAwMCxcclxuICAgIDB4NjVlNDAgLyAweDEwMDAwLFxyXG4gICAgMHg2NWViMCAvIDB4MTAwMDAsXHJcbiAgICAweDY1ZjIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjVmOTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NjAwMCAvIDB4MTAwMDAsXHJcbiAgICAweDY2MDcwIC8gMHgxMDAwMCxcclxuICAgIDB4NjYwZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NjE0MCAvIDB4MTAwMDAsXHJcbiAgICAweDY2MWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjYyMjAgLyAweDEwMDAwLFxyXG4gICAgMHg2NjI5MCAvIDB4MTAwMDAsXHJcbiAgICAweDY2MzAwIC8gMHgxMDAwMCxcclxuICAgIDB4NjYzNzAgLyAweDEwMDAwLFxyXG4gICAgMHg2NjNlMCAvIDB4MTAwMDAsXHJcbiAgICAweDY2NDUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjY0YzAgLyAweDEwMDAwLFxyXG4gICAgMHg2NjUyMCAvIDB4MTAwMDAsXHJcbiAgICAweDY2NTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NjY2MDAgLyAweDEwMDAwLFxyXG4gICAgMHg2NjY3MCAvIDB4MTAwMDAsXHJcbiAgICAweDY2NmUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjY3NTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NjdiMCAvIDB4MTAwMDAsXHJcbiAgICAweDY2ODIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjY4OTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NjkwMCAvIDB4MTAwMDAsXHJcbiAgICAweDY2OTYwIC8gMHgxMDAwMCxcclxuICAgIDB4NjY5ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2NmE0MCAvIDB4MTAwMDAsXHJcbiAgICAweDY2YWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjZiMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NmI4MCAvIDB4MTAwMDAsXHJcbiAgICAweDY2YmUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjZjNTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NmNjMCAvIDB4MTAwMDAsXHJcbiAgICAweDY2ZDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjZkOTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NmUwMCAvIDB4MTAwMDAsXHJcbiAgICAweDY2ZTYwIC8gMHgxMDAwMCxcclxuICAgIDB4NjZlZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2NmYzMCAvIDB4MTAwMDAsXHJcbiAgICAweDY2ZmEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjcwMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NzA3MCAvIDB4MTAwMDAsXHJcbiAgICAweDY3MGUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjcxNDAgLyAweDEwMDAwLFxyXG4gICAgMHg2NzFiMCAvIDB4MTAwMDAsXHJcbiAgICAweDY3MjEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjcyODAgLyAweDEwMDAwLFxyXG4gICAgMHg2NzJlMCAvIDB4MTAwMDAsXHJcbiAgICAweDY3MzUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjczYjAgLyAweDEwMDAwLFxyXG4gICAgMHg2NzQyMCAvIDB4MTAwMDAsXHJcbiAgICAweDY3NDgwIC8gMHgxMDAwMCxcclxuICAgIDB4Njc0ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NzU1MCAvIDB4MTAwMDAsXHJcbiAgICAweDY3NWIwIC8gMHgxMDAwMCxcclxuICAgIDB4Njc2MjAgLyAweDEwMDAwLFxyXG4gICAgMHg2NzY4MCAvIDB4MTAwMDAsXHJcbiAgICAweDY3NmUwIC8gMHgxMDAwMCxcclxuICAgIDB4Njc3NTAgLyAweDEwMDAwLFxyXG4gICAgMHg2NzdiMCAvIDB4MTAwMDAsXHJcbiAgICAweDY3ODIwIC8gMHgxMDAwMCxcclxuICAgIDB4Njc4ODAgLyAweDEwMDAwLFxyXG4gICAgMHg2NzhlMCAvIDB4MTAwMDAsXHJcbiAgICAweDY3OTUwIC8gMHgxMDAwMCxcclxuICAgIDB4Njc5YjAgLyAweDEwMDAwLFxyXG4gICAgMHg2N2ExMCAvIDB4MTAwMDAsXHJcbiAgICAweDY3YTcwIC8gMHgxMDAwMCxcclxuICAgIDB4NjdhZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2N2I0MCAvIDB4MTAwMDAsXHJcbiAgICAweDY3YmEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjdjMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2N2M3MCAvIDB4MTAwMDAsXHJcbiAgICAweDY3Y2QwIC8gMHgxMDAwMCxcclxuICAgIDB4NjdkMzAgLyAweDEwMDAwLFxyXG4gICAgMHg2N2RhMCAvIDB4MTAwMDAsXHJcbiAgICAweDY3ZTAwIC8gMHgxMDAwMCxcclxuICAgIDB4NjdlNjAgLyAweDEwMDAwLFxyXG4gICAgMHg2N2VjMCAvIDB4MTAwMDAsXHJcbiAgICAweDY3ZjIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjdmODAgLyAweDEwMDAwLFxyXG4gICAgMHg2N2ZmMCAvIDB4MTAwMDAsXHJcbiAgICAweDY4MDUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjgwYjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ODExMCAvIDB4MTAwMDAsXHJcbiAgICAweDY4MTcwIC8gMHgxMDAwMCxcclxuICAgIDB4NjgxZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2ODIzMCAvIDB4MTAwMDAsXHJcbiAgICAweDY4MmEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjgzMDAgLyAweDEwMDAwLFxyXG4gICAgMHg2ODM2MCAvIDB4MTAwMDAsXHJcbiAgICAweDY4M2MwIC8gMHgxMDAwMCxcclxuICAgIDB4Njg0MjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ODQ4MCAvIDB4MTAwMDAsXHJcbiAgICAweDY4NGUwIC8gMHgxMDAwMCxcclxuICAgIDB4Njg1NDAgLyAweDEwMDAwLFxyXG4gICAgMHg2ODVhMCAvIDB4MTAwMDAsXHJcbiAgICAweDY4NjAwIC8gMHgxMDAwMCxcclxuICAgIDB4Njg2NjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ODZjMCAvIDB4MTAwMDAsXHJcbiAgICAweDY4NzIwIC8gMHgxMDAwMCxcclxuICAgIDB4Njg3ODAgLyAweDEwMDAwLFxyXG4gICAgMHg2ODdlMCAvIDB4MTAwMDAsXHJcbiAgICAweDY4ODQwIC8gMHgxMDAwMCxcclxuICAgIDB4Njg4YTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ODkwMCAvIDB4MTAwMDAsXHJcbiAgICAweDY4OTYwIC8gMHgxMDAwMCxcclxuICAgIDB4Njg5YzAgLyAweDEwMDAwLFxyXG4gICAgMHg2OGEyMCAvIDB4MTAwMDAsXHJcbiAgICAweDY4YTgwIC8gMHgxMDAwMCxcclxuICAgIDB4NjhhZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2OGIzMCAvIDB4MTAwMDAsXHJcbiAgICAweDY4YjkwIC8gMHgxMDAwMCxcclxuICAgIDB4NjhiZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2OGM1MCAvIDB4MTAwMDAsXHJcbiAgICAweDY4Y2IwIC8gMHgxMDAwMCxcclxuICAgIDB4NjhkMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2OGQ3MCAvIDB4MTAwMDAsXHJcbiAgICAweDY4ZGMwIC8gMHgxMDAwMCxcclxuICAgIDB4NjhlMjAgLyAweDEwMDAwLFxyXG4gICAgMHg2OGU4MCAvIDB4MTAwMDAsXHJcbiAgICAweDY4ZWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NjhmNDAgLyAweDEwMDAwLFxyXG4gICAgMHg2OGY5MCAvIDB4MTAwMDAsXHJcbiAgICAweDY4ZmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NjkwNTAgLyAweDEwMDAwLFxyXG4gICAgMHg2OTBiMCAvIDB4MTAwMDAsXHJcbiAgICAweDY5MTEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjkxNjAgLyAweDEwMDAwLFxyXG4gICAgMHg2OTFjMCAvIDB4MTAwMDAsXHJcbiAgICAweDY5MjIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjkyODAgLyAweDEwMDAwLFxyXG4gICAgMHg2OTJkMCAvIDB4MTAwMDAsXHJcbiAgICAweDY5MzMwIC8gMHgxMDAwMCxcclxuICAgIDB4NjkzOTAgLyAweDEwMDAwLFxyXG4gICAgMHg2OTNlMCAvIDB4MTAwMDAsXHJcbiAgICAweDY5NDQwIC8gMHgxMDAwMCxcclxuICAgIDB4Njk0YTAgLyAweDEwMDAwLFxyXG4gICAgMHg2OTRmMCAvIDB4MTAwMDAsXHJcbiAgICAweDY5NTUwIC8gMHgxMDAwMCxcclxuICAgIDB4Njk1YjAgLyAweDEwMDAwLFxyXG4gICAgMHg2OTYwMCAvIDB4MTAwMDAsXHJcbiAgICAweDY5NjYwIC8gMHgxMDAwMCxcclxuICAgIDB4Njk2YzAgLyAweDEwMDAwLFxyXG4gICAgMHg2OTcxMCAvIDB4MTAwMDAsXHJcbiAgICAweDY5NzcwIC8gMHgxMDAwMCxcclxuICAgIDB4Njk3ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2OTgyMCAvIDB4MTAwMDAsXHJcbiAgICAweDY5ODgwIC8gMHgxMDAwMCxcclxuICAgIDB4Njk4ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2OTkzMCAvIDB4MTAwMDAsXHJcbiAgICAweDY5OTkwIC8gMHgxMDAwMCxcclxuICAgIDB4Njk5ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2OWE0MCAvIDB4MTAwMDAsXHJcbiAgICAweDY5YTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NjlhZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2OWI0MCAvIDB4MTAwMDAsXHJcbiAgICAweDY5YmEwIC8gMHgxMDAwMCxcclxuICAgIDB4NjliZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2OWM1MCAvIDB4MTAwMDAsXHJcbiAgICAweDY5Y2EwIC8gMHgxMDAwMCxcclxuICAgIDB4NjlkMDAgLyAweDEwMDAwLFxyXG4gICAgMHg2OWQ1MCAvIDB4MTAwMDAsXHJcbiAgICAweDY5ZGIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjllMDAgLyAweDEwMDAwLFxyXG4gICAgMHg2OWU2MCAvIDB4MTAwMDAsXHJcbiAgICAweDY5ZWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NjlmMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2OWY2MCAvIDB4MTAwMDAsXHJcbiAgICAweDY5ZmMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmEwMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YTA3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhMGMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmExMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YTE3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhMWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmEyMjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YTI3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhMmMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmEzMjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YTM3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhM2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NmE0MjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YTQ3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhNGMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmE1MjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YTU3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhNWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmE2MjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YTY3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhNmMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmE3MjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YTc3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhN2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NmE4MTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YTg3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhOGMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmE5MTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YTk2MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhOWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmFhMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YWE2MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhYWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmFiMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YWI2MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhYmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmFjMDAgLyAweDEwMDAwLFxyXG4gICAgMHg2YWM1MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhY2IwIC8gMHgxMDAwMCxcclxuICAgIDB4NmFkMDAgLyAweDEwMDAwLFxyXG4gICAgMHg2YWQ1MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhZGEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmFkZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YWU0MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhZTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NmFlZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YWY0MCAvIDB4MTAwMDAsXHJcbiAgICAweDZhZjkwIC8gMHgxMDAwMCxcclxuICAgIDB4NmFmZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YjAzMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiMDgwIC8gMHgxMDAwMCxcclxuICAgIDB4NmIwZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2YjEyMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiMTcwIC8gMHgxMDAwMCxcclxuICAgIDB4NmIxYzAgLyAweDEwMDAwLFxyXG4gICAgMHg2YjIxMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiMjcwIC8gMHgxMDAwMCxcclxuICAgIDB4NmIyYzAgLyAweDEwMDAwLFxyXG4gICAgMHg2YjMxMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiMzYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmIzYjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YjQwMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiNDUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmI0YTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YjRmMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiNTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NmI1OTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YjVlMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiNjMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmI2ODAgLyAweDEwMDAwLFxyXG4gICAgMHg2YjZkMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiNzIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmI3NzAgLyAweDEwMDAwLFxyXG4gICAgMHg2YjdjMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiODEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmI4NjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YjhhMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiOGYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmI5NDAgLyAweDEwMDAwLFxyXG4gICAgMHg2Yjk5MCAvIDB4MTAwMDAsXHJcbiAgICAweDZiOWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmJhMzAgLyAweDEwMDAwLFxyXG4gICAgMHg2YmE4MCAvIDB4MTAwMDAsXHJcbiAgICAweDZiYWQwIC8gMHgxMDAwMCxcclxuICAgIDB4NmJiMjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YmI3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZiYmMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmJjMDAgLyAweDEwMDAwLFxyXG4gICAgMHg2YmM1MCAvIDB4MTAwMDAsXHJcbiAgICAweDZiY2EwIC8gMHgxMDAwMCxcclxuICAgIDB4NmJjZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YmQ0MCAvIDB4MTAwMDAsXHJcbiAgICAweDZiZDkwIC8gMHgxMDAwMCxcclxuICAgIDB4NmJkZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YmUyMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiZTcwIC8gMHgxMDAwMCxcclxuICAgIDB4NmJlYzAgLyAweDEwMDAwLFxyXG4gICAgMHg2YmYxMCAvIDB4MTAwMDAsXHJcbiAgICAweDZiZjYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmJmYTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YmZmMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjMDQwIC8gMHgxMDAwMCxcclxuICAgIDB4NmMwOTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YzBlMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjMTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmMxNzAgLyAweDEwMDAwLFxyXG4gICAgMHg2YzFjMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjMjEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmMyNTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YzJhMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjMmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmMzNDAgLyAweDEwMDAwLFxyXG4gICAgMHg2YzM4MCAvIDB4MTAwMDAsXHJcbiAgICAweDZjM2QwIC8gMHgxMDAwMCxcclxuICAgIDB4NmM0MjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YzQ3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZjNGIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmM1MDAgLyAweDEwMDAwLFxyXG4gICAgMHg2YzU1MCAvIDB4MTAwMDAsXHJcbiAgICAweDZjNTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NmM1ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YzYzMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjNjcwIC8gMHgxMDAwMCxcclxuICAgIDB4NmM2YzAgLyAweDEwMDAwLFxyXG4gICAgMHg2YzcxMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjNzUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmM3YTAgLyAweDEwMDAwLFxyXG4gICAgMHg2YzdmMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjODMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmM4ODAgLyAweDEwMDAwLFxyXG4gICAgMHg2YzhkMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjOTEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmM5NjAgLyAweDEwMDAwLFxyXG4gICAgMHg2YzliMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjOWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmNhNDAgLyAweDEwMDAwLFxyXG4gICAgMHg2Y2E4MCAvIDB4MTAwMDAsXHJcbiAgICAweDZjYWQwIC8gMHgxMDAwMCxcclxuICAgIDB4NmNiMjAgLyAweDEwMDAwLFxyXG4gICAgMHg2Y2I2MCAvIDB4MTAwMDAsXHJcbiAgICAweDZjYmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmNiZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2Y2M0MCAvIDB4MTAwMDAsXHJcbiAgICAweDZjYzgwIC8gMHgxMDAwMCxcclxuICAgIDB4NmNjZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2Y2QyMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjZDYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmNkYjAgLyAweDEwMDAwLFxyXG4gICAgMHg2Y2RmMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjZTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NmNlODAgLyAweDEwMDAwLFxyXG4gICAgMHg2Y2VkMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjZjEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmNmNjAgLyAweDEwMDAwLFxyXG4gICAgMHg2Y2ZhMCAvIDB4MTAwMDAsXHJcbiAgICAweDZjZmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQwMzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDA4MCAvIDB4MTAwMDAsXHJcbiAgICAweDZkMGMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQxMTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDE1MCAvIDB4MTAwMDAsXHJcbiAgICAweDZkMWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQxZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDIzMCAvIDB4MTAwMDAsXHJcbiAgICAweDZkMjcwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQyYzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDMwMCAvIDB4MTAwMDAsXHJcbiAgICAweDZkMzUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQzOTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDNkMCAvIDB4MTAwMDAsXHJcbiAgICAweDZkNDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQ0NjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDRiMCAvIDB4MTAwMDAsXHJcbiAgICAweDZkNGYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQ1NDAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDU4MCAvIDB4MTAwMDAsXHJcbiAgICAweDZkNWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQ2MTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDY1MCAvIDB4MTAwMDAsXHJcbiAgICAweDZkNmEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQ2ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDcyMCAvIDB4MTAwMDAsXHJcbiAgICAweDZkNzcwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQ3YjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDdmMCAvIDB4MTAwMDAsXHJcbiAgICAweDZkODQwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQ4ODAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDhkMCAvIDB4MTAwMDAsXHJcbiAgICAweDZkOTEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmQ5NTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZDlhMCAvIDB4MTAwMDAsXHJcbiAgICAweDZkOWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmRhMjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZGE3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZkYWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmRhZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZGI0MCAvIDB4MTAwMDAsXHJcbiAgICAweDZkYjgwIC8gMHgxMDAwMCxcclxuICAgIDB4NmRiYzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZGMwMCAvIDB4MTAwMDAsXHJcbiAgICAweDZkYzUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmRjOTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZGNkMCAvIDB4MTAwMDAsXHJcbiAgICAweDZkZDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmRkNjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZGRhMCAvIDB4MTAwMDAsXHJcbiAgICAweDZkZGUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmRlMzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZGU3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZkZWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmRlZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZGY0MCAvIDB4MTAwMDAsXHJcbiAgICAweDZkZjgwIC8gMHgxMDAwMCxcclxuICAgIDB4NmRmYzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTAwMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlMDUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmUwOTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTBkMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlMTEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmUxNjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTFhMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlMWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmUyMjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTI2MCAvIDB4MTAwMDAsXHJcbiAgICAweDZlMmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmUyZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTMzMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlMzcwIC8gMHgxMDAwMCxcclxuICAgIDB4NmUzYjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTNmMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlNDQwIC8gMHgxMDAwMCxcclxuICAgIDB4NmU0ODAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTRjMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlNTAwIC8gMHgxMDAwMCxcclxuICAgIDB4NmU1NDAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTU4MCAvIDB4MTAwMDAsXHJcbiAgICAweDZlNWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmU2MTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTY1MCAvIDB4MTAwMDAsXHJcbiAgICAweDZlNjkwIC8gMHgxMDAwMCxcclxuICAgIDB4NmU2ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTcxMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlNzUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmU3OTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTdkMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlODIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmU4NjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZThhMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlOGUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmU5MjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZTk2MCAvIDB4MTAwMDAsXHJcbiAgICAweDZlOWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmU5ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZWEyMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlYTYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmVhYTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZWFlMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlYjIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmViNzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZWJiMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlYmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmVjMzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZWM3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZlY2IwIC8gMHgxMDAwMCxcclxuICAgIDB4NmVjZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZWQzMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlZDcwIC8gMHgxMDAwMCxcclxuICAgIDB4NmVkYjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZWRmMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlZTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmVlNzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZWViMCAvIDB4MTAwMDAsXHJcbiAgICAweDZlZWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmVmMzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZWY3MCAvIDB4MTAwMDAsXHJcbiAgICAweDZlZmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmVmZjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjAzMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmMDcwIC8gMHgxMDAwMCxcclxuICAgIDB4NmYwYjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjBmMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmMTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmYxNzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjFhMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmMWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmYyMjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjI2MCAvIDB4MTAwMDAsXHJcbiAgICAweDZmMmEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmYyZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjMyMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmMzYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmYzYTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjNlMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmNDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NmY0NjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjRhMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmNGUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmY1MTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjU1MCAvIDB4MTAwMDAsXHJcbiAgICAweDZmNTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NmY1ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjYxMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmNjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmY2OTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjZkMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmNzAwIC8gMHgxMDAwMCxcclxuICAgIDB4NmY3NDAgLyAweDEwMDAwLFxyXG4gICAgMHg2Zjc4MCAvIDB4MTAwMDAsXHJcbiAgICAweDZmN2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NmY4MDAgLyAweDEwMDAwLFxyXG4gICAgMHg2Zjg0MCAvIDB4MTAwMDAsXHJcbiAgICAweDZmODgwIC8gMHgxMDAwMCxcclxuICAgIDB4NmY4YjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjhmMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmOTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmY5NzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZjliMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmOWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmZhMjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZmE2MCAvIDB4MTAwMDAsXHJcbiAgICAweDZmYWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmZhZTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZmIyMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmYjYwIC8gMHgxMDAwMCxcclxuICAgIDB4NmZiOTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZmJkMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmYzEwIC8gMHgxMDAwMCxcclxuICAgIDB4NmZjNTAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZmM4MCAvIDB4MTAwMDAsXHJcbiAgICAweDZmY2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NmZkMDAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZmQ0MCAvIDB4MTAwMDAsXHJcbiAgICAweDZmZDgwIC8gMHgxMDAwMCxcclxuICAgIDB4NmZkYjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZmRmMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmZTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NmZlNzAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZmVhMCAvIDB4MTAwMDAsXHJcbiAgICAweDZmZWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NmZmMjAgLyAweDEwMDAwLFxyXG4gICAgMHg2ZmY2MCAvIDB4MTAwMDAsXHJcbiAgICAweDZmZjkwIC8gMHgxMDAwMCxcclxuICAgIDB4NmZmZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDAxMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwMDUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzAwODAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDBjMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwMTAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzAxMzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDE3MCAvIDB4MTAwMDAsXHJcbiAgICAweDcwMWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzAxZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDIyMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwMjYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzAyYTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDJkMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwMzEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzAzNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDM4MCAvIDB4MTAwMDAsXHJcbiAgICAweDcwM2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NzA0MDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDQ0MCAvIDB4MTAwMDAsXHJcbiAgICAweDcwNDcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzA0YjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDRmMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwNTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzA1NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDVhMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwNWQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzA2MTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDY0MCAvIDB4MTAwMDAsXHJcbiAgICAweDcwNjgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzA2YzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDZmMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwNzMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzA3NzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDdhMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwN2UwIC8gMHgxMDAwMCxcclxuICAgIDB4NzA4MjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDg1MCAvIDB4MTAwMDAsXHJcbiAgICAweDcwODkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzA4YzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDkwMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwOTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzA5NzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MDliMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwOWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzBhMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MGE2MCAvIDB4MTAwMDAsXHJcbiAgICAweDcwYTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzBhZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MGIwMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwYjQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzBiNzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MGJiMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwYmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzBjMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MGM2MCAvIDB4MTAwMDAsXHJcbiAgICAweDcwYzkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzBjZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MGQwMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwZDQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzBkNzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MGRiMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwZGYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzBlMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MGU2MCAvIDB4MTAwMDAsXHJcbiAgICAweDcwZTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzBlZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MGYwMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwZjQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzBmNzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MGZiMCAvIDB4MTAwMDAsXHJcbiAgICAweDcwZmUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzEwMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTA1MCAvIDB4MTAwMDAsXHJcbiAgICAweDcxMDkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzEwYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTEwMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxMTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzExNzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTFhMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxMWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzEyMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTI1MCAvIDB4MTAwMDAsXHJcbiAgICAweDcxMjgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzEyYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTJmMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxMzMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzEzNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTM5MCAvIDB4MTAwMDAsXHJcbiAgICAweDcxM2QwIC8gMHgxMDAwMCxcclxuICAgIDB4NzE0MDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTQ0MCAvIDB4MTAwMDAsXHJcbiAgICAweDcxNDcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzE0YjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTRlMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxNTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzE1NTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTU4MCAvIDB4MTAwMDAsXHJcbiAgICAweDcxNWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzE1ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTYzMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxNjYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzE2YTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTZkMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxNzAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzE3NDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTc3MCAvIDB4MTAwMDAsXHJcbiAgICAweDcxN2IwIC8gMHgxMDAwMCxcclxuICAgIDB4NzE3ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTgxMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxODUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzE4ODAgLyAweDEwMDAwLFxyXG4gICAgMHg3MThjMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxOGYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzE5MjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MTk2MCAvIDB4MTAwMDAsXHJcbiAgICAweDcxOTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzE5ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MWEwMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxYTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzFhNzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MWFhMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxYWQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzFiMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MWI0MCAvIDB4MTAwMDAsXHJcbiAgICAweDcxYjgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzFiYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MWJlMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxYzIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzFjNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MWM4MCAvIDB4MTAwMDAsXHJcbiAgICAweDcxY2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NzFjZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MWQyMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxZDYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzFkOTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MWRjMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxZTAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzFlMzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MWU2MCAvIDB4MTAwMDAsXHJcbiAgICAweDcxZWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzFlZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MWYwMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxZjMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzFmNzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MWZhMCAvIDB4MTAwMDAsXHJcbiAgICAweDcxZmQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzIwMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjA0MCAvIDB4MTAwMDAsXHJcbiAgICAweDcyMDcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzIwYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjBlMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyMTEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzIxNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjE4MCAvIDB4MTAwMDAsXHJcbiAgICAweDcyMWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzIxZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjIxMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyMjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzIyODAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjJiMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyMmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzIzMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjM1MCAvIDB4MTAwMDAsXHJcbiAgICAweDcyMzgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzIzYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjNmMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyNDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzI0NTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjQ5MCAvIDB4MTAwMDAsXHJcbiAgICAweDcyNGMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzI0ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjUyMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyNTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzI1OTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjVjMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyNWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzI2MjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjY2MCAvIDB4MTAwMDAsXHJcbiAgICAweDcyNjkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzI2YzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjZmMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyNzIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzI3NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3Mjc5MCAvIDB4MTAwMDAsXHJcbiAgICAweDcyN2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NzI3ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjgyMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyODYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzI4OTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjhjMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyOGYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzI5MjAgLyAweDEwMDAwLFxyXG4gICAgMHg3Mjk2MCAvIDB4MTAwMDAsXHJcbiAgICAweDcyOTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzI5YzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MjlmMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyYTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzJhNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MmE5MCAvIDB4MTAwMDAsXHJcbiAgICAweDcyYWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzJhZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MmIyMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyYjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzJiODAgLyAweDEwMDAwLFxyXG4gICAgMHg3MmJiMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyYmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzJjMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MmM1MCAvIDB4MTAwMDAsXHJcbiAgICAweDcyYzgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzJjYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MmNlMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyZDEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzJkNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MmQ4MCAvIDB4MTAwMDAsXHJcbiAgICAweDcyZGIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzJkZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MmUxMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyZTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzJlNzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MmVhMCAvIDB4MTAwMDAsXHJcbiAgICAweDcyZWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzJmMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MmY0MCAvIDB4MTAwMDAsXHJcbiAgICAweDcyZjcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzJmYTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MmZkMCAvIDB4MTAwMDAsXHJcbiAgICAweDczMDAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzMwMzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzA2MCAvIDB4MTAwMDAsXHJcbiAgICAweDczMDkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzMwZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzEwMCAvIDB4MTAwMDAsXHJcbiAgICAweDczMTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzMxNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzE5MCAvIDB4MTAwMDAsXHJcbiAgICAweDczMWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzMxZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzIyMCAvIDB4MTAwMDAsXHJcbiAgICAweDczMjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzMyODAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzJiMCAvIDB4MTAwMDAsXHJcbiAgICAweDczMmUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzMzMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzM0MCAvIDB4MTAwMDAsXHJcbiAgICAweDczMzcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzMzYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzNlMCAvIDB4MTAwMDAsXHJcbiAgICAweDczNDEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzM0NDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzQ3MCAvIDB4MTAwMDAsXHJcbiAgICAweDczNGEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzM0ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzUwMCAvIDB4MTAwMDAsXHJcbiAgICAweDczNTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzM1NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzU5MCAvIDB4MTAwMDAsXHJcbiAgICAweDczNWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzM1ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzYyMCAvIDB4MTAwMDAsXHJcbiAgICAweDczNjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzM2ODAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzZiMCAvIDB4MTAwMDAsXHJcbiAgICAweDczNmUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzM3MTAgLyAweDEwMDAwLFxyXG4gICAgMHg3Mzc0MCAvIDB4MTAwMDAsXHJcbiAgICAweDczNzcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzM3YTAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzdkMCAvIDB4MTAwMDAsXHJcbiAgICAweDczODAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzM4MzAgLyAweDEwMDAwLFxyXG4gICAgMHg3Mzg2MCAvIDB4MTAwMDAsXHJcbiAgICAweDczODkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzM4YzAgLyAweDEwMDAwLFxyXG4gICAgMHg3MzhmMCAvIDB4MTAwMDAsXHJcbiAgICAweDczOTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzM5NTAgLyAweDEwMDAwLFxyXG4gICAgMHg3Mzk4MCAvIDB4MTAwMDAsXHJcbiAgICAweDczOWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzM5ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3M2ExMCAvIDB4MTAwMDAsXHJcbiAgICAweDczYTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzNhNzAgLyAweDEwMDAwLFxyXG4gICAgMHg3M2FhMCAvIDB4MTAwMDAsXHJcbiAgICAweDczYWQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzNiMDAgLyAweDEwMDAwLFxyXG4gICAgMHg3M2IzMCAvIDB4MTAwMDAsXHJcbiAgICAweDczYjYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzNiOTAgLyAweDEwMDAwLFxyXG4gICAgMHg3M2JjMCAvIDB4MTAwMDAsXHJcbiAgICAweDczYmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzNjMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3M2M1MCAvIDB4MTAwMDAsXHJcbiAgICAweDczYzgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzNjYTAgLyAweDEwMDAwLFxyXG4gICAgMHg3M2NkMCAvIDB4MTAwMDAsXHJcbiAgICAweDczZDAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzNkMzAgLyAweDEwMDAwLFxyXG4gICAgMHg3M2Q2MCAvIDB4MTAwMDAsXHJcbiAgICAweDczZDkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzNkYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3M2RmMCAvIDB4MTAwMDAsXHJcbiAgICAweDczZTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzNlNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3M2U4MCAvIDB4MTAwMDAsXHJcbiAgICAweDczZWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzNlZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3M2YxMCAvIDB4MTAwMDAsXHJcbiAgICAweDczZjQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzNmNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3M2Y5MCAvIDB4MTAwMDAsXHJcbiAgICAweDczZmMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzNmZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDAyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0MDUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQwODAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDBiMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0MGUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQxMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDE0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0MTYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQxOTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDFjMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0MWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQyMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDI1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0MjgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQyYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDJkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0MzAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQzMzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDM2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0MzkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQzYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDNmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0NDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQ0NDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDQ3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0NGEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQ0ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDUwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0NTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQ1NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDU4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0NWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQ1ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDYxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0NjQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQ2NzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDY5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0NmMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQ2ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDcyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0NzUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQ3ODAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDdhMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0N2QwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQ4MDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDgzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0ODYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQ4OTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDhiMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0OGUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQ5MTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDk0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0OTcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzQ5OTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NDljMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0OWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRhMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NGE1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0YTcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRhYTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NGFkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0YjAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRiMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NGI1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0YjgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRiYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NGJlMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0YzAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRjMzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NGM2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0YzkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRjYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NGNlMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0ZDEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRkNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NGQ3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0ZDkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRkYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NGRmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0ZTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRlNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NGU3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0ZWEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRlZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NGVmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc0ZjIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRmNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NGY4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc0ZmEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzRmZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTAwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1MDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzUwNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTA4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1MGIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzUwZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTEwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1MTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzUxNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTE4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1MWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzUxZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTIwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1MjMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzUyNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTI5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1MmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzUyZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTMxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1MzMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzUzNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTM5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1M2IwIC8gMHgxMDAwMCxcclxuICAgIDB4NzUzZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTQxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1NDMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU0NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTQ5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1NGMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU0ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTUxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1NTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU1NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTU5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1NWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU1ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTYxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1NjQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU2NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTY5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1NmMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU2ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTcxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1NzQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU3NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTc5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1N2MwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU3ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTgxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1ODMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU4NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTg5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1OGIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU4ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTkxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1OTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU5NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NTk5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1OWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzU5ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWEwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1YTMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzVhNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWE4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1YWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzVhZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWIwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1YjMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzViNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWI4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1YmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzViZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWMwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1YzIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzVjNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWM4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1Y2EwIC8gMHgxMDAwMCxcclxuICAgIDB4NzVjZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWNmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1ZDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzVkNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWQ3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1ZGEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzVkYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWRmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1ZTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzVlNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWU3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1ZTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzVlYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWVmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc1ZjEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzVmNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWY2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc1ZjkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzVmYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NWZlMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2MDEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzYwMzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjA2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2MDgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzYwYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjBkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2MTAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzYxMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjE1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2MTgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzYxYTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjFkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2MWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzYyMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjI0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2MjcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzYyOTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjJjMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2MmUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzYzMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjM0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2MzYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzYzOTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjNiMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2M2UwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY0MDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjQzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2NDUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY0ODAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjRhMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2NGQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY0ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjUyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2NTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY1NzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjU5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2NWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY1ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjYxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2NjMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY2NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjY4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2NmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY2ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjcwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2NzIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY3NTAgLyAweDEwMDAwLFxyXG4gICAgMHg3Njc3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2N2EwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY3YzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjdmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2ODEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY4NDAgLyAweDEwMDAwLFxyXG4gICAgMHg3Njg2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2ODkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY4YjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjhlMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2OTAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY5MzAgLyAweDEwMDAwLFxyXG4gICAgMHg3Njk1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2OTgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzY5YTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NjlkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2OWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZhMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmE0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2YTcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZhOTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmFiMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2YWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZiMDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmIzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2YjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZiODAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmJhMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2YmQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZiZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmMyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2YzQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZjNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmM5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2Y2IwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZjZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmQwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2ZDMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZkNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmQ4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2ZGEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZkYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmRmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2ZTEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZlNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmU2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2ZTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZlYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmVkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2ZjAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZmMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmY1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc2ZjcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzZmOTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NmZjMCAvIDB4MTAwMDAsXHJcbiAgICAweDc2ZmUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzcwMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzAzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3MDYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzcwODAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzBhMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3MGQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzcwZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzEyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3MTQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzcxNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzE5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3MWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzcxZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzIwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3MjIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzcyNTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzI3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3MjkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzcyYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzJlMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3MzEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzczMzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzM1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3MzgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzczYTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzNkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3M2YwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc0MTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzQ0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3NDYwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc0ODAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzRiMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3NGQwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc1MDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzUyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3NTQwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc1NzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzU5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3NWIwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc1ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzYwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3NjIwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc2NTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzY3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3NjkwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc2YzAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzZlMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3NzAwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc3MzAgLyAweDEwMDAwLFxyXG4gICAgMHg3Nzc1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3NzgwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc3YTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzdjMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3N2YwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc4MTAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzgzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3ODYwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc4ODAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzhhMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3OGQwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc4ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzkxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3OTQwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc5NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3Nzk4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3OWEwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzc5ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3NzlmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3YTEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdhNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2E2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3YTgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdhYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2FkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3YWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdiMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2I0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3YjYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdiOTAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2JiMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3YmQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdiZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2MyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3YzQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdjNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2M5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3Y2IwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdjZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2QwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3ZDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdkNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2Q2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3ZDkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdkYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2RkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3ZTAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdlMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2U0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3ZTYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdlOTAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2ViMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3ZWQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdmMDAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2YyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc3ZjQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdmNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2Y5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc3ZmIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzdmZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3N2ZmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4MDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzgwNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODA2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4MDgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzgwYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODBkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4MGYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzgxMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODE0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4MTYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzgxODAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODFhMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4MWQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzgxZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODIxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4MjMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzgyNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODI4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4MmEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzgyYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODJmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4MzEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzgzMzAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODM1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4MzgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzgzYTAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODNjMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4M2UwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg0MTAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODQzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4NDUwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg0NzAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODQ5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4NGMwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg0ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODUwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4NTIwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg1NTAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODU3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4NTkwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg1YjAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODVkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4NjAwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg2MjAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODY0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4NjYwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg2OTAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODZiMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4NmQwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg2ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODcxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4NzQwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg3NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODc4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4N2EwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg3YzAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODdmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4ODEwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg4MzAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODg1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4ODcwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg4YTAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODhjMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4OGUwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg5MDAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODkyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4OTQwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg5NzAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODk5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4OWIwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzg5ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3ODlmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4YTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhhNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGE2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4YTgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhhYTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGFjMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4YWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhiMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGIzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4YjUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhiNzAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGI5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4YmMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhiZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGMwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4YzIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhjNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGM2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4YzkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhjYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGNkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4Y2YwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhkMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGQzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4ZDUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhkODAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGRhMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4ZGMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhkZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGUwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4ZTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhlNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGU3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc4ZTkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhlYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGVkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4ZWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhmMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGYzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4ZjYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhmODAgLyAweDEwMDAwLFxyXG4gICAgMHg3OGZhMCAvIDB4MTAwMDAsXHJcbiAgICAweDc4ZmMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzhmZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTAwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5MDIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzkwNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTA3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5MDkwIC8gMHgxMDAwMCxcclxuICAgIDB4NzkwYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTBkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5MGYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzkxMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTEzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5MTUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzkxODAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTFhMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5MWMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzkxZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTIwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5MjIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzkyNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTI2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5MjgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzkyYjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTJkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5MmYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzkzMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTMzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5MzUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzkzNzAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTM5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5M2IwIC8gMHgxMDAwMCxcclxuICAgIDB4NzkzZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTQwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5NDIwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk0NDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTQ2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5NDgwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk0YTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTRjMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5NGUwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk1MDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTUyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5NTQwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk1NzAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTU5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5NWIwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk1ZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTVmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5NjEwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk2MzAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTY1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5NjcwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk2OTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTZiMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5NmQwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk2ZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTcyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5NzQwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk3NjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTc4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5N2EwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk3YzAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTdlMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5ODAwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk4MjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTg0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5ODYwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk4ODAgLyAweDEwMDAwLFxyXG4gICAgMHg3OThhMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5OGMwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk4ZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTkwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5OTMwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk5NTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTk3MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5OTkwIC8gMHgxMDAwMCxcclxuICAgIDB4Nzk5YjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OTlkMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5OWYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzlhMTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWEzMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5YTUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzlhNzAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWE5MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5YWIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzlhZDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWFmMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5YjEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzliMzAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWI1MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5YjcwIC8gMHgxMDAwMCxcclxuICAgIDB4NzliOTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWJiMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5YmQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzliZjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWMxMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5YzQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzljNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWM4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5Y2EwIC8gMHgxMDAwMCxcclxuICAgIDB4NzljYzAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWNlMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5ZDAwIC8gMHgxMDAwMCxcclxuICAgIDB4NzlkMjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWQ0MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5ZDYwIC8gMHgxMDAwMCxcclxuICAgIDB4NzlkODAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWRhMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5ZGMwIC8gMHgxMDAwMCxcclxuICAgIDB4NzlkZTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWUwMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5ZTIwIC8gMHgxMDAwMCxcclxuICAgIDB4NzllNDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWU2MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5ZTgwIC8gMHgxMDAwMCxcclxuICAgIDB4NzllYTAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWVjMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5ZWUwIC8gMHgxMDAwMCxcclxuICAgIDB4NzlmMDAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWYyMCAvIDB4MTAwMDAsXHJcbiAgICAweDc5ZjQwIC8gMHgxMDAwMCxcclxuICAgIDB4NzlmNjAgLyAweDEwMDAwLFxyXG4gICAgMHg3OWY4MCAvIDB4MTAwMDAsXHJcbiAgICAweDc5ZmEwIC8gMHgxMDAwMCxcclxuICAgIDB4NzlmYzAgLyAweDEwMDAwLFxyXG4gIF07XHJcbiAgaWYgKHggPCAxKSB4ID0gMTtcclxuICBpZiAoeCA+IDIwNDcpIHggPSAyMDQ3O1xyXG4gIHJldHVybiBMT0dfVkFMVUVfVEFCTEVbeF07XHJcbn1cclxuIiwgIi8qXHJcbiAgVGhpcyBjb2RlIGluY2x1ZGVzIHBvcnRpb25zIGJhc2VkIG9uIGRhbWFnZS1lb3MgYnkgVXNlcm5hbWVGb2RkZXJcclxuICBodHRwczovL2dpdGh1Yi5jb20vVXNlcm5hbWVGb2RkZXIvZGFtYWdlLWVvc1xyXG5cclxuICBPcmlnaW5hbCBjb2RlIHBvcnRpb25zOlxyXG4gIC0gTUlUIExpY2Vuc2UgKGMpIDIwMjMgVXNlcm5hbWVGb2RkZXJcclxuXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIE9yaWdpbmFsIExpY2Vuc2U6XHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIE1JVCBMaWNlbnNlXHJcblxyXG4gIENvcHlyaWdodCAoYykgMjAyMyBVc2VybmFtZUZvZGRlclxyXG5cclxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG4gIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcbiAgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcbiAgU09GVFdBUkUuXHJcbiovXHJcblxyXG5pbXBvcnQgKiBhcyBlb3MgZnJvbSAnLi9jb25zdC5qcyc7XHJcbmltcG9ydCAqIGFzIGlkcyBmcm9tICcuL2lkbWFwLmpzJztcclxuaW1wb3J0ICogYXMgTWVjaGFuaWNzIGZyb20gJy4vbWVjaGFuaWNzLmpzJztcclxuaW1wb3J0ICogYXMgTWF0aFV0aWwgZnJvbSAnLi9tYXRodXRpbC5qcyc7XHJcbmltcG9ydCB7IE1vbnN0ZXIsIERhbWFnZURhdGEsIER1bmdlb25TdGF0ZSwgRGFtYWdlQ2FsY0RpYWcsIE1vdmUsIE5hdHVyYWxHaWZ0SW5mbyB9IGZyb20gJy4vc3RydWN0dXJlLmpzJztcclxuXHJcbi8qKlxyXG4gKiBcdTk2MzJcdTVGQTFcdTUwNzRcdTMwNkJcdTVCRkVcdTMwNTdcdTMwNjZcdTY1M0JcdTY0ODNcdTMwNTdcdTMwNUZcdTY2NDJcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcdTc2RjhcdTYwMjdcdTMwOTJcdTUzRDZcdTVGOTdcclxuICogQHBhcmFtIHtEdW5nZW9uU3RhdGV9IGR1bmdlb25cclxuICogQHBhcmFtIHtNb25zdGVyfSBhdHRhY2tlclxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGRlZmVuZGVyXHJcbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0VHlwZUlkeFxyXG4gKiBAcGFyYW0geyp9IGF0dGFja1R5cGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlTWF0Y2hVcChkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIHRhcmdldFR5cGVJZHgsIGF0dGFja1R5cGUpIHtcclxuICBpZiAoIVR5cGVEYXRhKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdUeXBlRGF0YSBub3QgZm91bmQnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLy8gXHUzMEE4XHUzMEI5XHUzMEQxXHUzMEZDXHUzMDRCXHUzMDg5XHU2MEFBXHUzMDZCXHU2NTNCXHU2NDgzXHUzMDU3XHUzMDVGXHU2NjQyXHUzMDZFXHUzMERGXHUzMEU5XHUzMEFGXHUzMEVCXHUzMEEyXHUzMEE0XHU1MkI5XHU2NzlDIChcdTVDMDJcdTc1MjhcdTkwNTNcdTUxNzdcdTMwNkVcdTUyQjlcdTY3OUNcdTMwOTJcdTU0MkJcdTMwODApXHJcbiAgaWYgKFxyXG4gICAgKGRlZmVuZGVyLnN0YXR1c2VzLm1pcmFjbGVfZXllIHx8IGF0dGFja2VyLmV4Y2x1c2l2ZUl0ZW1FZmZlY3RBY3RpdmUoMHg0NikpICYmXHJcbiAgICBhdHRhY2tUeXBlID09IGVvcy5UWVBFX1BTWUNISUMgJiZcclxuICAgIGRlZmVuZGVyLnR5cGVzW3RhcmdldFR5cGVJZHhdID09IGVvcy5UWVBFX0RBUktcclxuICApIHtcclxuICAgIHJldHVybiBlb3MuTUFUQ0hVUF9ORVVUUkFMO1xyXG4gIH1cclxuICAvLyBcdTU3MzBcdTk3NjJcdTgwMTBcdTYwMjdcdTMwNkVcdTUyQjlcdTY3OUNcclxuICBpZiAoYXR0YWNrVHlwZSA9PSBlb3MuVFlQRV9HUk9VTkQpIHtcclxuICAgIGlmIChkdW5nZW9uLmdyYXZpdHkpIHtcclxuICAgICAgaWYgKGRlZmVuZGVyLnR5cGVzW3RhcmdldFR5cGVJZHhdID09IGVvcy5UWVBFX0ZMWUlORykge1xyXG4gICAgICAgIHJldHVybiBlb3MuTUFUQ0hVUF9ORVVUUkFMO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGRlZmVuZGVyLmhhc0NvbmRpdGlvbmFsR3JvdW5kSW1tdW5pdHkoZHVuZ2VvbikpIHtcclxuICAgICAgcmV0dXJuIGVvcy5NQVRDSFVQX0lNTVVORTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIFR5cGVEYXRhW2F0dGFja1R5cGVdLk1hdGNoVXBbZGVmZW5kZXIudHlwZXNbdGFyZ2V0VHlwZUlkeF1dO1xyXG59XHJcblxyXG4vKipcclxuICogXHU5NjMyXHU1RkExXHU1MDc0XHUzMDRDXHU3MDhFXHU2MjgwXHUzMDkyXHU1M0Q3XHUzMDUxXHUzMDVGXHU2NjQyXHUzMDZCXHUzMDgyXHUzMDg5XHUzMDQ0XHUzMDczXHUzMDRDXHU3NjdBXHU1MkQ1XHUzMDU5XHUzMDhCXHUzMDRCXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gYXR0YWNrZXJcclxuICogQHBhcmFtIHtNb25zdGVyfSBkZWZlbmRlclxyXG4gKiBAcmV0dXJucyAyOiBcdTMwODJcdTMwODlcdTMwNDRcdTMwNzNcdTMwOTJcdTc2N0FcdTUyRDVcdTMwNTdcdTMwNjZcdTMwRTlcdTMwRjNcdTMwQUZcdTMwOTIxXHU2QkI1XHU5NjhFXHU0RTBBXHUzMDUyXHUzMDhCLCAxOiBcdTMwODJcdTMwODlcdTMwNDRcdTMwNzNcdTMwOTJcdTc2N0FcdTUyRDVcdTMwNTlcdTMwOEJcdTMwNENcdTMwRTlcdTMwRjNcdTMwQUZcdTMwNkZcdTRFMEFcdTMwNENcdTMwODlcdTMwNkFcdTMwNDQsIDA6IFx1MzA4Mlx1MzA4OVx1MzA0NFx1MzA3M1x1MzA2Rlx1NzY3QVx1NTJENVx1MzA1N1x1MzA2QVx1MzA0NFxyXG4gKi9cclxuZnVuY3Rpb24gZmxhc2hGaXJlU2hvdWxkQWN0aXZhdGUoYXR0YWNrZXIsIGRlZmVuZGVyKSB7XHJcbiAgaWYgKCFkZWZlbmRlci5pc1ZhbGlkKCkpIHJldHVybiAwO1xyXG5cclxuICAvLyBcdTY1M0JcdTY0ODNcdTUwNzRcdTMwNENcdTMwQ0VcdTMwRkNcdTMwREVcdTMwRUJcdTMwQjlcdTMwQURcdTMwRjNcdTMwMDFcdTMwN0VcdTMwNUZcdTMwNkZcdTk2MzJcdTVGQTFcdTUwNzRcdTMwNENcdTMwODJcdTMwODlcdTMwNDRcdTMwNzNcdTRFRTVcdTU5MTYgLT4gZmFsc2VcclxuICBpZiAoYXR0YWNrZXIuYWJpbGl0eUFjdGl2ZSgweDZiKSB8fCAhZGVmZW5kZXIuYWJpbGl0eUFjdGl2ZURldGFpbHMoMHg0OCwgYXR0YWNrZXIsIHRydWUpKSB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbiAgcmV0dXJuIGRlZmVuZGVyLmZsYXNoX2ZpcmVfYm9vc3QgPCAyID8gMiA6IDE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAyXHU0RjUzXHUzMDZFXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMDZFXHU2MDI3XHU1MjI1XHUzMDRDXHU3QjQ5XHUzMDU3XHUzMDQ0XHUzMDRCXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGIChcdTMwNjlcdTMwNjFcdTMwODlcdTMwNEJcdTMwNENcdTYwMjdcdTUyMjVcdTRFMERcdTY2MEVcdTMwNjdcdTMwNDJcdTMwOENcdTMwNzBmYWxzZSlcclxuICogQHBhcmFtIHtNb25zdGVyfSBtb25zdGVyMVxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IG1vbnN0ZXIyXHJcbiAqL1xyXG5mdW5jdGlvbiBHZW5kZXJzRXF1YWxOb3RHZW5kZXJsZXNzKG1vbnN0ZXIxLCBtb25zdGVyMikge1xyXG4gIGxldCBnZW5kZXIxID0gbW9uc3RlcjEuZ2VuZGVyO1xyXG4gIGxldCBnZW5kZXIyID0gbW9uc3RlcjIuZ2VuZGVyO1xyXG4gIGlmIChnZW5kZXIxID09IGVvcy5HRU5ERVJfR0VOREVSTEVTUyB8fCBnZW5kZXIyID09IGVvcy5HRU5ERVJfR0VOREVSTEVTUykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gZ2VuZGVyMSA9PSBnZW5kZXIyO1xyXG59XHJcblxyXG4vKipcclxuICogXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU1MDBEXHU3Mzg3XHUzMDkyXHU4QTA4XHU3Qjk3XHJcbiAqIEBwYXJhbSB7RHVuZ2VvblN0YXRlfSBkdW5nZW9uXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gYXR0YWNrZXJcclxuICogQHBhcmFtIHtNb25zdGVyfSBkZWZlbmRlclxyXG4gKiBAcGFyYW0geyp9IGF0dGFja1Bvd2VyXHJcbiAqIEBwYXJhbSB7Kn0gYXR0YWNrVHlwZVxyXG4gKiBAcGFyYW0ge0RhbWFnZURhdGF9IGRhbWFnZU91dFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBhcnRpYWwgXHUzMEUwXHUzMEU5XHUzMDYzXHUzMDUxXHUzMDAxXHUzMEM2XHUzMEFGXHUzMENCXHUzMEI3XHUzMEUzXHUzMEYzXHUzMDZFXHU1RjcxXHU5N0ZGXHUzMDkyXHU1M0Q3XHUzMDUxXHUzMDhCXHUzMDRCXHJcbiAqIEByZXR1cm5zIFx1NTJCOVx1Njc5Q1x1NjI5Q1x1N0ZBNFx1MzBENVx1MzBFOVx1MzBCMChzdXBlckVmZmVjdGl2ZSksIFx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1NTAwRFx1NzM4NyhkYW1hZ2VNdWx0T3V0KVxyXG4gKi9cclxuZnVuY3Rpb24gQ2FsY1R5cGVCYXNlZERhbWFnZUVmZmVjdHMoZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBhdHRhY2tQb3dlciwgYXR0YWNrVHlwZSwgZGFtYWdlT3V0LCBwYXJ0aWFsKSB7XHJcbiAgZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuYXR0YWNrUG93ZXIgPSBhdHRhY2tQb3dlcjtcclxuICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5hdHRhY2tUeXBlID0gYXR0YWNrVHlwZTtcclxuXHJcbiAgLyoqIFx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1NTAwRFx1NzM4NyAqL1xyXG4gIGxldCBkYW1hZ2VNdWx0T3V0ID0gMTtcclxuXHJcbiAgZGFtYWdlT3V0LmNyaXRpY2FsSGl0ID0gZmFsc2U7XHJcbiAgZGFtYWdlT3V0LmZ1bGxUeXBlSW1tdW5pdHkgPSBmYWxzZTtcclxuICBpZiAoIWRlZmVuZGVyLmlzVmFsaWQoKSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAoIVR5cGVEYXRhKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdUeXBlRGF0YSBub3QgZm91bmQnKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZGFtYWdlT3V0LnR5cGVNYXRjaHVwID0gMDtcclxuICBjb25zdCB0eXBlTWF0Y2h1cHMgPSBuZXcgQXJyYXkoMik7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgIGNvbnN0IG1hdGNodXBNdWx0aXBsaWVycyA9IG5ldyBBcnJheSg0KTtcclxuICAgIC8vIFx1MzBFMFx1MzBFOVx1MzA2M1x1MzA1MVx1NjY0Mlx1MzA2RVx1NzZGOFx1NjAyN1x1NTAwRFx1NzM4N1xyXG4gICAgaWYgKCFwYXJ0aWFsICYmIChhdHRhY2tlci5pcVNraWxsRW5hYmxlZCgweDNiLCBkdW5nZW9uKSB8fCBkZWZlbmRlci5pcVNraWxsRW5hYmxlZCgweDNiLCBkdW5nZW9uKSkpIHtcclxuICAgICAgbWF0Y2h1cE11bHRpcGxpZXJzWzBdID0gTWVjaGFuaWNzLk1BVENIVVBfSU1NVU5FX0VSUkFUSUM7XHJcbiAgICAgIG1hdGNodXBNdWx0aXBsaWVyc1sxXSA9IE1lY2hhbmljcy5NQVRDSFVQX05PVFZFUllfRVJSQVRJQztcclxuICAgICAgbWF0Y2h1cE11bHRpcGxpZXJzWzJdID0gTWVjaGFuaWNzLk1BVENIVVBfTkVVVFJBTF9FUlJBVElDO1xyXG4gICAgICBtYXRjaHVwTXVsdGlwbGllcnNbM10gPSBNZWNoYW5pY3MuTUFUQ0hVUF9TVVBFUl9FUlJBVElDO1xyXG4gICAgfVxyXG4gICAgLy8gXHU5MDFBXHU1RTM4XHUzMDZFXHU3NkY4XHU2MDI3XHU1MDBEXHU3Mzg3XHJcbiAgICBlbHNlIHtcclxuICAgICAgbWF0Y2h1cE11bHRpcGxpZXJzWzBdID0gTWVjaGFuaWNzLk1BVENIVVBfSU1NVU5FO1xyXG4gICAgICBtYXRjaHVwTXVsdGlwbGllcnNbMV0gPSBNZWNoYW5pY3MuTUFUQ0hVUF9OT1RWRVJZO1xyXG4gICAgICBtYXRjaHVwTXVsdGlwbGllcnNbMl0gPSBNZWNoYW5pY3MuTUFUQ0hVUF9ORVVUUkFMO1xyXG4gICAgICBtYXRjaHVwTXVsdGlwbGllcnNbM10gPSBNZWNoYW5pY3MuTUFUQ0hVUF9TVVBFUjtcclxuICAgIH1cclxuICAgIGlmIChkYW1hZ2VNdWx0T3V0ID09IDApIGJyZWFrO1xyXG5cclxuICAgIGxldCBtYXRjaHVwID0gZW9zLk1BVENIVVBfTkVVVFJBTDtcclxuICAgIGlmIChcclxuICAgICAgIWF0dGFja2VyLnNjcmFwcHlTaG91bGRBY3RpdmF0ZShkZWZlbmRlciwgYXR0YWNrVHlwZSwgZHVuZ2VvbikgJiZcclxuICAgICAgTWVjaGFuaWNzLnR5cGVJbmVmZmVjdGl2ZUFnYWluc3RHaG9zdChhdHRhY2tUeXBlKSAmJlxyXG4gICAgICBkZWZlbmRlci5naG9zdEltbXVuaXR5QWN0aXZlKGF0dGFja2VyLCBpKVxyXG4gICAgKSB7XHJcbiAgICAgIC8vIFx1MzA0RFx1MzA4Mlx1MzA2M1x1MzA1Rlx1MzA3RVx1MzA2RVx1NTJCOVx1Njc5Q1x1MzA2QVx1MzA1NyAtPiBcdTUyQjlcdTY3OUNcdTMwNkZcdTMwNkFcdTMwNDRcclxuICAgICAgbWF0Y2h1cCA9IGVvcy5NQVRDSFVQX0lNTVVORTtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmdob3N0SW1tdW5pdHlBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gXHUzMDREXHUzMDgyXHUzMDYzXHUzMDVGXHUzMDdFXHUzMDZFXHU1MkI5XHU2NzlDXHUzMDQyXHUzMDhBIC0+IFx1MzBCRlx1MzBBNFx1MzBEN1x1NzZGOFx1NjAyN1x1MzA5Mlx1NTNENlx1NUY5N1xyXG4gICAgICBtYXRjaHVwID0gZ2V0VHlwZU1hdGNoVXAoZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBpLCBhdHRhY2tUeXBlKTtcclxuICAgIH1cclxuICAgIC8vIFx1NjUzQlx1NjQ4M1x1NTA3NFx1MzA0Q1x1MzBFMFx1MzBFOVx1MzA2M1x1MzA1MSBvciBcdTUyQjlcdTY3OUNcdTMwNENcdTY2NkVcdTkwMUFcdTRFRTVcdTU5MTYgLT4gXHU3NkY4XHU2MDI3XHU1MDBEXHU3Mzg3XHUzMDkyXHU1M0Q2XHU1Rjk3XHJcbiAgICBpZiAoYXR0YWNrZXIuaXFTa2lsbEVuYWJsZWQoMHgzYiwgZHVuZ2VvbikgfHwgbWF0Y2h1cCAhPSBlb3MuTUFUQ0hVUF9ORVVUUkFMKSB7XHJcbiAgICAgIGRhbWFnZU11bHRPdXQgKj0gbWF0Y2h1cE11bHRpcGxpZXJzW21hdGNodXBdO1xyXG4gICAgfVxyXG4gICAgdHlwZU1hdGNodXBzW2ldID0gbWF0Y2h1cDtcclxuICB9XHJcblxyXG4gIGR1bmdlb24uZGFtYWdlQ2FsYy5tb3ZlSW5kaXZUeXBlTWF0Y2h1cHNbMF0gPSB0eXBlTWF0Y2h1cHNbMF07XHJcbiAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLm1vdmVJbmRpdlR5cGVNYXRjaHVwc1sxXSA9IHR5cGVNYXRjaHVwc1sxXTtcclxuICBkYW1hZ2VPdXQudHlwZU1hdGNodXAgPSBNZWNoYW5pY3MuVFlQRV9NQVRDSFVQX0NPTUJJTkFUT1JfVEFCTEVbdHlwZU1hdGNodXBzWzBdXVt0eXBlTWF0Y2h1cHNbMV1dO1xyXG5cclxuICAvLyBcdTc2RjhcdTYwMjdcdTMwNENcdTUyQjlcdTY3OUNcdTYyOUNcdTdGQTRcdTRFRTVcdTU5MTZcdTMwMDFcdTk2MzJcdTVGQTFcdTUwNzRcdTMwNENcdTMwNzVcdTMwNTdcdTMwNEVcdTMwNkFcdTMwN0VcdTMwODJcdTMwOEFcdTMwMDFcdTY1M0JcdTY0ODNcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNENcdTMwNkFcdTMwNTdcdTRFRTVcdTU5MTYgLT4geDBcclxuICBsZXQgc3VwZXJFZmZlY3RpdmUgPSBkYW1hZ2VPdXQudHlwZU1hdGNodXAgPT0gZW9zLk1BVENIVVBfU1VQRVJfRUZGRUNUSVZFO1xyXG4gIGlmICghc3VwZXJFZmZlY3RpdmUpIHtcclxuICAgIGlmIChkZWZlbmRlci5hYmlsaXR5QWN0aXZlRGV0YWlscygweDM1LCBhdHRhY2tlciwgdHJ1ZSkgJiYgYXR0YWNrVHlwZSAhPSBlb3MuVFlQRV9OT05FKSB7XHJcbiAgICAgIGRhbWFnZU11bHRPdXQgPSAwO1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc1dvbmRlckd1YXJkQWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gXHU2NTNCXHU2NDgzXHU1MDc0XHUzMDRDXHUzMDQ0XHUzMDhEXHUzMDgxXHUzMDRDXHUzMDZEXHUzMDAxXHU3NkY4XHU2MDI3XHUzMDRDXHU0RUNBXHU0RTAwXHUzMDY0IC0+IHgxLjJcclxuICBpZiAoYXR0YWNrZXIuYWJpbGl0eUFjdGl2ZSgweDUwKSAmJiBkYW1hZ2VPdXQudHlwZU1hdGNodXAgPT0gZW9zLk1BVENIVVBfTk9UX1ZFUllfRUZGRUNUSVZFKSB7XHJcbiAgICBkYW1hZ2VNdWx0T3V0ICo9IE1lY2hhbmljcy5USU5URURfTEVOU19NVUxUSVBMSUVSO1xyXG4gICAgZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNUaW50ZWRMZW5zQWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcbiAgLy8gXHU5NjMyXHU1RkExXHU1MDc0XHUzMDRDXHUzMENGXHUzMEZDXHUzMEM5XHUzMEVEXHUzMEMzXHUzMEFGXHUzMDRCXHUzMEQ1XHUzMEEzXHUzMEVCXHUzMEJGXHUzMEZDXHUzMDAxXHU3NkY4XHU2MDI3XHUzMDRDXHU2MjlDXHU3RkE0IC0+IHgwLjc1XHJcbiAgaWYgKFxyXG4gICAgKGRlZmVuZGVyLmFiaWxpdHlBY3RpdmVEZXRhaWxzKDB4NmMsIGF0dGFja2VyLCB0cnVlKSB8fCBkZWZlbmRlci5hYmlsaXR5QWN0aXZlRGV0YWlscygweDZlLCBhdHRhY2tlciwgdHJ1ZSkpICYmXHJcbiAgICBkYW1hZ2VPdXQudHlwZU1hdGNodXAgPT0gZW9zLk1BVENIVVBfU1VQRVJfRUZGRUNUSVZFXHJcbiAgKSB7XHJcbiAgICBkYW1hZ2VNdWx0T3V0ICo9IE1lY2hhbmljcy5TT0xJRF9ST0NLX01VTFRJUExJRVI7XHJcbiAgICBpZiAoZGVmZW5kZXIuYWJpbGl0eUFjdGl2ZURldGFpbHMoMHg2YywgYXR0YWNrZXIsIHRydWUpKSB7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzU29saWRSb2NrQWN0aXZlID0gdHJ1ZTsgLy8gXHUzMENGXHUzMEZDXHUzMEM5XHUzMEVEXHUzMEMzXHUzMEFGXHJcbiAgICB9IGVsc2UgaWYgKGRlZmVuZGVyLmFiaWxpdHlBY3RpdmVEZXRhaWxzKDB4NmUsIGF0dGFja2VyLCB0cnVlKSkge1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc0ZpbHRlckFjdGl2ZSA9IHRydWU7IC8vIFx1MzBENVx1MzBBM1x1MzBFQlx1MzBCRlx1MzBGQ1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBcdTVDMDJcdTc1MjhcdTkwNTNcdTUxNzdcdTMwNkVcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdTUzNEFcdTZFMUJcdTUyQjlcdTY3OUMoXHUzMEJGXHUzMEE0XHUzMEUwXHUzMEI3XHUzMEZDXHUzMEVCXHUzMEM5KSAtPiB4MC41XHJcbiAgaWYgKGRlZmVuZGVyLmV4Y2x1c2l2ZUl0ZW1FZmZlY3RBY3RpdmUoMHg1YSkpIHtcclxuICAgIGRhbWFnZU11bHRPdXQgKj0gTWVjaGFuaWNzLkNPTlNUXzBfNTA7XHJcbiAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc1RpbWVTaGllbGRBY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuICAvLyBbb3JpZ2luYWxdIFx1NjY0Mlx1OTVDN1x1MzA2RVx1MzBCRlx1MzBBNFx1MzBFMFx1MzBCN1x1MzBGQ1x1MzBFQlx1MzBDOSAtPiB4MlxyXG4gIGlmIChhdHRhY2tlci5leGNsdXNpdmVJdGVtRWZmZWN0QWN0aXZlKDB4NWEpICYmIGF0dGFja2VyLmZsYWdfdGRfdGltZXNoZWFsZCkge1xyXG4gICAgZGFtYWdlTXVsdE91dCAqPSAyO1xyXG4gICAgZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNUaW1lU2hpZWxkR2xpdGNoID0gdHJ1ZTtcclxuICB9XHJcbiAgLy8gXHU5MDFBXHU1RTM4XHU2NTNCXHU2NDgzXHUzMDRCXHU2Mjk1XHU2NEYyXHU3MjY5XHU0RUU1XHU1OTE2XHUzMDZFXHU2NTNCXHU2NDgzXHUzMDAxXHU2NTNCXHU2NDgzXHU1MDc0XHUzMDRDXHUzMEM2XHUzMEFGXHUzMENCXHUzMEI3XHUzMEUzXHUzMEYzXHUzMDAxXHU1QTAxXHU1MjlCNFx1NEVFNVx1NEUwQiAtPiB4MS41XHJcbiAgaWYgKCFwYXJ0aWFsICYmIGF0dGFja2VyLmFiaWxpdHlBY3RpdmUoMHg2NCkgJiYgYXR0YWNrUG93ZXIgPD0gTWVjaGFuaWNzLlRFQ0hOSUNJQU5fTU9WRV9QT1dFUl9USFJFU0hPTEQpIHtcclxuICAgIGRhbWFnZU11bHRPdXQgKj0gTWVjaGFuaWNzLkNPTlNUXzFfNTA7XHJcbiAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc1RlY2huaWNpYW5BY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuICAvLyBcdTYyODBcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNENcdTcwOEVcdTMwNEJcdTZDMzdcdTMwMDFcdTk2MzJcdTVGQTFcdTUwNzRcdTMwNENcdTMwNDJcdTMwNjRcdTMwNDRcdTMwNTdcdTMwN0NcdTMwNDYgLT4geDAuNVxyXG4gIGlmIChcclxuICAgIChhdHRhY2tUeXBlID09IGVvcy5UWVBFX0ZJUkUgfHwgYXR0YWNrVHlwZSA9PSBlb3MuVFlQRV9JQ0UpICYmXHJcbiAgICBkZWZlbmRlci5hYmlsaXR5QWN0aXZlRGV0YWlscygweDIsIGF0dGFja2VyLCB0cnVlKVxyXG4gICkge1xyXG4gICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmZpcmVNb3ZlQWJpbGl0eURyb3BBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgZGFtYWdlTXVsdE91dCAqPSBNZWNoYW5pY3MuQ09OU1RfMF81MDtcclxuICB9XHJcbiAgLy8gXHU2MjgwXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDRDXHU3MDhFXHUzMDAxXHUzMDgyXHUzMDg5XHUzMDQ0XHUzMDczXHUzMDRDXHU3NjdBXHU1MkQ1IC0+IHgwXHJcbiAgaWYgKGF0dGFja1R5cGUgPT0gZW9zLlRZUEVfRklSRSAmJiBmbGFzaEZpcmVTaG91bGRBY3RpdmF0ZShhdHRhY2tlciwgZGVmZW5kZXIpKSB7XHJcbiAgICBkdW5nZW9uLmRhbWFnZUNhbGMuZmxhc2hGaXJlQWN0aXZhdGVkID0gdHJ1ZTtcclxuICAgIGRhbWFnZU11bHRPdXQgPSAwO1xyXG4gICAgc3VwZXJFZmZlY3RpdmUgPSBmYWxzZTtcclxuICAgIGRhbWFnZU91dC50eXBlTWF0Y2h1cCA9IGVvcy5NQVRDSFVQX0lNTVVORTtcclxuICAgIGRhbWFnZU91dC5jcml0aWNhbEhpdCA9IGZhbHNlO1xyXG4gICAgZGFtYWdlT3V0LmZ1bGxUeXBlSW1tdW5pdHkgPSB0cnVlO1xyXG4gICAgZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNUaGlja0ZhdEFjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG4gIC8vIFx1NjI4MFx1MzA2RVx1MzBCRlx1MzBBNFx1MzBEN1x1MzA0Q1x1NzA4RVx1MzAwMVx1OTYzMlx1NUZBMVx1NTA3NFx1MzA0Q1x1MzA1Rlx1MzA0NFx1MzA2RFx1MzA2NCAtPiB4MC41XHJcbiAgaWYgKGF0dGFja1R5cGUgPT0gZW9zLlRZUEVfRklSRSAmJiBkZWZlbmRlci5hYmlsaXR5QWN0aXZlRGV0YWlscygweDVmLCBhdHRhY2tlciwgdHJ1ZSkpIHtcclxuICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5maXJlTW92ZUFiaWxpdHlEcm9wQWN0aXZhdGVkID0gdHJ1ZTtcclxuICAgIGRhbWFnZU11bHRPdXQgKj0gTWVjaGFuaWNzLkNPTlNUXzBfNTA7XHJcbiAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc0hlYXRwcm9vZkFjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG4gIC8vIFx1NjI4MFx1MzA2RVx1MzBCRlx1MzBBNFx1MzBEN1x1MzA0Q1x1NTczMFx1OTc2Mlx1MzAwMVx1NjUzQlx1NjQ4M1x1NTA3NFx1MzA0Q1x1MzA0Qlx1MzA1Rlx1MzA4NFx1MzA3Nlx1MzA4QVx1NEVFNVx1NTkxNlx1MzA0Qlx1MzA2NFx1OTYzMlx1NUZBMVx1NTA3NFx1MzA2RVx1MzA3NVx1MzA4Nlx1MzA0Nlx1MzA0Q1x1NzY3QVx1NTJENSAtPiB4MFxyXG4gIGlmIChcclxuICAgIGF0dGFja1R5cGUgPT0gZW9zLlRZUEVfR1JPVU5EICYmXHJcbiAgICAoKCFhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4NTMpICYmIGRlZmVuZGVyLmxldml0YXRlQWN0aXZlKGR1bmdlb24pKSB8fFxyXG4gICAgICBkZWZlbmRlci5oYXNDb25kaXRpb25hbEdyb3VuZEltbXVuaXR5KGR1bmdlb24pKVxyXG4gICkge1xyXG4gICAgZGFtYWdlTXVsdE91dCA9IDA7XHJcbiAgICBzdXBlckVmZmVjdGl2ZSA9IGZhbHNlO1xyXG4gICAgZGFtYWdlT3V0LnR5cGVNYXRjaHVwID0gZW9zLk1BVENIVVBfSU1NVU5FO1xyXG4gICAgZGFtYWdlT3V0LmNyaXRpY2FsSGl0ID0gZmFsc2U7XHJcbiAgICBkYW1hZ2VPdXQuZnVsbFR5cGVJbW11bml0eSA9IHRydWU7XHJcbiAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc0xldml0YXRlQWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcbiAgLy8gXHU2MjgwXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDRDXHU2QzM0XHUzMDAxXHU2NTNCXHU2NDgzXHU1MDc0XHUzMDRDXHUzMDUyXHUzMDREXHUzMDhBXHUzMDg1XHUzMDQ2XHUzMDAxXHU2NTNCXHU2NDgzXHU1MDc0XHUzMDZFSFBcdTMwNEMxLzRcdTRFRTVcdTRFMEIgLT4geDJcclxuICBpZiAoYXR0YWNrVHlwZSA9PSBlb3MuVFlQRV9XQVRFUiAmJiBhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4MTApKSB7XHJcbiAgICBsZXQgbWF4SHAgPSBhdHRhY2tlci5ocF9tYXg7XHJcbiAgICBpZiAobWF4SHAgPiBNZWNoYW5pY3MuTUFYX0hQX0NBUCkge1xyXG4gICAgICBtYXhIcCA9IE1lY2hhbmljcy5NQVhfSFBfQ0FQO1xyXG4gICAgfVxyXG4gICAgaWYgKGF0dGFja2VyLmhwIDw9IE1hdGgudHJ1bmMobWF4SHAgLyA0KSkge1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZUNhbGMudG9ycmVudEJvb3N0QWN0aXZhdGVkID0gdHJ1ZTtcclxuICAgICAgZGFtYWdlTXVsdE91dCAqPSAyO1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc1RvcnJlbnRBY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBcdTYyODBcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNENcdTgzNDlcdTMwMDFcdTY1M0JcdTY0ODNcdTUwNzRcdTMwNENcdTMwNTdcdTMwOTNcdTMwOEFcdTMwODdcdTMwNEZcdTMwMDFcdTY1M0JcdTY0ODNcdTUwNzRcdTMwNkVIUFx1MzA0QzEvNFx1NEVFNVx1NEUwQiAtPiB4MlxyXG4gIGlmIChhdHRhY2tUeXBlID09IGVvcy5UWVBFX0dSQVNTICYmIGF0dGFja2VyLmFiaWxpdHlBY3RpdmUoMHgxYSkpIHtcclxuICAgIGxldCBtYXhIcCA9IGF0dGFja2VyLmhwX21heDtcclxuICAgIGlmIChtYXhIcCA+IE1lY2hhbmljcy5NQVhfSFBfQ0FQKSB7XHJcbiAgICAgIG1heEhwID0gTWVjaGFuaWNzLk1BWF9IUF9DQVA7XHJcbiAgICB9XHJcbiAgICBpZiAoYXR0YWNrZXIuaHAgPD0gTWF0aC50cnVuYyhtYXhIcCAvIDQpKSB7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5vdmVyZ3Jvd0Jvb3N0QWN0aXZhdGVkID0gdHJ1ZTtcclxuICAgICAgZGFtYWdlTXVsdE91dCAqPSAyO1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc092ZXJncm93QWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gXHU2MjgwXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDRDXHU4NjZCXHUzMDAxXHU2NTNCXHU2NDgzXHU1MDc0XHUzMDRDXHUzMDgwXHUzMDU3XHUzMDZFXHUzMDU3XHUzMDg5XHUzMDVCXHUzMDAxXHU2NTNCXHU2NDgzXHU1MDc0XHUzMDZFSFBcdTMwNEMxLzRcdTRFRTVcdTRFMEIgLT4geDJcclxuICBpZiAoYXR0YWNrVHlwZSA9PSBlb3MuVFlQRV9CVUcgJiYgYXR0YWNrZXIuYWJpbGl0eUFjdGl2ZSgweDQzKSkge1xyXG4gICAgbGV0IG1heEhwID0gYXR0YWNrZXIuaHBfbWF4O1xyXG4gICAgaWYgKG1heEhwID4gTWVjaGFuaWNzLk1BWF9IUF9DQVApIHtcclxuICAgICAgbWF4SHAgPSBNZWNoYW5pY3MuTUFYX0hQX0NBUDtcclxuICAgIH1cclxuICAgIGlmIChhdHRhY2tlci5ocCA8PSBNYXRoLnRydW5jKG1heEhwIC8gNCkpIHtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLnN3YXJtQm9vc3RBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgICBkYW1hZ2VNdWx0T3V0ICo9IDI7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzU3dhcm1BY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBcdTYyODBcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNENcdTcwOEVcdTMwMDFcdTY1M0JcdTY0ODNcdTUwNzRcdTMwNENcdTMwODJcdTMwNDZcdTMwNEJcdTMwMDFcdTY1M0JcdTY0ODNcdTUwNzRcdTMwNkVIUFx1MzA0QzEvNFx1NEVFNVx1NEUwQiAtPiB4MlxyXG4gIGlmIChhdHRhY2tUeXBlID09IGVvcy5UWVBFX0ZJUkUpIHtcclxuICAgIGlmIChhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4NDYpKSB7XHJcbiAgICAgIGxldCBtYXhIcCA9IGF0dGFja2VyLmhwX21heDtcclxuICAgICAgaWYgKG1heEhwID4gTWVjaGFuaWNzLk1BWF9IUF9DQVApIHtcclxuICAgICAgICBtYXhIcCA9IE1lY2hhbmljcy5NQVhfSFBfQ0FQO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChhdHRhY2tlci5ocCA8PSBNYXRoLnRydW5jKG1heEhwIC8gNCkpIHtcclxuICAgICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuZmlyZU1vdmVBYmlsaXR5Qm9vc3RBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIGRhbWFnZU11bHRPdXQgKj0gMjtcclxuICAgICAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc0JsYXplQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gXHU2MjgwXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDRDXHU3MDhFXHUzMDAxXHU5NjMyXHU1RkExXHU1MDc0XHUzMDRDXHUzMDRCXHUzMDkzXHUzMDVEXHUzMDQ2XHUzMDZGXHUzMDYwIC0+IHgxLjVcclxuICAgIGlmIChkZWZlbmRlci5hYmlsaXR5QWN0aXZlRGV0YWlscygweDU1LCBhdHRhY2tlciwgdHJ1ZSkpIHtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmZpcmVNb3ZlQWJpbGl0eUJvb3N0QWN0aXZhdGVkID0gdHJ1ZTtcclxuICAgICAgZGFtYWdlTXVsdE91dCAqPSBNZWNoYW5pY3MuQ09OU1RfMV81MDtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNEcnlTa2luQWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFx1NjUzQlx1NjQ4M1x1NTA3NFx1MzA0Q1x1MzA4NFx1MzA1MVx1MzA2OVx1NzJCNlx1NjE0QiAtPiB4MC44XHJcbiAgaWYgKGF0dGFja2VyLnN0YXR1c2VzLmJ1cm4pIHtcclxuICAgIGRhbWFnZU11bHRPdXQgKj0gTWVjaGFuaWNzLkJVUk5fREFNQUdFX01VTFRJUExJRVI7XHJcbiAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc0J1cm5BY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLy8gXHUzMEJGXHUzMEE0XHUzMEQ3XHU0RTAwXHU4MUY0XHJcbiAgaWYgKGRhbWFnZU11bHRPdXQgIT0gMCAmJiBhdHRhY2tlci5pc1R5cGUoYXR0YWNrVHlwZSkpIHtcclxuICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5zdGFiQm9vc3RBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgLy8gXHU2NTNCXHU2NDgzXHU1MDc0XHUzMDRDXHUzMDY2XHUzMDREXHUzMDRBXHUzMDQ2XHUzMDhBXHUzMDg3XHUzMDRGIC0+IHgyXHJcbiAgICBpZiAoYXR0YWNrZXIuYWJpbGl0eUFjdGl2ZSgweDYzKSkge1xyXG4gICAgICBkYW1hZ2VNdWx0T3V0ICo9IDI7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzQWRhcHRhYmlsaXR5U1RBQiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvLyBcdTMwNURcdTMwOENcdTRFRTVcdTU5MTYgLT4geDEuNVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGRhbWFnZU11bHRPdXQgKj0gTWVjaGFuaWNzLkNPTlNUXzFfNTA7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzU1RBQiA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCB3ZWF0aGVyID0gYXR0YWNrZXIucGVyY2VpdmVkV2VhdGhlcihkdW5nZW9uKTtcclxuICAvLyBcdTMwNzJcdTMwNTZcdTMwNTdcdTMwNENcdTMwNjRcdTMwODhcdTMwNDRcclxuICBpZiAod2VhdGhlciA9PSBlb3MuV0VBVEhFUl9TVU5OWSkge1xyXG4gICAgLy8gXHU2MjgwXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDRDXHU3MDhFIC0+IHgxLjVcclxuICAgIGlmIChhdHRhY2tUeXBlID09IGVvcy5UWVBFX0ZJUkUpIHtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLnN1bm55TXVsdGlwbGllckFjdGl2YXRlZCA9IHRydWU7XHJcbiAgICAgIGRhbWFnZU11bHRPdXQgKj0gTWVjaGFuaWNzLkNPTlNUXzFfNTA7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzU3VubnlGaXJlQWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIFx1NjI4MFx1MzA2RVx1MzBCRlx1MzBBNFx1MzBEN1x1MzA0Q1x1NkMzNCAtPiB4MC41XHJcbiAgICBlbHNlIGlmIChhdHRhY2tUeXBlID09IGVvcy5UWVBFX1dBVEVSKSB7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5zdW5ueU11bHRpcGxpZXJBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgICBkYW1hZ2VNdWx0T3V0ICo9IE1lY2hhbmljcy5DT05TVF8wXzUwO1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc1N1bm55V2F0ZXJBY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBcdTMwNDJcdTMwODFcclxuICBpZiAod2VhdGhlciA9PSBlb3MuV0VBVEhFUl9SQUlOKSB7XHJcbiAgICAvLyBcdTYyODBcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNENcdTcwOEUgLT4geDAuNVxyXG4gICAgaWYgKGF0dGFja1R5cGUgPT0gZW9zLlRZUEVfRklSRSkge1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZUNhbGMucmFpbk11bHRpcGxpZXJBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgICBkYW1hZ2VNdWx0T3V0ICo9IE1lY2hhbmljcy5DT05TVF8wXzUwO1xyXG4gICAgfVxyXG4gICAgLy8gXHU2MjgwXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDRDXHU2QzM0IC0+IHgxLjVcclxuICAgIGVsc2UgaWYgKGF0dGFja1R5cGUgPT0gZW9zLlRZUEVfV0FURVIpIHtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLnJhaW5NdWx0aXBsaWVyQWN0aXZhdGVkID0gdHJ1ZTtcclxuICAgICAgZGFtYWdlTXVsdE91dCAqPSBNZWNoYW5pY3MuQ09OU1RfMV81MDtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gXHUzMDRGXHUzMDgyXHUzMDhBXHUzMDAxXHU2MjgwXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDRDXHUzMENFXHUzMEZDXHUzMERFXHUzMEVCXHU0RUU1XHU1OTE2IC0+IHgwLjc1XHJcbiAgaWYgKHdlYXRoZXIgPT0gZW9zLldFQVRIRVJfQ0xPVURZICYmIGF0dGFja1R5cGUgIT0gZW9zLlRZUEVfTk9STUFMKSB7XHJcbiAgICBkYW1hZ2VNdWx0T3V0ICo9IE1lY2hhbmljcy5DTE9VRFlfREFNQUdFX01VTFRJUExJRVI7XHJcbiAgICBkdW5nZW9uLmRhbWFnZUNhbGMuY2xvdWR5RHJvcEFjdGl2YXRlZCA9IHRydWU7XHJcbiAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc0Nsb3VkeUFjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG4gIC8vIFx1MzA2OVx1MzA4RFx1MzA0Mlx1MzA1RFx1MzA3M1x1NzJCNlx1NjE0Qlx1MzA3RVx1MzA1Rlx1MzA2Rlx1NTkyOVx1NTAxOVx1MzA0RFx1MzA4QVx1MzAwMVx1NjI4MFx1MzA2RVx1MzBCRlx1MzBBNFx1MzBEN1x1MzA0Q1x1OTZGQlx1NkMxNyAtPiB4MC41XHJcbiAgaWYgKChkdW5nZW9uLm11ZF9zcG9ydCB8fCB3ZWF0aGVyID09IGVvcy5XRUFUSEVSX0ZPRykgJiYgYXR0YWNrVHlwZSA9PSBlb3MuVFlQRV9FTEVDVFJJQykge1xyXG4gICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmVsZWN0cmljTW92ZURhbXBlbmVkID0gdHJ1ZTtcclxuICAgIGRhbWFnZU11bHRPdXQgKj0gTWVjaGFuaWNzLkNPTlNUXzBfNTA7XHJcblxyXG4gICAgaWYgKHdlYXRoZXIgPT0gZW9zLldFQVRIRVJfRk9HKSB7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzRm9nQWN0aXZlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAoZHVuZ2Vvbi5tdWRfc3BvcnQpIHtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNNdWRTcG9ydEFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIFx1MzA3Rlx1MzA1QVx1MzA0Mlx1MzA1RFx1MzA3M1x1NzJCNlx1NjE0Qlx1MzAwMVx1NjI4MFx1MzA2RVx1MzBCRlx1MzBBNFx1MzBEN1x1MzA0Q1x1NzA4RSAtPiB4MC41XHJcbiAgaWYgKGR1bmdlb24ud2F0ZXJfc3BvcnQgJiYgYXR0YWNrVHlwZSA9PSBlb3MuVFlQRV9GSVJFKSB7XHJcbiAgICBkdW5nZW9uLmRhbWFnZUNhbGMud2F0ZXJTcG9ydERyb3BBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgZGFtYWdlTXVsdE91dCAqPSBNZWNoYW5pY3MuQ09OU1RfMF81MDtcclxuICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzV2F0ZXJTcG9ydEFjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvLyBcdTYyODBcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNENcdTk2RkJcdTZDMTdcdTMwMDFcdTY1M0JcdTY0ODNcdTUwNzRcdTMwNENcdTMwNThcdTMwODVcdTMwNDZcdTMwNjdcdTMwOTNcdTcyQjZcdTYxNEJcclxuICBpZiAoYXR0YWNrVHlwZSA9PSBlb3MuVFlQRV9FTEVDVFJJQyAmJiBhdHRhY2tlci5zdGF0dXNlcy5jaGFyZ2UpIHtcclxuICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5jaGFyZ2VCb29zdEFjdGl2YXRlZCA9IHRydWU7XHJcbiAgICBkYW1hZ2VNdWx0T3V0ICo9IDI7XHJcbiAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc0NoYXJnZUFjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc3VwZXJFZmZlY3RpdmU6IHN1cGVyRWZmZWN0aXZlLFxyXG4gICAgZGFtYWdlTXVsdE91dDogZGFtYWdlTXVsdE91dCxcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU4QTA4XHU3Qjk3XHJcbiAqIEBwYXJhbSB7RHVuZ2VvblN0YXRlfSBkdW5nZW9uIFx1MzBDMFx1MzBGM1x1MzBCOFx1MzBFN1x1MzBGM1xyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGF0dGFja2VyIFx1NjUzQlx1NjQ4M1x1NTA3NFxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGRlZmVuZGVyIFx1OTYzMlx1NUZBMVx1NTA3NFxyXG4gKiBAcGFyYW0ge051bWJlcn0gbW92ZVR5cGUgXHU2MjgwXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtb3ZlUG93ZXIgXHU2MjgwXHUzMDZFXHU1QTAxXHU1MjlCXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtb3ZlQ3JpdCBcdTYyODBcdTMwNkVcdTYwMjVcdTYyNDBcdTczODdcclxuICogQHBhcmFtIHtEYW1hZ2VEYXRhfSBkYW1hZ2VPdXRcclxuICogQHBhcmFtIHsqfSBkYW1hZ2VNdWx0XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtb3ZlSWQgXHU2MjgwSURcclxuICogQHBhcmFtIHtCb29sZWFufSBmdWxsQ2FsY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIENhbGNEYW1hZ2UoXHJcbiAgZHVuZ2VvbixcclxuICBhdHRhY2tlcixcclxuICBkZWZlbmRlcixcclxuICBtb3ZlVHlwZSxcclxuICBtb3ZlUG93ZXIsXHJcbiAgY3JpdENoYW5jZSxcclxuICBkYW1hZ2VPdXQsXHJcbiAgZGFtYWdlTXVsdCxcclxuICBtb3ZlSWQsXHJcbiAgZnVsbENhbGMsXHJcbikge1xyXG4gIC8vIGRhbWFnZU91dCA9IG5ldyBEYW1hZ2VEYXRhKCk7XHJcbiAgbGV0IGF0a19zdGFnZV9ib29zdCA9IDA7IC8vIFx1NjUzQlx1NjQ4M1x1N0NGQlx1ODBGRFx1NTI5Qlx1MzBFOVx1MzBGM1x1MzBBRlx1NEUwQVx1NjYwN1x1OTFDRlxyXG4gIGxldCBkZWZfc3RhZ2VfYm9vc3QgPSAwOyAvLyBcdTk2MzJcdTVGQTFcdTdDRkJcdTgwRkRcdTUyOUJcdTMwRTlcdTMwRjNcdTMwQUZcdTRFMEFcdTY2MDdcdTkxQ0ZcclxuICBsZXQgZGVmX3N0YWdlID0gMDsgLy8gXHU5NjMyXHU1RkExXHU3Q0ZCXHUzMEU5XHUzMEYzXHUzMEFGXHJcbiAgY29uc3QgbW92ZUNhdGVnb3J5ID0gZ2V0TW92ZUNhdGVnb3J5KG1vdmVJZCk7IC8vIFx1NjI4MFx1MzA2RVx1NTIwNlx1OTg1RSAoMD1cdTcyNjlcdTc0MDYsIDE9XHU3Mjc5XHU2QjhBLCAyPVx1NTkwOVx1NTMxNilcclxuXHJcbiAgLy8gXHUzMEI5XHUzMEM2XHUzMEZDXHUzMEJGXHUzMEI5XHU1MDBEXHU3Mzg3XHJcbiAgbGV0IGF0a19zdGFnZV9tdWx0ID1cclxuICAgIG1vdmVDYXRlZ29yeSA9PSBlb3MuQ0FURUdPUllfUEhZU0lDQUxcclxuICAgICAgPyBNYXRoLnBvdygwLjUsIE1hdGguYWJzKGF0dGFja2VyLmhhbGZfYXRrKSlcclxuICAgICAgOiBNYXRoLnBvdygwLjUsIE1hdGguYWJzKGF0dGFja2VyLmhhbGZfc3BfYXRrKSk7XHJcbiAgbGV0IGRlZl9zdGFnZV9tdWx0ID1cclxuICAgIG1vdmVDYXRlZ29yeSA9PSBlb3MuQ0FURUdPUllfUEhZU0lDQUxcclxuICAgICAgPyBNYXRoLnBvdygwLjUsIE1hdGguYWJzKGRlZmVuZGVyLmhhbGZfZGVmKSlcclxuICAgICAgOiBNYXRoLnBvdygwLjUsIE1hdGguYWJzKGRlZmVuZGVyLmhhbGZfc3BfZGVmKSk7XHJcblxyXG4gIC8vIFx1MzA1NVx1MzA0RFx1MzA2OVx1MzA4QVx1NjcwOVx1NTJCOSAtPiB4MS41XHJcbiAgaWYgKGF0dGFja2VyLmZsYWdfbWVfZmlyc3QpIHtcclxuICAgIGRhbWFnZU11bHQgKj0gTWVjaGFuaWNzLk1FX0ZJUlNUX01VTFRJUExJRVI7XHJcbiAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc01lRmlyc3RBY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuICAvLyBcdTcyNzlcdTYwMjdcdTMwNTlcdTMwNjZcdTMwN0YgKyBcdTUzQ0RcdTUyRDVcdTYyODAgLT4geDEuNVxyXG4gIGlmIChhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDkyKSAmJiBNZWNoYW5pY3MuaXNSZWNvaWxNb3ZlKG1vdmVJZCkpIHtcclxuICAgIGRhbWFnZU11bHQgPSAoZGFtYWdlTXVsdCAqIDMpIC8gMjtcclxuICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzUmVja2xlc3NBY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuICAvLyBcdTcyNzlcdTYwMjdcdTMwNjZcdTMwNjRcdTMwNkVcdTMwNTNcdTMwNzZcdTMwNTcgKyBcdTMwRDFcdTMwRjNcdTMwQzFcdTYyODAgLT4geDEuNVxyXG4gIGlmIChhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDEwMSkgJiYgTWVjaGFuaWNzLmlzUHVuY2hNb3ZlKG1vdmVJZCkpIHtcclxuICAgIGRhbWFnZU11bHQgKj0gTWVjaGFuaWNzLkNPTlNUXzFfNTA7XHJcbiAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc0lyb25GaXN0QWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcbiAgLy8gXHU3Mjc5XHU2MDI3XHUzMENFXHUzMEZDXHUzMERFXHUzMEVCXHUzMEI5XHUzMEFEXHUzMEYzIC0+IFx1MzBDRVx1MzBGQ1x1MzBERVx1MzBFQlx1NjI4MFx1MzA2Qlx1MzA1OVx1MzA4QlxyXG4gIGlmIChhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDEwNykpIHtcclxuICAgIG1vdmVUeXBlID0gMTtcclxuICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzTm9ybWFsaXplQWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcbiAgLy8gXHU2MjgwXHUzMDU1XHUzMDcwXHUzMDREXHUzMDZFXHUzMDY0XHUzMDc2XHUzMDY2IC0+IFx1NjI4MFx1MzA2RVx1MzBCRlx1MzBBNFx1MzBEN1x1MzA5Mlx1NjUzQlx1NjQ4M1x1NTA3NFx1MzA2RVx1N0IyQ1x1NEUwMFx1MzBCRlx1MzBBNFx1MzBEN1x1MzA2Qlx1MzA1OVx1MzA4QlxyXG4gIGlmIChtb3ZlSWQgPT0gNDY3KSB7XHJcbiAgICBtb3ZlVHlwZSA9IGF0dGFja2VyLnR5cGVzWzBdO1xyXG4gIH1cclxuXHJcbiAgZHVuZ2Vvbi5kYW1hZ2VDYWxjID0gbmV3IERhbWFnZUNhbGNEaWFnKCk7XHJcblxyXG4gIC8vIFx1MzBFQVx1MzBGQ1x1MzBDMFx1MzBGQ1x1NEVFNVx1NTkxNlx1MzA2N1x1MzA0QVx1MzA2QVx1MzA0Qlx1MzA0QzAgb3IgXHU5MDFBXHU1RTM4XHU2NTNCXHU2NDgzXHUzMDRCXHUzMDY0XHU5NjMyXHU1RkExXHU1MDc0XHUzMDZFXHU3Mjc5XHU2MDI3XHUzMDc1XHUzMDU3XHUzMDRFXHUzMDZBXHUzMDdFXHUzMDgyXHUzMDhBXHJcbiAgaWYgKFxyXG4gICAgKCFhdHRhY2tlci5pc19sZWFkZXIgJiYgYXR0YWNrZXIuYmVsbHkgPT0gMCkgfHxcclxuICAgIChtb3ZlSWQgPT0gMzU1ICYmIGRlZmVuZGVyLmFiaWxpdHlBY3RpdmVEZXRhaWxzKDUzLCBhdHRhY2tlciwgdHJ1ZSkpXHJcbiAgKSB7XHJcbiAgICAvLyBcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdTMwOTIxXHUzMDZCXHUzMDU5XHUzMDhCXHJcbiAgICBkYW1hZ2VPdXQuZGFtYWdlID0gMTtcclxuICAgIGRhbWFnZU91dC5kYW1hZ2VNZXNzYWdlID0gZW9zLkRBTUFHRV9NRVNTQUdFX01PVkU7XHJcbiAgICBkYW1hZ2VPdXQudHlwZU1hdGNodXAgPSBlb3MuTUFUQ0hVUF9ORVVUUkFMO1xyXG4gICAgZGFtYWdlT3V0LnR5cGUgPSBtb3ZlVHlwZTtcclxuICAgIGRhbWFnZU91dC5jYXRlZ29yeSA9IGdldE1vdmVDYXRlZ29yeShtb3ZlSWQpO1xyXG4gICAgZGFtYWdlT3V0LmNyaXRpY2FsSGl0ID0gZmFsc2U7XHJcbiAgICBkYW1hZ2VPdXQuZnVsbFR5cGVJbW11bml0eSA9IGZhbHNlO1xyXG4gICAgZGFtYWdlT3V0Lm5vRGFtYWdlID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKCFhdHRhY2tlci5pc19sZWFkZXIgJiYgYXR0YWNrZXIuYmVsbHkgPT0gMCkge1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc0h1bmdyeVBhbEFjdGl2ZSA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKG1vdmVJZCA9PSAzNTUgJiYgZGVmZW5kZXIuYWJpbGl0eUFjdGl2ZURldGFpbHMoNTMsIGF0dGFja2VyLCB0cnVlKSkge1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc1dvbmRlckd1YXJkQWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYW1hZ2VPdXQ7XHJcbiAgfVxyXG5cclxuICBkYW1hZ2VPdXQudHlwZSA9IG1vdmVUeXBlO1xyXG4gIGRhbWFnZU91dC5jYXRlZ29yeSA9IG1vdmVDYXRlZ29yeTtcclxuXHJcbiAgLy8gXHU3Mjc5XHU2MDI3XHUzMEMwXHUzMEE2XHUzMEYzXHUzMEVEXHUzMEZDXHUzMEM5XHJcbiAgaWYgKGF0dGFja2VyLmFiaWxpdHlBY3RpdmUoOTYpKSB7XHJcbiAgICBpZiAoZGVmZW5kZXIuc3RhZ2VfZGVmIDwgZGVmZW5kZXIuc3RhZ2Vfc3BfZGVmKSB7XHJcbiAgICAgIC8vIFx1OTYzMlx1NUZBMVx1NTA3NFx1MzA2RVx1MzBCOVx1MzBDNlx1MzBGQ1x1MzBCRlx1MzBCOVx1MzA0Q1x1OTYzMlx1NUZBMVx1RkYxQ1x1NzI3OVx1OTYzMiwgXHUzMDRCXHUzMDY0XHU3MjY5XHU3NDA2XHU2MjgwXHUzMDkyXHU0RjdGXHU3NTI4ID0+IFx1NjUzQlx1NjQ4MysxXHUzMDY3XHU4QTA4XHU3Qjk3XHJcbiAgICAgIGlmIChtb3ZlQ2F0ZWdvcnkgPT0gZW9zLkNBVEVHT1JZX1BIWVNJQ0FMKSB7XHJcbiAgICAgICAgYXRrX3N0YWdlX2Jvb3N0ID0gMTtcclxuICAgICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuYWJpbGl0eU9mZmVuc2VNb2RpZmllciArPSAxO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBcdTk2MzJcdTVGQTFcdTUwNzRcdTMwNkVcdTMwQjlcdTMwQzZcdTMwRkNcdTMwQkZcdTMwQjlcdTMwNENcdTk2MzJcdTVGQTFcdTIyNjdcdTcyNzlcdTk2MzIsIFx1MzA0Qlx1MzA2NFx1NzI3OVx1NkI4QVx1NjI4MFx1MzA5Mlx1NEY3Rlx1NzUyOCA9PiBcdTcyNzlcdTY1M0IrMVx1MzA2N1x1OEEwOFx1N0I5N1xyXG4gICAgICBpZiAobW92ZUNhdGVnb3J5ID09IGVvcy5DQVRFR09SWV9TUEVDSUFMKSB7XHJcbiAgICAgICAgYXRrX3N0YWdlX2Jvb3N0ID0gMTtcclxuICAgICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuYWJpbGl0eU9mZmVuc2VNb2RpZmllciArPSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBcdTcwOEVcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNkVcdTMwN0ZcdTMwMDFcdTcyNzlcdTYwMjdcdTMwODJcdTMwODlcdTMwNDRcdTMwNzNcdTMwNkVcdTg4RENcdTZCNjNcdTMwOTJcdTgwMDNcdTYxNkVcdTMwNTlcdTMwOEJcclxuICBpZiAoYXR0YWNrZXIudHlwZXMuaW5jbHVkZXMoMikpIHtcclxuICAgIGxldCBmbGFzaEZpcmVCb29zdCA9IGF0dGFja2VyLmZsYXNoX2ZpcmVfYm9vc3Q7XHJcbiAgICBkdW5nZW9uLmRhbWFnZUNhbGMuZmxhc2hGaXJlQm9vc3QgPSBmbGFzaEZpcmVCb29zdDtcclxuICAgIGF0a19zdGFnZV9ib29zdCArPSBmbGFzaEZpcmVCb29zdDtcclxuICB9XHJcbiAgLy8gXHUzMDUzXHUzMDQ2XHUzMDUyXHUzMDREXHUzMDY2XHUzMDREIC0+IFx1NjUzQlx1NjQ4MywgXHU3Mjc5XHU2NTNCKzFcclxuICBpZiAoYXR0YWNrZXIuaXFTa2lsbEVuYWJsZWQoMHgyMiwgZHVuZ2VvbikpIHtcclxuICAgIGF0a19zdGFnZV9ib29zdCArPSAxO1xyXG4gICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmlxU2tpbGxPZmZlbnNlTW9kaWZpZXIgKz0gMTtcclxuICB9XHJcbiAgLy8gXHUzMDdGXHUzMDRDXHUzMDdFXHUzMDQ4XHUzMDhCIC0+IFx1NjUzQlx1NjQ4MywgXHU3Mjc5XHU2NTNCLTFcclxuICBpZiAoYXR0YWNrZXIuaXFTa2lsbEVuYWJsZWQoMHgyMywgZHVuZ2VvbikpIHtcclxuICAgIGF0a19zdGFnZV9ib29zdCAtPSAxO1xyXG4gICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmlxU2tpbGxPZmZlbnNlTW9kaWZpZXIgLT0gMTtcclxuICB9XHJcbiAgLy8gXHUzMDRCXHUzMDVGXHUzMDZBXHUzMDg5XHUzMDU3IC0+IFx1NjUzQlx1NjQ4MywgXHU3Mjc5XHU2NTNCKzFcclxuICBpZiAoYXR0YWNrZXIuaXFTa2lsbEVuYWJsZWQoMHgzYywgZHVuZ2VvbikgJiYgYXR0YWNrZXIuZmxhZ19wcmFjdGljZV9zd2luZ2VyKSB7XHJcbiAgICBhdGtfc3RhZ2VfYm9vc3QgKz0gMTtcclxuICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5pcVNraWxsT2ZmZW5zZU1vZGlmaWVyICs9IDE7XHJcbiAgfVxyXG4gIC8vIFx1MzA0QVx1MzA0Nlx1MzA0OFx1MzA5M1x1NjMwMVx1MzA2MVx1MzA2RVx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1MzA0Q1x1OTZBM1x1NjNBNSAtPiBcdTY1M0JcdTY0ODMsIFx1NzI3OVx1NjUzQisxXHJcbiAgaWYgKGR1bmdlb24ub3RoZXJNb25zdGVycy5pcVNraWxsRW5hYmxlZCgweDMyLCBkdW5nZW9uKSkge1xyXG4gICAgYXRrX3N0YWdlX2Jvb3N0ICs9IDE7XHJcbiAgfVxyXG5cclxuICAvLyBcdTcyNjlcdTc0MDZcclxuICBpZiAobW92ZUNhdGVnb3J5ID09IGVvcy5DQVRFR09SWV9QSFlTSUNBTCkge1xyXG4gICAgLy8gXHUzMDY4XHUzMDQ2XHUzMDVEXHUzMDQ2XHUzMDU3XHUzMDkzIChcdTU0MENcdTYwMjdcdTMwNjdcdTY1M0JcdTY0ODMrMSwgXHU3NTcwXHU2MDI3XHUzMDY3XHU2NTNCXHU2NDgzLTEpXHJcbiAgICBpZiAoYXR0YWNrZXIuYWJpbGl0eUFjdGl2ZSgweDY4KSkge1xyXG4gICAgICBpZiAoR2VuZGVyc0VxdWFsTm90R2VuZGVybGVzcyhhdHRhY2tlciwgZGVmZW5kZXIpKSB7XHJcbiAgICAgICAgYXRrX3N0YWdlX2Jvb3N0ICs9IDE7XHJcbiAgICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmFiaWxpdHlPZmZlbnNlTW9kaWZpZXIgKz0gMTtcclxuICAgICAgfSBlbHNlIGlmIChhdHRhY2tlci5nZW5kZXIgIT0gZW9zLkdFTkRFUl9HRU5ERVJMRVNTICYmIGRlZmVuZGVyLmdlbmRlciAhPSBlb3MuR0VOREVSX0dFTkRFUkxFU1MpIHtcclxuICAgICAgICBhdGtfc3RhZ2VfYm9vc3QgLT0gMTtcclxuICAgICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuYWJpbGl0eU9mZmVuc2VNb2RpZmllciAtPSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBcdTY1M0JcdTY0ODNcdTUwNzRcdTMwN0VcdTMwNUZcdTMwNkZcdTY1M0JcdTY0ODNcdTUwNzRcdTMwNkVcdTRFRjJcdTk1OTNcdTMwNENcdTMwRDVcdTMwRTlcdTMwRUZcdTMwRkNcdTMwQUVcdTMwRDVcdTMwQzgsXHJcbiAgICAvLyBcdTMwNEJcdTMwNjRcdTY1M0JcdTY0ODNcdTUwNzRcdTMwNENcdTMwNzJcdTMwNTZcdTMwNTdcdTMwNENcdTMwNjRcdTMwODhcdTMwNDRcdTMwNkVcdTVGNzFcdTk3RkZcdTMwOTJcdTUzRDdcdTMwNTFcdTMwNjZcdTMwNDRcdTMwOEIgLT4gXHU2NTNCXHU2NDgzKzFcclxuICAgIGlmIChcclxuICAgICAgYXR0YWNrZXIucGVyY2VpdmVkV2VhdGhlcihkdW5nZW9uKSA9PSBlb3MuV0VBVEhFUl9TVU5OWSAmJlxyXG4gICAgICAoYXR0YWNrZXIuYWJpbGl0eUFjdGl2ZSgweDcxKSB8fCBhdHRhY2tlci5vdGhlck1vbnN0ZXJBYmlsaXR5QWN0aXZlKDB4NzEsIGR1bmdlb24pKVxyXG4gICAgKSB7XHJcbiAgICAgIGF0a19zdGFnZV9ib29zdCArPSAxO1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuYWJpbGl0eU9mZmVuc2VNb2RpZmllciArPSAxO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBcdTcyNzlcdTZCOEFcclxuICBlbHNlIHtcclxuICAgIC8vIFx1MzBCNVx1MzBGM1x1MzBEMVx1MzBFRlx1MzBGQ1x1MzA0Qlx1MzA2NFx1MzA3Mlx1MzA1Nlx1MzA1N1x1MzA0Q1x1MzA2NFx1MzA4OFx1MzA0NFx1MzA2RVx1NUY3MVx1OTdGRlx1MzA5Mlx1NTNEN1x1MzA1MVx1MzA2Nlx1MzA0NFx1MzA4QiAtPiBcdTcyNzlcdTY1M0IrMlxyXG4gICAgaWYgKGF0dGFja2VyLmFiaWxpdHlBY3RpdmUoMHg1YSkgJiYgYXR0YWNrZXIucGVyY2VpdmVkV2VhdGhlcihlb3MuV0VBVEhFUl9TVU5OWSkpIHtcclxuICAgICAgYXRrX3N0YWdlX2Jvb3N0ICs9IDI7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5hYmlsaXR5T2ZmZW5zZU1vZGlmaWVyICs9IDI7XHJcbiAgICB9XHJcbiAgICAvLyBcdTk2MzJcdTVGQTFcdTUwNzRcdTMwNENcdTMwNzJcdTMwNTZcdTMwNTdcdTMwNENcdTMwNjRcdTMwODhcdTMwNDRcdTMwNkVcdTVGNzFcdTk3RkZcdTMwOTJcdTUzRDdcdTMwNTFcdTMwNjZcdTMwNDRcdTMwOEIsXHJcbiAgICAvLyBcdTMwNEJcdTMwNjRcdTk2MzJcdTVGQTFcdTUwNzRcdTMwN0VcdTMwNUZcdTMwNkZcdTk2MzJcdTVGQTFcdTUwNzRcdTMwNkVcdTRFRjJcdTk1OTNcdTMwNENcdTMwRDVcdTMwRTlcdTMwRUZcdTMwRkNcdTMwQUVcdTMwRDVcdTMwQzggLT4gXHU3Mjc5XHU5NjMyKzFcclxuICAgIGlmIChcclxuICAgICAgZGVmZW5kZXIucGVyY2VpdmVkV2VhdGhlcihkdW5nZW9uKSA9PSBlb3MuV0VBVEhFUl9TVU5OWSAmJlxyXG4gICAgICAoZGVmZW5kZXIuYWJpbGl0eUFjdGl2ZSgweDcxKSB8fCBkZWZlbmRlci5vdGhlck1vbnN0ZXJBYmlsaXR5QWN0aXZlKDB4NzEsIGR1bmdlb24pKVxyXG4gICAgKSB7XHJcbiAgICAgIGRlZl9zdGFnZSA9IDE7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5hYmlsaXR5RGVmZW5zZU1vZGlmaWVyICs9IDE7XHJcbiAgICB9XHJcbiAgICAvLyBcdTk2MzJcdTVGQTFcdTUwNzRcdTMwNENcdTMwNTlcdTMwNkFcdTMwNDJcdTMwODlcdTMwNTdcdTMwNkVcdTVGNzFcdTk3RkZcdTMwOTJcdTUzRDdcdTMwNTFcdTMwNjZcdTMwNDRcdTMwOEIsXHJcbiAgICAvLyBcdTMwNEJcdTMwNjRcdTk2MzJcdTVGQTFcdTUwNzRcdTMwNkVcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNENcdTVDQTlcdTMwQkZcdTMwQTRcdTMwRDcgLT4gXHU3Mjc5XHU5NjMyKzJcclxuICAgIGlmIChkZWZlbmRlci5wZXJjZWl2ZWRXZWF0aGVyKGR1bmdlb24pID09IGVvcy5XRUFUSEVSX1NBTkRTVE9STSkge1xyXG4gICAgICBpZiAoZGVmZW5kZXIudHlwZXMuaW5jbHVkZXMoMHhkKSkge1xyXG4gICAgICAgIGRlZl9zdGFnZSArPSAyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBcdTMwQzdcdTMwQUFcdTMwQURcdTMwQjdcdTMwQjkgKFx1MzBBMlx1MzBCRlx1MzBDM1x1MzBBRikgLT4gXHU2NTNCXHU2NDgzLCBcdTcyNzlcdTY1M0IrMlxyXG4gIGlmIChhdHRhY2tlci5pZCA9PSAweDFhMykge1xyXG4gICAgYXRrX3N0YWdlX2Jvb3N0ICs9IDI7XHJcbiAgfVxyXG4gIC8vIFx1MzBDN1x1MzBBQVx1MzBBRFx1MzBCN1x1MzBCOSAoXHUzMEM3XHUzMEEzXHUzMEQ1XHUzMEE3XHUzMEYzXHUzMEI5KSAtPiBcdTY1M0JcdTY0ODMsIFx1NzI3OVx1NjUzQi0yXHJcbiAgaWYgKGF0dGFja2VyLmlkID09IDB4MWE0KSB7XHJcbiAgICBhdGtfc3RhZ2VfYm9vc3QgLT0gMjtcclxuICB9XHJcbiAgLy8gXHUzMEM3XHUzMEFBXHUzMEFEXHUzMEI3XHUzMEI5IChcdTMwQjlcdTMwRDRcdTMwRkNcdTMwQzkpIC0+IFx1NjUzQlx1NjQ4MywgXHU3Mjc5XHU2NTNCLTJcclxuICBpZiAoYXR0YWNrZXIuaWQgPT0gMHgxYTUpIHtcclxuICAgIGF0a19zdGFnZV9ib29zdCAtPSAyO1xyXG4gIH1cclxuICAvLyBcdTMwQUVcdTMwRTlcdTMwQzZcdTMwQTNcdTMwQ0EgKFx1MzBBMlx1MzBDQVx1MzBCNlx1MzBGQykgLT4gXHU2NTNCXHU2NDgzLCBcdTcyNzlcdTY1M0ItMlxyXG4gIGlmIChhdHRhY2tlci5pZCA9PSAweDIxMSkge1xyXG4gICAgYXRrX3N0YWdlX2Jvb3N0IC09IDI7XHJcbiAgfVxyXG4gIC8vIFx1MzBBRVx1MzBFOVx1MzBDNlx1MzBBM1x1MzBDQSAoXHUzMEFBXHUzMEVBXHUzMEI4XHUzMEYzKSAtPiBcdTY1M0JcdTY0ODMsIFx1NzI3OVx1NjUzQisyXHJcbiAgaWYgKGF0dGFja2VyLmlkID09IDB4MjE4KSB7XHJcbiAgICBhdGtfc3RhZ2VfYm9vc3QgKz0gMjtcclxuICB9XHJcblxyXG4gIC8vIFx1NjUzQlx1NjQ4M1x1N0NGQlx1MzBFOVx1MzBGM1x1MzBBRlx1N0Q3MVx1NTQwOFxyXG4gIGxldCBhdGtfc3RhZ2UgPVxyXG4gICAgbW92ZUNhdGVnb3J5ID09IGVvcy5DQVRFR09SWV9QSFlTSUNBTFxyXG4gICAgICA/IGF0dGFja2VyLnN0YWdlX2F0ayArIGF0a19zdGFnZV9ib29zdFxyXG4gICAgICA6IGF0dGFja2VyLnN0YWdlX3NwX2F0ayArIGF0a19zdGFnZV9ib29zdDtcclxuICAvLyBcdTMwNDRcdTMwNEJcdTMwOEFcdTMwNkVcdTMwNjRcdTMwN0NcdTMwNENcdTY3MDlcdTUyQjkgLT4gXHU2NTNCXHU2NDgzXHU3Q0ZCXHUzMEU5XHUzMEYzXHUzMEFGXHU2NzAwXHU1OTI3KDIwKVxyXG4gIGlmIChhdHRhY2tlci5mbGFnX2FuZ2VyX3BvaW50ICYmIGF0dGFja2VyLmFiaWxpdHlBY3RpdmUoMHg0ZikpIHtcclxuICAgIGF0a19zdGFnZSA9IDIwO1xyXG4gIH1cclxuXHJcbiAgLy8gXHU3MjY5XHU3NDA2XHJcbiAgaWYgKG1vdmVDYXRlZ29yeSA9PSBlb3MuQ0FURUdPUllfUEhZU0lDQUwpIHtcclxuICAgIC8vIFx1MzBFRFx1MzBCMVx1MzBDM1x1MzBDOFx1MzA1QVx1MzA2NFx1MzA0RFx1NEUyRFx1MzA2Rlx1OTYzMlx1NUZBMSsxXHJcbiAgICBpZiAoZGVmZW5kZXIuc3RhdHVzZXMuc2t1bGxfYmFzaCkge1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuc2t1bGxCYXNoRGVmZW5zZUJvb3N0QWN0aXZhdGVkID0gdHJ1ZTtcclxuICAgICAgZGVmX3N0YWdlICs9IDE7XHJcbiAgICB9XHJcbiAgICAvLyBcdTMwN0VcdTMwNTFcdTMwOTNcdTMwNEQgLT4gXHU5NjMyXHU1RkExLTFcclxuICAgIGlmIChkZWZlbmRlci5pcVNraWxsRW5hYmxlZCgweDMxLCBkdW5nZW9uKSkge1xyXG4gICAgICBkZWZfc3RhZ2UgLT0gMTtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmlxU2tpbGxEZWZlbnNlTW9kaWZpZXIgLT0gMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFx1MzA1M1x1MzA0Nlx1MzA1Mlx1MzA0RFx1MzA2Nlx1MzA0RCAtPiBcdTk2MzJcdTVGQTEsIFx1NzI3OVx1OTYzMi0xXHJcbiAgaWYgKGRlZmVuZGVyLmlxU2tpbGxFbmFibGVkKDB4MjIsIGR1bmdlb24pKSB7XHJcbiAgICBkZWZfc3RhZ2UgLT0gMTtcclxuICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5pcVNraWxsRGVmZW5zZU1vZGlmaWVyIC09IDE7XHJcbiAgfVxyXG4gIC8vIFx1MzA3Rlx1MzA0Q1x1MzA3RVx1MzA0OFx1MzA4QiAtPiBcdTk2MzJcdTVGQTEsIFx1NzI3OVx1OTYzMisxXHJcbiAgaWYgKGRlZmVuZGVyLmlxU2tpbGxFbmFibGVkKDB4MjMsIGR1bmdlb24pKSB7XHJcbiAgICBkZWZfc3RhZ2UgKz0gMTtcclxuICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5pcVNraWxsRGVmZW5zZU1vZGlmaWVyICs9IDE7XHJcbiAgfVxyXG5cclxuICAvLyBcdTMwQzdcdTMwQUFcdTMwQURcdTMwQjdcdTMwQjkgKFx1MzBBMlx1MzBCRlx1MzBDM1x1MzBBRikgLT4gXHU5NjMyXHU1RkExLCBcdTcyNzlcdTk2MzItMlxyXG4gIGlmIChkZWZlbmRlci5pZCA9PSAweDFhMykge1xyXG4gICAgZGVmX3N0YWdlIC09IDI7XHJcbiAgfVxyXG4gIC8vIFx1MzBDN1x1MzBBQVx1MzBBRFx1MzBCN1x1MzBCOSAoXHUzMEM3XHUzMEEzXHUzMEQ1XHUzMEE3XHUzMEYzXHUzMEI5KSAtPiBcdTk2MzJcdTVGQTEsIFx1NzI3OVx1OTYzMisyXHJcbiAgaWYgKGRlZmVuZGVyLmlkID09IDB4MWE0KSB7XHJcbiAgICBkZWZfc3RhZ2UgKz0gMjtcclxuICB9XHJcbiAgLy8gXHUzMEM3XHUzMEFBXHUzMEFEXHUzMEI3XHUzMEI5IChcdTMwQjlcdTMwRDRcdTMwRkNcdTMwQzkpIC0+IFx1OTYzMlx1NUZBMSwgXHU3Mjc5XHU5NjMyLTJcclxuICBpZiAoZGVmZW5kZXIuaWQgPT0gMHgxYTUpIHtcclxuICAgIGRlZl9zdGFnZSAtPSAyO1xyXG4gIH1cclxuICAvLyBcdTY1RTVcdTY3MkNcdTcyNDhcdTMwNkVcdTMwN0ZcdTMwQUVcdTMwRTlcdTMwQzZcdTMwQTNcdTMwQ0FcdTMwNkVcdTMwRDVcdTMwQTlcdTMwRUJcdTMwRTBcdTg4RENcdTZCNjNcdTMwNkJcdTMwRDBcdTMwQjBcdTMwNENcdTMwNDJcdTMwOEFcdTMwMDFcclxuICAvLyBcdTk2MzJcdTVGQTFcdTk1QTJcdTkwMjNcdTMwNkVcdTg4RENcdTZCNjNcdTMwNENcdTc2RjhcdTYyNEIoYXR0YWNrZXIpXHUzMDZCXHU5MDY5XHU3NTI4XHUzMDU1XHUzMDhDXHUzMDhCXHJcbiAgLy8gXHU2RDc3XHU1OTE2XHU3MjQ4XHUzMDY3XHUzMDZGXHU2QjYzXHUzMDU3XHUzMDRGXHU4MUVBXHU1MjA2XHU4MUVBXHU4RUFCKGRlZmVuZGVyKVx1MzA2Qlx1OTA2OVx1NzUyOFx1MzA1OVx1MzA4QlxyXG4gIGNvbnN0IGVudGl0eV9qcEdpcmF0aW5hID0gZHVuZ2Vvbi5yZWdpb25fanAgPyBhdHRhY2tlciA6IGRlZmVuZGVyO1xyXG4gIC8vIFx1MzBBRVx1MzBFOVx1MzBDNlx1MzBBM1x1MzBDQSAoXHUzMEEyXHUzMENBXHUzMEI2XHUzMEZDKSAtPiBcdTk2MzJcdTVGQTEsIFx1NzI3OVx1OTYzMisyXHJcbiAgaWYgKGVudGl0eV9qcEdpcmF0aW5hLmlkID09IDB4MjExKSB7XHJcbiAgICBkZWZfc3RhZ2UgKz0gMjtcclxuICB9XHJcbiAgLy8gXHUzMEFFXHUzMEU5XHUzMEM2XHUzMEEzXHUzMENBIChcdTMwQUFcdTMwRUFcdTMwQjhcdTMwRjMpIC0+IFx1OTYzMlx1NUZBMSwgXHU3Mjc5XHU5NjMyLTJcclxuICBpZiAoZW50aXR5X2pwR2lyYXRpbmEuaWQgPT0gMHgyMTgpIHtcclxuICAgIGRlZl9zdGFnZSAtPSAyO1xyXG4gIH1cclxuXHJcbiAgZGVmX3N0YWdlICs9IG1vdmVDYXRlZ29yeSA9PSBlb3MuQ0FURUdPUllfUEhZU0lDQUwgPyBkZWZlbmRlci5zdGFnZV9kZWYgOiBkZWZlbmRlci5zdGFnZV9zcF9kZWY7XHJcblxyXG4gIC8vIFx1MzA0QVx1MzA1N1x1MzA0QVx1MzA0RCAtPiBcdTc2RjhcdTYyNEJcdTMwNkVcdTRFMEFcdTY2MDdcdTMwNTdcdTMwNUZcdTMwRTlcdTMwRjNcdTMwQUZcdTY1NzBcdTUyMDZcdTMwOTJcdTgxRUFcdThFQUJcdTMwNkVcdTY1M0JcdTY0ODNcdTMwRTlcdTMwRjNcdTMwQUZcdTMwNjhcdTMwNTdcdTMwNjZcdTY1M0JcdTY0ODNcclxuICBpZiAobW92ZUlkID09IDB4MWJkKSB7XHJcbiAgICBhdGtfc3RhZ2VfYm9vc3QgPSAwO1xyXG5cclxuICAgIC8vIFx1NzZGOFx1NjI0Qlx1MzA2RVx1NjUzQlx1NjQ4M1x1MzBFOVx1MzBGM1x1MzBBRlx1NTIwNlx1MzA2RVx1ODhEQ1x1NkI2M1x1MzA5Mlx1OTA2OVx1NzUyOFxyXG4gICAgbGV0IHN0YWdlID0gZGVmZW5kZXIuc3RhZ2VfYXRrO1xyXG4gICAgaWYgKHN0YWdlID4gMTApIGF0a19zdGFnZV9ib29zdCA9ICgoc3RhZ2UgLSAxMCkgPDwgMTYpID4+IDE2O1xyXG4gICAgLy8gXHU3NkY4XHU2MjRCXHUzMDZFXHU5NjMyXHU1RkExXHUzMEU5XHUzMEYzXHUzMEFGXHU1MjA2XHUzMDZFXHU4OERDXHU2QjYzXHUzMDkyXHU5MDY5XHU3NTI4XHJcbiAgICBzdGFnZSA9IGRlZmVuZGVyLnN0YWdlX2RlZjtcclxuICAgIGlmIChzdGFnZSA+IDEwKSBhdGtfc3RhZ2VfYm9vc3QgPSAoKGF0a19zdGFnZV9ib29zdCArIHN0YWdlIC0gMTApIDw8IDE2KSA+PiAxNjtcclxuICAgIC8vIFx1NzZGOFx1NjI0Qlx1MzA2RVx1NzI3OVx1NjUzQlx1MzBFOVx1MzBGM1x1MzBBRlx1NTIwNlx1MzA2RVx1ODhEQ1x1NkI2M1x1MzA5Mlx1OTA2OVx1NzUyOFxyXG4gICAgc3RhZ2UgPSBkZWZlbmRlci5zdGFnZV9zcF9hdGs7XHJcbiAgICBpZiAoc3RhZ2UgPiAxMCkgYXRrX3N0YWdlX2Jvb3N0ID0gKChhdGtfc3RhZ2VfYm9vc3QgKyBzdGFnZSAtIDEwKSA8PCAxNikgPj4gMTY7XHJcbiAgICAvLyBcdTc2RjhcdTYyNEJcdTMwNkVcdTcyNzlcdTk2MzJcdTMwRTlcdTMwRjNcdTMwQUZcdTUyMDZcdTMwNkVcdTg4RENcdTZCNjNcdTMwOTJcdTkwNjlcdTc1MjhcclxuICAgIHN0YWdlID0gZGVmZW5kZXIuc3RhZ2Vfc3BfZGVmO1xyXG4gICAgaWYgKHN0YWdlID4gMTApIGF0a19zdGFnZV9ib29zdCA9ICgoYXRrX3N0YWdlX2Jvb3N0ICsgc3RhZ2UgLSAxMCkgPDwgMTYpID4+IDE2O1xyXG5cclxuICAgIGF0a19zdGFnZSArPSBhdGtfc3RhZ2VfYm9vc3Q7XHJcbiAgfVxyXG5cclxuICAvLyBcdTMwNjZcdTMwOTNcdTMwNkRcdTMwOTNcclxuICBpZiAoYXR0YWNrZXIuYWJpbGl0eUFjdGl2ZSgweDY3KSkge1xyXG4gICAgZGVmX3N0YWdlID0gMTA7XHJcbiAgICBkZWZfc3RhZ2VfbXVsdCA9IDE7XHJcbiAgfSBlbHNlIGlmIChkZWZlbmRlci5hYmlsaXR5QWN0aXZlKDB4NjcpKSB7XHJcbiAgICBhdGtfc3RhZ2UgPSAxMDtcclxuICAgIGF0a19zdGFnZV9tdWx0ID0gMTtcclxuICB9XHJcblxyXG4gIC8vIFx1NEUwQlx1OTY1MFx1NTFFNlx1NzQwNlxyXG4gIGlmIChhdGtfc3RhZ2UgPCAwKSBhdGtfc3RhZ2UgPSAwO1xyXG4gIC8vIFx1NEUwQVx1OTY1MFx1NTFFNlx1NzQwNlxyXG4gIGlmIChhdGtfc3RhZ2UgPiAyMCkgYXRrX3N0YWdlID0gMjA7XHJcblxyXG4gIC8vIFx1NjUzQlx1NjQ4M1x1NjMwN1x1NjU3MFx1MzA2RVx1OEEwOFx1N0I5N1xyXG4gIGR1bmdlb24uZGFtYWdlQ2FsYy5vZmZlbnNpdmVTdGF0U3RhZ2UgPSBhdGtfc3RhZ2U7XHJcbiAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLm9mZmVuc2l2ZVN0YXQgPSBtb3ZlQ2F0ZWdvcnkgPT0gZW9zLkNBVEVHT1JZX1BIWVNJQ0FMID8gYXR0YWNrZXIuYXRrIDogYXR0YWNrZXIuc3BfYXRrO1xyXG4gIGNvbnN0IGF0a19zdGF0X3N0YWdlX211bHQgPSBNZWNoYW5pY3MuT0ZGRU5TSVZFX1NUQVRfU1RBR0VfTVVMVElQTElFUlNbYXRrX3N0YWdlXTtcclxuICBjb25zdCBhdGtfbXVsdCA9XHJcbiAgICBtb3ZlQ2F0ZWdvcnkgPT0gZW9zLkNBVEVHT1JZX1BIWVNJQ0FMID8gYXR0YWNrZXIuYXRrICogYXRrX3N0YXRfc3RhZ2VfbXVsdCA6IGF0dGFja2VyLnNwX2F0ayAqIGF0a19zdGF0X3N0YWdlX211bHQ7XHJcbiAgbGV0IGF0ayA9IE1hdGgudHJ1bmMoYXRrX211bHQgKiBhdGtfc3RhZ2VfbXVsdCk7XHJcblxyXG4gIC8vIFx1NEUwQlx1OTY1MFx1NTFFNlx1NzQwNlxyXG4gIGlmIChkZWZfc3RhZ2UgPCAwKSBkZWZfc3RhZ2UgPSAwO1xyXG4gIC8vIFx1NEUwQVx1OTY1MFx1NTFFNlx1NzQwNlxyXG4gIGlmIChkZWZfc3RhZ2UgPiAyMCkgZGVmX3N0YWdlID0gMjA7XHJcblxyXG4gIC8vIFx1OTYzMlx1NUZBMVx1NjMwN1x1NjU3MFx1MzA2RVx1OEEwOFx1N0I5N1xyXG4gIGR1bmdlb24uZGFtYWdlQ2FsYy5kZWZlbnNpdmVTdGF0U3RhZ2UgPSBkZWZfc3RhZ2U7XHJcbiAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmRlZmVuc2l2ZVN0YXQgPSBtb3ZlQ2F0ZWdvcnkgPT0gZW9zLkNBVEVHT1JZX1BIWVNJQ0FMID8gZGVmZW5kZXIuZGVmIDogZGVmZW5kZXIuc3BfZGVmO1xyXG4gIGNvbnN0IGRlZl9tdWx0ID1cclxuICAgIG1vdmVDYXRlZ29yeSA9PSBlb3MuQ0FURUdPUllfUEhZU0lDQUxcclxuICAgICAgPyBkZWZlbmRlci5kZWYgKiBNZWNoYW5pY3MuREVGRU5TSVZFX1NUQVRfU1RBR0VfTVVMVElQTElFUlNbZGVmX3N0YWdlXVxyXG4gICAgICA6IGRlZmVuZGVyLnNwX2RlZiAqIE1lY2hhbmljcy5ERUZFTlNJVkVfU1RBVF9TVEFHRV9NVUxUSVBMSUVSU1tkZWZfc3RhZ2VdO1xyXG4gIGxldCBkZWYgPSBNYXRoLnRydW5jKGRlZl9tdWx0ICogZGVmX3N0YWdlX211bHQpO1xyXG5cclxuICAvLyBcdTVDMDJcdTc1MjhcdTkwNTNcdTUxNzdcdTMwNkVcdTMwQjlcdTMwQzZcdTMwRkNcdTMwQkZcdTMwQjlcdTRFMEFcdTY2MDdcdTUyQjlcdTY3OUNcdTMwOTJcdTkwNjlcdTc1MjggKFx1MzBDMVx1MzBGQ1x1MzBFMFx1MzBFMVx1MzBGM1x1MzBEMFx1MzBGQ1x1MzA2RVx1MzA3RilcclxuICBpZiAoYXR0YWNrZXIuaXNfbWVtYmVyKSB7XHJcbiAgICBhdGsgKz0gYXR0YWNrZXIuZXhjbHVzaXZlSXRlbU9mZmVuc2VCb29zdChtb3ZlQ2F0ZWdvcnkpO1xyXG4gIH1cclxuICBpZiAoZGVmZW5kZXIuaXNfbWVtYmVyKSB7XHJcbiAgICBkZWYgKz0gZGVmZW5kZXIuZXhjbHVzaXZlSXRlbURlZmVuc2VCb29zdChtb3ZlQ2F0ZWdvcnkpO1xyXG4gIH1cclxuXHJcbiAgLy8gXHU3MjY5XHU3NDA2XHJcbiAgaWYgKG1vdmVDYXRlZ29yeSA9PSBlb3MuQ0FURUdPUllfUEhZU0lDQUwpIHtcclxuICAgIC8vIFx1MzBEMVx1MzBFRlx1MzBGQ1x1MzBEMFx1MzBGM1x1MzBDMFx1MzBDQVxyXG4gICAgaWYgKGF0dGFja2VyLml0ZW1BY3RpdmUoMHgxYSkpIHtcclxuICAgICAgYXRrICs9IE1lY2hhbmljcy5QT1dFUl9CQU5EX1NUQVRfQk9PU1Q7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5pdGVtQXRrTW9kaWZpZXIgKz0gTWVjaGFuaWNzLlBPV0VSX0JBTkRfU1RBVF9CT09TVDtcclxuICAgIH1cclxuICAgIC8vIFx1MzBCNFx1MzBGM1x1MzBEOVx1MzA2RVx1MzBDRlx1MzBFOVx1MzBERVx1MzBBRFxyXG4gICAgaWYgKGF0dGFja2VyLml0ZW1BY3RpdmUoMHgzMikpIHtcclxuICAgICAgYXRrICs9IE1lY2hhbmljcy5NVU5DSF9CRUxUX1NUQVRfQk9PU1Q7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5pdGVtQXRrTW9kaWZpZXIgKz0gTWVjaGFuaWNzLk1VTkNIX0JFTFRfU1RBVF9CT09TVDtcclxuICAgIH1cclxuICAgIC8vIFx1NkNFMlx1NTJENVx1ODI3Mlx1MzBFQVx1MzBEQ1x1MzBGM1xyXG4gICAgaWYgKGF0dGFja2VyLmF1cmFCb3dBY3RpdmUoKSkge1xyXG4gICAgICBhdGsgKz0gTWVjaGFuaWNzLkFVUkFfQk9XX1NUQVRfQk9PU1Q7XHJcbiAgICAgIC8vIFtcdTMwRDBcdTMwQjBdIFx1NEY1NVx1NjU0NVx1MzA0Qlx1NjUzQlx1NjQ4M1x1NEUwQVx1NjYwN1x1NTIwNlx1MzA0Q1x1NzI3OVx1NjUzQlx1NEUwQVx1NjYwN1x1NTIwNlx1MzA2OFx1MzA1N1x1MzA2Nlx1MzBBQlx1MzBBNlx1MzBGM1x1MzBDOFx1MzA1NVx1MzA4Q1x1MzA4Qlx1RkYxRiAoXHU4QTA4XHU3Qjk3XHUzMDZCXHUzMDZGXHU1RjcxXHU5N0ZGXHUzMDZBXHUzMDU3KVxyXG4gICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuaXRlbVNwQXRrTW9kaWZpZXIgKz0gTWVjaGFuaWNzLkFVUkFfQk9XX1NUQVRfQk9PU1Q7XHJcbiAgICB9XHJcbiAgICBpZiAoZnVsbENhbGMpIHtcclxuICAgICAgLy8gXHUzMDdDXHUzMDQ2XHUzMDRFXHUzMDg3XHUzMEI5XHUzMEFCXHUzMEZDXHUzMEQ1XHJcbiAgICAgIGlmIChkZWZlbmRlci5pdGVtQWN0aXZlKDB4MDI1KSkge1xyXG4gICAgICAgIGRlZiArPSBNZWNoYW5pY3MuREVGX1NDQVJGX1NUQVRfQk9PU1Q7XHJcbiAgICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLml0ZW1EZWZNb2RpZmllciArPSBNZWNoYW5pY3MuREVGX1NDQVJGX1NUQVRfQk9PU1Q7XHJcbiAgICAgIH1cclxuICAgICAgLy8gXHU2Q0UyXHU1MkQ1XHU4MjcyXHUzMEVBXHUzMERDXHUzMEYzXHJcbiAgICAgIGlmIChkZWZlbmRlci5hdXJhQm93QWN0aXZlKCkpIHtcclxuICAgICAgICBkZWYgKz0gTWVjaGFuaWNzLkFVUkFfQk9XX1NUQVRfQk9PU1Q7XHJcbiAgICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLml0ZW1EZWZNb2RpZmllciArPSBNZWNoYW5pY3MuQVVSQV9CT1dfU1RBVF9CT09TVDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvLyBcdTcyNzlcdTZCOEFcclxuICBlbHNlIHtcclxuICAgIGlmIChmdWxsQ2FsYykge1xyXG4gICAgICAvLyBcdTMwQURcdTMwQzhcdTMwQjVcdTMwRjNcdTMwRDBcdTMwRjNcdTMwQzBcdTMwQ0FcclxuICAgICAgaWYgKGRlZmVuZGVyLml0ZW1BY3RpdmUoMHgyOSkpIHtcclxuICAgICAgICBkZWYgKz0gTWVjaGFuaWNzLlpJTkNfQkFORF9TVEFUX0JPT1NUO1xyXG4gICAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5pdGVtU3BEZWZNb2RpZmllciArPSBNZWNoYW5pY3MuWklOQ19CQU5EX1NUQVRfQk9PU1Q7XHJcbiAgICAgIH1cclxuICAgICAgLy8gXHU2Q0UyXHU1MkQ1XHU4MjcyXHUzMEVBXHUzMERDXHUzMEYzXHJcbiAgICAgIGlmIChkZWZlbmRlci5hdXJhQm93QWN0aXZlKCkpIHtcclxuICAgICAgICBkZWYgKz0gTWVjaGFuaWNzLkFVUkFfQk9XX1NUQVRfQk9PU1Q7XHJcbiAgICAgICAgLy8gW1x1MzBEMFx1MzBCMF0gXHU0RjU1XHU2NTQ1XHUzMDRCXHU3Mjc5XHU5NjMyXHU0RTBBXHU2NjA3XHU1MjA2XHUzMDRDXHU5NjMyXHU1RkExXHU0RTBBXHU2NjA3XHU1MjA2XHUzMDY4XHUzMDU3XHUzMDY2XHUzMEFCXHUzMEE2XHUzMEYzXHUzMEM4XHUzMDU1XHUzMDhDXHUzMDhCXHVGRjFGIChcdThBMDhcdTdCOTdcdTMwNkJcdTMwNkZcdTVGNzFcdTk3RkZcdTMwNkFcdTMwNTcpXHJcbiAgICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLml0ZW1EZWZNb2RpZmllciArPSBNZWNoYW5pY3MuQVVSQV9CT1dfU1RBVF9CT09TVDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gXHUzMEI5XHUzMERBXHUzMEI3XHUzMEUzXHUzMEVCXHUzMEVBXHUzMERDXHUzMEYzXHJcbiAgICBpZiAoYXR0YWNrZXIuaXRlbUFjdGl2ZSgweDI4KSkge1xyXG4gICAgICBhdGsgKz0gTWVjaGFuaWNzLlNQRUNJQUxfQkFORF9TVEFUX0JPT1NUO1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuaXRlbVNwQXRrTW9kaWZpZXIgKz0gTWVjaGFuaWNzLlNQRUNJQUxfQkFORF9TVEFUX0JPT1NUO1xyXG4gICAgfVxyXG4gICAgLy8gXHUzMEI0XHUzMEYzXHUzMEQ5XHUzMDZFXHUzMENGXHUzMEU5XHUzMERFXHUzMEFEXHJcbiAgICBpZiAoYXR0YWNrZXIuaXRlbUFjdGl2ZSgweDMyKSkge1xyXG4gICAgICBhdGsgKz0gTWVjaGFuaWNzLk1VTkNIX0JFTFRfU1RBVF9CT09TVDtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLml0ZW1TcEF0a01vZGlmaWVyICs9IE1lY2hhbmljcy5NVU5DSF9CRUxUX1NUQVRfQk9PU1Q7XHJcbiAgICB9XHJcbiAgICAvLyBcdTZDRTJcdTUyRDVcdTgyNzJcdTMwRUFcdTMwRENcdTMwRjMgKFtcdTMwRDBcdTMwQjBdIFx1OTYzMlx1NUZBMVx1NTA3NFx1MzA0Q1x1NjMwMVx1MzA2M1x1MzA2Nlx1MzA0NFx1MzA4Qlx1MzA2OFx1NjUzQlx1NjQ4M1x1NTA3NFx1MzA2RVx1NzI3OVx1NjUzQlx1MzA0Q1x1NEUwQVx1MzA0Q1x1MzA4Qlx1RkYxRilcclxuICAgIGlmIChkZWZlbmRlci5hdXJhQm93QWN0aXZlKCkpIHtcclxuICAgICAgYXRrICs9IE1lY2hhbmljcy5BVVJBX0JPV19TVEFUX0JPT1NUO1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuaXRlbVNwQXRrTW9kaWZpZXIgKz0gTWVjaGFuaWNzLkFVUkFfQk9XX1NUQVRfQk9PU1Q7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBcdTVBMDFcdTUyOUJcdThBMDhcdTdCOTdcclxuICBjb25zdCBwb3dlciA9IG1vdmVQb3dlciAqIGF0a19zdGF0X3N0YWdlX211bHQgKiBhdGtfc3RhZ2VfbXVsdDtcclxuXHJcbiAgbGV0IGF0a19tdWx0X2ludCA9IDE7IC8vIGF0ayBcdTRFNTdcdTdCOTdcdTUwMjRcclxuICBsZXQgYXRrX2RpdiA9IDE7IC8vIGF0ayBcdTk2NjRcdTdCOTdcdTUwMjRcclxuICBsZXQgZGVmX211bHRfaW50ID0gMTsgLy8gZGVmIFx1NEU1N1x1N0I5N1x1NTAyNFxyXG4gIGxldCBkZWZfZGl2ID0gMTsgLy8gZGVmIFx1OTY2NFx1N0I5N1x1NTAyNFxyXG4gIGxldCBub3RfcGh5c2ljYWwgPSBNb3ZlTm90UGh5c2lhbChtb3ZlSWQpO1xyXG5cclxuICAvLyBcdTMwNTNcdTMwOTNcdTMwNThcdTMwODdcdTMwNDZcdTc2N0FcdTUyRDVcdTMwNEJcdTMwNjRcdTcyNjlcdTc0MDZcdTYyODAgLT4geDJcclxuICBpZiAoIW5vdF9waHlzaWNhbCAmJiBhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4MTEpICYmIGF0dGFja2VyLmhhc05lZ2F0aXZlU3RhdHVzKHRydWUpKSB7XHJcbiAgICBhdGtfbXVsdF9pbnQgPSAyO1xyXG4gIH1cclxuICAvLyBcdTMwNjFcdTMwNEJcdTMwODlcdTMwODJcdTMwNjEvXHUzMEU4XHUzMEFDXHUzMEQxXHUzMEVGXHUzMEZDXHU3NjdBXHU1MkQ1XHUzMDRCXHUzMDY0XHU3MjY5XHU3NDA2XHU2MjgwIC0+IHgxLjVcclxuICBpZiAoYXR0YWNrZXIuYWJpbGl0eUFjdGl2ZSgweDIyKSB8fCBhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4NGIpKSB7XHJcbiAgICBpZiAoZHVuZ2Vvbi5ybmcucm9sbEh1Z2VQdXJlUG93ZXIoKSAmJiAhbm90X3BoeXNpY2FsKSB7XHJcbiAgICAgIGF0a19tdWx0X2ludCAqPSAzO1xyXG4gICAgICBhdGtfZGl2ID0gMjtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gXHUzMDZGXHUzMDhBXHUzMDREXHUzMDhBXHUzMDRCXHUzMDY0XHU3MjY5XHU3NDA2XHU2MjgwIC0+IHgxLjVcclxuICBpZiAoYXR0YWNrZXIuYWJpbGl0eUFjdGl2ZSgweDMwKSAmJiAhbm90X3BoeXNpY2FsKSB7XHJcbiAgICBhdGtfbXVsdF9pbnQgKj0gMztcclxuICAgIGF0a19kaXYgPDw9IDE7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0ZWFtSWR4ID0gYXR0YWNrZXIuaXNfbWVtYmVyID8gMSA6IDA7XHJcbiAgLy8gXHUzMEQ3XHUzMEU5XHUzMEI5XHUzMDRCXHUzMDY0XHUzMERFXHUzMEE0XHUzMENBXHUzMEI5XHUzMDZFXHU0RUYyXHU5NTkzXHUzMDRDXHU5NkEzXHU2M0E1IC0+IHgxLjVcclxuICBpZiAoYXR0YWNrZXIuYWJpbGl0eUFjdGl2ZSgweDM4KSAmJiBub3RfcGh5c2ljYWwgJiYgZHVuZ2Vvbi5taW51c1t0ZWFtSWR4XSkge1xyXG4gICAgYXRrX2RpdiAqPSAxMDtcclxuICAgIGF0a19tdWx0X2ludCAqPSAxNTtcclxuICB9XHJcbiAgLy8gXHUzMERFXHUzMEE0XHUzMENBXHUzMEI5XHUzMDRCXHUzMDY0XHUzMEQ3XHUzMEU5XHUzMEI5XHUzMDZFXHU0RUYyXHU5NTkzXHUzMDRDXHU5NkEzXHU2M0E1IC0+IHgxLjVcclxuICBpZiAoYXR0YWNrZXIuYWJpbGl0eUFjdGl2ZSgweDNmKSAmJiBub3RfcGh5c2ljYWwgJiYgZHVuZ2Vvbi5wbHVzW3RlYW1JZHhdKSB7XHJcbiAgICBhdGtfZGl2ICo9IDEwO1xyXG4gICAgYXRrX211bHRfaW50ICo9IDE1O1xyXG4gIH1cclxuXHJcbiAgLy8gXHUzMDQ0XHUzMDRCXHUzMDRGIC0+IFx1NzZGOFx1NjI0Qlx1MzA2Qlx1NjUzQlx1NjQ4M3gwLjhcclxuICBpZiAoZGVmZW5kZXIuYWJpbGl0eUFjdGl2ZURldGFpbHMoMHg2LCBhdHRhY2tlciwgdHJ1ZSkpIHtcclxuICAgIGF0a19tdWx0X2ludCA8PD0gMjtcclxuICAgIGF0a19kaXYgKj0gNTtcclxuICB9XHJcbiAgLy8gXHUzMDc1XHUzMDU3XHUzMDRFXHUzMDZBXHUzMDQ2XHUzMDhEXHUzMDUzIC0+IFx1OTYzMlx1NUZBMXgxLjVcclxuICBpZiAoZGVmZW5kZXIuYWJpbGl0eUFjdGl2ZURldGFpbHMoMHgzNCwgYXR0YWNrZXIsIHRydWUpKSB7XHJcbiAgICBpZiAoZGVmZW5kZXIuaGFzTmVnYXRpdmVTdGF0dXModHJ1ZSkpIHtcclxuICAgICAgZGVmX211bHRfaW50ID0gMztcclxuICAgICAgZGVmX2RpdiA9IDI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhdGsgKj0gYXRrX211bHRfaW50O1xyXG4gIGRlZiAqPSBkZWZfbXVsdF9pbnQ7XHJcblxyXG4gIGlmIChhdGtfZGl2ICE9IDEpIGF0ayAvPSBhdGtfZGl2O1xyXG4gIGlmIChkZWZfZGl2ICE9IDEpIGRlZiAvPSBkZWZfZGl2O1xyXG5cclxuICBkdW5nZW9uLmRhbWFnZUNhbGMub2ZmZW5zZUNhbGMgPSBhdGs7XHJcbiAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmRlZmVuc2VDYWxjID0gZGVmO1xyXG5cclxuICAvLyBcdTRFMEFcdTk2NTBcdTMwRkJcdTRFMEJcdTk2NTBcdTUxRTZcdTc0MDZcclxuICBpZiAoYXRrIDwgMCkgYXRrID0gMDtcclxuICBpZiAoYXRrID49IE1lY2hhbmljcy5PRkZFTlNFX1NUQVRfTUFYKSBhdGsgPSBNZWNoYW5pY3MuT0ZGRU5TRV9TVEFUX01BWDtcclxuXHJcbiAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmRhbWFnZUNhbGNEZWYgPSBkZWY7XHJcblxyXG4gIC8vIFx1MzBFQ1x1MzBEOVx1MzBFQlx1ODhEQ1x1NkI2M1xyXG4gIGNvbnN0IGRlZl9meCA9IGRlZjtcclxuICBjb25zdCBsZXZlbCA9IGF0dGFja2VyLmxldmVsO1xyXG4gIGNvbnN0IGZsdiA9IGF0dGFja2VyLmxldmVsICsgKGF0ayAtIGRlZikgLyA4O1xyXG4gIGNvbnN0IGF0ID0gcG93ZXIgKyBhdGs7XHJcbiAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmRhbWFnZUNhbGNBdCA9IE1hdGgucm91bmQoYXQpO1xyXG4gIGR1bmdlb24uZGFtYWdlQ2FsYy5hdHRhY2tlckxldmVsID0gYXR0YWNrZXIubGV2ZWw7XHJcbiAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmRhbWFnZUNhbGNGbHYgPSBNYXRoLnJvdW5kKGZsdik7XHJcblxyXG4gIC8vIFx1NTdGQVx1NzkwRVx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1OEEwOFx1N0I5N1xyXG4gIGNvbnN0IGF0U2NhbGVkID0gYXQgKiBNZWNoYW5pY3MuQ09OU1RfMTUzX0RJVl8yNTY7XHJcbiAgY29uc3QgZGVmU2NhbGVkID0gZGVmX2Z4ICogTWVjaGFuaWNzLkNPTlNUX05FRzBfNTtcclxuICBjb25zdCBsbkFyZyA9IE1hdGgucm91bmQoKGZsdiArIDUwKSAqIDEwKTtcclxuICBjb25zdCBsbiA9IE1hdGhVdGlsLmNsYW1wZWRMbihsbkFyZyk7XHJcbiAgY29uc3QgbG5TY2FsZWQgPSBsbiAqIDUwO1xyXG4gIGxldCBiYXNlID0gZGVmU2NhbGVkICsgYXRTY2FsZWQgKyBsblNjYWxlZCArIC0zMTE7XHJcblxyXG4gIC8vIFx1NjU3NVx1ODhEQ1x1NkI2M1xyXG4gIGlmIChkdW5nZW9uLmdlbkluZm8uZml4ZWRSb29tSWQgIT0gZW9zLkZJWEVEX1NVQlNUSVRVVEVfUk9PTSAmJiAhYXR0YWNrZXIuaXNfbWVtYmVyKSB7XHJcbiAgICBiYXNlIC89IE1lY2hhbmljcy5DT05TVF84NV9ESVZfNjQ7XHJcbiAgfVxyXG4gIC8vIFx1NTdGQVx1NzkwRVx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1NEUwQVx1OTY1MFx1NEUwQlx1OTY1MFxyXG4gIGlmICg5OTkgPCBiYXNlKSBiYXNlID0gOTk5O1xyXG4gIGlmIChiYXNlIDwgMSkgYmFzZSA9IDE7XHJcblxyXG4gIC8vIFx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1NTAwRFx1NzM4N1x1MzA2RVx1OEEwOFx1N0I5N1xyXG4gIGNvbnN0IGNhbGNUeXBlQmFzZWREYW1hZ2VFZmZlY3RzUmVzdWx0ID0gQ2FsY1R5cGVCYXNlZERhbWFnZUVmZmVjdHMoXHJcbiAgICBkdW5nZW9uLFxyXG4gICAgYXR0YWNrZXIsXHJcbiAgICBkZWZlbmRlcixcclxuICAgIG1vdmVQb3dlcixcclxuICAgIG1vdmVUeXBlLFxyXG4gICAgZGFtYWdlT3V0LFxyXG4gICAgTWVjaGFuaWNzLmlzUmVndWxhckF0dGFja09yUHJvamVjdGlsZShtb3ZlSWQpLFxyXG4gICk7XHJcbiAgbGV0IGRhbWFnZU11bHREeW5hbWljID0gY2FsY1R5cGVCYXNlZERhbWFnZUVmZmVjdHNSZXN1bHQuZGFtYWdlTXVsdE91dDtcclxuICBsZXQgc3VwZXJFZmZlY3RpdmUgPSBjYWxjVHlwZUJhc2VkRGFtYWdlRWZmZWN0c1Jlc3VsdC5zdXBlckVmZmVjdGl2ZTtcclxuXHJcbiAgLy8gXHUzMEVBXHUzMEQ1XHUzMEVDXHUzMEFGXHUzMEJGXHUzMEZDLCBcdTMwNzJcdTMwNEJcdTMwOEFcdTMwNkVcdTMwNEJcdTMwNzkgKFx1NzEyMVx1NTJCOVx1NTMxNlx1MzA1OVx1MzA4Qlx1NUMwMlx1NzUyOFx1OTA1M1x1NTE3N1x1MzA5Mlx1NjMwMVx1MzA2M1x1MzA2Nlx1MzA0NFx1MzA2QVx1MzA0NClcclxuICBpZiAoZnVsbENhbGMgJiYgIWF0dGFja2VyLmV4Y2x1c2l2ZUl0ZW1FZmZlY3RBY3RpdmUoMHg0NCkpIHtcclxuICAgIC8vIFx1NzI2OVx1NzQwNlx1NjI4MFx1MzA0Qlx1MzA2NFx1MzAwMVx1MzA0Qlx1MzA4Rlx1MzA4OVx1MzA4Rlx1MzA4QVx1NEVFNVx1NTkxNlx1MzA2RVx1NjI4MFx1MzA5Mlx1NEY3Rlx1MzA2M1x1MzA2Nlx1MzA0NFx1MzA2Nlx1OTYzMlx1NUZBMVx1NTA3NFx1MzA0Q1x1MzBFQVx1MzBENVx1MzBFQ1x1MzBBRlx1MzBCRlx1MzBGQ1x1NzJCNlx1NjE0Qlx1MzA3RVx1MzA1Rlx1MzA2Rlx1NzI2OVx1NzQwNlx1NTM0QVx1NkUxQlx1MzA2RVx1NUMwMlx1NzUyOFx1OTA1M1x1NTE3N1x1MzA2RVx1NTJCOVx1Njc5Q1x1MzA0Q1x1NzY3QVx1NTJENVxyXG4gICAgLy8gLT4geDAuNVxyXG4gICAgaWYgKFxyXG4gICAgICBtb3ZlQ2F0ZWdvcnkgPT0gZW9zLkNBVEVHT1JZX1BIWVNJQ0FMICYmXHJcbiAgICAgICgobW92ZUlkICE9IDB4NDggJiYgZGVmZW5kZXIuc3RhdHVzZXMucmVmbGVjdCkgfHwgZGVmZW5kZXIuZXhjbHVzaXZlSXRlbUVmZmVjdEFjdGl2ZSgweDFlKSlcclxuICAgICkge1xyXG4gICAgICBkYW1hZ2VNdWx0RHluYW1pYyAqPSBNZWNoYW5pY3MuQ09OU1RfMF81MDtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmhhbGZQaHlzaWNhbERhbWFnZUFjdGl2YXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvLyBcdTcyNzlcdTZCOEFcdTYyODBcdTMwNEJcdTMwNjRcdTMwMDFcdTk2MzJcdTVGQTFcdTUwNzRcdTMwNENcdTMwNzJcdTMwNEJcdTMwOEFcdTMwNkVcdTMwNEJcdTMwNzlcdTcyQjZcdTYxNEJcdTMwN0VcdTMwNUZcdTMwNkZcdTcyNzlcdTZCOEFcdTUzNEFcdTZFMUJcdTMwNkVcdTVDMDJcdTc1MjhcdTkwNTNcdTUxNzdcdTMwNkVcdTUyQjlcdTY3OUNcdTMwNENcdTc2N0FcdTUyRDUgLT4geDAuNVxyXG4gICAgaWYgKFxyXG4gICAgICBtb3ZlQ2F0ZWdvcnkgPT0gZW9zLkNBVEVHT1JZX1NQRUNJQUwgJiZcclxuICAgICAgKGRlZmVuZGVyLnN0YXR1c2VzLmxpZ2h0X3NjcmVlbiB8fCBkZWZlbmRlci5leGNsdXNpdmVJdGVtRWZmZWN0QWN0aXZlKDB4MWYpKVxyXG4gICAgKSB7XHJcbiAgICAgIGRhbWFnZU11bHREeW5hbWljICo9IE1lY2hhbmljcy5DT05TVF8wXzUwO1xyXG4gICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuaGFsZlNwZWNpYWxEYW1hZ2VBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gXHU5NjMyXHU1RkExXHU1MDc0XHUzMDRDXHUzMDRBXHUzMDdFXHUzMDU4XHUzMDZBXHUzMDQ0XHU3MkI2XHU2MTRCXHU0RUU1XHU1OTE2XHUzMDRCXHUzMDY0XHUzMDAxXHU5NjMyXHU1RkExXHU1MDc0XHUzMDRDXHUzMEFCXHUzMEQ2XHUzMEM4XHUzMEEyXHUzMEZDXHUzMERFXHUzMEZDXHU0RUU1XHU1OTE2XHUzMDRCXHUzMDY0XHUzMDAxXHU5NjMyXHU1RkExXHU1MDc0XHUzMDRDXHUzMEI3XHUzMEE3XHUzMEVCXHUzMEEyXHUzMEZDXHUzMERFXHUzMEZDXHU0RUU1XHU1OTE2XHUzMDRCXHUzMDY0XHUzMDAxXHU5NjMyXHU1RkExXHU1MDc0XHUzMDRDXHUzMDRCXHUzMDU3XHUzMDUzXHUzMDU1XHUzMDBDXHUzMDRCXHUzMDdGXHUzMDcyXHUzMDY4XHUzMDQ4XHUzMDBEXHUzMDkyXHU2MzAxXHUzMDVGXHUzMDZBXHUzMDQ0XHJcbiAgaWYgKFxyXG4gICAgIWRlZmVuZGVyLnN0YXR1c2VzLmx1Y2t5X2NoYW50ICYmXHJcbiAgICAhZGVmZW5kZXIuYWJpbGl0eUFjdGl2ZURldGFpbHMoMHhjLCBhdHRhY2tlciwgdHJ1ZSkgJiZcclxuICAgICFkZWZlbmRlci5hYmlsaXR5QWN0aXZlRGV0YWlscygweDEzKSAmJlxyXG4gICAgIWRlZmVuZGVyLmlxU2tpbGxFbmFibGVkKDB4NDAsIGR1bmdlb24pXHJcbiAgKSB7XHJcbiAgICAvLyBcdTMwRTFcdTMwQjlcdTRFRTVcdTU5MTYgLT4gXHU2MDI1XHU2MjQwXHU3Mzg3eDEuNVxyXG4gICAgaWYgKGF0dGFja2VyLmdlbmRlciAhPSBlb3MuR0VOREVSX0ZFTUFMRSkge1xyXG4gICAgICBjcml0Q2hhbmNlICs9IGNyaXRDaGFuY2UgLyAyO1xyXG4gICAgfVxyXG4gICAgLy8gXHUzMDREXHUzMDQyXHUzMDQ0XHUzMDYwXHUzMDgxXHU3MkI2XHU2MTRCIC0+IFx1NjAyNVx1NjI0MFx1NzM4NzEwMCUgKFx1NTE4NVx1OTBFOFx1NzY4NFx1MzA2Qjk5OSVcdTMwNjhcdTMwNTdcdTMwNjZcdTYyNzFcdTMwOEZcdTMwOENcdTMwOEIpXHJcbiAgICBpZiAoYXR0YWNrZXIuc3RhdHVzZXMuZm9jdXNfZW5lcmd5KSB7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5mb2N1c0VuZXJneUFjdGl2YXRlZCA9IHRydWU7XHJcbiAgICAgIGNyaXRDaGFuY2UgPSBNZWNoYW5pY3MuT0ZGRU5TRV9TVEFUX01BWDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFx1NjUzQlx1NjQ4M1x1NTA3NFx1MzA0Q1x1MzBENFx1MzBGM1x1MzBDOFx1MzBFQ1x1MzBGM1x1MzBCQVx1ODhDNVx1NTA5OSwgXHUzMDdFXHUzMDVGXHUzMDZGXHU2NTNCXHU2NDgzXHU1MDc0XHUzMDZFXHUzMDRCXHUzMDU3XHUzMDUzXHUzMDU1XHUzMDBDXHUzMDZEXHUzMDg5XHUzMDQ0XHUzMDQ2XHUzMDYxXHUzMDBEXHUzMDRDXHU2NzA5XHU1MkI5IC0+IFx1NjAyNVx1NjI0MFx1NzM4NysxNSVcclxuICAgICAgaWYgKGF0dGFja2VyLml0ZW1BY3RpdmUoMHgxMykgfHwgYXR0YWNrZXIuaXFTa2lsbEVuYWJsZWQoMHgxZCwgZHVuZ2VvbikpIHtcclxuICAgICAgICBkdW5nZW9uLmRhbWFnZUNhbGMuc2NvcGVMZW5zT3JTaGFycHNob290ZXJBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIGNyaXRDaGFuY2UgKz0gTWVjaGFuaWNzLlNDT1BFX0xFTlNfQ1JJVF9SQVRFX0JPT1NUO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFx1NjUzQlx1NjQ4M1x1NTA3NFx1MzA0Q1x1MzA0RFx1MzA4N1x1MzA0Nlx1MzA0Nlx1MzA5MyAtPiBcdTYwMjVcdTYyNDBcdTczODcrMTAlXHJcbiAgICAgIGlmIChhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4NTgpKSB7XHJcbiAgICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLnN1cGVyTHVja0FjdGl2YXRlZCA9IHRydWU7XHJcbiAgICAgICAgY3JpdENoYW5jZSArPSBNZWNoYW5pY3MuU1VQRVJfTFVDS19DUklUX1JBVEVfQk9PU1Q7XHJcbiAgICAgIH1cclxuICAgICAgLy8gXHU5NjMyXHU1RkExXHU1MDc0XHUzMDRDXHUzMDZEXHUzMDg5XHUzMDhGXHUzMDhDXHUzMENGXHUzMEMxXHUzMERFXHUzMEFEXHU4OEM1XHU1MDk5IC0+IFx1NjAyNVx1NjI0MFx1NzM4NysxNSVcclxuICAgICAgaWYgKGRlZmVuZGVyLml0ZW1BY3RpdmUoMHgxNCkpIHtcclxuICAgICAgICBkdW5nZW9uLmRhbWFnZUNhbGMucGF0c3lCYW5kQWN0aXZhdGVkID0gdHJ1ZTtcclxuICAgICAgICBjcml0Q2hhbmNlICs9IE1lY2hhbmljcy5TQ09QRV9MRU5TX0NSSVRfUkFURV9CT09TVDsgLy8gXHUzMEQ0XHUzMEYzXHUzMEM4XHUzMEVDXHUzMEYzXHUzMEJBXHUzMDY4XHU1NDBDXHUzMDU4XHU3Qjg3XHU2MjQwXHUzMDRCXHUzMDg5XHU1M0MyXHU3MTY3XHJcbiAgICAgIH1cclxuICAgICAgLy8gXHU1MkI5XHU2NzlDXHU2MjlDXHU3RkE0XHUzMDRCXHUzMDY0XHUzMDAxXHU2NTNCXHU2NDgzXHU1MDc0XHUzMDZFXHUzMDRCXHUzMDU3XHUzMDUzXHUzMDU1XHUzMDBDXHUzMDQyXHUzMDQ0XHUzMDU3XHUzMDg3XHUzMDQ2XHUzMDcwXHUzMDY0XHUzMDUwXHUzMDkzXHUzMDBEXHUzMDRDXHU2NzA5XHU1MkI5IC0+IFx1NjAyNVx1NjI0MFx1NzM4NzQwJSAoXHU0RTBBXHU2NkY4XHUzMDREKVxyXG4gICAgICBpZiAoc3VwZXJFZmZlY3RpdmUgJiYgYXR0YWNrZXIuaXFTa2lsbEVuYWJsZWQoMHgxLCBkdW5nZW9uKSkge1xyXG4gICAgICAgIGNyaXRDaGFuY2UgPSBNZWNoYW5pY3MuVFlQRV9BRFZBTlRBR0VfTUFTVEVSX0NSSVRfUkFURTtcclxuICAgICAgICBkdW5nZW9uLmRhbWFnZUNhbGMudHlwZUFkdmFudGFnZU1hc3RlckFjdGl2YXRlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBcdTYwMjVcdTYyNDAgKFx1NUMwMlx1NzUyOFx1OTA1M1x1NTE3N1x1MzA2RVx1NjAyNVx1NjI0MFx1NzEyMVx1NTJCOVx1NTJCOVx1Njc5Q1x1MzA0Q1x1NzY3QVx1NTJENVx1MzA1N1x1MzA2Nlx1MzA0NFx1MzA2QVx1MzA0NClcclxuICAgIGlmIChkdW5nZW9uLnJuZy5yb2xsQ3JpdGljYWxIaXQoY3JpdENoYW5jZSkgJiYgIWRlZmVuZGVyLmV4Y2x1c2l2ZUl0ZW1FZmZlY3RBY3RpdmUoMHg1KSkge1xyXG4gICAgICBkYW1hZ2VPdXQuY3JpdGljYWxIaXQgPSB0cnVlO1xyXG4gICAgICAvLyBcdTMwQjlcdTMwQ0FcdTMwQTRcdTMwRDFcdTMwRkMgLT4geDJcclxuICAgICAgaWYgKGF0dGFja2VyLmFiaWxpdHlBY3RpdmUoMHg1ZCkpIHtcclxuICAgICAgICBkYW1hZ2VNdWx0RHluYW1pYyAqPSAyO1xyXG4gICAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5zbmlwZXJBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFx1MzA1RFx1MzA4Q1x1NEVFNVx1NTkxNiAtPiB4MS41XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGRhbWFnZU11bHREeW5hbWljICo9IE1lY2hhbmljcy5DT05TVF8xXzUwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBcdTY3MDBcdTdENDJcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdThBMDhcdTdCOTdcclxuICBkdW5nZW9uLmRhbWFnZUNhbGMuZGFtYWdlQ2FsY0Jhc2UgPSBNYXRoLnJvdW5kKGJhc2UpO1xyXG4gIGJhc2UgKj0gZGFtYWdlTXVsdER5bmFtaWM7XHJcbiAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLnN0YXRpY0RhbWFnZU11bHQgPSBkYW1hZ2VNdWx0O1xyXG4gIGJhc2UgKj0gZGFtYWdlTXVsdDtcclxuICBkdW5nZW9uLmRhbWFnZUNhbGMuZGFtYWdlQ2FsYyA9IE1hdGgucm91bmQoYmFzZSk7XHJcblxyXG4gIGNvbnN0IHZhcmlhbmNlID0gZHVuZ2Vvbi5ybmcucm9sbERhbWFnZVZhcmlhbmNlKCk7XHJcbiAgYmFzZSAqPSB2YXJpYW5jZTtcclxuICBkdW5nZW9uLmRhbWFnZUNhbGMuZGFtYWdlQ2FsY1JhbmRvbU11bHRQY3QgPSBNYXRoLnJvdW5kKDEwMCAqIHZhcmlhbmNlKTtcclxuICBkYW1hZ2VPdXQuZGFtYWdlID0gTWF0aC5yb3VuZChiYXNlKTtcclxuXHJcbiAgLy8gXHU2Mjk1XHU2NEYyXHU3MjY5IChcdTMwNkFcdTMwNTJcdTMwNUZcdTMwODJcdTMwNkUpIC0+IHgwLjVcclxuICBpZiAobW92ZUlkID09IDB4MTk1KSB7XHJcbiAgICBkYW1hZ2VPdXQuZGFtYWdlID0gTWF0aC5jZWlsKGRhbWFnZU91dC5kYW1hZ2UgKiBNZWNoYW5pY3MuQ09OU1RfMF81MCk7XHJcbiAgfVxyXG4gIC8vIFx1MzA1NFx1MzA0Nlx1MzA4Rlx1MzA5M1x1ODhEQ1x1NkI2MyAtPiB4MS41XHJcbiAgaWYgKG1vdmVJZCA9PSAweDE5NSAmJiBhdHRhY2tlci5pcVNraWxsRW5hYmxlZCgweDJmLCBkdW5nZW9uKSkge1xyXG4gICAgZGFtYWdlT3V0LmRhbWFnZSA9IE1hdGguY2VpbChkYW1hZ2VPdXQuZGFtYWdlICogTWVjaGFuaWNzLlBPV0VSX1BJVENIRVJfREFNQUdFX01VTFRJUExJRVIpO1xyXG4gICAgZHVuZ2Vvbi5kYW1hZ2VEZXRhaWxMb2cuaXNQb3dlclBpdGNoZXJBY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLy8gXHUzMEE4XHUzMEEyXHUzMEZDXHUzMEQ2XHUzMEVDXHUzMEZDXHUzMEM5IC0+IHgxLjVcclxuICBpZiAoZGFtYWdlT3V0LmRhbWFnZSA+IDAgJiYgYXR0YWNrZXIuZXhjbHVzaXZlSXRlbUVmZmVjdEFjdGl2ZSgweDViKSkge1xyXG4gICAgZGFtYWdlT3V0LmRhbWFnZSA9IE1hdGguY2VpbChkYW1hZ2VPdXQuZGFtYWdlICogTWVjaGFuaWNzLkFJUl9CTEFERV9EQU1BR0VfTVVMVElQTElFUik7XHJcbiAgICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc0FpckJsYWRlQWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmIChkYW1hZ2VPdXQuZGFtYWdlID09IDApIHtcclxuICAgIGRhbWFnZU91dC5jcml0aWNhbEhpdCA9IGZhbHNlO1xyXG4gIH1cclxuICBkZWZlbmRlci5mbGFnX2FuZ2VyX3BvaW50ID0gZGFtYWdlT3V0LmNyaXRpY2FsSGl0O1xyXG59XHJcblxyXG4vKipcclxuICogXHU2MjgwXHUzMDZFXHU1NDdEXHU0RTJEXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHJcbiAqIEBwYXJhbSB7RHVuZ2VvblN0YXRlfSBkdW5nZW9uXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gYXR0YWNrZXJcclxuICogQHBhcmFtIHtNb25zdGVyfSBkZWZlbmRlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gbW92ZUlkXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlU2Vjb25kQWNjdXJhY3lcclxuICogQHBhcmFtIHtCb29sZWFufSBuZXZlck1pc3NTZWxmXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gTW92ZUhpdENoZWNrKGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZUlkLCB1c2VTZWNvbmRBY2N1cmFjeSwgbmV2ZXJNaXNzU2VsZikge1xyXG4gIGlmIChuZXZlck1pc3NTZWxmICYmIGF0dGFja2VyID09PSBkZWZlbmRlcikge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvLyBcdTkwMUFcdTVFMzhcdTY1M0JcdTY0ODNcdTMwNjdcdTMwNDRcdTMwNjNcdTMwNzFcdTMwNjRcdTMwNzJcdTMwNjNcdTMwNjFcdTMwODVcdTMwNDZcdTMwNENcdTY3MDlcdTUyQjkgLT4gXHU1RkM1XHU0RTJEXHJcbiAgaWYgKG1vdmVJZCA9PSAweDE2MyAmJiBhdHRhY2tlci5pcVNraWxsRW5hYmxlZCgweDQsIGR1bmdlb24pKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgLy8gXHUzMDcyXHUzMDYzXHUzMDYxXHUzMDg1XHUzMDQ2XHU3MkI2XHU2MTRCIC0+IFx1NUZDNVx1NEUyRFxyXG4gIGlmIChhdHRhY2tlci5zdGF0dXNlcy5zdXJlX3Nob3QpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICAvLyBcdTMwNEJcdTMwODlcdTMwNzZcdTMwOEFcdTcyQjZcdTYxNEIgLT4gXHU1OTE2XHUzMDhDXHUzMDhCXHJcbiAgaWYgKGF0dGFja2VyLnN0YXR1c2VzLndoaWZmZXIpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGxldCBtb3ZlQWNjdXJhY3kgPSBNZWNoYW5pY3MuZ2V0TW92ZUFjY3VyYWN5KG1vdmVJZCwgdXNlU2Vjb25kQWNjdXJhY3kpO1xyXG4gIGlmIChtb3ZlQWNjdXJhY3kgPiAxMDApIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICAvLyBcdTMwN0ZcdTMwNERcdTMwOEFcdTMwQ0ZcdTMwQzFcdTMwREVcdTMwQUQgLT4gXHU1NDdEXHU0RTJEXHU1MDI0LTMwXHJcbiAgaWYgKGRlZmVuZGVyLml0ZW1BY3RpdmUoMHgyYSkpIHtcclxuICAgIG1vdmVBY2N1cmFjeSAtPSBNZWNoYW5pY3MuREVURUNUX0JBTkRfTU9WRV9BQ0NVUkFDWV9EUk9QO1xyXG4gIH1cclxuICAvLyBcdTMwNTlcdTMwNzBcdTMwODRcdTMwNEZcdTMwNEJcdTMwNDRcdTMwNzIgLT4gXHU1NDdEXHU0RTJEXHU1MDI0LTEwXHJcbiAgaWYgKGRlZmVuZGVyLmlxU2tpbGxFbmFibGVkKDB4NSwgZHVuZ2VvbikpIHtcclxuICAgIG1vdmVBY2N1cmFjeSAtPSBNZWNoYW5pY3MuUVVJQ0tfRE9ER0VSX01PVkVfQUNDVVJBQ1lfRFJPUDtcclxuICB9XHJcblxyXG4gIGxldCBhY2N1cmFjeUJvb3N0ID0gMDtcclxuICAvLyBcdTcyNzlcdTYwMjdcdTMwNzVcdTMwNEZcdTMwNENcdTMwOTMgLT4gXHU1NDdEXHU0RTJEKzJcclxuICBpZiAoYXR0YWNrZXIuYWJpbGl0eUFjdGl2ZSgweDMzKSkge1xyXG4gICAgYWNjdXJhY3lCb29zdCA9IDI7XHJcbiAgfVxyXG4gIC8vIFx1MzA0Qlx1MzA3Rlx1MzA2QVx1MzA4QVxyXG4gIGlmIChtb3ZlSWQgPT0gMHg0MCkge1xyXG4gICAgY29uc3Qgd2VhdGhlciA9IGF0dGFja2VyLnBlcmNlaXZlZFdlYXRoZXIoZHVuZ2Vvbik7XHJcbiAgICAvLyBcdTU5MjlcdTUwMTlcdTMwNDJcdTMwODEgLT4gXHU1RkM1XHU0RTJEXHJcbiAgICBpZiAod2VhdGhlciA9PSBlb3MuV0VBVEhFUl9SQUlOKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8gXHU1OTI5XHU1MDE5XHUzMDcyXHUzMDU2XHUzMDU3XHUzMDRDXHUzMDY0XHUzMDg4XHUzMDQ0IC0+IFx1NTQ3RFx1NEUyRC0yXHJcbiAgICBpZiAod2VhdGhlciA9PSBlb3MuV0VBVEhFUl9TVU5OWSkge1xyXG4gICAgICBhY2N1cmFjeUJvb3N0IC09IDI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBcdTU5MjlcdTUwMTlcdTMwNENcdTMwNDJcdTMwODlcdTMwOENcdTMwNkVcdTcyQjZcdTYxNEJcdTMwNjdcdTMwNzVcdTMwNzZcdTMwNEQgLT4gXHU1RkM1XHU0RTJEXHJcbiAgaWYgKG1vdmVJZCA9PSAweDEwZSAmJiBhdHRhY2tlci5wZXJjZWl2ZWRXZWF0aGVyKGR1bmdlb24pID09IGVvcy5XRUFUSEVSX0hBSUwpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICAvLyBcdTMwNTdcdTMwODVcdTMwNDZcdTMwNjFcdTMwODVcdTMwNDZcclxuICBpZiAoYXR0YWNrZXIuaXFTa2lsbEVuYWJsZWQoMHgzMCwgZHVuZ2VvbikpIHtcclxuICAgIGFjY3VyYWN5Qm9vc3QgKz0gMTtcclxuICB9XHJcblxyXG4gIC8vIFx1MzA3Rlx1MzA4NFx1MzA3Nlx1MzA4Qlx1NzJCNlx1NjE0QiAtPiBcdTU2REVcdTkwN0ZcdTczODdcdTMwOTJcdTcxMjFcdTg5OTZcclxuICBsZXQgZXZhc2lvblN0YWdlID0gZGVmZW5kZXIuc3RhZ2VfZXZhc2lvbjtcclxuICBpZiAoZGVmZW5kZXIuc3RhdHVzZXMuZXhwb3NlZCkge1xyXG4gICAgZXZhc2lvblN0YWdlID0gMTA7XHJcbiAgfVxyXG5cclxuICBsZXQgZXZhc2lvbkJvb3N0ID0gMDtcclxuICAvLyBcdTMwNTlcdTMwNkFcdTMwNENcdTMwNEZcdTMwOENcdTc2N0FcdTUyRDUgLT4gXHU1NkRFXHU5MDdGKzJcclxuICBpZiAoXHJcbiAgICBkZWZlbmRlci5wZXJjZWl2ZWRXZWF0aGVyKGR1bmdlb24pID09IGVvcy5XRUFUSEVSX1NBTkRTVE9STSAmJlxyXG4gICAgZGVmZW5kZXIuYWJpbGl0eUFjdGl2ZURldGFpbHMoMHgxZCwgYXR0YWNrZXIsIHRydWUpXHJcbiAgKSB7XHJcbiAgICBldmFzaW9uQm9vc3QgPSAyO1xyXG4gIH1cclxuICAvLyBcdTY1M0JcdTY0ODNcdTUwNzRcdTMwNkVcdTMwNkZcdTMwOEFcdTMwNERcdTMwOEFcdTMwNENcdTc2N0FcdTUyRDUgKFx1NzI2OVx1NzQwNlx1NjI4MCkgLT4gXHU1NkRFXHU5MDdGKzJcclxuICBpZiAoYXR0YWNrZXIuYWJpbGl0eUFjdGl2ZSgweDMwKSAmJiAhTW92ZU5vdFBoeXNpYWwobW92ZUlkKSkge1xyXG4gICAgZXZhc2lvbkJvb3N0ICs9IDI7XHJcbiAgfVxyXG4gIC8vIFx1MzA2OVx1MzA1Rlx1MzA5M1x1MzA3MFx1MzA0Q1x1NjcwOVx1NTJCOSwgSFBcdTMwNEMxLzRcdTRFRTVcdTRFMEIgLT4gXHU1NkRFXHU5MDdGKzJcclxuICBpZiAoZGVmZW5kZXIuaXFTa2lsbEVuYWJsZWQoMHgzZiwgZHVuZ2VvbikpIHtcclxuICAgIGxldCBtYXhIcCA9IGRlZmVuZGVyLmhwX21heDtcclxuICAgIGlmIChtYXhIcCA+IE1lY2hhbmljcy5NQVhfSFBfQ0FQKSB7XHJcbiAgICAgIG1heEhwID0gTWVjaGFuaWNzLk1BWF9IUF9DQVA7XHJcbiAgICB9XHJcbiAgICBpZiAoZGVmZW5kZXIuaHAgPD0gTWF0aC50cnVuYyhtYXhIcCAvIDQpKSB7XHJcbiAgICAgIGV2YXNpb25Cb29zdCArPSAyO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBcdTMwNTdcdTMwODVcdTMwNDZcdTMwNjFcdTMwODVcdTMwNDZcdTMwNENcdTY3MDlcdTUyQjkgLT4gXHU1NkRFXHU5MDdGLTFcclxuICBpZiAoZGVmZW5kZXIuaXFTa2lsbEVuYWJsZWQoMHgzMCwgZHVuZ2VvbikpIHtcclxuICAgIGV2YXNpb25Cb29zdCAtPSAxO1xyXG4gIH1cclxuICAvLyBcdTMwNjFcdTMwNjlcdTMwOEFcdTMwNDJcdTMwNTdcdTc2N0FcdTUyRDUgKFx1MzA1M1x1MzA5M1x1MzA4OVx1MzA5M29yXHUzMDdFXHUzMDY5XHUzMDhGXHUzMDU3KSAtPiBcdTU2REVcdTkwN0YrM1xyXG4gIGlmIChcclxuICAgIGRlZmVuZGVyLmFiaWxpdHlBY3RpdmVEZXRhaWxzKDB4NjIsIGF0dGFja2VyLCB0cnVlKSAmJlxyXG4gICAgKGRlZmVuZGVyLnN0YXR1c2VzLmNvbmZ1c2lvbiB8fCBkZWZlbmRlci5zdGF0dXNlcy5jcm9zc19leWVkKVxyXG4gICkge1xyXG4gICAgZXZhc2lvbkJvb3N0ICs9IDM7XHJcbiAgfVxyXG4gIC8vIFx1MzA4Nlx1MzA0RFx1MzA0Q1x1MzA0Rlx1MzA4Q1x1NzY3QVx1NTJENSAtPiBcdTU2REVcdTkwN0YrMlxyXG4gIGlmIChcclxuICAgIGRlZmVuZGVyLmFiaWxpdHlBY3RpdmVEZXRhaWxzKDB4NzcsIGF0dGFja2VyLCB0cnVlKSAmJlxyXG4gICAgKGRlZmVuZGVyLnBlcmNlaXZlZFdlYXRoZXIoZHVuZ2VvbikgPT0gZW9zLldFQVRIRVJfSEFJTCB8fCBkZWZlbmRlci5wZXJjZWl2ZWRXZWF0aGVyKGR1bmdlb24pID09IGVvcy5XRUFUSEVSX1NOT1cpXHJcbiAgKSB7XHJcbiAgICBldmFzaW9uQm9vc3QgKz0gMjtcclxuICB9XHJcbiAgLy8gXHU1OTI5XHU1MDE5XHUzMDY3XHU1NkRFXHU5MDdGXHU3Mzg3XHUzMDRDXHU0RTBBXHUzMDRDXHUzMDhCXHU1QzAyXHU3NTI4XHU5MDUzXHU1MTc3XHU1MkI5XHU2NzlDXHU3NjdBXHU1MkQ1IC0+IFx1NTZERVx1OTA3RisxXHJcbiAgY29uc3Qgd2VhdGhlciA9IGRlZmVuZGVyLnBlcmNlaXZlZFdlYXRoZXIoZHVuZ2Vvbik7XHJcbiAgaWYgKFxyXG4gICAgTWVjaGFuaWNzLkVYQ0xfSVRFTV9FRkZFQ1RTX0VWQVNJT05fQk9PU1Rbd2VhdGhlcl0gIT0gMCAmJlxyXG4gICAgZGVmZW5kZXIuZXhjbHVzaXZlSXRlbUVmZmVjdEFjdGl2ZShNZWNoYW5pY3MuRVhDTF9JVEVNX0VGRkVDVFNfRVZBU0lPTl9CT09TVFt3ZWF0aGVyXSlcclxuICApIHtcclxuICAgIGV2YXNpb25Cb29zdCArPSAxO1xyXG4gIH1cclxuICBldmFzaW9uU3RhZ2UgKz0gZXZhc2lvbkJvb3N0O1xyXG5cclxuICBsZXQgYWNjdXJhY3lTdGFnZSA9IGF0dGFja2VyLnN0YWdlX2FjY3VyYWN5ICsgYWNjdXJhY3lCb29zdDtcclxuICAvLyBcdTY1M0JcdTY0ODNcdTUwNzQsIFx1OTYzMlx1NUZBMVx1NTA3NFx1MzA2OVx1MzA2MVx1MzA4OVx1MzA0Qlx1MzA0Q1x1MzBDRVx1MzBGQ1x1MzBBQ1x1MzBGQ1x1MzBDOSAtPiBcdTU2REVcdTkwN0ZcdTMwRTlcdTMwRjNcdTMwQUYsIFx1NTQ3RFx1NEUyRFx1MzBFOVx1MzBGM1x1MzBBRlx1MzA5Mlx1NzEyMVx1ODk5NlxyXG4gIGlmIChhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4NmEpIHx8IGRlZmVuZGVyLmFiaWxpdHlBY3RpdmVEZXRhaWxzKDB4NmEsIGF0dGFja2VyLCB0cnVlKSkge1xyXG4gICAgZXZhc2lvblN0YWdlID0gMTA7XHJcbiAgICBhY2N1cmFjeVN0YWdlID0gMTA7XHJcbiAgfVxyXG4gIGlmIChhY2N1cmFjeVN0YWdlIDwgMCkgYWNjdXJhY3lTdGFnZSA9IDA7XHJcbiAgaWYgKGFjY3VyYWN5U3RhZ2UgPiAyMCkgYWNjdXJhY3lTdGFnZSA9IDIwO1xyXG5cclxuICBjb25zdCBBQ0NVUkFDWV9NVUxUSVBMSUVSUyA9XHJcbiAgICBhdHRhY2tlci5nZW5kZXIgPT0gZW9zLkdFTkRFUl9GRU1BTEVcclxuICAgICAgPyBNZWNoYW5pY3MuRkVNQUxFX0FDQ1VSQUNZX1NUQUdFX01VTFRJUExJRVJTXHJcbiAgICAgIDogTWVjaGFuaWNzLk1BTEVfQUNDVVJBQ1lfU1RBR0VfTVVMVElQTElFUlM7XHJcbiAgbGV0IGFjY3VyYWN5ID0gQUNDVVJBQ1lfTVVMVElQTElFUlNbYWNjdXJhY3lTdGFnZV07XHJcbiAgaWYgKGV2YXNpb25TdGFnZSA8IDApIGV2YXNpb25TdGFnZSA9IDA7XHJcbiAgaWYgKGV2YXNpb25TdGFnZSA+IDIwKSBldmFzaW9uU3RhZ2UgPSAyMDtcclxuICBpZiAoYWNjdXJhY3kgPCAwKSBhY2N1cmFjeSA9IDA7XHJcbiAgaWYgKGFjY3VyYWN5ID4gMTAwKSBhY2N1cmFjeSA9IDEwMDtcclxuXHJcbiAgY29uc3QgRVZBU0lPTl9NVUxUSVBMSUVSUyA9XHJcbiAgICBkZWZlbmRlci5nZW5kZXIgPT0gZW9zLkdFTkRFUl9GRU1BTEVcclxuICAgICAgPyBNZWNoYW5pY3MuRkVNQUxFX0VWQVNJT05fU1RBR0VfTVVMVElQTElFUlNcclxuICAgICAgOiBNZWNoYW5pY3MuTUFMRV9FVkFTSU9OX1NUQUdFX01VTFRJUExJRVJTO1xyXG4gIGxldCBldmFzaW9uID0gRVZBU0lPTl9NVUxUSVBMSUVSU1tldmFzaW9uU3RhZ2VdO1xyXG4gIGlmIChldmFzaW9uIDwgMCkgZXZhc2lvbiA9IDA7XHJcbiAgaWYgKGV2YXNpb24gPiAxMDApIGV2YXNpb24gPSAxMDA7XHJcblxyXG4gIHJldHVybiBkdW5nZW9uLnJuZy5yb2xsSGl0Q2hhbmNlKE1hdGgudHJ1bmMobW92ZUFjY3VyYWN5ICogYWNjdXJhY3kgKiBldmFzaW9uKSwgdXNlU2Vjb25kQWNjdXJhY3kpO1xyXG59XHJcblxyXG4vKipcclxuICogXHU3Mjc5XHU2MDI3XHUzMDg0XHU1QzAyXHU3NTI4XHU5MDUzXHU1MTc3XHUzMDZFXHU1MkI5XHU2NzlDXHUzMDY3XHU2MjgwXHUzMDkyXHU3MTIxXHU1MkI5XHU1MzE2XHUzMDU5XHUzMDhCXHU1MUU2XHU3NDA2XHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gYXR0YWNrZXJcclxuICogQHBhcmFtIHtNb25zdGVyfSBkZWZlbmRlclxyXG4gKiBAcGFyYW0ge0RhbWFnZURhdGF9IGRhbWFnZURhdGFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBBcHBseUFiaWxpdHlBbmRFZmZlY3RJbW11bml0aWVzKGF0dGFja2VyLCBkZWZlbmRlciwgZGFtYWdlRGF0YSkge1xyXG4gIGlmICghZGVmZW5kZXIuaXNNb25zdGVyKCkgfHwgIWF0dGFja2VyLmlzTW9uc3RlcigpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8vIFx1MzA0Q1x1MzA5M1x1MzA1OFx1MzA4N1x1MzA0Nlx1MzA2RVx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1MzA0Q1x1NEUwMFx1NjQ4M1x1NjI4MFx1MzA5Mlx1NTNEN1x1MzA1MVx1MzA4QlxyXG4gIGlmIChkZWZlbmRlci5hYmlsaXR5QWN0aXZlRGV0YWlscygweGQsIGF0dGFja2VyLCB0cnVlKSAmJiBkYW1hZ2VEYXRhLmRhbWFnZSA9PSA5OTk5KSB7XHJcbiAgICBkYW1hZ2VEYXRhLm5vRGFtYWdlID0gdHJ1ZTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLy8gXHUzMDYxXHUzMDRGXHUzMDY3XHUzMDkzXHUzMDZFXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMDRDXHU5NkZCXHU2QzE3XHU2MjgwXHUzMDkyXHU1M0Q3XHUzMDUxXHUzMDhCXHJcbiAgaWYgKGRlZmVuZGVyLmFiaWxpdHlBY3RpdmVEZXRhaWxzKDB4MjMsIGF0dGFja2VyLCB0cnVlKSAmJiBkYW1hZ2VEYXRhLnR5cGUgPT0gZW9zLlRZUEVfRUxFQ1RSSUMpIHtcclxuICAgIGRhbWFnZURhdGEubm9EYW1hZ2UgPSB0cnVlO1xyXG4gICAgZGFtYWdlRGF0YS5oZWFsZWQgPSB0cnVlO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvLyBcdTMwNjFcdTMwODdcdTMwNTlcdTMwNDQsIFx1MzA0Qlx1MzA5M1x1MzA1RFx1MzA0Nlx1MzA2Rlx1MzA2MFx1MzA2RVx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1MzA0Q1x1NkMzNFx1NjI4MFx1MzA5Mlx1NTNEN1x1MzA1MVx1MzA4QlxyXG4gIGlmIChcclxuICAgIChkZWZlbmRlci5hYmlsaXR5QWN0aXZlRGV0YWlscygweDI0LCBhdHRhY2tlciwgdHJ1ZSkgfHwgZGVmZW5kZXIuYWJpbGl0eUFjdGl2ZURldGFpbHMoMHg1NSwgYXR0YWNrZXIsIHRydWUpKSAmJlxyXG4gICAgZGFtYWdlRGF0YS50eXBlID09IGVvcy5UWVBFX1dBVEVSXHJcbiAgKSB7XHJcbiAgICBkYW1hZ2VEYXRhLm5vRGFtYWdlID0gdHJ1ZTtcclxuICAgIGRhbWFnZURhdGEuaGVhbGVkID0gdHJ1ZTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLy8gXHUzMDY3XHUzMDkzXHUzMDREXHUzMEE4XHUzMEYzXHUzMEI4XHUzMEYzXHUzMDZFXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMDRDXHU5NkZCXHU2QzE3XHU2MjgwXHUzMDkyXHU1M0Q3XHUzMDUxXHUzMDhCXHJcbiAgaWYgKGRlZmVuZGVyLmFiaWxpdHlBY3RpdmUoMHg2NiwgYXR0YWNrZXIsIHRydWUpICYmIGRhbWFnZURhdGEudHlwZSA9PSBlb3MuVFlQRV9FTEVDVFJJQykge1xyXG4gICAgZGFtYWdlRGF0YS5ub0RhbWFnZSA9IHRydWU7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBcdTVDMDJcdTc1MjhcdTkwNTNcdTUxNzdcdTMwNkVcdTUyQjlcdTY3OUNcdTMwNjdcdTU0MDRcdTMwQkZcdTMwQTRcdTMwRDdcdTMwNjdcdTUzRDdcdTMwNTFcdTMwNUZcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdTMwOTJcdTcxMjFcdTUyQjlcdTUzMTZcdTMwMDFcdTMwN0VcdTMwNUZcdTMwNkZcdTU0MzhcdTUzQ0VcdTMwNTlcdTMwOEJcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IE1lY2hhbmljcy5UWVBFX0RBTUFHRV9ORUdBVElOR19FWENMVVNJVkVfSVRFTV9FRkZFQ1RTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBlbnRyeSA9IE1lY2hhbmljcy5UWVBFX0RBTUFHRV9ORUdBVElOR19FWENMVVNJVkVfSVRFTV9FRkZFQ1RTW2ldO1xyXG4gICAgaWYgKGVudHJ5LnR5cGUgPT0gZGFtYWdlRGF0YS50eXBlICYmIGRlZmVuZGVyLmV4Y2x1c2l2ZUl0ZW1FZmZlY3RBY3RpdmUoZW50cnkuZWZmZWN0KSkge1xyXG4gICAgICBpZiAoZW50cnkuZWZmZWN0IDwgMHg3Mikge1xyXG4gICAgICAgIC8vIFx1NzEyMVx1NTJCOVxyXG4gICAgICAgIGRhbWFnZURhdGEubm9EYW1hZ2UgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBcdTU0MzhcdTUzQ0VcclxuICAgICAgICBkYW1hZ2VEYXRhLmhlYWxlZCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHUzMEI3XHUzMEZDXHUzMEIxXHUzMEYzXHUzMEI5XHUzMDZFXHU1QjlGXHU4ODRDIChtb2NrKVxyXG4gKiBAcGFyYW0ge0R1bmdlb25TdGF0ZX0gZHVuZ2VvblxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGF0dGFja2VyXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gZGVmZW5kZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IG1vdmVJZFxyXG4gKiBAcGFyYW0ge0RhbWFnZURhdGF9IGRhbWFnZURhdGFcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBydW5Nb2NrRGFtYWdlU2VxdWVuY2UoZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlSWQsIGRhbWFnZURhdGEpIHtcclxuICBpZiAoTW92ZUhpdENoZWNrKGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZUlkLCB0cnVlLCB0cnVlKSkge1xyXG4gICAgLy8gXHU1NDdEXHU0RTJEXHUzMDU3XHUzMDVGXHJcbiAgICBBcHBseUFiaWxpdHlBbmRFZmZlY3RJbW11bml0aWVzKGF0dGFja2VyLCBkZWZlbmRlciwgZGFtYWdlRGF0YSk7XHJcbiAgICBhdHRhY2tlci5mbGFnX3ByYWN0aWNlX3N3aW5nZXIgPSBmYWxzZTtcclxuICAgIGF0dGFja2VyLmZsYWdfYW5nZXJfcG9pbnQgPSBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gXHU1NDdEXHU0RTJEXHUzMDU3XHUzMDZBXHUzMDQ0XHJcbiAgICBkYW1hZ2VEYXRhLm5vRGFtYWdlID0gdHJ1ZTtcclxuICAgIGlmIChtb3ZlSWQgIT0gMHgxNjMpIHtcclxuICAgICAgYXR0YWNrZXIuZmxhZ19wcmFjdGljZV9zd2luZ2VyID0gdHJ1ZTsgLy8gXHU5MDFBXHU1RTM4XHU2NTNCXHU2NDgzXHU0RUU1XHU1OTE2XHUzMDZFXHU1ODM0XHU1NDA4XHUzMDRCXHUzMDVGXHUzMDZBXHUzMDg5XHUzMDU3XHUzMDkyXHU2NzA5XHU1MkI5XHU1MzE2XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChkYW1hZ2VEYXRhLm5vRGFtYWdlKSByZXR1cm4gMDtcclxuICByZXR1cm4gZGFtYWdlRGF0YS5kYW1hZ2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTcyNzlcdTYwMjdcdTMwODRcdTcyQjZcdTYxNEJcdTMwOTJcdTgwMDNcdTYxNkVcdTMwNTdcdTMwNjZcdTYyODBcdTMwNENcdTZCNjNcdTMwNTdcdTMwNEZcdTU0N0RcdTRFMkRcdTMwNTlcdTMwOEJcdTMwNEJcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcdTMwNTlcdTMwOEJcclxuICogQHBhcmFtIHtEdW5nZW9uU3RhdGV9IGR1bmdlb25cclxuICogQHBhcmFtIHtNb25zdGVyfSBhdHRhY2tlclxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGRlZmVuZGVyXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtb3ZlSWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlTW92ZUVmZmVjdFByZWNoZWNrcyhkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmVJZCkge1xyXG4gIGxldCByZWZsZWN0ZWRCeU1hZ2ljQ29hdEV0YyA9IGZhbHNlO1xyXG4gIC8vIFx1MzA3Mlx1MzA4OVx1MzA0NFx1MzA1N1x1MzA5M1x1MzBENVx1MzBFOVx1MzBCMFxyXG4gIGNvbnN0IGxpZ2h0bmluZ3JvZCA9XHJcbiAgICAoZGVmZW5kZXIuYWJpbGl0eUFjdGl2ZSgweDMyKSB8fCBkdW5nZW9uLm90aGVyTW9uc3RlcnMuYWJpbGl0aWVzLmluY2x1ZGVzKDB4MzIpKSAmJlxyXG4gICAgYXR0YWNrZXIuZ2V0TW92ZVR5cGUobW92ZUlkLCBkdW5nZW9uKSA9PSBlb3MuVFlQRV9FTEVDVFJJQztcclxuICAvLyBcdTMwODhcdTMwNzNcdTMwN0ZcdTMwNUFcdTMwRDVcdTMwRTlcdTMwQjBcclxuICBjb25zdCBzdG9ybURyYWluID1cclxuICAgIChkZWZlbmRlci5hYmlsaXR5QWN0aXZlKDB4N2EpIHx8IGR1bmdlb24ub3RoZXJNb25zdGVycy5hYmlsaXRpZXMuaW5jbHVkZXMoMHg3YSkpICYmXHJcbiAgICBhdHRhY2tlci5nZXRNb3ZlVHlwZShtb3ZlSWQsIGR1bmdlb24pID09IGVvcy5UWVBFX1dBVEVSO1xyXG5cclxuICBsZXQgaGl0ID0gdHJ1ZTtcclxuICAvLyBcdTY0RUNcdTRGM0NcdTcxMjFcdTY1NzVcdTcyQjZcdTYxNEJcdTMwNkJcdTMwNkFcdTMwOEJcdTZFOUNcdTMwODFcdTYyODBcdTMwOTJcdTMwQURcdTMwRTNcdTMwRjNcdTMwQkJcdTMwRUJcdTMwNTdcdTMwNUZcdTU4MzRcdTU0MDhcdTMwMDFcdTYyODBcdTMwNkZcdTU5MzFcdTY1NTdcdTMwNTlcdTMwOEJcclxuICBpZiAoZGVmZW5kZXIudHdvVHVybk1vdmVGb3JjZWRNaXNzKG1vdmVJZCkpIHtcclxuICAgIGhpdCA9IGZhbHNlO1xyXG4gICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLnR3b1R1cm5Nb3ZlRm9yY2VkTWlzcyA9IHRydWU7XHJcbiAgfVxyXG4gIC8vIFx1MzA3Q1x1MzA0Nlx1MzA0QVx1MzA5M1x1MzA2RVx1NzZGOFx1NjI0Qlx1MzA2Qlx1OTdGM1x1NjI4MFx1MzA5Mlx1NTQ3RFx1NEUyRFx1MzA1NVx1MzA1Qlx1MzA1Rlx1NTgzNFx1NTQwOFx1MzAwMVx1NjI4MFx1MzA2Rlx1NTkzMVx1NjU1N1x1MzA1OVx1MzA4QlxyXG4gIGlmIChoaXQgJiYgZGVmZW5kZXIuYWJpbGl0eUFjdGl2ZURldGFpbHMoMHgzYywgYXR0YWNrZXIsIHRydWUpICYmIE1lY2hhbmljcy5pc1NvdW5kTW92ZShtb3ZlSWQpKSB7XHJcbiAgICBoaXQgPSBmYWxzZTtcclxuICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5zb3VuZHByb29mQWN0aXZhdGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgLy8gXHU5NjMyXHU1RkExXHU1MDc0XHUzMDZFXHUzMDg4XHUzMDYxXHUzMDgwXHUzMDRDXHU3NjdBXHU1MkQ1XHUzMDU3XHUzMDVGXHU1ODM0XHU1NDA4XHUzMDAxXHU2MjgwXHUzMDZGXHU1OTMxXHU2NTU3XHUzMDU5XHUzMDhCXHJcbiAgaWYgKGhpdCAmJiBkZWZlbmRlci5hYmlsaXR5QWN0aXZlRGV0YWlscygweDc5LCBhdHRhY2tlciwgdHJ1ZSkgJiYgZHVuZ2Vvbi5ybmcucm9sbEZvcmV3YXJuKCkpIHtcclxuICAgIGhpdCA9IGZhbHNlO1xyXG4gIH1cclxuICAvLyBcdTYyODBcdTU0N0RcdTRFMkRcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcclxuICBsZXQgbmV2ZXJNaXNzU2VsZiA9IG1vdmVJZCAhPSAweDY4ICYmIG1vdmVJZCAhPSAweDEzMSAmJiBtb3ZlSWQgIT0gMHgxMmQgJiYgIXJlZmxlY3RlZEJ5TWFnaWNDb2F0RXRjO1xyXG4gIGlmIChoaXQgJiYgIU1vdmVIaXRDaGVjayhkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmVJZCwgZmFsc2UsIG5ldmVyTWlzc1NlbGYpKSB7XHJcbiAgICBoaXQgPSBmYWxzZTtcclxuICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5maXJzdEhpdENoZWNrRmFpbGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKGhpdCkge1xyXG4gICAgLy8gXHUzMDcyXHUzMDg5XHUzMDQ0XHUzMDU3XHUzMDkzXHUzMDRDXHU3NjdBXHU1MkQ1XHUzMDU3XHUzMDVGXHU1ODM0XHU1NDA4XHUzMDAxXHU2MjgwXHUzMDZGXHU1OTMxXHU2NTU3XHUzMDU5XHUzMDhCXHJcbiAgICBpZiAobGlnaHRuaW5ncm9kKSB7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5saWdodG5pbmdyb2RBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgICBoaXQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIFx1MzA4OFx1MzA3M1x1MzA3Rlx1MzA1QVx1MzA0Q1x1NzY3QVx1NTJENVx1MzA1N1x1MzA1Rlx1NTgzNFx1NTQwOFx1MzAwMVx1NjI4MFx1MzA2Rlx1NTkzMVx1NjU1N1x1MzA1OVx1MzA4QlxyXG4gICAgaWYgKHN0b3JtRHJhaW4pIHtcclxuICAgICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLnN0b3JtRHJhaW5BY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgICBoaXQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFx1OTAxQVx1NUUzOFx1NjUzQlx1NjQ4M1x1NEVFNVx1NTkxNlx1MzA2RVx1NjI4MFx1MzA5Mlx1NTkzMVx1NjU1NyAtPiBcdTMwNEJcdTMwNUZcdTMwNkFcdTMwODlcdTMwNTdcdTMwOTJcdTY3MDlcdTUyQjlcdTUzMTZcclxuICBpZiAoIWhpdCAmJiBtb3ZlSWQgIT0gMHgxNjMpIHtcclxuICAgIGF0dGFja2VyLmZsYWdfcHJhY3RpY2Vfc3dpbmdlciA9IHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBoaXQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTY1M0JcdTY0ODNcdTUwNzRcdTMwNENcdTRGN0ZcdTc1MjhcdTMwNTdcdTMwNUZcdTYyODBcdTMwODRcdTkwNTNcdTUxNzdcdTMwNkVcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdTMwOTJcdThBMDhcdTdCOTdcclxuICogQHBhcmFtIHtEYW1hZ2VEYXRhfSBkYW1hZ2VEYXRhXHJcbiAqIEBwYXJhbSB7RHVuZ2VvblN0YXRlfSBkdW5nZW9uXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gYXR0YWNrZXJcclxuICogQHBhcmFtIHtNb25zdGVyfSBkZWZlbmRlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gYXR0YWNrVHlwZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYXR0YWNrUG93ZXJcclxuICogQHBhcmFtIHsqfSBkYW1hZ2VNdWx0XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtb3ZlSWRcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW11bGF0ZURhbWFnZUNhbGNTaGFyZWQoXHJcbiAgZGFtYWdlRGF0YSxcclxuICBkdW5nZW9uLFxyXG4gIGF0dGFja2VyLFxyXG4gIGRlZmVuZGVyLFxyXG4gIGF0dGFja1R5cGUsXHJcbiAgYXR0YWNrUG93ZXIsXHJcbiAgZGFtYWdlTXVsdCxcclxuICBtb3ZlSWQsXHJcbikge1xyXG4gIGNvbnN0IGNyaXRDaGFuY2UgPSBNZWNoYW5pY3MuZ2V0TW92ZUNyaXRDaGFuY2UobW92ZUlkKTtcclxuICBDYWxjRGFtYWdlKGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgYXR0YWNrVHlwZSwgYXR0YWNrUG93ZXIsIGNyaXRDaGFuY2UsIGRhbWFnZURhdGEsIGRhbWFnZU11bHQsIG1vdmVJZCwgdHJ1ZSk7XHJcbiAgcmV0dXJuIHJ1bk1vY2tEYW1hZ2VTZXF1ZW5jZShkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmVJZCwgZGFtYWdlRGF0YSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTYyODBcdTMwNkVcdTU0N0RcdTRFMkRcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcdTMwOTJcdTU0MkJcdTMwODFcdTMwNUZcdThBMDhcdTdCOTdcdTMwOTJcdTg4NENcdTMwNDZcclxuICogQHBhcmFtIHtEYW1hZ2VEYXRhfSBkYW1hZ2VEYXRhXHJcbiAqIEBwYXJhbSB7RHVuZ2VvblN0YXRlfSBkdW5nZW9uXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gYXR0YWNrZXJcclxuICogQHBhcmFtIHtNb25zdGVyfSBkZWZlbmRlclxyXG4gKiBAcGFyYW0ge01vdmV9IG1vdmVcclxuICogQHBhcmFtIHsqfSBkYW1hZ2VNdWx0XHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2ltdWxhdGVEYW1hZ2VDYWxjV2l0aE11bHQoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlLCBkYW1hZ2VNdWx0KSB7XHJcbiAgaWYgKCFleGVjdXRlTW92ZUVmZmVjdFByZWNoZWNrcyhkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUuaWQpKSB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbiAgY29uc3QgYXR0YWNrVHlwZSA9IGF0dGFja2VyLmdldE1vdmVUeXBlKG1vdmUuaWQsIGR1bmdlb24pO1xyXG4gIGNvbnN0IGF0dGFja1Bvd2VyID0gYXR0YWNrZXIuZ2V0TW92ZVBvd2VyKG1vdmUpO1xyXG4gIHJldHVybiBzaW11bGF0ZURhbWFnZUNhbGNTaGFyZWQoXHJcbiAgICBkYW1hZ2VEYXRhLFxyXG4gICAgZHVuZ2VvbixcclxuICAgIGF0dGFja2VyLFxyXG4gICAgZGVmZW5kZXIsXHJcbiAgICBhdHRhY2tUeXBlLFxyXG4gICAgYXR0YWNrUG93ZXIsXHJcbiAgICBkYW1hZ2VNdWx0LFxyXG4gICAgbW92ZS5pZCxcclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtEYW1hZ2VEYXRhfSBkYW1hZ2VEYXRhXHJcbiAqIEBwYXJhbSB7RHVuZ2VvblN0YXRlfSBkdW5nZW9uXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gYXR0YWNrZXJcclxuICogQHBhcmFtIHtNb25zdGVyfSBkZWZlbmRlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gYXR0YWNrVHlwZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYXR0YWNrUG93ZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IG1vdmVJZFxyXG4gKiBAcGFyYW0geyp9IGNyaXRDaGFuY2VcclxuICogQHBhcmFtIHsqfSBkYW1hZ2VNdWx0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2ltdWxhdGVEYW1hZ2VDYWxjR2VuZXJpYyhcclxuICBkYW1hZ2VEYXRhLFxyXG4gIGR1bmdlb24sXHJcbiAgYXR0YWNrZXIsXHJcbiAgZGVmZW5kZXIsXHJcbiAgYXR0YWNrVHlwZSxcclxuICBhdHRhY2tQb3dlcixcclxuICBtb3ZlSWQsXHJcbiAgY3JpdENoYW5jZSxcclxuICBkYW1hZ2VNdWx0LFxyXG4pIHtcclxuICBpZiAoIWV4ZWN1dGVNb3ZlRWZmZWN0UHJlY2hlY2tzKGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZUlkKSkge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG4gIENhbGNEYW1hZ2UoZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBhdHRhY2tUeXBlLCBhdHRhY2tQb3dlciwgY3JpdENoYW5jZSwgZGFtYWdlRGF0YSwgZGFtYWdlTXVsdCwgbW92ZUlkLCB0cnVlKTtcclxuICByZXR1cm4gcnVuTW9ja0RhbWFnZVNlcXVlbmNlKGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZUlkLCBkYW1hZ2VEYXRhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBBNlx1MzBBN1x1MzBCNlx1MzBGQ1x1MzBEQ1x1MzBGQ1x1MzBFQlx1MzA5Mlx1NEY3Rlx1NzUyOFx1MzA1OVx1MzA4QlxyXG4gKiBAcGFyYW0ge0RhbWFnZURhdGF9IGRhbWFnZURhdGFcclxuICogQHBhcmFtIHtEdW5nZW9uU3RhdGV9IGR1bmdlb25cclxuICogQHBhcmFtIHtNb25zdGVyfSBhdHRhY2tlclxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGRlZmVuZGVyXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBnaW5zZW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2ltdWxhdGVEYW1hZ2VDYWxjV2VhdGhlckJhbGwoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBnaW5zZW5nID0gMCkge1xyXG4gIGlmICghZXhlY3V0ZU1vdmVFZmZlY3RQcmVjaGVja3MoZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCAweDFmKSkge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG4gIGNvbnN0IHdlYXRoZXIgPSBhdHRhY2tlci5wZXJjZWl2ZWRXZWF0aGVyKGR1bmdlb24pO1xyXG4gIGNvbnN0IGF0dGFja1R5cGUgPSBNZWNoYW5pY3MuV0VBVEhFUl9CQUxMX1RZUEVfVEFCTEVbd2VhdGhlcl07XHJcbiAgY29uc3QgbW92ZSA9IG5ldyBNb3ZlKCk7XHJcbiAgbW92ZS5pZCA9IDB4MWY7XHJcbiAgbW92ZS5naW5zZW5nID0gZ2luc2VuZztcclxuICBjb25zdCBkYW1hZ2VNdWx0ID0gTWVjaGFuaWNzLldFQVRIRVJfQkFMTF9EQU1BR0VfTVVMVF9UQUJMRVt3ZWF0aGVyXTtcclxuICBjb25zdCBhdHRhY2tQb3dlciA9IGF0dGFja2VyLmdldE1vdmVQb3dlcihtb3ZlKTtcclxuICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5kYW1hZ2VNdWx0ID0gZGFtYWdlTXVsdDtcclxuICByZXR1cm4gc2ltdWxhdGVEYW1hZ2VDYWxjU2hhcmVkKGRhbWFnZURhdGEsIGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgYXR0YWNrVHlwZSwgYXR0YWNrUG93ZXIsIGRhbWFnZU11bHQsIDB4MWYpO1xyXG59XHJcblxyXG4vKipcclxuICogXHUzMDU3XHUzMDVDXHUzMDkzXHUzMDZFXHUzMDgxXHUzMDUwXHUzMDdGXHUzMDkyXHU0RjdGXHU3NTI4XHUzMDU5XHUzMDhCXHJcbiAqIEBwYXJhbSB7RGFtYWdlRGF0YX0gZGFtYWdlRGF0YVxyXG4gKiBAcGFyYW0ge0R1bmdlb25TdGF0ZX0gZHVuZ2VvblxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGF0dGFja2VyXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gZGVmZW5kZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IGdpbnNlbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW11bGF0ZURhbWFnZUNhbGNOYXR1cmFsR2lmdChkYW1hZ2VEYXRhLCBkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIGdpbnNlbmcgPSAwKSB7XHJcbiAgaWYgKCFleGVjdXRlTW92ZUVmZmVjdFByZWNoZWNrcyhkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIDB4MWQ3KSkge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG4gIGNvbnN0IG1vdmUgPSBuZXcgTW92ZSgpO1xyXG4gIG1vdmUuaWQgPSAweDFkNztcclxuICBtb3ZlLmdpbnNlbmcgPSBnaW5zZW5nO1xyXG4gIGlmIChhdHRhY2tlci5oZWxkSXRlbSAhPSAwKSB7XHJcbiAgICBjb25zdCBuZ0luZm8gPSBhdHRhY2tlci5uYXR1cmFsR2lmdEluZm8oKTtcclxuICAgIGlmIChuZ0luZm8pIHtcclxuICAgICAgbGV0IGF0dGFja1Bvd2VyID0gYXR0YWNrZXIuZ2V0TW92ZVBvd2VyKG1vdmUpICsgbmdJbmZvLmJhc2VQb3dlckJvb3N0O1xyXG4gICAgICBpZiAoYXR0YWNrUG93ZXIgPiAweDdmZmYpIHtcclxuICAgICAgICBhdHRhY2tQb3dlciAtPSAxIDw8IDE2O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzaW11bGF0ZURhbWFnZUNhbGNTaGFyZWQoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBuZ0luZm8udHlwZUlkLCBhdHRhY2tQb3dlciwgMSwgMHgxZDcpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gc2ltdWxhdGVEYW1hZ2VDYWxjV2l0aE11bHQoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlLCAxKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NzNGRVx1NTcyOEhQXHUzMDRDXHU2NzAwXHU1OTI3SFBcdTMwNjhcdTZCRDRcdThGMDNcdTMwNTdcdTMwNjZcdTMwNjlcdTMwNkVcdTMwNTBcdTMwODlcdTMwNDRcdTZCOEJcdTMwNjNcdTMwNjZcdTMwNDRcdTMwOEJcdTMwNEJcclxuICogQHBhcmFtIHtNb25zdGVyfSBlbnRpdHlcclxuICogQHJldHVybnMgMDpcdUZGNUUyNSUsIDE6XHVGRjVFNTAlLCAyOlx1RkY1RTc1JSwgMzpcdUZGNUUxMDAlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SHBEZXBNdWx0VGFibGVJZHgoZW50aXR5KSB7XHJcbiAgY29uc3QgaHAgPSBlbnRpdHkuaHA7XHJcbiAgY29uc3QgbWF4SHAgPSBNYXRoLm1pbihlbnRpdHkuaHBfbWF4LCA5OTkpO1xyXG4gIGlmIChocCA8PSBNYXRoLnRydW5jKG1heEhwIC8gNCkpIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuICBpZiAoaHAgPD0gTWF0aC50cnVuYygobWF4SHAgKiAyKSAvIDQpKSB7XHJcbiAgICByZXR1cm4gMTtcclxuICB9XHJcbiAgaWYgKGhwIDw9IE1hdGgudHJ1bmMoKG1heEhwICogMykgLyA0KSkge1xyXG4gICAgcmV0dXJuIDI7XHJcbiAgfVxyXG4gIHJldHVybiAzO1xyXG59XHJcblxyXG4vKipcclxuICogXHU2MjgwXHU2QkNFXHUzMDZFXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU1MDBEXHU3Mzg3XHUzMDkyXHU5MDY5XHU3NTI4XHUzMDU3XHUzMDAxXHU5MDY5XHUzMDU3XHUzMDVGXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU4QTA4XHU3Qjk3XHU5NUEyXHU2NTcwXHUzMDkyXHU1QjlGXHU4ODRDXHUzMDU5XHUzMDhCXHJcbiAqIEBwYXJhbSB7RGFtYWdlRGF0YX0gZGFtYWdlRGF0YVxyXG4gKiBAcGFyYW0ge0R1bmdlb25TdGF0ZX0gZHVuZ2VvblxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGF0dGFja2VyXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gZGVmZW5kZXJcclxuICogQHBhcmFtIHtNb3ZlfSBtb3ZlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2ltdWxhdGVEYW1hZ2VDYWxjKGRhbWFnZURhdGEsIGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZSkge1xyXG4gIGxldCBkYW1hZ2VNdWx0ID0gMTtcclxuICBsZXQgZml4ZWREYW1hZ2UgPSAwO1xyXG5cclxuICBzd2l0Y2ggKG1vdmUuaWQpIHtcclxuICAgIGNhc2UgMDogLy8gXHUzMDZBXHUzMDU3XHJcbiAgICAgIGRhbWFnZU11bHQgPSAwO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMHgyOiAvLyBcdTMwQTJcdTMwQTRcdTMwQjlcdTMwRENcdTMwRkNcdTMwRUJcclxuICAgIGNhc2UgMHg2OTogLy8gXHUzMDUzXHUzMDhEXHUzMDRDXHUzMDhCXHJcbiAgICAgIGRhbWFnZU11bHQgPSBNZWNoYW5pY3MuUk9MTE9VVF9EQU1BR0VfTVVMVF9UQUJMRVtNYXRoLm1pbihtb3ZlLnByaW9yU3VjY2Vzc2l2ZUhpdHMsIDkpXTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDB4ODogLy8gXHUzMDQyXHUzMDZBXHUzMDkyXHUzMDdCXHUzMDhCXHJcbiAgICAgIGRhbWFnZU11bHQgPSBNZWNoYW5pY3MuRElHX0RBTUFHRV9NVUxUSVBMSUVSO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMHgxNDogLy8gXHUzMDQ0XHUzMDRCXHUzMDhBXHUzMDZFXHUzMDdFXHUzMDQ4XHUzMDcwXHJcbiAgICAgIGZpeGVkRGFtYWdlID0gTWF0aC5mbG9vcihkZWZlbmRlci5ocCAvIDIpO1xyXG4gICAgICByZXR1cm4gc2ltdWxhdGVEYW1hZ2VDYWxjRml4ZWRTdGF0aWMoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlLCBmaXhlZERhbWFnZSk7XHJcbiAgICBjYXNlIDB4MWY6IC8vIFx1MzBBNlx1MzBBN1x1MzBCNlx1MzBGQ1x1MzBEQ1x1MzBGQ1x1MzBFQlxyXG4gICAgICByZXR1cm4gc2ltdWxhdGVEYW1hZ2VDYWxjV2VhdGhlckJhbGwoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlLmdpbnNlbmcpO1xyXG4gICAgY2FzZSAweDIwOiAvLyBcdTMwNDZcdTMwNUFcdTMwNTdcdTMwNEFcclxuICAgIGNhc2UgMHhkYjogLy8gXHUzMDZBXHUzMDdGXHUzMDZFXHUzMDhBXHJcbiAgICAgIGlmIChkZWZlbmRlci5zdGF0dXNlcy5kaXZpbmcpIHtcclxuICAgICAgICBkYW1hZ2VNdWx0ID0gMjtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMHgzMDogLy8gXHUzMDRBXHUzMDkzXHUzMDRDXHUzMDQ4XHUzMDU3XHJcbiAgICAgIGZvciAoY29uc3QgZG1nIG9mIE1lY2hhbmljcy5SRVRVUk5fRklYRURfREFNQUdFX1RBQkxFKSB7XHJcbiAgICAgICAgaWYgKGRtZy5pcSA8IDApIGJyZWFrO1xyXG4gICAgICAgIGlmIChhdHRhY2tlci5pcSA8IGRtZy5pcSkge1xyXG4gICAgICAgICAgZml4ZWREYW1hZ2UgPSBkbWcuZGFtYWdlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzaW11bGF0ZURhbWFnZUNhbGNGaXhlZFN0YXRpYyhkYW1hZ2VEYXRhLCBkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUsIGZpeGVkRGFtYWdlKTtcclxuICAgIGNhc2UgMHgzOTogLy8gXHUzMDRCXHUzMDVDXHUzMDRBXHUzMDUzXHUzMDU3XHJcbiAgICBjYXNlIDB4YTI6IC8vIFx1MzA1Rlx1MzA2NFx1MzA3RVx1MzA0RFxyXG4gICAgICBpZiAoZGVmZW5kZXIuc3RhdHVzZXMuZmx5aW5nIHx8IGRlZmVuZGVyLnN0YXR1c2VzLmJvdW5jaW5nKSB7XHJcbiAgICAgICAgZGFtYWdlTXVsdCA9IDI7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDB4M2M6IC8vIFx1MzA0Qlx1MzA3RVx1MzA0NFx1MzA1Rlx1MzA2MVxyXG4gICAgICBkYW1hZ2VNdWx0ID0gTWVjaGFuaWNzLlJBWk9SX1dJTkRfREFNQUdFX01VTFRJUExJRVI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAweDQyOiAvLyBcdTMwNENcdTMwODBcdTMwNTdcdTMwODNcdTMwODlcclxuICAgICAgY29uc3QgZGlmZiA9IGRlZmVuZGVyLmhwIC0gYXR0YWNrZXIuaHA7XHJcbiAgICAgIGZpeGVkRGFtYWdlID0gTWF0aC5tYXgoZGlmZiwgMCk7XHJcbiAgICAgIHJldHVybiBzaW11bGF0ZURhbWFnZUNhbGNGaXhlZFN0YXRpYyhkYW1hZ2VEYXRhLCBkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUsIGZpeGVkRGFtYWdlKTtcclxuICAgIGNhc2UgMHg0MzogLy8gXHUzMDRCXHUzMDg5XHUzMDUyXHUzMDkzXHUzMDREXHJcbiAgICAgIGlmIChcclxuICAgICAgICBhdHRhY2tlci5zdGF0dXNlcy5idXJuIHx8XHJcbiAgICAgICAgYXR0YWNrZXIuc3RhdHVzZXMucG9pc29uIHx8XHJcbiAgICAgICAgYXR0YWNrZXIuc3RhdHVzZXMuYmFkX3BvaXNvbiB8fFxyXG4gICAgICAgIGF0dGFja2VyLnN0YXR1c2VzLnBhcmFseXNpcyB8fFxyXG4gICAgICAgIGF0dGFja2VyLnN0YXR1c2VzLmlkZW50aWZ5aW5nXHJcbiAgICAgICkge1xyXG4gICAgICAgIGRhbWFnZU11bHQgPSBNZWNoYW5pY3MuRkFDQURFX0RBTUFHRV9NVUxUSVBMSUVSO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAweDRiOiAvLyBcdTMwNERcdTMwNDJcdTMwNDRcdTMwRDFcdTMwRjNcdTMwQzFcclxuICAgICAgZGFtYWdlTXVsdCA9IE1lY2hhbmljcy5GT0NVU19QVU5DSF9EQU1BR0VfTVVMVElQTElFUjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDB4NGQ6IC8vIFx1MzA0RFx1MzA1N1x1MzA0Qlx1MzA0NFx1MzA1Qlx1MzA0NFxyXG4gICAgY2FzZSAweDc5OiAvLyBcdTMwNThcdTMwNUZcdTMwNzBcdTMwNUZcclxuICAgICAgZGFtYWdlTXVsdCA9IE1lY2hhbmljcy5SRVZFUlNBTF9EQU1BR0VfTVVMVF9UQUJMRVtnZXRIcERlcE11bHRUYWJsZUlkeChhdHRhY2tlcildO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMHg0ZTogLy8gXHUzMDREXHUzMDY0XHUzMDUxXHJcbiAgICAgIGlmIChkZWZlbmRlci5zdGF0dXNlcy5wYXJhbHlzaXMpIHtcclxuICAgICAgICBkYW1hZ2VNdWx0ID0gMjtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMHg1YzogLy8gXHUzMDUxXHUzMDVGXHUzMDUwXHUzMDhBXHJcbiAgICBjYXNlIDB4MWNhOiAvLyBcdTMwNEZcdTMwNTVcdTMwODBcdTMwNTlcdTMwNzNcclxuICAgICAgZGFtYWdlTXVsdCA9IE1lY2hhbmljcy5nZXRNb25zdGVyV2VpZ2h0KGRlZmVuZGVyLmlkKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDB4NjQ6IC8vIFx1MzBCNFx1MzBDM1x1MzBDOVx1MzBEMFx1MzBGQ1x1MzBDOVxyXG4gICAgICBkYW1hZ2VNdWx0ID0gTWVjaGFuaWNzLlNLWV9BVFRBQ0tfREFNQUdFX01VTFRJUExJRVI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAweDZjOiAvLyBcdTMwQjVcdTMwQTRcdTMwQjNcdTMwQTZcdTMwQTdcdTMwRkNcdTMwRDZcclxuICAgICAgY29uc3QgbHYgPSBhdHRhY2tlci5sZXZlbDtcclxuICAgICAgY29uc3QgbXVsdCA9IDI1NiAqIChkdW5nZW9uLnJuZy52YXJpYW5jZURpYWwgKyAwLjUpO1xyXG5cclxuICAgICAgLy8gXHU0RTBCXHU5NjUwXHU0RTBBXHU5NjUwMVx1RkY1RTE5OVx1MzA2N1x1MzBDOFx1MzBFQVx1MzBERlx1MzBGM1x1MzBCMFxyXG4gICAgICBmaXhlZERhbWFnZSA9IChsdiAqIG11bHQpID4+IDg7XHJcbiAgICAgIGlmIChmaXhlZERhbWFnZSA8IDApIGZpeGVkRGFtYWdlID0gMTtcclxuICAgICAgaWYgKDE5OSA8IGZpeGVkRGFtYWdlKSBmaXhlZERhbWFnZSA9IDE5OTtcclxuXHJcbiAgICAgIHJldHVybiBzaW11bGF0ZURhbWFnZUNhbGNGaXhlZER5bmFtaWMoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlLCBmaXhlZERhbWFnZSk7XHJcbiAgICBjYXNlIDB4NzE6IC8vIFx1MzA1N1x1MzA0QVx1MzA3NVx1MzA0RFxyXG4gICAgICBkYW1hZ2VNdWx0ID0gTWVjaGFuaWNzLldBVEVSX1NQT1VUX0RBTUFHRV9NVUxUX1RBQkxFW2dldEhwRGVwTXVsdFRhYmxlSWR4KGF0dGFja2VyKV07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAweDc2OiAvLyBcdTMwNThcdTMwNTdcdTMwOTNcclxuICAgICAgaWYgKGRlZmVuZGVyLnN0YXR1c2VzLmRpZ2dpbmcpIHtcclxuICAgICAgICBkYW1hZ2VNdWx0ID0gMjtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIC8vIFx1MzA1OFx1MzA4Rlx1MzA4Q1xyXG4gICAgY2FzZSAweDgzOiB7XHJcbiAgICAgIGNvbnN0IG1vdmVUeXBlID0gYXR0YWNrZXIuZ2V0TW92ZVR5cGUobW92ZS5pZCwgZHVuZ2Vvbik7XHJcbiAgICAgIGNvbnN0IGlzTW9sZEJyZWFrZXIgPSBhdHRhY2tlci5hYmlsaXR5QWN0aXZlKDB4NTMpO1xyXG5cclxuICAgICAgLy8gXHUzMDc1XHUzMDg2XHUzMDQ2XHU3NkY4XHU2MjRCXHUzMDZCXHU1NDdEXHU0RTJEXHUzMDU5XHUzMDhCXHUzMDRCXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHJcbiAgICAgIGlmICghaXNNb2xkQnJlYWtlciAmJiBkZWZlbmRlci5sZXZpdGF0ZUFjdGl2ZShkdW5nZW9uKSkge1xyXG4gICAgICAgIGZpeGVkRGFtYWdlID0gMDtcclxuICAgICAgfVxyXG4gICAgICAvLyBcdTRFMDBcdTY0ODNcdTYyODBcdTMwNENcdTU0N0RcdTRFMkRcdTMwNTlcdTMwOEJcdTMwNEJcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcclxuICAgICAgZWxzZSBpZiAoY2hlY2tNb3ZlSGl0T2hrbyhkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmVUeXBlKSkge1xyXG4gICAgICAgIGZpeGVkRGFtYWdlID0gOTk5OTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2ltdWxhdGVEYW1hZ2VDYWxjRml4ZWRTdGF0aWMoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlLCBmaXhlZERhbWFnZSk7XHJcbiAgICB9XHJcbiAgICBjYXNlIDB4OTY6IC8vIFx1MzA1Q1x1MzA2M1x1MzA1Rlx1MzA0NFx1MzA4Q1x1MzA0NFx1MzA2OSwgXHUzMDY0XHUzMDZFXHUzMEM5XHUzMEVBXHUzMEVCLCBcdTMwQ0ZcdTMwQjVcdTMwREZcdTMwQUVcdTMwRURcdTMwQzFcdTMwRjNcclxuICAgIGNhc2UgMHhiMTpcclxuICAgIGNhc2UgMHhmNzoge1xyXG4gICAgICBjb25zdCBtb3ZlVHlwZSA9IGF0dGFja2VyLmdldE1vdmVUeXBlKG1vdmUuaWQsIGR1bmdlb24pO1xyXG4gICAgICBpZiAoY2hlY2tNb3ZlSGl0T2hrbyhkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmVUeXBlKSkge1xyXG4gICAgICAgIGZpeGVkRGFtYWdlID0gOTk5OTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2ltdWxhdGVEYW1hZ2VDYWxjRml4ZWRTdGF0aWMoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlLCBmaXhlZERhbWFnZSk7XHJcbiAgICB9XHJcbiAgICBjYXNlIDB4OTc6IC8vIFx1MzBCRFx1MzBGQ1x1MzBFOVx1MzBGQ1x1MzBEM1x1MzBGQ1x1MzBFMFxyXG4gICAgICBjb25zdCB3ZWF0aGVyID0gYXR0YWNrZXIucGVyY2VpdmVkV2VhdGhlcihkdW5nZW9uKTtcclxuICAgICAgZGFtYWdlTXVsdCA9IE1lY2hhbmljcy5TT0xBUkJFQU1fREFNQUdFX01VTFRJUExJRVI7XHJcbiAgICAgIGlmICh3ZWF0aGVyID09IGVvcy5XRUFUSEVSX1NBTkRTVE9STSB8fCB3ZWF0aGVyID09IGVvcy5XRUFUSEVSX1JBSU4gfHwgd2VhdGhlciA9PSBlb3MuV0VBVEhFUl9IQUlMKSB7XHJcbiAgICAgICAgZGFtYWdlTXVsdCAvPSAyOyAvLyBcdTMwNTlcdTMwNkFcdTMwNDJcdTMwODlcdTMwNTcsIFx1MzA0Mlx1MzA4MSwgXHUzMDQyXHUzMDg5XHUzMDhDIFx1MzA2QVx1MzA4OTFcdTUwMERcdTMwNkJcdTYyM0JcdTMwNTlcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMHg5ODogLy8gXHUzMEJEXHUzMENCXHUzMEMzXHUzMEFGXHUzMEQ2XHUzMEZDXHUzMEUwXHJcbiAgICAgIGZpeGVkRGFtYWdlID0gTWVjaGFuaWNzLlNPTklDQk9PTV9GSVhFRF9EQU1BR0U7XHJcbiAgICAgIHJldHVybiBzaW11bGF0ZURhbWFnZUNhbGNGaXhlZFN0YXRpYyhkYW1hZ2VEYXRhLCBkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUsIGZpeGVkRGFtYWdlKTtcclxuICAgIGNhc2UgMHg5OTogLy8gXHUzMDVEXHUzMDg5XHUzMDkyXHUzMDY4XHUzMDc2XHJcbiAgICAgIGRhbWFnZU11bHQgPSBNZWNoYW5pY3MuRkxZX0RBTUFHRV9NVUxUSVBMSUVSO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMHg5YzogLy8gXHUzMEMwXHUzMEE0XHUzMEQzXHUzMEYzXHUzMEIwXHJcbiAgICAgIGRhbWFnZU11bHQgPSBNZWNoYW5pY3MuRElWRV9EQU1BR0VfTVVMVElQTElFUjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDB4YWE6IC8vIFx1MzA2MVx1MzA0RFx1MzA4NVx1MzA0Nlx1MzA2QVx1MzA1MlxyXG4gICAgY2FzZSAweGQ4OiAvLyBcdTMwQ0FcdTMwQTRcdTMwQzhcdTMwRDhcdTMwQzNcdTMwQzlcclxuICAgICAgZml4ZWREYW1hZ2UgPSBhdHRhY2tlci5sZXZlbDtcclxuICAgICAgcmV0dXJuIHNpbXVsYXRlRGFtYWdlQ2FsY0ZpeGVkU3RhdGljKGRhbWFnZURhdGEsIGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZSwgZml4ZWREYW1hZ2UpO1xyXG4gICAgY2FzZSAweGNkOiAvLyBcdTMwNjhcdTMwNzNcdTMwNkZcdTMwNkRcdTMwOEJcclxuICAgICAgZGFtYWdlTXVsdCA9IE1lY2hhbmljcy5CT1VOQ0VfREFNQUdFX01VTFRJUExJRVI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAweGNlOiAvLyBcdTMwNjhcdTMwNzNcdTMwNzJcdTMwNTZcdTMwNTJcdTMwOEFcclxuICAgIGNhc2UgMHgxMTA6IC8vIFx1MzBENlx1MzBFOVx1MzBCOVx1MzBDOFx1MzBEMFx1MzBGQ1x1MzBGM1xyXG4gICAgICBkYW1hZ2VNdWx0ID0gMjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDB4ZDI6IC8vIFx1MzBDOFx1MzBFQVx1MzBEN1x1MzBFQlx1MzBBRFx1MzBDM1x1MzBBRlxyXG4gICAgICBkYW1hZ2VNdWx0ID0gTWF0aC5taW4obW92ZS5wcmlvclN1Y2Nlc3NpdmVIaXRzICsgMSwgMyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAweGY1OiAvLyBcdTMwNkZcdTMwNERcdTMwNjBcdTMwNTlcclxuICAgICAgZGFtYWdlTXVsdCA9IGF0dGFja2VyLnN0YXR1c2VzLnN0b2NrcGlsZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDB4MTE1OiAvLyBcdTMwRDdcdTMwRUNcdTMwQkNcdTMwRjNcdTMwQzhcclxuICAgICAgZml4ZWREYW1hZ2UgPSBnZXRWYWx1ZUJ5UmF0aW8oWzAsIDI1LCA1MCwgNzVdLCBkdW5nZW9uLnJuZy52YXJpYW5jZURpYWwpO1xyXG4gICAgICByZXR1cm4gc2ltdWxhdGVEYW1hZ2VDYWxjRml4ZWREeW5hbWljKGRhbWFnZURhdGEsIGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZSwgZml4ZWREYW1hZ2UpO1xyXG4gICAgY2FzZSAweDExNjogLy8gXHUzMDc1XHUzMDkzXHUzMDRCXHJcbiAgICAgIGRhbWFnZU11bHQgPSBNZWNoYW5pY3MuRVJVUFRJT05fREFNQUdFX01VTFRfVEFCTEVbZ2V0SHBEZXBNdWx0VGFibGVJZHgoYXR0YWNrZXIpXTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDB4MTI4OiAvLyBcdTMwREVcdTMwQjBcdTMwQ0JcdTMwQzFcdTMwRTVcdTMwRkNcdTMwQzlcclxuICAgICAgZml4ZWREYW1hZ2UgPSBnZXRWYWx1ZUJ5UmF0aW8oTWVjaGFuaWNzLk1BR05JVFVERV9EQU1BR0VfVEFCTEUsIGR1bmdlb24ucm5nLnZhcmlhbmNlRGlhbCk7XHJcbiAgICAgIGlmIChkZWZlbmRlci5zdGF0dXNlcy5kaWdnaW5nKSB7XHJcbiAgICAgICAgZml4ZWREYW1hZ2UgKj0gMjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2ltdWxhdGVEYW1hZ2VDYWxjRml4ZWREeW5hbWljKGRhbWFnZURhdGEsIGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZSwgZml4ZWREYW1hZ2UpO1xyXG4gICAgY2FzZSAweDE0ODogLy8gXHUzMDg0XHUzMDY0XHUzMDQyXHUzMDVGXHUzMDhBXHJcbiAgICAgIGZvciAoY29uc3QgZG1nIG9mIE1lY2hhbmljcy5GUlVTVFJBVElPTl9GSVhFRF9EQU1BR0VfVEFCTEUpIHtcclxuICAgICAgICBpZiAoZG1nLmlxIDwgMCkgYnJlYWs7XHJcbiAgICAgICAgaWYgKGF0dGFja2VyLmlxIDwgZG1nLmlxKSB7XHJcbiAgICAgICAgICBmaXhlZERhbWFnZSA9IGRtZy5kYW1hZ2U7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNpbXVsYXRlRGFtYWdlQ2FsY0ZpeGVkU3RhdGljKGRhbWFnZURhdGEsIGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZSwgZml4ZWREYW1hZ2UpO1xyXG4gICAgY2FzZSAweDE0YjogLy8gXHUzMDg2XHUzMDgxXHUzMDRGXHUzMDQ0XHJcbiAgICAgIGlmICghZGVmZW5kZXIuc3RhdHVzZXMuc2xlZXAgJiYgIWRlZmVuZGVyLnN0YXR1c2VzLm5pZ2h0bWFyZSAmJiAhZGVmZW5kZXIuc3RhdHVzZXMubmFwcGluZykge1xyXG4gICAgICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5kcmVhbUVhdGVyRmFpbGVkID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMHgxNTU6IC8vIFx1MzA4QVx1MzA4NVx1MzA0Nlx1MzA2RVx1MzA0NFx1MzA0Qlx1MzA4QVxyXG4gICAgICBmaXhlZERhbWFnZSA9IE1lY2hhbmljcy5EUkFHT05fUkFHRV9GSVhFRF9EQU1BR0U7XHJcbiAgICAgIHJldHVybiBzaW11bGF0ZURhbWFnZUNhbGNGaXhlZFN0YXRpYyhkYW1hZ2VEYXRhLCBkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUsIGZpeGVkRGFtYWdlKTtcclxuICAgIGNhc2UgMHgxNWM6IC8vIFx1MzBFRFx1MzBCMVx1MzBDM1x1MzBDOFx1MzA1QVx1MzA2NFx1MzA0RFxyXG4gICAgICBkYW1hZ2VNdWx0ID0gTWVjaGFuaWNzLlNLVUxMX0JBU0hfREFNQUdFX01VTFRJUExJRVI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAweDE2MzogLy8gXHUzMDUzXHUzMDQ2XHUzMDUyXHUzMDREIChcdTkwMUFcdTVFMzhcdTY1M0JcdTY0ODMpXHJcbiAgICAgIGRhbWFnZU11bHQgPSBNZWNoYW5pY3MuQ09OU1RfMF81MDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDB4MTg4OiAvLyBcdTMwNDRcdTMwNjFcdTMwNTJcdTMwNERcdTMwNkVcdTMwNUZcdTMwN0UgKFx1MzA0NFx1MzA2MVx1MzA1Mlx1MzA0RClcclxuICAgICAgZml4ZWREYW1hZ2UgPSA5OTk5O1xyXG4gICAgICByZXR1cm4gc2ltdWxhdGVEYW1hZ2VDYWxjRml4ZWRTdGF0aWMoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlLCBmaXhlZERhbWFnZSk7XHJcbiAgICBjYXNlIDB4MThhOiAvLyBcdTMwNTdcdTMwOTNcdTMwNEZcdTMwNDZcdTMwNEVcdTMwOEFcclxuICAgICAgZml4ZWREYW1hZ2UgPSBNZWNoYW5pY3MuVkFDVVVNX0NVVF9GSVhFRF9EQU1BR0U7XHJcbiAgICAgIHJldHVybiBzaW11bGF0ZURhbWFnZUNhbGNGaXhlZER5bmFtaWMoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlLCBmaXhlZERhbWFnZSk7XHJcbiAgICBjYXNlIDB4MThkOiAvLyBcdTMwNzJcdTMwOENcdTMwNDRcdTMwNjBcdTMwN0UgKFx1MzA0RFx1MzA4N1x1MzA0Nlx1MzA4MVx1MzA0NClcclxuICAgICAgZml4ZWREYW1hZ2UgPSBkZWZlbmRlci5nZXRTaXplKCk7XHJcbiAgICAgIHJldHVybiBzaW11bGF0ZURhbWFnZUNhbGNGaXhlZFN0YXRpYyhkYW1hZ2VEYXRhLCBkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUsIGZpeGVkRGFtYWdlKTtcclxuICAgIGNhc2UgMHgxZDc6IC8vIFx1MzA1N1x1MzA1Q1x1MzA5M1x1MzA2RVx1MzA4MVx1MzA1MFx1MzA3RlxyXG4gICAgICByZXR1cm4gc2ltdWxhdGVEYW1hZ2VDYWxjTmF0dXJhbEdpZnQoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBtb3ZlLmdpbnNlbmcpO1xyXG4gICAgY2FzZSAweDFjOTogLy8gXHUzMDREXHUzMDhBXHUzMDc1XHUzMDYwXHJcbiAgICAgIGxldCBtYXhQUCA9IE1lY2hhbmljcy5nZXRNb3ZlTWF4UFAobW92ZS5pZCk7XHJcbiAgICAgIGlmIChtYXhQUCA9PSAwKSB7XHJcbiAgICAgICAgbWF4UFAgPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBwcEZyYWMgPSAobW92ZS5wcCAqIDEwMCkgLyBtYXhQUDtcclxuICAgICAgaWYgKHBwRnJhYyA8IDI2KSB7XHJcbiAgICAgICAgZGFtYWdlTXVsdCA9IE1lY2hhbmljcy5DT05TVF8xXzI1O1xyXG4gICAgICB9IGVsc2UgaWYgKHBwRnJhYyA8IDUxKSB7XHJcbiAgICAgICAgZGFtYWdlTXVsdCA9IDE7XHJcbiAgICAgIH0gZWxzZSBpZiAocHBGcmFjIDwgNzYpIHtcclxuICAgICAgICBkYW1hZ2VNdWx0ID0gTWVjaGFuaWNzLkNPTlNUXzBfNzU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGFtYWdlTXVsdCA9IE1lY2hhbmljcy5DT05TVF8wXzUwO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAweDFkNTogLy8gXHUzMDU3XHUzMDRBXHUzMDdGXHUzMDVBXHJcbiAgICBjYXNlIDB4MWU4OiAvLyBcdTMwQzBcdTMwRTFcdTMwNEFcdTMwNTdcclxuICAgICAgbGV0IG1heEhwID0gZGVmZW5kZXIuaHBfbWF4O1xyXG4gICAgICBpZiAobWF4SHAgPiBNZWNoYW5pY3MuTUFYX0hQX0NBUCkge1xyXG4gICAgICAgIG1heEhwID0gTWVjaGFuaWNzLk1BWF9IUF9DQVA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRlZmVuZGVyLmhwICogMiA8PSBtYXhIcCkge1xyXG4gICAgICAgIGRhbWFnZU11bHQgPSAyO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAweDFkYTogLy8gXHUzMDU3XHUzMDdDXHUzMDhBXHUzMDY4XHUzMDhCXHJcbiAgICBjYXNlIDB4MWY5OiAvLyBcdTMwNkJcdTMwNEVcdTMwOEFcdTMwNjRcdTMwNzZcdTMwNTlcclxuICAgICAgZGFtYWdlTXVsdCA9IE1lY2hhbmljcy5XUklOR19PVVRfREFNQUdFX01VTFRfVEFCTEVbZ2V0SHBEZXBNdWx0VGFibGVJZHgoZGVmZW5kZXIpXTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDB4MWRiOiAvLyBcdTMwQjhcdTMwRTNcdTMwQTRcdTMwRURcdTMwRENcdTMwRkNcdTMwRUJcclxuICAgICAgaWYgKGF0dGFja2VyLnN0YXR1c2VzLnNwZWVkID09IDApIHtcclxuICAgICAgICBkYW1hZ2VNdWx0ID0gMjtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMHgxZGQ6IC8vIFx1MzBCN1x1MzBFM1x1MzBDOVx1MzBGQ1x1MzBDMFx1MzBBNFx1MzBENlxyXG4gICAgICBkYW1hZ2VNdWx0ID0gTWVjaGFuaWNzLlNIQURPV19GT1JDRV9EQU1BR0VfTVVMVElQTElFUjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDB4MWYxOiAvLyBcdTMwNjhcdTMwNjNcdTMwNjZcdTMwNEFcdTMwNERcclxuICAgICAgbGV0IG5Nb3Zlc091dE9mUFAgPSBhdHRhY2tlci5uX21vdmVzX291dF9vZl9wcDtcclxuICAgICAgaWYgKG5Nb3Zlc091dE9mUFAgPiAwICYmIG1vdmUucHAgPT0gMCkge1xyXG4gICAgICAgIG5Nb3Zlc091dE9mUFAtLTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobk1vdmVzT3V0T2ZQUCA8IDEpIHtcclxuICAgICAgICBkdW5nZW9uLmRhbWFnZUNhbGMubGFzdFJlc29ydEZhaWxlZCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH1cclxuICAgICAgZGFtYWdlTXVsdCA9IE1lY2hhbmljcy5MQVNUX1JFU09SVF9EQU1BR0VfTVVMVF9UQUJMRVtuTW92ZXNPdXRPZlBQIC0gMV07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAweDIxMzogLy8gXHUzMDgxXHUzMDU2XHUzMDdFXHUzMDU3XHUzMEQzXHUzMEYzXHUzMEJGXHJcbiAgICAgIGlmIChkZWZlbmRlci5zdGF0dXNlcy5zbGVlcCB8fCBkZWZlbmRlci5zdGF0dXNlcy5uaWdodG1hcmUgfHwgZGVmZW5kZXIuc3RhdHVzZXMubmFwcGluZykge1xyXG4gICAgICAgIGRhbWFnZU11bHQgPSAyO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgLy8gXHU1OTA5XHU1MzE2XHU2MjgwXHUzMEZCXHUzMDVEXHUzMDZFXHU0RUQ2XHU5NzVFXHU1QkZFXHU1RkRDXHU2MjgwXHUzMDZGXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU4QTA4XHU3Qjk3XHUzMDkyXHU4ODRDXHUzMDhGXHUzMDVBXHU1NDdEXHU0RTJEXHU3Mzg3XHUzMDZFXHU4QTA4XHU3Qjk3XHUzMDZFXHUzMDdGXHUzMDkyXHU4ODRDXHUzMDQ2XHJcbiAgICAgIC8vIFx1NTQ3RFx1NEUyRFx1NzM4N1x1MzA2Rlx1NTQ3RFx1NEUyRFx1NTAyNDFcdTMwNkVcdTMwN0ZcdTMwOTJcdTRGN0ZcdTc1MjhcdTMwNTlcdTMwOEJcclxuICAgICAgaWYgKGNoZWNrTm9EYW1hZ2VNb3ZlKG1vdmUuaWQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHNpbXVsYXRlRGFtYWdlQ2FsY1N0YXR1c01vdmVzKGRhbWFnZURhdGEsIGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZSk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIC8vIFx1OTAxQVx1NUUzOFx1MzA2RVx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1OEEwOFx1N0I5N1x1MzA5Mlx1ODg0Q1x1MzA0NlxyXG4gIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmRhbWFnZU11bHQgPSBkYW1hZ2VNdWx0O1xyXG4gIHJldHVybiBzaW11bGF0ZURhbWFnZUNhbGNXaXRoTXVsdChkYW1hZ2VEYXRhLCBkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUsIGRhbWFnZU11bHQpO1xyXG59XHJcblxyXG4vKipcclxuICogMFx1RkY1RTFcdTMwNkVcdTdCQzRcdTU2RjJcdTMwNjdcdTUwMjRcdTMwOTJcdTYzMDdcdTVCOUFcdTMwNTdcdTMwMDFcdTkxNERcdTUyMTdcdTMwNEJcdTMwODlcdTUyNzJcdTU0MDhcdTMwNjdcdTMwQzdcdTMwRkNcdTMwQkZcdTMwOTJcdTUzRDZcdTVGOTdcdTMwNTlcdTMwOEJcclxuICogQHBhcmFtIHsqfSBhcnJheSBcdTkxNERcdTUyMTdcclxuICogQHBhcmFtIHsqfSByYXRpbyAwXHVGRjVFMVxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0VmFsdWVCeVJhdGlvKGFycmF5LCByYXRpbykge1xyXG4gIC8vIHJhdGlvXHUzMDkyMFx1RkY1RTFcdTMwNkJcdTUyMzZcdTk2NTBcclxuICByYXRpbyA9IE1hdGgubWluKE1hdGgubWF4KHJhdGlvLCAwKSwgMSk7XHJcbiAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKHJhdGlvICogKGFycmF5Lmxlbmd0aCAtIDEpKTtcclxuICByZXR1cm4gYXJyYXlbaW5kZXhdO1xyXG59XHJcblxyXG4vKipcclxuICogXHU2Mjk1XHU2NEYyXHU3MjY5XHUzMDZFXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU4QTA4XHU3Qjk3XHJcbiAqIEBwYXJhbSB7RGFtYWdlRGF0YX0gZGFtYWdlRGF0YVxyXG4gKiBAcGFyYW0ge0R1bmdlb25TdGF0ZX0gZHVuZ2VvblxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGF0dGFja2VyXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gZGVmZW5kZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IGF0dGFja1Bvd2VyXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2ltdWxhdGVEYW1hZ2VDYWxjUHJvamVjdGlsZShkYW1hZ2VEYXRhLCBkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIGF0dGFja1Bvd2VyKSB7XHJcbiAgY29uc3QgYXR0YWNrVHlwZSA9IGF0dGFja2VyLmdldE1vdmVUeXBlKDB4MTk1LCBkdW5nZW9uKTtcclxuICByZXR1cm4gc2ltdWxhdGVEYW1hZ2VDYWxjU2hhcmVkKGRhbWFnZURhdGEsIGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgYXR0YWNrVHlwZSwgYXR0YWNrUG93ZXIsIDEsIDB4MTk1KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NjI4MFx1MzA2RVx1NTIwNlx1OTg1RVx1MzA5Mlx1NTNENlx1NUY5NyAoMD1cdTcyNjlcdTc0MDYsIDE9XHU3Mjc5XHU2QjhBLCAyPVx1NTkwOVx1NTMxNilcclxuICogQHBhcmFtIHsqfSBtb3ZlSWRcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIGdldE1vdmVDYXRlZ29yeShtb3ZlSWQpIHtcclxuICBsZXQgcmVzID0gbnVsbDtcclxuICBpZiAoTW92ZURhdGEpIHJlcyA9IE1vdmVEYXRhW21vdmVJZF0uQ2F0ZWdvcnk7XHJcbiAgZWxzZSBjb25zb2xlLmVycm9yKCdNb3ZlRGF0YSBOb3QgRm91bmQnKTtcclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG4vKipcclxuICogXHU3MjY5XHU3NDA2XHU2MjgwXHU0RUU1XHU1OTE2XHUzMDY3XHUzMDQyXHUzMDhCXHUzMDRCXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHJcbiAqIEBwYXJhbSB7Kn0gbW92ZUlkXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5mdW5jdGlvbiBNb3ZlTm90UGh5c2lhbChtb3ZlSWQpIHtcclxuICByZXR1cm4gZ2V0TW92ZUNhdGVnb3J5KG1vdmVJZCkgIT0gZW9zLkNBVEVHT1JZX1BIWVNJQ0FMO1xyXG59XHJcblxyXG4vKipcclxuICogXHU1MDBEXHU3Mzg3XHUzMDZFXHU4QTczXHU3RDMwXHJcbiAqL1xyXG5jbGFzcyBNb2RpZmllckRldGFpbHMge1xyXG4gIGl0ZW1BdGsgPSAwO1xyXG4gIGl0ZW1TcGF0ayA9IDA7XHJcbiAgaXRlbURlZiA9IDA7XHJcbiAgaXRlbVNwZGVmID0gMDtcclxuICBhYmlsaXR5T2ZmZW5zZSA9IDA7XHJcbiAgYWJpbGl0eURlZmVuc2UgPSAwO1xyXG4gIGlxU2tpbGxPZmZlbnNlID0gMDtcclxuICBpcVNraWxsRGVmZW5zZSA9IDA7XHJcbiAgc2NvcGVMZW5zT3JTaGFycHNob290ZXIgPSBmYWxzZTtcclxuICBwYXRzeUJhbmQgPSBmYWxzZTtcclxuICBoYWxmUGh5c2ljYWxEYW1hZ2UgPSBmYWxzZTtcclxuICBoYWxmU3BlY2lhbERhbWFnZSA9IGZhbHNlO1xyXG4gIGZvY3VzRW5lcmd5ID0gZmFsc2U7XHJcbiAgdHlwZUFkdmFudGFnZU1hc3RlciA9IGZhbHNlO1xyXG4gIGNsb3VkeURyb3AgPSBmYWxzZTtcclxuICByYWluTXVsdGlwbGllciA9IGZhbHNlO1xyXG4gIHN1bm55TXVsdGlwbGllciA9IGZhbHNlO1xyXG4gIHRoaWNrRmF0SGVhdHByb29mID0gZmFsc2U7XHJcbiAgZmxhc2hGaXJlID0gZmFsc2U7XHJcbiAgbGV2aXRhdGUgPSBmYWxzZTtcclxuICBvdmVyZ3JvdyA9IGZhbHNlO1xyXG4gIHN3YXJtID0gZmFsc2U7XHJcbiAgYmxhemVEcnlTa2luID0gZmFsc2U7XHJcbiAgc2NyYXBweSA9IGZhbHNlO1xyXG4gIHN1cGVyTHVjayA9IGZhbHNlO1xyXG4gIHNuaXBlciA9IGZhbHNlO1xyXG4gIHN0YWIgPSBmYWxzZTtcclxuICBtdWRTcG9ydEZvZyA9IGZhbHNlO1xyXG4gIHdhdGVyU3BvcnQgPSBmYWxzZTtcclxuICBjaGFyZ2UgPSBmYWxzZTtcclxuICBnaG9zdEltbXVuaXR5ID0gZmFsc2U7XHJcbiAgc2t1bGxCYXNoID0gZmFsc2U7XHJcbn1cclxuLyoqXHJcbiAqIFx1OEEwOFx1N0I5N1x1MzA2RVx1OEE3M1x1N0QzMFxyXG4gKi9cclxuY2xhc3MgQ2FsY0RldGFpbHMge1xyXG4gIG9mZmVuc2l2ZVN0YXRTdGFnZSA9IDA7XHJcbiAgZGVmZW5zaXZlU3RhdFN0YWdlID0gMDtcclxuICBvZmZlbnNpdmVTdGF0ID0gMDtcclxuICBkZWZlbnNpdmVTdGF0ID0gMDtcclxuICBvZmZlbnNlQ2FsYyA9IDA7XHJcbiAgZGVmZW5zZUNhbGMgPSAwO1xyXG4gIGRhbWFnZUNhbGNBdCA9IDA7XHJcbiAgZGFtYWdlQ2FsY0RlZiA9IDA7XHJcbiAgZGFtYWdlQ2FsY0ZsdiA9IDA7XHJcbiAgZGFtYWdlQ2FsY0Jhc2UgPSAwO1xyXG4gIHN0YXRpY0RhbWFnZU11bHQgPSAwO1xyXG4gIGRhbWFnZUNhbGMgPSAwO1xyXG4gIGF2Z1JhbmRvbURhbWFnZU11bHRQY3QgPSAwO1xyXG4gIG1pblJhbmRvbURhbWFnZU11bHRQY3QgPSAwO1xyXG4gIG1heFJhbmRvbURhbWFnZU11bHRQY3QgPSAwO1xyXG4gIG1vZGlmaWVycyA9IG5ldyBNb2RpZmllckRldGFpbHMoKTtcclxufVxyXG4vKipcclxuICogXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU4QTA4XHU3Qjk3XHU3RDUwXHU2NzlDXHU4QTczXHU3RDMwXHJcbiAqL1xyXG5jbGFzcyBSZXN1bHREZXRhaWxzIHtcclxuICBkYW1hZ2VNZXNzYWdlID0gJyc7XHJcbiAgdHlwZU1hdGNodXAgPSAnJztcclxuICBpbmRpdlR5cGVNYXRjaHVwMSA9ICcnO1xyXG4gIGluZGl2VHlwZU1hdGNodXAyID0gJyc7XHJcbiAgbW92ZVR5cGUgPSAnJztcclxuICBtb3ZlQ2F0ZWdvcnkgPSAnJztcclxuICBjcml0aWNhbEhpdCA9IGZhbHNlO1xyXG4gIGZ1bGxUeXBlSW1tdW5pdHkgPSBmYWxzZTtcclxuICBub0RhbWFnZSA9IGZhbHNlO1xyXG4gIGNhbGMgPSBuZXcgQ2FsY0RldGFpbHMoKTtcclxufVxyXG4vKipcclxuICogXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU4QTA4XHU3Qjk3XHU3RDUwXHU2NzlDXHJcbiAqL1xyXG5jbGFzcyBDYWxjRGFtYWdlUmVzdWx0IHtcclxuICAvKiogXHU1RTczXHU1NzQ3XHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4ICovXHJcbiAgYXZnRGFtYWdlID0gMDtcclxuICAvKiogXHU2NzAwXHU0RjRFXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4ICovXHJcbiAgbWluRGFtYWdlID0gMDtcclxuICAvKiogXHU2NzAwXHU1OTI3XHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4ICovXHJcbiAgbWF4RGFtYWdlID0gMDtcclxuICAvKiogXHU1NkRFXHU1RkE5XHUzMEQ1XHUzMEU5XHUzMEIwICovXHJcbiAgaGVhbGVkID0gZmFsc2U7XHJcbiAgLyoqIFx1NTQ3RFx1NEUyRFx1NzM4NyAqL1xyXG4gIGhpdENoYW5jZSA9IDA7XHJcbiAgLyoqIFx1NTQ3RFx1NEUyRFx1MzA2Rlx1MzA1N1x1MzA1Rlx1MzA0Q1x1MzBERlx1MzBCOVx1MzA0Q1x1NzY3QVx1NzUxRiAqL1xyXG4gIGd1YXJhbnRlZWRNaXNzID0gZmFsc2U7XHJcbiAgLyoqIFx1NjAyNVx1NjI0MFx1NzM4NyAqL1xyXG4gIGNyaXRDaGFuY2UgPSAwO1xyXG4gIC8qKiBcdThBNzNcdTdEMzAgKi9cclxuICBkZXRhaWxzID0gbmV3IFJlc3VsdERldGFpbHMoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1OEEwOFx1N0I5N1xyXG4gKiBAcGFyYW0ge0R1bmdlb25TdGF0ZX0gZHVuZ2VvblxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGF0dGFja2VyXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gZGVmZW5kZXJcclxuICogQHBhcmFtIHtNb3ZlfSBtb3ZlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhdHRhY2tQb3dlciBcdTYyODBcdTMwNkVcdTVBMDFcdTUyOUIgKFx1NjI5NVx1NjRGMlx1NzI2OVx1MzA2RVx1NUEwMVx1NTI5QilcclxuICogQHJldHVybnMgXHU4QTA4XHU3Qjk3XHU3RDUwXHU2NzlDXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gUnVuQ2FsY0RhbWFnZShkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUsIGF0dGFja1Bvd2VyKSB7XHJcbiAgaWYgKCFNb3ZlRGF0YSkge1xyXG4gICAgY29uc29sZS5lcnJvcignTW92ZURhdGEgbm90IGZvdW5kJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmICghVHlwZURhdGEpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1R5cGVEYXRhIG5vdCBmb3VuZCcpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBjb25zdCBkdW5nZW9uTWluID0gZGVlcENsb25lKGR1bmdlb24pO1xyXG4gIGNvbnN0IGR1bmdlb25NYXggPSBkZWVwQ2xvbmUoZHVuZ2Vvbik7XHJcbiAgY29uc3QgYXR0YWNrZXJNaW4gPSBkZWVwQ2xvbmUoYXR0YWNrZXIpO1xyXG4gIGNvbnN0IGRlZmVuZGVyTWluID0gZGVlcENsb25lKGRlZmVuZGVyKTtcclxuICBjb25zdCBhdHRhY2tlck1heCA9IGRlZXBDbG9uZShhdHRhY2tlcik7XHJcbiAgY29uc3QgZGVmZW5kZXJNYXggPSBkZWVwQ2xvbmUoZGVmZW5kZXIpO1xyXG4gIGNvbnN0IG1vdmVNaW4gPSBkZWVwQ2xvbmUobW92ZSk7XHJcbiAgY29uc3QgbW92ZU1heCA9IGRlZXBDbG9uZShtb3ZlKTtcclxuXHJcbiAgZHVuZ2Vvbi5ybmcudmFyaWFuY2VEaWFsID0gMC41O1xyXG4gIGR1bmdlb25NaW4ucm5nLnZhcmlhbmNlRGlhbCA9IDA7XHJcbiAgZHVuZ2Vvbk1heC5ybmcudmFyaWFuY2VEaWFsID0gMTtcclxuXHJcbiAgY29uc3QgZGV0YWlscyA9IG5ldyBEYW1hZ2VEYXRhKCk7XHJcbiAgY29uc3QgZGV0YWlsc01pblZhciA9IG5ldyBEYW1hZ2VEYXRhKCk7XHJcbiAgY29uc3QgZGV0YWlsc01heFZhciA9IG5ldyBEYW1hZ2VEYXRhKCk7XHJcbiAgbGV0IGRhbWFnZSA9IDA7XHJcbiAgbGV0IGRhbWFnZU1pblZhciA9IDA7XHJcbiAgbGV0IGRhbWFnZU1heFZhciA9IDA7XHJcblxyXG4gIC8vIFx1MzA2QVx1MzA1Mlx1MzA1Rlx1MzA4Mlx1MzA2RSAoXHU2Mjk1XHU2NEYyXHU3MjY5KVxyXG4gIGlmIChtb3ZlLmlkID09IDB4MTk1KSB7XHJcbiAgICBkYW1hZ2UgPSBzaW11bGF0ZURhbWFnZUNhbGNQcm9qZWN0aWxlKGRldGFpbHMsIGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgYXR0YWNrUG93ZXIpO1xyXG4gICAgZGFtYWdlTWluVmFyID0gc2ltdWxhdGVEYW1hZ2VDYWxjUHJvamVjdGlsZShkZXRhaWxzLCBkdW5nZW9uTWluLCBhdHRhY2tlck1pbiwgZGVmZW5kZXJNaW4sIGF0dGFja1Bvd2VyKTtcclxuICAgIGRhbWFnZU1heFZhciA9IHNpbXVsYXRlRGFtYWdlQ2FsY1Byb2plY3RpbGUoZGV0YWlscywgZHVuZ2Vvbk1heCwgYXR0YWNrZXJNYXgsIGRlZmVuZGVyTWF4LCBhdHRhY2tQb3dlcik7XHJcbiAgfVxyXG4gIC8vIFx1OTAxQVx1NUUzOFx1MzA2RVx1NjI4MFxyXG4gIGVsc2Uge1xyXG4gICAgZGFtYWdlID0gc2ltdWxhdGVEYW1hZ2VDYWxjKGRldGFpbHMsIGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZSk7XHJcbiAgICBkYW1hZ2VNaW5WYXIgPSBzaW11bGF0ZURhbWFnZUNhbGMoZGV0YWlscywgZHVuZ2Vvbk1pbiwgYXR0YWNrZXJNaW4sIGRlZmVuZGVyTWluLCBtb3ZlTWluKTtcclxuICAgIGRhbWFnZU1heFZhciA9IHNpbXVsYXRlRGFtYWdlQ2FsYyhkZXRhaWxzLCBkdW5nZW9uTWF4LCBhdHRhY2tlck1heCwgZGVmZW5kZXJNYXgsIG1vdmVNYXgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzdWx0ID0gbmV3IENhbGNEYW1hZ2VSZXN1bHQoKTtcclxuICBpZiAoZGV0YWlscy5oZWFsZWQpIHtcclxuICAgIHJlc3VsdC5hdmdEYW1hZ2UgPSBkZXRhaWxzLmRhbWFnZTtcclxuICAgIHJlc3VsdC5taW5EYW1hZ2UgPSBkZXRhaWxzTWluVmFyLmRhbWFnZTtcclxuICAgIHJlc3VsdC5tYXhEYW1hZ2UgPSBkZXRhaWxzTWF4VmFyLmRhbWFnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzdWx0LmF2Z0RhbWFnZSA9IGRhbWFnZTtcclxuICAgIHJlc3VsdC5taW5EYW1hZ2UgPSBkYW1hZ2VNaW5WYXI7XHJcbiAgICByZXN1bHQubWF4RGFtYWdlID0gZGFtYWdlTWF4VmFyO1xyXG4gIH1cclxuICByZXN1bHQuaGVhbGVkID0gZGV0YWlscy5oZWFsZWQ7XHJcblxyXG4gIGlmIChcclxuICAgIGR1bmdlb24uZGFtYWdlQ2FsYy50d29UdXJuTW92ZUZvcmNlZE1pc3MgfHxcclxuICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5zb3VuZHByb29mQWN0aXZhdGVkIHx8XHJcbiAgICBkdW5nZW9uLmRhbWFnZUNhbGMuZmlyc3RIaXRDaGVja0ZhaWxlZCB8fFxyXG4gICAgZHVuZ2Vvbi5kYW1hZ2VDYWxjLmRyZWFtRWF0ZXJGYWlsZWQgfHxcclxuICAgIGR1bmdlb24uZGFtYWdlQ2FsYy5sYXN0UmVzb3J0RmFpbGVkXHJcbiAgKSB7XHJcbiAgICByZXN1bHQuZ3VhcmFudGVlZE1pc3MgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbiAgcmVzdWx0LmhpdENoYW5jZSA9IGR1bmdlb24ucm5nLmdldENvbWJpbmVkSGl0UGVyY2VudGFnZSgpO1xyXG4gIHJlc3VsdC5jcml0Q2hhbmNlID0gZHVuZ2Vvbi5ybmcuZ2V0Q29tcHV0ZWRDcml0Q2hhbmNlKCk7XHJcblxyXG4gIGNvbnN0IGNhbGMgPSBkdW5nZW9uLmRhbWFnZUNhbGM7XHJcbiAgY29uc3QgcmVzRGV0YWlscyA9IHJlc3VsdC5kZXRhaWxzO1xyXG4gIHJlc0RldGFpbHMuZGFtYWdlTWVzc2FnZSA9IGlkcy5EQU1BR0VfTUVTU0FHRVtkZXRhaWxzLmRhbWFnZU1lc3NhZ2VdO1xyXG4gIHJlc0RldGFpbHMudHlwZU1hdGNodXAgPSBpZHMuVFlQRV9NQVRDSFVQW2RldGFpbHMudHlwZU1hdGNodXBdO1xyXG4gIHJlc0RldGFpbHMuaW5kaXZUeXBlTWF0Y2h1cDEgPSBpZHMuVFlQRV9NQVRDSFVQW2NhbGMubW92ZUluZGl2VHlwZU1hdGNodXBzWzBdXTtcclxuICByZXNEZXRhaWxzLmluZGl2VHlwZU1hdGNodXAyID0gaWRzLlRZUEVfTUFUQ0hVUFtjYWxjLm1vdmVJbmRpdlR5cGVNYXRjaHVwc1sxXV07XHJcbiAgcmVzRGV0YWlscy5tb3ZlVHlwZSA9IFR5cGVEYXRhW2RldGFpbHMudHlwZV07XHJcbiAgcmVzRGV0YWlscy5tb3ZlQ2F0ZWdvcnkgPSBpZHMuTU9WRV9DQVRFR09SWVtkZXRhaWxzLmNhdGVnb3J5XTtcclxuICByZXNEZXRhaWxzLmNyaXRpY2FsSGl0ID0gZGV0YWlscy5jcml0aWNhbEhpdDtcclxuICByZXNEZXRhaWxzLmZ1bGxUeXBlSW1tdW5pdHkgPSBkZXRhaWxzLmZ1bGxUeXBlSW1tdW5pdHk7XHJcbiAgcmVzRGV0YWlscy5ub0RhbWFnZSA9IGRldGFpbHMubm9EYW1hZ2U7XHJcblxyXG4gIGNvbnN0IGNhbGNEZXRhaWxzID0gcmVzRGV0YWlscy5jYWxjO1xyXG4gIGNhbGNEZXRhaWxzLm9mZmVuc2l2ZVN0YXRTdGFnZSA9IGNhbGMub2ZmZW5zaXZlU3RhdFN0YWdlO1xyXG4gIGNhbGNEZXRhaWxzLmRlZmVuc2l2ZVN0YXRTdGFnZSA9IGNhbGMuZGVmZW5zaXZlU3RhdFN0YWdlO1xyXG4gIGNhbGNEZXRhaWxzLm9mZmVuc2l2ZVN0YXQgPSBjYWxjLm9mZmVuc2l2ZVN0YXQ7XHJcbiAgY2FsY0RldGFpbHMuZGVmZW5zaXZlU3RhdCA9IGNhbGMuZGVmZW5zaXZlU3RhdDtcclxuICBjYWxjRGV0YWlscy5vZmZlbnNlQ2FsYyA9IGNhbGMub2ZmZW5zZUNhbGM7XHJcbiAgY2FsY0RldGFpbHMuZGVmZW5zZUNhbGMgPSBjYWxjLmRlZmVuc2VDYWxjO1xyXG4gIGNhbGNEZXRhaWxzLmRhbWFnZUNhbGNBdCA9IGNhbGMuZGFtYWdlQ2FsY0F0O1xyXG4gIGNhbGNEZXRhaWxzLmRhbWFnZUNhbGNEZWYgPSBjYWxjLmRhbWFnZUNhbGNEZWY7XHJcbiAgY2FsY0RldGFpbHMuZGFtYWdlQ2FsY0ZsdiA9IGNhbGMuZGFtYWdlQ2FsY0ZsdjtcclxuICBjYWxjRGV0YWlscy5kYW1hZ2VDYWxjQmFzZSA9IGNhbGMuZGFtYWdlQ2FsY0Jhc2U7XHJcbiAgY2FsY0RldGFpbHMuc3RhdGljRGFtYWdlTXVsdCA9IGNhbGMuc3RhdGljRGFtYWdlTXVsdDtcclxuICBjYWxjRGV0YWlscy5kYW1hZ2VDYWxjID0gY2FsYy5kYW1hZ2VDYWxjO1xyXG4gIGNhbGNEZXRhaWxzLmF2Z1JhbmRvbURhbWFnZU11bHRQY3QgPSBjYWxjLmRhbWFnZUNhbGNSYW5kb21NdWx0UGN0O1xyXG4gIGNhbGNEZXRhaWxzLm1pblJhbmRvbURhbWFnZU11bHRQY3QgPSBkdW5nZW9uTWluLmRhbWFnZUNhbGMuZGFtYWdlQ2FsY1JhbmRvbU11bHRQY3Q7XHJcbiAgY2FsY0RldGFpbHMubWF4UmFuZG9tRGFtYWdlTXVsdFBjdCA9IGR1bmdlb25NYXguZGFtYWdlQ2FsYy5kYW1hZ2VDYWxjUmFuZG9tTXVsdFBjdDtcclxuXHJcbiAgY29uc3QgbW9kRGV0YWlscyA9IGNhbGNEZXRhaWxzLm1vZGlmaWVycztcclxuICBtb2REZXRhaWxzLml0ZW1BdGsgPSBjYWxjLml0ZW1BdGtNb2RpZmllcjtcclxuICBtb2REZXRhaWxzLml0ZW1TcGF0ayA9IGNhbGMuaXRlbVNwQXRrTW9kaWZpZXI7XHJcbiAgbW9kRGV0YWlscy5pdGVtRGVmID0gY2FsYy5pdGVtRGVmTW9kaWZpZXI7XHJcbiAgbW9kRGV0YWlscy5pdGVtU3BkZWYgPSBjYWxjLml0ZW1TcERlZk1vZGlmaWVyO1xyXG4gIG1vZERldGFpbHMuYWJpbGl0eU9mZmVuc2UgPSBjYWxjLmFiaWxpdHlPZmZlbnNlTW9kaWZpZXI7XHJcbiAgbW9kRGV0YWlscy5hYmlsaXR5RGVmZW5zZSA9IGNhbGMuYWJpbGl0eURlZmVuc2VNb2RpZmllcjtcclxuICBtb2REZXRhaWxzLmlxU2tpbGxPZmZlbnNlID0gY2FsYy5pcVNraWxsT2ZmZW5zZU1vZGlmaWVyO1xyXG4gIG1vZERldGFpbHMuaXFTa2lsbERlZmVuc2UgPSBjYWxjLmlxU2tpbGxEZWZlbnNlTW9kaWZpZXI7XHJcbiAgbW9kRGV0YWlscy5pcVNraWxsRGVmZW5zZSA9IGNhbGMuaXFTa2lsbERlZmVuc2VNb2RpZmllcjtcclxuICBtb2REZXRhaWxzLnNjb3BlTGVuc09yU2hhcnBzaG9vdGVyID0gY2FsYy5zY29wZUxlbnNPclNoYXJwc2hvb3RlckFjdGl2YXRlZDtcclxuICBtb2REZXRhaWxzLnBhdHN5QmFuZCA9IGNhbGMucGF0c3lCYW5kQWN0aXZhdGVkO1xyXG4gIG1vZERldGFpbHMuaGFsZlBoeXNpY2FsRGFtYWdlID0gY2FsYy5oYWxmUGh5c2ljYWxEYW1hZ2VBY3RpdmF0ZWQ7XHJcbiAgbW9kRGV0YWlscy5oYWxmU3BlY2lhbERhbWFnZSA9IGNhbGMuaGFsZlNwZWNpYWxEYW1hZ2VBY3RpdmF0ZWQ7XHJcbiAgbW9kRGV0YWlscy5mb2N1c0VuZXJneSA9IGNhbGMuZm9jdXNFbmVyZ3lBY3RpdmF0ZWQ7XHJcbiAgbW9kRGV0YWlscy50eXBlQWR2YW50YWdlTWFzdGVyID0gY2FsYy50eXBlQWR2YW50YWdlTWFzdGVyQWN0aXZhdGVkO1xyXG4gIG1vZERldGFpbHMuY2xvdWR5RHJvcCA9IGNhbGMuY2xvdWR5RHJvcEFjdGl2YXRlZDtcclxuICBtb2REZXRhaWxzLnJhaW5NdWx0aXBsaWVyID0gY2FsYy5yYWluTXVsdGlwbGllckFjdGl2YXRlZDtcclxuICBtb2REZXRhaWxzLnN1bm55TXVsdGlwbGllciA9IGNhbGMuc3VubnlNdWx0aXBsaWVyQWN0aXZhdGVkO1xyXG4gIG1vZERldGFpbHMudGhpY2tGYXRIZWF0cHJvb2YgPSBjYWxjLmZpcmVNb3ZlQWJpbGl0eURyb3BBY3RpdmF0ZWQ7XHJcbiAgbW9kRGV0YWlscy5mbGFzaEZpcmUgPSBjYWxjLmZsYXNoRmlyZUFjdGl2YXRlZDtcclxuICBtb2REZXRhaWxzLmxldml0YXRlID0gY2FsYy5sZXZpdGF0ZUFjdGl2YXRlZDtcclxuICBtb2REZXRhaWxzLm92ZXJncm93ID0gY2FsYy5vdmVyZ3Jvd0Jvb3N0QWN0aXZhdGVkO1xyXG4gIG1vZERldGFpbHMuc3dhcm0gPSBjYWxjLnN3YXJtQm9vc3RBY3RpdmF0ZWQ7XHJcbiAgbW9kRGV0YWlscy5ibGF6ZURyeVNraW4gPSBjYWxjLmZpcmVNb3ZlQWJpbGl0eUJvb3N0QWN0aXZhdGVkO1xyXG4gIG1vZERldGFpbHMuc2NyYXBweSA9IGNhbGMuc2NyYXBweUFjdGl2YXRlZDtcclxuICBtb2REZXRhaWxzLnN1cGVyTHVjayA9IGNhbGMuc3VwZXJMdWNrQWN0aXZhdGVkO1xyXG4gIG1vZERldGFpbHMuc25pcGVyID0gY2FsYy5zbmlwZXJBY3RpdmF0ZWQ7XHJcbiAgbW9kRGV0YWlscy5zdGFiID0gY2FsYy5zdGFiQm9vc3RBY3RpdmF0ZWQ7XHJcbiAgbW9kRGV0YWlscy5tdWRTcG9ydEZvZyA9IGNhbGMuZWxlY3RyaWNNb3ZlRGFtcGVuZWQ7XHJcbiAgbW9kRGV0YWlscy53YXRlclNwb3J0ID0gY2FsYy53YXRlclNwb3J0RHJvcEFjdGl2YXRlZDtcclxuICBtb2REZXRhaWxzLmNoYXJnZSA9IGNhbGMuY2hhcmdlQm9vc3RBY3RpdmF0ZWQ7XHJcbiAgbW9kRGV0YWlscy5naG9zdEltbXVuaXR5ID0gY2FsYy5naG9zdEltbXVuaXR5QWN0aXZhdGVkO1xyXG4gIG1vZERldGFpbHMuc2t1bGxCYXNoID0gY2FsYy5za3VsbEJhc2hEZWZlbnNlQm9vc3RBY3RpdmF0ZWQ7XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTMwQUFcdTMwRDZcdTMwQjhcdTMwQTdcdTMwQUZcdTMwQzhcdTMwNkVcdTMwQzdcdTMwQTNcdTMwRkNcdTMwRDdcdTMwQjNcdTMwRDRcdTMwRkNcdTMwOTJcdTRGNUNcdTYyMTBcclxuICogQHBhcmFtIHsqfSBvYmpcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIGRlZXBDbG9uZShvYmopIHtcclxuICBjb25zdCBjb3B5ID0gbmV3IG9iai5jb25zdHJ1Y3RvcigpO1xyXG5cclxuICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICBjb3B5W2tleV0gPSB2YWx1ZS5tYXAoKHYpID0+ICh0eXBlb2YgdiA9PT0gJ29iamVjdCcgJiYgdiAhPT0gbnVsbCA/IGRlZXBDbG9uZSh2KSA6IHYpKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICBpZiAodHlwZW9mIHZhbHVlLmNsb25lID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgY29weVtrZXldID0gdmFsdWUuY2xvbmUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb3B5W2tleV0gPSBkZWVwQ2xvbmUodmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb3B5W2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjb3B5O1xyXG59XHJcblxyXG4vKipcclxuICogXHU1MkQ1XHU3Njg0XHU1NkZBXHU1QjlBXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHUzMDkyXHU4QTA4XHU3Qjk3IChcdTMwQjVcdTMwQTRcdTMwQjNcdTMwQTZcdTMwQTdcdTMwRkNcdTMwRDZcdTMwMDFcdTMwRDdcdTMwRUNcdTMwQkNcdTMwRjNcdTMwQzhcdTMwMDFcdTMwREVcdTMwQjBcdTMwQ0JcdTMwQzFcdTMwRTVcdTMwRkNcdTMwQzlcdTMwMDFcdTMwNTdcdTMwOTNcdTMwNEZcdTMwNDZcdTMwNEVcdTMwOEEpXHJcbiAqIEpQOiAweDIzMzQzMDRcclxuICogQHBhcmFtIHtEYW1hZ2VEYXRhfSBkYW1hZ2VEYXRhXHJcbiAqIEBwYXJhbSB7RHVuZ2VvblN0YXRlfSBkdW5nZW9uXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gYXR0YWNrZXJcclxuICogQHBhcmFtIHtNb25zdGVyfSBkZWZlbmRlclxyXG4gKiBAcGFyYW0ge01vdmV9IG1vdmVcclxuICogQHBhcmFtIHtOdW1iZXJ9IGRhbWFnZSBcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcclxuICovXHJcbmZ1bmN0aW9uIHNpbXVsYXRlRGFtYWdlQ2FsY0ZpeGVkRHluYW1pYyhkYW1hZ2VEYXRhLCBkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUsIGRhbWFnZSkge1xyXG4gIGNvbnN0IGF0dGFja1R5cGUgPSBhdHRhY2tlci5nZXRNb3ZlVHlwZShtb3ZlLmlkLCBkdW5nZW9uKTtcclxuICBjb25zdCBtb3ZlQ2F0ZWdvcnkgPSBnZXRNb3ZlQ2F0ZWdvcnkobW92ZS5pZCk7XHJcbiAgY29uc3QgZml4ZWREYW1hZ2UgPSBjYWxjRGFtYWdlRml4ZWRBcHBseUVmZmVjdHMoXHJcbiAgICBkYW1hZ2VEYXRhLFxyXG4gICAgZHVuZ2VvbixcclxuICAgIGF0dGFja2VyLFxyXG4gICAgZGVmZW5kZXIsXHJcbiAgICBhdHRhY2tUeXBlLFxyXG4gICAgbW92ZUNhdGVnb3J5LFxyXG4gICAgZGFtYWdlLFxyXG4gICk7XHJcblxyXG4gIGRhbWFnZURhdGEudHlwZSA9IGF0dGFja1R5cGU7XHJcbiAgZGFtYWdlRGF0YS5jYXRlZ29yeSA9IG1vdmVDYXRlZ29yeTtcclxuXHJcbiAgLy8gW29yaWdpbmFsXSBcdTMwRDdcdTMwRUNcdTMwQkNcdTMwRjNcdTMwQzhcdTMwNEJcdTMwNjQwXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHUzMDY3XHU1NDdDXHUzMDczXHU1MUZBXHUzMDU1XHUzMDhDXHUzMDVGXHUzMDZBXHUzMDg5MFx1MzA2OFx1MzA1OVx1MzA4QlxyXG4gIGlmIChtb3ZlLmlkID09IDB4MTE1ICYmIGRhbWFnZSA9PSAwKSB7XHJcbiAgICBkYW1hZ2VEYXRhLmRhbWFnZSA9IDA7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRhbWFnZURhdGEuZGFtYWdlID0gZml4ZWREYW1hZ2U7XHJcbiAgfVxyXG4gIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzRml4ZWREYW1hZ2UgPSB0cnVlO1xyXG5cclxuICByZXR1cm4gcnVuTW9ja0RhbWFnZVNlcXVlbmNlKGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZS5pZCwgZGFtYWdlRGF0YSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTU2RkFcdTVCOUFcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdTMwOTJcdTMwQzhcdTMwRUFcdTMwREZcdTMwRjNcdTMwQjBcdTMwNTdcdTMwMDFcdTg4RENcdTZCNjNcdTMwOTJcdTkwNjlcdTc1MjhcdTMwNTdcdTMwNjZcdThBMDhcdTdCOTdcclxuICogSlA6IDB4MjMwZTVjOFxyXG4gKiBAcGFyYW0ge0R1bmdlb25TdGF0ZX0gZHVuZ2VvblxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGF0dGFja2VyXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gZGVmZW5kZXJcclxuICogQHBhcmFtIHsqfSBhdHRhY2tUeXBlXHJcbiAqIEBwYXJhbSB7Kn0gbW92ZUNhdGVnb3J5XHJcbiAqIEBwYXJhbSB7Kn0gZGFtYWdlXHJcbiAqIEBwYXJhbSB7Kn0gZGFtYWdlT3V0XHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5mdW5jdGlvbiBjYWxjRGFtYWdlRml4ZWRBcHBseUVmZmVjdHMoZGFtYWdlRGF0YSwgZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBhdHRhY2tUeXBlLCBtb3ZlQ2F0ZWdvcnksIGRhbWFnZSkge1xyXG4gIC8vIDFcdUZGNUU5OTlcdTMwNjdcdTMwQzhcdTMwRUFcdTMwREZcdTMwRjNcdTMwQjBcclxuICBpZiAoZGFtYWdlIDwgMSkgZGFtYWdlID0gMTtcclxuICBpZiAoOTk5IDwgZGFtYWdlKSBkYW1hZ2UgPSA5OTk7XHJcblxyXG4gIC8vIFx1ODhEQ1x1NkI2M1x1MzA5Mlx1NTNENlx1NUY5N1xyXG4gIGNvbnN0IGVmZmVjdCA9IENhbGNUeXBlQmFzZWREYW1hZ2VFZmZlY3RzKGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgZGFtYWdlLCBhdHRhY2tUeXBlLCBkYW1hZ2VEYXRhLCBmYWxzZSk7XHJcblxyXG4gIC8vIFx1OEEwOFx1N0I5N1xyXG4gIGNvbnN0IGZpeGVkRGFtYWdlID0gTWF0aC5jZWlsKGRhbWFnZSAqIGVmZmVjdC5kYW1hZ2VNdWx0T3V0KTtcclxuICByZXR1cm4gZml4ZWREYW1hZ2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTk3NTlcdTc2ODRcdTU2RkFcdTVCOUFcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdTMwOTJcdThBMDhcdTdCOTdcclxuICogQHBhcmFtIHtEdW5nZW9uU3RhdGV9IGR1bmdlb25cclxuICogQHBhcmFtIHtNb25zdGVyfSBhdHRhY2tlclxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGRlZmVuZGVyXHJcbiAqIEBwYXJhbSB7TW92ZX0gbW92ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gZGFtYWdlXHJcbiAqL1xyXG5mdW5jdGlvbiBzaW11bGF0ZURhbWFnZUNhbGNGaXhlZFN0YXRpYyhkYW1hZ2VEYXRhLCBkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUsIGRhbWFnZSkge1xyXG4gIGNvbnN0IGF0dGFja1R5cGUgPSBhdHRhY2tlci5nZXRNb3ZlVHlwZShtb3ZlLmlkLCBkdW5nZW9uKTtcclxuICBjb25zdCBtb3ZlQ2F0ZWdvcnkgPSBnZXRNb3ZlQ2F0ZWdvcnkobW92ZS5pZCk7XHJcbiAgbGV0IGZpeGVkRGFtYWdlID0gMDtcclxuICBpZiAoIWV4ZWN1dGVNb3ZlRWZmZWN0UHJlY2hlY2tzKGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZS5pZCkpIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuICBpZiAoZGFtYWdlID4gMCkge1xyXG4gICAgZml4ZWREYW1hZ2UgPSBjYWxjRGFtYWdlRml4ZWQoZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCBkYW1hZ2UsIGRhbWFnZURhdGEsIGF0dGFja1R5cGUsIG1vdmVDYXRlZ29yeSwgbW92ZS5pZCk7XHJcbiAgfVxyXG5cclxuICBkYW1hZ2VEYXRhLnR5cGUgPSBhdHRhY2tUeXBlO1xyXG4gIGRhbWFnZURhdGEuY2F0ZWdvcnkgPSBtb3ZlQ2F0ZWdvcnk7XHJcbiAgZGFtYWdlRGF0YS5kYW1hZ2UgPSBmaXhlZERhbWFnZTtcclxuICBkdW5nZW9uLmRhbWFnZURldGFpbExvZy5pc0ZpeGVkRGFtYWdlID0gdHJ1ZTtcclxuXHJcbiAgcmV0dXJuIHJ1bk1vY2tEYW1hZ2VTZXF1ZW5jZShkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIG1vdmUuaWQsIGRhbWFnZURhdGEpO1xyXG59XHJcblxyXG4vKipcclxuICogXHU1NkZBXHU1QjlBXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHUzMDkyXHU4QTA4XHU3Qjk3XHJcbiAqIEBwYXJhbSB7RHVuZ2VvblN0YXRlfSBkdW5nZW9uXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gYXR0YWNrZXJcclxuICogQHBhcmFtIHtNb25zdGVyfSBkZWZlbmRlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gZml4ZWREYW1hZ2VcclxuICogQHBhcmFtIHtEYW1hZ2VEYXRhfSBkYW1hZ2VPdXRcclxuICogQHBhcmFtIHtOdW1iZXJ9IGF0dGFja1R5cGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IG1vdmVDYXRlZ29yeVxyXG4gKi9cclxuZnVuY3Rpb24gY2FsY0RhbWFnZUZpeGVkKGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgZml4ZWREYW1hZ2UsIGRhbWFnZU91dCwgYXR0YWNrVHlwZSwgbW92ZUNhdGVnb3J5LCBtb3ZlSWQpIHtcclxuICAvLyBcdTMwQkZcdTMwQTRcdTMwRDdcdTc2RjhcdTYwMjdcdTMwNkVcdTUzRDZcdTVGOTdcclxuICBjb25zdCB0eXBlTWF0Y2h1cHMgPSBbXHJcbiAgICBnZXRUeXBlTWF0Y2hVcChkdW5nZW9uLCBhdHRhY2tlciwgZGVmZW5kZXIsIDAsIGF0dGFja1R5cGUpLFxyXG4gICAgZ2V0VHlwZU1hdGNoVXAoZHVuZ2VvbiwgYXR0YWNrZXIsIGRlZmVuZGVyLCAxLCBhdHRhY2tUeXBlKSxcclxuICBdO1xyXG5cclxuICBkdW5nZW9uLmRhbWFnZUNhbGMubW92ZUluZGl2VHlwZU1hdGNodXBzWzBdID0gdHlwZU1hdGNodXBzWzBdO1xyXG4gIGR1bmdlb24uZGFtYWdlQ2FsYy5tb3ZlSW5kaXZUeXBlTWF0Y2h1cHNbMV0gPSB0eXBlTWF0Y2h1cHNbMV07XHJcbiAgZGFtYWdlT3V0LnR5cGVNYXRjaHVwID0gTWVjaGFuaWNzLlRZUEVfTUFUQ0hVUF9DT01CSU5BVE9SX1RBQkxFW3R5cGVNYXRjaHVwc1swXV1bdHlwZU1hdGNodXBzWzFdXTtcclxuXHJcbiAgLy8gXHU3NkY4XHU2MDI3XHUzMDRDXHU1MkI5XHU2NzlDXHU2MjlDXHU3RkE0XHU0RUU1XHU1OTE2XHUzMDAxXHU5NjMyXHU1RkExXHU1MDc0XHUzMDRDXHUzMDc1XHUzMDU3XHUzMDRFXHUzMDZBXHUzMDdFXHUzMDgyXHUzMDhBXHUzMDAxXHU2NTNCXHU2NDgzXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDRDXHUzMDZBXHUzMDU3XHU0RUU1XHU1OTE2IC0+IHgwXHJcbiAgbGV0IHN1cGVyRWZmZWN0aXZlID0gZGFtYWdlT3V0LnR5cGVNYXRjaHVwID09IGVvcy5NQVRDSFVQX1NVUEVSX0VGRkVDVElWRTtcclxuICBpZiAoIXN1cGVyRWZmZWN0aXZlKSB7XHJcbiAgICBpZiAoZGVmZW5kZXIuYWJpbGl0eUFjdGl2ZURldGFpbHMoMHgzNSwgYXR0YWNrZXIsIHRydWUpICYmIGF0dGFja1R5cGUgIT0gZW9zLlRZUEVfTk9ORSkge1xyXG4gICAgICBmaXhlZERhbWFnZSA9IDA7XHJcbiAgICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzV29uZGVyR3VhcmRBY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBcdTMwNTRcdTMwNDZcdTMwOEZcdTMwOTNcdTg4RENcdTZCNjMgLT4geDEuNVxyXG4gIGlmIChtb3ZlSWQgPT0gMHgxOTUgJiYgYXR0YWNrZXIuaXFTa2lsbEVuYWJsZWQoMHgyZiwgZHVuZ2VvbikpIHtcclxuICAgIGZpeGVkRGFtYWdlICo9IE1hdGguY2VpbChmaXhlZERhbWFnZSAqIE1lY2hhbmljcy5QT1dFUl9QSVRDSEVSX0RBTUFHRV9NVUxUSVBMSUVSKTtcclxuICAgIGR1bmdlb24uZGFtYWdlRGV0YWlsTG9nLmlzUG93ZXJQaXRjaGVyQWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGxldCByZXNGaXhlZERhbWFnZSA9IE1hdGguY2VpbChmaXhlZERhbWFnZSk7XHJcbiAgaWYgKGZpeGVkRGFtYWdlID09IDApIHJlc0ZpeGVkRGFtYWdlID0gMTtcclxuXHJcbiAgcmV0dXJuIHJlc0ZpeGVkRGFtYWdlO1xyXG59XHJcblxyXG4vKipcclxuICogXHU0RTAwXHU2NDgzXHU1RkM1XHU2QkJBXHU2MjgwXHUzMDRDXHU1NDdEXHU0RTJEXHUzMDU5XHUzMDhCXHUzMDRCXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHJcbiAqIEpQOiAweDIzMEU5RTBcclxuICogQHBhcmFtIHtNb25zdGVyfSBhdHRhY2tlclxyXG4gKiBAcGFyYW0ge01vbnN0ZXJ9IGRlZmVuZGVyXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhdHRhY2tUeXBlXHJcbiAqL1xyXG5mdW5jdGlvbiBjaGVja01vdmVIaXRPaGtvKGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgYXR0YWNrVHlwZSkge1xyXG4gIC8vIFx1MzA0RFx1MzA4Mlx1MzA2M1x1MzA1Rlx1MzA3RVx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlxyXG4gIGlmIChcclxuICAgICFhdHRhY2tlci5zY3JhcHB5U2hvdWxkQWN0aXZhdGUoZGVmZW5kZXIsIGF0dGFja1R5cGUsIGR1bmdlb24pICYmXHJcbiAgICBNZWNoYW5pY3MudHlwZUluZWZmZWN0aXZlQWdhaW5zdEdob3N0KGF0dGFja1R5cGUpICYmXHJcbiAgICAoZGVmZW5kZXIuZ2hvc3RJbW11bml0eUFjdGl2ZShhdHRhY2tlciwgMCkgfHwgZGVmZW5kZXIuZ2hvc3RJbW11bml0eUFjdGl2ZShhdHRhY2tlciwgMSkpXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBcdTMwQkZcdTMwQTRcdTMwRDdcdTc2RjhcdTYwMjdcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcclxuICAvLyBcdTUyQjlcdTY3OUNcdTMwNENcdTMwNkFcdTMwNDQgPT4gZmFsc2UsIFx1MzA1RFx1MzA4Q1x1NEVFNVx1NTkxNiA9PiB0cnVlXHJcbiAgbGV0IGkgPSAwO1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBpZiAoMSA8IGkpIHJldHVybiB0cnVlO1xyXG4gICAgY29uc3QgbWF0Y2hVcCA9IGdldFR5cGVNYXRjaFVwKGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgaSwgYXR0YWNrVHlwZSk7XHJcbiAgICBpZiAobWF0Y2hVcCA9PSAwKSBicmVhaztcclxuICAgIGkrKztcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHUzMDkyXHU0RTBFXHUzMDQ4XHUzMDZBXHUzMDQ0XHU2MjgwXHUzMDRCXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGIChcdTU5MDlcdTUzMTZcdTYyODAgb3IgXHUzMDQyXHUzMDY2XHUzMDdGXHUzMDZBXHUzMDUyLCBcdTMwNEFcdTMwNDRcdTMwNDZcdTMwNjEsIFx1MzA0Qlx1MzA0NFx1MzA4QVx1MzA0RCwgXHUzMEFCXHUzMEE2XHUzMEYzXHUzMEJGXHUzMEZDLCBcdTMwNENcdTMwN0VcdTMwOTMsIFx1MzA1OFx1MzA3MFx1MzA0RiwgXHUzMDYwXHUzMDQ0XHUzMDcwXHUzMDRGXHUzMDZGXHUzMDY0LCBcdTMwNkZcdTMwNUZcdTMwNERcdTMwNEFcdTMwNjhcdTMwNTksIFx1MzA3RVx1MzA0RFx1MzA2NFx1MzA0RiwgXHUzMERGXHUzMEU5XHUzMEZDXHUzMEIzXHUzMEZDXHUzMEM4LCBcdTMwRUFcdTMwRDlcdTMwRjNcdTMwQjgsIFx1MzA4Nlx1MzA0RFx1MzA2QVx1MzA2MFx1MzA4QywgXHUzMDU3XHUzMDYzXHUzMDdBXHUzMDRDXHUzMDQ4XHUzMDU3LCBcdTMwRTFcdTMwQkZcdTMwRUJcdTMwRDBcdTMwRkNcdTMwQjlcdTMwQzgpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtb3ZlSWRcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIGNoZWNrTm9EYW1hZ2VNb3ZlKG1vdmVJZCkge1xyXG4gIGNvbnN0IG1vdmVDYXRlZ29yeSA9IGdldE1vdmVDYXRlZ29yeShtb3ZlSWQpO1xyXG4gIGNvbnN0IG5vRGFtYWdlTW92ZSA9IFsweDcsIDB4MjYsIDB4MzIsIDB4MzMsIDB4M2QsIDB4N2IsIDB4OWIsIDB4ZjksIDB4MTMxLCAweDEzYywgMHgxNTQsIDB4MTY3LCAweDFkOCwgMHgyMTRdO1xyXG5cclxuICAvLyBcdTMwNDRcdTMwNjFcdTMwNTJcdTMwNERcdTMwNkVcdTMwNUZcdTMwN0VcdTMwNkZcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdTMwOTJcdTRFMEVcdTMwNDhcdTMwOEJcdTYyODBcdTMwNjhcdTMwNTlcdTMwOEJcclxuICBpZiAobW92ZUlkID09IDB4MTg4KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIHJldHVybiBtb3ZlQ2F0ZWdvcnkgPT0gZW9zLkNBVEVHT1JZX1NUQVRVUyB8fCBub0RhbWFnZU1vdmUuaW5jbHVkZXMobW92ZUlkKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1MzA5Mlx1NEUwRVx1MzA0OFx1MzA2QVx1MzA0NFx1NjI4MFx1MzA5Mlx1NUI5Rlx1ODg0QyAoXHU1NDdEXHU0RTJEXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHUzMDZFXHUzMDdGXHU4ODRDXHUzMDQ2XHUzMDAxXHU1NDdEXHU0RTJEXHU1MDI0MVx1MzA2RVx1MzA3Rlx1NEY3Rlx1NzUyOClcclxuICogQHBhcmFtIHtEYW1hZ2VEYXRhfSBkYW1hZ2VEYXRhXHJcbiAqIEBwYXJhbSB7RHVuZ2VvblN0YXRlfSBkdW5nZW9uXHJcbiAqIEBwYXJhbSB7TW9uc3Rlcn0gYXR0YWNrZXJcclxuICogQHBhcmFtIHtNb25zdGVyfSBkZWZlbmRlclxyXG4gKiBAcGFyYW0ge01vdmV9IG1vdmVcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIHNpbXVsYXRlRGFtYWdlQ2FsY1N0YXR1c01vdmVzKGRhbWFnZURhdGEsIGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZSkge1xyXG4gIGNvbnN0IG1vdmVDYXRlZ29yeSA9IGdldE1vdmVDYXRlZ29yeShtb3ZlLmlkKTtcclxuICBjb25zdCBtb3ZlVHlwZSA9IGF0dGFja2VyLmdldE1vdmVUeXBlKG1vdmUuaWQsIGR1bmdlb24pO1xyXG4gIGRhbWFnZURhdGEuY2F0ZWdvcnkgPSBtb3ZlQ2F0ZWdvcnk7XHJcbiAgZGFtYWdlRGF0YS50eXBlID0gbW92ZVR5cGU7XHJcbiAgTW92ZUhpdENoZWNrKGR1bmdlb24sIGF0dGFja2VyLCBkZWZlbmRlciwgbW92ZS5pZCwgZmFsc2UsIGZhbHNlKTtcclxuICByZXR1cm4gMDtcclxufVxyXG4iLCAiaW1wb3J0ICogYXMgZW9zIGZyb20gJy4uL2NvbnN0LmpzJztcclxuaW1wb3J0IHsgV0VBVEhFUl9TVFJJTkdTLCBWQUxJRF9NQVhfRFVOR0VPTl9JRCB9IGZyb20gJy4uLy4uL3BhcmFtLmpzJztcclxuaW1wb3J0IHsgZ2V0SnNvbkRhdGEgfSBmcm9tICcuLi8uLi9qc29uX3NjcmlwdC5qcyc7XHJcbi8vIFx1MzBDMFx1MzBFMVx1MzBGQ1x1MzBCOFx1OEEwOFx1N0I5N1x1OTVBMlx1OTAyM2ltcG9ydFxyXG5pbXBvcnQgeyBSdW5DYWxjRGFtYWdlLCBnZXRUeXBlTWF0Y2hVcCB9IGZyb20gJy4uL2NhbGMuanMnO1xyXG5pbXBvcnQgeyBUWVBFX01BVENIVVBfQ09NQklOQVRPUl9UQUJMRSB9IGZyb20gJy4uL21lY2hhbmljcy5qcyc7XHJcbmltcG9ydCB7IE1vbnN0ZXIsIER1bmdlb25TdGF0ZSwgRGFtYWdlRGF0YSwgTW92ZSB9IGZyb20gJy4uL3N0cnVjdHVyZS5qcyc7XHJcblxyXG4vKipcclxuICogXHU2QTVGXHU4MEZEXHU1QjlGXHU4OEM1XHU0RTg4XHU1QjlBXHUzMEUxXHUzMEUyXHJcbiAqIFx1MzBGQlx1MzA4MVx1MzA1Nlx1MzBEMVx1MzA2RVx1MzBCRlx1MzBBNFx1MzBEN1x1NTZGQVx1NUI5QSAoXHU2NUUyXHUzMDZCXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDRDXHUzMDhGXHUzMDRCXHUzMDhCXHU3NTI4KVxyXG4gKi9cclxuXHJcbi8qKiBcdTY1M0JcdTY0ODNcdTMwRURcdTMwQjBcdTMwQUZcdTMwRTlcdTMwQjkgKi9cclxuY2xhc3MgQXR0YWNrIHtcclxuICAvKiogXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4ICovXHJcbiAgZGFtYWdlID0gMDtcclxuICAvKiogXHUzMEJGXHUzMEE0XHUzMEQ3XHU3NkY4XHU2MDI3ICovXHJcbiAgbWF0Y2h1cCA9IG51bGw7XHJcbiAgLyoqIFx1MzBBQlx1MzBDNlx1MzBBRFx1MzBGMyAqL1xyXG4gIGdpbnNlbmcgPSAwO1xyXG4gIC8qKiBbXHU4ODY4XHU3OTNBXHU3NTI4XSBcdTY1NzVcdTYwQzVcdTU4MzEgKi9cclxuICBlbmVteSA9ICcnO1xyXG4gIC8qKiBcdTMwQzBcdTMwRTFcdTMwRkNcdTMwQjhcdTMwQzdcdTMwRkNcdTMwQkYgKi9cclxuICBkYW1hZ2VEYXRhcyA9IFtdO1xyXG4gIC8qKiBcdTMwQkZcdTMwQTRcdTMwRDdcdTUwMTlcdTg4REMgKi9cclxuICBjYW5kaWRhdGVUeXBlID0gW107XHJcblxyXG4gIC8qKiBcdTY1M0JcdTY0ODNcdTUwNzRcdTMwQzdcdTMwRkNcdTMwQkYgKFx1NEU4OFx1NTA5OSkgKi9cclxuICBhdHRhY2tlciA9IG5ldyBNb25zdGVyKCk7XHJcbiAgLyoqIFx1OTYzMlx1NUZBMVx1NTA3NFx1MzBDN1x1MzBGQ1x1MzBCRiAoXHU0RTg4XHU1MDk5KSAqL1xyXG4gIGRlZmVuZGVyID0gbmV3IE1vbnN0ZXIoKTtcclxuICAvKiogXHUzMEMwXHUzMEYzXHUzMEI4XHUzMEU3XHUzMEYzXHUzMEI5XHUzMEM2XHUzMEZDXHUzMEJGXHUzMEI5IChcdTRFODhcdTUwOTkpICovXHJcbiAgZHVuZ2VvblN0YXRlID0gbmV3IER1bmdlb25TdGF0ZSgpO1xyXG59XHJcblxyXG5jb25zdCBjaG9pY2VzSW5zdGFuY2VzID0gW107XHJcblxyXG4vKiogXHUzMEM3XHUzMEQ1XHUzMEE5XHUzMEVCXHUzMEM4XHUzMDZFXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzSUQgKi9cclxuY29uc3QgREVGQVVMVF9QT0tFTU9OX0lEID0gMTtcclxuLyoqIFx1MzBDN1x1MzBENVx1MzBBOVx1MzBFQlx1MzBDOFx1MzA2RVx1MzBDMFx1MzBGM1x1MzBCOFx1MzBFN1x1MzBGM0lEICovXHJcbmNvbnN0IERFRkFVTFRfRFVOR0VPTl9JRCA9IDEwNDtcclxuLyoqIFx1MzBBQlx1MzBBRlx1MzBFQ1x1MzBBQVx1MzBGM1x1MzA2RVx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM0lEICovXHJcbmNvbnN0IFBPS0VNT05fS0VDUkVPTl9JRCA9IDM4MztcclxuLyoqIFx1MzA2QVx1MzA2Qlx1MzA0Qlx1MzA2RVx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM0lEICovXHJcbmNvbnN0IFBPS0VNT05fRFVNTVlfSUQgPSA1NTM7XHJcbi8qKiBcdTMwODFcdTMwNTZcdTMwODFcdTMwOEJcdTMwRDFcdTMwRUZcdTMwRkMgXHU2MjgwSUQgKi9cclxuY29uc3QgTU9WRV9ISURERU5QT1dFUiA9IDB4MTQ0O1xyXG4vKiogXHUzMDgxXHUzMDU2XHUzMDgxXHUzMDhCXHUzMEQxXHUzMEVGXHUzMEZDIFx1NUEwMVx1NTI5Qlx1MzBDNlx1MzBGQ1x1MzBENlx1MzBFQiAqL1xyXG5jb25zdCBISURERU5QT1dFUl9UQUJMRSA9IFsyLCA0LCA2LCA3LCA4LCA5LCAxMCwgMTMsIDE1LCAxN107XHJcblxyXG4vKiogXHU2NTNCXHU2NDgzXHUzMEVEXHUzMEIwICovXHJcbmxldCBhdHRhY2tMb2cgPSBbXTtcclxuLyoqIFx1MzBFRFx1MzBCMFx1MzA2RVx1NzNGRVx1NTcyOFx1NEY0RFx1N0Y2RSAoMD1cdTY3MkFcdTYzMDdcdTVCOUEoXHU0RTAwXHU3NTZBXHU1RjhDKSwgMVx1NEVFNVx1NEUwQT1cdTY1M0JcdTY0ODNcdTMwRURcdTMwQjBJZHgpICovXHJcbmxldCBhdHRhY2tMb2dQb2ludGVyID0gLTE7XHJcblxyXG5sZXQgYXR0YWNrZXJQb2tlbW9uRWxlbWVudCA9IG51bGw7XHJcbmxldCBhdHRhY2tlclR5cGUxRWxlbWVudCA9IG51bGw7XHJcbmxldCBhdHRhY2tlclR5cGUyRWxlbWVudCA9IG51bGw7XHJcbmxldCBhdHRhY2tlckFiaWxpdHkxRWxlbWVudCA9IG51bGw7XHJcbmxldCBhdHRhY2tlckFiaWxpdHkyRWxlbWVudCA9IG51bGw7XHJcbmxldCBhdHRhY2tlckxldmVsRWxlbWVudCA9IG51bGw7XHJcbmxldCBhdHRhY2tlckFwcGx5U3RhdHVzRWxlbWVudCA9IG51bGw7XHJcbmxldCBhdHRhY2tlclN0YXR1c0NFbGVtZW50ID0gbnVsbDtcclxubGV0IGF0dGFja2VyU3RhdHVzQ1N0YWdlRWxlbWVudCA9IG51bGw7XHJcbmxldCBhdHRhY2tlclN0YXR1c0NTdGFnZUhhbGZFbGVtZW50ID0gbnVsbDtcclxubGV0IGF0dGFja2VySXRlbUVsZW1lbnQgPSBudWxsO1xyXG5sZXQgYXR0YWNrZXJGbGFzaEZpcmVFbGVtZW50ID0gbnVsbDtcclxubGV0IGF0dGFja2VyUGx1c01pbnVzRWxlbWVudCA9IG51bGw7XHJcbmxldCBhdHRhY2tlckFpckJyYWRlRWxlbWVudCA9IG51bGw7XHJcbmxldCBkZWZlbmRlckR1bmdlb25FbGVtZW50ID0gbnVsbDtcclxubGV0IGRlZmVuZGVyRmxvb3JFbGVtZW50ID0gbnVsbDtcclxubGV0IGRlZmVuZGVyRW5lbXlFbGVtZW50ID0gbnVsbDtcclxubGV0IGRlZmVuZGVyU3RhdHVzREVsZW1lbnQgPSBudWxsO1xyXG5sZXQgZGVmZW5kZXJTdGF0dXNEU3RhZ2VFbGVtZW50ID0gbnVsbDtcclxubGV0IGRlZmVuZGVySVFFbGVtZW50ID0gbnVsbDtcclxubGV0IGRlZmVuZGVyU2tpbGxXcmFwRWxlbWVudCA9IG51bGw7XHJcbmxldCBtb3ZlRGFtYWdlRWxlbWVudCA9IG51bGw7XHJcbmxldCBtb3ZlTWF0Y2h1cEVsZW1lbnQgPSBudWxsO1xyXG5sZXQgbW92ZUdpbnNlbmdFbGVtZW50ID0gbnVsbDtcclxubGV0IG1vdmVXZWF0aGVyRWxlbWVudCA9IG51bGw7XHJcbmxldCBtb3ZlRml4ZWRUeXBlRWxlbWVudCA9IG51bGw7XHJcbmxldCBtb3ZlQ3JpdGljYWxFbGVtZW50ID0gbnVsbDtcclxubGV0IG1vdmVCdG5BdHRhY2tFbGVtZW50ID0gbnVsbDtcclxubGV0IGN0cmxVbmRvRWxlbWVudCA9IG51bGw7XHJcbmxldCBjdHJsUmVkb0VsZW1lbnQgPSBudWxsO1xyXG5sZXQgY3RybFJlc2V0RWxlbWVudCA9IG51bGw7XHJcbmxldCB0YWJsZUF0dGFja0xvZ0VsZW1lbnQgPSBudWxsO1xyXG5sZXQgYnRuTW9kYWxSZXNldEVsZW1lbnQgPSBudWxsO1xyXG5sZXQgcmVzdWx0V3JhcEVsZW1lbnQgPSBudWxsO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCB0b29sdGlwVHJpZ2dlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1icy10b2dnbGU9XCJ0b29sdGlwXCJdJyk7XHJcbiAgY29uc3QgdG9vbHRpcExpc3QgPSBbLi4udG9vbHRpcFRyaWdnZXJMaXN0XS5tYXAoKHRvb2x0aXBUcmlnZ2VyRWwpID0+IG5ldyBib290c3RyYXAuVG9vbHRpcCh0b29sdGlwVHJpZ2dlckVsKSk7XHJcblxyXG4gIC8vIEpTT05cdThBQURcdThGQkNcclxuICBhd2FpdCBmZXRjaEpzb25EYXRhKCk7XHJcblxyXG4gIC8vIFx1ODk4MVx1N0QyMFx1MzBBRFx1MzBFM1x1MzBDM1x1MzBCN1x1MzBFNVxyXG4gIG1haW5FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhbWFnZS1oaWRkZW5wb3dlcicpO1xyXG4gIGF0dGFja2VyUG9rZW1vbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0YWNrZXItcG9rZW1vbicpO1xyXG4gIGF0dGFja2VyVHlwZTFFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFja2VyLXR5cGUtMScpO1xyXG4gIGF0dGFja2VyVHlwZTJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFja2VyLXR5cGUtMicpO1xyXG4gIGF0dGFja2VyQWJpbGl0eTFFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFja2VyLWFiaWxpdHktMScpO1xyXG4gIGF0dGFja2VyQWJpbGl0eTJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFja2VyLWFiaWxpdHktMicpO1xyXG4gIGF0dGFja2VyTGV2ZWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFja2VyLWx2Jyk7XHJcbiAgYXR0YWNrZXJBcHBseVN0YXR1c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0YWNrZXItYXBwbHktc3RhdHVzJyk7XHJcbiAgYXR0YWNrZXJTdGF0dXNDRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRhY2tlci1jJyk7XHJcbiAgYXR0YWNrZXJTdGF0dXNDU3RhZ2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFja2VyLWMtc3RhZ2UnKTtcclxuICBhdHRhY2tlclN0YXR1c0NTdGFnZUhhbGZFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFja2VyLWMtc3RhZ2UtaGFsZicpO1xyXG4gIGF0dGFja2VySXRlbUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0YWNrZXItaXRlbScpO1xyXG4gIGF0dGFja2VyRmxhc2hGaXJlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRhY2tlci1mbGFzaC1maXJlJyk7XHJcbiAgYXR0YWNrZXJQbHVzTWludXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFja2VyLXBsdXMtbWludXMnKTtcclxuICBhdHRhY2tlckFpckJyYWRlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRhY2tlci1haXItYnJhZGUnKTtcclxuICBkZWZlbmRlckR1bmdlb25FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlZmVuZGVyLWR1bmdlb24nKTtcclxuICBkZWZlbmRlckZsb29yRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWZlbmRlci1mbG9vcicpO1xyXG4gIGRlZmVuZGVyRW5lbXlFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlZmVuZGVyLWVuZW15Jyk7XHJcbiAgZGVmZW5kZXJTdGF0dXNERWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWZlbmRlci1kJyk7XHJcbiAgZGVmZW5kZXJTdGF0dXNEU3RhZ2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlZmVuZGVyLWQtc3RhZ2UnKTtcclxuICBkZWZlbmRlcklRRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWZlbmRlci1pcScpO1xyXG4gIGRlZmVuZGVyU2tpbGxXcmFwRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWZlbmRlci1za2lsbC13cmFwJyk7XHJcbiAgbW92ZURhbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW92ZS1kYW1hZ2UnKTtcclxuICBtb3ZlTWF0Y2h1cEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW92ZS1tYXRjaHVwJyk7XHJcbiAgbW92ZUdpbnNlbmdFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmUtZ2luc2VuZycpO1xyXG4gIG1vdmVXZWF0aGVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3ZlLXdlYXRoZXInKTtcclxuICBtb3ZlRml4ZWRUeXBlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3ZlLWZpeGVkLXR5cGUnKTtcclxuICBtb3ZlQ3JpdGljYWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmUtY3JpdGljYWwnKTtcclxuICBtb3ZlQnRuQXR0YWNrRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3ZlLWJ0bi1hdHRhY2snKTtcclxuICBjdHJsVW5kb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3RybC11bmRvJyk7XHJcbiAgY3RybFJlZG9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N0cmwtcmVkbycpO1xyXG4gIGN0cmxSZXNldEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3RybC1yZXNldCcpO1xyXG4gIHRhYmxlQXR0YWNrTG9nRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZS1hdHRhY2stbG9nJyk7XHJcbiAgYnRuTW9kYWxSZXNldEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLW1vZGFsLXJlc2V0Jyk7XHJcbiAgcmVzdWx0V3JhcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0LXdyYXAnKTtcclxuXHJcbiAgLy8gXHUzMEE0XHUzMEQ5XHUzMEYzXHUzMEM4XHJcbiAgY29uc3QgaW5wdXRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNkYW1hZ2UtaGlkZGVucG93ZXIgaW5wdXQnKTtcclxuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgaW5wdXRFbGVtZW50cykge1xyXG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xyXG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAvLyBpbnB1dFx1MzA2RVx1NEUwQVx1OTY1MFx1NEUwQlx1OTY1MFx1MzA5Mlx1OEQ4NVx1MzA0OFx1MzA4Qlx1NTAyNFx1MzA5Mlx1NTE2NVx1NTI5Qlx1MzA2N1x1MzA0RFx1MzA2QVx1MzA0NFx1MzA4OFx1MzA0Nlx1MzA2Qlx1MzA1OVx1MzA4QlxyXG4gICAgICAgICAgY29uc3QgbWluID0gTnVtYmVyKHRoaXMubWluKTtcclxuICAgICAgICAgIGNvbnN0IG1heCA9IE51bWJlcih0aGlzLm1heCk7XHJcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlcih0aGlzLnZhbHVlKTtcclxuICAgICAgICAgIGlmIChpc05hTih2YWx1ZSkpIHJldHVybjtcclxuICAgICAgICAgIGlmICh2YWx1ZSA8IG1pbikgdGhpcy52YWx1ZSA9IG1pbjtcclxuICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID4gbWF4KSB0aGlzLnZhbHVlID0gbWF4O1xyXG5cclxuICAgICAgICAgIC8vIFx1NjU3MFx1NTAyNFx1NEVFNVx1NTkxNlx1MzA2RVx1NTE2NVx1NTI5Qlx1MzA5Mlx1OTY2NFx1NTkxNlxyXG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWVcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcdUZGMTAtXHVGRjE5XS9nLCAocykgPT4gU3RyaW5nLmZyb21DaGFyQ29kZShzLmNoYXJDb2RlQXQoMCkgLSAweGZlZTApKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvW14wLTldL2csICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBhdHRhY2tlclBva2Vtb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB1cGRhdGVQb2tlbW9uVHlwZUFiaWxpdHkoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0pO1xyXG4gIGF0dGFja2VyQXBwbHlTdGF0dXNFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgYXBwbHlBdHRhY2tlclN0YXR1cygpO1xyXG4gIH0pO1xyXG4gIGRlZmVuZGVyRHVuZ2VvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgc2V0T3B0aW9uc0Zsb29yKCk7XHJcbiAgICBzZXRPcHRpb25zRW5lbXkoKTtcclxuICB9KTtcclxuICBkZWZlbmRlckZsb29yRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBzZXRPcHRpb25zRW5lbXkoKTtcclxuICB9KTtcclxuICBkZWZlbmRlckVuZW15RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjaGFuZ2VFbmVteSgpO1xyXG4gIH0pO1xyXG4gIG1vdmVXZWF0aGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBhcHBseURlZmVuZGVyU2tpbGwoKTtcclxuICB9KTtcclxuICBtb3ZlQnRuQXR0YWNrRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIGF0dGFja0hpZGRlblBvd2VyKCk7XHJcbiAgfSk7XHJcbiAgY3RybFVuZG9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdW5kb0F0dGFja0xvZygpO1xyXG4gIH0pO1xyXG4gIGN0cmxSZWRvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJlZG9BdHRhY2tMb2coKTtcclxuICB9KTtcclxuICBidG5Nb2RhbFJlc2V0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJlc2V0QXR0YWNrTG9nKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIE9wdGlvblx1MzBCQlx1MzBDM1x1MzBDOFxyXG4gIHNldE9wdGlvbnNQb2tlbW9uKCk7XHJcbiAgc2V0T3B0aW9uc0R1bmdlb24oKTtcclxuICBzZXRPcHRpb25zRmxvb3IoKTtcclxuICBzZXRPcHRpb25zRW5lbXkoKTtcclxuICBzZXRPcHRpb25zV2VhdGhlcigpO1xyXG5cclxuICAvLyBDaG9pY2VzXHU1MjFEXHU2NzFGXHU1MzE2XHJcbiAgSW5pdENob2ljZXMoKTtcclxuXHJcbiAgLy8gXHU1MDI0XHU2NkY0XHU2NUIwXHJcbiAgdXBkYXRlUG9rZW1vblR5cGVBYmlsaXR5KCk7XHJcbiAgYXBwbHlBdHRhY2tlclN0YXR1cygpO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBcdTMwQkZcdTMwQTRcdTMwRDdcdTMwRkJcdTcyNzlcdTYwMjdcdTMwOTJcdTkwNjlcdTc1MjhcclxuICogQHBhcmFtIHsqfSBwb2tlbW9uSWRcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZVBva2Vtb25UeXBlQWJpbGl0eShwb2tlbW9uSWQgPSAtMSkge1xyXG4gIGlmICghUG9rZW1vbkRhdGEpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1Bva2Vtb25EYXRhIG5vdCBmb3VuZCcpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAocG9rZW1vbklkIDwgMCkge1xyXG4gICAgcG9rZW1vbklkID0gYXR0YWNrZXJQb2tlbW9uRWxlbWVudC52YWx1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBva2Vtb24gPSBQb2tlbW9uRGF0YVtwb2tlbW9uSWRdO1xyXG4gIC8vIFx1MzBCRlx1MzBBNFx1MzBEN1xyXG4gIGF0dGFja2VyVHlwZTFFbGVtZW50LnZhbHVlID0gcG9rZW1vbi5UeXBlMTtcclxuICBhdHRhY2tlclR5cGUyRWxlbWVudC52YWx1ZSA9IHBva2Vtb24uVHlwZTI7XHJcbiAgLy8gXHU3Mjc5XHU2MDI3XHJcbiAgY2hvaWNlc0luc3RhbmNlc1thdHRhY2tlckFiaWxpdHkxRWxlbWVudC5pZF0uc2V0Q2hvaWNlQnlWYWx1ZShgJHtwb2tlbW9uLkFiaWxpdHkxfWApO1xyXG4gIGNob2ljZXNJbnN0YW5jZXNbYXR0YWNrZXJBYmlsaXR5MkVsZW1lbnQuaWRdLnNldENob2ljZUJ5VmFsdWUoYCR7cG9rZW1vbi5BYmlsaXR5Mn1gKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1MzA2RVx1MzBFQ1x1MzBEOVx1MzBFQlx1MzA2Qlx1NTQwOFx1MzA4Rlx1MzA1Qlx1MzA1Rlx1MzBCOVx1MzBDNlx1MzBGQ1x1MzBCRlx1MzBCOVx1MzA5Mlx1MzBCQlx1MzBDM1x1MzBDOFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZnVuY3Rpb24gYXBwbHlBdHRhY2tlclN0YXR1cygpIHtcclxuICBjb25zdCBwb2tlbW9uSWQgPSBhdHRhY2tlclBva2Vtb25FbGVtZW50LnZhbHVlO1xyXG4gIGNvbnN0IGxldmVsID0gTnVtYmVyKGF0dGFja2VyTGV2ZWxFbGVtZW50LnZhbHVlKTtcclxuICBpZiAoaXNOYU4obGV2ZWwpKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHN0YXR1cyA9IGdldExldmVsU3RhdHVzKHBva2Vtb25JZCwgbGV2ZWwpO1xyXG4gIGF0dGFja2VyU3RhdHVzQ0VsZW1lbnQudmFsdWUgPSBzdGF0dXMuYztcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NjU3NVx1NTkwOVx1NjZGNFx1NjY0Mlx1NTFFNlx1NzQwNiAoXHUzMEI5XHUzMEM2XHUzMEZDXHUzMEJGXHUzMEI5XHU2NkY0XHU2NUIwL1x1MzBFOVx1MzBGM1x1MzBBRlx1NTIxRFx1NjcxRlx1NTMxNilcclxuICovXHJcbmZ1bmN0aW9uIGNoYW5nZUVuZW15KCkge1xyXG4gIGNvbnN0IHBva2Vtb25JZCA9IE51bWJlcihkZWZlbmRlckVuZW15RWxlbWVudC52YWx1ZSk7XHJcbiAgY29uc3QgbGV2ZWwgPSBOdW1iZXIoZGVmZW5kZXJFbmVteUVsZW1lbnQub3B0aW9uc1tkZWZlbmRlckVuZW15RWxlbWVudC5zZWxlY3RlZEluZGV4XS5kYXRhc2V0LmxldmVsKTtcclxuICBjb25zdCBzdGF0dXMgPSBnZXRMZXZlbFN0YXR1cyhwb2tlbW9uSWQsIGxldmVsKTtcclxuICBkZWZlbmRlclN0YXR1c0RFbGVtZW50LnZhbHVlID0gc3RhdHVzLmQ7XHJcbiAgZGVmZW5kZXJTdGF0dXNEU3RhZ2VFbGVtZW50LnZhbHVlID0gMTA7XHJcblxyXG4gIC8vIFx1NjU3NVx1MzA2RVx1MzA0Qlx1MzA1N1x1MzA1M1x1MzA1NVx1ODg2OFx1NzkzQVx1MzA5Mlx1NjZGNFx1NjVCMFxyXG4gIGFwcGx5RGVmZW5kZXJTa2lsbCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseURlZmVuZGVyU2tpbGwoKSB7XHJcbiAgbGV0IHJlcyA9ICcnO1xyXG4gIGNvbnN0IGRlZmVuZGVyID0gZ2V0RGVmZW5kZXIoKTtcclxuICBjb25zdCBkdW5nZW9uU3RhdGUgPSBnZXREdW5nZW9uU3RhdGUoKTtcclxuICAvLyBcdTMwNEJcdTMwNTdcdTMwNTNcdTMwNTVcdTMwOTJcdTkwNjlcdTc1MjhcclxuICBkZWZlbmRlcklRRWxlbWVudC52YWx1ZSA9IGRlZmVuZGVyLmlxO1xyXG4gIC8vIFx1MzA1M1x1MzA0Nlx1MzA1Mlx1MzA0RFx1MzA2Nlx1MzA0RFxyXG4gIGlmIChkZWZlbmRlci5pcVNraWxsRW5hYmxlZCgweDIyLCBkdW5nZW9uU3RhdGUpKSB7XHJcbiAgICByZXMgKz0gYDxzcGFuIGNsYXNzPVwiYmFkZ2UgdGV4dC1iZy1kYW5nZXJcIj4ke0lRU2tpbGxEYXRhWzB4MjJdLk5hbWV9IFx1NzI3OVx1OTYzMi0xPC9zcGFuPmA7XHJcbiAgfVxyXG4gIC8vIFx1MzA3Rlx1MzA0Q1x1MzA3RVx1MzA0OFx1MzA4QlxyXG4gIGlmIChkZWZlbmRlci5pcVNraWxsRW5hYmxlZCgweDIzLCBkdW5nZW9uU3RhdGUpKSB7XHJcbiAgICByZXMgKz0gYDxzcGFuIGNsYXNzPVwiYmFkZ2UgdGV4dC1iZy1wcmltYXJ5XCI+JHtJUVNraWxsRGF0YVsweDIzXS5OYW1lfSBcdTcyNzlcdTk2MzIrMTwvc3Bhbj5gO1xyXG4gIH1cclxuICAvLyBcdTMwNTlcdTMwNkFcdTMwNDJcdTMwODlcdTMwNTdcclxuICBpZiAoZGVmZW5kZXIucGVyY2VpdmVkV2VhdGhlcihkdW5nZW9uU3RhdGUpID09IGVvcy5XRUFUSEVSX1NBTkRTVE9STSAmJiBkZWZlbmRlci50eXBlcy5pbmNsdWRlcyhlb3MuVFlQRV9ST0NLKSkge1xyXG4gICAgcmVzICs9IGA8c3BhbiBjbGFzcz1cImJhZGdlIHRleHQtYmctcHJpbWFyeVwiPlx1MzA1OVx1MzA2QVx1MzA0Mlx1MzA4OVx1MzA1NyBcdTcyNzlcdTk2MzIrMjwvc3Bhbj5gO1xyXG4gIH1cclxuICBkZWZlbmRlclNraWxsV3JhcEVsZW1lbnQuaW5uZXJIVE1MID0gcmVzO1xyXG59XHJcblxyXG4vKipcclxuICogXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMDZFXHUzMEVDXHUzMEQ5XHUzMEVCXHUzMDZCXHU1NDA4XHUzMDhGXHUzMDVCXHUzMDVGXHUzMEI5XHUzMEM2XHUzMEZDXHUzMEJGXHUzMEI5XHUzMDkyXHU1M0Q2XHU1Rjk3XHJcbiAqIEBwYXJhbSB7Kn0gcG9rZW1vbklkIFx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM0lEXHJcbiAqIEBwYXJhbSB7Kn0gbGV2ZWwgXHUzMEVDXHUzMEQ5XHUzMEVCXHJcbiAqIEByZXR1cm5zIFx1MzBCOVx1MzBDNlx1MzBGQ1x1MzBCRlx1MzBCOVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0TGV2ZWxTdGF0dXMocG9rZW1vbklkLCBsZXZlbCkge1xyXG4gIGlmICghUG9rZW1vbkRhdGEpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1Bva2Vtb25EYXRhIG5vdCBmb3VuZCcpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcG9rZW1vbiA9IFBva2Vtb25EYXRhW3Bva2Vtb25JZF07XHJcblxyXG4gIC8vIFx1NjIxMFx1OTU3N1x1NzM4N1x1MzBDN1x1MzBGQ1x1MzBCRlx1NjU3MFx1MzAwMVx1MzBFQ1x1MzBEOVx1MzBFQlx1NjU3MFx1MzAwMTEwMFx1MzA2RVx1MzA0Nlx1MzA2MVx1NjcwMFx1MzA4Mlx1OEZEMVx1MzA0NFx1NTAyNFx1MzA2N1x1MzBFQlx1MzBGQ1x1MzBEN1xyXG4gIGxldCByZXMgPSB7IGE6IDAsIGI6IDAsIGM6IDAsIGQ6IDAgfTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgubWluKC4uLltwb2tlbW9uLlN0YXRzLmxlbmd0aCwgbGV2ZWwsIDEwMF0pOyBpKyspIHtcclxuICAgIGNvbnN0IHN0YXQgPSBwb2tlbW9uLlN0YXRzW2ldO1xyXG4gICAgcmVzLmEgKz0gTnVtYmVyKHN0YXQuQSk7XHJcbiAgICByZXMuYiArPSBOdW1iZXIoc3RhdC5CKTtcclxuICAgIHJlcy5jICs9IE51bWJlcihzdGF0LkMpO1xyXG4gICAgcmVzLmQgKz0gTnVtYmVyKHN0YXQuRCk7XHJcbiAgfVxyXG4gIC8vIFx1NEUwQVx1OTY1MFx1NTFFNlx1NzQwNlxyXG4gIGlmIChyZXMuYSA+IDI1NSkgcmVzLmEgPSAyNTU7XHJcbiAgaWYgKHJlcy5iID4gMjU1KSByZXMuYiA9IDI1NTtcclxuICBpZiAocmVzLmMgPiAyNTUpIHJlcy5jID0gMjU1O1xyXG4gIGlmIChyZXMuZCA+IDI1NSkgcmVzLmQgPSAyNTU7XHJcblxyXG4gIHJldHVybiByZXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTY1M0JcdTY0ODNcdTUwNzRcdTMwQzdcdTMwRkNcdTMwQkZcdTUzRDZcdTVGOTdcclxuICogQHJldHVybnMgXHU2NTNCXHU2NDgzXHU1MDc0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRBdHRhY2tlcigpIHtcclxuICBjb25zdCBhdHRhY2tlciA9IG5ldyBNb25zdGVyKCk7XHJcbiAgYXR0YWNrZXIuaWQgPSBOdW1iZXIoYXR0YWNrZXJQb2tlbW9uRWxlbWVudC52YWx1ZSk7XHJcbiAgYXR0YWNrZXIuaXNfbWVtYmVyID0gdHJ1ZTtcclxuICBhdHRhY2tlci5pc19sZWFkZXIgPSB0cnVlO1xyXG4gIGF0dGFja2VyLnR5cGVzID0gW051bWJlcihhdHRhY2tlclR5cGUxRWxlbWVudC52YWx1ZSksIE51bWJlcihhdHRhY2tlclR5cGUyRWxlbWVudC52YWx1ZSldO1xyXG4gIGF0dGFja2VyLmFiaWxpdGllcyA9IFtOdW1iZXIoYXR0YWNrZXJBYmlsaXR5MUVsZW1lbnQudmFsdWUpLCBOdW1iZXIoYXR0YWNrZXJBYmlsaXR5MkVsZW1lbnQudmFsdWUpXTtcclxuICBhdHRhY2tlci5sZXZlbCA9IE51bWJlcihhdHRhY2tlckxldmVsRWxlbWVudC52YWx1ZSk7XHJcbiAgYXR0YWNrZXIuc3BfYXRrID0gTnVtYmVyKGF0dGFja2VyU3RhdHVzQ0VsZW1lbnQudmFsdWUpO1xyXG4gIGF0dGFja2VyLnN0YWdlX3NwX2F0ayA9IE51bWJlcihhdHRhY2tlclN0YXR1c0NTdGFnZUVsZW1lbnQudmFsdWUpO1xyXG4gIGF0dGFja2VyLmhhbGZfc3BfYXRrID0gTnVtYmVyKGF0dGFja2VyU3RhdHVzQ1N0YWdlSGFsZkVsZW1lbnQudmFsdWUpO1xyXG4gIGF0dGFja2VyLmJlbGx5ID0gMTAwO1xyXG4gIGF0dGFja2VyLmhlbGRJdGVtID0gTnVtYmVyKGF0dGFja2VySXRlbUVsZW1lbnQudmFsdWUpO1xyXG4gIGF0dGFja2VyLmZsYXNoX2ZpcmVfYm9vc3QgPSBOdW1iZXIoYXR0YWNrZXJGbGFzaEZpcmVFbGVtZW50LnZhbHVlKTtcclxuICBhdHRhY2tlci5leGNsdXNpdmVfaXRlbV9lZmZlY3RfZmxhZ3NbMHg1Yl0gPSBhdHRhY2tlckFpckJyYWRlRWxlbWVudC5jaGVja2VkO1xyXG4gIHJldHVybiBhdHRhY2tlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1OTYzMlx1NUZBMVx1NTA3NFx1MzBDN1x1MzBGQ1x1MzBCRlx1NTNENlx1NUY5N1xyXG4gKiBAcmV0dXJucyBcdTk2MzJcdTVGQTFcdTUwNzRcclxuICovXHJcbmZ1bmN0aW9uIGdldERlZmVuZGVyKCkge1xyXG4gIGlmICghUG9rZW1vbkRhdGEpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1Bva2Vtb25EYXRhIG5vdCBmb3VuZCcpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBjb25zdCBkZWZlbmRlciA9IG5ldyBNb25zdGVyKCk7XHJcbiAgY29uc3QgZGVmZW5kZXJQb2tlbW9uSWQgPSBOdW1iZXIoZGVmZW5kZXJFbmVteUVsZW1lbnQudmFsdWUpO1xyXG4gIGNvbnN0IGRlZmVuZGVyUG9rZW1vbiA9IFBva2Vtb25EYXRhW2RlZmVuZGVyUG9rZW1vbklkXTtcclxuICBjb25zdCBkZWZlbmRlckxldmVsID0gTnVtYmVyKGRlZmVuZGVyRW5lbXlFbGVtZW50Lm9wdGlvbnNbZGVmZW5kZXJFbmVteUVsZW1lbnQuc2VsZWN0ZWRJbmRleF0uZGF0YXNldC5sZXZlbCk7XHJcbiAgLy9jb25zdCBkZWZlbmRlclN0YXR1cyA9IGdldExldmVsU3RhdHVzKGRlZmVuZGVyUG9rZW1vbklkLCBkZWZlbmRlckxldmVsKTtcclxuICBkZWZlbmRlci5pZCA9IGRlZmVuZGVyUG9rZW1vbklkO1xyXG4gIGRlZmVuZGVyLmlzX21lbWJlciA9IGZhbHNlO1xyXG4gIGRlZmVuZGVyLmxldmVsID0gZGVmZW5kZXJMZXZlbDtcclxuICBkZWZlbmRlci50eXBlcyA9IFtkZWZlbmRlclBva2Vtb24uVHlwZTEsIGRlZmVuZGVyUG9rZW1vbi5UeXBlMl07XHJcbiAgZGVmZW5kZXIuYWJpbGl0aWVzID0gW2RlZmVuZGVyUG9rZW1vbi5BYmlsaXR5MSwgZGVmZW5kZXJQb2tlbW9uLkFiaWxpdHkyXTtcclxuICBkZWZlbmRlci5zcF9kZWYgPSBOdW1iZXIoZGVmZW5kZXJTdGF0dXNERWxlbWVudC52YWx1ZSk7XHJcbiAgZGVmZW5kZXIuc3RhZ2Vfc3BfZGVmID0gTnVtYmVyKGRlZmVuZGVyU3RhdHVzRFN0YWdlRWxlbWVudC52YWx1ZSk7XHJcbiAgZGVmZW5kZXIuYmVsbHkgPSAxMDA7XHJcbiAgLy8gXHU5NjMyXHU1RkExXHU1MDc0XHUzMDRCXHUzMDU3XHUzMDUzXHUzMDU1XHUzMEJCXHUzMEMzXHUzMEM4XHJcbiAgY29uc3QgZW5lbXlJUSA9IE51bWJlcihkZWZlbmRlckZsb29yRWxlbWVudC5vcHRpb25zW2RlZmVuZGVyRmxvb3JFbGVtZW50LnNlbGVjdGVkSW5kZXhdLmRhdGFzZXQuaXF2YWx1ZSk7XHJcbiAgY29uc3QgaXFncm91cCA9IElRR3JvdXBEYXRhW2RlZmVuZGVyUG9rZW1vbi5JUUdyb3VwXTtcclxuICBkZWZlbmRlci5pcSA9IGVuZW15SVE7XHJcbiAgZm9yIChjb25zdCBza2lsbElkIG9mIGlxZ3JvdXApIHtcclxuICAgIGlmIChlbmVteUlRID49IElRU2tpbGxEYXRhW3NraWxsSWRdLklRVmFsdWUpIHtcclxuICAgICAgZGVmZW5kZXIuaXFfc2tpbGxbc2tpbGxJZF0gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZGVmZW5kZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTMwQzBcdTMwRjNcdTMwQjhcdTMwRTdcdTMwRjNcdTYwQzVcdTU4MzFcdTUzRDZcdTVGOTdcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIGdldER1bmdlb25TdGF0ZSgpIHtcclxuICBjb25zdCBkdW5nZW9uU3RhdGUgPSBuZXcgRHVuZ2VvblN0YXRlKCk7XHJcbiAgZHVuZ2VvblN0YXRlLndlYXRoZXIgPSBOdW1iZXIobW92ZVdlYXRoZXJFbGVtZW50LnZhbHVlKTtcclxuICBkdW5nZW9uU3RhdGUucm5nLmNyaXRpY2FsSGl0ID0gbW92ZUNyaXRpY2FsRWxlbWVudC5jaGVja2VkO1xyXG4gIGR1bmdlb25TdGF0ZS5wbHVzWzFdID0gYXR0YWNrZXJQbHVzTWludXNFbGVtZW50LmNoZWNrZWQ7XHJcbiAgZHVuZ2VvblN0YXRlLm1pbnVzWzFdID0gYXR0YWNrZXJQbHVzTWludXNFbGVtZW50LmNoZWNrZWQ7XHJcbiAgcmV0dXJuIGR1bmdlb25TdGF0ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NjUzQlx1NjQ4M1x1NTFFNlx1NzQwNlxyXG4gKi9cclxuZnVuY3Rpb24gYXR0YWNrSGlkZGVuUG93ZXIoKSB7XHJcbiAgLy8gXHU2NTNCXHU2NDgzXHU1MDc0XHJcbiAgY29uc3QgYXR0YWNrZXIgPSBnZXRBdHRhY2tlcigpO1xyXG5cclxuICAvLyBcdTk2MzJcdTVGQTFcdTUwNzRcclxuICBjb25zdCBkZWZlbmRlciA9IGdldERlZmVuZGVyKCk7XHJcblxyXG4gIC8vIFx1MzBDMFx1MzBGM1x1MzBCOFx1MzBFN1x1MzBGM1x1NjBDNVx1NTgzMVxyXG4gIGNvbnN0IGR1bmdlb25TdGF0ZSA9IGdldER1bmdlb25TdGF0ZSgpO1xyXG5cclxuICAvLyBcdTYyODBcdTYwQzVcdTU4MzFcclxuICBjb25zdCBtb3ZlID0gbmV3IE1vdmUoKTtcclxuICBtb3ZlLmlkID0gTU9WRV9ISURERU5QT1dFUjtcclxuICBtb3ZlLmdpbnNlbmcgPSBOdW1iZXIobW92ZUdpbnNlbmdFbGVtZW50LnZhbHVlKTtcclxuXHJcbiAgLy8gXHU2NTNCXHU2NDgzXHU2MEM1XHU1ODMxXHJcbiAgY29uc3QgZGFtYWdlID0gTnVtYmVyKG1vdmVEYW1hZ2VFbGVtZW50LnZhbHVlKTtcclxuICBjb25zdCBtYXRjaHVwID0gTnVtYmVyKG1vdmVNYXRjaHVwRWxlbWVudC52YWx1ZSk7XHJcblxyXG4gIC8vIFx1NTNDMlx1NzE2N1x1NTE0OCAoVW5kby9SZWRvXHUzMDZFXHU1QkZFXHU1RkRDKVxyXG4gIGNvbnN0IHBvaW50ZXIgPSBhdHRhY2tMb2dQb2ludGVyID49IDAgPyBhdHRhY2tMb2dQb2ludGVyIDogYXR0YWNrTG9nLmxlbmd0aDtcclxuXHJcbiAgLy8gXHU2OTFDXHU3RDIyXHU1QkZFXHU4QzYxXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDkyXHU2QzdBXHUzMDgxXHUzMDhCXHJcbiAgY29uc3QgYWxsb3dUeXBlID0gbmV3IE1hcCgpO1xyXG4gIGNvbnN0IGZpeGVkVHlwZSA9IHBhcnNlSW50KG1vdmVGaXhlZFR5cGVFbGVtZW50LnZhbHVlKTtcclxuICBpZiAoZml4ZWRUeXBlID4gMCkge1xyXG4gICAgLy8gXHU1NkZBXHU1QjlBXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDRDXHU4QTJEXHU1QjlBXHUzMDU1XHUzMDhDXHUzMDY2XHUzMDQ0XHUzMDhDXHUzMDcwXHUzMDVEXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHUzMDZFXHUzMDdGXHUzMDkyXHU1MDE5XHU4OERDXHUzMDY4XHUzMDU5XHUzMDhCXHJcbiAgICBhbGxvd1R5cGUuc2V0KGZpeGVkVHlwZSwgW10pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB0YXJnZXRUeXBlID0gW107XHJcbiAgICBpZiAocG9pbnRlciA+IDApIHtcclxuICAgICAgLy8gXHU2NUUyXHUzMDZCXHU2NTNCXHU2NDgzXHUzMEVEXHUzMEIwXHUzMDRDXHUzMDQyXHUzMDhDXHUzMDcwXHU3NkY0XHU1MjREXHUzMDZFXHUzMEJGXHUzMEE0XHUzMEQ3XHU1MDE5XHU4OERDXHUzMDRDXHU1QkZFXHU4QzYxXHJcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIGF0dGFja0xvZ1twb2ludGVyIC0gMV0uY2FuZGlkYXRlVHlwZS5rZXlzKCkpIHtcclxuICAgICAgICB0YXJnZXRUeXBlLnB1c2goa2V5KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gXHU2NTNCXHU2NDgzXHUzMEVEXHUzMEIwXHUzMDRDXHU3MTIxXHUzMDUxXHUzMDhDXHUzMDcwXHUzMDZBXHUzMDU3XHUzMDkyXHU5NjY0XHUzMDRGXHU1MTY4XHUzMEJGXHUzMEE0XHUzMEQ3XHU1QkZFXHU4QzYxXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgVHlwZURhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0YXJnZXRUeXBlLnB1c2goaSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgdHlwZSBvZiB0YXJnZXRUeXBlKSB7XHJcbiAgICAgIC8vIFx1MzBCRlx1MzBBNFx1MzBEN1x1NzZGOFx1NjAyN1x1MzA5Mlx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlxyXG4gICAgICBjb25zdCB0eXBlTWF0Y2h1cHMgPSBbXHJcbiAgICAgICAgZ2V0VHlwZU1hdGNoVXAoZHVuZ2VvblN0YXRlLCBhdHRhY2tlciwgZGVmZW5kZXIsIDAsIHR5cGUpLFxyXG4gICAgICAgIGdldFR5cGVNYXRjaFVwKGR1bmdlb25TdGF0ZSwgYXR0YWNrZXIsIGRlZmVuZGVyLCAxLCB0eXBlKSxcclxuICAgICAgXTtcclxuICAgICAgY29uc3QgdHlwZU1hdGNodXBSZXMgPSBUWVBFX01BVENIVVBfQ09NQklOQVRPUl9UQUJMRVt0eXBlTWF0Y2h1cHNbMF1dW3R5cGVNYXRjaHVwc1sxXV07XHJcbiAgICAgIGlmICh0eXBlTWF0Y2h1cFJlcyA9PSBtYXRjaHVwKSB7XHJcbiAgICAgICAgYWxsb3dUeXBlLnNldCh0eXBlLCBbXSk7IC8vIFx1NTAxOVx1ODhEQ1x1MzBCRlx1MzBBNFx1MzBEN1x1MzBCQlx1MzBDM1x1MzBDOFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBkYW1hZ2VEYXRhcyA9IFtdO1xyXG4gIGNvbnN0IGRhbWFnZURhdGFzQWxsID0gW107XHJcbiAgZm9yIChjb25zdCB0eXBlIG9mIGFsbG93VHlwZS5rZXlzKCkpIHtcclxuICAgIC8vIFx1NjkxQ1x1N0QyMlx1NUJGRVx1OEM2MVx1MzA2RVx1MzA4MVx1MzA1Nlx1MzA4MVx1MzA4Qlx1MzBEMVx1MzBFRlx1MzBGQ1x1MzA2RVx1NUEwMVx1NTI5Qlx1MzA5Mlx1NkM3QVx1MzA4MVx1MzA4QlxyXG4gICAgbGV0IGFsbG93UG93ZXIgPSBbXTtcclxuICAgIGlmIChwb2ludGVyID4gMCkge1xyXG4gICAgICAvLyBcdTc2RjRcdTUyNERcdTMwNkVcdTY1M0JcdTY0ODNcdTMwRURcdTMwQjBcdTMwNkJcdTMwNDJcdTMwOEJcdTVBMDFcdTUyOUJcdTUwMTlcdTg4RENcdTMwNkVcdTMwN0ZcdTMwOTJcdTVCRkVcdThDNjEgKFx1MzBCRlx1MzBBNFx1MzBEN1x1NTNDMlx1NzE2NylcclxuICAgICAgY29uc3QgYWxsb3dQb3dlclZhbHVlcyA9IGF0dGFja0xvZ1twb2ludGVyIC0gMV0uY2FuZGlkYXRlVHlwZS5nZXQodHlwZSk7XHJcbiAgICAgIGlmIChhbGxvd1Bvd2VyVmFsdWVzKSBhbGxvd1Bvd2VyID0gYWxsb3dQb3dlclZhbHVlcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFx1NjUzQlx1NjQ4M1x1MzBFRFx1MzBCMFx1MzA0Q1x1NzEyMVx1MzA0NChcdUZGMURcdTUyMURcdTU2REVcdTMwNjdcdTMwNDJcdTMwOEIpXHU1ODM0XHU1NDA4XHUzMDZGXHUzMDU5XHUzMDc5XHUzMDY2XHUzMDZFXHU1QTAxXHU1MjlCXHUzMDRDXHU1QkZFXHU4QzYxXHJcbiAgICAgIGFsbG93UG93ZXIgPSBISURERU5QT1dFUl9UQUJMRTtcclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2coVHlwZURhdGFbdHlwZV0uTmFtZSwgYWxsb3dQb3dlcik7XHJcblxyXG4gICAgLy8gXHUzMDgxXHUzMDU2XHUzMDgxXHUzMDhCXHUzMEQxXHUzMEVGXHUzMEZDXHUzMDZFXHU1NDA0XHU1QTAxXHU1MjlCXHUzMDY3XHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHU4QTA4XHU3Qjk3XHUzMDkyXHU4ODRDXHUzMDQ0XHUzMDAxXHU3RDUwXHU2NzlDXHUzMDkyXHU1M0Q2XHU1Rjk3XHUzMDU5XHUzMDhCXHJcbiAgICBmb3IgKGNvbnN0IHBvd2VyIG9mIGFsbG93UG93ZXIpIHtcclxuICAgICAgY29uc3QgYXR0YWNrZXJUbXAgPSBhdHRhY2tlci5jbG9uZSgpO1xyXG4gICAgICBhdHRhY2tlclRtcC5oaWRkZW5fcG93ZXJfYmFzZV9wb3dlciA9IHBvd2VyO1xyXG4gICAgICBhdHRhY2tlclRtcC5oaWRkZW5fcG93ZXJfdHlwZSA9IHR5cGU7XHJcblxyXG4gICAgICBjb25zdCBkYW1hZ2VSZXN1bHQgPSBSdW5DYWxjRGFtYWdlKGR1bmdlb25TdGF0ZSwgYXR0YWNrZXJUbXAsIGRlZmVuZGVyLCBtb3ZlLCBwb3dlcik7XHJcbiAgICAgIGNvbnN0IGRhbWFnZURhdGEgPSB7XHJcbiAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICBwb3dlcjogcG93ZXIsXHJcbiAgICAgICAgbWluRGFtYWdlOiBkYW1hZ2VSZXN1bHQubWluRGFtYWdlLFxyXG4gICAgICAgIG1heERhbWFnZTogZGFtYWdlUmVzdWx0Lm1heERhbWFnZSxcclxuICAgICAgICBtYXRjaHVwOiBkYW1hZ2VSZXN1bHQuZGV0YWlscy50eXBlTWF0Y2h1cC5pZCxcclxuICAgICAgfTtcclxuICAgICAgLy8gXHU1MTY1XHU1MjlCXHUzMDU3XHUzMDVGXHUzMEMwXHUzMEUxXHUzMEZDXHUzMEI4XHUzMDRDXHU3QkM0XHU1NkYyXHU1MTg1XHUzMDY3XHUzMDQyXHUzMDhDXHUzMDcwXHU5MTREXHU1MjE3XHUzMDZCXHUzMEJCXHUzMEMzXHUzMEM4XHJcbiAgICAgIGlmIChkYW1hZ2VEYXRhLm1pbkRhbWFnZSA8PSBkYW1hZ2UgJiYgZGFtYWdlIDw9IGRhbWFnZURhdGEubWF4RGFtYWdlKSB7XHJcbiAgICAgICAgZGFtYWdlRGF0YXMucHVzaChkYW1hZ2VEYXRhKTtcclxuICAgICAgICBhbGxvd1R5cGUuZ2V0KHR5cGUpLnB1c2gocG93ZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIGRhbWFnZURhdGFzQWxsLnB1c2goZGFtYWdlRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIFVuZG9cdTMwNTdcdTMwNUZcdTUyMDZcdTMwNkVcdTMwRURcdTMwQjBcdTMwOTJcdTUyNEFcdTk2NjRcclxuICBhdHRhY2tMb2cuc3BsaWNlKHBvaW50ZXIpO1xyXG4gIC8vIFx1NUEwMVx1NTI5Qlx1NTAxOVx1ODhEQ1x1MzA0Q1x1NzEyMVx1MzA0NFx1MzBCRlx1MzBBNFx1MzBEN1x1MzA5Mlx1NTI0QVx1OTY2NFxyXG4gIGZvciAoY29uc3QgW2tleSwgYXJyXSBvZiBhbGxvd1R5cGUpIHtcclxuICAgIGlmIChhcnIubGVuZ3RoID09IDApIGFsbG93VHlwZS5kZWxldGUoa2V5KTtcclxuICB9XHJcblxyXG4gIC8vIFx1NjUzQlx1NjQ4M1x1MzBFRFx1MzBCMFx1MzA5Mlx1OEZGRFx1NTJBMFxyXG4gIGNvbnN0IGF0dGFjayA9IG5ldyBBdHRhY2soKTtcclxuICBhdHRhY2suZGFtYWdlID0gZGFtYWdlO1xyXG4gIGF0dGFjay5tYXRjaHVwID0gbWF0Y2h1cDtcclxuICBhdHRhY2suZ2luc2VuZyA9IG1vdmUuZ2luc2VuZztcclxuICBhdHRhY2suZW5lbXkgPSBgTHYke2RlZmVuZGVyLmxldmVsfSAke1Bva2Vtb25EYXRhW2RlZmVuZGVyLmlkXS5OYW1lfWA7XHJcbiAgYXR0YWNrLmRhbWFnZURhdGFzID0gZGFtYWdlRGF0YXM7XHJcbiAgYXR0YWNrLmNhbmRpZGF0ZVR5cGUgPSBhbGxvd1R5cGU7XHJcbiAgYXR0YWNrLmF0dGFja2VyID0gYXR0YWNrZXI7XHJcbiAgYXR0YWNrLmRlZmVuZGVyID0gZGVmZW5kZXI7XHJcbiAgYXR0YWNrLmR1bmdlb25TdGF0ZSA9IGR1bmdlb25TdGF0ZTtcclxuXHJcbiAgYXR0YWNrTG9nLnB1c2goYXR0YWNrKTtcclxuXHJcbiAgLy8gXHU2NTNCXHU2NDgzXHUzMEVEXHUzMEIwXHU4ODY4XHU3OTNBXHUzMDkyXHU2NkY0XHU2NUIwXHJcbiAgYXR0YWNrTG9nUG9pbnRlciA9IGF0dGFja0xvZy5sZW5ndGg7XHJcbiAgdXBkYXRlQXR0YWNrTG9nVmlldygpO1xyXG4gIHVwZGF0ZVJlc3VsdFZpZXcoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1N0Q1MFx1Njc5Q1x1ODg2OFx1NzkzQVx1MzA5Mlx1NjZGNFx1NjVCMFxyXG4gKi9cclxuZnVuY3Rpb24gdXBkYXRlUmVzdWx0VmlldygpIHtcclxuICBsZXQgcmVzID0gJyc7XHJcbiAgaWYgKGF0dGFja0xvZy5sZW5ndGggPiAwICYmIGF0dGFja0xvZ1BvaW50ZXIgPiAwKSB7XHJcbiAgICBjb25zdCBwb2ludGVyID0gYXR0YWNrTG9nUG9pbnRlciAtIDE7XHJcbiAgICBjb25zdCBsb2cgPSBhdHRhY2tMb2dbcG9pbnRlcl07XHJcbiAgICBjb25zdCBhbGxvd1R5cGUgPSBsb2cuY2FuZGlkYXRlVHlwZTtcclxuICAgIGNvbnN0IGRhbWFnZURhdGFzID0gbG9nLmRhbWFnZURhdGFzO1xyXG4gICAgLy8gXHUzMEJGXHUzMEE0XHUzMEQ3XHU1MDE5XHU4OERDXHJcbiAgICBpZiAoYWxsb3dUeXBlLnNpemUgPiAxKSB7XHJcbiAgICAgIHJlcyA9IGBcdTMwQkZcdTMwQTRcdTMwRDdcdTUwMTlcdTg4REM6IGA7XHJcbiAgICAgIGNvbnN0IHN0cmluZ3MgPSBbXTtcclxuICAgICAgZm9yIChjb25zdCBba2V5LCBhcnJdIG9mIGFsbG93VHlwZSkge1xyXG4gICAgICAgIHN0cmluZ3MucHVzaChUeXBlRGF0YVtrZXldLk5hbWUucmVwbGFjZSgnICcsICcnKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmVzICs9IHN0cmluZ3Muam9pbignLycpO1xyXG4gICAgfSBlbHNlIGlmIChhbGxvd1R5cGUuc2l6ZSA9PSAxKSB7XHJcbiAgICAgIHJlcyA9IGA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2VzcyBmdy1ib2xkXCI+JHtUeXBlRGF0YVthbGxvd1R5cGUua2V5cygpLm5leHQoKS52YWx1ZV0uTmFtZX1cdTMwQkZcdTMwQTRcdTMwRDdcdTMwNjdcdTc4QkFcdTVCOUFcdUZGMDE8L3NwYW4+YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcyA9ICdcdTUwMTlcdTg4RENcdTMwNENcdTg5OEJcdTMwNjRcdTMwNEJcdTMwOEFcdTMwN0VcdTMwNUJcdTMwOTMnO1xyXG4gICAgfVxyXG4gICAgLy8gXHU1QTAxXHU1MjlCXHU1MDE5XHU4OERDXHJcbiAgICBpZiAoZGFtYWdlRGF0YXMubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXMgKz0gJzxicj4nO1xyXG4gICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbiguLi5kYW1hZ2VEYXRhcy5tYXAoKHgpID0+IHgucG93ZXIpKTtcclxuICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4uZGFtYWdlRGF0YXMubWFwKCh4KSA9PiB4LnBvd2VyKSk7XHJcbiAgICAgIGlmIChtaW4gIT0gbWF4KSB7XHJcbiAgICAgICAgcmVzICs9IGBcdTVBMDFcdTUyOUJcdTUwMTlcdTg4REM6ICR7bWlufVx1RkY1RSR7bWF4fWA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzICs9IGA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2VzcyBmdy1ib2xkXCI+XHU1QTAxXHU1MjlCJHtkYW1hZ2VEYXRhc1swXS5wb3dlcn1cdTMwNjdcdTc4QkFcdTVCOUFcdUZGMDE8L3NwYW4+YDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXN1bHRXcmFwRWxlbWVudC5pbm5lckhUTUwgPSByZXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTY1M0JcdTY0ODNcdTMwRURcdTMwQjBcdTMwNkVcdTg4NjhcdTc5M0FcdTMwOTJcdTY2RjRcdTY1QjBcclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZUF0dGFja0xvZ1ZpZXcoKSB7XHJcbiAgY29uc3QgaXNWYWxpZCA9IGF0dGFja0xvZy5sZW5ndGggPiAwO1xyXG4gIGNvbnN0IG1hdGNodXBTdHJpbmdzID0gW107XHJcbiAgZm9yIChjb25zdCBvcHRpb24gb2YgbW92ZU1hdGNodXBFbGVtZW50Lm9wdGlvbnMpIHtcclxuICAgIG1hdGNodXBTdHJpbmdzLnB1c2gob3B0aW9uLnRleHQpO1xyXG4gIH1cclxuXHJcbiAgbGV0IHJlcyA9ICcnO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0YWNrTG9nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBsb2cgPSBhdHRhY2tMb2dbaV07XHJcbiAgICByZXMgKz0gYFxyXG4gICAgICAgIDx0ciAke2kgPiBhdHRhY2tMb2dQb2ludGVyIC0gMSA/ICdjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiJyA6ICcnfT5cclxuICAgICAgICAgIDx0ZD4ke2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+JHtsb2cuZGFtYWdlfSR7bG9nLmR1bmdlb25TdGF0ZS5ybmcuY3JpdGljYWxIaXQgPyAnIChcdTYwMjVcdTYyNDApJyA6ICcnfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+JHttYXRjaHVwU3RyaW5nc1tsb2cubWF0Y2h1cF19PC90ZD5cclxuICAgICAgICAgIDx0ZD4ke2xvZy5lbmVteX08L3RkPlxyXG4gICAgICAgIDwvdHI+YDtcclxuICB9XHJcbiAgdGFibGVBdHRhY2tMb2dFbGVtZW50LnRCb2RpZXNbMF0uaW5uZXJIVE1MID0gcmVzO1xyXG5cclxuICBjdHJsVW5kb0VsZW1lbnQuZGlzYWJsZWQgPSAhaXNWYWxpZDtcclxuICBjdHJsUmVkb0VsZW1lbnQuZGlzYWJsZWQgPSBhdHRhY2tMb2cubGVuZ3RoID09IDAgfHwgYXR0YWNrTG9nLmxlbmd0aCA9PSBhdHRhY2tMb2dQb2ludGVyO1xyXG4gIGN0cmxSZXNldEVsZW1lbnQuZGlzYWJsZWQgPSAhaXNWYWxpZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NjUzQlx1NjQ4M1x1MzBFRFx1MzBCMFx1MzA5Mlx1NTE0M1x1MzA2Qlx1NjIzQlx1MzA1OVxyXG4gKi9cclxuZnVuY3Rpb24gdW5kb0F0dGFja0xvZygpIHtcclxuICBpZiAoYXR0YWNrTG9nUG9pbnRlciA9PSAtMSkgYXR0YWNrTG9nUG9pbnRlciA9IGF0dGFja0xvZy5sZW5ndGg7XHJcbiAgYXR0YWNrTG9nUG9pbnRlci0tO1xyXG4gIHVwZGF0ZUF0dGFja0xvZ1ZpZXcoKTtcclxuICB1cGRhdGVSZXN1bHRWaWV3KCk7XHJcblxyXG4gIGN0cmxSZWRvRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIGlmIChhdHRhY2tMb2dQb2ludGVyID09IDApIHtcclxuICAgIGN0cmxVbmRvRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHU2NTNCXHU2NDgzXHUzMEVEXHUzMEIwXHUzMDkyXHUzMDg0XHUzMDhBXHU3NkY0XHUzMDU5XHJcbiAqL1xyXG5mdW5jdGlvbiByZWRvQXR0YWNrTG9nKCkge1xyXG4gIGF0dGFja0xvZ1BvaW50ZXIrKztcclxuICB1cGRhdGVBdHRhY2tMb2dWaWV3KCk7XHJcbiAgdXBkYXRlUmVzdWx0VmlldygpO1xyXG5cclxuICBjdHJsVW5kb0VsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICBpZiAoYXR0YWNrTG9nUG9pbnRlciA9PSBhdHRhY2tMb2cubGVuZ3RoKSB7XHJcbiAgICBjdHJsUmVkb0VsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NjUzQlx1NjQ4M1x1MzBFRFx1MzBCMFx1MzA5Mlx1MzBFQVx1MzBCQlx1MzBDM1x1MzBDOFxyXG4gKi9cclxuZnVuY3Rpb24gcmVzZXRBdHRhY2tMb2coKSB7XHJcbiAgYXR0YWNrTG9nUG9pbnRlciA9IC0xO1xyXG4gIGF0dGFja0xvZy5sZW5ndGggPSAwO1xyXG4gIHVwZGF0ZUF0dGFja0xvZ1ZpZXcoKTtcclxuICB1cGRhdGVSZXN1bHRWaWV3KCk7XHJcbiAgYm9vdHN0cmFwLk1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UoJyNtb2RhbC1yZXNldCcpLmhpZGUoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1MzA5Mlx1MzBCQlx1MzBDM1x1MzBDOFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZnVuY3Rpb24gc2V0T3B0aW9uc1Bva2Vtb24oKSB7XHJcbiAgaWYgKCFQb2tlbW9uRGF0YSkge1xyXG4gICAgY29uc29sZS5lcnJvcignUG9rZW1vbkRhdGEgbm90IGZvdW5kJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBsZXQgcmVzID0gJyc7XHJcbiAgZm9yIChjb25zdCBwb2tlbW9uIG9mIFBva2Vtb25EYXRhKSB7XHJcbiAgICByZXMgKz0gYFxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiJHtwb2tlbW9uLklkfVwiICR7cG9rZW1vbi5JZCA9PSBERUZBVUxUX1BPS0VNT05fSUQgPyAnc2VsZWN0ZWQnIDogJyd9PlxyXG4gICAgICAgICR7cG9rZW1vbi5OYW1lfSR7cG9rZW1vbi5TdWJOYW1lID8gYCAtICR7cG9rZW1vbi5TdWJOYW1lfWAgOiAnJ31cclxuICAgICAgPC9vcHRpb24+YDtcclxuICB9XHJcbiAgYXR0YWNrZXJQb2tlbW9uRWxlbWVudC5pbm5lckhUTUwgPSByZXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTMwQzBcdTMwRjNcdTMwQjhcdTMwRTdcdTMwRjNcdTMwOTJcdTMwQkJcdTMwQzNcdTMwQzhcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIHNldE9wdGlvbnNEdW5nZW9uKCkge1xyXG4gIGlmICghRHVuZ2VvbkRhdGEpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0R1bmdlb25EYXRhIG5vdCBmb3VuZCcpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGV0IHJlcyA9ICcnO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgRHVuZ2VvbkRhdGEubGVuZ3RoICYmIGkgPD0gVkFMSURfTUFYX0RVTkdFT05fSUQ7IGkrKykge1xyXG4gICAgY29uc3QgZHVuZ2VvbiA9IER1bmdlb25EYXRhW2ldO1xyXG5cclxuICAgIC8vIFx1MzBEQ1x1MzBCOVx1MzBDMFx1MzBGM1x1MzBCOFx1MzBFN1x1MzBGMyhcdTUyNERcdTMwRDVcdTMwRURcdTMwQTIgPSAwIFx1MzA0Qlx1MzA2NCBcdTMwRDVcdTMwRURcdTMwQTJcdTY1NzAgPSAxKVx1MzA2Rlx1OTY2NFx1NTkxNlxyXG4gICAgaWYgKGR1bmdlb24uRmxvb3JQcmV2ID4gMCAmJiBkdW5nZW9uLkZsb29yQ291bnQgPT0gMSkgY29udGludWU7XHJcbiAgICAvLyBcdTMwRDVcdTMwRURcdTMwQTJcdTMwQzdcdTMwRkNcdTMwQkZcdTk4MThcdTU3REZcdTU5MTZcdTMwNkZcdTk2NjRcdTU5MTZcclxuICAgIGlmIChkdW5nZW9uLk1hcHBhSW5kZXggPj0gRmxvb3JEYXRhLmxlbmd0aCkgY29udGludWU7XHJcbiAgICAvLyBcdTcxMjFcdTUyQjlcdTMwNkFcdTMwRDVcdTMwRURcdTMwQTJcdTMwQzdcdTMwRkNcdTMwQkZcdTMwNkZcdTk2NjRcdTU5MTZcclxuICAgIGlmIChkdW5nZW9uLkZsb29yUHJldiArIDEgPj0gRmxvb3JEYXRhW2R1bmdlb24uTWFwcGFJbmRleF0ubGVuZ3RoKSBjb250aW51ZTtcclxuXHJcbiAgICByZXMgKz0gYFxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiJHtkdW5nZW9uLklkfVwiICR7ZHVuZ2Vvbi5JZCA9PSBERUZBVUxUX0RVTkdFT05fSUQgPyAnc2VsZWN0ZWQnIDogJyd9PlxyXG4gICAgICAgICR7Zm9ybWF0UmVtb3ZlVGFnU3RyaW5nKGR1bmdlb24uTmFtZSl9XHJcbiAgICAgIDwvb3B0aW9uPmA7XHJcbiAgfVxyXG4gIGRlZmVuZGVyRHVuZ2VvbkVsZW1lbnQuaW5uZXJIVE1MID0gcmVzO1xyXG59XHJcblxyXG4vKipcclxuICogXHUzMEQ1XHUzMEVEXHUzMEEyXHU5ODA1XHU3NkVFXHUzMDkyXHUzMEJCXHUzMEMzXHUzMEM4XHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5mdW5jdGlvbiBzZXRPcHRpb25zRmxvb3IoKSB7XHJcbiAgaWYgKCFEdW5nZW9uRGF0YSkge1xyXG4gICAgY29uc29sZS5lcnJvcignRHVuZ2VvbkRhdGEgbm90IGZvdW5kJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmICghRmxvb3JEYXRhKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdGbG9vckRhdGEgbm90IGZvdW5kJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBkdW5nZW9uSWQgPSBkZWZlbmRlckR1bmdlb25FbGVtZW50LnZhbHVlO1xyXG4gIGNvbnN0IGR1bmdlb24gPSBEdW5nZW9uRGF0YVtkdW5nZW9uSWRdO1xyXG4gIGNvbnN0IGZsb29yUHJldiA9IGR1bmdlb24uRmxvb3JQcmV2ICsgMTtcclxuICBjb25zdCBmbG9vckNvdW50ID0gZHVuZ2Vvbi5GbG9vckNvdW50O1xyXG4gIGNvbnN0IGZsb29ycyA9IEZsb29yRGF0YVtOdW1iZXIoZHVuZ2Vvbi5NYXBwYUluZGV4KV07XHJcbiAgY29uc3Qgc3RhaXJzID0gZHVuZ2Vvbi5GbGFnU3RhaXJzID8gJycgOiAnQic7XHJcblxyXG4gIGxldCByZXMgPSAnJztcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZsb29yQ291bnQ7IGkrKykge1xyXG4gICAgY29uc3QgdmFsdWUgPSBmbG9vclByZXYgKyBpO1xyXG4gICAgY29uc3QgZmxvb3IgPSBmbG9vcnNbdmFsdWVdO1xyXG4gICAgY29uc3QgZW5lbXkgPSBmbG9vci5JbmRleEdyb3VwLlNwYXduRW5lbXk7XHJcbiAgICBjb25zdCBmaXhlZCA9IGZsb29yLkZpeGVkRmxvb3JJZDtcclxuICAgIGNvbnN0IGlxdmFsdWUgPSBmbG9vci5FbmVteUlRO1xyXG4gICAgY29uc3QgZGlzYWJsZWQgPSAhaXNFbmVteVNwYXduYWJsZUZpeGVkRmxvb3IoZmxvb3IuRml4ZWRGbG9vcklkKTtcclxuXHJcbiAgICByZXMgKz0gYFxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiJHt2YWx1ZX1cIiBkYXRhLWZsb29yPVwiJHtpICsgMX1cIiBkYXRhLWVuZW15PVwiJHtlbmVteX1cIiBkYXRhLWZpeGVkPVwiJHtmaXhlZH1cIiBkYXRhLWlxdmFsdWU9XCIke2lxdmFsdWV9XCIgJHtkaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiAnJ30+XHJcbiAgICAgICAgJHtzdGFpcnN9JHtpICsgMX1GXHJcbiAgICAgIDwvb3B0aW9uPmA7XHJcbiAgfVxyXG4gIGRlZmVuZGVyRmxvb3JFbGVtZW50LmlubmVySFRNTCA9IHJlcztcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NjU3NVx1OTgwNVx1NzZFRVx1MzA5Mlx1MzBCQlx1MzBDM1x1MzBDOFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZnVuY3Rpb24gc2V0T3B0aW9uc0VuZW15KCkge1xyXG4gIGlmICghUG9rZW1vbkRhdGEpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1Bva2Vtb25EYXRhIG5vdCBmb3VuZCcpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAoIU1hcHBhU0RhdGEpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ01hcHBhU0RhdGEgbm90IGZvdW5kJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBtYXBwYVx1MzBDN1x1MzBGQ1x1MzBCRlx1MzA0Qlx1MzA4OVx1NjU3NVx1MzBDNlx1MzBGQ1x1MzBENlx1MzBFQlx1NTNENlx1NUY5N1xyXG4gIGNvbnN0IG1hcHBhSWQgPSBOdW1iZXIoZGVmZW5kZXJGbG9vckVsZW1lbnQub3B0aW9uc1tkZWZlbmRlckZsb29yRWxlbWVudC5zZWxlY3RlZEluZGV4XS5kYXRhc2V0LmVuZW15KTtcclxuICBjb25zdCBtYXBwYSA9IE1hcHBhU0RhdGEuRW5lbXlEYXRhW21hcHBhSWRdO1xyXG5cclxuICAvLyBcdTMwQzdcdTMwRkNcdTMwQkZcdTMwQkJcdTMwQzNcdTMwQzhcdTRGNUNcdTYyMTBcclxuICBjb25zdCBkYXRhc2V0ID0gW107XHJcbiAgZm9yIChjb25zdCBlbmVteSBvZiBtYXBwYSkge1xyXG4gICAgY29uc3QgcG9rZW1vbklkID0gZW5lbXkuUG9rZW1vbklkO1xyXG4gICAgLy8gXHUzMDZBXHUzMDZCXHUzMDRCXHUzMDkyXHU5NjY0XHU1OTE2XHJcbiAgICBpZiAocG9rZW1vbklkICE9IFBPS0VNT05fRFVNTVlfSUQpIHtcclxuICAgICAgZGF0YXNldC5wdXNoKHsgaWQ6IHBva2Vtb25JZCwgbmFtZTogUG9rZW1vbkRhdGFbcG9rZW1vbklkXS5OYW1lLCBsZXZlbDogZW5lbXkuTGV2ZWwgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBcdTRFOTRcdTUzNDFcdTk3RjNcdTk4MDZcdTMwNkJcdTMwQkRcdTMwRkNcdTMwQzhcclxuICBkYXRhc2V0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgIC8vIFx1MzBBQlx1MzBBRlx1MzBFQ1x1MzBBQVx1MzBGM1x1MzA5Mlx1NEUwMFx1NzU2QVx1NUY4Q1x1MzA2Qlx1MzA1OVx1MzA4QlxyXG4gICAgY29uc3QgYUxhc3QgPSBhLmlkID09PSBQT0tFTU9OX0tFQ1JFT05fSUQ7XHJcbiAgICBjb25zdCBiTGFzdCA9IGIuaWQgPT09IFBPS0VNT05fS0VDUkVPTl9JRDtcclxuICAgIGlmIChhTGFzdCAhPT0gYkxhc3QpIHJldHVybiBhTGFzdCA/IDEgOiAtMTtcclxuICAgIHJldHVybiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpO1xyXG4gIH0pO1xyXG5cclxuICBsZXQgcmVzID0gJyc7XHJcbiAgZm9yIChjb25zdCBlbmVteVBva2Ugb2YgZGF0YXNldCkge1xyXG4gICAgcmVzICs9IGBcclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7ZW5lbXlQb2tlLmlkfVwiIGRhdGEtbGV2ZWw9XCIke2VuZW15UG9rZS5sZXZlbH1cIj5cclxuICAgICAgICBMdiR7ZW5lbXlQb2tlLmxldmVsfSAke2VuZW15UG9rZS5uYW1lfVxyXG4gICAgICA8L29wdGlvbj5cclxuICAgIGA7XHJcbiAgfVxyXG4gIGRlZmVuZGVyRW5lbXlFbGVtZW50LmlubmVySFRNTCA9IHJlcztcclxuXHJcbiAgLy8gXHU2NTc1XHU2MEM1XHU1ODMxXHU2NkY0XHU2NUIwXHJcbiAgY2hhbmdlRW5lbXkoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NTkyOVx1NTAxOVx1OTgwNVx1NzZFRVx1MzA5Mlx1MzBCQlx1MzBDM1x1MzBDOFxyXG4gKi9cclxuZnVuY3Rpb24gc2V0T3B0aW9uc1dlYXRoZXIoKSB7XHJcbiAgbGV0IHJlcyA9ICcnO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgV0VBVEhFUl9TVFJJTkdTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICByZXMgKz0gYDxvcHRpb24gdmFsdWU9XCIke2l9XCI+JHtXRUFUSEVSX1NUUklOR1NbaV19PC9vcHRpb24+YDtcclxuICB9XHJcbiAgbW92ZVdlYXRoZXJFbGVtZW50LmlubmVySFRNTCA9IHJlcztcclxufVxyXG5cclxuLyoqXHJcbiAqIENob2ljZXMuanMgXHU1MjFEXHU2NzFGXHU1MzE2IChcdTMwQTRcdTMwRjNcdTMwQjlcdTMwQkZcdTMwRjNcdTMwQjlcdTMwNkVcdTMwQkJcdTMwQzNcdTMwQzgpXHJcbiAqL1xyXG5mdW5jdGlvbiBJbml0Q2hvaWNlcygpIHtcclxuICBjb25zdCBjaG9pY2VzT3B0aW9uc01vdmUgPSB7XHJcbiAgICAuLi5jaG9pY2VzT3B0aW9ucyxcclxuICAgIGNhbGxiYWNrT25DcmVhdGVUZW1wbGF0ZXM6IGZ1bmN0aW9uICh0ZW1wbGF0ZSwgZXNjYXBlRm9yVGVtcGxhdGUsIGdldENsYXNzTmFtZXMpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjaG9pY2U6ICh7IGNsYXNzTmFtZXMgfSwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlKGBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCIke2dldENsYXNzTmFtZXMoY2xhc3NOYW1lcy5pdGVtKS5qb2luKCcgJyl9ICR7Z2V0Q2xhc3NOYW1lcyhjbGFzc05hbWVzLml0ZW1DaG9pY2UpLmpvaW4oJyAnKX0gJHtnZXRDbGFzc05hbWVzKFxyXG4gICAgICAgICAgICBkYXRhLmRpc2FibGVkID8gY2xhc3NOYW1lcy5pdGVtRGlzYWJsZWQgOiBjbGFzc05hbWVzLml0ZW1TZWxlY3RhYmxlLFxyXG4gICAgICAgICAgKS5qb2luKCcgJyl9XCIgZGF0YS1jaG9pY2UgJHtcclxuICAgICAgICAgICAgZGF0YS5kaXNhYmxlZCA/ICdkYXRhLWNob2ljZS1kaXNhYmxlZCBhcmlhLWRpc2FibGVkPVwidHJ1ZVwiJyA6ICdkYXRhLWNob2ljZS1zZWxlY3RhYmxlJ1xyXG4gICAgICAgICAgfSBkYXRhLWlkPVwiJHtkYXRhLmlkfVwiIGRhdGEtdmFsdWU9XCIke2VzY2FwZUZvclRlbXBsYXRlKGRhdGEudmFsdWUpfVwiICR7XHJcbiAgICAgICAgICAgIGRhdGEuZ3JvdXBJZCA+IDAgPyAncm9sZT1cInRyZWVpdGVtXCInIDogJ3JvbGU9XCJvcHRpb25cIidcclxuICAgICAgICAgIH0gZGF0YS1ncm91cD1cIiR7ZGF0YS5ncm91cC5sYWJlbH1cIj5cclxuICAgICAgICAgICAgPHNwYW4+JHtkYXRhLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgYCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hvaWNlc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2RhbWFnZS1oaWRkZW5wb3dlciBzZWxlY3RbZGF0YS1jaG9pY2VzXScpO1xyXG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBjaG9pY2VzRWxlbWVudHMpIHtcclxuICAgIGlmIChlbGVtZW50LmlkID09ICdtb3ZlJykge1xyXG4gICAgICBjaG9pY2VzSW5zdGFuY2VzW2VsZW1lbnQuaWRdID0gbmV3IENob2ljZXMoZWxlbWVudCwgY2hvaWNlc09wdGlvbnNNb3ZlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNob2ljZXNJbnN0YW5jZXNbZWxlbWVudC5pZF0gPSBuZXcgQ2hvaWNlcyhlbGVtZW50LCBjaG9pY2VzT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogSlNPTlx1MzBDN1x1MzBGQ1x1MzBCRlx1MzA5Mlx1NTNENlx1NUY5N1xyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hKc29uRGF0YSgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Bva2Vtb25EYXRhLCBtb3ZlRGF0YSwgZHVuZ2VvbkRhdGEsIGZsb29yRGF0YSwgbWFwcGFTRGF0YSwgdHlwZURhdGEsIGlxZ3JvdXBEYXRhLCBpcXNraWxsRGF0YV0gPVxyXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgZ2V0SnNvbkRhdGEoJ3Bva2Vtb24nKSxcclxuICAgICAgICBnZXRKc29uRGF0YSgnbW92ZScpLFxyXG4gICAgICAgIGdldEpzb25EYXRhKCdkdW5nZW9uJyksXHJcbiAgICAgICAgZ2V0SnNvbkRhdGEoJ2Zsb29yJyksXHJcbiAgICAgICAgZ2V0SnNvbkRhdGEoJ21hcHBhX3MnKSxcclxuICAgICAgICBnZXRKc29uRGF0YSgndHlwZScpLFxyXG4gICAgICAgIGdldEpzb25EYXRhKCdpcWdyb3VwJyksXHJcbiAgICAgICAgZ2V0SnNvbkRhdGEoJ2lxc2tpbGwnKSxcclxuICAgICAgXSk7XHJcbiAgICB3aW5kb3cuUG9rZW1vbkRhdGEgPSBwb2tlbW9uRGF0YTtcclxuICAgIHdpbmRvdy5Nb3ZlRGF0YSA9IG1vdmVEYXRhO1xyXG4gICAgd2luZG93LkR1bmdlb25EYXRhID0gZHVuZ2VvbkRhdGE7XHJcbiAgICB3aW5kb3cuRmxvb3JEYXRhID0gZmxvb3JEYXRhO1xyXG4gICAgd2luZG93Lk1hcHBhU0RhdGEgPSBtYXBwYVNEYXRhO1xyXG4gICAgd2luZG93LlR5cGVEYXRhID0gdHlwZURhdGE7XHJcbiAgICB3aW5kb3cuSVFHcm91cERhdGEgPSBpcWdyb3VwRGF0YTtcclxuICAgIHdpbmRvdy5JUVNraWxsRGF0YSA9IGlxc2tpbGxEYXRhO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgfVxyXG59XHJcbiJd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LE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsRUFDYjtBQUVPLE1BQU0sbUNBQW1DO0FBQUEsSUFDOUMsSUFBSSxJQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksS0FBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxLQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksS0FBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxLQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksSUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxLQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksS0FBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLEVBQ2I7QUFFTyxNQUFNLGtDQUFrQztBQUFBLElBQzdDLElBQUksS0FBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxLQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLElBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxLQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxJQUFPO0FBQUE7QUFBQSxFQUNiO0FBRU8sTUFBTSxpQ0FBaUM7QUFBQSxJQUM1QyxJQUFJLElBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxJQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxLQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksS0FBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxLQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksS0FBTztBQUFBO0FBQUEsRUFDYjtBQUVPLE1BQU0sb0NBQW9DO0FBQUEsSUFDL0MsSUFBSSxLQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksS0FBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksS0FBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLElBQU87QUFBQTtBQUFBLEVBQ2I7QUFFTyxNQUFNLG1DQUFtQztBQUFBLElBQzlDLElBQUksSUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksS0FBTztBQUFBO0FBQUEsSUFDWCxJQUFJLElBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLE1BQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxNQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksTUFBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxLQUFPO0FBQUE7QUFBQSxJQUNYLElBQUksS0FBTztBQUFBO0FBQUEsSUFDWCxJQUFJLEtBQU87QUFBQTtBQUFBLElBQ1gsSUFBSSxLQUFPO0FBQUE7QUFBQSxFQUNiO0FBR08sTUFBTSx5QkFBeUI7QUFFL0IsTUFBTSx3QkFBd0I7QUFFOUIsTUFBTSx5QkFBeUI7QUFFL0IsTUFBTSwyQkFBMkI7QUFFakMsTUFBTSxzQkFBc0I7QUFFNUIsTUFBTSxrQ0FBa0M7QUFFeEMsTUFBTSw4QkFBOEI7QUFLcEMsTUFBTSx3QkFBd0I7QUFFOUIsTUFBTSwwQkFBMEI7QUFFaEMsTUFBTSx1QkFBdUI7QUFFN0IsTUFBTSx1QkFBdUI7QUFFN0IsTUFBTSxzQkFBc0I7QUFFNUIsTUFBTSx3QkFBd0I7QUFFOUIsTUFBTSw2QkFBNkI7QUFFbkMsTUFBTSw2QkFBNkI7QUFFbkMsTUFBTSxrQ0FBa0M7QUFFeEMsTUFBTSxpQ0FBaUM7QUFFdkMsTUFBTSxrQ0FBa0M7QUFHeEMsTUFBTSxrQ0FBa0M7QUFFeEMsTUFBTSxtQkFBbUI7QUFFekIsTUFBTSxhQUFhO0FBR25CLE1BQU0sMEJBQTBCO0FBQUEsSUFDckMsSUFBSSxnQkFBZ0IsSUFBVSxZQUFZLENBQUM7QUFBQTtBQUFBLElBQzNDLElBQUksZ0JBQWdCLElBQVUsYUFBYSxDQUFDO0FBQUE7QUFBQSxJQUM1QyxJQUFJLGdCQUFnQixJQUFVLGNBQWMsQ0FBQztBQUFBO0FBQUEsSUFDN0MsSUFBSSxnQkFBZ0IsSUFBVSxZQUFZLENBQUM7QUFBQTtBQUFBLElBQzNDLElBQUksZ0JBQWdCLElBQVUsYUFBYSxDQUFDO0FBQUE7QUFBQSxJQUM1QyxJQUFJLGdCQUFnQixJQUFVLFdBQVcsQ0FBQztBQUFBO0FBQUEsSUFDMUMsSUFBSSxnQkFBZ0IsSUFBVSxZQUFZLENBQUM7QUFBQTtBQUFBLElBQzNDLElBQUksZ0JBQWdCLElBQVUsV0FBVyxDQUFDO0FBQUE7QUFBQSxJQUMxQyxJQUFJLGdCQUFnQixJQUFVLGVBQWUsQ0FBQztBQUFBO0FBQUEsSUFDOUMsSUFBSSxnQkFBZ0IsSUFBVSxZQUFZLENBQUM7QUFBQTtBQUFBLElBQzNDLElBQUksZ0JBQWdCLElBQVUsV0FBVyxDQUFDO0FBQUE7QUFBQSxJQUMxQyxJQUFJLGdCQUFnQixJQUFVLGFBQWEsQ0FBQztBQUFBO0FBQUEsSUFDNUMsSUFBSSxnQkFBZ0IsSUFBVSxlQUFlLENBQUM7QUFBQTtBQUFBLElBQzlDLElBQUksZ0JBQWdCLElBQVUsV0FBVyxDQUFDO0FBQUE7QUFBQSxJQUMxQyxJQUFJLGdCQUFnQixJQUFVLFlBQVksQ0FBQztBQUFBO0FBQUEsSUFDM0MsSUFBSSxnQkFBZ0IsSUFBVSxVQUFVLENBQUM7QUFBQTtBQUFBLElBQ3pDLElBQUksZ0JBQWdCLElBQVUsYUFBYSxFQUFFO0FBQUE7QUFBQSxJQUM3QyxJQUFJLGdCQUFnQixJQUFVLGNBQWMsQ0FBQztBQUFBO0FBQUEsSUFDN0MsSUFBSSxnQkFBZ0IsSUFBVSxhQUFhLENBQUM7QUFBQTtBQUFBLElBQzVDLElBQUksZ0JBQWdCLElBQVUsYUFBYSxDQUFDO0FBQUE7QUFBQSxJQUM1QyxJQUFJLGdCQUFnQixJQUFVLFlBQVksQ0FBQztBQUFBO0FBQUEsSUFDM0MsSUFBSSxnQkFBZ0IsSUFBVSxVQUFVLENBQUM7QUFBQTtBQUFBLElBQ3pDLElBQUksZ0JBQWdCLElBQVUsYUFBYSxFQUFFO0FBQUE7QUFBQSxJQUM3QyxJQUFJLGdCQUFnQixJQUFVLGFBQWEsQ0FBQztBQUFBO0FBQUEsSUFDNUMsSUFBSSxnQkFBZ0IsSUFBVSxZQUFZLENBQUM7QUFBQTtBQUFBLElBQzNDLElBQUksZ0JBQWdCLElBQVUsZUFBZSxDQUFDO0FBQUE7QUFBQSxJQUM5QyxJQUFJLGdCQUFnQixJQUFVLFVBQVUsQ0FBQztBQUFBO0FBQUEsSUFDekMsSUFBSSxnQkFBZ0IsS0FBVSxZQUFZLENBQUM7QUFBQTtBQUFBLElBQzNDLElBQUksZ0JBQWdCLEtBQVUsYUFBYSxDQUFDO0FBQUE7QUFBQSxJQUM1QyxJQUFJLGdCQUFnQixLQUFVLFVBQVUsRUFBRTtBQUFBO0FBQUEsSUFDMUMsSUFBSSxnQkFBZ0IsS0FBVSxhQUFhLENBQUM7QUFBQTtBQUFBLElBQzVDLElBQUksZ0JBQWdCLEtBQVUsYUFBYSxDQUFDO0FBQUE7QUFBQSxJQUM1QyxJQUFJLGdCQUFnQixLQUFVLFlBQVksQ0FBQztBQUFBO0FBQUEsSUFDM0MsSUFBSSxnQkFBZ0IsR0FBVSxXQUFXLENBQUM7QUFBQTtBQUFBLEVBQzVDO0FBR08sTUFBTSwyQkFBMkI7QUFBQSxJQUN0QyxFQUFFLElBQUksR0FBTyxPQUFPLEdBQUc7QUFBQTtBQUFBLElBQ3ZCLEVBQUUsSUFBSSxJQUFPLE9BQU8sR0FBRztBQUFBO0FBQUEsSUFDdkIsRUFBRSxJQUFJLElBQU8sT0FBTyxHQUFHO0FBQUE7QUFBQSxJQUN2QixFQUFFLElBQUksS0FBTyxPQUFPLEdBQUc7QUFBQTtBQUFBLElBQ3ZCLEVBQUUsSUFBSSxLQUFPLE9BQU8sR0FBRztBQUFBO0FBQUEsSUFDdkIsRUFBRSxJQUFJLEtBQU8sT0FBTyxHQUFHO0FBQUE7QUFBQSxJQUN2QixFQUFFLElBQUksS0FBTyxPQUFPLEdBQUc7QUFBQTtBQUFBLElBQ3ZCLEVBQUUsSUFBSSxLQUFPLE9BQU8sR0FBRztBQUFBO0FBQUEsSUFDdkIsRUFBRSxJQUFJLEtBQU8sT0FBTyxHQUFHO0FBQUE7QUFBQSxJQUN2QixFQUFFLElBQUksS0FBTyxPQUFPLEdBQUc7QUFBQTtBQUFBLElBQ3ZCLEVBQUUsSUFBSSxLQUFPLE9BQU8sR0FBRztBQUFBO0FBQUEsSUFDdkIsRUFBRSxJQUFJLEtBQU8sT0FBTyxHQUFHO0FBQUE7QUFBQSxJQUN2QixFQUFFLElBQUksS0FBTyxPQUFPLEdBQUc7QUFBQTtBQUFBLEVBQ3pCO0FBR08sTUFBTSx5QkFBeUIsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO0FBRXpELE1BQU0seUJBQXlCO0FBRS9CLE1BQU0sMEJBQTBCO0FBRWhDLE1BQU0sMkJBQTJCO0FBVWpDLE1BQU0sNEJBQTRCO0FBQUEsSUFDdkMsRUFBRSxJQUFJLElBQUksUUFBUSxFQUFFO0FBQUEsSUFDcEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQU0sUUFBUSxHQUFHO0FBQUEsSUFDdkIsRUFBRSxJQUFJLEtBQU8sUUFBUSxLQUFLO0FBQUEsSUFDMUIsRUFBRSxJQUFJLElBQUksUUFBUSxFQUFFO0FBQUE7QUFBQSxFQUN0QjtBQUVPLE1BQU0saUNBQWlDO0FBQUEsSUFDNUMsRUFBRSxJQUFJLEdBQUcsUUFBUSxLQUFLO0FBQUEsSUFDdEIsRUFBRSxJQUFJLElBQUksUUFBUSxHQUFHO0FBQUEsSUFDckIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQU0sUUFBUSxFQUFFO0FBQUEsSUFDdEIsRUFBRSxJQUFJLEtBQU8sUUFBUSxFQUFFO0FBQUEsSUFD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QUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLE9BQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLE9BQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxNQUNWLFNBQVU7QUFBQSxJQUNaO0FBQ0EsUUFBSSxJQUFJLEVBQUcsS0FBSTtBQUNmLFFBQUksSUFBSSxLQUFNLEtBQUk7QUFDbEIsV0FBTyxnQkFBZ0IsQ0FBQztBQUFBLEVBQzFCOzs7QUM3L0RPLFdBQVMsZUFBZSxTQUFTLFVBQVUsVUFBVSxlQUFlLFlBQVk7QUFDckYsUUFBSSxDQUFDLFVBQVU7QUFDYixjQUFRLE1BQU0sb0JBQW9CO0FBQ2xDO0FBQUEsSUFDRjtBQUVBLFNBQ0csU0FBUyxTQUFTLGVBQWUsU0FBUywwQkFBMEIsRUFBSSxNQUN6RSxjQUFrQixnQkFDbEIsU0FBUyxNQUFNLGFBQWEsS0FBUyxXQUNyQztBQUNBLGFBQVc7QUFBQSxJQUNiO0FBRUEsUUFBSSxjQUFrQixhQUFhO0FBQ2pDLFVBQUksUUFBUSxTQUFTO0FBQ25CLFlBQUksU0FBUyxNQUFNLGFBQWEsS0FBUyxhQUFhO0FBQ3BELGlCQUFXO0FBQUEsUUFDYjtBQUFBLE1BQ0YsV0FBVyxTQUFTLDZCQUE2QixPQUFPLEdBQUc7QUFDekQsZUFBVztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQ0EsV0FBTyxTQUFTLFVBQVUsRUFBRSxRQUFRLFNBQVMsTUFBTSxhQUFhLENBQUM7QUFBQSxFQUNuRTtBQVFBLFdBQVMsd0JBQXdCLFVBQVUsVUFBVTtBQUNuRCxRQUFJLENBQUMsU0FBUyxRQUFRLEVBQUcsUUFBTztBQUdoQyxRQUFJLFNBQVMsY0FBYyxHQUFJLEtBQUssQ0FBQyxTQUFTLHFCQUFxQixJQUFNLFVBQVUsSUFBSSxHQUFHO0FBQ3hGLGFBQU87QUFBQSxJQUNUO0FBQ0EsV0FBTyxTQUFTLG1CQUFtQixJQUFJLElBQUk7QUFBQSxFQUM3QztBQU9BLFdBQVMsMEJBQTBCLFVBQVUsVUFBVTtBQUNyRCxRQUFJLFVBQVUsU0FBUztBQUN2QixRQUFJLFVBQVUsU0FBUztBQUN2QixRQUFJLFdBQWUscUJBQXFCLFdBQWUsbUJBQW1CO0FBQ3hFLGFBQU87QUFBQSxJQUNUO0FBQ0EsV0FBTyxXQUFXO0FBQUEsRUFDcEI7QUFhQSxXQUFTLDJCQUEyQixTQUFTLFVBQVUsVUFBVSxhQUFhLFlBQVksV0FBVyxTQUFTO0FBQzVHLFlBQVEsZ0JBQWdCLGNBQWM7QUFDdEMsWUFBUSxnQkFBZ0IsYUFBYTtBQUdyQyxRQUFJLGdCQUFnQjtBQUVwQixjQUFVLGNBQWM7QUFDeEIsY0FBVSxtQkFBbUI7QUFDN0IsUUFBSSxDQUFDLFNBQVMsUUFBUSxHQUFHO0FBQ3ZCLGFBQU87QUFBQSxJQUNUO0FBRUEsUUFBSSxDQUFDLFVBQVU7QUFDYixjQUFRLE1BQU0sb0JBQW9CO0FBQ2xDLGFBQU87QUFBQSxJQUNUO0FBRUEsY0FBVSxjQUFjO0FBQ3hCLFVBQU0sZUFBZSxJQUFJLE1BQU0sQ0FBQztBQUNoQyxhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixZQUFNLHFCQUFxQixJQUFJLE1BQU0sQ0FBQztBQUV0QyxVQUFJLENBQUMsWUFBWSxTQUFTLGVBQWUsSUFBTSxPQUFPLEtBQUssU0FBUyxlQUFlLElBQU0sT0FBTyxJQUFJO0FBQ2xHLDJCQUFtQixDQUFDLElBQWM7QUFDbEMsMkJBQW1CLENBQUMsSUFBYztBQUNsQywyQkFBbUIsQ0FBQyxJQUFjO0FBQ2xDLDJCQUFtQixDQUFDLElBQWM7QUFBQSxNQUNwQyxPQUVLO0FBQ0gsMkJBQW1CLENBQUMsSUFBY0M7QUFDbEMsMkJBQW1CLENBQUMsSUFBYztBQUNsQywyQkFBbUIsQ0FBQyxJQUFjQztBQUNsQywyQkFBbUIsQ0FBQyxJQUFjO0FBQUEsTUFDcEM7QUFDQSxVQUFJLGlCQUFpQixFQUFHO0FBRXhCLFVBQUksVUFBYztBQUNsQixVQUNFLENBQUMsU0FBUyxzQkFBc0IsVUFBVSxZQUFZLE9BQU8sS0FDbkQsNEJBQTRCLFVBQVUsS0FDaEQsU0FBUyxvQkFBb0IsVUFBVSxDQUFDLEdBQ3hDO0FBRUEsa0JBQWM7QUFDZCxnQkFBUSxXQUFXLHlCQUF5QjtBQUFBLE1BQzlDLE9BQU87QUFFTCxrQkFBVSxlQUFlLFNBQVMsVUFBVSxVQUFVLEdBQUcsVUFBVTtBQUFBLE1BQ3JFO0FBRUEsVUFBSSxTQUFTLGVBQWUsSUFBTSxPQUFPLEtBQUssV0FBZSxpQkFBaUI7QUFDNUUseUJBQWlCLG1CQUFtQixPQUFPO0FBQUEsTUFDN0M7QUFDQSxtQkFBYSxDQUFDLElBQUk7QUFBQSxJQUNwQjtBQUVBLFlBQVEsV0FBVyxzQkFBc0IsQ0FBQyxJQUFJLGFBQWEsQ0FBQztBQUM1RCxZQUFRLFdBQVcsc0JBQXNCLENBQUMsSUFBSSxhQUFhLENBQUM7QUFDNUQsY0FBVSxjQUF3Qiw4QkFBOEIsYUFBYSxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUdoRyxRQUFJLGlCQUFpQixVQUFVLGVBQW1CO0FBQ2xELFFBQUksQ0FBQyxnQkFBZ0I7QUFDbkIsVUFBSSxTQUFTLHFCQUFxQixJQUFNLFVBQVUsSUFBSSxLQUFLLGNBQWtCLFdBQVc7QUFDdEYsd0JBQWdCO0FBQ2hCLGdCQUFRLGdCQUFnQixzQkFBc0I7QUFBQSxNQUNoRDtBQUFBLElBQ0Y7QUFFQSxRQUFJLFNBQVMsY0FBYyxFQUFJLEtBQUssVUFBVSxlQUFtQiw0QkFBNEI7QUFDM0YsdUJBQTJCO0FBQzNCLGNBQVEsZ0JBQWdCLHFCQUFxQjtBQUFBLElBQy9DO0FBRUEsU0FDRyxTQUFTLHFCQUFxQixLQUFNLFVBQVUsSUFBSSxLQUFLLFNBQVMscUJBQXFCLEtBQU0sVUFBVSxJQUFJLE1BQzFHLFVBQVUsZUFBbUIseUJBQzdCO0FBQ0EsdUJBQTJCO0FBQzNCLFVBQUksU0FBUyxxQkFBcUIsS0FBTSxVQUFVLElBQUksR0FBRztBQUN2RCxnQkFBUSxnQkFBZ0Isb0JBQW9CO0FBQUEsTUFDOUMsV0FBVyxTQUFTLHFCQUFxQixLQUFNLFVBQVUsSUFBSSxHQUFHO0FBQzlELGdCQUFRLGdCQUFnQixpQkFBaUI7QUFBQSxNQUMzQztBQUFBLElBQ0Y7QUFFQSxRQUFJLFNBQVMsMEJBQTBCLEVBQUksR0FBRztBQUM1Qyx1QkFBMkI7QUFDM0IsY0FBUSxnQkFBZ0IscUJBQXFCO0FBQUEsSUFDL0M7QUFFQSxRQUFJLFNBQVMsMEJBQTBCLEVBQUksS0FBSyxTQUFTLG9CQUFvQjtBQUMzRSx1QkFBaUI7QUFDakIsY0FBUSxnQkFBZ0IscUJBQXFCO0FBQUEsSUFDL0M7QUFFQSxRQUFJLENBQUMsV0FBVyxTQUFTLGNBQWMsR0FBSSxLQUFLLGVBQXlCLGlDQUFpQztBQUN4Ryx1QkFBMkI7QUFDM0IsY0FBUSxnQkFBZ0IscUJBQXFCO0FBQUEsSUFDL0M7QUFFQSxTQUNHLGNBQWtCLGFBQWEsY0FBa0IsYUFDbEQsU0FBUyxxQkFBcUIsR0FBSyxVQUFVLElBQUksR0FDakQ7QUFDQSxjQUFRLFdBQVcsK0JBQStCO0FBQ2xELHVCQUEyQjtBQUFBLElBQzdCO0FBRUEsUUFBSSxjQUFrQixhQUFhLHdCQUF3QixVQUFVLFFBQVEsR0FBRztBQUM5RSxjQUFRLFdBQVcscUJBQXFCO0FBQ3hDLHNCQUFnQjtBQUNoQix1QkFBaUI7QUFDakIsZ0JBQVUsY0FBa0I7QUFDNUIsZ0JBQVUsY0FBYztBQUN4QixnQkFBVSxtQkFBbUI7QUFDN0IsY0FBUSxnQkFBZ0IsbUJBQW1CO0FBQUEsSUFDN0M7QUFFQSxRQUFJLGNBQWtCLGFBQWEsU0FBUyxxQkFBcUIsSUFBTSxVQUFVLElBQUksR0FBRztBQUN0RixjQUFRLFdBQVcsK0JBQStCO0FBQ2xELHVCQUEyQjtBQUMzQixjQUFRLGdCQUFnQixvQkFBb0I7QUFBQSxJQUM5QztBQUVBLFFBQ0UsY0FBa0IsZ0JBQ2hCLENBQUMsU0FBUyxjQUFjLEVBQUksS0FBSyxTQUFTLGVBQWUsT0FBTyxLQUNoRSxTQUFTLDZCQUE2QixPQUFPLElBQy9DO0FBQ0Esc0JBQWdCO0FBQ2hCLHVCQUFpQjtBQUNqQixnQkFBVSxjQUFrQjtBQUM1QixnQkFBVSxjQUFjO0FBQ3hCLGdCQUFVLG1CQUFtQjtBQUM3QixjQUFRLGdCQUFnQixtQkFBbUI7QUFBQSxJQUM3QztBQUVBLFFBQUksY0FBa0IsY0FBYyxTQUFTLGNBQWMsRUFBSSxHQUFHO0FBQ2hFLFVBQUksUUFBUSxTQUFTO0FBQ3JCLFVBQUksUUFBa0IsWUFBWTtBQUNoQyxnQkFBa0I7QUFBQSxNQUNwQjtBQUNBLFVBQUksU0FBUyxNQUFNLEtBQUssTUFBTSxRQUFRLENBQUMsR0FBRztBQUN4QyxnQkFBUSxXQUFXLHdCQUF3QjtBQUMzQyx5QkFBaUI7QUFDakIsZ0JBQVEsZ0JBQWdCLGtCQUFrQjtBQUFBLE1BQzVDO0FBQUEsSUFDRjtBQUVBLFFBQUksY0FBa0IsY0FBYyxTQUFTLGNBQWMsRUFBSSxHQUFHO0FBQ2hFLFVBQUksUUFBUSxTQUFTO0FBQ3JCLFVBQUksUUFBa0IsWUFBWTtBQUNoQyxnQkFBa0I7QUFBQSxNQUNwQjtBQUNBLFVBQUksU0FBUyxNQUFNLEtBQUssTUFBTSxRQUFRLENBQUMsR0FBRztBQUN4QyxnQkFBUSxXQUFXLHlCQUF5QjtBQUM1Qyx5QkFBaUI7QUFDakIsZ0JBQVEsZ0JBQWdCLG1CQUFtQjtBQUFBLE1BQzdDO0FBQUEsSUFDRjtBQUVBLFFBQUksY0FBa0IsWUFBWSxTQUFTLGNBQWMsRUFBSSxHQUFHO0FBQzlELFVBQUksUUFBUSxTQUFTO0FBQ3JCLFVBQUksUUFBa0IsWUFBWTtBQUNoQyxnQkFBa0I7QUFBQSxNQUNwQjtBQUNBLFVBQUksU0FBUyxNQUFNLEtBQUssTUFBTSxRQUFRLENBQUMsR0FBRztBQUN4QyxnQkFBUSxXQUFXLHNCQUFzQjtBQUN6Qyx5QkFBaUI7QUFDakIsZ0JBQVEsZ0JBQWdCLGdCQUFnQjtBQUFBLE1BQzFDO0FBQUEsSUFDRjtBQUVBLFFBQUksY0FBa0IsV0FBVztBQUMvQixVQUFJLFNBQVMsY0FBYyxFQUFJLEdBQUc7QUFDaEMsWUFBSSxRQUFRLFNBQVM7QUFDckIsWUFBSSxRQUFrQixZQUFZO0FBQ2hDLGtCQUFrQjtBQUFBLFFBQ3BCO0FBQ0EsWUFBSSxTQUFTLE1BQU0sS0FBSyxNQUFNLFFBQVEsQ0FBQyxHQUFHO0FBQ3hDLGtCQUFRLFdBQVcsZ0NBQWdDO0FBQ25ELDJCQUFpQjtBQUNqQixrQkFBUSxnQkFBZ0IsZ0JBQWdCO0FBQUEsUUFDMUM7QUFBQSxNQUNGO0FBRUEsVUFBSSxTQUFTLHFCQUFxQixJQUFNLFVBQVUsSUFBSSxHQUFHO0FBQ3ZELGdCQUFRLFdBQVcsZ0NBQWdDO0FBQ25ELHlCQUEyQjtBQUMzQixnQkFBUSxnQkFBZ0Isa0JBQWtCO0FBQUEsTUFDNUM7QUFBQSxJQUNGO0FBR0EsUUFBSSxTQUFTLFNBQVMsTUFBTTtBQUMxQix1QkFBMkI7QUFDM0IsY0FBUSxnQkFBZ0IsZUFBZTtBQUFBLElBQ3pDO0FBR0EsUUFBSSxpQkFBaUIsS0FBSyxTQUFTLE9BQU8sVUFBVSxHQUFHO0FBQ3JELGNBQVEsV0FBVyxxQkFBcUI7QUFFeEMsVUFBSSxTQUFTLGNBQWMsRUFBSSxHQUFHO0FBQ2hDLHlCQUFpQjtBQUNqQixnQkFBUSxnQkFBZ0IscUJBQXFCO0FBQUEsTUFDL0MsT0FFSztBQUNILHlCQUEyQjtBQUMzQixnQkFBUSxnQkFBZ0IsU0FBUztBQUFBLE1BQ25DO0FBQUEsSUFDRjtBQUVBLFVBQU0sVUFBVSxTQUFTLGlCQUFpQixPQUFPO0FBRWpELFFBQUksV0FBZSxlQUFlO0FBRWhDLFVBQUksY0FBa0IsV0FBVztBQUMvQixnQkFBUSxXQUFXLDJCQUEyQjtBQUM5Qyx5QkFBMkI7QUFDM0IsZ0JBQVEsZ0JBQWdCLG9CQUFvQjtBQUFBLE1BQzlDLFdBRVMsY0FBa0IsWUFBWTtBQUNyQyxnQkFBUSxXQUFXLDJCQUEyQjtBQUM5Qyx5QkFBMkI7QUFDM0IsZ0JBQVEsZ0JBQWdCLHFCQUFxQjtBQUFBLE1BQy9DO0FBQUEsSUFDRjtBQUVBLFFBQUksV0FBZSxjQUFjO0FBRS9CLFVBQUksY0FBa0IsV0FBVztBQUMvQixnQkFBUSxXQUFXLDBCQUEwQjtBQUM3Qyx5QkFBMkI7QUFBQSxNQUM3QixXQUVTLGNBQWtCLFlBQVk7QUFDckMsZ0JBQVEsV0FBVywwQkFBMEI7QUFDN0MseUJBQTJCO0FBQUEsTUFDN0I7QUFBQSxJQUNGO0FBRUEsUUFBSSxXQUFlLGtCQUFrQixjQUFrQixhQUFhO0FBQ2xFLHVCQUEyQjtBQUMzQixjQUFRLFdBQVcsc0JBQXNCO0FBQ3pDLGNBQVEsZ0JBQWdCLGlCQUFpQjtBQUFBLElBQzNDO0FBRUEsU0FBSyxRQUFRLGFBQWEsV0FBZSxnQkFBZ0IsY0FBa0IsZUFBZTtBQUN4RixjQUFRLFdBQVcsdUJBQXVCO0FBQzFDLHVCQUEyQjtBQUUzQixVQUFJLFdBQWUsYUFBYTtBQUM5QixnQkFBUSxnQkFBZ0IsY0FBYztBQUFBLE1BQ3hDLFdBQVcsUUFBUSxXQUFXO0FBQzVCLGdCQUFRLGdCQUFnQixtQkFBbUI7QUFBQSxNQUM3QztBQUFBLElBQ0Y7QUFFQSxRQUFJLFFBQVEsZUFBZSxjQUFrQixXQUFXO0FBQ3RELGNBQVEsV0FBVywwQkFBMEI7QUFDN0MsdUJBQTJCO0FBQzNCLGNBQVEsZ0JBQWdCLHFCQUFxQjtBQUFBLElBQy9DO0FBR0EsUUFBSSxjQUFrQixpQkFBaUIsU0FBUyxTQUFTLFFBQVE7QUFDL0QsY0FBUSxXQUFXLHVCQUF1QjtBQUMxQyx1QkFBaUI7QUFDakIsY0FBUSxnQkFBZ0IsaUJBQWlCO0FBQUEsSUFDM0M7QUFFQSxXQUFPO0FBQUEsTUFDTDtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQWVPLFdBQVMsV0FDZCxTQUNBLFVBQ0EsVUFDQSxVQUNBLFdBQ0EsWUFDQSxXQUNBLFlBQ0EsUUFDQSxVQUNBO0FBRUEsUUFBSSxrQkFBa0I7QUFDdEIsUUFBSSxrQkFBa0I7QUFDdEIsUUFBSSxZQUFZO0FBQ2hCLFVBQU0sZUFBZSxnQkFBZ0IsTUFBTTtBQUczQyxRQUFJLGlCQUNGLGdCQUFvQixvQkFDaEIsS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJLFNBQVMsUUFBUSxDQUFDLElBQ3pDLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxTQUFTLFdBQVcsQ0FBQztBQUNsRCxRQUFJLGlCQUNGLGdCQUFvQixvQkFDaEIsS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJLFNBQVMsUUFBUSxDQUFDLElBQ3pDLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxTQUFTLFdBQVcsQ0FBQztBQUdsRCxRQUFJLFNBQVMsZUFBZTtBQUMxQixvQkFBd0I7QUFDeEIsY0FBUSxnQkFBZ0Isa0JBQWtCO0FBQUEsSUFDNUM7QUFFQSxRQUFJLFNBQVMsY0FBYyxFQUFFLEtBQWUsYUFBYSxNQUFNLEdBQUc7QUFDaEUsbUJBQWMsYUFBYSxJQUFLO0FBQ2hDLGNBQVEsZ0JBQWdCLG1CQUFtQjtBQUFBLElBQzdDO0FBRUEsUUFBSSxTQUFTLGNBQWMsR0FBRyxLQUFlLFlBQVksTUFBTSxHQUFHO0FBQ2hFLG9CQUF3QjtBQUN4QixjQUFRLGdCQUFnQixtQkFBbUI7QUFBQSxJQUM3QztBQUVBLFFBQUksU0FBUyxjQUFjLEdBQUcsR0FBRztBQUMvQixpQkFBVztBQUNYLGNBQVEsZ0JBQWdCLG9CQUFvQjtBQUFBLElBQzlDO0FBRUEsUUFBSSxVQUFVLEtBQUs7QUFDakIsaUJBQVcsU0FBUyxNQUFNLENBQUM7QUFBQSxJQUM3QjtBQUVBLFlBQVEsYUFBYSxJQUFJLGVBQWU7QUFHeEMsUUFDRyxDQUFDLFNBQVMsYUFBYSxTQUFTLFNBQVMsS0FDekMsVUFBVSxPQUFPLFNBQVMscUJBQXFCLElBQUksVUFBVSxJQUFJLEdBQ2xFO0FBRUEsZ0JBQVUsU0FBUztBQUNuQixnQkFBVSxnQkFBb0I7QUFDOUIsZ0JBQVUsY0FBa0I7QUFDNUIsZ0JBQVUsT0FBTztBQUNqQixnQkFBVSxXQUFXLGdCQUFnQixNQUFNO0FBQzNDLGdCQUFVLGNBQWM7QUFDeEIsZ0JBQVUsbUJBQW1CO0FBQzdCLGdCQUFVLFdBQVc7QUFFckIsVUFBSSxDQUFDLFNBQVMsYUFBYSxTQUFTLFNBQVMsR0FBRztBQUM5QyxnQkFBUSxnQkFBZ0Isb0JBQW9CO0FBQUEsTUFDOUMsV0FBVyxVQUFVLE9BQU8sU0FBUyxxQkFBcUIsSUFBSSxVQUFVLElBQUksR0FBRztBQUM3RSxnQkFBUSxnQkFBZ0Isc0JBQXNCO0FBQUEsTUFDaEQ7QUFDQSxhQUFPO0FBQUEsSUFDVDtBQUVBLGNBQVUsT0FBTztBQUNqQixjQUFVLFdBQVc7QUFHckIsUUFBSSxTQUFTLGNBQWMsRUFBRSxHQUFHO0FBQzlCLFVBQUksU0FBUyxZQUFZLFNBQVMsY0FBYztBQUU5QyxZQUFJLGdCQUFvQixtQkFBbUI7QUFDekMsNEJBQWtCO0FBQ2xCLGtCQUFRLFdBQVcsMEJBQTBCO0FBQUEsUUFDL0M7QUFBQSxNQUNGLE9BQU87QUFFTCxZQUFJLGdCQUFvQixrQkFBa0I7QUFDeEMsNEJBQWtCO0FBQ2xCLGtCQUFRLFdBQVcsMEJBQTBCO0FBQUEsUUFDL0M7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUdBLFFBQUksU0FBUyxNQUFNLFNBQVMsQ0FBQyxHQUFHO0FBQzlCLFVBQUksaUJBQWlCLFNBQVM7QUFDOUIsY0FBUSxXQUFXLGlCQUFpQjtBQUNwQyx5QkFBbUI7QUFBQSxJQUNyQjtBQUVBLFFBQUksU0FBUyxlQUFlLElBQU0sT0FBTyxHQUFHO0FBQzFDLHlCQUFtQjtBQUNuQixjQUFRLFdBQVcsMEJBQTBCO0FBQUEsSUFDL0M7QUFFQSxRQUFJLFNBQVMsZUFBZSxJQUFNLE9BQU8sR0FBRztBQUMxQyx5QkFBbUI7QUFDbkIsY0FBUSxXQUFXLDBCQUEwQjtBQUFBLElBQy9DO0FBRUEsUUFBSSxTQUFTLGVBQWUsSUFBTSxPQUFPLEtBQUssU0FBUyx1QkFBdUI7QUFDNUUseUJBQW1CO0FBQ25CLGNBQVEsV0FBVywwQkFBMEI7QUFBQSxJQUMvQztBQUVBLFFBQUksUUFBUSxjQUFjLGVBQWUsSUFBTSxPQUFPLEdBQUc7QUFDdkQseUJBQW1CO0FBQUEsSUFDckI7QUFHQSxRQUFJLGdCQUFvQixtQkFBbUI7QUFFekMsVUFBSSxTQUFTLGNBQWMsR0FBSSxHQUFHO0FBQ2hDLFlBQUksMEJBQTBCLFVBQVUsUUFBUSxHQUFHO0FBQ2pELDZCQUFtQjtBQUNuQixrQkFBUSxXQUFXLDBCQUEwQjtBQUFBLFFBQy9DLFdBQVcsU0FBUyxVQUFjLHFCQUFxQixTQUFTLFVBQWMsbUJBQW1CO0FBQy9GLDZCQUFtQjtBQUNuQixrQkFBUSxXQUFXLDBCQUEwQjtBQUFBLFFBQy9DO0FBQUEsTUFDRjtBQUdBLFVBQ0UsU0FBUyxpQkFBaUIsT0FBTyxLQUFTLGtCQUN6QyxTQUFTLGNBQWMsR0FBSSxLQUFLLFNBQVMsMEJBQTBCLEtBQU0sT0FBTyxJQUNqRjtBQUNBLDJCQUFtQjtBQUNuQixnQkFBUSxXQUFXLDBCQUEwQjtBQUFBLE1BQy9DO0FBQUEsSUFDRixPQUVLO0FBRUgsVUFBSSxTQUFTLGNBQWMsRUFBSSxLQUFLLFNBQVMsaUJBQXFCLGFBQWEsR0FBRztBQUNoRiwyQkFBbUI7QUFDbkIsZ0JBQVEsV0FBVywwQkFBMEI7QUFBQSxNQUMvQztBQUdBLFVBQ0UsU0FBUyxpQkFBaUIsT0FBTyxLQUFTLGtCQUN6QyxTQUFTLGNBQWMsR0FBSSxLQUFLLFNBQVMsMEJBQTBCLEtBQU0sT0FBTyxJQUNqRjtBQUNBLG9CQUFZO0FBQ1osZ0JBQVEsV0FBVywwQkFBMEI7QUFBQSxNQUMvQztBQUdBLFVBQUksU0FBUyxpQkFBaUIsT0FBTyxLQUFTLG1CQUFtQjtBQUMvRCxZQUFJLFNBQVMsTUFBTSxTQUFTLEVBQUcsR0FBRztBQUNoQyx1QkFBYTtBQUFBLFFBQ2Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUdBLFFBQUksU0FBUyxNQUFNLEtBQU87QUFDeEIseUJBQW1CO0FBQUEsSUFDckI7QUFFQSxRQUFJLFNBQVMsTUFBTSxLQUFPO0FBQ3hCLHlCQUFtQjtBQUFBLElBQ3JCO0FBRUEsUUFBSSxTQUFTLE1BQU0sS0FBTztBQUN4Qix5QkFBbUI7QUFBQSxJQUNyQjtBQUVBLFFBQUksU0FBUyxNQUFNLEtBQU87QUFDeEIseUJBQW1CO0FBQUEsSUFDckI7QUFFQSxRQUFJLFNBQVMsTUFBTSxLQUFPO0FBQ3hCLHlCQUFtQjtBQUFBLElBQ3JCO0FBR0EsUUFBSSxZQUNGLGdCQUFvQixvQkFDaEIsU0FBUyxZQUFZLGtCQUNyQixTQUFTLGVBQWU7QUFFOUIsUUFBSSxTQUFTLG9CQUFvQixTQUFTLGNBQWMsRUFBSSxHQUFHO0FBQzdELGtCQUFZO0FBQUEsSUFDZDtBQUdBLFFBQUksZ0JBQW9CLG1CQUFtQjtBQUV6QyxVQUFJLFNBQVMsU0FBUyxZQUFZO0FBQ2hDLGdCQUFRLFdBQVcsaUNBQWlDO0FBQ3BELHFCQUFhO0FBQUEsTUFDZjtBQUVBLFVBQUksU0FBUyxlQUFlLElBQU0sT0FBTyxHQUFHO0FBQzFDLHFCQUFhO0FBQ2IsZ0JBQVEsV0FBVywwQkFBMEI7QUFBQSxNQUMvQztBQUFBLElBQ0Y7QUFHQSxRQUFJLFNBQVMsZUFBZSxJQUFNLE9BQU8sR0FBRztBQUMxQyxtQkFBYTtBQUNiLGNBQVEsV0FBVywwQkFBMEI7QUFBQSxJQUMvQztBQUVBLFFBQUksU0FBUyxlQUFlLElBQU0sT0FBTyxHQUFHO0FBQzFDLG1CQUFhO0FBQ2IsY0FBUSxXQUFXLDBCQUEwQjtBQUFBLElBQy9DO0FBR0EsUUFBSSxTQUFTLE1BQU0sS0FBTztBQUN4QixtQkFBYTtBQUFBLElBQ2Y7QUFFQSxRQUFJLFNBQVMsTUFBTSxLQUFPO0FBQ3hCLG1CQUFhO0FBQUEsSUFDZjtBQUVBLFFBQUksU0FBUyxNQUFNLEtBQU87QUFDeEIsbUJBQWE7QUFBQSxJQUNmO0FBSUEsVUFBTSxvQkFBb0IsUUFBUSxZQUFZLFdBQVc7QUFFekQsUUFBSSxrQkFBa0IsTUFBTSxLQUFPO0FBQ2pDLG1CQUFhO0FBQUEsSUFDZjtBQUVBLFFBQUksa0JBQWtCLE1BQU0sS0FBTztBQUNqQyxtQkFBYTtBQUFBLElBQ2Y7QUFFQSxpQkFBYSxnQkFBb0Isb0JBQW9CLFNBQVMsWUFBWSxTQUFTO0FBR25GLFFBQUksVUFBVSxLQUFPO0FBQ25CLHdCQUFrQjtBQUdsQixVQUFJLFFBQVEsU0FBUztBQUNyQixVQUFJLFFBQVEsR0FBSSxtQkFBb0IsUUFBUSxNQUFPLE1BQU87QUFFMUQsY0FBUSxTQUFTO0FBQ2pCLFVBQUksUUFBUSxHQUFJLG1CQUFvQixrQkFBa0IsUUFBUSxNQUFPLE1BQU87QUFFNUUsY0FBUSxTQUFTO0FBQ2pCLFVBQUksUUFBUSxHQUFJLG1CQUFvQixrQkFBa0IsUUFBUSxNQUFPLE1BQU87QUFFNUUsY0FBUSxTQUFTO0FBQ2pCLFVBQUksUUFBUSxHQUFJLG1CQUFvQixrQkFBa0IsUUFBUSxNQUFPLE1BQU87QUFFNUUsbUJBQWE7QUFBQSxJQUNmO0FBR0EsUUFBSSxTQUFTLGNBQWMsR0FBSSxHQUFHO0FBQ2hDLGtCQUFZO0FBQ1osdUJBQWlCO0FBQUEsSUFDbkIsV0FBVyxTQUFTLGNBQWMsR0FBSSxHQUFHO0FBQ3ZDLGtCQUFZO0FBQ1osdUJBQWlCO0FBQUEsSUFDbkI7QUFHQSxRQUFJLFlBQVksRUFBRyxhQUFZO0FBRS9CLFFBQUksWUFBWSxHQUFJLGFBQVk7QUFHaEMsWUFBUSxXQUFXLHFCQUFxQjtBQUN4QyxZQUFRLFdBQVcsZ0JBQWdCLGdCQUFvQixvQkFBb0IsU0FBUyxNQUFNLFNBQVM7QUFDbkcsVUFBTSxzQkFBZ0MsaUNBQWlDLFNBQVM7QUFDaEYsVUFBTSxXQUNKLGdCQUFvQixvQkFBb0IsU0FBUyxNQUFNLHNCQUFzQixTQUFTLFNBQVM7QUFDakcsUUFBSSxNQUFNLEtBQUssTUFBTSxXQUFXLGNBQWM7QUFHOUMsUUFBSSxZQUFZLEVBQUcsYUFBWTtBQUUvQixRQUFJLFlBQVksR0FBSSxhQUFZO0FBR2hDLFlBQVEsV0FBVyxxQkFBcUI7QUFDeEMsWUFBUSxXQUFXLGdCQUFnQixnQkFBb0Isb0JBQW9CLFNBQVMsTUFBTSxTQUFTO0FBQ25HLFVBQU0sV0FDSixnQkFBb0Isb0JBQ2hCLFNBQVMsTUFBZ0IsaUNBQWlDLFNBQVMsSUFDbkUsU0FBUyxTQUFtQixpQ0FBaUMsU0FBUztBQUM1RSxRQUFJLE1BQU0sS0FBSyxNQUFNLFdBQVcsY0FBYztBQUc5QyxRQUFJLFNBQVMsV0FBVztBQUN0QixhQUFPLFNBQVMsMEJBQTBCLFlBQVk7QUFBQSxJQUN4RDtBQUNBLFFBQUksU0FBUyxXQUFXO0FBQ3RCLGFBQU8sU0FBUywwQkFBMEIsWUFBWTtBQUFBLElBQ3hEO0FBR0EsUUFBSSxnQkFBb0IsbUJBQW1CO0FBRXpDLFVBQUksU0FBUyxXQUFXLEVBQUksR0FBRztBQUM3QixlQUFpQjtBQUNqQixnQkFBUSxXQUFXLG1CQUE2QjtBQUFBLE1BQ2xEO0FBRUEsVUFBSSxTQUFTLFdBQVcsRUFBSSxHQUFHO0FBQzdCLGVBQWlCO0FBQ2pCLGdCQUFRLFdBQVcsbUJBQTZCO0FBQUEsTUFDbEQ7QUFFQSxVQUFJLFNBQVMsY0FBYyxHQUFHO0FBQzVCLGVBQWlCO0FBRWpCLGdCQUFRLFdBQVcscUJBQStCO0FBQUEsTUFDcEQ7QUFDQSxVQUFJLFVBQVU7QUFFWixZQUFJLFNBQVMsV0FBVyxFQUFLLEdBQUc7QUFDOUIsaUJBQWlCO0FBQ2pCLGtCQUFRLFdBQVcsbUJBQTZCO0FBQUEsUUFDbEQ7QUFFQSxZQUFJLFNBQVMsY0FBYyxHQUFHO0FBQzVCLGlCQUFpQjtBQUNqQixrQkFBUSxXQUFXLG1CQUE2QjtBQUFBLFFBQ2xEO0FBQUEsTUFDRjtBQUFBLElBQ0YsT0FFSztBQUNILFVBQUksVUFBVTtBQUVaLFlBQUksU0FBUyxXQUFXLEVBQUksR0FBRztBQUM3QixpQkFBaUI7QUFDakIsa0JBQVEsV0FBVyxxQkFBK0I7QUFBQSxRQUNwRDtBQUVBLFlBQUksU0FBUyxjQUFjLEdBQUc7QUFDNUIsaUJBQWlCO0FBRWpCLGtCQUFRLFdBQVcsbUJBQTZCO0FBQUEsUUFDbEQ7QUFBQSxNQUNGO0FBRUEsVUFBSSxTQUFTLFdBQVcsRUFBSSxHQUFHO0FBQzdCLGVBQWlCO0FBQ2pCLGdCQUFRLFdBQVcscUJBQStCO0FBQUEsTUFDcEQ7QUFFQSxVQUFJLFNBQVMsV0FBVyxFQUFJLEdBQUc7QUFDN0IsZUFBaUI7QUFDakIsZ0JBQVEsV0FBVyxxQkFBK0I7QUFBQSxNQUNwRDtBQUVBLFVBQUksU0FBUyxjQUFjLEdBQUc7QUFDNUIsZUFBaUI7QUFDakIsZ0JBQVEsV0FBVyxxQkFBK0I7QUFBQSxNQUNwRDtBQUFBLElBQ0Y7QUFHQSxVQUFNLFFBQVEsWUFBWSxzQkFBc0I7QUFFaEQsUUFBSSxlQUFlO0FBQ25CLFFBQUksVUFBVTtBQUNkLFFBQUksZUFBZTtBQUNuQixRQUFJLFVBQVU7QUFDZCxRQUFJLGVBQWUsZUFBZSxNQUFNO0FBR3hDLFFBQUksQ0FBQyxnQkFBZ0IsU0FBUyxjQUFjLEVBQUksS0FBSyxTQUFTLGtCQUFrQixJQUFJLEdBQUc7QUFDckYscUJBQWU7QUFBQSxJQUNqQjtBQUVBLFFBQUksU0FBUyxjQUFjLEVBQUksS0FBSyxTQUFTLGNBQWMsRUFBSSxHQUFHO0FBQ2hFLFVBQUksUUFBUSxJQUFJLGtCQUFrQixLQUFLLENBQUMsY0FBYztBQUNwRCx3QkFBZ0I7QUFDaEIsa0JBQVU7QUFBQSxNQUNaO0FBQUEsSUFDRjtBQUVBLFFBQUksU0FBUyxjQUFjLEVBQUksS0FBSyxDQUFDLGNBQWM7QUFDakQsc0JBQWdCO0FBQ2hCLGtCQUFZO0FBQUEsSUFDZDtBQUVBLFVBQU0sVUFBVSxTQUFTLFlBQVksSUFBSTtBQUV6QyxRQUFJLFNBQVMsY0FBYyxFQUFJLEtBQUssZ0JBQWdCLFFBQVEsTUFBTSxPQUFPLEdBQUc7QUFDMUUsaUJBQVc7QUFDWCxzQkFBZ0I7QUFBQSxJQUNsQjtBQUVBLFFBQUksU0FBUyxjQUFjLEVBQUksS0FBSyxnQkFBZ0IsUUFBUSxLQUFLLE9BQU8sR0FBRztBQUN6RSxpQkFBVztBQUNYLHNCQUFnQjtBQUFBLElBQ2xCO0FBR0EsUUFBSSxTQUFTLHFCQUFxQixHQUFLLFVBQVUsSUFBSSxHQUFHO0FBQ3RELHVCQUFpQjtBQUNqQixpQkFBVztBQUFBLElBQ2I7QUFFQSxRQUFJLFNBQVMscUJBQXFCLElBQU0sVUFBVSxJQUFJLEdBQUc7QUFDdkQsVUFBSSxTQUFTLGtCQUFrQixJQUFJLEdBQUc7QUFDcEMsdUJBQWU7QUFDZixrQkFBVTtBQUFBLE1BQ1o7QUFBQSxJQUNGO0FBRUEsV0FBTztBQUNQLFdBQU87QUFFUCxRQUFJLFdBQVcsRUFBRyxRQUFPO0FBQ3pCLFFBQUksV0FBVyxFQUFHLFFBQU87QUFFekIsWUFBUSxXQUFXLGNBQWM7QUFDakMsWUFBUSxXQUFXLGNBQWM7QUFHakMsUUFBSSxNQUFNLEVBQUcsT0FBTTtBQUNuQixRQUFJLE9BQWlCLGlCQUFrQixPQUFnQjtBQUV2RCxZQUFRLFdBQVcsZ0JBQWdCO0FBR25DLFVBQU0sU0FBUztBQUNmLFVBQU0sUUFBUSxTQUFTO0FBQ3ZCLFVBQU0sTUFBTSxTQUFTLFNBQVMsTUFBTSxPQUFPO0FBQzNDLFVBQU0sS0FBSyxRQUFRO0FBQ25CLFlBQVEsV0FBVyxlQUFlLEtBQUssTUFBTSxFQUFFO0FBQy9DLFlBQVEsV0FBVyxnQkFBZ0IsU0FBUztBQUM1QyxZQUFRLFdBQVcsZ0JBQWdCLEtBQUssTUFBTSxHQUFHO0FBR2pELFVBQU0sV0FBVyxLQUFlO0FBQ2hDLFVBQU0sWUFBWSxTQUFtQjtBQUNyQyxVQUFNLFFBQVEsS0FBSyxPQUFPLE1BQU0sTUFBTSxFQUFFO0FBQ3hDLFVBQU0sS0FBYyxVQUFVLEtBQUs7QUFDbkMsVUFBTSxXQUFXLEtBQUs7QUFDdEIsUUFBSSxPQUFPLFlBQVksV0FBVyxXQUFXO0FBRzdDLFFBQUksUUFBUSxRQUFRLGVBQW1CLHlCQUF5QixDQUFDLFNBQVMsV0FBVztBQUNuRixjQUFrQjtBQUFBLElBQ3BCO0FBRUEsUUFBSSxNQUFNLEtBQU0sUUFBTztBQUN2QixRQUFJLE9BQU8sRUFBRyxRQUFPO0FBR3JCLFVBQU0sbUNBQW1DO0FBQUEsTUFDdkM7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ1UsNEJBQTRCLE1BQU07QUFBQSxJQUM5QztBQUNBLFFBQUksb0JBQW9CLGlDQUFpQztBQUN6RCxRQUFJLGlCQUFpQixpQ0FBaUM7QUFHdEQsUUFBSSxZQUFZLENBQUMsU0FBUywwQkFBMEIsRUFBSSxHQUFHO0FBR3pELFVBQ0UsZ0JBQW9CLHNCQUNsQixVQUFVLE1BQVEsU0FBUyxTQUFTLFdBQVksU0FBUywwQkFBMEIsRUFBSSxJQUN6RjtBQUNBLDZCQUErQjtBQUMvQixnQkFBUSxXQUFXLDhCQUE4QjtBQUFBLE1BQ25EO0FBRUEsVUFDRSxnQkFBb0IscUJBQ25CLFNBQVMsU0FBUyxnQkFBZ0IsU0FBUywwQkFBMEIsRUFBSSxJQUMxRTtBQUNBLDZCQUErQjtBQUMvQixnQkFBUSxXQUFXLDZCQUE2QjtBQUFBLE1BQ2xEO0FBQUEsSUFDRjtBQUdBLFFBQ0UsQ0FBQyxTQUFTLFNBQVMsZUFDbkIsQ0FBQyxTQUFTLHFCQUFxQixJQUFLLFVBQVUsSUFBSSxLQUNsRCxDQUFDLFNBQVMscUJBQXFCLEVBQUksS0FDbkMsQ0FBQyxTQUFTLGVBQWUsSUFBTSxPQUFPLEdBQ3RDO0FBRUEsVUFBSSxTQUFTLFVBQWMsZUFBZTtBQUN4QyxzQkFBYyxhQUFhO0FBQUEsTUFDN0I7QUFFQSxVQUFJLFNBQVMsU0FBUyxjQUFjO0FBQ2xDLGdCQUFRLFdBQVcsdUJBQXVCO0FBQzFDLHFCQUF1QjtBQUFBLE1BQ3pCLE9BQU87QUFFTCxZQUFJLFNBQVMsV0FBVyxFQUFJLEtBQUssU0FBUyxlQUFlLElBQU0sT0FBTyxHQUFHO0FBQ3ZFLGtCQUFRLFdBQVcsbUNBQW1DO0FBQ3RELHdCQUF3QjtBQUFBLFFBQzFCO0FBRUEsWUFBSSxTQUFTLGNBQWMsRUFBSSxHQUFHO0FBQ2hDLGtCQUFRLFdBQVcscUJBQXFCO0FBQ3hDLHdCQUF3QjtBQUFBLFFBQzFCO0FBRUEsWUFBSSxTQUFTLFdBQVcsRUFBSSxHQUFHO0FBQzdCLGtCQUFRLFdBQVcscUJBQXFCO0FBQ3hDLHdCQUF3QjtBQUFBLFFBQzFCO0FBRUEsWUFBSSxrQkFBa0IsU0FBUyxlQUFlLEdBQUssT0FBTyxHQUFHO0FBQzNELHVCQUF1QjtBQUN2QixrQkFBUSxXQUFXLCtCQUErQjtBQUFBLFFBQ3BEO0FBQUEsTUFDRjtBQUdBLFVBQUksUUFBUSxJQUFJLGdCQUFnQixVQUFVLEtBQUssQ0FBQyxTQUFTLDBCQUEwQixDQUFHLEdBQUc7QUFDdkYsa0JBQVUsY0FBYztBQUV4QixZQUFJLFNBQVMsY0FBYyxFQUFJLEdBQUc7QUFDaEMsK0JBQXFCO0FBQ3JCLGtCQUFRLFdBQVcsa0JBQWtCO0FBQUEsUUFDdkMsT0FFSztBQUNILCtCQUErQjtBQUFBLFFBQ2pDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFHQSxZQUFRLFdBQVcsaUJBQWlCLEtBQUssTUFBTSxJQUFJO0FBQ25ELFlBQVE7QUFDUixZQUFRLFdBQVcsbUJBQW1CO0FBQ3RDLFlBQVE7QUFDUixZQUFRLFdBQVcsYUFBYSxLQUFLLE1BQU0sSUFBSTtBQUUvQyxVQUFNLFdBQVcsUUFBUSxJQUFJLG1CQUFtQjtBQUNoRCxZQUFRO0FBQ1IsWUFBUSxXQUFXLDBCQUEwQixLQUFLLE1BQU0sTUFBTSxRQUFRO0FBQ3RFLGNBQVUsU0FBUyxLQUFLLE1BQU0sSUFBSTtBQUdsQyxRQUFJLFVBQVUsS0FBTztBQUNuQixnQkFBVSxTQUFTLEtBQUssS0FBSyxVQUFVLFNBQW1CLFVBQVU7QUFBQSxJQUN0RTtBQUVBLFFBQUksVUFBVSxPQUFTLFNBQVMsZUFBZSxJQUFNLE9BQU8sR0FBRztBQUM3RCxnQkFBVSxTQUFTLEtBQUssS0FBSyxVQUFVLFNBQW1CLCtCQUErQjtBQUN6RixjQUFRLGdCQUFnQix1QkFBdUI7QUFBQSxJQUNqRDtBQUdBLFFBQUksVUFBVSxTQUFTLEtBQUssU0FBUywwQkFBMEIsRUFBSSxHQUFHO0FBQ3BFLGdCQUFVLFNBQVMsS0FBSyxLQUFLLFVBQVUsU0FBbUIsMkJBQTJCO0FBQ3JGLGNBQVEsZ0JBQWdCLG1CQUFtQjtBQUFBLElBQzdDO0FBRUEsUUFBSSxVQUFVLFVBQVUsR0FBRztBQUN6QixnQkFBVSxjQUFjO0FBQUEsSUFDMUI7QUFDQSxhQUFTLG1CQUFtQixVQUFVO0FBQUEsRUFDeEM7QUFZTyxXQUFTLGFBQWEsU0FBUyxVQUFVLFVBQVUsUUFBUSxtQkFBbUIsZUFBZTtBQUNsRyxRQUFJLGlCQUFpQixhQUFhLFVBQVU7QUFDMUMsYUFBTztBQUFBLElBQ1Q7QUFHQSxRQUFJLFVBQVUsT0FBUyxTQUFTLGVBQWUsR0FBSyxPQUFPLEdBQUc7QUFDNUQsYUFBTztBQUFBLElBQ1Q7QUFFQSxRQUFJLFNBQVMsU0FBUyxXQUFXO0FBQy9CLGFBQU87QUFBQSxJQUNUO0FBRUEsUUFBSSxTQUFTLFNBQVMsU0FBUztBQUM3QixhQUFPO0FBQUEsSUFDVDtBQUVBLFFBQUksZUFBeUIsZ0JBQWdCLFFBQVEsaUJBQWlCO0FBQ3RFLFFBQUksZUFBZSxLQUFLO0FBQ3RCLGFBQU87QUFBQSxJQUNUO0FBRUEsUUFBSSxTQUFTLFdBQVcsRUFBSSxHQUFHO0FBQzdCLHNCQUEwQjtBQUFBLElBQzVCO0FBRUEsUUFBSSxTQUFTLGVBQWUsR0FBSyxPQUFPLEdBQUc7QUFDekMsc0JBQTBCO0FBQUEsSUFDNUI7QUFFQSxRQUFJLGdCQUFnQjtBQUVwQixRQUFJLFNBQVMsY0FBYyxFQUFJLEdBQUc7QUFDaEMsc0JBQWdCO0FBQUEsSUFDbEI7QUFFQSxRQUFJLFVBQVUsSUFBTTtBQUNsQixZQUFNQyxXQUFVLFNBQVMsaUJBQWlCLE9BQU87QUFFakQsVUFBSUEsWUFBZSxjQUFjO0FBQy9CLGVBQU87QUFBQSxNQUNUO0FBRUEsVUFBSUEsWUFBZSxlQUFlO0FBQ2hDLHlCQUFpQjtBQUFBLE1BQ25CO0FBQUEsSUFDRjtBQUdBLFFBQUksVUFBVSxPQUFTLFNBQVMsaUJBQWlCLE9BQU8sS0FBUyxjQUFjO0FBQzdFLGFBQU87QUFBQSxJQUNUO0FBRUEsUUFBSSxTQUFTLGVBQWUsSUFBTSxPQUFPLEdBQUc7QUFDMUMsdUJBQWlCO0FBQUEsSUFDbkI7QUFHQSxRQUFJLGVBQWUsU0FBUztBQUM1QixRQUFJLFNBQVMsU0FBUyxTQUFTO0FBQzdCLHFCQUFlO0FBQUEsSUFDakI7QUFFQSxRQUFJLGVBQWU7QUFFbkIsUUFDRSxTQUFTLGlCQUFpQixPQUFPLEtBQVMscUJBQzFDLFNBQVMscUJBQXFCLElBQU0sVUFBVSxJQUFJLEdBQ2xEO0FBQ0EscUJBQWU7QUFBQSxJQUNqQjtBQUVBLFFBQUksU0FBUyxjQUFjLEVBQUksS0FBSyxDQUFDLGVBQWUsTUFBTSxHQUFHO0FBQzNELHNCQUFnQjtBQUFBLElBQ2xCO0FBRUEsUUFBSSxTQUFTLGVBQWUsSUFBTSxPQUFPLEdBQUc7QUFDMUMsVUFBSSxRQUFRLFNBQVM7QUFDckIsVUFBSSxRQUFrQixZQUFZO0FBQ2hDLGdCQUFrQjtBQUFBLE1BQ3BCO0FBQ0EsVUFBSSxTQUFTLE1BQU0sS0FBSyxNQUFNLFFBQVEsQ0FBQyxHQUFHO0FBQ3hDLHdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUVBLFFBQUksU0FBUyxlQUFlLElBQU0sT0FBTyxHQUFHO0FBQzFDLHNCQUFnQjtBQUFBLElBQ2xCO0FBRUEsUUFDRSxTQUFTLHFCQUFxQixJQUFNLFVBQVUsSUFBSSxNQUNqRCxTQUFTLFNBQVMsYUFBYSxTQUFTLFNBQVMsYUFDbEQ7QUFDQSxzQkFBZ0I7QUFBQSxJQUNsQjtBQUVBLFFBQ0UsU0FBUyxxQkFBcUIsS0FBTSxVQUFVLElBQUksTUFDakQsU0FBUyxpQkFBaUIsT0FBTyxLQUFTLGdCQUFnQixTQUFTLGlCQUFpQixPQUFPLEtBQVMsZUFDckc7QUFDQSxzQkFBZ0I7QUFBQSxJQUNsQjtBQUVBLFVBQU0sVUFBVSxTQUFTLGlCQUFpQixPQUFPO0FBQ2pELFFBQ1ksZ0NBQWdDLE9BQU8sS0FBSyxLQUN0RCxTQUFTLDBCQUFvQyxnQ0FBZ0MsT0FBTyxDQUFDLEdBQ3JGO0FBQ0Esc0JBQWdCO0FBQUEsSUFDbEI7QUFDQSxvQkFBZ0I7QUFFaEIsUUFBSSxnQkFBZ0IsU0FBUyxpQkFBaUI7QUFFOUMsUUFBSSxTQUFTLGNBQWMsR0FBSSxLQUFLLFNBQVMscUJBQXFCLEtBQU0sVUFBVSxJQUFJLEdBQUc7QUFDdkYscUJBQWU7QUFDZixzQkFBZ0I7QUFBQSxJQUNsQjtBQUNBLFFBQUksZ0JBQWdCLEVBQUcsaUJBQWdCO0FBQ3ZDLFFBQUksZ0JBQWdCLEdBQUksaUJBQWdCO0FBRXhDLFVBQU0sdUJBQ0osU0FBUyxVQUFjLGdCQUNULG9DQUNBO0FBQ2hCLFFBQUksV0FBVyxxQkFBcUIsYUFBYTtBQUNqRCxRQUFJLGVBQWUsRUFBRyxnQkFBZTtBQUNyQyxRQUFJLGVBQWUsR0FBSSxnQkFBZTtBQUN0QyxRQUFJLFdBQVcsRUFBRyxZQUFXO0FBQzdCLFFBQUksV0FBVyxJQUFLLFlBQVc7QUFFL0IsVUFBTSxzQkFDSixTQUFTLFVBQWMsZ0JBQ1QsbUNBQ0E7QUFDaEIsUUFBSSxVQUFVLG9CQUFvQixZQUFZO0FBQzlDLFFBQUksVUFBVSxFQUFHLFdBQVU7QUFDM0IsUUFBSSxVQUFVLElBQUssV0FBVTtBQUU3QixXQUFPLFFBQVEsSUFBSSxjQUFjLEtBQUssTUFBTSxlQUFlLFdBQVcsT0FBTyxHQUFHLGlCQUFpQjtBQUFBLEVBQ25HO0FBUU8sV0FBUyxnQ0FBZ0MsVUFBVSxVQUFVLFlBQVk7QUFDOUUsUUFBSSxDQUFDLFNBQVMsVUFBVSxLQUFLLENBQUMsU0FBUyxVQUFVLEdBQUc7QUFDbEQ7QUFBQSxJQUNGO0FBRUEsUUFBSSxTQUFTLHFCQUFxQixJQUFLLFVBQVUsSUFBSSxLQUFLLFdBQVcsVUFBVSxNQUFNO0FBQ25GLGlCQUFXLFdBQVc7QUFDdEI7QUFBQSxJQUNGO0FBRUEsUUFBSSxTQUFTLHFCQUFxQixJQUFNLFVBQVUsSUFBSSxLQUFLLFdBQVcsUUFBWSxlQUFlO0FBQy9GLGlCQUFXLFdBQVc7QUFDdEIsaUJBQVcsU0FBUztBQUNwQjtBQUFBLElBQ0Y7QUFFQSxTQUNHLFNBQVMscUJBQXFCLElBQU0sVUFBVSxJQUFJLEtBQUssU0FBUyxxQkFBcUIsSUFBTSxVQUFVLElBQUksTUFDMUcsV0FBVyxRQUFZLFlBQ3ZCO0FBQ0EsaUJBQVcsV0FBVztBQUN0QixpQkFBVyxTQUFTO0FBQ3BCO0FBQUEsSUFDRjtBQUVBLFFBQUksU0FBUyxjQUFjLEtBQU0sVUFBVSxJQUFJLEtBQUssV0FBVyxRQUFZLGVBQWU7QUFDeEYsaUJBQVcsV0FBVztBQUN0QjtBQUFBLElBQ0Y7QUFHQSxhQUFTLElBQUksR0FBRyxJQUFjLDRDQUE0QyxRQUFRLEtBQUs7QUFDckYsWUFBTSxRQUFrQiw0Q0FBNEMsQ0FBQztBQUNyRSxVQUFJLE1BQU0sUUFBUSxXQUFXLFFBQVEsU0FBUywwQkFBMEIsTUFBTSxNQUFNLEdBQUc7QUFDckYsWUFBSSxNQUFNLFNBQVMsS0FBTTtBQUV2QixxQkFBVyxXQUFXO0FBQ3RCO0FBQUEsUUFDRixPQUFPO0FBRUwscUJBQVcsU0FBUztBQUNwQjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFXTyxXQUFTLHNCQUFzQixTQUFTLFVBQVUsVUFBVSxRQUFRLFlBQVk7QUFDckYsUUFBSSxhQUFhLFNBQVMsVUFBVSxVQUFVLFFBQVEsTUFBTSxJQUFJLEdBQUc7QUFFakUsc0NBQWdDLFVBQVUsVUFBVSxVQUFVO0FBQzlELGVBQVMsd0JBQXdCO0FBQ2pDLGVBQVMsbUJBQW1CO0FBQUEsSUFDOUIsT0FBTztBQUVMLGlCQUFXLFdBQVc7QUFDdEIsVUFBSSxVQUFVLEtBQU87QUFDbkIsaUJBQVMsd0JBQXdCO0FBQUEsTUFDbkM7QUFBQSxJQUNGO0FBQ0EsUUFBSSxXQUFXLFNBQVUsUUFBTztBQUNoQyxXQUFPLFdBQVc7QUFBQSxFQUNwQjtBQVNPLFdBQVMsMkJBQTJCLFNBQVMsVUFBVSxVQUFVLFFBQVE7QUFDOUUsUUFBSSwwQkFBMEI7QUFFOUIsVUFBTSxnQkFDSCxTQUFTLGNBQWMsRUFBSSxLQUFLLFFBQVEsY0FBYyxVQUFVLFNBQVMsRUFBSSxNQUM5RSxTQUFTLFlBQVksUUFBUSxPQUFPLEtBQVM7QUFFL0MsVUFBTSxjQUNILFNBQVMsY0FBYyxHQUFJLEtBQUssUUFBUSxjQUFjLFVBQVUsU0FBUyxHQUFJLE1BQzlFLFNBQVMsWUFBWSxRQUFRLE9BQU8sS0FBUztBQUUvQyxRQUFJLE1BQU07QUFFVixRQUFJLFNBQVMsc0JBQXNCLE1BQU0sR0FBRztBQUMxQyxZQUFNO0FBQ04sY0FBUSxXQUFXLHdCQUF3QjtBQUFBLElBQzdDO0FBRUEsUUFBSSxPQUFPLFNBQVMscUJBQXFCLElBQU0sVUFBVSxJQUFJLEtBQWUsWUFBWSxNQUFNLEdBQUc7QUFDL0YsWUFBTTtBQUNOLGNBQVEsV0FBVyxzQkFBc0I7QUFBQSxJQUMzQztBQUVBLFFBQUksT0FBTyxTQUFTLHFCQUFxQixLQUFNLFVBQVUsSUFBSSxLQUFLLFFBQVEsSUFBSSxhQUFhLEdBQUc7QUFDNUYsWUFBTTtBQUFBLElBQ1I7QUFFQSxRQUFJLGdCQUFnQixVQUFVLE9BQVEsVUFBVSxPQUFTLFVBQVUsT0FBUyxDQUFDO0FBQzdFLFFBQUksT0FBTyxDQUFDLGFBQWEsU0FBUyxVQUFVLFVBQVUsUUFBUSxPQUFPLGFBQWEsR0FBRztBQUNuRixZQUFNO0FBQ04sY0FBUSxXQUFXLHNCQUFzQjtBQUFBLElBQzNDO0FBQ0EsUUFBSSxLQUFLO0FBRVAsVUFBSSxjQUFjO0FBQ2hCLGdCQUFRLFdBQVcsd0JBQXdCO0FBQzNDLGNBQU07QUFBQSxNQUNSO0FBRUEsVUFBSSxZQUFZO0FBQ2QsZ0JBQVEsV0FBVyxzQkFBc0I7QUFDekMsY0FBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBR0EsUUFBSSxDQUFDLE9BQU8sVUFBVSxLQUFPO0FBQzNCLGVBQVMsd0JBQXdCO0FBQUEsSUFDbkM7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQWNPLFdBQVMseUJBQ2QsWUFDQSxTQUNBLFVBQ0EsVUFDQSxZQUNBLGFBQ0EsWUFDQSxRQUNBO0FBQ0EsVUFBTSxhQUF1QixrQkFBa0IsTUFBTTtBQUNyRCxlQUFXLFNBQVMsVUFBVSxVQUFVLFlBQVksYUFBYSxZQUFZLFlBQVksWUFBWSxRQUFRLElBQUk7QUFDakgsV0FBTyxzQkFBc0IsU0FBUyxVQUFVLFVBQVUsUUFBUSxVQUFVO0FBQUEsRUFDOUU7QUFZTyxXQUFTLDJCQUEyQixZQUFZLFNBQVMsVUFBVSxVQUFVLE1BQU0sWUFBWTtBQUNwRyxRQUFJLENBQUMsMkJBQTJCLFNBQVMsVUFBVSxVQUFVLEtBQUssRUFBRSxHQUFHO0FBQ3JFLGFBQU87QUFBQSxJQUNUO0FBQ0EsVUFBTSxhQUFhLFNBQVMsWUFBWSxLQUFLLElBQUksT0FBTztBQUN4RCxVQUFNLGNBQWMsU0FBUyxhQUFhLElBQUk7QUFDOUMsV0FBTztBQUFBLE1BQ0w7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBLEtBQUs7QUFBQSxJQUNQO0FBQUEsRUFDRjtBQXdDTyxXQUFTLDhCQUE4QixZQUFZLFNBQVMsVUFBVSxVQUFVLFVBQVUsR0FBRztBQUNsRyxRQUFJLENBQUMsMkJBQTJCLFNBQVMsVUFBVSxVQUFVLEVBQUksR0FBRztBQUNsRSxhQUFPO0FBQUEsSUFDVDtBQUNBLFVBQU0sVUFBVSxTQUFTLGlCQUFpQixPQUFPO0FBQ2pELFVBQU0sYUFBdUIsd0JBQXdCLE9BQU87QUFDNUQsVUFBTSxPQUFPLElBQUksS0FBSztBQUN0QixTQUFLLEtBQUs7QUFDVixTQUFLLFVBQVU7QUFDZixVQUFNLGFBQXVCLCtCQUErQixPQUFPO0FBQ25FLFVBQU0sY0FBYyxTQUFTLGFBQWEsSUFBSTtBQUM5QyxZQUFRLGdCQUFnQixhQUFhO0FBQ3JDLFdBQU8seUJBQXlCLFlBQVksU0FBUyxVQUFVLFVBQVUsWUFBWSxhQUFhLFlBQVksRUFBSTtBQUFBLEVBQ3BIO0FBVU8sV0FBUyw4QkFBOEIsWUFBWSxTQUFTLFVBQVUsVUFBVSxVQUFVLEdBQUc7QUFDbEcsUUFBSSxDQUFDLDJCQUEyQixTQUFTLFVBQVUsVUFBVSxHQUFLLEdBQUc7QUFDbkUsYUFBTztBQUFBLElBQ1Q7QUFDQSxVQUFNLE9BQU8sSUFBSSxLQUFLO0FBQ3RCLFNBQUssS0FBSztBQUNWLFNBQUssVUFBVTtBQUNmLFFBQUksU0FBUyxZQUFZLEdBQUc7QUFDMUIsWUFBTSxTQUFTLFNBQVMsZ0JBQWdCO0FBQ3hDLFVBQUksUUFBUTtBQUNWLFlBQUksY0FBYyxTQUFTLGFBQWEsSUFBSSxJQUFJLE9BQU87QUFDdkQsWUFBSSxjQUFjLE9BQVE7QUFDeEIseUJBQWUsS0FBSztBQUFBLFFBQ3RCO0FBQ0EsZUFBTyx5QkFBeUIsWUFBWSxTQUFTLFVBQVUsVUFBVSxPQUFPLFFBQVEsYUFBYSxHQUFHLEdBQUs7QUFBQSxNQUMvRztBQUFBLElBQ0Y7QUFDQSxXQUFPLDJCQUEyQixZQUFZLFNBQVMsVUFBVSxVQUFVLE1BQU0sQ0FBQztBQUFBLEVBQ3BGO0FBT08sV0FBUyxxQkFBcUIsUUFBUTtBQUMzQyxVQUFNLEtBQUssT0FBTztBQUNsQixVQUFNLFFBQVEsS0FBSyxJQUFJLE9BQU8sUUFBUSxHQUFHO0FBQ3pDLFFBQUksTUFBTSxLQUFLLE1BQU0sUUFBUSxDQUFDLEdBQUc7QUFDL0IsYUFBTztBQUFBLElBQ1Q7QUFDQSxRQUFJLE1BQU0sS0FBSyxNQUFPLFFBQVEsSUFBSyxDQUFDLEdBQUc7QUFDckMsYUFBTztBQUFBLElBQ1Q7QUFDQSxRQUFJLE1BQU0sS0FBSyxNQUFPLFFBQVEsSUFBSyxDQUFDLEdBQUc7QUFDckMsYUFBTztBQUFBLElBQ1Q7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQVVPLFdBQVMsbUJBQW1CLFlBQVksU0FBUyxVQUFVLFVBQVUsTUFBTTtBQUNoRixRQUFJLGFBQWE7QUFDakIsUUFBSSxjQUFjO0FBRWxCLFlBQVEsS0FBSyxJQUFJO0FBQUEsTUFDZixLQUFLO0FBQ0gscUJBQWE7QUFDYjtBQUFBLE1BQ0YsS0FBSztBQUFBO0FBQUEsTUFDTCxLQUFLO0FBQ0gscUJBQXVCLDBCQUEwQixLQUFLLElBQUksS0FBSyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3RGO0FBQUEsTUFDRixLQUFLO0FBQ0gscUJBQXVCO0FBQ3ZCO0FBQUEsTUFDRixLQUFLO0FBQ0gsc0JBQWMsS0FBSyxNQUFNLFNBQVMsS0FBSyxDQUFDO0FBQ3hDLGVBQU8sOEJBQThCLFlBQVksU0FBUyxVQUFVLFVBQVUsTUFBTSxXQUFXO0FBQUEsTUFDakcsS0FBSztBQUNILGVBQU8sOEJBQThCLFlBQVksU0FBUyxVQUFVLFVBQVUsS0FBSyxPQUFPO0FBQUEsTUFDNUYsS0FBSztBQUFBO0FBQUEsTUFDTCxLQUFLO0FBQ0gsWUFBSSxTQUFTLFNBQVMsUUFBUTtBQUM1Qix1QkFBYTtBQUFBLFFBQ2Y7QUFDQTtBQUFBLE1BQ0YsS0FBSztBQUNILG1CQUFXLE9BQWlCLDJCQUEyQjtBQUNyRCxjQUFJLElBQUksS0FBSyxFQUFHO0FBQ2hCLGNBQUksU0FBUyxLQUFLLElBQUksSUFBSTtBQUN4QiwwQkFBYyxJQUFJO0FBQ2xCO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFDQSxlQUFPLDhCQUE4QixZQUFZLFNBQVMsVUFBVSxVQUFVLE1BQU0sV0FBVztBQUFBLE1BQ2pHLEtBQUs7QUFBQTtBQUFBLE1BQ0wsS0FBSztBQUNILFlBQUksU0FBUyxTQUFTLFVBQVUsU0FBUyxTQUFTLFVBQVU7QUFDMUQsdUJBQWE7QUFBQSxRQUNmO0FBQ0E7QUFBQSxNQUNGLEtBQUs7QUFDSCxxQkFBdUI7QUFDdkI7QUFBQSxNQUNGLEtBQUs7QUFDSCxjQUFNLE9BQU8sU0FBUyxLQUFLLFNBQVM7QUFDcEMsc0JBQWMsS0FBSyxJQUFJLE1BQU0sQ0FBQztBQUM5QixlQUFPLDhCQUE4QixZQUFZLFNBQVMsVUFBVSxVQUFVLE1BQU0sV0FBVztBQUFBLE1BQ2pHLEtBQUs7QUFDSCxZQUNFLFNBQVMsU0FBUyxRQUNsQixTQUFTLFNBQVMsVUFDbEIsU0FBUyxTQUFTLGNBQ2xCLFNBQVMsU0FBUyxhQUNsQixTQUFTLFNBQVMsYUFDbEI7QUFDQSx1QkFBdUI7QUFBQSxRQUN6QjtBQUNBO0FBQUEsTUFDRixLQUFLO0FBQ0gscUJBQXVCO0FBQ3ZCO0FBQUEsTUFDRixLQUFLO0FBQUE7QUFBQSxNQUNMLEtBQUs7QUFDSCxxQkFBdUIsMkJBQTJCLHFCQUFxQixRQUFRLENBQUM7QUFDaEY7QUFBQSxNQUNGLEtBQUs7QUFDSCxZQUFJLFNBQVMsU0FBUyxXQUFXO0FBQy9CLHVCQUFhO0FBQUEsUUFDZjtBQUNBO0FBQUEsTUFDRixLQUFLO0FBQUE7QUFBQSxNQUNMLEtBQUs7QUFDSCxxQkFBdUIsaUJBQWlCLFNBQVMsRUFBRTtBQUNuRDtBQUFBLE1BQ0YsS0FBSztBQUNILHFCQUF1QjtBQUN2QjtBQUFBLE1BQ0YsS0FBSztBQUNILGNBQU0sS0FBSyxTQUFTO0FBQ3BCLGNBQU0sT0FBTyxPQUFPLFFBQVEsSUFBSSxlQUFlO0FBRy9DLHNCQUFlLEtBQUssUUFBUztBQUM3QixZQUFJLGNBQWMsRUFBRyxlQUFjO0FBQ25DLFlBQUksTUFBTSxZQUFhLGVBQWM7QUFFckMsZUFBTywrQkFBK0IsWUFBWSxTQUFTLFVBQVUsVUFBVSxNQUFNLFdBQVc7QUFBQSxNQUNsRyxLQUFLO0FBQ0gscUJBQXVCLDhCQUE4QixxQkFBcUIsUUFBUSxDQUFDO0FBQ25GO0FBQUEsTUFDRixLQUFLO0FBQ0gsWUFBSSxTQUFTLFNBQVMsU0FBUztBQUM3Qix1QkFBYTtBQUFBLFFBQ2Y7QUFDQTtBQUFBO0FBQUEsTUFFRixLQUFLLEtBQU07QUFDVCxjQUFNLFdBQVcsU0FBUyxZQUFZLEtBQUssSUFBSSxPQUFPO0FBQ3RELGNBQU0sZ0JBQWdCLFNBQVMsY0FBYyxFQUFJO0FBR2pELFlBQUksQ0FBQyxpQkFBaUIsU0FBUyxlQUFlLE9BQU8sR0FBRztBQUN0RCx3QkFBYztBQUFBLFFBQ2hCLFdBRVMsaUJBQWlCLFNBQVMsVUFBVSxVQUFVLFFBQVEsR0FBRztBQUNoRSx3QkFBYztBQUFBLFFBQ2hCO0FBQ0EsZUFBTyw4QkFBOEIsWUFBWSxTQUFTLFVBQVUsVUFBVSxNQUFNLFdBQVc7QUFBQSxNQUNqRztBQUFBLE1BQ0EsS0FBSztBQUFBO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxLQUFLLEtBQU07QUFDVCxjQUFNLFdBQVcsU0FBUyxZQUFZLEtBQUssSUFBSSxPQUFPO0FBQ3RELFlBQUksaUJBQWlCLFNBQVMsVUFBVSxVQUFVLFFBQVEsR0FBRztBQUMzRCx3QkFBYztBQUFBLFFBQ2hCO0FBQ0EsZUFBTyw4QkFBOEIsWUFBWSxTQUFTLFVBQVUsVUFBVSxNQUFNLFdBQVc7QUFBQSxNQUNqRztBQUFBLE1BQ0EsS0FBSztBQUNILGNBQU0sVUFBVSxTQUFTLGlCQUFpQixPQUFPO0FBQ2pELHFCQUF1QjtBQUN2QixZQUFJLFdBQWUscUJBQXFCLFdBQWUsZ0JBQWdCLFdBQWUsY0FBYztBQUNsRyx3QkFBYztBQUFBLFFBQ2hCO0FBQ0E7QUFBQSxNQUNGLEtBQUs7QUFDSCxzQkFBd0I7QUFDeEIsZUFBTyw4QkFBOEIsWUFBWSxTQUFTLFVBQVUsVUFBVSxNQUFNLFdBQVc7QUFBQSxNQUNqRyxLQUFLO0FBQ0gscUJBQXVCO0FBQ3ZCO0FBQUEsTUFDRixLQUFLO0FBQ0gscUJBQXVCO0FBQ3ZCO0FBQUEsTUFDRixLQUFLO0FBQUE7QUFBQSxNQUNMLEtBQUs7QUFDSCxzQkFBYyxTQUFTO0FBQ3ZCLGVBQU8sOEJBQThCLFlBQVksU0FBUyxVQUFVLFVBQVUsTUFBTSxXQUFXO0FBQUEsTUFDakcsS0FBSztBQUNILHFCQUF1QjtBQUN2QjtBQUFBLE1BQ0YsS0FBSztBQUFBO0FBQUEsTUFDTCxLQUFLO0FBQ0gscUJBQWE7QUFDYjtBQUFBLE1BQ0YsS0FBSztBQUNILHFCQUFhLEtBQUssSUFBSSxLQUFLLHNCQUFzQixHQUFHLENBQUM7QUFDckQ7QUFBQSxNQUNGLEtBQUs7QUFDSCxxQkFBYSxTQUFTLFNBQVM7QUFDL0I7QUFBQSxNQUNGLEtBQUs7QUFDSCxzQkFBYyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLEdBQUcsUUFBUSxJQUFJLFlBQVk7QUFDdkUsZUFBTywrQkFBK0IsWUFBWSxTQUFTLFVBQVUsVUFBVSxNQUFNLFdBQVc7QUFBQSxNQUNsRyxLQUFLO0FBQ0gscUJBQXVCLDJCQUEyQixxQkFBcUIsUUFBUSxDQUFDO0FBQ2hGO0FBQUEsTUFDRixLQUFLO0FBQ0gsc0JBQWMsZ0JBQTBCLHdCQUF3QixRQUFRLElBQUksWUFBWTtBQUN4RixZQUFJLFNBQVMsU0FBUyxTQUFTO0FBQzdCLHlCQUFlO0FBQUEsUUFDakI7QUFDQSxlQUFPLCtCQUErQixZQUFZLFNBQVMsVUFBVSxVQUFVLE1BQU0sV0FBVztBQUFBLE1BQ2xHLEtBQUs7QUFDSCxtQkFBVyxPQUFpQixnQ0FBZ0M7QUFDMUQsY0FBSSxJQUFJLEtBQUssRUFBRztBQUNoQixjQUFJLFNBQVMsS0FBSyxJQUFJLElBQUk7QUFDeEIsMEJBQWMsSUFBSTtBQUNsQjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQ0EsZUFBTyw4QkFBOEIsWUFBWSxTQUFTLFVBQVUsVUFBVSxNQUFNLFdBQVc7QUFBQSxNQUNqRyxLQUFLO0FBQ0gsWUFBSSxDQUFDLFNBQVMsU0FBUyxTQUFTLENBQUMsU0FBUyxTQUFTLGFBQWEsQ0FBQyxTQUFTLFNBQVMsU0FBUztBQUMxRixrQkFBUSxXQUFXLG1CQUFtQjtBQUN0QyxpQkFBTztBQUFBLFFBQ1Q7QUFDQTtBQUFBLE1BQ0YsS0FBSztBQUNILHNCQUF3QjtBQUN4QixlQUFPLDhCQUE4QixZQUFZLFNBQVMsVUFBVSxVQUFVLE1BQU0sV0FBVztBQUFBLE1BQ2pHLEtBQUs7QUFDSCxxQkFBdUI7QUFDdkI7QUFBQSxNQUNGLEtBQUs7QUFDSCxxQkFBdUI7QUFDdkI7QUFBQSxNQUNGLEtBQUs7QUFDSCxzQkFBYztBQUNkLGVBQU8sOEJBQThCLFlBQVksU0FBUyxVQUFVLFVBQVUsTUFBTSxXQUFXO0FBQUEsTUFDakcsS0FBSztBQUNILHNCQUF3QjtBQUN4QixlQUFPLCtCQUErQixZQUFZLFNBQVMsVUFBVSxVQUFVLE1BQU0sV0FBVztBQUFBLE1BQ2xHLEtBQUs7QUFDSCxzQkFBYyxTQUFTLFFBQVE7QUFDL0IsZUFBTyw4QkFBOEIsWUFBWSxTQUFTLFVBQVUsVUFBVSxNQUFNLFdBQVc7QUFBQSxNQUNqRyxLQUFLO0FBQ0gsZUFBTyw4QkFBOEIsWUFBWSxTQUFTLFVBQVUsVUFBVSxLQUFLLE9BQU87QUFBQSxNQUM1RixLQUFLO0FBQ0gsWUFBSSxRQUFrQixhQUFhLEtBQUssRUFBRTtBQUMxQyxZQUFJLFNBQVMsR0FBRztBQUNkLGtCQUFRO0FBQUEsUUFDVjtBQUNBLFlBQUksU0FBVSxLQUFLLEtBQUssTUFBTztBQUMvQixZQUFJLFNBQVMsSUFBSTtBQUNmLHVCQUF1QjtBQUFBLFFBQ3pCLFdBQVcsU0FBUyxJQUFJO0FBQ3RCLHVCQUFhO0FBQUEsUUFDZixXQUFXLFNBQVMsSUFBSTtBQUN0Qix1QkFBdUI7QUFBQSxRQUN6QixPQUFPO0FBQ0wsdUJBQXVCO0FBQUEsUUFDekI7QUFDQTtBQUFBLE1BQ0YsS0FBSztBQUFBO0FBQUEsTUFDTCxLQUFLO0FBQ0gsWUFBSSxRQUFRLFNBQVM7QUFDckIsWUFBSSxRQUFrQixZQUFZO0FBQ2hDLGtCQUFrQjtBQUFBLFFBQ3BCO0FBQ0EsWUFBSSxTQUFTLEtBQUssS0FBSyxPQUFPO0FBQzVCLHVCQUFhO0FBQUEsUUFDZjtBQUNBO0FBQUEsTUFDRixLQUFLO0FBQUE7QUFBQSxNQUNMLEtBQUs7QUFDSCxxQkFBdUIsNEJBQTRCLHFCQUFxQixRQUFRLENBQUM7QUFDakY7QUFBQSxNQUNGLEtBQUs7QUFDSCxZQUFJLFNBQVMsU0FBUyxTQUFTLEdBQUc7QUFDaEMsdUJBQWE7QUFBQSxRQUNmO0FBQ0E7QUFBQSxNQUNGLEtBQUs7QUFDSCxxQkFBdUI7QUFDdkI7QUFBQSxNQUNGLEtBQUs7QUFDSCxZQUFJLGdCQUFnQixTQUFTO0FBQzdCLFlBQUksZ0JBQWdCLEtBQUssS0FBSyxNQUFNLEdBQUc7QUFDckM7QUFBQSxRQUNGO0FBQ0EsWUFBSSxnQkFBZ0IsR0FBRztBQUNyQixrQkFBUSxXQUFXLG1CQUFtQjtBQUN0QyxpQkFBTztBQUFBLFFBQ1Q7QUFDQSxxQkFBdUIsOEJBQThCLGdCQUFnQixDQUFDO0FBQ3RFO0FBQUEsTUFDRixLQUFLO0FBQ0gsWUFBSSxTQUFTLFNBQVMsU0FBUyxTQUFTLFNBQVMsYUFBYSxTQUFTLFNBQVMsU0FBUztBQUN2Rix1QkFBYTtBQUFBLFFBQ2Y7QUFDQTtBQUFBLE1BQ0Y7QUFHRSxZQUFJLGtCQUFrQixLQUFLLEVBQUUsR0FBRztBQUM5QixpQkFBTyw4QkFBOEIsWUFBWSxTQUFTLFVBQVUsVUFBVSxJQUFJO0FBQUEsUUFDcEY7QUFDQTtBQUFBLElBQ0o7QUFFQSxZQUFRLGdCQUFnQixhQUFhO0FBQ3JDLFdBQU8sMkJBQTJCLFlBQVksU0FBUyxVQUFVLFVBQVUsTUFBTSxVQUFVO0FBQUEsRUFDN0Y7QUFRQSxXQUFTLGdCQUFnQixPQUFPLE9BQU87QUFFckMsWUFBUSxLQUFLLElBQUksS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUM7QUFDdEMsVUFBTSxRQUFRLEtBQUssTUFBTSxTQUFTLE1BQU0sU0FBUyxFQUFFO0FBQ25ELFdBQU8sTUFBTSxLQUFLO0FBQUEsRUFDcEI7QUFXTyxXQUFTLDZCQUE2QixZQUFZLFNBQVMsVUFBVSxVQUFVLGFBQWE7QUFDakcsVUFBTSxhQUFhLFNBQVMsWUFBWSxLQUFPLE9BQU87QUFDdEQsV0FBTyx5QkFBeUIsWUFBWSxTQUFTLFVBQVUsVUFBVSxZQUFZLGFBQWEsR0FBRyxHQUFLO0FBQUEsRUFDNUc7QUFPQSxXQUFTLGdCQUFnQixRQUFRO0FBQy9CLFFBQUksTUFBTTtBQUNWLFFBQUksU0FBVSxPQUFNLFNBQVMsTUFBTSxFQUFFO0FBQUEsUUFDaEMsU0FBUSxNQUFNLG9CQUFvQjtBQUN2QyxXQUFPO0FBQUEsRUFDVDtBQU9BLFdBQVMsZUFBZSxRQUFRO0FBQzlCLFdBQU8sZ0JBQWdCLE1BQU0sS0FBUztBQUFBLEVBQ3hDO0FBS0EsTUFBTSxrQkFBTixNQUFzQjtBQUFBLElBQ3BCLFVBQVU7QUFBQSxJQUNWLFlBQVk7QUFBQSxJQUNaLFVBQVU7QUFBQSxJQUNWLFlBQVk7QUFBQSxJQUNaLGlCQUFpQjtBQUFBLElBQ2pCLGlCQUFpQjtBQUFBLElBQ2pCLGlCQUFpQjtBQUFBLElBQ2pCLGlCQUFpQjtBQUFBLElBQ2pCLDBCQUEwQjtBQUFBLElBQzFCLFlBQVk7QUFBQSxJQUNaLHFCQUFxQjtBQUFBLElBQ3JCLG9CQUFvQjtBQUFBLElBQ3BCLGNBQWM7QUFBQSxJQUNkLHNCQUFzQjtBQUFBLElBQ3RCLGFBQWE7QUFBQSxJQUNiLGlCQUFpQjtBQUFBLElBQ2pCLGtCQUFrQjtBQUFBLElBQ2xCLG9CQUFvQjtBQUFBLElBQ3BCLFlBQVk7QUFBQSxJQUNaLFdBQVc7QUFBQSxJQUNYLFdBQVc7QUFBQSxJQUNYLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxJQUNmLFVBQVU7QUFBQSxJQUNWLFlBQVk7QUFBQSxJQUNaLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLGNBQWM7QUFBQSxJQUNkLGFBQWE7QUFBQSxJQUNiLFNBQVM7QUFBQSxJQUNULGdCQUFnQjtBQUFBLElBQ2hCLFlBQVk7QUFBQSxFQUNkO0FBSUEsTUFBTSxjQUFOLE1BQWtCO0FBQUEsSUFDaEIscUJBQXFCO0FBQUEsSUFDckIscUJBQXFCO0FBQUEsSUFDckIsZ0JBQWdCO0FBQUEsSUFDaEIsZ0JBQWdCO0FBQUEsSUFDaEIsY0FBYztBQUFBLElBQ2QsY0FBYztBQUFBLElBQ2QsZUFBZTtBQUFBLElBQ2YsZ0JBQWdCO0FBQUEsSUFDaEIsZ0JBQWdCO0FBQUEsSUFDaEIsaUJBQWlCO0FBQUEsSUFDakIsbUJBQW1CO0FBQUEsSUFDbkIsYUFBYTtBQUFBLElBQ2IseUJBQXlCO0FBQUEsSUFDekIseUJBQXlCO0FBQUEsSUFDekIseUJBQXlCO0FBQUEsSUFDekIsWUFBWSxJQUFJLGdCQUFnQjtBQUFBLEVBQ2xDO0FBSUEsTUFBTSxnQkFBTixNQUFvQjtBQUFBLElBQ2xCLGdCQUFnQjtBQUFBLElBQ2hCLGNBQWM7QUFBQSxJQUNkLG9CQUFvQjtBQUFBLElBQ3BCLG9CQUFvQjtBQUFBLElBQ3BCLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxJQUNmLGNBQWM7QUFBQSxJQUNkLG1CQUFtQjtBQUFBLElBQ25CLFdBQVc7QUFBQSxJQUNYLE9BQU8sSUFBSSxZQUFZO0FBQUEsRUFDekI7QUFJQSxNQUFNLG1CQUFOLE1BQXVCO0FBQUE7QUFBQSxJQUVyQixZQUFZO0FBQUE7QUFBQSxJQUVaLFlBQVk7QUFBQTtBQUFBLElBRVosWUFBWTtBQUFBO0FBQUEsSUFFWixTQUFTO0FBQUE7QUFBQSxJQUVULFlBQVk7QUFBQTtBQUFBLElBRVosaUJBQWlCO0FBQUE7QUFBQSxJQUVqQixhQUFhO0FBQUE7QUFBQSxJQUViLFVBQVUsSUFBSSxjQUFjO0FBQUEsRUFDOUI7QUFXTyxXQUFTLGNBQWMsU0FBUyxVQUFVLFVBQVUsTUFBTSxhQUFhO0FBQzVFLFFBQUksQ0FBQyxVQUFVO0FBQ2IsY0FBUSxNQUFNLG9CQUFvQjtBQUNsQztBQUFBLElBQ0Y7QUFDQSxRQUFJLENBQUMsVUFBVTtBQUNiLGNBQVEsTUFBTSxvQkFBb0I7QUFDbEM7QUFBQSxJQUNGO0FBQ0EsVUFBTSxhQUFhLFVBQVUsT0FBTztBQUNwQyxVQUFNLGFBQWEsVUFBVSxPQUFPO0FBQ3BDLFVBQU0sY0FBYyxVQUFVLFFBQVE7QUFDdEMsVUFBTSxjQUFjLFVBQVUsUUFBUTtBQUN0QyxVQUFNLGNBQWMsVUFBVSxRQUFRO0FBQ3RDLFVBQU0sY0FBYyxVQUFVLFFBQVE7QUFDdEMsVUFBTSxVQUFVLFVBQVUsSUFBSTtBQUM5QixVQUFNLFVBQVUsVUFBVSxJQUFJO0FBRTlCLFlBQVEsSUFBSSxlQUFlO0FBQzNCLGVBQVcsSUFBSSxlQUFlO0FBQzlCLGVBQVcsSUFBSSxlQUFlO0FBRTlCLFVBQU0sVUFBVSxJQUFJLFdBQVc7QUFDL0IsVUFBTSxnQkFBZ0IsSUFBSSxXQUFXO0FBQ3JDLFVBQU0sZ0JBQWdCLElBQUksV0FBVztBQUNyQyxRQUFJLFNBQVM7QUFDYixRQUFJLGVBQWU7QUFDbkIsUUFBSSxlQUFlO0FBR25CLFFBQUksS0FBSyxNQUFNLEtBQU87QUFDcEIsZUFBUyw2QkFBNkIsU0FBUyxTQUFTLFVBQVUsVUFBVSxXQUFXO0FBQ3ZGLHFCQUFlLDZCQUE2QixTQUFTLFlBQVksYUFBYSxhQUFhLFdBQVc7QUFDdEcscUJBQWUsNkJBQTZCLFNBQVMsWUFBWSxhQUFhLGFBQWEsV0FBVztBQUFBLElBQ3hHLE9BRUs7QUFDSCxlQUFTLG1CQUFtQixTQUFTLFNBQVMsVUFBVSxVQUFVLElBQUk7QUFDdEUscUJBQWUsbUJBQW1CLFNBQVMsWUFBWSxhQUFhLGFBQWEsT0FBTztBQUN4RixxQkFBZSxtQkFBbUIsU0FBUyxZQUFZLGFBQWEsYUFBYSxPQUFPO0FBQUEsSUFDMUY7QUFFQSxVQUFNLFNBQVMsSUFBSSxpQkFBaUI7QUFDcEMsUUFBSSxRQUFRLFFBQVE7QUFDbEIsYUFBTyxZQUFZLFFBQVE7QUFDM0IsYUFBTyxZQUFZLGNBQWM7QUFDakMsYUFBTyxZQUFZLGNBQWM7QUFBQSxJQUNuQyxPQUFPO0FBQ0wsYUFBTyxZQUFZO0FBQ25CLGFBQU8sWUFBWTtBQUNuQixhQUFPLFlBQVk7QUFBQSxJQUNyQjtBQUNBLFdBQU8sU0FBUyxRQUFRO0FBRXhCLFFBQ0UsUUFBUSxXQUFXLHlCQUNuQixRQUFRLFdBQVcsdUJBQ25CLFFBQVEsV0FBVyx1QkFDbkIsUUFBUSxXQUFXLG9CQUNuQixRQUFRLFdBQVcsa0JBQ25CO0FBQ0EsYUFBTyxpQkFBaUI7QUFDeEIsYUFBTztBQUFBLElBQ1Q7QUFDQSxXQUFPLFlBQVksUUFBUSxJQUFJLHlCQUF5QjtBQUN4RCxXQUFPLGFBQWEsUUFBUSxJQUFJLHNCQUFzQjtBQUV0RCxVQUFNLE9BQU8sUUFBUTtBQUNyQixVQUFNLGFBQWEsT0FBTztBQUMxQixlQUFXLGdCQUFvQixlQUFlLFFBQVEsYUFBYTtBQUNuRSxlQUFXLGNBQWtCLGFBQWEsUUFBUSxXQUFXO0FBQzdELGVBQVcsb0JBQXdCLGFBQWEsS0FBSyxzQkFBc0IsQ0FBQyxDQUFDO0FBQzdFLGVBQVcsb0JBQXdCLGFBQWEsS0FBSyxzQkFBc0IsQ0FBQyxDQUFDO0FBQzdFLGVBQVcsV0FBVyxTQUFTLFFBQVEsSUFBSTtBQUMzQyxlQUFXLGVBQW1CLGNBQWMsUUFBUSxRQUFRO0FBQzVELGVBQVcsY0FBYyxRQUFRO0FBQ2pDLGVBQVcsbUJBQW1CLFFBQVE7QUFDdEMsZUFBVyxXQUFXLFFBQVE7QUFFOUIsVUFBTSxjQUFjLFdBQVc7QUFDL0IsZ0JBQVkscUJBQXFCLEtBQUs7QUFDdEMsZ0JBQVkscUJBQXFCLEtBQUs7QUFDdEMsZ0JBQVksZ0JBQWdCLEtBQUs7QUFDakMsZ0JBQVksZ0JBQWdCLEtBQUs7QUFDakMsZ0JBQVksY0FBYyxLQUFLO0FBQy9CLGdCQUFZLGNBQWMsS0FBSztBQUMvQixnQkFBWSxlQUFlLEtBQUs7QUFDaEMsZ0JBQVksZ0JBQWdCLEtBQUs7QUFDakMsZ0JBQVksZ0JBQWdCLEtBQUs7QUFDakMsZ0JBQVksaUJBQWlCLEtBQUs7QUFDbEMsZ0JBQVksbUJBQW1CLEtBQUs7QUFDcEMsZ0JBQVksYUFBYSxLQUFLO0FBQzlCLGdCQUFZLHlCQUF5QixLQUFLO0FBQzFDLGdCQUFZLHlCQUF5QixXQUFXLFdBQVc7QUFDM0QsZ0JBQVkseUJBQXlCLFdBQVcsV0FBVztBQUUzRCxVQUFNLGFBQWEsWUFBWTtBQUMvQixlQUFXLFVBQVUsS0FBSztBQUMxQixlQUFXLFlBQVksS0FBSztBQUM1QixlQUFXLFVBQVUsS0FBSztBQUMxQixlQUFXLFlBQVksS0FBSztBQUM1QixlQUFXLGlCQUFpQixLQUFLO0FBQ2pDLGVBQVcsaUJBQWlCLEtBQUs7QUFDakMsZUFBVyxpQkFBaUIsS0FBSztBQUNqQyxlQUFXLGlCQUFpQixLQUFLO0FBQ2pDLGVBQVcsaUJBQWlCLEtBQUs7QUFDakMsZUFBVywwQkFBMEIsS0FBSztBQUMxQyxlQUFXLFlBQVksS0FBSztBQUM1QixlQUFXLHFCQUFxQixLQUFLO0FBQ3JDLGVBQVcsb0JBQW9CLEtBQUs7QUFDcEMsZUFBVyxjQUFjLEtBQUs7QUFDOUIsZUFBVyxzQkFBc0IsS0FBSztBQUN0QyxlQUFXLGFBQWEsS0FBSztBQUM3QixlQUFXLGlCQUFpQixLQUFLO0FBQ2pDLGVBQVcsa0JBQWtCLEtBQUs7QUFDbEMsZUFBVyxvQkFBb0IsS0FBSztBQUNwQyxlQUFXLFlBQVksS0FBSztBQUM1QixlQUFXLFdBQVcsS0FBSztBQUMzQixlQUFXLFdBQVcsS0FBSztBQUMzQixlQUFXLFFBQVEsS0FBSztBQUN4QixlQUFXLGVBQWUsS0FBSztBQUMvQixlQUFXLFVBQVUsS0FBSztBQUMxQixlQUFXLFlBQVksS0FBSztBQUM1QixlQUFXLFNBQVMsS0FBSztBQUN6QixlQUFXLE9BQU8sS0FBSztBQUN2QixlQUFXLGNBQWMsS0FBSztBQUM5QixlQUFXLGFBQWEsS0FBSztBQUM3QixlQUFXLFNBQVMsS0FBSztBQUN6QixlQUFXLGdCQUFnQixLQUFLO0FBQ2hDLGVBQVcsWUFBWSxLQUFLO0FBRTVCLFdBQU87QUFBQSxFQUNUO0FBT0EsV0FBUyxVQUFVLEtBQUs7QUFDdEIsVUFBTSxPQUFPLElBQUksSUFBSSxZQUFZO0FBRWpDLGVBQVcsT0FBTyxPQUFPLG9CQUFvQixHQUFHLEdBQUc7QUFDakQsWUFBTSxRQUFRLElBQUksR0FBRztBQUVyQixVQUFJLE1BQU0sUUFBUSxLQUFLLEdBQUc7QUFDeEIsYUFBSyxHQUFHLElBQUksTUFBTSxJQUFJLENBQUMsTUFBTyxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBRTtBQUFBLE1BQ3ZGLFdBQVcsT0FBTyxVQUFVLFlBQVksVUFBVSxNQUFNO0FBQ3RELFlBQUksT0FBTyxNQUFNLFVBQVUsWUFBWTtBQUNyQyxlQUFLLEdBQUcsSUFBSSxNQUFNLE1BQU07QUFBQSxRQUMxQixPQUFPO0FBQ0wsZUFBSyxHQUFHLElBQUksVUFBVSxLQUFLO0FBQUEsUUFDN0I7QUFBQSxNQUNGLE9BQU87QUFDTCxhQUFLLEdBQUcsSUFBSTtBQUFBLE1BQ2Q7QUFBQSxJQUNGO0FBRUEsV0FBTztBQUFBLEVBQ1Q7QUFZQSxXQUFTLCtCQUErQixZQUFZLFNBQVMsVUFBVSxVQUFVLE1BQU0sUUFBUTtBQUM3RixVQUFNLGFBQWEsU0FBUyxZQUFZLEtBQUssSUFBSSxPQUFPO0FBQ3hELFVBQU0sZUFBZSxnQkFBZ0IsS0FBSyxFQUFFO0FBQzVDLFVBQU0sY0FBYztBQUFBLE1BQ2xCO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUVBLGVBQVcsT0FBTztBQUNsQixlQUFXLFdBQVc7QUFHdEIsUUFBSSxLQUFLLE1BQU0sT0FBUyxVQUFVLEdBQUc7QUFDbkMsaUJBQVcsU0FBUztBQUFBLElBQ3RCLE9BQU87QUFDTCxpQkFBVyxTQUFTO0FBQUEsSUFDdEI7QUFDQSxZQUFRLGdCQUFnQixnQkFBZ0I7QUFFeEMsV0FBTyxzQkFBc0IsU0FBUyxVQUFVLFVBQVUsS0FBSyxJQUFJLFVBQVU7QUFBQSxFQUMvRTtBQWNBLFdBQVMsNEJBQTRCLFlBQVksU0FBUyxVQUFVLFVBQVUsWUFBWSxjQUFjLFFBQVE7QUFFOUcsUUFBSSxTQUFTLEVBQUcsVUFBUztBQUN6QixRQUFJLE1BQU0sT0FBUSxVQUFTO0FBRzNCLFVBQU0sU0FBUywyQkFBMkIsU0FBUyxVQUFVLFVBQVUsUUFBUSxZQUFZLFlBQVksS0FBSztBQUc1RyxVQUFNLGNBQWMsS0FBSyxLQUFLLFNBQVMsT0FBTyxhQUFhO0FBQzNELFdBQU87QUFBQSxFQUNUO0FBVUEsV0FBUyw4QkFBOEIsWUFBWSxTQUFTLFVBQVUsVUFBVSxNQUFNLFFBQVE7QUFDNUYsVUFBTSxhQUFhLFNBQVMsWUFBWSxLQUFLLElBQUksT0FBTztBQUN4RCxVQUFNLGVBQWUsZ0JBQWdCLEtBQUssRUFBRTtBQUM1QyxRQUFJLGNBQWM7QUFDbEIsUUFBSSxDQUFDLDJCQUEyQixTQUFTLFVBQVUsVUFBVSxLQUFLLEVBQUUsR0FBRztBQUNyRSxhQUFPO0FBQUEsSUFDVDtBQUNBLFFBQUksU0FBUyxHQUFHO0FBQ2Qsb0JBQWMsZ0JBQWdCLFNBQVMsVUFBVSxVQUFVLFFBQVEsWUFBWSxZQUFZLGNBQWMsS0FBSyxFQUFFO0FBQUEsSUFDbEg7QUFFQSxlQUFXLE9BQU87QUFDbEIsZUFBVyxXQUFXO0FBQ3RCLGVBQVcsU0FBUztBQUNwQixZQUFRLGdCQUFnQixnQkFBZ0I7QUFFeEMsV0FBTyxzQkFBc0IsU0FBUyxVQUFVLFVBQVUsS0FBSyxJQUFJLFVBQVU7QUFBQSxFQUMvRTtBQVlBLFdBQVMsZ0JBQWdCLFNBQVMsVUFBVSxVQUFVLGFBQWEsV0FBVyxZQUFZLGNBQWMsUUFBUTtBQUU5RyxVQUFNLGVBQWU7QUFBQSxNQUNuQixlQUFlLFNBQVMsVUFBVSxVQUFVLEdBQUcsVUFBVTtBQUFBLE1BQ3pELGVBQWUsU0FBUyxVQUFVLFVBQVUsR0FBRyxVQUFVO0FBQUEsSUFDM0Q7QUFFQSxZQUFRLFdBQVcsc0JBQXNCLENBQUMsSUFBSSxhQUFhLENBQUM7QUFDNUQsWUFBUSxXQUFXLHNCQUFzQixDQUFDLElBQUksYUFBYSxDQUFDO0FBQzVELGNBQVUsY0FBd0IsOEJBQThCLGFBQWEsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFHaEcsUUFBSSxpQkFBaUIsVUFBVSxlQUFtQjtBQUNsRCxRQUFJLENBQUMsZ0JBQWdCO0FBQ25CLFVBQUksU0FBUyxxQkFBcUIsSUFBTSxVQUFVLElBQUksS0FBSyxjQUFrQixXQUFXO0FBQ3RGLHNCQUFjO0FBQ2QsZ0JBQVEsZ0JBQWdCLHNCQUFzQjtBQUFBLE1BQ2hEO0FBQUEsSUFDRjtBQUVBLFFBQUksVUFBVSxPQUFTLFNBQVMsZUFBZSxJQUFNLE9BQU8sR0FBRztBQUM3RCxxQkFBZSxLQUFLLEtBQUssY0FBd0IsK0JBQStCO0FBQ2hGLGNBQVEsZ0JBQWdCLHVCQUF1QjtBQUFBLElBQ2pEO0FBRUEsUUFBSSxpQkFBaUIsS0FBSyxLQUFLLFdBQVc7QUFDMUMsUUFBSSxlQUFlLEVBQUcsa0JBQWlCO0FBRXZDLFdBQU87QUFBQSxFQUNUO0FBU0EsV0FBUyxpQkFBaUIsU0FBUyxVQUFVLFVBQVUsWUFBWTtBQUVqRSxRQUNFLENBQUMsU0FBUyxzQkFBc0IsVUFBVSxZQUFZLE9BQU8sS0FDbkQsNEJBQTRCLFVBQVUsTUFDL0MsU0FBUyxvQkFBb0IsVUFBVSxDQUFDLEtBQUssU0FBUyxvQkFBb0IsVUFBVSxDQUFDLElBQ3RGO0FBQ0EsYUFBTztBQUFBLElBQ1Q7QUFJQSxRQUFJLElBQUk7QUFDUixXQUFPLE1BQU07QUFDWCxVQUFJLElBQUksRUFBRyxRQUFPO0FBQ2xCLFlBQU0sVUFBVSxlQUFlLFNBQVMsVUFBVSxVQUFVLEdBQUcsVUFBVTtBQUN6RSxVQUFJLFdBQVcsRUFBRztBQUNsQjtBQUFBLElBQ0Y7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQU9BLFdBQVMsa0JBQWtCLFFBQVE7QUFDakMsVUFBTSxlQUFlLGdCQUFnQixNQUFNO0FBQzNDLFVBQU0sZUFBZSxDQUFDLEdBQUssSUFBTSxJQUFNLElBQU0sSUFBTSxLQUFNLEtBQU0sS0FBTSxLQUFPLEtBQU8sS0FBTyxLQUFPLEtBQU8sR0FBSztBQUc3RyxRQUFJLFVBQVUsSUFBTyxRQUFPO0FBRTVCLFdBQU8sZ0JBQW9CLG1CQUFtQixhQUFhLFNBQVMsTUFBTTtBQUFBLEVBQzVFO0FBV0EsV0FBUyw4QkFBOEIsWUFBWSxTQUFTLFVBQVUsVUFBVSxNQUFNO0FBQ3BGLFVBQU0sZUFBZSxnQkFBZ0IsS0FBSyxFQUFFO0FBQzVDLFVBQU0sV0FBVyxTQUFTLFlBQVksS0FBSyxJQUFJLE9BQU87QUFDdEQsZUFBVyxXQUFXO0FBQ3RCLGVBQVcsT0FBTztBQUNsQixpQkFBYSxTQUFTLFVBQVUsVUFBVSxLQUFLLElBQUksT0FBTyxLQUFLO0FBQy9ELFdBQU87QUFBQSxFQUNUOzs7QUN2cUVBLE1BQU0sU0FBTixNQUFhO0FBQUE7QUFBQSxJQUVYLFNBQVM7QUFBQTtBQUFBLElBRVQsVUFBVTtBQUFBO0FBQUEsSUFFVixVQUFVO0FBQUE7QUFBQSxJQUVWLFFBQVE7QUFBQTtBQUFBLElBRVIsY0FBYyxDQUFDO0FBQUE7QUFBQSxJQUVmLGdCQUFnQixDQUFDO0FBQUE7QUFBQSxJQUdqQixXQUFXLElBQUksUUFBUTtBQUFBO0FBQUEsSUFFdkIsV0FBVyxJQUFJLFFBQVE7QUFBQTtBQUFBLElBRXZCLGVBQWUsSUFBSSxhQUFhO0FBQUEsRUFDbEM7QUFFQSxNQUFNLG1CQUFtQixDQUFDO0FBRzFCLE1BQU0scUJBQXFCO0FBRTNCLE1BQU0scUJBQXFCO0FBRTNCLE1BQU0scUJBQXFCO0FBRTNCLE1BQU0sbUJBQW1CO0FBRXpCLE1BQU0sbUJBQW1CO0FBRXpCLE1BQU0sb0JBQW9CLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksRUFBRTtBQUczRCxNQUFJLFlBQVksQ0FBQztBQUVqQixNQUFJLG1CQUFtQjtBQUV2QixNQUFJLHlCQUF5QjtBQUM3QixNQUFJLHVCQUF1QjtBQUMzQixNQUFJLHVCQUF1QjtBQUMzQixNQUFJLDBCQUEwQjtBQUM5QixNQUFJLDBCQUEwQjtBQUM5QixNQUFJLHVCQUF1QjtBQUMzQixNQUFJLDZCQUE2QjtBQUNqQyxNQUFJLHlCQUF5QjtBQUM3QixNQUFJLDhCQUE4QjtBQUNsQyxNQUFJLGtDQUFrQztBQUN0QyxNQUFJLHNCQUFzQjtBQUMxQixNQUFJLDJCQUEyQjtBQUMvQixNQUFJLDJCQUEyQjtBQUMvQixNQUFJLDBCQUEwQjtBQUM5QixNQUFJLHlCQUF5QjtBQUM3QixNQUFJLHVCQUF1QjtBQUMzQixNQUFJLHVCQUF1QjtBQUMzQixNQUFJLHlCQUF5QjtBQUM3QixNQUFJLDhCQUE4QjtBQUNsQyxNQUFJLG9CQUFvQjtBQUN4QixNQUFJLDJCQUEyQjtBQUMvQixNQUFJLG9CQUFvQjtBQUN4QixNQUFJLHFCQUFxQjtBQUN6QixNQUFJLHFCQUFxQjtBQUN6QixNQUFJLHFCQUFxQjtBQUN6QixNQUFJLHVCQUF1QjtBQUMzQixNQUFJLHNCQUFzQjtBQUMxQixNQUFJLHVCQUF1QjtBQUMzQixNQUFJLGtCQUFrQjtBQUN0QixNQUFJLGtCQUFrQjtBQUN0QixNQUFJLG1CQUFtQjtBQUN2QixNQUFJLHdCQUF3QjtBQUM1QixNQUFJLHVCQUF1QjtBQUMzQixNQUFJLG9CQUFvQjtBQUV4QixXQUFTLGlCQUFpQixvQkFBb0IsaUJBQWtCO0FBQzlELFVBQU0scUJBQXFCLFNBQVMsaUJBQWlCLDRCQUE0QjtBQUNqRixVQUFNLGNBQWMsQ0FBQyxHQUFHLGtCQUFrQixFQUFFLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxVQUFVLFFBQVEsZ0JBQWdCLENBQUM7QUFHN0csVUFBTSxjQUFjO0FBR3BCLGtCQUFjLFNBQVMsZUFBZSxvQkFBb0I7QUFDMUQsNkJBQXlCLFNBQVMsZUFBZSxrQkFBa0I7QUFDbkUsMkJBQXVCLFNBQVMsZUFBZSxpQkFBaUI7QUFDaEUsMkJBQXVCLFNBQVMsZUFBZSxpQkFBaUI7QUFDaEUsOEJBQTBCLFNBQVMsZUFBZSxvQkFBb0I7QUFDdEUsOEJBQTBCLFNBQVMsZUFBZSxvQkFBb0I7QUFDdEUsMkJBQXVCLFNBQVMsZUFBZSxhQUFhO0FBQzVELGlDQUE2QixTQUFTLGVBQWUsdUJBQXVCO0FBQzVFLDZCQUF5QixTQUFTLGVBQWUsWUFBWTtBQUM3RCxrQ0FBOEIsU0FBUyxlQUFlLGtCQUFrQjtBQUN4RSxzQ0FBa0MsU0FBUyxlQUFlLHVCQUF1QjtBQUNqRiwwQkFBc0IsU0FBUyxlQUFlLGVBQWU7QUFDN0QsK0JBQTJCLFNBQVMsZUFBZSxxQkFBcUI7QUFDeEUsK0JBQTJCLFNBQVMsZUFBZSxxQkFBcUI7QUFDeEUsOEJBQTBCLFNBQVMsZUFBZSxvQkFBb0I7QUFDdEUsNkJBQXlCLFNBQVMsZUFBZSxrQkFBa0I7QUFDbkUsMkJBQXVCLFNBQVMsZUFBZSxnQkFBZ0I7QUFDL0QsMkJBQXVCLFNBQVMsZUFBZSxnQkFBZ0I7QUFDL0QsNkJBQXlCLFNBQVMsZUFBZSxZQUFZO0FBQzdELGtDQUE4QixTQUFTLGVBQWUsa0JBQWtCO0FBQ3hFLHdCQUFvQixTQUFTLGVBQWUsYUFBYTtBQUN6RCwrQkFBMkIsU0FBUyxlQUFlLHFCQUFxQjtBQUN4RSx3QkFBb0IsU0FBUyxlQUFlLGFBQWE7QUFDekQseUJBQXFCLFNBQVMsZUFBZSxjQUFjO0FBQzNELHlCQUFxQixTQUFTLGVBQWUsY0FBYztBQUMzRCx5QkFBcUIsU0FBUyxlQUFlLGNBQWM7QUFDM0QsMkJBQXVCLFNBQVMsZUFBZSxpQkFBaUI7QUFDaEUsMEJBQXNCLFNBQVMsZUFBZSxlQUFlO0FBQzdELDJCQUF1QixTQUFTLGVBQWUsaUJBQWlCO0FBQ2hFLHNCQUFrQixTQUFTLGVBQWUsV0FBVztBQUNyRCxzQkFBa0IsU0FBUyxlQUFlLFdBQVc7QUFDckQsdUJBQW1CLFNBQVMsZUFBZSxZQUFZO0FBQ3ZELDRCQUF3QixTQUFTLGVBQWUsa0JBQWtCO0FBQ2xFLDJCQUF1QixTQUFTLGVBQWUsaUJBQWlCO0FBQ2hFLHdCQUFvQixTQUFTLGVBQWUsYUFBYTtBQUd6RCxVQUFNLGdCQUFnQixTQUFTLGlCQUFpQiwyQkFBMkI7QUFDM0UsZUFBVyxXQUFXLGVBQWU7QUFDbkMsVUFBSSxRQUFRLFlBQVksU0FBUztBQUMvQixnQkFBUSxpQkFBaUIsU0FBUyxTQUFVLEdBQUc7QUFDN0MsY0FBSSxRQUFRLFFBQVEsVUFBVTtBQUU1QixrQkFBTSxNQUFNLE9BQU8sS0FBSyxHQUFHO0FBQzNCLGtCQUFNLE1BQU0sT0FBTyxLQUFLLEdBQUc7QUFDM0Isa0JBQU0sUUFBUSxPQUFPLEtBQUssS0FBSztBQUMvQixnQkFBSSxNQUFNLEtBQUssRUFBRztBQUNsQixnQkFBSSxRQUFRLElBQUssTUFBSyxRQUFRO0FBQUEscUJBQ3JCLFFBQVEsSUFBSyxNQUFLLFFBQVE7QUFHbkMsaUJBQUssUUFBUSxLQUFLLE1BQ2YsUUFBUSxVQUFVLENBQUMsTUFBTSxPQUFPLGFBQWEsRUFBRSxXQUFXLENBQUMsSUFBSSxLQUFNLENBQUMsRUFDdEUsUUFBUSxXQUFXLEVBQUU7QUFBQSxVQUMxQjtBQUFBLFFBQ0YsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGO0FBQ0EsMkJBQXVCLGlCQUFpQixVQUFVLFNBQVUsR0FBRztBQUM3RCwrQkFBeUIsRUFBRSxPQUFPLEtBQUs7QUFBQSxJQUN6QyxDQUFDO0FBQ0QsK0JBQTJCLGlCQUFpQixTQUFTLFdBQVk7QUFDL0QsMEJBQW9CO0FBQUEsSUFDdEIsQ0FBQztBQUNELDJCQUF1QixpQkFBaUIsVUFBVSxXQUFZO0FBQzVELHNCQUFnQjtBQUNoQixzQkFBZ0I7QUFBQSxJQUNsQixDQUFDO0FBQ0QseUJBQXFCLGlCQUFpQixVQUFVLFdBQVk7QUFDMUQsc0JBQWdCO0FBQUEsSUFDbEIsQ0FBQztBQUNELHlCQUFxQixpQkFBaUIsVUFBVSxXQUFZO0FBQzFELGtCQUFZO0FBQUEsSUFDZCxDQUFDO0FBQ0QsdUJBQW1CLGlCQUFpQixVQUFVLFdBQVk7QUFDeEQseUJBQW1CO0FBQUEsSUFDckIsQ0FBQztBQUNELHlCQUFxQixpQkFBaUIsU0FBUyxXQUFZO0FBQ3pELHdCQUFrQjtBQUFBLElBQ3BCLENBQUM7QUFDRCxvQkFBZ0IsaUJBQWlCLFNBQVMsV0FBWTtBQUNwRCxvQkFBYztBQUFBLElBQ2hCLENBQUM7QUFDRCxvQkFBZ0IsaUJBQWlCLFNBQVMsV0FBWTtBQUNwRCxvQkFBYztBQUFBLElBQ2hCLENBQUM7QUFDRCx5QkFBcUIsaUJBQWlCLFNBQVMsV0FBWTtBQUN6RCxxQkFBZTtBQUFBLElBQ2pCLENBQUM7QUFHRCxzQkFBa0I7QUFDbEIsc0JBQWtCO0FBQ2xCLG9CQUFnQjtBQUNoQixvQkFBZ0I7QUFDaEIsc0JBQWtCO0FBR2xCLGdCQUFZO0FBR1osNkJBQXlCO0FBQ3pCLHdCQUFvQjtBQUFBLEVBQ3RCLENBQUM7QUFPRCxXQUFTLHlCQUF5QixZQUFZLElBQUk7QUFDaEQsUUFBSSxDQUFDLGFBQWE7QUFDaEIsY0FBUSxNQUFNLHVCQUF1QjtBQUNyQztBQUFBLElBQ0Y7QUFDQSxRQUFJLFlBQVksR0FBRztBQUNqQixrQkFBWSx1QkFBdUI7QUFBQSxJQUNyQztBQUVBLFVBQU0sVUFBVSxZQUFZLFNBQVM7QUFFckMseUJBQXFCLFFBQVEsUUFBUTtBQUNyQyx5QkFBcUIsUUFBUSxRQUFRO0FBRXJDLHFCQUFpQix3QkFBd0IsRUFBRSxFQUFFLGlCQUFpQixHQUFHLFFBQVEsUUFBUSxFQUFFO0FBQ25GLHFCQUFpQix3QkFBd0IsRUFBRSxFQUFFLGlCQUFpQixHQUFHLFFBQVEsUUFBUSxFQUFFO0FBQUEsRUFDckY7QUFNQSxXQUFTLHNCQUFzQjtBQUM3QixVQUFNLFlBQVksdUJBQXVCO0FBQ3pDLFVBQU0sUUFBUSxPQUFPLHFCQUFxQixLQUFLO0FBQy9DLFFBQUksTUFBTSxLQUFLLEVBQUc7QUFFbEIsVUFBTSxTQUFTLGVBQWUsV0FBVyxLQUFLO0FBQzlDLDJCQUF1QixRQUFRLE9BQU87QUFBQSxFQUN4QztBQUtBLFdBQVMsY0FBYztBQUNyQixVQUFNLFlBQVksT0FBTyxxQkFBcUIsS0FBSztBQUNuRCxVQUFNLFFBQVEsT0FBTyxxQkFBcUIsUUFBUSxxQkFBcUIsYUFBYSxFQUFFLFFBQVEsS0FBSztBQUNuRyxVQUFNLFNBQVMsZUFBZSxXQUFXLEtBQUs7QUFDOUMsMkJBQXVCLFFBQVEsT0FBTztBQUN0QyxnQ0FBNEIsUUFBUTtBQUdwQyx1QkFBbUI7QUFBQSxFQUNyQjtBQUVBLFdBQVMscUJBQXFCO0FBQzVCLFFBQUksTUFBTTtBQUNWLFVBQU0sV0FBVyxZQUFZO0FBQzdCLFVBQU0sZUFBZSxnQkFBZ0I7QUFFckMsc0JBQWtCLFFBQVEsU0FBUztBQUVuQyxRQUFJLFNBQVMsZUFBZSxJQUFNLFlBQVksR0FBRztBQUMvQyxhQUFPLHNDQUFzQyxZQUFZLEVBQUksRUFBRSxJQUFJO0FBQUEsSUFDckU7QUFFQSxRQUFJLFNBQVMsZUFBZSxJQUFNLFlBQVksR0FBRztBQUMvQyxhQUFPLHVDQUF1QyxZQUFZLEVBQUksRUFBRSxJQUFJO0FBQUEsSUFDdEU7QUFFQSxRQUFJLFNBQVMsaUJBQWlCLFlBQVksS0FBUyxxQkFBcUIsU0FBUyxNQUFNLFNBQWEsU0FBUyxHQUFHO0FBQzlHLGFBQU87QUFBQSxJQUNUO0FBQ0EsNkJBQXlCLFlBQVk7QUFBQSxFQUN2QztBQVFBLFdBQVMsZUFBZSxXQUFXLE9BQU87QUFDeEMsUUFBSSxDQUFDLGFBQWE7QUFDaEIsY0FBUSxNQUFNLHVCQUF1QjtBQUNyQztBQUFBLElBQ0Y7QUFFQSxVQUFNLFVBQVUsWUFBWSxTQUFTO0FBR3JDLFFBQUksTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRTtBQUNuQyxhQUFTLElBQUksR0FBRyxJQUFJLEtBQUssSUFBSSxHQUFHLENBQUMsUUFBUSxNQUFNLFFBQVEsT0FBTyxHQUFHLENBQUMsR0FBRyxLQUFLO0FBQ3hFLFlBQU0sT0FBTyxRQUFRLE1BQU0sQ0FBQztBQUM1QixVQUFJLEtBQUssT0FBTyxLQUFLLENBQUM7QUFDdEIsVUFBSSxLQUFLLE9BQU8sS0FBSyxDQUFDO0FBQ3RCLFVBQUksS0FBSyxPQUFPLEtBQUssQ0FBQztBQUN0QixVQUFJLEtBQUssT0FBTyxLQUFLLENBQUM7QUFBQSxJQUN4QjtBQUVBLFFBQUksSUFBSSxJQUFJLElBQUssS0FBSSxJQUFJO0FBQ3pCLFFBQUksSUFBSSxJQUFJLElBQUssS0FBSSxJQUFJO0FBQ3pCLFFBQUksSUFBSSxJQUFJLElBQUssS0FBSSxJQUFJO0FBQ3pCLFFBQUksSUFBSSxJQUFJLElBQUssS0FBSSxJQUFJO0FBRXpCLFdBQU87QUFBQSxFQUNUO0FBTUEsV0FBUyxjQUFjO0FBQ3JCLFVBQU0sV0FBVyxJQUFJLFFBQVE7QUFDN0IsYUFBUyxLQUFLLE9BQU8sdUJBQXVCLEtBQUs7QUFDakQsYUFBUyxZQUFZO0FBQ3JCLGFBQVMsWUFBWTtBQUNyQixhQUFTLFFBQVEsQ0FBQyxPQUFPLHFCQUFxQixLQUFLLEdBQUcsT0FBTyxxQkFBcUIsS0FBSyxDQUFDO0FBQ3hGLGFBQVMsWUFBWSxDQUFDLE9BQU8sd0JBQXdCLEtBQUssR0FBRyxPQUFPLHdCQUF3QixLQUFLLENBQUM7QUFDbEcsYUFBUyxRQUFRLE9BQU8scUJBQXFCLEtBQUs7QUFDbEQsYUFBUyxTQUFTLE9BQU8sdUJBQXVCLEtBQUs7QUFDckQsYUFBUyxlQUFlLE9BQU8sNEJBQTRCLEtBQUs7QUFDaEUsYUFBUyxjQUFjLE9BQU8sZ0NBQWdDLEtBQUs7QUFDbkUsYUFBUyxRQUFRO0FBQ2pCLGFBQVMsV0FBVyxPQUFPLG9CQUFvQixLQUFLO0FBQ3BELGFBQVMsbUJBQW1CLE9BQU8seUJBQXlCLEtBQUs7QUFDakUsYUFBUyw0QkFBNEIsRUFBSSxJQUFJLHdCQUF3QjtBQUNyRSxXQUFPO0FBQUEsRUFDVDtBQU1BLFdBQVMsY0FBYztBQUNyQixRQUFJLENBQUMsYUFBYTtBQUNoQixjQUFRLE1BQU0sdUJBQXVCO0FBQ3JDO0FBQUEsSUFDRjtBQUNBLFVBQU0sV0FBVyxJQUFJLFFBQVE7QUFDN0IsVUFBTSxvQkFBb0IsT0FBTyxxQkFBcUIsS0FBSztBQUMzRCxVQUFNLGtCQUFrQixZQUFZLGlCQUFpQjtBQUNyRCxVQUFNLGdCQUFnQixPQUFPLHFCQUFxQixRQUFRLHFCQUFxQixhQUFhLEVBQUUsUUFBUSxLQUFLO0FBRTNHLGFBQVMsS0FBSztBQUNkLGFBQVMsWUFBWTtBQUNyQixhQUFTLFFBQVE7QUFDakIsYUFBUyxRQUFRLENBQUMsZ0JBQWdCLE9BQU8sZ0JBQWdCLEtBQUs7QUFDOUQsYUFBUyxZQUFZLENBQUMsZ0JBQWdCLFVBQVUsZ0JBQWdCLFFBQVE7QUFDeEUsYUFBUyxTQUFTLE9BQU8sdUJBQXVCLEtBQUs7QUFDckQsYUFBUyxlQUFlLE9BQU8sNEJBQTRCLEtBQUs7QUFDaEUsYUFBUyxRQUFRO0FBRWpCLFVBQU0sVUFBVSxPQUFPLHFCQUFxQixRQUFRLHFCQUFxQixhQUFhLEVBQUUsUUFBUSxPQUFPO0FBQ3ZHLFVBQU0sVUFBVSxZQUFZLGdCQUFnQixPQUFPO0FBQ25ELGFBQVMsS0FBSztBQUNkLGVBQVcsV0FBVyxTQUFTO0FBQzdCLFVBQUksV0FBVyxZQUFZLE9BQU8sRUFBRSxTQUFTO0FBQzNDLGlCQUFTLFNBQVMsT0FBTyxJQUFJO0FBQUEsTUFDL0I7QUFBQSxJQUNGO0FBQ0EsV0FBTztBQUFBLEVBQ1Q7QUFNQSxXQUFTLGtCQUFrQjtBQUN6QixVQUFNLGVBQWUsSUFBSSxhQUFhO0FBQ3RDLGlCQUFhLFVBQVUsT0FBTyxtQkFBbUIsS0FBSztBQUN0RCxpQkFBYSxJQUFJLGNBQWMsb0JBQW9CO0FBQ25ELGlCQUFhLEtBQUssQ0FBQyxJQUFJLHlCQUF5QjtBQUNoRCxpQkFBYSxNQUFNLENBQUMsSUFBSSx5QkFBeUI7QUFDakQsV0FBTztBQUFBLEVBQ1Q7QUFLQSxXQUFTLG9CQUFvQjtBQUUzQixVQUFNLFdBQVcsWUFBWTtBQUc3QixVQUFNLFdBQVcsWUFBWTtBQUc3QixVQUFNLGVBQWUsZ0JBQWdCO0FBR3JDLFVBQU0sT0FBTyxJQUFJLEtBQUs7QUFDdEIsU0FBSyxLQUFLO0FBQ1YsU0FBSyxVQUFVLE9BQU8sbUJBQW1CLEtBQUs7QUFHOUMsVUFBTSxTQUFTLE9BQU8sa0JBQWtCLEtBQUs7QUFDN0MsVUFBTSxVQUFVLE9BQU8sbUJBQW1CLEtBQUs7QUFHL0MsVUFBTSxVQUFVLG9CQUFvQixJQUFJLG1CQUFtQixVQUFVO0FBR3JFLFVBQU0sWUFBWSxvQkFBSSxJQUFJO0FBQzFCLFVBQU0sWUFBWSxTQUFTLHFCQUFxQixLQUFLO0FBQ3JELFFBQUksWUFBWSxHQUFHO0FBRWpCLGdCQUFVLElBQUksV0FBVyxDQUFDLENBQUM7QUFBQSxJQUM3QixPQUFPO0FBQ0wsWUFBTSxhQUFhLENBQUM7QUFDcEIsVUFBSSxVQUFVLEdBQUc7QUFFZixtQkFBVyxPQUFPLFVBQVUsVUFBVSxDQUFDLEVBQUUsY0FBYyxLQUFLLEdBQUc7QUFDN0QscUJBQVcsS0FBSyxHQUFHO0FBQUEsUUFDckI7QUFBQSxNQUNGLE9BQU87QUFFTCxpQkFBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLFFBQVEsS0FBSztBQUN4QyxxQkFBVyxLQUFLLENBQUM7QUFBQSxRQUNuQjtBQUFBLE1BQ0Y7QUFDQSxpQkFBVyxRQUFRLFlBQVk7QUFFN0IsY0FBTSxlQUFlO0FBQUEsVUFDbkIsZUFBZSxjQUFjLFVBQVUsVUFBVSxHQUFHLElBQUk7QUFBQSxVQUN4RCxlQUFlLGNBQWMsVUFBVSxVQUFVLEdBQUcsSUFBSTtBQUFBLFFBQzFEO0FBQ0EsY0FBTSxpQkFBaUIsOEJBQThCLGFBQWEsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDckYsWUFBSSxrQkFBa0IsU0FBUztBQUM3QixvQkFBVSxJQUFJLE1BQU0sQ0FBQyxDQUFDO0FBQUEsUUFDeEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUVBLFVBQU0sY0FBYyxDQUFDO0FBQ3JCLFVBQU0saUJBQWlCLENBQUM7QUFDeEIsZUFBVyxRQUFRLFVBQVUsS0FBSyxHQUFHO0FBRW5DLFVBQUksYUFBYSxDQUFDO0FBQ2xCLFVBQUksVUFBVSxHQUFHO0FBRWYsY0FBTSxtQkFBbUIsVUFBVSxVQUFVLENBQUMsRUFBRSxjQUFjLElBQUksSUFBSTtBQUN0RSxZQUFJLGlCQUFrQixjQUFhO0FBQUEsTUFDckMsT0FBTztBQUVMLHFCQUFhO0FBQUEsTUFDZjtBQUlBLGlCQUFXLFNBQVMsWUFBWTtBQUM5QixjQUFNLGNBQWMsU0FBUyxNQUFNO0FBQ25DLG9CQUFZLDBCQUEwQjtBQUN0QyxvQkFBWSxvQkFBb0I7QUFFaEMsY0FBTSxlQUFlLGNBQWMsY0FBYyxhQUFhLFVBQVUsTUFBTSxLQUFLO0FBQ25GLGNBQU0sYUFBYTtBQUFBLFVBQ2pCO0FBQUEsVUFDQTtBQUFBLFVBQ0EsV0FBVyxhQUFhO0FBQUEsVUFDeEIsV0FBVyxhQUFhO0FBQUEsVUFDeEIsU0FBUyxhQUFhLFFBQVEsWUFBWTtBQUFBLFFBQzVDO0FBRUEsWUFBSSxXQUFXLGFBQWEsVUFBVSxVQUFVLFdBQVcsV0FBVztBQUNwRSxzQkFBWSxLQUFLLFVBQVU7QUFDM0Isb0JBQVUsSUFBSSxJQUFJLEVBQUUsS0FBSyxLQUFLO0FBQUEsUUFDaEM7QUFDQSx1QkFBZSxLQUFLLFVBQVU7QUFBQSxNQUNoQztBQUFBLElBQ0Y7QUFFQSxjQUFVLE9BQU8sT0FBTztBQUV4QixlQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssV0FBVztBQUNsQyxVQUFJLElBQUksVUFBVSxFQUFHLFdBQVUsT0FBTyxHQUFHO0FBQUEsSUFDM0M7QUFHQSxVQUFNLFNBQVMsSUFBSSxPQUFPO0FBQzFCLFdBQU8sU0FBUztBQUNoQixXQUFPLFVBQVU7QUFDakIsV0FBTyxVQUFVLEtBQUs7QUFDdEIsV0FBTyxRQUFRLEtBQUssU0FBUyxLQUFLLElBQUksWUFBWSxTQUFTLEVBQUUsRUFBRSxJQUFJO0FBQ25FLFdBQU8sY0FBYztBQUNyQixXQUFPLGdCQUFnQjtBQUN2QixXQUFPLFdBQVc7QUFDbEIsV0FBTyxXQUFXO0FBQ2xCLFdBQU8sZUFBZTtBQUV0QixjQUFVLEtBQUssTUFBTTtBQUdyQix1QkFBbUIsVUFBVTtBQUM3Qix3QkFBb0I7QUFDcEIscUJBQWlCO0FBQUEsRUFDbkI7QUFLQSxXQUFTLG1CQUFtQjtBQUMxQixRQUFJLE1BQU07QUFDVixRQUFJLFVBQVUsU0FBUyxLQUFLLG1CQUFtQixHQUFHO0FBQ2hELFlBQU0sVUFBVSxtQkFBbUI7QUFDbkMsWUFBTSxNQUFNLFVBQVUsT0FBTztBQUM3QixZQUFNLFlBQVksSUFBSTtBQUN0QixZQUFNLGNBQWMsSUFBSTtBQUV4QixVQUFJLFVBQVUsT0FBTyxHQUFHO0FBQ3RCLGNBQU07QUFDTixjQUFNLFVBQVUsQ0FBQztBQUNqQixtQkFBVyxDQUFDLEtBQUssR0FBRyxLQUFLLFdBQVc7QUFDbEMsa0JBQVEsS0FBSyxTQUFTLEdBQUcsRUFBRSxLQUFLLFFBQVEsS0FBSyxFQUFFLENBQUM7QUFBQSxRQUNsRDtBQUNBLGVBQU8sUUFBUSxLQUFLLEdBQUc7QUFBQSxNQUN6QixXQUFXLFVBQVUsUUFBUSxHQUFHO0FBQzlCLGNBQU0sc0NBQXNDLFNBQVMsVUFBVSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJO0FBQUEsTUFDMUYsT0FBTztBQUNMLGNBQU07QUFBQSxNQUNSO0FBRUEsVUFBSSxZQUFZLFNBQVMsR0FBRztBQUMxQixlQUFPO0FBQ1AsY0FBTSxNQUFNLEtBQUssSUFBSSxHQUFHLFlBQVksSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7QUFDdkQsY0FBTSxNQUFNLEtBQUssSUFBSSxHQUFHLFlBQVksSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7QUFDdkQsWUFBSSxPQUFPLEtBQUs7QUFDZCxpQkFBTyw2QkFBUyxHQUFHLFNBQUksR0FBRztBQUFBLFFBQzVCLE9BQU87QUFDTCxpQkFBTyxrREFBd0MsWUFBWSxDQUFDLEVBQUUsS0FBSztBQUFBLFFBQ3JFO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFDQSxzQkFBa0IsWUFBWTtBQUFBLEVBQ2hDO0FBS0EsV0FBUyxzQkFBc0I7QUFDN0IsVUFBTSxVQUFVLFVBQVUsU0FBUztBQUNuQyxVQUFNLGlCQUFpQixDQUFDO0FBQ3hCLGVBQVcsVUFBVSxtQkFBbUIsU0FBUztBQUMvQyxxQkFBZSxLQUFLLE9BQU8sSUFBSTtBQUFBLElBQ2pDO0FBRUEsUUFBSSxNQUFNO0FBQ1YsYUFBUyxJQUFJLEdBQUcsSUFBSSxVQUFVLFFBQVEsS0FBSztBQUN6QyxZQUFNLE1BQU0sVUFBVSxDQUFDO0FBQ3ZCLGFBQU87QUFBQSxjQUNHLElBQUksbUJBQW1CLElBQUksNEJBQTRCLEVBQUU7QUFBQSxnQkFDdkQsSUFBSSxDQUFDO0FBQUEsZ0JBQ0wsSUFBSSxNQUFNLEdBQUcsSUFBSSxhQUFhLElBQUksY0FBYyxvQkFBVSxFQUFFO0FBQUEsZ0JBQzVELGVBQWUsSUFBSSxPQUFPLENBQUM7QUFBQSxnQkFDM0IsSUFBSSxLQUFLO0FBQUE7QUFBQSxJQUV2QjtBQUNBLDBCQUFzQixRQUFRLENBQUMsRUFBRSxZQUFZO0FBRTdDLG9CQUFnQixXQUFXLENBQUM7QUFDNUIsb0JBQWdCLFdBQVcsVUFBVSxVQUFVLEtBQUssVUFBVSxVQUFVO0FBQ3hFLHFCQUFpQixXQUFXLENBQUM7QUFBQSxFQUMvQjtBQUtBLFdBQVMsZ0JBQWdCO0FBQ3ZCLFFBQUksb0JBQW9CLEdBQUksb0JBQW1CLFVBQVU7QUFDekQ7QUFDQSx3QkFBb0I7QUFDcEIscUJBQWlCO0FBRWpCLG9CQUFnQixXQUFXO0FBQzNCLFFBQUksb0JBQW9CLEdBQUc7QUFDekIsc0JBQWdCLFdBQVc7QUFBQSxJQUM3QjtBQUFBLEVBQ0Y7QUFLQSxXQUFTLGdCQUFnQjtBQUN2QjtBQUNBLHdCQUFvQjtBQUNwQixxQkFBaUI7QUFFakIsb0JBQWdCLFdBQVc7QUFDM0IsUUFBSSxvQkFBb0IsVUFBVSxRQUFRO0FBQ3hDLHNCQUFnQixXQUFXO0FBQUEsSUFDN0I7QUFBQSxFQUNGO0FBS0EsV0FBUyxpQkFBaUI7QUFDeEIsdUJBQW1CO0FBQ25CLGNBQVUsU0FBUztBQUNuQix3QkFBb0I7QUFDcEIscUJBQWlCO0FBQ2pCLGNBQVUsTUFBTSxvQkFBb0IsY0FBYyxFQUFFLEtBQUs7QUFBQSxFQUMzRDtBQU1BLFdBQVMsb0JBQW9CO0FBQzNCLFFBQUksQ0FBQyxhQUFhO0FBQ2hCLGNBQVEsTUFBTSx1QkFBdUI7QUFDckM7QUFBQSxJQUNGO0FBRUEsUUFBSSxNQUFNO0FBQ1YsZUFBVyxXQUFXLGFBQWE7QUFDakMsYUFBTztBQUFBLHVCQUNZLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxxQkFBcUIsYUFBYSxFQUFFO0FBQUEsVUFDOUUsUUFBUSxJQUFJLEdBQUcsUUFBUSxVQUFVLE1BQU0sUUFBUSxPQUFPLEtBQUssRUFBRTtBQUFBO0FBQUEsSUFFckU7QUFDQSwyQkFBdUIsWUFBWTtBQUFBLEVBQ3JDO0FBTUEsV0FBUyxvQkFBb0I7QUFDM0IsUUFBSSxDQUFDLGFBQWE7QUFDaEIsY0FBUSxNQUFNLHVCQUF1QjtBQUNyQztBQUFBLElBQ0Y7QUFFQSxRQUFJLE1BQU07QUFDVixhQUFTLElBQUksR0FBRyxJQUFJLFlBQVksVUFBVSxLQUFLLHNCQUFzQixLQUFLO0FBQ3hFLFlBQU0sVUFBVSxZQUFZLENBQUM7QUFHN0IsVUFBSSxRQUFRLFlBQVksS0FBSyxRQUFRLGNBQWMsRUFBRztBQUV0RCxVQUFJLFFBQVEsY0FBYyxVQUFVLE9BQVE7QUFFNUMsVUFBSSxRQUFRLFlBQVksS0FBSyxVQUFVLFFBQVEsVUFBVSxFQUFFLE9BQVE7QUFFbkUsYUFBTztBQUFBLHVCQUNZLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxxQkFBcUIsYUFBYSxFQUFFO0FBQUEsVUFDOUUsc0JBQXNCLFFBQVEsSUFBSSxDQUFDO0FBQUE7QUFBQSxJQUUzQztBQUNBLDJCQUF1QixZQUFZO0FBQUEsRUFDckM7QUFNQSxXQUFTLGtCQUFrQjtBQUN6QixRQUFJLENBQUMsYUFBYTtBQUNoQixjQUFRLE1BQU0sdUJBQXVCO0FBQ3JDO0FBQUEsSUFDRjtBQUNBLFFBQUksQ0FBQyxXQUFXO0FBQ2QsY0FBUSxNQUFNLHFCQUFxQjtBQUNuQztBQUFBLElBQ0Y7QUFFQSxVQUFNLFlBQVksdUJBQXVCO0FBQ3pDLFVBQU0sVUFBVSxZQUFZLFNBQVM7QUFDckMsVUFBTSxZQUFZLFFBQVEsWUFBWTtBQUN0QyxVQUFNLGFBQWEsUUFBUTtBQUMzQixVQUFNLFNBQVMsVUFBVSxPQUFPLFFBQVEsVUFBVSxDQUFDO0FBQ25ELFVBQU0sU0FBUyxRQUFRLGFBQWEsS0FBSztBQUV6QyxRQUFJLE1BQU07QUFDVixhQUFTLElBQUksR0FBRyxJQUFJLFlBQVksS0FBSztBQUNuQyxZQUFNLFFBQVEsWUFBWTtBQUMxQixZQUFNLFFBQVEsT0FBTyxLQUFLO0FBQzFCLFlBQU0sUUFBUSxNQUFNLFdBQVc7QUFDL0IsWUFBTSxRQUFRLE1BQU07QUFDcEIsWUFBTSxVQUFVLE1BQU07QUFDdEIsWUFBTSxXQUFXLENBQUMsMkJBQTJCLE1BQU0sWUFBWTtBQUUvRCxhQUFPO0FBQUEsdUJBQ1ksS0FBSyxpQkFBaUIsSUFBSSxDQUFDLGlCQUFpQixLQUFLLGlCQUFpQixLQUFLLG1CQUFtQixPQUFPLEtBQUssV0FBVyxhQUFhLEVBQUU7QUFBQSxVQUM3SSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQUE7QUFBQSxJQUV0QjtBQUNBLHlCQUFxQixZQUFZO0FBQUEsRUFDbkM7QUFNQSxXQUFTLGtCQUFrQjtBQUN6QixRQUFJLENBQUMsYUFBYTtBQUNoQixjQUFRLE1BQU0sdUJBQXVCO0FBQ3JDO0FBQUEsSUFDRjtBQUNBLFFBQUksQ0FBQyxZQUFZO0FBQ2YsY0FBUSxNQUFNLHNCQUFzQjtBQUNwQztBQUFBLElBQ0Y7QUFHQSxVQUFNLFVBQVUsT0FBTyxxQkFBcUIsUUFBUSxxQkFBcUIsYUFBYSxFQUFFLFFBQVEsS0FBSztBQUNyRyxVQUFNLFFBQVEsV0FBVyxVQUFVLE9BQU87QUFHMUMsVUFBTSxVQUFVLENBQUM7QUFDakIsZUFBVyxTQUFTLE9BQU87QUFDekIsWUFBTSxZQUFZLE1BQU07QUFFeEIsVUFBSSxhQUFhLGtCQUFrQjtBQUNqQyxnQkFBUSxLQUFLLEVBQUUsSUFBSSxXQUFXLE1BQU0sWUFBWSxTQUFTLEVBQUUsTUFBTSxPQUFPLE1BQU0sTUFBTSxDQUFDO0FBQUEsTUFDdkY7QUFBQSxJQUNGO0FBR0EsWUFBUSxLQUFLLENBQUMsR0FBRyxNQUFNO0FBRXJCLFlBQU0sUUFBUSxFQUFFLE9BQU87QUFDdkIsWUFBTSxRQUFRLEVBQUUsT0FBTztBQUN2QixVQUFJLFVBQVUsTUFBTyxRQUFPLFFBQVEsSUFBSTtBQUN4QyxhQUFPLEVBQUUsS0FBSyxjQUFjLEVBQUUsSUFBSTtBQUFBLElBQ3BDLENBQUM7QUFFRCxRQUFJLE1BQU07QUFDVixlQUFXLGFBQWEsU0FBUztBQUMvQixhQUFPO0FBQUEsdUJBQ1ksVUFBVSxFQUFFLGlCQUFpQixVQUFVLEtBQUs7QUFBQSxZQUN2RCxVQUFVLEtBQUssSUFBSSxVQUFVLElBQUk7QUFBQTtBQUFBO0FBQUEsSUFHM0M7QUFDQSx5QkFBcUIsWUFBWTtBQUdqQyxnQkFBWTtBQUFBLEVBQ2Q7QUFLQSxXQUFTLG9CQUFvQjtBQUMzQixRQUFJLE1BQU07QUFDVixhQUFTLElBQUksR0FBRyxJQUFJLGdCQUFnQixRQUFRLEtBQUs7QUFDL0MsYUFBTyxrQkFBa0IsQ0FBQyxLQUFLLGdCQUFnQixDQUFDLENBQUM7QUFBQSxJQUNuRDtBQUNBLHVCQUFtQixZQUFZO0FBQUEsRUFDakM7QUFLQSxXQUFTLGNBQWM7QUFDckIsVUFBTSxxQkFBcUI7QUFBQSxNQUN6QixHQUFHO0FBQUEsTUFDSCwyQkFBMkIsU0FBVSxVQUFVLG1CQUFtQixlQUFlO0FBQy9FLGVBQU87QUFBQSxVQUNMLFFBQVEsQ0FBQyxFQUFFLFdBQVcsR0FBRyxTQUFTO0FBQ2hDLG1CQUFPLFNBQVM7QUFBQSx3QkFDRixjQUFjLFdBQVcsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLElBQUksY0FBYyxXQUFXLFVBQVUsRUFBRSxLQUFLLEdBQUcsQ0FBQyxJQUFJO0FBQUEsY0FDMUcsS0FBSyxXQUFXLFdBQVcsZUFBZSxXQUFXO0FBQUEsWUFDdkQsRUFBRSxLQUFLLEdBQUcsQ0FBQyxpQkFDVCxLQUFLLFdBQVcsOENBQThDLHdCQUNoRSxhQUFhLEtBQUssRUFBRSxpQkFBaUIsa0JBQWtCLEtBQUssS0FBSyxDQUFDLEtBQ2hFLEtBQUssVUFBVSxJQUFJLG9CQUFvQixlQUN6QyxnQkFBZ0IsS0FBSyxNQUFNLEtBQUs7QUFBQSxvQkFDdEIsS0FBSyxLQUFLO0FBQUE7QUFBQSxXQUVuQjtBQUFBLFVBQ0g7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFFQSxVQUFNLGtCQUFrQixTQUFTLGlCQUFpQiwwQ0FBMEM7QUFDNUYsZUFBVyxXQUFXLGlCQUFpQjtBQUNyQyxVQUFJLFFBQVEsTUFBTSxRQUFRO0FBQ3hCLHlCQUFpQixRQUFRLEVBQUUsSUFBSSxJQUFJLFFBQVEsU0FBUyxrQkFBa0I7QUFBQSxNQUN4RSxPQUFPO0FBQ0wseUJBQWlCLFFBQVEsRUFBRSxJQUFJLElBQUksUUFBUSxTQUFTLGNBQWM7QUFBQSxNQUNwRTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBS0EsaUJBQWUsZ0JBQWdCO0FBQzdCLFFBQUk7QUFDRixZQUFNLENBQUMsYUFBYSxVQUFVLGFBQWEsV0FBVyxZQUFZLFVBQVUsYUFBYSxXQUFXLElBQ2xHLE1BQU0sUUFBUSxJQUFJO0FBQUEsUUFDaEIsWUFBWSxTQUFTO0FBQUEsUUFDckIsWUFBWSxNQUFNO0FBQUEsUUFDbEIsWUFBWSxTQUFTO0FBQUEsUUFDckIsWUFBWSxPQUFPO0FBQUEsUUFDbkIsWUFBWSxTQUFTO0FBQUEsUUFDckIsWUFBWSxNQUFNO0FBQUEsUUFDbEIsWUFBWSxTQUFTO0FBQUEsUUFDckIsWUFBWSxTQUFTO0FBQUEsTUFDdkIsQ0FBQztBQUNILGFBQU8sY0FBYztBQUNyQixhQUFPLFdBQVc7QUFDbEIsYUFBTyxjQUFjO0FBQ3JCLGFBQU8sWUFBWTtBQUNuQixhQUFPLGFBQWE7QUFDcEIsYUFBTyxXQUFXO0FBQ2xCLGFBQU8sY0FBYztBQUNyQixhQUFPLGNBQWM7QUFBQSxJQUN2QixTQUFTLEdBQUc7QUFDVixjQUFRLE1BQU0sQ0FBQztBQUFBLElBQ2pCO0FBQUEsRUFDRjsiLAogICJuYW1lcyI6IFsiTUFUQ0hVUF9JTU1VTkUiLCAiTUFUQ0hVUF9ORVVUUkFMIiwgIk1BVENIVVBfSU1NVU5FIiwgIk1BVENIVVBfTkVVVFJBTCIsICJ3ZWF0aGVyIl0KfQo=
