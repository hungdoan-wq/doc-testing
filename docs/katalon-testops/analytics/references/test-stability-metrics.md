# Test Stability Metrics

Content coming soon.


### Understanding Stability Indicators in List View

Once enabled, you'll see two key indicators for each test:

PFS Score - Numerical score from 0.0 to 1.0 displayed in a dedicated column:

- Higher scores indicate greater flakiness likelihood

- Color-coded: Green (0.0-0.3), Yellow (0.3-0.7), Red (0.7-1.0)

- Calculated from historical pass-to-fail transition patterns

Smart Tags - Colored badges that categorize stability status:

- Flaky (orange badge): PFS ≥ 0.7, alternating pass/fail pattern

- Always Failing (red badge): Consistent failures over time

- New Failure (blue badge): Recently started failing after passing consistently

- Stable (green badge): Consistent pass behavior (PFS < 0.3)

Hover over any Smart Tag to see detailed PFS calculation context and transition history.
