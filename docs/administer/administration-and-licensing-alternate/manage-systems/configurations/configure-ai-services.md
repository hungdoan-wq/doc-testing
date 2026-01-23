---
title: Configure AI Services
---
<!-- PRD: https://katalon.atlassian.net/wiki/spaces/ADMIN/pages/3791683585/PRD+AI+Services+Configuration -->

Learn how you can configure AI services and features for Katalon TestOps.

You can control how AI features operate across your systems through our comprehensive management tools. These allow you to enable or disable AI capabilities, configure various AI service providers, and manage API keys at both Account and Organization levels. These capabilities streamline AI service management for enterprise environments while maintaining compliance with your organizational policies.

:::caution requirements
You must have the **Account Admin** or **System Admin** role to perform this action.
:::

## Enable or disable AI features

:::info notes
AI features are **disabled by default** to ensure compliance with policy requirements.
:::

1. Go to Admin Settings. (You can find Admin Settings at the upper right corner of the page).
2. Navigate to **System > Configurations > AI Services**.
<img src="https://tw-cdn.katalon.com/katalon-platform/system/ai-services/ai-services.png" alt="Navigate to AI Services"/> <br/>

3. Toggle the **Enable AI Features** switch to enable or disable AI features.
<img src="https://tw-cdn.katalon.com/katalon-platform/system/ai-services/toggle-ai-services.png" alt="Toggle AI Services feature"/> <br/>

4. Select the AI key you want to use:
    - **Default AI Key**: Use the default key provided by Katalon for AI-powered features. 
    - **Organization AI Key**: Use your own custom AI key. Choosing this requires you to create your own default key. 
:::note Important notes about AI keys:
- Organization-specific AI keys take precedence over global keys.
- AI keys configured in **Katalon Studio** override the default Katalon AI key.
- Settings of AI services are retained even after deactivation/reactivation.
:::

### Scope of functionality

Your organization’s AI Services configuration determines which Katalon features, including TrueTest, are available. Refer to the table below for more details.

| **AI Service settings** | **TrueTest's behavior** |
| ----------------------- | ----------------------- |
| AI Features = Disabled | You will see a warning on the Journey Maps page that AI features are disabled.<ul><li>You still can: set up/update TrueTest agents, access existing maps/flows/test cases, generate gap analysis, and generate test cases for existing flows.</li><li>You cannot track new data and generate new maps with flows.</li><li>All active TrueTest AUTs are paused automatically. “Resume tracking” is disabled.</li></ul> |
| AI Features = Enabled with a Supported AI Provider | TrueTest operates normally using the selected AI model (Katalon, OpenAI, or Azure OpenAI). |
| AI Features = Enabled, with an Unsupported AI Provider | You will see a warning that the chosen provider is not supported by TrueTest. <ul><li>TrueTest behaves as in the “AI Disabled” scenario except tracking data remains available.</li></ul>

## Configure a Default or Organization-Specific AI Key
- **Account AI Key**: Applies across the account unless overridden.

    To Configure Account AI Key: Click `Configure` under the Account AI Key section.

<img src="https://tw-cdn.katalon.com/katalon-testops/Administration and Licensing/Manage Systems/Configurations/Configure Account AI Key Admin.png" alt="Your AI key configuration option in Katalon TestOps" width="1080"/>

--- 

- **Organization-Specific AI Key**: Used within a specific organization. Only one active key is allowed per organization.

    To configure Organization AI Key: Click `+ Add new` under the Organization-specific AI Key section.

<img src="https://tw-cdn.katalon.com/katalon-testops/Administration and Licensing/Manage Systems/Configurations/Configure Organization Specific AI Key Admin.png" alt="Your AI key configuration option in Katalon TestOps" width="1080"/>



### Configure a System Reasoning Model
:::caution note
Select **Require Organization AI API Key** will **disable** all other options in the AI configuration page:
<img src="https://tw-cdn.katalon.com/katalon-platform/system/ai-services/toggle-require-keys.png" alt="Toggle require organization ai api key - AI Services" width="600"/> <br/>
:::
This AI type ensures structured, logic-driven decision making for automation and execution.

Toggling **Use Katalon Default** applies Katalon’s AI key; otherwise, enter your provider’s details.

1. Select your model from the dropdown menu. Currently, we support:
    - OpenAI 
    - Azure OpenAI

2. Enter your API key in the **API Key** field.

3. Enter your Organization (optional).

4. Click on **Validate Key** to check the validity of your connection.

<!-- :::note 
- You may need to enter additional information depending on the AI provider you choose, such as Base URL, API Version, Deployment Name, etc.
::: -->
<img src="https://tw-cdn.katalon.com/katalon-platform/system/ai-services/reason.png" alt="Field in reason fields-  AI Services"/> <br/>

5. Click **Update**.


### Configure an LLM Model
:::caution note
Select **Require Organization AI API Key** will **disable** all other options in the AI configuration page:
<img src="https://tw-cdn.katalon.com/katalon-platform/system/ai-services/toggle-require-keys.png" alt="Toggle require organization ai api key - AI Services" width="600"/> <br/>
:::
This AI type generates human-like responses and interprets requirements to create structured test cases. 

Toggling **Use Katalon Default** applies Katalon's AI key; otherwise, choose your own provider.

1. Select your model from the dropdown menu. Currently, we support:
    - AWS Bedrock

2. Enter your AWS Access Key ID in the field of the same name. 

3. Enter your AWS Secret Access Key in the field of the same name.

4. Enter your AWS Region in the field of the same name.

5. Click on **Validate Key** to check the validity of your connection.
<img src="https://tw-cdn.katalon.com/katalon-platform/system/ai-services/llm-model.png" alt="Field in LlM model fields-  AI Services"/> <br/>

6. Click **Update**.

## Manage an AI key

1. To edit an existing AI key, click on the **Edit** button in the rightmost column of the AI key you want to edit.

2. To delete an existing AI key, click on the **Delete** button in the rightmost column of the AI key you want to delete.

<img src="https://tw-cdn.katalon.com/katalon-testops/Administration and Licensing/Manage Systems/Configurations/Manage an AI Key.png" alt="Edit or delete an existing AI key by clicking on their respective buttons" width="1080"/>


