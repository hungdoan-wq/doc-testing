---
title: Desktop application testing with FlaUI driver in Katalon Studio
---


This document details all relevant notes on the setup for **desktop application testing** in Katalon Studio, made possible with FlaUI.WindowTestAnnouncement

Starting from Katalon Studio 10.4.0, **Windows Desktop app testing** is officially available. We are using a new custom driver based on the FlaUI library, which supports **spy**, **record**, and **execution** of test cases—**no separate installation required**.

## Get started: auto-start driver on localhost

When you spy, record, or execute a Windows test, Katalon Studio starts the built-in desktop driver on `localhost:4723` by default.

You can edit this URL in **Project Settings > Desired Capabilities > Windows**:

<img src= "https://tw-cdn.katalon.com/katalon-studio/manage-projects/set-up-projects/windows-desktop-apps-testing/Winapp_testing_blank_driver_url.png" alt="Blank Desktop Driver URL" width="500px" /> <br/>

Once the testing is complete, Katalon Studio automatically stops the driver.

:::note
The first time you run desktop testing (spy/record/execute), it may take a few seconds for the driver to start, as Windows OS performs verification checks. The speed will improve in subsequent runs.
:::

<img src= "https://tw-cdn.katalon.com/katalon-studio/manage-projects/set-up-projects/windows-desktop-apps-testing/KS_10.3.0_FlaUI_driver_delay_start.png" alt="FlaUI driver delayed start" width="600" />

## Set up desktop driver to run tests on a remote machine

If you need to test a Windows app running on a remote machine, you must set up the desktop driver on that remote machine, and form a connection to it from your controlling machine.

Follow these steps:

1. Copy the driver package to the remote machine. The package should already be inside **Katalon Studio**'s folder:
    `<Katalon Studio folder>\configuration\resources\extensions\FlaUIWebDriver\FlaUI.WebDriver.zip`

2. Extract the package.
3. Find your remote machine's IP address by opening Terminal or Command prompt on it, and run:
    ```jsx
    ipconfig
    ```
4. Replace `<remote-machine-ip>` in this below command with the IP address, and run this command on the remote machine:

    ```jsx
    FlaUI.WebDriver.exe --urls=http://<remote-machine-ip>:4724 --environment Development  --SessionCleanup:SchedulingIntervalSeconds=300
    ```

5. Once that's set, go to **Project Settings > Desired Capabilities > Windows** in your local **Katalon Studio**, and set the **Desktop Driver URL** to:

    ```jsx
    http://<remote-machine-ip>:4724
    ```

6. The driver should now run on the remote machine, and connection between the two should be formed. To verify, open a browser on your controlling machine and navigate to: `http://<remote-machine-ip>:4724/status`.

    A successful response like below confirms that the driver is running on the remote machine, and ready to accept commands from your controlling machine.

<img src= "https://tw-cdn.katalon.com/katalon-studio/manage-projects/set-up-projects/windows-desktop-apps-testing/Verify_status_FlaUI_driver.png" alt="FlaUI driver ready" width="600" />

## Desired Capabilities

The new FlaUI driver follows the W3C WebDriver specification.

- Non-standard capabilities must now use the `appium:` **prefix:**.
- The capability `ms:waitForAppLaunch` is now supported in KS 10.4.0 for `SwitchToWindowTitle`. You can also use `Windows.delay(number of seconds)` to wait for app launch.

See [Set desired capabilities in Windows desktop app testing](/katalon-studio/manage-projects/project-settings/desired-capabilities/set-desired-capabilities-in-windows-desktop-app-testing) for more details.
    

## Keywords

**Built-in keywords**

Built-in keywords remain semantically the same.

**New Keywords**

- [Windows.takeScreenshot](/katalon-studio/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-take-screenshot)
- [Windows.takeElementScreenshot](/katalon-studio/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-take-element-screenshot)

**Updated keywords**

`ClickElementOffset` and `RightClickElementOffset` have been updated to follow the W3C WebDriver specification.

|Keyword|KS 9.x.|KS 10.3+|
|---|---|---|
|ClickElementOffset|Offset from top-left (x = 0, y = 0)|Offset from element center (x = width/2, y = height/2)|
|RightClickElementOffset|Offset from top-left (x = 0, y = 0)|Offset from element center (x = width/2, y = height/2)|

**Custom keywords**

Katalon Studio 10.3.0 uses Selenium 4, replacing Selenium 3 used in Katalon Studio 9.x.

If your custom keywords directly access the driver object `io.appium.java_client.windows.WindowsDriver`, you may need to update them to align with the Selenium 4.

## Migration from KS 9 to KS 10.3 and later

1. Update how you start the driver:
    - Localhost = automatic
    - Remote machine = manual ([see above](#set-up-desktop-driver-to-run-tests-on-a-remote-machine))

2. Add `appium:` prefix for non-standard desired capabilities (`appWorkingDir`, `appArguments`, etc.). This action only needs to be updated once.

## Known issues and limitations

The following are known limitations and issues in Katalon Studio 10.3.0 and later for Windows Desktop app testing; we are actively working to improve support and will address these in future versions.

- Application closing may be delayed. It can take several seconds to close the application under test (AUT).
- Applications with multiple windows may cause focus issues. Examples include splash screens, loading bars, or multiple main windows. To maintain focus and ensure test stability:
    - Provide the Application Title in the Spy/Recorder screen.
    - Use the `Windows.startApplicationWithTitle()` keyword instead of `startApplication()`.
    - If your app includes windows with different titles, use a regex pattern, e.g., SplashScreen|MainWindow|LoadingBar.
- Some applications require administrator privileges Apps like 1Password need the driver to run with elevated permissions. In such cases:
    - Manually start the desktop driver as Administrator.
    - Copy the driver URL (e.g., `http://localhost:4723`) to **Project Settings > Desired Capabilities > Windows > Desktop Driver URL**.
- Dropdown lists and context menus cannot be inspected locally. These UI components are not capturable when the app runs on the same machine. To inspect them:
    - Run the application on a remote machine.
    - Use **Remote Inspect** to capture dropdown or context menu elements.