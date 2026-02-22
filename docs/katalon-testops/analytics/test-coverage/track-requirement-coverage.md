# Track Requirement Coverage


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

<iframe src="https://demo.arcade.software/RvDxt5ydtLf9tCuux8X0?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" title="Requirements Coverage Analysis Report" frameborder="0" loading="lazy" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" allow="clipboard-write" style={{ width: "100%", height: "400px", border: "none" }} ></iframe>

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

<!--

Monitor which requirements are tested by analyzing Test Coverage %, Execution %, and Pass % across sprints and releases in Katalon TestOps.

# Tracking Requirement Coverage

Time required: 15 minutes

Prerequisites:

- Requirements loaded from ALM (Jira or Azure DevOps) and stored in TestOps

- Test cases linked to requirements

- At least one sprint or release configured

- Test executions completed

Related guides:

- [Analyzing Test Coverage](/docs/coverage/analyzing-test-coverage) — Complete coverage analysis workflow

- [Configuration Coverage Analysis](/docs/coverage/configuration-coverage-analysis) — Coverage across environments and browsers

- [Building Traceability Matrices](/docs/coverage/building-traceability-matrices) — Audit-ready traceability reports

## Overview

The Requirement Coverage report answers the critical question: "Which requirements are adequately tested?" This report tracks three key coverage metrics—Test Coverage %, Execution %, and Pass %—and categorizes each requirement by coverage status (Not Covered, Partially Covered, Fully Covered). Use this report to identify testing gaps, prioritize untested requirements, and generate compliance-ready coverage evidence.

This guide walks you through accessing, configuring, and analyzing the Requirement Coverage report to drive informed testing decisions.

## Understanding Coverage Metrics

The Requirement Coverage report tracks three distinct coverage dimensions:

Test Coverage %: Percentage of requirements with all test cases published

- Formula: (Count of requirements with all tests published / Total requirements) × 100

- Indicates: Completeness of test case authoring and linkage

Execution %: Percentage of requirements with all test cases executed

- Formula: (Count of requirements with all tests executed / Total requirements) × 100

- Indicates: Testing progress and execution activity

Pass %: Percentage of requirements with all test cases passed

- Formula: (Count of requirements with all tests passed / Total requirements) × 100

- Indicates: Quality and readiness of requirements

📖 Deep Dive: For detailed calculation formulas, examples, and methodology, see [Understanding Coverage Calculations](/docs/coverage/understanding-coverage-calculations).

## Accessing the Requirement Coverage Report

To open the report:

- Navigate to Reports in the main navigation menu

- Select Requirement Coverage During Period from the report list

Alternative: From Home > Project Dashboard, click a Requirement Coverage widget to drill down to the full report

- The report opens with default filters applied (typically the current active sprint or most recent release)

Expected outcome: The report displays with three main sections: filter controls at the top, visualizations in the middle (bar chart and statistics panel), and a detailed data table at the bottom.

## Configuring Filters

Filters define which requirements appear in the report and how data is grouped over time.

### Selecting Sprint or Release

Single selection only: The Requirement Coverage report allows selecting one sprint OR one release at a time (not multiple).

To select a sprint or release:

- Click the Sprint/Release dropdown in the filter panel

- Choose the scope type:

Sprint: Select a specific sprint (active or closed)
Release: Select a specific release (released or unreleased)

- Select the specific sprint or release from the list

The system defaults to the active sprint if available, or the most recently closed sprint
If no sprints exist, the system defaults to the upcoming release or most recently released version

- Click Apply to update the report

Expected outcome: The report displays only requirements linked to the selected sprint or release. The bar chart and data table update to reflect the filtered scope.

📖 Scope Details: For complete information on sprint/release scope selection logic and defaults, see [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types).

### Choosing Interval

The Interval filter controls how data is grouped in the bar chart visualization.

Available intervals:

- Daily: Show coverage metrics for each day (best for short sprints or detailed tracking)

- Weekly: Show coverage metrics for each week (best for standard 2-week sprints)

To set the interval:

- Click the Interval dropdown

- Select Daily or Weekly

- Click Apply

Expected outcome: The bar chart updates to display coverage percentages grouped by the selected interval (daily or weekly).

### Adjusting Time Range

By default, the report shows data for the entire selected sprint or release period. You can further narrow the time range if needed.

To adjust the time range:

- Click the Time Range selector (typically displays start and end dates)

- Select a Start Date from the date picker

- Select an End Date from the date picker

- Click Apply

Expected outcome: The report filters to show only data within the custom date range, useful for mid-sprint reviews or partial sprint analysis.

## Understanding Coverage Status Levels

Every requirement is assigned a Coverage Status based on three criteria: test case publication, execution, and pass/fail results.

### Not Covered (Red)

Definition: No linked test cases are published

Criteria:

- Test cases status: Not published

- Test case execution: Not applicable

- Test case results: Not applicable

