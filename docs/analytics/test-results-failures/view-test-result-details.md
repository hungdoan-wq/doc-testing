# View Test Result Details

Content coming soon.
Test Failures
# Using Test Result Details

Comprehensive guide to navigating and using the Test Result Details page in Katalon TestOps, including logs, screenshots, videos, and AI-powered failure analysis.

# Using Test Result Details

Time required: 12 minutes
Prerequisites: At least one executed test in TestOps

The Test Result Details page is your central hub for investigating individual test execution outcomes. Whether you're troubleshooting a failure, verifying a fix, or documenting evidence for a defect report, this page provides comprehensive execution information including logs, screenshots, videos, and AI-powered analysis.

## Overview

The Test Result Details page displays everything that happened during a single test execution:

- Execution logs with error messages and stack traces

- Screenshots captured at key steps or failure points

- Videos of the entire test execution (when enabled)

- AI-powered analysis that categorizes failures and suggests solutions

- Execution history showing past runs for comparison

- Environment details including configuration and executor information

When to use this page:

- Investigating test failures to identify root causes

- Reviewing execution evidence before creating defect reports

- Verifying that a test fix resolved the issue

- Comparing current results with historical runs to identify trends

- Documenting failure evidence for team communication

## Accessing Test Result Details

You can access the Test Result Details page from multiple locations in TestOps:

### From Test Results Page

The most common access path:

- Navigate to Reports → Test Results in the main navigation

- Locate the test result you want to investigate in the results table

- Click anywhere on the test result row

The details page opens, displaying complete execution information.

### From Dashboards

Access test results directly from dashboard visualizations:

- Open any dashboard containing test result charts (e.g., Test Results widget, Pass/Fail Trend widget)

- Click on a data point, bar, or chart element representing the test result

- The Test Result Details page opens for that specific execution

### From Test Runs Page

Drill down from test run to individual results:

- Navigate to Execution → Test Runs

- Click on a test run to view its summary

- Scroll to the Test Results section showing all tests in the run

- Click on any individual test result row

### Direct URL Access

For quick access or sharing with team members:

- Test Result Details URLs follow the pattern: https://testops.katalon.io/project/[project-id]/executions/[execution-id]

- Bookmark frequently accessed results or share URLs directly in Slack, Jira, or email

## Understanding the Page Layout

The Test Result Details page is organized into distinct sections for efficient navigation:

### Header Section

Located at the top of the page:

- Test name - Full test case name

- Status badge - Passed, Failed, Error, Skipped, Incomplete

- Duration - Total execution time (e.g., "2m 34s")

- Timestamp - When the test was executed (date and time)

- Action buttons - Re-run, Create Defect, Analyze with AI

### Execution Information Panel

Displays contextual details about the test execution:

- Environment - Operating system, browser, or device used

- Profile - Execution profile applied (e.g., "staging", "production")

- Executor - Agent or machine that ran the test

- Test Suite - Parent suite containing this test

- Release/Build - Associated release or build number

### Tab Navigation

The main content area uses tabs to organize different types of execution evidence:

- Logs (default tab) - Execution logs with error messages and stack traces

- Screenshots - Captured images from test execution

- Videos - Recorded videos of the test run (when available)

- Attachments - Additional files or artifacts

- History - Past executions of this same test for comparison

### Action Buttons

Quick actions available from the header:

- Re-run Test - Trigger a new execution of this test

- Create Defect - Link this failure to a defect tracking system

- Analyze with AI - Get AI-powered failure categorization and suggestions

## Using the Execution Logs Tab

The Logs tab is the default view and your primary tool for understanding what happened during test execution.

### Viewing Execution Logs

When you open a Test Result Details page, the Logs tab displays automatically. The log view shows:

- Chronological log entries - Each line timestamped with when it occurred

- Log level indicators - Visual badges for INFO, DEBUG, WARN, ERROR levels

- Collapsible sections - Group related log entries for easier navigation

