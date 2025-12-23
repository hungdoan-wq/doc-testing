---
title: "Personal Notification"
---

The **Personal Notification Settings** in Katalon TestOps allow users to manage how and when they receive updates about their testing activities **via email.**

Users can configure notification preferences **globally across all projects** or **individually for specific projects**. Notifications can include:

- **Analytical Reports:** Reports, summaries, and test run updates that help users stay informed about project progress and results.
- **Real-time Alerts:** *Coming soon*
- **Scheduled Summaries:** *Coming soon*

<iframe
  src="https://demo.arcade.software/1XhigLH7J9TZAJHnyAEP?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
  title="User Notifications"
  frameborder="0"
  loading="lazy"
  webkitallowfullscreen
  mozallowfullscreen
  allowfullscreen="true"
  allow="clipboard-write"
  style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

To enable all notifications, toggle **Receive Notification** on. When this option is turned off, no email notifications will be sent.

These settings apply to **all projects you are involved in**. You can:

- Combine your personal notification settings with cross-project notifications, or
- Override project-level notifications with your own preferences.

---

## Analytical Reports

Analytical reports allow users to receive test insights and execution summaries via email. These settings apply across all projects and can combine both global and project-specific preferences.

### Available Reports

| **Report** | **Description** | **Configuration Options** |
| --- | --- | --- |
| **Test Run Report** | A real-time email alert that includes detailed information about a specific test run. Displays the test run ID, duration, passed/failed tests, environment, and failure details. Ideal for immediate follow-up on failures or completion. | • Only include Failed Test Run <br/> • Only events related to me <br/> • Test result chart/donut bar    <img src="https://tw-cdn.katalon.com/katalon-platform/personal-setting/notif-config.png" alt="User Notification Config" width="800"/> |
| **Daily Summary Report** | A daily digest email summarizing the day’s test executions — including the number of passed/failed test cases, new test results, and recent runs. Helps track overall progress without checking each project individually. | — |
| **Weekly Test Readiness Report** | A weekly analytics report providing insights into testing trends, execution volume, test quality, and release readiness. Includes visual charts, historical comparisons, and pass/fail breakdowns by release. | — |

---

### Cross-Project Notification Setting

Cross-project notifications allow users to receive reports from all projects they’re involved in. Users can customize which reports to receive globally.
   <img src="https://tw-cdn.katalon.com/katalon-platform/personal-setting/cross-project-setting.png" alt="Personal Notification Config" width="800"/>


---

### Specific Project Setting

Specific project settings let users tailor notifications for individual projects. These can **override** or **combine** with cross-project settings, depending on user preference.

This setup allows users to manage detailed preferences, for instance, enabling daily summaries for a key project while disabling test run alerts for others.

<iframe
  src="https://demo.arcade.software/WybOAUh69zaR642g0etZ?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
  title="Set Up and Manage Project Notification Preferences"
  frameborder="0"
  loading="lazy"
  webkitallowfullscreen
  mozallowfullscreen
  allowfullscreen="true"
  allow="clipboard-write"
  style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>


1. Click **Add Project Notification**.
2. In the pop-up window, select the desired project(s) from the list.
3. Click **Add** to apply them under **Specific Project Setting**.
4. Adjust the notification options for each report as needed.
> **Note**: Currently, Specific Project Setting can only be configured for the Daily Summary Report.

| **Report** | **Receive Report** | **Configuration** |
| --- | --- | --- |
| Daily Summary Report | ✅ Available | — |