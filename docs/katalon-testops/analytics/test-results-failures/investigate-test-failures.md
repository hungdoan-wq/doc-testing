# Tutorial: Investigate Failures 

This document explains how to investigate failed tests root cause using TestOps Analytics capabilities.

:::requirement
- Access to Katalon TestOps with Viewer role or higher. See [Roles in TestOps] for more information.
- Failed tests in the concerned time frame/release/sprint.
:::endrequirement

## Overview

Investigating test failures is often time-consuming and repetitive. TestOps accelerates this process by reducing **Mean Time to Identify (MTTI) by up to 60%** through:

- **Dashboards & Reports** — Quickly locate and navigate failures
- **AI-Powered Failure Analysis** — Automatically analyze logs, scripts, and screenshots with plain-English explanations
- **AI Error Grouping** — Categorize failures into common root-cause types (environment, timing, selectors, etc.)
- **Stability Intelligence** — Distinguish real defects from flaky or unreliable tests
    

## Failure Investigation Workflows

### Step 1: Detect and prioritize failures

Failures can be discovered from multiple entry points:

| Entry point | Purpose |
| -- | -- |
| **Test Runs List** in Executions > Test Runs | A failed test run has a results trend line, that link to independent results. See [View Test Result Details](docs/katalon-testops/analytics/test-results-failures/view-test-result-details.md) to learn more. |
| **Live Monitor Dashboard** | **Today's Test Runs** widget lists running tests and their status. It's useful for everyday failure troubleshooting. See ... to learn more. |
| **Analytics & Trends Dashboard** | **Test Results Trend** and **Distribution** link to the Test Results Analysis Report, with filters and links to test result details. See ... to learn more. |
| **Test Case Health Analysis Report** | Listing test cases and latest results. See ... to learn more. |
| **Test Case Failure Analysis Report** | Listing failed test runs distributed in a historam chart, by failed %. See ... to learn more. |
| **Test Runs Analysis Report** | Listing test runs, each with a link to the test run details and its results. See ... to learn more. |
| **Test Results Analysis Report** | Listing test results and their details page. See ... to learn more. |

:::tip
- Use filters such as test run, build, date range, and test suite to quickly narrow down data.
- Prioritize:
  - Test runs with `new failures` or with a high pass rate. These are likely due to a recent code change.
  - Test runs with `always failed` tag.
  - Failures that are grouped and have many "similar errors" => there might be underlying systemic issue that once solved, resolves multiple failures at once.
  - Failures blocking critical user flows (login, checkout, payments)
- If a test run has `flaky` tag, investigate its flakiness. See [Investigate Flaky Test](docs/katalon-testops/analytics/test-results-failures/investigate-flaky-tests.md) for more details.
:::endtip

<img/>
<br/>

### Step 2: Review test result details to investigate

The **Test Result Details** page is the central investigation workspace.

#### Read failure message for context

The failure message is your first clue about what went wrong. Common failure messages include:

- "Element not found: #submitButton" (locator issue)
- "Expected: 100, Actual: 99" (assertion failure)
- "Timeout after 30 seconds" (timing issue)
- "Connection refused" (network/environment issue)

#### Triage with AI

With context, AI triage will help you understand the failure with a quick glance.

Click **Analyze with AI** in the **Test Result Details page**. The agent automatically reviews details like logs, stack traces, screenshots, scripts, and result pattern to triage the failure and suggest an approach:

<img/>
<br/>

AI analysis also acts as a quick failure documenting tool, to help you communicate with teammates/stakeholders more efficiently.

#### Analyze the failure/error manually

Use AI guidance to focus your manual review.

1. Open the **Execution Logs** tab to **view complete log output** with info, warnings, errors, and stack traces.
2. **Review error messages** highlighted in red. 
3. **View similar errors**: clicking "View similar failures" to navigate to the **Common Automation Errors Report**, to show failures matching the current pattern and potentially fix the root cause to multiple failures. See [] to learn more.
3. **Analyze stack traces** for exception messages, error location, framework calls... and cross-reference with AI. E.g., "Broken Selector" + NoSuchElementException = confirmation.
4. **Check execution environment**: browser, device, OS type, and execution profile. If AI suggested "Environment Issue," verify if environment details reveal missing dependencies.
5. **Review screenshots/videos**: go back to the test run details from the test results, and review images or videos for visual clues. E.g. wrong page loaded, elements overlaying, ...
6. **Verify test data and configuration**: check dataset, inputs, staging/QA/production environment, authentication... to make sure testing data is as expected.

