/// <reference types="Cypress" />

// Understanding cypress hooks 
import 'cypress-iframe'

describe("Cypress Hooks", () => {
    
    before(() => {

      })
    
    
    it('My 9th test case', () => {

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.get(':nth-child(1) > .form-control').type("Ronald")

        cy.get('select').select("Female")

        })
 
})
