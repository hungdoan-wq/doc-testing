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

Release Readiness
# Understanding Quality Gates

Understand what quality gates are, how they transform subjective release decisions into objective data-driven criteria, and how TestOps evaluates defect, coverage, and execution thresholds to determine release readiness status.

# Understanding Quality Gates

Quality gates transform the age-old question "Is this release ready?" from a subjective debate into an objective, data-driven assessment. Instead of stakeholders arguing whether 87% pass rate is "good enough," teams define thresholds before the release cycle begins—then let quantitative metrics determine readiness status automatically.

This explanation explores what quality gates are, how they work in TestOps, the three gate categories that measure different risk dimensions, when gates are evaluated throughout your release cycle, and how gate status informs (but doesn't dictate) release decisions. By understanding these concepts, you'll see how quality gates eliminate inconsistency, align stakeholders, and enable early detection of quality gaps.

## What Quality Gates Are

Quality gates are objective, quantitative criteria that determine whether a release meets pre-agreed quality standards. Each gate compares current test data—open defects, requirement coverage percentages, test pass rates—against configured thresholds. If metrics meet or exceed thresholds, that gate passes. If metrics fall short, that gate fails.

The purpose of quality gates is to replace subjective quality assessments with consistent, data-driven standards. Before quality gates, release decisions involved stakeholder debates: "Can we ship with three medium-priority defects?" "Is 75% coverage acceptable this sprint?" These discussions happened under pressure, criteria shifted between releases, and decisions depended on who spoke loudest in the meeting.

After implementing quality gates, the same questions become objective evaluations: "Does the current defect count exceed our Medium-priority threshold of 5?" "Does coverage meet our minimum requirement of 80%?" The metrics answer the question—not opinions, not pressure, not last-minute negotiations.

Value proposition: Quality gates provide consistency across releases (same standards apply every time), eliminate stakeholder debate (pre-agreed criteria prevent argument), enable early gap detection (continuous evaluation throughout sprint identifies issues in Week 1, not Week 4), and create objective go/no-go frameworks (release managers make decisions based on data, not gut feelings).

Manufacturing analogy: Quality gates work like manufacturing quality checkpoints. A car part must meet dimensional specifications (tolerances measured in millimeters) before proceeding to assembly. It either meets specifications or it doesn't—there's no debate. Software quality gates apply the same principle to test data: releases must meet specifications (thresholds) to proceed to production.

Integration with Release Health Dashboard: Quality gates are displayed in the Release Health Dashboard via the RAG indicator, which shows READY (GREEN) when all gates pass or AT RISK (RED) when any gate fails. The dashboard consolidates scattered test data—defects from Jira, coverage from requirement links, execution from test runs—into a single readiness view informed by your configured quality gates.

## How Quality Gates Work

Quality gates operate through a continuous evaluation mechanism that compares current metrics against configured thresholds, determines pass/fail status per gate, and calculates an overall RAG indicator showing release readiness.

Evaluation process: TestOps gathers current test data from your release scope—open defects linked to the release (by priority level), percentage of requirements with at least one linked test case, percentage of target configurations tested (OS/browser combinations), test pass rate (passed tests divided by executed tests), and test completion percentage (executed tests divided by planned tests). Each of these metrics is compared against its configured threshold. The comparison is binary: if a metric meets or exceeds its threshold, that specific criterion passes; if it falls short, that criterion fails.

Gate-by-gate determination: Quality gates are organized into three categories: Defect Criteria (measuring maximum allowed open defects by priority), Coverage Criteria (measuring minimum test coverage breadth), and Execution Criteria (measuring minimum test execution quality). Each category evaluates its specific metrics independently. Defect Criteria passes only if ALL priority-level thresholds are met (e.g., 0 Highest AND 0 High AND 3 or fewer Medium defects). Coverage Criteria passes only if BOTH requirement coverage AND configuration coverage meet minimums. Execution Criteria passes only if BOTH pass rate AND completion rate meet minimums.

RAG indicator logic: The Release Readiness Indicator (RAG) consolidates all gate results into a single status. The logic is strict: ALL three gate categories (Defect, Coverage, Execution) must pass for the RAG indicator to show READY (GREEN). If ANY gate category fails—even one—the RAG indicator shows AT RISK (RED). This AND logic ensures comprehensive quality across all dimensions before declaring a release ready.

Phase 1 limitation: TestOps currently implements only AND logic (all gates must pass). OR logic—where passing 2 out of 3 gate categories would be sufficient—is not available yet. Future releases will introduce OR logic to provide flexibility for teams with different risk profiles. For now, if any single gate fails, the release is AT RISK regardless of how well the other gates perform.

Continuous evaluation: Quality gates aren't evaluated once at release time—they're evaluated continuously as test data changes throughout your sprint or release cycle. Every time a test run completes, defect status updates, or coverage changes (new tests linked to requirements), TestOps recalculates gate status. This real-time evaluation enables teams to track readiness trajectory: Are we moving toward READY status or falling further into AT RISK? Early feedback allows proactive work prioritization instead of last-minute scrambling.

Gate-by-gate breakdown: Beyond the overall RAG indicator, TestOps shows which specific criteria passed or failed. If your release shows AT RISK, the breakdown reveals which specific gate failed (e.g., Defect Criteria shows 5 High-priority defects against a threshold of 0) and which passed. This granularity tells teams exactly where to focus improvement efforts.

#_r_ul_{margin:1.5rem auto 0;}#_r_ul_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_ul_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_ul_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_ul_ .error-icon{fill:#552222;}#_r_ul_ .error-text{fill:#552222;stroke:#552222;}#_r_ul_ .edge-thickness-normal{stroke-width:1px;}#_r_ul_ .edge-thickness-thick{stroke-width:3.5px;}#_r_ul_ .edge-pattern-solid{stroke-dasharray:0;}#_r_ul_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_ul_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_ul_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_ul_ .marker{fill:#333333;stroke:#333333;}#_r_ul_ .marker.cross{stroke:#333333;}#_r_ul_ svg{font-family:inherit;font-size:16px;}#_r_ul_ p{margin:0;}#_r_ul_ .label{font-family:inherit;color:#333;}#_r_ul_ .cluster-label text{fill:#333;}#_r_ul_ .cluster-label span{color:#333;}#_r_ul_ .cluster-label span p{background-color:transparent;}#_r_ul_ .label text,#_r_ul_ span{fill:#333;color:#333;}#_r_ul_ .node rect,#_r_ul_ .node circle,#_r_ul_ .node ellipse,#_r_ul_ .node polygon,#_r_ul_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_ul_ .rough-node .label text,#_r_ul_ .node .label text,#_r_ul_ .image-shape .label,#_r_ul_ .icon-shape .label{text-anchor:middle;}#_r_ul_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_ul_ .rough-node .label,#_r_ul_ .node .label,#_r_ul_ .image-shape .label,#_r_ul_ .icon-shape .label{text-align:center;}#_r_ul_ .node.clickable{cursor:pointer;}#_r_ul_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_ul_ .arrowheadPath{fill:#333333;}#_r_ul_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_ul_ .flowchart-link{stroke:#333333;fill:none;}#_r_ul_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_ul_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_ul_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_ul_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_ul_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_ul_ .cluster text{fill:#333;}#_r_ul_ .cluster span{color:#333;}#_r_ul_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_ul_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_ul_ rect.text{fill:none;stroke-width:0;}#_r_ul_ .icon-shape,#_r_ul_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_ul_ .icon-shape p,#_r_ul_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_ul_ .icon-shape rect,#_r_ul_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_ul_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_ul_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_ul_ :root{--mermaid-font-family:inherit;}
Yes

No

Gather Current Test Data

Open Defects by Priority

Requirement Coverage %

Configuration Coverage %

Test Pass Rate %

Test Completion %

Evaluate Defect Criteria

Evaluate Coverage Criteria

Evaluate Execution Criteria

Defect CriteriaPass?

Coverage CriteriaPass?

Execution CriteriaPass?

ALL Three GatesPass?

RAG: READY GREEN

RAG: AT RISK RED

Figure 1: Quality gate evaluation flow—TestOps gathers metrics, evaluates each gate category, then determines overall RAG indicator using AND logic (all gates must pass for READY status)

### Why do ALL gates need to pass? Why not 2 out of 3?

## Types of Quality Gate Criteria

Quality gates are organized into three categories that measure different dimensions of release quality. Each category evaluates specific metrics, and all three categories must pass for a release to be READY.

Defect Criteria measures maximum allowed open defects by priority level (Highest, High, Medium, Low)—ensures critical bugs are resolved before production. Example: 0 Highest-priority, 0 High-priority, 3 Medium-priority defects allowed.

Coverage Criteria measures minimum test coverage breadth across requirements (percentage with linked tests) and configurations (percentage of target OS/browser combinations tested)—ensures comprehensive validation. Example: 80% requirement coverage, 70% configuration coverage required.

Execution Criteria measures test execution quality through pass rate (test stability) and completion (test plan execution)—ensures tests are reliable and comprehensive. Example: 90% pass rate, 95% completion required.

All three categories address different risks: Defects measure known issues requiring fixes, Coverage measures testing breadth (did we test everything?), Execution measures test stability and completeness (did tests run reliably and fully?). A release might have zero defects and 95% pass rate but only 50% coverage—that untested 50% is invisible risk. Or 90% coverage and 95% pass rate but five High-priority defects—those could be production-blocking bugs. All three dimensions must pass because risks are cumulative, not compensatory.

#_r_un_{margin:1.5rem auto 0;}#_r_un_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_un_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_un_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_un_ .error-icon{fill:#552222;}#_r_un_ .error-text{fill:#552222;stroke:#552222;}#_r_un_ .edge-thickness-normal{stroke-width:1px;}#_r_un_ .edge-thickness-thick{stroke-width:3.5px;}#_r_un_ .edge-pattern-solid{stroke-dasharray:0;}#_r_un_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_un_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_un_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_un_ .marker{fill:#333333;stroke:#333333;}#_r_un_ .marker.cross{stroke:#333333;}#_r_un_ svg{font-family:inherit;font-size:16px;}#_r_un_ p{margin:0;}#_r_un_ .label{font-family:inherit;color:#333;}#_r_un_ .cluster-label text{fill:#333;}#_r_un_ .cluster-label span{color:#333;}#_r_un_ .cluster-label span p{background-color:transparent;}#_r_un_ .label text,#_r_un_ span{fill:#333;color:#333;}#_r_un_ .node rect,#_r_un_ .node circle,#_r_un_ .node ellipse,#_r_un_ .node polygon,#_r_un_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_un_ .rough-node .label text,#_r_un_ .node .label text,#_r_un_ .image-shape .label,#_r_un_ .icon-shape .label{text-anchor:middle;}#_r_un_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_un_ .rough-node .label,#_r_un_ .node .label,#_r_un_ .image-shape .label,#_r_un_ .icon-shape .label{text-align:center;}#_r_un_ .node.clickable{cursor:pointer;}#_r_un_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_un_ .arrowheadPath{fill:#333333;}#_r_un_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_un_ .flowchart-link{stroke:#333333;fill:none;}#_r_un_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_un_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_un_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_un_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_un_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_un_ .cluster text{fill:#333;}#_r_un_ .cluster span{color:#333;}#_r_un_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_un_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_un_ rect.text{fill:none;stroke-width:0;}#_r_un_ .icon-shape,#_r_un_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_un_ .icon-shape p,#_r_un_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_un_ .icon-shape rect,#_r_un_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_un_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_un_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_un_ :root{--mermaid-font-family:inherit;}
Quality Gates: All Three Must Pass

Defect Criteria

Coverage Criteria

Execution Criteria

Highest Priority: Max 0

High Priority: Max 0

Medium Priority: Max 3

Low Priority: Unlimited

Requirement Coverage: Min 80%

Configuration Coverage: Min 70%

Test Pass Rate: Min 90%

Test Completion: Min 95%

Figure 2: Quality gate structure—three categories with specific metrics. ALL categories must pass for READY status (example thresholds shown for balanced configuration)

### How do quality gates differ from test pass rate?

### When should quality gates be configured?

## When Quality Gates Are Evaluated

Quality gates are evaluated continuously throughout your sprint or release cycle—not once at release deadline, but in real-time as test data changes. This continuous evaluation enables early feedback, proactive work prioritization, and progressive readiness tracking.

Before the cycle begins: Teams configure gate thresholds during sprint planning or release kickoff. Stakeholders agree on criteria that will be used throughout the cycle.

During the cycle: Every time test data changes—a test run completes, defect status updates, coverage changes—TestOps recalculates gate status. The RAG indicator reflects the current state based on latest test data.

Early feedback value: Week 1 of a 4-week sprint might show AT RISK due to 60% coverage (threshold: 80%). This early signal allows teams to prioritize adding tests. By Week 3, coverage exceeds 80% and the gate passes. Without continuous evaluation, teams wouldn't discover the gap until Week 4—too late to address it.

At release deadline: Teams review final gate status for go/no-go decisions. READY (all gates pass) provides objective evidence supporting release. AT RISK (one or more gates fail) requires choosing to fix gaps, delay release, or accept risk with stakeholder approval.

Progressive tracking: Because gates are evaluated continuously, teams track readiness trajectory: Are we moving toward READY (improving coverage, resolving defects) or falling further into AT RISK (accumulating defects, declining pass rates)? This trajectory helps forecast whether gates will be met by deadline or scope/timeline needs adjustment.

## Quality Gates and Release Decisions

Quality gates inform release decisions by providing objective criteria and clear readiness status, but they don't make decisions for you—humans make the final call based on gate status plus business context.

READY (GREEN) status: All quality gates pass—objective evidence supports releasing. Defects are below thresholds, coverage meets minimums, tests are stable and complete. READY doesn't guarantee zero production issues, but it indicates the release meets pre-agreed quality standards.

AT RISK (RED) status: One or more quality gates fail—specific quality gaps require attention. The gate-by-gate breakdown shows which dimension failed: "Defect Criteria: FAILED (5 High-priority defects, threshold is 0)" or "Coverage Criteria: FAILED (72% requirement coverage, threshold is 80%)." This specificity guides work prioritization.

Three response options when AT RISK:

- Fix gaps before release: Add tests, resolve defects, stabilize flaky tests until gates pass. Release with confidence that standards are met.

- Delay release: Postpone to allow time for fixes, communicate new timeline, adjust dependencies. Acceptable when quality gaps are significant.

- Accept risk with approval: Override failing gates if business need is urgent (security patch, contractual deadline). Requires documented justification, explicit stakeholder approval, and remediation plan. Should be rare—frequent overrides signal gates aren't meaningful.

Stakeholder communication: Quality gates transform subjective debates into objective discussions. Instead of "Is this ready?" with conflicting opinions, the conversation becomes "All gates pass—we agreed these standards at planning—evidence supports releasing." Or "Defect Criteria failed—we have 5 High-priority bugs against 0 threshold—should we fix, delay, or accept the risk?" Gates provide shared reality; stakeholders debate response, not whether quality is "good enough."

### What happens when a quality gate fails?

### Can quality gates prevent all production defects?

## Realistic Expectations

Quality gates reduce risk significantly but don't eliminate it—understanding what they provide and what they require ensures effective use.

What gates provide: Consistency (same standards across releases), stakeholder alignment (pre-agreed criteria prevent debate), early feedback (continuous evaluation identifies gaps early), objective evidence (metrics replace opinions), and clear decision frameworks (READY or AT RISK with specific gap details).

What gates require: Thoughtful threshold configuration, stakeholder commitment to agreed-upon criteria, proactive response to early feedback, disciplined exception handling (rare overrides only), and continuous improvement (adjust thresholds as team matures).

What gates don't replace: Human judgment (gates inform decisions, don't make them), comprehensive test design, exploratory testing, production monitoring, or incident response processes.

