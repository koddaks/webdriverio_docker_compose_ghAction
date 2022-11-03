class GlobalNumbers{
  get cisco (){
    return $('[src*="logo_cisco"]');
  }
  get philips (){
    return $('[src*="logo_philips"]');
  }
  get aircall (){
    return $('[src*="logo_aircall"]');
  }
  get talkdesk (){
    return $('[src*="logo_talkdesk"]');
  }
  get replicant (){
    return $('[src*="logo_replicant"]');
  }
}
module.exports = new GlobalNumbers();