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

import * as eos from '/js/damage/const.js';
import { NaturalGiftInfo } from '/js/damage/structure.js';

export const CONST_0_25 = 0x40 / 256;
export const CONST_0_50 = 0x80 / 256;
export const CONST_0_60 = 0x99 / 256;
export const CONST_0_70 = 0xb5 / 256;
export const CONST_0_75 = 0xc0 / 256;
export const CONST_0_80 = 0xcc / 256;
export const CONST_1_20 = 1 + 0x33 / 256;
export const CONST_1_25 = 1 + 0x40 / 256;
export const CONST_1_33 = 1 + 0x54 / 256;
export const CONST_1_40 = 1 + 0x66 / 256;
export const CONST_1_50 = 1 + 0x80 / 256;
export const CONST_1_70 = 1 + 0xb3 / 256;
export const CONST_NEG0_5 = -1 + 0x80 / 256;
export const CONST_153_DIV_256 = 153 / 256;
export const CONST_1_DIV_SQRT2 = 0xb5 / 256;
export const CONST_85_DIV_64 = 1 + 0x54 / 256;

// 複合の相性倍率値
export const TYPE_MATCHUP_COMBINATOR_TABLE = [
  [eos.MATCHUP_IMMUNE, eos.MATCHUP_IMMUNE, eos.MATCHUP_IMMUNE, eos.MATCHUP_NOT_VERY_EFFECTIVE],
  [eos.MATCHUP_IMMUNE, eos.MATCHUP_NOT_VERY_EFFECTIVE, eos.MATCHUP_NOT_VERY_EFFECTIVE, eos.MATCHUP_NEUTRAL],
  [eos.MATCHUP_IMMUNE, eos.MATCHUP_NOT_VERY_EFFECTIVE, eos.MATCHUP_NEUTRAL, eos.MATCHUP_SUPER_EFFECTIVE],
  [eos.MATCHUP_NOT_VERY_EFFECTIVE, eos.MATCHUP_NEUTRAL, eos.MATCHUP_SUPER_EFFECTIVE, eos.MATCHUP_SUPER_EFFECTIVE],
];

// 相性倍率
export const MATCHUP_IMMUNE = CONST_0_50; // 無効
export const MATCHUP_NOTVERY = CONST_0_70; // 今一つ
export const MATCHUP_NEUTRAL = 1; // 等倍
export const MATCHUP_SUPER = CONST_1_40; // 抜群

// 相性倍率 (ムラっけ)
export const MATCHUP_IMMUNE_ERRATIC = CONST_0_25;
export const MATCHUP_NOTVERY_ERRATIC = CONST_0_50;
export const MATCHUP_NEUTRAL_ERRATIC = 1;
export const MATCHUP_SUPER_ERRATIC = CONST_1_70;

// 特定のタイプを無効化する専用道具効果ID
export const TYPE_DAMAGE_NEGATING_EXCLUSIVE_ITEM_EFFECTS = [
  // 無効
  { type: eos.TYPE_FIRE, effect: 0x66 },
  { type: eos.TYPE_WATER, effect: 0x67 },
  { type: eos.TYPE_GRASS, effect: 0x68 },
  { type: eos.TYPE_ELECTRIC, effect: 0x69 },
  { type: eos.TYPE_FIGHTING, effect: 0x6a },
  { type: eos.TYPE_GROUND, effect: 0x6b },
  { type: eos.TYPE_FLYING, effect: 0x6c },
  { type: eos.TYPE_PSYCHIC, effect: 0x6d },
  { type: eos.TYPE_GHOST, effect: 0x6e },
  { type: eos.TYPE_DRAGON, effect: 0x6f },
  { type: eos.TYPE_DARK, effect: 0x70 },
  { type: eos.TYPE_STEEL, effect: 0x71 },

  // 吸収
  { type: eos.TYPE_FIRE, effect: 0x72 },
  { type: eos.TYPE_WATER, effect: 0x73 },
  { type: eos.TYPE_GRASS, effect: 0x74 },
  { type: eos.TYPE_ELECTRIC, effect: 0x75 },
  { type: eos.TYPE_ICE, effect: 0x76 },
  { type: eos.TYPE_FIGHTING, effect: 0x77 },
  { type: eos.TYPE_GROUND, effect: 0x78 },
  { type: eos.TYPE_FLYING, effect: 0x79 },
  { type: eos.TYPE_PSYCHIC, effect: 0x7a },
  { type: eos.TYPE_BUG, effect: 0x7b },
  { type: eos.TYPE_ROCK, effect: 0x7c },
  { type: eos.TYPE_GHOST, effect: 0x7d },
  { type: eos.TYPE_DRAGON, effect: 0x7e },
  { type: eos.TYPE_DARK, effect: 0x7f },
  { type: eos.TYPE_STEEL, effect: 0x80 },

  { type: eos.TYPE_NONE, effect: 0x81 },
];

