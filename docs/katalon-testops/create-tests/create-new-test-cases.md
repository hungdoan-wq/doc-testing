---
title: Create or manage test cases
---
Test cases are the foundation of your testing strategy in Katalon TestOps. There are several ways to get your test cases into TestOps, depending on your workflow:

- **Manual creation**: Build test cases directly in the TestOps interface with full control over test steps, metadata, and organization.
- **CSV import**: Import existing test cases from a CSV file to quickly migrate test cases maintained outside TestOps.
- **ZIP upload**: Import test cases, test suites, and test suite collections by uploading a Katalon Studio project as a ZIP file to a Local repository.
- **Repository integration**: Sync test cases automatically from version control systems like GitHub, GitLab, and other supported repositories through Git integration.

Learn how to create test cases and manage them using any of these methods.

## Create test case manually

Use this workflow when you want to create a test case directly in TestOps and start organizing test steps, ownership, and metadata.

<video width="700" controls>
<source src="https://tw-cdn.katalon.com/katalon-platform/create-tests/create-test-case-nov19.mov" type="video/mp4" />
</video>
1. Navigate to your **specific project's UI > Tests > Test Cases**.
2. Click on the **+ Create** button. Select **Test Case**.

<img src="https://tw-cdn.katalon.com/katalon-platform/create-tests/create-test-case1.png" alt="Create test case" width="600" />

3. Fill out the following information:

:::tip You want more custom fields?
- Account Admins can configure project-level custom fields in Admin Settings, and those fields become available after the test case is created—use the table below to fill out the built-in fields first. 
- Learn more on how to set up [Custom Field here](/katalon-platform/administer/administration-and-licensing-alternate/manage-systems/configurations/customizable-fields).
:::

| Field               | Requirement | Description |
|---------------------|-------------|-------------|
| **Name**            | Required    | Input the label for your test case. |
| **Automation Status** | Required  | Select the current stage of the test case in the automation lifecycle. |
| **Priority**        | Required    | Set the priority level (e.g., High, Medium, Low). |
| **Assignee**        | Required    | Select the person responsible for the test case. |
| **Feature areas**   | Optional    | Parts of the application this test covers. |
| **Test types**      | Optional    | Kind of testing (e.g., Functional, Regression). |
| **Tags**            | Optional    | Project-level labels (up to 50 characters, no special symbols) used to categorize test cases for filtering and analytics. Whatever you add here automatically syncs to linked Katalon Studio projects, so the same tags appear in both tools. |
| **Description**     | Optional    | Input details about your test case. |
| **Precondition**    | Optional    | List the prerequisites for your test case. |
| **Location**        | Required    | Select where you want to save your test case. |


4. Click **Create**.

- Alternatively, click on **"Save & Create Another"** to immediately input information for an additional test case without navigating away from the current screen.


### Manage test cases

After a test case is created (or imported), you can update it, duplicate it, or move it to a different location in your repository.

To manage an individual test case:

1. Click on its name to open the **Test Case Detail** page.
2. Use the action buttons in the upper right:
    1. Move – Move the test case to a different location.
    2. Duplicate – Create a copy in the same location.
    3. Delete – Remove the test case from your repository (its result history is retained).

<img src="https://tw-cdn.katalon.com/katalon-testops/Tests/Test%20Cases/Test%20Case%20Detail%20Page%20Manage%20Annotated.png" alt="Manage test cases" />

### Manage test steps

Test steps describe what to do and what to expect. Use them to keep manual test cases readable and to standardize execution instructions.

Within a test case, you can define and manage individual test steps using the following fields:

- **Description**: Specify the action to perform.
- **Expected Results**: Define the criteria for success based on the action's outcome.
- **Test Data**: Provide any data needed for the step.

To add or edit test steps:

1. Click **+ New Step** to create a test step and fill in the required details.
2. To modify an existing step, click the step number and choose an option from the pop-up menu to:
    - **Duplicate** the test step
    - **Insert above**
    - **Insert below**
    - **Delete** the test step
3. All changes are saved automatically.

    <video width="800" controls>
    <source src="https://tw-cdn.katalon.com/katalon-platform/create-tests/edit-test-steps.mov" type="video/mp4" />
    </video>

## Import test cases

If you already maintain test cases outside TestOps, you can bring them in by importing a CSV file.

:::info Things to Know Before Importing Test Cases:
- **Names and paths must start with:**
    Lowercase letters (a–z), numbers (1–9), or an underscore (_)
- **Allowed characters within names and paths:**
    Parentheses (), commas ,, periods ., hyphens -, and underscores _
- **Please avoid the following:**
    - Using .. (double periods) anywhere in the name or path
    - Ending a test case name with a period (.)
- We also recommend splitting your import file into **smaller batches** (around 500 test cases per file).
:::

