# Assess Test Quality

You can use the Test Case Health Analysis report report to understand how reliable your test cases are, to grade automation quality, and help you shift focus.

## Overview

The Test Case Health Analysis report provides a comprehensive view of your test case execution health across automated and manual tests. Monitor test case performance, identify problematic tests, and assess automation effectiveness through pass rate analysis.

Use this report to answer: Which test cases are consistently failing? How does your automation compare to manual testing in reliability? Where should you focus QA improvement efforts?

## Get Started

1. Access the Test Case Status Report

Navigate to the Test Case Health Analysis report:

- From the main navigation menu, select Reports
- Locate and click Test Case Health Analysis
- The report opens with default settings (last 30 days)

The initial view displays a summary banner, pie chart (status distribution), pass rate breakdown (Automation vs Manual), and detailed data table.

Note: If you see "No data available," verify your project has test cases with execution history.

2. Configure filters to view 

These filters/scopes are available:
- Date range selection: last 7 days, last 30 days,...
- Filter by Test Case Author
- Filter by Test Case Type (automated, manual, or both)
- Filter by Latest Status (passed, failed, error, skipped)
- Filter by Executor

3. View charts and data table

The following visualizations are on the report: 
- **Big numbers**: numbers counting executed tests tagged with [smart tags](/docs/katalon-testops/analytics/references/test-stability-metrics.md), for test stability analysis and investigating flaky tests. See [Investigate Flaky Tests](/docs/katalon-testops/analytics/test-results-failures/investigate-flaky-tests.md#step-1-detect-flaky-tests) to learn more.
- **Test Case Distribution By Execution Status**: breaking down all executed tests' results by four result status categories: passed, failed, error, and skipped. 

    Concerning patterns:

- Failed greater than 10%: Product quality issues or test maintenance needed
- Error greater than 5%: Infrastructure problems or brittle scripts
- Skipped greater than 15%: Disabled tests may hide quality issues

    Healthy suite: Passed 85-95%+, Failed less than 5%, Error less than 3%, Skipped less than 10%
- **Test Flakiness Distribution**: breaking down executed tests by flakiness categories: stable, potentially flaky, flaky, highly flaky.
- **Data table**: listing test case names with basic details and link to its latest result.

With the data table, you can :

- Sort data by each column.
- View a test case details, or its latest result.

4. Data sharing and exporting

You can share a view with existing filters, for easy revisiting:

<img/>

Each view can be exported to a CSV file, or shared with stakeholders:

<img/>

## Common Use Cases & Workflows

### Sprint Health Check

Goal: Monitor daily test health and prioritize fixes

Workflow:

- Set Analysis Scope to "Last 7 days"

- Review pie chart - Failed/Error percentages should decrease daily

- Filter Latest Status to "Failed" and "Error"

- Sort by "Last Execution Time"

- Assign failed tests to team for investigation

- Repeat daily

Success metric: Failed/Error approaching zero by sprint end

### Automation Effectiveness Assessment

Goal: Evaluate automation ROI and identify unreliable tests

Workflow:

- Set Analysis Scope to "Last 30 days"

- Compare Automation vs Manual pass rates

- If automation 10%+ lower:

Filter Type "Automated" + Status "Failed/Error"
Review frequently failing tests
Check failure patterns in details
Flag flaky tests for maintenance

Success metric: Automation pass rate equal to or higher than manual

### Team Performance Review

Goal: Assess execution quality and identify training needs

Workflow:

- Set Analysis Scope to review period

- Filter by Author or Last Executed By

- Review pass rates for that team member

- Look for patterns: Low pass rates (training), high error rates (environment), high skipped (incomplete)

Success metric: Pass rates above 85% for all team members

### Release Readiness Assessment

Goal: Verify test suite health before release

Workflow:

- Set Analysis Scope to release cycle dates

- Review overall pass rate (should be 95%+ for release)

- Filter to "Failed" and "Error"

- For each failure: Click to details, determine if blocking

- Export results for release management

- Make go/no-go decision

Success metric: Zero blockers, 95%+ overall pass rate

See [Configuring Quality Gates](/docs/dashboards/configuring-quality-gates) for automated readiness tracking.

### Defect Correlation Analysis

Goal: Link test cases to product defects

Workflow:

- Filter Latest Status to "Failed"

- Review failed tests in data table

- Click through to details

- Check if linked to Jira/Azure DevOps defect

- Create or link defects for unlinked failures

- Track resolution by monitoring when tests return to "Passed"

For defect linking guidance, see [Analyzing Defects](/docs/defects/analyzing-defects-and-issues).
