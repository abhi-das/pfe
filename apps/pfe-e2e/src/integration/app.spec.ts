
describe('pfe', () => {
  beforeEach(() => {
    cy.fixture('transactions.json').as('transJSON');
    cy.request("https://test-demo-6dd40-default-rtdb.firebaseio.com/transactions.json").then(res => {
      expect(res.status).to.eq(200)
    });
  });

  it('should display welcome message', () => {

    cy.visit('/');
    cy.get(".transaction-item").should("have.length", 11)

  });
  it('should transfer money', () => {
    cy.get('#to-account').type('Ellit')
    cy.get('#amount').type('2500')
    cy.get('.btn-primary').click();
    cy.get('.background-brown-dark').click();
    cy.get(".transaction-item").should("have.length", 12)
  })

  it('should filter the history list by el letters', () => {
    cy.get('#transactions').type('el')
    cy.get(".transaction-item").should("have.length", 3)
  })

  it('should filter the history list by whole letters', () => {
    cy.get('#transactions').clear();
    cy.get('#transactions').type('whole')
    cy.get(".transaction-item").should("have.length", 1)
  })
});
