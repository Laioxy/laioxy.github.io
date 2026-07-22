/**
 * getJsonDataの引数に入れるキー名とJSONファイルのパス
 */
const jsonPathsArray = {
  pokemon: '/data/pokemon.min.json',
  item: '/data/item.min.json',
  move: '/data/move.min.json',
  dungeon: '/data/dungeon.min.json',
  floor: '/data/floor.min.json',
  mappa_s: '/data/mappa_s.min.json',
  mappa_t: '/data/mappa_t.min.json',
  mappa_y: '/data/mappa_y.min.json',
  fixed: '/data/fixed.min.json',
  type: '/data/type.min.json',
  iqgroup: '/data/iqgroup.min.json',
  iqskill: '/data/iqskill.min.json',
  rescue: '/data/rescue.min.json',
};

/**
 * JSONキャッシュ
 * key -> Promise<JSON>
 */
const jsonCache = new Map();

/**
 * JSONのパスを取得
 * @param {string} key
 * @returns {string}
 */
function getJsonPath(key) {
  if (key === 'message') {
    const lang = document.documentElement?.lang ?? 'ja'; // デフォルトは日本語
    return `/data/message.${lang}.min.json`;
  }
  return jsonPathsArray[key];
}

/**
 * JSONを取得
 * @param {string} key キー
 * @returns JSONデータ
 */
export async function getJsonData(key) {
  // パス取得
  const path = getJsonPath(key);
  if (!path) {
    console.error(`Unknown json key: ${key}`);
    return null;
  }

  // 初回取得はキャッシュ化
  if (!jsonCache.has(key)) {
    const promise = await fetch(path)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .catch((e) => {
        // 失敗した場合はキャッシュを削除して再取得できるようにする
        jsonCache.delete(key);
        throw e;
      });
    jsonCache.set(key, promise);
  }

  try {
    return jsonCache.get(key);
  } catch (e) {
    console.error('getJsonData Failed: ', e);
    return null;
  }
}

/**
 * JSONを一括取得
 * @param {string[]} keys キー群
 * @returns
 */
export async function getJsonDatas(keys) {
  const values = await Promise.all(keys.map((key) => getJsonData(key)));
  return Object.fromEntries(keys.map((key, index) => [key, values[index]]));
}

/**
 * キャッシュを削除
 * @param {string} [key]
 */
export function clearJsonCache(key) {
  if (key) {
    jsonCache.delete(key);
  } else {
    jsonCache.clear();
  }
}
