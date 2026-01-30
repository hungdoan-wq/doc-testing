---
title: Setting up Azure DevOps MCP server for StudioAssist
---

This document demonstrates how to integrate **Azure DevOps MCP server** with **StudioAssist**.

:::note requirements
- **MCP proxy** installed. See [Setup MCP proxy for STDIO MCP servers](/katalon-studio/studioassist/mcp-servers/mcp-servers-and-tools-in-studioassist#set-up-mcp-proxy-for-stdio-mcp-servers) for more details.
:::

### Create and setup a Personal Access Token (PAT)

Before you integrate with the Azure DevOps MCP server, you need a **Personal Access Token (PAT)** to authenticate with **Azure DevOps**. Follow these steps:

1. Go to **Azure DevOps**: `<https://dev.azure.com/{YourOrganization}`>
2. Click on **User Settings** (top right) > **Personal Access Tokens**.

<img src="https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/media/pats/select-new-token.png?view=azure-devops" alt="button to create a new personal access token in azure devops" width="500px" />

3. Click **+ New Token**.
4. Configure:
    - **Name**: Give it a descriptive name (e.g., "MCP Bridge")
    - **Organization**: Select your organization (e.g., "Katalon")
    - **Expiration**: Set expiration date
    - **Scopes**: Select the permissions you need:
        - **Work Items**: Read & Write
        - **Code**: Read
        - **Build**: Read
        - Or select **Full Access** for all permissions      

<img src="https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/media/pats/create-new-pat.png?view=azure-devops" alt="create a new access token for azure devops" width="500px" />

5. Click **Create**
6. **Copy the token** - you won't be able to see it again.
7. Set up the **PAT** as an environment variable:

    **For Windows (PowerShell):**
    <div style={{ width: 'fit-content' }}>
    ```jsx
    $env:AZURE_DEVOPS_PAT = "your-pat-token-here"
    ```
    </div> 

    **For Windows (CMD):**
    <div style={{ width: 'fit-content' }}>
    ```jsx
    set AZURE_DEVOPS_PAT=your-pat-token-here
    ```
    </div>

    **For macOS/Linux:**
    <div style={{ width: 'fit-content' }}>
    ```jsx
    export AZURE_DEVOPS_PAT="your-pat-token-here"
    ```
    </div>

    **For macOS/Linux (Permanent setup):**  

    Add to your `~/.zshrc` or `~/.bashrc`:
    <div style={{ width: 'fit-content' }}>
    ```jsx
    echo 'export AZURE_DEVOPS_PAT="your-pat-token-here"' >> ~/.zshrc source ~/.zshrc
    ```
    </div>

### Host and integrate with Azure DevOps MCP server

In your terminal, run:

```jsx
mcp-proxy --port 3000 --host 127.0.0.1 --stateless --allow-origin '*' -- npx -y @azure-devops/mcp "katalon"
```

Replace `"Katalon"` with your **Azure DevOps** organization name.

|Parameter                  |Description|
|---                        |---|
|`--port 3000`              |Server port (customize as needed)|
|`--host 127.0.0.1`         |Server host (localhost)|
|`--stateless`              |Enable stateless mode|
|`--allow-origin '*'`       |Allow all CORS origins (use specific origin in production)|
|`"Katalon"`                |Your **Azure DevOps** organization name|

The server will run locally at: `http://127.0.0.1:3000/mcp`. Add it to **StudioAssist**:

<img src="https://tw-cdn.katalon.com/katalon-studio/studioassist/external-mcp-servers/katalon-studio-adding-a-azure-devops-mcp-server-to-studioassist.png" alt="katalon studio adding a azure devops mcp server to studioassist" width="500px" />

You can see the tool list in the added **MCP server** for **Azure DevOps**:

<img src="https://tw-cdn.katalon.com/katalon-studio/studioassist/external-mcp-servers/azure-devops-mcp-server-tool-list.png" alt="azure devops mcp server tool list" width="300px" />

## Troubleshoot

If you encounter CORS errors, double-check to make sure `--allow-origin "*"` is in the command



