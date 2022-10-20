/// <reference types="Cypress" />

// Handling visible and invisible elements using assertions

describe("Visible and Invisible elements", () => {
    it('My 4th test case', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')


        // radio buttons section
        // you can use .check() or .click().

        //First we get the element. The element has a "value" = radio1 (2,3).
        // To select it, we need to build custom css. (unlike id)

        cy.get("[value=radio2]").check().should('be.checked')
        //note that u need double quotes here.
        // so: 1) get it. 2) check/click it. 3) validate it.

        

    })
})