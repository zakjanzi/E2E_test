/// <reference types="Cypress" />

// Building customized cypress commands

describe("Custom cypress commands", () => {
    
    it('My 10th test case', function() {

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.get(':nth-child(2) > .nav-link').click()
        
        cy.selectProduct('Nokia Edge')
        cy.selectProduct('Blackberry')
})

})