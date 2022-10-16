/// <reference types="Cypress" />

describe("My first test suite", () => {

    it('My first test case', () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
       
        cy.get('.search-keyword').type('ca')
        cy.wait(1500)
        

        cy.get('.products').find('.product').each(($el, index, $list) => {
            const veg_text = $el.find('h4.product-name').text()
            if(veg_text.includes("Cashews")) {
                cy.wrap($el).contains("ADD TO CART").click()
            }
          })

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get(':nth-child(14)').click()

    })
})
