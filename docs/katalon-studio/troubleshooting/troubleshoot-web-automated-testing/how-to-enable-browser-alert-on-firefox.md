---
title: How to enable Browser Alert on Firefox?
---

## Condition

When executing tests in Katalon Studio, the expected alert does not appear in Firefox. This issue only occurs when running tests through Katalon; the alert displays correctly when testing manually. In contrast, Chrome and Microsoft Edge display the alert as expected both manually and through Katalon automation.


## Cause
In Firefox, the `dom.disable_beforeunload` preference is set to true by default. This setting prevents the `beforeunload` event from triggering alerts, which explains why the expected alert is blocked during automated execution.


## Solution
To resolve this issue, the `dom.disable_beforeunload` preference must be set to false before launching Firefox. This can be achieved by configuring Firefox through `FirefoxOptions`.

Since the Firefox driver constructor accepts only `FirefoxOptions` (and not generic DesiredCapabilities), the preference needs to be explicitly added before creating the driver instance.

**Example**
```jsx
String browser = DriverFactory.getExecutedBrowser().getName();

if (browser.equalsIgnoreCase("FIREFOX_DRIVER")) {  
    System.setProperty("webdriver.gecko.driver", DriverFactory.getGeckoDriverPath());
    
    FirefoxOptions firefoxOptions = new FirefoxOptions();
    firefoxOptions.addPreference("dom.disable_beforeunload", false); // Required for Firefox
    
    WebDriver driver = new FirefoxDriver(firefoxOptions);
    driver.navigate().to(url);
    DriverFactory.changeWebDriver(driver);
} else {
    WebUI.openBrowser(url);
}
```

This ensures the alert is displayed in Firefox, consistent with other supported browsers.