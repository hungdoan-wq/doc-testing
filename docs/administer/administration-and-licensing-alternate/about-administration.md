---
title: "Administration Overview"
---
This document outlines the organizational structure and user roles within Katalon TestOps, with a focus on the administrative (Admin) functions

Katalon TestOps uses a tiered administration system that groups all account management and platform settings under a single Admin section. It consists of two hierarchical levels:

- **Account Level**: Centralizes global settings across the organization (for Admins).
- **Project Level**: Manages settings within individual projects (for Testers/QA).

A typical organizational structure looks like this:

```mermaid
graph TD
    %% Node Definitions
    Acc["Account<br/>(Company XYZ)"]
    
    Org3["Organization 3<br/>(Sales Dept)"]
    Org2["Organization 1<br/>(Product Dept)"]
    Org1["Organization 2<br/>(Engineering Dept)"]
    
    Sub1["Sub-organization 2<br/>(Backend Team)"]
    Sub2["Sub-organization 3<br/>(QA Team)"]
    Sub3["Sub-organization 1<br/>(PM Team)"]
    
    P1[Project 5]
    P2[Project 2]
    P3[Project 3]
    P4[Project 4]
    P5[Project 1]

    %% Connections
    Acc --> Org3
    Acc --> Org2
    Acc --> Org1

    Org3 --> P1
    Org2 --> Sub3
    Org1 --> Sub1
    Org1 --> Sub2

    Sub3 --> P5
    Sub1 --> P2
    Sub1 --> P3
    Sub2 --> P4

    %% Styling
    style Acc fill:#f9dcc4,stroke:#333,stroke-width:1px
    style Org1 fill:#d0e1f9,stroke:#333,stroke-width:1px
    style Org2 fill:#d0e1f9,stroke:#333,stroke-width:1px
    style Org3 fill:#d0e1f9,stroke:#333,stroke-width:1px
    style Sub1 fill:#b39ddb,stroke:#333,stroke-width:1px
    style Sub2 fill:#b39ddb,stroke:#333,stroke-width:1px
    style Sub3 fill:#b39ddb,stroke:#333,stroke-width:1px
    style P1 fill:#a5d6a7,stroke:#333,stroke-width:1px
    style P2 fill:#a5d6a7,stroke:#333,stroke-width:1px
    style P3 fill:#a5d6a7,stroke:#333,stroke-width:1px
    style P4 fill:#a5d6a7,stroke:#333,stroke-width:1px
    style P5 fill:#a5d6a7,stroke:#333,stroke-width:1px
```

## About Roles

- When a user is added to an Account, they are assigned the **User** role by default.
- When a user is added to a Project, they are assigned the **Tester** role by default.
- A user can have **multiple roles** across projects or scopes. Their effective permissions will be the **union** **of all assigned roles**.    

Roles determine what a user can see and do, whether at the Account level (for administrative tasks) or the Project level (for test-related work). Assigning the right roles ensures users have appropriate access based on their responsibilities.

> The in-app Permission Guide still references shorthand such as `C`, `R`, `U`, and `D` for Create, Read, Update, and Delete (and occasionally `A` for Archive). The action lists below spell out the same capabilities in plain language.

## Account-Level Roles

| Role | Description |
| --- | --- |
| Account Admin | Manages account-level settings, subscriptions, and permission templates. |
| System Admin | Manages system settings and third-party integrations. |
| User | Base-level access. Required for any user joining an account. |

### Actions Available at the Account Level
<table
  className="table anchor_top_offset"
  id="table-584f02"
  style={ { width: "100%", tableLayout: "fixed", borderCollapse: "collapse", wordBreak: "break-word" } }
