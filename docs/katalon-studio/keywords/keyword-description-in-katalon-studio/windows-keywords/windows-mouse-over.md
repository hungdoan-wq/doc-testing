---
title: '[Windows] Mouse Over'
---

This document provides details on the `MouseOver` keyword in Katalon Studio.

## Description

Move the mouse cursor over the Windows element found by using the locator value of the given Windows object. Useful for revealing hover states, tooltips, and context-dependent UI.

Keyword name: `mouseOver`

## Parameters

| Parameter       | Parameter Type      | Required | Description                                                                      |
| --------------- | ------------------- | -------- | -------------------------------------------------------------------------------- |
| `windowsObject` | `WindowsTestObject` | Yes      | An object describing the locator and locator strategy to find a Windows element. |

## Example

This example script performs a hover action over a specific Windows object. It first locates the target Windows object item using its path `"Object Repository/MenuItemView"`, then moves the mouse cursor over that object to trigger any hover-related effects or interactions.

```jsx
// Hover over the menu item with directory "Object Repository/MenuItemView"
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

Windows.mouseOver(findWindowsObject("Object Repository/MenuItemView"))
```

### Notes

* The target element should be present and visible; otherwise the action may fail.
* If the UI updates on hover (e.g., a tooltip appears), consider adding a short wait/assertion after hovering to verify the expected state.
