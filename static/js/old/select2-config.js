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
  if ($.trim(params.term) === '') {
    return data;
  }

  // textプロパティがない場合は、項目を表示しない
  if (typeof data.text === 'undefined') {
    return null;
  }

  // 16進数のvalue(ID)で検索
  let val = parseInt(e_data.val()).toString(16).toUpperCase();
  let ser = params.term.toString().toUpperCase();
  if (val.indexOf(ser) > -1) {
    return data;
  }

  // 名称部分のみで検索（ひらがなカタカナ両対応）
  if (e_data.data('search') != undefined) {
    const hira = KanaToHira(e_data.data('search'));
    const kana = HiraToKana(e_data.data('search'));
    if (hira.indexOf(params.term) > -1 || kana.indexOf(params.term) > -1) {
      const modifiedData = $.extend({}, data, true);
      return modifiedData;
    } else if (data.text.indexOf(params.term) > -1) {
      const modifiedData = $.extend({}, data, true);
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

  let banned = $(state.element).data('banned') ?? false;
  let nogender = $(state.element).data('gender') == 0;
  let invalid = $(state.element).data('valid') != undefined ? !$(state.element).data('valid') : undefined;
  let allow = $(state.element).data('allow') != undefined ? $(state.element).data('allow') : undefined;

  if (banned) {
    // 禁止ポケモン
    res.addClass('banned');
  } else if (nogender) {
    // 無効ポケモン
    res.addClass('invalid');
  } else if (invalid != undefined && invalid) {
    // 無効道具
    res.addClass('invalid');
  }

  return res;
}

window.select2Config = { theme: 'bootstrap-5', matcher: Select2CustomMatcher, templateResult: Select2FormatState };