>
  <caption />
  <colgroup>
      <col style={ { width: "20%" } } />
      <col style={ { width: "34%" } } />
      <col style={ { width: "34%" } } />
      <col style={ { width: "12%" } } />
  </colgroup>

  <thead className="thead">
    <tr>
        <th>
        </th>
        <th>
          **_Account Admin_**
        </th>
        <th>
          **_System Admin_**
        </th>
        <th>
          **_User_**
        </th>
    </tr>
  </thead>

  <tbody className="tbody">
      <tr>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          **User Management**
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • Invite users<br/>
          • Revoke invitation<br/>
          • Resend invitation<br/>
          • Edit users role<br/>
          • Remove users from Account<br/>
          • Export User Management page
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          **Subscription Management**
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • Purchase subscription<br/>
          • Upgrade subscription<br/>
          • Cancel subscription
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          **Project Management**
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • View the Project list and details<br/>
          • Create a Project<br/>
          • Edit Project’s name<br/>
          • Delete a Project<br/>
          • Invite users to Project<br/>
          • Resend invitations to Project<br/>
          • Remove users from Project<br/>
          • Edit user's Project role
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          **Payment Method**
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • View payment method<br/>
          • Edit payment method<br/>
          • Delete payment method
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          **License Management**
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • View License Management page<br/>
          • Assign licenses to users<br/>
          • Revoke licenses from users
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          **Organization Management**
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • Create Organizations<br/>
          • View Organization information<br/>
          • Update Organization information
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          **Account Settings**
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • View Account information<br/>
          • Update Account information<br/>
          • Delete Account
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          **Security Settings**
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • Configure Idle TimeOut<br/>
          • Configure Session Timeout<br/>
          • Configure IP Address Whitelist<br/>
          • Configure Single Sign-On
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • Configure Idle TimeOut<br/>
          • Configure Session Timeout<br/>
          • Configure IP Address Whitelist<br/>
          • Configure Single Sign-On
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          **Integration Settings**
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • Create an Integration<br/>
          • Disconnect an Integration<br/>
          • Update an Integration
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • Create an Integration<br/>
          • Disconnect an Integration<br/>
          • Update an Integration
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          **AI Settings**
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • Enable AI setting<br/>
          • Disable AI setting<br/>
          • Update AI setting<br/>
          • Add AI key<br/>
          • Delete AI key
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • Enable AI setting<br/>
          • Disable AI setting<br/>
          • Update AI setting<br/>
          • Add AI key<br/>
          • Delete AI key
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          **Other Configurations**
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • Add KRE Agents<br/>
          • Configure KRE Agents<br/>
          • Create Application under Test<br/>
          • View Application under Test list<br/>
          • Delete Application under Test
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • Add KRE Agents<br/>
          • Configure KRE Agents<br/>
          • Create Application under Test<br/>
          • View Application under Test list<br/>
          • Delete Application under Test
        </td>
        <td
          className="entry"
          style={ { padding: 8, wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
      </tr>
  </tbody>
</table>

## Project-Level Roles

| Role | Description |
| --- | --- |
| Project Admin | Manages project settings, roles, and integrations. |
| Test Lead | Approves test cases, manages key testing artifacts. |
| Tester | Creates and updates test cases, test runs, test suites, etc. |
| Member | Read-only or limited access, based on license and permission template. |

### Actions Available at the Project Level

<table
  className="table anchor_top_offset"
  id="table-10ac01"
  style={ { width: "100%", tableLayout: "fixed", borderCollapse: "collapse", wordBreak: "break-word" } }
>
  <caption />
  <colgroup>
      <col style={ { width: "16%" } } />
      <col style={ { width: "21%" } } />
      <col style={ { width: "21%" } } />
      <col style={ { width: "21%" } } />
      <col style={ { width: "21%" } } />
  </colgroup>

  <thead className="thead">
    <tr>
        <th>
           
        </th>
        <th>
          _**Project Admin**_
        </th>
        <th>
          _**Test Lead**_
        </th>
        <th>
          _**Tester**_
        </th>
        <th>
          _**Member**_
        </th>
    </tr>
  </thead>

  <tbody className="tbody">
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          **Project Management**
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • View Project’s General Information<br/>
          • Edit Project’s name<br/>
          • Invite users to Project<br/>
          • Resend invitations to Project<br/>
          • Remove users from Project<br/>
          • Edit user's Project role                                                                                                              
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          **Project Integrations** (Note: Integrations must first be set up at the Account-level)
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • Configure integrations<br/>
          • Edit integrations<br/>
          • Archive/unarchive integrations<br/>
          • View integrations
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          **Project Configurations**
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • View KRE Agent Information<br/>
          • Connect/Disconnect KRE Agent<br/>
          • Link AUT (Application Under Test)<br/>
          • View linked AUT
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          No access
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          **Home (Reports and Analytics)**
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • View dashboard<br/>
          • Add dashboard<br/>
          • Edit dashboard<br/>
          • Edit threshold for dashboard<br/>
          • Export/Share dashboard/test report
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • View dashboard<br/>
          • Add dashboard<br/>
          • Edit dashboard<br/>
          • Edit threshold for dashboard<br/>
          • Export/Share dashboard/test report
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • View dashboard<br/>
          • Export/Share dashboard/test report
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • View dashboard<br/>
          • Export/Share dashboard/test report
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          **Planning**
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • View Sprint Timelines<br/>
          • View Plans (Sprints & Releases)<br/>
          • Edit Items of a Sprint/Release
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • View Sprint Timelines<br/>
          • View Plans (Sprints & Releases)<br/>
          • Edit Items of a Sprint/Release
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • View Sprint Timelines<br/>
          • View Plans (Sprints & Releases)<br/>
          • Edit Items of a Sprint/Release
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • View Sprint Timelines<br/>
          • View Plans (Sprints & Releases)
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          **Tests**
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • Create test case/test suite<br/>
          • Import test case<br/>
          • Edit test case/test suite<br/>
          • Delete test case/test suite<br/>
          • View test case/test suite
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • Create test case/test suite<br/>
          • Import test case<br/>
          • Edit test case/test suite<br/>
          • Delete test case/test suite<br/>
          • View test case/test suite
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • Create test case/test suite<br/>
          • Import test case<br/>
          • Edit test case/test suite<br/>
          • Delete test case/test suite<br/>
          • View test case/test suite
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          View test case/test suite
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          **Executions**
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • View Execution details and logs<br/>
          • Create Automated Test Run<br/>
          • Create Manual Test Run<br/>
          • Start/Run Execution<br/>
          • Edit/Delete Execution<br/>
          • View Visual Testing Info<br/>
          • Manage Recurring Test Run<br/>
          • Comment/Attach files in manual execution<br/>
          • Report defects
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • View Execution details and logs<br/>
          • Create Automated Test Run<br/>
          • Create Manual Test Run<br/>
          • Start/Run Execution<br/>
          • Edit/Delete Execution<br/>
          • View Visual Testing Info<br/>
          • Manage Recurring Test Run<br/>
          • Comment/Attach files in manual execution<br/>
          • Report defects
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • View Execution details and logs<br/>
          • Create Automated Test Run<br/>
          • Create Manual Test Run<br/>
          • Start/Run Execution<br/>
          • Edit/Delete Execution<br/>
          • View Visual Testing Info<br/>
          • Manage Recurring Test Run<br/>
          • Comment/Attach files in manual execution<br/>
          • Report defects
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • View Execution details and logs<br/>
          • View Visual Testing Info
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          **TestCloud**
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • Upload Applications (.apk/.ipa/.zip)<br/>
          • Live Testing: Mobile App, Mobile Browser, Desktop Browser<br/>
          • Delete Applications<br/>
          • View Application Info
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • Upload Applications (.apk/.ipa/.zip)<br/>
          • Live Testing: Mobile App, Mobile Browser, Desktop Browser<br/>
          • Delete Applications<br/>
          • View Application Info
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          • Upload Applications (.apk/.ipa/.zip)<br/>
          • Live Testing: Mobile App, Mobile Browser, Desktop Browser<br/>
          • Delete Applications<br/>
          • View Application Info
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          View application Information
        </td>
      </tr>
  </tbody>
</table>