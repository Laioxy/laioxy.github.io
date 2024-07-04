import { WonderMail } from "./wondermail_pass.js";
self.addEventListener("message", (e) => {
  let mission = new WonderMail();
  mission.Status = e.data.mission.Status;
  mission.Client = e.data.mission.Client;
  mission.Dungeon = e.data.mission.Dungeon;
  mission.Fixed = e.data.mission.Fixed;
  mission.Floor = e.data.mission.Floor;
  mission.MissionFlag = e.data.mission.MissionFlag;
  mission.MissionType = e.data.mission.MissionType;
  mission.RestType = e.data.mission.RestType;
  mission.RestValue = e.data.mission.RestValue;
  mission.RewardType = e.data.mission.RewardType;
  mission.RewardValue = e.data.mission.RewardValue;
  mission.Seed = e.data.mission.Seed;
  mission.Target1 = e.data.mission.Target1;
  mission.Target2 = e.data.mission.Target2;
  mission.TargetItem = e.data.mission.TargetItem;

  // 連続文字検索モード
  let max = e.data.maxFind;
  let sky = e.data.isSky;
  let resion = e.data.resion;
  let rand_reward_value = e.data.randRewardValue;
  let rand_pokemon = e.data.randPokemon;
  let rand_target_item = e.data.randTargetItem;
  let rand_seed = e.data.randSeed;

  let sameClientTable = [0, 3, 4, 5, 6, 12];
  let sameClient = sameClientTable.includes(Number(mission.MissionType));

  // 最大項目数の計算
  let maxrand = 1;
  if (rand_reward_value) maxrand *= 0x800;
  if (rand_pokemon) maxrand *= e.data.allowedPokemon.length;
  if (rand_pokemon && !sameClient) maxrand *= e.data.allowedPokemon.length;
  if (rand_target_item) maxrand *= e.data.allowedTargetItem.length;
  if (rand_seed) maxrand *= 0x1000000;
  //console.log(BigInt(maxrand));

  let cnt = 0;
  let passwords = [];

  // 2024/04/15:
  // 重複は考慮していないので効率が良いかは微妙
  // アプデするなら、項目ごとに乱数の範囲が指定できるようにすると良い？

  let consecutiveMax = 0;
  let countMax = 0;
  while (true) {
    let t_reward_value = rand_reward_value ? Math.floor(Math.random() * 0x800) : mission.RewardValue;
    let t_client = rand_pokemon ? GetRandomAllowValue(e.data.allowedPokemon) : mission.Client ?? 0;
    let t_target_1 = rand_pokemon ? GetRandomAllowValue(e.data.allowedPokemon) : mission.Target1 ?? 0;
    let t_target_2 =
      rand_pokemon && ((mission.MissionType == 10 && mission.MissionFlag == 6) || (mission.MissionType == 11 && mission.MissionFlag == 0))
        ? GetRandomAllowValue(e.data.allowedPokemon)
        : mission.Target2 ?? 0;

    // 依頼主と同じポケモンを使用する
    if (sameClient) t_target_1 = t_client;

    let t_item = rand_target_item ? GetRandomAllowValue(e.data.allowedTargetItem) : mission.TargetItem ?? 0;
    let t_seed = rand_seed ? Math.floor(Math.random() * 0x1000000) : mission.Seed;

    // 依頼作成
    let tmp = new WonderMail();
    tmp.Status = 4;
    tmp.MissionType = mission.MissionType ?? 0;
    tmp.MissionFlag = mission.MissionFlag ?? 0;
    tmp.RewardType = mission.RewardType ?? 0;
    tmp.RewardValue = t_reward_value;
    tmp.Client = t_client;
    tmp.Target1 = t_target_1;
    tmp.Target2 = t_target_2;
    tmp.TargetItem = t_item;
    tmp.Dungeon = mission.Dungeon ?? 0;
    tmp.Floor = mission.Floor ?? 0;
    tmp.Fixed = mission.Fixed ?? 0;
    tmp.RestType = mission.RestType ?? 0;
    tmp.RestValue = mission.RestValue ?? 0;
    tmp.Seed = t_seed;
    tmp.Encode(sky, resion);

    let consecutive = CountConsecutiveChar(tmp.Password);
    let count = CountLongestConsecutiveCharacter(tmp.Password);

    // 追加
    let add = {
      password: tmp.Password,
      consecutive: consecutive,
      count: count,
    };

    // 最大値を更新
    let updateMax = false;
    if (consecutive > consecutiveMax) {
      consecutiveMax = consecutive;
      updateMax = true;
    }
    if (count > countMax) {
      countMax = count;
      updateMax = true;
    }

    // 2回目以降は最大値が更新された場合のみ追加する
    if (passwords.length >= 10) {
      if (updateMax) passwords.push(add);
    } else {
      passwords.push(add);
    }
    cnt++;

    //if (cnt >= maxrand) break;
    self.postMessage({
      type: "progress",
      count: cnt,
    });
    if (cnt >= max) break;
  }

  passwords.sort((a, b) => {
    // consecutiveで降順にソート
    if (a.consecutive !== b.consecutive) {
      return b.consecutive - a.consecutive;
    }
    return b.count - a.count;
  });

  // 終了
  self.postMessage({
    passes: passwords,
    type: "complete",
  });
});

/**
 * 許可する値をランダム取得
 * @param {*} arrAllow 許可テーブル
 * @returns
 */
function GetRandomAllowValue(arrAllow = []) {
  let res = 0;
  while (true) {
    res = Math.floor(Math.random() * arrAllow.length);
    if (arrAllow[res] == 1) break;
  }
  return res;
}

/**
 * 連続する文字をカウント
 * @param {*} str
 * @returns
 */
function CountConsecutiveChar(str) {
  let count = 0;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) count++;
  }
  return count;
}

/**
 * 連続する文字のグループ数をカウント
 * Generated from ChatGPT
 * @param {*} str
 * @returns
 */
function CountLongestConsecutiveCharacter(str) {
  if (str.length === 0) {
    return 0; // 空の文字列の場合、0を返す
  }

  let maxCount = 1; // 最大連続文字数を格納する変数
  let currentCount = 1; // 現在の連続文字数を格納する変数
  let currentChar = str[0]; // 現在の文字を格納する変数

  // 文字列を1文字ずつ反復処理
  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      // 現在の文字が直前の文字と同じ場合、連続文字数をインクリメント
      currentCount++;
      // 最大連続文字数を更新
      maxCount = Math.max(maxCount, currentCount);
    } else {
      // 現在の文字が直前の文字と異なる場合、連続文字数をリセット
      currentCount = 1;
      // 現在の文字を更新
      currentChar = str[i];
    }
  }

  return maxCount;
}
