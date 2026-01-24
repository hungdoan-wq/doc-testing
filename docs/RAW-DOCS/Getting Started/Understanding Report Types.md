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