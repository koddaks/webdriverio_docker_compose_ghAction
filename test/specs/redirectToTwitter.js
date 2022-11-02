const MainPage = require('../pageobjects/main.page');
const TelnyxPage = require('../pageobjects/telnyx_page');
const Base = require('../pageobjects/base');




describe("Redirect to Twitter TC-009", () => {
  it('Should redirect to  https://twitter.com', async () => {
    await TelnyxPage.open('');
    await Base.cookiesButton.click();
    await MainPage.twitterLink.scrollIntoView();
    await MainPage.twitterLink.click();
    await browser.getWindowHandle('twitter');
    await browser.getUrl();
    // browser.getWindowHandle('telnyx.com');
    // await browser.closeWindow();
    await expect(browser).toHaveUrlContaining('https://twitter.com');    
  });
});