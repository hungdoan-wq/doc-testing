---
title: Smart Mobile Recorder
---

This document explains the **Smart Mobile Recorder** feature in **Katalon Studio**, how beneficial it is to your workflow, and how to use it.

:::note
- Starting **Katalon Studio version 11.0.0**, **Smart Mobile Recorder** is officially available as a feature.
- **Interactive mode** is currently available as a beta feature in **Katalon Studio version 11.0.0**. In the beta phase, it is for evaluation purposes only and not recommended for production use.
:::

The **Smart Mobile Recorder** in **Katalon Studio** provides an upgraded experience for recording mobile app interactions. It allows you to capture user live actions, and generate test steps automatically.

<img src="https://tw-cdn.katalon.com/katalon-studio/record-and-spy/mobile-smart-recorder/katalon-studio-smart-mobile-recorder-interactive-mode-1.png" alt="katalon studio smart mobile recorder interactive mode" width="700px" />
<br/>

**Katalon Studio**'s **Smart Mobile Recorder** modernizes the existing **Mobile Recorder** experience while introducing a new **Interactive Mode** that enables live actions capturing directly from the live device preview. With **Interactive Mode**, you can review test steps and see the app UI all in one place, making test case creation more intuitive and reducing the manual back-and-forth between recording and debugging.

### Key Benefits

- Enhanced usability with a **modern UI** — Supports dynamic resizing, and object outlining on hover.
- Supports **interactive mode** with real-time test step capturing, for both Android and iOS.
- **Heartbeat mechanism** prevents Appium session timeouts during long recordings.
- **Pause and Resume** capability to control recording flow.
- **Auto refresh mechanism** to auto-update the device view and object tree every 60 seconds, to capture the latest app state (new screens, updated elements, or layout changes) alongside manual reload option.
- **Test step playback** any time for troubleshooting during the session, with visual feedback and running log.

## Enabling Smart Mobile Recorder

To switch to **Smart Mobile Recorder**:

1. Go to **Preferences → Recorder**.
2. Tick the **Smart Mobile Recorder** checkbox.
3. Click **Apply** and **Close**.

<img src="https://tw-cdn.katalon.com/katalon-studio/record-and-spy/recorder-preference-settings-1.png" alt="recorder preference settings" width="500px" />
<br/>

:::note
- Once enabled, launching **Mobile Recorder** opens the **Smart Mobile Recorder** UI instead of the usual **Mobile Recorder**.
- If you want to use **Mobile Recorder**, deselect **Smart Mobile Recorder** to opt-out, and opt back in any time.
:::

## Get started with Smart Mobile Recorder

<iframe
src="https://demo.arcade.software/amKdMej7r20jPGiFKav5?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Create and Save a Mobile Test Case with Katalon Studio"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

Follow these steps:

1. Open **Mobile Recorder** from the main toolbar.
2. Select a record mode: **Local Device**, **Remote Device**, **Custom Desired Capabilities**, or **Cloud Provider** to select supported devices from **TestCloud**.

