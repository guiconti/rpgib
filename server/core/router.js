const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const newCharacter = require('../controllers/newCharacter');
const newTerritory = require('../controllers/newTerritory');
const connectTerritories = require('../controllers/connectTerritories');

//  Temporary global players variable
testPlayer = {};
testMap = {};

router.use(bodyParser.json());

//  Character APIs
router.post('/character/new', newCharacter);

//  Territory APIs
router.post('/territory/new', newTerritory);
router.post('/territory/connect', connectTerritories);

module.exports = router;