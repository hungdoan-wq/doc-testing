---
title: 'Katalon Studio Release Notes: Version 11.x'
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Version 11.0.0 (Latest Version)
Release date: January 26, 2026

### Overview
This release delivers a major platform and dependency upgrade, introduces official support for Recorder Plus and Automated Code Migration tool, adds powerful new capabilities such as Smart Mobile Recorder, Katalon Studio Tracer, StudioAssist Agent profile, and new MCP tools. It also includes UI enhancements and extensive fixes across StudioAssist, test execution, WebUI and mobile testing, significantly improving overall performance, stability, and reliability.

### New features
- Upgrade to Java Eclipse Temurin 21 LTS.
- Upgrade to Selenium 4.39.
- Upgrade Appium Java Client to 10.0.0.
- Upgraded Cucumber runtime to version 7.
- Introduced **AI Mobile Self-healing** - an AI solution to suggest alternative locators when existing mobile test object locators fail, using current locator values and metadata. See [AI self-healing](/katalon-studio/maintain-tests/self-healing-tests-in-katalon-studio#classic-self-healing-and-ai-self-healing).
- Introduced **Smart Mobile Recorder** - an upgraded experience for recording mobile app interactions. The feature allows you to capture user live actions, and generate test steps automatically. Learn more at [Smart Mobile Recorder](/katalon-studio/record-and-spy/mobile-record-and-spy-utilities/smart-mobile-recorder).
- Introduced **Katalon Studio Tracer** - a trace-recording capability that captures DOM snapshots, network activity, console logs, and browser state to help debug test failures and flaky behavior. Learn more at [Katalon Studio Tracer](/katalon-studio/maintain-tests/katalon-studio-tracer).
- Introduced **AI Recording Agent** (beta) in **Web Recorder Plus** - converts natural-language scenarios into structured test cases and allows seamless switching between AI-driven and manual recording within a single session. Learn more at [Generate a Web UI test case with AI](/katalon-studio/record-and-spy/webui-record-and-spy-utilities/katalon-web-recorder-plus#generate-a-web-ui-test-case-with-ai).
- [StudioAssist | Agent mode]:
  - Added a new MCP toolset for WebUI testing. See [WebUI tools](/katalon-studio/studioassist/mcp-servers/katalons-built-in-mcp-servers#webui-tools).
  - Added `updateInternalTestData` and `getInternalTestDataDetails` to **Test Data** MCP toolset.
  - Introduced **Agent profile** - where you can add custom instructions for StudioAssist to apply in a specific testing scenario. This feature allows team that shares a Katalon Studio project to get consistent AI responses aligned with their test framework. Learn more: 
- Added new Mobile keywords:
  -  `Mobile.scrollToTextHorizontal`. See [[Mobile] Scroll to text horizontal](/katalon-studio/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-scroll-to-text-horizontal).
  -  `Mobile.findElements`. See [[Mobile] Find elements](/katalon-studio/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-find-elements).
  -  `Mobile.swipeWithDuration`. Refer to [[Mobile] Swipe with duration](/katalon-studio/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-swipe-with-duration).
- **API test generation and report viewing with AI** - Import your OpenAPI file to have Katalon’s AI agent automatically generates tests, executes them, and provides a results report. Learn more at [API test generation and report viewing with AI](/katalon-studio/create-test-cases/generate-api-tests-with-ai-beta#api-test-generation-and-report-viewing-with-ai).


### Enhancements
- Introduced a new and enhanced look for **Log Viewer and Job Progess**: Cleaner, more accurate logs that better reflect real execution behavior and help users navigate failure points faster. (attached images)
  - Added an **Execution Viewer** toggle in **Project Settings** to enable or disable the new UI.
  - Refined **Log Viewer** to make debugging and analysis clearer.
  - Removed generic or misleading error messages when no root cause is found.
  - Updated test execution architecture for improved performance.
- Improved variable binding by enabling one-click application of test-case-level binding across all test cases in a test suite.
- [StudioAssist] Added the ability to review, undo file changes, and view them in a diff view. Learn more at [Review and revert file changes](/katalon-studio/studioassist/studioassist-agent-mode#review-and-revert-file-changes).
- Updated onboarding flow: removed initial welcome dialog and disabled Web Recording Tour when using Katalon Web Recorder Plus.
- Added Chrome 144, Edge 144, and Firefox 147 compatibilities.
- Added new migration recipe **Migrate from Studio 10.x to 11.x** to help automatically migrate projects from version 10 to 11, including Cucumber 3 to Cucumber 7 migration.
- [Security Compliance]:
  - Upgraded `poi-ooxml-3.17.jar` to version 5.2.3.
  - Removed unused BouncyCastle cryptography library bundle.


### Changes
- **Web Recorder Plus** is now officially supported for general users.
- **Auto-migrate scripts** now officially supported.
- [UI] Moved **AI Configuration** to a separate top-level section in **Katalon Studio Settings** instead of being located within StudioAssist.
- [UI] Re-organized components inside StudioAssist chat window.
- [UI] Web Recorder Plus settings is moved from **Beta Features** section to **Recorder**. 
- Removed the redundant option of BDD: Run as 1 Cucumber Feature.
- No longer provides a separate free package of Katalon Studio. Free users can continue use the same package after trial ends.
- When creating new test suites, Test Case-level variable binding is now enabled by default, so your test suites work immediately without additional configuration. To use suite-level binding instead, uncheck "Use Variables and Binding at Test Case" and check "Use Variables and Binding at Test Suite".
- [Web Service] Removed support for OAuth 1.0 Authentication. If your web services use OAuth 1.0, migrate to OAuth 2.0 authentication.
- [Web Service] Removed support for WADL import.
- Replaced the SWT browser with Equo Chromium for internal web views, ensuring more consistent rendering and behavior across Windows, macOS, and Linux.
  

### Fixes
- [Mobile] Unable to perform the Click action on Android devices.
- [Mobile] Fixed an issue where tap actions were executed on the wrong element.
- [Mobile] Unable to use keyword in the Browserstack remote platform.
- [Mobile] The Tap and Hold input dialog still executed the action even when users clicked **Cancel**.
- [Mobile] The Test Object locator was not updated after edits were made to the object properties.
- Error while creating project and importing API.
- The `validateOpenAPIAgainstSpecification` keyword did not work as expected.
- Large BDD projects experienced poor performance during the **Loading BDD scripts** step.
- Error thrown when closing or switching between BDD projects.
- [StudioAssist]: 
  - Chatbot occasionally became blank after users submitted a question, causing the question to disappear.
  - When Auto-tagging was enabled and managed by Admin, the **Generate Code** feature would fail with an error message *"AiAutoTagSettingProvider is not set"*.
- Smart Wait did not work when running via **Run** or **Debug from here**.
- When running test suites, global variables would not load correctly if a non-default execution profile had been set as the default profile.
- Added automatic rerun file generation for failed BDD scenarios, enabling selective rerun of failed Cucumber tests.
- You can now specify packages for step definitions in **Project Settings > Cucumber** instead of using `CucumberKW.GLUE`. Also added a feature file scanning option to choose between **Scan on project open** or **Scan on file open**.
- Websites failed to load or only partially loaded when Katalon Smart Wait Utility or Katalon Studio extensions were enabled.
- Retry mechanisms did not work when executing a test suite collection in KRE.
- Keyword proposal in Script view did not work.
- [AI Self-healing]:
  - `Could not find satisfiable constructor in com.kms.katalon.ai.core.services.ILlmService` error when using AI self-healing.
  - KSE showed a long path error even though the previous run completed without issues.
- [UI] Multiple help icons were displayed on Web Service requests, dynamic test suites, and test suite collection editors.
- [UI][macOS] The *"Click here to fix the broken test object"* link did not appear in the **Log Viewer** when a test failed with a `WebElementNotFoundException`.
- [macOS Tahoe 26.1] When selecting multiple lines of text in the **Script Editor**, only the first line appeared as selected.
- [macOS] An "internal error occurred during: Indexing project" error appeared when opening projects.
- Users were unable to login to Katalon Studio with SSO because the login dialog would remain open even after successful authentication to TestOps, blocking access to the application.
- [Spy Plus] Switching between Chrome and Edge browsers would cause Spy Plus to stop capturing test objects.
- [Spy Plus] Entering a different website URL during recording or spying would cause Spy Plus to insert the "close browser" command at an incorrect position.
- [Recorder Plus] When using Active Browsers mode, recording sessions would continue capturing actions even after clicking the stop button.
- [Web Recorder] The `navigateToURL` keyword was not automatically added after `openBrowser` when recording on a new browser for certain web pages.
- The editor froze when opening large Groovy files (10,000+ lines) while in debug mode.
- [Windows] The editor frequently hung when switching to script mode and typing "do" without quotation marks.
- When copying and pasting a step with an input value in the Web Recorder and then changing that input value, the object path in the saved script was missing the folder path.

### Known limitations
- Due to incompatibility between Sikuli 1.0.2 and Java 21, using `WebUI.click` and `WebUI.setText` on an image will return an error.
- [BDD testing]:
  - Background steps no longer appear in Cucumber HTML reports due to Cucumber 7's implementation.
  - Test-run-level hooks information does not appear in Cucumber reports. The Hooks section in reports remains empty even when test-run-level hooks are executed.
- [WebUI MCP tools]: 
  - Cannot run multiple concurrent browser sessions on Safari.
  - The `webUITakeAccessibilityTreeSnapshot` tool is not available when working with Safari.
- [AI self-healing]:
  - AI self-healing might have issues finding the element with the image locator.
  - In some cases, AI Self-Healing may not be triggered promptly when standard self-healing fails.
- [UI] Button hover causes layout expansion and visual misalignment.
- [Spy] Selected locator behaves incorrectly when finding element by attributes.
- [Web Recorder Plus]:
  - Changes are not saved when disabling **Enable Smart Locator** option in **Web Recorder Engine Settings**.
  - Unable to record with Edge Chromium. Workaround: Go to **Katalon Studio > Settings... > Recorder** and click **Apply and Close** again, then retry.
- In Web Recorder Plus and Smart Mobile Recorder, custom keywords added during a recording session were not saved to the generated test case and could be removed automatically.
- [Smart Mobile Recorder]:
  - When saving, some variables have their type unexpectedly changed to `Method call` or trigger an *“invalid test case”* error.
  - Number-type variables with very large values are converted to “infinity” and then show as `null` on save.
  - If the default locator doesn’t match any element, using Image locator’s Take Screenshot throws an error.
  - Saving a test case that includes a NULL-type variable (with default value NULL) throws a Java error about `defaultValue` being null and stops saving.
  - NULL-type variables with null default values are silently dropped when saving the script.
  - On iOS (UIKitCatalog), recorded tap steps on list items (XCUIElementTypeStaticText) show as recorded but no actual tap occurs on the simulator.
  - In iOS (UIKitCatalog), **Interactive mode** taps sometimes hit the wrong element (e.g., tapping Slider section actually triggers ProgressView). This can also cause capturing the same object multiple times.
  - In iOS (UIKitCatalog 2.13), the highlight rectangle is drawn in the wrong position when hovering/moving the cursor over test objects.
  - Old Mobile Recorder shows outdated iOS device versions when using TestCloud devices.
  - Using **Verify and Highlight** with a “Custom locator” throws an error indicating that custom locator isn’t supported.
  - When starting with TestCloud, if the Appium-device connection is slow or times out, the Recorder dialog appears but the **Device View** never shows. No clear timeout error is presented.
  - Recorder UI does not reflect in the 2nd monitor. Device dialog cannot display the action button.
  - In **Interactive mode**, when an in-app dialog is shown, tapping outside it (which should dismiss the dialog) times out and no step is recorded—even though in emulator that tap would close the dialog.
  - If a locator matches multiple elements, neither **Interactive mode** nor manual mode performs a click.
  - In **Interactive mode**, function keys such as `Shift`, `Tab`, etc. get sent into the text field as actual input.
  - [UI] When using Image locator → Take Screenshot → Highlight, an error appears (since Image locator isn’t supported yet), but the error message text overflows/overlaps the dialog bounds.
  - [UI] The Device dialog appears too large with lots of unused white space by default.
  - `getElement` keywords (`getElementLeftPosition`, `getElementTopPosition`, `getElementWidth`, `getElementHeight`) always attempted to locate elements using XPath, even when the Test Object was configured to use Attribute as the default locator. 
  - For “Tap and Hold” duration input, the dialog allows choosing complex types (Global Variable, Variable, etc.), but the recorder doesn’t support them, resulting in recorded steps always having zero duration.
- [Katalon Studio Tracer]:
  - Help text for `katalon -help trace` is missing, so users cannot see the documented list of Tracer CLI parameters and their usage when configuring Tracer from the command line.
  - When using `on first retry` mode with more than one retry, the Tracer icon only appears on the retry entries, not on the main run in the Katalon Studio report view, making it harder for users to discover that a trace is available for that test.
  - DOM snapshots in the Tracer file fail to load correctly, so users cannot view page state snapshots for each step even when this data capture option is enabled.
  - For failed test cases that throw errors, the Error tab in the Tracer view remains empty, preventing users from seeing captured error details as part of the trace.
  - Browser information is not captured in the Tracer metadata, so users cannot easily identify which browser environment a trace was recorded in.
  - When using `callTestCase`, the Tracer file only captures the `before` steps and omits the main actions from the called test, resulting in incomplete execution traces.
  - For incomplete test cases (for example, those calling `System.exit(0)`), no Tracer file is created, so aborted or incomplete executions are not traceable.
  - In `on failure` or `on first failure` modes, blank Tracer files are still created for skipped tests, generating unnecessary trace artifacts with no useful data.
- [Log Viewer]:
  - **History view**, **Jump to issue** and **Troubleshoot** are not yet supported in the new execution viewer.
  - In some executions, the Log Viewer may not auto-scroll to the currently running step (especially with long logs or BDD tests), you might need to manually track progress.
  - For tests without a Start browser/Start app step, the **Execution Information** section may not be shown in **Log Viewer**.
  - After closing a project, previous execution logs in **Job Progress** / **Log Viewer** / **Console** might remain visible until a new execution is triggered.
  - [Intermittent] For some data-binding test suites, the **Log Viewer** can stay in a “Loading” state for certain test cases even after the execution finishes.
  - Steps using `markWarning()` might be displayed with warning messages treated as failure reasons.
  - For some executions running in headless modes or custom profiles, the **Run With** mode and **Profile** used may not appear in **Log Viewer**.
  - In conditional flows, the else branch might not be correctly represented/count in the **Log Viewer** tree.
  - The embedded **Log Viewer** may occasionally log JavaScript errors, which can potentially impact how tree data is rendered in the UI.
  - In tree view, only `info` logs may be displayed under keyword child nodes, while `warning` and `error` logs might not appear in this view even though they exist in the execution.
  - In Windows test executions, test object references in step details may appear as plain text instead of hyperlinks.
- Unable to upload test results from Katalon Studio to qTest.
