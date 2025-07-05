Cypress.Commands.add('SearchFunctionalityOnAmazon',(SearchItem)=>{

    cy.visit('https://www.amazon.com');
    cy.get('#twotabsearchtextbox').type(`${SearchItem}{enter}`)

})