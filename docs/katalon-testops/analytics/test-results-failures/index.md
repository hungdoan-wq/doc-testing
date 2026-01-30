# Test Results & Failures

Content coming soon.

Test Failures
# Test Failures: Overview and Getting Started

Investigate test failures systematically with AI-powered triage and Test Stability Intelligence to distinguish flaky tests from real defects and reduce debugging time from hours to minutes.

# Test Failures: Overview and Getting Started

Reading time: 8 minutes

When a test fails, your first question is: why? Without systematic investigation, teams waste hours debugging intermittent failures, chasing false positives, and losing confidence in test results. Test Failures provides the investigation tools and AI-powered insights you need to find root causes fast.

## The Challenge: The Flaky Test Spiral

It's midweek. Your CI/CD pipeline flags another test failure. The Automation Engineer pulls up the logs—the test passed locally three times this morning, but failed in the pipeline just now.

"Let's try running it again," someone suggests. The team re-runs the test. It passes. Then fails on the fourth attempt with a different error message.

Two hours later, the team is still investigating. Is this a real bug requiring code fixes? An environmental issue needing infrastructure changes? Should they delay the release to investigate further?

Without data, the investigation continues manually—checking logs across multiple runs, comparing configurations between local and CI environments, running the test 20+ times trying to reproduce the pattern. The team debates priorities: fix the test, fix the environment, or mark it as "probably just flaky" and move on?

Eventually, someone says, "This test has been flaky before. Let's skip it for now and investigate later." The test gets ignored. Confidence in the test suite erodes. When tests fail, the default response becomes "probably just flaky"—even when they indicate real product defects.

Test Stability Intelligence changes this scenario entirely. Within seconds, it identifies this as a flaky test with PFS 0.72 (highly flaky) based on 30 days of execution history showing inconsistent pass-fail patterns. Not a release blocker. AI Test Failure Analysis categorizes it as a "Timing Issue" and recommends optimizing wait conditions for the specific selector that's failing. Investigation time: 10 minutes instead of 2+ hours. Decision: deprioritize—not a code defect, schedule stabilization work for next sprint. Release proceeds on schedule.

## What This Section Covers

This section provides capabilities to:

- Track test failures across multiple dimensions (by test case, by time period, by configuration, by build) to identify patterns and trends systematically

- Identify flaky tests consuming team resources with Probabilistic Flakiness Score (PFS) and Test Stability Intelligence metrics

- Investigate failure root causes with AI-powered Test Failure Analysis that provides instant triage recommendations, plain-language summaries, and actionable suggestions

- Distinguish between real product defects, environmental issues, and test reliability problems using stability metrics and execution history analysis

- Reduce debugging time from hours to minutes with systematic investigation workflows (Triage → Analyze → Fix → Verify) and data-driven prioritization

## Understanding the Investigation Flow

Failure investigation in TestOps follows a structured flow from test runs to individual results:

- Test Runs List - View all test executions with status summaries, pass/fail counts, and flaky indicators

- Test Run Overview - Analyze run-level metrics with summary widgets showing Common Errors and stability indicators (Flakiness, Always Fail, New Failures, Slow)

- Test Results List - Browse individual test results with timeline visualization showing pass/fail history

- Test Result Details - Investigate specific failures with AI analysis, logs, screenshots, and stability trends

- Similar Failures - Navigate to Common Automation Errors report to identify patterns across multiple tests

This section focuses on test result-level investigation (steps 3-5), whether you're investigating a single test failure or analyzing patterns across multiple results. For test run management and real-time execution monitoring, see the Execution module.

## What You'll Achieve

By completing this section, you will:

- Navigate Test Failures reports confidently to find failure details, execution history, error messages, and stability indicators for systematic investigation

- Identify flaky tests using Probabilistic Flakiness Score (PFS) and prioritize stabilization work based on data-driven reliability metrics

- Analyze failure patterns with AI Test Failure Analysis to get instant triage recommendations that reduce investigation time by 70%

- Distinguish between real failures, flaky tests, and environmental issues using stability metrics, pass rate trends, and execution consistency patterns

- Configure smart tag thresholds and stability settings to customize flakiness detection for your project's specific testing characteristics

- Investigate root causes systematically using the investigation workflow (Triage → Analyze → Fix → Verify) with AI assistance at critical decision points

