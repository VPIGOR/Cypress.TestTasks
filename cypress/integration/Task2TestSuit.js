/// <reference types="cypress"/>

import { cartPage } from "../support/pages/cartPage";
import { loginPage } from "../support/pages/loginPage";
import { upperMenuBar } from "../support/pages/upperMenuBar";



describe("Test Suite", function () {

    beforeEach(() => {
        loginPage
            .open('Cypress.env("baseUrl")')
            .logIn("my@gog.com", "12345");
    })

    it('#1 log in Test', () => {
        upperMenuBar
            .checkLogIn();
    });

    it('#2 Add item to cart Test', () => {
        cartPage
            .addTShortItemToCart()
            .checkAddedIdem()
            .closeAddedWindow();
    });

    it('#3 remove added item from the cart Test', () => {
        cartPage
            .addTShortItemToCart()
            .closeAddedWindow()
            .removeFirstItemFromCart()
            
    });


    afterEach(() => {
        upperMenuBar
            .logOut();
    })
})