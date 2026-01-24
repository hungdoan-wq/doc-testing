# Track Historical Quality Trends

Content coming soon.
Dashboards

Dashboards
# Tracking Historical Quality Trends

Learn how to track quality trends over time using the Analytics & Trends Dashboard. This hands-on tutorial teaches you to apply Analysis Scopes, understand trend widgets, compare quality across time periods, and conduct sprint and release retrospectives.

# Tracking Historical Quality Trends

Estimated time: 20 minutes
What you'll learn: How to use the Analytics & Trends Dashboard to track quality trends over time, compare quality across periods, identify improvements and regressions, and conduct effective retrospectives.

Prerequisites:

- Completed [Getting Started with Reports & Analytics](/docs/getting-started/core-concepts)

- Completed [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope)

- At least 2-3 weeks of test execution history in your project

- Basic understanding of dashboard navigation

## Introduction

Quality trends reveal patterns that single snapshots cannot. By analyzing how your test results change over time, you can identify improvements, spot emerging issues early, and make data-driven decisions about your testing strategy.

In this tutorial, you'll learn to use the Analytics & Trends Dashboard to track historical quality patterns, compare quality across sprints or releases, and conduct effective retrospectives that drive continuous improvement.

What makes historical analysis different:

- Real-time monitoring (covered in [Real-Time Monitoring](/docs/dashboards/tutorials/real-time-monitoring)) focuses on current execution status and immediate action

- Historical analysis examines patterns over weeks or months to understand long-term trends and guide strategic decisions

## Understanding the Analytics & Trends Dashboard

The Analytics & Trends Dashboard is your primary tool for historical quality analysis. It provides trend widgets that visualize how key metrics change over time.

Key trend widgets:

- Pass Rate Trend - Shows percentage of passed tests over time

- Execution Trend - Displays volume of test executions over time

- Duration Trend - Tracks average test execution time over time

- Failure Trend - Highlights failed test patterns over time

- Defect Trend - Shows defect discovery and resolution patterns

Why historical trends matter:

- Identify quality improvements from process changes

- Spot gradual quality degradation before it becomes critical

- Validate that bug fixes actually improved stability

- Guide resource allocation and testing strategy

- Provide evidence for continuous improvement efforts

#_r_cv_{margin:1.5rem auto 0;}#_r_cv_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_cv_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_cv_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_cv_ .error-icon{fill:#552222;}#_r_cv_ .error-text{fill:#552222;stroke:#552222;}#_r_cv_ .edge-thickness-normal{stroke-width:1px;}#_r_cv_ .edge-thickness-thick{stroke-width:3.5px;}#_r_cv_ .edge-pattern-solid{stroke-dasharray:0;}#_r_cv_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_cv_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_cv_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_cv_ .marker{fill:#333333;stroke:#333333;}#_r_cv_ .marker.cross{stroke:#333333;}#_r_cv_ svg{font-family:inherit;font-size:16px;}#_r_cv_ p{margin:0;}#_r_cv_ .label{font-family:inherit;color:#333;}#_r_cv_ .cluster-label text{fill:#333;}#_r_cv_ .cluster-label span{color:#333;}#_r_cv_ .cluster-label span p{background-color:transparent;}#_r_cv_ .label text,#_r_cv_ span{fill:#333;color:#333;}#_r_cv_ .node rect,#_r_cv_ .node circle,#_r_cv_ .node ellipse,#_r_cv_ .node polygon,#_r_cv_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_cv_ .rough-node .label text,#_r_cv_ .node .label text,#_r_cv_ .image-shape .label,#_r_cv_ .icon-shape .label{text-anchor:middle;}#_r_cv_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_cv_ .rough-node .label,#_r_cv_ .node .label,#_r_cv_ .image-shape .label,#_r_cv_ .icon-shape .label{text-align:center;}#_r_cv_ .node.clickable{cursor:pointer;}#_r_cv_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_cv_ .arrowheadPath{fill:#333333;}#_r_cv_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_cv_ .flowchart-link{stroke:#333333;fill:none;}#_r_cv_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_cv_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_cv_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_cv_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_cv_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_cv_ .cluster text{fill:#333;}#_r_cv_ .cluster span{color:#333;}#_r_cv_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_cv_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_cv_ rect.text{fill:none;stroke-width:0;}#_r_cv_ .icon-shape,#_r_cv_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_cv_ .icon-shape p,#_r_cv_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_cv_ .icon-shape rect,#_r_cv_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_cv_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_cv_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_cv_ :root{--mermaid-font-family:inherit;}
Improving

Degrading

Stable

Historical Data

Establish Baseline

Compare Periods

Analyze Patterns

Trend Direction?

Document Success

Investigate Root Cause

Maintain Strategy

Take Action

Track Impact

Diagram 1: Historical analysis workflow - continuous cycle of measurement, analysis, and improvement

## Step 1: Access the Analytics & Trends Dashboard

Let's start by navigating to the Analytics & Trends Dashboard.

- Log in to your Katalon TestOps organization

- Navigate to your project from the project list

- Click Analytics in the left sidebar menu

- Select Analytics & Trends from the submenu

You should see a dashboard with multiple trend widgets displaying data over time.

Success indicator: You should see trend widgets displaying line charts or bar charts showing data over time. If widgets show "No data available," ensure your project has test execution history.

## Step 2: Apply Time-Based Analysis Scope

Analysis Scope controls which time period your trend analysis covers. Time-based scope is ideal for sprint retrospectives and regular quality reviews.

- Locate the Analysis Scope selector in the top-right corner of the dashboard

