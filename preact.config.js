// in preact.config.js

const { generateSw } = require('preact-cli-workbox-plugin');
export default function(config, env, helpers) {
	return generateSw(config, helpers, {
		runtimeCaching: [{
			// Match any same-origin request that contains 'api'.
			urlPattern: /\/api\/fetch\/national/,
			// Apply a network-first strategy.
			handler: 'networkFirst'
		}]
	});
}