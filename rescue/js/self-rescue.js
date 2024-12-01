$(async function () {
  // 公開日まで蓋をしておく
  const now = new Date();
  const pub = new Date(2024, 12, 2, 18, 0, 0);
  if (now < pub) {
    const m = $("#main-container");
    m.empty();
    m.append(`<div class="card my-3"><div class="card-body">工事中</div></div>`);
    return;
  }

  var e_pass_area = $("#pass-area");
  var e_pass_result = $("#pass-result");
  var e_gift_item = $("#gift-item");
  var e_gift_item_count_wrap = $("#gift-item-count-wrap");
  var e_gift_item_count = $("#gift-item-count");
  var e_gift_item_inner_wrap = $("#gift-item-inner-wrap");
  var e_gift_item_inner = $("#gift-item-inner");
  var e_error = $("#error-box");
  var e_error_text = $("#error-text");
  var e_warning = $("#warning-box");
  var e_warning_text = $("#warning-text");

  // 贈ってもらう道具セット
  AppendItem(e_gift_item);
  AppendItem(e_gift_item_inner);

  // Select2
  e_gift_item.select2(select2Config);
  e_gift_item_inner.select2(select2Config);

  // 初期化
  InitGiftItemCount();

  function InitGiftItemCount() {
    const item = ItemData[e_gift_item.val()];
    const inner = item.Category == 12 || item.Id == 0xbb ? ItemData[e_gift_item_inner.val()] : null;

    // 投擲物-トゲ(0), 投擲物-石(1)、ポケの時、道具の個数表示
    if (item.Category == 0 || item.Category == 1 || item.Id == 0xb7) {
      e_gift_item_count_wrap.show();
      e_gift_item_inner_wrap.hide();
    }
    // 宝箱(12), しようごマシン選択時, 中身の道具 に切替
    else if (item.Category == 12 || item.Id == 0xbb) {
      e_gift_item_count_wrap.hide();
      e_gift_item_inner_wrap.show();
    } else {
      e_gift_item_count_wrap.hide();
      e_gift_item_inner_wrap.hide();
    }

    // [WARNING] 無効な道具選択
    if ((item.Id > 0 && !item.IsValid) || (inner != null && inner.Id > 0 && !inner.IsValid)) {
      msg = `無効な道具が選択されています。<br>
      パスワードの作成は可能ですが、入力しても弾かれてしまうので使用できません。`;
      ViewMsgWarning(msg);
    }
    // [WARNING] 贈る道具としてポケ、しようごマシン、ふしぎなタマゴ選択
    else if (item.Id == 0xb7 || item.Id == 0xb2 || item.Id == 0xbb) {
      msg = `贈ってもらう道具に「${formatRemoveTagString(item.Name)}」が選択されています。<br>
      パスワードの作成は可能ですが、入力しても弾かれてしまうので使用できません。`;
      ViewMsgWarning(msg);
    }
    // [WARNING] 中身の道具としてポケ、しようごマシン、ふしぎなタマゴ選択
    else if (inner != null && (inner.Id == 0xb7 || inner.Id == 0xb2 || inner.Id == 0xbb)) {
      msg = `中身の道具に「${formatRemoveTagString(inner.Name)}」が選択されています。<br>
      パスワードの作成は可能ですが、入力しても弾かれてしまうので使用できません。`;
      ViewMsgWarning(msg);
    }
    // [WARNING] スタック可能な道具で個数が0
    else if ((item.Category == 0 || item.Category == 1) && e_gift_item_count.val() == 0) {
      msg = `スタック可能な道具で個数が${e_gift_item_count.val()}に設定されています。<br>
      パスワードの作成は可能ですが、入力しても弾かれてしまうので使用できません。`;
      ViewMsgWarning(msg);
    }
    // [WARNING] スタック可能な道具で個数が99を超える
    else if ((item.Category == 0 || item.Category == 1) && e_gift_item_count.val() > 99) {
      msg = `スタック可能な道具で個数が99を超えています。<br>
      パスワードの作成は可能ですが、入力しても弾かれてしまうので使用できません。`;
      ViewMsgWarning(msg);
    } else {
      HideMsg();
    }
  }

  /**
   * Changeイベント
   */
  e_gift_item.on("change", function () {
    InitGiftItemCount();
  });
  e_gift_item_inner.on("change", function () {
    InitGiftItemCount();
  });
  e_gift_item_count.on("change, input", function () {
    InitGiftItemCount();
  });

  /**
   * ふっかつ/おれいのメール作成ボタン押下
   */
  $("#pass-analysis").on("click", function () {
    let msg = "";
    let input = ConvertToHalfPassString(e_pass_area.val());

    if (input.length !== 54) {
      // [ERROR] 有効文字数54文字未満
      msg = `
        パスワードの有効な文字数が異なります。(${input.length}/54文字)<br>
        正しく入力してください。
      `;
      ViewMsgError(msg);
      return false;
    }

    // パスワード展開
    const rescue = new Rescue();
    rescue.Decode(input);
    console.log(rescue);

    // [ERROR] ハッシュ値不整合
    if (rescue.Hash1 != rescue.Hash2) {
      msg = `パスワードが間違っています。(ハッシュ値不整合)`;
      ViewMsgError(msg);
      return false;
    }
    // [ERROR] たすけて、ふっかつ、おれいのメール以外
    else if (![1, 4, 5].includes(Number(rescue.RescueType))) {
      msg = `パスワードが間違っています。(救助依頼タイプ範囲外)`;
      ViewMsgError(msg);
      return false;
    }
    // [ERROR] おれいのメール
    else if (rescue.RescueType == 5) {
      msg = `おれいのメールのパスワードは使用できません。`;
      ViewMsgError(msg);
      return false;
    }
    HideMsg();

    const item = ItemData[e_gift_item.val()]; // 贈ってもらう道具
    const result = rescue.Clone();
    result.Resion = 0;

    // 投擲物の個数をセット
    if (item.Category == 0 || item.Category == 1) {
      result.GiftItemCount = Math.max(0, Math.min(99, Number(e_gift_item_count.val() ?? 0)));
    }
    // 宝箱またはしようごマシンの中身をセット
    else if (item.Category == 12 || item.Id == 0xbb) {
      result.GiftItemCount = Number(e_gift_item_inner.val() ?? 0);
    }
    // それ以外は0をセット
    else {
      result.GiftItemCount = 0;
    }

    if (rescue.RescueType == 1) {
      // たすけて→ふっかつ
      result.RescueType = 4;
      result.AOKCheckKey = rescue.SOSCheckKey;
      result.AOKTeamId = Math.floor(Math.random() * 0xffffffff);
      result.GiftItemId = e_gift_item.val() ?? 0;
      result.TeamName = "じえん";
      result.Encode(4);
    } else if (rescue.RescueType == 4) {
      // ふっかつ→おれい
      result.RescueType = 5;
      result.GiftItemId = e_gift_item.val() ?? 0;
      result.TeamName = "じえん";
      result.Encode(5);
    }
    e_pass_result.text(ConvertToMultiFormat(result.Password, 6, 6, 6));
  });

  /**
   * エラーメッセージを表示
   * @param {*} str
   */
  function ViewMsgError(str) {
    e_error_text.html(str);
    e_error.fadeIn();
  }

  /**
   * 警告メッセージを表示
   * @param {*} str
   */
  function ViewMsgWarning(str) {
    e_warning_text.html(str);
    e_warning.fadeIn();
  }

  /**
   * メッセージボックスを非表示
   */
  function HideMsg() {
    e_error.fadeOut();
    e_warning.fadeOut();
  }

  /**
   * 道具をセット (要素指定)
   * @param {*} elem
   */
  function AppendItem(elem) {
    const prev = elem.val() != undefined ? elem.val() : 0;
    elem.empty();
    for (let i = 0; i < ItemData.length; i++) {
      const itemName = formatRemoveTagString(ItemData[i].Name);
      elem.append(
        `<option value="${i}" data-search="${itemName}" data-valid="${ItemData[i].IsValid}">[${("000" + i.toString(16))
          .slice(-3)
          .toUpperCase()}] ${itemName}</option>`
      );
    }
    // 値を再度セット
    if (prev >= elem.children().length || prev == undefined) prev = 0;
    elem.val(prev);
  }
});
