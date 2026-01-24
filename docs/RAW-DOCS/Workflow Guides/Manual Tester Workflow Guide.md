Workflow Guides
# Manual Tester Workflow Guide

Practical learning pathway for Manual Testers to master test result navigation, AI-powered failure investigation, defect reporting, and coverage validation in Reports & Analytics.

# Manual Tester Workflow Guide

## Your Role in Reports & Analytics

As a Manual Tester (or QA Tester/Test Analyst), you use Reports & Analytics to navigate test results, investigate failures quickly with AI assistance, create defects with complete context, and validate requirement coverage. This guide provides a focused learning path to help you master these execution workflows in 2-3 weeks.

## Your Primary Goals

### Goal 1: Navigate Test Results Efficiently

Outcome: Find and understand test execution results across manual and automated tests

Key Capabilities:

- View test results by project, release, test suite

- Filter results by status (passed, failed, incomplete)

- Understand test execution history and trends

- Identify which tests need attention

Features You'll Use:

- Test Results section with Test Result Analysis report

- Test Run Analysis report for execution history

- Filters for status, test suite, and release filtering

### Goal 2: Investigate Test Failures Systematically

Outcome: Quickly identify root causes of test failures using AI assistance

Key Capabilities:

- Use AI Test Failure Analysis for automated triage

- Review failure screenshots, logs, and stack traces

- Identify patterns in recurring failures

- Determine if failure is test issue, environment issue, or product defect

Features You'll Use:

- Test Failures section with AI Test Failure Analysis

- Test Result details with screenshots, logs, attachments

- Test Stability Intelligence for flaky test identification

- Failure History for pattern recognition

### Goal 3: Create and Track Defects from Failures

Outcome: Report defects efficiently with complete context and track resolution

Key Capabilities:

- Create defects directly from test failures

- Auto-populate defect details (steps, environment, screenshots)

- Link defects to requirements and test cases

- Track defect status and resolution progress

Features You'll Use:

- Test Failures with Create Defect action

- Defects section for defect tracking dashboard

- Jira/Azure DevOps integration for bidirectional sync

- Requirement linkage for traceability

### Goal 4: Understand Requirement Coverage Status

Outcome: Know which requirements are validated and which need testing

Key Capabilities:

- View requirement coverage progress

- Identify untested or partially tested requirements

- Understand test case to requirement mapping

- Validate coverage completeness before release

Features You'll Use:

- Coverage Reports with Requirement Coverage report

- Test Case Status Analysis for coverage by requirement

- Requirement Traceability for test linkage view

## Recommended Learning Path

### Phase 1: Core Execution Workflows (Weeks 1-2)

Goal: Master daily test execution, result navigation, and failure investigation

#### Test Result Navigation & Basic Investigation

Learning Objectives:

- Navigate test results confidently across projects and releases

- Apply filters to find specific test results quickly

- Access and review test execution details

Learning Activities:

- Core Concepts

Learn dashboard types, report categories, analysis scopes
Understand Test Results vs Test Runs vs Test Cases
Link: [Core Concepts](/docs/getting-started/core-concepts)

- Understanding Filters & Analysis Scope

Master filtering by status, test suite, release
Use time-based scopes for daily work
Link: [Filters and Analysis Scope](/docs/getting-started/filters-and-scope)

- Navigating Test Results Tutorial

Find test results for your test suite
Filter by status (passed, failed, incomplete)
View execution history and details
Link: [Navigating Test Results](/docs/test-results/navigating-test-results) (Note: Tutorial to be created)

- Understanding Test Result Details

Review screenshots, logs, stack traces
Understand execution timeline
Access test step details and assertions
Link: [Test Result Details](/docs/test-results/test-result-details) (Note: How-To to be created)

Phase 1 Outcome: Navigate test results confidently and access execution details

#### Failure Investigation & Defect Reporting

Learning Objectives:

- Investigate test failures systematically using AI acceleration

- Create defects directly from failures with auto-populated details

- Identify flaky tests and report them to the automation team

Learning Activities:

- Investigating Test Failures Tutorial

Learn systematic failure investigation workflow
Use AI Test Failure Analysis for triage acceleration
Review failure patterns and history
Link: [Investigating Test Failures](/docs/test-failures/investigating-test-failures)