Balanced perspective: Quality gates prevent shipping releases with excessive defects, incomplete testing, or unstable test results—but even releases passing all gates can encounter production issues due to untested edge cases, environment differences, or unexpected user behavior. View gates as one layer in defense-in-depth strategy: gates ensure baseline standards, exploratory testing catches issues automated tests miss, production monitoring detects live problems, incident response resolves issues that slip through.

### How do I know if my quality gate thresholds are appropriate?

## Next Steps

Now that you understand what quality gates are, how they work, and how they transform subjective release decisions into objective assessments, you're ready to configure and use them:

- Configure gates for your team: Follow [Configuring Quality Gates](/docs/release-readiness/configure-quality-gates) to set defect thresholds, coverage criteria, and execution thresholds aligned with your team's maturity and risk tolerance

- Use gates for release decisions: Follow [Assessing Release Readiness](/docs/release-readiness/assess-your-first-release) tutorial to evaluate releases using the RAG indicator and gate-by-gate breakdown

- Track release progress: Use Release Health Dashboard to monitor gate status throughout your sprint or release cycle, identifying quality gaps early and prioritizing testing work proactively

Quality gates succeed when they provide clear, trusted, objective criteria that enable confident release decisions based on evidence rather than opinions or pressure.

## Role-Based Workflows

