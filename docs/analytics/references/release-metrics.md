Release Readiness
# Release Metrics & Tracking

Monitor release and sprint progress by tracking execution summary, defect distribution, configuration coverage, and requirement coverage—identify risks early with daily and weekly check-ins.

# Release Metrics & Tracking

Time required: 16 minutes
Prerequisites:

- Release or sprint created with linked test results

- Configured quality gates (see [Configuring Quality Gates](/docs/release-readiness/configuring-quality-gates))

- Basic understanding of Release Health Dashboard

- Appropriate permissions to view releases

Related guides:

- [Assessing Release Readiness](/docs/release-readiness/assessing-release-readiness) - Making final go/no-go decisions

- [Configuring Quality Gates](/docs/release-readiness/configuring-quality-gates) - Setting metric thresholds

## Overview

Continuous monitoring of release and sprint metrics prevents last-minute surprises and keeps quality visible throughout your development cycle. Rather than waiting until release day to discover problems, daily and weekly check-ins identify risks early when they're easier to address.

This guide shows you how to track four critical metric categories using the Release Health Dashboard. Each category provides visibility into a different quality dimension—execution status, defect severity, cross-platform coverage, and requirement traceability. The same tracking approach works for both releases (4-12 week cycles) and sprints (1-4 week cycles), with adjustments in review frequency.

By establishing regular tracking workflows—a 10-minute daily check-in and a 30-minute weekly checkpoint—you'll maintain clear visibility into quality trends and empower your team to make informed decisions about release readiness.

## Four Metric Categories

### Category 1: Execution Summary Tracking

Execution summary metrics show the distribution of test results across passed, failed, and incomplete states. This provides immediate visibility into overall test health and helps you spot quality trends before they become critical issues.

What it shows:

The execution summary displays three key values:

- Passed tests: Count and percentage of tests that completed successfully

- Failed tests: Count and percentage of tests that encountered failures

- Incomplete tests: Count and percentage of tests not yet executed

These values combine into a pass rate calculation that serves as your primary quality indicator. Most teams target a pass rate above 90% for production releases, though your quality gates may define different thresholds based on risk tolerance.

How to track:

- Navigate to the Release Health Dashboard from the main navigation

- Select your target release or sprint from the release selector dropdown

- Locate the "Execution Summary" widget, typically positioned at the top of the dashboard

- Review the distribution visualization (pie chart or bar chart) showing the three test states

- Note the overall pass rate percentage displayed prominently

- Click individual chart segments to drill into specific test lists and see which tests are in each state

The widget updates automatically as new test results arrive, so refresh your browser to see the latest numbers during active testing periods.

What to look for:

Interpret execution trends using these signals:

- Green signal: Pass rate is stable or improving over time, failed test count is decreasing

- Yellow signal: Pass rate has declined 1-5% in the past 24-48 hours, requiring monitoring but not immediate action

- Red signal: Pass rate has dropped more than 5% suddenly, or failed test count is increasing daily despite active bug fixing

Pay attention to the trend direction, not just the absolute numbers. A 92% pass rate that's declining is more concerning than an 88% pass rate that's improving.

Daily check-in (5 minutes):

Incorporate execution summary tracking into your morning routine:

- Open the dashboard first thing each morning

- Check for any test runs that completed overnight

- Note new failures that appeared since your last check

- Identify the top 3-5 most critical new failures

- Assign investigation owners for new failures during standup

- Document any patterns you notice (same tests failing repeatedly, failures clustered in specific features)

This brief daily review keeps the team aware of test health without requiring deep investigation time.

Weekly checkpoint (15 minutes):

Dedicate time each week for deeper analysis:

- Compare current week pass rate against previous week (calculate percentage change)

- Identify patterns in failure timing—do tests fail more often after deployments, on weekends, or on specific days?

- Review the list of tests that have failed multiple times this week (flaky test candidates)

- Assess whether test execution frequency matches your quality goals

- Adjust test scheduling if you're not getting results fast enough to make timely decisions

Document your findings in your sprint notes or release tracking documents so you can reference them during retrospectives.

Example scenario:

Sprint 24 begins with a 90% pass rate on Day 1. By Day 3, the pass rate drops to 85% with 8 new failing tests. The team investigates and discovers that a new feature introduced breaking changes to existing functionality. They prioritize fixes for the 8 failures, completing repairs by Day 5. The pass rate recovers to 92% by Day 7, actually higher than the starting point because the team also fixed 3 previously flaky tests during their investigation.

### Category 2: Defect Distribution Tracking

Defect distribution shows how many open defects exist at each priority level. This provides critical insight into the severity of known issues and helps you assess whether blocking issues will prevent a successful release.

What it shows:

The defect distribution widget displays counts across four priority tiers:

- Highest priority: Blocker issues preventing critical functionality

- High priority: Major issues affecting important features but with workarounds

- Medium priority: Moderate issues affecting non-critical features

- Low priority: Minor cosmetic or edge-case issues

Most quality gates define acceptance thresholds like "0 Highest, maximum 2 High" for production releases. Your specific thresholds depend on your risk tolerance and industry requirements.

Key metrics to monitor:

- Defect counts by priority: Track how counts change day-over-day to identify whether you're making progress

- Defect resolution rate: Calculate how many defects you're closing per day or week compared to how many new defects are being created

- Age of defects: Monitor how long highest-priority defects have remained open—defects aging more than 5 days often indicate blockers or resource constraints

How to track:

- Locate the "Open Defects by Priority" widget on your Release Health Dashboard

- Review current counts displayed for each priority tier (example: 0 Highest, 2 High, 5 Medium, 8 Low)

- Compare these counts against your configured quality gate thresholds

- Click on specific priority labels to drill into the list of defects in that category

- In the detailed view, sort defects by age, assignee, or status to identify concerning patterns

- Check that every Highest and High priority defect has an assigned owner actively working on resolution

What to look for:

Use these signals to assess defect health:

- Green signal: Highest and High priority defect counts are decreasing day-over-day, resolution rate exceeds creation rate

- Yellow signal: Highest and High priority defect counts are stable (not decreasing) but not increasing either

- Red signal: New Highest priority defects are appearing, or existing Highest/High defects are aging beyond 3-5 days without resolution

The absolute count matters less than the trend. Five High priority defects at sprint start is acceptable if you're closing one per day. Two High priority defects near sprint end is concerning if both have been open for 10 days.

Daily check-in (5 minutes):

Make defect distribution review part of your standup preparation:

- Check each morning whether new defects were created overnight

- Note the priority distribution of new defects

- Verify that all Highest and High priority defects have assigned owners

- Identify any defects that have been in "In Progress" status for more than 2-3 days without updates

- Flag blockers or dependencies preventing defect resolution

Bring these observations to your standup to ensure the team addresses critical issues immediately.

Weekly checkpoint (15 minutes):

Conduct a deeper defect analysis once per week:

- Calculate your defect resolution rate: (defects closed this week) divided by (defects created this week)

- Identify resolution bottlenecks—are defects stuck waiting for code review, deployment, or verification?

- Review the list of defects that have remained in the same status for more than 5 days

- Assess whether you have enough capacity to resolve all critical defects before your release date

- Escalate resource constraints or blockers to leadership if you're falling behind

Document your resolution rate trend—if you see it declining over multiple weeks, you may need additional resources or scope reduction.

Risk identification framework:

Apply these rules of thumb to assess release risk based on defect status:

- HIGH RISK (consider delaying release):

2 or more Highest priority defects with less than 3 days remaining before release date
5 or more High priority defects with less than 1 week remaining
Defect resolution rate below 50% (creating defects faster than fixing them)

- MEDIUM RISK (extend sprint or reduce scope):

1 Highest priority defect within 3-5 days of release
3-4 High priority defects within 1 week of release
Multiple High priority defects aging beyond 7 days

- LOW RISK (acceptable, document as known issues):

0 Highest priority defects
1-2 High priority defects with clear resolution plans
10 or more Medium priority defects (acceptable for most releases)

Example scenario:

Release 2.1 has 2 Highest priority defects discovered on Day -5 (five days before the scheduled release date). Both defects affect payment processing, a critical path feature. The team immediately reprioritizes work, pulling two senior engineers from other tasks to fix the payment issues. They complete and verify both fixes by Day -2 (two days before release). Because the team identified and resolved the blockers early, the release proceeds on schedule without compromising quality.

