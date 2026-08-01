/** 変換テーブル */
const encryption = [
  0x2e, 0x75, 0x3f, 0x99, 0x09, 0x6c, 0xbc, 0x61, 0x7c, 0x2a, 0x96, 0x4a, 0xf4, 0x6d, 0x29, 0xfa, 0x90, 0x14, 0x9d,
  0x33, 0x6f, 0xcb, 0x49, 0x3c, 0x48, 0x80, 0x7b, 0x46, 0x67, 0x01, 0x17, 0x59, 0xb8, 0xfa, 0x70, 0xc0, 0x44, 0x78,
  0x48, 0xfb, 0x26, 0x80, 0x81, 0xfc, 0xfd, 0x61, 0x70, 0xc7, 0xfe, 0xa8, 0x70, 0x28, 0x6c, 0x9c, 0x07, 0xa4, 0xcb,
  0x3f, 0x70, 0xa3, 0x8c, 0xd6, 0xff, 0xb0, 0x7a, 0x3a, 0x35, 0x54, 0xe9, 0x9a, 0x3b, 0x61, 0x16, 0x41, 0xe9, 0xa3,
  0x90, 0xa3, 0xe9, 0xee, 0x0e, 0xfa, 0xdc, 0x9b, 0xd6, 0xfb, 0x24, 0xb5, 0x41, 0x9a, 0x20, 0xba, 0xb3, 0x51, 0x7a,
  0x36, 0x3e, 0x60, 0x0e, 0x3d, 0x02, 0xb0, 0x34, 0x57, 0x69, 0x81, 0xeb, 0x67, 0xf3, 0xeb, 0x8c, 0x47, 0x93, 0xce,
  0x2a, 0xaf, 0x35, 0xf4, 0x74, 0x87, 0x50, 0x2c, 0x39, 0x68, 0xbb, 0x47, 0x1a, 0x02, 0xa3, 0x93, 0x64, 0x2e, 0x8c,
  0xad, 0xb1, 0xc4, 0x61, 0x04, 0x5f, 0xbd, 0x59, 0x21, 0x1c, 0xe7, 0x0e, 0x29, 0x26, 0x97, 0x70, 0xa9, 0xcd, 0x18,
  0xa3, 0x7b, 0x74, 0x70, 0x96, 0xde, 0xa6, 0x72, 0xdd, 0x13, 0x93, 0xaa, 0x90, 0x6c, 0xa7, 0xb5, 0x76, 0x2f, 0xa8,
  0x7a, 0xc8, 0x81, 0x06, 0xbb, 0x85, 0x75, 0x11, 0x0c, 0xd2, 0xd1, 0xc9, 0xf8, 0x81, 0x70, 0xee, 0xc8, 0x71, 0x53,
  0x3d, 0xaf, 0x76, 0xcb, 0x0d, 0xc1, 0x56, 0x28, 0xe8, 0x3c, 0x61, 0x64, 0x4b, 0xb8, 0xef, 0x3b, 0x41, 0x09, 0x72,
  0x07, 0x50, 0xad, 0xf3, 0x2e, 0x5c, 0x43, 0xff, 0xc3, 0xb3, 0x32, 0x7a, 0x3e, 0x9c, 0xa3, 0xc2, 0xab, 0x10, 0x60,
  0x99, 0xfb, 0x08, 0x8a, 0x90, 0x57, 0x8a, 0x7f, 0x61, 0x90, 0x21, 0x88, 0x55, 0xe8, 0xfc, 0x4b, 0x0d, 0x4a, 0x7a,
  0x48, 0xc9, 0xb0, 0xc7, 0xa6, 0xd0, 0x04, 0x7e, 0x05,
];

/** パスワード文字列 */
const charset = '&67NPR89F0+#STXY45MCHJ-K12=%3Q@W';

export class PasswordConverter {
  password = '';
  swapLength = 0;
  idxList = new Array();
  swapList = new Array();
  bitList = new Array();
  decList = new Array();

  setPassword(passStr) {
    this.password = passStr;
  }
  setDecList(decList) {
    this.decList = decList;
  }

  /**
   * パスワードを生成
   * @param {*} swapTable
   * @returns
   */
  encode(swapTable) {
    if (!this.decList || this.decList.length == 0) {
      console.error('undefined decList');
      return false;
    }
    this.swapLength = swapTable.length;
    this.bitList = this.encDecToBit(this.decList);
    this.swapList = this.encBitToSwap(this.bitList, swapTable);
    this.idxList = this.encSwapToIdx(this.swapList, swapTable);
    this.password = this.encIdxToPassword(this.idxList, swapTable);
    return this.password;
  }

  /**
   * パスワードを展開
   * @param {*} swapTable
   * @returns
   */
  decode(swapTable) {
    if (!this.password || this.password.length == 0) {
      console.error('undefined password');
      return false;
    }
    this.swapLength = swapTable.length;
    this.idxList = this.decPasswordToIdx(this.password);
    this.swapList = this.decIdxToSwap(this.idxList, swapTable);
    this.bitList = this.decSwapToBit(this.swapList);
    this.decList = this.decBitToDec(this.bitList);
    return this.decList;
  }

