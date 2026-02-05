# Analyze Testing Activities

This doc is about Test Results Analysis Report. Another use case is [Analyze Test Results](docs/katalon-testops/analytics/test-results-failures/analyze-test-results.md)

<!--

Content coming soon.
Test Case ActivityHealth & Stability
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

#_r_103_{margin:1.5rem auto 0;}#_r_103_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_103_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_103_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_103_ .error-icon{fill:#552222;}#_r_103_ .error-text{fill:#552222;stroke:#552222;}#_r_103_ .edge-thickness-normal{stroke-width:1px;}#_r_103_ .edge-thickness-thick{stroke-width:3.5px;}#_r_103_ .edge-pattern-solid{stroke-dasharray:0;}#_r_103_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_103_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_103_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_103_ .marker{fill:#333333;stroke:#333333;}#_r_103_ .marker.cross{stroke:#333333;}#_r_103_ svg{font-family:inherit;font-size:16px;}#_r_103_ p{margin:0;}#_r_103_ .label{font-family:inherit;color:#333;}#_r_103_ .cluster-label text{fill:#333;}#_r_103_ .cluster-label span{color:#333;}#_r_103_ .cluster-label span p{background-color:transparent;}#_r_103_ .label text,#_r_103_ span{fill:#333;color:#333;}#_r_103_ .node rect,#_r_103_ .node circle,#_r_103_ .node ellipse,#_r_103_ .node polygon,#_r_103_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_103_ .rough-node .label text,#_r_103_ .node .label text,#_r_103_ .image-shape .label,#_r_103_ .icon-shape .label{text-anchor:middle;}#_r_103_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_103_ .rough-node .label,#_r_103_ .node .label,#_r_103_ .image-shape .label,#_r_103_ .icon-shape .label{text-align:center;}#_r_103_ .node.clickable{cursor:pointer;}#_r_103_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_103_ .arrowheadPath{fill:#333333;}#_r_103_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_103_ .flowchart-link{stroke:#333333;fill:none;}#_r_103_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_103_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_103_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_103_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_103_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_103_ .cluster text{fill:#333;}#_r_103_ .cluster span{color:#333;}#_r_103_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_103_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_103_ rect.text{fill:none;stroke-width:0;}#_r_103_ .icon-shape,#_r_103_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_103_ .icon-shape p,#_r_103_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_103_ .icon-shape rect,#_r_103_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_103_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_103_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_103_ :root{--mermaid-font-family:inherit;}
Yes

Yes

What's Your Goal?

Triage Today's Failures?

Track Quality Trends?

Use Test Case Health Analysis Report

Use Test Results Analysis Report

Latest status snapshotPFS scores, Smart TagsMorning triage workflow

Historical trends over timePass/fail patternsSprint retrospectives

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

Set Time Interval to Day to show daily granularity, revealing day-to-day failure patterns.
#_r_105_{margin:1.5rem auto 0;}#_r_105_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_105_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_105_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_105_ .error-icon{fill:#552222;}#_r_105_ .error-text{fill:#552222;stroke:#552222;}#_r_105_ .edge-thickness-normal{stroke-width:1px;}#_r_105_ .edge-thickness-thick{stroke-width:3.5px;}#_r_105_ .edge-pattern-solid{stroke-dasharray:0;}#_r_105_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_105_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_105_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_105_ .marker{fill:#333333;stroke:#333333;}#_r_105_ .marker.cross{stroke:#333333;}#_r_105_ svg{font-family:inherit;font-size:16px;}#_r_105_ p{margin:0;}#_r_105_ .label{font-family:inherit;color:#333;}#_r_105_ .cluster-label text{fill:#333;}#_r_105_ .cluster-label span{color:#333;}#_r_105_ .cluster-label span p{background-color:transparent;}#_r_105_ .label text,#_r_105_ span{fill:#333;color:#333;}#_r_105_ .node rect,#_r_105_ .node circle,#_r_105_ .node ellipse,#_r_105_ .node polygon,#_r_105_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_105_ .rough-node .label text,#_r_105_ .node .label text,#_r_105_ .image-shape .label,#_r_105_ .icon-shape .label{text-anchor:middle;}#_r_105_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_105_ .rough-node .label,#_r_105_ .node .label,#_r_105_ .image-shape .label,#_r_105_ .icon-shape .label{text-align:center;}#_r_105_ .node.clickable{cursor:pointer;}#_r_105_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_105_ .arrowheadPath{fill:#333333;}#_r_105_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_105_ .flowchart-link{stroke:#333333;fill:none;}#_r_105_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_105_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_105_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_105_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_105_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_105_ .cluster text{fill:#333;}#_r_105_ .cluster span{color:#333;}#_r_105_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_105_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_105_ rect.text{fill:none;stroke-width:0;}#_r_105_ .icon-shape,#_r_105_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_105_ .icon-shape p,#_r_105_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_105_ .icon-shape rect,#_r_105_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_105_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_105_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_105_ :root{--mermaid-font-family:inherit;}
Less than 14 days

