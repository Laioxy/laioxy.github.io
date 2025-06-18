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
import * as ids from '/js/damage/idmap.js';
import * as Mechanics from '/js/damage/mechanics.js';
import * as MathUtil from '/js/damage/mathutil.js';
import { Monster, DamageData, DungeonState, DamageCalcDiag, Move, NaturalGiftInfo } from '/js/damage/structure.js';

/**
 * 防御側に対して攻撃した時のタイプ相性を取得
 * @param {DungeonState} dungeon
 * @param {Monster} attacker
 * @param {Monster} defender
 * @param {*} targetTypeIdx
 * @param {*} attackType
 */
function getTypeMatchUp(dungeon, attacker, defender, targetTypeIdx, attackType) {
  if (!TypeData) {
    console.error('TypeData not found');
    return;
  }
  // エスパーから悪に攻撃した時のミラクルアイ効果 (専用道具の効果を含む)
  if (
    (defender.statuses.miracle_eye || attacker.exclusiveItemEffectActive(0x46)) &&
    attackType == eos.TYPE_PSYCHIC &&
    defender.types[targetTypeIdx] == eos.TYPE_DARK
  ) {
    return eos.MATCHUP_NEUTRAL;
  }
  // 地面耐性の効果
  if (attackType == eos.TYPE_GROUND) {
    if (dungeon.gravity) {
      if (defender.types[targetTypeIdx] == eos.TYPE_FLYING) {
        return eos.MATCHUP_NEUTRAL;
      }
    } else if (defender.hasConditionalGroundImmunity(dungeon)) {
      return eos.MATCHUP_IMMUNE;
    }
  }
  return TypeData[attackType].MatchUp[defender.types[targetTypeIdx]];
}

/**
 * 防御側が炎技を受けた時にもらいびが発動するか
 * @param {Monster} attacker
 * @param {Monster} defender
 * @returns 2: もらいびを発動してランクを1段階上げる, 1: もらいびを発動するがランクは上がらない, 0: もらいびは発動しない
 */
function flashFireShouldActivate(attacker, defender) {
  if (!defender.isValid()) return 0;

  // 攻撃側がノーマルスキン、または防御側がもらいび以外 -> false
  if (attacker.abilityActive(0x6b) || !defender.abilityActiveDetails(0x48, attacker, true)) {
    return 0;
  }
  return defender.flash_fire_boost < 2 ? 2 : 1;
}

/**
 * 2体のポケモンの性別が等しいかチェック (どちらかが性別不明であればfalse)
 * @param {Monster} monster1
 * @param {Monster} monster2
 */
function GendersEqualNotGenderless(monster1, monster2) {
  let gender1 = monster1.gender;
  let gender2 = monster2.gender;
  if (gender1 == eos.GENDER_GENDERLESS || gender2 == eos.GENDER_GENDERLESS) {
    return false;
  }
  return gender1 == gender2;
}

/**
 * ダメージ倍率を計算
 * @param {DungeonState} dungeon
 * @param {Monster} attacker
 * @param {Monster} defender
 * @param {*} attackPower
 * @param {*} attackType
 * @param {DamageData} damageOut
 * @param {boolean} partial ムラっけ、テクニシャンの影響を受けるか
 * @returns 効果抜群フラグ(superEffective), ダメージ倍率(damageMultOut)
 */
