/**
 * Module to create a new game Map
 * @module controllers/newTerritory
 */

const _ = require('underscore');
const logger = require('../../tools/logger');
const validator = require('../utils/validator');
const constants = require('../utils/constants');
const database = require('../models/database');

/**
 * Create a new map
 *
 * @param {string} req.body.name - Territory name
 * @return {json} - Return the status and a json response message
 */
module.exports = (req, res) => {
  let body = _.pick(req.body, 'name', 'height', 'width');
  if (!validator.isValidName(body.name)){
    return res.status(400).json(constants.message.error.INVALID_NAME);
  }
  if(!validator.isValidTerritorySize(body)){
    return res.status(400).json(constants.message.error.INVALID_SIZE);
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