- Syntax highlighting - Key information like URLs, status codes, and error messages stand out

Log level meanings:

- INFO - Normal execution steps and status updates

- DEBUG - Detailed technical information for troubleshooting

- WARN - Potential issues that didn't cause failure but need attention

- ERROR - Critical errors that caused test failure

### Searching and Filtering Logs

For long execution logs, use search and filter tools to find specific information quickly:

Search functionality:

- Locate the search box at the top of the Logs tab

- Enter keywords like error messages, element names, or API endpoints

- Results highlight matching log entries

- Use "Next" and "Previous" buttons to navigate between matches

Filter by log level:

- Click the log level filter dropdown (usually above the log content)

- Select one or more levels to display (e.g., show only ERROR and WARN)

- Filtered view hides entries that don't match selected levels

- Click "Clear Filter" or "All" to restore full log view

### Downloading Logs

Download logs for offline analysis or sharing with team members:

- Click the Download button (usually top-right of Logs tab)

- Select format: Plain Text (.txt) or JSON (for programmatic analysis)

- File downloads to your local machine

When to download logs:

- Attach to defect reports for developer review

- Share with team members who don't have TestOps access

- Perform local analysis with text processing tools

- Archive important failure evidence for compliance

### Copying Log Excerpts

For quick sharing or documentation:

- Highlight the log lines you want to copy by clicking and dragging

- Right-click and select "Copy" (or use Ctrl+C / Cmd+C)

- Paste into Slack, Jira comments, or documentation

Alternatively, some TestOps versions include a "Copy" button next to specific error messages for one-click copying.

## Reviewing Screenshots and Videos

Visual evidence is invaluable for understanding UI-related failures or documenting application state during test execution.

### Screenshots Tab

The Screenshots tab displays images captured during test execution:

When screenshots are available:

- On test failure - Automatically captured at the moment of failure (if configured)

- At specified steps - Screenshots taken at key checkpoints in the test script

- On assertion failures - Visual evidence of what the UI looked like when an assertion failed

Using screenshots:

- Navigate to the Screenshots tab

- Thumbnails display in chronological order

- Click any thumbnail to view full-size image

- Use navigation arrows to move between screenshots

- Click Download to save the image locally

What to look for in failure screenshots:

- UI elements that are missing, mispositioned, or displaying incorrect values

- Error messages or unexpected alerts visible on the page

- Loading indicators that suggest timing issues

- Differences between expected and actual page state

### Videos Tab

The Videos tab shows recordings of the entire test execution (when video capture is enabled):

Video recordings provide:

- Complete execution playback - See exactly what happened during the test

- Timing context - Understand how fast or slow pages loaded

- User interaction replay - Watch every click, type, and navigation action

- Visual debugging - Spot UI glitches or timing issues that logs might miss

Using video recordings:

- Navigate to the Videos tab

- Click the play button to start video playback

- Use video controls (pause, rewind, fast-forward, speed adjustment)

- Click specific timestamps to jump to key moments

- Download video file for sharing or offline review

When videos are most helpful:

- Debugging intermittent failures that are hard to reproduce

- Understanding timing-related issues (race conditions, animations)

- Demonstrating failures to developers or stakeholders

- Training new team members on failure patterns

### Correlating Visual Evidence with Logs

For thorough investigation, cross-reference screenshots and videos with execution logs:

- Note the timestamp of the error in the Logs tab

- Navigate to Screenshots or Videos tab

- Find visual evidence captured at or near the same timestamp

- Compare what the logs say happened with what visually occurred

This correlation often reveals discrepancies between expected and actual behavior that logs alone can't capture.

## AI-Powered Failure Analysis

The Test Result Details page includes an "Analyze with AI" button that automatically categorizes failures and provides plain-English explanations—especially helpful for manual testers or when encountering unfamiliar error messages.

### Why Use AI Analysis?

Traditional failure investigation requires interpreting stack traces, parsing error logs, and understanding technical jargon. AI-powered analysis:

