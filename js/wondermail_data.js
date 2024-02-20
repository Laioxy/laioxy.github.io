// 依頼タイプ
var mission_type = [
  {
    id: 0,
    name: "依頼主を救助する",
    flag: 0,
    difficult: false,
    same_cliant: true,
    used_item: false,
    used_fixed: false,
    sky_only: false,
  },
  {
    id: 1,
    name: "対象を救助する",
    flag: 1,
    difficult: false,
    same_cliant: false,
    used_item: false,
    used_fixed: false,
    sky_only: false,
  },
  {
    id: 2,
    name: "依頼主を対象の所へ連れていく",
    flag: 0,
    difficult: true,
    same_cliant: false,
    used_item: false,
    used_fixed: false,
    sky_only: false,
  },
  {
    id: 3,
    name: "依頼主と探検",
    flag: 2,
    difficult: true,
    same_cliant: true,
    used_item: true,
    used_fixed: true,
    sky_only: false,
  },
  {
    id: 4,
    name: "依頼主と宝探し",
    flag: 0,
    difficult: true,
    same_cliant: true,
    used_item: true,
    used_fixed: false,
    sky_only: false,
  },
  {
    id: 5,
    name: "依頼主を案内する",
    flag: 0,
    difficult: true,
    same_cliant: true,
    used_item: false,
    used_fixed: false,
    sky_only: false,
  },
  {
    id: 6,
    name: "道具を探す",
    flag: 3,
    difficult: false,
    same_cliant: true,
    used_item: true,
    used_fixed: false,
    sky_only: false,
  },
  {
    id: 7,
    name: "道具を届ける",
    flag: 0,
    difficult: false,
    same_cliant: true,
    used_item: true,
    used_fixed: false,
    sky_only: false,
  },
  {
    id: 8,
    name: "対象を探す",
    flag: 0,
    difficult: false,
    same_cliant: false,
    used_item: true,
    used_fixed: false,
    sky_only: false,
  },
  {
    id: 9,
    name: "お尋ね者を探して取り返す",
    flag: 4,
    difficult: true,
    same_cliant: false,
    used_item: true,
    used_fixed: false,
    sky_only: false,
  },
  {
    id: 10,
    name: "お尋ね者を捕まえる",
    flag: 5,
    difficult: true,
    same_cliant: false,
    used_item: false,
    used_fixed: false,
    sky_only: false,
  },
  {
    id: 11,
    name: "挑戦状を受ける",
    flag: 6,
    difficult: false,
    same_cliant: false,
    used_item: false,
    used_fixed: true,
    sky_only: true,
  },
  {
    id: 12,
    name: "おたからメモ",
    flag: 0,
    difficult: false,
    same_cliant: true,
    used_item: true,
    used_fixed: true,
    sky_only: true,
  },
  {
    id: 13,
    name: "(未使用)",
    flag: 0,
    difficult: false,
    same_cliant: false,
    used_item: false,
    used_fixed: false,
    sky_only: false,
  },
  {
    id: 14,
    name: "その他 特別指令など",
    flag: 7,
    difficult: false,
    same_cliant: false,
    used_item: false,
    used_fixed: false,
    sky_only: false,
  },
];

// 依頼フラグ
var mission_flag = [
  // 通常
  ["通常"],
  // 対象を救助する系の依頼
  ["親子系", "親友系", "恋人/ライバル/兄弟系", "恋人系"],
  // 探検系の依頼
  ["通常の探検", "あかずのま", "おうごんのま", "みかいのち"],
  // 道具を探す依頼
  ["貴重品系", "宝物系", "進化系", "好物系", "ガバイト用"],
  // 取り返す系の依頼
  ["対象を探して取り返す", "犯人を捜して取り返す①", "犯人を捜して取り返す②"],
  // 捕まえる系の依頼
  ["小悪党系", "大悪党系", "ペテン師系", "かわいい系", "依頼主と同行する", "逃げる対象を追いかける", "アジトで戦う", "モンスターハウスで戦う"],
  // 挑戦状の依頼
  ["通常の挑戦状", "ミュウツー用", "エンテイ用", "ライコウ用", "スイクン用", "ジラーチ用"],
  // 7つの秘宝
  ["不明", "7つの秘宝", "(デバッグ用) ほんじつのきゃー解禁"],
];

