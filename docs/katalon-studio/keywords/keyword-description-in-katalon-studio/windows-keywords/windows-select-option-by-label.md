---
title: '[Windows] Select Option By Label'
---

## Description

Select a **visible** option in a combo box by its label.

Keyword name: `selectOptionByLabel`

## Parameters

| **Parameter** | **Parameter Type** | **Required** | **Description** |
| -- | -- | -- | -- |
| `windowsObject` | `WindowsTestObject` | Yes | An object that describes the locator and locator strategy to find Windows Element. |
| `label` | `String` | Yes | The label of the item you want to select in the combo box |
| `timeout` | `int` | Yes | The system wait for this much time (seconds) to execute the keyword and return result |
| `flowControl` | `FailureHandling` | Optional | Specify [failure handling](https://docs.katalon.com/docs/maintain/configure-failure-handling-settings-in-katalon-studio) schema to determine whether the execution should be allowed to continue or stop. |

## Example

This script selects an option labeled “Item 1” in a Windows application's combo box. It first locates the combo box using its path `WpfApplication/Simple_Controls/Combobox_2nd` with the keyword `findWindowsObject`, then calls `Windows.selectOptionByLabel(...)` with a 1-second timeout to choose the labeled item.

```jsx
// Select item
// label "Item 1"
// Combo box is located via findWindowsObject method: findWindowsObject('WpfApplication/Simple_Controls/Combobox_2nd')
// timeout 1 second
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

Windows.selectOptionByLabel(findWindowsObject('WpfApplication/Simple_Controls/Combobox_2nd'), 'Item 1', 1)
```