// 回避率が上昇する専用道具効果ID
export const EXCL_ITEM_EFFECTS_EVASION_BOOST = [0x3d, 0x3e, 0x3f, 0x40, 0x41, 0x42, 0x43, 0x00];

// あなをほる倍率
export const DIG_DAMAGE_MULTIPLIER = 2;
// かまいたち倍率
export const RAZOR_WIND_DAMAGE_MULTIPLIER = 2;
// からげんき倍率
export const FACADE_DAMAGE_MULTIPLIER = 2;
// きあいパンチ倍率
export const FOCUS_PUNCH_DAMAGE_MULTIPLIER = 2;
// ゴッドバード倍率
export const SKY_ATTACK_DAMAGE_MULTIPLIER = 2;
// ソーラービーム倍率
export const SOLARBEAM_DAMAGE_MULTIPLIER = 2;
// そらをとぶ倍率
export const FLY_DAMAGE_MULTIPLIER = 2;
// ダイビング倍率
export const DIVE_DAMAGE_MULTIPLIER = 2;
// とびはねる倍率
export const BOUNCE_DAMAGE_MULTIPLIER = 2;
// ロケットずつき倍率
export const SKULL_BASH_DAMAGE_MULTIPLIER = 2;
// シャドーダイブ倍率
export const SHADOW_FORCE_DAMAGE_MULTIPLIER = 2;
// ころがる倍率
export const ROLLOUT_DAMAGE_MULT_TABLE = [
  1,
  1 + 0x19 / 256, // 1.10
  CONST_1_20,
  1 + 0x4c / 256, // 1.30
  CONST_1_40,
  CONST_1_50,
  1 + 0x99 / 256, // 1.60
  CONST_1_70,
  1 + 0xcc / 256, // 1.80
  1 + 0xe6 / 256, // 1.90
];
// きしかいせい倍率
export const REVERSAL_DAMAGE_MULT_TABLE = [2, CONST_1_50, 1, 1];
// みずあそび倍率
export const WATER_SPOUT_DAMAGE_MULT_TABLE = [
  0x19 / 256, // 0.10
  0x33 / 256, // 0.20
  CONST_0_50,
  1,
];
// ふんか倍率
export const ERUPTION_DAMAGE_MULT_TABLE = [
  0x19 / 256, // 0.10
  0x33 / 256, // 0.20
  CONST_0_50,
  1,
];
// しぼりとる倍率
export const WRING_OUT_DAMAGE_MULT_TABLE = [
  0x19 / 256, // 0.10
  0x33 / 256, // 0.20
  CONST_0_50,
  1,
];
// とっておき倍率
export const LAST_RESORT_DAMAGE_MULT_TABLE = [
  1,
  CONST_0_50,
  2,
  2, // 未使用
];
// ウェザーボール倍率
export const WEATHER_BALL_DAMAGE_MULT_TABLE = [
  1, // はれ
  2, // ひざしがつよい (2倍)
  2, // すなあらし (2倍)
  1, // くもり
  2, // あめ (2倍)
  2, // あられ (2倍)
  1, // きり
  2, // ゆき (2倍)
];
// ウェザーボールタイプ
export const WEATHER_BALL_TYPE_TABLE = [
  1, // はれ -> ノーマル
  2, // ひざしがつよい -> ほのお
  13, // すなあらし -> いわ
  1, // くもり -> ノーマル
  3, // あめ -> みず
  6, // あられ -> こおり
  1, // きり -> ノーマル
  6, // ゆき -> こおり
];

