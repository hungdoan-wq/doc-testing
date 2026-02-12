# Tutorial: Investigate Failures 

Outline:

This document explains how to investigate failed tests.
  
Step 1: detect failed test

When QA detects failed tests in any entry point:
  - **Executions**: quickly see a list of all executions
  - **Live monitor**: see today's executions
  - Trends & analytics + test results analysis: see failure distribution
  - Test run analysis: see test run statuses by day, a way to prioritize investigating
  - Test failure analysis: see fail % distribution, to learn which is flaky, which failed the most, which has low fail % which is likely recently failed.

Step 2: view test run details

They can then navigate to that **test runs details** to start investigating. 
Once they're there, switch the tabs to see:
  - overview: see common error. if this is a common error => can go through common error report for a thorough resolution
  - unstable (flaky): save for later, as this might need stabilized
  - this failure doesn't share anything: can be prioritized

Step 3: investigate with AI

- To investigate/understand failures:
  - AI-analysis: root cause & actions

Step 4: investigate manually
  - logs, traces, context

Step 5: determine error type and take action:
  - **Product Defect**: Application behaves incorrectly → Create defect, attach evidence
  - **Test Issue**: Faulty assertions, locators, or logic → Fix test and re-run
  - **Environment Issue**: Infrastructure, configuration, or network failures → Escalate to DevOps / infra team
  - **Flaky Test**: Intermittent failures without code changes → Switch to detect flakiness workflow before fixing. View more details at [Detect Flakiness](/katalon-testops/analytics/test-results-failures/investigate-flaky-tests.md).
    
Document findings directly in TestOps for future reference.

---

## Investigate root cause

Once failure patterns are identified, use the grouped insights to guide root cause investigation.

Instead of debugging each test separately:

- Focus on **high-frequency error groups**
- Examine **shared characteristics** such as environment, configuration, or timing
    
- Investigate representative samples from each pattern
    

This approach helps you:

- Identify systemic issues affecting multiple tests
    
- Reduce Mean Time to Repair (MTTR)
    
- Prioritize fixes that resolve the largest number of failures
<!--

This document epxlains how to investigate failed tests root cause using the Test Failures Analysis Report.

:::requirements
- Access to Katalon TestOps with Viewer role or higher. See [Roles in TestOps] for more information.
- At least one test run with a failed test result
:::

## Overview

Investigating test failures is often time-consuming and repetitive. TestOps accelerates this process by reducing **Mean Time to Identify (MTTI) by up to 60%** through:

- **Dashboards & Reports** — Quickly locate and navigate failures
    
- **AI-Powered Failure Analysis** — Automatically analyze logs, scripts, and screenshots with plain-English explanations
    
- **AI Error Grouping** — Categorize failures into common root-cause types (environment, timing, selectors, etc.)
    
- **Stability Intelligence** — Distinguish real defects from flaky or unreliable tests
    

This workflow is especially useful for:

- Manual testers unfamiliar with logs or stack traces
    
- Automation engineers triaging large failure volumes
    
- Teams investigating unfamiliar or intermittent failures
    
- Rapid triage before deep debugging
    
## Failure Investigation Workflow

### Step 1: Detect and Prioritize Failures

Failures can be discovered from multiple entry points:

- **Test Runs List**  
    Executions → Test Runs
    
- **Dashboards**  
    Live Monitor Dashboard, Quality Trends Dashboard
    
- **Reports**  
    Test Case Health Analysis, Test Case Failure Analysis, Test Runs Analysis
    

Use filters (test run, build, date range, suite) to narrow results.

:::tips
Prioritize failures that are:
- Grouped under the same error category (systemic issues)
- Newly failing tests that previously passed
- Blocking critical user flows (login, checkout, payments)
- Reproducing consistently across multiple runs  
:::
    

Once prioritized, open a failed test result to start investigating.

### Step 2: Review Test Result Details

The **Test Result Details** page is the central investigation workspace.

**Overview tab highlights:**

- Failure message
- Stack trace preview
- Execution timing and metadata
- Linked test run, build, and release

<img/>

Read the failure message carefully — it provides the first root-cause signal.

### Step 3: Analyze with AI (Recommended First)

Click **Analyze with AI** in the **Test Result Details page**.

AI automatically reviews:

- Execution logs and stack traces
- Screenshots and scripts
- Historical failure patterns

<img/>

:::note
AI analysis is a starting point, not the final verdict. Always validate with evidence.
:::

### Step 4: Validate with Logs and Stack Traces

Use AI guidance to focus your manual review.

