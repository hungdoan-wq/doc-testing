# Smart Tags

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