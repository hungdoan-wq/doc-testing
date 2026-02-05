# Monitor Test Case Productivity

This document is about the Test Case Publishing Activity Analysis Report.

<!--

Content coming soon.
Test Case ActivityPublishing & Lifecycle
# Test Case Activity & Productivity Metrics

Track team productivity through test case publishing activity, monitor test case creation velocity, and identify productivity patterns in Katalon TestOps.

# Test Case Activity & Productivity Metrics

Time required: 15 minutes

Prerequisites:

- Access to TestOps Reports & Analytics

- Project with test cases created or modified by team members

- Familiarity with [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope)

Related guides:

- [Test Case Quality & Reliability Tracking](/docs/test-case-reports/test-case-status-tracking)

- [Automation Progress Tracking](/docs/test-case-reports/automation-progress-tracking)

## Overview

The Test Case Publishing Activity report helps QA Managers and Team Leads track test case creation velocity and monitor team productivity. This report answers critical questions: "Is my team creating tests fast enough? Which team members are most productive? Are we maintaining healthy growth?"

Use this report for sprint velocity tracking, capacity planning, and onboarding effectiveness measurement. Analyze publishing activity over time to identify bottlenecks, balance workload, and forecast testing capacity.

Key benefits:

- Sprint velocity tracking: Monitor test case creation rates per sprint to measure team throughput

- Capacity planning: Understand team test creation capacity for project planning

- Onboarding effectiveness: Measure new team member ramp-up through publishing activity

- Inventory growth: Ensure test coverage expands in line with product features

## How to Access the Publishing Activity Report

Navigate to the Test Case Publishing Activity report:

- From the main TestOps menu, go to Reports > All Reports

- Find and select Test Case Activity During Period By Status

- Alternatively, access from Home > Project Dashboard by clicking an embedded Test Case Activity chart

The report opens with three main sections:

- Bar chart: Test case activity by status over time

- Statistics panels: Test cases by status and published test cases by type

- Data table: Detailed test case records with filters

## How to Configure Filters

The report provides three global filters to focus on specific time periods, intervals, and test case types:

FilterOptionsWhen to UseDate RangeDate picker (default: 28 days)Sprint dropdown (only sprints with start and end times)Use Date Range for flexible analysis periods (quarter, month, specific weeks).Use Sprint to align activity tracking with sprint boundaries.IntervalDaily (default)WeeklyMonthlyQuarterlyMatch interval to your reporting cadence:Daily for sprint-level trackingWeekly for monthly reviewsMonthly for quarterly planningQuarterly for executive reportingTest Case TypeAutomated onlyManual onlyBoth (default)Track automation vs manual test development separately.Measure automation team productivity independently.Compare velocity between manual and automated test creation.

Example filter configurations:

ScenarioDate RangeIntervalTypeGoalSprint VelocityCurrent sprintDailyBothTrack daily test case creation rate during sprintAutomation Team CapacityLast 4 weeksWeeklyAutomated onlyMeasure automation team weekly throughputManual Testing FocusLast quarterMonthlyManual onlyUnderstand manual test inventory growth

## How to Interpret Visualizations

The report provides multiple visualizations to help you understand team productivity patterns.

### Main Bar Chart: Test Case Activity Over Time

The bar chart displays test case counts by status across your selected time period. Each bar represents a time unit (day, week, month, or quarter), stacked by test case status.

Chart structure:

- X-axis: Time units (daily, weekly, monthly, or quarterly based on Interval filter)

- Y-axis: Count of test cases

- Stacked bars: Four status categories

Draft: Test cases in initial creation phase
Ready to Review: Completed and awaiting review
In Review: Currently under review
Published: Approved and available for execution

How to read the chart: Hover over any bar to see the time period (e.g., "Week of March 15" or "March 20, 2024") and count of test cases by each status.

What to look for (decision tree):

