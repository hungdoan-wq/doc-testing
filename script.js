const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");

/* ---------------------------
   Load tree + init
---------------------------- */
fetch("docs_structure.json")
  .then(r => r.json())
  .then(tree => {
    buildSidebar(tree);
    loadFromHash();
  });

/* ---------------------------
   Sidebar rendering
---------------------------- */
function buildSidebar(tree) {
  sidebar.innerHTML = "";
  renderNode(tree, sidebar, 0);
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

/* ---------------------------
   Routing
---------------------------- */
function loadFromHash() {
  const file = location.hash.slice(1);
  if (file) loadMarkdown(file);
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

function preprocessDirectives(md) {
  // 1. COLUMNS
  md = md.replace(
    /:::column\s*([\s\S]*?):::endcolumn/g,
    (_, body) => {
      const cols = [...body.matchAll(
        /:::col\s+([^\s]+)\s*([\s\S]*?):::endcol/g
      )];

      if (!cols.length) return _;

      return `
<div class="columns">
${cols.map(c => `
  <div class="column" style="flex-basis:${c[1].trim()};">

${marked.parse(c[2].trim())}

  </div>
`).join("")}
</div>`;
    }
  );

  // 2. TABS
  md = md.replace(
    /:::tabs\s+([^\s]+)\s*([\s\S]*?):::endtabs/g,
    (_, group, body) => {
      const tabs = [...body.matchAll(
        /:::tab\s+([^\n]+)\s*([\s\S]*?):::endtab/g
      )];

      if (!tabs.length) return _;

      const buttons = tabs.map((t, i) => `
<button class="tab ${i === 0 ? "active" : ""}"
        data-tab="${i}"
        data-group="${group}">
  ${marked.parse(marked.parse(t[1].trim()))}
</button>`).join("");

      const panels = tabs.map((t, i) => `
<div class="tab-content ${i === 0 ? "active" : ""}"
     data-tab="${i}"
     data-group="${group}">

${marked.parse(t[2].trim())}

</div>`).join("");

      return `
<div class="tabs">
  <div class="tab-buttons">
    ${buttons}
  </div>
  ${panels}
</div>`;
    }
  );

  // 3. ADMONITIONS
  md = md.replace(
    /:::(note|tip|info|warning|danger)\s*([\s\S]*?):::end\1/g,
    (_, type, content) => `
<div class="admonition ${type}">
  <div class="admonition-title">${type}</div>
  <div class="admonition-content">

${marked.parse(content.trim())}

  </div>
</div>`
  );

  return md;
}


/* ---------------------------
   Markdown loading
---------------------------- */
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


/* ---------------------------
   Rewrite MD links
---------------------------- */
function rewriteLinks() {
  content.querySelectorAll("a").forEach(a => {
    const href = a.getAttribute("href");
    if (href && href.endsWith(".md")) {
      a.onclick = e => {
        e.preventDefault();
        location.hash = href;
      };
    }
  });
}
function buildTOC() {
  const tocToggle = document.getElementById("toc-toggle");
  const toc = document.getElementById("toc");
  tocToggle.onclick = () => {
    toc.classList.toggle("hidden");
  };
  toc.innerHTML = "";

  const headings = content.querySelectorAll("h2, h3");
  if (!headings.length) return;

  const title = document.createElement("div");
  title.className = "toc-title";
  title.textContent = "On this page";
  toc.appendChild(title);

  headings.forEach(h => {
    if (!h.id) {
      h.id = h.textContent
        .toLowerCase()
        .replace(/[^\w]+/g, "-");
    }

    const item = document.createElement("div");
    item.className = `toc-item level-${h.tagName === "H3" ? 3 : 2}`;
    item.textContent = h.textContent;

    item.onclick = () => {
      document.getElementById(h.id).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    };

    toc.appendChild(item);
  });
}
function observeHeadings() {
  const tocItems = document.querySelectorAll(".toc-item");
  const headings = content.querySelectorAll("h2, h3");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          tocItems.forEach(i => i.classList.remove("active"));
          const active = [...tocItems].find(
            i => i.textContent === entry.target.textContent
          );
          if (active) active.classList.add("active");
        }
      });
    },
    {
      rootMargin: "-40% 0px -55% 0px"
    }
  );

  headings.forEach(h => observer.observe(h));
}
function renderMermaid() {
  const blocks = content.querySelectorAll("pre code.language-mermaid");

  blocks.forEach((block, index) => {
    const parent = block.parentElement;
    const graph = block.textContent;

    const container = document.createElement("div");
    container.className = "mermaid";
    container.textContent = graph;

    parent.replaceWith(container);
  });

  mermaid.initialize({
    startOnLoad: false,
    theme: document.documentElement.dataset.theme === "dark"
      ? "dark"
      : "default"
  });

  mermaid.run({
    nodes: content.querySelectorAll(".mermaid")
  });
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
