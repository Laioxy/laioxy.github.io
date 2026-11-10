/**
 * getJsonDataの引数に入れるキー名とJSONファイルのパス
 */
const jsonPathsArray = {
  pokemon: '/data/pokemon.min.json',
  item: '/data/item.min.json',
  move: '/data/move.min.json',
  dungeon: '/data/dungeon.min.json',
  floor_info_s: '/data/floor_info_s.min.json',
  fixed: '/data/fixed.min.json',
  type: '/data/type.min.json',
  iqgroup: '/data/iqgroup.min.json',
};

/**
 * JSONを取得
 * @param {string} key キー (pokemon, item, dungeon, floor_info_s, fixed, message)
 * @returns JSONデータ
 */
async function getJsonData(key) {
  const path = key === 'message'
    ? `/data/message.${document.documentElement.lang || 'ja'}.min.json`
    : jsonPathsArray[key];
  try {
    return await fetch(path).then((res) => res.json());
  } catch (e) {
    console.error('getJsonData Failed: ', e);
    return null;
  }
}

export async function getJsonDatas(keys) {
  const entries = await Promise.all(keys.map(async (key) => [key, await getJsonData(key)]));
  return Object.fromEntries(entries);
}
