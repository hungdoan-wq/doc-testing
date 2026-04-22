import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

boolean simulateFlakyLocator = GlobalVariable.G_SimulateFlaky == true

def flakyObject(String stableRepoId, String stableXpath, String badXpath) {
    if (!simulateFlakyLocator) {
        return findTestObject(stableRepoId)
    }

    boolean useBadLocator = new Random().nextBoolean()
    String chosenXpath = useBadLocator ? badXpath : stableXpath

    TestObject to = new TestObject("${stableRepoId}_dynamic")
    to.addProperty("xpath", ConditionType.EQUALS, chosenXpath)

    WebUI.comment("Simulated flaky locator for ${stableRepoId}: " + (useBadLocator ? "BAD" : "GOOD"))
    return to
}

TestObject makeAppointmentBtn = flakyObject(
    'Page_CuraHomepage/btn_MakeAppointment',
    "//a[@id='btn-make-appointment']",
    "//a[@id='btn-make-appointment-typo']"
)

TestObject usernameField = flakyObject(
    'Page_Login/txt_UserName',
    "//input[@id='txt-username']",
    "//input[@id='txt-user-name']"
)

TestObject passwordField = flakyObject(
    'Page_Login/txt_Password',
    "//input[@id='txt-password']",
    "//input[@id='txt-passwrod']"
)

TestObject loginBtn = flakyObject(
    'Page_Login/btn_Login',
    "//button[@id='btn-login']",
    "//button[@id='btn-logn']"
)

WebUI.click(makeAppointmentBtn)
WebUI.setText(usernameField, Username)
WebUI.setText(passwordField, Password)
WebUI.click(loginBtn)

landingPage = WebUI.verifyElementPresent(
    findTestObject('Page_CuraAppointment/div_Appointment'),
    GlobalVariable.G_Timeout
)