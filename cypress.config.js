const { config } = require('bluebird');
const { defineConfig } = require('cypress');


const mysql = require('mysql');
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error)
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}

module.exports = (on, config) => {
  // Usage: cy.task('queryDb', query)
  on('task', {
    queryDb: query => {
      return queryTestDb(query, config);
    },
  });
};


module.exports = defineConfig({

  video:true,
  videoCompression:32,
  videoUploadOnPasses:false,
  
  e2e: {
    setupNodeEvents(on, config) {
     require('cypress-mochawesome-reporter/plugin')(on)
    },
    specPattern:'cypress/E2E/*.cy.js'
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
   charts:true,
   reportPageTitle: 'Facebook functionality',
   embeddedScreenshots:true,
   inlineAssets:true
  },
});
