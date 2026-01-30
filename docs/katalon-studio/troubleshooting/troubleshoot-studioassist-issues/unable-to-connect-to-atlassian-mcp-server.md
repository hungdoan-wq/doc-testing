---
title: Unable to connect to Atlassian MCP server on macOS machine
---

## Cause
This issue occurs when Katalon Studio (KS) is upgraded from an older version to a newer version, causing the application signature to change and preventing access to data stored in the OS secure storage.

## Remedy

You need to delete the file containing the MCP token, then set up the connection to the MCP server again.
1. Locate the `.katalon` folder on your machine: `/Users/<user_name>/.katalon`.
> **Tip:** Since `.katalon` is a hidden folder, use <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> to view the folder.

1. In the `studioassist` folder, delete the `session.properties` file.
2. Go to Katalon Studio and add the MCP server again.