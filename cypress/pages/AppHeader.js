class AppHeader {
  gotoHome() { cy.contains('a, button', '首页').click({ force: true }); }
  gotoAllWorks() { cy.contains('a, button', '全部作品').click({ force: true }); }
  gotoRanking() { cy.contains('a, button', '排行榜').click({ force: true }); }
  gotoRecharge() { cy.contains('a, button', '充值').click({ force: true }); }
  gotoAuthorZone() { cy.contains('a, button', '作家专区').click({ force: true }); }
  gotoBookshelf() { cy.contains('a, button', '我的书架').click({ force: true }); }
  logout() { cy.contains('a, button', '退出').click({ force: true }); }
}

module.exports = AppHeader;

