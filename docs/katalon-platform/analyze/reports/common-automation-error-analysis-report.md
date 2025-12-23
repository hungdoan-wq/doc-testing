---
title: Common Automation Errors Report
---
This document explains how to use the **Common Automation Errors Report** to identify recurring failure patterns across automated test runs.

Instead of analyzing each failed test in isolation, the report automatically **groups similar error messages**, providing a consolidated view of your most frequent and impactful issues. This report aims to assist you make a large-scale analysis on automation failure much clearer and more actionable.


<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/common-automation-error-report.png" alt="common automation error report" width="500px" />

## Why Use This Report

- Distinguish **systemic** issues from **one-off** failures.
- Quantify the **frequency** and **breadth of impact** of each error type.
- Prioritize debugging efforts using data-driven insights.
- Track whether recurring issues are being resolved over time.


## Explore the Report

Explore the report with our interactive guide:

<iframe src="https://demo.arcade.software/3Mjx4dq5E0HSX565iuqU?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" title="Common Automation Errors Report
" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen="true" allow="clipboard-write" style={{ width: "100%", height: "400px", border: "none" }}> </iframe>

1. **Open the report**: Go to **Reports** > **Common Automation Errors**.
2. **Select filters**: Choose a **Time Range / Release or Sprint Scope**.
3. **Refine Your Focus**:    
    - Select **Latest Errors Only** view to view recent unresolved issues and latest test case/test run responsible for the issue.
    - Select **All Errors** view to see the issue and its presence in all of the test cases/test runs in the chosen time range. This view helps you see the error's scope of impact.
4. **Review charts and numbers**:
    - The pie chart aggregates totals and breaks down leading failure types.
    - Numbers of common errors and impacted test cases.
    - The data table displays affected test cases and shows recurring patterns.
5. **Take action**:
    - Click a pie chart segment to drill into the data table.
    - In **Latest Errors Only** view, clicking the number of test cases reveals the latest run of the test case, and its log, with **AI summary** for you to quickly understand what's going on.
    - In **All Errors** view, clicking the number of test cases reveals all test cases/runs, redirecting you to a test runs report, with trend chart to show the particular error's scope of impact.

## Report Features

The **Common Automation Errors Report** consists of two main views, several supporting metrics, and a data table that link to each error.

### Error View Modes

The report provides two complementary views to review automation errors, depending on whether you want to understand **recent failures** or the **full historical pattern**.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/common-automation-error-views.png" alt="common automation error views" width="200px" />

**Latest Error Only (Default)** view focuses on the most recent occurrence of each error. It helps teams quickly understand what is actively failing at the moment:

- Shows **one latest instance** per grouped error.
- The distribution chart and table automatically update to reflect **only latest occurrences**. 
- The **“Impacted Test Cases”** count represents only the tests affected by the latest instance.
- Selecting an error allows you to inspect **the most recent failed run** and its details.

**All Errors** view displays all appearances of each error in test cases/runs, across the selected date range or sprint/release. This view is ideal when you need to understand recurring issues, scope of impact for each issue, or assess overall automation stability.

- Includes both **current and historical** occurrences. Data of the whole report changes accordingly.
- Selecting an error allows you to inspect the **Test Result Analysis report** filtered by the error, with trend and distribution charts for the selected error. This report provides a high-level view of all impacted test cases, and a data table with link to each test case/run if you want to investigate further. 

### Error Distribution by Failure Category

This pie chart shows the breakdown of failure types (Environment, AUT Issue, Test Script, etc.) across all test results. It helps you quickly spot dominant failure patterns (e.g., environment errors vs. script issues).

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/common-automation-error-analysis-report-distribution-pie-chart.png" alt="common automation error analysis report distribution pie chart" width="800px" />

### Common Error Data Table

This detailed, sortable table listing recurring errors with occurrence counts, number of affected test cases, and sample messages. It enables you to drill into critical error patterns. You can click on the impacted test cases to view details.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/common-automation-error-analysis-report-drill-down.png" alt="common automation error analysis report drill down" width="800px" />

### Failure Categories

Each error in the table is now labeled with a **Failure Category**. Categories help you quickly understand the nature of recurring problems without reading through long error messages.

Failure categories include:

- **Application Under Test (AUT) Issue** – Functional or UI issues in the application under testing (AUT).
- **Test Script Issue** – Errors in the test script such as runtime errors, element not found, wait issues, or assertion failures.
- **Test Data Issue** – Incorrect, missing, outdated, or invalid data used during execution.
- **Automation Issue** – Problems in the automation framework, libraries, or tooling.
- **Integration Issue** – Failures caused by components or systems not working together correctly.
- **Configuration Issue** – Incorrect setup of tools, browser versions, or execution parameters.
- **Environment Issue** – Instability or unavailability of test environments, servers, networks, databases, or third-party services.
- **Others** – Unspecified issues, to be investigated further.



### Impact metrics

The aggregated totals for each error type show how many tests and runs are affected. This reveals the severity and scale of each issue.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/common-automation-error-analysis-report-aggregates.png" alt="common automation error analysis report aggregates" width="300px" />

### Advanced Filtering

The report includes several filters that let you isolate specific problem areas or release cycles.

**Available filters:**
- Failure Category  
- Environment (Execution Profile)  
- Test Suite / Test Suite Collection  
- Time Range  

The report uses **TestOps’ internal error-pattern recognition system** to automatically cluster similar failure messages into common error types.

## Data Table Field Reference

|Field|Description|Example|
|---|---|---|
|**Error**|Name of the error.|`com.kms.katalon.core.exception.StepErrorException: Error`|
|**Failure Category**|AI-assisted classification of similar automation failures grouped by error message patterns.|`AssertionError`, `TimeoutException`, `ElementNotFoundException`|
|**Impacted Test Cases**|Total number of unique test cases impacted by this error.|`36`|
|**Error Count**|Number of times this error type appeared across all test runs in the selected time range.|`245`|
|**First/Last Occur**|Date on which this error is first/last found.|`29 Oct 2025`|