// 攻撃・特攻ランク倍率
export const OFFENSIVE_STAT_STAGE_MULTIPLIERS = [
  0 + 0x80 / 256, // 0.5
  0 + 0x85 / 256, // 0.52
  0 + 0x8a / 256, // 0.54
  0 + 0x8f / 256, // 0.56
  0 + 0x94 / 256, // 0.58
  0 + 0x99 / 256, // 0.6
  0 + 0xa1 / 256, // 0.63
  0 + 0xab / 256, // 0.67
  0 + 0xb3 / 256, // 0.7
  0 + 0xcc / 256, // 0.8
  1 + 0x00 / 256, // 1
  1 + 0x33 / 256, // 1.2
  1 + 0x4c / 256, // 1.3
  1 + 0x66 / 256, // 1.4
  1 + 0x80 / 256, // 1.5
  1 + 0x99 / 256, // 1.6
  1 + 0xa6 / 256, // 1.64
  1 + 0xb3 / 256, // 1.7
  1 + 0xc0 / 256, // 1.75
  1 + 0xcc / 256, // 1.8
  1 + 0xd9 / 256, // 1.85
];
// 防御・特防ランク倍率
export const DEFENSIVE_STAT_STAGE_MULTIPLIERS = [
  0 + 0x07 / 256, // 0.03
  0 + 0x0c / 256, // 0.05
  0 + 0x19 / 256, // 0.1
  0 + 0x26 / 256, // 0.15
  0 + 0x33 / 256, // 0.2
  0 + 0x40 / 256, // 0.25
  0 + 0x4c / 256, // 0.3
  0 + 0x66 / 256, // 0.4
  0 + 0x80 / 256, // 0.5
  0 + 0xb3 / 256, // 0.7
  1 + 0x00 / 256, // 1
  1 + 0x4c / 256, // 1.3
  1 + 0x99 / 256, // 1.6
  1 + 0xe6 / 256, // 1.9
  2 + 0x19 / 256, // 2.1
  2 + 0x4c / 256, // 2.3
  2 + 0x80 / 256, // 2.5
  2 + 0xb3 / 256, // 2.7
  2 + 0xe6 / 256, // 2.9
  3 + 0x19 / 256, // 3.1
  3 + 0x4c / 256, // 3.3
];
// オス命中ランク倍率
export const MALE_ACCURACY_STAGE_MULTIPLIERS = [
  0 + 0x54 / 256, // 0.33
  0 + 0x59 / 256, // 0.35
  0 + 0x5e / 256, // 0.37
  0 + 0x66 / 256, // 0.4
  0 + 0x6e / 256, // 0.43
  0 + 0x73 / 256, // 0.45
  0 + 0x8c / 256, // 0.55
  0 + 0x99 / 256, // 0.6
  0 + 0xb3 / 256, // 0.7
  0 + 0xcc / 256, // 0.8
  1 + 0x00 / 256, // 1
  1 + 0x40 / 256, // 1.25
  1 + 0x80 / 256, // 1.5
  1 + 0x99 / 256, // 1.6
  1 + 0xa6 / 256, // 1.65
  1 + 0xb3 / 256, // 1.7
  1 + 0xc0 / 256, // 1.75
  1 + 0xcc / 256, // 1.8
  1 + 0xd9 / 256, // 1.85
  1 + 0xe6 / 256, // 1.9
  2 + 0x00 / 256, // 2
];
// オス回避ランク倍率
export const MALE_EVASION_STAGE_MULTIPLIERS = [
  2 + 0x00 / 256, // 2
  1 + 0xe6 / 256, // 1.9
  1 + 0xd9 / 256, // 1.85
  1 + 0xcc / 256, // 1.8
  1 + 0xc0 / 256, // 1.75
  1 + 0xb3 / 256, // 1.7
  1 + 0xa6 / 256, // 1.65
  1 + 0x99 / 256, // 1.6
  1 + 0x80 / 256, // 1.5
  1 + 0x59 / 256, // 1.35
  1 + 0x07 / 256, // 1.03
  0 + 0xcc / 256, // 0.8
  0 + 0xb3 / 256, // 0.7
  0 + 0x99 / 256, // 0.6
  0 + 0x80 / 256, // 0.5
  0 + 0x66 / 256, // 0.4
  0 + 0x59 / 256, // 0.35
  0 + 0x4c / 256, // 0.3
  0 + 0x40 / 256, // 0.25
  0 + 0x33 / 256, // 0.2
  0 + 0x26 / 256, // 0.15
];
// メス命中ランク倍率
export const FEMALE_ACCURACY_STAGE_MULTIPLIERS = [
  0 + 0x54 / 256, // 0.33
  0 + 0x59 / 256, // 0.35
  0 + 0x5e / 256, // 0.37
  0 + 0x66 / 256, // 0.4
  0 + 0x6e / 256, // 0.43
  0 + 0x73 / 256, // 0.45
  0 + 0x8c / 256, // 0.55
  0 + 0x99 / 256, // 0.6
  0 + 0xb3 / 256, // 0.7
  0 + 0xcc / 256, // 0.8
  1 + 0x0c / 256, // 1.05
  1 + 0x40 / 256, // 1.25
  1 + 0x80 / 256, // 1.5
  1 + 0x99 / 256, // 1.6
  1 + 0xa6 / 256, // 1.65
  1 + 0xb3 / 256, // 1.7
  1 + 0xc0 / 256, // 1.75
  1 + 0xcc / 256, // 1.8
  1 + 0xd9 / 256, // 1.85
  1 + 0xe6 / 256, // 1.9
  2 + 0x00 / 256, // 2
];
// メス回避ランク倍率
export const FEMALE_EVASION_STAGE_MULTIPLIERS = [
  2 + 0x00 / 256, // 2
  1 + 0xe6 / 256, // 1.9
  1 + 0xd9 / 256, // 1.85
  1 + 0xcc / 256, // 1.8
  1 + 0xc0 / 256, // 1.75
  1 + 0xb3 / 256, // 1.7
  1 + 0xa6 / 256, // 1.65
  1 + 0x99 / 256, // 1.6
  1 + 0x80 / 256, // 1.5
  1 + 0x59 / 256, // 1.35
  1 + 0x00 / 256, // 1
  0 + 0xcc / 256, // 0.8
  0 + 0xb3 / 256, // 0.7
  0 + 0x99 / 256, // 0.6
  0 + 0x80 / 256, // 0.5
  0 + 0x66 / 256, // 0.4
  0 + 0x59 / 256, // 0.35
  0 + 0x4c / 256, // 0.3
  0 + 0x40 / 256, // 0.25
  0 + 0x33 / 256, // 0.2
  0 + 0x26 / 256, // 0.15
];

