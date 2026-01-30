DashboardsReference
# All Widgets Reference

Comprehensive catalog of all 37 dashboard widgets available in Katalon TestOps Reports & Analytics, organized by category with configuration options and use cases.

# All Widgets Reference

This reference provides a comprehensive catalog of all 37 widgets available for customizing dashboards in Katalon TestOps Reports & Analytics. Use this guide to identify the right widgets for your monitoring, analysis, and reporting needs.

## What are Widgets?

Widgets are interactive, embeddable dashboard components that display real-time or aggregated testing data. Unlike static reports, widgets:

- Update dynamically: Refresh based on dashboard filters (time range, release, project)

- Embed in dashboards: Multiple widgets can be combined on custom or pre-built dashboards

- Support interaction: Many widgets allow drill-down to underlying data or filtering

- Display focused metrics: Each widget shows specific data (counts, trends, distributions, ratios)

## When to Use This Reference

Use this catalog when you need to:

- Customize a dashboard: Select widgets that show metrics relevant to your team

- Monitor specific metrics: Find widgets that track test execution, quality, coverage, or test case management

- Compare data visualizations: Choose between pie charts, bar charts, line graphs, or summary counts

- Understand widget capabilities: Learn what data each widget displays and how it can be configured

For step-by-step guidance on adding and configuring widgets, see the [Dashboard Configuration Guide](/docs/dashboards/how-to/configuration).

## Widget Categories Overview

TestOps organizes widgets into four primary categories based on the type of analysis they support:

CategoryWidget CountPrimary FocusTest Execution Analysis9 widgetsTest run volume, results, duration, and execution patternsFailure & Quality Analysis13 widgetsDefect tracking, failure analysis, error categorization, and quality trendsCoverage & Traceability11 widgetsRequirement coverage, test coverage across configurations, and traceability metricsTest Case Management4 widgetsTest case lifecycle, publishing status, and test case distribution

Total: 37 widgets

Each category addresses different stakeholder needs and workflow stages, from test execution monitoring to release readiness assessment.

## Complete Widget Catalog

### Test Execution Analysis

These widgets track test execution progress, results distribution, and execution patterns. They help teams monitor daily testing activity, identify trends, and measure test run efficiency.

#### Test Results Trend Daily (Bar)

Purpose: Track daily test execution results with breakdown by status.

Primary Use Case: Monitor day-over-day testing progress and identify patterns in test outcomes.

Data Displayed: Daily count of test executions categorized by status (Passed, Failed, Error, Incomplete, Blocked, Skipped). Bar chart visualization with color-coded status segments.

Dashboard Placement: Live Monitor Dashboard, Project Dashboard, custom monitoring dashboards.

Configuration Options: Time range (last 7, 30, 90 days, or custom), project filter, release filter, test suite filter.

Best for: QA Managers tracking daily testing progress, automation engineers monitoring test stability.

#### Test Executions Summary by Type (#)

Purpose: View summary count and percentages of test executions categorized by type.

Primary Use Case: Understand the balance between manual and automated test execution volume.

Data Displayed: Total execution count with breakdown by Manual and Automated types, showing both count and percentage for each.

Dashboard Placement: Project Dashboard, Release Health Dashboard, executive dashboards.

Configuration Options: Time range, project filter, release filter, execution type toggle.

Best for: QA Managers assessing automation adoption, executives reviewing testing efficiency.

#### Test Results Summary (#)

Purpose: View summary count of test results across all statuses.

Primary Use Case: Get quick visibility into overall test execution outcomes and pass rates.

Data Displayed: Total execution count with breakdown by all statuses (Passed, Failed, Error, Incomplete, Blocked, Skipped), including counts and percentages.

Dashboard Placement: Live Monitor Dashboard, Project Dashboard, Release Health Dashboard.

Configuration Options: Time range, project filter, release filter, status filter.

Best for: All users needing a high-level snapshot of test execution health.

#### Test Results Distribution (Pie)

Purpose: View the distribution of test results across all statuses.

Primary Use Case: Visualize the proportion of each test outcome to identify dominant patterns.

Data Displayed: Pie chart showing percentage and count distribution of test results by status (Passed, Failed, Error, Incomplete, Blocked, Skipped).

Dashboard Placement: Project Dashboard, Release Health Dashboard, custom executive dashboards.

