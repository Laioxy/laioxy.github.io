var select2Config = { theme: "bootstrap-5", matcher: Select2CustomMatcher, templateResult: Select2FormatState };

/**
 * 値を符号なし16進数に変換
 * @param {*} value
 * @returns
 */
function ToHex32(value) {
  let h = (value >> 16) & 0xffff;
  let l = value & 0xffff;

  if (!h) return l.toString(16);

  return h.toString(16) + ("0000" + l.toString(16)).slice(-4);
}

/**
 * ひらがな変換
 * @param {*} str
 * @returns
 */
function KanaToHira(str) {
  return str.replace(/[\u30a1-\u30f6]/g, function (match) {
    var chr = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(chr);
  });
}

/**
 * カタカナ変換
 * @param {*} str
 * @returns
 */
function HiraToKana(str) {
  return str.replace(/[\u3041-\u3096]/g, function (match) {
    var chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
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
 * @param {string} str パスワード文字列(半角)
 * @param {number} sec1 区切り1文字数
 * @param {number} sec2 区切り2文字数
 * @param {number} sec3 区切り3文字数
 * @returns
 */
function ConvertToMultiFormat(str, sec1, sec2, sec3) {
  let res = "";
  let replace;
  replace = str
    .toUpperCase()
    .replace(/[\0\r\n\t 　]/g, "")
    .replace(/[A-Za-z0-9+-=&%@#]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) + 0xfee0);
    });

  if (sec1 == undefined || sec2 == undefined || sec3 == undefined) {
    alert("プログラムエラー");
    return false;
  }

  let i = 0;
  while (true) {
    // セクション1
    res += replace.slice(i, i + sec1);
    res += "　";
    i += sec1;
    // セクション2
    res += replace.slice(i, i + sec2);
    res += "　";
    i += sec2;
    // セクション3
    res += replace.slice(i, i + sec3);
    i += sec3;
    // 改行
    if (i >= str.length) break;
    else res += "\n";
  }

  return res;
}

/**
 * [Select2] カスタム検索
 * IDや性別は含まず、項目の名称だけで検索できるようにするもの
 *
 * @param {*} params
 * @param {*} data
 * @returns
 */
function Select2CustomMatcher(params, data) {
  let e_data = $(data.element);

  // 検索語がない場合は、すべてのデータを返す
  if ($.trim(params.term) === "") {
    return data;
  }

  // textプロパティがない場合は、項目を表示しない
  if (typeof data.text === "undefined") {
    return null;
  }

  // 16進数のvalue(ID)で検索
  let val = parseInt(e_data.val()).toString(16).toUpperCase();
  let ser = params.term.toString().toUpperCase();
  if (val.indexOf(ser) > -1) {
    return data;
  }

  // 名称部分のみで検索（ひらがなカタカナ両対応）
  if (e_data.data("search") != undefined) {
    let hira = KanaToHira(e_data.data("search"));
    let kana = HiraToKana(e_data.data("search"));
    if (hira.indexOf(params.term) > -1 || kana.indexOf(params.term) > -1) {
      var modifiedData = $.extend({}, data, true);
      return modifiedData;
    } else if (data.text.indexOf(params.term) > -1) {
      var modifiedData = $.extend({}, data, true);
      return modifiedData;
    }
  }

  // Return `null` if the term should not be displayed
  return null;
}

/**
 * [Select2] カスタムフォーマット
 * 項目の見た目の変更
 *
 * @param {*} state
 * @returns
 */
function Select2FormatState(state) {
  let res = $(`<span>${state.text}</span>`);

  let banned = $(state.element).data("banned") ?? false;
  let nogender = $(state.element).data("gender") == 0;
  let invalid = $(state.element).data("valid") != undefined ? !$(state.element).data("valid") : undefined;
  let allow = $(state.element).data("allow") != undefined ? $(state.element).data("allow") : undefined;

  if (banned) {
    // 禁止ポケモン
    res.addClass("banned");
  } else if (nogender) {
    // 無効ポケモン
    res.addClass("invalid");
  } else if (invalid != undefined && invalid) {
    // 無効道具
    res.addClass("invalid");
  }

  return res;
}
