---
title: Manual Test Run
---
This document shows you how to create and execute a Manual Test Run in Katalon TestOps.

Use **Manual Test Runs** to quickly validate test behavior **without automation** or for scenarios that are **not yet automated**. You can select test suites or individual test cases, execute them in a focused workspace, capture step-level evidence, and review consolidated results.

:::tip requirement
- You must have Project Admin, Tester, or Test Lead role to perform this action.
:::
## Create a manual test run

<iframe
  src="https://demo.arcade.software/DIVMPuPbGweW2aW6ioUz?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"  title="Create a Manual Test Run"
  frameborder="0"
  loading="lazy"
  webkitallowfullscreen
  mozallowfullscreen
  allowfullscreen="true"
  allow="clipboard-write"
    style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

1. Navigate to **Executions** > **+ Create** > **Create Manual Test Run**.
2. Fill in the required fields:
    - **Test Run Name**: A descriptive name for this run.
    - **Executor**: Defaults to the current user; change if needed.
    - **Release Version (optional)**: Link the run to a release.
    - **Sprint (optional)**: Link the run to a sprint.
    - Click **Select Test Suites** to choose entire test suites. You can remove any selection with the **minus icon**.
        - Alternatively, select **individual test cases**. In this case, TestOps will automatically group them into a **new test suite**, which is created once you finish setting up the test run.
    - **Selected Configuration**: Choose the target environment (e.g., *Windows 11 + Chrome 143*). Remove with the trash icon if needed.
    <img src="https://tw-cdn.katalon.com/katalon-platform/manual-test-run/manual-test-run-setup.png" alt="Manual Test Run Setup Screen"/>
3. Choose how to proceed:
    - **Run Now**: Start execution immediately.
    - **Schedule**: Pick a future time or create a recurring schedule.

## Executing a Manual Test Run in TestPak

Manual Test Runs are executed in **TestPak**, a workspace designed for manual execution. It supports **real-time collaboration**, **evidence capture**, and **traceable results** for consistent testing.

---

### Run Now Mode

Use this mode for **immediate execution**. When you click **Run Now**, the TestPak workspace opens.

<iframe
  src="https://demo.arcade.software/BVB9Bx3DCyECai1OVaKd?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"  title="Execute a Manual Test Run in TestPak"
  frameborder="0"
  loading="lazy"
  webkitallowfullscreen
  mozallowfullscreen
  allowfullscreen="true"
  allow="clipboard-write"
    style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

1. Click **Start** to begin:
    - All test cases will initially appear with the status **In Testing**.
    - It also starts tracking the **testing duration** for that specific test case result.
2. Go through each test step and test case one by one.
3. (Optional) **Add Test Step Status or Comment the outcome for each test step**. 
    - If any test step is **Failed**, the test case is marked **Failed**.
    - If any test step is **Blocked**, the test case is marked **Blocked**.
    - If any test step is Skipped, the test case is marked as **Skipped.**

    > Note: The **test case status** is automatically determined based on step-level results, **but you can override it manually** by reselecting another status from the **dropdown menu** in the test case view.

4. **Update Test Case Status** – Choose a result for each case:
    - If any case is **Failed** or **Blocked**, the entire test run is marked **Failed**.
    - If any case is Skipped, the entire test run is marked as **Running**

    | Status | Description |
    | --- | --- |
    | **Skipped** | Case intentionally not executed or without a result. |
    | **Blocked** | Execution prevented by a dependency or issue. |
    | **Passed** | All expected outcomes met. |
    | **Failed** | One or more expected outcomes not met. |
5. (Optional) **Add Supporting Details**:
    - Comments: Log contextual notes under *Activities*.
    - Attachments: Upload screenshots, logs, or documents.
    - Images: JPEG, PNG, GIF, BMP
    - Documents: PDF, DOC(X), XLS(X), PPT(X)
    - Videos: MP4, MOV, AVI (max 100 MB)
    - Logs: TXT, LOG (others 15 MB)
6. (Optional) **Link a defect**: click the bug icon to report or link a defect.

    **Note:** To use this step, you must first integrate your **ALM (Application Lifecycle Management) tool** with TestOps. For setup instructions, see:

    - [Integrate Jira with TestOps](/katalon-platform/integrations/alm-and-test-management/jira-integration)
    - [Integrate Azure DevOps with TestOps](/katalon-platform/integrations/alm-and-test-management/azure-devops-integration)
    <img src="https://tw-cdn.katalon.com/katalon-platform/manual-test-run/defect-report.png" alt="Defect Report Dialog" width="500" />

7. **Navigate Cases** – Use **Next** / **Previous** to move between cases.
    - Progress auto-saves.
    - Cases without a result are marked **Skipped**.
8. **End the Run** – Click **End Test Run** to finalize and review aggregated results.
    <img src="https://tw-cdn.katalon.com/katalon-platform/manual-test-run/end-test-run.png" alt="End Test Run dialog" width="500"/>

### Schedule mode

Use this mode for **planned or recurring runs**

1. Click **Schedule** to open the **Schedule Test Run** dialog.
    <img src="https://tw-cdn.katalon.com/katalon-platform/manual-test-run/schedule-test-run.png" alt="Schedule Test Run dialog"/>
2. Set the **start time** and optionally a **recurrence pattern**.
    - The assigned executor will receive a **notification 15 minutes before** start time.
3. At the scheduled time:
    - Return to **Executions**, open the test run scheduled, and choose **Run with TestPak**.
    - Follow the same steps outlined in **Run Now Mode**.

## Important Notes

- A test run marked **Not Started** means it is scheduled for a later time.
    <img src="https://tw-cdn.katalon.com/katalon-platform/manual-test-run/not-started-status.png" alt="Not Started Status explanation" width="500" />

- If a scheduled test run is **assigned to another person**, only that assigned executor can start it.
- The assigned person will receive a **notification** that the test run has been scheduled for them.
    <img src="https://tw-cdn.katalon.com/katalon-platform/manual-test-run/assigned-notification.png" alt="Assigned Notification UI" width="300" />
