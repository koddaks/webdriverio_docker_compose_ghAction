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
  get reCaptcha(){   
    return $('[id="g-recaptcha"]');
  }
  get oldreCaptcha(){   
    return $('[id="recaptcha-accessible-status"]');
  }
  
  
  
}
module.exports = new ReportAbusePage();
