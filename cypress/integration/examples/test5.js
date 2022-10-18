/// <reference types="Cypress" />

describe("My first test suite", () => {
    it('My first test case', () => {
        cy.visit("http://qaclickacademy.com/practice.php")
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

        })

    })
    

