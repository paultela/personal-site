const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'cheap-module-source-map',
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
			{
				test: /\.s?css$/,
				loader: ExtractTextPlugin.extract({
					loader: [
						{
							loader: 'css-loader',
							query: {
								sourceMap: true,
							}
						},
						{
							loader: 'postcss-loader',
							query: {
								sourceMap: true,
							}
						},
						{
							loader: 'resolve-url-loader',
							query: {
								sourceMap: true,
							}
						},
						{
							loader: 'sass-loader',
							query: {
								sourceMap: true,
							}
						}
					]
				})
			},
			{
				test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png$|\.jpg$|\.gif$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'bundle.css',
			disable: false,
			allChunks: true,
		})
	]
}
