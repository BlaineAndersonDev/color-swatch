const express = require('express');
const swatchRouter = express.Router();
const knex = require('../db/knex.js');
const moment = require('moment');
const errorWrapper = require('./errorWrapper.js');

// ======================================
// Get all swatches.
// ROUTE: GET `/api/swatches/`
swatchRouter.get('/', errorWrapper(async (req, res, next) => {
  // Knex database query.
  const readResults = await knex('swatches')
    .select('*')
    .orderBy('swatchId', 'asc')
    .catch((err) => { throw new Error(err) });

    // Log Object for debugging.
    // console.log(readResults)

    // Return HTTP status and JSON results object.
    return res.status(200).json({
      success: true,
      message: 'API returned list of all swatches',
      results: readResults
    });
}));

// ======================================
// Gets more Swatches wth higher Ids.
// ROUTE: POST `api/1.0/swatches/forward`
swatchRouter.get('/test', errorWrapper(async (req, res, next) => {
  const readResults = await knex('swatches')
    .where('swatchId', '>=', req.query.newTopSwatchId)
    .andWhere('swatchId', '<=', req.query.newBottomSwatchId)
    .select('*')
    .orderBy('swatchId', 'asc')
    .catch((err) => { throw new Error(err) });

  // Log Object for debugging.
  // console.log('TEST')
  // console.log(readResults)

  // Return HTTP status and JSON results object.
  return res.status(200).json({
    success: true,
    message: 'API returned list of all swatches',
    results: readResults
  });
}));

// // ======================================
// // Get individual Swatch.
// // ROUTE: GET `api/swatches/:swatchId`
// swatchRouter.get('/:swatchId', errorWrapper(async (req, res, next) => {
//   // Throw Error if body contains swatchId.
//   if (req.body.swatchId) { throw new Error('Request body cannot contain swatchId') };
//
//   // Knex database query.
//   const readResults = await knex('swatches')
//     .select('*')
//     .where({ swatchId: req.params.swatchId })
//     .catch((err) => { throw new Error(err) });
//
//   // Throw error if Swatch does not exist.
//   if (!readResults[0]) { throw new Error("Swatch with provided swatchId does not exist") };
//
//   // Return HTTP status and JSON results object.
//   return res.status(200).json({
//     success: true,
//     message: 'API returned Swatch with swatchId of ' + req.params.swatchId,
//     results: readResults[0]
//   });
// }));
//
// // ======================================
// // Create individual Swatch.
// // ROUTE: POST `api/swatches/`
// swatchRouter.post('/', errorWrapper(async (req, res, next) => {
//   // Throw Error if body contains swatchId.
//   if (req.body.swatchId) { throw new Error('Request body cannot contain swatchId') };
//
//   // Knex database query.
//   const createResults = await knex('swatches')
//     .insert({
//       gender: req.body.gender,
//       birthdate: req.body.birthdate,
//       firstName: req.body.firstName,
//       middleName: req.body.middleName,
//       lastName: req.body.lastName,
//       title: req.body.title,
//       preferredName: req.body.preferredName,
//       datingUppers: req.body.datingUppers,
//       datingDowners: req.body.datingDowners,
//       premium: req.body.premium,
//       profileCreated: req.body.profileCreated,
//       createdAt: moment(),
//       updatedAt: moment()
//     })
//     .returning('*')
//     .catch((err) => { throw new Error(err) });
//
//     // Return HTTP status and JSON results object.
//     return res.status(200).json({
//       success: true,
//       message: 'API returned newly created Swatch with swatchId of ' + createResults[0].swatchId,
//       results: createResults[0]
//     });
// }));
//
// // ======================================
// // Updates individual Swatch.
// // ROUTE: PUT `api/swatches/:swatchId`
// swatchRouter.put('/:swatchId', errorWrapper(async (req, res, next) => {
//   // Throw Error if body contains swatchId.
//   if (req.body.swatchId) { throw new Error('Request body cannot contain swatchId') };
//
//   // Knex database query.
//   const updateResults = await knex('swatches')
//     .where({ swatchId: req.params.swatchId })
//     .update({
//       gender: req.body.gender,
//       birthdate: req.body.birthdate,
//       firstName: req.body.firstName,
//       middleName: req.body.middleName,
//       lastName: req.body.lastName,
//       title: req.body.title,
//       preferredName: req.body.preferredName,
//       datingUppers: req.body.datingUppers,
//       datingDowners: req.body.datingDowners,
//       premium: req.body.premium,
//       profileCreated: req.body.profileCreated,
//       updatedAt: moment()
//     })
//     .returning('*')
//     .catch((err) => { throw new Error(err) });
//
//     // Throw error if Swatch does not exist.
//     if (!updateResults[0]) { throw new Error("Swatch with provided swatchId does not exist") };
//
//   // Return HTTP status and JSON results object.
//   return res.status(200).json({
//     success: true,
//     message: 'API returned newly updated Swatch with swatchId of ' + req.params.swatchId,
//     results: updateResults[0]
//   });
// }));
//
// // ======================================
// // Deletes individual Swatch.
// // ROUTE: DELETE `api/swatches/:swatchId`
// swatchRouter.delete('/:swatchId', errorWrapper(async (req, res, next) => {
//   // Knex database query.
//   const deleteResults = await knex('swatches')
//     .where({ swatchId: req.params.swatchId })
//     .del()
//     .returning('*')
//     .catch((err) => { throw new Error(err) });
//
//   // Throw error if Swatch does not exist.
//   if (!deleteResults[0]) { throw new Error("Swatch with provided swatchId does not exist") };
//
//   // Return HTTP status and JSON results object.
//   return res.status(200).json({
//     success: true,
//     message: 'API deleted Swatch with swatchId of ' + req.params.swatchId
//   });
// }));

// ======================================
module.exports = swatchRouter;