[### Product Owner Workflow
Learn how Product Owners use quality gates to make objective release decisions, communicate risk to stakeholders, and establish clear release criteria aligned with business priorities.](/docs/workflows/product-owner)

## See Also

Related Concepts:

- [Release Readiness Overview](/docs/release-readiness/release-readiness-overview) - Complete introduction to Release Health Dashboard and quality gates in context

- [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types) - Learn how release-based scope (quality gates) differs from time-based scope (operational dashboards)

Practical Guides:

- [Configuring Quality Gates](/docs/release-readiness/configure-quality-gates) - Step-by-step guide to setting thresholds for defect, coverage, and execution criteria

- [Tracking Release Metrics](/docs/release-readiness/track-release-metrics) - Monitor release progress and gate status throughout sprint/release cycle

[Configuring Quality GatesStep-by-step guide to configure quality gates in TestOps Release Health Dashboard—set defect thresholds, coverage criteria, and execution thresholds to define objective release approval criteria.](/docs/release-readiness/configure-quality-gates)[Test Case Reports: Overview and Getting StartedTrack test case health and stability using PFS scores, Smart Tags, and historical analysis to identify flaky tests, plan maintenance sprints, and measure automation ROI.](/docs/test-case-reports/test-case-activity-overview)

# Quality Gates