- Click the scope selector dropdown

- Select Last 7 Days from the time-based options

The trend widgets refresh to show only the past week's data.

Try different time ranges:

- Last 7 Days - Weekly quality reviews

- Last 30 Days - Monthly retrospectives

- Last 90 Days - Quarterly planning

- Custom Date Range - Specific sprint or release periods

Success indicator: Trend widgets update to show data only for your selected time range. The date range appears in the scope selector button.

#_r_d1_{margin:1.5rem auto 0;}#_r_d1_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_d1_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_d1_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_d1_ .error-icon{fill:#552222;}#_r_d1_ .error-text{fill:#552222;stroke:#552222;}#_r_d1_ .edge-thickness-normal{stroke-width:1px;}#_r_d1_ .edge-thickness-thick{stroke-width:3.5px;}#_r_d1_ .edge-pattern-solid{stroke-dasharray:0;}#_r_d1_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_d1_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_d1_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_d1_ .marker{fill:#333333;stroke:#333333;}#_r_d1_ .marker.cross{stroke:#333333;}#_r_d1_ svg{font-family:inherit;font-size:16px;}#_r_d1_ p{margin:0;}#_r_d1_ .mermaid-main-font{font-family:inherit;}#_r_d1_ .exclude-range{fill:#eeeeee;}#_r_d1_ .section{stroke:none;opacity:0.2;}#_r_d1_ .section0{fill:rgba(102, 102, 255, 0.49);}#_r_d1_ .section2{fill:#fff400;}#_r_d1_ .section1,#_r_d1_ .section3{fill:white;opacity:0.2;}#_r_d1_ .sectionTitle0{fill:#333;}#_r_d1_ .sectionTitle1{fill:#333;}#_r_d1_ .sectionTitle2{fill:#333;}#_r_d1_ .sectionTitle3{fill:#333;}#_r_d1_ .sectionTitle{text-anchor:start;font-family:inherit;}#_r_d1_ .grid .tick{stroke:lightgrey;opacity:0.8;shape-rendering:crispEdges;}#_r_d1_ .grid .tick text{font-family:inherit;fill:#333;}#_r_d1_ .grid path{stroke-width:0;}#_r_d1_ .today{fill:none;stroke:red;stroke-width:2px;}#_r_d1_ .task{stroke-width:2;}#_r_d1_ .taskText{text-anchor:middle;font-family:inherit;}#_r_d1_ .taskTextOutsideRight{fill:black;text-anchor:start;font-family:inherit;}#_r_d1_ .taskTextOutsideLeft{fill:black;text-anchor:end;}#_r_d1_ .task.clickable{cursor:pointer;}#_r_d1_ .taskText.clickable{cursor:pointer;fill:#003163!important;font-weight:bold;}#_r_d1_ .taskTextOutsideLeft.clickable{cursor:pointer;fill:#003163!important;font-weight:bold;}#_r_d1_ .taskTextOutsideRight.clickable{cursor:pointer;fill:#003163!important;font-weight:bold;}#_r_d1_ .taskText0,#_r_d1_ .taskText1,#_r_d1_ .taskText2,#_r_d1_ .taskText3{fill:white;}#_r_d1_ .task0,#_r_d1_ .task1,#_r_d1_ .task2,#_r_d1_ .task3{fill:#8a90dd;stroke:#534fbc;}#_r_d1_ .taskTextOutside0,#_r_d1_ .taskTextOutside2{fill:black;}#_r_d1_ .taskTextOutside1,#_r_d1_ .taskTextOutside3{fill:black;}#_r_d1_ .active0,#_r_d1_ .active1,#_r_d1_ .active2,#_r_d1_ .active3{fill:#bfc7ff;stroke:#534fbc;}#_r_d1_ .activeText0,#_r_d1_ .activeText1,#_r_d1_ .activeText2,#_r_d1_ .activeText3{fill:black!important;}#_r_d1_ .done0,#_r_d1_ .done1,#_r_d1_ .done2,#_r_d1_ .done3{stroke:grey;fill:lightgrey;stroke-width:2;}#_r_d1_ .doneText0,#_r_d1_ .doneText1,#_r_d1_ .doneText2,#_r_d1_ .doneText3{fill:black!important;}#_r_d1_ .crit0,#_r_d1_ .crit1,#_r_d1_ .crit2,#_r_d1_ .crit3{stroke:#ff8888;fill:red;stroke-width:2;}#_r_d1_ .activeCrit0,#_r_d1_ .activeCrit1,#_r_d1_ .activeCrit2,#_r_d1_ .activeCrit3{stroke:#ff8888;fill:#bfc7ff;stroke-width:2;}#_r_d1_ .doneCrit0,#_r_d1_ .doneCrit1,#_r_d1_ .doneCrit2,#_r_d1_ .doneCrit3{stroke:#ff8888;fill:lightgrey;stroke-width:2;cursor:pointer;shape-rendering:crispEdges;}#_r_d1_ .milestone{transform:rotate(45deg) scale(0.8,0.8);}#_r_d1_ .milestoneText{font-style:italic;}#_r_d1_ .doneCritText0,#_r_d1_ .doneCritText1,#_r_d1_ .doneCritText2,#_r_d1_ .doneCritText3{fill:black!important;}#_r_d1_ .vert{stroke:navy;}#_r_d1_ .vertText{font-size:15px;text-anchor:middle;fill:navy!important;}#_r_d1_ .activeCritText0,#_r_d1_ .activeCritText1,#_r_d1_ .activeCritText2,#_r_d1_ .activeCritText3{fill:black!important;}#_r_d1_ .titleText{text-anchor:middle;font-size:18px;fill:#333;font-family:inherit;}#_r_d1_ :root{--mermaid-font-family:inherit;}2025-08-102025-08-172025-08-242025-08-312025-09-072025-09-142025-09-212025-09-282025-10-052025-10-122025-10-192025-10-262025-11-02Last 90 Days      Previous Release (v2.0) Current Release (v2.1)  Last 30 Days      Last 7 Days       Time-Based ScopeRelease-Based ScopeAnalysis Scope Timeline Visualization

