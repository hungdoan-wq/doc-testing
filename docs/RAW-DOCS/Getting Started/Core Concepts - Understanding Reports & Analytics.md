Getting Started
# Core Concepts - Understanding Reports & Analytics

Build a mental model of TestOps Reports & Analytics—understand dashboards vs reports, role-based use cases, data models, and how R&A fits into your testing workflow.

# Core Concepts: Understanding Reports & Analytics

Reading time: 12 minutes

Looking for hands-on practice? If you prefer learning by doing, start with [Getting Started with Reports & Analytics](/docs/getting-started/introduction) for a step-by-step tutorial. This document provides conceptual understanding that complements the hands-on guide.

## Introduction

Imagine managing a software testing operation without visibility into what's happening. You don't know which tests are passing or failing, which builds are stable, or whether your team is ready to release. You're flying blind.

This is the problem Katalon TestOps Reports & Analytics solves. It transforms raw test execution data into actionable insights, giving you the visibility and intelligence you need to make confident quality decisions.

This guide helps you build a mental model of Reports & Analytics: what it does, how it works, and when to use each feature. Whether you're a QA Manager planning adoption, a Tester learning the platform, or an Engineer integrating automation, understanding these core concepts will help you use TestOps more effectively.

## What is Reports & Analytics?

### The Testing Visibility Challenge

Modern software teams face a common challenge: testing generates massive amounts of data, but data alone doesn't tell you what to do.

Consider a typical scenario:

- Your CI/CD pipeline runs 2,000 automated tests every night

- Manual testers execute 150 test cases daily

- Multiple teams work on different features simultaneously

- Tests run across different environments, browsers, and devices

Without Reports & Analytics, you'd need to manually sift through logs, spreadsheets, and CI/CD outputs to answer basic questions like "Are we ready to release?" or "Why did yesterday's build fail?"

### What Reports & Analytics Provides

Reports & Analytics (R&A) is TestOps's intelligence layer—it collects test execution data from all sources and transforms it into four key capabilities:

- Real-time monitoring: See what's happening right now with live dashboards

- Historical analysis: Understand trends, patterns, and changes over time

- Quality insights: Identify flaky tests, coverage gaps, and risk areas

- Compliance traceability: Link tests to requirements for regulatory reporting

#_r_8e_{margin:1.5rem auto 0;}#_r_8e_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_8e_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_8e_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_8e_ .error-icon{fill:#552222;}#_r_8e_ .error-text{fill:#552222;stroke:#552222;}#_r_8e_ .edge-thickness-normal{stroke-width:1px;}#_r_8e_ .edge-thickness-thick{stroke-width:3.5px;}#_r_8e_ .edge-pattern-solid{stroke-dasharray:0;}#_r_8e_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_8e_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_8e_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_8e_ .marker{fill:#333333;stroke:#333333;}#_r_8e_ .marker.cross{stroke:#333333;}#_r_8e_ svg{font-family:inherit;font-size:16px;}#_r_8e_ p{margin:0;}#_r_8e_ .label{font-family:inherit;color:#333;}#_r_8e_ .cluster-label text{fill:#333;}#_r_8e_ .cluster-label span{color:#333;}#_r_8e_ .cluster-label span p{background-color:transparent;}#_r_8e_ .label text,#_r_8e_ span{fill:#333;color:#333;}#_r_8e_ .node rect,#_r_8e_ .node circle,#_r_8e_ .node ellipse,#_r_8e_ .node polygon,#_r_8e_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_8e_ .rough-node .label text,#_r_8e_ .node .label text,#_r_8e_ .image-shape .label,#_r_8e_ .icon-shape .label{text-anchor:middle;}#_r_8e_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_8e_ .rough-node .label,#_r_8e_ .node .label,#_r_8e_ .image-shape .label,#_r_8e_ .icon-shape .label{text-align:center;}#_r_8e_ .node.clickable{cursor:pointer;}#_r_8e_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_8e_ .arrowheadPath{fill:#333333;}#_r_8e_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_8e_ .flowchart-link{stroke:#333333;fill:none;}#_r_8e_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_8e_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_8e_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_8e_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_8e_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_8e_ .cluster text{fill:#333;}#_r_8e_ .cluster span{color:#333;}#_r_8e_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_8e_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_8e_ rect.text{fill:none;stroke-width:0;}#_r_8e_ .icon-shape,#_r_8e_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_8e_ .icon-shape p,#_r_8e_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_8e_ .icon-shape rect,#_r_8e_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_8e_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_8e_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_8e_ :root{--mermaid-font-family:inherit;}
Insights & Actions

