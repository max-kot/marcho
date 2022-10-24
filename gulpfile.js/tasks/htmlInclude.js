const app = require('../configs/app.js');
const path = require('../configs/path.js');

function htmlInclude() {
	return app.gulp.src(path.htmlInclude.src)
		.pipe(app.plumber({
			errorHandler: app.notify.onError(error => ({
				title: 'HTML Modules',
				message: error.message
			}))
		}
		))
		.pipe(app.fileInclude())
		.pipe(app.gulp.dest(path.htmlInclude.dest))
		.pipe(app.browserSync.stream())
}

module.exports = htmlInclude;
