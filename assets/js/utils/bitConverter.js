export class BitConvert {
  /** ビット配列 */
  #bitArray = new Array();
  /** カーソル */
  #cursor = 0;

  /**
   * コンストラクタ
   * @param {*} array
   */
  constructor(array = []) {
    if (array.length > 0) this.setArray(array);
  }

  /**
   * 配列をセット (数値変換)
   * @param {Array} array 配列
   */
  setArray(array) {
    for (let i = 0; i < array.length; i++) this.addBits(array[i], 8);
  }

  /**
   * 値をビット変換して追加
   * @param {*} value 値
   * @param {*} length ビット長
   */
  addBits(value, length) {
    const bits = (value ?? 0).toString(2).padStart(length, '0');
    for (let i = bits.length - 1; i >= 0; i--) this.#bitArray.push(Number(bits[i]));
  }

  /**
   * 値をビット変換して指定したオフセット位置に追加
   * @param {*} value 値
   * @param {*} offset オフセット (ビット)
   * @param {*} length ビット長
   */
  setBits(value, offset = 0, length) {
    for (let i = 0; i < length; i++) {
      this.#bitArray[offset + i] = (value >> i) & 1;
    }
  }

  /**
   * ビットを値で取得し、カーソルを進行する
   * @param {*} length ビット長
   * @returns
   */
  getValueProg(length) {
    let value;
    if (length > 32) {
      // 32ビットを超える場合は警告を出す
      console.warn('[Warning] getValueProg: 32 bit over');
    }

    if (this.#cursor + length > this.#bitArray.length) {
      value = 0; // 配列長を超える場合は0とみなす
    } else {
      value = this.getValueRange(this.#cursor, length);
    }
    this.#cursor += length;

    // 32ビットの場合は符号なしとして返す
    return length == 32 ? value >>> 0 : value;
  }

  /**
   * 指定範囲のビットを値で取得
   * @param {*} index 開始位置
   * @param {*} length ビット長
   * @returns
   */
  getValueRange(index, length) {
    let value = 0;
    for (let i = 0; i < length; i++) {
      const bit = this.#bitArray[index + i] ?? 0;
      if (bit === 1) value |= 1 << i;
    }
    return value;
  }

  /**
   * ビットを配列で取得し、カーソルを進行する
   * ※32ビットを超える場合はこれを使う
   * @param {*} length ビット長
   * @returns
   */
  getArrayProg(length) {
    const values = [];

    for (let i = 0; i < length; i += 8) {
      let value = 0;
      for (let j = 0; j < 8 && i + j < length; j++) {
        const bit = this.#bitArray[this.#cursor + i + j] ?? 0;
        if (bit === 1) value |= 1 << j;
      }
      values.push(value);
    }

    this.#cursor += length;
    return values;
  }

  /**
   * 現在のビット配列を取得
   * @returns
   */
  getBitArray() {
    return this.#bitArray;
  }

  /**
   * ビット配列を8ビット整数の配列で取得
   * @returns
   */
  toHexList() {
    const result = [];
    const len = this.#bitArray.length;

    for (let i = 0; i < len; i += 8) {
      // 足りない場合は0埋め
      const bits = this.#bitArray.slice(i, i + 8);
      while (bits.length < 8) bits.push(0);

      let value = 0;
      for (let b = 0; b < 8; b++) {
        if (bits[b] === 1) {
          value |= 1 << b;
        }
      }
      result.push(value);
    }
    return result;
  }

  /**
   * 現在のビット配列の長さを返す
   * @returns
   */
  getBitLength() {
    return this.#bitArray.length;
  }
}
