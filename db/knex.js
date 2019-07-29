const config = require('../knexfile.js');
const knex = require('knex')(config[process.env.NODE_ENV] || config['development']);

// const knexSetup = async () => {
//   // Everytime the server is started, this will run knex migrate:latest to ensure that our DB is up to date.
//         if (process.env.NODE_ENV != 'development') {
//           console.log('>>> Production Environment Detected: Running `knex migrate:latest`.')
//           await knex.migrate.latest('production')
//           console.log('>>> Migrations Complete.')
//         }
//       }

// Uncomment & use when initially getting knex working on heroku.
// DO NOT USE IN REAL PRODUCTION EVER!!!
      const knexSetup = async () => {
        // Setup Knex if run in Heroku.
        if (process.env.NODE_ENV != 'development') {
          console.log('>>> Production Environment Detected: Running `knex migrate:rollback`, `knex migrate:latest` & `knex seed:run`.')
          await knex.migrate.rollback('production')
          console.log('>>> Rollback Complete.')
          await knex.migrate.latest('production')
          console.log('>>> Migrations Complete.')
          await knex.seed.run('production')
          console.log('>>> Seed Complete.')
        }
      }

// This log just let's us know Knex started properly.
// const knexSetup = async () => { console.log('Knex Database Connected...') };


knexSetup();

module.exports = knex;
