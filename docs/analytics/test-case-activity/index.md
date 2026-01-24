# Test Case Activity

Content coming soon.
# Get Started with Test Case Health Analysis

Learn to identify flaky tests, prioritize failures, and plan test maintenance using the Test Case Health Analysis Report with Smart Tags and PFS scoring.

# Get Started with Test Case Health Analysis

Estimated reading time: 10 minutes

Flaky tests waste engineering hours with false failures. The Test Case Health Analysis Report helps you distinguish unreliable tests from legitimately broken ones using probabilistic scoring and smart pattern detection. This tutorial teaches you two practical workflows for triaging daily failures and planning test maintenance sprints.

## What You'll Learn

After completing this tutorial, you will:

- Navigate the Test Case Health Analysis Report interface

- Interpret Probabilistic Flakiness Score (PFS) ranges (0.0-1.0 scale)

- Use Smart Tags to identify Flaky, Always Fail, Slow, and New Failure tests

- Apply the Morning Triage workflow to prioritize overnight failures

- Use the Find Stale/Flaky Tests workflow to plan maintenance sprints

- Export findings for offline analysis and stakeholder reporting

## Prerequisites

Before starting this tutorial, you should:

- Have access to Katalon TestOps with at least 10 test case executions over the past 30 days

- Understand basic test execution concepts (test runs, pass/fail status, test suites)

- Have permission to view Reports section in TestOps

Time required: 20-25 minutes including hands-on practice

## Understanding Test Case Health Analysis

The Test Case Health Analysis Report surfaces test reliability issues by analyzing historical execution patterns. Instead of manually tracking which tests fail intermittently, TestOps automatically flags potential issues using two key mechanisms:

Probabilistic Flakiness Score (PFS): A numerical score from 0.0 to 1.0 that quantifies how likely a test is flaky based on pass-to-fail transition patterns within code versions. Higher scores indicate more unpredictable behavior.

Smart Tags: Automated labels applied to tests based on configurable thresholds:

- Flaky - PFS ≥ 0.7 (highly unreliable)

- Always Fail - Pass rate < 70% (consistently failing)

- Slow - Execution duration exceeds 95th percentile (performance regression)

- New Failure - Failed for first time in last 10 runs (recently broken)

#_r_vf_{margin:1.5rem auto 0;}#_r_vf_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_vf_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_vf_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_vf_ .error-icon{fill:#552222;}#_r_vf_ .error-text{fill:#552222;stroke:#552222;}#_r_vf_ .edge-thickness-normal{stroke-width:1px;}#_r_vf_ .edge-thickness-thick{stroke-width:3.5px;}#_r_vf_ .edge-pattern-solid{stroke-dasharray:0;}#_r_vf_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_vf_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_vf_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_vf_ .marker{fill:#333333;stroke:#333333;}#_r_vf_ .marker.cross{stroke:#333333;}#_r_vf_ svg{font-family:inherit;font-size:16px;}#_r_vf_ p{margin:0;}#_r_vf_ .label{font-family:inherit;color:#333;}#_r_vf_ .cluster-label text{fill:#333;}#_r_vf_ .cluster-label span{color:#333;}#_r_vf_ .cluster-label span p{background-color:transparent;}#_r_vf_ .label text,#_r_vf_ span{fill:#333;color:#333;}#_r_vf_ .node rect,#_r_vf_ .node circle,#_r_vf_ .node ellipse,#_r_vf_ .node polygon,#_r_vf_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_vf_ .rough-node .label text,#_r_vf_ .node .label text,#_r_vf_ .image-shape .label,#_r_vf_ .icon-shape .label{text-anchor:middle;}#_r_vf_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_vf_ .rough-node .label,#_r_vf_ .node .label,#_r_vf_ .image-shape .label,#_r_vf_ .icon-shape .label{text-align:center;}#_r_vf_ .node.clickable{cursor:pointer;}#_r_vf_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_vf_ .arrowheadPath{fill:#333333;}#_r_vf_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_vf_ .flowchart-link{stroke:#333333;fill:none;}#_r_vf_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_vf_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_vf_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_vf_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_vf_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_vf_ .cluster text{fill:#333;}#_r_vf_ .cluster span{color:#333;}#_r_vf_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_vf_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_vf_ rect.text{fill:none;stroke-width:0;}#_r_vf_ .icon-shape,#_r_vf_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_vf_ .icon-shape p,#_r_vf_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_vf_ .icon-shape rect,#_r_vf_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_vf_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_vf_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_vf_ :root{--mermaid-font-family:inherit;}
Test Execution History

