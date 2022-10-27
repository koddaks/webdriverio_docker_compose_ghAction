class SupportCenter{
  get searchField(){
    return $('[name="q"]');
  }
  get searchResultHowSignUp(){
    return $('[href="/en/articles/5295540-how-to-sign-up-for-a-telnyx-account"]');
  }
  get searchResultSignUpImage(){
    return $('[alt*="Sign-up form"]');
  }
  
  
  }
  module.exports = new SupportCenter();
  