---
title: Select an Option from a ComboBox in Windows Desktop Testing
---

This document explains how to select an option from a combobox in **Windows Desktop** testing.

**Katalon Studio Enterprise** currently does not provide a built-in keyword similar to `WebUI.selectOptionByValue()` for **Windows** applications, as **Windows** apps are handled differently from web-based apps. However, there are workarounds you can try:

- Use **Native Windows Recorder** to capture and interact with items in a dropdown list (ComboBox). See [Native Windows Recorder in Katalon Studio](https://docs.katalon.com/katalon-studio/record-and-spy/windows-record-and-spy-utilities/native-windows-recorder-in-katalon-studio) to learn more.
- For testing done on a remote machine, you can use **Desktop Remote Testing** to record and run your test cases. See [Set up Desktop Driver to Run Tests on a Remote Machine](https://docs.katalon.com/katalon-studio/manage-projects/set-up-projects/windows-desktop-apps-testing/desktop-applications-testing-with-flaui-driver-in-katalon-studio#set-up-desktop-driver-to-run-tests-on-a-remote-machine) to learn more.
