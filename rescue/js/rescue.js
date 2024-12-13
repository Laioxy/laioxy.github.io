$(async function () {
  // JSONデータ
  var ItemData = await GetItemJson();
  var DungeonData = await GetDungeonJson();
  var FloorData = await GetFloorJson();

  // 展開した救助依頼データ
  var rescue;

  // アドバンスドモード (未使用)
  var advanced = false;

  // 要素キャッシュ
  var e_pass_area = $("#pass-area");
  var e_pass_sos = $("#pass-sos");
  var e_pass_aok = $("#pass-aok");
  var e_pass_thank = $("#pass-thank");

  var e_rescue_type = $("input:radio[name='rescue-type']");
  var e_dungeon = $("#dungeon");
  var e_dungeon_floor = $("#dungeon-floor");
  var e_dungeon_seed = $("#dungeon-seed");
  var e_sos_teamid = $("#sos-teamid");
  var e_sos_checksum = $("#sos-checksum");
  var e_region = $("#region");
  var e_team_name = $("#team-name");
  var e_notsos_value_1 = $("#notsos-value-1");
  var e_gift_item = $("#gift-item");
  var e_aok_teamid = $("#aok-teamid");
  var e_aok_checksum = $("#aok-checksum");
  var e_version = $("input:radio[name='version']");

  // コンボボックスセット
  AppendItem(e_gift_item);
  AppendDungeon(e_dungeon);
  AppendDungeonFloor(e_dungeon_floor);

  e_dungeon.on("change", function () {
    AppendDungeonFloor(e_dungeon_floor, true);
  });

  $("#pass-analysis").on("click", function () {
    // パスワード展開
    rescue = new Rescue();
    let pass = ConvertToHalfPassString(e_pass_area.val());
    rescue.Decode(pass);
    console.log(rescue);
    if (rescue.NotSOStmp2 != 0) {
      e_gift_item.val(rescue.NotSOStmp2);
    }

    // たすけてメール生成
    if (rescue.RescueType < 4) {
      let sos = rescue.Clone();
      sos.Encode(1);
      e_pass_sos.text(ConvertToMultiFormat(sos.Password));
    } else {
      e_pass_sos.text("");
      e_pass_sos.prop("placeholder", "ふっかつ・おれいのメールから生成不可");
    }

    // ふっかつメール生成
    let aok = rescue.Clone();
    aok.Encode(4);
    e_pass_aok.text(ConvertToMultiFormat(aok.Password));

    // おれいのメール生成
    let thank = rescue.Clone();
    thank.Encode(5);
    e_pass_thank.text(ConvertToMultiFormat(thank.Password));

    // 編集フォームにセット
    console.log(e_rescue_type.val());
    e_rescue_type.val([rescue.RescueType]).change();
    console.log(e_rescue_type.val());

    e_dungeon.val(rescue.Dungeon).change();
    e_dungeon_floor.val(rescue.Floor).change();
    e_dungeon_seed.val(ToHex32(rescue.DungeonSeed).toUpperCase()).change();
    e_sos_teamid.val(ToHex32(rescue.SOSTeamId).toUpperCase()).change();
    e_sos_checksum.val(ToHex32(rescue.SOSCheckSum).toUpperCase()).change();
    e_region.val(rescue.Region).change();
    e_team_name.val(rescue.TeamName).change();
    e_notsos_value_1.val(rescue.NotSOStmp1).change();
    e_gift_item.val(rescue.NotSOStmp2).change();
    e_aok_teamid.val(ToHex32(rescue.AOKTeamId).toUpperCase()).change();
    e_aok_checksum.val(ToHex32(rescue.AOKCheckSum).toUpperCase()).change();
    e_version.val([rescue.Version]).change();
  });

  /**
   * パスワード文字列半角化
   * @param {*} str
   * @returns
   */
  function ConvertToHalfPassString(str) {
    let res = "";
    res = str
      .toUpperCase()
      .replace(/[\0\r\n\t 　]/g, "")
      .replace(/♯/g, "#")
      .replace(/oOｏＯ/g, "0")
      .replace(/iIｉＩ/g, "1")
      .replace(/[−―‐―ー—⁻₋]/g, "-")
      .replace(/[Ａ-Ｚａ-ｚ０-９＋－＝＆％＠＃]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
      });
    return res;
  }

  /**
   * パスワード文字列全角フォーマット
   * @param {*} str
   * @returns
   */
  function ConvertToMultiFormat(str) {
    let res = "";
    let replace;
    replace = str
      .toUpperCase()
      .replace(/[\0\r\n\t 　]/g, "")
      .replace(/[A-Za-z0-9+-=&%@#]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) + 0xfee0);
      });
    for (let i = 0; i < 9; i++) {
      res += replace.slice(6 * i, 6 * (i + 1));
      if (i < 8) {
        if ((i + 1) % 3 == 0) res += "\n";
        else res += "　";
      }
    }
    return res;
  }

  /**
   * 道具をセット (要素指定)
   * @param {*} elem
   */
  function AppendItem(elem) {
    let prev = elem.val() != undefined ? elem.val() : 0;
    elem.empty();
    for (let i = 0; i < ItemData.length; i++) {
      // elem.append(
      //   `<option value="${i}" data-search="${itemName}" data-valid="${ItemData[i].IsValid}">[${("000" + i.toString(16)).slice(-3).toUpperCase()}] ${ItemData[
      //     i
      //   ].Name.replace(/\[+[^\[*\]]*\]+/g, "")}</option>`
      // );
      elem.append(
        `<option value="${i}" data-search="${ItemData[i].Name}" data-valid="${ItemData[i].IsValid}">[${("000" + i.toString(16)).slice(-3).toUpperCase()}] ${
          ItemData[i].Name
        }</option>`
      );
    }
    // 値を再度セット
    if (prev >= elem.children().length || prev == undefined) prev = 0;
    elem.val(prev);
  }

  /**
   * ダンジョンをセット
   */
  function AppendDungeon(elem = e_dungeon) {
    let prev = elem.val() != undefined ? elem.val() : 0;
    elem.empty();
    for (let i = 0; i < DungeonData.length; i++) {
      elem.append(`<option value="${i}">[${("00" + i.toString(16)).slice(-2).toUpperCase()}] ${DungeonData[i].Name}</option>`);
    }
    // ダミー(0xAD)を選択不可にする
    if (!advanced) $(`select#dungeon option[value="${0xad}"]`).prop("disabled", true);
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
    for (let i = dun.FloorPrev + 1; i - dun.FloorPrev <= dun.FloorCount; i++) {
      let diff = FloorData[dun.MappaIndex][i].MissionRankId;
      elem.append(`<option value="${i}">${dun.FlagStairs ? "" : "B"}${i - dun.FloorPrev}F</option>`);
    }
    // 値をセット
    elem.val(dun.FloorPrev + 1);
  }
});
