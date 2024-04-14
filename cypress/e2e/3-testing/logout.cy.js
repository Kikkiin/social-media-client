describe('Logout functionality', () => {
  it('User can log out with the logout button', () => {
    cy.visit('../../index.html');
    cy.get('button[data-auth="logout"]').click();
    cy.url().should('include', 'http://localhost:63185/');
    cy.get('button[data-auth="login"]').should('be.visible');
  });
});
