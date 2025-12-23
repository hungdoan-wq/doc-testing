---
title: Smart Tags
---

This page explains how you can configure and use smart tags to quickly gain insights on automated test runs in **TestOps**.

## Overview

**Smart tags** are how **TestOps** flag troubling test cases based on their past run data. **Smart tags** include:

- **Flaky**
- **New Failure**
- **Always Fail**
- **Slow**
 

All **Smart Tags** are automatically labeled on executed test cases, once they fit criteria for each. You can also customize configurations for **Smart Tags**, such as **Time Windows**, **Minimum Executions**, **Flaky** tag, and **Slow** tag.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/smart-tags/testops-smart-tags.png" alt="testops smart tags" width="700px" />
<br/>

### Flaky Tag

This tag appears on tests with unreliable results.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/smart-tags/testops-flaky-tag.png" alt="testops flaky tag" width="500px" />
<br/>

**TestOps** calculates **Probabilistic Flakiness Score (PFS)** based on test run data, and compares the consistency of test results (passed/failed) against this score to determine a test case as “stable”, “potentially flaky”, or “highly flaky”:

| **Level** | **Meaning** | **Smart Tag** | **PFS Range (0.0 - 1.0)** |
| -- | -- | -- | -- |
| Consistent | Reliable tests with consistent, predictable behavior. | None | `0.0` - `0.2` |
| Potentially Flaky | Tests with minor to major inconsistencies, that could potentially cause development friction. | "Flaky" | `0.2` - `0.8` |
| Highly Flaky | Severely unreliable tests with frequent status changes, high retry rates, or persistent failure patterns, requiring immediate attention. | "Flaky" | `0.8` - `1.0` |

For more details on calculations for the **PFS**, see calculations section below.

You have two options, which should be selected depending on the stages of your project:

- Label both “potentially flaky” and “highly flaky” tests as **Flaky**.
 
- Label only “highly flaky” tests as **Flaky**.
 

### Always Fail tag

This tag appears on tests that repeatedly failed, within the configured **Time Window.** This helps detect persistent issues that require immediate attention.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/smart-tags/testops-always-fail-tag.png" alt="testops always fail tag" width="500px" />
<br/>

By default, the pre-configured **Time Window** is `30` days. You can set the value for this **Time Window** to fit the stages of your project.

### New Failure tag

This tag appears on tests that just had a new failed result. This helps flag newly broken tests for immediate troubleshooting and root cause analysis.

<!--img-->
<br/>

Test cases will be tagged **New Failure** if the following conditions are met:

- Tests that fail for the first time in the configured **Time Window**. Default **Time Window** is `30` days.
 
- The test case ran at least a minimum number of time configured in **Minimum Executions** in the **Time Window**. Default **Minimum Executions** is `5`.
 

### Slow tag

This tag appears on test cases with latest performance slower than most past runs. This helps detect regressions or environmental issues.

<img src="https://tw-cdn.katalon.com/katalon-platform/Analyze/smart-tags/testops-slow-tag.png" alt="testops slow tag" width="500px" />
<br/>

Test cases will be tagged **Slow** if the following conditions are met:

- The test case ran at least a minimum number of time configured in **Minimum Executions** in the **Time Window**. Default **Time Window** is `30` days, and default **Minimum Executions** is `5`.
 
- Most recent run has the run duration above the `99th` or `95th` percentile, compared to durations of all executions in the **Time Window**.

## Calculations for the Probabilistic Flakiness Score (PFS)

We calculate the **PFS score** by looking at how the test case behaves over time, not just how many times it passes/fails. Behind the scenes, we take into consideration the signals below:

- **Flip behavior**: how often the test case flips between passing and failing.
- **Retry behavior**: how often the test case retried.
- **Flakiness over time**: how “jumpy” the results are across the timeline.
- **Pass-fail balance**: whether the test is usually stable (almost always passes or almost always fails) or hovers somewhere in the middle.
- **How much data was gathered**: with more data, we are more confident in flakiness estimate.
 

All of these signals are combined to produce a single **PFS**. The score should falls between `0.0` and `1.0`, with `0.0` being most stable, and `1.0` being highly flaky.