export class PageBase {

    open(url) {
        cy.visit(url);
        return this
    }

    fillFields(locator, filling) {
        cy.get(locator)
            .clear()
            .type(filling)
        return this;
    }

    assertContainText(locator, textEq) {
        cy.get(locator)
            .should('contain.text', textEq);
            return this;
    }

    assertIfElementVisible(locator) {
        cy.get(locator)
            .should(('be.visible'));
            return this;
    }
}

export const pageBase = new PageBase();