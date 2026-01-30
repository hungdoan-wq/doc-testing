---
title: Authorization in Katalon Studio
---

APIs use authorization to make sure that client requests access data securely. Authorization involves authenticating and confirming that the sender of a request have the permission to access or manipulate the relevant data.

You can add your authorization information the Authorization tab of a Web Service Request.

<img alt="Authorization tab" src="https://docs.katalon.com/b5683067-c205-4ba4-aed1-d03e63713736/ks-970-authorization-type.png" width="700px" />

Starting version 10.4.0, Katalon Studio features API collections for bulk-management of authorization. Instead of having to adjust each API request, you can simply add requests to a collection and adjust once. See [API Collections for bulk managing authorization](/katalon-studio/test-objects/api-test-objects/authorization/api-collection-for-bulk-managing-authorization) for more details.



The following types of authorizations are supported in Katalon Studio:

- [AWS Signature](/katalon-studio/test-objects/api-test-objects/authorization/aws-signature-authentication-in-katalon-studio)
- [Bearer](/katalon-studio/test-objects/api-test-objects/authorization/bearer-authentication-in-katalon-studio)
- [Basic](/katalon-studio/test-objects/api-test-objects/authorization/basic-authentication-in-katalon-studio)
- [Digest](/katalon-studio/test-objects/api-test-objects/authorization/digest-authentication-in-katalon-studio)
- [OAuth 2.0](/katalon-studio/test-objects/api-test-objects/authorization/authorization-oauth-2.0-in-katalon-studio)
- [NTLM](/katalon-studio/test-objects/api-test-objects/authorization/ntlm-authentication-in-katalon-studio)

To use current authentication information, make sure that you click on Update to HTTP Header. Katalon Studio appends these information to the HTTP Header of the web service request.