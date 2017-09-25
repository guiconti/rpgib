/**
 * Module to create a new game character
 * @module controllers/newCharacter
 */

const _ = require('underscore');
const validator = require('../utils/validator');
const constants = require('../utils/constants');
const Player = require('../models/Player');

/**
 * Create a new character
 *
 * @param {string} req.body.name - Character name
 * @return {json} - Return the status and a json response message
 */
module.exports = (req, res) => {
  let body = _.pick(req.body, 'name');
  if (!validator.isValidName(body.name)){
    return res.status(400).json(constants.message.error.INVALID_NAME);
  }
  body.name = body.name.trim();
  let newPlayer = Player(body.name);
  //  Temporary
  testPlayer = newPlayer;
  return res.status(200).json({
    message: constants.message.info.CHARACTER_CREATED
  });
};
