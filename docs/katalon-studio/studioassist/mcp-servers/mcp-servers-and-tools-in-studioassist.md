---
title: Add an external MCP server in StudioAssist
---

This document explains how to connect to an external MCP server in **StudioAssist**.

## Supported MCP servers in StudioAssist

:::important **Note**
- Starting version 10.4.0, **Katalon Studio** supports MCP servers that require authentication (e.g. Atlassian, Linear, Asana, Notion, Webflow... ) 
:::

**Katalon Studio** provides 3 **built-in MCP servers**. These servers can help you query Katalon's knowledge base, write/edit test cases in Katalon Studio, and interact with TestOps objects. See [Katalon's built-in MCP servers](/katalon-studio/studioassist/mcp-servers/katalons-built-in-mcp-servers) for more details.

We also support adding external MCP servers for **StudioAssist**'s AI agent (see [Adding external MCP Servers in StudioAssist](#add-an-external-mcp-server) below for more details). Currently supported MCP servers are:

 | **Transport method** | **Execution environment** | **User type** | **Requirement** |
 | -- | -- | -- | -- |
 | **SSE** (HTTP with Server-Sent Event) | Local or remote | Multiple users can access the MCP server | URL to the SSE endpoint |
 | **HTTP** (Modern Streamable HTTP) | Local or remote | Multiple users can access the MCP servers | URL to the HTTP endpoint |

**StudioAssist** currently does not support integration to MCP servers with `STDIO` transport type. You can, however, set up **MCP proxy** as a workaround - it's a tool that lets you switch between server transports, so you can switch from `STDIO` to `SSE`/`StreamableHTTP` and then use it in **StudioAssist**.