Release Readiness
# Configuring Quality Gates

Step-by-step guide to configure quality gates in TestOps Release Health Dashboard—set defect thresholds, coverage criteria, and execution thresholds to define objective release approval criteria.

# Configuring Quality Gates

Time required: 15-20 minutes

Prerequisites:

- Admin or Release Manager permissions in TestOps

- Understanding of your team's quality standards

- Familiarity with release health concepts from [Assessing Release Readiness](/docs/release-readiness/assessing-release-readiness)

Related guides:

- [Assessing Release Readiness](/docs/release-readiness/assessing-release-readiness) - Using configured gates to evaluate releases

- [Release Metrics & Tracking](/docs/release-readiness/release-metrics-tracking) - Monitoring performance against gates

## Overview

Quality gates define objective, measurable criteria that determine whether a release is ready for production. Rather than relying on subjective assessments, quality gates provide clear pass/fail thresholds across three critical dimensions: defect severity limits, test coverage requirements, and execution pass rates.

This guide walks you through configuring all three gate categories in the Release Health Dashboard. You'll set thresholds customized to your team's maturity level and risk tolerance, validate the configuration with preview data, and establish consistent release approval standards.

Once configured, quality gates automatically calculate a RAG (Red-Amber-Green) indicator that shows release readiness at a glance. Teams use this indicator to make informed go/no-go decisions, communicate risk to stakeholders, and maintain quality consistency across releases.

