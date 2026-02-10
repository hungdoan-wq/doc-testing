# Assess Test Quality

This document is about Test Case Health Analysis Report. Another use is [Investigate Flakiness](docs/katalon-testops/analytics/test-results-failures/investigate-flaky-tests.md)

You can use this report to understand how reliable your test cases are, to grade automation quality, and help you shift focus.

mention:
- where to access
- what widgets, filters
- use cases:

### Sprint Health Check

- Scope: _Last 7 days_
- Filter: _Failed + Error_
- Outcome: Daily prioritized fix list
    
### Automation Effectiveness Review

- Scope: _Last 30 days_
- Compare automated vs manual pass rates
- Outcome: Identify flaky or low-ROI automation

### Team or Executor Review

- Filter by _Author_ or _Last Executed By_
- Outcome: Detect training gaps or environment issues
    
### Release Readiness Signal

- Scope: Release window
- Review overall pass rate and unresolved failures
- Outcome: Go / no-go input for release decisions

<!--
<concise>
Assess test case health, surface unreliable tests, and compare automation versus manual reliability using execution pass rates in TestOps.

---

## Overview

The **Test Case Health Analysis** report provides a consolidated view of test case reliability across manual and automated testing. It helps teams quickly identify failing or error-prone tests, evaluate automation quality, and focus QA improvement efforts where they matter most.

Use this report to answer:

- Which test cases are consistently unhealthy?
    
- Is automation as reliable as manual testing?
    
- Where should test maintenance or process improvements focus?
    

---

## Access

1. Go to **Reports**.
    
2. Select **Test Case Health Analysis**.
    
3. The report opens with a default 30-day view.
    

---

## Core Capabilities

- Pass rate comparison between **Automated** and **Manual** tests
    
- Status distribution (Passed / Failed / Error / Skipped)
    
- Filterable test case list with latest execution status
    
- Drill-down into individual test case history
    
- Export for reporting and review
    

---

## Key Filters (Commonly Used)

- **Analysis Scope**: Adjust time window (7 / 30 / 90 days or custom)
    
- **Type**: Automated or Manual
    
- **Latest Status**: Focus on Failed or Error for fix prioritization
    
- **Author / Last Executed By**: Identify ownership, environment, or training issues
    

---

## Interpreting the Data

- **High Failed rate** → Product risk or test instability
    
- **High Error rate** → Infrastructure or brittle automation
    
- **Automation pass rate significantly lower than manual** → Automation reliability issue
    
- **Large Not Executed count** → Gaps in coverage or inactive tests
    

A healthy suite typically maintains:

- 85–95%+ overall pass rate
    
- Low error and skipped percentages
    

---

## Common Workflows

### Sprint Health Check

- Scope: _Last 7 days_
    
- Filter: _Failed + Error_
    
- Outcome: Daily prioritized fix list
    

### Automation Effectiveness Review

- Scope: _Last 30 days_
    
- Compare automated vs manual pass rates
    
- Outcome: Identify flaky or low-ROI automation
    

### Team or Executor Review

- Filter by _Author_ or _Last Executed By_
    
- Outcome: Detect training gaps or environment issues
    

### Release Readiness Signal

- Scope: Release window
    
- Review overall pass rate and unresolved failures
    
- Outcome: Go / no-go input for release decisions
    

---
</concise>


<!-- 
Content coming soon.
Test Case ActivityHealth & Stability
# Test Case Quality & Reliability Tracking

Monitor test case execution health, identify problematic test cases, and assess automation effectiveness through pass rate analysis in Katalon TestOps.

# Test Case Quality & Reliability Tracking

Time required: 15 minutes
Prerequisites:

- Access to Katalon TestOps Reports & Analytics module

- Test cases with execution history in your project

- Familiarity with [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope)

Related guides:

- [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types)

- [Investigating Test Failures](/docs/test-failures/investigating-test-failures)

- [Test Stability Intelligence](/docs/customization/test-stability-intelligence)

## Overview

The Test Case Health Analysis report provides a comprehensive view of your test case execution health across automated and manual tests. Monitor test case performance, identify problematic tests, and assess automation effectiveness through pass rate analysis.

Use this report to answer: Which test cases are consistently failing? How does your automation compare to manual testing in reliability? Where should you focus QA improvement efforts?

## How to Access the Test Case Status Report

Navigate to the Test Case Health Analysis report:

- From the main navigation menu, select Reports

- Locate and click Test Case Health Analysis

- The report opens with default settings (last 30 days)

The initial view displays a summary banner, pie chart (status distribution), pass rate breakdown (Automation vs Manual), and detailed data table.

Note: If you see "No data available," verify your project has test cases with execution history.

## How to Configure Filters

### Date Range Selection

- Click Analysis Scope dropdown

- Select: Last 7 days, Last 30 days (default), Last 90 days, or Custom range

- Click Apply to refresh

For scope options, see [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types).

### Filter by Test Case Author

