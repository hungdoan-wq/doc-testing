---
title: Visual Testing overview (Legacy)
---

import Reusable from '@site/src/reusable/Reusable.mdx';
import useBaseUrl from '@docusaurus/useBaseUrl';

This document explains what is **Visual Testing** in **TestOps**.

<Reusable />

## What is Visual Testing?

**Visual** testing is an automated process used to verify the user interface (UI) of web and mobile applications, ensuring that the application appears to end users exactly as intended.

With incorporated artificial intelligence (AI), visual testing also refers to the AI image comparison, in which you could compare the visible output (of your tests) against the baseline image using an AI engine.

Since comparing images manually (using human eyes only) could still result in human errors, visual testing allows automated image comparison using AI-powered functions such as pixel-by-pixel detection, text-change detection, and layout-change detection.

Visual testing helps reduce human errors to a minimum because it captures even minor differences between two images, which human eyes might accidentally miss.

:::note
A baseline image is a reference image initially configured to compare with other image output from visual testing.
:::

## Insights

If the software has visual issues, functional testing cannot help since it focuses on the software behaviors only.

For example, automated functional tests cannot detect any change regarding the layout, colors, fonts, or misplacement of elements on a website. In such a case, one would need to check for any visual regressions instead, and the apparent solution is to run visual testing.

Furthermore, there is an increasing demand for opening/using software on different platforms. Considering the combination of different operating systems and browsers when developing a website, it is also wise to be aware that the website might display adequately on one browser but improperly on another browser. Hence, testing a website across various platforms is crucial to check for any visual defects. Manually doing so would cost tremendous time and effort, not to mention that the human eyes might still miss one or two minor visual bugs if checking complex layouts.

Running visual tests spots visual bugs faster and more effectively, and it makes sure those bugs cannot slip into production. Consequently, visual testing helps boost productivity, increase product confidence, and optimize user experiences.

## Relevant documents

Below are documents that cover the **Visual Testing** features for **TestOps (Legacy)**:

1. How to set up **Visual Testing**: [Set up Visual Testing (Legacy)](/katalon-platform/analyze/visual-testing-legacy/set-up-visual-testing)
2. How to set up a visual baseline collection: [Create Visual Baseline collection (Legacy)](/katalon-platform/analyze/visual-testing-legacy/create-visual-baseline-collection)
3. How to use **Visual Testing**: [Use TestOps Visual Testing (Legacy)](/katalon-platform/analyze/visual-testing-legacy/use-testops-visual-testing)
4. How to adjust Pixel Sensitivity level: [Adjust Pixel Sensitivity level (Legacy)](/katalon-platform/analyze/visual-testing-legacy/adjust-the-pixel-sensitivity-level)
5. Robot framework integration with **Visual Testing**: [Robot Framework integration with Visual Testing (Legacy)](/katalon-platform/analyze/visual-testing-legacy/robot-framework-integration-with-visual-testing)