// 特性いろめがね補正
export const TINTED_LENS_MULTIPLIER = CONST_1_20;
// 特性ハードロック補正
export const SOLID_ROCK_MULTIPLIER = CONST_0_75;
// やけど時のダメージ補正
export const BURN_DAMAGE_MULTIPLIER = CONST_0_80;
// 天候くもり時のダメージ補正
export const CLOUDY_DAMAGE_MULTIPLIER = CONST_0_75;
// さきどり補正
export const ME_FIRST_MULTIPLIER = CONST_1_50;
// ごうわん補正
export const POWER_PITCHER_DAMAGE_MULTIPLIER = CONST_1_50;
// エアーブレード補正
export const AIR_BLADE_DAMAGE_MULTIPLIER = CONST_1_50;
// (時闇)タイムシールド補正
export const TD_TIME_SHEALD_DAMAGE_MULTIPLIER = 2;

// パワーバンダナ上昇量
export const POWER_BAND_STAT_BOOST = 12;
// スペシャルリボン上昇量
export const SPECIAL_BAND_STAT_BOOST = 12;
// ぼうぎょスカーフ上昇量
export const DEF_SCARF_STAT_BOOST = 8;
// キトサンバンダナ上昇量
export const ZINC_BAND_STAT_BOOST = 8;
// 波動色リボン上昇量
export const AURA_BOW_STAT_BOOST = 1;
// ゴンベのハラマキ上昇量
export const MUNCH_BELT_STAT_BOOST = 8;
// ピントレンズ急所率上昇量
export const SCOPE_LENS_CRIT_RATE_BOOST = 15;
// きょううん急所率上昇量
export const SUPER_LUCK_CRIT_RATE_BOOST = 10;
// あいしょうばつぐん急所率
export const TYPE_ADVANTAGE_MASTER_CRIT_RATE = 40;
// みきりハチマキ命中値減少量
export const DETECT_BAND_MOVE_ACCURACY_DROP = 30;
// すばやくかいひ命中値減少量
export const QUICK_DODGER_MOVE_ACCURACY_DROP = 10;

