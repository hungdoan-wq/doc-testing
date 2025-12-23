---
title: "Account General"
---
This document shows how to view and edit your Account's general information.

:::tip requirements
You must be assigned the **Account Admin** role to perform these actions.
:::

## Edit Account information

To edit Account information:

1. Go to **Admin Settings > Organization**. You can find **Admin Settings** in the upper-right corner of the page, indicated by a cog icon.
2. Click **Account > General**.
3. Click on the **Edit Account Information** button located at the upper right corner of your account's information box.

    <img src="https://tw-cdn.katalon.com/katalon-platform/admin/user-management/edit-account-info.png" alt="Click edit account info button" width="700"/>

4. The **Edit Account Information** dialog box pops up. Input or edit your information as required.

    <img src="https://tw-cdn.katalon.com/katalon-testops/Administration and Licensing/Manage Accounts/General/Admin Account General Edit.png" alt="The account information box in Katalon TestOps" width="700"/>

5. Click **Save**.
## Delete an Account

:::caution Warning
- Only the **Primary Account Admin** can delete an account.
- Deleting an account permanently removes **all associated data**, including organizations, projects, test plans, and license associations. This action **cannot be undone**.
:::
<iframe
src="https://demo.arcade.software/ujpvieEmE19uhWHBZpVM?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Delete an Account"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

To delete an account:

1. Go to **Admin Settings → Organization**.
2. Select **Account → General**.
3. In the **Account Information** section, click the **More** (⋮) icon and select **Delete Account**.
4. In the **Delete Account** dialog:
    - If you are **not** the Primary Account Admin, a message appears instructing you to contact the Primary Account Admin to perform this action. Click **Acknowledge** to close the dialog. No deletion occurs.
    - If you **are** the Primary Account Admin, continue with the steps below.
5. Enter the account’s **exact company name** in the **Company name** field to confirm.
6. Click **Delete**.

#### Result

- If successful, Katalon deletes the account and all related data and displays a confirmation message.
- You are signed out and redirected to the login page.

## View Account ID

<img src="https://tw-cdn.katalon.com/katalon-platform/admin/user-management/view-account-id.png" alt="Account ID highlighted" width="700"/>
