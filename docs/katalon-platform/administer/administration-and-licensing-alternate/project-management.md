---
title: "Create and manage a Project"
---

This guide explains how to **create, update, and oversee projects** in your organization using Katalon TestOps.

:::caution Requirements
Only **Account Admins** can create projects. After creation, the assigned **Project Admins** can manage project settings and invite users who already belong to the organization.
:::

---

## Create a Project

<video width="800" controls>
  <source src="https://tw-cdn.katalon.com/katalon-platform/admin/org-management/create-project.mp4" type="video/mp4" />
</video>

1. Navigate to **Admin Settings → Org → Organization Management**.  
   You’ll land on the **Organization Management** tab.  
2. Click **+ Create**.  
3. Choose **Project** from the dropdown menu.  
4. Complete the **Create Project** form with the following details:  
   - **Name**: Provide a meaningful, easy-to-recognize name  
   - **Description** *(optional)*: Summarize the project’s goals or scope  
   - **Admin**: Select users to assign as Project Admins  
   - **Parent organization**: Choose the organizational unit this project belongs to  
5. Click **Create** to finalize the setup.

> ✅ **Tip:** Use a name that clearly identifies the product or team.  
> For example: “Web Automation – Q4 2025” is more informative than “Test Project A.”


## Edit Project Details
<iframe
src="https://demo.arcade.software/hwtuGbHAivmRZ1gvwche?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Share an Analytics Dashboard View by Email"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

You can update a project's **name** or **description** at any time:

1. Go to **Admin Settings → Org → Organization Management**.  
2. Find the project you want to update.  
3. In the project detail view:  
   - Click the **project name** to rename it  
   - Click the **description** field to modify it  
4. Enter your changes, then click the ✅ checkmark to save.
You can update a project's **name** or **description** at any time:

> 💡 **Tip:** 
> - Use short, consistent naming conventions like `QA Automation – Web`, `QA Automation – Mobile`, or `API Performance Tests`.
> - In the description, include goals or scope, such as “End-to-end tests for web app v3.5” or “Monitors backend load testing.”

## Delete a Project

:::info Note
Only user with **Account Admin** role can delete projects. 
:::
<iframe
src="https://demo.arcade.software/B96UWlRH1YIijbmvXTya?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Delete a Project from Your Organization"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

To delete a project:

1. Go to **Admin Settings → Org → Organization Management**.
2. Click the `>` icon to expand the organization or sub-organization to view its projects.
3. Click the **Delete** (trash can) icon next to the project you want to delete.
4. In the **Delete Project** confirmation dialog, click **Confirm** to delete the project or **Cancel** to keep it.

#### Result

- The project is removed from the system.
- The project list refreshes automatically without reloading the page.

Katalon records project deletion activities in audit logs, including the user who performed the action, the project, and the time of deletion.

---

## Related Topics

- [Add a User to Project and assign them role(s)](/katalon-platform/administer/administration-and-licensing-alternate/manage-organizations/user-management/add-a-user-to-projects)