- Open the **Execution Logs** tab
- Locate the **first error** (often the root cause)
- Review the full stack trace to identify:
    - Exception type
    - File name and line number
    - Failing test step

Confirm whether logs align with AI categorization and adjust if necessary.

### Step 5: Review Execution Context

Context often reveals environment- or configuration-related issues.

Check:

- **Environment details** (browser, OS, execution profile)
- **Screenshots / Videos** for UI state at failure
- **Test data and configuration**
- **Build or release metadata**, if linked

Visual evidence frequently exposes issues logs cannot.

### Step 6: Determine Root Cause and Take Action

Classify the failure before acting:

- **Product Defect**: Application behaves incorrectly → Create defect, attach evidence
- **Test Issue**: Faulty assertions, locators, or logic → Fix test and re-run
- **Environment Issue**: Infrastructure, configuration, or network failures → Escalate to DevOps / infra team
- **Flaky Test**: Intermittent failures without code changes → Switch to detect flakiness workflow before fixing. View more details at [Detect Flakiness](/katalon-testops/analytics/test-results-failures/investigate-flaky-tests.md).
    
Document findings directly in TestOps for future reference.

## Best Practices

### Triage-First Investigation

Always triage before deep investigation:

- Use **AI analysis** to eliminate obvious causes
- Check **stability indicators** before assuming product defects
- Avoid deep debugging of flaky or unreliable tests

### Use stability indicators to set priority

Not all failures deserve equal effort.

**High priority**

- Stable tests with new failures
- Tests with high historical pass rates

**Medium priority**

- Moderately reliable tests (confirm patterns first)
    
**Low priority**

- Flaky or always-failing tests  
    → Fix reliability before investigating application behavior
    
### Balance AI and Manual Investigation

**Trust AI when:**

- Confidence scores are high
- Errors match common patterns
    
**Use manual investigation when:**

- Business logic is involved
- AI confidence is low
- Failures are critical or production-impacting

<!--
## Get Started:

### Step 1: Detect and prioritize failures

When a test fails, it appears on multiple locations:
- **Test Runs List**: **Executions → Test Runs → Test Run Overview**. The widget should display failures if any. Navigate to the **Test Results** tab to view the particular failure details.
- **Dashboards**: Live Monitor Dashboard or Quality Trends Dashboard show failure summaries with clickable links to results. Use the Live Monitor Dashboard to identify patterns—failures from one test suite, environment, or build.
- **Test Case Health Analysis Report/Test Case Failure Analysis Report**: Navigate from test case failure to specific execution results, and investigate root cause.

:::tips
- The Test Run Overview tab provides context for failures, with the error auto-categorized by AI to help you identify if this is an isolated issue, or a systemic problem.
- Use filters such as test run, build, date range, and test suite to quickly narrow down data.
- Prioritize:
  - Failures/Error in the same group => there might be underlying systemic issue that once solved, resolves multiple failures at once.
  - New failures for previously passed tests (tests with `new failure` smart tag)
  - Failures blocking critical user flows (login, checkout, payments)
  - Consistent failures across multiple test runs
:::

Once you've selected a failed test to investigate, let's examine the details.

## Step 2: Open Test Result Details

The Test Result Details page is your investigation workspace, providing all information about a single test execution.

### 2.1. Navigate to Test Result Details

After clicking a failed test result in Step 1, the Test Result Details page loads. This page contains:

### 2.2. Review Overview Tab

The Overview tab displays:

- Failure Message: The primary error or exception that caused the failure

- Stack Trace Preview: First few lines of the stack trace (click "View Full Trace" for complete trace)

- Execution Summary: Start time, end time, duration

- Associated Objects: Test run, build, release (if linked)

Take a moment to read the failure message—this is your first clue about what went wrong. Common failure messages include:

- "Element not found: #submitButton" (locator issue)

- "Expected: 100, Actual: 99" (assertion failure)

- "Timeout after 30 seconds" (timing issue)

- "Connection refused" (network/environment issue)

Now that you have context, let's use AI to quickly categorize this failure.

## Step 3: Analyze the Failure with AI (Recommended)

### 3.1. Click "Analyze with AI" Button

In the Test Result Details header or action area, locate and click the "Analyze with AI" button. The AI will analyze error logs, stack traces, and failure patterns—this typically takes 5-10 seconds.

### 3.2. Review AI-Generated Output

The AI provides three key pieces of information:

Failure Category:

The AI categorizes the failure into one of 7+ predefined categories:

- Environment Issue - Missing dependencies, configuration problems

- Timing Issue - Race conditions, synchronization failures

- Broken Selector - UI element not found, locator issues

- Assertion Error - Expected vs. actual value mismatch

