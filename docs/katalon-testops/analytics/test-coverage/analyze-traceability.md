# Analyze Traceability

Content coming soon.
Coverage & Traceability
# Building Traceability Matrices

Learn how to create comprehensive traceability matrices in Katalon TestOps that map requirements to test cases, executions, and defects for compliance audits, gap analysis, and regulatory documentation (FDA 21 CFR Part 11, ISO 13485).

# Building Traceability Matrices

Time required: 20 minutes
Prerequisites:

- Requirements loaded from ALM integration (Jira or Azure DevOps)

- Test cases linked to requirements

- Test executions completed and recorded

- Defects linked to test results (for complete traceability chain)

- Viewer or higher permissions for Reports module

Related guides:

- [Analyzing Test Coverage](/docs/coverage/analyzing-test-coverage) - Understanding coverage workflow

- [Tracking Requirement Coverage](/docs/coverage/tracking-requirement-coverage) - Requirement coverage context

## Overview

The Requirement Traceability Report provides a complete view of the relationships between requirements, test cases, test executions, and defects—creating an end-to-end traceability chain essential for compliance audits, regulatory documentation, and quality gap analysis.

This guide shows you how to build comprehensive traceability matrices that demonstrate:

- Which requirements are covered by test cases (and which aren't)

- Which test cases have been executed and their results

- Which defects are linked to failed test executions

- The complete audit trail from requirements through defects

Use this report when you need to:

- Prepare for FDA, ISO, or customer compliance audits

- Identify untested or partially tested requirements

- Demonstrate bi-directional traceability for regulatory purposes

- Generate audit-ready documentation (CSV exports)

- Assess testing completeness before release

## Understanding the Traceability Chain

The traceability matrix visualizes a complete relationship chain:

#_r_eh_{margin:1.5rem auto 0;}#_r_eh_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_eh_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_eh_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_eh_ .error-icon{fill:#552222;}#_r_eh_ .error-text{fill:#552222;stroke:#552222;}#_r_eh_ .edge-thickness-normal{stroke-width:1px;}#_r_eh_ .edge-thickness-thick{stroke-width:3.5px;}#_r_eh_ .edge-pattern-solid{stroke-dasharray:0;}#_r_eh_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_eh_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_eh_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_eh_ .marker{fill:#333333;stroke:#333333;}#_r_eh_ .marker.cross{stroke:#333333;}#_r_eh_ svg{font-family:inherit;font-size:16px;}#_r_eh_ p{margin:0;}#_r_eh_ .label{font-family:inherit;color:#333;}#_r_eh_ .cluster-label text{fill:#333;}#_r_eh_ .cluster-label span{color:#333;}#_r_eh_ .cluster-label span p{background-color:transparent;}#_r_eh_ .label text,#_r_eh_ span{fill:#333;color:#333;}#_r_eh_ .node rect,#_r_eh_ .node circle,#_r_eh_ .node ellipse,#_r_eh_ .node polygon,#_r_eh_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_eh_ .rough-node .label text,#_r_eh_ .node .label text,#_r_eh_ .image-shape .label,#_r_eh_ .icon-shape .label{text-anchor:middle;}#_r_eh_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_eh_ .rough-node .label,#_r_eh_ .node .label,#_r_eh_ .image-shape .label,#_r_eh_ .icon-shape .label{text-align:center;}#_r_eh_ .node.clickable{cursor:pointer;}#_r_eh_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_eh_ .arrowheadPath{fill:#333333;}#_r_eh_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_eh_ .flowchart-link{stroke:#333333;fill:none;}#_r_eh_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_eh_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_eh_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_eh_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_eh_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_eh_ .cluster text{fill:#333;}#_r_eh_ .cluster span{color:#333;}#_r_eh_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_eh_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_eh_ rect.text{fill:none;stroke-width:0;}#_r_eh_ .icon-shape,#_r_eh_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_eh_ .icon-shape p,#_r_eh_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_eh_ .icon-shape rect,#_r_eh_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_eh_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_eh_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_eh_ :root{--mermaid-font-family:inherit;}
Requirementsfrom ALM

Test Caseslinked to Reqs

Test Executionsrun results

Defectslinked to failures

Complete traceability:Requirement → Test → Execution → Defect

Each entity links to the next, creating an unbroken audit trail

Key relationships:

- Requirements ↔ Test Cases: Many-to-many (one requirement can have multiple test cases, one test case can validate multiple requirements)

- Test Cases → Test Executions: One-to-many (one test case can be executed multiple times)

- Test Executions → Defects: One-to-many (one failed execution can identify multiple defects)

This complete chain allows you to answer critical compliance questions like:

- "Is Requirement REQ-123 fully tested?" (Requirements → Test Cases)

- "Did all tests for REQ-123 pass?" (Test Cases → Executions)

- "Are there open defects against REQ-123?" (Executions → Defects)

## Step 1: Access the Requirement Traceability Report

### Navigate to the Report

- From the TestOps sidebar, click Reports

- In the Reports list, locate and click Requirement Traceability

- The report loads with the default view showing all requirements

What you'll see:

- Hierarchical table: Requirements listed with expandable rows

- Scope selector: Dropdown to choose analysis scope (Release or Current)

- Filters panel: Options to filter by coverage status, release

- Export button: CSV export for audit documentation

Note: If the report appears empty, verify that requirements have been loaded from your ALM integration (Jira or Azure DevOps) and that test cases have been linked to those requirements.

## Step 2: Select Your Analysis Scope

The traceability report supports two analysis scopes, each serving different audit and analysis needs.

### Understanding Scope Options

Release-Based Scope (recommended for compliance audits):

- Analyzes all test executions associated with a specific release or sprint

- Time-bounded analysis tied to software version

- Ideal for release-specific compliance documentation

- Shows testing performed for a particular software version

Current Scope (recommended for gap analysis):

- Shows the most recent execution result for each test case

- Point-in-time snapshot of current test status

- Ideal for identifying currently untested requirements

- No time boundaries—focuses on latest status

### When to Use Each Scope

Your GoalUse This ScopeRationalePrepare for FDA 21 CFR Part 11 auditRelease-Based (specific release)Compliance requires version-specific documentationIdentify gaps before starting releaseCurrentSee which requirements lack recent testingGenerate ISO 13485 compliance reportRelease-Based (specific release)Regulatory audit tied to software versionDaily gap analysis for ongoing sprintCurrentQuick snapshot of current coverage statusCustomer audit for delivered versionRelease-Based (delivered release)Customer needs traceability for specific version

### Selecting Scope

- Click the Analysis Scope dropdown near the top of the report

- Choose Release-Based for compliance audits or Current for gap analysis

- If Release-Based:

Select the specific Release from the dropdown
The report refreshes to show traceability for that release only

- If Current:

No additional selection needed
Report shows the latest status per test case

Important: For compliance audits (FDA, ISO), always use Release-Based scope with the specific release being audited. This ensures your traceability matrix reflects the exact testing performed for that software version.

For detailed explanations of scope types, see [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types).

## Step 3: Navigate the Hierarchical Traceability View

The report displays requirements in a hierarchical table structure, allowing you to expand and explore the complete traceability chain.

### Understanding the Table Structure

Level 1: Requirements (top-level rows)

- Each row represents a requirement from your ALM system

- Shows requirement ID, name, and coverage status

- Expandable to reveal linked test cases

Level 2: Test Cases (expanded within requirements)

- Shows test cases linked to the parent requirement

- Displays test case status (Published, Draft)

- Displays latest execution status (Passed, Failed, Not Run)

- Expandable to show individual execution details

Level 3: Test Executions (expanded within test cases)

- Shows execution date/time and result

- Links to defects identified during execution

Level 4: Defects (linked to failed executions)

- Shows defect ID, summary, status (Open, Closed)

- Links back to ALM for defect details

### Expanding and Collapsing Rows

To expand a requirement:

- Click the expand icon (▶) next to the requirement name

- The row expands to show all linked test cases

- Test cases show their current status and latest execution result

To expand a test case:

- Click the expand icon next to the test case name (if available)

- View individual execution details and linked defects

To collapse:

- Click the collapse icon (▼) to hide nested rows

Tip: Use the "Expand All" / "Collapse All" buttons (if available) to quickly expand or collapse all requirements for a comprehensive view or focused analysis.

### Reading Status Indicators

The table uses visual indicators to communicate traceability status at a glance:

Requirement Coverage Status:

- Fully Covered (green): All aspects of the requirement have linked test cases

- Partially Covered (yellow/orange): Some test cases exist, but coverage is incomplete

- Not Covered (red): No test cases linked to this requirement

Test Case Status:

- Published: Test case is finalized and ready for execution

- Draft: Test case is under development (may not be executed yet)

Execution Status:

- Passed (green): Latest execution succeeded

- Failed (red): Latest execution failed

- Not Run (gray): Test case has no executions in the selected scope

Defect Status:

- Open (red): Defect is unresolved

- Closed (green): Defect has been fixed and verified

## Step 4: Use Filters to Focus Your Analysis

Filters help you narrow the traceability matrix to specific subsets for targeted analysis or audit preparation.

### Available Filters

Coverage Status Filter:

- Not Covered: Show only requirements with no linked test cases (critical gaps)

- Partially Covered: Show requirements with incomplete test coverage

- Fully Covered: Show requirements with complete test coverage

- All (default): Show all requirements regardless of coverage

Release Filter (when using Release-Based scope):

- Select a specific release to analyze

- Single selection only (one release at a time)

### Common Filtering Scenarios

Scenario 1: Identify untested requirements (gap analysis)

- Set Coverage Status filter to Not Covered

- The report shows only requirements with no linked test cases

- Export this list to prioritize test case creation

Scenario 2: Find partially tested requirements

- Set Coverage Status filter to Partially Covered

- Review each requirement to identify missing test cases

- Expand requirements to see which aspects are tested vs. untested

Scenario 3: Audit-ready documentation for a specific release

- Set Analysis Scope to Release-Based

- Select the Release being audited (e.g., "Release 3.0")

- Leave Coverage Status at All to show complete traceability

- Export to CSV for audit documentation

Scenario 4: Focus on high-priority untested requirements

- Filter Coverage Status to Not Covered

- Sort by requirement priority (if available)

- Focus test case creation on high-priority gaps

### Applying and Clearing Filters

To apply filters:

- Select desired filter options from the dropdowns

- Click Apply (if required) or filters apply automatically

- The table updates to show only matching requirements

To clear filters:

- Click Clear Filters link or button

- All filters reset to default values

- Full traceability matrix is restored

## Step 5: Export Traceability Matrix for Audits

For compliance documentation, regulatory audits, or stakeholder reporting, export the traceability matrix to CSV format.

### Exporting to CSV

- Apply desired scope and filters to focus your export

- Click the Export button (usually in the top-right corner)

- Select CSV format

- The browser downloads a CSV file containing:

All visible requirements (based on filters)
Linked test cases for each requirement
Execution status and results
Linked defects and their status
Timestamps and metadata

### CSV Structure and Contents

The exported CSV includes the following columns:

Column NameDescriptionExample ValueRequirement IDUnique identifier from ALMREQ-123Requirement NameRequirement title/summaryUser login authenticationCoverage StatusFully/Partially/Not CoveredFully CoveredTest Case IDLinked test case identifierTC-456Test Case NameTest case titleVerify valid login credentialsTest Case StatusPublished/DraftPublishedExecution StatusPassed/Failed/Not RunPassedExecution DateDate/time of execution2025-01-31 14:32Defect IDLinked defect identifier (if any)BUG-789Defect StatusOpen/ClosedClosed

Note: The exact column names and order may vary based on your TestOps configuration and customizations.

### Using CSV Exports for Compliance

FDA 21 CFR Part 11 Compliance:

- Export traceability matrix for each software release

- Include in Design History File (DHF) as evidence of testing

- Demonstrate complete traceability from requirements to verification

- Archive exports with release documentation

ISO 13485 Medical Device Audits:

- Generate traceability reports for each software version submitted for certification

- Export with Release-Based scope for version-specific traceability

- Include in Technical File as verification evidence

- Retain exports for regulatory inspection

Customer Audits:

- Export traceability matrix for delivered release

- Include in customer delivery documentation

- Demonstrate test coverage and quality assurance processes

- Use as evidence of requirements validation

Internal Gap Analysis:

- Export "Not Covered" requirements for test planning

- Track progress by re-exporting weekly and comparing

- Identify testing gaps before release

Tip: Add timestamps to export filenames (e.g., traceability_release_3.0_2025-01-31.csv) to maintain audit trail versioning.

## Use Cases: When to Build Traceability Matrices

### FDA 21 CFR Part 11: Software Validation & Traceability

Regulatory requirement: FDA requires complete traceability from software requirements through verification (testing) for medical device software.

How to use this report:

- Set Analysis Scope to Release-Based for the software version being validated

- Select the Release corresponding to the software version

- Export the complete traceability matrix to CSV

- Include the export in your Design History File (DHF) as verification evidence

- Ensure all requirements show "Fully Covered" status

Audit questions this report answers:

- "Which requirements lack test coverage?"

- "Can you demonstrate that all requirements were tested?"

- "What were the test results for Requirement X?"

- "Are there open defects against any requirements?"

### ISO 13485: Medical Device Certification Audit

Regulatory requirement: ISO 13485 requires documented evidence that software requirements have been verified through testing.

How to use this report:

- Use Release-Based scope with the software version submitted for certification

- Filter to Not Covered or Partially Covered to identify gaps before audit

- Address gaps, then reset filter to All for complete traceability

- Export to CSV and include in Technical File

- Prepare to demonstrate bi-directional traceability during audit

Audit questions this report answers:

- "How do you verify that software requirements are met?"

- "Show me the test results for this requirement."

- "Are all requirements fully tested?"

- "What is your process for linking defects to requirements?"

### Customer Audit Preparation

Customer requirement: Demonstrate quality assurance processes and complete test coverage for delivered software.

How to use this report:

- Set Analysis Scope to Release-Based for the delivered release

- Review for any Not Covered or Partially Covered requirements

- Expand rows to show complete traceability chain

- Export to CSV and include in delivery documentation

- Prepare to explain any gaps or open defects

Customer questions this report answers:

- "How thoroughly was the software tested?"

- "Which requirements were tested, and what were the results?"

- "Are there any known issues (open defects)?"

- "Can you demonstrate traceability from requirements to testing?"

### Gap Analysis for Release Readiness

Team need: Identify untested or partially tested requirements before release decision.

How to use this report:

- Use Current scope for latest test status snapshot

- Filter Coverage Status to Not Covered and Partially Covered

- Prioritize test case creation for identified gaps

- Track progress by re-running report weekly

- Switch to Release-Based scope once release testing begins

Questions this report answers:

- "Which requirements have no test cases?"

- "Which requirements are partially tested?"

- "What's our requirement coverage percentage?"

- "Are we ready for release testing?"

## Troubleshooting Common Issues

### Traceability chain is incomplete or broken

### Requirements not appearing in report

### Export failing or incomplete data in CSV

## MVP vs. Future Features

### Current Implementation (Phase 1: MVP)

### Planned Enhancements (Future Phases)

## Next Steps

Now that you can build comprehensive traceability matrices:

- Set up regular audits: Schedule monthly traceability reviews to identify and close coverage gaps

- Integrate into release process: Make traceability review a required step before release approval

- Train your team: Ensure all team members understand how to link requirements, test cases, and defects

- Automate where possible: Configure CI/CD pipelines to automatically link test executions to releases

Continue learning:

- [Analyzing Test Coverage](/docs/coverage/analyzing-test-coverage) - Broader coverage analysis workflows

- [Tracking Requirement Coverage](/docs/coverage/tracking-requirement-coverage) - Monitoring coverage over time

- [Understanding Coverage Calculations](/docs/coverage/understanding-coverage-calculations) - How coverage status is determined

- [Coverage Reporting for Compliance](/docs/coverage/coverage-reporting-for-compliance) - Compliance standards and requirements

- [Coverage Report Reference](/docs/coverage/coverage-report-reference) - Quick reference for all coverage features

## Role-Based Workflows

[### QA Manager Workflow
See how QA Managers use Traceability Matrices for compliance audits, gap analysis, and regulatory documentation—essential for FDA 21 CFR Part 11 and ISO 13485 validation.](/docs/workflows/qa-manager)[### Product Owner Workflow
Learn how Product Owners use traceability reports to validate requirement-to-test mappings and ensure comprehensive coverage before release approval.](/docs/workflows/product-owner)

## See Also

Coverage & Traceability:

- [Analyzing Test Coverage](/docs/coverage/analyzing-test-coverage) - Coverage analysis workflow

- [Tracking Requirement Coverage](/docs/coverage/tracking-requirement-coverage) - Coverage monitoring over time

- [Understanding Coverage Calculations](/docs/coverage/understanding-coverage-calculations) - Coverage status logic

- [Coverage Reporting for Compliance](/docs/coverage/coverage-reporting-for-compliance) - Regulatory standards

- [Coverage Report Reference](/docs/coverage/coverage-report-reference) - Quick reference

Foundation Concepts:

- [Understanding Analysis Scope Types](/docs/getting-started/analysis-scope-types) - Current scope details

- [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope) - Filtering techniques

Related Workflows:

- [Linking Failures to Defects](/docs/dashboards/how-to/linking-failures-to-defects) - Defect linking workflow

- [Analyzing Defects & Issues](/docs/advanced/analyzing-defects-issues) - Defect analysis techniques

[Tracking Requirement CoverageMonitor which requirements are tested by analyzing Test Coverage %, Execution %, and Pass % across sprints and releases in Katalon TestOps.](/docs/coverage/track-requirement-coverage)[How to Analyze Configuration CoverageLearn how to track and analyze test execution across different operating systems, browsers, and platform configurations using the Configuration Coverage report in Katalon TestOps.](/docs/coverage/analyze-configuration-coverage)