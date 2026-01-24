Getting Started
# Understanding Analysis Scope Types

Learn the conceptual differences between Time-Based, Release-Based, and Current scope types in TestOps Reports & Analytics, and understand when to use each for optimal test data analysis and decision-making.

# Understanding Analysis Scope Types

Reading time: 15 minutes

Looking for hands-on steps? This document explains the concepts behind Analysis Scope types. For step-by-step instructions on selecting and applying scopes, see [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope).

## Introduction

Analysis Scope is one of TestOps' most powerful—yet often misunderstood—features. At its core, scope defines the universe of data you're analyzing before any filters are applied. Think of it as choosing which data "pool" to analyze, while filters then narrow down within that pool.

The same test execution can appear (or not appear) in your analysis depending on which scope you choose. Understanding why these different scopes exist and when to use each helps you make better testing decisions and avoid common analytical pitfalls.

This document explores three scope types in depth:

- Time-Based Scope: Analyzes data within a time period

- Release-Based Scope: Analyzes data for specific releases

- Current Scope: Shows the latest status per test case

By understanding the conceptual purpose of each, you'll know exactly which scope answers your question most accurately.

## What is Analysis Scope?

### The Problem Scope Solves

Imagine asking "What's my pass rate?" Without context, this question is ambiguous:

- Pass rate for all test runs this week?

- Pass rate for Release 2.5 specifically?

- Pass rate for the current status of all test cases?

Each interpretation requires analyzing a different set of test executions. Analysis Scope makes this distinction explicit.

### Scope Defines the Data Universe

Analysis Scope operates at the foundational level of your analysis—it determines which test executions TestOps considers before filters, widgets, or metrics come into play.

Key concept: Scope first, then filter.

- Scope selection → Defines the universe of relevant executions

- Filter application → Narrows within that universe

- Metric calculation → Computes results from filtered scope

#_r_9a_{margin:1.5rem auto 0;}#_r_9a_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_9a_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_9a_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_9a_ .error-icon{fill:#552222;}#_r_9a_ .error-text{fill:#552222;stroke:#552222;}#_r_9a_ .edge-thickness-normal{stroke-width:1px;}#_r_9a_ .edge-thickness-thick{stroke-width:3.5px;}#_r_9a_ .edge-pattern-solid{stroke-dasharray:0;}#_r_9a_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_9a_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_9a_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_9a_ .marker{fill:#333333;stroke:#333333;}#_r_9a_ .marker.cross{stroke:#333333;}#_r_9a_ svg{font-family:inherit;font-size:16px;}#_r_9a_ p{margin:0;}#_r_9a_ .label{font-family:inherit;color:#333;}#_r_9a_ .cluster-label text{fill:#333;}#_r_9a_ .cluster-label span{color:#333;}#_r_9a_ .cluster-label span p{background-color:transparent;}#_r_9a_ .label text,#_r_9a_ span{fill:#333;color:#333;}#_r_9a_ .node rect,#_r_9a_ .node circle,#_r_9a_ .node ellipse,#_r_9a_ .node polygon,#_r_9a_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_9a_ .rough-node .label text,#_r_9a_ .node .label text,#_r_9a_ .image-shape .label,#_r_9a_ .icon-shape .label{text-anchor:middle;}#_r_9a_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_9a_ .rough-node .label,#_r_9a_ .node .label,#_r_9a_ .image-shape .label,#_r_9a_ .icon-shape .label{text-align:center;}#_r_9a_ .node.clickable{cursor:pointer;}#_r_9a_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_9a_ .arrowheadPath{fill:#333333;}#_r_9a_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_9a_ .flowchart-link{stroke:#333333;fill:none;}#_r_9a_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_9a_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_9a_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_9a_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_9a_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_9a_ .cluster text{fill:#333;}#_r_9a_ .cluster span{color:#333;}#_r_9a_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_9a_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_9a_ rect.text{fill:none;stroke-width:0;}#_r_9a_ .icon-shape,#_r_9a_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_9a_ .icon-shape p,#_r_9a_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_9a_ .icon-shape rect,#_r_9a_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_9a_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_9a_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_9a_ :root{--mermaid-font-family:inherit;}
All Test Execution Data
2. Filters Narrow Results
Filtered Data:Status = Failed

Platform = Chrome

Final Result Set
1. Scope Selects Universe
Time-BasedUniverse

Release-BasedUniverse

CurrentUniverse

Analysis Process

Scope first, then filter

Analysis Scope chooses the data pool; Filters refine within that pool

### Why Scope Matters: Same Filters, Different Results

Here's a critical insight: The same filters applied to different scopes produce different results.

