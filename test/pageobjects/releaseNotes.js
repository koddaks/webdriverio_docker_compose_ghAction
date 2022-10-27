class ReleaseNotes{
  get voiceApi(){
    return $('[for="voice api"]');
  }
  get whatsApp(){
    return $('[for="whatsapp"]');
  }
  get dlc(){
    return $('[for="10dlc"]');
  }
  get videoRooms(){
    return $('[for="video rooms"]');
  }
  get verifyApi(){
    return $('[for="verify api"]');
  }
  get fax(){
    return $('[for="fax"]');
  }
  get reporting(){
    return $('[for="reporting"]');
  }
  get telephony(){
    return $('[for="telephony"]');
  }
  get network(){
    return $('[for="network"]');
  }
  get wireless(){
    return $('[for="wireless"]');
  }
  get webrtc(){
    return $('[for="webrtc"]');
  }
  get missionControlPortal(){
    return $('[for="mission control portal"]');
  }
  get api(){
    return $('[for="api"]');
  }
  get account(){
    return $('[for="account"]');
  }
  get messaging(){
    return $('[for="messaging"]');
  }
  get numbers(){
    return $('[for="numbers"]');
  }

}
module.exports = new ReleaseNotes();
