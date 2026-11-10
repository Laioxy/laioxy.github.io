import { getJsonDatas } from './json_script.js';

class JsonStore {
  #data = new Map();

  async load(keys) {
    const datas = await getJsonDatas(keys);
    for (const [key, value] of Object.entries(datas)) {
      this.#data.set(key, value);
    }
    return datas;
  }

  get(key) {
    return this.#data.get(key) ?? null;
  }

  has(key) {
    return this.#data.has(key);
  }
}

export const jsonData = globalThis.jsonStore ?? (globalThis.jsonStore = new JsonStore());
