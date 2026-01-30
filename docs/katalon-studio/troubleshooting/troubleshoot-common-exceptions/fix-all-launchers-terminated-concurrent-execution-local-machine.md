---
title: How to fix “All Launchers Terminated” errors when running concurrent test sessions on a local machine
---

## Condition
You may see the error *“All launchers terminated”* when trying to run multiple concurrent test sessions on your local machine.

## Cause
There are two main reasons for this error:
1. Insufficient RAM capacity
   - Running multiple sessions requires more memory.
   - As a rule of thumb, each concurrent session needs 2 GB of RAM.
   - For example: 3 sessions → 6 GB RAM required (3 × 2 GB). See Katalon’s [system requirements guide](/katalon-studio/supported-environments-for-katalon-studio-and-katalon-runtime-engine-kre#system-requirements) for details.

2. Unsupported practice
   - Running multiple tests in the same project location is not supported by Katalon and may cause failures.

## Solution
To avoid this error, try the following approaches:

#### Option 1: Upgrade local resources
Make sure your machine has enough RAM to handle the number of concurrent sessions you want to run.

#### Option 2: Use Jenkins for concurrent executions

Instead of running concurrent tests locally, use Jenkins as a CI/CD tool.

Jenkins will:
- Check out your project repositories into separate workspaces.
- Allow you to run multiple test projects in parallel, each in its own location.

This avoids conflicts and improves stability. Refer to these guides for setup: [Use Jenkins with Katalon Studio](/katalon-studio/integrations/cicd-integrations/jenkins-integration/use-katalon-plugins-for-jenkins-integration/use-katalon-plugins-for-jenkins-integration-on-windowsmacos)