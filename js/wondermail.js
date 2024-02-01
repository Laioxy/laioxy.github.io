// JSONデータ格納用変数
var PokemonData;
var ItemData;
var DungeonData;
var FloorData;
var FixedData;

// 要素キャッシュ
var e_pass_alert;
var e_version_sky;
var e_version_old;
var e_resion_jp;
var e_resion_na;
var e_resion_eu;
var e_mission_type;
var e_mission_flag;
var e_reward_type;
var e_reward_value_number;
var e_reward_value_select;
var e_cliant;
var e_target_1;
var e_target_2;
var e_target_item;
var e_dungeon;
var e_dungeon_floor;
var e_fixed_floor;
var e_rest_type;
var e_rest_value;
var e_seed;

// アドバンスドモード (上級者向け)
// 有効にするとdisabledを無効化、項目を一部拡張
var advanced = new URL(document.location).searchParams.get("advanced") != null;

$(async function () {
  // アドバンスドモード表示
  if (advanced) $(".advanced").show();
  else $(".advanced").hide();

  await Promise.all([GetPokemonJson(), GetItemJson(), GetDungeonJson(), GetFloorJson(), GetFixedJson()])
    .then((results) => {
      PokemonData = results[0];
      ItemData = results[1];
      DungeonData = results[2];
      FloorData = results[3];
      FixedData = results[4];
    })
    .catch((e) => {
      console.error(e);
    });

  e_pass_area = $("#pass-area");
  e_pass_alert = $("#pass-alert");
  e_version_sky = $("#version-sky");
  e_version_old = $("#version-old");
  e_resion_jp = $("#resion-jp");
  e_resion_na = $("#resion-na");
  e_resion_eu = $("#resion-eu");
  e_hash_1 = $("#hash1");
  e_hash_2 = $("#hash2");

  e_mission_type = $("#mission-type");
  e_mission_flag = $("#mission-flag");
  e_reward_type = $("#reward-type");
  e_reward_value_number = $("#reward-value-number");
  e_reward_value_select = $("#reward-value-select");
  e_cliant = $("#cliant");
  e_target_1 = $("#target-1");
  e_target_2 = $("#target-2");
  e_target_item = $("#target-item");
  e_dungeon = $("#dungeon");
  e_dungeon_floor = $("#dungeon-floor");
  e_fixed_floor = $("#fixed-floor");
  e_rest_type = $("#rest-type");
  e_rest_value = $("#rest-value");
  e_seed = $("#seed");

  // バージョン・リージョン
  $("input[name='version'], input[name='resion']").on("change", function () {
    let old = e_version_old.prop("checked");
    $("#group-resion input").prop("disabled", old);

    if (old) $("#context-resionfree").show();
    else $("#context-resionfree").hide();

    // パスワード文字更新
    e_pass_area.val("").trigger("keyup");
    AppendMissionType(e_mission_type); // 依頼タイプ項目更新
    AppendMissionFlag(e_mission_flag); // 依頼フラグ項目更新
    ToggleDisabled();
  });
  // 依頼タイプ
  e_mission_type.on("change", function () {
    let skyMTypeId = e_mission_type.find("option:selected").data("sky");
    AppendMissionFlag(e_mission_flag); // 依頼フラグ項目更新
    AppendDungeonFloor(e_dungeon_floor, true); // 階数項目更新 (依頼難易度変化の対応)
    ToggleDisabled();

    // 0x09 or 0x0A なら依頼主でコイルとジバコイルを許可
    AllowPokemon(e_cliant, skyMTypeId == 0x09 || skyMTypeId == 0x0a, [0x051, 0x1f8]);
    CheckBannedPokemon(e_cliant); // 依頼主更新

    CheckInvalidPokemon(e_target_1);
    CheckInvalidPokemon(e_target_2);
    CheckBannedPokemon(e_target_1);
    CheckBannedPokemon(e_target_2);

    // 対象ポケモン1が選択できない場合、依頼主と同じ値にする
    if (e_target_1.prop("disabled")) e_target_1.val(e_cliant.val()).change();
  });
  // 依頼フラグ
  e_mission_flag.on("change", function () {
    ToggleDisabled();

    //  伝説の挑戦状の場合、各種セレクトボックスにセット
    let skyMTypeId = e_mission_type.find("option:selected").data("sky");
    // 報酬
    AllowPokemon(e_reward_value_select, skyMTypeId == 0x0b && e_mission_flag.val() == 1, [0x096]); // ミュウツー
    AllowPokemon(e_reward_value_select, skyMTypeId == 0x0b && e_mission_flag.val() == 2, [0x10f]); // エンテイ
    AllowPokemon(e_reward_value_select, skyMTypeId == 0x0b && e_mission_flag.val() == 3, [0x10e]); // ライコウ
    AllowPokemon(e_reward_value_select, skyMTypeId == 0x0b && e_mission_flag.val() == 4, [0x110]); // スイクン
    AllowPokemon(e_reward_value_select, skyMTypeId == 0x0b && e_mission_flag.val() == 5, [0x1a1]); // ジラーチ
    // 依頼主
    AllowPokemon(e_cliant, skyMTypeId == 0x0b && e_mission_flag.val() == 1, [0x096]); // ミュウツー
    AllowPokemon(e_cliant, skyMTypeId == 0x0b && e_mission_flag.val() == 2, [0x10f]); // エンテイ
    AllowPokemon(e_cliant, skyMTypeId == 0x0b && e_mission_flag.val() == 3, [0x10e]); // ライコウ
    AllowPokemon(e_cliant, skyMTypeId == 0x0b && e_mission_flag.val() == 4, [0x110]); // スイクン
    AllowPokemon(e_cliant, skyMTypeId == 0x0b && e_mission_flag.val() == 5, [0x1a1]); // ジラーチ
    // 対象ポケモン
    AllowPokemon(e_target_1, skyMTypeId == 0x0b && e_mission_flag.val() == 1, [0x096]); // ミュウツー
    AllowPokemon(e_target_1, skyMTypeId == 0x0b && e_mission_flag.val() == 2, [0x10f]); // エンテイ
    AllowPokemon(e_target_1, skyMTypeId == 0x0b && e_mission_flag.val() == 3, [0x10e]); // ライコウ
    AllowPokemon(e_target_1, skyMTypeId == 0x0b && e_mission_flag.val() == 4, [0x110]); // スイクン
    AllowPokemon(e_target_1, skyMTypeId == 0x0b && e_mission_flag.val() == 5, [0x1a1]); // ジラーチ

    CheckInvalidPokemon(e_reward_value_select);
    CheckInvalidPokemon(e_target_1);
    CheckInvalidPokemon(e_target_2);
    CheckInvalidPokemon(e_cliant);
    CheckBannedPokemon(e_reward_value_select);
    CheckBannedPokemon(e_target_1);
    CheckBannedPokemon(e_target_2); // disabledケア用途
    CheckBannedPokemon(e_cliant);
  });
  // 報酬タイプ
  e_reward_type.on("change", function () {
    let prev_num = e_reward_value_number.val();
    let prev_sel = e_reward_value_select.val();

    switch (reward_type[$(this).val()].mode) {
      case 0: // 指定なし
        $("#reward-value-number-group").show();
        $("#reward-value-select-div").hide();
        break;
      case 1: // 道具
        AppendItem(e_reward_value_select);
        $("#reward-value-select-div").show();
        $("#reward-value-number-group").hide();
        CheckInvalidPokemon(e_reward_value_select, true);
        CheckBannedPokemon(e_reward_value_select, true);
        CheckInvalidItem(e_reward_value_select);
        e_reward_value_select.parent().nextAll(".error-invalid-poke").hide();
        e_reward_value_select.parent().nextAll(".error-banned-poke").hide();
        break;
      case 2: // ポケモン
        AppendPokemon(e_reward_value_select);
        $("#reward-value-select-div").show();
        $("#reward-value-number-group").hide();
        CheckInvalidItem(e_reward_value_select, true);
        CheckInvalidPokemon(e_reward_value_select);
        CheckBannedPokemon(e_reward_value_select);
        e_reward_value_select.parent().nextAll(".error-invalid-item").hide();
        break;
    }
    ToggleDisabled();
    e_mission_flag.trigger("change"); // 報酬の仲間ポケモンの有効無効を更新

    // changeのトリガーで値が変わってしまう対策
    if (prev_num != null) e_reward_value_number.val(prev_num);
    if (prev_sel != null) {
      // 項目が上限を超過している場合、0に戻す
      if (prev_sel >= $("#reward-value-select option").length) prev_sel = 0;
      e_reward_value_select.val(prev_sel);
    }
  });
  // 依頼主
  e_cliant.on("change", function () {
    if (mission_type[e_mission_type.val()].same_cliant) {
      e_target_1.val(e_cliant.val()).change();
    }
  });
  // ダンジョン
  e_dungeon.on("change", function () {
    AppendDungeonFloor(e_dungeon_floor);
  });
  // 制限タイプ
  e_rest_type.on("change", function () {
    switch (restriction[e_rest_type.val()].id) {
      case 0: // タイプ
        AppendPokeType();
        break;
      case 1: // ポケモン
        AppendPokemon(e_rest_value);
        break;
    }
    e_rest_value.trigger("change");
  });
  // 制限
  e_rest_value.on("change", function () {
    CheckInvalidPokemon(e_rest_value, e_rest_type.val() != 1);
    CheckBannedPokemon(e_rest_value, e_rest_type.val() != 1);
  });

  // テキストボックス入力制限
  $("#pass-form input[type='text']").on("keydown", function (e) {
    let k = e.keyCode;
    let s = String.fromCharCode(k);

    // 8  ... BackSpace
    // 46 ... Delete
    // 96-105  ... テンキー[0-9]
    // 112-123 ... ファンクションキー
    if (!(s.match(/[0-9a-fA-F]/) || (37 <= k && k <= 40) || (96 <= k && k <= 105) || (112 <= k && k <= 123) || k === 8 || k === 46)) return false;
  });
  // テキストボックス大文字化
  $("#pass-form input[type='text']").on("keyup blur", function (e) {
    this.value = this.value.replace(/[^0-9a-fA-F]+/i, "").toUpperCase();
    if (parseInt($(this).val(), 16) > parseInt($(this).data("maxvalue"), 16)) $(this).val(parseInt($(this).data("maxvalue"), 16).toString(16).toUpperCase());
  });

  // パスワード文字数表示
  $("input[name='version']").on("change", function () {
    // e_pass_area.val("").trigger("keyup");
    // AppendMissionType(e_mission_type); // 依頼タイプ更新
  });
  e_pass_area.on("keydown keyup", function () {
    let sky = CheckVersionSky();
    let resion = GetResion();
    let len = ConvertToHalfPassString(e_pass_area.val()).length;
    let max = GetSwapTable(sky, resion).length;
    $("#pass-maxlength").text(`(${len}/${max}文字)`);
  });

  // エラーメッセージ
  $("#reward-type, #reward-value-select, #cliant, #target-1, #target-2, #target-item").on("change", function () {
    if ($(this) == e_reward_type) {
      CheckInvalidPokemon(e_reward_value_select);
      CheckBannedPokemon(e_reward_value_select);
      CheckInvalidItem(e_reward_value_select);
    } else {
      CheckInvalidPokemon($(this));
      CheckBannedPokemon($(this));
      CheckInvalidItem($(this));
    }
  });

  // パスワード展開
  $("#pass-analysis").on("click", async function () {
    let mission = AnalysisPass();
    if (mission == undefined) mission = "";
    $("#mission-rawdata").text(JSON.stringify(mission, null, "    "));
  });

  // パスワード生成
  $("#pass-generate").on("click", function () {
    GeneratePass();
    e_pass_area.trigger("keyup");
  });

  // キー入力時、パスワードのアラート非表示
  $("input, select, textarea").on("change keydown", function () {
    $("#pass-alert").fadeOut();
  });

  console.log("event OK");

  // 初期化
  let init = new Promise(async function () {
    AppendMissionType(e_mission_type);
    AppendMissionFlag(e_mission_flag);
    AppendRewardType(e_reward_type);
    AppendPokemon(e_cliant);
    AppendPokemon(e_target_1);
    AppendPokemon(e_target_2);
    AppendItem(e_target_item);
    AppendDungeon(e_dungeon);
    AppendFixedFloor();
    AppendRestrictionType();
  });
  console.log("init OK");
  // ロード完了後、イベントトリガー
  $("select").trigger("change");
  e_pass_area.trigger("keyup");
  console.log("trigger OK");
  // ローディング解除
  $(".loading").fadeOut(200);
});

