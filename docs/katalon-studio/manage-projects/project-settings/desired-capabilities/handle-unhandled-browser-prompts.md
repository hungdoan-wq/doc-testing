---
title: Handle unhandled browser prompts
---

Starting in Katalon Studio version 10.3.0, modern browsers — Chromium-based browsers, Firefox, and Safari — now support WebDriver BiDi (Bidirectional Protocol). This enhanced protocol introduces a more structured way to handle unhandled modal dialogs that may interrupt automated test execution. These dialogs include types such as `alert`, `confirm`, `prompt`, `beforeUnload`, and `file`.

To manage how each of these dialog types should be handled during test execution, you can configure the `unhandledPromptBehavior` capability. This capability allows you to specify actions like `accept`, `dismiss`, or `ignore` for each dialog type, helping ensure smoother test automation across supported browsers.

## Capability format

:::note Notes
- By default, all prompt types (`alert`, `confirm`, `prompt`, `beforeUnload`, `file`, `default`) are mapped with `UserPromptHandlerType = "ignore"`.
- You can override this behavior in **Desired Capabilities** per browser type.
- If a specific prompt type is not mapped in the capability, Katalon Studio treats it as `"accept"` by default and automatically accepts the dialog during execution.
:::

Accepted values for each prompt type are:
- `dismiss`: Accepted values for each prompt type
- `accept`: Accepts all simple dialogs automatically.
- `ignore`: Leaves all simple dialogs for the user to handle manually.

Here is an example of a map for `unhandledPromptBehavior`:

```jsx
{
  alert: session.UserPromptHandlerType,
  beforeUnload: session.UserPromptHandlerType,
  confirm: session.UserPromptHandlerType,
  default: session.UserPromptHandlerType,
  file: session.UserPromptHandlerType,
  prompt: session.UserPromptHandlerType,
}

session.UserPromptHandlerType = "accept" / "dismiss" / "ignore";
"dismiss"   All simple dialogs encountered should be dismissed.
"accept"    All simple dialogs encountered should be accepted.
"ignore"    All simple dialogs encountered should be left to the user to handle.
```

### Configure unhandledPromptBehavior map in Katalon Studio

1. Go to **Project > Settings > Desired Capabilities > WebUI** and select your browser.

2. On the Desired Caopabilities dialog of your selected browser, click **Add**, and enter:
    - **Name**: `unhandledPromptBehavior`
    - **Value** type for Chromium (Google Chrome and Edge Chrome) and Firefox: `Dictionary`
    - **Value** type for Safari: `String`

3. Click the **Value** field, then configure the prompt types as child keys.

    :::note
    Each browser may require a different value type, so ensure you adjust the configuration accordingly.
    :::

Refer to the following screenshots for example configurations of the `unhandledPromptBehavior` mapping:

- Chromium (Chrome and Edge Chrome):

    <img src= "https://tw-cdn.katalon.com/katalon-studio/manage-projects/project-settings/desired-capabilities/unhandledPromptBehavior_Chrome_desired_capabilities.png" alt="unhandledPromptBehavior mapping for Chrome" width="800" />

- Firefox:

    <img src= "https://tw-cdn.katalon.com/katalon-studio/manage-projects/project-settings/desired-capabilities/unhandledPromptBehavior_Firefox_desired_capabilities.png" alt="unhandledPromptBehavior mapping for Firefox" width="800" />

- Safari:

    <img src= "https://tw-cdn.katalon.com/katalon-studio/manage-projects/project-settings/desired-capabilities/unhandledPromptBehavior_Safari_desired_capabilities_settings.png" alt="unhandledPromptBehavior mapping for Safari" width="800" />

