---
title: Test Runs Analysis Report
sidebar_custom_props:
    image: https://tw-cdn.katalon.com/katalon-platform/ra/reports/Thumbnail-Test-Runs-Analysis.svg
---
 
This document explains how to use the **Test Runs Analysis Report** to monitor, evaluate, and interpret test execution performance across multiple test runs within a specific time period.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/test-runs-analysis-report.png" alt="test runs analysis report" width="500px" />
<br/>

With this report, you can instantly view aggregated trends and distributions of test run outcomes.

## Why Use This Report

- Track **test execution health and stability** over time.
- Identify **patterns and anomalies** in test run success or failure rates.
- Compare **automated vs. manual test activity** to guide automation investment.
- Evaluate **executor performance and efficiency** based on test run outcomes.
- Use **interactive charts and drill-down data tables** to quickly pinpoint root causes of trends.

## Explore the Report

<iframe src="https://demo.arcade.software/CHszLR86WvVx1O8FqvhL?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" title="Test Run Analysis Report" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" style={{ width: "100%", height: "400px", border: "none" }} ></iframe>

1. Navigate to **Home > All Reports > Reports & Analytics**.
2. **Select Scope** - choose your desired time window or Release/Sprint.
3. **View Trend Visualization:**  
    Observe how the success, failure, and incomplete rates evolve over time using the stacked bar trend chart.
4. **Interpret Status Distribution:**  
    Examine the donut chart to understand the proportion of passed, failed, and incomplete runs within the selected scope.
5. **Compare Run Types:**  
    Review the type summary visualization to see the ratio of automated versus manual test runs.
6. (Optional) **Apply Filters**
7. **Drill Down for Details:**  
    Click any segment or data point in a chart to filter the **interactive data table**. You can click on the Test Run ID to view details of any particular test run.

## Report Features

### Filtering & Scope Control
    - Customizable **time range selection** (daily, weekly, monthly) to match reporting needs. Scoping by Release or Sprint is also an option.
    - **Advanced filters** allow granular slicing by test attributes such as type, status, executor, and profile.

### Trend Chart
    - A **stacked bar visualization** showing **Passed**, **Failed**, and **Incomplete** runs across the chosen intervals.
    - Enables **trend monitoring** to spot regressions or improvements in test stability.
    - Each bar section is clickable for drill-down to specific test run details.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/test-runs-analysis-report-trend-chart.png" alt="test runs analysis report trend chart" width="500px" />
<br/>

### Status Distribution Chart
    - A **donut chart** summarizing the relative proportions of test outcomes.
    - Quickly conveys the overall health of recent test runs.
    - Useful for quick executive summaries.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/test-runs-analysis-report-distribution-chart.png" alt="test runs analysis report distribution chart" width="300px" />
<br/>

### Type Summary Chart
    - Visual breakdown of **Automated vs. Manual** test runs.
    - Provides insight into **automation coverage** and testing capacity.
    - Displays both percentage and absolute counts.

### Interactive Data Table
    - Displays **detailed run-level information**, including:
        - Timestamp and run identifier
        - Run type and duration
        - Outcome status
        - Inline result indicators (Passed / Failed / Warning / Skipped)
        - Execution context (Profile, Executor)
    - **Sortable and filterable columns** to aid detailed analysis.
    - Supports **export** or integration with other analytics workflows.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/test-runs-analysis-report-drilldown-table.png" alt="test runs analysis report drilldown table" width="700px" />
<br/>
