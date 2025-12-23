---
title: Analytics & Trends Dashboard
---
This explains what the **Analytics & Trends** dashboard is, how to navigate it, and what its components are.

## Overview

The **Analytics & Trends Dashboard** gives you a consolidated view of your testing activities across your project. This visual interface aggregates key metrics and trends in one screen, enabling you to quickly assess overall project health, track completion rates, and identify testing bottlenecks.

## Navigate the Analytics & Trends Dashboard

<iframe src="https://demo.arcade.software/f0VLmGOddHTurxO8NByx?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" title="Analytics &amp; Trends Dashboard" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" style={{ width: "100%", height: "400px", border: "none" }} ></iframe>

Use the following steps to navigate and explore the **Analytics & Trends Dashboard** effectively.

1. **Access the Dashboard**  

    From the left sidebar, go to **Home** → **Analytics & Trends**.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/analytics-trends/testops-analytics-trends-dashboard-1.png" alt="testops analytics trends dashboard" width="700px" />

2. **Set your analysis scope**  

    The dashboard defaults to the _past 4 weeks_ with data aggregated at _weekly intervals_.  
    You can adjust the time range as needed to focus on a specific period or trend pattern.

3. **Review key quality metrics**  

    The dashboard displays essential quality and performance indicators compiled from multiple reports and aligned with your selected scope.

    See more details in the [Default widgets](#default-widgets) section below.

4. **Interact with the widgets**  

    - Hover over any chart segment to view detailed values.  
    - Expand each widget with the icon (**[ ]**) to access detailed information for any chart. You'll be able to view more comprehensive metrics and additional data. 
    - Use the **refresh** icon to update all widgets or individual ones with the latest data.
    - You could also navigate to each widget's full report by clicking on the link at the bottom of each **Widget Details** popup panel.
<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/analytics-trends/testops-analytics-trends-dashboard-check-relevant-report.png" alt="testops analytics trends dashboard check relevant report" width="500px" />
<br/>

5. **Customize your view**  

    Personalize the dashboard by adding, rearranging, or removing widgets to match your analysis needs. See some [Example dashboards](#example-dashboards) below for customization ideas.

6. **Share with your team**  

    Once your dashboard reflects the insights you need, share the customized view with your teammates or stakeholders to align on project quality status.

## Analytics & Trends Components

### Default Widgets

By default, this dashboard displays the following widgets (expand widgets to deep-dive into relevant reports):

**Test Health Big Number Widgets**: View counts of **flaky**, **always failing**, **new failing**, and **slow tests** to quickly assess the volume of problematic tests.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/analytics-trends/test-health-big-numbers.png" alt="testops analytics trends dashboard" width="700px" />

**Test Execution Results Distribution**: View the distribution of test results across all statuses (Passed, Failed, etc.), including the total execution count and percentages in a pie chart.

**Test Execution Results Trend**: Track daily test execution results with a breakdown of passed, failed, error, incomplete, blocked, and skipped tests in a stacked bar chart.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/analytics-trends/testops-analytics-trends-dashboard-test-execution-results-widgets.png" alt="testops analytics trends dashboard test execution results widgets" width="700px" />
<br/>

**Test Coverage by Configuration**: View test execution coverage across operating systems and browsers, showing the execution count for each.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/analytics-trends/testops-analytics-trends-dashboard-test-coverage-widget.png" alt="testops analytics trends dashboard test coverage widget" width="500px" />
<br/>

**Defects Activity Trend**: Track the daily number of defects created (bar), closed (bar), and the accumulated number of open defects (line) over time in a combined line and bar chart.

**Open Defects Distribution by Priority**: View the total count of open defects, categorized by priority levels (e.g. High, Medium, Low) in a pie chart.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/analytics-trends/testops-analytics-trends-dashboard-defects-activity-charts.png" alt="testops analytics trends dashboard defects activity charts" width="700px" />
<br/>

**Test Cases Publishing Activity**: Track the daily publishing activity of test cases. Shows the number of test cases in each publishing status (e.g., Draft, Review, Published) for all test cases created or edited within the selected time range in a stacked bar chart.

**Published Test Cases Distribution by Type**: View the distribution of published test cases, categorized by type (Manual only, Automated only, Manual & Automated) in a pie chart.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/analytics-trends/testops-analytics-trends-dashboard-test-case-publishing-activity-charts.png" alt="testops analytics trends dashboard test case publishing activity charts" width="700px" />
<br/>

### Customize Analytics & Trends Dashboard

You can edit the **Analytics & Trends Dashboard** to tailor layout to your team's needs.

1. Go to its **Settings** by clicking on the gear icon in the top right corner of the dashboard.

2. Click on **Edit dashboard**. The screen displays the widgets that you can add or remove from the dashboard.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/overview/testops-reports-and-analytics-customize-dashboard-button.png" alt="testops reports and analytics customize dashboard button" width="300px" />
<br/>

3. Add a widget by dragging it from the **Widget Library** to a free space in the editable dashboard, or remove it by clicking **Delete**.

<iframe
src="https://demo.arcade.software/78CtGDRGRQp0Hva3lvwA?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Analytics & Trends Dashboard - Widgets"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

4. Click **Save** apply the changes, or click on **Discard Changes** and confirm the changes.

You can click on **Settings > Use Katalon's Template** to reset the dashboard to its default layout.

### Custom Widgets

You can create your own custom widgets when existing widgets don't address your particular questions. Create widgets to track custom KPIs, analyze specific subsets of data, or visualize trends unique to your workflows, without waiting for product updates.

:::note
- Custom charts are project-scoped and currently support the **Test Execution Results** dataset only. Additional datasets and chart types will be supported in future releases.
:::

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/analytics-trends/analytics-trends-custom-widget.png" alt="analytics trends custom widget" width="500px" />

Steps:

1. In **Analytics & Trends Dashboard**, click **Settings > Create Custom Chart**.
2. Use the chart builder to choose chart types and configure metrics. Preview your chart live before saving.
3. Save your custom chart to the **Widget Library** under the **Custom** category. Once saved, drag and drop the chart into your dashboard. Once added to the dashboard, the widget auto-adjusts to the dashboard’s selected time scope and interval.

<iframe
src="https://demo.arcade.software/9NHW1keGFIfbN3zAtdw0?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Create Custom Widget for Analytics and Trends Dashboard"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

Example uses:

- **Team Performance Dashboard**: Bar chart showing each member's execution **count** and **average pass rate**.
- **Sprint Velocity Tracking**: Line chart displaying **daily test runs**, filtered to your current sprint.
- **Cross-Browser Coverage**: Pie chart showing **test case distribution** across browsers and OS combinations.
- **Detailed Execution List**: Table with raw data, showing **test case name**, **status**, **executor**, **duration**, and **datetime**, filtered by recent runs.
- **Test Suite Summary**: Table with aggregated data, displaying **execution counts**, **pass rates**, and **average duration**, filtered by test suite.

## Example dashboards

This section lists example dashboards that you can customize to fit your needs.

### Scenario 1 - Sprint Quality Overview

Replace current widgets with:

- For **Test Execution Analysis** purpose: _Test Execution Results Distribution_, _Test Execution Results Trend_, _Test Execution Pass Rate by Test Type_
- For **Quality Assessment** purpose: _Open Defects Distribution by Priority_, _Defects Activity Trend_, and _Error Distribution by Failure Category_ (Optional).
- For **Test Activity Analysis** purpose: _Test Cases Summary by Publishing Status_ and _Test Cases Publishing Activity_.

The sprint story flows top-to-bottom:

    1. Execution results & trends
    2. Defects level and movement
    3. Test authoring & publishing progress

<iframe
src="https://demo.arcade.software/KKYLEt5vvySKLCLhQcUd?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Analytics & Trends Custom Dashboard - Sprint Quality Overview"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

### Scenario 2 - Release Readiness / Stabilization

Replace current widgets with:  

- For **Test Execution Analysis** purpose: _Test Execution Results Trend_, _Test Failures Summary_, and _Test Runs Distribution by Status_
- For **Quality Assessment** purpose: _Defects Activity Trend_, _Open Defects Distribution by Priority_, and _Defects Distribution by Severity_
- For **Coverage Analysis** purpose (optional but recommended): _Test Coverage by Configuration_

Release readiness flows top-to-bottom:

    1. Execution pass rate & failure trends
    2. Open defects risk by priority and severity
    3. Platform coverage to confirm key configurations are tested

<iframe
src="https://demo.arcade.software/BnDbDKAjpJF4lSSfJLLE?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Analytics & Trends Custom Dashboard - Release Readiness / Stabilization"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

### Scenario 3 - Coverage & Platform Gaps

Replace current widgets with:  

- For **Coverage Analysis** purpose: _Test Coverage by Configuration_, _Test Executions Summary by Configuration_, and _Test Coverage Distribution Top 10 by Configuration_ (if available)

- For **Test Execution Analysis** purpose: _Test Execution Results Distribution_

Arrange them so coverage analysis flows top-to-bottom:
    1. Overall configuration coverage
    2. Execution volume per configuration
    3. Top under- or over-tested configurations
    4. Result distribution to relate coverage with pass/fail rates

<iframe
src="https://demo.arcade.software/pdHyIxgJolLuYefnjLYo?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Analytics & Trends Custom Dashboard - Coverage & Platform Gaps"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

### Scenario 4 - Test Authoring & Automation Progress

Replace current widgets with:

- For **Test Activity Analysis** purpose: _Test Cases Summary by Publishing Status_, _Test Cases Publishing Activity_, _Published Test Cases Distribution by Type_ (Automated vs Manual)

- For **Test Execution Analysis** purpose (optional): _Test Runs Summary by Type_ (Manual / Automated)

Arrange them so the authoring story flows top-to-bottom:
    1. Overall test case status (Draft, In Review, Published)
    2. Publishing activity trend over time
    3. Split between Automated and Manual tests
    4. (Optional) Execution volume by test type to confirm automation is being run

<iframe
src="https://demo.arcade.software/LgGPZHvXG3hdNfGUlOGV?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Analytics & Trends Custom Dashboard - Test Authoring & Automation Progress"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>