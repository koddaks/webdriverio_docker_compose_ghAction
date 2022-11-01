const MainPage = require('../pageobjects/main.page');
const TelnyxPage = require('../pageobjects/telnyx_page');
const Base = require('../pageobjects/base');
const DataPrivacy = require('../pageobjects/dataPrivacy');





describe("Data And Privacy TC-004", () => {
  it('To the right of the heading "Data & Privacy" should be an image', async () => {
    await TelnyxPage.open('');
    await Base.cookiesButton.click();
    await MainPage.dataPrivacyLink.scrollIntoView();
    await MainPage.dataPrivacyLink.click();
    await expect(browser).toHaveUrlContaining('/data-privacy');
    await expect(DataPrivacy.dataPrivacyImageInTheTop).toBeDisplayed();
    
    
    
  });
});