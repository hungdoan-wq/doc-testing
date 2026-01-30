---
title: "StudioAssist Overview"
---
This guide provides an overview of StudioAssist’s AI capabilities, the AI providers and models it supports, access and licensing requirements, and related use case resources that help you explore how AI can support your testing workflows.

:::note Agent mode (New in 10.3.2)

Starting 10.3.2 you can switch between **Agent mode** and **Ask mode** in StudioAssist chat window:
- **Ask mode** (default): Get quick answers, explanations, and code snippets.
- **Agent mode**: Automate test creation and editing with **Katalon** best practices and integrated tools. See [StudioAssist Agent mode](/katalon-studio/studioassist/studioassist-agent-mode) to learn more.
:::

## Overview

StudioAssist is Katalon Studio’s built-in AI assistant that helps you design, generate, and maintain automated tests more efficiently. It supports a range of AI workflows, from quick natural-language questions to fully guided, project-aware automation powered by Model Context Protocol (MCP) servers.

## AI capabilities in Katalon Studio

| **Capability** | **Description** | **Benefit** |
| --- | --- | --- |
| **Ask Mode** | Conversational chat for questions about Katalon Studio, keywords, or testing concepts. See: [StudioAssist Ask mode](/katalon-studio/studioassist/studioassist-ask-mode). | Instant guidance and knowledge retrieval. |
| **Agent Mode** | Executes multi-step, project-aware actions through MCP servers. See: [StudioAssist Agent mode](/katalon-studio/studioassist/studioassist-agent-mode).<br/><ul><li>**Built-in MCP servers:** Katalon MCP Server, Katalon Studio MCP Server, and Katalon TestOps MCP Server. See: [Katalon built-in MCP servers](/katalon-studio/studioassist/mcp-servers/katalons-built-in-mcp-servers).</li><li>**External MCP servers:** Add third-party MCP servers (e.g., Atlassian to fetch requirements, Chrome DevTools to interact with web pages). See: [Add an external MCP Server](/katalon-studio/studioassist/mcp-servers/mcp-servers-and-tools-in-studioassist#add-an-external-mcp-server).</li></ul> | Automated creation and modification of project artifacts. |<br/>
| **Inline Code Generation & Explanation** | Generates code from commented prompts and explains selected snippets directly in the Script mode. See: [Generate and Explain code in script editor](/katalon-studio/create-test-cases/studioassist-in-katalon-studio). | Faster scripting and easier debugging. |
| **AI Failure Analysis** | Analyzes failed test cases in HTML and email reports, reads stack traces, identifies root causes, and explains failures in simple language. See: [StudioAssist AI Failure Analysis](/katalon-studio/studioassist/studioassist-ai-failure-analysis). | Faster issue diagnosis and reduced debugging time. |
| **Customize Engineering Prompts** | Customizes system prompts for Ask Mode, Agent Mode, code generation, explanation, and failure analysis via the Prompt Library. See: [Customize engineering prompts with Prompt Library](/katalon-studio/studioassist/studioassist-preferences#customize-engineering-prompts-with-prompt-library). | More accurate and context-aware AI output. |
| **AI-Generated API Tests** | Generates editable API test cases and test objects from OpenAPI specifications. See: [Generate API tests with Katalon Studio’s AI](/katalon-studio/create-test-cases/generate-api-tests-with-ai-beta). | Builds API testing workflows more quickly. |

## Access and licensing

StudioAssist supports both built-in and external AI providers.

| **Service Type** | **Key Requirement** | **Setup Required?** |
| --- | --- | --- |
| **Katalon AI Service** | KSE License | No – enabled automatically. |
| **Personal API Key** | User-provided key | Yes – configure in [StudioAssist Preferences](/katalon-studio/studioassist/studioassist-preferences).  |

StudioAssist integrates with several external providers, including **OpenAI**, **Azure OpenAI**, **Google Gemini**, **OpenAI-compatible providers**, and **AWS Bedrock**.

You can select your preferred provider and model within the StudioAssist preferences. For configuration details, see: [AI service configuration](/katalon-studio/studioassist/studioassist-preferences#ai-service-configuration).

## Supported AI models

Refer to the table below to see which AI models StudioAssist supports when using different AI providers.

| AI Provider | Model used | Notes |
| --- | --- | --- |
| **Katalon AI Service** | `gpt-4.1-mini` | Built-in; no configuration needed.<br/> Supports **multilingual** inputs. |
| **Personal OpenAI** | <ul><li>`gpt-5.1`</li><li>`gpt-5`</li><li>`gpt-5-mini`</li><li>`gpt-4.1`</li><li>`gpt-4.1-mini`</li><li>`gpt-4o-mini`</li><li>`o1`</li><li>`o3-mini`</li><li>`gpt-4o`</li><li>`gpt-3.5-turbo`</li></ul> | Selectable via the KSE configuration window.<br /><br />**Note**: Currently supports **English** only. |
| **Azure OpenAI** | User-specified deployment<br /><br />**Tested with:**<br /><ul><li>API version: `2025-01-01-preview`</li><li>Deployment ID: `o3-mini`</li></ul> | Requires specifying the deployment name in configuration.<br /><br />**Notes**:<br /><ul><li>Currently supports **English** only.</li><li>Some older API versions do <strong>not</strong> support tool calls in Agent mode.</li></ul> |
| **Gemini** | <ul><li>`gemini-2.5-pro`</li><li>`gemini-2.5-flash`</li></ul> | URL points to the latest supported version of the Google Generative Language API. |
| **OpenAI-Compatible Provider** | <ul><li>`gpt-4.1-mini`</li></ul> | API key passed via the Authorization HTTP header. |
| **AWS Bedrock** | <ul><li>`US Claude Opus 4.1`</li><li>`US Anthropic Claude 3.7 Sonnet`</li><li>`US Anthropic Claude Sonnet 4.5`</li><li>`US Anthropic Claude Haiku 4.5`</li><li>`US Claude Sonnet 4`</li><li>`anthropic.claude-3-5-sonnet-20241022-v2:0`</li></ul> | Requires credential-based authentication configuration. |

## Common use cases

To explore what StudioAssist can help you accomplish, see:

- [Common use cases using Ask mode](/katalon-studio/studioassist/studioassist-ask-mode#common-use-cases)
- [Common use cases using Agent mode](/katalon-studio/studioassist/studioassist-agent-mode#common-use-cases)


## Known limitations

As of **Katalon Studio** version 10.3.0, StudioAssist now includes fewer limitations compared to previous versions, thanks to ongoing improvements in AI capabilities and context handling. However, some constraints still apply:
- **Potential AI hallucinations**: StudioAssist may generate code with made-up built-in keywords. Always review and validate the generated code, and revise with the valid equivalent when applicable.
- **Programming language required**: Due to context limitations, generated code might require debugging and programming expertise.

## StudioAssist FAQs

### Can I use StudioAssist without inputting my own OpenAI key?
When first introduced in 9.0.0, StudioAssist required you to input your own OpenAI API key. With the change in 9.4.0, you can use StudioAssist with a KSE license directly without having to input your own key.
   
### Can I use hotkeys for easy access to StudioAssist?
You can highlight a piece of code or comment on the script editor and use these shortcuts for StudioAssist quicker:

On macOS:
   - Generate code: `^` + `⌥` + `C`
   - Explain code: `^` + `⌥` + `E`

On Windows:
   - Generate code: `Ctrl` + `Alt` + `C`
   - Explain code: `Ctrl` + `Alt` + `E`
   
### What should I do when the generated test scripts do not run?
If you are using StudioAssist to generate a script in a test case, make sure that you capture the test object in the Object Repository, define the variables, and list out the actions in steps with corresponding test objects and variables.

### Why is Agent Mode not using any MCP tool in responses?
It's likely that you are using a legacy API version. Try using a newer API version of your provider.
  
### Why is StudioAssist not working for me?
Possible reasons include:

- AI features are disabled at the Account level. You might see a warning message when trying to use StudioAssist in this case. Contact the Account Owner to turn AI features so you can use StudioAssist again.
- You are not on an Enterprise license (required since version 9.4.0). Upgrade your license to continue using StudioAssist.
- You are logging in via a License Server (not supported).
- Proxy issues (update to version 9.4.0+).
- If you encounter this error message: `The OpenAI secret key is missing. Please provide your key and try again.`,you may need to:
   - Input your own OpenAI key if you are using Studio in version prior to 9.4.0.
   - Upgrade to 9.4.0 onwards and make sure you have a KSE license.
- If you encounter this error message: `{"error":"invalid _grant", "error _description": "Session not active"}`, you may have logged in using more than one machine at the same time. Log out from all devices and log in again.
- If you encounter this error message in the StudioAssist Chat window with the Katalon AI Service: `com.kms.katalon.ai.core.model.exception.StudioAssistLlmApiClientException: {“code”:8}`, it is usually caused by a large input size or hitting the current usage limits. To resolve this issue, try the following recommendations:
   - Clear the current conversation.
   - Disable **Auto-include project context information**.
   - Split your question into smaller parts.
