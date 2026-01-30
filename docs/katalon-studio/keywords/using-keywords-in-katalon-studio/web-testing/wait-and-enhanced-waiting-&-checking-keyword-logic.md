---
title: Wait and Enhanced Waiting & Checking Keyword Logic
---
This guide introduces the **Wait keywords** in Katalon Studio and explains the **Enhanced Waiting & Checking Keyword Logic**.

## Overview

In automation testing, script execution is often fast, but the Application Under Test (AUT) might load or respond slowly. External factors such as network stability, internet speed, and test machine performance can cause these delays.

This difference in speed can cause test scripts to continue running before web elements appear, leading to false failures. To prevent this, Katalon uses a **Wait** **mechanism** that pauses execution under specific conditions, allowing elements or pages to fully load before continuing.

## Wait keywords in Katalon Studio

Katalon provides a set of **Web UI Wait keywords** designed to manage element and page readiness.

These keywords allow your tests to **pause execution until a specific condition is met**, such as when an element becomes visible, clickable, or enabled.

| Keyword | Description |
| --- | --- |
| [`Wait For Alert`](/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-alert) | Waits until a browser alert is present. |
| [`Wait For Angular Load`](/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-angular-load) | Waits for Angular/AJAX to load within the given time in second unit. |
| [`Wait For Element Attribute Value`](/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-attribute-value) | Waits until the given web element has an attribute with specified name and value. |
| [`Wait For Element Clickable`](/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-clickable) | Waits for the given element to be clickable within the given time (in seconds). |
| [`Wait For Element Has Attribute`](/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-has-attribute) | Waits until the given web element has an attribute with the specified name. |
| [`Wait For Element Not Clickable`](/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-not-clickable) | Waits for the given element to be not clickable within the specified time (in seconds). |
| [`Wait For Element Not Has Attribute`](/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-not-has-attribute) | Waits until the given web element doesn't have an attribute with the specified name. |
| [`Wait For Element Not Present`](/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-not-present) | Waits for the given element to not present (appear) within the given time (in seconds). |
| [`Wait For Element Not Visible`](/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-not-visible) | Waits until the given web element is not visible within a timeout. |
| [`Wait For Element Present`](/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-present) | Waits for the given element to present within the given time (in seconds). |
| [`Wait For Element Visible`](/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-visible) | Waits until the element becomes visible on the page within the timeout. |
| [`Wait For Image Present`](/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-image-present) | Waits for an image to be present on page. |
| [`Wait for jQuery Load`](/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-jquery-load) | Waits for jQuery to load within the given time in second unit. |
| [`Wait For Page Load`](/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-page-load) | Waits for the page to completely load before executing the next step. |

:::note
- You can also use **global variables** to manage timeout values more flexibly.
  - Global variables are accessible across your entire test project. You can define several timeout types, for example, Short, Medium, and Long, and reused them as needed.
:::

**Example:**
The following script demonstrates how to use a global variable with the `Wait For Element Present` keyword to wait for a specific test element.
<img alt="Test script with wait keywords " src="https://tw-cdn.katalon.com/katalon-studio/keywords/web-testing/test-script.png" width="600" />

**Figure: Katalon Studio test script**
```jsx
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS

'Open browser and navigate to Katalon site'
WebUI.openBrowser("https://katalon.com")

'Wait for Katalon Studio page to load with wait used as Global Variable'
WebUI.waitForPageLoad(GlobalVariable.G_Timeout_Small)
 
'Click on 'Login'  button to navigate to Login page'
WebUI.click(findTestObject('Page_KatalonHomepage/btn_Login'))
 
'Input username'
WebUI.setText(findTestObject('Page_Login/txt_UserName'), Username)
 
'Input password'
WebUI.setText(findTestObject('Page_Login/txt_Password'), Password)
 
'Click on 'Login'  button to login'
WebUI.click(findTestObject('Page_KatalonHomepage/btn_Submit'))
 
'Wait for failed message to be present'
WebUI.waitForElementPresent(findTestObject('Page_KataloLogin/div_LoginMessage'), GlobalVariable.G_Timeout_Small)
 
WebUI.closeBrowser()
```

## Understanding waiting keyword behavior

When the expected element or page does not appear within the timeout, Katalon returns `True` or `False` with a warning message, regardless of your configured Failure Handling settings. 

In other words, tests continue running even when a waiting condition fails. This behavior is similar to setting **Failure Handling** to **Optional**. See: [Failure Handling](/katalon-studio/maintain-tests/configure-failure-handling-settings-in-katalon-studio).

For example, when using `WaitForElementPresent`, Katalon Studio checks whether the element exists in the current view:

- If the element is found → returns `True`.
- If the element is not found → returns `False` and shows a warning message.

However, if the waiting keyword fails due to external issues — such as network errors, session timeouts, or when the AUT fails to start — **Failure Handling** applies the setting you’ve configured (e.g., *Stop on Failure*).

If you want the test to fail when an element is not found, use the following script to make it an assertion:

```jsx
boolean present = WebUI.waitForElementPresent(findTestObject('...'), 10)
assert present
```
## Enhanced Waiting & Checking Keyword Logic

The Enhanced Waiting & Checking Keyword Logic, originally introduced in Katalon Studio 10.3.0, is a built-in mechanism in Katalon Studio that applies to WebUI keywords. It ensures these keywords execute only when target elements are ready for interaction. This logic applies to the following keyword types:

- Action keywords (e.g., Click, Set Text, Select Option)
- Verify element keywords
- Wait for element keywords

In 10.4.0, we added flexibility so you can turn this logic on or off based on your needs via  **Project > Settings > Execution > WebUI > Use Enhanced Waiting & Checking**.

:::note
While this Enhanced Waiting & Checking Keyword Logic helps improve test stability, some performance limitations may still occur. 
:::

<img alt="Test script with wait keywords " src="https://tw-cdn.katalon.com/katalon-studio/keywords/web-testing/use-enhanced-waiting-&-checking.png" width="600" />

<br/>

- When the **Enhanced Waiting & Checking Keyword Logic** is **turned on**, Katalon applies the logic to the stated WebUI keyword types.
- When it is **turned off**, Katalon skips the logic and applies **Smart Wait** instead if Smart Wait is enabled in your settings.

Refer to the table below to see how these two waiting mechanisms differ.

| | Smart Wait | Enhanced Waiting & Checking Keyword Logic |
| :--- | :--- | :--- |
| **Purpose** | Waits for the **DOM to stabilize** and for **background requests to complete** before performing Selenium actions. | Waits for **target elements** to be **interactable** before performing actions. |
| **Waiting Phases** | **Single phase:** Checks global DOM and background request stability. | **Sequential multi-phase wait:** Ensures the element is ready.<br/>The phases run in the following order:<ul><li>**Wait for Visibility:** Element is visible on the page.</li><li>**Wait for Stability:** Element stops moving or animating.</li><li>**Wait for Topmost:** Element is at the top of the visual stack.</li><li>**Wait for Enabled:** Element is enabled (inputs & buttons only).</li><li>**Wait for Editable:** Element is editable (inputs only).</li></ul> |
| **Performance** | May introduce delays by waiting for unrelated DOM changes or background requests. | **Efficient:** Focuses only on the element's readiness, reducing unnecessary waits. |

:::note
Smart Wait and Enhanced Waiting & Checking Keyword Logic can work together when both are turned on, depending on your testing needs. In this case, Smart Wait ensures the page’s DOM is stable, and the enhanced logic ensures target elements are ready for interaction.
:::