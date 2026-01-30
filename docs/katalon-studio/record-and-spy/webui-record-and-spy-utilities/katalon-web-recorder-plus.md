---
title: Katalon Web Recorder Plus
---

This document introduces **Katalon Web Recorder Plus** - an enhanced version of **Web Recorder**.

:::note
- Starting **Katalon Studio version 11.0.0**, **Katalon Web Recorder Plus** is officially available as a feature.
- **AI Recording Agent** is currently available as a beta feature in **Katalon Studio version 11.0.0**. In the beta phase, it is for evaluation purposes only and not recommended for production use.
:::

## Overview

**Katalon Web Recorder Plus** (**Web Recorder Plus**) is an enhancement of **Web Recorder** that provides features of the classic **Web Recorder**, and more:

- **Enhanced support for advanced web apps**: Flutter apps, apps with HTML5 Canvas elements, and closed Shadow DOM.
    
- **More supported actions**: Hover actions, mouse-over, and mouse-down events.
    
- **New text attribute**: New @text attribute to capture the original element text.
    
- **Enhanced event handling**: Support for pointer event phases to improve accuracy.
    
- **Optimized performance**: Locator caching for faster interaction and improved stability.
    
- **AI Recording Agent**: Quick swap between generating tests from natural language prompts and manual recording and edits for precision control.
    

## Set up for Web Recorder Plus
<!--
Katalon Studio app has link to #2-install-katalon-studio-recording-engine-extension-optional
-->

#### 1. Enable Web Recorder Plus in Katalon Studio

From the main menu, go to **Preferences... > Katalon > Recorder Mode** and enable **Katalon Web Recorder Plus**.

<img src="https://tw-cdn.katalon.com/katalon-studio/record-and-spy/recorder-preference-settings-1.png" alt="recorder preference settings" width="500px" />
<br/>

Once enabled, selecting **Katalon Web Recorder** opens **Web Recorder Plus** instead. You can begin recording test cases or capturing objects with enhanced capabilities (details below).

<img src="https://tw-cdn.katalon.com/katalon-studio/record-and-spy/web-recorder-plus/katalon-studio-web-recorder-plus-main-panel-1.png" alt="katalon studio web recorder plus main panel" width="300px" />
<br/>

#### 2. Install Katalon Studio Recording Engine extension (optional)

This step is required for the **Active Browser** mode.
    
