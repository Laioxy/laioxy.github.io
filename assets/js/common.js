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
  searchPlaceholderValue: '検索...',
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

// テーマ適用 (DOM読込前に行う)
(function () {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const storedTheme = localStorage.getItem('theme') ?? 'auto';

  const getTheme = (mode) => (mode === 'auto' ? (prefersDark.matches ? 'dark' : 'light') : mode);
  const applyTheme = (mode) => {
    document.documentElement.setAttribute('data-bs-theme', getTheme(mode));
  };

  // 初期適用
  applyTheme(storedTheme);

  // ブラウザテーマ変更時
  prefersDark.addEventListener('change', () => {
    if ((localStorage.getItem('theme') ?? 'auto') === 'auto') {
      applyTheme('auto');
    }
  });

  // ユーザー操作による変更
  document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('theme-mode');
    if (!selector) return;

    selector.value = storedTheme;
    selector.addEventListener('change', (e) => {
      const mode = e.target.value;
      localStorage.setItem('theme', mode);
      applyTheme(mode);
    });
  });
})();

/**
 * ローディング解除
 */
function hideLoading() {
  const loadingElement = document.querySelector('.loading');
  if (loadingElement) {
    const duration = 300;
    loadingElement.style.transition = `opacity ${duration}ms`;
    loadingElement.style.opacity = 1;
    requestAnimationFrame(() => {
      loadingElement.style.opacity = 0;
    });
    setTimeout(() => {
      if (loadingElement.parentNode) loadingElement.remove();
    }, duration);
  } else {
    console.error('loadingElement not found');
  }
}
