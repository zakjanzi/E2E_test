describe('Post Resource', () => {
    it('Creating a New Post', () => {
      cy.visit('/posts/new') // 1.
  
      cy.get('input.post-title') // 2.
        .type('My First Post') // 3.
  
      cy.get('input.post-body') // 4.
        .type('Hello, world!') // 5.
  
      cy.contains('Submit') // 6.
        .click() // 7.
  
      cy.get('h1') // 8.
        .should('contain', 'My First Post')
    })
  })


//This is basically saying:

// 1. Visit page at /posts/new.
// 2. Find the <input> with class post-title.
// 3. Type "My First Post" into it.
// 4. Find the <input> with class post-body.
// 5. Type "Hello, world!" into it.
// 6. Find the element containing the text Submit.
// 7. Click it.
// 8. Find the h1 tag, ensure it contains the text "My First Post".

//Cypress uses aliases. You can't store cy commands in a const. (otherwise you'll have to manually resolve the promise)



before(() => {
  // root-level hook
  // runs once before all tests
})

beforeEach(() => {
  // root-level hook
  // runs before every test block
})

afterEach(() => {
  // runs after each test block
})

after(() => {
  // runs once all tests are done
})

describe('Hooks', () => {
  before(() => {
    // runs once before all tests in the block
  })

  beforeEach(() => {
    // runs before each test in the block
  })

  afterEach(() => {
    // runs after each test in the block
  })

  after(() => {
    // runs once after all tests in the block
  })
})


// The order of hook and test execution is as follows:
// All before() hooks run (once)
// Any beforeEach() hooks run
// Tests run
// Any afterEach() hooks run
// All after() hooks run (once)



// Cypress gives you a feature that allows u to get data from an external source and drive them into your test
// You can find this in 'Fixtures' folder.



// validating:

// for all behaviors, use 'be. ...'
// for all properties, use 'should.have' ...
cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')
// the above is an example that combines both a behavior and property.


// Environment variables in Cypress.

// env vars are basically variables that you can access globally in your tests.
// An example would be to make the URL you are testing on an environment variable.

// add the URL in the cypress.json file then use it in your test: cy.visit(Cypress.env('url'))
// The above will work as your base URL. you can visit other sections on the website by concatenating the path 
// example: 'url' + '/shop'.
