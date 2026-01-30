---
title: Library management best practices
---

This document shows ways to add external libraries to Katalon Studio and manage them effectively within a test project.

**Katalon Studio** allows using external Java `.jar` libraries either through project settings or by adding them to a designated folder. You can leverage this capability to extend Katalon Studio and handle specific situations when needed.

## Add external libraries to a project

You can add external libraries to a **Katalon Studio** project in three different ways:

- Use the `Gradle` plugin.
- Go to **Library Management** settings of a project.
- Copy and paste a library `.jar` file to the Drivers folder of a project.

### Use Gradle in Katalon Studio

**Katalon Studio** supports automatically downloading libraries from Maven repositories using the Gradle plugin. You can refer to the official GitHub repository here:  
https://github.com/katalon-studio/gradle-plugin

Using Gradle is especially useful for managing multiple dependencies consistently and avoiding manual `.jar` handling across environments.


If you're managing Gradle manually, check the Gradle version to check manually if Katalon Studio supports this version:

1. Check the Gradle version with the following command:

```jsx
gradle -version
```

**Result**:

```jsx
Gradle 7.5.1
Build time: 2022-08-05 21:17:56 UTC Revision: d1daa0cbf1a0103000b71484e1dbfe096e095918 Kotlin: 1.6.21 Groovy: 3.0.10 Ant: Apache Ant(TM) version 1.10.11 compiled on July 10 2021 JVM: 17.0.17 (Homebrew 17.0.17+0) OS: Mac OS X 15.6.1 aarch64
```

The Gradle version must be compatible with the Java version

[**Compatibility Matrix**](https://docs.gradle.org/current/userguide/compatibility.html "https://docs.gradle.org/current/userguide/compatibility.html")

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/libraries-management-7.png" alt="Libraries Management image 7" width="500" />
<br/>

2. Check if Katalon supports that library and what version is compatible in **About Katalon Studio Enterprise > Installation details > Plug-ins tab**, and search `org.apache.commons`:
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/libraries-management-3.png" alt="Libraries Management image 3" width="500" />
<br/>

### Use project settings

To add external libraries in project settings, do as follows:

1. In Katalon Studio, go to **Project > Settings > Library Management**.
2. In **Library Management > External Libraries**, click **Add** to browse your `.jar` file(s) (and dependencies if any).

<img src="/8f73fde0-22b2-11ed-9930-0242fe3e4a3f/KS-LIBRARY-Add-external-library.png" alt="Add external libraries" width="500" />
<br/>

To remove an added external library, select a library and click **Remove**.

1. Click **Apply and Close**.
2. If prompted, save resources to apply changes.

Once saved, Katalon Studio reloads the project and adds the library files to the project's **Drivers** folder.

<img src="/8f758480-22b2-11ed-9930-0242fe3e4a3f/KS-LIBRARY-View-add-external-library-in-folder.png" alt="Libraries added in the Drivers folder" width="500" />
<br/>

### Copy and paste a library `.jar` file to the Drivers folder

1. Copy the `.jar` file (and dependencies if required).
2. Paste the file into the project's **Drivers** folder.
3. Close and reopen the project to reload the classpath.

<img src="/ed2532a0-cc63-11ed-a4d3-0242cfbc79b5/ks-paste-file-in-drivers.png" alt="Manually add the library" width="500" />
<br/>

When the `.jar` file is recognized by Katalon Studio, it becomes available for use in test scripts and custom keywords.

## Exclude built-in libraries

> **Requirement:** An active **Katalon Studio Enterprise license**

The **Exclude built-in libraries** feature allows you to remove selected built-in libraries defined in the project `.classpath` file, except for the following core libraries:

- `com.kms.katalon.*.jar`
- `selenium-server-standalone-3.141.59.jar`
- `poi-3.17.jar`
- `poi-ooxml-3.17.jar`
- `poi-ooxml-schemas-3.17.jar`
- `java-client-7.0.0.jar`
- `io.cucumber.*.jar`

Removing these core libraries may cause feature failures.

You can replace excluded built-in libraries with external versions to achieve more flexible dependency control.

<img src="https://tw-cdn.katalon.com/katalon-studio/KS-Exclude-the-library.png" alt="Exclude libraries" width="500"/>
<br/>

## Best practice steps for managing external libraries

The following steps are most recommended to help reduce classpath conflicts, improve execution stability, and ensure consistency across local and CI/CD environments.

### Step 1: Configure Gradle dependency scopes appropriately

When defining dependencies in `build.gradle` file, carefully choose the scope:

| **Feature** | **compileOnly** | **implementation** |
| -- | -- | -- |
| **Required Stage** | **Compile Time Only.** | **Compile Time AND Runtime.** |
| **Visibility** | The dependency is **not visible** to downstream consumers (other modules depending on your project). | The dependency is **visible** to downstream consumers. |
| **Included in Final Build** | **NO.** The `.jar` file is **not packaged** into the final output (`.jar` or application build). | **YES.** The `.jar` file **is packaged** into the final output. |
| **Primary Use Case** | Used for dependencies that are **provided by the runtime environment** (e.g., Katalon Studio, Tomcat, JDK). | Used for **core libraries** that are essential for the application to function and are _not_ expected to be provided externally. |
| **Impact on Conflicts** | **Mitigates Conflict Risk:** Forces your code to use the version already present in the runtime environment. | **High Conflict Risk:** If the version you specify conflicts with the runtime version, you will likely encounter a runtime error. |
| **Benefit in Katalon** | **Best Practice** for common libraries (like Apache Commons, Groovy, Selenium) that Katalon already bundles. | Only use for **brand new, specialized libraries** that are definitively _**not**_ **included in Katalon's distribution.** |

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/libraries-management-8.png" alt="Libraries Management image 8" width="500" />
<br/>

**Recommendation:**  
Use `compileOnly` for common libraries (such as Apache Commons, Groovy, Selenium) that Katalon Studio already provides.  
Use `implementation` only for libraries that are **not** included in Katalon’s distribution.

This approach minimizes version conflicts between external libraries and Katalon’s runtime environment.

### Step 2: Build the Gradle

Run the following command:

```jsx
gradle getDeps
```

For projects using Gradle, the `getDeps` task can be used to:

- Collect all required runtime dependencies
- Resolve transitive dependencies automatically
- Copy the required `.jar` files into the project’s **Drivers** folder

This is particularly important for:
- CI/CD execution
- Preventing classpath synchronization issues between Gradle’s cache and Katalon Studio’s Groovy compiler

### Step 3: Check library loading

After adding or updating libraries:

- Confirm that the `.jar` files appear in the **Drivers** folder
- Reload the project if necessary
- Ensure scripts referencing the libraries compile and execute successfully


<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/libraries-management-5.png" alt="Libraries Management image 5" width="500" />
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/libraries-management-6.png" alt="Libraries Management image 6" width="500" />
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/libraries-management-4.png" alt="Libraries Management image 4" width="500" />
