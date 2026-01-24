# Analyze Defects & Issues

<!-- Linked to defect metrics -->

Content coming soon.
Defects & Quality
# Analyzing Defects & Issues

Complete hands-on tutorial for using the Defect Activity Analysis report to track defect status, analyze priority distribution, and monitor creation/resolution patterns in Katalon TestOps.

# Analyzing Defects & Issues

Estimated time: 20 minutes
What you'll learn: How to use the Defect Activity Analysis report to track defect status, analyze priority distribution, and identify quality trends over time

Prerequisites:

- ALM integration configured (Jira, Azure DevOps, or similar)

- Defects linked to test results in TestOps

- At least 2-4 weeks of test execution history with defects

- Access to TestOps Reports & Analytics module

## Introduction

The Defect Activity Analysis report is your central dashboard for understanding defect lifecycle patterns and quality trends. As a QA Manager, you need clear visibility into whether your team is resolving defects faster than they're being created, which priorities need immediate attention, and how defect patterns evolve throughout your development cycle.

Unlike simple defect lists in your ALM tool, this report aggregates defects from TestOps test executions and presents them with trend analysis over time. You'll see three critical metrics working together: Accumulated Open Defects (your backlog), Created Defects (new issues discovered), and Closed Defects (issues resolved). Understanding the relationship between these metrics helps you identify bottlenecks, plan resources, and communicate quality status to stakeholders.

In this tutorial, you'll work through a realistic scenario: analyzing defect activity for a two-week sprint to prepare for a release readiness review. You'll learn to configure the report, interpret visual trends, identify priority issues, and take action based on data insights. By the end, you'll have a repeatable process for regular defect analysis that helps you maintain quality control and prevent defect accumulation.

Let's get started by accessing the report and setting up your first analysis.

## Step 1: Access the Defect Activity Analysis Report

Navigate to the Reports section in TestOps to locate the Defect Activity Analysis report.

From the TestOps main menu, click Reports in the left sidebar. The Reports page displays all available report types organized by category. Scroll down to the Quality & Coverage section, where you'll find Defect Activity Analysis listed alongside other quality-focused reports.

Click Defect Activity Analysis to open the report. The initial view loads with default settings—typically showing the last 30 days of defect activity for your current project.

You should see the report interface with three main components: a filter configuration panel at the top, visualization charts in the middle, and a detailed data table at the bottom. The page title confirms you're viewing "Defect Activity Analysis."

Great! You've successfully accessed the report. Next, you'll configure filters to focus on your specific sprint timeframe.

## Step 2: Configure Filters for Your Sprint

Set up filters to analyze defect activity for a specific sprint or time period.

At the top of the report, you'll see the filter configuration panel with several fields. For this tutorial, we'll analyze a two-week sprint that ran from March 1st to March 14th, 2024.

Configure the time range:

Click the Start Date field and select March 1, 2024 from the calendar picker. Then click the End Date field and select March 14, 2024. This defines your analysis window—the report will show all defect activity that occurred within these dates.

Set the interval:

In the Interval dropdown, you'll see three options: Daily, Weekly, and Monthly. Select Daily to see day-by-day defect trends. Daily intervals work well for sprint-length analysis (1-2 weeks), helping you spot patterns within short timeframes.

Select your project:

If you work with multiple projects, use the Project dropdown to select the specific project you want to analyze. For this tutorial, choose your current sprint's project. If you're analyzing quality across all projects, leave this set to "All Projects."

Click Apply or Update (depending on your TestOps version) to refresh the report with your new filter settings. The visualizations and data table will reload, now showing only defect activity from March 1-14, 2024.

You should notice the chart updates to display 14 data points (one for each day in your sprint). If you see "No data available," verify that defects were actually created or modified during this time period in your selected project.

Excellent! Your report is now focused on your sprint timeframe. Let's move on to interpreting the visual data.

## Step 3: Analyze the Stacked Bar Chart

Learn to read the stacked bar chart to identify defect accumulation patterns and resolution trends.

The stacked bar chart is the primary visualization in the Defect Activity Analysis report. It displays three metrics over time using colored bars, with each day (based on your Daily interval) represented as a vertical bar along the x-axis.

Understanding the chart structure:

Look at the chart legend, which identifies three colored sections:

- Accumulated Open Defects (typically blue or dark color): Shows the total number of defects that remain unresolved at the end of each day

