/// <reference types="Cypress" />

describe("My first test suite", () => {

    it('My first test case', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       
        //how to check & uncheck one check box
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        

        //how to check multiple checkboxes (select them using their type (css))
        cy.get('input[type="checkbox"]').check(["option2", "option3"])

    })
})
