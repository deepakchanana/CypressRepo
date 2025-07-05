describe('API test cases using cypress',()=>{

    const baseUrl='https://reqres.in/api/users';
   it('First test case of API-->Get Method ',()=>{

    cy.request(`https://reqres.in/api/users?page=2`).then((response)=>{
        expect(response.status).to.eq(200);    // assertion1
        cy.log(response.body);
        });
   });

   it('Post -Create a new record ',()=>{
    cy.request('POST',`${baseUrl}`,
    {
        name: 'dc',
        job : 'manager'
    }

    ).then((response)=>{
    expect(response.status).to.eq(201);
    expect(response.body).to.have.property('id');
    });
});


})