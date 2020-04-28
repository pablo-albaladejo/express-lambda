const express = require('express');
const swaggerValidator = require('swagger-endpoint-validator');
const app = express();
const router = express.Router();
const port = 3000;

const routes = require(`./routes`);
router.use('/api/v1', routes);
router.use('/api/v2', routes);

app.use(router);
swaggerValidator.init(router, require('./swagger'), 'yaml');

app.listen(port, () => {
    console.log(`server running on port ${port}`)
});