---
title: StudioAssist Preferences
---

This guide shows you how to set up AI services in StudioAssist, use AI to generate test cases, add project context automatically, get follow-up question suggestions in the StudioAssist chat window, and customize prompts in the Prompt Library.

:::info Requirements
- Katalon Studio Enterprise (KSE) 10.2.0.
- AI services and Katalon AI are enabled for your Account, see [Configure AI Services](/katalon-platform/administer/administration-and-licensing-alternate/manage-systems/configurations/configure-ai-services).
:::

You can configure to use StudioAssist to further improve your experience.

In **Katalon Studio**, go to **Katalon Studio Enterprise > Preferences > AI configurations** and select a model.

<img src="https://tw-cdn.katalon.com/katalon-studio/studioassist/ai-configuration-preferences.png" alt="ai configuration preferences" width="500px" />
<br/>

If your account has no configured AI model, the following notification appears: `There is no AI model in your account`. You can then click **Request Access** to contact your account owner to enable AI features, or add your own API key.

<img src="https://tw-cdn.katalon.com/katalon-studio/create-test-cases/studio-assist/StudioAssist_chat_window_small.jpg" alt="StudioAssist chat window in Katalon Studio" width="300" /> 

For OpenAI compatibility information, refer to [OpenAI Supported Models](https://platform.openai.com/docs/models).

## AI service configuration

When AI services and Katalon AI are enabled for your Account, you can freely choose between using:


| AI Provider | Model used | Notes |
| --- | --- | --- |
| **Katalon AI Service** | `gpt-4.1-mini` | Built-in; no configuration needed.<br/> Supports **multilingual** inputs. |
| **Personal OpenAI** | <ul><li>`gpt-5.1`</li><li>`gpt-5`</li><li>`gpt-5-mini`</li><li>`gpt-4.1`</li><li>`gpt-4.1-mini`</li><li>`gpt-4o-mini`</li><li>`o1`</li><li>`o3-mini`</li><li>`gpt-4o`</li><li>`gpt-3.5-turbo`</li></ul> | Selectable via the KSE configuration window.<br /><br />**Note**: Currently supports **English** only. |
| **Azure OpenAI** | User-specified deployment<br /><br />**Tested with:**<br /><ul><li>API version: `2025-01-01-preview`</li><li>Deployment ID: `o3-mini`</li></ul> | Requires specifying the deployment name in configuration.<br /><br />**Notes**:<br /><ul><li>Currently supports **English** only.</li><li>Some older API versions do <strong>not</strong> support tool calls in Agent mode.</li></ul> |
| **Gemini** | <ul><li>`gemini-2.5-pro`</li><li>`gemini-2.5-flash`</li></ul> | URL points to the latest supported version of the Google Generative Language API. |
| **OpenAI-Compatible Provider** | <ul><li>`gpt-4.1-mini`</li></ul> | API key passed via the Authorization HTTP header. |
| **AWS Bedrock** | <ul><li>`US Claude Opus 4.1`</li><li>`US Anthropic Claude 3.7 Sonnet`</li><li>`US Anthropic Claude Sonnet 4.5`</li><li>`US Anthropic Claude Haiku 4.5`</li><li>`US Claude Sonnet 4`</li><li>`anthropic.claude-3-5-sonnet-20241022-v2:0`</li></ul> | Requires credential-based authentication configuration. |




<img width="600" src="https://tw-cdn.katalon.com/katalon-studio/get-started/StudioAssist Preferences/10.4.0-choose-ai-service.png" alt="Choose between using Katalon AI Service, using your own OpenAI, Azure OpenAI API key, Gemini API key, OpenAI compatible provider, or AWS Bedrock key."/> 

Click on the tab below to find more information about the AI service.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Katalon AI" label="Katalon AI" default>

When selected, there is no need to to set up a key for **Katalon AI Service**.

You can, however, configure StudioAssist to auto-tag AI-generated test cases (e.g., API test cases or code generation) with default or custom tags, include project context such as the Object Repository and Custom Keywords, and enable follow-up question suggestions in the chat for a more guided AI experience.

<img width="600" src="https://tw-cdn.katalon.com/katalon-studio/get-started/workspace-settings/katalon-studio-preferences/studioassist-preferences/Katalon_AI_Service_10_3_0.png" alt="Choose between using Katalon AI Service or using your own OpenAI or Azure OpenAI API keys"/> 

  </TabItem>
  <TabItem value="Preset AI Service" label="Preset AI Service">

If your Admin has enabled the use of the organization’s AI key, the AI provider is shown at the top of the dialog as:
"**AI provider name** – managed by your organization". For example:

<img width="500" src="https://tw-cdn.katalon.com/katalon-studio/create-test-cases/studio-assist/studioassist_preset_AI_services.png" alt="Show AI provider name"/>

With this setting, you can configure the token limit and model for the AI service. You cannot switch between services (Katalon AI, OpenAI, Azure, Gemini, or OpenAI compatible provider).

  </TabItem>
  <TabItem value="Personal AI keys" label="Personal AI keys">

In the case of AI features are disabled, you can opt for your personal **OpenAI** key, **Azure** OpenAI API key, **Gemini** API key, **Open-AI** compatible provider, or **AWS Bedrock** key.
  - Provide service provider configuration.
    - **Use personal OpenAI key**: Provide the following information before using:
    
      <img width="450" src="https://tw-cdn.katalon.com/katalon-studio/get-started/workspace-settings/katalon-studio-preferences/studioassist-preferences/Personal_OpenAPI_key_settings.png" alt="Use personal OpenAI key"/>

      - Secret key: To get your Secret key, refer to the provider's instruction: [Where do I find my secret key?](https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key).
      - Max completion token: The default value that sets the maximum number of tokens the model can return in its response. The default value is 16000. To learn more about the token limits, refer to the OpenAI rate limits documentation: [OpenAI Token Limits](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them#h_051eb08805).
      - Organization ID (optional): The organization ID on OpenAI is the unique identifier for your organization which can be used in API requests.
      - Model: The OpenAI model you want to use. If not changed, the `gpt-4o-mini` model is used by default.
    
    - **Use personal Azure OpenAI API key**: Provide the following information before using:
      
      <img width="450" src="https://tw-cdn.katalon.com/katalon-studio/get-started/workspace-settings/katalon-studio-preferences/studioassist-preferences/Azure_OpenAPI_key_settings.png" alt="Use personal Azure OpenAI API key"/>

      - Base URL: The base URL for your Azure OpenAI resource in the following format: `https://{your-resource-name}.openai.azure.com`.
      - Deployment name: Azure OpenAI uses the deployment name to call the model. Enter the deployment name of your choosing, make sure that the model supports chat completion.
      - API key: To get your Azure OpenAI key, refer to this article: [How to get Azure OpenAI Keys and Endpoint](https://www.c-sharpcorner.com/article/how-to-get-azure-open-ai-keys-and-endpoint/)
      - Max completion token: The default value that sets the maximum number of tokens the model can return in its response. The default value is 16000.
      - API version: API version is selected for you by default.
    
    - **Use Gemini API key**: Provide the following information before using:

      <img width="450" src="https://tw-cdn.katalon.com/katalon-studio/get-started/workspace-settings/katalon-studio-preferences/studioassist-preferences/Gemini_API_key_settings.png" alt="Use personal Gemini API key"/>

      - Base URL: The base URL used to connect to the Gemini API service. This URL should point to the correct version of the Google Generative Language API.
      - API key: Your Gemini key. Create a key for free in [Google AI Studio](https://aistudio.google.com/app/apikey).
      - Model: The Gemini model you want to use. If not, StudioAssist will use the latest supported version of the Google Generative Language API by default.
      - Max completion token: The default value that sets the maximum number of tokens the model can return in its response.

    - **Use Open-AI compatible provider**: Provide the following information before using:

      <img width="450" src="https://tw-cdn.katalon.com/katalon-studio/get-started/workspace-settings/katalon-studio-preferences/studioassist-preferences/OpenAPI_compatible_provider_key_settings.png" alt="Use OpenAPI-compatible provider"/>

      - Base URL: The API endpoint for your OpenAI-compatible service.
      - API key: Your API key.
      - API key header name: The name of the HTTP header where the API key is passed (commonly `Authorization`). This allows support for providers with different header naming conventions.
      - Model: The model you want to use. If not changed, the `gpt-4.1-mini` model is used by default.
      - Max completion token: The default value that sets the maximum number of tokens the model can return in its response.
  
    - **Use personal AWS Bedrock key**: Provide the following information before using:
  
       <img width="550" src="https://tw-cdn.katalon.com/katalon-studio/get-started/StudioAssist Preferences/ks-10-4-0-aws-bedrock-details.png" alt="Use AWS Bedrock provider"/>
  
      - AWS access key: Your AWS access key ID. To learn how to create one, see [Managing access keys for IAM users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).
      - AWS secret key: The secret key paired with your access key ID for authentication. You can only view it once when creating the key pair.
      - AWS session token: A temporary security credential provided by AWS Security Token Service (STS). Required only if you use temporary credentials, such as those from assuming an IAM role or MFA authentication. For details, see [`GetSessionToken`](https://docs.aws.amazon.com/STS/latest/APIReference/API_GetSessionToken.html).
      - AWS region: The AWS region where your Bedrock model is available.
      - Model: The model ID in your AWS Bedrock account. See [Supported foundation models in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html).
      - Max completion token: Sets the maximum number of tokens the model can return in its response. The default value is 16000. 
      :::note
      Katalon Studio currently does not support proxy connections for AWS Bedrock.
      :::
  
    - **Disable StudioAssist**: If you don't want to use any AI provider, you can disable StudioAssist by selecting **None** from the AI service provider list. When disabled, the chat window will display that no AI is available in your account.

  </TabItem>

</Tabs>

## StudioAssist Preferences options

Refer to the items below for the list and descriptions of StudioAssist Preferences options.

### Append tags for test cases used AI generated capabilities

Test cases with AI-generated tags are highlighted in purple.
<img alt="Purple AI-generated test cases" src="https://tw-cdn.katalon.com/katalon-studio/get-started/workspace-settings/katalon-studio-preferences/studioassist-preferences/purple_ai_generated_test_case.webp" width="400" />

- **API Test Case Generation** - Check this option to automatically tag AI-generated API test cases with a default tag (`API_Test_Generation`) or custom tag name of your choice. When enabled, StudioAssist adds an AI tag (default or custom) to each API test case it generates. For details, see [Generate API tests](/katalon-studio/create-test-cases/generate-api-tests-with-ai-beta).

- **StudioAssist Code Generation** - Check this option to automatically tag AI-generated test automation scripts from structured user prompts with a default tag (`GenAI`) or custom tag name of your choice. This option will automatically add the tag for these two actions:
  - Generate code via Script View: When you use StudioAssist to generate code directly within the Script mode of an existing test case. See [Generate code](/katalon-studio/create-test-cases/studioassist-in-katalon-studio#generate-code).
  
  <img alt="KS-10-3-2-StudioAssist-generate-code " src="https://tw-cdn.katalon.com/katalon-studio/get-started/workspace-settings/katalon-studio-preferences/studioassist-preferences/studioassist_generate_code.webp" width="400" />

  - Create and edit test cases via Katalon MCP Server: When you use Agent mode to perform actions like creating a new test case or editing an existing one based on your prompts. Learn more in [StudioAssist Agent mode](/katalon-studio/studioassist/studioassist-agent-mode).

### Auto-include project context information

To improve the scripts generated by StudioAssist, you can enable both the **Object repository** and your **Custom keywords**. StudioAssist will then automatically use the list of all test object IDs and available custom keywords in the project as context. This feature applies only to Ask mode, because Agent mode can already connect to MCP servers and utilize their tools to access project context or create custom keywords. Learn more about [StudioAssist's Katalon built-in MCP tools](/katalon-studio/studioassist/mcp-servers/katalons-built-in-mcp-servers).

Enabling this option helps StudioAssist deliver more tailored responses, reduces the need to specify exact object paths or test objects, and lets you reuse predefined actions through custom keywords directly in the generated scripts.

### Auto-suggest follow up questions in the chat

When enabled, StudioAssist automatically suggests follow-up questions after providing a successful answer. This gives users greater control over their chat experience, whether they prefer guided suggestions or a more minimal interface.The feature works only for Ask mode.

<img width="600" src="https://tw-cdn.katalon.com/katalon-studio/get-started/StudioAssist Preferences/auto-suggest-follow-up-questions.png" alt="Auto-suggest follow-up questions in the chat window"/>

## Customize engineering prompts with Prompt Library

Starting from version 10.2.3, you can customize your engineering prompts using Prompt Library to provide more context and improve the accuracy of StudioAssist responses. This works for both Ask mode and Agent mode. 

1. Click **Katalon Studio Enterprise** on the main navigation and select **Settings** to open the **Preferences** dialog.
2. Select **Katalon > StudioAssist > Prompt Library**.
3. Configure your Prompt Library. Click on the prompt type you want to customize. Edit this text directly to include more context or specific instructions about how you want the AI to respond.

  <img src= "https://tw-cdn.katalon.com/katalon-studio/get-started/StudioAssist Preferences/ask-agent-mode-prompt-library.png" alt="StudioAssist Prompt Library" width="600" />

   - **Ask mode**: Used in the [StudioAssist Ask mode](/katalon-studio/studioassist/studioassist-ask-mode). This controls how StudioAssist responds to your general questions or guidance requests. Add more context about your application under test (AUT) or focus area, so you don’t have to repeat this every time you chat.
   - **Agent mode**: This defines the behavior of [Agent mode](/katalon-studio/studioassist/studioassist-agent-mode) in the StudioAssist chat window. . This defines the agent’s behavior, tool priorities, and response patterns. You can customize this prompt to match your workflow, team conventions, or testing methods, for example, setting tool priority. Changes take effect right away and are saved across restarts. You can click **Revert Original** or leave the prompt empty to use the default prompt from StudioAssist system.
   - **Generate code**: Used in the [script editor](/katalon-studio/create-test-cases/studioassist-in-katalon-studio#generate-code), add style guide details or coding preferences to make the generated code better fit your project.
   - **Explain code**: Used in the [script editor](/katalon-studio/create-test-cases/studioassist-in-katalon-studio#explain-code), specify if you want detailed technical explanations or a high-level summary, depending on your needs.
   - **Analyze test failure**: Used to customize the system prompt for [AI Failure Analysis](/katalon-studio/studioassist/studioassist-ai-failure-analysis). This defines how StudioAssist interprets failure logs and generates analysis results.

4. Click **Apply** or **Apply and Close** to save. 

You can now use StudioAssist with your customized prompts. 
If the generated output is not to your expectation, simply open the Prompt Library and select **Revert Original** to revert each prompt or click **Restore to Defaults** to restore all prompts.

:::note Notes
    - Use `${userSelection}` for **Generate code** and **Explain code**. This variable represents the specific piece of text or code you have highlighted (selected) in the script editor. 
    - Customize prompt is not applied for Katalon AI service.
    :::