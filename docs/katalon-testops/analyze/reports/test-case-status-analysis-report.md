---
title: Test Case Health Analysis Report
---

This document explains how to use the **Test Case Health Analysis report** to monitor overall test case execution health and prioritize investigation on failed / unstable test cases.

The **Test Case Health Analysis Report** (revised from **Test Case Status Report**) provides a high-level overview of test execution health and stability in **Katalon TestOps**. It helps QA teams monitor pass/fail trends, identify unstable test cases, and prioritize investigation into failed or unstable runs.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/testops-test-case-health-analytics-report.png" alt="testops test case health analytics report" width="500px" />
<br/>

## Why Use This Report
This report helps pinpoint flaky automation scripts and highlight regression weaknesses.

- **Monitor test case quality and health**: Track stability indicators across all test cases to understand suite health and measure improvement over time.
- **Identify problematic test cases**: Quickly segment tests by health status (**flaky**, **always failing**, **slow**) to find issues needing immediate attention.
- **Prioritize QA efforts**: Export filtered lists to create stabilization backlogs, assign ownership, and track progress toward reliability goals.

## Explore the Report

<iframe
src="https://demo.arcade.software/Yr46fUIZP3RSdhUqb8wI?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Test Case Health Analysis Report"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

1. Navigate to **Home > All Reports > Test Case Status Analysis** from the main dashboard.
2. **Choose a View**
    - **Automated Test Cases Only** – Focuses analysis on automated executions, including flakiness and stability metrics.
    - **All Test Cases (Automated & Manual)** – Provides a holistic view of test execution status across both automated and manual test cases.
3. **Set the Analysis Scope**: Select the desired time range, release, or sprint.
4. Review the **Stability Counts** at the top of the report to quickly see counts of troubling test cases in the scope:
    - **Flaky**
    - **New Failure**
    - **Always Fail**
    - **Slow**
5. Analyze the **Test Case Distribution by Execution Status** pie chart to understand overall execution outcomes.
6. Examine the **Test Flakiness Distribution** pie chart to assess test stability across flakiness categories - **stable** or **flaky** (highly flaky and/or potentially flaky).
7. Scroll down to the **Test Case Data Table** for detailed, test-level insights.
8. (Optional) Apply filters such as test type, executor, source, or tags to narrow your analysis.
9. **Export or Share Findings** for reporting and stakeholder communication.

## Report Features

The **Test Case Status Analysis Report** consolidates multiple dimensions of test result data into an interactive view with these key components:

- **Stability Counts** - four big numbers that count test cases with stability tags: flaky/new failure/always fail/slow.
- **Test Case Breakdown by Execution Status** – a pie chart summarizing pass/fail/error/skip ratios
- **Test Case Breakdown by Flakiness Status** - a pie chart summarizing stable/flaky test case ratios.
- **Test Case Detail Table** – a detailed view of individual test cases, with filters for deeper analysis

### Test Health Big Number Widgets

**TestOps** detects and counts test cases with smart tags in the selected scope. See [Smart Tags](/katalon-platform/analyze/smart-tags) to learn more about **TestOps Smart Tags**.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/testops-test-case-health-analytics-report-smart-tag-numbers.png" alt="testops test case health analytics report smart tag numbers" width="800px" />
<br/>

These numbers help you quickly identify high-impact risks without analyzing individual charts.

### Test Case Breakdown by Execution Status

A pie chart showing the proportion of test cases by their latest execution result (**Passed**, **Failed**, **Error**, **Skipped**).

Provides a quick visual summary of overall testing health. Highlights where most issues occur.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/testops-test-case-health-analytics-report-execution-status-chart.png" alt="testops test case health analytics report execution status chart" width="800px" />
<br/>

### Test Case Breakdown by Flakiness Status

Visualizes how test cases are distributed across flakiness categories:

- Stable
- Potentially Flaky
- Highly Flaky
- Uncategorized – Test cases without sufficient data

See [Probabilistic Flakiness Score](/katalon-platform/analyze/smart-tags#calculations-for-the-probabilistic-flakiness-score-pfs) to understand how **TestOps** calculates PFS to measure flakiness.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/testops-test-case-health-analytics-report-test-flakiness-distribution.png" alt="testops test case health analytics report test flakiness distribution" width="800px" />
<br/>

Provides a clearer, more actionable view of test reliability - you can click on the flaky segment, and see affected test cases in the table below.

### Test Case Detail Table

A sortable, filterable data table listing key test case attributes:

    - Test Case ID and Name  
    - Latest Result
    - Type (Automated / Manual)  
    - Failure Rate – Percentage of failed executions within the selected scope
    - PFS Score – Pass/Fail Stability score indicating execution consistency
    - Median Duration – Median execution time calculated using P50
    - Executor  
    - Tags
    - Last Executed At  
    - Source – Origin of the test case (for example, repository or integration)

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/testops-test-case-health-analytics-report-table.png" alt="testops test case health analytics report table" width="800px" />
<br/>

You can click a **Test Case ID** or **Latest Result** to navigate directly to the test case itself, or detailed breakdown of the test run result, for further investigation.

