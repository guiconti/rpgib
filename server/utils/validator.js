/**
 * Module containing all validator functions used in the app
 * @module utils/validator
 */

const _ = require('underscore');
const constants = require('./constants');

function isValidId(id) {
  try{
    return _.isString(id) && id.trim().length > 0 && id.trim().length <= constants.MAX_STRING_LENGTH && 
      constants.regex.UUID.test(id);
  } catch(err){
    logger.error(err);
    return false;
  }
}

function isValidName(name) {
  return _.isString(name) && name.trim().length > 0;
}

function isValidInitialStats(newCharacter) {
  if (!newCharacter){
    return false;
  }
  return isValidInitialStat(newCharacter.strength) && isValidInitialStat(newCharacter.agility) &&
    isValidInitialStat(newCharacter.dexterity) && isValidInitialStat(newCharacter.vitality) && 
    isValidInitialStat(newCharacter.intelligence) && isValidInitialStat(newCharacter.luck);
}

function isValidInitialStat(stat) {
  return _.isNumber(stat) && stat >= constants.values.MIN_STAT_AMOUNT 
    && stat <= constants.values.MAX_INITIAL_STAT_AMOUNT;
}

function isValidTerritorySize(territory) {
  if(!territory){
    return false;
  }
  return isPositiveInteger(territory.height) && isPositiveInteger(territory.width);
}

function isPositiveInteger(number){
  return _.isNumber(number) & number > 0 & number <= Number.MAX_SAFE_INTEGER;
}

module.exports = {
  isValidId: isValidId,
  isValidName: isValidName,
  isValidInitialStats: isValidInitialStats,
  isValidTerritorySize: isValidTerritorySize,
  isPositiveInteger: isPositiveInteger
};
