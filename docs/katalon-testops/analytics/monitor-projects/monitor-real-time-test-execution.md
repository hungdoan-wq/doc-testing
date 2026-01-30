# Monitor Real-Time Test Execution

Content coming soon.
Dashboards
# Monitoring Real-Time Test Execution

Learn how to monitor active test runs in real-time using the Live Monitor Dashboard, identify failures as they happen, and investigate test details immediately.

# Monitoring Real-Time Test Execution

Estimated time: 20 minutes

What you'll learn:

- Access the Live Monitor Dashboard

- Monitor active test runs in real-time

- Identify failures as they happen

- Drill down to test details for immediate investigation

- Apply real-time monitoring workflows to your testing process

Prerequisites:

- Access to Katalon TestOps with project permissions

- At least one project with test execution history

- Basic familiarity with TestOps navigation (see [Getting Started with Reports & Analytics](../../getting-started/introduction))

## Introduction

Real-time monitoring is essential for maintaining quality and responding quickly to test failures. The Live Monitor Dashboard gives you immediate visibility into ongoing test executions, allowing you to:

- Catch failures immediately as tests run, not hours later

- Respond faster to critical issues in your testing pipeline

- Monitor testing progress during releases or critical deployments

- Track team testing activity across manual and automated tests

This tutorial guides you through hands-on steps to monitor test execution in real-time, understand live metrics, and investigate failures as they occur.

## Step 1: Access the Live Monitor Dashboard

The Live Monitor Dashboard provides a real-time view of your testing operations.

- Navigate to Reports & Analytics

Log into Katalon TestOps
Select your project from the project dropdown
Click Reports in the left sidebar

- Open the Live Monitor Dashboard

In the Reports navigation, look for Live Monitor or Current Dashboard
Click to open the dashboard

You should see: A dashboard displaying widgets showing active test runs, recent executions, and current quality status.

Tip: Bookmark this dashboard for quick access during testing sprints or release cycles.

## Step 2: Understand Live Monitor Widgets

The Live Monitor Dashboard displays several real-time widgets. Let's explore what each shows you.

### Active Test Runs Summary

This widget shows tests currently in progress.

What you'll see:

- Total active runs: Count of tests currently executing

- By type: Breakdown of manual vs. automated runs

- Status indicators: Running, processing, or finishing stages

What it means: These are tests happening right now. The count updates as tests start and finish.

### Test Executions Initiated Today

This widget tracks all test runs started today.

What you'll see:

- Total runs today: All executions started since midnight

- By type and status: Manual/Automated, Passed/Failed/Running

- Trend indicator: Comparison to previous days (if available)

What it means: Your team's testing activity for the current day, including completed and in-progress tests.

### Test Results Summary for Active Runs

This widget shows the pass/fail breakdown of currently running tests.

What you'll see:

- Passed count: Tests that succeeded in active runs

- Failed count: Tests that failed in active runs

- Other statuses: Error, Blocked, Incomplete

- Pass rate percentage: Real-time quality indicator

What it means: The immediate quality status of tests being executed right now.

### New Failures Widget

This critical widget highlights tests that failed recently.

What you'll see:

- New failures: Tests that failed for the first time or recently

- Always failing: Tests consistently failing (potential flaky tests)

- Failure timestamp: When each test failed

- Test name and details: Clickable links to investigate

What it means: These are issues requiring immediate attention, especially "new failures" that indicate recent regressions.

### Total Current Open Defects

This widget shows unresolved issues in your project.

What you'll see:

- Total open defects: Count of all unresolved issues

- By priority: Critical, High, Medium, Low breakdown

- Trend indicator: Defect count changes over time

What it means: Your backlog of quality issues, with focus on high-priority items blocking releases.

## Step 3: Monitor Active Test Runs

Now let's actively monitor tests as they execute.

- Watch for new test runs

The Active Test Runs widget updates automatically when tests start
You'll see the count increase when new executions begin
Watch for the "Running" status indicator

- Observe test progress

Click on the Active Test Runs widget number to see details
A list of currently running tests appears
You can see:

Test run name
Start time
Execution type (Manual/Automated)
Progress indicator (if available)

- Monitor the pass/fail ratio

As tests complete, the Test Results Summary updates in real-time
Watch the pass rate percentage
Notice failed tests appearing immediately

