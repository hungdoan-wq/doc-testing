---
title: Defect Status Analysis Report
sidebar_custom_props:
    image: https://tw-cdn.katalon.com/katalon-platform/ra/reports/Thumbnail-Defect-Status-Analysis.svg
---

This document explains how to use the **Defect Status Analysis Report** to monitor, analyze, and manage defect trends across projects. It provides an immediate understanding of defect distribution, by severity, priority, and resolution state, without the need to manually compile data.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/defect-status-analysis-report.png" alt="defect status analysis report" width="500px" />
<br/>

## Why Use This Report

- **View and assess defect distribution instantly** across severity, priority, and resolution categories.
- **Identify critical bottlenecks** through high-level analytics visualizations.
- **Allocate testing and development resources efficiently** based on data-driven insights.
- **Focus on active issues** using drill-down interactions.

## Explore the Report

<iframe src="https://demo.arcade.software/yvBxSTyKAeoRvhJO0ikJ?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" title="Defect Status Analysis Report" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" style={{ width: "100%", height: "400px", border: "none" }} >


1. Navigate to **Reports** > **All Reports** and select **Defect Status Analysis** from the report list.

2. **Select Scope and Filters**
   - Select the time period or iteration you want to analyze — options include **Time Range**, **Release**, and **Sprint**.
   - Default **Resolution State** filter is **Unresolved** to help you focus on open issues. You can adjust this to display both **Resolved** and **Unresolved** if needed.

3. **Review the Visual Analytics Section**
   The dashboard displays three **donut charts** summarizing defect counts by **Severity**, **Priority**, and **Resolution State**. The numbers are aggregated from your integrated ALM software, like Jira.

4. **Use Additional Filters**
   Expand **More Filters** have your data filtered by **Severity** or **Priority**. This helps narrow down the analysis to your preferred categories.

5. **Analyze the Donut Charts**
   Hover over each chart segment to view detailed **percentage** and **count** values.

6. **Drill Down into Details**
   Click on any segment (e.g., “High Priority” or “Resolved”) to filter the **Defect Details Table**. The table lists key fields and allows direct navigation to individual defects.

## Report Features

### **Visual Analytics**
   - Three **donut charts** provide visual breakdowns of defect distribution by:
     - **Severity** (Critical, High, Medium, and Low)
     - **Priority** (1, 2, 3, and 4; 1 is highest)
     - **Resolution State** (Unresolved, and Resolved)
   - Each segment displays both **percentage** and **count** values. Clicking each segment filters the drilldown table.
   - The **total defect count** (e.g., *339*) appears prominently at the center of the view, uniform across three charts, offering quick insight into overall defect volume. Clicking the segment won't affect this count.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/defect-status-analysis-report-defect-distribution-by-priority.png" alt="defect status analysis report defect distribution by priority" width="300px" />
<br/>

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/defect-status-analysis-report-defect-distribution-by-resolution.png" alt="defect status analysis report defect distribution by resolution" width="300px" />
<br/>

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/defect-status-analysis-report-defects-distribution-by-severity.png" alt="defect status analysis report defects distribution by severity" width="300px" />
<br/>

### Filtering Capabilities
   - **Scope Filter:** Switch between **Time Range**, **Release**, or **Sprint** to adjust your analysis scope.
   - **Resolution State Filter**: **Unresolved** (default) and **Resolved**.
   - **More Filters:** Expand to refine by **Severity** or **Priority**.  
   These filters work together dynamically, ensuring that visualizations and tables update immediately when filters are applied.

### Defect Details Table
   - Provides a **comprehensive list view** of all defects that match your filters.
   - Includes columns:
     - Created At  
     - Key (click to navigate to defect details)
     - Summary  
     - Severity  
     - Priority  
     - Status  
     - Resolved At  
     - Assignee  
   - Displays **10 rows per page** with pagination. 

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/defect-status-analysis-report-drill-down-table.png" alt="defect status analysis report drill down table" width="500px" />
<br/>