Configuration Options: Time range, project filter, release filter, minimum percentage threshold for display.

Best for: Executives and stakeholders preferring visual ratio comparisons, QA Managers presenting quality metrics.

#### Test Results Trend by Test Run (Bar)

Purpose: Review historical test execution volume and result distribution for each test run.

Primary Use Case: Analyze test run history to identify specific runs with high failure rates or issues.

Data Displayed: Stacked bar chart with one bar per test run, showing result distribution (passed, failed, error, incomplete, blocked, skipped) for that run.

Dashboard Placement: Project Dashboard, Live Monitor Dashboard, CI/CD integration dashboards.

Configuration Options: Time range, project filter, test run filter, release filter.

Best for: Automation engineers debugging test suite issues, QA Managers tracking test run quality over time.

#### Test Runs Distribution by Status (Pie)

Purpose: View overall distribution of test runs based on their final status.

Primary Use Case: Understand the proportion of test runs that pass, fail, or remain incomplete.

Data Displayed: Pie chart showing test run count and percentage by final status (Passed, Failed, Incomplete, Error, etc.).

Dashboard Placement: Release Health Dashboard, Project Dashboard, CI/CD monitoring dashboards.

Configuration Options: Time range, project filter, release filter, status filter.

Best for: QA Managers evaluating test suite stability, DevOps engineers monitoring pipeline health.

#### Test Runs Summary by Type (#)

Purpose: View summary count of test runs categorized by execution type.

Primary Use Case: Track the volume of manual vs. automated test runs executed.

Data Displayed: Total test run count with breakdown by Manual and Automated types, showing both count and percentage.

Dashboard Placement: Project Dashboard, Release Health Dashboard, team performance dashboards.

Configuration Options: Time range, project filter, release filter, execution type toggle.

Best for: QA Managers tracking automation coverage, executives reviewing testing strategy adoption.

#### Test Runs Volume Trend (Line)

Purpose: Track the daily volume of test runs over time.

Primary Use Case: Monitor testing activity levels and identify trends or gaps in test execution frequency.

Data Displayed: Line chart showing daily count of test runs executed. Each point represents total runs for that day.

Dashboard Placement: Live Monitor Dashboard, Project Dashboard, CI/CD monitoring dashboards.

Configuration Options: Time range (last 7, 30, 90 days, or custom), project filter, release filter.

Best for: QA Managers ensuring consistent testing cadence, DevOps engineers monitoring CI/CD pipeline activity.

#### Test Runs Duration Trend Daily (Line)

Purpose: Track the duration of test runs over time to identify trends in execution time.

Primary Use Case: Monitor test execution efficiency and identify test runs with increasing duration (potential performance issues).

Data Displayed: Line chart showing average or total test run duration per day. Duration typically displayed in minutes or hours.

Dashboard Placement: Performance monitoring dashboards, CI/CD optimization dashboards, Project Dashboard.

Configuration Options: Time range, project filter, release filter, duration metric (average vs. total), test run filter.

Best for: Automation engineers optimizing test execution speed, DevOps engineers reducing pipeline duration.

### Failure & Quality Analysis

These widgets focus on quality issues, defects, test failures, and error patterns. They help teams identify unstable tests, track defect resolution, and prioritize quality improvements.

#### Test Failures Frequency Distribution (Histogram)

Purpose: Analyze the frequency of test failures to identify unstable or problematic test cases.

Primary Use Case: Pinpoint flaky tests or test cases that fail repeatedly, requiring stabilization or investigation.

Data Displayed: Histogram showing distribution of test cases by failure count. X-axis shows failure frequency buckets, Y-axis shows number of test cases in each bucket.

Dashboard Placement: Test Stability Dashboard, Project Dashboard, quality improvement dashboards.

Configuration Options: Time range, project filter, release filter, failure count grouping (e.g., 0-5, 6-10, 11-20 failures).

Best for: Automation engineers identifying flaky tests, QA Managers prioritizing test maintenance efforts.

#### Test Failures Summary (#)

Purpose: View a summary of test failures with total executed test cases, failure count, and average failure rate.

Primary Use Case: Get a quick snapshot of overall test stability and failure impact.

Data Displayed: Three key metrics: total test cases executed, total failure count, and average failure rate (percentage).

Dashboard Placement: Release Health Dashboard, Project Dashboard, executive dashboards.

