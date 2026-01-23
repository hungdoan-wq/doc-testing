---
title: "User Management"
---
This guide shows how to view user details, manage roles, change organizations, resend invitations, and deactivate users from the **User Management** page.

:::tip Requirements
You must have the **Account Admin** role to perform these actions.
:::

---

## View User Details

1. Go to **Admin Settings > Organization** (the cog icon in the upper-right corner).
2. Click **Org > User Management**.
3. In the directory, click on the user’s name to open their **User Detail** page.

<img width="700" src="https://tw-cdn.katalon.com/katalon-platform/admin/user-management/user-management.png" alt="User Detail Page Screenshot"/>

The **User Detail** page displays:

- **Full name** and **profile picture**
- **Contact details** and **employment start date**
- **Account-level role** – whether they are an account admin
- **Affiliated organization**
- **Licenses** (e.g., TestOps, KSE, TestOps Guest)
- **Joined projects list**

<img width="700" src="https://tw-cdn.katalon.com/katalon-platform/admin/user-management/user-info.png" alt="User Detail Page Screenshot"/>

---

## Change a User’s Account Roles

1. Go to **Admin Settings > Organization > User Management**.
2. Click the user’s name to open their **User Detail** page.
3. Under **Account Role**, click **Change Role & Permission**.
<img width="700" src="https://tw-cdn.katalon.com/katalon-platform/admin/user-management/change-user-roles.png" alt="Click change role and permissions account"/>
4. In the **Change Role and Permission** dialog, select a new role from the dropdown.
    
    <img src="https://docs.katalon.com/c44e07e2-ed8d-4d5d-86e0-922bde4b7b28/TO3B3_Change_Role_and_Permission_Dropdown.png" alt="Change roles and permission dropdown" width="700"/>
    
5. Click **Update** to apply the changes.

---

## Change a User’s Project Roles

1. Go to **Admin Settings > Organization > User Management**.
2. Click the user’s name to open their **User Detail** page.
3. Next to the project name, click **Change Role and Permission**.
<img width="700" src="https://tw-cdn.katalon.com/katalon-platform/admin/user-management/change-roles-project.png" alt="Click change role and permissions project"/>
4. In the dialog, use the **Project Role** dropdown to assign new permissions.
    
    <img src="https://docs.katalon.com/055440df-13ae-4c30-8be6-7e9e37e04689/TO3G1_Project_Role_Selection.png" alt="Change roles and permissions dropdown" width="700"/>
    
5. Click **Update**.

---

## Change a User’s Organization

1. In the **User Detail** page, click **Change** under the **Organization** label.
    
    <img width="700" src="https://tw-cdn.katalon.com/katalon-platform/admin/user-management/change-org.png" alt="Click change org"/>
    
2. In the **Change Organization** dialog, select the new organization.
    
    <img width="700" src="https://tw-cdn.katalon.com/katalon-platform/admin/user-management/change-org-dropdown.png" alt="Change org dropdown"/>
    
3. Click **Save**.

---

## Resend Invitation to a User
:::tip Reinviting Users

If a user was previously **Inactive**, re-sending an invitation restores their access. Once they accept, their status automatically returns to **Active**.

:::
If an invitation link expires before the user accepts it, you can resend it.

1. Locate the user with **Pending** status.
2. Hover over the right end of the row and click **Resend invitation** or **Copy invitation link**.
<img src="https://docs.katalon.com/eece300c-0e59-463e-8cea-c399d0296b30/testops-gen3-resend-invitation.png" alt="click resend invitation" width="700" />


---

## Deactivate a User
:::note Inactive Status
When a user becomes **Inactive**, their account remains in the system but they no longer have access to the workspace.

You can restore access anytime by re-inviting them — their status will automatically switch back to **Active** once accept the invitation.
:::
1. Go to the user’s **User Detail** page.
2. Click the **three-dot menu** in the upper-right corner and select **Deactivate User**.
    
    <img width="700" src="https://tw-cdn.katalon.com/katalon-platform/admin/user-management/deactivate.png" alt="Deactivate a user"/>
    
3. In the **Deactivate User From Account** dialog, click **Deactivate** to confirm.
    
    <img width="500" src="https://tw-cdn.katalon.com/katalon-platform/admin/user-management/deactivate-confirm.png" alt="Deactivate a user confirmation"/>
    
4. The user’s status changes to **Inactive** in the **User Directory**.
    
    <img src="https://docs.katalon.com/10670ee9-d4bc-400e-a224-4206ae127298/TO3B3_User_Directory_Censored.png" alt="inactive status" width="500" />

### User status definitions

- **Pending**: An invitation has been sent, but the user has not accepted yet. If the link expires, a new one should be sent.
- **Active**: The invitation has been accepted. The user can use the workspace according to the assigned role and permissions.
- **Inactive**: The user has been removed from the account and cannot access the workspace. Access can be restored by sending a new invitation; after acceptance, the status changes to Active.