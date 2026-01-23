---
title: "Private Jira/Git Integration: Network Troubleshooting"
---
This guide explains how to configure secure network connectivity between **Katalon TestOps** and **private Jira or Git instances** hosted on-premise or behind a corporate firewall.

Use this guide together with the functional setup instructions in the Jira and Git integration documents:
- **Jira integration**: [Jira integration guide](/katalon-platform/integrations/alm-and-test-management/jira-integration)
- **GitHub integration**: [GitHub integration guide](/katalon-platform/integrations/repository/github-integration)

---

## When you need this guide

Follow this guide if any of the following apply:

- Your Jira instance or Git repository is hosted **on-premise** or in a **private VPC**  
- Access to Jira or Git is restricted by a **corporate firewall, VPN, or proxy**  
- You want to synchronize:
  - Jira issues, defects, requirements, releases, or sprints  
  - Git commits, pull requests, branches, or tags  

To enable these use cases, **Katalon TestOps and your private Jira/Git instances must communicate securely over HTTPS (port 443)**.

Your organization must choose **one of the following connectivity approaches**:

- **Inbound access**: Allow traffic from Katalon IP addresses through your firewall  
- **Outbound-only access**: Use **Katalon Tunnel** to avoid exposing internal systems to the internet  

The table below summarizes the required traffic direction and supported mechanisms.

| Source → Destination        | Recommended approach              | Purpose |
| --------------------------- | --------------------------------- | ------- |
| Katalon → Internal Jira/Git | Katalon Tunnel or IP allowlisting | Query issues, create/update defects, releases, and sprints; fetch Git commits; update test metadata |
| Internal Jira/Git → Katalon | Domain allowlisting               | Send webhooks and API callbacks from Jira/Git to TestOps |

---

## What you can do after configuration

After completing the network configuration, you can:

- Link Katalon test cases and defects to Jira issues  
- Associate test runs with Jira sprints or releases  
- Sync Jira requirements, releases, and sprints into TestOps  
- Connect TestOps to private Git repositories  
- Sync Git commits and pull requests with TestOps  

---

## Configure inbound traffic (Katalon → Jira/Git)

Inbound traffic allows Katalon services to access your internal Jira or Git instances over HTTPS.

### Option 1: Allowlist Katalon IP addresses

Configure your firewall to allow HTTPS (TCP 443) access from Katalon TestOps servers to your Jira or Git hosts.

:::info Recommendations
- Limit access to only the required Jira/Git hosts and ports  
- Ensure TLS/SSL (HTTPS) is enabled on Jira and Git  
- Coordinate IP reviews with Katalon if your security team requires periodic validation
:::

| Action | Protocol | Source IP        | Destination port |
| :----: | :------: | :--------------- | :--------------- |
| ALLOW  | TCP      | 54.146.187.152   | 443 (HTTPS)      |
| ALLOW  | TCP      | 18.204.240.9     | 443 (HTTPS)      |
| ALLOW  | TCP      | 35.174.93.205    | 443 (HTTPS)      |
| ALLOW  | TCP      | 52.45.203.41     | 443 (HTTPS)      |
| ALLOW  | TCP      | 52.203.34.201    | 443 (HTTPS)      |
| ALLOW  | TCP      | 35.172.81.5      | 443 (HTTPS)      |

---

### Option 2: Outbound-only connectivity using Katalon Tunnel

:::caution
Use this option if you cannot or do not want to open inbound firewall rules to your private network.
:::

With Katalon Tunnel, all traffic from TestOps to Jira/Git flows through a secure outbound HTTPS connection.

Steps:
1. Install the **Katalon Tunnel agent** on an internal machine that can access Jira and Git  
2. Authenticate the tunnel using a token generated in TestOps  
3. Configure the Jira and Git integrations in TestOps to use this tunnel  
4. All Katalon → Jira/Git traffic is routed through the tunnel connection  

---

## Configure outbound traffic (Jira/Git → Katalon)

Outbound traffic enables Jira and Git to send **webhooks and API callbacks** to Katalon TestOps.

Allow outbound HTTPS (TCP 443) from Jira and Git to the following domains:

| Protocol | Port | Destination domain              | Description |
| :------: | :--: | :------------------------------ | ----------- |
| TCP      | 443  | `katalon-api.katalon.com`       | Katalon API services |
| TCP      | 443  | `api.katalon.com`               | Katalon API services |
| TCP      | 443  | `<your-subdomain>.katalon.io`   | Your TestOps organization |
| TCP      | 443  | `testops.katalon.io`            | TestOps web application |
| TCP      | 443  | `platform.katalon.com`          | Katalon Platform services |

If your environment uses an outbound proxy, ensure these domains are reachable through that proxy.

---

## Connectivity checks and troubleshooting

After configuring firewall rules or tunnel settings, use the steps below to verify connectivity and resolve common issues.

### 1. Test inbound connectivity (Katalon → Jira/Git)

- In TestOps, open the Jira or Git integration page and click **Test Connection**  
- If the test fails:
  - Review firewall rules or tunnel status  
- After a successful test:
  - Confirm Jira boards and issues are visible  
  - Confirm Git repositories are accessible  
  - Verify TestOps can create Jira defects and read/write Git metadata  

---

### 2. Test outbound connectivity (Jira/Git → Katalon)

- In Jira, create or update a requirement, release, or sprint  
- In Git, push a commit or create a pull request  
- Verify that TestOps receives the webhook events in the **Tests** and **Plans** modules  

---

### 3. End-to-end validation

**For Jira**:
- Sync releases, sprints, and requirements into TestOps  
- Link a test case to a requirement and execute a test run  
- Link the test run to a Jira sprint or release  
- Create or link a defect and confirm data stays in sync  

**For Git**:
- Connect a Git repository to TestOps  
- Push a commit that updates test files or metadata  
- Execute test suites and confirm executions are linked to the correct commits  

If any validation step fails, continue with the troubleshooting checks below.

---

## Common connectivity problems

### Tunnel connectivity issues (Katalon → Jira/Git)

- Ensure the tunnel host can reach Jira/Git over HTTPS (port 443)  
- Verify outbound firewall or proxy rules  
- Restart the tunnel client and confirm the token is valid  
- Review tunnel logs for authentication, DNS, or timeout errors  

---

### Webhooks not received (Jira/Git → Katalon)

- Confirm outbound HTTPS access to the required Katalon domains  
- Verify webhook URLs in Jira and Git are correct  
- Check firewall or proxy logs for blocked requests  
- Re-trigger webhook events and confirm they appear in TestOps  

---

## FAQs

**1. Do I need to whitelist Katalon IP addresses?**  
Only if you choose IP allowlisting for inbound traffic. If you use Katalon Tunnel, IP allowlisting is not required.

**2. Does Katalon Tunnel require inbound firewall rules?**  
No. The tunnel uses an outbound-only HTTPS connection on port 443.

**3. Can one tunnel be used for both Jira and Git?**  
Yes. The tunnel host must be able to access both systems.

**4. Is VPN supported?**  
Yes. The tunnel works over VPN as long as outbound HTTPS traffic is allowed.

**5. What happens if the tunnel goes offline?**  
Synchronization pauses temporarily. TestOps resumes automatically once the tunnel reconnects.

**6. Are domain allowlists required for Jira/Git → Katalon?**  
Yes. Jira and Git must be able to reach the Katalon domains listed in the outbound traffic section.
