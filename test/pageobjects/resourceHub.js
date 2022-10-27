class ResourceHub {
  get smsGuideImage(){
    return $('[src*=icon_duotone_products_sms]');
  }
  get smsGuide(){
    return $(':nth-child(1) > .sc-3e56386e-4 > .sc-3e56386e-5 > .sc-3e56386e-2 > .Text-sc-5o8owa-0');
  }
  get smsGuideText(){
    return $('');
  }

  
  get voipGuideImage(){
    return $('[src*=Voice_API]');
  }
  get voipGuide(){
    return $(':nth-child(2) > .sc-3e56386e-4 > .sc-3e56386e-5 > .sc-3e56386e-2 > .Text-sc-5o8owa-0');
  }
  get voipGuideText(){
    return $('');
  }


  get sipTrunkGuideImage(){
    return $('[src*=icon_duotone_products_sip-trunking]');
  }
  get sipTrunkGuide(){
    return $(':nth-child(3) > .sc-3e56386e-4 > .sc-3e56386e-5 > .sc-3e56386e-2 > .Text-sc-5o8owa-0');
  }
  get sipTrunkGuideText(){
    return $('');
  }


  get webRtcGuideImage(){
    return $('[src*=icon_duotone_products_webrtc]');
  }
  get webRtcGuide(){
    return $(':nth-child(4) > .sc-3e56386e-4 > .sc-3e56386e-5 > .sc-3e56386e-2 > .Text-sc-5o8owa-0');
  }
  get webRtcGuideText(){
    return $('');
  }


  get iotGuideImage(){
    return $('[src*=icon_duotone_products_wireless]');
  }
  get iotGuide(){
    return $(':nth-child(5) > .sc-3e56386e-4 > .sc-3e56386e-5 > .sc-3e56386e-2 > .Text-sc-5o8owa-0');
  }
  get iotGuideText(){
    return $('');
  }


  get twoFactorAuthenticationGuideImage(){
    return $('[src*=icon_duotone_products_verify-api]');
  }
  get twoFactorAuthenticationGuide(){
    return $(':nth-child(6) > .sc-3e56386e-4 > .sc-3e56386e-5 > .sc-3e56386e-2 > .Text-sc-5o8owa-0');
  }
  get twoFactorAuthenticationGuideText(){
    return $('');
  }


  get faxGuideImage(){
    return $('[src*=icon_duotone_products_fax-api]');
  }
  get faxGuide(){
    return $(':nth-child(7) > .sc-3e56386e-4 > .sc-3e56386e-5 > .sc-3e56386e-2 > .Text-sc-5o8owa-0');
  }
  get faxGuideText(){
    return $('');
  }


  get shakenStirGuideImage(){
    return $('[src*=icon_duotone_products_shaken-stir]');
  }
  get shakenStirGuide(){
    return $(':nth-child(8) > .sc-3e56386e-4 > .sc-3e56386e-5 > .sc-3e56386e-2 > .Text-sc-5o8owa-0');
  }
  get shakenStirGuideText(){
    return $('');
  }

 

}
module.exports = new ResourceHub();