- Creating Defects from Test Failures

Create defects directly from failures
Auto-populate defect details
Link defects to requirements and test cases
Track defect status
Link: [Creating Defects](/docs/defects/creating-defects) (Note: How-To to be created)

- Understanding Test Stability Intelligence

Identify flaky tests (tests that fail intermittently)
Understand Probabilistic Flakiness Score (PFS)
Report flaky tests to automation team
Link: [Test Stability Intelligence](/docs/customization/test-stability-intelligence)

Phase Outcome: Investigate failures systematically and create defects with complete context

### Phase 2: Coverage & Advanced Investigation (Week 3)

Goal: Understand coverage status and use advanced investigation features

#### Coverage Validation & Advanced Features

Learning Objectives:

- Validate requirement coverage completeness

- Use advanced filtering for complex test result queries

- Understand test case inventory and maintenance needs

Learning Activities:

- Analyzing Test Coverage Tutorial

View requirement coverage progress
Identify untested requirements
Understand coverage gaps
Link: [Analyzing Test Coverage](/docs/coverage/analyzing-test-coverage)

- Test Case Status Analysis

Review test case inventory
Understand test case status (active, obsolete, draft)
Track test case maintenance needs
Link: Test Case Status Analysis report spec

- Advanced Filtering for Test Results

Combine multiple filters (status + suite + configuration)
Save filter presets for daily use
Export filtered results
Link: [Build Advanced Filter Combinations](/docs/getting-started/build-advanced-filter-combinations)

- Working with Requirement Traceability

View test-to-requirement linkage
Validate requirement coverage completeness
Understand traceability matrices
Link: [Requirement Traceability](/docs/coverage/requirement-traceability)

Phase 2 Outcome: Validate coverage completeness and use advanced investigation tools

### Phase 3 (Optional): Monitoring & Dashboards (Ongoing)

Goal: Use dashboards for real-time monitoring and trend awareness

#### Optional Advanced Topics

Learning Objectives:

- Monitor active test runs in real-time

- Understand quality trends for your test suites

Learning Activities:

- Real-Time Monitoring Tutorial

Monitor active test runs in Live Monitor Dashboard
View test progress in real-time
Identify immediate failures during execution
Link: [Real-Time Monitoring Tutorial](/docs/dashboards/tutorials/real-time-monitoring)

- Understanding Quality Trends

View pass rate trends for your test suites
Understand historical quality patterns
Identify degrading test suites
Link: [Quality Trends Tutorial](/docs/dashboards/tutorials/quality-trends)

Phase 3 Outcome: Awareness of quality trends and real-time execution status (primarily for team leads, optional for individual testers)

## Common Tasks & Where to Find Them

Use this quick reference for your daily Manual Tester tasks:

TaskLocationTime RequiredView today's test resultsTest Results → Filter by "Last 24 hours"2 minFind failed tests in my suiteTest Results → Filter by Suite + Status:Failed2 minInvestigate test failureTest Failures → Select failure → AI Analysis5-10 minView failure screenshotsTest Result details → Screenshots tab1 minReview failure logsTest Result details → Logs tab2-5 minCheck failure historyTest Result details → Execution History2 minCreate defect from failureTest Failure → Create Defect button5 minLink defect to requirementDefect creation form → Requirement field1 minTrack defect statusDefects section → Defect tracking dashboard2 minView requirement coverageCoverage Reports → Requirement Coverage5 minFind untested requirementsRequirement Coverage → Filter by "Not Covered"3 minCheck test case statusTest Case Status Analysis report5 minView my test execution historyTest Run Analysis → Filter by User3 minMonitor active test runsLive Monitor Dashboard → Active Test Runs2 minIdentify flaky testsTest Stability Intelligence → Sort by PFS5 minExport test resultsTest Results → Export button2 minSave common filterTest Results → Apply filters → Save Preset2 minView test-to-requirement mappingRequirement Traceability report5 min

## Your Workflow Journey

This diagram illustrates a typical Manual Tester daily workflow through Reports & Analytics, showing test execution, failure investigation, and defect creation:

#_r_ai_{margin:1.5rem auto 0;}#_r_ai_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_ai_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_ai_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_ai_ .error-icon{fill:#552222;}#_r_ai_ .error-text{fill:#552222;stroke:#552222;}#_r_ai_ .edge-thickness-normal{stroke-width:1px;}#_r_ai_ .edge-thickness-thick{stroke-width:3.5px;}#_r_ai_ .edge-pattern-solid{stroke-dasharray:0;}#_r_ai_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_ai_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_ai_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_ai_ .marker{fill:#333333;stroke:#333333;}#_r_ai_ .marker.cross{stroke:#333333;}#_r_ai_ svg{font-family:inherit;font-size:16px;}#_r_ai_ p{margin:0;}#_r_ai_ .label{font-family:inherit;color:#333;}#_r_ai_ .cluster-label text{fill:#333;}#_r_ai_ .cluster-label span{color:#333;}#_r_ai_ .cluster-label span p{background-color:transparent;}#_r_ai_ .label text,#_r_ai_ span{fill:#333;color:#333;}#_r_ai_ .node rect,#_r_ai_ .node circle,#_r_ai_ .node ellipse,#_r_ai_ .node polygon,#_r_ai_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_ai_ .rough-node .label text,#_r_ai_ .node .label text,#_r_ai_ .image-shape .label,#_r_ai_ .icon-shape .label{text-anchor:middle;}#_r_ai_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_ai_ .rough-node .label,#_r_ai_ .node .label,#_r_ai_ .image-shape .label,#_r_ai_ .icon-shape .label{text-align:center;}#_r_ai_ .node.clickable{cursor:pointer;}#_r_ai_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_ai_ .arrowheadPath{fill:#333333;}#_r_ai_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_ai_ .flowchart-link{stroke:#333333;fill:none;}#_r_ai_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_ai_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_ai_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_ai_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_ai_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_ai_ .cluster text{fill:#333;}#_r_ai_ .cluster span{color:#333;}#_r_ai_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_ai_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_ai_ rect.text{fill:none;stroke-width:0;}#_r_ai_ .icon-shape,#_r_ai_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_ai_ .icon-shape p,#_r_ai_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_ai_ .icon-shape rect,#_r_ai_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_ai_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_ai_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_ai_ :root{--mermaid-font-family:inherit;}
No

Yes

Known Issue

Flaky Test

New Defect

Yes

No

Yes

No

Start Day

Check Test Suite Results

Any Failures?

Continue Testing

Review Failed Tests

Investigate First Failure

Use AI Test Failure Analysis

Analysis Result

Link to Existing Defect

Report to Automation Team

Create Defect

Auto-populate Defect Details

Link to Requirement

Add Screenshots/Logs

Submit Defect

Next Failure

More Failures?

Check Coverage Status

Coverage Gaps?

Identify Untested Requirements

Daily Work Complete

Plan Test Execution

Workflow Phases:

- Light blue nodes (Start Day): Daily start

- Yellow nodes (AI Analysis): AI-powered decision

- Light red nodes (Create Defect): Critical action (defect creation)

- Green nodes (Complete): Completion

## Common Questions

### Do I need programming knowledge to use Reports & Analytics?

### How does AI Test Failure Analysis help me?

### Can I create defects directly in Jira from test failures?

### What's the difference between Test Results and Test Runs?

## See Also

Related Workflows:

- [QA Manager Workflow](/docs/workflows/qa-manager) - Understand your manager's perspective on team metrics

- [Automation Engineer Workflow](/docs/workflows/automation-engineer) - Collaborate on flaky test reports

- [Product Owner Workflow](/docs/workflows/product-owner) - Understand requirement coverage importance

Key Features:

- [Test Failures](/docs/test-failures) - Your primary investigation workspace

- [Defects](/docs/defects) - Defect tracking and reporting

- [Coverage Reports](/docs/coverage) - Requirement and test coverage validation

- [AI-Powered Features](/docs/ai-features) - AI Test Failure Analysis and automation

[QA Manager Workflow GuideStrategic learning pathway for QA Managers to master Reports & Analytics for team oversight, quality trends analysis, release decisions, and stakeholder reporting.](/docs/workflows/qa-manager)[Automation Engineer Workflow GuideTechnical learning pathway for Automation Engineers to master CI/CD monitoring, flaky test detection, test performance analysis, and configuration coverage optimization with Reports & Analytics.](/docs/workflows/automation-engineer)