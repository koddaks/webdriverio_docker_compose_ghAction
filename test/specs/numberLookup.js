const MainPage = require('../pageobjects/main.page');
const Base = require("../pageobjects/base");
const TelnyxPage = require("../pageobjects/telnyx_page");
const NumberLookupPage = require('../pageobjects/numberLookup');

describe("Number Lookup TC-013", () => {
  it('To the right of the heading "Know the details behind every number with Phone Number Lookup" image should be displayed', async () => {
    await TelnyxPage.open('');
    await Base.cookiesButton.click();
    await MainPage.numberLookupLink.scrollIntoView();
    await MainPage.numberLookupLink.click();
    await expect(browser).toHaveUrlContaining('/number-lookup');
    await expect(NumberLookupPage.numberLookupImageToTheRightFromFirstHeader).toBeDisplayed();

  });
});