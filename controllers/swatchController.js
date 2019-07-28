const express = require('express');
const swatchRouter = express.Router();
const knex = require('../db/knex.js');
const moment = require('moment');
const errorWrapper = require('./errorWrapper.js');

// ======================================
// Get all Swatchs.
// ROUTE: GET `/api/swatchs/`
swatchRouter.get('/', errorWrapper(async (req, res, next) => {
  // Knex database query.
  const readResults = await knex('swatchs')
    .select('*')
    .orderBy('swatchId', 'asc')
    .catch((err) => { throw new Error(err) });

    // Return HTTP status and JSON results object.
    return res.status(200).json({
      success: true,
      message: 'API returned list of all Swatchs',
      results: readResults
    });
}));

// ======================================
// Get individual Swatch.
// ROUTE: GET `api/swatchs/:swatchId`
swatchRouter.get('/:swatchId', errorWrapper(async (req, res, next) => {
  // Throw Error if body contains swatchId.
  if (req.body.swatchId) { throw new Error('Request body cannot contain swatchId') };

  // Knex database query.
  const readResults = await knex('swatchs')
    .select('*')
    .where({ swatchId: req.params.swatchId })
    .catch((err) => { throw new Error(err) });

  // Throw error if Swatch does not exist.
  if (!readResults[0]) { throw new Error("Swatch with provided swatchId does not exist") };

  // Return HTTP status and JSON results object.
  return res.status(200).json({
    success: true,
    message: 'API returned Swatch with swatchId of ' + req.params.swatchId,
    results: readResults[0]
  });
}));

// ======================================
// Create individual Swatch.
// ROUTE: POST `api/swatchs/`
swatchRouter.post('/', errorWrapper(async (req, res, next) => {
  // Throw Error if body contains swatchId.
  if (req.body.swatchId) { throw new Error('Request body cannot contain swatchId') };

  // Knex database query.
  const createResults = await knex('swatchs')
    .insert({
      gender: req.body.gender,
      birthdate: req.body.birthdate,
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      title: req.body.title,
      preferredName: req.body.preferredName,
      datingUppers: req.body.datingUppers,
      datingDowners: req.body.datingDowners,
      premium: req.body.premium,
      profileCreated: req.body.profileCreated,
      createdAt: moment(),
      updatedAt: moment()
    })
    .returning('*')
    .catch((err) => { throw new Error(err) });

    // Return HTTP status and JSON results object.
    return res.status(200).json({
      success: true,
      message: 'API returned newly created Swatch with swatchId of ' + createResults[0].swatchId,
      results: createResults[0]
    });
}));

// ======================================
// Updates individual Swatch.
// ROUTE: PUT `api/swatchs/:swatchId`
swatchRouter.put('/:swatchId', errorWrapper(async (req, res, next) => {
  // Throw Error if body contains swatchId.
  if (req.body.swatchId) { throw new Error('Request body cannot contain swatchId') };

  // Knex database query.
  const updateResults = await knex('swatchs')
    .where({ swatchId: req.params.swatchId })
    .update({
      gender: req.body.gender,
      birthdate: req.body.birthdate,
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      title: req.body.title,
      preferredName: req.body.preferredName,
      datingUppers: req.body.datingUppers,
      datingDowners: req.body.datingDowners,
      premium: req.body.premium,
      profileCreated: req.body.profileCreated,
      updatedAt: moment()
    })
    .returning('*')
    .catch((err) => { throw new Error(err) });

    // Throw error if Swatch does not exist.
    if (!updateResults[0]) { throw new Error("Swatch with provided swatchId does not exist") };

  // Return HTTP status and JSON results object.
  return res.status(200).json({
    success: true,
    message: 'API returned newly updated Swatch with swatchId of ' + req.params.swatchId,
    results: updateResults[0]
  });
}));

