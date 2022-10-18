/// <reference types="Cypress" />

describe("My first test suite", () => {

    it('My first test case', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       
        //how to check & uncheck one check box
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        

        //how to check multiple checkboxes (select them using their type (css)) (+an assertion in the end)
        cy.get('input[type="checkbox"]').check(["option2", "option3"])

        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')

        //the above examples apply to static checkboxes. below is for dynamic checkboxes

        cy.get('#autocomplete').type('leb')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            if($el.text() === "Lebanon") {
                $el.trigger("click")
            } else {
                return
            }

        
        })

    })
})