Diagram 2: Analysis Scope timeline showing how Time-based and Release-based scopes define different analysis periods

## Step 3: Understand the Pass Rate Trend Widget

The Pass Rate Trend widget is your primary quality health indicator. Let's explore how to read and interpret it.

- Locate the Pass Rate Trend widget (usually at the top of the dashboard)

- Observe the line chart showing pass rate percentage over time

- Hover your cursor over any data point on the line

A tooltip appears showing:

- Date - Specific day or sprint

- Pass Rate - Percentage of tests that passed

- Total Executions - Number of tests executed

Interpreting the trend line:

- Upward trend - Quality is improving (more tests passing)

- Downward trend - Quality is degrading (more tests failing)

- Flat line - Quality is stable

- Sharp drop - Possible new defect or test environment issue

- Sharp rise - Bug fixes working or test suite improvements

Success indicator: You can hover over data points and see detailed information. The trend line clearly shows whether quality is improving, stable, or degrading.

## Step 4: Compare Quality Across Time Periods

Now let's compare your current sprint's quality against a previous baseline to identify changes.

Scenario: You want to compare this sprint's pass rate against last sprint.

- Set your Analysis Scope to Last 7 Days (current sprint)

- Note the average pass rate displayed in the Pass Rate Trend widget

- Take a screenshot or write down the current pass rate

- Change Analysis Scope to Previous 7 Days (or use Custom Date Range for last sprint)

- Compare the pass rate from the previous period

Making meaningful comparisons:

- Sprint vs. Sprint - Use 7-day or 14-day ranges matching your sprint length

- Release vs. Release - Use Release-based scope (Current Release vs. Previous Release)

- Month vs. Month - Use 30-day ranges or Custom Date Range

- Quarter vs. Quarter - Use 90-day ranges for long-term trends

Example comparison:

- Current sprint (Last 7 Days): 87% pass rate, 420 executions

- Previous sprint (Custom: Oct 14-20): 82% pass rate, 380 executions

- Analysis: Quality improved by 5 percentage points with 10% more test coverage

Success indicator: You can clearly articulate the difference in quality between two time periods with specific metrics (pass rate, execution count, failure trends).

## Step 5: Identify Quality Improvements

Let's learn to spot and validate quality improvements in your trends.

- Set Analysis Scope to Last 30 Days to see a longer-term trend

- Examine the Pass Rate Trend widget for upward trend lines

- Look for the Failure Trend widget and check for downward trends

- Check the Defect Trend widget for reduced new defect counts

Signs of quality improvement:

- Pass rate increasing over time (upward slope)

- Failure count decreasing over time (downward slope)

- Duration trend decreasing (tests running faster)

- Fewer new defects discovered per sprint

- Flaky test count reduced (check execution stability)

Validating improvements:

- Correlate improvements with specific actions (bug fixes, test suite maintenance, infrastructure upgrades)

- Verify improvements persist over multiple sprints (not just temporary)

- Check that improvement isn't due to reduced test coverage (verify execution count)

Example validation:

- Week 1: Pass rate 78%, 15 failures per day

- Week 2: Team fixed 10 flaky tests

- Week 3: Pass rate 85%, 8 failures per day

- Week 4: Pass rate 87%, 6 failures per day

- Conclusion: Flaky test fixes resulted in sustained 9-point improvement

Success indicator: You can identify specific periods where quality improved and correlate improvements with team actions or process changes.

## Step 6: Identify Quality Regressions

Equally important is spotting quality degradation early so you can take corrective action.

- Keep Analysis Scope at Last 30 Days

- Look for downward trends in Pass Rate Trend widget

- Look for upward spikes in Failure Trend widget

- Check for sharp drops that indicate sudden issues

Signs of quality regression:

- Pass rate decreasing over consecutive days or sprints

- Failure count increasing over time

- Duration trend increasing (tests taking longer)

- New defects discovered at higher rate than resolved

- Sudden drop in pass rate (sharp decline)

Common regression patterns:

- Gradual decline - Technical debt accumulating, test maintenance neglected

- Sharp drop - New feature introduced bugs, environment change, test data issue

- Oscillating - Flaky tests causing inconsistent results

- Plateau then drop - Quality ceiling reached, new work adding complexity

Investigating regressions:

- Identify the exact date quality started declining

- Review what changed (new features, deployments, test suite changes)

- Check Failure Trend to see which tests started failing

- Use Test Runs reports to drill into specific failures

- Create action items to address root causes

Success indicator: You can pinpoint when quality started degrading and have specific data points to investigate root causes.

## Step 7: Conduct a Sprint Retrospective

Now let's put trend analysis into practice with a sprint retrospective workflow.

Sprint retrospective workflow:

#_r_d4_{margin:1.5rem auto 0;}#_r_d4_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_d4_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_d4_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_d4_ .error-icon{fill:#552222;}#_r_d4_ .error-text{fill:#552222;stroke:#552222;}#_r_d4_ .edge-thickness-normal{stroke-width:1px;}#_r_d4_ .edge-thickness-thick{stroke-width:3.5px;}#_r_d4_ .edge-pattern-solid{stroke-dasharray:0;}#_r_d4_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_d4_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_d4_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_d4_ .marker{fill:#333333;stroke:#333333;}#_r_d4_ .marker.cross{stroke:#333333;}#_r_d4_ svg{font-family:inherit;font-size:16px;}#_r_d4_ p{margin:0;}#_r_d4_ .label{font-family:inherit;color:#333;}#_r_d4_ .cluster-label text{fill:#333;}#_r_d4_ .cluster-label span{color:#333;}#_r_d4_ .cluster-label span p{background-color:transparent;}#_r_d4_ .label text,#_r_d4_ span{fill:#333;color:#333;}#_r_d4_ .node rect,#_r_d4_ .node circle,#_r_d4_ .node ellipse,#_r_d4_ .node polygon,#_r_d4_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_d4_ .rough-node .label text,#_r_d4_ .node .label text,#_r_d4_ .image-shape .label,#_r_d4_ .icon-shape .label{text-anchor:middle;}#_r_d4_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_d4_ .rough-node .label,#_r_d4_ .node .label,#_r_d4_ .image-shape .label,#_r_d4_ .icon-shape .label{text-align:center;}#_r_d4_ .node.clickable{cursor:pointer;}#_r_d4_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_d4_ .arrowheadPath{fill:#333333;}#_r_d4_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_d4_ .flowchart-link{stroke:#333333;fill:none;}#_r_d4_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_d4_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_d4_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_d4_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_d4_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_d4_ .cluster text{fill:#333;}#_r_d4_ .cluster span{color:#333;}#_r_d4_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_d4_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_d4_ rect.text{fill:none;stroke-width:0;}#_r_d4_ .icon-shape,#_r_d4_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_d4_ .icon-shape p,#_r_d4_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_d4_ .icon-shape rect,#_r_d4_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_d4_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_d4_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_d4_ :root{--mermaid-font-family:inherit;}
Improved

Degraded

Stable

Sprint Ends

Access Analytics & Trends Dashboard

Set Scope: Current Sprint

Review Pass Rate Trend

Review Failure Trend

Review Duration Trend

Quality vs. Previous Sprint?

Document What Worked

Identify Issues

Maintain Course

Plan Actions

Export Data for Retrospective

Share with Team

Track Action Items Next Sprint

Diagram 3: Sprint retrospective workflow using Analytics & Trends Dashboard for data-driven review

Step-by-step retrospective:

- Set time period: Analysis Scope = Custom Date Range matching your sprint dates

- Review pass rate: Note current sprint pass rate and compare to previous sprint target

- Check execution volume: Verify test coverage remained consistent or improved

- Analyze failures: Identify tests that failed most frequently

- Review duration: Check if tests are running slower (infrastructure or performance issues)

- Identify patterns:

Did quality improve? What contributed to success?
Did quality decline? What caused the regression?
Are there specific days with issues (e.g., deployment days)?

- Document findings: Take screenshots of key trends for retrospective meeting

- Create action items: Based on data, decide on improvements for next sprint

Example retrospective findings:

- Pass rate: 84% (target: 85%) - slightly below goal

- Root cause: 12 failures on deployment day (Oct 25)

- Action item: Improve deployment validation tests

- Duration: Average 15 min (up from 12 min last sprint)

- Action item: Investigate slow-running tests

Success indicator: You have data-driven insights and specific action items to improve quality in your next sprint.

## Step 8: Conduct a Release Retrospective

Release retrospectives examine quality across entire release cycles.

- Set Analysis Scope to Current Release

- Review the full release trend from start to end

- Compare against Previous Release by switching scope

- Identify quality patterns across the release lifecycle

Release-level questions to answer:

- Did quality improve as the release progressed (stabilization)?

- Were there major regressions at any point?

- How does this release compare to previous releases?

- Did we meet release quality gates (e.g., 90% pass rate)?

- What can we improve for the next release?

Typical release quality pattern:

- Early release: Lower pass rate as new features are developed

- Mid release: Pass rate improves as bugs are fixed

- Late release: Pass rate plateaus at stable level

- Release candidate: Pass rate should be at target (e.g., 95%+)

Cross-release comparison:

- Release v2.0: Final pass rate 93%, 45 defects fixed

- Release v2.1: Final pass rate 95%, 38 defects fixed

- Trend: Quality improving, fewer defects, better pass rate

Success indicator: You understand your release quality trajectory and can compare releases to track long-term improvement.

## Step 9: Export Trend Data for Reporting

Sometimes you need to share trend data with stakeholders outside TestOps.

- Navigate to the trend widget you want to export

- Click the Export icon (download symbol) in the widget header

- Select export format: CSV, Excel, or PDF

- Choose date range if prompted

- Click Download

The trend data downloads to your computer with:

- Date/time stamps

- Metric values (pass rate, execution count, etc.)

- Calculated averages and totals

Use exported data for:

- Executive reports and presentations

- Quarterly business reviews

- Compliance documentation

- External audits

- Custom analysis in spreadsheet tools

Success indicator: You successfully download trend data in your preferred format and can open it in external tools.

## Applying What You've Learned

Now that you understand how to analyze historical quality trends, you're ready to apply these skills to real-world scenarios.

Next: Learn four proven workflows for using trend analysis in your daily work:

- Weekly Quality Check - 5-minute health monitoring

- Sprint Retrospective - Data-driven retrospective discussions

- Monthly Executive Report - Leadership communication

