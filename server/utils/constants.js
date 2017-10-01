/**
 * Module containing all constants used on the app
 * @module utils/constants
 */

module.exports = {
  message: {
    error: {
      INVALID_ID: {
        title: 'Invalid id',
        body: 'An id sent is not in UUID standard.'
      },
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
      INVALID_DISTANCE: {
        title: 'Invalid distance',
        body: 'The distance between the territories is invalid.'
      },
      ORIGIN_NOT_FOUND: {
        title: 'Origin territory does not exist',
        body: 'The origin id sent was not found in our database'
      },
      DESTINATION_NOT_FOUND: {
        title: 'Destination territory does not exist',
        body: 'The destination id sent was not found in our database'
      },
      UNEXPECTED_DATABASE: {
        title: 'Unexpected error',
        body: 'An error occurred while saving your information. Please try again later.'
      }
    },
    info: {
      CHARACTER_CREATED: 'Player created',
      TERRITORY_CREATED: 'Territory created',
      ADJACENT_ADDED: 'Territory connection created'
    }
  },
  values: {
    MIN_STAT_AMOUNT: 1,
    MAX_INITIAL_STAT_AMOUNT: 9,
    MAX_STRING_LENGTH: 256
  },
  regex: {
    UUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  }
};
