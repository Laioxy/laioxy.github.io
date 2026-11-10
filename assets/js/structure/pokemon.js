import { jsonData } from '../json_store.js';

const POKEMON_ENTITY_COUNT = 600;

/**
 * ポケモンデータ
 */
export class Pokemon {
  /** @type {Number} 名称ID (時闇用) */
  MNDNameId = 0;

  /** @type {Number} 分類名ID (時闇用) */
  MNDSpecieId = 0;

  /** @type {Number} 図鑑番号 */
  PokeDexNo = 0;

  /** @type {Number} 移動速度 (1～4) */
  MovingSpeed = 1;

  /** @type {Number} 進化前ポケモンID (未定義の場合0) */
  PreEvoIndex = 0;

  /** @type {Number} 進化方法 */
  EvoMethod = 0;

  /** @type {Number} 進化方法パラメータ1 */
  EvoParam1 = 0;

  /** @type {Number} 進化方法パラメータ2 */
  EvoParam2 = 0;

  /** @type {Number} スプライトIndex */
  SpriteIndex = -1;

  /** @type {Number} 性別 */
  Gender = 0;

  /** @type {Number} からだのおおきさ */
  BodySize = 1;

  /** @type {Number} タイプ1 */
  Type1 = 0;

  /** @type {Number} タイプ2 */
  Type2 = 0;

  /** @type {Number} 移動タイプ */
  MovingType = 0;

  /** @type {Number} かしこさグループ */
  IQGroup = 0;

  /** @type {Number} 特性1 */
  Ability1 = 0;

  /** @type {Number} 特性2 */
  Ability2 = 0;

  /** @type {Boolean} 未使用のビットフラグ0 */
  BitFlag0 = false;

  /** @type {Boolean} 未使用のビットフラグ1 */
  BitFlag1 = false;

  /** @type {Boolean} 未使用のビットフラグ3 */
  BitFlag2 = false;

  /** @type {Boolean} 未使用のビットフラグ3 */
  BitFlag3 = false;

  /** @type {Boolean} 移動可能フラグ */
  CanMoving = false;

  /** @type {Boolean} 投擲可能フラグ */
  CanThrow = false;

  /** @type {Boolean} 進化可能フラグ */
  CanEvolve = false;

  /** @type {Boolean} 特殊スポーンフラグ (道具必須) */
  ItemRequiredSpawning = false;

  /** @type {Number} 基礎経験値 */
  ExpYield = 0;

  /** @type {Number} 勧誘率1 */
  RecruitRate1 = 0;

  /** @type {Number} 勧誘率2 */
  RecruitRate2 = 0;

  /** @type {Number} Lv1 HP */
  BaseH = 0;

  /** @type {Number} Lv1 攻撃 */
  BaseA = 0;

  /** @type {Number} Lv1 特攻 */
  BaseC = 0;

  /** @type {Number} Lv1 防御 */
  BaseB = 0;

  /** @type {Number} Lv1 特防 */
  BaseD = 0;

  /** @type {Number} 重さ */
  Weight = 0;

  /** @type {Number} 高さ */
  Size = 0;

  /** @type {Number} 0x2C */
  Unk2C = 0;

  /** @type {Number} 0x2D */
  Unk2D = 0;

  /** @type {Number} 影の大きさ */
  ShadowSize = 2;

  /** @type {Number} 睡眠スポーン */
  ChanceSpawnAsleep = 0;

  /** @type {Number} HP回復率 (一律1/200) */
  HPRegeneration = 0;

  /** @type {Number} スポーン可能進行度 */
  UnlockScenario = 0;

  /** @type {Number} 元の姿のポケモンID */
  BaseFormIndex = 0;

  /** @type {Number} 専用道具★1-1 */
  ExItem1_1 = 0;

  /** @type {Number} 専用道具★1-2 */
  ExItem1_2 = 0;

  /** @type {Number} 専用道具★2 */
  ExItem2 = 0;

  /** @type {Number} 専用道具★3 */
  ExItem3 = 0;

  /** @type {Number} 道具ドロップ無しウェイト */
  DropRateBoxNoItem = 1;

  /** @type {Number} 通常宝箱ドロップウェイト */
  DropRateBoxInNormal = 0;

  /** @type {Number} ★1-1宝箱ドロップウェイト */
  DropRateBoxInEx1 = 0;

  /** @type {Number} ★1-2宝箱ドロップウェイト */
  DropRateBoxInEx2 = 0;

  /**
   * 各種性別データ
   * 性別によるステータスの違いを格納
   */
  Genders = [];

  Movesets = [];

  Stats = [];

  Id = 0;

  /**
   * コンストラクタ
   * @param {Number} id
   * @param {Object} params
   */
  constructor(id, params = {}) {
    this.Id = Number(id);
    Object.assign(this, params);
  }

  /**
   * 対象IDのポケモン作成
   * @param {Number} id
   * @returns
   */
  static create(id) {
    const pokemonDatas = jsonData.get('pokemon');
    const pokemon = new Pokemon(id, pokemonDatas[getBaseId(id)]);
    return pokemon;
  }

  /**
   * ベースIDを取得
   * @returns
   */
  getBaseId() {
    return Number(this.Id) % POKEMON_ENTITY_COUNT;
  }

  /**
   * 成長率データを取得
   * @param {*} version バージョン (sky|old)
   * @returns 成長率データ
   */
  getStats(version = 'sky') {
    const statsIdx = this.getBaseId() - 1;

    // json未取得なら取得
    if (statsIdx >= 0 && this.Stats.length === 0) {
      const stats = jsonData.get(`pokemon-stats.${version}`);
      if (statsIdx < stats.length) {
        this.Stats = stats[statsIdx];
      }
    }
    return this.Stats;
  }

  /**
   * 習得技データを取得
   * @param {*} version バージョン (sky|old)
   * @returns 習得技データ
   */
  getMovesets(version = 'sky') {
    // json未取得なら取得
    if (this.Movesets.length === 0) {
      const movesets = jsonData.get(`pokemon-stats.${version}`);
      if (this.Id < movesets.length) {
        this.Movesets = movesets[this.Id];
      }
    }
    return this.Movesets;
  }
}

function getBaseId(id) {
  return Number(id) % POKEMON_ENTITY_COUNT;
}

function getLang() {
  return document.documentElement.lang;
}
