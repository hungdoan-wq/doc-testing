--- 
title: How to fix Visual Testing failures caused by resolution differences
---

## Condition
When performing Visual Testing, Katalon compares two images: the baseline (reference) and the checkpoint (current run).

If their resolutions differ, Katalon detects them as mismatches even if the UI visually looks identical.
This commonly occurs with **scrollable elements** (e.g., calendars or tables), where the visible area changes between test runs, leading to mismatched screenshots.

A common scenario:
- You use `WebUI.setViewPortSize()` to standardize screenshot dimensions.
- However, differences appear when running tests in TestOps, headless mode, or across machines with varying screen configurations.
- Dynamic or scrollable elements (like tables growing in height) can alter the captured area, making the image comparison inconsistent.

## Cause
This issue can happen due to the following causes:
- The `WebUI.setViewPortSize()` keyword may not apply consistently across environments, especially in headless Chrome.
- Scrollable or dynamically resizing content causes the screenshot to capture different visible areas.
- Baseline and checkpoint screenshots therefore differ in height or width.

## Solution
1. **Ensure a consistent environment**. Run your visual tests in Chrome headless mode to stabilize viewport behavior:
```jsx
-browserType="Chrome (headless)"
```

Headless mode ensures that `WebUI.setViewPortSize()` applies consistently, regardless of the OS or display scaling.

2. **Handle dynamic or scrollable content**. For elements like calendars, data grids, or scrollable containers, ensure the element is fully visible before capturing screenshots.
   1. Scroll element into view
   ```jsx
   // Target test object (e.g., calendar)
   TestObject to = findTestObject('EU/Shareplan EU/Page_(staging) job ready/Calendar screenshot')
   // Get WebDriver instance
   WebDriver driver = DriverFactory.getWebDriver()
   // Find and scroll the element into view
   WebElement element = WebUiCommonHelper.findWebElement(to, 30)
   ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView();", element)
   ```

   2. Force full-page viewport size
   ```jsx
   @Keyword
   def static void ForceFullpageSize() {
      def lngInnerWidth = WebUI.executeJavaScript('return window.innerWidth;', null)
      def lngInnerHeight = WebUI.executeJavaScript('return document.documentElement.scrollHeight;', null)
      int innerWidth = 1920
      int innerHeight = 4000 // Fallback height to ensure full visibility
      if (lngInnerWidth != null) innerWidth = lngInnerWidth.toInteger()
      if (lngInnerHeight != null) innerHeight = lngInnerHeight.toInteger()
      WebUI.setViewPortSize(innerWidth, innerHeight)
   }
   ```

This ensures the entire content is visible in one frame before capturing screenshots.

3. **Verify and set the correct viewport size**. Identify your browser’s maximum viewport dimensions and set them explicitly:
```jsx
WebUI.setViewPortSize(1920, 1080)
```

Make sure the specified values are less than or equal to your screen’s resolution.

4. After stabilizing the viewport and scroll behavior:
- Rerun the test to generate new baseline images.
- Execute again to produce checkpoint images.
- Check the comparison: the resolutions should now match.