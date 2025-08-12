// cypress/config/environmentsConfig.js
const environmentsConfig = Object.freeze({
    dev: {
      region: 'DEV',
      baseUrl: "http://hmshop-test.itheima.net",
      timezone: 'Asia/Shanghai',
    },
    uat: {
      region: 'UAT',
      baseUrl: "http://novel.hctestedu.com",
      timezone: 'Asia/Hong_Kong',
      
    }
  });
  
  function getEnvConfig(env) {
    if (Object.prototype.hasOwnProperty.call(environmentsConfig, env)) {
      console.log(`Test environment: ${env} (${environmentsConfig[env].region})`);
      return environmentsConfig[env];
    }
    throw new Error(
      `Environment "${env}" is not supported. Supported: ${Object.keys(environmentsConfig).join(', ')}`
    );
  }
  
  module.exports = { getEnvConfig };