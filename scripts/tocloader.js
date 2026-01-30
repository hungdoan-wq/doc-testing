

function buildTOC() {
  const tocToggle = document.getElementById("toc-toggle");
  const toc = document.getElementById("toc");
  tocToggle.onclick = () => {
    toc.classList.toggle("hidden");
  };
  toc.innerHTML = " ";

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