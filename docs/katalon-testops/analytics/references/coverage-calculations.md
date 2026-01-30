Coverage & Traceability
# Understanding Coverage Calculations

Conceptual explanation of how Katalon TestOps calculates test coverage, execution, pass rate, and configuration coverage metrics, including formulas, eligible data definitions, and status determination logic.

# Understanding Coverage Calculations

Reading time: 12 minutes

## Introduction

Coverage metrics are the foundation of quality assessment in Katalon TestOps. Understanding how TestOps calculates coverage—and what data counts—is essential for accurate interpretation of reports, dashboards, and quality gates. This document explains the mathematical formulas, data eligibility rules, and status determination logic that power coverage calculations across requirement coverage, configuration coverage, and traceability reports.

Whether you're tracking requirement test coverage, monitoring configuration coverage across platforms, or analyzing execution completeness, the principles explained here apply consistently throughout TestOps Reports & Analytics.

What this document covers:

- Coverage formulas and mathematical definitions

- Eligible data criteria (what counts and what doesn't)

- Coverage status determination logic

- Time boundaries and analysis scope impact

- Configuration grouping methods

- Common misconceptions and edge cases

📖 Related Documentation:

- [Tracking Requirement Coverage](/docs/coverage/tracking-requirement-coverage) — Practical guide with step-by-step examples

- [Configuration Coverage Analysis](/docs/coverage/configuration-coverage-analysis) — Platform and browser coverage tracking

- [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types) — How scope affects coverage calculations

## Coverage Formula Fundamentals

TestOps uses three primary coverage metrics to assess requirement test coverage. Each metric measures a different dimension of testing completeness.

### Test Coverage Percentage

Definition: Measures the percentage of requirements that have all associated test cases published (available for execution).

Formula:

Test Coverage % = (Requirements with all test cases published / Total Requirements) × 100

What it measures: Test case authoring completeness. High Test Coverage % indicates that requirements have been translated into executable test cases.

Interpretation:

- 100%: All requirements have published test cases

- 75%: Three-quarters of requirements have test cases; one-quarter lack testing

- 0%: No requirements have published test cases

Key concept: A requirement counts toward the numerator ONLY if all linked test cases are published. If a requirement has 5 test cases and only 4 are published, it does NOT count as covered.

### Execution Percentage

Definition: Measures the percentage of requirements that have all associated test cases executed within the analysis scope.

Formula:

Execution % = (Requirements with all test cases executed / Total Requirements) × 100

What it measures: Test execution completeness. High Execution % indicates that available test cases are being actively run.

Interpretation:

- 100%: All requirements have been fully tested (all test cases executed)

- 50%: Half of requirements have complete execution; half are untested or partially executed

- 0%: No requirements have been fully executed

Key concept: A requirement counts toward the numerator ONLY if all linked test cases have been executed at least once within the analysis scope. Partial execution (some test cases run, others not) does NOT count.

### Pass Percentage

Definition: Measures the percentage of requirements that have all associated test cases passing (latest execution result = PASSED).

Formula:

Pass % = (Requirements with all passed test cases / Total Requirements) × 100

What it measures: Quality and stability of tested requirements. High Pass % indicates requirements are meeting acceptance criteria.

Interpretation:

- 100%: All requirements are fully validated (all test cases passing)

- 80%: Most requirements are stable; 20% have failures or issues

- 0%: No requirements have all test cases passing

Key concept: A requirement counts toward the numerator ONLY if all linked test cases have their latest execution result = PASSED within the analysis scope. One failing test case means the entire requirement is NOT counted as passed.

## Configuration Coverage Percentage

Configuration Coverage measures test execution across different platform and browser combinations. Unlike requirement coverage (which focuses on what to test), configuration coverage focuses on where tests are executed.

Definition: Measures the percentage of unique test cases executed within a specific configuration grouping (OS, Browser, or OS & Browser combination).

Formula:

Configuration Coverage % = (Executed unique test cases / Total unique test cases) × 100

What it measures: Platform/browser coverage breadth. High Configuration Coverage % indicates comprehensive testing across target environments.

Interpretation:

- 100%: All test cases have been executed on this configuration

- 60%: Six out of ten unique test cases have been executed on this configuration

- 0%: No test cases have been executed on this configuration

Grouping Methods (user-selectable):

- By OS Name: Groups by operating system (Windows, macOS, Linux) regardless of version

- By Browser Name: Groups by browser (Chrome, Firefox, Safari, Edge) regardless of version

- By OS & Browser: Groups by full configuration (OS Name + OS Version + Browser Name + Browser Version)

📖 Learn More: For practical configuration coverage examples and grouping strategy guidance, see [Configuration Coverage Analysis](/docs/coverage/configuration-coverage-analysis).

## Eligible Data Definitions

Coverage calculations operate on eligible data—entities that meet specific criteria based on your analysis scope and integration status. Understanding eligibility rules is critical for accurate metric interpretation.

### Eligible Requirements

Definition: Requirements that count toward coverage calculations.

Criteria:

- Successfully loaded from an integrated ALM service (Jira, Azure DevOps)

- Stored in TestOps database

- Linked to the selected Sprint or Release (for release-based scope)

What is NOT eligible:

- Requirements not synced from ALM (deleted in Jira but cached in TestOps)

- Requirements without Sprint/Release linkage (when using release-based scope)

- Requirements marked as "archived" or "deleted" in ALM

Example: You have 100 requirements in Jira linked to Sprint 5. After integration, TestOps stores all 100. When you select Sprint 5 scope, all 100 are eligible. If you select Sprint 6 scope (with 80 requirements), only those 80 are eligible—even though 100 exist in TestOps.

### Eligible Test Cases

Definition: Test cases that count toward coverage calculations.

Criteria:

- Successfully linked to eligible requirements (via TestOps or ALM linkage)

- Published status (for Test Coverage % calculations)

What is NOT eligible:

- Test cases not linked to any requirement

- Test cases linked to non-eligible requirements

- Test cases in "draft" or "archived" status (for Test Coverage %)

Example: Requirement R1 has 5 test cases linked. 4 are published, 1 is in draft. For Test Coverage %, R1 does NOT count as covered because not all test cases are published.

### Eligible Test Execution Results

Definition: Test execution results that count toward Execution % and Pass % calculations.

Criteria:

- Created by executing eligible test cases

- Executed within the selected analysis scope time boundaries

What is NOT eligible:

- Executions outside the selected time range (for time-based scope)

- Executions not linked to the selected Sprint/Release (for release-based scope)

- Executions of test cases linked to non-eligible requirements

Example: Using "Last 30 Days" scope, TestOps considers only execution results from the past 30 days. An execution from 35 days ago is NOT eligible, even if the test case is currently linked to an eligible requirement.

### Eligible Defects

Definition: Defects that appear in coverage reports and traceability matrices.

Criteria:

- Successfully linked to eligible test execution results

- Created within the analysis scope time boundaries

What is NOT eligible:

- Defects not linked to any test execution

- Defects created outside the analysis scope

- Defects linked to non-eligible executions

Note: Defects do not directly affect coverage percentages but appear in data tables and traceability reports for context.

## Coverage Status Determination Logic

TestOps assigns one of three coverage statuses to each requirement based on the state of linked test cases, executions, and results. This three-level system provides clear quality indicators.

### Level 1: Not Covered

Definition: No linked or published test cases exist for this requirement.

Criteria:

- Test Cases Status: Not published (may be in draft, or no test cases exist)

- Test Case is Executed: Not applicable (can't execute unpublished tests)

- Test Case Result Status: Not applicable

Visual Indicator: Typically displayed with red/warning color in reports

What it means: This requirement has NOT been translated into executable test cases. It represents a testing gap—no automated or manual tests exist to validate this requirement.

Action needed: Create and publish test cases for this requirement, or verify that the requirement still needs testing (it may be out of scope or deprecated).

### Level 2: Partially Covered

Definition: Some test cases are published, some are executed, and/or some have passed—but not all test cases meet all criteria.

Criteria:

- Test Cases Status: Some published (but not all)

- Test Case is Executed: Some executed (but not all)

- Test Case Result Status: Some passed (but not all)

Visual Indicator: Typically displayed with yellow/caution color in reports

What it means: Testing is in progress but incomplete. This requirement has test cases, but:

- Not all test cases are published yet, OR

- Not all published test cases have been executed, OR

- Not all executed test cases are passing

Action needed: Investigate why coverage is partial:

- Are remaining test cases still being developed?

- Are some test cases skipped due to environment issues?

- Are some test cases consistently failing?

### Level 3: Fully Covered

Definition: All linked test cases are published, all have been executed, and all latest results are PASSED.

Criteria:

- Test Cases Status: All published

- Test Case is Executed: All executed

- Test Case Result Status: All passed

Visual Indicator: Typically displayed with green/success color in reports

What it means: This requirement is fully validated. All test cases have been authored, executed, and are currently passing. The requirement meets its acceptance criteria based on available test evidence.

Note: "Fully Covered" is a point-in-time assessment. If a test case fails in the next execution, the requirement status changes to "Partially Covered."

📖 Real-World Examples: For practical scenarios showing how these statuses appear in reports, see [Tracking Requirement Coverage](/docs/coverage/tracking-requirement-coverage).

## Time Boundaries and Analysis Scope Impact

Analysis scope profoundly affects coverage calculations by defining which executions are eligible. Different scope types apply different time boundary rules.

### Sprint/Release Scope Behavior

How it works: TestOps retrieves all requirements linked to the selected Sprint or Release, then calculates coverage based on test executions associated with those requirements.

Time boundaries:

- Requirements: Must be linked to the selected Sprint/Release

- Test Executions: Must be linked to test cases associated with eligible requirements

- Defects: Must be linked to eligible test executions

Example scenario:

Sprint 3 contains Requirement R1, R2, R3 (100 total requirements)
- R1 has 5 test cases, all executed in Sprint 3, all passed
- R2 has 3 test cases, 2 executed in Sprint 3, 1 not executed
- R3 has 4 test cases, all executed in Sprint 2 (previous sprint), all passed

Coverage Status:
- R1: Fully Covered (all executed and passed in Sprint 3)
- R2: Partially Covered (not all executed)
- R3: Fully Covered (all executed, even though executions were in Sprint 2)

Why R3 counts as Fully Covered: TestOps looks at the LATEST execution results
for test cases linked to Sprint 3 requirements. The execution's sprint linkage
doesn't matter—what matters is that the test cases are linked to R3, and R3
is linked to Sprint 3.

Key insight: Sprint/Release scope filters requirements, not executions. Executions from any time period count if they're the latest results for eligible test cases.

### Current Scope Behavior

How it works: TestOps retrieves all active requirements and test cases, then calculates coverage based on their current state without time filtering.

Time boundaries: None—this is a snapshot of the present moment.

What counts:

- Requirements: All active requirements (not archived/deleted)

- Test Cases: All published test cases

- Test Executions: Latest execution result for each test case, regardless of when it occurred

Example scenario:

Current scope analysis:
- 200 total active requirements
- 180 have published test cases (Test Coverage % = 90%)
- 150 have all test cases executed (Execution % = 75%)
- 120 have all test cases passing (Pass % = 60%)

These calculations use:
- Test cases published TODAY
- Latest execution results (may be from last week, last month, or last year)

Key insight: Current scope is useful for planning and status checking, not for release-specific quality assessment. It answers "What is our current test coverage?" rather than "Did we adequately test Release 2.5?"

📖 Learn More: For detailed guidance on choosing the right scope type for your analysis needs, see [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types).

## Configuration Grouping Logic

Configuration Coverage reports allow three different grouping methods. Your choice affects how coverage is calculated and displayed.

### Grouping by OS Name

How it works: All OS versions are grouped together under the OS name (e.g., all Windows versions = "Windows").

Coverage calculation:

For "Windows":
- Total unique test cases: 100
- Executed on Windows 10: 80 test cases
- Executed on Windows 11: 70 test cases
- Total unique executed (union): 85 test cases (some overlap)
- Coverage % = 85 / 100 = 85%

Use case: High-level view of OS coverage without version-level detail. Best for answering "Are we testing on Windows, macOS, and Linux?"

Visual representation: Single bar per OS showing aggregate coverage across all versions.

### Grouping by Browser Name

How it works: All browser versions are grouped together under the browser name (e.g., all Chrome versions = "Chrome").

Coverage calculation:

For "Chrome":
- Total unique test cases: 100
- Executed on Chrome 120: 75 test cases
- Executed on Chrome 121: 80 test cases
- Total unique executed (union): 90 test cases
- Coverage % = 90 / 100 = 90%

Use case: High-level view of browser coverage without version-level detail. Best for answering "Are we testing on Chrome, Firefox, Safari, and Edge?"

Visual representation: Single bar per browser showing aggregate coverage across all versions.

### Grouping by OS & Browser (Full Configuration)

How it works: Each unique combination of OS Name + OS Version + Browser Name + Browser Version is treated as a separate configuration.

Coverage calculation:

Configurations:
1. Windows 10 + Chrome 120: 50 executed / 100 total = 50%
2. Windows 10 + Chrome 121: 55 executed / 100 total = 55%
3. Windows 11 + Chrome 120: 60 executed / 100 total = 60%
4. macOS 14 + Safari 17: 45 executed / 100 total = 45%

Use case: Detailed view of exact platform/browser combinations. Best for identifying version-specific coverage gaps and compliance requirements (e.g., "We must test on Windows 10 + Chrome 120 specifically").

Visual representation: Multiple bars showing coverage for each unique configuration combination.

Performance note: This grouping can generate many configurations. Reports typically show the top 15 configurations by coverage percentage.

## Common Misconceptions and Edge Cases

### Misconception 1: "Partially Covered means 50% coverage"

Reality: "Partially Covered" is a status, not a percentage. A requirement with 9 out of 10 test cases passing is "Partially Covered," just like a requirement with 1 out of 10 passing. The status indicates incompleteness, not degree of completion.

Why it matters: Use coverage percentages (Test Coverage %, Execution %, Pass %) for quantitative analysis. Use coverage status (Not Covered, Partially Covered, Fully Covered) for qualitative assessment and filtering.

### Misconception 2: "Test Coverage % measures test quality"

Reality: Test Coverage % measures test authoring completeness, not quality. A requirement can have 100% Test Coverage (all test cases published) but 0% Pass % (all tests failing). These are independent metrics.

Why it matters: Monitor all three metrics together:

- Test Coverage %: Are we writing tests?

- Execution %: Are we running tests?

- Pass %: Are tests passing?

### Misconception 3: "Executions from any time count toward coverage"

Reality: It depends on your analysis scope:

- Time-Based Scope: Only executions within the time range count

- Release/Sprint Scope: Latest executions count (regardless of when they occurred)

- Current Scope: Latest executions count (regardless of when they occurred)

Why it matters: If using time-based scope, a requirement may show "Not Covered" even if it was tested last month—because those executions fall outside your selected time range.

### Edge Case 1: Requirement linked to multiple sprints

Scenario: Requirement R1 is linked to both Sprint 5 and Sprint 6.

Behavior: When analyzing Sprint 5, R1 is eligible. When analyzing Sprint 6, R1 is also eligible. The same requirement can appear in multiple sprint-based analyses.

Implication: Summing coverage across sprints may double-count requirements. Use release-level or current scope for unique requirement counts.

### Edge Case 2: Test case linked to multiple requirements

Scenario: Test Case TC1 validates both Requirement R1 and R2.

Behavior: TC1's execution counts toward coverage for both R1 and R2. If TC1 fails, both R1 and R2 are affected.

Implication: Efficient reuse of test cases can improve execution coverage, but creates dependency risk (one failing test affects multiple requirements).

### Edge Case 3: Requirement with no test cases vs. requirement with draft test cases

Scenario:

- R1 has no test cases at all

- R2 has 3 test cases, all in draft status

Behavior: Both R1 and R2 have coverage status = "Not Covered" because neither has published test cases.

Implication: Test Coverage % treats "no tests" and "only draft tests" identically. Review the data table to distinguish between these scenarios.

### Edge Case 4: Configuration with missing OS/Browser metadata

Scenario: Test execution occurred, but OS or Browser metadata is null, empty, or "Unknown."

Behavior: TestOps displays a placeholder icon and blank name (if null/whitespace) or "Unknown" (if value = "Unknown").

Implication: Missing metadata affects configuration coverage accuracy. Ensure test execution environments report OS and browser information correctly.

## Formulas Summary Reference

Use this quick reference table for coverage formula lookups:

MetricFormulaWhat It MeasuresTest Coverage %(Requirements with all TC published / Total Requirements) × 100Test authoring completenessExecution %(Requirements with all TC executed / Total Requirements) × 100Test execution completenessPass %(Requirements with all TC passed / Total Requirements) × 100Quality and stabilityConfiguration Coverage %(Executed unique TC / Total unique TC) × 100Platform/browser coverage breadth

Key terminology:

- TC: Test Cases

- Requirements: Eligible requirements based on analysis scope

- Executed: At least one execution exists within analysis scope

- Passed: Latest execution result = PASSED within analysis scope

## Next Steps

You now understand how TestOps calculates coverage metrics, determines eligibility, and assigns coverage status. To apply this knowledge:

Apply Coverage Calculations:

- [Tracking Requirement Coverage](/docs/coverage/tracking-requirement-coverage) — See these formulas in action with real examples

- [Configuration Coverage Analysis](/docs/coverage/configuration-coverage-analysis) — Apply configuration grouping logic

Understand Analysis Context:

- [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types) — Learn how scope affects eligible data

- [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope) — Hands-on filtering tutorial

Dive Deeper:

- [Requirement Traceability Matrix](/docs/coverage/requirement-traceability-matrix) — See coverage in full traceability context

- [Custom Coverage Dashboards](/docs/dashboards/custom-dashboards) — Build dashboards using coverage widgets

### How do other test management tools calculate coverage?

### Why doesn't my coverage percentage reach 100%?

### How do coverage calculations handle test case versioning?

### Can I customize coverage formulas or add custom metrics?

## Role-Based Workflows

[### QA Manager Workflow
See how QA Managers use coverage calculations to set accurate quality gates, interpret release readiness metrics, and make data-driven go/no-go decisions based on Test Coverage %, Execution %, and Pass %.](/docs/workflows/qa-manager)[How to Analyze Configuration CoverageLearn how to track and analyze test execution across different operating systems, browsers, and platform configurations using the Configuration Coverage report in Katalon TestOps.](/docs/coverage/analyze-configuration-coverage)[Coverage Report ReferenceComplete reference for coverage metrics, status definitions, filters, and formulas across all coverage reports in Katalon TestOps.](/docs/coverage/reference/coverage-reports)

Complete reference for coverage metrics, status definitions, filters, and formulas across all coverage reports in Katalon TestOps.

# [Coverage Report Reference](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#coverage-report-reference)

Quick lookup reference for all coverage metrics, status definitions, filters, and formulas used across Requirement Coverage, Configuration Coverage, and Requirement Traceability reports.

## [Quick Reference: Coverage Metrics](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#quick-reference-coverage-metrics)

### [Requirement Coverage Metrics](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#requirement-coverage-metrics)

|Metric|Formula|Description|
|---|---|---|
|**Test Coverage %**|`(Count of requirements with all test cases published / Total requirements) × 100`|Percentage of requirements with all linked test cases published|
|**Execution %**|`(Count of requirements with all test cases executed / Total requirements) × 100`|Percentage of requirements with all linked test cases executed|
|**Pass %**|`(Count of requirements with all test cases passed / Total requirements) × 100`|Percentage of requirements with all linked test cases passed|

### [Configuration Coverage Metrics](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#configuration-coverage-metrics)

|Metric|Formula|Description|
|---|---|---|
|**Configuration Coverage %**|`(Count of executed unique test cases / Total unique test cases) × 100`|Percentage of unique test cases executed in specific configuration|
|**Pass Rate %**|`(Count of passed unique executed test cases / Total unique executed test cases) × 100`|Percentage of executed test cases that passed in specific configuration|

## [Coverage Status Definitions](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#coverage-status-definitions)

Applies to Requirement Coverage and Requirement Traceability reports.

|Status|Visual Indicator|Test Cases Status|Execution Status|Result Status|Criteria|
|---|---|---|---|---|---|
|**Not Covered**|🔴 Red|Not published|N/A|N/A|No linked or published test cases|
|**Partially Covered**|🟡 Yellow|Some published|Some executed|Some passed|At least one test case published, executed, or passed (but not all)|
|**Fully Covered**|🟢 Green|All published|All executed|All passed|All linked test cases are published, executed, and latest result is Passed|

**Status Level Hierarchy:**

- Level 1: Not Covered (lowest)
- Level 2: Partially Covered
- Level 3: Fully Covered (highest)

Default sorting in data tables uses this hierarchy (ascending = Not Covered first).

## [Eligible Data Criteria](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#eligible-data-criteria)

### [Requirement Coverage Report](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#requirement-coverage-report)

|Entity|Eligibility Criteria|
|---|---|
|**Requirements**|1. Successfully loaded from integrated ALM service (Jira, Azure DevOps)  <br>2. Stored in TestOps  <br>3. Linked to selected Sprint or Release|
|**Test Cases**|Successfully linked to eligible requirements|
|**Test Executions**|Created by executing eligible test cases within query time range|
|**Defects**|Successfully linked to eligible test executions within query time range|

### [Configuration Coverage Report](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#configuration-coverage-report)

|Entity|Eligibility Criteria|
|---|---|
|**Test Executions**|Executed within querying time period|
|**Configurations**|Extracted from eligible test executions (OS name, OS version, browser name, browser version)|
|**Test Cases**|Extracted from eligible test executions|

### [Requirement Traceability Report](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#requirement-traceability-report)

|Entity|Eligibility Criteria|
|---|---|
|**Requirements**|1. Successfully loaded from integrated ALM service  <br>2. Active (not archived)  <br>3. Within selected analysis scope|
|**Test Cases**|1. Successfully linked to eligible requirements  <br>2. Non-archived  <br>3. Within selected scope|
|**Test Executions**|1. Created by executing eligible test cases  <br>2. Within selected scope (or latest if using Current scope)|
|**Defects**|Linked to eligible test executions|

## [Filter Options by Report](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#filter-options-by-report)

### [Requirement Coverage Report Filters](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#requirement-coverage-report-filters)

|Filter|Options|Default Behavior|Notes|
|---|---|---|---|
|**Time Range**|- Last 7/30/90 days  <br>- Custom date range  <br>- Sprint (single selection)  <br>- Release|Priority: Active Sprint → Most Recent Closed Sprint → Upcoming Release → Most Recent Released|See [Default Filter Logic](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#default-filter-logic-requirement-coverage)|
|**Interval**|- Daily  <br>- Weekly  <br>- Monthly|Depends on time range|Determines X-axis grouping in visualizations|

### [Configuration Coverage Report Filters](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#configuration-coverage-report-filters)

|Filter|Options|Default|Notes|
|---|---|---|---|
|**Time Range**|- Last 7/30/90 days  <br>- Custom date range  <br>- Sprint (single selection)  <br>- Release|Last 30 days|Standard time range filter|
|**Execution Type**|- All  <br>- Test Suite  <br>- Test Run List  <br>- Manual Test Execution|All|Filters by execution source|
|**Group By**|- OS Name  <br>- Browser Name  <br>- OS & Browser|OS Name|Determines aggregation strategy|

### [Requirement Traceability Report Filters](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#requirement-traceability-report-filters)

|Filter|Options|Default|Notes|
|---|---|---|---|
|**Analysis Scope**|- Release/Sprint (time-bounded)  <br>- Current (point-in-time snapshot)|Current|Determines which entities and statuses to include|
|**Coverage Status**|- Not Covered  <br>- Partially Covered  <br>- Fully Covered  <br>- All|All|Filters requirements by coverage status|
|**Release**|Available releases|Current release|Only when using Release scope|

## [Default Filter Logic: Requirement Coverage](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#default-filter-logic-requirement-coverage)

Priority order when report loads:

|Priority|Condition|Selection Logic|Example|
|---|---|---|---|
|1|Active Sprint available|Select first active sprint (sorted by Sprint ID ascending)|Sprint S2 (ID: 2) over Sprint S5 (ID: 5)|
|2|No active sprint; closed sprint available|Select most recently closed sprint (sorted by End Date descending)|Sprint ended Feb 15 over Sprint ended Jan 20|
|3|No sprint; unreleased release available|Select first unreleased release (sorted by Release Date descending)|Release 2.1 (Mar 30) over Release 2.0 (Mar 15)|
|4|Only released releases available|Select most recently released (sorted by Release Date descending)|Release 1.5 (Feb 1) over Release 1.0 (Jan 1)|

## [Report Comparison Matrix](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#report-comparison-matrix)

### [When to Use Each Report](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#when-to-use-each-report)

|Report|Primary Purpose|Best For|Key Metric|Scope Options|
|---|---|---|---|---|
|**Requirement Coverage**|Track test coverage over time for specific iteration|- Sprint/release planning  <br>- Tracking coverage trends  <br>- Identifying untested requirements|Test Coverage %  <br>Execution %  <br>Pass %|Time-bounded (Sprint/Release)|
|**Configuration Coverage**|Analyze test execution across platforms and browsers|- Cross-platform testing  <br>- Browser compatibility  <br>- Device coverage analysis|Configuration Coverage %  <br>Pass Rate %|Time-bounded (Date range/Sprint/Release)|
|**Requirement Traceability**|Build complete traceability chain from requirements to defects|- Compliance reporting  <br>- Impact analysis  <br>- Gap identification  <br>- Point-in-time snapshots|Coverage Status  <br>Relationship mapping|Time-bounded OR Current (snapshot)|

### [Feature Comparison](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#feature-comparison)

|Feature|Requirement Coverage|Configuration Coverage|Requirement Traceability|
|---|---|---|---|
|**Visualizations**|Bar chart (coverage over time)  <br>Pie chart (by status)|Bar chart (top configurations)  <br>Statistics cards|Hierarchical table|
|**Data Table**|Requirements with linked test cases|Configurations with execution counts|Requirements → Test Cases → Executions → Defects|
|**Grouping**|By time interval|By OS / Browser / Configuration|By requirement hierarchy|
|**Export**|None|None|CSV|
|**Primary Audience**|QA Managers, Product Owners|Automation Engineers, QA Leads|Compliance Officers, Auditors, QA Managers|
|**Refresh Frequency**|Real-time|Real-time|Real-time|

## [Grouping Strategies (Configuration Coverage)](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#grouping-strategies-configuration-coverage)

### [OS Name Grouping](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#os-name-grouping)

**Description:** Aggregates data by unique operating system name, combining all versions.

**Use Case:** High-level platform coverage analysis.

**Example:**

- Windows (all versions) → 85% coverage
- macOS (all versions) → 72% coverage
- Linux (all distributions) → 45% coverage

### [Browser Name Grouping](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#browser-name-grouping)

**Description:** Aggregates data by unique browser name, combining all versions.

**Use Case:** Browser compatibility assessment.

**Example:**

- Chrome (all versions) → 92% coverage
- Firefox (all versions) → 78% coverage
- Safari (all versions) → 65% coverage

### [OS & Browser Grouping](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#os--browser-grouping)

**Description:** Aggregates data by unique combination of OS name, OS version, browser name, and browser version.

**Use Case:** Detailed configuration-specific analysis.

**Example:**

- Windows 11 + Chrome 120 → 95% coverage
- Windows 11 + Firefox 121 → 88% coverage
- macOS Ventura + Safari 17 → 82% coverage

**Configuration Limit:** Top 15 configurations by coverage percentage (descending) displayed in main chart.

## [Analysis Scope Types Quick Reference](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#analysis-scope-types-quick-reference)

### [Time-Bounded Scopes (Sprint/Release)](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#time-bounded-scopes-sprintrelease)

**Characteristics:**

- Filters entities linked to specific iteration
- Execution results must occur within iteration timeframe
- Historical analysis of specific period

**Available in:**

- Requirement Coverage (Sprint/Release selection required)
- Configuration Coverage (optional Sprint/Release filter)
- Requirement Traceability (Release/Sprint scope option)

**Typical Use:** Sprint retrospectives, release reports, trend analysis.

### [Current Scope (Point-in-Time Snapshot)](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#current-scope-point-in-time-snapshot)

**Characteristics:**

- Shows present state without time boundaries
- Uses latest/most recent status for all entities
- Snapshot reporting of current project status

**Available in:**

- Requirement Traceability only

**Typical Use:** Compliance audits, current coverage assessment, gap identification.

**Data Selection:**

- **Requirements:** All active (non-archived) requirements
- **Test Cases:** All non-archived test cases with latest status
- **Test Executions:** Latest execution result for each test case
- **Defects:** All non-closed defects with current status

## [Formula Reference Card](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#formula-reference-card)

### [Coverage Formulas (One-Line)](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#coverage-formulas-one-line)

```
Test Coverage % = (Requirements with all test cases published / Total requirements) × 100Execution % = (Requirements with all test cases executed / Total requirements) × 100Pass % = (Requirements with all test cases passed / Total requirements) × 100Configuration Coverage % = (Executed unique test cases / Total unique test cases) × 100Pass Rate % = (Passed unique executed test cases / Total unique executed test cases) × 100
```

### [Variables](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#variables)

- **Total requirements (R):** Count of eligible requirements within scope
- **Unique test cases:** Distinct test cases (by test case ID)
- **Executed test cases:** Test cases with at least one execution in scope
- **Passed test cases:** Test cases where latest execution result is PASSED
- **Published test cases:** Test cases with publishing status = Published

## [Data Table Columns Reference](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#data-table-columns-reference)

### [Requirement Coverage Data Table](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#requirement-coverage-data-table)

|Column|Description|Sortable|Filterable|
|---|---|---|---|
|Latest Executed Time|Most recent execution timestamp|✅ Yes|❌ No|
|Requirement ID|Unique identifier from ALM (clickable link)|✅ Yes|❌ No|
|Requirement Name|Requirement title|❌ No|❌ No|
|Linked Test Cases|Count of all linked test cases|❌ No|❌ No|
|Published Test Cases|Count of published test cases|❌ No|❌ No|
|Executed Test Cases|Count of executed test cases|❌ No|❌ No|
|Passed Test Cases|Count of passed test cases (latest result)|❌ No|❌ No|
|Failed Test Cases|Count of failed test cases (latest result)|❌ No|❌ No|
|Total Executions|Total count of test execution results|✅ Yes|❌ No|
|Linked Defects|Count of linked defects|❌ No|❌ No|
|Coverage Status|Not Covered / Partially Covered / Fully Covered|✅ Yes (by level)|✅ Yes|

**Default Sort:** Coverage Status (Level), Ascending (Not Covered first)

### [Configuration Coverage Data Table](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#configuration-coverage-data-table)

|Column|Description|Sortable|Filterable|
|---|---|---|---|
|Executed Date|Test execution date|❌ No|✅ Yes (date range)|
|OS|Operating system icon and name|❌ No|✅ Yes (multi-select)|
|Browser|Browser icon and name|❌ No|✅ Yes (multi-select)|
|Executed Test Cases|Count of executed test cases|✅ Yes|❌ No|
|Passed Test Cases|Count of passed test cases (status = PASSED)|❌ No|❌ No|
|Failed Test Cases|Count of failed test cases (status = FAILED)|❌ No|❌ No|
|Pass Rate %|Percentage of passed tests|❌ No|❌ No|
|Coverage Rate %|Percentage of executed tests|✅ Yes|❌ No|

**Default Sort:** Coverage Rate %, Descending (highest coverage first)

### [Requirement Traceability Data Table](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#requirement-traceability-data-table)

|Column|Description|Expandable/Collapsible|
|---|---|---|
|Requirement|ID, name, and coverage status|✅ Yes (shows linked test cases)|
|Test Case|ID, name, and publishing status|✅ Yes (shows executions)|
|Execution|Latest execution result and status|✅ Yes (shows linked defects)|
|Defect|ID, summary, priority, and status|❌ No (leaf node)|

**Hierarchy:** Requirement → Test Case → Execution → Defect

## [Export Formats and Options](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#export-formats-and-options)

### [Requirement Traceability Export](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#requirement-traceability-export)

**Format:** CSV

**Includes:**

- All visible columns from filtered data table
- Hierarchical relationships (flattened)
- Metadata: Export timestamp, analysis scope, applied filters
- Requirement details (ID, name, coverage status)
- Test case details (ID, name, publishing status)
- Execution details (ID, status, executed date)
- Defect details (ID, summary, priority, status)

**How to Export:**

1. Apply desired filters
2. Click **Export** button
3. CSV file downloads automatically

**File Naming:** `Requirement_Traceability_[ProjectName]_[Timestamp].csv`

### [Requirement Coverage Export](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#requirement-coverage-export)

**Status:** Not available in current version

**Workaround:** Use browser print/save as PDF or take screenshots

### [Configuration Coverage Export](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#configuration-coverage-export)

**Status:** Not available in current version

**Workaround:** Use browser print/save as PDF or copy data table to spreadsheet

## [Integration Points](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#integration-points)

### [ALM Integrations (Requirements & Defects)](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#alm-integrations-requirements--defects)

**Jira:**

- Requirements synced from Jira issues (Epic, Story, Task, Bug)
- Defects synced from Jira issues
- Click Requirement ID to open in Jira
- Real-time status updates

**Azure DevOps:**

- Requirements synced from Azure DevOps work items
- Defects synced from Azure DevOps bugs
- Click Requirement ID to open in Azure DevOps
- Real-time status updates

**Configuration:**

- Set up in **Project Settings → Integrations**
- Ensure ALM connection is active
- Verify sync status before generating reports

### [API Endpoints](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#api-endpoints)

For programmatic access to coverage data, see [Reporting API Reference](https://ktl-docs-ra.vercel.app/docs/coverage/advanced/reporting-api-reference).

**Available Endpoints:**

- `GET /api/v1/projects/{projectId}/requirement-coverage` - Requirement Coverage data
- `GET /api/v1/projects/{projectId}/configuration-coverage` - Configuration Coverage data
- `GET /api/v1/projects/{projectId}/requirement-traceability` - Traceability data

## [Undetectable Configurations](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#undetectable-configurations)

When OS or browser information cannot be detected from test executions:

|Value in Data|Display Behavior|
|---|---|
|`null` (empty)|Placeholder icon + blank name|
|`"Unknown"`|Placeholder icon + "Unknown" label|
|All whitespace|Placeholder icon + blank name|

**Common Causes:**

- API-based test execution without platform metadata
- Manual test execution without configuration specified
- Legacy test data before configuration tracking
- Execution agents without proper environment detection

**Impact:**

- Counted in total unique test cases
- Included in "Unknown" or null configuration group
- May affect coverage percentage accuracy

## [Common Issues and Solutions](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#common-issues-and-solutions)

### Coverage shows 0% despite having tests

### Configurations showing as 'Unknown' or null

### Requirements not appearing in reports

### Traceability chain incomplete (missing executions or defects)

### Export failing or incomplete

### Data discrepancy between reports

## [See Also](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#see-also)

- [Analyzing Test Coverage](https://ktl-docs-ra.vercel.app/docs/coverage/reference/analyzing-test-coverage) - Workflow context for coverage analysis
- [Tracking Requirement Coverage](https://ktl-docs-ra.vercel.app/docs/coverage/reference/tracking-requirement-coverage) - Detailed usage of Requirement Coverage report
- [Configuration Coverage Analysis](https://ktl-docs-ra.vercel.app/docs/coverage/reference/configuration-coverage-analysis) - Detailed usage of Configuration Coverage report
- [Building Traceability Matrices](https://ktl-docs-ra.vercel.app/docs/coverage/reference/building-traceability-matrices) - Detailed usage of Requirement Traceability report
- [Understanding Coverage Calculations](https://ktl-docs-ra.vercel.app/docs/coverage/reference/understanding-coverage-calculations) - Deep-dive into coverage formulas and methodology
- [Reporting API Reference](https://ktl-docs-ra.vercel.app/docs/coverage/advanced/reporting-api-reference) - Programmatic access to coverage data

---

## [📍 Where to Go Next](https://ktl-docs-ra.vercel.app/docs/coverage/reference/coverage-reports#-where-to-go-next)

**Common next steps after Coverage & Traceability:**

- [Release Readiness](https://ktl-docs-ra.vercel.app/docs/release-readiness) - Apply your coverage analysis to assess whether releases meet quality gates and are ready to ship
- [Defects & Issues Analysis](https://ktl-docs-ra.vercel.app/docs/defects) - Address coverage gaps by investigating and resolving defects preventing full requirement coverage
- [Test Case Reports](https://ktl-docs-ra.vercel.app/docs/test-case-reports) - Analyze your test case inventory to plan coverage improvements and identify testing gaps

**Need help deciding?** See [Workflow Guide: Role-Based Pathways](https://ktl-docs-ra.vercel.app/docs/workflows/overview)