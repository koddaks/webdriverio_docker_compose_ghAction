const AboutTelnyxPage = require("../pageobjects/about.telnyx");
const Base = require("../pageobjects/base");
const TelnyxPage = require("../pageobjects/telnyx_page");

describe("About Us TC-001", () => {
  it('Under the headline "Unlocking the power of intelligent connectivity" should be the video', async () => {
    await TelnyxPage.open("company/about");
    await Base.cookiesButton.click();
    await AboutTelnyxPage.videoAboutUs.isDisplayed();    
  });
});
