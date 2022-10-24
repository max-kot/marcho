const set = {

	htmlmin: {
		collapseWhitespace: true, // убирает все пробелы
	},

	scss: {
		outputStyle: 'compressed',
	},

	autoprefixer: {
		overrideBrowserslist: ['last 10 version'],
		grid: true,
	},

	cleanCss: {
		level: 2
	},

	rename: {
		suffix: '.min',
	},

	webpack: {
		mode: 'production', // 'development'
	},

	babel: {
		presets: ['@babel/env'],
	},

	fonter: {
		formats: ['ttf', 'woff', 'eot', 'svg']
	},

	imagemin: {
		vebose: true, // для просмотра размера
	},
}


module.exports = set;