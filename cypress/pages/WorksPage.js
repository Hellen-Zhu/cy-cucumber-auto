const BasePage = require('./BasePage');
const AppHeader = require('./AppHeader');

class AllWorksPage extends BasePage {
  constructor() {
    super();
    this.header = new AppHeader();
  }

  open() {
    this.header.gotoAllWorks();
    cy.url().should('match', /book|works|all|全部作品/i);
  }

  channel(gender) { return cy.contains(new RegExp(gender, 'i')).filter('a,button,span').first(); }

  filterGroup(label) { return cy.contains(new RegExp(label, 'i')).parents('dl,div,section').first(); }

  pickFilter(groupLabel, optionText) {
    this.filterGroup(groupLabel).within(() => cy.contains(new RegExp(optionText, 'i')).click({ force: true }));
  }

  list() { return cy.get('table tbody tr, .book-list .item, .works-list .item'); }

  sortBy(text) { cy.contains(/排序|Sort|Order|排序方式/i).parents('dl,div').first().contains(new RegExp(text,'i')).click({force:true}); }
}

module.exports = AllWorksPage;

