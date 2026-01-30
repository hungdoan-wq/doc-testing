---
title: How to Handle Dropdown Menu in Katalon Studio
---

This document demonstrates how to interact with a dropdown menu in Katalon Studio. We also provide a sample project so you can quickly set up and see how our code snippets work.

## Typical interactions with a dropdown menu

A dropdown menu (or a dropdown list) allows users to choose one or multiple values from a list. Below is a typical code structure of a dropdown menu, along with some components to keep in mind.

- _Index:_ The `index` of the option to be selected/deselected.
    
- _Value:_ The text value of the `value` attribute.
    
- _Label:_ The exact displayed text of a particular option, in the `label` attribute.
    

<img src="https://docs.katalon.com/fb47b770-9ed4-11ed-998d-0242cfbc79b5/Sample_dropdown_html.png" alt="a sample html structure of a dropdown list" width="500px"/>

In this tutorial, we cover the following interactions:

- Select an option by index
    
- Select an option by label
    
- Select an option by value
    
- Select all options
    
- Deselect all options
    
- Get the number of total options on the list
    
- Get the number of selected options on the list
    
:::caution Requirements

- A test website with a dropdown menu. You can follow instructions below to create an example webpage to test our code snippets.
    
- Test objects of the dropdown menu created from this test website. See [Create test objects manually](/katalon-studio/test-objects/web-test-objects/manage-web-test-objects#create-web-objects-manually) to see the best practices for creating test objects.
    
:::

Our sample codes work with our example website. If you want to use these codes in your project, you have to edit the file path and directories to the test objects in your project.

## Create an example webpage and test objects

1. In your preferred text editor, create a file named `dropdown_demo.html`, and paste the following code in:
    

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Bear Multi-Select Dropdown</title>
<style> body { font-family: Arial, sans-serif; padding: 20px; } .dropdown-wrapper { position: relative; width: 260px; } .dropdown-display { border: 1px solid #ccc; padding: 6px; border-radius: 4px; min-height: 36px; cursor: pointer; display: flex; flex-wrap: wrap; align-items: center; gap: 4px; background: #fff; } .dropdown-display span { background: #f0f0f0; padding: 2px 6px; border-radius: 3px; font-size: 14px; } select { position: absolute; top: 100%; left: 0; width: 100%; max-height: 200px; border-radius: 4px; display: none; }
</style>
</head>
<body>
<div class="dropdown-wrapper" id="bearDropdown">
<div class="dropdown-display" id="bearDisplay">Select bears…</div>
<select id="bearSelect" multiple>
<option value="American Black Bear">0. American Black Bear</option>
<option value="Asiatic Black Bear">1. Asiatic Black Bear</option>
<option value="Brown Bear">2. Brown Bear</option>
<option value="Giant Panda">3. Giant Panda</option>
<option value="Sloth Bear">4. Sloth Bear</option>
<option value="Sun Bear">5. Sun Bear</option>
<option value="Polar Bear">6. Polar Bear</option>
<option value="Spectacled Bear">7. Spectacled Bear</option>
</select>
</div>
<script>
const wrapper = document.getElementById("bearDropdown");
const display = document.getElementById("bearDisplay");
const select = document.getElementById("bearSelect");

// Toggle dropdown  
display.addEventListener("click", () => { select.style.display = select.style.display === "block" ? "none" : "block"; select.focus(); });

// Update display when selecting
select.addEventListener("change", () => {
    const selected = Array.from(select.selectedOptions).map(o => o.label);
    display.innerHTML = selected.length ? selected.map(v => `<span>${v}</span>`).join("") : "Select bears…";
});

// Click outside to close
document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
        select.style.display = "none";
    }
});
</script>
</body>
</html>
```

2. Save the file, then copy and store the file's address somewhere. You will need it for the code snippet. E.g., `/Users/hung.doan/Desktop/dropdown_demo.html`.
    

Next, you need to **create test objects** in Katalon Studio for the dropdown in this webpage.

1. At the top left corner, click **Spy Web**.
    

<img src="https://tw-cdn.katalon.com/katalon-studio/keywords/web-testing/handle-dropdown-menu/KS-spy-web-button.png" alt="the spy web button inside Katalon Studio" width="500px" />

2. In the **Object Spy** window, paste in the address of the file you just copied in the **URL** field, then click **Start**. The application under test (AUT) is launched.
    

<img src="https://tw-cdn.katalon.com/katalon-studio/keywords/web-testing/handle-dropdown-menu/object-spy-start-button.png" alt="the start capturing object button in Katalon Studio" width="500px" />

3. Move your cursor to the dropdown. Notice how there is a red rectangle marking your selection.
    
4. Right-click on the dropdown button, and choose **Capture Object** option.
    

<img src="https://tw-cdn.katalon.com/katalon-studio/keywords/web-testing/handle-dropdown-menu/object-spy-capture-object-button.png" alt="the capture object button in Katalon Studio" width="500px" />

5. The object should then appear in **Captured Objects** box, ready to save. Click **Save**.
    

<img src="https://tw-cdn.katalon.com/katalon-studio/keywords/web-testing/handle-dropdown-menu/object-spy-save-button.png" alt="the save object button in Katalon Studio" width="500px" />

6. A window appears for you to save the object - default directory is **Object Repository**. Click **OK**.

<img src="https://tw-cdn.katalon.com/katalon-studio/keywords/web-testing/handle-dropdown-menu/object-spy-save-location.png" alt="the save location for objects in Katalon Studio" width="500px" />
    

7. Repeat from step 3 to 6 with the dropdown list. We should have two test objects created for this example.
    

<img src="https://tw-cdn.katalon.com/katalon-studio/keywords/web-testing/handle-dropdown-menu/object-spy-capture-object-list.png" alt="the capture object button in Katalon Studio" width="500px" />

8. Close the **Object Spy** web window.
    

## Add codes into the new test case

1. Create a new test case.

<img src="https://tw-cdn.katalon.com/katalon-studio/keywords/web-testing/handle-dropdown-menu/create-new-test-case.png" alt="create a new test case menu inside Katalon Studio" width="500px" />
    
2. Click “Script” view, and paste the codes you want to test in.

<img src="https://tw-cdn.katalon.com/katalon-studio/keywords/web-testing/handle-dropdown-menu/script-view-blank.png" alt="a blank test case with no script in Katalon Studio" width="500px" />

<img src="https://tw-cdn.katalon.com/katalon-studio/keywords/web-testing/handle-dropdown-menu/code-pasting-into-script-view.png" alt="a test case with codes in script view" width="500px" />
    
3. Edit the URL path to your `dropdown_demo.html` file, and save. E.g. `file:///Users/hung.doan/Desktop/dropdown_demo.html`.

