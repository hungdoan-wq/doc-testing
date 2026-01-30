---
title: Execution settings in Katalon Studio
---

Execution settings help define the desired behaviors that apply to the project during and after test execution. From **Katalon Studio** version 10.4.0 onwards, execution settings are now scoped per platform (WebUI, Mobile, Windows), allowing you to configure timeouts and delays specific to each testing environment.

:::note Backward Compatibility

As timeout settings are platform-scoped starting 10.4.0, **Katalon Studio** supports backward compatibility when you upgrade projects or switch between versions:

- Opening projects from 10.3.1 or earlier in 10.4.0+:
    - WebUI's timeout is migrated from the legacy global **Execution setting**.
    - Mobile and Windows' timeouts use the new platform-specific defaults.
- Opening projects from 10.4.0+ in 10.3.1 or earlier:
    - The WebUI timeout value is used as a fallback default for all platforms.
:::

<br/>

To access default **Execution Settings**, from the main menu, select **Project > Settings > Execution**.

## General Settings

These settings are appplied to the current projects, regardless of execution environment.

<img src="/cb68a610-9d7d-11ee-b8c3-0242c7a41fd4/ks-900-execution-settings.png" alt="Execution setting menu in Katalon Studio" width="500px" />
  
In this menu, you can configure:

- **Default execution**: The environment Katalon Studio uses when you click the **Run** button when executing test scriptss.

- **Log executed test steps**: Enable this to include details of executed test steps in the log. See [View and customize execution log in Katalon Studio](/katalon-studio/test-reports/view-test-reports/view-and-customize-execution-log-in-katalon-studio) for more details.

- **Hide hostname in test reports and log viewer**: Hide the username and host address of the executing machine in test reports and log viewer.

- **During-execution options**:

	- **Take screenshot when execution failed**: WebUI and mobile only. See [View captured screenshots in Katalon Studio reports](/katalon-studio/test-reports/view-test-reports/view-captured-screenshots-in-katalon-studio-reports) for more details.
	
	- **Record Video during execution**: WebUI only. When enabled, you can choose to record your test execution with [Browser-based Recorder](/katalon-studio/test-reports/generate-test-reports/generate-browser-based-videos-in-katalon-studio-reports) or [Screen-based Recorder](/katalon-studio/test-reports/generate-test-reports/generate-screen-based-videos-in-katalon-studio-reports). You can also specify **Record Type**, **Video Settings**, and whether to record for **Failed test cases** only or **All test cases**.
	
	- **Post-Execution Options**: whether to open the report right away after the execution, and whether to terminate each drivers after each test case/test suites has finished, for better resource management.

## Launch Arguments - Edit JVM parameters

:::tip requirements
- An active **Katalon Studio Enterprise** license.
:::

You can edit Java Virtual Machine (JVM) arguments in the execution settings by going to **Project > Settings > Execution > Launch Arguments**.
  
<img className="image" width="600px" src="/caebade0-9d7d-11ee-b8c3-0242c7a41fd4/ks-910-launch-arguments.png" alt="JVM parameter edit location" />

In the **VM Arguments** tab, enter your arguments. VM Arguments entered in the executions settings of a project change the behavior of a Java process of each execution. For example:

To make sure if the configuration works, create this simple test case in script view, and execute it:

```jsx
import com.kms.katalon.core.util.KeywordUtil
KeywordUtil.logInfo(System.getProperty("testme"))
```

If you can see it's printed in the console log, it's working:

<img className="image" width="700px" src="/9eeea870-7f77-11ed-998d-0242cfbc79b5/ks-855-vm-example-tc.png" alt="printing out JVM parameters after test run in console log" />

