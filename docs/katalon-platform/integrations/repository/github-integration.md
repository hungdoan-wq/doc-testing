---
title: "Github integration"
---

This document shows you how to set up an integration for Github within Katalon TestOps.

## Connect a Github account to TestOps

:::caution requirements
You must have the **Account Admin** or **System Admin** role to perform this action.
:::
To set up the connection:
1. Go to **Admin Settings**. (You can find Admin Settings at the upper right corner of the page).
2. Navigate to **System > Integrations**, then click  **+ Create Integration**.

<img src="https://tw-cdn.katalon.com/katalon-platform/integration/admin-integrations.png" alt="Navigate to TestOps admin integration view" width="700"/>

3. In the **Available Integration** list, choose **Github**. ✅ A green check mark indicates that the integration is currently available.

4. Fill in the required fields to establish the connection. Katalon TestOps supports **two types** of GitHub instances:
    ### 1. Github.com (SaaS)
    - **Integration Name**: A custom name for the integration (max 50 characters).
    - **Organization Account URL**: The Github Organization URL that starts with `https://`. 
        - Example: `https://github.com/your-group-name`  
    - **Github Personal Access Token**: To generate a PAT, refer to this [GitHub documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) on creating a personal access token.
        :::info **Note**: 
        - Ensure your PAT includes permission to create and manage repository webhooks because the PAT you provide here will also be used later to automatically create GitHub webhooks during project-level GitHub integration.
        :::
    - **Description (Optional)**: A brief description of the integration (max 255 characters). <img src="https://tw-cdn.katalon.com/katalon-platform/integration/repository/github-int-dec2.png" alt="Filling in required fields in System Integration UI" width="900"/>


    ### 2. GitHub Enterprise Server or Self-Managed (On-Premise)
    :::tip TIPS
    - **Supported Version**:  GitHub Server 3.13.16 and above. Older versions may not be fully compatible with TestOps and could cause connection issues.
    :::
    - Fill in the same fields as listed above (Integration Name, Organization URL, PAT, and optional Description). 
        - TestCloud Tunnel (optional). See [Local testing with TestCloud in TestOps](/katalon-testcloud/local-testing-with-testcloud/local-testing-with-testcloud-in-testops) for steps to install the agent, generate tunnel, and manage tunnel availability.

        <img src="https://tw-cdn.katalon.com/katalon-platform/integration/repository/github-int-dec2-tunnel.png" alt="Filling in required fields in System Integration UI" width="900"/>

5. Click **Test Connection** to validate the integration.
6. Once validated, click **Save**, or click **Cancel** to exit without saving any changes.

#### Result

To verify if the connection is active, navigate to **Admin > System > Integrations**. Your Github integration will be listed under the **Integration list**.  
- If the status initially shows as **Inactive**, reload the page to update the status to **Active**.  
- If the status shows **Error**, verify all required configuration fields, especially the Personal Access Token (PAT), and confirm it is valid and configured correctly in the account-level integration.
<img src="https://tw-cdn.katalon.com/katalon-platform/integration/repository/gitlab-list-account.png" alt="Navigate to TestOps admin integration view" width="700"/>

### Disconnect a Github connection

We only support disconnecting (not deleting) integrations to preserve data integrity, maintain audit history, and allow easy reactivation if needed.

:::info When an integration is disconnected:  
- The status changes to **Inactive**.  
:::

1. Click **Disconnect** icon next to the connection you want to disconnect.
<img src="https://tw-cdn.katalon.com/katalon-platform/integration/git-disconnect-button.png" alt="Disconnect button" width="800"/>

2. A confirmation dialog will appear. Click **Disconnect** if you want to move forward.

### Reconnect a Github connection
:::info After you re-connect an integration:  
- The status changes back to **Active**.  
- If the status shows **Error**, verify all required configuration fields and make necessary corrections.  
:::

1. Click **Reconnect** icon next to the connection you want to disconnect.
<img src="https://tw-cdn.katalon.com/katalon-platform/integration/github-reconnect.png" alt="Github reconnect button" width="800"/>

2. A confirmation dialog will appear. Click **Reconnect** if you want to move forward.

## Configure Github integration at the Project level

