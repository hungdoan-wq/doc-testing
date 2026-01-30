---
title: Katalon Studio GitHub Action
---

This document explains how to set up **Katalon Studio GitHub Action** to automate your development workflow.

The **Katalon Studio GitHub Action** available on the [GitHub marketplace](https://github.com/marketplace/actions/katalon-studio) allows you to automate your **Katalon Studio** project executions.

:::note requirement
- An active **Katalon Runtime Engine (KRE) license**.
- **Katalon API key** set up in **TestOps**, and add this key to your GitHub encrypted secrets. Learn to create an API key at [Katalon API Key in Katalon TestOps](/katalon-platform/administer/profile/katalon-api-key-in-katalon-testops), and learn to include this in GitHub encrypted secrets at [Encrypted secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets).
:::

## Action file samples

The below example is listed on [Katalon Studio GitHub Action marketplace](https://github.com/marketplace/actions/katalon-studio). Copy and paste into a `.yml` file in the `.github/workflows` directory.

```jsx
name: CI Sample
on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: macos-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v4
    - name: Katalon Studio GitHub Action
      uses: katalon-studio/katalon-studio-github-action@v4.0
      with:
          version: '${{ your_KRE_version }}'
          projectPath: '${{ github.workspace }}'
          args: '
            -noSplash 
            -retry=0 
            -testSuitePath='${{ KS_path_to_testSuite }}'
            -browserType="Chrome (headless)"
            -apiKey= ${{ your_API_key_from_TestOps }}
            --config -webui.autoUpdateDrivers=true
            '
```

To use these samples, make sure to have either a test suite or a test suite collection in your project, and configure these argument/actions to fit your project's:

| Argument/Actions | Example |
| -- | -- |
| `-testSuitePath` | `-testSuitePath: 'Test Suites/Simple Test Suite'` |
| `-testSuiteCollectionPath` | `-testSuitePath: 'Test Suites/Simple Test Suite Collection'` |
| `-apiKey` | `-apiKey= paste_your_generated_API_key_in_testops` |
| `version` | `version: 'your_KRE_version'` |
| `projectPath` | Leave as-is in the sample code below: `projectPath: '${{ github.workspace }}'` |

Learn more about **GitHub Action workflows** at [Workflows and actions](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows).