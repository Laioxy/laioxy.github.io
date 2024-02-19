$(function () {
  var e_pass_area = $("#pass-area");
  var e_pass_duplicate = $("#pass-duplicate");

  var e_pass_sos = $("#pass-sos");
  var e_base_checksum = $("#base-checksum");
  var e_new_checksum = $("#new-checksum");

  // パスワード複製
  e_pass_duplicate.on("click", function () {
    let pass = ConvertToHalfPassString(e_pass_area.val());
    let rescue = new Rescue();
    rescue.Decode(pass);

    if (pass.length != 54) {
      alert("パスワードの文字数が不正です。");
      return false;
    }
    for (let i = 0; i < pass.length; i++) {
      if (pass_str.indexOf(pass[i]) < 0) {
        alert(`パスワードに使用できない文字が含まれています。\n対象: ${i + 1}文字目`);
        return false;
      }
    }

    if (rescue.RescueType == 1) {
      let rand = 0;
      do rand = Math.floor(Math.random() * 0x100000000);
      while (rescue.SOSHash == rand);

      let newRescue = rescue.Clone();
      newRescue.SOSHash = rand;
      newRescue.Encode();

      e_pass_sos.val(ConvertToMultiFormat(newRescue.Password, 6, 6, 6));
      e_base_checksum.val(ToHex32(rescue.SOSHash).toUpperCase());
      e_new_checksum.val(ToHex32(newRescue.SOSHash).toUpperCase());
    } else {
      alert("たすけてメールのパスワードではありません。");
    }
  });
});
