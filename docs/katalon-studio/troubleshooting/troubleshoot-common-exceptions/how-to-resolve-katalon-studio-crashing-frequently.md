---
title: How to resolve Katalon Studio crashing frequently?
---

## Condition
Users have reported that Katalon Studio crashes randomly when using version 9.x, with crashes becoming more frequent after upgrading to KS 10.3.0, even after applying the Combined Hover workaround.
- Having multiple split tabs open increases the chance of a crash.
- Running tests while multiple Katalon windows are open often leads to a crash.
- Running tests in a single window typically does not cause crashes.


## Cause
This issue is linked to an underlying problem in the Eclipse framework, as reported in the Eclipse community: [Crash in Embedded WebKit on macOS 15.4 (ARM64) with Eclipse 4.35.0](https://github.com/eclipse-platform/eclipse.platform.swt/issues/1978).

- **Affected Eclipse versions:** 4.32 through 4.35, impacting Katalon Studio 10.3.2 (Eclipse 4.33)
- **Crash condition:** macOS 15.4 (ARM64) with Embedded WebKit rendering engine
- Earlier Eclipse versions may also be affected, but this has not been officially confirmed

Since the crash stems from macOS or Eclipse, Katalon Studio cannot guarantee a permanent fix until Apple or Eclipse releases a patch.


## Solution
While waiting for a permanent fix, you can try the following workarounds:

#### Option 1: Downgrade Katalon Studio
- Use an older Katalon Studio version that runs on Eclipse **earlier than 4.32** (e.g., KS 9.5.0 or older)
- This avoids the affected Eclipse versions where the WebKit crash occurs
- If the issue persists, try an even older version of Katalon

#### Option 2: Downgrade macOS
- If possible, downgrade macOS to **15.3 or below**, where the crash has not been observed. For instructions, refer to this Apple official guide: [How to download and install macOS](https://support.apple.com/en-us/HT211683)

#### Option 3: Minimize concurrent usage
- Avoid opening multiple Katalon windows simultaneously
- Limit the number of split tabs to reduce UI rendering load
- These steps can help reduce crash frequency until an official fix is available
