---
title: Create and Activate an Offline License for Katalon Studio Enterprise
---

This guide demonstrates how to generate an offline license file from the Katalon portal and use it to activate **Katalon Studio Enterprise**.

:::caution requirements
You must have an **Account Admin** role and a KSE Online License to perform this action.
:::

## What is a  KSE Offline License?

A **KSE Offline License** grants its owner access to **Katalon Studio Enterprise** without an internet connection.

By default, a **KSE License** is per-user and requires an internet connection. If you need to use KSE offline, create an offline license from it.

Doing so converts the state of your **KSE License** from online to offline - you can't use the license online until its offline duration expires. Create a **KSE Offline License** only when you intend to use the license on a single machine.

## Steps to create a  KSE Offline License

:::note Important
- You can't change your  **KSE Offline License**'s expiry date once created.
- You can't revoke or reassign the  **KSE Offline License** to a different machine once created.
- After creating a  **KSE Offline License**, you cannot use the license online on another machine.
:::

1. Navigate to Admin Settings > **Account** > **License Management**.
2. Select the **KSE Hybrid** tab and click the **Create Offline Licenses** button.
<img src="https://tw-cdn.katalon.com/katalon-studio/KSE-and-KRE-license/create-offline-KSE-license/dred-185-offline-license-create-offline-license-button.png" alt="katalon studio log in with offline license button" width="500px"/>
3. Open **Katalon Studio Enterprise**, make sure it's logged out.
4. Log in by clicking **Offline license**.
5. Copy the **Machine ID**.
<img src="https://tw-cdn.katalon.com/katalon-studio/KSE-and-KRE-license/create-offline-KSE-license/dred-185-katalon-studio-enterprise-machine-ID.png" alt="katalon studio logout box with machine ID field" width="500px"/>
6. Return to the browser, paste the **Machine ID** into the corresponding field along with other fields:
	- **Expiry Date**: you choose. After expiry, the offline license expires and you can either use the online license, or create another offline license.
	- **Description**: leave notes to the person using the license.
	- **Select type of creation**: Offline License
7. Click **Create**.
<img src="https://tw-cdn.katalon.com/katalon-studio/KSE-and-KRE-license/create-offline-KSE-license/dred-185-offline-license-create-box.png" alt="katalon studio create box" width="500px"/>
8. Double-check the details in the confirmation box, and click **Create** again.
<img src="https://tw-cdn.katalon.com/katalon-studio/KSE-and-KRE-license/create-offline-KSE-license/dred-185-offline-license-confirm-box.png" alt="katalon studio confirm box" width="500px"/>
9. Click the **Assigned Machine** icon and then click the **Download** icon to save the license file.
<img src="https://tw-cdn.katalon.com/katalon-studio/KSE-and-KRE-license/create-offline-KSE-license/dred-185-offline-license-download-license.png" alt="katalon studio download offline license icon" width="500px"/>
10. Open **Katalon Studio Enterprise**, click **Choose file**, select the downloaded license file, and click **Activate**.
<img src="https://tw-cdn.katalon.com/katalon-studio/KSE-and-KRE-license/create-offline-KSE-license/dred-185-offline-license-activate-window.png" alt="katalon studio running with offline license" width="500px" />

#### Result

You have registered a **KSE Offline License** and re-activated **Katalon Studio Enterprise** with it successfully. You can now continue your work like usual.

<img src="https://tw-cdn.katalon.com/katalon-studio/KSE-and-KRE-license/create-offline-KSE-license/dred-185-using-kse-with-offline-license.png" alt="katalon studio running with offline license" width="500px" />

## My KSE Offline License expires, what's next?

Once expired, the state of the KSE license goes back to being online and no longer binds to one account/machine. You can either:
- Use the license online as usual
- Create another  **KSE Offline License** from the online license

