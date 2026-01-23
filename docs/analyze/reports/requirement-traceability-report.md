---
title: Requirement Traceability Report
sidebar_custom_props:
    image: https://tw-cdn.katalon.com/katalon-platform/ra/reports/	Thumbnail-Requirement-Traceability-Analysis.svg
---

This document explains how to use the **Requirement Traceability Report** to visualize and analyze relationships between **requirements**, **test cases**, **test executions**, and **defects**. It enables QA teams to verify full coverage of business, identify gaps, and ensure traceability throughout the testing lifecycle.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/requirement-traceability-report.png" alt="requirement traceability report" width="500px" />

With this report, you can easily perform a sprint/release-based traceability analysis in one unified view.

## Why Use This Report

- Visualize the complete traceability chain from **requirements > test cases > executions > defects**.
- Identify untested requirements.
- Access **real-time status indicators** for requirement coverage, execution results, and defect closure.
- Export traceability data for **compliance, documentation, or audits**.
- Navigate directly to related entities (requirements, test cases, defects) for in-depth analysis.

## Explore the Report

1. Navigate to **Home > Reports > Requirement Traceability**
2. Choose a **Sprint** or **Release** - the report defaults to **current**, with all existing requirements.
3. **Apply Filters** - Fully Covered (green), Partially Covered (blue), Not Covered (gray)
4. **Analyze Traceability** Review coverage hierarchy: **Requirement > Test Case > Test Execution > Defect**
5. **Take Actions**
    - Identify missing or failed coverage.
    - Click linked IDs to navigate to detailed views in TestOps or Jira.
    - Export data for audits, compliance, or reporting.

## Report Features

### Traceability Matrix View
    - Centralized table displaying hierarchical relationships:
        - Each **Requirement** linked to test cases
        - Each **Test case** linked to executions
        - Each **Executions** linked to defects
    - Each entity has a short summary description and relevant statuses (e.g. failed/passed, configuration...)
    - Each entity links directly to its detail page in TestOps or Jira.

### Analysis Scope and Filtering
    - Global filters available for:
        - **Scope**: Release/Sprint or Current
        - **Coverage Status**
    - Users can tailor report focus based on analysis objectives.
<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/requirement-traceability-report-filter-by-coverage-status.png" alt="requirement traceability report filter by coverage status" width="500px" />
<br/>