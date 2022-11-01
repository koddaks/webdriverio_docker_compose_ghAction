const Page = require('./page');
class SupportCenter extends Page {

  get searchField(){
    return $('[name="q"]');
  }
  get searchResultHowSignUp(){
    return $('[href="/en/articles/5295540-how-to-sign-up-for-a-telnyx-account"]');
  }
  get searchResultSignUpImage(){
    return $('[alt*="Sign-up form"]');
  }

  open () {
    return browser.url(`https://support.telnyx.com/en/`)
  }
  
  
  }
  module.exports = new SupportCenter();
  