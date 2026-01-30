

/* ---------------------------
   Sidebar rendering
---------------------------- */
function buildSidebar(tree) {
  sidebar.innerHTML = "";
  renderNode(tree, sidebar, 0);
}


/* ---------------------------
   Sidebar item
---------------------------- */
function linkItem(label, path, nested = false) {
  const div = document.createElement("div");
  div.textContent = label;
  div.className = "item" + (nested ? " nested" : "");
  div.dataset.path = path;

  div.onclick = () => {
    location.hash = path;
  };

  return div;
}


function initTabs() {
  const allTabs = content.querySelectorAll(".tab");

  allTabs.forEach(btn => {
    btn.addEventListener("click", () => {
      const { tab, group } = btn.dataset;

      // Activate all tabs in same group
      content
        .querySelectorAll(`.tab[data-group="${group}"]`)
        .forEach(b =>
          b.classList.toggle("active", b.dataset.tab === tab)
        );

      // Activate matching panels
      content
        .querySelectorAll(`.tab-content[data-group="${group}"]`)
        .forEach(p =>
          p.classList.toggle("active", p.dataset.tab === tab)
        );

      // Persist selection
      if (group) {
        localStorage.setItem(`tabs:${group}`, tab);
      }
    });
  });

  // Restore saved state on load
  content.querySelectorAll(".tabs").forEach(tabs => {
    const firstTab = tabs.querySelector(".tab");
    if (!firstTab) return;

    const group = firstTab.dataset.group;
    const saved = localStorage.getItem(`tabs:${group}`);
    if (!saved) return;

    tabs.querySelector(`.tab[data-tab="${saved}"]`)?.click();
  });
}


