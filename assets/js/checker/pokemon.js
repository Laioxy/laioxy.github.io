import { getJsonData } from './../json_script';
import * as params from './../param';

// スポーンデータ (ポケモン・ダンジョンタブ用)
let spawnData;

/** 除外するポケモンのID */
const bannedPokemonIds = [
  0x117, // 桃セレビィ
  0x17c, // 雪ポワルン
  0x17d, // 晴ポワルン
  0x17e, // 雨ポワルン
  0x180, // 紫カクレオン
  0x1a3, // AFデオキシス
  0x1a4, // DFデオキシス
  0x1a5, // SPデオキシス
  0x1cd, // ポジチェリム
];

/** 進化条件2 */
const evolve2String = [
  '-',
  'つうしんケーブル',
  '攻撃＞防御',
  '防御＞攻撃',
  '攻撃＝防御',
  'たいようのリボン',
  'げっこうのリボン',
  'うつくしスカーフ',
  'ランダム',
  'ランダム',
  'オス',
  'メス',
  'げんしのちから習得',
  'ころがる習得',
  'ダブルアタック習得',
  'ものまね習得',
];

/** イベント勧誘リスト */
const eventRectuit = [
  {
    id: 0x90,
    type: ['boss', 0x4e],
    context: '「なだれやま ちょうじょう」でフリーザーを倒す (50%)',
  },
  {
    id: 0x96,
    type: ['challenge', 0x53],
    context: 'ミュウツーからの挑戦状を受ける ※てんくうのかいだん要解禁',
  },
  {
    id: 0x97,
    type: ['boss', 0x56],
    context: '「ミステリージャングル おくち」でミュウを倒す (50%)',
  },
  {
    id: 0x10e,
    type: ['challenge', 0x5d],
    context: 'ライコウからの挑戦状を受ける ※なんとうしょとう要解禁',
  },
  {
    id: 0x10f,
    type: ['challenge', 0x6e],
    context: 'エンテイからの挑戦状を受ける ※れっかのどうくつ要解禁',
  },
  {
    id: 0x110,
    type: ['challenge', 0x6c],
    context: 'スイクンからの挑戦状を受ける ※まのかいいき要解禁',
  },
  {
    id: 0x199,
    type: ['boss', 0x39],
    context: '2周目以降「ばんにんのどうくつ レジロックのま」でレジロックを倒す (50%)',
  },
  {
    id: 0x19a,
    type: ['boss', 0x37],
    context: '2周目以降「ばんにんのどうくつ レジアイスのま」でレジアイスを倒す (50%)',
  },
  {
    id: 0x19b,
    type: ['boss', 0x3b],
    context: '2周目以降「ばんにんのどうくつ レジスチルのま」でレジスチルを倒す (50%)',
  },
  {
    id: 0x19e,
    type: ['boss', 0x4a],
    context: '「そこなしうみ おくそこ」でカイオーガを倒す (50%)',
  },
  {
    id: 0x19f,
    type: ['boss', 0x4c],
    context: '「かげろうのさばく おくち」でグラードンを倒す (50%)',
  },
  {
    id: 0x1a0,
    type: ['boss', 0x54],
    context: '「てんくうのかいだん ちょうじょう」でレックウザを倒す (50%)',
  },
  {
    id: 0x1a1,
    type: ['challenge', 0xae],
    context: 'ジラーチからの挑戦状を受ける ※SE1「ビッパのねがいごと」要クリア',
  },
  {
    id: 0x20a,
    type: ['boss', 0x10],
    context: '本編クリア後「ねっすいのどうくつ ちょうじょう」でユクシーを倒す',
  },
  {
    id: 0x20b,
    type: ['boss', 0x17],
    context: '本編クリア後「ちていのみずうみ (りゅうさのどうくつ)」でエムリットを倒す',
  },
  {
    id: 0x20c,
    type: ['boss', 0x1a],
    context: '本編クリア後「すいしょうのみずうみ (だいすいしょうのみち)」でアグノムを倒す',
  },
  {
    id: 0x20d,
    type: ['boss', 0x2b],
    context: '本編クリア後「じげんのとう ちょうじょう」でディアルガを倒す',
  },
  {
    id: 0x20e,
    type: ['boss', 0x42],
    context: 'ダークライ撃破後「そらのさけめ おくそこ」でパルキアを倒す',
  },
  {
    id: 0x20f,
    type: ['boss', 0x50],
    context: '「きょだいかざん ちょうじょう」でヒードランを倒す (50%)',
  },
  {
    id: 0x210,
    type: ['boss', 0x3d],
    context: '「ばんにんのどうくつ レジギガスのま」でレジギガスを倒す',
  },
  {
    id: 0x211,
    type: ['boss', 0x52],
    context: '「せかいのおおあな おくそこ」でギラティナを倒す (50%)',
  },
  {
    id: 0x212,
    type: ['event'],
    context: 'ダークライ撃破後、サメハダいわでクレセリアと話す',
  },
  {
    id: 0x213,
    type: ['event'],
    context: 'きせきのうみクリア後、再度「きせきのうみ おくそこ」へ向かう',
  },
  {
    id: 0x214,
    type: ['event'],
    context: 'ダークライ撃破後、依頼を3日分こなす',
  },
  {
    id: 0x216,
    type: ['event'],
    context: 'そらのいただきクリア後、再度「そらのいただき ちょうじょう」へ向かう',
  },
];

