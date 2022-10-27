const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
// https://gist.github.com/cecilemuller/437d7340b9f095cf5635dc9780a05092  - Run Docker Compose + in Github Action

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});


