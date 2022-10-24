const app = require('../configs/app.js');
const path = require('../configs/path.js');
const set = require('../configs/set.js');

function scripts() {
	return app.gulp.src(path.scripts.src)
		.pipe(app.babel(set.babel))
		.pipe(app.concat('main.min.js'))
		.pipe(app.size({
			title: 'До сжатия JS =>'
		}))
		.pipe(app.uglify())
		.pipe(app.size({
			title: 'После сжатия JS =>'
		}))
		.pipe(app.gulp.dest(path.scripts.dest))
		.pipe(app.browserSync.stream())
}

module.exports = scripts;