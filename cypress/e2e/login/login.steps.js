const { Given, Then, defineParameterType } = require("@badeball/cypress-cucumber-preprocessor");
const LoginPage = require("../../pages/LoginPage");
const { loginWithEnv } = require("../../flows/auth.flow");
const loginPage = new LoginPage();

// Custom parameter type: env(NAME) -> Cypress.env(NAME)
defineParameterType({
  name: "env",
  regexp: /env\(([A-Za-z0-9_]+)\)/,
  transformer: (name) => Cypress.env(name),
});

Given("I open the login page", () => {
  loginPage.open();
});

Then("I should be on the login page", () => {
  cy.url().should("include", "/user/login.html");
});

// Login with env credentials
Given("I login with right auth", () => {
  loginWithEnv()
});

Then("I should be logged in as {env}", (username) => {
  cy.get('a[href*="/user/userinfo"]').first().should("contain", username);
});
