import { getJsonDatas } from '../json_script.js';
import { WonderMail } from './password.js';

let dungeonElement = null;
let passwordElement = null;
let passGenerateElement = null;
let optionOutputHalfWidthElement = null;
let optionOutputWithoutSpacesLinebreak = null;

// choicesデータ
let dungeonChoicesData = null;
const choicesInstances = [];

document.addEventListener('DOMContentLoaded', async function () {
  dungeonElement = document.getElementById('dungeon');
  passwordElement = document.getElementById('password');
  passGenerateElement = document.getElementById('pass-generate');
  optionOutputHalfWidthElement = document.getElementById('option-output-half-width');
  optionOutputWithoutSpacesLinebreak = document.getElementById('option-output-without-space-linebreak');

  // JSONデータ読込
  ({ dungeon: window.DungeonData, message: window.MessageData } = await getJsonDatas(['dungeon', 'message']));

  // イベント
  setEvent();

  // choices
  initChoices();
});

/**
 * 選択されたリージョンを取得
 * @returns
 */
function getRegionType() {
  const region = document.querySelector('input[name="region"]:checked');
  return region ? region.value : null;
}

/**
 * イベント
 */
function setEvent() {
  passGenerateElement.addEventListener('click', () => {
    const wm = new WonderMail();
    const region = getRegionType();
    if (!region) {
      console.error('region unchecked');
      return;
    }

    // SEEDをランダム化
    const seed = Math.floor(Math.random() * 0xffffff);

    // 依頼作成
    wm.Sky = true;
    wm.Region = region;
    wm.Status = 4;
    wm.MissionType = 0xb; // 挑戦状
    wm.MissionFlag = 0x5; // ジラーチ
    wm.RewardType = 0x6; // 仲間
    wm.RewardValue = 0x1a1; // ジラーチ
    wm.Client = 0x1a1; // ジラーチ
    wm.Target1 = 0x1a1; // ジラーチ
    wm.Target2 = 0x000;
    wm.TargetItem = 0x046; // オレンのみ
    wm.Dungeon = parseInt(dungeonElement?.value ?? 0);
    wm.Floor = 0x00; // 0F
    wm.Fixed = 0x95; // ジラーチ挑戦状
    wm.RestType = 0x00;
    wm.RestValue = 0x00;
    wm.Seed = seed;
    wm.encode();

    const widthType = optionOutputHalfWidthElement.checked ? 1 : 0;
    const spaceBreak = !optionOutputWithoutSpacesLinebreak.checked;
    passwordElement.value = wm.output(widthType, spaceBreak);
  });
}

/**
 * Choices 初期化
 */
function initChoices() {
  // 項目データ取得
  dungeonChoicesData = getDungeonChoicesData();

  // Choicesインスタンス化
  choicesInstances[dungeonElement.id] = new Choices(dungeonElement, choicesOptions);

  // 項目をセット
  choicesInstances[dungeonElement.id].clearChoices();
  choicesInstances[dungeonElement.id].setChoices(dungeonChoicesData, 'value', 'label', true, true, true);

  // デフォルト値をセット
  choicesInstances[dungeonElement.id].setChoiceByValue(1);
}

/**
 * [choices.js] ダンジョン項目データを取得
 * @returns
 */
function getDungeonChoicesData() {
  if (!DungeonData) {
    console.error('DungeonData not found');
    return;
  }
  const dungeonSEStart = 0x7b;
  const dungeonSEEnd = 0xa4;
  const maxDungeonId = 0xb3;
  const datas = DungeonData.filter((d) => d.Id <= maxDungeonId && !(d.Id >= dungeonSEStart && d.Id <= dungeonSEEnd));

  const result = [];
  for (const dungeon of datas) {
    result.push({
      value: dungeon.Id,
      label: `[${dungeon.Id.toString(16).padStart(2, '0').toUpperCase()}] ${formatRemoveTagString(MessageData[window.PARAMS['MESSAGE_DUNGEON_FULL_NAME_INDEX'] + dungeon.Id])}`,
      selected: dungeon.Id == 1,
    });
  }
  return result;
}