Reports & Analytics

Test Data Sources

Katalon Studio

Playwright/Other Tools

Manual Tests

CI/CD Pipelines

Data Collection

Processing & Calculation

Metrics Engine

Real-time Dashboards

Historical Reports

Quality Insights

Compliance Traceability

Figure 1: How Reports & Analytics transforms test data into actionable insights

### How R&A Fits in the TestOps Ecosystem

Reports & Analytics doesn't work in isolation—it's deeply integrated with other TestOps modules:

- Test Management → R&A: Test case execution results feed into quality reports

- Requirements → R&A: Traceability reports link test coverage to requirements

- Visual Testing → R&A: Visual comparison results appear in quality dashboards

- Integrations → R&A: Jira issues, GitHub PRs, and CI/CD data enrich analytics

- Test Environments → R&A: Environment-specific analysis helps isolate issues

Think of R&A as the "brain" that makes sense of all the testing activity happening across your organization.

## Who Uses Reports & Analytics?

Reports & Analytics serves different roles with different needs. Understanding these perspectives helps you choose the right features for your situation.

Five key roles:

- QA Managers: Strategic oversight, release readiness, quality trends

- Manual Testers: Execution tracking, failure investigation

- Automation Engineers: Flaky test detection, test optimization

- DevOps Engineers: Pipeline integration, quality gates

- Product Managers: Feature quality, requirement traceability

### QA Managers: Strategic Oversight

### Manual Testers: Execution and Investigation

### Automation Engineers: Maintenance and Optimization

### DevOps Engineers: Pipeline Integration

### Product Managers: Feature Quality

## Dashboards vs Reports: When to Use What

One of the most common questions new users ask is: "Should I use a dashboard or a report?" Understanding the conceptual difference helps you choose the right tool.

### Dashboards: Multi-Metric Monitoring Interfaces

Purpose: Dashboards are designed for ongoing vigilance across multiple concerns—they show you several related metrics simultaneously for proactive decision-making.

Conceptual Model: Think of a dashboard like a car's instrument panel. You glance at it while driving to monitor speed, fuel, engine temperature, and warning lights all at once. It gives you just enough information across multiple dimensions to make immediate decisions.

When to use dashboards:

- You need to monitor multiple related metrics simultaneously (not just one thing)

- You want at-a-glance pattern recognition across different dimensions

- You check the same set of concerns repeatedly (daily standup, release monitoring)

- You need customizable layouts to arrange widgets for your specific workflow

- You want alerting and anomaly detection (visual cues when things go wrong)

Example use cases:

- QA Manager checks Release Health Dashboard every morning (pass rate + defects + coverage in one view)

- Team displays Live Monitor Dashboard on office TV during test runs (execution progress + failures + environment status)

- Automation Engineer monitors Flaky Test Dashboard weekly (stability trends + top flaky tests + impact)

### Reports: Single-Question Analytical Deep Dives

Purpose: Reports are designed for focused investigation and documentation—they answer specific analytical questions with comprehensive detail.

Conceptual Model: Think of a report like a medical diagnostic test. It provides detailed, structured data to answer a specific question thoroughly and can be exported for records.

When to use reports:

- You need to answer a specific analytical question (e.g., "Which requirements lack coverage?")

- You require detailed data tables with drill-down capabilities for investigation

- You want exportable documentation for compliance, audits, or stakeholder communication

- You need comprehensive data completeness for a particular concern (not just highlights)

- You're conducting root cause analysis that requires exploring granular details

Example use cases:

- QA Manager generates Requirement Coverage Report to identify untested requirements (detailed table with drill-down)

- Compliance Officer exports Requirement Traceability Report for audit (complete documentation)

- Automation Engineer creates Test Failure Analysis Report to investigate why specific tests failed (detailed logs, stack traces, history)

### Decision Guide: Dashboard or Report?

