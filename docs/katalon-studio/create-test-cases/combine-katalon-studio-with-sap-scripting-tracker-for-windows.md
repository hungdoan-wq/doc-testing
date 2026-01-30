---
title: Combine Katalon Studio with SAP Scripting Tracker for Windows
---

This tutorial demonstrates how to combine **Katalon Studio** with SAP Scripting Tracker for Windows app testing.

:::note
- Starting version 10.0.0, **Katalon Studio** no longer uses the WinAppDriver-based library, requirement to SAP Scripting Tracker. If you need to continue using WinAppDriver for SAP Scripting Tracker, continue with Katalon Studio 9.x.
- To continue supporting Desktop App Testing, **Katalon Studio** officially transitioned to a new FlaUI-based driver in 10.4.0 (See [Desktop App Testing with FlaUI Driver in KS](https://docs.katalon.com/katalon-studio/manage-projects/set-up-projects/windows-desktop-apps-testing/desktop-applications-testing-with-flaui-driver-in-katalon-studio) for more details).
:::

Scripting Tracker is a utility and a replacement to the SAP GUI Scripting Development Tools.
It is an SAP GUI analyzer and recorder on the SAP GUI Scripting base. You can learn more about SAP Scripting Tracker in the SAP blog post here: [Scripting Tracker – Development Tool for SAP GUI Scripting]("https://blogs.sap.com/2014/11/20/scripting-tracker-development-tool-for-sap-gui-scripting/").

## Requirements

- WinAppDriver version 1.1.0 onwards.

- SAP Scripting Tracker version 3.15 onwards. The download link to **SAP Scripting Tracker** app has been deprecated by its maintainers (previously [Scripting Tracker]("https://tracker.stschnell.de/#")). If you already have it installed, you can continue using it with Katalon Studio 9.x.

## Enable SAP GUI Scripting in SAP

To enable SAP scripting mode, you can refer to the SAP document here: [Enabling Scripting on the Server Side]("https://help.sap.com/viewer/8ecea00c1f854fd0a433c4aef5da1ea2/Cloud/en-US/001675913cc54719930aa8197478dcde.html"). 

## Implement the Java code recording for SAP Scripting Tracker

Katalon can only read Java language generated from SAP Scripting Tracker. To use SAP GUI Scripting in the context of Java you need the Java COM Bridge (JACOB). You can download and install Java COM Bridge (JACOB) from the GitHub repository: [Java COM Bridge (JACOB)]("https://sourceforge.net/projects/jacob-project/"). 

## Build your test case in Katalon Studio

### Download our sample Katalon SAP GUI project

This sample project provides you with code samples, custom keywords, and sample test cases that give you the necessary preparations to automate your test script with SAP Scripting Tracker. 

You can clone or download the sample project here at our GitHub repository: [Katalon SAP GUI sample project]("https://github.com/katalon-studio-samples/kat-sap-gui-sample-test"). 

### Add your login account to a test case in Katalon Studio

1. After downloading our sample project, from the **Test Explorer** panel, open **Profiles > default**. 

2. Double-click the **Value** cell of the **username** and **password** variables. 
<img className="image" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/katalon-sap-scripting-tracker/KS-SAP-Open-the-default-file.png" alt="Open the default file" />
<br />

3. In the opened **Edit variables** dialog, change the sample value to your SAP account. 
<img className="image" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/katalon-sap-scripting-tracker/KS-SAP-Fill-in-your-username.png" alt="Fill in your username" />

<br /> 
<img className="image" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/katalon-sap-scripting-tracker/KS-SAP-Fill-in-ur-password.png" alt="Fill in your password" />

<br /> 

### Create a new test case in Katalon Studio based on the sample project

1. Create a new test case. Go to **File > New > Test Case**. 

2. From the **Test Explorer** panel of our sample project, go to **Test Cases > Common** folder. There are 3 sample test cases as follows: 

| **Test Case** | **Description** |
|--|--|
| **StartSAPLogon** | This sample test case starts SAP Logon, then goes to the sign-in section. |
| **Login** | This sample test case starts an SAP session then uses the **username** and **password** variables to login. |
| **TestCaseTemplate** | This sample test case calls the **StartSAPLogon** and **Login** test cases, then enables Katalon to read the SAP Scripting Tracker script. |


<img className="image" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/katalon-sap-scripting-tracker/KS-SAP-3-sample-test-cases.png" alt="3 sample test cases" />

<br />

3. Open the **Script** tab of the **TestCaseTemplate** test case, copy the content and paste it into the **Script** tab of the new test case created from step 1. 

<img className="image" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/katalon-sap-scripting-tracker/830-KS-SAP-Copy-the-test-script-in-the-TestCaseTemplate-sample.png" alt="Copy the test script in the TestCaseTemplate sample test" />

<br />

<img className="image" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/katalon-sap-scripting-tracker/830-KS-SAP-Paste-the-test-script-into-the-new-test-case.png" alt="Paste the test script into the new test case" />

<br />

### Record test script using SAP Scripting Tracker

1. Start SAP Logon and sign in SAP GUI with your SAP account.

<img className="image" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/katalon-sap-scripting-tracker/KS-SAP-Start-SAPLogon.png" alt="Start SAPLogon" />

<br />

2. After signing in, open SAP Scripting Tracker. Click **Refresh**, then select the current SAP session.

<img className="image" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/katalon-sap-scripting-tracker/KS-SAP-select-SAP-session.png" alt="Select the SAP session" />
<br />

3. Choose Java language, then click **Record** to start recording your SAP GUI script.

<img className="image" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/katalon-sap-scripting-tracker/KS-SAP-Choose-Java-language.png" alt="Choose Java" />
<br />

    Here, we record the following scenario:

    In the opened SAP GUI session, go to **SAP Menu > Human Resources**. Double-click on **PPMDT - Manager's Desktop**. The **Manager's Desktop** interface opens.

    Double-click on **Personal Data** to open the folder.

    Navigate to **Reports > Employee data**, then click **Maternity**.

    We stop recording here.

<img className="image" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/katalon-sap-scripting-tracker/ezgif.com-gif-maker.gif" alt="Recording from Scripting Tracker" />

<br />

4. After finishing your recording, copy and paste the content from Scripting Tracker into your Katalon test script.

<img className="image" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/katalon-sap-scripting-tracker/KS-SAP-Copy-the-script-from-Scripting-Tracker.png" alt="Copy the script from Scripting Tracker" />
<br />

<img className="image" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/katalon-sap-scripting-tracker/KS-SAP-Paste-after-pasting-the-script-into-Katalon.png" alt="Paste the script into the Katalon test script" />
<br />

<img className="image" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/katalon-sap-scripting-tracker/KS-SAP-Final-results.png" alt="Results after pasting the script into the Katalon test script" />
<br />

### Run the test script in Katalon Studio

:::info notes
Make sure you have `WinAppDriver.exe` running from the installation directory. By default, you can find it at `C:\Program Files (x86)\Windows Application Driver\WinAppDriver.exe`.
:::

To run the recorded test script, on the main toolbar, select **Windows** in the dropdown list next to **Run**. 

<img xmlns="http://www.w3.org/1999/xhtml" className="image" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/katalon-sap-scripting-tracker/KS-SAP-Run-the-test.png" alt="Run the test" /> 
<br />

**Katalon Studio** automatically signs in SAP GUI with your SAP account and playback the recorded steps from Scripting Tracker. 
