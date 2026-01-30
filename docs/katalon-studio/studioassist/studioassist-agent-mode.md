---
title: "StudioAssist Agent mode"
---

This document introduces StudioAssist Agent mode basic setups and common use cases like code generation with MCP servers.

:::info Requirements
- **Katalon Studio Enterprise** version 10.3.2 onwards.
- An AI provider selected. For more details, see [StudioAssist Preferences](/katalon-studio/studioassist/studioassist-preferences).
:::

Think of Ask Mode as *“answer my question”* and Agent mode as *“help me get this done”.* 
Refer to the table below to see how each mode processes your prompt.

| Prompt | Ask mode | Agent mode |
| --- | --- | --- |
| “Create a new test case” | Suggests code | Looks up best practices in Katalon Docs and automatically creates a new test case in the KS app |
| “Explain this test case” | Explains code | Explains code with references to related Katalon keywords and documentation |
| “How to create a test case?” | Gives basic steps | Guides you with the latest step-by-step instructions |
| “Troubleshoot an error at step 3” | Suggests generic fixes | Analyzes the error, checks docs, and proposes validated solutions |

In short, you can achieve more with **StudioAssist Agent mode**:

- **Automate test case creation and editing:** Generate new test cases or update existing ones with MCP tools, reducing manual work and saving time.

<!--
- **Get trusted answers backed by [Katalon Docs](/katalon-studio/about-katalon-studio):** Access step-by-step guidance, troubleshooting solutions, release notes, keyword-based references, and best practices drawn directly from official documentation.
-->
- **Extend automation beyond Katalon:** Connect with third-party MCP servers to streamline workflows, pull external data, or integrate with other systems directly inside Studio.
 

## Use Agent Mode

1. Open **StudioAssist** window.  
   **StudioAssist** chat window automatically opens on startup, on the right panel:

<img alt="StudioAssist chat window" src="https://tw-cdn.katalon.com/katalon-studio/studioassist/mcp-servers/ks11-studioassist-window.png" width="700" />
<br/>

2. Near the top right corner, open the mode dropdown menu to switch from **Ask** to **Agent** mode.

:::note
- The default mode is **Ask** when you first enable **StudioAssist**. As you work, the chat window remembers your last selected mode.
- Chat history is preserved when switching modes. To clear history, start a new chat by turning on/off **StudioAssist**.
:::

