---
title:  "Migrate Katalon Studio from 10.x to 11.x"
---
import useBaseUrl from '@docusaurus/useBaseUrl';


Katalon Studio 11.x includes several important core framework upgrades to ensure improved compatibility and support for modern automation standards. These changes may introduce breaking behavior in projects that depend on older versions of the underlying runtimes or libraries. This document outlines the core framework updates in 11.x and any required manual updates.


## Core Framework comparison

<table
  className="table anchor_top_offset"
  id=""
  style={ { width: "90%", tableLayout: "fixed", borderCollapse: "collapse", wordBreak: "break-word" } }
>
  <caption />
  <colgroup>
      <col style={ { width: "30%" } } />
      <col style={ { width: "30%" } } />
      <col style={ { width: "30%" } } />
  </colgroup>

  <thead className="thead">
    <tr>
        <th>
          Core Framework
        </th>
        <th>
          10.x
        </th>
        <th>
          11.x
        </th>
    </tr>
  </thead>

  <tbody className="tbody">
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Selenium
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          4.22
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          4.39
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Cucumber
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          3.x
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          7.x
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Java
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          17
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          21
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Eclipse
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          2024-06
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          2025-09
        </td>
      </tr>
      <tr>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          Appium Java Client
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          9.2.3
        </td>
        <td
          className="entry"
          style={ { padding: 8, verticalAlign: "top", wordBreak: "break-word", border: "1px solid #e5e7eb" } }
        >
          10.0.0
        </td>
      </tr>
  </tbody>
</table>


## Impact on BDD projects
With the upgrade to Cucumber 7, BDD projects may require manual updates in the following areas:

#### Step definition imports
Legacy `cucumber.api.*` imports must be replaced with `io.cucumber.*`.

#### Step definition syntax
  - Regex-based step definitions must explicitly use `^` and `$` anchors.
  - Cucumber Expressions (`{string}`, `{int}`, etc.) remain supported and are recommended.
  - `{string}` parameters now require quoted values in feature files.

#### Tag expressions
Comma-separated tags (`,`) are no longer supported for OR conditions. You need to replace with explicit operators (**and**, **or**, **not**) in tag expressions.

Keywords such as `runFeatureFolderWithTags` and `runFeatureFileWithTags` may fail if tags are not updated.

**Example**

- Before (10.x and earlier)
```jsx
String[] tags = ["@tag1, @tag2"]
```

- After (11.x)
```jsx
String[] tags = ["@tag1 or @tag2"]
```

