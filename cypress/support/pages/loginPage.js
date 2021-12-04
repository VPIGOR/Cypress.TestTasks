import { PageBase } from "./pageBase";
import { upperMenuBar } from "./upperMenuBar";

export class LoginPage extends PageBase {

    emailField = '#email';
    passwordField = '#passwd';
    signInButton = '#SubmitLogin > span';

    logIn(email, password) {
        upperMenuBar.goToSingInPage();
        this.fillEmail(email)
            .fillPassword(password)
            .pressSingIn();
        return this;
    }

    pressSingIn() {
        cy.get(this.signInButton).click();
        return this;
    }

    fillEmail(email) {
        this.fillFields(this.emailField, email);
        return this;
    }
    
    fillPassword(password) {
        this.fillFields(this.passwordField, password)
        return this;
    }
}

export const loginPage = new LoginPage();