- Release Readiness Assessment - Objective go/no-go decisions

See [Quality Trends Analysis Workflows](/docs/dashboards/how-to/quality-trends-analysis-workflows) for step-by-step instructions on each workflow.

## Best Practices for Trend Analysis

Follow these practices to get the most value from historical trend analysis.

Establish baselines:

- Track quality for 2-3 sprints before making comparisons

- Set realistic targets based on historical data, not aspirations

- Understand seasonal patterns (e.g., quality dips during holidays)

Review trends regularly:

- Weekly: Quick health check (5 minutes)

- Sprint: Detailed retrospective (15 minutes)

- Monthly: Executive summary (30 minutes)

- Quarterly: Strategic review and planning (1 hour)

Correlate with events:

- Note major deployments, infrastructure changes, team changes

- Mark these events in your analysis to understand cause and effect

- Use findings to validate process improvements

Focus on trends, not single data points:

- One bad day doesn't mean quality is failing

- Look for patterns over multiple days or sprints

- Investigate sharp changes but don't overreact to normal variation

Act on insights:

- Trend analysis is worthless without action

- Create specific, measurable action items from findings

- Track whether actions actually improve quality in future sprints

Share findings widely:

- Quality trends should be visible to entire team

- Use exported data for stakeholder reports

- Celebrate improvements, discuss regressions openly

## Troubleshooting Trend Analysis

Problem: Widgets show "No data available"

Solution:

- Verify your project has test execution history in the selected time range

- Check that Analysis Scope is not set to a future date range

- Ensure you have permissions to view project analytics

Problem: Trends appear flat or unchanging

Solution:

- Increase the time range (e.g., Last 90 Days instead of Last 7 Days)

- Verify test executions are occurring regularly

- Check if test suite hasn't changed (no new tests, no failures)

Problem: Pass rate trend shows wild fluctuations

Solution:

- Investigate flaky tests causing inconsistent results

- Check for test environment instability

- Review if different test suites run on different days (different pass rates)

Problem: Cannot compare across releases

Solution:

- Verify releases are properly configured in TestOps

- Ensure builds are tagged with release information

- Use Custom Date Range as workaround if release-based scope unavailable

Problem: Exported data doesn't match dashboard

Solution:

- Verify date range in export matches Analysis Scope

- Check for recent data updates (dashboard may have fresher data)

- Try re-exporting after refreshing the dashboard

## What You've Learned

Congratulations! You've completed the historical quality trends tutorial. You now know how to:

✅ Access and navigate the Analytics & Trends Dashboard
✅ Apply Time-based and Release-based Analysis Scopes
✅ Understand and interpret trend widgets (Pass Rate, Failure, Duration)
✅ Compare quality across time periods (sprints, releases)
✅ Identify quality improvements and validate their causes
✅ Spot quality regressions and investigate root causes
✅ Conduct data-driven sprint retrospectives
✅ Conduct release retrospectives with cross-release comparison
✅ Export trend data for external reporting
✅ Apply four real-world historical analysis workflows

Key takeaways:

- Historical trends reveal patterns that single snapshots cannot

- Regular trend review enables early detection of quality issues

- Data-driven retrospectives lead to actionable improvements

- Comparing periods helps validate whether changes actually worked

- Trends should inform strategy, not just measure outcomes

## Next Steps

Continue building your dashboard and monitoring skills:

Apply what you learned:

- [Quality Trends Analysis Workflows](/docs/dashboards/how-to/quality-trends-analysis-workflows) - Apply trend analysis to weekly checks, sprint retrospectives, executive reports, and release readiness (recommended next step)

Deepen your expertise:

- [Real-Time Test Monitoring](/docs/dashboards/tutorials/real-time-monitoring) - Learn live execution monitoring (companion to this tutorial)

- [Creating Custom Dashboards](/docs/dashboards/how-to/create-custom-dashboard) - Build dashboards tailored to your team's needs

- [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types) - Master Time-based, Release-based, and Current scopes

Expand your analytics:

- [Using the Widget Catalog](/docs/dashboards/how-to/add-widgets) - Add more trend widgets to your dashboard

- [Configuring Dashboard Filters](/docs/dashboards/how-to/configure-filters) - Narrow analysis to specific test suites or teams

- [Sharing Dashboards with Stakeholders](/docs/dashboards/how-to/share-dashboard) - Distribute insights to leadership

Learn complementary analysis:

- [Defect Analysis Reports](/docs/reports/how-to/defect-analysis) - Deep dive into defect patterns

- [Test Coverage Reports](/docs/reports/how-to/coverage-reports) - Ensure comprehensive testing

You're now equipped to track quality trends, conduct effective retrospectives, and drive continuous improvement with data-driven insights!
[Monitoring Real-Time Test ExecutionLearn how to monitor active test runs in real-time using the Live Monitor Dashboard, identify failures as they happen, and investigate test details immediately.](/docs/dashboards/monitor-real-time-test-execution)[Quality Trends Analysis WorkflowsApply historical quality trend analysis to real-world scenarios including weekly quality checks, sprint retrospectives, monthly executive reports, and release readiness assessments.](/docs/dashboards/analyze-project-metrics)

# Quality Trends Analysis Workflows

Apply historical quality trend analysis to real-world scenarios including weekly quality checks, sprint retrospectives, monthly executive reports, and release readiness assessments.

# Quality Trends Analysis Workflows

Document type: How-To Guide
Estimated time: 10 minutes per workflow

What you'll do:

- Conduct weekly quality health checks

- Facilitate data-driven sprint retrospectives