#_r_10s_{margin:1.5rem auto 0;}#_r_10s_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_10s_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_10s_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_10s_ .error-icon{fill:#552222;}#_r_10s_ .error-text{fill:#552222;stroke:#552222;}#_r_10s_ .edge-thickness-normal{stroke-width:1px;}#_r_10s_ .edge-thickness-thick{stroke-width:3.5px;}#_r_10s_ .edge-pattern-solid{stroke-dasharray:0;}#_r_10s_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_10s_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_10s_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_10s_ .marker{fill:#333333;stroke:#333333;}#_r_10s_ .marker.cross{stroke:#333333;}#_r_10s_ svg{font-family:inherit;font-size:16px;}#_r_10s_ p{margin:0;}#_r_10s_ .label{font-family:inherit;color:#333;}#_r_10s_ .cluster-label text{fill:#333;}#_r_10s_ .cluster-label span{color:#333;}#_r_10s_ .cluster-label span p{background-color:transparent;}#_r_10s_ .label text,#_r_10s_ span{fill:#333;color:#333;}#_r_10s_ .node rect,#_r_10s_ .node circle,#_r_10s_ .node ellipse,#_r_10s_ .node polygon,#_r_10s_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_10s_ .rough-node .label text,#_r_10s_ .node .label text,#_r_10s_ .image-shape .label,#_r_10s_ .icon-shape .label{text-anchor:middle;}#_r_10s_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_10s_ .rough-node .label,#_r_10s_ .node .label,#_r_10s_ .image-shape .label,#_r_10s_ .icon-shape .label{text-align:center;}#_r_10s_ .node.clickable{cursor:pointer;}#_r_10s_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_10s_ .arrowheadPath{fill:#333333;}#_r_10s_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_10s_ .flowchart-link{stroke:#333333;fill:none;}#_r_10s_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_10s_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_10s_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_10s_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_10s_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_10s_ .cluster text{fill:#333;}#_r_10s_ .cluster span{color:#333;}#_r_10s_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_10s_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_10s_ rect.text{fill:none;stroke-width:0;}#_r_10s_ .icon-shape,#_r_10s_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_10s_ .icon-shape p,#_r_10s_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_10s_ .icon-shape rect,#_r_10s_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_10s_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_10s_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_10s_ :root{--mermaid-font-family:inherit;}
Yes

No

Yes

No

Review Bar Chart

High Draft Count?

Check Review Process

Low Published Count?

Assess Team Capacity

Healthy Velocity

Action: Improve Review SLA

Action: Add Resources or Reduce Scope

Status interpretation guide:

PatternIndicationRecommended ActionConsistent bar heightsSteady productivityContinue monitoring trendsIncreasing bar heightsAccelerating test creation velocitySustain momentum, document practicesDecreasing bar heightsCapacity constraints or shifting prioritiesInvestigate team capacity and prioritiesHigh Draft percentageTest cases not progressing to completionSupport authors with clarity, training, or capacityHigh Ready to Review percentageReview assignment bottleneckIncrease review capacity or set review SLAsHigh In Review percentageReview completion bottleneckStreamline review process, add reviewersHigh Published percentageEfficient workflow from creation to completionMaintain current practicesBalanced distributionHealthy pipeline with steady flowContinue monitoring for changes

### Statistics: Test Case by Status

The first statistics panel shows the status breakdown of test cases created or modified during the selected period, displaying total count and percentage for each status.

Healthy distribution benchmarks:

DistributionStatus PercentagesWarning SignsHealthyDraft: 15-20%Ready to Review: 5-10%In Review: 5-10%Published: 65-75%Published less than 50%: Low completion rate, investigate workflowDraft greater than 40%: Team struggling to complete test casesReady to Review greater than 20%: Review capacity insufficientIn Review greater than 15%: Review process bottleneck

How to use this data:

- Compare your current distribution to healthy benchmarks

- Identify which status has the highest accumulation

- Focus improvement efforts on the bottleneck status

- Track status distribution trends over time (improving or worsening)

### Statistics: Published Test Case by Type

The second statistics panel shows the automation breakdown of published test cases (Manual only vs Automated only).

How to interpret:

- High manual percentage (greater than 70%): May indicate early automation phase or manual-heavy project

- High automated percentage (greater than 70%): Mature automation program