## Access Quality Gate Settings

Quality gate configuration is centralized in TestOps Settings, allowing organization-wide standards with per-release override capability.

### Navigate to Configuration Panel

- Log in to Katalon TestOps with Admin or Release Manager credentials

- Click Settings in the left navigation menu

- Select Release Management from the settings sidebar

- Click the Quality Gates tab

You'll see the quality gate configuration interface divided into three sections: Defect Criteria, Coverage Criteria, and Execution Criteria. Each section corresponds to one dimension of release readiness.

### Default Gates vs Custom Configuration

TestOps provides industry-standard default thresholds based on common quality benchmarks:

- Defect Criteria: 0 Highest priority, 0 High priority, 5 Medium priority, unlimited Low priority

- Coverage Criteria: 80% requirement test coverage, 70% configuration coverage

- Execution Criteria: 90% test pass rate, 95% test completion

These defaults work well for balanced quality standards, but you can customize all thresholds to match your team's specific needs, risk tolerance, and organizational requirements.

### Per-Release Override Capability

While organization-wide gates provide consistency, you can override thresholds for specific releases when needed. For example, beta releases might use more lenient criteria than production releases. To override:

- Navigate to the specific release in Releases menu

- Click Override Quality Gates

- Adjust thresholds for this release only

- Original organization settings remain unchanged

## Configure Defect Criteria

Defect criteria control the maximum number of open defects allowed at each priority level for a release to pass the gate. This ensures critical bugs are resolved before production deployment.

### Set Defect Thresholds

- Click the Defect Criteria tab in quality gate settings

- For each priority level, enter the maximum allowed open defects:

Highest Priority: Maximum open defects (default: 0)
High Priority: Maximum open defects (default: 0)
Medium Priority: Maximum open defects (default: 5)
Low Priority: Maximum open defects (default: unlimited)

- Use 0 to enforce zero tolerance for that priority level

- Use -1 or leave blank for unlimited defects at that priority

- Click Save Defect Criteria to apply changes

### Example Configurations by Risk Tolerance

Strict Configuration (Low Risk Tolerance):

- Highest Priority: 0

- High Priority: 0

- Medium Priority: 2

- Low Priority: Unlimited

- Use when: Production releases for critical systems, regulated industries (medical devices, financial services), zero downtime requirements

Balanced Configuration (Moderate Risk Tolerance):

- Highest Priority: 0

- High Priority: 2

- Medium Priority: 5

- Low Priority: Unlimited

- Use when: Standard production releases, consumer software, internal business applications with acceptable maintenance windows

Lenient Configuration (Higher Risk Tolerance):

- Highest Priority: 1

- High Priority: 3

- Medium Priority: 10

- Low Priority: Unlimited

- Use when: Beta releases, early access programs, internal tools, proof-of-concept deployments

### Configuration Tips

Start strict and relax if needed: It's easier to reduce threshold strictness than to tighten standards after teams have adapted to lenient gates. Begin with zero tolerance for Highest and High priority defects, then adjust based on historical data.

Maintain zero tolerance for Highest-priority defects: Production-blocking bugs (system crashes, data loss, security vulnerabilities) should never be acceptable in a release, regardless of risk tolerance. Reserve Highest priority for truly critical issues.

Adjust based on release cadence: Teams with longer release cycles (quarterly, annual) can maintain stricter defect thresholds because they have more time to resolve issues. Teams with weekly or daily releases may need slightly more lenient Medium-priority thresholds to maintain velocity.

Review defect classification guidelines: Ensure your team has clear, documented criteria for assigning defect priorities. Inconsistent classification undermines quality gate effectiveness.

## Set Coverage Criteria

Coverage criteria ensure adequate testing breadth by measuring what percentage of requirements have linked tests and what percentage of target configurations (OS/browser combinations) have been tested.

### Configure Requirement Test Coverage

- Click the Coverage Criteria tab in quality gate settings

- Locate the Requirement Test Coverage section

- Set the Minimum Percentage of requirements that must have at least one linked test case (default: 80%)

- Optionally, use Include/Exclude Requirement Types to filter:

Include only specific requirement types (e.g., "Functional", "Security")
Exclude requirement types not relevant to testing (e.g., "Documentation", "Training")

- Click Save Coverage Criteria

Higher requirement coverage percentages ensure more complete validation of planned features. The 80% default allows some flexibility for requirements that may be tested indirectly or through exploratory testing.

### Configure Configuration Coverage

- In the same Coverage Criteria tab, locate the Configuration Coverage section

- Set the Minimum Percentage of target OS/browser configurations that must be tested (default: 70%)