QuestionDashboardReportWhen do I use it?Repeatedly, ongoingOnce or occasionallyWhat am I trying to do?Monitor multiple concernsInvestigate specific questionWhat's the depth?High-level patterns across metricsDetailed analysis of one concernHow do I view it?Composable widgets, customizable layoutPredefined structure, data tablesWho consumes it?Internal team monitoringInternal + external stakeholdersDo I need to export it?RarelyOften (PDF, CSV, etc.)What's the interaction model?Glanceable, visual patternsDrill-down, explore details
#_r_8g_{margin:1.5rem auto 0;}#_r_8g_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_8g_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_8g_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_8g_ .error-icon{fill:#552222;}#_r_8g_ .error-text{fill:#552222;stroke:#552222;}#_r_8g_ .edge-thickness-normal{stroke-width:1px;}#_r_8g_ .edge-thickness-thick{stroke-width:3.5px;}#_r_8g_ .edge-pattern-solid{stroke-dasharray:0;}#_r_8g_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_8g_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_8g_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_8g_ .marker{fill:#333333;stroke:#333333;}#_r_8g_ .marker.cross{stroke:#333333;}#_r_8g_ svg{font-family:inherit;font-size:16px;}#_r_8g_ p{margin:0;}#_r_8g_ .label{font-family:inherit;color:#333;}#_r_8g_ .cluster-label text{fill:#333;}#_r_8g_ .cluster-label span{color:#333;}#_r_8g_ .cluster-label span p{background-color:transparent;}#_r_8g_ .label text,#_r_8g_ span{fill:#333;color:#333;}#_r_8g_ .node rect,#_r_8g_ .node circle,#_r_8g_ .node ellipse,#_r_8g_ .node polygon,#_r_8g_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_8g_ .rough-node .label text,#_r_8g_ .node .label text,#_r_8g_ .image-shape .label,#_r_8g_ .icon-shape .label{text-anchor:middle;}#_r_8g_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_8g_ .rough-node .label,#_r_8g_ .node .label,#_r_8g_ .image-shape .label,#_r_8g_ .icon-shape .label{text-align:center;}#_r_8g_ .node.clickable{cursor:pointer;}#_r_8g_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_8g_ .arrowheadPath{fill:#333333;}#_r_8g_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_8g_ .flowchart-link{stroke:#333333;fill:none;}#_r_8g_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_8g_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_8g_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_8g_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_8g_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_8g_ .cluster text{fill:#333;}#_r_8g_ .cluster span{color:#333;}#_r_8g_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_8g_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_8g_ rect.text{fill:none;stroke-width:0;}#_r_8g_ .icon-shape,#_r_8g_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_8g_ .icon-shape p,#_r_8g_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_8g_ .icon-shape rect,#_r_8g_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_8g_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_8g_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_8g_ :root{--mermaid-font-family:inherit;}
Multiple concerns

Single question

Repeatedly

One-time

Yes

No

Need insights about your tests?

Multiple related concernsor single question?

Need detailed tablesor export?

Check repeatedly orone-time investigation?

Use Dashboard

Use Report

Use Dashboardfor quick patterns

Use Reportfor documentation

Examples:• Monitor release health• Track test stability trends• Spot anomalies across metrics

Examples:• Investigate test failures• Audit requirement coverage• Document quality for stakeholders

Figure 3: Decision tree for choosing dashboards vs reports

### Can I Use Both?

Absolutely! Most teams use dashboards for ongoing monitoring and reports for periodic deep-dives. For example:

Weekly workflow:

- Monday-Friday: Check Live Monitor Dashboard during test runs (monitoring multiple execution metrics)

- When failures occur: Generate Test Failure Analysis Report to investigate root cause (detailed drill-down)

- Friday afternoon: Generate End-of-Sprint Coverage Report for stakeholders (documentation)

- Sprint retrospective: Review Release Health Dashboard for trends, then export detailed reports for records

## Common Workflows & Use Cases

Understanding how R&A fits into real-world testing workflows helps you apply it effectively. Here are three common scenarios:

### Scenario 1: Daily Standup Check-In

Role: QA Manager
Goal: Provide quality update to team

Workflow:

- Open Release Health Dashboard filtered to current sprint

- Check pass rate trend (is quality improving or declining?)

- Review open critical defects (any blockers?)

- Note test execution progress (are we on track?)

- Share key metrics in standup (2 minutes)

Why R&A helps: Provides instant, accurate quality snapshot without manual data gathering.

### Scenario 2: Investigating Test Failures

Role: Automation Engineer
Goal: Understand why nightly tests failed

Workflow:

- Open Live Monitor Dashboard showing last night's test run

