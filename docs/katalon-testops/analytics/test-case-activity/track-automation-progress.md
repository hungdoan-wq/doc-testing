# Track Automation Progress

This document is about the Automation Progress Analysis Report.

<!--

Content coming soon.

Test Case ActivityAutomation Progress
# Automation Progress Tracking

Track manual-to-automation migration progress, measure automation adoption rates, and assess automation ROI in Katalon TestOps.

# Automation Progress Tracking

Time required: 15 minutes
Prerequisites:

- Access to TestOps Reports & Analytics

- Mix of manual and automated test cases in project

- Familiarity with [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope)

Related guides:

- [Test Case Quality & Reliability Tracking](/docs/test-case-reports/test-case-status-tracking)

- [Test Case Activity & Productivity Metrics](/docs/test-case-reports/team-productivity-metrics)

## Overview

The Automation Progress report helps QA managers and automation leads measure automation adoption velocity, justify investment in test automation, and track team progress toward automation goals. This report answers critical business questions: "Are we automating fast enough? What's our return on automation investment? Which test suites should we prioritize for automation?"

Use this report to set sprint automation targets, measure team performance against benchmarks, calculate time savings from automation, and demonstrate value to stakeholders.

## How to Access the Report

- Navigate to Reports in the main menu

- Select Automation Progress Analysis

- The report loads with default settings showing:

Progress indicator: Current automation rate percentage
Trend visualization: Automation rate over time
Distribution chart: Manual vs automated test counts
Data table: Individual test case details with type classification

## How to Configure Report Filters

Customize the report scope using these filters:

FilterAvailable OptionsBest Use CaseTime RangeLast 30/60/90 days, Custom rangeTrack migration velocity over sprints or quartersProjectSingle or multiple projectsCompare automation progress across teamsTest Suite/ModuleGrouping by feature areaMeasure module-level automation coverageTest TypeManual, Automated, or BothFocus on specific test categoriesTeam/OwnerFilter by assigneeBenchmark team performance

### Example Filter Configurations

Configuration 1: Sprint Automation Tracking

- Time Range: Last 30 days (2-week sprint × 2)

- Project: Mobile Banking App

- Test Suite: Login & Authentication

- Use case: Track progress toward 60% automation goal for security-critical features

Configuration 2: Cross-Team Benchmarking

- Time Range: Last 90 days (quarter)

- Project: All projects

- Team/Owner: Compare Team A vs Team B

- Use case: Identify best practices from highest-performing teams

## Understanding Automation Rate Calculation

Automation Rate Formula:

Automation Rate = (Number of Automated Test Cases / Total Test Cases) × 100%

Example: 120 automated tests out of 200 total = 60% automation rate

### What Different Rates Mean

Automation RateInterpretationTypical Stage0-30%Early automation phaseInitial setup, pilot projects30-60%Growing automation adoptionActive migration, skill building60-80%Mature automation practiceOptimization, maintenance focus80-100%Comprehensive automationMaintenance mode, selective manual testing

Note: 100% automation is rarely the goal. Critical edge cases, exploratory testing, and UX validation often require manual execution.

## How to Interpret Visualizations

### Progress Indicator and Trend Line

The progress indicator shows your current automation rate as a percentage. The accompanying trend line reveals migration velocity over your selected time range.

Healthy trend patterns:

