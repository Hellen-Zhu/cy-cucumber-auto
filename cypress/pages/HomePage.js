const BasePage  = require('./BasePage');

class HomePage extends BasePage {
  constructor() { super(); }
  open() { this.navigate('/'); }
}

module.exports = HomePage;

