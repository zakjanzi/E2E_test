/// <reference types="Cypress" />

// Building customized cypress commands
// Driving data from external sources (fixture)

describe("Custom cypress commands", () => {

    before(function() {
        cy.fixture('example_fixture').then(function(data) {
          this.data = data
        })
      })
    
    it('My 10th test case', function() {

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.get(':nth-child(2) > .nav-link').click()
        
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        });
})

})