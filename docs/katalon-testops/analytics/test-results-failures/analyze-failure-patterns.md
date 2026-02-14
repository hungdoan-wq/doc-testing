# Analyze Failure Patterns

This document explains how to use the **Test Failures Analysis Report** to identify, diagnose, and prioritize failing or flaky automated test cases within a project’s execution history.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/Reports/test-failure-analysis-report.png" alt="Test Failures Analysis report" width="700px" />
<br/>

This report is especially useful when:

- A large number of tests fail in a single run
- You want to prioritize failures that occur most frequently
- You want to assess test stability over time

## Explore the Report

:::requirement
Any failed test cases in your concerned scope. Patterns are clearer with at least 10-20 failures.

:::endrequirement


<iframe src="https://demo.arcade.software/ZnMvdIDAd7bN0AbPGnv8?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" title="Test Failures Analysis Report" frameborder="0" loading="lazy" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" allow="clipboard-write" style="width:100%; height:70%"></iframe>

### Step 1: Navigate to the report

Go to **Home > All Reports > Test Failures Analysis Report**

### Step 2: Select scope and filters

Before analyzing patterns, scope your data to a relevant subset. Below are a few examples:

  - By time range:
    - Last 7 days: Recent failures and current sprint issues
    - Last 30 days: Broader pattern detection across multiple sprints
    - Custom date range: Target specific release cycles or deployment windows

  - Filter by test suite (optional): Narrow analysis to specific test suites if investigating targeted areas
    - Regression suite: Critical path failures
    - Smoke tests: High-priority basic functionality issues
    - Feature-specific suites: Isolated feature investigation

### Step 3: Prioritize test cases by failure rates

The histogram visualizes how many test cases fall within each failure rate range (e.g., 0–10%, 10–20%, etc.)
  - **High concentration at 100%** > Broken or invalid tests.
  - **Spread in 20–80% range** > Flaky or environment-sensitive tests. See [Investigate Flaky Tests](docs/katalon-testops/analytics/test-results-failures/investigate-flaky-tests.md) if you are in doubt that these tests are flaky.
  - **Low failure density (less than 10%)** > Generally stable tests.

The test faiures summary lists total executed test cases, failure counts, and [avg. failure rate](docs/katalon-testops/analytics/references/failure-metrics.md#average-failure-rate---test-failure-analysis-report) to help you quickly assess the data's current failure state.

For each failure rate group, note **Total occurrences** and **affected test count**: High occurrence counts (10+ failures) or large number of affected tests indicates high-impact issues worth prioritizing

### Step 4: View test case details for troubleshooting

Click on a test case to flag priority status, add notes and details, and assign a teammate to diagnose/take further action.

:::tip

Analyze failure patterns is one step in our recommended failure investigation workflow. See [Investigate failures](docs/katalon-testops/analytics/test-results-failures/investigate-test-failures.md) to understand how you can use TestOps capabilities to optimize your failure investigation process.

:::endtip