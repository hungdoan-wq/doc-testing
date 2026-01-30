---
title: Cannot bulk-select text in Katalon Studio after upgrading macOS to Tacoma 26.2+
---

This document explains how to troubleshoot bulk-select text issue in **Katalon Studio** after upgrading MacOS to Tacoma v26.2+.

## Issue

After upgrading macOS to **Tacoma 26.2 or 26.3**, users reported they are able to select/copy-paste multiple lines, but the selected lines are not highlighted, except for the last line. This issue occurs when using the cursor to select, or using keyboards like pressing **Command + A** to select all texts.

While copy-paste still works, it is confusing to users (issue reported and acknowledged on the **Katalon Forum**: [MacOS 26.1 causes Katalon text highlighting problems in IDE](https://forum.katalon.com/t/macos-26-1-causes-katalon-text-highlighting-problems-in-ide/185338))

## Root Cause

This is a known compatibility issue between:

- **macOS Tacoma 26.2 and later**
- The **Eclipse version** currently used in **Katalon Studio 10.x**

The problem originates from the underlying IDE platform rather than Katalon-specific editor logic.

## Solution

**Current status**

- There is **no permanent fix or workaround** available in **Katalon Studio** 10.x for the text selection issue on macOS Tacoma 26.2+.
- The issue is related to the **Eclipse and Java platform compatibility**, not to a configurable setting within Katalon Studio.

**Future resolution**

- This issue is expected to be **resolved in Katalon Studio version 11**