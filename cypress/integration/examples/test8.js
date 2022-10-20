/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
// Handling iframes
import 'cypress-iframe'

describe("iFrames and stuff", () => {
    it('My 8th test case', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //first, you need to know the frame id you are testing.

        cy.frameLoaded('#courses-iframe')

        cy.iframe().find("a[href*='mentorship']").eq(0).click()

        })
 
})
