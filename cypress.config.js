const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const dotenv = require('dotenv');
dotenv.config();
// Keep config independent of cypress-cloud plugin. Use CLI/Node API to run in cloud.

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    baseUrl: "http://novel.hctestedu.com",
    async setupNodeEvents(on, config) {
      // Merge .env into Cypress config.env
      config.env = {
        ...config.env,
        USERNAME: process.env.CYPRESS_USERNAME,
        PASSWORD: process.env.CYPRESS_PASSWORD,
      };
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
});

