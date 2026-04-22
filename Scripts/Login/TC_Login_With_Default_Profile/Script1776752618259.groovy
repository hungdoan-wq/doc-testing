import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import internal.GlobalVariable
import com.kms.katalon.core.util.KeywordUtil

// Helper to build a lightweight TestObject without needing Object Repository entries
TestObject byCss(String css) {
	TestObject to = new TestObject("css=" + css)
	to.addProperty('css', ConditionType.EQUALS, css)
	return to
}

// --- Load credentials from Data File and pick 1 row randomly ---

TestData creds = TestDataFactory.findTestData('Data Files/Login_Credentials_Random')
assert creds != null : 'Test data not found: Data Files/Login_Credentials_Random'

KeywordUtil.logInfo('[DEBUG] class=' + creds.getClass().getName())
KeywordUtil.logInfo('[DEBUG] type=' + creds.getType())
KeywordUtil.logInfo('[DEBUG] sourceUrl=' + creds.getSourceUrl())
KeywordUtil.logInfo('[DEBUG] rowCount=' + creds.getRowNumbers())
int rowCount = creds.getRowNumbers()
assert rowCount > 0 : 'No rows found in Data Files/Login_Credentials_Random'

int pickedRow = 1 + new Random().nextInt(rowCount) // TestData rows are 1-based
String username = creds.getValue('username', pickedRow)
String password = creds.getValue('password', pickedRow)

WebUI.openBrowser('')
WebUI.maximizeWindow()


	// 1. Go to site URL
	WebUI.navigateToUrl(GlobalVariable.G_SiteURL)

	// 2. Click Make Appointment button
	WebUI.waitForElementVisible(byCss('#btn-make-appointment'), GlobalVariable.G_Timeout)
	WebUI.click(byCss('#btn-make-appointment'))

	// 3. Detect login panel
	WebUI.waitForElementVisible(byCss('#login'), GlobalVariable.G_Timeout)
	WebUI.verifyElementPresent(byCss('#login'), GlobalVariable.G_Timeout)

	// 4. Enter username and password values (from data file)
	WebUI.waitForElementVisible(byCss('#txt-username'), GlobalVariable.G_Timeout)
	WebUI.setText(byCss('#txt-username'), username)

	WebUI.waitForElementVisible(byCss('#txt-password'), GlobalVariable.G_Timeout)
	WebUI.setText(byCss('#txt-password'), password)
	WebUI.click(byCss('#btn-login'))

	// 5. Verify appointment panel after login
	// If the selected credentials are invalid, this step will time out and fail the test.
	WebUI.waitForElementVisible(byCss('#appointment'), GlobalVariable.G_Timeout)
	WebUI.verifyElementPresent(byCss('#appointment'), GlobalVariable.G_Timeout)
	WebUI.verifyElementText(byCss('#appointment h2'), 'Make Appointment')

	WebUI.closeBrowser()