/** [ダンジョン] 勧誘不可仮ダンジョンID */
const RECRUIT_NOT_RECRUITABLE_DUNGEON_ID = 300;
/** [ダンジョン] 挑戦状仮ダンジョンID */
const RECRUIT_CHALLENGE_DUNGEON_ID = 400;
/** [ダンジョン] イベント勧誘仮ダンジョンID */
const RECRUIT_EVENT_DUNGEON_ID = 500;

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

const checkPokemonData = [
  // Regular Pokemon 1-492 (except 412, 413, 422, 423)
  ...Array.from({ length: 492 }, (_, i) => {
    const id = i + 1;
    if ([412, 413, 422, 423].includes(id)) return null;
    return {
      baseId: id,
      formId: 0,
      sortId: id,
      imageSuffix: '',
    };
  }).filter((x) => x !== null),
  // Unown forms (B-Z, !, ?)
  ...Array.from({ length: 27 }, (_, i) => ({
    baseId: 201,
    formId: i + 1,
    sortId: 201 + (i + 1) / 100,
    imageSuffix: getUnownSuffix(i),
  })),
  // Burmy/Wormadam forms (Sandy, Grass, Trash)
  { baseId: 412, formId: 1, sortId: 412.0, imageSuffix: '-sandy' },
  { baseId: 412, formId: 0, sortId: 412.1, imageSuffix: '' },
  { baseId: 412, formId: 2, sortId: 412.2, imageSuffix: '-trash' },
  { baseId: 10004, formId: 1, sortId: 413.0, imageSuffix: '' },
  { baseId: 413, formId: 0, sortId: 413.1, imageSuffix: '' },
  { baseId: 10005, formId: 2, sortId: 413.2, imageSuffix: '' },
  // Shellos/Gastrodon forms
  { baseId: 422, formId: 1, sortId: 422.0, imageSuffix: '-east' },
  { baseId: 422, formId: 0, sortId: 422.1, imageSuffix: '' },
  { baseId: 423, formId: 1, sortId: 423.0, imageSuffix: '-east' },
  { baseId: 423, formId: 0, sortId: 423.1, imageSuffix: '' },
].sort((a, b) => a.sortId - b.sortId);

async function loadPokemon() {
  // JSON読込
  await fetchJsonData();

  const container = document.getElementById('pokemon-list');
  container.innerHTML = '';
  for (let [i, pokemon] of checkPokemonData.entries()) {
    const div = parseHTML(`
      <div
        class="pokemon-grid"
        data-base-id="${pokemon.baseId}"
        data-form-id="${pokemon.formId}"
        data-id="${indexToPokemonId(i)}"
        style="background-image: url(${getPokemonSpriteUrl(i)})"
      ><div>
      `);
    container.appendChild(div);

    div.addEventListener('click', () => {
      togglePokemonChecked(div);
    });
  }

  // スポーンデータ作成
  spawnData = generateSpawnData();
  // ポケモン詳細を作成
  createGuide();
  // ダンジョン詳細を作成
  createRecruitDungeon();

  loadState();
  restoreFormSwitch();
  filterFormVariants(document.getElementById('toggleFormSwitch').checked, true);
  updateProgress();
  syncDetailsWithChecker();
  syncDungeonWithChecker();
}

/**
 * チェッカーのポケモンをチェック切替
 * @param {*} div
 */
function togglePokemonChecked(div) {
  const isSelected = div.classList.contains('checked');
  const pokemonId = div.dataset.id;

  if (isSelected) {
    div.classList.remove('checked');
  } else {
    div.classList.add('checked');
  }

  saveState();
  updateProgress();
  syncDetailsWithChecker(); // 勧誘方法同期
  syncDungeonWithChecker(); // ダンジョン同期
}

