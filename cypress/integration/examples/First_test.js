/// <reference types="Cypress" />

describe("My first test suite", () => {

    it('My first test case', () => {
        //test steps in the tests case
        //cy is the method(?)
        //.visit is a (method?) that lets you visit URLs
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        //the get method is like the findElement method in selenium (basically locating elements)\
       
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // cy.get('.product:visible').should('have.length', 4)
        // cy.get('.products').find('.product').should('have.length', 4) //parent-child chaining
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        // another method without parent-child chaining
        cy.get(':nth-child(3) > .product-action > button')

        //cy.get('.products').find('.product').each()

    })
})


//structurte build around mocha testing framework