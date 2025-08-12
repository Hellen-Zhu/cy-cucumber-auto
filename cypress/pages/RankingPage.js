const BasePage = require('./BasePage');

class RankingPage extends BasePage {
  constructor() {
    super();
    this.title = '#rankName, .book_tit h3';
    this.rows = '#bookRankList tr';
  }

  open() {
    this.navigate('/');
    cy.contains('a,button,li,span', /排行榜|排行|Rank/i).first().click({ force: true });
    this.waitForUrl(/rank|榜|list/i);
  }

  switchTab(text) {
    cy.contains('a,button,li,span', new RegExp(`^\\s*${text}\\s*$`, 'i')).first().click({ force: true });
  }

  assertReady() { this.assertVisible(this.title); }
  getRows() { return this.get(this.rows); }
}

module.exports = RankingPage;

