---
title: Activate Licenses
---

This document guides you through the activation of your **Katalon Studio Enterprise** (**KSE**) and **Katalon Runtime Engine** (**KRE**) licenses.

:::note

- To learn more about the details of Katalon licenses, see [Types of Licenses](/katalon-platform/administer/administration-and-licensing-alternate/manage-accounts/license-management/about-testops-license-types).
    
- If you are behind a proxy server, before activating Katalon licenses, you need to configure the **Authentication proxy** settings. To learn more about how to configure a proxy, see [Configure proxy authentication](/katalon-studio/katalon-studio-enterprise-and-katalon-runtime-engine-license/configure-proxy-authentication).

:::

## Online License Activation

### Requirements

- The owner or admin of your organization have assigned a **KSE license** to your user account before doing this step; or you are a Trial user who can evaluate **KSE** for 30 days.
    
- You have downloaded and installed **Katalon Studio Enterprise**. For detailed instruction, see [Install Katalon Studio](/katalon-studio/get-started/install-katalon-studio).
    
- If you have previously logged in to a Katalon account in **Katalon Studio**, click on the **Profile** button and select **Log out** to prompt the dialog.  

<img width="400px" src="/4b532ea0-f396-11ed-878a-0242c7a41fd4/ks-profile-log-out-task-3426.png" alt="The profile button and the log out option in Katalon Studio." />

### Activate your Katalon Studio Enterprise (KSE) license

1. Open the application. The **Welcome to Katalon Studio Enterprise** dialog automatically pops up.

    <img width="300px" src="/ee571f79-1131-4f86-b0c0-1f4cf5870d48/ks-970-welcome-dialog.png" alt="The Katalon Studio activation dialog box." />
    
2. Click **Log in from Browser**. Log in by using your preferred credentials.  
    
    <img width="300px" src="/6144575d-6b03-4ee6-8b02-43f88e8e9959/ks-950-login-options.png" alt="log in prompt with log in options" />

Upon successful login, you are then redirected to **Katalon Studio Enterprise**. If you are signing in again using saved credentials, Katalon Studio restores the last opened project and files.

#### Advanced Settings

Look into advanced settings if:

- You are logging in via a **License Server**.
- You need to [Configure a proxy connection](/katalon-studio/katalon-studio-enterprise-and-katalon-runtime-engine-license/configure-proxy-authentication).
    

Steps to open advanced settings:

1. Open the application. The **Welcome to Katalon Studio Enterprise** dialog automatically pops up.
    
2. Click **Advanced settings** link located below the login options.
    
3. The **Advanced Settings** dialog pops up with options:
    
    - **License server address**: Enter the **Private Instance URL**  used for license authentication.
        
    - **Launch browser login site in**:
        
        - **In-app browser**: Opens a built-in browser within **Katalon Studio**.
            
        - **System default browser**: Opens the login page in your default web browser.
            
    - Click **Save** to apply your login settings.

For **On-Premises users on versions before 3.0.0**: If you select login via **License server**, the **Log in with License server** dialog pops up. The **Private Instance URL** you have saved in **Advanced settings** in Step 3 is prepopulated. Enter your email address and password to continue.  
<img src="https://tw-cdn.katalon.com/katalon-studio/get-started/activate-licenses/Log_in_from_browser_with_license_server_address.png" alt="Katalon Studio Login with License server" width="400" />


#### Enable Remember Me in Login

Enabling **Remember me** means you don't have to re-enter your username and password each time you start **Katalon Studio** or when you’re signed out due to session expiration or inactivity.  

<img src= "https://tw-cdn.katalon.com/katalon-studio/get-started/activate-licenses/Enable_Remember_Me_login.png" alt="Login and enable Remember Me" width="400px" />

**Remember me** applies only for **License Server** and **Log in from Browser** log in options.
    
If you are logged out due to `Session Expired`, `License Expired`, or `Idle Timeout Exceeded`, **Katalon Studio** lets you re-login quickly with our notification dialogue. You can:
    
    - **Login with another account**: it navigates you to the login screen.
        
    - **Relogin**: re-login using the same account. It's only available if you selected **Remember Me** in your initial log in. 
        
<img src= "https://tw-cdn.katalon.com/katalon-studio/get-started/activate-licenses/Logout_inactivity.png" alt="Logout due to inactivity" width="300px" />

### Activate your Katalon Runtime Engine (KRE) license

