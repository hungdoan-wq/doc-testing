# Overview

AI-Powered Features

Dashboards
# Get Started with Dashboards

Learn how to navigate and interpret Katalon TestOps dashboards through hands-on practice. Understand the three dashboard types, read key widgets, use time range filters, and apply the "dashboard first, report second" principle to daily quality monitoring.

# Get Started with Dashboards

Reading time: 12-15 minutes
What you'll build: Confidence navigating and interpreting TestOps dashboards for daily quality monitoring

## What You'll Learn

Dashboards are your operational command center in Katalon TestOps—think of them as the cockpit of an airplane, showing the most critical metrics at a glance so you can make fast, informed decisions about your testing quality.

After completing this tutorial, you will:

- Understand what dashboards are and how they differ from reports

- Navigate the three pre-configured dashboard types (Project, Live Monitor, Release Health)

- Read and interpret common widgets to understand project health

- Use time range filters to focus your analysis on different time periods

- Apply the "dashboard first, report second" principle in your daily workflow

- Feel confident exploring dashboards independently

Prerequisites:

- You've completed [Get Started with Your Project Dashboard](/docs/getting-started/get-started-with-your-project-dashboard)

- You have access to a Katalon TestOps project with test execution data

## Understanding Dashboards: Your Quality Command Center

Before diving into hands-on practice, let's clarify what dashboards are and when to use them.

### Dashboard vs Report: Two Tools, Different Jobs

Think of the difference like this:

Dashboard = Your car's dashboard while driving
Shows speed, fuel level, engine temperature—critical metrics you need right now to make immediate decisions. Quick checks, at-a-glance status, actionable insights.

Report = Your car's maintenance log
Detailed records for investigation: Why did the engine overheat last week? What's the fuel consumption pattern over the past month? Deep analysis, root cause investigation, comprehensive data.

The "Dashboard First, Report Second" Principle:

#_r_c9_{margin:1.5rem auto 0;}#_r_c9_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_c9_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_c9_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_c9_ .error-icon{fill:#552222;}#_r_c9_ .error-text{fill:#552222;stroke:#552222;}#_r_c9_ .edge-thickness-normal{stroke-width:1px;}#_r_c9_ .edge-thickness-thick{stroke-width:3.5px;}#_r_c9_ .edge-pattern-solid{stroke-dasharray:0;}#_r_c9_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_c9_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_c9_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_c9_ .marker{fill:#333333;stroke:#333333;}#_r_c9_ .marker.cross{stroke:#333333;}#_r_c9_ svg{font-family:inherit;font-size:16px;}#_r_c9_ p{margin:0;}#_r_c9_ .label{font-family:inherit;color:#333;}#_r_c9_ .cluster-label text{fill:#333;}#_r_c9_ .cluster-label span{color:#333;}#_r_c9_ .cluster-label span p{background-color:transparent;}#_r_c9_ .label text,#_r_c9_ span{fill:#333;color:#333;}#_r_c9_ .node rect,#_r_c9_ .node circle,#_r_c9_ .node ellipse,#_r_c9_ .node polygon,#_r_c9_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_c9_ .rough-node .label text,#_r_c9_ .node .label text,#_r_c9_ .image-shape .label,#_r_c9_ .icon-shape .label{text-anchor:middle;}#_r_c9_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_c9_ .rough-node .label,#_r_c9_ .node .label,#_r_c9_ .image-shape .label,#_r_c9_ .icon-shape .label{text-align:center;}#_r_c9_ .node.clickable{cursor:pointer;}#_r_c9_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_c9_ .arrowheadPath{fill:#333333;}#_r_c9_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_c9_ .flowchart-link{stroke:#333333;fill:none;}#_r_c9_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_c9_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_c9_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_c9_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_c9_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_c9_ .cluster text{fill:#333;}#_r_c9_ .cluster span{color:#333;}#_r_c9_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_c9_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_c9_ rect.text{fill:none;stroke-width:0;}#_r_c9_ .icon-shape,#_r_c9_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_c9_ .icon-shape p,#_r_c9_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_c9_ .icon-shape rect,#_r_c9_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_c9_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_c9_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_c9_ :root{--mermaid-font-family:inherit;}
YesPass Rate >90%No Critical Issues

NoPass Rate DroppedDefects Increased

Start Your Day

Open Dashboard

Quick Health Check

EverythingGreen?

ContinueMonitoring

Click Widget toDrill into Report

Root CauseAnalysis

Take CorrectiveAction

Use dashboards for quick checks; drill into reports when investigation is needed

### Three Dashboard Types: When to Use Each

TestOps provides three pre-configured dashboards, each designed for specific scenarios:

Dashboard TypeBest ForAnalysis ScopeTypical Use CaseProject DashboardDaily monitoring, team standups, weekly reviewsTime-based (Last 7 days, Last 30 days, etc.)"How did testing go this week?"Live Monitor DashboardReal-time execution tracking during active testingCurrent state (ignores time range)"What's happening right now?"Release Health DashboardRelease readiness, go/no-go decisions, sprint retrospectivesRelease-based (specific release/sprint)"Is Release 3.0 ready to ship?"
#_r_cb_{margin:1.5rem auto 0;}#_r_cb_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_cb_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_cb_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_cb_ .error-icon{fill:#552222;}#_r_cb_ .error-text{fill:#552222;stroke:#552222;}#_r_cb_ .edge-thickness-normal{stroke-width:1px;}#_r_cb_ .edge-thickness-thick{stroke-width:3.5px;}#_r_cb_ .edge-pattern-solid{stroke-dasharray:0;}#_r_cb_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_cb_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_cb_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_cb_ .marker{fill:#333333;stroke:#333333;}#_r_cb_ .marker.cross{stroke:#333333;}#_r_cb_ svg{font-family:inherit;font-size:16px;}#_r_cb_ p{margin:0;}#_r_cb_ .label{font-family:inherit;color:#333;}#_r_cb_ .cluster-label text{fill:#333;}#_r_cb_ .cluster-label span{color:#333;}#_r_cb_ .cluster-label span p{background-color:transparent;}#_r_cb_ .label text,#_r_cb_ span{fill:#333;color:#333;}#_r_cb_ .node rect,#_r_cb_ .node circle,#_r_cb_ .node ellipse,#_r_cb_ .node polygon,#_r_cb_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_cb_ .rough-node .label text,#_r_cb_ .node .label text,#_r_cb_ .image-shape .label,#_r_cb_ .icon-shape .label{text-anchor:middle;}#_r_cb_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_cb_ .rough-node .label,#_r_cb_ .node .label,#_r_cb_ .image-shape .label,#_r_cb_ .icon-shape .label{text-align:center;}#_r_cb_ .node.clickable{cursor:pointer;}#_r_cb_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_cb_ .arrowheadPath{fill:#333333;}#_r_cb_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_cb_ .flowchart-link{stroke:#333333;fill:none;}#_r_cb_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_cb_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_cb_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_cb_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_cb_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_cb_ .cluster text{fill:#333;}#_r_cb_ .cluster span{color:#333;}#_r_cb_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_cb_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_cb_ rect.text{fill:none;stroke-width:0;}#_r_cb_ .icon-shape,#_r_cb_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_cb_ .icon-shape p,#_r_cb_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_cb_ .icon-shape rect,#_r_cb_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_cb_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_cb_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_cb_ :root{--mermaid-font-family:inherit;}
Check dailyproject health

Monitor activetest runs

Assess releasereadiness

Investigatespecific issue

What do youneed to do?

Project DashboardTime-based Analysis

Live Monitor DashboardCurrent State

Release Health DashboardRelease-based Analysis

Navigate toDetailed Reports

Use for: Daily standups,weekly team reviews,trend monitoring

Use for: During deployments,real-time test execution,immediate status checks

Use for: Release meetings,sprint retrospectives,stakeholder reporting

Decision tree: Choosing the right dashboard for your task

Now let's practice using each dashboard type through hands-on workflows.

## Workflow 1: Morning Dashboard Check (Project Dashboard)

Scenario: You're a QA Manager starting your day. Before the daily standup, you need a quick overview of project health. Let's use the Project Dashboard to understand testing status from the past week.

### Open Your Project Dashboard

- Log into Katalon TestOps and navigate to your project

- You'll land on the Project Dashboard by default—this is your daily command center

- Notice the dashboard shows multiple widgets (boxes) displaying different metrics

What you're seeing: The Project Dashboard uses time-based analysis, meaning it shows data from a specific time period (default: last 7 days).

### Interpret the Test Results Summary Widget

Look at the Test Results Summary widget (typically in the top-left area).

What it shows:

- Green "Passed" count: Number of test executions that passed in the selected time range

- Red "Failed" count: Number of test executions that failed—these need attention

- Pass Rate %: Overall health indicator calculated as: (Passed / (Passed + Failed)) × 100

How to interpret the numbers:
Pass RateWhat It MeansAction NeededAbove 90%Healthy—strong quality, minimal issuesContinue monitoring80-90%Acceptable—some failures expected, watch trendsMonitor for patternsBelow 80%Warning—quality degrading, investigate nowDrill into reports to find root causes
Example: If you see "85% pass rate (340 Passed, 60 Failed)"—this is acceptable but approaching warning level. Check if the trend is improving or degrading.

### Check Open Defects

Look at the Total Current Open Defects widget.

What it shows:
Count of defects currently unresolved in your project. This widget uses Current scope (ignores time range) to show defects open right now.

Why it matters:
Open defects represent known issues requiring resolution. High-priority defects may block release.

Action: If you see defects, note the priority breakdown. Critical/High priority defects need immediate attention.

### Review the Trend Chart

Find the Test Results Trend Daily chart (bar chart showing daily results).

What it shows:
Daily test execution results over your selected time range. Each bar is divided by status (Passed = green, Failed = red, Error = orange, etc.).

What to look for:

- Is the trend improving? Green bars getting taller = good

- Is the trend degrading? Red bars getting taller = investigate

- Are there gaps? Days with no bars = no testing occurred (maybe weekends)

Example interpretation: If you see mostly green bars for the past 5 days but today's bar is 50% red—something changed recently. This warrants investigation.

### Adjust Time Range to Focus Analysis

- Look for the Time Range selector (typically top-right of dashboard)

- Click to open the dropdown

- Try changing from "Last 7 days" to "Last 24 hours"

- Watch how all widgets update to show only yesterday's data

What you've learned:
Time range is like adjusting your telescope's focus. "Last 24 hours" shows yesterday's activity (great for daily standups). "Last 7 days" shows weekly trends (great for weekly reviews). "Last 30 days" shows monthly patterns (great for monthly reporting).

Common time ranges and when to use them:

- Last 24 hours: Daily standup, yesterday's testing summary

- Last 7 days: Weekly team review, recent quality trends

- Last 30 days: Monthly reporting, longer-term patterns

### Make Your Decision

After reviewing these widgets, you can now answer in your standup:

✅ If pass rate above 90%, no critical defects, stable trends:
"Testing is in good shape. Pass rate is 92%, no blockers, quality is stable."

⚠️ If pass rate below 80%, or increasing defects, or degrading trends:
"We have some issues to address. Pass rate dropped to 78% yesterday, and we have 5 new high-priority defects. I'll investigate after standup." (Then drill into reports for root cause analysis.)

Expected Outcome: You understand project health in 2-5 minutes, can identify if urgent action is needed, and know what "pass rate" and "open defects" mean in context.

## Workflow 2: Monitor Live Test Execution (Live Monitor Dashboard)

Scenario: Your team is deploying a new release. Automated tests are running right now, and you need to monitor the execution in real-time to catch failures as they happen.

### Navigate to Live Monitor Dashboard

- Click the Dashboards menu in the navigation

- Select Live Monitor Dashboard from the list

- The dashboard loads with a different set of widgets

Key difference: Live Monitor shows current state data, not time-based data. It displays the latest execution status per test case, regardless of when tests ran.

### Understand "Current" Data Behavior

Notice that the Time Range selector is disabled or has no effect on this dashboard.

Why? Live Monitor answers "What's the status right now?" not "What happened in the last 7 days?"

What "Current" means:

- Shows the latest result for each test case

- If a test last ran 5 minutes ago → shows that result

- If a test last ran 2 weeks ago and hasn't run since → shows the 2-week-old result (it's still the "current" status)

Important distinction:
Dashboard TypeQuestion It AnswersData ScopeProject Dashboard"What happened in the past week?"Time-based (all executions in time range)Live Monitor Dashboard"What's the current status?"Current (latest execution per test case)
### Monitor Real-Time Execution

During active test runs:

- The Test Results Summary widget updates automatically (refreshes every 30 seconds)

- Watch for new failures appearing in red

- The Total Current Open Defects widgets show defects open right now (not historical)

Use case example:
During deployment, keep Live Monitor open in a browser tab. If new test failures emerge (status changes from green to red), you'll see them appear within 30 seconds.

### Know When to Use Live Monitor vs Project Dashboard

Use Live Monitor when:

- ✅ Monitoring active test runs during deployment

- ✅ Checking immediate status ("Are all tests currently passing?")

- ✅ Real-time quality checks during release deployment

Use Project Dashboard when:

- ✅ Analyzing trends over time ("How did testing perform this week?")

- ✅ Comparing today vs yesterday ("Did quality improve?")

- ✅ Daily standups requiring time-based summaries

Expected Outcome: You understand Live Monitor shows "current state" vs Project Dashboard's "time-based analysis," and you know when to use each dashboard type.

## Workflow 3: Assess Release Quality (Release Health Dashboard)

Scenario: Your team has a release readiness meeting tomorrow. You need to check if Release 3.0 has met quality gates: above 90% pass rate, all critical features tested, no high-priority defects.

### Navigate to Release Health Dashboard

- Click the Dashboards menu

- Select Release Health Dashboard

- You'll see a Release Picker (dropdown) at the top

### Select Your Release

Note: The dashboard automatically loads with the current/latest release selected by default. You can switch to view other releases using the Release Picker.

- Click the Release Picker dropdown

- Select "Release 3.0" (or your current release)

- Watch all widgets update to show data only for Release 3.0

Key behavior: Release Health Dashboard uses release-based scope, not time-based scope. It shows all data associated with Release 3.0, regardless of when tests ran.

Example:
If testing started 4 weeks ago and continued until yesterday, the dashboard shows all 4 weeks of Release 3.0 testing—not just the last 7 days.

### Check Requirement Coverage

Look at the Requirement Coverage Summary widget.

What it shows:

- Percentage of requirements with linked test cases

- Shows how much of the release is actually tested

How to interpret:

- Above 90% coverage: Excellent—most features have test coverage

- 70-90% coverage: Acceptable—some gaps exist

- Below 70% coverage: Warning—significant untested functionality

Why it matters: If only 50% of requirements are covered, you don't have enough testing to make a confident go/no-go decision.

### Review Testing Progress Trend

Find the Test Results Trend Daily chart.

What it shows:
Daily test execution results over the entire release cycle (from release start date to today).

What to look for:

- Early in release: Expect higher failure rates (features incomplete, tests stabilizing)

- Late in release: Expect high pass rates (features stabilized, tests mature)

- Upward green trend: Good—quality improving over release cycle

- Recent red spike: Concern—quality degrading as release approaches

### Assess Defect Activity

Look at the Defects Activity Trend widget (combined line and bar chart).

What it shows:

- Bars: Defects created (blue) and closed (green) each day

- Line: Cumulative open defects over time

Ideal pattern:

- Early release: High defect creation (bugs being found)

- Late release: High defect closure rate, declining open defects

- At release date: Very few open defects

Warning signs:

- Open defects line trending upward near release date = defect backlog growing

- More defects created than closed = team can't keep up with fixes

### Check Overall Pass Rate

Find the Test Pass Rates Summary widget.

What it shows:
Overall pass rate for Release 3.0 (all testing for this release).

Release readiness benchmarks:

- Above 95%: Excellent—release ready

- 90-95%: Good—release likely ready (review open defects)

- 85-90%: Acceptable—may need fixes before release

- Below 85%: At risk—significant quality concerns, likely delay release

### Make Your Go/No-Go Assessment

After reviewing these widgets, you can now answer in the release meeting:

✅ GO Decision Example:
"Release 3.0 quality metrics: 94% pass rate, 92% requirement coverage, 2 open defects (both low priority), defect backlog declining. Quality gates met. Recommend GO for release."

⚠️ NO-GO Decision Example:
"Release 3.0 quality metrics: 82% pass rate, 15 high-priority defects still open, only 75% requirement coverage. Quality gates not met. Recommend 1-week delay to address critical issues."

Expected Outcome: You understand Release Health Dashboard uses "release scope" not "time scope," and you know how to assess release readiness using multiple quality indicators.

## Understanding Widget Interpretation: A Transferable Pattern

You've now seen several widgets across different dashboards. Let's learn a pattern you can apply to any widget you encounter:

ActionDecisionWidgetUserActionDecisionWidgetUser#_r_ce_{margin:1.5rem auto 0;}#_r_ce_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_ce_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_ce_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_ce_ .error-icon{fill:#552222;}#_r_ce_ .error-text{fill:#552222;stroke:#552222;}#_r_ce_ .edge-thickness-normal{stroke-width:1px;}#_r_ce_ .edge-thickness-thick{stroke-width:3.5px;}#_r_ce_ .edge-pattern-solid{stroke-dasharray:0;}#_r_ce_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_ce_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_ce_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_ce_ .marker{fill:#333333;stroke:#333333;}#_r_ce_ .marker.cross{stroke:#333333;}#_r_ce_ svg{font-family:inherit;font-size:16px;}#_r_ce_ p{margin:0;}#_r_ce_ .actor{stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);fill:#ECECFF;}#_r_ce_ text.actor>tspan{fill:black;stroke:none;}#_r_ce_ .actor-line{stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);}#_r_ce_ .innerArc{stroke-width:1.5;stroke-dasharray:none;}#_r_ce_ .messageLine0{stroke-width:1.5;stroke-dasharray:none;stroke:#333;}#_r_ce_ .messageLine1{stroke-width:1.5;stroke-dasharray:2,2;stroke:#333;}#_r_ce_ #arrowhead path{fill:#333;stroke:#333;}#_r_ce_ .sequenceNumber{fill:white;}#_r_ce_ #sequencenumber{fill:#333;}#_r_ce_ #crosshead path{fill:#333;stroke:#333;}#_r_ce_ .messageText{fill:#333;stroke:none;}#_r_ce_ .labelBox{stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);fill:#ECECFF;}#_r_ce_ .labelText,#_r_ce_ .labelText>tspan{fill:black;stroke:none;}#_r_ce_ .loopText,#_r_ce_ .loopText>tspan{fill:black;stroke:none;}#_r_ce_ .loopLine{stroke-width:2px;stroke-dasharray:2,2;stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);fill:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);}#_r_ce_ .note{stroke:#aaaa33;fill:#fff5ad;}#_r_ce_ .noteText,#_r_ce_ .noteText>tspan{fill:black;stroke:none;}#_r_ce_ .activation0{fill:#f4f4f4;stroke:#666;}#_r_ce_ .activation1{fill:#f4f4f4;stroke:#666;}#_r_ce_ .activation2{fill:#f4f4f4;stroke:#666;}#_r_ce_ .actorPopupMenu{position:absolute;}#_r_ce_ .actorPopupMenuPanel{position:absolute;fill:#ECECFF;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);filter:drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));}#_r_ce_ .actor-man line{stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);fill:#ECECFF;}#_r_ce_ .actor-man circle,#_r_ce_ line{stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);fill:#ECECFF;stroke-width:2px;}#_r_ce_ :root{--mermaid-font-family:inherit;}Repeat this pattern for any widget1. Read widget titleShows: "Test Pass Rate - Last 7 Days"2. Identify the metricShows: 85%3. Check time/release contextContext: "Last 7 Days" (time-based)4. Is 85% pass rate good or bad?Compare to baseline:- Above 90% = Healthy- 80-90% = Acceptable- Below 80% = Investigate5. Take appropriate action85% is acceptableContinue monitoring ORDrill into report if trending down

5-step pattern for interpreting any dashboard widget

Apply this pattern:

### Read the Widget Title

Widget title tells you what question it answers.

Examples:

- "Test Results Summary" → "What are my current test results?"

- "Open Defects by Priority" → "How many open defects exist at each priority level?"

- "Test Pass Rates by Type" → "What's the pass rate for Manual vs Automated tests?"

### Identify the Metric

Look at the number, percentage, or chart.

- Number: "340 Passed"

- Percentage: "85% pass rate"

- Trend: Line graph showing pass rate over time

### Check Time/Release Context

Critical step: Always confirm what data scope the widget uses.

- Time-based widget → Check time range selector (Last 7 days? Last 30 days?)

- Release-based widget → Check release picker (Which release am I viewing?)

- Current widget → No time filter (shows latest per test case)

### Compare to Your Baseline

What's "good" vs "bad" depends on context:

- Early development: 70-80% pass rate = normal

- Pre-release: above 95% pass rate = expected

- Stable product: above 90% pass rate = healthy baseline

Refer to your team's quality gates (defined thresholds for acceptable quality).

### Take Appropriate Action

- ✅ Metrics healthy → Continue monitoring, no action needed

- ⚠️ Metrics concerning → Drill into detailed reports, investigate root causes

- 🔴 Metrics critical → Immediate action required, escalate to team

Practice this pattern: Next time you see an unfamiliar widget, apply these 5 steps. You'll quickly build confidence interpreting any widget independently.

## Time Range Filtering in Action

You've seen time range mentioned throughout this tutorial. Let's solidify your understanding with a practical example.

Example scenario: Your manager asks, "How did testing go this week?"

Steps:

- Open Project Dashboard (time-based analysis)

- Set time range to "Last 7 days"

- Look at Test Results Summary widget

- Report: "We executed 450 tests this week, with a 91% pass rate. Quality is healthy."

Now your manager asks: "How did yesterday specifically go?"

Steps:

- Stay on Project Dashboard (still time-based)

- Change time range to "Last 24 hours"

- Look at Test Results Summary widget (now shows only yesterday)

- Report: "Yesterday we ran 80 tests, 88% passed. Slightly below our weekly average but acceptable."

Key insight: Changing the time range changes the story the data tells. Always confirm what time range you're viewing when interpreting metrics.

## Visual References: Additional Insights

### What widgets are available on each dashboard?

### What does 'good' pass rate look like?

### How often do dashboards update?

### Can I customize dashboards?

### Common Dashboard Mistakes and How to Avoid Them

## Summary: What You've Learned

Congratulations! You've completed the dashboard tutorial and gained foundational skills for navigating and interpreting Katalon TestOps dashboards.

You now understand:

✅ Dashboard vs Report distinction: Dashboards for quick operational checks, reports for detailed investigation

✅ Three dashboard types and when to use each:

- Project Dashboard → Time-based analysis (daily/weekly monitoring)

- Live Monitor Dashboard → Current state (real-time execution tracking)

- Release Health Dashboard → Release-based analysis (release readiness assessment)

✅ Widget interpretation pattern: 5-step process you can apply to any widget (title → metric → context → baseline → action)

✅ Time range filtering: How to focus analysis on specific time periods (Last 24 hours for daily standup, Last 7 days for weekly review)

✅ "Dashboard first, report second" principle: Use dashboards for overview, drill into reports when investigation needed

You can now:

- Open any of the three dashboards independently

- Interpret common widgets (Test Results Summary, Open Defects, Pass Rates, Trends)

- Change time range to focus analysis on different periods

- Decide which dashboard to use for different scenarios

- Explain dashboard metrics in team meetings

## Next Steps

Continue building your TestOps expertise:

Deepen your understanding:

- [Understanding Analysis Scope Types](/docs/getting-started/understanding-analysis-scope) - Learn the conceptual differences between time-based, release-based, and current scope

- [Understanding Report Types](/docs/getting-started/understanding-report-types) - Explore the relationship between dashboards and reports

Learn specific dashboard features:

- [Project Dashboard Overview](/docs/dashboards/project-dashboard) - Detailed guide to Project Dashboard widgets and use cases

- [Live Monitor Dashboard Overview](/docs/dashboards/live-monitor-dashboard) - Real-time monitoring capabilities and best practices

- [Release Health Dashboard Overview](/docs/dashboards/release-health-dashboard) - Release readiness assessment workflows

Apply your dashboard knowledge:

- [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope) - Learn to apply filters to narrow dashboard data

- [All Widgets Reference](/docs/getting-started/reference/all-widgets-reference) - Complete catalog of all dashboard widgets

Ready to go deeper? Explore the [Dashboards](/docs/dashboards/introduction) section for advanced use cases and best practices.

## See Also

