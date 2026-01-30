---
title: How to execute test cases in Katalon Studio
---

This document shows you steps to execute test cases, test suites, and test suite collections in **Katalon Studio**.

## Execute a test case

If you haven't created a test case see [Create test case overview](https://docs.katalon.com/katalon-studio/create-test-cases/create-test-case-overview) for more details.

Check out our interactive guide on how to execute a test case:

<iframe
  src="https://demo.arcade.software/SfT0nA3PbWoDcmY86JPM?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
  title="Execute a test case"
  frameborder="0"
  loading="lazy"
  webkitallowfullscreen
  mozallowfullscreen
  allowfullscreen="true"
  allow="clipboard-write"
  style={{ width: "100%", height: "500px", border: "none" }}>
</iframe>

Refer back to our written step for reference:

1. Open a test case or a test suite.
2. Either select an environment by clicking the arrow next to the **Run** button, or click the **Run** button to run the test in the [default environment](/katalon-studio/manage-projects/project-settings/execution-settings-in-katalon-studio).

<img alt="test suite execution information in Katalon Studio" src="https://tw-cdn.katalon.com/katalon-studio/execute-test/katalon-studio-test-run-button.png" width="500px" />

Learn more about environments at [Configure Environment for test cases](/katalon-studio/execute-tests/headless-browsers-execution-in-katalon-studio)

For test suites or dynamic test suites, you can also execute them in console mode using [**Katalon Runtime Engine**]. See [Command-line syntax in Katalon Runtime Engine](https://docs.katalon.com/katalon-studio/execute-tests/katalon-runtime-engine/command-line-syntax-in-katalon-runtime-engine) for more details.

## Execute a test suite

If you haven't created a test suite, see [Manage test suites in Katalon Studio](https://docs.katalon.com/katalon-studio/manage-test-artifacts/manage-test-suites-in-katalon-studio) for more details.

For test suites and dynamic test suites, **Katalon Studio** allows you to configure variables like timeout, retry to help detect flaky tests.

Check out our interactive guide:

<iframe
  src="https://demo.arcade.software/9SNSJTZw9fgWsp6gMXoO?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
  title="Execute a test suite"
  frameborder="0"
  loading="lazy"
  webkitallowfullscreen
  mozallowfullscreen
  allowfullscreen="true"
  allow="clipboard-write"
  style={{ width: "100%", height: "500px", border: "none" }}>
</iframe>

Refer back to our written step for reference:

1. Open a test suite or a dynamic test suite.
2. Expand **Execution Information section** and configure these values:

	- **Implicit timeout** (in seconds): time duration **Katalon Studio** waits for a page to load. This helps to prevent flaky tests caused by slow page loads.
		- **Use default**: Use the predefined default value in **Project Settings > Execution > Default**.
		- **User define**: Set a custom waiting time.

	- **Retry**: retry behavior when a test case fails.
		- **Retry failed executions immediately**: default number is 0. If **Katalon Studio** sees a failed test case, it will try to rerun the test case right away for the number of time you put before moving on.
		- **Retry after executing all** > **Retry all executions**: default is blank. **Katalon Studio** will re-run all test cases in the suite.
		- **Retry after executing all** > **Retry failed executions only**: **Katalon Studio** will re-run only failed test cases in the suite, for the number of time you specify.

<img alt="test suite execution information in Katalon Studio" src="https://docs.katalon.com/be4e4860-64ab-11ed-a602-0242cfbc79b5/ks-execution-information.png" width="700px" />

3. Add emails to the **mail recipient** list to send reports to recipients besides the ones in [the default list](/katalon-studio/test-reports/share-test-reports-via-email-in-katalon-studio).

4. Click the **Run** button or the arrow button next to it to choose an environment.

If you don't think a test case should run in a suite, you don't have to remove it. See [Skip test cases in a test suite](/katalon-studio/execute-tests/skip-test-cases-in-katalon-studio) to learn how to skip test cases in a test suite.

Katalon Studio automatically consolidates reports in JUnit, HTML, PDF, and CSV formats. Browser-based or window-based videos are also recorded.

<img alt="test suite execution information in Katalon Studio" src="https://tw-cdn.katalon.com/katalon-studio/execute-test/test-suite-reports-folder.png" width="700px" />

## Execute a test suite collection

If you haven't created a test suite collection, see [Manage test suite collections in Katalon Studio](https://docs.katalon.com/katalon-studio/manage-test-artifacts/manage-test-suite-collections-in-katalon-studio).

Check out our interactive guide:

<iframe
  src="https://demo.arcade.software/45gzVKN3PA68QDWrkqre?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
  title="Execute a test suite collection"
  frameborder="0"
  loading="lazy"
  webkitallowfullscreen
  mozallowfullscreen
  allowfullscreen="true"
  allow="clipboard-write"
  style={{ width: "100%", height: "500px", border: "none" }}>
</iframe>

Refer back to our written steps for reference:

1. Open a test suite collection.
    
2.  Select **Sequential** or **Parallel** mode:
	- **Sequential mode**: executing one test suite after another.
	- **Parallel mode**: executing multiple suites at the same time:
		- **Max concurrent instances**: The maximum number of test suites running at the same time.
		- **Delay between instances (in seconds)**: The delay is applied when a running test suite finishes and a parallel slot becomes available. The system then waits for the configured delay time, then starts the next pending test suite.
    
<img alt="katalon studio's test suite collection configurations" src="https://docs.katalon.com/be5c0400-64ab-11ed-a602-0242cfbc79b5/ks-852-execution-information.png" width="700px" />
    
1. For each test suite, make sure to configure these:
    - **Run with**: choose an **execution environment**.
    - **Profile**: choose a profile.
    - **Run**: test suites are selected by default. Unselect it if you want to skip it.
    
2. Once you are done, save your test suite collection and click **Execute**.
    
<img alt="the execute button in a test suite collection" src="https://docs.katalon.com/be27fbb0-64ab-11ed-a602-0242cfbc79b5/ks-test-suite-collection-execute.png" width="700px" />
