/// <reference types="cypress"/>

import { pageBase } from "../support/pages/pageBase";
import { supportPage } from "../support/pages/supportPage";
import { upperMenuBar } from "../support/pages/upperMenuBar";



it('contact us fill out the schema', () => {

    pageBase.open('Cypress.env("baseUrl")');
    upperMenuBar.goToContactUsPage();
    supportPage.sendMessageToSupport('my@gog.com', 'some text');   

});
