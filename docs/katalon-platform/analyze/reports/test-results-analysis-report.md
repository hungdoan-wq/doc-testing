---
title: Test Results Analysis Report
---

This document explains how to use the **Test Results Analysis Report** to look into test result trends, anomalies, and execution stability over time.

The **Test Results Analysis Report** provides insights into test execution trends, anomalies, and stability across builds, sprints, and releases.  
It enables QA teams to **monitor testing performance over time**, **identify regressions**, and **support data-driven release decisions** in **Katalon TestOps**.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/test-result-analysis-report-in-katalon-testops-1.png" alt="Overview of the Test Results Analysis Report dashboard in Katalon TestOps" width="800px" />

## Why Use This Report
The report visualizes quality trends over time across various result types such as `PASSED`, `FAILED`, `BLOCKED`, `INCOMPLETE`, `SKIPPED`, and `ERROR`.

- Track test stability and performance across builds, sprints, or releases
- Identify abnormal spikes in failed or blocked results
- Detect potential issues with code quality, test environment reliability, or flaky test cases
- Support data-driven decisions on release readiness and test improvement efforts

## Explore the Report

<iframe src="https://demo.arcade.software/mDdAElA8R36ri6wAHXpm?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" title="Test Results Analysis Report" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" style={{ width: "100%", height: "400px", border: "none" }} >

1. Go to **Reports** → **Test Results Analysis**.
2. Choose your desired **Project**, **Time Range**, and **Execution Type**.
3. **Apply filters**
   - Narrow the scope by **Release/Sprint**, **Tester**, or **Configuration**.
   - Switch the **Interval** (daily, weekly, or monthly) for trend granularity.
4. **Review the visuals**
   - Observe **Trend Charts** to monitor stability over time.
   - Check the **Distribution Widget** for status ratios.
   - Review **Anomaly Highlights** to detect sudden failure spikes.
   - Compare **Manual vs. Automated** trends to locate systemic issues.
5. **Drill down for detail**
   - Click a data point in the trend chart to view test runs from that time period.
   - Open the **Detail Table** to inspect failing test cases and identify recurring issues.
 
<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/test-results-analysis-report-redirect-to-test-result-from-drill-down-table.png" alt="Click through from the report table to detailed test result pages" width="800px" />

6. (Optional) Export results as a CSV or shareable report snapshot for collaboration.

## Report Features

The **Test Results Analysis Report** aggregates execution outcomes across selected time intervals (daily, weekly, or monthly) and dimensions (e.g., project, release, tester, or platform).

### Status Trend Chart

A **stacked area chart** showing how test statuses (Passed, Failed, Blocked, etc.) evolve across daily, weekly, or monthly intervals.  
Use this chart to track whether test performance is improving, degrading, or fluctuating across releases.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/test-results-analysis-report-test-execution-results-trend.png" alt="Stacked area chart showing test result status trends over time" width="800px" />

### Status Distribution Widget

Displays the proportion of each test result type (`Passed`, `Failed`, `Skipped`, `Blocked`, `Error`) in a **pie or bar chart**.  

This provides a quick snapshot of testing health during the selected period.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/test-results-analysis-report-execution-distribution-and-summary-by-type.png" alt="Distribution of test results by execution outcome" width="300px" />

### Manual vs. Automated Comparison

A **grouped bar chart** that compares result trends between manual and automated executions.  
Use this comparison to pinpoint whether stability issues are concentrated in specific test execution types or automation frameworks.

### Execution Detail Table

A **sortable and filterable table** listing test cases, their latest statuses, and historical execution results.  
Clicking a test case lets you review its trend, recent runs, and failure causes.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/test-results-analysis-report-drill-down-table.png" alt="Detailed test case view showing result history and execution status" width="800px" />

### Advanced Filters

Use filters to focus the analysis on specific test scopes or contributors.  
Available filters include:

- **Time Period / Interval** (Daily, Weekly, Monthly)  
- **Tester / Executor**  
- **Execution Type** (Manual or Automated)  
- **Platform / Configuration**  
- **Release or Sprint**

> 💡 *Filters help isolate flaky tests, environment-specific issues, or unstable test types for faster root-cause analysis.*

## Best Practices for Using the Report

- Use **weekly or sprint-based intervals** to identify meaningful trends and regressions.  
- Apply filters to isolate **flaky tests**, **unstable platforms**, or **specific testers**.  
- Track **failure rate reduction** over time as a KPI for automation health.  
- Review anomalies regularly to **prevent quality decay**.  
- Export and present trend insights during **release retrospectives** or QA dashboards.