// テクニシャンが適用される威力の上限
export const TECHNICIAN_MOVE_POWER_THRESHOLD = 4;
// 攻撃系ステータスの最大値
export const OFFENSE_STAT_MAX = 999;
// HP最大値
export const MAX_HP_CAP = 999;

/** しぜんのめぐみ能力テーブル */
export const NATURAL_GIFT_ITEM_TABLE = [
  new NaturalGiftInfo(0x45, eos.TYPE_GRASS, 1), // いやしのタネ
  new NaturalGiftInfo(0x46, eos.TYPE_POISON, 1), // オレンのみ
  new NaturalGiftInfo(0x47, eos.TYPE_PSYCHIC, 3), // オボンのみ
  new NaturalGiftInfo(0x48, eos.TYPE_GHOST, 2), // めぐすりのタネ
  new NaturalGiftInfo(0x49, eos.TYPE_GROUND, 1), // ふっかつのタネ
  new NaturalGiftInfo(0x4a, eos.TYPE_DARK, 2), // めつぶしのタネ
  new NaturalGiftInfo(0x4b, eos.TYPE_STEEL, 1), // ふこうのタネ
  new NaturalGiftInfo(0x4c, eos.TYPE_DARK, 2), // まどわしのタネ
  new NaturalGiftInfo(0x4d, eos.TYPE_FIGHTING, 3), // いのちのタネ
  new NaturalGiftInfo(0x4e, eos.TYPE_GRASS, 2), // チーゴのみ
  new NaturalGiftInfo(0x4f, eos.TYPE_ROCK, 5), // くうふくのタネ
  new NaturalGiftInfo(0x50, eos.TYPE_FLYING, 2), // しゅんそくのタネ
  new NaturalGiftInfo(0x51, eos.TYPE_ELECTRIC, 2), // モモンのみ
  new NaturalGiftInfo(0x52, eos.TYPE_FIRE, 2), // クラボのみ
  new NaturalGiftInfo(0x53, eos.TYPE_GHOST, 2), // ふらふらのタネ
  new NaturalGiftInfo(0x54, eos.TYPE_ICE, 2), // すいみんのタネ
  new NaturalGiftInfo(0x55, eos.TYPE_NORMAL, 15), // ただのタネ
  new NaturalGiftInfo(0x56, eos.TYPE_PSYCHIC, 2), // ワープのタネ
  new NaturalGiftInfo(0x57, eos.TYPE_DRAGON, 5), // ばくれつのタネ
  new NaturalGiftInfo(0x59, eos.TYPE_NORMAL, 3), // しあわせのタネ
  new NaturalGiftInfo(0x5a, eos.TYPE_WATER, 2), // カゴのみ
  new NaturalGiftInfo(0x5b, eos.TYPE_BUG, 2), // しばられのタネ
  new NaturalGiftInfo(0x5d, eos.TYPE_DRAGON, 10), // おうごんのタネ
  new NaturalGiftInfo(0x5e, eos.TYPE_POISON, 5), // じゃあくなタネ
  new NaturalGiftInfo(0x5f, eos.TYPE_WATER, 5), // せいなるタネ
  new NaturalGiftInfo(0x60, eos.TYPE_FIGHTING, 5), // もうげきのタネ
  new NaturalGiftInfo(0x61, eos.TYPE_BUG, 5), // ドロンのタネ
  new NaturalGiftInfo(0x68, eos.TYPE_GHOST, 5), // めくすぐりのタネ
  new NaturalGiftInfo(0x69, eos.TYPE_GROUND, 2), // ぷっかつのタネ
  new NaturalGiftInfo(0x6a, eos.TYPE_ICE, 10), // すいみんぐのタネ
  new NaturalGiftInfo(0x6b, eos.TYPE_POISON, 2), // じゃあなのタネ
  new NaturalGiftInfo(0x75, eos.TYPE_POISON, 2), // オレソのみ
  new NaturalGiftInfo(0x76, eos.TYPE_STEEL, 5), // ふごうのタネ
  new NaturalGiftInfo(0x00, eos.TYPE_NONE, 0), // (空き)
];

