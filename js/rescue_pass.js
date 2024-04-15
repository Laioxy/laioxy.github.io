// swap
const swap_table = [
  // 0x20A3500
  0x0d, 0x07, 0x19, 0x0f, 0x04, 0x1d, 0x2a, 0x31, 0x08, 0x13, 0x2d, 0x18, 0x0e, 0x1a, 0x1b, 0x29, 0x01, 0x20, 0x21, 0x22, 0x11, 0x33, 0x26, 0x00, 0x35, 0x0a,
  0x2b, 0x1f, 0x12, 0x23, 0x2c, 0x17, 0x27, 0x10, 0x1c, 0x30, 0x0b, 0x02, 0x24, 0x09, 0x32, 0x05, 0x28, 0x34, 0x2e, 0x03, 0x1e, 0x0c, 0x25, 0x14, 0x2f, 0x16,
  0x06, 0x15,
];

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

// 文字列
// prettier-ignore
const char_str = [
  '\0', '－', '　', '！', '＃', '＄', '％', '＆', '（', '）', '＊', '．', '／', '：', '；', '？', // 00-0F
  '＠', '＿', '「', '」', '『', '』', '＋', '＜', '＝', '＞', '・', '‥', '♀', '♂', '０', '１', // 10-1F
  '２', '３', '４', '５', '６', '７', '８', '９', 'ａ', 'Ａ', 'ｂ', 'Ｂ', 'ｃ', 'Ｃ', 'ｄ', 'Ｄ', // 20-2F
  'ｅ', 'Ｅ', 'ｆ', 'Ｆ', 'ｇ', 'Ｇ', 'ｈ', 'Ｈ', 'ｉ', 'Ｉ', 'ｊ', 'Ｊ', 'ｋ', 'Ｋ', 'ｌ', 'Ｌ', // 30-3F
  'ｍ', 'Ｍ', 'ｎ', 'Ｎ', 'ｏ', 'Ｏ', 'ｐ', 'Ｐ', 'ｑ', 'Ｑ', 'ｒ', 'Ｒ', 'ｓ', 'Ｓ', 'ｔ', 'Ｔ', // 40-4F
  'ｕ', 'Ｕ', 'ｖ', 'Ｖ', 'ｗ', 'Ｗ', 'ｘ', 'Ｘ', 'ｙ', 'Ｙ', 'ｚ', 'Ｚ', 'ぁ', 'ァ', 'あ', 'ア', // 50-5F
  'ぃ', 'ィ', 'い', 'イ', 'ぅ', 'ゥ', 'う', 'ウ', 'ヴ', 'ぇ', 'ェ', 'え', 'エ', 'ぉ', 'ォ', 'お', // 60-6F
  'オ', 'ヵ', 'か', 'カ', 'が', 'ガ', 'き', 'キ', 'ぎ', 'ギ', 'く', 'ク', 'ぐ', 'グ', 'ヶ', 'け', // 70-7F
  'ケ', 'げ', 'ゲ', 'こ', 'コ', 'ご', 'ゴ', 'さ', 'サ', 'ざ', 'ザ', 'し', 'シ', 'じ', 'ジ', 'す', // 80-8F
  'ス', 'ず', 'ズ', 'せ', 'セ', 'ぜ', 'ゼ', 'そ', 'ソ', 'ぞ', 'ゾ', 'た', 'タ', 'だ', 'ダ', 'ち', // 90-9F
  'チ', 'ぢ', 'ヂ', 'っ', 'ッ', 'つ', 'ツ', 'づ', 'ヅ', 'て', 'テ', 'で', 'デ', 'と', 'ト', 'ど', // A0-AF
  'ド', 'な', 'ナ', 'に', 'ニ', 'ぬ', 'ヌ', 'ね', 'ネ', 'の', 'ノ', 'は', 'ハ', 'ば', 'バ', 'ぱ', // B0-BF
  'パ', 'ひ', 'ヒ', 'び', 'ビ', 'ぴ', 'ピ', 'ふ', 'フ', 'ぶ', 'ブ', 'ぷ', 'プ', 'へ', 'ヘ', 'べ', // C0-CF
  'ベ', 'ぺ', 'ペ', 'ほ', 'ホ', 'ぼ', 'ボ', 'ぽ', 'ポ', 'ま', 'マ', 'み', 'ミ', 'む', 'ム', 'め', // D0-DF
  'メ', 'も', 'モ', 'ゃ', 'ャ', 'や', 'ヤ', 'ゅ', 'ュ', 'ゆ', 'ユ', 'ょ', 'ョ', 'よ', 'ヨ', 'ら', // E0-EF
  'ラ', 'り', 'リ', 'る', 'ル', 'れ', 'レ', 'ろ', 'ロ', 'わ', 'ワ', 'を', 'ヲ', 'ん', 'ン', 'ー'  // F0-FF
];

