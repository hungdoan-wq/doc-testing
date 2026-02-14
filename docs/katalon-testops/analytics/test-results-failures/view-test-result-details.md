# View Test Results

This document explains how to view test run/result details for automated and manual test executions in **TestOps**.

## Overview

For all executed test runs, **TestOps** offers a high-level view and granular view of the test run and its results.

In **Executions > Run**, you can see a list of tests and their details like **results** (counts of test results by statuses), **duration**, **start time**, and [**smart tags**](/katalon-platform/analyze/configure-smart-tags) (if any) for each test run:

Hovering on each smart tag displays a summary of troubling test cases inside:

The **Schedule** tab displays scheduled tests, with sort/filters functions and an execute button next to each test so you can execute it immediately.

## View Test Run details

In **Executions**, click on a test run you want to assess to view its details. This view displays differently, depending on whether the test has been executed or not.

If the test is scheduled and never ran before, the view displays what test suites are selected, and allows you to **Edit** details, **Run Now**, or **Cancel** the run schedule. These actions are also available in the **Manage Automated Schedule > Scheduled Test** view.

- Manual Testing
- Automated Testing

While the test is running, the view changes to display test run data. As this is the test's first run, most tabs are empty, except for the **Sessions** tab which displays real-time execution log as the test executes, for monitoring purposes.

Once the test completes, data are gathered to display in other tabs, to help you assess the test in its whole execution history:

- **Overview** tab has charts to rate test suite’s performance over the runs:

**Test Results Summary**: percentages of test result statuses like passed, failed, skipped, etc.

**Common Errors**: displaying common errors from failed tests. You can click each test to learn more.

**Big numbers**: Counts of smart tags like flaky, always fail, new failure, and slow.

**Previous Test Runs**: Past test runs with statuses and durations.

**Defects**: List of defects linked to this test run. You can click each defect to view its full details in the ALM.

**Test Coverage by Configuration**: Test execution coverage across operating systems and browsers.

**Error Distribution by Failure Category**: Details of test failures grouped by root cause category.

- **Attachments** tab has attachments such as reports for later viewing.
- **Test Results** tab has results of each test case in the test suites/test suite collections that this run contains. Each result can be view independently (see **View Test Results details** below).
- **Visual Testing** tab has information of the **Visual Testing**, if enabled.

- On each test run’s details page, **TestOps** includes only the data available up to the selected run. Any executions performed after that run are excluded, to maintain accurate and consistent analytics across all runs.
- If you switch to the **Test Results** tab while a **Dynamic Test Suite** (**DTS**) is running, the tab may appear empty. This is because a **DTS** contains queries to select test cases, and does not contain test case data. After the test run completes, execution data will be parsed, and you can view the results as usual.


:::tip
- The Test Run Overview tab provides context for failures, with the error auto-categorized by AI to help you identify if this is an isolated issue, or a systemic problem. Check [Investigate Failures](docs/katalon-testops/analytics/test-results-failures/investigate-test-failures.md) to learn how to resolve test failures using TestOps analytics features.
:::endtip

## View Test Result details

Use this view to quickly deep dive into each test case's log, and review execution issues.

1. In the **Executions**, select a test run to see the full **Test Run Details** page.
2. Select **Test Results** tab.
3. For each test case, click this button to view result of the **current** run.

4. The trend line displays most 10 recent runs of the test case, up until (and excluding) the current run, arranged from oldest (left) to most recent (right). Hover on each node to view details of any of these runs:

5. Each test result details page displays details such as:

- **Test run configurations** at the top.
- **Execution log** with test step details.
- **Failure information** (if the result is `failed`) with **category** and, and the **similar failures** button that redirects you to a failure report filtered by the current failure's category.
- **Stability trend line** with history of past runs. You can hover on each node to view details of each run's result. See [] to learn more about investigating flaky tests.

You can switch to **AI-analysis** tab (failed results only), to have **Katalon's AI** analyze the root cause, impact, and recommendation to troubleshoot this failure:

For each test case, **TestOps** does calculations in the background and displays at the test case level, so you can quickly identify problematic tests. Hovering on each label shows more details, and how smart tags are calculated. See [Smart Tags](/katalon-platform/analyze/configure-smart-tags) for more details on smart tags.

---



Taking Action from Test Result Details
Once you've investigated a test result, several actions are available:

Create Defect Ticket
If the failure indicates an application bug:

Click the Create Defect button in the Test Result Details header
TestOps pre-fills the defect form with:
Test name and execution details
Error message and stack trace excerpts
Links to logs, screenshots, and videos
Review and add additional context (steps to reproduce, expected vs. actual behavior)
Submit to create a linked defect ticket in Jira, Azure DevOps, or your configured issue tracker
For complete guidance, see Linking Test Failures to Defects.

Re-run Test to Verify Fix
After developers fix a bug or you update test code:

Click the Re-run Test button
Select execution environment and profile (or use defaults)
Monitor the new test run
Compare results in the History tab to verify the fix resolved the issue
Share Result with Team
Share execution evidence with stakeholders:

Copy URL:

Copy the Test Result Details page URL from your browser
Paste in Slack, email, or Jira comments
Team members with TestOps access can click to view full details
Export evidence:

Download logs, screenshots, or videos as attachments
Include in defect reports or incident documentation
Archive for compliance or audit purposes
Copy AI summary:

Use AI-generated plain-English summary for non-technical stakeholders
Paste into status updates, retrospectives, or executive reports
Add Comments or Notes
Some TestOps configurations allow adding comments directly to test results:

Document workarounds or known issues
Tag team members for review
Track investigation status and assigned owners