#_r_5l_{margin:1.5rem auto 0;}#_r_5l_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_5l_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_5l_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_5l_ .error-icon{fill:#552222;}#_r_5l_ .error-text{fill:#552222;stroke:#552222;}#_r_5l_ .edge-thickness-normal{stroke-width:1px;}#_r_5l_ .edge-thickness-thick{stroke-width:3.5px;}#_r_5l_ .edge-pattern-solid{stroke-dasharray:0;}#_r_5l_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_5l_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_5l_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_5l_ .marker{fill:#333333;stroke:#333333;}#_r_5l_ .marker.cross{stroke:#333333;}#_r_5l_ svg{font-family:inherit;font-size:16px;}#_r_5l_ p{margin:0;}#_r_5l_ .label{font-family:inherit;color:#333;}#_r_5l_ .cluster-label text{fill:#333;}#_r_5l_ .cluster-label span{color:#333;}#_r_5l_ .cluster-label span p{background-color:transparent;}#_r_5l_ .label text,#_r_5l_ span{fill:#333;color:#333;}#_r_5l_ .node rect,#_r_5l_ .node circle,#_r_5l_ .node ellipse,#_r_5l_ .node polygon,#_r_5l_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_5l_ .rough-node .label text,#_r_5l_ .node .label text,#_r_5l_ .image-shape .label,#_r_5l_ .icon-shape .label{text-anchor:middle;}#_r_5l_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_5l_ .rough-node .label,#_r_5l_ .node .label,#_r_5l_ .image-shape .label,#_r_5l_ .icon-shape .label{text-align:center;}#_r_5l_ .node.clickable{cursor:pointer;}#_r_5l_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_5l_ .arrowheadPath{fill:#333333;}#_r_5l_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_5l_ .flowchart-link{stroke:#333333;fill:none;}#_r_5l_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_5l_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_5l_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_5l_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_5l_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_5l_ .cluster text{fill:#333;}#_r_5l_ .cluster span{color:#333;}#_r_5l_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_5l_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_5l_ rect.text{fill:none;stroke-width:0;}#_r_5l_ .icon-shape,#_r_5l_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_5l_ .icon-shape p,#_r_5l_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_5l_ .icon-shape rect,#_r_5l_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_5l_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_5l_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_5l_ :root{--mermaid-font-family:inherit;}
Month 1: 30%

Month 2: 45%

Month 3: 60%

Month 4: 70%

Concerning trend patterns:

#_r_5m_{margin:1.5rem auto 0;}#_r_5m_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_5m_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_5m_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_5m_ .error-icon{fill:#552222;}#_r_5m_ .error-text{fill:#552222;stroke:#552222;}#_r_5m_ .edge-thickness-normal{stroke-width:1px;}#_r_5m_ .edge-thickness-thick{stroke-width:3.5px;}#_r_5m_ .edge-pattern-solid{stroke-dasharray:0;}#_r_5m_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_5m_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_5m_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_5m_ .marker{fill:#333333;stroke:#333333;}#_r_5m_ .marker.cross{stroke:#333333;}#_r_5m_ svg{font-family:inherit;font-size:16px;}#_r_5m_ p{margin:0;}#_r_5m_ .label{font-family:inherit;color:#333;}#_r_5m_ .cluster-label text{fill:#333;}#_r_5m_ .cluster-label span{color:#333;}#_r_5m_ .cluster-label span p{background-color:transparent;}#_r_5m_ .label text,#_r_5m_ span{fill:#333;color:#333;}#_r_5m_ .node rect,#_r_5m_ .node circle,#_r_5m_ .node ellipse,#_r_5m_ .node polygon,#_r_5m_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_5m_ .rough-node .label text,#_r_5m_ .node .label text,#_r_5m_ .image-shape .label,#_r_5m_ .icon-shape .label{text-anchor:middle;}#_r_5m_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_5m_ .rough-node .label,#_r_5m_ .node .label,#_r_5m_ .image-shape .label,#_r_5m_ .icon-shape .label{text-align:center;}#_r_5m_ .node.clickable{cursor:pointer;}#_r_5m_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_5m_ .arrowheadPath{fill:#333333;}#_r_5m_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_5m_ .flowchart-link{stroke:#333333;fill:none;}#_r_5m_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_5m_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_5m_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_5m_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_5m_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_5m_ .cluster text{fill:#333;}#_r_5m_ .cluster span{color:#333;}#_r_5m_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_5m_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_5m_ rect.text{fill:none;stroke-width:0;}#_r_5m_ .icon-shape,#_r_5m_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_5m_ .icon-shape p,#_r_5m_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_5m_ .icon-shape rect,#_r_5m_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_5m_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_5m_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_5m_ :root{--mermaid-font-family:inherit;}
Month 1: 50%