You should see: Real-time updates as tests progress, with counts and percentages changing as tests complete.

Note: The dashboard auto-refreshes every 30-60 seconds. You can also manually refresh using your browser's reload button.

## Step 4: Identify Failures as They Happen

When tests fail during execution, you need to spot them immediately.

- Check the New Failures widget

Failed tests appear here within seconds of failure
Look for tests marked as "New Failure" (red indicator)
Note the failure timestamp

- Review always failing tests

Tests marked "Always Failing" indicate persistent issues
These may be flaky tests or known defects
Consider investigating these separately

- Assess failure impact

Check the pass rate percentage in Test Results Summary
If pass rate drops below your quality threshold (e.g., 85%), investigate immediately
Multiple new failures suggest a systemic issue

You should see: Failed tests appearing in the New Failures widget within moments of failure, with clear indicators of severity.

Warning: A sudden spike in failures (multiple tests failing simultaneously) often indicates an environment issue or broken build. Check with your DevOps team before investigating individual tests.

## Step 5: Drill Down to Test Details

When you spot a failure, investigate immediately using drill-down capabilities.

- Click on a failed test

In the New Failures widget, click on the test name
You'll navigate to the detailed test result view

- Review execution details

Test information: Name, description, execution type
Execution timestamp: When the test ran
Configuration: Environment, browser, OS details
Executor: Who or what triggered the test

- Examine failure information

Error message: What went wrong
Stack trace: Where the failure occurred (for automated tests)
Screenshots: Visual evidence of failure (if captured)
Logs: Detailed execution logs

- Identify the root cause

Read the error message carefully
Check if it's a test issue, application issue, or environment issue
Look for patterns (same error across multiple tests?)

You should see: Detailed test execution information including error messages, logs, and screenshots that help you understand why the test failed.

Tip: Use the browser's back button to return to the Live Monitor Dashboard and continue monitoring other tests.

## Step 6: Understand Real-Time Metrics

The Live Monitor provides key metrics that update as tests execute.

### Pass Rate (Real-Time)

Formula: (Passed Tests / Executed Tests) × 100

Real-time meaning: This percentage reflects only currently active and today's completed test runs, not historical data.

What to watch for:

- Pass rate below 85%: Investigate failures

- Pass rate below 70%: Critical issues likely present

- Pass rate 100%: All tests passing (continue monitoring)

### Execution Progress (Today)

Formula: (Executed Tests / Planned Tests for Today) × 100

Real-time meaning: How much of today's planned testing is complete.

What to watch for:

- Progress below 50% by midday: Team may need support

- Progress stalled: Tests may be blocked or environments down

- Progress ahead of schedule: Team working efficiently

### Open Defects Count

Meaning: Total unresolved defects currently in your project.

What to watch for:

- Sudden increase: New failures creating defects

- Decreasing count: Defect resolution in progress

- High critical/blocking count: Release at risk

## Step 7: Apply Real-Time Monitoring Workflows

Here are four practical scenarios for using the Live Monitor Dashboard.

### Workflow 1: Morning Testing Standup

Scenario: QA team daily standup at 9:00 AM.

- Open Live Monitor Dashboard

- Review "Test Executions Initiated Today" widget

How many tests have run so far?
Any failures overnight (if automated tests ran)?

- Check "Total Current Open Defects" widget

Has the defect count changed since yesterday?
Any new critical defects?

- Discuss findings with team

- Assign investigation tasks for any new failures

Expected outcome: Team aligned on testing status and priorities for the day.

### Workflow 2: Release Day Monitoring

### Workflow 3: Debugging CI/CD Pipeline

### Workflow 4: Sprint Testing Progress Check

## Best Practices for Real-Time Monitoring

Follow these best practices to maximize the value of real-time monitoring:

### 1. Set Up a Monitoring Station

Why: Dedicated visibility ensures you don't miss critical failures.

How:

- Use a large monitor or TV displaying the Live Monitor Dashboard

- Position it where the team can see it

- Update automatically (no interaction needed)

Expected result: Team awareness of testing status without actively checking.

### 2. Define Quality Thresholds

Why: Clear criteria enable faster decision-making.

How:

- Pass rate threshold: 85% minimum for continued testing

- Failure threshold: More than 10% new failures = investigate immediately

- Defect threshold: No critical/blocking defects for release

Expected result: Objective go/no-go criteria based on real-time data.

