const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js',
	},
	target: 'node',
	externals: {
		'express': 'commonjs express',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				enforce: 'pre',
				loader: 'eslint-loader'
			},
		],
	},
	resolve: {
		modules: [path.resolve(__dirname, "../node_modules")],
	}
};
