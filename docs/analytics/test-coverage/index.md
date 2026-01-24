Coverage & Traceability
# Analyzing Test Coverage in TestOps

Step-by-step tutorial for analyzing requirement test coverage to identify gaps and improve release confidence

# Analyzing Test Coverage in TestOps

Estimated time: 18 minutes
What you'll learn: How to use TestOps coverage reports to identify testing gaps, interpret coverage metrics, and take corrective action to improve release confidence

## Introduction

Test coverage analysis helps you answer critical questions before a release: Are all requirements tested? Which features lack sufficient testing? Where are our quality gaps? Without systematic coverage tracking, you risk shipping untested functionality or missing critical defects.

In this tutorial, you'll analyze test coverage in Katalon TestOps by working through a complete coverage assessment workflow—from accessing reports to taking corrective action on gaps.

Why coverage analysis matters:

- Find untested requirements before they become production issues

- Quantify how thoroughly each requirement has been tested

- Focus resources on the highest-risk coverage gaps

- Provide evidence of thorough testing for audits and stakeholders

## Before You Start

### Prerequisites

Before beginning this tutorial, ensure you have:

- Requirements loaded: Your project must have requirements imported from an ALM tool (Jira or Azure DevOps) and linked to a Sprint or Release

- Test cases linked: At least some test cases linked to requirements

- Test execution data: Some test executions completed within your target timeframe

- TestOps access: Permission to view reports in your project

Before You Start

For maximum effectiveness, you should be familiar with:

- [Getting Started basics](/docs/getting-started/introduction) - Understanding TestOps navigation and core concepts

- [Filters and Analysis Scope](/docs/getting-started/filters-and-scope) - How to set up analysis timeframes

Why? Coverage analysis relies on understanding how to filter data by Sprint, Release, or custom timeframes. These fundamentals ensure you analyze the right data.

### Understanding Coverage Types

TestOps tracks four key coverage metrics:

Test Coverage %

- Percentage of requirements with all linked test cases published (not in draft state)

- Formula: (Requirements with all test cases published / Total requirements) × 100

- Example: 80% Test Coverage means 80% of requirements have published test cases

Execution %

- Percentage of requirements with all linked test cases executed at least once

- Formula: (Requirements with all test cases executed / Total requirements) × 100

- Example: 60% Execution % means 40% of requirements haven't been tested yet

Pass %

- Percentage of requirements where all linked test cases passed their latest execution

- Formula: (Requirements with all test cases passed / Total requirements) × 100

- Example: 50% Pass % means half your requirements have passing tests

Configuration Coverage %

- Percentage of test cases executed across different OS and browser combinations

- Used in Configuration Coverage report (covered in a separate tutorial)

Coverage Status Levels:

TestOps categorizes each requirement into three status levels:

- Not Covered: No linked test cases, or all test cases are unpublished

- Partially Covered: Some test cases published, executed, or passed (but not all)

- Fully Covered: All test cases are published, executed, and passed

## Step 1: Access the Coverage Report

Let's start by navigating to the coverage report.

- Log in to Katalon TestOps

- Select your project from the project dropdown

- In the left sidebar, click Reports

- In the Reports list, locate Requirement Coverage During Period

- Click the report name to open it

The report loads with default filters (typically the most recent active Sprint or upcoming Release).

What you should see: A coverage report displaying bar charts, statistics, and a data table.

Success indicator: The report shows coverage visualization and data table populated with your project's requirements.

## Step 2: Select Analysis Scope

Before analyzing coverage, define your analysis scope—the timeframe and requirements you want to assess.

### Choose Sprint or Release

- In the Time range filter at the top of the report, verify the current selection

- Click the Time range dropdown to see available options:

Sprint: Analyze coverage for a specific sprint (recommended for agile teams)
Release: Analyze coverage for a specific release version
Custom date range: Define your own start and end dates

- Select Sprint if available (or Release if your team uses release-based planning)

- Choose a sprint from the dropdown (active sprints appear first)

