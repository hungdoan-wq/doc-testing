Getting StartedReference
# All Reports Reference

Complete catalog of all 13 reports available in Katalon TestOps Reports & Analytics module, organized by category with use cases, key metrics, and filters.

# All Reports Reference

This is a comprehensive reference catalog of all 13 reports available in Katalon TestOps Reports & Analytics module. Use this page to quickly find the right report for your analysis needs, understand what each report does, and navigate to detailed documentation.

## How to Use This Reference

This catalog helps you:

- Browse all available reports organized by category

- Compare reports using the quick reference table

- Find the right report for your specific analysis need

- Understand key capabilities of each report at a glance

- Navigate to detailed guides for step-by-step instructions

Navigation tips:

- Use your browser's search (Ctrl+F / Cmd+F) to find specific terms like "defect", "coverage", or "automation"

- Jump to a category using the section headings

- Refer to the comparison table for a quick overview

- Use the "Finding the Right Report" decision guide at the end

## Report Categories Overview

TestOps organizes reports into 4 categories based on analysis focus:

CategoryReport CountPrimary FocusTest Execution Analysis3 reportsTrack test execution progress, results, and patternsCoverage & Traceability3 reportsMeasure test coverage across requirements and configurations, with full traceabilityFailure & Quality Analysis7 reportsAnalyze test failures, error patterns, and defect trends to improve qualityTest Case Management2 reportsMonitor test case lifecycle, publishing activity, and automation progress

Total: 15 reports

## 🤖 AI-Powered Features

TestOps enhances your reporting and analytics with intelligent features that reduce investigation time and increase confidence:

AI-Powered Test Failure Analysis (LIVE)

- Automatically categorizes test failures into 7+ root cause types (Environment Issue, Timing Issue, Broken Selector, etc.)

- Provides plain-English explanations and actionable recommendations

- Reduces Mean Time to Identify (MTTI) by up to 60%

- Learn more: [How to Use AI-Powered Test Failure Analysis](/docs/customization/ai-test-failure-analysis)

Test Stability Intelligence (Coming Soon - Q1 2025)

- Probabilistic Flakiness Score (PFS) distinguishes genuine defects from test flakiness

- Smart Tags automatically flag Flaky, Always Failing, New Failure, and Slow tests

- Trend visualization shows pass/fail patterns across test runs

- Configurable detection rules adapt to your team's testing patterns

- Learn more: [Test Stability Intelligence: Flakiness Detection & Health Insights](/docs/customization/test-stability-intelligence)

These AI features integrate seamlessly across dashboards, reports, and investigation workflows to help you focus on real product issues instead of test maintenance.

## Complete Report Catalog

### Test Execution Analysis

Reports that track test execution progress, results, and patterns to help you understand how your testing activities are performing.

#### Test Runs Analysis

Purpose: Analyze test run completion status, execution results, and overall success rates

Primary Use Case: Monitor test execution performance and identify trends in test run outcomes. Use this when you need to understand how many test runs are passing, failing, or incomplete, and track execution patterns over time.

Primary Entity: Test Run

Key Metrics:

- Test run completion status (Completed, In Progress, Incomplete)

- Execution results distribution (Passed, Failed, Error, Incomplete)

- Success rates and trends

- Test run duration and performance metrics

Available Filters:

- Analysis Scope (Time-based, Release-based, Current-based)

- Test Run Type (Scheduled, Manual, Katalon Studio, CI/CD)

- Status (Passed, Failed, Error, Incomplete)

- Executor (who triggered the test run)

- Profile (execution environment configuration)

- Test Suite / Test Suite Collection

Best for: QA Leads tracking overall test execution health, QA Managers monitoring testing velocity and throughput

Link to Detailed Guide: (Tutorial coming soon)

#### Test Results Analysis

Purpose: Analyze test execution outcomes per test case, including passed, failed, blocked, and other statuses

Primary Use Case: Identify test cases with high failure rates and spot trends over time. Use this when you need detailed test case-level results to find problematic areas in your application or test suite.

Primary Entity: Test Result (individual test case execution)

Key Metrics:

- Test result status distribution (Passed, Failed, Blocked, Error, Skipped)

- Failure rate per test case

- Test case execution trends over time

- Test case stability indicators

Available Filters:

- Analysis Scope (Time-based, Release-based, Current-based)

- Test Run Type (Scheduled, Manual, Katalon Studio, CI/CD)

- Status (Passed, Failed, Blocked, Error, Skipped)

- Executor (who triggered the execution)

- Profile (execution environment)

