import * as params from './params.js';
import { getJsonData } from '../../json_script.js';

/**
 * ポケモンデータ取得
 * @returns
 */
async function getPokemonData() {
  if (!window.PokemonData) {
    window.PokemonData = await getJsonData('pokemon');
    if (!window.PokemonData) {
      console.error('undefined pokemonData');
      return null;
    }
  }
  return window.PokemonData;
}

/**
 * 現在の依頼で使用できるポケモンかチェック
 * (FUN_205D308: [JP]0x205B308)
 * @param {*} pokemonId ポケモンID
 * @param {*} missionType 依頼タイプ
 * @param {*} isClient true=依頼主, false=それ以外
 * @param {*} isSky true=空, false=時闇
 * @returns 0=使用可能, 1=禁止ポケモン, 2=依頼使用不可, 3=大きさ制限, 4=フォルム違い, 5=無効, 6=インデックスオーバー
 */
export function isMissionUsablePokemon(pokemonId, missionType, isClient, isSky) {
  // 無効なポケモン
  if (isClient && pokemonId == 0) {
    //console.log(`[ID: ${pokemonId} ${pokemon.Name}] index error`);
    return 5;
  }
  // インデックスオーバー
  if (0x483 <= pokemonId) {
    //console.log(`[ID: ${pokemonId} ${pokemon.Name}] over max`);
    return 6;
  }

  const baseForm = getBaseForm(pokemonId);
  if (pokemonId == baseForm) {
    // 依頼使用不可
    if (isMonsterIllegalForMissions(pokemonId)) {
      //console.log(`[ID: ${pokemonId} ${pokemon.Name}] illegal`);
      return 2;
    }
    // 大きさ制限 (依頼主、同行依頼のみ)
    if (isClient && ((missionType + 0xfe) & 0xff) < 4 && getBodySize(pokemonId) != 1) {
      //console.log(`[ID: ${pokemonId} ${pokemon.Name}] sizeover ${missionType} ${isClient}`);
      return 3;
    }
    // 禁止ポケモン
    if (
      ((isClient && missionType != 10) || (missionType != isSky ? 0xe : 0xc) || (isSky && missionType != 0xb)) &&
      !isMonsterMissionAllowed(pokemonId)
    ) {
      //console.log(`[ID: ${pokemonId} ${pokemon.Name}] illegal ent`);
      return 1;
    }
    return 0;
  }
  // フォルム違い
  //console.log(`[ID: ${pokemonId} ${pokemon.Name}] not native`);
  return 4;
}

/**
 * 無効なポケモン, 紫カクレオン, ピンクセレビィを弾く
 * (IsMonsterIllegalForMissions: [JP]0x2062E4C)
 * @param {*} pokemonId
 * @returns
 */
function isMonsterIllegalForMissions(pokemonId) {
  if (!isMonsterValid(pokemonId)) return true;

  if (pokemonId < 0x217 || 0x228 < pokemonId) {
    const pokemonIdx = pokemonId % 600;
    if (pokemonIdx != 0x180 && pokemonIdx != 0x117) {
      return false;
    }
  }
  return true;
}

/**
 * 有効なポケモンかチェック
 * (IsMonsterValid: [JP]0x2054AA4)
 * @param {*} pokemonId
 * @returns
 */
function isMonsterValid(pokemonId) {
  if (0 < pokemonId && (pokemonId < 0x229 || 600 < pokemonId) && pokemonId < 0x481) {
    if (599 < pokemonId && getMonsterGender(pokemonId) != 2) {
      return false;
    }
    return true;
  }
  return false;
}

/**
 * ポケモンの性別を取得
 * (GetMonsterGender: [JP]0x2052AE0)
 * @param {*} pokemonId
 * @returns
 */
function getMonsterGender(pokemonId) {
  if (!PokemonData) {
    console.error('PokemonData not found');
    return -1;
  }
  const genderIdx = Math.floor(pokemonId / 600);
  return PokemonData[pokemonId % 600].Genders[genderIdx];
}

/**
 * ポケモンの身体の大きさを取得
 * (GetBodySize: [JP]0x2052AFC)
 * @param {*} pokemonId
 * @returns
 */
function getBodySize(pokemonId) {
  if (!PokemonData) {
    console.error('PokemonData not found');
    return -1;
  }
  return parseInt(PokemonData[pokemonId % 600].BodySize);
}

/**
 * 依頼で使用可能なポケモンであるかチェック
 * (IsMonsterMissionAllowed: [JP]0x2062CFC)
 * @param {*} pokemonId
 * @returns
 */
function isMonsterMissionAllowed(pokemonId) {
  const baseForm = getBaseForm(pokemonId % 600);
  return !params.MISSION_BANNED_MONSTERS.includes(baseForm);
}

/**
 * フォルムチェンジ元のポケモンID取得
 * (GetBaseForm: [JP]0x205435C)
 * @param {*} id
 * @returns
 */
function getBaseForm(id) {
  if (id == 0x17b || id == 0x17c || id == 0x17d || id == 0x17e) return 0x17b;
  if (id == 0x1a3 || id == 0x1a4 || id == 0x1a5) return 0x17b;
  if (id == 0x3d4 || id == 0x3d5) return 0x3d3;
  if (id >= 0xca && id <= 0xe4) return 0xc9;
  if (id == 0x3d6) return 0x3d3;
  if (id == 0x424) return 0x424;
  if (id == 0x425) return 0x424;
  if (id == 0x1cd) return 0x1cc;
  if (id == 0x1cd) return 0x1cc;
  return id;
}
