# Analyze Automation Error Patterns

This document explains how to use the **Common Automation Errors Report** to detect failure patterns due to automation errors, to identify deep root causes behind test failures. Instead of investigating each failed test in isolation, TestOps helps you detect patterns across failures, enabling faster, higher-impact troubleshooting.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/common-automation-error-report.png" alt="common automation error report" width="700px" />

:::requirement
Ensure you have at least 10-20 failures for meaningful pattern detection—too few failures may not reveal clear patterns, while too many unfiltered results can obscure important groupings.
:::endrequirement

Pattern analysis reveals:

- Identical errors: Multiple tests failing with the exact same error message (likely shared dependency issue)
- Environment-specific patterns: Failures concentrated in specific browsers, operating systems, or test agents
- Time-based patterns: Failures that spike after deployments, configuration changes, or specific times of day
- Suite-level patterns: Related tests failing together, suggesting shared setup, teardown, or test data problems

This systematic approach reduces time spent on troubleshooting by identifying high-impact fixes that resolve many failures at once.

Widgets on this report:
- **Error Distribution by Failure Category**: break down failure types (Environment, AUT Issue, Test Script, etc.) across all test results.
- **Common Errors**: number of automation issues.
- **Impacted Test Cases**: number of test cases affected by these **Common Errors**.
- **Common Error Data Table**: error details with occurrence counts, number of affected test cases, sample messages, and [failure categories](#failure-categories).

## Explore the Report

:::tip
Analyze failure patterns is one step in our recommended failure investigation workflow. See [Investigate failures](docs/katalon-testops/analytics/test-results-failures/investigate-test-failures.md) to understand how you can use TestOps capabilities to optimize your failure investigation process.
:::endtip

Follow these below steps to effectively analyze automation error patterns:

### Step 1: Apply scopes and filters

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

### Step 2: Select a view mode

The report has two view modes for different purposes:

#### Latest Error Only (Default)

This view focuses on the most recent occurrence of each error. It helps teams quickly understand what is actively failing at the moment:
  - Shows **one latest instance** per grouped error.
  - Charts reflect **only latest occurrences**. 
  - The **“Impacted Test Cases”** count accounts for tests affected by the latest instance only.
  - Selecting an error opens **the most recent failed run** and its details.

<iframe src="https://demo.arcade.software/3Mjx4dq5E0HSX565iuqU?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" title="Common Automation Errors Report
" frameborder="0" loading="lazy" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" allow="clipboard-write" style=" width: 100%; height: 400px"> </iframe>

#### All Errors

This view displays all occurances of each error in test cases/runs, across the selected date range or sprint/release. It's ideal to understand recurring issues, their scope of impact, or just to assess stability of the project's automation progress.

- Shows both **current and historical** occurrences per grouped error.
- Charts reflect all occurences.
- **“Impacted Test Cases”** count accounts for all affected tests.
- Selecting an error opens **Test Result Analysis report** filtered by the error itself. This report provides a high-level view of all impacted test cases, and a data table with link to each test case/run if you want to investigate further (learn more about this report at [Test Result Analysis report](/katalon-platform/analyze/reports/test-results-analysis-report)).

<iframe src="https://demo.arcade.software/3Mjx4dq5E0HSX565iuqU?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" title="Common Automation Errors Report
" frameborder="0" loading="lazy" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" allow="clipboard-write" style=" width: 100%; height: 400px"> </iframe>

### Step 3: View grouped error message

The error data table shows:

- Error message text: The actual error message that's common across tests
- Occurrence count: How many test results share this exact error
- Affected tests: Which specific test cases experienced this error
- Time distribution: When these errors occurred (recent vs. historical)

Our AI capabilities group identical/similar errors and display an example the represents the whole group. Clicking on each error reveals the individual errors.

- If you see an identical error repeated across many test results, those failures are likely caused by the same root issue (perhaps the submit button's visibility logic changed or a CSS rule now hides it).
- If you see multiple similar errors under the representative, it suggests a broader issue: perhaps an entire button container or stylesheet is broken, affecting multiple buttons. You'll need to manually recognize these similar patterns by scanning group names.

### Step 4: Prioritize by pattern occurrences

For each error group, note:

- Total occurrences: High occurrence counts (10+ failures) indicate high-impact issues worth prioritizing
- Affected test count: Different from occurrences if tests run multiple times—5 tests each failing twice = 10 occurrences, 5 unique tests
- Percentage of total failures: If one error pattern represents 40% of all failures, fixing that single issue resolves nearly half your failure volume

Example prioritization by occurrence:

- Error A: 45 occurrences (40% of failures) → High priority: Single fix resolves most failures
- Error B: 18 occurrences (16% of failures) → Medium priority: Significant but not dominant
- Error C: 3 occurrences (3% of failures) → Lower priority: Limited impact, investigate after high-volume patterns

### Step 5: Apply additional filters to reveal underlying patterns

Beyond identical error messages, patterns emerge when you group failures by other characteristics. This reveals systemic issues that may not share the same error text but correlate with specific environments, test structures, or timeframes.

<img/>
<br/>

You can save a custom view for each filter, then switch between custom views to understand these underlying patterns.

#### Test Suite patterns

- One suite has disproportionate failures: If "Checkout Flow" suite has 60% failure rate while other suites have 10%, recent changes likely broke checkout functionality or its test data
- Multiple related suites failing: "User Login", "Session Management", and "Authentication" suites all failing suggests authentication service or shared login utilities are broken
- New suite with high failures: Recently added test suites often have higher failure rates due to incomplete test development, missing test data setup, or environment configuration issues

Common root causes:

- Shared test data dependencies broken or unavailable
- Suite-specific setup/teardown scripts failing
- Application feature regressions affecting related tests
- Environment configuration missing for specific test types

#### Execution Environment patterns

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

#### Time Period patterns

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

#### Identify Cross-Characteristic Correlations

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
