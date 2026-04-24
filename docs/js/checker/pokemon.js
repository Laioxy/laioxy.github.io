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
    iqskill: "/data/iqskill.min.json",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibnMtaHVnby1pbXA6RjpcXEdpdFxcbGFpb3h5LmdpdGh1Yi5pb1xcYXNzZXRzXFxqc1xcanNvbl9zY3JpcHQuanMiLCAibnMtaHVnby1pbXA6RjpcXEdpdFxcbGFpb3h5LmdpdGh1Yi5pb1xcYXNzZXRzXFxqc1xccGFyYW0uanMiLCAiPHN0ZGluPiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXHJcbiAqIGdldEpzb25EYXRhXHUzMDZFXHU1RjE1XHU2NTcwXHUzMDZCXHU1MTY1XHUzMDhDXHUzMDhCXHUzMEFEXHUzMEZDXHU1NDBEXHUzMDY4SlNPTlx1MzBENVx1MzBBMVx1MzBBNFx1MzBFQlx1MzA2RVx1MzBEMVx1MzBCOVxyXG4gKi9cclxuY29uc3QganNvblBhdGhzQXJyYXkgPSB7XHJcbiAgcG9rZW1vbjogJy9kYXRhL3Bva2Vtb24ubWluLmpzb24nLFxyXG4gIGl0ZW06ICcvZGF0YS9pdGVtLm1pbi5qc29uJyxcclxuICBtb3ZlOiAnL2RhdGEvbW92ZS5taW4uanNvbicsXHJcbiAgZHVuZ2VvbjogJy9kYXRhL2R1bmdlb24ubWluLmpzb24nLFxyXG4gIGZsb29yOiAnL2RhdGEvZmxvb3IubWluLmpzb24nLFxyXG4gIG1hcHBhX3M6ICcvZGF0YS9tYXBwYV9zLm1pbi5qc29uJyxcclxuICBtYXBwYV90OiAnL2RhdGEvbWFwcGFfdC5taW4uanNvbicsXHJcbiAgbWFwcGFfeTogJy9kYXRhL21hcHBhX3kubWluLmpzb24nLFxyXG4gIGZpeGVkOiAnL2RhdGEvZml4ZWQubWluLmpzb24nLFxyXG4gIG1lc3NhZ2U6ICcvZGF0YS9tZXNzYWdlLm1pbi5qc29uJyxcclxuICB0eXBlOiAnL2RhdGEvdHlwZS5taW4uanNvbicsXHJcbiAgaXFncm91cDogJy9kYXRhL2lxZ3JvdXAubWluLmpzb24nLFxyXG4gIGlxc2tpbGw6ICcvZGF0YS9pcXNraWxsLm1pbi5qc29uJyxcclxuICByZXNjdWU6ICcvZGF0YS9yZXNjdWUubWluLmpzb24nLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEpTT05cdTMwOTJcdTUzRDZcdTVGOTdcclxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBcdTMwQURcdTMwRkMgKHBva2Vtb24sIGl0ZW0sIGR1bmdlb24sIGZsb29yLCBmaXhlZCwgbWVzc2FnZSlcclxuICogQHJldHVybnMgSlNPTlx1MzBDN1x1MzBGQ1x1MzBCRlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEpzb25EYXRhKGtleSkge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goanNvblBhdGhzQXJyYXlba2V5XSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdnZXRKc29uRGF0YSBGYWlsZWQ6ICcsIGUpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiIsICIvKiogXHU2NzA5XHU1MkI5XHUzMDZBXHUzMEMwXHUzMEYzXHUzMEI4XHUzMEU3XHUzMEYzSURcdTY3MDBcdTU5MjdcdTUwMjQgKi9cclxuZXhwb3J0IGNvbnN0IFZBTElEX01BWF9EVU5HRU9OX0lEID0gMHhiZjtcclxuXHJcbi8qKiBcdTMwQUJcdTMwRDVcdTMwQTdcdTUyRTdcdThBOThcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjMgKi9cclxuZXhwb3J0IGNvbnN0IENBRkVfUkVDUlVJVF9UQUJMRSA9IFtcclxuICAweDAwYSwgMHgwMGQsIDB4MDFiLCAweDAyOSwgMHgwMmIsIDB4MDJlLCAweDAzNiwgMHgwM2MsIDB4MDQyLCAweDA0OCwgMHgwNGEsIDB4MDUxLCAweDA1MywgMHgwNTQsIDB4MDU2LCAweDA1OCwgMHgwNWEsXHJcbiAgMHgwNWMsIDB4MDVmLCAweDA2MCwgMHgwNjIsIDB4MDY4LCAweDA2ZCwgMHgwNmYsIDB4MDcyLCAweDA3OCwgMHgwN2YsIDB4MDgwLCAweDA4NCwgMHgwODksIDB4MDhhLCAweDA4YywgMHgwOGUsIDB4MDkzLFxyXG4gIDB4MGEzLCAweDBhNywgMHgwYWMsIDB4MGIxLCAweDBiMywgMHgwYmIsIDB4MGMxLCAweDBjMiwgMHgwYzgsIDB4MGU2LCAweDBlNywgMHgwZTksIDB4MGVjLCAweDBmMCwgMHgwZjUsIDB4MGY3LCAweDBmOSxcclxuICAweDBmZSwgMHgwZmYsIDB4MTAyLCAweDEwNSwgMHgxMDYsIDB4MTBhLCAweDEwYiwgMHgxMTEsIDB4MTIzLCAweDEyYSwgMHgxMzIsIDB4MTM0LCAweDEzNywgMHgxMzksIDB4MTNlLCAweDE0YiwgMHgxNGMsXHJcbiAgMHgxNTEsIDB4MTUzLCAweDE1NCwgMHgxNTUsIDB4MTU2LCAweDE1ZSwgMHgxNjQsIDB4MTY3LCAweDE2YywgMHgxNmQsIDB4MTZlLCAweDE2ZiwgMHgxNzMsIDB4MTc1LCAweDE3NywgMHgxODUsIDB4MTg3LFxyXG4gIDB4MThiLCAweDE5MywgMHgxOTYsIDB4MWFmLCAweDFiNCwgMHgxYjksIDB4MWJiLCAweDFiZCwgMHgxYmYsIDB4MWM2LCAweDFjOCwgMHgxY2IsIDB4MWNlLCAweDFjZiwgMHgxZDMsIDB4MWQ1LCAweDFkOSxcclxuICAweDFkYiwgMHgxZGUsIDB4MWUwLCAweDFlYiwgMHgxZWQsIDB4MWYxLFxyXG5dO1xyXG4vKiogXHUzMEI3XHUzMENBXHUzMEVBXHUzMEFBXHU2NTg3XHU1QjU3XHU1MjE3ICovXHJcbmV4cG9ydCBjb25zdCBTQ0VOQVJJT19TVFJJTkdTID0gW1xyXG4gICctJyxcclxuICAnQ2hhcHRlci01XHU0RUU1XHU5NjREJyxcclxuICAnQ2hhcHRlci0xMFx1NEVFNVx1OTY0RCcsXHJcbiAgJ0NoYXB0ZXItMTFcdTRFRTVcdTk2NEQnLFxyXG4gICdDaGFwdGVyLTE5XHU0RUU1XHU5NjREJyxcclxuICAnXHUzMEE4XHUzMEYzXHUzMEM3XHUzMEEzXHUzMEYzXHUzMEIwXHU1RjhDJyxcclxuICAnXHUzMEFFXHUzMEVCXHUzMEM5XHU1MzUyXHU2OTZEXHU1RjhDJyxcclxuICAnXHUzMDQ2XHUzMDdGXHUzMDZFXHUzMEVBXHUzMEJFXHUzMEZDXHUzMEM4XHU4OUUzXHU3OTgxXHU1RjhDJyxcclxuXTtcclxuLyoqIFx1NTkyOVx1NTAxOVx1NjU4N1x1NUI1N1x1NTIxNyAqL1xyXG5leHBvcnQgY29uc3QgV0VBVEhFUl9TVFJJTkdTID0gWydcdTMwNkZcdTMwOEMnLCAnXHUzMDcyXHUzMDU2XHUzMDU3XHUzMDRDXHUzMDY0XHUzMDg4XHUzMDQ0JywgJ1x1MzA1OVx1MzA2QVx1MzA0Mlx1MzA4OVx1MzA1NycsICdcdTMwNEZcdTMwODJcdTMwOEEnLCAnXHUzMDQyXHUzMDgxJywgJ1x1MzA0Mlx1MzA4OVx1MzA4QycsICdcdTMwNERcdTMwOEEnLCAnXHUzMDg2XHUzMDREJ107XHJcbiIsICJpbXBvcnQgeyBnZXRKc29uRGF0YSB9IGZyb20gJy4vLi4vanNvbl9zY3JpcHQnO1xyXG5pbXBvcnQgKiBhcyBwYXJhbXMgZnJvbSAnLi8uLi9wYXJhbSc7XHJcblxyXG4vLyBcdTMwQjlcdTMwRERcdTMwRkNcdTMwRjNcdTMwQzdcdTMwRkNcdTMwQkYgKFx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1MzBGQlx1MzBDMFx1MzBGM1x1MzBCOFx1MzBFN1x1MzBGM1x1MzBCRlx1MzBENlx1NzUyOClcclxubGV0IHNwYXduRGF0YTtcclxuXHJcbi8qKiBcdTk2NjRcdTU5MTZcdTMwNTlcdTMwOEJcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNcdTMwNkVJRCAqL1xyXG5jb25zdCBiYW5uZWRQb2tlbW9uSWRzID0gW1xyXG4gIDB4MTE3LCAvLyBcdTY4NDNcdTMwQkJcdTMwRUNcdTMwRDNcdTMwQTNcclxuICAweDE3YywgLy8gXHU5NkVBXHUzMEREXHUzMEVGXHUzMEVCXHUzMEYzXHJcbiAgMHgxN2QsIC8vIFx1NjY3NFx1MzBERFx1MzBFRlx1MzBFQlx1MzBGM1xyXG4gIDB4MTdlLCAvLyBcdTk2RThcdTMwRERcdTMwRUZcdTMwRUJcdTMwRjNcclxuICAweDE4MCwgLy8gXHU3RDJCXHUzMEFCXHUzMEFGXHUzMEVDXHUzMEFBXHUzMEYzXHJcbiAgMHgxYTMsIC8vIEFGXHUzMEM3XHUzMEFBXHUzMEFEXHUzMEI3XHUzMEI5XHJcbiAgMHgxYTQsIC8vIERGXHUzMEM3XHUzMEFBXHUzMEFEXHUzMEI3XHUzMEI5XHJcbiAgMHgxYTUsIC8vIFNQXHUzMEM3XHUzMEFBXHUzMEFEXHUzMEI3XHUzMEI5XHJcbiAgMHgxY2QsIC8vIFx1MzBERFx1MzBCOFx1MzBDMVx1MzBBN1x1MzBFQVx1MzBFMFxyXG5dO1xyXG5cclxuLyoqIFx1OTAzMlx1NTMxNlx1Njc2MVx1NEVGNjIgKi9cclxuY29uc3QgZXZvbHZlMlN0cmluZyA9IFtcclxuICAnLScsXHJcbiAgJ1x1MzA2NFx1MzA0Nlx1MzA1N1x1MzA5M1x1MzBCMVx1MzBGQ1x1MzBENlx1MzBFQicsXHJcbiAgJ1x1NjUzQlx1NjQ4M1x1RkYxRVx1OTYzMlx1NUZBMScsXHJcbiAgJ1x1OTYzMlx1NUZBMVx1RkYxRVx1NjUzQlx1NjQ4MycsXHJcbiAgJ1x1NjUzQlx1NjQ4M1x1RkYxRFx1OTYzMlx1NUZBMScsXHJcbiAgJ1x1MzA1Rlx1MzA0NFx1MzA4OFx1MzA0Nlx1MzA2RVx1MzBFQVx1MzBEQ1x1MzBGMycsXHJcbiAgJ1x1MzA1Mlx1MzA2M1x1MzA1M1x1MzA0Nlx1MzA2RVx1MzBFQVx1MzBEQ1x1MzBGMycsXHJcbiAgJ1x1MzA0Nlx1MzA2NFx1MzA0Rlx1MzA1N1x1MzBCOVx1MzBBQlx1MzBGQ1x1MzBENScsXHJcbiAgJ1x1MzBFOVx1MzBGM1x1MzBDMFx1MzBFMCcsXHJcbiAgJ1x1MzBFOVx1MzBGM1x1MzBDMFx1MzBFMCcsXHJcbiAgJ1x1MzBBQVx1MzBCOScsXHJcbiAgJ1x1MzBFMVx1MzBCOScsXHJcbiAgJ1x1MzA1Mlx1MzA5M1x1MzA1N1x1MzA2RVx1MzA2MVx1MzA0Qlx1MzA4OVx1N0ZEMlx1NUY5NycsXHJcbiAgJ1x1MzA1M1x1MzA4RFx1MzA0Q1x1MzA4Qlx1N0ZEMlx1NUY5NycsXHJcbiAgJ1x1MzBDMFx1MzBENlx1MzBFQlx1MzBBMlx1MzBCRlx1MzBDM1x1MzBBRlx1N0ZEMlx1NUY5NycsXHJcbiAgJ1x1MzA4Mlx1MzA2RVx1MzA3RVx1MzA2RFx1N0ZEMlx1NUY5NycsXHJcbl07XHJcblxyXG4vKiogXHUzMEE0XHUzMEQ5XHUzMEYzXHUzMEM4XHU1MkU3XHU4QTk4XHUzMEVBXHUzMEI5XHUzMEM4ICovXHJcbmNvbnN0IGV2ZW50UmVjdHVpdCA9IFtcclxuICB7XHJcbiAgICBpZDogMHg5MCxcclxuICAgIGNvbnRleHQ6ICdcdTMwMENcdTMwNkFcdTMwNjBcdTMwOENcdTMwODRcdTMwN0UgXHUzMDYxXHUzMDg3XHUzMDQ2XHUzMDU4XHUzMDg3XHUzMDQ2XHUzMDBEXHUzMDY3XHUzMEQ1XHUzMEVBXHUzMEZDXHUzMEI2XHUzMEZDXHUzMDkyXHU1MDEyXHUzMDU5ICg1MCUpJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDk2LFxyXG4gICAgY29udGV4dDogJ1x1MzBERlx1MzBFNVx1MzBBNlx1MzBDNFx1MzBGQ1x1MzA0Qlx1MzA4OVx1MzA2RVx1NjMxMVx1NjIyNlx1NzJCNlx1MzA5Mlx1NTNEN1x1MzA1MVx1MzA4QiBcdTIwM0JcdTMwNjZcdTMwOTNcdTMwNEZcdTMwNDZcdTMwNkVcdTMwNEJcdTMwNDRcdTMwNjBcdTMwOTNcdTg5ODFcdTg5RTNcdTc5ODEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDB4OTcsXHJcbiAgICBjb250ZXh0OiAnXHUzMDBDXHUzMERGXHUzMEI5XHUzMEM2XHUzMEVBXHUzMEZDXHUzMEI4XHUzMEUzXHUzMEYzXHUzMEIwXHUzMEVCIFx1MzA0QVx1MzA0Rlx1MzA2MVx1MzAwRFx1MzA2N1x1MzBERlx1MzBFNVx1MzBBNlx1MzA5Mlx1NTAxMlx1MzA1OSAoNTAlKScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgxMGUsXHJcbiAgICBjb250ZXh0OiAnXHUzMEU5XHUzMEE0XHUzMEIzXHUzMEE2XHUzMDRCXHUzMDg5XHUzMDZFXHU2MzExXHU2MjI2XHU3MkI2XHUzMDkyXHU1M0Q3XHUzMDUxXHUzMDhCIFx1MjAzQlx1MzA2QVx1MzA5M1x1MzA2OFx1MzA0Nlx1MzA1N1x1MzA4N1x1MzA2OFx1MzA0Nlx1ODk4MVx1ODlFM1x1Nzk4MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgxMGYsXHJcbiAgICBjb250ZXh0OiAnXHUzMEE4XHUzMEYzXHUzMEM2XHUzMEE0XHUzMDRCXHUzMDg5XHUzMDZFXHU2MzExXHU2MjI2XHU3MkI2XHUzMDkyXHU1M0Q3XHUzMDUxXHUzMDhCIFx1MjAzQlx1MzA4Q1x1MzA2M1x1MzA0Qlx1MzA2RVx1MzA2OVx1MzA0Nlx1MzA0Rlx1MzA2NFx1ODk4MVx1ODlFM1x1Nzk4MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgxMTAsXHJcbiAgICBjb250ZXh0OiAnXHUzMEI5XHUzMEE0XHUzMEFGXHUzMEYzXHUzMDRCXHUzMDg5XHUzMDZFXHU2MzExXHU2MjI2XHU3MkI2XHUzMDkyXHU1M0Q3XHUzMDUxXHUzMDhCIFx1MjAzQlx1MzA3RVx1MzA2RVx1MzA0Qlx1MzA0NFx1MzA0NFx1MzA0RFx1ODk4MVx1ODlFM1x1Nzk4MScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgxOTksXHJcbiAgICBjb250ZXh0OiAnMlx1NTQ2OFx1NzZFRVx1NEVFNVx1OTY0RFx1MzAwQ1x1MzA3MFx1MzA5M1x1MzA2Qlx1MzA5M1x1MzA2RVx1MzA2OVx1MzA0Nlx1MzA0Rlx1MzA2NCBcdTMwRUNcdTMwQjhcdTMwRURcdTMwQzNcdTMwQUZcdTMwNkVcdTMwN0VcdTMwMERcdTMwNjdcdTMwRUNcdTMwQjhcdTMwRURcdTMwQzNcdTMwQUZcdTMwOTJcdTUwMTJcdTMwNTkgKDUwJSknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDB4MTlhLFxyXG4gICAgY29udGV4dDogJzJcdTU0NjhcdTc2RUVcdTRFRTVcdTk2NERcdTMwMENcdTMwNzBcdTMwOTNcdTMwNkJcdTMwOTNcdTMwNkVcdTMwNjlcdTMwNDZcdTMwNEZcdTMwNjQgXHUzMEVDXHUzMEI4XHUzMEEyXHUzMEE0XHUzMEI5XHUzMDZFXHUzMDdFXHUzMDBEXHUzMDY3XHUzMEVDXHUzMEI4XHUzMEEyXHUzMEE0XHUzMEI5XHUzMDkyXHU1MDEyXHUzMDU5ICg1MCUpJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDE5YixcclxuICAgIGNvbnRleHQ6ICcyXHU1NDY4XHU3NkVFXHU0RUU1XHU5NjREXHUzMDBDXHUzMDcwXHUzMDkzXHUzMDZCXHUzMDkzXHUzMDZFXHUzMDY5XHUzMDQ2XHUzMDRGXHUzMDY0IFx1MzBFQ1x1MzBCOFx1MzBCOVx1MzBDMVx1MzBFQlx1MzA2RVx1MzA3RVx1MzAwRFx1MzA2N1x1MzBFQ1x1MzBCOFx1MzBCOVx1MzBDMVx1MzBFQlx1MzA5Mlx1NTAxMlx1MzA1OSAoNTAlKScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgxOWUsXHJcbiAgICBjb250ZXh0OiAnXHUzMDBDXHUzMDVEXHUzMDUzXHUzMDZBXHUzMDU3XHUzMDQ2XHUzMDdGIFx1MzA0QVx1MzA0Rlx1MzA1RFx1MzA1M1x1MzAwRFx1MzA2N1x1MzBBQlx1MzBBNFx1MzBBQVx1MzBGQ1x1MzBBQ1x1MzA5Mlx1NTAxMlx1MzA1OSAoNTAlKScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgxOWYsXHJcbiAgICBjb250ZXh0OiAnXHUzMDBDXHUzMDRCXHUzMDUyXHUzMDhEXHUzMDQ2XHUzMDZFXHUzMDU1XHUzMDcwXHUzMDRGIFx1MzA0QVx1MzA0Rlx1MzA2MVx1MzAwRFx1MzA2N1x1MzBCMFx1MzBFOVx1MzBGQ1x1MzBDOVx1MzBGM1x1MzA5Mlx1NTAxMlx1MzA1OSAoNTAlKScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgxYTAsXHJcbiAgICBjb250ZXh0OiAnXHUzMDBDXHUzMDY2XHUzMDkzXHUzMDRGXHUzMDQ2XHUzMDZFXHUzMDRCXHUzMDQ0XHUzMDYwXHUzMDkzIFx1MzA2MVx1MzA4N1x1MzA0Nlx1MzA1OFx1MzA4N1x1MzA0Nlx1MzAwRFx1MzA2N1x1MzBFQ1x1MzBDM1x1MzBBRlx1MzBBNlx1MzBCNlx1MzA5Mlx1NTAxMlx1MzA1OSAoNTAlKScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgxYTEsXHJcbiAgICBjb250ZXh0OiAnXHUzMEI4XHUzMEU5XHUzMEZDXHUzMEMxXHUzMDRCXHUzMDg5XHUzMDZFXHU2MzExXHU2MjI2XHU3MkI2XHUzMDkyXHU1M0Q3XHUzMDUxXHUzMDhCIFx1MjAzQlNFMVx1MzAwQ1x1MzBEM1x1MzBDM1x1MzBEMVx1MzA2RVx1MzA2RFx1MzA0Q1x1MzA0NFx1MzA1NFx1MzA2OFx1MzAwRFx1ODk4MVx1MzBBRlx1MzBFQVx1MzBBMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgyMGEsXHJcbiAgICBjb250ZXh0OiAnXHU2NzJDXHU3REU4XHUzMEFGXHUzMEVBXHUzMEEyXHU1RjhDXHUzMDBDXHUzMDZEXHUzMDYzXHUzMDU5XHUzMDQ0XHUzMDZFXHUzMDY5XHUzMDQ2XHUzMDRGXHUzMDY0IFx1MzA2MVx1MzA4N1x1MzA0Nlx1MzA1OFx1MzA4N1x1MzA0Nlx1MzAwRFx1MzA2N1x1MzBFNlx1MzBBRlx1MzBCN1x1MzBGQ1x1MzA5Mlx1NTAxMlx1MzA1OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgyMGIsXHJcbiAgICBjb250ZXh0OiAnXHU2NzJDXHU3REU4XHUzMEFGXHUzMEVBXHUzMEEyXHU1RjhDXHUzMDBDXHUzMDYxXHUzMDY2XHUzMDQ0XHUzMDZFXHUzMDdGXHUzMDVBXHUzMDQ2XHUzMDdGIChcdTMwOEFcdTMwODVcdTMwNDZcdTMwNTVcdTMwNkVcdTMwNjlcdTMwNDZcdTMwNEZcdTMwNjQpXHUzMDBEXHUzMDY3XHUzMEE4XHUzMEUwXHUzMEVBXHUzMEMzXHUzMEM4XHUzMDkyXHU1MDEyXHUzMDU5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAweDIwYyxcclxuICAgIGNvbnRleHQ6ICdcdTY3MkNcdTdERThcdTMwQUZcdTMwRUFcdTMwQTJcdTVGOENcdTMwMENcdTMwNTlcdTMwNDRcdTMwNTdcdTMwODdcdTMwNDZcdTMwNkVcdTMwN0ZcdTMwNUFcdTMwNDZcdTMwN0YgKFx1MzA2MFx1MzA0NFx1MzA1OVx1MzA0NFx1MzA1N1x1MzA4N1x1MzA0Nlx1MzA2RVx1MzA3Rlx1MzA2MSlcdTMwMERcdTMwNjdcdTMwQTJcdTMwQjBcdTMwQ0VcdTMwRTBcdTMwOTJcdTUwMTJcdTMwNTknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDB4MjBkLFxyXG4gICAgY29udGV4dDogJ1x1NjcyQ1x1N0RFOFx1MzBBRlx1MzBFQVx1MzBBMlx1NUY4Q1x1MzAwQ1x1MzA1OFx1MzA1Mlx1MzA5M1x1MzA2RVx1MzA2OFx1MzA0NiBcdTMwNjFcdTMwODdcdTMwNDZcdTMwNThcdTMwODdcdTMwNDZcdTMwMERcdTMwNjdcdTMwQzdcdTMwQTNcdTMwQTJcdTMwRUJcdTMwQUNcdTMwOTJcdTUwMTJcdTMwNTknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDB4MjBlLFxyXG4gICAgY29udGV4dDogJ1x1MzBDMFx1MzBGQ1x1MzBBRlx1MzBFOVx1MzBBNFx1NjQ4M1x1NzgzNFx1NUY4Q1x1MzAwQ1x1MzA1RFx1MzA4OVx1MzA2RVx1MzA1NVx1MzA1MVx1MzA4MSBcdTMwNEFcdTMwNEZcdTMwNURcdTMwNTNcdTMwMERcdTMwNjdcdTMwRDFcdTMwRUJcdTMwQURcdTMwQTJcdTMwOTJcdTUwMTJcdTMwNTknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDB4MjBmLFxyXG4gICAgY29udGV4dDogJ1x1MzAwQ1x1MzA0RFx1MzA4N1x1MzA2MFx1MzA0NFx1MzA0Qlx1MzA1Nlx1MzA5MyBcdTMwNjFcdTMwODdcdTMwNDZcdTMwNThcdTMwODdcdTMwNDZcdTMwMERcdTMwNjdcdTMwRDJcdTMwRkNcdTMwQzlcdTMwRTlcdTMwRjNcdTMwOTJcdTUwMTJcdTMwNTkgKDUwJSknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDB4MjEwLFxyXG4gICAgY29udGV4dDogJ1x1MzAwQ1x1MzA3MFx1MzA5M1x1MzA2Qlx1MzA5M1x1MzA2RVx1MzA2OVx1MzA0Nlx1MzA0Rlx1MzA2NCBcdTMwRUNcdTMwQjhcdTMwQUVcdTMwQUNcdTMwQjlcdTMwNkVcdTMwN0VcdTMwMERcdTMwNjdcdTMwRUNcdTMwQjhcdTMwQUVcdTMwQUNcdTMwQjlcdTMwOTJcdTUwMTJcdTMwNTknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDB4MjExLFxyXG4gICAgY29udGV4dDogJ1x1MzAwQ1x1MzA1Qlx1MzA0Qlx1MzA0NFx1MzA2RVx1MzA0QVx1MzA0QVx1MzA0Mlx1MzA2QSBcdTMwNEFcdTMwNEZcdTMwNURcdTMwNTNcdTMwMERcdTMwNjdcdTMwQUVcdTMwRTlcdTMwQzZcdTMwQTNcdTMwQ0FcdTMwOTJcdTUwMTJcdTMwNTkgKDUwJSknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDB4MjEyLFxyXG4gICAgY29udGV4dDogJ1x1MzBDMFx1MzBGQ1x1MzBBRlx1MzBFOVx1MzBBNFx1NjQ4M1x1NzgzNFx1NUY4Q1x1MzAwMVx1MzBCNVx1MzBFMVx1MzBDRlx1MzBDMFx1MzA0NFx1MzA4Rlx1MzA2N1x1MzBBRlx1MzBFQ1x1MzBCQlx1MzBFQVx1MzBBMlx1MzA2OFx1OEE3MVx1MzA1OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgyMTMsXHJcbiAgICBjb250ZXh0OiAnXHUzMDREXHUzMDVCXHUzMDREXHUzMDZFXHUzMDQ2XHUzMDdGXHUzMEFGXHUzMEVBXHUzMEEyXHU1RjhDXHUzMDAxXHU1MThEXHU1RUE2XHUzMDBDXHUzMDREXHUzMDVCXHUzMDREXHUzMDZFXHUzMDQ2XHUzMDdGIFx1MzA0QVx1MzA0Rlx1MzA1RFx1MzA1M1x1MzAwRFx1MzA3OFx1NTQxMVx1MzA0Qlx1MzA0NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgyMTQsXHJcbiAgICBjb250ZXh0OiAnXHUzMEMwXHUzMEZDXHUzMEFGXHUzMEU5XHUzMEE0XHU2NDgzXHU3ODM0XHU1RjhDXHUzMDAxXHU0RjlEXHU5ODNDXHUzMDkyM1x1NjVFNVx1NTIwNlx1MzA1M1x1MzA2QVx1MzA1OScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMHgyMTYsXHJcbiAgICBjb250ZXh0OiAnXHUzMDVEXHUzMDg5XHUzMDZFXHUzMDQ0XHUzMDVGXHUzMDYwXHUzMDREXHUzMEFGXHUzMEVBXHUzMEEyXHU1RjhDXHUzMDAxXHU1MThEXHU1RUE2XHUzMDBDXHUzMDVEXHUzMDg5XHUzMDZFXHUzMDQ0XHUzMDVGXHUzMDYwXHUzMDREIFx1MzA2MVx1MzA4N1x1MzA0Nlx1MzA1OFx1MzA4N1x1MzA0Nlx1MzAwRFx1MzA3OFx1NTQxMVx1MzA0Qlx1MzA0NicsXHJcbiAgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGdldFVub3duU3VmZml4KGluZGV4KSB7XHJcbiAgaWYgKGluZGV4IDwgMjUpIHtcclxuICAgIC8vIEItWlxyXG4gICAgcmV0dXJuICctJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoOTcgKyBpbmRleCArIDEpOyAvLyA5NyA9ICdhJ1xyXG4gIH0gZWxzZSBpZiAoaW5kZXggPT09IDI1KSB7XHJcbiAgICByZXR1cm4gJy1leGNsYW1hdGlvbic7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAnLXF1ZXN0aW9uJztcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrUG9rZW1vbkRhdGEgPSBbXHJcbiAgLy8gUmVndWxhciBQb2tlbW9uIDEtNDkyIChleGNlcHQgNDEyLCA0MTMsIDQyMiwgNDIzKVxyXG4gIC4uLkFycmF5LmZyb20oeyBsZW5ndGg6IDQ5MiB9LCAoXywgaSkgPT4ge1xyXG4gICAgY29uc3QgaWQgPSBpICsgMTtcclxuICAgIGlmIChbNDEyLCA0MTMsIDQyMiwgNDIzXS5pbmNsdWRlcyhpZCkpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmFzZUlkOiBpZCxcclxuICAgICAgZm9ybUlkOiAwLFxyXG4gICAgICBzb3J0SWQ6IGlkLFxyXG4gICAgICBpbWFnZVN1ZmZpeDogJycsXHJcbiAgICB9O1xyXG4gIH0pLmZpbHRlcigoeCkgPT4geCAhPT0gbnVsbCksXHJcbiAgLy8gVW5vd24gZm9ybXMgKEItWiwgISwgPylcclxuICAuLi5BcnJheS5mcm9tKHsgbGVuZ3RoOiAyNyB9LCAoXywgaSkgPT4gKHtcclxuICAgIGJhc2VJZDogMjAxLFxyXG4gICAgZm9ybUlkOiBpICsgMSxcclxuICAgIHNvcnRJZDogMjAxICsgKGkgKyAxKSAvIDEwMCxcclxuICAgIGltYWdlU3VmZml4OiBnZXRVbm93blN1ZmZpeChpKSxcclxuICB9KSksXHJcbiAgLy8gQnVybXkvV29ybWFkYW0gZm9ybXMgKFNhbmR5LCBHcmFzcywgVHJhc2gpXHJcbiAgeyBiYXNlSWQ6IDQxMiwgZm9ybUlkOiAxLCBzb3J0SWQ6IDQxMi4wLCBpbWFnZVN1ZmZpeDogJy1zYW5keScgfSxcclxuICB7IGJhc2VJZDogNDEyLCBmb3JtSWQ6IDAsIHNvcnRJZDogNDEyLjEsIGltYWdlU3VmZml4OiAnJyB9LFxyXG4gIHsgYmFzZUlkOiA0MTIsIGZvcm1JZDogMiwgc29ydElkOiA0MTIuMiwgaW1hZ2VTdWZmaXg6ICctdHJhc2gnIH0sXHJcbiAgeyBiYXNlSWQ6IDEwMDA0LCBmb3JtSWQ6IDEsIHNvcnRJZDogNDEzLjAsIGltYWdlU3VmZml4OiAnJyB9LFxyXG4gIHsgYmFzZUlkOiA0MTMsIGZvcm1JZDogMCwgc29ydElkOiA0MTMuMSwgaW1hZ2VTdWZmaXg6ICcnIH0sXHJcbiAgeyBiYXNlSWQ6IDEwMDA1LCBmb3JtSWQ6IDIsIHNvcnRJZDogNDEzLjIsIGltYWdlU3VmZml4OiAnJyB9LFxyXG4gIC8vIFNoZWxsb3MvR2FzdHJvZG9uIGZvcm1zXHJcbiAgeyBiYXNlSWQ6IDQyMiwgZm9ybUlkOiAxLCBzb3J0SWQ6IDQyMi4wLCBpbWFnZVN1ZmZpeDogJy1lYXN0JyB9LFxyXG4gIHsgYmFzZUlkOiA0MjIsIGZvcm1JZDogMCwgc29ydElkOiA0MjIuMSwgaW1hZ2VTdWZmaXg6ICcnIH0sXHJcbiAgeyBiYXNlSWQ6IDQyMywgZm9ybUlkOiAxLCBzb3J0SWQ6IDQyMy4wLCBpbWFnZVN1ZmZpeDogJy1lYXN0JyB9LFxyXG4gIHsgYmFzZUlkOiA0MjMsIGZvcm1JZDogMCwgc29ydElkOiA0MjMuMSwgaW1hZ2VTdWZmaXg6ICcnIH0sXHJcbl0uc29ydCgoYSwgYikgPT4gYS5zb3J0SWQgLSBiLnNvcnRJZCk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkUG9rZW1vbigpIHtcclxuICAvLyBKU09OXHU4QUFEXHU4RkJDXHJcbiAgYXdhaXQgZmV0Y2hKc29uRGF0YSgpO1xyXG5cclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9rZW1vbi1saXN0Jyk7XHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gIGZvciAobGV0IFtpLCBwb2tlbW9uXSBvZiBjaGVja1Bva2Vtb25EYXRhLmVudHJpZXMoKSkge1xyXG4gICAgY29uc3QgZGl2ID0gcGFyc2VIVE1MKGBcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzPVwicG9rZW1vbi1ncmlkXCJcclxuICAgICAgICBkYXRhLWJhc2UtaWQ9XCIke3Bva2Vtb24uYmFzZUlkfVwiXHJcbiAgICAgICAgZGF0YS1mb3JtLWlkPVwiJHtwb2tlbW9uLmZvcm1JZH1cIlxyXG4gICAgICAgIGRhdGEtaWQ9XCIke2luZGV4VG9Qb2tlbW9uSWQoaSl9XCJcclxuICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke2dldFBva2Vtb25TcHJpdGVVcmwoaSl9KVwiXHJcbiAgICAgID48ZGl2PlxyXG4gICAgICBgKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdG9nZ2xlUG9rZW1vbkNoZWNrZWQoZGl2KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gXHUzMEI5XHUzMEREXHUzMEZDXHUzMEYzXHUzMEM3XHUzMEZDXHUzMEJGXHU0RjVDXHU2MjEwXHJcbiAgc3Bhd25EYXRhID0gZ2VuZXJhdGVTcGF3bkRhdGEoKTtcclxuICAvLyBcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNcdThBNzNcdTdEMzBcdTMwOTJcdTRGNUNcdTYyMTBcclxuICBjcmVhdGVHdWlkZSgpO1xyXG4gIC8vIFx1MzBDMFx1MzBGM1x1MzBCOFx1MzBFN1x1MzBGM1x1OEE3M1x1N0QzMFx1MzA5Mlx1NEY1Q1x1NjIxMFxyXG4gIGNyZWF0ZVJlY3J1aXREdW5nZW9uKCk7XHJcblxyXG4gIGxvYWRTdGF0ZSgpO1xyXG4gIHJlc3RvcmVGb3JtU3dpdGNoKCk7XHJcbiAgZmlsdGVyRm9ybVZhcmlhbnRzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGVGb3JtU3dpdGNoJykuY2hlY2tlZCwgdHJ1ZSk7XHJcbiAgdXBkYXRlUHJvZ3Jlc3MoKTtcclxuICBzeW5jRGV0YWlsc1dpdGhDaGVja2VyKCk7XHJcbiAgc3luY0R1bmdlb25XaXRoQ2hlY2tlcigpO1xyXG59XHJcblxyXG4vKipcclxuICogXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFCXHUzMEZDXHUzMDZFXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMDkyXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHU1MjA3XHU2NkZGXHJcbiAqIEBwYXJhbSB7Kn0gZGl2XHJcbiAqL1xyXG5mdW5jdGlvbiB0b2dnbGVQb2tlbW9uQ2hlY2tlZChkaXYpIHtcclxuICBjb25zdCBpc1NlbGVjdGVkID0gZGl2LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tlZCcpO1xyXG4gIGNvbnN0IHBva2Vtb25JZCA9IGRpdi5kYXRhc2V0LmlkO1xyXG5cclxuICBpZiAoaXNTZWxlY3RlZCkge1xyXG4gICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcclxuICB9XHJcblxyXG4gIHNhdmVTdGF0ZSgpO1xyXG4gIHVwZGF0ZVByb2dyZXNzKCk7XHJcbiAgc3luY0RldGFpbHNXaXRoQ2hlY2tlcigpOyAvLyBcdTUyRTdcdThBOThcdTY1QjlcdTZDRDVcdTU0MENcdTY3MUZcclxuICBzeW5jRHVuZ2VvbldpdGhDaGVja2VyKCk7IC8vIFx1MzBDMFx1MzBGM1x1MzBCOFx1MzBFN1x1MzBGM1x1NTQwQ1x1NjcxRlxyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlU3RhdGUoKSB7XHJcbiAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwb2tlbW9uLWxpc3QgLnBva2Vtb24tZ3JpZCcpKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlSWRBID0gcGFyc2VJbnQoYS5kYXRhc2V0LmJhc2VJZCk7XHJcbiAgICBjb25zdCBiYXNlSWRCID0gcGFyc2VJbnQoYi5kYXRhc2V0LmJhc2VJZCk7XHJcbiAgICBpZiAoYmFzZUlkQSAhPT0gYmFzZUlkQikgcmV0dXJuIGJhc2VJZEEgLSBiYXNlSWRCO1xyXG4gICAgY29uc3QgZm9ybUEgPSBwYXJzZUludChhLmRhdGFzZXQuZm9ybUlkKTtcclxuICAgIGNvbnN0IGZvcm1CID0gcGFyc2VJbnQoYi5kYXRhc2V0LmZvcm1JZCk7XHJcbiAgICByZXR1cm4gZm9ybUEgLSBmb3JtQjtcclxuICB9KTtcclxuXHJcbiAgbGV0IGJpbiA9ICcnO1xyXG4gIGZvciAobGV0IGRpdiBvZiBpdGVtcykge1xyXG4gICAgYmluICs9IGRpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKSA/ICcxJyA6ICcwJztcclxuICB9XHJcbiAgY29uc3QgY29tcHJlc3NlZCA9IExaU3RyaW5nLmNvbXByZXNzVG9CYXNlNjQoYmluKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9rZW1vbi1jaGVja2xpc3QnLCBjb21wcmVzc2VkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFN0YXRlKCkge1xyXG4gIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcG9rZW1vbi1saXN0IC5wb2tlbW9uLWdyaWQnKSkuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgY29uc3QgYmFzZUlkQSA9IHBhcnNlSW50KGEuZGF0YXNldC5iYXNlSWQpO1xyXG4gICAgY29uc3QgYmFzZUlkQiA9IHBhcnNlSW50KGIuZGF0YXNldC5iYXNlSWQpO1xyXG4gICAgaWYgKGJhc2VJZEEgIT09IGJhc2VJZEIpIHJldHVybiBiYXNlSWRBIC0gYmFzZUlkQjtcclxuICAgIGNvbnN0IGZvcm1BID0gcGFyc2VJbnQoYS5kYXRhc2V0LmZvcm1JZCk7XHJcbiAgICBjb25zdCBmb3JtQiA9IHBhcnNlSW50KGIuZGF0YXNldC5mb3JtSWQpO1xyXG4gICAgcmV0dXJuIGZvcm1BIC0gZm9ybUI7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNvbXByZXNzZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9rZW1vbi1jaGVja2xpc3QnKTtcclxuICBjb25zdCBiaW4gPSBMWlN0cmluZy5kZWNvbXByZXNzRnJvbUJhc2U2NChjb21wcmVzc2VkKTtcclxuXHJcbiAgaWYgKCFiaW4gfHwgYmluLmxlbmd0aCAhPT0gaXRlbXMubGVuZ3RoKSByZXR1cm47XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7ICsraSkge1xyXG4gICAgaWYgKGJpbltpXSA9PSAnMScpIHtcclxuICAgICAgaXRlbXNbaV0uY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gXHU1OUZGXHU5MDU1XHUzMDQ0XHUzMEI5XHUzMEE0XHUzMEMzXHUzMEMxXHUzMDZFXHU3MkI2XHU2MTRCXHUzMDkybG9jYWxTdG9yYWdlXHUzMDY3XHU0RkREXHU2MzAxXHUzMEZCXHU1RkE5XHU1MTQzXHJcbmZ1bmN0aW9uIHNhdmVGb3JtU3dpdGNoU3RhdGUoY2hlY2tlZCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb2tlbW9uLWNoZWNrbGlzdC1mb3JtU3dpdGNoJywgY2hlY2tlZCA/ICcxJyA6ICcwJyk7XHJcbn1cclxuZnVuY3Rpb24gcmVzdG9yZUZvcm1Td2l0Y2goKSB7XHJcbiAgY29uc3QgdG9nZ2xlRm9ybVN3aXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGVGb3JtU3dpdGNoJyk7XHJcbiAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9rZW1vbi1jaGVja2xpc3QtZm9ybVN3aXRjaCcpO1xyXG4gIGlmICh0b2dnbGVGb3JtU3dpdGNoICYmIHNhdmVkICE9PSBudWxsKSB7XHJcbiAgICB0b2dnbGVGb3JtU3dpdGNoLmNoZWNrZWQgPSBzYXZlZCA9PT0gJzEnO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3MoKSB7XHJcbiAgY29uc3QgZXhjbHVkZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlRm9ybVN3aXRjaCcpPy5jaGVja2VkO1xyXG4gIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcG9rZW1vbi1saXN0IC5wb2tlbW9uLWdyaWQnKSkuZmlsdGVyKFxyXG4gICAgKGRpdikgPT4gIWV4Y2x1ZGVGb3JtIHx8IGRpdi5kYXRhc2V0LmZvcm1JZCA9PT0gJzAnLFxyXG4gICk7XHJcbiAgbGV0IGNoZWNrZWQgPSAwO1xyXG4gIGZvciAobGV0IGRpdiBvZiBpdGVtcykge1xyXG4gICAgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKSkgY2hlY2tlZCsrO1xyXG4gIH1cclxuICBsZXQgcGVyY2VudCA9IE1hdGguZmxvb3IoKGNoZWNrZWQgLyBpdGVtcy5sZW5ndGgpICogMTAwKTtcclxuICBpZiAoY2hlY2tlZCA9PT0gaXRlbXMubGVuZ3RoICYmIGl0ZW1zLmxlbmd0aCA+IDApIHBlcmNlbnQgPSAxMDA7XHJcbiAgY29uc3QgYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzLWJhcicpO1xyXG4gIGNvbnN0IHBlcmNlbnRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzLXBlcmNlbnQnKTtcclxuICBjb25zdCBjb3VudFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MtY291bnQnKTtcclxuICBiYXIuc3R5bGUud2lkdGggPSBwZXJjZW50ICsgJyUnO1xyXG4gIGJhci5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWVub3cnLCBwZXJjZW50KTtcclxuICBwZXJjZW50VGV4dC50ZXh0Q29udGVudCA9IHBlcmNlbnQgKyAnJSc7XHJcbiAgY291bnRUZXh0LnRleHRDb250ZW50ID0gY2hlY2tlZCArICcvJyArIGl0ZW1zLmxlbmd0aDtcclxuICBpZiAocGVyY2VudCA9PT0gMTAwKSB7XHJcbiAgICBiYXIuY2xhc3NMaXN0LnJlbW92ZSgnYmctcHJpbWFyeScpO1xyXG4gICAgYmFyLmNsYXNzTGlzdC5hZGQoJ2JnLXdhcm5pbmcnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYmFyLmNsYXNzTGlzdC5hZGQoJ2JnLXByaW1hcnknKTtcclxuICAgIGJhci5jbGFzc0xpc3QucmVtb3ZlKCdiZy13YXJuaW5nJyk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBcdTMwRTJcdTMwRkNcdTMwQzBcdTMwRUJcdTg4NjhcdTc5M0FcdTc1MjhCb290c3RyYXBcclxubGV0IGV4cG9ydE1vZGFsLCBpbXBvcnRNb2RhbDtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBleHBvcnRNb2RhbCA9IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cG9ydE1vZGFsJykpO1xyXG4gIGltcG9ydE1vZGFsID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0TW9kYWwnKSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cG9ydC1idG4nKS5vbmNsaWNrID0gc2hvd0V4cG9ydE1vZGFsO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnQtYnRuJykub25jbGljayA9IHNob3dJbXBvcnRNb2RhbDtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0Rm9ybScpLm9uc3VibWl0ID0gaGFuZGxlSW1wb3J0O1xyXG5cclxuICAvLyBcdTMwQTJcdTMwQjNcdTMwRkNcdTMwQzdcdTMwQTNcdTMwQUFcdTMwRjNcdTc3RTJcdTUzNzBcdTMwNkVcdTU2REVcdThFRTJcdTUyMzZcdTVGQTFcclxuICBjb25zdCBjb2xsYXBzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xsYXBzZUltcG9ydEV4cG9ydCcpO1xyXG4gIGNvbnN0IGFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY29yZGlvbkFycm93Jyk7XHJcbiAgY29sbGFwc2UuYWRkRXZlbnRMaXN0ZW5lcignc2hvdy5icy5jb2xsYXBzZScsICgpID0+IHtcclxuICAgIGFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMTgwZGVnKSc7XHJcbiAgfSk7XHJcbiAgY29sbGFwc2UuYWRkRXZlbnRMaXN0ZW5lcignaGlkZS5icy5jb2xsYXBzZScsICgpID0+IHtcclxuICAgIGFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xyXG4gIH0pO1xyXG5cclxuICAvLyBcdTMwNTlcdTMwNzlcdTMwNjZcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcdTMwRkJcdTMwNTlcdTMwNzlcdTMwNjZcdTg5RTNcdTk2NjRcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFyay1hbGwtYnRuJykub25jbGljayA9ICgpID0+IHtcclxuICAgIHNob3dDb25maXJtTW9kYWwoJ1x1MzA1OVx1MzA3OVx1MzA2Nlx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlx1MzA1N1x1MzA3RVx1MzA1OVx1MzA0Qlx1RkYxRjxicj5cdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcdTMwNTdcdTMwNUZcdTUxODVcdTVCQjlcdTMwNkZcdTU5MzFcdTMwOEZcdTMwOENcdTMwN0VcdTMwNTlcdTMwMDInLCAoKSA9PiB7XHJcbiAgICAgIHNldEFsbE1hcmtlZCh0cnVlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VubWFyay1hbGwtYnRuJykub25jbGljayA9ICgpID0+IHtcclxuICAgIHNob3dDb25maXJtTW9kYWwoJ1x1MzA1OVx1MzA3OVx1MzA2Nlx1ODlFM1x1OTY2NFx1MzA1N1x1MzA3RVx1MzA1OVx1MzA0Qlx1RkYxRjxicj5cdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUZcdTMwNTdcdTMwNUZcdTUxODVcdTVCQjlcdTMwNkZcdTU5MzFcdTMwOEZcdTMwOENcdTMwN0VcdTMwNTlcdTMwMDInLCAoKSA9PiB7XHJcbiAgICAgIHNldEFsbE1hcmtlZChmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBcdTU5RkZcdTkwNTVcdTMwNDRcdTMwQjlcdTMwQTRcdTMwQzNcdTMwQzFcclxuICBjb25zdCB0b2dnbGVGb3JtU3dpdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZUZvcm1Td2l0Y2gnKTtcclxuICBpZiAodG9nZ2xlRm9ybVN3aXRjaCkge1xyXG4gICAgdG9nZ2xlRm9ybVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIHNhdmVGb3JtU3dpdGNoU3RhdGUodG9nZ2xlRm9ybVN3aXRjaC5jaGVja2VkKTtcclxuICAgICAgZmlsdGVyRm9ybVZhcmlhbnRzKHRvZ2dsZUZvcm1Td2l0Y2guY2hlY2tlZCwgZmFsc2UpO1xyXG4gICAgICB1cGRhdGVQcm9ncmVzcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNob3dFeHBvcnRNb2RhbCgpIHtcclxuICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bva2Vtb24tY2hlY2tsaXN0JykgfHwgJyc7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cG9ydFRleHRhcmVhJykudmFsdWUgPSBkYXRhO1xyXG4gIGV4cG9ydE1vZGFsLnNob3coKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0ltcG9ydE1vZGFsKCkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnRUZXh0YXJlYScpLnZhbHVlID0gJyc7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydEVycm9yJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBpbXBvcnRNb2RhbC5zaG93KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUltcG9ydChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydFRleHRhcmVhJyk7XHJcbiAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0RXJyb3InKTtcclxuICBsZXQgdmFsdWUgPSB0ZXh0YXJlYS52YWx1ZS50cmltKCk7XHJcbiAgY29uc3QgYmluID0gTFpTdHJpbmcuZGVjb21wcmVzc0Zyb21CYXNlNjQodmFsdWUpO1xyXG4gIGNvbnN0IGl0ZW1zTGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Bva2Vtb24tbGlzdCAucG9rZW1vbi1ncmlkJykubGVuZ3RoO1xyXG4gIGlmICghL15bMDFdKyQvaS50ZXN0KGJpbikgfHwgYmluLmxlbmd0aCAhPT0gaXRlbXNMZW4pIHtcclxuICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gJ1x1MzBBNFx1MzBGM1x1MzBERFx1MzBGQ1x1MzBDOFx1NTkzMVx1NjU1NzogXHUzMEQ1XHUzMEE5XHUzMEZDXHUzMERFXHUzMEMzXHUzMEM4XHUzMDRDXHU2QjYzXHUzMDU3XHUzMDRGXHUzMDQyXHUzMDhBXHUzMDdFXHUzMDVCXHUzMDkzXHUzMDAyJztcclxuICAgIGVycm9yRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9rZW1vbi1jaGVja2xpc3QnLCB2YWx1ZSk7XHJcbiAgaW1wb3J0TW9kYWwuaGlkZSgpO1xyXG4gIGxvYWRTdGF0ZSgpO1xyXG4gIHVwZGF0ZVByb2dyZXNzKCk7XHJcbiAgc3luY0RldGFpbHNXaXRoQ2hlY2tlcigpO1xyXG4gIHN5bmNEdW5nZW9uV2l0aENoZWNrZXIoKTtcclxufVxyXG5cclxuLy8gXHUzMDU5XHUzMDc5XHUzMDY2XHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHUzMEZCXHUzMDU5XHUzMDc5XHUzMDY2XHU4OUUzXHU5NjY0XHUzMDZFXHU1QjlGXHU4ODRDXHJcbmZ1bmN0aW9uIHNldEFsbE1hcmtlZChtYXJrZWQpIHtcclxuICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwb2tlbW9uLWxpc3QgLnBva2Vtb24tZ3JpZCcpO1xyXG4gIGxldCBiaW4gPSAnJztcclxuICBmb3IgKGxldCBkaXYgb2YgaXRlbXMpIHtcclxuICAgIGJpbiArPSBtYXJrZWQgPyAnMScgOiAnMCc7XHJcbiAgfVxyXG4gIGNvbnN0IGNvbXByZXNzZWQgPSBMWlN0cmluZy5jb21wcmVzc1RvQmFzZTY0KGJpbik7XHJcblxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb2tlbW9uLWNoZWNrbGlzdCcsIGNvbXByZXNzZWQpO1xyXG4gIGxvYWRTdGF0ZSgpO1xyXG4gIHVwZGF0ZVByb2dyZXNzKCk7XHJcbiAgc3luY0RldGFpbHNXaXRoQ2hlY2tlcigpO1xyXG4gIHN5bmNEdW5nZW9uV2l0aENoZWNrZXIoKTtcclxufVxyXG5cclxuLy8gXHU4QjY2XHU1NDRBXHUzMEUyXHUzMEZDXHUzMEMwXHUzMEVCXHU4ODY4XHU3OTNBXHJcbmxldCBjb25maXJtTW9kYWw7XHJcbmZ1bmN0aW9uIHNob3dDb25maXJtTW9kYWwobWVzc2FnZSwgb2tDYWxsYmFjaykge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtTW9kYWxCb2R5JykuaW5uZXJIVE1MID0gbWVzc2FnZTtcclxuICBjb25maXJtTW9kYWwgPSBjb25maXJtTW9kYWwgfHwgbmV3IGJvb3RzdHJhcC5Nb2RhbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybU1vZGFsJykpO1xyXG4gIGNvbmZpcm1Nb2RhbC5zaG93KCk7XHJcbiAgY29uc3Qgb2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybU1vZGFsT2tCdG4nKTtcclxuICAvLyBcdTRFMDBcdTVFQTZcdTMwNjBcdTMwNTFcdTMwQTRcdTMwRDlcdTMwRjNcdTMwQzhcdTMwOTJcdTRFRDhcdTRFMEVcclxuICBva0J0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uZmlybU1vZGFsLmhpZGUoKTtcclxuICAgIG9rQ2FsbGJhY2soKTtcclxuICB9O1xyXG59XHJcblxyXG4vLyBcdTMwRDVcdTMwQTNcdTMwRUJcdTMwQkZcdUZGMDhcdTMwQTJcdTMwQ0JcdTMwRTFcdTMwRkNcdTMwQjdcdTMwRTdcdTMwRjNcdTMwNkFcdTMwNTdcdUZGMDlcclxuZnVuY3Rpb24gZmlsdGVyRm9ybVZhcmlhbnRzKGV4Y2x1ZGVGb3JtLCBpbml0aWFsKSB7XHJcbiAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcG9rZW1vbi1saXN0IC5wb2tlbW9uLWdyaWQnKTtcclxuICBmb3IgKGxldCBkaXYgb2YgaXRlbXMpIHtcclxuICAgIGlmIChleGNsdWRlRm9ybSAmJiBkaXYuZGF0YXNldC5mb3JtSWQgIT09ICcwJykge1xyXG4gICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIFx1OEE3M1x1N0QzMFx1NjBDNVx1NTgzMVx1NTA3NFx1MzA2Qlx1MzA4Mlx1MzBENVx1MzBBM1x1MzBFQlx1MzBCRlx1MzA5Mlx1OTA2OVx1NzUyOFxyXG4gIGZpbHRlckRldGFpbHNGb3JtVmFyaWFudHMoZXhjbHVkZUZvcm0pO1xyXG59XHJcblxyXG4vKipcclxuICogXHU4QTczXHU3RDMwXHU2MEM1XHU1ODMxXHU1MDc0XHUzMDZFXHU1OUZGXHU5MDU1XHUzMDQ0XHUzMDkyXHUzMEQ1XHUzMEEzXHUzMEVCXHUzMEJGXHJcbiAqL1xyXG5mdW5jdGlvbiBmaWx0ZXJEZXRhaWxzRm9ybVZhcmlhbnRzKGV4Y2x1ZGVGb3JtKSB7XHJcbiAgY29uc3QgZGV0YWlsc0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlY3J1aXQtcG9rZW1vbi1ncmlkJyk7XHJcbiAgZGV0YWlsc0l0ZW1zLmZvckVhY2goKGRpdikgPT4ge1xyXG4gICAgY29uc3QgaWQgPSBkaXYuZGF0YXNldC5pZDtcclxuICAgIGNvbnN0IGNoZWNrZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9rZW1vbi1ncmlkW2RhdGEtaWQ9XCIke2lkfVwiXWApO1xyXG5cclxuICAgIGlmIChjaGVja2VyRGl2KSB7XHJcbiAgICAgIGNvbnN0IGZvcm1JZCA9IHBhcnNlSW50KGNoZWNrZXJEaXYuZGF0YXNldC5mb3JtSWQpO1xyXG4gICAgICBpZiAoZXhjbHVkZUZvcm0gJiYgZm9ybUlkICE9PSAwKSB7XHJcbiAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHU3MkI2XHU2MTRCXHUzMDkyXHU3OEJBXHU4QThEXHUzMDU3XHUzMDY2XHU4ODY4XHU3OTNBL1x1OTc1RVx1ODg2OFx1NzkzQVx1MzA5Mlx1NkM3QVx1NUI5QVxyXG4gICAgICAgIGNvbnN0IGlzQ2hlY2tlZCA9IGNoZWNrZXJEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkJyk7XHJcbiAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSBpc0NoZWNrZWQgPyAnbm9uZScgOiAnJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogSW5kZXhJZFx1MzA0Qlx1MzA4OVx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM0lEXHUzMDZCXHU1OTA5XHU2M0RCXHJcbiAqIEBwYXJhbSB7Kn0gaW5kZXhJZFxyXG4gKi9cclxuZnVuY3Rpb24gaW5kZXhUb1Bva2Vtb25JZChpbmRleElkKSB7XHJcbiAgY29uc3QgZm9ybUlkcyA9IFtcclxuICAgIFs0MzksIDB4MWJmXSwgLy8gXHU3ODAyXHUzMERGXHUzMENFXHUzMEUwXHUzMEMzXHUzMEMxXHJcbiAgICBbNDM4LCAweDFjMF0sIC8vIFx1ODM0OVx1MzBERlx1MzBDRVx1MzBFMFx1MzBDM1x1MzBDMVxyXG4gICAgWzQ0MCwgMHgxYzFdLCAvLyBcdTkyRkNcdTMwREZcdTMwQ0VcdTMwRTBcdTMwQzNcdTMwQzFcclxuICAgIFs0NDIsIDB4MWMyXSwgLy8gXHU3ODAyXHUzMERGXHUzMENFXHUzMERFXHUzMEMwXHUzMEUwXHJcbiAgICBbNDQxLCAweDFjM10sIC8vIFx1ODM0OVx1MzBERlx1MzBDRVx1MzBERVx1MzBDMFx1MzBFMFxyXG4gICAgWzQ0MywgMHgxYzRdLCAvLyBcdTkyRkNcdTMwREZcdTMwQ0VcdTMwREVcdTMwQzBcdTMwRTBcclxuICAgIFs0NTMsIDB4MWNlXSwgLy8gXHU2NzcxXHUzMEFCXHUzMEU5XHUzMENBXHUzMEFGXHUzMEI3XHJcbiAgICBbNDUyLCAweDFjZl0sIC8vIFx1ODk3Rlx1MzBBQlx1MzBFOVx1MzBDQVx1MzBBRlx1MzBCN1xyXG4gICAgWzQ1NSwgMHgxZDBdLCAvLyBcdTY3NzFcdTMwQzhcdTMwRUFcdTMwQzhcdTMwQzlcdTMwRjNcclxuICAgIFs0NTQsIDB4MWQxXSwgLy8gXHU4OTdGXHUzMEM4XHUzMEVBXHUzMEM4XHUzMEM5XHUzMEYzXHJcbiAgXTtcclxuXHJcbiAgbGV0IGlkID0gaW5kZXhJZCArIDE7XHJcbiAgLy8gXHU1OUZGXHU5MDU1XHUzMDQ0XHUzMDkyXHU1OTA5XHU2M0RCXHJcbiAgZm9yIChjb25zdCBmb3JtSWQgb2YgZm9ybUlkcykge1xyXG4gICAgaWYgKGluZGV4SWQgPT0gZm9ybUlkWzBdKSB7XHJcbiAgICAgIHJldHVybiBmb3JtSWRbMV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIFx1OTY2NFx1NTkxNlx1MzA1OVx1MzA4Qlx1NTlGRlx1OTA1NVx1MzA0NFx1MzA5Mlx1MzBCOVx1MzBBRFx1MzBDM1x1MzBEN1xyXG4gIGZvciAoY29uc3QganVtcElkIG9mIGJhbm5lZFBva2Vtb25JZHMpIHtcclxuICAgIGlmIChpZCA+PSBqdW1wSWQpIGlkKys7XHJcbiAgICBlbHNlIGJyZWFrO1xyXG4gIH1cclxuICByZXR1cm4gaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNJRFx1MzA0Qlx1MzA4OSBJbmRleElkIFx1MzA2Qlx1OTAwNlx1NTkwOVx1NjNEQlxyXG4gKiBAcGFyYW0geyp9IHBva2Vtb25JZFxyXG4gKi9cclxuZnVuY3Rpb24gcG9rZW1vbklkVG9JbmRleChwb2tlbW9uSWQpIHtcclxuICBsZXQgaWQgPSBwb2tlbW9uSWQ7XHJcbiAgY29uc3QgZm9ybUlkcyA9IFtcclxuICAgIFs0MzksIDB4MWJmXSwgLy8gXHU3ODAyXHUzMERGXHUzMENFXHUzMEUwXHUzMEMzXHUzMEMxXHJcbiAgICBbNDM4LCAweDFjMF0sIC8vIFx1ODM0OVx1MzBERlx1MzBDRVx1MzBFMFx1MzBDM1x1MzBDMVxyXG4gICAgWzQ0MCwgMHgxYzFdLCAvLyBcdTkyRkNcdTMwREZcdTMwQ0VcdTMwRTBcdTMwQzNcdTMwQzFcclxuICAgIFs0NDIsIDB4MWMyXSwgLy8gXHU3ODAyXHUzMERGXHUzMENFXHUzMERFXHUzMEMwXHUzMEUwXHJcbiAgICBbNDQxLCAweDFjM10sIC8vIFx1ODM0OVx1MzBERlx1MzBDRVx1MzBERVx1MzBDMFx1MzBFMFxyXG4gICAgWzQ0MywgMHgxYzRdLCAvLyBcdTkyRkNcdTMwREZcdTMwQ0VcdTMwREVcdTMwQzBcdTMwRTBcclxuICAgIFs0NTMsIDB4MWNlXSwgLy8gXHU2NzcxXHUzMEFCXHUzMEU5XHUzMENBXHUzMEFGXHUzMEI3XHJcbiAgICBbNDUyLCAweDFjZl0sIC8vIFx1ODk3Rlx1MzBBQlx1MzBFOVx1MzBDQVx1MzBBRlx1MzBCN1xyXG4gICAgWzQ1NSwgMHgxZDBdLCAvLyBcdTY3NzFcdTMwQzhcdTMwRUFcdTMwQzhcdTMwQzlcdTMwRjNcclxuICAgIFs0NTQsIDB4MWQxXSwgLy8gXHU4OTdGXHUzMEM4XHUzMEVBXHUzMEM4XHUzMEM5XHUzMEYzXHJcbiAgXTtcclxuXHJcbiAgLy8gXHU1OUZGXHU5MDU1XHUzMDQ0XHUzMDZFXHU1MDI0XHU1OTA5XHU2M0RCXHJcbiAgZm9yIChjb25zdCBbYmFzZUlkLCBhbHRJZF0gb2YgZm9ybUlkcykge1xyXG4gICAgaWYgKHBva2Vtb25JZCA9PT0gYWx0SWQpIHtcclxuICAgICAgcmV0dXJuIGJhc2VJZDtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gXHU5NjY0XHU1OTE2XHUzMDU5XHUzMDhCXHU1OUZGXHU5MDU1XHUzMDQ0XHUzMDkyXHUzMEI5XHUzMEFEXHUzMEMzXHUzMEQ3XHJcbiAgZm9yIChsZXQgaSA9IGJhbm5lZFBva2Vtb25JZHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgIGNvbnN0IGp1bXBJZCA9IGJhbm5lZFBva2Vtb25JZHNbaV07XHJcbiAgICBpZiAoaWQgPiBqdW1wSWQpIGlkLS07XHJcbiAgfVxyXG4gIC8vIFx1NTIxRFx1NjcxRlx1NTAyNFx1MzA0QzFcdTMwQjlcdTMwQkZcdTMwRkNcdTMwQzhcdTMwNkFcdTMwNkVcdTMwNjdcdTMwMDFcdTMwNTNcdTMwNjFcdTMwODlcdTMwNkYtMVx1MzA1OVx1MzA4QlxyXG4gIHJldHVybiBpZCAtIDE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNcdTMwNkVcdTMwQjlcdTMwRERcdTMwRkNcdTMwRjNcdTYwQzVcdTU4MzFcdTMwOTJcdTRGNUNcdTYyMTBcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlU3Bhd25EYXRhKCkge1xyXG4gIGNvbnN0IGRhdGEgPSBbXTtcclxuICBjb25zdCBiYW5uZWQgPSBbMHgxN2MsIDB4MTdkLCAweDE3ZV07XHJcblxyXG4gIC8vIFx1NTJFN1x1OEE5OFx1NTNFRlx1ODBGRFx1MzBGQlx1NjcwOVx1NTJCOVx1MzBDMFx1MzBGM1x1MzBCOFx1MzBFN1x1MzBGM1x1MzA2RVx1MzA3Rlx1MzA2Qlx1N0Q1RVx1MzA4QVx1OEZCQ1x1MzA4MFxyXG4gIGNvbnN0IGR1bmdlb25zID0gRHVuZ2VvbkRhdGEuZmlsdGVyKFxyXG4gICAgKHIpID0+IHIuSWQgPD0gMHhiZiAmJiByLklkICE9IDkgJiYgci5JZCAhPSAxMSAmJiByLklkICE9IDEzICYmICFpc1VudXNlZER1bmdlb24oci5JZCkgJiYgci5GbGFnUmVjcnVpdCxcclxuICApO1xyXG5cclxuICBmb3IgKGNvbnN0IGR1bmdlb24gb2YgZHVuZ2VvbnMpIHtcclxuICAgIGNvbnN0IGR1bmdlb25OYW1lID0gZHVuZ2Vvbi5Jbk5hbWU7XHJcbiAgICBjb25zdCBtYXBwYUluZGV4ID0gcGFyc2VJbnQoZHVuZ2Vvbi5NYXBwYUluZGV4KTtcclxuICAgIGNvbnN0IGZsb29yUHJldiA9IHBhcnNlSW50KGR1bmdlb24uRmxvb3JQcmV2KTtcclxuICAgIGNvbnN0IGZsb29yQ291bnQgPSBwYXJzZUludChkdW5nZW9uLkZsb29yQ291bnQpO1xyXG4gICAgLy8gXHU1NkZBXHU1QjlBXHUzMEQ1XHUzMEVEXHUzMEEyXHUzMDkyXHU5NjY0XHU1OTE2IChcdTVCOURcdTdCQjFcdTMwRDVcdTMwRURcdTMwQTJcdTMwNkZcdThBMzFcdTUzRUYpXHJcbiAgICBjb25zdCBmbG9vcnMgPSBGbG9vckRhdGFbbWFwcGFJbmRleF1cclxuICAgICAgLnNsaWNlKGZsb29yUHJldiArIDEsIGZsb29yUHJldiArIDEgKyBmbG9vckNvdW50KVxyXG4gICAgICAuZmlsdGVyKChyKSA9PiByLkZpeGVkRmxvb3JJZCA9PSAwIHx8IHIuRml4ZWRGbG9vcklkID49IDB4YWEpO1xyXG5cclxuICAgIGlmIChmbG9vcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKGNvbnN0IGZsb29yIG9mIGZsb29ycykge1xyXG4gICAgICAgIGNvbnN0IGVuZW15VGFibGVJZCA9IHBhcnNlSW50KGZsb29yLkluZGV4R3JvdXAuU3Bhd25FbmVteSk7XHJcbiAgICAgICAgY29uc3QgZW5lbWllcyA9IE1hcHBhU0RhdGEuRW5lbXlEYXRhW2VuZW15VGFibGVJZF07XHJcblxyXG4gICAgICAgIC8vIFx1NjU3NVx1MzBERFx1MzBCMVx1MzBFMlx1MzBGM1x1MzBDN1x1MzBGQ1x1MzBCRlx1MzA5Mlx1MzBCQlx1MzBDM1x1MzBDOCAoXHUzMEFCXHUzMEFGXHUzMEVDXHUzMEFBXHUzMEYzXHUzMDkyXHU1RjhDXHUzMDhEXHUzMDZCXHUzMDU5XHUzMDhCKVxyXG4gICAgICAgIGZvciAoY29uc3QgZW5lbXkgb2YgZW5lbWllcykge1xyXG4gICAgICAgICAgY29uc3QgcG9rZW1vbklkID0gcGFyc2VJbnQoZW5lbXkuUG9rZW1vbklkKTtcclxuXHJcbiAgICAgICAgICAvLyBcdTMwRDVcdTMwQTlcdTMwRUJcdTMwRTBcdTMwQzFcdTMwQTdcdTMwRjNcdTMwQjhcdTMwNTdcdTMwNUZcdTMwRERcdTMwRUZcdTMwRUJcdTMwRjNcdTMwOTJcdTk2NjRcdTU5MTZcclxuICAgICAgICAgIGlmIChiYW5uZWQuaW5jbHVkZXMocG9rZW1vbklkKSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgLy8gXHUzMEFCXHUzMEFGXHUzMEVDXHUzMEFBXHUzMEYzXHUzMDZFXHU1ODM0XHU1NDA4XHUzMDAxXHU1RTk3XHUzMDRDXHU1MUZBXHUzMDhCXHUzMEQ1XHUzMEVEXHUzMEEyXHUzMDZFXHUzMDdGXHUzMDZCXHU3RDVFXHUzMDhCXHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHBva2Vtb25JZCA9PSAweDE3ZiAmJlxyXG4gICAgICAgICAgICAhKGZsb29yLkNoYW5jZUtlY2xlb25TaG9wID4gMCAmJiBmbG9vci5GaXhlZEZsb29ySWQgPT0gMCAmJiBmbG9vci5DaGFuY2VNb25zdGVySG91c2UgPCAxMDApXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gXHUzMDZBXHUzMDZCXHUzMDRCXHUzMDZFXHU1ODM0XHU1NDA4XHU5NjY0XHU1OTE2XHJcbiAgICAgICAgICBpZiAocG9rZW1vbklkID09IDB4MjI5KSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICBkYXRhLnB1c2goe1xyXG4gICAgICAgICAgICBkdW5nZW9uOiBwYXJzZUludChkdW5nZW9uLklkKSxcclxuICAgICAgICAgICAgZHVuZ2Vvbk5hbWU6IGR1bmdlb25OYW1lLFxyXG4gICAgICAgICAgICBmbG9vcjogcGFyc2VJbnQoZmxvb3IuRmxvb3JObykgLSBmbG9vclByZXYsXHJcbiAgICAgICAgICAgIGxldmVsOiBwYXJzZUludChlbmVteS5MZXZlbCksXHJcbiAgICAgICAgICAgIHBva2Vtb25JZDogcG9rZW1vbklkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG4vKipcclxuICogXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMDZFXHU1MkU3XHU4QTk4XHU2MEM1XHU1ODMxXHUzMDkyXHU0RjVDXHU2MjEwXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVJlY3J1aXREYXRhKCkge1xyXG4gIGNvbnN0IGRhdGFzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja1Bva2Vtb25EYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBpZCA9IGluZGV4VG9Qb2tlbW9uSWQoaSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZDogaWQsXHJcbiAgICAgIG5hbWU6IFBva2Vtb25EYXRhW2lkXS5OYW1lLFxyXG4gICAgICBzdWJuYW1lOiBQb2tlbW9uRGF0YVtpZF0uU3ViTmFtZSxcclxuICAgICAgZXZvbFRleHQ6IGdldEV2b2xUZXh0RGF0YShpZCksXHJcbiAgICAgIHJlY3J1aXQ6IHNwYXduRGF0YS5maWx0ZXIoKHIpID0+IHIucG9rZW1vbklkID09IGlkKSxcclxuICAgIH07XHJcbiAgICBkYXRhcy5wdXNoKGRhdGEpO1xyXG4gIH1cclxuICByZXR1cm4gZGF0YXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTUyRTdcdThBOThcdTYwQzVcdTU4MzFcdTg5ODFcdTdEMjBcdTMwOTJcdTRGNUNcdTYyMTBcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUd1aWRlKCkge1xyXG4gIGNvbnN0IHJlY3J1aXREYXRhID0gZ2VuZXJhdGVSZWNydWl0RGF0YSgpO1xyXG5cclxuICAvLyBcdTUxNjhcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNJRFx1MzA5Mlx1NTNENlx1NUY5N1xyXG4gIGNvbnN0IGlkcyA9IFtdO1xyXG4gIGNvbnN0IHdyYXBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY3J1aXQtcG9rZW1vbicpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tQb2tlbW9uRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgaWQgPSBpbmRleFRvUG9rZW1vbklkKGkpO1xyXG4gICAgY29uc3Qgc3Bhd24gPSByZWNydWl0RGF0YS5maW5kKChyKSA9PiByLmlkID09IGlkKTtcclxuXHJcbiAgICBpZHMucHVzaChpZCk7XHJcbiAgICBjb25zdCBwb2tlbW9uID0gUG9rZW1vbkRhdGFbaWRdO1xyXG4gICAgY29uc3QgZ3JpZEh0bWwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyZWNydWl0LXBva2Vtb24tZ3JpZCByb3VuZGVkXCIgZGF0YS1pZD1cIiR7aWR9XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlY3J1aXQtcG9rZW1vbi1ncmlkLWlubmVyXCI+XHJcbiAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZWNydWl0LXBva2Vtb24taW1nXCIgc3JjPVwiJHtnZXRQb2tlbW9uU3ByaXRlVXJsKGkpfVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj4ke3Bva2Vtb24uTmFtZX0ke3Bva2Vtb24uU3ViTmFtZSA/IGAoJHtwb2tlbW9uLlN1Yk5hbWV9KWAgOiAnJ308L3NwYW4+XHJcbiAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJyZWNydWl0LXJhdGUgc21hbGwtdGV4dFwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5cdTU3RkFcdTc5MEVcdTUyRTdcdThBOThcdTczODc6ICR7KHBva2Vtb24uUmVjcnVpdFJhdGUxIC8gMTApLnRvRml4ZWQoMSl9JSR7cG9rZW1vbi5SZWNydWl0UmF0ZTEgIT0gcG9rZW1vbi5SZWNydWl0UmF0ZTIgPyBgICgkeyhwb2tlbW9uLlJlY3J1aXRSYXRlMiAvIDEwKS50b0ZpeGVkKDEpfSUpYCA6ICcnfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICBjb25zdCBncmlkID0gcGFyc2VIVE1MKGdyaWRIdG1sKTtcclxuICAgIGNvbnN0IGlubmVyID0gZ3JpZC5xdWVyeVNlbGVjdG9yKCcucmVjcnVpdC1wb2tlbW9uLWdyaWQtaW5uZXInKTtcclxuXHJcbiAgICAvLyBcdTkwMzJcdTUzMTZcdTY1QjlcdTZDRDVcclxuICAgIGNvbnN0IGRpdlJlY3J1aXRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXZSZWNydWl0V3JhcC5jbGFzc0xpc3QuYWRkKCdyZWNydWl0LXdyYXAnLCAnc21hbGwtdGV4dCcpO1xyXG4gICAgaWYgKHNwYXduLmV2b2xUZXh0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgZGl2UmVjcnVpdFdyYXAuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8cCBjbGFzcz1cIm1iLTFcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIHRleHQtYmctZGFuZ2VyIG1lLTFcIj5cdTkwMzJcdTUzMTY8L3NwYW4+JHtzcGF3bi5ldm9sVGV4dH1cclxuICAgICAgPC9wPmA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gXHU1MUZBXHU3M0ZFXHUzMEMwXHUzMEYzXHUzMEI4XHUzMEU3XHUzMEYzXHUzMDkyXHUzMEMwXHUzMEYzXHUzMEI4XHUzMEU3XHUzMEYzXHUzMEZCXHU5NjhFXHU1QzY0XHU5MDIzXHU3NTZBXHUzMDU0XHUzMDY4XHUzMDZCXHUzMEIwXHUzMEVCXHUzMEZDXHUzMEQ3XHU1MzE2XHJcbiAgICBjb25zdCBkdW5nZW9uR3JvdXBzID0gbmV3IE1hcCgpO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHNwYXduLnJlY3J1aXQpIHtcclxuICAgICAgY29uc3QgZHVuZ2VvbklkID0gaXRlbS5kdW5nZW9uO1xyXG4gICAgICBpZiAoIWR1bmdlb25Hcm91cHMuaGFzKGR1bmdlb25JZCkpIHtcclxuICAgICAgICBkdW5nZW9uR3JvdXBzLnNldChkdW5nZW9uSWQsIFtdKTtcclxuICAgICAgfVxyXG4gICAgICBkdW5nZW9uR3JvdXBzLmdldChkdW5nZW9uSWQpLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWNydWl0R3JvdXBzID0ge307XHJcbiAgICBmb3IgKGNvbnN0IFtkdW5nZW9uSWQsIGl0ZW1zXSBvZiBkdW5nZW9uR3JvdXBzLmVudHJpZXMoKSkge1xyXG4gICAgICBjb25zdCBzb3J0ZWQgPSBpdGVtcy5zbGljZSgpLnNvcnQoKGEsIGIpID0+IGEuZmxvb3IgLSBiLmZsb29yKTtcclxuICAgICAgY29uc3QgZ3JvdXBzID0gW107XHJcbiAgICAgIGxldCBjdXJyZW50ID0gW3NvcnRlZFswXV07XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc29ydGVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcHJldiA9IHNvcnRlZFtpIC0gMV0uZmxvb3I7XHJcbiAgICAgICAgY29uc3QgY3VyID0gc29ydGVkW2ldLmZsb29yO1xyXG5cclxuICAgICAgICBpZiAoY3VyID09PSBwcmV2ICsgMSkge1xyXG4gICAgICAgICAgY3VycmVudC5wdXNoKHNvcnRlZFtpXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGdyb3Vwcy5wdXNoKGN1cnJlbnQpO1xyXG4gICAgICAgICAgY3VycmVudCA9IFtzb3J0ZWRbaV1dO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBncm91cHMucHVzaChjdXJyZW50KTtcclxuICAgICAgcmVjcnVpdEdyb3Vwc1tkdW5nZW9uSWRdID0gZ3JvdXBzO1xyXG4gICAgfVxyXG4gICAgLy8gXHUzMEMwXHUzMEYzXHUzMEI4XHUzMEU3XHUzMEYzXHU2QkNFXHJcbiAgICBmb3IgKGNvbnN0IFtkdW5nZW9uSWQsIGdyb3VwXSBvZiBPYmplY3QuZW50cmllcyhyZWNydWl0R3JvdXBzKSkge1xyXG4gICAgICBjb25zdCBkdW5nZW9uID0gRHVuZ2VvbkRhdGFbZHVuZ2VvbklkXTtcclxuICAgICAgY29uc3QgZWxlbWVudEh0bWwgPSBgXHJcbiAgICAgICAgPHAgY2xhc3M9XCJtYi0xXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIHRleHQtYmctcHJpbWFyeSBtZS0xXCI+XHU1MkU3XHU4QTk4PC9zcGFuPlxyXG4gICAgICAgICAgJHtcclxuICAgICAgICAgICAgLy8gXHU5MDUzXHU1MTc3XHU1RkM1XHU5ODA4XHUzMDZFXHU1ODM0XHU1NDA4XHUzMDZBXHUzMDVFXHUzMDZFXHUzMEQxXHUzMEZDXHUzMEM0XHUzMEEyXHUzMEE0XHUzMEIzXHUzMEYzXHU4ODY4XHU3OTNBXHJcbiAgICAgICAgICAgIHBva2Vtb24uQml0X0l0ZW1SZXF1aXJlZFNwYXduaW5nID8gJzxzcGFuIGNsYXNzPVwiaXRlbS1zcHJpdGUgc3ByaXRlLTE4LTNcIj48L3NwYW4+JyA6ICcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAke2R1bmdlb24uSW5OYW1lfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgYDtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IHBhcnNlSFRNTChlbGVtZW50SHRtbCk7XHJcblxyXG4gICAgICBjb25zdCBmbG9vckdyb3VwQXJyID0gW107XHJcbiAgICAgIGZvciAoY29uc3QgZmxvb3JHcm91cCBvZiBncm91cCkge1xyXG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKC4uLmZsb29yR3JvdXAubWFwKCh4KSA9PiB4LmZsb29yKSk7XHJcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4uZmxvb3JHcm91cC5tYXAoKHgpID0+IHguZmxvb3IpKTtcclxuICAgICAgICBjb25zdCBzdGFpcnMgPSBkdW5nZW9uLkZsYWdTdGFpcnMgPyAnJyA6ICdCJztcclxuICAgICAgICBmbG9vckdyb3VwQXJyLnB1c2gobWluICE9IG1heCA/IGAke3N0YWlyc30ke21pbn1GXHVGRjVFJHtzdGFpcnN9JHttYXh9RmAgOiBgJHtzdGFpcnN9JHttaW59RmApO1xyXG4gICAgICB9XHJcbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IGAgJHtmbG9vckdyb3VwQXJyLmpvaW4oJywgJyl9YDtcclxuICAgICAgZGl2UmVjcnVpdFdyYXAuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gXHUzMEE0XHUzMEQ5XHUzMEYzXHUzMEM4XHU1MkU3XHU4QTk4XHJcbiAgICBjb25zdCBldmVudCA9IGV2ZW50UmVjdHVpdC5maW5kKChyKSA9PiByLmlkID09IGlkKTtcclxuICAgIGlmIChldmVudCkge1xyXG4gICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICBwLmNsYXNzTGlzdC5hZGQoJ21iLTEnKTtcclxuICAgICAgcC5pbm5lckhUTUwgKz0gYDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmctaW5kaWdvIG1lLTFcIj5cdTMwQTRcdTMwRDlcdTMwRjNcdTMwQzg8L3NwYW4+JHtldmVudC5jb250ZXh0fWA7XHJcbiAgICAgIGRpdlJlY3J1aXRXcmFwLmFwcGVuZENoaWxkKHApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFx1MzBBQlx1MzBENVx1MzBBN1xyXG4gICAgaWYgKHBhcmFtcy5DQUZFX1JFQ1JVSVRfVEFCTEUuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgIGRpdlJlY3J1aXRXcmFwLmFwcGVuZENoaWxkKFxyXG4gICAgICAgIHBhcnNlSFRNTChgXHJcbiAgICAgICAgICA8cCBjbGFzcz1cIm1iLTEgY2FmZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIHRleHQtYmctc2Vjb25kYXJ5IG1lLTFcIj5cdTMwQUJcdTMwRDVcdTMwQTc8L3NwYW4+XHJcbiAgICAgICAgICAgIFx1MzBDOVx1MzBFQVx1MzBGM1x1MzBBRlx1MzA5Mlx1OThGMlx1MzA5M1x1MzA2N1x1NzhCQVx1NzM4N1x1MzA2N1x1NTJFN1x1OEE5OFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIGApLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFx1MzBCN1x1MzBDQVx1MzBFQVx1MzBBQVxyXG4gICAgY29uc3Qgc2NlbmFyaW8gPSBwYXJzZUhUTUwoYDxwIGNsYXNzPVwic21hbGwtdGV4dCBtYi0xIGZ3LWJvbGRcIj48L3A+YCk7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMocmVjcnVpdEdyb3VwcykubGVuZ3RoID4gMCAmJiBwb2tlbW9uLlVubG9ja1NjZW5hcmlvID4gMCkge1xyXG4gICAgICBzY2VuYXJpby50ZXh0Q29udGVudCA9IGBcdTIwM0Ike3BhcmFtcy5TQ0VOQVJJT19TVFJJTkdTW3Bva2Vtb24uVW5sb2NrU2NlbmFyaW9dfVx1MzA2Qlx1NTFGQVx1NzNGRWA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHUzMERDXHUzMEJGXHUzMEYzXHJcbiAgICBjb25zdCBidG5DaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGJ0bkNoZWNrLmNsYXNzTGlzdC5hZGQoJ3JlY3J1aXQtY2hlY2snKTtcclxuICAgIGJ0bkNoZWNrLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImJpIGJpLWNoZWNrMi1jaXJjbGVcIj48L2k+JztcclxuICAgIGJ0bkNoZWNrLmRhdGFzZXQuaXNBbmltYXRpbmcgPSAnZmFsc2UnO1xyXG4gICAgYnRuQ2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoYnRuQ2hlY2suZGF0YXNldC5pc0FuaW1hdGluZyA9PT0gJ3RydWUnKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IGNoZWNrZXJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBva2Vtb24tZ3JpZFtkYXRhLWlkPVwiJHtpZH1cIl1gKTtcclxuICAgICAgaWYgKGNoZWNrZXJJdGVtKSB7XHJcbiAgICAgICAgYnRuQ2hlY2suZGF0YXNldC5pc0FuaW1hdGluZyA9ICd0cnVlJztcclxuICAgICAgICB0b2dnbGVQb2tlbW9uQ2hlY2tlZChjaGVja2VySXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlubmVyLmFwcGVuZENoaWxkKGRpdlJlY3J1aXRXcmFwKTtcclxuICAgIGlubmVyLmFwcGVuZENoaWxkKHNjZW5hcmlvKTtcclxuICAgIGlubmVyLmFwcGVuZENoaWxkKGJ0bkNoZWNrKTtcclxuICAgIGdyaWQuYXBwZW5kQ2hpbGQoaW5uZXIpO1xyXG5cclxuICAgIHdyYXBFbGVtZW50LmFwcGVuZENoaWxkKGdyaWQpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBQlx1MzBGQ1x1MzA2RVx1NzJCNlx1NjE0Qlx1MzA5Mlx1OEE3M1x1N0QzMFx1NjBDNVx1NTgzMVx1MzA2Qlx1NTQwQ1x1NjcxRlxyXG4gKi9cclxuZnVuY3Rpb24gc3luY0RldGFpbHNXaXRoQ2hlY2tlcigpIHtcclxuICBjb25zdCBkZXRhaWxzSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVjcnVpdC1wb2tlbW9uLWdyaWQnKTtcclxuICBjb25zdCBleGNsdWRlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGVGb3JtU3dpdGNoJyk/LmNoZWNrZWQ7XHJcbiAgY29uc3QgZGV0YWlsVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbC10YWItcGFuZScpO1xyXG4gIGNvbnN0IGlzRGV0YWlsVGFiVmlzaWJsZSA9IGRldGFpbFRhYiAmJiBkZXRhaWxUYWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93Jyk7XHJcblxyXG4gIGRldGFpbHNJdGVtcy5mb3JFYWNoKChkZXRhaWxEaXYpID0+IHtcclxuICAgIGNvbnN0IGlkID0gZGV0YWlsRGl2LmRhdGFzZXQuaWQ7XHJcbiAgICBjb25zdCBjaGVja2VyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBva2Vtb24tZ3JpZFtkYXRhLWlkPVwiJHtpZH1cIl1gKTtcclxuICAgIGNvbnN0IGJ0bkNoZWNrID0gZGV0YWlsRGl2LnF1ZXJ5U2VsZWN0b3IoJy5yZWNydWl0LWNoZWNrJyk7XHJcbiAgICBjb25zdCBmb3JtSWQgPSBwYXJzZUludChjaGVja2VyRGl2LmRhdGFzZXQuZm9ybUlkKTtcclxuXHJcbiAgICBpZiAoY2hlY2tlckRpdikge1xyXG4gICAgICAvLyBcdTU5RkZcdTkwNTVcdTMwNDRcdTMwRDVcdTMwQTNcdTMwRUJcdTMwQkZcdTkwNjlcdTc1MjhcdTRFMkRcdTMwNEJcdTMwNjRcdTU3RkFcdTY3MkNcdTVGNjJcdTMwNjdcdTMwNkFcdTMwNDRcdTU4MzRcdTU0MDhcdTMwNkZcdTk3NUVcdTg4NjhcdTc5M0FcclxuICAgICAgaWYgKGV4Y2x1ZGVGb3JtICYmIGZvcm1JZCAhPT0gMCkge1xyXG4gICAgICAgIGRldGFpbERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaXNDaGVja2VkID0gY2hlY2tlckRpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKTtcclxuICAgICAgaWYgKGlzQ2hlY2tlZCkge1xyXG4gICAgICAgIGlmIChpc0RldGFpbFRhYlZpc2libGUpIHtcclxuICAgICAgICAgIC8vIFx1ODk4MVx1N0QyMFx1MzA2RVx1OUFEOFx1MzA1NVx1MzA2OFx1MzBBRVx1MzBFM1x1MzBDM1x1MzBEN1x1MzA5Mlx1NTNENlx1NUY5N1xyXG4gICAgICAgICAgY29uc3QgaXRlbUhlaWdodCA9IGRldGFpbERpdi5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgLy8gQ1NTIFx1NTkwOVx1NjU3MFx1MzA5Mlx1OEEyRFx1NUI5QVxyXG4gICAgICAgICAgZGV0YWlsRGl2LnN0eWxlLnNldFByb3BlcnR5KCctLWl0ZW0taGVpZ2h0JywgaXRlbUhlaWdodCArICdweCcpO1xyXG5cclxuICAgICAgICAgIC8vIFx1MzBBMlx1MzBDQlx1MzBFMVx1MzBGQ1x1MzBCN1x1MzBFN1x1MzBGM1x1NEVEOFx1MzA0RFx1MzA2N1x1OTc1RVx1ODg2OFx1NzkzQVx1NTMxNlxyXG4gICAgICAgICAgZGV0YWlsRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGluZycpO1xyXG4gICAgICAgICAgZGV0YWlsRGl2LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICdhbmltYXRpb25lbmQnLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGV0YWlsRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgZGV0YWlsRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGluZycpO1xyXG4gICAgICAgICAgICAgIGlmIChidG5DaGVjaykge1xyXG4gICAgICAgICAgICAgICAgYnRuQ2hlY2suZGF0YXNldC5pc0FuaW1hdGluZyA9ICdmYWxzZSc7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IG9uY2U6IHRydWUgfSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFx1MzBCRlx1MzBENlx1MzA0Q1x1OTc1RVx1ODg2OFx1NzkzQVx1MzA2RVx1NTgzNFx1NTQwOFx1MzA2Rlx1MzBBMlx1MzBDQlx1MzBFMVx1MzBGQ1x1MzBCN1x1MzBFN1x1MzBGM1x1MzA2QVx1MzA1N1x1MzA2N1x1OTc1RVx1ODg2OFx1NzkzQVx1NTMxNlxyXG4gICAgICAgICAgZGV0YWlsRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICBpZiAoYnRuQ2hlY2spIHtcclxuICAgICAgICAgICAgYnRuQ2hlY2suZGF0YXNldC5pc0FuaW1hdGluZyA9ICdmYWxzZSc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlx1ODlFM1x1OTY2NFx1NjY0Mlx1MzA2Rlx1ODg2OFx1NzkzQVxyXG4gICAgICAgIGRldGFpbERpdi5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgZGV0YWlsRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGluZycpO1xyXG4gICAgICAgIGlmIChidG5DaGVjaykge1xyXG4gICAgICAgICAgYnRuQ2hlY2suZGF0YXNldC5pc0FuaW1hdGluZyA9ICdmYWxzZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTMwQjlcdTMwRERcdTMwRkNcdTMwRjNcdTMwQzdcdTMwRkNcdTMwQkZcdTMwOTJcdTMwQjBcdTMwRUJcdTMwRkNcdTMwRDdcdTUzMTZcdTMwNTdcdTMwNjZcdTUzRDZcdTVGOTdcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlU3Bhd25Hcm91cCgpIHtcclxuICBjb25zdCBkdW5nZW9uTWFwID0gbmV3IE1hcCgpO1xyXG5cclxuICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc3Bhd25EYXRhKSB7XHJcbiAgICBpZiAoIWR1bmdlb25NYXAuaGFzKGl0ZW0uZHVuZ2VvbikpIHtcclxuICAgICAgZHVuZ2Vvbk1hcC5zZXQoaXRlbS5kdW5nZW9uLCBbXSk7XHJcbiAgICB9XHJcbiAgICBkdW5nZW9uTWFwLmdldChpdGVtLmR1bmdlb24pLnB1c2goaXRlbSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXN1bHQgPSB7fTtcclxuXHJcbiAgZm9yIChjb25zdCBbZHVuZ2VvbiwgZHVuZ2Vvbkl0ZW1zXSBvZiBkdW5nZW9uTWFwLmVudHJpZXMoKSkge1xyXG4gICAgY29uc3QgcG9rZW1vbk1hcCA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICAvLyBkdW5nZW9uIFx1NTE4NVx1MzA2NyBwb2tlbW9uSWQgXHUzMDU0XHUzMDY4XHUzMDZCXHUzMDdFXHUzMDY4XHUzMDgxXHUzMDhCXHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZHVuZ2Vvbkl0ZW1zKSB7XHJcbiAgICAgIGlmICghcG9rZW1vbk1hcC5oYXMoaXRlbS5wb2tlbW9uSWQpKSB7XHJcbiAgICAgICAgcG9rZW1vbk1hcC5zZXQoaXRlbS5wb2tlbW9uSWQsIHtcclxuICAgICAgICAgIHBva2Vtb25JZDogaXRlbS5wb2tlbW9uSWQsXHJcbiAgICAgICAgICBkdW5nZW9uTmFtZTogaXRlbS5kdW5nZW9uTmFtZSxcclxuICAgICAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBwb2tlbW9uTWFwLmdldChpdGVtLnBva2Vtb25JZCkuaXRlbXMucHVzaChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBcdTU0MDQgcG9rZW1vbklkIFx1MzA1NFx1MzA2OFx1MzA2QiBmbG9vcnMgXHUzMDkyXHU5MDIzXHU3NTZBXHUzMEIwXHUzMEVCXHUzMEZDXHUzMEQ3XHU1MzE2XHJcbiAgICBjb25zdCBwb2tlbW9uR3JvdXBzID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBncm91cCBvZiBwb2tlbW9uTWFwLnZhbHVlcygpKSB7XHJcbiAgICAgIGNvbnN0IHNvcnRlZCA9IGdyb3VwLml0ZW1zLnNsaWNlKCkuc29ydCgoYSwgYikgPT4gYS5mbG9vciAtIGIuZmxvb3IpO1xyXG5cclxuICAgICAgY29uc3QgZmxvb3JHcm91cHMgPSBbXTtcclxuICAgICAgbGV0IGN1cnJlbnQgPSBbXTtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzb3J0ZWQpIHtcclxuICAgICAgICBpZiAoY3VycmVudC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIGN1cnJlbnQucHVzaChpdGVtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgcHJldiA9IGN1cnJlbnRbY3VycmVudC5sZW5ndGggLSAxXTtcclxuICAgICAgICAgIGlmIChpdGVtLmZsb29yID09PSBwcmV2LmZsb29yICsgMSkge1xyXG4gICAgICAgICAgICBjdXJyZW50LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmbG9vckdyb3Vwcy5wdXNoKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICBjdXJyZW50ID0gW2l0ZW1dO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoY3VycmVudC5sZW5ndGgpIGZsb29yR3JvdXBzLnB1c2goY3VycmVudCk7XHJcblxyXG4gICAgICBjb25zdCBmbG9vcnMgPSBmbG9vckdyb3Vwcy5tYXAoKGcpID0+IGcubWFwKCh4KSA9PiB4LmZsb29yKSk7XHJcbiAgICAgIGNvbnN0IGxldmVsUmFuZ2VzID0gZmxvb3JHcm91cHMubWFwKChnKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGV2ZWxzID0gZy5tYXAoKHgpID0+IHgubGV2ZWwpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBtaW5MZXZlbDogTWF0aC5taW4oLi4ubGV2ZWxzKSxcclxuICAgICAgICAgIG1heExldmVsOiBNYXRoLm1heCguLi5sZXZlbHMpLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcG9rZW1vbkdyb3Vwcy5wdXNoKHtcclxuICAgICAgICBwb2tlbW9uSWQ6IGdyb3VwLnBva2Vtb25JZCxcclxuICAgICAgICBkdW5nZW9uTmFtZTogZ3JvdXAuZHVuZ2Vvbk5hbWUsXHJcbiAgICAgICAgZmxvb3JzLFxyXG4gICAgICAgIGxldmVsUmFuZ2VzLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkdW5nZW9uIFx1MzA5Mlx1MzBBRFx1MzBGQ1x1MzA2OFx1MzA1N1x1MzA2Nlx1NjgzQ1x1N0QwRCAoXHUzMEFCXHUzMEFGXHUzMEVDXHUzMEFBXHUzMEYzXHUzMDkyXHU1RjhDXHUzMDhEXHUzMDZCXHUzMDU5XHUzMDhCKVxyXG4gICAgcmVzdWx0W2R1bmdlb25dID0gcG9rZW1vbkdyb3Vwc1xyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5wb2tlbW9uSWQgLSBiLnBva2Vtb25JZClcclxuICAgICAgLmZpbHRlcigoeCkgPT4geC5wb2tlbW9uSWQgIT0gMHgxN2YpXHJcbiAgICAgIC5jb25jYXQocG9rZW1vbkdyb3Vwcy5maWx0ZXIoKHgpID0+IHgucG9rZW1vbklkID09IDB4MTdmKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogXHUzMEMwXHUzMEYzXHUzMEI4XHUzMEU3XHUzMEYzXHU1MkU3XHU4QTk4XHU2MEM1XHU1ODMxXHUzMDkyXHU0RjVDXHU2MjEwXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVSZWNydWl0RHVuZ2VvbigpIHtcclxuICBjb25zdCBzcGF3bkdyb3VwID0gZ2VuZXJhdGVTcGF3bkdyb3VwKCk7XHJcblxyXG4gIGNvbnN0IHJlY3J1aXREdW5nZW9uV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNydWl0LWR1bmdlb24nKTtcclxuICBmb3IgKGNvbnN0IGR1bmdlb25JZCBpbiBzcGF3bkdyb3VwKSB7XHJcbiAgICBjb25zdCBkdW5nZW9uTmFtZSA9IER1bmdlb25EYXRhW2R1bmdlb25JZF0uSW5OYW1lO1xyXG5cclxuICAgIC8vIFx1MzBDMFx1MzBGM1x1MzBCOFx1MzBFN1x1MzBGM1x1MzBCMFx1MzBFQVx1MzBDM1x1MzBDOVx1NEY1Q1x1NjIxMFxyXG4gICAgY29uc3QgZHVuZ2VvbkdyaWRIdG1sID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZWNydWl0LWR1bmdlb24tZ3JpZCByb3VuZGVkXCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImR1bmdlb24tbmFtZVwiPiR7ZHVuZ2Vvbk5hbWV9PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBva2Vtb24tZ3JpZC13cmFwXCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gO1xyXG4gICAgY29uc3QgZHVuZ2VvbkdyaWRFbGVtZW50ID0gcGFyc2VIVE1MKGR1bmdlb25HcmlkSHRtbCk7XHJcblxyXG4gICAgLy8gXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMEIwXHUzMEVBXHUzMEMzXHUzMEM5XHU0RjVDXHU2MjEwXHJcbiAgICBjb25zdCBwb2tlbW9uR3JpZFdyYXBFbGVtZW50ID0gZHVuZ2VvbkdyaWRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2tlbW9uLWdyaWQtd3JhcCcpO1xyXG4gICAgZm9yIChjb25zdCBzcGF3biBvZiBzcGF3bkdyb3VwW2R1bmdlb25JZF0pIHtcclxuICAgICAgY29uc3QgcG9rZW1vbklkID0gc3Bhd24ucG9rZW1vbklkO1xyXG4gICAgICBjb25zdCBpbmRleElkID0gcG9rZW1vbklkVG9JbmRleChwb2tlbW9uSWQpO1xyXG4gICAgICBjb25zdCBwb2tlbW9uR3JpZEh0bWwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBva2Vtb24tZ3JpZCBwb3NpdGlvbi1yZWxhdGl2ZVwiIGRhdGEtaWQ9XCIke3Bva2Vtb25JZH1cIlxyXG4gICAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtnZXRQb2tlbW9uU3ByaXRlVXJsKGluZGV4SWQpfSlcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICAgICAgY29uc3QgcG9rZW1vbkdyaWQgPSBwYXJzZUhUTUwocG9rZW1vbkdyaWRIdG1sKTtcclxuICAgICAgcG9rZW1vbkdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFCXHUzMEZDXHUzMDZFXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMDkyXHUzMEM4XHUzMEIwXHUzMEVCXHJcbiAgICAgICAgY29uc3QgY2hlY2tlckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcG9rZW1vbi1saXN0IC5wb2tlbW9uLWdyaWRbZGF0YS1pZD1cIiR7cG9rZW1vbklkfVwiXWApO1xyXG4gICAgICAgIGlmIChjaGVja2VyR3JpZCkge1xyXG4gICAgICAgICAgdG9nZ2xlUG9rZW1vbkNoZWNrZWQoY2hlY2tlckdyaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHBva2Vtb25HcmlkV3JhcEVsZW1lbnQuYXBwZW5kQ2hpbGQocG9rZW1vbkdyaWQpO1xyXG4gICAgfVxyXG4gICAgcmVjcnVpdER1bmdlb25XcmFwLmFwcGVuZENoaWxkKGR1bmdlb25HcmlkRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICAvLyAvLyBcdTMwQTRcdTMwRDlcdTMwRjNcdTMwQzhcdTUyRTdcdThBOThcclxuICAvLyBjb25zdCBldmVudEdyaWRIdG1sID0gYFxyXG4gIC8vICAgPGRpdiBjbGFzcz1cInJlY3J1aXQtZHVuZ2Vvbi1ncmlkIHJvdW5kZWRcIj5cclxuICAvLyAgICAgPHAgY2xhc3M9XCJkdW5nZW9uLW5hbWVcIj5cdTMwQTRcdTMwRDlcdTMwRjNcdTMwQzg8L3A+XHJcbiAgLy8gICAgIDxkaXYgY2xhc3M9XCJwb2tlbW9uLWdyaWQtd3JhcFwiPlxyXG4gIC8vICAgICA8L2Rpdj5cclxuICAvLyAgIDwvZGl2PmA7XHJcbiAgLy8gY29uc3QgZXZlbnRHcmlkRWxlbWVudCA9IHBhcnNlSFRNTChldmVudEdyaWRIdG1sKTtcclxuICAvLyBjb25zdCBldmVudFBva2Vtb25HcmlkV3JhcEVsZW1lbnQgPSBldmVudEdyaWRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2tlbW9uLWdyaWQtd3JhcCcpO1xyXG4gIC8vIGZvciAoY29uc3QgZXZlbnQgb2YgZXZlbnRSZWN0dWl0KSB7XHJcbiAgLy8gICBjb25zdCBwb2tlbW9uSWQgPSBldmVudC5pZDtcclxuICAvLyAgIGNvbnN0IGluZGV4SWQgPSBwb2tlbW9uSWRUb0luZGV4KHBva2Vtb25JZCk7XHJcbiAgLy8gICBjb25zdCBwb2tlbW9uR3JpZEh0bWwgPSBgXHJcbiAgLy8gICAgICAgPGRpdiBjbGFzcz1cInBva2Vtb24tZ3JpZCBwb3NpdGlvbi1yZWxhdGl2ZVwiIGRhdGEtaWQ9XCIke3Bva2Vtb25JZH1cIlxyXG4gIC8vICAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtnZXRQb2tlbW9uU3ByaXRlVXJsKGluZGV4SWQpfSlcIj5cclxuICAvLyAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgYDtcclxuICAvLyAgIGNvbnN0IHBva2Vtb25HcmlkID0gcGFyc2VIVE1MKHBva2Vtb25HcmlkSHRtbCk7XHJcbiAgLy8gICBwb2tlbW9uR3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAvLyAgICAgLy8gXHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFCXHUzMEZDXHUzMDZFXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMDkyXHUzMEM4XHUzMEIwXHUzMEVCXHJcbiAgLy8gICAgIGNvbnN0IGNoZWNrZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Bva2Vtb24tbGlzdCAucG9rZW1vbi1ncmlkW2RhdGEtaWQ9XCIke3Bva2Vtb25JZH1cIl1gKTtcclxuICAvLyAgICAgaWYgKGNoZWNrZXJHcmlkKSB7XHJcbiAgLy8gICAgICAgdG9nZ2xlUG9rZW1vbkNoZWNrZWQoY2hlY2tlckdyaWQpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KTtcclxuICAvLyAgIGV2ZW50UG9rZW1vbkdyaWRXcmFwRWxlbWVudC5hcHBlbmRDaGlsZChwb2tlbW9uR3JpZCk7XHJcbiAgLy8gfVxyXG4gIC8vIHJlY3J1aXREdW5nZW9uV3JhcC5hcHBlbmRDaGlsZChldmVudEdyaWRFbGVtZW50KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NTJFN1x1OEE5OFx1NjVCOVx1NkNENVx1MzBCRlx1MzBENlx1MzA2RVx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlx1NzJCNlx1NkNDMVx1MzA5Mlx1NTQwQ1x1NjcxRlxyXG4gKi9cclxuZnVuY3Rpb24gc3luY1JlY3J1aXREZXRhaWwocG9rZW1vbklkLCBpc0NoZWNrZWQpIHtcclxuICBjb25zdCByZWNydWl0R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNyZWNydWl0LWR1bmdlb24gLnJlY3J1aXQtcG9rZW1vbi1ncmlkW2RhdGEtaWQ9XCIke3Bva2Vtb25JZH1cIl1gKTtcclxuICBpZiAocmVjcnVpdEdyaWQpIHtcclxuICAgIGlmIChpc0NoZWNrZWQpIHtcclxuICAgICAgcmVjcnVpdEdyaWQuY2xhc3NMaXN0LmFkZCgnaGlkaW5nJyk7XHJcbiAgICAgIHJlY3J1aXRHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgJ2FuaW1hdGlvbmVuZCcsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgcmVjcnVpdEdyaWQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgIHJlY3J1aXRHcmlkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGluZycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBvbmNlOiB0cnVlIH0sXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZWNydWl0R3JpZC5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgIHJlY3J1aXRHcmlkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGluZycpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1MzBDMFx1MzBGM1x1MzBCOFx1MzBFN1x1MzBGM1x1MzBCRlx1MzBENlx1MzA2RVx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlx1NzJCNlx1NkNDMVx1MzA5Mlx1NTQwQ1x1NjcxRlxyXG4gKi9cclxuZnVuY3Rpb24gc3luY0R1bmdlb25EZXRhaWwocG9rZW1vbklkLCBpc0NoZWNrZWQpIHtcclxuICBjb25zdCBkdW5nZW9uR3JpZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjcmVjcnVpdC1kdW5nZW9uIC5wb2tlbW9uLWdyaWRbZGF0YS1pZD1cIiR7cG9rZW1vbklkfVwiXWApO1xyXG4gIGR1bmdlb25Hcmlkcy5mb3JFYWNoKChncmlkKSA9PiB7XHJcbiAgICBpZiAoaXNDaGVja2VkKSB7XHJcbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTMwQzFcdTMwQTdcdTMwQzNcdTMwQUJcdTMwRkMgLT4gXHUzMEMwXHUzMEYzXHUzMEI4XHUzMEU3XHUzMEYzIFx1MzA3OFx1NTQwQ1x1NjcxRlxyXG4gKi9cclxuZnVuY3Rpb24gc3luY0R1bmdlb25XaXRoQ2hlY2tlcigpIHtcclxuICBjb25zdCBkdW5nZW9uR3JpZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcmVjcnVpdC1kdW5nZW9uIC5wb2tlbW9uLWdyaWQnKTtcclxuICBkdW5nZW9uR3JpZHMuZm9yRWFjaCgoZ3JpZCkgPT4ge1xyXG4gICAgY29uc3QgcG9rZW1vbklkID0gZ3JpZC5kYXRhc2V0LmlkO1xyXG4gICAgY29uc3QgY2hlY2tlckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcG9rZW1vbi1saXN0IC5wb2tlbW9uLWdyaWRbZGF0YS1pZD1cIiR7cG9rZW1vbklkfVwiXWApO1xyXG5cclxuICAgIGlmIChjaGVja2VyR3JpZCAmJiBjaGVja2VyR3JpZC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKSkge1xyXG4gICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogXHU4QTcyXHU1RjUzXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzXHUzMDZFXHU5MDMyXHU1MzE2XHU2MEM1XHU1ODMxXHUzMDkyXHUzMEM2XHUzMEFEXHUzMEI5XHUzMEM4XHUzMDY3XHU1M0Q2XHU1Rjk3XHJcbiAqIEBwYXJhbSB7Kn0gaWQgXHUzMEREXHUzMEIxXHUzMEUyXHUzMEYzSURcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIGdldEV2b2xUZXh0RGF0YShpZCkge1xyXG4gIGNvbnN0IHBva2Vtb24gPSBQb2tlbW9uRGF0YVtpZF07XHJcbiAgY29uc3QgcHJldkV2b2wgPSBQb2tlbW9uRGF0YVtwYXJzZUludChwb2tlbW9uLlByZUV2b0luZGV4KV07XHJcbiAgY29uc3QgZXZvbE1ldGhvZCA9IHBhcnNlSW50KHBva2Vtb24uRXZvTWV0aG9kKTtcclxuICBjb25zdCBldm9sUGFyYW0gPSBbcGFyc2VJbnQocG9rZW1vbi5Fdm9QYXJhbTEpLCBwYXJzZUludChwb2tlbW9uLkV2b1BhcmFtMildO1xyXG5cclxuICBsZXQgdGV4dCA9ICcnO1xyXG4gIGlmIChwcmV2RXZvbC5JZCA+IDApIHtcclxuICAgIGNvbnN0IHByZXZFdm9sTmFtZSA9IHByZXZFdm9sLk5hbWU7XHJcbiAgICBsZXQgZXZvbFN0ciA9ICcnO1xyXG4gICAgc3dpdGNoIChldm9sTWV0aG9kKSB7XHJcbiAgICAgIGNhc2UgMDogLy8gXHUzMENDXHUzMEIxXHUzMENCXHUzMEYzXHU3NTI4XHJcbiAgICAgICAgZXZvbFN0ciA9IGBcdTkwMzJcdTUzMTZcdTMwNjdcdTgxRUFcdTUyRDVcdTc2ODRcdTMwNkJcdTUyQTBcdTUxNjVgO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDE6IC8vIFx1MzBFQ1x1MzBEOVx1MzBFQlxyXG4gICAgICAgIGV2b2xTdHIgPSBgTHYke2V2b2xQYXJhbVswXX1gO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDI6IC8vIFx1MzA0Qlx1MzA1N1x1MzA1M1x1MzA1NVxyXG4gICAgICAgIGV2b2xTdHIgPSBgXHUzMDRCXHUzMDU3XHUzMDUzXHUzMDU1XHUyNjA1JHtnZXRJUVN0YXJDb3VudChldm9sUGFyYW1bMF0pLnRvRml4ZWQoMSl9KCR7ZXZvbFBhcmFtWzBdfSlcdTRFRTVcdTRFMEFgO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDM6IC8vIFx1OTA1M1x1NTE3N1xyXG4gICAgICAgIGNvbnN0IGl0ZW1TdHIgPSBJdGVtRGF0YVtldm9sUGFyYW1bMF1dLk5hbWU7XHJcbiAgICAgICAgZXZvbFN0ciA9IGAke2l0ZW1TdHJ9YDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSA0OiAvLyBcdTMwQkZcdTMwREVcdTMwRjNcdTMwQkZcdTc1MjhcclxuICAgICAgICBjb25zdCB0YXJnZXRTdHIgPSBQb2tlbW9uRGF0YVtldm9sUGFyYW1bMF1dLk5hbWU7XHJcbiAgICAgICAgZXZvbFN0ciA9IGAke3RhcmdldFN0cn1cdTMwNENcdTRFRjJcdTk1OTNcdTMwNkJcdTMwNDRcdTMwOEJgO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDU6IC8vIFx1MzA2NFx1MzA0Nlx1MzA1N1x1MzA5M1x1MzBCMVx1MzBGQ1x1MzBENlx1MzBFQlxyXG4gICAgICAgIGV2b2xTdHIgPSBgXHUzMDY0XHUzMDQ2XHUzMDU3XHUzMDkzXHUzMEIxXHUzMEZDXHUzMEQ2XHUzMEVCYDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBcdTdCMkNcdTRFOENcdTY3NjFcdTRFRjZcclxuICAgIGlmIChldm9sTWV0aG9kID49IDAgJiYgZXZvbE1ldGhvZCA8PSAzICYmIGV2b2xQYXJhbVsxXSA+IDApIHtcclxuICAgICAgZXZvbFN0ciArPSBgICsgJHtldm9sdmUyU3RyaW5nW2V2b2xQYXJhbVsxXV19YDtcclxuICAgIH1cclxuXHJcbiAgICB0ZXh0ID0gYCR7cHJldkV2b2xOYW1lfSAoJHtldm9sU3RyfSlgO1xyXG4gICAgLy9jb25zb2xlLmxvZyhgJHtwb2tlbW9uLk5hbWV9OiAke3RleHR9YCwgZXZvbE1ldGhvZCwgZXZvbFBhcmFtKTtcclxuICB9XHJcbiAgcmV0dXJuIHRleHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTMwRERcdTMwQjFcdTMwRTJcdTMwRjNcdTMwNkVcdTMwQjlcdTMwRDdcdTMwRTlcdTMwQTRcdTMwQzhcdTc1M0JcdTUwQ0ZVUkxcdTMwOTJcdTUzRDZcdTVGOTcgKGJ5IFBva2VBUEkpXHJcbiAqIEBwYXJhbSB7Kn0gaW5kZXhJZFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UG9rZW1vblNwcml0ZVVybChpbmRleElkKSB7XHJcbiAgY29uc3QgaW1hZ2VQb2tlbW9uRGF0YSA9IGNoZWNrUG9rZW1vbkRhdGFbaW5kZXhJZF07XHJcbiAgY29uc3QgaW1hZ2VVcmwgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3ZlcnNpb25zL2dlbmVyYXRpb24tdmlpL2ljb25zLyR7aW1hZ2VQb2tlbW9uRGF0YS5iYXNlSWR9JHtpbWFnZVBva2Vtb25EYXRhLmltYWdlU3VmZml4fS5wbmdgO1xyXG4gIHJldHVybiBpbWFnZVVybDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEpTT05cdTMwQzdcdTMwRkNcdTMwQkZcdTMwOTJcdTUzRDZcdTVGOTdcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoSnNvbkRhdGEoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IFtwb2tlbW9uRGF0YSwgaXRlbURhdGEsIGR1bmdlb25EYXRhLCBmbG9vckRhdGEsIG1hcHBhU0RhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICBnZXRKc29uRGF0YSgncG9rZW1vbicpLFxyXG4gICAgICBnZXRKc29uRGF0YSgnaXRlbScpLFxyXG4gICAgICBnZXRKc29uRGF0YSgnZHVuZ2VvbicpLFxyXG4gICAgICBnZXRKc29uRGF0YSgnZmxvb3InKSxcclxuICAgICAgZ2V0SnNvbkRhdGEoJ21hcHBhX3MnKSxcclxuICAgIF0pO1xyXG4gICAgd2luZG93LlBva2Vtb25EYXRhID0gcG9rZW1vbkRhdGE7XHJcbiAgICB3aW5kb3cuSXRlbURhdGEgPSBpdGVtRGF0YTtcclxuICAgIHdpbmRvdy5EdW5nZW9uRGF0YSA9IGR1bmdlb25EYXRhO1xyXG4gICAgd2luZG93LkZsb29yRGF0YSA9IGZsb29yRGF0YTtcclxuICAgIHdpbmRvdy5NYXBwYVNEYXRhID0gbWFwcGFTRGF0YTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gIH1cclxufVxyXG5cclxubG9hZFBva2Vtb24oKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7QUFHQSxNQUFNLGlCQUFpQjtBQUFBLElBQ3JCLFNBQVM7QUFBQSxJQUNULE1BQU07QUFB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QUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFHQSxNQUFNLGVBQWU7QUFBQSxJQUNuQjtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7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UztBQUM5QixVQUFJLFVBQVU7QUFDZCxjQUFRLFlBQVk7QUFBQSxRQUNsQixLQUFLO0FBQ0gsb0JBQVU7QUFDVjtBQUFBLFFBQ0YsS0FBSztBQUNILG9CQUFVLEtBQUssVUFBVSxDQUFDLENBQUM7QUFDM0I7QUFBQSxRQUNGLEtBQUs7QUFDSCxvQkFBVSxpQ0FBUSxlQUFlLFVBQVUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQztBQUN6RTtBQUFBLFFBQ0YsS0FBSztBQUNILGdCQUFNLFVBQVUsU0FBUyxVQUFVLENBQUMsQ0FBQyxFQUFFO0FBQ3ZDLG9CQUFVLEdBQUcsT0FBTztBQUNwQjtBQUFBLFFBQ0YsS0FBSztBQUNILGdCQUFNLFlBQVksWUFBWSxVQUFVLENBQUMsQ0FBQyxFQUFFO0FBQzVDLG9CQUFVLEdBQUcsU0FBUztBQUN0QjtBQUFBLFFBQ0YsS0FBSztBQUNILG9CQUFVO0FBQ1Y7QUFBQSxNQUNKO0FBR0EsVUFBSSxjQUFjLEtBQUssY0FBYyxLQUFLLFVBQVUsQ0FBQyxJQUFJLEdBQUc7QUFDMUQsbUJBQVcsTUFBTSxjQUFjLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFBQSxNQUM5QztBQUVBLGFBQU8sR0FBRyxZQUFZLEtBQUssT0FBTztBQUFBLElBRXBDO0FBQ0EsV0FBTztBQUFBLEVBQ1Q7QUFPQSxXQUFTLG9CQUFvQixTQUFTO0FBQ3BDLFVBQU0sbUJBQW1CLGlCQUFpQixPQUFPO0FBQ2pELFVBQU0sV0FBVywwR0FBMEcsaUJBQWlCLE1BQU0sR0FBRyxpQkFBaUIsV0FBVztBQUNqTCxXQUFPO0FBQUEsRUFDVDtBQUtBLGlCQUFlLGdCQUFnQjtBQUM3QixRQUFJO0FBQ0YsWUFBTSxDQUFDLGFBQWEsVUFBVSxhQUFhLFdBQVcsVUFBVSxJQUFJLE1BQU0sUUFBUSxJQUFJO0FBQUEsUUFDcEYsWUFBWSxTQUFTO0FBQUEsUUFDckIsWUFBWSxNQUFNO0FBQUEsUUFDbEIsWUFBWSxTQUFTO0FBQUEsUUFDckIsWUFBWSxPQUFPO0FBQUEsUUFDbkIsWUFBWSxTQUFTO0FBQUEsTUFDdkIsQ0FBQztBQUNELGFBQU8sY0FBYztBQUNyQixhQUFPLFdBQVc7QUFDbEIsYUFBTyxjQUFjO0FBQ3JCLGFBQU8sWUFBWTtBQUNuQixhQUFPLGFBQWE7QUFBQSxJQUN0QixTQUFTLEdBQUc7QUFDVixjQUFRLE1BQU0sQ0FBQztBQUFBLElBQ2pCO0FBQUEsRUFDRjtBQUVBLGNBQVk7IiwKICAibmFtZXMiOiBbImkiXQp9Cg==
