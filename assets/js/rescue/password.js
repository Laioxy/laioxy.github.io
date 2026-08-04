import { BitConvert } from '../utils/bitConverter';
import { PasswordConverter } from '../utils/passwordConverter';

/** 救助用テーブル */
const swapTable = [
  // 0x20A3500
  0x0d, 0x07, 0x19, 0x0f, 0x04, 0x1d, 0x2a, 0x31, 0x08, 0x13, 0x2d, 0x18, 0x0e, 0x1a, 0x1b, 0x29, 0x01, 0x20, 0x21,
  0x22, 0x11, 0x33, 0x26, 0x00, 0x35, 0x0a, 0x2b, 0x1f, 0x12, 0x23, 0x2c, 0x17, 0x27, 0x10, 0x1c, 0x30, 0x0b, 0x02,
  0x24, 0x09, 0x32, 0x05, 0x28, 0x34, 0x2e, 0x03, 0x1e, 0x0c, 0x25, 0x14, 0x2f, 0x16, 0x06, 0x15,
];

// 文字データ
// prettier-ignore
const charStr = {
  jp: [
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
  ],
  na: [],
  eu: [],
};

/** メールタイプ: たすけてメール */
export const RESCUE_TYPE_SOS = 1;
/** メールタイプ: ふっかつメール */
export const RESCUE_TYPE_AOK = 4;
/** メールタイプ: おれいのメール */
export const RESCUE_TYPE_THANKYOU = 5;

/**
 * 友達救助クラス
 */
// 構造体は0x205BDB0の関数内で構成？
export class Rescue {
  constructor(password) {
    this.Password = password;
  }

  /** チェックサム1 */
  Checksum1 = 0;

  /** チェックサム2 (確認用) */
  Checksum2 = 0;

  /** 救助依頼タイプ (1=たすけて, 4=ふっかつ, 5=おれい) */
  RescueType = 0;

  /** ダンジョン */
  Dungeon = 0;

  /** 救助フロア */
  Floor = 0;

  /** [たすけて] ダンジョンSeed (～0xFFFFFF) */
  DungeonSeed = 0;

  /** [たすけて] 救助待ちMACアドレス末尾8桁 */
  // 救助待ち状態に移行した時点で使用しているDSのMACアドレスから参照される
  // 多分Wi-Fi救助の名残？
  SOSTeamId = 0;

  /** [たすけて] キー値 */
  // 倒れて救助待ち状態になる度に生成
  // この値がたすけてとふっかつ間で一致している必要がある
  // おそらく単純な32bitRNG
  SOSCheckKey = 0;

  /** リージョン (0=日本(0000), 8=米国(1000) bitで管理) */
  // チーム名の制御に使用される
  // ゲームのリージョンと一致している時に対応した文字で表示
  // 異なる場合は固定チーム名で表示 (日本:ポケモンズ)
  Region = 0;

  /** チーム名称 (最大10文字) */
  // 日本版の場合5文字まで、超える場合は弾かれる
  TeamName = '';

  /** 贈る道具の個数/中身 */
  // ふっかつ・おれいのメールに使用される
  // スタック不可の道具の場合は0で固定
  // スタック可能の道具で0、もしくは100以上の時は弾かれる
  // 宝箱・しようごマシンの場合は中身がここに入る
  GiftItemCount = 0;

  /** 贈る道具ID */
  // ふっかつ・おれいのメールに使用される
  // 0x400以上になる場合GiftItemFlagの値を2にし、この値は0x400で割った余りの値になる
  // ※生成処理で制御してるのでそのままセットしてOK
  GiftItemId = 0;

  /** [ふっかつ/おれい] 救助側MACアドレス末尾8桁 */
  // DSのMACアドレス末尾32bitがそのまま入る
  // ※おれいのメールはこの値がふっかつ側と一致している必要あり
  AOKTeamId = 0;

  /** [ふっかつ/おれい] キー値 */
  // セーブファイル0x28-0x2Bの値を使用 (＝セーブデータ依存の値)
  // この値は単純な32bitRNGであり、性格診断が一通り終わって
  // 主人公が決まるタイミングでセットされる (0x22AC67C)
  // 不整合チェックをしている可能性あり？
  // ※おれいのメールはこの値がふっかつ側と一致している必要あり
  AOKCheckKey = 0;

  /** バージョン値 (時=0, 闇=1, 空=2or3) */
  // 0x205BE5C で[0～1のランダムな値 OR 2]されているので2か3はランダム？
  Version = 0;

  /** [ふっかつ/おれい] 贈る道具フラグ */
  // 道具IDが0x400を超える場合、道具IDから0x400を引いてこの値を0x2にする
  GiftItemFlag = 0;

  /** パスワード */
  Password = '';