- [Get Started with Your Project Dashboard](/docs/getting-started/get-started-with-your-project-dashboard) - Prerequisites for this tutorial

- [Release Readiness Assessment](/docs/release-readiness/stakeholder-reporting) - Using Release Health Dashboard for go/no-go decisions

- [Dashboard Best Practices](/docs/dashboards/reference/dashboard-best-practices) - Tips for effective dashboard usage

[Dashboards & Monitoring: Overview and Getting StartedLearn to navigate Live Monitor, Analytics & Trends, and Release Health dashboards—choosing the right dashboard for real-time monitoring, historical trend analysis, or strategic release decisions.](/docs/dashboards/dashboards-overview)[Monitoring Real-Time Test ExecutionLearn how to monitor active test runs in real-time using the Live Monitor Dashboard, identify failures as they happen, and investigate test details immediately.](/docs/dashboards/monitor-real-time-test-execution)
# AI-Powered Features: Overview and Getting Started

Automate test failure triage and executive reporting with AI features that reduce debugging time by 60% and cut stakeholder report preparation from 2 hours to minutes.

# AI-Powered Features: Overview and Getting Started

Reading time: 5 minutes

Quality analysis shouldn't consume all your time. QA Engineers spend 40% of debugging time just understanding what went wrong. QA Managers spend 1-2 hours per week translating dashboard metrics into stakeholder reports. AI Features automate these cognitive bottlenecks—reducing triage time by 60% and cutting report preparation from hours to minutes.

## The Challenge: Cognitive Bottlenecks in Testing Workflows

Testing workflows have two major manual analysis tasks that consume significant time but are highly automatable:

Test Failure Investigation (QA Engineers): When a test fails in the CI/CD pipeline, QA Engineers must parse stack traces, interpret error messages, and research unfamiliar failure patterns. This investigation overhead accounts for 40% of debugging time. Without deep knowledge of specific test types, engineers get stuck—slowing down the entire team when expertise is unavailable.

Stakeholder Reporting (QA Managers): QA Managers prepare for weekly stakeholder meetings by gathering metrics from multiple dashboards, translating technical data into business language, and structuring narrative summaries for executives. This recurring task consumes 1-2 hours per report—time that could be spent on strategic work like team mentoring and quality planning.

AI features automate these analysis tasks—not by replacing human judgment, but by handling the repetitive cognitive work. AI Test Failure Analysis provides instant triage recommendations (60% faster root cause identification). AI Executive Briefing generates structured summaries in minutes (vs. 2 hours manually). The time saved shifts from repetitive cognitive work to higher-value activities.

## What This Section Covers

This section provides capabilities to:

- Automate test failure triage with AI Test Failure Analysis that categorizes failures (Environment Issue, Timing Issue, Broken Selector, etc.) and provides plain-English explanations with troubleshooting suggestions—reducing Mean Time to Identify (MTTI) root causes by 60%

- Generate executive briefings in seconds with AI Executive Briefing that analyzes Project Dashboard metrics and structures business-friendly summaries in three sections (Key Achievements, Risks & Blockers, Next Steps)—cutting stakeholder report preparation from hours to minutes

- Transform repetitive cognitive work into automated insights so your team can shift focus from manual analysis to strategic activities (improving test frameworks, mentoring team members, proactive quality planning)

## What You'll Achieve

By completing this section, you will:

- Understand what AI features mean for Reports & Analytics—specifically how they automate cognitive bottlenecks (test failure investigation and stakeholder reporting)

- Identify when to use AI Test Failure Analysis vs. AI Executive Briefing based on your role and immediate task

- Navigate to AI feature access points (Test Result Detail page for failure analysis, Project Dashboard for executive briefing)

- Recognize the time savings potential—60% faster triage for failures, minutes vs. 2 hours for executive reports

- Distinguish between AI-generated insights (80% ready for immediate use) and areas requiring organizational context (manual refinement)

- Evaluate AI features for your workflow and determine next steps (hands-on tutorials for Test Failure Analysis and Executive Briefing)

## Prerequisites

Before you begin: Complete [Getting Started](/docs/getting-started/introduction) to understand core concepts and navigation patterns. For AI Executive Briefing, ensure your project has 2-3 weeks of test history for meaningful trend analysis. Estimated prerequisite time: 2 hours.

## Visual Journey Map

AI features split into two capabilities serving different audiences and workflows:

#_r_ht_{margin:1.5rem auto 0;}#_r_ht_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_ht_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_ht_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_ht_ .error-icon{fill:#552222;}#_r_ht_ .error-text{fill:#552222;stroke:#552222;}#_r_ht_ .edge-thickness-normal{stroke-width:1px;}#_r_ht_ .edge-thickness-thick{stroke-width:3.5px;}#_r_ht_ .edge-pattern-solid{stroke-dasharray:0;}#_r_ht_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_ht_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_ht_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_ht_ .marker{fill:#333333;stroke:#333333;}#_r_ht_ .marker.cross{stroke:#333333;}#_r_ht_ svg{font-family:inherit;font-size:16px;}#_r_ht_ p{margin:0;}#_r_ht_ .label{font-family:inherit;color:#333;}#_r_ht_ .cluster-label text{fill:#333;}#_r_ht_ .cluster-label span{color:#333;}#_r_ht_ .cluster-label span p{background-color:transparent;}#_r_ht_ .label text,#_r_ht_ span{fill:#333;color:#333;}#_r_ht_ .node rect,#_r_ht_ .node circle,#_r_ht_ .node ellipse,#_r_ht_ .node polygon,#_r_ht_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_ht_ .rough-node .label text,#_r_ht_ .node .label text,#_r_ht_ .image-shape .label,#_r_ht_ .icon-shape .label{text-anchor:middle;}#_r_ht_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_ht_ .rough-node .label,#_r_ht_ .node .label,#_r_ht_ .image-shape .label,#_r_ht_ .icon-shape .label{text-align:center;}#_r_ht_ .node.clickable{cursor:pointer;}#_r_ht_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_ht_ .arrowheadPath{fill:#333333;}#_r_ht_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_ht_ .flowchart-link{stroke:#333333;fill:none;}#_r_ht_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_ht_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_ht_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_ht_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_ht_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_ht_ .cluster text{fill:#333;}#_r_ht_ .cluster span{color:#333;}#_r_ht_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_ht_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_ht_ rect.text{fill:none;stroke-width:0;}#_r_ht_ .icon-shape,#_r_ht_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_ht_ .icon-shape p,#_r_ht_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_ht_ .icon-shape rect,#_r_ht_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_ht_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_ht_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_ht_ :root{--mermaid-font-family:inherit;}
AI-Powered Featuresfor Reports & Analytics

Test Failure Analysis

Executive Briefing

For: QA Engineers, Testers

Input: Failed test logs

Output: Category + Explanation

Time Saved: 60% faster triage

For: QA Managers, Leaders

Input: Dashboard metrics

Output: 3-part summary

Time Saved: Minutes vs 2 hours

AI transforms time-intensive manual analysis into seconds-long automated processes:

#_r_hv_{margin:1.5rem auto 0;}#_r_hv_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_hv_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_hv_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_hv_ .error-icon{fill:#552222;}#_r_hv_ .error-text{fill:#552222;stroke:#552222;}#_r_hv_ .edge-thickness-normal{stroke-width:1px;}#_r_hv_ .edge-thickness-thick{stroke-width:3.5px;}#_r_hv_ .edge-pattern-solid{stroke-dasharray:0;}#_r_hv_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_hv_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_hv_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_hv_ .marker{fill:#333333;stroke:#333333;}#_r_hv_ .marker.cross{stroke:#333333;}#_r_hv_ svg{font-family:inherit;font-size:16px;}#_r_hv_ p{margin:0;}#_r_hv_ .label{font-family:inherit;color:#333;}#_r_hv_ .cluster-label text{fill:#333;}#_r_hv_ .cluster-label span{color:#333;}#_r_hv_ .cluster-label span p{background-color:transparent;}#_r_hv_ .label text,#_r_hv_ span{fill:#333;color:#333;}#_r_hv_ .node rect,#_r_hv_ .node circle,#_r_hv_ .node ellipse,#_r_hv_ .node polygon,#_r_hv_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_hv_ .rough-node .label text,#_r_hv_ .node .label text,#_r_hv_ .image-shape .label,#_r_hv_ .icon-shape .label{text-anchor:middle;}#_r_hv_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_hv_ .rough-node .label,#_r_hv_ .node .label,#_r_hv_ .image-shape .label,#_r_hv_ .icon-shape .label{text-align:center;}#_r_hv_ .node.clickable{cursor:pointer;}#_r_hv_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_hv_ .arrowheadPath{fill:#333333;}#_r_hv_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_hv_ .flowchart-link{stroke:#333333;fill:none;}#_r_hv_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_hv_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_hv_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_hv_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_hv_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_hv_ .cluster text{fill:#333;}#_r_hv_ .cluster span{color:#333;}#_r_hv_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_hv_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_hv_ rect.text{fill:none;stroke-width:0;}#_r_hv_ .icon-shape,#_r_hv_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_hv_ .icon-shape p,#_r_hv_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_hv_ .icon-shape rect,#_r_hv_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_hv_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_hv_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_hv_ :root{--mermaid-font-family:inherit;}
Manual WorkHours of Analysis

AI Automation

Test Failure Analysis60% faster triage

Executive BriefingMinutes vs 2 hours

## Decision Framework: Which AI Feature to Use?

AspectAI Test Failure AnalysisAI Executive BriefingPrimary Use CaseInvestigate test failuresGenerate stakeholder reportsTarget AudienceQA Engineers, TestersQA Managers, LeadersTime Saved60% faster triageMinutes vs 2 hoursWhere to AccessTest Result Detail pageProject DashboardInputFailed test logs/stack tracesDashboard metrics (pass rate, trends, defects)OutputCategory + Plain-English explanation + Suggestions3-part summary (Key Achievements, Risks & Blockers, Next Steps)Best Used WhenDebugging test failures, need quick root causePreparing stakeholder meetings, sprint reviews, executive reports

## Section Contents Overview

This section includes 2 AI feature documents organized by Diataxis type:

How-To Guides:

- [AI Test Failure Analysis](/docs/ai-features/ai-failure-analysis) - Automate test failure triage with AI-powered categorization and plain-English explanations

- [AI Executive Briefing](/docs/ai-features/ai-executive-briefing) - Generate stakeholder-ready quality summaries in minutes from Project Dashboard metrics

## Recommended Learning Path

[### For QA Engineers
Start: AI Test Failure Analysis - Learn how AI categorizes failures and provides instant triage recommendations to reduce debugging time by 60%Then: Investigating Test Failures Tutorial - Integrate AI-powered triage into your complete failure investigation workflowFinally: Test Stability Intelligence - Combine AI insights with flakiness detection for comprehensive failure analysis](/docs/ai-features/ai-failure-analysis)[### For QA Managers
Start: AI Executive Briefing - Generate stakeholder-ready quality summaries in minutes from Project Dashboard metricsThen: Understanding Project Dashboard - Master the dashboard metrics that power AI-generated briefingsFinally: Stakeholder Communication & Reporting - Apply AI briefings within comprehensive stakeholder reporting workflows](/docs/ai-features/ai-executive-briefing)

## Common Questions

### How does AI Test Failure Analysis work?

### How does AI Executive Briefing generate summaries?

### How much time can AI features save?

### Are AI-generated insights accurate enough to use immediately?

### Can I customize what AI analyzes or how it generates output?

## Future AI Capabilities

Additional AI features in development:

Future FeatureTimelineUse CaseScout AI-Autonomous ExecutionPlannedAutonomous test execution with intelligent recoveryVirtual Data AnalystPlannedNatural language queries for quality metricsBulk Failure AnalysisPhase 3 (TBD)Analyze patterns across multiple failures

## See Also

Related Sections:

- [Getting Started](/docs/getting-started/introduction) - Understand TestOps Reports & Analytics fundamentals before using AI features

- [Dashboards & Monitoring](/docs/dashboards/introduction) - Master dashboard metrics that power AI Executive Briefing

- [Test Failures](/docs/investigating-failures/introduction) - Complete failure investigation workflows with AI-assisted approaches

Advanced Topics:

- [Test Stability Intelligence](/docs/customization/test-stability-intelligence) - Combine AI insights with flakiness detection for comprehensive analysis

- [Stakeholder Communication & Reporting](/docs/customization/stakeholder-communication) - Universal reporting best practices for AI-generated briefings

## 📍 Where to Go Next

Common next steps after AI Features:

- [Customization & Workflow Automation](/docs/customization/introduction) - AI Features is part of the broader Customization section—explore additional workflow optimization capabilities (custom dashboards, external sharing, report automation)

- [Investigating Test Failures Tutorial](/docs/investigating-failures/investigating-test-failures) - Apply AI Test Failure Analysis within complete failure investigation workflows

- [Understanding Project Dashboard](/docs/dashboards/project-dashboard) - Master the dashboard metrics that power AI Executive Briefing

Need help deciding? See [Getting Started: Overview and Getting Started](/docs/getting-started/introduction) for role-based learning paths.
[Export Reports and DashboardsExport report data as CSV for analysis in Excel or BI tools, and export individual test run results in Excel, HTML, or PDF formats for documentation and compliance records.](/docs/configuration-sharing/export-reports-and-dashboards)[Get Started with AI AnalysisLearn how to use AI features to analyze test failures 60% faster and generate executive reports in minutes instead of hours—hands-on tutorial for first-time AI users.](/docs/ai-features/get-started-with-ai-analysis)

AI-Powered Features
# Get Started with AI Analysis

Learn how to use AI features to analyze test failures 60% faster and generate executive reports in minutes instead of hours—hands-on tutorial for first-time AI users.

# Get Started with AI Analysis

Time to complete: 15 minutes
Prerequisites: TestOps account with test result data, Project Dashboard with at least one week of test history

Testing workflows involve repetitive cognitive work that AI can automate. When tests fail, you spend time parsing stack traces and researching error patterns. Before stakeholder meetings, you manually gather metrics and structure narratives. AI Features eliminate these bottlenecks—analyzing test failures in seconds and generating executive briefings in minutes instead of hours.

This tutorial provides hands-on experience with both AI capabilities. You'll analyze a real test failure to understand AI categorization, then generate an executive briefing from your Project Dashboard. By the end, you'll know when to use each AI feature and how to interpret AI output to accelerate your workflows.

## What You'll Learn

After completing this tutorial, you will:

- Understand what AI Features provide and when to use them instead of manual analysis

- Complete your first AI Failure Analysis on a failed test result

- Generate your first AI Executive Briefing from Project Dashboard metrics

- Interpret AI output including categories, plain-English summaries, and confidence levels

- Know how to combine AI insights with manual expertise

- Identify next steps for deeper AI usage through detailed how-to guides

## What You'll Do

This tutorial includes two hands-on exercises:

- Analyze a test failure with AI - Navigate to a failed test, click "Analyze with AI," and interpret the results (7 minutes)

- Generate an AI executive briefing - Create a stakeholder-ready summary from your Project Dashboard (5 minutes)

- Understand AI limitations - Learn what's available now and what's coming in future phases (3 minutes)

Best learning environment: Use a project with recent test failures and 2-3 weeks of test execution history. If you don't have failed tests, this tutorial will still teach you the concepts—you can practice the workflows when failures occur.

## Understanding AI Features for Reports & Analytics

Katalon TestOps provides two AI capabilities designed to automate cognitive bottlenecks in quality workflows:

### Two AI Capabilities Serving Different Needs

#_r_id_{margin:1.5rem auto 0;}#_r_id_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_id_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_id_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_id_ .error-icon{fill:#552222;}#_r_id_ .error-text{fill:#552222;stroke:#552222;}#_r_id_ .edge-thickness-normal{stroke-width:1px;}#_r_id_ .edge-thickness-thick{stroke-width:3.5px;}#_r_id_ .edge-pattern-solid{stroke-dasharray:0;}#_r_id_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_id_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_id_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_id_ .marker{fill:#333333;stroke:#333333;}#_r_id_ .marker.cross{stroke:#333333;}#_r_id_ svg{font-family:inherit;font-size:16px;}#_r_id_ p{margin:0;}#_r_id_ .label{font-family:inherit;color:#333;}#_r_id_ .cluster-label text{fill:#333;}#_r_id_ .cluster-label span{color:#333;}#_r_id_ .cluster-label span p{background-color:transparent;}#_r_id_ .label text,#_r_id_ span{fill:#333;color:#333;}#_r_id_ .node rect,#_r_id_ .node circle,#_r_id_ .node ellipse,#_r_id_ .node polygon,#_r_id_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_id_ .rough-node .label text,#_r_id_ .node .label text,#_r_id_ .image-shape .label,#_r_id_ .icon-shape .label{text-anchor:middle;}#_r_id_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_id_ .rough-node .label,#_r_id_ .node .label,#_r_id_ .image-shape .label,#_r_id_ .icon-shape .label{text-align:center;}#_r_id_ .node.clickable{cursor:pointer;}#_r_id_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_id_ .arrowheadPath{fill:#333333;}#_r_id_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_id_ .flowchart-link{stroke:#333333;fill:none;}#_r_id_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_id_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_id_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_id_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_id_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_id_ .cluster text{fill:#333;}#_r_id_ .cluster span{color:#333;}#_r_id_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_id_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_id_ rect.text{fill:none;stroke-width:0;}#_r_id_ .icon-shape,#_r_id_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_id_ .icon-shape p,#_r_id_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_id_ .icon-shape rect,#_r_id_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_id_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_id_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_id_ :root{--mermaid-font-family:inherit;}
Investigate test failures

Prepare stakeholder report

Both

What do you need to do?

Task Type

AI Test Failure Analysis

AI Executive Briefing

Use both features sequentially

Access: Test Result Detail page

Output: Category + Summary + Suggestions

Time Saved: 60% reduction in MTTI

Access: Project Dashboard

Output: 3-part summary

Time Saved: Minutes vs 2 hours

Week: Analyze failures with AI

Friday: Generate briefing for sprint review

AI Test Failure Analysis helps QA Engineers and Manual Testers investigate test failures faster by automatically categorizing failures into common issue types (Environment Issue, Timing Issue, Broken Selector, etc.) and providing plain-English explanations with troubleshooting suggestions. Instead of manually parsing stack traces for 45 minutes, you get actionable insights in 5-10 seconds—a 60% reduction in Mean Time to Identify root causes.

AI Executive Briefing helps QA Managers and Leaders prepare stakeholder reports in minutes instead of 2 hours. The AI analyzes your Project Dashboard metrics and generates a structured 3-part summary with Key Achievements (positive trends), Risks & Blockers (concerns requiring attention), and Next Steps (recommended actions). Copy the briefing to your clipboard and paste it into emails, Slack, or presentations with minor customization.

### AI as Augmentation, Not Replacement

AI Features accelerate investigation and reporting by handling repetitive cognitive work—parsing logs, gathering metrics, structuring summaries. Humans still provide context, validate recommendations, and make final decisions. Think of AI as a junior analyst who quickly synthesizes data: experienced QA professionals review and refine AI output based on domain knowledge.

Both features are designed to be "80% ready" for immediate use. AI Test Failure Analysis provides directional guidance that you validate with manual investigation. AI Executive Briefing structures data-driven summaries that need only minor organizational context edits (adding team member names, timeline specifics, tone adjustments). AI handles the hard part of synthesizing data; you handle the customization by applying context.

### What's Available in Phase 1

Current AI Features focus on two proven use cases with clear value:

✅ Available Now:

- AI Test Failure Analysis for individual test failures

- AI Executive Briefing from Project Dashboard

- 7 failure categories (Environment, Timing, Broken Selector, Assertion, Network, Permission, Data)

- 3-part briefing structure (Key Achievements, Risks & Blockers, Next Steps)

- Copy to Clipboard functionality

❌ Not Available Yet (Phase 2+):

- Bulk failure analysis (analyzing patterns across multiple failures simultaneously)

- Natural language queries ("Show me all flaky tests in payments module")

- Custom AI models trained on your organization's data

- AI briefings from dashboards other than Project Dashboard

- Autonomous test recovery (AI fixes tests automatically)

- Predictive failure detection

## Hands-On Exercise 1: Analyze Your First Test Failure with AI

Let's analyze a failed test using AI to understand how automated categorization works.

### Scenario

You're investigating a failed checkout test in your e-commerce application. The test passed yesterday but fails today with an "ElementNotFound" error. Instead of manually reading through stack traces, you'll use AI to get immediate insights.

### Workflow

AI EngineTestOps PlatformQA EngineerAI EngineTestOps PlatformQA Engineer#_r_if_{margin:1.5rem auto 0;}#_r_if_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_if_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_if_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_if_ .error-icon{fill:#552222;}#_r_if_ .error-text{fill:#552222;stroke:#552222;}#_r_if_ .edge-thickness-normal{stroke-width:1px;}#_r_if_ .edge-thickness-thick{stroke-width:3.5px;}#_r_if_ .edge-pattern-solid{stroke-dasharray:0;}#_r_if_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_if_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_if_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_if_ .marker{fill:#333333;stroke:#333333;}#_r_if_ .marker.cross{stroke:#333333;}#_r_if_ svg{font-family:inherit;font-size:16px;}#_r_if_ p{margin:0;}#_r_if_ .actor{stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);fill:#ECECFF;}#_r_if_ text.actor>tspan{fill:black;stroke:none;}#_r_if_ .actor-line{stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);}#_r_if_ .innerArc{stroke-width:1.5;stroke-dasharray:none;}#_r_if_ .messageLine0{stroke-width:1.5;stroke-dasharray:none;stroke:#333;}#_r_if_ .messageLine1{stroke-width:1.5;stroke-dasharray:2,2;stroke:#333;}#_r_if_ #arrowhead path{fill:#333;stroke:#333;}#_r_if_ .sequenceNumber{fill:white;}#_r_if_ #sequencenumber{fill:#333;}#_r_if_ #crosshead path{fill:#333;stroke:#333;}#_r_if_ .messageText{fill:#333;stroke:none;}#_r_if_ .labelBox{stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);fill:#ECECFF;}#_r_if_ .labelText,#_r_if_ .labelText>tspan{fill:black;stroke:none;}#_r_if_ .loopText,#_r_if_ .loopText>tspan{fill:black;stroke:none;}#_r_if_ .loopLine{stroke-width:2px;stroke-dasharray:2,2;stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);fill:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);}#_r_if_ .note{stroke:#aaaa33;fill:#fff5ad;}#_r_if_ .noteText,#_r_if_ .noteText>tspan{fill:black;stroke:none;}#_r_if_ .activation0{fill:#f4f4f4;stroke:#666;}#_r_if_ .activation1{fill:#f4f4f4;stroke:#666;}#_r_if_ .activation2{fill:#f4f4f4;stroke:#666;}#_r_if_ .actorPopupMenu{position:absolute;}#_r_if_ .actorPopupMenuPanel{position:absolute;fill:#ECECFF;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);filter:drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));}#_r_if_ .actor-man line{stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);fill:#ECECFF;}#_r_if_ .actor-man circle,#_r_if_ line{stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);fill:#ECECFF;stroke-width:2px;}#_r_if_ :root{--mermaid-font-family:inherit;}Navigate to failed test resultClick "Analyze with AI"Send test logs, stack trace, metadataAnalyze error patterns (5-10 seconds)Return category + summary + suggestionsDisplay AI analysisReview category and suggestionsDecide next action (create defect, update test, validate manually)

### Navigate to Test Result Details

Access a failed test result through one of these paths:

From Test Run Details:

- Open any test run that contains failed tests

- Scroll to the Test Results table

- Click on any row with "Failed" status

From Test Results List:

- Navigate to Reports → Test Results in the main menu

- Apply filters to show failed results (Status = Failed)

- Click on any failed test result row

Once on the Test Result Detail page, you'll see error messages, stack traces, screenshots, and execution logs. Locate the "Analyze with AI" button in the page header or action toolbar (typically in the top-right section).

### Trigger AI Analysis

Click the "Analyze with AI" button to start automated failure analysis.

The button displays a loading indicator while the AI processes your test failure data. Analysis typically takes 5-10 seconds. During this time, the AI:

- Extracts error messages from test logs

- Analyzes stack trace patterns

- Reviews execution screenshots (if available)

- Examines test configuration and environment data

- Compares against known failure patterns

- Generates categorization and plain-English summary

You can continue viewing test result details while the analysis runs. The AI output will appear in a dedicated section once processing completes.

What you'll see: A loading indicator followed by the AI analysis results appearing on the page.

### Review AI Analysis Output

The AI analysis provides three key pieces of information:

1. Failure Category

The AI automatically assigns your test failure to one of seven common categories:

### What failure categories does AI use?

The category appears as a labeled badge at the top of the AI analysis section, giving you immediate high-level understanding of the failure type.

2. Plain-English Summary

Below the category, you'll see a 2-3 sentence explanation of what went wrong, written in non-technical language.

Example for a Broken Selector failure:
"The test failed because the 'Submit Order' button could not be found on the checkout page. This typically happens when the page layout changes or when the element takes longer to load than expected. The test was looking for a button with ID 'submit-btn', but no element with that identifier exists on the current page."

The plain-English summary translates technical error details into clear cause-and-effect explanations, making failure investigation accessible to team members without deep technical expertise.

3. Actionable Suggestions

The AI provides 2-4 specific next steps to resolve the failure, listed in priority order:

Example suggestions for Broken Selector failure:

- "Verify the 'Submit Order' button still exists on the checkout page by manually testing the application"

- "Update the element locator to use a more stable identifier like data-testid attribute instead of the current ID selector"

- "Check if recent application deployments changed the checkout page structure or button identifiers"

- "Add explicit wait conditions to ensure the page is fully loaded before locating the element"

These suggestions are specific to your failure context and provide concrete actions rather than generic troubleshooting advice.

What you'll see: Category badge, plain-English summary, and a numbered list of actionable suggestions.

### Take Action Based on AI Insights

Use the AI insights to drive your next steps:

Create a defect report: Copy the AI-generated summary and suggestions into a bug ticket in your defect tracking system (Jira, Azure DevOps, etc.). The plain-English explanation helps developers understand the issue without interpreting raw error logs.

Update test scripts: If AI identifies a Broken Selector or Timing Issue, update your test automation scripts based on the specific suggestions. For example, replace fragile element locators with more stable alternatives or add explicit wait conditions.

Share with team members: Forward the AI insights to relevant stakeholders via Slack, email, or team chat. The non-technical language makes these insights easily shareable with any audience.

Validate recommendations: Use AI suggestions as a starting point, but always validate with manual review. Apply your domain knowledge and application context to refine the AI's recommendations.

What success looks like: You understand the failure category and have clear next steps to investigate or resolve the issue—all accomplished in under 2 minutes instead of 45 minutes of manual log analysis.

### How accurate is AI categorization?

## Hands-On Exercise 2: Generate Your First AI Executive Briefing

Now let's generate a stakeholder-ready quality summary from your Project Dashboard.

### Scenario

It's Friday afternoon, and you need to prepare a quality update for Monday's sprint review meeting with product managers and stakeholders. Instead of spending 2 hours gathering metrics and writing narratives, you'll use AI to generate a structured summary in minutes.

### Workflow

#_r_ii_{margin:1.5rem auto 0;}#_r_ii_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_ii_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_ii_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_ii_ .error-icon{fill:#552222;}#_r_ii_ .error-text{fill:#552222;stroke:#552222;}#_r_ii_ .edge-thickness-normal{stroke-width:1px;}#_r_ii_ .edge-thickness-thick{stroke-width:3.5px;}#_r_ii_ .edge-pattern-solid{stroke-dasharray:0;}#_r_ii_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_ii_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_ii_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_ii_ .marker{fill:#333333;stroke:#333333;}#_r_ii_ .marker.cross{stroke:#333333;}#_r_ii_ svg{font-family:inherit;font-size:16px;}#_r_ii_ p{margin:0;}#_r_ii_ .label{font-family:inherit;color:#333;}#_r_ii_ .cluster-label text{fill:#333;}#_r_ii_ .cluster-label span{color:#333;}#_r_ii_ .cluster-label span p{background-color:transparent;}#_r_ii_ .label text,#_r_ii_ span{fill:#333;color:#333;}#_r_ii_ .node rect,#_r_ii_ .node circle,#_r_ii_ .node ellipse,#_r_ii_ .node polygon,#_r_ii_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_ii_ .rough-node .label text,#_r_ii_ .node .label text,#_r_ii_ .image-shape .label,#_r_ii_ .icon-shape .label{text-anchor:middle;}#_r_ii_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_ii_ .rough-node .label,#_r_ii_ .node .label,#_r_ii_ .image-shape .label,#_r_ii_ .icon-shape .label{text-align:center;}#_r_ii_ .node.clickable{cursor:pointer;}#_r_ii_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_ii_ .arrowheadPath{fill:#333333;}#_r_ii_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_ii_ .flowchart-link{stroke:#333333;fill:none;}#_r_ii_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_ii_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_ii_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_ii_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_ii_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_ii_ .cluster text{fill:#333;}#_r_ii_ .cluster span{color:#333;}#_r_ii_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_ii_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_ii_ rect.text{fill:none;stroke-width:0;}#_r_ii_ .icon-shape,#_r_ii_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_ii_ .icon-shape p,#_r_ii_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_ii_ .icon-shape rect,#_r_ii_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_ii_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_ii_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_ii_ :root{--mermaid-font-family:inherit;}
Project Dashboardwith metrics

Click Generate Briefing

AI analyzes 3-5 key metrics5-10 seconds

AI generates 3-part summary

Key Achievementspositive trends

Risks & Blockersconcerns

Next Stepsrecommended actions

Copy to Clipboard

Paste in email/Slack/presentation

Add minor customizationnames, timeline, tone

### Navigate to Project Dashboard

- Navigate to Dashboards → Project Dashboard in the main menu

- Select your project from the project dropdown (if not already selected)

- Ensure the dashboard shows recent test data—last 7 days is recommended for meaningful trend analysis

The Project Dashboard displays key metrics including overall pass rate, test execution volume, critical defects, and stability indicators. These metrics feed into the AI briefing generation.

What you'll see: Project Dashboard with widgets showing pass rates, trends, defects, and execution metrics.

### Generate AI Briefing

Click the "Generate Briefing" button in the dashboard toolbar.

The AI analyzes 3-5 key metrics from your Project Dashboard:

- Overall pass rate and change vs. last period

- Critical defects discovered and resolution status

- Test execution volume and trends

- Flaky test indicators and stability issues

- Coverage gaps (if requirement data available)

Analysis takes 5-10 seconds. A modal appears with the AI-generated briefing.

What you'll see: Loading indicator followed by a modal displaying the 3-part summary.

### Review 3-Part Briefing Structure

The AI-generated briefing follows a consistent 3-part structure designed for executive communication:

1. Key Achievements (What Improved)
Positive trends and accomplishments from the current period. Example:

- "Pass rate improved from 78% to 85% this week, indicating better test stability"

- "Test execution volume increased 20% with successful CI/CD integration"

- "Critical defects decreased from 12 to 7, showing effective resolution efforts"

2. Risks & Blockers (What Needs Attention)
Concerns requiring stakeholder awareness and possible action. Example:

- "Checkout module shows 15% pass rate decline, suggesting new defects introduced"

- "3 critical defects remain unresolved for 10+ days, blocking release readiness"

- "Flaky test count increased to 22 tests, impacting confidence in regression results"

3. Next Steps (Recommended Actions)
Concrete actions to maintain momentum or address concerns. Example:

- "Prioritize checkout module investigation for first half of next sprint"

- "Schedule defect triage meeting with development team by Tuesday"

- "Implement flaky test stabilization plan targeting 10 tests this week"

### What metrics does AI Executive Briefing analyze?

What you'll see: Three distinct sections with bulleted insights under each heading.

### Copy and Customize Briefing

- Click "Copy to Clipboard" at the bottom of the briefing modal

- Paste the briefing into your email, Slack message, or presentation

- Add minor customization:

Team member names: "John is investigating the checkout module issues"
Timeline specifics: "Target resolution by end of Sprint 23"
Tone adjustments: Match your organization's communication style (formal vs. casual)

The AI briefing is designed to be "80% ready"—the structure, data points, and narrative flow are complete. You add the final 20% of organizational context that only humans can provide.

What success looks like: You have a stakeholder-ready quality summary in 5 minutes that would have taken 2 hours to prepare manually.

### Can I customize AI output?

## Understanding AI Output Quality and Limitations

### The "80% Ready" Quality Bar

AI Features are designed to be immediately usable with minor customization:

For AI Failure Analysis:

- Category and suggestions are directional—validate with manual investigation for critical issues

- Common failure patterns have 85%+ accuracy

- Less common patterns have lower accuracy due to limited training data

- Always validate recommendations for production issues or compliance-sensitive failures

For AI Executive Briefing:

- Structure and data points are accurate—add organizational context (team names, timeline specifics)

- Narrative insights synthesize dashboard metrics correctly

- Tone is professional but generic—adjust for your audience (executives, product managers, team members)

AI handles the hard part of synthesizing data; you handle the customization by applying context.

### When to Use AI vs. Manual Analysis

Use AI as your first step for:

- ✅ Every test failure investigation (even if you think you know the cause)

- ✅ Unfamiliar error messages or new failure patterns

- ✅ Training new team members on troubleshooting approaches

- ✅ Triaging multiple failures to prioritize investigation

- ✅ Creating defect reports with clear explanations

- ✅ Weekly stakeholder updates and sprint reviews

Use manual investigation for:

- Complex application-specific logic failures requiring domain expertise

- Critical production issues where thorough validation is essential

- Security or compliance-sensitive failures requiring detailed analysis

- Failures in custom frameworks with limited AI training data

Best approach: Combine AI speed with human context. Use AI to quickly identify probable causes, then apply manual expertise to validate and refine solutions.

### What AI features are NOT available yet?

### Combining AI Insights with Manual Expertise

The most effective approach combines AI speed with human context:

AI provides breadth, humans provide depth: Use AI to quickly scan for common patterns and probable causes. Apply human expertise to deeply understand complex failures requiring domain knowledge.

AI suggests possibilities, humans make decisions: Treat AI categorization and suggestions as input to your decision-making process, not automatic answers. Evaluate suggestions against your project goals, quality standards, and risk tolerance.

AI accelerates learning, humans build expertise: New team members use AI explanations to learn troubleshooting patterns faster, while also developing their own debugging skills by validating AI insights against manual investigation.

AI scales triage, humans prioritize impact: Let AI quickly categorize and suggest fixes for large numbers of failures. Use human judgment to prioritize which failures to address first based on business impact and release criticality.

## Next Steps for Deeper AI Usage

Congratulations! You've completed your first AI-powered analysis workflows. Here's how to build on this foundation:

[### Master AI Failure Analysis
Comprehensive guide to AI Test Failure Analysis: Explore advanced usage patterns, understand accuracy factors, learn validation strategies, and integrate AI into complete failure investigation workflows.Best for: QA Engineers and Testers who regularly investigate test failures](/docs/ai-features/analyze-test-results-with-ai)[### Master AI Executive Briefing
Comprehensive guide to AI Executive Briefing: Discover customization techniques, learn when to use AI briefings vs. custom reports, and integrate AI summaries into stakeholder communication workflows.Best for: QA Managers and Leaders who prepare stakeholder reports](/docs/ai-features/generate-executive-briefings)

Explore the AI Features section:

- [AI-Powered Features Overview](/docs/ai-features/ai-powered-features-overview) - Understand the strategic value of AI automation and ROI for your organization

- [Understanding Project Dashboard](/docs/dashboards/project-dashboard) - Master the dashboard metrics that power AI Executive Briefing

Continue your learning journey:

- Return to [Getting Started](/docs/getting-started/introduction) for the complete learning path

- Explore [Test Failures](/docs/test-failures/test-failures-overview) for comprehensive failure investigation strategies

- Discover [Dashboards & Monitoring](/docs/dashboards/introduction) for real-time quality visibility

## Summary: What You've Learned

You now understand:

✅ Two AI capabilities - AI Test Failure Analysis for investigation, AI Executive Briefing for reporting
✅ When to use which - Failure investigation vs. stakeholder communication
✅ How to interpret AI output - Categories, plain-English summaries, actionable suggestions, 3-part briefings
✅ AI as augmentation - Speed of AI + context of human expertise
✅ Phase 1 scope - What's available now vs. coming in future phases
✅ Next steps - Detailed how-to guides for advanced usage

Key takeaway: AI Features automate cognitive bottlenecks (parsing logs, gathering metrics, structuring summaries) so you can focus on strategic work (validating insights, making decisions, improving quality processes). Start using AI as your first step in test failure investigation and executive reporting workflows—you'll save hours every week while maintaining the human judgment that ensures quality decisions.
[AI-Powered Features: Overview and Getting StartedAutomate test failure triage and executive reporting with AI features that reduce debugging time by 60% and cut stakeholder report preparation from 2 hours to minutes.](/docs/ai-features/ai-powered-features-overview)[How to Use AI-Powered Test Failure AnalysisAutomatically categorize test failures and get plain-English explanations with AI-powered analysis—reduce Mean Time to Identify root causes by 60% and make failures accessible to non-technical testers.](/docs/ai-features/analyze-test-results-with-ai)

AI-Powered Features
# How to Generate AI Executive Briefings

Automatically generate executive summaries from dashboard metrics in under 5 minutes using AI-powered briefing generation.

# How to Generate AI Executive Briefings

Time required: 5 minutes
Prerequisites: TestOps account with Project Dashboard access
Related guides: [Understanding Project Dashboard](/docs/dashboards/project-dashboard), [Stakeholder Communication](/docs/customization/stakeholder-communication)

## Overview

Test leaders and QA managers often spend hours manually gathering quality metrics and translating them into business-friendly narratives for stakeholder meetings. The AI Executive Briefing feature automates this process by analyzing your Project Dashboard metrics and generating a structured, presentation-ready summary in seconds.

The generated briefing provides three key sections—Key Achievements, Risks & Blockers, and Next Steps—designed to be 80% ready for immediate use with minimal editing required.

When to use:

- Weekly stakeholder updates and sprint reviews

- Executive quality reports and client communications

- Monthly or quarterly QA summaries

## Understanding the Three-Part Structure

Before generating your first briefing, understand how the AI structures executive communication:

#_r_jk_{margin:1.5rem auto 0;}#_r_jk_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_jk_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_jk_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_jk_ .error-icon{fill:#552222;}#_r_jk_ .error-text{fill:#552222;stroke:#552222;}#_r_jk_ .edge-thickness-normal{stroke-width:1px;}#_r_jk_ .edge-thickness-thick{stroke-width:3.5px;}#_r_jk_ .edge-pattern-solid{stroke-dasharray:0;}#_r_jk_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_jk_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_jk_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_jk_ .marker{fill:#333333;stroke:#333333;}#_r_jk_ .marker.cross{stroke:#333333;}#_r_jk_ svg{font-family:inherit;font-size:16px;}#_r_jk_ p{margin:0;}#_r_jk_ .label{font-family:inherit;color:#333;}#_r_jk_ .cluster-label text{fill:#333;}#_r_jk_ .cluster-label span{color:#333;}#_r_jk_ .cluster-label span p{background-color:transparent;}#_r_jk_ .label text,#_r_jk_ span{fill:#333;color:#333;}#_r_jk_ .node rect,#_r_jk_ .node circle,#_r_jk_ .node ellipse,#_r_jk_ .node polygon,#_r_jk_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_jk_ .rough-node .label text,#_r_jk_ .node .label text,#_r_jk_ .image-shape .label,#_r_jk_ .icon-shape .label{text-anchor:middle;}#_r_jk_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_jk_ .rough-node .label,#_r_jk_ .node .label,#_r_jk_ .image-shape .label,#_r_jk_ .icon-shape .label{text-align:center;}#_r_jk_ .node.clickable{cursor:pointer;}#_r_jk_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_jk_ .arrowheadPath{fill:#333333;}#_r_jk_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_jk_ .flowchart-link{stroke:#333333;fill:none;}#_r_jk_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_jk_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_jk_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_jk_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_jk_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_jk_ .cluster text{fill:#333;}#_r_jk_ .cluster span{color:#333;}#_r_jk_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_jk_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_jk_ rect.text{fill:none;stroke-width:0;}#_r_jk_ .icon-shape,#_r_jk_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_jk_ .icon-shape p,#_r_jk_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_jk_ .icon-shape rect,#_r_jk_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_jk_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_jk_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_jk_ :root{--mermaid-font-family:inherit;}
Dashboard Metrics

AI Analysis

Key Achievements

Risks & Blockers

Next Steps

Executive Briefing

Key Achievements - Highlights positive trends:

- Pass rate increases, successfully resolved issues, improved stability

Risks & Blockers - Surfaces concerns requiring attention:

- New critical defects, declining trends, flaky test issues

Next Steps - Recommends actionable priorities:

- Critical defects to address, investigations needed, focus areas

This structure enables stakeholders to quickly understand quality status and make data-driven decisions.

## Generate and Share an AI Briefing

### Navigate to Project Dashboard

Open TestOps and navigate to the Project Dashboard for the project you want to report on. Ensure the dashboard shows recent test data—the AI analyzes metrics currently visible.

### Click Generate Briefing

Click the Generate Briefing button. The AI immediately analyzes 3-5 key metrics:

- Overall pass rate and change versus last period

- Critical defects discovered

- Test execution volume

- Flaky test indicators

The AI generates a structured narrative in approximately 5-10 seconds. A modal window appears containing the briefing.

### Review and Copy to Clipboard

Review each section to verify accuracy. The generated text is designed to be 80% ready—you'll need to add organization-specific context.

Click the Copy to Clipboard button to copy the entire briefing text, preserving section headings and formatting.

The copied text is plain text format, compatible with:

- Email clients (Outlook, Gmail)

- Presentation software (PowerPoint, Google Slides)

- Document editors (Word, Google Docs)

- Collaboration tools (Slack, Microsoft Teams)

### Paste and Customize

Paste the copied briefing into your target destination. Make minor adjustments to tailor content:

- Add names and timeline details (which team members, specific dates)

- Adjust tone for your audience (executives, clients, engineering teams)

- Include additional context (known initiatives, external factors)

- Insert visual charts from dashboard to support the narrative

Example of pasted briefing:
**Key Achievements:** This week, the team increased the overall pass rate
by 3% to 85%, indicating improved stability in the payment processing module.

**Risks & Blockers:** Two new critical defects were discovered in the payments
module. Additionally, 5% of tests are flaky, which may impact reliability.

**Next Steps:** The team will prioritize fixing the two critical payment defects
before the next release. The QA lead will investigate flaky authentication tests.
The briefing serves as a strong foundation, allowing you to focus on customization rather than starting from scratch.

## Best Practices

Generate briefings at strategic points:

- After sprint completion, before stakeholder meetings

- Weekly on a consistent schedule (e.g., every Friday)

- After major test runs (regression suites, release candidates)

Always review before sending:

- Verify AI correctly interpreted metric changes

- Confirm defect counts match current state

- Ensure next steps align with team's actual plans

Combine with visual data:

- Include dashboard screenshots showing pass rate trends

- Add defect tracking charts to visualize issue resolution

- Use release readiness indicators to support decisions

## Current Limitations

Phase 1 scope constraints:

- Text-only output - No PDF/DOCX export (copy to clipboard only)

- Project Dashboard only - Not available on other dashboard types

- Predefined metrics - Analyzes 3-5 hard-coded metrics (not user-customizable)

These limitations reflect the validated spike scope. Future phases may expand capabilities based on user feedback.

## Troubleshooting

### Briefing doesn't reflect recent test results

### Generated briefing is too generic

### Briefing mentions metrics not visible on dashboard

### Cannot customize which metrics are included

### Cannot generate briefings from other dashboards

## Related AI Features

Complement executive reporting with:

- [AI Test Failure Analysis](/docs/ai-features/ai-failure-analysis) - Use AI to investigate individual test failures during the week, then summarize progress in Executive Briefings

- [AI-Powered Features Overview](/docs/ai-features) - Explore all AI capabilities for Reports & Analytics

## See Also

- [Understanding Project Dashboard](/docs/dashboards/project-dashboard) - Learn about metrics analyzed by the briefing generator

- [Stakeholder Communication & Reporting](/docs/customization/stakeholder-communication) - Universal reporting best practices

- [Customizing Dashboard Widgets](/docs/dashboards/customizing-widgets) - Configure dashboard to highlight key metrics

- [Release Readiness Reports](/docs/reports/release-readiness) - Complement briefings with detailed release quality reports

[How to Use AI-Powered Test Failure AnalysisAutomatically categorize test failures and get plain-English explanations with AI-powered analysis—reduce Mean Time to Identify root causes by 60% and make failures accessible to non-technical testers.](/docs/ai-features/analyze-test-results-with-ai)

AI-Powered Features
# How to Use AI-Powered Test Failure Analysis

Automatically categorize test failures and get plain-English explanations with AI-powered analysis—reduce Mean Time to Identify root causes by 60% and make failures accessible to non-technical testers.

# How to Use AI-Powered Test Failure Analysis

Time required: 12 minutes
Prerequisites: TestOps account with test result data, "Analyze with AI" button visible on Test Result Detail page

Related guides: [Investigating Test Failures](/docs/investigating-failures/investigating-test-failures), [Using Test Result Details](/docs/investigating-failures/using-test-result-details)

## Overview

AI-Powered Test Failure Analysis automatically categorizes test failures and provides plain-English explanations of what went wrong, along with specific troubleshooting suggestions. Instead of manually parsing stack traces and error logs, you can click a single button to get immediate, actionable insights.

Traditional test failure investigation requires manual log analysis, stack trace interpretation, and technical expertise. Manual testers often spend 40% of debugging time just understanding what went wrong before they can even begin troubleshooting. Katalon's AI-powered approach auto-categorizes failures into common issue types (environment problems, timing issues, broken selectors, etc.), provides plain-English summaries that non-technical testers can understand, and suggests specific next steps—reducing Mean Time to Identify (MTTI) root causes by 60%.

This feature is designed for manual testers who need to understand test failures without deep technical knowledge, and for automation engineers who need to triage large numbers of failures quickly. Use AI analysis as your first step in every test failure investigation, especially when encountering unfamiliar error messages or onboarding new team members who need contextual help understanding failures.

The AI analyzes error logs, stack traces, screenshots, and test execution data to determine the most likely failure category and generate human-readable explanations. This transforms cryptic technical errors into clear, actionable information that anyone on your testing team can understand and act upon.

## Prerequisites

Before using AI-Powered Test Failure Analysis, ensure you have:

- TestOps account access with permission to view test results (Project Member role or higher)

- At least one failed test result in your project to analyze

