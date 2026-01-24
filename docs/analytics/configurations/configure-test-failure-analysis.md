# Configure Failure Analysis Settings

Customize stability detection settings and Smart Tag thresholds—configure time windows, minimum executions, and tag sensitivity to match your team's testing patterns and quality standards.

Status: 🚧 Coming Soon - Phase 1: Investigate Failure Flow (Q1 2025)

Customize failure analysis settings to match your team's testing patterns and quality standards. This two-part configuration process establishes global stability settings first, then fine-tunes Smart Tag detection rules to control alert sensitivity.

## Overview

Failure analysis configuration is a sequential two-part process:

Part 1: Global Stability Settings (foundational)

- Time Window: Historical lookback period for stability calculations (7/14/30/60/90 days)

- Minimum Executions: Required sample size before calculating metrics (5/10/15/20 runs)

- Impact: Determines WHICH tests are analyzed and WHAT data is used for ALL stability metrics

Part 2: Smart Tag Thresholds (fine-tuning)

- Flaky Tag: PFS threshold for unreliable pass/fail patterns (0.3 or 0.7)

- Always Failing Tag: Pass rate threshold for broken tests (50-80%)

- New Failure Tag: Lookback period for regression detection (5-20 runs)

- Slow Tag: Percentile threshold for performance degradation (90th-99th)

- Impact: Controls WHICH tests receive tags based on global foundation

Why this sequence matters: Global settings must be configured first because Smart Tag thresholds operate on the data foundation established by time windows and minimum executions. Configuring tags before global settings would result in inconsistent or unreliable tagging.

### Why Customize These Settings

Match Your Release Cadence:

- Daily releases → Shorter windows (7-14 days) for rapid feedback

- Monthly releases → Balanced windows (30 days) for comprehensive view

- Quarterly releases → Longer windows (60-90 days) for full cycle visibility

Align with Team Capacity:

- High-capacity QA teams → More sensitive thresholds (catch everything early)

- Resource-constrained teams → Stricter thresholds (focus on critical issues)

Adapt to Testing Patterns:

- High-frequency tests (run hourly) → Lower minimum executions for faster detection

- Low-frequency tests (run weekly) → Higher minimum for statistical confidence

Who should configure: QA Leads, Test Automation Leads, or Project Managers

## Prerequisites

- Role Required: Project Manager or Organization Admin

- Access: Navigate to Project Settings → Test Stability Configuration

- Recommended: Review testing frequency and release schedule before changing defaults

- Important: Configure Part 1 (Global Settings) BEFORE Part 2 (Smart Tag Thresholds)

## Part 1: Global Stability Settings

Global settings establish the foundational data parameters for all stability calculations. These settings determine which tests qualify for analysis and what historical data is used.

### Step 1: Access Global Stability Configuration

#### From Dashboard Widget Settings

- Navigate to any dashboard with Test Stability widgets (e.g., Live Monitor, Release Health)

- Click the gear icon (⚙️) on a stability widget (Flaky Tests, Always Failing Tests, etc.)

- Select "Configure Stability Settings" from dropdown menu

- Navigate to "Global Settings" tab

#### From Project Settings

- Navigate to Project Settings (top navigation bar)

- Select "Test Stability" from left sidebar

- Click "Global Configuration" section

### Step 2: Configure Time Window

The Time Window determines the historical lookback period for all stability calculations (PFS, pass rates, performance baselines).

#### Available Options

Time WindowBest ForExample Use Case7 daysAgile teams, daily releases"We deploy daily—need immediate feedback on new instability"14 daysWeekly sprint cycles"Two-week sprints—detect issues before sprint end"30 days (Default)Balanced view, monthly releases"Standard monthly release cycle—need comprehensive view"60 daysQuarterly releases, comprehensive analysis"Quarterly releases—want full cycle visibility"90 daysLong-term trend analysis, slow-moving projects"Annual releases—need very stable long-term baselines"

#### How to Choose

Consider your release frequency:

- Deploy multiple times per day → 7 days (react quickly to instability)

- Weekly deployments → 14 days (balance reactivity with statistical confidence)

- Monthly deployments → 30 days (default—comprehensive without being stale)

- Quarterly or less → 60-90 days (long-term stability trends)

Consider your test execution frequency:

- Tests run on every commit (100+ times/day) → 7-14 days (plenty of data quickly)

- Tests run nightly (once/day) → 30 days (10-30 executions for confidence)

- Tests run weekly → 60-90 days (8-12 executions minimum)

