---
title: Configure Automated Test Run for Execution
---

This document shows you how to create, configure, and execute an **Automated Test Run** in **Katalon TestOps** to validate test behavior through automation.

Automated test runs enable you to **continuously and consistently validate your application** without manual effort. Instead of manually configuring and running test suites on your local machine, you can orchestrate automated test runs in **Katalon TestOps**, configure execution environments, schedule runs, and track results over time for high-level insights.

**Key benefits:**

- **Centralized execution**: All runs managed in **TestOps**, no need to rely on local machines.
    
- **Scalable environments**: Choose cloud-hosted or self-hosted agents depending on your infra.
    
- **Flexible triggers**: Run instantly or schedule to align with CI/CD pipelines, sprints, or releases.
    
- **Deeper insights**: Link test runs with releases, sprints, and builds to track quality trends.
    

## Get started: Configure and execute an automated test in UI mode

By default, you execute an automated test in **UI mode**. Compare to the **Command Line mode** (learn more at [Command-line mode](#command-line-mode)), this method is user-friendly, quick, no syntax needed, best for most teams who want a clear, form-based approach.

<img src="https://tw-cdn.katalon.com/katalon-platform/automated-test-run/test-run-type.png" alt="Test Run Types List" />
<br/>


Follow these steps to create a run with UI Mode:

<iframe
src="https://demo.arcade.software/oy5YidtG7PNrOGdgIU2l?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Create and run an automated test in UI mode"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

1. Go to **Executions > +Create > Create Automated Test Run**.
    
2. Fill in details:
    
    - **Test Run Name**
    - **Creator** (default: current user)
    - **Release/Sprint** (data from this run will be included in relevant analytics).
3. Select **Test Run Type**: Desktop & Mobile Browser, Mobile Native App, or Web Services.
    
4. Click **Select Tests** → pick test suites and test suite collections from the repository.
    
<img src="https://tw-cdn.katalon.com/katalon-testops/Execution/automated-execution/select-tests-screen.png" alt="Select test suites/test suite collections"/>
<br/>

5. Select a **Profile.**
    
6. Configure **environment configurations** depending on the type:
    
    - **Standalone suites**: You can configure multiple environments.
    - **Test Suite Collection (TSC)**:
        - **TSC** configurations are defined by the user in **Katalon Studio**.
            
        - When you select a **TSC** and schedule it in **TestOps**, the system will automatically apply the configurations that were previously set in Katalon Studio (including test suites, profiles, environments, and execution modes).
            
        - However, if you manually update any configuration of the **TSC** in **TestOps**, that **TSC’s** configurations will no longer sync with the one in **Katalon Studio**.
            

7. Click **Run Now** to create and execute the test. You will be redirected to the **Test Run Details** page, for monitoring purpose (learn more about managing test runs at ...).
    
<img src="https://tw-cdn.katalon.com/katalon-platform/automated-test-run/multiple-config.png" alt="Select multiple config for a test suite"/>
<br/>

## Basic configurations for automated tests

This section walks you through basic configurations for an automated test run. See [Advanced configurations](#advanced-configurations) section below to explore more configurations you may find useful for your project.

### Select test run types

When creating a test run, you must choose a **Test Run Type**. Choosing the correct type ensures that your tests are executed in the right runtime with the right dependencies. Each type corresponds to a different kind of testing environment:

- **Desktop & Mobile Browser**
    
    - For functional tests on web applications.
    - Runs across OS + browser combinations (e.g., Chrome on Windows, Safari on macOS).
- **Mobile Native App**
    
    - For testing Android/iOS apps.
    - Requires uploading the app (APK/IPA) and configuring devices/emulators.
- **Web Services**
    
    - For testing APIs and backend services.
    - Runs in your chosen local/cloud agent environment, validating requests and responses.
<img src="https://tw-cdn.katalon.com/katalon-platform/automated-test-run/test-run-type.png" alt="Test Run Types List" />
<br/>

### Self-hosted vs Cloud-hosted agents

A test run in **TestOps** requires you to configure how, where, and with what parameters the tests will execute. These configurations ensure that your automation adapts to your infrastructure, scales effectively, and produces reliable results.

**TestOps** test runs always rely on an execution agent—the runtime environment responsible for running your tests. The right choice depends on convenience, compliance requirements, and the infrastructure available to your team.

|**Self-hosted Agents**|**Cloud-hosted Agents (TestCloud)**|
|---|---|
|- Installed on your infrastructure (on-prem, VM, private cloud).<br/>    <br/>- Best for secure or restricted environments, or when you need tests to run inside your own network.<br/>    <br/>- Supports both UI Mode (Studio artifacts) and Command Line Mode (KRE/other frameworks).|- Managed by Katalon.<br/>    <br/>- Scales instantly across browsers, OS, and devices.<br/>    <br/>- Best for fast setup and zero maintenance.|

> **Rule of Thumb**:
> 
> - Use **Cloud-hosted** for convenience and scalability.
>     
> - Use **Self-hosted/KRE** for compliance, local dependencies, or CI/CD integrations.
>     

### Profiles

Profiles (from Katalon Studio Execution Profiles) let you **parameterize test data and environments**:

- Store variables such as URLs, credentials, API keys.
    
- Allow the same test suite to run across Dev, QA, Staging, or Prod-like setups.
    
- Selected in UI Mode via dropdown, or passed in CLI with executionProfile.
    

### Parallelize Test Cases

**For Test Cases**:

This toggle enables execution of individual test cases in parallel within a test suite or across multiple suites, maximizing usage of available sessions for speed and efficiency. Unlike Test Suite Collection (TSC) execution modes, this feature works at the test case level.

TestCloud optimizes resource allocation while maintaining a buffer of available sessions. For example, if you have 10 test suites each containing 10 test cases, TestCloud continuously analyzes the queue and distributes test cases across your available licenses until all are used.

**Note:** Your test cases must be independent to avoid unpredictable failures. To learn more, refer to this [document](/katalon-testcloud/parallel-test-case-execution).

**For Test Suite Collections:**

When **Parallelize Test Cases** is toggled on, the collection will default to **Parallelize Test Cases**. To choose the two run mode below, you have to untoggle **Parallelize Test Cases**.

- **Parallel mode**: Runs multiple test suites in parallel, limited by your available TestCloud session quota.
    
- **Sequential mode**: Runs one test suite after another.
    
<img src="https://tw-cdn.katalon.com/katalon-platform/automated-test-run/true-parallel.png" alt="True Parallel mode"/>
<br/>

## Command Line Mode

Execute Automated tests in **Command Line Mode** when:

- You need **more flexibility**, e.g., passing custom arguments.
    
- You run **non-Katalon frameworks** (e.g., Pytest, JUnit).
    
- You want consistency with existing **CI/CD scripts**.
    
<img src="https://tw-cdn.katalon.com/katalon-platform/automated-test-run/cli-mode.png" alt="CLI mode" />
<br/>


This mode supports any framework, and is highly customizable. You should be familiar to CLI and execution syntax.

> **Rule of thumb**
> 
> Start with **UI mode** for Katalon-managed tests, use **Command Line mode** when integrating with external tools or advanced CI/CD workflows.

To execute tests in this mode, instead of selecting tests in the UI, you configure commands:

1. On the **Create Automated Test Run** screen → choose **Command Line Mode**.
    
2. Select repository.
    
3. Provide commands:
    
    - **Katalon Commands**: For Katalon Studio/KRE tests. Use [Command Builder](https://www.notion.so/katalon-studio/execute-tests/katalon-runtime-engine/get-started-with-katalon-runtime-engine) for syntax help.
    - **Generic Commands**: For non-Katalon frameworks (e.g., Pytest).

## Schedule Automated Tests

As you finish setting up a test case, you can choose to execute them immediately, or schedule them for daily/weekly runs to see patterns and detect potential anomalies.

|**Run Now**|**Schedule**|
|---|---|
|- Immediately triggers execution.<br/>    <br/>- Best for ad-hoc validation or smoke checks.|- Delays or repeats the execution.<br/>    <br/>- Best for regression, nightly runs, or aligning with sprint/release cadence.|

Scheduling allows you to run the test in a future date/time, or have it run in specific intervals (daily, weekly, or custom cron schedule).

<img src="https://tw-cdn.katalon.com/katalon-platform/automated-test-run/schedule-run.png" alt="Schedule Test Run" width="500"/>
<br/>


## Advanced Configurations

After setting up your test run configurations, you can further customize how your tests behave through **Advanced Settings**. These options give you greater control over how tests are executed, including environment preferences, visual testing, and secure access to private or local applications.
  

<img src="https://tw-cdn.katalon.com/katalon-testops/Execution/automated-execution/advanced-settings-gen3.png" alt="Advanced settings section" width="1080" />
<br/>


- **Visual Testing**: Helps your application’s **UI looks correct**, not just functions correctly.  
    When enabled in a test run. Enable this when you need to catch **UI layout or design issues** across browsers, devices, and environments in addition to functional checks.
    
    - A **baseline screenshot collection** is created (first run).
    - Future runs **compare screenshots** against the baseline to detect visual changes.
    - Differences are flagged in TestOps, where you can **approve changes** (update baseline) or **reject them** (log as regressions).
    - For more information, please refer to the [Visual Testing document](/katalon-platform/analyze/analytics/visual-testing/visual-testing-overview#testops-visual-testing) for more information.
- **Katalon Runtime Engine Version**: Choose the version to ensure compatibility.
    
- **Private/Local Testing**: To customize how your tests connect to private or local environments, switch the **Private/Local Testing** toggle on.
    
    To run with **TestCloud Tunnel**, select **Private/Local Testing**, then choose a specific tunnel to execute the test or use **Auto-selected tunnel**. With the auto-select option, **TestCloud** will use the most available tunnel, prioritizing private tunnels over shared tunnels. For more information, please refer to the [TestCloud document](/katalon-testcloud/local-testing-with-testcloud).
    
    In case your tests also perform API calls, check the **Also Include API Calls** option.
    
    Alternatively, you can opt for the **TestCloud IPs Whitelisting** option. This allows **TestCloud** to directly access your app without a tunnel connection.