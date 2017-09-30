/**
 * Module containing all constants used on the app
 * @module utils/constants
 */

module.exports = {
  message: {
    error: {
      INVALID_NAME: {
        title: 'Invalid name',
        body: 'Your name have to be a not empty string.'
      },
      INVALID_STATS: {
        title: 'Invalid stats',
        body: 'Your stats surpass your points to start a character.'
      },
      INVALID_SIZE: {
        title: 'Invalid size',
        body: 'The territory height/width is invalid.'
      },
      UNEXPECTED_DATABASE: {
        title: 'Unexpected error',
        body: 'An error occurred while saving your information. Please try again later.'
      }
    },
    info: {
      CHARACTER_CREATED: 'Player created',
      TERRITORY_CREATED: 'Territory created'
    }
  },
  values: {
    MIN_STAT_AMOUNT: 1,
    MAX_INITIAL_STAT_AMOUNT: 9
  }
};
