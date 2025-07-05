import 'cypress-mochawesome-reporter/register'

describe("Facebook functionality",()=>{

  it("Facebook first testcase",()=>{
   
    cy.visit('https://www.google.com');
    cy.screenshot('google search functionality');

  })

})