function CalcTypeBasedDamageEffects(dungeon, attacker, defender, attackPower, attackType, damageOut, partial) {
  dungeon.damageDetailLog.attackPower = attackPower;
  dungeon.damageDetailLog.attackType = attackType;

  /** ダメージ倍率 */
  let damageMultOut = 1;

  damageOut.criticalHit = false;
  damageOut.fullTypeImmunity = false;
  if (!defender.isValid()) {
    return true;
  }

  if (!TypeData) {
    console.error('TypeData not found');
    return null;
  }

  damageOut.typeMatchup = 0;
  const typeMatchups = new Array(2);
  for (let i = 0; i < 2; i++) {
    const matchupMultipliers = new Array(4);
    // ムラっけ時の相性倍率
    if (!partial && (attacker.iqSkillEnabled(0x3b, dungeon) || defender.iqSkillEnabled(0x3b, dungeon))) {
      matchupMultipliers[0] = Mechanics.MATCHUP_IMMUNE_ERRATIC;
      matchupMultipliers[1] = Mechanics.MATCHUP_NOTVERY_ERRATIC;
      matchupMultipliers[2] = Mechanics.MATCHUP_NEUTRAL_ERRATIC;
      matchupMultipliers[3] = Mechanics.MATCHUP_SUPER_ERRATIC;
    }
    // 通常の相性倍率
    else {
      matchupMultipliers[0] = Mechanics.MATCHUP_IMMUNE;
      matchupMultipliers[1] = Mechanics.MATCHUP_NOTVERY;
      matchupMultipliers[2] = Mechanics.MATCHUP_NEUTRAL;
      matchupMultipliers[3] = Mechanics.MATCHUP_SUPER;
    }
    if (damageMultOut == 0) break;

    let matchup = eos.MATCHUP_NEUTRAL;
    if (
      !attacker.scrappyShouldActivate(defender, attackType, dungeon) &&
      Mechanics.typeIneffectiveAgainstGhost(attackType) &&
      defender.ghostImmunityActive(attacker, i)
    ) {
      // きもったまの効果なし -> 効果はない
      matchup = eos.MATCHUP_IMMUNE;
      dungeon.damageCalc.ghostImmunityActivated = true;
    } else {
      // きもったまの効果あり -> タイプ相性を取得
      matchup = getTypeMatchUp(dungeon, attacker, defender, i, attackType);
    }
    // 攻撃側がムラっけ or 効果が普通以外 -> 相性倍率を取得
    if (attacker.iqSkillEnabled(0x3b, dungeon) || matchup != eos.MATCHUP_NEUTRAL) {
      damageMultOut *= matchupMultipliers[matchup];
    }
    typeMatchups[i] = matchup;
  }

  dungeon.damageCalc.moveIndivTypeMatchups[0] = typeMatchups[0];
  dungeon.damageCalc.moveIndivTypeMatchups[1] = typeMatchups[1];
  damageOut.typeMatchup = Mechanics.TYPE_MATCHUP_COMBINATOR_TABLE[typeMatchups[0]][typeMatchups[1]];

  // 相性が効果抜群以外、防御側がふしぎなまもり、攻撃タイプがなし以外 -> x0
  let superEffective = damageOut.typeMatchup == eos.MATCHUP_SUPER_EFFECTIVE;
  if (!superEffective) {
    if (defender.abilityActiveDetails(0x35, attacker, true) && attackType != eos.TYPE_NONE) {
      damageMultOut = 0;
      dungeon.damageDetailLog.isWonderGuardActive = true;
    }
  }
  // 攻撃側がいろめがね、相性が今一つ -> x1.2
  if (attacker.abilityActive(0x50) && damageOut.typeMatchup == eos.MATCHUP_NOT_VERY_EFFECTIVE) {
    damageMultOut *= Mechanics.TINTED_LENS_MULTIPLIER;
    dungeon.damageDetailLog.isTintedLensActive = true;
  }
  // 防御側がハードロックかフィルター、相性が抜群 -> x0.75
  if (
    (defender.abilityActiveDetails(0x6c, attacker, true) || defender.abilityActiveDetails(0x6e, attacker, true)) &&
    damageOut.typeMatchup == eos.MATCHUP_SUPER_EFFECTIVE
  ) {
    damageMultOut *= Mechanics.SOLID_ROCK_MULTIPLIER;
    if (defender.abilityActiveDetails(0x6c, attacker, true)) {
      dungeon.damageDetailLog.isSolidRockActive = true; // ハードロック
    } else if (defender.abilityActiveDetails(0x6e, attacker, true)) {
      dungeon.damageDetailLog.isFilterActive = true; // フィルター
    }
  }
  // 専用道具のダメージ半減効果(タイムシールド) -> x0.5
  if (defender.exclusiveItemEffectActive(0x5a)) {
    damageMultOut *= Mechanics.CONST_0_50;
    dungeon.damageDetailLog.isTimeShieldActive = true;
  }
  // [original] 時闇のタイムシールド -> x2
  if (attacker.exclusiveItemEffectActive(0x5a) && attacker.flag_td_timesheald) {
    damageMultOut *= 2;
    dungeon.damageDetailLog.isTimeShieldGlitch = true;
  }
  // 通常攻撃か投擲物以外の攻撃、攻撃側がテクニシャン、威力4以下 -> x1.5
  if (!partial && attacker.abilityActive(0x64) && attackPower <= Mechanics.TECHNICIAN_MOVE_POWER_THRESHOLD) {
    damageMultOut *= Mechanics.CONST_1_50;
    dungeon.damageDetailLog.isTechnicianActive = true;
  }
  // 技のタイプが炎か氷、防御側があついしぼう -> x0.5
  if (
    (attackType == eos.TYPE_FIRE || attackType == eos.TYPE_ICE) &&
    defender.abilityActiveDetails(0x2, attacker, true)
  ) {
    dungeon.damageCalc.fireMoveAbilityDropActivated = true;
    damageMultOut *= Mechanics.CONST_0_50;
  }
  // 技のタイプが炎、もらいびが発動 -> x0
  if (attackType == eos.TYPE_FIRE && flashFireShouldActivate(attacker, defender)) {
    dungeon.damageCalc.flashFireActivated = true;
    damageMultOut = 0;
    superEffective = false;
    damageOut.typeMatchup = eos.MATCHUP_IMMUNE;
    damageOut.criticalHit = false;
    damageOut.fullTypeImmunity = true;
    dungeon.damageDetailLog.isThickFatActive = true;
  }
  // 技のタイプが炎、防御側がたいねつ -> x0.5
  if (attackType == eos.TYPE_FIRE && defender.abilityActiveDetails(0x5f, attacker, true)) {
    dungeon.damageCalc.fireMoveAbilityDropActivated = true;
    damageMultOut *= Mechanics.CONST_0_50;
    dungeon.damageDetailLog.isHeatproofActive = true;
  }
  // 技のタイプが地面、攻撃側がかたやぶり以外かつ防御側のふゆうが発動 -> x0
  if (
    attackType == eos.TYPE_GROUND &&
    ((!attacker.abilityActive(0x53) && defender.levitateActive(dungeon)) ||
      defender.hasConditionalGroundImmunity(dungeon))
  ) {
    damageMultOut = 0;
    superEffective = false;
    damageOut.typeMatchup = eos.MATCHUP_IMMUNE;
    damageOut.criticalHit = false;
    damageOut.fullTypeImmunity = true;
    dungeon.damageDetailLog.isLevitateActive = true;
  }
  // 技のタイプが水、攻撃側がげきりゅう、攻撃側のHPが1/4以下 -> x2
  if (attackType == eos.TYPE_WATER && attacker.abilityActive(0x10)) {
    const maxHp = attacker.hp_max;
    if (maxHp > Mechanics.MAX_HP_CAP) {
      maxHp = Mechanics.MAX_HP_CAP;
    }
    if (attacker.hp <= Math.trunc(maxHp / 4)) {
      dungeon.damageCalc.torrentBoostActivated = true;
      damageMultOut *= 2;
      dungeon.damageDetailLog.isTorrentActive = true;
    }
  }
  // 技のタイプが草、攻撃側がしんりょく、攻撃側のHPが1/4以下 -> x2
  if (attackType == eos.TYPE_GRASS && attacker.abilityActive(0x1a)) {
    const maxHp = attacker.hp_max;
    if (maxHp > Mechanics.MAX_HP_CAP) {
      maxHp = Mechanics.MAX_HP_CAP;
    }
    if (attacker.hp <= Math.trunc(maxHp / 4)) {
      dungeon.damageCalc.overgrowBoostActivated = true;
      damageMultOut *= 2;
      dungeon.damageDetailLog.isOvergrowActive = true;
    }
  }
  // 技のタイプが虫、攻撃側がむしのしらせ、攻撃側のHPが1/4以下 -> x2
  if (attackType == eos.TYPE_BUG && attacker.abilityActive(0x43)) {
    const maxHp = attacker.hp_max;
    if (maxHp > Mechanics.MAX_HP_CAP) {
      maxHp = Mechanics.MAX_HP_CAP;
    }
    if (attacker.hp <= Math.trunc(maxHp / 4)) {
      dungeon.damageCalc.swarmBoostActivated = true;
      damageMultOut *= 2;
      dungeon.damageDetailLog.isSwarmActive = true;
    }
  }
  // 技のタイプが炎、攻撃側がもうか、攻撃側のHPが1/4以下 -> x2
  if (attackType == eos.TYPE_FIRE) {
    if (attacker.abilityActive(0x46)) {
      const maxHp = attacker.hp_max;
      if (maxHp > Mechanics.MAX_HP_CAP) {
        maxHp = Mechanics.MAX_HP_CAP;
      }
      if (attacker.hp <= Math.trunc(maxHp / 4)) {
        dungeon.damageCalc.fireMoveAbilityBoostActivated = true;
        damageMultOut *= 2;
        dungeon.damageDetailLog.isBlazeActive = true;
      }
    }
    // 技のタイプが炎、防御側がかんそうはだ -> x1.5
    if (defender.abilityActiveDetails(0x55, attacker, true)) {
      dungeon.damageCalc.fireMoveAbilityBoostActivated = true;
      damageMultOut *= Mechanics.CONST_1_50;
      dungeon.damageDetailLog.isDrySkinActive = true;
    }
  }

  // 攻撃側がやけど状態 -> x0.8
  if (attacker.statuses.burn) {
    damageMultOut *= Mechanics.BURN_DAMAGE_MULTIPLIER;
    dungeon.damageDetailLog.isBurnActive = true;
  }

  // タイプ一致
  if (damageMultOut != 0 && attacker.isType(attackType)) {
    dungeon.damageCalc.stabBoostActivated = true;
    // 攻撃側がてきおうりょく -> x2
    if (attacker.abilityActive(0x63)) {
      damageMultOut *= 2;
      dungeon.damageDetailLog.isAdaptabilitySTAB = true;
    }
    // それ以外 -> x1.5
    else {
      damageMultOut *= Mechanics.CONST_1_50;
      dungeon.damageDetailLog.isSTAB = true;
    }
  }

  const weather = attacker.perceivedWeather(dungeon);
  // ひざしがつよい
  if (weather == eos.WEATHER_SUNNY) {
    // 技のタイプが炎 -> x1.5
    if (attackType == eos.TYPE_FIRE) {
      dungeon.damageCalc.sunnyMultiplierActivated = true;
      damageMultOut *= Mechanics.CONST_1_50;
      dungeon.damageDetailLog.isSunnyFireActive = true;
    }
    // 技のタイプが水 -> x0.5
    else if (attackType == eos.TYPE_WATER) {
      dungeon.damageCalc.sunnyMultiplierActivated = true;
      damageMultOut *= Mechanics.CONST_0_50;
      dungeon.damageDetailLog.isSunnyWaterActive = true;
    }
  }
  // あめ
  if (weather == eos.WEATHER_RAIN) {
    // 技のタイプが炎 -> x0.5
    if (attackType == eos.TYPE_FIRE) {
      dungeon.damageCalc.rainMultiplierActivated = true;
      damageMultOut *= Mechanics.CONST_0_50;
    }
    // 技のタイプが水 -> x1.5
    else if (attackType == eos.TYPE_WATER) {
      dungeon.damageCalc.rainMultiplierActivated = true;
      damageMultOut *= Mechanics.CONST_1_50;
    }
  }
  // くもり、技のタイプがノーマル以外 -> x0.75
  if (weather == eos.WEATHER_CLOUDY && attackType != eos.TYPE_NORMAL) {
    damageMultOut *= Mechanics.CLOUDY_DAMAGE_MULTIPLIER;
    dungeon.damageCalc.cloudyDropActivated = true;
    dungeon.damageDetailLog.isCloudyActive = true;
  }
  // どろあそび状態または天候きり、技のタイプが電気 -> x0.5
  if ((dungeon.mud_sport || weather == eos.WEATHER_FOG) && attackType == eos.TYPE_ELECTRIC) {
    dungeon.damageCalc.electricMoveDampened = true;
    damageMultOut *= Mechanics.CONST_0_50;

    if (weather == eos.WEATHER_FOG) {
      dungeon.damageDetailLog.isFogActive = true;
    } else if (dungeon.mud_sport) {
      dungeon.damageDetailLog.isMudSportActive = true;
    }
  }
  // みずあそび状態、技のタイプが炎 -> x0.5
  if (dungeon.water_sport && attackType == eos.TYPE_FIRE) {
    dungeon.damageCalc.waterSportDropActivated = true;
    damageMultOut *= Mechanics.CONST_0_50;
    dungeon.damageDetailLog.isWaterSportActive = true;
  }

  // 技のタイプが電気、攻撃側がじゅうでん状態
  if (attackType == eos.TYPE_ELECTRIC && attacker.statuses.charge) {
    dungeon.damageCalc.chargeBoostActivated = true;
    damageMultOut *= 2;
    dungeon.damageDetailLog.isChargeActive = true;
  }

  return {
    superEffective: superEffective,
    damageMultOut: damageMultOut,
  };
}

/**
 * ダメージ計算
 * @param {DungeonState} dungeon ダンジョン
 * @param {Monster} attacker 攻撃側
 * @param {Monster} defender 防御側
 * @param {Number} moveType 技のタイプ
 * @param {Number} movePower 技の威力
 * @param {Number} moveCrit 技の急所率
 * @param {DamageData} damageOut
 * @param {*} damageMult
 * @param {Number} moveId 技ID
 * @param {Boolean} fullCalc
 */