- Created Defects (typically green or lighter color): Shows how many new defects were discovered on each day

- Closed Defects (typically red or medium color): Shows how many defects were resolved on each day

Each vertical bar stacks these three metrics, letting you see the relationship between creation, closure, and accumulation at a glance.

Reading the trend over your sprint:

Scan across the chart from left (March 1) to right (March 14). Notice how the bars change height over time. Focus on the Accumulated Open Defects section—this is your defect backlog. Is it growing, shrinking, or staying stable?

For example, if you see:

- Growing accumulated open defects: Your team is finding defects faster than they're resolving them—a warning sign that quality debt is building up

- Shrinking accumulated open defects: Your team is resolving defects faster than new ones are discovered—a positive indicator of improving quality

- Stable accumulated open defects: Creation and closure rates are balanced

Look for specific patterns:

- Spikes in Created Defects: Days when your team executed intensive testing or discovered major issues

- Spikes in Closed Defects: Days when developers focused heavily on bug fixes

- Weekend gaps: Lower activity on non-working days (if your sprint includes weekends)

In our example sprint, you might notice that Accumulated Open Defects grew from 15 on March 1 to 28 on March 14—an increase of 13 defects. This tells you that even though your team closed some defects, the rate of new defect discovery exceeded the resolution rate. This is valuable insight for your release readiness discussion.

Taking notes:

As you analyze the chart, jot down specific observations:

- Starting accumulated defects: 15

- Ending accumulated defects: 28

- Net change: +13 defects

- Highest creation spike: March 5 (12 new defects created)

- Highest closure day: March 11 (8 defects closed)

Perfect! You've learned to read the stacked bar chart and identify key trends. Now let's examine priority distribution.

## Step 4: Interpret the Pie Chart

Use the pie chart to understand defect priority distribution and identify focus areas.

Below or beside the stacked bar chart, you'll find a pie chart titled Defects by Priority. This chart breaks down all defects from your sprint (both open and closed) by their priority levels, giving you a quick snapshot of severity distribution.

Understanding priority segments:

The pie chart typically displays four priority levels with different colored segments:

- Critical (red): Defects blocking major functionality or causing system crashes

- High (orange): Serious issues affecting core features

- Medium (yellow): Moderate issues with workarounds available

- Low (green): Minor issues with minimal impact

Each segment's size represents the percentage of total defects at that priority level. Hover your mouse over each segment to see the exact count and percentage.

Analyzing your sprint's priority distribution:

Look at the Critical and High segments combined—these represent your highest-risk defects that could block release. In a healthy sprint, you'd expect to see:

- Critical + High < 30%: Most defects are moderate or minor

- Low priority > 30%: Many issues are cosmetic or edge cases

If you see a different pattern, such as:

- Critical + High > 50%: Your sprint has uncovered serious quality issues that need immediate attention

- Critical segment large: You may have fundamental stability problems

In our example sprint, you might see:

- Critical: 5 defects (12%)

- High: 12 defects (29%)

- Medium: 16 defects (39%)

- Low: 8 defects (20%)

This distribution shows that 41% of defects are Critical or High priority—a significant proportion that warrants discussion with your development team about allocating more resources to bug fixes before release.

Cross-reference with the stacked bar chart:

Look back at the stacked bar chart and identify when Critical/High defects were discovered. If many high-priority defects were created late in the sprint (March 12-14), this suggests last-minute discoveries that could delay release.

You now understand your defect priority landscape. Next, let's review the statistics section for additional insights.

## Step 5: Review Statistics Section

Examine key performance indicators and summary statistics for comprehensive defect analysis.

The statistics section, typically displayed in a panel or box near the visualizations, provides numerical summaries of your defect activity. This section complements the visual charts with precise counts and metrics.

Key statistics to review:

Look for these important numbers:

- Total Defects: The complete count of all defects (open + closed) during your sprint

- Open Defects: Defects that remain unresolved at the end of your time period

- Closed Defects: Defects that were resolved during your sprint

- Created Defects: New defects discovered during your sprint

Calculating your team's resolution rate:

Use these statistics to calculate a simple but powerful metric: Resolution Rate = (Closed Defects / Created Defects) × 100%

For example:

- Created: 35 defects

- Closed: 22 defects

- Resolution Rate: (22 / 35) × 100% = 63%

A resolution rate below 100% means your team didn't keep pace with new defect discoveries—quality debt accumulated. A rate above 100% means your team reduced the defect backlog.

