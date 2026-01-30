---
title: Katalon built-in MCP servers
---

This document provides descriptions on Katalon's built-in MCP servers.

## Katalon MCP Server

This server specializes in finding/returning Katalon's document.


| **Tool**                                   | **Description**                                                                                                                                                                                                                                                                              |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fetch`                                    | Fetch and retrieve the complete Katalon documentation page content in markdown format.                                                                                                                                                                                                       |
| `search`                                   | A search tool for general, cross-product queries where the specific product context is unknown or irrelevant for Katalon documentation.                                                                                                                                                      |
| `search_katalon_documentation_with_filter` | The primary and most accurate search tool for Katalon documentation, about products, features, configuration, and troubleshooting.<br/><br/>Use this tool by default for finding information about specific products (Studio, TestOps, TestCloud), features, troubleshooting, or integrations. |

:::tip Usage Tips

- Ask a question like _"What's new in **Katalon Studio** 10.4.2?"_ to quickly get the information you need. **StudioAssist** will use `search_katalon_documentation_with_filter` to search **Katalon** documentation with product-level filtering (**Studio, TestOps, TestCloud,** etc.) and returns relevant document sections.

- If you want a full document page returned, follow up with _“Retrieve full documentation”_. **StudioAssist** will use fetch to return the full document in **Markdown** format, including code blocks, tables, and images.

- If your question isn't product-specific, like _“Does Katalon have MCP servers?”_, **StudioAssist** will use search to locate and return the answer.

:::

## Katalon Studio MCP Server

This server has the following tools, grouped by features:

### Test Case tools

<div className="p">
  <table
    className="table anchor_top_offset"
    id="concept-katalon__t1"
    style={{ width: "100%", tableLayout: "fixed", borderCollapse: "collapse", wordBreak: "break-word"  }}
  >
    <caption />
    <colgroup>
      <col style={ { width: "30%" } } />
      <col style={ { width: "30%" } } />
      <col style={ { width: "40%" } } />
    </colgroup>

    <thead className="thead">
      <tr>
        <th>
          Tool
        </th>
        <th>
          Description
        </th>
        <th>
          Example Prompt
        </th>
      </tr>
    </thead>

    <tbody className="tbody">
      <tr>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          `getTestCases`
        </td>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Get a list of all test case IDs in the current project
        </td>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Get all test cases in this project.
        </td>
      </tr>

      <tr>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          `createTestCase`
        </td>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Create a new test case under your specified folder with your provided details
        </td>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Create new test case **‘example_test_case’** with description **‘Verify login page loads correctly.’**
        </td>
      </tr>

      <tr>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          `updateTestCase`
        </td>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Update test case with name, description, tags and comments you provide
        </td>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Update test case **‘example_test_case’** — change the description to **‘Include password recovery step’** and add the tag **‘UI.’**
        </td>
      </tr>

      <tr>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          `getTestCaseScript`
        </td>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Get the Groovy script content and other metadata for a specific test case
        </td>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Get test case script for the **‘example_test_case.’**
        </td>
      </tr>

      <tr>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          `updateTestCaseScript`
        </td>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Update the Groovy script content for an existing test case
        </td>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Update test case script: add this step to **‘example_test_case’**: `WebUI.verifyElementPresent(findTestObject('Login/Button_Login'), 10)`.
        </td>
      </tr>
    </tbody>
  </table>
</div>




### Custom Keyword tools

<div className="p">
  <table
    className="table anchor_top_offset"
    id="concept-katalon__t1"
    style={{ width: "100%", tableLayout: "fixed", borderCollapse: "collapse", wordBreak: "break-word"  }}
  >
    <caption />
    <colgroup>
      <col style={ { width: "30%" } } />
      <col style={ { width: "30%" } } />
      <col style={ { width: "40%" } } />
    </colgroup>

    <thead className="thead">
      <tr>
        <th>
          Tool
        </th>
        <th>
          Description
        </th>
        <th>
          Example Prompt
        </th>
      </tr>
    </thead>

    <tbody className="tbody">
      <tr>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          `getCustomKeywords`
        </td>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Get a list of all custom keywords in the current project
        </td>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Get custom keywords in this project.
        </td>
      </tr>

      <tr>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          `getCustomKeyword`
        </td>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Get a custom keyword class file with the name you provide and return its content
        </td>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Get custom keyword content for class **‘example_keyword_class.’**
        </td>
      </tr>

      <tr>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          `createCustomKeyword`
        </td>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Create a new custom keyword class with content you specify. The keyword will be saved in the Keywords source folder.
        </td>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Create custom keyword **‘example_keyword_class’** with method `def printMessage(){ println("Hello from custom keyword!") }`.
        </td>
      </tr>

      <tr>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          `updateCustomKeyword`
        </td>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Update an existing custom keyword class file. Can update the content and optionally rename/move the keyword to a different package/class name.
        </td>
        <td
          className="entry"
          headers="concept-katalon__t1__entry__1 concept-katalon__t1__entry__2 concept-katalon__t1__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Update custom keyword **‘example_keyword_class’**: change name to **‘example_user_actions’**, add new method `def verifyLogin()`.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Test Object tools


:::warning Limitations
- When configured with **Bedrock-based models**, **StudioAssist** cannot create or update test objects, as **AWS Bedrock** providers don't support create/update test object tools.
- **Gemini** provider may not reliably execute create/update test object actions. To avoid this issue:
  - **Attach to your prompt a _custom instruction_ file** that describes the test object you want to create along with real examples from your project.
  - **Use another AI model**. See all of our supported AI models at [AI service configuration](/katalon-studio/get-started/workspace-settings/katalon-studio-preferences/studioassist-preferences#ai-service-configuration). 
- For `WebService` tools, we currently don't support displaying HTTP body type responses.
:::

<div className="p">
  <table
  className="table anchor_top_offset"
  id="table-900095"
  style={ { width: "100%", tableLayout: "fixed", borderCollapse: "collapse", wordBreak: "break-word" } }
>
  <caption />
  <colgroup>
      <col style={ { width: "30%" } } />
      <col style={ { width: "30%" } } />
      <col style={ { width: "40%" } } />
  </colgroup>
  <thead className="thead">
    <tr>
        <th>
          **Tools**
        </th>
        <th>
          **Description**
        </th>
        <th>
          **Example Prompt**
        </th>
    </tr>
  </thead>

  <tbody className="tbody">
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          `getTestObjects`
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Get a list of all test object IDs from the current project
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Get all test objects in this project.
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          `getTestObject`
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Retrieves detailed information about a test object from the Object Repository based on its ID in the current Katalon Studio project.
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Get test object details for "make appointment button".
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          `createWebTestObject`
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Creates a new web test object in the Object Repository with a suggested locator strategy based on locator information.
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Create a web test object "make appointment button" on this page [CURA Healthcare Service](https://katalon-demo-cura.herokuapp.com/) using full XPath `/html/body/header/div/a`.
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          `createMobileTestObject`
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Creates a new mobile test object in the Object Repository with a suggested locator strategy based on locator information.
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Create a mobile test object "login button" in the Android app using resource-id `com.demo.app:id/btnLogin`.
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          `createWindowsTestObject`
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Creates a new Windows test object in the Object Repository with a suggested locator strategy based on locator information.
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Create a Windows test object "Submit button" using AutomationId `SubmitButton`.
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          `createRestWebServiceTestObject`
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Creates a new REST Web Service test object in the Object Repository with a suggested locator strategy based on locator information.
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Create a REST API test object "Get user details" with GET method for the endpoint `/api/users/1`.
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          `createSoapWebServiceTestObject`
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Creates a new SOAP Web Service test object in the Object Repository with a suggested locator strategy based on locator information.
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Create a SOAP web service test object "GetCustomerInfo" using WSDL URL `<https://example.com/customer.wsdl`.>
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          `updateWebTestObject`
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Updates an existing web test object in the Object Repository based on its ID in the current Katalon Studio project.
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Update "make appointment button" to use CSS selector `#btn-make-appointment`.
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          `updateMobileTestObject`
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Updates an existing mobile test object in the Object Repository based on its ID in the current Katalon Studio project.
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Update object "login button" to use XPath `//android.widget.Button[@text='Login']`.
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          `updateWindowsTestObject`
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Updates an existing Windows test object in the Object Repository based on its ID in the current Katalon Studio project.
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Update object "Submit button" to use Name locator "Submit".
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          `updateRestWebServiceTestObject`
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Updates an existing REST Web Service test object in the Object Repository based on its ID in the current Katalon Studio project.
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Update object "Get user details" to use endpoint `/api/users/{id}` with path parameter `id`.
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          `updateSoapWebServiceTestObject`
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Updates an existing SOAP Web Service test object in the Object Repository based on its ID in the current Katalon Studio project.
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Update object "GetCustomerInfo" to use the latest WSDL URL provided by the service team.
        </td>
      </tr>
  </tbody>
