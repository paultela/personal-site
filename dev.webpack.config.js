const merge = require('webpack-merge');
const base = require('./base.webpack.config.js');
const webpack = require('webpack');

module.exports = function(env) {
	return merge(base(), {
		devtool: 'cheap-module-eval-source-map',
		plugins: [
			new webpack.LoaderOptionsPlugin({
				minimize: true,
				debug: false
			}),
			new webpack.DefinePlugin({
				'process.env': {
					'NODE_ENV': JSON.stringify('development')
				}
			})
		]
	});
}
