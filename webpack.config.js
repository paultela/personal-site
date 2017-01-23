module.exports = function(env) {
	return require('./' + env + '.webpack.config.js')({env: env});
}
