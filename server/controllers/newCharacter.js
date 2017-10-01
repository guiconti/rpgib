/**
 * Module to create a new game character
 * @module controllers/newCharacter
 */

const _ = require('underscore');
const logger = require('../../tools/logger');
const validator = require('../utils/validator');
const constants = require('../utils/constants');
const database = require('../models/database');
/**
 * Create a new character
 *
 * @param {string} req.body.name - Character name
 * @return {json} - Return the status and a json response message
 */
module.exports = (req, res) => {
  let body = _.pick(req.body, 'name', 'strength', 'agility', 'dexterity', 
    'vitality', 'intelligence', 'luck');
  if (!validator.isValidName(body.name)){
    return res.status(400).json(constants.message.error.INVALID_NAME);
  }
  if(!validator.isValidInitialStats(body)){
    return res.status(400).json(constants.message.error.INVALID_STATS);
  }
  body.name = body.name.trim();
  let newCharacter = database.character.build(body);
  newCharacter
    .save()
    .then((createdCharacter) => {
      testPlayer = body;
      return res.status(200).json({
        msg: constants.message.info.CHARACTER_CREATED
      });
    })
    .catch((err) => {
      logger.error(err);
      return res.status(500).json(constants.message.error.UNEXPECTED_DATABASE);
    });
};
