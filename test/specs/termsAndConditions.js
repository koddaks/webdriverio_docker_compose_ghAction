const MainPage = require('../pageobjects/main.page');
const TelnyxPage = require('../pageobjects/telnyx_page');
const Base = require('../pageobjects/base');
const TermsAndConditionsPage = require('../pageobjects/termsAndConditions');


describe("Terms and Conditions TC-007", () => {
  it('"Terms and Conditions" should include 10 titles', async () => {
    await TelnyxPage.open('');
    await Base.cookiesButton.click();
    await MainPage.termsAndConditionsLink.scrollIntoView();
    await MainPage.termsAndConditionsLink.click();
    await expect(browser).toHaveUrlContaining('terms-and-conditions');

    await TermsAndConditionsPage.termsAndConditionsHeader.scrollIntoView();


    await TermsAndConditionsPage.terms.scrollIntoView();
    await expect(TermsAndConditionsPage.terms).toHaveTextContaining('Terms');
    await expect(TermsAndConditionsPage.termsText).toHaveTextContaining('By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trade mark law.');

    await TermsAndConditionsPage.useLicense.scrollIntoView();
    await expect(TermsAndConditionsPage.useLicense).toHaveTextContaining('Use License');
    await expect(TermsAndConditionsPage.useLicenseText).toHaveTextContaining('Permission is granted to temporarily download one copy of the materials on Telnyx\’s website for personal, non-commercial transitory viewing only. This the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials, use the materials for any commercial purpose, attempt to decompile or reverse engineer any software contained on Telnyx\’s website, remove any copyright or other proprietary notations from the materials, and transfer the materials to another person or “mirror” the materials on any other server.');

    await TermsAndConditionsPage.Disclaimer.scrollIntoView();
    await expect(TermsAndConditionsPage.Disclaimer).toHaveTextContaining('Disclaimer');
    await expect(TermsAndConditionsPage.DisclaimerText).toHaveTextContaining('The materials on Telnyx’s website are provided “as is”. Telnyx makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Telnyx does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.');

    await TermsAndConditionsPage.limitations.scrollIntoView();
    await expect(TermsAndConditionsPage.limitations).toHaveTextContaining('Limitations');
    await expect(TermsAndConditionsPage.limitationsText).toHaveTextContaining('In no event shall Telnyx or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Telnyx’s website, even if Telnyx or a Telnyx authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.');

    await TermsAndConditionsPage.revisionsAndErrors.scrollIntoView();
    await expect(TermsAndConditionsPage.revisionsAndErrors).toHaveTextContaining('Revisions And Errors');
    await expect(TermsAndConditionsPage.revisionsAndErrorsText).toHaveTextContaining('The materials appearing on our website could include technical, typographical, or photographic errors. Telnyx does not warrant that any of the materials on its website are accurate, complete, or current. Telnyx may make changes to the materials contained on its website at any time without notice. Telnyx does not, however, make any commitment to update the materials. We nor any party involved in creating, producing or delivering this website shall be liable for any direct, incidental, consequential, indirect or punitive damages or any damages whatsoever arising out of your access, use or inability to use this site or on any other hyper-linked website, or any errors or omissions in the content thereof.');

    await TermsAndConditionsPage.links.scrollIntoView();
    await expect(TermsAndConditionsPage.links).toHaveTextContaining('Links');
    await expect(TermsAndConditionsPage.linksText).toHaveTextContaining('Telnyx has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. We are not responsible for the accuracy or reliability of the information on such linked websites and we cannot vouch for the data, opinions, advice or statements made there. Even if we visit those websites, we cannot be responsible for updating or correcting false or misleading information on any third-party web site. Further, we are not responsible for the goods or services that may be offered on other web sites.');    
    await expect(TermsAndConditionsPage.linksRecaptchaText).toHaveTextContaining('You acknowledge and agree that Telnyx may use Google reCAPTCHA');


    await TermsAndConditionsPage.modificationsInSiteTermsOfUse.scrollIntoView();
    await expect(TermsAndConditionsPage.modificationsInSiteTermsOfUse).toHaveTextContaining('Modifications In Site Terms Of Use');
    await expect(TermsAndConditionsPage.modificationsInSiteTermsOfUseText).toHaveTextContaining('Telnyx may revise these Terms of use for its website at any time without notice. By using our website you are agreeing to be bound by the current version of the Terms and Conditions of Use.');

    await TermsAndConditionsPage.governingLaw.scrollIntoView();
    await expect(TermsAndConditionsPage.governingLaw).toHaveTextContaining('Governing Law');
    await expect(TermsAndConditionsPage.governingLawText).toHaveTextContaining('Any claim relating to Telnyx’s website shall be governed by the laws of the State of Illinois without regard to its conflict of law provisions.');

    await TermsAndConditionsPage.indemnification.scrollIntoView();
    await expect(TermsAndConditionsPage.indemnification).toHaveTextContaining('Indemnification');
    await expect(TermsAndConditionsPage.indemnificationText).toHaveTextContaining('You agree to indemnify, defend and hold harmless Telnyx, its parent companies, subsidiaries, affiliated companies, joint venturers, business partners, licensors, employees, and agents from and against all claims, losses, expenses, damages and costs (including, but not limited to, direct, incidental, consequential, exemplary and indirect damages), and reasonable attorneys’ fees, resulting from or arising out of your use, misuse, or inability to use the website or any violation by you of these Terms.');

    await TermsAndConditionsPage.termination.scrollIntoView();
    await expect(TermsAndConditionsPage.termination).toHaveTextContaining('Termination');
    await expect(TermsAndConditionsPage.terminationText).toHaveTextContaining('Telnyx reserves the right, without notice and in its sole discretion, to terminate your license to use the website and to block or prevent your future access to, and use of, the website.');

   
    
  });
});