- Network Issue - API timeouts, connectivity problems

- Permission Issue - Access denied, authentication failures

- Data Issue - Invalid test data, database problems

Plain-English Summary:

A 2-3 sentence explanation of what went wrong, written in non-technical language accessible to manual testers.

Example: "The test failed because the 'Submit' button could not be found on the checkout page. This typically happens when the page layout changes or when the element takes longer to load than expected."

Actionable Suggestions:

A bulleted list of 2-4 specific next steps prioritized by likelihood:

- Check if the page layout was recently updated in the application

- Increase wait time for the element to appear

- Verify the element locator is still valid

### 3.3. Use AI Insights to Guide Investigation

Based on the AI category and suggestions:

- If the category matches your hypothesis: Proceed to Step 4 (examine logs) focusing on the areas the AI identified

- If the category is unexpected: Validate the AI's assessment by checking the specific evidence it mentions

- Copy AI summary: Use the plain-English summary in defect reports or team communications

🤖 AI-Powered Feature

This workflow includes AI-powered failure analysis that automatically categorizes errors and provides plain-English explanations, reducing Mean Time to Identify root causes by 60%. [Learn more about AI analysis →](/docs/customization/ai-test-failure-analysis)

💡 Pro Tip: Even if you're an experienced engineer, using AI analysis first helps document your findings in accessible language for manual testers and stakeholders. Copy the AI summary to your defect report or Slack message to communicate issues clearly.

What if AI categorization seems wrong?

AI analysis is a starting point, not the final answer. If the suggested category doesn't match your observations:

- Proceed to manual investigation (Steps 4-6) to gather more evidence

- Use the AI suggestions as hypotheses to test

- The AI analyzes logs and stack traces but may miss application-specific context only you know

Now that you have an AI-generated hypothesis, let's validate it with detailed log examination.

## Step 4: Examine Logs and Stack Traces

With AI analysis providing direction, validate findings by examining the raw execution logs and stack traces.

### 4.1. Navigate to Execution Logs Tab

Click the Execution Logs tab. This displays complete log output including info messages, warnings, errors, and stack traces in chronological order.

### 4.2. Identify Error Messages

Use search/filter to find error messages:

- Lines marked ERROR or FAIL

- Exception names (NoSuchElementException, AssertionError, TimeoutException)

- Red-highlighted text

Focus on the first error—later errors are often cascading effects.

### 4.3. Analyze Stack Traces

Stack traces show method calls leading to failure:

- Exception type/message (top): What went wrong

- Location in test code (middle): Which step triggered error

- Framework calls (bottom): Internal operations

Extract: file name, line number, method name.

Cross-reference with AI: Does the stack trace confirm the AI category? (e.g., "Broken Selector" + NoSuchElementException = confirmation)

💡 Pro Tip: Copy error messages and stack traces for defect reports and team sharing.

Now let's gather execution context.

## Step 5: Review Test Execution Context

Understanding execution conditions helps identify environment-specific or configuration-related failures.

### 5.1. Check Execution Environment

Review the Key Information panel:

- Browser/Device: Which browser, version, or device?

- Operating System: OS type and version

- Execution Profile: Which configuration was active?

Failures may occur only in specific browsers or OS versions. If AI suggested "Environment Issue," verify if environment details reveal missing dependencies.

### 5.2. Review Screenshots and Videos

If available, check the Screenshots/Videos tab for visual evidence:

- Visual state at failure: Is page correct? Elements visible?

- Unexpected popups or overlays blocking elements?

- Wrong page loaded (navigation failure)?

- Timing issues (element not rendered)?

Screenshots reveal UI issues logs cannot capture.

### 5.3. Verify Test Data and Configuration

Check test data and configuration:

- Test Data: Valid dataset or input values?

- Base URL: Correct environment (staging, QA, production)?

- Authentication: Valid credentials or tokens?

Common issues: outdated test data, wrong environment URL, expired credentials.

💡 Pro Tip: If your test result is linked to a Build or Release, check the Build details page for configuration values.

You've now gathered comprehensive evidence. Time to determine the root cause.

## Step 6: Determine Root Cause and Take Action

With all evidence collected, classify the failure type and take appropriate action.

### 6.1. Classify the Failure Type

Based on your investigation, categorize the failure into one of four types:

Product Defect (Application Bug):

- Application behaves incorrectly or unexpectedly

- Expected functionality is broken

- UI elements missing or positioned incorrectly

- API returns wrong status code or data

- Action: Create defect ticket, link to test result (see [Creating Defects from Test Results](/docs/test-failures/creating-defects))

Test Issue (Test Code Problem):