function saveState() {
  const items = Array.from(document.querySelectorAll('#pokemon-list .pokemon-grid')).sort((a, b) => {
    const baseIdA = parseInt(a.dataset.baseId);
    const baseIdB = parseInt(b.dataset.baseId);
    if (baseIdA !== baseIdB) return baseIdA - baseIdB;
    const formA = parseInt(a.dataset.formId);
    const formB = parseInt(b.dataset.formId);
    return formA - formB;
  });

  let bin = '';
  for (let div of items) {
    bin += div.classList.contains('checked') ? '1' : '0';
  }
  const compressed = LZString.compressToBase64(bin);
  localStorage.setItem('pokemon-checklist', compressed);
}

function loadState() {
  const items = Array.from(document.querySelectorAll('#pokemon-list .pokemon-grid')).sort((a, b) => {
    const baseIdA = parseInt(a.dataset.baseId);
    const baseIdB = parseInt(b.dataset.baseId);
    if (baseIdA !== baseIdB) return baseIdA - baseIdB;
    const formA = parseInt(a.dataset.formId);
    const formB = parseInt(b.dataset.formId);
    return formA - formB;
  });

  const compressed = localStorage.getItem('pokemon-checklist');
  const bin = LZString.decompressFromBase64(compressed);

  if (!bin || bin.length !== items.length) return;
  for (let i = 0; i < items.length; ++i) {
    if (bin[i] == '1') {
      items[i].classList.add('checked');
    } else {
      items[i].classList.remove('checked');
    }
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
  const items = Array.from(document.querySelectorAll('#pokemon-list .pokemon-grid')).filter(
    (div) => !excludeForm || div.dataset.formId === '0',
  );
  let checked = 0;
  for (let div of items) {
    if (div.classList.contains('checked')) checked++;
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
  const itemsLen = document.querySelectorAll('#pokemon-list .pokemon-grid').length;
  if (!/^[01]+$/i.test(bin) || bin.length !== itemsLen) {
    errorDiv.textContent = 'インポート失敗: フォーマットが正しくありません。';
    errorDiv.style.display = 'block';
    return;
  }
  localStorage.setItem('pokemon-checklist', value);
  importModal.hide();
  loadState();
  updateProgress();
  syncDetailsWithChecker();
  syncDungeonWithChecker();
}

// すべてチェック・すべて解除の実行
function setAllMarked(marked) {
  const items = document.querySelectorAll('#pokemon-list .pokemon-grid');
  let bin = '';
  for (let div of items) {
    bin += marked ? '1' : '0';
  }
  const compressed = LZString.compressToBase64(bin);

  localStorage.setItem('pokemon-checklist', compressed);
  loadState();
  updateProgress();
  syncDetailsWithChecker();
  syncDungeonWithChecker();
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
  const items = document.querySelectorAll('#pokemon-list .pokemon-grid');
  for (let div of items) {
    if (excludeForm && div.dataset.formId !== '0') {
      div.style.display = 'none';
    } else {
      div.style.display = '';
    }
  }
  // 詳細情報側にもフィルタを適用
  filterDetailsFormVariants(excludeForm);
}

/**
 * 詳細情報側の姿違いをフィルタ
 */
function filterDetailsFormVariants(excludeForm) {
  const detailsItems = document.querySelectorAll('.recruit-pokemon-grid');
  detailsItems.forEach((div) => {
    const id = div.dataset.id;
    const checkerDiv = document.querySelector(`.pokemon-grid[data-id="${id}"]`);

    if (checkerDiv) {
      const formId = parseInt(checkerDiv.dataset.formId);
      if (excludeForm && formId !== 0) {
        div.style.display = 'none';
      } else {
        // チェック状態を確認して表示/非表示を決定
        const isChecked = checkerDiv.classList.contains('checked');
        div.style.display = isChecked ? 'none' : '';
      }
    }
  });
}

/**
 * IndexIdからポケモンIDに変換
 * @param {*} indexId
 */
function indexToPokemonId(indexId) {
  const formIds = [
    [439, 0x1bf], // 砂ミノムッチ
    [438, 0x1c0], // 草ミノムッチ
    [440, 0x1c1], // 鋼ミノムッチ
    [442, 0x1c2], // 砂ミノマダム
    [441, 0x1c3], // 草ミノマダム
    [443, 0x1c4], // 鋼ミノマダム
    [452, 0x1ce], // 東カラナクシ
    [453, 0x1cf], // 西カラナクシ
    [454, 0x1d0], // 東トリトドン
    [455, 0x1d1], // 西トリトドン
  ];

  let id = indexId + 1;
  // 姿違いを変換
  for (const formId of formIds) {
    if (indexId == formId[0]) {
      return formId[1];
    }
  }
  // 除外する姿違いをスキップ
  for (const jumpId of bannedPokemonIds) {
    if (id >= jumpId) id++;
    else break;
  }
  return id;
}

/**
 * ポケモンIDから IndexId に逆変換
 * @param {*} pokemonId
 */
function pokemonIdToIndex(pokemonId) {
  let id = pokemonId;
  const formIds = [
    [439, 0x1bf], // 砂ミノムッチ
    [438, 0x1c0], // 草ミノムッチ
    [440, 0x1c1], // 鋼ミノムッチ
    [442, 0x1c2], // 砂ミノマダム
    [441, 0x1c3], // 草ミノマダム
    [443, 0x1c4], // 鋼ミノマダム
    [452, 0x1ce], // 東カラナクシ
    [453, 0x1cf], // 西カラナクシ
    [454, 0x1d0], // 東トリトドン
    [455, 0x1d1], // 西トリトドン
  ];

  // 姿違いの値変換
  for (const [baseId, altId] of formIds) {
    if (pokemonId === altId) {
      return baseId;
    }
  }
  // 除外する姿違いをスキップ
  for (let i = bannedPokemonIds.length - 1; i >= 0; i--) {
    const jumpId = bannedPokemonIds[i];
    if (id > jumpId) id--;
  }
  // 初期値が1スタートなので、こちらは-1する
  return id - 1;
}

/**
 * ポケモンのスポーン情報を作成
 * @returns
 */
function generateSpawnData() {
  const data = [];
  const banned = [0x17c, 0x17d, 0x17e];

  // 勧誘可能・有効ダンジョンのみに絞り込む
  const dungeons = DungeonData.filter(
    (r) => r.Id <= 0xbf && r.Id != 9 && r.Id != 11 && r.Id != 13 && !isUnusedDungeon(r.Id) && r.FlagRecruit,
  );

  for (const dungeon of dungeons) {
    const dungeonName = dungeon.InName;
    const mappaIndex = parseInt(dungeon.MappaIndex);
    const floorPrev = parseInt(dungeon.FloorPrev);
    const floorCount = parseInt(dungeon.FloorCount);
    // 固定フロアを除外 (宝箱フロアは許可)
    const floors = FloorData[mappaIndex]
      .slice(floorPrev + 1, floorPrev + 1 + floorCount)
      .filter((r) => r.FixedFloorId == 0 || r.FixedFloorId >= 0xaa);

    if (floors.length > 0) {
      for (const floor of floors) {
        const enemyTableId = parseInt(floor.IndexGroup.SpawnEnemy);
        const enemies = MappaSData.EnemyData[enemyTableId];

        // 敵ポケモンデータをセット (カクレオンを後ろにする)
        for (const enemy of enemies) {
          const pokemonId = parseInt(enemy.PokemonId);

          // フォルムチェンジしたポワルンを除外
          if (banned.includes(pokemonId)) continue;

          // カクレオンの場合、店が出るフロアのみに絞る
          if (
            pokemonId == 0x17f &&
            !(floor.ChanceKecleonShop > 0 && floor.FixedFloorId == 0 && floor.ChanceMonsterHouse < 100)
          ) {
            continue;
          }

          // なにかの場合除外
          if (pokemonId == 0x229) continue;

          data.push({
            dungeon: parseInt(dungeon.Id),
            dungeonName: dungeonName,
            floor: parseInt(floor.FloorNo) - floorPrev,
            level: parseInt(enemy.Level),
            pokemonId: pokemonId,
          });
        }
      }
    }
  }
  return data;
}

/**
 * ポケモンの勧誘情報を作成
 * @returns
 */
function generateRecruitData() {
  const datas = [];
  for (let i = 0; i < checkPokemonData.length; i++) {
    const id = indexToPokemonId(i);
    const data = {
      id: id,
      name: PokemonData[id].Name,
      subname: PokemonData[id].SubName,
      evolText: getEvolTextData(id),
      recruit: spawnData.filter((r) => r.pokemonId == id),
    };
    datas.push(data);
  }
  return datas;
}

/**
 * 勧誘情報要素を作成
 */
function createGuide() {
  const recruitData = generateRecruitData();

  // 全ポケモンIDを取得
  const ids = [];
  const wrapElement = document.getElementById('recruit-pokemon');
  for (let i = 0; i < checkPokemonData.length; i++) {
    const id = indexToPokemonId(i);
    const spawn = recruitData.find((r) => r.id == id);

    ids.push(id);
    const pokemon = PokemonData[id];
    const gridHtml = `
      <div class="recruit-pokemon-grid rounded" data-id="${id}">
        <div class="recruit-pokemon-grid-inner">
          <h6>
            <img class="recruit-pokemon-img" src="${getPokemonSpriteUrl(i)}">
            <span>${pokemon.Name}${pokemon.SubName ? `(${pokemon.SubName})` : ''}</span>
          </h6>
          <p class="recruit-rate small-text">
            <span>基礎勧誘率: ${(pokemon.RecruitRate1 / 10).toFixed(1)}%${pokemon.RecruitRate1 != pokemon.RecruitRate2 ? ` (${(pokemon.RecruitRate2 / 10).toFixed(1)}%)` : ''}
          </p>
        </div>
      </div>
    `;
    const grid = parseHTML(gridHtml);
    const inner = grid.querySelector('.recruit-pokemon-grid-inner');

    // 進化方法
    const divRecruitWrap = document.createElement('div');
    divRecruitWrap.classList.add('recruit-wrap', 'small-text');
    if (spawn.evolText.length > 0) {
      divRecruitWrap.innerHTML = `
      <p class="mb-1">
        <span class="badge text-bg-danger me-1">進化</span>${spawn.evolText}
      </p>`;
    }

    // 出現ダンジョンをダンジョン・階層連番ごとにグループ化
    const dungeonGroups = new Map();
    for (const item of spawn.recruit) {
      const dungeonId = item.dungeon;
      if (!dungeonGroups.has(dungeonId)) {
        dungeonGroups.set(dungeonId, []);
      }
      dungeonGroups.get(dungeonId).push(item);
    }
    const recruitGroups = {};
    for (const [dungeonId, items] of dungeonGroups.entries()) {
      const sorted = items.slice().sort((a, b) => a.floor - b.floor);
      const groups = [];
      let current = [sorted[0]];
      for (let i = 1; i < sorted.length; i++) {
        const prev = sorted[i - 1].floor;
        const cur = sorted[i].floor;

        if (cur === prev + 1) {
          current.push(sorted[i]);
        } else {
          groups.push(current);
          current = [sorted[i]];
        }
      }
      groups.push(current);
      recruitGroups[dungeonId] = groups;
    }
    // ダンジョン毎
    for (const [dungeonId, group] of Object.entries(recruitGroups)) {
      const dungeon = DungeonData[dungeonId];
      const elementHtml = `
        <p class="mb-1">
          <span class="badge text-bg-primary me-1">勧誘</span>
          ${
            // 道具必須の場合なぞのパーツアイコン表示
            pokemon.Bit_ItemRequiredSpawning ? '<span class="item-sprite sprite-18-3"></span>' : ''
          }
          ${dungeon.InName}
        </p>
      `;
      const element = parseHTML(elementHtml);

      const floorGroupArr = [];
      for (const floorGroup of group) {
        const min = Math.min(...floorGroup.map((x) => x.floor));
        const max = Math.max(...floorGroup.map((x) => x.floor));
        const stairs = dungeon.FlagStairs ? '' : 'B';
        floorGroupArr.push(min != max ? `${stairs}${min}F～${stairs}${max}F` : `${stairs}${min}F`);
      }
      element.innerHTML += ` ${floorGroupArr.join(', ')}`;
      divRecruitWrap.appendChild(element);
    }

    // イベント勧誘
    const event = eventRectuit.find((r) => r.id == id);
    if (event) {
      const p = document.createElement('p');
      p.classList.add('mb-1');
      p.innerHTML += `<span class="badge bg-indigo me-1">イベント</span>${event.context}`;
      divRecruitWrap.appendChild(p);
    }

    // カフェ
    if (params.CAFE_RECRUIT_TABLE.includes(id)) {
      divRecruitWrap.appendChild(
        parseHTML(`
          <p class="mb-1 cafe">
            <span class="badge text-bg-secondary me-1">カフェ</span>
            ドリンクを飲んで確率で勧誘
          </p>
        `),
      );
    }

    // シナリオ
    const scenario = parseHTML(`<p class="small-text mb-1 fw-bold"></p>`);
    if (Object.keys(recruitGroups).length > 0 && pokemon.UnlockScenario > 0) {
      scenario.textContent = `※${params.SCENARIO_STRINGS[pokemon.UnlockScenario]}に出現`;
    }

    // チェックボタン
    const btnCheck = document.createElement('span');
    btnCheck.classList.add('recruit-check');
    btnCheck.innerHTML = '<i class="bi bi-check2-circle"></i>';
    btnCheck.dataset.isAnimating = 'false';
    btnCheck.addEventListener('click', (e) => {
      if (btnCheck.dataset.isAnimating === 'true') return;
      const checkerItem = document.querySelector(`.pokemon-grid[data-id="${id}"]`);
      if (checkerItem) {
        btnCheck.dataset.isAnimating = 'true';
        togglePokemonChecked(checkerItem);
      }
    });

    inner.appendChild(divRecruitWrap);
    inner.appendChild(scenario);
    inner.appendChild(btnCheck);
    grid.appendChild(inner);

    wrapElement.appendChild(grid);
  }
}

/**
 * チェッカーの状態を詳細情報に同期
 */
function syncDetailsWithChecker() {
  const detailsItems = document.querySelectorAll('.recruit-pokemon-grid');
  const excludeForm = document.getElementById('toggleFormSwitch')?.checked;
  const detailTab = document.getElementById('detail-tab-pane');
  const isDetailTabVisible = detailTab && detailTab.classList.contains('show');

  detailsItems.forEach((detailDiv) => {
    const id = detailDiv.dataset.id;
    const checkerDiv = document.querySelector(`.pokemon-grid[data-id="${id}"]`);
    const btnCheck = detailDiv.querySelector('.recruit-check');
    const formId = parseInt(checkerDiv.dataset.formId);

    if (checkerDiv) {
      // 姿違いフィルタ適用中かつ基本形でない場合は非表示
      if (excludeForm && formId !== 0) {
        detailDiv.style.display = 'none';
        return;
      }

      const isChecked = checkerDiv.classList.contains('checked');
      if (isChecked) {
        if (isDetailTabVisible) {
          // 要素の高さとギャップを取得
          const itemHeight = detailDiv.offsetHeight;

          // CSS 変数を設定
          detailDiv.style.setProperty('--item-height', itemHeight + 'px');

          // アニメーション付きで非表示化
          detailDiv.classList.add('hiding');
          detailDiv.addEventListener(
            'animationend',
            () => {
              detailDiv.style.display = 'none';
              detailDiv.classList.remove('hiding');
              if (btnCheck) {
                btnCheck.dataset.isAnimating = 'false';
              }
            },
            { once: true },
          );
        } else {
          // タブが非表示の場合はアニメーションなしで非表示化
          detailDiv.style.display = 'none';
          if (btnCheck) {
            btnCheck.dataset.isAnimating = 'false';
          }
        }
      } else {
        // チェック解除時は表示
        detailDiv.style.display = '';
        detailDiv.classList.remove('hiding');
        if (btnCheck) {
          btnCheck.dataset.isAnimating = 'false';
        }
      }
    }
  });
}

/**
 * スポーンデータをグループ化して取得
 * @returns
 */
function generateSpawnGroup() {
  const dungeonMap = new Map();

  // スポーンデータから取得
  for (const item of spawnData) {
    if (!dungeonMap.has(item.dungeon)) {
      dungeonMap.set(item.dungeon, []);
    }
    dungeonMap.get(item.dungeon).push(item);
  }

  // 勧誘不可ポケモンを取得
  const usedIds = new Set();
  spawnData.forEach((r) => usedIds.add(r.pokemonId)); // 勧誘可能ダンジョンに出現するポケモンを除外
  eventRectuit.forEach((r) => usedIds.add(r.id)); // イベント勧誘ポケモンを除外
  bannedPokemonIds.forEach((r) => usedIds.add(r)); // 除外ポケモンを除外
  const missingIds = Array.from({ length: 534 }, (_, i) => i + 1).filter((id) => !usedIds.has(id));
  for (const missingId of missingIds) {
    const dungeonId = RECRUIT_NOT_RECRUITABLE_DUNGEON_ID;
    if (!dungeonMap.has(dungeonId)) {
      dungeonMap.set(dungeonId, []);
    }
    dungeonMap.get(dungeonId).push({
      dungeon: dungeonId,
      dungeonName: '勧誘不可',
      floor: 0,
      level: 0,
      pokemonId: missingId,
    });
  }

  // イベント勧誘ポケモンを取得
  for (const event of eventRectuit) {
    if (event.type.length > 0) {
      const dungeonId =
        event.type[0] == 'boss'
          ? event.type[1]
          : event.type[0] == 'challenge'
            ? RECRUIT_CHALLENGE_DUNGEON_ID
            : RECRUIT_EVENT_DUNGEON_ID;
      const dungeonName =
        event.type[0] == 'boss' ? DungeonData[dungeonId].Name : event.type[0] == 'challenge' ? '挑戦状' : 'イベント';

      if (!dungeonMap.has(dungeonId)) {
        dungeonMap.set(dungeonId, []);
      }
      dungeonMap.get(dungeonId).push({
        dungeon: dungeonId,
        dungeonName: dungeonName,
        floor: 0,
        level: 0,
        pokemonId: event.id,
      });
    }
  }

  const result = {};

  for (const [dungeonId, dungeonItems] of dungeonMap.entries()) {
    const pokemonMap = new Map();

    // dungeon 内で pokemonId ごとにまとめる
    for (const item of dungeonItems) {
      if (!pokemonMap.has(item.pokemonId)) {
        pokemonMap.set(item.pokemonId, {
          pokemonId: item.pokemonId,
          dungeonName: item.dungeonName,
          items: [],
        });
      }
      pokemonMap.get(item.pokemonId).items.push(item);
    }

    // 各 pokemonId ごとに floors を連番グループ化
    const pokemonGroups = [];

    for (const group of pokemonMap.values()) {
      const sorted = group.items.slice().sort((a, b) => a.floor - b.floor);

      const floorGroups = [];
      let current = [];

      for (const item of sorted) {
        if (current.length === 0) {
          current.push(item);
        } else {
          const prev = current[current.length - 1];
          if (item.floor === prev.floor + 1) {
            current.push(item);
          } else {
            floorGroups.push(current);
            current = [item];
          }
        }
      }
      if (current.length) floorGroups.push(current);

      const floors = floorGroups.map((g) => g.map((x) => x.floor));
      const levelRanges = floorGroups.map((g) => {
        const levels = g.map((x) => x.level);
        return {
          minLevel: Math.min(...levels),
          maxLevel: Math.max(...levels),
        };
      });

      pokemonGroups.push({
        pokemonId: group.pokemonId,
        dungeonName: group.dungeonName,
        floors,
        levelRanges,
      });
    }

    // dungeon をキーとして格納 (カクレオンを後ろにする)
    result[dungeonId] = pokemonGroups
      .sort((a, b) => a.pokemonId - b.pokemonId)
      .filter((x) => x.pokemonId != 0x17f)
      .concat(pokemonGroups.filter((x) => x.pokemonId == 0x17f));
  }

  return result;
}

/**
 * ダンジョン勧誘情報を作成
 */
function createRecruitDungeon() {
  const spawnGroup = generateSpawnGroup();

  const recruitDungeonWrap = document.getElementById('recruit-dungeon');
  for (const dungeonId in spawnGroup) {
    let dungeonName = '';
    if (dungeonId < DungeonData.length) {
      dungeonName = DungeonData[dungeonId].InName;
    } else if (dungeonId == RECRUIT_NOT_RECRUITABLE_DUNGEON_ID) {
      dungeonName = '◆ 勧誘不可 (進化限定)';
    } else if (dungeonId == RECRUIT_CHALLENGE_DUNGEON_ID) {
      dungeonName = '◆ 挑戦状';
    } else if (dungeonId == RECRUIT_EVENT_DUNGEON_ID) {
      dungeonName = '◆ イベント';
    }

    // ダンジョングリッド作成
    const dungeonGridHtml = `
        <div class="recruit-dungeon-grid rounded">
          <p class="dungeon-name">${dungeonName}</p>
          <div class="pokemon-grid-wrap">
          </div>
        </div>`;
    const dungeonGridElement = parseHTML(dungeonGridHtml);

    // ポケモングリッド作成
    const pokemonGridWrapElement = dungeonGridElement.querySelector('.pokemon-grid-wrap');
    for (const spawn of spawnGroup[dungeonId]) {
      const pokemonId = spawn.pokemonId;
      const indexId = pokemonIdToIndex(pokemonId);
      const pokemonGridHtml = `
        <div class="pokemon-grid position-relative" data-id="${pokemonId}"
          style="background-image: url(${getPokemonSpriteUrl(indexId)})">
        </div>
      `;
      const pokemonGrid = parseHTML(pokemonGridHtml);
      pokemonGrid.addEventListener('click', function () {
        // チェッカーのポケモンをトグル
        const checkerGrid = document.querySelector(`#pokemon-list .pokemon-grid[data-id="${pokemonId}"]`);
        if (checkerGrid) {
          togglePokemonChecked(checkerGrid);
        }
      });
      pokemonGridWrapElement.appendChild(pokemonGrid);
    }
    recruitDungeonWrap.appendChild(dungeonGridElement);
  }

  // // イベント勧誘
  // const eventGridHtml = `
  //   <div class="recruit-dungeon-grid rounded">
  //     <p class="dungeon-name">イベント</p>
  //     <div class="pokemon-grid-wrap">
  //     </div>
  //   </div>`;
  // const eventGridElement = parseHTML(eventGridHtml);
  // const eventPokemonGridWrapElement = eventGridElement.querySelector('.pokemon-grid-wrap');
  // for (const event of eventRectuit) {
  //   const pokemonId = event.id;
  //   const indexId = pokemonIdToIndex(pokemonId);
  //   const pokemonGridHtml = `
  //       <div class="pokemon-grid position-relative" data-id="${pokemonId}"
  //         style="background-image: url(${getPokemonSpriteUrl(indexId)})">
  //       </div>
  //     `;
  //   const pokemonGrid = parseHTML(pokemonGridHtml);
  //   pokemonGrid.addEventListener('click', function () {
  //     // チェッカーのポケモンをトグル
  //     const checkerGrid = document.querySelector(`#pokemon-list .pokemon-grid[data-id="${pokemonId}"]`);
  //     if (checkerGrid) {
  //       togglePokemonChecked(checkerGrid);
  //     }
  //   });
  //   eventPokemonGridWrapElement.appendChild(pokemonGrid);
  // }
  // recruitDungeonWrap.appendChild(eventGridElement);
}

/**
 * 勧誘方法タブのチェック状況を同期
 */
function syncRecruitDetail(pokemonId, isChecked) {
  const recruitGrid = document.querySelector(`#recruit-dungeon .recruit-pokemon-grid[data-id="${pokemonId}"]`);
  if (recruitGrid) {
    if (isChecked) {
      recruitGrid.classList.add('hiding');
      recruitGrid.addEventListener(
        'animationend',
        () => {
          recruitGrid.style.display = 'none';
          recruitGrid.classList.remove('hiding');
        },
        { once: true },
      );
    } else {
      recruitGrid.style.display = '';
      recruitGrid.classList.remove('hiding');
    }
  }
}

/**
 * ダンジョンタブのチェック状況を同期
 */
function syncDungeonDetail(pokemonId, isChecked) {
  const dungeonGrids = document.querySelectorAll(`#recruit-dungeon .pokemon-grid[data-id="${pokemonId}"]`);
  dungeonGrids.forEach((grid) => {
    if (isChecked) {
      grid.classList.add('checked');
    } else {
      grid.classList.remove('checked');
    }
  });
}

/**
 * チェッカー -> ダンジョン へ同期
 */
function syncDungeonWithChecker() {
  const dungeonGrids = document.querySelectorAll('#recruit-dungeon .pokemon-grid');
  dungeonGrids.forEach((grid) => {
    const pokemonId = grid.dataset.id;
    const checkerGrid = document.querySelector(`#pokemon-list .pokemon-grid[data-id="${pokemonId}"]`);

    if (checkerGrid && checkerGrid.classList.contains('checked')) {
      grid.classList.add('checked');
    } else {
      grid.classList.remove('checked');
    }
  });
}

/**
 * 該当ポケモンの進化情報をテキストで取得
 * @param {*} id ポケモンID
 * @returns
 */
function getEvolTextData(id) {
  const pokemon = PokemonData[id];
  const prevEvol = PokemonData[parseInt(pokemon.PreEvoIndex)];
  const evolMethod = parseInt(pokemon.EvoMethod);
  const evolParam = [parseInt(pokemon.EvoParam1), parseInt(pokemon.EvoParam2)];

  let text = '';
  if (prevEvol.Id > 0) {
    const prevEvolName = prevEvol.Name;
    let evolStr = '';
    switch (evolMethod) {
      case 0: // ヌケニン用
        evolStr = `進化で自動的に加入`;
        break;
      case 1: // レベル
        evolStr = `Lv${evolParam[0]}`;
        break;
      case 2: // かしこさ
        evolStr = `かしこさ★${getIQStarCount(evolParam[0]).toFixed(1)}(${evolParam[0]})以上`;
        break;
      case 3: // 道具
        const itemStr = ItemData[evolParam[0]].Name;
        evolStr = `${itemStr}`;
        break;
      case 4: // タマンタ用
        const targetStr = PokemonData[evolParam[0]].Name;
        evolStr = `${targetStr}が仲間にいる`;
        break;
      case 5: // つうしんケーブル
        evolStr = `つうしんケーブル`;
        break;
    }

    // 第二条件
    if (evolMethod >= 0 && evolMethod <= 3 && evolParam[1] > 0) {
      evolStr += ` + ${evolve2String[evolParam[1]]}`;
    }

    text = `${prevEvolName} (${evolStr})`;
    //console.log(`${pokemon.Name}: ${text}`, evolMethod, evolParam);
  }
  return text;
}

/**
 * ポケモンのスプライト画像URLを取得 (by PokeAPI)
 * @param {*} indexId
 * @returns
 */
function getPokemonSpriteUrl(indexId) {
  const imagePokemonData = checkPokemonData[indexId];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${imagePokemonData.baseId}${imagePokemonData.imageSuffix}.png`;
  return imageUrl;
}

/**
 * JSONデータを取得
 */
async function fetchJsonData() {
  try {
    const [pokemonData, itemData, dungeonData, floorData, mappaSData] = await Promise.all([
      getJsonData('pokemon'),
      getJsonData('item'),
      getJsonData('dungeon'),
      getJsonData('floor'),
      getJsonData('mappa_s'),
    ]);
    window.PokemonData = pokemonData;
    window.ItemData = itemData;
    window.DungeonData = dungeonData;
    window.FloorData = floorData;
    window.MappaSData = mappaSData;
  } catch (e) {
    console.error(e);
  }
}

loadPokemon();