export function CalcDamage(
  dungeon,
  attacker,
  defender,
  moveType,
  movePower,
  critChance,
  damageOut,
  damageMult,
  moveId,
  fullCalc,
) {
  // damageOut = new DamageData();
  let atk_stage_boost = 0; // 攻撃系能力ランク上昇量
  let def_stage_boost = 0; // 防御系能力ランク上昇量
  let def_stage = 0; // 防御系ランク
  const moveCategory = getMoveCategory(moveId); // 技の分類 (0=物理, 1=特殊, 2=変化)

  // ステータス倍率
  let atk_stage_mult =
    moveCategory == eos.CATEGORY_PHYSICAL
      ? Math.pow(0.5, Math.abs(attacker.half_atk))
      : Math.pow(0.5, Math.abs(attacker.half_sp_atk));
  let def_stage_mult =
    moveCategory == eos.CATEGORY_PHYSICAL
      ? Math.pow(0.5, Math.abs(defender.half_def))
      : Math.pow(0.5, Math.abs(defender.half_sp_def));

  // さきどり有効 -> x1.5
  if (attacker.flag_me_first) {
    damageMult *= Mechanics.ME_FIRST_MULTIPLIER;
    dungeon.damageDetailLog.isMeFirstActive = true;
  }
  // 特性すてみ + 反動技 -> x1.5
  if (attacker.abilityActive(92) && Mechanics.isRecoilMove(moveId)) {
    damageMult = (damageMult * 3) / 2;
    dungeon.damageDetailLog.isRecklessActive = true;
  }
  // 特性てつのこぶし + パンチ技 -> x1.5
  if (attacker.abilityActive(101) && Mechanics.isPunchMove(moveId)) {
    damageMult *= Mechanics.CONST_1_50;
    dungeon.damageDetailLog.isIronFistActive = true;
  }
  // 特性ノーマルスキン -> ノーマル技にする
  if (attacker.abilityActive(107)) {
    moveType = 1;
    dungeon.damageDetailLog.isNormalizeActive = true;
  }
  // 技さばきのつぶて -> 技のタイプを攻撃側の第一タイプにする
  if (moveId == 467) {
    moveType = attacker.types[0];
  }

  dungeon.damageCalc = new DamageCalcDiag();

  // リーダー以外でおなかが0 or 通常攻撃かつ防御側の特性ふしぎなまもり
  if (
    (!attacker.is_leader && attacker.belly == 0) ||
    (moveId == 355 && defender.abilityActiveDetails(53, attacker, true))
  ) {
    // ダメージを1にする
    damageOut.damage = 1;
    damageOut.damageMessage = eos.DAMAGE_MESSAGE_MOVE;
    damageOut.typeMatchup = eos.MATCHUP_NEUTRAL;
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

  // 特性ダウンロード
  if (attacker.abilityActive(96)) {
    if (defender.stage_def < defender.stage_sp_def) {
      // 防御側のステータスが防御＜特防, かつ物理技を使用 => 攻撃+1で計算
      if (moveCategory == eos.CATEGORY_PHYSICAL) {
        atk_stage_boost = 1;
        dungeon.damageCalc.abilityOffenseModifier += 1;
      }
    } else {
      // 防御側のステータスが防御≧特防, かつ特殊技を使用 => 特攻+1で計算
      if (moveCategory == eos.CATEGORY_SPECIAL) {
        atk_stage_boost = 1;
        dungeon.damageCalc.abilityOffenseModifier += 1;
      }
    }
  }

  // 炎タイプのみ、特性もらいびの補正を考慮する
  if (attacker.types.includes(2)) {
    let flashFireBoost = attacker.flash_fire_boost;
    dungeon.damageCalc.flashFireBoost = flashFireBoost;
    atk_stage_boost += flashFireBoost;
  }
  // こうげきてき -> 攻撃, 特攻+1
  if (attacker.iqSkillEnabled(0x22, dungeon)) {
    atk_stage_boost += 1;
    dungeon.damageCalc.iqSkillOffenseModifier += 1;
  }
  // みがまえる -> 攻撃, 特攻-1
  if (attacker.iqSkillEnabled(0x23, dungeon)) {
    atk_stage_boost -= 1;
    dungeon.damageCalc.iqSkillOffenseModifier -= 1;
  }
  // かたならし -> 攻撃, 特攻+1
  if (attacker.iqSkillEnabled(0x3c, dungeon) && attacker.flag_practice_swinger) {
    atk_stage_boost += 1;
    dungeon.damageCalc.iqSkillOffenseModifier += 1;
  }
  // おうえん持ちのポケモンが隣接 -> 攻撃, 特攻+1
  if (dungeon.otherMonsters.iqSkillEnabled(0x32, dungeon)) {
    atk_stage_boost += 1;
  }

  // 物理
  if (moveCategory == eos.CATEGORY_PHYSICAL) {
    // とうそうしん (同性で攻撃+1, 異性で攻撃-1)
    if (attacker.abilityActive(0x68)) {
      if (GendersEqualNotGenderless(attacker, defender)) {
        atk_stage_boost += 1;
        dungeon.damageCalc.abilityOffenseModifier += 1;
      } else if (attacker.gender != eos.GENDER_GENDERLESS && defender.gender != eos.GENDER_GENDERLESS) {
        atk_stage_boost -= 1;
        dungeon.damageCalc.abilityOffenseModifier -= 1;
      }
    }
    // 攻撃側または攻撃側の仲間がフラワーギフト,
    // かつ攻撃側がひざしがつよいの影響を受けている -> 攻撃+1
    if (
      attacker.perceivedWeather(dungeon) == eos.WEATHER_SUNNY &&
      (attacker.abilityActive(0x71) || attacker.otherMonsterAbilityActive(0x71, dungeon))
    ) {
      atk_stage_boost += 1;
      dungeon.damageCalc.abilityOffenseModifier += 1;
    }
  }
  // 特殊
  else {
    // サンパワーかつひざしがつよいの影響を受けている -> 特攻+2
    if (attacker.abilityActive(0x5a) && attacker.perceivedWeather(eos.WEATHER_SUNNY)) {
      atk_stage_boost += 2;
      dungeon.damageCalc.abilityOffenseModifier += 2;
    }
    // 防御側がひざしがつよいの影響を受けている,
    // かつ防御側または防御側の仲間がフラワーギフト -> 特防+1
    if (
      defender.perceivedWeather(dungeon) == eos.WEATHER_SUNNY &&
      (defender.abilityActive(0x71) || defender.otherMonsterAbilityActive(0x71, dungeon))
    ) {
      def_stage = 1;
      dungeon.damageCalc.abilityDefenseModifier += 1;
    }
    // 防御側がすなあらしの影響を受けている,
    // かつ防御側のタイプが岩タイプ -> 特防+2
    if (defender.perceivedWeather(dungeon) == eos.WEATHER_SANDSTORM) {
      if (defender.types.includes(0xd)) {
        def_stage += 2;
      }
    }
  }

  // デオキシス (アタック) -> 攻撃, 特攻+2
  if (attacker.id == 0x1a3) {
    atk_stage_boost += 2;
  }
  // デオキシス (ディフェンス) -> 攻撃, 特攻-2
  if (attacker.id == 0x1a4) {
    atk_stage_boost -= 2;
  }
  // デオキシス (スピード) -> 攻撃, 特攻-2
  if (attacker.id == 0x1a5) {
    atk_stage_boost -= 2;
  }
  // ギラティナ (アナザー) -> 攻撃, 特攻-2
  if (attacker.id == 0x211) {
    atk_stage_boost -= 2;
  }
  // ギラティナ (オリジン) -> 攻撃, 特攻+2
  if (attacker.id == 0x218) {
    atk_stage_boost += 2;
  }

  // 攻撃系ランク統合
  let atk_stage =
    moveCategory == eos.CATEGORY_PHYSICAL
      ? attacker.stage_atk + atk_stage_boost
      : attacker.stage_sp_atk + atk_stage_boost;
  // いかりのつぼが有効 -> 攻撃系ランク最大(20)
  if (attacker.flag_anger_point && attacker.abilityActive(0x4f)) {
    atk_stage = 20;
  }

  // 物理
  if (moveCategory == eos.CATEGORY_PHYSICAL) {
    // ロケットずつき中は防御+1
    if (defender.statuses.skull_bash) {
      dungeon.damageCalc.skullBashDefenseBoostActivated = true;
      def_stage += 1;
    }
    // まけんき -> 防御-1
    if (defender.iqSkillEnabled(0x31, dungeon)) {
      def_stage -= 1;
      dungeon.damageCalc.iqSkillDefenseModifier -= 1;
    }
  }

  // こうげきてき -> 防御, 特防-1
  if (defender.iqSkillEnabled(0x22, dungeon)) {
    def_stage -= 1;
    dungeon.damageCalc.iqSkillDefenseModifier -= 1;
  }
  // みがまえる -> 防御, 特防+1
  if (defender.iqSkillEnabled(0x23, dungeon)) {
    def_stage += 1;
    dungeon.damageCalc.iqSkillDefenseModifier += 1;
  }

  // デオキシス (アタック) -> 防御, 特防-2
  if (defender.id == 0x1a3) {
    def_stage -= 2;
  }
  // デオキシス (ディフェンス) -> 防御, 特防+2
  if (defender.id == 0x1a4) {
    def_stage += 2;
  }
  // デオキシス (スピード) -> 防御, 特防-2
  if (defender.id == 0x1a5) {
    def_stage -= 2;
  }
  // 日本版のみギラティナのフォルム補正にバグがあり、
  // 防御関連の補正が相手(attacker)に適用される
  // 海外版では正しく自分自身(defender)に適用する
  const entity_jpGiratina = dungeon.region_jp ? attacker : defender;
  // ギラティナ (アナザー) -> 防御, 特防+2
  if (entity_jpGiratina.id == 0x211) {
    def_stage += 2;
  }
  // ギラティナ (オリジン) -> 防御, 特防-2
  if (entity_jpGiratina.id == 0x218) {
    def_stage -= 2;
  }

  def_stage += moveCategory == eos.CATEGORY_PHYSICAL ? defender.stage_def : defender.stage_sp_def;

  // おしおき -> 相手の上昇したランク数分を自身の攻撃ランクとして攻撃
  if (moveId == 0x1bd) {
    atk_stage_boost = 0;

    // 相手の攻撃ランク分の補正を適用
    let stage = defender.stage_atk;
    if (stage > 10) atk_stage_boost = ((stage - 10) << 16) >> 16;
    // 相手の防御ランク分の補正を適用
    stage = defender.stage_def;
    if (stage > 10) atk_stage_boost = ((atk_stage_boost + stage - 10) << 16) >> 16;
    // 相手の特攻ランク分の補正を適用
    stage = defender.stage_sp_atk;
    if (stage > 10) atk_stage_boost = ((atk_stage_boost + stage - 10) << 16) >> 16;
    // 相手の特防ランク分の補正を適用
    stage = defender.stage_sp_def;
    if (stage > 10) atk_stage_boost = ((atk_stage_boost + stage - 10) << 16) >> 16;

    atk_stage += atk_stage_boost;
  }

  // てんねん
  if (attacker.abilityActive(0x67)) {
    def_stage = 10;
    def_stage_mult = 1;
  } else if (defender.abilityActive(0x67)) {
    atk_stage = 10;
    atk_stage_mult = 1;
  }

  // 下限処理
  if (atk_stage < 0) atk_stage = 0;
  // 上限処理
  if (atk_stage > 20) atk_stage = 20;

  // 攻撃指数の計算
  dungeon.damageCalc.offensiveStatStage = atk_stage;
  dungeon.damageCalc.offensiveStat = moveCategory == eos.CATEGORY_PHYSICAL ? attacker.atk : attacker.sp_atk;
  const atk_stat_stage_mult = Mechanics.OFFENSIVE_STAT_STAGE_MULTIPLIERS[atk_stage];
  const atk_mult =
    moveCategory == eos.CATEGORY_PHYSICAL ? attacker.atk * atk_stat_stage_mult : attacker.sp_atk * atk_stat_stage_mult;
  let atk = Math.trunc(atk_mult * atk_stage_mult);

  // 下限処理
  if (def_stage < 0) def_stage = 0;
  // 上限処理
  if (def_stage > 20) def_stage = 20;

  // 防御指数の計算
  dungeon.damageCalc.defensiveStatStage = def_stage;
  dungeon.damageCalc.defensiveStat = moveCategory == eos.CATEGORY_PHYSICAL ? defender.def : defender.sp_def;
  const def_mult =
    moveCategory == eos.CATEGORY_PHYSICAL
      ? defender.def * Mechanics.DEFENSIVE_STAT_STAGE_MULTIPLIERS[def_stage]
      : defender.sp_def * Mechanics.DEFENSIVE_STAT_STAGE_MULTIPLIERS[def_stage];
  let def = Math.trunc(def_mult * def_stage_mult);

  // 専用道具のステータス上昇効果を適用 (チームメンバーのみ)
  if (attacker.is_member) {
    atk += attacker.exclusiveItemOffenseBoost(moveCategory);
  }
  if (defender.is_member) {
    def += defender.exclusiveItemOffenseBoost(moveCategory);
  }

  // 物理
  if (moveCategory == eos.CATEGORY_PHYSICAL) {
    // パワーバンダナ
    if (attacker.itemActive(0x1a)) {
      atk += Mechanics.POWER_BAND_STAT_BOOST;
      dungeon.damageCalc.itemAtkModifier += Mechanics.POWER_BAND_STAT_BOOST;
    }
    // ゴンベのハラマキ
    if (attacker.itemActive(0x32)) {
      atk += Mechanics.MUNCH_BELT_STAT_BOOST;
      dungeon.damageCalc.itemAtkModifier += Mechanics.MUNCH_BELT_STAT_BOOST;
    }
    // 波動色リボン
    if (attacker.auraBowActive()) {
      atk += Mechanics.AURA_BOW_STAT_BOOST;
      // [バグ] 何故か攻撃上昇分が特攻上昇分としてカウントされる？ (計算には影響なし)
      dungeon.damageCalc.itemSpAtkModifier += Mechanics.AURA_BOW_STAT_BOOST;
    }
    if (fullCalc) {
      // ぼうぎょスカーフ
      if (defender.itemActive(0x025)) {
        def += Mechanics.DEF_SCARF_STAT_BOOST;
        dungeon.damageCalc.itemDefModifier += Mechanics.DEF_SCARF_STAT_BOOST;
      }
      // 波動色リボン
      if (defender.auraBowActive()) {
        def += Mechanics.AURA_BOW_STAT_BOOST;
        dungeon.damageCalc.itemDefModifier += Mechanics.AURA_BOW_STAT_BOOST;
      }
    }
  }
  // 特殊
  else {
    if (fullCalc) {
      // キトサンバンダナ
      if (defender.itemActive(0x29)) {
        def += Mechanics.ZINC_BAND_STAT_BOOST;
        dungeon.damageCalc.itemSpDefModifier += Mechanics.ZINC_BAND_STAT_BOOST;
      }
      // 波動色リボン
      if (defender.auraBowActive()) {
        def += Mechanics.AURA_BOW_STAT_BOOST;
        // [バグ] 何故か特防上昇分が防御上昇分としてカウントされる？ (計算には影響なし)
        dungeon.damageCalc.itemDefModifier += Mechanics.AURA_BOW_STAT_BOOST;
      }
    }
    // スペシャルリボン
    if (attacker.itemActive(0x28)) {
      atk += Mechanics.SPECIAL_BAND_STAT_BOOST;
      dungeon.damageCalc.itemSpAtkModifier += Mechanics.SPECIAL_BAND_STAT_BOOST;
    }
    // ゴンベのハラマキ
    if (attacker.itemActive(0x32)) {
      atk += Mechanics.MUNCH_BELT_STAT_BOOST;
      dungeon.damageCalc.itemSpAtkModifier += Mechanics.MUNCH_BELT_STAT_BOOST;
    }
    // 波動色リボン ([バグ] 防御側が持っていると攻撃側の特攻が上がる？)
    if (defender.auraBowActive()) {
      atk += Mechanics.AURA_BOW_STAT_BOOST;
      dungeon.damageCalc.itemSpAtkModifier += Mechanics.AURA_BOW_STAT_BOOST;
    }
  }

  // 威力計算
  const power = movePower * atk_stat_stage_mult * atk_stage_mult;

  let atk_mult_int = 1; // atk 乗算値
  let atk_div = 1; // atk 除算値
  let def_mult_int = 1; // def 乗算値
  let def_div = 1; // def 除算値
  let not_physical = MoveNotPhysial(moveId);

  // こんじょう発動かつ物理技 -> x2
  if (!not_physical && attacker.abilityActive(0x11) && attacker.hasNegativeStatus(true)) {
    atk_mult_int = 2;
  }
  // ちからもち/ヨガパワー発動かつ物理技 -> x1.5
  if (attacker.abilityActive(0x22) || attacker.abilityActive(0x4b)) {
    if (dungeon.rng.rollHugePurePower() && !not_physical) {
      atk_mult_int *= 3;
      atk_div = 2;
    }
  }
  // はりきりかつ物理技 -> x1.5
  if (attacker.abilityActive(0x30) && !not_physical) {
    atk_mult_int *= 3;
    atk_div <<= 1;
  }

  const teamIdx = attacker.is_member ? 1 : 0;
  // プラスかつマイナスの仲間が隣接 -> x1.5
  if (attacker.abilityActive(0x38) && not_physical && dungeon.minus[teamIdx]) {
    atk_div *= 10;
    atk_mult_int *= 15;
  }
  // マイナスかつプラスの仲間が隣接 -> x1.5
  if (attacker.abilityActive(0x3f) && not_physical && dungeon.plus[teamIdx]) {
    atk_div *= 10;
    atk_mult_int *= 15;
  }

  // いかく -> 相手に攻撃x0.8
  if (defender.abilityActiveDetails(0x6, attacker, true)) {
    atk_mult_int <<= 2;
    atk_div *= 5;
  }
  // ふしぎなうろこ -> 防御x1.5
  if (defender.abilityActiveDetails(0x34, attacker, true)) {
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

  // 上限・下限処理
  if (atk < 0) atk = 0;
  if (atk >= Mechanics.OFFENSE_STAT_MAX) atk = Mechanics.OFFENSE_STAT_MAX;

  dungeon.damageCalc.damageCalcDef = def;

  // レベル補正
  const def_fx = def;
  const level = attacker.level;
  const flv = attacker.level + (atk - def) / 8;
  const at = power + atk;
  dungeon.damageCalc.damageCalcAt = Math.round(at);
  dungeon.damageCalc.attackerLevel = attacker.level;
  dungeon.damageCalc.damageCalcFlv = Math.round(flv);

  // 基礎ダメージ計算
  const atScaled = at * Mechanics.CONST_153_DIV_256;
  const defScaled = def_fx * Mechanics.CONST_NEG0_5;
  const lnArg = Math.round((flv + 50) * 10);
  const ln = MathUtil.clampedLn(lnArg);
  const lnScaled = ln * 50;
  let base = defScaled + atScaled + lnScaled + -311;

  // 敵補正
  if (dungeon.genInfo.fixedRoomId != eos.FIXED_SUBSTITUTE_ROOM && !attacker.is_member) {
    base /= Mechanics.CONST_85_DIV_64;
  }
  // 基礎ダメージ上限下限
  if (999 < base) base = 999;
  if (base < 1) base = 1;

  // ダメージ倍率の計算
  const calcTypeBasedDamageEffectsResult = CalcTypeBasedDamageEffects(
    dungeon,
    attacker,
    defender,
    movePower,
    moveType,
    damageOut,
    Mechanics.isRegularAttackOrProjectile(moveId),
  );
  let damageMultDynamic = calcTypeBasedDamageEffectsResult.damageMultOut;
  let superEffective = calcTypeBasedDamageEffectsResult.superEffective;

  // リフレクター, ひかりのかべ (無効化する専用道具を持っていない)
  if (fullCalc && !attacker.exclusiveItemEffectActive(0x44)) {
    // 物理技かつ、かわらわり以外の技を使っていて防御側がリフレクター状態または物理半減の専用道具の効果が発動
    // -> x0.5
    if (
      moveCategory == eos.CATEGORY_PHYSICAL &&
      ((moveId != 0x48 && defender.statuses.reflect) || defender.exclusiveItemEffectActive(0x1e))
    ) {
      damageMultDynamic *= Mechanics.CONST_0_50;
      dungeon.damageCalc.halfPhysicalDamageActivated = true;
    }
    // 特殊技かつ、防御側がひかりのかべ状態または特殊半減の専用道具の効果が発動 -> x0.5
    if (
      moveCategory == eos.CATEGORY_SPECIAL &&
      (defender.statuses.light_screen || defender.exclusiveItemEffectActive(0x1f))
    ) {
      damageMultDynamic *= Mechanics.CONST_0_50;
      dungeon.damageCalc.halfSpecialDamageActivated = true;
    }
  }

  // 防御側がおまじない状態以外かつ、防御側がカブトアーマー以外かつ、防御側がシェルアーマー以外かつ、防御側がかしこさ「かみひとえ」を持たない
  if (
    !defender.statuses.lucky_chant &&
    !defender.abilityActiveDetails(0xc, attacker, true) &&
    !defender.abilityActiveDetails(0x13) &&
    !defender.iqSkillEnabled(0x40, dungeon)
  ) {
    // メス以外 -> 急所率x1.5
    if (attacker.gender != eos.GENDER_FEMALE) {
      critChance += critChance / 2;
    }
    // きあいだめ状態 -> 急所率100% (内部的に999%として扱われる)
    if (attacker.statuses.focus_energy) {
      dungeon.damageCalc.focusEnergyActivated = true;
      critChance = Mechanics.OFFENSE_STAT_MAX;
    } else {
      // 攻撃側がピントレンズ装備, または攻撃側のかしこさ「ねらいうち」が有効 -> 急所率+15%
      if (attacker.itemActive(0x13) || attacker.iqSkillEnabled(0x1d, dungeon)) {
        dungeon.damageCalc.scopeLensOrSharpshooterActivated = true;
        critChance += Mechanics.SCOPE_LENS_CRIT_RATE_BOOST;
      }
      // 攻撃側がきょううん -> 急所率+10%
      if (attacker.abilityActive(0x58)) {
        dungeon.damageCalc.superLuckActivated = true;
        critChance += Mechanics.SUPER_LUCK_CRIT_RATE_BOOST;
      }
      // 防御側がねらわれハチマキ装備 -> 急所率+15%
      if (defender.itemActive(0x14)) {
        dungeon.damageCalc.patsyBandActivated = true;
        critChance += Mechanics.SCOPE_LENS_CRIT_RATE_BOOST; // ピントレンズと同じ箇所から参照
      }
      // 効果抜群かつ、攻撃側のかしこさ「あいしょうばつぐん」が有効 -> 急所率40% (上書き)
      if (superEffective && attacker.iqSkillEnabled(0x1, dungeon)) {
        critChance = Mechanics.TYPE_ADVANTAGE_MASTER_CRIT_RATE;
        dungeon.damageCalc.typeAdvantageMasterActivated = true;
      }
    }

    // 急所 (専用道具の急所無効効果が発動していない)
    if (dungeon.rng.rollCriticalHit(critChance) && !defender.exclusiveItemEffectActive(0x5)) {
      damageOut.criticalHit = true;
      // スナイパー -> x2
      if (attacker.abilityActive(0x5d)) {
        damageMultDynamic *= 2;
        dungeon.damageCalc.sniperActivated = true;
      }
      // それ以外 -> x1.5
      else {
        damageMultDynamic *= Mechanics.CONST_1_50;
      }
    }
  }

  // 最終ダメージ計算
  dungeon.damageCalc.damageCalcBase = Math.round(base);
  base *= damageMultDynamic;
  dungeon.damageCalc.staticDamageMult = damageMult;
  base *= damageMult;
  dungeon.damageCalc.damageCalc = Math.round(base);

  const variance = dungeon.rng.rollDamageVariance();
  base *= variance;
  dungeon.damageCalc.damageCalcRandomMultPct = Math.round(100 * variance);
  damageOut.damage = Math.round(base);

  // 投擲物 (なげたもの) -> x0.5
  if (moveId == 0x195) {
    damageOut.damage = Math.ceil(damageOut.damage * Mechanics.CONST_0_50);
  }
  // ごうわん補正 -> x1.5
  if (moveId == 0x195 && attacker.iqSkillEnabled(0x2f, dungeon)) {
    damageOut.damage = Math.ceil(damageOut.damage * Mechanics.POWER_PITCHER_DAMAGE_MULTIPLIER);
    dungeon.damageDetailLog.isPowerPitcherActive = true;
  }

  // エアーブレード -> x1.5
  if (damageOut.damage > 0 && attacker.exclusiveItemEffectActive(0x5b)) {
    damageOut.damage = Math.ceil(damageOut.damage * Mechanics.AIR_BLADE_DAMAGE_MULTIPLIER);
    dungeon.damageDetailLog.isAirBladeActive = true;
  }

  if (damageOut.damage == 0) {
    damageOut.criticalHit = false;
  }
  defender.flag_anger_point = damageOut.criticalHit;
}

/**
 * 技の命中チェック
 * @param {DungeonState} dungeon
 * @param {Monster} attacker
 * @param {Monster} defender
 * @param {Number} moveId
 * @param {Boolean} useSecondAccuracy
 * @param {Boolean} neverMissSelf
 * @returns
 */
export function MoveHitCheck(dungeon, attacker, defender, moveId, useSecondAccuracy, neverMissSelf) {
  if (neverMissSelf && attacker === defender) {
    return true;
  }

  // 通常攻撃でいっぱつひっちゅうが有効 -> 必中
  if (moveId == 0x163 && attacker.iqSkillEnabled(0x4, dungeon)) {
    return true;
  }
  // ひっちゅう状態 -> 必中
  if (attacker.statuses.sure_shot) {
    return true;
  }
  // からぶり状態 -> 外れる
  if (attacker.statuses.whiffer) {
    return false;
  }

  let moveAccuracy = Mechanics.getMoveAccuracy(moveId, useSecondAccuracy);
  if (moveAccuracy > 100) {
    return true;
  }
  // みきりハチマキ -> 命中値-30
  if (defender.itemActive(0x2a)) {
    moveAccuracy -= Mechanics.DETECT_BAND_MOVE_ACCURACY_DROP;
  }
  // すばやくかいひ -> 命中値-10
  if (defender.iqSkillEnabled(0x5, dungeon)) {
    moveAccuracy -= Mechanics.QUICK_DODGER_MOVE_ACCURACY_DROP;
  }

  let accuracyBoost = 0;
  // 特性ふくがん -> 命中+2
  if (attacker.abilityActive(0x33)) {
    accuracyBoost = 2;
  }
  // かみなり
  if (moveId == 0x40) {
    const weather = attacker.perceivedWeather(dungeon);
    // 天候あめ -> 必中
    if (weather == eos.WEATHER_RAIN) {
      return true;
    }
    // 天候ひざしがつよい -> 命中-2
    if (weather == eos.WEATHER_SUNNY) {
      accuracyBoost -= 2;
    }
  }

  // 天候があられの状態でふぶき -> 必中
  if (moveId == 0x10e && attacker.perceivedWeather(dungeon) == eos.WEATHER_HAIL) {
    return true;
  }
  // しゅうちゅう
  if (attacker.iqSkillEnabled(0x30, dungeon)) {
    accuracyBoost += 1;
  }

  // みやぶる状態 -> 回避率を無視
  let evasionStage = defender.stage_evasion;
  if (defender.statuses.exposed) {
    evasionStage = 10;
  }

  let evasionBoost = 0;
  // すながくれ発動 -> 回避+2
  if (
    defender.perceivedWeather(dungeon) == eos.WEATHER_SANDSTORM &&
    defender.abilityActiveDetails(0x1d, attacker, true)
  ) {
    evasionBoost = 2;
  }
  // 攻撃側のはりきりが発動 (物理技) -> 回避+2
  if (attacker.abilityActive(0x30) && !Mechanics.MoveNotPhysial(moveId)) {
    evasionBoost += 2;
  }
  // どたんばが有効, HPが1/4以下 -> 回避+2
  if (defender.iqSkillEnabled(0x3f, dungeon)) {
    let maxHp = defender.hp_max;
    if (maxHp > Mechanics.MAX_HP_CAP) {
      maxHp = Mechanics.MAX_HP_CAP;
    }
    if (defender.hp <= Math.trunc(maxHp / 4)) {
      evasionBoost += 2;
    }
  }
  // しゅうちゅうが有効 -> 回避-1
  if (defender.iqSkillEnabled(0x30, dungeon)) {
    evasionBoost -= 1;
  }
  // ちどりあし発動 (こんらんorまどわし) -> 回避+3
  if (
    defender.abilityActiveDetails(0x62, attacker, true) &&
    (defender.statuses.confusion || defender.statuses.cross_eyed)
  ) {
    evasionBoost += 3;
  }
  // ゆきがくれ発動 -> 回避+2
  if (
    defender.abilityActiveDetails(0x77, attacker, true) &&
    (defender.perceivedWeather(dungeon) == eos.WEATHER_HAIL || defender.perceivedWeather(dungeon) == eos.WEATHER_SNOW)
  ) {
    evasionBoost += 2;
  }
  // 天候で回避率が上がる専用道具効果発動 -> 回避+1
  const weather = defender.perceivedWeather(dungeon);
  if (
    Mechanics.EXCL_ITEM_EFFECTS_EVASION_BOOST[weather] != 0 &&
    defender.exclusiveItemEffectActive(Mechanics.EXCL_ITEM_EFFECTS_EVASION_BOOST[weather])
  ) {
    evasionBoost += 1;
  }
  evasionStage += evasionBoost;

  let accuracyStage = attacker.stage_accuracy + accuracyBoost;
  // 攻撃側, 防御側どちらかがノーガード -> 回避ランク, 命中ランクを無視
  if (attacker.abilityActive(0x6a) || defender.abilityActiveDetails(0x6a, attacker, true)) {
    evasionStage = 10;
    accuracyStage = 10;
  }
  if (accuracyStage < 0) accuracyStage = 0;
  if (accuracyStage > 20) accuracyStage = 20;

  const ACCURACY_MULTIPLIERS =
    attacker.gender == eos.GENDER_FEMALE
      ? Mechanics.FEMALE_ACCURACY_STAGE_MULTIPLIERS
      : Mechanics.MALE_ACCURACY_STAGE_MULTIPLIERS;
  let accuracy = ACCURACY_MULTIPLIERS[accuracyStage];
  if (evasionStage < 0) evasionStage = 0;
  if (evasionStage > 20) evasionStage = 20;
  if (accuracy < 0) accuracy = 0;
  if (accuracy > 100) accuracy = 100;

  const EVASION_MULTIPLIERS =
    defender.gender == eos.GENDER_FEMALE
      ? Mechanics.FEMALE_EVASION_STAGE_MULTIPLIERS
      : Mechanics.MALE_EVASION_STAGE_MULTIPLIERS;
  let evasion = EVASION_MULTIPLIERS[evasionStage];
  if (evasion < 0) evasion = 0;
  if (evasion > 100) evasion = 100;

  return dungeon.rng.rollHitChance(Math.trunc(moveAccuracy * accuracy * evasion), useSecondAccuracy);
}

/**
 * 特性や専用道具の効果で技を無効化する処理
 * @param {Monster} attacker
 * @param {Monster} defender
 * @param {DamageData} damageData
 */
export function ApplyAbilityAndEffectImmunities(attacker, defender, damageData) {
  if (!defender.isMonster() || !attacker.isMonster()) {
    return;
  }
  // ちくでんのポケモンが電気技を受ける
  if (defender.abilityActiveDetails(0x23, attacker, true) && damageData.type == eos.TYPE_ELECTRIC) {
    damageData.noDamage = true;
    damageData.healed = true;
    return;
  }
  // ちょすい, かんそうはだのポケモンが水技を受ける
  if (
    (defender.abilityActiveDetails(0x24, attacker, true) || defender.abilityActiveDetails(0x55, attacker, true)) &&
    damageData.type == eos.TYPE_WATER
  ) {
    damageData.noDamage = true;
    damageData.healed = true;
    return;
  }
  // でんきエンジンのポケモンが電気技を受ける
  if (defender.abilityActive(0x66, attacker, true) && damageData.type == eos.TYPE_ELECTRIC) {
    damageData.noDamage = true;
    return;
  }

  // 専用道具の効果で各タイプで受けたダメージを無効化、または吸収する
  for (let i = 0; i < Mechanics.TYPE_DAMAGE_NEGATING_EXCLUSIVE_ITEM_EFFECTS.length; i++) {
    const entry = Mechanics.TYPE_DAMAGE_NEGATING_EXCLUSIVE_ITEM_EFFECTS[i];
    if (entry.type == damageData.type && defender.exclusiveItemEffectActive(entry.effect)) {
      if (entry.effect < 0x72) {
        // 無効
        damageData.noDamage = true;
        return;
      } else {
        // 吸収
        damageData.healed = true;
        return;
      }
    }
  }
}

/**
 * ダメージシーケンスの実行 (mock)
 * @param {DungeonState} dungeon
 * @param {Monster} attacker
 * @param {Monster} defender
 * @param {Number} moveId
 * @param {DamageData} damageData
 * @returns
 */
export function runMockDamageSequence(dungeon, attacker, defender, moveId, damageData) {
  if (MoveHitCheck(dungeon, attacker, defender, moveId, true, true)) {
    // 命中した
    ApplyAbilityAndEffectImmunities(attacker, defender, damageData);
    attacker.flag_practice_swinger = false;
    attacker.flag_anger_point = false;
  } else {
    // 命中しない
    damageData.noDamage = true;
    if (moveId != 0x163) {
      attacker.flag_practice_swinger = true; // 通常攻撃以外の場合かたならしを有効化
    }
  }
  if (damageData.noDamage) return 0;
  return damageData.damage;
}

/**
 * 特性や状態を考慮して技が正しく命中するかチェックする
 * @param {DungeonState} dungeon
 * @param {Monster} attacker
 * @param {Monster} defender
 * @param {Number} moveId
 */
export function executeMoveEffectPrechecks(dungeon, attacker, defender, moveId) {
  let reflectedByMagicCoatEtc = false;
  // ひらいしんフラグ
  const lightningrod =
    (defender.abilityActive(0x32) || dungeon.otherMonsters.abilities.includes(0x32)) &&
    attacker.getMoveType(moveId, dungeon) == eos.TYPE_ELECTRIC;
  // よびみずフラグ
  const stormDrain =
    (defender.abilityActive(0x7a) || dungeon.otherMonsters.abilities.includes(0x7a)) &&
    attacker.getMoveType(moveId, dungeon) == eos.TYPE_WATER;

  let hit = true;
  // 擬似無敵状態になる溜め技をキャンセルした場合、技は失敗する
  if (defender.twoTurnMoveForcedMiss(moveId)) {
    hit = false;
    dungeon.damageCalc.twoTurnMoveForcedMiss = true;
  }
  // ぼうおんの相手に音技を命中させた場合、技は失敗する
  if (hit && defender.abilityActiveDetails(0x3c, attacker, true) && Mechanics.isSoundMove(moveId)) {
    hit = false;
    dungeon.damageCalc.soundproofActivated = true;
  }
  // 防御側のよちむが発動した場合、技は失敗する
  if (hit && defender.abilityActiveDetails(0x79, attacker, true) && dungeon.rng.rollForewarn()) {
    hit = false;
  }
  // 技命中チェック
  let neverMissSelf = moveId != 0x68 && moveId != 0x131 && moveId != 0x12d && !reflectedByMagicCoatEtc;
  if (hit && !MoveHitCheck(dungeon, attacker, defender, moveId, false, neverMissSelf)) {
    hit = false;
    dungeon.damageCalc.firstHitCheckFailed = true;
  }
  if (hit) {
    // ひらいしんが発動した場合、技は失敗する
    if (lightningrod) {
      dungeon.damageCalc.lightningrodActivated = true;
      hit = false;
    }
    // よびみずが発動した場合、技は失敗する
    if (stormDrain) {
      dungeon.damageCalc.stormDrainActivated = true;
      hit = false;
    }
  }

  // 通常攻撃以外の技を失敗 -> かたならしを有効化
  if (!hit && moveId != 0x163) {
    attacker.flag_practice_swinger = true;
  }
  return hit;
}

/**
 * 攻撃側が使用した技や道具のダメージを計算
 * @param {DamageData} damageData
 * @param {DungeonState} dungeon
 * @param {Monster} attacker
 * @param {Monster} defender
 * @param {Number} attackType
 * @param {Number} attackPower
 * @param {*} damageMult
 * @param {Number} moveId
 * @returns
 */
export function simulateDamageCalcShared(
  damageData,
  dungeon,
  attacker,
  defender,
  attackType,
  attackPower,
  damageMult,
  moveId,
) {
  const critChance = Mechanics.getMoveCritChance(moveId);
  CalcDamage(dungeon, attacker, defender, attackType, attackPower, critChance, damageData, damageMult, moveId, true);
  return runMockDamageSequence(dungeon, attacker, defender, moveId, damageData);
}

/**
 * 技の命中チェックを含めた計算を行う
 * @param {DamageData} damageData
 * @param {DungeonState} dungeon
 * @param {Monster} attacker
 * @param {Monster} defender
 * @param {Move} move
 * @param {*} damageMult
 * @returns
 */
export function simulateDamageCalcWithMult(damageData, dungeon, attacker, defender, move, damageMult) {
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
    move.id,
  );
}

/**
 *
 * @param {DamageData} damageData
 * @param {DungeonState} dungeon
 * @param {Monster} attacker
 * @param {Monster} defender
 * @param {Number} attackType
 * @param {Number} attackPower
 * @param {Number} moveId
 * @param {*} critChance
 * @param {*} damageMult
 */
export function simulateDamageCalcGeneric(
  damageData,
  dungeon,
  attacker,
  defender,
  attackType,
  attackPower,
  moveId,
  critChance,
  damageMult,
) {
  if (!executeMoveEffectPrechecks(dungeon, attacker, defender, moveId)) {
    return 0;
  }
  CalcDamage(dungeon, attacker, defender, attackType, attackPower, critChance, damageData, damageMult, moveId, true);
  return runMockDamageSequence(dungeon, attacker, defender, moveId, damageData);
}

/**
 * ウェザーボールを使用する
 * @param {DamageData} damageData
 * @param {DungeonState} dungeon
 * @param {Monster} attacker
 * @param {Monster} defender
 * @param {Number} ginseng
 */
export function simulateDamageCalcWeatherBall(damageData, dungeon, attacker, defender, ginseng = 0) {
  if (!executeMoveEffectPrechecks(dungeon, attacker, defender, 0x1f)) {
    return 0;
  }
  const weather = attacker.perceivedWeather(dungeon);
  const attackType = Mechanics.WEATHER_BALL_TYPE_TABLE[weather];
  const move = new Move();
  move.id = 0x1f;
  move.ginseng = ginseng;
  const damageMult = Mechanics.WEATHER_BALL_DAMAGE_MULT_TABLE[weather];
  const attackPower = attacker.getMovePower(move);
  dungeon.damageDetailLog.damageMult = damageMult;
  return simulateDamageCalcShared(damageData, dungeon, attacker, defender, attackType, attackPower, damageMult, 0x1f);
}

/**
 * しぜんのめぐみを使用する
 * @param {DamageData} damageData
 * @param {DungeonState} dungeon
 * @param {Monster} attacker
 * @param {Monster} defender
 * @param {Number} ginseng
 */
export function simulateDamageCalcNaturalGift(damageData, dungeon, attacker, defender, ginseng = 0) {
  if (!executeMoveEffectPrechecks(dungeon, attacker, defender, 0x1d7)) {
    return 0;
  }
  const move = new Move();
  move.id = 0x1d7;
  move.ginseng = ginseng;
  if (attacker.heldItem != 0) {
    const ngInfo = attacker.naturalGiftInfo();
    if (ngInfo) {
      let attackPower = attacker.getMovePower(move) + ngInfo.basePowerBoost;
      if (attackPower > 0x7fff) {
        attackPower -= 1 << 16;
      }
      return simulateDamageCalcShared(damageData, dungeon, attacker, defender, ngInfo.typeId, attackPower, 1, 0x1d7);
    }
  }
  return simulateDamageCalcWithMult(damageData, dungeon, attacker, defender, move, 1);
}

/**
 * 現在HPが最大HPと比較してどのぐらい残っているか
 * @param {Monster} entity
 * @returns 0:～25%, 1:～50%, 2:～75%, 3:～100%
 */
export function getHpDepMultTableIdx(entity) {
  const hp = entity.hp;
  const maxHp = Math.min(entity.hp_max, 999);
  if (hp <= Math.trunc(maxHp / 4)) {
    return 0;
  }
  if (hp <= Math.trunc((maxHp * 2) / 4)) {
    return 1;
  }
  if (hp <= Math.trunc((maxHp * 3) / 4)) {
    return 2;
  }
  return 3;
}

/**
 * 技毎のダメージ倍率を適用し、適したダメージ計算関数を実行する
 * @param {DamageData} damageData
 * @param {DungeonState} dungeon
 * @param {Monster} attacker
 * @param {Monster} defender
 * @param {Move} move
 */
export function simulateDamageCalc(damageData, dungeon, attacker, defender, move) {
  let damageMult = 1;
  let fixedDamage = 0;

  switch (move.id) {
    case 0: // なし
      damageMult = 0;
      break;
    case 0x2: // アイスボール
    case 0x69: // ころがる
      damageMult = Mechanics.ROLLOUT_DAMAGE_MULT_TABLE[Math.min(move.priorSuccessiveHits, 9)];
      break;
    case 0x8: // あなをほる
      damageMult = Mechanics.DIG_DAMAGE_MULTIPLIER;
      break;
    case 0x1f: // ウェザーボール
      return simulateDamageCalcWeatherBall(damageData, dungeon, attacker, defender, move.ginseng);
    case 0x20: // うずしお
    case 0xdb: // なみのり
      if (defender.statuses.diving) {
        damageMult = 2;
      }
      break;
    case 0x39: // かぜおこし
    case 0xa2: // たつまき
      if (defender.statuses.flying || defender.statuses.bouncing) {
        damageMult = 2;
      }
      break;
    case 0x3c: // かまいたち
      damageMult = Mechanics.RAZOR_WIND_DAMAGE_MULTIPLIER;
      break;
    case 0x43: // からげんき
      if (
        attacker.statuses.burn ||
        attacker.statuses.poison ||
        attacker.statuses.bad_poison ||
        attacker.statuses.paralysis ||
        attacker.statuses.identifying
      ) {
        damageMult = Mechanics.FACADE_DAMAGE_MULTIPLIER;
      }
      break;
    case 0x4b: // きあいパンチ
      damageMult = Mechanics.FOCUS_PUNCH_DAMAGE_MULTIPLIER;
      break;
    case 0x4d: // きしかいせい
    case 0x79: // じたばた
      damageMult = Mechanics.REVERSAL_DAMAGE_MULT_TABLE[getHpDepMultTableIdx(attacker)];
      break;
    case 0x4e: // きつけ
      if (defender.statuses.paralysis) {
        damageMult = 2;
      }
      break;
    case 0x5c: // けたぐり
    case 0x1ca: // くさむすび
      damageMult = Mechanics.getMonsterWeight(defender.id);
      break;
    case 0x64: // ゴッドバード
      damageMult = Mechanics.SKY_ATTACK_DAMAGE_MULTIPLIER;
      break;
    case 0x6c: // サイコウェーブ
      const lv = attacker.level;
      const mult = 256 * (dungeon.rng.varianceDial + 0.5);

      // 下限上限1～199でトリミング
      fixedDamage = (lv * mult) >> 8;
      if (fixedDamage < 0) fixedDamage = 1;
      if (199 < fixedDamage) fixedDamage = 199;

      return simulateDamageCalcFixedDynamic(damageData, dungeon, attacker, defender, move, fixedDamage);
    case 0x71: // しおふき
      damageMult = Mechanics.WATER_SPOUT_DAMAGE_MULT_TABLE[getHpDepMultTableIdx(attacker)];
      break;
    case 0x76: // じしん
      if (defender.statuses.digging) {
        damageMult = 2;
      }
      break;
    case 0x97: // ソーラービーム
      const weather = attacker.perceivedWeather(dungeon);
      damageMult = Mechanics.SOLARBEAM_DAMAGE_MULTIPLIER;
      if (weather == eos.WEATHER_SANDSTORM || weather == eos.WEATHER_RAIN || weather == eos.WEATHER_HAIL) {
        damageMult /= 2; // すなあらし, あめ, あられ なら1倍に戻す
      }
      break;
    case 0x98: // ソニックブーム
      fixedDamage = Mechanics.SONICBOOM_FIXED_DAMAGE;
      return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move, fixedDamage);
    case 0x99: // そらをとぶ
      damageMult = Mechanics.FLY_DAMAGE_MULTIPLIER;
      break;
    case 0x9c: // ダイビング
      damageMult = Mechanics.DIVE_DAMAGE_MULTIPLIER;
      break;
    case 0xaa: // ちきゅうなげ
    case 0xd8: // ナイトヘッド
      fixedDamage = attacker.level;
      return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move, fixedDamage);
    case 0xcd: // とびはねる
      damageMult = Mechanics.BOUNCE_DAMAGE_MULTIPLIER;
      break;
    case 0xce: // とびひざげり
    case 0x110: // ブラストバーン
      damageMult = 2;
      break;
    case 0xd2: // トリプルキック
      damageMult = Math.min(move.priorSuccessiveHits + 1, 3);
      break;
    case 0xf5: // はきだす
      damageMult = attacker.statuses.stockpile;
      break;
    case 0x115: // プレゼント
      fixedDamage = getValueByRatio([0, 25, 50, 75], dungeon.rng.varianceDial);
      return simulateDamageCalcFixedDynamic(damageData, dungeon, attacker, defender, move, fixedDamage);
    case 0x116: // ふんか
      damageMult = Mechanics.ERUPTION_DAMAGE_MULT_TABLE[getHpDepMultTableIdx(attacker)];
      break;
    case 0x128: // マグニチュード
      fixedDamage = getValueByRatio(Mechanics.MAGNITUDE_DAMAGE_TABLE, dungeon.rng.varianceDial);
      return simulateDamageCalcFixedDynamic(damageData, dungeon, attacker, defender, move, fixedDamage);
    case 0x14b: // ゆめくい
      if (!defender.statuses.sleep && !defender.statuses.nightmare && !defender.statuses.napping) {
        dungeon.damageCalc.dreamEaterFailed = true;
        return 0;
      }
      break;
    case 0x155: // りゅうのいかり
      fixedDamage = Mechanics.DRAGON_RAGE_FIXED_DAMAGE;
      return simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move, fixedDamage);
    case 0x15c: // ロケットずつき
      damageMult = Mechanics.SKULL_BASH_DAMAGE_MULTIPLIER;
      break;
    case 0x163: // こうげき (通常攻撃)
      damageMult = Mechanics.CONST_0_50;
      break;
    case 0x18a: // しんくうぎり
      fixedDamage = Mechanics.VACUUM_CUT_FIXED_DAMAGE;
      return simulateDamageCalcFixedDynamic(damageData, dungeon, attacker, defender, move, fixedDamage);
    case 0x1d7: // しぜんのめぐみ
      return simulateDamageCalcNaturalGift(damageData, dungeon, attacker, defender, move.ginseng);
    case 0x1c9: // きりふだ
      let maxPP = Mechanics.getMoveMaxPP(move.id);
      if (maxPP == 0) {
        maxPP = 1;
      }
      let ppFrac = (move.pp * 100) / maxPP;
      if (ppFrac < 26) {
        damageMult = Mechanics.CONST_1_25;
      } else if (ppFrac < 51) {
        damageMult = 1;
      } else if (ppFrac < 76) {
        damageMult = Mechanics.CONST_0_75;
      } else {
        damageMult = Mechanics.CONST_0_50;
      }
      break;
    case 0x1d5: // しおみず
    case 0x1e8: // ダメおし
      let maxHp = defender.hp_max;
      if (maxHp > Mechanics.MAX_HP_CAP) {
        maxHp = Mechanics.MAX_HP_CAP;
      }
      if (defender.hp * 2 <= maxHp) {
        damageMult = 2;
      }
      break;
    case 0x1da: // しぼりとる
    case 0x1f9: // にぎりつぶす
      damageMult = Mechanics.WRING_OUT_DAMAGE_MULT_TABLE[getHpDepMultTableIdx(defender)];
      break;
    case 0x1db: // ジャイロボール
      if (attacker.statuses.speed == 0) {
        damageMult = 2;
      }
      break;
    case 0x1dd: // シャドーダイブ
      damageMult = Mechanics.SHADOW_FORCE_DAMAGE_MULTIPLIER;
      break;
    case 0x1f1: // とっておき
      let nMovesOutOfPP = attacker.n_moves_out_of_pp;
      if (nMovesOutOfPP > 0 && move.pp == 0) {
        nMovesOutOfPP--;
      }
      if (nMovesOutOfPP < 1) {
        dungeon.damageCalc.lastResortFailed = true;
        return 0;
      }
      damageMult = Mechanics.LAST_RESORT_DAMAGE_MULT_TABLE[nMovesOutOfPP - 1];
      break;
    case 0x213: // めざましビンタ
      if (defender.statuses.sleep || defender.statuses.nightmare || defender.statuses.napping) {
        damageMult = 2;
      }
      break;

    // 特殊な固定ダメージとか諸々もここに書き足す予定

    default:
      break;
  }
  dungeon.damageDetailLog.damageMult = damageMult;
  return simulateDamageCalcWithMult(damageData, dungeon, attacker, defender, move, damageMult);
}

