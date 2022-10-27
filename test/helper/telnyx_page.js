const Page = require('./page');
class TelnyxPage extends Page {

  open (path) {
  return browser.url(`https://telnyx.com/${path}`)
}
}
module.exports = new TelnyxPage();