Best for: Testers investigating which specific test cases are failing, Automation Engineers identifying unstable tests

Link to Detailed Guide: See [Investigating Test Failures](/docs/investigating-failures/investigating-test-failures)

#### Test Case Health Analysis

Purpose: Analyze the current status of test cases based on their latest execution results

Primary Use Case: Identify test cases that require attention (e.g., failing, blocked, not recently executed). Use this to prioritize test maintenance and focus on problematic test cases.

Primary Entity: Test Case

Key Metrics:

- Current status distribution (Passed, Failed, Blocked, Not Run)

- Test cases requiring attention (failing or blocked)

- Last execution date per test case

- Test case health overview

Available Filters:

- Analysis Scope (Time-based, Release-based, Current-based)

- Author (test case creator)

- Test Case Type (Manual, Automation, BDD)

- Latest Status (Passed, Failed, Blocked, Not Run)

- Last executed by (executor name)

Best for: QA Leads reviewing test case health, Testers prioritizing which test cases need maintenance

Link to Detailed Guide: (Tutorial coming soon)

### Coverage & Traceability

Reports that measure test coverage across different dimensions and provide end-to-end requirement traceability for comprehensive testing and compliance.

#### Configuration Coverage Analysis

Purpose: Analyze test execution coverage across different platforms, browsers, and devices

Primary Use Case: Ensure adequate testing across all critical user configurations (OS, browser, device combinations). Identify well-tested and under-tested environments to guide testing priorities.

Primary Entity: Test Configuration (platform + browser + device combination)

Key Metrics:

- Coverage percentage by configuration

- Test execution count per configuration

- Under-tested configurations (less than 5% coverage)

- Well-tested configurations (greater than 15% coverage)

- Configuration testing trends

Available Filters:

- Analysis Scope (Time-based, Release-based, Current-based)

- Platform (Windows, macOS, Linux, Android, iOS)

- Browser (Chrome, Firefox, Safari, Edge)

- Device type (Desktop, Mobile, Tablet)

Best for: QA Leads ensuring cross-platform testing, QA Managers validating environment coverage for compliance

Link to Detailed Guide: See [Configuration Coverage Analysis](/docs/coverage-traceability/configuration-coverage-analysis)

#### Requirements Coverage Analysis

Purpose: Analyze requirement coverage, including linked test cases, execution status, and pass rates

Primary Use Case: Monitor which requirements have adequate test coverage and identify requirements with insufficient testing. Essential for requirements-based testing and compliance workflows.

Primary Entity: Requirement

Key Metrics:

- Requirements coverage status (Covered, Partially Covered, Not Covered)

- Number of test cases linked per requirement

- Test execution pass rate per requirement

- Requirements needing more testing

Available Filters:

- Analysis Scope (Time-based, Release-based, Current-based)

- Assignee (requirement owner)

- Issue Type (Epic, Story, Task, Bug)

- Status / Status Category (To Do, In Progress, Done)

- Coverage Status (Covered, Partially Covered, Not Covered)

Best for: QA Managers tracking requirement coverage, Product Owners ensuring features are adequately tested, Compliance Officers validating test coverage

Link to Detailed Guide: See [Tracking Requirement Coverage](/docs/coverage-traceability/tracking-requirement-coverage)

#### Requirement Traceability Analysis

Purpose: Analyze end-to-end testing status by tracing requirements through linked test cases, their execution results, and associated defects

Primary Use Case: Generate audit-ready traceability matrices showing the complete testing lifecycle from requirement to defect. Essential for compliance, regulatory reporting, and understanding requirement validation status.

Primary Entity: Requirement (with full traceability)

Key Metrics:

- End-to-end traceability coverage

- Requirements with linked test cases and defects

- Test execution status per requirement

- Defect distribution per requirement

- Traceability gaps (requirements without tests or defects)

Available Filters:

- Analysis Scope (Time-based, Release-based, Current-based)

- Assignee (requirement owner)

- Issue Type (Epic, Story, Task)

- Status / Status Category (To Do, In Progress, Done)

Best for: Compliance Officers generating traceability reports, QA Managers validating end-to-end testing, Auditors reviewing test evidence

Link to Detailed Guide: See [Building Traceability Matrices](/docs/coverage-traceability/building-traceability-matrices)

### Failure & Quality Analysis

Reports that help you understand why tests fail, identify error patterns, and track defect trends to improve overall quality.

#### Test Failures Analysis

Purpose: Analyze test failure patterns and identify problematic test cases

