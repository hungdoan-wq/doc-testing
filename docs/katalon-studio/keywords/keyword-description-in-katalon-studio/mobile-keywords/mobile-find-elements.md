---
title: '[Mobile] Find Elements'
---

## Description

Implement the `Mobile.findElements` keyword to find mobile elements by test object.

**Keyword name:** `Mobile.findElements`

### Parameters

| Parameter   | Parameter Type  | Required | Description                                                                                                                                                        |
| ----------- | --------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `to`          | TestObject      | Yes      | Represents a mobile element.                                                                                                                                       |
| `timeout`     | int             | Optional | Maximum period of time (in seconds) that system will wait to return a result. If not specified, **Studio** will use the default timeout value in **Project Settings**. |
| `flowControl` | FailureHandling | Optional | Specifies the failure handling strategy to apply when the operation fails.                                                                                         |

### Returns

The found Mobile elements or `null` if cannot find any.

## This keyword is useful for

- Finding and verifying multiple elements with the same locator strategy, including presence checks and element counts
    
- Iterating through element collections for batch operations, custom wait conditions, and assertions
    

## Example

**Scenario**: You want to find all button elements on a mobile screen using a test object:

```jsx
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.testobject.TestObject as TestObject
import org.openqa.selenium.WebElement
import com.kms.katalon.core.util.KeywordUtil

// Start the application 
Mobile.startApplication('path/to/app', false) 

// Wait for the screen to load 
Mobile.delay(3) 

// Create or use existing TestObject 
TestObject testObj = findTestObject('Mobile/button_elements') 

// Find all matching elements with default failure handling 
List<Element> elements = Mobile.findElements(testObj, 10) 

for (int i = 0; i < elements.size(); i++) { 
    KeywordUtil.logInfo(elements.get(i).toString()) 
} 
// Close the application
Mobile.closeApplication()
```