const BasePage = require('./BasePage');

class RegisterPage extends BasePage {
  constructor() {
    super();
    this.url = '/user/register.html';
    this.phone = 'input[name="mobile"], input#mobile, input[type="tel"], input[placeholder*="手机"]';
    this.password = 'input[name="password"], input#password, input[type="password"]';
    this.confirm = 'input[name="repassword"], input#repassword, input[type="password"]';
    this.agree = 'input[type="checkbox"]';
    this.submit = 'button[type="submit"], input[type="submit"], .register-btn';
  }

  open() { this.navigate(this.url); this.waitForUrl('/user/register'); }
  fillPhone(v) { this.type(this.phone, v); }
  fillPassword(v) { this.type(this.password, v); }
  fillConfirm(v) { this.type(this.confirm, v); }
  agreeTerms() { this.click(this.agree, { force: true }); }
  submitForm() { this.click(this.submit); }
}

module.exports = RegisterPage;

