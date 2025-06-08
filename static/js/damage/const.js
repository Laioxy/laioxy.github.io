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

/** 物理技 */
export const CATEGORY_PHYSICAL = 0;
/** 特殊技 */
export const CATEGORY_SPECIAL = 1;

/** 性別 無効 */
export const GENDER_INVALID = 0;
/** 性別 オス */
export const GENDER_MALE = 1;
/** 性別 メス */
export const GENDER_FEMALE = 2;
/** 性別 不明 */
export const GENDER_GENDERLESS = 3;

/** 天候 はれ */
export const WEATHER_CLEAR = 0;
/** 天候 ひざしがつよい */
export const WEATHER_SUNNY = 1;
/** 天候 すなあらし */
export const WEATHER_SANDSTORM = 2;
/** 天候 くもり */
export const WEATHER_CLOUDY = 3;
/** 天候 あめ */
export const WEATHER_RAIN = 4;
/** 天候 あられ */
export const WEATHER_HAIL = 5;
/** 天候 きり */
export const WEATHER_FOG = 6;
/** 天候 ゆき */
export const WEATHER_SNOW = 7;
/** 天候 ランダム */
export const WEATHER_RANDOM = 8;

/** たんけんたいのま 固定フロアID */
export const FIXED_SUBSTITUTE_ROOM = 0x6e;

/** タイプ相性 効果はない */
export const MATCHUP_IMMUNE = 0;
/** タイプ相性 今一つ */
export const MATCHUP_NOT_VERY_EFFECTIVE = 1;
/** タイプ相性 普通 */
export const MATCHUP_NEUTRAL = 2;
/** タイプ相性 抜群 */
export const MATCHUP_SUPER_EFFECTIVE = 3;

/** タイプ なし */
export const TYPE_NONE = 0;
/** タイプ ノーマル */
export const TYPE_NORMAL = 1;
/** タイプ ほのお */
export const TYPE_FIRE = 2;
/** タイプ みず */
export const TYPE_WATER = 3;
/** タイプ くさ */
export const TYPE_GRASS = 4;
/** タイプ でんき */
export const TYPE_ELECTRIC = 5;
/** タイプ こおり */
export const TYPE_ICE = 6;
/** タイプ かくとう */
export const TYPE_FIGHTING = 7;
/** タイプ どく */
export const TYPE_POISON = 8;
/** タイプ じめん */
export const TYPE_GROUND = 9;
/** タイプ ひこう */
export const TYPE_FLYING = 10;
/** タイプ エスパー */
export const TYPE_PSYCHIC = 11;
/** タイプ むし */
export const TYPE_BUG = 12;
/** タイプ いわ */
export const TYPE_ROCK = 13;
/** タイプ ゴースト */
export const TYPE_GHOST = 14;
/** タイプ ドラゴン */
export const TYPE_DRAGON = 15;
/** タイプ あく */
export const TYPE_DARK = 16;
/** タイプ はがね */
export const TYPE_STEEL = 17;
/** タイプ むぞくせい */
export const TYPE_NEUTRAL = 18;

// ダメージメッセージ
export const DAMAGE_MESSAGE_MOVE = 0;
export const DAMAGE_MESSAGE_BURN = 1;
export const DAMAGE_MESSAGE_CONSTRICTION = 2;
export const DAMAGE_MESSAGE_POISON = 3;
export const DAMAGE_MESSAGE_RECOIL_1 = 4;
export const DAMAGE_MESSAGE_WRAP = 5;
export const DAMAGE_MESSAGE_COUNTER = 6;
export const DAMAGE_MESSAGE_CURSE = 7;
export const DAMAGE_MESSAGE_NIGHTMARE = 8;
export const DAMAGE_MESSAGE_LEECH_SEED = 9;
export const DAMAGE_MESSAGE_SPIKES = 10;
export const DAMAGE_MESSAGE_PERISH_SONG = 11;
export const DAMAGE_MESSAGE_DESTINY_BOND = 12;
export const DAMAGE_MESSAGE_SLUDGE = 13;
export const DAMAGE_MESSAGE_HUNGER = 14;
export const DAMAGE_MESSAGE_CHESTNUT_1 = 15;
export const DAMAGE_MESSAGE_CHESTNUT_2 = 16;
export const DAMAGE_MESSAGE_PITFALL_TRAP = 17;
export const DAMAGE_MESSAGE_BAD_WEATHER = 18;
export const DAMAGE_MESSAGE_MISSED_MOVE = 19;
export const DAMAGE_MESSAGE_RECOIL_2 = 20;
export const DAMAGE_MESSAGE_STEALTH_ROCK = 21;
export const DAMAGE_MESSAGE_TOXIC_SPIKES = 22;
export const DAMAGE_MESSAGE_ALMOST_FAINTED = 23;
export const DAMAGE_MESSAGE_BAD_DREAMS = 24;
export const DAMAGE_MESSAGE_SOLAR_POWER = 25;
export const DAMAGE_MESSAGE_DRY_SKIN = 26;