#### Configuration Steps

- In "Global Settings" section, locate "Time Window" dropdown

- Select desired time window: 7 days | 14 days | 30 days | 60 days | 90 days

- Preview impact: System shows "X tests will be analyzed with new window"

- Note: Shorter windows = faster reaction, but less statistical confidence

### Step 3: Configure Minimum Executions

The Minimum Executions setting defines how many test runs are required before stability metrics (PFS, Smart Tags) are calculated.

#### Available Options

Minimum RunsStatistical ConfidenceBest For5 runsLow confidenceVery high-frequency tests (>10 runs/day), need fast feedback10 runs (Default)Moderate confidenceDaily tests, balanced approach15 runsHigh confidenceTests run 2-3x per week, need reliable signals20 runsVery high confidenceWeekly tests, avoid false positives at all costs

#### How to Choose

Balance detection speed vs. accuracy:

- Lower minimum (5-10 runs): Faster detection, but higher risk of false positives (premature "Flaky" tags)

- Higher minimum (15-20 runs): More reliable signals, but slower to detect emerging issues

Consider test execution frequency:

- High-frequency tests (run multiple times daily) → 5-10 runs = 1-2 days of data

- Daily tests → 10 runs = 10 days of data (default, good balance)

- Weekly tests → 15-20 runs = 15-20 weeks of data (prevents premature tags)

#### Configuration Steps

- In "Global Settings" section, locate "Minimum Executions" dropdown

- Select desired minimum: 5 runs | 10 runs | 15 runs | 20 runs

- Preview impact: System shows "X tests currently meet this threshold"

- Note: Tests with fewer runs than this threshold will show "Insufficient data" instead of stability metrics

### Step 4: Review Global Settings Impact and Apply

Before saving, review the Configuration Impact Preview panel:

#### Impact Preview Panel

📊 Configuration Impact Preview

Current Settings:
- Time Window: 30 days
- Minimum Executions: 10 runs

New Settings:
- Time Window: 14 days
- Minimum Executions: 5 runs

Estimated Impact:
✓ 347 tests will be analyzed (previously 289)
⚠️ 58 tests now meet minimum execution threshold
⚠️ 12 tests may show different PFS due to shorter time window
ℹ️ Historical data remains available—you can revert changes anytime

#### What to Check

- Tests analyzed: More tests = broader coverage, but potentially noisier signals

- Threshold changes: Ensure newly analyzed tests have meaningful data

- PFS differences: Shorter windows may increase PFS for recently-flaky tests

#### Apply Changes

- Review impact preview carefully

- Click "Apply Global Settings" button

- System recalculates stability metrics for all tests (may take 2-5 minutes for large projects)

- Confirmation message: "Global stability settings updated successfully"

## Part 2: Smart Tag Thresholds

After configuring global settings, customize Smart Tag detection rules to control alert sensitivity. Smart Tags automatically identify problematic tests based on the stability metrics calculated using your global settings.

### Step 5: Configure Flaky Tag Threshold

The Flaky tag identifies tests with unreliable pass/fail patterns based on Probabilistic Flakiness Score (PFS).

#### Understanding PFS Thresholds

ThresholdSensitivityTags AppliedBest ForPFS ≥ 0.3High sensitivityPotentially Flaky + Highly FlakyCatch early signs of instability, proactive maintenancePFS ≥ 0.7 (Default)High confidenceOnly Highly FlakyBalanced approach, minimize false positives

#### How to Choose

Use PFS ≥ 0.3 (High Sensitivity) when:

- You want early warning of emerging flakiness

- Your team has capacity for proactive test maintenance

- You prefer false positives over missed flakiness

- Example: "We want to catch tests with ANY inconsistency before they become problematic"

Use PFS ≥ 0.7 (Default - High Confidence) when:

- You want only severe flakiness flagged

- Your team has limited bandwidth for test maintenance

- You need high confidence before prioritizing work

- Example: "Only alert us to tests that are clearly unreliable"

#### Configuration Steps

- Navigate to "Smart Tag Configuration" section (same settings page or separate tab)

- In "Flaky Tag Configuration" section, locate "PFS Threshold" setting

- Select threshold:

☐ Include Potentially Flaky (PFS ≥ 0.3) - High sensitivity
☑ Only Highly Flaky (PFS ≥ 0.7) - High confidence (default)

- Preview impact: System shows "X tests will receive Flaky tag"

- Toggle setting (do not apply yet—configure all tags first)

#### Impact Example

Scenario: Project has 500 tests

