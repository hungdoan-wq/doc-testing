---
title: Generate API tests with Katalon Studio's AI
---
import useBaseUrl from '@docusaurus/useBaseUrl';

This document introduces two AI-powered workflows with OpenAPI (CATS) specification files:

- **Generate API tests with AI (beta)**: Import your OpenAPI file and create/save test cases/test objects with the help of AI, significantly reducing time and effort. You can customize, maintain, and execute them as part of your CI/CD workflows.
- **API test generation and report viewing with AI**: Import your OpenAPI file to have Katalon’s AI agent automatically generates tests, executes them, and provides a results report *without creating or storing any test artifacts* in your project.

Together, these features give you flexibility: you can either establish a maintainable API testing framework or perform quick, on-demand API validation depending on your testing needs.

## <a id="task-4243" class="anchor_top_offset"/>Generate API tests with AI (beta)

This feature imports your OpenAPI file and creates saved, editable test objects and test cases in your project with the help of AI, significantly reducing time and effort. With saved test cases/objects, you can customize, maintain, and execute them as part of your CI/CD workflows.

<p xmlns="http://www.w3.org/1999/xhtml" className="p">The test case generator currently supports OpenAPI 2 (Swagger) and OpenAPI 3.</p> 

<div xmlns="http://www.w3.org/1999/xhtml" className="section prereq p"><ul className="ul"><li className="li"><p className="p"><span className="ph">Katalon Studio Enterprise</span> version 9.6.0 onwards.</p></li><li className="li"><p className="p">The Account Admin has enabled AI Control for your Account. See: <a className="xref" href="/katalon-platform/administer/administration-tasks/enabledisable-ai-features-in-an-account">AI Control</a>.</p></li></ul></div>
<section xmlns="http://www.w3.org/1999/xhtml" className="section context"><p className="p">This guide shows you how to use the API  test case generator feature (beta) <span className="ph">Katalon Studio</span>. Follow these steps:</p></section> 
<ol xmlns="http://www.w3.org/1999/xhtml" className="ol steps"><li className="li step stepexpand"><span className="ph cmd">In <span className="ph">Katalon Studio</span>, create or open an API/Web Service project.</span></li><li className="li step stepexpand"><span className="ph cmd">In the toolbar, click <span className="ph uicontrol">Import from OpenAPI / Swagger</span> button. You can also right-click <span className="ph uicontrol">Object Repository</span> and select <span className="ph uicontrol">Import</span> &gt; <span className="ph uicontrol">From OpenAPI</span>.</span><div className="itemgroup info"><img className="image" width={500} src={useBaseUrl("/50352f6b-d8e4-475f-80c2-cb83a315a1ac/KS_import_from_OpenAPI_Swagger_button.png")} alt="Import from OpenAPI / Swagger button" /></div></li><li className="li step stepexpand"><span className="ph cmd">In the import dialog, provide the file location or URL of the API specification. Tick <span className="ph uicontrol">Auto-generate test cases for endpoints with AI</span> button, then click <span className="ph uicontrol">OK</span></span><div className="itemgroup info"><img className="image" width={500} src={useBaseUrl("/86d9ce35-6759-4cfc-b9f3-cc0ec335f732/KS_import_REST_request_dialog.png")} alt="Import specification dialog" /></div><div className="itemgroup stepresult">The imported endpoints are automatically stored in <span className="ph uicontrol">Object Repository</span>.</div></li><li className="li step stepexpand"><span className="ph cmd">All imported endpoints are then listed for test generation. Select the endpoints to generate test cases, then click <span className="ph uicontrol">Generate tests</span>.</span><div className="itemgroup info"><img className="image" width={500} src={useBaseUrl("/4885dd32-eda1-4f77-b911-a02b58bee57d/KS_select_endpoints.png")} alt="Select endpoints dialog" /><p className="p">The test case generation process may take a few minutes depending on the number of selected endpoints. You can click <em className="ph i">hide</em> to let the process run in background while doing other tasks.</p></div></li><li className="li step stepexpand"><span className="ph cmd">Once the test cases are generated, you can select which test cases to save and click <span className="ph uicontrol">Add</span>.</span><div className="itemgroup info"><img className="image" width={500} src={useBaseUrl("/c5cb1ddc-34e9-4721-97a2-d5ca1f9c1004/KS_generated_test_case.png")} alt="Select test cases dialog" /></div></li></ol> 
<section xmlns="http://www.w3.org/1999/xhtml" className="section result"><p className="p">The generated API test cases are organized in a single folder of <span className="ph uicontrol">Test Cases</span>. </p></section> 

