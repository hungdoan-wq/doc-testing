---
title: Chrome Fails to Launch When webSocketUrl=false is Set
---

This document explains workarounds to the failure `Chrome fails to launch` for Chromium-based browsers, on **Katalon Studio** versions 10.3.0+.

## Issue

In **Katalon Studio 10.3.0**, setting the desired capability `webSocketUrl=false` for Chromium-based browsers (including **Google Chrome** and **Microsoft Edge**) causes the browser to fail when launching. You may find a session creation failure error message:

```jsx
org.openqa.selenium.SessionNotCreatedException:
Could not start a new session. Response code 500.
Message: session not created: cannot process extension #2
```

## Root Cause

The issue is caused by a compatibility issue between the `webSocketUrl=false` setting and **ChromeDriver**, specifically on versions **10.3.0** onwards. This issue doesn't affect **TestCloud executions**, only affecting **Local executions**.

## Workarounds

**Workaround 1: Use a different version of Katalon Studio**

The compatibility issue is fixed on **Katalon Studio version 10.3.2 and later**, and doesn't exist on **Katalon Studio versions 10.2.4 and prior**.

It is always strongly recommended to use the [latest version of Katalon Studio](https://katalon.com/download).

**Workaround 2: Update the Smart Wait component**

If you can't use another **Katalon Studio** version, you can download and patch the **Smart Wait** component to solve:

1. Download the patched **Smart Wait.zip** from the following link:  
   https://drive.google.com/file/d/1unR-Ko4zTXQTj0bSNmtucAIqToMupCGp/view?usp=sharing

2. Ensure **Katalon Studio** is completely close. Then, use this file to replace the existing **Smart Wait.zip** in **Katalon Studio** folder:
   - On **macOS**  
     ```jsx
     /Applications/Katalon Studio Enterprise v10.3.0.app/Contents/Eclipse/configuration/resources/extensions/Smart Wait.zip
     ```

   - On **Windows**  
     ```jsx
     C:\Users\<your_username>\.katalon\packages\KSE-10.3.0\configuration\resources\extensions\Smart Wait.zip
     ```

**Workaround 3: Remove the capability**

Removing the setting `webSocketUrl=false` for Chromium-based browsers can help. Only use this setting when absolutely necessary.