---
title: Configure environments for test cases
---
This document shows how to configure environments in **Katalon Studio**.

## Environments

When executing a test case or test suite/test suite collection, you can choose a **test environment** based on your project type:

- For web projects, you can run in either **Browsers** and **Browsers (headless)** mode. The headless mode makes test runs more quickly and CI/CD friendly. See [Configure headless browser environment](#headless-browser-environment) for details.

- For mobile tests, pick either **Android** or **iOS**. See: [Supported mobile operating systems (OS)](https://docs.katalon.com/katalon-studio/supported-environments-for-katalon-studio-and-katalon-runtime-engine-kre) to see if your device is supported.
     
If you see no device, make sure you already turned on your phone's Developer Mode. Then try to unplug, and reconnect several times until you are prompted to accept/ trust this device.

- For Windows app test, pick **Windows**.

- The **TestCloud** option is for executing test suites and test suite collections. See [Katalon TestCloud overview](/katalon-testcloud/testcloud-overview) for more details.
    
- The **Custom** is for if you want a specific environment and not the defaults as above.

For an advanced setup on each environment, see [Introduction to desired capabilities](https://docs.katalon.com/katalon-studio/manage-projects/project-settings/desired-capabilities/introduction-to-desired-capabilities-in-katalon-studio) for more details.

## Headless browser environment

Headless browser testing means running tests without showing the user interface. It helps save project teams a tremendous amount of time and smoothly integrate into the CI/CD process.​

In case you need to add more desired capabilities to those headless browsers:

1. Go to **Project > Settings > Desired Capabilities > WebUI > Chrome (headless)/ Firefox (headless)**.
2. Add your desired capabilities.
    
For example, if you want the headless browser to have a window size of 300x400 (px): 

| Name | Type | Value |
| -- | -- | -- |
| args | List | [--window-size=300,400] |
    
<img alt="Set up desired capabilities for Chrome/Firefox (headless)" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/headless-browsers-execution/KS-HEADLESS-Set-DC.png" width="500px" />  
      
You can learn more about desired capabilities in this document: [Desired capabilities](https://docs.katalon.com/katalon-studio/manage-projects/project-settings/desired-capabilities/introduction-to-desired-capabilities-in-katalon-studio).

## Chromium browser environment

Besides Chrome/Edge Chromium browsers, you can configure to execute tests in a custom Chromium-based browser. The example below uses **Brave Browser** as an example - any Chromium-based browser can be added.

**On Windows**

1. Go to: **Project > Settings > Desired Capabilities > Custom**
2. Create a custom browser configuration for your browser, as shown in the screenshot below.  
   The value of `binary` must point to the installed Brave browser executable on your machine.

<img src="https://tw-cdn.katalon.com/katalon-studio/support-docs/how-to-run-test-on-chromium-based-browser/how-to-run-test-on-chromium-based-browser-window-dc.png" alt="Configure Brave browser binary path on Windows"/>

3. Update the **Chrome WebDriver** to match your Chromium version.

<img src="https://tw-cdn.katalon.com/katalon-studio/support-docs/how-to-run-test-on-chromium-based-browser/how-to-run-test-on-chromium-based-browser-update-webdriver.png" alt="Update Chrome WebDriver for Chromium-based browser"/>

4. Run the test using the added browser's configuration.

<img src="https://tw-cdn.katalon.com/katalon-studio/support-docs/how-to-run-test-on-chromium-based-browser/how-to-run-test-on-chromium-based-browser-run-test.png" alt="Run test with Brave browser in Katalon Studio"/>

**On macOS**

Create a custom browser configuration similar to the example below.

<img src="https://tw-cdn.katalon.com/katalon-studio/support-docs/how-to-run-test-on-chromium-based-browser/how-to-run-test-on-chromium-based-browser-mac-dc.png" alt="Configure Brave browser binary path on macOS"/>

The `binary` value on `macOS` should be set to: `/Applications/Brave Browser.app/Contents/MacOS/Brave Browser`

After configuring the binary path, update the Chrome WebDriver if needed and execute your test using the custom browser's configuration.

## Troubleshoot "Cannot locate elements" issue

If your test (Chrome headless) failed with the error `Cannot locate elements`:
    
<img alt="Chrome website error" src="https://docs.katalon.com/a6048420-8e91-11ee-ab4f-0242c7a41fd4/Chrome_-_site_without_self-signed_cert.jpeg" width="500px" />

Simply add these to the Chrome's desired capabilities to Chrome:

| Name | Type | Value |
| -- | -- | -- |
| AcceptInsecureCerts | Boolean | true |
| args | List | [--ignore-certificate-errors] |

<img alt="desired caps to ignore certificate errors" src="https://docs.katalon.com/a5ef4e70-8e91-11ee-ab4f-0242c7a41fd4/KS_-_desired_caps_to_ignore_certificate_error.png" width="700px" />