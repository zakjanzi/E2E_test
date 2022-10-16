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

          cy.get('.brand').should('have.text', 'GREENKART')

          cy.get('.brand').then( (logo) => {
            cy.log(logo.text())
          })

          //sometimes, you'd want to store the css selector in a variable
          //you can't simply do const bla = cy.get(....)
          //actually you can, you just need to resolve the promise yourself.
          //this is related to the way cypress is built and how it handles promises

          //cypress has the alias function which allows you to basically do that. see below

          cy.get('.products').as('whatever')

          // you can then reference the .product with '@whatever'
          




    })
})


//structurte build around mocha testing framework