import { BitConvert } from '../utils/bitConverter';
import { PasswordConverter } from '../utils/passwordConverter';

/** 地域・バージョン毎のテーブル */
const swapTable = {
  sky: {
    jp: [
      0x14, 0x00, 0x13, 0x16, 0x05, 0x12, 0x02, 0x0b, 0x0c, 0x19, 0x21, 0x0f, 0x08, 0x1d, 0x11, 0x1a, 0x06, 0x01, 0x17,
      0x1c, 0x07, 0x1b, 0x0d, 0x1f, 0x15, 0x09, 0x1e, 0x0a, 0x20, 0x10, 0x0e, 0x04, 0x03, 0x18,
    ],
    na: [
      0x07, 0x1b, 0x0d, 0x1f, 0x15, 0x1a, 0x06, 0x01, 0x17, 0x1c, 0x09, 0x1e, 0x0a, 0x20, 0x10, 0x21, 0x0f, 0x08, 0x1d,
      0x11, 0x14, 0x00, 0x13, 0x16, 0x05, 0x12, 0x0e, 0x04, 0x03, 0x18, 0x02, 0x0b, 0x0c, 0x19,
    ],
    eu: [
      0x0e, 0x04, 0x03, 0x18, 0x09, 0x1e, 0x0a, 0x20, 0x10, 0x21, 0x14, 0x00, 0x13, 0x16, 0x05, 0x12, 0x06, 0x01, 0x17,
      0x1c, 0x07, 0x1b, 0x0d, 0x1f, 0x15, 0x1a, 0x02, 0x0b, 0x0c, 0x19, 0x0f, 0x08, 0x1d, 0x11,
    ],
  },
  old: [
    0x0c, 0x06, 0x13, 0x08, 0x04, 0x0d, 0x0f, 0x09, 0x10, 0x02, 0x14, 0x12, 0x00, 0x15, 0x0b, 0x05, 0x17, 0x03, 0x11,
    0x0a, 0x01, 0x0e, 0x16, 0x07,
  ],
};

/** ふしぎなメールクラス */
export class WonderMail {
  constructor(password) {
    this.Password = password;
  }

  /** 空の探検隊であるか */
  Sky = true;
  /** チェックサム1 (パスに含まれるもの) */
  Checksum1 = 0;
  /** チェックサム2 (内容から生成したもの) */
  Checksum2 = 0;
  /** 依頼状態値 (パスワードでは 4:保留 で固定) */
  Status = 4;
  /** 依頼タイプ */
  MissionType = 0;
  /** 依頼フラグ */
  MissionFlag = 0;
  /** 報酬タイプ */
  RewardType = 0;
  /** 報酬値 */
  RewardValue = 0;
  /** 依頼主 */
  Client = 0;
  /** 対象1 */
  Target1 = 0;
  /** 対象2 */
  Target2 = 0;
  /** 対象の道具 */
  TargetItem = 0;
  /** ダンジョン */
  Dungeon = 0;
  /** 目的フロア */
  Floor = 0;
  /** 固定フロア */
  Fixed = 0;
  /** 制限タイプ */
  RestType = 0;
  /** 制限値 */
  RestValue = 0;
  /** SEED */
  Seed = 0;
  /** (空き) */
  NullByte = 0;

  /** パスワード */
  Password = '';
  /** リージョン (jp, na, eu) */
  Region = '';

