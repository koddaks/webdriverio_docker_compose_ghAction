const MainPage = require('../pageobjects/main.page');
const Base = require("../pageobjects/base");
const TelnyxPage = require("../pageobjects/telnyx_page");
const GlobalNumbersPage = require('../pageobjects/global.numbers');

describe("Global Numbers TC-014", () => {
  it('Above the heading "Configure your numbers in-depth with Mission Control" must be present the logo of the following companies: "Cisco", "PHILIPS", "aircall", "talkdesk", "replicant"', async () => {
    await TelnyxPage.open('');
    await Base.cookiesButton.click();
    await MainPage.globalNumbersLink.scrollIntoView();
    await MainPage.globalNumbersLink.click();
    await expect(browser).toHaveUrlContaining('/phone-numbers');

    await expect(GlobalNumbersPage.cisco).toBeDisplayed();
    await expect(GlobalNumbersPage.philips).toBeDisplayed();
    await expect(GlobalNumbersPage.aircall).toBeDisplayed();
    await expect(GlobalNumbersPage.talkdesk).toBeDisplayed();
    await expect(GlobalNumbersPage.replicant).toBeDisplayed();


  });
});