import { getJsonDatas } from '../json_script.js';
import { checkPasswordString } from '../utils/passwordConverter.js';
import { Rescue, RESCUE_TYPE_SOS, RESCUE_TYPE_AOK, RESCUE_TYPE_THANKYOU } from './password.js';

let passwordInputElement = null;
let passwordOutputElement = null;
let giftItemElement = null;
let giftItemCountElement = null;
let giftItemInnerElement = null;
let giftItemCountWrapElement = null;
let giftItemInnerWrapElement = null;
let passwordGenerateBtnElement = null;
let errorMsgWrapElement = null;

// choicesデータ
let itemChoicesData = null;
const choicesInstances = [];

// その他
let validationElements = null;

document.addEventListener('DOMContentLoaded', async function () {
  passwordInputElement = document.getElementById('password-input');
  giftItemElement = document.getElementById('gift-item');
  giftItemCountElement = document.getElementById('gift-item-count');
  giftItemInnerElement = document.getElementById('gift-item-inner');
  giftItemCountWrapElement = document.getElementById('gift-item-count-wrap');
  giftItemInnerWrapElement = document.getElementById('gift-item-inner-wrap');

  passwordGenerateBtnElement = document.getElementById('password-generate');
  errorMsgWrapElement = document.getElementById('error-msg-wrap');
  passwordOutputElement = document.getElementById('password-output');
  validationElements = [giftItemElement, giftItemInnerElement, giftItemCountElement];

  // JSONデータ読込
  ({ item: window.ItemData, message: window.MessageData } = await getJsonDatas(['item', 'message']));

  // イベント
  setEvent();

  // choices初期化
  initChoices();
});

/**
 * イベント
 */
function setEvent() {
  // 贈ってもらう道具
  giftItemElement.addEventListener('change', () => {
    // 個数・中身の表示切替
    toggleShowInnerAndCount();
  });

  // 生成ボタン
  passwordGenerateBtnElement.addEventListener('click', () => {
    generateMail();
  });

  // 共通
  for (const element of validationElements) {
    element.addEventListener('change', function () {
      // 全体バリデーション
      for (const e of validationElements) {
        runValidation(e);
      }
    });
  }
}

/**
 * Choices 初期化
 */
function initChoices() {
  const choicesElements = [giftItemElement, giftItemInnerElement];
  // オプション
  const choicesOptionsCustom = {
    ...choicesOptions,
    callbackOnCreateTemplates: function (template, escapeForTemplate, getClassNames) {
      return {
        item: ({ classNames }, data) => {
          // const listType = data.customProperties.listType ?? '';
          return template(`
          <div class="${getClassNames(classNames.item).join(' ')} ${getClassNames(
            data.highlighted ? classNames.highlightedState : classNames.itemSelectable,
          ).join(' ')} ${
            data.placeholder ? classNames.placeholder : ''
          }" data-item data-id="${data.id}" data-value="${data.value}" ${
            data.active ? 'aria-selected="true"' : ''
          } ${data.disabled ? 'aria-disabled="true"' : ''}>
            <span>${data.label}</span>
          </div>
        `);
        },
        choice: ({ classNames }, data) => {
          const errorType = data.customProperties.errorType ?? '';
          const isStackble = data.customProperties.isStackble ?? '';
          const isBox = data.customProperties.isBox ?? '';
          return template(`
          <div class="
          ${getClassNames(classNames.item).join(' ')} ${getClassNames(classNames.itemChoice).join(' ')} ${getClassNames(
            data.disabled ? classNames.itemDisabled : classNames.itemSelectable,
          ).join(' ')}" data-choice ${
            data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'
          } data-id="${data.id}" data-value="${data.value}" ${
            data.groupId > 0 ? 'role="treeitem"' : 'role="option"'
          } data-errorType="${errorType}" data-isStackble="${isStackble}" data-isBox="${isBox}">
            <span>${data.label}</span>
          </div>
          `);
        },
      };
    },
  };

  // 項目データ取得
  itemChoicesData = getitemChoicesData();

  // Choicesインスタンス化
  for (const element of choicesElements) {
    choicesInstances[element.id] = new Choices(element, choicesOptionsCustom);

    // 項目をセット
    choicesInstances[element.id].clearChoices();
    choicesInstances[element.id].setChoices(itemChoicesData, 'value', 'label', true, true, true);

    // デフォルト値をセット
    choicesInstances[element.id].setChoiceByValue(0);
  }
}

/**
 * [choices.js] 道具項目データを取得
 * @returns
 */