  encode(rescueType = -1) {
    const bitConvert = new BitConvert();
    // 救助タイプが引数で未指定の場合、クラス内の救助タイプを使う
    if (rescueType == -1) {
      rescueType = this.RescueType;
    }
    if (isNaN(Number(rescueType))) {
      console.error('[Error] Rescue Encode Error: invalid rescueType');
      return false;
    }

    // たすけて・ふっかつ・おれい共通
    // [8 bit] チェックサム用の領域を用意
    bitConvert.addBits(0, 8);
    // [4 bit] 救助タイプ
    bitConvert.addBits(rescueType, 4);
    // [7 bit] ダンジョン
    bitConvert.addBits(this.Dungeon, 7);
    // [7 bit] フロア
    bitConvert.addBits(this.Floor, 7);

    // たすけてメール
    if (rescueType == 1) {
      // [24 bit] ダンジョンSeed
      bitConvert.addBits(this.DungeonSeed, 24);
      // [32 bit] 救助待ちMACアドレス
      bitConvert.addBits(this.SOSTeamId, 32);
      // [32 bit] 救助待ちキー値
      bitConvert.addBits(this.SOSCheckKey, 32);
      // [4 bit] リージョン
      bitConvert.addBits(this.Region, 4);
      // [80 bit] チーム名
      bitConvert.setArray(ConvertCharToArr(this.TeamName)); // setArray -> 1文字8bitでaddBits -> x10
      // [32 bit] 救助MACアドレス
      bitConvert.addBits(this.AOKTeamId, 32);
      // [32 bit] ふっかつメールキー値
      bitConvert.addBits(this.AOKCheckKey, 32);
      // [2 bit] バージョン
      bitConvert.addBits(this.Version, 2);
    }
    // 4, 5 => ふっかつメール, おれいのメール
    else if (rescueType == 4 || rescueType == 5) {
      // 贈る道具IDが0x400を超えている場合、フラグを2にして道具ID % 0x400
      const giftItemFlag = this.GiftItemId >= 0x400 ? 2 : 0;
      const giftItemId = this.GiftItemId % 0x400;

      // [32 bit] 救助待ちMACアドレス
      bitConvert.addBits(this.SOSTeamId, 32);
      // [32 bit] 救助待ちキー値
      bitConvert.addBits(this.SOSCheckKey, 32);
      // [4 bit] リージョン
      bitConvert.addBits(this.Region, 4);
      // [80 bit] チーム名
      bitConvert.setArray(ConvertCharToArr(this.TeamName)); // setArray -> 1文字8bitでaddBits -> x10
      // [10 bit] 贈る道具の個数/中身
      bitConvert.addBits(this.GiftItemCount, 10);
      // [10 bit] 贈る道具ID
      bitConvert.addBits(giftItemId, 10);
      // [32 bit] 救助MACアドレス
      bitConvert.addBits(this.AOKTeamId, 32);
      // [32 bit] 救助キー値
      bitConvert.addBits(this.AOKCheckKey, 32);
      // [2 bit] バージョン
      bitConvert.addBits(this.Version, 2);
      // [4 bit] 道具フラグ
      bitConvert.addBits(giftItemFlag, 4);
    }

    // チェックサム計算
    const checksum = generateChecksum(bitConvert.toHexList());
    bitConvert.setBits(checksum, 0, 8);
    this.Checksum1 = checksum;

    // 変換処理
    const passConv = new PasswordConverter();
    passConv.setDecList(bitConvert.toHexList());
    this.Password = passConv.encode(swapTable);
  }

