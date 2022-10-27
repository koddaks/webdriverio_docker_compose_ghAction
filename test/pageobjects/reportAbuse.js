class ReportAbusePage { 
  
  get reCaptchaStart(){   
    return $('[id="recaptcha-accessible-status"]');
  }
  get reCaptchaImage(){
    return $('[data-type="image"]');
  }
  get submitBtn(){
    return $('[type="submit"]');
  }
  
}
module.exports = new ReportAbusePage();