- Identify failed tests and sort by failure rate

- Click into individual test result to see logs, screenshots, error messages

- Notice pattern: 5 tests failed with same "timeout" error

- Cross-reference with Environment Analysis (is it environment-specific?)

- Create Jira ticket linked to failing tests

- Mark tests as "known issue" to track resolution

Why R&A helps: Connects test results to context (environment, history, related failures) for faster root cause analysis.

### Scenario 3: Preparing for Release

Role: Product Manager + QA Manager
Goal: Decide if release is ready for production

Workflow:

- Generate Requirement Coverage Report (are all features tested?)

- Review Release Health Dashboard (current quality status)

- Check Defect Analysis Report (any high-severity open bugs?)

- Compare pass rate trend (quality improving or declining?)

- Evaluate against release criteria:

95%+ pass rate → ✅
All critical requirements covered → ✅
No P0/P1 open defects → ✅

- Make go/no-go decision with data-backed confidence

Why R&A helps: Provides comprehensive, objective view of release readiness rather than relying on subjective opinions.

#_r_8j_{margin:1.5rem auto 0;}#_r_8j_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_8j_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_8j_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_8j_ .error-icon{fill:#552222;}#_r_8j_ .error-text{fill:#552222;stroke:#552222;}#_r_8j_ .edge-thickness-normal{stroke-width:1px;}#_r_8j_ .edge-thickness-thick{stroke-width:3.5px;}#_r_8j_ .edge-pattern-solid{stroke-dasharray:0;}#_r_8j_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_8j_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_8j_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_8j_ .marker{fill:#333333;stroke:#333333;}#_r_8j_ .marker.cross{stroke:#333333;}#_r_8j_ svg{font-family:inherit;font-size:16px;}#_r_8j_ p{margin:0;}#_r_8j_ .label{font-family:inherit;color:#333;}#_r_8j_ .cluster-label text{fill:#333;}#_r_8j_ .cluster-label span{color:#333;}#_r_8j_ .cluster-label span p{background-color:transparent;}#_r_8j_ .label text,#_r_8j_ span{fill:#333;color:#333;}#_r_8j_ .node rect,#_r_8j_ .node circle,#_r_8j_ .node ellipse,#_r_8j_ .node polygon,#_r_8j_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_8j_ .rough-node .label text,#_r_8j_ .node .label text,#_r_8j_ .image-shape .label,#_r_8j_ .icon-shape .label{text-anchor:middle;}#_r_8j_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_8j_ .rough-node .label,#_r_8j_ .node .label,#_r_8j_ .image-shape .label,#_r_8j_ .icon-shape .label{text-align:center;}#_r_8j_ .node.clickable{cursor:pointer;}#_r_8j_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_8j_ .arrowheadPath{fill:#333333;}#_r_8j_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_8j_ .flowchart-link{stroke:#333333;fill:none;}#_r_8j_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_8j_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_8j_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_8j_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_8j_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_8j_ .cluster text{fill:#333;}#_r_8j_ .cluster span{color:#333;}#_r_8j_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_8j_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_8j_ rect.text{fill:none;stroke-width:0;}#_r_8j_ .icon-shape,#_r_8j_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_8j_ .icon-shape p,#_r_8j_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_8j_ .icon-shape rect,#_r_8j_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_8j_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_8j_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_8j_ :root{--mermaid-font-family:inherit;}
Release Readiness (Product + QA)

Generate CoverageReport

Review HealthDashboard

Check Defect Report

Evaluate againstcriteria

Make go/no-godecision

Test Failure Investigation (Engineer)

Open Live MonitorDashboard

Identify failed tests

Review logs & errors

Find failure patterns

Check environmentcorrelation

Create Jira ticket

Daily Standup (QA Manager)

Open Release HealthDashboard

Check pass rate trend

Review critical defects

Note execution progress

Share in standup

Figure 4: Three common workflows using Reports & Analytics

## Understanding the Data Behind Reports

To use Reports & Analytics effectively, you need to understand the data model—how TestOps organizes and calculates test information.

### Test Execution Hierarchy

TestOps structures test data in three levels:

1. Test Run (highest level)

- A complete execution session (e.g., "Nightly Regression - Jan 15, 2025")

- Contains multiple test executions

- Has overall status: Passed, Failed, Error, Incomplete

2. Test Execution

- A single test case's execution within a test run

- Links to a specific test case in Test Management