Configuration Options: Time range, project filter, release filter, test suite filter.

Best for: QA Managers tracking quality metrics, executives evaluating release risk.

#### Test Pass Rates Summary by Type (#)

Purpose: View the pass rate of test cases categorized by type (Manual and Automated).

Primary Use Case: Compare the stability and reliability of manual vs. automated tests.

Data Displayed: Pass rate percentage for Manual and Automated test types, showing total test cases with passing latest result and pass rate for each type.

Dashboard Placement: Project Dashboard, Release Health Dashboard, automation effectiveness dashboards.

Configuration Options: Time range, project filter, release filter, test type filter.

Best for: QA Managers assessing test quality by type, automation engineers evaluating automated test stability.

#### Test Case Distribution By Execution Status

Purpose: View the distribution of test cases across all execution statuses.

Primary Use Case: Understand the current state of all test cases and identify which statuses are most common.

Data Displayed: Pie or bar chart showing test case count and percentage by execution status (Passed, Failed, Incomplete, Not Executed, Blocked, Skipped).

Dashboard Placement: Project Dashboard, Release Health Dashboard, test inventory dashboards.

Configuration Options: Time range, project filter, release filter, status filter, visualization type (pie vs. bar).

Best for: QA Managers understanding test case execution coverage, test leads planning test execution priorities.

#### Open Defects Distribution by Priority (Pie)

Purpose: View the total count of open defects categorized by priority levels.

Primary Use Case: Understand the severity distribution of outstanding defects to prioritize resolution efforts.

Data Displayed: Pie chart showing open defect count and percentage by priority (High, Medium, Low).

Dashboard Placement: Release Health Dashboard, defect tracking dashboards, executive dashboards.

Configuration Options: Project filter, release filter, priority level filter, resolution state (open/unresolved).

Best for: QA Managers prioritizing defect resolution, product owners assessing release blockers.

Note: This widget respects dashboard date/release filters and shows defects within the selected scope.

#### Total Current Open Defects by Priority

Purpose: Display the distribution of currently open defects grouped by priority.

Primary Use Case: Monitor the real-time status of open defects regardless of dashboard filters.

Data Displayed: Current count of open defects by priority level (High, Medium, Low). Ignores dashboard date/release filters to show current state.

Dashboard Placement: Live Monitor Dashboard, real-time defect tracking dashboards.

Configuration Options: Minimal configuration—shows current state. Project filter may apply, but time range and release filters are ignored.

Best for: Support teams monitoring active defects, QA Managers tracking defect backlog in real-time.

Note: Unlike "Open Defects Distribution by Priority," this widget ignores time/release filters and always shows current open defects.

#### Total Current Open Defects by Severity

Purpose: Display the distribution of currently open defects grouped by severity.

Primary Use Case: Monitor the real-time severity distribution of active defects regardless of historical scope.

Data Displayed: Current count of open defects by severity level (Critical, Major, Minor, Trivial). Ignores dashboard date/release filters.

Dashboard Placement: Live Monitor Dashboard, real-time quality dashboards.

Configuration Options: Minimal configuration—shows current state. Project filter may apply, but time range and release filters are ignored.

Best for: QA Managers tracking critical defects, support teams monitoring severity trends in real-time.

Note: This widget always reflects the current state, not historical data.

#### Total Current Open Defects

Purpose: Display a summary count of all defects currently in an open/unresolved state.

Primary Use Case: Provide a real-time snapshot of outstanding defect volume.

Data Displayed: Single numeric count of all open/unresolved defects. Ignores dashboard date/release filters.

Dashboard Placement: Live Monitor Dashboard, executive dashboards, defect tracking dashboards.

Configuration Options: Minimal configuration—always shows current open defect count. Project filter may apply.

Best for: All stakeholders needing quick visibility into current defect backlog.

Note: This is a summary metric widget—no breakdown by priority or severity.

#### Defects Activity Trend Daily (Line & Bar)

Purpose: Track the daily number of defects created, closed, and accumulated open defects over time.

Primary Use Case: Monitor defect inflow/outflow trends and identify periods of defect accumulation or resolution progress.

Data Displayed: Combined line and bar chart. Bars show defects created (green) and closed (blue) per day. Line shows accumulated open defects over time.

Dashboard Placement: Release Health Dashboard, quality trend dashboards, defect management dashboards.

