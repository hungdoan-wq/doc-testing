---
title: Work with BDD feature files in Katalon Studio
---

Learn how to work with BDD feature files in **Katalon Studio**.

## Add feature files

This section shows you how to add feature files in **Katalon Studio**. Steps in the scenario will then be defined by step definitions.

1. In **Katalon Studio**, open a Katalon project. Then, navigate to **Test Explorer > Include > features**. Right-click on the features folder and choose **New Feature File**.
<img alt="create new feature file" src="/96273b70-22b2-11ed-9930-0242fe3e4a3f/ks-840-create-new-feature-file.png" width="500px" />

2. **The New Feature File** dialog appears. Give your feature file a name. You may also choose to **Generate sample Feature template**. This option ensures that the created feature file matches with BDD convention.
<img alt="new feature file" src="/96223260-22b2-11ed-9930-0242fe3e4a3f/ks-840-new-feature-file.png" width="300px" />
A new feature file is created.
<img alt="new feature file" src="/961f7340-22b2-11ed-9930-0242fe3e4a3f/ks-840-new-feature-file-sample.png" width="500px" />

3. Add your scenarios to the feature file following the sample format:

    - `Feature`: List of scenarios.
    - `Scenario`: Business rule through list of steps with arguments.
    - `Scenario Outline`: Used where test data is replaced with multiple sets of data for each run of a test script.
    - `Given`: Precondition step.
    - `When`: Key actions.
    - `Then`: Observe outcomes or validation.
    - `And`, But: Enumerate more **Given, When, Then** steps.
    - `Background`: List of steps run before each of the scenarios.
    - `Examples`: Container for data set.
    - `Tags/ Labels`: To group relevant scenarios. Using tags is a good way to organize features and scenarios. A feature or scenario may have multiple tags.

For example, to test the Login feature of the **Katalon Demo Cura System** (`[https://katalon-demo-cura.herokuapp.com/](https://katalon-demo-cura.herokuapp.com/)`), there are two scenario outlines: login with a valid credential, and login with an invalid credential. In each scenario, there are specific **Given, When, Then** steps as shown below:

<img alt="log in feature file" src="/96219620-22b2-11ed-9930-0242fe3e4a3f/ks-840-login-feature-file.png" width="500px" />

**Sample Feature File Script:**

```jsx
#Author: [your.email@your.domain.com](mailto:your.email@your.domain.com)
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@Login
Feature: Login Feature

  As a user, I want to login to Cura System
  so that I can make an appointment.

  @Valid
  Scenario Outline: Login with a valid credential
    Given I navigate to Cura System homepage
    When I click Make Appointment button
    And I enter username <username> and password <password>
    And I click Log in button
    Then I should be able to login successfully

    Examples:
      | username | password           |
      | John Doe | ThisIsNotAPassword |

  @InValid
  Scenario Outline: Login with an invalid credential
    Given I navigate to Cura System homepage
    When I click Make Appointment button
    And I enter an invalid username <username> and password <password>
    And I click Log in button
    Then I should NOT be able to login successfully

    Examples:
      | username | password           |
      | Jane Doe | ThisIsNotAPassword |
```

## Maintain feature files

:::note
- **Katalon Studio** code inspection can detect and highlight any missing step definitions in the feature file to help you create the required step definitions.
:::

For better management, organize your feature files with a multi-level system. A feature file can contain many scenarios, however, it's recommended you have one scenario per feature file for easy maintenance.

In **Katalon Studio**, there are three options to help you maintain the feature file. Right-click anywhere in the feature file editor view and choose from the following options:

<img alt="feature file editor view in **Katalon Studio**" src="/1235f3a0-c155-11ed-a4d3-0242cfbc79b5/ks-maintain-feature-file.png" width="500px" />


| Option | Description |
| --- | --- |
| Pretty Format | Re-do the format when the current format is not organized properly. |
| Find Step | Find relevant step of current Gherkin step in existing Step Definitions files. |
| Recalculate steps | Recalculate steps in the feature file when there are changes in Step Definitions. |

## Define steps

### Step definitions

After you added your feature files, you need to define and link steps before using the feature files.

Each Gherkin step in the feature files needs to be defined as a set of programming code so that **Katalon Studio** can execute the action of that step. These step definitions can be implemented in the **Keyword** folder by leveraging the **Script Mode**.

**Katalon Studio** built-in keywords can also be re-used in **Step Definition** files as well. When **Katalon Studio** executes any feature files in a test case, it also looks for the matching step definitions in the source folder.

**Step Definitions** can be written in any Cucumber-supported programming languages, including Groovy and Java.

For example, for two scenario outlines (Login with a valid credential and login with an invalid credential), there are six (6) steps defined as shown below:

