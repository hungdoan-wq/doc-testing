---
title: '[Mobile] Swipe With Duration'
---

This document contains specifications for the `swipeWithDuration` keyword in Mobile testing.

## Description

Simulate swiping fingers on the mobile device, with a parameter to specify swipe duration.

Keyword name: `Mobile.swipeWithDuration`

This keyword is useful for:

- Simulating precise swipe gestures with controlled speed    
- Testing scroll behaviors with specific timing requirements
- Automating drag-and-drop operations with duration control
- Replicating user swipe patterns with realistic timing

## Parameters

|Parameter|Param Type|Required|Description|
|---|---|---|---|
|startX|int|Yes|The starting X coordinate of the swipe|
|startY|int|Yes|The starting Y coordinate of the swipe|
|endX|int|Yes|The ending X coordinate of the swipe|
|endY|int|Yes|The ending Y coordinate of the swipe|
|durationInMillis|long|Yes|Duration of the swipe in milliseconds|
|flowControl|FailureHandling|Optional|Specifies the failure handling strategy|

## Example

You want to swipe from (200,300) position to (400,600) position in 500 milliseconds on current screen:

```jsx
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.util.internal.PathUtil as PathUtil

//'Start application on current selected android's device'
Mobile.startApplication(GlobalVariable.G_AndroidApp, false)

Mobile.tap(findTestObject('Application/android.widget.TextView - Graphics'), GlobalVariable.G_Timeout)

//'Swipe from 200,300 to 400,600 posisition on screen'
Mobile.swipe(200, 300, 400, 600, 500)

//'Close application on current selected android's device'
Mobile.closeApplication()
```