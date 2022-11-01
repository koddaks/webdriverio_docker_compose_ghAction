const MainPage = require('../pageobjects/main.page');
const TelnyxPage = require('../pageobjects/telnyx_page');
const Base = require('../pageobjects/base');

describe("Awards and nominations for 2022 year TC-003", () => {
  it('Under the heading text "Momentum leader and highest satisfaction in G2 CPaaS grid" should be a list of awards', async () => {
    await TelnyxPage.open('');
    await Base.cookiesButton.click();
    await MainPage.listOfAwards.scrollIntoView();
    await expect(MainPage.listOfAwards).toBeDisplayed();
    await expect(MainPage.listOfAwardsBestResults).toBeDisplayed();
    await expect(MainPage.listOfAwardsBestUsability).toBeDisplayed();
    await expect(MainPage.listOfAwardsLeader).toBeDisplayed();
    await expect(MainPage.listOfAwardsBestMomentumLeader).toBeDisplayed();
    await expect(MainPage.listOfAwardsMostLikelyToRecommend).toBeDisplayed();
  });
});