<img src="https://tw-cdn.katalon.com/katalon-studio/keywords/web-testing/handle-dropdown-menu/editing-file-url.png" alt="editing the url of a file in a code section" width="500px" />
    
4. Run the test case.

<img src="https://tw-cdn.katalon.com/katalon-studio/keywords/web-testing/handle-dropdown-menu/run-test-case.png" alt="the run test case button with different environments in Katalon Studio" width="500px" />
    

## Example codes to interact with a dropdown list

### Select an option by index

The `selectOptionByIndex` keyword selects the option at the given index. The index always starts from 0. See: [WebUI - Select Option By Index](/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-select-option-by-index).

**Script:**

```jsx

// Open the specified webpage 

String url = 'file://[your_dropdown_demo_file_path]' 
WebUI.openBrowser('') 
WebUI.navigateToUrl(url) 

// Click the button with the specified test object 

WebUI.click(findTestObject('Object Repository/Page_Bear Multi-Select Dropdown/div_Capture object_bearDisplay')) 

// Select the dropdown list and choose the item 

WebUI.selectOptionByIndex(findTestObject('Object Repository/Page_Bear Multi-Select Dropdown/select_Select bears_bearSelect'), 2)
```

**Result:**

<img src="https://tw-cdn.katalon.com/katalon-studio/keywords/web-testing/handle-dropdown-menu/selection-by-index.png" alt="selecting the second item by index" width="500px" />

### Select an option by label

