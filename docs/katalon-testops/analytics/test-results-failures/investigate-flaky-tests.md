# Investigate flaky tests

This document explains how to use TestOps capabilities to investigate flaky tests.

<img/>
<br/>

Flaky tests are automated tests that sometimes pass and sometimes fail, without code changes. They are unreliable, cause false-alarm, waste engineering time, and erode confidence in your test suite.

TestOps uses Probabilistic Flakiness Score (PFS) to flag potentially flaky tests, which is calculated by analyzing pass-to-fail transition patterns across your test execution history. This helps you detect flaky tests, and assign teammates for further troubleshooting.

## Steps to investigate flaky tests

Before you investigate, read [PFS Calculation] and [Smart Tag configuration] to understand default configurations for flakiness detection and how to customize them.

### Step 1: Detect flaky tests

Throughout TestOps, entries to flaky test cases are:

- **Test Case Health Analysis Report** while assessing test case quality (see [Assess Test Quality] to learn more). Flaky tests have ... pfs score, and are with tag `flaky` (can be filtered):

<img/>
<br/>

- **Test Run Details page** while assessing test case failure (see [Investigate Test Failures](docs/katalon-testops/analytics/test-results-failures/investigate-test-failures.md) to learn more). Flaky tests are flagged with tag `flaky` (can be filtered):

<img/>
<br/>

:::tip
- Apply filter "Flaky" to quickly see all flaky tests.
- **Test Case Health Analysis Report** displays PFS score for flaky tests (see [PFS calculation]() to learn more). Tests with high PFS scores should be prioritized.
:::endtip

Either entry flags flaky test cases. Click on a link to view the test run details, and start investigation.

### Step 2: Analyze patterns with trend visualization

Each test run detail page/test result detail page comes with a trend visualization line, that lists past results of the same test:

<img/>
<br/>

You may spot patterns such as:

- Pass → Fail → Pass → Fail with no discernible logic => Flaky
- Failures scattered across time without clustering => Flaky
- Failures clustered by time-of-day (e.g., overnight runs fail more) => Flaky due to environment
- Failures correlated with specific execution environments => Flaky due to environment

Code deployments should also be considered. For example:

- Deployment A at Run #10, Test passes 5 times after => may be due to code changes, not a flaky test.
- Deployment B at Run #20, but test passes 3 times, fails 2 times every 5 runs regardless of deployment => pattern suggests flakiness, not code regression

### Step 3: Investigate root cause of flakiness

Common causes of flakiness are:

#### Timing and Synchronization Issues

- Hard-coded waits (sleep(5)) that are too short or too long
- Missing waits for dynamic content, AJAX calls, or animations
- Race conditions where element appears before JavaScript fully loads

**Fix**: Use explicit waits with conditions (wait for element to be clickable, visible, etc.)

#### Dynamic Selectors

- Changing element IDs (auto-generated, timestamp-based)
- Index-based selectors (div:nth-child(3) breaks when order changes)
- Fragile XPath that depends on deep DOM hierarchy

**Fix**: Use stable selectors (data-testid, ARIA labels, semantic attributes)...

#### Test Data Dependencies

- Shared test data modified by other tests (data not isolated)
- State not cleaned up between test runs (cache, cookies, local storage)
- Database state leakage (previous test creates records affecting next test)

**Fix**: Implement test data isolation, setup/teardown hooks, database transactions...

#### Environment Variability

- Resource contention (CPU, memory, network bandwidth)
- Third-party service flakiness (external APIs, payment gateways)
- Browser version differences across test agents
- Network latency causing timeouts

**Fix**: Mock external dependencies, increase timeout thresholds, use stable test environments...

#### Race Conditions

- Asynchronous operations completing in unpredictable order
- Event listeners not attached before events fire
- Animation timing causing element positions to change mid-interaction

**Fix**: Wait for specific application states, use debouncing, disable animations in test mode...

:::tip
- Open **Execution Logs** and scan for timing-related warnings (`Element not found`, `Timeout waiting for element`, ...) to identify timing-related causes.
- If the current test result is `failed`, you can use AI analysis feature to have AI work on the issue, and give you a pointer to investigate flakiness. See [Investigate Failure - Triage with AI](docs/katalon-testops/analytics/test-results-failures/investigate-test-failures.md#triage-with-ai) to learn more.
:::endtip

### Step 4: Prioritize Flaky Test Resolution

Not all flaky tests are equally urgent. Use a systematic prioritization framework to maximize team efficiency.

- Prioritize fixing critical tests with a high PFS score.
- If the test is unimportant for the current release, consider disabling it to avoid viewing its data for test health analysis.
  
### Step 5: Track Resolution Progress

Once you've determined a resolution and had it fixed:

- Leave notes in the **General** tab and monitor its subsequent runs.
- Look out for signs of improvements (e.g. decreasing PFS score). If not, revisit the test.
- Create a Flaky Test Dashboard to track tests in bulk. See [Create Custom Dashboard]() to learn more.

## Best Practices

- Configure Smart Tag thresholds to match your team's tolerance. See [Configure PFS Score]() to learn more.
- Establish regular stability review cadence: weekly to resolve urgent cases, quarterly to review overall test health/stability and set improvement goals. 
- Keep flaky tests properly documented by leaving notes in **General** tab, and document links to these flaky tests in a central hub (Jira...), to keep the team informed.
- Monitor PFS score after fixes, and re-visit the test if PFS score doesn't improve.
- Involve stability insight when sharing reports with stakeholders.

<!--

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
-->