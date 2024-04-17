import { WonderMail } from "./wondermail_pass.js";

$(async function () {
  var PokemonData;

  // 要素キャッシュ
  var e_pass_area = $("#pass-area");
  var e_version_sky = $("#version-sky");
  var e_version_old = $("#version-old");
  var e_resion_jp = $("#resion-jp");
  var e_resion_na = $("#resion-na");
  var e_resion_eu = $("#resion-eu");
  var e_pokemon = $("#pokemon");
  var e_pass_generate = $("#pass-generate");
  var e_context_resionfree = $("#context-resionfree");

  var e_caution = $(".caution");

  // 公開日まで蓋をしておく
  let now = new Date();
  let pub = new Date(2024, 3, 18, 18, 0, 0); // 月は0～11
  if (now < pub) {
    let m = $("#main-container");
    m.empty();
    window.location.href = "index.html";
    return;
  }

  // JSON取得
  await Promise.all([GetPokemonJson(), GetFloorJson()])
    .then((results) => {
      PokemonData = results[0];
    })
    .catch((e) => {
      console.error(e);
    });

  // Select2
  e_pokemon.select2(select2Config);

  // 生成
  e_pass_generate.on("click", function () {
    GeneratePass();
  });
  // バージョン
  $("input[name='version']").on("change", function () {
    let disabled = e_version_old.prop("checked");
    e_resion_jp.prop("disabled", disabled);
    e_resion_na.prop("disabled", disabled);
    e_resion_eu.prop("disabled", disabled);

    if (disabled) {
      e_context_resionfree.show();
    } else {
      e_context_resionfree.hide();
    }
  });
  // ポケモン
  e_pokemon.on("change", function () {
    let msg = "";
    if (e_pokemon.val() == 0) {
      msg = `
      「なにものか」が選択されています。<br>
      依頼を受けることは可能ですが、タマゴを受け取っても消えてしまいます。
      `;
    } else if (e_pokemon.val() % 600 >= 0x245 && e_pokemon.val() % 600 <= 0x257) {
      msg = `
      空きデータの「リザーブ」が選択されています。<br>
      タマゴを孵すことは可能ですが、ダンジョンに連れて行くとフリーズするので注意してください。
      `;
    } else if (e_pokemon.val() == 0x258) {
      msg = `
      第二性別の「なにものか」が選択されています。<br>
      タマゴを孵すことは可能ですが、ダンジョンに連れて行くとフリーズするので注意してください。
      `;
    }

    if (msg.length > 0) {
      e_caution.html(msg);
      e_caution.fadeIn();
    } else {
      e_caution.fadeOut();
    }
  });

  let init = new Promise(async function () {
    AppendPokemon(e_pokemon);
    e_pokemon.val(1).change();
  });

  /**
   * ポケモンをセット (要素指定)
   * @param {*} elem
   */
  function AppendPokemon(elem) {
    let prev = elem.val() != undefined ? elem.val() : 0;
    elem.empty();
    for (let i = 0; i < PokemonData.length * 2; i++) {
      if (PokemonData[i % 600].Genders[Math.floor(i / 600)] == null) break;

      // 性別
      let gender = PokemonData[i % 600].Genders[Math.floor(i / 600)];

      let pokeName = PokemonData[i % 600].Name;
      let subName = PokemonData[i % 600].SubName;
      if (subName.length > 0 && subName != null) pokeName += ` - ${subName}`;
      elem.append(
        `<option value="${i}" data-search="${pokeName}" data-pokeid="${i % 600}" >` +
          `[${("000" + i.toString(16)).slice(-3).toUpperCase()}] ${pokeName} (${poke_gender[gender].name})` +
          `</option>`
      );
    }
    // 値を再度セット
    if (prev >= elem.children().length || prev == undefined) prev = 0;
    elem.val(prev);
  }

  /**
   * パスワード生成
   */
  function GeneratePass() {
    let sky = e_version_sky.prop("checked");
    let resion = GetResion();
    let mission = new WonderMail();

    // SEEDランダム
    let randomSeedVal = Math.floor(Math.random() * 0xffffff);

    mission.Status = 4;
    mission.MissionType = 0x6;
    mission.MissionFlag = 0x0;
    mission.RewardType = 0x5;
    mission.RewardValue = e_pokemon.val() ?? 0;
    mission.Client = 0x11e;
    mission.Target1 = 0x11e;
    mission.Target2 = 0x000;
    mission.TargetItem = 0x05c;
    mission.Dungeon = 0x5b;
    mission.Floor = 0x00;
    mission.Fixed = 0x00;
    mission.RestType = 0x00;
    mission.RestValue = 0x00;
    mission.Seed = randomSeedVal;
    mission.Encode(sky, resion);

    let res = "";
    if (sky) {
      res = ConvertToMultiFormat(mission.Password, 5, 7, 5);
    } else {
      res = ConvertToMultiFormat(mission.Password, 4, 4, 4);
    }
    e_pass_area.val(res);
  }
  /**
   * リージョン取得
   * @returns
   */
  function GetResion() {
    let res = "";
    if (e_resion_jp.prop("checked")) res = "JP";
    else if (e_resion_na.prop("checked")) res = "NA";
    else if (e_resion_eu.prop("checked")) res = "EU";
    return res;
  }
});
