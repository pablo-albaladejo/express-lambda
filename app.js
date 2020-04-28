const express = require('express')
const app = express()
const port = 3000
const baseUrl = '/api/v1';

const messages = [
    "Hello World",
    "Hello Serverless",
    "It's a great day today",
    "Yay, I'm learning something new today",
    "On cloud nine",
    "Over the moon",
    "Shooting for the stars",
    "On top of the World",
    "World at my feet",
    "Doing everything I love"
];

app.get(`${baseUrl}/messages`, (req, res) => {
    res.status(200).send(messages)
});

app.listen(port, () => {
    console.log(`server running on port ${port}`)
});