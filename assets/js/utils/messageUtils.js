import { jsonData } from 'js/json_store';

export class MessageUtils {
  /** メッセージデータ (message.x.json) */
  #MessageData;

  constructor(messages) {
    this.#MessageData = messages;
  }

  static create() {
    const messageDatas = jsonData.get('message');
    return new MessageUtils(messageDatas);
  }

  /**
   * ポケモン名を取得
   * @param {Number} id ポケモンID
   * @param {Boolean} useSubName True=サブ名称を使用
   * @returns
   */
  getPokemonName(id, useSubName = false) {
    const baseId = Number(id) % 600;
    const params = Number(window.PARAMS['MESSAGE_POKEMON_NAME_INDEX']);
    if (!params) {
      console.error("window.PARAMS['MESSAGE_POKEMON_NAME_INDEX'] not found");
      return null;
    }
    let res = this.#MessageData[params + baseId];

    if (useSubName) {
      const subname = window.translate.pokemon.subname[baseId] ?? '';
      if (subname.length > 0) {
        res = `${res} (${subname})`;
      }
    }

    return res;
  }

  /**
   * 技名を取得
   * @param {*} id 技ID
   * @returns
   */
  getMoveName(id) {
    const params = Number(window.PARAMS['MESSAGE_MOVE_NAME_INDEX']);
    if (!params) {
      console.error("window.PARAMS['MESSAGE_MOVE_NAME_INDEX'] not found");
      return null;
    }
    return this.#MessageData[params + Number(id)];
  }

  /**
   * ダンジョン名を取得
   * @param {*} id
   * @returns
   */
  getDungeonName(id) {
    const params = Number(window.PARAMS['MESSAGE_DUNGEON_FULL_NAME_INDEX']);
    if (!params) {
      console.error("window.PARAMS['MESSAGE_DUNGEON_FULL_NAME_INDEX'] not found");
      return null;
    }
    return this.#MessageData[params + Number(id)];
  }
}