- Balanced distribution (40-60% each): Mixed approach or transition period

Use this data for:

- Tracking automation adoption progress over time

- Comparing team focus on manual vs automated testing

- Planning training or hiring based on automation gaps

- Setting automation goals for upcoming sprints

Optional pie chart view: Switch to pie chart view for a visual representation of test case type distribution. Click the chart type toggle button and select Pie Chart. Each slice represents Manual only or Automated only test cases with percentage and count. Click any slice to filter the data table by that type.

## How to Use the Data Table

The data table lists individual test case records with six columns: Test Case Created At (sortable), ID (clickable), Name, Status, Type, and Author.

Table filters:

FilterOptionsDefaultUse CaseDate RangeDate pickerGlobal filter time rangeNarrow focus to specific weeks or days within larger periodTest Case StatusMulti-select: Draft, Ready to Review, In Review, PublishedAll statusesIsolate test cases in specific statuses for bottleneck analysisTest Case TypeMulti-select: Automated, ManualBothSeparate automation from manual test case analysisAuthorMulti-select: All team membersAll authorsAnalyze individual team member productivity

Common table operations:

Find newest test cases: Click Test Case Created At column header to sort descending (newest on top), then review recent team output.

Analyze individual productivity: Open Author filter dropdown, select one team member, review their test case count, types, and status distribution, then compare to team average.

Identify bottlenecks: Open Status filter dropdown, select "Draft" only, check which authors have many incomplete test cases, follow up with team members needing support.

## Common Use Cases & Workflows

WorkflowGoalKey StepsSuccess MetricSprint Velocity TrackingMonitor test case creation rate per sprint to measure team throughput1. Filter to current sprint (Daily interval)2. Check Published count in statistics3. Compare to previous sprint4. Calculate velocity change percentageConsistent or increasing velocity sprint over sprint (e.g., Sprint 1: 45 published, Sprint 2: 52 published = +15% velocity increase)Team Capacity PlanningUnderstand team test creation capacity for project planning and staffing decisions1. Last 8-12 weeks, Weekly interval2. Calculate total Published ÷ number of weeks = average weekly capacity3. Filter by Author for individual productivity4. Calculate median productivityBalanced workload distribution (no single team member producing 50%+ of test cases or producing zero), consistent weekly average capacityOnboarding EffectivenessMeasure new team member ramp-up through publishing activity to validate onboarding process1. Filter by new hire Author2. Track Month 1 (expect 5-10 published), Month 2 (expect 15-25 published), Month 3 (expect approaching team avg)3. Compare Month 3 output to team averageNew hire at 80-100% of team average by Day 90

Onboarding intervention triggers:

- Month 1: Zero Published test cases (immediate support needed)

- Month 2: Published count less than 10 (review training effectiveness)

- Month 3: Published count less than 50% of team average (reassess role fit or provide additional support)

## Troubleshooting & Common Questions

### Why are test cases stuck in Draft status?

### How do I compare productivity across sprints?

### What's a healthy test case creation rate?

## Role-Based Workflows

[### QA Manager Workflow
See how QA Managers track team productivity metrics, monitor test case creation velocity, identify productivity patterns, and use activity data for sprint planning and retrospectives.](/docs/workflows/qa-manager)

## See Also

- [Test Case Quality & Reliability Tracking](/docs/test-case-reports/test-case-status-tracking) - Monitor test case quality and stability metrics

- [Automation Progress Tracking](/docs/test-case-reports/automation-progress-tracking) - Track automation adoption and coverage

- [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope) - Master filtering techniques for all reports

- [All Reports Reference](/docs/getting-started/all-reports-reference) - Complete catalog of available reports

[Test Case Quality & Reliability TrackingMonitor test case execution health, identify problematic test cases, and assess automation effectiveness through pass rate analysis in Katalon TestOps.](/docs/test-case-reports/health-stability/track-test-case-status)[Automation Progress TrackingTrack manual-to-automation migration progress, measure automation adoption rates, and assess automation ROI in Katalon TestOps.](/docs/test-case-reports/automation-progress/track-automation-progress)

-->