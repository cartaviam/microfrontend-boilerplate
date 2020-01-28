describe('App E2E', () => {
  it('should assert that true is equal to true', () => {
    expect(true).to.equal(true);
  });

  it('should have a header', () => {
    cy.visit('/');
    
    cy.get('h1')
      .should('have.text', 'Micro-Frontend Boilerplate');
  });

  it('should decrement the hotels', () => {
    cy.visit('/');
    
    cy.get('table tr')
      .should('have.length', 3);

    cy.get('table tr button').first().click()
    cy.get('table tr')
      .should('have.length', 2);
    
    cy.get('table tr button').first().click()
    cy.get('h2')
      .should('have.text', 'No hotels found');
  });
});