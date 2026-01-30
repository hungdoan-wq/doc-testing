---
title: How to disable proxyType in remote capabilities when executing tests on Sauce Labs
---

## Condition
When running tests on Sauce Labs, you may notice that the proxyType: direct setting is automatically added to the remote desired capabilities. This can interfere with the test execution.

## Cause
Katalon Studio (KSE) applies the **System Proxy settings** to all network connections by default, including:
- Recording and spying
- Test execution
- Tool integrations
- WebDriver or SDK downloads

These proxy settings are also passed into the Desired Capabilities, which results in proxyType: direct being added.

## Solution

#### For KSE
1. Go to **Katalon Studio Enterprise Settings** → > **Katalon** > **Proxy** → **System**.
2. Uncheck the **Auto-apply to test execution desired capabilities** option.
    <img src="https://tw-cdn.katalon.com/katalon-studio/support-docs/system-proxy-settings-unselected.png" alt="Uncheck the Auto-apply to test execution desired capabilities" width="600" />
3. Save the changes and rerun your tests.
    
    This prevents the proxy settings from being applied to Desired Capabilities.


#### For Katalon Runtime Engine (KRE)
Add the following arguments when running KRE to disable applying proxy settings:
```jsx
--config -proxy.system.applyToDesiredCapabilities=false 
```
