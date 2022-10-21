/// <reference types="Cypress" />

// Understanding cypress hooks 

describe("Cypress Hooks", () => {
    
    before(function() {
      cy.fixture('example_fixture').then(function(data) {
        this.data = data
      })
    })
    
    
    it('My 9th test case', function() {

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.get(':nth-child(1) > .form-control').type(this.data.name)

        cy.get('select').select(this.data.gender)

        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)

        cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2')
        // above, we are validating whether the input form (name) has a minimum length required of 2 characters.

        cy.get('#inlineRadio3').should('be.disabled')
        

        })
 
})