- Click Apply to update the report

The Interval filter controls how coverage data is grouped in the bar chart (Day, Week, or Month). For most sprint analysis, the default Week interval works well.

Success indicator: The report header shows your selected Sprint or Release name, and the visualizations display data for that scope.

## Step 3: Interpret Coverage Metrics

Now that you've defined your analysis scope, interpret the coverage metrics to understand your testing status.

### Read the Bar Chart Visualization

The bar chart shows how coverage metrics changed over time during your Sprint or Release:

- X-axis: Time periods (days, weeks, or months based on your Interval setting)

- Y-axis: Coverage percentages (0-100%)

- Colored bars: Three series representing:

Blue: Test Coverage % (test cases published)
Green: Execution % (test cases executed)
Purple: Pass % (test cases passed)

How to interpret the chart:

- Upward trends are good: Rising percentages show improving coverage over time

- Gaps between bars: Large gaps indicate stages where requirements slow down in the testing pipeline

Example: If Test Coverage % is 90% but Execution % is 60%, you have published tests that haven't been run yet

- Flat or declining trends: May indicate stalled testing efforts or new requirements added without tests

Hover over any bar to see detailed information for that time period, including exact counts and percentages.

### Analyze the Statistics Panel

Below the bar chart, the statistics panel shows requirement counts by coverage status:

- Total Requirements: Total count of requirements in your Sprint or Release

- Not Covered: Requirements with no published test cases (highest priority to address)

- Partially Covered: Requirements with some testing completed but not fully tested

- Fully Covered: Requirements with all test cases published, executed, and passed (goal state)

What to look for:

- High "Not Covered" count: Indicates significant testing gaps—these requirements have no tests or only unpublished tests

- High "Partially Covered" count: Shows requirements being tested but haven't fully passed yet

- Low "Fully Covered" percentage: Suggests you're not ready for release; aim for 80%+ Fully Covered for high-confidence releases

Example interpretation:

Total: 50 requirements
Not Covered: 5 (10%)
Partially Covered: 20 (40%)
Fully Covered: 25 (50%)

Analysis: Half your requirements are fully tested. You have 5 requirements with no testing (highest risk) and 20 in progress. Focus on the "Not Covered" group first.

## Step 4: Identify Coverage Gaps

With coverage metrics understood, identify specific requirements that need attention.

### Filter for Not Covered Requirements

The data table at the bottom of the report lists all requirements with detailed coverage information. Let's find the high-risk gaps first:

- Scroll down to the Requirements Data Table

- Locate the Coverage Status filter dropdown (above the table or in the table header)

- Select Not Covered from the dropdown

- The table filters to show only requirements without published test cases

What you should see: A filtered list showing requirements with zero published test cases. These are your highest-priority gaps.

### Examine Table Columns

The data table provides detailed information for each requirement. Key columns include:

- Requirement ID: Clickable link to view the requirement in your ALM tool

- Requirement Name: Description of the requirement

- Linked Test Cases: Total count of test cases linked to this requirement

- Published Test Cases: Count of published (non-draft) test cases

- Executed Test Cases: Count of test cases that have been run

- Passed/Failed Test Cases: Count based on latest execution

- Coverage Status: Overall coverage level

By default, the table is sorted by Coverage Status (ascending), showing Not Covered requirements first.

### Identify Partially Covered Requirements

After addressing Not Covered requirements, focus on Partially Covered items:

- Clear the Coverage Status filter or change it to Partially Covered

- Review the filtered list

- Look for patterns:

Requirements with published tests but no executions (need to run tests)
Requirements with executions but failures (need to fix tests or investigate defects)
Requirements with some tests passing and some failing (need to resolve failures)

Success indicator: You now have a clear list of requirements organized by coverage priority.

## Step 5: Drill Down to Details

To understand why a requirement has a particular coverage status, drill down into its linked test cases.

### Click on a Requirement

- From your filtered data table, click on a Requirement ID

- A new tab opens showing the requirement details in your ALM tool (Jira or Azure DevOps)

