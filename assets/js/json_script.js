// ポケモンデータをJSONから取得
async function GetPokemonJson() {
  let res;
  await $.getJSON("/assets/data/pokemon_data.min.json", function (json) {
    res = JSON.parse(JSON.stringify(json));
  });
  return res;
}
// 道具データをJSONから取得
async function GetItemJson() {
  let res;
  await $.getJSON("/assets/data/item_data.min.json", function (json) {
    res = JSON.parse(JSON.stringify(json));
  });
  return res;
}
// ダンジョンデータをJSONから取得
async function GetDungeonJson() {
  let res;
  await $.getJSON("/assets/data/dungeon_data.min.json", function (json) {
    res = JSON.parse(JSON.stringify(json));
  });
  return res;
}
// フロアデータをJSONから取得
async function GetFloorJson() {
  let res;
  await $.getJSON("/assets/data/floor_data.min.json", function (json) {
    res = JSON.parse(JSON.stringify(json));
  });
  return res;
}
// 固定フロアデータをJSONから取得
async function GetFixedJson() {
  let res;
  await $.getJSON("/assets/data/fixed_data.min.json", function (json) {
    res = JSON.parse(JSON.stringify(json));
  });
  return res;
}
