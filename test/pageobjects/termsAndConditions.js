class TermsAndConditions{
  get termsAndConditionsHeader(){
    return $('[class="sc-69277c81-0 Va-dul"]');
  }

  get terms(){
    return $('.sc-d8f5e61f-5 > div > :nth-child(2)');
  }
  get termsText(){
    return $('.sc-d8f5e61f-5 > div > :nth-child(3)');
  }



  get useLicense(){
    return $('.sc-d8f5e61f-5 > div > :nth-child(4)');
  }
  get useLicenseText(){
    return $('.sc-d8f5e61f-5 > div > :nth-child(5)');
  }
  

  get Disclaimer(){
    return $('.sc-d8f5e61f-5 > div > :nth-child(6)');
  }
  get DisclaimerText(){
    return $('.sc-d8f5e61f-5 > div > :nth-child(7)');
  }


  get limitations(){
    return $('.sc-d8f5e61f-5 > div > :nth-child(8)');
  }
  get limitationsText(){
    return $('.sc-d8f5e61f-5 > div > :nth-child(9)');
  }

  get revisionsAndErrors(){
    return $('.sc-d8f5e61f-5 > div > :nth-child(10)');
  }
  get revisionsAndErrorsText(){
    return $('.sc-d8f5e61f-5 > div > :nth-child(11)');
  }


  get links(){
    return $('.sc-d8f5e61f-5 > div > :nth-child(12)');
  }
  get linksText(){
    return $('.sc-d8f5e61f-5 > div > :nth-child(13)');
  }
  get linksRecaptchaText(){
    return $('.sc-d8f5e61f-5 > div > :nth-child(14)');
  }


  get modificationsInSiteTermsOfUse(){
    return $('.sc-d8f5e61f-5 > div > :nth-child(15)');
  }
  get modificationsInSiteTermsOfUseText(){
    return $('.sc-d8f5e61f-5 > div > :nth-child(16)');
  }

  

  get governingLaw(){
    return $('.sc-d8f5e61f-5 > div > :nth-child(17)');
  }
  get governingLawText(){
    return $('.sc-d8f5e61f-5 > div > :nth-child(18)');
  }



  get indemnification(){
    return $('.sc-d8f5e61f-5 > div > :nth-child(19)');
  }
  get indemnificationText(){
    return $('.sc-d8f5e61f-5 > div > :nth-child(20)');
  }



  get termination(){
    return $('.sc-d8f5e61f-5 > div > :nth-child(21)');
  }
  get terminationText(){
    return $('.sc-d8f5e61f-5 > div > :nth-child(22)');
  }
 



}
module.exports = new TermsAndConditions();
