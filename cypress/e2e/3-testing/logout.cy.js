// describe('Logout functionality', () => {
//   it('User can log out with the logout button', () => {
//     cy.visit('/');
//     cy.get('button[data-auth="logout"]').click();
//     cy.url().should('include', 'http://localhost:63185/');
//     cy.get('button[data-auth="login"]').should('be.visible');
//   });
// });

////////

// describe('Logout functionality', () => {
//   it('User can log out with the logout button', () => {
//     // Besøker login-siden
//     cy.visit('/');

//     // Logg inn brukeren
//     cy.get('#loginForm input[name="email"]').type('validemail@example.com');
//     cy.get('#loginForm input[name="password"]').type('validpassword');
//     cy.get('#loginForm button[type="submit"]').click();

//     // Sørg for at brukeren er logget inn ved å sjekke at logout-knappen er synlig
//     cy.get('button[data-auth="logout"]').should('be.visible');

//     // Klikker på logout-knappen
//     cy.get('button[data-auth="logout"]').click();

//     // Verifiserer at brukeren er logget ut ved å sjekke URL-en og at login-knappen er synlig
//     cy.url().should('include', '/'); // Sjekker at vi er tilbake til roten av applikasjonen
//     cy.get('button[data-auth="login"]').should('be.visible');
//   });
// });

///////

// describe('Logout functionality', () => {
//   it('User can log out with the logout button', () => {
//     // Besøker login-siden med spesifikk URL
//     cy.visit('/');

//     // Logg inn brukeren
//     cy.get('#loginForm input[name="email"]').type('validemail@example.com');
//     cy.get('#loginForm input[name="password"]').type('validpassword');
//     cy.get('#loginForm button[type="submit"]').click();

//     // Sørg for at brukeren er logget inn ved å sjekke at logout-knappen er synlig
//     cy.get('button[data-auth="logout"]').should('be.visible');

//     // Klikker på logout-knappen
//     cy.get('button[data-auth="logout"]').click();

//     // Verifiserer at brukeren er logget ut ved å sjekke URL-en og at login-knappen er synlig
//     cy.url().should('include', 'http://localhost:63149/'); // Sjekker spesifikk URL
//     cy.get('button[data-auth="login"]').should('be.visible');
//   });
// });

//////

describe('Logout functionality', () => {
  it('User can log out with the logout button and token should be null', () => {
    // Besøker login-siden med spesifikk URL
    cy.visit('/');

    // Logg inn brukeren
    cy.get('#loginForm input[name="email"]').type('validemail@example.com');
    cy.get('#loginForm input[name="password"]').type('validpassword');
    cy.get('#loginForm button[type="submit"]').click();

    // Sørg for at brukeren er logget inn ved å sjekke at logout-knappen er synlig
    cy.get('button[data-auth="logout"]').should('be.visible');

    // Klikker på logout-knappen
    cy.get('button[data-auth="logout"]').click();

    // Verifiserer at brukeren er logget ut ved å sjekke URL-en og at login-knappen er synlig
    cy.url().should('include', 'http://localhost:63149/'); // Sjekker spesifikk URL
    cy.get('button[data-auth="login"]').should('be.visible');

    // Verifiserer at tokenet i localStorage er fjernet
    cy.window().then((win) => {
      expect(win.localStorage.getItem('token')).to.be.null;
    });
  });
});
