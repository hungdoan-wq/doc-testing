# Investigate Flakiness

This document is about Test Case Health Analysis Report. Another use is [Assess Test Case Quality](docs/katalon-testops/analytics/test-results-failures/assess-test-case-quality.md)
<!--
Test Failures
# Identifying Flaky Tests with Stability Intelligence

Learn how to systematically find and analyze flaky tests using Test Stability Intelligence features including PFS scores, Smart Tags, and trend visualization in Katalon TestOps.

# Identifying Flaky Tests with Stability Intelligence

Time required: 18 minutes
Prerequisites:

- Test execution history (minimum 10 runs recommended for accurate PFS calculation)

- Access to Test Results or Test Cases pages

- Basic understanding of test execution concepts

Related guides:

- [Get Started with Test Case Health Analysis](/docs/test-case-reports/health-stability/get-started-with-test-case-health) - Use PFS scores and Smart Tags for morning triage and maintenance planning

- [Understanding Test Stability Intelligence](/docs/test-failures/test-stability-intelligence)

- [Configuring Stability Detection Rules](/docs/test-failures/configuring-stability-detection)

- [Investigating Test Failures](/docs/test-failures/investigating-test-failures)

🚧 Coming Soon - Phase 1: Test Stability Intelligence (Q1 2025)
The Test Stability Intelligence features described in this guide (PFS scores, Smart Tags, Trend Visualization) are launching in Q1 2025 as part of the Investigate Failure Flow initiative. This documentation prepares you for these powerful flakiness detection capabilities.

## Overview

Flaky tests are automated tests that exhibit intermittent failures—passing sometimes and failing other times without code changes. These unreliable tests erode confidence in your test suite, waste engineering time on false alarms, and can mask real bugs.

Why flaky tests are costly:

- Engineers spend hours investigating false failures

- Teams ignore legitimate failures due to "cry wolf" effect

- Release delays while teams debug non-issues

- Reduced trust in automation leads to manual verification overhead

How Test Stability Intelligence solves this:

TestOps uses Probabilistic Flakiness Score (PFS) to automatically identify flaky tests by analyzing pass-to-fail transition patterns across your test execution history. Instead of manually tracking which tests fail intermittently, the platform flags potential flakiness with Smart Tags and provides Trend Visualization to confirm patterns.

This guide shows you how to systematically find flaky tests, understand their severity, and prioritize fixes using these intelligent stability features.

## Step 1: Access Test Stability View

Navigate to the Test Results or Test Cases page where Test Stability Intelligence indicators are displayed alongside your test execution data.

### Accessing the Test Results Page

- From the TestOps main menu, select Test Results (or Test Cases if you prefer test-centric view)

- Select the project, release, or test suite you want to analyze

- Look for the Stability Intelligence toggle or filter in the page toolbar

- Enable Show Stability Indicators to display PFS scores and Smart Tags in the test list

### Understanding Stability Indicators in List View

Once enabled, you'll see two key indicators for each test:

PFS Score - Numerical score from 0.0 to 1.0 displayed in a dedicated column:

- Higher scores indicate greater flakiness likelihood

- Color-coded: Green (0.0-0.3), Yellow (0.3-0.7), Red (0.7-1.0)

- Calculated from historical pass-to-fail transition patterns

Smart Tags - Colored badges that categorize stability status:

- Flaky (orange badge): PFS ≥ 0.7, alternating pass/fail pattern

- Always Failing (red badge): Consistent failures over time

- New Failure (blue badge): Recently started failing after passing consistently

- Stable (green badge): Consistent pass behavior (PFS < 0.3)

Hover over any Smart Tag to see detailed PFS calculation context and transition history.

## Step 2: Filter by Flaky Tests Using Smart Tags

Use Smart Tag filters to focus on flaky tests and prioritize investigation efforts.

### Applying the Flaky Tag Filter

- Click the Filters button in the toolbar

- Locate the Stability Tags filter section

- Check the Flaky tag option

- The list refreshes to show only tests with PFS ≥ 0.7 (high flakiness probability)

Understanding the Flaky tag criteria:

- Applied automatically to tests with PFS score ≥ 0.7 (default threshold)

- Indicates frequent pass-to-fail transitions without code changes