### <a id="concept-4604" class="anchor_top_offset"/>Known limitations

<div xmlns="http://www.w3.org/1999/xhtml" className="p">The beta release of API test case generator comes with some limitations:<ul className="ul"><li className="li">Accuracy: generated test cases might contains made-up code snippet. You need to revise the test cases before executing.</li><li className="li">Generation time: Test case generation may take a long time. You should click <em className="ph i">hide</em> to let the generation process in background.</li><li className="li">Limited test case types: Currently the feature only generates status code test cases.</li><li className="li"><p className="p">Error: The error message <code className="ph codeph">No test case is generated</code> may occur when the request to OpenAI exceeds the token limit of 16,385 tokens in the GPT-3.5-turbo model. This happens when using large test objects, leading to failed endpoint test case generation.</p></li></ul></div>
<p xmlns="http://www.w3.org/1999/xhtml" className="p">Once the test cases are generated, you need to revise the test scripts to ensure that they can run as expected. For example, the script may use undefined global variable, such as <code className="ph codeph">global.baseUrl</code>, you need to create these variables in <a className="xref" href="/katalon-studio/data-driven-testing/global-variables-and-execution-profile">Global variables and Execution profile</a>.</p> 

## API test generation and report viewing with AI

By uploading an **OpenAPI specification** file, **Katalon**’s AI agent automatically generates tests, executes them immediately, and provides a results report—without creating or storing any test artifacts in your project.

<iframe
src="https://demo.arcade.software/zGkAlRA5wNQ6kGs2AkP0?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Generate and view test results from an OpenAPI specification file"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

1. Import your **OpenAPI** spec file.
    
    Import your **OpenAPI document** to create an [API Collection folder](/katalon-studio/test-objects/api-test-objects/authorization/api-collection-for-bulk-managing-authorization) in the **Object Repository**.
    
    This feature currently supports **header-based authorization only**. If your project uses other authentication types (NTLM, Digest, etc.), those mechanisms will not be included in the generate commands.
    
2. Double-click on this **API collection** folder, and select **Generate Test** tab.
    
3. Select **test types (positive, negative, edge and security testing)**, API paths, and HTTP methods to test. The options are retrieved from your specification file. If you don't select any API path before generating, KS automatically use all paths to generate the tests.
    
<img src="https://tw-cdn.katalon.com/katalon-studio/create-test-cases/ai-api-test-generation/api-generated-test-from-openapi-file-interface.png" alt="api generated test from openapi file interface" width="500px" />
<br/>

4. Click **Generate Test**. Katalon Studio will generate tests using AI for the **OpenAPI** Spec file, and then execute the tests right after. You can see the progress bar, and click **Hide** to let KS work in the background.

<img src="https://tw-cdn.katalon.com/katalon-studio/create-test-cases/ai-api-test-generation/ai-is-generating-and-executing-api-test.png" alt="ai is generating and executing api test" width="500px" />
<br/>
    
5. Once done, the report summary pops up for your viewing:
    
<img src="https://tw-cdn.katalon.com/katalon-studio/create-test-cases/ai-api-test-generation/api-report-inside-katalon-studio.png" alt="api report inside katalon studio" width="500px" />
<br/>

You can then also view the full HTML report, with more details on scores, compliance analysis, errors, logs...

<img src="https://tw-cdn.katalon.com/katalon-studio/create-test-cases/ai-api-test-generation/api-html-report-with-details-1.png" alt="api html report with details" width="500px" />
<br/>

After reviewing everything, you can save the test generation configuration to rerun with same configurations later:

<img src="https://tw-cdn.katalon.com/katalon-studio/create-test-cases/ai-api-test-generation/ai-generated-api-test-save-configuration-feature.png" alt="ai generated api test save configuration feature" width="500px" />
<br/>

This is useful for validating fixes after API updates and comparing results across multiple iterations without reconfiguring the test setup each time.

<img src="https://tw-cdn.katalon.com/katalon-studio/create-test-cases/ai-api-test-generation/ai-generated-api-test-rerun-result.png" alt="ai generated api test rerun result" width="500px" />