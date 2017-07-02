const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const { Character } = require('./character');
const { Party } = require('./party');
const { Game } = require('./game');

// Character Routes
router.get('/character', (req, res) => Character.get(null, res));
router.get('/character/:id', (req, res) => Character.get(req.params.id, res));
router.put('/character', jsonParser, (req, res) => Character.add(req.body, res));
router.post('/character', jsonParser, (req, res) => Character.update(req.body, res));
router.delete('/character/:id', (req, res) => Character.delete(req.params.id, res));

// Party Routes
router.get('/party', (req, res) => Party.get(res));
router.post('/party/:id', jsonParser, (req, res) => Party.add(req.params.id, res));
router.delete('/party/:id', (req, res) => Party.remove(req.params.id, res));

// Game Routes
router.get('/game', (req, res) => Game.load(res));
router.post('/game', jsonParser, (req, res) => Game.save(req.body, res));

module.exports = router;