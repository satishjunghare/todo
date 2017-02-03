var config = {
	entry: './www/js/index.js',
	output: {
		path: './www/js/',
		filename: 'script.js'
	},
	devServer: {
		inline: true,
		port: 8080
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				execute: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}
module.exports = config;