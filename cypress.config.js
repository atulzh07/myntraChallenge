const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      baseUrl: 'https://www.snapdeal.com/search?clickSrc=top_searches&keyword=tshirt&categoryId=0&vertical=p&noOfResults=20&SRPID=topsearch&sort=rlvncy'
    },  
    browsers: [
      {
        name: "chrome",
        channel: "stable",
        family: "chromium",
        displayName: 'chrome',
        version: '116.0.5845.96',
        path: '/Applications/Chrome.app/Contents/MacOS/Google Chrome',
        majorVersion: 116
      },
      {
        name: 'electron',
        channel: 'stable',
        family: 'chromium',
        displayName: 'Electron',
        version: '114.0.5735.289',
        path: '',
        majorVersion: 114,
      }
    ],
    specPattern: 'cypress/e2e/*.js',
    watchForFileChanges: false,
    chromeWebSecurity: false
  },
});