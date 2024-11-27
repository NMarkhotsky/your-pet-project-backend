const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const swaggerRouter = express.Router();

const options = {
	explorer: true,
	customJsStr: 'console.log("Hello World")',
};

swaggerRouter.use('/swagger-ui', express.static('node_modules/swagger-ui-dist'));
swaggerRouter.use('/', swaggerUi.serve);
swaggerRouter.get('/', swaggerUi.setup(swaggerDocument, options));

module.exports = swaggerRouter;