Understanding status breakdown:

The statistics section may also break down defects by status (New, In Progress, Resolved, Closed, Reopened). Pay attention to:

- Reopened defects: Indicates fixes that didn't work or regression issues

- In Progress percentage: Shows how many defects are actively being worked on

In our example sprint, you might see:

- Total Defects: 41

- Open Defects: 28 (68%)

- Closed Defects: 13 (32%)

- Resolution Rate: 37%

These numbers tell a clear story: your team closed only about one-third of the defects encountered during the sprint, leaving two-thirds unresolved. This quantifies the quality challenge you'll need to address.

Excellent work! You've gathered comprehensive statistics. Now let's explore the detailed data table.

## Step 6: Use the Data Table

Drill into individual defects to understand details and identify specific issues requiring attention.

Scroll down below the visualizations to find the Defects Data Table. This table lists every defect from your filtered time period with detailed information in columns, allowing you to investigate specific issues and perform additional analysis.

Understanding table columns:

The data table typically includes these columns:

- Defect ID: Unique identifier (often linked to your ALM tool)

- Summary/Title: Brief description of the defect

- Status: Current state (Open, Closed, In Progress, etc.)

- Priority: Critical, High, Medium, Low

- Created Date: When the defect was first discovered

- Updated Date: Last modification timestamp

- Assignee: Team member responsible for the fix

Sorting and filtering:

Click any column header to sort the table. For example:

- Click Priority to sort by severity (Critical defects appear first)

- Click Created Date to see defects chronologically

- Click Status to group by current state

Many TestOps versions also provide filter controls above the table. Use these to narrow the list further:

- Filter by Priority = Critical to focus on blocking issues

- Filter by Status = Open to see what still needs resolution

- Combine filters: Priority = High AND Status = Open shows urgent unresolved issues

Using the search function:

Look for a search box above or beside the table. Enter keywords to find specific defects:

- Search for feature names: "login", "payment", "checkout"

- Search for error types: "crash", "timeout", "validation"

- Search for defect IDs from other tools: "JIRA-1234"

Drilling into specific defects:

Click on a Defect ID (often displayed as a hyperlink) to open the defect's full details in your ALM tool. This is useful when you need to:

- Review reproduction steps

- Check comments and discussion history

- Verify fix status

- Assign or reassign the defect

For our sprint analysis, try these actions:

- Sort by Priority (highest first)

- Filter to show only Status = Open

- Review the top 5-10 defects—these are your highest-priority unresolved issues

Take note of any patterns:

- Are multiple Critical defects related to the same feature?

- Are certain components producing more defects than others?

- Are specific team members assigned too many high-priority defects?

Perfect! You now know how to explore individual defect records. Let's apply these insights to take action.

## Step 7: Take Action Based on Insights

Use your defect analysis to identify bottlenecks, plan corrective actions, and communicate with stakeholders.

Now that you've analyzed charts, statistics, and detailed data, it's time to translate insights into action. As a QA Manager, your role is to use this information to drive quality improvements and inform decision-making.

Identifying bottlenecks:

Based on your analysis, identify specific quality challenges:

- Accumulation bottleneck: If Accumulated Open Defects grew significantly (like our +13 increase), your team's resolution capacity is insufficient. Consider adding more developer resources to bug fixes or extending the sprint.

- Priority bottleneck: If Critical/High defects represent >40% of your backlog, focus development effort on severity rather than quantity.

- Late discovery bottleneck: If many defects were created in the final days of the sprint, testing may have started too late.

Planning corrective actions:

Develop an action plan based on identified issues:

For accumulation problems:

- Schedule dedicated bug fix sprints

- Implement a "no new features until defect count < 15" policy

- Allocate 50% of next sprint capacity to defect resolution

For priority distribution issues:

- Conduct root cause analysis on Critical defects

- Improve unit testing to catch issues earlier

- Add automated regression tests to prevent reopened defects

For late discovery problems:

- Shift testing earlier in the sprint (shift-left approach)

- Implement continuous testing in CI/CD pipeline

- Add daily smoke tests instead of end-of-sprint testing

Communicating with stakeholders:

Use the Defect Activity Analysis report in stakeholder meetings:

For development team leads:

- Share the stacked bar chart showing accumulation trend

- Highlight specific days with high defect creation spikes

- Discuss the 37% resolution rate and propose target improvement (e.g., 80% next sprint)

