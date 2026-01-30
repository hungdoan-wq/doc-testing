---
title: How to overcome KRE long path issue on Windows
---

This document explains a work-around to the KRE long path issue on Windows machines.

## Issue

The KRE long path issue on Windows is found when using **Katalon Studio** and **Katalon Runtime Engine (KRE)** version **10.2.0 and later**. This issue causes occasional execution failures when executing test cases, test suites, or test suite collections, specifically on Windows machines.

When it occurs, you may see one of the following errors:

**Error 1: Path length limitation**

Example:

```jsx
Package path is too long C:/Users/sample/.katalon/10.3.2/Katalon_Studio_Engine_Windows_64-10.3.2/.
Please shorten the package path to stay within Windows command length limits.
```

**Error 2: Test run terminated without detailed logs**

Example:

```jsx
2025-10-13T09:55:23.0816398Z Launcher status after execution process completed: Terminated
```

## Root Cause

From version **10.2.0** onward, **Katalon Studio/Katalon Runtime Engine** uses a new **StandardVMRunner** (`org.eclipse.jdt.internal.launching`), which auto-generates a temporary classpath argument file with all required classpaths for execution.

In some environments, the path of this temp file exceeds **255 characters**, which is Windows' maximum supported file path length. This prevents Windows from processing the file properly, resulting in execution failures.

## Solution

**Katalon** is aware of this issue and is actively working on a permanent fix. In the meantime, these are temporary workarounds you can apply:

**Workaround 1: Use the “Pre-installed” KRE option**

Pre-install KRE option allows you to allocate a more surface folder for KRE, hence shortening the path length of the temporary files as they are created during executions.

1. Manually download the desired KRE version from **Katalon Releases**.
2. Place the KRE folder in a short directory path, and copy this path for later use. For example:
   
   ```jsx
   C:/Users/KRE_10.3.2
   ```

When executing KRE in **Azure DevOps** or **TestOps**, you are asked to specify a **Katalon Studio** version and the path to KRE. Leave the version blank, and use the path in step 2 for KRE.

3. Save the configuration and re-run your test.

**Example configurations**

With **Azure DevOps**:

<img src="https://tw-cdn.katalon.com/katalon-studio/support-docs/how-to-overcome-kre-long-path-issue-in-window-environment/kre-long-path.png" alt="Configure pre-installed KRE in Azure DevOps"/>

With local agent in **TestOps Legacy**:

<img src="https://tw-cdn.katalon.com/katalon-studio/support-docs/how-to-overcome-kre-long-path-issue-in-window-environment/kre-long-path-local-agent.png" alt="Configure pre-installed KRE in TestOps local agent"/>

**Workaround 2: Downgrade to an earlier version**

If you prefer not to manually download and configure **KRE**, you can downgrade to a previous **Katalon Studio** version earlier than **10.2.x* (**10.1.x** or **9.x**...).