The `selectOptionByLabel` keyword selects the option with **a displayed text** that matches the keyword you put in. The display text is not the same as the value of an option. See: [WebUI - Select Option By Label](/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-select-option-by-label).

In this code snippet, we are choosing the option '5. Sun Bear'. This option has the **label** '5. Sun Bear', so this is the exact keyword we use in our code.

**Script:**

```jsx

// Open the specified webpage 
String url = 'file://[your_dropdown_demo_file_path]' 
WebUI.openBrowser('') 
WebUI.navigateToUrl(url)   

// Click the button with the specified test object 
WebUI.click(findTestObject('Object Repository/Page_Bear Multi-Select Dropdown/div_Capture object_bearDisplay'))   

// Select the dropdown list and choose the item 
WebUI.selectOptionByLabel(findTestObject('Object Repository/Page_Bear Multi-Select Dropdown/select_Select bears_bearSelect'), '5. Sun Bear', false)
```

**Result:**

<img src="https://tw-cdn.katalon.com/katalon-studio/keywords/web-testing/handle-dropdown-menu/selection-by-label-or-value.png" alt="selecting the fifth item by label or value" width="500px" />

### Select an option by value

The selectOptionByValue keyword selects the option with **a value** that matches  
the keywords you put in. See: [WebUI - Select Option By Value](/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-select-option-by-value).

In this code snippet, we are choosing the option '5. Sun Bear'. This option has the **value** 'Sun Bear', so this is the exact keyword we use in our code.

**Script:**

```jsx

// Open the specified webpage 
String url = 'file://[your_dropdown_demo_file_path]' 
WebUI.openBrowser('') 
WebUI.navigateToUrl(url)   

// Click the button with the specified test object 
WebUI.click(findTestObject('Object Repository/Page_Bear Multi-Select Dropdown/div_Capture object_bearDisplay'))   

// Select the dropdown list and choose the item 
WebUI.selectOptionByValue(findTestObject('Object Repository/Page_Bear Multi-Select Dropdown/select_Select bears_bearSelect'), 'Sun Bear', false)
```

**Result:**

<img src="https://tw-cdn.katalon.com/katalon-studio/keywords/web-testing/handle-dropdown-menu/selection-by-label-or-value.png" alt="selecting the fifth item by label or value" width="500px" />

For further instructions and help, please refer to [Katalon Studio WebUI](/katalon-studio/get-started/sample-projects/webui/webui-create-and-run-web-ui-test-case-using-record-and-playback-in-katalon-studio) tutorials.

### Multi-select options by index

For multi-select dropdown lists, we can choose multiple options by their indexes with the keyword `selectOptionByIndex`. Instead of putting an index number, we put a range of numbers.

In this code snippet, we are choosing options from 3 to 5. This is an index range of 3-5, so we are putting '3-5' in our code.

**Script:**

```jsx

// Open the specified webpage 
String url = 'file://[your_dropdown_demo_file_path]' 
WebUI.openBrowser('') 
WebUI.navigateToUrl(url) 

// Click the button with the specified test object 
WebUI.click(findTestObject('Object Repository/Page_Bear Multi-Select Dropdown/div_Capture object_bearDisplay')) 

// Select the dropdown list and choose the items 3-5 
WebUI.selectOptionByIndex(findTestObject('Object Repository/Page_Bear Multi-Select Dropdown/select_Select bears_bearSelect'), 2)
```

**Result:**

<img src="https://tw-cdn.katalon.com/katalon-studio/keywords/web-testing/handle-dropdown-menu/multiple-selection.png" alt="selecting 3 items in a dropdown list" width="500px" />

### Select all options

The selectAllOption selects all options from a list. See: [WebUI - Select All Option](/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-select-all-option).

**Script:**

```jsx

// Open the specified webpage 
String url = 'file://[your_dropdown_demo_file_path]' 
WebUI.openBrowser('') 
WebUI.navigateToUrl(url) 

// Click the button with the specified test object 
WebUI.click(findTestObject('Object Repository/Page_Bear Multi-Select Dropdown/div_Capture object_bearDisplay')) 

// Select the dropdown list and choose all items 
WebUI.selectAllOption(findTestObject('Object Repository/Page_Bear Multi-Select Dropdown/select_Select bears_bearSelect'))
```

