class BasePage {
  constructor() {}

  // Navigation
  navigate(url, options = {}) { cy.visit(url, options); }
  waitForPageLoad(state = 'load') { cy.document().its('readyState').should('eq', 'complete'); }
  waitForUrl(pattern) { cy.url().should('match', pattern instanceof RegExp ? pattern : new RegExp(pattern)); }

  // Element interactions
  click(selector, options = {}) { cy.get(selector).filter(':visible').first().click(options); }
  type(selector, text) { cy.get(selector).filter(':visible').first().clear().type(text); }
  assertVisible(selector) { cy.get(selector).filter(':visible').first().should('be.visible'); }
  get(selector) { return cy.get(selector); }

  // Network helpers
  routeRequest(method = 'GET', url = '**/*', alias = 'req') { cy.intercept(method, url).as(alias); return alias; }
  waitForResponse(alias = 'req', timeoutMs = 10000) { return cy.wait(`@${alias}`, { timeout: timeoutMs }); }

  // Error guard for flows
  async handle(actionName, fn) {
    try { await fn(); } catch (err) { throw new Error(`${actionName} failed: ${err.message || err}`); }
  }
}

module.exports = BasePage;

