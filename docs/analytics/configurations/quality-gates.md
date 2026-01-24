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