PFS Calculation Engine

Smart Tag Detection

PFS Score: 0.0-1.0

Flaky Tag

Always Fail Tag

Slow Tag

New Failure Tag

Test Case Health Analysis Report

Why this matters: Engineering teams waste 60% more time investigating false failures from flaky tests compared to legitimate bugs. This report helps you prioritize where to invest stabilization efforts.

## Workflow 1: Morning Triage - Prioritize Overnight Failures

Scenario: You arrive at 9 AM and need to check overnight test run results. Use Smart Tags and PFS scores to distinguish flaky failures from real issues before daily standup.

### Navigate to Test Case Health Analysis Report

- Log in to Katalon TestOps

- Select your project from the Project dropdown

- Navigate to Reports in the left sidebar

- Click Test Case Health Analysis Report

Success indicator: You see the Test Case Health Analysis Report dashboard with Health Indicators widgets at the top.

### Apply Time Filter for Overnight Runs

- Locate the Analysis Scope controls at the top of the report

- Click the Time-Based scope option

- Select Last 24 hours from the dropdown

- Click Apply to filter the report

Success indicator: The report refreshes to show only test executions from the past 24 hours. Health Indicators update to reflect overnight run data.

### Review Health Indicators

Check the three big number widgets at the top of the report:

- Always Fail: Count of consistently failing tests (may indicate persistent bugs or broken test setup)

- Slow: Count of performance regressions (execution time exceeds 95th percentile)

- New Failure: Count of recently broken tests (failed for first time in last 10 runs)

Focus on New Failure widget: This tells you how many tests broke overnight—your primary triage target.

### Filter to New Failure Tests

- Click the New Failure widget (big number at top)

- The data table below automatically filters to show only tests tagged with New Failure

- Review the filtered list—these are your overnight broken tests

Success indicator: Data table displays only tests with the "New Failure" Smart Tag in the Status column.

### Sort by PFS Score

- Locate the PFS Score column in the data table

- Click the column header to sort from high to low

- Review tests with high PFS scores (≥ 0.7) first

Why this matters: High PFS scores combined with New Failure indicate the test is likely flaky (unreliable) rather than a legitimate bug. Low PFS scores with New Failure suggest a real issue requiring immediate investigation.

### Apply Triage Decision Framework

For each New Failure test in the sorted list, apply this decision logic:
#_r_vh_{margin:1.5rem auto 0;}#_r_vh_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_vh_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_vh_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_vh_ .error-icon{fill:#552222;}#_r_vh_ .error-text{fill:#552222;stroke:#552222;}#_r_vh_ .edge-thickness-normal{stroke-width:1px;}#_r_vh_ .edge-thickness-thick{stroke-width:3.5px;}#_r_vh_ .edge-pattern-solid{stroke-dasharray:0;}#_r_vh_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_vh_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_vh_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_vh_ .marker{fill:#333333;stroke:#333333;}#_r_vh_ .marker.cross{stroke:#333333;}#_r_vh_ svg{font-family:inherit;font-size:16px;}#_r_vh_ p{margin:0;}#_r_vh_ .label{font-family:inherit;color:#333;}#_r_vh_ .cluster-label text{fill:#333;}#_r_vh_ .cluster-label span{color:#333;}#_r_vh_ .cluster-label span p{background-color:transparent;}#_r_vh_ .label text,#_r_vh_ span{fill:#333;color:#333;}#_r_vh_ .node rect,#_r_vh_ .node circle,#_r_vh_ .node ellipse,#_r_vh_ .node polygon,#_r_vh_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_vh_ .rough-node .label text,#_r_vh_ .node .label text,#_r_vh_ .image-shape .label,#_r_vh_ .icon-shape .label{text-anchor:middle;}#_r_vh_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_vh_ .rough-node .label,#_r_vh_ .node .label,#_r_vh_ .image-shape .label,#_r_vh_ .icon-shape .label{text-align:center;}#_r_vh_ .node.clickable{cursor:pointer;}#_r_vh_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_vh_ .arrowheadPath{fill:#333333;}#_r_vh_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_vh_ .flowchart-link{stroke:#333333;fill:none;}#_r_vh_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_vh_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_vh_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_vh_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_vh_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_vh_ .cluster text{fill:#333;}#_r_vh_ .cluster span{color:#333;}#_r_vh_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_vh_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_vh_ rect.text{fill:none;stroke-width:0;}#_r_vh_ .icon-shape,#_r_vh_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_vh_ .icon-shape p,#_r_vh_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_vh_ .icon-shape rect,#_r_vh_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_vh_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_vh_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_vh_ :root{--mermaid-font-family:inherit;}
PFS < 0.3

