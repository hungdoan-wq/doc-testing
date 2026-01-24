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