- Review the requirement details:

What functionality it describes
Its priority or severity level
Related user stories or epics
Acceptance criteria

TestOps links directly to your ALM tool, so you see the authoritative requirement source.

### Understand the Coverage Gap

For each Not Covered or Partially Covered requirement, ask:

For Not Covered requirements:

- Is this requirement testable? (Some requirements may be documentation-only)

- Do test cases exist but need to be linked?

- Do test cases need to be created from scratch?

For Partially Covered requirements:

- Which test cases are published? Which are still drafts?

- Which test cases have been executed? Which haven't?

- Why are some test cases failing? Are defects logged?

Success indicator: You understand the specific gap for each requirement and can articulate what action is needed.

## Step 6: Take Corrective Action

Based on your gap analysis, take appropriate actions to improve coverage.

### Create Missing Test Cases

For Not Covered requirements with no linked test cases:

- Navigate to Test Management in TestOps

- Create new test cases covering the requirement's acceptance criteria

- Link the test cases to the requirement ID in your ALM tool

- Publish the test cases (move from draft to published state)

- Return to the coverage report and refresh—Test Coverage % should increase

### Link Existing Test Cases

If test cases exist but aren't linked:

- Search TestOps Test Management for test cases related to the requirement

- Edit each test case and add the requirement ID to the "Linked Requirements" field

- Save the test cases

- Refresh the coverage report to see updated Test Coverage %

### Execute Published Test Cases

For requirements with published test cases but low Execution %:

- Create a test suite or test run in TestOps including the unpublished test cases

- Execute the test suite (manual tests via TestOps, automated tests via CI/CD or Katalon Studio)

- Wait for execution results to sync to TestOps

- Refresh the coverage report—Execution % and Pass % should update

### Investigate and Resolve Failures

For requirements with failing test cases:

- Review the failed test execution details in TestOps

- Determine if the failure is:

Valid defect: Log a defect in your ALM tool and link it to the test execution
Test issue: Fix the test case and re-execute
Environment issue: Resolve the environment problem and re-run

- Re-execute the test after fixes

- Refresh the coverage report—Pass % should increase once tests pass

### Prioritize Your Efforts

Not all coverage gaps are equal. Prioritize based on:

- Requirement priority: Focus on high-priority or high-risk requirements first

- Coverage status: Address Not Covered before Partially Covered

- Release timeline: If the release is soon, focus on critical requirements only

- Defect impact: Resolve failures blocking critical functionality first

Success indicator: You've taken specific actions to close coverage gaps, and subsequent report refreshes show improved metrics.

## Hands-On Example: Sprint Coverage Analysis

Let's work through a realistic scenario.

### Scenario Setup

You're the QA Lead for Sprint 2.5 with a release in 2 weeks. You open the Requirement Coverage During Period report and see:

Statistics Panel:

- Total Requirements: 40

- Not Covered: 6 (15%)

- Partially Covered: 18 (45%)

- Fully Covered: 16 (40%)

Bar Chart (latest week):

- Test Coverage %: 80%

- Execution %: 60%

- Pass %: 50%

Your assessment: Only 40% fully covered. You need significant improvement before release.

### Investigate and Address Gaps

You filter by "Not Covered" and find 6 requirements. Two are high-priority:

REQ-125: User login with OAuth (High Priority)

- Gap: No test cases linked

- Action: Create 3 test cases covering OAuth flow

- Outcome: Link and publish → Test Coverage % increases to 82%

REQ-132: Shopping cart tax calculation (High Priority)

- Gap: No test cases linked

- Action: Create 4 test cases covering different tax scenarios

- Outcome: Link and publish → Test Coverage % increases to 85%

### Execute Tests

You create a test suite "Sprint 2.5 Coverage Sweep" including all published test cases with 0 executions. After execution over 3 days:

- Execution % increases from 60% to 85%

### Resolve Failures

After execution, Pass % is 58%. You investigate failures:

REQ-132: Shopping cart tax calculation (2 test cases failing)