Example scenario:

- Filter: "Automated tests with status = Failed"

- Time-Based (Last 7 days): Shows all automated tests that failed anytime in the past week (may include same test multiple times)

- Release-Based (Release 2.5): Shows all automated tests that failed when run against Release 2.5 (regardless of when)

- Current: Shows automated tests whose most recent execution failed (each test counted once)

Understanding this distinction prevents misinterpretation of your metrics and ensures you're analyzing the right data for your decision.

## Time-Based Scope: Analyzing Activity Over Time

### What Time-Based Scope Does

Time-Based scope analyzes all test executions that occurred within a specified time period. It creates a temporal "window" and includes every execution that falls within that window.

Technical definition: TestOps queries executions where execution_time falls between start_date and end_date.

#_r_9c_{margin:1.5rem auto 0;}#_r_9c_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_9c_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_9c_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_9c_ .error-icon{fill:#552222;}#_r_9c_ .error-text{fill:#552222;stroke:#552222;}#_r_9c_ .edge-thickness-normal{stroke-width:1px;}#_r_9c_ .edge-thickness-thick{stroke-width:3.5px;}#_r_9c_ .edge-pattern-solid{stroke-dasharray:0;}#_r_9c_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_9c_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_9c_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_9c_ .marker{fill:#333333;stroke:#333333;}#_r_9c_ .marker.cross{stroke:#333333;}#_r_9c_ svg{font-family:inherit;font-size:16px;}#_r_9c_ p{margin:0;}#_r_9c_ .mermaid-main-font{font-family:inherit;}#_r_9c_ .exclude-range{fill:#eeeeee;}#_r_9c_ .section{stroke:none;opacity:0.2;}#_r_9c_ .section0{fill:rgba(102, 102, 255, 0.49);}#_r_9c_ .section2{fill:#fff400;}#_r_9c_ .section1,#_r_9c_ .section3{fill:white;opacity:0.2;}#_r_9c_ .sectionTitle0{fill:#333;}#_r_9c_ .sectionTitle1{fill:#333;}#_r_9c_ .sectionTitle2{fill:#333;}#_r_9c_ .sectionTitle3{fill:#333;}#_r_9c_ .sectionTitle{text-anchor:start;font-family:inherit;}#_r_9c_ .grid .tick{stroke:lightgrey;opacity:0.8;shape-rendering:crispEdges;}#_r_9c_ .grid .tick text{font-family:inherit;fill:#333;}#_r_9c_ .grid path{stroke-width:0;}#_r_9c_ .today{fill:none;stroke:red;stroke-width:2px;}#_r_9c_ .task{stroke-width:2;}#_r_9c_ .taskText{text-anchor:middle;font-family:inherit;}#_r_9c_ .taskTextOutsideRight{fill:black;text-anchor:start;font-family:inherit;}#_r_9c_ .taskTextOutsideLeft{fill:black;text-anchor:end;}#_r_9c_ .task.clickable{cursor:pointer;}#_r_9c_ .taskText.clickable{cursor:pointer;fill:#003163!important;font-weight:bold;}#_r_9c_ .taskTextOutsideLeft.clickable{cursor:pointer;fill:#003163!important;font-weight:bold;}#_r_9c_ .taskTextOutsideRight.clickable{cursor:pointer;fill:#003163!important;font-weight:bold;}#_r_9c_ .taskText0,#_r_9c_ .taskText1,#_r_9c_ .taskText2,#_r_9c_ .taskText3{fill:white;}#_r_9c_ .task0,#_r_9c_ .task1,#_r_9c_ .task2,#_r_9c_ .task3{fill:#8a90dd;stroke:#534fbc;}#_r_9c_ .taskTextOutside0,#_r_9c_ .taskTextOutside2{fill:black;}#_r_9c_ .taskTextOutside1,#_r_9c_ .taskTextOutside3{fill:black;}#_r_9c_ .active0,#_r_9c_ .active1,#_r_9c_ .active2,#_r_9c_ .active3{fill:#bfc7ff;stroke:#534fbc;}#_r_9c_ .activeText0,#_r_9c_ .activeText1,#_r_9c_ .activeText2,#_r_9c_ .activeText3{fill:black!important;}#_r_9c_ .done0,#_r_9c_ .done1,#_r_9c_ .done2,#_r_9c_ .done3{stroke:grey;fill:lightgrey;stroke-width:2;}#_r_9c_ .doneText0,#_r_9c_ .doneText1,#_r_9c_ .doneText2,#_r_9c_ .doneText3{fill:black!important;}#_r_9c_ .crit0,#_r_9c_ .crit1,#_r_9c_ .crit2,#_r_9c_ .crit3{stroke:#ff8888;fill:red;stroke-width:2;}#_r_9c_ .activeCrit0,#_r_9c_ .activeCrit1,#_r_9c_ .activeCrit2,#_r_9c_ .activeCrit3{stroke:#ff8888;fill:#bfc7ff;stroke-width:2;}#_r_9c_ .doneCrit0,#_r_9c_ .doneCrit1,#_r_9c_ .doneCrit2,#_r_9c_ .doneCrit3{stroke:#ff8888;fill:lightgrey;stroke-width:2;cursor:pointer;shape-rendering:crispEdges;}#_r_9c_ .milestone{transform:rotate(45deg) scale(0.8,0.8);}#_r_9c_ .milestoneText{font-style:italic;}#_r_9c_ .doneCritText0,#_r_9c_ .doneCritText1,#_r_9c_ .doneCritText2,#_r_9c_ .doneCritText3{fill:black!important;}#_r_9c_ .vert{stroke:navy;}#_r_9c_ .vertText{font-size:15px;text-anchor:middle;fill:navy!important;}#_r_9c_ .activeCritText0,#_r_9c_ .activeCritText1,#_r_9c_ .activeCritText2,#_r_9c_ .activeCritText3{fill:black!important;}#_r_9c_ .titleText{text-anchor:middle;font-size:18px;fill:#333;font-family:inherit;}#_r_9c_ :root{--mermaid-font-family:inherit;}Jan 18Jan 19Jan 20Jan 21Jan 22Jan 23Jan 24Jan 25Jan 26Jan 27Jan 28Jan 29Jan 30Jan 31Feb 01Old Executions ❌ More Old Tests ❌ Test Execution 1 Test Execution 2 Test Execution 3 Test Execution 4 Test Execution 5 Test Execution 6 Test Execution 7 Excluded (Before Window)Included (Last 7 Days) ✅Time-Based Scope: Last 7 Days Window

