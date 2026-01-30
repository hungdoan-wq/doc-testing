---
title: Self-healing tests in Katalon Studio
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This article guides you through **Katalon Studio**'s different self-healing mechanisms of broken object locators while maintaining test cases.

:::info requirements
An active **Katalon Studio Enterprise** license
:::

When the **application under test (AUT)** changes, some object locators might no longer work due to UI changes, and the test case fails to identify target elements that worked before.

To assist with test maintenance, **Katalon Studio** supports different self-healing mechanisms to self-heal broken object locators during executions.

We also offer a sample project for you to try out. You can clone or download this sample project from our GitHub repository: [Self-healing sample project](https://github.com/katalon-studio/self-healing-demo#self-healing-sample-project). Learn more with our Katalon Academy course: [Self-Healing Mechanism in Test Automation](https://academy.katalon.com/courses/self-healing-testing/?utm_source=kat_docs&utm_medium=self_healing_tests).

## Classic self-healing and AI self-healing

:::note
- Self-healing suggestions with **Smart Locators** that are not approved in version 9.3.1 will not be visible when the project is opened in previous versions.
:::

By default, **Katalon Studio** enables both **classic** and **AI self-healing** mechanisms. See [Enable/Disable classic and AI self-healing](#enabledisable-classic-and-ai-self-healing) to learn how to disable them.

Classic self-healing happens when **Katalon Studio** can't detect the test object. It then tries other known locators of that object, and if it finds one that works, the test continues. Once the test finishes, **Katalon Studio** suggests replacing the broken locator with the one that works.

If classic self-healing can't heal the broken locator, **Katalon Studio** triggers AI self-healing. This feature uses a Large Language Model (LLM) to read inputs such as **page source**, **accessibility tree**, **full-page screenshot**, and **element screenshots** to try to locate the element.

<iframe src="https://demo.arcade.software/PQCUYgCaWCNvKbZWJ3V1?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" title="AI Self-healing in Katalon Studio Enterprise" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen="true" allow="clipboard-write" style={{ width: "100%", height: "400px", border: "none" }} ></iframe>

If both fail to detect the test object, **Katalon Studio** may stop or continue, depending on the failure handling option you have configured. See [**Failure Handling**](/katalon-studio/maintain-tests/configure-failure-handling-settings-in-katalon-studio).

:::warning Limitations
- AI self-healing might have issues finding the element with the image locator. This module will be improved in upcoming releases.
:::

## Enable/Disable Classic and AI Self-Healing

In both tabs, **WebUI** and **Mobile**, there is an option to enable or disable self-healing mode at the top:

<img src="https://tw-cdn.katalon.com/katalon-studio/maintain-tests/self-healing/enable-self-healing.png" alt="enable self healing" width="300px" />
<br/>

If you disable this option, **Katalon Studio** will not trigger either classic or AI self-healing mechanisms.

To **disable AI self-healing**, scroll to the bottom and make sure to **deselect Enable AI Self-Healing**.

To **disable classic self-healing**, **deselect** all locator methods:

<Tabs groupID="self-healing" defaultValue="webui" values={[
  {label: 'WebUI', value: 'webui'},
  {label: 'Mobile', value: 'mobile'},
]}>
    <TabItem value="webui">

    <img src="https://tw-cdn.katalon.com/katalon-studio/maintain-tests/self-healing/turn-off-classic-web-self-healing.png" alt="turn off classic web self healing" width="700px" />
    <br/>

    </TabItem>
    <TabItem value="mobile">

    :::note
    - Disable all options for both Android and iOS devices.
    :::
    <img src="https://tw-cdn.katalon.com/katalon-studio/maintain-tests/self-healing/turn-off-classic-mobile-self-healing.png" alt="turn off classic mobile self healing" width="700px" />
    <br/>

    </TabItem>
</Tabs>

## Configure classic Self-Healing

Self-healing configurations are accessible in **Project Settings > Self-Healing**. You can also click the **Self-Healing icon** in the main navigation panel to open the **Project Settings** dialog.

<img src="https://tw-cdn.katalon.com/katalon-studio/maintain-tests/Open_Self-Healing_project_settings_main_nav.png" alt="open self-healing button in main navigation bar" width="700px" />
<br/>

In this panel, configure self-healing behaviors depending on your project type (WebUI/Mobile).

### Select and prioritize element locator methods

**Katalon Studio** tries to generate the object locator with the method at the top first. If it fails, it will try alternative methods, from the top down.


<Tabs groupID="self-healing" defaultValue="webui" values={[
  {label: 'WebUI', value: 'webui'},
  {label: 'Mobile', value: 'mobile'},
]}>
    <TabItem value="webui">

    <img src="https://tw-cdn.katalon.com/katalon-studio/maintain-tests/self-healing/classic-web-self-healing-locators.png" alt="classic web self healing locators" width="700px" />
    <br/>

    </TabItem>
    <TabItem value="mobile">

    <img src="https://tw-cdn.katalon.com/katalon-studio/maintain-tests/self-healing/ai-self-healing-mobile-locator-strats.png" alt="ai self healing mobile locator strats" width="700px" />
    <br/>

    </TabItem>
</Tabs>

### Configure default locators

Clicking **Configure Default Locator** will transfer you to the corresponding page for a WebUI or Mobile's default locator settings, in **Test Design**. When you use **record** or **spy**, **Katalon Studio** will auto-generate a locator for test objects using this default locator method.

:::tip

Prioritize attributes that are consistently used and unique (e.g., `id`, `name`). Avoid using dynamic values like `class` if they frequently change.
:::

<Tabs groupID="self-healing" defaultValue="webui" values={[
  {label: 'WebUI', value: 'webui'},
  {label: 'Mobile', value: 'mobile'},
]}>
    <TabItem value="webui">

    Choose a default locator strategy: **XPath (default), Attributes, CSS, Image, and Smart Locator**.

    <img src="https://tw-cdn.katalon.com/katalon-studio/maintain-tests/self-healing/web-classic-self-healing.png" alt="web classic self healing" width="700px" />
    <br/>

    :::tip
    - Select the strategy that works best with your application structure. **XPath** is flexible but can be fragile in dynamic DOMs. **CSS** and **Smart Locator** may offer better resilience.
    - Move the most stable or unique locators higher in the list to improve test resilience.
    :::

    If you select **XPath** as the default locator, you can also set your locator priorities by dragging and dropping the types to change their evaluation order:

    <img src="https://tw-cdn.katalon.com/katalon-studio/maintain-tests/self-healing/ai-self-healing-web-xpath-locator-strats.png" alt="ai self healing web xpath locator strats" width="700px" />
    <br/>

    If you select **Attributes** as the default locator, you can configure attribute-based locators to specify which HTML attributes should be considered when detecting objects.

    <img src="https://tw-cdn.katalon.com/katalon-studio/maintain-tests/self-healing/ai-self-healing-web-attribute-locator-strats.png" alt="ai self healing web attribute locator strats" width="700px" />
    <br/>

    To learn more about selection methods for web objects, see [Selection methods for Web objects](/katalon-studio/test-objects/web-test-objects/selection-methods-for-web-objects).

    </TabItem>
    <TabItem value="mobile">

    From the dropdown, choose your preferred locator strategy:

    <img src="https://tw-cdn.katalon.com/katalon-studio/maintain-tests/self-healing/default-locator-for-mobile-recording.png" alt="default locator for mobile recording" width="500px" />
    <br/>

    This setting determines how **Katalon Studio** identifies and saves elements during mobile recording/spying. To learn more about locator strategies for Mobile objects, see [Locator strategies for Mobile objects](/katalon-studio/test-objects/mobile-test-objects/locator-strategies-for-mobile-objects).

    For iOS apps, you can also choose to display the object tree in **full** or in **minimal** display mode:

    - If you select **Minimal**, the display shows a simplified object hierarchy.
    - If you select **Full**, the display shows the complete object hierarchy, including all parent and nested UI elements.

    <img src="https://tw-cdn.katalon.com/katalon-studio/maintain-tests/self-healing/mobile-recorder-object-tree-settings.png" alt="mobile recorder object tree settings" width="500px" />
    <br/>

    Frequently switching between display options may affect test execution stability.

    </TabItem>
</Tabs>

### Exclude keywords

In some scenarios, you may not want the test engine to try out different locators to find an object that doesn't exist.

To handle this, **Katalon Studio** allows you to exclude specific keywords from self-healing. When an object is used with one of these keywords, **Katalon Studio** skips the self-healing process.

<img src="https://tw-cdn.katalon.com/katalon-studio/maintain-tests/self-healing/exclude-locators-for-self-healing.png" alt="exclude locators for self healing" width="700px" />
<br/>

For example:  
You add the verifyElementPresent keyword to the exclusion list. Suppose the input_Username_username object has a broken locator. You run the following script:

```jsx
WebUI.openBrowser('https://katalon-demo-cura.herokuapp.com/') 
WebUI.click(findTestObject('null')) 
def username = findTestObject('Object Repository/Page_CURA Healthcare Service/input_Username_username') 
WebUI.setText(username, 'John Doe') 
WebUI.verifyElementPresent(username, 5)
```

Since `verifyElementPresent` is in the exclusion list, **Katalon Studio** will not attempt self-healing on the username object, and the test fails as expected.

### Locator Override in Object view

In the locator selection setting for each object, you can decide the default selection method for detecting that object during execution. This configuration overrides the **Self-Healing** global settings.

<img src="https://tw-cdn.katalon.com/katalon-studio/maintain-tests/self-healing/locator-selection-method.png" alt="locator selection method" width="500px" />
<br/>

## Configure AI Self-healing

If classic self-healing fails to heal the locator, **Katalon Studio** will trigger **AI self-healing**.

:::info requirement
- This feature is currently exclusive to the RC build of Katalon Studio version 11.0.0 (contact customer support for more details). It will become officially available in the upcoming release of Katalon Studio version 11.0.0.
:::

Once you enable **AI Self-Healing**, configure different input data sources for the AI:

<Tabs groupID="self-healing" defaultValue="webui" values={[
  {label: 'WebUI', value: 'webui'},
  {label: 'Mobile', value: 'mobile'},
]}>
    <TabItem value="webui">

    <img src="https://tw-cdn.katalon.com/katalon-studio/maintain-tests/ai-self-healing-web-ui-1.png" alt="ai self healing web ui 1" width="500px" />
    <br/>

    </TabItem>
    <TabItem value="mobile">

    <img src="https://tw-cdn.katalon.com/katalon-studio/maintain-tests/ai-self-healing-mobile.png" alt="ai self healing mobile" width="500px" />
    <br/>
    
    </TabItem>
</Tabs>

Selecting more sources increases healing accuracy but may slightly increase processing time and cost. For example, using **Screenshots** incurs a higher processing cost compared to **Accessibility tree** or **Page source**.

### Provide an AI model for AI self-healing

By default, **AI Self-Healing** uses the AI model as configured in **Preferences > AI Configurations**, as other AI services (E.g. **StudioAssist**).

<img src="https://tw-cdn.katalon.com/katalon-studio/studioassist/ai-configuration-preferences.png" alt="ai configuration preferences" width="500px" />
<br/>

If you want to use a different model for AI self-healing, you can provide your own **personal API key** via two methods:

1. Declare the API key in **Project Settings > Execution > Launch Arguments** and enter: `-DOPENAI_API_KEY=${{ YOUR_API_KEY }}`. This method is convenient, but it risks exposing your OpenAI API key.
2. Store your **API key** in a [Global Variable](/katalon-studio/data-driven-testing/global-variables-and-execution-profile), then declare the AI model and API key, and include the following script in your test case or a [test listener](/katalon-studio/create-test-cases/test-fixtures-and-test-listeners-test-hooks-in-katalon-studio#test-listeners-test-hooks):

```jsx
//set the AI model. If you dont, system falls back to "gpt-4o-mini" 
System.setProperty("SELF_HEALING_AI_MODEL", "${{ YOUR_AI_MODEL }}")
//set the API key for your AI model.  
System.setProperty("OPENAI_API_KEY", "${{ YOUR_API_KEY }}")
```

Replace `${{ YOUR_AI_MODEL }}` and `${{ YOUR_API_KEY }}` with the corresponding global variables.

## Approve suggestions in Self-healing Insights

Next to the Log Viewer tab, the **Self-healing Insights** tab displays a table containing suggestions for replacing broken locators, from either classic self-healing or AI self-healing.

The table includes the following columns:

- **Test Object ID**: The ID of the broken test object.
    
- **Broken Locator**: The original locator that failed to detect the object during execution.
    
- **Proposed Locator**: The alternative locator that successfully located the object. If the object was found using its screenshot, this value is a newly generated smart XPath.
    
- **Recovered By**: The selection method **Katalon Studio** used to detect the object.
    
- **Screenshot**: When an object is located using an alternative locator, Katalon captures a screenshot of the test object so you can verify if it is correct. Click Preview to review the healed object.
    
- **Select**: Choose the locator(s) you want to take action on.
    

<img src="https://tw-cdn.katalon.com/katalon-studio/maintain-tests/self-healing/self-healing-insights.png" alt="self healing insights" width="700px" />
<br/>

After verifying that the found object is correct, you can select one or more suggested locators and click:

- **Approve**: Save the proposed locator as the new default.
    
- **Discard**: Reject the proposed locator.
    
## Auto-excluded keywords (Non-Editable)

The following keywords are automatically excluded from classic self-healing by default. **These are predefined and cannot be modified or removed** by users:

| **Web Auto-Excluded Keywords** | **Mobile Auto-Excluded Keywords** |
|--------------------------------------------------|--------------------------------------|
| `VerifyOptionNotPresentByLabelKeyword` | `verifyElementExist` |
| `VerifyOptionNotPresentByValueKeyword` | `verifyElementNotExist` |
| `VerifyOptionNotSelectedByIndexKeyword` | `verifyElementVisible` |
| `VerifyOptionNotSelectedByLabelKeyword` | `verifyElementNotVisible` |
| `VerifyOptionNotSelectedByValueKeyword` | `verifyElementAttributeValue` |
| `VerifyOptionPresentByLabelKeyword` | `verifyElementHasAttribute` |
| `VerifyOptionPresentByValueKeyword` | `verifyElementNotHasAttribute` |
| `VerifyOptionSelectedByIndexKeyword` | `verifyElementChecked` |
| `VerifyOptionSelectedByLabelKeyword` | `verifyElementNotChecked` |
| `VerifyOptionSelectedByValueKeyword` | `verifyElementText` |
| `VerifyOptionsPresentKeyword` | `verifyElementPresent` |
| `VerifyTextNotPresentKeyword` | `WaitForElementNotPresent` |
| `VerifyTextPresentKeyword` | `WaitForElementNotHasAttribute` |
| `VerifyElementAttributeValueKeyword` | `WaitForElementHasAttribute` |
| `VerifyElementCheckedKeyword` | `WaitForElementPresent` |
| `VerifyElementClickableKeyword` | `ScrollToText` |
| `VerifyElementHasAttributeKeyword` | |
| `VerifyElementNotCheckedKeyword` | |
| `VerifyElementNotClickableKeyword` | |
| `VerifyElementNotHasAttributeKeyword` | |
| `VerifyElementNotPresentKeyword` | |
| `VerifyElementNotVisibleInViewportKeyword` | |
| `VerifyElementNotVisibleKeyword` | |
| `VerifyElementPresentKeyword` | |
| `VerifyElementTextKeyword` | |
| `VerifyElementVisibleInViewportKeyword` | |
| `VerifyElementVisibleKeyword` | |
| `WaitForElementAttributeValueKeyword` | |
| `WaitForElementClickableKeyword` | |
| `WaitForElementHasAttributeKeyword` | |
| `WaitForElementNotClickableKeyword` | |
| `WaitForElementNotHasAttributeKeyword` | |
| `WaitForElementNotPresentKeyword` | |
| `WaitForElementNotVisibleKeyword` | |
| `WaitForElementPresentKeyword` | |
| `WaitForElementVisibleKeyword` | |

## Troubleshoot AI self-healing

AI self-healing might return the error `java.io.IOException` - `The filename or extension is too long` if your directory to **Katalon Studio Enterprise** is too long:

<img src="https://tw-cdn.katalon.com/katalon-studio/maintain-tests/self-healing/ai-self-healing-issue-filename-too-long.png" alt="ai self healing issue filename too long" width="700px" />

Solution: Keep the path to KSE shorter, by relocating KSE to a higher-level directory and prevent deep-nesting it.