- Create monthly executive quality reports

- Assess release readiness with quality metrics

Prerequisites:

- Completed [Tracking Historical Quality Trends](/docs/dashboards/tutorials/quality-trends) tutorial

- Access to Analytics & Trends Dashboard

- At least 2-3 weeks of test execution history

## Introduction

This guide provides four proven workflows for applying historical quality trend analysis to common testing scenarios. Each workflow is task-oriented and designed to help you achieve specific quality management goals efficiently.

When to use these workflows:

- Weekly Quality Check - Regular health monitoring (5 minutes)

- Sprint Retrospective - Data-driven sprint review (15 minutes)

- Monthly Executive Report - Leadership communication (30 minutes)

- Release Readiness - Go/no-go decision support (20 minutes)

## Workflow 1: Weekly Quality Check

Goal: Monitor quality health every Monday morning to catch issues early.

Time required: 5 minutes

Frequency: Weekly

### Steps

- Access Analytics & Trends Dashboard

Navigate to Analytics > Analytics & Trends in your project
Keep this dashboard bookmarked for quick access

- Set Analysis Scope to Last 7 Days

Click the Analysis Scope selector in the top-right
Select Last 7 Days from the dropdown

- Check Pass Rate Trend

Review the Pass Rate Trend widget
Compare against your team's target threshold (e.g., 85%)
Above threshold? Quality is healthy ✅
Below threshold? Investigation needed ⚠️

- Check Failure Trend

Review the Failure Trend widget
Look for upward or downward trend direction
Decreasing failures? Quality improving ✅
Increasing failures? Immediate attention needed ⚠️

- Investigate if needed

If quality is degrading, drill into specific failing tests
Use Test Runs reports to identify root causes
Create action items or defects for investigation

- Document findings

Share status in team standup or Slack
Example: "Pass rate: 87% (target: 85%) ✅ | Failures down 15% from last week ✅"

### Expected Outcome

Team has visibility into weekly quality status and can proactively address issues before they compound.

### Tips

- Automate alerts: Set up notifications if pass rate drops below threshold (if available in your TestOps plan)

- Track trends: Keep a simple log of weekly pass rates to spot longer-term patterns

- Consistency matters: Conduct this check same day/time each week for reliable comparisons

## Workflow 2: Sprint Retrospective Review

Goal: Facilitate data-driven sprint retrospective discussions with objective quality metrics.

Time required: 15 minutes (prep before retrospective meeting)

Frequency: End of every sprint (typically every 2 weeks)

### Steps

- Prepare before retrospective meeting

Access Analytics & Trends Dashboard 1-2 days before retrospective
Allocate 15 minutes for data collection

- Set Analysis Scope to current sprint

Click Analysis Scope selector
Select Custom Date Range
Enter your sprint start and end dates (e.g., Oct 21 - Nov 3)
Click Apply

- Capture current sprint metrics

Take screenshots of key widgets:

Pass Rate Trend
Failure Trend
Duration Trend (if relevant)

Note key numbers:

Final pass rate (e.g., 84%)
Total test executions (e.g., 1,240 tests)
Average failures per day (e.g., 18 failures/day)

- Compare to previous sprint

Change Analysis Scope to previous sprint dates
Note previous sprint metrics
Calculate changes:

Pass rate delta: 84% vs. 82% (+2 points) ✅
Execution volume: 1,240 vs. 1,100 tests (+13%) ✅
Failure rate: 18/day vs. 22/day (-18%) ✅

- Identify key quality events

Look for patterns in the trend lines:

Did quality improve? What contributed?
Did quality decline? What caused it?
Were there specific days with anomalies (e.g., deployment days)?

Example: "Pass rate dropped to 65% on Oct 28 (deployment day), then recovered to 84% by Oct 31"

- Present trends in retrospective

Screen-share captured screenshots
Discuss: "What caused these changes?"
Facilitate: "What should we do differently?"
Focus on data, not opinions

- Create action items

Based on findings, decide on improvements for next sprint
Track action items in your sprint planning tool
Examples:

"Improve deployment validation tests" (if failures spiked on deployment days)
"Investigate slow-running tests" (if duration increased)
"Celebrate flaky test fixes" (if quality improved)

### Expected Outcome

Team has objective, data-driven retrospective with specific action items to improve quality in the next sprint.

### Example Findings Table

Present findings in this format during retrospective:

MetricCurrent SprintPrevious SprintChangeStatusPass Rate84%82%+2 pts✅ ImprovedTotal Executions1,2401,100+13%✅ More coverageAvg Failures/Day1822-18%✅ Fewer failuresAvg Duration15 min12 min+25%⚠️ Investigate

### Tips

- Show trends, not just numbers: A line chart showing improvement is more compelling than a single percentage

- Correlate with events: Mark deployment days, major merges, or infrastructure changes on trend charts

- Celebrate wins: Publicly recognize when quality improves due to team efforts

- Be specific: "Fix flaky tests" is vague; "Reduce failures by 20% next sprint" is actionable

## Workflow 3: Monthly Executive Report

Goal: Share quality trends with leadership in a concise, business-focused format.

Time required: 30 minutes

Frequency: Monthly (first week of new month)

### Steps

- Set Analysis Scope to Last 30 Days

Access Analytics & Trends Dashboard
Set scope to Last 30 Days
This covers the previous month's quality performance

- Review all trend widgets

Pass Rate Trend: Overall quality health
Execution Trend: Testing activity volume
Failure Trend: Issue frequency
Duration Trend: Efficiency (if relevant)
Defect Trend: Issue discovery and resolution