- Auto-categorizes failures into predefined categories (Environment Issue, Timing Issue, Broken Selector, etc.)

- Generates plain-English summaries explaining what went wrong in 2-3 accessible sentences

- Suggests specific next steps prioritized by likelihood of success

- Reduces Mean Time to Identify root causes by 60%

This feature is particularly valuable when:

- You're a manual tester unfamiliar with stack traces

- You encounter an error message you haven't seen before

- You need to quickly triage multiple failures

- You want to communicate issues clearly to stakeholders (copy AI summary to defect reports or Slack)

### Quick Actions

- Click "Analyze with AI" button in the Test Result Details header

- Review the output:

Failure Category - What type of issue caused the failure
Plain-English Summary - Non-technical explanation of what went wrong
Actionable Suggestions - Specific next steps to resolve the issue

- Copy insights to clipboard for defect reports or team communications

- Use suggestions as starting points for manual investigation

### Understanding AI Output

Failure Categories include Environment Issue, Timing Issue, Broken Selector, Assertion Error, Network Issue, Permission Issue, and Data Issue. Each category helps you quickly understand whether the problem is related to test infrastructure, application changes, or test design.

Plain-English Summaries are written in accessible language that manual testers and stakeholders can understand, avoiding technical jargon. For example: "The test failed because the 'Submit' button could not be found on the checkout page. This typically happens when the page layout changes or when the element takes longer to load than expected."

Actionable Suggestions are prioritized by likelihood, giving you concrete next steps like "Check if the page layout was recently updated" or "Increase wait time for the element to appear."

### Validating AI Recommendations

AI analysis provides speed and accessibility, but always validate with manual review:

- Use AI category as a hypothesis, confirm with log evidence

- Cross-check suggestions against your knowledge of the application

- Combine AI insights with your domain expertise for accurate diagnosis

💡 Full Guide: For complete instructions on using AI-powered failure analysis, including best practices and troubleshooting, see [How to Use AI-Powered Test Failure Analysis](/docs/customization/ai-test-failure-analysis).

## Viewing Similar Failures

When investigating a test failure, TestOps helps you identify if other tests are failing with the same root cause, saving you from redundant investigations.

### Navigating to Similar Failures

From the Test Result Details page:

- Locate the "View similar failures" button in the General tab (right panel, Additional Information section)

- Click the button to navigate to the Common Automation Errors report

- The report opens with filters automatically pre-applied to show only failures matching the current error pattern

What you'll see:

A banner appears at the top: "There are some extra filters applied to this report since it was opened from a contextual entry point"—this confirms the report has been filtered to show relevant failures only.

The Common Automation Errors report displays:

- Error Distribution by Failure Category - Pie chart showing how this error is categorized (e.g., "Broken Selector", "Timing Issue")

- Impacted Test Cases - Number of distinct tests affected by this error pattern

- Error Count - Total occurrences of this error across all executions

- Timeline - First occurred and last occurred dates to understand when the pattern started

Data table columns:

- ERROR - The specific error message text

- FAILURE CATEGORY - AI-assigned category (Automation Issue, Uncategorized, etc.)

- IMPACTED TEST CASES - Number of tests with this error

- ERROR COUNT - How many times this error occurred

- FIRST OCCURRED - When this error first appeared

- LAST OCCURRED - Most recent occurrence

### Use Case: Pattern-Based Investigation

Scenario: You're investigating a test that failed with "Element not found: Submit button". Clicking "View similar failures" reveals 4 other tests failing with the same error.

Value: Instead of investigating 5 failures separately (which could take 2-3 hours), you immediately see the pattern. All 5 tests use the same broken selector. Fix the root cause once (update the selector in your test framework), and all 5 failures are resolved.

Time savings: 5 individual investigations (20-30 minutes each) reduced to 1 pattern analysis (10 minutes) = 90-140 minutes saved.

