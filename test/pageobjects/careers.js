class Careers{
  get videoInCareersPage() {
    return $('iframe[title="Careers"]');
}

;}
module.exports = new Careers();