Release Readiness
# Release Readiness: Overview and Getting Started

Make objective, data-driven release decisions using Release Health Dashboard with quality gates, RAG indicators, and go/no-go decision frameworks for confident software releases.

# Release Readiness: Overview and Getting Started

Reading time: 10 minutes

Strategic release decisions require more than operational monitoring—they demand clear quality criteria, quantifiable thresholds, and objective go/no-go indicators. The Release Health Dashboard transforms scattered test data into a unified readiness assessment, helping Release Managers, Product Owners, and QA Directors answer the critical question: "Should we ship?"

## The Pressure Point

It's two days before your planned release date. Your Release Manager asks: "Are we ready to ship?"

Without Release Health, this question triggers chaos. Your QA Engineer checks CI/CD pipelines. Manual Tester reviews spreadsheets. Defect Triager counts Jira bugs. QA Manager checks coverage reports. Configuration Lead verifies platform execution. After an hour of data gathering, the team faces subjective debate:

"Is 87% pass rate good enough?"
"Can we ship with three medium-priority defects?"
"Do we need to test that legacy browser?"

The root problem isn't effort—it's scattered data making objective decisions impossible. Teams rely on gut feelings. Release criteria shift under stakeholder pressure. Decisions are subjective, inconsistent, late, and stressful.

Release Health Dashboard solves this by consolidating scattered data, defining pre-agreed quality gates, and showing a single RAG indicator: READY or AT RISK. Two days before release, the dashboard shows GREEN (READY), all gates met—the decision is clear and objective.

## What This Section Covers

This section provides capabilities to:

- Assess release readiness using Release Health Dashboard with objective quality gates for defects, coverage, and execution

- Track release progress throughout sprint/release cycle to identify quality gaps early and prioritize testing work

- Make data-driven go/no-go decisions using RAG indicator (READY/AT RISK) that consolidates scattered data into single readiness view

- Configure quality gate thresholds aligned with stakeholder risk tolerance and team maturity (defect limits, coverage minimums, pass rate requirements)

- Communicate release status to stakeholders with objective metrics and visual reports that replace subjective quality debates

## What You'll Achieve

By completing this section, you will:

- Navigate Release Health Dashboard confidently to assess release readiness status and quality gate compliance

- Distinguish between operational dashboards (Live Monitor, Analytics & Trends) and strategic dashboard (Release Health) based on timing perspective and decision context

- Configure quality gates with quantitative thresholds for defects, coverage, and execution aligned with stakeholder expectations

- Interpret RAG indicator (READY/AT RISK) and understand how quality gate criteria determine readiness status

- Track release metrics throughout sprint/release cycle to identify under-tested requirements, configurations, and defect trends

- Generate stakeholder reports and communicate go/no-go decisions using objective data from Release Health Dashboard

Prerequisites: Complete [Getting Started](/docs/getting-started/introduction) to understand core concepts and [Dashboards & Monitoring](/docs/dashboards/introduction) to understand analysis scope types. Estimated time: 4 hours.

## Release Health vs. Operational Dashboards

All three dashboards use the same test data but serve different timing perspectives:

DashboardPerspectiveScope TypeKey QuestionPrimary UseLive MonitorReal-timeTime-based ("Today", "This Week")"What's happening now?"Operational monitoring, immediate issuesAnalytics & TrendsHistoricalTime-based ("Last 30 Days")"How are we trending?"Quality trend analysis, retrospectivesRelease HealthStrategicRelease-based ("Release 2.5", "Sprint 14")"Should we ship?"Go/no-go decisions, release planning

When to use Release Health:

- Making go/no-go release decisions

- Assessing sprint completion readiness

- Tracking release progress against quality gates

- Communicating readiness status to stakeholders

- Planning release scope adjustments based on quality

