# Advanced Filters & Combinations

Content coming soon.
Getting Started
# Build Advanced Filter Combinations

Master complex filtering techniques including multi-filter combinations, exclusion logic, filter hierarchy, performance optimization, and custom field filtering for precise data analysis in TestOps Reports & Analytics.

# Build Advanced Filter Combinations

Reading Time: 12-15 minutes

## Overview

This advanced guide teaches power users how to build complex filter combinations for surgical data analysis in TestOps Reports & Analytics. Master multi-filter logic, exclusion techniques, filter hierarchy, and performance optimization to extract precise insights from large datasets.

What you'll accomplish:

- Combine 3+ filters for precise data narrowing

- Use exclusion filters (NOT logic) to remove unwanted data

- Understand filter processing order and dependencies

- Optimize filter performance on large datasets

- Apply organization-specific custom field filters

- Save complex filter combinations for reuse

Prerequisites:

- Complete [Using Filters & Analysis Scope](/docs/getting-started/filter-your-data) tutorial

- Understand basic filtering concepts and analysis scope selection

- Familiarity with TestOps Reports & Analytics interface

## Quick Reference: Advanced Filtering DO vs DON'T

Category✅ DO❌ DON'TScopeUse Time-Based for trendsUse Current for trendsStrategyStart broad, narrow progressivelyApply all filters immediatelyPerformanceUse time-limited scopes (Last 7 days)Use 365-day ranges unnecessarilyNaming"Failed Tests - Release 2.5 - Chrome""My Filter 1"CombinationsApply most restrictive filter firstCombine contradictory filtersOptimizationFilter by project firstApply 5+ filters on large datasets

## Complex Filter Combinations

TestOps uses AND logic when combining multiple filters—only data matching ALL filter criteria is displayed. This allows precise narrowing of large datasets for surgical analysis.

### How TestOps Applies Multiple Filters

When you apply multiple filters, TestOps combines them with AND logic:

- Status = Failed AND Browser = Chrome AND Release = 2.5

- Results must match ALL three conditions simultaneously

- Each additional filter further narrows the dataset

Filter count indicator: The filter panel header displays active filter count (e.g., "4 filters applied").

### Step-by-Step: Applying 3+ Filters

Follow this progressive approach when building complex filter combinations:

- Select analysis scope first (Time-Based, Release-Based, or Current)

Scope defines your data universe before filters apply

- Open the Filter Panel (sidebar or collapsible panel)

- Apply your first filter category:

Example: Expand Test Status → Check FAILED
Verify result count after applying first filter

- Apply second filter category:

Example: Expand Platform → Check Chrome
Observe how result count decreases

- Apply third filter category:

Example: Expand Release → Check Release 2.5

- Add additional filters as needed:

Each additional filter further narrows results
Test one filter at a time when troubleshooting

- Click Apply or Apply All Filters

Expected Result: Data displayed matches ALL filter conditions. The filter panel header shows "X filters applied" badge.

### Practical Example 1: Failed Automated Tests on Specific Release and Browser

Goal: Find all failed automated tests from Release 2.5 running on Chrome browser

Filters to Apply:

- Analysis Scope: Release-Based → Select "Release 2.5"

- Test Status: FAILED

- Platform/Browser: Chrome

- Test Type: Automated

Steps:

- Set analysis scope to Release-Based, select "Release 2.5"

- Open Filter Panel → Expand Test Status → Check FAILED

- Expand Platform → Check Chrome

- Expand Test Type → Check Automated

- Click Apply

Result: Dashboard shows only automated tests that failed on Chrome browser during Release 2.5 execution.

Use Case: Isolating browser-specific failures in a release for targeted debugging.

### Practical Example 2: Manual Tests Not Executed Recently

Goal: Find manual tests in the Login test suite that haven't been executed in the last 30 days

Filters to Apply:

- Analysis Scope: Time-Based → Last 30 Days

- Test Suite: Login

- Test Type: Manual