function getitemChoicesData() {
  if (!ItemData) {
    console.error('ItemData not found');
    return;
  }

  const result = [];
  for (let i = 0; i < ItemData.length; i++) {
    let errorType = '';

    const bannedStatus = isBannedItem(i);
    switch (bannedStatus) {
      case 1: // 禁止道具
        errorType = 'banned';
        break;
      case 2: // 無効
        errorType = 'invalid';
        break;
      // case 3: // 空限定
      //   errorType = 'skyonly';
      //   break;
    }

    // スタック可能な道具
    const category = parseInt(ItemData[i].Category);
    const isStackble = category == 0 || category == 1; // category6 (ポケ) もスタック可能だが弾くので除外
    // 宝箱
    const isBox = 12 <= category && category <= 14; // category11 (しようごマシン) も中身を指定できるが弾くので除外

    result.push({
      value: i,
      label: `[${i.toString(16).padStart(3, '0').toUpperCase()}] ${formatRemoveTagString(MessageData[window.PARAMS['MESSAGE_ITEM_NAME_INDEX'] + i])}`,
      selected: i == 0,
      customProperties: {
        listType: 'item',
        errorType: errorType,
        isStackble: isStackble,
        isBox: isBox,
      },
    });
  }
  return result;
}

/**
 * 禁止道具チェック
 * @param {*} x
 * @returns 0=許可, 1=禁止, 2=無効, 3=空限定
 */
function isBannedItem(x) {
  if (!ItemData) {
    console.error('ItemData not found');
    return;
  }

  // なし(0x000)は未選択とする
  if (x == 0) return 0;

  // const isSky = isVersionSky();
  const item = ItemData[x];
  const bannedList = [0xb2, 0xb7, 0xbb]; // ふしぎなタマゴ, ポケ, しようごマシン (IsStorableItem: 0x200cca8)

  if (bannedList.includes(x)) {
    return 1;
  }
  if (!item.IsValid) {
    return 2;
  }
  // if (!item.IsTokiYami) {
  //   return 3;
  // }
  return 0;
}

/**
 * バリデーション
 * @param {Element} element バリデーション対象要素
 * @returns
 */
function runValidation(element) {
  const errorMsgClassName = 'error-msg';
  let error, errorMsg;

  if (element.id in choicesInstances) {
    const value = choicesInstances[element.id].getValue();
    if (!value) {
      return;
    }
    if (!value.customProperties) {
      return;
    }

    // const errorType = value.customProperties.errorType ?? '';
    const floating = element.closest('.form-floating');
    const choicesInner = element.closest('.choices__inner');

    error = isBannedItem(parseInt(element.value));
    errorMsg = window.translate.rescue.itemWarning.item[error];

    // 既にエラーメッセージが出ている場合はエラー表示を消す
    const floatingNext = floating.nextElementSibling;
    if (floatingNext && floatingNext.classList.contains(errorMsgClassName)) {
      floatingNext.remove();
      choicesInner.classList.remove('border-danger');
    }

    // エラーメッセージを表示する (disabledの場合は無視)
    if (error > 0 && !element.disabled) {
      const errorElement = document.createElement('span');
      errorElement.classList.add(errorMsgClassName);
      errorElement.classList.add('text-danger');
      errorElement.innerHTML = `
        <i class="bi bi-exclamation-circle-fill me-1"></i>${errorMsg}
      `;
      floating.insertAdjacentElement('afterend', errorElement);
      choicesInner.classList.add('border-danger');
    }
  }
  // 贈る個数
  else if (element === giftItemCountElement) {
    const countValue = parseInt(giftItemCountElement.value);
    const isStackble = choicesInstances[giftItemElement.id].getValue().customProperties.isStackble ?? '';
    if (isStackble) {
      if (countValue == 0) {
        error = 1;
        errorMsg = window.translate.rescue.itemWarning.stackZero;
      } else if (countValue > 99) {
        error = 1;
        errorMsg = window.translate.rescue.itemWarning.stackOver;
      }
    }

    // 既にエラーメッセージが出ている場合はエラー表示を消す
    const floating = element.closest('.form-floating');
    const floatingNext = floating.nextElementSibling;
    if (floatingNext && floatingNext.classList.contains(errorMsgClassName)) {
      floatingNext.remove();
      element.classList.remove('border-danger');
    }
    if (error > 0 && !element.disabled) {
      const errorElement = document.createElement('span');
      errorElement.classList.add(errorMsgClassName);
      errorElement.classList.add('text-danger');
      errorElement.innerHTML = `
        <i class="bi bi-exclamation-circle-fill me-1"></i>${errorMsg}
      `;
      floating.insertAdjacentElement('afterend', errorElement);
      element.classList.add('border-danger');
    }
  }
}

/**
 * 道具の中身と個数の表示切替
 */
