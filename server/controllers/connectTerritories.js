/**
 * Module to connect one territory to another
 * @module controllers/connectTerritories
 */

const _ = require('underscore');
const logger = require('../../tools/logger');
const validator = require('../utils/validator');
const constants = require('../utils/constants');
const database = require('../models/database');

/**
 * Connect territories
 *
 * @param {string} req.body.origin - Origin territory
 * @param {string} req.body.destination - Destination territory
 * @return {json} - Return the status and a json response message
 */
module.exports = (req, res) => {
  let body = _.pick(req.body, 'originId', 'destinationId', 'distance');
  if (!validator.isValidId(body.originId)){
    return res.status(400).json(constants.message.error.INVALID_ID);
  }
  if (!validator.isValidId(body.destinationId)){
    return res.status(400).json(constants.message.error.INVALID_ID);
  }
  if(!validator.isPositiveInteger(parseInt(body.distance))){
    return res.status(400).json(constants.message.error.INVALID_DISTANCE);
  }
  body.distance = parseInt(body.distance);

  database.territory.findById(body.originId)
    .then((territoryToAddAdjacent) => {
      if (!territoryToAddAdjacent){
        return res.status(400).json(constants.message.error.ORIGIN_NOT_FOUND);
      }
      return territoryToAddAdjacent.addAdjacent(body.destinationId, {through:{distance:body.distance}})
        .then(() => {
          return res.status(200).json({msg: constants.message.info.ADJACENT_ADDED});
        })
        .catch(database.Sequelize.ForeignKeyConstraintError, () => {
          return res.status(400).json(constants.message.error.DESTINATION_NOT_FOUND);
        })
        .catch((err) => {
          console.log(err);
          logger.error(err);
          return res.status(500).json(constants.message.error.UNEXPECTED_DATABASE);
        });
    })
    .catch((err) => {
      logger.error(err);
      return res.status(500).json(constants.message.error.UNEXPECTED_DATABASE);
    });
};
