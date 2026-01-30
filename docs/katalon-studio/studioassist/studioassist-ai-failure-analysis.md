---
title: "StudioAssist AI Failure Analysis"
---

This document introduces **AI Failure Analysis**, available in HTML and email reports. The feature provides AI-generated explanations for test suite failure, helping you save time analyzing lengthy and technical log errors. It also explains how to enable the feature so you can use it in your HTML and email test reports.

:::info Requirements
- You have enabled **StudioAssist** and configure it with an AI service provider. See [Configure StudioAssist and AI providers](/katalon-studio/studioassist/studioassist-preferences).
:::

## Scope
- **Execution**: Starting from 10.4.3, you can enable this feature in tests executed via KRE by using the AI command options. See [AI execution arguments](/katalon-studio/execute-tests/katalon-runtime-engine/command-line-syntax-in-katalon-runtime-engine#ai-execution-arguments).
- **Analysis Target**: It only analyzes test cases that have a result of Failed or Error.
- **Report Level**: The analysis is provided at the test suite level. Detailed analysis for individual test cases is included *within* the generated test suite HTML report.

## Overview

Starting from Katalon Studio 10.4.0, AI-generated failure analysis, powered by StudioAssist, is  available in your **HTML and Email test reports.**
This feature automatically reads complex stack traces, identifies the root cause of failed test cases, and summarizes them in plain language. This helps you focus on fixing issues, not reading lengthy logs.

With AI insights in your reports, you can:

- Quickly diagnose failures in large executions with many failed tests.
- Prioritize the most critical issues affecting your test results.
- Streamline communication of test failures across your team (e.g., between QA and developers).
- Accelerate debugging and reduce reliance on developer assistance.

Refer to this table to understand how AI Failure Analysis works in HTML and email reports.

| Report Type | Scope | What AI generates |
| --- | --- | --- |
| HTML Reports | Test Suite & Test Case | Summarized suite-level failure causes and detailed analysis for each failed test case, including root cause, impact, and recommended actions. |
| Email Reports | Test Suite  | Concise summary of why the suite failed, ideal for quick reviews and status updates. |

## Enable AI Failure Analysis

You can enable AI failure analysis separately for HTML and Email reports.

:::note
- All AI-generated explanations are marked with an **AI tag** to distinguish them from original failure messages (non-AI).
:::

### HTML reports

Enable AI analysis in your **Project Settings**. The analysis can then be viewed in either **automatically generated** or **manually exported** HTML reports.

1. Go to **Project > Settings > Report**.
2. Select the checkbox **Analyze failed reason using AI,** then click **Apply  Close**. 
    - When selected: AI-generated explanations appear in the test suite summary and individual test case details.
    - When unselected: Reports display the original failure message.
    
    <img alt="Enable HTML AI failure analysis" src="https://tw-cdn.katalon.com/katalon-studio/create-test-cases/studio-assist/KS-10.4.0-AI failure analysis/ai-failed-reasons.png" width="700"/> 
    
3. After you run a test suite in Katalon Studio, you can view the AI-analyzed report using one of the following two ways:
- **Auto-generate report:** If automatic HTML report generation is configured, open the report that is generated immediately after execution is complete. See [Automatically generate reports](/katalon-studio/test-reports/view-test-reports/view-test-suite-and-test-suite-collection-reports-in-katalon-studio#automatically-generate-reports) for setup details.
- **Manual export:** Go to the **Results** tab, use the **Export report** dropdown to export the test results in HTML, then open the exported report. See [Manually export reports](/katalon-studio/test-reports/view-test-reports/view-test-suite-and-test-suite-collection-reports-in-katalon-studio#manually-export-reports) for step-by-step guide.

In both cases, you will see AI-generated explanations at both the **test suite summary** and **test case details** levels.

<img alt="AI HTML report" src="https://tw-cdn.katalon.com/katalon-studio/create-test-cases/studio-assist/KS-10.4.0-AI failure analysis/html-report-reuse.png" width="700" /> 

Click here to view a sample test suite report with AI analysis: [Sample test suite report (HTML) with AI faliure analysis.](https://tw-cdn.katalon.com/katalon-studio/create-test-cases/studio-assist/KS-10.4.0-AI+failure+analysis/test-report-sample-with-ai-analysis.html)

### Email reports

:::info Requirements
You have configured your mail server and email settings to receive email reports after test execution. See [Share test reports via email in Katalon Studio](/katalon-studio/test-reports/share-test-reports-via-email-in-katalon-studio#email-settings).
:::

1. Go to **Project > Settings > Email**.
2. Select the checkbox **Analyze failed reason using AI,** then click **Apply and Close**.
    - When selected: The test suite email includes an AI-generated explanation of the failure.
    - When unselected: The email displays the original failure message.
    
    <img alt="Enable email test report with AI failure analysis" src="https://tw-cdn.katalon.com/katalon-studio/create-test-cases/studio-assist/KS-10.4.0-AI failure analysis/enable-email-report.png" width="600" /> 
    
The test suite email will display a brief AI-generated summary of why the test suite failed.

<img alt=" Email test report" src="https://tw-cdn.katalon.com/katalon-studio/create-test-cases/studio-assist/KS-10.4.0-AI failure analysis/reuse-email-report.png" width="600" /> 

## Known limitations
- StudioAssist may take longer time to generate **HTML report**, and may not process every result. If it failed to generate the AI analysis, it will revert to displaying the original failure reason.
- The AI badge might still show up even if the failure reasons aren’t AI-generated. This can happen if AI analysis fails for **email reports** and the system falls back to the original message. You can verify this in the **Event Log**, which records that the failure reasons were not created by AI.