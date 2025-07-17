/**
 * getJsonDataの引数に入れるキー名とJSONファイルのパス
 */
const jsonPathsArray = {
  pokemon: '/data/pokemon.min.json',
  item: '/data/item.min.json',
  move: '/data/move.min.json',
  dungeon: '/data/dungeon.min.json',
  floor: '/data/floor.min.json',
  fixed: '/data/fixed.min.json',
  message: '/data/message.min.json',
  type: '/data/type.min.json',
  iqgroup: '/data/iqgroup.min.json',
};

/**
 * JSONを取得
 * @param {string} key キー (pokemon, item, dungeon, floor, fixed, message)
 * @returns JSONデータ
 */
export async function getJsonData(key) {
  try {
    return await fetch(jsonPathsArray[key]).then((res) => res.json());
  } catch (e) {
    console.error('getJsonData Failed: ', e);
    return null;
  }
}
