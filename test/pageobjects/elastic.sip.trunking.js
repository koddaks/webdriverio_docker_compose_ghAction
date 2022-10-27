class ElasticSipTrunkingPage {
  videoPortalVideoPoster(){
    return $('video[poster*="portal_video_poster"]');
  }
  
  ourNetworkImage(){
    return $('[src*="Map_PoPNetworkMultiCloud__5___3_.svg"]');
  }
  
  competitorNetworksBtn(){
    return $('div[aria-label="Competitor Networks"]');
  }
  competitorNetworksImage(){
    return $('div img[src*="NetworkMap_Competitor_Twilio.svg"]');
  }
  
}

module.exports = new ElasticSipTrunkingPage();