### 3. Respond to Failures Immediately

Why: Early detection and fast response minimize impact.

How:

- Assign team members to monitor during critical periods

- Investigate new failures within 15 minutes

- Document findings quickly

- Communicate issues to relevant teams

Expected result: Issues resolved before they block testing progress.

### 4. Monitor During Peak Activities

Why: Critical periods require heightened attention.

When to monitor actively:

- Release days and deployment windows

- After major code merges

- During sprint regression testing

- When executing high-priority test suites

Expected result: Confidence in quality during high-risk periods.

### 5. Use Real-Time Data for Standups

Why: Current data drives better daily planning.

How:

- Screen-share Live Monitor Dashboard during standup

- Review metrics together as a team

- Discuss trends and anomalies

- Assign investigation tasks based on real-time status

Expected result: Data-driven team alignment and task prioritization.

## Real-Time Monitoring Flow

Here's how real-time monitoring fits into your testing workflow:

#_r_cp_{margin:1.5rem auto 0;}#_r_cp_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_cp_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_cp_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_cp_ .error-icon{fill:#552222;}#_r_cp_ .error-text{fill:#552222;stroke:#552222;}#_r_cp_ .edge-thickness-normal{stroke-width:1px;}#_r_cp_ .edge-thickness-thick{stroke-width:3.5px;}#_r_cp_ .edge-pattern-solid{stroke-dasharray:0;}#_r_cp_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_cp_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_cp_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_cp_ .marker{fill:#333333;stroke:#333333;}#_r_cp_ .marker.cross{stroke:#333333;}#_r_cp_ svg{font-family:inherit;font-size:16px;}#_r_cp_ p{margin:0;}#_r_cp_ .label{font-family:inherit;color:#333;}#_r_cp_ .cluster-label text{fill:#333;}#_r_cp_ .cluster-label span{color:#333;}#_r_cp_ .cluster-label span p{background-color:transparent;}#_r_cp_ .label text,#_r_cp_ span{fill:#333;color:#333;}#_r_cp_ .node rect,#_r_cp_ .node circle,#_r_cp_ .node ellipse,#_r_cp_ .node polygon,#_r_cp_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_cp_ .rough-node .label text,#_r_cp_ .node .label text,#_r_cp_ .image-shape .label,#_r_cp_ .icon-shape .label{text-anchor:middle;}#_r_cp_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_cp_ .rough-node .label,#_r_cp_ .node .label,#_r_cp_ .image-shape .label,#_r_cp_ .icon-shape .label{text-align:center;}#_r_cp_ .node.clickable{cursor:pointer;}#_r_cp_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_cp_ .arrowheadPath{fill:#333333;}#_r_cp_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_cp_ .flowchart-link{stroke:#333333;fill:none;}#_r_cp_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_cp_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_cp_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_cp_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_cp_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_cp_ .cluster text{fill:#333;}#_r_cp_ .cluster span{color:#333;}#_r_cp_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_cp_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_cp_ rect.text{fill:none;stroke-width:0;}#_r_cp_ .icon-shape,#_r_cp_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_cp_ .icon-shape p,#_r_cp_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_cp_ .icon-shape rect,#_r_cp_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_cp_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_cp_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_cp_ :root{--mermaid-font-family:inherit;}
Pass

Fail

Test Issue

App Issue

Environment Issue

Yes

No

Test Execution Starts

Live Monitor Updates

Test Results Appear

Pass Rate Increases

New Failure Appears

Team Investigates Immediately

Root Cause?

Fix Test, Re-run

Create Defect, Notify Dev

Fix Environment, Re-run

Continue Monitoring

More Tests?

Review Final Metrics

Make Release Decision

Figure 5: Real-time monitoring workflow from test execution to release decision

## Understanding Dashboard Components

