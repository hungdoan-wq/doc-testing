---
title: Reduce Execution Time in Mobile Testing in Katalon Studio
---


<p xmlns="http://www.w3.org/1999/xhtml" className="p">To speed up a test suite's execution, we recommend starting the   application once in the first test case and resetting it in each   remaining test case with the following snippet:</p> 
<pre xmlns="http://www.w3.org/1999/xhtml" className="pre codeblock"><code>import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory{"\n"}import io.appium.java_client.AppiumDriver{"\n"}AppiumDriver driver = MobileDriverFactory.getDriver();{"\n"}driver.resetApp(){"\n"}</code></pre> 