### Category 3: Configuration Coverage Tracking

Configuration coverage metrics show how thoroughly you've tested across different operating system and browser combinations. This is critical for web applications where behavior can vary significantly across platforms.

What it shows:

The configuration coverage widget displays test execution rates for each OS/browser combination in your test matrix. Common configurations include:

- Windows + Chrome

- Windows + Edge

- macOS + Safari

- macOS + Chrome

- Linux + Chrome

- Various mobile browsers (iOS Safari, Android Chrome)

Each configuration shows a coverage percentage indicating what proportion of your test suite has been executed on that specific combination.

Key metrics to monitor:

- Coverage rate per configuration: Percentage of total tests that have been executed on each OS/browser combination

- Critical configurations: Your most important platforms (typically Chrome, Safari, Edge) where you should target 90%+ coverage

- Optional configurations: Lower-priority platforms (often Firefox, Opera, or specific mobile browsers) where 70%+ coverage is acceptable

How to track:

- Locate the "Configuration Coverage" widget on your Release Health Dashboard

- Review the coverage table or heatmap displaying all OS/browser combinations

- Identify gaps shown as red or orange cells indicating less than 70% coverage

- Click on specific configuration cells to see which test cases have not yet been executed on that platform

- Use that information to schedule additional test runs, either manual or automated, to fill coverage gaps

- Note whether low coverage is due to missing test runs or because certain tests are platform-specific

The widget helps you prioritize where to focus testing effort based on which platforms matter most to your users.

What to look for:

Interpret configuration coverage using these signals:

- Green signal: All critical configurations show 85%+ coverage, important configurations above 75%

- Yellow signal: Critical configurations are at 70-84% coverage, or important configurations below 70%

- Red signal: Any critical configuration shows less than 70% coverage, or you're within 1 week of release with critical gaps

Remember that 100% coverage across all configurations is rarely necessary or cost-effective. Focus on achieving high coverage for your critical platforms first.

Weekly checkpoint (15 minutes):

Review configuration coverage in detail once per week:

- Examine coverage percentages across all configurations in your test matrix

- Identify which specific configurations are lagging behind your targets

- Determine root causes for gaps—missing test runs, environment availability issues, or platform-specific test exclusions

- Schedule additional test runs to address the most critical gaps

- If you're consistently unable to reach target coverage for a configuration, reassess whether it should remain in your critical list

- Adjust environment availability if infrastructure constraints are creating bottlenecks

Document your coverage trends over multiple weeks to identify persistent problem areas that need architectural solutions.

Platform prioritization framework:

Not all configurations have equal importance. Apply this prioritization to focus your testing effort:

Tier 1 - Critical (must reach 90%+ coverage):

- Windows + Chrome (largest user base for most applications)

- macOS + Safari (significant user segment)

- Windows + Edge (enterprise users)

Tier 2 - Important (target 80%+ coverage):

- Linux + Chrome (developer and power user segment)

- macOS + Chrome (alternative browser users)

- iOS Safari (mobile primary browser)

Tier 3 - Optional (target 70%+ coverage):

- Firefox (declining market share)

- Opera (niche user base)

- Android Chrome (if mobile is secondary)

- Older browser versions (legacy support)

Adjust these tiers based on your actual user analytics. If 40% of your users access your application via mobile, promote mobile browsers to Tier 1.

Risk identification framework:

- HIGH RISK: Any critical (Tier 1) configuration below 80% coverage with less than 1 week remaining before release

- MEDIUM RISK: Any important (Tier 2) configuration below 70% coverage, or critical configuration below 85% near release

- LOW RISK: Optional (Tier 3) configuration below 60% coverage (acceptable to release with documented limitations)

Example scenario:

Release 2.1 shows macOS + Safari at only 65% coverage on Day -7 (one week before release). Since Safari is a critical browser for the application's user base, the QA Manager schedules three dedicated manual test sessions on macOS machines over the next four days. The team completes 45 additional test cases on Safari, bringing coverage to 88% by Day -3. The release proceeds with confidence that Safari users will have a quality experience.

