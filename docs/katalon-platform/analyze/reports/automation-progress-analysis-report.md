---
title: Automation Progress Analysis Report
---

This document explains how to use the **Automation Progress Analysis Report** for an overview of the automation status across your test cases.

The **Automation Progress Analysis Report** provides an overview of your automation status across all test cases in **Katalon TestOps**.  
It consolidates manual and automated test data to help QA teams **track progress**, **identify pending automation work**, and **evaluate automation trends** over time.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/automation-progress-analysis-report-in-katalon-testops-1.png" alt="automation progress analysis report in katalon testops" width="800px" />

### Why Use This Report
- Measure how much of their manual testing has been automated.
- Identify test cases pending automation.
- Track coverage changes and automation trends.
- Recognize top contributors to automation work.
- Export data for progress tracking and stakeholder reporting.

## Explore the Report

<iframe src="https://demo.arcade.software/iVubZYk0fuNVcosUOodX?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" title="Automation Progress Analysis Report" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" style={{ width: "100%", height: "400px", border: "none" }} ></iframe>

1. **Confirm the scope**: Check the report title, project, and time range to ensure you’re viewing the right dataset.

2. **Review top metrics**: Read the summary numbers for pass rate, failures, and coverage to get the overall health snapshot.

3. **Examine trends**: Look at charts or graphs to see progress over time and identify unusual peaks or drops.

4. **Apply filters**: Narrow the view by release, environment, or test type to focus on relevant results.

5. **Drill into details**: Click data points or table entries to inspect specific test runs or results driving the trend.

6. **Capture insights**: Note recurring issues, improvement areas, or patterns worth following up on.

## Report Features

The **Automation Progress Analysis Report** includes several key components that summarize automation performance and progress.

### KPI Summary Cards

- **Automation Coverage** – Percentage of manual test cases that have been automated.  
- **Automation Pending** – Count of manual test cases approved or in progress for automation.  
- **Automation Pending Critical** – Count of pending automation test cases with **Critical** priority.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/automation-progress-analysis-report-automation-coverage-goals.png" alt="automation progress analysis report automation coverage goals" width="800px" />
        
### Automation Coverage Trend (Line Chart)

Displays how the **automation coverage percentage changes over time**.  
This chart helps visualize progress trends and is **unaffected by filters**, ensuring a consistent long-term view.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/automation-progress-analysis-report-trend-chart.png" alt="automation progress analysis report trend chart" width="500px" />

### Automation Distribution (Pie Chart)
Shows how manual test cases are distributed across different automation statuses (e.g., *To Be Assessed*, *In Progress*, *Complete*).  

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/automation-progress-analysis-report-distribution-pie-chart.png" alt="automation progress analysis report distribution pie chart" width="300px" />

### Top 10 Automation Contributors (Bar Chart)
    
Highlights the **number of automated test cases (ATCs)** completed by each assignee.  
This helps identify your top automation performers and resource distribution.

### Manual Test Case Details (Data Table)
    
Lists all test cases with details such as **priority**, **status**, and **assignee**.  
Use this table to drill down into specific automation tasks or bottlenecks.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/automation-progress-analysis-report-drill-down-table.png" alt="automation progress analysis report drill down table" width="800px" />

### Filtering Options

You can adjust the report’s scope using filters at the top of the page:

- **Automation Status** – Filter by automation stage (e.g., *In Progress*, *Complete*).  
- **Assignee** – View progress by individual contributor.  
- **Priority** – Analyze automation coverage by test case priority.

> **Note**: KPI cards remain unaffected by filters and always display project-level totals.

## Reference – Automation Definitions

These terms and metrics are displayed in the KPI cards at the top of the report.

### Automation Status Definitions

|Status|Meaning|
|---|---|
|**To Be Assessed**|Manual test created but not yet reviewed for automation.|
|**Automation Candidate**|Marked for automation; scripting not started.|
|**Automation In Progress**|Automation work ongoing.|Automation Engineer|
|**Automation Complete**|Script finished and linked to its manual test case.|
|**Manual Only**|Deliberately excluded from automation.

### KPI Calculations

|KPI Name|Description|Formula|Filter Scope|
|---|---|---|---|
|**Automation Coverage (AC)**|% of manual test cases that are automated.|(Automation Complete MTC / Total Published MTC) × 100|Project-level (unaffected by filters)|
|**Automation Pending (AP)**|Total manual tests still awaiting automation.|Count of MTC where status = _Candidate_ or _In Progress_|Project-level|
|**Automation Pending Critical**|Same as AP but Priority = Critical.|Count of MTC with (status = Candidate or In Progress) AND Priority = Critical|Project-level|