import AmazonSearchPage from '../support/PageObjects/AmazonSearchPage'


describe('First Test Case',()=>{

  
  beforeEach(()=>{

    AmazonSearchPage.visit();

  });
 
  it('should search for a Product and verify it',()=>{
      AmazonSearchPage.ProductSearch('Laptop'); 
      cy.get('.s-main-slot').should('exist');
      cy.get('.s-main-slot a.a-link-normal').first().invoke('removeAttr','href').click();
     
      cy.url().should('include','/dp/');
      cy.get('#Dell Inspiron 3530 Laptop').should('exist');
  
  });

 

});