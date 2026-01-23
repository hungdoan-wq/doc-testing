---
title: TestOps – Seat-Based License Reports
---
This guide explains how to use **TestOps seat-based license reports** in **Katalon TestOps**. These reports help you monitor license allocation, activation, usage, and activity across your Account or Organization, enabling data-driven license management and optimization.

:::tip Requirements
You must be assigned the **Account Admin** role to access the reports described below.
:::

---

## Overview

Katalon TestOps provides three primary seat-based TestOps reports:

1. **License Assignment and Activation History** – High-level allocation and activation trends over time
2. **License Assignment Details** – User-level assignment and activity data
3. **License Usage** – Usage patterns and engagement trends

Each report serves a different purpose, from strategic planning to operational monitoring.

---

## TestOps – License Assignment and Activation History

The **License Assignment and Activation History** chart gives you a consolidated, time-based view of how TestOps licenses are purchased, assigned, and activated across your Account or Organization. This report is ideal for tracking growth, adoption, and overall license utilization efficiency.

### Use Cases

This report helps you:

- Identify gaps between purchased and assigned licenses
- Detect underutilized licenses (assigned but not activated)
- Spot peak demand periods that may require additional licenses

Interactive tooltips reveal detailed values for each metric at specific points in time, making it easy to explore trends without changing views.

### How to View the Report

1. Go to **Admin Settings > Account > License Utilization** (accessible from the cog icon in the upper-right corner).
2. Select **TestOps – License Assignment and Activation History**.

    The chart tracks three core metrics within the selected timeframe:
    - **Purchased**: Total licenses allocated to the selected organization. At the Account level, this reflects all purchased licenses.
    - **Assigned**: Total licenses assigned to users within the selected parent organization and all of its child organizations.
    - **Activated**: Total number of users who actively engaged with TestOps during the selected period, based on login events or usage triggers.
    :::note
    If multiple license purchases or reassignments occur within the selected timeframe, only the **latest record** is displayed.
    :::
3. (Optional) Apply filters to refine your analysis by organization, date range, or time interval.
4. (Optional) Hover over the chart to view detailed data points.

<br/>

<img src="https://tw-cdn.katalon.com/katalon-platform/admin/license-ultilization/testops-license-assignment-chart.png" alt="Seat-Based: TestOps - License Assignment and Activation History" width="1080"/>

<br/>

:::info Additional Information
- **User Activation** counts users who have logged in at least once after license assignment. Once activated, users remain counted in all subsequent periods until the license is revoked or reassigned.
- When a user is unassigned from a license, both assignment and activation counts are reset.
:::

<br/>

---

## TestOps – License Assignment Details

The **License Assignment Details** report provides a granular, user-level view of license allocation and activity. This table is especially useful for identifying inactive users, validating license usage, and ensuring cost-effective allocation.

### Use Cases

With this report, you can:

- **Monitor individual licenses**: View assignment dates, activation status, and license sources for each user.

- **Apply advanced filters**: Filter by Organization, license source, user name, or email.

- **Export data**: Download filtered results as a CSV file for offline analysis or reporting.

This level of detail helps you identify underused licenses and optimize distribution based on actual user behavior.

### How to View the Report

1. Go to **Admin Settings > Account > License Utilization**.
2. Select **TestOps – License Assignment Details**.
    - **User**: Full name of the user
    - **Email**: User's email address
    - **License Source**: Organization or account where the license originates
    - **Organization**: Organization hierarchy the user belongs to
    - **TestOps Project**: Associated TestOps project
    - **Last Assignment**: Most recent license assignment date
    - **Last Active Use**: Most recent date the license was actively used
3. (Optional) Apply filters or click **Reset Filters** to return to the default view.
4. (Optional) Click **Export** to download the data as a CSV file.
5. (Optional) Click a user name to open their [User Detail Page](/katalon-platform/administer/administration-and-licensing-alternate/manage-organizations/user-management).

<br/>

<img src="https://tw-cdn.katalon.com/katalon-platform/admin/license-ultilization/testops-assignment.png" alt="Seat-Based: TestOps - License Assignment Details Table" width="1080"/>

<br/>

---

## TestOps – License Usage

The **License Usage** chart visualizes how TestOps licenses are actually used over time. It complements assignment data by highlighting real engagement and activity trends.

### Use Cases

This report helps you:

- Visualize license assignment and usage trends over time
- Compare license utilization across teams or organizational units
- Identify underutilized licenses, peak usage periods, and low-engagement groups
- Detect gaps between allocated licenses and actual demand
- Assess adoption patterns to support informed license planning and purchasing decisions

### How to View the Report

1. Go to **Admin Settings > Account > License Utilization**.
2. Select **TestOps – License Usage**.
3. (Optional) Apply filters to focus on specific data by organization, date range, or time interval.
4. (Optional) Hover over the chart to inspect detailed metrics.

<br/>

<img src="https://tw-cdn.katalon.com/katalon-platform/admin/license-ultilization/testops-license-usage.png" alt="Seat-Based: TestOps - License Usage" width="1080"/>

<br/>

:::info Additional Information
- **Activity count** represents unique users performing any system action within a 24-hour period. Each user is counted once per day, and all counts reset at midnight.
:::

<br/>

---