// 項目の有効無効
function ToggleDisabled() {
  let mission_type_val = e_mission_type.val();
  let mission_flag_val = e_mission_flag.val();
  // 対象ポケモン1
  if (!advanced) e_target_1.prop("disabled", mission_type[mission_type_val].same_cliant);
  else e_target_1.prop("disabled", false);
  // 対象ポケモン2
  if (!advanced) {
    let target2_d = (mission_type_val == 10 && mission_flag_val == 6) || (mission_type_val == 11 && mission_flag_val == 0);
    e_target_2.prop("disabled", !target2_d);
    if (!target2_d) e_target_2.val(0);
  } else e_target_2.prop("disabled", false);
  // 固定フロア
  // アジト依頼(依頼タイプ=0xA, フラグ=0x6)の場合、固定フロア有効
  let prevFixed = e_fixed_floor.prop("disabled");
  if (advanced || (mission_type_val == 0xa && mission_flag_val == 0x6) || mission_type[mission_type_val].used_fixed) {
    e_fixed_floor.prop("disabled", false);
  } else {
    e_fixed_floor.prop("disabled", true);
  }

  // 固定フロアの活性状態に変更があれば値を0にする
  if (prevFixed != e_fixed_floor.prop("disabled")) e_fixed_floor.val(0);

  // 時闇に存在しない項目は非活性かつ半透明化
  // 該当: 対象ポケモン2, 固定フロア
  let sky_only = [e_target_2, e_fixed_floor];
  let old = e_version_old.prop("checked");
  sky_only.forEach(function (r) {
    if (old) {
      r.prop("disabled", old); // 強制的に非活性
      r.addClass("opacity-50");
    } else r.removeClass("opacity-50");
  });
}

