---
title: How to resolve "No Default Proposals" error message
---

## Condition
You may encounter the error *"No Default Proposals"* message when typing keywords in Katalon Studio **Script** view. This issue typically appears during auto-completion and expecting keyword suggestions (for example, typing `WebUI.`).
<img src="https://tw-cdn.katalon.com/katalon-studio/support-docs/no-default-proposal-error.avif" width="600" alt="No default proposals error message" />

## Cause
This issue occurs because the **Content Assist settings** Katalon Studio System settings are not configured properly.

## Solution
1. Open Katalon Studio Settings.
2. Navigate to **Java** → **Editor** → **Content Assist** → **Advanced**.
3. Under **Default Proposal Kinds**, make sure all checkboxes are enabled.
   <img src="https://tw-cdn.katalon.com/katalon-studio/support-docs/enable-default-proposal-kinds.png" alt="Enabled all checkboxes" width="600" />

4. In the same **Content Assist** settings window, increase the **Auto activation delay (ms)** value to `700`.
   <img src="https://tw-cdn.katalon.com/katalon-studio/support-docs/auto-activation-delay.png" alt="Enabled all checkboxes" width="600" />
5. Click **Apply and Close**.
6. In your Script editor, type `WebUI.` and wait briefly.

    The auto-complete proposals should now appear again.