---
title: Adjust the pixel sensitivity level
---

import Reusable from '@site/src/reusable/Reusable.mdx';
import useBaseUrl from '@docusaurus/useBaseUrl';

This document explains how to adjust **pixel sensitivity level** for **Visual Testing** in **TestOps**.

<Reusable />

When comparing images **in Visual Testing**, the pixel-based method can pick up minor pixel differences that are not critical to human eyes. To reduce the false positives, you can adjust the pixel sensitivity level and apply it to a whole baseline collection.

To adjust the pixel sensitivity level, follow these steps:

1. Go to your **Project** > **Visual Testing**. <br/> The **Visual Test Runs** tab appears. Click on a Test Run ID.
2. Select one of the screenshots to adjust the pixel sensitivity level. Here you can preview if the level matches your preference.
    ![Pixel sensitivity adjust bar](https://docs.katalon.com/d6c07880-6f9d-11ed-a602-0242cfbc79b5/pixel-sensi.png)
    
    You can adjust the level to be stricter or more relaxed. Once the **Diffs** number is 0, it means the minor pixel differences are completely eliminated.
3. You can then set the same pixel sensitivity level for the **Visual Baseline Collection**. This level will be applied to all visual test runs that use the same baseline collection.
    
    ![Compare pixel sensitivity in baseline collection](https://docs.katalon.com/d6cbea30-6f9d-11ed-a602-0242cfbc79b5/pixel-bc.png)
    