// 依頼フラグ (時闇)
var mission_flag_old = [
  // 通常
  ["通常", "通常 (時闇のみ使用？)"],
  // 対象を救助する系の依頼
  ["親子系", "親友系", "恋人/ライバル/兄弟系", "恋人系"],
  // 探検系の依頼
  ["通常の探検", "あかずのま", "おうごんのま", "みかいのち"],
  // 道具を探す依頼
  ["貴重品系", "宝物系", "進化系", "好物系", "ガバイト用"],
  // 取り返す系の依頼
  ["対象を探して取り返す"],
  // 捕まえる系の依頼
  ["小悪党系", "大悪党系", "ペテン師系", "かわいい系"],
  // 挑戦状の依頼 (時闇には無い)
  [],
  // 7つの秘宝
  ["不明", "なだれやま用", "きょだいかざん用", "かげろうのさばく用", "そこなしうみ用", "せかいのおおあな用", "ミステリージャングル用", "てんくうのかいだん用"],
];

// 報酬タイプ
// mode:報酬値が表すもの 0=参照無し, 1=道具ID, 2=ポケモンID
var reward_type = [
  {
    id: 0,
    name: "ポケ",
    mode: 0,
  },
  {
    id: 1,
    name: "ポケ＋道具",
    mode: 1,
  },
  {
    id: 2,
    name: "道具",
    mode: 1,
  },
  {
    id: 3,
    name: "道具＋その他",
    mode: 1,
  },
  {
    id: 4,
    name: "道具(???表記)",
    mode: 1,
  },
  {
    id: 5,
    name: "タマゴ",
    mode: 0,
  },
  {
    id: 6,
    name: "仲間になる",
    mode: 2,
  },
];

// 制限タイプ
var restriction = [
  { id: 0, name: "タイプ" },
  { id: 1, name: "ポケモン" },
];

// 難しさ
var difficult = [
  { id: 0, name: "-", value: 5 },
  { id: 1, name: "E", value: 10 },
  { id: 2, name: "D", value: 15 },
  { id: 3, name: "C", value: 20 },
  { id: 4, name: "B", value: 30 },
  { id: 5, name: "A", value: 60 },
  { id: 6, name: "S", value: 90 },
  { id: 7, name: "★1", value: 150 },
  { id: 8, name: "★2", value: 250 },
  { id: 9, name: "★3", value: 400 },
  { id: 10, name: "★4", value: 600 },
  { id: 11, name: "★5", value: 800 },
  { id: 12, name: "★6", value: 1000 },
  { id: 13, name: "★7", value: 1200 },
  { id: 14, name: "★8", value: 1400 },
  { id: 15, name: "★9", value: 1600 },
];

// 禁止ポケモン
var banned_poke = [
  0x17b, 0x17c, 0x17d, 0x17e, 0x126, 0x128, 0x00e, 0x17f, 0x180, 0x0c9, 0x0ca, 0x0cb, 0x0cc, 0x0cd, 0x0ce, 0x0cf, 0x0d0, 0x0d1, 0x0d2, 0x0d3, 0x0d4, 0x0d5,
  0x0d6, 0x0d7, 0x0d8, 0x0d9, 0x0da, 0x0db, 0x0dc, 0x0dd, 0x0de, 0x0df, 0x0e0, 0x0e1, 0x0e2, 0x0e3, 0x0e4, 0x089, 0x104, 0x204, 0x051, 0x052, 0x1f8, 0x090,
  0x091, 0x092, 0x199, 0x19a, 0x19b, 0x19c, 0x19d, 0x19e, 0x19f, 0x1a0, 0x1a1, 0x1a2, 0x1a3, 0x1a4, 0x1a5, 0x10e, 0x10f, 0x110, 0x114, 0x115, 0x116, 0x117,
  0x096, 0x097, 0x20a, 0x20b, 0x20c, 0x20d, 0x20e, 0x210, 0x211, 0x212, 0x1ea, 0x213, 0x214, 0x215, 0x216, 0x136, 0x028, 0x032, 0x033, 0x060, 0x07a, 0x082,
  0x083, 0x0b7, 0x146, 0x0c0, 0x0ef, 0x0f3, 0x0f4, 0x119, 0x142, 0x14a, 0x150, 0x171, 0x186, 0x1b2, 0x1d6, 0x1e3, 0x1ef, 0x207, 0x208, 0x20f, 0x205, 0x1ba,
  0x1fa, 0x178, 0x188, 0x0e5, 0x163, 0x0fb, 0x0f2, 0x123, 0x1c8, 0x0f1, 0x14b, 0x13a, 0x043, 0x000,
];
