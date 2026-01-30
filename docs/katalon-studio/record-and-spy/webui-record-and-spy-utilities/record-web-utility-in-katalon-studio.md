---
title: Record Web utility in Katalon Studio
---
import useBaseUrl from '@docusaurus/useBaseUrl';

You can create an automated test script with test recording. In Katalon Studio, you only need to manually interact with your website and perform all the desired actions as a real user while the Katalon Recorder utility record them.

You can create a new test script or edit an existing test script by using the Katalon Recorder utility. This manual includes a tutorial of how to record test scripts and a brief introduction to each panel of the Katalon Web Recorder.

:::caution
This issue affects Katalon Studio versions **8.x** and **9.x**.

Chrome 142 has stopped supporting unpacked extension loading during runtime, preventing users from recording test cases when launching new browser instances in **Katalon Studio**.

Workarounds:
- Use Edge Chromium, Firefox, or other supported browsers.
- Or record with Active Browser mode.

We’ll notify you immediately when the fix is available.
:::

## Record a new test case
:::info 
Note: The default browser is Chrome. To change the default browser, go to **Project > Settings > Execution > Default execution** and choose your preferred browser from the dropdown list.

    <img alt="set default execution" src="https://docs.katalon.com/56ee3f70-5620-11ed-a602-0242cfbc79b5/ks-852-default-execution.png" width="300" />
:::

To record a new test case, do as follows:

1. In the main toolbar, click **Record Web** to open the Web Recorder dialog.    
    <img src="https://docs.katalon.com/9e225e00-5c68-11ed-a602-0242cfbc79b5/ks-record-web.png" alt="KS - utilitybutton" width="300"/>
        
2. Enter the URL of your web application. For example, `katalon-demo-cura.herokuapp.com`.

3. Next to the URL box, open the **Record** dropdown and select the browser for this session.

<img alt="recorder browser" src="https://docs.katalon.com/d4e9d840-6c72-11ed-a602-0242cfbc79b5/ks-855-select-browser.png" width="500" />