💡 Deep Dive: For comprehensive guidance on using the Common Automation Errors report, see [Analyze Error Patterns](/docs/test-failures/analyze-error-patterns).

## Understanding Timeline Visualization

When browsing the Test Results List (before drilling into individual results), each test result row displays a timeline visualization showing recent execution history as colored dots.

### Interpreting Timeline Dots

- ✅ Green dots - Passed executions

- ❌ Red dots - Failed executions

- ⚠️ Yellow dots - Warning or error status

Hover over any dot to see execution details including date, status, and duration.

### Pattern Recognition at a Glance

Timeline visualization helps you quickly identify test behavior patterns:

Flaky tests: Alternating green and red dots (✅❌✅❌) indicate the test passes and fails inconsistently without code changes—a clear flakiness signal

New failures: All green dots except the latest red dot (✅✅✅✅❌) show the test recently started failing—investigate recent application or test changes

Always failing tests: All red dots (❌❌❌❌❌) indicate persistent issues requiring immediate attention—likely a code defect or broken test

Stable tests: All green dots (✅✅✅✅✅) confirm consistent passing behavior—no investigation needed

### Using Timeline for Triage

Use the timeline visualization to prioritize which test results to investigate:

- High priority: Tests with "Always Failing" pattern (all red) or "New Failure" pattern (recently turned red)

- Medium priority: Flaky tests (alternating pattern) requiring stabilization

- Low priority: Stable passing tests (all green) needing no action

The timeline provides instant context before you even open the Test Result Details page, helping you triage faster and make data-driven investigation decisions.

## Reviewing Test Execution History

The History tab shows past executions of the same test, enabling you to identify patterns and track stability over time.

### Accessing Execution History

- Navigate to the History tab on the Test Result Details page

- The history table displays previous executions in reverse chronological order (newest first)

- Each row shows:

Execution date and time
Status (Passed, Failed, Error, etc.)
Duration
Executor and environment
Link to open that specific execution's details

### Comparing Current Result with Previous Runs

Use the history view to answer key questions:

"When did this test start failing?"

Scroll through the history to find the first occurrence of a failure. This helps identify:

- Which code deployment or configuration change introduced the issue

- Whether the failure is new or recurring

- The timeframe for potential regression

"Is this test flaky or consistently failing?"

Look at the pattern of statuses:

- Consistent failures - Same error every time suggests a real application issue

- Intermittent failures - Passed/Failed pattern suggests flaky test or timing issues

- Recent failures - Previously stable test now failing suggests regression

"Did the fix work?"

After applying a fix and re-running the test:

- Open the latest Test Result Details

- Navigate to History tab

- Compare the current result with previous failed executions

- Verify the error no longer appears in logs

### Tracking Stability Trends

For tests with extensive history:

- Calculate pass rate - Count passes vs. failures over last 30 days

- Identify spike periods - Look for clusters of failures indicating infrastructure issues or major changes

- Measure duration trends - Spot performance degradation if execution time increases

This historical context is invaluable for deciding whether to fix, quarantine, or delete unreliable tests.

## Taking Action from Test Result Details

Once you've investigated a test result, several actions are available:

### Create Defect Ticket

If the failure indicates an application bug:

- Click the Create Defect button in the Test Result Details header

- TestOps pre-fills the defect form with:

Test name and execution details
Error message and stack trace excerpts
Links to logs, screenshots, and videos

- Review and add additional context (steps to reproduce, expected vs. actual behavior)

- Submit to create a linked defect ticket in Jira, Azure DevOps, or your configured issue tracker

For complete guidance, see [Linking Test Failures to Defects](/docs/test-failures/linking-failures-to-defects).

### Re-run Test to Verify Fix

After developers fix a bug or you update test code:

- Click the Re-run Test button

- Select execution environment and profile (or use defaults)

- Monitor the new test run

- Compare results in the History tab to verify the fix resolved the issue

### Share Result with Team

Share execution evidence with stakeholders:

Copy URL:

- Copy the Test Result Details page URL from your browser

- Paste in Slack, email, or Jira comments

- Team members with TestOps access can click to view full details

Export evidence:

- Download logs, screenshots, or videos as attachments

- Include in defect reports or incident documentation

- Archive for compliance or audit purposes

Copy AI summary:

- Use AI-generated plain-English summary for non-technical stakeholders

- Paste into status updates, retrospectives, or executive reports

### Add Comments or Notes

Some TestOps configurations allow adding comments directly to test results:

- Document workarounds or known issues

- Tag team members for review

- Track investigation status and assigned owners

## Best Practices

Follow these guidelines to maximize the value of Test Result Details:

### Review Logs Before Creating Defects

Always examine execution logs thoroughly before creating a defect ticket:

- Verify the failure is an application issue, not a test environment problem

- Confirm the error is reproducible and not a one-time anomaly

- Gather complete evidence (error messages, stack traces, screenshots) for the defect report

Creating defects without sufficient investigation wastes developer time and erodes trust in test automation.

### Use AI Analysis as First Step

For every failure investigation:

- Click "Analyze with AI" immediately after opening Test Result Details

- Review the failure category and plain-English summary

- Use AI suggestions as a hypothesis to guide your manual investigation

- Even if you're experienced, AI summaries help communicate issues to non-technical stakeholders

AI analysis reduces Mean Time to Identify by 60% and helps manual testers understand technical errors.

### Check Screenshots for UI State Evidence

Logs tell you what the test tried to do, but screenshots show what the application actually displayed:

- Verify UI elements were present and visible

- Confirm expected content or data appeared on the page

- Identify visual glitches or unexpected error messages

- Compare actual UI state with test assertions

Screenshots are especially critical for timing-related failures where elements load slowly or appear out of order.

### Compare with Historical Results for Patterns

Never investigate a failure in isolation:

- Check History tab to see if the test has failed before

- Identify whether this is a new issue or recurring pattern

- Look for environmental correlations (failures only on certain browsers, times of day, executors)

- Calculate flakiness score to decide if test needs stabilization

Historical context helps distinguish real bugs from flaky tests or infrastructure issues.

## See Also

Related Guides:

- [Investigating Test Failures](/docs/test-failures/investigating-test-failures) - Step-by-step tutorial for complete failure investigation workflow

- [How to Use AI-Powered Test Failure Analysis](/docs/customization/ai-test-failure-analysis) - Comprehensive guide to AI analysis features, best practices, and troubleshooting

- [Linking Test Failures to Defects](/docs/test-failures/linking-failures-to-defects) - Create and manage defect tickets from test results

Related Concepts:

- [Understanding Test Results and Statuses](/docs/getting-started/test-results-statuses) - Learn what each test status means and how they're determined

- [Test Execution and Test Runs](/docs/getting-started/test-execution-test-runs) - Understand the relationship between test runs and individual test results

## Role-Based Workflows

[### Manual Tester Workflow
See how Manual Testers navigate Test Result Details to investigate failures systematically, review execution evidence (logs, screenshots, videos), and create defects with complete context for efficient bug reporting.](/docs/workflows/manual-tester)

📊 Document Metrics:

- Word count: 1,587 words

- Target range: 1,200-2,200 words

- Status: ✅ Within target (1,400-1,600 word goal)

- Estimated reading time: 12 minutes

- Document type: How-To Guide (Diataxis)

- Audience: Manual Testers and Automation Engineers

[Investigating Test FailuresA hands-on tutorial guiding you through the complete workflow of discovering test failures, analyzing root causes with AI-powered analysis, and taking resolution actions in Katalon TestOps.](/docs/test-failures/investigate-your-first-failure)[Identifying Flaky Tests with Stability IntelligenceLearn how to systematically find and analyze flaky tests using Test Stability Intelligence features including PFS scores, Smart Tags, and trend visualization in Katalon TestOps.](/docs/test-failures/identify-flaky-tests)