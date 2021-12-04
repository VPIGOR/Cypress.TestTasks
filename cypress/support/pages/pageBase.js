export class PageBase {

    open(url) {
        cy.visit(url);
        return this
    }

    fillFields(locator, someText) {
        cy.get(locator)
            .clear()
            .type(someText)
        return this;
    }

    assertContainText(locator, textEq) {
        cy.get(locator)
            .should('contain.text', textEq);

    }

    assertIfElementVisible(locator) {
        cy.get(locator)
            .should(('be.visible'));
    }

}

export const pageBase = new PageBase();