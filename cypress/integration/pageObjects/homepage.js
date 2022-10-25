// The concept here is to grab elements of a webpage and throw them in a class
// You can then update this class accordingly in case the webpage changes
// (example: changing the UI or content of a button might break some test cases)
// therefore, store that piece of UI in a class and reference it in your tests.
// This will cause it to update everywhere automatically.

class HomePage {

    getEditBox() {
        return cy.get(':nth-child(1) > .form-control')
    }

    getTwoWayDataBinding() {
        return  cy.get(':nth-child(4) > .ng-untouched')
    }

    getGender() {
        return  cy.get('select')
    }

    getShopTab() {
        cy.get(':nth-child(2) > .nav-link').click()


    }
}

export default HomePage;