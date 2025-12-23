---
title: Release Health Dashboard
---

This document explains what the **Release Health Dashboard** is, how to navigate it, and what its components are.

## Overview

The **Release Health Dashboard** helps you evaluate the overall quality and readiness of your **Sprint** or **Release**. Instead of gathering data from multiple reports, this dashboard consolidates execution results, defect status, requirement coverage, and configuration coverage into a single, actionable view.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/release-health/testops-release-health-dashboard-1.png" alt="testops release health dashboard" width="700px" />

The dashboard also allows you to configure how readiness is automatically calculated using customizable quality thresholds.

## Navigate the Release Health Dashboard

<iframe src="https://demo.arcade.software/nkueT4g5pU4aiugHY0Xo?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" title="Release Health Dashboard" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" style={{ width: "100%", height: "400px", border: "none" }} ></iframe>

1. Go to **Home** > **Release Health**.
2. Select the **Release** or **Sprint** you want to assess from the dropdown.
3. At the top of the dashboard, you will see:
    - **Readiness** status
    - **Start / End date** of the iteration
    - **Description** (if added in the Plan)
    - A **Configure** button for managing **Readiness Criteria**
4. Explore the key widgets, grouped by area:
    - Key metrics:  
        **Requirement Coverage**, **Test Execution Pass Rate**, **Blocking Defects by Priority**, **Blocking Defects by Severity**
    - Test Case Distribution:  
        **Test Case Distribution by Execution Status**
    - Defect monitoring:  
        **Open Defects Distribution by Priority** and **Severity**
    - Requirements:  
        **Requirement Coverage Summary** and **Requirement Coverage Trend**
    - Platform coverage:  
        **Test Coverage by Configuration**
5. For each widget, you can:
    - Click the **Expand icon ([ ])** to open the related detailed report
    - Click the **pencil icon** on threshold-based metrics to highlight the widgets that impact that metric

## Configure Readiness Criteria

You can configure readiness thresholds directly from the **Release Health Dashboard**.  
Click **Configure** (next to the iteration description) to open the **Configure Readiness Criteria** modal.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/release-health/testops-release-health-dashboard-configure-button.png" alt="testops release health dashboard configure button" width="200px" />

The modal allows you to customize:

- **Requirement Test Coverage (%)**  
    Minimum percentage of requirements that must have linked test cases.
- **Test Execution Pass Rate (%)**  
    Minimum percentage of executed tests that must pass.
- **Issue Criteria (ALM-based Defect Blocking Rules)**  
    Count of unresolved defects linked to the iteration.  
    You can configure thresholds by **priority** and **severity**, and toggle each rule on or off.  
    These require integration with your ALM (e.g., Jira, Azure DevOps).

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/release-health/testops-release-readiness-dashboard-configure-criteria.png" alt="testops release health dashboard configure criteria" width="500px" />

Changes made in this modal apply **specifically to the selected Release/Sprint** and will no longer be overwritten by **project-level settings**.

## Release Health Components

Below are the key components available in the **Release Health Dashboard**.

### Release Readiness Metrics

The Release Readiness indicator provides an at-a-glance evaluation of whether your **Release** or **Sprint** meets all configured quality thresholds.

Color indicators:

- **Ready (Green):** All criteria met
- **At Risk (Orange):** One or more criteria fail

The readiness assessment is based on:

- **Requirement Coverage**  
    Percentage of requirements with linked test cases
- **Test Execution Pass Rate**  
    Portion of executed tests that passed out of total planned tests
- **Blocking Defects by Priority**  
    Unresolved defects matching configured priority levels
- **Blocking Defects by Severity**  
    Unresolved defects matching configured severity levels

Each criterion is marked **Ready** or **At Risk** depending on whether it meets the configured threshold.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/release-health/testops-release-health-dashboard-metrics.png" alt="testops release health dashboard metrics" width="700px" />

### Widgets

The widgets below provide detailed breakdowns of the release’s quality indicators and link to relevant reports for deeper investigation.

- **Test Case Distribution by Execution Status**  
    Groups test cases by latest execution result to help assess testing progress and risk.
- **Open Defects Distribution by Priority / Severity**  
    Shows all unresolved defects grouped by priority and severity.
- **Requirement Coverage Summary**  
    Categorizes requirements into:
    - **Fully Covered:** Linked tests published and passed
    - **Partially Covered:** Linked tests exist but results vary
    - **Not Covered:** No linked published test cases
- **Requirement Coverage Trend**  
    Visualizes weekly progress of **test coverage**, **execution coverage**, and **pass coverage**.
- **Test Coverage by Configuration**  
    Displays execution distribution across operating systems, browsers, and devices.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/release-health/testops-release-health-dashboard-widgets.png" alt="testops release health dashboard widgets" width="700px" />

All widgets support:

- **Expand icon (↗)** to open a related detailed report
- **Pencil icons** on metric widgets to highlight which widgets contribute to that metric