/**
 * 0～1の範囲で値を指定し、配列から割合でデータを取得する
 * @param {*} array 配列
 * @param {*} ratio 0～1
 * @returns
 */
function getValueByRatio(array, ratio) {
  // ratioを0～1に制限
  ratio = Math.min(Math.max(ratio, 0), 1);
  const index = Math.floor(ratio * (array.length - 1));
  return array[index];
}

/**
 * 投擲物のダメージ計算
 * @param {DamageData} damageData
 * @param {DungeonState} dungeon
 * @param {Monster} attacker
 * @param {Monster} defender
 * @param {Number} attackPower
 * @returns
 */
export function simulateDamageCalcProjectile(damageData, dungeon, attacker, defender, attackPower) {
  const attackType = attacker.getMoveType(0x195, dungeon);
  return simulateDamageCalcShared(damageData, dungeon, attacker, defender, attackType, attackPower, 1, 0x195);
}

/**
 * 技の分類を取得 (0=物理, 1=特殊, 2=変化)
 * @param {*} moveId
 * @returns
 */
function getMoveCategory(moveId) {
  let res = null;
  if (MoveData) res = MoveData[moveId].Category;
  else console.error('MoveData Not Found');
  return res;
}

/**
 * 物理技以外であるかチェック
 * @param {*} moveId
 * @returns
 */