- Calculate key summary metrics

Average pass rate: 86.3% (from Pass Rate Trend)
Total executions: 4,820 tests
Trend direction: Improving (+3 points vs. previous month)
Critical issues: 2 major regressions identified and resolved

- Export trend charts for report

Click Export icon on Pass Rate Trend widget
Select PDF format (best for presentations)
Download and save
Repeat for Failure Trend widget

- Write executive summary
Use this template:
Quality Status: [GREEN / YELLOW / RED]
Overall: Our test quality remained strong in October with an average pass rate of 86.3%, exceeding our 85% target. Testing volume increased 12% as we expanded coverage for the upcoming v2.1 release.
Key Improvements This Month:

Resolved 15 flaky tests, improving stability
Implemented deployment validation suite, reducing post-deploy failures by 40%
Pass rate improved from 83% (early Oct) to 89% (late Oct)

Key Challenges & Mitigation:

Test execution duration increased 18% due to added coverage
Mitigation: Parallelization planned for November to recover speed

Forecast for Next Month:

Target: 88% pass rate (sustained improvement)
Focus: Reduce test duration back to 12-minute average
Risk: v2.1 release may introduce new failures; monitoring closely

- Include exported charts

Insert Pass Rate Trend PDF into report
Insert Failure Trend PDF into report
Add captions explaining trends

- Distribute report

Share via email or presentation
Include dashboard link for live drill-down (if stakeholders have access)

### Expected Outcome

Leadership has clear visibility into quality trends, understands team efforts, and can make informed resource or priority decisions.

### Executive Summary Template

## Quality Trends - [Month Year]

**Status:** 🟢 GREEN | 🟡 YELLOW | 🔴 RED

### Executive Summary
[2-3 sentences on overall quality health and trend direction]

### Key Metrics
- **Average Pass Rate:** [X]% (Target: [Y]%)
- **Total Test Executions:** [N] tests
- **Trend:** [Improving / Stable / Degrading] ([±X]% vs. previous month)

### Achievements
- [Specific improvement 1]
- [Specific improvement 2]
- [Specific improvement 3]

### Challenges
- [Challenge 1] → Mitigation: [Action]
- [Challenge 2] → Mitigation: [Action]

### Forecast
- [Target for next month]
- [Key focus areas]
- [Known risks]

[Attach: Pass Rate Trend chart]
[Attach: Failure Trend chart]

### Tips

- Focus on business impact: Don't just report numbers; explain what they mean for releases, customer quality, and team productivity

- Use RAG status: Red/Amber/Green makes status instantly clear to executives

- Keep it concise: 1-page summary is ideal; detailed charts as attachments

- Show trajectory: Trend direction is more important than single-month snapshot

## Workflow 4: Release Readiness Assessment

Goal: Determine if release quality meets go-live criteria using objective data.

Time required: 20 minutes

Frequency: Before every major release

### Steps

- Set Analysis Scope to Current Release

Access Analytics & Trends Dashboard
Click Analysis Scope selector
Select Current Release from dropdown
This shows quality across entire release cycle

- Check final pass rate against threshold

Review Pass Rate Trend widget
Note the most recent pass rate (ideally last 3-5 days before release)
Is pass rate ≥ your release threshold?

Example: Pass rate 96% vs. threshold 95% → ✅ PASS
Example: Pass rate 92% vs. threshold 95% → ❌ FAIL

- Review Failure Trend

Check if failures are declining toward zero
Downward trend? Quality stabilizing ✅
Upward or flat trend? Quality not ready ⚠️

- Check Defect Trend

Review open defects count and severity
All critical defects resolved? ✅
Blocking defects still open? ⚠️ Release at risk

- Compare to previous release

Change Analysis Scope to Previous Release
Compare final pass rates:

Release v2.0: 93% pass rate
Release v2.1 (current): 96% pass rate → ✅ Improved

Check if quality improvement trend continues

- Assess against release criteria
Use a checklist like this:
CriteriaThresholdCurrentStatusPass Rate≥ 95%96%✅ PASSFailure TrendDecliningDeclining✅ PASSCritical Defects00✅ PASSBlocking Defects01❌ FAILHigh Defects≤ 32✅ PASS

- Make go/no-go decision

All criteria met? ✅ Approve release
Criteria not met? ❌ Identify blocking issues
Create action plan to address blockers before release

- Document decision

Record release quality assessment in release notes
Example: "Release v2.1 APPROVED: Pass rate 96% (target: 95%), 0 critical defects, all quality gates met"
If blocked: "Release v2.1 DELAYED: 1 blocking defect (DEFECT-1234) must be resolved before release"

### Expected Outcome

Objective, data-driven release decision with documented quality metrics. Stakeholders confident in release quality or aware of specific risks.

### Release Readiness Checklist Template

## Release Readiness: [Release Name]

**Date:** [YYYY-MM-DD]
**Assessor:** [Your Name]

### Quality Gate Checklist

- [ ] Pass rate ≥ 95% (Current: ___%)
- [ ] Failure trend declining (Current: Declining / Stable / Increasing)
- [ ] Zero critical defects (Current: ___ critical)
- [ ] Zero blocking defects (Current: ___ blocking)
- [ ] High-priority defects ≤ 3 (Current: ___ high)
- [ ] Quality improved vs. previous release (Previous: ___%, Current: ___%)

### Decision

**GO / NO-GO**

**Rationale:**
[Explain decision based on checklist results]

**Blocking Issues (if NO-GO):**
- [Issue 1]: [Action required]
- [Issue 2]: [Action required]

