---
title: "GitHub Integration"
---

This document explains how to set up and manage a GitHub integration in Katalon TestOps.

## Overview

GitHub integration in TestOps requires different setup steps depending on your role and what you need to accomplish:

| Required Role / Permission | Step | Purpose | Result |
|-------------|------|---------|--------|
| **Account Admin / System Admin** (TestOps) | Step 1: Account-level integration | Authorize the connection between TestOps and GitHub | Connection established (no data synced yet) |
| **Project Admin** (TestOps) | Step 2: Project-level repository connection | Link a specific repository and branch to the project | Data is synced from GitHub to TestOps |
| **User with write access to the GitHub repository** | Step 3: Personal Access Token (PAT) | Enable updates from TestOps to be pushed back to GitHub | Test cases can be updated in TestOps and synced back to GitHub |

## Step 1: Authorize GitHub Connection (Account-level)

:::caution note
- This step **only authorizes the connection**; no data is synced at this stage.
- You must have the **Account Admin** or **System Admin** role in **TestOps** to perform this action.
- The **Personal Access Token (PAT)** must be created by a user with **full access to all repositories** in the GitHub organization. If using a PAT with limited permissions may cause errors when integrating repositories at the project level.
:::

To set up the connection:

1. Go to **Admin Settings**. (You can find Admin Settings at the upper right corner of the page).
2. Navigate to **System > Integrations**, then click **+ Create Integration**.

<img src="https://tw-cdn.katalon.com/katalon-platform/integration/admin-integrations.png" alt="Navigate to TestOps admin integration view" width="700"/>

3. In the **Available Integration** list, choose **Github**. ✅ A green check mark indicates that the integration is currently available.

4. Fill in the required fields to establish the connection. Katalon TestOps supports **two types** of GitHub instances:

    #### a. Github.com (SaaS)
    - **Integration Name**: A custom name for the integration (max 50 characters).
    - **Organization Account URL**: The Github Organization URL that starts with `https://`. 
        - Example: `https://github.com/your-group-name`  
    - **Github Personal Access Token**: To generate a PAT, refer to this [GitHub documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) on creating a personal access token.

        :::info Note
        Ensure your Personal Access Token (PAT) includes permission to create and manage repository webhooks. The PAT provided here is also used later to automatically create GitHub webhooks during project-level integration.

        - **Fine-grained PAT**
            - Read access → Metadata
            - Read & Write → Contents
            - Read & Write → Webhooks  
        <img src="https://tw-cdn.katalon.com/katalon-platform/integration/github-fine-grain.png" alt="Github Fine-grained PAT scope" width="400"/>
        - **Classic PAT**
            - Must be created by a repository Admin
            - Must grant full permissions for the **repo** scope
        :::
    - **Description (Optional)**: A brief description of the integration (max 255 characters). 
    
    <img src="https://tw-cdn.katalon.com/katalon-platform/integration/repository/github-int-dec2.png" alt="Filling in required fields in System Integration UI" width="900"/>

    #### b. GitHub Enterprise Server or Self-Managed (On-Premise)
    :::tip TIPS
    - **Supported Version**: GitHub Server 3.13.16 and above. Older versions may not be fully compatible with TestOps and could cause connection issues.
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

---

## Step 2: Link Repository to Project (Project-level)

**Purpose**: Connect a specific GitHub repository/branch to your TestOps project and sync test data