Only executions within the time window are analyzed

## Release-Based Scope: Analyzing Release Quality

### What Release-Based Scope Does

Release-Based scope analyzes all test executions associated with specific release(s), regardless of when those tests ran. It groups data by release version, not by time.

Technical definition: TestOps queries executions where release_id matches the selected release(s), ignoring execution_time.

#_r_9f_{margin:1.5rem auto 0;}#_r_9f_{font-family:inherit;font-size:16px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#_r_9f_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#_r_9f_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#_r_9f_ .error-icon{fill:#552222;}#_r_9f_ .error-text{fill:#552222;stroke:#552222;}#_r_9f_ .edge-thickness-normal{stroke-width:1px;}#_r_9f_ .edge-thickness-thick{stroke-width:3.5px;}#_r_9f_ .edge-pattern-solid{stroke-dasharray:0;}#_r_9f_ .edge-thickness-invisible{stroke-width:0;fill:none;}#_r_9f_ .edge-pattern-dashed{stroke-dasharray:3;}#_r_9f_ .edge-pattern-dotted{stroke-dasharray:2;}#_r_9f_ .marker{fill:#333333;stroke:#333333;}#_r_9f_ .marker.cross{stroke:#333333;}#_r_9f_ svg{font-family:inherit;font-size:16px;}#_r_9f_ p{margin:0;}#_r_9f_ .label{font-family:inherit;color:#333;}#_r_9f_ .cluster-label text{fill:#333;}#_r_9f_ .cluster-label span{color:#333;}#_r_9f_ .cluster-label span p{background-color:transparent;}#_r_9f_ .label text,#_r_9f_ span{fill:#333;color:#333;}#_r_9f_ .node rect,#_r_9f_ .node circle,#_r_9f_ .node ellipse,#_r_9f_ .node polygon,#_r_9f_ .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#_r_9f_ .rough-node .label text,#_r_9f_ .node .label text,#_r_9f_ .image-shape .label,#_r_9f_ .icon-shape .label{text-anchor:middle;}#_r_9f_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#_r_9f_ .rough-node .label,#_r_9f_ .node .label,#_r_9f_ .image-shape .label,#_r_9f_ .icon-shape .label{text-align:center;}#_r_9f_ .node.clickable{cursor:pointer;}#_r_9f_ .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}#_r_9f_ .arrowheadPath{fill:#333333;}#_r_9f_ .edgePath .path{stroke:#333333;stroke-width:2.0px;}#_r_9f_ .flowchart-link{stroke:#333333;fill:none;}#_r_9f_ .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_9f_ .edgeLabel p{background-color:rgba(232,232,232, 0.8);}#_r_9f_ .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_9f_ .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#_r_9f_ .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#_r_9f_ .cluster text{fill:#333;}#_r_9f_ .cluster span{color:#333;}#_r_9f_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:inherit;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#_r_9f_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#_r_9f_ rect.text{fill:none;stroke-width:0;}#_r_9f_ .icon-shape,#_r_9f_ .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}#_r_9f_ .icon-shape p,#_r_9f_ .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}#_r_9f_ .icon-shape rect,#_r_9f_ .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}#_r_9f_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#_r_9f_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#_r_9f_ :root{--mermaid-font-family:inherit;}
Release-Based Grouping

