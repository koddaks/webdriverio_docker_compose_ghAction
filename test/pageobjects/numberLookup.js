class NumberLookup{
  get numberLookupImageToTheRightFromFirstHeader(){
    return $('[src*="hero_number_lookup__2_compressed"]');
  }
}
module.exports = new NumberLookup();
