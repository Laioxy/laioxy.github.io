function getUnownSuffix(index) {
  if (index < 25) {
    // B-Z
    return '-' + String.fromCharCode(97 + index + 1); // 97 = 'a'
  } else if (index === 25) {
    return '-exclamation';
  } else {
    return '-question';
  }
}

const pokemonData = [
  // Regular Pokemon 1-492
  ...Array.from({ length: 492 }, (_, i) => ({
    baseId: i + 1,
    formId: 0,
    sortId: i + 1,
    imageSuffix: '',
  })),
  // Unown forms (B-Z, !, ?)
  ...Array.from({ length: 27 }, (_, i) => ({
    baseId: 201,
    formId: i + 1,
    sortId: 201 + (i + 1) / 100,
    imageSuffix: getUnownSuffix(i),
  })),
  // Burmy/Wormadam forms
  { baseId: 412, formId: 1, sortId: 412.1, imageSuffix: '-sandy' },
  { baseId: 412, formId: 2, sortId: 412.2, imageSuffix: '-trash' },
  { baseId: 413, formId: 1, sortId: 413.1, imageSuffix: '-sandy' },
  { baseId: 413, formId: 2, sortId: 413.2, imageSuffix: '-trash' },
  // Shellos/Gastrodon forms
  { baseId: 422, formId: 1, sortId: 422.1, imageSuffix: '-east' },
  { baseId: 423, formId: 1, sortId: 423.1, imageSuffix: '-east' },
].sort((a, b) => a.sortId - b.sortId);

