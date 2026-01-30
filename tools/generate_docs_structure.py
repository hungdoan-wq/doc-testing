import os
import json
import streamlit as st
from pathlib import Path

DOCS_DIR = Path("docs/katalon-studio")
OUTPUT_FILE = Path("studio.json")

st.markdown("""
<style>
div[data-testid="stCheckbox"] label {
    font-weight: 500;
}
</style>
""", unsafe_allow_html=True)


def title_from_name(name: str) -> str:
    return name.replace("-", " ").replace("_", " ").title()


def scan_docs(base: Path):
    """
    Recursively scan docs folder and return a tree structure.
    """
    tree = {}
    for item in sorted(base.iterdir()):
        if item.name.startswith("."):
            continue

        if item.is_file() and item.suffix == ".md":
            tree[item] = None

        if item.is_dir():
            children = scan_docs(item)
            if children:
                tree[item] = children

    return tree

def render_selector(tree, parent_enabled=True, level=0):
    selected = {}

    for path, children in tree.items():
        title = title_from_name(path.stem if path.is_file() else path.name)
        key_prefix = str(path)

        # --------------------
        # FILE
        # --------------------
        if children is None:
            checked = st.checkbox(
                f"📄 {title}",
                key=key_prefix,
                value=True,
                disabled=not parent_enabled
            )
            if checked and parent_enabled:
                selected[title] = str(path).replace("\\", "/")
            continue

        # --------------------
        # FOLDER
        # --------------------
        folder_checked = st.checkbox(
            f"📁 {title}",
            key=f"{key_prefix}_folder",
            value=True,
            help="Select / deselect all inside"
        )

        with st.expander(f"{title}", expanded=False):
            child_selected = render_selector(
                children,
                parent_enabled=folder_checked,
                level=level + 1
            )

        if folder_checked and child_selected:
            selected[title] = {"children": child_selected}

    return selected


def prune_empty(node):
    """
    Remove empty children blocks.
    """
    if isinstance(node, dict):
        return {
            k: prune_empty(v)
            for k, v in node.items()
            if v != {} and v != {"children": {}}
        }
    return node


# ---------------------------
# Streamlit UI
# ---------------------------

st.set_page_config(page_title="Docs Structure Generator", layout="wide")

st.title("📚 Docs Structure Generator")
st.caption("Select which docs to include and generate testops.json")

if not DOCS_DIR.exists():
    st.error("❌ docs/ folder not found")
    st.stop()

docs_tree = scan_docs(DOCS_DIR)

st.subheader("Select documentation to include")

selected_tree = render_selector(docs_tree)
final_tree = prune_empty(selected_tree)

st.subheader("Generated JSON Preview")
st.json(final_tree)

if st.button("💾 Write testops.json"):
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(final_tree, f, indent=2)

    st.success(f"Written to {OUTPUT_FILE}")
