const MainPage = require('../pageobjects/main.page');
const Base = require("../pageobjects/base");
const TelnyxPage = require("../pageobjects/telnyx_page");
const VerifyApiPage = require("../pageobjects/verify.api");

describe("Verify API TC-015", () => {
  it('"Get Free Testing Credit" button should redirect to sign-up page', async () => {
    await TelnyxPage.open('');
    await Base.cookiesButton.click();
    await MainPage.verifyApiLink.scrollIntoView();
    await MainPage.verifyApiLink.click();
    await expect(browser).toHaveUrlContaining('/verify-api');
    await VerifyApiPage.getFreeTestingCreditBtn.click();
    await expect(browser).toHaveUrlContaining('/sign-up');
    
  });
});