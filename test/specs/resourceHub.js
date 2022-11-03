const MainPage = require('../pageobjects/main.page');
const TelnyxPage = require('../pageobjects/telnyx_page');
const Base = require('../pageobjects/base');
const ResourceHubPage = require('../pageobjects/resourceHub');



describe("Resource Hub TC-011", () => {
  it('Should  availability eight headers and having appropriate images for them', async () => {
    await TelnyxPage.open('');
    await Base.cookiesButton.click();
    await MainPage.resourceHubLink.scrollIntoView();
    await MainPage.resourceHubLink.click();    
    await expect(browser).toHaveUrlContaining('/learn');

    await ResourceHubPage.smsGuideImage.scrollIntoView();
    await expect(ResourceHubPage.smsGuide).toBeDisplayed();
    await expect(ResourceHubPage.smsGuideImage).toBeDisplayed();

    
    await expect(ResourceHubPage.voipGuide).toBeDisplayed();
    await expect(ResourceHubPage.voipGuideImage).toBeDisplayed();

    
    await expect(ResourceHubPage.sipTrunkGuide).toBeDisplayed();
    await expect(ResourceHubPage.sipTrunkGuideImage).toBeDisplayed();

    await ResourceHubPage.webRtcGuideImage.scrollIntoView();
    await expect(ResourceHubPage.webRtcGuide).toBeDisplayed();
    await expect(ResourceHubPage.webRtcGuideImage).toBeDisplayed();

    
    await expect(ResourceHubPage.iotGuide).toBeDisplayed();
    await expect(ResourceHubPage.iotGuideImage).toBeDisplayed();

    
    await expect(ResourceHubPage.twoFactorAuthenticationGuide).toBeDisplayed();
    await expect(ResourceHubPage.twoFactorAuthenticationGuideImage).toBeDisplayed();
    
    await ResourceHubPage.faxGuideImage.scrollIntoView();
    await expect(ResourceHubPage.faxGuide).toBeDisplayed();
    await expect(ResourceHubPage.faxGuideImage).toBeDisplayed();

    
    await expect(ResourceHubPage.shakenStirGuide).toBeDisplayed();
    await expect(ResourceHubPage.shakenStirGuideImage).toBeDisplayed();
  });
});