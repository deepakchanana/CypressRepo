describe('Dummy api test cases',()=>{

    const baseUrl='http://localhost:3000/APIBatchStudents';
    it('Get -fetch list of Posts ',()=>{
    cy.request(`${baseUrl}/posts`).then((response)=>{
    expect(response.status).to.eq(200);
    expect(response.body).to.have.length(100);
    cy.log(response.body);
    });
    });


    it('Post -Create a new record ',()=>{
        cy.request('POST',`${baseUrl}/posts`,
        {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }

        ).then((response)=>{
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
        });
    });


    
    it('Put -Update existing record ',()=>{
        cy.request('PUT',`${baseUrl}/posts/1`,
        {
            id:1,
            title: 'updated title',
            body: 'updated body',
            userId: 1,
        }

        ).then((response)=>{
        expect(response.status).to.eq(200);
        expect(response.body.title).to.eq('updated title');
        });
    });

    it('Delete - existing record ',()=>{
        cy.request('DELETE',`${baseUrl}/myy`
      
        ).then((response)=>{
        expect(response.status).to.eq(200);
        });
    });

})