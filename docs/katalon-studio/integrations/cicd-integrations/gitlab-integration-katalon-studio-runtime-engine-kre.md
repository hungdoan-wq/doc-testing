---
title: GitLab Integration in Katalon Studio and Katalon Runtime Engine (KRE)
---

This document explains how to effectively integrate **GitLab** into **Katalon Studio** and **Katalon Runtime Engine**. 

## Scenario

This integration scenario focuses on executing automated tests developed in **Katalon Studio** using the **Katalon Runtime Engine (KRE)** directly within the **GitLab CI/CD pipeline**.

## Purpose and strategic value

The purpose of this integration is to provide a mechanism to **execute Katalon project Test Suites or Test Suite Collections from the GitLab pipeline** and subsequently **verify the execution results in TestOps**. This enables continuous testing and centralized reporting as part of the overall CI/CD workflow.

## Key takeaways

The core takeaway is the ability to **execute Katalon project Test Suites or Test Suite Collections from the GitLab pipeline** and ensure that these execution results are verified and uploaded to Katalon TestOps.

## Requirements

### Prepare a GitLab repository

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-studio-runtime-engine-kre-1.png" alt="gitlab-integration-katalon-studio-runtime-engine-kre image 1" width="500px" />
<br/>

### Clone GitLab Repo to the Katalon Studio Enterprise

#### Integrate with Katalon Platform to upload reports to TestOps automatically

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-studio-runtime-engine-kre-2.png" alt="gitlab-integration-katalon-studio-runtime-engine-kre image 2" width="500px" />
<br/>

#### Make sure the KRE licenses are available in the selected organization

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-studio-runtime-engine-kre-3.png" alt="gitlab-integration-katalon-studio-runtime-engine-kre image 3" width="500px" />
<br/>

### Commit the integration settings to the GitLab repo

Check the integration information from the > project > settings > internal > **com.kms.katalon.integration.analytics.properties**

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-studio-runtime-engine-kre-4.png" alt="gitlab-integration-katalon-studio-runtime-engine-kre image 4" width="500px" />
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-studio-runtime-engine-kre-5.png" alt="gitlab-integration-katalon-studio-runtime-engine-kre image 5" width="500px" />
<br/>

### Check runner agents status

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-studio-runtime-engine-kre-6.png" alt="gitlab-integration-katalon-studio-runtime-engine-kre image 6" width="500px" />
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-studio-runtime-engine-kre-7.png" alt="gitlab-integration-katalon-studio-runtime-engine-kre image 7" width="500px" />
<br/>
### Set variables

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-studio-runtime-engine-kre-8.png" alt="gitlab-integration-katalon-studio-runtime-engine-kre image 8" width="500px" />
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-studio-runtime-engine-kre-9.png" alt="gitlab-integration-katalon-studio-runtime-engine-kre image 9" width="500px" />
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-studio-runtime-engine-kre-10.png" alt="gitlab-integration-katalon-studio-runtime-engine-kre image 10" width="500px" />
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-studio-runtime-engine-kre-11.png" alt="gitlab-integration-katalon-studio-runtime-engine-kre image 11" width="500px" />
<br/>

## Best practices steps

### Configure the `.gitlab-ci.yml` file

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-studio-runtime-engine-kre-12.png" alt="gitlab-integration-katalon-studio-runtime-engine-kre image 12" width="500px" />
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-studio-runtime-engine-kre-13.png" alt="gitlab-integration-katalon-studio-runtime-engine-kre image 13" width="500px" />
<br/>

```jsx
# Requirements
# A Katalon Studio project with the content saved in the root repository folder. If the project is under another location, you need to update KATALON_PROJECT_DIR with the corresponding value in the variable section
# An active KRE license
# A valid Katalon API key, which is stored as KATALON_API_KEY in Settings/CI/CD/Variables
image: 'katalonstudio/katalon' # Use the latest version of Katalon Runtime Engine. We can also use other versions of Katalon Runtime Engine by specifying another tag, such as katalonstudio/katalon:8.1.2 or katalonstudio/katalon:8.3.0
services:
  - docker:dind
variables:
  # Specify Katalon Studio project directory. By default, it is stored under the root project folder.
  KATALON_PROJECT_DIR: $CI_PROJECT_DIR
stages:
  - test
test_job:
  stage: test
  # Update your desired katalonc commands. All of katalonc supported arguments can be found in this document https://docs.katalon.com/katalon-studio/docs/console-mode-execution.html{"\n"}{"  "}
  script:
    - katalonc.sh -projectPath=$KATALON_PROJECT_DIR -apiKey=$KATALON_API_KEY -browserType="Chrome" -retry=0 -statusDelay=20 -testSuitePath="Test Suites/API/Get_All_Objects_TS" -executionProfile="default" -orgID=2490*** -testOpsProjectId=2452***
```

**Note:**

1. **-orgID** defines the source organization from which you want to obtain the KRE licenses.
    
2. **-testOpsProjectID** defines the project in TestOps where you want to upload the reports.
    

### Execute and verify the job

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-studio-runtime-engine-kre-14.png" alt="gitlab-integration-katalon-studio-runtime-engine-kre image 14" width="500px" />
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-studio-runtime-engine-kre-15.png" alt="gitlab-integration-katalon-studio-runtime-engine-kre image 15" width="500px" />
<br/>
<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/gitlab-integration-katalon-studio-runtime-engine-kre-16.png" alt="gitlab-integration-katalon-studio-runtime-engine-kre image 16" width="500px" />
<br/>

## Conclusion

Leveraging the Katalon Runtime Engine Docker image within the GitLab CI/CD pipeline allows teams to execute test suites automatically during the development cycle. By correctly setting the API key, Organization ID (`-orgID`), and TestOps Project ID (`-testOpsProjectID`), test reports are immediately uploaded and centralized in Katalon TestOps, facilitating quick reporting and verification of automated test results.

See all best practice documents at [Katalon products best practices](/katalon-platform/katalon-products-best-practices).