You can import test cases from a CSV file into Katalon TestOps. During import, all CSV values are automatically mapped to their corresponding TestOps fields, including any **requirements linkages** from your configured ALM integrations (e.g., Jira or Azure DevOps).

1. Navigate to your **specific project's UI > Tests > Test Cases**.
2. Click the **+ Create** button, then choose **Import Test Cases**.

<img src="https://tw-cdn.katalon.com/katalon-platform/create-tests/create-test-case1.png" alt="Create test case" width="500"/>

3. Upload your CSV file from your device and click **Next**.
4. TestOps will automatically map each field in your CSV file to a corresponding TestOps field. You can adjust these mappings if needed.
5. Review the mapped fields in the preview. When you're ready, click **Import**.

    <video width="800" controls>
    <source src="https://tw-cdn.katalon.com/katalon-platform/create-tests/import-test.mov" type="video/mp4" />
    </video>
## Upload test cases through ZIP upload

If you don’t use any Git-based integration to sync your repository, you can manually upload either a Katalon Studio project or a ZIP file containing `.tc` files to import test cases into a **Local repository (ZIP Upload)** in TestOps, including the original **folder structure** inside the ZIP file.

<iframe
src="https://demo.arcade.software/h1LZHCxyHspsSZOU0qOp?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Upload Repository in Katalon TO"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

1. Click the **+ Create** button and select **Upload Repository**.
2. On the **Script Repositories** page:
   - Enter a **Name** for the repository (required).
   - (Optional) Add a **Description** to help identify the repository.
3. In the **Upload** section, click **Choose File** and select a ZIP file that contains:
   - A full Katalon Studio project, **or**
   - One or more test case files (`.tc`).
4. Click **Import** to upload and create the repository.

Once the upload is completed, TestOps extracts the ZIP file and imports all supported test cases while **preserving the original directory and folder hierarchy**.

## Sync tests through repository integration

If you use Git-based version control, you can connect your repository to TestOps to automatically sync test cases, test suites, and test suite collections. Once the integration is set up, your tests will be synced automatically.

To set up repository integration, see:

- [GitHub integration](/katalon-platform/integrations/repository/github-integration)
- [GitLab integration](/katalon-platform/integrations/repository/gitlab-integration)
- [Bitbucket integration](/katalon-platform/integrations/repository/bitbucket-integration)
- [Azure Repos integration](/katalon-platform/integrations/repository/azure-repos-integration)

After successfully configuring your Git integration, TestOps will automatically sync your test artifacts from the connected repository.

## Linkages

Once your test cases are in TestOps, use **Linkages** to connect them to requirements and other artifacts for end-to-end traceability.

In TestOps, **Linkages** let you associate a test case with requirements from your ALM tools (like Jira or Azure DevOps), or with other test cases. This ensures clear traceability between requirements and what’s being tested—visible directly within each test case.

Currently, you can link a test case to:

- **Requirements**
- Other **Test Cases**
- **Defects**
- **ADO Test Cases**

<img src="https://tw-cdn.katalon.com/katalon-platform/create-tests/linkages1.png" alt="Linkages UI"/>

### Import linkages

If you’re importing test cases from CSV, you can also import their requirement linkages in the same file.

:::info
To link **Requirements**, **Defects**, **ADO Test Cases**, make sure you’ve configured an ALM integration, such as, [Jira](/katalon-platform/integrations/alm-and-test-management/jira-integration) or [Azure DevOps (ADO)](/katalon-platform/integrations/alm-and-test-management/azure-devops-integration).
:::
When importing test cases from a CSV file, you can include a column that links each test case to a requirement in your ALM tool. If a cell is left blank, that test case won’t be linked to any requirement.

For example, if your ALM has an issue called DEF-60, and your imported CSV file includes a column that lists DEF-60 for a test case:

<img src="https://tw-cdn.katalon.com/katalon-platform/create-tests/import-highlight1.png" alt="Example Excel sheet" width="700" />

**Result**

TestOps will automatically link the imported test case to the corresponding issue.

In this case, the Verify Resources Page test case will be automatically linked to the issue **DEF-60**.

    <video width="800" controls>
    <source src="https://tw-cdn.katalon.com/katalon-platform/create-tests/view-linked-issue.mov" type="video/mp4" />
    </video>
### Manage linkages

Use this option when you need to add, remove, or correct linkages after creating or importing test cases.

After importing or creating test cases, you can update their requirement linkages at any time to reflect changes or correct mappings.

1. Open the test case you want to update.
2. In the test case detail view, go to the **Linkages** panel.
3. You can do the following:
    - To add a linkage, click **Click to link...**, then search for and select the requirement(s) from your connected ALM tool.
    - To remove a linkage, click the Unlink icon next to the linked issue. Changes are applied automatically.
4. Click **Link** to apply your changes.

    <video width="800" controls>
    <source src="https://tw-cdn.katalon.com/katalon-platform/create-tests/edit-linkages1.mov" type="video/mp4" />
    </video>