#_r_sk_{margin:1.5rem auto 0;}#_r_sk_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_sk_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_sk_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_sk_ .error-icon{fill:#552222;}#_r_sk_ .error-text{fill:#552222;stroke:#552222;}#_r_sk_ .edge-thickness-normal{stroke-width:1px;}#_r_sk_ .edge-thickness-thick{stroke-width:3.5px;}#_r_sk_ .edge-pattern-solid{stroke-dasharray:0;}#_r_sk_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_sk_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_sk_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_sk_ .marker{fill:#333333;stroke:#333333;}#_r_sk_ .marker.cross{stroke:#333333;}#_r_sk_ svg{font-family:inherit;font-size:16px;}#_r_sk_ p{margin:0;}#_r_sk_ .label{font-family:inherit;color:#333;}#_r_sk_ .cluster-label text{fill:#333;}#_r_sk_ .cluster-label span{color:#333;}#_r_sk_ .cluster-label span p{background-color:transparent;}#_r_sk_ .label text,#_r_sk_ span{fill:#333;color:#333;}#_r_sk_ .node rect,#_r_sk_ .node circle,#_r_sk_ .node ellipse,#_r_sk_ .node polygon,#_r_sk_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_sk_ .rough-node .label text,#_r_sk_ .node .label text,#_r_sk_ .image-shape .label,#_r_sk_ .icon-shape .label{text-anchor:middle;}#_r_sk_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_sk_ .rough-node .label,#_r_sk_ .node .label,#_r_sk_ .image-shape .label,#_r_sk_ .icon-shape .label{text-align:center;}#_r_sk_ .node.clickable{cursor:pointer;}#_r_sk_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_sk_ .arrowheadPath{fill:#333333;}#_r_sk_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_sk_ .flowchart-link{stroke:#333333;fill:none;}#_r_sk_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_sk_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_sk_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_sk_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_sk_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_sk_ .cluster text{fill:#333;}#_r_sk_ .cluster span{color:#333;}#_r_sk_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_sk_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_sk_ rect.text{fill:none;stroke-width:0;}#_r_sk_ .icon-shape,#_r_sk_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_sk_ .icon-shape p,#_r_sk_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_sk_ .icon-shape rect,#_r_sk_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_sk_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_sk_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_sk_ :root{--mermaid-font-family:inherit;}
Same Test Data

Live Monitor

Analytics & Trends

Release Health

Real-TimeWhat's happening now?

HistoricalHow are we trending?

StrategicShould we ship?

OperationalDecisions

ImprovementDecisions

ReleaseDecisions

For detailed explanation of analysis scope types, see [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types).

## Quality Gates and RAG Indicator

Quality gates are objective criteria that determine release readiness. Each gate has quantitative thresholds set before the release cycle begins.

### Three Quality Gate Categories

Gate CategoryWhat It MeasuresExample ThresholdsDefect CriteriaOpen defects by priority linked to release0 Highest, 0 High, 3 Medium allowedCoverage CriteriaPercentage of requirements with tests80% minimum requirement coverageExecution CriteriaPercentage of planned tests passing90% minimum pass rate

### RAG Indicator Logic

The Release Readiness Indicator (RAG) shows overall status at a glance:

- GREEN (READY): All quality gates met—defects below thresholds AND coverage meets minimum AND pass rate meets minimum

- RED (AT RISK): Any quality gate not met—at least one threshold exceeded OR coverage below minimum OR pass rate below minimum

TestOps uses a binary model (no AMBER) for decision clarity: you're either ready to ship or you're not.

### Why pre-agreed thresholds eliminate release debates

### Common threshold ranges by team maturity

## Quality Gate Decision Workflow

