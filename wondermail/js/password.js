export { WonderMail, GetSwapTable };

// swap
const swap_table = {
  sky: {
    jp: [
      0x14, 0x00, 0x13, 0x16, 0x05, 0x12, 0x02, 0x0b, 0x0c, 0x19, 0x21, 0x0f, 0x08, 0x1d, 0x11, 0x1a, 0x06, 0x01, 0x17, 0x1c, 0x07, 0x1b, 0x0d, 0x1f, 0x15,
      0x09, 0x1e, 0x0a, 0x20, 0x10, 0x0e, 0x04, 0x03, 0x18,
    ],
    na: [
      0x07, 0x1b, 0x0d, 0x1f, 0x15, 0x1a, 0x06, 0x01, 0x17, 0x1c, 0x09, 0x1e, 0x0a, 0x20, 0x10, 0x21, 0x0f, 0x08, 0x1d, 0x11, 0x14, 0x00, 0x13, 0x16, 0x05,
      0x12, 0x0e, 0x04, 0x03, 0x18, 0x02, 0x0b, 0x0c, 0x19,
    ],
    eu: [
      0x0e, 0x04, 0x03, 0x18, 0x09, 0x1e, 0x0a, 0x20, 0x10, 0x21, 0x14, 0x00, 0x13, 0x16, 0x05, 0x12, 0x06, 0x01, 0x17, 0x1c, 0x07, 0x1b, 0x0d, 0x1f, 0x15,
      0x1a, 0x02, 0x0b, 0x0c, 0x19, 0x0f, 0x08, 0x1d, 0x11,
    ],
  },
  old: [0x0c, 0x06, 0x13, 0x08, 0x04, 0x0d, 0x0f, 0x09, 0x10, 0x02, 0x14, 0x12, 0x00, 0x15, 0x0b, 0x05, 0x17, 0x03, 0x11, 0x0a, 0x01, 0x0e, 0x16, 0x07],
};
// 変換テーブル
const encryption = [
  0x2e, 0x75, 0x3f, 0x99, 0x09, 0x6c, 0xbc, 0x61, 0x7c, 0x2a, 0x96, 0x4a, 0xf4, 0x6d, 0x29, 0xfa, 0x90, 0x14, 0x9d, 0x33, 0x6f, 0xcb, 0x49, 0x3c, 0x48, 0x80,
  0x7b, 0x46, 0x67, 0x01, 0x17, 0x59, 0xb8, 0xfa, 0x70, 0xc0, 0x44, 0x78, 0x48, 0xfb, 0x26, 0x80, 0x81, 0xfc, 0xfd, 0x61, 0x70, 0xc7, 0xfe, 0xa8, 0x70, 0x28,
  0x6c, 0x9c, 0x07, 0xa4, 0xcb, 0x3f, 0x70, 0xa3, 0x8c, 0xd6, 0xff, 0xb0, 0x7a, 0x3a, 0x35, 0x54, 0xe9, 0x9a, 0x3b, 0x61, 0x16, 0x41, 0xe9, 0xa3, 0x90, 0xa3,
  0xe9, 0xee, 0x0e, 0xfa, 0xdc, 0x9b, 0xd6, 0xfb, 0x24, 0xb5, 0x41, 0x9a, 0x20, 0xba, 0xb3, 0x51, 0x7a, 0x36, 0x3e, 0x60, 0x0e, 0x3d, 0x02, 0xb0, 0x34, 0x57,
  0x69, 0x81, 0xeb, 0x67, 0xf3, 0xeb, 0x8c, 0x47, 0x93, 0xce, 0x2a, 0xaf, 0x35, 0xf4, 0x74, 0x87, 0x50, 0x2c, 0x39, 0x68, 0xbb, 0x47, 0x1a, 0x02, 0xa3, 0x93,
  0x64, 0x2e, 0x8c, 0xad, 0xb1, 0xc4, 0x61, 0x04, 0x5f, 0xbd, 0x59, 0x21, 0x1c, 0xe7, 0x0e, 0x29, 0x26, 0x97, 0x70, 0xa9, 0xcd, 0x18, 0xa3, 0x7b, 0x74, 0x70,
  0x96, 0xde, 0xa6, 0x72, 0xdd, 0x13, 0x93, 0xaa, 0x90, 0x6c, 0xa7, 0xb5, 0x76, 0x2f, 0xa8, 0x7a, 0xc8, 0x81, 0x06, 0xbb, 0x85, 0x75, 0x11, 0x0c, 0xd2, 0xd1,
  0xc9, 0xf8, 0x81, 0x70, 0xee, 0xc8, 0x71, 0x53, 0x3d, 0xaf, 0x76, 0xcb, 0x0d, 0xc1, 0x56, 0x28, 0xe8, 0x3c, 0x61, 0x64, 0x4b, 0xb8, 0xef, 0x3b, 0x41, 0x09,
  0x72, 0x07, 0x50, 0xad, 0xf3, 0x2e, 0x5c, 0x43, 0xff, 0xc3, 0xb3, 0x32, 0x7a, 0x3e, 0x9c, 0xa3, 0xc2, 0xab, 0x10, 0x60, 0x99, 0xfb, 0x08, 0x8a, 0x90, 0x57,
  0x8a, 0x7f, 0x61, 0x90, 0x21, 0x88, 0x55, 0xe8, 0xfc, 0x4b, 0x0d, 0x4a, 0x7a, 0x48, 0xc9, 0xb0, 0xc7, 0xa6, 0xd0, 0x04, 0x7e, 0x05,
];
// パスワード文字列
const pass_str = "&67NPR89F0+#STXY45MCHJ-K12=%3Q@W";