Configuration Options: Time range, project filter, release filter, defect status filter.

Best for: QA Managers tracking defect resolution velocity, product owners monitoring quality trends over time.

#### Open Defects Summary by Priority (#)

Purpose: View the summary count of open defects categorized by priority levels.

Primary Use Case: Understand the volume of open defects at each priority level to plan resolution efforts.

Data Displayed: Summary counts showing total open defects and breakdown by priority (High, Medium, Low).

Dashboard Placement: Release Health Dashboard, defect tracking dashboards, sprint planning dashboards.

Configuration Options: Time range, project filter, release filter, priority filter.

Best for: QA Managers planning defect triage, product owners assessing release readiness.

Note: Unlike "Total Current Open Defects by Priority," this widget respects time/release filters.

#### Defects Activity Summary (#)

Purpose: View the summary count of defects created and closed.

Primary Use Case: Track defect creation vs. closure rates to assess team velocity in addressing quality issues.

Data Displayed: Two key metrics: total defects created and total defects closed within the selected time range.

Dashboard Placement: Release Health Dashboard, team performance dashboards, sprint retrospective dashboards.

Configuration Options: Time range, project filter, release filter.

Best for: QA Managers tracking defect resolution velocity, scrum masters reviewing sprint outcomes.

#### Error Distribution by Failure Category

Purpose: Display the breakdown of test failures by root cause category.

Primary Use Case: Identify which failure categories (Environment, AUT Issue, Test Script, etc.) require the most attention.

Data Displayed: Pie chart showing failure count and percentage by failure category (Environment issues, Application Under Test issues, Test Script errors, Data issues, etc.).

Dashboard Placement: Test Failure Analysis Dashboard, automation maintenance dashboards, root cause analysis dashboards.

Configuration Options: Time range, project filter, release filter, failure category filter.

Best for: Automation engineers prioritizing test maintenance, QA Managers identifying systemic quality issues.

Note: Derived from "Common Automation Errors" report data.

### Test Case Management

These widgets focus on the lifecycle of test cases, including creation, modification, publishing status, and distribution by type. They help teams track test case inventory and authoring activity.

#### Published Test Cases Distribution by Type (Pie)

Purpose: View the distribution of published test cases categorized by type.

Primary Use Case: Understand the composition of your published test case inventory (Manual only, Automated only, or both).

Data Displayed: Pie chart showing published test case count and percentage by type (Manual only, Automated only, Manual & Automated).

Dashboard Placement: Project Dashboard, test inventory dashboards, automation strategy dashboards.

Configuration Options: Project filter, release filter, test case type filter.

Best for: QA Managers assessing automation coverage, test leads planning automation efforts.

#### Published Test Cases Summary by Type (#)

Purpose: View the summary count of published test cases categorized by type.

Primary Use Case: Track the volume of manual vs. automated test cases in the published inventory.

Data Displayed: Total published test case count with breakdown by type (Manual only, Automated only, Manual & Automated), showing counts for each.

Dashboard Placement: Project Dashboard, test inventory dashboards, executive dashboards.

Configuration Options: Project filter, release filter, test case type filter.

Best for: QA Managers tracking test case growth, executives reviewing testing strategy adoption.

#### Test Cases Publishing Activity Daily (Bar)

Purpose: Track the daily publishing activity of test cases over time.

Primary Use Case: Monitor test case authoring velocity and identify periods of high or low test case creation activity.

Data Displayed: Stacked bar chart showing daily test case count by publishing status (Draft, In Review, Published) for all test cases created or edited within the selected time range.

Dashboard Placement: Project Dashboard, test authoring activity dashboards, team velocity dashboards.

Configuration Options: Time range, project filter, publishing status filter.

Best for: QA Managers tracking test authoring velocity, test leads monitoring test case review workflows.

Note: Only includes test cases created or edited within the selected time range.

#### Test Cases Summary by Publishing Status (#)

Purpose: View a summary count of all test cases categorized by publishing status.

Primary Use Case: Understand the current state of test case inventory and identify how many test cases are in draft, review, or published states.

Data Displayed: Total test case count with breakdown by publishing status (Draft, In Review, Published, Deprecated, etc.), showing counts for each status.

Dashboard Placement: Project Dashboard, test inventory dashboards, test authoring dashboards.

