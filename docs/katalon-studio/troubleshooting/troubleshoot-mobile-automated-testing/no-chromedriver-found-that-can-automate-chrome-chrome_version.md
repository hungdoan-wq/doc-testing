---
title: No Chromedriver found that can automate Chrome '<chrome_version>'
---

While testing web apps on mobile browsers, you might encounter a `ChromeDriver` related error:

```jsx
error: No Chromedriver found that can automate Chrome_version
```

Cause: `ChromeDriver` might be outdated.

You can try:

- Updating `ChromeDriver` (See [Update a WebDriver](https://docs.katalon.com/katalon-studio/manage-projects/set-up-projects/web-testing/handle-webdrivers/upgrade-or-downgrade-webdrivers-in-katalon-studio#update-a-webdriver) for more information.)

- Manually downloading `ChromeDriver` and specifying `ChromeDriver` in **Desired Capabilities** (See [Install ChromeDriver for Appium](/katalon-studio/record-and-spy/mobile-record-and-spy-utilities/hybrid-mobile-apps-testing/native-render-only-webview-render-capture-elements-in-hybrid-android-apps-in-katalon-studio#install-chromedriver-for-appium) for more information.)