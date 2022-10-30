/// <reference types="Cypress" />

describe("Mocking HTTP requests", () => {

    it('My 12th test case', () => {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        // we are intercepting a request call that cypress is listening for.
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) => {
        req.url= "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra" 
    
        req.continue((res) => {
            // expect(res.statusCode).to.equal(403)
        })
    
    }).as("dummyURL")
        
    
        cy.get('.btn-primary').click()
        cy.wait("@dummyURL")
})

})