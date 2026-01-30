
/* ---------------------------
   Markdown loading
---------------------------- */

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