Release 2.5

Test A: Pass

Test C: Pass

Test E: Pass

Test F: Pass

Release 2.4

Test A: Pass

Test B: Pass

Test D: Fail

Test E: Pass

Release 2.3

Test A: Pass

Test B: Fail

Test C: Pass

Calendar Timeline (Time-Independent)

Week 1

Week 2

Week 3

Week 4

Grouped by release tag,not execution time

Grouped by release association, not execution time

## Current Scope: Understanding Latest Test Status

### What Current Scope Does

Current scope shows the most recent execution result for each test case, creating a snapshot of your test suite's current state. Each test case appears exactly once—with its latest result.

Technical definition: TestOps queries MAX(execution_time) per test_case_id and returns only those latest executions.

## Decision Framework: Which Scope Should I Use?

Choosing the right scope depends on the question you're trying to answer. Use this decision table to quickly identify the appropriate scope:

My QuestionUse This ScopeWhyHow many tests ran last week?Time-Based (Last 7 days)Counts all executions within time windowIs Release 2.5 ready to ship?Release-Based (2.5)Release-specific quality assessmentWhat's my current pass rate?CurrentLatest status snapshot per test caseHow is our quality trending this month?Time-Based (Last 30 days)Time-based trend analysis with historical dataWhich release had better quality: 2.4 or 2.5?Release-Based (2.4, 2.5)Multi-release comparisonWhich test cases are currently failing?Current + Failed filterLatest status per test case, filtered to failures onlyDid we have any test failures yesterday?Time-Based (Last 24 hours)Executions within specific time periodHow many test cases do we have total?CurrentEach test case counted once (inventory)How complete is testing for Release 3.0?Release-Based (3.0)Release-specific progress trackingAre we executing more tests this sprint than last?Time-Based (This Sprint)Compare execution volume over time

### Time-Based Scope: Detailed Usage Guide

### Release-Based Scope: Detailed Usage Guide

### Current Scope: Detailed Usage Guide

### Common Scope Selection Mistakes

### How Scope Affects Metric Calculations

### Real-World Scenario Examples

## Summary

Analysis Scope is a foundational concept in TestOps that determines which data universe you analyze before applying filters or viewing metrics. Choosing the right scope ensures you're answering the right question with the right data.

Quick reference:

- Time-Based: Use for trend analysis, operational monitoring, and time-based questions

- Release-Based: Use for release readiness, version comparison, and release-specific questions

- Current: Use for status snapshots, test case inventory, and "right now" questions

Remember: Scope defines the data universe; filters narrow within it. Choose scope first based on your question, then apply filters to refine your analysis.

Next steps:

- Practice selecting scopes using the [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope) tutorial

- Learn about scope-specific features in [Dashboard Configuration Guide](/docs/dashboards/how-to/configuration)

- Explore release-specific analysis in [Assessing Release Readiness](/docs/release-readiness/assessing-release-readiness)

## See Also

- [Using Filters & Analysis Scope](/docs/getting-started/filters-and-scope) - Hands-on tutorial for selecting and applying scopes

- [Build Advanced Filter Combinations](/docs/getting-started/build-advanced-filter-combinations) - Complex filter combinations with scope

- [Getting Started with Reports & Analytics](/docs/getting-started/introduction) - Foundation concepts

- [Understanding Report Types](/docs/getting-started/understanding-report-types) - Dashboard vs Report differences

- [Release Metrics & Tracking](/docs/release-readiness/release-metrics-tracking) - Release-Based scope in practice

- [Dashboard Configuration Guide](/docs/dashboards/how-to/configuration) - Configuring scope at dashboard level

[Understanding Report TypesLearn the conceptual differences between dashboards and reports in Katalon TestOps, understand when to use each, and make informed decisions about which tool best fits your monitoring and analysis needs.](/docs/getting-started/understanding-reports-vs-dashboards)[Using Filters & Analysis ScopeHands-on tutorial teaching you how to use filters and analysis scope to focus your Reports & Analytics data on specific time periods, releases, and test execution criteria.](/docs/getting-started/understanding-analysis-scope)