Configuration Options: Project filter, release filter, publishing status filter.

Best for: QA Managers assessing test case readiness, test leads monitoring test case review backlog.

### Coverage & Traceability

These widgets measure test coverage across requirements, configurations, and platforms. They help teams track traceability, ensure comprehensive testing, and identify coverage gaps.

#### Requirement Coverage Summary (#)

Purpose: View a summary of requirement coverage status within the selected context.

Primary Use Case: Assess how well requirements are covered by test cases and identify untested or partially tested requirements.

Data Displayed: Summary counts and percentages for three coverage categories:

- Fully Covered: All linked test cases are published and have passed.

- Partially Covered: Linked test cases are in development or executed but not all have passed.

- Not Covered: No published test cases are linked to the requirement.

Dashboard Placement: Release Health Dashboard, requirement traceability dashboards, compliance dashboards.

Configuration Options: Project filter, release/iteration filter, requirement type filter.

Best for: QA Managers ensuring requirements are tested, product owners assessing release readiness, compliance officers verifying traceability.

#### Requirement Coverage Trend (Bar)

Purpose: Track the trend of requirement coverage within the selected iteration (sprint/release).

Primary Use Case: Monitor testing progress over time and identify if coverage is improving or declining during a sprint/release.

Data Displayed: Stacked bar chart showing progression of three coverage types over time:

- Test Coverage: Percentage of requirements with linked, published test cases.

- Execution Coverage: Percentage of requirements with linked, published tests that have been executed.

- Pass Coverage: Percentage of requirements with linked, published tests that have passed.

Dashboard Placement: Release Health Dashboard, sprint progress dashboards, requirement traceability dashboards.

Configuration Options: Iteration/release filter (defines time range), project filter, requirement type filter.

Best for: QA Managers tracking sprint testing progress, scrum masters monitoring requirement coverage velocity.

Note: Time range reflects the start and end dates of the selected iteration. Higher percentages indicate better testing progress.

#### Requirement Coverage Statistics (#)

Purpose: Display a summary of requirement coverage status with detailed counts.

Primary Use Case: Provide comprehensive requirement coverage metrics for compliance, audits, or release readiness assessments.

Data Displayed: Detailed breakdown including:

- Total requirements

- Fully covered count and percentage

- Partially covered count and percentage

- Not covered count and percentage

- Additional metrics may include requirements with executed tests, requirements with passed tests.

Dashboard Placement: Release Health Dashboard, compliance dashboards, requirement traceability dashboards.

Configuration Options: Project filter, release/iteration filter, requirement type filter.

Best for: Compliance officers tracking traceability, QA Managers preparing release reports, product owners assessing feature coverage.

#### Requirement Coverage Trend (Line)

Purpose: Track requirement coverage trends over time using a line chart visualization.

Primary Use Case: Monitor long-term trends in requirement coverage to identify improvement or degradation patterns.

Data Displayed: Line chart showing coverage percentage over time. May include multiple lines for test coverage, execution coverage, and pass coverage trends.

Dashboard Placement: Release Health Dashboard, long-term quality trend dashboards, executive dashboards.

Configuration Options: Time range, project filter, release filter, coverage type toggle (test/execution/pass coverage).

Best for: QA Managers tracking long-term coverage trends, executives monitoring testing strategy effectiveness.

Note: Different from "Requirement Coverage Trend (Bar)"—this uses line visualization for smoother trend analysis over longer periods.

#### Test Coverage Distribution by Configuration (#)

Purpose: View test execution coverage across operating systems and browsers.

Primary Use Case: Ensure comprehensive testing across all target platforms and configurations.

Data Displayed: Tabular or list view showing execution count for each OS/browser configuration combination (e.g., Windows 10 + Chrome, macOS + Safari).

Dashboard Placement: Cross-platform testing dashboards, configuration coverage dashboards, Project Dashboard.

Configuration Options: Time range, project filter, release filter, OS filter, browser filter.

Best for: QA Managers ensuring platform coverage, automation engineers validating cross-browser test execution.

#### Test Coverage Distribution Top 10 by Configuration (Bar)

Purpose: Monitor test execution coverage across the top 10 operating systems and browsers.

Primary Use Case: Identify which platforms receive the most testing attention and which may be underrepresented.