#_r_sm_{margin:1.5rem auto 0;}#_r_sm_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_sm_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_sm_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_sm_ .error-icon{fill:#552222;}#_r_sm_ .error-text{fill:#552222;stroke:#552222;}#_r_sm_ .edge-thickness-normal{stroke-width:1px;}#_r_sm_ .edge-thickness-thick{stroke-width:3.5px;}#_r_sm_ .edge-pattern-solid{stroke-dasharray:0;}#_r_sm_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_sm_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_sm_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_sm_ .marker{fill:#333333;stroke:#333333;}#_r_sm_ .marker.cross{stroke:#333333;}#_r_sm_ svg{font-family:inherit;font-size:16px;}#_r_sm_ p{margin:0;}#_r_sm_ .label{font-family:inherit;color:#333;}#_r_sm_ .cluster-label text{fill:#333;}#_r_sm_ .cluster-label span{color:#333;}#_r_sm_ .cluster-label span p{background-color:transparent;}#_r_sm_ .label text,#_r_sm_ span{fill:#333;color:#333;}#_r_sm_ .node rect,#_r_sm_ .node circle,#_r_sm_ .node ellipse,#_r_sm_ .node polygon,#_r_sm_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_sm_ .rough-node .label text,#_r_sm_ .node .label text,#_r_sm_ .image-shape .label,#_r_sm_ .icon-shape .label{text-anchor:middle;}#_r_sm_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_sm_ .rough-node .label,#_r_sm_ .node .label,#_r_sm_ .image-shape .label,#_r_sm_ .icon-shape .label{text-align:center;}#_r_sm_ .node.clickable{cursor:pointer;}#_r_sm_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_sm_ .arrowheadPath{fill:#333333;}#_r_sm_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_sm_ .flowchart-link{stroke:#333333;fill:none;}#_r_sm_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_sm_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_sm_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_sm_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_sm_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_sm_ .cluster text{fill:#333;}#_r_sm_ .cluster span{color:#333;}#_r_sm_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_sm_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_sm_ rect.text{fill:none;stroke-width:0;}#_r_sm_ .icon-shape,#_r_sm_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_sm_ .icon-shape p,#_r_sm_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_sm_ .icon-shape rect,#_r_sm_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_sm_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_sm_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_sm_ :root{--mermaid-font-family:inherit;}
Yes

No

Yes

Yes

Yes

No

No

No

Yes

Fix Gaps

Delay Release

Accept Risk

Release/Sprint Planning

Configure Quality Gates

Track Progress Throughout Cycle

Quality GapsIdentified?

Prioritize Testing Work

Review Readiness Status

Evaluate Quality Gates

DefectCriteria Met?

CoverageCriteria Met?

ExecutionCriteria Met?

All GatesMet?

RAG: AT RISK

RAG: READY

Go Decision

Choose Action

Add Tests / Fix Defects

Postpone + Communicate Timeline

Stakeholder Approval Required

## Release Health Dashboard Key Widgets

The Release Health Dashboard provides these widgets for readiness assessment:

WidgetPurposeKey MetricsRAG IndicatorOverall readiness status at a glanceREADY (Green) or AT RISK (Red)Quality Gates SummaryShow which gates are met/not metPass/fail status per gate categoryDefects by PriorityTrack open defects linked to releaseCount by Highest/High/Medium/Low vs. thresholdsRequirement CoverageShow percentage of requirements testedCoverage % vs. minimum thresholdPass Rate TrendTrack execution success rate over timeCurrent pass rate % vs. minimum threshold

For detailed widget configuration and customization, see [Assessing Release Readiness](/docs/release-readiness/assessing-release-readiness).

## Section Contents Overview

This section includes 3 how-to guides and 1 explanation to help you implement data-driven release decisions.

How-To Guides:

- [Assessing Release Readiness](/docs/release-readiness/assessing-release-readiness) - Configure quality gates, interpret RAG indicator, and make go/no-go decisions using Release Health Dashboard

- [Release Metrics & Tracking](/docs/release-readiness/release-metrics-tracking) - Monitor release progress daily/weekly, identify quality gaps early, and forecast readiness based on velocity

- [Stakeholder Reporting](/docs/release-readiness/stakeholder-reporting) - Generate executive summaries, communicate status objectively, and document decision rationale

Explanations:

- [Configuring Quality Gates](/docs/release-readiness/configuring-quality-gates) - Understand gate threshold philosophy, align criteria with risk tolerance, and adjust gates based on team maturity