:::tip Requirements
   - **Local Device** requires a configured mobile device connected to your machine. See instructions at [Mobile Recorder - Device Type](/katalon-studio/record-and-spy/mobile-record-and-spy-utilities/mobile-recorder-utility#device-types).
   - **Remote Device** requires a pre-configured remote device. See instructions at [Mobile app testing with Remote Devies](/katalon-studio/manage-projects/set-up-projects/mobile-testing/mobile-app-testing-with-remote-devices)
   - **Custom Desired Capabilities** requires a pre-configured device in **Desired Capabilities**. See configuration details at [Desired Capabilities in Mobile Testing](/katalon-studio/manage-projects/project-settings/desired-capabilities/set-up-desired-capabilities-in-mobile-testing-in-katalon-studio)
   - **Cloud Provider** requires at least one integration with a cloud provider (view all possible intergration options at [Cloud device integrations](/katalon-studio/integrations/integrations-in-katalon-platform#cloud-device-integrations)).
:::

3. Pick your app source (upload an **Application file** or specify the **Application ID**). **Application ID** is the package name for Android apps, or the bundle identifier for iOS apps.

For **TestCloud**: you can select available apps that have been uploaded on your organization's domain (see more details at [Upload a mobile app to TestOps](/katalon-testcloud/mobile-native-app-testing/upload-your-application/upload-a-mobile-app-to-testops))

<img src="https://tw-cdn.katalon.com/katalon-studio/record-and-spy/mobile-smart-recorder/smart-mobile-recorder-cloud-provider-configurations.png" alt="smart mobile recorder cloud provider configurations" width="500px" />
<br/>

4. Click **Start Record**.
5. By default, you enter **Manual Mode** - this mode functions like the legacy **Mobile Recorder**, with a modern, revamped UI. Turn on **Interactive Mode** to record actions directly from the live device view.
    - Your interactions will appear in the **Recorded Steps** panel in real time.
    - Each interaction automatically creates a new **Test Object**, or update existing one in the current recording session.
6. Throughout the session, you can:
    - Enable **auto-refresh** to update the device view every 60s.
    - **Verify and highlight objects** to verify objects via different locators.
    - Capture elements via screenshots, for image locator (see more details at [Mobile object locator strategies - Image](/katalon-studio/test-objects/mobile-test-objects/locator-strategies-for-mobile-objects)).
    - **Add/Edit/Remove** test steps.
    - **Playback test steps** selectively for troubleshooting, and see the app UI updates live with each step.
7. When done, click **Save** to save the test script including test steps, test objects and variables (if any).

## Feature details

#### Interactive mode (beta)

**Interactive Mode** lets you capture actions directly on the live mobile preview. It’s fast and visual, ideal for exploratory testing phase.

**Supported actions** are:

| Action | Keywords | How to perform |
| -- | -- | -- |
| Tap | [`Mobile.tap()`](/katalon-studio/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-tap) | Click any point on the **Device View**. |
| SetText | `Mobile.Tap()` and `Mobile.sendKeys` | Click a text box on the **Device View**, and input text from the testing device's keyboards. |
| Swipe | [`Mobile.swipe()`](/katalon-studio/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-swipe) | Swipe upwards/downwards on the **Device View**. |
| Swipe with Duration Support | [`Mobile.swipeWithDuration()`](/katalon-studio/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-swipe-with-duration), with a parameter for duration. | Swipe upwards/downwards on the **Device View**. |
| Double Tap | [`Mobile.doubleTap()`](/katalon-studio/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-double-tap) | Click any point on the **Device View**. |
| Tap-and-hold | [`Mobile.tapAndHold()`](/katalon-studio/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-tap-and-hold) | Click and hold at any point on the **Device View**, until the recorder prompts "performing TAP AND HOLD Action". |
| Zoom In/Out | [`Mobile.pinchToZoomInAtPosition()`](/katalon-studio/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-pinch-to-zoom-in-at-position) and [`Mobile.pinchToZoomOutAtPosition()`](/katalon-studio/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-pinch-to-zoom-out-at-position) (with default/customizable offset) |1. Press and hold `Alt` (Windows) or `Option` (Mac) to enable the zoom widget.<br/>2. The widget appears with an anchor in the middle. Drag the anchor to your desired location, and drag the outer dots inwards/outwards. |

See below a demonstration of the supported actions:

<iframe
src="https://demo.arcade.software/vwAXtZG0nPovqKrn17lj?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Explore Smart Mobile Recorder - Actions on Interactive Mode"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

**Key behaviors**

- Hovering over elements on the **Device View** or selecting elements in the **Screen Objects** highlights them.
- Your interactions with the **Device View** are instantly captured and listed in **Recorded Steps**. **Test Objects** are automatically generated.
- You don't need to switch to manual mode to stop recording interaction - **Pause** the session, interact with the **Device View**, then **Resume** the session to continue recording. 

<img src="https://tw-cdn.katalon.com/katalon-studio/record-and-spy/mobile-smart-recorder/katalon-studio-smart-mobile-recorder-pause-resume-button.png" alt="katalon studio smart mobile recorder pause resume button" width="500px" />
<br/>

#### Global actions

Global actions are available on the left panel in both modes:

| Action | Description |
| -- | -- |
| **Hide Keyboard**   | Hides the on-screen keyboard if it is blocking elements.                                                                           |
| **Press** | Provides quick-access buttons to perform **Press Home**, **Press Back** (Android only), or **Press Key Code** on the device.                                    |
| **Take Screenshot** | Captures the current device screen. Screenshots can be used for future reference or for creating image-based locators (see more details at [Mobile object locator strategies - Image](/katalon-studio/test-objects/mobile-test-objects/locator-strategies-for-mobile-objects)). |
| **Switch Context**  | Switch between **Native**, **WebView**, or other available contexts when testing hybrid apps.                                                    |
| **Rotate Screen**   | Rotates the device orientation (portrait/landscape) and updates the device preview accordingly.                                                  |
| **Scroll to Text** | Scrolls to a specific text in the app (if found). |

<img src="https://tw-cdn.katalon.com/katalon-studio/record-and-spy/mobile-smart-recorder/katalon-studio-smart-mobile-recorder-global-interactions.png" alt="katalon studio smart mobile recorder global interactions" width="250px" />

#### Device View vs Screen Objects panel

Smart Mobile Recorder provides two synchronized views of your application under test (AUT): the **Device View** and the **Screen Objects panel**.


<img src="https://tw-cdn.katalon.com/katalon-studio/record-and-spy/mobile-smart-recorder/katalon-studio-smart-mobile-recorder-interactive-mode-1.png" alt="katalon studio smart mobile recorder interactive mode" width="700px" />
<br/>

The **Device View** shows a live snapshot of your mobile app exactly as it appears on the device. Use this view to:
- Interact with the AUT in interactive mode.
- Confirm that UI updates or transitions appear correctly.
- Validate that the displayed content is what the test step is interacting with.

You can click **Detected Objects** to view the **Screen Objects panel**. This panel displays the underlying view hierarchy of the current UI, showing every UI element and its parent–child relationships. Use this view to:

- Verify that an element exists in the expected place in the structure.
- Verify overlapping/repeated elements.
- Inspect parent containers and grouping logic.
- Determine whether multiple similar-looking elements are actually different nodes in the hierarchy.
- Understand how deeply nested components are built behind the scenes.

Both views work together to provide a full understanding of your app's UI, ensuring both visual and structural accuracy.

#### Heartbeat Mechanism

The **heartbeat** runs silently while **Smart Mobile Recorder** is active, sending periodic commands to keep the **Appium** session alive.

**Benefits**

- Prevents session timeouts during idle periods.
- Reduces session drops on cloud providers such as **TestCloud** and **BrowserStack**.
- Improves stability for long recordings or debugging sessions.

The heartbeat stops automatically when you close the recorder.

#### Refresh Mechanism
 
You can manually refresh with the **Refresh** button, to update the latest device view and object tree. This is helpful when:

- The device UI changes but does not automatically appear in the preview.
- You want to confirm the current state of the AUT before performing new actions.

Optionally, you can turn on **Auto-refresh** to automatically update the device view every 60 seconds. Auto-refresh only fetches the UI preview, without performing any actions on the device.

<img src="https://tw-cdn.katalon.com/katalon-studio/record-and-spy/mobile-smart-recorder/katalon-studio-smart-mobile-recorder-refresh.png" alt="katalon studio smart mobile recorder refresh buttons" width="300px" />
<br/>

## Manage Test Steps, Objects, and Variables while you record

While you record, you can switch between **Recorded Steps**, **Captured Objects**, and **Variables** panels.

### Recorded Steps panel

All recorded steps automatically appear in the **Recorded Steps** panel. In this panel, you can:

- **Edit**, **remove**, or **arrange** recorded steps by dragging.
- Manually **add** new steps.
- **Playback** all steps or selectively.

<img src="https://tw-cdn.katalon.com/katalon-studio/record-and-spy/mobile-smart-recorder/katalon-studio-smart-mobile-recorder-test-steps-editor-1.png" alt="katalon studio smart mobile recorder test steps editor" width="700px" />
<br/>

During **Playback**, you can see the execution process live in the **Device View**, with execution details listed in the dedicated **Running Logs** panel.

### Captured Objects panel

The **Captured Objects** panel lists all mobile UI elements detected during recording. In this panel, you can:

- Switch between locator types and **Highlight & Verify** objects on the device to confirm accuracy. This version of KS supports viewing the locators only - editing locators during recording will become available in later versions.
- Select a default locator with the **Default** button. Default locator will be marked with the **bookmark** icon.
- Generate an image locator by selecting **Image** and take a screenshot with the **Take Screenshot** button.

<img src="https://tw-cdn.katalon.com/katalon-studio/record-and-spy/mobile-smart-recorder/katalon-studio-smart-mobile-recorder-object-editor.png" alt="katalon studio smart mobile recorder object editor" width="500px" />

### Variables panel

Manage temporary variables (such as credentials or config values) directly within your recording session.

You can:

- **Add**, **edit**, or **delete** variables during the session.
- Define attributes like **type**, **default value**, and **description**.
- **Mask sensitive fields** to hide passwords or tokens.
- Link variables to existing project data tables for data-driven testing.

<img src="https://tw-cdn.katalon.com/katalon-studio/record-and-spy/mobile-smart-recorder/katalon-studio-smart-mobile-recorder-variable-editor.png" alt="katalon studio smart mobile recorder variable editor" width="500px" />

**Supported variable types**:

- Basic types: string, number, boolean, null
- Global variables:
- Test Object (directory)
- Test data
- Test data value
- Property
- List
- Map

## Known Issues

The initial version of **Smart Mobile Recorder** has the following limitations. These capabilities will be expanded in future releases:
    - When saving, some variables have their type unexpectedly changed to “Method call” or trigger an “invalid test case” error.
    - Number-type variables with very large values are converted to “infinity” and then show as `null` on save.
    - If the default locator doesn’t match any element, using **Image** locator’s **Take Screenshot** throws an error.
    - Saving a test case that includes a NULL-type variable (with default value NULL) throws a Java error about `defaultValue` being null and stops saving.
    - NULL-type variables with null default values are silently dropped when saving the script.
    - On iOS (UIKitCatalog), recorded tap steps on list items (XCUIElementTypeStaticText) show as recorded but no actual tap occurs on the simulator.
    - In iOS (UIKitCatalog), **Interactive mode** taps sometimes hit the wrong element (e.g., tapping Slider section actually triggers ProgressView). This can also cause capturing the same object multiple times.
    - In iOS (UIKitCatalog 2.13), the highlight rectangle is drawn in the wrong position when hovering/moving the cursor over test objects.
    - Old Mobile Recorder shows outdated iOS device versions when using TestCloud devices.
    - Using **Verify and Highlight** with a “Custom locator” throws an error indicating that custom locator isn’t supported.
    - When starting with TestCloud, if the Appium-device connection is slow or times out, the Recorder dialog appears but the **Device View** never shows. No clear timeout error is presented.
    - Recorder UI does not reflect in the 2nd monitor. Device dialog cannot display the action button.
    - In **Interactive mode**, when an in-app dialog is shown, tapping outside it (which should dismiss the dialog) times out and no step is recorded—even though in emulator that tap would close the dialog.
    - If a locator matches multiple elements, neither **Interactive mode** nor manual mode performs a click.
    - **Custom keywords** added manually during a recording session will not be saved into the test case.
    - In **Interactive mode**, function keys such as `Shift`, `Tab`, etc. get sent into the text field as actual input.
    - [UI] When using Image locator → Take Screenshot → Highlight, an error appears (since Image locator isn’t supported yet), but the error message text overflows/overlaps the dialog bounds.
    - [UI] The Device dialog appears too large with lots of unused white space by default.
    - `getElement` keywords (`getElementLeftPosition`, `getElementTopPosition`, `getElementWidth`, `getElementHeight`) always attempted to locate elements using XPath, even when the Test Object was configured to use Attribute as the default locator.
    - For “Tap and Hold” duration input, the dialog allows choosing complex types (Global Variable, Variable, etc.), but the recorder doesn’t support them, resulting in recorded steps always having zero duration.