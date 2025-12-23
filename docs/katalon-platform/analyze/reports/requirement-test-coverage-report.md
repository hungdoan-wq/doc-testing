---
title: Requirement Coverage Analysis Report
sidebar_custom_props:
    image: https://tw-cdn.katalon.com/katalon-platform/ra/reports/Thumbnail-Requirements-Coverage-Analysis.svg
---

This document explains how to use the **Requirement Coverage Analysis Report** to evaluate how thoroughly project requirements are tested within a sprint or release, to evaluate product readiness. It provides insights into testing completeness, test case execution, and pass rates.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/requirement-coverage-analysis-report.png" alt="requirement coverage analysis report" width="500px" />
<br/>

## Why Use This Report

With this report, you no longer need to manually cross-reference in your ALM tools (Jira, ADO) -  simply select a project and time range, to instantly visualize coverage metrics and analyze progress.

- **Measure coverage trends** — monitor coverage percentage, execution, and pass rates over time.
- **Identify testing gaps** — instantly see which requirements lack linked test cases or test executions.
- **Enable data-driven decisions** — reallocate testing resources based on coverage risk areas.
- **Improve release readiness** — confirm that all critical requirements are covered before release.
- **Simplify compliance tracking** — ensure traceability between requirements, tests, and defects.

## Explore the Report

<iframe src="https://demo.arcade.software/RvDxt5ydtLf9tCuux8X0?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" title="Requirements Coverage Analysis Report" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" style={{ width: "100%", height: "400px", border: "none" }} ></iframe>

1. Navigate to **Reports > All Reports > Requirement Coverage During Period**. You can also access through **Home > Project Dashboard > Embedded Report > View Report Detail**.
2. **Pick a filter**, by **Sprint** or **Release**. Select the **interval** (daily, weekly, sprint, or release) for data grouping, and click **Apply**.
3. **View the Coverage Visualization**
    - Examine the **Requirement Coverage Bar Chart** showing coverage percentage trends.
    - Hover to view detailed tooltips (**time**, **requirement count**, **coverage percentage**).
    - Click a column to drill down into the data table filtered by that coverage type.
4. **Analyze Coverage Status Distribution**
    - Use the **Coverage Status Chart** to see how many requirements are fully, partially, or not covered.
5. **Review the Data Table**
    - Scroll to the bottom section to see detailed requirement-level metrics, including:
        - **Linked test cases** and **executions**
        - **Pass/fail counts** and **latest execution time**
        - **Linked defects** and **coverage status**
    - Sort and filter as needed to identify specific requirements or anomalies.

## Report Features

### Filter Panel
    - Allows filtering by sprint or release, and picking an interval for aggregating data.
### Coverage Trend Visualization
    - Each bar group displays perfectages of coverage in selected time intervals:
        - Test Coverage Percentage
        - Execution Percentage
        - Pass Percentage
    - Hovering on each series displays summarized series data.
    - Click to filter related records in the data table.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/requirement-coverage-analysis-report-trend-chart.png" alt="requirement coverage analysis report trend chart" width="500px" />
<br/>

### Coverage Status Summary
    - Displays counts of requirements grouped by coverage level:
        - **Not Covered** — no linked or published test cases
        - **Partially Covered** — some test cases linked or executed
        - **Fully Covered** — all linked test cases executed and passed

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/requirement-coverage-analysis-report-requirement-coverage-summary.png" alt="requirement coverage analysis report requirement coverage summary" width="300px" />
<br/>

### Requirement Data Table
    - Lists each requirement with detailed testing metrics:
        - ID and name (clickable to navigate to requirement page in ALM tool)
        - Number of linked test cases and executions
        - Counts of published, executed, passed, and failed test cases
        - Linked defect count
        - Coverage status
    - Default sorting: **Coverage Status (ascending)**
    - Supports filtering by **Coverage Status** and sorting by key metrics (latest execution, ID, totals).

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/defect-status-analysis-report-defect-distribution-by-priority.png" alt="defect status analysis report defect distribution by priority" width="300px" />
<br/>

**Coverage Calculation Rules**

```
                Count of requirements with all test cases published
Test Coverage = --------------------------------------------------- × 100%
                                Total requirements
```

```
                     Count of requirements with all test cases executed
Execution Coverage= --------------------------------------------------- × 100%
                                    Total requirements
```

```
                  Count of requirements with all test cases passed
Pass Coverage = --------------------------------------------------- × 100%
                                Total requirements
```