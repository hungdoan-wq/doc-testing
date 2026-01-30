---
title: Integrate Katalon TestOps and TestCloud with Katalon Studio
---

This document shows you how to integrate **Katalon TestOps** and **Katalon TestCloud** with **Katalon Studio**.

**Katalon TestOps** and **Katalon TestCloud** integration in **Katalon Studio** allows you to:

- Upload test results to **Katalon TestOps** for test management and reports. See: [Upload Katalon Studio test results to TestOps](/katalon-studio/test-reports/upload-test-results-from-katalon-studio-to-katalon-testops-manually)

- Execute tests on cloud-based environments with **Katalon TestCloud**. Learn more: [TestCloud overview](/katalon-testcloud/testcloud-overview).

## Enable TestOps and TestCloud integration

1. To integrate **Katalon TestOps** and **Katalon TestCloud** with **Katalon Studio**, follow these steps: 

 - Open your project in **Katalon Studio**.
 - In the main toolbar, click on the **Katalon Platform** button.

<img className="image" width="400px" src="/12b1f8f8-d014-45ae-aa99-8d6dccaf443f/KS_Katalon_Platform_integration_button.png" alt="Katalon Platform button in Katalon Studio main toolbar" />

2. Alternatively, you can go to **Project** > **Settings** > **Katalon Platform**.

<img className="image" width="700px" src="/26507fa3-dd3d-44cf-a2fa-3d77ad1635da/ks970-settings-platform.png" alt=""/>

3. Tick on the **Enable Katalon Platform Integration** checkbox.

    This option automatically enables **Katalon TestCloud** integration and uploads all test reports to **Katalon TestOps**. You can deselect any of the options based on your preference. Once the connection is successful, **Katalon Studio** fetches all Projects from the Organization you belong to.

    :::note

    - The settings apply for **TestOps** and **TestCloud**. If you want to execute tests with **TestCloud** and upload test reports to **TestOps**, you need to choose the Organization that has an active **TestCloud** subscription or trial. See [Purchase Katalon product via TestOps website](/katalon-platform/administer/administration-tasks/payment-and-subscription/purchase-katalon-subscription#purchase-katalon-product-via-testops---website).

    :::

4. Choose your **Project** from the dropdown menu.
If you are the Owner or Admin, you can also click **New Project** to create a new project.

1. Click **Apply** & close.

**Result**

You can execute tests in a cloud-based environment. Your test results are automatically uploaded to **Katalon TestOps** every time you run test suites in **Katalon Studio**.

## Override authentication

You might need to override authentication when you want to integrate **Katalon Studio** with **Katalon TestOps** using a TestOps private instance.

:::note
- This action applies to both **TestOps** and **TestCloud**.
:::

In **Katalon Studio** > **Project** > **Settings** > **Katalon Platform**, there is an option to override authentication.

<img className="image" width="700px" src="/52ad0aa4-74af-42d1-b28d-7161a563912e/ks970-override-authentication.png" alt="override authentication option inside Katalon Studio"/>

By default, the **Override authentication** option is disabled, which means the **Server URL** and user credentials to connect with **Katalon TestOps** are inherited from what has been filled in the **Activation dialog**.

With the **Override authentication** option enabled, you can input a different **Server URL** and user credentials. This information is saved in `<project_folder>/settings/internal/com.kms.katalon.integration.analytics.properties`.

:::note
- If you experience issues with the **Override authentication** option being disabled, check if your account is part of an organization that uses SAML for authentication. See version 9.3.0 release notes: [Known limitations](https://docs.katalon.com/katalon-studio/release-notes/katalon-studio-release-notes-version-9.x#known-limitations-5).
:::