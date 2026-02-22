# Analyze Testing Activities 

This report is for viewing execution history to rate stability, release quality, and long-term degradation.
Main points:
- get started - what widgets on this report, using filters to pinpoint the problem quickly
- key workflows/use cases + suggested steps:
  - to rate test stability
  - to compare quality between 2 releases
  - to identify degrading tests

<!--
<concise>
Test execution data is only useful if it reveals trends—not just outcomes. The **Test Results Analysis Report** turns raw execution history into clear signals about test stability, release quality, and long-term degradation, helping teams distinguish real regressions from test noise and make evidence-based quality decisions.

This report is designed for trend analysis: tracking how tests behave over time, comparing releases objectively, and identifying tests that quietly erode confidence before they become blockers.

## When to Use This Report

Use the Test Results Analysis Report when you need **historical perspective**, not a point-in-time snapshot:

- Evaluate test stability across sprints or longer time windows
- Compare quality between releases using consistent metrics
- Detect degrading or flaky tests early
- Support retrospectives, release reviews, and executive reporting
    
Another use case for this report is [Analyze Test Results](docs/katalon-testops/analytics/test-results-failures/analyze-test-results.md)

## What the Report Provides

At a glance, the report offers:

- Execution outcome trends over time (day / week / month)
    
- Summary rates for pass, fail, and error
    
- Flexible filtering across execution context (executor, platform, profile, test type)
    
- Drill-down access to individual execution records
    
- Exportable data for external analysis and reporting
    

---

## Interpreting Execution Patterns

Execution trends matter more than individual failures:

- **Sudden, consistent failures** typically indicate a new regression or environment change and should be investigated immediately.
    
- **Alternating pass/fail patterns** usually point to flaky automation and should be addressed as test stability work, not product defects.
    

A simple rule of thumb: consistency signals product risk; inconsistency signals test risk.

---

## Key Workflows

### Track Test Stability Over a Sprint

- Set Analysis Scope to Time-Based and select Last 30 days.
- Review the stacked bar chart for days with abnormal failure spikes.
- Filter the data table by Status = Failed and sort by Test Case Name.
- Flag test cases that fail repeatedly across different days as unstable.

### Compare Release Quality

- Set Analysis Scope to a particular release, save it as a view.
- Set Analysis Scope for another release.
- Switch between two scopes, compare pass, fail, and error rates from the summary metrics to assess quality improvement or regression.

### Identify Degrading Tests

- Set Analysis Scope to past 60-day, Time Interval to Week to rid of daily noise.
- Scan the chart for weeks with a rising failure trend.
- Filter Status = Failed and Execution Type = Automated.
- Identify test cases failing across multiple weeks as degrading candidates.

## Using Filters for Root-Cause Isolation

Filtering by execution context helps pinpoint failure sources quickly:

- **Execution Profile / Platform** → detect environment-specific issues
- **Executor** → separate tooling or setup problems from test logic issues
- **Manual vs. Automated** → assess automation reliability versus functional coverage

Concentrated failures in a single dimension usually reveal the fastest path to resolution.
</concise>

<!--

# Analyze Test Execution History

Track test stability trends over sprints, compare release quality objectively, and identify degrading tests using the Test Results Analysis Report.

This guide shows you how to use the Test Results Analysis Report to track test execution trends over time, compare release quality, and identify tests with declining stability. You'll learn three essential workflows: tracking test stability over sprints, comparing release quality objectively, and identifying degrading tests requiring stabilization work.

## Prerequisites

Before using this guide, you should have:

- Report view permission in Katalon TestOps

- Test execution history with at least 10 executions for meaningful trend analysis

- Basic understanding of Analysis Scope (see [Core Concepts](/docs/getting-started/core-concepts))

- Familiarity with test case health metrics (see [Get Started with Test Case Health Analysis](/docs/test-case-reports/get-started-with-test-case-health))

## Understanding Test Results Analysis Report

The Test Results Analysis Report provides historical visibility into test execution outcome trends over time. Unlike the Test Case Health Analysis Report which shows current status snapshots for morning triage, this report reveals pass/fail patterns across days, weeks, or months—enabling you to detect quality degradation, validate release improvements, and identify tests requiring stabilization.

When to use this report:

- Sprint retrospectives: Assess test stability trends over 30-day sprints

- Release comparison: Compare Release 1.0 vs Release 2.0 quality objectively

- Quality degradation detection: Identify tests with declining pass rates over 60-90 days

- Stakeholder reporting: Export trend data for executive presentations

Key capabilities:

- Stacked bar charts showing pass/fail/error distribution over time intervals (Day/Week/Month)

- Summary statistics displaying Pass Rate, Failure Rate, Error Rate at a glance

- Multi-dimensional filtering by executor, platform, execution profile, test type

