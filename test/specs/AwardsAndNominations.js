const MainPage = require('../pageobjects/main.page');

describe("Awards and nominations for 2022 year TC-003", () => {
  it('Under the heading text "Momentum leader and highest satisfaction in G2 CPaaS grid" should be a list of awards', async () => {
    await TelnyxPage.open('');
    await Base.cookiesButton.click();
    MainPage.listOfAwards.scrollIntoView();
    MainPage.listOfAwardsBestMomentumLeader.isDisplayed();
    MainPage.listOfAwardsBestMostImplementable.isDisplayed();
    MainPage.listOfAwardsBestRelationship.isDisplayed();
    MainPage.listOfAwardsBestResults.isDisplayed();
    MainPage.listOfAwardsBestUsability.isDisplayed();
    MainPage.listOfAwardsEaseOfUse.isDisplayed();
    MainPage.listOfAwardsLeader.isDisplayed();
    
  });
});