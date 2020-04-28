var express = require('express');
var router = express.Router();

const messages = require('../db/messages.json');

router.get(`/all`, (req, res) => {
    res.status(200).send(messages)
});

router.get(`/random`, (req, res) => {
    res.status(200).send(messages[Math.floor(Math.random()*10)])
});

router.get(`/:id`, (req, res) => {
    res.status(200).send(messages[req.params.id])
});

module.exports = router;