**Result:**

<img src="https://tw-cdn.katalon.com/katalon-studio/keywords/web-testing/handle-dropdown-menu/select-all.png" alt="selecting all items in a dropdown list" width="500px" />

### Deselect all options

The `deselectAllOption` keyword deselects all the selected items in a combo box. See: [WebUI - Deselect All Option](/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-deselect-all-option).

In this code snippet, we first select all options using selectAllOption, then deselect all options with `deselectAllOption`.

**Script:**

```jsx

// Open the specified webpage 
String url = 'file://[your_dropdown_demo_file_path]' 
WebUI.openBrowser('') 
WebUI.navigateToUrl(url) 

// Click the button with the specified test object 
WebUI.click(findTestObject('Object Repository/Page_Bear Multi-Select Dropdown/div_Capture object_bearDisplay')) 

// Select the dropdown list and choose all items 
WebUI.selectAllOption(findTestObject('Object Repository/Page_Bear Multi-Select Dropdown/select_Select bears_bearSelect')) 

// Deselect all items 
WebUI.deselectAllOption(findTestObject('Page_Bear Multi-Select Dropdown/select_Select bears_bearSelect'))
```

**Result:** all available options first selected, then deselected.

<img src="https://tw-cdn.katalon.com/katalon-studio/keywords/web-testing/handle-dropdown-menu/unselect-all.png" alt="unselecting all items in a dropdown list" width="500px" />

### Get the number of total options

The `getNumberOfTotalOption` keyword returns the number of options there are in total on the list. See: [WebUI - Get Number Of Total Option](/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-number-of-total-option).

**Script:**

```jsx

// Open the specified webpage 

String url = 'file://[your_dropdown_demo_file_path]' 
WebUI.openBrowser('') 
WebUI.navigateToUrl(url) 

// Click the button with the specified test object 
WebUI.click(findTestObject('Object Repository/Page_Bear Multi-Select Dropdown/div_Capture object_bearDisplay')) 

// Select the dropdown list and count all items (should return 8) 
WebUI.getNumberOfTotalOption(findTestObject('Object Repository/Page_Bear Multi-Select Dropdown/select_Select bears_bearSelect')) 

// Close the browser 
WebUI.closeBrowser()
```

**Result:** in **Log Viewer**, the number of total options returned as 8.

<img src="https://tw-cdn.katalon.com/katalon-studio/keywords/web-testing/handle-dropdown-menu/KS-test-log-viewer-get-no-total-objects.png" alt="The log viewer result inside Katalon Studio, saying there are 8 objects in total" width="500px" />

### Get the number of selected options

The `getNumberOfSelectedOption` keyword returns the count of options that are selected. If no option is selected, the keyword returns 0. See: [WebUI - Get Number Of Selected Option](/katalon-studio/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-number-of-selected-option).

In this code snippet, we first select options 3-5, then get the number of selected options. The expected return is 3.

**Script:**

```jsx

// Open the specified webpage 
String url = 'file://[your_dropdown_demo_file_path]' 
WebUI.openBrowser('') 
WebUI.navigateToUrl(url) 

// Click the button with the specified test object 
WebUI.click(findTestObject('Object Repository/Page_Bear Multi-Select Dropdown/div_Capture object_bearDisplay')) 

// Select the dropdown list and choose the items 3-5 
WebUI.selectOptionByIndex(findTestObject('Object Repository/Page_Bear Multi-Select Dropdown/select_Select bears_bearSelect'), 2) 

// Count the selected items (should return 3) 
WebUI.getNumberOfSelectedOption(findTestObject('Page_Bear Multi-Select Dropdown/select_Select bears_bearSelect')) 

// Close the browser 
WebUI.closeBrowser()
```

**Result:** in **Log Viewer**, the number of selected options returned as 3.

<img src="https://tw-cdn.katalon.com/katalon-studio/keywords/web-testing/handle-dropdown-menu/KS-test-log-viewer-get-no-selected-objects.png" alt="The log viewer result inside Katalon Studio, saying 3 objects are selected" width="500px" />