**Sign-off:**
- QA Lead: [Name] - [Date]
- Engineering Lead: [Name] - [Date]

### Tips

- Define criteria early: Establish quality gates at the start of the release, not at the end

- Automate gates: Set up automated checks that fail builds if quality gates aren't met (if supported)

- Be objective: Don't bend criteria to meet deadlines; if quality isn't ready, delay the release

- Track trends: Release quality should improve over time; if v2.1 is worse than v2.0, investigate why

## Best Practices Across All Workflows

### Establish Baselines

Why: You can't measure improvement without knowing your starting point.

How:

- Track quality for 2-3 sprints before setting targets

- Base targets on historical data, not aspirations

- Example: If your pass rate averaged 78% over 3 sprints, set realistic target at 82%, not 95%

### Review Trends Regularly

Why: Consistent monitoring catches issues early and validates improvements.

How:

- Weekly: Quick health check (5 min) - Workflow 1

- Sprint: Detailed retrospective (15 min) - Workflow 2

- Monthly: Executive summary (30 min) - Workflow 3

- Quarterly: Strategic review and planning (1 hour)

### Correlate with Events

Why: Understanding cause-and-effect helps you repeat successes and avoid failures.

How:

- Note major deployments, infrastructure changes, team changes in trend analysis

- Mark these events visually on trend charts (if supported) or in notes

- Example: "Pass rate dropped 10 points on Oct 15 (AWS outage), recovered Oct 17"

### Focus on Trends, Not Single Data Points

Why: One bad day doesn't mean quality is failing; patterns reveal truth.

How:

- Look for patterns over multiple days or sprints

- Investigate sharp changes but don't overreact to normal variation

- Example: One day at 70% pass rate is noise; three consecutive days declining is a trend

### Act on Insights

Why: Trend analysis is worthless without action.

How:

- Create specific, measurable action items from findings

- Assign owners and due dates

- Track whether actions improve quality in future sprints

- Example: "Reduce failures by 20% next sprint by fixing top 5 flaky tests (Owner: Alice, Due: Sprint End)"

### Share Findings Widely

Why: Quality is a team responsibility; transparency drives accountability.

How:

- Post weekly quality status in team Slack channel

- Present sprint trends in retrospectives

- Share monthly reports with leadership

- Celebrate improvements publicly

## Troubleshooting Common Issues

### Issue: "I don't have 2-3 weeks of history yet"

Solution:

- Start with whatever data you have (even 3-5 days)

- Acknowledge limited sample size in findings

- Trends become more reliable as history accumulates

- Focus on establishing consistent data collection first

### Issue: "My trends are too noisy to interpret"

Solution:

- Increase time range (e.g., Last 30 Days instead of Last 7 Days) to smooth volatility

- Investigate flaky tests causing inconsistent results

- Check for test environment instability

- Use moving averages if your dashboard supports them

### Issue: "Leadership doesn't understand quality metrics"

Solution:

- Translate metrics into business impact:

"96% pass rate" → "Only 4% of tests fail, meaning 96% of features work correctly"
"Failure trend declining" → "We're finding and fixing issues faster than new ones appear"

- Use RAG (Red/Amber/Green) status for quick visual understanding

- Focus on trend direction (improving/stable/degrading) rather than absolute numbers

### Issue: "Quality gates block releases unfairly"

Solution:

- Review if criteria are realistic based on historical data

- Allow documented exceptions with sign-off for business-critical releases

- Track exceptions to identify if criteria need adjustment

- Balance quality with business needs, but make trade-offs explicit

## What You Can Do Now

You now have four proven workflows to apply historical quality trend analysis:

✅ Weekly Quality Check - 5-minute health monitoring to catch issues early

✅ Sprint Retrospective - 15-minute data-driven review to drive continuous improvement

✅ Monthly Executive Report - 30-minute leadership communication for visibility and support

✅ Release Readiness Assessment - 20-minute objective go/no-go decision framework

Start with: Choose one workflow to implement this week. Weekly Quality Check (Workflow 1) is the easiest starting point.

## See Also

Foundational knowledge:

- [Tracking Historical Quality Trends](/docs/dashboards/tutorials/quality-trends) - Tutorial covering dashboard basics and trend interpretation

- [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types) - Deep dive into Time-based, Release-based, and Current scopes

Advanced techniques:

- [Creating Custom Dashboards](/docs/dashboards/how-to/create-custom-dashboard) - Build dashboards tailored to specific workflows

- [Dashboard Configuration Guide](/docs/dashboards/how-to/configuration) - Customize widgets, filters, and display options

- [Sharing Dashboards with Stakeholders](/docs/dashboards/how-to/share-dashboard) - Distribute insights to leadership

Related analysis:

- [Real-Time Test Monitoring](/docs/dashboards/tutorials/real-time-monitoring) - Complement historical trends with live execution monitoring

- [Defect Analysis Reports](/docs/reports/how-to/defect-analysis) - Deep dive into defect patterns and root causes

[Tracking Historical Quality TrendsLearn how to track quality trends over time using the Analytics & Trends Dashboard. This hands-on tutorial teaches you to apply Analysis Scopes, understand trend widgets, compare quality across time periods, and conduct sprint and release retrospectives.](/docs/dashboards/track-historical-quality-trends)[Dashboard Configuration GuideLearn how to configure widgets on the Analytics & Trends Dashboard including adding, removing, resizing, arranging widgets, and configuring widget settings like filters, time ranges, and analysis scope.](/docs/dashboards/create-custom-dashboards)