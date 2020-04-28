const express = require('express');
const app = express();
const port = 3000;
const basePath = '/api/v1';
const routes = require('./routes')

app.use(basePath, routes);

app.listen(port, () => {
    console.log(`server running on port ${port}`)
});