Action needed: Create and publish test cases for this requirement

### Partially Covered (Yellow)

Definition: Some test cases are published, executed, or passed—but not all

Criteria:

- Test cases status: Some published (but not all)

- Test case execution: Some executed (but not all)

- Test case results: Some passed (but not all)

Action needed: Complete test authoring, execute remaining tests, or fix failing tests

### Fully Covered (Green)

Definition: All linked test cases are published, executed, and passed

Criteria:

- Test cases status: All published

- Test case execution: All executed

- Test case results: All passed (latest execution)

Action needed: None—requirement is adequately tested with passing results

⚠️ Important: Coverage status reflects the latest test execution results. If a previously passing test fails in a subsequent run, the requirement status changes from Fully Covered to Partially Covered.

## Reading Visualizations

The report provides two complementary visualizations: a bar chart for trend analysis and a statistics panel for quick summary.

### Bar Chart: Coverage Over Time

The bar chart displays coverage percentages grouped by your selected interval (daily or weekly).

Chart elements:

- X-axis: Time periods (days or weeks based on interval filter)

- Y-axis: Coverage percentage (0-100%)

- Series: Three bars per time period representing Test Coverage %, Execution %, and Pass %

Interacting with the chart:

- Hover over a bar: View detailed information including:

Time period
Count of requirements in that coverage category
Percentage over total requirements

- Click a bar: The data table filters to show only requirements matching the selected coverage type and time period

Expected outcome: Clicking a bar drills down to specific requirements, enabling quick investigation of coverage gaps.

### Statistics Panel: Requirement Count by Status

The statistics panel displays total counts and percentages by coverage status level.

Information displayed:

- Total unique requirements in the selected sprint/release

- Count and percentage of Not Covered requirements (red)

- Count and percentage of Partially Covered requirements (yellow)

- Count and percentage of Fully Covered requirements (green)

Use this panel to:

- Quickly assess overall coverage health

- Identify high-priority gaps (Not Covered count)

- Track progress toward full coverage

## Analyzing the Data Table

The data table lists all requirements with detailed coverage information.

### Table Columns

ColumnDescriptionLatest Executed TimeMost recent test execution timestamp for this requirementRequirement IDUnique identifier from ALM system (clickable link to requirement details)Requirement NameDescriptive requirement titleLinked Test CasesCount of test cases linked to this requirementPublished Test CasesCount of test cases published (ready for execution)Executed Test CasesCount of test cases executed at least oncePassed Test CasesCount of test cases with latest result = PASSEDFailed Test CasesCount of test cases with latest result = FAILEDTotal ExecutionsCount of all test execution results for this requirementLinked DefectsCount of defects linked to test executionsCoverage StatusNot Covered / Partially Covered / Fully Covered

### Sorting the Table

Default sort: Coverage Status (Level), Ascending — This prioritizes Not Covered requirements at the top.

To change sorting:

- Click any sortable column header:

Latest Executed Time: Find recently tested or stale requirements
Coverage Status: Group by coverage level
Total Executions: Identify heavily tested requirements
Requirement ID: Alphabetical or numeric ordering

- Click again to reverse sort direction (ascending ↔ descending)

Expected outcome: Table re-orders based on selected column and direction.

### Filtering the Table

To filter by coverage status:

- Click the Coverage Status filter dropdown above the table

- Select one or more status levels:

Not Covered
Partially Covered
Fully Covered

- The table updates to show only requirements matching the selected status(es)

Expected outcome: Table displays filtered subset of requirements, making it easier to focus on specific coverage categories.

### Drilling Down to Requirement Details

To view detailed requirement information:

- Click the Requirement ID link in any table row

- The system opens the requirement detail page in your ALM system (Jira or Azure DevOps) in a new tab

Expected outcome: You can view full requirement details, linked test cases, acceptance criteria, and related defects in the source ALM system.

## Taking Action Based on Coverage Data

Use the Requirement Coverage report to drive testing activities and close coverage gaps.

### Addressing Not Covered Requirements

Problem: Requirements with no published test cases represent critical gaps.

Actions:

- Identify root cause:

No test cases authored yet?
Test cases exist but not linked to requirement?
Test cases drafted but not published?

- Prioritize by risk: Focus on high-priority or high-risk requirements first

- Create test cases:

Author new test cases in Katalon Studio or TestOps
Link test cases to requirements via ALM integration
Publish test cases to make them available for execution

- Verify linkage: Return to the report after publishing to confirm status changes to Partially Covered or Fully Covered

### Improving Partially Covered Requirements

Problem: Some test cases exist, but coverage is incomplete.

Actions:

- Drill down to requirement details: Click Requirement ID to view in ALM system

- Identify gaps:

Are all scenarios covered by test cases?
Are test cases published but not executed?
Are test cases failing (latest result = FAILED)?

- Address specific gaps:

