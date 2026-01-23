---
title: KRE – Session-Based License Reports
---
This guide explains how to use **Katalon Runtime Engine (KRE) session-based license reports** in **Katalon TestOps**. These reports help you monitor license utilization, identify peak demand periods, and optimize resource allocation across your Account or Organization, enabling data-driven license management and operational efficiency.

:::tip Requirements
You must be assigned the **Account Admin** role to access the reports described below.
:::

---

## Overview

Katalon TestOps provides three primary session-based reports:

1. **KRE – License Usage** – Resource utilization patterns and peak demand trends over time
2. **KRE – User Sessions** – Session-level visibility into active and historical usage
3. **TestCloud – License Usage** – TestCloud session resource monitoring and optimization

Each report serves a different purpose, from strategic capacity planning to operational monitoring.

---

## KRE – License Usage

The **KRE License Usage** chart gives you a consolidated, time-based view of how session-based KRE licenses are utilized across your Account or Organization. This interactive report helps you monitor execution resource usage, identify peak demand periods, and optimize license allocation to ensure testing operations run efficiently.

### Use Cases

This report helps you:

- Monitor periods of high demand to prevent resource constraints
- Identify underutilization that indicates potential cost-saving opportunities
- Plan license allocation based on historical usage patterns
- Make data-driven decisions about future license procurement

Interactive tooltips reveal detailed metrics for specific data points, helping you examine usage patterns without changing your view configuration.

### How to View the Report

1. Go to **Admin Settings > Account > License Utilization** (accessible from the cog icon in the upper-right corner).
2. Select **KRE – License Usage**.

    The chart tracks three core metrics within the selected timeframe:
    - **Available Sessions**: Total number of KRE session licenses available to your organization during each time interval, using the most current data point for accuracy.
    - **Peak Usage**: Maximum number of concurrent sessions utilizing KRE licenses during each measured interval, highlighting resource demand spikes.
    - **Average Peak**: Average peak usage across the time period, calculated differently based on your selected interval. For monthly views, this represents the average daily peak usage.

3. (Optional) Apply filters to refine your analysis by organization, date range, or time interval granularity.
4. (Optional) Hover over the chart to view detailed data points.

<br/>

<img src="https://tw-cdn.katalon.com/katalon-testops/Administration and Licensing/Manage Accounts/License Utilization/Session Based License Reports KRE License Usage.png" alt="Session-Based: KRE - License Usage" width="1080"/>

<br/>

:::info Additional Information
The visualization highlights usage gaps and peak demand periods, enabling you to make informed decisions about resource distribution and optimization across your testing environments.
:::

---

## KRE – User Sessions

The **KRE User Sessions** report provides a session-level log of KRE license usage, showing exactly who is consuming a session, from which organization, and for how long. This table is especially useful for tracking resource consumption, validating session activity, and ensuring efficient allocation.

### Use Cases

With this report, you can:

- **Monitor active and historical sessions**: Review session-level details including user, email, session ID, machine ID, license source, organization, license type, start time, end time, and duration.

- **Apply advanced filters**: Use the search bar to look up sessions by user, session ID, or machine ID, and narrow results using filters for license source and organization.

- **Identify usage patterns**: Quickly spot clusters of short or long-running sessions and understand how execution resources are being consumed across teams.

When combined with the KRE License Usage chart, this table provides a complete view of how KRE sessions are allocated and used over time.

### How to View the Report

1. Go to **Admin Settings > Account > License Utilization**.
2. Under **Session-Based License Reports**, select **KRE – User Sessions**.
    - **User**: Full name of the user
    - **Email**: User's email address
    - **Session ID**: Unique identifier for the session
    - **Machine ID**: Identifier for the machine running the session
    - **License Source**: Organization or account where the license originates
    - **Organization**: Organization hierarchy the user belongs to
    - **License Type**: Type of KRE license being used
    - **Started**: Session start timestamp
    - **Ended**: Session end timestamp (if completed)
    - **Duration**: Total session duration
3. (Optional) Use the search bar to find a specific user, session ID, or machine ID.
4. (Optional) Apply filters using **License Source** and **Organization** to narrow the table to specific license sources or organizational units.
5. (Optional) Adjust the date range (based on the session **Started** date) to focus on a specific analysis period.
6. (Optional) Click **Export** to download all currently filtered data as a CSV file.

<br/>

<img src="https://tw-cdn.katalon.com/katalon-platform/admin/license-ultilization/kre-user-sessions.png" alt="Session-Based: KRE - User Sessions" width="1080"/>

<br/>

---

## TestCloud – License Usage

The **TestCloud License Usage** chart provides detailed visibility into your TestCloud license utilization patterns. This interactive visualization helps you monitor session resource usage, identify demand patterns, and optimize your license allocation to ensure efficient testing operations.

### Use Cases

This report helps you:

- Identify periods when testing demand approaches your license limits
- Discover underutilized resources that could be reallocated
- Plan capacity based on historical usage patterns
- Make data-driven decisions about future license investments

Interactive tooltips reveal detailed metrics when you hover over data points, allowing you to examine specific usage information without changing your view configuration.

### How to View the Report

1. Go to **Admin Settings > Account > License Utilization** (accessible from the cog icon in the upper-right corner).
2. Select **TestCloud – License Usage**.

    The chart tracks three essential metrics within the selected timeframe:
    - **Available Sessions**: Total TestCloud session licenses available during each time interval, using the most current allocation data.
    - **Peak Usage**: Maximum number of concurrent TestCloud sessions during each measured interval, revealing when your demand approaches capacity limits.
    - **Average Peak**: Average peak usage across time periods. For monthly views, this represents the average of daily peak usage values.

3. (Optional) Apply filters to refine your analysis by organization, date range, or time interval.
4. (Optional) Hover over the chart to view detailed data points.

<br/>

<img src="https://tw-cdn.katalon.com/katalon-testops/Administration and Licensing/Manage Accounts/License Utilization/Session Based TestCloud License Usage.png" alt="Session-Based: TestCloud - License Usage" width="1080"/>

<br/>

:::info Additional Information
The visualization highlights both usage gaps and demand spikes, enabling you to proactively manage your testing resources and optimize license allocation across teams and projects.
:::

---