- Execution Status: Not Executed

Steps:

- Set analysis scope to Time-Based, select "Last 30 Days"

- Open Filter Panel → Expand Test Suite → Check Login

- Expand Test Type → Check Manual

- Expand Execution Status → Check Not Executed

- Click Apply

Result: Shows manual tests in Login suite with no executions in the last 30 days.

Use Case: Identifying test cases requiring execution before release, ensuring coverage of critical login functionality.

### Additional Complex Filter Examples (3 More Scenarios)

## Exclusion Filters (NOT Logic)

Exclusion filters remove specific data from your results—showing everything EXCEPT the excluded values. This is useful when you want "all except X" rather than listing every value except X.

### What Are Exclusion Filters?

Exclusion filters use NOT logic to filter OUT data. Instead of selecting what to include, you select what to exclude.

When to use exclusion filters:

- ✅ When you want "everything except these few items"

- ✅ When inclusion would require selecting many values

- ✅ To remove noise from large datasets (e.g., "exclude Smoke tests")

- ✅ To focus on outliers or exceptions

When NOT to use exclusion filters:

- ❌ When specific inclusion is clearer (e.g., "show only FAILED tests")

- ❌ When you only want a small subset of data

### Step-by-Step: Applying Exclusion Filters

- Open the Filter Panel

- Locate the filter category you want to exclude from

- Access exclusion mode:

Look for a toggle or dropdown near the filter category
Common patterns: "Include" vs "Exclude" toggle, "NOT" checkbox, or right-click context menu

- Switch to Exclude mode

- Select values to exclude:

Check the boxes next to values you want to REMOVE from results

- Apply the filter

Expected Result: Data displayed includes all values EXCEPT the excluded ones. Exclusion filters are typically indicated with a special badge or color (e.g., red badge showing "Exclude: 2 values").

## Filter Processing Order & Hierarchy

TestOps processes filters in a specific order. Understanding this hierarchy helps you predict results and optimize performance.

### Filter Processing Sequence (6 Levels)

TestOps applies filters in this order:

1. Analysis Scope (first—defines the data universe)

- Time-Based: Filters by date range

- Release-Based: Filters by release association

- Current: Shows current state (no execution history)

2. Global Filters (persistent, affect all views)

- Project selection

- Date range (if not set by scope)

- Release/Sprint (if not set by scope)

3. Primary Entity Filters (base dataset filters)

- Test Case filters: Status, Type, Tags, Priority

- Test Result filters: Status, Execution Type, Executor

4. Associated Entity Filters (refine related data)

- Configuration filters: Platform, Browser, Device

- Environment filters: QA, Staging, Production

5. Inclusion Filters (include specific values)

- Applied with AND logic (all must match)

6. Exclusion Filters (exclude specific values—applied last)

- NOT logic removes values from results

### Why Order Matters

Example Demonstrating Order:

Scenario: You want failed tests from Release 2.5 on Chrome, excluding Smoke suite.

Correct Processing Order:

- Scope: Release 2.5 → Narrows to Release 2.5 test executions

- Status: FAILED → Narrows to failed tests in Release 2.5

- Browser: Chrome → Narrows to failed Chrome tests in Release 2.5

- Exclude: Smoke Test suite → Removes Smoke tests from final results

Result: Failed Chrome tests in Release 2.5, excluding Smoke suite.

If exclusion were applied first, you'd exclude Smoke tests from ALL data, then apply scope and filters—potentially different results if Smoke tests exist outside Release 2.5.

### Filter Dependencies

Some filters are dependent on others:

- Browser Version depends on Browser Type: Selecting "Chrome" shows Chrome versions; selecting "Firefox" shows Firefox versions

- OS Version depends on OS Type: Selecting "Windows" shows Windows versions (11, 10, etc.); selecting "iOS" shows iOS versions

- Configuration depends on Environment: Selecting "QA" environment shows only QA configurations

