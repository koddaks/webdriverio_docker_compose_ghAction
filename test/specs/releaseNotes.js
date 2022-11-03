const MainPage = require('../pageobjects/main.page');
const TelnyxPage = require('../pageobjects/telnyx_page');
const Base = require('../pageobjects/base');
const ReleaseNotesPage = require('../pageobjects/releaseNotes');




describe("Release Notes TC-012", () => {
  it('All checkboxes must be available for selection', async () => {
    await TelnyxPage.open('');
    await Base.cookiesButton.click();
    await MainPage.releaseNotesLink.scrollIntoView();
    await MainPage.releaseNotesLink.click();    
    await expect(browser).toHaveUrlContaining('/release-notes');
    
    await ReleaseNotesPage.voiceApi.click();    
    await expect(browser).toHaveUrlContaining('tag=voice');
    await expect(ReleaseNotesPage.voiceApi).toBeSelected();    

    await ReleaseNotesPage.whatsApp.click();    
    await expect(browser).toHaveUrlContaining('tag=whatsapp');
    await expect(ReleaseNotesPage.whatsApp).toBeSelected();

    await ReleaseNotesPage.dlc.click();    
    await expect(browser).toHaveUrlContaining('tag=10dlc');
    await expect(ReleaseNotesPage.dlc).toBeSelected();

    await ReleaseNotesPage.videoRooms.click();    
    await expect(browser).toHaveUrlContaining('tag=video%20rooms');
    await expect(ReleaseNotesPage.videoRooms).toBeSelected();

    await ReleaseNotesPage.verifyApi.click();    
    await expect(browser).toHaveUrlContaining('tag=verify%20api');
    await expect(ReleaseNotesPage.verifyApi).toBeSelected();

    await ReleaseNotesPage.fax.click();    
    await expect(browser).toHaveUrlContaining('tag=fax');
    await expect(ReleaseNotesPage.fax).toBeSelected();
    
    await ReleaseNotesPage.reporting.click();    
    await expect(browser).toHaveUrlContaining('tag=reporting');
    await expect(ReleaseNotesPage.reporting).toBeSelected();

    await ReleaseNotesPage.telephony.click();    
    await expect(browser).toHaveUrlContaining('tag=telephony');
    await expect(ReleaseNotesPage.telephony).toBeSelected();

    await ReleaseNotesPage.network.click();    
    await expect(browser).toHaveUrlContaining('tag=network');
    await expect(ReleaseNotesPage.network).toBeSelected();
   
    await ReleaseNotesPage.wireless.click();    
    await expect(browser).toHaveUrlContaining('tag=wireless');
    await expect(ReleaseNotesPage.wireless).toBeSelected();

    await ReleaseNotesPage.webrtc.click();    
    await expect(browser).toHaveUrlContaining('tag=webrtc');
    await expect(ReleaseNotesPage.webrtc).toBeSelected();

    await ReleaseNotesPage.missionControlPortal.click();    
    await expect(browser).toHaveUrlContaining('tag=mission%20control%20portal');
    await expect(ReleaseNotesPage.missionControlPortal).toBeSelected();

    await ReleaseNotesPage.api.click();    
    await expect(browser).toHaveUrlContaining('tag=api');
    await expect(ReleaseNotesPage.api).toBeSelected();

    await ReleaseNotesPage.account.click();    
    await expect(browser).toHaveUrlContaining('tag=account');
    await expect(ReleaseNotesPage.account).toBeSelected();

    await ReleaseNotesPage.messaging.click();    
    await expect(browser).toHaveUrlContaining('tag=account&tag=messaging');
    await expect(ReleaseNotesPage.messaging).toBeSelected();

    await ReleaseNotesPage.numbers.click();    
    await expect(browser).toHaveUrlContaining('tag=numbers');
    await expect(ReleaseNotesPage.numbers).toBeSelected();
    // await browser.pause(5000);

  });
});