- Data table drill-down showing individual test execution records

- CSV export for offline analysis and stakeholder presentations

### Interpreting Execution Patterns: Flaky vs Broken Tests

When reviewing test execution history, pattern recognition is critical for prioritizing fixes correctly:

Pattern A: Sudden Failure (New Issue - High Priority)

Days 1-27: All green bars (Passed)
Days 28-30: All red bars (Failed)

Interpretation: Test was stable for 27 days, suddenly started failing 3 days ago. Likely indicates:

- Recent code change broke functionality (product bug)

- Environment change (configuration, test data)

- Dependency failure (external service)

Action: HIGH PRIORITY—investigate recent changes, likely product bug

Pattern B: Flaky Test (Test Automation Issue - Lower Priority)

Alternating pattern: Green, Red, Green, Red, Green, Red...

Interpretation: Test passes and fails inconsistently without code changes. Likely indicates:

- Race conditions or timing issues in test automation

- Test data conflicts (shared data, cleanup issues)

- Non-deterministic test behavior

Action: LOWER PRIORITY—tag for test refactoring, not urgent product bug

Decision Rule: Sudden consistent failures require immediate investigation. Alternating pass/fail patterns indicate test stability issues requiring refactoring.

## Workflow 1: Track Test Stability Over Sprint

Scenario: You completed Sprint 5 and need to assess which test cases became unstable during the sprint for backlog prioritization.

This workflow helps QA Managers identify tests with declining pass rates over 30 days, providing data-driven evidence for stabilization work prioritization.

### Navigate to Test Results Analysis Report

From the main navigation, go to Reports > Test Results Analysis Report.

### Configure Time-Based Scope

Set Analysis Scope to Time-Based and select Date Range: Last 30 days. This scope captures all test executions within your sprint window.

Note: Time intervals are auto-selected based on date range but can be manually overridden. The above recommendations optimize data granularity vs. noise for different analysis periods.

### Review Stacked Bar Chart for Failure Patterns

Examine the stacked bar chart where each bar represents one day. Green segments show passed tests, red segments show failed tests, and orange segments show errors.

Identify days with higher-than-usual red segments (failure spikes). These days indicate potential stability issues requiring investigation.

### Filter Data Table by Failed Status

Below the chart, click the Status filter and select Failed to show only failing test executions. This isolates unstable tests from successful executions.

Sort the data table by Test Case Name (click column header) to group multiple executions of the same test together.

### Identify Tests with Multiple Failures

Look for test case IDs appearing multiple times in the filtered table across different dates. Tests failing 5 or more times in 30 days indicate instability, not one-time environment failures.

For each test with multiple failures:

- Click the Test Case ID to open Test Case Details

- Check the PFS score from Test Case Health Analysis Report (link in details page)

- If PFS ≥ 0.7, the test is highly flaky and requires high-priority stabilization

### Export Results for Backlog Prioritization

Click Export to CSV to download the filtered failed test results. The exported file includes Test Case ID, Test Case Name, Status, Start Time, Duration, and Error Message—providing complete context for sprint planning and ticket creation.

Outcome: You now have a prioritized list of unstable test cases with historical failure frequency, ready for sprint planning. Tests appearing in multiple executions across different dates are confirmed stability issues requiring backlog tickets.

Key Insight: Daily granularity reveals failure patterns that weekly views miss. A test failing every 3-4 days indicates flakiness, while a test failing on consecutive days suggests a recent regression.

## Workflow 2: Compare Release Quality

Scenario: Release 2.0 just completed. You need objective data proving quality improved compared to Release 1.0 for executive presentation.

This workflow helps QA Directors compare test execution outcomes between releases, providing data-driven evidence for stakeholder reporting.

### Configure Release-Based Scope for Release 1.0

Navigate to Reports > Test Results Analysis Report. Set Analysis Scope to Release-Based and select Release 1.0 from the dropdown.

### Capture Release 1.0 Baseline Metrics

Review the summary statistics cards at the top of the report:

- Pass Rate: Percentage of passed tests (e.g., 87.5%)

- Failure Rate: Percentage of failed tests (e.g., 8.9%)

- Error Rate: Percentage of errored tests (e.g., 3.6%)

- Total Executions: Total number of test runs (e.g., 1,523)

Take a screenshot or note these values for comparison. Examine the stacked bar chart to observe failure distribution patterns (red segments).

### Switch to Release 2.0 and Compare

Change the Release dropdown to Release 2.0 while keeping all other settings identical. This ensures an apples-to-apples comparison with the same view configuration.

### Calculate Quality Improvement

Compare the summary statistics side-by-side:

- Pass Rate: 87.5% (Release 1.0) → 92.1% (Release 2.0) = 4.6% improvement

- Failure Rate: 8.9% → 5.3% = 3.6% reduction