Data Displayed: Horizontal bar chart showing execution count for the top 10 OS/browser configurations, ranked by execution volume.

Dashboard Placement: Cross-platform testing dashboards, configuration coverage dashboards, Project Dashboard.

Configuration Options: Time range, project filter, release filter, configuration ranking metric (execution count or unique test count).

Best for: QA Managers prioritizing platform testing efforts, automation engineers balancing test distribution.

#### Test Executions Summary by Configuration (#)

Purpose: View a summary count of test executions broken down by executed tests and configurations.

Primary Use Case: Understand the total volume of test executions and how many unique configurations were tested.

Data Displayed: Two key metrics: total test executions count and total configurations covered (unique OS/browser combinations).

Dashboard Placement: Project Dashboard, cross-platform testing dashboards, executive dashboards.

Configuration Options: Time range, project filter, release filter.

Best for: QA Managers reporting on test execution volume, executives understanding testing breadth.

#### Requirement Coverage Comparison

Purpose: Compare requirement coverage across multiple releases, projects, or iterations.

Primary Use Case: Benchmark coverage between releases or identify trends across different projects.

Data Displayed: Side-by-side or grouped comparison showing coverage metrics (fully covered, partially covered, not covered) for selected entities.

Dashboard Placement: Release comparison dashboards, multi-project dashboards, executive dashboards.

Configuration Options: Entity selection (releases, projects, or iterations to compare), coverage type filter.

Best for: QA Managers comparing release quality, product owners assessing coverage trends across releases.

#### Test Coverage Summary by OS/Browser

Purpose: Summarize test coverage across operating systems and browsers with aggregated counts.

Primary Use Case: Get a high-level view of platform coverage without detailed drill-down.

Data Displayed: Summary counts showing total test executions, unique OS count, unique browser count, and most-tested configurations.

Dashboard Placement: Project Dashboard, executive dashboards, cross-platform testing dashboards.

Configuration Options: Time range, project filter, release filter.

Best for: Executives needing high-level platform coverage insights, QA Managers reporting on configuration diversity.

#### Platform Coverage Statistics

Purpose: Display detailed statistics on test coverage across platforms and configurations.

Primary Use Case: Provide comprehensive platform coverage metrics for compliance, audits, or coverage gap analysis.

Data Displayed: Detailed breakdown including:

- Total platforms tested (OS + browser combinations)

- Execution count per platform

- Coverage gaps (untested configurations)

- Execution distribution metrics

Dashboard Placement: Compliance dashboards, cross-platform testing dashboards, requirement traceability dashboards.

Configuration Options: Time range, project filter, release filter, platform filter.

Best for: Compliance officers tracking platform coverage, QA Managers identifying coverage gaps, automation engineers planning platform expansion.

## Quick Reference Comparison Table

Use this table to quickly compare widgets and identify the best match for your needs.

### Test Execution Analysis Widgets

