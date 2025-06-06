// 優先度低めの細かいメモ:
// ・Vanilla JS, Choices.jsへの移行 (=> jQuery, Select2 の削除予定)
// ・varは使わず, なるべくconst, letで変数を定義
//   過去に使っていたvarはconstやletに変更予定

window.select2Config = { theme: 'bootstrap-5', matcher: Select2CustomMatcher, templateResult: Select2FormatState };

window.PokemonData = null;
window.ItemData = null;
window.MoveData = null;
window.DungeonData = null;
window.FloorData = null;
window.IQGroupData = null;
window.IQSkillData = null;
window.TypeData = null;

window.choicesOptions = {
  placeholder: false,
  placeholderValue: '選択...',
  loadingText: 'Loading...',
  noResultsText: '結果なし',
  noChoicesText: '項目なし',
  itemSelectText: '',
  uniqueItemText: '同じ項目は追加できません',
  customAddItemText: '特定の条件に合う項目のみ追加できます',
  classNames: {},
  searchResultLimit: -1, // 検索全件表示
  shouldSort: false,
  fuseOptions: {
    threshold: 0.2, // あいまい閾値
    getFn: (obj, path) => {
      // ひらがなカタカナ対応
      const value = obj[path];
      const hira = KanaToHira(value);
      const kana = HiraToKana(value);
      return [hira, kana];
    },
  },
};
