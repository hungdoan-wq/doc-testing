---
title: Data-driven testing best practices
---

This document explains the best practices when working with data-driven testing.

:::tip Requirements
- **Katalon Studio 7.0+** (Free or Enterprise edition)
- A **Test Data sheet**: Excel/CSV with user credentials
- Captured **Test Objects**: Login form elements (username, password, login button).
:::

Data-driven testing works best in testing scenarios involving multiple data sources, such as various logins with different user credentials. Testing approach becomes simple: Design a single, data‑driven login test case that reads user credentials from an external data source (e.g., Excel or CSV), and execute it with multiple data rows representing valid users, invalid credentials, and locked accounts.
    
By parameterizing the username, password, and expected outcome (SUCCESS, FAILURE, ACCOUNT_LOCKED), you avoid creating 5+ separate test cases, improve coverage of positive and negative scenarios, and make it easy to add or update user types simply by editing the test data file instead of changing test logic.

## Get Started

Assume that there's a data structure as below:
    
```jsx
| username | password | expectedResult |
|---|---|---|
| john@test.com | Pass123! | SUCCESS |
| jane@test.com | Pass456! | SUCCESS |
| invalid@test | WrongPass | FAILURE |
| locked@test | Pass789! | ACCOUNT_LOCKED |
```

### Step 1: Create a test data file from the test data sheet

1. Go to **File > New > Test Data**

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/data-driven-testing-best-practices-3.png" alt="Data-Driven Testing best practices image 3" width="500px" />
<br/>

2. Name: `LoginCredentials`
    
3. Select **Excel File** (or CSV)
    
4. Browse and select your Excel file
    
5. Check **"Use first row as header"**
    
6. Click **OK** and save
    

### Step 2: Create a test case with variables

1. **File > New > Test Case** → Name: `Login_DDT`
    
2. Click **Variables** tab
    
3. Add variables:
    
|Name|Type|Default|
|---|---|---|
|username|String|[john@test.com](mailto:john@test.com "mailto:john@test.com")|
|password|String|Pass123!|
|expectedResult|String|SUCCESS|

### Step 3: Write the script for the test case

This example script below navigates to the login site, input credentials, and validate if the outcome is as described in the test data sheet.

```jsx
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

// Navigate to login page
WebUI.navigateToUrl('https://example.com/login')

// Fill login form with variables
WebUI.setText(findTestObject('Object Repository/Username_Input'), username)
WebUI.setText(findTestObject('Object Repository/Password_Input'), password)
WebUI.click(findTestObject('Object Repository/Login_Button'))

// Verify result based on expected outcome
if (expectedResult == 'SUCCESS') {
    WebUI.verifyElementPresent(findTestObject('Object Repository/Dashboard_Page'), 5)
    println("✓ Login successful for: ${username}")
} else if (expectedResult == 'FAILURE') {
    WebUI.verifyElementPresent(findTestObject('Object Repository/ErrorMessage'), 5)
    println("✓ Error handling verified for: ${username}")
} else if (expectedResult == 'ACCOUNT_LOCKED') {
    WebUI.verifyElementPresent(findTestObject('Object Repository/LockedMessage'), 5)
    println("✓ Account locked message verified for: ${username}")
}
```

### Step 4: Configure data binding

1. In test case, click **Data Binding** tab
    
2. Click **Add** in Test Data section
    
3. Select `LoginCredentials` file
    
4. In **Variable Binding** section:
    
    - Map `username` → Column: `username`
        
    - Map `password` → Column: `password`
        
    - Map `expectedResult` → Column: `expectedResult`
        

<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/data-driven-testing-best-practices-2.png" alt="Data-Driven Testing best practices image 2" width="500px" />
<br/>

5. Click **Map All** (if column names match variable names)
    


<img src="https://tw-cdn.katalon.com/katalon-studio/best-practices/data-driven-testing-best-practices-1.png" alt="Data-Driven Testing best practices image 1" width="500px" />
<br/>

### Step 5: Execute the test case

1. Click **Run** button
    
2. Katalon executes test case once for each data row (4 iterations)
    
3. View results in **Log Viewer**:
    

```jsx
Test Cases/Login_DDT (2.5s)
├── Iteration 1 - username=john@test.com, password=Pass123! (0.6s) - PASSED
├── Iteration 2 - username=jane@test.com, password=Pass456! (0.6s) - PASSED
├── Iteration 3 - username=invalid@test, password=WrongPass (0.7s) - PASSED
└── Iteration 4 - username=locked@test, password=Pass789! (0.6s) - PASSED
```

### Step 6: Check for errors

```jsx
// Validate data before execution
if (username == null || username.isEmpty()) {
    throw new Exception("Username cannot be empty") 
    }
if (!(username =~ /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    throw new Exception("Invalid email format: ${username}") 
    } 
// Handle missing password
String pwd = (password == null || password.isEmpty()) 
    ? "DefaultPass123" 
    : password println("✓ Data validation passed for: ${username}")
```

## Common pitfalls to avoid

When designing variables and referencing external data files for DDT, adherence to clean code naming conventions is essential:

1. **Global Variables:** When declaring global variables, use the **Uppercase** string convention.
    
2. **Local/Test Cases Variables:** Use **CamelCase** when declaring local or test case variables.
    
3. **Variable Naming:** Avoid using variable names that have **no meaning** or using **keywords**. Instead, ensure that you add appropriate comments or descriptions to define the variable's purpose.
    
4. **Data File References:** Ensure that you select the **"Use relative path"** option in the file information settings when referencing data files.

## Scaling recommendations

- Organize data files by feature (Authentication/, Checkout/, etc.)
    
- Use database data sources for large datasets (100+ rows)
    
- Implement CI/CD integration to run DDT automatically
    
- Use Katalon TestOps for centralized reporting

See all best practice documents at [Katalon products best practices](/katalon-platform/katalon-products-best-practices).