---
title: KRE tests fail after migrating to TestOps
---

## Condition
After upgrading from TestOps Legacy to TestOps, your Katalon Runtime Engine (KRE) tests fail to run.

## Cause
In the new version of TestOps, licenses are managed at the Organization level instead of the Account level.
During migration, all existing licenses remain at the Account level by default.

If your KRE commands contain the `-orgId` parameter, they look for an Organization-level license.
When no licenses are assigned to that Organization, KRE cannot validate the license and the execution fails.

## Remedy
The Account Admin needs to assign the licenses to the Organization specified in the KRE commands.

1. Sign in to your Katalon TestOps Admin account.
2. Go to **Admin Settings** > **Organization Settings** > **License Management**.
3. Switch to the KRE tab and select **Assign Dedicated Licenses**.
4. Select the Organization that is the same in the `-orgId` parameter and specify the number of license(s).
5. Click **Assign**.

After this change, your KRE commands should work again without further setup.

<iframe
  src="https://demo.arcade.software/Q5SRh3qaeLxTFvGAN8TN?embed&embed_mobile=tab&embed_desktop=inline&hideShare=true"
  title="Assign KRE license to Organization"
  frameborder="0"
  loading="lazy"
  webkitallowfullscreen
  mozallowfullscreen
  allowfullscreen="true"
  allow="clipboard-write"
  style={{ width: "100%", height: "500px", border: "none" }}>
</iframe>


:::note
- If your KRE commands do not use `-orgId`, no action is needed.
- If you use a mix of commands (some with and some without `-orgId`), assign licenses to both your Account and your Organization.
:::

If you need help identifying which commands use `-orgId` or how to check your license setup, contact [Katalon Support Team](support@katalon.com). Make sure to include your Account ID and Org ID for faster assistance.