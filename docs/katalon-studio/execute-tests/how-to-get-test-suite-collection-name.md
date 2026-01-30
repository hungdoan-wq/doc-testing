---
title: Get Test Suite Collection's name
---

This document explains how to display **Test Suite Collection**'s name during execution in Katalon Studio.

**Katalon Studio** currently does not provide a built-in API to directly obtain the **Test Suite Collection** name. However, there is a workaround to print the **Test Suite Collection**'s name to the execution log.

When executing a **Test Suite Collection**, **Katalon Studio** generates a folder structure similar to the following:

```tsx
Reports/
   <Test Suite Collection Name>/
      <Execution Timestamp>/
         <Test Suite Name>/
```

The workaround requires pasting a Groove script to one of the test cases, that retrieves the report's path, and extract the **Test Suite Collection**'s name.

Steps:

1. Open a test suite that definitely belongs to the to-be-executed **Test Suite Collection**.
2. Edit the test case in **Script** view, and paste the following script at the start of the test case:

```jsx
import java.text.SimpleDateFormat
import com.kms.katalon.core.configuration.RunConfiguration

// Get the Test Suite name (not the collection)
String testsuiteName = RunConfiguration.getExecutionSourceName()

// Path to the report folder of the current Test Suite
String reportDir = RunConfiguration.getReportFolder()

// Remove "/<TestSuiteName>/" to move up to the parent level
String testSuiteSubPath = reportDir.split('/' + testsuiteName + '/')[0]

// Extract the execution timestamp folder
String reportTime = testSuiteSubPath.split('Reports' + '/')[1]

File foundFile = null

// Recursive closure to search for matching timestamp folder
def findFile
findFile = { File dir ->
    if (foundFile != null) return
    dir.listFiles().each { file ->
        if (file.isDirectory() && file.name != reportTime) {
            findFile(file)
        } else if (file.name == reportTime) {
            foundFile = file
        }
    }
}

// Start search from the parent directory
findFile(new File(testSuiteSubPath))

// Extract and print Test Suite Collection name
if (foundFile) {
    String filePath = foundFile.absolutePath
    println 'Test Suite Collection Name: ' +
        filePath.split('/' + reportTime + '/')[1].split('/' + reportTime)[0]
}
```
3. See results

:::note
- This script does not work when the **Test Case** is executed on its own, or inside a **Test Suite**.
:::