/// <reference types="Cypress" />

describe("Mocking HTTP requests", () => {

    it('My 11th test case', () => {
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
                    "book_name": "null",
                    "isbn": "SPY40",
                    "aisle": "2529857"
                },
            ]
        })
     


    })
})


//structurte build around mocha testing framework