PFS 0.3-0.7

PFS ≥ 0.7

Review New Failure Test

Check PFS Score

High Priority: Investigate as Bug

Medium Priority: Monitor Pattern

Low Priority: Stabilize Test

Create Bug Ticket

Wait for Next Run

Add to Stabilization Backlog

Interpretation guide:

- New Failure + PFS < 0.3 = Likely legitimate bug (test was stable, now consistently fails)

- New Failure + PFS 0.3-0.7 = Potentially flaky or new instability (monitor next few runs)

- New Failure + PFS ≥ 0.7 = Likely flaky test, not a bug (needs stabilization, not immediate investigation)

### Assign Work for Daily Standup

Based on your triage:

- High-priority failures (PFS < 0.3): Create bug tickets, assign to developers

- Medium-priority failures (PFS 0.3-0.7): Flag for continued monitoring

- Low-priority failures (PFS ≥ 0.7): Add to test stabilization backlog

Outcome: You've prioritized overnight failures in 5-10 minutes, ready for standup discussion with clear bug vs flaky test distinction.

Expected result: 60% reduction in time spent investigating false failures. Clear separation between legitimate bugs requiring immediate attention and flaky tests needing stabilization work.

## Workflow 2: Find Stale/Flaky Tests for Maintenance Sprint

Scenario: Your team is planning an automation maintenance sprint. You need to identify tests requiring attention—flaky tests, always failing tests, and slow performance regressions—with data-driven prioritization.

### Navigate to Report and Set Historical Scope

- Open Test Case Health Analysis Report (Reports > Test Case Health Analysis Report)

- Set Analysis Scope to Time-Based

- Select Last 90 days for historical context

- Click Apply

Why 90 days: Provides sufficient execution history to identify persistent patterns vs temporary instability.

### Review Flakiness Distribution

- Locate the Flakiness Distribution pie chart (center of report)

- Check percentage breakdown:

Stable (PFS 0.0-0.3): Green slice
Potentially Flaky (PFS 0.3-0.7): Yellow slice
Highly Flaky (PFS 0.7-1.0): Red slice
Uncategorized (insufficient data): Gray slice

Key insight: If "Highly Flaky" percentage is >10%, your test suite has significant reliability issues affecting release confidence.

### Filter to Highly Flaky Tests

- Click the Highly Flaky slice (red) in the pie chart

- Data table automatically filters to show only tests with PFS ≥ 0.7

- Review the filtered list

Success indicator: Data table displays tests with PFS scores between 0.7-1.0, all tagged with "Flaky" Smart Tag.

### Sort by Median Duration

- Click the Median Duration column header in the data table

- Sort from high to low (longest duration first)

- Review long-running flaky tests at the top

Why this matters: Long-running flaky tests have the highest maintenance cost—they waste more CI time when they fail intermittently. Prioritize stabilizing these first.

### Export for Sprint Planning

- Click the Export button (top-right of report)

- Select CSV format

- Save file as flaky_tests_maintenance_sprint.csv

- Open in spreadsheet software for team review

What to include in sprint planning:

- Test name and PFS score

- Median duration (for cost-benefit analysis)

- Failure rate (frequency of false failures)

- Last execution date (identify stale tests)

### Return to Report and Check Always Fail Tests

- Clear filters by clicking Reset Filters button

- Click the Always Fail widget (Health Indicators at top)

- Data table filters to persistently broken tests (pass rate < 70%)

- Review filtered list

Cross-check with deployment timeline: If Always Fail tests started failing after a specific deployment, this indicates a legitimate bug vs test issue. Check the Last Passed column to correlate with deployment dates.

### Create Maintenance Backlog

Based on your analysis, create a prioritized backlog:

Priority 1: High-frequency, high-cost flaky tests

- PFS ≥ 0.7 + Median Duration > 5 minutes + Failure Rate > 30%

- These waste the most CI time with false failures

Priority 2: Always Fail tests from recent deployments

- Always Fail tag + Last Passed correlates with deployment

