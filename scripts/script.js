const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
const PRODUCTS = [
  { id: "katalon-testops", label: "Katalon TestOps" },
  { id: "katalon-studio", label: "Katalon Studio" }
];

let activeProduct = PRODUCTS[0].id;

/* ---------------------------
   Load tree + init
---------------------------- */

function loadProductSidebar() {
  fetch(`docs/${activeProduct}/tree.json`)
    .then(r => r.json())
    .then(tree => {
      buildSidebar(tree);
      loadFromHash(); // still works
    });
}

function renderNode(node, container, depth) {
  Object.entries(node).forEach(([title, value]) => {

    /* ---------------------------
       Leaf markdown doc
       --------------------------- */
    if (typeof value === "string") {
      container.appendChild(linkItem(title, value, depth > 0));
      return;
    }

    /* ---------------------------
       Section
       --------------------------- */
    const isEmpty =
      !value.children ||
      value.children === "" ||
      (typeof value.children === "object" &&
        Object.keys(value.children).length === 0);

    const section = document.createElement("div");
    section.className = "section collapsed" + (isEmpty ? " empty" : "");
    section.textContent = title;
    container.appendChild(section);

    const childrenWrap = document.createElement("div");
    childrenWrap.className = "section-children collapsed";
    container.appendChild(childrenWrap);


    // Toggle collapse
    section.onclick = () => {
      const collapsed = childrenWrap.classList.toggle("collapsed");
      section.classList.toggle("collapsed", collapsed);
    };
    if (window.innerWidth < 768) {
      document.querySelectorAll(".section").forEach(section => {
        section.onclick = () => {
          section.classList.toggle("collapsed");
        };
      });
    }

    // No children or empty placeholder
    if (!value.children || value.children === "") {
      return;
    }

    // Recurse
    renderNode(value.children, childrenWrap, depth + 1);
  });
}
function renderProductTabs() {
  const wrap = document.getElementById("product-tabs");
  wrap.innerHTML = "";

  PRODUCTS.forEach(p => {
    const btn = document.createElement("button");
    btn.className = "product-tab" + (p.id === activeProduct ? " active" : "");
    btn.textContent = p.label;

    btn.onclick = () => {
      if (p.id === activeProduct) return;

      activeProduct = p.id;

      // IMPORTANT: stop router from forcing old product
      history.replaceState(null, "", "#");

      renderProductTabs();
      loadProductSidebar();
    };

    wrap.appendChild(btn);
  });
}

function loadMarkdown(file) {
  fetch(file)
    .then(r => r.text())
    .then(md => {
      const processed = preprocessDirectives(md);
      content.innerHTML = marked.parse(processed);

      highlightActive(file);
      rewriteLinks();
      buildTOC();
      observeHeadings();
      renderMermaid();
      initTabs();
    })
    .catch(() => {
      content.innerHTML = "<p>Document not found.</p>";
    });
}

/* ---------------------------
   Routing
---------------------------- */
function loadFromHash() {
  const file = location.hash.slice(1);
  if (!file) return;

  const match = file.match(/^docs\/([^/]+)\//);
  if (match) {
    const product = match[1];
    if (product !== activeProduct) {
      activeProduct = product;
      renderProductTabs();
      loadProductSidebar();
    }
  }

  loadMarkdown(file);
}


function stripIndent(text) {
  const lines = text.replace(/^\n/, "").split("\n");
  const indent = Math.min(
    ...lines
      .filter(l => l.trim())
      .map(l => l.match(/^ */)[0].length)
  );
  return lines.map(l => l.slice(indent)).join("\n");
}

window.addEventListener("hashchange", loadFromHash);

/* ---------------------------
   Active highlight
---------------------------- */
function highlightActive(path) {
  
  document.querySelectorAll(".item").forEach(el => {
    const isActive = el.dataset.path === path;
    el.classList.toggle("active", isActive);

    if (isActive) {
      const children = el.closest(".section-children");
      if (children && children.classList.contains("collapsed")) {
        children.classList.remove("collapsed");
        children.previousSibling.classList.remove("collapsed");
      }
    }
  });
}



/* ======================================================
   Mobile sidebar toggle
   ====================================================== */
const menuBtn = document.getElementById("menu-btn");
const sidebarEl = document.getElementById("sidebar");

menuBtn?.addEventListener("click", () => {
  sidebarEl.classList.toggle("open");
});

/* Close sidebar on navigation */
sidebarEl?.addEventListener("click", e => {
  if (e.target.classList.contains("item")) {
    sidebarEl.classList.remove("open");
  }
});

/* ======================================================
   Dark mode toggle (optional auto)
   ====================================================== */
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
document.documentElement.dataset.theme = prefersDark ? "dark" : "light";



renderProductTabs();
loadProductSidebar();