/**
 * ランダムな数値をセット
 * @param {*} elem 要素
 * @param {*} max 最大値
 * @param {*} hex true=16進数でセット
 */
function SetRandomValue(elem, max, hex = true) {
  let res = Math.floor(Math.random() * max);
  if (hex) res = res.toString(16).toUpperCase();
  elem.val(res).change();
}

/**
 * ポケモン無効チェック
 * @param {*} elem select要素
 * @param {*} reset 強制的に解除
 */
function CheckInvalidPokemon(elem, reset = false) {
  if (reset) {
    elem.removeClass("border-danger");
    elem.parent().nextAll(".error-invalid-poke").hide();
    return;
  }

  let valid = elem.find("option:selected").data("gender");
  if (valid !== undefined) {
    if (valid == 0 && !elem.prop("disabled") && !elem.find(`option[value="${elem.val()}"]`).hasClass("allow")) {
      elem.parent().nextAll(".error-invalid-poke").show();
      elem.addClass("border-danger");
    } else {
      // 他にも無効な値の項目がある場合はメッセージを消さない
      if (elem.parent("div").find("select:not([disabled]) option:selected[data-gender='0']").length == 0) {
        elem.parent().nextAll(".error-invalid-poke").hide();
      }
      elem.removeClass("border-danger");
    }
  }
}

