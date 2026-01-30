---
title: How to fix plugins not loading automatically when opening a project
---

## Condition
Plugins are not automatically loaded when opening their projects in Katalon Studio.

This issue can occur due to corrupted or outdated project configuration files, which prevent the IDE from correctly linking the required plugins.


## Solution
1. Create a full copy of your project directory (zip it or duplicate the folder) and store it as a backup. This allows you to safely restore your project if anything goes wrong.
2. In your project folder, delete the following files and directories:
```jsx
/bin
/Libs
.classpath
.project
```

These items contain build and configuration data. Removing them forces Katalon Studio to generate fresh, clean configuration files when the project is reopened.

3. Launch Katalon Studio and reopen your project. <br/>
   After completing these steps, your project should reopen normally with all installed plugins loading automatically as expected.