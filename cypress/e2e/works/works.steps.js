const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const  WorksPage  = require("../../pages/WorksPage");

const works = new WorksPage();

Given('I open the all works page', () => {
  works.open();
});

When('I pick channel {string}', (channel) => {
  works.channel(channel).click({ force: true });
});

When('I pick category {string}', (category) => {
  works.pickFilter('作品分类', category);
});

When('I pick completion {string}', (status) => {
  works.pickFilter('是否完结', status);
});

When('I sort by {string}', (sort) => {
  works.sortBy(sort);
});

When('I apply works filters from fixture {string}', (fixtureName) => {
  cy.fixture(fixtureName).then((data) => {
    if (data.channel) works.channel(data.channel).click({ force: true });
    if (data.category) works.pickFilter('作品分类', data.category);
    if (data.completion) works.pickFilter('是否完结', data.completion);
    if (data.sort) works.sortBy(data.sort);
  });
});

Then('I should see works list not empty', () => {
  works.list().its('length').should('be.gt', 0);
});

