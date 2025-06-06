// タイプメッセージの開始位置
const TypeMsgId = 18541;
const TypeCount = 18;

// 特性メッセージの開始位置
const AbilityMsgId = 0x4880;
const AbilityCount = 124;

/**
 * 値を符号なし16進数に変換
 * @param {*} value
 * @returns
 */
function ToHex32(value) {
  let h = (value >> 16) & 0xffff;
  let l = value & 0xffff;

  if (!h) return l.toString(16);

  return h.toString(16) + ('0000' + l.toString(16)).slice(-4);
}

/**
 * ひらがな変換
 * @param {*} str
 * @returns
 */
function KanaToHira(str) {
  return str.replace(/[\u30a1-\u30f6]/g, function (match) {
    var chr = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(chr);
  });
}

/**
 * カタカナ変換
 * @param {*} str
 * @returns
 */
function HiraToKana(str) {
  return str.replace(/[\u3041-\u3096]/g, function (match) {
    var chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
}

/**
 * パスワード文字列半角化
 * @param {*} str
 * @returns
 */
function ConvertToHalfPassString(str) {
  let res = '';
  res = str
    .toUpperCase()
    .replace(/[\0\r\n\t 　]/g, '')
    .replace(/♯/g, '#')
    .replace(/oOｏＯ/g, '0')
    .replace(/iIｉＩ/g, '1')
    .replace(/[−―‐―ー—⁻₋]/g, '-')
    .replace(/[Ａ-Ｚａ-ｚ０-９＋－＝＆％＠＃]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
    });
  return res;
}

/**
 * パスワード文字列全角フォーマット
 * @param {string} str パスワード文字列(半角)
 * @param {number} sec1 区切り1文字数
 * @param {number} sec2 区切り2文字数
 * @param {number} sec3 区切り3文字数
 * @returns
 */
function ConvertToMultiFormat(str, sec1, sec2, sec3) {
  let res = '';
  let replace;
  replace = str
    .toUpperCase()
    .replace(/[\0\r\n\t 　]/g, '')
    .replace(/[A-Za-z0-9+-=&%@#]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) + 0xfee0);
    });

  if (sec1 == undefined || sec2 == undefined || sec3 == undefined) {
    alert('プログラムエラー');
    return false;
  }

  let i = 0;
  while (true) {
    // セクション1
    res += replace.slice(i, i + sec1);
    res += '　';
    i += sec1;
    // セクション2
    res += replace.slice(i, i + sec2);
    res += '　';
    i += sec2;
    // セクション3
    res += replace.slice(i, i + sec3);
    i += sec3;
    // 改行
    if (i >= str.length) break;
    else res += '\n';
  }

  return res;
}

/**
 * 文字列を全角に変換
 * @param {string} str 対象の文字列
 * @returns
 */
function toFullWidth(str) {
  return str.replace(/[\x20-\x7E]/g, (char) => {
    return String.fromCharCode(char.charCodeAt(0) + 0xfee0);
  });
}

/**
 * 文字列を半角に変換
 * @param {string} str 対象の文字列
 * @returns
 */
function toHalfWidth(str) {
  return str.replace(/[\x20-\x7E]/g, (char) => {
    return String.fromCharCode(char.charCodeAt(0) - 0xfee0);
  });
}

/**
 * 文字列タグの削除
 * @param {*} str
 * @returns
 */
function formatRemoveTagString(str) {
  return str.replace(/\[+[^\[*\]]*\]+/g, '');
}

/**
 * 対象のポケモンが技を習得できるかチェック
 * @param {*} pokemonId ポケモンID
 * @param {*} moveId 技ID
 * @param {Boolean} unusedTM 未使用の技マシンを含める (あまごい, あられ, かげぶんしん, がんせきふうじ, すなあらし, にほんばれ, よこどり)
 * @param {Boolean} unusedEgg 未使用のタマゴ技を含める (一部進化後ポケモンのタマゴ技)
 * @returns
 */
function isLearnMoves(pokemonId, moveId, unusedTM = false, unusedEgg = false) {
  let res = false;
  let array = [];
  if (PokemonData) {
    if (!Array.isArray(moveId) && isNaN(moveId)) {
      array.push(moveId);
    } else if (Array.isArray(moveId)) {
      array = moveId;
    }

    if (array.length > 0) {
      const poke = PokemonData[pokemonId];
      console.log(poke);

      // レベル技
      if (poke.Learning.LearningLv) {
        res = array.every((item) => poke.Learning.LearningLv.some((r) => r.LearningMoveId == item));
      }
      // 技マシン
      if (!res && poke.Learning.LearningTmHm) {
        // 未使用技マシンを除外
        if (!unusedTM && !array.some(isUnusedTMMove)) {
          res = false;
        } else {
          res = array.every((item) => poke.Learning.LearningTmHm.some((r) => r.LearningMoveId == item));
        }
      }
      // タマゴ技
      if (!res && poke.Learning.LearningEgg) {
        // 未使用タマゴ技を除外
        if (!unusedEgg) {
        }
        res = array.every((item) => poke.Learning.LearningEgg.some((r) => r.LearningMoveId == item));
      }
    }
  } else {
    console.error('Data Not Found');
  }
  return res;
}

/**
 * 対象のポケモンがかしこさを習得できるかチェック
 * @param {*} pokemonId ポケモンID
 * @param {(Int|Array)} skillId かしこさID (値 or 配列)
 */
function isLearnIQSkills(pokemonId, skillId) {
  let res = false;
  let array = [];
  if (PokemonData && IQGroupData) {
    if (!Array.isArray(skillId) && isNaN(skillId)) {
      array.push(skillId);
    } else if (Array.isArray(skillId)) {
      array = skillId;
    }

    if (array.length > 0) {
      const poke = PokemonData[pokemonId];
      const group = IQGroupData[poke.IQGroup];
      res = array.every((item) => group.includes(Number(item)));
    }
  } else {
    console.error('Data Not Found');
  }
  return res;
}

/**
 * 未使用ポケモンであるかチェック
 * @param {*} pokemonId ポケモンID
 * @returns
 */
function isUnusedPokemon(pokemonId) {
  const ids = [0, 279, 384]; // なにものか, セレビィ(ピンク), カクレオン(紫)
  return ids.includes(pokemonId) || pokemonId > 536;
}

/**
 * 未使用技マシン技であるかチェック
 * @param {*} moveId 技ID
 */
function isUnusedTMMove(moveId) {
  const ids = [
    12, // あまごい
    14, // あられ
    56, // かげぶんしん
    73, // がんせきふうじ
    141, // すなあらし
    223, // にほんばれ
    334, // よこどり
  ];
  return ids.includes(moveId);
}

/**
 * 未使用技であるかチェック
 * @param {*} moveId 技ID
 * @returns
 */
function isUnusedMove(moveId) {
  const ids = [
    0, // なし
    355, // こうげき
    356, // ようすをみる
    357, // がまん
    358, // リベンジ
    361, // ゆきなだれ
    362, // ほりおこし
    363, // かいてんぎり
    364, // わなみえ
    365, // とりあげる
    365, // はねかえし
    366, // やまごえぎり
    367, // ばしょがえ
    368, // ふっとび
    369, // ワープ
    370, // へんか
    371, // のろのろ
    372, // かそく
    373, // ライト
    374, // こうちょく
    375, // いちじしのぎ
    376, // とびつき
    377, // ひきよせ
    378, // おはらい
    379, // ようすみ
    380, // とりかわる
    381, // バクスイ
    382, // ふらふら
    383, // もろは
    384, // わざふういん
    385, // だっしゅつ
    386, // せんりがん
    387, // じごくみみ
    388, // ひあがり
    389, // わなこわし
    390, // よびよせ
    391, // とうめい
    392, // いちげき
    393, // しきべつ
    395, // ふっかつ
    396, // ビックリ
    397, // きょうめい
    398, // ハラヘリ
    399, // おおべや
    400, // うめたて
    401, // わなつくり
    402, // のりうつり
    403, // どうぐへんか
    404, // -
    405, // なげたもの
    406, // なげとばし
    407, // つうか
    408, // アイテムなげ
    409, // かいだん
    410, // えんとう
    411, // -
    412, // かんつう
    413, // -
    414, // -
    415, // -
    416, // -
    417, // -
    418, // -
    419, // -
    420, // -
    421, // -
    422, // -
    423, // -
    424, // - (はらいのけだま)
    425, // - (てきしばりだま)
    426, // - (みなマッハだま)
    427, // - (てきおびえだま)
    428, // - (みなヒットだま)
    429, // - (てきふうじだま)
    467, // さばきのつぶて
    543, // -
    544, // -
    545, // -
    546, // -
    547, // -
    548, // -
    549, // -
    550, // -
    551, // -
    552, // -
    553, // -
    554, // -
    555, // -
    556, // -
    557, // -
    558, // -
  ];
  return ids.includes(moveId);
}

/**
 * 未使用ダンジョンであるかチェック
 * @param {*} dungeonId
 * @returns
 */
function isUnusedDungeon(dungeonId) {
  const ids = [
    0, // テストダンジョン
    71, // かくされたいせき おくそこ
    105, // ダミー
    106, // ダミー
    165, // ちょこっとへいげん
    166, // クリアざん
    167, // チャレンジリバー
    168, // おためしのもり
    169, // いざないのうみ
    170, // てんしゅのかくれざと
    171, // ダミー
    172, // ダミー
    173, // ダミー
    175, // シェイミのさと
    176, // アーマルドのすみか
    177, // ひかりのいずみ
    178, // おんせん
    179, // きゅうじょダンジョン
  ]; // 192以降: くんれんじょ, きゅうじょダンジョン
  return ids.includes(dungeonId) || dungeonId > 191;
}

/**
 * [Select2] カスタム検索
 * IDや性別は含まず、項目の名称だけで検索できるようにするもの
 *
 * @param {*} params
 * @param {*} data
 * @returns
 */
function Select2CustomMatcher(params, data) {
  let e_data = $(data.element);

  // 検索語がない場合は、すべてのデータを返す
  if ($.trim(params.term) === '') {
    return data;
  }

  // textプロパティがない場合は、項目を表示しない
  if (typeof data.text === 'undefined') {
    return null;
  }

  // 16進数のvalue(ID)で検索
  let val = parseInt(e_data.val()).toString(16).toUpperCase();
  let ser = params.term.toString().toUpperCase();
  if (val.indexOf(ser) > -1) {
    return data;
  }

  // 名称部分のみで検索（ひらがなカタカナ両対応）
  if (e_data.data('search') != undefined) {
    const hira = KanaToHira(e_data.data('search'));
    const kana = HiraToKana(e_data.data('search'));
    if (hira.indexOf(params.term) > -1 || kana.indexOf(params.term) > -1) {
      const modifiedData = $.extend({}, data, true);
      return modifiedData;
    } else if (data.text.indexOf(params.term) > -1) {
      const modifiedData = $.extend({}, data, true);
      return modifiedData;
    }
  }

  // Return `null` if the term should not be displayed
  return null;
}

/**
 * [Select2] カスタムフォーマット
 * 項目の見た目の変更
 *
 * @param {*} state
 * @returns
 */
function Select2FormatState(state) {
  let res = $(`<span>${state.text}</span>`);

  let banned = $(state.element).data('banned') ?? false;
  let nogender = $(state.element).data('gender') == 0;
  let invalid = $(state.element).data('valid') != undefined ? !$(state.element).data('valid') : undefined;
  let allow = $(state.element).data('allow') != undefined ? $(state.element).data('allow') : undefined;

  if (banned) {
    // 禁止ポケモン
    res.addClass('banned');
  } else if (nogender) {
    // 無効ポケモン
    res.addClass('invalid');
  } else if (invalid != undefined && invalid) {
    // 無効道具
    res.addClass('invalid');
  }

  return res;
}
