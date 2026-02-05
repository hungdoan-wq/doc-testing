# Analyze Configuration Coverage

This document is about the Configuration Coverage Report.

Content coming soon.
Coverage & Traceability
# How to Analyze Configuration Coverage

Learn how to track and analyze test execution across different operating systems, browsers, and platform configurations using the Configuration Coverage report in Katalon TestOps.

# How to Analyze Configuration Coverage

Time required: 15 minutes

Prerequisites:

- Access to Reports module in TestOps

- Test executions with OS and Browser metadata

- Test cases executed across multiple configurations

- Basic familiarity with [filtering and analysis scope](/docs/getting-started/filters-and-scope)

Ensuring comprehensive testing across operating systems, browsers, and platform configurations is critical for reliable software delivery. The Configuration Coverage report helps you identify tested configurations, spot gaps, and prioritize testing efforts.

This guide shows you how to analyze configuration coverage, identify untested platforms, and ensure your strategy covers all critical environments.

Use this report to:

- Validate cross-browser testing completeness

- Compare mobile versus desktop coverage

- Identify environment-specific testing gaps

- Align testing with user demographics

## Accessing the Configuration Coverage Report

Navigate to the Configuration Coverage report using one of these paths:

From Reports Module:

- Open the Reports module in your TestOps project

- Select All Reports from the navigation

- Locate Configuration Coverage During Period in the report catalog

- Click View to open the report

From Project Dashboard:

- Open your Project Dashboard in the Home module

- Locate the Configuration Coverage During Period widget (if embedded)

- Click View report detail to open the full report

The report loads with default filters applied (Last 7 days, OS Name grouping, All execution types).

## Selecting a Grouping Strategy

The Configuration Coverage report offers three grouping strategies that determine how data is aggregated. Choose the strategy that best fits your analysis needs.

### Available Grouping Options

1. Group by OS Name

- Aggregates by operating system (Windows, macOS, Linux, Android, iOS)

- Combines all OS versions into single metric

- When to use: High-level platform assessment, strategy decisions

2. Group by Browser Name

- Aggregates by browser (Chrome, Firefox, Safari, Edge)

- Combines all browser versions into single metric

- When to use: Cross-browser testing validation, compatibility verification

3. Group by OS & Browser

- Shows specific configuration combinations (e.g., "Windows 11 + Chrome 120")

- Most granular view with OS and browser versions

- When to use: Version-specific bug tracking, detailed compatibility testing

### How to Change Grouping

- Locate the Group by selector in the filter bar

- Click the dropdown to reveal options

- Select your preferred grouping strategy:

OS Name (default)
Browser Name
OS & Browser

- Click Apply to update the report

The visualizations and data table adjust automatically to reflect the selected grouping.

## Configuring Report Filters

Filters allow you to focus your configuration coverage analysis on specific time periods, execution types, or data subsets.

### Time Range Selection

- Locate the Time Range filter

- Choose preset options: Last 7 days (default), Last 30 days, Last 90 days, Custom date range, or Specific sprint

- Click Apply

Note: Sprint selection allows only one sprint at a time. See [Analysis Scope Types](/docs/getting-started/analysis-scope-types) for details.

### Execution Type Filter

- Locate the Execution Type filter

- Select All (default), Automated, or Manual

- Click Apply

### Applying and Resetting Filters

To apply all filter changes:

- Click the Apply button after adjusting any filters

- The report updates to reflect your selections

To reset filters to defaults:

- Click the Reset button

- All filters return to default values (Last 7 days, OS Name grouping, All execution types)

## Reading the Visualizations

The Configuration Coverage report includes three key visualizations that provide different perspectives on your configuration testing.

### Top 15 Configurations Bar Chart

The main chart displays coverage percentages for the top 15 configurations based on your grouping selection.

Chart elements:

- X-axis: Configuration names (OS, Browser, or OS & Browser combination)

- Y-axis: Coverage percentage (0% to 100%)

- Bars: Height represents coverage percentage for each configuration

- Maximum records: Top 15 configurations by coverage percentage, sorted descending

Interacting with the chart:

- Hover over any bar to see:

Configuration name (e.g., "Windows 11", "Chrome 120", "macOS 13.1 + Safari 16.0")
Exact coverage percentage

- Click any bar to filter the data table:

If grouped by OS Name: Data table filters to show all versions of selected OS
If grouped by Browser Name: Data table filters to show all versions of selected browser
If grouped by OS & Browser: Data table filters to specific OS version and browser version combination

### Statistics Summary

The statistics summary displays:

Unique Test Cases: Total unique test cases executed across all configurations

Unique Configuration Combinations: Total distinct configurations tested

These metrics help assess testing breadth (configurations tested) and depth (test cases executed).

### Top Coverage List

The Top Coverage list displays paginated statistics for configurations with highest coverage percentages.

Display format by grouping:

When grouped by OS Name:

- OS icon and name

- Count of executed unique test cases

- Coverage percentage

When grouped by Browser Name:

- Browser icon and name

- Count of executed unique test cases

- Coverage percentage

When grouped by OS & Browser:

- OS icon and name

- Browser icon and name

- Count of executed unique test cases

- Coverage percentage

Navigation:

- Sorted by coverage percentage, descending

