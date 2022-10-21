/// <reference types="Cypress" />

// Building customized cypress commands

describe("Custom cypress commands", () => {
    
    it('My 10th test case', function() {

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.get(':nth-child(2) > .nav-link').click()
        
        cy.get('h4.card-title').each(($el, index, $list) => {

          if($el.text().includes('Blackberry')) {

            cy.get('button.btn.btn-info').eq(index).click()
          }
          
          // So far, we are able to check if Blackberry is in the product list and add it to cart
          // We will now build and use custom Cypress functions to write a function that accepts any product name.

        })
 
    })
})