/**
 * Class: Rescue
 * 友達救助クラス
 */
class Rescue {
  Hash1 = 0;
  Hash2 = 0;
  RescueType = 0; // 救助依頼タイプ
  Dungeon = 0; // ダンジョン
  Floor = 0; // 救助フロア
  DungeonSeed = 0; // ダンジョンシード
  SOSTeamId = 0; // [たすけて] 救助待ちチームID
  SOSCheckSum = 0; // [たすけて] チェックサム
  Resion = 0; // リージョン？ (0=日本(0000), 8=米国(1000) bitで管理？)
  TeamName = ""; // チーム名称
  NotSOStmp1 = 0; // ? (個数？)
  NotSOStmp2 = 0; // お礼の道具？
  AOKTeamId = 0; // [ふっかつ] 救助したチームID
  AOKCheckSum = 0; // [ふっかつ] チェックサム
  Version = 0; // 時=0, 闇=1, 空=2,3

  idxList = [];
  swapList = [];
  convList = [];
  decList = [];
  Password = "";

  // 展開
  Decode(pass = "") {
    if (pass.length > 0) {
      this.Password = pass;
    }
    let swap = swap_table;

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
      if (i >= 1) {
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

    // ハッシュ (8bit)
    this.Hash1 = BytesToNum(decList, 0, 8);
    // 救助タイプ (4bit)
    this.RescueType = BytesToNum(decList, 8, 4);
    // ダンジョン (7bit)
    this.Dungeon = BytesToNum(decList, 12, 7);
    // フロア (7bit)
    this.Floor = BytesToNum(decList, 19, 7);

    // タイプ1 => たすけてメール
    // ふっかつメール・おれいのメールと連携させるには
    // チームIDとチェックサムが一致している必要がある
    if (this.RescueType == 1) {
      console.log("たすけてメール");
      // Seed1 (24bit)
      this.DungeonSeed = BytesToNum(decList, 26, 24);
      // 救助待ちチームID (32bit)
      this.SOSTeamId = BytesToNum(decList, 50, 32);
      // たすけてメールチェックサム (32bit)
      this.SOSCheckSum = BytesToNum(decList, 82, 32);
      // リージョン？ (4bit)
      this.Resion = BytesToNum(decList, 114, 4);
      // チーム名 (80bit)
      this.TeamName = GetCharString(BytesToBits(decList, 118, 80));
      // 救助側チームID (32bit)
      this.AOKTeamId = BytesToNum(decList, 198, 32);
      // ふっかつメールチェックサム (32bit)
      this.AOKCheckSum = BytesToNum(decList, 230, 32);
      // バージョン (2bit)
      this.Version = BytesToNum(decList, 262, 2);
    }
    // タイプ4 => ふっかつメール
    else if (this.RescueType > 1) {
      if (this.RescueType == 4) console.log("ふっかつメール");
      else if (this.RescueType == 5) console.log("おれいのメール");

      this.SOSTeamId = BytesToNum(decList, 26, 32);
      this.SOSCheckSum = BytesToNum(decList, 58, 32);
      this.Resion = BytesToNum(decList, 90, 4);
      this.TeamName = GetCharString(BytesToBits(decList, 94, 80));
      this.NotSOStmp1 = BytesToNum(decList, 174, 10);
      this.NotSOStmp2 = BytesToNum(decList, 184, 10);
      this.AOKTeamId = BytesToNum(decList, 194, 32);
      this.AOKCheckSum = BytesToNum(decList, 226, 32);
      this.Version = BytesToNum(decList, 258, 2);
    }

    // ハッシュ再計算
    let hash = 0;
    for (let i = 1; i < decList.length; i++) {
      hash += decList[i] + i;
      hash &= 0xff;
    }
    this.Hash2 = hash;

    console.log("展開: " + this.Password);
  }
  Encode(status = 1) {
    let swap = swap_table;
    let decode;
    let teamNameArr = ConvertCharToArr(this.TeamName);
    if (status == 1) {
      decode = new Array(33);
      decode[1] = parseInt(this.Dungeon << 4) | parseInt(status & 0xf);
      decode[2] = parseInt(this.Floor << 3) | parseInt(this.Dungeon >> 4);
      decode[3] = parseInt(this.DungeonSeed << 2) | parseInt(this.Floor >> 5);
      decode[4] = parseInt(this.DungeonSeed >>> 6);
      decode[5] = parseInt(this.DungeonSeed >>> 14);
      decode[6] = parseInt(this.SOSTeamId << 2) | parseInt(this.DungeonSeed >>> 22);
      decode[7] = parseInt(this.SOSTeamId >>> 6);
      decode[8] = parseInt(this.SOSTeamId >>> 14);
      decode[9] = parseInt(this.SOSTeamId >>> 22);
      decode[10] = parseInt(this.SOSCheckSum << 2) | parseInt(this.SOSTeamId >>> 30);
      decode[11] = parseInt(this.SOSCheckSum >>> 6);
      decode[12] = parseInt(this.SOSCheckSum >>> 14);
      decode[13] = parseInt(this.SOSCheckSum >>> 22);
      decode[14] = parseInt(teamNameArr[0] << 6) | parseInt(this.Resion << 2) | parseInt(this.SOSCheckSum >>> 30);
      decode[15] = parseInt(teamNameArr[1] << 6) | parseInt(teamNameArr[0] >> 2);
      decode[16] = parseInt(teamNameArr[2] << 6) | parseInt(teamNameArr[1] >> 2);
      decode[17] = parseInt(teamNameArr[3] << 6) | parseInt(teamNameArr[2] >> 2);
      decode[18] = parseInt(teamNameArr[4] << 6) | parseInt(teamNameArr[3] >> 2);
      decode[19] = parseInt(teamNameArr[5] << 6) | parseInt(teamNameArr[4] >> 2);
      decode[20] = parseInt(teamNameArr[6] << 6) | parseInt(teamNameArr[5] >> 2);
      decode[21] = parseInt(teamNameArr[7] << 6) | parseInt(teamNameArr[6] >> 2);
      decode[22] = parseInt(teamNameArr[8] << 6) | parseInt(teamNameArr[7] >> 2);
      decode[23] = parseInt(teamNameArr[9] << 6) | parseInt(teamNameArr[8] >> 2);
      decode[24] = parseInt(this.AOKTeamId << 6) | parseInt(teamNameArr[9] >> 2);
      decode[25] = parseInt(this.AOKTeamId >>> 2);
      decode[26] = parseInt(this.AOKTeamId >>> 10);
      decode[27] = parseInt(this.AOKTeamId >>> 18);
      decode[28] = parseInt(this.AOKCheckSum << 6) | parseInt(this.AOKTeamId >>> 26);
      decode[29] = parseInt(this.AOKCheckSum >>> 2);
      decode[30] = parseInt(this.AOKCheckSum >>> 10);
      decode[31] = parseInt(this.AOKCheckSum >>> 18);
      decode[32] = parseInt(this.Version << 6) | parseInt(this.AOKCheckSum >>> 26);
    } else {
      decode = new Array(33);
      decode[1] = parseInt(this.Dungeon << 4) | parseInt(status & 0xf);
      decode[2] = parseInt(this.Floor << 3) | parseInt(this.Dungeon >> 4);
      decode[3] = parseInt(this.SOSTeamId << 2) | parseInt(this.Floor >> 5);
      decode[4] = parseInt(this.SOSTeamId >>> 6);
      decode[5] = parseInt(this.SOSTeamId >>> 14);
      decode[6] = parseInt(this.SOSTeamId >>> 22);
      decode[7] = parseInt(this.SOSCheckSum << 2) | parseInt(this.SOSTeamId >>> 30);
      decode[8] = parseInt(this.SOSCheckSum >>> 6);
      decode[9] = parseInt(this.SOSCheckSum >>> 14);
      decode[10] = parseInt(this.SOSCheckSum >>> 22);
      decode[11] = parseInt(teamNameArr[0] << 6) | parseInt(this.Resion << 2) | parseInt(this.SOSCheckSum >>> 30);
      decode[12] = parseInt(teamNameArr[1] << 6) | parseInt(teamNameArr[0] >> 2);
      decode[13] = parseInt(teamNameArr[2] << 6) | parseInt(teamNameArr[1] >> 2);
      decode[14] = parseInt(teamNameArr[3] << 6) | parseInt(teamNameArr[2] >> 2);
      decode[15] = parseInt(teamNameArr[4] << 6) | parseInt(teamNameArr[3] >> 2);
      decode[16] = parseInt(teamNameArr[5] << 6) | parseInt(teamNameArr[4] >> 2);
      decode[17] = parseInt(teamNameArr[6] << 6) | parseInt(teamNameArr[5] >> 2);
      decode[18] = parseInt(teamNameArr[7] << 6) | parseInt(teamNameArr[6] >> 2);
      decode[19] = parseInt(teamNameArr[8] << 6) | parseInt(teamNameArr[7] >> 2);
      decode[20] = parseInt(teamNameArr[9] << 6) | parseInt(teamNameArr[8] >> 2);
      decode[21] = parseInt(this.NotSOStmp1 << 6) | parseInt(teamNameArr[9] >> 2);
      decode[22] = parseInt(this.NotSOStmp1 >> 2);
      decode[23] = parseInt(this.NotSOStmp2);
      decode[24] = parseInt(this.AOKTeamId << 2) | parseInt(this.NotSOStmp2 >> 8);
      decode[25] = parseInt(this.AOKTeamId >>> 6);
      decode[26] = parseInt(this.AOKTeamId >>> 14);
      decode[27] = parseInt(this.AOKTeamId >>> 22);
      decode[28] = parseInt(this.AOKCheckSum << 2) | parseInt(this.AOKTeamId >>> 30);
      decode[29] = parseInt(this.AOKCheckSum >>> 6);
      decode[30] = parseInt(this.AOKCheckSum >>> 14);
      decode[31] = parseInt(this.AOKCheckSum >>> 22);
      decode[32] = parseInt(this.Version << 2) | parseInt(this.AOKCheckSum >>> 30);
    }
    // ハッシュ化
    let hash = 0;
    for (let i = 1; i < decode.length; i++) {
      hash += decode[i] + i;
      hash &= 0xff;
    }
    decode[0] = hash;
    this.Hash1 = hash;

    // 8bitにトリミング
    for (let i = 0; i < decode.length; i++) decode[i] &= 0xff;
    this.decList = decode.concat();

    // decode => bit
    let t = decode[0];
    let r = decode[0];
    let num = (t & 0x01) == 1 ? 1 : -1;
    //let rByte = (t >> 4) + 8 + (t & 0x0f);
    //if (rByte > 16) rByte = -1;
    //let count = rByte;
    let count = t >> 4;
    count += t & 0xf;
    count += 0x08;
    for (let i = 1; i < decode.length; i++) {
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
    for (let i = 0; i < sw.length; i++) sw[i] &= pass_str.length - 1;
    this.swapList = sw.concat();

    // swap => idx
    let idx = new Array(swap.length);
    for (let i = 0; i < swap.length; i++) idx[swap[i]] = sw[i] & (pass_str.length - 1);
    this.idxList = idx.concat();

    // パスワード化
    let pass = "";
    for (let i = 0; i < swap.length; i++) pass += pass_str.charAt(idx[i]);
    this.Password = pass;
    console.log("生成: " + this.Password);
    return this;
  }
  Clone() {
    let res = new Rescue();
    res.RescueType = this.RescueType;
    res.Dungeon = this.Dungeon;
    res.Floor = this.Floor;
    res.DungeonSeed = this.DungeonSeed;
    res.SOSCheckSumBit = this.SOSCheckSumBit;
    res.SOSTeamId = this.SOSTeamId;
    res.SOSCheckSum = this.SOSCheckSum;
    res.Resion = this.Resion;
    res.TeamName = this.TeamName;
    res.NotSOStmp1 = this.NotSOStmp1;
    res.NotSOStmp2 = this.NotSOStmp2;
    res.AOKCheckSumBit = this.AOKCheckSumBit;
    res.AOKTeamId = this.AOKTeamId;
    res.AOKCheckSum = this.AOKCheckSum;
    res.Version = this.Version;
    return res;
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

/**
 * バイト配列をビットで取得して配列に変換
 * @param {*} arr バイト配列
 * @param {*} offset 開始ビット
 * @param {*} lengthBit 取得ビット数
 * @returns 変換後の配列
 */
function BytesToBits(arr, offset, lengthBit) {
  let res = [];
  let startIdx = Math.floor(offset / 8); // 開始位置
  let offsetBit = offset % 8; // 開始ビット
  let bitProg = 0; // 進行ビット数

  // 8ビットずつ取得して配列に格納
  for (let i = startIdx; i < arr.length + 1; i++) {
    let val = 0;
    let bitCount = lengthBit - bitProg;
    if (bitCount > 8) bitCount = 8;
    let andBit = ~(0xff << bitCount) & 0xff; // 取得ビット

    val = ((arr[i] >> offsetBit) | (arr[i + 1] << (8 - offsetBit))) & andBit;

    bitProg += 8; // 8ビット進行
    res.push(val);

    // 取得したビットが8ビット未満ならループから抜ける
    if (andBit != 0xff) break;
  }
  return res;
}

/**
 * バイト配列をビットで取得して数値に変換
 * @param {*} arr
 * @param {*} offset
 * @param {*} lengthBit
 * @returns
 */
function BytesToNum(arr, offset, lengthBit) {
  let res = 0;
  let bits = BytesToBits(arr, offset, lengthBit);
  for (let i = 0; i < bits.length; i++) {
    res |= bits[i] << (8 * i);
  }
  return res;
}

function GetCharString(arr) {
  let res = "";
  for (let i = 0; i < arr.length && arr[i] != 0; i++) {
    res += char_str[arr[i]];
  }
  return res;
}

function ConvertCharToArr(str) {
  let res = new Array(10);
  for (let i = 0; i < str.length; i++) {
    let indexof = char_str.indexOf(str[i]);
    if (indexof < 0) indexof = 0xf;
    res[i] = indexof;
  }
  return res;
}