/**
 * Class: WonderMail
 * 不思議なメールクラス
 */
class WonderMail {
  Sky = true;
  Checksum1 = 0; // パスに含まれるCRC
  Checksum2 = 0; // 依頼内容から生成したCRC
  Status = 4; // 依頼状態値 (4=保留 ※4で固定)
  MissionType = 0;
  MissionFlag = 0;
  RewardType = 0;
  RewardValue = 0;
  Client = 0;
  Target1 = 0;
  Target2 = 0;
  TargetItem = 0;
  Dungeon = 0;
  Floor = 0;
  Fixed = 0;
  RestType = 0;
  RestValue = 0;
  Seed = 0;
  NullByte = 0;
  idxList = [];
  swapList = [];
  convList = [];
  decList = [];
  Password = "";

  // 展開
  Decode(sky, resion, pass = "") {
    if (pass.length > 0) {
      this.Password = pass;
    }
    let swap = GetSwapTable(sky, resion);

    // Index変換
    let idxList = new Array(this.Password.length);
    for (let i = 0; i < this.Password.length; i++) {
      idxList[i] = pass_str.indexOf(this.Password[i]);
    }
    // Swap変換
    let swapList = new Array(this.Password.length);
    for (let i = 0; i < this.Password.length; i++) {
      swapList[i] = idxList[swap[i]];
    }
    // Bit変換
    let bit = 0;
    let val = 0;
    let convList = [];
    swapList.forEach(function (r) {
      val |= r << bit;
      bit += 5;
      if (bit >= 8) {
        convList.push(val & 0xff);
        val >>= 8;
        bit -= 8;
      }
    });
    // Decode
    let first = convList[0];
    let mov = first % 2 == 0 ? -1 : 1;
    let pos = first;
    let rcn = (first >> 4) + (first & 0xf) + 8;
    let decList = [];
    convList.forEach(function (r, i) {
      let dec = r;
      if ((sky && i >= 4) || (!sky && i >= 1)) {
        dec += 0xff00 - encryption[pos];
        dec &= 0xff;
        pos += mov;
        pos &= 0xff;
        rcn--;
        if (rcn == 0) pos = first;
      }
      decList.push(dec);
    });
    this.idxList = idxList;
    this.swapList = swapList;
    this.convList = convList;
    this.decList = decList;

    let decode = this.decList;
    this.Sky = sky;
    if (this.Sky) {
      this.Checksum1 = decode[0] | (decode[1] << 8) | (decode[2] << 16) | (decode[3] << 24);
      this.Status = decode[4] & 0xf;
      this.MissionType = decode[4] >> 4;
      this.MissionFlag = decode[5] & 0xf;
      this.Client = (decode[5] >> 4) | ((decode[6] << 4) & 0x7ff);
      this.Target1 = (decode[6] >> 7) | (decode[7] << 1) | ((decode[8] << 9) & 0x7ff);
      this.Target2 = (decode[8] >> 2) | ((decode[9] << 6) & 0x7ff);
      this.TargetItem = (decode[9] >> 5) | ((decode[10] << 3) & 0x3ff);
      this.RewardType = (decode[10] >> 7) | ((decode[11] << 1) & 0x0f);
      this.RewardValue = (decode[11] >> 3) | ((decode[12] << 5) & 0x7ff);
      this.RestType = (decode[12] >> 6) & 0x01;
      this.RestValue = (decode[12] >> 7) | (decode[13] << 1) | ((decode[14] << 9) & 0x7ff);
      this.Seed = (decode[14] >> 2) | (decode[15] << 6) | (decode[16] << 14) | ((decode[17] << 22) & 0xffffff);
      this.Dungeon = (decode[17] >> 2) | ((decode[18] << 6) & 0xff);
      this.Floor = (decode[18] >> 2) | ((decode[19] << 6) & 0xff);
      this.Fixed = (decode[19] >> 2) | ((decode[20] << 6) & 0xff);
      this.NullByte = decode[20] >> 2;
      // CRC再計算
      if (this.Checksum1 < 0) this.Checksum1 += 0x100000000;
      this.Checksum2 = this.CalcCRC32(decode);
    } else {
      this.Checksum1 = decode[0];
      this.Status = decode[1] & 0xf;
      this.MissionType = decode[1] >> 4;
      this.MissionFlag = decode[2] & 0xf;
      this.Client = ((decode[2] >> 4) | (decode[3] << 4)) & 0x7ff;
      this.Target1 = ((decode[3] >> 7) | (decode[4] << 1) | (decode[5] << 9)) & 0x7ff;
      this.TargetItem = ((decode[5] >> 2) | (decode[6] << 6)) & 0x3ff;
      this.RewardType = decode[6] >> 4;
      this.RewardValue = (decode[7] | (decode[8] << 8)) & 0x7ff;
      this.RestType = (decode[8] >> 3) & 0x01;
      this.RestValue = ((decode[8] >> 4) | (decode[9] << 4)) & 0x7ff;
      this.Seed = ((decode[9] >> 7) | (decode[10] << 1) | (decode[11] << 9) | (decode[12] << 17)) & 0xffffff;
      this.Dungeon = ((decode[12] >> 7) | (decode[13] << 1)) & 0xff;
      this.Floor = ((decode[13] >> 7) | (decode[14] << 1)) & 0xff;
      // ハッシュ再計算
      let hash = 0;
      for (let i = 1; i < decode.length; i++) {
        hash += decode[i] + i;
        hash &= 0xff;
      }
      this.Checksum2 = hash;
    }
  }
  Encode(sky = true, resion = "jp") {
    let swap = GetSwapTable(sky, resion);
    this.Sky = sky;
    let decode;
    if (this.Sky) {
      decode = new Array(22);
      decode[4] = parseInt(this.MissionType << 4) | parseInt(this.Status);
      decode[5] = parseInt(this.Client << 4) | parseInt(this.MissionFlag);
      decode[6] = parseInt(this.Target1 << 7) | parseInt(this.Client >> 4);
      decode[7] = parseInt(this.Target1 >> 1);
      decode[8] = parseInt(this.Target2 << 2) | parseInt(this.Target1 >> 9);
      decode[9] = parseInt(this.TargetItem << 5) | parseInt(this.Target2 >> 6);
      decode[10] = parseInt(this.RewardType << 7) | parseInt(this.TargetItem >> 3);
      decode[11] = parseInt(this.RewardValue << 3) | parseInt(this.RewardType >> 1);
      decode[12] = parseInt(this.RestValue << 7) | parseInt(this.RestType << 6) | parseInt(this.RewardValue >> 5);
      decode[13] = parseInt(this.RestValue >> 1);
      decode[14] = parseInt(this.Seed << 2) | parseInt(this.RestValue >> 9);
      decode[15] = parseInt(this.Seed >> 6);
      decode[16] = parseInt(this.Seed >> 14);
      decode[17] = parseInt(this.Dungeon << 2) | parseInt(this.Seed >> 22);
      decode[18] = parseInt(this.Floor << 2) | parseInt(this.Dungeon >> 6);
      decode[19] = parseInt(this.Fixed << 2) | parseInt(this.Floor >> 6);
      decode[20] = parseInt(this.Fixed >> 6);
      decode[21] = 0;
      // CRC化→格納
      let crc = this.GetCRC32Table();
      let hash = 0xffffffff;
      for (let i = 4; i < decode.length - 1; i++) {
        let e = crc[(hash ^ decode[i]) & 0xff];
        hash = (hash >>> 8) ^ e;
      }
      hash = hash ^ 0xffffffff;
      decode[0] = hash;
      decode[1] = hash >> 8;
      decode[2] = hash >> 16;
      decode[3] = hash >> 24;
    } else {
      decode = new Array(16);
      decode[1] = parseInt(this.MissionType << 4) | parseInt(this.Status);
      decode[2] = parseInt(this.Client << 4) | parseInt(this.MissionFlag);
      decode[3] = parseInt(this.Target1 << 7) | parseInt(this.Client >> 4);
      decode[4] = parseInt(this.Target1 >> 1);
      decode[5] = parseInt(this.TargetItem << 2) | (this.Target1 >> 9);
      decode[6] = parseInt(this.RewardType << 4) | (this.TargetItem >> 6);
      decode[7] = parseInt(this.RewardValue);
      decode[8] = parseInt(this.RestValue << 4) | parseInt(this.RestType << 3) | parseInt(this.RewardValue >> 8);
      decode[9] = parseInt(this.Seed << 7) | parseInt(this.RestValue >> 4);
      decode[10] = parseInt(this.Seed >> 1);
      decode[11] = parseInt(this.Seed >> 9);
      decode[12] = parseInt(this.Dungeon << 7) | parseInt(this.Seed >> 17);
      decode[13] = parseInt(this.Floor << 7) | parseInt(this.Dungeon >> 1);
      decode[14] = parseInt(this.Floor >> 1);
      // ハッシュ化
      let hash = 0;
      for (let i = 1; i < decode.length - 1; i++) {
        hash += decode[i] + i;
        hash &= 0xff;
      }
      decode[0] = hash;
    }

    // 8bitにトリミング
    for (let i = 0; i < decode.length; i++) decode[i] &= 0xff;
    this.decList = decode.concat();

    // decode => bit
    let t = decode[0];
    let r = decode[0];
    let num = (t & 0x01) == 1 ? 1 : -1;
    let rByte = (t >> 4) + 8 + (t & 0x0f);
    if (rByte > 16) rByte = -1;
    let count = rByte;
    for (let i = this.Sky ? 4 : 1; i < decode.length - 1; i++) {
      decode[i] += encryption[t];
      t += num;
      decode[i] &= 0xff;
      t &= 0xff;
      count--;
      if (count == 0) {
        t = decode[0];
        // t = r;
        // count = rByte;
      }
    }
    this.convList = decode.concat();

    // bit => swap
    let sw = new Array(swap.length);
    let bits = 0;
    let aidx = 0;
    for (let i = 0; i < sw.length; i++) {
      sw[i] = decode[aidx] >> bits;
      if (bits > 2) sw[i] |= decode[aidx + 1] << (8 - bits);
      bits += 5;
      if (bits > 7) {
        aidx++;
        bits %= 8;
      }
    }
    for (let i = 0; i < sw.length; i++) sw[i] &= 0x1f;
    this.swapList = sw.concat();

    // swap => idx
    let idx = new Array(swap.length);
    for (let i = 0; i < swap.length; i++) idx[swap[i]] = sw[i] & (pass_str.length - 1);
    this.idxList = idx.concat();

    // パスワード化
    let pass = "";
    for (let i = 0; i < swap.length; i++) pass += pass_str.charAt(idx[i]);

    this.Password = pass;
  }

