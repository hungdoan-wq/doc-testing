---
title: Salesforce testing
---
import useBaseUrl from '@docusaurus/useBaseUrl';


# Salesforce testing

<div xmlns="http://www.w3.org/1999/xhtml" className="note note note_note"><span className="note__title">Note:</span> <p className="p">This integration provides assistance for certain user-specific use cases, but it is not officially supported. Compatibility with all user requirements is not guaranteed.</p></div>
<p xmlns="http://www.w3.org/1999/xhtml" className="p">This tutorial illustrates how <span className="ph">Katalon Studio</span> facilitates the automation of Salesforce applications, covering test cases for lead, case, and account management. Additionally, the dashboard management test cases include an example involving an iframe.</p> 

## Use cases for Salesforce testing

<table xmlns="http://www.w3.org/1999/xhtml" className="table anchor_top_offset" id="concept-uf3x9ddj__372aa9f5-a553-46d1-bda3-82d8ef6344f9"><caption /><colgroup><col /><col /></colgroup><thead className="thead"><tr className><th className="entry anchor_top_offset" id="concept-uf3x9ddj__372aa9f5-a553-46d1-bda3-82d8ef6344f9__entry__1">Use Case</th><th className="entry anchor_top_offset" id="concept-uf3x9ddj__372aa9f5-a553-46d1-bda3-82d8ef6344f9__entry__2">Actions</th></tr></thead><tbody className="tbody"><tr className><td className="entry" headers="concept-uf3x9ddj__372aa9f5-a553-46d1-bda3-82d8ef6344f9__entry__1 concept-uf3x9ddj__372aa9f5-a553-46d1-bda3-82d8ef6344f9__entry__2 "><strong className="ph b">Lead management</strong></td><td className="entry" headers="concept-uf3x9ddj__372aa9f5-a553-46d1-bda3-82d8ef6344f9__entry__1 concept-uf3x9ddj__372aa9f5-a553-46d1-bda3-82d8ef6344f9__entry__2 ">Log in - Create a new lead - Change status - Change owner - Search and delete a lead - Close application</td></tr><tr className><td className="entry" headers="concept-uf3x9ddj__372aa9f5-a553-46d1-bda3-82d8ef6344f9__entry__1 concept-uf3x9ddj__372aa9f5-a553-46d1-bda3-82d8ef6344f9__entry__2 "><strong className="ph b">Case management</strong></td><td className="entry" headers="concept-uf3x9ddj__372aa9f5-a553-46d1-bda3-82d8ef6344f9__entry__1 concept-uf3x9ddj__372aa9f5-a553-46d1-bda3-82d8ef6344f9__entry__2 ">Log in - Create a new case - Edit and change status - Search and delete by ID - Close application</td></tr><tr className><td className="entry" headers="concept-uf3x9ddj__372aa9f5-a553-46d1-bda3-82d8ef6344f9__entry__1 concept-uf3x9ddj__372aa9f5-a553-46d1-bda3-82d8ef6344f9__entry__2 "><strong className="ph b">Account management</strong></td><td className="entry" headers="concept-uf3x9ddj__372aa9f5-a553-46d1-bda3-82d8ef6344f9__entry__1 concept-uf3x9ddj__372aa9f5-a553-46d1-bda3-82d8ef6344f9__entry__2 ">Log in - Create an account - Close application</td></tr><tr className><td className="entry" headers="concept-uf3x9ddj__372aa9f5-a553-46d1-bda3-82d8ef6344f9__entry__1 concept-uf3x9ddj__372aa9f5-a553-46d1-bda3-82d8ef6344f9__entry__2 "><strong className="ph b">Dashboard management</strong></td><td className="entry" headers="concept-uf3x9ddj__372aa9f5-a553-46d1-bda3-82d8ef6344f9__entry__1 concept-uf3x9ddj__372aa9f5-a553-46d1-bda3-82d8ef6344f9__entry__2 ">Log in - Create a dashboard - Add components and reports - Create filter - Delete dashboard - Close application</td></tr></tbody></table> 

## Handling MFA and SSO within Salesforce orgs

### Prerequisites
- Access rights to create a Connected App within Salesforce.
- Appropriate permissions and profiles to configure and use the Connected App.

### Steps

1. Create a Salesforce app. 

    1. Make sure you enable the OAuth settings and add the required OAuth scopes as shown in the screenshot below:

        <img src="https://tw-cdn.katalon.com/katalon-studio/integrations/salesforce/Create_Salesforce_app.png" alt="Create a Salesforce app" width="400" />

    2. To use the connected app in Salesforce, make sure you are added either via permission sets or you are assigned to the correct user profile to the connected app.

    3. Use the connected app to retrieve a refresh token which will be used to generate an access token during runtime, login to Salesforce, and perform test automation.

