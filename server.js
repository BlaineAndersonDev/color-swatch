// =====================================
// Base Imports ========================
// =====================================
// Allows use of backend routing.
// https://expressjs.com/
const express = require('express');
// Path allows our Server to find build files stored in our frontend.
// https://nodejs.org/api/path.html
const path = require('path');
// Date & Time Parser / Manipulator / Validator.
// https://momentjs.com/
const moment = require('moment');
// Takes a swagger JSON document and sets up express HTTP routes bound to middleware functions.
// https://github.com/scottie1984/swagger-express-router
const cors = require('cors');
// Helmet helps you secure your Express apps by setting various HTTP headers.
// https://helmetjs.github.io/
const helmet = require('helmet')
// HTTP request logger
// https://github.com/expressjs/morgan
if (process.env.NODE_ENV === 'development') {
  const morgan = require('morgan')
}

// =====================================
// Initial Setup =======================
// =====================================
// Initialize the 'app' using 'express'.
const app = express();
// Use the provided PORT if it exists else default to PORT 5000.
const port = process.env.PORT || 5000;
// Tells the App to use the CORS package which allows the transfer of information over insecure connections.
app.use(cors());
// Prints the entire environment build in the console. Uncomment to display.
// console.log(process.env);
// Allows the app to parse 'application/json' request bodies.
app.use(express.json());
// Allows the app to parse 'x-ww-form-urlencoded' request bodies.
app.use(express.urlencoded({ extended: false }));
// Tells the app to use files in the Client's 'build' folder when rendering static pages (production pages).
app.use(express.static(path.join(__dirname, 'client/build')));
// Logs all HTTP actions to the console (Only runs in 'development').
if (process.env.NODE_ENV === 'development') {
  app.use(morgan(':method :url {HTTP Status: :status} {Content Length: :res[content-length]} {Response Time: :response-time ms}'))
}
// Increase App API security by setting Headers using Helemt.
app.use(helmet())

// =====================================
// Router Setup ========================
// =====================================
// The app will use the required files below to generate API routes that allows the frontend to use HTTP calls (Axios) to retrieve data from the predetermined end points.
  // NOTE: Partners, Events, ect. are not listed in this section on purpose. See usersController.js for more details.
app.use('/api/1.0/swatches', require('./controllers/swatchController.js'));

// =====================================
// Database Setup ======================
// =====================================
// Activates our database detection and creation in db.js.
const knex = require('./db/knex.js');

// =====================================
// Error Handling ======================
// =====================================
// Gets called because of `errorWrapper.js` in the controllers directory.
// End all function for all errors.
app.use(function(err, req, res, next) {
  // Example of specific error handling. Currently unused.
    // if (error instanceof ReferenceError) {}
  if (process.env.NODE_ENV === 'production') {
    res.status(500)
  } else {
    if (!err.name) {
      res.status(500).json({
        success: false,
        name: 'Blank Error',
        message: 'If this error is displayed, then you likely used `next()` without specifiying anything.'
      });
    } else {
      // Check for test ENV. If true then output only JSON.
      if (process.env.NODE_ENV === 'test') {
        res.status(500).json({
          success: false,
          name: err.name,
          message: err.message
        });
      } else {
        console.log('=================================');
        console.log('========= ERROR RESULTS =========');
        console.log('---------------------------------');
        console.log(err.name);
        console.log(err.message);
        console.log('=================================');
        // console.log(err.stack);
        res.status(500).json({
          success: false,
          name: err.name,
          message: err.message
        });
      };
    };
  };
});

// =====================================
// Final Steps =========================
// =====================================
// Tells the app what port to listen on and the NODE_ENV. Upon listening it will display a console log. Upon close it will close and exit the server process.
app.listen(port, () => console.log('swatch Server is listening on port ' + port + ' | NODE_ENV: ' + process.env.NODE_ENV));
// Exports the `app` to be used elsewhere in the project.
module.exports = app
