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
        
        //parent-child chaining
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        // another method without parent-child chaining
        cy.get(':nth-child(3) > .product-action > button')

        cy.get('.products').find('.product').each(($el, index, $list) => {
            const veg_text = $el.find('h4.product-name').text()
            if(veg_text.includes("Cashews")) {
                cy.wrap($el).contains("ADD TO CART").click()
            }
          })

          cy.get('.brand').then( (logo) => {
            cy.log(logo.text())
          })
          

    })
})


//structurte build around mocha testing framework