---
title: Monitor Automated Tests
---

This document explains how you can use **TestOps** to manage scheduled test runs, re-configure scheduled tests, and gain more insight about the test run results.

## Manage and modify scheduled automated tests

After you schedule automated runs, use the **Manage Automated Schedule** screen to monitor and update and manage them in bulk (deactivate, delete,…).

<iframe
src="https://demo.arcade.software/F3n5weMTop8gzOM1DF7R?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Edit an Automated Test Schedule"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

1. Click the **Manage Automated Schedule** button to edit tests.
    
2. In this view, you can **deactivate/activate**, or delete the run. Editing in bulk is supported.
    
3. To view and adjust details of a scheduled test run, select the test run. You'll see a test run details page with three tabs:
    
    - The **Test Runs** tab is opened by default, showing past runs of this test and their separate results.
        
    - The **Overview** tab displays details of the test's past performance.
        
    - The **Configurations** tab shows you how this test was configured for the recent runs.
        
4. In here, you can click **Edit** to re-configure profile, environment, schedule, and some additional settings for this test to execute in the next run.
    

## Assess Automated Tests

For all automated tests, **TestOps** offers a high-level view and granular view of test results.

In **Executions > Run**, you can see a list of tests and their details like **results** (counts of test results by statuses), **duration**, **start time**, and [**smart tags**](/katalon-platform/analyze/smart-tags) (if any) for each test run:

<img src="https://tw-cdn.katalon.com/katalon-platform/execute/automated-tests/testops-test-run-list.png" alt="testops test run list" width="700px" />
<br/>

Hovering on each smart tag displays a summary of troubling test cases inside:

<img src="https://tw-cdn.katalon.com/katalon-platform/execute/automated-tests/testops-smart-tag-for-test-run.png" alt="testops smart tag for test run" width="350px" />
<br/>

The **Schedule** tab displays scheduled tests, with sort/filters functions and an execute button next to each test so you can execute it immediately.

<img src="https://tw-cdn.katalon.com/katalon-platform/execute/automated-tests/testops-scheduled-test-runs.png" alt="testops scheduled test runs" width="700px" />
<br/>

### View Test Run details

In **Executions**, click on a test run you want to assess to view its details. This view displays differently, depending on whether the test has been executed or not.

If the test is scheduled and never ran before, the view displays what test suites are selected, and allows you to **Edit** details, **Run Now**, or **Cancel** the run schedule. These actions are also available in the **Manage Automated Schedule > Scheduled Test** view above.

<img src="https://tw-cdn.katalon.com/katalon-platform/execute/automated-tests/testops-test-run-not-executed-yet-1.png" alt="testops test run not executed yet" width="700px" />
<br/>

While the test is running, the view changes to display test run data. As this is the test's first run, most tabs are empty, except for the **Sessions** tab which displays real-time execution log as the test executes, for monitoring purposes.

<img src="https://tw-cdn.katalon.com/katalon-platform/execute/automated-tests/testops-test-run-details-sessions-tab.png" alt="testops test run details sessions tab" width="700px" />
<br/>

Once the test completes, data are gathered to display in other tabs, to help you assess the test in its whole execution history:

- **Overview** tab has charts to rate test suite’s performance over the runs:
    
    - **Test Results Summary**: percentages of test result statuses like passed, failed, skipped, etc.
        
    - **Common Errors**: displaying common errors from failed tests. You can click each test to learn more.
        
    - **Big numbers**: Counts of smart tags like flaky, always fail, new failure, and slow.
        
    - **Previous Test Runs**: Past test runs with statuses and durations.
        
    - **Defects**: List of defects linked to this test run. You can click each defect to view its full details in the ALM.
        
    - **Test Coverage by Configuration**: Test execution coverage across operating systems and browsers.
        
    - **Error Distribution by Failure Category**: Details of test failures grouped by root cause category.
        

<img src="https://tw-cdn.katalon.com/katalon-platform/execute/automated-tests/testops-test-run-details-page.png" alt="testops test run details page" width="700px" />
<br/>

- **Attachments** tab has attachments such as reports for later viewing.
    
- **Test Results** tab has results of each test case in the test suites/test suite collections that this run contains. Each result can be view independently (see **View Test Results details** below).
    
- **Visual Testing** tab has information of the **Visual Testing**, if enabled.

:::note
- On each test run’s details page, **TestOps** includes only the data available up to the selected run. Any executions performed after that run are excluded, to maintain accurate and consistent analytics across all runs.
- If you switch to the **Test Results** tab while a **Dynamic Test Suite** (**DTS**) is running, the tab may appear empty. This is because a **DTS** contains queries to select test cases, and does not contain test case data. After the test run completes, execution data will be parsed, and you can view the results as usual.

:::

### View Test Result details

Use this view to quickly deep dive into each test case's log, and review execution issues.

1. In the **Executions**, select a test run to see the full **Test Run Details** page.
    
2. Select **Test Results** tab.
    
3. For each test case, select this button to view result of the **current** run.
    

<img src="https://tw-cdn.katalon.com/katalon-platform/execute/automated-tests/testops-view-current-result-from-test-run-details.png" alt="testops view current result from test run details" width="350px" />
<br/>

4. The trend line displays most 10 recent runs of the test case, up until (and excluding) the current run, arranged from oldest (left) to most recent (right). Hover on each node to view details of any of these runs:

<img src="https://tw-cdn.katalon.com/katalon-platform/execute/automated-tests/testops-historical-results-trend-line.png" alt="testops historical results trend line" width="700px" />
<br/>
    

5. Each test result details page displays details such as:
    

- **Test run configurations** at the top.
    
- **Execution log** with test step details.
    
- **Failure information** with **category** and, and the **similar failures** button that redirects you to a failure report filtered by the current failure's category.
    
- **Stability trend line** with history of past runs. You can hover on each node to view details of each run's result.
    

<img src="https://tw-cdn.katalon.com/katalon-platform/execute/automated-tests/testops-test-result-details.png" alt="testops test result details" width="700px" />
<br/>

If the test result is failed, you can switch to **AI-analysis** tab, to have Katalon's AI analyze the root cause, impact, and recommendation to troubleshoot this failure:

<img src="https://tw-cdn.katalon.com/katalon-platform/execute/automated-tests/testops-failure-ai-analyze-button.png" alt="testops failure ai analyze button" width="350px" />
<br/>

For each test case, **TestOps** does calculations in the background and displays at the test case level, so you can quickly identify problematic tests. Hovering on each label shows more details, and how smart tags are calculated. See [Smart Tags](/katalon-platform/analyze/smart-tags) for more details on smart tags.