Primary Use Case: Identify test cases with high failure rates and understand failure distribution. Use this to prioritize which failing tests to investigate first and spot patterns in test instability.

Primary Entity: Test Case (with failure focus)

Key Metrics:

- Failure rate distribution (percentage of failures per test case)

- Most frequently failing test cases

- Failure trends over time

- Test case stability score

Available Filters:

- Analysis Scope (Time-based, Release-based, Current-based)

- Test Case Type (Manual, Automation, BDD)

- Author (test case creator)

- Profile (execution environment)

Best for: Automation Engineers identifying flaky tests, QA Leads prioritizing test maintenance, Testers investigating failure patterns

Link to Detailed Guide: See [Investigating Test Failures](/docs/investigating-failures/investigating-test-failures)

#### Common Automation Errors

Purpose: Analyze test execution errors to identify patterns and root causes

Primary Use Case: Group similar errors together to find common issues affecting multiple test cases. Use this to identify infrastructure problems, framework issues, or application defects causing widespread test failures.

Primary Entity: Common Error (grouped error pattern)

Key Metrics:

- Error distribution by category (Timeout, Element Not Found, Network Error, etc.)

- Number of test cases affected per error type

- Error frequency and trends

- Most common error messages

Available Filters:

- View By (Error Type, Error Message)

- Analysis Scope (Time-based, Release-based, Current-based)

- Profile (execution environment)

- Test Suite

- Test Suite Collection

Best for: Automation Engineers debugging widespread failures, DevOps Engineers identifying infrastructure issues, QA Leads understanding error patterns

Link to Detailed Guide: See [Analyzing Error Patterns](/docs/investigating-failures/analyzing-error-patterns)

#### Defects Activity Analysis

Purpose: Analyze defect creation, closure, and overall status over a selected period

Primary Use Case: Track defect activity trends to understand team velocity in defect resolution and identify periods of high defect creation. Use this to monitor the flow of defects through their lifecycle.

Primary Entity: Defect

Key Metrics:

- Defects created over time

- Defects closed over time

- Net defect trend (creation minus closure)

- Open defects distribution by priority

- Defect resolution rate

Available Filters:

- Analysis Scope (Time-based, Release-based, Current-based)

- Reporter (who created the defect)

- Severity (Critical, Major, Minor, Trivial)

- Priority (Highest, High, Medium, Low, Lowest)

- Additional filters available in Advanced Settings

Best for: QA Managers tracking defect resolution velocity, Product Owners monitoring quality trends, Scrum Masters understanding sprint quality

Link to Detailed Guide: See [Analyzing Defects & Issues](/docs/defect-quality/analyzing-defects-issues)

#### Defect Status Analysis

Purpose: Analyze the current distribution of defects by status, priority, and severity

Primary Use Case: Get a snapshot of the current defect landscape. Defaults to showing unresolved defects, helping you understand what quality issues remain open and need attention.

Primary Entity: Defect (current state)

Key Metrics:

- Defect distribution by status (Open, In Progress, Resolved, Closed)

- Defect distribution by priority (Highest to Lowest)

- Defect distribution by severity (Critical to Trivial)

- Unresolved defects count

- High-priority open defects

Available Filters:

- Status (Open, In Progress, Resolved, Closed, Reopened)

- Priority (Highest, High, Medium, Low, Lowest)

- Severity (Critical, Major, Minor, Trivial)

- Assignee (who is responsible for fixing)

- Reporter (who created the defect)

Best for: QA Managers understanding current quality status, Product Owners prioritizing defect fixes, Release Managers assessing release readiness

Link to Detailed Guide: See [Understanding Defect Metrics](/docs/defect-quality/understanding-defect-metrics)

#### Defect Trend Analysis

Purpose: Track the creation and resolution trends of defects over time to understand flow and identify patterns

Primary Use Case: Visualize defect trends over weeks or months to identify patterns like increasing defect rates, seasonal quality issues, or improvement trends after process changes.

Primary Entity: Defect (time-series view)

Key Metrics:

- Defect creation trend line

- Defect resolution trend line

- Net defect change over time

- Time-to-resolution trends

- Backlog growth or reduction

Available Filters:

- Analysis Scope (Time-based recommended)

- Time interval (Daily, Weekly, Monthly)

- Severity (Critical, Major, Minor, Trivial)

- Priority (Highest, High, Medium, Low, Lowest)

Best for: QA Managers tracking long-term quality trends, Executives monitoring product quality, Product Owners understanding quality trajectory

Link to Detailed Guide: See [Defect Trend Analysis](/docs/defect-quality/defect-trend-analysis)

