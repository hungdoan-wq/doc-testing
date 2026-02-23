# Defect Metrics

Content coming soon.
Defects & Quality
# Understanding Defect Metrics

Comprehensive reference for all defect metrics in Katalon TestOps Reports & Analytics, including formulas, calculations, and interpretation guidelines for Accumulated Open, Created, and Closed defects.

# Understanding Defect Metrics

Reading time: 10-15 minutes

Understanding defect metrics is fundamental to effective quality management and data-driven decision-making. Accurate interpretation of these metrics enables QA Managers, Product Owners, and development teams to assess software quality, track resolution progress, identify process bottlenecks, and communicate status to stakeholders with confidence.

TestOps provides three core defect metrics—Accumulated Open Defects, Created Defects, and Closed Defects—each serving distinct analytical purposes. This document explains what each metric measures, how TestOps calculates them, when to use them, and how to avoid common interpretation pitfalls.

## Core Defect Metrics

TestOps tracks defects that originate from Application Lifecycle Management (ALM) tools like Jira and Azure DevOps. Once created in your ALM system and synchronized with TestOps, these defects become part of your quality analytics.

### Accumulated Open Defects

Definition: Accumulated Open Defects represents the cumulative count of all defects that have been created but not yet resolved, regardless of when they were created.

Calculation Method:

Accumulated Open Defects = COUNT(Defects WHERE resolvedAt = NULL)

This metric is time-period independent—it counts all open defects in your project up to the current moment, not just those created within a specific timeframe.

What Counts as "Open":

- Defects with resolvedAt = NULL (no resolution timestamp recorded)

- Any defect in your ALM system that has not reached a resolved/closed status

- Includes defects from previous sprints, releases, or time periods that remain unresolved

Cumulative Nature:
Accumulated Open Defects is a snapshot metric. It reflects the current backlog of unresolved issues. This count can increase (new defects created) or decrease (existing defects resolved), but it always represents the total outstanding defect debt at any given moment.

Use Cases:

- Sprint Health Monitoring: Track whether your defect backlog is growing or shrinking over time

- Release Blockers: Identify how many unresolved defects exist before a release

- Technical Debt Assessment: Measure the cumulative burden of unaddressed quality issues

- Trend Analysis: Plot Accumulated Open Defects over multiple sprints to visualize quality trajectory

Example:
If your project has 45 open defects today—some created last month, some created yesterday—your Accumulated Open Defects count is 45. If you resolve 10 defects tomorrow and create 3 new ones, the count becomes 38 (45 - 10 + 3).

### Created Defects

Definition: Created Defects measures the count of new defects discovered and logged within a specified time period.

Calculation Method:

Created Defects = COUNT(Defects WHERE createdAt >= StartDate AND createdAt <= EndDate)

This metric is time-period dependent—only defects with creation timestamps falling within your selected timeframe are counted.

Time Boundary Rules:

- Inclusive boundaries: Both StartDate and EndDate are included in the count

- Creation timestamp: Uses the createdAt field from the ALM system (when the defect was first logged)

- Time zone considerations: Timestamps respect your project's configured time zone

What Triggers "Created" Status:

- A defect is logged in your ALM tool (Jira, Azure DevOps, etc.)

- TestOps successfully synchronizes the defect into its database

- The defect's createdAt timestamp falls within your analysis scope

Use Cases:

- Defect Velocity Tracking: Measure how many new issues are discovered per sprint or week

- Sprint Retrospectives: Compare defect creation rates across iterations to identify trends

- Quality Gate Assessment: Evaluate whether defect discovery rate is decreasing as quality improves

- Test Coverage Analysis: High created defect counts may indicate gaps in earlier testing phases

Example:
If you filter a report to show defects from January 1-31, and 23 defects were logged in your ALM system during that month, your Created Defects count is 23—even if 15 of those defects were resolved before January 31.

### Closed Defects

Definition: Closed Defects measures the count of defects that were resolved (moved to a closed/resolved status) within a specified time period.

Calculation Method:

Closed Defects = COUNT(Defects WHERE resolvedAt >= StartDate AND resolvedAt <= EndDate)

This metric is time-period dependent—only defects with resolution timestamps falling within your selected timeframe are counted.

Resolution Criteria:

- Defects must have a resolvedAt timestamp (not NULL)

- The resolvedAt timestamp must fall within your selected time range

- Resolution status is determined by your ALM system's workflow configuration

Status Mapping:
What counts as "closed" depends on your ALM tool's status definitions:

- Jira: Typically "Resolved," "Closed," "Done"

- Azure DevOps: Typically "Resolved," "Closed," "Completed"

- Custom workflows: TestOps respects your ALM tool's status categories

Time Period Considerations:

- A defect created in Sprint 1 but resolved in Sprint 2 counts toward Sprint 2's Closed Defects

- A defect created and resolved within the same day counts toward both Created and Closed metrics for that day

- Only the resolution date matters for this metric—not when the defect was originally created