- PFS ≥ 0.7 (default): 23 tests tagged as Flaky

- PFS ≥ 0.3 (high sensitivity): 67 tests tagged as Flaky (+44 tests = +191% increase)

Decision: Use 0.3 if you can investigate 67 tests, use 0.7 if you can only handle 23.

### Step 6: Configure Always Failing Tag Threshold

The Always Failing tag identifies tests with consistently low pass rates, indicating broken functionality or outdated assertions.

#### Understanding Pass Rate Thresholds

ThresholdInterpretationTags AppliedBest ForPass Rate < 50%Fails more than half the timeVery strictCatch only critically broken testsPass Rate < 60%Fails 40%+ of the timeStrictFocus on severely problematic testsPass Rate < 70% (Default)Fails 30%+ of the timeBalancedStandard quality thresholdPass Rate < 80%Fails 20%+ of the timeSensitiveFlag tests with frequent failures

#### How to Choose

Consider your quality standards:

- < 50%: "Only flag tests that are completely broken"

- < 60%: "Flag tests failing almost half the time"

- < 70% (default): "Flag tests failing regularly (standard industry threshold)"

- < 80%: "Flag tests with ANY recurring failure pattern"

Consider your team's capacity:

- Lower threshold (50-60%): Fewer tests flagged, focus on most critical issues

- Higher threshold (70-80%): More tests flagged, proactive quality enforcement

#### Configuration Steps

- In "Always Failing Tag Configuration" section, locate "Pass Rate Threshold" dropdown

- Select threshold: 50% | 60% | 70% (Default) | 80%

- Preview impact: System shows "X tests will receive Always Failing tag"

- Consider: Higher threshold = more tests flagged (more sensitive)

#### Impact Example

Scenario: Project has 500 tests

- Pass Rate < 50%: 8 tests tagged (critical failures only)

- Pass Rate < 60%: 15 tests tagged

- Pass Rate < 70% (default): 28 tests tagged

- Pass Rate < 80%: 52 tests tagged (+24 tests = +86% increase vs default)

### Step 7: Configure New Failure Tag Threshold

The New Failure tag identifies tests that recently started failing after a consistent passing streak, indicating likely regressions.

#### Understanding Lookback Period

Lookback PeriodStatistical ConfidenceBest For5 runsLow confidenceVery high-frequency tests (multiple runs/day), need fast feedback10 runs (Default)Moderate confidenceDaily tests, balanced approach15 runsHigh confidenceTests run 2-3x per week, avoid false alarms20 runsVery high confidenceWeekly tests, only flag sustained passing streaks

#### How to Choose

Balance detection speed vs. accuracy:

- Shorter lookback (5-10 runs): Faster detection of regressions, but higher risk of false positives (test may have failed recently)

- Longer lookback (15-20 runs): More reliable "was passing" signal, but slower to detect new failures

Consider test execution frequency:

- High-frequency tests (multiple runs/day) → 5-10 runs = 1-2 days of passing data

- Daily tests → 10 runs = 10 days of passing data (default, good balance)

- Weekly tests → 15-20 runs = 15-20 weeks of passing data (very high confidence)

#### Configuration Steps

- In "New Failure Tag Configuration" section, locate "Lookback Period" dropdown

- Select lookback: 5 runs | 10 runs (Default) | 15 runs | 20 runs

- Preview impact: System shows "X tests currently meet lookback criteria"

- Note: Only tests with 100% pass rate in lookback period qualify for this tag

#### Impact Example

Scenario: Test fails today after passing streak

- 5-run lookback: Passed last 5 runs → Tag applied (2-5 days of data)

- 10-run lookback (default): Passed last 10 runs → Tag applied (5-10 days)

- 20-run lookback: Only passed 8/last 10 runs → Tag NOT applied (insufficient streak)

### Step 8: Configure Slow Tag Threshold

The Slow tag identifies tests with degraded performance compared to historical baselines, detecting infrastructure issues or test inefficiencies.

#### Understanding Percentile Thresholds

PercentileSensitivityTags AppliedBest For90th percentileHigh sensitivityFlag moderate slowdownsCatch early performance degradation95th percentile (Default)BalancedFlag significant slowdownsStandard performance monitoring99th percentileLow sensitivityFlag only extreme slowdownsMinimize performance noise

#### How to Choose

Consider performance variability:

- 90th percentile: Flags tests slower than 90% of historical runs (more sensitive to small slowdowns)

- 95th percentile (default): Flags tests slower than 95% of historical runs (balanced)