- For Chrome: [Install from Chrome Web Store](https://chromewebstore.google.com/detail/katalon-studio-recording/ipkccgcigdgmeofoaocdkabpbckdbdci).
    
- For Edge: [Install from Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/katalon-studio-recording-/gjjbphpfndcgghhlfcjnfplblfolcjeb).
    
Since the **Chrome Extension Marketplace** only provides the latest version, you may encounter unexpected issues if you are not using a compatible version of the extension. In such cases, it is recommended to use **New Browser** mode for recording instead.

Refer to the following table for browser extension version compatibility with **Katalon Studio Enterprise (KSE)**:

|**KSE version**|**Katalon Studio Recording Engine extension version**|
|---|---|
|Before 10.2.4|prior to 1.0.8|
|10.3.0 to 10.4.3|1.0.13 onwards|
|11.0.0|1.0.14 onwards|

You can check the version of your **Katalon Studio Recording Engine** extension.

- **For Chrome**: Go to `chrome://extensions/` and use search to find your **Katalon Studio Recording Engine** extension. The version is displayed right next to the extension name. You can also click **Details > Version**.
    
- **For Edge**: Go to the **Extensions** page and use search to find your **Katalon Studio Recording Engine extension** on the list. You can also click **Details** > **Version**.
    
<img src="https://tw-cdn.katalon.com/katalon-studio/record-and-spy/webui-record-and-spy-utilities/KSE_view_extension_version_quickview.png" alt="View Katalon Studio Recording Engine extension quick tile" width="300px"/>
<br/>

#### 3. Enable AI Recording Agent (beta)

:::tip requirements
- A valid **API key** from a vision-supported model. Consult your AI provider's official documentation to learn more. (e.g. learn more about **OpenAI's vision-supported models** at [Image vision in OpenAI](https://platform.openai.com/docs/guides/images-vision))
:::

To set up AI Web Recording Agent:

1. Go to **Preferences > AI Configuration**
2. Select a provider and provide your personal **OpenAPI key** from a vision-supported model. If the used model doesn't support vision, **AI Recording Agent** cannot crawl the site's UI.

<img src="https://tw-cdn.katalon.com/katalon-studio/studioassist/ai-configuration-preferences.png" alt="ai configuration preferences" width="500px" />
<br/>
    
Then, you can enable the **AI Web Recording Agent** and start using:

<img src="https://tw-cdn.katalon.com/katalon-studio/record-and-spy/web-recorder-plus/ai-recording-agent-1.png" alt="ai recording agent" width="300px" />
<br/>

## Record a new session with Web Recorder Plus

Find below a demo of a typical workflow with **Katalon Web Recorder Plus**:

<iframe
src="https://demo.arcade.software/TS32WWmSVoq738vcAZSu?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Record and Save Automated Web Test Steps in Katalon Studio"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

1. Once you've enabled **Katalon Web Recorder Plus**, click **Katalon Web Recorder** to open **Web Recorder Plus**.
    
2. Choose to start recording in a **new browser**, **active browser**, or in **custom capability** mode. Quick start by selecting **new browser** mode.
    
    - Select your preferred browser from the dropdown list.
        
    - Enter a valid URL for the web application you want to record.
        
    - Click **Start Record** to launch a new browser session and begin recording.
        
3. Recording controls:
    
    - As you interact with your web application, **actions** and **test objects** are automatically captured.
        
    - You can **pause/resume** recording to interact with the app's UI without recording the interaction.
        
    - You can switch between browsers while recording - KS will pause recording to avoid issues. Once you're all set, click **Resume** to continue.
        
    - **Run** steps to verify actions, then view **Running Logs** to see the execution status, step results, and any errors that occur during playback.
        
    - **Save** your progress at any time.
        
4. Prompt **AI Recording Agent** to generate or edit test steps for you. The steps will be generated and executed, and the AUT's UI will display the changes live.
    
## Generate a Web UI test case with AI

With **AI Recording Agent**, you can now initiate the test generation with prompts instead of manual capturing/writing:

<iframe src="https://demo.arcade.software/FuSVtbr6qgGKpq9ouraE?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" title="AI Recording Agent in Katalon Studio Enterprise" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen="true" allow="clipboard-write" style={{ width: "100%", height: "400px", border: "none" }} ></iframe>

1. Open **Web Recorder Plus** and toggle **AI Recording Agent (beta)** to get started.
2. Enter a prompt, then see the AI agent generate test steps/execute each live on the app's UI.
3. If you encounter issues, it's likely that the agent can't see the element. Check the web UI, and edit the prompt to start over.
4. Once you're done, save all script/captured objects as a new test case/test objects. You can then tweak the test case in **Web Recorder Plus** mode once again.

## Feature highlights

#### **Browser types**
    
:::note requirement
- **Active Browser** modes require the **Recorder Engine extension**. View setting up instructions at [Install Recorder Engine Extension](#2-install-katalon-studio-recording-engine-extension-optional)
- Selecting a browser profile requires the **Recorder Engine extension** installed for that profile.
:::

**Web Recorder Plus** allows recording session starting in a **new browser**, an **active browser**, or in a **custom capability-configured browser**:

- With a **new browser**, you need to select your browser (chrome, ...) and provide an URL.
- With an **active browser**, you need to select the active browser.

<img src="https://tw-cdn.katalon.com/katalon-studio/record-and-spy/web-recorder-plus/katalon-studio-web-recorder-plus-main-panel-1.png" alt="katalon studio web recorder plus main panel" width="300px" />
<br/>

Each browser shows a status label (e.g., **Compatible** or **Incompatible**). **An incompatible** label indicates that the current **KS version** and the **Recorder Engine** are not compatible - upgrade to the compatible version for the best recording experience.

:::note
- In **Active Browser** mode, if element highlighting (green rectangles) are not present, this indicates that recorder plus is not working. Try:
  - Refresh the page
  - End the session, disable/re-enable recording extension, and try again
- If you cannot record with Edge Chromium, go to **Katalon Studio > Settings... > Recorder** and click **Apply and Close** again, then retry.
:::

- With **Custom Capability Browser mode,** you can configure the browser specifications in **Custom Capability** and start recording in this pre-configured browser.

#### **Recording from an existing test case**
    

Web Recorder Plus allows you to build on an existing test case. Simply open the test case, and click the **Record Web** icon - **Katalon Studio** asks if you want to record on top of the existing test case.

<img src="https://tw-cdn.katalon.com/katalon-studio/record-and-spy/web-recorder-plus/katalon-studio-web-recorder-plus-continue-session.png" alt="katalon studio web recorder plus continue session" width="500px" />
<br/>

#### **Supported actions**
    

Apart from basic actions (click, set texts, ...) **Web Recorder Plus** allows handling **mouse-down** and **mouse-over (hover) events**.

When you record in **Active Browser** mode, **Web Recorder Plus** does not capture the existing URL on the active browser as a “navigate to URL” step (WebUI.navigateToUrl) . To do so, click the browser's URL bar with the URL, and hit Enter to perform and record the "navigate to URL" action.

When you hover over an element, use these shortcuts to copy its locator to your clipboard, making it much easier to reuse in test scripts:

- macOS: Use Option + C (or Shift + Option + C)
    
- Windows: Use Alt + C
    

#### **Test case editing mid-session**

**Web Recorder Plus** offers convenient panels so you can edit/execute test runs selectively on recorded steps mid-session, for quality control:

<img src="https://tw-cdn.katalon.com/katalon-studio/record-and-spy/web-recorder-plus/katalon-studio-web-recorder-plus-recorded-steps.png" alt="katalon studio web recorder plus recorded steps" width="300px" />

<br/>

With code statements ([Statements in Katalon Studio](https://docs.katalon.com/katalon-studio/create-test-cases/statements/statements-in-katalon-studio-overview)), you can **view**, **delete**, or **reorder** existing ones, and **add/edit** them once the session is over.

You can also **view captured objects** during the recording, choose a **default locator**, and **verify/highlight** the locator on the live app UI. Editing locators will become available in later versions.

<img src="https://tw-cdn.katalon.com/katalon-studio/record-and-spy/web-recorder-plus/katalon-studio-web-recorder-plus-captured-objects.png" alt="katalon studio web recorder plus captured objects" width="300px" />

<br/>

#### **AI Recording Agent (beta)**
    
Instead of writing/editing the test steps manually, you can now ask the agent to generate and make edits for you.

The agent first converts your prompt into a **Test Plan** with clear steps, then sticks to this plan to work on each step sequentially. Each step is first generated, then executed to reflect live on the app’s UI. This removes friction between writing and validating test steps.

<img src="https://tw-cdn.katalon.com/katalon-studio/record-and-spy/web-recorder-plus/ai-recording-agent-running-2.png" alt="ai recording agent running" width="500px" />
<br/>

It's recommended that you structure your prompt as a numbered list of steps, like the example below. It's also helpful to mention any **test objects** your project already has.

```jsx
1. Open Browser.
2. Navigate to https://katalon-demo-cura.herokuapp.com/
3. Click Make Appointment.
4. Input the sample username and password given on the page.
5. Click the login button.
6. Log out.
```

## Changes and Known Limitations

#### **Locator changes**

**Web Recorder Plus** no longer uses an element's text content to create locators, as this proved to be unreliable as the app's codebase updates.

Strategies for CSS and XPath locators are now improved for better accuracy.

You can also see more configuration options for element locators, under **Project > Settings > Test Design > WebUI**, including default locator strategies (XPath, CSS, Attributes) and pattern exclusions for element classes or attributes. See more details on these configurations at [Configure exclusion patterns from locator generation](/katalon-studio/maintain-tests/self-healing-tests-in-katalon-studio#exclude-keywords).

#### **Performance issues with Smart Locator**
    
On certain websites, using **Web Recorder Plus** with **Smart Locator** feature may cause performance issues. To avoid this, turn off **Smart Locator** after starting **Web Recorder Plus**:

Locate the **Katalon Studio Recording Engine** extension icon in the browser instance's toolbar.

<img alt="smart locator extension location" src="https://docs.katalon.com/7c36566e-efc3-4c80-8bc1-b6d4cd105d19/recorderplus-turn-off-smart-locator-1.png" width="500px" />
<br/>

Click the icon, and uncheck the **Enable Smart Locator Capture** option.

<img alt="unchecking smart locator extension" src="https://docs.katalon.com/b14a1869-b0d6-40a4-bc6c-76a242bed808/recorderplus-turn-off-smart-locator-2.png" width="500px" />
<br/>

#### **Wrong locator generated when using Attributes**

When an object is captured, the default selector has no issues, but attempting to generate a new Attributes locator (id, xpath...) will generate the wrong locator.

#### **Custom keywords incompatibility**

**Custom keywords** added manually during a recording session will not be saved into the test case.

#### **New tab not supported (limitation)**
    
Currently, recording interactions across multiple tabs is not supported.

#### **AI Recording Agent Limitations**
    
The initial release of **AI Recording Agent (beta)** works well with **New Browser** and **Custom Capabilities** modes, and focuses on a linear iteration workflow. Features such as mid-prompt changes, multiple test cases, and context awareness across sessions will be supported in future releases.

## Execute test cases for special Web Applications

Test cases recorded using **Web Recorder Plus** can be executed normally without requiring additional configuration in most scenarios.

However, if your **Web Application Under Test (AUT)** includes special cases, we recommend enabling **Smart Web Inspectors** in **Project > Settings > Execution > WebUI > Enable Smart Web Inspectors**, to ensure stability:

<img src="https://tw-cdn.katalon.com/katalon-studio/record-and-spy/webui-record-and-spy-utilities/KS_Web_Recorder_Plus_enable_web_smart_inspectors.png" alt="Enable web smart inspectors" width="700px"/>
<br/>

This feature is particularly helpful for the following scenarios:

- **Flutter web app**: Built with the Flutter framework, these apps use unique DOM structures that often require specialized handling.
    
:::note
Only **Web Recorder Plus** supports recording interactions on **Flutter-based** web applications. If you're working with such apps, you must use **Recorder Plus** for reliable element detection and script creation.
:::

- **Canvas text extraction**: Content rendered inside HTML5 Canvas elements, which traditional locators cannot detect.
- **Closed Shadow DOM**: Components encapsulated in closed Shadow DOM, which limits access to internal elements using standard methods.
- **Obstructed UI elements**: Certain elements—such as calendars, dropdowns, or select boxes—may be partially or fully hidden behind transparent or invisible layers, making them difficult to capture or interact with during recording or execution.

For more information about WebUI execution settings, see [WebUI settings](https://docs.katalon.com/katalon-studio/manage-projects/project-settings/execution-settings-in-katalon-studio#webui-settings).

If you are testing a Flutter web app using **Katalon Studio** version earlier than 10.2.0, use a custom keyword to inject **JavaScript** that enables element interaction by exposing **Flutter** semantic nodes. For implementation guidance, see [Introduction to custom keywords](https://docs.katalon.com/katalon-studio/keywords/custom-keywords/introduction-to-custom-keywords-in-katalon-studio).

Below is the custom keyword script that enables interaction with Flutter-based web applications:

```jsx
package mypackage

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

public class FlutterBasedKeywords {

  static String script = """
    (function() {
      "use strict";
      function l(t) {
        new MutationObserver(e => {
          e.some(r => !(r.type !== "childList" || r.addedNodes.length === 0)) && t()
        }).observe(document, { childList: !0, subtree: !0 })
      }
      function s(t = document) {
        if (!t.querySelector("flutter-view")) return;
        t.querySelectorAll("flt-semantics-placeholder").forEach(i => { i.click() });
        const e = t.querySelector("flt-glass-pane");
        if (!e || e.activated) return;
        e.activated = !0;
        const n = document.createElement("style");
        n.innerHTML = \\`
          flt-semantics {
            pointer-events: all !important;
          }
          flt-semantics-container {
            left: 0;
            top: 0;
          }
        `\\;
        n.id = "flutter-override-styles";
        document.head.appendChild(n);
        const r = e.shadowRoot?.querySelector("flt-semantics-placeholder");
        r && r.click();
      }
      function o() {
        navigator.webdriver && (s(), l(() => { s() }));
      }
      o();
    })();
  """;

  @Keyword
  public static void activateFlutterBasedWebApp() {
    WebUI.executeJavaScript(script, null)
  }
}

```

Here is an example of how to use the custom keyword in your test script (update the mypackage name to match your project structure):

```jsx
WebUI.openBrowser('<https://flutter.github.io/samples/web/material_3_demo/>')

CustomKeywords.'mypackage.FlutterBasedKeywords.activateFlutterBasedWebApp'()
//or FlutterBasedKeywords.activateFlutterBasedWebApp()

WebUI.click(findTestObject('Object Repository/Page_Material 3/flt-semantics_Elevated'))

```
