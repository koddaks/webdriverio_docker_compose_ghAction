const MainPage = require('../pageobjects/main.page');
const TelnyxPage = require('../pageobjects/telnyx_page');
const Base = require('../pageobjects/base');




describe("Redirect to LinkedIn TC-010", () => {
  it('Should redirect to https://www.linkedin.com', async () => {
    await TelnyxPage.open('');
    await Base.cookiesButton.click();
    await MainPage.linkedinLink.scrollIntoView();
    await MainPage.linkedinLink.click();
    await expect(browser).toHaveUrlContaining('https://www.linkedin.com');    
  });
});