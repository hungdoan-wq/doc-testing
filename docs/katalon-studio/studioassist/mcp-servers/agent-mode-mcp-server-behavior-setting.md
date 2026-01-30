---
title: Configure StudioAssist Agent mode and MCP servers
---

This document explains how to configure:

- MCP servers and tools
- The behavior of **StudioAssist**'s AI agent when using **MCP servers**.

Access the configuration panel by clicking the **setup panel for MCP servers** icon next to **Agent Mode**. This is where you configure settings:
    
<img src="https://tw-cdn.katalon.com/katalon-studio/studioassist/mcp-servers/select-agent-mode-setting.png" alt="studioassist agent mode mcp tool setting button" width="300"/>


## Configure MCP servers and tools

In the settings menu, you can:

- **(1) Search for an MCP tool**
    
- **(2) Enable all**/**Disable all MCP tools in a server**
    
- **(3) Enable**/**Disable a specific MCP tool**: The AI agent will not use the tool when disabled.
    
- **(4) Reload an MCP server**: Reloads an MCP server to fetch its up-to-date tools.
    
- **(5) Connect**/**Disconnect an MCP server**: StudioAssist keeps the server's information, but no longer maintains a connection to it.
    
- **(6) Remove**: Removes an MCP server and its tools from the list. You can always add them back later if needed.
    
<img src="https://tw-cdn.katalon.com/katalon-studio/studioassist/mcp-servers/ks11-mcp-tool-settings-menu.png" alt="features and buttons for configuring MCP servers and tools" width="400"/>

## Tool execution settings

In the **Tool Execution Settings** tab, you can configure how and when StudioAssist is allowed to use tools.

In the MCP server setup panel, the **Tool Execution Settings** section is at the bottom:

<img src="https://tw-cdn.katalon.com/katalon-studio/studioassist/ks11-agent-mode-tool-execution-settings.png" alt="settings box for agent mode behavior when using mcp servers" width="400"/>

In here, you can adjust these behaviors:

- **Max tool calls (default is 5)**: The maximum number of times StudioAssist can call tools in a prompt.
    
- **Always allow all tool calls**: The agent won't ask for your permission when it wants to use a new tool. Use this with caution.
    
- **Reset tool approval**: Revoke your permission for certain tools. The agent will ask for your permission for a tool if you've revoked it.
    

### Max tool calls

This setting defines the maximum number of tool calls StudioAssist can make in a single prompt. The limit helps prevent the agent from calling tools too many times.

Default value is set as 5 tools. If StudioAssist needs to use more tools after reaching the limit, it will prompt you to choose:
- **Continue**: Allows StudioAssist to exceed the limit for the current response only. The limit still applies to your next prompt.
- S**top**: Stops further tool usage. StudioAssist will generate a response based on the information it has so far.

<img src="https://tw-cdn.katalon.com/katalon-studio/studioassist/mcp-servers/TDAP-2850-AI-agent-reached-max-tool-call-prompt-2.png" alt="prompt that says the AI agent reached max tool call" width="400"/>

You can stop the agent at any time by clicking the Stop button, just like with any AI chat interaction.

### Always allow all tool calls

This setting automatically permits the agent to use any tool it needs.

By default, the option is disabled. Enabling **Always allow all tool calls** allows StudioAssist to use tools without asking for permission, promoting a smoother workflow.

> **Some actions are considered to be destructive and irreversible**. Auto-granting the AI agent these permissions could lead to unwanted results.

### Reset tool approval

Use **Reset Tool Approval** to revoke tool permissions that were previously set to **Always Allow**.

Upon clicking, a dialog will display:

<img src="https://tw-cdn.katalon.com/katalon-studio/studioassist/ks11-reset-tool-approval-dialog.png" alt="Reset Tool Approval dialog" width="400"/>

1. Select an agent profile. A list displays the tools approved for that specific agent.
2. Review the approved tools.
3. Select the tools you want to revoke.
4. Click **Reset Approval**. Click **Cancel** to exit without changes.

After resetting, StudioAssist will ask for permission again before using those tools for the selected agent.

:::note
- Only tools set to Always Allow are listed.
- The reset applies only to the selected agent profile.
- Changes are saved automatically.
:::