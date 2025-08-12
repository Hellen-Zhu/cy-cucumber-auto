const RankingPage = require('../pages/RankingPage');

const page = new RankingPage();

function open() {
  page.open();
  page.assertReady();
}

function switchAndAssert(tabText) {
  page.switchTab(tabText);
  page.getRows().its('length').should('be.gt', 0);
}

module.exports = { open, switchAndAssert };

