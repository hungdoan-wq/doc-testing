---
title: "Project Notifications"
---

The **Project Notifications Settings** in Katalon TestOps allow Project Admins to manage how members receive email updates for a **specific project**.

These notifications help teams stay informed about the project’s testing progress, results, and insights without having to check the dashboard manually.

## Overview

Each project in TestOps has its own configurable notification settings.  
Project Admins can enable or disable email notifications and determine which types of reports should be sent to project members.

- **Analytical Reports:** Reports, summaries, and test run updates that help users stay informed about project progress and results.  
- **Real-time Alerts:** *Coming soon*  
- **Scheduled Summaries:** *Coming soon*

<img src="https://tw-cdn.katalon.com/katalon-platform/project-settings/project-notifications-overview.png" alt="Project Notifications Overview" />

---

## Analytical Reports

Analytical Reports allow users to receive test insights and execution summaries via email. These settings apply to each specific project and can be configured individually by Project Admins.

### Available Reports

| **Report** | **Description** | **Configuration Options** |
| --- | --- | --- |
| **Test Run Report** *(Coming soon)* | A real-time email alert that includes detailed information about a specific test run. Displays the test run ID, duration, passed/failed tests, environment, and failure details. Ideal for immediate follow-up on failures or completions. | — |
| **Daily Summary Report** | A daily digest email summarizing the day’s test executions — including the number of passed/failed test cases, new test results, and recent runs. Helps track overall progress without checking each project individually. | <img src="https://tw-cdn.katalon.com/katalon-platform/project-settings/daily-summary-report-configuration.png" alt="Daily Summary Report Configuration" /> |
| **Weekly Test Readiness Report** *(Coming soon)* | A weekly analytics report providing insights into testing trends, execution volume, test quality, and release readiness. Includes visual charts, historical comparisons, and pass/fail breakdowns by release. | — |

---

### Configure Daily Summary Report

<iframe
  src="https://demo.arcade.software/eqNwLs7tt1hw35c7UGKr?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
  title="Project Notification Setup"
  frameborder="0"
  loading="lazy"
  webkitallowfullscreen
  mozallowfullscreen
  allowfullscreen="true"
  allow="clipboard-write"
  style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

1. Go to your project’s **Settings > Configurations > Notification** tab.  
2. Navigate to the **Analytical Reports** tab.  
3. Toggle **Daily Summary Report** to enable project-level notifications.  
4. To further customize who will receive the notifications, click the **Settings** icon:  
   - Select which **Project Role(s)** should receive the notifications, or  
   - Choose specific **Project Members**.  
   <img src="https://tw-cdn.katalon.com/katalon-platform/project-settings/daily-summary-report-configuration.png" alt="Daily Summary Report Configuration" width="600" />