## Prerequisites

Before you begin: Complete [Getting Started](/docs/getting-started/introduction) to understand core navigation patterns and the Project Dashboard. Estimated time: 2 hours.

## Understanding Flakiness Detection

Test Stability Intelligence provides data-driven insights to distinguish flaky tests from real failures through three core components:

### Probabilistic Flakiness Score (PFS)

PFS analyzes your test's execution history over a configured time window (default: 30 days) to calculate the ratio of inconsistent outcomes to total executions. The score ranges from 0.0 (perfectly stable) to 1.0 (highly flaky).

PFS RangeClassificationBehavior PatternAction Required0.0 - 0.3ConsistentPredictable pass/fail behaviorNone - test is stable0.3 - 0.7Potentially FlakyUnreliable with pattern variabilityMonitor and consider stabilization0.7 - 1.0Highly FlakyHighly unpredictable, random pass/failPrioritize immediate stabilization

Minimum requirements: 10 executions in time window (configurable: 5-20 runs)

### Smart Tags

Smart tags automatically surface priority issues based on stability patterns:

Smart TagTrigger ConditionMeaningPriority Level🔴 FlakyPFS ≥ 0.7Test shows highly inconsistent behaviorHigh - immediate stabilization needed🔴 Always FailingPass rate < 70%Test consistently fails across executionsHigh - potential code defect🆕 New FailureFirst failure in last 10 runsTest recently started failingMedium - investigate recent changes⚡ SlowDuration exceeds 95th percentileTest takes longer than similar testsLow - performance optimization opportunity

Configuration: Smart tag rules can be enabled/disabled and thresholds adjusted in Settings → Test Stability.

AI Integration: Test Failures reports integrate AI Test Failure Analysis throughout the investigation workflow. Requires AI features enabled in project settings.

## Decision Framework: Investigation Workflow

Follow this systematic process to investigate test failures efficiently:

#_r_on_{margin:1.5rem auto 0;}#_r_on_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_on_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_on_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_on_ .error-icon{fill:#552222;}#_r_on_ .error-text{fill:#552222;stroke:#552222;}#_r_on_ .edge-thickness-normal{stroke-width:1px;}#_r_on_ .edge-thickness-thick{stroke-width:3.5px;}#_r_on_ .edge-pattern-solid{stroke-dasharray:0;}#_r_on_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_on_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_on_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_on_ .marker{fill:#333333;stroke:#333333;}#_r_on_ .marker.cross{stroke:#333333;}#_r_on_ svg{font-family:inherit;font-size:16px;}#_r_on_ p{margin:0;}#_r_on_ .label{font-family:inherit;color:#333;}#_r_on_ .cluster-label text{fill:#333;}#_r_on_ .cluster-label span{color:#333;}#_r_on_ .cluster-label span p{background-color:transparent;}#_r_on_ .label text,#_r_on_ span{fill:#333;color:#333;}#_r_on_ .node rect,#_r_on_ .node circle,#_r_on_ .node ellipse,#_r_on_ .node polygon,#_r_on_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_on_ .rough-node .label text,#_r_on_ .node .label text,#_r_on_ .image-shape .label,#_r_on_ .icon-shape .label{text-anchor:middle;}#_r_on_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_on_ .rough-node .label,#_r_on_ .node .label,#_r_on_ .image-shape .label,#_r_on_ .icon-shape .label{text-align:center;}#_r_on_ .node.clickable{cursor:pointer;}#_r_on_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_on_ .arrowheadPath{fill:#333333;}#_r_on_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_on_ .flowchart-link{stroke:#333333;fill:none;}#_r_on_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_on_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_on_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_on_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_on_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_on_ .cluster text{fill:#333;}#_r_on_ .cluster span{color:#333;}#_r_on_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_on_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_on_ rect.text{fill:none;stroke-width:0;}#_r_on_ .icon-shape,#_r_on_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_on_ .icon-shape p,#_r_on_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_on_ .icon-shape rect,#_r_on_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_on_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_on_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_on_ :root{--mermaid-font-family:inherit;}
Yes

No

Flaky Test

Environmental

Code Defect

Test Fails in Execution

Open Test Failures Report

Review Failure List with Stability Indicators

Use AI Test Failure Analysis?

Get AI Triage Recommendation

Manual Triage