- Investigation: Found bug in cross-border tax calculation

- Action: Logged defect DEFECT-456, developer fixes, you re-test

- Outcome: Tests pass, REQ-132 moves to Fully Covered

REQ-145: Email notification preferences (1 test case failing)

- Investigation: Test used incorrect assertion

- Action: Fixed test case and re-executed

- Outcome: Test passes, REQ-145 moves to Fully Covered

Pass % increases from 58% to 72%.

### Final Review (1 Week Before Release)

Updated Statistics:

- Total: 40

- Not Covered: 2 (5%) — Low-priority items only

- Partially Covered: 10 (25%)

- Fully Covered: 28 (70%)

Updated Metrics:

- Test Coverage %: 92%

- Execution %: 90%

- Pass %: 78%

Decision: Strong improvement. 70% fully covered, 92% have published tests. Recommend proceeding with release.

### Key Takeaways

- Prioritize by risk and focus on high-priority gaps first

- Work systematically through coverage stages (link → publish → execute → pass)

- Distinguish between valid defects and test issues

- Track trends over time to measure progress

- Use coverage percentages for data-driven release decisions

## Understanding What You've Learned

You've completed a comprehensive coverage analysis workflow in TestOps. You can now:

Coverage Metrics Mastery:

- Interpret Test Coverage %, Execution %, and Pass % metrics

- Understand Not Covered, Partially Covered, and Fully Covered status

- Read bar chart trends to identify coverage improvements or stalls

Gap Identification:

- Filter requirements by Coverage Status to find high-priority gaps

- Drill down into requirement details to understand specific gaps

- Distinguish between different gap types

Corrective Action:

- Create or link test cases to improve Test Coverage %

- Execute test cases to improve Execution % and Pass %

- Investigate and resolve test failures

- Prioritize coverage efforts based on requirement priority and timelines

## Next Steps

Explore these related topics to deepen your coverage expertise:

Detailed Coverage Report Usage:

- [Tracking Requirement Coverage Over Time](./tracking-requirement-coverage) — Monitor coverage trends across multiple sprints (Doc #31)

- [Analyzing Configuration Coverage](./analyzing-configuration-coverage) — Understand coverage across different OS and browser combinations (Doc #32)

Compliance and Traceability:

- [Building Traceability Matrices](./building-traceability-matrices) — Create requirement-to-test-to-defect traceability for audits (Doc #33)

Advanced Coverage Concepts:

- [Understanding Coverage Calculations](./understanding-coverage-calculations) — Deep dive into how TestOps calculates each metric (Doc #34)

Reference Documentation:

- [Coverage Report Reference](./coverage-report-reference) — Quick lookup guide for all coverage metrics and visualizations (Doc #36)

Foundational Topics:

- [Using Filters & Analysis Scope](../getting-started/filters-and-scope) — Master filtering techniques for all TestOps reports (Section 1, Doc #3)

- [Understanding Analysis Scope Types](../getting-started/analysis-scope-types) — Learn about sprint-based, release-based, and time-based scopes (Section 1, Doc #3b)

- [Assessing Release Readiness](../reports/assessing-release-readiness) — Use multiple reports including coverage for go/no-go release decisions (Section 3, Doc #15)

## See Also

- [All Reports Reference](../getting-started/all-reports-reference) — Complete catalog of TestOps reports

- [Dashboard vs Report: When to Use Each](../getting-started/dashboards-vs-reports) — Understand when to use dashboards vs reports for coverage

[Coverage & Traceability: Overview and Getting StartedTrack requirement coverage across releases, analyze configuration testing gaps, and generate audit-ready traceability matrices for regulatory compliance—comprehensive visibility into testing completeness from requirements to configurations to audit trails.](/docs/coverage/coverage-and-traceability-overview)[Tracking Requirement CoverageMonitor which requirements are tested by analyzing Test Coverage %, Execution %, and Pass % across sprints and releases in Katalon TestOps.](/docs/coverage/track-requirement-coverage)