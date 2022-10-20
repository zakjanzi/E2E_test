/// <reference types="Cypress" />

// Handling mouse hover popus

describe("Mouse Hover Pop-ups", () => {
    it('My 7th test case', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get(".mouse-hover-content").invoke("show") 
        //note:  you can skip this step if you use .click({force: true}). This lets u click on invisible elements (discussed in cy docs).
        cy.contains("Top").click()

        cy.url().should('include','top')

        //an important note:
        // the "show" method (from jQuery) must be applied on the immediate parent of an element.
        // In the above case, using #mousehover will not work because it is not the immediate parent
        
        })
 
})
