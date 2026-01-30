---
title: How to fix empty or corrupted screenshots when executing tests in Docker
---

## Condition
Screenshots captured during their test executions are saved as image files but appear to be empty or corrupted when opened.

This issue commonly occurs when running Katalon tests in Docker environments, especially through Jenkins pipelines. Even with proper **Xvfb** and **Display** configurations, the screenshots may still be unreadable.

## Cause
Starting from Katalon Studio and KRE version 10, the underlying framework was upgraded to Selenium 4, which changed how screenshot files are generated and stored during execution.

When you run KRE in Docker using the default command:
```jsx
docker run -t --rm -v "$(pwd)":/katalon/katalon/source katalonstudio/katalon katalon-execute.sh [Option1] [Option2] ... [OptionN]
```
the container executes all processes as the root user.

With Selenium 4, screenshots are created with restricted file permissions, allowing only the root user to read them. As a result, Jenkins or any non-root user attempting to read the screenshots outside the container, but does not have permission to access the files, which then causes the images to appear empty, blank, or corrupted.

This issue is not caused by Katalon Studio itself, but by the combination of Docker and Selenium 4 file permission behavior.

## Solution
You need to **run KRE Docker with the same user ID as Jenkins** instead of the default root user.
This ensures that all generated files, including screenshots, are accessible to the Jenkins process.

Use the following Docker command and replace `<JENKINS_USER_ID>` with your Jenkins user ID:

```jsx
docker run -t --rm \
  -e KATALON_USER_ID=<JENKINS_USER_ID> \
  --shm-size=2g \
  -v "$(pwd)":/tmp/project \
  katalonstudio/katalon:10-latest \
  katalonc.sh \
  -projectPath=/tmp/project \
  -testSuitePath="Test Suites/New Test Suite" \
  -browserType="Chrome" \
  -executionProfile="default"
```