### Category 4: Requirement Coverage Tracking

Requirement coverage metrics show what percentage of your requirements have tests linked to them. This provides traceability between what you committed to build and how you're verifying it works correctly.

What it shows:

The requirement coverage widget displays:

- Overall coverage percentage: Total requirements with linked tests divided by total requirements

- Covered requirements: List of requirements that have at least one test associated with them

- Uncovered requirements: List of requirements with no linked tests

- Coverage trend: Whether your coverage percentage is increasing, stable, or decreasing over time

This metric is particularly important in regulated industries (healthcare, finance, aerospace) where traceability between requirements and tests is mandatory for compliance.

Key metrics to monitor:

- Overall coverage percentage: Your primary indicator, typically targeted at 80%+ for releases

- Count of uncovered requirements: Absolute number of requirements still needing tests

- Coverage trend direction: Whether you're making progress toward your target

- High-priority uncovered requirements: Critical requirements that must have tests before release

How to track:

- Locate the "Requirement Coverage" widget on your Release Health Dashboard

- Review the overall coverage percentage displayed prominently (example: 85%)

- Note whether this percentage meets your quality gate threshold

- Click "View uncovered" or the uncovered requirements count to see the detailed list of requirements without tests

- For each uncovered requirement, assess its criticality—is it truly testable? Is it high or low priority?

- Identify existing tests that should be linked to covered requirements but haven't been associated yet

- Create new tests for critical uncovered requirements if they don't exist

The goal is not necessarily 100% coverage, since some requirements are non-testable (documentation, design guidelines) or very low priority.

What to look for:

Interpret requirement coverage using these signals:

- Green signal: Coverage at or above your threshold (example: 80%+), trend line stable or increasing

- Yellow signal: Coverage slightly below threshold (example: 75-79%), or trend line flat despite ongoing testing

- Red signal: Coverage significantly below threshold (example: less than 75%), or trend line decreasing as new requirements are added faster than tests

Pay attention to the composition of your uncovered requirements. Ten uncovered low-priority requirements is less concerning than three uncovered high-priority requirements.

Weekly checkpoint (15 minutes):

Conduct requirement coverage analysis weekly:

- Review the complete list of uncovered requirements

- Categorize each uncovered requirement:

Non-testable: Documentation, UI design, architectural decisions (mark as "N/A" or exclude from coverage calculation)
Low-priority: Nice-to-have features, edge cases, future enhancements (acceptable to defer testing to next release)
Critical: Core functionality, high-risk features, compliance-required capabilities (must test before release)

- For covered requirements, verify that the linked tests actually validate the requirement (avoid superficial linking)

- Link existing tests to requirements where associations are missing

- Schedule test creation for critical uncovered requirements

- Update coverage target if you discover many requirements are legitimately non-testable

Document your categorization decisions so future reviewers understand why certain requirements remain uncovered.

Traceability best practices:

Maintain high-quality requirement coverage by following these practices:

- Link during test creation: Associate tests with requirements when you first create the test, not retroactively during a pre-release panic

- Use requirement IDs in test names: Include the requirement identifier (example: REQ-123) in test case names for easy searching

- Update links when requirements change: If a requirement is split, merged, or deprecated, update the associated test links immediately

- Verify bidirectional links: Ensure you can navigate both from requirements to tests AND from tests to requirements

- Avoid many-to-many overload: While requirements can have multiple tests and tests can cover multiple requirements, excessive linking (50+ links per requirement) suggests unclear requirements

Risk identification framework:

- HIGH RISK: Less than 70% coverage with less than 1 week remaining before release

- MEDIUM RISK: Less than 80% coverage in a regulated industry with compliance requirements

- LOW RISK: Less than 85% coverage for a general availability release in non-regulated industry

Adjust these thresholds based on your industry, customer expectations, and internal quality standards.

Example scenario:

Sprint 24 begins with 78% requirement coverage on Day 1. The QA Manager reviews the list of 22 uncovered requirements and categorizes them: 15 are low-priority enhancements deferred to Sprint 25, 5 are non-testable design requirements, and 7 are critical functional requirements that need tests. The team creates focused test cases for the 7 critical requirements over the next 5 days. By sprint end, requirement coverage reaches 85% (excluding the 5 non-testable requirements), meeting the quality gate threshold.