- Click Author dropdown

- Select one or multiple authors

- Clear filter by clicking X or deselecting all

Use this to review individual team member test quality.

### Filter by Test Case Type

- Click Type dropdown

- Choose: Automated, Manual, or Both (default)

- Report recalculates pass rates for selected type

Essential for assessing automation ROI.

### Filter by Latest Status

- Click Latest Status dropdown

- Select: Passed, Failed, Error, or Skipped

- Data table updates to show matching test cases

Common use: Filter to "Failed" and "Error" for prioritized fix lists.

### Filter by Executor

- Click Last Executed By dropdown

- Select executors (users or agents)

- View test cases by specific executor

Helps identify environment issues or training needs.

### Combining Filters

Sprint health check: Set scope to "Last 7 days" + Type "Automated" + Status "Failed/Error"

Manual testing review: Type "Manual" + specific Author/Executor

Filters persist across navigation. Click Clear All Filters to reset.

## How to Interpret Visualizations

### Pie Chart Analysis

The status distribution pie chart shows test case health at a glance:

- Each slice = status category (Passed, Failed, Error, Skipped)

- Hover for exact counts and percentages

- Color coding: Green (Passed), Red (Failed), Orange (Error), Gray (Skipped)

Concerning patterns:

- Failed greater than 10%: Product quality issues or test maintenance needed

- Error greater than 5%: Infrastructure problems or brittle scripts

- Skipped greater than 15%: Disabled tests may hide quality issues

Healthy suite: Passed 85-95%+, Failed less than 5%, Error less than 3%, Skipped less than 10%

### Pass Rate Breakdown

Compares automation and manual test effectiveness:

- Automation Pass Rate: Percentage of automated tests passed

- Manual Pass Rate: Percentage of manual tests passed

- Calculation: (Passed / Total executed) × 100

Interpreting differences:

- Automation higher: Reliable; expand automated coverage

- Manual higher: Automation may be brittle; review stability

- Both high (greater than 90%): Balanced, healthy approach

- Both low (less than 80%): Product quality issues

Benchmarks: Excellent 95-100%, Good 90-94%, Warning 80-89%, Critical less than 80%

For quality thresholds, see [Configuring Quality Gates](/docs/dashboards/configuring-quality-gates).

### Total Counts & Summary Statistics

The summary banner displays:

- Total Test Cases: All test cases in scope

- Executed: Run at least once in period

- Not Executed: No execution history in period

- Overall Pass Rate: Combined across types

High "Not Executed" may indicate new tests not yet in runs, disabled tests, or selective execution strategies.

## How to Use the Data Table

Columns:

- ID - Clickable link to test case details

- Name - Test case descriptive name

- Type - Automated or Manual

- Last Executed By - User or agent

- Last Execution Time - Most recent execution

- Latest Status - Visual indicator (🟢 Passed, 🔴 Failed, 🟠 Error, ⚪ Skipped)

Sorting and searching:

- Click column headers to sort ascending/descending

- Use search box to filter by name or ID

- Sort by "Latest Status" to group failed tests

Navigating to details:

- Click any ID or Name to view execution history, failure patterns, requirements, logs

- Use browser back to return

Exporting:

- Click Export button (CSV or Excel)

- Use for executive reports, retrospectives, trend analysis, compliance

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

For stability analysis, see [Test Stability Intelligence](/docs/customization/test-stability-intelligence).

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

### Why are some test cases showing 'No Status'?

### How do I filter to only flaky tests?

### Can I track pass rate trends over time?

### What's the difference between Error and Failed status?

## See Also

- [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope) - Filtering techniques

- [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types) - Time vs build-based scope

- [Configuring Quality Gates](/docs/dashboards/configuring-quality-gates) - Pass rate thresholds

- [Investigating Test Failures](/docs/test-failures/investigating-test-failures) - Failure analysis

- [Test Stability Intelligence](/docs/customization/test-stability-intelligence) - Flakiness and reliability

- [Analyzing Defects](/docs/defects/analyzing-defects-and-issues) - Linking failures to defects

## Role-Based Workflows

[### Automation Engineer Workflow
See how Automation Engineers track test case quality and reliability metrics, monitor automated test pass rates, and identify unstable tests requiring stabilization work.](/docs/workflows/automation-engineer)[### QA Manager Workflow
Learn how QA Managers use test case quality tracking to assess automation effectiveness, monitor team testing health, and make data-driven decisions about test maintenance priorities.](/docs/workflows/qa-manager)[Analyze Test Execution HistoryTrack test stability trends over sprints, compare release quality objectively, and identify degrading tests using the Test Results Analysis Report.](/docs/test-case-reports/health-stability/analyze-test-execution-history)[Test Case Activity & Productivity MetricsTrack team productivity through test case publishing activity, monitor test case creation velocity, and identify productivity patterns in Katalon TestOps.](/docs/test-case-reports/publishing-lifecycle/analyze-team-productivity)
-->