---
title: Reports & Analytics Overview
---

This document explains **TestOps**' **Reports & Analytics**, what features this module has, and how you can best use it to assess your project's health.
## Introduction

The **TestOps Reports & Analytics (RA)** module is the central hub for tracking, analyzing, and communicating testing performance and software quality across projects. It unifies dashboards, reports, and insights that turn raw execution data into actionable intelligence for QA managers, testers, and stakeholders.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/overview/testops-reports-and-analytics-home-page.png" alt="testops reports and analytics home page" width="700px" />

Instead of manually compiling metrics from multiple tools, **TestOps** consolidates data from connected ALM and CI/CD systems into standardized models. This enables consistent visibility across time-based and iteration-based perspectives-helping teams monitor testing health, release readiness, and long-term quality trends.

## How TestOps Structures and Uses Data

All analytics in TestOps are **project-based**. Each project aggregates entities like **test cases**, **executions**, **requirements**, and **defects** drawn from integrated tools such as **Jira** and **Azure DevOps**.

Data from these entities are presented in either time-based and iteration-based perspectives:

- **Time-Based View** – Focus on activities and trends within a date range (e.g., testing activity this month, defect trends over time).

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/overview/testops-reports-and-analytics-scope-time.png" alt="testops reports and analytics scope time" width="500px" />

- **Iteration-Based View (Release/Sprint)** – Focus on milestones and readiness evaluation for specific iterations or versions.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/overview/testops-reports-and-analytics-scope-iteration.png" alt="testops reports and analytics scope iteration" width="300px" />

This approach guarantees that all **TestOps** dashboards and reports interpret data consistently, providing reliable comparisons across projects and timelines.

## Core Features of Reports & Analytics

### Dashboards and Reports

TestOps provides **dashboards for summaries** and **reports for deeper analysis**.

- **Dashboards** (e.g., **Analytics & Trends**, **Release Readiness**, **Live Monitor**) give a quick overview of test health and execution progress.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/overview/testops-reports-and-analytics-three-dashboards.png" alt="testops reports and analytics three dashboards" width="500px" />

- **Reports** (e.g., Test Runs Analysis, Defect Trends, Requirement Coverage) let you drill into details to identify issues or improvement opportunities.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/overview/testops-reports-and-analytics-twelve-reports-selection-view.png" alt="testops reports and analytics twelve reports selection view" width="700px" />