Review Category + Summary + Suggestion

Review Error Message + Stack Trace

Analyze Root Cause

Check Execution History

Check Stability Metrics

Pattern Identified?

PFS > 0.7

Config-Specific Failures

Consistent Failure Pattern

Prioritize Stabilization Work

Fix Environment/Configuration

Create Defect for Dev Team

Verify Fix

Monitor Stability Score

Close Investigation

Key decision points:

- Triage (AI or Manual): AI Test Failure Analysis provides instant categorization and recommendations in seconds. Manual triage requires reviewing error messages and stack traces systematically.

- Pattern Classification: After analyzing execution history and stability metrics, classify the failure:

Flaky Test (PFS > 0.7): Not a code defect—prioritize stabilization work (timing improvements, wait conditions, selector optimization)
Environmental Issue: Failures occur only in specific configurations (OS, browser, CI runner)—fix environment or infrastructure
Code Defect: Consistent failure pattern across all executions—create defect for dev team

## Visual Journey Map

This diagram shows the complete investigation workflow with AI assistance integrated at critical triage points:

#_r_op_{margin:1.5rem auto 0;}#_r_op_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_op_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_op_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_op_ .error-icon{fill:#552222;}#_r_op_ .error-text{fill:#552222;stroke:#552222;}#_r_op_ .edge-thickness-normal{stroke-width:1px;}#_r_op_ .edge-thickness-thick{stroke-width:3.5px;}#_r_op_ .edge-pattern-solid{stroke-dasharray:0;}#_r_op_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_op_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_op_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_op_ .marker{fill:#333333;stroke:#333333;}#_r_op_ .marker.cross{stroke:#333333;}#_r_op_ svg{font-family:inherit;font-size:16px;}#_r_op_ p{margin:0;}#_r_op_ .label{font-family:inherit;color:#333;}#_r_op_ .cluster-label text{fill:#333;}#_r_op_ .cluster-label span{color:#333;}#_r_op_ .cluster-label span p{background-color:transparent;}#_r_op_ .label text,#_r_op_ span{fill:#333;color:#333;}#_r_op_ .node rect,#_r_op_ .node circle,#_r_op_ .node ellipse,#_r_op_ .node polygon,#_r_op_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_op_ .rough-node .label text,#_r_op_ .node .label text,#_r_op_ .image-shape .label,#_r_op_ .icon-shape .label{text-anchor:middle;}#_r_op_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_op_ .rough-node .label,#_r_op_ .node .label,#_r_op_ .image-shape .label,#_r_op_ .icon-shape .label{text-align:center;}#_r_op_ .node.clickable{cursor:pointer;}#_r_op_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_op_ .arrowheadPath{fill:#333333;}#_r_op_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_op_ .flowchart-link{stroke:#333333;fill:none;}#_r_op_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_op_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_op_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_op_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_op_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_op_ .cluster text{fill:#333;}#_r_op_ .cluster span{color:#333;}#_r_op_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_op_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_op_ rect.text{fill:none;stroke-width:0;}#_r_op_ .icon-shape,#_r_op_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_op_ .icon-shape p,#_r_op_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_op_ .icon-shape rect,#_r_op_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_op_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_op_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_op_ :root{--mermaid-font-family:inherit;}
Yes

No

Fix Test

Fix Env

Code Bug

Test Execution Fails

Review Stability Indicators

PFS > 0.7?

Flaky Test Path

Investigate Further

Schedule Stabilization

Use AI Triage

Get Failure Category

Action Type?

Optimize Test Code

Fix Configuration

Create Defect

Verify Fix

Monitor PFS Improvement

Investigation Complete

## Section Contents Overview

This section includes 2 tutorials, 3 how-to guides, 2 explanations, and 1 reference document organized by learning path.

Tutorials:

- [Investigating Test Failures](/docs/test-failures/investigating-test-failures) - Learn the complete investigation workflow (Triage → Analyze → Fix → Verify) with step-by-step guidance for daily failure debugging

- [Reducing Flaky Tests](/docs/test-failures/reducing-flaky-tests) - Build a systematic flakiness reduction plan using PFS scores and Test Stability Intelligence to stabilize your test suite

How-To Guides:

- [Using AI Test Failure Analysis](/docs/test-failures/using-ai-test-failure-analysis) - Get instant triage recommendations with AI-powered analysis to reduce investigation time by 70%

