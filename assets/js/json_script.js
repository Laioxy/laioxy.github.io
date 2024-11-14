/**
 * getJsonDataの引数に入れるキー名とJSONファイルのパス
 */
const jsonPathsArray = {
  pokemon: "/assets/data/pokemon_data.min.json",
  item: "/assets/data/item_data.min.json",
  dungeon: "/assets/data/dungeon_data.min.json",
  floor: "/assets/data/floor_data.min.json",
  fixed: "/assets/data/fixed_data.min.json",
  message: "/assets/data/message_data.min.json",
};

/**
 * JSONを取得
 * @param {string} key キー (pokemon, item, dungeon, floor, fixed, message)
 * @returns JSONデータ
 */
async function getJsonData(key) {
  try {
    const res = await $.getJSON(jsonPathsArray[key]);
    return res;
  } catch (e) {
    console.error("getJsonData Failed: ", e);
    return null;
  }
}