Currently, **Katalon Studio** does not support VM arguments values containing space. See our [Most used JVM parameters](#most-used-jvm-parameters) below for more details.

## WebUI settings

:::note
Prior to version 10.4.0, **element timeout setting** was global under Execution root. From 10.4.0 onwards, it is platform-specific.
:::

In **Project > Settings > Execution > Web UI** you can configure default behaviors and timeouts for your Web project, such as page load timeouts and action delays:

- **Default Smart Wait**: Tells the web driver to wait for the web page to become static before any operations are performed. See [Smart Wait function](https://www.google.com/search?q=/katalon-studio/record-and-spy/webui-record-and-spy-utilities/smart-wait-function).
    
- **Default Smart Locator**: Available from Katalon Studio version 9.4.0, this installs Smart Locator extension when executing, and uses Smart Locator in Self-healing. Disabling this option might cause error to test cases that contains smart locators.
	
- **Default Time Capsule**: Choose to enable/disable **Time Capsule** by default. See [Time Capsule to fix broken web test objects](/katalon-studio/maintain-tests/fix-broken-web-test-objects-with-time-capsule-in-katalon-studio) for more details on this feature.
	
- **Default wait for element timeout**: The default timeout period that Katalon Studio waits for the application under test (AUT) to load. If you use **WebUI keywords** to test a website on a mobile phone, **Katalon Studio** will use element timeout setting defined in WebUI Settings.
    
- **Default wait when IE hangs**: Specifies Katalon Studio default waiting time when IE hangs.
    
- **Default page load timeout**:
    
    - **Wait until the page is loaded**: This allows Katalon Studio to wait for the web page to load completely, which helps with timeout error.
        
    - **Wait for (in seconds)**: This sets a timeout to prevent Katalon Studio from waiting indefinitely. You can also choose to run after timeout.
        
- **Delay between actions**: This tells Katalon Studio to wait between test steps when executing test cases. You can specify precise delays, in seconds or milliseconds.
    
    The WebUI's **delay between actions** is applied at the command level. The affected WebDriver commands are:

    | WebDriver Commands | Description |
    | -- | -- |
    | `beforeClick` | Click operations |
    | `beforeSendKeys` | Text input operations |
    | `beforeBack` | Navigate back |
    | `beforeForward` | Navigate forward |
    | `beforeRefresh` | Page refresh |
    | `beforeTo` | Navigate to URL |
    | `beforeAccept` | Accept alert |
    | `beforeDismiss` | Dismiss alert |

    :::note
    - This setting applies to a predefined set of commands and **cannot be customized**.
    - A single keyword may trigger multiple commands, and delay is applied before each command execution.
    - For more details on how these commands are triggered, see [WebDriver Listener documentation](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/support/events/WebDriverListener.html)
    :::

- **Enable smart web inspectors**: From version 10.2.0, **Katalon Studio** allows you to detect objects on Flutter web apps, text elements on Canvas, and closed Shadow DOM. Enable any of these only if your web AUT uses one.

<img src="https://tw-cdn.katalon.com/katalon-studio/manage-projects/project-settings/katalon-studio-execution-setting-menu-webui.png" alt="katalon studio execution setting menu webui.png" width="500px" />

:::note
- If your web AUT does not use any of these AUTs, make sure to unselect these for a proper workflow. For recording test cases on these types of WebUI AUT, use [Web Recorder Plus](https://www.google.com/search?q=/katalon-studio/record-and-spy/webui-record-and-spy-utilities/katalon-web-recorder-plus).
:::

For example:
- The **WebUI keyword** `WebUI.setText()` might internally execute **WebDriver commands** like `findElement`, `clear`, and `sendKeys`. If delay is set to 500ms, there will be a 500ms pause before each of these commands.
- `WebUI.click()` and `WebUI.doubleClick()` may use the `findElement` command, and the delay will apply before this command in both cases.
    
## Mobile settings

In **Project > Settings > Execution > Mobile**, you can configure default wait time for mobile testing in **Katalon Studio**:

- **New command timeout**: Defines the maximum idle time Appium waits between commands before ending the test session. (default is 60 seconds)
    
- **Default wait for element timeout**: The default timeout Katalon uses to wait for mobile elements to appear before failing a test step. (default: 60 seconds)
    
- **Delay between actions**: Specifies how long Katalon pauses between consecutive actions during test execution. (default: 0 milliseconds).

<img src="https://tw-cdn.katalon.com/katalon-studio/manage-projects/project-settings/katalon-studio-execution-setting-menu-mobile.png" alt="katalon studio execution setting menu mobile.png" width="500px" />

:::note 
For **New Command Timeout**:
    - If you specify `appium:newCommandTimeout` capability in **Desired Capabilities**, it will override this project-level setting.
    - Projects created prior to 10.4.0 have a default **command timeout** of 1800 seconds (for backward compatibility). New projects default to 60 seconds.
For **Delay between actions**:
    - Delay between actions does not apply if a keyword fails (with `FailureHandling = Stop`), to ensure test time isn’t wasted on failed or aborted steps.
:::

In the menu you should see a list of keywords at the bottom (see below summary [Mobile keywords with delay between actions](#mobile-keywords-with-default-delay) for more details) - these are keywords with default **delay between actions** applied. You can **add** more keywords, **remove** some keywords, or **reset** the list back to default.

## Windows settings

In **Project > Settings > Execution > Windows**, you can configure default wait time for **Windows desktop** testing in **Katalon Studio**:

- **Wait for Element Timeout**: Defines the maximum time Katalon waits for an element to appear or become interactable before failing the step. (default: 60 seconds)
    
- **Delay Between Actions**: Sets the amount of time Katalon pauses between consecutive keyword actions during test execution. (default: 500 milliseconds)

In the menu you should see a list of keywords at the bottom (see below summary [Windows keywords with delay between actions](#windows-keywords-with-default-delay) for more details) - these are keywords with default **delay between actions** applied. You can **add** more keywords, **remove** some keywords, or **reset** the list back to default.

<img src="https://tw-cdn.katalon.com/katalon-studio/manage-projects/project-settings/katalon-studio-execution-setting-menu-windows.png" alt="katalon studio execution setting menu windows.png" width="500px" />

:::note 
For **Delay between actions**:
- **Delay between actions** does not apply if a keyword fails (`FailureHandling = Stop`), to ensure test time isn’t wasted on failed or aborted steps.
:::

## Web Service settings

:::tip Requirements
An active Katalon Studio Enterprise license.
:::

You can set default settings for Web Service test execution by going to **Project > Settings > Execution > Web Service**. The following global configurations are applied to both RESTful and SOAP requests in a project.

- **Connection Timeout in milliseconds (0=unlimited)**: The time to establish the connection with the remote server. When it is set to 0 or left empty, Katalon waits for a response forever.
    
- **Socket Timeout in milliseconds (0=unlimited)**: The time waiting for data – after establishing the connection.
    
- **Max Response size in bytes**: The maximum number of bytes **Katalon Studio** renders from a response. When it is set to 0 or left empty, **Katalon Studio** downloads a response regardless of its size. Please note that downloading a large response may affect the application's performance.

<img src="https://tw-cdn.katalon.com/katalon-studio/manage-projects/project-settings/katalon-studio-execution-setting-menu-web-service.png" alt="katalon studio execution setting menu web service.png" width="500px" />

Alternatively, you can use these global settings by adding variables to a test request's script view.

<img src="https://docs.katalon.com/8f9bd130-22b2-11ed-9930-0242fe3e4a3f/timeout-maxsize.png" alt="test request in Katalon Studio" width="500px" />
Request timeout

- Override timeout settings of a project in a test case

```jsx
Map<String, Object> generalSettings = RunConfiguration.getExecutionGeneralProperties()
generalSettings.put(RunConfiguration.REQUEST_CONNECTION_TIMEOUT, 3500)
generalSettings.put(RunConfiguration.REQUEST_SOCKET_TIMEOUT, 3500)
```

- Change timeout settings of a specific test request

```jsx
RequestObject request = findTestObject("Object Repository/Localhost")
request.setConnectionTimeout(3500)
request.setSocketTimeout(3500)
 
// Or to unset the timeout
request.setConnectionTimeout(RequestObject.TIMEOUT_UNSET)
request.setSocketTimeout(RequestObject.TIMEOUT_UNSET)
 
// Or to set the timeout to unlimited
request.setConnectionTimeout(RequestObject.TIMEOUT_UNLIMITED)
request.setSocketTimeout(RequestObject.TIMEOUT_UNLIMITED)
// Or if you just want to set to its default value (The default value is set to unlimited)
request.setConnectionTimeout(RequestObject.DEFAULT_TIMEOUT)
request.setSocketTimeout(RequestObject.DEFAULT_TIMEOUT)
```

**Maximum response time**

> **Note**: **Katalon Studio** also supports setting the maximum response size of execution using `-maxResponseSize` in the command line. [Learn more](https://www.google.com/search?q=/katalon-studio/execute-tests/katalon-runtime-engine/command-line-syntax-in-katalon-runtime-engine%23concept-1437).

- Override response size limit of a project in a test case

```jsx
Map<String, Object> generalSettings = RunConfiguration.getExecutionGeneralProperties()
generalSettings.put(RunConfiguration.REQUEST_MAX_RESPONSE_SIZE, 400)
```

- Change maximum response size setting of a specific test request

```jsx
RequestObject request = findTestObject("Object Repository/Basic Auth")
request.setMaxResponseSize(400)
 
// Or to unset response size limit. And so, the project's max response size setting will be used.
request.setMaxResponseSize(RequestObject.MAX_RESPONSE_SIZE_UNSET)
 
// Or to set response size limit to unlimited
request.setMaxResponseSize(RequestObject.MAX_RESPONSE_SIZE_UNLIMITED)
 
// Or if you just want to set to its default value (The default value is set to unlimited)
request.setMaxResponseSize(RequestObject.DEFAULT_MAX_RESPONSE_SIZE)
```

## References

### Most used JVM parameters

This section introduces most used JVM parameters 

**Specify minimal and maximal heap sizes**

| **Syntax**                                    | **Description**                                                                                                                                                                                                          |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `-Xms<heap size>[unit]`                       | Sets the **initial heap size** (the amount of memory allocated to the JVM when it starts). This determines how much memory the JVM reserves upfront for objects. Example: `-Xms512m` starts the JVM with 512 MB of heap. |
| `-Xmx<heap size>[unit]`                       | Sets the **maximum heap size** (the upper memory limit the JVM can use for the heap). Once the heap grows to this value, the JVM cannot allocate more memory for objects. Example: `-Xmx2g` limits the heap to 2 GB.     |
| `-XX:MaxMetaspaceSize=<metaspace size>[unit]` | Sets the **maximum size of the Metaspace**, which stores class metadata. If this limit is reached, the JVM throws an `OutOfMemoryError: Metaspace`. Example: `-XX:MaxMetaspaceSize=256m` caps metaspace at 256 MB.       |

**Configure the JVM stack size**

Letters M, K or G at the end can be uppercased or lowercased.

| Syntax      | Description                           |
| ----------- | ------------------------------------- |
| `-Xss16M`   | Configure the stack size to be 16MB   |
| `-Xss1024K` | Configure the stack size to be 1024KB |
| `-Xss2G`    | Configure the stack size to be 2GB    |
**Garbage collection implementation types**

| Syntax               | Description                |
| -------------------- | -------------------------- |
| `-XX:+UseSerialGC`   | Serial Garbage Collector   |
| `-XX:+UseParallelGC` | Parallel Garbage Collector |
| `-XX:+USeParNewGC`   | CMS Garbage Collector      |
| `-XX:+UseG1GC`       | G1 Garbage Collector       |
**Garbage collection logging**

| Syntax                                           | Description                                                                                |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `-XX:+UseGCLogFileRotation`                      | Specify the log file rolling policy                                                        |
| `-XX:NumberOfGCLogFiles=< number of log files >` | Denote the max number of log files that can be written for a single application life cycle |
| `-XX:GCLogFileSize=< file size >[ unit ]`        | Specify the max size of the file                                                           |
| `-Xloggc:/path/to/gc.log`                        | Denote the file's location                                                                 |
**Handling out of memory:**

| Syntax                                               | Description                                                                                      |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `-XX:+HeapDumpOnOutOfMemoryError`                    | Dump heap into physical file in case of OutOfMemoryError                                         |
| `-XX:HeapDumpPath=./java_pid<pid>.hprof`             | Denote the path where the file is to be written                                                  |
| `-XX:OnOutOfMemoryError="< cmd args >;< cmd args >"` | Issue emergency commands to be executed in case of out of memory error                           |
| `-XX:+UseGCOverheadLimit`                            | Limits the proportion of the VM's time that is spent in GC before an OutOfMemory error is thrown |

### Mobile keywords with default delay

Here's a summary of mobile keywords with default **delay between actions** applied. You can **add** more keywords, **remove** some keywords, or **reset** the list back to default using the UI controls in **Project Settings** > **Execution** > **Mobile**.

| Category     | Keywords                                                                                                                                       |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Taps & Press | `tap`, `doubleTap`, `longPress`, `tapAndHold`, `tapAtPosition`, `tapAndHoldAtPosition`, `tapOnImage`, `pressBack`, `pressHome`, `pressKeyCode` |
| Text Input   | `setText`, `clearText`, `sendKeys`, `hideKeyboard`, `setEncryptedText`                                                                         |
| Gestures     | `swipe`, `dragAndDrop`, `scrollToText`, `scrollToElement`, `enhancedScrollToText`, `pinchToZoomInAtPosition`, `pinchToZoomOutAtPosition`       |
| Selection    | `checkElement`, `uncheckElement`, `selectListItemByIndex`, `selectListItemByLabel`, `setSliderValue`                                           |
| Notification | `closeNotifications`, `openNotifications`                                                                                                      |
### Windows keywords with default delay

Here's a summary of Windows keywords with default **delay between actions** applied. You can **add** more keywords, **remove** some keywords, or **reset** the list back to default using the UI controls in **Project Settings** > **Execution** > **Windows**

| **Group**      | **Keywords**                                                                            |
| -------------- | --------------------------------------------------------------------------------------- |
| **Clicks**     | `click`, `doubleClick`, `rightClick`, `clickOffset`, `rightClickOffset`                 |
| **Text Input** | `setText`, `sendKeys`, `clearText`, `setEncryptedText`                                  |
| **Selection**  | `selectOptionByValue`, `selectOptionByLabel`, `selectOptionByIndex`, `check`, `uncheck` |
| **Gestures**   | `dragAndDrop`, `scrollToElement`                                                        |
