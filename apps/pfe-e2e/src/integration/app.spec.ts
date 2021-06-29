
describe('pfe', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.visit('/');
    cy.contains('Frontend Technical Assignment')
  });
  it('should transfer money', () => {
    cy.get('#to-account').type('Ellit')
    cy.get('#amount').type('2500')
    cy.get('.btn-primary').click();
    cy.get('.background-brown-dark').click();
  })
});
