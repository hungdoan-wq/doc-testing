---
title: API Collections for bulk managing authorization
---

This document explains how to use API collection to manage authorization in bulks and quickly provide credentials to your test cases.

Before, you had to set up **authentication** (like API keys, Basic Auth, or OAuth) **for each API request** one by one. That meant lots of repetitive work — and if a password or token changed, you had to fix every single request manually.

Now, you can set authentication once at the **API Collection** level and all the objects inside this collection will inherit the authentication by default.

In Katalon Studio, **API Collection** is a folder that contains authentication settings, then passes down these settings to all API requests inside it. All you do is set up this folder, add your requests, and take care of this folder instead of individual requests.

The **API collection**'s folder icon has the text "API":

<img src="https://tw-cdn.katalon.com/katalon-studio/test-objects/api-collection/api-collection-icon-demo.png" alt="api collection icon demo.png" width="250px" />

## Steps to configure an API collection and add requests

1. Create an **API Collection** from the **Object Repository**. Check out our interactive guide:

<iframe
  src="https://demo.arcade.software/Nk6fl3krxH8VsoJQ6P87?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
  title="Create an API collection"
  frameborder="0"
  loading="lazy"
  webkitallowfullscreen
  mozallowfullscreen
  allowfullscreen="true"
  allow="clipboard-write"
  style={{ width: "100%", height: "500px", border: "none" }}>
</iframe>

Or, you can import an **OpenAPI Specification file** (a `.json` or `.yaml` file that defines your APIs). Unlike before, **Katalon Studio** now converts the file into an **API collection**, containing your configured requests:

<img src="https://tw-cdn.katalon.com/katalon-studio/test-objects/api-collection/openapi-convert-to-api-folder.png" alt="openapi convert to api folder.png" width="250px" />

2. Once you create the API collection, select an **Authentication** method from the list. You’ll see several options for setting up credentials that will apply to all requests in the collection.

<img src="https://tw-cdn.katalon.com/katalon-studio/test-objects/api-collection/configure-authentication-for-api-collection.png" alt="configure authentication for api collection.png" width="500px" />

Here’s a list of authentication methods you can use and what they do:

| **Type**              | **What you need to fill in**                                              | **What it does**                                                               |
| --------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **No authentication** | None                                                                      | Sends requests without any authentication headers.                             |
| **API key**           | Key name, value, and where to send it (header or query)                   | Adds your API key automatically to every request.                              |
| **Bearer token**      | Token value                                                               | Adds an `Authorization: Bearer <token>` header to each request.                |
| **Basic Auth**        | Username and password                                                     | Adds an `Authorization: Basic <encoded credentials>` header.                   |
| **OAuth 1.0**         | Consumer key, consumer secret, and signature method (or import from file) | Uses OAuth 1.0 signing to verify requests.                                     |
| **OAuth 2.0**         | Client ID, client secret, token URL                                       | Handles the OAuth 2.0 flow to get and apply access tokens automatically.       |
| **AWS Signature**     | Access key, secret key, and target (where to add auth data)               | Signs requests using AWS Signature Version 4 for authentication with AWS APIs. |
| **NTLM**              | Standard NTLM fields (username, password, domain)                         | Uses NTLM, a Microsoft authentication method for Windows environments.         |
| **Digest**            | Standard Digest fields (username, password, realm, etc.)                  | Uses HTTP Digest authentication for extra security.                            |

Once you create the API collection, you can add new requests/import requests to it. Check out our interactive guide:

<iframe
  src="https://demo.arcade.software/ZnPKAMUkv0ktR4T016WR?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
  title="Add an OpenAPI as an API collection"
  frameborder="0"
  loading="lazy"
  webkitallowfullscreen
  mozallowfullscreen
  allowfullscreen="true"
  allow="clipboard-write"
  style={{ width: "100%", height: "500px", border: "none" }}>
</iframe>

All requests created inside this API collection inherits its authentication method from the API collection. Each request will display authentication as **Inherit from Immediate Parent**:

<img src="https://tw-cdn.katalon.com/katalon-studio/test-objects/api-collection/child-request-with-authentication-types.png" alt="child request with authentication types.png" width="500px" />

## How to override API collection’s authentication

You can configure a request's authentication to anything other than **Inherit from Immediate Parent**. **Katalon Studio** will use this instead of the parent's, treating it internally as “**Individual Request**”.

If both aren't available, **Katalon Studio** falls back to **no authentication**.

If your requests are nested inside multiple API collections, they will inherit authentication from the closest parent.

To double-check if the authentication works as you'd expect, you can send a test request like so:

<img src="https://tw-cdn.katalon.com/katalon-studio/test-objects/api-collection/send-test-request-button-api.png" alt="send test request button api.png" width="500px" />

## API collection handling notes

Keep these in mind when you make changes to an API collection.

### Update the API collection

If you update authentication for your API collection, all its children requests labeled **Inherit from Immediate Parent** will inherit your updated settings. Requests that don't have inherited authentication will remain unchanged.

### Migrate requests to another API collection

When you move an **Inherit from Immediate Parent** request to another API folder, its authentication will inherit from the new parent's.

### Update requests prior to 10.4.0

If you have requests created prior to 10.4.0, their authentication will fallback to **Individual Request**. Remember to re-configure them if you need them inheriting a new parent API collection.

### Delete an API collection

If you delete the API collection, its children will be deleted as well, and the requests will not be restored. Remember to migrate requests elsewhere before deleting their parent folder.