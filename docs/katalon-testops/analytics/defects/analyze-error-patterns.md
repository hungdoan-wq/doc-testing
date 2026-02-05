
# Analyze Error Patterns

This document is about the Common Automation Errors Report.

<!--

Instead of analyzing each failed test in isolation, the report automatically **groups similar error messages**, providing a consolidated view of your most frequent and impactful issues. This report aims to assist you make a large-scale analysis on automation failure much clearer and more actionable.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/common-automation-error-report.png" alt="common automation error report" width="700px" />

Report widgets:
- **Error Distribution by Failure Category**: break down failure types (Environment, AUT Issue, Test Script, etc.) across all test results.
- **Common Errors**: number of automation issues.
- **Impacted Test Cases**: number of test cases affected by these **Common Errors**.
- **Common Error Data Table**: error details with occurrence counts, number of affected test cases, sample messages, and [failure categories](#failure-categories).

## Explore the Report

The report has two view modes for different purposes:

### Latest Error Only (Default)

This view focuses on the most recent occurrence of each error. It helps teams quickly understand what is actively failing at the moment:
  - Shows **one latest instance** per grouped error.
  - Charts reflect **only latest occurrences**. 
  - The **“Impacted Test Cases”** count accounts for tests affected by the latest instance only.
  - Selecting an error opens **the most recent failed run** and its details.

<iframe src="https://demo.arcade.software/3Mjx4dq5E0HSX565iuqU?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" title="Common Automation Errors Report
" frameborder="0" loading="lazy" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" allow="clipboard-write" style=" width: 100%; height: 400px"> </iframe>

### All Errors

This view displays all occurances of each error in test cases/runs, across the selected date range or sprint/release. It's ideal to understand recurring issues, their scope of impact, or just to assess stability of the project's automation progress.

- Shows both **current and historical** occurrences per grouped error.
- Charts reflect all occurences.
- **“Impacted Test Cases”** count accounts for all affected tests.
- Selecting an error opens **Test Result Analysis report** filtered by the error itself. This report provides a high-level view of all impacted test cases, and a data table with link to each test case/run if you want to investigate further (learn more about this report at [Test Result Analysis report](/katalon-platform/analyze/reports/test-results-analysis-report)).

<iframe src="https://demo.arcade.software/3Mjx4dq5E0HSX565iuqU?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" title="Common Automation Errors Report
" frameborder="0" loading="lazy" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" allow="clipboard-write" style=" width: 100%; height: 400px"> </iframe>

## Failure Categories

- **Application Under Test (AUT) Issue** - Functional or UI issues in the application under testing (AUT).
- **Test Script Issue** - Errors in the test script such as runtime errors, element not found, wait issues, or assertion failures.
- **Test Data Issue** - Incorrect, missing, outdated, or invalid data used during execution.
- **Automation Issue** - Problems in the automation framework, libraries, or tooling.
- **Integration Issue** - Failures caused by components or systems not working together correctly.
- **Configuration Issue** - Incorrect setup of tools, browser versions, or execution parameters.
- **Environment Issue** - Instability or unavailability of test environments, servers, networks, databases, or third-party services.
- **Others** - Unspecified issues, to be investigated further.
<!--
Content coming soon.
Test Failures
# How to Analyze Error Patterns Across Test Failures

Group similar failures, identify common error patterns, and discover systemic issues across multiple test results—find root causes affecting multiple tests and prioritize high-impact fixes.

# How to Analyze Error Patterns Across Test Failures

Time required: 15 minutes
Prerequisites: Access to Test Results, multiple test runs with failures, basic understanding of test execution reports

Related guides: [Investigating Test Failures](/docs/test-failures/investigating-test-failures), [Identifying Flaky Tests](/docs/test-failures/identifying-flaky-tests), [AI-Powered Test Failure Analysis](/docs/customization/ai-test-failure-analysis)

## Overview

This guide teaches you how to group similar test failures, identify common error patterns, and find systemic issues affecting multiple tests. Instead of investigating each failure individually, you'll learn to recognize patterns across test results—whether failures share identical error messages, occur in specific environments, or correlate with particular test suites or timeframes.

Use error pattern analysis when you have multiple test failures and want to understand if they share common root causes. This approach is especially valuable after large test runs that produce many failures, when onboarding new test automation, or when investigating quality degradation across sprints. By finding patterns, you can prioritize fixes that resolve multiple failures at once rather than addressing each test individually.

Pattern analysis reveals:

- Identical errors: Multiple tests failing with the exact same error message (likely shared dependency issue)

- Environment-specific patterns: Failures concentrated in specific browsers, operating systems, or test agents

- Time-based patterns: Failures that spike after deployments, configuration changes, or specific times of day

- Suite-level patterns: Related tests failing together, suggesting shared setup, teardown, or test data problems

This systematic approach reduces Mean Time to Repair (MTTR) by helping you identify high-impact fixes that resolve many failures simultaneously.

## Step 1: Access Error Pattern Analysis Tools

Navigate to the Test Results or Reports section where you can view and filter test execution data:

Option 1: From Test Results page

- Go to Reports → Test Results in the main navigation

- You'll see a list of all test result records across your project

- By default, this shows all execution statuses (Passed, Failed, Error, etc.)

Option 2: From Test Failure Analysis Report

- Navigate to Reports → Test Failure Analysis

- This pre-filtered view focuses specifically on failed test results

- Includes visualization of failure rates and trends

Both views provide filtering and grouping capabilities for pattern analysis. Choose Test Results for broader analysis including passed tests for comparison, or Test Failure Analysis for focused failure investigation.

### Apply Initial Filters

Before analyzing patterns, scope your data to a relevant subset:

Filter by time range: Select the period you want to analyze

- Last 7 days: Recent failures and current sprint issues

- Last 30 days: Broader pattern detection across multiple sprints

- Custom date range: Target specific release cycles or deployment windows

Filter by status: Focus on failure types

- Failed: Assertion failures or test logic issues

- Error: Execution errors, exceptions, or framework problems

- Both Failed and Error: Comprehensive failure analysis

Filter by test suite (optional): Narrow analysis to specific test suites if investigating targeted areas

- Regression suite: Critical path failures

- Smoke tests: High-priority basic functionality issues

- Feature-specific suites: Isolated feature investigation

The filtered dataset forms the foundation for your pattern analysis. Ensure you have at least 10-20 failures for meaningful pattern detection—too few failures may not reveal clear patterns, while too many unfiltered results can obscure important groupings.

## Step 2: Group Failures by Error Message

Error message grouping is the most powerful technique for identifying failures with identical root causes. When multiple tests fail with the exact same error message, they almost certainly share a common underlying issue.

### Using Error Message Grouping

In the Test Results table or Test Failure Analysis Report:

- Locate the grouping controls: Look for a "Group By" dropdown or column header controls

- Select "Error Message" as the grouping field: This collapses test results into groups based on identical error text

- Review the grouped results: Each group represents a distinct error pattern

The grouped view shows:

- Error message text: The actual error message that's common across tests

- Occurrence count: How many test results share this exact error

- Affected tests: Which specific test cases experienced this error

- Time distribution: When these errors occurred (recent vs. historical)

### Identifying Identical vs. Similar Errors

Identical errors have character-for-character matching error messages:

ElementNotVisibleException: Element with id 'submit-button' is not visible

If you see this exact message repeated across 15 test results, those 15 failures are likely caused by the same root issue (perhaps the submit button's visibility logic changed or a CSS rule now hides it).

Similar errors have minor variations that prevent automatic grouping:

ElementNotVisibleException: Element with id 'submit-button' is not visible
ElementNotVisibleException: Element with id 'confirm-button' is not visible
ElementNotVisibleException: Element with id 'cancel-button' is not visible

These appear as separate groups because the element ID differs, but the pattern suggests a broader issue: perhaps an entire button container or stylesheet is broken, affecting multiple buttons. You'll need to manually recognize these similar patterns by scanning group names.

### Counting Pattern Occurrences

For each error group, note:

- Total occurrences: High occurrence counts (10+ failures) indicate high-impact issues worth prioritizing

- Affected test count: Different from occurrences if tests run multiple times—5 tests each failing twice = 10 occurrences, 5 unique tests

- Percentage of total failures: If one error pattern represents 40% of all failures, fixing that single issue resolves nearly half your failure volume

Example prioritization by occurrence:

- Error A: 45 occurrences (40% of failures) → High priority: Single fix resolves most failures

- Error B: 18 occurrences (16% of failures) → Medium priority: Significant but not dominant

- Error C: 3 occurrences (3% of failures) → Lower priority: Limited impact, investigate after high-volume patterns

## Step 3: Analyze Common Failure Characteristics

Beyond identical error messages, patterns emerge when you group failures by other characteristics. This reveals systemic issues that may not share the same error text but correlate with specific environments, test structures, or timeframes.

### Group by Test Suite

Grouping by test suite reveals whether failures are concentrated in specific functional areas:

Change the grouping: Select "Test Suite" from the Group By dropdown

Interpret suite-level patterns:

- One suite has disproportionate failures: If "Checkout Flow" suite has 60% failure rate while other suites have 10%, recent changes likely broke checkout functionality or its test data

- Multiple related suites failing: "User Login", "Session Management", and "Authentication" suites all failing suggests authentication service or shared login utilities are broken

- New suite with high failures: Recently added test suites often have higher failure rates due to incomplete test development, missing test data setup, or environment configuration issues

Common root causes for suite-level patterns:

- Shared test data dependencies broken or unavailable

- Suite-specific setup/teardown scripts failing

- Application feature regressions affecting related tests

- Environment configuration missing for specific test types

### Group by Execution Environment

Environment grouping identifies browser-specific, OS-specific, or agent-specific failure patterns:

Available environment dimensions:

- Browser: Chrome, Firefox, Safari, Edge

- Operating System: Windows, macOS, Linux

- Test Agent/Profile: Specific execution infrastructure or configuration profiles

- Execution Type: Local, CI/CD, scheduled, or on-demand

Example environment patterns:

- Browser-specific: All Firefox failures show "WebDriver connection refused" → Firefox WebDriver version incompatible or not installed on test agents

- OS-specific: macOS tests fail with file path errors → Path separators or case sensitivity issues in test scripts

- Agent-specific: Agent-003 has 80% failure rate while Agent-001 and Agent-002 pass → Agent-003 missing dependencies, outdated browsers, or networking issues

- Execution type: Scheduled runs at 2am fail, but manual runs pass → Overnight database maintenance or service restarts interfere with test execution

To group by environment characteristics, use filters rather than grouping:

- Apply environment filter (e.g., Browser = Firefox)

- Review failure rate for that environment

- Repeat for other environments to compare

- Identify environments with significantly higher failure rates

### Group by Time Period

Time-based patterns reveal when failures started and whether they correlate with deployments, configuration changes, or external factors:

Visualize failures over time: Use the Test Failure Analysis Report's timeline chart or group Test Results by execution date

Pattern types to identify:

- Sudden spike: Failures jump from 5% to 40% after a specific date → Recent deployment or configuration change introduced issues

- Gradual increase: Failure rate slowly climbing from 8% to 25% over two weeks → Test environment degradation, test data staleness, or accumulating technical debt

- Periodic patterns: Failures spike every Monday morning or every 6 hours → Scheduled maintenance, cache clearing, or session expiration affects tests

- Time-of-day patterns: Tests fail during business hours but pass overnight → Production load impacts test environment, or shared test data is modified by concurrent users

Cross-reference with deployment history:

- If failure spike occurred on March 15th and application version 2.4.0 deployed March 14th, strong correlation suggests version 2.4.0 introduced regressions

- If no deployments preceded failure spike, investigate environment changes, third-party service outages, or expired certificates/credentials

### Identify Cross-Characteristic Correlations

The most valuable insights come from combining multiple characteristics:

Example multi-dimensional patterns:

- Error + Environment: "Connection timeout" errors occur only in Firefox on Linux → Firefox Linux driver networking issue

- Error + Time: "Database locked" errors happen only during scheduled runs at 2am → Overlaps with nightly database backup window

- Suite + Environment: "Payment Tests" suite fails only on Agent-005 → Agent-005 missing payment gateway certificates or network access

- Suite + Time: "Performance Tests" fail during business hours, pass overnight → Production load interferes with performance baselines

To analyze correlations:

- Start with high-occurrence error pattern from Step 2

- Apply secondary filters or grouping to see if that error concentrates in specific environments, suites, or timeframes

- If 80%+ of a specific error occurs in one environment/suite/time, strong correlation suggests targeted root cause

- If error is evenly distributed, root cause likely systemic (framework, shared utility, or application-wide issue)

## Step 4: Investigate Root Causes

Once you've identified clear patterns, use the pattern characteristics to guide your root cause investigation. Different pattern types suggest different investigation approaches.

### For Environment-Specific Patterns

When failures concentrate in specific browsers, operating systems, or test agents:

Check configuration consistency: Compare environment configurations between passing and failing agents

- Browser versions: chrome://version/ or equivalent for Firefox, Safari

- WebDriver versions: Verify driver matches browser version

- Environment variables: Compare environment-specific settings like timeouts, base URLs, authentication tokens

- Installed dependencies: Check for missing libraries, certificates, or system packages

Review environment-specific test logs: Drill into individual test results from the failing environment

- Look for environment setup errors before actual test execution

- Check for permission issues, file path problems, or networking errors specific to that OS/browser

- Compare stack traces between failing environment and passing environments

Example investigation:

- Pattern: All Safari tests fail with "Element not interactable"

- Investigation: Check if Safari WebDriver version outdated → Update Safari from 15.6 to 16.1 → Rerun tests

- Root cause: Safari 16+ required new WebDriver, tests using outdated driver couldn't interact with modern Safari security model

### For Time-Based Patterns

When failures spike after specific dates or times:

Review recent changes: Check what changed around the failure spike date

- Application deployments: Review release notes for the deployment that preceded failures

- Test code changes: Check test repository commits for new tests, updated selectors, or changed assertions

- Infrastructure changes: Investigate test agent updates, browser version changes, or test data refreshes

- External dependencies: Verify third-party services (APIs, payment gateways, authentication providers) didn't introduce breaking changes

Correlate with deployment history: Use version control or deployment logs to identify changes

git log --since="2025-01-15" --until="2025-01-16" --oneline

This shows commits between the last passing day and first failing day, narrowing down potential culprits.

Investigate scheduled operations: If failures occur at specific times, check for:

- Database maintenance windows

- Cache clearing or session expiration

- SSL certificate renewals

- Scheduled data imports or exports that lock resources

Example investigation:

- Pattern: Failure rate jumped from 8% to 42% on January 16th

- Investigation: Check deployment log → Application v3.2.0 deployed Jan 15 evening → Review v3.2.0 release notes → Note: "Updated checkout button IDs for analytics tracking"

- Root cause: Button ID changes broke test selectors, need to update test locators to match new IDs

### For Suite-Specific Patterns

When failures concentrate in specific test suites or related functionality:

Examine shared dependencies: Tests in the same suite often share setup code, test data, or utilities

- Suite setup/teardown scripts: Check for recent changes or failures in @BeforeClass or suite-level fixtures

- Test data dependencies: Verify test data files, database seeds, or API mocks are available and valid

- Shared utilities: Review helper functions or page objects used by multiple tests in the suite

Check for test order dependencies: Suite-level failures sometimes result from tests that aren't properly isolated

- Tests assume specific execution order

- Tests don't clean up state, causing subsequent tests to fail

- Tests share mutable global state instead of using independent test data

Verify feature functionality: If multiple tests in "Shopping Cart" suite fail:

- Manually test shopping cart functionality in the application

- Check if application feature is broken (genuine defect) vs. tests outdated (need updating)

- Review recent feature changes in that application area

Example investigation:

- Pattern: "User Profile" suite has 70% failure rate, all other suites 5-10%

- Investigation: Review suite setup script → Find database query: SELECT * FROM users WHERE test_flag=true returning zero results → Check test database → Test users were deleted during data cleanup script run

- Root cause: Recent database cleanup script removed test users, suite setup can't find test data, all profile tests fail during setup phase

### Using Test Result Details

For representative samples of each pattern, drill into individual Test Result Detail pages to examine:

Error logs and stack traces: Full technical details of what went wrong

- Complete error message (may be truncated in list view)

- Stack trace showing exact line where failure occurred

- Application logs captured during test execution

Screenshots and videos: Visual evidence of test state at failure

- See what UI state caused failures

- Identify timing issues (element not ready, animation in progress)

- Spot visual regressions or layout problems

Execution metadata: Context about when and where test ran

- Browser/OS version details

- Test agent identifier and configuration

- Execution duration and performance metrics

- Test data or configuration used for this specific run

Compare multiple results from same pattern: Look at 3-5 test results within the same error pattern to confirm consistency

- If all show identical screenshots and logs, pattern is consistent and root cause likely singular

- If screenshots vary significantly, pattern may group unrelated failures coincidentally sharing similar error text

## Step 5: Prioritize Pattern Resolution

After identifying patterns and investigating root causes, prioritize which issues to fix first based on impact and effort:

### High-Impact Patterns

Prioritize patterns that:

- Affect many test results: Error occurs in 40+ test results (fixing once resolves many failures)

- Affect critical tests: Failures in smoke tests, regression suite, or release-blocking tests

- Block entire suites: Pattern causes all tests in a suite to fail or skip (affects test coverage)

- Impact production confidence: Failures in tests that mirror critical user workflows

Example high-impact prioritization:

- Pattern A: Database connection failure affecting 52 test results across 3 test suites → Highest priority: Blocks most testing, likely critical infrastructure issue

- Pattern B: Checkout button selector broken, affecting 8 tests in payment suite → High priority: Critical user functionality, limited scope for fix

### Quick Wins

Prioritize patterns with simple fixes that resolve multiple failures:

- Configuration errors: Missing environment variables, incorrect URLs, or expired credentials

- Broken selectors: Element IDs or classes changed in application, easy to update in test code

- Version mismatches: WebDriver version incompatible with browser, simple update resolves

- Test data issues: Missing or corrupted test data files, straightforward to restore or regenerate

Effort vs. Impact matrix:

- High impact, low effort → Fix immediately: Broken selector affecting 30 tests, 10-minute fix

- High impact, high effort → Plan for sprint: Framework upgrade needed to support new browser versions, affects 40 tests but requires 2-3 days work

- Low impact, low effort → Opportunistic fixes: Single flaky test in rarely-run suite, fix when working in that area

- Low impact, high effort → Consider alternatives: 2 tests failing due to complex test data dependency, may be faster to rewrite tests than fix dependency

### Document Findings

Create documentation for your team to capture pattern analysis results:

Pattern summary document (in wiki, Confluence, or shared drive):

- Pattern description: "Connection timeout errors in payment integration tests"

- Affected tests: List of test case names or suite references

- Root cause: "Payment gateway staging environment was decommissioned, tests pointing to non-existent endpoint"

- Resolution: "Updated test configuration to use new payment gateway staging URL"

- Fixed by: Team member name and date

- Verification: "Reran payment suite, all tests now passing"

Shared pattern database: Maintain a living document or spreadsheet of known patterns

- Helps future investigations recognize recurring issues quickly

- Provides historical context for new team members

- Tracks which patterns resurface after supposed fixes (indicating incomplete resolution)

Example pattern log:

Date IdentifiedPatternAffected TestsRoot CauseResolutionStatus2025-01-16"ElementNotVisible"45 testsCSS z-index change hid buttonsUpdated CSS in v3.2.1Fixed2025-01-14"Connection timeout"12 API testsStaging API rate limitingIncreased timeout, reduced test frequencyFixed2025-01-10"Data not found"8 profile testsTest user cleanup scriptExcluded test users from cleanupFixed

Communicate to stakeholders: Share key findings in sprint retrospectives or team meetings

- Report on high-impact patterns and fixes to demonstrate testing efficiency improvements

- Highlight systemic issues requiring architectural changes or additional investment

- Celebrate quick wins that resolved many failures with single fixes

## Best Practices

### Establish Regular Pattern Analysis Cadence

Don't wait for crises to analyze patterns—make it a routine practice:

Weekly pattern reviews: Every sprint or weekly iteration

- Review past 7 days of test failures

- Identify new patterns emerging

- Track whether previously identified patterns persist

- Adjust test maintenance priorities based on patterns

Post-deployment analysis: After major releases or changes

- Immediately analyze failures after deployment to detect regressions quickly

- Compare failure patterns before and after deployment to isolate new issues

- Faster identification means faster fixes and reduced customer impact

Sprint retrospective reviews: During team retrospectives

- Present pattern analysis findings to entire team

- Discuss whether patterns indicate test quality issues vs. application defects

- Identify process improvements to prevent pattern recurrence

### Track Pattern Trends Over Time

Monitor how patterns evolve to measure testing health and fix effectiveness:

Pattern persistence tracking: Are fixed patterns staying fixed?

- If "Connection timeout" pattern reappears monthly, fix was superficial (increased timeout) rather than addressing root cause (slow API endpoints)

- Recurring patterns indicate systemic issues requiring architectural changes

New pattern velocity: How quickly do new patterns emerge?

- Increasing rate of new patterns suggests decreasing test stability or increasing application complexity

- Stable or decreasing new pattern rate indicates maturing test suite and stable application

Pattern resolution time: How long from identification to fix?

- Track time-to-resolution for different pattern types to identify bottlenecks

- Long resolution times may indicate skill gaps, resource constraints, or complex technical debt

Failure volume trends: Is total failure volume decreasing?

- Effective pattern analysis should reduce overall failure count over time as high-impact patterns are resolved

- If volume remains constant despite fixes, new issues are being introduced at same rate as old ones are resolved

### Share Findings with Development Team

Pattern analysis benefits not just testing teams but entire development organizations:

Bug reports with pattern context: When creating defect tickets, include:

- How many tests are affected (demonstrates impact)

- Pattern analysis summary (provides context beyond single failure)

- Representative test results (specific examples)

- Suggested fix based on root cause investigation

Architectural feedback: Patterns often reveal application design issues:

- High error rates in specific browsers suggest browser-specific code paths need attention

- Frequent timeout errors in specific API tests indicate performance problems

- Patterns of data-related failures suggest data model or test data management improvements needed

Quality metrics in standups/demos: Report on pattern analysis outcomes:

- "We identified a CSS selector change affecting 45 tests; updated selectors, now suite is passing again"

- "Discovered payment gateway timeout pattern in 18 tests; worked with backend team to optimize API response times"

- Demonstrates testing team's value in improving overall product quality, not just reporting failures

### Automate Pattern Detection Where Possible

For mature testing organizations, consider automation:

Automated grouping reports: Schedule weekly reports that automatically group failures

- Email or Slack notifications with top error patterns

- Reduces manual effort in Steps 1-2 of this guide

- Ensures patterns are detected even when team is busy with other priorities

Alert thresholds for new patterns: Set up alerts when new high-volume patterns emerge

- Trigger notification when same error appears in 10+ test results within 24 hours

- Enables rapid response to newly introduced issues

- Prevents small problems from becoming widespread before anyone notices

Pattern trend dashboards: Create custom dashboards showing:

- Top error patterns by occurrence count

- Pattern resolution rate over time

- New vs. recurring patterns

- Failure volume trends by pattern category

These approaches scale pattern analysis from ad-hoc investigation to continuous, proactive quality monitoring.

## Troubleshooting

### Can't find clear patterns in failures

### Error messages are too generic to group effectively

### Patterns identified but root cause still unclear

### Too many patterns to prioritize effectively

## Role-Based Workflows

[### Automation Engineer Workflow
See how Automation Engineers use error pattern analysis to identify systemic issues, prioritize test stabilization efforts, and reduce flaky test maintenance burden by fixing root causes affecting multiple tests.](/docs/workflows/automation-engineer)

## See Also

- [Investigating Test Failures](/docs/test-failures/investigating-test-failures) - Step-by-step workflow for investigating individual test failures

- [Identifying Flaky Tests](/docs/test-failures/identifying-flaky-tests) - Detect unreliable tests with inconsistent pass/fail patterns using PFS metrics

- [AI-Powered Test Failure Analysis](/docs/customization/ai-test-failure-analysis) - Use AI to automatically categorize failures and get plain-English explanations

- [Test Failure Analysis Report](/docs/reports/test-failure-analysis) - Understand the built-in report for failure rate visualization and analysis

- [Best Practices for Test Maintenance](/docs/test-failures/test-maintenance-best-practices) - Proactive strategies to prevent common failure patterns

[Identifying Flaky Tests with Stability IntelligenceLearn how to systematically find and analyze flaky tests using Test Stability Intelligence features including PFS scores, Smart Tags, and trend visualization in Katalon TestOps.](/docs/test-failures/identify-flaky-tests)[Configure Failure Analysis SettingsCustomize stability detection settings and Smart Tag thresholds—configure time windows, minimum executions, and tag sensitivity to match your team's testing patterns and quality standards.](/docs/test-failures/configure-failure-analysis-settings)

-->