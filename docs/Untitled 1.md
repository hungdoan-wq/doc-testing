This document explains how the **Probabilistic Flakiness Score (PFS)** is calculated to determine flaky tests in **TestOps**.

## Overview

Detecting flaky tests is one of [Smart Tags]()' four core features, calculated based on the **PFS (Probabilistic Flakiness Score)**.

The PFS is a statistical measure designed to capture and signal instability in test behavior over time, in addition to failure rate. It combines multiple flakiness indicators and weighs them based on how strongly they correlate with unreliable tests.

Behind the scenes, we take into consideration the signals below:

- **Flip rate**: how often the test case flips between passing and failing.
    
- **Retry rate**: how often the test case retried.
    
- **Probability of flakiness:** measured by **time-based instability** and **pass/failure balance**.
    
- **Uncertainty interval:**
    

All of these signals are combined to produce a single **PFS**, that truly reflects behavior over time and becomes more reliable as more runs are observed. The score should falls between `0.0` and `1.0`, with `0.0` being most stable, and `1.0` being highly flaky.

## Calculations

Below are details on the calculations of the PFS:

### 1. Flip rate: behavior changes across runs

This indicator shows **how often the test changes its outcome from one run to the next**.

- If a test passes consistently or fails consistently, it is considered stable.
    
- If it frequently switches between pass and fail across consecutive runs, that instability increases the score.
    

This captures _volatility over time_, not overall success rate.

### 2. Retry rate: the need for retries

This indicator shows **how often the test has to be rerun** to pass.

- A test that frequently needs retries is treated as less trustworthy.
    
- Even if retries eventually pass, the need to rerun suggests unreliable behavior.
    

This measures _operational instability_ rather than correctness.

### 3. Probability of flakiness (two independent views)

Flakiness probability is estimated using **two approaches**. Whichever method returns a worse result is used as the final probability for flakiness.

#### a. Time-based instability

This looks at **how unpredictable the pass/fail pattern is across runs**.

- A test whose outcomes vary randomly over time is considered more flaky.
    
- A test with a clear pattern (mostly pass or mostly fail) is considered less flaky.
    

This captures _randomness_, not averages.

#### b. Balance of passes vs failures (adjusted for uncertainty)

This looks at **how close the test is to a 50/50 pass–fail split**:

- Tests that pass about half the time are treated as more flaky.
    
- Tests that almost always pass or almost always fail are treated as less flaky.
    

When there are only a few runs, extra uncertainty (**uncertainty interval**) is added as a weight to reflect less certainty on the true. It prevents early conclusions based on sparse data.

The flakiness estimate is the **stronger of these two signals**, so flakiness is never underestimated.

### 4. Uncertainty interval

The uncertainty interval represents **TestOps' confidence level,** based solely on how much data is available.

- When the number of runs is small, observed pass and fail counts may not accurately reflect the test's true behavior - uncertainty is high.
    
- As the total number of runs increases, the uncertainty interval gradually shrinks. With more observations, the system becomes more confident in the test's true stability, rather than random chance.
    

The uncertainty interval quantifies **how much trust the system places in the observed results**, based on the amount of information available rather than the outcomes themselves.

### Combining everything into the final score

Finally, all indicators are **combined into a single PFS** that [**Smart Tags**]() use to flag a test case as “stable”, “potentially flaky”, or “highly flaky”:

- `0.0` - `0.2`: Consistent tests. These tests are reliable, with predictable behaviour.
    
- `0.2` - `0.8`: Potentially flaky tests. These tests are inconsistent and could potentially cause development friction.
    
- `0.8` - `1.0`: Highly flaky tests. These tests are severely unreliable with frequent status changes, high retry rates, or persistent failures requiring immediate attention.
    

You can see the `Flaky` tag and the **Flakiness** widget on:

- **Executions** page: flaky test runs on this page are flagged `Flaky`; each is linked to its **Test Run Details page** for further investigation.
    
- **Analytics & Trends dashboard**: this dashboard’s `Flakiness` widget displays the number of flaky tests in the selected scope/filters.
    
- **Test Case Health Analysis Report**: this report has the `Flakiness` widget and a data table with links to each flaky test's _latest_ **Test Results Details Page**, for investigation purposes.