- Has individual status: Passed, Failed, Error, Skipped

3. Test Result (most granular)

- Detailed outcome of a test execution

- Includes logs, screenshots, error messages, duration

- Used for debugging and analysis

Example:

Test Run: "Nightly Regression - Jan 15"
├── Test Execution: "Login - Valid Credentials"
│   └── Test Result: Passed (2.3 seconds)
├── Test Execution: "Login - Invalid Password"
│   └── Test Result: Failed (timeout error)
└── Test Execution: "Login - Locked Account"
    └── Test Result: Passed (1.8 seconds)

### How Metrics Are Calculated

Understanding metric calculations helps you interpret results accurately:

Pass Rate:

Pass Rate = (Passed Tests / Total Tests) × 100

- Includes only Passed and Failed (excludes Skipped, Error)

- Calculated per test run, release, or custom scope

Flaky Rate:

Flaky Rate = (Tests with inconsistent results / Total Tests) × 100

- A test is "flaky" if it passes sometimes and fails sometimes (same code, environment)

- Calculated over multiple executions (default: last 30 days)

Test Duration:

- Sum of all test execution times in a test run

- Used to identify slow tests for optimization

- Calculated as median (not average) to reduce outlier impact

Coverage Percentage:

Coverage = (Requirements with ≥1 linked test / Total Requirements) × 100

- Measures how many requirements have test coverage

- Used in compliance and traceability reports

### Why Analysis Scope Matters

The same test data can tell different stories depending on analysis scope—the time window or release boundary you apply.

Time-Based Scope:

- Analyzes test results within a specific timeframe (e.g., last 7 days, last 30 days)

- Best for: Trend analysis, identifying recent changes

- Example: "Our pass rate dropped from 95% to 87% in the last week—what changed?"

Release-Based Scope:

- Analyzes test results for a specific release or build

- Best for: Release readiness decisions, version comparison

- Example: "How does Release 2.5 quality compare to Release 2.4?"

Current Scope (Latest Results):

- Shows only the most recent test execution result per test

- Best for: Real-time monitoring, immediate status checks

- Example: "What's the current status of our test suite right now?"

Example: Same Tests, Different Insights:

- Time-based (last 30 days): "Test A" passed 28/30 times → 93% pass rate (slightly flaky)

- Release-based (v2.5): "Test A" passed 10/10 times → 100% pass rate (stable this release)

- Current scope: "Test A" passed on last execution → Shows as Passed

Choosing the right scope is critical for accurate analysis. See [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope) for detailed guidance.

### Data Freshness and Synchronization

Real-time data: Dashboards update automatically as tests complete (typically 5-10 second delay)

Historical data: Reports capture point-in-time snapshots and don't auto-update

Integration sync: Data from Jira, GitHub, etc. syncs every 15 minutes (configurable)

Understanding data timing helps set realistic expectations for report accuracy.

## How R&A Integrates with Other Modules

Reports & Analytics becomes more powerful when integrated with other TestOps modules. Here's how data flows:

Test Management → R&A:

- Test case metadata (name, priority, tags) enriches test results

- Test suite organization reflects in dashboard filters

- Manual test execution status appears in Live Monitor Dashboard

Requirements → R&A:

- Requirement links enable traceability reports

- Coverage metrics show which requirements lack tests

- Test results map to specific user stories or epics

Visual Testing → R&A:

- Visual comparison results (passed/failed) appear in quality dashboards

- Visual diffs are accessible from test result details

- Visual test trends show UI stability over time

Integrations (Jira, GitHub) → R&A:

- Jira issues linked to tests appear in defect analysis reports

- GitHub PR commits correlate with test failures for blame analysis

- CI/CD build metadata enriches test run context

Test Environments → R&A:

- Environment-specific analysis isolates infrastructure issues

- Cross-environment comparisons identify inconsistencies

- Environment tags enable filtered dashboards

