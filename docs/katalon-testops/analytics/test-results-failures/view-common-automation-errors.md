# Analyze Failure Patterns

This document explains how to analyze failure patterns to identify deep root causes behind test failures. Instead of investigating each failed test in isolation, TestOps helps you detect patterns across failures, enabling faster, higher-impact troubleshooting.

By grouping failures with similar characteristics—such as shared error messages, execution status, or failure rates—you can focus on systemic issues that affect many tests at once and prioritize fixes more effectively.

---

## Use reports to detect patterns

TestOps provides multiple reports that help you detect recurring failure patterns from different angles.

### Common Automation Error Report

Use this report to analyze automation failures caused by tooling, scripts, environments, or infrastructure.

Rather than listing failures one by one, the report **automatically groups similar error messages**, giving you a consolidated view of the most frequent and impactful automation issues. This makes large-scale automation failure analysis clearer and more actionable.

**Key insights provided:**

- **Error Distribution by Failure Category** – Breakdown of automation failures by category (Environment, AUT Issue, Test Script, etc.).
    
- **Common Errors** – Number of distinct automation error groups.
    
- **Impacted Test Cases** – Number of test cases affected by each error group.
    
- **Common Error Data Table** – Error details including occurrence count, affected test cases, sample messages, and failure categories.
    

#### Report view modes

The report offers two view modes depending on your analysis goal:

**Latest Error Only (Default)**  
Use this view to understand what is currently failing:

- Shows only the most recent occurrence of each grouped error.
    
- Charts reflect latest failures only.
    
- Impacted test cases are calculated from the latest occurrences.
    
- Selecting an error opens the most recent failed run.
    

**All Errors**  
Use this view to assess recurring or historical issues:

- Shows all occurrences of each error across the selected timeframe.
    
- Charts reflect both current and historical failures.
    
- Impacted test cases include all affected tests.
    
- Selecting an error opens the **Test Result Analysis report** filtered by that error, allowing deeper investigation across runs and test cases.
    