  decode() {
    // パスワードを配列に変換
    const passConv = new PasswordConverter();
    passConv.setPassword(this.Password);
    const hexList = passConv.decode(swapTable);

    // 配列をビット配列に変換
    const bitConvert = new BitConvert();
    bitConvert.setArray(hexList);

    // [8 bit] チェックサム
    this.Checksum1 = bitConvert.getValueProg(8);
    // [4 bit] 救助タイプ
    this.RescueType = bitConvert.getValueProg(4);
    // [7 bit] ダンジョン
    this.Dungeon = bitConvert.getValueProg(7);
    // [7 bit] フロア
    this.Floor = bitConvert.getValueProg(7);

    // 1 => たすけてメール
    // ふっかつ・おれいのメールと連携させるには
    // 互いのメールでSOSTeamIdとSOSCheckKeyが一致している必要あり
    if (this.RescueType == 1) {
      // [24 bit] ダンジョンSeed
      this.DungeonSeed = bitConvert.getValueProg(24);
      // [32 bit] 救助待ちMACアドレス
      this.SOSTeamId = bitConvert.getValueProg(32);
      // [32 bit] 救助待ちキー値
      this.SOSCheckKey = bitConvert.getValueProg(32);
      // [4 bit] リージョン
      this.Region = bitConvert.getValueProg(4);
      // [80 bit] チーム名
      // 80bitはNumber型だと値が保証されないのでgetArrayProgで配列変換で取得
      this.TeamName = GetCharString(bitConvert.getArrayProg(80));
      // [32 bit] 救助側MACアドレス
      this.AOKTeamId = bitConvert.getValueProg(32);
      // [32 bit] 救助側キー値
      this.AOKCheckKey = bitConvert.getValueProg(32);
      // [2 bit] バージョン
      this.Version = bitConvert.getValueProg(2);
    }
    // 4, 5 => ふっかつメール, おれいのメール
    else if (this.RescueType > 1) {
      // [32 bit] 救助待ちMACアドレス
      this.SOSTeamId = bitConvert.getValueProg(32);
      // [32 bit] 救助待ちキー値
      this.SOSCheckKey = bitConvert.getValueProg(32);
      // [4 bit] リージョン
      this.Region = bitConvert.getValueProg(4);
      // [80 bit] チーム名
      this.TeamName = GetCharString(bitConvert.getArrayProg(80));
      // [10 bit] 贈る道具個数
      this.GiftItemCount = bitConvert.getValueProg(10);
      // [10 bit] 贈る道具ID
      this.GiftItemId = bitConvert.getValueProg(10);
      // [32 bit] 救助側MACアドレス
      this.AOKTeamId = bitConvert.getValueProg(32);
      // [32 bit] 救助側キー値
      this.AOKCheckKey = bitConvert.getValueProg(32);
      // [2 bit] バージョン
      this.Version = bitConvert.getValueProg(2);
      // [4 bit] 道具フラグ
      this.GiftItemFlag = bitConvert.getValueProg(4);

      // 道具フラグが2なら、道具IDに0x400を追加
      if (this.GiftItemFlag == 2) {
        this.GiftItemId += 0x400;
      }
    }

    // 整合性チェック用にチェックサムを生成
    this.Checksum2 = generateChecksum(bitConvert.toHexList());
  }

  clone() {
    const res = new Rescue(this.Password);
    res.Checksum1 = this.Checksum1;
    res.Checksum2 = this.Checksum2;
    res.RescueType = this.RescueType;
    res.Dungeon = this.Dungeon;
    res.Floor = this.Floor;
    res.DungeonSeed = this.DungeonSeed;
    res.SOSTeamId = this.SOSTeamId;
    res.SOSCheckKey = this.SOSCheckKey;
    res.Region = this.Region;
    res.TeamName = this.TeamName;
    res.GiftItemCount = this.GiftItemCount;
    res.GiftItemId = this.GiftItemId;
    res.AOKTeamId = this.AOKTeamId;
    res.AOKCheckKey = this.AOKCheckKey;
    res.Version = this.Version;
    res.GiftItemFlag = this.GiftItemFlag;
    res.Password = this.Password;
    return res;
  }

  /**
   * パスワード出力
   * @param {*} widthType 文字タイプ (0=全角, 1=半角)
   * @param {*} spaceBreak スペース・改行を含める
   * @returns パスワード文字列
   */
  output(widthType = 0, spaceBreak = true) {
    let res = this.Password;
    if (widthType == 1 && !spaceBreak) return this.Password;

    // 全角へ変換
    if (widthType === 0) {
      res = res.replace(/[\x21-\x7E]/g, (char) => {
        return String.fromCharCode(char.charCodeAt(0) + 0xfee0);
      });
    }

    if (spaceBreak) {
      const lengths = [6, 6, 6];
      const lineLength = lengths.reduce((sum, length) => sum + length, 0);
      const lines = [];

      for (let i = 0; i < res.length; i += lineLength) {
        const line = res.slice(i, i + lineLength);

        let pos = 0;
        const parts = lengths.map((length) => {
          const part = line.slice(pos, pos + length);
          pos += length;
          return part;
        });

        lines.push(parts.join(widthType === 0 ? '　' : ' '));
      }

      res = lines.join('\n');
    }

    return res;
  }
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
 * バイト配列 -> 文字列に変換
 * @param {*} value
 * @returns
 */
function GetCharString(arr) {
  let res = '';
  for (let i = 0; i < arr.length && arr[i] != 0; i++) {
    res += charStr.jp[arr[i]]; // 後に他言語ROM対応
  }
  return res;
}

/**
 * 文字列 -> バイト配列に変換
 * @param {*} str
 * @returns
 */
function ConvertCharToArr(str) {
  let res = new Array(10);
  for (let i = 0; i < str.length; i++) {
    let indexof = charStr.jp.indexOf(str[i]); // 後に他言語ROM対応
    if (indexof < 0) indexof = 0xf;
    res[i] = indexof;
  }
  return res;
}
