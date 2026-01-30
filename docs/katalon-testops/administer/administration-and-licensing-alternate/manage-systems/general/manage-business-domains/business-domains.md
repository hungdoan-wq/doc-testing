---
title: Business Domains
---
import useBaseUrl from '@docusaurus/useBaseUrl';

This document guides you through setting up and managing Business Domains in Katalon TestOps.

:::tip requirement
You must have the **Account Admin** or **System Admin** role to perform these actions.
:::

## Overview

Business Domains allow you to claim ownership of your organization's email domains. Once verified, you can monitor and manage all users who sign up or are invited using email addresses from your verified domains.

**Key benefits:**
- **Domain Ownership Verification** – Prove your organization controls specific email domains through DNS validation
- **User Visibility** – Track all users with email addresses from your verified domains
- **Centralized Management** – Oversee domain access and user accounts from a single dashboard
- **Compliance & Security** – Ensure only authorized domains are used within your organization

## View Business Domains

View all domains that have been verified for your organization.

1. Navigate to **Admin Settings > System > General**
2. Select the **Business Domains** tab

The Business Domains list displays:
- **ID** – Unique identifier for the domain
- **Business Domain** – The verified domain name (e.g., yourcompany.com)
- **Method** – Verification method (DNS)
- **Status** – Current verification status (`VERIFIED`, `UNVERIFIED`, `VERIFIED_EXPIRED_SOON`)
- **Users** – Number of users with this domain added to your account

<img alt="A list of business domains in Katalon TestOps" src="https://tw-cdn.katalon.com/katalon-platform/admin/business-domain/business-domain.png" />

## Verify a Business Domain

Verifying a domain proves your organization owns it by adding a DNS TXT record that Katalon can validate.

1. Select **Verify Domain**
2. Copy the provided TXT record and add it to your domain's DNS settings through your DNS provider (e.g., GoDaddy, Cloudflare, Route 53)
   
   <img alt="The Verify Domain dialog box" src="https://docs.katalon.com/e3dc92a5-f2a7-4b5a-ac8b-8643b9389578/TO3GA2_Verify_Domain_Dialog_Box.png" width="600" />

3. Select **Next**
4. Enter your domain name (e.g., yourcompany.com)
5. Select **Verify**

   <img alt="The Verify Domain dialog box where you enter the domain" src="https://docs.katalon.com/69a01c99-c466-448c-bad3-f300bfedd79f/TO3GA2_Verify_Domain_Step_2.png" width="600" /> 

#### Result

Upon successful verification:
- A confirmation notification appears
- The domain status updates to "Verified"
- You can now see all users with email addresses from this domain

**Important:** Do not delete the DNS TXT record or HTTPS file from your server. Katalon validates these records periodically to maintain domain verification.

## Re-verify a Business Domain

If your domain verification expires or fails periodic validation, you can re-verify it.

1. Hover over the domain row
2. Select the **Re-verify** button
3. Follow the same verification steps as initial domain verification

## Disown a Business Domain

Disowning a domain removes your organization's claim of ownership. This means:
- The domain will no longer be associated with your account
- You will lose visibility into users with email addresses from this domain
- The domain becomes available for verification by other organizations

1. Hover over the domain row and select the **Disown** icon
2. In the **Confirm Disown Domain** dialog, select **Disown**
3. Confirm the success notification

<img alt="Disown Business domain" src="https://tw-cdn.katalon.com/katalon-platform/admin/business-domain/delete-business-domain.png" width="600" />

**Note:** Disowning a domain does not remove or deactivate existing users with email addresses from that domain. It only removes your organization's claim to monitor and manage that domain.