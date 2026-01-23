---
title: GitLab integration in Katalon TestOps API triggering
---

This document explains how to integrate GitLab in Katalon TestOps, to trigger API calls.


## Scenario

This integration focuses on using the GitLab CI/CD pipeline to make an API call that **triggers a pre-scheduled test execution** that is defined and managed within **Katalon TestOps**.


## Purpose and strategic value

The primary purpose is to be able to **trigger scheduled executions in TestOps from the GitLab pipeline**. This approach allows the GitLab CI process to initiate complex testing workflows that are centrally configured in TestOps, enabling orchestrated, immediate execution of predefined test runs.


## Key takeaways

The key takeaway is the ability to **trigger scheduled executions in TestOps** from the GitLab pipeline using a **PUT request to the Katalon TestOps API endpoint**.

## Best practice steps


### Obtain scheduler and run configuration IDs

- Schedule the test run in TestOps (e.g., named `GitLab_Pipeline_TestOps`).
    
- Extract the values for `schedulerId` and `scheduleId` from the response payload of the scheduled execution.
    

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-testops-api-triggering-2.png" alt="gitlab-integration-katalon-testops-api-triggering image 2" width="500px" />
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-testops-api-triggering-3.png" alt="gitlab-integration-katalon-testops-api-triggering image 3" width="500px" />
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-testops-api-triggering-4.png" alt="gitlab-integration-katalon-testops-api-triggering image 4" width="500px" />
<br/>

### Configure GitLab CI/CD variables

- Add all necessary API parameters (like `KATALON_API_HOST`, `KATALON_API_TOKEN`, `KATALON_SCHEDULER_ID`, etc.) as masked variables in the GitLab project settings.
    


### Compose the `.gitlab-ci.yml` file

- Define a stage (e.g., `execute_tests`) and a corresponding job (e.g., `trigger_katalon_execution`).
    
- Use the Katalon Docker image (or another image capable of running `curl`).
    
```jsx
stages:
 - execute_tests
trigger_katalon_execution:
 stage: execute_tests
 image: katalonstudio/katalon:latest
 variables:
   API_ENDPOINT: "https://$KATALON_API_HOST/v2/schedules/test-runs"
   JSON_DATA_BODY: >
     {
     	"startTime":"2025-10-15T06:31:00.581+00:00",
       "schedulerId": $KATALON_SCHEDULER_ID,
       "runConfigurationId": $KATALON_RUN_CONFIG_ID,
       "action": "INSTANCE_RUN"
     }
 script:
   - apt-get update -qq
   - apt-get install -y curl
   - echo "Executing Katalon API call to trigger schedule $KATALON_SCHEDULER_ID"
   - |
     curl -X PUT \
       "$API_ENDPOINT" \
       -H "Authorization: Bearer $KATALON_API_TOKEN" \
       -H "x-organization-id: $KATALON_ORG_ID" \
       -H "x-project-id: $KATALON_PROJECT_ID" \
       -H "Content-Type: application/json" \
       --data-raw "$JSON_DATA_BODY"
 rules:
   - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
```


### Define YAML variables and JSON payload

- Set the full API endpoint URL within the YAML, using the host variable: `API_ENDPOINT: "https://$KATALON_API_HOST/v2/schedules/test-runs"`.
    

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-testops-api-triggering-5.png" alt="gitlab-integration-katalon-testops-api-triggering image 5" width="500px" />
<br/>

- Define the `JSON_DATA_BODY` using multi-line syntax (`>`). The payload must include:
    
  - `"startTime"` (Note: Even if `startTime` is set in the future, the API call will **trigger the tests immediately**).
        

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-testops-api-triggering-6.png" alt="gitlab-integration-katalon-testops-api-triggering image 6" width="500px" />
<br/>

- `"schedulerId": $KATALON_SCHEDULER_ID`
    

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-testops-api-triggering-7.png" alt="gitlab-integration-katalon-testops-api-triggering image 7" width="500px" />
<br/>

- `"runConfigurationId": $KATALON_RUN_CONFIG_ID`
    
- `"action": "INSTANCE_RUN"`
    

### Execute the API call using cUrl

- The script must first ensure `curl` is installed: `apt-get update -qq` and `apt-get install -y curl`.
    
- Execute the API call using the `curl -X PUT` command:
    
    - The command targets the `$API_ENDPOINT`.
        
    - It must pass the required authentication and identification headers: `Authorization: Bearer $KATALON_API_TOKEN`, `x-organization-id: $KATALON_ORG_ID`, and `x-project-id: $KATALON_PROJECT_ID`.
        
    - It must include the JSON payload using `--data-raw "$JSON_DATA_BODY"`.
        

`$KATALON_API_TOKEN`

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-testops-api-triggering-8.png" alt="gitlab-integration-katalon-testops-api-triggering image 8" width="500px" />
<br/>

**Note:** `Make sure to check and update the token value to ensure it is valid.`

`$KATALON_ORG_ID = <<the value of x-organization-id>>`

`$KATALON_PROJECT_ID = <<the value of x-project-id>>`

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-testops-api-triggering-9.png" alt="gitlab-integration-katalon-testops-api-triggering image 9" width="500px" />
<br/>

### Verify execution

- After the GitLab job runs successfully (under **Build** ▶️ **Jobs**), verify that a new test execution starts immediately in TestOps under the Executions tab.
    

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-testops-api-triggering-10.png" alt="gitlab-integration-katalon-testops-api-triggering image 10" width="500px" />
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-testops-api-triggering-11.png" alt="gitlab-integration-katalon-testops-api-triggering image 11" width="500px" />
<br/>

### Results

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-testops-api-triggering-12.png" alt="gitlab-integration-katalon-testops-api-triggering image 12" width="500px" />
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-testops-api-triggering-13.png" alt="gitlab-integration-katalon-testops-api-triggering image 13" width="500px" />
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-testops-api-triggering-14.png" alt="gitlab-integration-katalon-testops-api-triggering image 14" width="500px" />
<br/>

### Conclusion

Integrating GitLab with Katalon TestOps via the API allows GitLab to serve as a **centralized trigger** for pre-configured test schedules in TestOps. This separation of duties ensures that test environment configuration and execution management remain centralized within TestOps while execution initiation is seamlessly integrated into the automated CI/CD flow. Using the TestOps API essentially turns the GitLab pipeline into a sophisticated remote control for automated testing.

See all best practice documents at [Katalon products best practices](/katalon-platform/katalon-products-best-practices).
