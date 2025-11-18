(() => {
  // <stdin>
  function getUnownSuffix(index) {
    if (index < 25) {
      return "-" + String.fromCharCode(97 + index + 1);
    } else if (index === 25) {
      return "-exclamation";
    } else {
      return "-question";
    }
  }
  var pokemonData = [
    // Regular Pokemon 1-492
    ...Array.from({ length: 492 }, (_, i) => ({
      baseId: i + 1,
      formId: 0,
      sortId: i + 1,
      imageSuffix: ""
    })),
    // Unown forms (B-Z, !, ?)
    ...Array.from({ length: 27 }, (_, i) => ({
      baseId: 201,
      formId: i + 1,
      sortId: 201 + (i + 1) / 100,
      imageSuffix: getUnownSuffix(i)
    })),
    // Burmy/Wormadam forms
    { baseId: 412, formId: 1, sortId: 412.1, imageSuffix: "-sandy" },
    { baseId: 412, formId: 2, sortId: 412.2, imageSuffix: "-trash" },
    { baseId: 413, formId: 1, sortId: 413.1, imageSuffix: "-sandy" },
    { baseId: 413, formId: 2, sortId: 413.2, imageSuffix: "-trash" },
    // Shellos/Gastrodon forms
    { baseId: 422, formId: 1, sortId: 422.1, imageSuffix: "-east" },
    { baseId: 423, formId: 1, sortId: 423.1, imageSuffix: "-east" }
  ].sort((a, b) => a.sortId - b.sortId);
  async function loadPokemon() {
    const container = document.getElementById("pokemon-list");
    container.innerHTML = "";
    for (let [i, pokemon] of pokemonData.entries()) {
      const div = document.createElement("div");
      div.className = "pokemon-item rounded p-1";
      div.style.backgroundColor = "var(--bs-secondary-bg)";
      div.dataset.index = i;
      div.dataset.formId = pokemon.formId;
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${pokemon.baseId}${pokemon.imageSuffix}.png`;
      div.style.backgroundImage = `url(${imageUrl})`;
      container.appendChild(div);
      div.addEventListener("click", () => {
        const isSelected = div.style.backgroundColor === "var(--bs-warning)";
        div.style.backgroundColor = isSelected ? "var(--bs-secondary-bg)" : "var(--bs-warning)";
        saveState();
        updateProgress();
      });
    }
    loadState();
    restoreFormSwitch();
    filterFormVariants(document.getElementById("toggleFormSwitch").checked, true);
    updateProgress();
  }
  function saveState() {
    const items = document.querySelectorAll(".pokemon-item");
    let bin = "";
    for (let div of items) {
      bin += div.style.backgroundColor === "var(--bs-warning)" ? "1" : "0";
    }
    const compressed = LZString.compressToBase64(bin);
    localStorage.setItem("pokemon-checklist", compressed);
  }
  function loadState() {
    const items = document.querySelectorAll(".pokemon-item");
    const compressed = localStorage.getItem("pokemon-checklist");
    const bin = LZString.decompressFromBase64(compressed);
    if (!bin || bin.length !== items.length) return;
    for (let i = 0; i < items.length; ++i) {
      if (bin[i] === "1") items[i].style.backgroundColor = "var(--bs-warning)";
      else items[i].style.backgroundColor = "var(--bs-secondary-bg)";
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
    const items = Array.from(document.querySelectorAll(".pokemon-item")).filter(
      (div) => !excludeForm || div.dataset.formId === "0"
    );
    let checked = 0;
    for (let div of items) {
      if (div.style.backgroundColor === "var(--bs-warning)") checked++;
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
    const itemsLen = document.querySelectorAll(".pokemon-item").length;
    if (!/^[01]+$/i.test(bin) || bin.length !== itemsLen) {
      errorDiv.textContent = "\u30A4\u30F3\u30DD\u30FC\u30C8\u5931\u6557: \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\u3002";
      errorDiv.style.display = "block";
      return;
    }
    localStorage.setItem("pokemon-checklist", value);
    importModal.hide();
    loadState();
    updateProgress();
  }
  function setAllMarked(marked) {
    const items = document.querySelectorAll(".pokemon-item");
    let bin = "";
    for (let div of items) {
      bin += marked ? "1" : "0";
    }
    const compressed = LZString.compressToBase64(bin);
    localStorage.setItem("pokemon-checklist", compressed);
    loadState();
    updateProgress();
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
    const items = document.querySelectorAll(".pokemon-item");
    for (let div of items) {
      if (excludeForm && div.dataset.formId !== "0") {
        div.style.display = "none";
      } else {
        div.style.display = "";
      }
    }
  }
  loadPokemon();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiPHN0ZGluPiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZnVuY3Rpb24gZ2V0VW5vd25TdWZmaXgoaW5kZXgpIHtcclxuICBpZiAoaW5kZXggPCAyNSkge1xyXG4gICAgLy8gQi1aXHJcbiAgICByZXR1cm4gJy0nICsgU3RyaW5nLmZyb21DaGFyQ29kZSg5NyArIGluZGV4ICsgMSk7IC8vIDk3ID0gJ2EnXHJcbiAgfSBlbHNlIGlmIChpbmRleCA9PT0gMjUpIHtcclxuICAgIHJldHVybiAnLWV4Y2xhbWF0aW9uJztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuICctcXVlc3Rpb24nO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcG9rZW1vbkRhdGEgPSBbXHJcbiAgLy8gUmVndWxhciBQb2tlbW9uIDEtNDkyXHJcbiAgLi4uQXJyYXkuZnJvbSh7IGxlbmd0aDogNDkyIH0sIChfLCBpKSA9PiAoe1xyXG4gICAgYmFzZUlkOiBpICsgMSxcclxuICAgIGZvcm1JZDogMCxcclxuICAgIHNvcnRJZDogaSArIDEsXHJcbiAgICBpbWFnZVN1ZmZpeDogJycsXHJcbiAgfSkpLFxyXG4gIC8vIFVub3duIGZvcm1zIChCLVosICEsID8pXHJcbiAgLi4uQXJyYXkuZnJvbSh7IGxlbmd0aDogMjcgfSwgKF8sIGkpID0+ICh7XHJcbiAgICBiYXNlSWQ6IDIwMSxcclxuICAgIGZvcm1JZDogaSArIDEsXHJcbiAgICBzb3J0SWQ6IDIwMSArIChpICsgMSkgLyAxMDAsXHJcbiAgICBpbWFnZVN1ZmZpeDogZ2V0VW5vd25TdWZmaXgoaSksXHJcbiAgfSkpLFxyXG4gIC8vIEJ1cm15L1dvcm1hZGFtIGZvcm1zXHJcbiAgeyBiYXNlSWQ6IDQxMiwgZm9ybUlkOiAxLCBzb3J0SWQ6IDQxMi4xLCBpbWFnZVN1ZmZpeDogJy1zYW5keScgfSxcclxuICB7IGJhc2VJZDogNDEyLCBmb3JtSWQ6IDIsIHNvcnRJZDogNDEyLjIsIGltYWdlU3VmZml4OiAnLXRyYXNoJyB9LFxyXG4gIHsgYmFzZUlkOiA0MTMsIGZvcm1JZDogMSwgc29ydElkOiA0MTMuMSwgaW1hZ2VTdWZmaXg6ICctc2FuZHknIH0sXHJcbiAgeyBiYXNlSWQ6IDQxMywgZm9ybUlkOiAyLCBzb3J0SWQ6IDQxMy4yLCBpbWFnZVN1ZmZpeDogJy10cmFzaCcgfSxcclxuICAvLyBTaGVsbG9zL0dhc3Ryb2RvbiBmb3Jtc1xyXG4gIHsgYmFzZUlkOiA0MjIsIGZvcm1JZDogMSwgc29ydElkOiA0MjIuMSwgaW1hZ2VTdWZmaXg6ICctZWFzdCcgfSxcclxuICB7IGJhc2VJZDogNDIzLCBmb3JtSWQ6IDEsIHNvcnRJZDogNDIzLjEsIGltYWdlU3VmZml4OiAnLWVhc3QnIH0sXHJcbl0uc29ydCgoYSwgYikgPT4gYS5zb3J0SWQgLSBiLnNvcnRJZCk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkUG9rZW1vbigpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9rZW1vbi1saXN0Jyk7XHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gIGZvciAobGV0IFtpLCBwb2tlbW9uXSBvZiBwb2tlbW9uRGF0YS5lbnRyaWVzKCkpIHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTmFtZSA9ICdwb2tlbW9uLWl0ZW0gcm91bmRlZCBwLTEnO1xyXG4gICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1icy1zZWNvbmRhcnktYmcpJztcclxuICAgIGRpdi5kYXRhc2V0LmluZGV4ID0gaTtcclxuICAgIGRpdi5kYXRhc2V0LmZvcm1JZCA9IHBva2Vtb24uZm9ybUlkO1xyXG5cclxuICAgIGNvbnN0IGltYWdlVXJsID0gYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLXZpaS9pY29ucy8ke3Bva2Vtb24uYmFzZUlkfSR7cG9rZW1vbi5pbWFnZVN1ZmZpeH0ucG5nYDtcclxuICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2VVcmx9KWA7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBpc1NlbGVjdGVkID0gZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJ3ZhcigtLWJzLXdhcm5pbmcpJztcclxuICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGlzU2VsZWN0ZWQgPyAndmFyKC0tYnMtc2Vjb25kYXJ5LWJnKScgOiAndmFyKC0tYnMtd2FybmluZyknO1xyXG4gICAgICBzYXZlU3RhdGUoKTtcclxuICAgICAgdXBkYXRlUHJvZ3Jlc3MoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZFN0YXRlKCk7XHJcbiAgcmVzdG9yZUZvcm1Td2l0Y2goKTtcclxuICBmaWx0ZXJGb3JtVmFyaWFudHMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZUZvcm1Td2l0Y2gnKS5jaGVja2VkLCB0cnVlKTtcclxuICB1cGRhdGVQcm9ncmVzcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlU3RhdGUoKSB7XHJcbiAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9rZW1vbi1pdGVtJyk7XHJcbiAgbGV0IGJpbiA9ICcnO1xyXG4gIGZvciAobGV0IGRpdiBvZiBpdGVtcykge1xyXG4gICAgYmluICs9IGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09ICd2YXIoLS1icy13YXJuaW5nKScgPyAnMScgOiAnMCc7XHJcbiAgfVxyXG4gIGNvbnN0IGNvbXByZXNzZWQgPSBMWlN0cmluZy5jb21wcmVzc1RvQmFzZTY0KGJpbik7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bva2Vtb24tY2hlY2tsaXN0JywgY29tcHJlc3NlZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRTdGF0ZSgpIHtcclxuICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb2tlbW9uLWl0ZW0nKTtcclxuICBjb25zdCBjb21wcmVzc2VkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bva2Vtb24tY2hlY2tsaXN0Jyk7XHJcbiAgY29uc3QgYmluID0gTFpTdHJpbmcuZGVjb21wcmVzc0Zyb21CYXNlNjQoY29tcHJlc3NlZCk7XHJcblxyXG4gIGlmICghYmluIHx8IGJpbi5sZW5ndGggIT09IGl0ZW1zLmxlbmd0aCkgcmV0dXJuO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyArK2kpIHtcclxuICAgIGlmIChiaW5baV0gPT09ICcxJykgaXRlbXNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLWJzLXdhcm5pbmcpJztcclxuICAgIGVsc2UgaXRlbXNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLWJzLXNlY29uZGFyeS1iZyknO1xyXG4gIH1cclxufVxyXG5cclxuLy8gXHU1OUZGXHU5MDU1XHUzMDQ0XHUzMEI5XHUzMEE0XHUzMEMzXHUzMEMxXHUzMDZFXHU3MkI2XHU2MTRCXHUzMDkybG9jYWxTdG9yYWdlXHUzMDY3XHU0RkREXHU2MzAxXHUzMEZCXHU1RkE5XHU1MTQzXHJcbmZ1bmN0aW9uIHNhdmVGb3JtU3dpdGNoU3RhdGUoY2hlY2tlZCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb2tlbW9uLWNoZWNrbGlzdC1mb3JtU3dpdGNoJywgY2hlY2tlZCA/ICcxJyA6ICcwJyk7XHJcbn1cclxuZnVuY3Rpb24gcmVzdG9yZUZvcm1Td2l0Y2goKSB7XHJcbiAgY29uc3QgdG9nZ2xlRm9ybVN3aXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGVGb3JtU3dpdGNoJyk7XHJcbiAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9rZW1vbi1jaGVja2xpc3QtZm9ybVN3aXRjaCcpO1xyXG4gIGlmICh0b2dnbGVGb3JtU3dpdGNoICYmIHNhdmVkICE9PSBudWxsKSB7XHJcbiAgICB0b2dnbGVGb3JtU3dpdGNoLmNoZWNrZWQgPSBzYXZlZCA9PT0gJzEnO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3MoKSB7XHJcbiAgY29uc3QgZXhjbHVkZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlRm9ybVN3aXRjaCcpPy5jaGVja2VkO1xyXG4gIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9rZW1vbi1pdGVtJykpLmZpbHRlcihcclxuICAgIChkaXYpID0+ICFleGNsdWRlRm9ybSB8fCBkaXYuZGF0YXNldC5mb3JtSWQgPT09ICcwJyxcclxuICApO1xyXG4gIGxldCBjaGVja2VkID0gMDtcclxuICBmb3IgKGxldCBkaXYgb2YgaXRlbXMpIHtcclxuICAgIGlmIChkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAndmFyKC0tYnMtd2FybmluZyknKSBjaGVja2VkKys7XHJcbiAgfVxyXG4gIGxldCBwZXJjZW50ID0gTWF0aC5mbG9vcigoY2hlY2tlZCAvIGl0ZW1zLmxlbmd0aCkgKiAxMDApO1xyXG4gIGlmIChjaGVja2VkID09PSBpdGVtcy5sZW5ndGggJiYgaXRlbXMubGVuZ3RoID4gMCkgcGVyY2VudCA9IDEwMDtcclxuICBjb25zdCBiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MtYmFyJyk7XHJcbiAgY29uc3QgcGVyY2VudFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MtcGVyY2VudCcpO1xyXG4gIGNvbnN0IGNvdW50VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzcy1jb3VudCcpO1xyXG4gIGJhci5zdHlsZS53aWR0aCA9IHBlcmNlbnQgKyAnJSc7XHJcbiAgYmFyLnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZW5vdycsIHBlcmNlbnQpO1xyXG4gIHBlcmNlbnRUZXh0LnRleHRDb250ZW50ID0gcGVyY2VudCArICclJztcclxuICBjb3VudFRleHQudGV4dENvbnRlbnQgPSBjaGVja2VkICsgJy8nICsgaXRlbXMubGVuZ3RoO1xyXG4gIGlmIChwZXJjZW50ID09PSAxMDApIHtcclxuICAgIGJhci5jbGFzc0xpc3QucmVtb3ZlKCdiZy1wcmltYXJ5Jyk7XHJcbiAgICBiYXIuY2xhc3NMaXN0LmFkZCgnYmctd2FybmluZycpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBiYXIuY2xhc3NMaXN0LmFkZCgnYmctcHJpbWFyeScpO1xyXG4gICAgYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLXdhcm5pbmcnKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFx1MzBFMlx1MzBGQ1x1MzBDMFx1MzBFQlx1ODg2OFx1NzkzQVx1NzUyOEJvb3RzdHJhcFxyXG5sZXQgZXhwb3J0TW9kYWwsIGltcG9ydE1vZGFsO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGV4cG9ydE1vZGFsID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0TW9kYWwnKSk7XHJcbiAgaW1wb3J0TW9kYWwgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnRNb2RhbCcpKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0LWJ0bicpLm9uY2xpY2sgPSBzaG93RXhwb3J0TW9kYWw7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydC1idG4nKS5vbmNsaWNrID0gc2hvd0ltcG9ydE1vZGFsO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnRGb3JtJykub25zdWJtaXQgPSBoYW5kbGVJbXBvcnQ7XHJcblxyXG4gIC8vIFx1MzBBMlx1MzBCM1x1MzBGQ1x1MzBDN1x1MzBBM1x1MzBBQVx1MzBGM1x1NzdFMlx1NTM3MFx1MzA2RVx1NTZERVx1OEVFMlx1NTIzNlx1NUZBMVxyXG4gIGNvbnN0IGNvbGxhcHNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbGxhcHNlSW1wb3J0RXhwb3J0Jyk7XHJcbiAgY29uc3QgYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjb3JkaW9uQXJyb3cnKTtcclxuICBjb2xsYXBzZS5hZGRFdmVudExpc3RlbmVyKCdzaG93LmJzLmNvbGxhcHNlJywgKCkgPT4ge1xyXG4gICAgYXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgxODBkZWcpJztcclxuICB9KTtcclxuICBjb2xsYXBzZS5hZGRFdmVudExpc3RlbmVyKCdoaWRlLmJzLmNvbGxhcHNlJywgKCkgPT4ge1xyXG4gICAgYXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XHJcbiAgfSk7XHJcblxyXG4gIC8vIFx1MzA1OVx1MzA3OVx1MzA2Nlx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlx1MzBGQlx1MzA1OVx1MzA3OVx1MzA2Nlx1ODlFM1x1OTY2NFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrLWFsbC1idG4nKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2hvd0NvbmZpcm1Nb2RhbCgnXHUzMDU5XHUzMDc5XHUzMDY2XHUzMEMxXHUzMEE3XHUzMEMzXHUzMEFGXHUzMDU3XHUzMDdFXHUzMDU5XHUzMDRCXHVGRjFGPGJyPlx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlx1MzA1N1x1MzA1Rlx1NTE4NVx1NUJCOVx1MzA2Rlx1NTkzMVx1MzA4Rlx1MzA4Q1x1MzA3RVx1MzA1OVx1MzAwMicsICgpID0+IHtcclxuICAgICAgc2V0QWxsTWFya2VkKHRydWUpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5tYXJrLWFsbC1idG4nKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2hvd0NvbmZpcm1Nb2RhbCgnXHUzMDU5XHUzMDc5XHUzMDY2XHU4OUUzXHU5NjY0XHUzMDU3XHUzMDdFXHUzMDU5XHUzMDRCXHVGRjFGPGJyPlx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlx1MzA1N1x1MzA1Rlx1NTE4NVx1NUJCOVx1MzA2Rlx1NTkzMVx1MzA4Rlx1MzA4Q1x1MzA3RVx1MzA1OVx1MzAwMicsICgpID0+IHtcclxuICAgICAgc2V0QWxsTWFya2VkKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIFx1NTlGRlx1OTA1NVx1MzA0NFx1MzBCOVx1MzBBNFx1MzBDM1x1MzBDMVxyXG4gIGNvbnN0IHRvZ2dsZUZvcm1Td2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlRm9ybVN3aXRjaCcpO1xyXG4gIGlmICh0b2dnbGVGb3JtU3dpdGNoKSB7XHJcbiAgICB0b2dnbGVGb3JtU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgc2F2ZUZvcm1Td2l0Y2hTdGF0ZSh0b2dnbGVGb3JtU3dpdGNoLmNoZWNrZWQpO1xyXG4gICAgICBmaWx0ZXJGb3JtVmFyaWFudHModG9nZ2xlRm9ybVN3aXRjaC5jaGVja2VkLCBmYWxzZSk7XHJcbiAgICAgIHVwZGF0ZVByb2dyZXNzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2hvd0V4cG9ydE1vZGFsKCkge1xyXG4gIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9rZW1vbi1jaGVja2xpc3QnKSB8fCAnJztcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0VGV4dGFyZWEnKS52YWx1ZSA9IGRhdGE7XHJcbiAgZXhwb3J0TW9kYWwuc2hvdygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93SW1wb3J0TW9kYWwoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydFRleHRhcmVhJykudmFsdWUgPSAnJztcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0RXJyb3InKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIGltcG9ydE1vZGFsLnNob3coKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlSW1wb3J0KGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0VGV4dGFyZWEnKTtcclxuICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnRFcnJvcicpO1xyXG4gIGxldCB2YWx1ZSA9IHRleHRhcmVhLnZhbHVlLnRyaW0oKTtcclxuICBjb25zdCBiaW4gPSBMWlN0cmluZy5kZWNvbXByZXNzRnJvbUJhc2U2NCh2YWx1ZSk7XHJcbiAgY29uc3QgaXRlbXNMZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9rZW1vbi1pdGVtJykubGVuZ3RoO1xyXG4gIGlmICghL15bMDFdKyQvaS50ZXN0KGJpbikgfHwgYmluLmxlbmd0aCAhPT0gaXRlbXNMZW4pIHtcclxuICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gJ1x1MzBBNFx1MzBGM1x1MzBERFx1MzBGQ1x1MzBDOFx1NTkzMVx1NjU1NzogXHUzMEQ1XHUzMEE5XHUzMEZDXHUzMERFXHUzMEMzXHUzMEM4XHUzMDRDXHU2QjYzXHUzMDU3XHUzMDRGXHUzMDQyXHUzMDhBXHUzMDdFXHUzMDVCXHUzMDkzXHUzMDAyJztcclxuICAgIGVycm9yRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9rZW1vbi1jaGVja2xpc3QnLCB2YWx1ZSk7XHJcbiAgaW1wb3J0TW9kYWwuaGlkZSgpO1xyXG4gIGxvYWRTdGF0ZSgpO1xyXG4gIHVwZGF0ZVByb2dyZXNzKCk7XHJcbn1cclxuXHJcbi8vIFx1MzA1OVx1MzA3OVx1MzA2Nlx1MzBDMVx1MzBBN1x1MzBDM1x1MzBBRlx1MzBGQlx1MzA1OVx1MzA3OVx1MzA2Nlx1ODlFM1x1OTY2NFx1MzA2RVx1NUI5Rlx1ODg0Q1xyXG5mdW5jdGlvbiBzZXRBbGxNYXJrZWQobWFya2VkKSB7XHJcbiAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9rZW1vbi1pdGVtJyk7XHJcbiAgbGV0IGJpbiA9ICcnO1xyXG4gIGZvciAobGV0IGRpdiBvZiBpdGVtcykge1xyXG4gICAgYmluICs9IG1hcmtlZCA/ICcxJyA6ICcwJztcclxuICB9XHJcbiAgY29uc3QgY29tcHJlc3NlZCA9IExaU3RyaW5nLmNvbXByZXNzVG9CYXNlNjQoYmluKTtcclxuXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bva2Vtb24tY2hlY2tsaXN0JywgY29tcHJlc3NlZCk7XHJcbiAgbG9hZFN0YXRlKCk7XHJcbiAgdXBkYXRlUHJvZ3Jlc3MoKTtcclxufVxyXG5cclxuLy8gXHU4QjY2XHU1NDRBXHUzMEUyXHUzMEZDXHUzMEMwXHUzMEVCXHU4ODY4XHU3OTNBXHJcbmxldCBjb25maXJtTW9kYWw7XHJcbmZ1bmN0aW9uIHNob3dDb25maXJtTW9kYWwobWVzc2FnZSwgb2tDYWxsYmFjaykge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtTW9kYWxCb2R5JykuaW5uZXJIVE1MID0gbWVzc2FnZTtcclxuICBjb25maXJtTW9kYWwgPSBjb25maXJtTW9kYWwgfHwgbmV3IGJvb3RzdHJhcC5Nb2RhbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybU1vZGFsJykpO1xyXG4gIGNvbmZpcm1Nb2RhbC5zaG93KCk7XHJcbiAgY29uc3Qgb2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybU1vZGFsT2tCdG4nKTtcclxuICAvLyBcdTRFMDBcdTVFQTZcdTMwNjBcdTMwNTFcdTMwQTRcdTMwRDlcdTMwRjNcdTMwQzhcdTMwOTJcdTRFRDhcdTRFMEVcclxuICBva0J0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uZmlybU1vZGFsLmhpZGUoKTtcclxuICAgIG9rQ2FsbGJhY2soKTtcclxuICB9O1xyXG59XHJcblxyXG4vLyBcdTMwRDVcdTMwQTNcdTMwRUJcdTMwQkZcdUZGMDhcdTMwQTJcdTMwQ0JcdTMwRTFcdTMwRkNcdTMwQjdcdTMwRTdcdTMwRjNcdTMwNkFcdTMwNTdcdUZGMDlcclxuZnVuY3Rpb24gZmlsdGVyRm9ybVZhcmlhbnRzKGV4Y2x1ZGVGb3JtLCBpbml0aWFsKSB7XHJcbiAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9rZW1vbi1pdGVtJyk7XHJcbiAgZm9yIChsZXQgZGl2IG9mIGl0ZW1zKSB7XHJcbiAgICBpZiAoZXhjbHVkZUZvcm0gJiYgZGl2LmRhdGFzZXQuZm9ybUlkICE9PSAnMCcpIHtcclxuICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubG9hZFBva2Vtb24oKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7QUFBQSxXQUFTLGVBQWUsT0FBTztBQUM3QixRQUFJLFFBQVEsSUFBSTtBQUVkLGFBQU8sTUFBTSxPQUFPLGFBQWEsS0FBSyxRQUFRLENBQUM7QUFBQSxJQUNqRCxXQUFXLFVBQVUsSUFBSTtBQUN2QixhQUFPO0FBQUEsSUFDVCxPQUFPO0FBQ0wsYUFBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBRUEsTUFBTSxjQUFjO0FBQUE7QUFBQSxJQUVsQixHQUFHLE1BQU0sS0FBSyxFQUFFLFFBQVEsSUFBSSxHQUFHLENBQUMsR0FBRyxPQUFPO0FBQUEsTUFDeEMsUUFBUSxJQUFJO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFDUixRQUFRLElBQUk7QUFBQSxNQUNaLGFBQWE7QUFBQSxJQUNmLEVBQUU7QUFBQTtBQUFBLElBRUYsR0FBRyxNQUFNLEtBQUssRUFBRSxRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsT0FBTztBQUFBLE1BQ3ZDLFFBQVE7QUFBQSxNQUNSLFFBQVEsSUFBSTtBQUFBLE1BQ1osUUFBUSxPQUFPLElBQUksS0FBSztBQUFBLE1BQ3hCLGFBQWEsZUFBZSxDQUFDO0FBQUEsSUFDL0IsRUFBRTtBQUFBO0FBQUEsSUFFRixFQUFFLFFBQVEsS0FBSyxRQUFRLEdBQUcsUUFBUSxPQUFPLGFBQWEsU0FBUztBQUFBLElBQy9ELEVBQUUsUUFBUSxLQUFLLFFBQVEsR0FBRyxRQUFRLE9BQU8sYUFBYSxTQUFTO0FBQUEsSUFDL0QsRUFBRSxRQUFRLEtBQUssUUFBUSxHQUFHLFFBQVEsT0FBTyxhQUFhLFNBQVM7QUFBQSxJQUMvRCxFQUFFLFFBQVEsS0FBSyxRQUFRLEdBQUcsUUFBUSxPQUFPLGFBQWEsU0FBUztBQUFBO0FBQUEsSUFFL0QsRUFBRSxRQUFRLEtBQUssUUFBUSxHQUFHLFFBQVEsT0FBTyxhQUFhLFFBQVE7QUFBQSxJQUM5RCxFQUFFLFFBQVEsS0FBSyxRQUFRLEdBQUcsUUFBUSxPQUFPLGFBQWEsUUFBUTtBQUFBLEVBQ2hFLEVBQUUsS0FBSyxDQUFDLEdBQUcsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNO0FBRXBDLGlCQUFlLGNBQWM7QUFDM0IsVUFBTSxZQUFZLFNBQVMsZUFBZSxjQUFjO0FBQ3hELGNBQVUsWUFBWTtBQUN0QixhQUFTLENBQUMsR0FBRyxPQUFPLEtBQUssWUFBWSxRQUFRLEdBQUc7QUFDOUMsWUFBTSxNQUFNLFNBQVMsY0FBYyxLQUFLO0FBQ3hDLFVBQUksWUFBWTtBQUNoQixVQUFJLE1BQU0sa0JBQWtCO0FBQzVCLFVBQUksUUFBUSxRQUFRO0FBQ3BCLFVBQUksUUFBUSxTQUFTLFFBQVE7QUFFN0IsWUFBTSxXQUFXLDBHQUEwRyxRQUFRLE1BQU0sR0FBRyxRQUFRLFdBQVc7QUFDL0osVUFBSSxNQUFNLGtCQUFrQixPQUFPLFFBQVE7QUFFM0MsZ0JBQVUsWUFBWSxHQUFHO0FBRXpCLFVBQUksaUJBQWlCLFNBQVMsTUFBTTtBQUNsQyxjQUFNLGFBQWEsSUFBSSxNQUFNLG9CQUFvQjtBQUNqRCxZQUFJLE1BQU0sa0JBQWtCLGFBQWEsMkJBQTJCO0FBQ3BFLGtCQUFVO0FBQ1YsdUJBQWU7QUFBQSxNQUNqQixDQUFDO0FBQUEsSUFDSDtBQUVBLGNBQVU7QUFDVixzQkFBa0I7QUFDbEIsdUJBQW1CLFNBQVMsZUFBZSxrQkFBa0IsRUFBRSxTQUFTLElBQUk7QUFDNUUsbUJBQWU7QUFBQSxFQUNqQjtBQUVBLFdBQVMsWUFBWTtBQUNuQixVQUFNLFFBQVEsU0FBUyxpQkFBaUIsZUFBZTtBQUN2RCxRQUFJLE1BQU07QUFDVixhQUFTLE9BQU8sT0FBTztBQUNyQixhQUFPLElBQUksTUFBTSxvQkFBb0Isc0JBQXNCLE1BQU07QUFBQSxJQUNuRTtBQUNBLFVBQU0sYUFBYSxTQUFTLGlCQUFpQixHQUFHO0FBQ2hELGlCQUFhLFFBQVEscUJBQXFCLFVBQVU7QUFBQSxFQUN0RDtBQUVBLFdBQVMsWUFBWTtBQUNuQixVQUFNLFFBQVEsU0FBUyxpQkFBaUIsZUFBZTtBQUN2RCxVQUFNLGFBQWEsYUFBYSxRQUFRLG1CQUFtQjtBQUMzRCxVQUFNLE1BQU0sU0FBUyxxQkFBcUIsVUFBVTtBQUVwRCxRQUFJLENBQUMsT0FBTyxJQUFJLFdBQVcsTUFBTSxPQUFRO0FBQ3pDLGFBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEVBQUUsR0FBRztBQUNyQyxVQUFJLElBQUksQ0FBQyxNQUFNLElBQUssT0FBTSxDQUFDLEVBQUUsTUFBTSxrQkFBa0I7QUFBQSxVQUNoRCxPQUFNLENBQUMsRUFBRSxNQUFNLGtCQUFrQjtBQUFBLElBQ3hDO0FBQUEsRUFDRjtBQUdBLFdBQVMsb0JBQW9CLFNBQVM7QUFDcEMsaUJBQWEsUUFBUSxnQ0FBZ0MsVUFBVSxNQUFNLEdBQUc7QUFBQSxFQUMxRTtBQUNBLFdBQVMsb0JBQW9CO0FBQzNCLFVBQU0sbUJBQW1CLFNBQVMsZUFBZSxrQkFBa0I7QUFDbkUsVUFBTSxRQUFRLGFBQWEsUUFBUSw4QkFBOEI7QUFDakUsUUFBSSxvQkFBb0IsVUFBVSxNQUFNO0FBQ3RDLHVCQUFpQixVQUFVLFVBQVU7QUFBQSxJQUN2QztBQUFBLEVBQ0Y7QUFFQSxXQUFTLGlCQUFpQjtBQUN4QixVQUFNLGNBQWMsU0FBUyxlQUFlLGtCQUFrQixHQUFHO0FBQ2pFLFVBQU0sUUFBUSxNQUFNLEtBQUssU0FBUyxpQkFBaUIsZUFBZSxDQUFDLEVBQUU7QUFBQSxNQUNuRSxDQUFDLFFBQVEsQ0FBQyxlQUFlLElBQUksUUFBUSxXQUFXO0FBQUEsSUFDbEQ7QUFDQSxRQUFJLFVBQVU7QUFDZCxhQUFTLE9BQU8sT0FBTztBQUNyQixVQUFJLElBQUksTUFBTSxvQkFBb0Isb0JBQXFCO0FBQUEsSUFDekQ7QUFDQSxRQUFJLFVBQVUsS0FBSyxNQUFPLFVBQVUsTUFBTSxTQUFVLEdBQUc7QUFDdkQsUUFBSSxZQUFZLE1BQU0sVUFBVSxNQUFNLFNBQVMsRUFBRyxXQUFVO0FBQzVELFVBQU0sTUFBTSxTQUFTLGVBQWUsY0FBYztBQUNsRCxVQUFNLGNBQWMsU0FBUyxlQUFlLGtCQUFrQjtBQUM5RCxVQUFNLFlBQVksU0FBUyxlQUFlLGdCQUFnQjtBQUMxRCxRQUFJLE1BQU0sUUFBUSxVQUFVO0FBQzVCLFFBQUksYUFBYSxpQkFBaUIsT0FBTztBQUN6QyxnQkFBWSxjQUFjLFVBQVU7QUFDcEMsY0FBVSxjQUFjLFVBQVUsTUFBTSxNQUFNO0FBQzlDLFFBQUksWUFBWSxLQUFLO0FBQ25CLFVBQUksVUFBVSxPQUFPLFlBQVk7QUFDakMsVUFBSSxVQUFVLElBQUksWUFBWTtBQUFBLElBQ2hDLE9BQU87QUFDTCxVQUFJLFVBQVUsSUFBSSxZQUFZO0FBQzlCLFVBQUksVUFBVSxPQUFPLFlBQVk7QUFBQSxJQUNuQztBQUFBLEVBQ0Y7QUFHQSxNQUFJO0FBQUosTUFBaUI7QUFDakIsV0FBUyxpQkFBaUIsb0JBQW9CLE1BQU07QUFDbEQsa0JBQWMsSUFBSSxVQUFVLE1BQU0sU0FBUyxlQUFlLGFBQWEsQ0FBQztBQUN4RSxrQkFBYyxJQUFJLFVBQVUsTUFBTSxTQUFTLGVBQWUsYUFBYSxDQUFDO0FBQ3hFLGFBQVMsZUFBZSxZQUFZLEVBQUUsVUFBVTtBQUNoRCxhQUFTLGVBQWUsWUFBWSxFQUFFLFVBQVU7QUFDaEQsYUFBUyxlQUFlLFlBQVksRUFBRSxXQUFXO0FBR2pELFVBQU0sV0FBVyxTQUFTLGVBQWUsc0JBQXNCO0FBQy9ELFVBQU0sUUFBUSxTQUFTLGVBQWUsZ0JBQWdCO0FBQ3RELGFBQVMsaUJBQWlCLG9CQUFvQixNQUFNO0FBQ2xELFlBQU0sTUFBTSxZQUFZO0FBQUEsSUFDMUIsQ0FBQztBQUNELGFBQVMsaUJBQWlCLG9CQUFvQixNQUFNO0FBQ2xELFlBQU0sTUFBTSxZQUFZO0FBQUEsSUFDMUIsQ0FBQztBQUdELGFBQVMsZUFBZSxjQUFjLEVBQUUsVUFBVSxNQUFNO0FBQ3RELHVCQUFpQiwwS0FBbUMsTUFBTTtBQUN4RCxxQkFBYSxJQUFJO0FBQUEsTUFDbkIsQ0FBQztBQUFBLElBQ0g7QUFDQSxhQUFTLGVBQWUsZ0JBQWdCLEVBQUUsVUFBVSxNQUFNO0FBQ3hELHVCQUFpQiw4SkFBaUMsTUFBTTtBQUN0RCxxQkFBYSxLQUFLO0FBQUEsTUFDcEIsQ0FBQztBQUFBLElBQ0g7QUFHQSxVQUFNLG1CQUFtQixTQUFTLGVBQWUsa0JBQWtCO0FBQ25FLFFBQUksa0JBQWtCO0FBQ3BCLHVCQUFpQixpQkFBaUIsVUFBVSxNQUFNO0FBQ2hELDRCQUFvQixpQkFBaUIsT0FBTztBQUM1QywyQkFBbUIsaUJBQWlCLFNBQVMsS0FBSztBQUNsRCx1QkFBZTtBQUFBLE1BQ2pCLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRixDQUFDO0FBRUQsV0FBUyxrQkFBa0I7QUFDekIsVUFBTSxPQUFPLGFBQWEsUUFBUSxtQkFBbUIsS0FBSztBQUMxRCxhQUFTLGVBQWUsZ0JBQWdCLEVBQUUsUUFBUTtBQUNsRCxnQkFBWSxLQUFLO0FBQUEsRUFDbkI7QUFFQSxXQUFTLGtCQUFrQjtBQUN6QixhQUFTLGVBQWUsZ0JBQWdCLEVBQUUsUUFBUTtBQUNsRCxhQUFTLGVBQWUsYUFBYSxFQUFFLE1BQU0sVUFBVTtBQUN2RCxnQkFBWSxLQUFLO0FBQUEsRUFDbkI7QUFFQSxXQUFTLGFBQWEsR0FBRztBQUN2QixNQUFFLGVBQWU7QUFDakIsVUFBTSxXQUFXLFNBQVMsZUFBZSxnQkFBZ0I7QUFDekQsVUFBTSxXQUFXLFNBQVMsZUFBZSxhQUFhO0FBQ3RELFFBQUksUUFBUSxTQUFTLE1BQU0sS0FBSztBQUNoQyxVQUFNLE1BQU0sU0FBUyxxQkFBcUIsS0FBSztBQUMvQyxVQUFNLFdBQVcsU0FBUyxpQkFBaUIsZUFBZSxFQUFFO0FBQzVELFFBQUksQ0FBQyxXQUFXLEtBQUssR0FBRyxLQUFLLElBQUksV0FBVyxVQUFVO0FBQ3BELGVBQVMsY0FBYztBQUN2QixlQUFTLE1BQU0sVUFBVTtBQUN6QjtBQUFBLElBQ0Y7QUFDQSxpQkFBYSxRQUFRLHFCQUFxQixLQUFLO0FBQy9DLGdCQUFZLEtBQUs7QUFDakIsY0FBVTtBQUNWLG1CQUFlO0FBQUEsRUFDakI7QUFHQSxXQUFTLGFBQWEsUUFBUTtBQUM1QixVQUFNLFFBQVEsU0FBUyxpQkFBaUIsZUFBZTtBQUN2RCxRQUFJLE1BQU07QUFDVixhQUFTLE9BQU8sT0FBTztBQUNyQixhQUFPLFNBQVMsTUFBTTtBQUFBLElBQ3hCO0FBQ0EsVUFBTSxhQUFhLFNBQVMsaUJBQWlCLEdBQUc7QUFFaEQsaUJBQWEsUUFBUSxxQkFBcUIsVUFBVTtBQUNwRCxjQUFVO0FBQ1YsbUJBQWU7QUFBQSxFQUNqQjtBQUdBLE1BQUk7QUFDSixXQUFTLGlCQUFpQixTQUFTLFlBQVk7QUFDN0MsYUFBUyxlQUFlLGtCQUFrQixFQUFFLFlBQVk7QUFDeEQsbUJBQWUsZ0JBQWdCLElBQUksVUFBVSxNQUFNLFNBQVMsZUFBZSxjQUFjLENBQUM7QUFDMUYsaUJBQWEsS0FBSztBQUNsQixVQUFNLFFBQVEsU0FBUyxlQUFlLG1CQUFtQjtBQUV6RCxVQUFNLFVBQVUsV0FBWTtBQUMxQixtQkFBYSxLQUFLO0FBQ2xCLGlCQUFXO0FBQUEsSUFDYjtBQUFBLEVBQ0Y7QUFHQSxXQUFTLG1CQUFtQixhQUFhLFNBQVM7QUFDaEQsVUFBTSxRQUFRLFNBQVMsaUJBQWlCLGVBQWU7QUFDdkQsYUFBUyxPQUFPLE9BQU87QUFDckIsVUFBSSxlQUFlLElBQUksUUFBUSxXQUFXLEtBQUs7QUFDN0MsWUFBSSxNQUFNLFVBQVU7QUFBQSxNQUN0QixPQUFPO0FBQ0wsWUFBSSxNQUFNLFVBQVU7QUFBQSxNQUN0QjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUEsY0FBWTsiLAogICJuYW1lcyI6IFtdCn0K
