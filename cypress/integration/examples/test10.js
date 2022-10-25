/// <reference types="Cypress" />

// Building customized cypress commands
// Driving data from external sources (fixture)

import HomePage from "../pageObjects";

describe("Custom cypress commands", () => {

    before(function() {
        cy.fixture('example_fixture').then(function(data) {
          this.data = data
        })
      })
    
    it('My 10th test case', function() {

      // below is how you create an object for the class
      // for more info about classes, see pageObjects folder.
      const homePage = new HomePage()

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.get(':nth-child(2) > .nav-link').click()
        
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        });
})

})