## Tracking Workflows

Effective metric tracking requires establishing regular review cadences. The following workflows help you maintain consistent visibility without creating excessive overhead.

### Daily Check-In (10 minutes total)

Incorporate a brief metric review into your daily routine:

- Open the Release Health Dashboard at a consistent time each morning (before standup is ideal)

- Select your current release or sprint from the release selector

- Quick scan of all four metric categories:

Execution Summary: Are there any new test failures overnight? Has the pass rate dropped?
Defect Distribution: Were any new Highest or High priority defects created? Are critical defects aging?
Configuration Coverage: Has any critical configuration dropped below threshold?
Requirement Coverage: Is the coverage trend stable or declining?

- Note 2-3 action items for discussion during team standup

- Close the dashboard and move to standup with data-informed talking points

This 10-minute investment keeps you continuously informed without requiring deep analysis daily. Save detailed investigation for your weekly checkpoint.

### Weekly Checkpoint (30 minutes)

Schedule a dedicated 30-minute session each week for comprehensive analysis:

- Review each metric category in depth using the guidance provided in sections above

- Compare current week against previous week for all four categories

- Calculate trend directions (improving/stable/declining) for each metric

- Identify risks and blockers that could prevent meeting quality gates

- Present findings to the team in a brief 5-10 minute summary during a team meeting

- Assign action items with owners for addressing any yellow or red signals

- Update sprint or release plan if you need to adjust scope, extend timelines, or add resources

Document your weekly findings in your project management tool (Jira, Azure DevOps) so you have a historical record for retrospectives and future planning.

### Sprint Retrospective Integration

At the end of each sprint, leverage Release Health Dashboard metrics to inform your retrospective discussion:

Retrospective preparation:

- Export final metric values from the Release Health Dashboard

- Note which metrics met quality gates and which fell short

- Identify the biggest failures, defects, or coverage gaps during the sprint

- Calculate improvement rates (how much did metrics improve from sprint start to end?)

Retrospective discussion questions:

- Did we meet all quality gate thresholds? If not, why?

- Which metrics showed the most improvement? What practices drove that improvement?

- Which metrics declined or stagnated? What obstacles prevented progress?

- What were the root causes of our biggest test failures or defects?

- How can we improve requirement or configuration coverage in the next sprint?

- Did we review metrics frequently enough, or should we adjust our cadence?

Use specific metric values to keep the discussion grounded in data rather than feelings or assumptions.

## Common Tracking Scenarios

### Sprint tracking (2-week cycle)

### Release tracking (4-12 week cycle)

### Multi-team release tracking

## Troubleshooting

### Metrics not updating after test execution

### Coverage calculations seem incorrect

### Too much data—can't identify trends

## Role-Based Workflows

[### QA Manager Workflow
See how QA Managers monitor release metrics daily and weekly to identify risks early, track sprint progress, and communicate quality status to stakeholders.](/docs/workflows/qa-manager)[### Product Owner Workflow
Learn how Product Owners track release health metrics to validate requirement coverage, monitor defect trends, and assess release readiness against business priorities.](/docs/workflows/product-owner)

## See Also

- [Assessing Release Readiness](/docs/release-readiness/assessing-release-readiness) - Using these metrics to make final go/no-go decisions

- [Configuring Quality Gates](/docs/release-readiness/configuring-quality-gates) - Setting thresholds for each metric category

- [Release Health Dashboard](/docs/dashboards/release-health-dashboard) - Understanding all available widgets and configuration options

- [Understanding Analytics Scope](/docs/getting-started/analysis-scope-types) - How scope affects metric calculations

[Assessing Release ReadinessHands-on tutorial to assess release readiness using the Release Health Dashboard—interpret RAG indicators, drill into quality gates, analyze metrics, and make data-driven go/no-go decisions.](/docs/release-readiness/assess-your-first-release)[Configuring Quality GatesStep-by-step guide to configure quality gates in TestOps Release Health Dashboard—set defect thresholds, coverage criteria, and execution thresholds to define objective release approval criteria.](/docs/release-readiness/configure-quality-gates)
