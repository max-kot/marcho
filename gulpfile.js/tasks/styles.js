const app = require('../configs/app.js');
const path = require('../configs/path.js');
const set = require('../configs/set.js');

function styles() {
	return app.gulp.src(path.styles.src)
		.pipe(app.plumber({
			errorHandler: app.notify.onError(error => ({
				title: 'CSS',
				message: error.message
			}))
		}
		))
		.pipe(app.sass())
		.pipe(app.gulp.dest(path.styles.dest))
		.pipe(app.gulp.src(path.styles.concat))
		.pipe(app.concat('style.min.css'))
		.pipe(app.autoprefixer(set.autoprefixer))
		.pipe(app.cleanCss(set.cleanCss))
		.pipe(app.groupCssMediaQueries()) // группирует одинковые медиа запросы
		.pipe(app.size({
			title: 'До сжатия CSS =>'
		}))
		.pipe(app.sass(set.scss))
		.pipe(app.size({
			title: 'После сжатия CSS =>'
		}))
		.pipe(app.gulp.dest(path.styles.dest))
		.pipe(app.browserSync.stream())
}

module.exports = styles;