---
title: Introduction to Desktop app testing in Katalon Studio
---



This document gives a quick introduction on desktop app testing in Katalon Studio.

:::note
Starting from Katalon Studio 10.4.0, **Windows Desktop app testing** is officially available. We are using a new custom driver based on the FlaUI library, which supports **spy**, **record**, and **execution** of test cases—**no separate installation required**.
If your projects rely on Windows Desktop app testing, we recommend upgrading to Katalon Studio 10.4.0 and later to access Windows Desktop app testing.
For more information on feature availability, limitations, and supported application types, see the [Katalon Studio Release Notes: Version 10.x](/katalon-studio/release-notes/katalon-studio-release-notes-version-10.x).
:::
 
Katalon Studio fully supports automation test for desktop apps written in the following platforms: Universal Windows Platform (UWP), Windows Forms (WinForms), Windows Presentation Foundation (WPF), and Classic Windows (Win32). 

## Requirements
 
Katalon Studio version 10.4.0 onwards.
 
## How desktop app testing works in Katalon Studio

With a new library, Katalon Studio now allows you to create and execute test cases for your Windows app testing project with ease.

1. First, refer to our guide on [Create a test project in KS](/katalon-studio/manage-projects/manage-test-projects/create-a-test-project-in-katalon-studio) to create a Desktop app project.

2. Then, follow this guide [Create a test case](/katalon-studio/create-test-cases/create-a-new-test-case-in-katalon-studio) to create a blank test case.

3. In this new test case, use our [Spy](/katalon-studio/create-test-cases/create-a-new-test-case-in-katalon-studio) or [Record](/katalon-studio/record-and-spy/windows-record-and-spy-utilities/windows-record-utility-in-katalon-studio) utilities to detect objects in your app, and record testing steps. These steps will be saved to your test case.

    Or, you can add a new object manually:

<img width="500px" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/introduction-desktop-app-testing/Windows_Object.png" alt="adding a windows object in Katalon Studio" />

4. Execute the test case by choosing the Windows environment.

<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/record-windows-actions/run-with-windows.png" width="250px" alt="run with windows" />

You can see [Execute a test case](/katalon-studio/execute-tests/execute-a-test-case) for more details on executing test cases in Katalon Studio.

## Windows keywords for test cases

In Katalon Studio, you can view and write steps for your test cases in the [manual view](/katalon-studio/create-test-cases/generate-test-steps-in-katalon-studio-manual-view) and [script view](/katalon-studio/create-test-cases/generate-test-steps-in-katalon-studio-script-view). The manual view is friendlier for no-code users, and script view allows more customization to the steps.

For Windows app projects, each test step corresponds to one Windows keyword.

To add a Windows keyword in the manual view: 

 <img width="500px" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/introduction-desktop-app-testing/Windows_Keyword_1.png" alt="katalon studio add a Windows keyword in the manual view" width="481px" />   

To add a Windows keyword in the script view, type **Win**..., then press **Ctrl + Space** to see suggestions:

 <img width="500px" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/introduction-desktop-app-testing/Windows_Keyword_2.png" alt="katalon studio add a Windows keyword in the script view" />

To have an overview of all Windows built-in keywords, navigate to **Keywords Browser** > **Built-in Keywords** > **Windows Keyword**: 

 <img width="500px" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/introduction-desktop-app-testing/Windows_Keyword_3.png" alt="list of all Windows built-in keywords in Katalon Studio" />   
