---
title: Create or manage test suites
---

A **Test Suite** is a collection of test cases executed and reported together. Test suites help you organize test coverage, manage execution scope, and analyze results by feature, release, or testing purpose.

Use test suites to:

- Group related test cases (for example, Smoke, Regression, Security)
- Execute a defined scope of tests for a release or milestone
- Track execution results and trends at the suite level

## Create test suite manually
This approach allows you to:

- Reuse existing test cases without duplication
- Create purpose-driven suites such as Smoke or Release Regression
- Maintain a single source of truth for test cases

<iframe
src="https://demo.arcade.software/kB3ayiNb9S6nF9UkIeZI?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Create a New Test Suite in Katalon TestOps"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

To create a test suite from existing test cases:

1. Go to **Project UI > Tests > Test Suites**.
2. Click **+ Create** and select **Test Suites**.
3. Enter a name for the test suite.
4. Below the name, select the test type: **Automated** or **Manual**.  
   > You cannot mix automated and manual test cases in the same test suite, as this may cause execution failures.
5. (Optional) Use search and filters to quickly locate test cases by name, repository, type, status, or author.
6. For each test case you want to include, click the **Add (+)** button in the rightmost column.  
   Ensure the test case matches the selected test type (**Automated** or **Manual**). The selected test case will be highlighted in light purple. 
7. Click **Create** to finish.

---

## Upload test suite through ZIP upload

If you don’t use any Git-based integration to sync your repository, you can manually upload either a Katalon Studio project or any zip file with `.ts` or `.tsc` files  to import test suites or test suite collections into a **Local repository (ZIP Upload)** in TestOps.

<iframe
src="https://demo.arcade.software/BiXNLjdqoscR6N8Z4fzS?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Upload and Manage a Script Repository for Test Suites"
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
   - One or more test suite files (`.ts`).
4. Click **Import** to upload and create the repository.

Once the upload is completed, TestOps extracts the ZIP file and imports all supported test cases while **preserving the original directory and folder hierarchy**.