### Step 3: Determine Root Cause and Take Action

Classify the failure before assigning a teammate to take action. For example:

- **Product Defect**: Application behaves incorrectly → Create defect, attach evidence. (See [Creating Defects from Test Results](/docs/test-failures/creating-defects))
- **Test Issue**: Faulty assertions, locators, or logic → Fix test and re-run
- **Environment Issue**: Infrastructure, configuration, or network failures → Escalate to DevOps / infra team
    
Document findings directly in TestOps for future reference:

- Add comments to test result in TestOps
- Update defect ticket or issue tracker
- Share findings with team
- Copy AI summary for stakeholder communication (if used)


## Tips

### Effective Collaboration Practices

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

### Common Investigation Anti-Patterns

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

### Continuous Improvement

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

---
<!--
## Investigate root cause 

Once you've identified clear patterns, use the pattern characteristics to guide your root cause investigation. Different pattern types suggest different investigation approaches.

### For Environment-Specific Patterns

When failures concentrate in specific browsers, operating systems, or test agents:

Check configuration consistency: Compare environment configurations between passing and failing agents

- Browser versions: chrome://version/ or equivalent for Firefox, Safari

- WebDriver versions: Verify driver matches browser version

- Environment variables: Compare environment-specific settings like timeouts, base URLs, authentication tokens

- Installed dependencies: Check for missing libraries, certificates, or system packages

Review environment-specific test logs: Drill into individual test results from the failing environment

- Look for environment setup errors before actual test execution

- Check for permission issues, file path problems, or networking errors specific to that OS/browser

- Compare stack traces between failing environment and passing environments

Example investigation:

- Pattern: All Safari tests fail with "Element not interactable"

- Investigation: Check if Safari WebDriver version outdated → Update Safari from 15.6 to 16.1 → Rerun tests

- Root cause: Safari 16+ required new WebDriver, tests using outdated driver couldn't interact with modern Safari security model

### For Time-Based Patterns

When failures spike after specific dates or times:

Review recent changes: Check what changed around the failure spike date

- Application deployments: Review release notes for the deployment that preceded failures

- Test code changes: Check test repository commits for new tests, updated selectors, or changed assertions

- Infrastructure changes: Investigate test agent updates, browser version changes, or test data refreshes

- External dependencies: Verify third-party services (APIs, payment gateways, authentication providers) didn't introduce breaking changes

Correlate with deployment history: Use version control or deployment logs to identify changes

git log --since="2025-01-15" --until="2025-01-16" --oneline

This shows commits between the last passing day and first failing day, narrowing down potential culprits.

Investigate scheduled operations: If failures occur at specific times, check for:

- Database maintenance windows

- Cache clearing or session expiration

- SSL certificate renewals

- Scheduled data imports or exports that lock resources

Example investigation:

- Pattern: Failure rate jumped from 8% to 42% on January 16th

- Investigation: Check deployment log → Application v3.2.0 deployed Jan 15 evening → Review v3.2.0 release notes → Note: "Updated checkout button IDs for analytics tracking"

- Root cause: Button ID changes broke test selectors, need to update test locators to match new IDs

### For Suite-Specific Patterns

When failures concentrate in specific test suites or related functionality:

Examine shared dependencies: Tests in the same suite often share setup code, test data, or utilities

- Suite setup/teardown scripts: Check for recent changes or failures in @BeforeClass or suite-level fixtures

- Test data dependencies: Verify test data files, database seeds, or API mocks are available and valid

- Shared utilities: Review helper functions or page objects used by multiple tests in the suite

Check for test order dependencies: Suite-level failures sometimes result from tests that aren't properly isolated

- Tests assume specific execution order

- Tests don't clean up state, causing subsequent tests to fail