Together, dashboards and reports offer both high-level awareness and detailed investigation capability. View [Navigate Dashboards and Reports](#navigate-dashboards-and-reports) section below for navigation tips.

### Filtering and Scoping

You can switch between scope modes depending on your analysis goal:  

- **Time-Based:** to observe historical trends or productivity changes.

- **Release/Sprint:** to evaluate iteration progress and quality.

For filters in reports, you can filter data by entity-level details (for example, **Test Case Status**, **Defect Priority**, or **Run Type**) and combine them with broader scopes such as **Time-Based**, or **Release/Sprint**.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/overview/testops-reports-and-analytics-filters.png" alt="testops reports and analytics filters" width="500px" />

This gives you precise control over what data is shown, while keeping all widgets and reports synchronized to the same filter context.

### Custom Views

In any report, you can create custom views that store filter for different perspectives, to quickly switch between them without reconfiguring the filters each time. This is especially useful when you regularly configure one report for different purposes—such as focusing on failed automated tests, tests from specific suites, or activity within a particular sprint.

With the custom views, every report becomes a personalized workspace that adapts to the way you analyze quality.

**What you can do:**

- **Save filter configurations**: After applying filters in any report, save them as a new view with a descriptive name.
- **Switch between views instantly**: Use the view selector at the top of the report to load saved filter combinations with a single click.
- **Set a default view**: Mark your most-used view as the default so it automatically loads whenever you open that report.
- **Manage your views**: Edit, clone, or delete saved views as your analysis needs change.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/overview/testops-reports-and-analytics-create-new-view.png" alt="testops reports and analytics create new view" width="300px" />


### Widgets and Visual Insights

Dashboards are composed of **widgets**, modular visual elements that summarize metrics from underlying reports. You can expand widgets to view more details and see the report it's linked to:

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/overview/testops-reports-and-analytics-expanding-dashboard-widget.png" alt="testops reports and analytics expanding dashboard widget" width="500px" />

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/overview/testops-reports-and-analytics-navigate-to-report-from-dashboard-widget.png" alt="testops reports and analytics navigate to report from dashboard widget" width="700px" />

While widgets are static in dashboards, they become interactive report view - clicking a segment filters and refreshes the related data view below it. This allows seamless transition from **visual overview to analytical evidence**.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/overview/testops-reports-and-analytics-interactive-widget-drill-down.png" alt="testops reports and analytics interactive widget drill down" width="700px" />

For **Analytics & Trends** dashboard, you can customize the dashboard by adding more widgets pulled from reports, to tailor to your team's needs.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/overview/testops-reports-and-analytics-customize-dashboard-button.png" alt="testops reports and analytics customize dashboard button" width="300px" />

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/overview/testops-reports-and-analytics-customize-analytics-and-trends-dashboard.png" alt="testops reports and analytics customize analytics and trends dashboard" width="500px" />

### AI Summarization

The **AI Summary** feature condenses report data into concise, insight-ready text for stakeholders. It captures key achievements, risks, and trends to support executive briefings and retrospectives with minimal effort.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/overview/testops-reports-and-analytics-ai-briefing-button.png" alt="testops reports and analytics ai briefing button" width="300px" />

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/overview/testops-reports-and-analytics-ai-briefing-example.png" alt="testops reports and analytics ai briefing example" width="500px" />

### Export and Sharing

Each dashboard or report can be exported to **PDF, CSV, or Excel** for record-keeping or shared directly via link. This simplifies collaboration and enables teams to review the same data during stand-ups, sprint reviews, or release planning.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/overview/testops-reports-and-analytics-sharing-button.png" alt="testops reports and analytics sharing button" width="300px" />

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/overview/testops-reports-and-analytics-sharing-board-view.png" alt="testops reports and analytics sharing board view" width="500px" />

## Navigate Dashboards and Reports

**TestOps** offers three main dashboards and a collection of specialized reports that work together to form a complete analysis ecosystem.

### Dashboards for Overviews

**Live Monitor Dashboard** – Real-time visibility into ongoing runs, automation health, and open defects. See more details at [Live Monitor Dashboard](/katalon-platform/analyze/live-monitor-dashboard).

**Analytics & Trends** – Time-based and iteration-based trend analysis for test performance and team productivity. See more details at [Analytics & Trends Dashboard](/katalon-platform/analyze/about-the-analytics-and-trends-dashboard).

**Release Readiness Dashboard** – Quality gate and threshold tracking to assess release or sprint readiness. See more details at [Release Readiness Dashboard](/katalon-platform/analyze/about-the-release-quality-dashboard).

### Reports for Deep-Dive Analysis

Reports target a specific aspect of testing performance, and are grouped by purpose for easy navigation:

**Coverage Analysis**:

1. **Configuration Coverage Analysis** - Pass/fail coverage by environments (OS, browser, device, profile) to reveal gaps or env-specific issues. See more details at [Configuration Coverage Analysis Report](/katalon-platform/analyze/reports/configuration-coverage-report).
2. **Requirement Coverage Analysis** - Which requirements are linked to tests and verified, useful for progress toward coverage goals. See more details at [Requirement Coverage Analysis Report](/katalon-platform/analyze/reports/requirement-test-coverage-report).
3. **Requirement Traceability** - End-to-end mapping across Requirement ↔ Test Case ↔ Test Result ↔ Defect for compliance and audit. See more details at [Requirement Traceability Report](/katalon-platform/analyze/reports/requirement-traceability-report).

**Quality Assessment**:

1. **Common Automation Errors** - Recurring automation error types (e.g., locator/timeout) to prioritize fix-the-framework tasks. See more details at [Common Automation Errors](docs/katalon-platform/analyze/reports/common-automation-error-analysis-report).
2. **Defect Status Analysis** - Live picture of defect backlog by severity/priority and resolution state (e.g., unresolved vs. resolved). See more details at [Defect Status Analysis Report](/katalon-platform/analyze/reports/defect-status-analysis-report).
3. **Defect Activity Analysis** - Open/close velocity and net change in defects to gauge how quickly issues are being addressed. See more details at [Defect Activity Analysis Report](/katalon-platform/analyze/reports/defects-activity-analysis-report).

**Test Case Management**:

1. **Automation Progress Analysis** - Movement of automated vs. manual over time against targets to track automation adoption. See more details at [Automation Progress Analysis Report](/katalon-platform/analyze/reports/automation-progress-analysis-report).
2. **Test Cases Publishing Activity Analysis** - Authoring/publishing throughput and distribution to understand team test creation output. See more details at [Test Cases Publishing Activity Analysis Report](/katalon-platform/analyze/reports/test-case-activity-analysis-report).

**Test Execution Analysis**:

1. **Test Case Status Analysis** - Current status distribution and latest outcomes for test cases within the selected sprint/release or time window. See more details at [Test Case Status Analysis Report](/katalon-platform/analyze/reports/test-case-status-analysis-report).
2. **Test Results Analysis** - Trends of execution outcomes (pass/fail/error/skipped, etc.) across the chosen period to spot anomalies or regressions. See more details at [Test Results Analysis Report](/katalon-platform/analyze/reports/test-results-analysis-report).
3. **Test Runs Analysis** - Volume and stability of test suite executions, with recent run patterns and overall run health in scope. See more details at [Test Runs Analysis Report](/katalon-platform/analyze/reports/test-runs-analysis-report).
4. **Test Failure Analysis** - Concentration of repeated failures and flaky tests to target stabilization work in automation or environment. See more details at [Test Failure Analysis Report](/katalon-platform/analyze/reports/test-failure-analysis-report).

Each report shares the same design logic - filter → visualize → analyze → export - ensuring that you can move intuitively between dashboards and detailed data exploration.

<!--

## Common Use Cases

Here are some use cases and analysis flows your team might consider when combining dashboards and reports to gain deeper insight:

| **Use Case**                                      | **Flow**                                                                                                                                     | **How They Work Together**                                                                                                                                                                                                 |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Assess overall test quality and execution health** | **Live Monitor Dashboard** <br/>→ Test Case Status Analysis <br/>→ Test Results Analysis <br/>→ Test Runs Analysis <br/>→ Common Automation Errors | Start with the **Live Monitor Dashboard** for real-time test health. Then use the reports to investigate failing tests, verify run stability, and identify recurring automation issues.                                      |
| **Track automation progress and manual-to-automation conversion** | **Analytics & Trends** <br/>→ Test Cases Publishing Activity Analysis <br/>→ Automation Progress Analysis                                        | Use **Analytics & Trends** to observe automation velocity. Drill into **Publishing Activity** and **Automation Progress** reports to measure manual-to-automation conversion and track goals.                                |
| **Measure requirement coverage and traceability** | **Release Readiness Dashboard** <br/>→ Requirement Traceability <br/>→ Requirement Coverage Analysis                                             | Begin with the **Release Readiness Dashboard** for readiness indicators. Then use **Traceability** and **Coverage** reports to verify requirement linkage and testing completeness.                                          |
| **Validate configuration and environment coverage** | Configuration Coverage Analysis <br/>→ Test Results Analysis                                                                                   | Review **Configuration Coverage Analysis** to confirm environment coverage, then cross-check outcomes and regressions in **Test Results Analysis**.                                                                          |
| **Monitor defect lifecycle and resolution efficiency** | **Analytics & Trends** <br/>→ Defect Status Analysis <br/>→ Defect Activity Analysis                                                             | **Analytics & Trends** provides an overview of defect workload. Move to **Status** and **Activity** reports for severity distribution and resolution trend analysis.                                                         |
| **Evaluate test reliability and identify flaky tests** | **Live Monitor Dashboard** <br/>→ Test Failure Analysis <br/>→ Common Automation Errors <br/>→ Test Results Analysis                              | Start with the **Live Monitor Dashboard** for early detection of unstable tests. Then analyze **Failure Analysis** and **Common Automation Errors**, validating improvements via **Test Results Analysis**.                  |
| **Assess release readiness and iteration progress** | **Release Readiness Dashboard** <br/>→ Requirement Coverage Analysis <br/>→ Test Results Analysis <br/>→ Defect Status Analysis <br/>→ Automation Progress Analysis | The **Release Readiness Dashboard** consolidates key indicators. Use supporting reports to validate coverage, pass rates, defect load, and automation trends before release sign-off.                                          |
| **Review team performance and continuous quality trends** | **Analytics & Trends** <br/>→ Test Runs Analysis <br/>→ Test Case Status Analysis <br/>→ Defect Activity Analysis                                | Use **Analytics & Trends** for throughput and trendlines, then drill into **Runs**, **Case Status**, and **Defect Activity** reports for productivity and quality insights.                                                 |
| **Audit traceability and compliance** | Requirement Traceability <br/>→ Requirement Coverage Analysis <br/>→ Defect Status Analysis <br/>→ Test Results Analysis                          | Use **Traceability** and **Coverage** reports for audit evidence, and **Defect** / **Result** reports for compliance verification.                                                                                           |
| **Identify bottlenecks in automation stability** | **Live Monitor Dashboard** <br/>→ Common Automation Errors <br/>→ Test Failure Analysis <br/>→ Automation Progress Analysis                       | Begin with the **Live Monitor Dashboard** to detect instability. Use **Common Automation Errors** and **Failure Analysis** to isolate issues, and **Automation Progress** to monitor long-term improvements.                |
-->
