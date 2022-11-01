const MainPage = require('../pageobjects/main.page');
const TelnyxPage = require('../pageobjects/telnyx_page');
const Base = require('../pageobjects/base');
const ReportAbusePage = require('../pageobjects/reportAbuse');






describe("Report Abuse TC-005", () => {
  it('Report Abuse form should have reCAPTCHA validation required', async () => {
    await TelnyxPage.open('');
    await Base.cookiesButton.click();
    await MainPage.reportAbuseLink.scrollIntoView();
    await MainPage.reportAbuseLink.click();
    await expect(browser).toHaveUrlContaining('https://');
    await expect(browser).toHaveUrlContaining('report-abuse');
    await ReportAbusePage.reCaptchaImage.scrollIntoView();
    await expect(ReportAbusePage.reCaptchaImage).toBeDisplayed();
    
    
    
    
  });
});