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

// 文字データ
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
// 構造体は0x205BDB0の関数内で構成？
class Rescue {
  Checksum1 = 0; // チェックサム1
  Checksum2 = 0; // チェックサム2 (確認用)
  RescueType = 0; // 救助依頼タイプ (1=たすけて, 4=ふっかつ, 5=おれい)
  Dungeon = 0; // ダンジョン
  Floor = 0; // 救助フロア

  // [たすけて] ダンジョンSeed (～0xFFFFFF)
  DungeonSeed = 0;

  // [たすけて] 救助待ちMACアドレス末尾8桁
  // 救助待ち状態に移行した時点で使用しているDSのMACアドレスから参照される
  // 多分Wi-Fi救助の名残？
  SOSTeamId = 0;

  // [たすけて] キー値
  // 倒れて救助待ち状態になる度に生成
  // この値がたすけてとふっかつ間で一致している必要がある
  // おそらく単純な32bitRNG
  SOSCheckKey = 0;

  // リージョン (0=日本(0000), 8=米国(1000) bitで管理)
  // チーム名の制御に使用される
  // ゲームのリージョンと一致している時に対応した文字で表示
  // 異なる場合は固定チーム名で表示 (日本:ポケモンズ)
  Resion = 0;

  // チーム名称 (最大10文字)
  // 日本版の場合5文字まで、超える場合は弾かれる
  TeamName = "";

  // 贈る道具の個数
  // ふっかつ・おれいのメールに使用される
  // スタック不可の道具の場合は0で固定
  // スタック可能の道具で0、もしくは100以上の時は弾かれる
  GiftItemCount = 0;

  // 贈る道具ID
  // ふっかつ・おれいのメールに使用される
  // 0x400以上になる場合GiftItemFlagの値を2にし、この値は0x400で割った余りの値になる
  // ※生成処理で制御してるのでそのままセットしてOK
  GiftItemId = 0;

  // [ふっかつ/おれい] 救助側MACアドレス末尾8桁
  // DSのMACアドレス末尾32bitがそのまま入る
  // ※おれいのメールはこの値がふっかつ側と一致している必要あり
  AOKTeamId = 0;

  // [ふっかつ/おれい] キー値
  // セーブファイル0x28-0x2Bの値を使用 (＝セーブデータ依存の値)
  // この値は単純な32bitRNGであり、性格診断が一通り終わって
  // 主人公が決まるタイミングでセットされる (0x22AC67C)
  // 不整合チェックをしている可能性あり？
  // ※おれいのメールはこの値がふっかつ側と一致している必要あり
  AOKCheckKey = 0;

  // バージョン値
  // 時=0, 闇=1, 空=2or3
  // 0x205BE5C で[0～1のランダムな値 OR 2]されているので2か3はランダム？
  Version = 0;

  // [ふっかつ/おれい] 贈る道具フラグ
  // 道具IDが0x400を超える場合、道具IDから0x400を引いてこの値を0x2にする
  GiftItemFlag = 0;

  idxList = [];
  swapList = [];
  convList = [];
  decList = [];
  Password = "";

