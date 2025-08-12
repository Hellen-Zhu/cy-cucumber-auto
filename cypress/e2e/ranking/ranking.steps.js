const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const { open, switchAndAssert } = require('../../flows/ranking.flow');

Given('I open the ranking page', () => { open(); });

When('I switch to ranking tab {string}', (tab) => { switchAndAssert(tab); });

Then('I should see ranking list items', () => { /* 已在 flow 中断言 */ });