- Given I navigate to **Cura System** homepage
- When I click **Make Appointment** button
- And I enter username `<username>` and password `<password>`
- And I click **Log in** button
- Then I should be able to login successfully
- Then I should NOT be able to login successfully

<img alt="step definition" src="/96253fa0-22b2-11ed-9930-0242fe3e4a3f/ks-840-step-definition.png" width="500px" />

**Step Definitions Sample Script**

```jsx
class MyStepDefinition {

    /**
     * The step definitions below match with Katalon sample Gherkin steps
    **/

    @Given("I navigate to Cura System homepage")
    def I_navigate_to_Cura_System_homepage() {

        WebUI.openBrowser("https://katalon-demo-cura.herokuapp.com/"){"\n"}{"        "}//WebUI.waitForPageLoad(30)
    }

    @When("I click Make Appointment button")
    def I_click_makeAppointment_button() {

        WebUI.click(findTestObject('Page_CURA Healthcare Service/a_Make Appointment'))
    }

    @And("I enter username (.) and password (.)")
    def I_enter_valid_username_password(String username, String password) {

        WebUI.setText(findTestObject('Page_CURA Healthcare Service/input_userName'), username)
        WebUI.setText(findTestObject('Page_CURA Healthcare Service/input_password'), password)
    }

    @And("I click Log in button")
    def I_click_login_btn() {

        WebUI.click(findTestObject('Page_CURA Healthcare Service/button_Login'))
    }

    @Then("I should be able to login successfully")
    def I_login_successfully() {

        WebUI.click(findTestObject('Page_CURA Healthcare Service/button_Login'))
        WebUI.verifyTextPresent('Make Appointment', false)
        WebUI.closeBrowser()
    }

    @And("I enter an invalid username (.) and password (.*)")
    def I_enter_invalid_username_password(String username, String password) {

        WebUI.setText(findTestObject('Page_CURA Healthcare Service/input_userName'), username)
        WebUI.setText(findTestObject('Page_CURA Healthcare Service/input_password'), password)
    }


    @Then("I should NOT be able to login successfully")
    def I_login_unsuccessfully() {

        WebUI.verifyTextPresent('Login failed! Please ensure the username and password are valid.', false)
        WebUI.closeBrowser()
    }

}

```

#### How to define steps

Steps in the feature files must be defined before use.

1. In **Test Explorer**, navigate to the Include/scripts/groovy folder and create a sub-package. Then, right-click on the newly created package and choose **New > Step Definition**.
2. In the displayed Keyword dialog, choose your **Package**, then enter your **Class Name**. You can also enable the option to Generate sample `@Given`, `@When`, `@Then` steps.

<img alt="keyword" src="/96262a00-22b2-11ed-9930-0242fe3e4a3f/ks-840-keyword.png" width="500px" />

3. Once you are done, click **OK**.

<img alt="new step definition" src="/96284ce0-22b2-11ed-9930-0242fe3e4a3f/ks-840-new-step-definition.png" width="500px" />

### Set the default package for step definitions

- Starting with **Katalon Studio** 9.0.0 and later, setting the default package for step definitions is required.

To help Cucumber locate the step definitions file, you can use the `CucumberKW.GLUE` keyword. The default value of `CucumberKW.GLUE = ['']` is all packages, which means the test engine takes time to scan through all packages. To speed things up, you can specify the package locations, for example, `CucumberKW.GLUE = ['package1', 'package2']` to narrow down where to find the step definitions.

We recommend putting the script declaring the package in a test listener.

```jsx
import com.kms.katalon.core.annotation.AfterTestCase
import com.kms.katalon.core.annotation.BeforeTestCase
import com.kms.katalon.core.context.TestCaseContext
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW

class NewTestListener {
    @BeforeTestCase
    def beforeTestCase(TestCaseContext testCaseContext) {
        CucumberKW.GLUE = ['package1', 'package2']
    }
}
```
Starting **Katalon Studio** 9.0.0 and later, for BDD projects created in version 8.x to work as before, you also need to include the following `@BeforeTestCase` listener:

```jsx
@BeforeTestCase
def beforeTestCase(TestCaseContext context) {
  CucumberGlueGenerator.addDefaultPackages();
}
```

