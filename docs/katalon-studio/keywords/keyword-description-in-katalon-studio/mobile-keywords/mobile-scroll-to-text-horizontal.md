---
title: '[Mobile] Scroll To Text Horizontal'
---

## Description

<p xmlns="http://www.w3.org/1999/xhtml" className="p">Scroll horizontally (left/right) to an element which contains the given text.</p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p">Keyword name: <code className="ph codeph">Mobile.scrollToText</code></p> 

## Parameters

| Parameters   | Parameter Type   | Required   | Description   |
|------------|------------|------------|------------|
| text | String | Yes | Text of the element to scroll to |
| timeout | int | Optional | Timeout in seconds |

## Example 

Scroll to the element which the displayed text is `Xfermodes`, and stop scrolling after timeout of 5 seconds:

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

//'Scroll to element which displayed text is Xfermodes, timeout set to 5 seconds'
Mobile.scrollToTextHorizontal('Xfermodes', 5)

//'Get item's label'
def itemText = Mobile.getText(findTestObject('Application/Graphics/android.widget.TextView - Xfermodes'), GlobalVariable.G_Timeout)

//'Verify if item's label is equal to "Xfermodes"'
Mobile.verifyEqual(itemText, 'Xfermodes')

//'Close application on current selected android's device'
Mobile.closeApplication()
```