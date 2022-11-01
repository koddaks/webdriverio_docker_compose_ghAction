const MainPage = require('../pageobjects/main.page');
const Careers = require("../pageobjects/careers");
const TelnyxPage = require("../pageobjects/telnyx_page");
const Base = require('../pageobjects/base');

describe("Careers TC-002", () => {
  it('Video "Meet the telnyx team" should be displayed at the top of the page. The "The Telnyx experience" should include the following headings: "Flexible, global team", "Modern life, modern space", "Helping you grow", "We have fun too!"', async () => {
    await TelnyxPage.open('');
    await Base.cookiesButton.click();
    await MainPage.careersLink.scrollIntoView();
    await MainPage.careersLink.click();
    await expect(browser).toHaveUrlContaining('careers');
    await expect(Careers.videoInCareersPage).toBeDisplayed();
  });
});