For product managers:

- Present the priority pie chart to illustrate severity distribution

- Explain that 41% of defects are Critical/High, warranting release delay discussion

- Provide the data table filtered to Critical defects as a release blocker checklist

For executive leadership:

- Focus on high-level metrics: "28 open defects at sprint end, up from 15 at start"

- Frame in business terms: "13 additional quality issues discovered require 3-5 additional days to resolve before release"

- Recommend risk mitigation: delay release or release with known issues documented

Creating your defect analysis routine:

Make this analysis a regular practice:

- Review the Defect Activity Analysis report at mid-sprint checkpoint (identify trends early)

- Present findings at sprint retrospectives (learn from patterns)

- Compare sprint-over-sprint trends (measure quality improvement over time)

- Set team goals based on metrics (e.g., "achieve 95% resolution rate next sprint")

Congratulations! You've completed a full cycle of defect analysis from data gathering to action planning. You now have the skills to proactively manage defect lifecycle and drive quality improvements.

## Understanding the 3 Defect Metrics

You've worked with three defect metrics throughout this tutorial: Accumulated Open Defects, Created Defects, and Closed Defects. Let's briefly clarify how these metrics relate to each other.

Accumulated Open Defects represents your current defect backlog—the total number of unresolved defects at any point in time. This metric accumulates over time: it starts with your initial backlog, increases when new defects are created, and decreases when defects are closed.

Created Defects shows new defect discoveries during your analysis period. Each day (or week/month depending on your interval), this count resets to show only new defects from that specific time period.

Closed Defects tracks defect resolutions during your analysis period. Like Created Defects, this count is specific to each time period.

The relationship: Accumulated Open Defects = Previous Accumulated + Created - Closed

For example, if you start a day with 20 accumulated open defects, create 5 new defects, and close 3 defects, you end the day with 22 accumulated open defects (20 + 5 - 3 = 22).

For detailed formulas, calculation methodologies, and metric definitions, see [Understanding Defect Metrics](/docs/defects/understanding-defect-metrics). That reference document provides comprehensive technical specifications for how TestOps calculates each metric.

## What You've Learned

You've successfully completed a comprehensive tutorial on defect analysis in Katalon TestOps. You now know how to:

- Access the Defect Activity Analysis report and configure filters for sprint or release periods

- Read stacked bar charts to identify defect accumulation patterns and resolution trends

- Interpret pie charts to understand priority distribution and focus areas

- Calculate and interpret key metrics like resolution rate and status breakdown

- Use the data table to drill into individual defects and identify patterns

- Translate data insights into actionable plans for quality improvement

- Communicate defect trends effectively to different stakeholders

Next steps for continued learning:

- Explore [Understanding Defect Metrics](/docs/defects/understanding-defect-metrics) for detailed metric formulas and calculation methodologies

- Learn about [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope) to perform more complex cross-project analysis

- Review [Assessing Release Readiness](/docs/reports/assessing-release-readiness) to integrate defect analysis into release decision-making

- Set up [Configuring Quality Gates](/docs/reports/configuring-quality-gates) with defect thresholds to automate quality checks

Practice this analysis process with your own projects and sprints to build confidence and refine your defect management approach.

### Why are my defect counts different from Jira?

### Can I analyze defects across multiple projects?

### How often should I review this report?

### What if I see increasing Accumulated Open Defects?

## See Also

- [Understanding Defect Metrics](/docs/defects/understanding-defect-metrics) - Detailed formulas and calculations for defect metrics

- [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope) - Advanced filtering techniques for cross-project analysis

- [Assessing Release Readiness](/docs/reports/assessing-release-readiness) - Integrate defect analysis into release decision-making

- [Configuring Quality Gates](/docs/reports/configuring-quality-gates) - Set automated defect thresholds for quality control

- [Building Traceability Matrices](/docs/metrics/building-traceability-matrices) - Link defects to requirements for comprehensive traceability

[Defects & Issues Analysis: Overview and Getting StartedTrack defect lifecycle stages, analyze priority distribution, measure resolution velocity, and identify quality trends to improve team efficiency and prevent defect backlogs.](/docs/defects/defects-and-quality-overview)[Defect Trend AnalysisTask-focused guide for identifying patterns in defect creation and resolution trends, assessing release health, and tracking long-term quality improvements in Katalon TestOps.](/docs/defects/track-defect-trends)