  encode() {
    const swap = this.Sky ? swapTable.sky[this.Region] : swapTable.old;
    const bitConvert = new BitConvert();

    // ふしぎなメールS => 162+14 bit
    if (this.Sky) {
      // [32 bit] チェックサム
      bitConvert.addBits(this.Checksum1, 32);
      // [4 bit] 状態値
      bitConvert.addBits(this.Status, 4);
      // [4 bit] 依頼タイプ
      bitConvert.addBits(this.MissionType, 4);
      // [4 bit] 依頼フラグ
      bitConvert.addBits(this.MissionFlag, 4);
      // [11 bit] 依頼主
      bitConvert.addBits(this.Client, 11);
      // [11 bit] 対象1
      bitConvert.addBits(this.Target1, 11);
      // [11 bit] 対象2
      bitConvert.addBits(this.Target2, 11);
      // [10 bit] 対象の道具
      bitConvert.addBits(this.TargetItem, 10);
      // [4 bit] 報酬タイプ
      bitConvert.addBits(this.RewardType, 4);
      // [11 bit] 報酬値
      bitConvert.addBits(this.RewardValue, 11);
      // [1 bit] 制限タイプ
      bitConvert.addBits(this.RestType, 1);
      // [11 bit] 制限値
      bitConvert.addBits(this.RestValue, 11);
      // [24 bit] Seed
      bitConvert.addBits(this.Seed, 24);
      // [8 bit] ダンジョン
      bitConvert.addBits(this.Dungeon, 8);
      // [8 bit] 目的フロア
      bitConvert.addBits(this.Floor, 8);
      // [8 bit] 固定フロア
      bitConvert.addBits(this.Fixed, 8);
      // [14 bit] Null
      bitConvert.addBits(this.NullByte, 14);
    }
    // ふしぎなメール => 119+9 bit
    else {
      // [8 bit] チェックサム
      bitConvert.addBits(this.Checksum1, 8);
      // [4 bit] 状態値
      bitConvert.addBits(this.Status, 4);
      // [4 bit] 依頼タイプ
      bitConvert.addBits(this.MissionType, 4);
      // [4 bit] 依頼フラグ
      bitConvert.addBits(this.MissionFlag, 4);
      // [11 bit] 依頼主
      bitConvert.addBits(this.Client, 11);
      // [11 bit] 対象1
      bitConvert.addBits(this.Target1, 11);
      // [10 bit] 対象の道具
      bitConvert.addBits(this.TargetItem, 10);
      // [4 bit] 報酬タイプ
      bitConvert.addBits(this.RewardType, 4);
      // [11 bit] 報酬値
      bitConvert.addBits(this.RewardValue, 11);
      // [1 bit] 制限タイプ
      bitConvert.addBits(this.RestType, 1);
      // [11 bit] 制限値
      bitConvert.addBits(this.RestValue, 11);
      // [24 bit] Seed
      bitConvert.addBits(this.Seed, 24);
      // [8 bit] ダンジョン
      bitConvert.addBits(this.Dungeon, 8);
      // [8 bit] 目的フロア
      bitConvert.addBits(this.Floor, 8);
      // [9 bit] Null
      bitConvert.addBits(this.NullByte, 9);
    }

    // 8ビット配列化
    const hexList = bitConvert.toHexList();

    // チェックサム生成
    this.Checksum1 = generateCheckSum(hexList, this.Sky);
    for (let i = 0; i < (this.Sky ? 4 : 1); i++) hexList[i] = (this.Checksum1 >> (i * 8)) & 0xff;

    const passConv = new PasswordConverter();
    passConv.setDecList(hexList);
    this.Password = passConv.encode(swap);
  }