- Define Critical Configurations that must always be tested:

Click Add Critical Configuration
Select OS and browser combination (e.g., "Windows 11 + Chrome")
Repeat for all must-test combinations

- Optional configurations contribute to coverage percentage but aren't mandatory

- Click Save Coverage Criteria

### Example Configurations by Team Maturity

Strict Configuration (Mature Testing Practice):

- Requirement Test Coverage: 90%

- Configuration Coverage: 85%

- Critical Configurations: 5+ OS/browser combinations

- Use when: Established QA teams with comprehensive test suites, regulated industries requiring extensive validation, products with large user bases across diverse platforms

Balanced Configuration (Growing Testing Practice):

- Requirement Test Coverage: 80%

- Configuration Coverage: 70%

- Critical Configurations: 3-4 OS/browser combinations

- Use when: Teams with 6-24 months of automation maturity, standard enterprise software, defined but evolving testing processes

Lenient Configuration (Early Testing Practice):

- Requirement Test Coverage: 70%

- Configuration Coverage: 60%

- Critical Configurations: 2-3 OS/browser combinations

- Use when: Teams building initial test automation, startups with limited QA resources, products in early development stages

### Configuration Tips

Prioritize critical configurations over comprehensive coverage: Testing 100% of possible OS/browser combinations is often impractical. Focus on configurations that represent the majority of your user base (e.g., Chrome, Safari, Edge on common OS versions).

Higher coverage for regulated industries: Medical devices, financial services, and other regulated sectors typically require 85-95% requirement coverage to demonstrate compliance with quality standards and audit requirements.

Lower acceptable thresholds for beta releases: Early access programs can use 60-70% coverage criteria since the user base is smaller and more tolerant of issues. Increase coverage requirements as you approach general availability.

Review coverage definitions: Ensure your team has clear guidelines for what constitutes "linked test" and "tested configuration" to avoid inconsistent coverage calculations.

## Define Execution Criteria

Execution criteria measure test run quality by tracking what percentage of tests pass and what percentage of planned tests have been executed. These metrics directly reflect the stability and completeness of release testing.

### Set Test Pass Rate Threshold

- Click the Execution Criteria tab in quality gate settings

- Locate the Test Pass Rate section

- Set the Minimum Percentage of tests that must pass (default: 90%)

- Optionally, use Include/Exclude Test Types to filter:

Include only certain test types (e.g., "Smoke", "Regression", "Integration")
Exclude test types not relevant to release quality (e.g., "Exploratory", "Performance")

- Pass rate is calculated as: (Passed Tests / Total Executed Tests) × 100

### Set Test Completion Threshold

- In the same Execution Criteria tab, locate the Test Completion section

- Set the Minimum Percentage of planned tests that must be executed (default: 95%)

- Completion is calculated as: (Executed Tests / Total Planned Tests) × 100

- This prevents releases from passing quality gates simply by skipping difficult tests

- Click Save Execution Criteria

### Example Configurations by Release Type

Strict Configuration (Production Release):

- Test Pass Rate: 95%

- Test Completion: 100%

- Use when: General availability releases, critical system updates, releases following major regressions

Balanced Configuration (Standard Release):

- Test Pass Rate: 90%

- Test Completion: 95%

- Use when: Regular sprint releases, minor version updates, standard feature deployments

Lenient Configuration (Beta Release):

- Test Pass Rate: 85%

- Test Completion: 90%

- Use when: Beta programs, early access releases, internal testing cycles

### Configuration Tips

90% pass rate is industry standard: Most mature software organizations target 90-95% pass rates for production releases. Lower thresholds (85%) are acceptable for beta releases, while higher thresholds (95%+) suit mission-critical systems.

Pass rate reflects stability: A declining pass rate over multiple releases signals technical debt accumulation or inadequate test maintenance. Use quality gates to catch this trend before it impacts production quality.

Test completion prevents gaming: Without a completion threshold, teams might skip flaky or difficult tests to achieve higher pass rates. The 95% completion requirement ensures comprehensive test execution.

Review test classification: Ensure your team has clear criteria for including tests in pass rate calculations. Some teams exclude performance tests or exploratory tests from automated quality gates.

## Validate RAG Indicator Logic

Before applying quality gates to live releases, validate that the configured thresholds produce accurate readiness indicators aligned with your team's expectations and stakeholder agreement.

### Preview RAG Indicator Calculation

- After configuring all three gate categories (Defect, Coverage, Execution), locate the Preview RAG Indicator section at the bottom of the quality gate settings page

- Click the Preview RAG Indicator button

- TestOps simulates the RAG indicator using current test data from your most recent release:

GREEN (READY): All three gates meet or exceed configured thresholds
RED (AT RISK): One or more gates fail to meet configured thresholds

- Review the Gate-by-Gate Breakdown showing which specific criteria passed or failed

### Validate Configuration Accuracy

Review the preview results and ask:

