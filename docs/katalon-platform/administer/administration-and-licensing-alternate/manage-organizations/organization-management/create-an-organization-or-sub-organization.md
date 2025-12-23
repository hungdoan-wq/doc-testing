---
title: Create and manage Org/sub-Org
---

This document shows you how to manage your organization in Katalon TestOps.

:::tip requirements
You must be assigned the **Account Admin** role to perform these actions.
:::

## Create an Organization or sub-Organization

1. Go to **Admin Settings**. You can find Admin Settings at the upper right corner of the page
2. Click **Org > Organization Management**

3. Click on `+ Create`. Select **Organization** from the dropdown.
    <img src="https://tw-cdn.katalon.com/katalon-platform/get-started/create-org.png" alt="Create org instructions" width="700"/> <br/>
4. Input the name you want.
5. Under **Parent Organization**, select your Account to create a new Organization, or choose an existing Organization to create a sub-Organization.
6. Click **Create** to finish.
    <img src="https://tw-cdn.katalon.com/katalon-platform/get-started/create-org-box.png" alt="Create org box pop up" width="700"/> <br/>

## Rename an Organization

1. Go to **Admin Settings**. You can find Admin Settings at the upper right corner of the page
2. Click **Org > Organization Management**

3. Hover over an Organization's name. The **Edit Name** button (pencil icon) appears. Click on it.

<br/>

<img src="https://tw-cdn.katalon.com/katalon-testops/Administration and Licensing/Manage Organizations/Organization Management/Edit Organization Name.png" alt="Rename Organization" width="1080"/>

<br/>

4. Enter the new name and click on the check.

## View an Organization's ID

Your Organization ID is displayed in the organization directory, within the name column. 

For example, in the image below, the Organization's ID of the first Organization is OG-4311XX.
<img src="https://tw-cdn.katalon.com/katalon-testops/Administration and Licensing/Manage Organizations/Organization Management/Organization ID in Organization Management.png" alt="View Organization ID" width="1080"/>

## Delete an Organization

:::info Note
- Only user with **Account Admin** role can delete an organization. 
- Some Organizations cannot be deleted:
    - The first (default) Organization created under an Account cannot be deleted. Its delete icon is disabled and shows the tooltip:  
    - Any Organization that still contains sub-Organizations or Projects cannot be deleted until those items are removed or reassigned.
:::

<iframe
src="https://demo.arcade.software/5pocR526zZcFo9xv6r6n?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Delete Organization"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

To delete an Organization:

1. Go to **Admin Settings**.  
2. Click **Org > Organization Management**.  
3. On the Organization detail page, locate the **Delete** icon.  
   - If the Organization is the default one, the delete icon is disabled and cannot be used.
4. Katalon checks for dependencies:
   - If the organization contains any sub-organizations or projects, deletion is blocked and a message is shown. Click **Acknowledge** to close it.
   - If there are **no sub-organizations or projects**, a confirmation dialog appears.
5. In the confirmation dialog, click **Delete** to proceed or **Cancel** to keep the organization.

#### Result
The organization is **soft-deleted** and removed from the Organization list, while the deletion record is kept in audit logs.

Katalon records **both** successful deletions and failed deletion attempts for auditing purposes, including the user, the organization, and the time of the action.