:::caution requirements 
- You must have the **Project Admin** role to perform this action.
- A GitHub account must already be connected at the [Account-level](/katalon-platform/integrations/repository/github-integration#connect-a-github-account-to-testops)
:::

1. Navigate to your **specific project's UI > Settings > Integrations**.

<img src="https://tw-cdn.katalon.com/katalon-platform/integration/project-integrations.png" alt="Navigate to TestOps admin integration view" width="700"/>

2. On your linked GitHub connection, click the right edge and select **New configuration (Settings icon)**.
<img src="https://tw-cdn.katalon.com/katalon-platform/integration/repository/github-list-project-config.png" alt="Github Setting icon" width="800"/>

3. Fill in the required fields:
- **Display Name**: A custom name for the linked project (max 50 characters).
- **URL**: The URL to the desired repository, branch, or directory from **the linked Github account**. Copy and paste the URL into this field.  
  - For example: If you linked a connection under `https://github.com/katalon-studio`, then the URL should look like:  
  `https://github.com/katalon-studio/katalon-repo/tree/main`
- **Link existing test execution results with test cases having the exact same paths and names (Optional)**: Enable this if you want TestOps to automatically attach existing test results to test cases and test suites whose paths and names match your GitHub structure.
- **Description (Optional)**: A brief description of this linked project (max 255 characters).
<img src="https://tw-cdn.katalon.com/katalon-platform/integration/configure-git-project.png" alt="Filling in required fields in System Integration UI" width="700"/>

4. Click **Proceed** to sync data and finalize the connection. TestOps automatically syncs your project with the GitHub repository.

    - A GitHub webhook is created automatically, enabling real-time updates such as test results and GitHub action triggers.
    - If webhook creation succeeds → The integration status updates to **Active**.
    - If webhook creation fails → The status shows Inactive, with an error message: “Failed to create GitHub webhook. Please try again.” You can retry by clicking **Proceed** again once the issue is resolved.
    **Additional behavior:**
    - If the status initially shows as **Inactive**, reload the page to update the status to **Active**.
    - If you modify the connection details and click **Save**, the changes are saved, but the status may remain **Inactive**.
    To sync data and finalize the connection, you must click **Proceed**.
5. [Optional] To edit an existing linked Github integration, click the **Edit (pen)** icon, make the necessary changes, and click **Proceed**. After editing, reload the page to ensure data is refreshed.

#### Result

Your Github repository is now active within your project.
<img src="https://tw-cdn.katalon.com/katalon-platform/integration/repository/github-linked-project.png" alt="Github linked projects" width="1000"/>

## View test cases or test suites synced from linked GitHub integration

To view test cases or test suites synced from the linked GitHub integration, navigate to **Tests > Test Cases/Test Suites**.

<img src="https://tw-cdn.katalon.com/katalon-platform/integration/repository/github-linked-test.png" alt="Github linked  in Tests folder" width="1000"/>

## Archive a linked Github integration
You must have the **Project Admin** role to perform this action.

:::info  
When an integration is archived:  
- The status changes to **Archived**.  
- The integration no longer appears in the **Test Cases/Test Suites** module.  
- Any scheduled test runs in the **Execution** module will be automatically canceled at runtime.  
:::

To archive a linked Github integration:
1. Navigate to your **specific project's UI > Settings > Integrations**.
2. Click the right edge of your **linked connection** and select **Archive** icon.

<img src="https://tw-cdn.katalon.com/katalon-platform/integration/repository/github-archive.png" alt="Archive github project" width="1000"/> <br/>

3. A confirmation dialog will appear. Click **Archive** if you want to move forward.
    <img src="https://tw-cdn.katalon.com/katalon-testops/integration/github/archive-confirm-box.png" alt="Confirmed unarchive box" width="500"/>

## Unarchive a linked Github integration
You must have the **Project Admin** role to perform this action.

:::info  
After you unarchive an integration:  
- The status might appear as **Inactive**. Reload the page to update it to **Active**.  
- If the status shows **Error**, verify all required configuration fields and make necessary corrections.  
:::

To unarchive a linked Github integration:
1. Navigate to your **specific project's UI > Settings > Integrations**.
2. Click the right edge of your **linked connection** and select **Unarchive** icon.
    <br/> <img src="https://tw-cdn.katalon.com/katalon-platform/integration/repository/github-unarchive.png" alt="Showing unarchive icon in System Integration list" width="1000"/> <br/>
3. A confirmation dialog will appear. Click **Unarchive** if you want to move forward.
    <img src="https://tw-cdn.katalon.com/katalon-testops/integration/github/unarchive-confirm-box.png" alt="Confirmed unarchive box" width="500"/>

