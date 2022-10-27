class SignUpPage {
  workEmailField() { return $('input[id="email"]');}
  fullNameField() { return $('input[id="full_name"]');}
  passwordField() { return $('input[id="password"]');}
  agreeTermsCheckBox() { return $('div[aria-labelledby="terms-label"] rect');}
  recievEmailsChechBox() {return $('div[style="position:relative"] div[class*="jSawLe"] rect');}
  submitBtn() {return $('button[type="submit"]');}
  emailErrorMessage() {return $('div [id="email_error"]')}
  errorMessage() {return $('span[class="sc-570b157-1 eUoKGn"]')}
  
 
  registration(email, name, password){
    this.workEmailField().type(email);
    this.fullNameField().type(name);
    this.passwordField().type(password);
    this.agreeTermsCheckBox().click();
    this.recievEmailsChechBox().click();
    this.submitBtn().click();
    cy.wait(15000);
  }
}

module.exports = new SignUpPage();

