class AmazonSearchPage {

    visit()
    {
        cy.visit('https://www.amazon.in/');
    }
    ProductSearch(Query)
    {
     cy.get('#twotabsearchtextbox').type(Query).type('{enter}');
    }

}
export default new AmazonSearchPage();