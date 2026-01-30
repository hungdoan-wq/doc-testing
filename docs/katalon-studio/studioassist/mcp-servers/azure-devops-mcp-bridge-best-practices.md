---
title: Azure DevOps MCP Server Best Practices
---

This document introduces best practices when using Azure DevOps MCP tools for your AI agent.

## Scenario

The primary scenario is the **end-to-end automation of the Testing Lifecycle** by connecting the test management assets in **Azure DevOps (ADO)** with the automation environment in **Katalon Studio** via the **ADO MCP Bridge**. This includes:

1. Retrieving the list of **Test Cases** and **Test Plans** from ADO.
    
2. Automatically creating corresponding Test Cases in Katalon Studio.
    
3. Using **StudioAssist** to generate or update **test scripts** for those Test Cases.

## Purpose and strategic value

The strategic value of setting up the ADO MCP Server is:

- **Bridging the Gap:** To establish a connection between the testing/requirement management platform (Azure DevOps) and the automation tool (Katalon Studio).
    
- **Enabling AI Automation:** To leverage **StudioAssist** to automatically create, update, and manage Test Scripts based on the detailed requirement information and manual test steps documented in ADO.
    
- **Improving Test Asset Quality:** To enhance the quality of ADO Test Cases by requiring users to **include the names and locations of captured Test Objects** within the ADO Test Case steps.
    
- **Preventing Irrelevant Data Retrieval:** To help prevent retrieving incorrect or irrelevant data when querying Azure DevOps by unchecking other unnecessary MCP sources
    

## Key takeaways

- **Prerequisites (Preparation)** : You need to prepare three key items:
    
    - A **List of Test Objects** captured using **Katalon's Spy Object**.
        
    - **Renaming** folders and object names for easier maintenance and reuse.
        
    - A **List of Test Plans and Test Cases** defined in ADO.
        
- **Test Case Detail:** ADO Test Cases should include the names and locations of captured objects in the test steps.
    
- **MCP Installation:** There are three options for installing `mcp-proxy`: `uv` (recommended) , `pipx` , or `npm`.
    
- **PAT Scopes (Permissions):** The Personal Access Token (PAT) must have permissions for **Work Items: Read & Write** and **Code: Read** and **Build: Read**, or **Full Access**.
    
- **Query Rule:** When retrieving data from Azure DevOps, you should use the keyword **'organization'** instead of 'project', as the ADO API treats the organization as the project.
    

## Requirements

There are 3 key points that you need to prepare.

**List of Test Objects**

Use **Katalon’s Record and Spy features** or integrate with [Chrome DevTool MCP Server](docs/katalon-studio/studioassist/mcp-servers/chrome-devtool-mcp-server.md) and use **StudioAssist** to capture all necessary objects required for your test cases. **Rename folders and object names** for easier identification, maintenance, and reuse when needed

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/azure-devops-mcp-bridge-best-practices-1.png" alt="Azure DevOps MCP Bridge Best Practices image 1" width="500px" />
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/azure-devops-mcp-bridge-best-practices-2.png" alt="Azure DevOps MCP Bridge Best Practices image 2" width="500px" />
<br/>

**List of Test Plans and Test Cases**

Test Cases:
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/azure-devops-mcp-bridge-best-practices-3.png" alt="Azure DevOps MCP Bridge Best Practices image 3" width="500px" />
<br/>

Test Plans:
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/azure-devops-mcp-bridge-best-practices-4.png" alt="Azure DevOps MCP Bridge Best Practices image 4" width="500px" />
<br/>

**Include the names and locations of captured objects in the test steps of ADO Test Cases**

E.g: Check the Brand section from the left side bar. Check the **value of the `Brands_Title`** on `Object Repository / Flow4_AzureDevOps_Integration/Home Page/Page_Automation Exercise`. Aslo, check the `Brands_List` on `Object Repository / Flow4_AzureDevOps_Integration/Home Page/Page_Automation Exercise`

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/azure-devops-mcp-bridge-best-practices-18.png" alt="Azure DevOps MCP Bridge Best Practices image 18" width="300px" />
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/azure-devops-mcp-bridge-best-practices-17.png" alt="Azure DevOps MCP Bridge Best Practices image 17" width="500px" />
<br/>

**Azure DevOps MCP Server**

### Install python