Practical Tip: Apply broader filters first (OS Type), then narrower filters (OS Version). This follows the natural filter hierarchy and ensures available options are correct.

## Performance Optimization

Large datasets and complex filters can slow query performance. Follow these best practices to optimize filtering speed.

### DO: Optimize Filter Performance

✅ Use time-limited scopes:

- Last 7 days vs Last 365 days reduces dataset by 50x

✅ Filter by project first:

- If analyzing a single project, this reduces dataset significantly before other filters apply

✅ Use Release-Based scope when possible:

- Releases contain smaller datasets than broad time ranges

✅ Apply most restrictive filter first:

- If only 5% of tests are automated, filter by Test Type: Automated early

✅ Remove unnecessary filters:

- Each additional filter adds processing time

### DON'T: Slow Down Performance

❌ Use very broad time ranges (90+ days) unnecessarily:

- Only use when trend analysis requires historical depth

❌ Apply 5+ filters simultaneously on large datasets:

- Build filters progressively, testing performance at each step

❌ Leave complex filters on auto-refresh dashboards:

- Disable auto-refresh for dashboards with heavy filtering

❌ Use multiple exclusion filters:

- Exclusions require processing entire dataset before removing values

### Best Practice: Most Restrictive Filter First

Example of Optimization:

Scenario: Find failed automated tests from Release 2.5 on Chrome (out of 50,000 test results)

Unoptimized approach:

- Scope: Time-Based Last 90 Days (returns 50,000 results)

- Status: FAILED (narrows to 5,000 results)

- Release: 2.5 (narrows to 500 results)

- Browser: Chrome (narrows to 100 results)

- Test Type: Automated (narrows to 50 results)

Optimized approach:

- Scope: Release-Based → Release 2.5 (returns 2,000 results immediately)

- Test Type: Automated (narrows to 500 results—most restrictive after scope)

- Status: FAILED (narrows to 50 results)

- Browser: Chrome (final refinement to 25 results)

Result: Optimized approach processes 2,000 initial results vs 50,000, significantly faster.

Rule of thumb: Apply filters that eliminate the most data earliest in your filter sequence.

## Custom Field Filters

Custom fields are organization-specific metadata added to test cases, requirements, or defects. TestOps allows filtering by custom fields for highly targeted analysis.

### What Are Custom Fields?

Custom fields are user-defined properties that extend standard TestOps data. Common examples:

- Priority: P0 (Critical), P1 (High), P2 (Medium), P3 (Low)

- Team: Payment Team, Login Team, Checkout Team

- Feature Area: Authentication, Billing, Reporting

- Customer Impact: High, Medium, Low

- Compliance Tag: HIPAA, SOC2, PCI-DSS

Custom fields vary by organization—your TestOps project may have different custom fields configured.

### Step-by-Step: Applying Custom Field Filters

- Open Filter Panel

- Scroll to Custom Fields section:

Typically located at the bottom of the filter panel
Labeled "Custom Fields" or "Organization Fields"

- Expand the custom field category you want to filter by (e.g., "Priority")

- Select values:

Check boxes next to desired values (e.g., P0, P1)
Custom fields support both inclusion and exclusion

- Apply the filter

Expected Result: Data is filtered to show only items matching the selected custom field values.

### Practical Example: High-Priority Tests Assigned to Specific Team

Goal: Show P0 tests assigned to Payment team that failed in the last 7 days

Filters to Apply:

- Analysis Scope: Time-Based → Last 7 Days

- Test Status: FAILED

- Custom Field - Priority: P0

- Custom Field - Team: Payment Team

Steps:

- Set analysis scope to Time-Based, select "Last 7 Days"

- Open Filter Panel → Expand Test Status → Check FAILED

- Scroll to Custom Fields → Expand Priority → Check P0

- Expand Team → Check Payment Team

- Click Apply

Result: Shows critical (P0) tests owned by Payment team that failed in the last 7 days.

Use Case: Prioritizing critical failures for immediate attention by the responsible team.

