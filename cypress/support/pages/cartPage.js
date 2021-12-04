import { pageBase, PageBase } from "./pageBase";

export class CartPage extends PageBase {

    tShortButton = '.sf-menu > :nth-child(3) > a';
    firstItemAddToCartButton = '.ajax_add_to_cart_button > span';
    closeWindowButton = '.cross';
    cartDropList = '[title="View my shopping cart"]';
    removeFirstItemButton = '.remove_link';
    actionMessage = '.layer_cart_product > h2';
    quantityOfItems = '[title="View my shopping cart"] > .ajax_cart_quantity'
    emptyCartTitle = '.ajax_cart_no_product';


    addTShortItemToCart() {
        cy.get(this.tShortButton).click()
            .get(this.firstItemAddToCartButton).click();
        return this;
    }

    closeAddedWindow() {
        cy.get(this.closeWindowButton).click();
        return this;
    }

    removeFirstItemFromCart() {
        cy.get(this.cartDropList).trigger('mouseover')
            .get(this.removeFirstItemButton).click();
        return this;
    }

    checkAddedIdem() {
        this.assertContainText(this.actionMessage, 'successfully added');
        return this;
    }

    checkQuantytiItemToTheCart(quantity) {
        cy.get(this.quantityOfItems).should(quantity);
        return this;
    }

    checkIsCartEmpty() {
        cy.get(this.emptyCartTitle).should('be.visible');
        return this;
    }
}

export const cartPage = new CartPage();