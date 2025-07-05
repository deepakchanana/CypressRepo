describe('Amazon Search Test', () => {
  it('searches for a product', () => {
    cy.visit('https://www.amazon.com');
    cy.get('#twotabsearchtextbox').type('laptop{enter}');
    cy.url().should('include', 'k=laptop');
    cy.get('.s-main-slot').should('exist');
  });
});