- Hover over the tag badge to see:

Exact PFS score
Number of transitions analyzed
Time window of analysis (e.g., "Last 30 runs")

### Sorting by PFS Score

For maximum impact, prioritize the worst offenders first:

- Click the Sort dropdown in the toolbar

- Select Sort by PFS (High to Low)

- Tests with highest flakiness scores appear at the top

Prioritization strategy:

- Start with PFS ≥ 0.8 (very high flakiness)

- Focus on critical path tests first (login, checkout, payment flows)

- Consider test execution frequency (frequently-run flaky tests waste more time)

### Filtering by Other Stability Tags

Combine filters to analyze different stability patterns:

Always Failing - Tests consistently failing:

- May indicate persistent bugs, not flakiness

- Investigate for legitimate defects or broken test setup

New Failure - Recently started failing:

- Correlate with recent deployments or code changes

- Potential environmental issues or infrastructure changes

Stable - Reliable tests:

- Use as baseline for comparison

- Study their characteristics (better waits, robust selectors)

Apply multiple tag filters simultaneously to compare cohorts or exclude certain patterns from analysis.

## Step 3: Understand Flakiness Levels with PFS

The Probabilistic Flakiness Score (PFS) quantifies how likely a test is flaky based on historical execution patterns. Understanding PFS interpretation is key to effective triage.

### PFS Score Interpretation

0.0 - 0.3: Consistent (Stable)

- Test behaves predictably over time

- Pass or fail consistently within the same code version

- Low priority for flakiness investigation

0.3 - 0.7: Potentially Flaky (Investigate if Frequent)

- Some pass/fail alternation detected

- May be flaky or may have legitimate environmental sensitivity

- Investigate if test runs frequently or is business-critical

0.7 - 1.0: Highly Flaky (Urgent Attention Needed)

- Strong pattern of alternating results without code changes

- Significant engineering time waste

- High priority for stabilization or quarantine

### How PFS is Calculated

PFS analyzes your test execution history with sophisticated pattern recognition:

Key calculation factors:

- Pass-to-Fail Transitions - Frequency of status changes (passing → failing or failing → passing) within the same code version

- Code Change Context - Distinguishes between failures after code changes (potentially legitimate) vs. same-code alternations (likely flaky)

- Temporal Patterns - Identifies if failures correlate with time-of-day, day-of-week, or infrastructure changes

- Execution Environment - Considers if failures occur across multiple environments (more likely flaky) or isolated to one (possibly environmental issue)

Example scenario:

- Test executes 20 times on the same code commit

- Passes 12 times, fails 8 times with no pattern

- PFS score: 0.78 (highly flaky)

Why PFS is Better than Simple Pass Rate:

- Pass rate (60% in example above) doesn't distinguish flakiness from persistent bugs

- A test with 60% pass rate could be:

Flaky (alternating randomly) → High PFS
Legitimately broken after code change → Low PFS

- PFS accounts for code change context, only flagging alternations within the same code version

- PFS considers transition frequency, not just overall success rate

For complete PFS methodology and calculation details, see [Test Stability Metrics Reference](/docs/test-failures/test-stability-reference).

## Step 4: Analyze Flaky Test Patterns with Trend Visualization

Once you've identified flaky tests using PFS and Smart Tags, use Trend Visualization to confirm patterns and investigate root causes.

### Viewing Trend Visualization

- From the filtered test list, click on a test flagged as Flaky

- The Test Result Details page opens

- Scroll to the Stability Analysis section

- View the Trend Visualization chart showing execution history

### Identifying Alternating Patterns vs. Consistent Patterns

Classic flaky pattern:

- Pass → Fail → Pass → Fail with no discernible logic

- No correlation with deployment markers (vertical dashed lines on chart)

- Failures scattered across time without clustering

Consistent failure pattern (NOT flaky):

- Continuous failures after a specific deployment marker

- Indicates legitimate bug introduced by code change

- Low PFS score despite failures

Environmental flaky pattern:

- Failures clustered by time-of-day (e.g., overnight runs fail more)

- Failures correlated with specific execution environments (visible in environment filter)

- Suggests infrastructure or resource contention issues

### Correlating Failures with Deployments and Code Changes

