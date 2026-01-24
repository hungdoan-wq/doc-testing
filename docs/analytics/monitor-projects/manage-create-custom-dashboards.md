Dashboards

DashboardsReference
# Dashboard Quick Reference

Comprehensive catalog of TestOps dashboards, widgets, navigation patterns, and decision guide for finding the right dashboard for your needs.

# Dashboard Quick Reference

Purpose: Quick lookup reference for all TestOps dashboards, widgets, and navigation patterns.

How to Use This Reference:

- Jump directly to sections using the table of contents

- Use Ctrl+F (Cmd+F on Mac) to search for specific features

- Check the [Dashboard Comparison Table](#dashboard-comparison) for at-a-glance differences

- Use the [Decision Guide](#decision-guide-which-dashboard-to-use) to choose the right dashboard

- Reference the [Complete Widget Catalog](#complete-widget-catalog) for all available widgets

## Dashboard Comparison

Quick comparison of all three TestOps dashboards:

FeatureLive MonitorAnalytics & TrendsRelease ReadinessPrimary PurposeReal-time operational awarenessHistorical trend analysisRelease/sprint quality trackingAnalysis ScopeCurrent (ongoing/recent)Time-based (flexible periods)Release-based (sprints/releases)Update FrequencyReal-time to near real-timePeriodic refreshPeriodic refreshPrimary UsersQA Engineers, Automation EngineersQA Managers, QA LeadsRelease Managers, Product OwnersKey Use CasesMonitor live test runs, catch failures immediatelyAnalyze trends, identify patternsAssess release readiness, track sprint progressTime Range FocusCurrent moment, today, last hourConfigurable (days/weeks/months)Current release/sprintCustomizationFixed widgets (limited customization)Customizable widgets (Phase 1 and later)Fixed widgets with threshold configTypical View TimeContinuous monitoring (always-on)Daily/weekly reviewSprint review, release planningData FreshnessSeconds to minutesMinutes to hoursHours to dailyNavigation PathHome → Dashboards → Live MonitorHome → Dashboards (default)Home → Dashboards → Release Readiness

## Live Monitor Dashboard

### Overview

Purpose: Provide real-time operational awareness and immediate insights into ongoing testing activities.

Key Questions Answered:

- What's happening right now in test executions?

- Are there critical failures requiring immediate attention?

- What's the live progress of scheduled or ongoing test runs?

- What's the immediate health snapshot based on latest test results?

- What were results of tests that just finished (last hour, today)?

Primary Users:

- QA Engineers actively running or monitoring tests

- Automation Engineers checking live script executions

- Operations teams needing current quality status

- QA Leads wanting quick glance at immediate state of affairs

When to Use:

- Monitoring active test runs in real-time

- During test execution sessions (manual or automated)

- After deploying new build to test environment

- When troubleshooting test execution issues

- For daily standup/huddle status checks

### Live Monitor Widgets

Widget NamePurposeKey MetricsRefresh RateActive Test Runs SummaryMonitor currently executing test runsActive run count, by type (manual/automated)Real-timeTest Executions Initiated TodayTrack today's test activityExecution count by type and statusNear real-timeTest Results Summary (Active/Today)View immediate test outcomesPass/fail/error counts for active and today's runsReal-timeNew Failures / Always Failing TestsIdentify critical quality issuesNew failure count, persistent failure countNear real-timeTotal Current Open DefectsMonitor unresolved quality issuesOpen defect count (especially critical/high)PeriodicDefects Created TodayTrack new issues discoveredToday's defect count by priorityNear real-timeRecent Test Failures SummaryAnalyze immediate failure patternsFailure count from today or active runsNear real-time

Data Freshness: Seconds to minutes (near real-time updates)

Typical Workflow:

- Open Live Monitor Dashboard at start of test session

- Monitor Active Test Runs Summary during execution

- Check Test Results Summary as tests complete

- Investigate any New Failures immediately

- Review Recent Test Failures Summary for patterns

- Update team on Open Defects status

## Analytics & Trends Dashboard

### Overview

Purpose: Analyze historical testing trends and track quality metrics over configurable time periods.

Key Questions Answered:

- How has test quality trended over the past week/month?

- What patterns emerge in test execution and results?

- Which tests or areas show declining quality?

- How does current quality compare to previous periods?

- What are team productivity trends?

Primary Users:

- QA Managers analyzing team performance

- QA Leads tracking quality trends

- Product Owners reviewing quality metrics

- Automation Engineers optimizing test suites

When to Use:

- Weekly/monthly quality review meetings

- Identifying long-term quality trends

- Analyzing test suite effectiveness

- Team performance evaluation

- Capacity planning and resource allocation

### Analytics & Trends Widgets

Widget NamePurposeKey MetricsTime RangeTest Execution Results DistributionCompare test outcomesPass/fail/error counts and percentagesConfigurable (7/30/90 days)Test Execution Results TrendTrack quality over timeDaily/weekly pass rate trendsConfigurableTest Coverage by ConfigurationMonitor cross-platform coverageExecution count per OS/browser/deviceConfigurablePass Rate TrendAnalyze quality trajectoryPass rate percentage over timeConfigurableFailure Rate AnalysisIdentify quality deteriorationFailure rate percentage over timeConfigurableExecution Duration TrendMonitor test performanceAverage execution time over timeConfigurableTest Volume by TypeTrack automation vs manual ratioManual/automated execution countsConfigurableFlaky Test DetectionIdentify unreliable testsFlakiness score, inconsistent resultsConfigurableCustom Widgets (Phase 1+)User-defined analyticsConfigurable metrics and groupingsConfigurable

Data Freshness: Minutes to hours (periodic refresh)

Customization:

- Configure time ranges (last 7/30/60/90 days, custom)

- Filter by project, test type, configuration

- Add custom widgets (Phase 1+)

- Arrange and resize widgets

- Set as default home dashboard

Typical Workflow:

- Set time range for analysis period

- Review Test Execution Results Distribution for overall health

- Examine Pass Rate Trend for quality trajectory

- Check Flaky Test Detection for test reliability issues

- Analyze Test Coverage by Configuration for gaps

- Create custom widgets for specific team metrics

- Export or share dashboard views with stakeholders

## Release Readiness Dashboard

### Overview

Purpose: Assess release/sprint readiness and track remaining work against quality criteria.

Key Questions Answered:

- Is the current release/sprint ready to ship?

- What quality criteria are met or at risk?

- How many tests remain to execute?

- What's the distribution of open defects by priority?

- Which configurations lack sufficient test coverage?

- How does requirement coverage look?

Primary Users:

- Release Managers making go/no-go decisions

- Product Owners tracking sprint progress

- QA Managers assessing quality gates

- Compliance Officers reviewing traceability

When to Use:

- Sprint planning and review meetings

- Release readiness assessments

- Quality gate evaluations

- Stakeholder reporting

- Compliance and audit preparation

### Release Readiness Widgets

Widget NamePurposeKey MetricsScopeRelease Readiness IndicatorOverall go/no-go statusREADY (green) or AT RISK (red)Current release/sprintQuality Criteria StatusTrack quality gate complianceCritical defects vs threshold, coverage vs targetsCurrent release/sprintExecution SummaryMonitor test completionPassed/failed/incomplete test counts and percentagesCurrent release/sprintOpen Defects by PriorityAnalyze defect distributionDefect count by priority (highest/high/medium/low)Current release/sprintConfiguration CoverageTrack cross-platform executionCoverage percentage per OS/browser/deviceCurrent release/sprintRequirement CoverageMonitor requirement testingRequirements with tests vs total, coverage percentageCurrent release/sprint

Data Freshness: Hours to daily (release-scoped data)

Configuration:

- Set quality thresholds (critical defects, coverage targets)

- Configure status thresholds (ready/at-risk criteria)

- Select release or sprint for analysis

- Customize configuration coverage requirements

Typical Workflow:

- Select current release/sprint from dropdown

- Check Release Readiness Indicator for overall status

- Review Quality Criteria Status for unmet thresholds

- Examine Execution Summary for testing progress

- Analyze Open Defects by Priority for blockers

- Verify Configuration Coverage for platform gaps

- Confirm Requirement Coverage for traceability

- Configure quality thresholds before release cycle

- Share dashboard in release planning meetings

## Complete Widget Catalog

Comprehensive table of all widgets across all dashboards:

Widget NameDashboard(s)CategoryPurposeKey MetricsTime ScopeActive Test Runs SummaryLive MonitorExecutionMonitor currently executing testsActive run count (manual/automated)Current momentTest Executions Initiated TodayLive MonitorExecutionTrack today's test activityExecution count by type/statusTodayTest Results Summary (Active/Today)Live MonitorQualityView immediate test outcomesPass/fail/error countsToday + activeNew Failures / Always FailingLive MonitorQualityIdentify critical failuresNew failure count, persistent failuresTodayTotal Current Open DefectsLive MonitorDefectsMonitor unresolved issuesOpen defect count by priorityCurrentDefects Created TodayLive MonitorDefectsTrack newly discovered issuesToday's defect count by priorityTodayRecent Test Failures SummaryLive MonitorQualityAnalyze immediate failure patternsFailure count (today/active)TodayTest Execution Results DistributionAnalytics & TrendsQualityCompare test outcomesPass/fail/error percentage and countsConfigurableTest Execution Results TrendAnalytics & TrendsTrendTrack quality over timeDaily/weekly pass rateConfigurableTest Coverage by ConfigurationAnalytics & TrendsCoverageMonitor cross-platform coverageExecution count per configConfigurablePass Rate TrendAnalytics & TrendsTrendAnalyze quality trajectoryPass rate percentage over timeConfigurableFailure Rate AnalysisAnalytics & TrendsTrendIdentify quality deteriorationFailure rate percentage over timeConfigurableExecution Duration TrendAnalytics & TrendsTrendMonitor test performanceAvg execution time over timeConfigurableTest Volume by TypeAnalytics & TrendsSummaryTrack automation ratioManual/automated countsConfigurableFlaky Test DetectionAnalytics & TrendsQualityIdentify unreliable testsFlakiness scoreConfigurableCustom WidgetsAnalytics & TrendsCustomUser-defined analyticsUser-configuredConfigurableRelease Readiness IndicatorRelease ReadinessSummaryOverall go/no-go statusREADY or AT RISKCurrent releaseQuality Criteria StatusRelease ReadinessQualityTrack quality gate complianceDefects/coverage vs thresholdsCurrent releaseExecution SummaryRelease ReadinessExecutionMonitor test completionPass/fail/incomplete percentageCurrent releaseOpen Defects by PriorityRelease ReadinessDefectsAnalyze defect distributionCount by priority levelCurrent releaseConfiguration CoverageRelease ReadinessCoverageTrack platform executionCoverage percentage per configCurrent releaseRequirement CoverageRelease ReadinessCoverageMonitor requirement testingRequirements tested percentageCurrent release

Widget Categories:

- Execution: Test run activity and progress

- Quality: Test results and failure analysis

- Coverage: Test coverage across configurations and requirements

- Trend: Historical patterns and trajectories

- Summary: High-level status and overview metrics

- Defects: Defect tracking and distribution

- Custom: User-configured widgets (Analytics & Trends only)

## Dashboard Navigation Quick Tips

### Accessing Dashboards

Navigation Paths:

- From Home: Home → Reports & Analytics → Select Dashboard

- From Dashboard Switcher: Dashboard dropdown (top right) → Select Dashboard

- From Analysis Scope: Toggle Analysis Scope → Dashboard auto-switches

### Navigation Map

Quick Access:

- Keyboard Shortcuts: Bookmark frequently used dashboards

- Default Dashboard: Set Analytics & Trends as default home view

- Dashboard Tabs: Keep multiple dashboard tabs open for quick switching

- Direct URLs: Share direct links to specific dashboards with filters

### Dashboard Drill-Down Patterns

From Dashboard Widgets to Reports:

- Click widget for detailed view

- Click "View Report" or drill-down link

- Filter and analyze in report view

- Export or share report

- Return to dashboard via breadcrumbs

Common Drill-Down Paths:

- Test Results Summary → Test Execution Analysis Report

- Failure Analysis → Test Failure Investigation Report

- Configuration Coverage → Configuration Coverage Report

- Requirement Coverage → Requirement Traceability Report

- Defects Summary → Defect Activity Analysis Report

## Common Dashboard Workflows

### Workflow 1: Daily Test Monitoring

Goal: Monitor ongoing test execution and catch issues early

Steps:

- Open Live Monitor Dashboard

- Check Active Test Runs Summary for current execution count

- Monitor Test Results Summary as tests complete

- Investigate New Failures immediately

- Review Open Defects for follow-up actions

- Switch to Analytics & Trends for historical context if needed

Frequency: Throughout test execution sessions

### Workflow 2: Weekly Quality Review

Goal: Analyze quality trends and identify improvement opportunities

Steps:

- Open Analytics & Trends Dashboard

- Set time range to "Last 7 Days"

- Review Test Execution Results Trend for quality direction

- Check Flaky Test Detection for reliability issues

- Examine Test Coverage by Configuration for gaps

- Create custom widgets for team-specific metrics

- Export dashboard for team meeting

Frequency: Weekly team retrospectives

### Workflow 3: Release Readiness Assessment

Goal: Determine if release meets quality criteria for go-live

Steps:

- Open Release Readiness Dashboard

- Select target release from dropdown

- Check Release Readiness Indicator (READY/AT RISK)

- Review Quality Criteria Status for unmet thresholds

- Verify Execution Summary shows sufficient test coverage

- Analyze Open Defects by Priority for blockers

- Confirm Configuration Coverage across all platforms

- Validate Requirement Coverage for compliance

- Share dashboard in release planning meeting

Frequency: Sprint review, pre-release gate reviews

### Workflow 4: Root Cause Analysis

Goal: Investigate test failures and identify underlying issues

Steps:

- Start in Live Monitor or Analytics & Trends

- Identify failure spike in Test Results Summary or Pass Rate Trend

- Click widget to drill down to Test Failure Analysis Report

- Filter by time range, test type, or configuration

- Review Common Error Patterns in report

- Check Flaky Test Detection to rule out flakiness

- Link failures to defects or test maintenance needs

- Return to dashboard to monitor resolution

Frequency: When failure rates spike or quality deteriorates

## Dashboard Filters & Scopes Overview

### Global Filters (Apply to All Dashboards)

Filter TypeOptionsImpactProjectSelect one or more projectsLimits data to selected projectsTest TypeManual, Automated, AllFilters execution data by typeConfigurationOS, Browser, DeviceFilters by execution environmentTags/LabelsCustom tagsFilters by test case tags

Access: Top navigation bar, applies across all dashboards

### Analysis Scope (Determines Dashboard Context)

Scope TypeDashboardTime RangeUse CaseCurrentLive MonitorOngoing, TodayReal-time operational monitoringTime-basedAnalytics & TrendsConfigurable (days/weeks/months)Historical trend analysisRelease-basedRelease ReadinessCurrent release/sprintSprint/release quality tracking

Access: Analysis Scope toggle (top right), auto-switches dashboard

### Dashboard-Level Filters

Analytics & Trends Dashboard:

- Time range picker (last 7/30/60/90 days, custom)

- Chart type filters (execution, quality, coverage)

- Widget-level filters (override global filters)

Release Readiness Dashboard:

- Release/Sprint selector dropdown

- Quality threshold configuration

- Configuration coverage selection

Live Monitor Dashboard:

- Limited filtering (inherits global filters)

- Focus on current moment (minimal time filtering)

Filter Precedence:

- Widget-level filters (most specific)

- Dashboard-level filters

- Global filters (least specific)

## Dashboard Refresh & Data Freshness

### Update Frequencies by Dashboard

DashboardUpdate FrequencyData LagManual RefreshLive MonitorReal-time to 1 minuteSeconds to minutes✅ Yes (refresh button)Analytics & Trends5-15 minutesMinutes to hours✅ Yes (refresh button)Release Readiness15-60 minutesHours✅ Yes (refresh button)

### Data Freshness Indicators

Live Monitor:

- Green dot: Data updated within last minute

- Yellow dot: Data 1-5 minutes old

- Red dot: Data more than 5 minutes old

- Last updated timestamp displayed

Analytics & Trends:

- Data freshness badge per widget

- Configurable auto-refresh intervals

- Manual refresh updates all widgets

Release Readiness:

- Release-scoped data (not time-sensitive)

- Updated when new test results or defects added

- Manual refresh for latest calculations

### Refresh Best Practices

When to refresh manually:

- After running new test executions

- Before important meetings or reviews

- When data appears stale (check timestamp)

- After resolving defects or updating test results

Auto-refresh settings:

- Live Monitor: Auto-refresh every 1-2 minutes (recommended)

- Analytics & Trends: Auto-refresh every 5-15 minutes

- Release Readiness: Auto-refresh every 30-60 minutes

## Exporting Dashboard Data

### Export Options

Export FormatAvailable DashboardsContentsUse CasePDFAll dashboardsFull dashboard snapshot with all widgetsStakeholder reports, meetingsPNG/ImageAll dashboardsVisual screenshot of dashboardPresentations, documentationCSVIndividual widgetsWidget data in tabular formatDetailed analysis, ExcelJSONIndividual widgets (API)Raw data in JSON formatCustom integrations, automation

### Export Workflow

Full Dashboard Export (PDF/Image):

- Navigate to desired dashboard

- Apply filters and configure widgets as needed

- Click Export button (top right)

- Select format (PDF or PNG)

- Choose layout (portrait/landscape)

- Download or share via email

Widget-Level Export (CSV/JSON):

- Click widget menu (three dots)

- Select Export Data

- Choose format (CSV or JSON)

- Save file or copy to clipboard

Sharing Dashboards:

- Share Link: Generate shareable URL with filters applied

- Email Report: Schedule automated email delivery (see [Scheduling Automated Reports](../advanced/scheduling))

- Embed Dashboard: Embed dashboard iframe in external tools

- API Export: Use Reporting API for programmatic access

## Decision Guide: Which Dashboard to Use?

Use this guide to quickly determine the right dashboard for your needs:

### By User Role

RolePrimary DashboardSecondary DashboardUse CaseQA EngineerLive MonitorAnalytics & TrendsMonitor own test runs, track personal productivityQA ManagerAnalytics & TrendsRelease ReadinessTeam performance analysis, quality trendsRelease ManagerRelease ReadinessAnalytics & TrendsGo/no-go decisions, sprint planningProduct OwnerRelease ReadinessAnalytics & TrendsFeature quality tracking, release planningAutomation EngineerLive MonitorAnalytics & TrendsScript execution monitoring, test reliabilityDevOps EngineerLive MonitorAnalytics & TrendsPipeline health, CI/CD monitoring

### By Question/Need

Question/NeedRecommended DashboardKey Widgets"What's happening right now?"Live MonitorActive Test Runs, Test Results Summary"How has quality trended over time?"Analytics & TrendsPass Rate Trend, Test Execution Results Trend"Is this release ready to ship?"Release ReadinessRelease Readiness Indicator, Quality Criteria"Which tests are failing today?"Live MonitorNew Failures, Recent Test Failures Summary"What's our automation ratio?"Analytics & TrendsTest Volume by Type"Do we have any flaky tests?"Analytics & TrendsFlaky Test Detection"How many defects are open?"Live Monitor or Release ReadinessTotal Current Open Defects, Open Defects by Priority"What's our requirement coverage?"Release ReadinessRequirement Coverage"Which platforms lack test coverage?"Analytics & Trends or Release ReadinessTest Coverage by Configuration, Configuration Coverage

### By Time Scope

Time ScopeDashboardAnalysis TypeRight now (current moment)Live MonitorReal-time operational monitoringToday (last few hours)Live MonitorRecent activity and immediate issuesThis week/monthAnalytics & TrendsShort-term trend analysisLast quarterAnalytics & TrendsLong-term trend analysisCurrent sprint/releaseRelease ReadinessSprint-scoped quality assessmentUpcoming releaseRelease ReadinessPre-release readiness check

### By Task/Workflow

TaskDashboardWorkflowMonitoring test executionLive MonitorContinuous monitoring during test runsDaily standup preparationLive MonitorQuick check of today's statusWeekly quality reviewAnalytics & TrendsHistorical trend analysisSprint retrospectiveAnalytics & Trends + Release ReadinessCombined historical + sprint viewRelease planning meetingRelease ReadinessReadiness assessment and criteria reviewStakeholder reportingAnalytics & TrendsTrend visualizations and custom widgetsCompliance auditRelease ReadinessRequirement coverage and traceabilityTest suite optimizationAnalytics & TrendsFlaky test detection, execution duration

### Decision Tree

Quick Rules:

- Need immediate status? → Live Monitor

- Need historical trends? → Analytics & Trends

- Need release readiness? → Release Readiness

- Unsure? Start with Analytics & Trends (default home dashboard)

## See Also

### Getting Started

- [Understanding Dashboard Types](../getting-started/core-concepts.mdx#dashboard-types)

- [Using Filters & Analysis Scope](../getting-started/filters-and-scope.mdx)

### Dashboard Tutorials

- [Monitoring Real-Time Test Execution](../tutorials/monitoring-execution.mdx) - Live Monitor tutorial

- [Tracking Historical Quality Trends](../tutorials/historical-trends.mdx) - Analytics & Trends tutorial

- [Assessing Release Readiness](../tutorials/release-readiness.mdx) - Release Readiness tutorial

### Dashboard Configuration

- [Dashboard Configuration Guide](../how-to/configure-dashboards.mdx)

- [Setting Up Alerts & Notifications](../how-to/alerts-notifications.mdx)

### Related Features

- [Creating Custom Dashboards](../advanced/custom-dashboards.mdx) (Phase 1+)

- [Building Custom Reports](../advanced/custom-reports.mdx)

- [Exporting & Sharing Reports](../advanced/exporting-sharing.mdx)

### Widget Details

- [Dashboard Widgets Reference](./widgets-reference.mdx) (detailed widget specs)

- [Understanding Quality Metrics](./metrics-glossary.mdx)

## 📍 Where to Go Next

Common next steps after Dashboards & Monitoring:

- [Investigating Test Failures](/docs/test-failures) - When dashboards reveal failure spikes or quality issues, use systematic failure investigation workflows to identify root causes

- [Coverage & Traceability](/docs/coverage) - Complement dashboard monitoring with comprehensive coverage analysis to ensure testing completeness

- [AI-Powered Features](/docs/ai-features) - Automate failure analysis and executive reporting with AI Test Failure Analysis and AI Executive Briefing

Need help deciding? See [Workflow Guide: Role-Based Pathways](/docs/workflows/overview)
[Dashboard Configuration GuideLearn how to configure widgets on the Analytics & Trends Dashboard including adding, removing, resizing, arranging widgets, and configuring widget settings like filters, time ranges, and analysis scope.](/docs/dashboards/create-custom-dashboards)[All Widgets ReferenceComprehensive catalog of all 37 dashboard widgets available in Katalon TestOps Reports & Analytics, organized by category with configuration options and use cases.](/docs/dashboards/reference/widget-catalog)
# Dashboard Configuration Guide

Learn how to configure widgets on the Analytics & Trends Dashboard including adding, removing, resizing, arranging widgets, and configuring widget settings like filters, time ranges, and analysis scope.

# Dashboard Configuration Guide

Time required: 15 minutes
Prerequisites: TestOps account with project access, basic familiarity with TestOps interface

This guide teaches you how to configure widgets on your Analytics & Trends Dashboard to create personalized views of your testing data. You'll learn to add pre-built widgets, remove unnecessary ones, resize and arrange your layout, and configure widget settings to match your analysis needs.

## Overview

The Analytics & Trends Dashboard is your customizable home view in TestOps Reports & Analytics. Unlike fixed dashboards, it allows you to add, remove, resize, and arrange pre-built widgets to create a layout that matches your workflow.

What you can configure:

- Add pre-built widgets from the widget catalog

- Remove widgets you don't need

- Resize widgets to emphasize important metrics

- Arrange widgets by dragging and dropping

- Configure individual widget settings (filters, time ranges, analysis scope)

- Save and reset dashboard layouts

Current Phase (Phase 1): This guide covers widget management on the existing Analytics & Trends Dashboard. Full custom dashboard creation is planned for Phase 3 (see "What You Cannot Do Yet" section below).

## Understanding the Analytics & Trends Dashboard

The Analytics & Trends Dashboard serves as your default home view when you navigate to Reports & Analytics. It displays historical quality trends and execution metrics over time.

Default configuration:

- Pre-populated with essential widgets for quick insights

- Displays test execution trends, quality metrics, and coverage status

- Configurable layout that you can customize to your needs

Why configure your dashboard:

- Focus on what matters: Remove widgets you don't use, add widgets you need

- Optimize layout: Resize important metrics for visibility

- Match your workflow: Arrange widgets in the order you review them

- Team-specific views: Different roles need different metrics (QA Managers vs. Testers)

## Accessing Configuration Mode

To configure your dashboard, you first need to enter configuration mode.

### Step 1: Navigate to Analytics & Trends Dashboard

- Log into Katalon TestOps

- Select your Project from the project dropdown

- Navigate to Reports & Analytics in the main menu

- Click Dashboards tab

- Select Analytics & Trends Dashboard (default home view)

### Step 2: Enter Configuration Mode

- Click the Configure button (or Edit Dashboard button) in the top-right corner

- The dashboard switches to configuration mode

- You'll see additional controls for managing widgets

Indicators you're in configuration mode:

- Widget library or catalog panel appears (usually on right side)

- Widgets display resize handles (corners and edges)

- Drag handles appear on widgets for repositioning

- "Save" and "Cancel" buttons replace "Configure" button

## Adding Pre-Built Widgets

TestOps provides a catalog of pre-built widgets that you can add to your dashboard.

### Available Widget Categories

Widgets are organized into categories based on the metrics they display:

Widget Categories:

- Execution Widgets: Track test execution progress and results

Test Run Status Overview
Execution Trends (line charts)
Test Result Distribution (pie/bar charts)

- Quality Widgets: Monitor quality metrics and failure rates

Pass Rate Trends
Failure Analysis Charts
Error Pattern Visualization

- Coverage Widgets: Measure testing coverage

Requirement Coverage Status
Configuration Coverage (OS, browser, device)
Platform Coverage Heatmap

- Summary Widgets: Display high-level metrics at a glance

Key Metrics Summary Cards
Latest Test Runs Table
Critical Defects List

### Steps to Add a Widget

- Enter configuration mode (see "Accessing Configuration Mode" above)

- Browse the widget catalog:

Locate the widget library panel (typically on the right side)
Browse widgets by category
Use search if available to find specific widgets

- Select a widget:

Click on the widget you want to add
Or drag the widget from the catalog onto the dashboard

- Position the widget:

If you clicked to add: widget appears in the next available space
If you dragged: drop widget in desired location
Other widgets automatically shift to accommodate the new widget

- Configure the widget (optional):

Click the widget's settings icon (gear or three dots)
Adjust filters, time ranges, or analysis scope
See "Configuring Widget Settings" section below for details

- Save your changes:

Click Save button to apply changes
Or click Cancel to discard

Example Use Case:
Scenario: You're a QA Lead who needs to monitor automation progress daily.
Action: Add the "Automation Progress" widget and the "Latest Test Runs" widget to track automation coverage and recent execution results at a glance.

## Removing Widgets

Remove widgets you don't need to declutter your dashboard and focus on relevant metrics.

### Steps to Remove a Widget

- Enter configuration mode

- Locate the widget to remove:

Find the widget you want to delete on the dashboard

- Delete the widget:

Method 1: Click the X or Remove button in the widget header
Method 2: Right-click the widget and select Remove or Delete
Method 3: Click the widget's menu icon (three dots) and select Remove

- Confirm removal (if prompted):

Some implementations may ask for confirmation
Confirm deletion

- Save your changes:

Click Save to apply removal
The dashboard layout automatically adjusts to fill the space

Note: Removing a widget does NOT delete the underlying data or reports. You can re-add the widget at any time from the widget catalog.

Example Use Case:
Scenario: You're a Manual Tester who only works with manual test cases.
Action: Remove automation-focused widgets like "Automated Test Execution Trends" and "Common Automation Errors" to simplify your dashboard view.

## Resizing and Arranging Widgets

Customize your dashboard layout by resizing widgets to emphasize important metrics and arranging them in a logical order.

### Resizing Widgets

Steps to resize:

- Enter configuration mode

- Hover over widget corners or edges:

Resize handles (small squares) appear at corners and edges
Cursor changes to a resize indicator (double arrow)

- Drag to resize:

Click and hold a resize handle
Drag to increase or decrease widget size
Larger widgets emphasize important metrics
Smaller widgets conserve space for secondary metrics

- Release to apply:

Release mouse button to set new size
Adjacent widgets automatically reflow

- Save your changes

Sizing Best Practices:

- Large (3x2 or 4x2 grid): Critical metrics you check first (pass rate trends, test run status)

- Medium (2x2 grid): Important secondary metrics (coverage status, failure analysis)

- Small (1x1 or 2x1 grid): Summary cards or quick-reference metrics (total defects, execution count)

### Arranging Widgets

Steps to arrange:

- Enter configuration mode

- Click and hold widget header:

Locate the drag handle (usually at top of widget)
Click and hold the widget header or drag handle icon

- Drag to new position:

Move widget to desired location
Other widgets automatically shift to make room
Visual feedback shows drop zones or grid positions

- Release to place:

Release mouse button to drop widget in new position
Dashboard layout automatically adjusts

- Save your changes

Layout Best Practices:

Priority Order:

- Top row: Most critical metrics you check first thing

- Middle rows: Secondary analysis widgets

- Bottom rows: Supplementary or detailed widgets

Logical Grouping:

- Group related metrics: Place execution widgets together, quality widgets together

- Workflow order: Arrange widgets in the order you review them (e.g., execution status → failures → defects)

- Visual balance: Distribute large and small widgets evenly for scannable layout

Common Arrangements:

QA Manager Layout:

- Top: Pass Rate Trends (large), Execution Progress (medium)

- Middle: Requirement Coverage (medium), Defect Status (medium)

- Bottom: Latest Test Runs (small), Critical Defects (small)

Automation Engineer Layout:

- Top: Automated Execution Trends (large), Failure Analysis (large)

- Middle: Common Automation Errors (medium), Flaky Tests (medium)

- Bottom: Test Run Performance (small)

Manual Tester Layout:

- Top: Manual Execution Status (large), Test Case Health (medium)

- Middle: Test Results Distribution (medium), Defect Status (medium)

- Bottom: Assigned Test Runs (small)

## Configuring Widget Settings

Each widget has settings you can adjust to customize what data it displays and how it's filtered.

### Common Widget Settings

Most widgets support these configuration options:

1. Analysis Scope
Defines the timeframe or boundary for data analysis:

- Time-based: Last 7 days, last 30 days, last 90 days, custom date range

- Release-based: Specific release or build

- Current-based: Latest execution results regardless of time

Learn more: [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types)

2. Filters
Narrow data to specific subsets:

- Status filters: Passed, Failed, Error, Blocked, Skipped

- Executor filters: Specific users or teams

- Profile filters: Execution environments or configurations

- Test Suite filters: Specific test suites or collections

- Custom field filters: Project-specific custom fields

Learn more: [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope)

3. Visualization Options
Control how data is displayed:

- Chart type: Line, bar, pie, table (if widget supports multiple types)

- Group by: Organize data by status, date, test suite, etc.

- Show/hide elements: Toggle legends, labels, data points

4. Refresh Settings
Control data update frequency:

- Auto-refresh: Automatically update data every N minutes

- Manual refresh: Update only when you click refresh button

### Steps to Configure Widget Settings

- Enter configuration mode (or view mode for some widgets)

- Open widget settings:

Click the settings icon (gear icon) on the widget header
Or click the menu icon (three dots) and select Settings or Configure

- Adjust settings:

Analysis Scope: Select time-based, release-based, or current-based scope
Time Range: Choose predefined range or set custom dates
Filters: Apply filters to narrow data (status, executor, profile, etc.)
Visualization: Adjust chart type or grouping options
Refresh: Set auto-refresh interval if desired

- Preview changes (if available):

Some widgets show live preview as you adjust settings
Verify data matches your expectations

- Apply settings:

Click Apply or Save to confirm settings
Widget updates to display data with new configuration

- Save dashboard layout:

If you made changes in configuration mode, click Save to persist

Example Use Case:
Scenario: You're a QA Manager preparing for a release review meeting.
Action: Configure the "Pass Rate Trends" widget to show Release-based scope for "Release 3.5.0" with Status filter set to "Passed" and "Failed" only, excluding incomplete results for clearer pass/fail visibility.

## Saving and Resetting Dashboard Layouts

After configuring your dashboard, save your changes to persist the layout. You can also reset to default configuration if needed.

### Saving Your Configuration

- Make your changes:

Add, remove, resize, arrange widgets
Configure widget settings as needed

- Review your layout:

Exit configuration mode temporarily to preview
Verify layout matches your needs
Re-enter configuration mode if adjustments needed

- Save changes:

Click Save button in top-right corner
Dashboard layout is saved to your user profile or project settings
You'll return to view mode

- Confirmation:

Success message appears confirming save
Dashboard displays with your new configuration

Note: Some implementations save layouts per user (personal), others save per project (shared with team). Check your TestOps instance configuration.

### Resetting to Default Layout

If your dashboard becomes cluttered or you want to start fresh:

- Enter configuration mode

- Locate reset option:

Look for Reset to Default button or link
May be in dashboard settings menu or configuration mode toolbar

- Confirm reset:

Click Reset to Default
Confirm action when prompted (this cannot be undone)

- Dashboard reverts:

All custom widgets, sizing, and arrangements are removed
Default widgets and layout are restored
You can now reconfigure from scratch

Warning: Resetting removes ALL customizations. Consider taking a screenshot of your layout before resetting if you might want to recreate it.

## What's Next

You've learned the fundamentals of dashboard configuration. For advanced techniques, best practices, and real-world scenarios, see:

[Advanced Dashboard Configuration](/docs/dashboards/how-to/configuration-advanced) - Learn best practices, role-specific layouts, configuration scenarios, troubleshooting, and advanced techniques for optimizing your dashboard.

## Configuration Tips

Follow these quick tips for effective dashboard configuration:

Keep it focused:

- Limit to 5-8 widgets for most users (10-12 max)

- Ask: "Do I check this metric daily?" If no, remove it

- Prioritize metrics you review every morning

Design for your workflow:

- Arrange widgets in the order you review them

- Group related metrics together (execution + quality, coverage + traceability)

- Size widgets proportional to importance (larger = more critical)

Use consistent filters:

- Apply common filters (Test Suite, Release) at widget level consistently

- Document your filters in dashboard notes or title

- Example: "Sprint 23 - Automation Tests Only"

Match refresh frequency to data:

- Real-time execution: Auto-refresh every 1-5 minutes

- Historical trends: Manual or daily refresh

- Static analysis: No auto-refresh needed

For detailed best practices, role-specific layouts, configuration scenarios, and troubleshooting guidance, see [Advanced Dashboard Configuration](/docs/dashboards/how-to/configuration-advanced).

## See Also

Next Steps:

- [Advanced Dashboard Configuration](/docs/dashboards/how-to/configuration-advanced) - Best practices, role-specific layouts, scenarios, and troubleshooting

Getting Started:

- [Understanding Report Types](/docs/getting-started/report-types) - Learn differences between Dashboards and Reports

- [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope) - Master filtering techniques for widgets

- [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types) - Deep dive into Time-based, Release-based, and Current scopes

Using Dashboards:

- [Monitoring Real-Time Execution](/docs/dashboards/tutorials/real-time-monitoring) - Tutorial on using Live Monitor Dashboard

- [Tracking Historical Quality Trends](/docs/dashboards/tutorials/quality-trends) - Tutorial on Analytics & Trends Dashboard usage

- [Dashboard Quick Reference](/docs/dashboards/reference/quick-reference) - Complete catalog of all available widgets

[Quality Trends Analysis WorkflowsApply historical quality trend analysis to real-world scenarios including weekly quality checks, sprint retrospectives, monthly executive reports, and release readiness assessments.](/docs/dashboards/analyze-project-metrics)[Dashboard Quick ReferenceComprehensive catalog of TestOps dashboards, widgets, navigation patterns, and decision guide for finding the right dashboard for your needs.](/docs/dashboards/reference/dashboard-types)