- [Configure Failure Analysis Settings](/docs/test-failures/configure-failure-analysis-settings) - Customize time windows, minimum executions, PFS thresholds, and smart tag rules for your CI/CD pipeline characteristics

- [Filtering and Analyzing Failure Reports](/docs/test-failures/filtering-failure-reports) - Apply filters to Test Failures reports to find specific patterns and trends across test executions

Explanations:

- [Understanding Test Stability Metrics](/docs/test-failures/understanding-stability-metrics) - Master PFS calculation, pass rate formulas, and stability classifications to identify unreliable tests systematically

- [Identifying Flaky Tests](/docs/test-failures/identifying-flaky-tests) - Understand what makes tests flaky and how to distinguish flakiness from real failures using execution patterns

Reference:

- [Test Failures Report Reference](/docs/test-failures/report-reference) - Complete specification of Test Failures report filters, columns, calculations, and data sources

## Recommended Learning Path

[### For QA Engineers
Start: Investigating Test Failures (Tutorial) - Learn the systematic investigation workflow (Triage → Analyze → Fix → Verify) for daily failure debugging with step-by-step guidanceThen: Using AI Test Failure Analysis (How-To) - Accelerate triage with AI-powered recommendations that reduce investigation time by 70% through instant categorization and actionable suggestionsFinally: Identifying Flaky Tests (Explanation) - Master Test Stability Intelligence to distinguish flaky tests from real failures using PFS scores and execution patterns](/docs/test-failures/investigating-test-failures)[### For Automation Engineers
Start: Understanding Test Stability Metrics (Explanation) - Understand PFS (Probabilistic Flakiness Score), pass rate, and stability classifications for identifying unreliable tests systematicallyThen: Configuring Stability Settings (How-To) - Customize time windows (7-90 days), minimum executions (5-20), PFS thresholds, and smart tag rules for your CI/CD pipeline characteristicsFinally: Reducing Flaky Tests (Tutorial) - Implement systematic flakiness reduction workflow to stabilize your test suite using data-driven prioritization](/docs/test-failures/understanding-stability-metrics)

## Common Questions

### How is Probabilistic Flakiness Score (PFS) calculated?

### What's the difference between a flaky test and a failing test?

### How does AI Test Failure Analysis work and what does it provide?

### Can I customize flakiness detection thresholds for my project?

### How do I investigate an intermittent test failure systematically?

## See Also

Foundation Concepts:

- [Getting Started: Core Concepts](/docs/getting-started/core-concepts) - Understand test execution fundamentals and result status categories

- [Dashboards: Live Monitor](/docs/dashboards/live-monitor) - Monitor test execution in real-time to catch failures as they happen

Related Analysis:

- [Test Case Reports](/docs/test-case-reports/introduction) - Assess test quality and identify tests needing maintenance

- [Coverage & Traceability](/docs/coverage/introduction) - Ensure completeness after stabilizing flaky tests

Advanced Features:

- [AI Features: Test Failure Analysis](/docs/ai-features/test-failure-analysis) - Deep dive into AI-powered triage capabilities

- [Customization: Custom Dashboards](/docs/customization/custom-dashboards) - Create custom views for your team's failure tracking needs

## 📍 Where to Go Next

Common next steps after Test Failures:

- [Coverage & Traceability](/docs/coverage/introduction) - After stabilizing flaky tests and resolving failures, verify testing completeness with comprehensive coverage tracking across requirements and configurations

- [Release Readiness](/docs/release-readiness/introduction) - Use failure trends and stability metrics as input for objective go/no-go release decisions

- [Defects & Issues Analysis](/docs/defects/introduction) - Track resolution velocity and trends for defects identified through failure investigation

Need help deciding? See [Workflow Guide: Role-Based Pathways](/docs/workflows/overview)
[All Widgets ReferenceComprehensive catalog of all 37 dashboard widgets available in Katalon TestOps Reports & Analytics, organized by category with configuration options and use cases.](/docs/dashboards/reference/widget-catalog)[Investigating Test FailuresA hands-on tutorial guiding you through the complete workflow of discovering test failures, analyzing root causes with AI-powered analysis, and taking resolution actions in Katalon TestOps.](/docs/test-failures/investigate-your-first-failure)
