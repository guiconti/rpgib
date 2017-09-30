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
  let body = _.pick(req.body, 'origin', 'destination', 'distance');
  if (!validator.isValidName(body.origin)){
    return res.status(400).json(constants.message.error.INVALID_NAME);
  }
  if (!validator.isValidName(body.destination)){
    return res.status(400).json(constants.message.error.INVALID_NAME);
  }
  if(!validator.isPositiveInteger(body.distance)){
    return res.status(400).json(constants.message.error.INVALID_DISTANCE);
  }
  body.name = body.name.trim();
  let newTerritory = database.territory.build(body);
  newTerritory
    .save()
    .then((createdTerritory) => {
      testMap = body;
      return res.status(200).json({
        msg: constants.message.info.TERRITORY_CREATED
      });
    })
    .catch((err) => {
      logger.error(err);
      return res.status(500).json(constants.message.error.UNEXPECTED_DATABASE);
    });
};
