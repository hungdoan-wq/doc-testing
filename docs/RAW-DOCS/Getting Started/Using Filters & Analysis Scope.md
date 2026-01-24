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