/**
 * 禁止ポケモンを許可
 * @param {*} elem select要素
 * @param {*} valid true=許可, false=禁止
 * @param {*} where true=項目を絞り込む, false=絞り込まない
 * @param {*} pokes ポケモンID配列
 */
function AllowPokemon(elem, valid, pokes = []) {
  if (pokes.length > 0) {
    // 配列の1つ目のIDをセット
    if (valid) elem.val(pokes[0]).change();

    // 有効クラス(allow)切替
    pokes.forEach(function (r) {
      if (valid) elem.find(`option[value="${r}"]`).addClass("allow");
      else elem.find(`option[value="${r}"]`).removeClass("allow");
    });
  }
}

/**
 * ポケモン禁止チェック
 * @param {*} elem select要素
 * @param {*} reset 強制的に解除
 */
function CheckBannedPokemon(elem, reset = false) {
  if (reset) {
    elem.removeClass("border-danger");
    elem.parent().nextAll(".error-banned-poke").hide();
    return;
  }

  let valid = elem.find("option:selected").data("banned");
  let allow = elem.find("option:selected").hasClass("allow");
  let disabled = elem.prop("disabled");

  if (valid !== undefined) {
    if (allow && !disabled) {
      // 例外許可
      //console.log("許可 - " + elem.prop("id"));
      elem.parent().nextAll(".error-banned-poke").hide();
      elem.removeClass("border-danger");
    } else if (valid && !disabled) {
      // 禁止
      //console.log("禁止 - " + elem.prop("id"));
      elem.parent().nextAll(".error-banned-poke").show();
      elem.addClass("border-danger");
    } else {
      // 通常
      //console.log("通常 - " + elem.prop("id"));
      if (elem.parent("div").find("select:not([disabled]) option:selected[data-banned='true']").length == 0) {
        // 他にも無効な値の項目がある場合はメッセージを消さない
        elem.parent().nextAll(".error-banned-poke").hide();
      }
      elem.removeClass("border-danger");
    }
  }
}

