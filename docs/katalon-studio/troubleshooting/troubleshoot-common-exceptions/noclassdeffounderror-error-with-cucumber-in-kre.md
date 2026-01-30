---
title: '"NoClassDefFoundError" error with Cucumber in KRE'
---

When running **Cucumber** tests in **Katalon Runtime Engine (KRE)**, you may encounter:

java.lang.NoClassDefFoundError: com/nimbusds/oauth2/sdk/ParseException

## Cause

This error occurs when using `CucumberGlueGenerator.addDefaultPackages()` in **Test Listeners**, which causes class loading conflicts in KRE.

## Remedy

Remove `CucumberGlueGenerator.addDefaultPackages()` from **Test Listeners**. Step definition packages must now be explicitly specified in `@CucumberOptions.`:

```jsx
@CucumberOptions(
    features = "Include/features",
    glue = "your.stepdefinitions.package"
)
```

When running tests in **Katalon Runtime Engine (KRE)**, class isolation requires explicit package specifications. Automatic package discovery can lead to `NoClassDefFoundError` exceptions.