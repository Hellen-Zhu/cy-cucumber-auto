const BasePage = require('./BasePage');
const AppHeader = require('./AppHeader');

class AuthorZonePage extends BasePage {
  constructor() {
    super();
    this.header = new AppHeader();
  }

  open() {
    this.header.gotoAuthorZone();
    cy.url().should('match', /author|writer|作家专区/i);
  }

  entryCards() { return cy.get('[class*="card"], [class*="panel"]').filter(':visible'); }
}

module.exports = AuthorZonePage;