### Test Case Management

Reports focused on the lifecycle of test cases, including creation, publishing status, and automation progress.

#### Test Cases Publishing Activity Analysis

Purpose: Analyze the publishing activity of test cases, tracking the number of test cases in each publishing status over time

Primary Use Case: Monitor test case authoring progress and publishing workflow. Track how many test cases are in Draft, Review, or Published status to understand test creation velocity and bottlenecks.

Primary Entity: Test Case (publishing workflow)

Key Metrics:

- Test cases by publishing status (Draft, Review, Published, Archived)

- Publishing activity over time

- Test case creation rate

- Publishing workflow bottlenecks

Available Filters:

- Analysis Scope (Time-based, Release-based, Current-based)

- Author (test case creator)

- Test Case Type (Manual, Automation, BDD)

- Publishing Status (Draft, Review, Published, Archived)

Best for: QA Leads monitoring test authoring progress, QA Managers tracking test case creation velocity, Testers understanding team productivity

Link to Detailed Guide: See [Test Case Status & Activity Tracking](/docs/test-case-activity/test-case-status-activity-tracking)

#### Automation Progress Analysis

Purpose: Track the advancement of test automation initiatives, analyzing coverage trends and monitoring test case distribution by automation status

Primary Use Case: Monitor manual-to-automation migration progress. Identify which test cases are pending automation, track automation coverage growth, and measure automation initiative success.

Primary Entity: Test Case (manual tests with automation focus)

Key Metrics:

- Automation coverage percentage

- Manual vs. Automated test distribution

- Pending automation tasks

- Automation progress trends over time

- Test cases by automation status (Not Automated, In Progress, Automated)

Available Filters:

- Analysis Scope (Time-based, Release-based, Current-based)

- Author (test case creator)

- Test Case Type (Manual, Automation)

- Automation Status (Not Automated, In Progress, Automated)

Best for: QA Managers tracking automation ROI, Automation Engineers prioritizing automation efforts, Executives monitoring automation investment

Link to Detailed Guide: See [Automation Progress Tracking](/docs/test-case-activity/automation-progress-tracking)

## Quick Reference Comparison Table

Report NameCategoryPrimary EntityPrimary Use CaseKey FiltersTest Runs AnalysisTest Execution AnalysisTest RunMonitor test execution performance and success ratesScope, Test Run Type, Status, Executor, ProfileTest Results AnalysisTest Execution AnalysisTest ResultIdentify test cases with high failure ratesScope, Test Run Type, Status, Executor, ProfileTest Case Health AnalysisTest Execution AnalysisTest CaseReview current test case health and statusScope, Author, Test Case Type, Latest StatusConfiguration Coverage AnalysisCoverage & TraceabilityTest ConfigurationEnsure cross-platform testing adequacyScope, Platform, Browser, DeviceRequirements Coverage AnalysisCoverage & TraceabilityRequirementTrack requirement testing coverageScope, Assignee, Issue Type, Coverage StatusRequirement Traceability AnalysisCoverage & TraceabilityRequirementGenerate audit-ready traceability matricesScope, Assignee, Issue Type, StatusTest Failures AnalysisFailure & Quality AnalysisTest CasePrioritize failing tests and identify patternsScope, Test Case Type, Author, ProfileCommon Automation ErrorsFailure & Quality AnalysisCommon ErrorGroup similar errors to find root causesView By, Scope, Profile, Test SuiteDefects Activity AnalysisFailure & Quality AnalysisDefectTrack defect creation and resolution velocityScope, Reporter, Severity, PriorityDefect Status AnalysisFailure & Quality AnalysisDefectUnderstand current defect landscapeStatus, Priority, Severity, AssigneeDefect Trend AnalysisFailure & Quality AnalysisDefectMonitor long-term quality trendsScope, Time Interval, Severity, PriorityTest Cases Publishing ActivityTest Case ManagementTest CaseMonitor test authoring and publishing progressScope, Author, Test Case Type, StatusAutomation Progress AnalysisTest Case ManagementTest CaseTrack manual-to-automation migrationScope, Author, Test Case Type, Status

## Finding the Right Report

Use this decision guide to quickly identify which report meets your needs:

### "I need to understand test execution..."

→ Overall test run performance:

- Use Test Runs Analysis to see how many test runs passed, failed, or are incomplete

→ Specific test case results:

- Use Test Results Analysis to drill into individual test case outcomes

→ Current test case health:

- Use Test Case Health Analysis to see which test cases need attention now

### "I need to measure test coverage..."