/** 時闇の技の威力 */
export const TIME_DARKNESS_BASE_POWER = [
  { id: 0x116, power: 30 }, // ふんか 30 -> 40
  { id: 0x09d, power: 24 }, // だいもんじ 24 -> 33
  { id: 0x04b, power: 20 }, // きあいパンチ 20 -> 55
  { id: 0x0ee, power: 30 }, // ハードプラント 30 -> 45
  { id: 0x0ef, power: 30 }, // ハイドロカノン 30 -> 33
  { id: 0x001, power: 20 }, // アイアンテール 20 -> 40
  { id: 0x143, power: 24 }, // メガホーン 24 -> 38
  { id: 0x0dd, power: 12 }, // ニードルアーム 12 -> 36
  { id: 0x06d, power: 18 }, // サイコキネシス 18 -> 38
  { id: 0x095, power: 20 }, // せいなるほのお 20 -> 50
  { id: 0x0f4, power: 14 }, // はがねのつばさ 14 -> 35
  { id: 0x0db, power: 18 }, // なみのり 18 -> 30
  { id: 0x040, power: 24 }, // かみなり 24 -> 45
];

/**
 * 技のタイプを取得
 * @param {*} moveId
 * @returns
 */
export function getMoveType(moveId) {
  if (!MoveData) {
    console.error('MoveData not found');
    return;
  }
  return MoveData[moveId].Type;
}

/**
 * 対象の技が通常攻撃または投擲物であるか
 * @param {*} moveId
 */
export function isRegularAttackOrProjectile(moveId) {
  return moveId == 0x163 || moveId == 0x195;
}

/**
 * 対象の道具が波動色リボンであるか
 * @param {*} itemId
 * @returns
 */
export function isAuraBow(itemId) {
  return itemId >= 0x1ac && itemId <= 0x1bb;
}

/**
 * ゴーストに対して無効タイプであるか
 * @param {Number} typeId タイプID
 * @returns
 */
export function typeIneffectiveAgainstGhost(typeId) {
  return typeId == eos.TYPE_NORMAL || typeId == eos.TYPE_FIGHTING;
}

/**
 * 技の威力を取得
 * @param {Number} moveId
 * @param {Boolean} timeDarkness
 * @returns
 */