Does the indicator match your intuition? If you believe the release is ready but the indicator shows RED, your thresholds may be too strict. If you have concerns about release quality but the indicator shows GREEN, thresholds may be too lenient.

Are gates appropriately balanced? Check which gate failed (Defect, Coverage, or Execution). If the same gate consistently fails across multiple previews, that dimension may need threshold adjustment.

Do stakeholders agree with the criteria? Share the preview results with release managers, product owners, and engineering leadership. Ensure everyone understands what GREEN vs RED means for go/no-go decisions.

### Adjust and Revalidate

If preview results don't align with expectations:

- Return to the relevant gate configuration tab (Defect, Coverage, or Execution)

- Adjust thresholds by 5-10% increments

- Click Preview RAG Indicator again to see updated results

- Iterate until the indicator accurately reflects your release readiness standards

- Click Save All Quality Gates to finalize configuration

Important: Quality gates should challenge teams to maintain high standards while remaining achievable. If gates consistently show RED across all releases, thresholds may be unrealistically strict. If gates always show GREEN, they may not provide meaningful quality signals.

## Threshold Recommendations by Team Maturity

### Mature Testing Team (2+ years established)

### Growing Testing Team (6-24 months established)

### New Testing Team (less than 6 months)

### Industry-Specific Considerations

## Common Configuration Scenarios

### Scenario 1: First-time setup for new project

### Scenario 2: Adjusting gates for beta vs general availability releases

### Scenario 3: Gaining stakeholder alignment on quality standards

## Troubleshooting

### Issue: Quality gates always show RED (too strict)

### Issue: Quality gates always show GREEN (too lenient)

### Issue: Stakeholders disagree with defect priority classifications

## Next Steps

After configuring quality gates, you're ready to use them for release evaluation:

- Use configured gates: Follow the [Assessing Release Readiness](/docs/release-readiness/assessing-release-readiness) guide to interpret RAG indicators and make go/no-go decisions

- Monitor trends: Track quality metrics over time with [Release Metrics & Tracking](/docs/release-readiness/release-metrics-tracking)

- Communicate to stakeholders: Share quality gate status in release reviews and stakeholder reports

Quality gates transform subjective quality assessments into objective, data-driven decisions that build confidence across your organization.

## Role-Based Workflows

[### QA Manager Workflow
See how QA Managers configure quality gates with defect thresholds, coverage criteria, and execution standards to establish objective release approval criteria and facilitate data-driven go/no-go decisions.](/docs/workflows/qa-manager)

## See Also

- [Assessing Release Readiness](/docs/release-readiness/assessing-release-readiness) - Tutorial for evaluating releases using quality gates

- [Release Metrics & Tracking](/docs/release-readiness/release-metrics-tracking) - Monitor quality performance over time

- [Understanding Release Health Metrics](/docs/release-readiness/understanding-release-health-metrics) - Deep dive into RAG indicator calculations

[Release Metrics & TrackingMonitor release and sprint progress by tracking execution summary, defect distribution, configuration coverage, and requirement coverage—identify risks early with daily and weekly check-ins.](/docs/release-readiness/track-release-metrics)[Understanding Quality GatesUnderstand what quality gates are, how they transform subjective release decisions into objective data-driven criteria, and how TestOps evaluates defect, coverage, and execution thresholds to determine release readiness status.](/docs/release-readiness/understanding-quality-gates)

# Configure Smart Tags

<!-- Details & instructions -->

Test FailuresReference
# Test Stability Metrics Reference

Quick reference for Probabilistic Flakiness Score (PFS) classifications, Smart Tag definitions, formulas, and configuration defaults—instant lookup during failure investigations.

Status: 🚧 Coming Soon - Phase 1: Investigate Failure Flow (Q1 2025)

Quick reference for Test Stability Intelligence metrics, classifications, and calculations. For comprehensive explanations, see [Test Stability Intelligence](/docs/customization/test-stability-intelligence).

## PFS (Probabilistic Flakiness Score) Classifications

PFS RangeClassificationInterpretationRecommended Action0.0 - 0.3ConsistentTest behaves predictablyMonitor normally0.3 - 0.7Potentially FlakySome inconsistency detectedInvestigate if frequent0.7 - 1.0Highly FlakyUnreliable test behaviorPrioritize stabilization

Key Insight: PFS ≥ 0.7 triggers the "Flaky" Smart Tag by default.

## Smart Tags Reference

### Flaky

- Trigger: PFS ≥ 0.7 (default threshold)

- Hover Tooltip Format: "Flaky (PFS: 0.82 over 30 days)"

- Meaning: Test exhibits unreliable pass/fail patterns independent of code changes

- Action: Investigate timing issues, selectors, test data dependencies

### Always Failing

- Trigger: Pass Rate < 70% (default threshold) over time window

- Hover Tooltip Format: "Always Failing (12% pass rate over 30 days)"

- Meaning: Test consistently fails, likely due to broken functionality or outdated assertions

- Action: Fix underlying defect or update test expectations

### New Failure

- Trigger: Test passed consistently in last N runs, now failing

