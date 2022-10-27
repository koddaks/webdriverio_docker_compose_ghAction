const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");
const AboutTelnyxPage = require("../pageobjects/about.telnyx");
const Base = require("../pageobjects/base");
const Careers = require('../pageobjects/careers');
const TelnyxPage = require('../helper/telnyx_page');
const MainPage = require('../pageobjects/main.page');


describe("About Us TC-001", () => {
  it('Under the headline "Unlocking the power of intelligent connectivity" should be the video', async () => {
    await TelnyxPage.open("company/about");
    await Base.cookiesButton.click();
    await AboutTelnyxPage.videoAboutUs.isDisplayed();
    await browser.pause(10000);
  });
});
// describe("Careers TC-002 --Not DONE", () => {
//   it('Video "Meet the telnyx team" should be displayed at the top of the page. The "The Telnyx experience" should include the following headings: "Flexible, global team", "Modern life, modern space", "Helping you grow", "We have fun too!"', async () => {
//     await TelnyxPage.open("company/careers");
//     await Careers.videoInCareersPage.isDisplayed();
//   });
// });
// describe("Awards and nominations for 2022 year TC-003", () => {
//   it('Under the heading text "Momentum leader and highest satisfaction in G2 CPaaS grid" should be a list of awards', async () => {
//     await TelnyxPage.open('');
//     MainPage.listOfAwardsBestMomentumLeader.isDisplayed();
//     MainPage.listOfAwardsBestMostImplementable.isDisplayed();
//     MainPage.listOfAwardsBestRelationship.isDisplayed();
//     MainPage.listOfAwardsBestResults.isDisplayed();
//     MainPage.listOfAwardsBestUsability.isDisplayed();
//     MainPage.listOfAwardsEaseOfUse.isDisplayed();
//     MainPage.listOfAwardsLeader.isDisplayed();
    
//   });
// });