- 8 records per page

- Use pagination controls to browse additional configurations

## Analyzing the Data Table

The data table provides granular details for each configuration tested.

### Understanding Table Columns

ColumnDescriptionExecution DateDate when test execution occurredOSOperating system icon and nameBrowserBrowser icon and nameTotal CountTotal unique test cases availableExecuted CountUnique test cases executed in configurationPassed CountUnique test cases that passedPass Rate %(Passed Count / Executed Count) × 100Coverage Rate %(Executed Count / Total Count) × 100

Default sorting: Coverage Rate %, descending

### Sorting the Data Table

Click column headers to sort by:

- Coverage Rate % (default)

- Executed Count

Click again to toggle ascending/descending order.

Tip: Sort by Coverage Rate ascending to find lowest coverage configurations (priority gaps).

### Filtering the Data Table

Filter by:

- Date Range: Specific execution dates

- OS: Specific operating systems

- Browser: Specific browsers

Select filters and the table updates automatically. If you clicked a bar in the Top 15 chart, the table is already filtered—additional filters narrow further.

## Identifying Untested Configurations

Finding coverage gaps is the primary goal of configuration coverage analysis. Use these techniques to identify untested or undertested platforms.

### Finding Zero Coverage Configurations

Method 1: Sort by Coverage Rate ascending

- Click the Coverage Rate % column header repeatedly until sorted ascending

- Configurations with 0% coverage appear at the top

- Review OS and Browser columns to identify untested platforms

Method 2: Filter the data table

- Apply OS or Browser filters to check specific platforms

- If no records appear, that configuration has zero coverage in the selected time range

### Spotting Coverage Patterns

Look for systematic gaps:

No browser coverage on specific OS:

- Filter by OS to see which browsers tested

- Missing browsers indicate untested combinations

No OS coverage for specific browser:

- Filter by Browser to see which OS tested

- Missing OS platforms indicate gaps

Version-specific gaps:

- Review data table for version combinations

- Prioritize based on user adoption rates

### Prioritizing Based on User Demographics

Not all gaps are equal. Prioritize using these criteria:

- Review user analytics: Which OS and browsers do users actually use?

- Compare coverage to user distribution: High user volume + low coverage = priority gap

- Focus on business-critical configurations: Client contracts, compliance requirements, known problematic platforms

## Use Cases for Configuration Coverage Analysis

Apply configuration coverage analysis in these common scenarios:

### Cross-Browser Testing Validation

Goal: Ensure all target browsers tested before release

Steps:

- Set Group by to Browser Name

- Select time range matching release cycle

- Review Top 15 chart for target browsers

- Identify browsers with less than 80% coverage

- Create testing tasks for gaps

Example: If Safari shows 30% coverage while Chrome shows 95%, prioritize Safari testing.

### Mobile vs Desktop Coverage Comparison

Goal: Ensure mobile and desktop platforms receive appropriate testing

Steps:

- Set Group by to OS Name

- Compare Desktop (Windows, macOS, Linux) versus Mobile (Android, iOS) coverage

- Assess alignment with user base

- Adjust test execution strategy if needed

Example: Mobile-first app should show higher mobile coverage. If desktop is 90% but mobile is 50%, increase mobile testing.

### Environment-Specific Testing

Goal: Validate testing across staging and production configurations

Steps:

- Filter by execution date range for environment-specific cycles

- Review coverage per configuration

- Compare coverage across environments

Example: Validate staging has tested all production configurations before deployment.

## Handling Unknown or Null Configurations

## Troubleshooting Common Issues

## Role-Based Workflows

[### Automation Engineer Workflow
See how Automation Engineers use Configuration Coverage reports to optimize test distribution across browsers, OS, and devices—ensuring comprehensive cross-platform validation in CI/CD pipelines.](/docs/workflows/automation-engineer)

## See Also

Related Coverage Documentation:

- [How to Analyze Test Coverage](/docs/coverage/analyzing-test-coverage) - Complete coverage workflow and overview

- [How to Track Requirement Coverage](/docs/coverage/tracking-requirement-coverage) - Link tests to requirements for traceability

- [How to Build Traceability Matrices](/docs/coverage/building-traceability-matrices) - Map requirements to tests and defects

- [Understanding Coverage Calculations](/docs/coverage/understanding-coverage-calculations) - Learn how Configuration Coverage % is calculated

- [Coverage Report Reference](/docs/coverage/coverage-report-reference) - Quick metric reference and formula catalog

Related Foundational Documentation:

- [Using Filters and Analysis Scope](/docs/getting-started/filters-and-scope) - Master filtering basics for all reports

- [Analysis Scope Types](/docs/getting-started/analysis-scope-types) - Understand time-based and build-based scope options

[Building Traceability MatricesLearn how to create comprehensive traceability matrices in Katalon TestOps that map requirements to test cases, executions, and defects for compliance audits, gap analysis, and regulatory documentation (FDA 21 CFR Part 11, ISO 13485).](/docs/coverage/build-traceability-matrices)[Understanding Coverage CalculationsConceptual explanation of how Katalon TestOps calculates test coverage, execution, pass rate, and configuration coverage metrics, including formulas, eligible data definitions, and status determination logic.](/docs/coverage/understanding-coverage-calculations)