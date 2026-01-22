{

How to integrate with TestOps to get data

Arcade to demonstrate overall features

Explore Dashboards (mention purpose, kinds of dashboards)

Explore Reports (mention purpose different from dashboards, groups of concerns and corresponding reports)

}

```mermaid
flowchart TD

    A[New User Arrives at TestOps]
    B[Navigate to Reports & Analytics]
    C{What's My Task?}
    D[Live Monitor Dashboard]
    E[Project Dashboard]
    F[Test Results Analysis Report]
    G[Release Health Dashboard]
    H[Apply Filters]
    I[Find Answer/Insight]
    J[Take Action]

    A --> B
    B --> C
    C -- Monitor live tests --> D
    C -- Check overall quality --> E
    C -- Investigate failures --> F
    C -- Release readiness --> G
    D --> H
    E --> H
    F --> H
    G --> H
    H --> I
    I --> J

```