- May indicate regression bugs requiring fixes

Priority 3: Slow performance regressions

- Slow tag + Duration increased >50% compared to baseline

- Performance optimization opportunities

Priority 4: Long-running Potentially Flaky tests

- PFS 0.3-0.7 + Median Duration > 3 minutes

- Monitor for escalation to Highly Flaky

Expected result: Data-driven test maintenance backlog with ROI justification for fixing flaky tests. Clear prioritization based on maintenance cost (duration × frequency) and business impact.

## Workflow 3: Find Stale Test Cases Not Executed

Scenario: Sprint retrospective—your team wants to identify test cases that haven't been executed recently and may need review. Are these tests still relevant? Are they missing from your test suite?

### Open Test Case Health Analysis with Sprint Scope

- Navigate to Reports menu

- Select Test Case Health Analysis Report

- Set Analysis Scope to Time-Based

- Select Last 30 days (current sprint)

Why this scope: You want to find tests that didn't run during the entire sprint.

### Identify Not Executed Test Cases

Review the Health Indicators section—if available, check for Not Executed count. Alternatively, filter the data table by execution status.

What "Not Executed" means:

- Test case exists in TestOps

- NO execution results within selected scope (last 30 days)

- Could mean: newly created, excluded from test suite, disabled, or ran outside scope

Important: "Not Executed" doesn't mean "never executed"—just means no executions in THIS scope.

### Filter to Automated Stale Tests

- Apply filter: Test Case Type = Automated

- Apply filter: Status = Not Executed (if available as filter option)

Why automated only: Manual tests may intentionally not run every sprint. Automated tests SHOULD run regularly if properly configured.

Result: List of automated test cases that haven't executed in 30 days.

### Analyze by Test Owner

- In the data table, sort by Author column

- Group test cases by owner

What you're looking for:

- Are stale tests concentrated with one author? (Possible outdated test suite from previous team member)

- Are they spread across team? (Possible systematic issue with test suite configuration)

### Export for Team Review

- Click Export button

- Download CSV with stale test case list

- Assign to test owners with review questions:

"Why hasn't this test run in 30 days?"
"Is it missing from the test suite?"
"Is it disabled intentionally?"
"Should it be archived if no longer relevant?"

Expected actions:

- Intentionally not running (test under development) → No action, expected

- Missing from test suite (accidentally excluded) → Add to test suite configuration

- Outdated functionality (feature deprecated) → Archive test case

- Environment-specific (runs on different schedule) → Adjust scope or ignore

Expected result: You understand how to use execution status to find stale tests, distinguish between intentionally unused vs accidentally excluded tests, and prioritize maintenance work.

## Understanding PFS Score Ranges

The Probabilistic Flakiness Score quantifies test reliability on a 0.0-1.0 scale. Here's how to interpret the ranges:

#_r_vk_{margin:1.5rem auto 0;}#_r_vk_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_vk_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_vk_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_vk_ .error-icon{fill:#552222;}#_r_vk_ .error-text{fill:#552222;stroke:#552222;}#_r_vk_ .edge-thickness-normal{stroke-width:1px;}#_r_vk_ .edge-thickness-thick{stroke-width:3.5px;}#_r_vk_ .edge-pattern-solid{stroke-dasharray:0;}#_r_vk_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_vk_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_vk_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_vk_ .marker{fill:#333333;stroke:#333333;}#_r_vk_ .marker.cross{stroke:#333333;}#_r_vk_ svg{font-family:inherit;font-size:16px;}#_r_vk_ p{margin:0;}#_r_vk_ .label{font-family:inherit;color:#333;}#_r_vk_ .cluster-label text{fill:#333;}#_r_vk_ .cluster-label span{color:#333;}#_r_vk_ .cluster-label span p{background-color:transparent;}#_r_vk_ .label text,#_r_vk_ span{fill:#333;color:#333;}#_r_vk_ .node rect,#_r_vk_ .node circle,#_r_vk_ .node ellipse,#_r_vk_ .node polygon,#_r_vk_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_vk_ .rough-node .label text,#_r_vk_ .node .label text,#_r_vk_ .image-shape .label,#_r_vk_ .icon-shape .label{text-anchor:middle;}#_r_vk_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_vk_ .rough-node .label,#_r_vk_ .node .label,#_r_vk_ .image-shape .label,#_r_vk_ .icon-shape .label{text-align:center;}#_r_vk_ .node.clickable{cursor:pointer;}#_r_vk_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_vk_ .arrowheadPath{fill:#333333;}#_r_vk_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_vk_ .flowchart-link{stroke:#333333;fill:none;}#_r_vk_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_vk_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_vk_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_vk_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_vk_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_vk_ .cluster text{fill:#333;}#_r_vk_ .cluster span{color:#333;}#_r_vk_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_vk_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_vk_ rect.text{fill:none;stroke-width:0;}#_r_vk_ .icon-shape,#_r_vk_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_vk_ .icon-shape p,#_r_vk_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_vk_ .icon-shape rect,#_r_vk_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_vk_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_vk_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_vk_ :root{--mermaid-font-family:inherit;}
PFS Score Ranges