**Your KRE license is activated automatically** after the owner or administrator of your org has granted you a **KRE license**.

To use **KRE**, you need to authenticate your account with your Katalon API key. See [API Keys](/katalon-platform/administer/profile/katalon-api-key-in-katalon-testops) to learn how to get your API key.

:::note  
To view details about your current license, see: [View License Details](/katalon-studio/katalon-studio-enterprise-and-katalon-runtime-engine-license/view-license-details).  
:::

## Offline License Activation

### Requirements

First, you need to get your machine's ID. See [How Katalon generates a machine ID](/katalon-studio/katalon-studio-enterprise-and-katalon-runtime-engine-license/how-katalon-generates-a-machine-id).

Second, a `KSE_<machine_ID>.lic` or `KRE_<machine_ID>.lic` file. To get this file:
- Contact your organization's owner or administrator
- Provide your machine ID
- Ask them to grant you an offline license.

For org's owners and admins, see [Grant an offline license to users](/katalon-platform/administer/administration-tasks/manage-licenses/grant-a-katalon-license#grant-an-offline-license-to-users) for more details.

Once you get the file, put it in the right folder:

- Windows: `C:\\Users\\<user_name>\\.katalon\\license`
- Linux: `/home/<user_name>/.katalon/license`
- macOS: `/Users/<user_name>/.katalon/license`

Note that `.katalon` is a hidden folder.

### Activate KSE offline license

Once you've put the **KSE license** in the folder:

1. In the login dialog, click **Offline license**.

<img width="300px" src="/ee571f79-1131-4f86-b0c0-1f4cf5870d48/ks-970-welcome-dialog.png" alt="The Katalon Studio activation dialog box." />
    
2. In the **License file** section, click **Choose file** to select your `.lic` file.

<img className="image" width="500px" src="https://tw-cdn.katalon.com/katalon-studio/get-started/activate-licenses/offline-license-choose-file.png" alt="The Katalon Studio activation dialog." />
    
3. Click **Activate**.

<img className="image" width="500px" src="https://tw-cdn.katalon.com/katalon-studio/get-started/activate-licenses/offline-license-activate-license-button.png" alt="The Katalon Studio activation dialog with highlight activate button." />

### Activate KRE offline license

Once you've put the **KRE license** in the folder, your **KRE license** is activated automatically.

Every time you start running a test with **KRE**, **KRE** automatically verifies that your license file is available and valid:

<img className="image" width="500px" src="/07331b10-df9e-11ed-b480-0242cfbc79b5/task_9082_kre_offline.png" alt="Activating Katalon Runtime Engine offline." />

To execute multiple sessions in parallel, put multiple license files in the license folder.

## Private Instance Activation

### Requirements

- You have downloaded and installed **Katalon Studio Enterprise**.
    
- A **Private Instance** URL. To learn more about **Private Instance**, contact our sales team via `business@katalon.com`.

### Activate a KSE license with Private Instance

1. Open the application. The **Welcome to Katalon Studio Enterprise** dialog automatically pops up.  
    <img width="400px" src="/669e2490-e282-11ee-b3a4-0242c7a41fd4/ks-970-login-dialog.png" alt="The Katalon Studio activation dialog box." />  
    Click **Log in from License server**.
    
2. Select your login option.
    
    - Enter **Private Instance URL** and credentials.
        
    - Or select **Log in from a browser** after setting On-Premises server URL in **Advanced Settings**.
        

You have successfully logged in using your **Private Instance** and activated your **KSE license**.

### Activate a KRE license with **Private Instance**

- Pass the **Private Instance URL** used for authentication to the `-serverUrl` parameter.

Example:

`./katalonc ... -serverURL="https://admin-tenant1.katalon-cloudops.com/"`

## Additional Resources

- For a better experience with **Katalon Studio**, you can also install our plugins. See [Using Plugins with Katalon Studio Enterprise License](/katalon-platform/plugins-and-add-ons/katalon-store/katalon-studio-plugins/using-katalon-store-plugins).
- If you have any activation problems, see [Troubleshoot Activation Problems](/katalon-platform/troubleshooting/troubleshooting-common-administrative-issues/account-activation-problems).
- For further instructions on working with **KRE**, refer to [Command Syntax](/katalon-studio/execute-tests/katalon-runtime-engine/get-started-with-katalon-runtime-engine).