[https://www.python.org/downloads/](https://www.python.org/downloads/)

### Install mcp-proxy

There are 3 ways to install mcp-proxy

Open Terminal / Command Prompt

Option 1: Using uv (recommended) uv tool:

```jsx
install mcp-proxy
```

Option 2: OR using pipx:

```jsx
pipx install mcp-proxy
```

Option 3: OR using npm:

```jsx
npm install -g mcp-proxy @azure-devops/mcp
```

### Generate ADO Personal Access Token

- **Scopes**: Select the permissions you need:
    
    - **Work Items**: Read & Write
        
    - **Code**: Read
        
    - **Build**: Read
        
    - Or select **Full Access** for all permissions
        
- Keep this token for later use
    

### Set up the PAT

**Windows (PowerShell):**

```jsx
$env:AZURE_DEVOPS_PAT = "your-pat-token-here"
```

**Windows (CMD):**

```jsx
set AZURE_DEVOPS_PAT=your-pat-token-here
```

**macOS/Linux:**

```jsx
export AZURE_DEVOPS_PAT="your-pat-token-here"
```

**OR Permanent setup (macOS/Linux):**  
Add to your `~/.zshrc` or `~/.bashrc`:

```jsx
echo 'export AZURE_DEVOPS_PAT="your-pat-token-here"' >> ~/.zshrc source ~/.zshrc
```

### Run the MCP proxy server with your Azure DevOps organization:

```jsx
mcp-proxy --port 3000 --host 127.0.0.1 --stateless --allow-origin '*' npx @azure-devops/mcp "<<ADO Project Name>>"
```

**Result:**

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/azure-devops-mcp-bridge-best-practices-5.png" alt="Azure DevOps MCP Bridge Best Practices image 5" width="500px" />
<br/>

## Best Practices Steps

### Step 1: Integrate ADO MCP Server in Katalon Studio

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/azure-devops-mcp-bridge-best-practices-6.png" alt="Azure DevOps MCP Bridge Best Practices image 6" width="500px" />
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/azure-devops-mcp-bridge-best-practices-7.png" alt="Azure DevOps MCP Bridge Best Practices image 7" width="500px" />
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/azure-devops-mcp-bridge-best-practices-8.png" alt="Azure DevOps MCP Bridge Best Practices image 8" width="300px" />
<br/>

### Step 2: Integrate ADO test plan to Katalon Studio

Project → Settings → Integrations → Azure DevOps

- Server URL: `<<ADO Organization Link>>`
    
- Personal Access Token: `PAT_token`
    
- Click “Connect“ to ensure that you can connect successfully
    
- Select the desired project and test plans
    

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/azure-devops-mcp-bridge-best-practices-9.png" alt="Azure DevOps MCP Bridge Best Practices image 9" width="500px" />
<br/>

### Step 3: Use StudioAssist to retrieve ADO test cases under the root test plan

You should uncheck **MCP Server** under the following sources when retrieving data from Azure DevOps:

- Katalon
    
- Katalon Studio
    
- Katalon TestOps
    

This approach helps prevent retrieving incorrect or irrelevant data, especially in cases where prompts are not clearly defined or when similar terms appear across multiple sources

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/azure-devops-mcp-bridge-best-practices-10.png" alt="Azure DevOps MCP Bridge Best Practices image 10" width="300px" />
<br/>

#### Prompts

1. Retrieve the list of ADO test cases under the root Test Plan
    

```jsx
Retrieve the list of ADO Test Cases under the root Test Plan of the ADO Organization named "<<your project name>>"
```

The ADO API treats the organization as the project. Therefore, when defining your query, you **should use the keyword ‘organization’ instead of ‘project’ to ensure data is retrieved correctly**.

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/azure-devops-mcp-bridge-best-practices-11.png" alt="Azure DevOps MCP Bridge Best Practices image 11" width="300px" />
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/azure-devops-mcp-bridge-best-practices-12.png" alt="Azure DevOps MCP Bridge Best Practices image 12" width="300px" />
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/azure-devops-mcp-bridge-best-practices-13.png" alt="Azure DevOps MCP Bridge Best Practices image 13" width="700px" />
<br/>

2. Create test cases automatically under the Test Cases folder of the Katalon Studio

Enable Katalon Studio MCP Server

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/azure-devops-mcp-bridge-best-practices-14.png" alt="Azure DevOps MCP Bridge Best Practices image 14" width="300px" />
<br/>

Prompt:
```jsx
Create the list of Test Cases above under <<Test Cases folder or your desired colation>> of Katalon Studio
```

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/azure-devops-mcp-bridge-best-practices-15.png" alt="Azure DevOps MCP Bridge Best Practices image 15" width="300px" />
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/azure-devops-mcp-bridge-best-practices-16.png" alt="Azure DevOps MCP Bridge Best Practices image 16" width="500px" />
<br/>

### Step 4: Automatically generate scripts for a specific test case

**Create test scripts**

E.g: **Create test scripts** for the test case named "Verify adding an item to the cart from the product details page" by getting the information from the test case https://dev.azure.com/katalon-cs/ADO_TestingLifeCycle/_workitems/edit/20/

#### Prompts

```jsx
Create test scripts for the test case named "Verify adding an item to the cart from the product details page" by getting the information from the test case <<Link ADO Test Case with specific id>>
```


<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/azure-devops-mcp-bridge-best-practices-20.png" alt="Azure DevOps MCP Bridge Best Practices image 20" width="300px" />
<br/>

**Update the specific test case with the generated test scripts.**

E.g: Update the test case named "Verify adding an item to the cart from the product details page" under the Test Cases / Day_2/Flow4_AzureDevOps_Integration with the provided scripts above

```jsx
Update the test case named "<<name of your desired test case>>" under the <<location of your test case in the Katalon Studio>> with the provided scripts above
```

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/azure-devops-mcp-bridge-best-practices-19.png" alt="Azure DevOps MCP Bridge Best Practices image 19" width="500px" />
<br/>

:::tip
- AI often suggests more than what we actually have, so you need to review the scripts to ensure they are appropriate and adjust them as needed.
:::

## Conclusion

The conclusion reinforces that applying the **Azure DevOps MCP Bridge Best Practices** facilitates the automated transition from **Requirements** to **Test Scripts**. This is achieved by leveraging StudioAssist to generate high-quality, maintainable Test Scripts based on the Test Objects explicitly defined within the ADO Test Cases

See all best practice documents at [Katalon products best practices](/katalon-platform/katalon-products-best-practices).