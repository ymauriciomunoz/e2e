const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  chromeWebSecurity: false,
  reporter:'cypress-mochawesome-reporter',
  e2e: {
    retries: {runMode:2, openMode:0},
    baseUrl:'https://www.saucedemo.com/',
    env:{
      apiUrl:"https://api.demoblaze.com/",
      requestMode:true
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    experimentalModifyObstructiveThirdPartyCode: true,
    video: true, 
    videosFolder: 'cypress/videos', 
    screenshotOnRunFailure: false, 
  },
});
