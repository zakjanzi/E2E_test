/// <reference types="Cypress" />

describe("Mocking HTTP requests", () => {

    it('My 11th test case', () => {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        // we are intercepting a request call that cypress is listening for.
        cy.intercept ({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, {
    // After successfully intercepting it, instead of sending a real response, cypress will send the below response (mock).
            statusCode: 200,
            body: 
            [
                {
                    "book_name": "some random book name",
                    "isbn": "some random isbn",
                    "aisle": "some random aisle"
                },
            ]
        }).as('bookRetrieval')
        
        cy.get('.btn-primary').click()
        cy.wait('@bookRetrieval').should(({ request, response }) => {
            cy.get('tr').should('have.length', response.body.length + 1)
        })
        //assertion
        cy.get('p').should('have.text', 'Oops only 1 Book available')

    })
})