- 99th percentile: Flags tests slower than 99% of historical runs (only extreme outliers)

Consider infrastructure stability:

- Stable infrastructure (dedicated CI/CD) → 90th-95th percentile (catch real performance issues)

- Variable infrastructure (shared resources, cloud CI) → 95th-99th percentile (reduce false positives from resource contention)

#### Configuration Steps

- In "Slow Tag Configuration" section, locate "Performance Threshold" dropdown

- Select percentile: 90th | 95th (Default) | 99th

- Preview impact: System shows "X tests currently exceed this threshold"

- Note: Baselines are calculated using configured time window from global settings

#### Impact Example

Scenario: Test historically runs in 0.8-1.5 seconds

- 90th percentile baseline: 1.3s → Current run 1.8s → Tag applied (+38% slowdown)

- 95th percentile baseline (default): 1.4s → Current run 1.8s → Tag applied (+29% slowdown)

- 99th percentile baseline: 1.5s → Current run 1.8s → Tag NOT applied (+20% slowdown, within variance)

### Step 9: Review Combined Tag Impact and Apply

Before saving, review the Threshold Impact Preview panel showing combined effects of all threshold changes.

#### Combined Impact Preview Panel

📊 Smart Tag Threshold Impact Preview

Current Thresholds:
- Flaky: PFS ≥ 0.7
- Always Failing: Pass Rate < 70%
- New Failure: 10 runs lookback
- Slow: 95th percentile

New Thresholds:
- Flaky: PFS ≥ 0.3 (changed)
- Always Failing: Pass Rate < 70% (no change)
- New Failure: 15 runs lookback (changed)
- Slow: 95th percentile (no change)

Estimated Impact:
⚠️ Flaky tags: 23 → 67 tests (+44 tests, +191%)
✓ Always Failing tags: 28 tests (no change)
✓ New Failure tags: 12 → 9 tests (-3 tests, fewer qualify for longer lookback)
✓ Slow tags: 18 tests (no change)

Total tagged tests: 81 → 122 tests (+41 tests, +51%)

#### What to Check

- Tag count increases: Ensure your team can handle the workload

- Balance across tags: Avoid over-indexing on one tag type

- Alignment with goals: More sensitive = more maintenance work, less sensitive = may miss issues

#### Apply Changes

- Review combined impact carefully

- Click "Apply Threshold Changes" button

- System recalculates Smart Tags for all tests (may take 2-5 minutes)

- Confirmation: "Smart Tag thresholds updated successfully"

## Understanding Configuration Impact and Trade-Offs

### Global Settings Trade-Offs

Time Window Impact:

Shorter windows (7-14 days):

- ✅ Pros: React quickly to new instability, relevant for fast release cycles

- ⚠️ Cons: Less statistical confidence, may miss long-term patterns, seasonal issues

Longer windows (60-90 days):

- ✅ Pros: Comprehensive historical view, very stable baselines, catch seasonal patterns

- ⚠️ Cons: Slower to detect new issues, may include outdated data from old code versions

Minimum Executions Impact:

Lower minimum (5-10 runs):

- ✅ Pros: Faster detection of emerging flakiness, broader test coverage

- ⚠️ Cons: Higher false positive rate (premature "Flaky" tags), less statistical confidence

Higher minimum (15-20 runs):

- ✅ Pros: Very reliable signals, minimal false positives, high confidence

- ⚠️ Cons: Slower detection, fewer tests analyzed (especially new or infrequent tests)

### Smart Tag Threshold Trade-Offs

Higher Sensitivity Settings:

- Flaky: PFS ≥ 0.3

- Always Failing: Pass Rate < 80%

- New Failure: 5-10 runs lookback

- Slow: 90th percentile

Results:

- ✅ Pros: Catch issues earlier, proactive maintenance, fewer missed problems

- ⚠️ Cons: More false positives, higher tag volume, team may experience alert fatigue

Lower Sensitivity Settings:

- Flaky: PFS ≥ 0.7

- Always Failing: Pass Rate < 50%

- New Failure: 15-20 runs lookback

- Slow: 99th percentile

Results:

- ✅ Pros: High confidence signals, minimal false positives, focused workload

- ⚠️ Cons: May miss early warning signs, reactive rather than proactive

## Best Practices

### Start Conservative, Then Iterate

Global Settings Approach:

- Initial configuration: Use defaults (30 days, 10 runs) for 2-4 weeks

- Monitor false positives: Track how many "Flaky" tags are accurate vs. incorrect

