const { Given, Then } = require('@badeball/cypress-cucumber-preprocessor');
const RegisterPage = require('../../pages/RegisterPage');

const registerPage = new RegisterPage();

Given('I open the register page', () => {
  registerPage.open();
});

Then('I should be on the register page', () => {
  cy.url().should('include', 'register');
});