3. Start prompting. The more details you provide, the better **StudioAssist** understands your project context.  
   > **Tip:** Use the [Prompt Library](/katalon-studio/studioassist/studioassist-preferences#customize-engineering-prompts-with-prompt-library) to customize engineering prompts and provide more context for Agent mode. This helps improve the accuracy of StudioAssist responses by tailoring how it generates, explains, or chats about code.

4. View results.
   If you use **Agent mode** to create or update a test case, **StudioAssist** will open the test case once done:

<img alt="Open the test case in the editor" src="https://tw-cdn.katalon.com/katalon-studio/create-test-cases/studio-assist/KS_10_3_2_Agent_mode/open-test-case-in-editor.png" width="600" />


## (Optional) Connect to external MCP servers

By default, **StudioAssist** integrates with 3 built-in MCP tools, allowing basic capabilities:

- **Katalon MCP**: Connects **StudioAssist** to **Katalon Docs**, so your answers are up-to-date and backed by official guides on **Katalon Docs**.
- **Katalon Studio MCP**: Connects **StudioAssist** to your existing project, allowing it to read, create, and edit test cases directly.
- **Katalon TestOps MCP**: Connects **StudioAssist** to **TestOps**, allows direct operations on **TestOps** objects (Test Cases, Test Suites, Requirements, Sprints, and Releases) from **Katalon Studio**.

See [Katalon's built in MCP servers](https://docs.katalon.com/katalon-studio/studioassist/mcp-servers/katalons-built-in-mcp-servers) for more details on these servers and tools.

You can also connect to external mcp servers to allow more capabilities. Learn how to connect an external MCP server in [Adding an external MCP Server](/katalon-studio/studioassist/mcp-servers/mcp-servers-and-tools-in-studioassist#add-an-external-mcp-server).


## Review and revert file changes
When StudioAssist modifies project files (such as test cases or scripts), you can review the changes before keeping them.

All affected files appear in the **Modified Files** section of the StudioAssist chat window. This list includes:
- Modified files, showing the number of added and removed lines
- Newly created files, marked with a `New` label

**How review works**  
- If StudioAssist updates an existing file’s content, clicking the file shows a diff view highlighting the changes.
- If StudioAssist creates a new file or updates file metadata only, clicking the file simply opens the file for review.

<iframe
   src="https://demo.arcade.software/syKMT7SHQdYLjXaaayiV?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" 
   title="[Agent mode] Review and revert file changes" 
   frameborder="0"
   loading="lazy"
   webkitallowfullscreen
   mozallowfullscreen
   allowfullscreen="true"
   allow="clipboard-write"
   style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

:::note
The **Modified Files** section is available only within the current chat session. If you clear the conversation or close the chat, this section is removed and the change history is no longer available.
:::

## Agent mode settings

You can manage MCP servers to enable or disable tools to match your needs, and configure **StudioAssist** behaviors when using MCP tools:

- Tool use behavior: Control how StudioAssist asks for permission when using MCP tools.
- Agent profile settings (v11.0.0): Control tool availability and behavior for a specific Agent Profile, without affecting other agents.
- Tool execution: Configure how and when StudioAssist is allowed to use tools.

Learn more in [Manage MCP servers and tools](/katalon-studio/studioassist/mcp-servers/agent-mode-mcp-server-behavior-setting).

If tool use behavior is not configured, **StudioAssist** will ask you configure with below options:

| Option | How it works | When to use it |
| --- | --- | --- |
| **Allow Once** | Allow the tool run one time only. | For one-time requests. |
| **Allow this Conversation** | Allow the tool run without asking each time until you close or clear the conversation. | For ongoing tasks during your current session. |
| **Always Allow** | Always allow the tool run without asking, even after you close or clear the conversation. You can reset permissions anytime in [Reset tool approval](/katalon-studio/studioassist/mcp-servers/agent-mode-mcp-server-behavior-setting#reset-tool-approval). | For tools you find helpful and use regularly. Avoid using this option for tools that can make that can make sensitive-impact (for example, delete) |

<img alt="Grant tool permission" src="https://tw-cdn.katalon.com/katalon-studio/create-test-cases/studio-assist/KS_10_3_2_Agent_mode/Grant_permissions.png" width="400" />

If you select **Deny**, **StudioAssist** will stop assessing your prompt.


## Attach images and screenshots

:::info Version requirement
Image attachment is available from version 10.4.3 onward.
:::

With image and screenshot attachments, you can provide visual context to **StudioAssist** prompts for test generation, debugging and failure analysis.

1. Select **Agent mode** and click the paperclip icon to attach files.
2. Choose **Upload from computer** and select your image(s).
   <details>
    <summary>Image limits and supported formats</summary>
      - Supported formats: PNG, JPEG, WEBP, GIF
      - Max size: 10 MB per image
      - Max attachments: 10 files per prompt

   </details>
3. StudioAssist will return the result according to your request.

The following interactive video shows how to attach images using the file picker.  
<iframe
    src="https://demo.arcade.software/t20JpwoGtdRSSJc7Wue9?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" 
    title="Upload Files in StudioAssist Agent mode" 
    frameborder="0"
    loading="lazy"
    webkitallowfullscreen
    mozallowfullscreen
    allowfullscreen="true"
    allow="clipboard-write"
    style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>


Additionally, you can paste screenshots or images saved in clipboard directly into the prompt using keyboard shortcuts (<kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>V</kbd>).

## Common use cases

Refer to the following common use cases and example prompts for guidance.

#### Create a new test case

Automatically generate a test case and add it to your project. 

:::tip
- Make sure to include your URL, username, and password in the prompt, or define them in the Object Repository using Spy Web or Web Recorder.
- Using an AI-generated test case may result in missing import statements, which can prevent the test case from running. To fix this, press **Ctrl + Shift + O** (Windows/Linux) or **Command + Shift + O** (macOS) to add the required import statements automatically.
:::

<details>
<summary>Prompt Sample</summary>

```jsx
Get relevant test objects from the Object Repository
and create a Katalon Studio test case in this project
to perform the following steps,
using objects that I already captured:
 1. Open a browser to the URL [http://demoaut.katalon.com](http://demoaut.katalon.com/)
 2. Click the make appointment button
 3. Fill in the username 'John Doe'
 4. Fill in the password 'ThisIsNotAPassword'
 5. Click the login button
 6. Close the browser
```

</details>

<iframe
src="https://demo.arcade.software/74zMfEJsEYywTie04oQu?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Create a new test case from existing test objects"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

#### Update existing test cases

Optimize or restructure existing test cases, for example, perform bulk updates on time-consuming actions such as updating descriptions for test cases or test steps.

<details>
<summary>Prompt Sample</summary>

```jsx
Get all the test case scripts,
summarize the content,
and then update the description of all test cases in this project.
<Attach or paste your test case>
```

</details>

<iframe
src="https://demo.arcade.software/BdturbkbFuT5Sqmpp8or?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Update existing test case"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

#### Learn about a feature by using Katalon Docs tool

Get the latest explanation of a feature.

<details>
<summary>Prompt Sample</summary>

```jsx
Search the Katalon documentation
and explain what <feature> is and how to use it.
```

</details>

<iframe
src="https://demo.arcade.software/7S2xi1oIMkiH0jlcBbrO?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Search Katalon Docs base"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>


#### Troubleshoot and fix issues in the test case

Agent mode analyzes the error, checks documentation, and applies fixes.

<details>
<summary>Prompt Sample</summary>

```jsx
This test case failed, troubleshoot the error
using informationfrom Katalon doc and fix the script. 
<paste root cause here>
```

</details>

<iframe
src="https://demo.arcade.software/2XGtCsUJcDlirhLCe3Li?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Fix an errored test case"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>


#### Create and update feature files for Behavior-Driven Development (BDD)

Automatically create or update BDD Feature files using Gherkin syntax.

<details>
<summary>Prompt Sample</summary>

```jsx
Using the <upload cucumberinstruction.md requirements file>,
write a complete Gherkin feature file for the login scenario <(User Story 1)
from your Jira ticket>. 

Then, create and link the corresponding step definitions (Groovy code)
in the relevant step definition file to complete the BDD test script.
```

</details>

<iframe
src="https://demo.arcade.software/GuMeUvULOXWP6OKg0ZG9?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Create a BDD test case"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

#### Generate a test case from linked requirements
Automatically generate a test case from a linked requirement (e.g., a Jira ticket) using existing test objects and any additional related information you provide.

<details>
<summary>Prompt Sample</summary>

```jsx
Retrieve the requirement from <Jira ticket ID> on <Jira instance URL>,
then create a new test case for the <feature name> feature,
ensuring it uses existing test objects from the Object Repository.
```

</details>

<iframe src="https://demo.arcade.software/x2dH6i3AKzIFpJpd04to?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" title="Create a test case with Atlassian MCP server" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" style={{ width: "100%", height: "400px", border: "none" }} ></iframe>

#### Create a test suite of existing test cases

Automatically generate a test suite that groups existing test cases for collective execution, reporting, and maintenance.

<details>
<summary>Prompt Sample</summary>

```jsx
Create a new regression test that includes test cases I already have.
<attach the test plan or fetch it from Confluence>
```

</details>

<img alt="Create new regression test suite" src="https://tw-cdn.katalon.com/katalon-studio/create-test-cases/studio-assist/KS_10_3_2_Agent_mode/ks_10_4_0_agent_mode/create-new-regression-test-suite.png" width="800" />


#### Data-driven testing

**Goal**: Run the same test case multiple times using varied input data.

**Step 1**: Generate the test data table.

<details>
<summary>Prompt Sample</summary>

```jsx
Create a test data table to test this login flow,
including username and password for both success and failure cases,
as well as edge cases.
Let me preview the table
before actually creating the test data in KS <attach test case>.
```
</details>

**Step 2**: Create internal test data

<details>
<summary>Prompt Sample</summary>


```jsx
Create the test data based on the table above,
only have 2 columns: username and password.
```
</details>

<img alt="Create new regression test suite" src="https://tw-cdn.katalon.com/katalon-studio/create-test-cases/studio-assist/KS_10_3_2_Agent_mode/ks_10_4_0_agent_mode/data-driven-testing.png" width="800" />


**Step 3**: Bind the data.

Manually create variables, replace variables in the script, and do data binding, then execute the test (you can use Katalon Docs tool to search the guide if needed).


#### Create and edit custom keywords

Automatically create or update custom keywords.

<details>
<summary>Prompt Sample</summary>

```jsx
Add two new keywords in this file <attach file> for 2 actions:
1. Login: include option browser, navigate to URL,
input username and password, then click login.
2. Test datetime picker.
```
</details>

<img alt="custom keyword use case" src="https://tw-cdn.katalon.com/katalon-studio/create-test-cases/studio-assist/KS_10_3_2_Agent_mode/ks_10_4_0_agent_mode/custome-keyword.png" width="800" />

## Known limitations

- **StudioAssist** may not always call tools correctly. When this happens, try again and mention the MCP tool/server, provide more context, or adjust the prompt.
- Changing AI providers requires closing/reopening the chat for the changes to take effect.
- Currently, **TestOps MCP Server** does not support user login from offline licensing.
- AI providers (OpenAI, Azure OpenAI, Gemini, and AWS Bedrock) currently enforce a limit of `64` characters, for the combined length of an MCP Server and its tool name (`{server_name}_ _ _{tool_name}`). When adding an MCP server, make sure to _shorten either the server/tool name_ (not to be confused with title), or **StudioAssist** will fail to call these APIs in the case of exceeding.

## Troubleshoot connection issues

Sometimes, **Agent mode** cannot connect to a tool or MCP server, due to network issues for example:

<img alt="Cannot reach a tool or MCP server error message" src="https://tw-cdn.katalon.com/katalon-studio/create-test-cases/studio-assist/KS_10_3_2_Agent_mode/mcp-server-error-nessage.png" width="300" />

In this case, you can access the server list, read error details by hovering over the warning (!) icon, and choose to refresh the server to try again:

<img alt="Hover MCP server error message" src="https://tw-cdn.katalon.com/katalon-studio/create-test-cases/studio-assist/KS_10_3_2_Agent_mode/hover-mcp-server-error.png" width="400" />

:::note
- If you fail to connect to one of 3 built-in Katalon MCP Servers, ensure only one **Katalon Studio** instance is running.
- [AWS Bedrock](/katalon-studio/studioassist/studioassist-preferences#ai-service-configuration) provider requires that every external MCP tool has a description. Supply tools with description or disable them temporarily, as it can prevent **StudioAssist** from generating responses. 
- [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/reference#chat-completions) has a tool limit of 128 per request you can call in a single request. If your AI provider enforces a similar limit, reduce the number of tools or temporarily disable tools you don't need to avoid errors.
:::