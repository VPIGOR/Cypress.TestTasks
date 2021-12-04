import { PageBase } from "./pageBase";

export class SupportPage extends PageBase {

    subjectHeadingDropDownList = '#id_contact';
    emailField = '#email';
    textField = '#message';
    sendButton = '#submitMessage > span';

    sendMessageToSupport(email, text) {
        this.choiseCustomerService()
            .fillMail(email)
            .fillMessageBox(text)
            .sendMessage();
        return this;
    }

    choiseCustomerService() {
        cy.get(this.subjectHeadingDropDownList).select(1);
        return this;
    }

    sendMessage() {
        cy.get(this.sendButton).click();
        return this;
    }

    fillMail(email) {
        this.fillFields(this.emailField, email);
        return this;
    }

    fillMessageBox(text) {
        this.fillFields(this.textField, text);
        return this;
    }

}

export const supportPage = new SupportPage();