However, if you are using KRE to run BDD projects, we recommend that you explicitly specify your step definition packages. See [Best Practices for Handling Glue](#best-practices-for-handling-glue) below for more details.

### Best Practices for Handling Glue

- The glue should be assigned to the step definition packages of the feature files, not the packages of the Cucumber runner.

- If the glue is incorrectly set to the runner package (such as `glue="com.vv.sailorApp.Runners"`), the test may pass but no steps will be run. To fix this, ensure the glue points to the correct step definition packages, for example:

    ```jsx
    glue = ['com.vv.sailorApp.StepDefinitions', 'otherStepDefinitionPackages']
    ```

- Make sure all Cucumber hooks, such as `@Before` and `@After`, are placed in the correct step definition folders. For example, move all the hooks from the files `Test Listeners/SetupTestListener`, `Keywords/com.vv.listener/InitialSetup.groovy` to the step definition folders, such as:

    ```jsx
    Include/scripts/groovy/CucumberHooksDefinitions/InitialSetup.groovy
    Include/scripts/groovy/CucumberHooksDefinitions/SetupTestListener.groovy
    ```

- Add glue to these hooks in your Cucumber runner as well:

    ```jsx
    glue = ['stepDefinitionPackage1', 'Include/scripts/groovy/CucumberHooksDefinitions', 'otherStepDefinitionPackages']
    ```

- For other Cucumber elements that are not executed via the Cucumber runner, you can add glue in setup steps like this:

    ```jsx
    @BeforeTestCase
    def beforeTestCase(TestCaseContext context) {
    CucumberKW.GLUE = ['<all the step definition packages>']
    }
    ```

- When running tests in **Katalon Runtime Engine (KRE)**, avoid using `CucumberGlueGenerator.addDefaultPackages()` in **Test Listeners**.

    Always specify step definition packages explicitly, as automatic package discovery can cause `NoClassDefFoundError` due to class isolation in **KRE**. For example:
    
    ```jsx
    @CucumberOptions(glue = "com.yourcompany.steps")
    ```

## Run feature files

**Katalon Studio** allows you to run the feature files instantly by itself to make sure it works properly.

To do so, go to **Include > features** and open the desired feature file. Click the **Run** button on the main toolbar, as shown below:

<img alt="Steprun feature files in **Katalon Studio**." src="/84081eb0-be4c-11ed-825f-0242cfbc79b5/run-feature-file.png" width="500px" />


## Set up Cucumber hooks

### Create Cucumber feature files

1. To create a Cucumber feature file, go to **File > New > BDD Feature File**.

<img alt="new BDD feature file" src="/96223260-22b2-11ed-9930-0242fe3e4a3f/ks-840-new-feature-file.png" width="500px" />

    Tick the **Generate sample Feature template** option for a sample feature file.The script below is a generated sample feature template:

    ```jsx
    #Sample Feature Definition Template
    @tag
    Feature: Title of your feature
    I want to use this template for my feature file

    @tag1
    Scenario Outline: Title of your scenario outline
        Given I want to write a step with <name>
        When I check for the <value> in step
        Then I verify the <status> in step

        Examples:
        | name  | value | status  |
        | name1 |     5 | success |
        | name2 |     7 | Fail    |
    ```

2. To create step definitions, go to **File > New > Groovy Script**.
<img alt="Create step definition" src="/11a8ced0-c155-11ed-a4d3-0242cfbc79b5/KS-create-step-defintions.png" width="500px" />

:::tip Attention
In previous versions, you can use custom keywords in BDD tests when the step definition belongs to the default package. From version 9.0.0 onwards, you cannot run BDD tests with custom keywords. This will be fixed in upcoming releases.
:::

    Tick the **Generate sample @Given, @When, @Then steps** for sample step definitions.The script below is a generated sample `@Given`, `@When`, `@Then` steps:

    ```jsx
    class Sample {

        /**
        * The step definitions below match with Katalon sample Gherkin steps
        */
        @Given("I want to write a step with (.*)")
        def I_want_to_write_a_step_with_name(String name) {
            println name
        }

        @When("I check for the (\d+) in step")
        def I_check_for_the_value_in_step(int value) {
            println value
        }

        @Then("I verify the (.*) in step")
        def I_verify_the_status_in_step(String status) {
            println status
        }
    }
    ```

### Add Cucumber hooks

1. Create another step definition or a custom keyword that includes the Cucumber hooks as shown below:

<img alt="Step definitions with Cucumber hooks in **Katalon Studio**." src="/f7c607b0-51f2-11ee-bc71-0242c7a41fd4/ks-new-cucumber-hooks-script.png" width="500px" />

2. Enter Cucumber hooks into the new step definition. 

    For example, to add `@Before` and `@After` scenario hooks, copy and paste the following script into the feature file:
    
    ```jsx
    class SampleTestHook {
        @Before
        public void beforeScenario(Scenario scenario) {
            println 'This is a before scenario method: ' + scenario.getName()
        }

        @After
        public void afterScenario(Scenario scenario) {
            println 'This is a after scenario method: ' + scenario.getName()
        }
    }
    ```