Getting Started
# Getting Started: Overview and Getting Started

Navigate Reports & Analytics confidently with task-to-tool mapping, basic filtering, and dashboard exploration for all testing roles.

# Getting Started: Overview and Getting Started

Reading time: 8 minutes

Reports & Analytics offers dozens of dashboards, reports, and analysis tools. Without a map, it's easy to get lost or miss critical capabilities. This guide gives you that map—showing you where to start, which tool to use for each task, and how to navigate confidently from day one.

## What This Section Covers

This section provides capabilities to:

- Navigate the Reports & Analytics module structure (dashboards vs. reports, navigation patterns, core interface elements)

- Access and explore the Project Dashboard to understand real-time quality metrics and test execution status

- Apply basic filtering with the time range selector to focus analysis on specific time periods

- Map common testing tasks to the right tools (task-to-tool reference covering daily monitoring, failure investigation, coverage tracking, release readiness)

## What You'll Achieve

By completing this section, you will:

- Navigate confidently between Reports & Analytics dashboards and reports using the left navigation menu

- Distinguish between dashboards (real-time monitoring) and reports (historical analysis) and know when to use each

- Access the Project Dashboard and interpret key metrics (total executions, pass rate, failed tests, execution trends)

- Apply basic time range filtering to adjust dashboard and report scope for day-to-day analysis

- Identify which tool to use for common testing tasks using the task-to-tool mapping reference (monitoring live tests, investigating failures, checking coverage, assessing release readiness)

- Understand navigation patterns and next learning steps based on your role (QA Engineer, QA Manager, Automation Engineer, Product Owner)

## Prerequisites

Before you begin: You need an active TestOps account with access to at least one project containing test execution data. If you don't have access yet, contact your TestOps administrator.

## Visual Journey Map

The diagram below shows your navigation journey from arriving at TestOps to finding the insights you need:


## Task-to-Tool Mapping: Finding the Right Tool Fast

The table below maps common testing tasks to the specific dashboard or report that answers your question:

| I Need To...                               | Use This Tool                                                                                                                                                                                                                          | Why?                                                                                                           |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Monitor tests running RIGHT NOW            | [Live Monitor Dashboard](https://ktl-docs-ra.vercel.app/docs/dashboards/live-monitor)                                                                                                                                                  | Real-time progress tracking with 5-second refresh during active executions                                     |
| See project's overall quality today        | [Project Dashboard](https://ktl-docs-ra.vercel.app/docs/getting-started/project-dashboard)                                                                                                                                             | Consolidated current metrics (pass rate, total executions, failed tests, trends)                               |
| Investigate why tests failed last week     | [Test Results Analysis Report](https://ktl-docs-ra.vercel.app/docs/test-failures/test-results-analysis)                                                                                                                                | Historical drill-down analysis with filters for time ranges, configurations, and test cases                    |
| Check if release is ready to ship          | [Release Health Dashboard](https://ktl-docs-ra.vercel.app/docs/release-readiness/release-health-dashboard)                                                                                                                             | Quality gates, release-specific metrics, and READY/AT RISK indicator for go/no-go decisions                    |
| Find which requirements lack coverage      | [Requirements Coverage Report](https://ktl-docs-ra.vercel.app/docs/coverage/requirements-coverage)                                                                                                                                     | Coverage percentages linked to requirements, showing gaps and completion status                                |
| Identify flaky/unstable tests              | [Test Failures Analysis Report](https://ktl-docs-ra.vercel.app/docs/test-failures/test-failures-analysis) or [Project Dashboard Flaky Tests widget](https://ktl-docs-ra.vercel.app/docs/getting-started/project-dashboard#flaky-tests) | Highlights intermittent failures with Probabilistic Flakiness Score (PFS)                                      |
| Track defect trends over time              | [Defect Activity Analysis Report](https://ktl-docs-ra.vercel.app/docs/defects/defect-activity-analysis)                                                                                                                                | Historical defect patterns showing discovery rate, resolution velocity, and trend analysis                     |
| See automated vs. manual test distribution | [Automation Progress Report](https://ktl-docs-ra.vercel.app/docs/coverage/automation-progress)                                                                                                                                         | Automation coverage tracking with breakdown by test type and execution method                                  |
| Verify testing across browsers/devices     | [Configuration Coverage Report](https://ktl-docs-ra.vercel.app/docs/coverage/configuration-coverage)                                                                                                                                   | Platform and environment coverage showing which configurations have been tested                                |
| Generate compliance audit report           | [Requirement Traceability Report](https://ktl-docs-ra.vercel.app/docs/coverage/requirement-traceability)                                                                                                                               | Full traceability chain (requirements → tests → results → defects) in audit-ready format with PDF/Excel export |
## Understanding Dashboards vs. Reports

Before diving into specific tools, understand the key distinction that shapes how you'll navigate Reports & Analytics:

Dashboards:

- Widget-based, composable layouts - users arrange multiple widgets (charts, metrics, alerts) into personalized views

- Purpose: Monitoring and alerting - "How are we doing right now?" across multiple concerns simultaneously

- At-a-glance operational awareness - like a car's instrument panel showing multiple indicators together

- Emphasize visual patterns, trend detection, and proactive decision-making

- Ideal for: Stakeholders who need to spot issues quickly and take action (e.g., "Test stability dropped below 90%, investigate now")

- Use case: Continuous monitoring, anomaly detection, operational oversight

Reports:

- Predefined, deep-dive analytical views - structured to answer specific analytical questions

- Purpose: Investigation and documentation - "Why did this happen?" or "Which requirements lack coverage?"

- Detailed data tables with drill-down capabilities - comprehensive data exploration and root cause analysis

- Emphasize data completeness, traceability, and exportable formats

- Ideal for: Practitioners who need to investigate problems, prove compliance, or document findings (e.g., generating requirement traceability matrix for auditors)

- Use case: Root cause analysis, compliance documentation, detailed investigation

When to use each:

- Use dashboards proactive monitoring (high-level, customizable, multi-metric views)

- Use reports for reactive analysis (detailed, predefined, single-question focus)

## Section Contents Overview

This section includes 2 tutorials, 1 how-to guide, 1 explanation, and 1 reference document to build your navigation foundation:

Tutorials:

- [Exploring the Project Dashboard](/docs/getting-started/project-dashboard) - Learn core metrics, widgets, and quality indicators on the universal quality dashboard all users access daily

- [Quick Start: Your First 5 Minutes](/docs/getting-started/quick-start) - Hands-on walkthrough from login to finding your first insight in under 5 minutes

How-To Guides:

- [Using Filters & Analysis Scope](/docs/getting-started/filters-analysis-scope) - Master time range, release scope, and current filters to focus analysis efficiently

Explanations:

- [Core Concepts: Understanding Reports & Analytics](/docs/getting-started/core-concepts) - Deep dive into module architecture, data flow, and terminology standards

Reference:

- [All Reports & Dashboards Quick Reference](/docs/reference/all-reports) - Complete catalog with descriptions, use cases, and links for every tool in Reports & Analytics

## Recommended Learning Path

[### For QA Engineers
Start: Investigating Test Failures - Learn systematic failure investigation workflow for daily debugging tasks, including AI-powered root cause analysisThen: Using Filters & Analysis Scope - Master filtering system to focus analysis efficiently on relevant time periods, releases, and configurationsFinally: Identifying Flaky Tests - Distinguish flaky tests from real failures to prioritize work and improve test reliability](/docs/test-failures/introduction)[### For QA Managers
Start: Dashboards & Monitoring - Understand Live Monitor, Analytics & Trends, and Release Health dashboards for team oversight and quality trackingThen: Assessing Release Readiness - Set up quality gates and release readiness workflows to make objective go/no-go decisionsFinally: Tracking Requirement Coverage - Monitor test coverage for completeness and compliance with audit-ready traceability](/docs/dashboards/introduction)

## Common Questions

### What's the difference between dashboards and reports in TestOps?

### I don't see any data in my dashboard. What should I check?

### Can I customize the Project Dashboard or other built-in dashboards?

Yes. TestOps allows dashboard customization including adding/removing widgets, resizing, and configuring widget settings. You can also create completely custom dashboards from scratch. Admin permissions required for organization-wide customizations.

Learn more: [Dashboard Configuration Guide](/docs/customization/dashboard-configuration)

### How do I know which report to use for compliance audits?

### What if I can't find a specific dashboard or report in my navigation?

## See Also

Foundation Concepts:

- [Core Concepts: Understanding Reports & Analytics](/docs/getting-started/core-concepts) - Deep dive into module architecture, data flow, and terminology standards

Next Sections:

- [Dashboards & Monitoring](/docs/dashboards/introduction) - Apply navigation knowledge to real-time monitoring with Live Monitor and Analytics & Trends

- [Test Failures](/docs/test-failures/introduction) - When dashboards show quality issues, learn systematic investigation workflows

Advanced Topics:

- [Customization & External Sharing](/docs/customization/introduction) - Customize dashboards and reports to match your team's workflow after mastering navigation

## 📍 Where to Go Next

Common next steps after Getting Started:

- [Exploring the Project Dashboard](/docs/getting-started/project-dashboard) - Start hands-on by exploring the universal quality dashboard all users access daily

- [Dashboards & Monitoring](/docs/dashboards/introduction) - Understand Live Monitor, Analytics & Trends, and Release Health for team oversight

- [Workflow Guide: Role-Based Pathways](/docs/workflows/overview) - Not sure which section to explore next? Find your role's recommended learning path

Need help deciding? See [Workflow Guide: Role-Based Pathways](/docs/workflows/overview)
[Core Concepts - Understanding Reports & AnalyticsBuild a mental model of TestOps Reports & Analytics—understand dashboards vs reports, role-based use cases, data models, and how R&A fits into your testing workflow.](/docs/getting-started/why-testops-for-test-analytics)