→ Requirement coverage:

- Use Requirements Coverage Analysis to see which requirements have adequate testing

- Use Requirement Traceability Analysis for audit-ready compliance reports

→ Cross-platform coverage:

- Use Configuration Coverage Analysis to ensure testing across OS, browser, device combinations

### "I need to investigate quality issues..."

→ Test failures:

- Use Test Failures Analysis to identify high-failure-rate test cases

- Use Common Automation Errors to group similar errors and find root causes

→ Defects:

- Use Defects Activity Analysis to track defect flow over time

- Use Defect Status Analysis for current defect snapshot

- Use Defect Trend Analysis for long-term quality trends

### "I need to track test case lifecycle..."

→ Test authoring progress:

- Use Test Cases Publishing Activity Analysis to monitor draft, review, published status

→ Automation progress:

- Use Automation Progress Analysis to track manual-to-automation migration

## Common Analysis Workflows

Many analysis tasks require using multiple reports together. Here are common workflow combinations:

Release Readiness Assessment:

- Test Case Health Analysis - Verify all critical test cases passing

- Requirements Coverage Analysis - Ensure all requirements adequately tested

- Defect Status Analysis - Check unresolved high-priority defects

Test Failure Investigation:

- Test Failures Analysis - Identify high-failure-rate test cases

- Common Automation Errors - Group errors to find patterns

- Test Results Analysis - Drill into specific execution details

Quality Trend Monitoring:

- Test Runs Analysis - Track execution success rates over time

- Defect Trend Analysis - Monitor defect creation and resolution

- Automation Progress Analysis - Measure automation ROI

Compliance Reporting:

- Requirements Coverage Analysis - Show requirement testing coverage

- Requirement Traceability Analysis - Generate traceability matrices

- Configuration Coverage Analysis - Document cross-platform testing

## Understanding Report Components

All reports share common components for consistent user experience:

### Analysis Scope

Every report uses Analysis Scope to define the data timeframe or boundary:

- Time-based Scope: Analyze data within a specific date range (last 7 days, 30 days, custom)

- Release-based Scope: Analyze data for specific releases or builds

- Current-based Scope: Analyze latest execution results regardless of time

Learn more: [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types)

### Filters

Reports provide filters to narrow analysis focus:

- Global Filters: Apply across all report sections

- Local Filters: Apply to specific chart or table

- Common Filters: Scope, Status, Executor, Profile, Test Suite

- Entity-Specific Filters: Vary by report (e.g., Priority/Severity for defect reports)

Learn more: [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope)

### Visualizations

Reports use consistent chart types:

- Trend Charts: Line charts showing changes over time

- Distribution Charts: Bar charts or pie charts showing breakdown by category

- Tables: Detailed data with sorting and filtering

- Summary Cards: High-level metrics at a glance

## Report Access and Permissions

Where to find reports:

- Navigate to Reports & Analytics in the main menu

- Select Reports tab

- Choose report by category or search by name

Permissions required:

- View Reports: All project members can view reports

- Create/Edit Reports: Requires Admin or Test Lead role

- Export Reports: Available to all users with view access

Note: Report data is filtered based on your project access. You only see data for projects you have permission to view.

## See Also

Getting Started:

- [Getting Started with Reports & Analytics](/docs/getting-started/introduction) - New to reports? Start here

- [Understanding Report Types](/docs/getting-started/understanding-report-types) - Learn differences between Dashboards and Reports

- [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope) - Master filtering techniques

Report Categories:

- [Analyzing Test Coverage](/docs/coverage-traceability/analyzing-test-coverage) - Tutorial on coverage reports

- [Investigating Test Failures](/docs/investigating-failures/investigating-test-failures) - Tutorial on quality assessment reports

- [Analyzing Defects & Issues](/docs/defect-quality/analyzing-defects-issues) - Tutorial on defect reports

Advanced Topics:

- [Creating Custom Reports](/docs/customization/building-custom-reports) - Build custom analysis reports

- [Report Distribution & Automation](/docs/customization/report-distribution-automation) - Export and schedule reports

[Build Advanced Filter CombinationsMaster complex filtering techniques including multi-filter combinations, exclusion logic, filter hierarchy, performance optimization, and custom field filtering for precise data analysis in TestOps Reports & Analytics.](/docs/getting-started/build-advanced-filter-combinations)[Role-Based Workflow GuidesChoose your learning path—curated workflow guides for QA Managers, Manual Testers, Automation Engineers, and Product Owners.](/docs/workflows/role-based-workflows-overview)