#_r_8n_{margin:1.5rem auto 0;}#_r_8n_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_8n_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_8n_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_8n_ .error-icon{fill:#552222;}#_r_8n_ .error-text{fill:#552222;stroke:#552222;}#_r_8n_ .edge-thickness-normal{stroke-width:1px;}#_r_8n_ .edge-thickness-thick{stroke-width:3.5px;}#_r_8n_ .edge-pattern-solid{stroke-dasharray:0;}#_r_8n_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_8n_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_8n_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_8n_ .marker{fill:#333333;stroke:#333333;}#_r_8n_ .marker.cross{stroke:#333333;}#_r_8n_ svg{font-family:inherit;font-size:16px;}#_r_8n_ p{margin:0;}#_r_8n_ .label{font-family:inherit;color:#333;}#_r_8n_ .cluster-label text{fill:#333;}#_r_8n_ .cluster-label span{color:#333;}#_r_8n_ .cluster-label span p{background-color:transparent;}#_r_8n_ .label text,#_r_8n_ span{fill:#333;color:#333;}#_r_8n_ .node rect,#_r_8n_ .node circle,#_r_8n_ .node ellipse,#_r_8n_ .node polygon,#_r_8n_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_8n_ .rough-node .label text,#_r_8n_ .node .label text,#_r_8n_ .image-shape .label,#_r_8n_ .icon-shape .label{text-anchor:middle;}#_r_8n_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_8n_ .rough-node .label,#_r_8n_ .node .label,#_r_8n_ .image-shape .label,#_r_8n_ .icon-shape .label{text-align:center;}#_r_8n_ .node.clickable{cursor:pointer;}#_r_8n_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_8n_ .arrowheadPath{fill:#333333;}#_r_8n_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_8n_ .flowchart-link{stroke:#333333;fill:none;}#_r_8n_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_8n_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_8n_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_8n_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_8n_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_8n_ .cluster text{fill:#333;}#_r_8n_ .cluster span{color:#333;}#_r_8n_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_8n_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_8n_ rect.text{fill:none;stroke-width:0;}#_r_8n_ .icon-shape,#_r_8n_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_8n_ .icon-shape p,#_r_8n_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_8n_ .icon-shape rect,#_r_8n_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_8n_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_8n_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_8n_ :root{--mermaid-font-family:inherit;}
Test execution resultsTest case metadata

Requirement linksCoverage mapping

Visual test resultsUI comparison data

Defect statusBuild metadataPR commits

Environment tagsConfiguration data

Quality dashboardsTrend analysis

Coverage reportsTraceability matrix

Visual stability metrics

Quality gatesTest insights

Environment analysisStability reports

Reports & AnalyticsIntelligence Layer

Test Management

Requirements

Visual Testing

IntegrationsJira/GitHub/CI-CD

Test Environments

Figure 5: How Reports & Analytics integrates with other TestOps modules

## Next Steps

Now that you understand the core concepts of Reports & Analytics, you're ready to apply them:

For hands-on practice:

- [Getting Started with Reports & Analytics](/docs/getting-started/introduction) - Step-by-step tutorial

- [Creating Your First Dashboard](/docs/dashboards/creating-dashboards) - Build a custom dashboard

- [Generating Reports](/docs/reports/generating-reports) - Create your first report

For deeper understanding:

- [Understanding Report Types](/docs/getting-started/report-types) - Learn about each report's purpose

- [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope) - Master data filtering

- [Dashboard Configuration Guide](/docs/dashboards/how-to/configuration) - Customize your monitoring

For role-specific guidance:

- [Reports & Analytics for QA Managers](/docs/advanced/qa-manager-guide) - Strategic usage patterns

- [Reports & Analytics for Testers](/docs/advanced/tester-guide) - Daily workflow tips

- [Reports & Analytics for Engineers](/docs/advanced/engineer-guide) - Automation and optimization

## See Also

- [Getting Started with Reports & Analytics](/docs/getting-started/introduction) - Hands-on tutorial

- [Understanding Report Types](/docs/getting-started/report-types) - Report catalog and use cases

- [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope) - Data filtering concepts

- [Dashboard vs Report Decision Guide](/docs/getting-started/dashboard-vs-report) - Detailed comparison

- [All Reports Reference](/docs/reference/all-reports) - Complete report catalog

- [All Widgets Reference](/docs/reference/all-widgets) - Widget catalog for dashboards

[Getting Started: Overview and Getting StartedNavigate Reports & Analytics confidently with task-to-tool mapping, basic filtering, and dashboard exploration for all testing roles.](/docs/getting-started/welcome-to-reports-analytics)[Understanding Report TypesLearn the conceptual differences between dashboards and reports in Katalon TestOps, understand when to use each, and make informed decisions about which tool best fits your monitoring and analysis needs.](/docs/getting-started/understanding-reports-vs-dashboards)