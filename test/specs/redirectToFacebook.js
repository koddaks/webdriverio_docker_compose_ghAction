const MainPage = require('../pageobjects/main.page');
const TelnyxPage = require('../pageobjects/telnyx_page');
const Base = require('../pageobjects/base');




describe("Redirect to Facebook TC-008", () => {
  it('Should redirect to https://www.facebook.com', async () => {
    await TelnyxPage.open('');
    await Base.cookiesButton.click();
    await MainPage.facebookLink.scrollIntoView();
    await MainPage.facebookLink.click();
    // await browser.getWindowHandle('facebook');
    await browser.getUrl();
    // browser.getWindowHandle('telnyx.com');    
    // await browser.closeWindow();    
    await expect(browser).toHaveUrlContaining('https://www.facebook.com');    
  });
});