const LoginPage  = require('../pages/LoginPage');
const page = new LoginPage();

function login(username, password) {
  page.open();
  page.login(username, password);
}

function loginWithEnv() {
  const u = Cypress.env('USERNAME');
  const p = Cypress.env('PASSWORD');
  if (!u || !p) throw new Error('Missing USERNAME/PASSWORD in Cypress.env');
  login(u, p);
}

module.exports = { login, loginWithEnv };