- "Analyze with AI" button visibility on the Test Result Detail page (if the button doesn't appear, check your permissions or contact your organization admin to verify the feature is enabled for your account)

## Analyzing a Single Test Failure

### Step 1: Navigate to Test Result Details

From your test execution data, you can access individual test result details through two primary paths:

From Test Run Details page:

- Open any test run that contains failed tests

- Scroll to the Test Results table

- Click on any row with "Failed" status to open the Test Result Detail page

From Test Results List:

- Navigate to Reports → Test Results in the main menu

- Apply filters to show failed results (Status = Failed)

- Click on any failed test result row

Once on the Test Result Detail page, you'll see comprehensive failure information including error messages, stack traces, screenshots, and execution logs. Locate the "Analyze with AI" button in the page header or action toolbar area (typically in the top-right section near other action buttons like "Create Defect" or "Re-run Test").

### Step 2: Trigger AI Analysis

Click the "Analyze with AI" button to start the automated failure analysis process.

The button may display a loading indicator while the AI processes your test failure data. Analysis typically takes 5-10 seconds, during which the AI:

- Extracts error messages from test logs

- Analyzes stack trace patterns

- Reviews execution screenshots (if available)

- Examines test configuration and environment data

- Compares against known failure patterns

- Generates categorization and plain-English summary

You can continue viewing the test result details while the analysis runs. The AI output will appear in a dedicated section on the page once processing completes.

### Step 3: Review AI Analysis Output

The AI analysis provides three key pieces of information to help you understand and resolve the test failure:

#### Failure Category

The AI automatically assigns your test failure to one of several common categories based on root cause patterns:

Environment Issue - Problems with test environment setup, missing dependencies, or configuration errors. Examples include missing environment variables, incorrect database connections, unavailable test data files, or misconfigured application settings.

Timing Issue - Race conditions, synchronization problems, or elements not ready when the test expects them. This includes test scripts running faster than the application can respond, asynchronous operations not completing, or intermittent timing-dependent failures.

Broken Selector - UI element locators that no longer match the application's current structure. Common when page layouts change, element IDs are updated, dynamic content uses different identifiers, or the wrong locator strategy is used for dynamic elements.

Assertion Error - Expected test outcomes don't match actual results. This includes incorrect expected values in test assertions, application logic producing different output than anticipated, or data validation failures where actual values differ from test expectations.

Network Issue - API connectivity problems, timeouts, or external service failures. Examples include API endpoints returning errors, network latency causing timeouts, third-party services being unavailable, or authentication token expiration.

Permission Issue - Access control or authentication problems preventing test execution. This covers insufficient user permissions, expired authentication tokens, incorrect credentials in test configuration, or role-based access restrictions blocking test actions.

Data Issue - Problems with test data validity, availability, or format. Common scenarios include missing required test data, database constraints violated by test data, invalid data formats, or data dependencies not met before test execution.

The category appears as a labeled badge or tag at the top of the AI analysis section, giving you an immediate high-level understanding of the failure type.

#### Plain-English Summary

Below the category, you'll see a 2-3 sentence explanation of what went wrong, written in non-technical language that manual testers can easily understand.

Example summary for a Broken Selector failure:
"The test failed because the 'Submit Order' button could not be found on the checkout page. This typically happens when the page layout changes or when the element takes longer to load than expected. The test was looking for a button with ID 'submit-btn', but no element with that identifier exists on the current page."

Example summary for a Timing Issue:
"The test attempted to click the 'Next' button before the page finished loading, causing a 'element not interactable' error. The application's checkout process includes an animation that temporarily disables the button while cart totals are calculated. The test script needs to wait for this calculation to complete before attempting to interact with the button."

The plain-English summary translates technical error details into clear cause-and-effect explanations. This makes failure investigation accessible to team members who may not have deep technical expertise in reading stack traces or interpreting error codes.

#### Actionable Suggestions

The AI provides 2-4 specific next steps you can take to resolve the failure, listed in priority order with the most likely solutions first:

Example suggestions for Broken Selector failure:

- "Verify the 'Submit Order' button still exists on the checkout page by manually testing the application"

- "Update the element locator to use a more stable identifier like data-testid attribute instead of the current ID selector"

- "Check if recent application deployments changed the checkout page structure or button identifiers"

- "Add explicit wait conditions to ensure the page is fully loaded before locating the element"

Example suggestions for Network Issue:

- "Check if the payment gateway API endpoint is currently available and responding"

- "Increase the API timeout threshold from 5 seconds to 15 seconds in test configuration"

- "Verify authentication tokens are being refreshed correctly before API calls"

- "Review application logs to determine if the API failure is caused by invalid request data"

These suggestions are specific to your failure context and provide concrete actions rather than generic troubleshooting advice. They're designed to accelerate your investigation by pointing you toward the most probable solutions based on the AI's analysis of similar failure patterns.

### Step 4: Take Action Based on AI Insights

Once you've reviewed the AI analysis, use the insights to drive your next steps:

Create a defect report: Copy the AI-generated summary and suggestions directly into a bug ticket in Jira, Azure DevOps, or your defect tracking system. The plain-English explanation helps developers understand the issue without needing to interpret raw error logs. Use TestOps' Create Defect integration to automatically populate defect fields with the AI analysis.

Update test scripts: If the AI identifies a Broken Selector or Timing Issue, update your test automation scripts based on the specific suggestions provided. For example, replace fragile element locators with more stable alternatives, add explicit wait conditions, or adjust timeout values.

Share with team members: Forward the AI insights to relevant stakeholders via Slack, email, or team chat. Manual testers can share findings with developers, QA managers can use summaries in status reports, and automation engineers can coordinate fixes across the team. The non-technical language makes these insights easily shareable with any audience.

Document patterns: If you notice the AI repeatedly categorizing failures the same way (e.g., multiple Timing Issues in a specific test suite), document these patterns and address systemic issues in your test framework or application architecture.

Validate and refine: Use the AI suggestions as a starting point for investigation, but always validate with manual review. Apply your domain knowledge and application context to refine the AI's recommendations into the most appropriate solution for your specific situation.

## Understanding AI Output

### How are failure categories determined?

### What makes the plain-English summary different from raw error messages?

### How should I prioritize the actionable suggestions?

### Can I trust AI categorization for critical production issues?

## Best Practices

### When to Use AI Analysis

Use AI analysis as your first step for:

- ✅ Every test failure investigation: Make clicking "Analyze with AI" a standard first step in your workflow. Even if you think you know the cause, AI may surface additional context or alternative explanations.

- ✅ Unfamiliar error messages: When encountering error types you haven't seen before, AI analysis provides immediate context and relevant troubleshooting approaches without needing to research error codes or search documentation.

- ✅ Training new team members: AI-generated summaries help junior testers understand failure causes and learn troubleshooting patterns without requiring senior engineer assistance for every failure.

- ✅ Triaging multiple failures: When a test run produces many failures, use AI to quickly categorize and prioritize which failures to investigate first based on failure type and suggested fix complexity.

- ✅ Creating defect reports: AI summaries provide clear, non-technical descriptions perfect for bug tickets that developers can understand without accessing full test logs.

### When Manual Investigation May Be Better

While AI analysis is powerful, some situations benefit from manual-first investigation:

Complex application-specific logic failures: When failures involve intricate business rules or domain-specific logic that the AI may not fully understand, manual investigation by someone familiar with the application domain may be more efficient.

Known flakiness requiring deeper context: For tests with known intermittent failure patterns tied to specific environmental conditions or test data states, your historical knowledge may provide faster resolution than AI analysis.

Failures in custom frameworks: If your tests use heavily customized or proprietary frameworks that the AI has limited training data for, manual expertise with your specific framework may yield better insights.

Security or compliance-sensitive failures: When failures involve sensitive data or compliance-critical functionality, conduct thorough manual investigation to ensure complete understanding before relying on AI recommendations.

In these scenarios, you can still use AI analysis to supplement manual investigation, but lead with human expertise and use AI insights to validate your conclusions or discover angles you might have missed.

### Validating AI Recommendations

Always validate AI suggestions before implementing fixes:

Cross-check with actual error logs: Compare the AI summary against the raw error messages and stack traces to ensure the interpretation accurately reflects the technical details. Look for any nuances the AI summary might have simplified or overlooked.

Verify category matches observations: If you have familiarity with the test or application area, confirm the AI-assigned category aligns with your own observations. If the category seems incorrect, investigate why there's a mismatch—either the AI lacks context or there's a deeper issue than initially apparent.

Test suggested fixes in isolation: Before applying suggested fixes to your test suite, test them in a development environment to confirm they resolve the failure without introducing new issues.

Consider application context: Apply your knowledge of recent application changes, known issues, or environmental factors that the AI may not have visibility into. If the AI suggests an element locator changed but you know the application hasn't been updated recently, dig deeper for alternative causes.

Review fix impact: Evaluate whether suggested fixes might affect other tests or application functionality. For example, increasing timeout values might mask underlying performance issues rather than addressing root causes.

### Combining AI Insights with Manual Expertise

The most effective failure investigation combines AI speed with human context:

AI provides breadth, humans provide depth: Use AI to quickly scan for common patterns and probable causes across many failures. Apply human expertise to deeply understand complex failures that require domain knowledge.

AI suggests possibilities, humans make decisions: Treat AI categorization and suggestions as input to your decision-making process, not automatic answers. Evaluate suggestions against your project goals, quality standards, and risk tolerance.

AI accelerates learning, humans build expertise: New team members can use AI explanations to learn troubleshooting patterns faster, but should also develop their own debugging skills by validating AI insights against manual investigation.

AI scales triage, humans prioritize impact: Let AI quickly categorize and suggest fixes for large numbers of failures. Use human judgment to prioritize which failures to address first based on business impact, user experience effects, and release criticality.

Iterative refinement: Start with AI suggestions, apply manual expertise to refine them, then use updated approaches to improve future AI recommendations through feedback mechanisms.

## Troubleshooting

### AI button not appearing on Test Result Detail page

### Analysis takes too long or times out

### AI output doesn't match my observations

### How accurate is the AI categorization?

### Can I customize AI analysis for my organization?

## Related AI Features

Complement test failure analysis with:

- [AI Executive Briefing](/docs/ai-features/ai-executive-briefing) - After investigating failures during the week, use AI Executive Briefing to report on resolution progress in stakeholder meetings

- [AI-Powered Features Overview](/docs/ai-features) - Explore all AI capabilities for Reports & Analytics

## See Also

- [Investigating Test Failures Tutorial](/docs/investigating-failures/investigating-test-failures) - Complete failure investigation workflow with manual and AI-assisted approaches

- [Using Test Result Details](/docs/investigating-failures/using-test-result-details) - Navigate logs, screenshots, videos, and execution data

- [Failure Investigation Best Practices](/docs/investigating-failures/failure-investigation-best-practices) - Efficient debugging strategies for manual and automated tests

- [AI Executive Briefing](/docs/ai-features/ai-executive-briefing) - Auto-generate stakeholder summaries from test results

- [Creating and Managing Defects](/docs/defects/creating-defects) - Link AI failure insights to bug tracking systems

[Get Started with AI AnalysisLearn how to use AI features to analyze test failures 60% faster and generate executive reports in minutes instead of hours—hands-on tutorial for first-time AI users.](/docs/ai-features/get-started-with-ai-analysis)[How to Generate AI Executive BriefingsAutomatically generate executive summaries from dashboard metrics in under 5 minutes using AI-powered briefing generation.](/docs/ai-features/generate-executive-briefings)


Configuration & Sharing
# Configuration & Sharing Overview

Learn how to share TestOps dashboards and reports with external stakeholders, export data for analysis, and configure access control for collaboration without license barriers.

# Configuration & Sharing: Overview and Getting Started

Reading time: 10 minutes

When test results matter to people outside your QA team—clients waiting on project updates, executives asking for quality metrics, auditors requesting compliance evidence—you need ways to share insights without creating full TestOps accounts for every stakeholder. Configuration & Sharing provides the tools to share live dashboards, export data in appropriate formats, and control who sees what and for how long.

## What This Section Covers

This section provides capabilities to:

- Share dashboards and reports with external stakeholders using secure, time-limited access links (no TestOps licenses required)

- Export report data as CSV for analysis in Excel, BI tools, or custom presentations

- Export individual test run results in Excel, HTML, or PDF formats for documentation and compliance records

- Configure access control and expiration periods for external shares (7/14/30 days options)

- Maintain security with read-only access, unique recipient links, and revocation capabilities

## What You'll Achieve

By completing this section, you will:

- Understand the difference between external sharing (live access) and exporting (static files)

- Choose the right capability for your use case (stakeholder visibility vs. data analysis vs. documentation)

- Share dashboards and reports with external recipients who don't have TestOps accounts

- Export data in formats appropriate for different scenarios (CSV for analysis, PDF for documentation)

- Configure expiration periods and access control for secure external collaboration

- Navigate to appropriate how-to guides for detailed workflows

## When to Use Configuration & Sharing Capabilities

Different stakeholder needs require different approaches. Use this decision tree to identify which capability fits your scenario:

#_r_gv_{margin:1.5rem auto 0;}#_r_gv_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_gv_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_gv_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_gv_ .error-icon{fill:#552222;}#_r_gv_ .error-text{fill:#552222;stroke:#552222;}#_r_gv_ .edge-thickness-normal{stroke-width:1px;}#_r_gv_ .edge-thickness-thick{stroke-width:3.5px;}#_r_gv_ .edge-pattern-solid{stroke-dasharray:0;}#_r_gv_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_gv_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_gv_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_gv_ .marker{fill:#333333;stroke:#333333;}#_r_gv_ .marker.cross{stroke:#333333;}#_r_gv_ svg{font-family:inherit;font-size:16px;}#_r_gv_ p{margin:0;}#_r_gv_ .label{font-family:inherit;color:#333;}#_r_gv_ .cluster-label text{fill:#333;}#_r_gv_ .cluster-label span{color:#333;}#_r_gv_ .cluster-label span p{background-color:transparent;}#_r_gv_ .label text,#_r_gv_ span{fill:#333;color:#333;}#_r_gv_ .node rect,#_r_gv_ .node circle,#_r_gv_ .node ellipse,#_r_gv_ .node polygon,#_r_gv_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_gv_ .rough-node .label text,#_r_gv_ .node .label text,#_r_gv_ .image-shape .label,#_r_gv_ .icon-shape .label{text-anchor:middle;}#_r_gv_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_gv_ .rough-node .label,#_r_gv_ .node .label,#_r_gv_ .image-shape .label,#_r_gv_ .icon-shape .label{text-align:center;}#_r_gv_ .node.clickable{cursor:pointer;}#_r_gv_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_gv_ .arrowheadPath{fill:#333333;}#_r_gv_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_gv_ .flowchart-link{stroke:#333333;fill:none;}#_r_gv_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_gv_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_gv_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_gv_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_gv_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_gv_ .cluster text{fill:#333;}#_r_gv_ .cluster span{color:#333;}#_r_gv_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_gv_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_gv_ rect.text{fill:none;stroke-width:0;}#_r_gv_ .icon-shape,#_r_gv_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_gv_ .icon-shape p,#_r_gv_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_gv_ .icon-shape rect,#_r_gv_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_gv_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_gv_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_gv_ :root{--mermaid-font-family:inherit;}
Yes

No

Analyze in Excel/BI tools

Document test execution

What do you need to do?

Need stakeholder to see live data?

External Sharing

What's the use case?

Share Dashboard or Report

Stakeholder views via secure link

Access expires automatically

CSV Export from Reports

Individual Run Export

Export report data as CSV

Open in Excel, Power BI, etc.

Export test run as Excel/HTML/PDF

Share for compliance/documentation

### Use Case Examples

QA Manager sharing with client:

"Our client needs to see Release Quality dashboard weekly without creating a TestOps account. I'll use external sharing to send them a secure access link that expires in 14 days."

Automation Engineer analyzing trends:

"I need to create a custom trend chart for monthly QA review. I'll export the Test Results Analysis report as CSV and open it in Excel to build my own visualizations."

Manual Tester documenting compliance:

"Audit requires test execution evidence for regulatory documentation. I'll export the test run as PDF to attach to our compliance records."

## Key Concepts

### External Sharing vs. Export

Understanding when to share and when to export prevents confusion:

AspectExternal SharingExportWhat they getOngoing access to live data via linkOne-time static file downloadData freshnessAlways current (real-time)Point-in-time snapshotDurationTime-limited (7/14/30 days)Permanent (file is theirs)Use caseStakeholders need visibility over timeYou need data for analysis or documentationRequires login?No (access link only)No (just download file)ExampleClient monitors dashboard weeklyExport CSV to analyze in Excel

Simple analogy: Sharing is like giving someone a window to look through (they see live data). Exporting is like handing them a snapshot (static file at point in time).

### Phase 1 Capabilities and Limitations

TestOps Configuration & Sharing focuses on core workflows in Phase 1. Here's what's available NOW:

✅ Currently Available (Phase 1):

- External Report & Dashboard Sharing (secure links, email delivery, expiration settings, read-only viewer)

- CSV export from reports

- Excel, HTML, PDF export from individual test runs

- Access control via expiration periods (7/14/30 days)

- Recipient email validation

- Manual revocation of access links

❌ Not Available Yet (Coming in Future Releases):

- Dashboard PDF/PNG export (use external sharing or export underlying report data as CSV instead)

- Scheduled exports (recurring automated exports)

- Password protection for shared links

- Download/export data from shared viewer

- Interactive filters in shared views

- IP restrictions for access links

- Advanced analytics on share usage

Phase 1 provides the essential workflows for stakeholder communication and data extraction. Additional capabilities will be added in future releases based on user feedback.

## How External Sharing Works

External sharing enables QA teams to provide time-limited dashboard or report access to stakeholders who don't have TestOps licenses. Here's the complete workflow:

External StakeholderEmail ServiceTestOpsQA ManagerExternal StakeholderEmail ServiceTestOpsQA Manager#_r_h1_{margin:1.5rem auto 0;}#_r_h1_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_h1_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_h1_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_h1_ .error-icon{fill:#552222;}#_r_h1_ .error-text{fill:#552222;stroke:#552222;}#_r_h1_ .edge-thickness-normal{stroke-width:1px;}#_r_h1_ .edge-thickness-thick{stroke-width:3.5px;}#_r_h1_ .edge-pattern-solid{stroke-dasharray:0;}#_r_h1_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_h1_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_h1_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_h1_ .marker{fill:#333333;stroke:#333333;}#_r_h1_ .marker.cross{stroke:#333333;}#_r_h1_ svg{font-family:inherit;font-size:16px;}#_r_h1_ p{margin:0;}#_r_h1_ .actor{stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);fill:#ECECFF;}#_r_h1_ text.actor>tspan{fill:black;stroke:none;}#_r_h1_ .actor-line{stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);}#_r_h1_ .innerArc{stroke-width:1.5;stroke-dasharray:none;}#_r_h1_ .messageLine0{stroke-width:1.5;stroke-dasharray:none;stroke:#333;}#_r_h1_ .messageLine1{stroke-width:1.5;stroke-dasharray:2,2;stroke:#333;}#_r_h1_ #arrowhead path{fill:#333;stroke:#333;}#_r_h1_ .sequenceNumber{fill:white;}#_r_h1_ #sequencenumber{fill:#333;}#_r_h1_ #crosshead path{fill:#333;stroke:#333;}#_r_h1_ .messageText{fill:#333;stroke:none;}#_r_h1_ .labelBox{stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);fill:#ECECFF;}#_r_h1_ .labelText,#_r_h1_ .labelText>tspan{fill:black;stroke:none;}#_r_h1_ .loopText,#_r_h1_ .loopText>tspan{fill:black;stroke:none;}#_r_h1_ .loopLine{stroke-width:2px;stroke-dasharray:2,2;stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);fill:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);}#_r_h1_ .note{stroke:#aaaa33;fill:#fff5ad;}#_r_h1_ .noteText,#_r_h1_ .noteText>tspan{fill:black;stroke:none;}#_r_h1_ .activation0{fill:#f4f4f4;stroke:#666;}#_r_h1_ .activation1{fill:#f4f4f4;stroke:#666;}#_r_h1_ .activation2{fill:#f4f4f4;stroke:#666;}#_r_h1_ .actorPopupMenu{position:absolute;}#_r_h1_ .actorPopupMenuPanel{position:absolute;fill:#ECECFF;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);filter:drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));}#_r_h1_ .actor-man line{stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);fill:#ECECFF;}#_r_h1_ .actor-man circle,#_r_h1_ line{stroke:hsl(259.6261682243, 59.7765363128%, 87.9019607843%);fill:#ECECFF;stroke-width:2px;}#_r_h1_ :root{--mermaid-font-family:inherit;}Access expires automatically after selected periodClick Share on DashboardShow sharing dialogEnter recipient emails, expiration, messageGenerate unique access linksSend email with access linkClick access linkShow read-only dashboard (no login required)(Optional) Revoke access earlyAccess denied

### Security Mechanisms

External sharing balances accessibility with security:

- Unique, non-guessable URLs: Each recipient receives their own access link (not a shared URL that can be forwarded)

- Recipient email validation: Access tied to specific email addresses

- Time-limited access: Automatic expiration after 7/14/30 days (you choose)

- Read-only mode: External viewers cannot edit, configure, or access other TestOps features

- Revocation capability: You can immediately remove access before expiration if needed

Not available in Phase 1: Password protection, IP restrictions, two-factor authentication for external viewers.

## Section Contents Overview

This section includes one how-to guide with additional articles coming in Phase 2:

How-To Guides:

- [Share Reports and Dashboards with External Stakeholders](/docs/configuration-sharing/share-reports-with-stakeholders) - Step-by-step workflow for creating external shares, configuring expiration periods, and managing recipient access

Coming Soon (Phase 2):

- Export Reports and Dashboards - Comprehensive guide to CSV export from reports

- Export Formats Reference - Complete reference for all export format options

- Sharing Options Reference - Detailed documentation of external sharing configuration

## Common Questions

### What export formats are available?

### What can external recipients do with shared content?

### How long does external access last?

### Is external sharing secure?

### Can recipients forward access links to others?

## Recommended Learning Path

[### For QA Managers
Start: Share Reports and Dashboards with External Stakeholders - Learn how to provide clients and management with secure dashboard access without creating TestOps licenses. This is your primary workflow for stakeholder communication.Then: Export Reports and Dashboards (coming in Phase 2) - Understand how to extract report data as CSV when you need to analyze trends or create custom presentations for executives.Finally: Sharing Options Reference (coming in Phase 2) - Deep-dive into all external sharing configuration options and security settings for compliance-sensitive scenarios.](/docs/configuration-sharing/share-reports-with-stakeholders)[### For Manual Testers
Start: Share Reports and Dashboards with External Stakeholders - Learn the external sharing workflow basics, even if you primarily export test runs.Then: Export Formats Reference (coming in Phase 2) - Understand all available formats (Excel, HTML, PDF) for test run export and when to use each for compliance documentation.Finally: Explore workflows - See how other roles use Configuration & Sharing capabilities in role-based workflow documentation.](/docs/configuration-sharing/share-reports-with-stakeholders)[### For Automation Engineers
Start: Share Reports and Dashboards with External Stakeholders - Understand external sharing capabilities to collaborate with cross-functional teams.Then: Export Reports and Dashboards (coming in Phase 2) - Master CSV export from reports to analyze test execution trends in Excel, Power BI, or custom scripts.Finally: Explore API integration - Check if programmatic export via TestOps API fits your automation workflows (API documentation separate from this section).](/docs/configuration-sharing/share-reports-with-stakeholders)

## See Also

Related Sections:

- [Dashboards & Monitoring](/docs/dashboards/introduction) - Understand dashboard types before sharing them with stakeholders

- [Test Results Analysis](/docs/reports/introduction) - Learn about reports you can export as CSV for data analysis

- [Getting Started: Core Concepts](/docs/getting-started/core-concepts) - Review fundamental TestOps concepts and navigation patterns

Advanced Topics:

- [Stakeholder Reporting Workflows](/docs/workflows/stakeholder-reporting) - Role-based workflow showing how QA Managers use external sharing in real scenarios

- [AI Executive Briefing](/docs/ai-features/ai-executive-briefing) - Generate executive summaries from dashboard data to complement external sharing

Configuration & Automation:

- TestOps API Documentation (external link) - Programmatic export and sharing via API (for advanced automation scenarios)

## Where to Go Next

Common next steps after Configuration & Sharing:

- [Workflows: Role-Based Pathways](/docs/workflows/overview) - See how Configuration & Sharing fits into complete role-based workflows for QA Managers, Testers, and Engineers

- [Dashboards & Monitoring](/docs/dashboards/introduction) - If you're new to TestOps, learn about dashboard types and monitoring capabilities before sharing them with stakeholders

- [AI Features](/docs/ai-features/introduction) - Explore AI-powered insights (like AI Executive Briefing) that complement external sharing by automatically generating stakeholder-ready summaries

Need help deciding? Start with the recommended learning path for your role above, or explore [Workflow Guide: Role-Based Pathways](/docs/workflows/overview) for complete end-to-end workflows.
[Automation Progress TrackingTrack manual-to-automation migration progress, measure automation adoption rates, and assess automation ROI in Katalon TestOps.](/docs/test-case-reports/automation-progress/track-automation-progress)[How to Share Reports and Dashboards with External StakeholdersShare TestOps reports and dashboards with clients, managers, and auditors using secure, time-limited access links—no TestOps license required for recipients.](/docs/configuration-sharing/share-reports-with-stakeholders)

Configuration & Sharing
# Export Reports and Dashboards

Export report data as CSV for analysis in Excel or BI tools, and export individual test run results in Excel, HTML, or PDF formats for documentation and compliance records.

# Export Reports and Dashboards

Reading time: 8 minutes

When you need test data outside TestOps—analyzing trends in Excel, sharing execution evidence with auditors, or archiving results for compliance—exporting provides static snapshots of your data. This guide shows you how to export report data as CSV files and individual test run results in multiple formats.

## What You'll Export

TestOps Phase 1 provides two export capabilities:

- CSV export from report data tables - Extract filtered report data for analysis in Excel, Power BI, or custom presentations

- Individual test run export - Download complete test execution details in Excel, HTML, or PDF formats for documentation and compliance

Important Phase 1 limitations:

- Dashboard PDF/PNG export is NOT available (use [external sharing](/docs/configuration-sharing/share-reports-with-stakeholders) instead)

- Scheduled/automated exports are NOT available (manual export only)

- Report data tables support CSV only (no Excel or PDF)

## Prerequisites

Before exporting data:

- TestOps account with report access permissions (View access minimum)

- Report configured with data ready to export

- Understanding of [report types](/docs/getting-started/core-concepts) you want to export

## Choosing the Right Export Method

Use this decision tree to identify which export capability fits your scenario:

#_r_hg_{margin:1.5rem auto 0;}#_r_hg_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_hg_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_hg_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_hg_ .error-icon{fill:#552222;}#_r_hg_ .error-text{fill:#552222;stroke:#552222;}#_r_hg_ .edge-thickness-normal{stroke-width:1px;}#_r_hg_ .edge-thickness-thick{stroke-width:3.5px;}#_r_hg_ .edge-pattern-solid{stroke-dasharray:0;}#_r_hg_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_hg_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_hg_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_hg_ .marker{fill:#333333;stroke:#333333;}#_r_hg_ .marker.cross{stroke:#333333;}#_r_hg_ svg{font-family:inherit;font-size:16px;}#_r_hg_ p{margin:0;}#_r_hg_ .label{font-family:inherit;color:#333;}#_r_hg_ .cluster-label text{fill:#333;}#_r_hg_ .cluster-label span{color:#333;}#_r_hg_ .cluster-label span p{background-color:transparent;}#_r_hg_ .label text,#_r_hg_ span{fill:#333;color:#333;}#_r_hg_ .node rect,#_r_hg_ .node circle,#_r_hg_ .node ellipse,#_r_hg_ .node polygon,#_r_hg_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_hg_ .rough-node .label text,#_r_hg_ .node .label text,#_r_hg_ .image-shape .label,#_r_hg_ .icon-shape .label{text-anchor:middle;}#_r_hg_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_hg_ .rough-node .label,#_r_hg_ .node .label,#_r_hg_ .image-shape .label,#_r_hg_ .icon-shape .label{text-align:center;}#_r_hg_ .node.clickable{cursor:pointer;}#_r_hg_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_hg_ .arrowheadPath{fill:#333333;}#_r_hg_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_hg_ .flowchart-link{stroke:#333333;fill:none;}#_r_hg_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_hg_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_hg_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_hg_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_hg_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_hg_ .cluster text{fill:#333;}#_r_hg_ .cluster span{color:#333;}#_r_hg_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_hg_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_hg_ rect.text{fill:none;stroke-width:0;}#_r_hg_ .icon-shape,#_r_hg_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_hg_ .icon-shape p,#_r_hg_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_hg_ .icon-shape rect,#_r_hg_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_hg_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_hg_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_hg_ :root{--mermaid-font-family:inherit;}
Report data table

Individual test run

Dashboard

Share with stakeholders

Analyze data

Documentation

What do you need to export?

Content Type

CSV Export from Report

Test Run Export

Dashboard Export NOT Available

Click Export above data table

Select CSV format

Download file

Open in Excel/BI tool

Navigate to test run details

Choose format: Excel/HTML/PDF

Download file

Use for documentation/compliance

What's your goal?

Use External Sharing

Export underlying report as CSV

Screenshots or test run export

## Export Report Data as CSV

Export report data tables as CSV files for analysis in Excel, Power BI, Tableau, or custom tools. CSV exports respect your current filters and analysis scope settings.

### Workflow: Export CSV from Report

### Navigate to report with data

Open the report containing data you want to export (e.g., Test Results Analysis, Test Run Analysis).

### Apply filters and analysis scope

Set filters and analysis scope to narrow data to what you need. The export will include only filtered results.

### Locate Export button

Find the Export button above the data table, typically in the top-right corner of the report.

### Select CSV format

Click Export and select CSV as the format.

### Wait for file generation

Export processing may take 30-60 seconds for large datasets. A progress indicator shows generation status.

### Download CSV file

Once generation completes, the CSV file downloads to your local machine. Default filename format: [Report_Name]_[Project]_[Date].csv

### Open in analysis tool

Open the CSV file in Excel, Power BI, or your preferred analysis tool for custom analysis, pivot tables, or trend charts.

### Export Behavior and Limitations

What exports:

- Currently visible data based on applied filters

- All columns shown in the report data table

- Data encoded in UTF-8 with comma delimiters

Row limits by report type:

Report TypeRow LimitNotesTest Results Analysis10,000 rowsMost common for trend analysisTest Run Analysis5,000 rowsExecution-level detailTest Case Status Analysis10,000 rowsTest inventory trackingAutomation Progress10,000 rowsCoverage metricsCoverage Reports10,000 rowsRequirement traceability

If you exceed row limits: A warning message appears. Narrow your filters or analysis scope to reduce dataset size.

### Practical Example

Scenario: Export last 30 days of test results to analyze failure trends in Excel

- Open Test Results Analysis report

- Set analysis scope to Last 30 days

- Add filter: Status = Failed

- Click Export and select CSV

- Download Test_Results_Analysis_MyProject_2025-11-26.csv

- Open in Excel, create pivot table to analyze failure trends by test suite

## Export Individual Test Runs

Export complete test execution details from individual test runs in Excel, HTML, or PDF formats. Use these exports for compliance documentation, audit evidence, or sharing execution results without TestOps access.

### Workflow: Export Test Run Results

### Navigate to Test Runs section

From the main navigation, go to Executions and select Test Runs.

### Select specific test run

Find and click the test run you want to export. The test run details page opens.

### Locate Export button

On the test run details page, find the Export button in the toolbar.

### Choose export format

Click Export and select your desired format:

- Excel (.xlsx) - For data analysis and manipulation

- HTML - For web viewing and lightweight sharing

- PDF - For print-ready documentation and compliance

### Download file

The export generates and downloads immediately. Filename format: Test_Run_[ID]_[Date].[format]

### Use for documentation or compliance

Open the exported file to review test execution summary, test result details, pass/fail counts, and execution logs. Share with auditors or archive for compliance records.

### Test Run Export Content

What's included in test run exports:

- Test run summary (name, status, executor, timestamps)

- Complete test result details for all executed test cases

- Pass/fail/error counts and execution statistics

- Execution environment details (browser, OS, configuration)

- Attachments and screenshots (if captured during execution)

- Execution logs and error messages

### Format Selection Guide

Choose the right format for your use case:

FormatBest ForProsConsExcel (.xlsx)Data analysis, manipulationEditable, supports pivot tables and formulasLarge file sizeHTMLWeb sharing, quick viewingUniversal browser support, lightweightNot editable, limited formattingPDFDocumentation, compliance auditsPrint-ready, secure, professionalNot editable, larger than HTML

### Practical Example

Scenario: Export test run as PDF for FDA compliance audit

- Navigate to Executions > Test Runs

- Select test run: Regression_Suite_Build_245

- Click Export and choose PDF

- Download Test_Run_12345_2025-11-26.pdf

- Attach to compliance documentation as execution evidence

## Export Capabilities and Limitations

### What You Can Export (Phase 1)

Report data tables:

- CSV format from all reports with data tables

- Respects current filters and analysis scope

- Row limits: 5,000-10,000 depending on report type

Individual test runs:

- Excel, HTML, or PDF formats

- Complete execution details and logs

- No row limits (full test run content)

### What You Cannot Export (Phase 1)

Dashboard export:

- Dashboard PDF/PNG export is NOT available in Phase 1

- Workaround 1: Use [external sharing](/docs/configuration-sharing/share-reports-with-stakeholders) to provide stakeholders with live access

- Workaround 2: Export underlying report data as CSV and create custom presentations

- Workaround 3: Take screenshots manually (not recommended for frequent use)

Scheduled/automated exports:

- Recurring scheduled exports are NOT available

- Workaround: Perform manual exports at regular intervals

Excel/PDF from report data tables:

- Report data tables support CSV only (no Excel or PDF)

- Workaround: Export CSV and open in Excel, then save as Excel format or convert to PDF

## Common Questions

### Which reports support CSV export?

### What happens if I exceed export row limits?

### How do I choose between Excel, HTML, and PDF for test run export?

### Can I export dashboards as PDF or PNG?

### Why do exports respect current filters?

## Troubleshooting Export Issues

Export button not appearing:

- Cause: Insufficient permissions or report without data table

- Fix: Verify you have View permissions for the report. Check if report contains a data table (reports with only charts don't support CSV export).

Export fails or times out:

- Cause: Dataset too large (near or exceeding row limits)

- Fix: Narrow filters or analysis scope to reduce dataset size. Try exporting in smaller batches (e.g., by week or test suite).

CSV file won't open in Excel:

- Cause: UTF-8 encoding issue in older Excel versions

- Fix: In Excel, use "Data" > "From Text/CSV" and select UTF-8 encoding explicitly, rather than double-clicking the CSV file.

Missing data in export:

- Cause: Filters too restrictive or analysis scope too narrow

- Fix: Review applied filters and analysis scope before export. Clear filters to verify data exists in report. Check if specific columns are hidden in report view (hidden columns may not export).

Row limit exceeded warning:

- Cause: Filtered data exceeds report's export limit (5,000-10,000 rows depending on report)

- Fix: Narrow time range, add more specific filters, or export in batches. See "What happens if I exceed export row limits?" accordion above for detailed strategies.

## See Also

Related Configuration & Sharing:

- [Share Reports with Stakeholders](/docs/configuration-sharing/share-reports-with-stakeholders) - Alternative to exporting: provide live access via secure links (recommended for dashboard visibility)

- [Configuration & Sharing Overview](/docs/configuration-sharing/configuration-and-sharing-overview) - Understand when to share vs. export data

Related Reports:

- [Getting Started: All Reports and Dashboards](/docs/getting-started/all-reports-and-dashboards) - Learn about all reports you can export

- [Understanding Reports vs. Dashboards](/docs/getting-started/understanding-reports-vs-dashboards) - Why dashboards don't export like reports

Advanced Topics:

- [Stakeholder Reporting Workflows](/docs/release-readiness/stakeholder-reporting) - Role-based workflow showing how QA Managers use exports in real scenarios

[How to Share Reports and Dashboards with External StakeholdersShare TestOps reports and dashboards with clients, managers, and auditors using secure, time-limited access links—no TestOps license required for recipients.](/docs/configuration-sharing/share-reports-with-stakeholders)[AI-Powered Features: Overview and Getting StartedAutomate test failure triage and executive reporting with AI features that reduce debugging time by 60% and cut stakeholder report preparation from 2 hours to minutes.](/docs/ai-features/ai-powered-features-overview)

Configuration & Sharing
# How to Share Reports and Dashboards with External Stakeholders

Share TestOps reports and dashboards with clients, managers, and auditors using secure, time-limited access links—no TestOps license required for recipients.

# How to Share Reports and Dashboards with External Stakeholders

Time required: 15 minutes
Prerequisites:

- TestOps account with sharing permissions

- Report or dashboard configured and ready to share

- Recipient email addresses

Related guides:

- [Stakeholder Communication & Reporting](/docs/customization/stakeholder-communication)

- [Understanding Dashboard Types](/docs/dashboards/dashboard-types)

- [All Reports Reference](/docs/getting-started/all-reports-reference)

## Overview

Sharing testing insights with external stakeholders often creates friction: clients need to review progress, managers need quality metrics, and auditors require compliance evidence—but providing full TestOps licenses for view-only access is costly and unnecessary.

The External Report & Dashboard Sharing feature solves this problem by enabling you to generate secure, time-limited access links that recipients can use without creating TestOps accounts. Share Project Overview dashboards with clients, Release Quality insights with product teams, or compliance reports with auditors—all while maintaining control over who can access your data and for how long.

This guide covers:

- Creating secure sharing links for reports and dashboards

- Managing recipient access and expiration settings

- Understanding what external viewers can see

- Best practices for secure stakeholder sharing

## Supported Content Types

You can share the following reports and dashboards with external stakeholders:

- Project Overview Dashboard - Overall project health and testing progress

- Release Quality Dashboard - Release-specific quality metrics and readiness indicators

- Test Execution Reports - Detailed test run results and execution history

- Productivity Matrix - Team productivity metrics and performance trends

- Defect Activity Reports - Bug trends, defect density, and resolution rates

All other content types will display the standard sharing interface but may have limited external viewer support in Phase 1.

## Sharing a Report or Dashboard

Follow these steps to share testing insights with external stakeholders.

### Step 1: Navigate to Content You Want to Share

Open the report or dashboard you want to share with external stakeholders. Ensure the content displays correctly and contains the insights you want to communicate.

Best practice: Review the content first to verify it shows the correct time period, filters, and data scope before sharing.

### Step 2: Open the Sharing Dialog

Click the Share button located in the top-right corner of the report or dashboard header. This opens the sharing configuration dialog.

### Step 3: Add Recipient Email Addresses

In the sharing dialog, enter the email addresses of external stakeholders who need access to this content.

Adding multiple recipients:

- Enter email addresses separated by commas, or

- Press Enter after each email address to add it as a separate recipient

Recipient validation:
TestOps validates email format automatically. Invalid email addresses will be highlighted and must be corrected before sharing.

Best practice: Use business email addresses for recipients. Some email providers may flag access links as spam when sent to personal email accounts.

### Step 4: Select Expiration Period

Choose how long recipients should have access to the shared content. Available options:

- 7 days - Short-term access for immediate reviews or sprint demos

- 14 days - Standard access for typical stakeholder review cycles

- 30 days - Extended access for longer projects or audit periods

Access expiration behavior:

- Links expire automatically at the end of the selected period

- Recipients receive no advance warning before expiration

- Expired links display a message directing users to request renewed access

- You can revoke access before expiration if needed (see Managing Shared Links below)

Choosing the right expiration:

- Use 7 days for sensitive data or one-time reviews

- Use 14 days for standard client updates and stakeholder check-ins

- Use 30 days for ongoing projects, compliance audits, or external monitoring

- You can always reshare content with a new expiration if needed

### Step 5: Add Optional Message (Recommended)

Include a brief message to provide context for recipients:

Effective message examples:

- "Here's the testing progress for Sprint 15. Please review by Friday."

- "Attached is the Q2 quality report for the compliance audit."

- "Release 3.5 quality dashboard for your review before go-live decision."

Message best practices:

- Explain why you're sharing this content

- Highlight key insights or areas requiring attention

- Include any deadlines or action items

- Provide contact information for questions

Recipients see your message in the email notification before accessing the shared content.

### Step 6: Send the Share

Click the Share button to generate access links and send notifications to all recipients.

What happens next:

- TestOps generates a unique, secure access link for each recipient

- Automated email notifications are sent to all recipient addresses

- You see a confirmation message indicating successful sharing

- The share is recorded in your share history (accessible from share management)

Delivery timing:
Email notifications are typically delivered within 1-2 minutes. If recipients don't receive the email:

- Check spam/junk folders

- Verify email addresses are correct

- Ensure recipient email servers accept automated messages from TestOps domain

## What Recipients Receive and See

Understanding the external viewer experience helps you set accurate expectations with stakeholders.

### Email Notification

Recipients receive an automated email notification containing:

- Subject line: Indicates who shared content and what type (e.g., "Jane Smith shared a TestOps Report with you")

- Your optional message: Context you provided in Step 5

- Access link: Unique URL for viewing shared content

- Expiration notice: When access will expire

- Access instructions: Brief explanation that no account is required

Important: Each recipient receives their own unique access link. Links cannot be forwarded or shared with others (each link is tied to the recipient's email address for tracking purposes).

### External Viewer Interface

When recipients click the access link, they see a simplified, read-only version of the shared report or dashboard.

What recipients CAN do:

- View all data, charts, and visualizations

- Scroll and navigate within the shared content

- View data in the same time period and scope you configured

- Access the content until expiration date

What recipients CANNOT do (Phase 1 limitations):

- Access other reports or dashboards (no navigation menu)

- Edit or modify any content

- Download reports or export data

- Change filters, date ranges, or analysis scope

- Access any other areas of TestOps

Interface differences from internal view:
The external viewer removes:

- Top navigation bar and sidebar menu

- User account controls

- Action buttons (Edit, Configure, Create, etc.)

- Access to other TestOps features or data

Recipients see ONLY the specific report or dashboard you shared, in a clean, distraction-free interface focused on data consumption.

## Managing Shared Links

Track active shares, check expiration dates, and revoke access when needed.

### Viewing Active Shares

To see all reports and dashboards you've shared with external stakeholders:

- Navigate to Settings or Profile menu (location varies by TestOps configuration)

- Select Share Management or My Shares

- View list of all active and recently expired shares

Share list information includes:

- Content name and type (report/dashboard)

- Recipients (email addresses)

- Share date and time

- Expiration date

- Access status (Active/Expired/Revoked)

### Checking Expiration Status

Each share displays its expiration status:

- Active - Recipients can currently access content; shows days remaining

- Expiring Soon - Less than 2 days remaining (warning indicator)

- Expired - Access period has ended; recipients can no longer view content

- Revoked - Manually revoked before expiration

Expiration notifications:
TestOps does NOT automatically notify recipients before links expire. If recipients need ongoing access, reshare the content with a new expiration period before the current link expires.

### Revoking Access Early

To immediately revoke access to shared content before expiration:

- Open Share Management from Settings

- Find the share you want to revoke

- Click Revoke Access or Delete (button label varies)

- Confirm revocation

What happens when you revoke:

- Access links stop working immediately

- Recipients see "Access Revoked" message if they try to use the link

- Recipients do NOT receive email notification of revocation

- The share moves to "Revoked" status in your share history

When to revoke access:

- Data sensitivity changes (content becomes confidential)

- Recipient no longer needs access (project completed, person left organization)

- Accidental share to wrong recipients

- Security concern or policy violation

### Resending Access Links

If recipients lose the original email or didn't receive it:

- Open Share Management

- Find the original share (must still be active, not expired)

- Click Resend or Resend Notification

- Confirm resend action

TestOps sends a new email notification with the same access link to all original recipients. You cannot change recipients or expiration when resending—you must create a new share to modify those settings.

### Share History and Tracking

Share history maintains a record of:

- All shares you've created (active and expired)

- When shares were created, accessed, and expired

- Who you shared content with

- Any revocation actions

Retention period:
Share history is retained for 90 days after expiration or revocation. Historical shares older than 90 days are automatically purged from the system.

Note: Phase 1 provides basic share management. Advanced analytics (view counts, time spent, interaction tracking) are planned for Phase 2.

## Security and Best Practices

Follow these guidelines to share testing insights securely and effectively.

### Choosing Appropriate Expiration Periods

7-day expiration - Use for:

- Highly sensitive data or confidential reports

- One-time reviews or single-meeting contexts

- Sprint demos or short-term stakeholder updates

- Situations where data becomes stale quickly

14-day expiration - Use for:

- Standard client updates and stakeholder check-ins

- Typical project review cycles

- Monthly or bi-weekly status reports

- Most day-to-day sharing scenarios

30-day expiration - Use for:

- Compliance audits or regulatory reviews

- Ongoing external monitoring during long projects

- Quarterly business reviews

- Situations requiring extended stakeholder access

General principle: Choose the shortest expiration period that meets stakeholder needs. Shorter expiration reduces security risk if access links are compromised.

### Recipient Email Validation

Before sharing, verify:

- Email addresses are spelled correctly

- Recipients are authorized to see this data

- You're using business email addresses (not personal email)

- Recipients expect the share (reduces spam reports)

Avoid sharing to:

- Distribution lists or aliases (you won't know who accesses the content)

- External domains you don't recognize

- Personal email addresses for business-sensitive data

### Understanding Data Visibility

Recipients can see:

- All data visible in the report or dashboard at the time of sharing

- Charts, tables, metrics, and visualizations

- Data within the configured time period and analysis scope

- Any notes or annotations visible in the shared view

Recipients CANNOT see:

- Data from other projects or releases (unless included in shared content)

- Confidential fields or hidden data (if properly configured)

- Test execution details beyond what the report displays

- Personal information about TestOps users or team members

Important: Shared content reflects the filters and scope YOU configured. Review the content carefully before sharing to ensure it shows only appropriate data.

### When NOT to Use External Sharing

Do NOT use external sharing for:

- Highly confidential data subject to strict access controls

- Content containing personally identifiable information (PII) or protected health information (PHI)

- Data subject to export controls or regulatory restrictions

- Situations requiring detailed audit trails of individual viewer actions (Phase 1 limitation)

- Recipients who need to interact with data (filter, drill down, export)

Alternative approaches:

- For interactive access: Provide TestOps license to authorized users

- For confidential data: Use screen sharing during live meetings

- For export needs: Generate PDF/CSV reports and send via secure channels

- For regulated data: Consult your compliance team before sharing

### Compliance Considerations

Before sharing with external auditors or compliance officers:

- Verify your organization's data sharing policies

Some industries (healthcare, finance) have strict rules about external data access
Obtain necessary approvals before sharing compliance-related reports

- Document the share

Record who you shared with, when, and why
Maintain records of expiration and revocation actions
Save copies of shared content for audit purposes

- Set appropriate expiration

Compliance audits often have defined timeframes
Align expiration with audit completion date
Revoke access immediately after audit concludes

- Review data sensitivity

Remove or mask sensitive fields before sharing
Ensure shared content meets data minimization principles
Verify no confidential information is inadvertently included

Audit trail note: Phase 1 provides basic share creation and expiration tracking. Advanced audit logging (individual viewer access times, IP addresses, interaction details) is planned for Phase 3.

### Password Protection and Advanced Security

Phase 1 limitations:
External shares in Phase 1 are protected by:

- Unique, non-guessable URLs

- Recipient email validation

- Time-limited access (expiration)

- No public listing or indexing

NOT currently available in Phase 1:

- Password protection for shared links

- IP address restrictions

- Two-factor authentication for external viewers

- Watermarking or download prevention

- Granular viewer permissions

These advanced security features are planned for Phase 2 and Phase 3. If your use case requires these capabilities, consult with your TestOps administrator about alternative approaches.

## Troubleshooting and Common Questions

### Recipients didn't receive the sharing email

Common causes:

- Email addresses were mistyped (check spelling)

- Email was filtered to spam/junk folder

- Recipient's email server blocked automated messages

- Email delivery is delayed (allow 5-10 minutes)

Solutions:

- Use the Resend feature in Share Management

- Ask recipients to check spam folders and whitelist TestOps domain

- Verify email addresses and reshare if incorrect

- Contact TestOps support if delivery issues persist

### Recipient says the link is expired or doesn't work

Possible reasons:

- Link has exceeded expiration period

- You revoked access after sharing

- Link was forwarded to someone else (links are tied to original recipient)

- Browser or network issue preventing access

Solutions:

- Check share status in Share Management (Active/Expired/Revoked)

- If expired: Reshare content with new expiration period

- If active but not working: Ask recipient to try different browser or clear cache

- Verify recipient is using the link from the original email (not a forwarded copy)

### How do I extend access after a link expires?

You cannot extend an expired link. Create a new share:

- Navigate to the same report/dashboard

- Click Share again

- Enter recipient email addresses

- Select new expiration period

- Share again

Recipients receive a new email with a new access link. The old expired link remains invalid.

### Can recipients download or export the shared content?

Phase 1: No. External viewers can only view content in read-only mode. Download and export capabilities are planned for Phase 2.

Current workarounds:

- Take screenshots of shared content

- Request exports from the TestOps user who shared content

- Provide TestOps license for users needing export capabilities

### Can I share the same report with different expiration periods for different recipients?

Yes. Create separate shares for each recipient group:

- Share with Group A using 7-day expiration

- Share again with Group B using 30-day expiration

Each share creates independent access links. You can manage expiration and revocation separately for each share.

### How do I know if recipients have viewed the shared content?

Phase 1 limitation: Basic view tracking is not available in Phase 1. You cannot see if recipients opened the email or accessed the link.

Planned for Phase 2: Access analytics including:

- View counts

- Last access time

- Time spent viewing

- Most viewed sections

For now, follow up directly with recipients to confirm they've reviewed the content.

### What happens to shared links if I delete the original report or dashboard?

Behavior:

- If you delete the source report/dashboard, shared links may stop working

- Recipients attempting to access deleted content see an error message

- Shares are automatically revoked when source content is deleted

Best practice: Do not delete reports or dashboards with active external shares. Revoke shares first, then delete content.

### Can I edit the report after sharing it?

Yes, with caveats:

- You can edit the report configuration after creating a share

- Changes MAY be reflected in the external viewer (depending on implementation)

- Changes to filters, scope, or widgets may not update in already-shared views

Best practice: Configure reports exactly as you want them BEFORE sharing. If significant changes are needed, revoke the old share and create a new one.

### Is there a limit to how many recipients I can add to a single share?

Phase 1: Check with your TestOps administrator for any configured limits. Typical installations support 10-20 recipients per share.

Best practice for large distributions:

- Share with key stakeholders individually

- Use distribution carefully (each recipient gets same access)

- Consider creating separate shares for different stakeholder groups

## See Also

- [Stakeholder Communication & Reporting](/docs/customization/stakeholder-communication) - Universal reporting best practices for all dashboards

- [Understanding Dashboard Types](/docs/dashboards/dashboard-types) - Learn about Project Overview, Release Quality, and other shareable dashboards

- [All Reports Reference](/docs/getting-started/all-reports-reference) - Complete catalog of shareable reports and their purposes

- [Configuring Dashboards](/docs/dashboards/configuring-dashboards) - Set up dashboards effectively before sharing with stakeholders

📊 Document Metrics:

- Word count: 4,202 words

- Target range: 1,200-2,200 words

- Status: ⚠️ Exceeds target (+91%)

- Estimated reading time: 21 minutes

[Configuration & Sharing OverviewLearn how to share TestOps dashboards and reports with external stakeholders, export data for analysis, and configure access control for collaboration without license barriers.](/docs/configuration-sharing/configuration-and-sharing-overview)[Export Reports and DashboardsExport report data as CSV for analysis in Excel or BI tools, and export individual test run results in Excel, HTML, or PDF formats for documentation and compliance records.](/docs/configuration-sharing/export-reports-and-dashboards)


Getting Started
# Getting Started: Overview and Getting Started

Navigate Reports & Analytics confidently with task-to-tool mapping, basic filtering, and dashboard exploration for all testing roles.

# Getting Started: Overview and Getting Started

Reading time: 8 minutes

Reports & Analytics offers dozens of dashboards, reports, and analysis tools. Without a map, it's easy to get lost or miss critical capabilities. This guide gives you that map—showing you where to start, which tool to use for each task, and how to navigate confidently from day one.

## What This Section Covers

This section provides capabilities to:

- Navigate the Reports & Analytics module structure (dashboards vs. reports, navigation patterns, core interface elements)

- Access and explore the Project Dashboard to understand real-time quality metrics and test execution status

- Apply basic filtering with the time range selector to focus analysis on specific time periods

- Map common testing tasks to the right tools (task-to-tool reference covering daily monitoring, failure investigation, coverage tracking, release readiness)

## What You'll Achieve

By completing this section, you will:

- Navigate confidently between Reports & Analytics dashboards and reports using the left navigation menu

- Distinguish between dashboards (real-time monitoring) and reports (historical analysis) and know when to use each

- Access the Project Dashboard and interpret key metrics (total executions, pass rate, failed tests, execution trends)

- Apply basic time range filtering to adjust dashboard and report scope for day-to-day analysis

- Identify which tool to use for common testing tasks using the task-to-tool mapping reference (monitoring live tests, investigating failures, checking coverage, assessing release readiness)

- Understand navigation patterns and next learning steps based on your role (QA Engineer, QA Manager, Automation Engineer, Product Owner)

## Prerequisites

Before you begin: You need an active TestOps account with access to at least one project containing test execution data. If you don't have access yet, contact your TestOps administrator.

## Visual Journey Map

The diagram below shows your navigation journey from arriving at TestOps to finding the insights you need:


## Task-to-Tool Mapping: Finding the Right Tool Fast

The table below maps common testing tasks to the specific dashboard or report that answers your question:

| I Need To...                               | Use This Tool                                                                                                                                                                                                                          | Why?                                                                                                           |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Monitor tests running RIGHT NOW            | [Live Monitor Dashboard](https://ktl-docs-ra.vercel.app/docs/dashboards/live-monitor)                                                                                                                                                  | Real-time progress tracking with 5-second refresh during active executions                                     |
| See project's overall quality today        | [Project Dashboard](https://ktl-docs-ra.vercel.app/docs/getting-started/project-dashboard)                                                                                                                                             | Consolidated current metrics (pass rate, total executions, failed tests, trends)                               |
| Investigate why tests failed last week     | [Test Results Analysis Report](https://ktl-docs-ra.vercel.app/docs/test-failures/test-results-analysis)                                                                                                                                | Historical drill-down analysis with filters for time ranges, configurations, and test cases                    |
| Check if release is ready to ship          | [Release Health Dashboard](https://ktl-docs-ra.vercel.app/docs/release-readiness/release-health-dashboard)                                                                                                                             | Quality gates, release-specific metrics, and READY/AT RISK indicator for go/no-go decisions                    |
| Find which requirements lack coverage      | [Requirements Coverage Report](https://ktl-docs-ra.vercel.app/docs/coverage/requirements-coverage)                                                                                                                                     | Coverage percentages linked to requirements, showing gaps and completion status                                |
| Identify flaky/unstable tests              | [Test Failures Analysis Report](https://ktl-docs-ra.vercel.app/docs/test-failures/test-failures-analysis) or [Project Dashboard Flaky Tests widget](https://ktl-docs-ra.vercel.app/docs/getting-started/project-dashboard#flaky-tests) | Highlights intermittent failures with Probabilistic Flakiness Score (PFS)                                      |
| Track defect trends over time              | [Defect Activity Analysis Report](https://ktl-docs-ra.vercel.app/docs/defects/defect-activity-analysis)                                                                                                                                | Historical defect patterns showing discovery rate, resolution velocity, and trend analysis                     |
| See automated vs. manual test distribution | [Automation Progress Report](https://ktl-docs-ra.vercel.app/docs/coverage/automation-progress)                                                                                                                                         | Automation coverage tracking with breakdown by test type and execution method                                  |
| Verify testing across browsers/devices     | [Configuration Coverage Report](https://ktl-docs-ra.vercel.app/docs/coverage/configuration-coverage)                                                                                                                                   | Platform and environment coverage showing which configurations have been tested                                |
| Generate compliance audit report           | [Requirement Traceability Report](https://ktl-docs-ra.vercel.app/docs/coverage/requirement-traceability)                                                                                                                               | Full traceability chain (requirements → tests → results → defects) in audit-ready format with PDF/Excel export |
## Understanding Dashboards vs. Reports

Before diving into specific tools, understand the key distinction that shapes how you'll navigate Reports & Analytics:

Dashboards:

- Widget-based, composable layouts - users arrange multiple widgets (charts, metrics, alerts) into personalized views

- Purpose: Monitoring and alerting - "How are we doing right now?" across multiple concerns simultaneously

- At-a-glance operational awareness - like a car's instrument panel showing multiple indicators together

- Emphasize visual patterns, trend detection, and proactive decision-making

- Ideal for: Stakeholders who need to spot issues quickly and take action (e.g., "Test stability dropped below 90%, investigate now")

- Use case: Continuous monitoring, anomaly detection, operational oversight

Reports:

- Predefined, deep-dive analytical views - structured to answer specific analytical questions

- Purpose: Investigation and documentation - "Why did this happen?" or "Which requirements lack coverage?"

- Detailed data tables with drill-down capabilities - comprehensive data exploration and root cause analysis

- Emphasize data completeness, traceability, and exportable formats

- Ideal for: Practitioners who need to investigate problems, prove compliance, or document findings (e.g., generating requirement traceability matrix for auditors)

- Use case: Root cause analysis, compliance documentation, detailed investigation

When to use each:

- Use dashboards proactive monitoring (high-level, customizable, multi-metric views)

- Use reports for reactive analysis (detailed, predefined, single-question focus)

## Section Contents Overview

This section includes 2 tutorials, 1 how-to guide, 1 explanation, and 1 reference document to build your navigation foundation:

Tutorials:

- [Exploring the Project Dashboard](/docs/getting-started/project-dashboard) - Learn core metrics, widgets, and quality indicators on the universal quality dashboard all users access daily

- [Quick Start: Your First 5 Minutes](/docs/getting-started/quick-start) - Hands-on walkthrough from login to finding your first insight in under 5 minutes

How-To Guides:

- [Using Filters & Analysis Scope](/docs/getting-started/filters-analysis-scope) - Master time range, release scope, and current filters to focus analysis efficiently

Explanations:

- [Core Concepts: Understanding Reports & Analytics](/docs/getting-started/core-concepts) - Deep dive into module architecture, data flow, and terminology standards

Reference:

- [All Reports & Dashboards Quick Reference](/docs/reference/all-reports) - Complete catalog with descriptions, use cases, and links for every tool in Reports & Analytics

## Recommended Learning Path

[### For QA Engineers
Start: Investigating Test Failures - Learn systematic failure investigation workflow for daily debugging tasks, including AI-powered root cause analysisThen: Using Filters & Analysis Scope - Master filtering system to focus analysis efficiently on relevant time periods, releases, and configurationsFinally: Identifying Flaky Tests - Distinguish flaky tests from real failures to prioritize work and improve test reliability](/docs/test-failures/introduction)[### For QA Managers
Start: Dashboards & Monitoring - Understand Live Monitor, Analytics & Trends, and Release Health dashboards for team oversight and quality trackingThen: Assessing Release Readiness - Set up quality gates and release readiness workflows to make objective go/no-go decisionsFinally: Tracking Requirement Coverage - Monitor test coverage for completeness and compliance with audit-ready traceability](/docs/dashboards/introduction)

## Common Questions

### What's the difference between dashboards and reports in TestOps?

### I don't see any data in my dashboard. What should I check?

### Can I customize the Project Dashboard or other built-in dashboards?

Yes. TestOps allows dashboard customization including adding/removing widgets, resizing, and configuring widget settings. You can also create completely custom dashboards from scratch. Admin permissions required for organization-wide customizations.

Learn more: [Dashboard Configuration Guide](/docs/customization/dashboard-configuration)

### How do I know which report to use for compliance audits?

### What if I can't find a specific dashboard or report in my navigation?

## See Also

Foundation Concepts:

- [Core Concepts: Understanding Reports & Analytics](/docs/getting-started/core-concepts) - Deep dive into module architecture, data flow, and terminology standards

Next Sections:

- [Dashboards & Monitoring](/docs/dashboards/introduction) - Apply navigation knowledge to real-time monitoring with Live Monitor and Analytics & Trends

- [Test Failures](/docs/test-failures/introduction) - When dashboards show quality issues, learn systematic investigation workflows

Advanced Topics:

- [Customization & External Sharing](/docs/customization/introduction) - Customize dashboards and reports to match your team's workflow after mastering navigation

## 📍 Where to Go Next

Common next steps after Getting Started:

- [Exploring the Project Dashboard](/docs/getting-started/project-dashboard) - Start hands-on by exploring the universal quality dashboard all users access daily

- [Dashboards & Monitoring](/docs/dashboards/introduction) - Understand Live Monitor, Analytics & Trends, and Release Health for team oversight

- [Workflow Guide: Role-Based Pathways](/docs/workflows/overview) - Not sure which section to explore next? Find your role's recommended learning path

Need help deciding? See [Workflow Guide: Role-Based Pathways](/docs/workflows/overview)
[Core Concepts - Understanding Reports & AnalyticsBuild a mental model of TestOps Reports & Analytics—understand dashboards vs reports, role-based use cases, data models, and how R&A fits into your testing workflow.](/docs/getting-started/why-testops-for-test-analytics)

Getting Started
# Core Concepts - Understanding Reports & Analytics

Build a mental model of TestOps Reports & Analytics—understand dashboards vs reports, role-based use cases, data models, and how R&A fits into your testing workflow.

# Core Concepts: Understanding Reports & Analytics

Reading time: 12 minutes

Looking for hands-on practice? If you prefer learning by doing, start with [Getting Started with Reports & Analytics](/docs/getting-started/introduction) for a step-by-step tutorial. This document provides conceptual understanding that complements the hands-on guide.

## Introduction

Imagine managing a software testing operation without visibility into what's happening. You don't know which tests are passing or failing, which builds are stable, or whether your team is ready to release. You're flying blind.

This is the problem Katalon TestOps Reports & Analytics solves. It transforms raw test execution data into actionable insights, giving you the visibility and intelligence you need to make confident quality decisions.

This guide helps you build a mental model of Reports & Analytics: what it does, how it works, and when to use each feature. Whether you're a QA Manager planning adoption, a Tester learning the platform, or an Engineer integrating automation, understanding these core concepts will help you use TestOps more effectively.

## What is Reports & Analytics?

### The Testing Visibility Challenge

Modern software teams face a common challenge: testing generates massive amounts of data, but data alone doesn't tell you what to do.

Consider a typical scenario:

- Your CI/CD pipeline runs 2,000 automated tests every night

- Manual testers execute 150 test cases daily

- Multiple teams work on different features simultaneously

- Tests run across different environments, browsers, and devices

Without Reports & Analytics, you'd need to manually sift through logs, spreadsheets, and CI/CD outputs to answer basic questions like "Are we ready to release?" or "Why did yesterday's build fail?"

### What Reports & Analytics Provides

Reports & Analytics (R&A) is TestOps's intelligence layer—it collects test execution data from all sources and transforms it into four key capabilities:

- Real-time monitoring: See what's happening right now with live dashboards

- Historical analysis: Understand trends, patterns, and changes over time

- Quality insights: Identify flaky tests, coverage gaps, and risk areas

- Compliance traceability: Link tests to requirements for regulatory reporting

#_r_8e_{margin:1.5rem auto 0;}#_r_8e_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_8e_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_8e_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_8e_ .error-icon{fill:#552222;}#_r_8e_ .error-text{fill:#552222;stroke:#552222;}#_r_8e_ .edge-thickness-normal{stroke-width:1px;}#_r_8e_ .edge-thickness-thick{stroke-width:3.5px;}#_r_8e_ .edge-pattern-solid{stroke-dasharray:0;}#_r_8e_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_8e_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_8e_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_8e_ .marker{fill:#333333;stroke:#333333;}#_r_8e_ .marker.cross{stroke:#333333;}#_r_8e_ svg{font-family:inherit;font-size:16px;}#_r_8e_ p{margin:0;}#_r_8e_ .label{font-family:inherit;color:#333;}#_r_8e_ .cluster-label text{fill:#333;}#_r_8e_ .cluster-label span{color:#333;}#_r_8e_ .cluster-label span p{background-color:transparent;}#_r_8e_ .label text,#_r_8e_ span{fill:#333;color:#333;}#_r_8e_ .node rect,#_r_8e_ .node circle,#_r_8e_ .node ellipse,#_r_8e_ .node polygon,#_r_8e_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_8e_ .rough-node .label text,#_r_8e_ .node .label text,#_r_8e_ .image-shape .label,#_r_8e_ .icon-shape .label{text-anchor:middle;}#_r_8e_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_8e_ .rough-node .label,#_r_8e_ .node .label,#_r_8e_ .image-shape .label,#_r_8e_ .icon-shape .label{text-align:center;}#_r_8e_ .node.clickable{cursor:pointer;}#_r_8e_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_8e_ .arrowheadPath{fill:#333333;}#_r_8e_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_8e_ .flowchart-link{stroke:#333333;fill:none;}#_r_8e_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_8e_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_8e_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_8e_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_8e_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_8e_ .cluster text{fill:#333;}#_r_8e_ .cluster span{color:#333;}#_r_8e_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_8e_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_8e_ rect.text{fill:none;stroke-width:0;}#_r_8e_ .icon-shape,#_r_8e_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_8e_ .icon-shape p,#_r_8e_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_8e_ .icon-shape rect,#_r_8e_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_8e_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_8e_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_8e_ :root{--mermaid-font-family:inherit;}
Insights & Actions

Reports & Analytics

Test Data Sources

Katalon Studio

Playwright/Other Tools

Manual Tests

CI/CD Pipelines

Data Collection

Processing & Calculation

Metrics Engine

Real-time Dashboards

Historical Reports

Quality Insights

Compliance Traceability

Figure 1: How Reports & Analytics transforms test data into actionable insights

### How R&A Fits in the TestOps Ecosystem

Reports & Analytics doesn't work in isolation—it's deeply integrated with other TestOps modules:

- Test Management → R&A: Test case execution results feed into quality reports

- Requirements → R&A: Traceability reports link test coverage to requirements

- Visual Testing → R&A: Visual comparison results appear in quality dashboards

- Integrations → R&A: Jira issues, GitHub PRs, and CI/CD data enrich analytics

- Test Environments → R&A: Environment-specific analysis helps isolate issues

Think of R&A as the "brain" that makes sense of all the testing activity happening across your organization.

## Who Uses Reports & Analytics?

Reports & Analytics serves different roles with different needs. Understanding these perspectives helps you choose the right features for your situation.

Five key roles:

- QA Managers: Strategic oversight, release readiness, quality trends

- Manual Testers: Execution tracking, failure investigation

- Automation Engineers: Flaky test detection, test optimization

- DevOps Engineers: Pipeline integration, quality gates

- Product Managers: Feature quality, requirement traceability

### QA Managers: Strategic Oversight

### Manual Testers: Execution and Investigation

### Automation Engineers: Maintenance and Optimization

### DevOps Engineers: Pipeline Integration

### Product Managers: Feature Quality

## Dashboards vs Reports: When to Use What

One of the most common questions new users ask is: "Should I use a dashboard or a report?" Understanding the conceptual difference helps you choose the right tool.

### Dashboards: Multi-Metric Monitoring Interfaces

Purpose: Dashboards are designed for ongoing vigilance across multiple concerns—they show you several related metrics simultaneously for proactive decision-making.

Conceptual Model: Think of a dashboard like a car's instrument panel. You glance at it while driving to monitor speed, fuel, engine temperature, and warning lights all at once. It gives you just enough information across multiple dimensions to make immediate decisions.

When to use dashboards:

- You need to monitor multiple related metrics simultaneously (not just one thing)

- You want at-a-glance pattern recognition across different dimensions

- You check the same set of concerns repeatedly (daily standup, release monitoring)

- You need customizable layouts to arrange widgets for your specific workflow

- You want alerting and anomaly detection (visual cues when things go wrong)

Example use cases:

- QA Manager checks Release Health Dashboard every morning (pass rate + defects + coverage in one view)

- Team displays Live Monitor Dashboard on office TV during test runs (execution progress + failures + environment status)

- Automation Engineer monitors Flaky Test Dashboard weekly (stability trends + top flaky tests + impact)

### Reports: Single-Question Analytical Deep Dives

Purpose: Reports are designed for focused investigation and documentation—they answer specific analytical questions with comprehensive detail.

Conceptual Model: Think of a report like a medical diagnostic test. It provides detailed, structured data to answer a specific question thoroughly and can be exported for records.

When to use reports:

- You need to answer a specific analytical question (e.g., "Which requirements lack coverage?")

- You require detailed data tables with drill-down capabilities for investigation

- You want exportable documentation for compliance, audits, or stakeholder communication

- You need comprehensive data completeness for a particular concern (not just highlights)

- You're conducting root cause analysis that requires exploring granular details

Example use cases:

- QA Manager generates Requirement Coverage Report to identify untested requirements (detailed table with drill-down)

- Compliance Officer exports Requirement Traceability Report for audit (complete documentation)

- Automation Engineer creates Test Failure Analysis Report to investigate why specific tests failed (detailed logs, stack traces, history)

### Decision Guide: Dashboard or Report?

QuestionDashboardReportWhen do I use it?Repeatedly, ongoingOnce or occasionallyWhat am I trying to do?Monitor multiple concernsInvestigate specific questionWhat's the depth?High-level patterns across metricsDetailed analysis of one concernHow do I view it?Composable widgets, customizable layoutPredefined structure, data tablesWho consumes it?Internal team monitoringInternal + external stakeholdersDo I need to export it?RarelyOften (PDF, CSV, etc.)What's the interaction model?Glanceable, visual patternsDrill-down, explore details
#_r_8g_{margin:1.5rem auto 0;}#_r_8g_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_8g_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_8g_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_8g_ .error-icon{fill:#552222;}#_r_8g_ .error-text{fill:#552222;stroke:#552222;}#_r_8g_ .edge-thickness-normal{stroke-width:1px;}#_r_8g_ .edge-thickness-thick{stroke-width:3.5px;}#_r_8g_ .edge-pattern-solid{stroke-dasharray:0;}#_r_8g_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_8g_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_8g_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_8g_ .marker{fill:#333333;stroke:#333333;}#_r_8g_ .marker.cross{stroke:#333333;}#_r_8g_ svg{font-family:inherit;font-size:16px;}#_r_8g_ p{margin:0;}#_r_8g_ .label{font-family:inherit;color:#333;}#_r_8g_ .cluster-label text{fill:#333;}#_r_8g_ .cluster-label span{color:#333;}#_r_8g_ .cluster-label span p{background-color:transparent;}#_r_8g_ .label text,#_r_8g_ span{fill:#333;color:#333;}#_r_8g_ .node rect,#_r_8g_ .node circle,#_r_8g_ .node ellipse,#_r_8g_ .node polygon,#_r_8g_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_8g_ .rough-node .label text,#_r_8g_ .node .label text,#_r_8g_ .image-shape .label,#_r_8g_ .icon-shape .label{text-anchor:middle;}#_r_8g_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_8g_ .rough-node .label,#_r_8g_ .node .label,#_r_8g_ .image-shape .label,#_r_8g_ .icon-shape .label{text-align:center;}#_r_8g_ .node.clickable{cursor:pointer;}#_r_8g_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_8g_ .arrowheadPath{fill:#333333;}#_r_8g_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_8g_ .flowchart-link{stroke:#333333;fill:none;}#_r_8g_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_8g_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_8g_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_8g_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_8g_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_8g_ .cluster text{fill:#333;}#_r_8g_ .cluster span{color:#333;}#_r_8g_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_8g_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_8g_ rect.text{fill:none;stroke-width:0;}#_r_8g_ .icon-shape,#_r_8g_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_8g_ .icon-shape p,#_r_8g_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_8g_ .icon-shape rect,#_r_8g_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_8g_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_8g_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_8g_ :root{--mermaid-font-family:inherit;}
Multiple concerns

Single question

Repeatedly

One-time

Yes

No

Need insights about your tests?

Multiple related concernsor single question?

Need detailed tablesor export?

Check repeatedly orone-time investigation?

Use Dashboard

Use Report

Use Dashboardfor quick patterns

Use Reportfor documentation

Examples:• Monitor release health• Track test stability trends• Spot anomalies across metrics

Examples:• Investigate test failures• Audit requirement coverage• Document quality for stakeholders

Figure 3: Decision tree for choosing dashboards vs reports

### Can I Use Both?

Absolutely! Most teams use dashboards for ongoing monitoring and reports for periodic deep-dives. For example:

Weekly workflow:

- Monday-Friday: Check Live Monitor Dashboard during test runs (monitoring multiple execution metrics)

- When failures occur: Generate Test Failure Analysis Report to investigate root cause (detailed drill-down)

- Friday afternoon: Generate End-of-Sprint Coverage Report for stakeholders (documentation)

- Sprint retrospective: Review Release Health Dashboard for trends, then export detailed reports for records

## Common Workflows & Use Cases

Understanding how R&A fits into real-world testing workflows helps you apply it effectively. Here are three common scenarios:

### Scenario 1: Daily Standup Check-In

Role: QA Manager
Goal: Provide quality update to team

Workflow:

- Open Release Health Dashboard filtered to current sprint

- Check pass rate trend (is quality improving or declining?)

- Review open critical defects (any blockers?)

- Note test execution progress (are we on track?)

- Share key metrics in standup (2 minutes)

Why R&A helps: Provides instant, accurate quality snapshot without manual data gathering.

### Scenario 2: Investigating Test Failures

Role: Automation Engineer
Goal: Understand why nightly tests failed

Workflow:

- Open Live Monitor Dashboard showing last night's test run

- Identify failed tests and sort by failure rate

- Click into individual test result to see logs, screenshots, error messages

- Notice pattern: 5 tests failed with same "timeout" error

- Cross-reference with Environment Analysis (is it environment-specific?)

- Create Jira ticket linked to failing tests

- Mark tests as "known issue" to track resolution

Why R&A helps: Connects test results to context (environment, history, related failures) for faster root cause analysis.

### Scenario 3: Preparing for Release

Role: Product Manager + QA Manager
Goal: Decide if release is ready for production

Workflow:

- Generate Requirement Coverage Report (are all features tested?)

- Review Release Health Dashboard (current quality status)

- Check Defect Analysis Report (any high-severity open bugs?)

- Compare pass rate trend (quality improving or declining?)

- Evaluate against release criteria:

95%+ pass rate → ✅
All critical requirements covered → ✅
No P0/P1 open defects → ✅

- Make go/no-go decision with data-backed confidence

Why R&A helps: Provides comprehensive, objective view of release readiness rather than relying on subjective opinions.

#_r_8j_{margin:1.5rem auto 0;}#_r_8j_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_8j_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_8j_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_8j_ .error-icon{fill:#552222;}#_r_8j_ .error-text{fill:#552222;stroke:#552222;}#_r_8j_ .edge-thickness-normal{stroke-width:1px;}#_r_8j_ .edge-thickness-thick{stroke-width:3.5px;}#_r_8j_ .edge-pattern-solid{stroke-dasharray:0;}#_r_8j_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_8j_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_8j_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_8j_ .marker{fill:#333333;stroke:#333333;}#_r_8j_ .marker.cross{stroke:#333333;}#_r_8j_ svg{font-family:inherit;font-size:16px;}#_r_8j_ p{margin:0;}#_r_8j_ .label{font-family:inherit;color:#333;}#_r_8j_ .cluster-label text{fill:#333;}#_r_8j_ .cluster-label span{color:#333;}#_r_8j_ .cluster-label span p{background-color:transparent;}#_r_8j_ .label text,#_r_8j_ span{fill:#333;color:#333;}#_r_8j_ .node rect,#_r_8j_ .node circle,#_r_8j_ .node ellipse,#_r_8j_ .node polygon,#_r_8j_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_8j_ .rough-node .label text,#_r_8j_ .node .label text,#_r_8j_ .image-shape .label,#_r_8j_ .icon-shape .label{text-anchor:middle;}#_r_8j_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_8j_ .rough-node .label,#_r_8j_ .node .label,#_r_8j_ .image-shape .label,#_r_8j_ .icon-shape .label{text-align:center;}#_r_8j_ .node.clickable{cursor:pointer;}#_r_8j_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_8j_ .arrowheadPath{fill:#333333;}#_r_8j_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_8j_ .flowchart-link{stroke:#333333;fill:none;}#_r_8j_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_8j_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_8j_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_8j_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_8j_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_8j_ .cluster text{fill:#333;}#_r_8j_ .cluster span{color:#333;}#_r_8j_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_8j_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_8j_ rect.text{fill:none;stroke-width:0;}#_r_8j_ .icon-shape,#_r_8j_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_8j_ .icon-shape p,#_r_8j_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_8j_ .icon-shape rect,#_r_8j_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_8j_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_8j_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_8j_ :root{--mermaid-font-family:inherit;}
Release Readiness (Product + QA)

Generate CoverageReport

Review HealthDashboard

Check Defect Report

Evaluate againstcriteria

Make go/no-godecision

Test Failure Investigation (Engineer)

Open Live MonitorDashboard

Identify failed tests

Review logs & errors

Find failure patterns

Check environmentcorrelation

Create Jira ticket

Daily Standup (QA Manager)

Open Release HealthDashboard

Check pass rate trend

Review critical defects

Note execution progress

Share in standup

Figure 4: Three common workflows using Reports & Analytics

## Understanding the Data Behind Reports

To use Reports & Analytics effectively, you need to understand the data model—how TestOps organizes and calculates test information.

### Test Execution Hierarchy

TestOps structures test data in three levels:

1. Test Run (highest level)

- A complete execution session (e.g., "Nightly Regression - Jan 15, 2025")

- Contains multiple test executions

- Has overall status: Passed, Failed, Error, Incomplete

2. Test Execution

- A single test case's execution within a test run

- Links to a specific test case in Test Management

- Has individual status: Passed, Failed, Error, Skipped

3. Test Result (most granular)

- Detailed outcome of a test execution

- Includes logs, screenshots, error messages, duration

- Used for debugging and analysis

Example:

Test Run: "Nightly Regression - Jan 15"
├── Test Execution: "Login - Valid Credentials"
│   └── Test Result: Passed (2.3 seconds)
├── Test Execution: "Login - Invalid Password"
│   └── Test Result: Failed (timeout error)
└── Test Execution: "Login - Locked Account"
    └── Test Result: Passed (1.8 seconds)

### How Metrics Are Calculated

Understanding metric calculations helps you interpret results accurately:

Pass Rate:

Pass Rate = (Passed Tests / Total Tests) × 100

- Includes only Passed and Failed (excludes Skipped, Error)

- Calculated per test run, release, or custom scope

Flaky Rate:

Flaky Rate = (Tests with inconsistent results / Total Tests) × 100

- A test is "flaky" if it passes sometimes and fails sometimes (same code, environment)

- Calculated over multiple executions (default: last 30 days)

Test Duration:

- Sum of all test execution times in a test run

- Used to identify slow tests for optimization

- Calculated as median (not average) to reduce outlier impact

Coverage Percentage:

Coverage = (Requirements with ≥1 linked test / Total Requirements) × 100

- Measures how many requirements have test coverage

- Used in compliance and traceability reports

### Why Analysis Scope Matters

The same test data can tell different stories depending on analysis scope—the time window or release boundary you apply.

Time-Based Scope:

- Analyzes test results within a specific timeframe (e.g., last 7 days, last 30 days)

- Best for: Trend analysis, identifying recent changes

- Example: "Our pass rate dropped from 95% to 87% in the last week—what changed?"

Release-Based Scope:

- Analyzes test results for a specific release or build

- Best for: Release readiness decisions, version comparison

- Example: "How does Release 2.5 quality compare to Release 2.4?"

Current Scope (Latest Results):

- Shows only the most recent test execution result per test

- Best for: Real-time monitoring, immediate status checks

- Example: "What's the current status of our test suite right now?"

Example: Same Tests, Different Insights:

- Time-based (last 30 days): "Test A" passed 28/30 times → 93% pass rate (slightly flaky)

- Release-based (v2.5): "Test A" passed 10/10 times → 100% pass rate (stable this release)

- Current scope: "Test A" passed on last execution → Shows as Passed

Choosing the right scope is critical for accurate analysis. See [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope) for detailed guidance.

### Data Freshness and Synchronization

Real-time data: Dashboards update automatically as tests complete (typically 5-10 second delay)

Historical data: Reports capture point-in-time snapshots and don't auto-update

Integration sync: Data from Jira, GitHub, etc. syncs every 15 minutes (configurable)

Understanding data timing helps set realistic expectations for report accuracy.

## How R&A Integrates with Other Modules

Reports & Analytics becomes more powerful when integrated with other TestOps modules. Here's how data flows:

Test Management → R&A:

- Test case metadata (name, priority, tags) enriches test results

- Test suite organization reflects in dashboard filters

- Manual test execution status appears in Live Monitor Dashboard

Requirements → R&A:

- Requirement links enable traceability reports

- Coverage metrics show which requirements lack tests

- Test results map to specific user stories or epics

Visual Testing → R&A:

- Visual comparison results (passed/failed) appear in quality dashboards

- Visual diffs are accessible from test result details

- Visual test trends show UI stability over time

Integrations (Jira, GitHub) → R&A:

- Jira issues linked to tests appear in defect analysis reports

- GitHub PR commits correlate with test failures for blame analysis

- CI/CD build metadata enriches test run context

Test Environments → R&A:

- Environment-specific analysis isolates infrastructure issues

- Cross-environment comparisons identify inconsistencies

- Environment tags enable filtered dashboards

#_r_8n_{margin:1.5rem auto 0;}#_r_8n_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_8n_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_8n_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_8n_ .error-icon{fill:#552222;}#_r_8n_ .error-text{fill:#552222;stroke:#552222;}#_r_8n_ .edge-thickness-normal{stroke-width:1px;}#_r_8n_ .edge-thickness-thick{stroke-width:3.5px;}#_r_8n_ .edge-pattern-solid{stroke-dasharray:0;}#_r_8n_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_8n_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_8n_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_8n_ .marker{fill:#333333;stroke:#333333;}#_r_8n_ .marker.cross{stroke:#333333;}#_r_8n_ svg{font-family:inherit;font-size:16px;}#_r_8n_ p{margin:0;}#_r_8n_ .label{font-family:inherit;color:#333;}#_r_8n_ .cluster-label text{fill:#333;}#_r_8n_ .cluster-label span{color:#333;}#_r_8n_ .cluster-label span p{background-color:transparent;}#_r_8n_ .label text,#_r_8n_ span{fill:#333;color:#333;}#_r_8n_ .node rect,#_r_8n_ .node circle,#_r_8n_ .node ellipse,#_r_8n_ .node polygon,#_r_8n_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_8n_ .rough-node .label text,#_r_8n_ .node .label text,#_r_8n_ .image-shape .label,#_r_8n_ .icon-shape .label{text-anchor:middle;}#_r_8n_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_8n_ .rough-node .label,#_r_8n_ .node .label,#_r_8n_ .image-shape .label,#_r_8n_ .icon-shape .label{text-align:center;}#_r_8n_ .node.clickable{cursor:pointer;}#_r_8n_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_8n_ .arrowheadPath{fill:#333333;}#_r_8n_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_8n_ .flowchart-link{stroke:#333333;fill:none;}#_r_8n_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_8n_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_8n_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_8n_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_8n_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_8n_ .cluster text{fill:#333;}#_r_8n_ .cluster span{color:#333;}#_r_8n_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_8n_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_8n_ rect.text{fill:none;stroke-width:0;}#_r_8n_ .icon-shape,#_r_8n_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_8n_ .icon-shape p,#_r_8n_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_8n_ .icon-shape rect,#_r_8n_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_8n_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_8n_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_8n_ :root{--mermaid-font-family:inherit;}
Test execution resultsTest case metadata

Requirement linksCoverage mapping

Visual test resultsUI comparison data

Defect statusBuild metadataPR commits

Environment tagsConfiguration data

Quality dashboardsTrend analysis

Coverage reportsTraceability matrix

Visual stability metrics

Quality gatesTest insights

Environment analysisStability reports

Reports & AnalyticsIntelligence Layer

Test Management

Requirements

Visual Testing

IntegrationsJira/GitHub/CI-CD

Test Environments

Figure 5: How Reports & Analytics integrates with other TestOps modules

## Next Steps

Now that you understand the core concepts of Reports & Analytics, you're ready to apply them:

For hands-on practice:

- [Getting Started with Reports & Analytics](/docs/getting-started/introduction) - Step-by-step tutorial

- [Creating Your First Dashboard](/docs/dashboards/creating-dashboards) - Build a custom dashboard

- [Generating Reports](/docs/reports/generating-reports) - Create your first report

For deeper understanding:

- [Understanding Report Types](/docs/getting-started/report-types) - Learn about each report's purpose

- [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope) - Master data filtering

- [Dashboard Configuration Guide](/docs/dashboards/how-to/configuration) - Customize your monitoring

For role-specific guidance:

- [Reports & Analytics for QA Managers](/docs/advanced/qa-manager-guide) - Strategic usage patterns

- [Reports & Analytics for Testers](/docs/advanced/tester-guide) - Daily workflow tips

- [Reports & Analytics for Engineers](/docs/advanced/engineer-guide) - Automation and optimization

## See Also

- [Getting Started with Reports & Analytics](/docs/getting-started/introduction) - Hands-on tutorial

- [Understanding Report Types](/docs/getting-started/report-types) - Report catalog and use cases

- [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope) - Data filtering concepts

- [Dashboard vs Report Decision Guide](/docs/getting-started/dashboard-vs-report) - Detailed comparison

- [All Reports Reference](/docs/reference/all-reports) - Complete report catalog

- [All Widgets Reference](/docs/reference/all-widgets) - Widget catalog for dashboards

[Getting Started: Overview and Getting StartedNavigate Reports & Analytics confidently with task-to-tool mapping, basic filtering, and dashboard exploration for all testing roles.](/docs/getting-started/welcome-to-reports-analytics)[Understanding Report TypesLearn the conceptual differences between dashboards and reports in Katalon TestOps, understand when to use each, and make informed decisions about which tool best fits your monitoring and analysis needs.](/docs/getting-started/understanding-reports-vs-dashboards)

Getting Started
# Understanding Analysis Scope Types

Learn the conceptual differences between Time-Based, Release-Based, and Current scope types in TestOps Reports & Analytics, and understand when to use each for optimal test data analysis and decision-making.

# Understanding Analysis Scope Types

Reading time: 15 minutes

Looking for hands-on steps? This document explains the concepts behind Analysis Scope types. For step-by-step instructions on selecting and applying scopes, see [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope).

## Introduction

Analysis Scope is one of TestOps' most powerful—yet often misunderstood—features. At its core, scope defines the universe of data you're analyzing before any filters are applied. Think of it as choosing which data "pool" to analyze, while filters then narrow down within that pool.

The same test execution can appear (or not appear) in your analysis depending on which scope you choose. Understanding why these different scopes exist and when to use each helps you make better testing decisions and avoid common analytical pitfalls.

This document explores three scope types in depth:

- Time-Based Scope: Analyzes data within a time period

- Release-Based Scope: Analyzes data for specific releases

- Current Scope: Shows the latest status per test case

By understanding the conceptual purpose of each, you'll know exactly which scope answers your question most accurately.

## What is Analysis Scope?

### The Problem Scope Solves

Imagine asking "What's my pass rate?" Without context, this question is ambiguous:

- Pass rate for all test runs this week?

- Pass rate for Release 2.5 specifically?

- Pass rate for the current status of all test cases?

Each interpretation requires analyzing a different set of test executions. Analysis Scope makes this distinction explicit.

### Scope Defines the Data Universe

Analysis Scope operates at the foundational level of your analysis—it determines which test executions TestOps considers before filters, widgets, or metrics come into play.

Key concept: Scope first, then filter.

- Scope selection → Defines the universe of relevant executions

- Filter application → Narrows within that universe

- Metric calculation → Computes results from filtered scope

#_r_9a_{margin:1.5rem auto 0;}#_r_9a_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_9a_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_9a_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_9a_ .error-icon{fill:#552222;}#_r_9a_ .error-text{fill:#552222;stroke:#552222;}#_r_9a_ .edge-thickness-normal{stroke-width:1px;}#_r_9a_ .edge-thickness-thick{stroke-width:3.5px;}#_r_9a_ .edge-pattern-solid{stroke-dasharray:0;}#_r_9a_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_9a_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_9a_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_9a_ .marker{fill:#333333;stroke:#333333;}#_r_9a_ .marker.cross{stroke:#333333;}#_r_9a_ svg{font-family:inherit;font-size:16px;}#_r_9a_ p{margin:0;}#_r_9a_ .label{font-family:inherit;color:#333;}#_r_9a_ .cluster-label text{fill:#333;}#_r_9a_ .cluster-label span{color:#333;}#_r_9a_ .cluster-label span p{background-color:transparent;}#_r_9a_ .label text,#_r_9a_ span{fill:#333;color:#333;}#_r_9a_ .node rect,#_r_9a_ .node circle,#_r_9a_ .node ellipse,#_r_9a_ .node polygon,#_r_9a_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_9a_ .rough-node .label text,#_r_9a_ .node .label text,#_r_9a_ .image-shape .label,#_r_9a_ .icon-shape .label{text-anchor:middle;}#_r_9a_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_9a_ .rough-node .label,#_r_9a_ .node .label,#_r_9a_ .image-shape .label,#_r_9a_ .icon-shape .label{text-align:center;}#_r_9a_ .node.clickable{cursor:pointer;}#_r_9a_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_9a_ .arrowheadPath{fill:#333333;}#_r_9a_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_9a_ .flowchart-link{stroke:#333333;fill:none;}#_r_9a_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_9a_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_9a_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_9a_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_9a_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_9a_ .cluster text{fill:#333;}#_r_9a_ .cluster span{color:#333;}#_r_9a_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_9a_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_9a_ rect.text{fill:none;stroke-width:0;}#_r_9a_ .icon-shape,#_r_9a_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_9a_ .icon-shape p,#_r_9a_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_9a_ .icon-shape rect,#_r_9a_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_9a_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_9a_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_9a_ :root{--mermaid-font-family:inherit;}
All Test Execution Data
2. Filters Narrow Results
Filtered Data:Status = Failed

Platform = Chrome

Final Result Set
1. Scope Selects Universe
Time-BasedUniverse

Release-BasedUniverse

CurrentUniverse

Analysis Process

Scope first, then filter

Analysis Scope chooses the data pool; Filters refine within that pool

### Why Scope Matters: Same Filters, Different Results

Here's a critical insight: The same filters applied to different scopes produce different results.

Example scenario:

- Filter: "Automated tests with status = Failed"

- Time-Based (Last 7 days): Shows all automated tests that failed anytime in the past week (may include same test multiple times)

- Release-Based (Release 2.5): Shows all automated tests that failed when run against Release 2.5 (regardless of when)

- Current: Shows automated tests whose most recent execution failed (each test counted once)

Understanding this distinction prevents misinterpretation of your metrics and ensures you're analyzing the right data for your decision.

## Time-Based Scope: Analyzing Activity Over Time

### What Time-Based Scope Does

Time-Based scope analyzes all test executions that occurred within a specified time period. It creates a temporal "window" and includes every execution that falls within that window.

Technical definition: TestOps queries executions where execution_time falls between start_date and end_date.

#_r_9c_{margin:1.5rem auto 0;}#_r_9c_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_9c_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_9c_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_9c_ .error-icon{fill:#552222;}#_r_9c_ .error-text{fill:#552222;stroke:#552222;}#_r_9c_ .edge-thickness-normal{stroke-width:1px;}#_r_9c_ .edge-thickness-thick{stroke-width:3.5px;}#_r_9c_ .edge-pattern-solid{stroke-dasharray:0;}#_r_9c_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_9c_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_9c_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_9c_ .marker{fill:#333333;stroke:#333333;}#_r_9c_ .marker.cross{stroke:#333333;}#_r_9c_ svg{font-family:inherit;font-size:16px;}#_r_9c_ p{margin:0;}#_r_9c_ .mermaid-main-font{font-family:inherit;}#_r_9c_ .exclude-range{fill:#eeeeee;}#_r_9c_ .section{stroke:none;opacity:0.2;}#_r_9c_ .section0{fill:rgba(102, 102, 255, 0.49);}#_r_9c_ .section2{fill:#fff400;}#_r_9c_ .section1,#_r_9c_ .section3{fill:white;opacity:0.2;}#_r_9c_ .sectionTitle0{fill:#333;}#_r_9c_ .sectionTitle1{fill:#333;}#_r_9c_ .sectionTitle2{fill:#333;}#_r_9c_ .sectionTitle3{fill:#333;}#_r_9c_ .sectionTitle{text-anchor:start;font-family:inherit;}#_r_9c_ .grid .tick{stroke:lightgrey;opacity:0.8;shape-rendering:crispEdges;}#_r_9c_ .grid .tick text{font-family:inherit;fill:#333;}#_r_9c_ .grid path{stroke-width:0;}#_r_9c_ .today{fill:none;stroke:red;stroke-width:2px;}#_r_9c_ .task{stroke-width:2;}#_r_9c_ .taskText{text-anchor:middle;font-family:inherit;}#_r_9c_ .taskTextOutsideRight{fill:black;text-anchor:start;font-family:inherit;}#_r_9c_ .taskTextOutsideLeft{fill:black;text-anchor:end;}#_r_9c_ .task.clickable{cursor:pointer;}#_r_9c_ .taskText.clickable{cursor:pointer;fill:#003163!important;font-weight:bold;}#_r_9c_ .taskTextOutsideLeft.clickable{cursor:pointer;fill:#003163!important;font-weight:bold;}#_r_9c_ .taskTextOutsideRight.clickable{cursor:pointer;fill:#003163!important;font-weight:bold;}#_r_9c_ .taskText0,#_r_9c_ .taskText1,#_r_9c_ .taskText2,#_r_9c_ .taskText3{fill:white;}#_r_9c_ .task0,#_r_9c_ .task1,#_r_9c_ .task2,#_r_9c_ .task3{fill:#8a90dd;stroke:#534fbc;}#_r_9c_ .taskTextOutside0,#_r_9c_ .taskTextOutside2{fill:black;}#_r_9c_ .taskTextOutside1,#_r_9c_ .taskTextOutside3{fill:black;}#_r_9c_ .active0,#_r_9c_ .active1,#_r_9c_ .active2,#_r_9c_ .active3{fill:#bfc7ff;stroke:#534fbc;}#_r_9c_ .activeText0,#_r_9c_ .activeText1,#_r_9c_ .activeText2,#_r_9c_ .activeText3{fill:black!important;}#_r_9c_ .done0,#_r_9c_ .done1,#_r_9c_ .done2,#_r_9c_ .done3{stroke:grey;fill:lightgrey;stroke-width:2;}#_r_9c_ .doneText0,#_r_9c_ .doneText1,#_r_9c_ .doneText2,#_r_9c_ .doneText3{fill:black!important;}#_r_9c_ .crit0,#_r_9c_ .crit1,#_r_9c_ .crit2,#_r_9c_ .crit3{stroke:#ff8888;fill:red;stroke-width:2;}#_r_9c_ .activeCrit0,#_r_9c_ .activeCrit1,#_r_9c_ .activeCrit2,#_r_9c_ .activeCrit3{stroke:#ff8888;fill:#bfc7ff;stroke-width:2;}#_r_9c_ .doneCrit0,#_r_9c_ .doneCrit1,#_r_9c_ .doneCrit2,#_r_9c_ .doneCrit3{stroke:#ff8888;fill:lightgrey;stroke-width:2;cursor:pointer;shape-rendering:crispEdges;}#_r_9c_ .milestone{transform:rotate(45deg) scale(0.8,0.8);}#_r_9c_ .milestoneText{font-style:italic;}#_r_9c_ .doneCritText0,#_r_9c_ .doneCritText1,#_r_9c_ .doneCritText2,#_r_9c_ .doneCritText3{fill:black!important;}#_r_9c_ .vert{stroke:navy;}#_r_9c_ .vertText{font-size:15px;text-anchor:middle;fill:navy!important;}#_r_9c_ .activeCritText0,#_r_9c_ .activeCritText1,#_r_9c_ .activeCritText2,#_r_9c_ .activeCritText3{fill:black!important;}#_r_9c_ .titleText{text-anchor:middle;font-size:18px;fill:#333;font-family:inherit;}#_r_9c_ :root{--mermaid-font-family:inherit;}Jan 18Jan 19Jan 20Jan 21Jan 22Jan 23Jan 24Jan 25Jan 26Jan 27Jan 28Jan 29Jan 30Jan 31Feb 01Old Executions ❌ More Old Tests ❌ Test Execution 1 Test Execution 2 Test Execution 3 Test Execution 4 Test Execution 5 Test Execution 6 Test Execution 7 Excluded (Before Window)Included (Last 7 Days) ✅Time-Based Scope: Last 7 Days Window

Only executions within the time window are analyzed

## Release-Based Scope: Analyzing Release Quality

### What Release-Based Scope Does

Release-Based scope analyzes all test executions associated with specific release(s), regardless of when those tests ran. It groups data by release version, not by time.

Technical definition: TestOps queries executions where release_id matches the selected release(s), ignoring execution_time.

#_r_9f_{margin:1.5rem auto 0;}#_r_9f_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_9f_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_9f_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_9f_ .error-icon{fill:#552222;}#_r_9f_ .error-text{fill:#552222;stroke:#552222;}#_r_9f_ .edge-thickness-normal{stroke-width:1px;}#_r_9f_ .edge-thickness-thick{stroke-width:3.5px;}#_r_9f_ .edge-pattern-solid{stroke-dasharray:0;}#_r_9f_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_9f_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_9f_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_9f_ .marker{fill:#333333;stroke:#333333;}#_r_9f_ .marker.cross{stroke:#333333;}#_r_9f_ svg{font-family:inherit;font-size:16px;}#_r_9f_ p{margin:0;}#_r_9f_ .label{font-family:inherit;color:#333;}#_r_9f_ .cluster-label text{fill:#333;}#_r_9f_ .cluster-label span{color:#333;}#_r_9f_ .cluster-label span p{background-color:transparent;}#_r_9f_ .label text,#_r_9f_ span{fill:#333;color:#333;}#_r_9f_ .node rect,#_r_9f_ .node circle,#_r_9f_ .node ellipse,#_r_9f_ .node polygon,#_r_9f_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_9f_ .rough-node .label text,#_r_9f_ .node .label text,#_r_9f_ .image-shape .label,#_r_9f_ .icon-shape .label{text-anchor:middle;}#_r_9f_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_9f_ .rough-node .label,#_r_9f_ .node .label,#_r_9f_ .image-shape .label,#_r_9f_ .icon-shape .label{text-align:center;}#_r_9f_ .node.clickable{cursor:pointer;}#_r_9f_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_9f_ .arrowheadPath{fill:#333333;}#_r_9f_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_9f_ .flowchart-link{stroke:#333333;fill:none;}#_r_9f_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_9f_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_9f_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_9f_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_9f_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_9f_ .cluster text{fill:#333;}#_r_9f_ .cluster span{color:#333;}#_r_9f_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_9f_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_9f_ rect.text{fill:none;stroke-width:0;}#_r_9f_ .icon-shape,#_r_9f_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_9f_ .icon-shape p,#_r_9f_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_9f_ .icon-shape rect,#_r_9f_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_9f_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_9f_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_9f_ :root{--mermaid-font-family:inherit;}
Release-Based Grouping

Release 2.5

Test A: Pass

Test C: Pass

Test E: Pass

Test F: Pass

Release 2.4

Test A: Pass

Test B: Pass

Test D: Fail

Test E: Pass

Release 2.3

Test A: Pass

Test B: Fail

Test C: Pass

Calendar Timeline (Time-Independent)

Week 1

Week 2

Week 3

Week 4

Grouped by release tag,not execution time

Grouped by release association, not execution time

## Current Scope: Understanding Latest Test Status

### What Current Scope Does

Current scope shows the most recent execution result for each test case, creating a snapshot of your test suite's current state. Each test case appears exactly once—with its latest result.

Technical definition: TestOps queries MAX(execution_time) per test_case_id and returns only those latest executions.

## Decision Framework: Which Scope Should I Use?

Choosing the right scope depends on the question you're trying to answer. Use this decision table to quickly identify the appropriate scope:

My QuestionUse This ScopeWhyHow many tests ran last week?Time-Based (Last 7 days)Counts all executions within time windowIs Release 2.5 ready to ship?Release-Based (2.5)Release-specific quality assessmentWhat's my current pass rate?CurrentLatest status snapshot per test caseHow is our quality trending this month?Time-Based (Last 30 days)Time-based trend analysis with historical dataWhich release had better quality: 2.4 or 2.5?Release-Based (2.4, 2.5)Multi-release comparisonWhich test cases are currently failing?Current + Failed filterLatest status per test case, filtered to failures onlyDid we have any test failures yesterday?Time-Based (Last 24 hours)Executions within specific time periodHow many test cases do we have total?CurrentEach test case counted once (inventory)How complete is testing for Release 3.0?Release-Based (3.0)Release-specific progress trackingAre we executing more tests this sprint than last?Time-Based (This Sprint)Compare execution volume over time

### Time-Based Scope: Detailed Usage Guide

### Release-Based Scope: Detailed Usage Guide

### Current Scope: Detailed Usage Guide

### Common Scope Selection Mistakes

### How Scope Affects Metric Calculations

### Real-World Scenario Examples

## Summary

Analysis Scope is a foundational concept in TestOps that determines which data universe you analyze before applying filters or viewing metrics. Choosing the right scope ensures you're answering the right question with the right data.

Quick reference:

- Time-Based: Use for trend analysis, operational monitoring, and time-based questions

- Release-Based: Use for release readiness, version comparison, and release-specific questions

- Current: Use for status snapshots, test case inventory, and "right now" questions

Remember: Scope defines the data universe; filters narrow within it. Choose scope first based on your question, then apply filters to refine your analysis.

Next steps:

- Practice selecting scopes using the [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope) tutorial

- Learn about scope-specific features in [Dashboard Configuration Guide](/docs/dashboards/how-to/configuration)

- Explore release-specific analysis in [Assessing Release Readiness](/docs/release-readiness/assessing-release-readiness)

## See Also

- [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope) - Hands-on tutorial for selecting and applying scopes

- [Build Advanced Filter Combinations](/docs/getting-started/build-advanced-filter-combinations) - Complex filter combinations with scope

- [Getting Started with Reports & Analytics](/docs/getting-started/introduction) - Foundation concepts

- [Understanding Report Types](/docs/getting-started/understanding-report-types) - Dashboard vs Report differences

- [Release Metrics & Tracking](/docs/release-readiness/release-metrics-tracking) - Release-Based scope in practice

- [Dashboard Configuration Guide](/docs/dashboards/how-to/configuration) - Configuring scope at dashboard level

[Understanding Report TypesLearn the conceptual differences between dashboards and reports in Katalon TestOps, understand when to use each, and make informed decisions about which tool best fits your monitoring and analysis needs.](/docs/getting-started/understanding-reports-vs-dashboards)[Using Filters & Analysis ScopeHands-on tutorial teaching you how to use filters and analysis scope to focus your Reports & Analytics data on specific time periods, releases, and test execution criteria.](/docs/getting-started/understanding-analysis-scope)

Getting Started
# Understanding Report Types

Learn the conceptual differences between dashboards and reports in Katalon TestOps, understand when to use each, and make informed decisions about which tool best fits your monitoring and analysis needs.

# Understanding Report Types

Katalon TestOps provides two primary tools for visualizing and analyzing test data: Dashboards and Reports. While they both help you understand your testing quality and progress, they serve fundamentally different purposes and are designed for different use cases.

This guide explains the conceptual differences between these two report types, helping you choose the right tool for your needs.

## What Are Dashboards?

Dashboards are interactive, real-time monitoring views that provide immediate visibility into your testing operations. Think of a dashboard like the instrument panel in a car—it shows you what's happening right now and alerts you to issues that need immediate attention.

### Dashboard Characteristics

- Real-time data: Updates continuously as new test results arrive

- Live monitoring focus: Designed for active observation and quick decision-making

- Interactive widgets: Click, filter, and drill down into specific data points

- Customizable layouts: Arrange widgets to prioritize the metrics that matter most to your team

- Team collaboration: Multiple team members can view the same dashboard simultaneously

- At-a-glance insights: Visual indicators (colors, charts, gauges) highlight status instantly

### Types of Dashboards in TestOps

TestOps provides several pre-configured dashboards tailored to specific monitoring needs:

Live Monitor Dashboard

- Purpose: Track all test executions in real-time across your organization

- Use when: You need to monitor active test runs, identify failures immediately, or observe overall testing activity

Project Dashboard

- Purpose: Monitor quality metrics and trends for a specific project

- Use when: You're responsible for a particular project and need comprehensive project-level visibility

Release Health Dashboard

- Purpose: Assess the quality and readiness of a specific release

- Use when: You're preparing for a release and need to evaluate test pass rates, flakiness, and coverage

Release Readiness Dashboard

- Purpose: Track progress toward release goals with pass/fail criteria

- Use when: You need to determine if a release meets predefined quality gates before deployment

Figure 1: The Dashboards landing page showing all available dashboard types with real-time indicators. Each dashboard tile displays a preview of current metrics and provides immediate access to live monitoring views.

## What Are Reports?

Reports are analytical documents that provide deep insights into specific aspects of your testing operations over a defined time period. Think of a report like a trip log or flight recorder—it captures what happened in the past so you can analyze trends, identify patterns, and make informed strategic decisions.

### Report Characteristics

- Historical data: Analyzes data from a specific time period (last sprint, last release, last 30 days)

- Analytical focus: Designed for investigation, root cause analysis, and trend identification

- Static snapshots: Generated at a specific point in time for documentation and sharing

- Detailed information: Provides comprehensive data tables, drilldowns, and contextual details

- Exportable: Can be downloaded as PDF, Excel, or CSV for stakeholder distribution

- Compliance-ready: Serves as evidence for audits, regulatory reviews, and documentation requirements

### Categories of Reports in TestOps

TestOps organizes reports into four main categories based on their analytical purpose:

Test Execution Analysis

- Focus on execution metrics, pass/fail rates, test run status, and execution patterns

- Examples: Test Runs Analysis, Test Results Analysis, Test Case Status Analysis

Coverage & Traceability

- Focus on measuring test coverage across requirements and configurations, with end-to-end traceability

- Examples: Requirements Coverage Analysis, Configuration Coverage Analysis, Requirement Traceability Analysis

Failure & Quality Analysis

- Focus on understanding test failures, error patterns, and defect trends to improve quality

- Examples: Test Failures Analysis, Common Automation Errors, Defects Activity Analysis, Defect Status Analysis, Defect Trend Analysis

Test Case Management

- Focus on test case lifecycle, publishing activity, and automation progress tracking

- Examples: Test Cases Publishing Activity Analysis, Automation Progress Analysis

Figure 2: The Reports landing page showing categorized report types. Each category groups related reports together, making it easy to find the right analysis tool for your specific question or investigation.

## Key Differences Explained

Understanding when to use dashboards versus reports comes down to understanding six fundamental differences:

AspectDashboardsReportsData FreshnessReal-time, continuously updatingPoint-in-time snapshot, static after generationPrimary Use CaseMonitoring current activity, immediate alertsAnalyzing historical trends, deep investigationTime Scope"What's happening now?" or "How are we trending?""What happened during [specific period]?"InteractivityHighly interactive with drill-down, filtering, live updatesStatic or limited interactivity; designed for reading and sharingDetail DepthHigh-level overview with ability to drill downComprehensive detail with tables, lists, and contextual informationOutput FormatInteractive web view onlyExportable (PDF, Excel, CSV) for distribution and compliance

### Data Freshness

Dashboards show you the current state of your testing operations. When a test run completes, dashboard widgets update immediately to reflect the new results. This makes dashboards ideal for scenarios where you need to react quickly to failures or monitor progress throughout the day.

Reports capture data from a defined time period and generate a snapshot at a specific moment. Once generated, a report's data doesn't change—even if new test results arrive. This makes reports ideal for documenting quality status at a specific milestone (e.g., end of sprint, release approval) or comparing different time periods.

### Use Case Focus

Dashboards answer questions like:

- "Are there any failing tests right now?"

- "How is our pass rate trending this week?"

- "Which teams are running tests today?"

- "Is this release improving or degrading?"

Reports answer questions like:

- "What were the most common failure types last sprint?"

- "Which requirements still lack test coverage?"

- "How does our automation coverage compare to last quarter?"

- "Which test cases have been failing consistently?"

### Interactivity

Dashboards are built for interaction. You can:

- Click on chart elements to drill down into specific test runs

- Apply filters to focus on specific projects, releases, or configurations

- Adjust time ranges to see different trend windows

- Rearrange widgets to prioritize the information you need most

Reports are designed for reading and documentation. While some reports offer limited filtering (usually set at generation time), they're primarily meant to be read, reviewed, and shared with stakeholders who need comprehensive information about a specific aspect of testing.

### Detail Depth

Dashboards prioritize high-level visibility. A widget might show you "Pass Rate: 85%" with a trend line, giving you instant awareness of status without overwhelming detail.

Reports provide comprehensive detail. A pass rate report would show not just the overall percentage, but a breakdown by test suite, execution environment, time period, and potentially a list of every test result included in the calculation.

## Choosing the Right Tool

Select the tool based on your immediate need:

### Use a Dashboard When:

✅ You need real-time visibility

- Monitoring test executions as they run

- Tracking live build status in a CI/CD pipeline

- Observing team activity throughout the day

✅ You need to react quickly

- Identifying and responding to test failures immediately

- Alerting teams to quality regressions as they happen

- Making go/no-go decisions based on current data

✅ You want interactive exploration

- Investigating different time ranges, filters, or breakdowns

- Drilling down from high-level metrics to specific test results

- Collaborating with team members in real-time

✅ You need team coordination

- Daily standup meetings where you review current status

- War room scenarios during critical testing periods

- Continuous monitoring on shared team displays

### Use a Report When:

✅ You need historical analysis

- Comparing performance across sprints or releases

- Identifying long-term trends or patterns

- Conducting retrospectives or post-mortems

✅ You need detailed investigation

- Root cause analysis of recurring failures

- Comprehensive coverage analysis across requirements

- Detailed traceability for compliance or audits

✅ You need to share insights

- Distributing quality metrics to stakeholders via email

- Presenting testing progress in executive reviews

- Providing documentation for audits or regulatory reviews

✅ You need point-in-time documentation

- Capturing release readiness status for approval

- Documenting test coverage for specific milestones

- Creating compliance evidence for specific time periods

### Decision Framework: Ask These Questions

- Is the data still changing?

Yes, actively changing → Dashboard
No, analyzing a completed period → Report

- Do you need to react immediately?

Yes, need immediate action → Dashboard
No, analyzing for planning → Report

- Will you export or share this?

Yes, for distribution → Report
No, for live viewing → Dashboard

- How much detail do you need?

High-level monitoring → Dashboard
Comprehensive analysis → Report

- Are you monitoring or investigating?

Monitoring ongoing activity → Dashboard
Investigating specific questions → Report

## How They Work Together

Dashboards and reports aren't competing tools—they're complementary and work best when used together in a coordinated workflow:

### Typical Workflow Pattern

- Start with Dashboards for continuous monitoring

Monitor the Release Health Dashboard during your sprint
Notice a concerning trend: pass rate has dropped from 95% to 85% over the past week

- Investigate with Reports when you spot issues

Generate a Failure Pattern Analysis report for the past 7 days
Discover that most failures are concentrated in the login module
Generate a Flaky Test Report to identify unreliable tests

- Return to Dashboards to monitor improvements

After fixing issues, monitor the dashboard to verify pass rate improves
Watch real-time metrics to confirm fixes are effective

- Document with Reports at milestones

At the end of the sprint, generate a Test Run Summary report
Export a Requirement Coverage report to document testing completeness
Share reports with stakeholders to communicate quality status

### Example Scenario: Sprint Quality Management

During the sprint:

- Daily: Check the Project Dashboard each morning to monitor overnight test runs

- Ongoing: Keep the Live Monitor Dashboard visible to catch failures immediately

- Weekly: Review the Release Health Dashboard in team meetings to assess progress

At sprint end:

- Generate: Test Run Summary report for the sprint time period

- Generate: Requirement Coverage report to verify all sprint requirements were tested

- Generate: Flaky Test Report to identify tests that need maintenance

- Export: All reports as PDFs for sprint retrospective and stakeholder review

For retrospective:

- Compare: Current sprint's Test Run Summary with previous sprint's report

- Analyze: Trend data from dashboards over the sprint duration

- Identify: Improvement opportunities based on report findings

## Related Resources

Getting Started:

- [Introduction to Reports & Analytics](/docs/getting-started/introduction) — Overview of the entire Reports & Analytics module

How-To Guides:

- [How to Navigate Dashboards](/docs/dashboards/navigate-dashboards) — Step-by-step guide to using dashboard features

- [How to Generate and Export Reports](/docs/reports/generate-export-reports) — Complete guide to creating reports

- [How to Apply Filters and Analysis Scope](/docs/getting-started/filters-analysis-scope) — Control what data appears in dashboards and reports

Reference:

- [All Reports Reference](/docs/reports/all-reports-reference) — Complete catalog of all available reports

- [Dashboard Types Reference](/docs/dashboards/dashboard-types-reference) — Detailed specifications for each dashboard

- [Report Metrics Glossary](/docs/reference/metrics-glossary) — Definitions of all metrics and KPIs

Explanation:

- [Understanding Filters and Analysis Scope](/docs/getting-started/filters-analysis-scope) — Learn how to control data scope in visualizations

- [Understanding Test Execution Data Model](/docs/concepts/data-model) — Foundational concepts for how TestOps organizes test data

[Core Concepts - Understanding Reports & AnalyticsBuild a mental model of TestOps Reports & Analytics—understand dashboards vs reports, role-based use cases, data models, and how R&A fits into your testing workflow.](/docs/getting-started/why-testops-for-test-analytics)[Understanding Analysis Scope TypesLearn the conceptual differences between Time-Based, Release-Based, and Current scope types in TestOps Reports & Analytics, and understand when to use each for optimal test data analysis and decision-making.](/docs/getting-started/get-started-with-your-project-dashboard)

Getting Started
# Using Filters & Analysis Scope

Hands-on tutorial teaching you how to use filters and analysis scope to focus your Reports & Analytics data on specific time periods, releases, and test execution criteria.

# Using Filters & Analysis Scope

What you'll learn: How to apply basic filters and select analysis scope to focus your data

Estimated Time: 15 minutes

Prerequisites:

- Active TestOps account with access to a project

- Familiarity with basic TestOps navigation

- Test execution data available in your project

## Overview

Filters and analysis scope are the foundation of effective data analysis in Katalon TestOps Reports & Analytics. Analysis Scope defines the universe of data you're analyzing (time period, release, or current snapshot), while Filters narrow that data to specific criteria (test status, platform, configuration, etc.).

Understanding the relationship between scope and filters:

- Scope: Defines WHEN the data comes from (time range, specific releases, or current state)

- Filters: Define WHAT data to include within that scope (which tests, platforms, statuses, etc.)

This hands-on tutorial teaches you the basics of filtering through practical steps. For deeper conceptual understanding, see the companion documents listed below.

📚 Related Documentation:

- [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types) — Deep dive into when and how to use each scope type

- [Build Advanced Filter Combinations](/docs/getting-started/build-advanced-filter-combinations) — Master complex filters, exclusions, performance optimization, and troubleshooting

## Understanding Analysis Scope

TestOps provides three types of analysis scope, each designed for different analysis needs:

### Time-Based Scope

Analyze data within a specific date/time range. Best for tracking trends, comparing performance over time, and monitoring continuous testing activities.

### Release-Based Scope

Analyze data associated with one or more specific releases. Best for assessing release readiness, comparing quality across versions, and generating release-specific reports.

### Current Scope

Analyze the current state of test cases and requirements regardless of execution history. Best for planning, test case management, and requirement tracking.

📖 Learn More: For detailed use cases, limitations, and decision guidance on choosing the right scope type, see [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types).

## Accessing Analysis Scope and Filters

All Reports & Analytics features include analysis scope selection and filtering capabilities.

To Access Scope and Filters:

- Navigate to any dashboard or report:

Visual Dashboards > select a dashboard
Execution Reports > select a report type
Requirement Reports > select a report type

- Locate the Analysis Scope dropdown at the top of the page

Typically positioned in the header area
Shows the currently selected scope (e.g., "Last 30 Days", "Release 2.5.0")

- Locate the Filter Panel

Usually displayed as a sidebar or collapsible panel
Contains multiple filter categories (Status, Platform, Configuration, etc.)
Filter availability varies by report/dashboard type

## Applying Basic Filters

Filters let you narrow your data to specific criteria within your selected analysis scope.

### Method 1: Single Filter Application

Steps:

- Open the Filter Panel (click Filters button if collapsed)

- Select a filter category (e.g., Test Status)

- Choose one or more values:

Click checkbox next to each value you want to include
For single selection, click the value directly (if supported)

- Apply the filter:

Some filters apply automatically upon selection
Others require clicking Apply button

Expected Outcome: The dashboard/report updates to show only data matching your filter criteria. The filter panel displays active filters with a badge count.

Verification: Check the filter panel header for an active filter indicator (e.g., "3 filters applied") and verify the data displayed matches your selection.

### Method 2: Multiple Filter Application

Steps:

- Apply your first filter as described above

- Select additional filter categories:

Platform: Filter by operating system (Windows, macOS, Linux)
Browser: Filter by browser type (Chrome, Firefox, Safari, Edge)
Configuration: Filter by environment or device configuration
Test Type: Filter by manual vs automated tests
Tag/Label: Filter by custom labels or tags

- Choose values for each additional filter

- Click Apply or Apply All Filters (if available)

Expected Outcome: Data is filtered by ALL selected criteria (filters are combined with AND logic by default). Only results matching every filter condition are displayed.

Verification:

- Check the active filter count increases with each filter added

- Review the data to confirm it matches all filter conditions

- Active filters are typically highlighted or badged in the filter panel

### Common Filter Types

Filter TypeCommon ValuesTest StatusPASSED, FAILED, ERROR, INCOMPLETE, SKIPPEDPlatformWindows, macOS, Linux, Android, iOSBrowserChrome, Firefox, Safari, EdgeTest TypeManual, AutomatedTag/LabelUser-defined tags and labels

Note: Available filters vary by report/dashboard type.

🚀 Next Level: Ready for advanced techniques like filter combinations, exclusions, and saved presets? See [Build Advanced Filter Combinations](/docs/getting-started/build-advanced-filter-combinations).

## Selecting Analysis Scope

Your choice of analysis scope determines the data universe for your analysis. Always select scope BEFORE applying filters.

### Time-Based Scope

To Select Time-Based Scope:

- Click the Analysis Scope dropdown at the top of the page

- Select Time-Based (if not already selected)

- Choose a time range:
Quick Ranges (Recommended for common scenarios):

Last 7 Days: Recent week of activity
Last 14 Days: Two-week period
Last 30 Days: Monthly overview
Last 90 Days: Quarterly analysis

Custom Range (For specific date ranges):

Click Custom Range
Select Start Date from date picker
Select End Date from date picker
Click Apply

- Click Apply to update the data

Expected Outcome: All widgets, charts, and tables display data from test executions that occurred within the selected time range.

Verification: Check timestamp ranges in data tables or hover over chart data points to confirm dates fall within your selected range.

📖 Learn More: For detailed guidance on relative vs. absolute time ranges, performance considerations, and time-based scope best practices, see [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types).

### Release-Based Scope

To Select Release-Based Scope:

- Click the Analysis Scope dropdown

- Select Release-Based

- Choose one or more releases:
Single Release:

Click the release name in the dropdown
Click Apply

Multiple Releases (for comparison):

Check the box next to each release you want to include
Click Apply

- The dashboard/report updates to show data from test executions linked to the selected release(s)

Expected Outcome: Data displayed includes only test executions associated with the selected release(s). Test cases not linked to any release are excluded.

Verification:

- Check the scope indicator shows the correct release name(s)

- Verify execution counts match your expectations for that release

- If using multiple releases, confirm comparison views display each release separately

📖 Learn More: For detailed guidance on release boundaries, linkage strategies, and release-based scope best practices, see [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types).

### Current Scope

To Select Current Scope:

- Click the Analysis Scope dropdown

- Select Current

- Click Apply (if required)

Expected Outcome: The view displays the current state of test cases and requirements, independent of execution history. This is a snapshot of your test inventory and requirement status.

Verification: Data shows current metadata (test case details, requirement information, current assignments) without execution-specific information like pass/fail status or execution dates.

📖 Learn More: For detailed explanation of Current scope limitations, when to use it vs. other scope types, and best practices, see [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types).

## Practical Examples

### Example 1: Analyze Failed Tests from Last Sprint

Goal: Find all failed tests from a 2-week sprint

### Navigate to Project Dashboard

Navigate to Visual Dashboards > Project Dashboard.

### Set Analysis Scope

Click scope dropdown → Select Time-Based → Choose Last 14 Days → Click Apply.

### Apply Test Status Filter

Open Filter Panel → Expand Test Status → Check FAILED → Click Apply.

### Review Results

(Optional) Sort by failure frequency to prioritize fixes.

Expected Result: You see all failed test executions from the last 14 days.

Success Check: Scope shows "Last 14 Days", filter shows "Test Status = FAILED", all results show FAILED status.

### Example 2: Monitor Automation Coverage for Smoke Tests

Goal: Check automation coverage for smoke tests

Steps:

- Navigate to Visual Dashboards > Project Dashboard

- Set Analysis Scope: Click scope dropdown → Select Current → Click Apply

- Apply Tag filter: Open Filter Panel → Expand Tag → Check Smoke → Click Apply

- Review Automation Coverage widget to identify manual tests to automate

Expected Result: You see current automation coverage for smoke tests only.

Success Check: Scope shows "Current", filter shows "Tag = Smoke", coverage metric displays percentage

## Next Steps

Congratulations! You've learned the basics of filtering and analysis scope in TestOps. To continue your learning:

Deepen Your Understanding:

- [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types) — Learn when to use each scope type, understand limitations, and make informed decisions

- [Build Advanced Filter Combinations](/docs/getting-started/build-advanced-filter-combinations) — Master complex filter combinations, exclusions, saved presets, and filter hierarchy

- [Build Advanced Filter Combinations](/docs/getting-started/build-advanced-filter-combinations) — Troubleshoot common issues, optimize performance, and apply expert tips

Apply to Specific Features:

- [Project Dashboard](/docs/dashboards/project-dashboard) — Use filtering for comprehensive project-level analysis

- [Release Dashboard](/docs/dashboards/release-dashboard) — Apply release-based scope and filtering

- [Test Results Report](/docs/reports/test-results-report) — Advanced filtering for test execution data

Foundational Guides:

- [Getting Started with Reports & Analytics](/docs/getting-started/introduction) — Overview of Reports & Analytics module

- [Understanding Report Types](/docs/getting-started/report-types) — Learn about different report categories

[Understanding Analysis Scope TypesLearn the conceptual differences between Time-Based, Release-Based, and Current scope types in TestOps Reports & Analytics, and understand when to use each for optimal test data analysis and decision-making.](/docs/getting-started/get-started-with-your-project-dashboard)[Build Advanced Filter CombinationsMaster complex filtering techniques including multi-filter combinations, exclusion logic, filter hierarchy, performance optimization, and custom field filtering for precise data analysis in TestOps Reports & Analytics.](/docs/getting-started/build-advanced-filter-combinations)