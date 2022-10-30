/// <reference types="Cypress" />

describe("Handling API calls directly", () => {

    it('My 13th test case', () => {

        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            

                "name":"Learn Appium Automation with Java",
                "isbn":"bcfgd",
                "aisle":"2276",
                "author":"John moe"
                
                
        }).then(function(response) {
            expect(response.body).to.have.property("Msg", "successfully added")
            expect(response.status).to.eq(200)
        })
        
})

})