- Hover Tooltip Format: "New Failure (passed 15/15 prior runs)"

- Meaning: Recent regression introduced—likely genuine product defect

- Action: High priority investigation, strong defect candidate

### Slow

- Trigger: Execution time exceeds 95th percentile (default) of historical baseline

- Hover Tooltip Format: "Slow (2.3s vs 0.8s baseline)"

- Meaning: Performance degradation detected

- Action: Profile test execution, check infrastructure, review test efficiency

## Configuration Defaults Summary

SettingDefault ValueRangePurposeTime Window30 days7/14/30/60/90 daysHistorical lookback period for calculationsMinimum Executions10 runs5/10/15/20 runsRequired sample size for statistical confidenceFlaky Threshold (PFS)≥ 0.70.3 or 0.7Sensitivity: 0.3 = more sensitive, 0.7 = high confidenceAlways Failing (Pass Rate)< 70%50%/60%/70%/80%Lower = stricter (flags more tests)New Failures Lookback10 runs5/10/15/20 runsHow far back to check "was passing"Slow Threshold (Percentile)95th90th/95th/99thHigher = only flag extreme slowness

To customize: See [Configuring Stability Detection Rules](/docs/investigating-failures/configuring-stability-rules).

## Calculation Formulas

### Probabilistic Flakiness Score (PFS)

PFS = Σ (transitions × weight) / total_transitions

Where:

- Pass → Fail transition: Weight = 1.0 (high flakiness signal)

- Fail → Pass transition: Weight = 0.8 (moderate flakiness signal)

- Code change detected: Weight reduced by 30% (expected failure)

Example:

- 20 runs over 30 days: 15 passes, 5 fails (alternating pattern)

- 10 Pass→Fail transitions (no code changes detected)

- PFS = (10 × 1.0) / 10 = 1.0 (Highly Flaky)

### Pass Rate

Pass Rate = (Passed Runs / Total Runs) × 100%

Always Failing Threshold (Default: 70%):

- Pass Rate < 70% → Tag applied

- Example: 6 passes, 14 fails over 30 days → 30% pass rate → "Always Failing"

### Performance Percentiles

95th Percentile = Value below which 95% of execution times fall

Slow Tag Threshold (Default: 95th percentile):

- Current execution time > 95th percentile of last 30 days → Tag applied

- Example: Baseline 95th = 1.2s, current execution = 2.8s → "Slow"

## Quick Decision Guide

### When you see a Flaky tag:

- Check PFS value (hover tooltip): 0.8+ = urgent, 0.7-0.8 = investigate soon

- Review test execution history for alternating pass/fail patterns

- Look for timing dependencies, race conditions, dynamic selectors

- Consider test data dependencies or environment variability

### When you see an Always Failing tag:

- Check pass rate (hover tooltip): below 50% = critical, 50-70% = high priority

- Determine if defect is real (test expectations vs actual behavior)

- If test is outdated: update assertions or mark as known issue

- If defect is real: create bug ticket, link to test result

### When you see a New Failure tag:

- High priority - likely genuine regression

- Check prior pass count (hover tooltip): higher count = stronger signal

- Review recent code changes or deployments

- Create defect ticket if confirmed regression

### When you see a Slow tag:

- Compare current vs baseline (hover tooltip)

- Check if infrastructure issue (CI resources, network latency)

- Profile test for inefficient waits or operations

- Consider splitting long tests into focused tests

## See Also

- [Test Stability Intelligence: Flakiness Detection & Health Insights](/docs/customization/test-stability-intelligence) - Comprehensive framework explanation

- [Configure Failure Analysis Settings](/docs/test-failures/configure-failure-analysis-settings) - Customize time windows, minimum executions, and Smart Tag thresholds

- [Identifying Flaky Tests with Stability Intelligence](/docs/test-failures/identifying-flaky-tests) - Workflow guide for using stability metrics

## 📍 Where to Go Next

Common next steps after Investigating Test Failures:

- [Defects & Issues Analysis](/docs/defects) - After identifying test failures, track and manage defects systematically through your defect management workflow

- [Coverage & Traceability](/docs/coverage) - Ensure test failures are addressed in all required configurations and requirements with comprehensive coverage analysis

- [Release Readiness](/docs/release-readiness) - Use failure investigation insights to assess whether quality gates are met for upcoming releases

Need help deciding? See [Workflow Guide: Role-Based Pathways](/docs/workflows/overview)
[Failure Investigation Best PracticesUnderstand efficient debugging strategies, triage approaches, and how to balance speed with thoroughness in test failure investigation using AI-assisted analysis and stability indicators.](/docs/test-failures/understanding-smart-tags)[Coverage & Traceability: Overview and Getting StartedTrack requirement coverage across releases, analyze configuration testing gaps, and generate audit-ready traceability matrices for regulatory compliance—comprehensive visibility into testing completeness from requirements to configurations to audit trails.](/docs/coverage/coverage-and-traceability-overview)