const { Before } = require('@badeball/cypress-cucumber-preprocessor');
const LoginPage = require('../../pages/LoginPage');

Before({ tags: '@auth' }, () => {
  const username = Cypress.env('USERNAME');
  const password = Cypress.env('PASSWORD');
  if (username && password) {
    const page = new LoginPage();
    page.open();
    page.login(username, password);
    cy.get('a[href*="/user/userinfo"]').first().should("contain", username);
  } else {
    cy.visit('/user/login.html');
  }
});

