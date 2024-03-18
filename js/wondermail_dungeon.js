$(async function () {
  var DungeonData;
  var FloorData;

  // 要素キャッシュ
  var e_pass_area = $("#pass-area");
  var e_resion_jp = $("#resion-jp");
  var e_resion_na = $("#resion-na");
  var e_resion_eu = $("#resion-eu");
  var e_dungeon = $("#dungeon");
  var e_dungeon_floor = $("#dungeon-floor");
  var e_pass_generate = $("#pass-generate");

  // 公開日まで蓋をしておく
  // let now = new Date();
  // let pub = new Date(2024, 2, 15, 22, 0, 0);
  // if (now < pub) {
  //   let m = $("#main-container");
  //   m.empty();
  //   m.append(`<div class="card my-3"><div class="card-body">もう少し待って（公開予定: 2024/3/15 18:00）</div></div>`);
  //   return;
  // }

  // JSON取得
  await Promise.all([GetDungeonJson(), GetFloorJson()])
    .then((results) => {
      DungeonData = results[0];
      FloorData = results[1];
    })
    .catch((e) => {
      console.error(e);
    });

  // Select2
  e_dungeon.select2(select2Config);

  // ダンジョン
  e_dungeon.on("change", function () {
    AppendDungeonFloor(e_dungeon_floor);
  });
  // 生成
  e_pass_generate.on("click", function () {
    GeneratePass();
  });

  let init = new Promise(async function () {
    AppendDungeon(e_dungeon);
    e_dungeon.val(1).change();
  });

  /**
   * ダンジョンをセット
   */
  function AppendDungeon(elem = e_dungeon) {
    let prev = elem.val() != undefined ? elem.val() : 0;
    elem.empty();
    for (let i = 0; i < DungeonData.length && i < 0xb4; i++) {
      // 続きダンジョン除外 (ダミー5以外)
      if (DungeonData[i].FloorPrev > 0 && i != 0xad) continue;
      // スペシャルエピソード除外
      if (i >= 0x7b && i <= 0xa4) continue;
      // シェイミのさと除外
      if (i == 0xaf) continue;

      elem.append(
        `<option value="${i}" data-search="${DungeonData[i].Name}">[${("00" + i.toString(16)).slice(-2).toUpperCase()}] ${DungeonData[i].Name}</option>`
      );
    }
    // ダミー(0xAD)を選択不可にする
    //$(`select#dungeon option[value="${0xad}"]`).prop("disabled", true);
    // 値を再度セット
    if (prev >= elem.children().length || prev == undefined) prev = 0;
    elem.val(prev);
  }
  /**
   * 階数をセット
   * @param {*} keep
   */
  function AppendDungeonFloor(elem = e_dungeon_floor, keep = false) {
    let dun = DungeonData[e_dungeon.val()];

    elem.empty();
    let start = dun.FloorPrev + 1;
    let difficult = false;
    for (let i = start; (difficult || i - dun.FloorPrev <= dun.FloorCount) && (!difficult || i <= start + 0xff); i++) {
      elem.append(`<option value="${i}">${dun.FlagStairs ? "" : "B"}${i - dun.FloorPrev}F</option>`);
    }
    // 値をセット
    elem.val(dun.FloorPrev + 1);
  }
  /**
   * パスワード生成
   */
  function GeneratePass() {
    let resion = GetResion();
    let mission = new WonderMail();

    // 報酬値ランダム
    //let randomRewordVal = Math.floor(Math.random() * 0x7ff);
    // SEEDランダム
    let randomSeedVal = Math.floor(Math.random() * 0xffffff);

    mission.Status = 4;
    mission.MissionType = 0xb;
    mission.MissionFlag = 0x5;
    mission.RewardType = 0x6;
    mission.RewardValue = 0x1a1;
    mission.Cliant = 0x1a1;
    mission.Target1 = 0x1a1;
    mission.Target2 = 0x000;
    mission.TargetItem = 0x046;
    mission.Dungeon = e_dungeon.val() ?? 0;
    mission.Floor = e_dungeon_floor.val() ?? 0;
    mission.Fixed = 0x95;
    mission.RestType = 0x00;
    mission.RestValue = 0x00;
    mission.Seed = randomSeedVal;
    mission.Encode(true, resion);

    e_pass_area.val(ConvertToMultiFormat(mission.Password, 5, 7, 5));
  }
  /**
   * リージョン取得
   * @returns
   */
  function GetResion() {
    let res = "";
    if (e_resion_jp.prop("checked")) res = "JP";
    else if (e_resion_na.prop("checked")) res = "NA";
    else if (e_resion_eu.prop("checked")) res = "EU";
    return res;
  }
});
