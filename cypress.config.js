const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const { cloudPlugin } = require('cypress-cloud/plugin');
const dotenv = require('dotenv');
dotenv.config();

const {environmentsConfig, defaultCypressConfig} = require('./cypress/config');

module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    async setupNodeEvents(on, config) {
      const envName = process.env.TEST_ENV || 'dev';
      const envCfg = environmentsConfig.getEnvConfig(envName); 

      const newConfig = {
        ...config,
        ...(defaultCypressConfig || {}),
        ...(envCfg || {}),
        env: {
          ...config.env,
          ...((defaultCypressConfig && defaultCypressConfig.env) || {}),
          ...((envCfg && envCfg.env) || {}),
          TEST_ENV: envName,
          USERNAME: process.env.CYPRESS_USERNAME,
          PASSWORD: process.env.CYPRESS_PASSWORD,
        },
      };

      await addCucumberPreprocessorPlugin(on, newConfig);
      on('file:preprocessor', createBundler({ plugins: [createEsbuildPlugin(newConfig)] }));

      return await cloudPlugin(on, newConfig);
    },
  },
});