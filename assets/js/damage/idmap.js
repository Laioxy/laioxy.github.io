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

class IDMap {
  id = 0;
  text = '';
  constructor(id, text) {
    this.id = id;
    this.text = text;
  }
}

/** 技の分類 */
export const MOVE_CATEGORY = [
  new IDMap(eos.CATEGORY_PHYSICAL, '物理'),
  new IDMap(eos.CATEGORY_SPECIAL, '特殊'),
  new IDMap(2, '変化'),
];

/** タイプ相性 */
export const TYPE_MATCHUP = [
  new IDMap(eos.MATCHUP_IMMUNE, '効果なし'),
  new IDMap(eos.MATCHUP_NOT_VERY_EFFECTIVE, '今ひとつ'),
  new IDMap(eos.MATCHUP_NEUTRAL, '普通'),
  new IDMap(eos.MATCHUP_SUPER_EFFECTIVE, '効果抜群'),
];

/** ダメージソース */
export const DAMAGE_MESSAGE = [
  new IDMap(eos.DAMAGE_MESSAGE_MOVE, '技'),
  new IDMap(eos.DAMAGE_MESSAGE_BURN, 'やけど'),
  new IDMap(eos.DAMAGE_MESSAGE_CONSTRICTION, 'しめつけ'),
  new IDMap(eos.DAMAGE_MESSAGE_POISON, 'どく'),
  new IDMap(eos.DAMAGE_MESSAGE_RECOIL_1, '反動1'),
  new IDMap(eos.DAMAGE_MESSAGE_WRAP, 'まきつく'),
  new IDMap(eos.DAMAGE_MESSAGE_COUNTER, 'カウンター'),
  new IDMap(eos.DAMAGE_MESSAGE_CURSE, 'のろい'),
  new IDMap(eos.DAMAGE_MESSAGE_NIGHTMARE, 'あくむ'),
  new IDMap(eos.DAMAGE_MESSAGE_LEECH_SEED, 'やどりぎ'),
  new IDMap(eos.DAMAGE_MESSAGE_SPIKES, 'まきびし'),
  new IDMap(eos.DAMAGE_MESSAGE_PERISH_SONG, 'ほろびのうた'),
  new IDMap(eos.DAMAGE_MESSAGE_DESTINY_BOND, 'みちづれ'),
  new IDMap(eos.DAMAGE_MESSAGE_SLUDGE, 'ヘドロえき'),
  new IDMap(eos.DAMAGE_MESSAGE_HUNGER, 'くうふく'),
  new IDMap(eos.DAMAGE_MESSAGE_CHESTNUT_1, 'イガグリ1'),
  new IDMap(eos.DAMAGE_MESSAGE_CHESTNUT_2, 'イガグリ2'),
  new IDMap(eos.DAMAGE_MESSAGE_PITFALL_TRAP, 'おとしあな'),
  new IDMap(eos.DAMAGE_MESSAGE_BAD_WEATHER, '悪天候'),
  new IDMap(eos.DAMAGE_MESSAGE_MISSED_MOVE, '技失敗自傷'),
  new IDMap(eos.DAMAGE_MESSAGE_RECOIL_2, '反動2'),
  new IDMap(eos.DAMAGE_MESSAGE_STEALTH_ROCK, 'ステルスロック'),
  new IDMap(eos.DAMAGE_MESSAGE_TOXIC_SPIKES, 'どくびし'),
  new IDMap(eos.DAMAGE_MESSAGE_ALMOST_FAINTED, 'HP1自傷'),
  new IDMap(eos.DAMAGE_MESSAGE_BAD_DREAMS, 'ナイトメア'),
  new IDMap(eos.DAMAGE_MESSAGE_SOLAR_POWER, 'サンパワー'),
  new IDMap(eos.DAMAGE_MESSAGE_DRY_SKIN, 'かんそうはだ'),
];
