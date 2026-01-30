---
title: Unable to Start Application while running Android tests on a Windows machine
---
import useBaseUrl from '@docusaurus/useBaseUrl';




1. Upgrade to the latest version of Appium.
2. In Katalon Studio, go to **Project Settings > Desired Capabilities > Mobile > Android** and add this desired capabilities:
- Name: `appWaitActivity`.
- Type: String.
- Value: *
    <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/roubleshooting-automated-mobile-testing/android-error.png")} alt="desired capabilities" />

3. Click **Apply** to save, then run the test again.