// ======================================
// Deletes individual Swatch.
// ROUTE: DELETE `api/swatchs/:swatchId`
swatchRouter.delete('/:swatchId', errorWrapper(async (req, res, next) => {
  // Knex database query.
  const deleteResults = await knex('swatchs')
    .where({ swatchId: req.params.swatchId })
    .del()
    .returning('*')
    .catch((err) => { throw new Error(err) });

  // Throw error if Swatch does not exist.
  if (!deleteResults[0]) { throw new Error("Swatch with provided swatchId does not exist") };

  // Return HTTP status and JSON results object.
  return res.status(200).json({
    success: true,
    message: 'API deleted Swatch with swatchId of ' + req.params.swatchId
  });
}));

// ======================================
// Passing onto child routers ===========
// ======================================
// This allows the swatchsRouter to send requests involving Partners to the partner Controller along with all the required information (i.e. params, body, etc).
  // NOTE: We require the param of 'swatchId' in this function, and it will not be passed as a param to any functions in the following router (i.e. the partnersController).
  // This means we will have to send it manually as it's own variable. (i.e. req.swatchId).
// --------------------------------------
swatchRouter.use('/:swatchId/partners', function(req, res, next) {
  // Throw Error if params do not contain swatchId.
  if (!req.params.swatchId) { throw new Error('Request params missing swatchId'); };
  // Set swatchId into req directly as it will not be passed as a param.
  req.swatchId = req.params.swatchId;
  // Continue onto the specified partnersController.js route.
  next()
}, partnersController);

swatchRouter.use('/:swatchId/logins', function(req, res, next) {
  // Throw Error if params do not contain swatchId.
  if (!req.params.swatchId) { throw new Error('Request params missing swatchId'); };
  // Set swatchId into req directly as it will not be passed as a param.
  req.swatchId = req.params.swatchId;
  // Continue onto the specified loginsController.js route.
  next()
}, loginsController);

swatchRouter.use('/:swatchId/surveys', function(req, res, next) {
  // Throw Error if params do not contain swatchId.
  if (!req.params.swatchId) { throw new Error('Request params missing swatchId'); };
  // Set swatchId into req directly as it will not be passed as a param.
  req.swatchId = req.params.swatchId;
  // Continue onto the specified loginsController.js route.
  next()
}, surveysController);

swatchRouter.use('/:swatchId/journals', function(req, res, next) {
  // Throw Error if params do not contain swatchId.
  if (!req.params.swatchId) { throw new Error('Request params missing swatchId'); };
  // Set swatchId into req directly as it will not be passed as a param.
  req.swatchId = req.params.swatchId;
  // Continue onto the specified loginsController.js route.
  next()
}, journalsController);

// ======================================
// ROUTING EXCEPTIONS ===================
// ======================================
// Routes here cannot be properly fitted into the normal ExpressJS CRUD routing flow due to routing restraints and must be run from swatchs instead.
// --------------------------------------
// Route Reason: As all other events routes are child routes of partners, and this route explicitly does not require a partnerId, it has to be run from swatchs directly.
// Get all Events of swatchId.
// ROUTE: GET `api/swatchs/:swatchId/events/`
swatchRouter.get('/:swatchId/events', errorWrapper(async (req, res, next) => {
  // Throw Error if params do not contain swatchId.
  if (!req.params.swatchId) { throw new Error('Request params missing swatchId'); };
  // Throw Error if body contains swatchId.
  if (req.body.swatchId) { throw new Error('Request body cannot contain swatchId') };
  // Throw Error if body contains eventId.
  if (req.body.eventId) { throw new Error('Request body cannot contain eventId') };

  // Knex database query.
  const readResults = await knex('events')
    .select('*')
    .where({ swatchId: req.params.swatchId })
    .orderBy('eventId', 'asc')
    .catch((err) => { throw new Error(err) });

    // Return HTTP status and JSON results object.
    return res.status(200).json({
      success: true,
      message: 'API returned list of all Events for swatchId ' + req.params.swatchId,
      results: readResults
    });
}));

// ======================================
module.exports = swatchRouter;