### Combining Custom Fields with Standard Filters (Advanced Example)

## Saving Filter Presets

Save complex filter combinations for quick reuse. If TestOps supports saved filter presets, use this feature to standardize common queries across your team.

### How to Save Complex Filter Combinations

Steps:

- Apply all desired filters (scope, inclusion, exclusion, custom fields)

- Verify filters are correct by reviewing displayed data

- Click "Save Filter" or "Save Preset" button (typically near Apply button)

- Name your preset:

Use descriptive names that indicate what the filter shows
✅ Good: "Release 2.5 Failed Chrome Tests"
❌ Vague: "My Filter 1"

- Add description (optional): Explain when to use this preset

- Set sharing options (if available):

Private: Only you can see and use
Team: Shared with project team members
Public: Available to all project users

- Click Save

Expected Result: Your filter preset is saved and appears in a "Saved Filters" or "Presets" list. You can load it anytime with one click.

### Naming Conventions for Saved Presets

Descriptive naming patterns:

- Purpose + Scope: "Pre-Release Smoke Test Results"

- Status + Context: "Failed API Tests Last Sprint"

- Audience + Focus: "QA Manager Weekly Failed Tests"

- Entity + Criteria: "Manual Login Tests Not Run 30 Days"

Avoid vague names:

- ❌ "Filter 1", "My Filter", "Test"

- ❌ Names without context: "Chrome", "Failed"

## Common Patterns & Troubleshooting

### Common Mistake #1: Using Wrong Scope for Task

Symptom: Results don't match expectations or appear inconsistent

Example:
Using Current scope to see "tests that failed yesterday" shows the latest test status, not time-based failures.

Fix:

- Use Time-Based scope (Last 24 hours) + Status=Failed filter

- Verify scope type matches your intent: Time vs Release vs Current

- Review [Understanding Analysis Scope](/docs/getting-started/understanding-analysis-scope) for details

### Common Mistake #2: Over-Filtering (Too Restrictive)

Symptom: "No data to display" message, but you know data exists

Example:

Time = Last 7 days
+ Release = 2.5
+ Project = ProjectA
+ Suite = Smoke
+ Browser = Chrome
+ Status = Failed
= No matching data

Fix:

- Remove filters one by one starting with the most specific

- Check each filter's impact on result count

- Expand time range: Last 7 days → Last 30 days

- Switch to broader scope (e.g., Release-Based without additional filters)

### Additional Common Mistakes & Comprehensive Troubleshooting

## Practical Filtering Scenarios

### 3 Real-World Filtering Scenarios

## See Also

Related Documentation:

- [Using Filters & Analysis Scope](/docs/getting-started/filter-your-data) - Basic filtering tutorial

- [Understanding Analysis Scope](/docs/getting-started/understanding-analysis-scope) - Deep dive into scope types

- [Dashboard Quick Reference](/docs/dashboards/reference/quick-reference) - Filter availability by widget

- [All Reports Reference](/docs/reports/reference/report-types) - Filter availability by report

Apply Advanced Filtering:

- [Project Dashboard](/docs/dashboards/project-dashboard) - Use complex filters for project-wide analysis

- [Release Dashboard](/docs/dashboards/release-dashboard) - Combine release scope with custom field filters

- [Test Results Report](/docs/reports/test-results-report) - Apply advanced filtering to execution data

Need Help?

- Check TestOps community forums for common filtering questions

- Contact support if you encounter persistent filtering issues

- Review release notes for new filtering features and improvements

[Using Filters & Analysis ScopeHands-on tutorial teaching you how to use filters and analysis scope to focus your Reports & Analytics data on specific time periods, releases, and test execution criteria.](/docs/getting-started/understanding-analysis-scope)[All Reports ReferenceComplete catalog of all 13 reports available in Katalon TestOps Reports & Analytics module, organized by category with use cases, key metrics, and filters.](/docs/getting-started/reference/all-reports-and-dashboards)