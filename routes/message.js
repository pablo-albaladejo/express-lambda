var express = require('express');
var router = express.Router();

const messages = require('../db/messages.json');
/**
 * @swagger
 * /message/all:
 *   get:
 *     tags:
 *       - message
 *     summary: Serves the message list
 *     description: Serves the message list
 *     responses:
 *       200:
 *         description: Successful operation
 *         schema:
 *           type: array
 *           items:
 *             $ref: "#/definitions/message"
 */
router.get(`/all`, (req, res) => {
    res.status(200).send(messages)
});

/**
 * @swagger
 * /message/random:
 *   get:
 *     tags:
 *       - message
 *     summary: Serves a random message
 *     description: Serves a random message
 *     responses:
 *       200:
 *         description: Successful operation
 *         schema:
 *           $ref: "#/definitions/message"
 *             
 */
router.get(`/random`, (req, res) => {
    res.status(200).send(messages[Math.floor(Math.random() * 10)])
});

/**
 * @swagger
 * /message/{id}:
 *   get:
 *     tags:
 *       - message
 *     summary: Serves a message
 *     description: Serves a message
 *     parameters:
 *       - name: id
 *         in: path
 *         description: "ID of message"
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successful operation
 *         schema:
 *           $ref: "#/definitions/message"
 *             
 */
router.get(`/:id`, (req, res) => {
    res.status(200).send(messages[req.params.id])
});

module.exports = router;