Widget NameData TypeVisualizationUpdate FrequencyDefault DashboardConfiguration OptionsTest Results Trend Daily (Bar)Execution resultsStacked bar chartReal-timeLive Monitor, ProjectTime range, project, release, suite filtersTest Executions Summary by Type (#)Execution countNumeric summaryReal-timeProject, Release HealthTime range, project, release, type toggleTest Results Summary (#)Result countsNumeric summaryReal-timeLive Monitor, Project, Release HealthTime range, project, release, status filterTest Results Distribution (Pie)Result ratiosPie chartReal-timeProject, Release HealthTime range, project, release, min % thresholdTest Results Trend by Test Run (Bar)Run-level resultsStacked bar chartReal-timeProject, Live MonitorTime range, project, test run, release filtersTest Runs Distribution by Status (Pie)Run status ratiosPie chartReal-timeRelease Health, ProjectTime range, project, release, status filterTest Runs Summary by Type (#)Run countsNumeric summaryReal-timeProject, Release HealthTime range, project, release, type toggleTest Runs Volume Trend (Line)Run volumeLine chartReal-timeLive Monitor, ProjectTime range, project, release filtersTest Runs Duration Trend Daily (Line)Duration metricsLine chartReal-timePerformance monitoringTime range, project, release, duration metric

### Failure & Quality Analysis Widgets

Widget NameData TypeVisualizationUpdate FrequencyDefault DashboardConfiguration OptionsTest Failures Frequency Distribution (Histogram)Failure frequencyHistogramReal-timeTest Stability, ProjectTime range, project, release, frequency groupingTest Failures Summary (#)Failure metricsNumeric summaryReal-timeRelease Health, ProjectTime range, project, release, suite filterTest Pass Rates Summary by Type (#)Pass ratesNumeric summaryReal-timeProject, Release HealthTime range, project, release, type filterTest Case Distribution By Execution StatusStatus distributionPie/bar chartReal-timeProject, Release HealthTime range, project, release, status, viz typeOpen Defects Distribution by Priority (Pie)Defect ratiosPie chartReal-timeRelease HealthProject, release, priority, resolution stateTotal Current Open Defects by PriorityCurrent defectsNumeric summaryReal-timeLive MonitorProject filter (ignores time/release)Total Current Open Defects by SeverityCurrent defectsNumeric summaryReal-timeLive MonitorProject filter (ignores time/release)Total Current Open DefectsDefect countNumeric summaryReal-timeLive Monitor, ExecutiveProject filter (ignores time/release)Defects Activity Trend Daily (Line & Bar)Defect activityLine + bar chartReal-timeRelease HealthTime range, project, release, status filterOpen Defects Summary by Priority (#)Defect countsNumeric summaryReal-timeRelease HealthTime range, project, release, priority filterDefects Activity Summary (#)Defect metricsNumeric summaryReal-timeRelease Health, TeamTime range, project, release filtersError Distribution by Failure CategoryError ratiosPie chartReal-timeFailure AnalysisTime range, project, release, category filter

### Test Case Management Widgets

Widget NameData TypeVisualizationUpdate FrequencyDefault DashboardConfiguration OptionsPublished Test Cases Distribution by Type (Pie)Test case ratiosPie chartReal-timeProject, Test InventoryProject, release, type filterPublished Test Cases Summary by Type (#)Test case countsNumeric summaryReal-timeProject, Test Inventory, ExecutiveProject, release, type filterTest Cases Publishing Activity Daily (Bar)Publishing activityStacked bar chartReal-timeProject, Test AuthoringTime range, project, status filterTest Cases Summary by Publishing Status (#)Status countsNumeric summaryReal-timeProject, Test InventoryProject, release, status filter

### Coverage & Traceability Widgets

Widget NameData TypeVisualizationUpdate FrequencyDefault DashboardConfiguration OptionsRequirement Coverage Summary (#)Coverage metricsNumeric summaryReal-timeRelease Health, TraceabilityProject, release/iteration, req type filterRequirement Coverage Trend (Bar)Coverage progressionStacked bar chartReal-timeRelease Health, Sprint ProgressIteration/release, project, req type filterRequirement Coverage Statistics (#)Detailed metricsNumeric summaryReal-timeCompliance, TraceabilityProject, release/iteration, req type filterRequirement Coverage Trend (Line)Coverage trendsLine chartReal-timeRelease Health, ExecutiveTime range, project, release, coverage typeTest Coverage Distribution by Configuration (#)Platform coverageTable/listReal-timeCross-platform, ProjectTime range, project, release, OS, browserTest Coverage Distribution Top 10 by Configuration (Bar)Platform coverageBar chartReal-timeCross-platform, ProjectTime range, project, release, ranking metricTest Executions Summary by Configuration (#)Execution metricsNumeric summaryReal-timeProject, Cross-platformTime range, project, release filtersRequirement Coverage ComparisonComparative metricsSide-by-sideReal-timeRelease ComparisonEntity selection, coverage type filterTest Coverage Summary by OS/BrowserPlatform summaryNumeric summaryReal-timeProject, ExecutiveTime range, project, release filtersPlatform Coverage StatisticsDetailed platform dataNumeric summaryReal-timeCompliance, Cross-platformTime range, project, release, platform filter

## Finding the Right Widget

Use these decision guides to quickly identify the widget that matches your needs.

### I need to monitor...

...daily testing progress and execution volume

- Use: Test Results Trend Daily (Bar), Test Runs Volume Trend (Line)

- Category: Test Execution Analysis

...test run outcomes and pass/fail ratios

- Use: Test Results Distribution (Pie), Test Runs Distribution by Status (Pie)

- Category: Test Execution Analysis

...manual vs. automated test execution balance

- Use: Test Executions Summary by Type (#), Test Runs Summary by Type (#)

- Category: Test Execution Analysis

...test execution performance and duration trends

- Use: Test Runs Duration Trend Daily (Line)

- Category: Test Execution Analysis

### I need to track...

...flaky or unstable tests

- Use: Test Failures Frequency Distribution (Histogram), Test Failures Summary (#)

- Category: Failure & Quality Analysis

...defect backlog and resolution progress

- Use: Defects Activity Trend Daily (Line & Bar), Defects Activity Summary (#)

- Category: Failure & Quality Analysis

...open defects by priority or severity

- Use: Open Defects Distribution by Priority (Pie), Total Current Open Defects by Priority, Total Current Open Defects by Severity

- Category: Failure & Quality Analysis

...root causes of test failures

- Use: Error Distribution by Failure Category

- Category: Failure & Quality Analysis

...requirement coverage and traceability

- Use: Requirement Coverage Summary (#), Requirement Coverage Trend (Bar), Requirement Coverage Statistics (#)

- Category: Coverage & Traceability

...testing across platforms and configurations

- Use: Test Coverage Distribution by Configuration (#), Test Coverage Distribution Top 10 by Configuration (Bar), Platform Coverage Statistics

- Category: Coverage & Traceability

...test case inventory and authoring activity

- Use: Published Test Cases Distribution by Type (Pie), Test Cases Publishing Activity Daily (Bar), Test Cases Summary by Publishing Status (#)

- Category: Test Case Management

### By Dashboard Type

Live Monitor Dashboard (real-time monitoring)

- Test Results Trend Daily (Bar)

- Test Results Summary (#)

- Test Runs Volume Trend (Line)

- Total Current Open Defects (all types)

Release Health Dashboard (release readiness)

- Test Results Distribution (Pie)

- Test Runs Distribution by Status (Pie)

- Requirement Coverage Summary (#)

- Requirement Coverage Trend (Bar)

- Open Defects Distribution by Priority (Pie)

- Test Failures Summary (#)

Project Dashboard (overall project health)

- Test Executions Summary by Type (#)

- Test Results Summary (#)

- Published Test Cases Summary by Type (#)

- Test Cases Summary by Publishing Status (#)

- Test Failures Frequency Distribution (Histogram)

Executive Dashboard (high-level insights)

- Test Results Distribution (Pie)

- Published Test Cases Summary by Type (#)

- Total Current Open Defects

- Requirement Coverage Summary (#)

- Test Coverage Summary by OS/Browser

Compliance Dashboard (traceability and audit)

- Requirement Coverage Statistics (#)

- Platform Coverage Statistics

- Requirement Coverage Comparison

## See Also

- [Dashboard Configuration Guide](/docs/dashboards/how-to/configuration) - Step-by-step instructions for adding and configuring widgets

- [All Reports Reference](/docs/getting-started/all-reports-reference) - Comprehensive catalog of all TestOps reports

- [Understanding Filters & Analysis Scope](/docs/getting-started/filters-and-scope) - Learn how dashboard filters affect widget data

- [Creating Custom Dashboards Tutorial](/docs/dashboards/tutorials/custom-dashboard) - Build your first custom dashboard with widgets

- [Release Health Dashboard Guide](/docs/dashboards/explanations/release-health) - Understanding the pre-built Release Health Dashboard

## 📍 Where to Go Next

Common next steps after Getting Started:

- [Dashboards & Monitoring](/docs/dashboards) - Apply your widget knowledge to build and configure dashboards for real-time quality monitoring

- [Investigating Test Failures](/docs/test-failures) - Use dashboard insights to investigate and resolve test failures systematically

- [Role-Based Workflows](/docs/workflows) - Follow a curated learning path tailored to your role (QA Manager, Manual Tester, Automation Engineer, or Product Owner)

Need help deciding? See [Workflow Guide: Role-Based Pathways](/docs/workflows/overview)
[Dashboard Quick ReferenceComprehensive catalog of TestOps dashboards, widgets, navigation patterns, and decision guide for finding the right dashboard for your needs.](/docs/dashboards/reference/dashboard-types)[Test Failures: Overview and Getting StartedInvestigate test failures systematically with AI-powered triage and Test Stability Intelligence to distinguish flaky tests from real defects and reduce debugging time from hours to minutes.](/docs/test-failures/test-failures-overview)