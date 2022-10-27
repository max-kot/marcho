const pathSrc = './src';
const pathDest = './dist';

path = {
	src: pathSrc,
	dest: pathDest,

	htmlInclude: {
		src: pathSrc + '/html/*.html',
		watch: pathSrc + '/html/**/*.html',
		dest: pathSrc,
	},

	styles: {
		src: pathSrc + '/scss/**/*.{scss,sass}',
		watch: pathSrc + '/scss/**/*.{scss,sass}',
		dest: pathSrc + '/css',
		concat: [
			'./node_modules/normalize.css/normalize.css',
			'./node_modules/slick-carousel/slick/slick.css',
			'./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css',
			'./node_modules/ion-rangeslider/css/ion.rangeSlider.css', // rangeslider
			'./node_modules/jquery-form-styler/dist/jquery.formstyler.css', // Form Styler
			'./node_modules/jquery-form-styler/dist/jquery.formstyler.theme.css', // Form Styler Theme
			pathSrc + '/lib/**/*.css',
			pathSrc + '/css/**/*.css',
			'!./src/css/style.min.css',
		],

	},


	scripts: {
		src: [
			'./node_modules/jquery/dist/jquery.js', // jquery
			//'./node_modules/mixitup/dist/mixitup.js', // mixitup
			'./node_modules/slick-carousel/slick/slick.js', // slick
			'./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js', // fancybox
			'./node_modules/ion-rangeslider/js/ion.rangeSlider.js', // rangeslider
			'./node_modules/jquery-form-styler/dist/jquery.formstyler.js', // Formstyler
			pathSrc + '/lib/**/*.js',
			pathSrc + '/js/main.js',
			'!src/js/main.min.js',
		],
		watch: pathSrc + '/js/**/*.js',
		dest: pathSrc + '/js',
	},

	copy: {
		html: {
			src: pathSrc + '/*.html',
			dest: pathDest,
		},

		css: {
			src: pathSrc + '/css/**/*.css',
			dest: pathDest + '/css',
		},

		js: {
			src: pathSrc + '/js/**/*.js',
			dest: pathDest + '/js',
		},

		lib: {
			src: pathSrc + '/lib/**/*.*',
			dest: pathDest + '/lib',
		},
	},

	fonts: {
		src: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
		dest: pathDest + '/fonts',
	},

	img: {
		src: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
		dest: pathDest + '/img',
	},

}

module.exports = path;