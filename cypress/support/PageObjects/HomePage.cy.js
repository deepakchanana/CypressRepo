class HomePage
{
    postingMessage(message)
    {
        cy.get('LocateStartPost').click();
        cy.get('Locate').type(message);
        cy.get('Locate').click();
    }
}