  // 展開
  Decode(pass = "") {
    if (pass.length > 0) this.Password = pass;

    // Password => Idx
    const idxList = decPasswordToIdx(this.Password);
    // Idx => Swap
    const swapList = decIdxToSwap(idxList);
    // Swap => Bit
    const convList = decSwapToBit(swapList);
    // Bit => Decode
    const decList = decBitToDec(convList);

    this.idxList = idxList;
    this.swapList = swapList;
    this.convList = convList;
    this.decList = decList;

    // チェックサム (8bit)
    this.Checksum1 = BytesToNum(decList, 0, 8);
    // 救助タイプ (4bit)
    this.RescueType = BytesToNum(decList, 8, 4);
    // ダンジョン (7bit)
    this.Dungeon = BytesToNum(decList, 12, 7);
    // フロア (7bit)
    this.Floor = BytesToNum(decList, 19, 7);

    // 1 => たすけてメール
    // ふっかつ・おれいのメールと連携させるには
    // 互いのメールでSOSTeamIdとSOSCheckKeyが一致している必要あり
    if (this.RescueType == 1) {
      console.log("たすけてメール");
      // ダンジョンSeed (24bit)
      this.DungeonSeed = BytesToNum(decList, 26, 24);
      // 救助待ちMACアドレス (32bit)
      this.SOSTeamId = BytesToNum(decList, 50, 32);
      // 救助待ちキー値 (32bit)
      this.SOSCheckKey = BytesToNum(decList, 82, 32);
      // リージョン (4bit)
      this.Resion = BytesToNum(decList, 114, 4);
      // チーム名 (80bit)
      this.TeamName = GetCharString(BytesToBits(decList, 118, 80));
      // 救助MACアドレス (32bit)
      this.AOKTeamId = BytesToNum(decList, 198, 32);
      // ふっかつメールキー値 (32bit)
      this.AOKCheckKey = BytesToNum(decList, 230, 32);
      // バージョン (2bit)
      this.Version = BytesToNum(decList, 262, 2);
    }
    // 4, 5 => ふっかつメール, おれいのメール
    else if (this.RescueType > 1) {
      if (this.RescueType == 4) console.log("ふっかつメール");
      else if (this.RescueType == 5) console.log("おれいのメール");

      // 救助待ちMACアドレス (32bit)
      this.SOSTeamId = BytesToNum(decList, 26, 32);
      // 救助待ちキー値 (32bit)
      this.SOSCheckKey = BytesToNum(decList, 58, 32);
      // リージョン (4bit)
      this.Resion = BytesToNum(decList, 90, 4);
      // チーム名 (80bit)
      this.TeamName = GetCharString(BytesToBits(decList, 94, 80));
      // 贈る道具個数 (10bit)
      this.GiftItemCount = BytesToNum(decList, 174, 10);
      // 贈る道具ID (10bit)
      this.GiftItemId = BytesToNum(decList, 184, 10);
      // 救助MACアドレス (32bit)
      this.AOKTeamId = BytesToNum(decList, 194, 32);
      // 救助キー値 (32bit)
      this.AOKCheckKey = BytesToNum(decList, 226, 32);
      // バージョン (2bit)
      this.Version = BytesToNum(decList, 258, 2);
      // 道具フラグ (4bit)
      this.GiftItemFlag = BytesToNum(decList, 260, 4);
    }

    // チェックサム再計算
    const checksum = generateChecksum(decList);
    this.Checksum2 = checksum;

    console.log("展開: " + this.Password);
  }
  Encode(status = 1) {
    const decList = new Array(33);
    const teamNameArr = ConvertCharToArr(this.TeamName);

    if (status == 1) {
      // たすけてメール
      decList[1] = parseInt(this.Dungeon << 4) | parseInt(status & 0xf);
      decList[2] = parseInt(this.Floor << 3) | parseInt(this.Dungeon >> 4);
      decList[3] = parseInt(this.DungeonSeed << 2) | parseInt(this.Floor >> 5);
      decList[4] = parseInt(this.DungeonSeed >>> 6);
      decList[5] = parseInt(this.DungeonSeed >>> 14);
      decList[6] = parseInt(this.SOSTeamId << 2) | parseInt(this.DungeonSeed >>> 22);
      decList[7] = parseInt(this.SOSTeamId >>> 6);
      decList[8] = parseInt(this.SOSTeamId >>> 14);
      decList[9] = parseInt(this.SOSTeamId >>> 22);
      decList[10] = parseInt(this.SOSCheckKey << 2) | parseInt(this.SOSTeamId >>> 30);
      decList[11] = parseInt(this.SOSCheckKey >>> 6);
      decList[12] = parseInt(this.SOSCheckKey >>> 14);
      decList[13] = parseInt(this.SOSCheckKey >>> 22);
      decList[14] = parseInt(teamNameArr[0] << 6) | parseInt(this.Resion << 2) | parseInt(this.SOSCheckKey >>> 30);
      decList[15] = parseInt(teamNameArr[1] << 6) | parseInt(teamNameArr[0] >> 2);
      decList[16] = parseInt(teamNameArr[2] << 6) | parseInt(teamNameArr[1] >> 2);
      decList[17] = parseInt(teamNameArr[3] << 6) | parseInt(teamNameArr[2] >> 2);
      decList[18] = parseInt(teamNameArr[4] << 6) | parseInt(teamNameArr[3] >> 2);
      decList[19] = parseInt(teamNameArr[5] << 6) | parseInt(teamNameArr[4] >> 2);
      decList[20] = parseInt(teamNameArr[6] << 6) | parseInt(teamNameArr[5] >> 2);
      decList[21] = parseInt(teamNameArr[7] << 6) | parseInt(teamNameArr[6] >> 2);
      decList[22] = parseInt(teamNameArr[8] << 6) | parseInt(teamNameArr[7] >> 2);
      decList[23] = parseInt(teamNameArr[9] << 6) | parseInt(teamNameArr[8] >> 2);
      decList[24] = parseInt(this.AOKTeamId << 6) | parseInt(teamNameArr[9] >> 2);
      decList[25] = parseInt(this.AOKTeamId >>> 2);
      decList[26] = parseInt(this.AOKTeamId >>> 10);
      decList[27] = parseInt(this.AOKTeamId >>> 18);
      decList[28] = parseInt(this.AOKCheckKey << 6) | parseInt(this.AOKTeamId >>> 26);
      decList[29] = parseInt(this.AOKCheckKey >>> 2);
      decList[30] = parseInt(this.AOKCheckKey >>> 10);
      decList[31] = parseInt(this.AOKCheckKey >>> 18);
      decList[32] = parseInt(this.Version << 6) | parseInt(this.AOKCheckKey >>> 26);
    } else {
      // ふっかつ or おれいのメール
      // 贈る道具IDが0x400を超えている場合、フラグを2にして道具ID % 0x400
      this.GiftItemFlag = this.GiftItemId >= 0x400 ? 2 : 0;
      this.GiftItemId = this.GiftItemId % 0x400;

      decList[1] = parseInt(this.Dungeon << 4) | parseInt(status & 0xf);
      decList[2] = parseInt(this.Floor << 3) | parseInt(this.Dungeon >> 4);
      decList[3] = parseInt(this.SOSTeamId << 2) | parseInt(this.Floor >> 5);
      decList[4] = parseInt(this.SOSTeamId >>> 6);
      decList[5] = parseInt(this.SOSTeamId >>> 14);
      decList[6] = parseInt(this.SOSTeamId >>> 22);
      decList[7] = parseInt(this.SOSCheckKey << 2) | parseInt(this.SOSTeamId >>> 30);
      decList[8] = parseInt(this.SOSCheckKey >>> 6);
      decList[9] = parseInt(this.SOSCheckKey >>> 14);
      decList[10] = parseInt(this.SOSCheckKey >>> 22);
      decList[11] = parseInt(teamNameArr[0] << 6) | parseInt(this.Resion << 2) | parseInt(this.SOSCheckKey >>> 30);
      decList[12] = parseInt(teamNameArr[1] << 6) | parseInt(teamNameArr[0] >> 2);
      decList[13] = parseInt(teamNameArr[2] << 6) | parseInt(teamNameArr[1] >> 2);
      decList[14] = parseInt(teamNameArr[3] << 6) | parseInt(teamNameArr[2] >> 2);
      decList[15] = parseInt(teamNameArr[4] << 6) | parseInt(teamNameArr[3] >> 2);
      decList[16] = parseInt(teamNameArr[5] << 6) | parseInt(teamNameArr[4] >> 2);
      decList[17] = parseInt(teamNameArr[6] << 6) | parseInt(teamNameArr[5] >> 2);
      decList[18] = parseInt(teamNameArr[7] << 6) | parseInt(teamNameArr[6] >> 2);
      decList[19] = parseInt(teamNameArr[8] << 6) | parseInt(teamNameArr[7] >> 2);
      decList[20] = parseInt(teamNameArr[9] << 6) | parseInt(teamNameArr[8] >> 2);
      decList[21] = parseInt(this.GiftItemCount << 6) | parseInt(teamNameArr[9] >> 2);
      decList[22] = parseInt(this.GiftItemCount >> 2);
      decList[23] = parseInt(this.GiftItemId);
      decList[24] = parseInt(this.AOKTeamId << 2) | parseInt(this.GiftItemId >> 8);
      decList[25] = parseInt(this.AOKTeamId >>> 6);
      decList[26] = parseInt(this.AOKTeamId >>> 14);
      decList[27] = parseInt(this.AOKTeamId >>> 22);
      decList[28] = parseInt(this.AOKCheckKey << 2) | parseInt(this.AOKTeamId >>> 30);
      decList[29] = parseInt(this.AOKCheckKey >>> 6);
      decList[30] = parseInt(this.AOKCheckKey >>> 14);
      decList[31] = parseInt(this.AOKCheckKey >>> 22);
      decList[32] = parseInt(this.GiftItemFlag << 4) | parseInt(this.Version << 2) | parseInt(this.AOKCheckKey >>> 30);
    }
    // チェックサム計算
    const checksum = generateChecksum(decList);
    decList[0] = checksum;
    this.Checksum1 = checksum;

    // 8bitにトリミング
    for (let i = 0; i < decList.length; i++) decList[i] &= 0xff;

    // Decode => Bit
    const convList = encDecToBit(decList);
    // Bit => Swap
    const swapList = encBitToSwap(convList);
    // Swap => Idx
    const idxList = encSwapToIdx(swapList);
    // Idx => Password
    const pass = encIdxToPassword(idxList);

    this.decList = decList.concat();
    this.convList = convList.concat();
    this.swapList = swapList.concat();
    this.idxList = idxList.concat();
    this.Password = pass;

    console.log("生成: " + this.Password);
    return this;
  }
  Clone() {
    const res = new Rescue();
    res.RescueType = this.RescueType;
    res.Dungeon = this.Dungeon;
    res.Floor = this.Floor;
    res.DungeonSeed = this.DungeonSeed;
    res.SOSTeamId = this.SOSTeamId;
    res.SOSCheckKey = this.SOSCheckKey;
    res.Resion = this.Resion;
    res.TeamName = this.TeamName;
    res.GiftItemCount = this.GiftItemCount;
    res.GiftItemId = this.GiftItemId;
    res.AOKTeamId = this.AOKTeamId;
    res.AOKCheckKey = this.AOKCheckKey;
    res.Version = this.Version;
    // over200は不要
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

/**
 * チェックサム計算
 * @param {number[]} decList
 * @returns {number} チェックサム
 */
function generateChecksum(decList) {
  let res = 0;
  for (let i = 1; i < decList.length; i++) {
    res += decList[i] + i;
  }
  res &= 0xff;
  return res;
}

/**
 * [Decode] パスワード -> Idx 変換
 * @param {string} passStr
 * @returns {number[]}
 */
function decPasswordToIdx(passStr) {
  const res = new Array(passStr.length);
  for (let i = 0; i < passStr.length; i++) {
    res[i] = pass_str.indexOf(passStr[i]);
  }
  return res;
}

/**
 * [Decode] Idx -> Swap 変換
 * @param {number[]} idxList
 * @returns {number[]}
 */
function decIdxToSwap(idxList) {
  const res = new Array(idxList.length);
  for (let i = 0; i < idxList.length; i++) {
    res[i] = idxList[swap_table[i]];
  }
  return res;
}

/**
 * [Decode] Swap -> Bit 変換
 * @param {number[]} swapList
 * @returns {number[]}
 */
function decSwapToBit(swapList) {
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
 * @param {number[]} convList
 * @returns {number[]}
 */
function decBitToDec(convList) {
  const first = convList[0];

  // 最初の値の上位4ビットと下位4ビットの和に8を足す
  const count = (first >> 4) + (first & 0xf) + 8;
  const mov = first & 0x01 ? 1 : -1;

  const res = [];
  res.push(convList[0]); // チェックサムはそのまま入れる

  let pos = 0;
  for (let i = 1; i < convList.length; i++) {
    const j = (pos * mov + first) & 0xff;
    const dec = (convList[i] - encryption[j]) & 0xff;
    res.push(dec);
    pos = (pos + 1) % count;
  }
  return res;
}

/**
 * [Encode] Dec -> Bit 変換
 * @param {number[]} decList
 * @returns {number[]}
 */
function encDecToBit(decList) {
  let t = decList[0];
  const mov = (t & 0x01) == 1 ? 1 : -1;
  let count = (t >> 4) + (t & 0xf) + 8;
  const res = [];
  res.push(decList[0]);
  for (let i = 1; i < decList.length; i++) {
    const val = (decList[i] + encryption[t]) & 0xff;
    res.push(val);
    t = (t + mov) & 0xff;
    count--;
    if (count == 0) {
      t = decList[0];
    }
  }
  return res;
}

/**
 * [Encode] Bit -> Swap 変換
 * @param {number[]} convList
 * @returns {number[]}
 */
function encBitToSwap(convList) {
  const res = new Array(swap_table.length);
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
  for (let i = 0; i < res.length; i++) res[i] &= pass_str.length - 1;
  return res;
}

/**
 * [Encode] Swap -> Idx 変換
 * @param {number[]} swapList
 * @returns {number[]}
 */
function encSwapToIdx(swapList) {
  const res = new Array(swap_table.length);
  for (let i = 0; i < swap_table.length; i++) {
    res[swap_table[i]] = swapList[i] & (pass_str.length - 1);
  }
  return res;
}

/**
 * [Encode] Idx -> パスワード 変換
 * @param {number[]} idxList
 * @returns {string}
 */
function encIdxToPassword(idxList) {
  let res = "";
  for (let i = 0; i < swap_table.length; i++) {
    res += pass_str.charAt(idxList[i]);
  }
  return res;
}