  /**
   * [Decode] パスワード -> Idx 変換
   * @param {string} passStr
   * @returns {number[]}
   */
  decPasswordToIdx(passStr) {
    const res = new Array(passStr.length);
    for (let i = 0; i < passStr.length; i++) {
      res[i] = charset.indexOf(passStr[i]);
    }
    return res;
  }

  /**
   * [Decode] Idx -> Swap 変換
   * @param {number[]} idxList
   * @returns {number[]}
   */
  decIdxToSwap(idxList, swapTable) {
    const res = new Array(idxList.length);
    for (let i = 0; i < idxList.length; i++) {
      res[i] = idxList[swapTable[i]];
    }
    return res;
  }

  /**
   * [Decode] Swap -> Bit 変換
   * @param {number[]} swapList
   * @returns {number[]}
   */
  decSwapToBit(swapList) {
    let bit = 0;
    let val = 0;
    const res = [];
    for (let i = 0; i < swapList.length; i++) {
      val |= swapList[i] << bit;
      bit += 5;
      if (bit >= 8) {
        res.push(val & 0xff);
        val >>= 8;
        bit -= 8;
      }
    }
    return res;
  }

  /**
   * [Decode] Bit -> Dec 変換
   * @param {Number[]} convList
   * @param {Boolean} isWMS ふしぎなメールSであるか
   * @returns {Number[]}
   */
  decBitToDec(convList) {
    const first = convList[0];
    const isWMS = this.swapLength == 34;

    // 最初の値の上位4ビットと下位4ビットの和に8を足す
    const count = (first >> 4) + (first & 0xf) + 8;
    const mov = first & 0x01 ? 1 : -1;

    const res = [];
    // チェックサムはそのまま入れる
    for (let i = 0; i < (isWMS ? 4 : 1); i++) res.push(convList[i]);

    let pos = 0;
    for (let i = isWMS ? 4 : 1; i < convList.length; i++) {
      const j = (pos * mov + first) & 0xff;
      const dec = (convList[i] - encryption[j]) & 0xff;
      res.push(dec);
      pos = (pos + 1) % count;
    }

    // ふしぎなメールは空のnullbyteを追加
    if (this.swapLength != 54) res.push(0);

    return res;
  }

  /**
   * [Encode] Dec -> Bit 変換
   * @param {number[]} decList
   */
  encDecToBit(decList) {
    const t = decList[0];
    const mov = (t & 0x01) == 1 ? 1 : -1;
    const count = (t >> 4) + (t & 0xf) + 8;
    const res = [];
    const isWMS = this.swapLength == 34;

    // チェックサム分をセット
    for (let i = 0; i < (isWMS ? 4 : 1); i++) {
      res.push(decList[i]); // WMS => 4byte, それ以外 => 1byte
    }

    // 救助依頼(length=54)以外はループ数を1減らす
    // おそらく元々は依頼と救助で共通だったが空でパラメータが追加された影響で
    // このような処理でないと合わなくなった？
    let maxLoopCount = decList.length;
    if (decList.length != 54 && decList[decList.length - 1] == 0) {
      maxLoopCount--;
    }

    let position = 0;
    for (let i = isWMS ? 4 : 1; i < maxLoopCount; i++) {
      const j = (position * mov + t) & 0xff;
      const val = (decList[i] + encryption[j]) & 0xff;
      res.push(val);
      position = (position + 1) % count;
    }
    return res;
  }

  /**
   * [Encode] Bit -> Swap 変換
   * @param {number[]} convList
   * @returns {number[]}
   */
  encBitToSwap(convList, swapTable) {
    const res = new Array(swapTable.length);
    let bits = 0;
    let aidx = 0;
    for (let i = 0; i < res.length; i++) {
      res[i] = convList[aidx] >> bits;
      if (bits > 2) res[i] |= convList[aidx + 1] << (8 - bits);
      bits += 5;
      if (bits > 7) {
        aidx++;
        bits %= 8;
      }
    }
    for (let i = 0; i < res.length; i++) res[i] &= charset.length - 1;
    return res;
  }

  /**
   * [Encode] Swap -> Idx 変換
   * @param {number[]} swapList
   * @returns {number[]}
   */
  encSwapToIdx(swapList, swapTable) {
    const res = new Array(swapTable.length);
    for (let i = 0; i < swapTable.length; i++) {
      res[swapTable[i]] = swapList[i] & (charset.length - 1);
    }
    return res;
  }

  /**
   * [Encode] Idx -> パスワード 変換
   * @param {number[]} idxList
   * @returns {string}
   */
  encIdxToPassword(idxList, swapTable) {
    let res = '';
    for (let i = 0; i < swapTable.length; i++) {
      res += charset.charAt(idxList[i]);
    }
    return res;
  }
}

/**
 * 不正文字チェック
 * @param {*} string パスワード文字列
 * @returns 不正文字Index
 */
export function checkPasswordString(string) {
  let str = ConvertToHalfPassString(string);

  // パスワードに使える文字以外が含まれている場合弾く
  for (let i = 0; i < str.length; i++) {
    if (!charset.includes(str[i])) return i;
  }
  return -1;
}