- Error Rate: 3.6% → 2.6% = 1% reduction

Review the stacked bar chart for Release 2.0. Confirm fewer red segments compared to Release 1.0 chart (visual evidence of fewer failures).

### Compare Manual vs Automated Pass Rates

Apply the Execution Type filter and compare Manual vs Automated pass rates across both releases. This reveals whether automation quality improved alongside overall quality.

Export both release datasets to CSV by switching between releases and clicking Export to CSV for each. Use Excel or Google Sheets to create comparison charts for your executive presentation.

Outcome: You have data-driven comparison proving Release 2.0 quality improved 4.6% over Release 1.0, with visual evidence (charts) and exported data ready for executive presentation.

Best Practice: Always compare percentages (pass rate), not raw counts (passed count). Release 2.0 may have 2× more test executions than Release 1.0, making raw count comparisons misleading.

## Workflow 3: Identify Degrading Tests

Scenario: Test failures seem to be increasing gradually. You need to identify which specific tests are degrading over time (not just one-time failures) to justify a stabilization sprint.

This workflow helps Automation Engineers identify tests with declining pass rates over 60 days, prioritized by failure frequency and flakiness scores.

### Configure 60-Day Time-Based Scope

Navigate to Reports > Test Results Analysis Report. Set Analysis Scope to Time-Based and select Date Range: Last 60 days.

Set Time Interval to Week. Weekly intervals smooth daily noise while preserving trend visibility—ideal for long-term degradation detection.

### Identify Weeks with Increasing Failures

Examine the stacked bar chart where each bar represents one week. Look for weeks with increasing red segments (failure trend), indicating quality degradation over time.

Click on a specific week with high failure count in the chart. This automatically filters the data table below to show only that week's failed executions.

### Filter by Automated Test Type

Apply the Execution Type filter and select Automated to focus on automated test stability. Manual tests typically have higher pass rates, so isolating automated tests reveals framework or flakiness issues more clearly.

### Group by Test Case Name and Identify Repeating Failures

In the data table, sort by Test Case Name (click column header) to group multiple executions alphabetically. Identify test cases appearing multiple times in Failed status across different weeks.

Degrading test criteria:

- Test case fails 5+ times across different weeks in 60-day period

- Failures occur on different dates (not same day repeated)

- Test appears in multiple weekly buckets (indicates sustained instability)

### Cross-Reference with PFS Scores

For each degrading test identified:

- Click the Test Case ID to open Test Case Details

- Navigate to Test Case Health Analysis Report (linked in details page)

- Check the PFS score:

PFS ≥ 0.7 = Highly flaky, high-priority fix
PFS 0.3-0.7 = Potentially flaky, medium priority
PFS less than 0.3 = Legitimate regression, investigate recent code changes

- Review Median Duration in details page: If duration is increasing over time, this indicates performance regression requiring investigation

### Export Degrading Tests for Stabilization Sprint

Click Export to CSV to download the filtered results. Ensure your export includes these columns:

- Test Case ID and Test Case Name (for ticket creation)

- Status (to confirm Failed)

- Start Time (to show failure distribution over time)

- Duration (to detect performance regressions)

- Error Message (for root cause analysis)

Create stabilization tickets in your backlog using the exported data as evidence, prioritizing by failure frequency and PFS score.

Outcome: You have a prioritized list of 5-10 test cases with declining pass rates over 60 days, categorized by PFS score, ready for stabilization sprint backlog. Tests appearing in multiple weeks with Failed status are confirmed degrading tests (not environment flukes).

Pro Tip: Weekly intervals smooth daily noise for long-term trend analysis. A test failing in 4 different weeks over 60 days indicates chronic instability requiring immediate attention.

## Understanding Multi-Dimensional Analysis

Failures concentrated in specific execution contexts (platform, executor, profile) reveal root causes more effectively than analyzing all failures together. Use these filtering strategies to isolate failure sources:

### Filter by Execution Profile

Use case: Determine if failures are platform-specific.

Apply the Execution Profile filter to isolate results by browser, OS, or environment configuration. If all 15 failures in the last 7 days occurred on Safari browser with the same Execution Profile, you've identified a Safari compatibility issue requiring platform-specific investigation.

### Filter by Executor

Use case: Identify training needs or environment issues.

Apply the Executor filter to see which team members or automation agents triggered test executions. If all failures come from one tester's executions, this indicates a training need or local environment configuration issue, not a test problem.

### Filter by Test Type (Manual vs Automated)

Use case: Assess automation effectiveness.

Apply the Test Type filter and compare Manual vs Automated pass rates. Automated tests typically have 10-15% lower pass rates than manual tests due to flakiness. If the difference exceeds 20%, you have an automation quality issue requiring framework stabilization.


-->