- Tests share mutable global state instead of using independent test data

Verify feature functionality: If multiple tests in "Shopping Cart" suite fail:

- Manually test shopping cart functionality in the application

- Check if application feature is broken (genuine defect) vs. tests outdated (need updating)

- Review recent feature changes in that application area

Example investigation:

- Pattern: "User Profile" suite has 70% failure rate, all other suites 5-10%

- Investigation: Review suite setup script → Find database query: SELECT * FROM users WHERE test_flag=true returning zero results → Check test database → Test users were deleted during data cleanup script run

- Root cause: Recent database cleanup script removed test users, suite setup can't find test data, all profile tests fail during setup phase

### Using Test Result Details

For representative samples of each pattern, drill into individual Test Result Detail pages to examine:

Error logs and stack traces: Full technical details of what went wrong

- Complete error message (may be truncated in list view)

- Stack trace showing exact line where failure occurred

- Application logs captured during test execution

Screenshots and videos: Visual evidence of test state at failure

- See what UI state caused failures

- Identify timing issues (element not ready, animation in progress)

- Spot visual regressions or layout problems

Execution metadata: Context about when and where test ran

- Browser/OS version details

- Test agent identifier and configuration

- Execution duration and performance metrics

- Test data or configuration used for this specific run

Compare multiple results from same pattern: Look at 3-5 test results within the same error pattern to confirm consistency

- If all show identical screenshots and logs, pattern is consistent and root cause likely singular

- If screenshots vary significantly, pattern may group unrelated failures coincidentally sharing similar error text

## Step 5: Prioritize Pattern Resolution

After identifying patterns and investigating root causes, prioritize which issues to fix first based on impact and effort:

### High-Impact Patterns

Prioritize patterns that:

- Affect many test results: Error occurs in 40+ test results (fixing once resolves many failures)

- Affect critical tests: Failures in smoke tests, regression suite, or release-blocking tests

- Block entire suites: Pattern causes all tests in a suite to fail or skip (affects test coverage)

- Impact production confidence: Failures in tests that mirror critical user workflows

Example high-impact prioritization:

- Pattern A: Database connection failure affecting 52 test results across 3 test suites → Highest priority: Blocks most testing, likely critical infrastructure issue

- Pattern B: Checkout button selector broken, affecting 8 tests in payment suite → High priority: Critical user functionality, limited scope for fix

### Quick Wins

Prioritize patterns with simple fixes that resolve multiple failures:

- Configuration errors: Missing environment variables, incorrect URLs, or expired credentials

- Broken selectors: Element IDs or classes changed in application, easy to update in test code

- Version mismatches: WebDriver version incompatible with browser, simple update resolves

- Test data issues: Missing or corrupted test data files, straightforward to restore or regenerate

Effort vs. Impact matrix:

- High impact, low effort → Fix immediately: Broken selector affecting 30 tests, 10-minute fix

- High impact, high effort → Plan for sprint: Framework upgrade needed to support new browser versions, affects 40 tests but requires 2-3 days work

- Low impact, low effort → Opportunistic fixes: Single flaky test in rarely-run suite, fix when working in that area

- Low impact, high effort → Consider alternatives: 2 tests failing due to complex test data dependency, may be faster to rewrite tests than fix dependency

### Document Findings

Create documentation for your team to capture pattern analysis results:

Pattern summary document (in wiki, Confluence, or shared drive):

- Pattern description: "Connection timeout errors in payment integration tests"

- Affected tests: List of test case names or suite references

- Root cause: "Payment gateway staging environment was decommissioned, tests pointing to non-existent endpoint"

- Resolution: "Updated test configuration to use new payment gateway staging URL"

- Fixed by: Team member name and date

- Verification: "Reran payment suite, all tests now passing"

Shared pattern database: Maintain a living document or spreadsheet of known patterns

- Helps future investigations recognize recurring issues quickly

- Provides historical context for new team members

- Tracks which patterns resurface after supposed fixes (indicating incomplete resolution)

Example pattern log:

Date IdentifiedPatternAffected TestsRoot CauseResolutionStatus2025-01-16"ElementNotVisible"45 testsCSS z-index change hid buttonsUpdated CSS in v3.2.1Fixed2025-01-14"Connection timeout"12 API testsStaging API rate limitingIncreased timeout, reduced test frequencyFixed2025-01-10"Data not found"8 profile testsTest user cleanup scriptExcluded test users from cleanupFixed

Communicate to stakeholders: Share key findings in sprint retrospectives or team meetings

- Report on high-impact patterns and fixes to demonstrate testing efficiency improvements

- Highlight systemic issues requiring architectural changes or additional investment

- Celebrate quick wins that resolved many failures with single fixes

## Best Practices

### Establish Regular Pattern Analysis Cadence

Don't wait for crises to analyze patterns—make it a routine practice:

Weekly pattern reviews: Every sprint or weekly iteration

- Review past 7 days of test failures

- Identify new patterns emerging

- Track whether previously identified patterns persist

- Adjust test maintenance priorities based on patterns

Post-deployment analysis: After major releases or changes

- Immediately analyze failures after deployment to detect regressions quickly

- Compare failure patterns before and after deployment to isolate new issues

- Faster identification means faster fixes and reduced customer impact

Sprint retrospective reviews: During team retrospectives

- Present pattern analysis findings to entire team

- Discuss whether patterns indicate test quality issues vs. application defects

- Identify process improvements to prevent pattern recurrence

### Track Pattern Trends Over Time

Monitor how patterns evolve to measure testing health and fix effectiveness:

Pattern persistence tracking: Are fixed patterns staying fixed?

- If "Connection timeout" pattern reappears monthly, fix was superficial (increased timeout) rather than addressing root cause (slow API endpoints)

- Recurring patterns indicate systemic issues requiring architectural changes

New pattern velocity: How quickly do new patterns emerge?

- Increasing rate of new patterns suggests decreasing test stability or increasing application complexity

- Stable or decreasing new pattern rate indicates maturing test suite and stable application

Pattern resolution time: How long from identification to fix?

- Track time-to-resolution for different pattern types to identify bottlenecks

- Long resolution times may indicate skill gaps, resource constraints, or complex technical debt

Failure volume trends: Is total failure volume decreasing?

- Effective pattern analysis should reduce overall failure count over time as high-impact patterns are resolved

- If volume remains constant despite fixes, new issues are being introduced at same rate as old ones are resolved

### Share Findings with Development Team

Pattern analysis benefits not just testing teams but entire development organizations:

Bug reports with pattern context: When creating defect tickets, include:

- How many tests are affected (demonstrates impact)

- Pattern analysis summary (provides context beyond single failure)

- Representative test results (specific examples)

- Suggested fix based on root cause investigation

Architectural feedback: Patterns often reveal application design issues:

- High error rates in specific browsers suggest browser-specific code paths need attention

- Frequent timeout errors in specific API tests indicate performance problems

- Patterns of data-related failures suggest data model or test data management improvements needed

Quality metrics in standups/demos: Report on pattern analysis outcomes:

- "We identified a CSS selector change affecting 45 tests; updated selectors, now suite is passing again"

- "Discovered payment gateway timeout pattern in 18 tests; worked with backend team to optimize API response times"

- Demonstrates testing team's value in improving overall product quality, not just reporting failures

### Automate Pattern Detection Where Possible

For mature testing organizations, consider automation:

Automated grouping reports: Schedule weekly reports that automatically group failures

- Email or Slack notifications with top error patterns

- Reduces manual effort in Steps 1-2 of this guide

- Ensures patterns are detected even when team is busy with other priorities

Alert thresholds for new patterns: Set up alerts when new high-volume patterns emerge

- Trigger notification when same error appears in 10+ test results within 24 hours

- Enables rapid response to newly introduced issues

- Prevents small problems from becoming widespread before anyone notices

Pattern trend dashboards: Create custom dashboards showing:

- Top error patterns by occurrence count

- Pattern resolution rate over time

- New vs. recurring patterns

- Failure volume trends by pattern category

These approaches scale pattern analysis from ad-hoc investigation to continuous, proactive quality monitoring.

<content/>
-->