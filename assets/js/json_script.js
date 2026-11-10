/**
 * getJsonDataの引数に入れるキー名とJSONファイルのパス
 */
const jsonPathsArray = {
  pokemon: '/data/pokemon.min.json',
  item: '/data/item.min.json',
  move: '/data/move.min.json',
  dungeon: '/data/dungeon.min.json',
  floor_info_s: '/data/floor_info_s.min.json',
  floor_info_t: '/data/floor_info_t.min.json',
  floor_info_y: '/data/floor_info_y.min.json',
  floor_table_s: '/data/floor_table_s.min.json',
  floor_table_t: '/data/floor_table_t.min.json',
  floor_table_y: '/data/floor_table_y.min.json',
  fixed: '/data/fixed.min.json',
  entityItem: '/data/entityItem.min.json',
  entityPokemon: '/data/entityPokemon.min.json',
  entityTrap: '/data/entityTrap.min.json',
  pokemonSpriteSizes: '/data/sky/pokemon_sprite_sizes.min.json',
  pokemonMovesets2: '/data/sky/pokemon-movesets_waza_p2.min.json',
  secondaryTerrainTypes: '/data/sky/secondary-terrain-types.min.json',
  type: '/data/type.min.json',
  iqgroup: '/data/iqgroup.min.json',
  iqskill: '/data/iqskill.min.json',
  rescue: '/data/rescue.min.json',
};

/**
 * バージョン別JSONのパス
 */
const versionedJsonPaths = {
  'pokemon-movesets': {
    sky: '/data/sky/pokemon-movesets.min.json',
    old: '/data/old/pokemon-movesets.min.json',
  },
  'pokemon-stats': {
    sky: '/data/sky/pokemon-stats.min.json',
    old: '/data/old/pokemon-stats.min.json',
  },
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
function getJsonPath(key, version = null) {
  if (version !== null) {
    return versionedJsonPaths[key]?.[version] ?? null;
  }
  if (key === 'message') {
    const lang = document.documentElement?.lang ?? 'ja'; // デフォルトは日本語
    return `/data/message.${lang}.min.json`;
  }
  return jsonPathsArray[key] ?? null;
}

/**
 * JSONを取得
 * @param {string} key キー
 * @returns JSONデータ
 */
export async function getJsonData(key, version = null) {
  // パス取得
  const path = getJsonPath(key, version);
  if (!path) {
    console.error(`Unknown json key: ${key}, version: ${version}`);
    return null;
  }

  // 初回取得はキャッシュ化
  const cacheKey = path;
  if (!jsonCache.has(cacheKey)) {
    const promise = fetch(path)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .catch((e) => {
        // 失敗した場合はキャッシュを削除して再取得できるようにする
        jsonCache.delete(cacheKey);
        console.error(`[${cacheKey}] getJsonData Failed: `, e);
        return null;
      });
    jsonCache.set(cacheKey, promise);
  }

  return jsonCache.get(cacheKey);
}

/**
 * JSONを一括取得
 * @param {string[]} keys キー群
 * @returns
 */
export async function getJsonDatas(keys) {
  const entries = await Promise.all(
    keys.map(async (key) => {
      const [jsonKey, version] = key.split('.');
      const data = await getJsonData(
        jsonKey,
        version ?? null
      );
      return [key, data];
    })
  );
  return Object.fromEntries(entries);
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
