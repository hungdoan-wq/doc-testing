---
title: '[WS] Validate OpenAPI against Specification'
---

:::caution
The `WS.validateOpenApiAgainstSpecification` keyword currently does not correctly validate API responses against the OpenAPI specification. It passes validation even when response structures or property names differ from the spec (e.g., Major vs. major), despite OpenAPI requiring case-sensitive matching.

As a workaround, use a custom keyword with the built-in `com.atlassian.oai.validator` library to manually validate responses until this issue is fixed.

We will notify you once the fix becomes available.
:::

## Description

Validate an OpenAPI/Swagger response body, request body, or string against an OpenAPI/Swagger specification. The OpenAPI/Swagger specification input can be a string, URL, or file path.

Keyword name: `validateOpenAPIAgainstSpecification`

## Parameters

Validate an **OpenAPI/Swagger request** against an OpenAPI/ Swagger specification:

| **Parameter** | **Parameter Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| `request` | RequestObject | Yes | Specify the request object that needs to be validated. |
| `specSrc` | String | Yes | Specify the OpenAPI/Swagger specification used to validate the OpenAPI/Swagger object. |
| `flowControl` | FailureHandling | Optional | Specify [failure handling](/katalon-studio/maintain-tests/configure-failure-handling-settings-in-katalon-studio) schema to determine whether the execution should be allowed to continue or stop. |

Validate an **OpenAPI/Swagger response** against an OpenAPI/ Swagger specification:

| **Parameter** | **Parameter Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| `response` | ResponseObject | Yes | Specify the response object that needs to be validated |
| `request` | RequestObject | Yes | Specify the request object that needs to be validated. |
| `specSrc` | String | Yes | Specify the OpenAPI/Swagger specification used to validate the OpenAPI/Swagger object. |
| `flowControl` | FailureHandling | Optional | Specify [failure handling](/katalon-studio/maintain-tests/configure-failure-handling-settings-in-katalon-studio) schema to determine whether the execution should be allowed to continue or stop. |

## Returns

| **Parameter Type** | **Description** |
| --- | --- |
| boolean | <ul><li>`true` if the response passes the validation</li><li>`false` if the response does not pass the validation</li></ul> |

If Katalon Studio cannot find the schema file or the response does not pass the validation, throw `StepFailedException`.

## Example

In this example, you want to validate the request and response against a Swagger specification.
```jsx
RequestObject request = findTestObject('Object Repository/Swagger - Get Inventory - Passed')

ResponseObject response = null

String specSrcURL = 'http://petstore.swagger.io/v2/swagger.json'{"\n"}{"\n"}//Validate request
if (WS.validateOpenAPIAgainstSpecification(request, specSrcURL)) {
    response = WS.sendRequest(request)

    //Validate response
    WS.validateOpenAPIAgainstSpecification(response, request, specSrcURL)
}

String specSrcFileLocation = FileUtil.getFile('example/swagger-openapi/swagger.json').getAbsolutePath()

//Validate request
if (WS.validateOpenAPIAgainstSpecification(request, specSrcFileLocation, FailureHandling.CONTINUE_ON_FAILURE)) {
    response = WS.sendRequest(request)

    //Validate response
    WS.validateOpenAPIAgainstSpecification(response, request, specSrcFileLocation, FailureHandling.CONTINUE_ON_FAILURE)
```