- Adjust iteratively: If too many false positives → increase minimum runs; if missing real flakiness → decrease time window or minimum

Smart Tag Threshold Approach:

- Week 1-2: Use default thresholds, observe tag accuracy

- Week 3-4: Identify patterns:

Too many false positives → Decrease sensitivity (stricter thresholds)
Missing real issues → Increase sensitivity (looser thresholds)

- Month 2+: Fine-tune individual tag thresholds based on team feedback

### Match Your Release Cadence

Consider release frequency when choosing time windows:

- Daily releases: 7-14 day window captures relevant recent behavior

- Weekly releases: 14-30 day window balances reactivity with stability

- Monthly releases: 30-60 day window provides comprehensive sprint-level view

- Quarterly releases: 60-90 day window for full cycle visibility

### Balance Team Capacity with Quality Goals

High-capacity QA teams:

- Global: Shorter windows (7-14 days), lower minimum (5-10 runs)

- Tags: More sensitive thresholds (PFS ≥ 0.3, Pass Rate < 80%, 5-run lookback)

- Result: Catch everything early, proactive maintenance

Resource-constrained teams:

- Global: Longer windows (30-60 days), higher minimum (15-20 runs)

- Tags: Stricter thresholds (PFS ≥ 0.7, Pass Rate < 60%, 15-run lookback)

- Result: Focus on critical issues, minimize false alarms

### Consider Test Execution Patterns

Match minimum executions to test frequency:

- CI/CD tests (run on every commit): 7-14 day window + 5-10 min runs = fast feedback

- Nightly regression tests: 30 day window + 10-15 min runs = balanced approach

- Weekly full-suite tests: 60 day window + 15-20 min runs = high confidence

### Adjust Thresholds for Different Test Types

Consider creating separate stability configurations for:

- Critical path tests: More sensitive (catch any instability)

- Regression tests: Balanced (default thresholds)

- Exploratory/experimental tests: Less sensitive (expect some instability)

Note: Per-test threshold customization is planned for Phase 2.

### Seasonal Adjustments

Review configuration quarterly:

- Pre-release periods: Increase sensitivity (catch regressions early)

- Post-release periods: Decrease sensitivity (reduce noise during stabilization)

- Holiday/low-activity periods: Review baselines (may need recalibration)

## Troubleshooting

### Why are no tests showing stability metrics after changing settings?

### Stability metrics changed dramatically after adjusting time window—is this expected?

### Can I revert to previous global settings?

### Too many Flaky tags—how do I reduce false positives?

### Not enough tests are being flagged as Always Failing—we're missing broken tests

### New Failure tags are appearing for tests that failed recently—not actually 'new' failures

### Slow tags are appearing due to infrastructure issues, not test problems—how do I reduce noise?

### Can I configure different thresholds for different projects or test types?

## Next Steps

After completing failure analysis configuration:

- Monitor configuration effectiveness for 2-4 weeks—iterate based on team feedback and tag accuracy

- Review Test Stability Reference for calculation formulas and classification details → [Test Stability Metrics Reference](/docs/test-failures/test-stability-reference)

- Learn comprehensive stability framework → [Test Stability Intelligence](/docs/customization/test-stability-intelligence)

- Use stability metrics in investigations → [Identifying Flaky Tests with Stability Intelligence](/docs/test-failures/identifying-flaky-tests)

## Role-Based Workflows

[### Automation Engineer Workflow
See how Automation Engineers configure failure analysis settings (time windows, PFS thresholds, Smart Tag rules) to customize flakiness detection for their CI/CD pipeline characteristics and reduce false positive alerts.](/docs/workflows/automation-engineer)

## See Also

- [Test Stability Intelligence](/docs/customization/test-stability-intelligence) - Comprehensive framework explanation

- [Test Stability Metrics Reference](/docs/test-failures/test-stability-reference) - Quick lookup for PFS, Smart Tags, formulas

- [Identifying Flaky Tests with Stability Intelligence](/docs/test-failures/identifying-flaky-tests) - Use stability metrics in investigations

[How to Analyze Error Patterns Across Test FailuresGroup similar failures, identify common error patterns, and discover systemic issues across multiple test results—find root causes affecting multiple tests and prioritize high-impact fixes.](/docs/test-failures/analyze-error-patterns)[Failure Investigation Best PracticesUnderstand efficient debugging strategies, triage approaches, and how to balance speed with thoroughness in test failure investigation using AI-assisted analysis and stability indicators.](/docs/test-failures/understanding-smart-tags)