/**
 * 道具無効チェック
 * @param {*} elem
 * @param {*} reset 強制的に解除
 */
function CheckInvalidItem(elem, reset) {
  if (reset) {
    elem.removeClass("border-danger");
    elem.parent().nextAll(".error-invalid-item").hide();
    return;
  }

  let valid = elem.find("option:selected").data("valid");
  if (valid !== undefined) {
    if (!valid && !elem.prop("disabled")) {
      elem.parent().nextAll(".error-invalid-item").show();
      elem.addClass("border-danger");
    } else {
      elem.parent().nextAll(".error-invalid-item").hide();
      elem.removeClass("border-danger");
    }
  }
}

/********************************************************************/

/**
 * 依頼タイプをセット
 */
function AppendMissionType(elem = e_mission_type) {
  let prev = elem.val(); // 現在選択中の依頼タイプID (保持用)
  let skyId = elem.find("option:selected").data("sky") ?? 0; // 空基準の依頼タイプID
  let mtype = mission_type;
  let old = e_version_old.prop("checked");

  // 時闇の項目に合わせる
  if (old) {
    mtype = mission_type.filter(function (r) {
      return !r.sky_only;
    });
  }
  // アドバンスド有効時、項目数を0xFまで拡張
  if (advanced) for (let i = mtype.length; i < 16; i++) mtype.push({ id: i, name: "-", flag: 0 });

  // 項目を追加
  elem.empty();
  for (let i = 0; i < mtype.length; i++) {
    elem.append(`<option value="${i}" data-sky="${mtype[i].id}">[${("00" + i.toString(16)).slice(-2).toUpperCase()}] ${mtype[i].name}</option>`);
  }
  // 時闇に存在する項目なら値を元に戻し、存在しないなら0にする
  if (old) {
    // 時闇
    if (mission_type[prev].sky_only) {
      alert(`依頼タイプ「${mission_type[prev].name}」は時闇に存在しないので依頼タイプを0に戻します。`);
      elem.val(0).change();
    } else {
      // 空→時闇で発生するズレの修正
      // （空の特別指令(0x0E)と時闇の特別指令(0x0C)の値がずれる問題の対応）
      let arr = mission_type.filter(function (r) {
        return !r.sky_only;
      });
      let idx = arr.indexOf(arr.find((r) => r.id == skyId));
      elem.val(idx);
    }
  } else {
    // 空
    elem.val(skyId);
  }

  // 値を再度セット
  // if (prev >= elem.children().length || prev == undefined) prev = 0;
  // elem.val(prev);
}
/**
 * 依頼フラグをセット
 */