async function loadPokemon() {
  const container = document.getElementById('pokemon-list');
  container.innerHTML = '';
  for (let [i, pokemon] of pokemonData.entries()) {
    const div = document.createElement('div');
    div.className = 'pokemon-item rounded p-1';
    div.style.backgroundColor = 'var(--bs-secondary-bg)';
    div.dataset.index = i;
    div.dataset.formId = pokemon.formId;

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${pokemon.baseId}${pokemon.imageSuffix}.png`;
    div.style.backgroundImage = `url(${imageUrl})`;

    container.appendChild(div);

    div.addEventListener('click', () => {
      const isSelected = div.style.backgroundColor === 'var(--bs-warning)';
      div.style.backgroundColor = isSelected ? 'var(--bs-secondary-bg)' : 'var(--bs-warning)';
      saveState();
      updateProgress();
    });
  }

  loadState();
  restoreFormSwitch();
  filterFormVariants(document.getElementById('toggleFormSwitch').checked, true);
  updateProgress();
}

function saveState() {
  const items = document.querySelectorAll('.pokemon-item');
  let bin = '';
  for (let div of items) {
    bin += div.style.backgroundColor === 'var(--bs-warning)' ? '1' : '0';
  }
  const compressed = LZString.compressToBase64(bin);
  localStorage.setItem('pokemon-checklist', compressed);
}

function loadState() {
  const items = document.querySelectorAll('.pokemon-item');
  const compressed = localStorage.getItem('pokemon-checklist');
  const bin = LZString.decompressFromBase64(compressed);

  if (!bin || bin.length !== items.length) return;
  for (let i = 0; i < items.length; ++i) {
    if (bin[i] === '1') items[i].style.backgroundColor = 'var(--bs-warning)';
    else items[i].style.backgroundColor = 'var(--bs-secondary-bg)';
  }
}

// 姿違いスイッチの状態をlocalStorageで保持・復元
function saveFormSwitchState(checked) {
  localStorage.setItem('pokemon-checklist-formSwitch', checked ? '1' : '0');
}
function restoreFormSwitch() {
  const toggleFormSwitch = document.getElementById('toggleFormSwitch');
  const saved = localStorage.getItem('pokemon-checklist-formSwitch');
  if (toggleFormSwitch && saved !== null) {
    toggleFormSwitch.checked = saved === '1';
  }
}

function updateProgress() {
  const excludeForm = document.getElementById('toggleFormSwitch')?.checked;
  const items = Array.from(document.querySelectorAll('.pokemon-item')).filter(
    (div) => !excludeForm || div.dataset.formId === '0',
  );
  let checked = 0;
  for (let div of items) {
    if (div.style.backgroundColor === 'var(--bs-warning)') checked++;
  }
  let percent = Math.floor((checked / items.length) * 100);
  if (checked === items.length && items.length > 0) percent = 100;
  const bar = document.getElementById('progress-bar');
  const percentText = document.getElementById('progress-percent');
  const countText = document.getElementById('progress-count');
  bar.style.width = percent + '%';
  bar.setAttribute('aria-valuenow', percent);
  percentText.textContent = percent + '%';
  countText.textContent = checked + '/' + items.length;
  if (percent === 100) {
    bar.classList.remove('bg-primary');
    bar.classList.add('bg-warning');
  } else {
    bar.classList.add('bg-primary');
    bar.classList.remove('bg-warning');
  }
}

// モーダル表示用Bootstrap
let exportModal, importModal;
document.addEventListener('DOMContentLoaded', () => {
  exportModal = new bootstrap.Modal(document.getElementById('exportModal'));
  importModal = new bootstrap.Modal(document.getElementById('importModal'));
  document.getElementById('export-btn').onclick = showExportModal;
  document.getElementById('import-btn').onclick = showImportModal;
  document.getElementById('importForm').onsubmit = handleImport;

  // アコーディオン矢印の回転制御
  const collapse = document.getElementById('collapseImportExport');
  const arrow = document.getElementById('accordionArrow');
  collapse.addEventListener('show.bs.collapse', () => {
    arrow.style.transform = 'rotate(180deg)';
  });
  collapse.addEventListener('hide.bs.collapse', () => {
    arrow.style.transform = 'rotate(0deg)';
  });

  // すべてチェック・すべて解除
  document.getElementById('mark-all-btn').onclick = () => {
    showConfirmModal('すべてチェックしますか？<br>チェックした内容は失われます。', () => {
      setAllMarked(true);
    });
  };
  document.getElementById('unmark-all-btn').onclick = () => {
    showConfirmModal('すべて解除しますか？<br>チェックした内容は失われます。', () => {
      setAllMarked(false);
    });
  };

  // 姿違いスイッチ
  const toggleFormSwitch = document.getElementById('toggleFormSwitch');
  if (toggleFormSwitch) {
    toggleFormSwitch.addEventListener('change', () => {
      saveFormSwitchState(toggleFormSwitch.checked);
      filterFormVariants(toggleFormSwitch.checked, false);
      updateProgress();
    });
  }
});

function showExportModal() {
  const data = localStorage.getItem('pokemon-checklist') || '';
  document.getElementById('exportTextarea').value = data;
  exportModal.show();
}

function showImportModal() {
  document.getElementById('importTextarea').value = '';
  document.getElementById('importError').style.display = 'none';
  importModal.show();
}

function handleImport(e) {
  e.preventDefault();
  const textarea = document.getElementById('importTextarea');
  const errorDiv = document.getElementById('importError');
  let value = textarea.value.trim();
  const bin = LZString.decompressFromBase64(value);
  const itemsLen = document.querySelectorAll('.pokemon-item').length;
  if (!/^[01]+$/i.test(bin) || bin.length !== itemsLen) {
    errorDiv.textContent = 'インポート失敗: フォーマットが正しくありません。';
    errorDiv.style.display = 'block';
    return;
  }
  localStorage.setItem('pokemon-checklist', value);
  importModal.hide();
  loadState();
  updateProgress();
}

// すべてチェック・すべて解除の実行
function setAllMarked(marked) {
  const items = document.querySelectorAll('.pokemon-item');
  let bin = '';
  for (let div of items) {
    bin += marked ? '1' : '0';
  }
  const compressed = LZString.compressToBase64(bin);

  localStorage.setItem('pokemon-checklist', compressed);
  loadState();
  updateProgress();
}

// 警告モーダル表示
let confirmModal;
function showConfirmModal(message, okCallback) {
  document.getElementById('confirmModalBody').innerHTML = message;
  confirmModal = confirmModal || new bootstrap.Modal(document.getElementById('confirmModal'));
  confirmModal.show();
  const okBtn = document.getElementById('confirmModalOkBtn');
  // 一度だけイベントを付与
  okBtn.onclick = function () {
    confirmModal.hide();
    okCallback();
  };
}

// フィルタ（アニメーションなし）
function filterFormVariants(excludeForm, initial) {
  const items = document.querySelectorAll('.pokemon-item');
  for (let div of items) {
    if (excludeForm && div.dataset.formId !== '0') {
      div.style.display = 'none';
    } else {
      div.style.display = '';
    }
  }
}

loadPokemon();
