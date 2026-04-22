import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable

/**
 * Visual Testing example with flaky-locator handling:
 * 1) Use retry-style waits on unstable elements before Visual Testing checkpoints
 * 2) Robust click + robust wait for confirmation page
 */

def waitForUiReady() {
    WebUI.waitForPageLoad(10)
    WebUI.delay(1)
}

def waitForVisibleWithRetry(def to, int attempts = 3, int timeoutPerAttemptSec = 5) {
    for (int i = 1; i <= attempts; i++) {
        try {
            if (WebUI.waitForElementVisible(to, timeoutPerAttemptSec, FailureHandling.OPTIONAL)) {
                return true
            }
        } catch (Throwable e) {
            WebUI.comment("[Retry visible] Attempt ${i}/${attempts} failed: ${e.getClass().getSimpleName()} - ${e.message}")
        }
        WebUI.delay(1)
    }
    return false
}

def waitForClickableWithRetry(def to, int attempts = 3, int timeoutPerAttemptSec = 5) {
    for (int i = 1; i <= attempts; i++) {
        try {
            if (WebUI.waitForElementClickable(to, timeoutPerAttemptSec, FailureHandling.OPTIONAL)) {
                return true
            }
        } catch (Throwable e) {
            WebUI.comment("[Retry clickable] Attempt ${i}/${attempts} failed: ${e.getClass().getSimpleName()} - ${e.message}")
        }
        WebUI.delay(1)
    }
    return false
}

def clickWithRetry(def to, int attempts = 3, int timeoutPerAttemptSec = 5) {
    Throwable lastErr = null
    for (int i = 1; i <= attempts; i++) {
        try {
            waitForClickableWithRetry(to, 1, timeoutPerAttemptSec)
            WebUI.click(to)
            return
        } catch (Throwable e) {
            lastErr = e
            WebUI.comment("[Retry click] Attempt ${i}/${attempts} failed: ${e.getClass().getSimpleName()} - ${e.message}")
            WebUI.delay(1)
        }
    }
    throw lastErr
}

WebUI.comment('Story: Book an appointment')
WebUI.comment('Given that the user has logged into their account')

WebUI.openBrowser('')
WebUI.navigateToUrl(GlobalVariable.G_SiteURL)

// Flaky-prone step #1: Visual checkpoint while page still loading
waitForUiReady()
// If you have a stable element on the login page, wait for it before taking checkpoint
// Update the object id below if your login page object differs
waitForVisibleWithRetry(findTestObject('Page_CuraHealthCare/btn_Login'), 3, 5)
WebUI.takeScreenshotAsCheckpoint('login page')

WebUI.callTestCase(findTestCase('Common Test Cases/Login'),
        [('Username') : 'John Doe', ('Password') : 'ThisIsNotAPassword'],
        FailureHandling.STOP_ON_FAILURE)

WebUI.comment('And Appointment page is displayed')

waitForUiReady()
if (!waitForVisibleWithRetry(findTestObject('Page_CuraAppointment/lst_Facility'), 3, 5)) {
    WebUI.comment('Facility list did not become visible after retries')
    WebUI.takeScreenshot()
    WebUI.closeBrowser()
    assert false : 'Appointment page not ready'
}

WebUI.takeScreenshotAsCheckpoint('appointment page')

WebUI.selectOptionByLabel(findTestObject('Page_CuraAppointment/lst_Facility'), 'Hongkong CURA Healthcare Center', false)
WebUI.check(findTestObject('Page_CuraAppointment/chk_Medicaid'))
WebUI.check(findTestObject('Page_CuraAppointment/chk_Readmission'))
WebUI.setText(findTestObject('Page_CuraAppointment/txt_VisitDate'), '27/12/2016')
WebUI.setText(findTestObject('Page_CuraAppointment/txt_Comment'), 'Please make appointment as soon as possible.')

WebUI.comment('When he fills in valid information in Appointment page')

// Flaky-prone step #2: click + navigation + confirmation readiness
clickWithRetry(findTestObject('Page_CuraAppointment/btn_BookAppointment'), 3, 5)

waitForUiReady()
if (!waitForVisibleWithRetry(findTestObject('Page_AppointmentConfirmation/lbl_Facility'), 3, 5)) {
    WebUI.comment('Confirmation label did not become visible after retries')
    WebUI.takeScreenshot()
    WebUI.closeBrowser()
    assert false : 'Confirmation page not ready'
}
WebUI.verifyTextPresent('Appointment Confirmation', false)

WebUI.comment('Then he should be able to book a new appointment')

// Stabilize before full-page checkpoint
WebUI.delay(1)
WebUI.takeFullPageScreenshotAsCheckpoint('booked appointment', [findTestObject('Page_AppointmentConfirmation/lbl_VisitDate')])

WebUI.verifyMatch('Hongkong CURA Healthcare Center', WebUI.getText(findTestObject('Page_AppointmentConfirmation/lbl_Facility')), false)
WebUI.verifyMatch('Yes', WebUI.getText(findTestObject('Page_AppointmentConfirmation/lbl_HospitalReadmission')), false)
WebUI.verifyMatch('Medicaid', WebUI.getText(findTestObject('Page_AppointmentConfirmation/lbl_Program')), false)
WebUI.verifyMatch('27/12/2016', WebUI.getText(findTestObject('Page_AppointmentConfirmation/lbl_VisitDate')), false)
WebUI.verifyMatch('Please make appointment as soon as possible.', WebUI.getText(findTestObject('Page_AppointmentConfirmation/lbl_Comment')), false)

WebUI.takeScreenshot()
WebUI.closeBrowser()