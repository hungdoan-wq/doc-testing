---
title: Visual Testing overview
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Visual Testing** is designed to aid functional testing, which focuses on software behaviors and might let visual issues slip into production. It aims to ensure the user interface (UI) of web and mobile applications appear to end users exactly as intended, across various platforms.

**Visual Testing** works by auto-comparing and displaying differences between specific UI snapshots in the initial run and subsequent runs, with the help of AI. With **Visual Testing**, human error becomes minimal, as even minor differences are captured, which human eyes often miss.

## Get Started with Visual Testing

:::note Requirements
- Include `takeScreenshotAsCheckpoint` keywords in your test cases. Make sure the test suite (TS)/test suite collection (TSC) contains this test case.
- Choose one integration option with **TestOps**:
  - **GitHub**: See [Github Integration](/katalon-platform/integrations/repository/github-integration) to learn how to set up. This integration allows direct test execution from your **GitHub** repository on **TestOps**.
  - **Katalon Studio**: See [Integrate TestOps with Katalon Studio](/katalon-studio/get-started/workspace-settings/integrate-katalon-platform-with-katalon-studio) for more information. This integration allows test executions from **Katalon Studio** to be uploaded to **TestOps**, including screenshots for **Visual Testing**.
:::

### 1. Create a baseline collection

#### Auto-generate baseline collection with test execution

<iframe
src="https://demo.arcade.software/ito1qnLAZw7fj0Q93KX7?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Create a Baseline Collection in Visual Testing"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

1. Execute the test suite/test suite collection:
   - If you have **Katalon Studio** integration: execute directly inside **Katalon Studio**.
   - If you have **GitHub** integration: create an automated execution, toggle **Visual Testing** > **Generate a new Baseline Collection**, and **Run Now** or **Schedule**.

  During execution, a `takeScreenshotAsCheckpoint` keyword saves a screenshot of the app's UI ([WebUI](https://docs.katalon.com/katalon-studio/keywords/keyword-description-in-katalon-studio/visual-based-web-testing-keywords/webui-take-a-screenshot-as-checkpoint) or [Mobile](https://docs.katalon.com/katalon-studio/keywords/keyword-description-in-katalon-studio/visual-based-mobile-testing-keywords/mobile-take-screenshot-as-checkpoint)) into the baseline collection.

2. Once execution completes and reports are ready, you can view the baseline collection images in **Assets > Visual Baseline Collection** and update manually by uploading new baseline images, and delete obsolete ones.

#### Manually create a baseline collection by uploading images

1. Go to **Assets** > **Visual Baseline Collections**. Click the **Create** button at the upper right corner to open the Create Baseline Collection window:
<img src="https://tw-cdn.katalon.com/katalon-testops/Assets/Create Baseline Connection.png" alt="Create Visual Baseline Collection" width="500"/>
<br/>

2. Upload **Baseline Images** and give the collection a name. 
3. Click **Create**.

### 2. Execute/Schedule the same test for visual comparison

As you execute/schedule the test for subsequent runs, new images will be generated, called "checkpoints", and to be compared with those in the baseline collection. Navigate to your **specific project's UI > specific execution > Visual Testing** to view the checkpoints' statuses:

<iframe
src="https://demo.arcade.software/vQr9k42kvC7rL1CxrXNd?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
title="Use Visual Testing in TestOps"
frameborder="0"
loading="lazy"
webkitallowfullscreen
mozallowfullscreen
allowfullscreen="true"
allow="clipboard-write"
style={{ width: "100%", height: "400px", border: "none" }}>
</iframe>

You will see checkpoints marked as **Resolved** or **Unresolved**:

- If a checkpoint matches with the baseline image: its status is **Match**, and automatically marked **Resolved**. Nothing to do further with this checkpoint.
- If **Visual Testing** detects anything unusual, the checkpoint is marked **Unresolved**. You can finalize each checkpoint depending on its status:

<Tabs groupId="checkpoint-status" defaultValue="mismatch" values={[
  {label: 'Mismatch', value: 'mismatch'},
  {label: 'Missing', value: 'missing'},
  {label: 'New', value: 'new'},
]}>
  <TabItem value="mismatch">

   **Baseline and Checkpoint exist, but mismatch** → Visual differences detected.

   *Action*: Select a comparison method to see differences (enabled only for **Mismatch**):
   <img src="https://tw-cdn.katalon.com/katalon-platform/visual-testing/mismatch-dropdown.png" alt="Compare method" width="700"/>
   <br/>

    Learn more about comparison methods at [Visual Testing comparison methods](#visual-testing-comparison-methods)

   Once you're done checking, click on either:

   - **Mark as Passed** → Accepts the checkpoint. You can then click **Save as Baseline** to add/replace the according baseline with this checkpoint.
   - **Mark as Failed** → Rejects the checkpoint. The baseline remains unchanged.

  </TabItem>
  <TabItem value="missing">

   **Baseline exists, Checkpoint missing** → The element was not captured in the latest run.
   
   Once you're done checking, click on either:

   - **Mark as Passed** → Accepts the checkpoint. The baseline remains unchanged.
   - **Mark as Failed** → Rejects the checkpoint. The baseline remains unchanged.

   <img src="https://tw-cdn.katalon.com/katalon-platform/visual-testing/visual-testing-resolve-missing.png" alt="visual testing resolve missing" width="500px" />
   <br/>

  </TabItem>
  <TabItem value="new">

   **Checkpoint exists, Baseline missing** → A new element was captured without a baseline.

   Once you're done checking, click on either:

   - **Mark as Passed** → Accepts the checkpoint. You can then click **Save as Baseline** to add this checkpoint as a new baseline.
   - **Mark as Failed** → Rejects the checkpoint. The baseline collection remains unchanged.

   <img src="https://tw-cdn.katalon.com/katalon-platform/visual-testing/visual-testing-resolve-new.png" alt="visual testing resolve new" width="500px" />
   <br/>
  </TabItem>
</Tabs>

### 3. Configure pixel sensitivity and ignored zones (Optional)

These configurations can help enhance image comparison algorithm in Visual Testing. See [Advanced configurations for Visual Testing](/katalon-platform/analyze/visual-testing/advanced-configurations-for-visual-testing) for more details.

## Visual Testing comparison methods

**TestOps** offers visual testing with three image comparison methods: **pixel-based**, **layout-based**, and **content-based** comparison.

<Tabs groupID="comparison-methods" values={[
  {label: 'Layout-based comparison', value: 'layout-based'},
  {label: 'Content-based comparison', value: 'content-based'},
  {label: 'Pixel-based comparison', value: 'pixel-based'},
]}>
  <TabItem value="pixel-based">
    This method compares pixel-by-pixel differences between the baseline and checkpoint images:

    <img src="https://tw-cdn.katalon.com/katalon-testops/visual-testing/vt-pixel-based-comparison.png" alt="Pixel-based comparison" width="1080" />
    <br/>

    This method's advantage is simplicity: it identifies pixel differences and picks up minor changes that otherwise seem trivial.
  </TabItem>
  <TabItem value="layout-based">

    This method highlights layout differences between the baseline and checkpoint images. It does so by identifying similar zones between the two, with the help of our AI engine:

    <img src="https://tw-cdn.katalon.com/katalon-testops/visual-testing/vt-layout-based-comparison.png" alt="Layout-based comparison" width="1080" />
    <br/>

    You can choose to view specific zones, marked by color-coded grades of difference:

    | Label          | Color        | Description                                                                 |
    |----------------|--------------|-----------------------------------------------------------------------------|
    | Identical      | Green border | UI zones identically rendered in both images.                              |
    | Distinguishable| Red border   | UI zones that look identical for the most parts but have some recognizable distinctions. |
    | Missing/New    | Pink border  | UI zones that exist in one image but not in the other. |

  </TabItem>
  <TabItem value="content-based">

    This method looks at differences in the text contents:

    <img src="https://tw-cdn.katalon.com/katalon-testops/visual-testing/vt-text-content-comparison.png" alt="Text content-based comparison" width="1080" />
    <br/>


    Text differences are also categorized and color-coded:

    | Label         | Color       | Description                                                     |
    | ------------- | ----------- |---------------------------------------------------------------- |
    | Identical     | Green border | Shows text-look-like zones identically rendered in both images |
    | Shifted | Red border  | Shows text-look-like zones with identical but shifted positions |
    | Missing/New   | Pink border | Shows text-look-like zones in one image but not in the other. |

    This method is useful when the snapshot contains lots of text content, enabling quick review and prioritizing of critical text changes.
  </TabItem>
</Tabs>
