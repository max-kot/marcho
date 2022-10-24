const app = require('../configs/app.js');
const path = require('../configs/path.js');
const set = require('../configs/set.js');

function server() {
	return app.browserSync.init({
		server: { baseDir: path.src }
	})
}

module.exports = server;