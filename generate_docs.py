import os
import json
import re

BASE_DIR = "docs"
OUTPUT_JSON = "testops.json"

def slugify(text):
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")

def ensure_dir(path):
    os.makedirs(path, exist_ok=True)

def write_md(path, title, notes=None):
    content = f"# {title}\n\n"
    if notes:
        content += f"<!-- {notes} -->\n\n"
    content += "Content coming soon.\n"
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

# -----------------------------
# Source structure
# -----------------------------

DOCS = {
    "Overview": {
        "_notes": "Analytics scope, filters, visual journey, use cases, learning paths, doc structure"
    },
    "Get Started": {
        "Integrate with TestOps": "How to integrate TestOps to get data",
        "Arcade Overview": "Demonstrate overall features",
        "Explore Dashboards": "Purpose and types of dashboards",
        "Explore Reports": "Purpose vs dashboards, report groupings"
    },
    "Monitor Projects": {
        "Monitor Real-Time Test Execution": None,
        "Track Historical Quality Trends": None,
        "Assess Release Readiness": None
    },
    "Test Results & Failures": {
        "View Test Result Details": None,
        "Investigate Test Failures": None,
        "Investigate Flaky Tests": (
            "Flakiness definition, smart tags, PFS calculations"
        ),
        "Analyze Error Patterns": None
    },
    "Test Coverage": {
        "Track Requirement Coverage": (
            "Analyzing test coverage and requirement tracking"
        ),
        "Analyze Traceability": None,
        "Analyze Configuration Coverage": None
    },
    "Defects": {
        "Analyze Defects & Issues": "Linked to defect metrics",
        "View Defect Trends": "Linked to defect metrics"
    },
    "Test Case Activity": {
        "Track Test Case Stability": None,
        "Analyze Execution History": None,
        "Assess Test Case Quality": "Linked to flakiness",
        "Monitor Test Case Productivity": None,
        "Track Test Case Automation Progress": None
    },
    "Configurations": {
        "Quality Gates": "Details & instructions",
        "Smart Tags": "Details & instructions"
    },
    "Customizations": {
        "Custom Widgets": None,
        "Custom Dashboards": None,
        "Advanced Filters & Combinations": None
    },
    "References": {
        "Test Stability Metrics": None,
        "Defect Metrics": None
    }
}

# -----------------------------
# Build docs + JSON tree
# -----------------------------

ensure_dir(BASE_DIR)
json_tree = {}

for section, children in DOCS.items():
    section_slug = slugify(section)
    section_dir = os.path.join(BASE_DIR, section_slug)
    ensure_dir(section_dir)

    index_path = os.path.join(section_dir, "index.md")
    write_md(index_path, section, children.get("_notes"))

    section_entry = {
        "path": index_path.replace("\\", "/")
    }

    if isinstance(children, dict):
        child_entries = {}
        for title, notes in children.items():
            if title == "_notes":
                continue
            filename = f"{slugify(title)}.md"
            file_path = os.path.join(section_dir, filename)
            write_md(file_path, title, notes)
            child_entries[title] = file_path.replace("\\", "/")

        if child_entries:
            section_entry["children"] = child_entries

    json_tree[section] = section_entry

# -----------------------------
# Write JSON
# -----------------------------

with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
    json.dump(json_tree, f, indent=2)

print("Docs and structure-reflecting JSON generated.")
