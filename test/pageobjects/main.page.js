class MainPage {
  get signUpBtnInTopOfPage() { return $('ul[class*="sc-14c941d7-5 dGPYWM sc-14c941d7-7 hhCIhu"] a[href="/sign-up"]');}
 
  get logInBtnInTopOfPage() { return $('.sc-ee0ec023-2 > :nth-child(4)')}

  get elasticSipTrunkingInDropMenu(){
    return $('div [class="sc-7b3980dc-2 bjOBlW"] a[href="/products/sip-trunks"]');
  }

  get smsApiInDropMenu(){
    return $('div [class="sc-7b3980dc-2 bjOBlW"] a[href="/products/sms-api"]');
  }
  get aboutTelnyxInDropMenu(){
    return $('li[class="Text-sc-5o8owa-0 sc-7b3980dc-7 czgqGc khahzD"] a[href="/company/about"]');
  }
  get blogBtnInDowpPage(){
    return $('[data-e2e="Footer--navItem-resources"] > div > .sc-7b6c9f9b-6 > :nth-child(2) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span');
  } 
  
  
  get cookiesButton() {
    return $('//*[contains(text(),"Accept and close")');
   }
  
   get listOfAwards() {
    return $('div[class="sc-639a09db-0 kDMByb"]');
   }
   get listOfAwardsBestRelationship() {
    return $('img[src*="best-relationship-summer-2021__1_.svg?"]');
   }
   get listOfAwardsEaseOfUse() {
    return $('[src*="EaseOfUse.svg?w=94"]');
   }
   
   get listOfAwardsBestResults() {
    return $('[src*="BestResults"]');
   }
   get listOfAwardsBestUsability() {
    return $('[src*="BestUsability"]');
   }
   get listOfAwardsLeader() {
    return $('[src*="CommunicationPlatformasaService_Leader_Leader"]');
   }
   get listOfAwardsBestMomentumLeader() {
    return $('[src*="MomentumLeader"]');
   }
   get listOfAwardsBestMostImplementable() {
    return $('[src*="MostLikelyToRecommend"]');
   }

   get dataPrivacyLink(){
    return $('[data-e2e="Footer--navItem-company"] > div > .sc-7b6c9f9b-6 > :nth-child(3) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span');
  }
  get reportAbuseLink(){
    return $('[data-e2e="Footer--navItem-company"] > div > .sc-7b6c9f9b-6 > :nth-child(5) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span');
  }
  get supportCenterLink(){
    return $('[data-e2e="Footer--navItem-company"] > div > .sc-7b6c9f9b-6 > :nth-child(4) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span');
  }
  
  get termsAndConditionsLink(){
    return $('[data-e2e="Footer--navItem-company"] > div > .sc-7b6c9f9b-6 > :nth-child(9) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span');
  }
  get facebookLink(){
    return $('[href="https://www.facebook.com/Telnyx/"]');
  }
  get twitterLink(){
    return $('[href="https://twitter.com/telnyx"]');
  }
  get linkedinLink(){
    return $('[href="https://www.linkedin.com/company/telnyx/"]');
  }
  get resourceHubLink(){
    return $('[href="/learn"]');
  }
  get releaseNotesLink(){
    return $('[href="/release-notes"]');
  }
  get careersLink(){
    return $('[data-e2e="Footer--navItem-company"] > div > .sc-7b6c9f9b-6 > :nth-child(2) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span');
  }
  get numberLookupLink(){
    return $('div [data-e2e="Footer--navItem-products"] >div a[href="/number-lookup"]');
  }
  get verifyApiLink(){
    return cy.get('div [data-e2e="Footer--navItem-products"] >div a[href="/products/verify-api"]');
  }
  get sliderTrackMakeOutboundCalls(){
    return $(':nth-child(4) > .telnyx-slider > .ant-slider > .ant-slider-track');
  } 
  get sliderHandleMakeOutboundCalls(){
    return $(':nth-child(4) > .telnyx-slider > .ant-slider > .ant-slider-handle');
  } 
  
  get  sliderReceiveInboundCall(){
    return $(':nth-child(5) > .telnyx-slider > .ant-slider > .ant-slider-step');
  }
  get sliderForm(){
    return $('.sc-1e626587-1');
  }
}

module.exports = new MainPage();