- Test has incorrect assertions or logic

- Locators are outdated (UI changed but test didn't)

- Test data is invalid or expired

- Test steps are in wrong order

- Action: Update test code, commit fix, re-run test

Environment Issue (Infrastructure Problem):

- Dependencies missing (libraries, drivers, databases)

- Network connectivity problems

- Configuration errors (wrong URLs, ports)

- Resource constraints (memory, CPU)

- Action: Contact DevOps or infrastructure team, document issue

Flaky Test (Intermittent Failure):

- Test passes and fails inconsistently without code changes

- Timing/synchronization issues

- Race conditions or asynchronous operations

- Action: See [Identifying Flaky Tests with Stability Intelligence](/docs/test-failures/identifying-flaky-tests) for systematic analysis

💡 Note: TestOps includes Test Stability Intelligence features that automatically detect flaky tests by analyzing pass/fail patterns across multiple executions. If you suspect flakiness, consult the [Identifying Flaky Tests guide](/docs/test-failures/identifying-flaky-tests) before making changes.

### 6.2. Take Resolution Action

If Product Defect:

- Create defect ticket in issue tracker (Jira, Azure DevOps, GitHub)

- Include: Test result link, AI summary, screenshots, logs, reproduction steps

- Link defect to test result for traceability

- See [Creating Defects from Test Results](/docs/test-failures/creating-defects)

If Test Issue:

- Update test code in your framework

- Commit changes with descriptive message

- Re-run test to verify fix

If Environment Issue:

- Document issue with environment details and errors

- Report to DevOps or infrastructure team

- Re-run after environment fix confirmed

If Flaky Test:

- Don't make hasty changes—flakiness requires data analysis

- Use [Test Stability Intelligence](/docs/test-failures/identifying-flaky-tests) to analyze patterns

- Consider quarantining test until root cause identified

### 6.3. Document Your Findings

Document your investigation:

- Add comments to test result in TestOps

- Update defect ticket or issue tracker

- Share findings with team

- Copy AI summary for stakeholder communication (if used)

Include: failure category, root cause, evidence, action taken, and resolution status.

💡 Pro Tip: Add comments directly to test results in TestOps for future reference and team visibility.

Excellent work! You've completed a thorough failure investigation and taken appropriate action.

## Conclusion

You've successfully completed the test failure investigation workflow in Katalon TestOps:

✅ Discovered failures using Test Results page filters and prioritization
✅ Leveraged AI-powered analysis for quick categorization and plain-English explanations
✅ Examined logs and stack traces to validate findings
✅ Reviewed execution context (environment, screenshots, configuration)
✅ Determined root cause and took appropriate action

This approach combines AI speed with human expertise, reducing Mean Time to Identify issues by 60%.

Key Takeaways:

- Use AI analysis first for quick categorization

- Always validate AI findings with manual review

- Classify failures accurately before taking action

- Document findings for team visibility

- For flaky tests, use systematic analysis (Test Stability Intelligence) rather than guessing

## Next Steps

Explore related failure investigation topics:

- [Identifying Flaky Tests with Stability Intelligence](/docs/test-failures/identifying-flaky-tests) - Learn to detect and resolve intermittent failures systematically (Tutorial)

- [Using Test Result Details](/docs/test-failures/test-result-details) - Comprehensive guide to Test Result Details page features (How-To Guide)

- [Creating Defects from Test Results](/docs/test-failures/creating-defects) - Link test failures to issue trackers (How-To Guide)

- [Failure Investigation Best Practices](/docs/test-failures/failure-investigation-best-practices) - Expert strategies and workflows (Explanation)

- [How to Use AI-Powered Test Failure Analysis](/docs/customization/ai-test-failure-analysis) - Complete AI feature guide (How-To Guide)

Continue learning TestOps:

- [Understanding Test Stability and Flakiness](/docs/concepts/test-stability) - Conceptual deep-dive into flaky test patterns (Explanation)

- [Test Execution Monitoring with Dashboards](/docs/dashboards/live-monitor) - Real-time failure detection (Tutorial)

[Test Failures: Overview and Getting StartedInvestigate test failures systematically with AI-powered triage and Test Stability Intelligence to distinguish flaky tests from real defects and reduce debugging time from hours to minutes.](/docs/test-failures/test-failures-overview)[Using Test Result DetailsComprehensive guide to navigating and using the Test Result Details page in Katalon TestOps, including logs, screenshots, videos, and AI-powered failure analysis.](/docs/test-failures/use-test-result-details)

## Best Practices

### Triage-first approach

- Triage-first: categorize the failure to work out a prioritization strategy, before deciding an appropriate response level. Not all failures require the same investigation depth.

- Use AI-powered rapid triage: AI agent's analysis helps reduce triage time by up to 60%. AI analysis examines thousands of similar failure patterns across your organization and suggests likely categories with confidence scores:

    - Product Defect: The application behaves incorrectly due to a code bug. These require thorough investigation, reproduction, and defect reporting. Priority should be highest for regressions (new failures after code changes).

    - Test Issue: The test itself has problems—incorrect assertions, outdated locators, race conditions, or logic errors. These require test maintenance, not defect reports. Fixing test issues prevents false alarms and builds team confidence in automation.

    - Environment Problem: Infrastructure instability, network issues, service timeouts, or resource constraints cause transient failures. These often resolve with retries and may need infrastructure team escalation rather than test investigation.

    - Flaky Behavior: The test intermittently passes and fails without code changes. Flaky tests erode trust in automation and require specialized analysis focused on stability patterns rather than individual failure instances.

- After triage, decide whether to:

  - Investigate immediately: High-priority product defects, especially regressions in critical features
  - Schedule for maintenance: Test issues and known flaky tests during dedicated maintenance windows
  - Monitor and retry: Environment problems that may self-resolve
  - Defer investigation: Low-impact flaky tests in non-critical suites until patterns emerge

## Using Stability Indicators to Prioritize Investigations

Not all test failures deserve equal investigation priority. Stability indicators provide crucial context that helps you decide which failures to investigate immediately, which to defer, and which might not represent real problems at all.

Understanding test reliability before investigating: Traditional failure investigation treats each failure as an isolated incident requiring full analysis. This approach wastes time on unreliable tests while potentially delaying investigation of genuine regressions. Stability indicators—including historical pass rates, failure patterns, and statistical confidence metrics—reveal whether a failure likely indicates a product issue or test unreliability.

Prioritization framework based on stability:

High-priority investigations (investigate immediately):

- Tests tagged as Consistent or Stable with high confidence scores (PFS < 0.3). When reliable tests fail, failures usually indicate genuine product issues. These deserve immediate attention because they have low false positive rates.

- Tests with New Failure tags. A test that consistently passed and suddenly fails likely detected a regression. These represent the highest-value investigation targets—catching issues before they reach production.

- Tests with pass rates above 90% that fail after code changes. Reliable tests failing in new contexts provide strong signals of real defects.

Medium-priority investigations (investigate after confirming pattern):

- Tests with pass rates between 70-90%. These have moderate reliability. Single failures might be noise, but repeated failures indicate problems worth investigating. Wait for 2-3 consecutive failures before deep investigation.

- Tests without stability tags (insufficient history). Lack of historical data means you can't assess reliability. Investigate cautiously, focusing on reproducibility rather than assuming product defects.

Low-priority investigations (fix test reliability first):

- Tests tagged as Flaky with PFS scores ≥ 0.7. These tests exhibit unstable behavior regardless of application state. Investigating individual failures wastes time because the root cause is test unreliability, not product defects. Instead, focus on stability analysis: identify timing issues, race conditions, or environmental dependencies causing flakiness.

- Tests tagged as Always Failing with pass rates < 70%. These tests consistently fail, indicating broken test logic or environmental issues. Fix the test infrastructure before investigating application behavior.

Using PFS scores to guide investigation depth:

The Probability of Flakiness Score (PFS) quantifies test reliability on a 0-1 scale:

- PFS < 0.3: Highly reliable test. Failures likely indicate real issues. Invest full investigation effort.

- PFS 0.3-0.5: Moderately reliable. Confirm failure reproduces before extensive investigation.

- PFS 0.5-0.7: Moderately unreliable. Focus investigation on test stability patterns, not application behavior.

- PFS ≥ 0.7: Highly unreliable. Prioritize fixing flakiness over investigating individual failures.

Practical application: When you encounter a failure, check its stability indicators first. A test with PFS 0.1 failing after a deployment warrants immediate investigation and potential rollback consideration. The same failure in a test with PFS 0.8 suggests ignoring the individual failure and addressing flakiness during maintenance windows.

This approach prevents the common anti-pattern of repeatedly investigating flaky tests, wasting hours on test infrastructure issues while mistakenly believing they're product defects. It also ensures reliable tests get the attention they deserve, maximizing your team's impact on product quality.

For detailed information on stability detection algorithms and configuration, see [Test Stability Intelligence](/docs/advanced-topics/test-stability-intelligence).

## Balancing Manual vs. AI-Assisted Investigation

The introduction of AI-powered failure analysis has fundamentally changed the investigation workflow. Understanding when to rely on AI insights versus when manual investigation is necessary helps you maximize efficiency without sacrificing accuracy.

The modern investigation workflow: AI-first, human-validated:

Start every investigation by reviewing AI analysis results. AI examines error messages, stack traces, screenshots, and logs within seconds, providing:

- Failure categorization: Product defect, test issue, environment problem, or flaky behavior

- Root cause suggestions: Specific error types like "Element not found," "Timeout exceeded," "Assertion failed"

- Similar failure patterns: Historical failures with matching characteristics

- Confidence scores: Statistical certainty of the analysis

This initial AI triage reduces investigation time by 60% on average because it eliminates the manual review of logs, screenshots, and execution history that traditionally consumes the first 15-20 minutes of every investigation.

When to trust AI analysis:

- High-confidence categorizations (confidence scores ≥ 80%). AI analysis becomes more accurate over time as it learns from your organization's failure patterns. High confidence scores indicate strong pattern matches with historical data.

- Common error patterns (timeout errors, element not found, API failures). AI excels at recognizing standard failure types that occur repeatedly across test suites.

- Environment-related issues (infrastructure timeouts, network failures). These have consistent signatures that AI reliably identifies.

When manual investigation is required:

- Complex application logic failures. AI understands test infrastructure and common failure patterns but may not understand your application's business logic. When a test fails because of unexpected application behavior (wrong calculation, incorrect workflow state), human analysis is essential.

- Custom framework errors. If your test framework uses custom error messages or logging formats not widely used, AI may struggle to categorize failures accurately. Manual review helps establish patterns AI can learn from.

- Low-confidence AI analysis (confidence scores < 60%). Low confidence suggests the failure doesn't match known patterns. Human investigation is needed to classify the failure and provide feedback that improves future AI accuracy.

- Critical production-impacting failures. Even if AI provides high-confidence analysis, critical failures warrant manual verification before taking action (rollbacks, emergency fixes).

The hybrid approach: combining AI insights with human expertise:

The most effective strategy combines AI's speed and pattern recognition with human contextual understanding:

- Review AI analysis for rapid triage and suggested root causes

- Validate AI conclusions by examining referenced evidence (specific log lines, screenshots)

- Apply domain knowledge to assess whether suggested root causes make sense given recent code changes

- Provide feedback when AI misclassifies failures, improving future accuracy

Validating AI recommendations before acting:

AI analysis accelerates investigation, but automated suggestions should always be validated before taking action:

- Verify suggested fixes by reproducing the failure locally when possible

- Cross-reference with recent changes to confirm AI-identified root causes align with code modifications

- Review historical patterns AI references to ensure comparisons are relevant

- Consult domain experts for failures in complex application areas

This validation step prevents acting on incorrect AI analysis while still benefiting from accelerated triage and evidence gathering. Over time, as AI accuracy improves through feedback, validation becomes faster and trust in AI recommendations increases.

For detailed information on AI failure analysis capabilities and configuration, see [AI-Powered Test Failure Analysis](/docs/advanced-topics/ai-powered-test-failure-analysis).

## Evidence-Based Investigation Strategy

Effective failure investigation relies on verifiable evidence, not assumptions. Hypothesis-driven debugging starts with observations, forms testable theories, and validates conclusions with data. This approach prevents wasted time chasing incorrect root causes and ensures reproducible solutions.

Logs as primary evidence: Execution logs provide the definitive record of what happened during test execution. Error messages, stack traces, and debug output reveal failure timing, error types, and system state. When investigating failures, prioritize log analysis over speculation about potential causes.

Structured logs with consistent formatting enable faster investigation. Look for:

- Exception stack traces: Show exactly where code execution failed

- Timing information: Reveals timeouts, race conditions, or performance degradation

- State transitions: Show application workflow progression before failure

- External service interactions: Identify API failures, database errors, or integration issues

Screenshots and videos for UI state validation: For UI-based tests, visual evidence shows application state at failure time. Screenshots capture unexpected UI states, missing elements, or incorrect rendering that logs might not fully describe. Session recordings show the sequence of interactions leading to failure, revealing race conditions or timing issues invisible in static logs.

Visual evidence is particularly valuable when:

- Elements render differently than expected (layout issues, missing components)

- Application state seems correct in logs but displays incorrectly in UI

- Timing-dependent issues occur (animations, async loading)

- Communicating failures to developers unfamiliar with test frameworks

Execution environment context: Failures often depend on environmental factors. Documenting execution context helps identify environment-specific issues and ensures reproducibility:

- Browser version and OS (for UI tests)

- Test data state (database content, API mock configurations)

- Parallel execution context (other tests running simultaneously)

- Infrastructure load (CPU, memory, network conditions)

- Time and timezone (for time-sensitive functionality)

Environmental factors cause many intermittent failures. Comparing successful vs. failed execution environments often reveals root causes faster than analyzing test logic.

Historical comparison for pattern detection: Single failure instances provide limited insight. Comparing multiple failures reveals patterns:

- Does failure occur consistently after specific code changes?

- Does failure rate increase during high-load periods?

- Do failures cluster in specific test environments or times of day?

- Are failures correlated with external service availability?

Historical analysis transforms individual failures into actionable patterns. A failure that occurs once might be noise; the same failure occurring after every deployment of a specific microservice indicates a regression.

Avoiding assumptions—verify with evidence: Common investigation anti-patterns include:

- Assuming failures are flaky without checking historical pass rates

- Blaming environment issues without verifying infrastructure metrics

- Attributing failures to test logic without reproducing locally

- Creating defect reports based on single failure instances without confirmation

Evidence-based investigation requires confirmation: reproduce failures locally, verify environmental claims with metrics, and validate hypotheses against execution data before drawing conclusions.

## Effective Collaboration Practices

Failure investigation is rarely a solo activity. Effective collaboration accelerates investigation, prevents duplicate work, and builds organizational knowledge.

Sharing investigation findings with the team: Document investigation progress and conclusions in centralized locations accessible to all team members. When you identify a root cause, share:

- Summary of the failure (what failed, when, how often)

- Investigation steps taken (what you checked, what you ruled out)

- Root cause identified (with supporting evidence)

- Resolution or next steps (fix applied, defect created, escalation needed)

Sharing findings prevents multiple engineers investigating the same failure independently. It also helps junior engineers learn investigation techniques by seeing experienced engineers' thought processes.

Creating clear defect reports: When investigation reveals product defects, write defect reports that developers can act on immediately:

- Reproducible steps: Clear instructions for reproducing the failure locally

- Expected vs. actual behavior: Precise description of the issue

- Evidence: Logs, screenshots, and execution details

- Impact assessment: Severity, affected features, user impact

- Environment details: Where failure occurs (all environments or specific ones)

Well-written defect reports reduce developer investigation time and prevent "cannot reproduce" rejections that delay fixes.

Documenting known issues and workarounds: Some failures stem from known limitations, external service instabilities, or low-priority defects awaiting fixes. Document these issues to prevent repeated investigation:

- Known flaky tests with explanations of instability causes

- External service dependencies that occasionally fail

- Environment-specific limitations affecting test reliability

- Test data constraints requiring specific setup

This documentation helps team members quickly identify known issues, apply workarounds, and avoid time-consuming investigation of already-understood problems.

Knowledge sharing: investigation notes and root cause database: Build organizational knowledge by maintaining:

- Investigation playbooks: Common failure patterns and investigation steps

- Root cause catalog: Historically identified root causes with symptoms and solutions

- Lessons learned: Investigation anti-patterns to avoid, efficiency tips

This knowledge repository transforms individual expertise into team capability, enabling faster investigation as new engineers onboard and as teams scale.

## Common Investigation Anti-Patterns

Recognizing inefficient investigation patterns helps you avoid wasted effort and accelerate mean time to investigate.

Anti-pattern 1: Investigating without context (ignoring AI/stability indicators):
Starting investigation without reviewing AI analysis or stability metrics wastes time. You might spend an hour investigating a failure that AI categorized as "environment timeout" with 90% confidence in 30 seconds. Similarly, investigating a flaky test (PFS 0.8) as if it's a product defect leads to frustration when you can't identify reproducible root causes.

Solution: Always start with triage. Review AI analysis and stability indicators before deep investigation. Let automated analysis eliminate obvious categories before investing manual effort.

Anti-pattern 2: Over-investigating flaky tests (wasting time on low-value tests):
Repeatedly investigating individual failures of unreliable tests consumes enormous time without improving product quality. Each investigation concludes "cannot reproduce" or "sometimes works, sometimes doesn't," providing no actionable insights.

Solution: Recognize flaky tests early (check stability tags and PFS scores). For flaky tests, focus on stability analysis—identifying timing issues, environmental dependencies, or race conditions—rather than investigating individual failure instances. Consider quarantining highly flaky tests (PFS ≥ 0.7) until stability improves.

Anti-pattern 3: Creating defects without verification:
Filing defect reports for every test failure without confirming reproducibility creates noise in defect tracking systems. Developers spend time investigating "cannot reproduce" issues, eroding trust in test results and slowing down development.

Solution: Verify failures before creating defects. Attempt local reproduction, check if failure is consistent across multiple executions, and review historical data to confirm the failure pattern is new.

Anti-pattern 4: Ignoring historical patterns:
Investigating failures in isolation misses valuable context. A failure might seem mysterious until you discover the same test failed identically after the last three deployments, always in the staging environment, always on Fridays (when batch jobs run).

Solution: Always review failure history. Look for temporal patterns, environmental correlations, and code change relationships. Historical analysis often reveals root causes immediately without deep debugging.

Anti-pattern 5: Not documenting findings:
Completing investigation, applying a fix, and moving on without documentation leads to:

- Duplicate investigation when failures recur

- Lost knowledge when engineers leave the team

- Inability to identify systemic issues from recurring patterns

Solution: Document every investigation, even quick ones. Brief notes in test failure records prevent future duplicate work and build organizational knowledge.

## Continuous Improvement

Failure investigation efficiency improves over time through deliberate measurement, pattern recognition, and automation.

Track MTTI metrics: Measure Mean Time to Investigate across your team and over time. MTTI trends reveal whether investigation practices are improving or degrading:

- Decreasing MTTI: Investigation practices are improving (better triage, AI accuracy, team knowledge)

- Increasing MTTI: Investigation is becoming less efficient (test suite growth without tooling improvements, knowledge loss)

- MTTI variance: Wide variance suggests inconsistent investigation skills across team members, indicating training opportunities

Track MTTI by failure category (product defects vs. test issues vs. flaky tests) to identify which investigation types need improvement.

Identify recurring failure patterns: Regularly review failure data to find patterns:

- Common root causes: If 40% of failures are "element not found" errors, invest in locator stability improvements

- Problematic test areas: If specific features generate disproportionate failures, target those for test maintenance

- Environmental issues: If failures cluster in specific environments, investigate infrastructure stability

Pattern identification transforms reactive investigation into proactive prevention.

Automate common investigations: For frequently occurring failure types, create automated investigation scripts:

- Log parsing scripts that extract relevant error information automatically

- Environment health checks that verify infrastructure status before investigation

- Comparison scripts that automatically analyze differences between passing and failing executions

Automation reduces investigation time for common issues and ensures consistent analysis quality.

Regular test suite health reviews: Schedule periodic reviews (quarterly or monthly) to assess overall test suite health:

- Review tests with increasing flakiness trends

- Identify tests with consistently high investigation times

- Assess test coverage vs. investigation burden (are high-maintenance tests valuable?)

- Prioritize test maintenance based on investigation cost

Proactive health reviews prevent investigation bottlenecks by addressing test reliability before failures accumulate.

Configure stability detection for your team: Customize stability detection settings to match your team's testing patterns and risk tolerance. Configure PFS thresholds, sample size requirements, and tagging rules to ensure stability indicators align with your investigation priorities.

For guidance on configuring stability detection, see [Configure Test Stability Detection](/docs/test-failures/configure-test-stability-detection) and [Interpreting Stability Tags and Scores](/docs/test-failures/interpreting-stability-tags-and-scores).

## Role-Based Workflows

[### Automation Engineer Workflow
See how Automation Engineers use Smart Tags and Test Stability Intelligence to quickly identify flaky tests (PFS ≥ 0.7), prioritize stabilization work, and reduce maintenance burden through systematic reliability improvements.](/docs/workflows/automation-engineer)

## See Also

- [Investigating Test Failures](/docs/test-failures/investigating-test-failures) - Practical procedures for examining logs, screenshots, and execution history

- [Identifying Flaky Tests](/docs/test-failures/identifying-flaky-tests) - Recognizing patterns of instability in test results

- [Test Stability Intelligence](/docs/advanced-topics/test-stability-intelligence) - Technical framework for automated stability detection and PFS calculation

- [AI-Powered Test Failure Analysis](/docs/advanced-topics/ai-powered-test-failure-analysis) - AI capabilities for automated failure categorization and root cause suggestions

- [Analyzing Error Patterns](/docs/test-failures/analyzing-error-patterns) - Identifying systemic issues from failure data

[Configure Failure Analysis SettingsCustomize stability detection settings and Smart Tag thresholds—configure time windows, minimum executions, and tag sensitivity to match your team's testing patterns and quality standards.](/docs/test-failures/configure-failure-analysis-settings)[Test Stability Metrics ReferenceQuick reference for Probabilistic Flakiness Score (PFS) classifications, Smart Tag definitions, formulas, and configuration defaults—instant lookup during failure investigations.](/docs/test-failures/reference/test-stability-metrics)

-->