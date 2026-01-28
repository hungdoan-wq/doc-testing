## Requirements

1. Adopt a **document-by-use-case** practice instead of document-by-report or document-by-feature-name.

2. **Each persona understands what they need to read.**

### Reference structures

This approach is inspired by how mature analytics products structure documentation, such as:

- BrowserStack analytics docs
- GitHub insights & analytics docs
- Google Analytics / Google Search Console docs

Common patterns observed:

- Docs are organized around **questions, workflows, or outcomes**
- Users don’t need to know internal feature or report names upfront
- Navigation starts from **“What are you trying to do?”**

## Proposal

**Document-by-use-case** is the right direction, but we should **not strictly bind use cases to personas** as it can lead to:

- Over-explaining features: to pros who understand statistics.
- Multiple documents for a single capability: confusing for user that searches for the feature.
- Users skipping content entirely and relying on support instead: countereffect for docs, which should be clear and helpful instead of being too much.

This creates noise instead of clarity.
### Proposed mental model

- Each **use-case document** should be **multipurpose** - a single use case can be relevant to all personas:
    
    - QA engineers
    - QA leads
    - Managers
    - Developers

For example: View test results trend => it can be viewed for different purposes.

- Personas can still be referenced inside the doc, but they are **not the primary organizing axis**

Docs are organized around user intent, not personas' detailed workflows.

### Proposed Documentation Structure
### Use-Case Documents (Core Layer)

Each document is centered on **one use case**, not one report.
#### Key principles

- Title is **goal-oriented**, not feature-oriented
    - ❌ “Total Defect During Period by Status”
    - ✅ “Assess Defect Trend"
- Reports, dashboards, and widgets are **tools**, not the headline
- The same report can appear in **multiple use cases** if it supports different goals

#### Existing Docs: What Changes

**What changes**

- Reframe content around **what the user can achieve**
- Reduce emphasis on report names / widget descriptions as the primary structure
#### Handling multi-purpose reports

If a report supports multiple distinct goals, we list each goal in the report itself. Example:

#### Handling personas

Quick guides should be complete flows that personas are expected to follow. In **TestOps**, there are unclear flows, and user would visit each report/dashboard when they have a clear intention in mind, which is by purpose, that each document already serves.

Some reports/dashboards require setting up (release health, setting goals, configuring smart tags...). These can be put in a configuration docs, so engineers in charge of setting things up can visit and view these separately.

---
## PowerPoint Presentation – Content Outline

You can use this as slide headings + bullet guidance.

### Slide 1 – Problem Statement

- Current docs are report-centric
    
- Users must already know _what to look for_
    
- High cognitive load, especially for non-expert users
    

---

### Slide 2 – Documentation Goal

- Make analytics docs task-driven
    
- Reduce navigation and context switching
    
- Let users read **one doc and be done**
    

---

### Slide 3 – Inspiration from Industry

- Analytics docs from BrowserStack, GitHub, Google
    
- Common traits:
    
    - Outcome-focused
        
    - Question-driven
        
    - Minimal reliance on internal feature names
        

---

### Slide 4 – Proposed Direction

- Keep **document-by-use-case**
    
- Avoid strict persona silos
    
- One use case → many personas
    

---

### Slide 5 – Why Not Persona-Only Docs

- Personas overlap
    
- Content duplication risk
    
- Hard to maintain long-term
    

---

### Slide 6 – New Documentation Model

- Entry layer: Quick Guides
    
- Core layer: Use-case documents, generic only (not per persona)
    
- Reference layer: Existing report details
    

(You can visualize this as a simple 3-layer diagram)

---

### Slide 7 – Quick Guides Example

- List of common user journeys
    
- Click → go directly to a use-case doc
    
- No report-name knowledge required
    

---

### Slide 8 – Use-Case Doc Anatomy

- Problem → Questions → How → Interpretation
    
- Reports as tools, not titles
    

---

### Slide 9 – Impact on Existing Docs

- Minimal rewrite effort
    
- Mostly restructuring and reframing
    
- Content reuse instead of duplication
    

---

### Slide 10 – Benefits

- Faster onboarding
    
- Clearer mental model for analytics
    
- Scales better as features and reports grow
    

---

If you want, next steps I can help with:

- Mapping **current TestOps reports → proposed use cases**
    
- Drafting **one concrete example use-case doc** end to end
    
- Turning this into a **1-page decision doc** for leadership approval