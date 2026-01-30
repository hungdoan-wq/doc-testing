---
title: Native Windows Recorder in Katalon Studio
---
import useBaseUrl from '@docusaurus/useBaseUrl';

The Native Windows Recorder gives you a seamless recording experience that is similar to Web Recorder.

:::important
Starting in version 10.4.0, Desktop app testing is available again with a new custom driver based on the FlaUI library (no installation required).
For full details on feature availability and version support, see the [Katalon Studio Release Notes: Version 10.x](/katalon-studio/release-notes/katalon-studio-release-notes-version-10.x).
:::

## Requirements

- This feature is supported on Windows only
- You have an active Katalon Studio Enterprise license
 
## Native Windows Recorder features coordinate-based recording

Native Windows Recorder now features **coordinate-based recording**. This feature allows KS to record an element's relative coordinates to its selector, greatly enhance clicking precision.

For example, your test involves clicking on the red X button to close a tab in Notepad. **Katalon Recorder** records the button's offsets relative to its top-left corner, and saves them as a set of (X, Y) parameters in `clickElementOffset`. With this coordinate pair, **Katalon Recorder** reproduces your click exactly where you originally did, instead of defaulting to the button's center.

The `click` and `rightClick` actions are recorded as `clickElementOffset` and `rightClickElementOffset` actions respectively. See more details on these keywords:
 
- [[Windows] Click Element Offset](/katalon-studio/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-click-element-offset) 
 
- [[Windows] Right-click Element Offset](/katalon-studio/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-right-click-element-offset) 

## Steps to record with Native Windows Recorder

1. Right-click on the Windows Recorder icon and select **Native Windows Recorder** to open the Native Windows Recorder windows.

 <img className="image" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/native-windows-recorder/open.png" width="300px" alt="windows native recorder button in Katalon Studio"/>
 
2. The **Native Windows Recorder** dialog box appears. Specify the  **Application File** directory.

    To start a Universal Windows Platform application, the application's execute file should be:
    
    - **ApplicationID** if your app is published on Microsoft store
    
    - **PackageFamilyName!Application ID** if your app is still in development.

<img className="image" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/native-windows-recorder/app-file.png" width="300px" alt="windows native recorder file directory prompt"/>
 
3. Click **Start** to deploy the application in testing mode.
<img className="image" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/native-windows-recorder/action-bar.png" width="300px" alt="windows native recorder start button"/>
 
4. In this mode, when you hover over an element of the app, **Katalon Studio** highlights the identified object with a red rectangle. To record, simply interact with objects as you would normally do.

<img className="image" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/native-windows-recorder/hover-highlight.png" width="500px" alt="windows native recorder a typical session"/>

On the right-side box, you can see two tabs: **Recorded Actions** and **Captured Objects**.

<img className="image" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/native-windows-recorder/recorded-actions.png" width="300px" alt="windows native recorder captured actions"/>

When you perform an action, it is recorded in the **Recorded Actions** tab. The list of available actions is the same as Katalon Studio's built-in keywords. You can edit it to add any action, call another test case, and/or use Custom Keywords.

In **Captured Objects** tab next to **Recorded Actions**, you can view all elements captured during the recording session, and click on each object for edits. You can customize the locator of a captured object by modifying it in the **Locator** tab of **Object Properties**. The captured objects’ locators are their absolute XPaths.

<img className="image" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/native-windows-recorder/captured-objects.png"  width="300px" alt="windows native recorder captured actions"/>
