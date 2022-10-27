class SignInPage {


  businessEmailField() { return $('div[class*="TextField__InputWrapper-sc"] input[name="email"]');}
  passwordField() { return $('input[type="password"]');}
  rememberEmailCheckBox() { return $('svg[data-prefix="far"]');}
  logInBtn() {return $('button[class*="LoginForm__LoginButton"]')}
  errorMessage() {return $('span[class*="Message__MessageCopy-sc-1lbs5ge-2 ilxvtf"]')}

  authorization(email, password){
    this.businessEmailField().type(email);
    this.passwordField().type(password);
    this.rememberEmailCheckBox().click();
    this.logInBtn().click();
    cy.wait(2000);
  }
 
  
}

export default SignInPage

