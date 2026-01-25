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

window.addEventListener("hashchange", loadFromHash);

/* ---------------------------
   Markdown loading
---------------------------- */
function loadMarkdown(file) {
  fetch(file)
    .then(r => r.text())
    .then(md => {
      content.innerHTML = marked.parse(md);
      highlightActive(file);
      rewriteLinks();
      buildTOC();
      observeHeadings();
      renderMermaid();
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
  const toc = document.getElementById("toc");
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
    const graphDefinition = block.textContent;

    const id = `mermaid-${index}-${Date.now()}`;

    const container = document.createElement("div");
    container.className = "mermaid";
    container.id = id;
    container.textContent = graphDefinition;

    parent.replaceWith(container);
  });

  mermaid.run({
    nodes: content.querySelectorAll(".mermaid")
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
