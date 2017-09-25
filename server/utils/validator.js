/**
 * Module containing all validator functions used in the app
 * @module utils/validator
 */

const _ = require('underscore');

function isValidName(name) {
  return _.isString(name) && name.trim().length > 0;
}

module.exports = {
  isValidName: isValidName
};
