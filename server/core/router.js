const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const newCharacter = require('../controllers/newCharacter');

//  Temporary global players variable
testPlayer = {};

router.use(bodyParser.json());

//  Character APIs
router.post('/character/new', newCharacter);

module.exports = router;