## Recommended Learning Path

[### For Release Manager
Start: Assessing Release Readiness - Learn complete workflow from gate configuration to go/no-go decision using realistic release scenarioThen: Release Metrics & Tracking - Monitor release progress daily/weekly, identify gaps, forecast readiness based on velocityFinally: Stakeholder Reporting - Communicate status to stakeholders, generate executive summaries, document decision rationale](/docs/release-readiness/assessing-release-readiness)[### For Product Owner
Start: Assessing Release Readiness - Understand quality gate concepts and how to interpret RAG indicator for release decisionsThen: Configuring Quality Gates - Set thresholds aligned with business risk tolerance and feature scopeFinally: Stakeholder Reporting - Justify release decisions to leadership with objective data](/docs/release-readiness/assessing-release-readiness)[### For QA Director
Start: Configuring Quality Gates - Define organization-wide quality standards and gate thresholdsThen: Assessing Release Readiness - Understand complete workflow to coach teamsFinally: Release Metrics & Tracking - Monitor consistency across teams and releases, identify improvement opportunities](/docs/release-readiness/configuring-quality-gates)

## Common Questions

### What's the Release Readiness Indicator (READY/AT RISK)?

### How do I know what thresholds to set for quality gates?

### Can I use Release Health for Agile sprints?

### What if we don't meet quality gates?

### How does Release Health differ from operational dashboards (Live Monitor, Analytics & Trends)?

## See Also

Related Sections:

- [Dashboards & Monitoring](/docs/dashboards/introduction) - Understand operational dashboards (Live Monitor, Analytics & Trends) and how they complement Release Health for daily monitoring

- [Defects & Issues Analysis](/docs/defects/introduction) - Track defect trends and resolution velocity that feed into release readiness assessment

Foundation Concepts:

- [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types) - Learn difference between time-based scope (operational) and release-based scope (strategic)

- [Coverage & Traceability](/docs/coverage/introduction) - Understand requirement coverage metrics that form coverage criteria in quality gates

## 📍 Where to Go Next

Common next steps after Release Readiness:

- [Test Case Reports](/docs/test-case-reports/introduction) - After release decisions, assess test suite quality and plan optimization for next release cycle

- [Customization & External Sharing](/docs/customization/introduction) - Customize Release Health Dashboard and automate stakeholder reporting workflows for your team

- [Defects & Issues Analysis](/docs/defects/introduction) - If AT RISK status shows defect threshold violations, deep-dive into defect trends and resolution velocity

Need help deciding? See [Workflow Guide: Role-Based Pathways](/docs/workflows/overview)
[Understanding Defect MetricsComprehensive reference for all defect metrics in Katalon TestOps Reports & Analytics, including formulas, calculations, and interpretation guidelines for Accumulated Open, Created, and Closed defects.](/docs/defects/understanding-defect-metrics)[Assessing Release ReadinessHands-on tutorial to assess release readiness using the Release Health Dashboard—interpret RAG indicators, drill into quality gates, analyze metrics, and make data-driven go/no-go decisions.](/docs/release-readiness/assess-your-first-release)
# Assess Release Readiness

Release Readiness
# Assessing Release Readiness

Hands-on tutorial to assess release readiness using the Release Health Dashboard—interpret RAG indicators, drill into quality gates, analyze metrics, and make data-driven go/no-go decisions.

# Assessing Release Readiness

Estimated time: 18 minutes

What you'll learn: By the end of this tutorial, you will navigate to the Release Health Dashboard, select a specific release, interpret the READY vs. AT RISK indicator, understand quality gate criteria, analyze execution and coverage metrics, and make confident data-driven go/no-go release decisions.

Prerequisites:

- TestOps account with permissions to view Release Health Dashboard

- At least one release or sprint with test results linked to it

- Basic understanding of test execution concepts (see [Introduction to Reports & Analytics](/docs/getting-started/introduction))