Use deployment markers to distinguish flakiness from legitimate regressions:

- Hover over deployment markers (vertical lines) to see commit details

- Check if failures consistently occur after a marker (likely code issue)

- Check if failures occur across multiple code versions (likely flaky)

Example analysis:

- Deployment A at Run #10 → Test passes 5 times after

- Deployment B at Run #20 → Test passes 3 times, fails 2 times

- Pattern suggests flakiness, not code regression

Time-based correlation:

- Enable the Time View toggle to see execution timestamps

- Identify if failures correlate with:

Specific hours (e.g., 2-4 AM when resources are low)
Weekends (different infrastructure load)
Concurrent test suite execution (resource contention)

## Step 5: Investigate Root Causes of Flakiness

Understanding why a test is flaky is essential for effective fixes. Common flakiness causes fall into distinct categories.

### Common Flakiness Root Causes

Timing and Synchronization Issues:

- Hard-coded waits (sleep(5)) that are too short or too long

- Missing waits for dynamic content, AJAX calls, or animations

- Race conditions where element appears before JavaScript fully loads

- Fix: Use explicit waits with conditions (wait for element to be clickable, visible, etc.)

Dynamic Selectors:

- Changing element IDs (auto-generated, timestamp-based)

- Index-based selectors (div:nth-child(3) breaks when order changes)

- Fragile XPath that depends on deep DOM hierarchy

- Fix: Use stable selectors (data-testid, ARIA labels, semantic attributes)

Test Data Dependencies:

- Shared test data modified by other tests (data not isolated)

- State not cleaned up between test runs (cache, cookies, local storage)

- Database state leakage (previous test creates records affecting next test)

- Fix: Implement test data isolation, setup/teardown hooks, database transactions

Environment Variability:

- Resource contention (CPU, memory, network bandwidth)

- Third-party service flakiness (external APIs, payment gateways)

- Browser version differences across test agents

- Network latency causing timeouts

- Fix: Mock external dependencies, increase timeout thresholds, use stable test environments

Race Conditions:

- Asynchronous operations completing in unpredictable order

- Event listeners not attached before events fire

- Animation timing causing element positions to change mid-interaction

- Fix: Wait for specific application states, use debouncing, disable animations in test mode

### Using AI-Powered Failure Analysis

TestOps can automatically categorize flakiness causes using AI:

- In the Test Result Details page, scroll to AI Failure Analysis section

- Review the Failure Category classification (Timing Issue, Selector Issue, Data Issue, etc.)

- Read the Recommended Actions generated by the AI

- Click View Similar Failures to see if other tests have the same root cause

For complete guide on AI analysis features, see [Using AI-Powered Failure Analysis](/docs/test-failures/ai-powered-failure-analysis).

### Reviewing Execution Logs for Timing Patterns

Dive into logs to confirm timing hypotheses:

- Open the Execution Logs tab in Test Result Details

- Search for timing-related warnings:

"Element not found"
"Timeout waiting for element"
"StaleElementReferenceException"

- Note the timestamp differences between log entries:

If "Click button" and "Button clicked" are milliseconds apart, timing is tight
If failures show long gaps (10+ seconds), timeout issues likely

### Checking Test Composition Metrics

Analyze test construction for flakiness indicators:

- Execution Time Variance - High variance (e.g., 3s one run, 15s next) suggests timing sensitivity

- Step-Level Stability - Identify which specific step fails intermittently

- Retry Attempts - Tests requiring frequent retries are strong flakiness candidates

## Step 6: Prioritize Flaky Test Resolution

Not all flaky tests are equally urgent. Use a systematic prioritization framework to maximize team efficiency.

### Priority Matrix: PFS Score × Test Criticality

High PFS + Critical Test = Urgent Priority:

- PFS ≥ 0.7 AND test covers critical business path (login, checkout, payment)

- Action: Fix immediately or quarantine until fixed

High PFS + Non-Critical Test = Medium Priority:

- PFS ≥ 0.7 but test covers edge case or rarely-executed feature

- Action: Schedule for stabilization sprint or disable if maintenance cost too high

Medium PFS + Critical Test = Monitor:

- PFS 0.3-0.7 but test is business-critical

- Action: Watch for PFS trend increase, investigate proactively

