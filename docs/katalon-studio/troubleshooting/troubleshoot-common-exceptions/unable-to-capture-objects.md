---
title: "Unable to capture objects: ScreenshotException"
---

## Condition
When recording automation on Android apps you might encounter the error message: `Unable to capture objects. Reason: ScreenshotException`. 
<img  src="/fdd47600-8e88-11ee-ab4f-0242c7a41fd4/KS_-_error_Unable_to_capture_objects.jpeg" alt="Katalon Studio - error Unable to capture objects" width="500" />

## Cause
This is a known issue that some Android app may have settings that prevent screenshots from being taken. See Android [FLAG_SECURE](https://developer.android.com/reference/android/view/WindowManager.LayoutParams#FLAG_SECURE).

## Solution
The Android app developer needs to disable [FLAG_SECURE](https://developer.android.com/reference/android/view/WindowManager.LayoutParams#FLAG_SECURE) from the Android app so that Katalon Studio can capture and automate the screen.
