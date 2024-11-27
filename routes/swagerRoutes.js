// const express = require('express');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('../swagger.json');

// const swaggerRouter = express.Router();

// const options = {
//   explorer: true,
//   customJsStr: 'console.log("Hello World")',
// };

// swaggerRouter.use('/', swaggerUi.serve);
// swaggerRouter.get('/', swaggerUi.setup(swaggerDocument, options));

// module.exports = swaggerRouter;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

module.exports = function handler(req, res) {
	if (req.method === 'GET') {
		return swaggerUi.setup(swaggerDocument, {
			explorer: true,
			customJsStr: 'console.log("Hello World")',
		})(req, res);
	}
	res.status(404).send('Not Found');
};