Learn more at [Set up MCP proxy for STDIO MCP servers](#set-up-mcp-proxy-for-stdio-mcp-servers) below.

## Add an external MCP Server

To add an external MCP server, first click on the **setup panel for MCP servers** icon next to **Agent Mode**. This is where you configure settings for MCP servers, their tools, and agent behavior when using MCP servers.
    
<img src="https://tw-cdn.katalon.com/katalon-studio/studioassist/mcp-servers/studioassist-agent-mode-mcp-tool-setting-button.png" alt="studioassist agent mode mcp tool setting button" width="500px"/>
<br/>

Follow our interactive guide to add an MCP server:

<iframe
src="https://demo.arcade.software/TY8lhYklqmlYCT0BBcUg?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Add an external MCP server"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

1. Click **Add MCP Server**. A dialogue **Connect to a remote HTTP Server** will open.

<img src="https://tw-cdn.katalon.com/katalon-studio/studioassist/mcp-servers/studioassist-add-mcp-server-button.png" alt="studioassist add mcp server button" width="500px"/>
<br/>

2. Fill in these fields:
    
    - **Transport Type**: either **HTTP** or **SSE**. Your MCP server provider should specify this. 
You can consider adding these [external MCP servers](#external-mcp-servers-to-add-to-studioassist).
    - **Server URL**: the MCP server's URL.
    - **Name**: this name should contain no spaces or special characters (for example, "atlassian-mcp-server"). This name should be unique for the server list, and kept as short as possible (see limitation notes below).
    - **Title (Optional):** the title is the display name of the server. You can have servers with the same name, but we highly recommend giving unique titles to servers.

<img src="https://tw-cdn.katalon.com/katalon-studio/studioassist/mcp-servers/studioassist-add-new-mcp-server-fields-to-fill-in.png" alt="studioassist add new mcp server fields to fill in" width="500px"/>
<br/>

3. Click **OK**. The server loads for a while then expands to display its tool list.

:::caution Known limitation
- AI providers (**OpenAI**, **Azure OpenAI**, **Gemini**, and **AWS Bedrock**) enforce a limitation of 64 characters on the combined length of the MCP Server name and tool name (`{server_name}_ _ _{tool_name}`). Exceeding this limit may cause **StudioAssist Agent mode** to fail when calling these APIs.

- To prevent this, try to keep the **MCP Server** name (or the tool's name if you host your own server) short, or temporarily disable the tool and revert back later. The **Title** of the MCP server is not affected by this limit, and can remain as long as needed.
:::

If the MCP server you're adding requires authentication, like Atlassian's MCP server, an icon will display like so.

<img src="https://tw-cdn.katalon.com/katalon-studio/studioassist/mcp-servers/studioassist-mcp-server-requiring-authentication.png" alt="studioassist mcp server requiring authentication" width="500px"/>
<br/>

You'll need to click on the server to expand it, and click **Authorize**. You'll be redirected to the server's authentication site - simply follow through. Once authorized successfully, you can go back to **Katalon Studio** and see the server along with its tool list.

When a server's token expires, **Katalon Studio** reminds you to re-grant authorization. Simply click **Authorize**, and follow the steps above again. If it doesn't load properly due to connection issues, you can reload it with the **Reload** button.

<img src="https://tw-cdn.katalon.com/katalon-studio/studioassist/mcp-servers/studioassist-MCP-server-authentication-failed-due-to-connection.png" alt="studioassist MCP server authentication failed due to connection" width="500px"/>
<br/>

## External MCP servers to add to StudioAssist

You can easily add any of the available `open` MCP servers from the [remote MCP servers list](https://mcpservers.org/remote-mcp-servers).

See below some of the `OAuth` MCP servers we currently support, grouped by purposes.

### Project management

Integrate with these MCP servers to enable **StudioAssist** to:

    - Create and update ticket descriptions automatically
    - Read requirements, documentation, and test plans as context for test generation
    - Log and create bugs when tests fail

| Server | Transport type | Server URL |
| -- | -- | -- |
| **Atlassian** | `HTTP` | `https://mcp.atlassian.com/v1/mcp` |
| **Notion** | `HTTP`<br/>`SSE` | `https://mcp.notion.com/mcp`<br/>`https://mcp.notion.com/sse` |s
| **Linear** | `HTTP` | `https://mcp.linear.app/mcp` |
| **Asana** | `SSE` | `https://mcp.asana.com/sse` |
| **Azure DevOps MCP (ADO)** | `STDIO` | [Set up MCP proxy for STDIO MCP servers](#set-up-mcp-proxy-for-stdio-mcp-servers) if you haven't, then see further setup instructions at [Setting up MCP server for Azure DevOps](/katalon-studio/studioassist/mcp-servers/setting-up-ado-mcp-server-for-studioassist). |

See how we use **StudioAssist** to create a test case from requirements, with **Atlassian MCP server**:

<iframe src="https://demo.arcade.software/x2dH6i3AKzIFpJpd04to?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" title="Create a test case with Atlassian MCP server" frameborder="0" loading="lazy" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" allow="clipboard-write" style={{ width: "100%", height: "400px", border: "none" }} ></iframe>

### Testing and automation

Integrate with these MCP servers so **StudioAssist** can directly interact with browsers and automation tools — enabling test case generation, execution, and debugging.

| Server | Transport type | Server URL |
| -- | -- | -- |
| **Selenium** | `STDIO` | [Set up MCP proxy for STDIO MCP servers](#set-up-mcp-proxy-for-stdio-mcp-servers) if you haven't, then see further setup instructions at [Setting up MCP server for Selenium](/katalon-studio/studioassist/mcp-servers/setting-up-selenium-mcp-sever-for-studioassist). |
| **Playwright** | `HTTP` | Setting up instructions to host this server locally:<br/><br/>  1. Host Playwright MCP server with `npx` command:<br/>```npx @playwright/mcp@latest --port 8931```<br/>  2. The server will run locally at http://localhost:8931/mcp, and.  Use this URL to set up connection in **StudioAssist**.<br/>Playwright MCP server has tools that can interact with your web app's AUT - you can leverage these tools to generate test objects and test cases faster.|
| **Chrome DevTools** | `STDIO` | [Set up MCP proxy for STDIO MCP servers](#set-up-mcp-proxy-for-stdio-mcp-servers) if you haven't, then see further setup instructions at [Setting up MCP server for Chrome DevTools](docs/katalon-studio/studioassist/mcp-servers/setting-up-chrome-devtools-mcp-server-for-studioassist.md). |

See how we use **StudioAssist** to create a test case using **Playwright MCP server** and requirements pulled using **Atlassian MCP server**:

<iframe src="https://demo.arcade.software/opYAdIQXUL6HL0nxes80?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" title="Create a test case with Playwright MCP server" frameborder="0" loading="lazy" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" allow="clipboard-write" style={{ width: "100%", height: "400px", border: "none" }} ></iframe>

### Design and prototyping

Connect to these MCP servers to allow **StudioAssist** to analyze design structures and use design assets as context for generating more accurate and visually aligned test cases.

| Server | Transport type | Server URL |
| -- | -- | -- |
| **Figma** | `HTTP` | Figma's remote **MCP Server URL** is currently not supported. As an alternative, you can host the **MCP server** on your local machine, and connect to this server locally:<br/><br/>    1. Open a Figma Design file (latest Figma version).<br/>  2. In the toolbar at the bottom, toggle to **Dev Mode**.<br/>  3. In the MCP server section of the inspect panel, click **Enable desktop MCP server**. A confirmation message will appear once the server is running.<br/>  4. The server runs locally at http://127.0.0.1:3845/mcp. Use this URL to set up connection in **StudioAssist**. |
| **Webflow** | `SSE` | `https://mcp.webflow.com/sse` |

<!--
- For deployment and hosting purposes: Connect to these MCP servers so **StudioAssist** can assist with deployment-related actions, such as monitoring, fetching logs, and managing hosted applications.

| Server | Transport type | Server URL |
| -- | -- | -- |
| **Heroku** | `HTTP` | `https://mcp.heroku.com/mcp` |
-->
Please note that some `OAuth` servers are not yet supported. We plan to include support for these in future updates.

<img src="https://tw-cdn.katalon.com/katalon-studio/studioassist/mcp-servers/studioassist-not-supported-oauth-mcp-server-failed-notification.png" alt="studioassist not supported oauth mcp server failed notification" width="500px"/>
<br/>

### Set up MCP proxy for STDIO MCP servers

**MCP proxy** is a tool that acts as an intermediate and handles communication between an LLM model and the target MCP server. Once you set up **MCP proxy**, you can host multiple MCP servers with `STDIO` transport type on your local machine.

:::note requirements
- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/). `npx` is included automatically with Node.js
- Python - [Download here](https://www.python.org/downloads/).
- Either `UV` ([installation guide here](https://docs.astral.sh/uv/#installation)) or `pipx` ([installation guide here](https://pipx.pypa.io/stable/installation/)) to install `mcp-proxy`
:::

Run the following command in your terminal to install `mcp-proxy`. You can choose either `UV`:
<div style={{ width: 'fit-content' }}>
```jsx
uv tool install mcp-proxy
```
</div>
or `pipx`:
<div style={{ width: 'fit-content' }}>
```jsx
pipx install mcp-proxy
```
</div>

Once the MCP proxy is installed, you can host an MCP server with a command line (replace `{{ package }}` with the MCP server's package, e.g. `@angiejones/mcp-selenium` for Selenium's MCP server)

```jsx
mcp-proxy --port 3000 --host 127.0.0.1 --stateless --allow-origin "*" -- npx -y {{ package }}
```

Customize the parameters if you wish:

| Parameter        | Description                                            |
| -------------------- | ---------------------------------------------------------- |
| `--port 3000`    | Server port (customize as needed)                      |
| `--host 127.0.0.1`   | Server host (localhost)                                |
| `--stateless`    | Enable stateless mode                                  |
| `--allow-origin '*'` | Allow all CORS origins (use specific origin in production) |