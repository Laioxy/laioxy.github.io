(() => {
  // ns-hugo-imp:F:\Git\laioxy.github.io\assets\js\json_script.js
  var jsonPathsArray = {
    pokemon: "/data/pokemon.min.json",
    item: "/data/item.min.json",
    move: "/data/move.min.json",
    dungeon: "/data/dungeon.min.json",
    floor: "/data/floor.min.json",
    mappa_s: "/data/mappa_s.min.json",
    mappa_t: "/data/mappa_t.min.json",
    mappa_y: "/data/mappa_y.min.json",
    fixed: "/data/fixed.min.json",
    message: "/data/message.min.json",
    type: "/data/type.min.json",
    iqgroup: "/data/iqgroup.min.json",
    rescue: "/data/rescue.min.json"
  };
  async function getJsonData(key) {
    try {
      return await fetch(jsonPathsArray[key]).then((res) => res.json());
    } catch (e) {
      console.error("getJsonData Failed: ", e);
      return null;
    }
  }

  // ns-hugo-imp:F:\Git\laioxy.github.io\assets\js\param.js
  var CAFE_RECRUIT_TABLE = [
    10,
    13,
    27,
    41,
    43,
    46,
    54,
    60,
    66,
    72,
    74,
    81,
    83,
    84,
    86,
    88,
    90,
    92,
    95,
    96,
    98,
    104,
    109,
    111,
    114,
    120,
    127,
    128,
    132,
    137,
    138,
    140,
    142,
    147,
    163,
    167,
    172,
    177,
    179,
    187,
    193,
    194,
    200,
    230,
    231,
    233,
    236,
    240,
    245,
    247,
    249,
    254,
    255,
    258,
    261,
    262,
    266,
    267,
    273,
    291,
    298,
    306,
    308,
    311,
    313,
    318,
    331,
    332,
    337,
    339,
    340,
    341,
    342,
    350,
    356,
    359,
    364,
    365,
    366,
    367,
    371,
    373,
    375,
    389,
    391,
    395,
    403,
    406,
    431,
    436,
    441,
    443,
    445,
    447,
    454,
    456,
    459,
    462,
    463,
    467,
    469,
    473,
    475,
    478,
    480,
    491,
    493,
    497
  ];
  var SCENARIO_STRINGS = [
    "-",
    "Chapter-5\u4EE5\u964D",
    "Chapter-10\u4EE5\u964D",
    "Chapter-11\u4EE5\u964D",
    "Chapter-19\u4EE5\u964D",
    "\u30A8\u30F3\u30C7\u30A3\u30F3\u30B0\u5F8C",
    "\u30AE\u30EB\u30C9\u5352\u696D\u5F8C",
    "\u3046\u307F\u306E\u30EA\u30BE\u30FC\u30C8\u89E3\u7981\u5F8C"
  ];

  // <stdin>
  var spawnData;
  var bannedPokemonIds = [
    279,
    // 桃セレビィ
    380,
    // 雪ポワルン
    381,
    // 晴ポワルン
    382,
    // 雨ポワルン
    384,
    // 紫カクレオン
    419,
    // AFデオキシス
    420,
    // DFデオキシス
    421,
    // SPデオキシス
    461
    // ポジチェリム
  ];
  var evolve2String = [
    "-",
    "\u3064\u3046\u3057\u3093\u30B1\u30FC\u30D6\u30EB",
    "\u653B\u6483\uFF1E\u9632\u5FA1",
    "\u9632\u5FA1\uFF1E\u653B\u6483",
    "\u653B\u6483\uFF1D\u9632\u5FA1",
    "\u305F\u3044\u3088\u3046\u306E\u30EA\u30DC\u30F3",
    "\u3052\u3063\u3053\u3046\u306E\u30EA\u30DC\u30F3",
    "\u3046\u3064\u304F\u3057\u30B9\u30AB\u30FC\u30D5",
    "\u30E9\u30F3\u30C0\u30E0",
    "\u30E9\u30F3\u30C0\u30E0",
    "\u30AA\u30B9",
    "\u30E1\u30B9",
    "\u3052\u3093\u3057\u306E\u3061\u304B\u3089\u7FD2\u5F97",
    "\u3053\u308D\u304C\u308B\u7FD2\u5F97",
    "\u30C0\u30D6\u30EB\u30A2\u30BF\u30C3\u30AF\u7FD2\u5F97",
    "\u3082\u306E\u307E\u306D\u7FD2\u5F97"
  ];
  var eventRectuit = [
    {
      id: 144,
      context: "\u300C\u306A\u3060\u308C\u3084\u307E \u3061\u3087\u3046\u3058\u3087\u3046\u300D\u3067\u30D5\u30EA\u30FC\u30B6\u30FC\u3092\u5012\u3059 (50%)"
    },
    {
      id: 150,
      context: "\u30DF\u30E5\u30A6\u30C4\u30FC\u304B\u3089\u306E\u6311\u6226\u72B6\u3092\u53D7\u3051\u308B \u203B\u3066\u3093\u304F\u3046\u306E\u304B\u3044\u3060\u3093\u8981\u89E3\u7981"
    },
    {
      id: 151,
      context: "\u300C\u30DF\u30B9\u30C6\u30EA\u30FC\u30B8\u30E3\u30F3\u30B0\u30EB \u304A\u304F\u3061\u300D\u3067\u30DF\u30E5\u30A6\u3092\u5012\u3059 (50%)"
    },
    {
      id: 270,
      context: "\u30E9\u30A4\u30B3\u30A6\u304B\u3089\u306E\u6311\u6226\u72B6\u3092\u53D7\u3051\u308B \u203B\u306A\u3093\u3068\u3046\u3057\u3087\u3068\u3046\u8981\u89E3\u7981"
    },
    {
      id: 271,
      context: "\u30A8\u30F3\u30C6\u30A4\u304B\u3089\u306E\u6311\u6226\u72B6\u3092\u53D7\u3051\u308B \u203B\u308C\u3063\u304B\u306E\u3069\u3046\u304F\u3064\u8981\u89E3\u7981"
    },
    {
      id: 272,
      context: "\u30B9\u30A4\u30AF\u30F3\u304B\u3089\u306E\u6311\u6226\u72B6\u3092\u53D7\u3051\u308B \u203B\u307E\u306E\u304B\u3044\u3044\u304D\u8981\u89E3\u7981"
    },
    {
      id: 409,
      context: "2\u5468\u76EE\u4EE5\u964D\u300C\u3070\u3093\u306B\u3093\u306E\u3069\u3046\u304F\u3064 \u30EC\u30B8\u30ED\u30C3\u30AF\u306E\u307E\u300D\u3067\u30EC\u30B8\u30ED\u30C3\u30AF\u3092\u5012\u3059 (50%)"
    },
    {
      id: 410,
      context: "2\u5468\u76EE\u4EE5\u964D\u300C\u3070\u3093\u306B\u3093\u306E\u3069\u3046\u304F\u3064 \u30EC\u30B8\u30A2\u30A4\u30B9\u306E\u307E\u300D\u3067\u30EC\u30B8\u30A2\u30A4\u30B9\u3092\u5012\u3059 (50%)"
    },
    {
      id: 411,
      context: "2\u5468\u76EE\u4EE5\u964D\u300C\u3070\u3093\u306B\u3093\u306E\u3069\u3046\u304F\u3064 \u30EC\u30B8\u30B9\u30C1\u30EB\u306E\u307E\u300D\u3067\u30EC\u30B8\u30B9\u30C1\u30EB\u3092\u5012\u3059 (50%)"
    },
    {
      id: 414,
      context: "\u300C\u305D\u3053\u306A\u3057\u3046\u307F \u304A\u304F\u305D\u3053\u300D\u3067\u30AB\u30A4\u30AA\u30FC\u30AC\u3092\u5012\u3059 (50%)"
    },
    {
      id: 415,
      context: "\u300C\u304B\u3052\u308D\u3046\u306E\u3055\u3070\u304F \u304A\u304F\u3061\u300D\u3067\u30B0\u30E9\u30FC\u30C9\u30F3\u3092\u5012\u3059 (50%)"
    },
    {
      id: 416,
      context: "\u300C\u3066\u3093\u304F\u3046\u306E\u304B\u3044\u3060\u3093 \u3061\u3087\u3046\u3058\u3087\u3046\u300D\u3067\u30EC\u30C3\u30AF\u30A6\u30B6\u3092\u5012\u3059 (50%)"
    },
    {
      id: 417,
      context: "\u30B8\u30E9\u30FC\u30C1\u304B\u3089\u306E\u6311\u6226\u72B6\u3092\u53D7\u3051\u308B \u203BSE1\u300C\u30D3\u30C3\u30D1\u306E\u306D\u304C\u3044\u3054\u3068\u300D\u8981\u30AF\u30EA\u30A2"
    },
    {
      id: 522,
      context: "\u672C\u7DE8\u30AF\u30EA\u30A2\u5F8C\u300C\u306D\u3063\u3059\u3044\u306E\u3069\u3046\u304F\u3064 \u3061\u3087\u3046\u3058\u3087\u3046\u300D\u3067\u30E6\u30AF\u30B7\u30FC\u3092\u5012\u3059"
    },
    {
      id: 523,
      context: "\u672C\u7DE8\u30AF\u30EA\u30A2\u5F8C\u300C\u3061\u3066\u3044\u306E\u307F\u305A\u3046\u307F (\u308A\u3085\u3046\u3055\u306E\u3069\u3046\u304F\u3064)\u300D\u3067\u30A8\u30E0\u30EA\u30C3\u30C8\u3092\u5012\u3059"
    },
    {
      id: 524,
      context: "\u672C\u7DE8\u30AF\u30EA\u30A2\u5F8C\u300C\u3059\u3044\u3057\u3087\u3046\u306E\u307F\u305A\u3046\u307F (\u3060\u3044\u3059\u3044\u3057\u3087\u3046\u306E\u307F\u3061)\u300D\u3067\u30A2\u30B0\u30CE\u30E0\u3092\u5012\u3059"
    },
    {
      id: 525,
      context: "\u672C\u7DE8\u30AF\u30EA\u30A2\u5F8C\u300C\u3058\u3052\u3093\u306E\u3068\u3046 \u3061\u3087\u3046\u3058\u3087\u3046\u300D\u3067\u30C7\u30A3\u30A2\u30EB\u30AC\u3092\u5012\u3059"
    },
    {
      id: 526,
      context: "\u30C0\u30FC\u30AF\u30E9\u30A4\u6483\u7834\u5F8C\u300C\u305D\u3089\u306E\u3055\u3051\u3081 \u304A\u304F\u305D\u3053\u300D\u3067\u30D1\u30EB\u30AD\u30A2\u3092\u5012\u3059"
    },
    {
      id: 527,
      context: "\u300C\u304D\u3087\u3060\u3044\u304B\u3056\u3093 \u3061\u3087\u3046\u3058\u3087\u3046\u300D\u3067\u30D2\u30FC\u30C9\u30E9\u30F3\u3092\u5012\u3059 (50%)"
    },
    {
      id: 528,
      context: "\u300C\u3070\u3093\u306B\u3093\u306E\u3069\u3046\u304F\u3064 \u30EC\u30B8\u30AE\u30AC\u30B9\u306E\u307E\u300D\u3067\u30EC\u30B8\u30AE\u30AC\u30B9\u3092\u5012\u3059"
    },
    {
      id: 529,
      context: "\u300C\u305B\u304B\u3044\u306E\u304A\u304A\u3042\u306A \u304A\u304F\u305D\u3053\u300D\u3067\u30AE\u30E9\u30C6\u30A3\u30CA\u3092\u5012\u3059 (50%)"
    },
    {
      id: 530,
      context: "\u30C0\u30FC\u30AF\u30E9\u30A4\u6483\u7834\u5F8C\u3001\u30B5\u30E1\u30CF\u30C0\u3044\u308F\u3067\u30AF\u30EC\u30BB\u30EA\u30A2\u3068\u8A71\u3059"
    },
    {
      id: 531,
      context: "\u304D\u305B\u304D\u306E\u3046\u307F\u30AF\u30EA\u30A2\u5F8C\u3001\u518D\u5EA6\u300C\u304D\u305B\u304D\u306E\u3046\u307F \u304A\u304F\u305D\u3053\u300D\u3078\u5411\u304B\u3046"
    },
    {
      id: 532,
      context: "\u30C0\u30FC\u30AF\u30E9\u30A4\u6483\u7834\u5F8C\u3001\u4F9D\u983C\u30923\u65E5\u5206\u3053\u306A\u3059"
    },
    {
      id: 534,
      context: "\u305D\u3089\u306E\u3044\u305F\u3060\u304D\u30AF\u30EA\u30A2\u5F8C\u3001\u518D\u5EA6\u300C\u305D\u3089\u306E\u3044\u305F\u3060\u304D \u3061\u3087\u3046\u3058\u3087\u3046\u300D\u3078\u5411\u304B\u3046"
    }
  ];
  function getUnownSuffix(index) {
    if (index < 25) {
      return "-" + String.fromCharCode(97 + index + 1);
    } else if (index === 25) {
      return "-exclamation";
    } else {
      return "-question";
    }
  }
  var checkPokemonData = [
    // Regular Pokemon 1-492 (except 412, 413, 422, 423)
    ...Array.from({ length: 492 }, (_, i) => {
      const id = i + 1;
      if ([412, 413, 422, 423].includes(id)) return null;
      return {
        baseId: id,
        formId: 0,
        sortId: id,
        imageSuffix: ""
      };
    }).filter((x) => x !== null),
    // Unown forms (B-Z, !, ?)
    ...Array.from({ length: 27 }, (_, i) => ({
      baseId: 201,
      formId: i + 1,
      sortId: 201 + (i + 1) / 100,
      imageSuffix: getUnownSuffix(i)
    })),
    // Burmy/Wormadam forms (Sandy, Grass, Trash)
    { baseId: 412, formId: 1, sortId: 412, imageSuffix: "-sandy" },
    { baseId: 412, formId: 0, sortId: 412.1, imageSuffix: "" },
    { baseId: 412, formId: 2, sortId: 412.2, imageSuffix: "-trash" },
    { baseId: 413, formId: 1, sortId: 413, imageSuffix: "-sandy" },
    { baseId: 413, formId: 0, sortId: 413.1, imageSuffix: "" },
    { baseId: 413, formId: 2, sortId: 413.2, imageSuffix: "-trash" },
    // Shellos/Gastrodon forms
    { baseId: 422, formId: 1, sortId: 422, imageSuffix: "-east" },
    { baseId: 422, formId: 0, sortId: 422.1, imageSuffix: "" },
    { baseId: 423, formId: 1, sortId: 423, imageSuffix: "-east" },
    { baseId: 423, formId: 0, sortId: 423.1, imageSuffix: "" }
  ].sort((a, b) => a.sortId - b.sortId);
  async function loadPokemon() {
    await fetchJsonData();
    const container = document.getElementById("pokemon-list");
    container.innerHTML = "";
    for (let [i, pokemon] of checkPokemonData.entries()) {
      const div = parseHTML(`
      <div
        class="pokemon-grid"
        data-base-id="${pokemon.baseId}"
        data-form-id="${pokemon.formId}"
        data-id="${indexToPokemonId(i)}"
        style="background-image: url(${getPokemonSpriteUrl(i)})"
      ><div>
      `);
      container.appendChild(div);
      div.addEventListener("click", () => {
        togglePokemonChecked(div);
      });
    }
    spawnData = generateSpawnData();
    createGuide();
    createRecruitDungeon();
    loadState();
    restoreFormSwitch();
    filterFormVariants(document.getElementById("toggleFormSwitch").checked, true);
    updateProgress();
    syncDetailsWithChecker();
    syncDungeonWithChecker();
  }
  function togglePokemonChecked(div) {
    const isSelected = div.classList.contains("checked");
    const pokemonId = div.dataset.id;
    if (isSelected) {
      div.classList.remove("checked");
    } else {
      div.classList.add("checked");
    }
    saveState();
    updateProgress();
    syncDetailsWithChecker();
    syncDungeonWithChecker();
  }
  function saveState() {
    const items = Array.from(document.querySelectorAll("#pokemon-list .pokemon-grid")).sort((a, b) => {
      const baseIdA = parseInt(a.dataset.baseId);
      const baseIdB = parseInt(b.dataset.baseId);
      if (baseIdA !== baseIdB) return baseIdA - baseIdB;
      const formA = parseInt(a.dataset.formId);
      const formB = parseInt(b.dataset.formId);
      return formA - formB;
    });
    let bin = "";
    for (let div of items) {
      bin += div.classList.contains("checked") ? "1" : "0";
    }
    const compressed = LZString.compressToBase64(bin);
    localStorage.setItem("pokemon-checklist", compressed);
  }
  function loadState() {
    const items = Array.from(document.querySelectorAll("#pokemon-list .pokemon-grid")).sort((a, b) => {
      const baseIdA = parseInt(a.dataset.baseId);
      const baseIdB = parseInt(b.dataset.baseId);
      if (baseIdA !== baseIdB) return baseIdA - baseIdB;
      const formA = parseInt(a.dataset.formId);
      const formB = parseInt(b.dataset.formId);
      return formA - formB;
    });
    const compressed = localStorage.getItem("pokemon-checklist");
    const bin = LZString.decompressFromBase64(compressed);
    if (!bin || bin.length !== items.length) return;
    for (let i = 0; i < items.length; ++i) {
      if (bin[i] == "1") {
        items[i].classList.add("checked");
      } else {
        items[i].classList.remove("checked");
      }
    }
  }
  function saveFormSwitchState(checked) {
    localStorage.setItem("pokemon-checklist-formSwitch", checked ? "1" : "0");
  }
  function restoreFormSwitch() {
    const toggleFormSwitch = document.getElementById("toggleFormSwitch");
    const saved = localStorage.getItem("pokemon-checklist-formSwitch");
    if (toggleFormSwitch && saved !== null) {
      toggleFormSwitch.checked = saved === "1";
    }
  }
  function updateProgress() {
    const excludeForm = document.getElementById("toggleFormSwitch")?.checked;
    const items = Array.from(document.querySelectorAll("#pokemon-list .pokemon-grid")).filter(
      (div) => !excludeForm || div.dataset.formId === "0"
    );
    let checked = 0;
    for (let div of items) {
      if (div.classList.contains("checked")) checked++;
    }
    let percent = Math.floor(checked / items.length * 100);
    if (checked === items.length && items.length > 0) percent = 100;
    const bar = document.getElementById("progress-bar");
    const percentText = document.getElementById("progress-percent");
    const countText = document.getElementById("progress-count");
    bar.style.width = percent + "%";
    bar.setAttribute("aria-valuenow", percent);
    percentText.textContent = percent + "%";
    countText.textContent = checked + "/" + items.length;
    if (percent === 100) {
      bar.classList.remove("bg-primary");
      bar.classList.add("bg-warning");
    } else {
      bar.classList.add("bg-primary");
      bar.classList.remove("bg-warning");
    }
  }
  var exportModal;
  var importModal;
  document.addEventListener("DOMContentLoaded", () => {
    exportModal = new bootstrap.Modal(document.getElementById("exportModal"));
    importModal = new bootstrap.Modal(document.getElementById("importModal"));
    document.getElementById("export-btn").onclick = showExportModal;
    document.getElementById("import-btn").onclick = showImportModal;
    document.getElementById("importForm").onsubmit = handleImport;
    const collapse = document.getElementById("collapseImportExport");
    const arrow = document.getElementById("accordionArrow");
    collapse.addEventListener("show.bs.collapse", () => {
      arrow.style.transform = "rotate(180deg)";
    });
    collapse.addEventListener("hide.bs.collapse", () => {
      arrow.style.transform = "rotate(0deg)";
    });
    document.getElementById("mark-all-btn").onclick = () => {
      showConfirmModal("\u3059\u3079\u3066\u30C1\u30A7\u30C3\u30AF\u3057\u307E\u3059\u304B\uFF1F<br>\u30C1\u30A7\u30C3\u30AF\u3057\u305F\u5185\u5BB9\u306F\u5931\u308F\u308C\u307E\u3059\u3002", () => {
        setAllMarked(true);
      });
    };
    document.getElementById("unmark-all-btn").onclick = () => {
      showConfirmModal("\u3059\u3079\u3066\u89E3\u9664\u3057\u307E\u3059\u304B\uFF1F<br>\u30C1\u30A7\u30C3\u30AF\u3057\u305F\u5185\u5BB9\u306F\u5931\u308F\u308C\u307E\u3059\u3002", () => {
        setAllMarked(false);
      });
    };
    const toggleFormSwitch = document.getElementById("toggleFormSwitch");
    if (toggleFormSwitch) {
      toggleFormSwitch.addEventListener("change", () => {
        saveFormSwitchState(toggleFormSwitch.checked);
        filterFormVariants(toggleFormSwitch.checked, false);
        updateProgress();
      });
    }
  });
  function showExportModal() {
    const data = localStorage.getItem("pokemon-checklist") || "";
    document.getElementById("exportTextarea").value = data;
    exportModal.show();
  }
  function showImportModal() {
    document.getElementById("importTextarea").value = "";
    document.getElementById("importError").style.display = "none";
    importModal.show();
  }
  function handleImport(e) {
    e.preventDefault();
    const textarea = document.getElementById("importTextarea");
    const errorDiv = document.getElementById("importError");
    let value = textarea.value.trim();
    const bin = LZString.decompressFromBase64(value);
    const itemsLen = document.querySelectorAll("#pokemon-list .pokemon-grid").length;
    if (!/^[01]+$/i.test(bin) || bin.length !== itemsLen) {
      errorDiv.textContent = "\u30A4\u30F3\u30DD\u30FC\u30C8\u5931\u6557: \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\u3002";
      errorDiv.style.display = "block";
      return;
    }
    localStorage.setItem("pokemon-checklist", value);
    importModal.hide();
    loadState();
    updateProgress();
    syncDetailsWithChecker();
    syncDungeonWithChecker();
  }
  function setAllMarked(marked) {
    const items = document.querySelectorAll("#pokemon-list .pokemon-grid");
    let bin = "";
    for (let div of items) {
      bin += marked ? "1" : "0";
    }
    const compressed = LZString.compressToBase64(bin);
    localStorage.setItem("pokemon-checklist", compressed);
    loadState();
    updateProgress();
    syncDetailsWithChecker();
    syncDungeonWithChecker();
  }
  var confirmModal;
  function showConfirmModal(message, okCallback) {
    document.getElementById("confirmModalBody").innerHTML = message;
    confirmModal = confirmModal || new bootstrap.Modal(document.getElementById("confirmModal"));
    confirmModal.show();
    const okBtn = document.getElementById("confirmModalOkBtn");
    okBtn.onclick = function() {
      confirmModal.hide();
      okCallback();
    };
  }
  function filterFormVariants(excludeForm, initial) {
    const items = document.querySelectorAll("#pokemon-list .pokemon-grid");
    for (let div of items) {
      if (excludeForm && div.dataset.formId !== "0") {
        div.style.display = "none";
      } else {
        div.style.display = "";
      }
    }
    filterDetailsFormVariants(excludeForm);
  }
  function filterDetailsFormVariants(excludeForm) {
    const detailsItems = document.querySelectorAll(".recruit-pokemon-grid");
    detailsItems.forEach((div) => {
      const id = div.dataset.id;
      const checkerDiv = document.querySelector(`.pokemon-grid[data-id="${id}"]`);
      if (checkerDiv) {
        const formId = parseInt(checkerDiv.dataset.formId);
        if (excludeForm && formId !== 0) {
          div.style.display = "none";
        } else {
          const isChecked = checkerDiv.classList.contains("checked");
          div.style.display = isChecked ? "none" : "";
        }
      }
    });
  }
  function indexToPokemonId(indexId) {
    const formIds = [
      [439, 447],
      // 砂ミノムッチ
      [438, 448],
      // 草ミノムッチ
      [440, 449],
      // 鋼ミノムッチ
      [442, 450],
      // 砂ミノマダム
      [441, 451],
      // 草ミノマダム
      [443, 452],
      // 鋼ミノマダム
      [453, 462],
      // 東カラナクシ
      [452, 463],
      // 西カラナクシ
      [455, 464],
      // 東トリトドン
      [454, 465]
      // 西トリトドン
    ];
    let id = indexId + 1;
    for (const formId of formIds) {
      if (indexId == formId[0]) {
        return formId[1];
      }
    }
    for (const jumpId of bannedPokemonIds) {
      if (id >= jumpId) id++;
      else break;
    }
    return id;
  }
  function pokemonIdToIndex(pokemonId) {
    let id = pokemonId;
    const formIds = [
      [439, 447],
      // 砂ミノムッチ
      [438, 448],
      // 草ミノムッチ
      [440, 449],
      // 鋼ミノムッチ
      [442, 450],
      // 砂ミノマダム
      [441, 451],
      // 草ミノマダム
      [443, 452],
      // 鋼ミノマダム
      [453, 462],
      // 東カラナクシ
      [452, 463],
      // 西カラナクシ
      [455, 464],
      // 東トリトドン
      [454, 465]
      // 西トリトドン
    ];
    for (const [baseId, altId] of formIds) {
      if (pokemonId === altId) {
        return baseId;
      }
    }
    for (let i = bannedPokemonIds.length - 1; i >= 0; i--) {
      const jumpId = bannedPokemonIds[i];
      if (id > jumpId) id--;
    }
    return id - 1;
  }
  function generateSpawnData() {
    const data = [];
    const banned = [380, 381, 382];
    const dungeons = DungeonData.filter(
      (r) => r.Id <= 191 && r.Id != 9 && r.Id != 11 && r.Id != 13 && !isUnusedDungeon(r.Id) && r.FlagRecruit
    );
    for (const dungeon of dungeons) {
      const dungeonName = dungeon.InName;
      const mappaIndex = parseInt(dungeon.MappaIndex);
      const floorPrev = parseInt(dungeon.FloorPrev);
      const floorCount = parseInt(dungeon.FloorCount);
      const floors = FloorData[mappaIndex].slice(floorPrev + 1, floorPrev + 1 + floorCount).filter((r) => r.FixedFloorId == 0 || r.FixedFloorId >= 170);
      if (floors.length > 0) {
        for (const floor of floors) {
          const enemyTableId = parseInt(floor.IndexGroup.SpawnEnemy);
          const enemies = MappaSData.EnemyData[enemyTableId];
          for (const enemy of enemies) {
            const pokemonId = parseInt(enemy.PokemonId);
            if (banned.includes(pokemonId)) continue;
            if (pokemonId == 383 && !(floor.ChanceKecleonShop > 0 && floor.FixedFloorId == 0 && floor.ChanceMonsterHouse < 100)) {
              continue;
            }
            if (pokemonId == 553) continue;
            data.push({
              dungeon: parseInt(dungeon.Id),
              dungeonName,
              floor: parseInt(floor.FloorNo) - floorPrev,
              level: parseInt(enemy.Level),
              pokemonId
            });
          }
        }
      }
    }
    return data;
  }
  function generateRecruitData() {
    const datas = [];
    for (let i = 0; i < checkPokemonData.length; i++) {
      const id = indexToPokemonId(i);
      const data = {
        id,
        name: PokemonData[id].Name,
        subname: PokemonData[id].SubName,
        evolText: getEvolTextData(id),
        recruit: spawnData.filter((r) => r.pokemonId == id)
      };
      datas.push(data);
    }
    return datas;
  }
  function createGuide() {
    const recruitData = generateRecruitData();
    const ids = [];
    const wrapElement = document.getElementById("recruit-pokemon");
    for (let i = 0; i < checkPokemonData.length; i++) {
      const id = indexToPokemonId(i);
      const spawn = recruitData.find((r) => r.id == id);
      ids.push(id);
      const pokemon = PokemonData[id];
      const gridHtml = `
      <div class="recruit-pokemon-grid rounded" data-id="${id}">
        <div class="recruit-pokemon-grid-inner">
          <h6>
            <img class="recruit-pokemon-img" src="${getPokemonSpriteUrl(i)}">
            <span>${pokemon.Name}${pokemon.SubName ? `(${pokemon.SubName})` : ""}</span>
          </h6>
          <p class="recruit-rate small-text">
            <span>\u57FA\u790E\u52E7\u8A98\u7387: ${(pokemon.RecruitRate1 / 10).toFixed(1)}%${pokemon.RecruitRate1 != pokemon.RecruitRate2 ? ` (${(pokemon.RecruitRate2 / 10).toFixed(1)}%)` : ""}
          </p>
        </div>
      </div>
    `;
      const grid = parseHTML(gridHtml);
      const inner = grid.querySelector(".recruit-pokemon-grid-inner");
      const divRecruitWrap = document.createElement("div");
      divRecruitWrap.classList.add("recruit-wrap", "small-text");
      if (spawn.evolText.length > 0) {
        divRecruitWrap.innerHTML = `
      <p class="mb-1">
        <span class="badge text-bg-danger me-1">\u9032\u5316</span>${spawn.evolText}
      </p>`;
      }
      const dungeonGroups = /* @__PURE__ */ new Map();
      for (const item of spawn.recruit) {
        const dungeonId = item.dungeon;
        if (!dungeonGroups.has(dungeonId)) {
          dungeonGroups.set(dungeonId, []);
        }
        dungeonGroups.get(dungeonId).push(item);
      }
      const recruitGroups = {};
      for (const [dungeonId, items] of dungeonGroups.entries()) {
        const sorted = items.slice().sort((a, b) => a.floor - b.floor);
        const groups = [];
        let current = [sorted[0]];
        for (let i2 = 1; i2 < sorted.length; i2++) {
          const prev = sorted[i2 - 1].floor;
          const cur = sorted[i2].floor;
          if (cur === prev + 1) {
            current.push(sorted[i2]);
          } else {
            groups.push(current);
            current = [sorted[i2]];
          }
        }
        groups.push(current);
        recruitGroups[dungeonId] = groups;
      }
      for (const [dungeonId, group] of Object.entries(recruitGroups)) {
        const dungeon = DungeonData[dungeonId];
        const elementHtml = `
        <p class="mb-1">
          <span class="badge text-bg-primary me-1">\u52E7\u8A98</span>
          ${// 道具必須の場合なぞのパーツアイコン表示
        pokemon.Bit_ItemRequiredSpawning ? '<span class="item-sprite sprite-18-3"></span>' : ""}
          ${dungeon.InName}
        </p>
      `;
        const element = parseHTML(elementHtml);
        const floorGroupArr = [];
        for (const floorGroup of group) {
          const min = Math.min(...floorGroup.map((x) => x.floor));
          const max = Math.max(...floorGroup.map((x) => x.floor));
          const stairs = dungeon.FlagStairs ? "" : "B";
          floorGroupArr.push(min != max ? `${stairs}${min}F\uFF5E${stairs}${max}F` : `${stairs}${min}F`);
        }
        element.innerHTML += ` ${floorGroupArr.join(", ")}`;
        divRecruitWrap.appendChild(element);
      }
      const event = eventRectuit.find((r) => r.id == id);
      if (event) {
        const p = document.createElement("p");
        p.classList.add("mb-1");
        p.innerHTML += `<span class="badge bg-indigo me-1">\u30A4\u30D9\u30F3\u30C8</span>${event.context}`;
        divRecruitWrap.appendChild(p);
      }
      if (CAFE_RECRUIT_TABLE.includes(id)) {
        divRecruitWrap.appendChild(
          parseHTML(`
          <p class="mb-1 cafe">
            <span class="badge text-bg-secondary me-1">\u30AB\u30D5\u30A7</span>
            \u30C9\u30EA\u30F3\u30AF\u3092\u98F2\u3093\u3067\u78BA\u7387\u3067\u52E7\u8A98
          </p>
        `)
        );
      }
      const scenario = parseHTML(`<p class="small-text mb-1 fw-bold"></p>`);
      if (Object.keys(recruitGroups).length > 0 && pokemon.UnlockScenario > 0) {
        scenario.textContent = `\u203B${SCENARIO_STRINGS[pokemon.UnlockScenario]}\u306B\u51FA\u73FE`;
      }
      const btnCheck = document.createElement("span");
      btnCheck.classList.add("recruit-check");
      btnCheck.innerHTML = '<i class="bi bi-check2-circle"></i>';
      btnCheck.dataset.isAnimating = "false";
      btnCheck.addEventListener("click", (e) => {
        if (btnCheck.dataset.isAnimating === "true") return;
        const checkerItem = document.querySelector(`.pokemon-grid[data-id="${id}"]`);
        if (checkerItem) {
          btnCheck.dataset.isAnimating = "true";
          togglePokemonChecked(checkerItem);
        }
      });
      inner.appendChild(divRecruitWrap);
      inner.appendChild(scenario);
      inner.appendChild(btnCheck);
      grid.appendChild(inner);
      wrapElement.appendChild(grid);
    }
  }
  function syncDetailsWithChecker() {
    const detailsItems = document.querySelectorAll(".recruit-pokemon-grid");
    const excludeForm = document.getElementById("toggleFormSwitch")?.checked;
    const detailTab = document.getElementById("detail-tab-pane");
    const isDetailTabVisible = detailTab && detailTab.classList.contains("show");
    detailsItems.forEach((detailDiv) => {
      const id = detailDiv.dataset.id;
      const checkerDiv = document.querySelector(`.pokemon-grid[data-id="${id}"]`);
      const btnCheck = detailDiv.querySelector(".recruit-check");
      const formId = parseInt(checkerDiv.dataset.formId);
      if (checkerDiv) {
        if (excludeForm && formId !== 0) {
          detailDiv.style.display = "none";
          return;
        }
        const isChecked = checkerDiv.classList.contains("checked");
        if (isChecked) {
          if (isDetailTabVisible) {
            const itemHeight = detailDiv.offsetHeight;
            detailDiv.style.setProperty("--item-height", itemHeight + "px");
            detailDiv.classList.add("hiding");
            detailDiv.addEventListener(
              "animationend",
              () => {
                detailDiv.style.display = "none";
                detailDiv.classList.remove("hiding");
                if (btnCheck) {
                  btnCheck.dataset.isAnimating = "false";
                }
              },
              { once: true }
            );
          } else {
            detailDiv.style.display = "none";
            if (btnCheck) {
              btnCheck.dataset.isAnimating = "false";
            }
          }
        } else {
          detailDiv.style.display = "";
          detailDiv.classList.remove("hiding");
          if (btnCheck) {
            btnCheck.dataset.isAnimating = "false";
          }
        }
      }
    });
  }
  function generateSpawnGroup() {
    const dungeonMap = /* @__PURE__ */ new Map();
    for (const item of spawnData) {
      if (!dungeonMap.has(item.dungeon)) {
        dungeonMap.set(item.dungeon, []);
      }
      dungeonMap.get(item.dungeon).push(item);
    }
    const result = {};
    for (const [dungeon, dungeonItems] of dungeonMap.entries()) {
      const pokemonMap = /* @__PURE__ */ new Map();
      for (const item of dungeonItems) {
        if (!pokemonMap.has(item.pokemonId)) {
          pokemonMap.set(item.pokemonId, {
            pokemonId: item.pokemonId,
            dungeonName: item.dungeonName,
            items: []
          });
        }
        pokemonMap.get(item.pokemonId).items.push(item);
      }
      const pokemonGroups = [];
      for (const group of pokemonMap.values()) {
        const sorted = group.items.slice().sort((a, b) => a.floor - b.floor);
        const floorGroups = [];
        let current = [];
        for (const item of sorted) {
          if (current.length === 0) {
            current.push(item);
          } else {
            const prev = current[current.length - 1];
            if (item.floor === prev.floor + 1) {
              current.push(item);
            } else {
              floorGroups.push(current);
              current = [item];
            }
          }
        }
        if (current.length) floorGroups.push(current);
        const floors = floorGroups.map((g) => g.map((x) => x.floor));
        const levelRanges = floorGroups.map((g) => {
          const levels = g.map((x) => x.level);
          return {
            minLevel: Math.min(...levels),
            maxLevel: Math.max(...levels)
          };
        });
        pokemonGroups.push({
          pokemonId: group.pokemonId,
          dungeonName: group.dungeonName,
          floors,
          levelRanges
        });
      }
      result[dungeon] = pokemonGroups.sort((a, b) => a.pokemonId - b.pokemonId).filter((x) => x.pokemonId != 383).concat(pokemonGroups.filter((x) => x.pokemonId == 383));
    }
    return result;
  }
  function createRecruitDungeon() {
    const spawnGroup = generateSpawnGroup();
    const recruitDungeonWrap = document.getElementById("recruit-dungeon");
    for (const dungeonId in spawnGroup) {
      const dungeonName = DungeonData[dungeonId].InName;
      const dungeonGridHtml = `
        <div class="recruit-dungeon-grid rounded">
          <p class="dungeon-name">${dungeonName}</p>
          <div class="pokemon-grid-wrap">
          </div>
        </div>`;
      const dungeonGridElement = parseHTML(dungeonGridHtml);
      const pokemonGridWrapElement = dungeonGridElement.querySelector(".pokemon-grid-wrap");
      for (const spawn of spawnGroup[dungeonId]) {
        const pokemonId = spawn.pokemonId;
        const indexId = pokemonIdToIndex(pokemonId);
        const pokemonGridHtml = `
        <div class="pokemon-grid position-relative" data-id="${pokemonId}"
          style="background-image: url(${getPokemonSpriteUrl(indexId)})">
        </div>
      `;
        const pokemonGrid = parseHTML(pokemonGridHtml);
        pokemonGrid.addEventListener("click", function() {
          const checkerGrid = document.querySelector(`#pokemon-list .pokemon-grid[data-id="${pokemonId}"]`);
          if (checkerGrid) {
            togglePokemonChecked(checkerGrid);
          }
        });
        pokemonGridWrapElement.appendChild(pokemonGrid);
      }
      recruitDungeonWrap.appendChild(dungeonGridElement);
    }
  }
  function syncDungeonWithChecker() {
    const dungeonGrids = document.querySelectorAll("#recruit-dungeon .pokemon-grid");
    dungeonGrids.forEach((grid) => {
      const pokemonId = grid.dataset.id;
      const checkerGrid = document.querySelector(`#pokemon-list .pokemon-grid[data-id="${pokemonId}"]`);
      if (checkerGrid && checkerGrid.classList.contains("checked")) {
        grid.classList.add("checked");
      } else {
        grid.classList.remove("checked");
      }
    });
  }
  function getEvolTextData(id) {
    const pokemon = PokemonData[id];
    const prevEvol = PokemonData[parseInt(pokemon.PreEvoIndex)];
    const evolMethod = parseInt(pokemon.EvoMethod);
    const evolParam = [parseInt(pokemon.EvoParam1), parseInt(pokemon.EvoParam2)];
    let text = "";
    if (prevEvol.Id > 0) {
      const prevEvolName = prevEvol.Name;
      let evolStr = "";
      switch (evolMethod) {
        case 0:
          evolStr = `\u9032\u5316\u3067\u81EA\u52D5\u7684\u306B\u52A0\u5165`;
          break;
        case 1:
          evolStr = `Lv${evolParam[0]}`;
          break;
        case 2:
          evolStr = `\u304B\u3057\u3053\u3055\u2605${getIQStarCount(evolParam[0]).toFixed(1)}(${evolParam[0]})\u4EE5\u4E0A`;
          break;
        case 3:
          const itemStr = ItemData[evolParam[0]].Name;
          evolStr = `${itemStr}`;
          break;
        case 4:
          const targetStr = PokemonData[evolParam[0]].Name;
          evolStr = `${targetStr}\u304C\u4EF2\u9593\u306B\u3044\u308B`;
          break;
        case 5:
          evolStr = `\u3064\u3046\u3057\u3093\u30B1\u30FC\u30D6\u30EB`;
          break;
      }
      if (evolMethod >= 0 && evolMethod <= 3 && evolParam[1] > 0) {
        evolStr += ` + ${evolve2String[evolParam[1]]}`;
      }
      text = `${prevEvolName} (${evolStr})`;
    }
    return text;
  }
  function getPokemonSpriteUrl(indexId) {
    const imagePokemonData = checkPokemonData[indexId];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${imagePokemonData.baseId}${imagePokemonData.imageSuffix}.png`;
    return imageUrl;
  }
  async function fetchJsonData() {
    try {
      const [pokemonData, itemData, dungeonData, floorData, mappaSData] = await Promise.all([
        getJsonData("pokemon"),
        getJsonData("item"),
        getJsonData("dungeon"),
        getJsonData("floor"),
        getJsonData("mappa_s")
      ]);
      window.PokemonData = pokemonData;
      window.ItemData = itemData;
      window.DungeonData = dungeonData;
      window.FloorData = floorData;
      window.MappaSData = mappaSData;
    } catch (e) {
      console.error(e);
    }
  }
  loadPokemon();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibnMtaHVnby1pbXA6RjpcXEdpdFxcbGFpb3h5LmdpdGh1Yi5pb1xcYXNzZXRzXFxqc1xcanNvbl9zY3JpcHQuanMiLCAibnMtaHVnby1pbXA6RjpcXEdpdFxcbGFpb3h5LmdpdGh1Yi5pb1xcYXNzZXRzXFxqc1xccGFyYW0uanMiLCAiPHN0ZGluPiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXHJcbiAqIGdldEpzb25EYXRhXHUzMDZFXHU1RjE1XHU2NTcwXHUzMDZCXHU1MTY1XHUzMDhDXHUzMDhCXHUzMEFEXHUzMEZDXHU1NDBEXHUzMDY4SlNPTlx1MzBENVx1MzBBMVx1MzBBNFx1MzBFQlx1MzA2RVx1MzBEMVx1MzBCOVxyXG4gKi9cclxuY29uc3QganNvblBhdGhzQXJyYXkgPSB7XHJcbiAgcG9rZW1vbjogJy9kYXRhL3Bva2Vtb24ubWluLmpzb24nLFxyXG4gIGl0ZW06ICcvZGF0YS9pdGVtLm1pbi5qc29uJyxcclxuICBtb3ZlOiAnL2RhdGEvbW92ZS5taW4uanNvbicsXHJcbiAgZHVuZ2VvbjogJy9kYXRhL2R1bmdlb24ubWluLmpzb24nLFxyXG4gIGZsb29yOiAnL2RhdGEvZmxvb3IubWluLmpzb24nLFxyXG4gIG1hcHBhX3M6ICcvZGF0YS9tYXBwYV9zLm1pbi5qc29uJyxcclxuICBtYXBwYV90OiAnL2RhdGEvbWFwcGFfdC5taW4uanNvbicsXHJcbiAgbWFwcGFfeTogJy9kYXRhL21hcHBhX3kubWluLmpzb24nLFxyXG4gIGZpeGVkOiAnL2RhdGEvZml4ZWQubWluLmpzb24nLFxyXG4gIG1lc3NhZ2U6ICcvZGF0YS9tZXNzYWdlLm1pbi5qc29uJyxcclxuICB0eXBlOiAnL2RhdGEvdHlwZS5taW4uanNvbicsXHJcbiAgaXFncm91cDogJy9kYXRhL2lxZ3JvdXAubWluLmpzb24nLFxyXG4gIHJlc2N1ZTogJy9kYXRhL3Jlc2N1ZS5taW4uanNvbicsXHJcbn07XHJcblxyXG4vKipcclxuICogSlNPTlx1MzA5Mlx1NTNENlx1NUY5N1xyXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFx1MzBBRFx1MzBGQyAocG9rZW1vbiwgaXRlbSwgZHVuZ2VvbiwgZmxvb3IsIGZpeGVkLCBtZXNzYWdlKVxyXG4gKiBAcmV0dXJucyBKU09OXHUzMEM3XHUzMEZDXHUzMEJGXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SnNvbkRhdGEoa2V5KSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBhd2FpdCBmZXRjaChqc29uUGF0aHNBcnJheVtrZXldKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ2dldEpzb25EYXRhIEZhaWxlZDogJywgZSk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIiwgIi8qKiBcdTMwQUJcdTMwRDVcdTMwQTdcdTUyRTdcdThBOThcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjMgKi9cclxuZXhwb3J0IGNvbnN0IENBRkVfUkVDUlVJVF9UQUJMRSA9IFtcclxuICAweDAwYSwgMHgwMGQsIDB4MDFiLCAweDAyOSwgMHgwMmIsIDB4MDJlLCAweDAzNiwgMHgwM2MsIDB4MDQyLCAweDA0OCwgMHgwNGEsIDB4MDUxLCAweDA1MywgMHgwNTQsIDB4MDU2LCAweDA1OCwgMHgwNWEsXHJcbiAgMHgwNWMsIDB4MDVmLCAweDA2MCwgMHgwNjIsIDB4MDY4LCAweDA2ZCwgMHgwNmYsIDB4MDcyLCAweDA3OCwgMHgwN2YsIDB4MDgwLCAweDA4NCwgMHgwODksIDB4MDhhLCAweDA4YywgMHgwOGUsIDB4MDkzLFxyXG4gIDB4MGEzLCAweDBhNywgMHgwYWMsIDB4MGIxLCAweDBiMywgMHgwYmIsIDB4MGMxLCAweDBjMiwgMHgwYzgsIDB4MGU2LCAweDBlNywgMHgwZTksIDB4MGVjLCAweDBmMCwgMHgwZjUsIDB4MGY3LCAweDBmOSxcclxuICAweDBmZSwgMHgwZmYsIDB4MTAyLCAweDEwNSwgMHgxMDYsIDB4MTBhLCAweDEwYiwgMHgxMTEsIDB4MTIzLCAweDEyYSwgMHgxMzIsIDB4MTM0LCAweDEzNywgMHgxMzksIDB4MTNlLCAweDE0YiwgMHgxNGMsXHJcbiAgMHgxNTEsIDB4MTUzLCAweDE1NCwgMHgxNTUsIDB4MTU2LCAweDE1ZSwgMHgxNjQsIDB4MTY3LCAweDE2YywgMHgxNmQsIDB4MTZlLCAweDE2ZiwgMHgxNzMsIDB4MTc1LCAweDE3NywgMHgxODUsIDB4MTg3LFxyXG4gIDB4MThiLCAweDE5MywgMHgxOTYsIDB4MWFmLCAweDFiNCwgMHgxYjksIDB4MWJiLCAweDFiZCwgMHgxYmYsIDB4MWM2LCAweDFjOCwgMHgxY2IsIDB4MWNlLCAweDFjZiwgMHgxZDMsIDB4MWQ1LCAweDFkOSxcclxuICAweDFkYiwgMHgxZGUsIDB4MWUwLCAweDFlYiwgMHgxZWQsIDB4MWYxLFxyXG5dO1xyXG4vKiogXHUzMEI3XHUzMENBXHUzMEVBXHUzMEFBXHU2NTg3XHU1QjU3XHU1MjE3ICovXHJcbmV4cG9ydCBjb25zdCBTQ0VOQVJJT19TVFJJTkdTID0gW1xyXG4gICctJyxcclxuICAnQ2hhcHRlci01XHU0RUU1XHU5NjREJyxcclxuICAnQ2hhcHRlci0xMFx1NEVFNVx1OTY0RCcsXHJcbiAgJ0NoYXB0ZXItMTFcdTRFRTVcdTk2NEQnLFxyXG4gICdDaGFwdGVyLTE5XHU0RUU1XHU5NjREJyxcclxuICAnXHUzMEE4XHUzMEYzXHUzMEM3XHUzMEEzXHUzMEYzXHUzMEIwXHU1RjhDJyxcclxuICAnXHUzMEFFXHUzMEVCXHUzMEM5XHU1MzUyXHU2OTZEXHU1RjhDJyxcclxuICAnXHUzMDQ2XHUzMDdGXHUzMDZFXHUzMEVBXHUzMEJFXHUzMEZDXHUzMEM4XHU4OUUzXHU3OTgxXHU1RjhDJyxcclxuXTtcclxuIiwgImltcG9ydCB7IGdldEpzb25EYXRhIH0gZnJvbSAnLi8uLi9qc29uX3NjcmlwdCc7XHJcbmltcG9ydCAqIGFzIHBhcmFtcyBmcm9tICcuLy4uL3BhcmFtJztcclxuXHJcbi8vIFx1MzBCOVx1MzBERFx1MzBGQ1x1MzBGM1x1MzBDN1x1MzBGQ1x1MzBCRiAoXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMEZCXHUzMEMwXHUzMEYzXHUzMEI4XHUzMEU3XHUzMEYzXHUzMEJGXHUzMEQ2XHU3NTI4KVxyXG5sZXQgc3Bhd25EYXRhO1xyXG5cclxuLyoqIFx1OTY2NFx1NTkxNlx1MzA1OVx1MzA4Qlx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1MzA2RUlEICovXHJcbmNvbnN0IGJhbm5lZFBva2Vtb25JZHMgPSBbXHJcbiAgMHgxMTcsIC8vIFx1Njg0M1x1MzBCQlx1MzBFQ1x1MzBEM1x1MzBBM1xyXG4gIDB4MTdjLCAvLyBcdTk2RUFcdTMwRERcdTMwRUZcdTMwRUJcdTMwRjNcclxuICAweDE3ZCwgLy8gXHU2Njc0XHUzMEREXHUzMEVGXHUzMEVCXHUzMEYzXHJcbiAgMHgxN2UsIC8vIFx1OTZFOFx1MzBERFx1MzBFRlx1MzBFQlx1MzBGM1xyXG4gIDB4MTgwLCAvLyBcdTdEMkJcdTMwQUJcdTMwQUZcdTMwRUNcdTMwQUFcdTMwRjNcclxuICAweDFhMywgLy8gQUZcdTMwQzdcdTMwQUFcdTMwQURcdTMwQjdcdTMwQjlcclxuICAweDFhNCwgLy8gREZcdTMwQzdcdTMwQUFcdTMwQURcdTMwQjdcdTMwQjlcclxuICAweDFhNSwgLy8gU1BcdTMwQzdcdTMwQUFcdTMwQURcdTMwQjdcdTMwQjlcclxuICAweDFjZCwgLy8gXHUzMEREXHUzMEI4XHUzMEMxXHUzMEE3XHUzMEVBXHUzMEUwXHJcbl07XHJcblxyXG4vKiogXHU5MDMyXHU1MzE2XHU2NzYxXHU0RUY2MiAqL1xyXG5jb25zdCBldm9sdmUyU3RyaW5nID0gW1xyXG4gICctJyxcclxuICAnXHUzMDY0XHUzMDQ2XHUzMDU3XHUzMDkzXHUzMEIxXHUzMEZDXHUzMEQ2XHUzMEVCJyxcclxuICAnXHU2NTNCXHU2NDgzXHVGRjFFXHU5NjMyXHU1RkExJyxcclxuICAnXHU5NjMyXHU1RkExXHVGRjFFXHU2NTNCXHU2NDgzJyxcclxuICAnXHU2NTNCXHU2NDgzXHVGRjFEXHU5NjMyXHU1RkExJyxcclxuICAnXHUzMDVGXHUzMDQ0XHUzMDg4XHUzMDQ2XHUzMDZFXHUzMEVBXHUzMERDXHUzMEYzJyxcclxuICAnXHUzMDUyXHUzMDYzXHUzMDUzXHUzMDQ2XHUzMDZFXHUzMEVBXHUzMERDXHUzMEYzJyxcclxuICAnXHUzMDQ2XHUzMDY0XHUzMDRGXHUzMDU3XHUzMEI5XHUzMEFCXHUzMEZDXHUzMEQ1JyxcclxuICAnXHUzMEU5XHUzMEYzXHUzMEMwXHUzMEUwJyxcclxuICAnXHUzMEU5XHUzMEYzXHUzMEMwXHUzMEUwJyxcclxuICAnXHUzMEFBXHUzMEI5JyxcclxuICAnXHUzMEUxXHUzMEI5JyxcclxuICAnXHUzMDUyXHUzMDkzXHUzMDU3XHUzMDZFXHUzMDYxXHUzMDRCXHUzMDg5XHU3RkQyXHU1Rjk3JyxcclxuICAnXHUzMDUzXHUzMDhEXHUzMDRDXHUzMDhCXHU3RkQyXHU1Rjk3JyxcclxuICAnXHUzMEMwXHUzMEQ2XHUzMEVCXHUzMEEyXHUzMEJGXHUzMEMzXHUzMEFGXHU3RkQyXHU1Rjk3JyxcclxuICAnXHUzMDgyXHUzMDZFXHUzMDdFXHUzMDZEXHU3RkQyXHU1Rjk3JyxcclxuXTtcclxuXHJcbi8qKiBcdTMwQTRcdTMwRDlcdTMwRjNcdTMwQzhcdTUyRTdcdThBOThcdTMwRUFcdTMwQjlcdTMwQzggKi9cclxuY29uc3QgZXZlbnRSZWN0dWl0ID0gW1xyXG4gIHtcclxuICAgIGlkOiAweDkwLFxyXG4gICAgY29udGV4dDogJ1x1MzAwQ1x1MzA2QVx1MzA2MFx1MzA4Q1x1MzA4NFx1MzA3RSBcdTMwNjFcdTMwODdcdTMwNDZcdTMwNThcdTMwODdcdTMwNDZcdTMwMERcdTMwNjdcdTMwRDVcdTMwRUFcdTMwRkNcdTMwQjZcdTMwRkNcdTMwOTJcdTUwMTJcdTMwNTkgKDUwJSknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDB4OTYsXHJcbiAgICBjb250ZXh0OiAnXHUzMERGXHUzMEU1XHUzMEE2XHUzMEM0XHUzMEZDXHUzMDRCXHUzMDg5XHUzMDZFXHU2MzExXHU2MjI2XHU3MkI2XHUzMDkyXHU1M0Q3XHUzMDUxXHUzMDhCIFx1MjAzQlx1MzA2Nlx1MzA5M1x1MzA0Rlx1MzA0Nlx1MzA2RVx1MzA0Qlx1MzA0NFx1MzA2MFx1MzA5M1x1ODk4MVx1ODlFM1x1Nzk4MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHg5NyxcclxuICAgIGNvbnRleHQ6ICdcdTMwMENcdTMwREZcdTMwQjlcdTMwQzZcdTMwRUFcdTMwRkNcdTMwQjhcdTMwRTNcdTMwRjNcdTMwQjBcdTMwRUIgXHUzMDRBXHUzMDRGXHUzMDYxXHUzMDBEXHUzMDY3XHUzMERGXHUzMEU1XHUzMEE2XHUzMDkyXHU1MDEyXHUzMDU5ICg1MCUpJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDEwZSxcclxuICAgIGNvbnRleHQ6ICdcdTMwRTlcdTMwQTRcdTMwQjNcdTMwQTZcdTMwNEJcdTMwODlcdTMwNkVcdTYzMTFcdTYyMjZcdTcyQjZcdTMwOTJcdTUzRDdcdTMwNTFcdTMwOEIgXHUyMDNCXHUzMDZBXHUzMDkzXHUzMDY4XHUzMDQ2XHUzMDU3XHUzMDg3XHUzMDY4XHUzMDQ2XHU4OTgxXHU4OUUzXHU3OTgxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDEwZixcclxuICAgIGNvbnRleHQ6ICdcdTMwQThcdTMwRjNcdTMwQzZcdTMwQTRcdTMwNEJcdTMwODlcdTMwNkVcdTYzMTFcdTYyMjZcdTcyQjZcdTMwOTJcdTUzRDdcdTMwNTFcdTMwOEIgXHUyMDNCXHUzMDhDXHUzMDYzXHUzMDRCXHUzMDZFXHUzMDY5XHUzMDQ2XHUzMDRGXHUzMDY0XHU4OTgxXHU4OUUzXHU3OTgxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDExMCxcclxuICAgIGNvbnRleHQ6ICdcdTMwQjlcdTMwQTRcdTMwQUZcdTMwRjNcdTMwNEJcdTMwODlcdTMwNkVcdTYzMTFcdTYyMjZcdTcyQjZcdTMwOTJcdTUzRDdcdTMwNTFcdTMwOEIgXHUyMDNCXHUzMDdFXHUzMDZFXHUzMDRCXHUzMDQ0XHUzMDQ0XHUzMDREXHU4OTgxXHU4OUUzXHU3OTgxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDE5OSxcclxuICAgIGNvbnRleHQ6ICcyXHU1NDY4XHU3NkVFXHU0RUU1XHU5NjREXHUzMDBDXHUzMDcwXHUzMDkzXHUzMDZCXHUzMDkzXHUzMDZFXHUzMDY5XHUzMDQ2XHUzMDRGXHUzMDY0IFx1MzBFQ1x1MzBCOFx1MzBFRFx1MzBDM1x1MzBBRlx1MzA2RVx1MzA3RVx1MzAwRFx1MzA2N1x1MzBFQ1x1MzBCOFx1MzBFRFx1MzBDM1x1MzBBRlx1MzA5Mlx1NTAxMlx1MzA1OSAoNTAlKScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgxOWEsXHJcbiAgICBjb250ZXh0OiAnMlx1NTQ2OFx1NzZFRVx1NEVFNVx1OTY0RFx1MzAwQ1x1MzA3MFx1MzA5M1x1MzA2Qlx1MzA5M1x1MzA2RVx1MzA2OVx1MzA0Nlx1MzA0Rlx1MzA2NCBcdTMwRUNcdTMwQjhcdTMwQTJcdTMwQTRcdTMwQjlcdTMwNkVcdTMwN0VcdTMwMERcdTMwNjdcdTMwRUNcdTMwQjhcdTMwQTJcdTMwQTRcdTMwQjlcdTMwOTJcdTUwMTJcdTMwNTkgKDUwJSknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDB4MTliLFxyXG4gICAgY29udGV4dDogJzJcdTU0NjhcdTc2RUVcdTRFRTVcdTk2NERcdTMwMENcdTMwNzBcdTMwOTNcdTMwNkJcdTMwOTNcdTMwNkVcdTMwNjlcdTMwNDZcdTMwNEZcdTMwNjQgXHUzMEVDXHUzMEI4XHUzMEI5XHUzMEMxXHUzMEVCXHUzMDZFXHUzMDdFXHUzMDBEXHUzMDY3XHUzMEVDXHUzMEI4XHUzMEI5XHUzMEMxXHUzMEVCXHUzMDkyXHU1MDEyXHUzMDU5ICg1MCUpJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDE5ZSxcclxuICAgIGNvbnRleHQ6ICdcdTMwMENcdTMwNURcdTMwNTNcdTMwNkFcdTMwNTdcdTMwNDZcdTMwN0YgXHUzMDRBXHUzMDRGXHUzMDVEXHUzMDUzXHUzMDBEXHUzMDY3XHUzMEFCXHUzMEE0XHUzMEFBXHUzMEZDXHUzMEFDXHUzMDkyXHU1MDEyXHUzMDU5ICg1MCUpJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDE5ZixcclxuICAgIGNvbnRleHQ6ICdcdTMwMENcdTMwNEJcdTMwNTJcdTMwOERcdTMwNDZcdTMwNkVcdTMwNTVcdTMwNzBcdTMwNEYgXHUzMDRBXHUzMDRGXHUzMDYxXHUzMDBEXHUzMDY3XHUzMEIwXHUzMEU5XHUzMEZDXHUzMEM5XHUzMEYzXHUzMDkyXHU1MDEyXHUzMDU5ICg1MCUpJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDFhMCxcclxuICAgIGNvbnRleHQ6ICdcdTMwMENcdTMwNjZcdTMwOTNcdTMwNEZcdTMwNDZcdTMwNkVcdTMwNEJcdTMwNDRcdTMwNjBcdTMwOTMgXHUzMDYxXHUzMDg3XHUzMDQ2XHUzMDU4XHUzMDg3XHUzMDQ2XHUzMDBEXHUzMDY3XHUzMEVDXHUzMEMzXHUzMEFGXHUzMEE2XHUzMEI2XHUzMDkyXHU1MDEyXHUzMDU5ICg1MCUpJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDFhMSxcclxuICAgIGNvbnRleHQ6ICdcdTMwQjhcdTMwRTlcdTMwRkNcdTMwQzFcdTMwNEJcdTMwODlcdTMwNkVcdTYzMTFcdTYyMjZcdTcyQjZcdTMwOTJcdTUzRDdcdTMwNTFcdTMwOEIgXHUyMDNCU0UxXHUzMDBDXHUzMEQzXHUzMEMzXHUzMEQxXHUzMDZFXHUzMDZEXHUzMDRDXHUzMDQ0XHUzMDU0XHUzMDY4XHUzMDBEXHU4OTgxXHUzMEFGXHUzMEVBXHUzMEEyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDIwYSxcclxuICAgIGNvbnRleHQ6ICdcdTY3MkNcdTdERThcdTMwQUZcdTMwRUFcdTMwQTJcdTVGOENcdTMwMENcdTMwNkRcdTMwNjNcdTMwNTlcdTMwNDRcdTMwNkVcdTMwNjlcdTMwNDZcdTMwNEZcdTMwNjQgXHUzMDYxXHUzMDg3XHUzMDQ2XHUzMDU4XHUzMDg3XHUzMDQ2XHUzMDBEXHUzMDY3XHUzMEU2XHUzMEFGXHUzMEI3XHUzMEZDXHUzMDkyXHU1MDEyXHUzMDU5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDIwYixcclxuICAgIGNvbnRleHQ6ICdcdTY3MkNcdTdERThcdTMwQUZcdTMwRUFcdTMwQTJcdTVGOENcdTMwMENcdTMwNjFcdTMwNjZcdTMwNDRcdTMwNkVcdTMwN0ZcdTMwNUFcdTMwNDZcdTMwN0YgKFx1MzA4QVx1MzA4NVx1MzA0Nlx1MzA1NVx1MzA2RVx1MzA2OVx1MzA0Nlx1MzA0Rlx1MzA2NClcdTMwMERcdTMwNjdcdTMwQThcdTMwRTBcdTMwRUFcdTMwQzNcdTMwQzhcdTMwOTJcdTUwMTJcdTMwNTknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDB4MjBjLFxyXG4gICAgY29udGV4dDogJ1x1NjcyQ1x1N0RFOFx1MzBBRlx1MzBFQVx1MzBBMlx1NUY4Q1x1MzAwQ1x1MzA1OVx1MzA0NFx1MzA1N1x1MzA4N1x1MzA0Nlx1MzA2RVx1MzA3Rlx1MzA1QVx1MzA0Nlx1MzA3RiAoXHUzMDYwXHUzMDQ0XHUzMDU5XHUzMDQ0XHUzMDU3XHUzMDg3XHUzMDQ2XHUzMDZFXHUzMDdGXHUzMDYxKVx1MzAwRFx1MzA2N1x1MzBBMlx1MzBCMFx1MzBDRVx1MzBFMFx1MzA5Mlx1NTAxMlx1MzA1OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgyMGQsXHJcbiAgICBjb250ZXh0OiAnXHU2NzJDXHU3REU4XHUzMEFGXHUzMEVBXHUzMEEyXHU1RjhDXHUzMDBDXHUzMDU4XHUzMDUyXHUzMDkzXHUzMDZFXHUzMDY4XHUzMDQ2IFx1MzA2MVx1MzA4N1x1MzA0Nlx1MzA1OFx1MzA4N1x1MzA0Nlx1MzAwRFx1MzA2N1x1MzBDN1x1MzBBM1x1MzBBMlx1MzBFQlx1MzBBQ1x1MzA5Mlx1NTAxMlx1MzA1OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgyMGUsXHJcbiAgICBjb250ZXh0OiAnXHUzMEMwXHUzMEZDXHUzMEFGXHUzMEU5XHUzMEE0XHU2NDgzXHU3ODM0XHU1RjhDXHUzMDBDXHUzMDVEXHUzMDg5XHUzMDZFXHUzMDU1XHUzMDUxXHUzMDgxIFx1MzA0QVx1MzA0Rlx1MzA1RFx1MzA1M1x1MzAwRFx1MzA2N1x1MzBEMVx1MzBFQlx1MzBBRFx1MzBBMlx1MzA5Mlx1NTAxMlx1MzA1OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgyMGYsXHJcbiAgICBjb250ZXh0OiAnXHUzMDBDXHUzMDREXHUzMDg3XHUzMDYwXHUzMDQ0XHUzMDRCXHUzMDU2XHUzMDkzIFx1MzA2MVx1MzA4N1x1MzA0Nlx1MzA1OFx1MzA4N1x1MzA0Nlx1MzAwRFx1MzA2N1x1MzBEMlx1MzBGQ1x1MzBDOVx1MzBFOVx1MzBGM1x1MzA5Mlx1NTAxMlx1MzA1OSAoNTAlKScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgyMTAsXHJcbiAgICBjb250ZXh0OiAnXHUzMDBDXHUzMDcwXHUzMDkzXHUzMDZCXHUzMDkzXHUzMDZFXHUzMDY5XHUzMDQ2XHUzMDRGXHUzMDY0IFx1MzBFQ1x1MzBCOFx1MzBBRVx1MzBBQ1x1MzBCOVx1MzA2RVx1MzA3RVx1MzAwRFx1MzA2N1x1MzBFQ1x1MzBCOFx1MzBBRVx1MzBBQ1x1MzBCOVx1MzA5Mlx1NTAxMlx1MzA1OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgyMTEsXHJcbiAgICBjb250ZXh0OiAnXHUzMDBDXHUzMDVCXHUzMDRCXHUzMDQ0XHUzMDZFXHUzMDRBXHUzMDRBXHUzMDQyXHUzMDZBIFx1MzA0QVx1MzA0Rlx1MzA1RFx1MzA1M1x1MzAwRFx1MzA2N1x1MzBBRVx1MzBFOVx1MzBDNlx1MzBBM1x1MzBDQVx1MzA5Mlx1NTAxMlx1MzA1OSAoNTAlKScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgyMTIsXHJcbiAgICBjb250ZXh0OiAnXHUzMEMwXHUzMEZDXHUzMEFGXHUzMEU5XHUzMEE0XHU2NDgzXHU3ODM0XHU1RjhDXHUzMDAxXHUzMEI1XHUzMEUxXHUzMENGXHUzMEMwXHUzMDQ0XHUzMDhGXHUzMDY3XHUzMEFGXHUzMEVDXHUzMEJCXHUzMEVBXHUzMEEyXHUzMDY4XHU4QTcxXHUzMDU5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDIxMyxcclxuICAgIGNvbnRleHQ6ICdcdTMwNERcdTMwNUJcdTMwNERcdTMwNkVcdTMwNDZcdTMwN0ZcdTMwQUZcdTMwRUFcdTMwQTJcdTVGOENcdTMwMDFcdTUxOERcdTVFQTZcdTMwMENcdTMwNERcdTMwNUJcdTMwNERcdTMwNkVcdTMwNDZcdTMwN0YgXHUzMDRBXHUzMDRGXHUzMDVEXHUzMDUzXHUzMDBEXHUzMDc4XHU1NDExXHUzMDRCXHUzMDQ2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDIxNCxcclxuICAgIGNvbnRleHQ6ICdcdTMwQzBcdTMwRkNcdTMwQUZcdTMwRTlcdTMwQTRcdTY0ODNcdTc4MzRcdTVGOENcdTMwMDFcdTRGOURcdTk4M0NcdTMwOTIzXHU2NUU1XHU1MjA2XHUzMDUzXHUzMDZBXHUzMDU5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDIxNixcclxuICAgIGNvbnRleHQ6ICdcdTMwNURcdTMwODlcdTMwNkVcdTMwNDRcdTMwNUZcdTMwNjBcdTMwNERcdTMwQUZcdTMwRUFcdTMwQTJcdTVGOENcdTMwMDFcdTUxOERcdTVFQTZcdTMwMENcdTMwNURcdTMwODlcdTMwNkVcdTMwNDRcdTMwNUZcdTMwNjBcdTMwNEQgXHUzMDYxXHUzMDg3XHUzMDQ2XHUzMDU4XHUzMDg3XHUzMDQ2XHUzMDBEXHUzMDc4XHU1NDExXHUzMDRCXHUzMDQ2JyxcclxuICB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gZ2V0VW5vd25TdWZmaXgoaW5kZXgpIHtcclxuICBpZiAoaW5kZXggPCAyNSkge1xyXG4gICAgLy8gQi1aXHJcbiAgICByZXR1cm4gJy0nICsgU3RyaW5nLmZyb21DaGFyQ29kZSg5NyArIGluZGV4ICsgMSk7IC8vIDk3ID0gJ2EnXHJcbiAgfSBlbHNlIGlmIChpbmRleCA9PT0gMjUpIHtcclxuICAgIHJldHVybiAnLWV4Y2xhbWF0aW9uJztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuICctcXVlc3Rpb24nO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY2hlY2tQb2tlbW9uRGF0YSA9IFtcclxuICAvLyBSZWd1bGFyIFBva2Vtb24gMS00OTIgKGV4Y2VwdCA0MTIsIDQxMywgNDIyLCA0MjMpXHJcbiAgLi4uQXJyYXkuZnJvbSh7IGxlbmd0aDogNDkyIH0sIChfLCBpKSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IGkgKyAxO1xyXG4gICAgaWYgKFs0MTIsIDQxMywgNDIyLCA0MjNdLmluY2x1ZGVzKGlkKSkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiYXNlSWQ6IGlkLFxyXG4gICAgICBmb3JtSWQ6IDAsXHJcbiAgICAgIHNvcnRJZDogaWQsXHJcbiAgICAgIGltYWdlU3VmZml4OiAnJyxcclxuICAgIH07XHJcbiAgfSkuZmlsdGVyKCh4KSA9PiB4ICE9PSBudWxsKSxcclxuICAvLyBVbm93biBmb3JtcyAoQi1aLCAhLCA/KVxyXG4gIC4uLkFycmF5LmZyb20oeyBsZW5ndGg6IDI3IH0sIChfLCBpKSA9PiAoe1xyXG4gICAgYmFzZUlkOiAyMDEsXHJcbiAgICBmb3JtSWQ6IGkgKyAxLFxyXG4gICAgc29ydElkOiAyMDEgKyAoaSArIDEpIC8gMTAwLFxyXG4gICAgaW1hZ2VTdWZmaXg6IGdldFVub3duU3VmZml4KGkpLFxyXG4gIH0pKSxcclxuICAvLyBCdXJteS9Xb3JtYWRhbSBmb3JtcyAoU2FuZHksIEdyYXNzLCBUcmFzaClcclxuICB7IGJhc2VJZDogNDEyLCBmb3JtSWQ6IDEsIHNvcnRJZDogNDEyLjAsIGltYWdlU3VmZml4OiAnLXNhbmR5JyB9LFxyXG4gIHsgYmFzZUlkOiA0MTIsIGZvcm1JZDogMCwgc29ydElkOiA0MTIuMSwgaW1hZ2VTdWZmaXg6ICcnIH0sXHJcbiAgeyBiYXNlSWQ6IDQxMiwgZm9ybUlkOiAyLCBzb3J0SWQ6IDQxMi4yLCBpbWFnZVN1ZmZpeDogJy10cmFzaCcgfSxcclxuICB7IGJhc2VJZDogNDEzLCBmb3JtSWQ6IDEsIHNvcnRJZDogNDEzLjAsIGltYWdlU3VmZml4OiAnLXNhbmR5JyB9LFxyXG4gIHsgYmFzZUlkOiA0MTMsIGZvcm1JZDogMCwgc29ydElkOiA0MTMuMSwgaW1hZ2VTdWZmaXg6ICcnIH0sXHJcbiAgeyBiYXNlSWQ6IDQxMywgZm9ybUlkOiAyLCBzb3J0SWQ6IDQxMy4yLCBpbWFnZVN1ZmZpeDogJy10cmFzaCcgfSxcclxuICAvLyBTaGVsbG9zL0dhc3Ryb2RvbiBmb3Jtc1xyXG4gIHsgYmFzZUlkOiA0MjIsIGZvcm1JZDogMSwgc29ydElkOiA0MjIuMCwgaW1hZ2VTdWZmaXg6ICctZWFzdCcgfSxcclxuICB7IGJhc2VJZDogNDIyLCBmb3JtSWQ6IDAsIHNvcnRJZDogNDIyLjEsIGltYWdlU3VmZml4OiAnJyB9LFxyXG4gIHsgYmFzZUlkOiA0MjMsIGZvcm1JZDogMSwgc29ydElkOiA0MjMuMCwgaW1hZ2VTdWZmaXg6ICctZWFzdCcgfSxcclxuICB7IGJhc2VJZDogNDIzLCBmb3JtSWQ6IDAsIHNvcnRJZDogNDIzLjEsIGltYWdlU3VmZml4OiAnJyB9LFxyXG5dLnNvcnQoKGEsIGIpID0+IGEuc29ydElkIC0gYi5zb3J0SWQpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZFBva2Vtb24oKSB7XHJcbiAgLy8gSlNPTlx1OEFBRFx1OEZCQ1xyXG4gIGF3YWl0IGZldGNoSnNvbkRhdGEoKTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bva2Vtb24tbGlzdCcpO1xyXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICBmb3IgKGxldCBbaSwgcG9rZW1vbl0gb2YgY2hlY2tQb2tlbW9uRGF0YS5lbnRyaWVzKCkpIHtcclxuICAgIGNvbnN0IGRpdiA9IHBhcnNlSFRNTChgXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cInBva2Vtb24tZ3JpZFwiXHJcbiAgICAgICAgZGF0YS1iYXNlLWlkPVwiJHtwb2tlbW9uLmJhc2VJZH1cIlxyXG4gICAgICAgIGRhdGEtZm9ybS1pZD1cIiR7cG9rZW1vbi5mb3JtSWR9XCJcclxuICAgICAgICBkYXRhLWlkPVwiJHtpbmRleFRvUG9rZW1vbklkKGkpfVwiXHJcbiAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtnZXRQb2tlbW9uU3ByaXRlVXJsKGkpfSlcIlxyXG4gICAgICA+PGRpdj5cclxuICAgICAgYCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRvZ2dsZVBva2Vtb25DaGVja2VkKGRpdik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIFx1MzBCOVx1MzBERFx1MzBGQ1x1MzBGM1x1MzBDN1x1MzBGQ1x1MzBCRlx1NEY1Q1x1NjIxMFxyXG4gIHNwYXduRGF0YSA9IGdlbmVyYXRlU3Bhd25EYXRhKCk7XHJcbiAgLy8gXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHU4QTczXHU3RDMwXHUzMDkyXHU0RjVDXHU2MjEwXHJcbiAgY3JlYXRlR3VpZGUoKTtcclxuICAvLyBcdTMwQzBcdTMwRjNcdTMwQjhcdTMwRTdcdTMwRjNcdThBNzNcdTdEMzBcdTMwOTJcdTRGNUNcdTYyMTBcclxuICBjcmVhdGVSZWNydWl0RHVuZ2VvbigpO1xyXG5cclxuICBsb2FkU3RhdGUoKTtcclxuICByZXN0b3JlRm9ybVN3aXRjaCgpO1xyXG4gIGZpbHRlckZvcm1WYXJpYW50cyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlRm9ybVN3aXRjaCcpLmNoZWNrZWQsIHRydWUpO1xyXG4gIHVwZGF0ZVByb2dyZXNzKCk7XHJcbiAgc3luY0RldGFpbHNXaXRoQ2hlY2tlcigpO1xyXG4gIHN5bmNEdW5nZW9uV2l0aENoZWNrZXIoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBQlx1MzBGQ1x1MzA2RVx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1MzA5Mlx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlx1NTIwN1x1NjZGRlxyXG4gKiBAcGFyYW0geyp9IGRpdlxyXG4gKi9cclxuZnVuY3Rpb24gdG9nZ2xlUG9rZW1vbkNoZWNrZWQoZGl2KSB7XHJcbiAgY29uc3QgaXNTZWxlY3RlZCA9IGRpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKTtcclxuICBjb25zdCBwb2tlbW9uSWQgPSBkaXYuZGF0YXNldC5pZDtcclxuXHJcbiAgaWYgKGlzU2VsZWN0ZWQpIHtcclxuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XHJcbiAgfVxyXG5cclxuICBzYXZlU3RhdGUoKTtcclxuICB1cGRhdGVQcm9ncmVzcygpO1xyXG4gIHN5bmNEZXRhaWxzV2l0aENoZWNrZXIoKTsgLy8gXHU1MkU3XHU4QTk4XHU2NUI5XHU2Q0Q1XHU1NDBDXHU2NzFGXHJcbiAgc3luY0R1bmdlb25XaXRoQ2hlY2tlcigpOyAvLyBcdTMwQzBcdTMwRjNcdTMwQjhcdTMwRTdcdTMwRjNcdTU0MENcdTY3MUZcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZVN0YXRlKCkge1xyXG4gIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcG9rZW1vbi1saXN0IC5wb2tlbW9uLWdyaWQnKSkuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgY29uc3QgYmFzZUlkQSA9IHBhcnNlSW50KGEuZGF0YXNldC5iYXNlSWQpO1xyXG4gICAgY29uc3QgYmFzZUlkQiA9IHBhcnNlSW50KGIuZGF0YXNldC5iYXNlSWQpO1xyXG4gICAgaWYgKGJhc2VJZEEgIT09IGJhc2VJZEIpIHJldHVybiBiYXNlSWRBIC0gYmFzZUlkQjtcclxuICAgIGNvbnN0IGZvcm1BID0gcGFyc2VJbnQoYS5kYXRhc2V0LmZvcm1JZCk7XHJcbiAgICBjb25zdCBmb3JtQiA9IHBhcnNlSW50KGIuZGF0YXNldC5mb3JtSWQpO1xyXG4gICAgcmV0dXJuIGZvcm1BIC0gZm9ybUI7XHJcbiAgfSk7XHJcblxyXG4gIGxldCBiaW4gPSAnJztcclxuICBmb3IgKGxldCBkaXYgb2YgaXRlbXMpIHtcclxuICAgIGJpbiArPSBkaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkJykgPyAnMScgOiAnMCc7XHJcbiAgfVxyXG4gIGNvbnN0IGNvbXByZXNzZWQgPSBMWlN0cmluZy5jb21wcmVzc1RvQmFzZTY0KGJpbik7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bva2Vtb24tY2hlY2tsaXN0JywgY29tcHJlc3NlZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRTdGF0ZSgpIHtcclxuICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Bva2Vtb24tbGlzdCAucG9rZW1vbi1ncmlkJykpLnNvcnQoKGEsIGIpID0+IHtcclxuICAgIGNvbnN0IGJhc2VJZEEgPSBwYXJzZUludChhLmRhdGFzZXQuYmFzZUlkKTtcclxuICAgIGNvbnN0IGJhc2VJZEIgPSBwYXJzZUludChiLmRhdGFzZXQuYmFzZUlkKTtcclxuICAgIGlmIChiYXNlSWRBICE9PSBiYXNlSWRCKSByZXR1cm4gYmFzZUlkQSAtIGJhc2VJZEI7XHJcbiAgICBjb25zdCBmb3JtQSA9IHBhcnNlSW50KGEuZGF0YXNldC5mb3JtSWQpO1xyXG4gICAgY29uc3QgZm9ybUIgPSBwYXJzZUludChiLmRhdGFzZXQuZm9ybUlkKTtcclxuICAgIHJldHVybiBmb3JtQSAtIGZvcm1CO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjb21wcmVzc2VkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bva2Vtb24tY2hlY2tsaXN0Jyk7XHJcbiAgY29uc3QgYmluID0gTFpTdHJpbmcuZGVjb21wcmVzc0Zyb21CYXNlNjQoY29tcHJlc3NlZCk7XHJcblxyXG4gIGlmICghYmluIHx8IGJpbi5sZW5ndGggIT09IGl0ZW1zLmxlbmd0aCkgcmV0dXJuO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyArK2kpIHtcclxuICAgIGlmIChiaW5baV0gPT0gJzEnKSB7XHJcbiAgICAgIGl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFx1NTlGRlx1OTA1NVx1MzA0NFx1MzBCOVx1MzBBNFx1MzBDM1x1MzBDMVx1MzA2RVx1NzJCNlx1NjE0Qlx1MzA5MmxvY2FsU3RvcmFnZVx1MzA2N1x1NEZERFx1NjMwMVx1MzBGQlx1NUZBOVx1NTE0M1xyXG5mdW5jdGlvbiBzYXZlRm9ybVN3aXRjaFN0YXRlKGNoZWNrZWQpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9rZW1vbi1jaGVja2xpc3QtZm9ybVN3aXRjaCcsIGNoZWNrZWQgPyAnMScgOiAnMCcpO1xyXG59XHJcbmZ1bmN0aW9uIHJlc3RvcmVGb3JtU3dpdGNoKCkge1xyXG4gIGNvbnN0IHRvZ2dsZUZvcm1Td2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlRm9ybVN3aXRjaCcpO1xyXG4gIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bva2Vtb24tY2hlY2tsaXN0LWZvcm1Td2l0Y2gnKTtcclxuICBpZiAodG9nZ2xlRm9ybVN3aXRjaCAmJiBzYXZlZCAhPT0gbnVsbCkge1xyXG4gICAgdG9nZ2xlRm9ybVN3aXRjaC5jaGVja2VkID0gc2F2ZWQgPT09ICcxJztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzKCkge1xyXG4gIGNvbnN0IGV4Y2x1ZGVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZUZvcm1Td2l0Y2gnKT8uY2hlY2tlZDtcclxuICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Bva2Vtb24tbGlzdCAucG9rZW1vbi1ncmlkJykpLmZpbHRlcihcclxuICAgIChkaXYpID0+ICFleGNsdWRlRm9ybSB8fCBkaXYuZGF0YXNldC5mb3JtSWQgPT09ICcwJyxcclxuICApO1xyXG4gIGxldCBjaGVja2VkID0gMDtcclxuICBmb3IgKGxldCBkaXYgb2YgaXRlbXMpIHtcclxuICAgIGlmIChkaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkJykpIGNoZWNrZWQrKztcclxuICB9XHJcbiAgbGV0IHBlcmNlbnQgPSBNYXRoLmZsb29yKChjaGVja2VkIC8gaXRlbXMubGVuZ3RoKSAqIDEwMCk7XHJcbiAgaWYgKGNoZWNrZWQgPT09IGl0ZW1zLmxlbmd0aCAmJiBpdGVtcy5sZW5ndGggPiAwKSBwZXJjZW50ID0gMTAwO1xyXG4gIGNvbnN0IGJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzcy1iYXInKTtcclxuICBjb25zdCBwZXJjZW50VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzcy1wZXJjZW50Jyk7XHJcbiAgY29uc3QgY291bnRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzLWNvdW50Jyk7XHJcbiAgYmFyLnN0eWxlLndpZHRoID0gcGVyY2VudCArICclJztcclxuICBiYXIuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbm93JywgcGVyY2VudCk7XHJcbiAgcGVyY2VudFRleHQudGV4dENvbnRlbnQgPSBwZXJjZW50ICsgJyUnO1xyXG4gIGNvdW50VGV4dC50ZXh0Q29udGVudCA9IGNoZWNrZWQgKyAnLycgKyBpdGVtcy5sZW5ndGg7XHJcbiAgaWYgKHBlcmNlbnQgPT09IDEwMCkge1xyXG4gICAgYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLXByaW1hcnknKTtcclxuICAgIGJhci5jbGFzc0xpc3QuYWRkKCdiZy13YXJuaW5nJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGJhci5jbGFzc0xpc3QuYWRkKCdiZy1wcmltYXJ5Jyk7XHJcbiAgICBiYXIuY2xhc3NMaXN0LnJlbW92ZSgnYmctd2FybmluZycpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gXHUzMEUyXHUzMEZDXHUzMEMwXHUzMEVCXHU4ODY4XHU3OTNBXHU3NTI4Qm9vdHN0cmFwXHJcbmxldCBleHBvcnRNb2RhbCwgaW1wb3J0TW9kYWw7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgZXhwb3J0TW9kYWwgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBvcnRNb2RhbCcpKTtcclxuICBpbXBvcnRNb2RhbCA9IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydE1vZGFsJykpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBvcnQtYnRuJykub25jbGljayA9IHNob3dFeHBvcnRNb2RhbDtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0LWJ0bicpLm9uY2xpY2sgPSBzaG93SW1wb3J0TW9kYWw7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydEZvcm0nKS5vbnN1Ym1pdCA9IGhhbmRsZUltcG9ydDtcclxuXHJcbiAgLy8gXHUzMEEyXHUzMEIzXHUzMEZDXHUzMEM3XHUzMEEzXHUzMEFBXHUzMEYzXHU3N0UyXHU1MzcwXHUzMDZFXHU1NkRFXHU4RUUyXHU1MjM2XHU1RkExXHJcbiAgY29uc3QgY29sbGFwc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sbGFwc2VJbXBvcnRFeHBvcnQnKTtcclxuICBjb25zdCBhcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NvcmRpb25BcnJvdycpO1xyXG4gIGNvbGxhcHNlLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3cuYnMuY29sbGFwc2UnLCAoKSA9PiB7XHJcbiAgICBhcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDE4MGRlZyknO1xyXG4gIH0pO1xyXG4gIGNvbGxhcHNlLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUuYnMuY29sbGFwc2UnLCAoKSA9PiB7XHJcbiAgICBhcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcclxuICB9KTtcclxuXHJcbiAgLy8gXHUzMDU5XHUzMDc5XHUzMDY2XHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHUzMEZCXHUzMDU5XHUzMDc5XHUzMDY2XHU4OUUzXHU5NjY0XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmstYWxsLWJ0bicpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzaG93Q29uZmlybU1vZGFsKCdcdTMwNTlcdTMwNzlcdTMwNjZcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcdTMwNTdcdTMwN0VcdTMwNTlcdTMwNEJcdUZGMUY8YnI+XHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHUzMDU3XHUzMDVGXHU1MTg1XHU1QkI5XHUzMDZGXHU1OTMxXHUzMDhGXHUzMDhDXHUzMDdFXHUzMDU5XHUzMDAyJywgKCkgPT4ge1xyXG4gICAgICBzZXRBbGxNYXJrZWQodHJ1ZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bm1hcmstYWxsLWJ0bicpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzaG93Q29uZmlybU1vZGFsKCdcdTMwNTlcdTMwNzlcdTMwNjZcdTg5RTNcdTk2NjRcdTMwNTdcdTMwN0VcdTMwNTlcdTMwNEJcdUZGMUY8YnI+XHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHUzMDU3XHUzMDVGXHU1MTg1XHU1QkI5XHUzMDZGXHU1OTMxXHUzMDhGXHUzMDhDXHUzMDdFXHUzMDU5XHUzMDAyJywgKCkgPT4ge1xyXG4gICAgICBzZXRBbGxNYXJrZWQoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gXHU1OUZGXHU5MDU1XHUzMDQ0XHUzMEI5XHUzMEE0XHUzMEMzXHUzMEMxXHJcbiAgY29uc3QgdG9nZ2xlRm9ybVN3aXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGVGb3JtU3dpdGNoJyk7XHJcbiAgaWYgKHRvZ2dsZUZvcm1Td2l0Y2gpIHtcclxuICAgIHRvZ2dsZUZvcm1Td2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICBzYXZlRm9ybVN3aXRjaFN0YXRlKHRvZ2dsZUZvcm1Td2l0Y2guY2hlY2tlZCk7XHJcbiAgICAgIGZpbHRlckZvcm1WYXJpYW50cyh0b2dnbGVGb3JtU3dpdGNoLmNoZWNrZWQsIGZhbHNlKTtcclxuICAgICAgdXBkYXRlUHJvZ3Jlc3MoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBzaG93RXhwb3J0TW9kYWwoKSB7XHJcbiAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb2tlbW9uLWNoZWNrbGlzdCcpIHx8ICcnO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBvcnRUZXh0YXJlYScpLnZhbHVlID0gZGF0YTtcclxuICBleHBvcnRNb2RhbC5zaG93KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dJbXBvcnRNb2RhbCgpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0VGV4dGFyZWEnKS52YWx1ZSA9ICcnO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnRFcnJvcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgaW1wb3J0TW9kYWwuc2hvdygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVJbXBvcnQoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnRUZXh0YXJlYScpO1xyXG4gIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydEVycm9yJyk7XHJcbiAgbGV0IHZhbHVlID0gdGV4dGFyZWEudmFsdWUudHJpbSgpO1xyXG4gIGNvbnN0IGJpbiA9IExaU3RyaW5nLmRlY29tcHJlc3NGcm9tQmFzZTY0KHZhbHVlKTtcclxuICBjb25zdCBpdGVtc0xlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwb2tlbW9uLWxpc3QgLnBva2Vtb24tZ3JpZCcpLmxlbmd0aDtcclxuICBpZiAoIS9eWzAxXSskL2kudGVzdChiaW4pIHx8IGJpbi5sZW5ndGggIT09IGl0ZW1zTGVuKSB7XHJcbiAgICBlcnJvckRpdi50ZXh0Q29udGVudCA9ICdcdTMwQTRcdTMwRjNcdTMwRERcdTMwRkNcdTMwQzhcdTU5MzFcdTY1NTc6IFx1MzBENVx1MzBBOVx1MzBGQ1x1MzBERVx1MzBDM1x1MzBDOFx1MzA0Q1x1NkI2M1x1MzA1N1x1MzA0Rlx1MzA0Mlx1MzA4QVx1MzA3RVx1MzA1Qlx1MzA5M1x1MzAwMic7XHJcbiAgICBlcnJvckRpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bva2Vtb24tY2hlY2tsaXN0JywgdmFsdWUpO1xyXG4gIGltcG9ydE1vZGFsLmhpZGUoKTtcclxuICBsb2FkU3RhdGUoKTtcclxuICB1cGRhdGVQcm9ncmVzcygpO1xyXG4gIHN5bmNEZXRhaWxzV2l0aENoZWNrZXIoKTtcclxuICBzeW5jRHVuZ2VvbldpdGhDaGVja2VyKCk7XHJcbn1cclxuXHJcbi8vIFx1MzA1OVx1MzA3OVx1MzA2Nlx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlx1MzBGQlx1MzA1OVx1MzA3OVx1MzA2Nlx1ODlFM1x1OTY2NFx1MzA2RVx1NUI5Rlx1ODg0Q1xyXG5mdW5jdGlvbiBzZXRBbGxNYXJrZWQobWFya2VkKSB7XHJcbiAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcG9rZW1vbi1saXN0IC5wb2tlbW9uLWdyaWQnKTtcclxuICBsZXQgYmluID0gJyc7XHJcbiAgZm9yIChsZXQgZGl2IG9mIGl0ZW1zKSB7XHJcbiAgICBiaW4gKz0gbWFya2VkID8gJzEnIDogJzAnO1xyXG4gIH1cclxuICBjb25zdCBjb21wcmVzc2VkID0gTFpTdHJpbmcuY29tcHJlc3NUb0Jhc2U2NChiaW4pO1xyXG5cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9rZW1vbi1jaGVja2xpc3QnLCBjb21wcmVzc2VkKTtcclxuICBsb2FkU3RhdGUoKTtcclxuICB1cGRhdGVQcm9ncmVzcygpO1xyXG4gIHN5bmNEZXRhaWxzV2l0aENoZWNrZXIoKTtcclxuICBzeW5jRHVuZ2VvbldpdGhDaGVja2VyKCk7XHJcbn1cclxuXHJcbi8vIFx1OEI2Nlx1NTQ0QVx1MzBFMlx1MzBGQ1x1MzBDMFx1MzBFQlx1ODg2OFx1NzkzQVxyXG5sZXQgY29uZmlybU1vZGFsO1xyXG5mdW5jdGlvbiBzaG93Q29uZmlybU1vZGFsKG1lc3NhZ2UsIG9rQ2FsbGJhY2spIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybU1vZGFsQm9keScpLmlubmVySFRNTCA9IG1lc3NhZ2U7XHJcbiAgY29uZmlybU1vZGFsID0gY29uZmlybU1vZGFsIHx8IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1Nb2RhbCcpKTtcclxuICBjb25maXJtTW9kYWwuc2hvdygpO1xyXG4gIGNvbnN0IG9rQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1Nb2RhbE9rQnRuJyk7XHJcbiAgLy8gXHU0RTAwXHU1RUE2XHUzMDYwXHUzMDUxXHUzMEE0XHUzMEQ5XHUzMEYzXHUzMEM4XHUzMDkyXHU0RUQ4XHU0RTBFXHJcbiAgb2tCdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbmZpcm1Nb2RhbC5oaWRlKCk7XHJcbiAgICBva0NhbGxiYWNrKCk7XHJcbiAgfTtcclxufVxyXG5cclxuLy8gXHUzMEQ1XHUzMEEzXHUzMEVCXHUzMEJGXHVGRjA4XHUzMEEyXHUzMENCXHUzMEUxXHUzMEZDXHUzMEI3XHUzMEU3XHUzMEYzXHUzMDZBXHUzMDU3XHVGRjA5XHJcbmZ1bmN0aW9uIGZpbHRlckZvcm1WYXJpYW50cyhleGNsdWRlRm9ybSwgaW5pdGlhbCkge1xyXG4gIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Bva2Vtb24tbGlzdCAucG9rZW1vbi1ncmlkJyk7XHJcbiAgZm9yIChsZXQgZGl2IG9mIGl0ZW1zKSB7XHJcbiAgICBpZiAoZXhjbHVkZUZvcm0gJiYgZGl2LmRhdGFzZXQuZm9ybUlkICE9PSAnMCcpIHtcclxuICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBcdThBNzNcdTdEMzBcdTYwQzVcdTU4MzFcdTUwNzRcdTMwNkJcdTMwODJcdTMwRDVcdTMwQTNcdTMwRUJcdTMwQkZcdTMwOTJcdTkwNjlcdTc1MjhcclxuICBmaWx0ZXJEZXRhaWxzRm9ybVZhcmlhbnRzKGV4Y2x1ZGVGb3JtKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1OEE3M1x1N0QzMFx1NjBDNVx1NTgzMVx1NTA3NFx1MzA2RVx1NTlGRlx1OTA1NVx1MzA0NFx1MzA5Mlx1MzBENVx1MzBBM1x1MzBFQlx1MzBCRlxyXG4gKi9cclxuZnVuY3Rpb24gZmlsdGVyRGV0YWlsc0Zvcm1WYXJpYW50cyhleGNsdWRlRm9ybSkge1xyXG4gIGNvbnN0IGRldGFpbHNJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWNydWl0LXBva2Vtb24tZ3JpZCcpO1xyXG4gIGRldGFpbHNJdGVtcy5mb3JFYWNoKChkaXYpID0+IHtcclxuICAgIGNvbnN0IGlkID0gZGl2LmRhdGFzZXQuaWQ7XHJcbiAgICBjb25zdCBjaGVja2VyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBva2Vtb24tZ3JpZFtkYXRhLWlkPVwiJHtpZH1cIl1gKTtcclxuXHJcbiAgICBpZiAoY2hlY2tlckRpdikge1xyXG4gICAgICBjb25zdCBmb3JtSWQgPSBwYXJzZUludChjaGVja2VyRGl2LmRhdGFzZXQuZm9ybUlkKTtcclxuICAgICAgaWYgKGV4Y2x1ZGVGb3JtICYmIGZvcm1JZCAhPT0gMCkge1xyXG4gICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlx1NzJCNlx1NjE0Qlx1MzA5Mlx1NzhCQVx1OEE4RFx1MzA1N1x1MzA2Nlx1ODg2OFx1NzkzQS9cdTk3NUVcdTg4NjhcdTc5M0FcdTMwOTJcdTZDN0FcdTVCOUFcclxuICAgICAgICBjb25zdCBpc0NoZWNrZWQgPSBjaGVja2VyRGl2LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tlZCcpO1xyXG4gICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gaXNDaGVja2VkID8gJ25vbmUnIDogJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluZGV4SWRcdTMwNEJcdTMwODlcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNJRFx1MzA2Qlx1NTkwOVx1NjNEQlxyXG4gKiBAcGFyYW0geyp9IGluZGV4SWRcclxuICovXHJcbmZ1bmN0aW9uIGluZGV4VG9Qb2tlbW9uSWQoaW5kZXhJZCkge1xyXG4gIGNvbnN0IGZvcm1JZHMgPSBbXHJcbiAgICBbNDM5LCAweDFiZl0sIC8vIFx1NzgwMlx1MzBERlx1MzBDRVx1MzBFMFx1MzBDM1x1MzBDMVxyXG4gICAgWzQzOCwgMHgxYzBdLCAvLyBcdTgzNDlcdTMwREZcdTMwQ0VcdTMwRTBcdTMwQzNcdTMwQzFcclxuICAgIFs0NDAsIDB4MWMxXSwgLy8gXHU5MkZDXHUzMERGXHUzMENFXHUzMEUwXHUzMEMzXHUzMEMxXHJcbiAgICBbNDQyLCAweDFjMl0sIC8vIFx1NzgwMlx1MzBERlx1MzBDRVx1MzBERVx1MzBDMFx1MzBFMFxyXG4gICAgWzQ0MSwgMHgxYzNdLCAvLyBcdTgzNDlcdTMwREZcdTMwQ0VcdTMwREVcdTMwQzBcdTMwRTBcclxuICAgIFs0NDMsIDB4MWM0XSwgLy8gXHU5MkZDXHUzMERGXHUzMENFXHUzMERFXHUzMEMwXHUzMEUwXHJcbiAgICBbNDUzLCAweDFjZV0sIC8vIFx1Njc3MVx1MzBBQlx1MzBFOVx1MzBDQVx1MzBBRlx1MzBCN1xyXG4gICAgWzQ1MiwgMHgxY2ZdLCAvLyBcdTg5N0ZcdTMwQUJcdTMwRTlcdTMwQ0FcdTMwQUZcdTMwQjdcclxuICAgIFs0NTUsIDB4MWQwXSwgLy8gXHU2NzcxXHUzMEM4XHUzMEVBXHUzMEM4XHUzMEM5XHUzMEYzXHJcbiAgICBbNDU0LCAweDFkMV0sIC8vIFx1ODk3Rlx1MzBDOFx1MzBFQVx1MzBDOFx1MzBDOVx1MzBGM1xyXG4gIF07XHJcblxyXG4gIGxldCBpZCA9IGluZGV4SWQgKyAxO1xyXG4gIC8vIFx1NTlGRlx1OTA1NVx1MzA0NFx1MzA5Mlx1NTkwOVx1NjNEQlxyXG4gIGZvciAoY29uc3QgZm9ybUlkIG9mIGZvcm1JZHMpIHtcclxuICAgIGlmIChpbmRleElkID09IGZvcm1JZFswXSkge1xyXG4gICAgICByZXR1cm4gZm9ybUlkWzFdO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBcdTk2NjRcdTU5MTZcdTMwNTlcdTMwOEJcdTU5RkZcdTkwNTVcdTMwNDRcdTMwOTJcdTMwQjlcdTMwQURcdTMwQzNcdTMwRDdcclxuICBmb3IgKGNvbnN0IGp1bXBJZCBvZiBiYW5uZWRQb2tlbW9uSWRzKSB7XHJcbiAgICBpZiAoaWQgPj0ganVtcElkKSBpZCsrO1xyXG4gICAgZWxzZSBicmVhaztcclxuICB9XHJcbiAgcmV0dXJuIGlkO1xyXG59XHJcblxyXG4vKipcclxuICogXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzSURcdTMwNEJcdTMwODkgSW5kZXhJZCBcdTMwNkJcdTkwMDZcdTU5MDlcdTYzREJcclxuICogQHBhcmFtIHsqfSBwb2tlbW9uSWRcclxuICovXHJcbmZ1bmN0aW9uIHBva2Vtb25JZFRvSW5kZXgocG9rZW1vbklkKSB7XHJcbiAgbGV0IGlkID0gcG9rZW1vbklkO1xyXG4gIGNvbnN0IGZvcm1JZHMgPSBbXHJcbiAgICBbNDM5LCAweDFiZl0sIC8vIFx1NzgwMlx1MzBERlx1MzBDRVx1MzBFMFx1MzBDM1x1MzBDMVxyXG4gICAgWzQzOCwgMHgxYzBdLCAvLyBcdTgzNDlcdTMwREZcdTMwQ0VcdTMwRTBcdTMwQzNcdTMwQzFcclxuICAgIFs0NDAsIDB4MWMxXSwgLy8gXHU5MkZDXHUzMERGXHUzMENFXHUzMEUwXHUzMEMzXHUzMEMxXHJcbiAgICBbNDQyLCAweDFjMl0sIC8vIFx1NzgwMlx1MzBERlx1MzBDRVx1MzBERVx1MzBDMFx1MzBFMFxyXG4gICAgWzQ0MSwgMHgxYzNdLCAvLyBcdTgzNDlcdTMwREZcdTMwQ0VcdTMwREVcdTMwQzBcdTMwRTBcclxuICAgIFs0NDMsIDB4MWM0XSwgLy8gXHU5MkZDXHUzMERGXHUzMENFXHUzMERFXHUzMEMwXHUzMEUwXHJcbiAgICBbNDUzLCAweDFjZV0sIC8vIFx1Njc3MVx1MzBBQlx1MzBFOVx1MzBDQVx1MzBBRlx1MzBCN1xyXG4gICAgWzQ1MiwgMHgxY2ZdLCAvLyBcdTg5N0ZcdTMwQUJcdTMwRTlcdTMwQ0FcdTMwQUZcdTMwQjdcclxuICAgIFs0NTUsIDB4MWQwXSwgLy8gXHU2NzcxXHUzMEM4XHUzMEVBXHUzMEM4XHUzMEM5XHUzMEYzXHJcbiAgICBbNDU0LCAweDFkMV0sIC8vIFx1ODk3Rlx1MzBDOFx1MzBFQVx1MzBDOFx1MzBDOVx1MzBGM1xyXG4gIF07XHJcblxyXG4gIC8vIFx1NTlGRlx1OTA1NVx1MzA0NFx1MzA2RVx1NTAyNFx1NTkwOVx1NjNEQlxyXG4gIGZvciAoY29uc3QgW2Jhc2VJZCwgYWx0SWRdIG9mIGZvcm1JZHMpIHtcclxuICAgIGlmIChwb2tlbW9uSWQgPT09IGFsdElkKSB7XHJcbiAgICAgIHJldHVybiBiYXNlSWQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIFx1OTY2NFx1NTkxNlx1MzA1OVx1MzA4Qlx1NTlGRlx1OTA1NVx1MzA0NFx1MzA5Mlx1MzBCOVx1MzBBRFx1MzBDM1x1MzBEN1xyXG4gIGZvciAobGV0IGkgPSBiYW5uZWRQb2tlbW9uSWRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICBjb25zdCBqdW1wSWQgPSBiYW5uZWRQb2tlbW9uSWRzW2ldO1xyXG4gICAgaWYgKGlkID4ganVtcElkKSBpZC0tO1xyXG4gIH1cclxuICAvLyBcdTUyMURcdTY3MUZcdTUwMjRcdTMwNEMxXHUzMEI5XHUzMEJGXHUzMEZDXHUzMEM4XHUzMDZBXHUzMDZFXHUzMDY3XHUzMDAxXHUzMDUzXHUzMDYxXHUzMDg5XHUzMDZGLTFcdTMwNTlcdTMwOEJcclxuICByZXR1cm4gaWQgLSAxO1xyXG59XHJcblxyXG4vKipcclxuICogXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMDZFXHUzMEI5XHUzMEREXHUzMEZDXHUzMEYzXHU2MEM1XHU1ODMxXHUzMDkyXHU0RjVDXHU2MjEwXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVNwYXduRGF0YSgpIHtcclxuICBjb25zdCBkYXRhID0gW107XHJcbiAgY29uc3QgYmFubmVkID0gWzB4MTdjLCAweDE3ZCwgMHgxN2VdO1xyXG5cclxuICAvLyBcdTUyRTdcdThBOThcdTUzRUZcdTgwRkRcdTMwRkJcdTY3MDlcdTUyQjlcdTMwQzBcdTMwRjNcdTMwQjhcdTMwRTdcdTMwRjNcdTMwNkVcdTMwN0ZcdTMwNkJcdTdENUVcdTMwOEFcdThGQkNcdTMwODBcclxuICBjb25zdCBkdW5nZW9ucyA9IER1bmdlb25EYXRhLmZpbHRlcihcclxuICAgIChyKSA9PiByLklkIDw9IDB4YmYgJiYgci5JZCAhPSA5ICYmIHIuSWQgIT0gMTEgJiYgci5JZCAhPSAxMyAmJiAhaXNVbnVzZWREdW5nZW9uKHIuSWQpICYmIHIuRmxhZ1JlY3J1aXQsXHJcbiAgKTtcclxuXHJcbiAgZm9yIChjb25zdCBkdW5nZW9uIG9mIGR1bmdlb25zKSB7XHJcbiAgICBjb25zdCBkdW5nZW9uTmFtZSA9IGR1bmdlb24uSW5OYW1lO1xyXG4gICAgY29uc3QgbWFwcGFJbmRleCA9IHBhcnNlSW50KGR1bmdlb24uTWFwcGFJbmRleCk7XHJcbiAgICBjb25zdCBmbG9vclByZXYgPSBwYXJzZUludChkdW5nZW9uLkZsb29yUHJldik7XHJcbiAgICBjb25zdCBmbG9vckNvdW50ID0gcGFyc2VJbnQoZHVuZ2Vvbi5GbG9vckNvdW50KTtcclxuICAgIC8vIFx1NTZGQVx1NUI5QVx1MzBENVx1MzBFRFx1MzBBMlx1MzA5Mlx1OTY2NFx1NTkxNiAoXHU1QjlEXHU3QkIxXHUzMEQ1XHUzMEVEXHUzMEEyXHUzMDZGXHU4QTMxXHU1M0VGKVxyXG4gICAgY29uc3QgZmxvb3JzID0gRmxvb3JEYXRhW21hcHBhSW5kZXhdXHJcbiAgICAgIC5zbGljZShmbG9vclByZXYgKyAxLCBmbG9vclByZXYgKyAxICsgZmxvb3JDb3VudClcclxuICAgICAgLmZpbHRlcigocikgPT4gci5GaXhlZEZsb29ySWQgPT0gMCB8fCByLkZpeGVkRmxvb3JJZCA+PSAweGFhKTtcclxuXHJcbiAgICBpZiAoZmxvb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yIChjb25zdCBmbG9vciBvZiBmbG9vcnMpIHtcclxuICAgICAgICBjb25zdCBlbmVteVRhYmxlSWQgPSBwYXJzZUludChmbG9vci5JbmRleEdyb3VwLlNwYXduRW5lbXkpO1xyXG4gICAgICAgIGNvbnN0IGVuZW1pZXMgPSBNYXBwYVNEYXRhLkVuZW15RGF0YVtlbmVteVRhYmxlSWRdO1xyXG5cclxuICAgICAgICAvLyBcdTY1NzVcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNcdTMwQzdcdTMwRkNcdTMwQkZcdTMwOTJcdTMwQkJcdTMwQzNcdTMwQzggKFx1MzBBQlx1MzBBRlx1MzBFQ1x1MzBBQVx1MzBGM1x1MzA5Mlx1NUY4Q1x1MzA4RFx1MzA2Qlx1MzA1OVx1MzA4QilcclxuICAgICAgICBmb3IgKGNvbnN0IGVuZW15IG9mIGVuZW1pZXMpIHtcclxuICAgICAgICAgIGNvbnN0IHBva2Vtb25JZCA9IHBhcnNlSW50KGVuZW15LlBva2Vtb25JZCk7XHJcblxyXG4gICAgICAgICAgLy8gXHUzMEQ1XHUzMEE5XHUzMEVCXHUzMEUwXHUzMEMxXHUzMEE3XHUzMEYzXHUzMEI4XHUzMDU3XHUzMDVGXHUzMEREXHUzMEVGXHUzMEVCXHUzMEYzXHUzMDkyXHU5NjY0XHU1OTE2XHJcbiAgICAgICAgICBpZiAoYmFubmVkLmluY2x1ZGVzKHBva2Vtb25JZCkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgIC8vIFx1MzBBQlx1MzBBRlx1MzBFQ1x1MzBBQVx1MzBGM1x1MzA2RVx1NTgzNFx1NTQwOFx1MzAwMVx1NUU5N1x1MzA0Q1x1NTFGQVx1MzA4Qlx1MzBENVx1MzBFRFx1MzBBMlx1MzA2RVx1MzA3Rlx1MzA2Qlx1N0Q1RVx1MzA4QlxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBwb2tlbW9uSWQgPT0gMHgxN2YgJiZcclxuICAgICAgICAgICAgIShmbG9vci5DaGFuY2VLZWNsZW9uU2hvcCA+IDAgJiYgZmxvb3IuRml4ZWRGbG9vcklkID09IDAgJiYgZmxvb3IuQ2hhbmNlTW9uc3RlckhvdXNlIDwgMTAwKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIFx1MzA2QVx1MzA2Qlx1MzA0Qlx1MzA2RVx1NTgzNFx1NTQwOFx1OTY2NFx1NTkxNlxyXG4gICAgICAgICAgaWYgKHBva2Vtb25JZCA9PSAweDIyOSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgZGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgZHVuZ2VvbjogcGFyc2VJbnQoZHVuZ2Vvbi5JZCksXHJcbiAgICAgICAgICAgIGR1bmdlb25OYW1lOiBkdW5nZW9uTmFtZSxcclxuICAgICAgICAgICAgZmxvb3I6IHBhcnNlSW50KGZsb29yLkZsb29yTm8pIC0gZmxvb3JQcmV2LFxyXG4gICAgICAgICAgICBsZXZlbDogcGFyc2VJbnQoZW5lbXkuTGV2ZWwpLFxyXG4gICAgICAgICAgICBwb2tlbW9uSWQ6IHBva2Vtb25JZCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1MzA2RVx1NTJFN1x1OEE5OFx1NjBDNVx1NTgzMVx1MzA5Mlx1NEY1Q1x1NjIxMFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVSZWNydWl0RGF0YSgpIHtcclxuICBjb25zdCBkYXRhcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tQb2tlbW9uRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgaWQgPSBpbmRleFRvUG9rZW1vbklkKGkpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWQ6IGlkLFxyXG4gICAgICBuYW1lOiBQb2tlbW9uRGF0YVtpZF0uTmFtZSxcclxuICAgICAgc3VibmFtZTogUG9rZW1vbkRhdGFbaWRdLlN1Yk5hbWUsXHJcbiAgICAgIGV2b2xUZXh0OiBnZXRFdm9sVGV4dERhdGEoaWQpLFxyXG4gICAgICByZWNydWl0OiBzcGF3bkRhdGEuZmlsdGVyKChyKSA9PiByLnBva2Vtb25JZCA9PSBpZCksXHJcbiAgICB9O1xyXG4gICAgZGF0YXMucHVzaChkYXRhKTtcclxuICB9XHJcbiAgcmV0dXJuIGRhdGFzO1xyXG59XHJcblxyXG4vKipcclxuICogXHU1MkU3XHU4QTk4XHU2MEM1XHU1ODMxXHU4OTgxXHU3RDIwXHUzMDkyXHU0RjVDXHU2MjEwXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVHdWlkZSgpIHtcclxuICBjb25zdCByZWNydWl0RGF0YSA9IGdlbmVyYXRlUmVjcnVpdERhdGEoKTtcclxuXHJcbiAgLy8gXHU1MTY4XHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzSURcdTMwOTJcdTUzRDZcdTVGOTdcclxuICBjb25zdCBpZHMgPSBbXTtcclxuICBjb25zdCB3cmFwRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNydWl0LXBva2Vtb24nKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrUG9rZW1vbkRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGlkID0gaW5kZXhUb1Bva2Vtb25JZChpKTtcclxuICAgIGNvbnN0IHNwYXduID0gcmVjcnVpdERhdGEuZmluZCgocikgPT4gci5pZCA9PSBpZCk7XHJcblxyXG4gICAgaWRzLnB1c2goaWQpO1xyXG4gICAgY29uc3QgcG9rZW1vbiA9IFBva2Vtb25EYXRhW2lkXTtcclxuICAgIGNvbnN0IGdyaWRIdG1sID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmVjcnVpdC1wb2tlbW9uLWdyaWQgcm91bmRlZFwiIGRhdGEtaWQ9XCIke2lkfVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZWNydWl0LXBva2Vtb24tZ3JpZC1pbm5lclwiPlxyXG4gICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwicmVjcnVpdC1wb2tlbW9uLWltZ1wiIHNyYz1cIiR7Z2V0UG9rZW1vblNwcml0ZVVybChpKX1cIj5cclxuICAgICAgICAgICAgPHNwYW4+JHtwb2tlbW9uLk5hbWV9JHtwb2tlbW9uLlN1Yk5hbWUgPyBgKCR7cG9rZW1vbi5TdWJOYW1lfSlgIDogJyd9PC9zcGFuPlxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwicmVjcnVpdC1yYXRlIHNtYWxsLXRleHRcIj5cclxuICAgICAgICAgICAgPHNwYW4+XHU1N0ZBXHU3OTBFXHU1MkU3XHU4QTk4XHU3Mzg3OiAkeyhwb2tlbW9uLlJlY3J1aXRSYXRlMSAvIDEwKS50b0ZpeGVkKDEpfSUke3Bva2Vtb24uUmVjcnVpdFJhdGUxICE9IHBva2Vtb24uUmVjcnVpdFJhdGUyID8gYCAoJHsocG9rZW1vbi5SZWNydWl0UmF0ZTIgLyAxMCkudG9GaXhlZCgxKX0lKWAgOiAnJ31cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgY29uc3QgZ3JpZCA9IHBhcnNlSFRNTChncmlkSHRtbCk7XHJcbiAgICBjb25zdCBpbm5lciA9IGdyaWQucXVlcnlTZWxlY3RvcignLnJlY3J1aXQtcG9rZW1vbi1ncmlkLWlubmVyJyk7XHJcblxyXG4gICAgLy8gXHU5MDMyXHU1MzE2XHU2NUI5XHU2Q0Q1XHJcbiAgICBjb25zdCBkaXZSZWNydWl0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2UmVjcnVpdFdyYXAuY2xhc3NMaXN0LmFkZCgncmVjcnVpdC13cmFwJywgJ3NtYWxsLXRleHQnKTtcclxuICAgIGlmIChzcGF3bi5ldm9sVGV4dC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGRpdlJlY3J1aXRXcmFwLmlubmVySFRNTCA9IGBcclxuICAgICAgPHAgY2xhc3M9XCJtYi0xXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSB0ZXh0LWJnLWRhbmdlciBtZS0xXCI+XHU5MDMyXHU1MzE2PC9zcGFuPiR7c3Bhd24uZXZvbFRleHR9XHJcbiAgICAgIDwvcD5gO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFx1NTFGQVx1NzNGRVx1MzBDMFx1MzBGM1x1MzBCOFx1MzBFN1x1MzBGM1x1MzA5Mlx1MzBDMFx1MzBGM1x1MzBCOFx1MzBFN1x1MzBGM1x1MzBGQlx1OTY4RVx1NUM2NFx1OTAyM1x1NzU2QVx1MzA1NFx1MzA2OFx1MzA2Qlx1MzBCMFx1MzBFQlx1MzBGQ1x1MzBEN1x1NTMxNlxyXG4gICAgY29uc3QgZHVuZ2Vvbkdyb3VwcyA9IG5ldyBNYXAoKTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBzcGF3bi5yZWNydWl0KSB7XHJcbiAgICAgIGNvbnN0IGR1bmdlb25JZCA9IGl0ZW0uZHVuZ2VvbjtcclxuICAgICAgaWYgKCFkdW5nZW9uR3JvdXBzLmhhcyhkdW5nZW9uSWQpKSB7XHJcbiAgICAgICAgZHVuZ2Vvbkdyb3Vwcy5zZXQoZHVuZ2VvbklkLCBbXSk7XHJcbiAgICAgIH1cclxuICAgICAgZHVuZ2Vvbkdyb3Vwcy5nZXQoZHVuZ2VvbklkKS5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVjcnVpdEdyb3VwcyA9IHt9O1xyXG4gICAgZm9yIChjb25zdCBbZHVuZ2VvbklkLCBpdGVtc10gb2YgZHVuZ2Vvbkdyb3Vwcy5lbnRyaWVzKCkpIHtcclxuICAgICAgY29uc3Qgc29ydGVkID0gaXRlbXMuc2xpY2UoKS5zb3J0KChhLCBiKSA9PiBhLmZsb29yIC0gYi5mbG9vcik7XHJcbiAgICAgIGNvbnN0IGdyb3VwcyA9IFtdO1xyXG4gICAgICBsZXQgY3VycmVudCA9IFtzb3J0ZWRbMF1dO1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNvcnRlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHByZXYgPSBzb3J0ZWRbaSAtIDFdLmZsb29yO1xyXG4gICAgICAgIGNvbnN0IGN1ciA9IHNvcnRlZFtpXS5mbG9vcjtcclxuXHJcbiAgICAgICAgaWYgKGN1ciA9PT0gcHJldiArIDEpIHtcclxuICAgICAgICAgIGN1cnJlbnQucHVzaChzb3J0ZWRbaV0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBncm91cHMucHVzaChjdXJyZW50KTtcclxuICAgICAgICAgIGN1cnJlbnQgPSBbc29ydGVkW2ldXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZ3JvdXBzLnB1c2goY3VycmVudCk7XHJcbiAgICAgIHJlY3J1aXRHcm91cHNbZHVuZ2VvbklkXSA9IGdyb3VwcztcclxuICAgIH1cclxuICAgIC8vIFx1MzBDMFx1MzBGM1x1MzBCOFx1MzBFN1x1MzBGM1x1NkJDRVxyXG4gICAgZm9yIChjb25zdCBbZHVuZ2VvbklkLCBncm91cF0gb2YgT2JqZWN0LmVudHJpZXMocmVjcnVpdEdyb3VwcykpIHtcclxuICAgICAgY29uc3QgZHVuZ2VvbiA9IER1bmdlb25EYXRhW2R1bmdlb25JZF07XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRIdG1sID0gYFxyXG4gICAgICAgIDxwIGNsYXNzPVwibWItMVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSB0ZXh0LWJnLXByaW1hcnkgbWUtMVwiPlx1NTJFN1x1OEE5ODwvc3Bhbj5cclxuICAgICAgICAgICR7XHJcbiAgICAgICAgICAgIC8vIFx1OTA1M1x1NTE3N1x1NUZDNVx1OTgwOFx1MzA2RVx1NTgzNFx1NTQwOFx1MzA2QVx1MzA1RVx1MzA2RVx1MzBEMVx1MzBGQ1x1MzBDNFx1MzBBMlx1MzBBNFx1MzBCM1x1MzBGM1x1ODg2OFx1NzkzQVxyXG4gICAgICAgICAgICBwb2tlbW9uLkJpdF9JdGVtUmVxdWlyZWRTcGF3bmluZyA/ICc8c3BhbiBjbGFzcz1cIml0ZW0tc3ByaXRlIHNwcml0ZS0xOC0zXCI+PC9zcGFuPicgOiAnJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJHtkdW5nZW9uLkluTmFtZX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIGA7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBwYXJzZUhUTUwoZWxlbWVudEh0bWwpO1xyXG5cclxuICAgICAgY29uc3QgZmxvb3JHcm91cEFyciA9IFtdO1xyXG4gICAgICBmb3IgKGNvbnN0IGZsb29yR3JvdXAgb2YgZ3JvdXApIHtcclxuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbiguLi5mbG9vckdyb3VwLm1hcCgoeCkgPT4geC5mbG9vcikpO1xyXG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLmZsb29yR3JvdXAubWFwKCh4KSA9PiB4LmZsb29yKSk7XHJcbiAgICAgICAgY29uc3Qgc3RhaXJzID0gZHVuZ2Vvbi5GbGFnU3RhaXJzID8gJycgOiAnQic7XHJcbiAgICAgICAgZmxvb3JHcm91cEFyci5wdXNoKG1pbiAhPSBtYXggPyBgJHtzdGFpcnN9JHttaW59Rlx1RkY1RSR7c3RhaXJzfSR7bWF4fUZgIDogYCR7c3RhaXJzfSR7bWlufUZgKTtcclxuICAgICAgfVxyXG4gICAgICBlbGVtZW50LmlubmVySFRNTCArPSBgICR7Zmxvb3JHcm91cEFyci5qb2luKCcsICcpfWA7XHJcbiAgICAgIGRpdlJlY3J1aXRXcmFwLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFx1MzBBNFx1MzBEOVx1MzBGM1x1MzBDOFx1NTJFN1x1OEE5OFxyXG4gICAgY29uc3QgZXZlbnQgPSBldmVudFJlY3R1aXQuZmluZCgocikgPT4gci5pZCA9PSBpZCk7XHJcbiAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgcC5jbGFzc0xpc3QuYWRkKCdtYi0xJyk7XHJcbiAgICAgIHAuaW5uZXJIVE1MICs9IGA8c3BhbiBjbGFzcz1cImJhZGdlIGJnLWluZGlnbyBtZS0xXCI+XHUzMEE0XHUzMEQ5XHUzMEYzXHUzMEM4PC9zcGFuPiR7ZXZlbnQuY29udGV4dH1gO1xyXG4gICAgICBkaXZSZWNydWl0V3JhcC5hcHBlbmRDaGlsZChwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBcdTMwQUJcdTMwRDVcdTMwQTdcclxuICAgIGlmIChwYXJhbXMuQ0FGRV9SRUNSVUlUX1RBQkxFLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICBkaXZSZWNydWl0V3JhcC5hcHBlbmRDaGlsZChcclxuICAgICAgICBwYXJzZUhUTUwoYFxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJtYi0xIGNhZmVcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSB0ZXh0LWJnLXNlY29uZGFyeSBtZS0xXCI+XHUzMEFCXHUzMEQ1XHUzMEE3PC9zcGFuPlxyXG4gICAgICAgICAgICBcdTMwQzlcdTMwRUFcdTMwRjNcdTMwQUZcdTMwOTJcdTk4RjJcdTMwOTNcdTMwNjdcdTc4QkFcdTczODdcdTMwNjdcdTUyRTdcdThBOThcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICBgKSxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBcdTMwQjdcdTMwQ0FcdTMwRUFcdTMwQUFcclxuICAgIGNvbnN0IHNjZW5hcmlvID0gcGFyc2VIVE1MKGA8cCBjbGFzcz1cInNtYWxsLXRleHQgbWItMSBmdy1ib2xkXCI+PC9wPmApO1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKHJlY3J1aXRHcm91cHMpLmxlbmd0aCA+IDAgJiYgcG9rZW1vbi5VbmxvY2tTY2VuYXJpbyA+IDApIHtcclxuICAgICAgc2NlbmFyaW8udGV4dENvbnRlbnQgPSBgXHUyMDNCJHtwYXJhbXMuU0NFTkFSSU9fU1RSSU5HU1twb2tlbW9uLlVubG9ja1NjZW5hcmlvXX1cdTMwNkJcdTUxRkFcdTczRkVgO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlx1MzBEQ1x1MzBCRlx1MzBGM1xyXG4gICAgY29uc3QgYnRuQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBidG5DaGVjay5jbGFzc0xpc3QuYWRkKCdyZWNydWl0LWNoZWNrJyk7XHJcbiAgICBidG5DaGVjay5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJiaSBiaS1jaGVjazItY2lyY2xlXCI+PC9pPic7XHJcbiAgICBidG5DaGVjay5kYXRhc2V0LmlzQW5pbWF0aW5nID0gJ2ZhbHNlJztcclxuICAgIGJ0bkNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgaWYgKGJ0bkNoZWNrLmRhdGFzZXQuaXNBbmltYXRpbmcgPT09ICd0cnVlJykgcmV0dXJuO1xyXG4gICAgICBjb25zdCBjaGVja2VySXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb2tlbW9uLWdyaWRbZGF0YS1pZD1cIiR7aWR9XCJdYCk7XHJcbiAgICAgIGlmIChjaGVja2VySXRlbSkge1xyXG4gICAgICAgIGJ0bkNoZWNrLmRhdGFzZXQuaXNBbmltYXRpbmcgPSAndHJ1ZSc7XHJcbiAgICAgICAgdG9nZ2xlUG9rZW1vbkNoZWNrZWQoY2hlY2tlckl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpbm5lci5hcHBlbmRDaGlsZChkaXZSZWNydWl0V3JhcCk7XHJcbiAgICBpbm5lci5hcHBlbmRDaGlsZChzY2VuYXJpbyk7XHJcbiAgICBpbm5lci5hcHBlbmRDaGlsZChidG5DaGVjayk7XHJcbiAgICBncmlkLmFwcGVuZENoaWxkKGlubmVyKTtcclxuXHJcbiAgICB3cmFwRWxlbWVudC5hcHBlbmRDaGlsZChncmlkKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUJcdTMwRkNcdTMwNkVcdTcyQjZcdTYxNEJcdTMwOTJcdThBNzNcdTdEMzBcdTYwQzVcdTU4MzFcdTMwNkJcdTU0MENcdTY3MUZcclxuICovXHJcbmZ1bmN0aW9uIHN5bmNEZXRhaWxzV2l0aENoZWNrZXIoKSB7XHJcbiAgY29uc3QgZGV0YWlsc0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlY3J1aXQtcG9rZW1vbi1ncmlkJyk7XHJcbiAgY29uc3QgZXhjbHVkZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlRm9ybVN3aXRjaCcpPy5jaGVja2VkO1xyXG4gIGNvbnN0IGRldGFpbFRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWwtdGFiLXBhbmUnKTtcclxuICBjb25zdCBpc0RldGFpbFRhYlZpc2libGUgPSBkZXRhaWxUYWIgJiYgZGV0YWlsVGFiLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpO1xyXG5cclxuICBkZXRhaWxzSXRlbXMuZm9yRWFjaCgoZGV0YWlsRGl2KSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IGRldGFpbERpdi5kYXRhc2V0LmlkO1xyXG4gICAgY29uc3QgY2hlY2tlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb2tlbW9uLWdyaWRbZGF0YS1pZD1cIiR7aWR9XCJdYCk7XHJcbiAgICBjb25zdCBidG5DaGVjayA9IGRldGFpbERpdi5xdWVyeVNlbGVjdG9yKCcucmVjcnVpdC1jaGVjaycpO1xyXG4gICAgY29uc3QgZm9ybUlkID0gcGFyc2VJbnQoY2hlY2tlckRpdi5kYXRhc2V0LmZvcm1JZCk7XHJcblxyXG4gICAgaWYgKGNoZWNrZXJEaXYpIHtcclxuICAgICAgLy8gXHU1OUZGXHU5MDU1XHUzMDQ0XHUzMEQ1XHUzMEEzXHUzMEVCXHUzMEJGXHU5MDY5XHU3NTI4XHU0RTJEXHUzMDRCXHUzMDY0XHU1N0ZBXHU2NzJDXHU1RjYyXHUzMDY3XHUzMDZBXHUzMDQ0XHU1ODM0XHU1NDA4XHUzMDZGXHU5NzVFXHU4ODY4XHU3OTNBXHJcbiAgICAgIGlmIChleGNsdWRlRm9ybSAmJiBmb3JtSWQgIT09IDApIHtcclxuICAgICAgICBkZXRhaWxEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGlzQ2hlY2tlZCA9IGNoZWNrZXJEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkJyk7XHJcbiAgICAgIGlmIChpc0NoZWNrZWQpIHtcclxuICAgICAgICBpZiAoaXNEZXRhaWxUYWJWaXNpYmxlKSB7XHJcbiAgICAgICAgICAvLyBcdTg5ODFcdTdEMjBcdTMwNkVcdTlBRDhcdTMwNTVcdTMwNjhcdTMwQUVcdTMwRTNcdTMwQzNcdTMwRDdcdTMwOTJcdTUzRDZcdTVGOTdcclxuICAgICAgICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSBkZXRhaWxEaXYub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICAgIC8vIENTUyBcdTU5MDlcdTY1NzBcdTMwOTJcdThBMkRcdTVCOUFcclxuICAgICAgICAgIGRldGFpbERpdi5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1pdGVtLWhlaWdodCcsIGl0ZW1IZWlnaHQgKyAncHgnKTtcclxuXHJcbiAgICAgICAgICAvLyBcdTMwQTJcdTMwQ0JcdTMwRTFcdTMwRkNcdTMwQjdcdTMwRTdcdTMwRjNcdTRFRDhcdTMwNERcdTMwNjdcdTk3NUVcdTg4NjhcdTc5M0FcdTUzMTZcclxuICAgICAgICAgIGRldGFpbERpdi5jbGFzc0xpc3QuYWRkKCdoaWRpbmcnKTtcclxuICAgICAgICAgIGRldGFpbERpdi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAnYW5pbWF0aW9uZW5kJyxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRldGFpbERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgIGRldGFpbERpdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRpbmcnKTtcclxuICAgICAgICAgICAgICBpZiAoYnRuQ2hlY2spIHtcclxuICAgICAgICAgICAgICAgIGJ0bkNoZWNrLmRhdGFzZXQuaXNBbmltYXRpbmcgPSAnZmFsc2UnO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyBvbmNlOiB0cnVlIH0sXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBcdTMwQkZcdTMwRDZcdTMwNENcdTk3NUVcdTg4NjhcdTc5M0FcdTMwNkVcdTU4MzRcdTU0MDhcdTMwNkZcdTMwQTJcdTMwQ0JcdTMwRTFcdTMwRkNcdTMwQjdcdTMwRTdcdTMwRjNcdTMwNkFcdTMwNTdcdTMwNjdcdTk3NUVcdTg4NjhcdTc5M0FcdTUzMTZcclxuICAgICAgICAgIGRldGFpbERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgaWYgKGJ0bkNoZWNrKSB7XHJcbiAgICAgICAgICAgIGJ0bkNoZWNrLmRhdGFzZXQuaXNBbmltYXRpbmcgPSAnZmFsc2UnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcdTg5RTNcdTk2NjRcdTY2NDJcdTMwNkZcdTg4NjhcdTc5M0FcclxuICAgICAgICBkZXRhaWxEaXYuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgIGRldGFpbERpdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRpbmcnKTtcclxuICAgICAgICBpZiAoYnRuQ2hlY2spIHtcclxuICAgICAgICAgIGJ0bkNoZWNrLmRhdGFzZXQuaXNBbmltYXRpbmcgPSAnZmFsc2UnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogXHUzMEI5XHUzMEREXHUzMEZDXHUzMEYzXHUzMEM3XHUzMEZDXHUzMEJGXHUzMDkyXHUzMEIwXHUzMEVCXHUzMEZDXHUzMEQ3XHU1MzE2XHUzMDU3XHUzMDY2XHU1M0Q2XHU1Rjk3XHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVNwYXduR3JvdXAoKSB7XHJcbiAgY29uc3QgZHVuZ2Vvbk1hcCA9IG5ldyBNYXAoKTtcclxuXHJcbiAgZm9yIChjb25zdCBpdGVtIG9mIHNwYXduRGF0YSkge1xyXG4gICAgaWYgKCFkdW5nZW9uTWFwLmhhcyhpdGVtLmR1bmdlb24pKSB7XHJcbiAgICAgIGR1bmdlb25NYXAuc2V0KGl0ZW0uZHVuZ2VvbiwgW10pO1xyXG4gICAgfVxyXG4gICAgZHVuZ2Vvbk1hcC5nZXQoaXRlbS5kdW5nZW9uKS5wdXNoKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzdWx0ID0ge307XHJcblxyXG4gIGZvciAoY29uc3QgW2R1bmdlb24sIGR1bmdlb25JdGVtc10gb2YgZHVuZ2Vvbk1hcC5lbnRyaWVzKCkpIHtcclxuICAgIGNvbnN0IHBva2Vtb25NYXAgPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLy8gZHVuZ2VvbiBcdTUxODVcdTMwNjcgcG9rZW1vbklkIFx1MzA1NFx1MzA2OFx1MzA2Qlx1MzA3RVx1MzA2OFx1MzA4MVx1MzA4QlxyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGR1bmdlb25JdGVtcykge1xyXG4gICAgICBpZiAoIXBva2Vtb25NYXAuaGFzKGl0ZW0ucG9rZW1vbklkKSkge1xyXG4gICAgICAgIHBva2Vtb25NYXAuc2V0KGl0ZW0ucG9rZW1vbklkLCB7XHJcbiAgICAgICAgICBwb2tlbW9uSWQ6IGl0ZW0ucG9rZW1vbklkLFxyXG4gICAgICAgICAgZHVuZ2Vvbk5hbWU6IGl0ZW0uZHVuZ2Vvbk5hbWUsXHJcbiAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcG9rZW1vbk1hcC5nZXQoaXRlbS5wb2tlbW9uSWQpLml0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gXHU1NDA0IHBva2Vtb25JZCBcdTMwNTRcdTMwNjhcdTMwNkIgZmxvb3JzIFx1MzA5Mlx1OTAyM1x1NzU2QVx1MzBCMFx1MzBFQlx1MzBGQ1x1MzBEN1x1NTMxNlxyXG4gICAgY29uc3QgcG9rZW1vbkdyb3VwcyA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgcG9rZW1vbk1hcC52YWx1ZXMoKSkge1xyXG4gICAgICBjb25zdCBzb3J0ZWQgPSBncm91cC5pdGVtcy5zbGljZSgpLnNvcnQoKGEsIGIpID0+IGEuZmxvb3IgLSBiLmZsb29yKTtcclxuXHJcbiAgICAgIGNvbnN0IGZsb29yR3JvdXBzID0gW107XHJcbiAgICAgIGxldCBjdXJyZW50ID0gW107XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc29ydGVkKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICBjdXJyZW50LnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHByZXYgPSBjdXJyZW50W2N1cnJlbnQubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICBpZiAoaXRlbS5mbG9vciA9PT0gcHJldi5mbG9vciArIDEpIHtcclxuICAgICAgICAgICAgY3VycmVudC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmxvb3JHcm91cHMucHVzaChjdXJyZW50KTtcclxuICAgICAgICAgICAgY3VycmVudCA9IFtpdGVtXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGN1cnJlbnQubGVuZ3RoKSBmbG9vckdyb3Vwcy5wdXNoKGN1cnJlbnQpO1xyXG5cclxuICAgICAgY29uc3QgZmxvb3JzID0gZmxvb3JHcm91cHMubWFwKChnKSA9PiBnLm1hcCgoeCkgPT4geC5mbG9vcikpO1xyXG4gICAgICBjb25zdCBsZXZlbFJhbmdlcyA9IGZsb29yR3JvdXBzLm1hcCgoZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxldmVscyA9IGcubWFwKCh4KSA9PiB4LmxldmVsKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbWluTGV2ZWw6IE1hdGgubWluKC4uLmxldmVscyksXHJcbiAgICAgICAgICBtYXhMZXZlbDogTWF0aC5tYXgoLi4ubGV2ZWxzKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHBva2Vtb25Hcm91cHMucHVzaCh7XHJcbiAgICAgICAgcG9rZW1vbklkOiBncm91cC5wb2tlbW9uSWQsXHJcbiAgICAgICAgZHVuZ2Vvbk5hbWU6IGdyb3VwLmR1bmdlb25OYW1lLFxyXG4gICAgICAgIGZsb29ycyxcclxuICAgICAgICBsZXZlbFJhbmdlcyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZHVuZ2VvbiBcdTMwOTJcdTMwQURcdTMwRkNcdTMwNjhcdTMwNTdcdTMwNjZcdTY4M0NcdTdEMEQgKFx1MzBBQlx1MzBBRlx1MzBFQ1x1MzBBQVx1MzBGM1x1MzA5Mlx1NUY4Q1x1MzA4RFx1MzA2Qlx1MzA1OVx1MzA4QilcclxuICAgIHJlc3VsdFtkdW5nZW9uXSA9IHBva2Vtb25Hcm91cHNcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEucG9rZW1vbklkIC0gYi5wb2tlbW9uSWQpXHJcbiAgICAgIC5maWx0ZXIoKHgpID0+IHgucG9rZW1vbklkICE9IDB4MTdmKVxyXG4gICAgICAuY29uY2F0KHBva2Vtb25Hcm91cHMuZmlsdGVyKCh4KSA9PiB4LnBva2Vtb25JZCA9PSAweDE3ZikpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBDMFx1MzBGM1x1MzBCOFx1MzBFN1x1MzBGM1x1NTJFN1x1OEE5OFx1NjBDNVx1NTgzMVx1MzA5Mlx1NEY1Q1x1NjIxMFxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlUmVjcnVpdER1bmdlb24oKSB7XHJcbiAgY29uc3Qgc3Bhd25Hcm91cCA9IGdlbmVyYXRlU3Bhd25Hcm91cCgpO1xyXG5cclxuICBjb25zdCByZWNydWl0RHVuZ2VvbldyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjcnVpdC1kdW5nZW9uJyk7XHJcbiAgZm9yIChjb25zdCBkdW5nZW9uSWQgaW4gc3Bhd25Hcm91cCkge1xyXG4gICAgY29uc3QgZHVuZ2Vvbk5hbWUgPSBEdW5nZW9uRGF0YVtkdW5nZW9uSWRdLkluTmFtZTtcclxuXHJcbiAgICAvLyBcdTMwQzBcdTMwRjNcdTMwQjhcdTMwRTdcdTMwRjNcdTMwQjBcdTMwRUFcdTMwQzNcdTMwQzlcdTRGNUNcdTYyMTBcclxuICAgIGNvbnN0IGR1bmdlb25HcmlkSHRtbCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVjcnVpdC1kdW5nZW9uLWdyaWQgcm91bmRlZFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJkdW5nZW9uLW5hbWVcIj4ke2R1bmdlb25OYW1lfTwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb2tlbW9uLWdyaWQtd3JhcFwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuICAgIGNvbnN0IGR1bmdlb25HcmlkRWxlbWVudCA9IHBhcnNlSFRNTChkdW5nZW9uR3JpZEh0bWwpO1xyXG5cclxuICAgIC8vIFx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1MzBCMFx1MzBFQVx1MzBDM1x1MzBDOVx1NEY1Q1x1NjIxMFxyXG4gICAgY29uc3QgcG9rZW1vbkdyaWRXcmFwRWxlbWVudCA9IGR1bmdlb25HcmlkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9rZW1vbi1ncmlkLXdyYXAnKTtcclxuICAgIGZvciAoY29uc3Qgc3Bhd24gb2Ygc3Bhd25Hcm91cFtkdW5nZW9uSWRdKSB7XHJcbiAgICAgIGNvbnN0IHBva2Vtb25JZCA9IHNwYXduLnBva2Vtb25JZDtcclxuICAgICAgY29uc3QgaW5kZXhJZCA9IHBva2Vtb25JZFRvSW5kZXgocG9rZW1vbklkKTtcclxuICAgICAgY29uc3QgcG9rZW1vbkdyaWRIdG1sID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb2tlbW9uLWdyaWQgcG9zaXRpb24tcmVsYXRpdmVcIiBkYXRhLWlkPVwiJHtwb2tlbW9uSWR9XCJcclxuICAgICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7Z2V0UG9rZW1vblNwcml0ZVVybChpbmRleElkKX0pXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICAgIGNvbnN0IHBva2Vtb25HcmlkID0gcGFyc2VIVE1MKHBva2Vtb25HcmlkSHRtbCk7XHJcbiAgICAgIHBva2Vtb25HcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIFx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBQlx1MzBGQ1x1MzA2RVx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1MzA5Mlx1MzBDOFx1MzBCMFx1MzBFQlxyXG4gICAgICAgIGNvbnN0IGNoZWNrZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Bva2Vtb24tbGlzdCAucG9rZW1vbi1ncmlkW2RhdGEtaWQ9XCIke3Bva2Vtb25JZH1cIl1gKTtcclxuICAgICAgICBpZiAoY2hlY2tlckdyaWQpIHtcclxuICAgICAgICAgIHRvZ2dsZVBva2Vtb25DaGVja2VkKGNoZWNrZXJHcmlkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBwb2tlbW9uR3JpZFdyYXBFbGVtZW50LmFwcGVuZENoaWxkKHBva2Vtb25HcmlkKTtcclxuICAgIH1cclxuICAgIHJlY3J1aXREdW5nZW9uV3JhcC5hcHBlbmRDaGlsZChkdW5nZW9uR3JpZEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgLy8gLy8gXHUzMEE0XHUzMEQ5XHUzMEYzXHUzMEM4XHU1MkU3XHU4QTk4XHJcbiAgLy8gY29uc3QgZXZlbnRHcmlkSHRtbCA9IGBcclxuICAvLyAgIDxkaXYgY2xhc3M9XCJyZWNydWl0LWR1bmdlb24tZ3JpZCByb3VuZGVkXCI+XHJcbiAgLy8gICAgIDxwIGNsYXNzPVwiZHVuZ2Vvbi1uYW1lXCI+XHUzMEE0XHUzMEQ5XHUzMEYzXHUzMEM4PC9wPlxyXG4gIC8vICAgICA8ZGl2IGNsYXNzPVwicG9rZW1vbi1ncmlkLXdyYXBcIj5cclxuICAvLyAgICAgPC9kaXY+XHJcbiAgLy8gICA8L2Rpdj5gO1xyXG4gIC8vIGNvbnN0IGV2ZW50R3JpZEVsZW1lbnQgPSBwYXJzZUhUTUwoZXZlbnRHcmlkSHRtbCk7XHJcbiAgLy8gY29uc3QgZXZlbnRQb2tlbW9uR3JpZFdyYXBFbGVtZW50ID0gZXZlbnRHcmlkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9rZW1vbi1ncmlkLXdyYXAnKTtcclxuICAvLyBmb3IgKGNvbnN0IGV2ZW50IG9mIGV2ZW50UmVjdHVpdCkge1xyXG4gIC8vICAgY29uc3QgcG9rZW1vbklkID0gZXZlbnQuaWQ7XHJcbiAgLy8gICBjb25zdCBpbmRleElkID0gcG9rZW1vbklkVG9JbmRleChwb2tlbW9uSWQpO1xyXG4gIC8vICAgY29uc3QgcG9rZW1vbkdyaWRIdG1sID0gYFxyXG4gIC8vICAgICAgIDxkaXYgY2xhc3M9XCJwb2tlbW9uLWdyaWQgcG9zaXRpb24tcmVsYXRpdmVcIiBkYXRhLWlkPVwiJHtwb2tlbW9uSWR9XCJcclxuICAvLyAgICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7Z2V0UG9rZW1vblNwcml0ZVVybChpbmRleElkKX0pXCI+XHJcbiAgLy8gICAgICAgPC9kaXY+XHJcbiAgLy8gICAgIGA7XHJcbiAgLy8gICBjb25zdCBwb2tlbW9uR3JpZCA9IHBhcnNlSFRNTChwb2tlbW9uR3JpZEh0bWwpO1xyXG4gIC8vICAgcG9rZW1vbkdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICAgIC8vIFx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBQlx1MzBGQ1x1MzA2RVx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1MzA5Mlx1MzBDOFx1MzBCMFx1MzBFQlxyXG4gIC8vICAgICBjb25zdCBjaGVja2VyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwb2tlbW9uLWxpc3QgLnBva2Vtb24tZ3JpZFtkYXRhLWlkPVwiJHtwb2tlbW9uSWR9XCJdYCk7XHJcbiAgLy8gICAgIGlmIChjaGVja2VyR3JpZCkge1xyXG4gIC8vICAgICAgIHRvZ2dsZVBva2Vtb25DaGVja2VkKGNoZWNrZXJHcmlkKTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSk7XHJcbiAgLy8gICBldmVudFBva2Vtb25HcmlkV3JhcEVsZW1lbnQuYXBwZW5kQ2hpbGQocG9rZW1vbkdyaWQpO1xyXG4gIC8vIH1cclxuICAvLyByZWNydWl0RHVuZ2VvbldyYXAuYXBwZW5kQ2hpbGQoZXZlbnRHcmlkRWxlbWVudCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTUyRTdcdThBOThcdTY1QjlcdTZDRDVcdTMwQkZcdTMwRDZcdTMwNkVcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcdTcyQjZcdTZDQzFcdTMwOTJcdTU0MENcdTY3MUZcclxuICovXHJcbmZ1bmN0aW9uIHN5bmNSZWNydWl0RGV0YWlsKHBva2Vtb25JZCwgaXNDaGVja2VkKSB7XHJcbiAgY29uc3QgcmVjcnVpdEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcmVjcnVpdC1kdW5nZW9uIC5yZWNydWl0LXBva2Vtb24tZ3JpZFtkYXRhLWlkPVwiJHtwb2tlbW9uSWR9XCJdYCk7XHJcbiAgaWYgKHJlY3J1aXRHcmlkKSB7XHJcbiAgICBpZiAoaXNDaGVja2VkKSB7XHJcbiAgICAgIHJlY3J1aXRHcmlkLmNsYXNzTGlzdC5hZGQoJ2hpZGluZycpO1xyXG4gICAgICByZWNydWl0R3JpZC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICdhbmltYXRpb25lbmQnLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHJlY3J1aXRHcmlkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICByZWNydWl0R3JpZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRpbmcnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgb25jZTogdHJ1ZSB9LFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVjcnVpdEdyaWQuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICByZWNydWl0R3JpZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRpbmcnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTMwQzBcdTMwRjNcdTMwQjhcdTMwRTdcdTMwRjNcdTMwQkZcdTMwRDZcdTMwNkVcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcdTcyQjZcdTZDQzFcdTMwOTJcdTU0MENcdTY3MUZcclxuICovXHJcbmZ1bmN0aW9uIHN5bmNEdW5nZW9uRGV0YWlsKHBva2Vtb25JZCwgaXNDaGVja2VkKSB7XHJcbiAgY29uc3QgZHVuZ2VvbkdyaWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgI3JlY3J1aXQtZHVuZ2VvbiAucG9rZW1vbi1ncmlkW2RhdGEtaWQ9XCIke3Bva2Vtb25JZH1cIl1gKTtcclxuICBkdW5nZW9uR3JpZHMuZm9yRWFjaCgoZ3JpZCkgPT4ge1xyXG4gICAgaWYgKGlzQ2hlY2tlZCkge1xyXG4gICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFCXHUzMEZDIC0+IFx1MzBDMFx1MzBGM1x1MzBCOFx1MzBFN1x1MzBGMyBcdTMwNzhcdTU0MENcdTY3MUZcclxuICovXHJcbmZ1bmN0aW9uIHN5bmNEdW5nZW9uV2l0aENoZWNrZXIoKSB7XHJcbiAgY29uc3QgZHVuZ2VvbkdyaWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3JlY3J1aXQtZHVuZ2VvbiAucG9rZW1vbi1ncmlkJyk7XHJcbiAgZHVuZ2VvbkdyaWRzLmZvckVhY2goKGdyaWQpID0+IHtcclxuICAgIGNvbnN0IHBva2Vtb25JZCA9IGdyaWQuZGF0YXNldC5pZDtcclxuICAgIGNvbnN0IGNoZWNrZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Bva2Vtb24tbGlzdCAucG9rZW1vbi1ncmlkW2RhdGEtaWQ9XCIke3Bva2Vtb25JZH1cIl1gKTtcclxuXHJcbiAgICBpZiAoY2hlY2tlckdyaWQgJiYgY2hlY2tlckdyaWQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkJykpIHtcclxuICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1OEE3Mlx1NUY1M1x1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1MzA2RVx1OTAzMlx1NTMxNlx1NjBDNVx1NTgzMVx1MzA5Mlx1MzBDNlx1MzBBRFx1MzBCOVx1MzBDOFx1MzA2N1x1NTNENlx1NUY5N1xyXG4gKiBAcGFyYW0geyp9IGlkIFx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM0lEXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRFdm9sVGV4dERhdGEoaWQpIHtcclxuICBjb25zdCBwb2tlbW9uID0gUG9rZW1vbkRhdGFbaWRdO1xyXG4gIGNvbnN0IHByZXZFdm9sID0gUG9rZW1vbkRhdGFbcGFyc2VJbnQocG9rZW1vbi5QcmVFdm9JbmRleCldO1xyXG4gIGNvbnN0IGV2b2xNZXRob2QgPSBwYXJzZUludChwb2tlbW9uLkV2b01ldGhvZCk7XHJcbiAgY29uc3QgZXZvbFBhcmFtID0gW3BhcnNlSW50KHBva2Vtb24uRXZvUGFyYW0xKSwgcGFyc2VJbnQocG9rZW1vbi5Fdm9QYXJhbTIpXTtcclxuXHJcbiAgbGV0IHRleHQgPSAnJztcclxuICBpZiAocHJldkV2b2wuSWQgPiAwKSB7XHJcbiAgICBjb25zdCBwcmV2RXZvbE5hbWUgPSBwcmV2RXZvbC5OYW1lO1xyXG4gICAgbGV0IGV2b2xTdHIgPSAnJztcclxuICAgIHN3aXRjaCAoZXZvbE1ldGhvZCkge1xyXG4gICAgICBjYXNlIDA6IC8vIFx1MzBDQ1x1MzBCMVx1MzBDQlx1MzBGM1x1NzUyOFxyXG4gICAgICAgIGV2b2xTdHIgPSBgXHU5MDMyXHU1MzE2XHUzMDY3XHU4MUVBXHU1MkQ1XHU3Njg0XHUzMDZCXHU1MkEwXHU1MTY1YDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAxOiAvLyBcdTMwRUNcdTMwRDlcdTMwRUJcclxuICAgICAgICBldm9sU3RyID0gYEx2JHtldm9sUGFyYW1bMF19YDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAyOiAvLyBcdTMwNEJcdTMwNTdcdTMwNTNcdTMwNTVcclxuICAgICAgICBldm9sU3RyID0gYFx1MzA0Qlx1MzA1N1x1MzA1M1x1MzA1NVx1MjYwNSR7Z2V0SVFTdGFyQ291bnQoZXZvbFBhcmFtWzBdKS50b0ZpeGVkKDEpfSgke2V2b2xQYXJhbVswXX0pXHU0RUU1XHU0RTBBYDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAzOiAvLyBcdTkwNTNcdTUxNzdcclxuICAgICAgICBjb25zdCBpdGVtU3RyID0gSXRlbURhdGFbZXZvbFBhcmFtWzBdXS5OYW1lO1xyXG4gICAgICAgIGV2b2xTdHIgPSBgJHtpdGVtU3RyfWA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNDogLy8gXHUzMEJGXHUzMERFXHUzMEYzXHUzMEJGXHU3NTI4XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0U3RyID0gUG9rZW1vbkRhdGFbZXZvbFBhcmFtWzBdXS5OYW1lO1xyXG4gICAgICAgIGV2b2xTdHIgPSBgJHt0YXJnZXRTdHJ9XHUzMDRDXHU0RUYyXHU5NTkzXHUzMDZCXHUzMDQ0XHUzMDhCYDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSA1OiAvLyBcdTMwNjRcdTMwNDZcdTMwNTdcdTMwOTNcdTMwQjFcdTMwRkNcdTMwRDZcdTMwRUJcclxuICAgICAgICBldm9sU3RyID0gYFx1MzA2NFx1MzA0Nlx1MzA1N1x1MzA5M1x1MzBCMVx1MzBGQ1x1MzBENlx1MzBFQmA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gXHU3QjJDXHU0RThDXHU2NzYxXHU0RUY2XHJcbiAgICBpZiAoZXZvbE1ldGhvZCA+PSAwICYmIGV2b2xNZXRob2QgPD0gMyAmJiBldm9sUGFyYW1bMV0gPiAwKSB7XHJcbiAgICAgIGV2b2xTdHIgKz0gYCArICR7ZXZvbHZlMlN0cmluZ1tldm9sUGFyYW1bMV1dfWA7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dCA9IGAke3ByZXZFdm9sTmFtZX0gKCR7ZXZvbFN0cn0pYDtcclxuICAgIC8vY29uc29sZS5sb2coYCR7cG9rZW1vbi5OYW1lfTogJHt0ZXh0fWAsIGV2b2xNZXRob2QsIGV2b2xQYXJhbSk7XHJcbiAgfVxyXG4gIHJldHVybiB0ZXh0O1xyXG59XHJcblxyXG4vKipcclxuICogXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMDZFXHUzMEI5XHUzMEQ3XHUzMEU5XHUzMEE0XHUzMEM4XHU3NTNCXHU1MENGVVJMXHUzMDkyXHU1M0Q2XHU1Rjk3IChieSBQb2tlQVBJKVxyXG4gKiBAcGFyYW0geyp9IGluZGV4SWRcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIGdldFBva2Vtb25TcHJpdGVVcmwoaW5kZXhJZCkge1xyXG4gIGNvbnN0IGltYWdlUG9rZW1vbkRhdGEgPSBjaGVja1Bva2Vtb25EYXRhW2luZGV4SWRdO1xyXG4gIGNvbnN0IGltYWdlVXJsID0gYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLXZpaS9pY29ucy8ke2ltYWdlUG9rZW1vbkRhdGEuYmFzZUlkfSR7aW1hZ2VQb2tlbW9uRGF0YS5pbWFnZVN1ZmZpeH0ucG5nYDtcclxuICByZXR1cm4gaW1hZ2VVcmw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBKU09OXHUzMEM3XHUzMEZDXHUzMEJGXHUzMDkyXHU1M0Q2XHU1Rjk3XHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBmZXRjaEpzb25EYXRhKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBbcG9rZW1vbkRhdGEsIGl0ZW1EYXRhLCBkdW5nZW9uRGF0YSwgZmxvb3JEYXRhLCBtYXBwYVNEYXRhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgZ2V0SnNvbkRhdGEoJ3Bva2Vtb24nKSxcclxuICAgICAgZ2V0SnNvbkRhdGEoJ2l0ZW0nKSxcclxuICAgICAgZ2V0SnNvbkRhdGEoJ2R1bmdlb24nKSxcclxuICAgICAgZ2V0SnNvbkRhdGEoJ2Zsb29yJyksXHJcbiAgICAgIGdldEpzb25EYXRhKCdtYXBwYV9zJyksXHJcbiAgICBdKTtcclxuICAgIHdpbmRvdy5Qb2tlbW9uRGF0YSA9IHBva2Vtb25EYXRhO1xyXG4gICAgd2luZG93Lkl0ZW1EYXRhID0gaXRlbURhdGE7XHJcbiAgICB3aW5kb3cuRHVuZ2VvbkRhdGEgPSBkdW5nZW9uRGF0YTtcclxuICAgIHdpbmRvdy5GbG9vckRhdGEgPSBmbG9vckRhdGE7XHJcbiAgICB3aW5kb3cuTWFwcGFTRGF0YSA9IG1hcHBhU0RhdGE7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICB9XHJcbn1cclxuXHJcbmxvYWRQb2tlbW9uKCk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7O0FBR0EsTUFBTSxpQkFBaUI7QUFBQSxJQUNyQixTQUFTO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsSUFDVCxTQUFTO0FBQUEsSUFDVCxTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxRQUFRO0FBQUEsRUFDVjtBQU9BLGlCQUFzQixZQUFZLEtBQUs7QUFDckMsUUFBSTtBQUNGLGFBQU8sTUFBTSxNQUFNLGVBQWUsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUM7QUFBQSxJQUNsRSxTQUFTLEdBQUc7QUFDVixjQUFRLE1BQU0sd0JBQXdCLENBQUM7QUFDdkMsYUFBTztBQUFBLElBQ1Q7QUFBQSxFQUNGOzs7QUM5Qk8sTUFBTSxxQkFBcUI7QUFBQSxJQUNoQztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUNoSDtBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUNoSDtBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUNoSDtBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUNoSDtBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUNoSDtBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUNoSDtBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsRUFDckM7QUFFTyxNQUFNLG1CQUFtQjtBQUFBLElBQzlCO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7OztBQ2hCQSxNQUFJO0FBR0osTUFBTSxtQkFBbUI7QUFBQSxJQUN2QjtBQUFBO0FBQUEsSUFDQTtBQUFBO0FBQUEsSUFDQTtBQUFBO0FBQUEsSUFDQTtBQUFBO0FBQUEsSUFDQTtBQUFBO0FBQUEsSUFDQTtBQUFBO0FBQUEsSUFDQTtBQUFBO0FBQUEsSUFDQTtBQUFBO0FBQUEsSUFDQTtBQUFBO0FBQUEsRUFDRjtBQUdBLE1BQU0sZ0JBQWdCO0FBQUEsSUFDcEI7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBR0EsTUFBTSxlQUFlO0FBQUEsSUFDbkI7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEs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