Month 2: 52%

Month 3: 48%

Month 4: 51%

What to look for:

- Steady upward trend: Indicates consistent automation effort

- Plateau: May signal technical debt, skill gaps, or prioritization issues

- Decline: Manual tests added faster than automation (common during major releases)

- Sharp increase: Successful automation sprint or bulk migration

### Distribution Charts

The stacked bar chart or pie chart shows the proportion of manual versus automated tests at different points in time.

Interpreting distribution shifts:

- Growing blue (automated) sections: Successful migration progress

- Shrinking red (manual) sections: Automation catching up with manual test creation

- Both sections growing: Active development with parallel automation efforts

## How to Use the Data Table

The data table provides test case-level details for drilling into automation status.

Key columns:

- Test Case ID/Name: Unique identifier and descriptive name

- Type: Manual or Automated classification

- Migration Date: When test was automated (if applicable)

- Module/Suite: Grouping for organization

- Owner/Team: Responsible party

Table capabilities:

- Sort by any column to identify patterns (e.g., oldest manual tests)

- Filter by test type to focus on specific categories

- Search for specific test cases or modules

- Export to CSV/Excel for stakeholder reports

## Common Use Cases & Workflows

WorkflowGoalKey StepsSuccess MetricSprint Automation GoalsTrack sprint targets1. Set target % (e.g., +5%)2. Filter to current sprint3. Compare actual vs target4. Adjust priorities if behindMeet or exceed sprint targetROI MeasurementJustify automation investment1. Calculate tests automated2. Estimate time saved3. Calculate cost-benefit4. Present to stakeholdersPositive ROI within 6 monthsTeam BenchmarkingCompare team performance1. Filter by team/owner2. Compare automation rates3. Identify high performers4. Share best practicesAll teams within 10% of averagePrioritization PlanningIdentify automation candidates1. Sort by execution frequency2. Filter manual tests3. Rank by business impact4. Create automation backlogHigh-value tests automated first

### Detailed Workflow: Measuring Automation ROI

Demonstrating return on investment is critical for securing continued automation resources. Follow this workflow to calculate and present automation value.

Step 1: Gather baseline metrics

- Count total automated tests in current period

- Note the time period (e.g., 6 months)

- Identify average manual execution time per test (e.g., 15 minutes)

- Determine average test execution frequency per month

Step 2: Calculate time savings

Use this formula:

Time Saved = (Automated Tests × Avg Manual Time × Execution Frequency × Months)

Example calculation:

- 80 tests automated over 6 months

- Each test takes 15 minutes manually

- Tests run 4 times per month (weekly)

- Time saved = 80 × 15 min × 4 runs × 6 months = 28,800 minutes (480 hours)

Step 3: Calculate cost-benefit

- Investment: Tester time spent automating (e.g., 200 hours at $50/hr = $10,000)

- Savings: Manual execution time saved (480 hours at $50/hr = $24,000)

- Net ROI: ($24,000 - $10,000) / $10,000 = 140% ROI

Step 4: Present findings

Create a summary table:

MetricValueTests Automated80Time Period6 monthsManual Hours Saved480 hoursAutomation Investment$10,000Value Generated$24,000Net ROI140%

Step 5: Set future targets

- Use trend line to project next quarter's automation rate

- Estimate additional ROI from continued automation

- Adjust resource allocation based on demonstrated value

## Decision Framework: Automation Prioritization

Not all tests should be automated immediately. Use this decision tree to prioritize automation efforts:

#_r_5n_{margin:1.5rem auto 0;}#_r_5n_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_5n_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_5n_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_5n_ .error-icon{fill:#552222;}#_r_5n_ .error-text{fill:#552222;stroke:#552222;}#_r_5n_ .edge-thickness-normal{stroke-width:1px;}#_r_5n_ .edge-thickness-thick{stroke-width:3.5px;}#_r_5n_ .edge-pattern-solid{stroke-dasharray:0;}#_r_5n_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_5n_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_5n_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_5n_ .marker{fill:#333333;stroke:#333333;}#_r_5n_ .marker.cross{stroke:#333333;}#_r_5n_ svg{font-family:inherit;font-size:16px;}#_r_5n_ p{margin:0;}#_r_5n_ .label{font-family:inherit;color:#333;}#_r_5n_ .cluster-label text{fill:#333;}#_r_5n_ .cluster-label span{color:#333;}#_r_5n_ .cluster-label span p{background-color:transparent;}#_r_5n_ .label text,#_r_5n_ span{fill:#333;color:#333;}#_r_5n_ .node rect,#_r_5n_ .node circle,#_r_5n_ .node ellipse,#_r_5n_ .node polygon,#_r_5n_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_5n_ .rough-node .label text,#_r_5n_ .node .label text,#_r_5n_ .image-shape .label,#_r_5n_ .icon-shape .label{text-anchor:middle;}#_r_5n_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_5n_ .rough-node .label,#_r_5n_ .node .label,#_r_5n_ .image-shape .label,#_r_5n_ .icon-shape .label{text-align:center;}#_r_5n_ .node.clickable{cursor:pointer;}#_r_5n_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_5n_ .arrowheadPath{fill:#333333;}#_r_5n_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_5n_ .flowchart-link{stroke:#333333;fill:none;}#_r_5n_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_5n_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_5n_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_5n_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_5n_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_5n_ .cluster text{fill:#333;}#_r_5n_ .cluster span{color:#333;}#_r_5n_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_5n_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_5n_ rect.text{fill:none;stroke-width:0;}#_r_5n_ .icon-shape,#_r_5n_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_5n_ .icon-shape p,#_r_5n_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_5n_ .icon-shape rect,#_r_5n_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_5n_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_5n_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_5n_ :root{--mermaid-font-family:inherit;}
Yes

No

Yes

No

Yes

No

Yes

No

Manual Test Case

High ExecutionFrequency?

Stable UI/API?

High BusinessImpact?

Automate NowHigh Priority

Defer UntilFeature Stabilizes

Complex orTime-Consuming?

Keep ManualLow ROI

Medium PriorityAutomate AfterHigh Priority Tests

Priority ranking criteria:

FactorWeightScoringExecution frequency40%Daily=10, Weekly=7, Monthly=4, Ad-hoc=1Business impact30%Critical=10, High=7, Medium=4, Low=1Automation difficulty20%Easy=10, Moderate=6, Complex=2Test stability10%Stable=10, Changing=5, Unstable=1

Calculate a composite score to rank test cases objectively.

## Troubleshooting

### What's a healthy automation rate for my team?

### How fast should we automate? What's a realistic velocity?

### Should we automate everything? When to keep tests manual?

### How do I prioritize which test cases to automate first?

## Role-Based Workflows

[### Automation Engineer Workflow
See how Automation Engineers track automation progress to measure manual-to-automation migration velocity, assess automation ROI, and prioritize test cases for automation based on execution frequency and stability.](/docs/workflows/automation-engineer)

## See Also

- [Test Case Quality & Reliability Tracking](/docs/test-case-reports/test-case-status-tracking) - Monitor test pass rates and failure patterns

- [Test Case Activity & Productivity Metrics](/docs/test-case-reports/team-productivity-metrics) - Measure team output and testing velocity

- [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope) - Master report filtering techniques

- [Understanding Core Concepts](/docs/getting-started/core-concepts) - Learn TestOps terminology and data model

[Test Case Activity & Productivity MetricsTrack team productivity through test case publishing activity, monitor test case creation velocity, and identify productivity patterns in Katalon TestOps.](/docs/test-case-reports/publishing-lifecycle/analyze-team-productivity)[Configuration & Sharing OverviewLearn how to share TestOps dashboards and reports with external stakeholders, export data for analysis, and configure access control for collaboration without license barriers.](/docs/configuration-sharing/configuration-and-sharing-overview)

-->