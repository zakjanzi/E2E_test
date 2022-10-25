/// <reference types="Cypress" />

// Building customized cypress commands
// Driving data from external sources (fixture)

import HomePage from '../pageObjects/HomePage.js'

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

        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()

        cy.get(':nth-child(4) > :nth-child(5) > .btn').click()

        cy.get('#country').type('Ind')

        cy.wait(7000)

        //About the wait method: I would try to avoid the usage of cy.wait() if possible - 
        //as in your example, this will ALWAYS wait for 7 seconds, even if the element is already visible 
        //(like sleep method in selenium). As opposed to timeout - that is the maximum waiting time, 
        //meaning if the element is visible lets say in 3 sec, it just clicks on it and continues. 
        //It does not wait the remaining 5 seconds. 
        //In case you have more tests, usage of wait method could significantly slows down your execution time.

        cy.get('.suggestions > :nth-child(1) > li > a').click()

        cy.get('#checkbox2').click({force:true})

        cy.get('.ng-untouched > .btn').click()

        cy.get('.alert').then(function(element) {

          const actualText = element.text()
          expect(actualText.includes("Success!")).to.be.true
          
        }) 
// I followed the above method to grab the text and validate it because the regular .text() method does not work here.
// Try running cy.get('.alert').should('have.text', 'Success!')
        
})

})