2. Connect to connected app using Katalon Studio.

    1. Open a new or existing project in Katalon Studio.

    2. Create a new web service request of type - REST and name it as `Retrieve Authorization code to access bearer token and refresh token`. You can name the request as per your choice as well. This request will be used to retrieve the Authorization Code from Salesforce for our next steps.

    3. Enter the following below:
        - Base URL: [https://login.salesforce.com/services/oauth2/authorize](https://login.salesforce.com/services/oauth2/authorize).
        - Query Parameters:
            - `client_id`: Consume key from connected app.
            - `redirect_uri`: As defined in the connected app during the setup.
            - `response_type`: code (“code” is the actual value for this API call).

        <img src="https://tw-cdn.katalon.com/katalon-studio/integrations/salesforce/Connect_to_connected_app.png" alt="Connect connected app using Katalon Studio" width="400" />

    4. Run this request using the test request button.

    5. Navigate to the header tab and copy the URL received under `Location`:

        <img src="https://tw-cdn.katalon.com/katalon-studio/integrations/salesforce/Copy_connect_app_URL.png" alt="Copy the connect app URL" width="400" />

    6. Paste the copied URL in the address field of your browser and follow the login instructions.

        <img src="https://tw-cdn.katalon.com/katalon-studio/integrations/salesforce/Connected_Salesforce_app_login.png" alt="Login to Salesforce" width="400" />

    7. Once logged in, the generated callback code is displayed in the address bar. The callback code is the value after the code. For example, the callback code in `https://login.salesforce.com/services/oauth2/callbackcode=aPrxsdssXvusdaaJ4hOFlX4ZHYQMhdjsi9HOTTTw6mQZ%3D%3D` is `aPrxsdssXvusdaaJ4hOFlX4ZHYQMhdjsi9HOTTTw6mQZ%3D%3D`.

        <img src="https://tw-cdn.katalon.com/katalon-studio/integrations/salesforce/Get_callback_code.png" alt="Get callback code" width="400" />

    8. Decode the retrieved code using any online URL Encode/Decoder.

    9. Create a new web service request in Katalon Studio and name it `Retrieve Bearer Token and Refresh Token for the first time using Authorization code`. 

    10. Enter the following below:
        - Base URL: [https://login.salesforce.com/services/oauth2/token](https://login.salesforce.com/services/oauth2/token).
        - HTTP Body: `x-www-form-urlencoded`
            - `grant_type`: `authorization code`
            - `code`: The code you decoded in the previous step.
            - `client_id`: Consumer key from your connected app.
            - `client_secret`: Consumer secret from connected app.
        - `redirect_uri`: As defined in the connected app during the setup.

        <img src="https://tw-cdn.katalon.com/katalon-studio/integrations/salesforce/Create_new_web_service_request.png" alt="Retrieve Bearer Token and Refresh Token for the first time using Authorization code" width="400" />

    11. Run this request and retrieve the refresh token from the response. This refresh token will be used to generate the access token during runtime, which will allow users to log into Salesforce without the need to revalidate credentials via MFA or SSO.

    12. Create a new web service request in Katalon Studio and name it `Retrieve Bearer Token using Refresh Token`. 

    13. Enter the following below:
        - Base URL: [https://login.salesforce.com/services/oauth2/token](https://login.salesforce.com/services/oauth2/token).
        - HTTP Body: `x-www-form-urlencoded`
            - Authorization: Basic
            - `client_id`: Consumer key from connected app.
            - `Client_secret`: Consumer secret from connected app.
            - `Grant_type`: `refresh_token`
            - `refresh_token`: Retrieved from the response of the previous request.

        <img src="https://tw-cdn.katalon.com/katalon-studio/integrations/salesforce/Retrieve_bearer-token.png" alt="Retrieve Bearer Token using Refresh Token" width="400" />

    14. Run this request and retrieve the access token. Start by pasting this address in a new browser: [https://kataloninc-dev-ed.develop.my.salesforce.com/secur/frontdoor.jsp?sid='accessToken'&retURL=](https://kataloninc-dev-ed.develop.my.salesforce.com/secur/frontdoor.jsp?sid='accessToken'&retURL=), and then you will successfully log in to your Salesforce instance by passing MFA and SSO.

3. Use this access token as part of your Katalon Studio test case.

    1. Create a new test case.

    2. Use the web service keyword `Send Request` and select the `Retrieve Bearer Token using Refresh Token` API requests under the **Object** column. Then, double-click on the **Output** column and add an output variable to store the response retrieve during runtime. You can do this by switching to ``Script mode`` in Katalon Studio as well.

    3. Add another test step to parse the response received and retrieve the `Access Token` and store it in a variable.

    4. Create another variable to create the Salesforce login URL (ex. `sfURL`) using this access token and the URL format.

    5. Add the `Open Browser` keyword in your test case and pass the `sfURL` to the keyword.

    6. Save the test case and run it.

    Manual view:

    <img src="https://tw-cdn.katalon.com/katalon-studio/integrations/salesforce/Salesforce_MFA_SSO_test_case_manual_view.png" alt="Salesforce MFA SSO test case manual view" width="400" />

    Script view:

    <img src="https://tw-cdn.katalon.com/katalon-studio/integrations/salesforce/Salesforce_MFA_SSO_test_case_script_view.png" alt="Salesforce MFA SSO test case script view" width="400" />

:::note Notes
- With this method, we can log into Salesforce in a robust manner while adhering to both SSO and MFA. In this method, the `Retrieve Authorization code to
access bearer token and refresh token` and `Retrieve Bearer Token and Refresh Token for the first time using Authorization code` requests need to
be run manually from Katalon Studio and will only need to be ran when the refresh token is revoked.
- Whenever the refresh token is revoked, you need to run the first two requests and update the refresh token in `Retrieve Bearer Token using Refresh Token`.The test case itself doesn’t need to be changed.
:::

## Automate Salesforce test cases

<div xmlns="http://www.w3.org/1999/xhtml" className="section prereq p"><ul className="ul"><li className="li"><p className="p">Katalon Studio installed.</p></li><li className="li"><p className="p">An active Salesforce account.</p></li><li className="li"><p className="p"><a className="xref j-external-link" href="https://github.com/katalon-studio-samples/salesforce-katalon-sample.git" target="_blank">Sample Git repository for this project</a>.</p></li><li className="li">You can refer to video demonstrations of the steps with Katalon Academy:<ul className="ul"><li className="li"><p className="p"><a className="xref j-external-link" href="https://academy.katalon.com/katalon-demo-and-integration/?video=36517" target="_blank">Lead Management in Salesforce</a></p></li><li className="li"><p className="p"><a className="xref j-external-link" href="https://academy.katalon.com/katalon-demo-and-integration/?video=36519" target="_blank">Case Management in Salesforce</a></p></li><li className="li"><p className="p"><a className="xref j-external-link" href="https://academy.katalon.com/katalon-demo-and-integration/?video=36520" target="_blank">Account Management in Salesforce</a></p></li><li className="li"><p className="p"><a className="xref j-external-link" href="https://academy.katalon.com/katalon-demo-and-integration/?video=36518" target="_blank">Dashboard Management in Salesforce</a></p></li></ul></li></ul></div>
<ol xmlns="http://www.w3.org/1999/xhtml" className="ol steps"><li className="li step stepexpand"><span className="ph cmd">Go to <span className="ph uicontrol">Project</span> &gt; <span className="ph uicontrol">Settings</span> &gt; <span className="ph uicontrol">Test Design</span> &gt; <span className="ph uicontrol">Web UI</span> and <a className="xref" href="/katalon-studio/test-objects/web-test-objects/selection-methods-for-web-objects#configure-xpath">change the priority of Xpath Locators</a>.</span><div className="itemgroup info"><img className="image" width={500} src={useBaseUrl("/16578180-c310-11ed-a4d3-0242cfbc79b5/KS_change_priority_of_XPath_Locators.png")} alt="change Xpath Locators priority in Katalon Studio project settings" /></div></li><li className="li step stepexpand"><span className="ph cmd">Add Desired Capability to handle Popup (Show Notification). See <a className="xref" href="/katalon-studio/manage-projects/project-settings/desired-capabilities/manage-desired-capabilities-in-katalon-studio">Manage Desired Capabilities in <span className="ph">Katalon Studio</span></a>.</span></li><li className="li step stepexpand"><span className="ph cmd">Record test script via Katalon Recorder and save test objects and test cases. See <a className="xref" href="/katalon-studio/record-and-spy/webui-record-and-spy-utilities/record-web-utility-in-katalon-studio">Record Web utility in Katalon Studio</a>.</span></li><li className="li step stepexpand"><span className="ph cmd">Update the application URL, username, and password inside the Default profile.<img className="image" width={500} src={useBaseUrl("/c67c529f-67bf-43ee-a113-4e1855af4c42/KS-salesforce-update_URL_username_password_in_Default_profile.png")} alt="Update URL, username, password in Default profile" /> </span></li><li className="li step stepexpand"><span className="ph cmd">Run the test execution. You can refer to <a className="xref" href="/katalon-studio/execute-tests/execute-tests-with-katalon-studio-overview">Execute tests with Katalon Studio overview</a>.</span></li><li className="li step stepexpand"><span className="ph cmd">Verify the test execution result. You can refer to <a className="xref" href="/katalon-platform/analyze/reports/view-test-reports-legacy/view-test-run-results/view-a-test-run-summary">View test runs and execution logs</a>.</span></li></ol> 
<section xmlns="http://www.w3.org/1999/xhtml" className="section tasktroubleshooting">If the test execution fails because of "Element not interactable" exception, you can change the keyword <code className="ph codeph">Click</code> to <code className="ph codeph">Enhanced Click</code>.<img className="image" width={500} src={useBaseUrl("/e816fe2f-1c2b-4efe-8f16-e913b67219c3/KS-salesforce_keyword_enhanced_click.png")} alt="KS enhanced click" /></section> 
