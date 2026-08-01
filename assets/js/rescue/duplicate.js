import { checkPasswordString } from '../utils/passwordConverter.js';
import { Rescue, RESCUE_TYPE_SOS, RESCUE_TYPE_AOK, RESCUE_TYPE_THANKYOU } from './password.js';

let passwordInputElement = null;
let passwordOutputElement = null;
let passwordDuplicateBtnElement = null;
let errorMsgWrapElement = null;

document.addEventListener('DOMContentLoaded', async function () {
  passwordInputElement = document.getElementById('password-input');
  passwordOutputElement = document.getElementById('password-output');
  passwordDuplicateBtnElement = document.getElementById('password-duplicate-btn');
  errorMsgWrapElement = document.getElementById('error-msg-wrap');

  setEvent();
});

/**
 * イベント
 */
function setEvent() {
  passwordDuplicateBtnElement.addEventListener('click', () => {
    duplicatePassword();
  });
}

/**
 * パスワード複製処理
 */
function duplicatePassword() {
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

  // ふっかつメールの場合エラー
  if (rescue.RescueType == RESCUE_TYPE_AOK) {
    message = window.translate.rescue.passwordError.canNotUseAOKMail;
    showAlertMsg(3, message);
    return;
  }
  // おれいのメールの場合エラー
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

  // キー値をランダム化
  let rand = 0;
  do rand = Math.floor(Math.random() * 0x100000000) >>> 0;
  while (rescue.SOSCheckKey == rand);

  const result = rescue.clone();
  result.SOSCheckKey = rand;
  result.encode(RESCUE_TYPE_SOS);

  passwordOutputElement.textContent = ConvertToMultiFormat(result.Password, 6, 6, 6);
  showAlertMsg(2, window.translate.rescue.success.generateDuplicate);
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