:::caution **Important**: 
- Only **Project Admins** can perform this step. Even **Account Admins** and **System Admins** need the Project Admin role in the specific project to configure this
- A GitHub account must already be connected at the [Account-level (Step 1)](#step-1-authorize-github-connection-account-level)
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

If you are trying to link to Github Enterprise repository, your Github account needs to have admin role within that repository.
<img src="https://tw-cdn.katalon.com/katalon-platform/integration/configure-git-project.png" alt="Filling in required fields in System Integration UI" width="700"/>

4. Click **Proceed** to sync data and finalize the connection. TestOps automatically syncs your project with the GitHub repository.

    - A GitHub webhook is created automatically, enabling real-time updates such as test results and GitHub action triggers.
    - If webhook creation succeeds → The integration status updates to **Active**.
    - If webhook creation fails → The status shows Inactive, with an error message: "Failed to create GitHub webhook. Please try again." You can retry by clicking **Proceed** again once the issue is resolved.
    
    **Additional behavior:**
    - If the status initially shows as **Inactive**, reload the page to update the status to **Active**.
    - If you modify the connection details and click **Save**, the changes are saved, but the status may remain **Inactive**.
    To sync data and finalize the connection, you must click **Proceed**.

5. [Optional] To edit an existing linked Github integration, click the **Edit (pen)** icon, make the necessary changes, and click **Proceed**. After editing, reload the page to ensure data is refreshed.

#### Result

Your Github repository is now active within your project and test data has been synced from GitHub to TestOps.

<img src="https://tw-cdn.katalon.com/katalon-platform/integration/repository/github-linked-project.png" alt="Github linked projects" width="1000"/>

---

## Step 3: Enable Updates to GitHub (User-level PAT)

This step is required only if you edit test cases in TestOps (for example, priority, assignee, or structure) and want those changes to sync to GitHub. Users with read-only access do not need to complete this step.

:::caution Prerequisites
Before enabling sync from TestOps to GitHub, ensure that:
- GitHub is connected at the **Account-level (Step 1)**
- A repository is linked at the **Project-level (Step 2)**
- You have **write permissions** to the repository in GitHub
:::

To sync updates from TestOps to GitHub, each user **must add their own GitHub Personal Access Token (PAT)**. TestOps uses the PAT to push updates (such as test priority, assignee, and structure changes) to GitHub on behalf of the user.

<iframe
  src="https://demo.arcade.software/skagkCF5Lj87Anjgdhrt?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
  title="Connect Katalon to GitHub Using a Personal Access Token"
  frameborder="0"
  loading="lazy"
  webkitallowfullscreen
  mozallowfullscreen
  allowfullscreen="true"
  allow="clipboard-write"
    style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

1. Go to **User Settings**.
2. Open the **Personal Integration** tab.
3. Select the Settings icon next to the Integration you want to add the PAT to.
4. Enter:
   - **User Email**
   - **GitHub Personal Access Token (PAT)**
5. Click **Save**.
Once configured, TestOps can push updates to GitHub **on behalf of that user**.

---

## View Test Cases or Test Suites Synced from GitHub

To view test cases or test suites synced from the linked GitHub integration, navigate to **Tests > Test Cases/Test Suites**.

<img src="https://tw-cdn.katalon.com/katalon-platform/integration/repository/github-linked-test.png" alt="Github linked in Tests folder" width="1000"/>

---

## Manage GitHub Integration

TestOps provides multiple ways to manage GitHub integrations without losing historical data. This section covers how to disconnect, archive, and restore an integration when needed.

- Use **Disconnect** to disable the GitHub integration across all projects (Account-level)
- Use **Archive** to disable a GitHub connection for a single project (Project-level)

### Disconnect a Github Connection (Account-level)

**Who can do this**: Account Admin or System Admin

TestOps does not support fully deleting GitHub integrations in order to preserve data integrity and audit history.

When you disconnect a GitHub integration, the connection becomes inactive and all projects using this integration will no longer be able to sync with GitHub until it is reconnected.

:::info When an integration is disconnected:  
- The status changes to **Inactive**.  
- All projects using this integration lose the ability to sync with GitHub.
:::

1. Navigate to **Admin Settings > System > Integrations**.
2. Click **Disconnect** icon next to the connection you want to disconnect.

<img src="https://tw-cdn.katalon.com/katalon-platform/integration/git-disconnect-button.png" alt="Disconnect button" width="800"/>

3. A confirmation dialog will appear. Click **Disconnect** if you want to move forward.

### Reconnect a Github Connection (Account-level)

**Who can do this**: Account Admin or System Admin

:::info After you re-connect an integration:  
- The status changes back to **Active**.  
- All projects can resume syncing with GitHub.
- If the status shows **Error**, verify all required configuration fields and make necessary corrections.  
:::

1. Navigate to **Admin Settings > System > Integrations**.
2. Click **Reconnect** icon next to the connection you want to reconnect.

<img src="https://tw-cdn.katalon.com/katalon-platform/integration/github-reconnect.png" alt="Github reconnect button" width="800"/>

3. A confirmation dialog will appear. Click **Reconnect** if you want to move forward.

### Archive a Linked Github Integration (Project-level)

**Who can do this**: Project Admin of that specific project.

When you archive a linked GitHub integration at the project level, only that repository connection for the current project is archived. GitHub integrations used by other projects remain active and unchanged.

:::info  
When an integration is archived:  
- The status changes to **Archived**.  
- The integration no longer appears in the **Test Cases/Test Suites** module.  
- Any scheduled test runs in the **Execution** module will be automatically canceled at runtime.  
:::

To archive a linked Github integration:

1. Navigate to your **specific project's UI > Settings > Integrations**.
2. Click the right edge of your **linked connection** and select **Archive** icon.

<img src="https://tw-cdn.katalon.com/katalon-platform/integration/repository/github-archive.png" alt="Archive github project" width="1000"/>

3. A confirmation dialog will appear. Click **Archive** if you want to move forward.

<img src="https://tw-cdn.katalon.com/katalon-testops/integration/github/archive-confirm-box.png" alt="Confirmed archive box" width="500"/>

### Unarchive a Linked Github Integration (Project-level)

**Who can do this**: Project Admin of that specific project.

:::info  
After you unarchive an integration:  
- The status might appear as **Inactive**. Reload the page to update it to **Active**.  
- If the status shows **Error**, verify all required configuration fields and make necessary corrections.  
:::

To unarchive a linked Github integration:

1. Navigate to your **specific project's UI > Settings > Integrations**.
2. Click the right edge of your **linked connection** and select **Unarchive** icon.

<img src="https://tw-cdn.katalon.com/katalon-platform/integration/repository/github-unarchive.png" alt="Showing unarchive icon in System Integration list" width="1000"/>

3. A confirmation dialog will appear. Click **Unarchive** if you want to move forward.

<img src="https://tw-cdn.katalon.com/katalon-testops/integration/github/unarchive-confirm-box.png" alt="Confirmed unarchive box" width="500"/>