const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor() {
    super();
    this.loginLink = 'a[href="/user/login.html"], a:contains("登录")';
    this.username = 'input[placeholder*="手机号码"]';
    this.password = 'input[placeholder*="密码"]';
    this.submit = 'input[id="btnLogin"]';
  }

  open() { this.navigate('/'); this.click(this.loginLink, { force: true }); this.waitForUrl('/user/login'); }
  fillUsername(v) { this.type(this.username, v); }
  fillPassword(v) { this.type(this.password, v); }
  submitForm() { this.click(this.submit); }
  login(u, p) { this.open(); this.fillUsername(u); this.fillPassword(p); this.submitForm(); }
}

module.exports = LoginPage;