export function getMoveBasePower(moveId, timeDarkness) {
  if (!MoveData) {
    console.error('MoveData not found');
    return;
  }
  const move = MoveData[moveId];
  if (timeDarkness) {
    const tdBasePower = getMoveBasePowerTimeDarkness(moveId);
    if (tdBasePower) return tdBasePower;
  }
  return move.Power;
}

/**
 * 技の命中値を取得
 * @param {Number} moveId 技ID
 * @param {Boolean} accuracy2 命中値2を取得
 * @returns
 */
export function getMoveAccuracy(moveId, accuracy2) {
  if (!MoveData) {
    console.error('MoveData not found');
    return;
  }
  const move = MoveData[moveId];
  if (accuracy2) {
    return move.Accuracy2;
  }
  return move.Accuracy1;
}

/**
 * 技の急所率を取得
 * @param {Number} moveId 技ID
 * @returns
 */
export function getMoveCritChance(moveId) {
  if (!MoveData) {
    console.error('MoveData not found');
    return;
  }
  const move = MoveData[moveId];
  return move.Critical;
}

/**
 * 時闇の技の威力を取得
 * @param {Number} moveId
 * @returns
 */
export function getMoveBasePowerTimeDarkness(moveId) {
  for (let i = 0; i < TIME_DARKNESS_BASE_POWER.length; i++) {
    const entry = TIME_DARKNESS_BASE_POWER[i];
    if (entry.id == moveId) {
      return entry.power;
    }
  }
  return null;
}

/**
 * 技のPPを取得
 * @param {*} moveId
 * @returns
 */
export function getMoveMaxPP(moveId) {
  if (!MoveData) {
    console.error('MoveData not found');
  }
  return MoveData[moveId].PP;
}

/**
 * 反動技チェック
 * @param {*} moveId
 */
export function isRecoilMove(moveId) {
  return [
    0x074, // じごくぐるま
    0x08c, // すてみタックル
    0x0cb, // とっしん
    0x0cc, // とびげり
    0x0ce, // とびひざげり
    0x162, // ボルテッカー
    0x1b9, // ウッドハンマー
    0x205, // フレアドライブ
    0x206, // ブレイブバード
    0x215, // もろはのずつき
  ].includes(moveId);
}

/**
 * パンチ技チェック
 * @param {*} moveId
 */
export function isPunchMove(moveId) {
  return [
    0x041, // かみなりパンチ
    0x04b, // きあいパンチ
    0x067, // コメットパンチ
    0x07e, // シャドーパンチ
    0x088, // スカイアッパー
    0x0f6, // ばくれつパンチ
    0x108, // ピヨピヨパンチ
    0x124, // ほのおのパンチ
    0x142, // マッハパンチ
    0x158, // メガトンパンチ
    0x15b, // れいとうパンチ
    0x1ae, // れんぞくパンチ
    0x1f4, // アームハンマー
    0x1fe, // バレットパンチ
  ].includes(moveId);
}

/**
 * 音技チェック
 * @param {*} moveId
 * @returns
 */
export function isSoundMove(moveId) {
  return [
    0x019, // いびき
    0x01a, // いやしのすず
    0x01b, // いやなおと
    0x022, // うたう
    0x053, // きんぞくおん
    0x054, // くさぶえ
    0x0ab, // ちょうおんぱ
    0x0d9, // なきごえ
    0x0f1, // ハイパーボイス
    0x11c, // ほえる
    0x125, // ほろびのうた
    0x212, // むしのさざめき
    0x1be, // おしゃべり
  ].includes(moveId);
}

/**
 * ポケモンの重さ倍率を取得
 * @param {*} pokemonId
 * @returns
 */
export function getMonsterWeight(pokemonId) {
  if (!PokemonData) {
    console.error('PokemonData not found');
    return;
  }
  const pokemon = PokemonData[pokemonId];
  const raw = pokemon.Weight;
  return ((raw >> 8) + (raw & 0xff)) / 0x100;
}
