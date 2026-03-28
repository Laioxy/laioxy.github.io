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
    { baseId: 10004, formId: 1, sortId: 413, imageSuffix: "" },
    { baseId: 413, formId: 0, sortId: 413.1, imageSuffix: "" },
    { baseId: 10005, formId: 2, sortId: 413.2, imageSuffix: "" },
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibnMtaHVnby1pbXA6RjpcXEdpdFxcbGFpb3h5LmdpdGh1Yi5pb1xcYXNzZXRzXFxqc1xcanNvbl9zY3JpcHQuanMiLCAibnMtaHVnby1pbXA6RjpcXEdpdFxcbGFpb3h5LmdpdGh1Yi5pb1xcYXNzZXRzXFxqc1xccGFyYW0uanMiLCAiPHN0ZGluPiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXHJcbiAqIGdldEpzb25EYXRhXHUzMDZFXHU1RjE1XHU2NTcwXHUzMDZCXHU1MTY1XHUzMDhDXHUzMDhCXHUzMEFEXHUzMEZDXHU1NDBEXHUzMDY4SlNPTlx1MzBENVx1MzBBMVx1MzBBNFx1MzBFQlx1MzA2RVx1MzBEMVx1MzBCOVxyXG4gKi9cclxuY29uc3QganNvblBhdGhzQXJyYXkgPSB7XHJcbiAgcG9rZW1vbjogJy9kYXRhL3Bva2Vtb24ubWluLmpzb24nLFxyXG4gIGl0ZW06ICcvZGF0YS9pdGVtLm1pbi5qc29uJyxcclxuICBtb3ZlOiAnL2RhdGEvbW92ZS5taW4uanNvbicsXHJcbiAgZHVuZ2VvbjogJy9kYXRhL2R1bmdlb24ubWluLmpzb24nLFxyXG4gIGZsb29yOiAnL2RhdGEvZmxvb3IubWluLmpzb24nLFxyXG4gIG1hcHBhX3M6ICcvZGF0YS9tYXBwYV9zLm1pbi5qc29uJyxcclxuICBtYXBwYV90OiAnL2RhdGEvbWFwcGFfdC5taW4uanNvbicsXHJcbiAgbWFwcGFfeTogJy9kYXRhL21hcHBhX3kubWluLmpzb24nLFxyXG4gIGZpeGVkOiAnL2RhdGEvZml4ZWQubWluLmpzb24nLFxyXG4gIG1lc3NhZ2U6ICcvZGF0YS9tZXNzYWdlLm1pbi5qc29uJyxcclxuICB0eXBlOiAnL2RhdGEvdHlwZS5taW4uanNvbicsXHJcbiAgaXFncm91cDogJy9kYXRhL2lxZ3JvdXAubWluLmpzb24nLFxyXG4gIHJlc2N1ZTogJy9kYXRhL3Jlc2N1ZS5taW4uanNvbicsXHJcbn07XHJcblxyXG4vKipcclxuICogSlNPTlx1MzA5Mlx1NTNENlx1NUY5N1xyXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFx1MzBBRFx1MzBGQyAocG9rZW1vbiwgaXRlbSwgZHVuZ2VvbiwgZmxvb3IsIGZpeGVkLCBtZXNzYWdlKVxyXG4gKiBAcmV0dXJucyBKU09OXHUzMEM3XHUzMEZDXHUzMEJGXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SnNvbkRhdGEoa2V5KSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBhd2FpdCBmZXRjaChqc29uUGF0aHNBcnJheVtrZXldKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ2dldEpzb25EYXRhIEZhaWxlZDogJywgZSk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIiwgIi8qKiBcdTMwQUJcdTMwRDVcdTMwQTdcdTUyRTdcdThBOThcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjMgKi9cclxuZXhwb3J0IGNvbnN0IENBRkVfUkVDUlVJVF9UQUJMRSA9IFtcclxuICAweDAwYSwgMHgwMGQsIDB4MDFiLCAweDAyOSwgMHgwMmIsIDB4MDJlLCAweDAzNiwgMHgwM2MsIDB4MDQyLCAweDA0OCwgMHgwNGEsIDB4MDUxLCAweDA1MywgMHgwNTQsIDB4MDU2LCAweDA1OCwgMHgwNWEsXHJcbiAgMHgwNWMsIDB4MDVmLCAweDA2MCwgMHgwNjIsIDB4MDY4LCAweDA2ZCwgMHgwNmYsIDB4MDcyLCAweDA3OCwgMHgwN2YsIDB4MDgwLCAweDA4NCwgMHgwODksIDB4MDhhLCAweDA4YywgMHgwOGUsIDB4MDkzLFxyXG4gIDB4MGEzLCAweDBhNywgMHgwYWMsIDB4MGIxLCAweDBiMywgMHgwYmIsIDB4MGMxLCAweDBjMiwgMHgwYzgsIDB4MGU2LCAweDBlNywgMHgwZTksIDB4MGVjLCAweDBmMCwgMHgwZjUsIDB4MGY3LCAweDBmOSxcclxuICAweDBmZSwgMHgwZmYsIDB4MTAyLCAweDEwNSwgMHgxMDYsIDB4MTBhLCAweDEwYiwgMHgxMTEsIDB4MTIzLCAweDEyYSwgMHgxMzIsIDB4MTM0LCAweDEzNywgMHgxMzksIDB4MTNlLCAweDE0YiwgMHgxNGMsXHJcbiAgMHgxNTEsIDB4MTUzLCAweDE1NCwgMHgxNTUsIDB4MTU2LCAweDE1ZSwgMHgxNjQsIDB4MTY3LCAweDE2YywgMHgxNmQsIDB4MTZlLCAweDE2ZiwgMHgxNzMsIDB4MTc1LCAweDE3NywgMHgxODUsIDB4MTg3LFxyXG4gIDB4MThiLCAweDE5MywgMHgxOTYsIDB4MWFmLCAweDFiNCwgMHgxYjksIDB4MWJiLCAweDFiZCwgMHgxYmYsIDB4MWM2LCAweDFjOCwgMHgxY2IsIDB4MWNlLCAweDFjZiwgMHgxZDMsIDB4MWQ1LCAweDFkOSxcclxuICAweDFkYiwgMHgxZGUsIDB4MWUwLCAweDFlYiwgMHgxZWQsIDB4MWYxLFxyXG5dO1xyXG4vKiogXHUzMEI3XHUzMENBXHUzMEVBXHUzMEFBXHU2NTg3XHU1QjU3XHU1MjE3ICovXHJcbmV4cG9ydCBjb25zdCBTQ0VOQVJJT19TVFJJTkdTID0gW1xyXG4gICctJyxcclxuICAnQ2hhcHRlci01XHU0RUU1XHU5NjREJyxcclxuICAnQ2hhcHRlci0xMFx1NEVFNVx1OTY0RCcsXHJcbiAgJ0NoYXB0ZXItMTFcdTRFRTVcdTk2NEQnLFxyXG4gICdDaGFwdGVyLTE5XHU0RUU1XHU5NjREJyxcclxuICAnXHUzMEE4XHUzMEYzXHUzMEM3XHUzMEEzXHUzMEYzXHUzMEIwXHU1RjhDJyxcclxuICAnXHUzMEFFXHUzMEVCXHUzMEM5XHU1MzUyXHU2OTZEXHU1RjhDJyxcclxuICAnXHUzMDQ2XHUzMDdGXHUzMDZFXHUzMEVBXHUzMEJFXHUzMEZDXHUzMEM4XHU4OUUzXHU3OTgxXHU1RjhDJyxcclxuXTtcclxuIiwgImltcG9ydCB7IGdldEpzb25EYXRhIH0gZnJvbSAnLi8uLi9qc29uX3NjcmlwdCc7XHJcbmltcG9ydCAqIGFzIHBhcmFtcyBmcm9tICcuLy4uL3BhcmFtJztcclxuXHJcbi8vIFx1MzBCOVx1MzBERFx1MzBGQ1x1MzBGM1x1MzBDN1x1MzBGQ1x1MzBCRiAoXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMEZCXHUzMEMwXHUzMEYzXHUzMEI4XHUzMEU3XHUzMEYzXHUzMEJGXHUzMEQ2XHU3NTI4KVxyXG5sZXQgc3Bhd25EYXRhO1xyXG5cclxuLyoqIFx1OTY2NFx1NTkxNlx1MzA1OVx1MzA4Qlx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1MzA2RUlEICovXHJcbmNvbnN0IGJhbm5lZFBva2Vtb25JZHMgPSBbXHJcbiAgMHgxMTcsIC8vIFx1Njg0M1x1MzBCQlx1MzBFQ1x1MzBEM1x1MzBBM1xyXG4gIDB4MTdjLCAvLyBcdTk2RUFcdTMwRERcdTMwRUZcdTMwRUJcdTMwRjNcclxuICAweDE3ZCwgLy8gXHU2Njc0XHUzMEREXHUzMEVGXHUzMEVCXHUzMEYzXHJcbiAgMHgxN2UsIC8vIFx1OTZFOFx1MzBERFx1MzBFRlx1MzBFQlx1MzBGM1xyXG4gIDB4MTgwLCAvLyBcdTdEMkJcdTMwQUJcdTMwQUZcdTMwRUNcdTMwQUFcdTMwRjNcclxuICAweDFhMywgLy8gQUZcdTMwQzdcdTMwQUFcdTMwQURcdTMwQjdcdTMwQjlcclxuICAweDFhNCwgLy8gREZcdTMwQzdcdTMwQUFcdTMwQURcdTMwQjdcdTMwQjlcclxuICAweDFhNSwgLy8gU1BcdTMwQzdcdTMwQUFcdTMwQURcdTMwQjdcdTMwQjlcclxuICAweDFjZCwgLy8gXHUzMEREXHUzMEI4XHUzMEMxXHUzMEE3XHUzMEVBXHUzMEUwXHJcbl07XHJcblxyXG4vKiogXHU5MDMyXHU1MzE2XHU2NzYxXHU0RUY2MiAqL1xyXG5jb25zdCBldm9sdmUyU3RyaW5nID0gW1xyXG4gICctJyxcclxuICAnXHUzMDY0XHUzMDQ2XHUzMDU3XHUzMDkzXHUzMEIxXHUzMEZDXHUzMEQ2XHUzMEVCJyxcclxuICAnXHU2NTNCXHU2NDgzXHVGRjFFXHU5NjMyXHU1RkExJyxcclxuICAnXHU5NjMyXHU1RkExXHVGRjFFXHU2NTNCXHU2NDgzJyxcclxuICAnXHU2NTNCXHU2NDgzXHVGRjFEXHU5NjMyXHU1RkExJyxcclxuICAnXHUzMDVGXHUzMDQ0XHUzMDg4XHUzMDQ2XHUzMDZFXHUzMEVBXHUzMERDXHUzMEYzJyxcclxuICAnXHUzMDUyXHUzMDYzXHUzMDUzXHUzMDQ2XHUzMDZFXHUzMEVBXHUzMERDXHUzMEYzJyxcclxuICAnXHUzMDQ2XHUzMDY0XHUzMDRGXHUzMDU3XHUzMEI5XHUzMEFCXHUzMEZDXHUzMEQ1JyxcclxuICAnXHUzMEU5XHUzMEYzXHUzMEMwXHUzMEUwJyxcclxuICAnXHUzMEU5XHUzMEYzXHUzMEMwXHUzMEUwJyxcclxuICAnXHUzMEFBXHUzMEI5JyxcclxuICAnXHUzMEUxXHUzMEI5JyxcclxuICAnXHUzMDUyXHUzMDkzXHUzMDU3XHUzMDZFXHUzMDYxXHUzMDRCXHUzMDg5XHU3RkQyXHU1Rjk3JyxcclxuICAnXHUzMDUzXHUzMDhEXHUzMDRDXHUzMDhCXHU3RkQyXHU1Rjk3JyxcclxuICAnXHUzMEMwXHUzMEQ2XHUzMEVCXHUzMEEyXHUzMEJGXHUzMEMzXHUzMEFGXHU3RkQyXHU1Rjk3JyxcclxuICAnXHUzMDgyXHUzMDZFXHUzMDdFXHUzMDZEXHU3RkQyXHU1Rjk3JyxcclxuXTtcclxuXHJcbi8qKiBcdTMwQTRcdTMwRDlcdTMwRjNcdTMwQzhcdTUyRTdcdThBOThcdTMwRUFcdTMwQjlcdTMwQzggKi9cclxuY29uc3QgZXZlbnRSZWN0dWl0ID0gW1xyXG4gIHtcclxuICAgIGlkOiAweDkwLFxyXG4gICAgY29udGV4dDogJ1x1MzAwQ1x1MzA2QVx1MzA2MFx1MzA4Q1x1MzA4NFx1MzA3RSBcdTMwNjFcdTMwODdcdTMwNDZcdTMwNThcdTMwODdcdTMwNDZcdTMwMERcdTMwNjdcdTMwRDVcdTMwRUFcdTMwRkNcdTMwQjZcdTMwRkNcdTMwOTJcdTUwMTJcdTMwNTkgKDUwJSknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDB4OTYsXHJcbiAgICBjb250ZXh0OiAnXHUzMERGXHUzMEU1XHUzMEE2XHUzMEM0XHUzMEZDXHUzMDRCXHUzMDg5XHUzMDZFXHU2MzExXHU2MjI2XHU3MkI2XHUzMDkyXHU1M0Q3XHUzMDUxXHUzMDhCIFx1MjAzQlx1MzA2Nlx1MzA5M1x1MzA0Rlx1MzA0Nlx1MzA2RVx1MzA0Qlx1MzA0NFx1MzA2MFx1MzA5M1x1ODk4MVx1ODlFM1x1Nzk4MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHg5NyxcclxuICAgIGNvbnRleHQ6ICdcdTMwMENcdTMwREZcdTMwQjlcdTMwQzZcdTMwRUFcdTMwRkNcdTMwQjhcdTMwRTNcdTMwRjNcdTMwQjBcdTMwRUIgXHUzMDRBXHUzMDRGXHUzMDYxXHUzMDBEXHUzMDY3XHUzMERGXHUzMEU1XHUzMEE2XHUzMDkyXHU1MDEyXHUzMDU5ICg1MCUpJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDEwZSxcclxuICAgIGNvbnRleHQ6ICdcdTMwRTlcdTMwQTRcdTMwQjNcdTMwQTZcdTMwNEJcdTMwODlcdTMwNkVcdTYzMTFcdTYyMjZcdTcyQjZcdTMwOTJcdTUzRDdcdTMwNTFcdTMwOEIgXHUyMDNCXHUzMDZBXHUzMDkzXHUzMDY4XHUzMDQ2XHUzMDU3XHUzMDg3XHUzMDY4XHUzMDQ2XHU4OTgxXHU4OUUzXHU3OTgxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDEwZixcclxuICAgIGNvbnRleHQ6ICdcdTMwQThcdTMwRjNcdTMwQzZcdTMwQTRcdTMwNEJcdTMwODlcdTMwNkVcdTYzMTFcdTYyMjZcdTcyQjZcdTMwOTJcdTUzRDdcdTMwNTFcdTMwOEIgXHUyMDNCXHUzMDhDXHUzMDYzXHUzMDRCXHUzMDZFXHUzMDY5XHUzMDQ2XHUzMDRGXHUzMDY0XHU4OTgxXHU4OUUzXHU3OTgxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDExMCxcclxuICAgIGNvbnRleHQ6ICdcdTMwQjlcdTMwQTRcdTMwQUZcdTMwRjNcdTMwNEJcdTMwODlcdTMwNkVcdTYzMTFcdTYyMjZcdTcyQjZcdTMwOTJcdTUzRDdcdTMwNTFcdTMwOEIgXHUyMDNCXHUzMDdFXHUzMDZFXHUzMDRCXHUzMDQ0XHUzMDQ0XHUzMDREXHU4OTgxXHU4OUUzXHU3OTgxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDE5OSxcclxuICAgIGNvbnRleHQ6ICcyXHU1NDY4XHU3NkVFXHU0RUU1XHU5NjREXHUzMDBDXHUzMDcwXHUzMDkzXHUzMDZCXHUzMDkzXHUzMDZFXHUzMDY5XHUzMDQ2XHUzMDRGXHUzMDY0IFx1MzBFQ1x1MzBCOFx1MzBFRFx1MzBDM1x1MzBBRlx1MzA2RVx1MzA3RVx1MzAwRFx1MzA2N1x1MzBFQ1x1MzBCOFx1MzBFRFx1MzBDM1x1MzBBRlx1MzA5Mlx1NTAxMlx1MzA1OSAoNTAlKScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgxOWEsXHJcbiAgICBjb250ZXh0OiAnMlx1NTQ2OFx1NzZFRVx1NEVFNVx1OTY0RFx1MzAwQ1x1MzA3MFx1MzA5M1x1MzA2Qlx1MzA5M1x1MzA2RVx1MzA2OVx1MzA0Nlx1MzA0Rlx1MzA2NCBcdTMwRUNcdTMwQjhcdTMwQTJcdTMwQTRcdTMwQjlcdTMwNkVcdTMwN0VcdTMwMERcdTMwNjdcdTMwRUNcdTMwQjhcdTMwQTJcdTMwQTRcdTMwQjlcdTMwOTJcdTUwMTJcdTMwNTkgKDUwJSknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDB4MTliLFxyXG4gICAgY29udGV4dDogJzJcdTU0NjhcdTc2RUVcdTRFRTVcdTk2NERcdTMwMENcdTMwNzBcdTMwOTNcdTMwNkJcdTMwOTNcdTMwNkVcdTMwNjlcdTMwNDZcdTMwNEZcdTMwNjQgXHUzMEVDXHUzMEI4XHUzMEI5XHUzMEMxXHUzMEVCXHUzMDZFXHUzMDdFXHUzMDBEXHUzMDY3XHUzMEVDXHUzMEI4XHUzMEI5XHUzMEMxXHUzMEVCXHUzMDkyXHU1MDEyXHUzMDU5ICg1MCUpJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDE5ZSxcclxuICAgIGNvbnRleHQ6ICdcdTMwMENcdTMwNURcdTMwNTNcdTMwNkFcdTMwNTdcdTMwNDZcdTMwN0YgXHUzMDRBXHUzMDRGXHUzMDVEXHUzMDUzXHUzMDBEXHUzMDY3XHUzMEFCXHUzMEE0XHUzMEFBXHUzMEZDXHUzMEFDXHUzMDkyXHU1MDEyXHUzMDU5ICg1MCUpJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDE5ZixcclxuICAgIGNvbnRleHQ6ICdcdTMwMENcdTMwNEJcdTMwNTJcdTMwOERcdTMwNDZcdTMwNkVcdTMwNTVcdTMwNzBcdTMwNEYgXHUzMDRBXHUzMDRGXHUzMDYxXHUzMDBEXHUzMDY3XHUzMEIwXHUzMEU5XHUzMEZDXHUzMEM5XHUzMEYzXHUzMDkyXHU1MDEyXHUzMDU5ICg1MCUpJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDFhMCxcclxuICAgIGNvbnRleHQ6ICdcdTMwMENcdTMwNjZcdTMwOTNcdTMwNEZcdTMwNDZcdTMwNkVcdTMwNEJcdTMwNDRcdTMwNjBcdTMwOTMgXHUzMDYxXHUzMDg3XHUzMDQ2XHUzMDU4XHUzMDg3XHUzMDQ2XHUzMDBEXHUzMDY3XHUzMEVDXHUzMEMzXHUzMEFGXHUzMEE2XHUzMEI2XHUzMDkyXHU1MDEyXHUzMDU5ICg1MCUpJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDFhMSxcclxuICAgIGNvbnRleHQ6ICdcdTMwQjhcdTMwRTlcdTMwRkNcdTMwQzFcdTMwNEJcdTMwODlcdTMwNkVcdTYzMTFcdTYyMjZcdTcyQjZcdTMwOTJcdTUzRDdcdTMwNTFcdTMwOEIgXHUyMDNCU0UxXHUzMDBDXHUzMEQzXHUzMEMzXHUzMEQxXHUzMDZFXHUzMDZEXHUzMDRDXHUzMDQ0XHUzMDU0XHUzMDY4XHUzMDBEXHU4OTgxXHUzMEFGXHUzMEVBXHUzMEEyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDIwYSxcclxuICAgIGNvbnRleHQ6ICdcdTY3MkNcdTdERThcdTMwQUZcdTMwRUFcdTMwQTJcdTVGOENcdTMwMENcdTMwNkRcdTMwNjNcdTMwNTlcdTMwNDRcdTMwNkVcdTMwNjlcdTMwNDZcdTMwNEZcdTMwNjQgXHUzMDYxXHUzMDg3XHUzMDQ2XHUzMDU4XHUzMDg3XHUzMDQ2XHUzMDBEXHUzMDY3XHUzMEU2XHUzMEFGXHUzMEI3XHUzMEZDXHUzMDkyXHU1MDEyXHUzMDU5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDIwYixcclxuICAgIGNvbnRleHQ6ICdcdTY3MkNcdTdERThcdTMwQUZcdTMwRUFcdTMwQTJcdTVGOENcdTMwMENcdTMwNjFcdTMwNjZcdTMwNDRcdTMwNkVcdTMwN0ZcdTMwNUFcdTMwNDZcdTMwN0YgKFx1MzA4QVx1MzA4NVx1MzA0Nlx1MzA1NVx1MzA2RVx1MzA2OVx1MzA0Nlx1MzA0Rlx1MzA2NClcdTMwMERcdTMwNjdcdTMwQThcdTMwRTBcdTMwRUFcdTMwQzNcdTMwQzhcdTMwOTJcdTUwMTJcdTMwNTknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDB4MjBjLFxyXG4gICAgY29udGV4dDogJ1x1NjcyQ1x1N0RFOFx1MzBBRlx1MzBFQVx1MzBBMlx1NUY4Q1x1MzAwQ1x1MzA1OVx1MzA0NFx1MzA1N1x1MzA4N1x1MzA0Nlx1MzA2RVx1MzA3Rlx1MzA1QVx1MzA0Nlx1MzA3RiAoXHUzMDYwXHUzMDQ0XHUzMDU5XHUzMDQ0XHUzMDU3XHUzMDg3XHUzMDQ2XHUzMDZFXHUzMDdGXHUzMDYxKVx1MzAwRFx1MzA2N1x1MzBBMlx1MzBCMFx1MzBDRVx1MzBFMFx1MzA5Mlx1NTAxMlx1MzA1OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgyMGQsXHJcbiAgICBjb250ZXh0OiAnXHU2NzJDXHU3REU4XHUzMEFGXHUzMEVBXHUzMEEyXHU1RjhDXHUzMDBDXHUzMDU4XHUzMDUyXHUzMDkzXHUzMDZFXHUzMDY4XHUzMDQ2IFx1MzA2MVx1MzA4N1x1MzA0Nlx1MzA1OFx1MzA4N1x1MzA0Nlx1MzAwRFx1MzA2N1x1MzBDN1x1MzBBM1x1MzBBMlx1MzBFQlx1MzBBQ1x1MzA5Mlx1NTAxMlx1MzA1OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgyMGUsXHJcbiAgICBjb250ZXh0OiAnXHUzMEMwXHUzMEZDXHUzMEFGXHUzMEU5XHUzMEE0XHU2NDgzXHU3ODM0XHU1RjhDXHUzMDBDXHUzMDVEXHUzMDg5XHUzMDZFXHUzMDU1XHUzMDUxXHUzMDgxIFx1MzA0QVx1MzA0Rlx1MzA1RFx1MzA1M1x1MzAwRFx1MzA2N1x1MzBEMVx1MzBFQlx1MzBBRFx1MzBBMlx1MzA5Mlx1NTAxMlx1MzA1OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgyMGYsXHJcbiAgICBjb250ZXh0OiAnXHUzMDBDXHUzMDREXHUzMDg3XHUzMDYwXHUzMDQ0XHUzMDRCXHUzMDU2XHUzMDkzIFx1MzA2MVx1MzA4N1x1MzA0Nlx1MzA1OFx1MzA4N1x1MzA0Nlx1MzAwRFx1MzA2N1x1MzBEMlx1MzBGQ1x1MzBDOVx1MzBFOVx1MzBGM1x1MzA5Mlx1NTAxMlx1MzA1OSAoNTAlKScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgyMTAsXHJcbiAgICBjb250ZXh0OiAnXHUzMDBDXHUzMDcwXHUzMDkzXHUzMDZCXHUzMDkzXHUzMDZFXHUzMDY5XHUzMDQ2XHUzMDRGXHUzMDY0IFx1MzBFQ1x1MzBCOFx1MzBBRVx1MzBBQ1x1MzBCOVx1MzA2RVx1MzA3RVx1MzAwRFx1MzA2N1x1MzBFQ1x1MzBCOFx1MzBBRVx1MzBBQ1x1MzBCOVx1MzA5Mlx1NTAxMlx1MzA1OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgyMTEsXHJcbiAgICBjb250ZXh0OiAnXHUzMDBDXHUzMDVCXHUzMDRCXHUzMDQ0XHUzMDZFXHUzMDRBXHUzMDRBXHUzMDQyXHUzMDZBIFx1MzA0QVx1MzA0Rlx1MzA1RFx1MzA1M1x1MzAwRFx1MzA2N1x1MzBBRVx1MzBFOVx1MzBDNlx1MzBBM1x1MzBDQVx1MzA5Mlx1NTAxMlx1MzA1OSAoNTAlKScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgyMTIsXHJcbiAgICBjb250ZXh0OiAnXHUzMEMwXHUzMEZDXHUzMEFGXHUzMEU5XHUzMEE0XHU2NDgzXHU3ODM0XHU1RjhDXHUzMDAxXHUzMEI1XHUzMEUxXHUzMENGXHUzMEMwXHUzMDQ0XHUzMDhGXHUzMDY3XHUzMEFGXHUzMEVDXHUzMEJCXHUzMEVBXHUzMEEyXHUzMDY4XHU4QTcxXHUzMDU5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDIxMyxcclxuICAgIGNvbnRleHQ6ICdcdTMwNERcdTMwNUJcdTMwNERcdTMwNkVcdTMwNDZcdTMwN0ZcdTMwQUZcdTMwRUFcdTMwQTJcdTVGOENcdTMwMDFcdTUxOERcdTVFQTZcdTMwMENcdTMwNERcdTMwNUJcdTMwNERcdTMwNkVcdTMwNDZcdTMwN0YgXHUzMDRBXHUzMDRGXHUzMDVEXHUzMDUzXHUzMDBEXHUzMDc4XHU1NDExXHUzMDRCXHUzMDQ2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDIxNCxcclxuICAgIGNvbnRleHQ6ICdcdTMwQzBcdTMwRkNcdTMwQUZcdTMwRTlcdTMwQTRcdTY0ODNcdTc4MzRcdTVGOENcdTMwMDFcdTRGOURcdTk4M0NcdTMwOTIzXHU2NUU1XHU1MjA2XHUzMDUzXHUzMDZBXHUzMDU5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDIxNixcclxuICAgIGNvbnRleHQ6ICdcdTMwNURcdTMwODlcdTMwNkVcdTMwNDRcdTMwNUZcdTMwNjBcdTMwNERcdTMwQUZcdTMwRUFcdTMwQTJcdTVGOENcdTMwMDFcdTUxOERcdTVFQTZcdTMwMENcdTMwNURcdTMwODlcdTMwNkVcdTMwNDRcdTMwNUZcdTMwNjBcdTMwNEQgXHUzMDYxXHUzMDg3XHUzMDQ2XHUzMDU4XHUzMDg3XHUzMDQ2XHUzMDBEXHUzMDc4XHU1NDExXHUzMDRCXHUzMDQ2JyxcclxuICB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gZ2V0VW5vd25TdWZmaXgoaW5kZXgpIHtcclxuICBpZiAoaW5kZXggPCAyNSkge1xyXG4gICAgLy8gQi1aXHJcbiAgICByZXR1cm4gJy0nICsgU3RyaW5nLmZyb21DaGFyQ29kZSg5NyArIGluZGV4ICsgMSk7IC8vIDk3ID0gJ2EnXHJcbiAgfSBlbHNlIGlmIChpbmRleCA9PT0gMjUpIHtcclxuICAgIHJldHVybiAnLWV4Y2xhbWF0aW9uJztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuICctcXVlc3Rpb24nO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY2hlY2tQb2tlbW9uRGF0YSA9IFtcclxuICAvLyBSZWd1bGFyIFBva2Vtb24gMS00OTIgKGV4Y2VwdCA0MTIsIDQxMywgNDIyLCA0MjMpXHJcbiAgLi4uQXJyYXkuZnJvbSh7IGxlbmd0aDogNDkyIH0sIChfLCBpKSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IGkgKyAxO1xyXG4gICAgaWYgKFs0MTIsIDQxMywgNDIyLCA0MjNdLmluY2x1ZGVzKGlkKSkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiYXNlSWQ6IGlkLFxyXG4gICAgICBmb3JtSWQ6IDAsXHJcbiAgICAgIHNvcnRJZDogaWQsXHJcbiAgICAgIGltYWdlU3VmZml4OiAnJyxcclxuICAgIH07XHJcbiAgfSkuZmlsdGVyKCh4KSA9PiB4ICE9PSBudWxsKSxcclxuICAvLyBVbm93biBmb3JtcyAoQi1aLCAhLCA/KVxyXG4gIC4uLkFycmF5LmZyb20oeyBsZW5ndGg6IDI3IH0sIChfLCBpKSA9PiAoe1xyXG4gICAgYmFzZUlkOiAyMDEsXHJcbiAgICBmb3JtSWQ6IGkgKyAxLFxyXG4gICAgc29ydElkOiAyMDEgKyAoaSArIDEpIC8gMTAwLFxyXG4gICAgaW1hZ2VTdWZmaXg6IGdldFVub3duU3VmZml4KGkpLFxyXG4gIH0pKSxcclxuICAvLyBCdXJteS9Xb3JtYWRhbSBmb3JtcyAoU2FuZHksIEdyYXNzLCBUcmFzaClcclxuICB7IGJhc2VJZDogNDEyLCBmb3JtSWQ6IDEsIHNvcnRJZDogNDEyLjAsIGltYWdlU3VmZml4OiAnLXNhbmR5JyB9LFxyXG4gIHsgYmFzZUlkOiA0MTIsIGZvcm1JZDogMCwgc29ydElkOiA0MTIuMSwgaW1hZ2VTdWZmaXg6ICcnIH0sXHJcbiAgeyBiYXNlSWQ6IDQxMiwgZm9ybUlkOiAyLCBzb3J0SWQ6IDQxMi4yLCBpbWFnZVN1ZmZpeDogJy10cmFzaCcgfSxcclxuICB7IGJhc2VJZDogMTAwMDQsIGZvcm1JZDogMSwgc29ydElkOiA0MTMuMCwgaW1hZ2VTdWZmaXg6ICcnIH0sXHJcbiAgeyBiYXNlSWQ6IDQxMywgZm9ybUlkOiAwLCBzb3J0SWQ6IDQxMy4xLCBpbWFnZVN1ZmZpeDogJycgfSxcclxuICB7IGJhc2VJZDogMTAwMDUsIGZvcm1JZDogMiwgc29ydElkOiA0MTMuMiwgaW1hZ2VTdWZmaXg6ICcnIH0sXHJcbiAgLy8gU2hlbGxvcy9HYXN0cm9kb24gZm9ybXNcclxuICB7IGJhc2VJZDogNDIyLCBmb3JtSWQ6IDEsIHNvcnRJZDogNDIyLjAsIGltYWdlU3VmZml4OiAnLWVhc3QnIH0sXHJcbiAgeyBiYXNlSWQ6IDQyMiwgZm9ybUlkOiAwLCBzb3J0SWQ6IDQyMi4xLCBpbWFnZVN1ZmZpeDogJycgfSxcclxuICB7IGJhc2VJZDogNDIzLCBmb3JtSWQ6IDEsIHNvcnRJZDogNDIzLjAsIGltYWdlU3VmZml4OiAnLWVhc3QnIH0sXHJcbiAgeyBiYXNlSWQ6IDQyMywgZm9ybUlkOiAwLCBzb3J0SWQ6IDQyMy4xLCBpbWFnZVN1ZmZpeDogJycgfSxcclxuXS5zb3J0KChhLCBiKSA9PiBhLnNvcnRJZCAtIGIuc29ydElkKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRQb2tlbW9uKCkge1xyXG4gIC8vIEpTT05cdThBQURcdThGQkNcclxuICBhd2FpdCBmZXRjaEpzb25EYXRhKCk7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2tlbW9uLWxpc3QnKTtcclxuICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgZm9yIChsZXQgW2ksIHBva2Vtb25dIG9mIGNoZWNrUG9rZW1vbkRhdGEuZW50cmllcygpKSB7XHJcbiAgICBjb25zdCBkaXYgPSBwYXJzZUhUTUwoYFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJwb2tlbW9uLWdyaWRcIlxyXG4gICAgICAgIGRhdGEtYmFzZS1pZD1cIiR7cG9rZW1vbi5iYXNlSWR9XCJcclxuICAgICAgICBkYXRhLWZvcm0taWQ9XCIke3Bva2Vtb24uZm9ybUlkfVwiXHJcbiAgICAgICAgZGF0YS1pZD1cIiR7aW5kZXhUb1Bva2Vtb25JZChpKX1cIlxyXG4gICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7Z2V0UG9rZW1vblNwcml0ZVVybChpKX0pXCJcclxuICAgICAgPjxkaXY+XHJcbiAgICAgIGApO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0b2dnbGVQb2tlbW9uQ2hlY2tlZChkaXYpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBcdTMwQjlcdTMwRERcdTMwRkNcdTMwRjNcdTMwQzdcdTMwRkNcdTMwQkZcdTRGNUNcdTYyMTBcclxuICBzcGF3bkRhdGEgPSBnZW5lcmF0ZVNwYXduRGF0YSgpO1xyXG4gIC8vIFx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1OEE3M1x1N0QzMFx1MzA5Mlx1NEY1Q1x1NjIxMFxyXG4gIGNyZWF0ZUd1aWRlKCk7XHJcbiAgLy8gXHUzMEMwXHUzMEYzXHUzMEI4XHUzMEU3XHUzMEYzXHU4QTczXHU3RDMwXHUzMDkyXHU0RjVDXHU2MjEwXHJcbiAgY3JlYXRlUmVjcnVpdER1bmdlb24oKTtcclxuXHJcbiAgbG9hZFN0YXRlKCk7XHJcbiAgcmVzdG9yZUZvcm1Td2l0Y2goKTtcclxuICBmaWx0ZXJGb3JtVmFyaWFudHMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZUZvcm1Td2l0Y2gnKS5jaGVja2VkLCB0cnVlKTtcclxuICB1cGRhdGVQcm9ncmVzcygpO1xyXG4gIHN5bmNEZXRhaWxzV2l0aENoZWNrZXIoKTtcclxuICBzeW5jRHVuZ2VvbldpdGhDaGVja2VyKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUJcdTMwRkNcdTMwNkVcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNcdTMwOTJcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcdTUyMDdcdTY2RkZcclxuICogQHBhcmFtIHsqfSBkaXZcclxuICovXHJcbmZ1bmN0aW9uIHRvZ2dsZVBva2Vtb25DaGVja2VkKGRpdikge1xyXG4gIGNvbnN0IGlzU2VsZWN0ZWQgPSBkaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkJyk7XHJcbiAgY29uc3QgcG9rZW1vbklkID0gZGl2LmRhdGFzZXQuaWQ7XHJcblxyXG4gIGlmIChpc1NlbGVjdGVkKSB7XHJcbiAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVN0YXRlKCk7XHJcbiAgdXBkYXRlUHJvZ3Jlc3MoKTtcclxuICBzeW5jRGV0YWlsc1dpdGhDaGVja2VyKCk7IC8vIFx1NTJFN1x1OEE5OFx1NjVCOVx1NkNENVx1NTQwQ1x1NjcxRlxyXG4gIHN5bmNEdW5nZW9uV2l0aENoZWNrZXIoKTsgLy8gXHUzMEMwXHUzMEYzXHUzMEI4XHUzMEU3XHUzMEYzXHU1NDBDXHU2NzFGXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVTdGF0ZSgpIHtcclxuICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Bva2Vtb24tbGlzdCAucG9rZW1vbi1ncmlkJykpLnNvcnQoKGEsIGIpID0+IHtcclxuICAgIGNvbnN0IGJhc2VJZEEgPSBwYXJzZUludChhLmRhdGFzZXQuYmFzZUlkKTtcclxuICAgIGNvbnN0IGJhc2VJZEIgPSBwYXJzZUludChiLmRhdGFzZXQuYmFzZUlkKTtcclxuICAgIGlmIChiYXNlSWRBICE9PSBiYXNlSWRCKSByZXR1cm4gYmFzZUlkQSAtIGJhc2VJZEI7XHJcbiAgICBjb25zdCBmb3JtQSA9IHBhcnNlSW50KGEuZGF0YXNldC5mb3JtSWQpO1xyXG4gICAgY29uc3QgZm9ybUIgPSBwYXJzZUludChiLmRhdGFzZXQuZm9ybUlkKTtcclxuICAgIHJldHVybiBmb3JtQSAtIGZvcm1CO1xyXG4gIH0pO1xyXG5cclxuICBsZXQgYmluID0gJyc7XHJcbiAgZm9yIChsZXQgZGl2IG9mIGl0ZW1zKSB7XHJcbiAgICBiaW4gKz0gZGl2LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tlZCcpID8gJzEnIDogJzAnO1xyXG4gIH1cclxuICBjb25zdCBjb21wcmVzc2VkID0gTFpTdHJpbmcuY29tcHJlc3NUb0Jhc2U2NChiaW4pO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb2tlbW9uLWNoZWNrbGlzdCcsIGNvbXByZXNzZWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkU3RhdGUoKSB7XHJcbiAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwb2tlbW9uLWxpc3QgLnBva2Vtb24tZ3JpZCcpKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlSWRBID0gcGFyc2VJbnQoYS5kYXRhc2V0LmJhc2VJZCk7XHJcbiAgICBjb25zdCBiYXNlSWRCID0gcGFyc2VJbnQoYi5kYXRhc2V0LmJhc2VJZCk7XHJcbiAgICBpZiAoYmFzZUlkQSAhPT0gYmFzZUlkQikgcmV0dXJuIGJhc2VJZEEgLSBiYXNlSWRCO1xyXG4gICAgY29uc3QgZm9ybUEgPSBwYXJzZUludChhLmRhdGFzZXQuZm9ybUlkKTtcclxuICAgIGNvbnN0IGZvcm1CID0gcGFyc2VJbnQoYi5kYXRhc2V0LmZvcm1JZCk7XHJcbiAgICByZXR1cm4gZm9ybUEgLSBmb3JtQjtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY29tcHJlc3NlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb2tlbW9uLWNoZWNrbGlzdCcpO1xyXG4gIGNvbnN0IGJpbiA9IExaU3RyaW5nLmRlY29tcHJlc3NGcm9tQmFzZTY0KGNvbXByZXNzZWQpO1xyXG5cclxuICBpZiAoIWJpbiB8fCBiaW4ubGVuZ3RoICE9PSBpdGVtcy5sZW5ndGgpIHJldHVybjtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgKytpKSB7XHJcbiAgICBpZiAoYmluW2ldID09ICcxJykge1xyXG4gICAgICBpdGVtc1tpXS5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBcdTU5RkZcdTkwNTVcdTMwNDRcdTMwQjlcdTMwQTRcdTMwQzNcdTMwQzFcdTMwNkVcdTcyQjZcdTYxNEJcdTMwOTJsb2NhbFN0b3JhZ2VcdTMwNjdcdTRGRERcdTYzMDFcdTMwRkJcdTVGQTlcdTUxNDNcclxuZnVuY3Rpb24gc2F2ZUZvcm1Td2l0Y2hTdGF0ZShjaGVja2VkKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bva2Vtb24tY2hlY2tsaXN0LWZvcm1Td2l0Y2gnLCBjaGVja2VkID8gJzEnIDogJzAnKTtcclxufVxyXG5mdW5jdGlvbiByZXN0b3JlRm9ybVN3aXRjaCgpIHtcclxuICBjb25zdCB0b2dnbGVGb3JtU3dpdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZUZvcm1Td2l0Y2gnKTtcclxuICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb2tlbW9uLWNoZWNrbGlzdC1mb3JtU3dpdGNoJyk7XHJcbiAgaWYgKHRvZ2dsZUZvcm1Td2l0Y2ggJiYgc2F2ZWQgIT09IG51bGwpIHtcclxuICAgIHRvZ2dsZUZvcm1Td2l0Y2guY2hlY2tlZCA9IHNhdmVkID09PSAnMSc7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQcm9ncmVzcygpIHtcclxuICBjb25zdCBleGNsdWRlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGVGb3JtU3dpdGNoJyk/LmNoZWNrZWQ7XHJcbiAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwb2tlbW9uLWxpc3QgLnBva2Vtb24tZ3JpZCcpKS5maWx0ZXIoXHJcbiAgICAoZGl2KSA9PiAhZXhjbHVkZUZvcm0gfHwgZGl2LmRhdGFzZXQuZm9ybUlkID09PSAnMCcsXHJcbiAgKTtcclxuICBsZXQgY2hlY2tlZCA9IDA7XHJcbiAgZm9yIChsZXQgZGl2IG9mIGl0ZW1zKSB7XHJcbiAgICBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tlZCcpKSBjaGVja2VkKys7XHJcbiAgfVxyXG4gIGxldCBwZXJjZW50ID0gTWF0aC5mbG9vcigoY2hlY2tlZCAvIGl0ZW1zLmxlbmd0aCkgKiAxMDApO1xyXG4gIGlmIChjaGVja2VkID09PSBpdGVtcy5sZW5ndGggJiYgaXRlbXMubGVuZ3RoID4gMCkgcGVyY2VudCA9IDEwMDtcclxuICBjb25zdCBiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MtYmFyJyk7XHJcbiAgY29uc3QgcGVyY2VudFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MtcGVyY2VudCcpO1xyXG4gIGNvbnN0IGNvdW50VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzcy1jb3VudCcpO1xyXG4gIGJhci5zdHlsZS53aWR0aCA9IHBlcmNlbnQgKyAnJSc7XHJcbiAgYmFyLnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZW5vdycsIHBlcmNlbnQpO1xyXG4gIHBlcmNlbnRUZXh0LnRleHRDb250ZW50ID0gcGVyY2VudCArICclJztcclxuICBjb3VudFRleHQudGV4dENvbnRlbnQgPSBjaGVja2VkICsgJy8nICsgaXRlbXMubGVuZ3RoO1xyXG4gIGlmIChwZXJjZW50ID09PSAxMDApIHtcclxuICAgIGJhci5jbGFzc0xpc3QucmVtb3ZlKCdiZy1wcmltYXJ5Jyk7XHJcbiAgICBiYXIuY2xhc3NMaXN0LmFkZCgnYmctd2FybmluZycpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBiYXIuY2xhc3NMaXN0LmFkZCgnYmctcHJpbWFyeScpO1xyXG4gICAgYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLXdhcm5pbmcnKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFx1MzBFMlx1MzBGQ1x1MzBDMFx1MzBFQlx1ODg2OFx1NzkzQVx1NzUyOEJvb3RzdHJhcFxyXG5sZXQgZXhwb3J0TW9kYWwsIGltcG9ydE1vZGFsO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGV4cG9ydE1vZGFsID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0TW9kYWwnKSk7XHJcbiAgaW1wb3J0TW9kYWwgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnRNb2RhbCcpKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0LWJ0bicpLm9uY2xpY2sgPSBzaG93RXhwb3J0TW9kYWw7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydC1idG4nKS5vbmNsaWNrID0gc2hvd0ltcG9ydE1vZGFsO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnRGb3JtJykub25zdWJtaXQgPSBoYW5kbGVJbXBvcnQ7XHJcblxyXG4gIC8vIFx1MzBBMlx1MzBCM1x1MzBGQ1x1MzBDN1x1MzBBM1x1MzBBQVx1MzBGM1x1NzdFMlx1NTM3MFx1MzA2RVx1NTZERVx1OEVFMlx1NTIzNlx1NUZBMVxyXG4gIGNvbnN0IGNvbGxhcHNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbGxhcHNlSW1wb3J0RXhwb3J0Jyk7XHJcbiAgY29uc3QgYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjb3JkaW9uQXJyb3cnKTtcclxuICBjb2xsYXBzZS5hZGRFdmVudExpc3RlbmVyKCdzaG93LmJzLmNvbGxhcHNlJywgKCkgPT4ge1xyXG4gICAgYXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgxODBkZWcpJztcclxuICB9KTtcclxuICBjb2xsYXBzZS5hZGRFdmVudExpc3RlbmVyKCdoaWRlLmJzLmNvbGxhcHNlJywgKCkgPT4ge1xyXG4gICAgYXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XHJcbiAgfSk7XHJcblxyXG4gIC8vIFx1MzA1OVx1MzA3OVx1MzA2Nlx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlx1MzBGQlx1MzA1OVx1MzA3OVx1MzA2Nlx1ODlFM1x1OTY2NFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrLWFsbC1idG4nKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2hvd0NvbmZpcm1Nb2RhbCgnXHUzMDU5XHUzMDc5XHUzMDY2XHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHUzMDU3XHUzMDdFXHUzMDU5XHUzMDRCXHVGRjFGPGJyPlx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlx1MzA1N1x1MzA1Rlx1NTE4NVx1NUJCOVx1MzA2Rlx1NTkzMVx1MzA4Rlx1MzA4Q1x1MzA3RVx1MzA1OVx1MzAwMicsICgpID0+IHtcclxuICAgICAgc2V0QWxsTWFya2VkKHRydWUpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5tYXJrLWFsbC1idG4nKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2hvd0NvbmZpcm1Nb2RhbCgnXHUzMDU5XHUzMDc5XHUzMDY2XHU4OUUzXHU5NjY0XHUzMDU3XHUzMDdFXHUzMDU5XHUzMDRCXHVGRjFGPGJyPlx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlx1MzA1N1x1MzA1Rlx1NTE4NVx1NUJCOVx1MzA2Rlx1NTkzMVx1MzA4Rlx1MzA4Q1x1MzA3RVx1MzA1OVx1MzAwMicsICgpID0+IHtcclxuICAgICAgc2V0QWxsTWFya2VkKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIFx1NTlGRlx1OTA1NVx1MzA0NFx1MzBCOVx1MzBBNFx1MzBDM1x1MzBDMVxyXG4gIGNvbnN0IHRvZ2dsZUZvcm1Td2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlRm9ybVN3aXRjaCcpO1xyXG4gIGlmICh0b2dnbGVGb3JtU3dpdGNoKSB7XHJcbiAgICB0b2dnbGVGb3JtU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgc2F2ZUZvcm1Td2l0Y2hTdGF0ZSh0b2dnbGVGb3JtU3dpdGNoLmNoZWNrZWQpO1xyXG4gICAgICBmaWx0ZXJGb3JtVmFyaWFudHModG9nZ2xlRm9ybVN3aXRjaC5jaGVja2VkLCBmYWxzZSk7XHJcbiAgICAgIHVwZGF0ZVByb2dyZXNzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2hvd0V4cG9ydE1vZGFsKCkge1xyXG4gIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9rZW1vbi1jaGVja2xpc3QnKSB8fCAnJztcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0VGV4dGFyZWEnKS52YWx1ZSA9IGRhdGE7XHJcbiAgZXhwb3J0TW9kYWwuc2hvdygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93SW1wb3J0TW9kYWwoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydFRleHRhcmVhJykudmFsdWUgPSAnJztcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0RXJyb3InKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIGltcG9ydE1vZGFsLnNob3coKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlSW1wb3J0KGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0VGV4dGFyZWEnKTtcclxuICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnRFcnJvcicpO1xyXG4gIGxldCB2YWx1ZSA9IHRleHRhcmVhLnZhbHVlLnRyaW0oKTtcclxuICBjb25zdCBiaW4gPSBMWlN0cmluZy5kZWNvbXByZXNzRnJvbUJhc2U2NCh2YWx1ZSk7XHJcbiAgY29uc3QgaXRlbXNMZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcG9rZW1vbi1saXN0IC5wb2tlbW9uLWdyaWQnKS5sZW5ndGg7XHJcbiAgaWYgKCEvXlswMV0rJC9pLnRlc3QoYmluKSB8fCBiaW4ubGVuZ3RoICE9PSBpdGVtc0xlbikge1xyXG4gICAgZXJyb3JEaXYudGV4dENvbnRlbnQgPSAnXHUzMEE0XHUzMEYzXHUzMEREXHUzMEZDXHUzMEM4XHU1OTMxXHU2NTU3OiBcdTMwRDVcdTMwQTlcdTMwRkNcdTMwREVcdTMwQzNcdTMwQzhcdTMwNENcdTZCNjNcdTMwNTdcdTMwNEZcdTMwNDJcdTMwOEFcdTMwN0VcdTMwNUJcdTMwOTNcdTMwMDInO1xyXG4gICAgZXJyb3JEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb2tlbW9uLWNoZWNrbGlzdCcsIHZhbHVlKTtcclxuICBpbXBvcnRNb2RhbC5oaWRlKCk7XHJcbiAgbG9hZFN0YXRlKCk7XHJcbiAgdXBkYXRlUHJvZ3Jlc3MoKTtcclxuICBzeW5jRGV0YWlsc1dpdGhDaGVja2VyKCk7XHJcbiAgc3luY0R1bmdlb25XaXRoQ2hlY2tlcigpO1xyXG59XHJcblxyXG4vLyBcdTMwNTlcdTMwNzlcdTMwNjZcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcdTMwRkJcdTMwNTlcdTMwNzlcdTMwNjZcdTg5RTNcdTk2NjRcdTMwNkVcdTVCOUZcdTg4NENcclxuZnVuY3Rpb24gc2V0QWxsTWFya2VkKG1hcmtlZCkge1xyXG4gIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Bva2Vtb24tbGlzdCAucG9rZW1vbi1ncmlkJyk7XHJcbiAgbGV0IGJpbiA9ICcnO1xyXG4gIGZvciAobGV0IGRpdiBvZiBpdGVtcykge1xyXG4gICAgYmluICs9IG1hcmtlZCA/ICcxJyA6ICcwJztcclxuICB9XHJcbiAgY29uc3QgY29tcHJlc3NlZCA9IExaU3RyaW5nLmNvbXByZXNzVG9CYXNlNjQoYmluKTtcclxuXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bva2Vtb24tY2hlY2tsaXN0JywgY29tcHJlc3NlZCk7XHJcbiAgbG9hZFN0YXRlKCk7XHJcbiAgdXBkYXRlUHJvZ3Jlc3MoKTtcclxuICBzeW5jRGV0YWlsc1dpdGhDaGVja2VyKCk7XHJcbiAgc3luY0R1bmdlb25XaXRoQ2hlY2tlcigpO1xyXG59XHJcblxyXG4vLyBcdThCNjZcdTU0NEFcdTMwRTJcdTMwRkNcdTMwQzBcdTMwRUJcdTg4NjhcdTc5M0FcclxubGV0IGNvbmZpcm1Nb2RhbDtcclxuZnVuY3Rpb24gc2hvd0NvbmZpcm1Nb2RhbChtZXNzYWdlLCBva0NhbGxiYWNrKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1Nb2RhbEJvZHknKS5pbm5lckhUTUwgPSBtZXNzYWdlO1xyXG4gIGNvbmZpcm1Nb2RhbCA9IGNvbmZpcm1Nb2RhbCB8fCBuZXcgYm9vdHN0cmFwLk1vZGFsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtTW9kYWwnKSk7XHJcbiAgY29uZmlybU1vZGFsLnNob3coKTtcclxuICBjb25zdCBva0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtTW9kYWxPa0J0bicpO1xyXG4gIC8vIFx1NEUwMFx1NUVBNlx1MzA2MFx1MzA1MVx1MzBBNFx1MzBEOVx1MzBGM1x1MzBDOFx1MzA5Mlx1NEVEOFx1NEUwRVxyXG4gIG9rQnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25maXJtTW9kYWwuaGlkZSgpO1xyXG4gICAgb2tDYWxsYmFjaygpO1xyXG4gIH07XHJcbn1cclxuXHJcbi8vIFx1MzBENVx1MzBBM1x1MzBFQlx1MzBCRlx1RkYwOFx1MzBBMlx1MzBDQlx1MzBFMVx1MzBGQ1x1MzBCN1x1MzBFN1x1MzBGM1x1MzA2QVx1MzA1N1x1RkYwOVxyXG5mdW5jdGlvbiBmaWx0ZXJGb3JtVmFyaWFudHMoZXhjbHVkZUZvcm0sIGluaXRpYWwpIHtcclxuICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwb2tlbW9uLWxpc3QgLnBva2Vtb24tZ3JpZCcpO1xyXG4gIGZvciAobGV0IGRpdiBvZiBpdGVtcykge1xyXG4gICAgaWYgKGV4Y2x1ZGVGb3JtICYmIGRpdi5kYXRhc2V0LmZvcm1JZCAhPT0gJzAnKSB7XHJcbiAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgIH1cclxuICB9XHJcbiAgLy8gXHU4QTczXHU3RDMwXHU2MEM1XHU1ODMxXHU1MDc0XHUzMDZCXHUzMDgyXHUzMEQ1XHUzMEEzXHUzMEVCXHUzMEJGXHUzMDkyXHU5MDY5XHU3NTI4XHJcbiAgZmlsdGVyRGV0YWlsc0Zvcm1WYXJpYW50cyhleGNsdWRlRm9ybSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdThBNzNcdTdEMzBcdTYwQzVcdTU4MzFcdTUwNzRcdTMwNkVcdTU5RkZcdTkwNTVcdTMwNDRcdTMwOTJcdTMwRDVcdTMwQTNcdTMwRUJcdTMwQkZcclxuICovXHJcbmZ1bmN0aW9uIGZpbHRlckRldGFpbHNGb3JtVmFyaWFudHMoZXhjbHVkZUZvcm0pIHtcclxuICBjb25zdCBkZXRhaWxzSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVjcnVpdC1wb2tlbW9uLWdyaWQnKTtcclxuICBkZXRhaWxzSXRlbXMuZm9yRWFjaCgoZGl2KSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IGRpdi5kYXRhc2V0LmlkO1xyXG4gICAgY29uc3QgY2hlY2tlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb2tlbW9uLWdyaWRbZGF0YS1pZD1cIiR7aWR9XCJdYCk7XHJcblxyXG4gICAgaWYgKGNoZWNrZXJEaXYpIHtcclxuICAgICAgY29uc3QgZm9ybUlkID0gcGFyc2VJbnQoY2hlY2tlckRpdi5kYXRhc2V0LmZvcm1JZCk7XHJcbiAgICAgIGlmIChleGNsdWRlRm9ybSAmJiBmb3JtSWQgIT09IDApIHtcclxuICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcdTcyQjZcdTYxNEJcdTMwOTJcdTc4QkFcdThBOERcdTMwNTdcdTMwNjZcdTg4NjhcdTc5M0EvXHU5NzVFXHU4ODY4XHU3OTNBXHUzMDkyXHU2QzdBXHU1QjlBXHJcbiAgICAgICAgY29uc3QgaXNDaGVja2VkID0gY2hlY2tlckRpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKTtcclxuICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9IGlzQ2hlY2tlZCA/ICdub25lJyA6ICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbmRleElkXHUzMDRCXHUzMDg5XHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzSURcdTMwNkJcdTU5MDlcdTYzREJcclxuICogQHBhcmFtIHsqfSBpbmRleElkXHJcbiAqL1xyXG5mdW5jdGlvbiBpbmRleFRvUG9rZW1vbklkKGluZGV4SWQpIHtcclxuICBjb25zdCBmb3JtSWRzID0gW1xyXG4gICAgWzQzOSwgMHgxYmZdLCAvLyBcdTc4MDJcdTMwREZcdTMwQ0VcdTMwRTBcdTMwQzNcdTMwQzFcclxuICAgIFs0MzgsIDB4MWMwXSwgLy8gXHU4MzQ5XHUzMERGXHUzMENFXHUzMEUwXHUzMEMzXHUzMEMxXHJcbiAgICBbNDQwLCAweDFjMV0sIC8vIFx1OTJGQ1x1MzBERlx1MzBDRVx1MzBFMFx1MzBDM1x1MzBDMVxyXG4gICAgWzQ0MiwgMHgxYzJdLCAvLyBcdTc4MDJcdTMwREZcdTMwQ0VcdTMwREVcdTMwQzBcdTMwRTBcclxuICAgIFs0NDEsIDB4MWMzXSwgLy8gXHU4MzQ5XHUzMERGXHUzMENFXHUzMERFXHUzMEMwXHUzMEUwXHJcbiAgICBbNDQzLCAweDFjNF0sIC8vIFx1OTJGQ1x1MzBERlx1MzBDRVx1MzBERVx1MzBDMFx1MzBFMFxyXG4gICAgWzQ1MywgMHgxY2VdLCAvLyBcdTY3NzFcdTMwQUJcdTMwRTlcdTMwQ0FcdTMwQUZcdTMwQjdcclxuICAgIFs0NTIsIDB4MWNmXSwgLy8gXHU4OTdGXHUzMEFCXHUzMEU5XHUzMENBXHUzMEFGXHUzMEI3XHJcbiAgICBbNDU1LCAweDFkMF0sIC8vIFx1Njc3MVx1MzBDOFx1MzBFQVx1MzBDOFx1MzBDOVx1MzBGM1xyXG4gICAgWzQ1NCwgMHgxZDFdLCAvLyBcdTg5N0ZcdTMwQzhcdTMwRUFcdTMwQzhcdTMwQzlcdTMwRjNcclxuICBdO1xyXG5cclxuICBsZXQgaWQgPSBpbmRleElkICsgMTtcclxuICAvLyBcdTU5RkZcdTkwNTVcdTMwNDRcdTMwOTJcdTU5MDlcdTYzREJcclxuICBmb3IgKGNvbnN0IGZvcm1JZCBvZiBmb3JtSWRzKSB7XHJcbiAgICBpZiAoaW5kZXhJZCA9PSBmb3JtSWRbMF0pIHtcclxuICAgICAgcmV0dXJuIGZvcm1JZFsxXTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gXHU5NjY0XHU1OTE2XHUzMDU5XHUzMDhCXHU1OUZGXHU5MDU1XHUzMDQ0XHUzMDkyXHUzMEI5XHUzMEFEXHUzMEMzXHUzMEQ3XHJcbiAgZm9yIChjb25zdCBqdW1wSWQgb2YgYmFubmVkUG9rZW1vbklkcykge1xyXG4gICAgaWYgKGlkID49IGp1bXBJZCkgaWQrKztcclxuICAgIGVsc2UgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiBpZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM0lEXHUzMDRCXHUzMDg5IEluZGV4SWQgXHUzMDZCXHU5MDA2XHU1OTA5XHU2M0RCXHJcbiAqIEBwYXJhbSB7Kn0gcG9rZW1vbklkXHJcbiAqL1xyXG5mdW5jdGlvbiBwb2tlbW9uSWRUb0luZGV4KHBva2Vtb25JZCkge1xyXG4gIGxldCBpZCA9IHBva2Vtb25JZDtcclxuICBjb25zdCBmb3JtSWRzID0gW1xyXG4gICAgWzQzOSwgMHgxYmZdLCAvLyBcdTc4MDJcdTMwREZcdTMwQ0VcdTMwRTBcdTMwQzNcdTMwQzFcclxuICAgIFs0MzgsIDB4MWMwXSwgLy8gXHU4MzQ5XHUzMERGXHUzMENFXHUzMEUwXHUzMEMzXHUzMEMxXHJcbiAgICBbNDQwLCAweDFjMV0sIC8vIFx1OTJGQ1x1MzBERlx1MzBDRVx1MzBFMFx1MzBDM1x1MzBDMVxyXG4gICAgWzQ0MiwgMHgxYzJdLCAvLyBcdTc4MDJcdTMwREZcdTMwQ0VcdTMwREVcdTMwQzBcdTMwRTBcclxuICAgIFs0NDEsIDB4MWMzXSwgLy8gXHU4MzQ5XHUzMERGXHUzMENFXHUzMERFXHUzMEMwXHUzMEUwXHJcbiAgICBbNDQzLCAweDFjNF0sIC8vIFx1OTJGQ1x1MzBERlx1MzBDRVx1MzBERVx1MzBDMFx1MzBFMFxyXG4gICAgWzQ1MywgMHgxY2VdLCAvLyBcdTY3NzFcdTMwQUJcdTMwRTlcdTMwQ0FcdTMwQUZcdTMwQjdcclxuICAgIFs0NTIsIDB4MWNmXSwgLy8gXHU4OTdGXHUzMEFCXHUzMEU5XHUzMENBXHUzMEFGXHUzMEI3XHJcbiAgICBbNDU1LCAweDFkMF0sIC8vIFx1Njc3MVx1MzBDOFx1MzBFQVx1MzBDOFx1MzBDOVx1MzBGM1xyXG4gICAgWzQ1NCwgMHgxZDFdLCAvLyBcdTg5N0ZcdTMwQzhcdTMwRUFcdTMwQzhcdTMwQzlcdTMwRjNcclxuICBdO1xyXG5cclxuICAvLyBcdTU5RkZcdTkwNTVcdTMwNDRcdTMwNkVcdTUwMjRcdTU5MDlcdTYzREJcclxuICBmb3IgKGNvbnN0IFtiYXNlSWQsIGFsdElkXSBvZiBmb3JtSWRzKSB7XHJcbiAgICBpZiAocG9rZW1vbklkID09PSBhbHRJZCkge1xyXG4gICAgICByZXR1cm4gYmFzZUlkO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBcdTk2NjRcdTU5MTZcdTMwNTlcdTMwOEJcdTU5RkZcdTkwNTVcdTMwNDRcdTMwOTJcdTMwQjlcdTMwQURcdTMwQzNcdTMwRDdcclxuICBmb3IgKGxldCBpID0gYmFubmVkUG9rZW1vbklkcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgY29uc3QganVtcElkID0gYmFubmVkUG9rZW1vbklkc1tpXTtcclxuICAgIGlmIChpZCA+IGp1bXBJZCkgaWQtLTtcclxuICB9XHJcbiAgLy8gXHU1MjFEXHU2NzFGXHU1MDI0XHUzMDRDMVx1MzBCOVx1MzBCRlx1MzBGQ1x1MzBDOFx1MzA2QVx1MzA2RVx1MzA2N1x1MzAwMVx1MzA1M1x1MzA2MVx1MzA4OVx1MzA2Ri0xXHUzMDU5XHUzMDhCXHJcbiAgcmV0dXJuIGlkIC0gMTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1MzA2RVx1MzBCOVx1MzBERFx1MzBGQ1x1MzBGM1x1NjBDNVx1NTgzMVx1MzA5Mlx1NEY1Q1x1NjIxMFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVTcGF3bkRhdGEoKSB7XHJcbiAgY29uc3QgZGF0YSA9IFtdO1xyXG4gIGNvbnN0IGJhbm5lZCA9IFsweDE3YywgMHgxN2QsIDB4MTdlXTtcclxuXHJcbiAgLy8gXHU1MkU3XHU4QTk4XHU1M0VGXHU4MEZEXHUzMEZCXHU2NzA5XHU1MkI5XHUzMEMwXHUzMEYzXHUzMEI4XHUzMEU3XHUzMEYzXHUzMDZFXHUzMDdGXHUzMDZCXHU3RDVFXHUzMDhBXHU4RkJDXHUzMDgwXHJcbiAgY29uc3QgZHVuZ2VvbnMgPSBEdW5nZW9uRGF0YS5maWx0ZXIoXHJcbiAgICAocikgPT4gci5JZCA8PSAweGJmICYmIHIuSWQgIT0gOSAmJiByLklkICE9IDExICYmIHIuSWQgIT0gMTMgJiYgIWlzVW51c2VkRHVuZ2VvbihyLklkKSAmJiByLkZsYWdSZWNydWl0LFxyXG4gICk7XHJcblxyXG4gIGZvciAoY29uc3QgZHVuZ2VvbiBvZiBkdW5nZW9ucykge1xyXG4gICAgY29uc3QgZHVuZ2Vvbk5hbWUgPSBkdW5nZW9uLkluTmFtZTtcclxuICAgIGNvbnN0IG1hcHBhSW5kZXggPSBwYXJzZUludChkdW5nZW9uLk1hcHBhSW5kZXgpO1xyXG4gICAgY29uc3QgZmxvb3JQcmV2ID0gcGFyc2VJbnQoZHVuZ2Vvbi5GbG9vclByZXYpO1xyXG4gICAgY29uc3QgZmxvb3JDb3VudCA9IHBhcnNlSW50KGR1bmdlb24uRmxvb3JDb3VudCk7XHJcbiAgICAvLyBcdTU2RkFcdTVCOUFcdTMwRDVcdTMwRURcdTMwQTJcdTMwOTJcdTk2NjRcdTU5MTYgKFx1NUI5RFx1N0JCMVx1MzBENVx1MzBFRFx1MzBBMlx1MzA2Rlx1OEEzMVx1NTNFRilcclxuICAgIGNvbnN0IGZsb29ycyA9IEZsb29yRGF0YVttYXBwYUluZGV4XVxyXG4gICAgICAuc2xpY2UoZmxvb3JQcmV2ICsgMSwgZmxvb3JQcmV2ICsgMSArIGZsb29yQ291bnQpXHJcbiAgICAgIC5maWx0ZXIoKHIpID0+IHIuRml4ZWRGbG9vcklkID09IDAgfHwgci5GaXhlZEZsb29ySWQgPj0gMHhhYSk7XHJcblxyXG4gICAgaWYgKGZsb29ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAoY29uc3QgZmxvb3Igb2YgZmxvb3JzKSB7XHJcbiAgICAgICAgY29uc3QgZW5lbXlUYWJsZUlkID0gcGFyc2VJbnQoZmxvb3IuSW5kZXhHcm91cC5TcGF3bkVuZW15KTtcclxuICAgICAgICBjb25zdCBlbmVtaWVzID0gTWFwcGFTRGF0YS5FbmVteURhdGFbZW5lbXlUYWJsZUlkXTtcclxuXHJcbiAgICAgICAgLy8gXHU2NTc1XHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMEM3XHUzMEZDXHUzMEJGXHUzMDkyXHUzMEJCXHUzMEMzXHUzMEM4IChcdTMwQUJcdTMwQUZcdTMwRUNcdTMwQUFcdTMwRjNcdTMwOTJcdTVGOENcdTMwOERcdTMwNkJcdTMwNTlcdTMwOEIpXHJcbiAgICAgICAgZm9yIChjb25zdCBlbmVteSBvZiBlbmVtaWVzKSB7XHJcbiAgICAgICAgICBjb25zdCBwb2tlbW9uSWQgPSBwYXJzZUludChlbmVteS5Qb2tlbW9uSWQpO1xyXG5cclxuICAgICAgICAgIC8vIFx1MzBENVx1MzBBOVx1MzBFQlx1MzBFMFx1MzBDMVx1MzBBN1x1MzBGM1x1MzBCOFx1MzA1N1x1MzA1Rlx1MzBERFx1MzBFRlx1MzBFQlx1MzBGM1x1MzA5Mlx1OTY2NFx1NTkxNlxyXG4gICAgICAgICAgaWYgKGJhbm5lZC5pbmNsdWRlcyhwb2tlbW9uSWQpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAvLyBcdTMwQUJcdTMwQUZcdTMwRUNcdTMwQUFcdTMwRjNcdTMwNkVcdTU4MzRcdTU0MDhcdTMwMDFcdTVFOTdcdTMwNENcdTUxRkFcdTMwOEJcdTMwRDVcdTMwRURcdTMwQTJcdTMwNkVcdTMwN0ZcdTMwNkJcdTdENUVcdTMwOEJcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgcG9rZW1vbklkID09IDB4MTdmICYmXHJcbiAgICAgICAgICAgICEoZmxvb3IuQ2hhbmNlS2VjbGVvblNob3AgPiAwICYmIGZsb29yLkZpeGVkRmxvb3JJZCA9PSAwICYmIGZsb29yLkNoYW5jZU1vbnN0ZXJIb3VzZSA8IDEwMClcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBcdTMwNkFcdTMwNkJcdTMwNEJcdTMwNkVcdTU4MzRcdTU0MDhcdTk2NjRcdTU5MTZcclxuICAgICAgICAgIGlmIChwb2tlbW9uSWQgPT0gMHgyMjkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgIGRhdGEucHVzaCh7XHJcbiAgICAgICAgICAgIGR1bmdlb246IHBhcnNlSW50KGR1bmdlb24uSWQpLFxyXG4gICAgICAgICAgICBkdW5nZW9uTmFtZTogZHVuZ2Vvbk5hbWUsXHJcbiAgICAgICAgICAgIGZsb29yOiBwYXJzZUludChmbG9vci5GbG9vck5vKSAtIGZsb29yUHJldixcclxuICAgICAgICAgICAgbGV2ZWw6IHBhcnNlSW50KGVuZW15LkxldmVsKSxcclxuICAgICAgICAgICAgcG9rZW1vbklkOiBwb2tlbW9uSWQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNcdTMwNkVcdTUyRTdcdThBOThcdTYwQzVcdTU4MzFcdTMwOTJcdTRGNUNcdTYyMTBcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUmVjcnVpdERhdGEoKSB7XHJcbiAgY29uc3QgZGF0YXMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrUG9rZW1vbkRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGlkID0gaW5kZXhUb1Bva2Vtb25JZChpKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkOiBpZCxcclxuICAgICAgbmFtZTogUG9rZW1vbkRhdGFbaWRdLk5hbWUsXHJcbiAgICAgIHN1Ym5hbWU6IFBva2Vtb25EYXRhW2lkXS5TdWJOYW1lLFxyXG4gICAgICBldm9sVGV4dDogZ2V0RXZvbFRleHREYXRhKGlkKSxcclxuICAgICAgcmVjcnVpdDogc3Bhd25EYXRhLmZpbHRlcigocikgPT4gci5wb2tlbW9uSWQgPT0gaWQpLFxyXG4gICAgfTtcclxuICAgIGRhdGFzLnB1c2goZGF0YSk7XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhcztcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NTJFN1x1OEE5OFx1NjBDNVx1NTgzMVx1ODk4MVx1N0QyMFx1MzA5Mlx1NEY1Q1x1NjIxMFxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlR3VpZGUoKSB7XHJcbiAgY29uc3QgcmVjcnVpdERhdGEgPSBnZW5lcmF0ZVJlY3J1aXREYXRhKCk7XHJcblxyXG4gIC8vIFx1NTE2OFx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM0lEXHUzMDkyXHU1M0Q2XHU1Rjk3XHJcbiAgY29uc3QgaWRzID0gW107XHJcbiAgY29uc3Qgd3JhcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjcnVpdC1wb2tlbW9uJyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja1Bva2Vtb25EYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBpZCA9IGluZGV4VG9Qb2tlbW9uSWQoaSk7XHJcbiAgICBjb25zdCBzcGF3biA9IHJlY3J1aXREYXRhLmZpbmQoKHIpID0+IHIuaWQgPT0gaWQpO1xyXG5cclxuICAgIGlkcy5wdXNoKGlkKTtcclxuICAgIGNvbnN0IHBva2Vtb24gPSBQb2tlbW9uRGF0YVtpZF07XHJcbiAgICBjb25zdCBncmlkSHRtbCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cInJlY3J1aXQtcG9rZW1vbi1ncmlkIHJvdW5kZWRcIiBkYXRhLWlkPVwiJHtpZH1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVjcnVpdC1wb2tlbW9uLWdyaWQtaW5uZXJcIj5cclxuICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlY3J1aXQtcG9rZW1vbi1pbWdcIiBzcmM9XCIke2dldFBva2Vtb25TcHJpdGVVcmwoaSl9XCI+XHJcbiAgICAgICAgICAgIDxzcGFuPiR7cG9rZW1vbi5OYW1lfSR7cG9rZW1vbi5TdWJOYW1lID8gYCgke3Bva2Vtb24uU3ViTmFtZX0pYCA6ICcnfTwvc3Bhbj5cclxuICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cInJlY3J1aXQtcmF0ZSBzbWFsbC10ZXh0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlx1NTdGQVx1NzkwRVx1NTJFN1x1OEE5OFx1NzM4NzogJHsocG9rZW1vbi5SZWNydWl0UmF0ZTEgLyAxMCkudG9GaXhlZCgxKX0lJHtwb2tlbW9uLlJlY3J1aXRSYXRlMSAhPSBwb2tlbW9uLlJlY3J1aXRSYXRlMiA/IGAgKCR7KHBva2Vtb24uUmVjcnVpdFJhdGUyIC8gMTApLnRvRml4ZWQoMSl9JSlgIDogJyd9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIGNvbnN0IGdyaWQgPSBwYXJzZUhUTUwoZ3JpZEh0bWwpO1xyXG4gICAgY29uc3QgaW5uZXIgPSBncmlkLnF1ZXJ5U2VsZWN0b3IoJy5yZWNydWl0LXBva2Vtb24tZ3JpZC1pbm5lcicpO1xyXG5cclxuICAgIC8vIFx1OTAzMlx1NTMxNlx1NjVCOVx1NkNENVxyXG4gICAgY29uc3QgZGl2UmVjcnVpdFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdlJlY3J1aXRXcmFwLmNsYXNzTGlzdC5hZGQoJ3JlY3J1aXQtd3JhcCcsICdzbWFsbC10ZXh0Jyk7XHJcbiAgICBpZiAoc3Bhd24uZXZvbFRleHQubGVuZ3RoID4gMCkge1xyXG4gICAgICBkaXZSZWNydWl0V3JhcC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxwIGNsYXNzPVwibWItMVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgdGV4dC1iZy1kYW5nZXIgbWUtMVwiPlx1OTAzMlx1NTMxNjwvc3Bhbj4ke3NwYXduLmV2b2xUZXh0fVxyXG4gICAgICA8L3A+YDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBcdTUxRkFcdTczRkVcdTMwQzBcdTMwRjNcdTMwQjhcdTMwRTdcdTMwRjNcdTMwOTJcdTMwQzBcdTMwRjNcdTMwQjhcdTMwRTdcdTMwRjNcdTMwRkJcdTk2OEVcdTVDNjRcdTkwMjNcdTc1NkFcdTMwNTRcdTMwNjhcdTMwNkJcdTMwQjBcdTMwRUJcdTMwRkNcdTMwRDdcdTUzMTZcclxuICAgIGNvbnN0IGR1bmdlb25Hcm91cHMgPSBuZXcgTWFwKCk7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc3Bhd24ucmVjcnVpdCkge1xyXG4gICAgICBjb25zdCBkdW5nZW9uSWQgPSBpdGVtLmR1bmdlb247XHJcbiAgICAgIGlmICghZHVuZ2Vvbkdyb3Vwcy5oYXMoZHVuZ2VvbklkKSkge1xyXG4gICAgICAgIGR1bmdlb25Hcm91cHMuc2V0KGR1bmdlb25JZCwgW10pO1xyXG4gICAgICB9XHJcbiAgICAgIGR1bmdlb25Hcm91cHMuZ2V0KGR1bmdlb25JZCkucHVzaChpdGVtKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlY3J1aXRHcm91cHMgPSB7fTtcclxuICAgIGZvciAoY29uc3QgW2R1bmdlb25JZCwgaXRlbXNdIG9mIGR1bmdlb25Hcm91cHMuZW50cmllcygpKSB7XHJcbiAgICAgIGNvbnN0IHNvcnRlZCA9IGl0ZW1zLnNsaWNlKCkuc29ydCgoYSwgYikgPT4gYS5mbG9vciAtIGIuZmxvb3IpO1xyXG4gICAgICBjb25zdCBncm91cHMgPSBbXTtcclxuICAgICAgbGV0IGN1cnJlbnQgPSBbc29ydGVkWzBdXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzb3J0ZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBwcmV2ID0gc29ydGVkW2kgLSAxXS5mbG9vcjtcclxuICAgICAgICBjb25zdCBjdXIgPSBzb3J0ZWRbaV0uZmxvb3I7XHJcblxyXG4gICAgICAgIGlmIChjdXIgPT09IHByZXYgKyAxKSB7XHJcbiAgICAgICAgICBjdXJyZW50LnB1c2goc29ydGVkW2ldKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZ3JvdXBzLnB1c2goY3VycmVudCk7XHJcbiAgICAgICAgICBjdXJyZW50ID0gW3NvcnRlZFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGdyb3Vwcy5wdXNoKGN1cnJlbnQpO1xyXG4gICAgICByZWNydWl0R3JvdXBzW2R1bmdlb25JZF0gPSBncm91cHM7XHJcbiAgICB9XHJcbiAgICAvLyBcdTMwQzBcdTMwRjNcdTMwQjhcdTMwRTdcdTMwRjNcdTZCQ0VcclxuICAgIGZvciAoY29uc3QgW2R1bmdlb25JZCwgZ3JvdXBdIG9mIE9iamVjdC5lbnRyaWVzKHJlY3J1aXRHcm91cHMpKSB7XHJcbiAgICAgIGNvbnN0IGR1bmdlb24gPSBEdW5nZW9uRGF0YVtkdW5nZW9uSWRdO1xyXG4gICAgICBjb25zdCBlbGVtZW50SHRtbCA9IGBcclxuICAgICAgICA8cCBjbGFzcz1cIm1iLTFcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgdGV4dC1iZy1wcmltYXJ5IG1lLTFcIj5cdTUyRTdcdThBOTg8L3NwYW4+XHJcbiAgICAgICAgICAke1xyXG4gICAgICAgICAgICAvLyBcdTkwNTNcdTUxNzdcdTVGQzVcdTk4MDhcdTMwNkVcdTU4MzRcdTU0MDhcdTMwNkFcdTMwNUVcdTMwNkVcdTMwRDFcdTMwRkNcdTMwQzRcdTMwQTJcdTMwQTRcdTMwQjNcdTMwRjNcdTg4NjhcdTc5M0FcclxuICAgICAgICAgICAgcG9rZW1vbi5CaXRfSXRlbVJlcXVpcmVkU3Bhd25pbmcgPyAnPHNwYW4gY2xhc3M9XCJpdGVtLXNwcml0ZSBzcHJpdGUtMTgtM1wiPjwvc3Bhbj4nIDogJydcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICR7ZHVuZ2Vvbi5Jbk5hbWV9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICBgO1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gcGFyc2VIVE1MKGVsZW1lbnRIdG1sKTtcclxuXHJcbiAgICAgIGNvbnN0IGZsb29yR3JvdXBBcnIgPSBbXTtcclxuICAgICAgZm9yIChjb25zdCBmbG9vckdyb3VwIG9mIGdyb3VwKSB7XHJcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4oLi4uZmxvb3JHcm91cC5tYXAoKHgpID0+IHguZmxvb3IpKTtcclxuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCguLi5mbG9vckdyb3VwLm1hcCgoeCkgPT4geC5mbG9vcikpO1xyXG4gICAgICAgIGNvbnN0IHN0YWlycyA9IGR1bmdlb24uRmxhZ1N0YWlycyA/ICcnIDogJ0InO1xyXG4gICAgICAgIGZsb29yR3JvdXBBcnIucHVzaChtaW4gIT0gbWF4ID8gYCR7c3RhaXJzfSR7bWlufUZcdUZGNUUke3N0YWlyc30ke21heH1GYCA6IGAke3N0YWlyc30ke21pbn1GYCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gYCAke2Zsb29yR3JvdXBBcnIuam9pbignLCAnKX1gO1xyXG4gICAgICBkaXZSZWNydWl0V3JhcC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBcdTMwQTRcdTMwRDlcdTMwRjNcdTMwQzhcdTUyRTdcdThBOThcclxuICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRSZWN0dWl0LmZpbmQoKHIpID0+IHIuaWQgPT0gaWQpO1xyXG4gICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgIHAuY2xhc3NMaXN0LmFkZCgnbWItMScpO1xyXG4gICAgICBwLmlubmVySFRNTCArPSBgPHNwYW4gY2xhc3M9XCJiYWRnZSBiZy1pbmRpZ28gbWUtMVwiPlx1MzBBNFx1MzBEOVx1MzBGM1x1MzBDODwvc3Bhbj4ke2V2ZW50LmNvbnRleHR9YDtcclxuICAgICAgZGl2UmVjcnVpdFdyYXAuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gXHUzMEFCXHUzMEQ1XHUzMEE3XHJcbiAgICBpZiAocGFyYW1zLkNBRkVfUkVDUlVJVF9UQUJMRS5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgZGl2UmVjcnVpdFdyYXAuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgcGFyc2VIVE1MKGBcclxuICAgICAgICAgIDxwIGNsYXNzPVwibWItMSBjYWZlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgdGV4dC1iZy1zZWNvbmRhcnkgbWUtMVwiPlx1MzBBQlx1MzBENVx1MzBBNzwvc3Bhbj5cclxuICAgICAgICAgICAgXHUzMEM5XHUzMEVBXHUzMEYzXHUzMEFGXHUzMDkyXHU5OEYyXHUzMDkzXHUzMDY3XHU3OEJBXHU3Mzg3XHUzMDY3XHU1MkU3XHU4QTk4XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgYCksXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gXHUzMEI3XHUzMENBXHUzMEVBXHUzMEFBXHJcbiAgICBjb25zdCBzY2VuYXJpbyA9IHBhcnNlSFRNTChgPHAgY2xhc3M9XCJzbWFsbC10ZXh0IG1iLTEgZnctYm9sZFwiPjwvcD5gKTtcclxuICAgIGlmIChPYmplY3Qua2V5cyhyZWNydWl0R3JvdXBzKS5sZW5ndGggPiAwICYmIHBva2Vtb24uVW5sb2NrU2NlbmFyaW8gPiAwKSB7XHJcbiAgICAgIHNjZW5hcmlvLnRleHRDb250ZW50ID0gYFx1MjAzQiR7cGFyYW1zLlNDRU5BUklPX1NUUklOR1NbcG9rZW1vbi5VbmxvY2tTY2VuYXJpb119XHUzMDZCXHU1MUZBXHU3M0ZFYDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcdTMwRENcdTMwQkZcdTMwRjNcclxuICAgIGNvbnN0IGJ0bkNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgYnRuQ2hlY2suY2xhc3NMaXN0LmFkZCgncmVjcnVpdC1jaGVjaycpO1xyXG4gICAgYnRuQ2hlY2suaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiYmkgYmktY2hlY2syLWNpcmNsZVwiPjwvaT4nO1xyXG4gICAgYnRuQ2hlY2suZGF0YXNldC5pc0FuaW1hdGluZyA9ICdmYWxzZSc7XHJcbiAgICBidG5DaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGlmIChidG5DaGVjay5kYXRhc2V0LmlzQW5pbWF0aW5nID09PSAndHJ1ZScpIHJldHVybjtcclxuICAgICAgY29uc3QgY2hlY2tlckl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9rZW1vbi1ncmlkW2RhdGEtaWQ9XCIke2lkfVwiXWApO1xyXG4gICAgICBpZiAoY2hlY2tlckl0ZW0pIHtcclxuICAgICAgICBidG5DaGVjay5kYXRhc2V0LmlzQW5pbWF0aW5nID0gJ3RydWUnO1xyXG4gICAgICAgIHRvZ2dsZVBva2Vtb25DaGVja2VkKGNoZWNrZXJJdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaW5uZXIuYXBwZW5kQ2hpbGQoZGl2UmVjcnVpdFdyYXApO1xyXG4gICAgaW5uZXIuYXBwZW5kQ2hpbGQoc2NlbmFyaW8pO1xyXG4gICAgaW5uZXIuYXBwZW5kQ2hpbGQoYnRuQ2hlY2spO1xyXG4gICAgZ3JpZC5hcHBlbmRDaGlsZChpbm5lcik7XHJcblxyXG4gICAgd3JhcEVsZW1lbnQuYXBwZW5kQ2hpbGQoZ3JpZCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFCXHUzMEZDXHUzMDZFXHU3MkI2XHU2MTRCXHUzMDkyXHU4QTczXHU3RDMwXHU2MEM1XHU1ODMxXHUzMDZCXHU1NDBDXHU2NzFGXHJcbiAqL1xyXG5mdW5jdGlvbiBzeW5jRGV0YWlsc1dpdGhDaGVja2VyKCkge1xyXG4gIGNvbnN0IGRldGFpbHNJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWNydWl0LXBva2Vtb24tZ3JpZCcpO1xyXG4gIGNvbnN0IGV4Y2x1ZGVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZUZvcm1Td2l0Y2gnKT8uY2hlY2tlZDtcclxuICBjb25zdCBkZXRhaWxUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsLXRhYi1wYW5lJyk7XHJcbiAgY29uc3QgaXNEZXRhaWxUYWJWaXNpYmxlID0gZGV0YWlsVGFiICYmIGRldGFpbFRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKTtcclxuXHJcbiAgZGV0YWlsc0l0ZW1zLmZvckVhY2goKGRldGFpbERpdikgPT4ge1xyXG4gICAgY29uc3QgaWQgPSBkZXRhaWxEaXYuZGF0YXNldC5pZDtcclxuICAgIGNvbnN0IGNoZWNrZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9rZW1vbi1ncmlkW2RhdGEtaWQ9XCIke2lkfVwiXWApO1xyXG4gICAgY29uc3QgYnRuQ2hlY2sgPSBkZXRhaWxEaXYucXVlcnlTZWxlY3RvcignLnJlY3J1aXQtY2hlY2snKTtcclxuICAgIGNvbnN0IGZvcm1JZCA9IHBhcnNlSW50KGNoZWNrZXJEaXYuZGF0YXNldC5mb3JtSWQpO1xyXG5cclxuICAgIGlmIChjaGVja2VyRGl2KSB7XHJcbiAgICAgIC8vIFx1NTlGRlx1OTA1NVx1MzA0NFx1MzBENVx1MzBBM1x1MzBFQlx1MzBCRlx1OTA2OVx1NzUyOFx1NEUyRFx1MzA0Qlx1MzA2NFx1NTdGQVx1NjcyQ1x1NUY2Mlx1MzA2N1x1MzA2QVx1MzA0NFx1NTgzNFx1NTQwOFx1MzA2Rlx1OTc1RVx1ODg2OFx1NzkzQVxyXG4gICAgICBpZiAoZXhjbHVkZUZvcm0gJiYgZm9ybUlkICE9PSAwKSB7XHJcbiAgICAgICAgZGV0YWlsRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBpc0NoZWNrZWQgPSBjaGVja2VyRGl2LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tlZCcpO1xyXG4gICAgICBpZiAoaXNDaGVja2VkKSB7XHJcbiAgICAgICAgaWYgKGlzRGV0YWlsVGFiVmlzaWJsZSkge1xyXG4gICAgICAgICAgLy8gXHU4OTgxXHU3RDIwXHUzMDZFXHU5QUQ4XHUzMDU1XHUzMDY4XHUzMEFFXHUzMEUzXHUzMEMzXHUzMEQ3XHUzMDkyXHU1M0Q2XHU1Rjk3XHJcbiAgICAgICAgICBjb25zdCBpdGVtSGVpZ2h0ID0gZGV0YWlsRGl2Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgICAvLyBDU1MgXHU1OTA5XHU2NTcwXHUzMDkyXHU4QTJEXHU1QjlBXHJcbiAgICAgICAgICBkZXRhaWxEaXYuc3R5bGUuc2V0UHJvcGVydHkoJy0taXRlbS1oZWlnaHQnLCBpdGVtSGVpZ2h0ICsgJ3B4Jyk7XHJcblxyXG4gICAgICAgICAgLy8gXHUzMEEyXHUzMENCXHUzMEUxXHUzMEZDXHUzMEI3XHUzMEU3XHUzMEYzXHU0RUQ4XHUzMDREXHUzMDY3XHU5NzVFXHU4ODY4XHU3OTNBXHU1MzE2XHJcbiAgICAgICAgICBkZXRhaWxEaXYuY2xhc3NMaXN0LmFkZCgnaGlkaW5nJyk7XHJcbiAgICAgICAgICBkZXRhaWxEaXYuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgJ2FuaW1hdGlvbmVuZCcsXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICBkZXRhaWxEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICBkZXRhaWxEaXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkaW5nJyk7XHJcbiAgICAgICAgICAgICAgaWYgKGJ0bkNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICBidG5DaGVjay5kYXRhc2V0LmlzQW5pbWF0aW5nID0gJ2ZhbHNlJztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgb25jZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gXHUzMEJGXHUzMEQ2XHUzMDRDXHU5NzVFXHU4ODY4XHU3OTNBXHUzMDZFXHU1ODM0XHU1NDA4XHUzMDZGXHUzMEEyXHUzMENCXHUzMEUxXHUzMEZDXHUzMEI3XHUzMEU3XHUzMEYzXHUzMDZBXHUzMDU3XHUzMDY3XHU5NzVFXHU4ODY4XHU3OTNBXHU1MzE2XHJcbiAgICAgICAgICBkZXRhaWxEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgIGlmIChidG5DaGVjaykge1xyXG4gICAgICAgICAgICBidG5DaGVjay5kYXRhc2V0LmlzQW5pbWF0aW5nID0gJ2ZhbHNlJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHU4OUUzXHU5NjY0XHU2NjQyXHUzMDZGXHU4ODY4XHU3OTNBXHJcbiAgICAgICAgZGV0YWlsRGl2LnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICBkZXRhaWxEaXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkaW5nJyk7XHJcbiAgICAgICAgaWYgKGJ0bkNoZWNrKSB7XHJcbiAgICAgICAgICBidG5DaGVjay5kYXRhc2V0LmlzQW5pbWF0aW5nID0gJ2ZhbHNlJztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBCOVx1MzBERFx1MzBGQ1x1MzBGM1x1MzBDN1x1MzBGQ1x1MzBCRlx1MzA5Mlx1MzBCMFx1MzBFQlx1MzBGQ1x1MzBEN1x1NTMxNlx1MzA1N1x1MzA2Nlx1NTNENlx1NUY5N1xyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVTcGF3bkdyb3VwKCkge1xyXG4gIGNvbnN0IGR1bmdlb25NYXAgPSBuZXcgTWFwKCk7XHJcblxyXG4gIGZvciAoY29uc3QgaXRlbSBvZiBzcGF3bkRhdGEpIHtcclxuICAgIGlmICghZHVuZ2Vvbk1hcC5oYXMoaXRlbS5kdW5nZW9uKSkge1xyXG4gICAgICBkdW5nZW9uTWFwLnNldChpdGVtLmR1bmdlb24sIFtdKTtcclxuICAgIH1cclxuICAgIGR1bmdlb25NYXAuZ2V0KGl0ZW0uZHVuZ2VvbikucHVzaChpdGVtKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cclxuICBmb3IgKGNvbnN0IFtkdW5nZW9uLCBkdW5nZW9uSXRlbXNdIG9mIGR1bmdlb25NYXAuZW50cmllcygpKSB7XHJcbiAgICBjb25zdCBwb2tlbW9uTWFwID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIC8vIGR1bmdlb24gXHU1MTg1XHUzMDY3IHBva2Vtb25JZCBcdTMwNTRcdTMwNjhcdTMwNkJcdTMwN0VcdTMwNjhcdTMwODFcdTMwOEJcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBkdW5nZW9uSXRlbXMpIHtcclxuICAgICAgaWYgKCFwb2tlbW9uTWFwLmhhcyhpdGVtLnBva2Vtb25JZCkpIHtcclxuICAgICAgICBwb2tlbW9uTWFwLnNldChpdGVtLnBva2Vtb25JZCwge1xyXG4gICAgICAgICAgcG9rZW1vbklkOiBpdGVtLnBva2Vtb25JZCxcclxuICAgICAgICAgIGR1bmdlb25OYW1lOiBpdGVtLmR1bmdlb25OYW1lLFxyXG4gICAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHBva2Vtb25NYXAuZ2V0KGl0ZW0ucG9rZW1vbklkKS5pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFx1NTQwNCBwb2tlbW9uSWQgXHUzMDU0XHUzMDY4XHUzMDZCIGZsb29ycyBcdTMwOTJcdTkwMjNcdTc1NkFcdTMwQjBcdTMwRUJcdTMwRkNcdTMwRDdcdTUzMTZcclxuICAgIGNvbnN0IHBva2Vtb25Hcm91cHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIHBva2Vtb25NYXAudmFsdWVzKCkpIHtcclxuICAgICAgY29uc3Qgc29ydGVkID0gZ3JvdXAuaXRlbXMuc2xpY2UoKS5zb3J0KChhLCBiKSA9PiBhLmZsb29yIC0gYi5mbG9vcik7XHJcblxyXG4gICAgICBjb25zdCBmbG9vckdyb3VwcyA9IFtdO1xyXG4gICAgICBsZXQgY3VycmVudCA9IFtdO1xyXG5cclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHNvcnRlZCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgY3VycmVudC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBwcmV2ID0gY3VycmVudFtjdXJyZW50Lmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgaWYgKGl0ZW0uZmxvb3IgPT09IHByZXYuZmxvb3IgKyAxKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQucHVzaChpdGVtKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZsb29yR3JvdXBzLnB1c2goY3VycmVudCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSBbaXRlbV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChjdXJyZW50Lmxlbmd0aCkgZmxvb3JHcm91cHMucHVzaChjdXJyZW50KTtcclxuXHJcbiAgICAgIGNvbnN0IGZsb29ycyA9IGZsb29yR3JvdXBzLm1hcCgoZykgPT4gZy5tYXAoKHgpID0+IHguZmxvb3IpKTtcclxuICAgICAgY29uc3QgbGV2ZWxSYW5nZXMgPSBmbG9vckdyb3Vwcy5tYXAoKGcpID0+IHtcclxuICAgICAgICBjb25zdCBsZXZlbHMgPSBnLm1hcCgoeCkgPT4geC5sZXZlbCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG1pbkxldmVsOiBNYXRoLm1pbiguLi5sZXZlbHMpLFxyXG4gICAgICAgICAgbWF4TGV2ZWw6IE1hdGgubWF4KC4uLmxldmVscyksXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBwb2tlbW9uR3JvdXBzLnB1c2goe1xyXG4gICAgICAgIHBva2Vtb25JZDogZ3JvdXAucG9rZW1vbklkLFxyXG4gICAgICAgIGR1bmdlb25OYW1lOiBncm91cC5kdW5nZW9uTmFtZSxcclxuICAgICAgICBmbG9vcnMsXHJcbiAgICAgICAgbGV2ZWxSYW5nZXMsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGR1bmdlb24gXHUzMDkyXHUzMEFEXHUzMEZDXHUzMDY4XHUzMDU3XHUzMDY2XHU2ODNDXHU3RDBEIChcdTMwQUJcdTMwQUZcdTMwRUNcdTMwQUFcdTMwRjNcdTMwOTJcdTVGOENcdTMwOERcdTMwNkJcdTMwNTlcdTMwOEIpXHJcbiAgICByZXN1bHRbZHVuZ2Vvbl0gPSBwb2tlbW9uR3JvdXBzXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnBva2Vtb25JZCAtIGIucG9rZW1vbklkKVxyXG4gICAgICAuZmlsdGVyKCh4KSA9PiB4LnBva2Vtb25JZCAhPSAweDE3ZilcclxuICAgICAgLmNvbmNhdChwb2tlbW9uR3JvdXBzLmZpbHRlcigoeCkgPT4geC5wb2tlbW9uSWQgPT0gMHgxN2YpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTMwQzBcdTMwRjNcdTMwQjhcdTMwRTdcdTMwRjNcdTUyRTdcdThBOThcdTYwQzVcdTU4MzFcdTMwOTJcdTRGNUNcdTYyMTBcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlY3J1aXREdW5nZW9uKCkge1xyXG4gIGNvbnN0IHNwYXduR3JvdXAgPSBnZW5lcmF0ZVNwYXduR3JvdXAoKTtcclxuXHJcbiAgY29uc3QgcmVjcnVpdER1bmdlb25XcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY3J1aXQtZHVuZ2VvbicpO1xyXG4gIGZvciAoY29uc3QgZHVuZ2VvbklkIGluIHNwYXduR3JvdXApIHtcclxuICAgIGNvbnN0IGR1bmdlb25OYW1lID0gRHVuZ2VvbkRhdGFbZHVuZ2VvbklkXS5Jbk5hbWU7XHJcblxyXG4gICAgLy8gXHUzMEMwXHUzMEYzXHUzMEI4XHUzMEU3XHUzMEYzXHUzMEIwXHUzMEVBXHUzMEMzXHUzMEM5XHU0RjVDXHU2MjEwXHJcbiAgICBjb25zdCBkdW5nZW9uR3JpZEh0bWwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlY3J1aXQtZHVuZ2Vvbi1ncmlkIHJvdW5kZWRcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiZHVuZ2Vvbi1uYW1lXCI+JHtkdW5nZW9uTmFtZX08L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9rZW1vbi1ncmlkLXdyYXBcIj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmA7XHJcbiAgICBjb25zdCBkdW5nZW9uR3JpZEVsZW1lbnQgPSBwYXJzZUhUTUwoZHVuZ2VvbkdyaWRIdG1sKTtcclxuXHJcbiAgICAvLyBcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNcdTMwQjBcdTMwRUFcdTMwQzNcdTMwQzlcdTRGNUNcdTYyMTBcclxuICAgIGNvbnN0IHBva2Vtb25HcmlkV3JhcEVsZW1lbnQgPSBkdW5nZW9uR3JpZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBva2Vtb24tZ3JpZC13cmFwJyk7XHJcbiAgICBmb3IgKGNvbnN0IHNwYXduIG9mIHNwYXduR3JvdXBbZHVuZ2VvbklkXSkge1xyXG4gICAgICBjb25zdCBwb2tlbW9uSWQgPSBzcGF3bi5wb2tlbW9uSWQ7XHJcbiAgICAgIGNvbnN0IGluZGV4SWQgPSBwb2tlbW9uSWRUb0luZGV4KHBva2Vtb25JZCk7XHJcbiAgICAgIGNvbnN0IHBva2Vtb25HcmlkSHRtbCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9rZW1vbi1ncmlkIHBvc2l0aW9uLXJlbGF0aXZlXCIgZGF0YS1pZD1cIiR7cG9rZW1vbklkfVwiXHJcbiAgICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke2dldFBva2Vtb25TcHJpdGVVcmwoaW5kZXhJZCl9KVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgICBjb25zdCBwb2tlbW9uR3JpZCA9IHBhcnNlSFRNTChwb2tlbW9uR3JpZEh0bWwpO1xyXG4gICAgICBwb2tlbW9uR3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUJcdTMwRkNcdTMwNkVcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNcdTMwOTJcdTMwQzhcdTMwQjBcdTMwRUJcclxuICAgICAgICBjb25zdCBjaGVja2VyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwb2tlbW9uLWxpc3QgLnBva2Vtb24tZ3JpZFtkYXRhLWlkPVwiJHtwb2tlbW9uSWR9XCJdYCk7XHJcbiAgICAgICAgaWYgKGNoZWNrZXJHcmlkKSB7XHJcbiAgICAgICAgICB0b2dnbGVQb2tlbW9uQ2hlY2tlZChjaGVja2VyR3JpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcG9rZW1vbkdyaWRXcmFwRWxlbWVudC5hcHBlbmRDaGlsZChwb2tlbW9uR3JpZCk7XHJcbiAgICB9XHJcbiAgICByZWNydWl0RHVuZ2VvbldyYXAuYXBwZW5kQ2hpbGQoZHVuZ2VvbkdyaWRFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIC8vIC8vIFx1MzBBNFx1MzBEOVx1MzBGM1x1MzBDOFx1NTJFN1x1OEE5OFxyXG4gIC8vIGNvbnN0IGV2ZW50R3JpZEh0bWwgPSBgXHJcbiAgLy8gICA8ZGl2IGNsYXNzPVwicmVjcnVpdC1kdW5nZW9uLWdyaWQgcm91bmRlZFwiPlxyXG4gIC8vICAgICA8cCBjbGFzcz1cImR1bmdlb24tbmFtZVwiPlx1MzBBNFx1MzBEOVx1MzBGM1x1MzBDODwvcD5cclxuICAvLyAgICAgPGRpdiBjbGFzcz1cInBva2Vtb24tZ3JpZC13cmFwXCI+XHJcbiAgLy8gICAgIDwvZGl2PlxyXG4gIC8vICAgPC9kaXY+YDtcclxuICAvLyBjb25zdCBldmVudEdyaWRFbGVtZW50ID0gcGFyc2VIVE1MKGV2ZW50R3JpZEh0bWwpO1xyXG4gIC8vIGNvbnN0IGV2ZW50UG9rZW1vbkdyaWRXcmFwRWxlbWVudCA9IGV2ZW50R3JpZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBva2Vtb24tZ3JpZC13cmFwJyk7XHJcbiAgLy8gZm9yIChjb25zdCBldmVudCBvZiBldmVudFJlY3R1aXQpIHtcclxuICAvLyAgIGNvbnN0IHBva2Vtb25JZCA9IGV2ZW50LmlkO1xyXG4gIC8vICAgY29uc3QgaW5kZXhJZCA9IHBva2Vtb25JZFRvSW5kZXgocG9rZW1vbklkKTtcclxuICAvLyAgIGNvbnN0IHBva2Vtb25HcmlkSHRtbCA9IGBcclxuICAvLyAgICAgICA8ZGl2IGNsYXNzPVwicG9rZW1vbi1ncmlkIHBvc2l0aW9uLXJlbGF0aXZlXCIgZGF0YS1pZD1cIiR7cG9rZW1vbklkfVwiXHJcbiAgLy8gICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke2dldFBva2Vtb25TcHJpdGVVcmwoaW5kZXhJZCl9KVwiPlxyXG4gIC8vICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICBgO1xyXG4gIC8vICAgY29uc3QgcG9rZW1vbkdyaWQgPSBwYXJzZUhUTUwocG9rZW1vbkdyaWRIdG1sKTtcclxuICAvLyAgIHBva2Vtb25HcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIC8vICAgICAvLyBcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUJcdTMwRkNcdTMwNkVcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNcdTMwOTJcdTMwQzhcdTMwQjBcdTMwRUJcclxuICAvLyAgICAgY29uc3QgY2hlY2tlckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcG9rZW1vbi1saXN0IC5wb2tlbW9uLWdyaWRbZGF0YS1pZD1cIiR7cG9rZW1vbklkfVwiXWApO1xyXG4gIC8vICAgICBpZiAoY2hlY2tlckdyaWQpIHtcclxuICAvLyAgICAgICB0b2dnbGVQb2tlbW9uQ2hlY2tlZChjaGVja2VyR3JpZCk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0pO1xyXG4gIC8vICAgZXZlbnRQb2tlbW9uR3JpZFdyYXBFbGVtZW50LmFwcGVuZENoaWxkKHBva2Vtb25HcmlkKTtcclxuICAvLyB9XHJcbiAgLy8gcmVjcnVpdER1bmdlb25XcmFwLmFwcGVuZENoaWxkKGV2ZW50R3JpZEVsZW1lbnQpO1xyXG59XHJcblxyXG4vKipcclxuICogXHU1MkU3XHU4QTk4XHU2NUI5XHU2Q0Q1XHUzMEJGXHUzMEQ2XHUzMDZFXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHU3MkI2XHU2Q0MxXHUzMDkyXHU1NDBDXHU2NzFGXHJcbiAqL1xyXG5mdW5jdGlvbiBzeW5jUmVjcnVpdERldGFpbChwb2tlbW9uSWQsIGlzQ2hlY2tlZCkge1xyXG4gIGNvbnN0IHJlY3J1aXRHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3JlY3J1aXQtZHVuZ2VvbiAucmVjcnVpdC1wb2tlbW9uLWdyaWRbZGF0YS1pZD1cIiR7cG9rZW1vbklkfVwiXWApO1xyXG4gIGlmIChyZWNydWl0R3JpZCkge1xyXG4gICAgaWYgKGlzQ2hlY2tlZCkge1xyXG4gICAgICByZWNydWl0R3JpZC5jbGFzc0xpc3QuYWRkKCdoaWRpbmcnKTtcclxuICAgICAgcmVjcnVpdEdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAnYW5pbWF0aW9uZW5kJyxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICByZWNydWl0R3JpZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgcmVjcnVpdEdyaWQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkaW5nJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IG9uY2U6IHRydWUgfSxcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlY3J1aXRHcmlkLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgcmVjcnVpdEdyaWQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkaW5nJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHUzMEMwXHUzMEYzXHUzMEI4XHUzMEU3XHUzMEYzXHUzMEJGXHUzMEQ2XHUzMDZFXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHU3MkI2XHU2Q0MxXHUzMDkyXHU1NDBDXHU2NzFGXHJcbiAqL1xyXG5mdW5jdGlvbiBzeW5jRHVuZ2VvbkRldGFpbChwb2tlbW9uSWQsIGlzQ2hlY2tlZCkge1xyXG4gIGNvbnN0IGR1bmdlb25HcmlkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCNyZWNydWl0LWR1bmdlb24gLnBva2Vtb24tZ3JpZFtkYXRhLWlkPVwiJHtwb2tlbW9uSWR9XCJdYCk7XHJcbiAgZHVuZ2VvbkdyaWRzLmZvckVhY2goKGdyaWQpID0+IHtcclxuICAgIGlmIChpc0NoZWNrZWQpIHtcclxuICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBQlx1MzBGQyAtPiBcdTMwQzBcdTMwRjNcdTMwQjhcdTMwRTdcdTMwRjMgXHUzMDc4XHU1NDBDXHU2NzFGXHJcbiAqL1xyXG5mdW5jdGlvbiBzeW5jRHVuZ2VvbldpdGhDaGVja2VyKCkge1xyXG4gIGNvbnN0IGR1bmdlb25HcmlkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNyZWNydWl0LWR1bmdlb24gLnBva2Vtb24tZ3JpZCcpO1xyXG4gIGR1bmdlb25Hcmlkcy5mb3JFYWNoKChncmlkKSA9PiB7XHJcbiAgICBjb25zdCBwb2tlbW9uSWQgPSBncmlkLmRhdGFzZXQuaWQ7XHJcbiAgICBjb25zdCBjaGVja2VyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwb2tlbW9uLWxpc3QgLnBva2Vtb24tZ3JpZFtkYXRhLWlkPVwiJHtwb2tlbW9uSWR9XCJdYCk7XHJcblxyXG4gICAgaWYgKGNoZWNrZXJHcmlkICYmIGNoZWNrZXJHcmlkLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tlZCcpKSB7XHJcbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdThBNzJcdTVGNTNcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNcdTMwNkVcdTkwMzJcdTUzMTZcdTYwQzVcdTU4MzFcdTMwOTJcdTMwQzZcdTMwQURcdTMwQjlcdTMwQzhcdTMwNjdcdTUzRDZcdTVGOTdcclxuICogQHBhcmFtIHsqfSBpZCBcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNJRFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0RXZvbFRleHREYXRhKGlkKSB7XHJcbiAgY29uc3QgcG9rZW1vbiA9IFBva2Vtb25EYXRhW2lkXTtcclxuICBjb25zdCBwcmV2RXZvbCA9IFBva2Vtb25EYXRhW3BhcnNlSW50KHBva2Vtb24uUHJlRXZvSW5kZXgpXTtcclxuICBjb25zdCBldm9sTWV0aG9kID0gcGFyc2VJbnQocG9rZW1vbi5Fdm9NZXRob2QpO1xyXG4gIGNvbnN0IGV2b2xQYXJhbSA9IFtwYXJzZUludChwb2tlbW9uLkV2b1BhcmFtMSksIHBhcnNlSW50KHBva2Vtb24uRXZvUGFyYW0yKV07XHJcblxyXG4gIGxldCB0ZXh0ID0gJyc7XHJcbiAgaWYgKHByZXZFdm9sLklkID4gMCkge1xyXG4gICAgY29uc3QgcHJldkV2b2xOYW1lID0gcHJldkV2b2wuTmFtZTtcclxuICAgIGxldCBldm9sU3RyID0gJyc7XHJcbiAgICBzd2l0Y2ggKGV2b2xNZXRob2QpIHtcclxuICAgICAgY2FzZSAwOiAvLyBcdTMwQ0NcdTMwQjFcdTMwQ0JcdTMwRjNcdTc1MjhcclxuICAgICAgICBldm9sU3RyID0gYFx1OTAzMlx1NTMxNlx1MzA2N1x1ODFFQVx1NTJENVx1NzY4NFx1MzA2Qlx1NTJBMFx1NTE2NWA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMTogLy8gXHUzMEVDXHUzMEQ5XHUzMEVCXHJcbiAgICAgICAgZXZvbFN0ciA9IGBMdiR7ZXZvbFBhcmFtWzBdfWA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMjogLy8gXHUzMDRCXHUzMDU3XHUzMDUzXHUzMDU1XHJcbiAgICAgICAgZXZvbFN0ciA9IGBcdTMwNEJcdTMwNTdcdTMwNTNcdTMwNTVcdTI2MDUke2dldElRU3RhckNvdW50KGV2b2xQYXJhbVswXSkudG9GaXhlZCgxKX0oJHtldm9sUGFyYW1bMF19KVx1NEVFNVx1NEUwQWA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMzogLy8gXHU5MDUzXHU1MTc3XHJcbiAgICAgICAgY29uc3QgaXRlbVN0ciA9IEl0ZW1EYXRhW2V2b2xQYXJhbVswXV0uTmFtZTtcclxuICAgICAgICBldm9sU3RyID0gYCR7aXRlbVN0cn1gO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDQ6IC8vIFx1MzBCRlx1MzBERVx1MzBGM1x1MzBCRlx1NzUyOFxyXG4gICAgICAgIGNvbnN0IHRhcmdldFN0ciA9IFBva2Vtb25EYXRhW2V2b2xQYXJhbVswXV0uTmFtZTtcclxuICAgICAgICBldm9sU3RyID0gYCR7dGFyZ2V0U3RyfVx1MzA0Q1x1NEVGMlx1OTU5M1x1MzA2Qlx1MzA0NFx1MzA4QmA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNTogLy8gXHUzMDY0XHUzMDQ2XHUzMDU3XHUzMDkzXHUzMEIxXHUzMEZDXHUzMEQ2XHUzMEVCXHJcbiAgICAgICAgZXZvbFN0ciA9IGBcdTMwNjRcdTMwNDZcdTMwNTdcdTMwOTNcdTMwQjFcdTMwRkNcdTMwRDZcdTMwRUJgO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFx1N0IyQ1x1NEU4Q1x1Njc2MVx1NEVGNlxyXG4gICAgaWYgKGV2b2xNZXRob2QgPj0gMCAmJiBldm9sTWV0aG9kIDw9IDMgJiYgZXZvbFBhcmFtWzFdID4gMCkge1xyXG4gICAgICBldm9sU3RyICs9IGAgKyAke2V2b2x2ZTJTdHJpbmdbZXZvbFBhcmFtWzFdXX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHRleHQgPSBgJHtwcmV2RXZvbE5hbWV9ICgke2V2b2xTdHJ9KWA7XHJcbiAgICAvL2NvbnNvbGUubG9nKGAke3Bva2Vtb24uTmFtZX06ICR7dGV4dH1gLCBldm9sTWV0aG9kLCBldm9sUGFyYW0pO1xyXG4gIH1cclxuICByZXR1cm4gdGV4dDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1MzA2RVx1MzBCOVx1MzBEN1x1MzBFOVx1MzBBNFx1MzBDOFx1NzUzQlx1NTBDRlVSTFx1MzA5Mlx1NTNENlx1NUY5NyAoYnkgUG9rZUFQSSlcclxuICogQHBhcmFtIHsqfSBpbmRleElkXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRQb2tlbW9uU3ByaXRlVXJsKGluZGV4SWQpIHtcclxuICBjb25zdCBpbWFnZVBva2Vtb25EYXRhID0gY2hlY2tQb2tlbW9uRGF0YVtpbmRleElkXTtcclxuICBjb25zdCBpbWFnZVVybCA9IGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vdmVyc2lvbnMvZ2VuZXJhdGlvbi12aWkvaWNvbnMvJHtpbWFnZVBva2Vtb25EYXRhLmJhc2VJZH0ke2ltYWdlUG9rZW1vbkRhdGEuaW1hZ2VTdWZmaXh9LnBuZ2A7XHJcbiAgcmV0dXJuIGltYWdlVXJsO1xyXG59XHJcblxyXG4vKipcclxuICogSlNPTlx1MzBDN1x1MzBGQ1x1MzBCRlx1MzA5Mlx1NTNENlx1NUY5N1xyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hKc29uRGF0YSgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Bva2Vtb25EYXRhLCBpdGVtRGF0YSwgZHVuZ2VvbkRhdGEsIGZsb29yRGF0YSwgbWFwcGFTRGF0YV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGdldEpzb25EYXRhKCdwb2tlbW9uJyksXHJcbiAgICAgIGdldEpzb25EYXRhKCdpdGVtJyksXHJcbiAgICAgIGdldEpzb25EYXRhKCdkdW5nZW9uJyksXHJcbiAgICAgIGdldEpzb25EYXRhKCdmbG9vcicpLFxyXG4gICAgICBnZXRKc29uRGF0YSgnbWFwcGFfcycpLFxyXG4gICAgXSk7XHJcbiAgICB3aW5kb3cuUG9rZW1vbkRhdGEgPSBwb2tlbW9uRGF0YTtcclxuICAgIHdpbmRvdy5JdGVtRGF0YSA9IGl0ZW1EYXRhO1xyXG4gICAgd2luZG93LkR1bmdlb25EYXRhID0gZHVuZ2VvbkRhdGE7XHJcbiAgICB3aW5kb3cuRmxvb3JEYXRhID0gZmxvb3JEYXRhO1xyXG4gICAgd2luZG93Lk1hcHBhU0RhdGEgPSBtYXBwYVNEYXRhO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5sb2FkUG9rZW1vbigpO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiOztBQUdBLE1BQU0saUJBQWlCO0FBQUEsSUFDckIsU0FBUztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsU0FBUztBQUFBLElBQ1QsU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsUUFBUTtBQUFBLEVBQ1Y7QUFPQSxpQkFBc0IsWUFBWSxLQUFLO0FBQ3JDLFFBQUk7QUFDRixhQUFPLE1BQU0sTUFBTSxlQUFlLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDO0FBQUEsSUFDbEUsU0FBUyxHQUFHO0FBQ1YsY0FBUSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZDLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjs7O0FDOUJPLE1BQU0scUJBQXFCO0FBQUEsSUFDaEM7QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFDaEg7QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFDaEg7QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFDaEg7QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFDaEg7QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFDaEg7QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFDaEg7QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLEVBQ3JDO0FBRU8sTUFBTSxtQkFBbUI7QUFBQSxJQUM5QjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGOzs7QUNoQkEsTUFBSTtBQUdKLE1BQU0sbUJBQW1CO0FBQUEsSUFDdkI7QUFBQTtBQUFBLElBQ0E7QUFBQTtBQUFBLElBQ0E7QUFBQTtBQUFBLElBQ0E7QUFBQTtBQUFBLElBQ0E7QUFBQTtBQUFBLElBQ0E7QUFBQTtBQUFBLElBQ0E7QUFBQTtBQUFBLElBQ0E7QUFBQTtBQUFBLElBQ0E7QUFBQTtBQUFBLEVBQ0Y7QUFHQSxNQUFNLGdCQUFnQjtBQUFBLElBQ3BCO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUdBLE1BQU0sZUFBZTtBQUFBLElBQ25CO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFB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