function AppendMissionFlag(elem = e_mission_flag) {
  let prev = elem.val() != undefined ? elem.val() : 0;
  let skyValue = $("#mission-type option:selected").data("sky");
  let flagType = mission_type[skyValue].flag;
  elem.empty();

  // 項目セット
  let options = [];
  if (e_version_sky.prop("checked")) {
    options = mission_flag[flagType]; // 空
  } else {
    options = mission_flag_old[flagType]; // 時闇
  }

  // アドバンスド有効時、項目数を0xFまで拡張
  if (advanced) for (let i = options.length; i < 16; i++) options.push("-");
  for (let i = 0; i < options.length; i++) {
    elem.append(`<option value="${i}">[${("00" + i.toString(16)).slice(-2).toUpperCase()}] ${options[i]}</option>`);
  }

  // 値を再度セット
  if (prev >= elem.children().length || prev == undefined) prev = 0;
  elem.val(prev);
}
/**
 * 報酬タイプをセット
 */
function AppendRewardType(elem = e_reward_type) {
  let prev = elem.val() != undefined ? elem.val() : 0;
  elem.empty();
  for (let i = 0; i < reward_type.length; i++) {
    elem.append(`<option value="${i}">[${("00" + i.toString(16)).slice(-2).toUpperCase()}] ${reward_type[i].name}</option>`);
  }
  // 値を再度セット
  if (prev >= elem.children().length || prev == undefined) prev = 0;
  elem.val(prev);
}
/**
 * ポケモンをセット (要素指定)
 * @param {*} elem
 */
function AppendPokemon(elem) {
  let prev = elem.val() != undefined ? elem.val() : 0;
  elem.empty();
  for (let i = 0; i < PokemonData.length * 2; i++) {
    if (PokemonData[i % 600].Genders[Math.floor(i / 600)] == null) break;
    let gender = PokemonData[i % 600].Genders[Math.floor(i / 600)];
    let banned = banned_poke.includes(i % 600);
    let pokeName = PokemonData[i % 600].Name;
    let subName = PokemonData[i % 600].SubName;
    if (subName.length > 0 && subName != null) pokeName += ` - ${subName}`;
    elem.append(
      `<option value="${i}" data-pokeid="${i % 600}" data-gender="${gender}" data-banned="${banned}">` +
        `[${("000" + i.toString(16)).slice(-3).toUpperCase()}] ${pokeName} (${poke_gender[gender].name})` +
        `</option>`
    );
  }
  // 値を再度セット
  if (prev >= elem.children().length || prev == undefined) prev = 0;
  elem.val(prev);
}
/**
 * 道具をセット (要素指定)
 * @param {*} elem
 */
