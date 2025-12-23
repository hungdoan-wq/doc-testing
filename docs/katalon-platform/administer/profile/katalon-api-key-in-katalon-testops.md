---
title: Katalon API Key in Katalon TestOps
---

import { TestOpsG2_TabNameValue, TestOpsG2_TabNameLabel, TestOpsG3_TabNameValue, TestOpsG3_TabNameLabel } from "../../../../reusable-component";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can generate and manage API Keys in **Katalon TestOps** for integration and automation purposes.

## When to use a Katalon API Key

You need an API Key when you want to:

- **Integrate Katalon Studio with TestOps in console mode.**  
  See [Katalon Studio Integration](/katalon-studio/test-reports/upload-test-results-from-katalon-studio-to-katalon-testops-manually).

- **Integrate TestOps with other platforms** such as [Jira](/katalon-platform/integrations/jira-integration/enable-testops---jira-integration-for-test-management) or [Jenkins](/katalon-platform/integrations/cicd-integrations/jenkins-integration/use-katalon-plugins-for-jenkins-integration/integrate-jenkins-with-testops).

- **Set up test environments**, for example:
  - [CircleCI](/katalon-platform/execute/test-execution-with-testops/set-up-circleci-test-environments-for-testops)
  - [AWS EKS](/katalon-platform/execute/test-execution-with-testops/set-up-kubernetes-test-environments-for-testops)
  - [Local test environments with an agent](/katalon-platform/execute/test-execution-with-testops/local-test-environments/create-a-local-test-environment-with-an-agent)

:::note
In the Katalon Studio Command-Line Generator, both `-apiKey=<Your_API_Key>` and `-apikey=<Your_API_Key>` are accepted options.
:::
<Tabs>
  <TabItem value={TestOpsG2_TabNameValue} label={TestOpsG2_TabNameLabel}>

#### Generate a Katalon API Key

1. Sign in to [Katalon TestOps](https://testops.katalon.io/login).  
2. Click your **Avatar** in the top-right corner.  
3. Navigate to **User Settings > Katalon API Key** or open [this link](https://testops.katalon.io/user/apikey) directly.  

   <br/>
   <img src="https://tw-cdn.katalon.com/katalon-testops/my-profile/API Key Step 3.png" alt="Katalon API Key page" width="1080"/>

4. Click **Create API Key** in the top-right corner.  
   A **Create API Key** dialog box appears.  
5. Enter a name for your key, select an expiration period, and click **Create**.  

   <br/>
   <img src="https://tw-cdn.katalon.com/katalon-testops/my-profile/API Key Step 5.png" alt="Create API Key dialog" width="500"/>

---

#### Use a Katalon API Key

1. Go to your **Katalon API Key** page to view your list of available keys.  
2. Click the **Copy** icon next to the API Key you want to use.  

   <br/>
   <img src="https://tw-cdn.katalon.com/katalon-testops/my-profile/Use API Key Step 2.png" alt="Copy an API Key" width="1080"/>

3. Paste the copied API Key into your desired integration or platform.

---

#### Remove a Katalon API Key

1. Open your **Katalon API Key** page.  
2. Click the **Trash bin** icon next to the API Key you wish to delete.  

   <br/>
   <img src="https://tw-cdn.katalon.com/katalon-testops/my-profile/Remove API Key Step 2.png" alt="Remove an API Key" width="1080"/>

3. Click **Delete** in the confirmation dialog.

  </TabItem>

  <TabItem value={TestOpsG3_TabNameValue} label={TestOpsG3_TabNameLabel} default>

This section describes how to create and remove a **Katalon API Key** in **Katalon TestOps**.

---

## Create a Katalon API Key
<iframe
  src="https://demo.arcade.software/OUp696XZ5Bw0gXruTdX2?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
  title="Generate a New API Key in Katalon"
  frameborder="0"
  loading="lazy"
  webkitallowfullscreen
  mozallowfullscreen
  allowfullscreen="true"
  allow="clipboard-write"
  style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

1. Log in to **Katalon TestOps**.  
2. Click your **Profile** in the top-right corner and select **User Settings**.  
   The **Personal Integration** tab opens by default.  
3. Select the **Katalon API Key** tab.  

4. Click **Create API Key** in the top-right corner, then fill in the following fields:
   - **Key name**: A label for your API Key.  
   - **Expiration**: Choose an expiration period from the dropdown.  
   - **Description** (optional): Add details for easier management.  
5. Click **Create** to finalize.  
>  Click the **Delete** icon (trash bin) beside the key you want to remove.  

  </TabItem>
</Tabs>
