import { PageBase } from "./pageBase";

export class UpperMenuBar extends PageBase {

    contactUsButton = '#contact-link > a';
    signInButton = '.login';
    signOutButton = '.logout';

    goToContactUsPage() {
        cy.get(this.contactUsButton).click();
        return this;
    }

    goToSingInPage() {
        cy.get(this.signInButton).click();
        return this;
    }

    logOut() {
        cy.wait(1000)
            .get(this.signOutButton).click();
        return this;
    }

    checkLogOut(){
        this.assertIfElementVisible(this.signInButton);
        return this;
    }

    checkLogIn(){
        this.assertIfElementVisible(this.signOutButton); 
        return this;    
    }

}

export const upperMenuBar = new UpperMenuBar();