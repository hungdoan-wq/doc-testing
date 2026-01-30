---
title: 'Get started with Katalon Runtime Engine (KRE)'
---

This guide shows you how to get started with Katalon Runtime Engine (KRE).
## Requirements 
Before setting up KRE, make sure to complete the following requirements: 

- Verify that your computer meets the system requirements for KRE. See: [System Requirements](/katalon-studio/supported-environments-for-katalon-studio-and-katalon-runtime-engine-kre).

- A KRE license. See: [KRE License](/katalon-studio/katalon-studio-enterprise-and-katalon-runtime-engine-license/katalon-runtime-engine-floating-license).

- A Katalon API Key for authentication.  See: [Generate a Katalon API Key](/katalon-platform/administer/profile/katalon-api-key-in-katalon-testops).


## Download KRE 

As KRE has a standalone installation package, no installation is required and you just need to download the executable. Follow these steps:

1.  Navigate to [Katalon Runtime Engine website](https://katalon.com/katalon-runtime-engine#:~:text=your%20Studio%20trial.-,Download,-KRE) and log in with your account.
2.  Scroll to the bottom to find the download link. Select the compatible version for your operating system and download.
<img className="image" width="500px" src="/26646090-d38f-11ed-ae00-0242cfbc79b5/kre-download.png" alt="download location for KSE and KRE"/> 
<br/>

3.  Unzip the package and move to the preferred directory to execute automation tests.

    Depending on the OS, you might need to perform further configuration.

    - **macOS**: you have to enable the KRE application in System Preferences / Security & Privacy / General.
    - **Linux**: Be sure to install **OpenJDK 17** on your Ubuntu (NOT Oracle JDK). You can find the installation steps in the OpenJDK documentation: [Install OpenJDK](http://openjdk.java.net/install/). Once you finish the installation, you can verify with the `java -version` command.
    
        Troubleshoot: You may encounter the `NoClassDefFoundError` error since Oracle JDK is being used. Please uninstall Oracle JDK, and then install [OpenJDK 17](https://adoptium.net/en-GB/temurin/releases/?package=jdk&version=17).


## Execute tests with KRE 

To execute tests with KRE, follow these steps:
1.  Open the command-line interface of your OS and navigate to the folder of KRE that contains the executable (`katalonc.exe` for Windows or `katalonc` for macOS and Linux).
    :::note
    On macOS, the executable is stored in the `Contents` folder of the application package. For example, the executable path can be `/Downloads/Katalon_Studio_Engine_MacOS-8.6.0/Katalon Studio Engine.app/Contents/MacOS/katalonc`.
    :::
2.  Enter the `katalonc` command line along with arguments.

    On Windows:

    ```jsx
    katalonc -noSplash -runMode=console -projectPath="C:\Users\username\Desktop\Katalon Studio\Sample healthcare\test.prj" -retry=0 -testSuiteCollectionPath="Test Suites/healthcare-tests - TS_RegressionTestCollection" -browserType="Chrome" -executionProfile="default" -apiKey="" --config -proxy.auth.option=NO_PROXY -proxy.system.option=NO_PROXY -proxy.system.applyToDesiredCapabilities=true
    ```

    On macOS and Linux:

    ```jsx
    . /katalonc -noSplash -runMode=console -projectPath="/Users/username/Katalon Studio/Sample healthcare/test.prj" -retry=0 -testSuiteCollectionPath="Test Suites/healthcare-tests - TS_RegressionTestCollection" -browserType="Chrome" -executionProfile="default" -apiKey="" --config -proxy.auth.option=NO_PROXY -proxy.system.option=NO_PROXY -proxy.system.applyToDesiredCapabilities=true
    ```

    :::note
    - To easily generate KRE commands, you can use Command Builder. See: [Command Builder in Katalon Studio](#command-builder-in-katalon-studio).

    - For the full list of supported arguments, see: [Command-line syntax in Katalon Runtime Engine](/katalon-studio/execute-tests/katalon-runtime-engine/command-line-syntax-in-katalon-runtime-engine).
    :::

## KRE exit codes 
Below is the list of exit codes of KRE: 

- 0: The execution passed with no failed or error test case.
- 1: The execution has failed test cases.
- 2: The execution has error test cases.
- 3: The execution has failed test cases and error test cases.
- 4: The execution cannot start because of invalid arguments.
- 5: The project is invalid.
- 6: Test execution quota limit is reached.
- 7: Unable to check quota.

## Command Builder in Katalon Studio 
Command Builder is a utility in Katalon Studio that allows you to generate KRE commands quickly and precisely.

To access Command Builder, from the Katalon Studio main toolbar, click on **Build CMD**.
<img className="image" width="400px" src="/18d1b097-316f-4cb6-9434-cabe4fe72809/KS_main_toolbar_command_builder.png" alt="Build CMD" />
<br/>

The **Generate Command for Console Mode** dialog displays as below.
<img className="image" width="500px" src="/40f6b1e0-a550-11ee-b8c3-0242c7a41fd4/KS_generate_command_for_console_mode.png" alt="Generate Command for Console Mode" />
<br/>

To generate a KRE command, you need to specify the following information: 
| Setting | Description |
|----------|--------------|
| **Test Suite** | The test suite or test suite collection to be executed. |
| **Execution Platform** | `Run with`: The environment for the execution. Click **Edit** and select an environment to run your test with. <br/>`Run Configuration`: Available for TestCloud environments. Click **Edit** to specify the TestCloud execution environments. <br/>`Profile`: The execution profile. See [Global variables and Execution profile](/katalon-studio/data-driven-testing/global-variables-and-execution-profile). <br/>`Override the execution profile and environment of all test suites`: Allows overriding profiles and browser types for all test suites in a test suite collection. <br/>`Katalon Organization`: If you belong to more than one Organization subscribing to KRE licenses, you can choose which Organization validates your license usage. |
| **Authentication** | `Katalon API Key`: API key represents a user's credentials. |
| **Execution Configurations** | `Update WebDriver automatically`: Enables automatic WebDriver updates. <br/>`Terminate the execution once the total number of test failures reaches this threshold`: Sets the maximum number of test failures (must be a natural number > 0). <br/>`Apply proxy configuration from application settings`: See [Configure Proxy Preferences in Katalon Studio](/katalon-studio/get-started/workspace-settings/katalon-studio-preferences/configure-proxy-preferences-in-katalon-studio). <br/>`Update execution status of the test suite after {x} second(s)`: Sets the delay period between execution status updates. <br/>`Retry options`: Defines retry behavior. See [Modify execution information in Test Suite execution](/katalon-studio/execute-tests/how-to-execute-test-cases#execute-a-test-suite). |
| **Katalon TestOps** | `Project`: Overrides the Project ID in TestOps. <br/>`Release`: Links test runs to a release created on TestOps. See [Create and edit releases in TestOps](/katalon-platform/plan/create-and-edit-releases-in-testops). |


After completing the configuration, click **Generate Command**. In the **Generate Command** dialog, you can copy the command and paste to the command prompt/terminal for execution.

<img className="image" width="500px" src="/5a8f7ac0-3331-11ed-9930-0242fe3e4a3f/ks-850-generated-command.png" alt="Generate Command in Katalon Studio to paste to the command prompt" />
<br/>

## Use the console.properties file 

Besides generating and copying KRE command text from Command Builder, you can also package your configuration in the `console.properties` file. This file contains key-value pairs of your KRE arguments.

1.  In Command Builder, click **Generate Property File** and save the file to the preferred location.

<img className="image" width="500px" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/console-mode-execution/console-properties.png" alt="Generate a console.properties" />
<br />

2.  You can open and update the arguments as needed.

<img className="image" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/console-mode-execution/console.properties-file.png" width="500" alt="the console.properties in Katalon Studio" />
<br />

3.  To run KRE with the arguments in `console.properties`, use the following syntax.

    ```jsx
    katalonc -propertiesFile="<absolute path to console.properties file>" -runMode=console -apiKey="<Your_API_Key>"
    ```
