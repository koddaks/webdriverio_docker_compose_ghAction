const Page = require('./page');
class AboutTelnyxPage extends Page {

 get videoAboutUs() { return $('iframe[title*="About Us"]');}

 open (path) {
  return browser.url(`https://telnyx.com/${path}`)
}
}

module.exports = new AboutTelnyxPage();