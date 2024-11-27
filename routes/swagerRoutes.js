const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const path = require('path');

const swaggerRouter = express.Router();

swaggerRouter.use(
	'/swagger-ui',
	express.static(path.join(__dirname, '../node_modules/swagger-ui-dist'))
);

swaggerRouter.use('/', swaggerUi.serve);
swaggerRouter.get('/', swaggerUi.setup(swaggerDocument));

module.exports = swaggerRouter;