function MoveNotPhysial(moveId) {
  return getMoveCategory(moveId) != eos.CATEGORY_PHYSICAL;
}

/**
 * 倍率の詳細
 */
class ModifierDetails {
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
}
/**
 * 計算の詳細
 */
class CalcDetails {
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
}
/**
 * ダメージ計算結果詳細
 */
class ResultDetails {
  damageMessage = '';
  typeMatchup = '';
  indivTypeMatchup1 = '';
  indivTypeMatchup2 = '';
  moveType = '';
  moveCategory = '';
  criticalHit = false;
  fullTypeImmunity = false;
  noDamage = false;
  calc = new CalcDetails();
}
/**
 * ダメージ計算結果
 */
class CalcDamageResult {
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
}

/**
 * ダメージ計算
 * @param {DungeonState} dungeon
 * @param {Monster} attacker
 * @param {Monster} defender
 * @param {Move} move
 * @param {Number} attackPower 技の威力 (投擲物の威力)
 * @returns 計算結果
 */
export function RunCalcDamage(dungeon, attacker, defender, move, attackPower) {
  if (!MoveData) {
    console.error('MoveData not found');
    return;
  }
  if (!TypeData) {
    console.error('TypeData not found');
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

  // なげたもの (投擲物)
  if (move.id == 0x195) {
    damage = simulateDamageCalcProjectile(details, dungeon, attacker, defender, attackPower);
    damageMinVar = simulateDamageCalcProjectile(details, dungeonMin, attackerMin, defenderMin, attackPower);
    damageMaxVar = simulateDamageCalcProjectile(details, dungeonMax, attackerMax, defenderMax, attackPower);
  }
  // 通常の技
  else {
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

  if (
    dungeon.damageCalc.twoTurnMoveForcedMiss ||
    dungeon.damageCalc.soundproofActivated ||
    dungeon.damageCalc.firstHitCheckFailed ||
    dungeon.damageCalc.dreamEaterFailed ||
    dungeon.damageCalc.lastResortFailed
  ) {
    result.guaranteedMiss = true;
    return result;
  }
  result.hitChance = dungeon.rng.getCombinedHitPercentage();
  result.critChance = dungeon.rng.getComputedCritChance();

  const calc = dungeon.damageCalc;
  const resDetails = result.details;
  resDetails.damageMessage = ids.DAMAGE_MESSAGE[details.damageMessage];
  resDetails.typeMatchup = ids.TYPE_MATCHUP[details.typeMatchup];
  resDetails.indivTypeMatchup1 = ids.TYPE_MATCHUP[calc.moveIndivTypeMatchups[0]];
  resDetails.indivTypeMatchup2 = ids.TYPE_MATCHUP[calc.moveIndivTypeMatchups[1]];
  resDetails.moveType = TypeData[details.type];
  resDetails.moveCategory = ids.MOVE_CATEGORY[details.category];
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

/**
 * オブジェクトのディープコピーを作成
 * @param {*} obj
 * @returns
 */
function deepClone(obj) {
  const copy = new obj.constructor();

  for (const key of Object.getOwnPropertyNames(obj)) {
    const value = obj[key];

    if (Array.isArray(value)) {
      copy[key] = value.map((v) => (typeof v === 'object' && v !== null ? deepClone(v) : v));
    } else if (typeof value === 'object' && value !== null) {
      if (typeof value.clone === 'function') {
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

/**
 * 動的固定ダメージを計算 (サイコウェーブ、プレゼント、マグニチュード、しんくうぎり)
 * JP: 0x2334304
 * @param {DamageData} damageData
 * @param {DungeonState} dungeon
 * @param {Monster} attacker
 * @param {Monster} defender
 * @param {Move} move
 * @param {Number} damage ダメージ
 */
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
    damage,
  );

  damageData.type = attackType;
  damageData.category = moveCategory;

  // [original] プレゼントかつ0ダメージで呼び出されたなら0とする
  if (move.id == 0x115 && damage == 0) {
    damageData.damage = 0;
  } else {
    damageData.damage = fixedDamage;
  }
  dungeon.damageDetailLog.isFixedDamage = true;

  return runMockDamageSequence(dungeon, attacker, defender, move.id, damageData);
}

/**
 * 固定ダメージをトリミングし、補正を適用して計算
 * JP: 0x230e5c8
 * @param {DungeonState} dungeon
 * @param {Monster} attacker
 * @param {Monster} defender
 * @param {*} attackType
 * @param {*} moveCategory
 * @param {*} damage
 * @param {*} damageOut
 * @returns
 */
function calcDamageFixedApplyEffects(damageData, dungeon, attacker, defender, attackType, moveCategory, damage) {
  // 1～999でトリミング
  if (damage < 1) damage = 1;
  if (999 < damage) damage = 999;

  // 補正を取得
  const effect = CalcTypeBasedDamageEffects(dungeon, attacker, defender, damage, attackType, damageData, false);

  // 計算
  const fixedDamage = Math.ceil(damage * effect.damageMultOut);
  return fixedDamage;
}

/**
 * 静的固定ダメージを計算
 * @param {DungeonState} dungeon
 * @param {Monster} attacker
 * @param {Monster} defender
 * @param {Move} move
 * @param {Number} damage
 */
function simulateDamageCalcFixedStatic(damageData, dungeon, attacker, defender, move, damage) {
  const attackType = attacker.getMoveType(move.id, dungeon);
  const moveCategory = getMoveCategory(move.id);
  const fixedDamage = calcDamageFixed(
    dungeon,
    attacker,
    defender,
    damage,
    damageData,
    attackType,
    moveCategory,
    move.id,
  );

  damageData.type = attackType;
  damageData.category = moveCategory;
  damageData.damage = fixedDamage;
  dungeon.damageDetailLog.isFixedDamage = true;

  return runMockDamageSequence(dungeon, attacker, defender, move.id, damageData);
}

/**
 * 固定ダメージを計算
 * @param {DungeonState} dungeon
 * @param {Monster} attacker
 * @param {Monster} defender
 * @param {Number} fixedDamage
 * @param {DamageData} damageOut
 * @param {Number} attackType
 * @param {Number} moveCategory
 */
function calcDamageFixed(dungeon, attacker, defender, fixedDamage, damageOut, attackType, moveCategory, moveId) {
  if (!executeMoveEffectPrechecks(dungeon, attacker, defender, moveId)) {
    return 0;
  }

  // タイプ相性の取得
  const typeMatchups = [
    getTypeMatchUp(dungeon, attacker, defender, 0, attackType),
    getTypeMatchUp(dungeon, attacker, defender, 1, attackType),
  ];

  dungeon.damageCalc.moveIndivTypeMatchups[0] = typeMatchups[0];
  dungeon.damageCalc.moveIndivTypeMatchups[1] = typeMatchups[1];
  damageOut.typeMatchup = Mechanics.TYPE_MATCHUP_COMBINATOR_TABLE[typeMatchups[0]][typeMatchups[1]];

  // 相性が効果抜群以外、防御側がふしぎなまもり、攻撃タイプがなし以外 -> x0
  let superEffective = damageOut.typeMatchup == eos.MATCHUP_SUPER_EFFECTIVE;
  if (!superEffective) {
    if (defender.abilityActiveDetails(0x35, attacker, true) && attackType != eos.TYPE_NONE) {
      fixedDamage = 0;
      dungeon.damageDetailLog.isWonderGuardActive = true;
    }
  }
  // ごうわん補正 -> x1.5
  if (moveId == 0x195 && attacker.iqSkillEnabled(0x2f, dungeon)) {
    fixedDamage *= Math.ceil(fixedDamage * Mechanics.POWER_PITCHER_DAMAGE_MULTIPLIER);
    dungeon.damageDetailLog.isPowerPitcherActive = true;
  }

  let resFixedDamage = Math.ceil(fixedDamage);
  if (fixedDamage == 0) resFixedDamage = 1;

  return resFixedDamage;
}