0.0 - 0.3: Consistent

0.3 - 0.7: Potentially Flaky

0.7 - 1.0: Highly Flaky

Action: Low Priority - Stable Test

Action: Medium Priority - Monitor

Action: High Priority - Fix or Quarantine

Characteristics: Predictable behavior, rare false failures

Characteristics: Occasional instability, needs observation

Characteristics: Unpredictable, high false failure rate

Score Range Interpretation:

- 0.0-0.3 (Consistent): Test behaves predictably. Failures likely indicate legitimate bugs. Low maintenance priority.

- 0.3-0.7 (Potentially Flaky): Test shows some instability patterns. Monitor next 10-20 runs to determine if escalating to Highly Flaky or stabilizing. Medium priority.

- 0.7-1.0 (Highly Flaky): Test alternates pass/fail unpredictably. High probability of false failures. Prioritize for stabilization or quarantine. High priority.

How PFS is calculated: TestOps analyzes pass-to-fail transitions across execution history, accounting for code changes. Tests that alternate frequently between pass/fail within the same code version score higher. Tests that fail consistently after a code change score lower (indicating legitimate regression, not flakiness).

### Troubleshooting: Report Shows No Data

### Advanced: Configuring Smart Tag Thresholds

### Deep Dive: How PFS Calculation Works

### Understanding 'Not Executed' Status

## What You've Accomplished

You've completed three essential workflows for managing test case health:

✅ Morning Triage workflow: Prioritize overnight failures using Smart Tags and PFS scores, reducing false failure investigation time by 60%

✅ Maintenance Sprint workflow: Identify flaky, always failing, and slow tests with data-driven prioritization for stabilization backlog

✅ Stale Test Detection workflow: Find test cases not executed in selected scope, distinguish intentional vs accidental exclusions

✅ PFS interpretation: Understand 0.0-1.0 score ranges and apply triage decision framework

✅ Smart Tags usage: Leverage automated labels (Flaky, Always Fail, Slow, New Failure) for quick status assessment

✅ Not Executed status: Understand scope-dependent meaning and diagnostic steps for stale tests

✅ Export capability: Save findings to CSV for offline analysis and stakeholder reporting

## Next Steps

For deeper test stability analysis:

- [Identify Flaky Tests](/docs/test-failures/identify-flaky-tests) - Advanced flakiness detection techniques and remediation strategies

For parallel test suite monitoring:

- [Track Automation Progress](/docs/test-case-reports/track-automation-progress) - Monitor test case execution trends and automation coverage

For understanding analysis scope:

- [Core Concepts: Analysis Scope](/docs/getting-started/core-concepts) - Learn how Time-Based, Release-Based, and Current scopes affect all reports

## Role-Based Workflows

[### Automation Engineer Workflow
See how Automation Engineers use Test Case Health Analysis for morning triage, identify flaky tests with PFS scoring, and prioritize test maintenance to reduce CI/CD pipeline noise by 40-60%.](/docs/workflows/automation-engineer)

## See Also

- Test Failures Section: Cross-reference Test Case Health Analysis with failure investigation workflows

- Coverage Reports: Correlate test stability with test coverage metrics to identify gaps

- Release Readiness Section: Use health metrics in release go/no-go decision frameworks

[Test Case Reports: Overview and Getting StartedTrack test case health and stability using PFS scores, Smart Tags, and historical analysis to identify flaky tests, plan maintenance sprints, and measure automation ROI.](/docs/test-case-reports/test-case-activity-overview)[Analyze Test Execution HistoryTrack test stability trends over sprints, compare release quality objectively, and identify degrading tests using the Test Results Analysis Report.](/docs/test-case-reports/health-stability/analyze-test-execution-history)