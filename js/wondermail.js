// データ格納用変数
var PokemonData;
var ItemData;
var DungeonData;
var FloorData;
var FixedData;

// 要素キャッシュ
var e_mission_type;
var e_mission_flag;
var e_reward_type;
var e_reward_value_number;
var e_reward_value_select;
var e_cliant;
var e_target_1;
var e_target_2;

// アドバンスモード (※未実装)
var advance = false;

$(async function () {
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

  e_mission_type = $("#mission-type");
  e_mission_flag = $("#mission-flag");
  e_reward_type = $("#reward-type");
  e_reward_value_number = $("#reward-value-number");
  e_reward_value_select = $("#reward-value-select");
  e_cliant = $("#cliant");
  e_target_1 = $("#target-1");
  e_target_2 = $("#target-2");
  e_tareget_item = $("#target-item");
  e_dungeon = $("#dungeon");
  e_dungeon_floor = $("#dungeon-floor");
  e_fixed_floor = $("#fixed-floor");
  e_rest_type = $("#rest-type");
  e_rest_value = $("#rest-value");
  e_seed = $("#seed");

  // バージョン・リージョン
  $("input[name='version'], input[name='resion']").on("change", function () {
    let old = $("#version-old").prop("checked");
    $("#group-resion input").prop("disabled", old);

    if (old) $("#context-resionfree").show();
    else $("#context-resionfree").hide();

    // パスワード文字更新
    $("#pass-area").val("").trigger("keyup");
    AppendMissionType(); // 依頼タイプ更新

    ToggleDisabled();
  });
  // 依頼タイプ
  e_mission_type.on("change", function () {
    let skyMTypeId = $(this).find("option:selected").data("sky");
    AppendMissionFlag(); // 依頼フラグ項目更新
    AppendDungeonFloor(true); // 階数項目更新 (依頼難易度変化の対応)
    ToggleDisabled();

    // 0x09 or 0x0A なら依頼主でコイルとジバコイルを許可
    AllowPokemon(e_cliant, skyMTypeId == 0x09 || skyMTypeId == 0x0a, [0x051, 0x1f8]);
    CheckBannedPokemon(e_cliant); // 依頼主更新

    CheckInvalidPokemon(e_target_1);
    CheckInvalidPokemon(e_target_2);
    CheckBannedPokemon(e_target_1);
    CheckBannedPokemon(e_target_2);
  });
  // 依頼フラグ
  e_mission_flag.on("change", function () {
    ToggleDisabled();

    // アジト依頼(依頼タイプ=0xA, フラグ=0x6)の場合、固定フロア有効
    let missionType = e_mission_type.val();
    let missionFlag = e_mission_flag.val();
    e_fixed_floor.prop("disabled", !(missionType == 0xa && missionFlag == 0x6));

    //  伝説の挑戦状の場合、各種セレクトボックスにセット
    let skyMTypeId = e_mission_type.find("option:selected").data("sky");
    // 報酬
    AllowPokemon(e_reward_value_select, skyMTypeId == 0x0b && $(this).val() == 1, [0x096]); // ミュウツー
    AllowPokemon(e_reward_value_select, skyMTypeId == 0x0b && $(this).val() == 2, [0x10f]); // エンテイ
    AllowPokemon(e_reward_value_select, skyMTypeId == 0x0b && $(this).val() == 3, [0x10e]); // ライコウ
    AllowPokemon(e_reward_value_select, skyMTypeId == 0x0b && $(this).val() == 4, [0x110]); // スイクン
    AllowPokemon(e_reward_value_select, skyMTypeId == 0x0b && $(this).val() == 5, [0x1a1]); // ジラーチ
    // 依頼主
    AllowPokemon(e_cliant, skyMTypeId == 0x0b && $(this).val() == 1, [0x096]); // ミュウツー
    AllowPokemon(e_cliant, skyMTypeId == 0x0b && $(this).val() == 2, [0x10f]); // エンテイ
    AllowPokemon(e_cliant, skyMTypeId == 0x0b && $(this).val() == 3, [0x10e]); // ライコウ
    AllowPokemon(e_cliant, skyMTypeId == 0x0b && $(this).val() == 4, [0x110]); // スイクン
    AllowPokemon(e_cliant, skyMTypeId == 0x0b && $(this).val() == 5, [0x1a1]); // ジラーチ
    // 対象ポケモン
    AllowPokemon(e_target_1, skyMTypeId == 0x0b && $(this).val() == 1, [0x096]); // ミュウツー
    AllowPokemon(e_target_1, skyMTypeId == 0x0b && $(this).val() == 2, [0x10f]); // エンテイ
    AllowPokemon(e_target_1, skyMTypeId == 0x0b && $(this).val() == 3, [0x10e]); // ライコウ
    AllowPokemon(e_target_1, skyMTypeId == 0x0b && $(this).val() == 4, [0x110]); // スイクン
    AllowPokemon(e_target_1, skyMTypeId == 0x0b && $(this).val() == 5, [0x1a1]); // ジラーチ

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
  e_cliant.on("change", function (e) {
    e;
    if (mission_type[e_mission_type.val()].same_cliant) {
      e_target_1.val($(this).val());
    }
  });
  // ダンジョン
  e_dungeon.on("change", function () {
    AppendDungeonFloor();
  });
  // 制限タイプ
  e_rest_type.on("change", function () {
    switch (restriction[$(this).val()].id) {
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
    if (!(s.match(/[0-9a-fA-F]/) || (37 <= k && k <= 40) || k === 8 || k === 46)) return false;
  });
  $("#pass-form input[type='text']").on("keyup blur", function (e) {
    this.value = this.value.replace(/[^0-9a-fA-F]+/i, "").toUpperCase();
    if (parseInt($(this).val(), 16) > parseInt($(this).data("maxvalue"), 16)) $(this).val(parseInt($(this).data("maxvalue"), 16).toString(16).toUpperCase());
  });

  // パスワード文字数表示
  $("input[name='version']").on("change", function () {
    // $("#pass-area").val("").trigger("keyup");
    // AppendMissionType(); // 依頼タイプ更新
  });
  $("#pass-area").on("keydown keyup", function () {
    let len = ConvertToHalfPassString($("#pass-area").val()).length;
    let max = GetSwapTable().length;
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
  console.log("event OK");

  // 初期化
  let init = new Promise(function () {
    AppendMissionType();
    AppendMissionFlag();
    AppendRewardType();
    AppendPokemon(e_cliant);
    AppendPokemon(e_target_1);
    AppendPokemon(e_target_2);
    AppendItem(e_tareget_item);
    AppendDungeon();
    AppendFixedFloor();
    AppendRestrictionType();
    console.log("init OK");
  });

  // ロード完了後、イベントトリガー
  $("select").trigger("change");
  $("#pass-area").trigger("keyup");
  console.log("trigger OK");

  $("#pass-analysis").on("click", function () {
    AnalysisPass();
  });
  $("#pass-generate").on("click", function () {
    GeneratePass();
    $("#pass-area").trigger("keyup");
  });
  $("input, select, textarea").on("change keydown", function () {
    $("#pass-alert").fadeOut();
  });
});

// 項目の有効無効
function ToggleDisabled() {
  let mission_type_val = e_mission_type.val();
  let mission_flag_val = e_mission_flag.val();
  // 対象ポケモン1
  e_target_1.prop("disabled", mission_type[mission_type_val].same_cliant);
  // 対象ポケモン2
  let target2_d = (mission_type_val == 10 && mission_flag_val == 6) || (mission_type_val == 11 && mission_flag_val == 0);
  e_target_2.prop("disabled", !target2_d);
  if (!target2_d) e_target_2.val(0);
  // 固定フロア
  e_fixed_floor.prop("disabled", !mission_type[mission_type_val].used_fixed);

  // 時闇に存在しない項目は非活性かつ半透明化
  // 該当: 対象ポケモン2, 固定フロア
  let sky_only = [e_target_2, e_fixed_floor];
  let old = $("#version-old").prop("checked");
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

/**
 * 依頼タイプをセット
 */
function AppendMissionType() {
  let elem = e_mission_type;
  let prev = elem.val(); // 現在選択中の依頼タイプID (保持用)
  let skyId = elem.find("option:selected").data("sky") ?? 0; // 空基準の依頼タイプID
  let mtype = mission_type;
  let old = $("#version-old").prop("checked");

  // 時闇の項目に合わせる
  if (old) {
    mtype = mission_type.filter(function (r) {
      return !r.sky_only;
    });
  }
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
}
/**
 * 依頼フラグをセット
 */
function AppendMissionFlag() {
  let elem = e_mission_flag;
  elem.empty();
  let flagType = mission_type[$("#mission-type option:selected").data("sky")].flag;
  for (let i = 0; i < mission_flag[flagType].length; i++) {
    elem.append(`<option value="${i}">[${("00" + i.toString(16)).slice(-2).toUpperCase()}] ${mission_flag[flagType][i]}</option>`);
  }
}
/**
 * 報酬タイプをセット
 */
function AppendRewardType() {
  let elem = e_reward_type;
  elem.empty();
  for (let i = 0; i < reward_type.length; i++) {
    elem.append(`<option value="${i}">[${("00" + i.toString(16)).slice(-2).toUpperCase()}] ${reward_type[i].name}</option>`);
  }
}
/**
 * ポケモンをセット (要素指定)
 * @param {*} elem
 */
function AppendPokemon(elem) {
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
}
/**
 * 道具をセット (要素指定)
 * @param {*} elem
 */
function AppendItem(elem) {
  elem.empty();
  for (let i = 0; i < ItemData.length; i++) {
    elem.append(
      `<option value="${i}" data-valid="${ItemData[i].IsValid}">[${("000" + i.toString(16)).slice(-3).toUpperCase()}] ${ItemData[i].Name.replace(
        /\[+[^\[*\]]*\]+/g,
        ""
      )}</option>`
    );
  }
}
/**
 * ダンジョンをセット
 */
function AppendDungeon() {
  e_dungeon.empty();
  for (let i = 0; i < DungeonData.length; i++) {
    e_dungeon.append(`<option value="${i}">[${("00" + i.toString(16)).slice(-2).toUpperCase()}] ${DungeonData[i].Name}</option>`);
  }
  // ダミー(0xAD)を選択不可にする
  $(`select#dungeon option[value="${0xad}"]`).prop("disabled", true);
}
/**
 * 階数をセット
 * @param {*} keep
 */
function AppendDungeonFloor(keep = false) {
  let elem = e_dungeon_floor;
  let dun = DungeonData[e_dungeon.val()];

  //let prevValue = elem.val(); // 値保持用
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
  elem.val(dun.FloorPrev + 1);
}
/**
 * 固定フロアをセット
 */
function AppendFixedFloor() {
  let elem = e_fixed_floor;
  elem.empty();
  for (let i = 0; i < FixedData.length; i++) {
    elem.append(`<option value="${i}">[${("00" + i.toString(16)).slice(-2).toUpperCase()}] ${FixedData[i].Name}</option>`);
  }
}
/**
 * 制限タイプをセット
 */
function AppendRestrictionType() {
  let elem = e_rest_type;
  elem.empty();
  for (let i = 0; i < restriction.length; i++) {
    elem.append(`<option value="${i}">[${("00" + i.toString(16)).slice(-2).toUpperCase()}] ${restriction[i].name}</option>`);
  }
}
/**
 * 制限にタイプをセット
 */
function AppendPokeType() {
  let elem = e_rest_value;
  elem.empty();
  for (let i = 0; i < poke_type.length; i++) {
    elem.append(`<option value="${i}">[${("00" + i.toString(16)).slice(-2).toUpperCase()}] ${poke_type[i].name}</option>`);
  }
}