  /**
   * CRC32ハッシュ化
   * @param {*} arr 対象
   * @returns CRC32ハッシュ
   */
  CalcCRC32(arr) {
    let crc = this.GetCRC32Table();
    let pos = 0xffffffff;
    for (let i = 4; i < arr.length; i++) {
      let e = crc[(pos ^ arr[i]) & 0xff];
      pos = (pos >>> 8) ^ e;
    }
    pos = pos ^ 0xffffffff;
    if (pos < 0) pos += 0x100000000;
    return pos;
  }

  /**
   * CRC32テーブル作成
   */
  GetCRC32Table() {
    let res = new Array(256);
    for (let i = 0; i < res.length; i++) {
      let crcVal = i;
      for (let j = 0; j < 8; j++) {
        if ((crcVal & 1) != 0) crcVal = 0xedb88320 ^ (crcVal >>> 1);
        else crcVal = crcVal >>> 1;
      }
      res[i] = crcVal;
    }
    return res;
  }
}

function GetSwapTable(sky = true, resion = "JP") {
  let res = [];
  if (sky) {
    switch (resion.toUpperCase()) {
      case "JP":
        res = swap_table.sky.jp;
        break;
      case "NA":
        res = swap_table.sky.na;
        break;
      case "EU":
        res = swap_table.sky.eu;
        break;
    }
  } else res = swap_table.old;
  return res;
}
