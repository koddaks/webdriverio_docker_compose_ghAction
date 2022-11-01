const Base = require('../pageobjects/base');
const SupportCenterPage = require('../pageobjects/supportCenter');







describe("Support Center TC-006", () => {
  it('Under the heading "Signing up for an account" should be an example image How the registration form looks like', async () => {
    await SupportCenterPage.open();
    await SupportCenterPage.searchField.click();
    await SupportCenterPage.searchField.setValue('Sign up');
    await browser.keys('Enter');
    await SupportCenterPage.searchResultHowSignUp.click();
    await expect(browser).toHaveUrlContaining('how-to-sign-up-for-a-telnyx-account');
    await SupportCenterPage.searchResultSignUpImage.scrollIntoView();
    await expect(SupportCenterPage.searchResultSignUpImage).toBeDisplayed();
  });
});
