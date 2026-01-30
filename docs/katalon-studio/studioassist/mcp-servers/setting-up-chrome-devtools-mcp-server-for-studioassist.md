---
title: Setting up Chrome Devtools MCP server for StudioAssist
---

This document demonstrates how to integrate **Chrome DevTools MCP** server with **StudioAssist**.

:::note requirements
- **MCP proxy** installed. See [Setup MCP proxy for STDIO MCP servers](/katalon-studio/studioassist/mcp-servers/mcp-servers-and-tools-in-studioassist#set-up-mcp-proxy-for-stdio-mcp-servers) for more details.
:::

## Steps to set up and connect Chrome DevTools to StudioAssist

Host your **Chrome DevTools MCP server**

In your terminal, run the **MCP proxy server**:

```jsx
mcp-proxy --transport streamablehttp --port 8080 -- npx -y chrome-devtools-mcp@latest
```
(You may need to pick another port if 8080 is already in use.)

Use this URL `http://127.0.0.1:8080/mcp` to add to **StudioAssist**, transport type `HTTP`:

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/chrome-devtool-mcp-server-3.png" alt="Chrome DevTool MCP Server image 3" width="500px" />
<br/>

Once it's connected successfully, you can see the **Chrome DevTools MCP** tools:

<img src="https://tw-cdn.katalon.com/katalon-studio/studioassist/external-mcp-servers/katalon-studio-chrome-devtools-mcp-server-tool-list-1.jpg" alt="katalon studio chrome devtools mcp server tool list" width="300px" />
<br/>

You can then prompt **StudioAssist** to create a test case from scratch really quickly:

<iframe
src="https://demo.arcade.software/IWF7VVVkDWLmkc0MyPXH?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Create a test case with Chrome DevTools MCP server"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>