function toggleShowInnerAndCount() {
  const giftItemValue = choicesInstances[giftItemElement.id].getValue();
  const isStackble = giftItemValue.customProperties.isStackble;
  const isBox = giftItemValue.customProperties.isBox;

  if (isStackble) {
    giftItemCountWrapElement.classList.remove('d-none');
  } else {
    giftItemCountWrapElement.classList.add('d-none');
  }
  if (isBox) {
    giftItemInnerWrapElement.classList.remove('d-none');
  } else {
    giftItemInnerWrapElement.classList.add('d-none');
  }
}

/**
 * パスワードを生成
 * @returns
 */
function generateMail() {
  const inputPassword = ConvertToHalfPassString(passwordInputElement.value);
  let message = '';

  // パスワードが入力されていない場合エラー
  if (inputPassword.length <= 0) {
    message = window.translate.rescue.passwordError.required;
    showAlertMsg(3, message);
    return;
  }
  // 入力されたパスワードが54文字ではない場合エラー
  if (inputPassword.length !== 54) {
    message = window.translate.rescue.passwordError.invalidLength;
    showAlertMsg(3, message);
    return;
  }
  // 入力されたパスワードに不正な文字列が含まれる場合エラー
  const invalidCharIdx = checkPasswordString(inputPassword);
  if (invalidCharIdx >= 0) {
    message = window.translate.rescue.passwordError.invalidCharacter;
    showAlertMsg(3, message);
    return;
  }

  // パスワード展開
  const rescue = new Rescue(inputPassword);
  rescue.decode();

  // おれいのメールが入力されている場合エラー
  if (rescue.RescueType == RESCUE_TYPE_THANKYOU) {
    message = window.translate.rescue.passwordError.canNotUseThankYouMail;
    showAlertMsg(3, message);
    return;
  }
  // チェックサムが不一致の場合エラー
  if (rescue.Checksum1 != rescue.Checksum2) {
    message = window.translate.rescue.passwordError.checksumMismatch;
    showAlertMsg(3, message);
    return;
  }

  // たすけて/ふっかつ => ふっかつ/おれい に変換
  const result = rescue.clone();
  const item = ItemData[Number(giftItemElement.value)];

  result.GiftItemId = Number(giftItemElement.value);
  result.TeamName = 'じえん';
  if (rescue.RescueType == RESCUE_TYPE_SOS) {
    // たすけて -> ふっかつ
    result.RescueType = RESCUE_TYPE_AOK;
    result.AOKCheckKey = rescue.SOSCheckKey;
    result.AOKTeamId = Math.floor(Math.random() * 0xffffffff);
    result.encode(RESCUE_TYPE_AOK);
    message = window.translate.rescue.success.generateAOK;
  } else if (rescue.RescueType == RESCUE_TYPE_AOK) {
    // ふっかつ -> おれい
    result.RescueType = RESCUE_TYPE_THANKYOU;
    // 投擲物(0,1)の個数をセット
    if (item.Category == 0 || item.Category == 1) {
      result.GiftItemCount = Number(giftItemCountElement.value);
    }
    // 宝箱(12-14)の中身をセット
    else if (item.Category >= 12 && item.Category <= 14) {
      result.GiftItemCount = Number(giftItemInnerElement.value);
    }
    // それ以外は0をセット
    else {
      result.GiftItemCount = 0;
    }
    result.encode(RESCUE_TYPE_THANKYOU);
    message = window.translate.rescue.success.generateThankYou;
  } else {
    // 不正な依頼エラー
    message = window.translate.rescue.passwordError.invalidRescueType;
    showAlertMsg(3, message);
    return;
  }

  passwordOutputElement.textContent = ConvertToMultiFormat(result.Password, 6, 6, 6);
  showAlertMsg(2, message);
}

/**
 * アラート表示
 * @param {Number} mode 0=primary, 1=secondary, 2=success, 3=danger, 4=warning, 5=info, 6=light, 7=dark
 * @param {*} msg メッセージ内容
 * @param {Number} ms 表示ミリ秒 (0の場合は閉じるまで永続)
 */
function showAlertMsg(mode, msg, ms = 5000) {
  const alertMode = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

  // 既存のアラートを削除
  errorMsgWrapElement.querySelectorAll('.alert').forEach((alert) => {
    bootstrap.Alert.getInstance(alert)?.dispose();
    alert.remove();
  });

  const alert = document.createElement('div');
  alert.className = `alert alert-${alertMode[mode]} alert-dismissible fade mb-2`;
  alert.role = 'alert';
  alert.innerHTML = `${msg}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
  errorMsgWrapElement.appendChild(alert);

  requestAnimationFrame(() => {
    alert.classList.add('show');
  });

  // 時間経過で消去
  if (ms > 0) {
    setTimeout(() => {
      const bsAlert = bootstrap.Alert.getOrCreateInstance(alert);
      bsAlert.close();
    }, ms);
  }
}
