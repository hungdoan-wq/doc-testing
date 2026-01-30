---
title: "Unable to use external MCP Servers with StudioAssist using AWS Bedrock"
---

When you activate Agent mode, StudioAssist fails to generate the answer.

This issue occurs when you use **StudioAssist Agent mode** with an **external/custom MCP server** that you added, and the AI service provider is set as **AWS Bedrock**.

<img alt="Error when run MCP server tool with AWS Bedrock " src="https://tw-cdn.katalon.com/katalon-studio/troubleshooting/troubleshoot-studioassist-issues/error-when-run-mcp-tools-with-aws.png" width="500 " />

## Cause

AWS Bedrock requires that **all enabled MCP tools have a description** when communicating with the server. If any enabled tool in your external MCP configuration is missing its description, the service request is rejected, and StudioAssist cannot run.

## Remedy

Since AWS Bedrock does not support MCP tools that lack a description, you must disable the non-compliant tools to resolve the issue.

1. **Check enabled tools:** Review the list of external MCP tools you have enabled in your configuration.
2. **Disable tools:** Disable any tool that currently has an empty description.