/// <reference types="Cypress" />

describe("My first test suite", () => {
    it('My first test case', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //window:alert
        cy.on('window:alert',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        
        cy.on('window:confirm',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        // the idea here is to remove the attribute of a button that opens a new tab when clicked.
        // This is so that the page opens in the same window instead of a new tab.
        cy.get('#opentab').invoke('removeAttr','target').click()
        // so we get the open tab button
        // we invoke a function (from jQuery). This function is called removeAttr and you can read more about it in jQuery's docs.
        // https://api.jquery.com/removeAttr/
        // after that we click it and navigate to the href in the same tab.
        
        cy.url().should('include','https://www.rahulshettyacademy.com/')
        // to validate that you are on the page that you're supposed to be, you'll need to retrieve the URL. ^
        // navigating between pages in cypress: cy.go(direction, options)
        cy.go('back') //back, front, (1), (-1).
    
        })

    })
    

