new doc structure

what RA is to user: a place where data from test executions are gathered for analytical purposes.
how users are using RA and will use in the future:
- Go to dashboards for major concerns: release health, current health, and particular concerns
- Go to each report for drilling down into:
	- **Evaluate automation progress**:
		- Automation Progress Analysis: Track the advancement of test automation initiatives. Analyze coverage trends, view pending automation tasks, and monitor the distribution of test cases by their automation status.
		- Common Automation Errors: Analyze test execution error to identify patterns and root causes. View failure distribution by category, and drill down into specific test cases affected by each error type.
	- **Analyze test defects**:
		- Defect Status Analysis: Analyze the current distribution of defects by status, priority, and severity. Defaults to show unresolved defects.
		- Defects Activity Analysis: Analyze defect creation, closure, and overall status over a selected period. Identifies trends in defect activity and the distribution of open defects by priority.
	- **Monitor test cases**
		- Test Cases Publishing Activity Analysis: Analyze the publishing activity of test cases. Tracks the number of test cases in each publishing status (e.g., Draft, Review, Published) over time.
		- **Test Case Health Analysis**: Analyze the reliability and performance patterns of test cases based on historical execution data. Identify flaky tests, performance issues, and consistently failing test cases that require attention.
		- Test Failures Analysis: Analyze test failure patterns and identify problematic test cases. Shows the distribution of test case failure rates and details for individual test cases.
	- Analyze test executions
		- Test Results Analysis: Analyze test execution outcomes of per test case, including passed, failed, blocked, and other statuses. Identify areas with high failure rates and trends over time.
		- Test Runs Analysis: Analyze test run completion status, execution results, and overall success rates. Identify trends in test run performance.
	- **Assess test coverage**:
		- Requirements Coverage Analysis: Analyze requirement coverage, including linked test cases, execution status, and pass rates. Identify requirements with insufficient testing.
		- Requirement Traceability: Analyze the end-to-end testing status by tracing requirements through linked test cases, their execution results, and associated defects.
		- Configuration Coverage Analysis: Analyze test execution coverage across different platforms, browsers, and devices. Identify well-tested and under-tested environments, ensuring critical user configurations receive adequate validation.



Reports & Analytics
|__ Dashboards & Reports features
|__ Evaluate your project on a high level
|__ **Evaluate automation progress and errors**
|__ Analyze defects
|__ Monitor test cases
|__ Assess test coverage
|__ Monitor flaky tests
|__ Reference: How metrics are calculated



  










# ✅ **Master Table: QA Concepts → Definitions → Relevant Reports**

| **QA Concept**                                             | **What It Covers (Definition)**                                                                                            | **Relevant TestOps Reports**                                                                                                            |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Automation Progress & Maturity**                         | Growth of automation, % automated vs total tests, speed of publishing test cases, team productivity                        | - Automation Progress  <br>- Test Case Publishing Activity Analysis                                                                     |
| **Automation Reliability & Stability**                     | Flakiness, intermittent failures, false positives, reliability trends, repeated vs new failures, error categorization      | - Common Automation Errors  <br>- Test Case Status Analysis  <br>- Test Failures Analysis  <br>- Test Results  <br>- Test Runs Analysis |
| **Execution Health & Live Observability**                  | Real-time monitoring of ongoing executions, immediate detection of failures, pipeline visibility, environment health       | - Live Monitor                                                                                                                          |
| **Release Readiness & Release Health**                     | Quality indicators for release, regression checks, new vs known failures, risk analysis by module, release-level coverage  | - Release Health                                                                                                                        |
| **Defect Discovery & Defect Lifecycle Trends**             | How many defects QA finds, defect creation/resolution over time, severity/priority distribution, defect density            | - Defects Activity Analysis  <br>- Defect Status Analysis                                                                               |
| **Test Failures, Root Cause & Hotspots**                   | Failure clustering, AI categorization, repeated failures, module hotspots, performance issues, execution quality over time | - Test Failures Analysis  <br>- Test Runs Analysis  <br>- Test Results  <br>- Common Automation Errors                                  |
| **Requirements Coverage & Quality**                        | How well requirements (from ALM) are covered by tests, coverage gaps, testing risk for uncovered areas                     | - Requirement Test Coverage Report                                                                                                      |
| **Requirements → Tests → Failures → Defects Traceability** | Full lifecycle mapping, drill-down navigation, tracing each requirement to associated tests, runs, failures, defects       | - Requirement Traceability Report                                                                                                       |
| **Configuration Coverage**                                 | Test coverage across OS, browsers, devices, configuration gaps, platform-level risks                                       | - Configuration Coverage                                                                                                                |
| **General QA Analytics & Trends**                          | Long-term quality trends, pass/fail behavior over time, quality trajectory, comparisons across time periods                | - Analytics & Trends                                                                                                                    |
| **Team & Project Dashboards**                              | High-level summaries, customizable views, cross-metric visibility, QA KPIs for managers                                    | - Dashboards                                                                                                                            |