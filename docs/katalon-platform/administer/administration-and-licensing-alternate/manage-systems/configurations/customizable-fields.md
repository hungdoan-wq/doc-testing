---
title: "Customizable Fields"
---

This document explains how to configure and manage customizable fields in TestOps to organize, categorize, and report on your testing data effectively.

## Overview
Customizable Fields allow teams to **add metadata attributes** to testing entities such as **Test Case**, **Test Run**, and **Test Result, configurable by users**.

By configuring these fields, you can categorize, filter, and organize your testing data effectively across the entire test management lifecycle.

:::tip requirement
- You must have the **Account Admin** or **System Admin** role to configure customizable fields.
:::

1. Go to the **Admin UI** in TestOps.
2. Navigate to **System → Configurations → Customizable Fields tab**.

    <img alt="Custom Fields Overview UI" src="https://tw-cdn.katalon.com/katalon-platform/configuration/custom-fields/custom-fields-overview.png" />
**Benefits**

- **Align testing with business context**: Capture key information like project phase, release cycle, or environment directly in your test entities for easier collaboration and reporting.
- **Boost productivity in reporting and filtering**: Quickly filter, sort, and group test data using meaningful labels, making it easier to find relevant results or patterns.
- **Improve visibility across teams**: Enable QA, Dev, and PM stakeholders to track progress and coverage based on shared attributes such as priority, feature area, or owner.
- **Simplify audits and compliance tracking**: Maintain consistent metadata that supports traceability for audits, version control, and regulatory requirements.
- **Scale effectively with governance**: Manage metadata growth through predefined limits and standardized field configurations, ensuring performance and consistency across large teams.

---

## Field Types and Limits

Katalon provides a predefined set of customizable fields to ensure optimal performance and data integrity.

You can **edit these existing fields** to fit your needs, but **you cannot create additional fields beyond the provided limit**.

| **Field Type** | **Numbers of Available fields to use** | **Description** |
| --- | --- | --- |
| Dropdown (Single Select) | 15 fields | User can only select one value from a dropdown |
| Dropdown (Multiple Select) | 2 fields | User can only select one or more values from a dropdown |
| Text | 5 fields | Text input |
| Number | 2 fields | Number only input |
| Date | 2 fields | Date only input |
| Checkbox | 2 fields | Boolean (true/false) input |

**Example**: If you need a dropdown field for tracking “Environment” (e.g., *Staging*, *Production*, *UAT*), you can rename one of the available `dropdown_single` fields and define your desired options.

However, once all 15 single-select dropdown fields are used, you **cannot add a 16th** — you must repurpose or edit one of the existing ones.

## Important Notes

- Field limits are **fixed** — you can modify field names, tooltips, and options, but cannot create new ones beyond the predefined count.
- Changes to field configuration apply globally to all users in the workspace.
- Modifying or repurposing a field affects existing data associated with that field.

---

## Editing a Custom Field

1. On the **Customizable Fields** page, click the ✏️ **Edit** icon next to the field you want to modify.
2. The **Edit Custom Field** dialog appears (see example below).
3. Configure the following options:
    a. Dropdown Single: <img alt="Dropdown Single Field Config" src="https://tw-cdn.katalon.com/katalon-platform/configuration/custom-fields/dropdown-single.png" width="300" />
    b. Dropdown Multiple: <img alt="Dropdown Multiple Field Config" src="https://tw-cdn.katalon.com/katalon-platform/configuration/custom-fields/dropdown-multiple.png" width="300" />
    c. Text field: <img alt="Text Field Config" src="https://tw-cdn.katalon.com/katalon-platform/configuration/custom-fields/text-field.png" width="300" />
    d. Number field: <img alt="Number Field Config" src="https://tw-cdn.katalon.com/katalon-platform/configuration/custom-fields/number-field.png" width="300" />
    e. Date field: <img alt="Date Field Config" src="https://tw-cdn.katalon.com/katalon-platform/configuration/custom-fields/date-field.png" width="300" />
    f. Checkbox field: <img alt="Checkbox Field Config" src="https://tw-cdn.katalon.com/katalon-platform/configuration/custom-fields/checkbox-field.png" width="300" />
4. Click **Save** to apply your changes.
5. The updated field will immediately reflect across the selected entities.

**Result**

Your customizable field will be visible on all test cases (or whichever object you chose).

<img alt="Custom Fields showing on UI - TC" src="https://tw-cdn.katalon.com/katalon-platform/configuration/custom-fields/custom-fields-result-tc.png" width="700" />

| Setting | Description |
| --- | --- |
| **Required** | Toggle ON to make the field mandatory. |
| **Visible** | Toggle ON to make the field appear in the UI. |
| **Applied To Objects** | Choose one or more entities (Test Case, Test Run, Test Result) where this field will appear. |
| **Label** | The display name that appears in your workspace. |
| **Key** | The internal identifier that uniquely distinguishes each customizable field within the system. |
| **Tooltip/Description** | Optional text that describes the field’s purpose. |
| **Menu Options** *(for Dropdown fields)* | Add or modify the selectable values (up to 30). |
| **Default Value** | Specify a value that appears by default. |
| **Exportable** | Enable this to include the field data in exports and reports. |