| **Type** | **Description** | **Supported browsers** |
| --- | --- | --- |
| New Browsers | Start recording in a new browser. | • Chrome (Recommended) <br/> • Chrome (with Profile) <br/> • Firefox <br/> • Edge Chromium <br/> • Internet Explorer (only available on Windows) |
| Active Browsers | Use the current browser to start recording. Download and install the Katalon Recorder add-on first and use your preferred browser to start recording: <br/> • [Download and install Katalon Recorder on Chrome](https://chrome.google.com/webstore/detail/katalon-recorder-selenium/ljdobmomdgdljniojadhoplhkpialdid) <br/> • [Download and install Katalon Recorder on Firefox](https://addons.mozilla.org/en-US/firefox/addon/katalon-automation-record/) <br/> • [Download and install Katalon Recorder on Edge Chromium](https://microsoftedge.microsoft.com/addons/detail/katalon-recorder-seleniu/hdodkejagjkdomgbiioijegfmiiknoam) | • Chrome <br/> • Firefox <br/> • Edge Chromium |
    
    
4. Click **Record** to launch the browser. Wait for the page to load, then interact with elements. As you hover, elements are highlighted and their XPath appears at the top of the page.        
5. Perform your actions. For example, sign in with provided credentials. Steps appear under Recorded Actions. When you type in the Password field, Katalon Web Recorder automatically uses the [Set Encrypted Text](/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-set-encrypted-text) keyword so the value is stored securely.
    
    <img src="https://docs.katalon.com/cbb513e0-750d-11ed-a602-0242cfbc79b5/ks-855-set-encrypted-text.png" alt="Set encrypted test - test step shown in KS" width="500"/>
    
6. When finished, click **Stop recording**, then **Save Script**.

<section xmlns="http://www.w3.org/1999/xhtml" className="section result">During your recording, <span className="ph">Katalon Studio</span> captures the objects that you have interacted with. When saving your test script, <span className="ph uicontrol">Katalon Web Recorder</span> exports a list of objects used in the test case. Choose a directory you want your test objects to be stored in to continue.</section> 

## <a id="task-7962" class="anchor_top_offset"/>Record using an existing test case

<section xmlns="http://www.w3.org/1999/xhtml" className="section context">With  Web Recorder, you can  modify existing test cases instead of creating a brand new test case.<p className="p">Follow these steps:</p></section> 
<ol xmlns="http://www.w3.org/1999/xhtml" className="ol steps"><li className="li step stepexpand"><span className="ph cmd">Open any existing test case to continue recording.</span></li><li className="li step stepexpand"><span className="ph cmd">Click on the <span className="ph uicontrol">Record</span> icon to open Web Recorder. A confirmation dialog appears asking you to continue on recording the current test case.</span><div className="itemgroup info"><img className="image" width={500} src={useBaseUrl("/5703ea50-5620-11ed-a602-0242cfbc79b5/ks-continue-recording.png")} /></div><div className="itemgroup stepresult"><p className="p">If you choose <span className="ph uicontrol">No, I want a clean session</span>, <span className="ph">Katalon Studio</span> opens a new recording session without any pre-recorded steps from the current test case.</p><p className="p">If you choose <span className="ph uicontrol">Yes</span>, all the existing test steps and test case variables are imported to the <span className="ph uicontrol">Recorded Actions</span> and <span className="ph uicontrol">Variables</span> tabs in Web Recorder respectively. You do not need to repeat the test steps having been recorded.<img className="image" width={850} src={useBaseUrl("/cc19a210-750d-11ed-a602-0242cfbc79b5/ks-855-record-on-existing-test-case.png")} alt="record on existing test case" /></p></div></li><li className="li step stepexpand"><span className="ph cmd">Interact with the AUT.</span></li><li className="li step stepexpand"><span className="ph cmd">When saving your script, <span className="ph">Katalon Studio</span> automatically detects similar existing objects in the <span className="ph uicontrol">Objects Repository</span> and asks you for further action to optimize the Object Repository.<img className="image" width={500} src={useBaseUrl("/56f56b60-5620-11ed-a602-0242cfbc79b5/ks-852-add-element-to-object-repo.png")} alt="Add element to object repository" /></span><div className="itemgroup info">The objects  highlighted in red are objects already existed in the Object Repository. <span className="ph">Katalon Studio</span> identifies  duplicate objects based on the ID (for example: <code className="ph codeph">Object Repository/Page_CURA Healthcare Service/a_Make Appointment</code>) and several attributes of the object.<div className="p">You can select one of these options to save:<ul className="ul"><li className="li"><span className="ph uicontrol">Merge changes into existing objects</span>: Add unique changes of the newly recorded object to the existing object, but still keep the existing object ID.</li><li className="li"><span className="ph uicontrol">Create duplicate objects</span>: Save the newly recorded object separately from the existing object.</li><li className="li"><span className="ph uicontrol">Replace existing objects</span>: The newly recorded object overrides the ID and attributes of the existing object.</li></ul></div></div></li></ol> 

## <a id="id_3" class="anchor_top_offset"/>Validate UI elements

<p xmlns="http://www.w3.org/1999/xhtml" className="p">Given that you enter incorrect username or password, you can validate if the website displays an error message indicating a failed login attempt.</p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p"><img className="image" width={850} src={useBaseUrl("/cc2ded60-750d-11ed-a602-0242cfbc79b5/ks-855-validate-UI-element.png")} alt="verify fail message" /></p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p">Or you can verify if the next screen after a successful login is "right" by verifying if a specific UI element is present.</p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p"><img className="image" src={useBaseUrl("https://tw-cdn.katalon.com/katalon-studio/ks-855-verify-element-present.png")} /></p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p">In the drop-down list of the <span className="ph uicontrol">Run</span> button, you can find some Run options. The two of them labeled with <span className="ph uicontrol">Debug</span> are advanced options for validating recorded script, and saving you from running all test steps over and over again if you have a Katalon Studio Enterprise license:</p> 
<ul xmlns="http://www.w3.org/1999/xhtml" className="ul"><li className="li"><span className="ph uicontrol">Run all steps</span>: Execute all steps that are enabled on Web Recorder.<img className="image" width={600} src={useBaseUrl("/570a52f0-5620-11ed-a602-0242cfbc79b5/ks-run-all-step.png")} /></li><li className="li"><p className="p"><span className="ph uicontrol">Debug: Run selected steps</span>: Execute only one or many selected steps. You can select multiple steps using either Ctrl or Shift key. </p><p className="p"><img className="image" width={600} src={useBaseUrl("/570745b0-5620-11ed-a602-0242cfbc79b5/debug-run-selected-steps.png")} /></p></li><li className="li"><p className="p"><span className="ph uicontrol">Debug: Run from selected step</span>: Execute the currently selected step and all the steps after the selected one.</p><p className="p"><img className="image" width={600} src={useBaseUrl("/57148c20-5620-11ed-a602-0242cfbc79b5/ks-run-from-selected-step.png")} /></p></li></ul> 

## <a id="id_4" class="anchor_top_offset"/>Katalon Web Recorder utility components


### <a id="id_5" class="anchor_top_offset"/>Recorded actions

<div xmlns="http://www.w3.org/1999/xhtml" className="p">Available actions in Katalon Web Recorder utility is the same as <span className="ph">Katalon Studio</span> built-in keywords. You can add any action, call another test case, and/or use Custom Keywords.<div className="note note note_note"><span className="note__title">Note:</span> <ul className="ul"><li className="li"><p className="p"><span className="ph">Katalon Studio</span> does not support recording the click action on test objects with the type: <code className="ph codeph">&lt;input type="file"&gt;</code>, which defines a file upload box with a browse button.</p></li></ul></div></div>
<p xmlns="http://www.w3.org/1999/xhtml" className="p"><img className="image" width={700} src={useBaseUrl("/56f8c6c0-5620-11ed-a602-0242cfbc79b5/ks-add.png")} /></p> 

### <a id="id_6" class="anchor_top_offset"/>Captured objects

<p xmlns="http://www.w3.org/1999/xhtml" className="p">During your recording, Katalon captures the objects that you have interacted with. When saving test script, <span className="ph uicontrol">Katalon Web Recorder</span> exports a list of objects used in the test case. To learn more about WebUI test objects, see: <a className="xref" href="/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-accept-alert">WebUI test objects</a>.</p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p"><img className="image" width={450} src={useBaseUrl("/8e419cd0-be4c-11ed-825f-0242cfbc79b5/captured-objects.png")} /></p> 

### <a id="id_7" class="anchor_top_offset"/>Variables

<p xmlns="http://www.w3.org/1999/xhtml" className="p">In Katalon Web Recorder, you can manage the <a className="xref" href="/katalon-studio/data-driven-testing/data-driven-testing-with-katalon-studio#variables">variables</a> directly related to your   recording.</p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" width={500} src={useBaseUrl("/03a90bd0-c153-11ed-a4d3-0242cfbc79b5/var.png")} /></p> 

### <a id="id_8" class="anchor_top_offset"/>Logs

<p xmlns="http://www.w3.org/1999/xhtml" className="p">When running the recorded actions, you can investigate the execution by looking at its real-time detailed logs. Execution logs are displayed on the <span className="ph uicontrol">Logs</span> tab.</p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p"><img className="image" width={700} src={useBaseUrl("/570d8740-5620-11ed-a602-0242cfbc79b5/ks-log.png")} /></p> 
<div xmlns="http://www.w3.org/1999/xhtml" className="p">For advanced features such as branching, looping or validation, refer to this article: <a className="xref" href="/katalon-studio/create-test-cases/statements/statements-in-katalon-studio-overview">Control Statements</a>. <div className="note note note_note"><span className="note__title">Note:</span> <ul className="ul"><li className="li"><p className="p">Learn more with our Katalon Academy course: <a className="xref j-external-link" href="https://academy.katalon.com/courses/record-playback-testing/?utm_source=kat_docs&utm_medium=record_web_utility" target="_blank">Create Automated Tests with Record &amp; Playback.</a></p></li></ul></div></div>