Missing test cases: Author additional test cases to cover untested scenarios
Unpublished tests: Publish test cases to make them executable
Unexecuted tests: Schedule test execution or add to test suite
Failing tests: Investigate failures and fix defects or update test cases

- Track progress: Monitor the report as test executions complete and status improves

### Maintaining Fully Covered Requirements

Goal: Keep requirements in Fully Covered status through ongoing testing.

Actions:

- Include in regression suites: Ensure test cases execute regularly to detect regressions

- Monitor for failures: Even Fully Covered requirements can regress—watch for status changes to Partially Covered

- Link new defects: If test cases fail, link failures to defects and track resolution

- Update test cases: As requirements evolve, update test cases and re-execute to maintain coverage

## Use Case: Sprint Retrospective Coverage Review

This practical scenario demonstrates how to use the Requirement Coverage report for sprint retrospective analysis.

Scenario: QA Manager Tran is reviewing sprint coverage during a retrospective to assess testing completeness and identify process improvements.

Steps:

- Open the report: Navigate to Reports > Requirement Coverage During Period

- Select completed sprint:

Click Sprint/Release dropdown
Select the completed sprint (e.g., "Sprint 2024.11")
Click Apply

- Review overall coverage:

Check statistics panel: 15 requirements Fully Covered, 8 Partially Covered, 12 Not Covered
Calculate coverage rate: 15/35 = 43% Fully Covered

- Analyze coverage trend:

Set interval to Weekly
Review bar chart to see if coverage improved throughout sprint
Identify if coverage gaps appeared late in sprint (red flag)

- Drill down to gaps:

Filter data table by Coverage Status = Not Covered
Review the 12 uncovered requirements: Are they low-priority? Discovered late? Missed during planning?

- Identify action items:

Requirements without tests: Assign test case authoring in next sprint
Partially covered requirements: Prioritize completing test execution
Process improvement: If many requirements discovered late, improve backlog refinement

- Share findings:

Export coverage data (if available) or take screenshots
Present to team during retrospective with specific action items

Outcome: The team identifies that 12 requirements lack test cases due to late-sprint requirement changes. Action item: Improve requirement finalization during sprint planning to enable earlier test authoring.

## Exporting Coverage Data

If your TestOps configuration supports report export:

To export coverage data:

- Click the Export button (typically in the top-right corner of the report)

- Select export format:

CSV: For data analysis in Excel or other tools
PDF: For stakeholder reports or compliance documentation

- The system generates and downloads the export file

Expected outcome: Export includes all data from the current filtered view (respects sprint/release selection and coverage status filters).

📋 Compliance: For audit-ready traceability reports including requirement-to-test linkage, see [Building Traceability Matrices](/docs/coverage/building-traceability-matrices).

## Troubleshooting Common Issues

### Coverage shows 0% despite having test cases linked

### Requirements not appearing in the report

### Status stuck at Partially Covered despite passing tests

### Coverage percentages don't add up to 100%

## Role-Based Workflows

[### QA Manager Workflow
See how QA Managers use Requirement Coverage reports to facilitate release decisions and track quality gaps across sprints—essential for go/no-go decisions.](/docs/workflows/qa-manager)[### Product Owner Workflow
Learn how Product Owners track requirement validation progress and prioritize test creation based on coverage gaps to ensure release readiness.](/docs/workflows/product-owner)

## See Also

Coverage Analysis Workflow:

- [Analyzing Test Coverage](/docs/coverage/analyzing-test-coverage) — Complete tutorial for coverage analysis from start to finish

- [Configuration Coverage Analysis](/docs/coverage/configuration-coverage-analysis) — Ensure testing across browsers, environments, and platforms

- [Building Traceability Matrices](/docs/coverage/building-traceability-matrices) — Generate audit-ready requirement-to-test traceability

Understanding Coverage:

- [Understanding Coverage Calculations](/docs/coverage/understanding-coverage-calculations) — Detailed formulas, examples, and methodology for all coverage metrics

- [Coverage Report Reference](/docs/coverage/coverage-report-reference) — Quick reference for all coverage metrics and definitions

Foundation:

- [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope) — Master filtering basics

- [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types) — Learn when to use Sprint, Release, or Time-based scope

Quality Management:

- [Configuring Quality Gates](/docs/release-readiness/configuring-quality-gates) — Set coverage thresholds and pass/fail criteria

- [Release Metrics & Tracking](/docs/release-readiness/release-metrics-tracking) — Monitor sprint/release progress and readiness

[Analyzing Test Coverage in TestOpsStep-by-step tutorial for analyzing requirement test coverage to identify gaps and improve release confidence](/docs/coverage/get-started-with-coverage-analysis)[Building Traceability MatricesLearn how to create comprehensive traceability matrices in Katalon TestOps that map requirements to test cases, executions, and defects for compliance audits, gap analysis, and regulatory documentation (FDA 21 CFR Part 11, ISO 13485).](/docs/coverage/build-traceability-matrices)

-->