14-90 days

More than 90 days

Select Date Range

Range Duration?

Use Daily Interval

Use Weekly Interval

Use Monthly Interval

Best for: Sprint analysisReveals day-to-day patterns

Best for: 30-90 day trendsSmooths daily noise

Best for: Quarterly reviewStrategic overview

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
#_r_108_{margin:1.5rem auto 0;}#_r_108_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_108_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_108_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_108_ .error-icon{fill:#552222;}#_r_108_ .error-text{fill:#552222;stroke:#552222;}#_r_108_ .edge-thickness-normal{stroke-width:1px;}#_r_108_ .edge-thickness-thick{stroke-width:3.5px;}#_r_108_ .edge-pattern-solid{stroke-dasharray:0;}#_r_108_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_108_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_108_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_108_ .marker{fill:#333333;stroke:#333333;}#_r_108_ .marker.cross{stroke:#333333;}#_r_108_ svg{font-family:inherit;font-size:16px;}#_r_108_ p{margin:0;}#_r_108_ .label{font-family:inherit;color:#333;}#_r_108_ .cluster-label text{fill:#333;}#_r_108_ .cluster-label span{color:#333;}#_r_108_ .cluster-label span p{background-color:transparent;}#_r_108_ .label text,#_r_108_ span{fill:#333;color:#333;}#_r_108_ .node rect,#_r_108_ .node circle,#_r_108_ .node ellipse,#_r_108_ .node polygon,#_r_108_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_108_ .rough-node .label text,#_r_108_ .node .label text,#_r_108_ .image-shape .label,#_r_108_ .icon-shape .label{text-anchor:middle;}#_r_108_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_108_ .rough-node .label,#_r_108_ .node .label,#_r_108_ .image-shape .label,#_r_108_ .icon-shape .label{text-align:center;}#_r_108_ .node.clickable{cursor:pointer;}#_r_108_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_108_ .arrowheadPath{fill:#333333;}#_r_108_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_108_ .flowchart-link{stroke:#333333;fill:none;}#_r_108_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_108_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_108_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_108_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_108_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_108_ .cluster text{fill:#333;}#_r_108_ .cluster span{color:#333;}#_r_108_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_108_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_108_ rect.text{fill:none;stroke-width:0;}#_r_108_ .icon-shape,#_r_108_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_108_ .icon-shape p,#_r_108_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_108_ .icon-shape rect,#_r_108_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_108_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_108_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_108_ :root{--mermaid-font-family:inherit;}
1 time in 30 days

5+ times in 30 days

PFS ≥ 0.7

PFS 0.3-0.7

PFS < 0.3

Review Failed Test in Data Table

How Many TimesDid It Fail?

One-Time Failure

Degrading Test

Environment flukeMonitor, don't prioritize

Check PFS Score

Highly FlakyHigh Priority Fix

Potentially FlakyMedium Priority

Legitimate RegressionInvestigate Code Change

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

## Role-Based Workflows

[### Automation Engineer Workflow
See how Automation Engineers use test execution history to track automated test stability trends, identify degrading tests, and validate framework improvements over time.](/docs/workflows/automation-engineer)[### QA Manager Workflow
Learn how QA Managers analyze execution history for sprint retrospectives, compare release quality objectively, and track team testing progress with data-driven metrics.](/docs/workflows/qa-manager)

## See Also

- [Get Started with Test Case Health Analysis](/docs/test-case-reports/get-started-with-test-case-health) - View current test status, PFS scores, and Smart Tags for morning triage

- [Core Concepts](/docs/getting-started/core-concepts) - Understand Analysis Scope (Time-Based vs Release-Based) in depth

- [Identify Flaky Tests](/docs/test-failures/identify-flaky-tests) - Learn workflows for remediating flaky tests identified through historical trend analysis

### Edge Case: Sparse Data Periods (Weekends with No Executions)

### Edge Case: Time Interval Mismatch (Week Spans Two Sprints)

### Edge Case: Test Case Deleted After Execution

### Troubleshooting: Automated vs Manual Pass Rate Comparison

### When to use Test Case Health Analysis vs Test Results Analysis
[Get Started with Test Case Health AnalysisLearn to identify flaky tests, prioritize failures, and plan test maintenance using the Test Case Health Analysis Report with Smart Tags and PFS scoring.](/docs/test-case-reports/health-stability/get-started-with-test-case-health)[Test Case Quality & Reliability TrackingMonitor test case execution health, identify problematic test cases, and assess automation effectiveness through pass rate analysis in Katalon TestOps.](/docs/test-case-reports/health-stability/track-test-case-status)

-->