#_r_cr_{margin:1.5rem auto 0;}#_r_cr_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_cr_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_cr_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_cr_ .error-icon{fill:#552222;}#_r_cr_ .error-text{fill:#552222;stroke:#552222;}#_r_cr_ .edge-thickness-normal{stroke-width:1px;}#_r_cr_ .edge-thickness-thick{stroke-width:3.5px;}#_r_cr_ .edge-pattern-solid{stroke-dasharray:0;}#_r_cr_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_cr_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_cr_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_cr_ .marker{fill:#333333;stroke:#333333;}#_r_cr_ .marker.cross{stroke:#333333;}#_r_cr_ svg{font-family:inherit;font-size:16px;}#_r_cr_ p{margin:0;}#_r_cr_ .label{font-family:inherit;color:#333;}#_r_cr_ .cluster-label text{fill:#333;}#_r_cr_ .cluster-label span{color:#333;}#_r_cr_ .cluster-label span p{background-color:transparent;}#_r_cr_ .label text,#_r_cr_ span{fill:#333;color:#333;}#_r_cr_ .node rect,#_r_cr_ .node circle,#_r_cr_ .node ellipse,#_r_cr_ .node polygon,#_r_cr_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_cr_ .rough-node .label text,#_r_cr_ .node .label text,#_r_cr_ .image-shape .label,#_r_cr_ .icon-shape .label{text-anchor:middle;}#_r_cr_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_cr_ .rough-node .label,#_r_cr_ .node .label,#_r_cr_ .image-shape .label,#_r_cr_ .icon-shape .label{text-align:center;}#_r_cr_ .node.clickable{cursor:pointer;}#_r_cr_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_cr_ .arrowheadPath{fill:#333333;}#_r_cr_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_cr_ .flowchart-link{stroke:#333333;fill:none;}#_r_cr_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_cr_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_cr_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_cr_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_cr_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_cr_ .cluster text{fill:#333;}#_r_cr_ .cluster span{color:#333;}#_r_cr_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_cr_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_cr_ rect.text{fill:none;stroke-width:0;}#_r_cr_ .icon-shape,#_r_cr_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_cr_ .icon-shape p,#_r_cr_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_cr_ .icon-shape rect,#_r_cr_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_cr_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_cr_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_cr_ :root{--mermaid-font-family:inherit;}
Live Monitor Dashboard

Click

Click

Click

Active Test Runs Summary

Test Executions Initiated Today

Test Results Summary

New Failures

Always Failing Tests

Open Defects

Test Run Details

Failure Investigation

Defect Details

Execution Logs

Error Messages & Screenshots

Defect History

Figure 6: Live Monitor Dashboard components and drill-down paths

## What You've Learned

Congratulations! You've completed the real-time monitoring tutorial. You now know how to:

✅ Access the Live Monitor Dashboard to view current testing activity

✅ Monitor active test runs and track execution progress in real-time

✅ Identify failures immediately using the New Failures widget

✅ Drill down into test details to investigate errors and root causes

✅ Apply monitoring workflows for standups, releases, debugging, and sprint tracking

✅ Follow best practices for effective real-time quality monitoring

## Next Steps

Now that you can monitor tests in real-time, explore these related capabilities:

- [Tracking Historical Quality Trends](./historical-trends) - Analyze quality patterns over time using the Analytics & Trends Dashboard

- [Investigating Test Failures](../../test-quality/investigating-failures) - Deep-dive techniques for failure analysis and root cause identification

- [Identifying Flaky Tests](../../test-quality/identifying-flaky-tests) - Detect and resolve unreliable tests affecting your quality metrics

- [Dashboard Configuration Guide](../how-to/dashboard-configuration) - Customize your Live Monitor Dashboard with additional widgets and filters

- [Setting Up Alerts & Notifications](../how-to/alerts-notifications) - Configure automatic alerts for critical failures (when available)

## See Also

- [Understanding Report Types](../../getting-started/report-types) - Learn the difference between dashboards and reports

- [Using Filters & Analysis Scope](../../getting-started/filters-and-scope) - Filter test data by time, release, or custom criteria

- [Analyzing Error Patterns](../../test-quality/error-patterns) - Understand common automation errors and how to fix them

- [Assessing Release Readiness](../../release-readiness/assessing-readiness) - Use quality metrics to make release decisions

[Get Started with DashboardsLearn how to navigate and interpret Katalon TestOps dashboards through hands-on practice. Understand the three dashboard types, read key widgets, use time range filters, and apply the "dashboard first, report second" principle to daily quality monitoring.](/docs/dashboards/get-started-with-dashboards)[Tracking Historical Quality TrendsLearn how to track quality trends over time using the Analytics & Trends Dashboard. This hands-on tutorial teaches you to apply Analysis Scopes, understand trend widgets, compare quality across time periods, and conduct sprint and release retrospectives.](/docs/dashboards/track-historical-quality-trends)