  decode() {
    const swap = this.Sky ? swapTable.sky[this.Region] : swapTable.old;

    // パスワードを配列に変換
    const passConv = new PasswordConverter();
    passConv.setPassword(this.Password);
    const hexList = passConv.decode(swap);

    // 配列をビット配列に変換
    const bitConvert = new BitConvert();
    bitConvert.setArray(hexList);

    // ふしぎなメールS (空)
    if (this.Sky) {
      // [32 bit] チェックサム
      this.Checksum1 = bitConvert.getValueProg(32) >>> 0; // 0埋め右シフトを行うことで32bit化
      // [4 bit] 状態値
      this.Status = bitConvert.getValueProg(4);
      // [4 bit] 依頼タイプ
      this.MissionType = bitConvert.getValueProg(4);
      // [4 bit] 依頼フラグ
      this.MissionFlag = bitConvert.getValueProg(4);
      // [11 bit] 依頼主
      this.Client = bitConvert.getValueProg(11);
      // [11 bit] 対象1
      this.Target1 = bitConvert.getValueProg(11);
      // [11 bit] 対象2
      this.Target2 = bitConvert.getValueProg(11);
      // [10 bit] 対象の道具
      this.TargetItem = bitConvert.getValueProg(10);
      // [4 bit] 報酬タイプ
      this.RewardType = bitConvert.getValueProg(4);
      // [11 bit] 報酬値
      this.RewardValue = bitConvert.getValueProg(11);
      // [1 bit] 制限タイプ
      this.RestType = bitConvert.getValueProg(1);
      // [11 bit] 制限値
      this.RestValue = bitConvert.getValueProg(11);
      // [24 bit] Seed
      this.Seed = bitConvert.getValueProg(24);
      // [8 bit] ダンジョン
      this.Dungeon = bitConvert.getValueProg(8);
      // [8 bit] 目的フロア
      this.Floor = bitConvert.getValueProg(8);
      // [8 bit] 固定フロア
      this.Fixed = bitConvert.getValueProg(8);
      // [14 bit] Null
      this.NullByte = bitConvert.getValueProg(14);
    }
    // ふしぎなメール (時闇)
    else {
      // [8 bit] チェックサム
      this.Checksum1 = bitConvert.getValueProg(8);
      // [4 bit] 状態値
      this.Status = bitConvert.getValueProg(4);
      // [4 bit] 依頼タイプ
      this.MissionType = bitConvert.getValueProg(4);
      // [4 bit] 依頼フラグ
      this.MissionFlag = bitConvert.getValueProg(4);
      // [11 bit] 依頼主
      this.Client = bitConvert.getValueProg(11);
      // [11 bit] 対象1
      this.Target1 = bitConvert.getValueProg(11);
      // [10 bit] 対象の道具
      this.TargetItem = bitConvert.getValueProg(10);
      // [4 bit] 報酬タイプ
      this.RewardType = bitConvert.getValueProg(4);
      // [11 bit] 報酬値
      this.RewardValue = bitConvert.getValueProg(11);
      // [1 bit] 制限タイプ
      this.RestType = bitConvert.getValueProg(1);
      // [11 bit] 制限値
      this.RestValue = bitConvert.getValueProg(11);
      // [24 bit] Seed
      this.Seed = bitConvert.getValueProg(24);
      // [8 bit] ダンジョン
      this.Dungeon = bitConvert.getValueProg(8);
      // [8 bit] 目的フロア
      this.Floor = bitConvert.getValueProg(8);
      // [9 bit] Null
      this.NullByte = bitConvert.getValueProg(9);
    }

    // 整合性チェック用にチェックサムを生成
    this.Checksum2 = generateCheckSum(bitConvert.toHexList(), this.Sky);
  }
}

/**
 * チェックサム生成
 * @param {*} arr 8ビット配列
 * @param {*} sky 空の探検隊であるか
 * @returns
 */
function generateCheckSum(arr, sky) {
  let res = 0;

  // ふしぎなメールS:
  // 33ビット(5バイト)以降をCRC32化 -> 先頭32ビットにセット
  if (sky) {
    let crc = getCRC32Table();
    let pos = 0xffffffff;
    // nullバイト分を除外するため length - 1
    for (let i = 4; i < arr.length - 1; i++) {
      let e = crc[(pos ^ arr[i]) & 0xff];
      pos = (pos >>> 8) ^ e;
    }
    pos = pos ^ 0xffffffff;
    if (pos < 0) pos += 0x100000000;
    res = pos;
  }

  // ふしぎなメール:
  // 9ビット(2バイト)以降を全て足して0xFFでAND演算 -> 先頭8ビットにセット
  else {
    for (let i = 1; i < arr.length - 1; i++) {
      res += arr[i] + i;
      res &= 0xff;
    }
  }

  return res;
}

/**
 * CRC32テーブル作成
 */
function getCRC32Table() {
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
