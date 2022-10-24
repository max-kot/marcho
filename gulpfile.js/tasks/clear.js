const app = require('../configs/app.js')
const path = require('../configs/path.js')


function clear() {
	return app.del(path.dest)
}


module.exports = clear;