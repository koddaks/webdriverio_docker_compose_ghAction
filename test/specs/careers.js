const Careers = require("../pageobjects/careers");
const TelnyxPage = require("../pageobjects/telnyx_page");

describe("Careers TC-002 --Not DONE", () => {
  it('Video "Meet the telnyx team" should be displayed at the top of the page. The "The Telnyx experience" should include the following headings: "Flexible, global team", "Modern life, modern space", "Helping you grow", "We have fun too!"', async () => {
    await TelnyxPage.open("company/careers");
    await Base.cookiesButton.click();
    await Careers.videoInCareersPage.isDisplayed();
  });
});