Use Cases:

- Team Productivity: Measure how many defects your team resolves per sprint or week

- Resolution Velocity: Track whether your team is closing defects faster than they're being created

- Burndown Analysis: Monitor progress toward zero-defect release goals

- Resource Planning: Assess whether current staffing can handle defect resolution workload

Example:
If you filter a report for February 1-28, and your team resolved 31 defects during February (some created in January, some created in February), your Closed Defects count is 31.

## Priority & Severity Distribution

TestOps displays defects grouped by priority to help teams focus on the most critical issues first.

### Priority Levels

TestOps supports standard priority classifications:

- Critical: System-breaking defects, production blockers

- High: Major functionality impaired, workaround exists

- Medium: Moderate impact, does not block core workflows

- Low: Minor issues, cosmetic problems

- Lowest: Trivial issues, future enhancements

Note: Priority values are defined in your ALM tool and synchronized to TestOps. Custom priority levels are supported.

### Priority Display Rules

TestOps determines which priority to display using the following precedence:

- TestOps Priority Field: If a priority is explicitly mapped in TestOps, it takes precedence

- External Priority ID Mapping: If TestOps has a mapping table for your ALM tool's priority IDs, it uses that mapping

- Direct ALM Priority: If no mapping exists, TestOps displays the priority directly from the ALM tool

- None/Null: If no priority is set, defects are grouped under "None" or equivalent

Priority Distribution Analysis:
TestOps reports display:

- Count of defects per priority level

- Percentage of total defects represented by each priority

- Visual breakdown (pie charts, stacked bars) sorted by priority severity

Use Cases:

- Risk Assessment: Identify concentration of high-priority defects

- Resource Allocation: Prioritize team efforts based on severity distribution

- Stakeholder Communication: Show executives where quality risks are concentrated

### Severity vs. Priority

While related, severity and priority serve different purposes:

- Severity: Technical impact of the defect (how broken is the functionality?)

- Priority: Business urgency of fixing the defect (when must this be fixed?)

Example:
A typo in the CEO's name on the homepage might have:

- Low Severity (doesn't break functionality)

- High Priority (visible to all customers, embarrassing)

TestOps reports primarily use priority for visualization and filtering, as priority reflects actionable business decisions. If your ALM tool tracks both severity and priority, TestOps respects your tool's configuration.

## Time-Based Considerations

Understanding how time boundaries affect defect calculations is critical for accurate reporting.

### How Time Boundaries Affect Calculations

Daily Intervals:

- Each day's data point represents defects created/closed on that specific date

- Accumulated Open Defects shows the snapshot balance at the end of each day

- Useful for tracking daily defect discovery and resolution velocity

Weekly Intervals:

- Each week's data point aggregates defects created/closed during that 7-day period

- Accumulated Open Defects shows the snapshot balance at the end of each week

- Useful for sprint-based teams following 1-2 week iterations

Monthly Intervals:

- Each month's data point aggregates defects created/closed during that calendar month

- Accumulated Open Defects shows the snapshot balance at the end of each month

- Useful for long-term trend analysis and executive reporting

### Snapshot vs. Accumulated Metrics

Snapshot Metrics:

- Created Defects and Closed Defects are snapshot metrics within a period

- They count events that occurred during the specified timeframe

- These metrics are independent of each other within the same period

Accumulated Metrics:

- Accumulated Open Defects is a cumulative running total

- It reflects the net result of all historical defect activity up to that point

- Formula: Previous Accumulated + Created - Closed = Current Accumulated

Relationship:

Accumulated Open Defects (End of Period) =
    Accumulated Open Defects (Start of Period)
    + Created Defects (This Period)
- Closed Defects (This Period)

Example:

- Start of Sprint 5: 50 Accumulated Open Defects

- During Sprint 5: 20 Created, 25 Closed

- End of Sprint 5: 45 Accumulated Open Defects (50 + 20 - 25)

### Edge Cases: Same-Period Defects

Scenario: A defect is created and closed within the same time period.

Impact on Metrics:

- Created Defects: +1 (defect was created in this period)

- Closed Defects: +1 (defect was resolved in this period)

- Accumulated Open Defects: No net change (opened and closed cancel out)

Why This Matters:
This is normal and healthy. It means your team is rapidly addressing newly discovered issues. A high ratio of Created-and-Closed-Same-Period defects indicates:

- Efficient defect triage and resolution

- Strong collaboration between testers and developers

- Effective continuous integration practices

Reporting Consideration:
When analyzing trends, don't be surprised if Created and Closed counts are similar but Accumulated Open Defects remains stable or decreases—this indicates sustainable quality practices.

## Common Misconceptions

Understanding defect metrics requires recognizing frequent interpretation errors.

### "Why Doesn't Created + Closed = Total?"

Misconception: Many users expect Created Defects + Closed Defects = Accumulated Open Defects within a single period.

Reality: These metrics measure different dimensions:

- Created Defects: New issues discovered in this period

- Closed Defects: Issues resolved in this period (may have been created earlier)

- Accumulated Open Defects: Total backlog of unresolved issues (from all time periods)

Example Breakdown:

- Sprint 3 Created: 15 defects

- Sprint 3 Closed: 22 defects (includes 10 defects from Sprint 2, 12 from Sprint 3)

- Sprint 3 Accumulated Open: 38 defects (historical backlog minus recent closures)

Correct Relationship:

Accumulated Open (End) = Accumulated Open (Start) + Created - Closed

Not Created + Closed = Accumulated.

### Accumulated vs. Period-Specific Metrics

Misconception: "Accumulated Open Defects" is the sum of defects created in the current period.

Reality: Accumulated Open Defects is a cumulative snapshot of all unresolved defects, regardless of when they were created.

Key Distinction:

- Period-specific metrics (Created, Closed): Time-bound, measure activity within a window

- Accumulated metric (Open): Cumulative, reflects the total outstanding balance

Analogy:
Think of your bank account:

- Created Defects = Deposits this month

- Closed Defects = Withdrawals this month

- Accumulated Open Defects = Current account balance (includes all historical activity)

### Status Mapping Variations Across ALM Tools

Misconception: "Closed" status means the same thing in every ALM tool.

Reality: Each ALM tool has its own workflow and status definitions. TestOps respects these differences.

Jira Example:

- "Resolved" might mean "fixed and ready for testing"

- "Closed" might mean "verified and deployed"

- Your organization determines which statuses count as "closed" in TestOps

Azure DevOps Example:

- "Resolved" might be the first resolution status

- "Closed" might be the final archived status

- "Completed" might be used for Agile workflows

TestOps Behavior:
TestOps synchronizes status values directly from your ALM tool. If a defect has resolvedAt != NULL, it counts as "closed" for metrics purposes.

Recommendation:
Review your ALM tool's workflow configuration to understand exactly which statuses indicate resolution. This ensures accurate interpretation of Closed Defects metrics.

### Data Lag and Synchronization Timing

Misconception: Defect metrics update instantly when changes occur in the ALM tool.

Reality: TestOps synchronizes defect data periodically, which may introduce a short delay.

Synchronization Behavior:

- Frequency: Depends on your organization's TestOps configuration (typically every 15-60 minutes)

- Data finalization: Metrics are finalized at the end of each day (midnight in your project's time zone)

- Real-time vs. Historical: Live dashboards may show slightly delayed data; historical reports are fully accurate

Why This Matters:
If you close a defect in Jira at 3:00 PM and immediately check TestOps, it might not reflect the change for 15-30 minutes. This is expected behavior and does not affect the accuracy of historical trend analysis.

Best Practice:
For critical release decisions, wait 1-2 hours after making ALM changes to ensure TestOps reflects the latest data.

### Comparison with Other Testing Tools

## Key Takeaways

Understanding defect metrics empowers data-driven quality decisions:

- Accumulated Open Defects is a cumulative snapshot—it reflects total unresolved defects from all time periods, not just the current period

- Created Defects measures discovery rate within a specific timeframe—useful for tracking testing effectiveness and quality trends

- Closed Defects measures resolution rate within a specific timeframe—useful for tracking team productivity and burndown progress

- Priority distribution helps focus team efforts on the most critical issues

- Time boundaries matter—ensure you understand whether you're analyzing daily, weekly, or monthly intervals

- Metrics don't sum in intuitive ways—Created + Closed ≠ Accumulated because they measure different dimensions

- Synchronization lag may introduce short delays—allow time for ALM data to sync before making critical decisions

By mastering these concepts, you can accurately interpret defect reports, communicate quality status to stakeholders, and make informed decisions about release readiness.

## Role-Based Workflows

[### QA Manager Workflow
See how QA Managers use defect metrics (Accumulated, Created, Closed) to assess quality trends, track resolution velocity, and communicate release readiness to stakeholders with data-driven confidence.](/docs/workflows/qa-manager)

## See Also

- [Analyzing Defects & Issues](./analyzing-defects.mdx) - Practical guide to using the Defect Activity Report for defect analysis

- [Defect Trend Analysis](./defect-trend-analysis.mdx) - Tutorial on identifying patterns and predicting defect resolution timelines

- [Linking Test Failures to Defects](/docs/test-failures/archive/linking-failures-to-defects) - How defects are created from failed test executions

- [Understanding Test Execution Metrics](../getting-started/test-execution-metrics.mdx) - Related quality metrics for test results

[Defect Trend AnalysisTask-focused guide for identifying patterns in defect creation and resolution trends, assessing release health, and tracking long-term quality improvements in Katalon TestOps.](/docs/defects/track-defect-trends)[Release Readiness: Overview and Getting StartedMake objective, data-driven release decisions using Release Health Dashboard with quality gates, RAG indicators, and go/no-go decision frameworks for confident software releases.](/docs/release-readiness/release-readiness-overview)