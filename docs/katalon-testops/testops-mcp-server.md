---
title: "Katalon TestOps MCP Server"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

Katalon TestOps integrates with modern **AI tools** through the **Model Context Protocol (MCP)**.

With the TestOps MCP Server, you can use your AI assistant (for example, Claude, GitHub Copilot, or ChatGPT with MCP support) to work directly with TestOps objects such as **Test Cases**, **Test Suites**, **Test Runs**, **Test Folders**, **Requirements**, **Defects**, **Iterations (Sprints/Releases)**, **Repositories**, and **Projects**.

This integration lets you create, update, move, duplicate, delete, and search TestOps assets, as well as query configuration and quality insights, all from within your AI tool—streamlining test management, reporting, and analysis workflows.

**Availability Notice:**

The TestOps MCP Server integration is available **only for the current version of TestOps**.

If you are using a **legacy version** of TestOps, please contact your **Customer Success Manager (CSM)** for upgrade guidance and compatibility support.

---

## Prerequisites

Before using the TestOps MCP Server:

- Ensure your AI tool supports **MCP server connection**.
- For tools that do **not** support remote MCP servers natively, install the required utilities such as `npx`.
- Confirm that your AI tools (e.g., Claude Desktop, ChatGPT) is configured to connect with an external MCP server.

---

## Configure the MCP Server

To connect your AI tool with TestOps, point it to the TestOps MCP endpoint:

- Use `https://<your-custom-domain>.katalon.io/mcp` in any AI tool that supports configuring a remote MCP server natively. See [Custom Domain](/katalon-platform/administer/administration-and-licensing-alternate/manage-systems/general/general-setting/sso-and-scim#custom-domain) for more information.
- If your tool does **not** support remote MCP servers natively (for example, Claude Desktop), add the following JSON configuration to your MCP server setup. 

<Tabs groupId="language" defaultValue="claude" values={[
  {label: 'Claude Desktop', value: 'claude'},
  {label: 'Copilot', value: 'copilot'},
]}>
  <TabItem value="claude">
    ```json
    {
      "mcpServers": {
        "katalon-prod-mcp": {
          "command": "npx",
          "args": [
              "mcp-remote",
              "https://<your-custom-domain>.katalon.io/mcp",
              "--transport",
              "http"
          ]
        }
      }
    }
    ```
  </TabItem>
    <TabItem value="copilot">
    ```json
    {
      "servers": {
        "katalon-prod-mcp": {
          "url": "https://<your-custom-domain>.katalon.io/mcp",
          "type": "http"
        }
      },
      "inputs": []
    }    
    ```
  </TabItem>
</Tabs>

After updating the configuration:

1. Restart your AI application to detect the new MCP server connection.
2. Your browser will display a prompt asking you to log in to your TestOps account.
3. In your AI tool, make sure to toggle on the `katalon-prod-mcp` tool to activate it.
---

## Supported Operations
> ⚠️ Note: Supported scopes and tools may evolve in future updates.
> 
The TestOps MCP Server currently supports the following scopes and tools:

| **Scope** | **Tool** | **Description** |
| --- | --- | --- |
| **Test Case** | `create_test_case` | Create a manual test case, optionally including detailed test steps. |
|  | `read_test_case` (Read Only) | Retrieve the details of a specific test case by its ID. |
|  | `find_test_cases` (Read Only) | Search for test cases within a project’s test repository. |
|  | `delete_test_case` | Permanently delete a test case. |
|  | `find_test_cases` | Search for test cases within a project’s test repository. |
|  | `update_test_case` | Update a test case’s content and/or metadata. |
|  | `move_test_case` | Move a test case to a different folder or location while keeping its existing name. |
|  | `duplicate_test_case` | Create a copy of an existing test case. |
|  | `get_test_case_insights` | Retrieve test case insights for a specific sprint/release iteration or date range, including: <br/> - Total test cases, automated vs manual counts <br/> - Executed and passed totals <br/> - Status distribution (passed/failed/skipped) <br/> - Detailed per–test case information such as ID, name, type (automated/manual), executor, last execution time, and status. |
| **Test Suite** | `manage_test_suite` | Manage test suites and their relationships with test cases, including creating, updating, deleting, duplicating, moving, renaming, and adding test cases to test suites. |
|  | `read_test_suite` (Read Only) | Retrieve details of a specific test suite by its ID, including the list of test cases in that suite. |
|  | `find_test_suite` (Read Only) | Search for test suites within a project’s test repository. |
| **Test Run** | `create_test_run` | Create a manual test run and optionally start it immediately (Run Now mode). |
| **Test Folder** | `find_test_folders` (Read Only) | Search for test folders within a project’s test repository. |
|  | `manage_test_folder` | Manage test folders, including creating, updating, deleting, duplicating, moving, and renaming folders. |
| **Test Configuration** | `get_test_configuration_insights` (Read Only) | Retrieve configuration insights for a specific sprint/release iteration or date range (optionally filtered by configuration type such as OS or browser), including: <br/> - Total platforms and tests <br/> - Overall health indicator (Healthy/At Risk/Critical/No Data) <br/> - Coverage and pass thresholds <br/> - Per‑platform statistics (executed tests, coverage rate, passed tests, pass rate, status such as Good/Low Coverage/Low Pass Rate/Needs Attention) <br/> - Test‑level execution details (test case ID and status). |
| **Requirement** | `find_requirements` (Read Only) | List requirements synced from the project’s issue tracking integrations (such as Jira or Azure DevOps). |
|  | `get_requirement_insights` (Read Only) | Retrieve requirement coverage insights for a specific sprint/release iteration, including: <br/> - Total requirements, fully/partially/not covered counts <br/> - Overall coverage rate <br/> - Detailed per‑requirement information such as requirement ID, issue ID, summary, type, linked vs published vs executed test cases, passed/failed test counts, total defects, coverage/testing/quality status, and actionable insight. |
|  | `link_requirements_to_test_case` | Link one or more requirements to a specific test case. |
|  | `unlink_requirements_from_test_case` | Remove existing relationships between requirements and a test case. |
| **Defect** | `get_defect_insights` (Read Only) | Retrieve defect insights for a specific sprint/release iteration or date range (optionally filtered by resolution state such as resolved or unresolved), including: <br/> - Summary statistics grouped by priority and severity (with counts) <br/> - Detailed defect information such as issue ID, summary, severity, priority, URL, status, resolved date, and assignee. |
| **Iteration** | `find_iterations` (Read Only) | Find the iterations (sprints or releases) configured for a TestOps project. |
| **Repository** | `list_repositories` (Read Only) | List source code repositories associated with a TestOps project. |
| **Project** | `list_projects` (Read Only) | List TestOps projects that the current user has access to. |

---

## Example Use Cases

Once your MCP server connection is active, you can use your LLM to interact directly with TestOps.

Example operations include:

- **Creating and updating Test Cases** and Test Suites, including metadata and descriptions.
- **Duplicating or moving assets** across folders for better organization.
- **Deleting outdated items** to maintain project cleanliness.
- **Retrieving project information**, such as Sprints and Releases, using project IDs.

This helps teams **automate test management workflows** and **bridge LLM intelligence with TestOps operations**, streamlining test planning and execution.

Watch how Claude Desktop connects to the TestOps MCP Server to analyze project data.
    <video width="600" controls>
    <source src="https://tw-cdn.katalon.com/katalon-platform/mcp/claude-example.mp4" type="video/mp4" />
    </video>
