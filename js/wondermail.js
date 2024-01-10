// データ格納用変数
var PokemonData;
var ItemData;
var DungeonData;
var FloorData;
var FixedData;

// アドバンスモード (※未実装)
var advance = false;

$(async function () {
  PokemonData = await GetPokemonJson();
  ItemData = await GetItemJson();
  DungeonData = await GetDungeonJson();
  FloorData = await GetFloorJson();
  FixedData = await GetFixedJson();

  // バージョン
  $("input[name='version']").off("change");
  $("input[name='version']").on("change", function () {
    let old = $("#version-old").prop("checked");
    $("#group-resion input").prop("disabled", old);

    if (old) $("#context-resionfree").show();
    else $("#context-resionfree").hide();

    ToggleDisabled();
  });
  // 依頼タイプ
  $("#mission-type").off("change");
  $("#mission-type").on("change", function () {
    let skyMTypeId = $(this).find("option:selected").data("sky");
    AppendMissionFlag(); // 依頼フラグ項目更新
    AppendDungeonFloor(true); // 階数項目更新 (依頼難易度変化の対応)
    ToggleDisabled();

    // 0x09 or 0x0A なら依頼主でコイルとジバコイルを許可
    AllowPokemon($("#cliant"), skyMTypeId == 0x09 || skyMTypeId == 0x0a, [0x051, 0x1f8]);
    CheckBannedPokemon($("#cliant")); // 依頼主更新

    CheckInvalidPokemon($("#target-1"));
    CheckInvalidPokemon($("#target-2"));
    CheckBannedPokemon($("#target-1"));
    CheckBannedPokemon($("#target-2"));
  });
  // 依頼フラグ
  $("#mission-flag").on("change", function () {
    ToggleDisabled();

    //  伝説の挑戦状の場合、各種セレクトボックスにセット
    let skyMTypeId = $("#mission-type").find("option:selected").data("sky");
    // 報酬
    AllowPokemon($("#reward-value-select"), skyMTypeId == 0x0b && $(this).val() == 1, [0x096]); // ミュウツー
    AllowPokemon($("#reward-value-select"), skyMTypeId == 0x0b && $(this).val() == 2, [0x10f]); // エンテイ
    AllowPokemon($("#reward-value-select"), skyMTypeId == 0x0b && $(this).val() == 3, [0x10e]); // ライコウ
    AllowPokemon($("#reward-value-select"), skyMTypeId == 0x0b && $(this).val() == 4, [0x110]); // スイクン
    AllowPokemon($("#reward-value-select"), skyMTypeId == 0x0b && $(this).val() == 5, [0x1a1]); // ジラーチ
    // 依頼主
    AllowPokemon($("#cliant"), skyMTypeId == 0x0b && $(this).val() == 1, [0x096]); // ミュウツー
    AllowPokemon($("#cliant"), skyMTypeId == 0x0b && $(this).val() == 2, [0x10f]); // エンテイ
    AllowPokemon($("#cliant"), skyMTypeId == 0x0b && $(this).val() == 3, [0x10e]); // ライコウ
    AllowPokemon($("#cliant"), skyMTypeId == 0x0b && $(this).val() == 4, [0x110]); // スイクン
    AllowPokemon($("#cliant"), skyMTypeId == 0x0b && $(this).val() == 5, [0x1a1]); // ジラーチ
    // 対象ポケモン
    AllowPokemon($("#target-1"), skyMTypeId == 0x0b && $(this).val() == 1, [0x096]); // ミュウツー
    AllowPokemon($("#target-1"), skyMTypeId == 0x0b && $(this).val() == 2, [0x10f]); // エンテイ
    AllowPokemon($("#target-1"), skyMTypeId == 0x0b && $(this).val() == 3, [0x10e]); // ライコウ
    AllowPokemon($("#target-1"), skyMTypeId == 0x0b && $(this).val() == 4, [0x110]); // スイクン
    AllowPokemon($("#target-1"), skyMTypeId == 0x0b && $(this).val() == 5, [0x1a1]); // ジラーチ

    CheckInvalidPokemon($("#reward-value-select"));
    CheckInvalidPokemon($("#target-1"));
    CheckInvalidPokemon($("#target-2"));
    CheckInvalidPokemon($("#cliant"));
    CheckBannedPokemon($("#reward-value-select"));
    CheckBannedPokemon($("#target-1"));
    CheckBannedPokemon($("#target-2")); // disabledケア用途
    CheckBannedPokemon($("#cliant"));
  });
  // 報酬タイプ
  $("#reward-type").off("change");
  $("#reward-type").on("change", function () {
    let prev_num = $("#reward-value-number").val();
    let prev_sel = $("#reward-value-select").val();
    switch (reward_type[$(this).val()].mode) {
      case 0: // 指定なし
        $("#reward-value-number-group").show();
        $("#reward-value-select-div").hide();
        break;
      case 1: // 道具
        AppendItem($("#reward-value-select"));
        $("#reward-value-select-div").show();
        $("#reward-value-number-group").hide();
        CheckInvalidItem($("#reward-value-select"));
        $("#reward-value-select").parent().nextAll(".error-invalid-poke").hide();
        $("#reward-value-select").parent().nextAll(".error-banned-poke").hide();
        break;
      case 2: // ポケモン
        AppendPokemon($("#reward-value-select"));
        $("#reward-value-select-div").show();
        $("#reward-value-number-group").hide();
        CheckInvalidPokemon($("#reward-value-select"));
        CheckBannedPokemon($("#reward-value-select"));
        $("#reward-value-select").parent().nextAll(".error-invalid-item").hide();
        break;
    }
    ToggleDisabled();
    $("#mission-flag").trigger("change"); // 報酬の仲間ポケモンの有効無効を更新

    // changeのトリガーで値が変わってしまう対策
    if (prev_num != null) $("#reward-value-number").val(prev_num);
    if (prev_sel != null) {
      // 項目が上限を超過している場合、0に戻す
      if (prev_sel >= $("#reward-value-select option").length) prev_sel = 0;
      $("#reward-value-select").val(prev_sel);
    }
  });
  // 依頼主
  $("#cliant").on("change", function (e) {
    e;
    if (mission_type[$("#mission-type").val()].same_cliant) {
      $("#target-1").val($(this).val());
    }
  });
  // ダンジョン
  $("#dungeon").on("change", function () {
    AppendDungeonFloor();
  });
  // 制限タイプ
  $("#rest-type").off("change");
  $("#rest-type").on("change", function () {
    switch (restriction[$(this).val()].id) {
      case 0: // タイプ
        AppendPokeType();
        break;
      case 1: // ポケモン
        AppendPokemon($("#rest-value"));
        break;
    }
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
    $("#pass-area").val("").trigger("keyup");
    AppendMissionType(); // 依頼タイプ更新
  });
  $("#pass-area").on("keydown keyup", function () {
    let len = ConvertToHalfPassString($("#pass-area").val()).length;
    let max = GetSwapTable().length;
    $("#pass-maxlength").text(`(${len}/${max}文字)`);
  });

  // エラーメッセージ
  $("#reward-type, #reward-value-select, #cliant, #target-1, #target-2, #target-item").on("change", function () {
    if ($(this) == $("#reward-type")) {
      CheckInvalidPokemon($("#reward-value-select"));
      CheckBannedPokemon($("#reward-value-select"));
      CheckInvalidItem($("#reward-value-select"));
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
    AppendPokemon($("#cliant"));
    AppendPokemon($("#target-1"));
    AppendPokemon($("#target-2"));
    AppendItem($("#target-item"));
    AppendDungeon();
    AppendFixedFloor();
    AppendRestrictionType();
    console.log("init OK");
  });

  // ロード完了後、必要な項目だけイベントトリガー
  $("#mission-type").trigger("change");
  $("#reward-type").trigger("change");
  $("#dungeon").trigger("change");
  $("#rest-type").trigger("change");
  $("#pass-area").trigger("keyup");
  $("#cliant, #target-1, #target-2, #target-item").trigger("change");
  console.log("tri OK");

  $("#pass-analysis").on("click", function () {
    AnalysisPass();
  });
  $("#pass-generate").on("click", function () {
    GeneratePass();
  });
  $("input, select, textarea").on("change keydown", function () {
    $("#pass-alert").fadeOut();
  });
});

// 項目の有効無効
function ToggleDisabled() {
  let mission_type_val = $("#mission-type").val();
  let mission_flag_val = $("#mission-flag").val();
  // 対象ポケモン1
  $("#target-1").prop("disabled", mission_type[mission_type_val].same_cliant);
  // 対象ポケモン2
  let target2_d = (mission_type_val == 10 && mission_flag_val == 6) || (mission_type_val == 11 && mission_flag_val == 0);
  $("#target-2").prop("disabled", !target2_d);
  if (!target2_d) $("#target-2").val(0);
  // 固定フロア
  $("#fixed-floor").prop("disabled", !mission_type[mission_type_val].used_fixed);

  // 時闇に存在しない項目は非活性かつ半透明化
  // 該当: 対象ポケモン2, 固定フロア
  let sky_only = [$("#target-2"), $("#fixed-floor")];
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
 */
function CheckInvalidPokemon(elem) {
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
 */
function CheckBannedPokemon(elem) {
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
 */
function CheckInvalidItem(elem) {
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
  let elem = $("#mission-type");
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
  let elem = $("#mission-flag");
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
  let elem = $("#reward-type");
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
    elem.append(
      `<option value="${i}" data-pokeid="${i % 600}" data-gender="${gender}" data-banned="${banned}">[${("000" + i.toString(16)).slice(-3).toUpperCase()}] ${
        PokemonData[i % 600].Name
      } (${poke_gender[gender].name})</option>`
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
  $("#dungeon").empty();
  for (let i = 0; i < DungeonData.length; i++) {
    $("#dungeon").append(`<option value="${i}">[${("00" + i.toString(16)).slice(-2).toUpperCase()}] ${DungeonData[i].Name}</option>`);
  }
}
/**
 * 階数をセット
 * @param {*} keep
 */
function AppendDungeonFloor(keep = false) {
  let elem = $("#dungeon-floor");
  let dun = DungeonData[$("#dungeon").val()];
  let floorCount = dun.FloorCount;
  let prevValue = elem.val(); // 値保持用
  elem.empty();
  for (let i = 1; i <= floorCount; i++) {
    if ($("#mission-type").val() != null) {
      let diff = FloorData[dun.MappaIndex][i].MissionRankId;
      if (mission_type[$("#mission-type").val()].difficult && diff < 15) diff++;
      elem.append(`<option value="${i}">${dun.FlagStairs ? "" : "B"}${i}F : ${difficult[diff].name}(${difficult[diff].value})</option>`);
    } else {
      elem.append(`<option value="${i}">${dun.FlagStairs ? "" : "B"}${i}F</option>`);
    }
  }
  if (keep && prevValue < floorCount) elem.val(prevValue);
  else elem.val(1);
}
/**
 * 固定フロアをセット
 */
function AppendFixedFloor() {
  let elem = $("#fixed-floor");
  elem.empty();
  for (let i = 0; i < FixedData.length; i++) {
    elem.append(`<option value="${i}">[${("00" + i.toString(16)).slice(-2).toUpperCase()}] ${FixedData[i].Name}</option>`);
  }
}
/**
 * 制限タイプをセット
 */
function AppendRestrictionType() {
  let elem = $("#rest-type");
  elem.empty();
  for (let i = 0; i < restriction.length; i++) {
    elem.append(`<option value="${i}">[${("00" + i.toString(16)).slice(-2).toUpperCase()}] ${restriction[i].name}</option>`);
  }
}
/**
 * 制限にタイプをセット
 */
function AppendPokeType() {
  let elem = $("#rest-value");
  elem.empty();
  for (let i = 0; i < poke_type.length; i++) {
    elem.append(`<option value="${i}">[${("00" + i.toString(16)).slice(-2).toUpperCase()}] ${poke_type[i].name}</option>`);
  }
}
