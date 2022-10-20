/// <reference types="Cypress" />

// Handling a table with contents inside it (using the each command)

describe("Tables & Sibling elements", () => {
    it('My 6th test case', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // sometimes, you have to manually write the css selector if it is not displayed
        // like in the case below when you want to select a specific index in a table
        // The css you'll get on the devtools would be the css for the entire table. You'll have
        // to specify if you want a specific entry in a table.
        // tr[1] won't work. Instead use:
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            // tr is the table and td is the sibling element (separated by a space)

            const text = $el.text()
            if (text.includes("Python")) {
                cy.get('tr td:nth-child(2)').eq(index).next().then( () => {})
                //thats how u navigate to the sibling element ^
            }

        })
 
        })
    })