function AppendItem(elem) {
  let prev = elem.val() != undefined ? elem.val() : 0;
  elem.empty();
  for (let i = 0; i < ItemData.length; i++) {
    elem.append(
      `<option value="${i}" data-valid="${ItemData[i].IsValid}">[${("000" + i.toString(16)).slice(-3).toUpperCase()}] ${ItemData[i].Name.replace(
        /\[+[^\[*\]]*\]+/g,
        ""
      )}</option>`
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
    if (e_mission_type.val() != null) {
      let diff = FloorData[dun.MappaIndex][i].MissionRankId;
      if (mission_type[e_mission_type.val()].difficult && diff < 15) diff++;
      elem.append(`<option value="${i}">${dun.FlagStairs ? "" : "B"}${i - dun.FloorPrev}F : ${difficult[diff].name}(${difficult[diff].value})</option>`);
    } else {
      elem.append(`<option value="${i}">${dun.FlagStairs ? "" : "B"}${i - dun.FloorPrev}F</option>`);
    }
  }
  // 値をセット
  elem.val(dun.FloorPrev + 1);
}
/**
 * 固定フロアをセット
 */
function AppendFixedFloor(elem = e_fixed_floor) {
  let prev = elem.val() != undefined ? elem.val() : 0;
  elem.empty();
  for (let i = 0; i < FixedData.length; i++) {
    elem.append(`<option value="${i}">[${("00" + i.toString(16)).slice(-2).toUpperCase()}] ${FixedData[i].Name}</option>`);
  }
  // 値を再度セット
  if (prev >= elem.children().length || prev == undefined) prev = 0;
  elem.val(prev);
}
/**
 * 制限タイプをセット
 */
function AppendRestrictionType(elem = e_rest_type) {
  let prev = elem.val() != undefined ? elem.val() : 0;
  elem.empty();
  for (let i = 0; i < restriction.length; i++) {
    elem.append(`<option value="${i}">[${("00" + i.toString(16)).slice(-2).toUpperCase()}] ${restriction[i].name}</option>`);
  }
  // 値を再度セット
  if (prev >= elem.children().length || prev == undefined) prev = 0;
  elem.val(prev);
}
/**
 * 制限にタイプをセット
 */
function AppendPokeType(elem = e_rest_value) {
  let prev = elem.val() != undefined ? elem.val() : 0;
  elem.empty();
  for (let i = 0; i < poke_type.length; i++) {
    elem.append(`<option value="${i}">[${("00" + i.toString(16)).slice(-2).toUpperCase()}] ${poke_type[i].name}</option>`);
  }
  // 値を再度セット
  if (prev >= elem.children().length || prev == undefined) prev = 0;
  elem.val(prev);
}

/********************************************************************/

/**
 * パスワード展開
 * @returns
 */
function AnalysisPass() {
  let sky = CheckVersionSky();
  let resion = GetResion();
  let swap = GetSwapTable(sky, resion);
  let error = "";
  e_pass_alert.removeClass("alert-success");
  e_pass_alert.removeClass("alert-danger");
  e_pass_alert.removeClass("alert-warning");

  // パスワード取得
  let pass = ConvertToHalfPassString(e_pass_area.val());
  if (pass.length != swap.length) {
    error = `パスワードの文字数が正しくありません。(${pass.length}/${swap.length})`;
  }
  for (let i = 0; i < pass.length; i++) {
    if (pass_str.indexOf(String(pass[i])) == -1) {
      error = `パスワードが間違っています。 (該当: ${i + 1}文字目)`;
      break;
    }
  }

  if (error.length == 0) {
    console.log("展開: " + pass);
    try {
      let mission = new WonderMail();
      mission.Decode(sky, resion, pass);

      // コンボボックスにセット
      e_mission_type.val(mission.MissionType).change();
      e_mission_flag.val(mission.MissionFlag).change();
      e_reward_type.val(mission.RewardType).change();
      e_reward_value_number.val(mission.RewardValue.toString(16).toUpperCase()).change();
      e_reward_value_select.val(mission.RewardValue).change();
      e_cliant.val(mission.Cliant).change();
      e_target_1.val(mission.Target1).change();
      e_target_2.val(mission.Target2).change();
      e_target_item.val(mission.TargetItem).change();
      e_dungeon.val(mission.Dungeon).change();
      e_dungeon_floor.val(mission.Floor).change();
      e_fixed_floor.val(mission.Fixed).change();
      e_rest_type.val(mission.RestType).change();
      e_rest_value.val(mission.RestValue).change();
      e_seed.val(mission.Seed.toString(16).toUpperCase()).change();

      // ハッシュ値セット
      e_hash_1.removeClass("is-valid");
      e_hash_2.removeClass("is-valid");
      e_hash_1.val(mission.Hash1.toString(16).toUpperCase());
      e_hash_2.val(mission.Hash2.toString(16).toUpperCase());
      if (mission.Hash1 == mission.Hash2) {
        e_hash_1.addClass("is-valid");
        e_hash_2.addClass("is-valid");
      }

      // メッセージ
      e_pass_alert.hide();

      if (mission.Hash1 == mission.Hash2) {
        e_pass_alert.html("パスワードを展開しました！");
        e_pass_alert.addClass("alert-success");
      } else {
        let msg =
          `<p>パスワードを展開しましたが、ハッシュ値が一致しません。` +
          `<br>Hash1: ${mission.Hash1.toString(16).toUpperCase()} / Hash2: ${mission.Hash2.toString(16).toUpperCase()}</p>` +
          `<p class="mb-0">このまま生成することで正しいハッシュ値のパスワードに修正して生成できます。</p>`;
        e_pass_alert.html(msg);
        e_pass_alert.addClass("alert-warning");
      }
      e_pass_alert.fadeIn();

      return mission;
    } catch (e) {
      error = "処理エラー (" + e + ")";
      console.error(e);
      e_pass_alert.hide();
      e_pass_alert.text(error);
      e_pass_alert.addClass("alert-danger");
      e_pass_alert.fadeIn();
    }
  } else {
    e_pass_alert.hide();
    e_pass_alert.text("\n" + error);
    e_pass_alert.addClass("alert-danger");
    e_pass_alert.fadeIn();
  }
}

/**
 * パスワード作成
 */
function GeneratePass() {
  e_pass_alert.hide();
  e_pass_alert.removeClass("alert-success");
  e_pass_alert.removeClass("alert-danger");
  e_pass_alert.removeClass("alert-warning");

  let sky = CheckVersionSky();
  let resion = GetResion();

  let mission = new WonderMail();
  mission.Status = 4;
  mission.MissionType = e_mission_type.val() ?? 0;
  mission.MissionFlag = e_mission_flag.val() ?? 0;
  mission.RewardType = e_reward_type.val() ?? 0;
  mission.RewardValue = reward_type[e_reward_type.val()].mode == 0 ? parseInt(e_reward_value_number.val(), 16) : e_reward_value_select.val();
  mission.Cliant = e_cliant.val() ?? 0;
  mission.Target1 = !e_target_1.prop("disabled") ? e_target_1.val() ?? 0 : e_cliant.val() ?? 0;
  mission.Target2 = !e_target_2.prop("disabled") ? e_target_2.val() ?? 0 : 0;
  mission.TargetItem = e_target_item.val() ?? 0;
  mission.Dungeon = e_dungeon.val() ?? 0;
  mission.Floor = e_dungeon_floor.val() ?? 0;
  mission.Fixed = !e_fixed_floor.prop("disabled") ? e_fixed_floor.val() : 0;
  mission.RestType = e_rest_type.val() ?? 0;
  mission.RestValue = e_rest_value.val() ?? 0;
  mission.Seed = parseInt(e_seed.val(), 16) ?? 0;
  mission.Encode(sky, resion);

  if (mission.Password.length == GetSwapTable(sky, resion).length) {
    let result = mission.Password.concat();
    // 全角化
    if ($("#option-multibyte").prop("checked")) {
      result = ConvertToMultiPassString(result); // 全角化
    }
    // スペース追加
    if ($("#option-space").prop("checked")) {
      let space = $("#option-multibyte").prop("checked") ? `　` : ` `;
      if (mission.Sky) {
        // 空 => 5/7/5で空白追加
        result =
          result.slice(0, 5) +
          space +
          result.slice(5, 12) +
          space +
          result.slice(12, 17) +
          space +
          result.slice(17, 22) +
          space +
          result.slice(22, 29) +
          space +
          result.slice(29, 34);
      } else {
        // 時闇 => 4/4/4で空白追加
        result =
          result.slice(0, 4) +
          space +
          result.slice(4, 8) +
          space +
          result.slice(8, 12) +
          space +
          result.slice(12, 16) +
          space +
          result.slice(16, 20) +
          space +
          result.slice(20, 24);
      }
    }
    // 改行
    if ($("#option-line").prop("checked")) {
      let half = result.length / 2;
      let space = result.charAt(half) == " " || result.charAt(half) == "　";
      result = result.slice(0, half) + "\r\n" + result.slice(half + (space ? 1 : 0), result.length);
    }

    e_pass_area.animate({ backgroundColor: "#000" }, 0).animate({ backgroundColor: "#fff" }, 500);
    e_pass_area.val(result);

    e_pass_alert.addClass("alert-success");
    e_pass_alert.html("パスワードを生成しました！");
    e_pass_alert.fadeIn();
  } else {
    e_pass_alert.addClass("alert-danger");
    e_pass_alert.text("パスワードの生成に失敗しました。");
    e_pass_alert.fadeIn();
  }
}

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
    .replace(/[−―‐―ー—⁻₋]/g, "-")
    .replace(/[Ａ-Ｚａ-ｚ０-９＋－＝＆％＠＃]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
    });
  return res;
}

/**
 * パスワード文字列全角化
 * @param {*} str
 * @returns
 */
function ConvertToMultiPassString(str) {
  let res = "";
  res = str
    .toUpperCase()
    .replace(/[\0\r\n\t 　]/g, "")
    .replace(/[A-Za-z0-9+-=&%@#]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) + 0xfee0);
    });
  return res;
}

/**
 * バージョン空の探検隊チェック
 * @returns
 */
function CheckVersionSky() {
  return e_version_sky.prop("checked");
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