Medium/Low PFS + Non-Critical Test = Low Priority:

- Action: Accept occasional failures, fix opportunistically

### Stabilization Cost vs. Disabling Tests

When to invest in fixing:

- Test covers critical business functionality

- Root cause is clearly identifiable and fixable

- Fix benefits multiple tests (e.g., improving wait utility function)

- Test has high execution frequency (daily, on every commit)

When to consider disabling:

- Test is redundant (covered by other stable tests)

- Fix requires disproportionate effort (complete rewrite)

- Test covers deprecated feature

- Environmental issue not under team control

### Tracking Resolution Progress

Monitor improvements after fixes:

- Tag fixed tests with "Flakiness-Fixed" label

- Monitor PFS score trend over next 20-30 runs

- Goal: PFS drops below 0.3 within 2 weeks

- If PFS remains high, revisit root cause analysis

Create a Flaky Test Dashboard to track:

- Number of tests with PFS ≥ 0.7 (target: decreasing trend)

- Average PFS score across test suite (target: < 0.2)

- Engineering time spent on false failure investigation (target: reduce by 50%+)

## Best Practices

Configure Stability Detection Rules for Your Team:

- Adjust PFS thresholds to match your team's tolerance (default 0.7 may be too strict or too lenient)

- Customize Smart Tag thresholds based on your execution frequency

- See [Configuring Stability Detection Rules](/docs/test-failures/configuring-stability-detection) and [Configure Failure Analysis Settings](/docs/test-failures/configure-failure-analysis-settings)

Establish Regular Stability Review Cadence:

- Weekly: Review new Flaky tags, triage urgent cases

- Sprint Planning: Allocate stabilization tasks to backlog

- Quarterly: Analyze overall suite stability trends, set improvement goals

Document Known Flaky Tests:

- Maintain a Known Flaky Tests wiki page with:

Test name and ID
PFS score and trend
Suspected root cause
Workaround (if exists)
Owner assigned to fix

- Link to Jira tickets for tracking

Monitor PFS Trends After Fixes:

- Don't assume one fix resolves flakiness

- Track PFS for 20-30 runs post-fix to confirm stabilization

- Re-investigate if PFS doesn't improve

Prevent New Flakiness:

- Code review checklist for new tests:

Uses explicit waits with conditions
Uses stable selectors (data-testid preferred)
Isolated test data (no shared state)
No hard-coded sleeps

- Fail builds if new tests show PFS > 0.5 in first 10 runs

Share Stability Insights with Stakeholders:

- Add "Test Stability" section to sprint reports

- Highlight PFS improvements as team wins

- Quantify time saved by reducing false failure investigations

## Role-Based Workflows

[### Automation Engineer Workflow
See how Automation Engineers identify and fix flaky tests using PFS scores, Smart Tags, and stability trends to reduce CI/CD pipeline noise and improve test suite reliability by 40-60%.](/docs/workflows/automation-engineer)

## See Also

- [Understanding Test Stability Intelligence](/docs/test-failures/test-stability-intelligence) - Comprehensive framework explanation (PFS methodology, Smart Tags, detection algorithms)

- [Configuring Stability Detection Rules](/docs/test-failures/configuring-stability-detection) - Customize PFS thresholds and analysis windows

- [Configure Failure Analysis Settings](/docs/test-failures/configure-failure-analysis-settings) - Adjust automatic tagging criteria

- [Investigating Test Failures](/docs/test-failures/investigating-test-failures) - Deep-dive into failure root cause analysis

- [Test Stability Metrics Reference](/docs/test-failures/test-stability-reference) - Complete metrics glossary and calculation formulas

- [Using AI-Powered Failure Analysis](/docs/test-failures/ai-powered-failure-analysis) - Automated categorization and recommendations

[Using Test Result DetailsComprehensive guide to navigating and using the Test Result Details page in Katalon TestOps, including logs, screenshots, videos, and AI-powered failure analysis.](/docs/test-failures/use-test-result-details)[How to Analyze Error Patterns Across Test FailuresGroup similar failures, identify common error patterns, and discover systemic issues across multiple test results—find root causes affecting multiple tests and prioritize high-impact fixes.](/docs/test-failures/analyze-error-patterns)

-->