</table>
</div>

:::tip
- For a more stable workflow, use `getTestObjects` to retrieve all test objects in your project before using other **Test Object** tools.
- When *creating* or *updating* **Test Objects**, include both a *locator strategy* and its *full path* (e.g. _xpath: /html/body/header/div/a_) in your prompt. E.g. Create a web test object "make appointment button" on this page [CURA Healthcare Service](https://katalon-demo-cura.herokuapp.com/) using full XPath `/html/body/header/div/a`.
- (Optional) [Connect to Selenium MCP server](/katalon-studio/studioassist/mcp-servers/setting-up-selenium-mcp-sever-for-studioassist) allows **StudioAssist** to understand web project contexts better and generate **Test Objects** with higher precision. E.g. Create a new web test object named "make appointment button" on this page [CURA Healthcare Service](https://katalon-demo-cura.herokuapp.com/).
:::

### Test Suite tools

<div className="p">
  <table
    className="table anchor_top_offset"
    id="concept-katalon__t3"
    style={{ width: "100%", tableLayout: "fixed", borderCollapse: "collapse", wordBreak: "break-word"  }}
  >
    <caption />
    <colgroup>
      <col style={ { width: "30%" } } />
      <col style={ { width: "30%" } } />
      <col style={ { width: "40%" } } />
    </colgroup>

    <thead className="thead">
      <tr>
        <th>
          Tool
        </th>
        <th>
          Description
        </th>
        <th>
          Example Prompt
        </th>
      </tr>
    </thead>

    <tbody className="tbody">
      <tr>
        <td
          className="entry"
          headers="concept-katalon__t3__entry__1 concept-katalon__t3__entry__2 concept-katalon__t3__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          `getTestSuite`
        </td>
        <td
          className="entry"
          headers="concept-katalon__t3__entry__1 concept-katalon__t3__entry__2 concept-katalon__t3__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Get details of a specific test suite in the current Katalon Studio project
        </td>
        <td
          className="entry"
          headers="concept-katalon__t3__entry__1 concept-katalon__t3__entry__2 concept-katalon__t3__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Get test suite **‘example_test_suite.’**
        </td>
      </tr>

      <tr>
        <td
          className="entry"
          headers="concept-katalon__t3__entry__1 concept-katalon__t3__entry__2 concept-katalon__t3__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          `createTestSuite`
        </td>
        <td
          className="entry"
          headers="concept-katalon__t3__entry__1 concept-katalon__t3__entry__2 concept-katalon__t3__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Create a new test suite with metadata and test cases in the current Katalon Studio project
        </td>
        <td
          className="entry"
          headers="concept-katalon__t3__entry__1 concept-katalon__t3__entry__2 concept-katalon__t3__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Create test suite **‘example_test_suite’** that includes: **‘example_test_case_1’**, **‘example_login_case_1.’**
        </td>
      </tr>

      <tr>
        <td
          className="entry"
          headers="concept-katalon__t3__entry__1 concept-katalon__t3__entry__2 concept-katalon__t3__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          `updateTestSuite`
        </td>
        <td
          className="entry"
          headers="concept-katalon__t3__entry__1 concept-katalon__t3__entry__2 concept-katalon__t3__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Update an existing test suite with new metadata and test cases in the current Katalon Studio project
        </td>
        <td
          className="entry"
          headers="concept-katalon__t3__entry__1 concept-katalon__t3__entry__2 concept-katalon__t3__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Update test suite **‘example_checkout_case_1’**: add **‘example_test_suite_1.’** to end of test suite.
        </td>
      </tr>

      <tr>
        <td
          className="entry"
          headers="concept-katalon__t3__entry__1 concept-katalon__t3__entry__2 concept-katalon__t3__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          `createDynamicTestSuite`
        </td>
        <td
          className="entry"
          headers="concept-katalon__t3__entry__1 concept-katalon__t3__entry__2 concept-katalon__t3__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Create a new dynamic test suite with metadata and filtering configuration in the current Katalon Studio project
        </td>
        <td
          className="entry"
          headers="concept-katalon__t3__entry__1 concept-katalon__t3__entry__2 concept-katalon__t3__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Create dynamic test suite **‘example_dynamic_test_suite_1’**: include all test cases tagged **‘regression.’**
        </td>
      </tr>

      <tr>
        <td
          className="entry"
          headers="concept-katalon__t3__entry__1 concept-katalon__t3__entry__2 concept-katalon__t3__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          `updateDynamicTestSuite`
        </td>
        <td
          className="entry"
          headers="concept-katalon__t3__entry__1 concept-katalon__t3__entry__2 concept-katalon__t3__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Update an existing dynamic test suite with new metadata and filtering configuration in the current Katalon Studio project
        </td>
        <td
          className="entry"
          headers="concept-katalon__t3__entry__1 concept-katalon__t3__entry__2 concept-katalon__t3__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Update dynamic test suite **‘example_dynamic_test_suite’**: only include test cases tagged **‘critical.’**
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Test Suite Collection tools

<div className="p">
  <table
    className="table anchor_top_offset"
    id="concept-katalon__t3"
    style={{ width: "100%", tableLayout: "fixed", borderCollapse: "collapse", wordBreak: "break-word"  }}
  >
    <caption />
    <colgroup>
      <col style={ { width: "32%" } } />
      <col style={ { width: "28%" } } />
      <col style={ { width: "40%" } } />
    </colgroup>

    <thead className="thead">
      <tr>
        <th>
          Tool
        </th>
        <th>
          Description
        </th>
        <th>
          Example Prompt
        </th>
      </tr>
    </thead>

    <tbody className="tbody">
      <tr>
        <td
          className="entry"
          headers="concept-katalon__t3__entry__1 concept-katalon__t3__entry__2 concept-katalon__t3__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          `createTestSuiteCollection`
        </td>
        <td
          className="entry"
          headers="concept-katalon__t3__entry__1 concept-katalon__t3__entry__2 concept-katalon__t3__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Creates a new test suite collection with metadata and test suites in the current Katalon Studio project
        </td>
        <td
          className="entry"
          headers="concept-katalon__t3__entry__1 concept-katalon__t3__entry__2 concept-katalon__t3__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Create test suite collection with all test suites in this project.
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          headers="concept-katalon__t3__entry__1 concept-katalon__t3__entry__2 concept-katalon__t3__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          `updateTestSuiteCollection`
        </td>
        <td
          className="entry"
          headers="concept-katalon__t3__entry__1 concept-katalon__t3__entry__2 concept-katalon__t3__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Update an existing test suite collection with new metadata and test suites in the current Katalon Studio project
        </td>
        <td
          className="entry"
          headers="concept-katalon__t3__entry__1 concept-katalon__t3__entry__2 concept-katalon__t3__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          update test suite collection `regression_test_collection` to include `example_test_suite_1`
        </td>
      </tr>
    </tbody>
  </table>
</div>

### BDD (Behavior-driven development) testing tools

<div className="p">
  <table
    className="table anchor_top_offset"
    id="concept-katalon__t4"
    style={{ width: "100%", tableLayout: "fixed", borderCollapse: "collapse", wordBreak: "break-word"  }}
  >
    <caption />
    <colgroup>
      <col style={ { width: "30%" } } />
      <col style={ { width: "30%" } } />
      <col style={ { width: "40%" } } />
    </colgroup>

    <thead className="thead">
      <tr>
        <th>
          Tool
        </th>
        <th>
          Description
        </th>
        <th>
          Example Prompt
        </th>
      </tr>
    </thead>

    <tbody className="tbody">
      <tr>
        <td
          className="entry"
          headers="concept-katalon__t4__entry__1 concept-katalon__t4__entry__2 concept-katalon__t4__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          `createBddFeatureFile`
        </td>
        <td
          className="entry"
          headers="concept-katalon__t4__entry__1 concept-katalon__t4__entry__2 concept-katalon__t4__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Create a new BDD feature file with Gherkin content in the current Katalon Studio project
        </td>
        <td
          className="entry"
          headers="concept-katalon__t4__entry__1 concept-katalon__t4__entry__2 concept-katalon__t4__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Create Bdd feature file **‘example_feature_file’**: add the following Gherkin content:<br/><br/>Feature: Login<br/>Scenario: Valid login<br/>Given user is on the login page<br/>When user enters valid credentials<br/>Then the homepage is displayed.
        </td>
      </tr>

      <tr>
        <td
          className="entry"
          headers="concept-katalon__t4__entry__1 concept-katalon__t4__entry__2 concept-katalon__t4__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          `updateBddFeatureFile`
        </td>
        <td
          className="entry"
          headers="concept-katalon__t4__entry__1 concept-katalon__t4__entry__2 concept-katalon__t4__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Update an existing BDD feature file’s content, name, and/or location in the current Katalon Studio project
        </td>
        <td
          className="entry"
          headers="concept-katalon__t4__entry__1 concept-katalon__t4__entry__2 concept-katalon__t4__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Update BDD feature file: update name **‘example_feature_file’** to **‘example_login_feature’**, add a new scenario for invalid login.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Test Data tools

<div className="p">
  <table
    className="table anchor_top_offset"
    id="concept-katalon__t5"
    style={{ width: "100%", tableLayout: "fixed", borderCollapse: "collapse", wordBreak: "break-word"  }}
  >
    <caption />
    <colgroup>
      <col style={ { width: "30%" } } />
      <col style={ { width: "30%" } } />
      <col style={ { width: "40%" } } />
    </colgroup>

    <thead className="thead">
      <tr>
        <th>
          Tool
        </th>
        <th>
          Description
        </th>
        <th>
          Example Prompt
        </th>
      </tr>
    </thead>

    <tbody className="tbody">
      <tr>
        <td
          className="entry"
          headers="concept-katalon__t5__entry__1 concept-katalon__t5__entry__2 concept-katalon__t5__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          `getTestDataList`
        </td>
        <td
          className="entry"
          headers="concept-katalon__t5__entry__1 concept-katalon__t5__entry__2 concept-katalon__t5__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Get a list of all test data entities available in the current Katalon Studio project
        </td>
        <td
          className="entry"
          headers="concept-katalon__t5__entry__1 concept-katalon__t5__entry__2 concept-katalon__t5__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Get test data list of all test data files in this project.
        </td>
      </tr>

      <tr>
        <td
          className="entry"
          headers="concept-katalon__t5__entry__1 concept-katalon__t5__entry__2 concept-katalon__t5__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          `createInternalTestData`
        </td>
        <td
          className="entry"
          headers="concept-katalon__t5__entry__1 concept-katalon__t5__entry__2 concept-katalon__t5__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Create a new internal test data entity with specified data in the current Katalon Studio project
        </td>
        <td
          className="entry"
          headers="concept-katalon__t5__entry__1 concept-katalon__t5__entry__2 concept-katalon__t5__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Create internal test data **‘example_test_data’** using the table **‘sample_data_for_test_case.’**
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          headers="concept-katalon__t5__entry__1 concept-katalon__t5__entry__2 concept-katalon__t5__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          `updateInternalTestData`
        </td>
        <td
          className="entry"
          headers="concept-katalon__t5__entry__1 concept-katalon__t5__entry__2 concept-katalon__t5__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Update an existing internal test data entity in the current project.
        </td>
        <td
          className="entry"
          headers="concept-katalon__t5__entry__1 concept-katalon__t5__entry__2 concept-katalon__t5__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Update `UserCredentials`: add 2 accounts, change password.
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          headers="concept-katalon__t5__entry__1 concept-katalon__t5__entry__2 concept-katalon__t5__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          `getInternalTestDataDetails`
        </td>
        <td
          className="entry"
          headers="concept-katalon__t5__entry__1 concept-katalon__t5__entry__2 concept-katalon__t5__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Retrieves internal test data content for a specific internal test data file in the current project.
        </td>
        <td
          className="entry"
          headers="concept-katalon__t5__entry__1 concept-katalon__t5__entry__2 concept-katalon__t5__entry__3"
          style={{ padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" }}
        >
          Get the content of **'example_test_data'**.
        </td>
      </tr>
    </tbody>
  </table>
</div>


### WebUI tools

<table
  className="table anchor_top_offset"
  id="table-4ec96a"
  style={ { width: "100%", tableLayout: "fixed", borderCollapse: "collapse", wordBreak: "break-word" } }
>
  <caption />
  <colgroup>
      <col style={ { width: "30%" } } />
      <col style={ { width: "30%" } } />
      <col style={ { width: "40%" } } />
  </colgroup>

  <thead className="thead">
    <tr>
        <th>
          Tool
        </th>
        <th>
          Description
        </th>
        <th>
          Example Prompt
        </th>
    </tr>
  </thead>

  <tbody className="tbody">
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          `getAvailableExecutionSessions`
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Retrieves a list of all available execution sessions (browser instances) that are currently running and available. Applicable when a test script is executed without calling `closeBrowser()`, allowing the browser session to remain active.
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          List all running browser sessions that StudioAssist can use.
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          `WebUINavigate`
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Opens a browser and navigates to the specified URL.
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Open a Chrome browser and navigate to https://katalon-demo-cura.herokuapp.com/.
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          `webUITakePageSource`
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Retrieves the HTML source code of the current page. Requires an active browser session. Useful for debugging, verification, and analyzing page structure.
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Get the HTML source code of the current page.
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          `webUITakeAccessibilityTreeSnapshot`
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Retrieves the accessibility tree snapshot from an existing browser session. Requires an active browser session.
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Capture an accessibility tree snapshot of the current page.
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          `webUISetText`
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Sets text in an input element on the current page.
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          On the current page, enter 'demo' into the Username input field.
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          `webUIClick`
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Clicks on a web element.
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Click on the "Login" button on the current page.
        </td>
      </tr>
  </tbody>
</table>

To see how these tools work together, refer to the following sample use case, which demonstrates generating a test case and its associated test objects, then executing them. See: [WebUI tools sample video](https://app.arcade.software/share/APfXGe5S5kYkwXRMJODh).

:::caution Known limitations
The WebUI tools have the following limitations when working with Safari:
- Cannot run multiple concurrent browser sessions
- The `webUITakeAccessibilityTreeSnapshot` tool is not available
:::

## Katalon TestOps MCP Server

Starting version 10.4.0, **Katalon Studio** supports **TestOps MCP Server**, supporting users on TestOps (not including TestOps Legacy). See [TestOps MCP Server](/katalon-platform/testops-mcp-server) for more details on configurations and tool list.

:::note
- StudioAssist uses the authentication information from the **Katalon Studio** login to smoothly integrate with **TestOps MCP Server**.
- **TestOps MCP Server** currently doesn't support integration for **Katalon Studio** accounts using offline license
- For better results, specify the project ID in your prompts if you think **StudioAssist** will use **TestOps MCP Servers**.
:::
