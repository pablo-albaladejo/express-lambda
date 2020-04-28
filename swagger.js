
module.exports = {
	swaggerDefinition: {
		info: {
			description: `Documentation for API`,
			title: `Express API`,
		},
		basePath: '/api/v1',
		produces: ['application/json'],
		schemes: ['http'],
	},
	basedir: process.cwd(),
	apis: [`./routes/**/**.js`],
	url: '/docs',
}