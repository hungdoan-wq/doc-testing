---
title: Unable to click downloaded file in Chrome browser
---

## Issue

While executing a test on Chrome that involves opening a downloaded file, you might not be able to click on the Downloads dropdown.

## Root Cause

This is due to a known limitation of Selenium 4 WebDriver Bidi used in **Katalon Studio**. You can view the full discussion at [BiDi Mode Prevents Manual Launching/Open Files from Chrome Download Bar](https://github.com/SeleniumHQ/selenium/issues/16552).

## Workarounds

To solve this issue, follow these steps to configure `webSocketUrl=false` in **Desired Capabilities** for **Chrome** browser:

1. Open your project.
2. Go to **Projects > Settings > Desired Capabilities > Chrome**, and add:

| Name | Type | Value |
| -- | -- | -- |
| webSocketUrl | Boolean | `false` |