## Introduction

Release decisions should be driven by data, not guesswork. The Release Health Dashboard consolidates your quality metrics—test execution status, defect distribution, and coverage gaps—into a single view with a clear readiness indicator. This tutorial walks you through the complete workflow: from accessing the dashboard to making a confident go/no-go decision backed by evidence.

You'll follow a realistic scenario where you're assessing whether "Release 2.1" is ready to ship. By the end, you'll know exactly how to interpret each widget, drill into details, and use quality gates to guide your release decision.

### Access the Release Health Dashboard

Start by navigating to the Release Health Dashboard in TestOps.

- Log in to your TestOps account

- From the main navigation menu, click Dashboards

- Select Release Health from the dashboard list

- The dashboard loads with an overview of your most recent release

You should see a prominent readiness indicator at the top center, with several widgets below showing execution summary, defects, and coverage metrics. If this is your first time viewing the dashboard, it may default to the latest active release or sprint.

Tip: Bookmark this dashboard if you assess releases regularly. It's the central hub for all release quality data.

### Select Your Target Release

Choose the specific release or sprint you want to assess.

- Locate the release selector dropdown in the top-right corner of the dashboard

- Click the dropdown to view available releases and sprints

- Select your target release (for this tutorial, we'll use "Release 2.1")

- The dashboard updates immediately to show data specific to Release 2.1

The dropdown lists both active sprints and upcoming/past releases. If you're using Jira or Azure DevOps, these releases sync automatically from your project management tool. Choose the release you're evaluating for go/no-go approval.

Note: Ensure your target release has test results linked to it. If you see "No data available," verify that test runs are associated with this release (via Jira fix version or TestOps release field).

### Interpret the Release Readiness Indicator

The Release Readiness Indicator is your primary decision signal—green means go, red means investigate.

The indicator displays one of two states:

READY (Green):

- All quality gates have been met

- No criteria thresholds exceeded

- High confidence to proceed with release

- Visual: Large green checkmark or "READY" label

AT RISK (Red):

- One or more quality gates not met

- Critical criteria thresholds exceeded

- Investigation required before release

- Visual: Large red "X" or "AT RISK" label

What it means for your decision:

- READY: Proceed to final stakeholder approval with confidence. All technical quality gates are satisfied.

- AT RISK: Do NOT release yet. Drill into quality gates (next step) to identify blockers and create an action plan.

The indicator uses a simple red-amber-green (RAG) system, though the current implementation focuses on READY (green) vs. AT RISK (red).

### Review Quality Gate Status

Quality gates define the specific criteria your release must meet. Let's examine each one.

- Locate the Quality Gates section just below the readiness indicator

- Review the three gate categories displayed

The dashboard shows three types of quality gates:

1. Defect Criteria:
Shows open defects by priority level versus configured thresholds.

Example display:

- Highest priority: 0 open defects / 1 allowed ✅ (Green checkmark - meets threshold)

- High priority: 2 open defects / 3 allowed ✅

- Medium priority: 6 open defects / 5 allowed ❌ (Red X - exceeds threshold)

A red X next to any priority level means you've exceeded the maximum allowed defects for that severity. Click the defect count to view the list of open defects.

2. Coverage Criteria:
Shows requirement test coverage percentage versus target.

Example display:

- Requirement Test Coverage: 85% / 80% required ✅

- Displays actual coverage vs. configured minimum

- Green checkmark when actual meets or exceeds target

- Red X when below target

3. Execution Criteria:
Shows test pass rate versus target threshold.

Example display:

- Test Pass Rate: 92% / 90% required ✅

- Calculates: (Passed tests / Total executed tests) × 100

- Green checkmark when pass rate meets or exceeds target

- Red X when below target

Key insight: Identify which gates failed. A single red X changes your readiness indicator to AT RISK. Prioritize fixing the highest-severity gate failures first.

### Analyze Execution Summary

The Execution Summary widget shows the distribution of test results across your release scope.

- Scroll down to locate the Execution Summary widget

- Review the test distribution displayed as a donut chart or bar chart

Example execution summary:

- Passed: 460 tests (85%)

- Failed: 30 tests (5.5%)

- Incomplete: 10 tests (1.8%)

- Total: 500 tests

What each status means:

Passed (Green):

- Tests executed successfully with expected results

- High pass rate (greater than 85%) indicates stable quality

- These tests give you confidence in release stability

Failed (Red):

- Tests executed but did not meet expected results

- Failures indicate potential defects or regressions

- Require investigation: Are these known issues or new problems?

Incomplete (Gray):

- Tests not yet executed, blocked, skipped, or errored

- May indicate test coverage gaps

- Should be completed before final release decision if they cover critical functionality

Action items:

- Click on the "Failed" count (30 tests) to drill down into the list of failed test cases

- Review each failure: Is it a known issue? A new regression? A test maintenance problem?

- Assess whether incomplete tests (10 tests) cover critical functionality that must be validated before release

Tip: A pass rate greater than 90% is generally considered healthy, but the acceptable threshold depends on your team's risk tolerance and product maturity.

### Check Open Defects Distribution

Open defects—especially high-priority ones—are critical blockers for release approval.

- Locate the Open Defects by Priority widget

- Review the defect distribution by priority level

Example defect distribution:

- Highest: 0 defects 🎯 (Critical blocker—must be zero)

- High: 2 defects

- Medium: 5 defects

- Low: 8 defects

- Total: 15 open defects

Priority guidelines:

Highest (Critical/Blocker):

- Zero tolerance—these must be fixed before release

- Examples: Data loss, security vulnerabilities, system crashes

- If any exist, recommend DELAY decision

High:

- Significant impact on functionality or user experience

- Evaluate each one: Can it be accepted as a known issue with workaround?

- If multiple high-priority defects exist, consider delaying release

Medium/Low:

- Lower impact, can often be accepted for release

- Document as known issues in release notes

- Schedule fixes for next release

Action items:

- Click any defect count to drill into the list of open defects

- Review each high-priority defect individually

- Determine: Fix before release, or accept as known issue with workaround?

### Review Configuration Coverage

Configuration coverage shows how thoroughly you've tested across different operating systems and browsers.

- Locate the Configuration Coverage widget

- Review testing coverage across OS/browser combinations

Example configuration coverage:

- Windows + Chrome: 95% coverage (460/485 tests executed)

- Mac + Safari: 80% coverage (388/485 tests executed)

- Linux + Firefox: 70% coverage (340/485 tests executed)

Coverage percentage calculation:
Coverage = (Executed tests / Total planned tests) × 100

Interpreting coverage gaps:

High coverage (greater than 90%):

- Strong confidence in platform stability

- Comprehensive validation across test suite

Medium coverage (70-89%):

- Adequate for non-critical platforms

- Identify: Are gaps in critical functionality or low-priority areas?

Low coverage (less than 70%):

- Risk of undetected platform-specific issues

- Evaluate: Is this platform critical to users?

Key questions to ask:

- Which platforms are most critical to our user base?

- Do coverage gaps affect critical functionality (login, checkout, data entry)?

- Can we accept lower coverage on secondary platforms (e.g., Linux if 90% of users are on Windows)?

Action items:

- Identify platforms with coverage less than your target threshold (typically 80-85%)

- Prioritize closing gaps on critical platforms and critical functionality

- Document accepted coverage gaps in release notes

### Assess Requirement Coverage

Requirement coverage shows what percentage of your release requirements have linked test cases.

- Locate the Requirement Coverage widget

- Review the coverage percentage and breakdown

Example requirement coverage:

- Coverage: 85% (Target: 80%) ✅

- Covered requirements: 85 out of 100

- Uncovered requirements: 15

Coverage status definitions:

Fully Covered:

- Requirement has linked test cases

- All test cases published, executed, and passed

- High confidence this requirement is validated

Partially Covered:

- Requirement has some test cases, but not all executed or passed

- Moderate confidence—gaps exist in validation

Not Covered:

- Requirement has no linked test cases

- No validation—risk of undetected issues

Action items:

- Click "View uncovered requirements" (15 requirements) to see the list

- Evaluate each uncovered requirement:

Is it critical functionality? (e.g., payment processing, user authentication)
Is it a nice-to-have feature? (e.g., cosmetic UI improvement)

- Decide: Must critical uncovered requirements be tested before release?

Tip: Not all requirements need 100% test coverage. Focus on critical business logic and high-risk areas. Documentation-only changes or minor UI tweaks may not require extensive testing.

### Make Your Go/No-Go Decision

Now that you've reviewed all metrics, it's time to make your release decision using a structured framework.

Decision framework:

Follow these four steps to reach a data-driven decision:

1. Readiness Indicator Check

- Is the indicator READY (Green) or AT RISK (Red)?

- Green = Strong signal to proceed

- Red = Investigate before deciding

2. Quality Gate Analysis

- How many gates failed? Which ones?

- Failed defect criteria = Must address high-priority defects

- Failed coverage criteria = Must assess risk of untested requirements

- Failed execution criteria = Must investigate failures or improve pass rate

3. Risk Assessment
Evaluate the severity of any issues:

- High-priority defects: Are they acceptable? Do workarounds exist?

- Coverage gaps: Are critical platforms or features untested?

- Failed tests: Are they new regressions or known issues?

- Incomplete tests: Do they cover critical functionality?

4. Stakeholder Alignment

- Does the data support the business timeline?

- Are stakeholders aware of documented risks?

- Is there agreement on accepted risks vs. blockers?

Three possible decision outcomes:

A. PROCEED (GREEN)

Criteria:

- All quality gates met ✅

- No highest or high-priority defects

- Coverage adequate across critical platforms

- Pass rate meets or exceeds target

Action:

- Approve release for production deployment

- Communicate approval to development and operations teams

- Schedule deployment according to release plan

Example scenario:

- Readiness indicator: READY (Green)

- Quality gates: 3/3 passed

- Execution: 460 passed, 20 failed, 20 incomplete (92% pass rate)

- Defects: 0 Highest, 1 High, 4 Medium, 6 Low

- Decision: PROCEED ✅

B. DELAY (RED)

Criteria:

- Critical quality gates failed ❌

- Highest or multiple high-priority defects remain

- Pass rate significantly below target (less than 85%)

- Coverage gaps on critical platforms or functionality

Action:

- Do NOT release—blockers must be addressed

- Identify specific blockers and assign owners

- Set target date for re-assessment (typically 24-48 hours)

- Communicate delay to stakeholders with clear rationale

Example scenario:

- Readiness indicator: AT RISK (Red)

- Quality gates: 1/3 passed (execution criteria failed)

- Execution: 440 passed, 40 failed, 20 incomplete (88% pass rate, target 90%)

- Defects: 0 Highest, 2 High, 5 Medium, 8 Low

- Decision: DELAY ❌

- Reason: High-priority defects + pass rate below threshold

- Action: Fix 2 high-priority defects, investigate 40 failures, aim for 90%+ pass rate

- Timeline: Re-assess in 2 days

C. CONDITIONAL RELEASE (AMBER)

Criteria:

- Minor quality gates failed (close to thresholds)

- Only medium or low-priority defects

- Coverage gaps on non-critical platforms only

- Pass rate slightly below target but within tolerance (e.g., 88% vs. 90% target)

Action:

- Proceed with documented risks

- Requires explicit stakeholder approval

- Document all known issues in release notes

- Create mitigation plan (hotfix readiness, rollback plan)

Example scenario:

- Readiness indicator: AT RISK (Red)

- Quality gates: 2/3 passed (coverage criteria at 78%, target 80%)

- Execution: 450 passed, 30 failed, 20 incomplete (90% pass rate)

- Defects: 0 Highest, 0 High, 8 Medium, 10 Low

- Decision: CONDITIONAL RELEASE ⚠️

- Reason: Coverage slightly below target, but no high-priority blockers

- Mitigation: Document known medium defects, schedule fixes for next patch release

- Approval: Stakeholder sign-off required

Documenting your decision:

Record your decision and rationale for audit and retrospective purposes:

- Decision: Proceed / Delay / Conditional

- Rationale: Key metrics and gate status

- Risks accepted: List of known issues

- Action items: Blockers to address, owners, timelines

- Approvers: Stakeholders who approved the decision

### Export Data for Stakeholders

Share release readiness data with stakeholders before your go/no-go meeting.

- Click the Export button in the top-right corner of the dashboard

- Choose your export format:

PDF: Executive summary with RAG indicator, key metrics, and visual charts
CSV: Detailed data for further analysis in Excel or BI tools

- Download the file

- Share with stakeholders before your release decision meeting

PDF export includes:

- Release name and date range

- Readiness indicator status (READY or AT RISK)

- Quality gate summary (passed/failed)

- Execution summary (passed/failed/incomplete counts)

- Defect distribution by priority

- Coverage metrics (configuration and requirement)

CSV export includes:

- Detailed test case results

- Individual defect records

- Configuration-level execution data

- Requirement-level coverage data

Tip: Use the PDF for executive stakeholders who need a high-level summary. Use the CSV for technical teams who need to drill into specific test cases or defects.

For more advanced reporting and stakeholder communication strategies, see [Stakeholder Reporting](/docs/release-readiness/stakeholder-reporting).

## Success Criteria

You've successfully completed this tutorial if you can:

- ✅ Navigate to the Release Health Dashboard

- ✅ Select a specific release and view its status

- ✅ Interpret READY (green) vs. AT RISK (red) indicators

- ✅ Identify which quality gates passed or failed

- ✅ Analyze execution summary, defect distribution, and coverage metrics

- ✅ Make confident go/no-go decisions backed by data

- ✅ Export release readiness data for stakeholder communication

## What's Next

Now that you've learned to assess release readiness, explore these related topics:

- Configure quality gates: [Configuring Quality Gates](/docs/release-readiness/configuring-quality-gates) - Customize thresholds for your team's risk tolerance

- Track progress: [Release Metrics & Tracking](/docs/release-readiness/release-metrics-tracking) - Monitor daily and weekly progress toward release goals

- Advanced reporting: [Stakeholder Reporting](/docs/release-readiness/stakeholder-reporting) - Create executive summaries and compliance reports

## Common Challenges

### Readiness indicator shows AT RISK, but I'm not sure why

### Some quality gates seem too strict for my team

### I don't see my release in the selector dropdown

### Execution Summary shows many incomplete tests

### Configuration coverage is low on a specific platform

### Quality gates passed, but I still have concerns about releasing

## Role-Based Workflows

[### QA Manager Workflow
See how QA Managers use Release Health Dashboards to facilitate go/no-go decisions, communicate quality status, and document release approval with objective metrics.](/docs/workflows/qa-manager)[### Product Owner Workflow
Learn how Product Owners assess release readiness against quality gates, make data-driven release decisions, and communicate risk to stakeholders.](/docs/workflows/product-owner)

📊 Document Metrics:

- Word count: 2,395 words

- Target range: 2,000-2,400 words

- Status: ✅ Within target

- Estimated reading time: 18 minutes

[Release Readiness: Overview and Getting StartedMake objective, data-driven release decisions using Release Health Dashboard with quality gates, RAG indicators, and go/no-go decision frameworks for confident software releases.](/docs/release-readiness/release-readiness-overview)[Release Metrics & TrackingMonitor release and sprint progress by tracking execution summary, defect distribution, configuration coverage, and requirement coverage—identify risks early with daily and weekly check-ins.](/docs/release-readiness/track-release-metrics)
