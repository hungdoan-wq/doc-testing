---
title: Generate Test Cases & Test Steps with AI
---

Learn how to automatically generate and maintain manual test cases and test steps from your requirements using AI assistance.

:::tip requirements

- Ensure that [AI features are enabled in your System Configuration](/katalon-platform/administer/administration-and-licensing-alternate/manage-systems/configurations/configure-ai-services#enable-or-disable-ai-features).
- Ensure that you have configured an ALM integration, such as [Jira](/katalon-platform/integrations/alm-and-test-management/jira-integration) or [Azure DevOps (ADO)](/katalon-platform/integrations/alm-and-test-management/azure-devops-integration).
:::

The AI-assisted test case generator streamlines the test design process by automatically transforming your requirements into comprehensive test cases and test steps. This eliminates manual analysis and planning, significantly reducing test case creation time.

By automating repetitive tasks, your team can focus on high-value activities such as exploratory testing and defect analysis. This enables earlier test planning and helps shift quality assurance left in the development lifecycle.

<iframe
  src="https://demo.arcade.software/dDXVqCtt9nIQnmRktQZY?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
  title="Generate and Save Test Cases with AI in Katalon TestOps"
  frameborder="0"
  loading="lazy"
  webkitallowfullscreen
  mozallowfullscreen
  allowfullscreen="true"
  allow="clipboard-write"
  style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

## Generate Test Cases with AI

1. Go to **Plans**.
2. Click any iteration. The **Requirement List** appears.

<img src="https://tw-cdn.katalon.com/katalon-testops/Execution/OrangeHRM%20Plans.png" alt="Plans page in Katalon TestOps" width="500" />

3. Click the name of any requirement to open its **Requirement Detail Page**.
        
    **Important:** When fetching requirements from ALM systems such as Jira or Azure DevOps, only the summary (ticket name) and description fields are retrieved. If a requirement includes attachments, only image files are supported, and the AI can analyze and interpret these images. Other file formats are not supported at this time.
    
    <img alt="Requirements with image" src="https://tw-cdn.katalon.com/katalon-platform/plans/requirements-img.png" /> <br/>

:::tip
You can click the **outbound arrow [↗]** next to **+ Create a test case** to navigate directly to the corresponding Jira or ADO work item, based on the integration configured by your Project Administrator.
:::

4. Click the **Generate Test Cases** button in the upper-right corner of the page.  
    <img alt="Generate test cases button in Katalon TestOps" src="https://tw-cdn.katalon.com/katalon-testops/Execution/OrangeHRM%20Generate%20Test%20Cases%20Button.png" width="600"/>

5. *(Optional)* If TestOps determines that your requirements need clarification, the **Additional Context Refinement** section appears. Provide additional context to make the generated test cases more accurate. You can add text-based prompts to focus on specific aspects of the test cases. Click **Start Generating** after providing the additional context.  
    <img alt="Additional context refinement in Katalon TestOps" src="https://tw-cdn.katalon.com/katalon-testops/Execution/OrangeHRM%20Additional%20Context%20Refinement.png" width="600"/>

6. The system displays a list of AI-generated test cases highlighted in purple. These test cases are created based on your specified requirements.  
    **Warning:** Always review the generated test case content before approving it. AI-generated results may contain errors.
    <img alt="AI-Generated TC" src="https://tw-cdn.katalon.com/katalon-platform/ai-generated-test-cases/generated-ai-tc.png" width="600" /> <br/>

## Generate Test Steps with AI

After generating test cases using AI, you can also generate test steps for each test case. Test steps are generated based on the following:
- Test case name  
- Test case description  
- Test case preconditions  
- Linked requirements  

7. To review individual test cases and generate test steps, click a test case name. A detail drawer opens on the right, displaying the test case content and steps. Ensure they align with your requirement’s context. You can:
    - Click **Generate Steps** to create new test steps or **Regenerate Steps** to refresh existing ones.  
    - Click any test step to edit it manually.  
    - Save it to a location.  
    - Click **Save** to approve or **Discard** to remove the test case.

    <iframe
    src="https://demo.arcade.software/spR5qzOEfnd7e0P3Ay80?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
    title="Edit test step"
    frameborder="0"
    loading="lazy"
    webkitallowfullscreen
    mozallowfullscreen
    allowfullscreen="true"
    allow="clipboard-write"
    style={{ width: "100%", height: "400px", border: "none" }}>
    </iframe>

8. After reviewing all generated test cases and test steps, save them to a location.  
   Click **Save All** to approve them or **Discard All** to delete them.  
    <img alt="Save Generated Test Cases" src="https://tw-cdn.katalon.com/katalon-platform/ai-generated-test-cases/save-generated-tc.png" width="600" /> <br/>
