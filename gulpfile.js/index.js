// Export Apps and Path
const app = require('./configs/app.js');
const path = require('./configs/path.js');
const set = require('./configs/set.js');


// Export Tasks
const server = require('./tasks/server.js');
const clear = require('./tasks/clear.js');
const htmlInclude = require('./tasks/htmlInclude.js');
const styles = require('./tasks/styles.js');
const scripts = require('./tasks/scripts.js');
const fonts = require('./tasks/fonts.js');
const image = require('./tasks/image.js');
const copy = require('./tasks/copy.js');


// Watcher
function watcher() {
	app.gulp.watch(path.htmlInclude.watch, htmlInclude);
	app.gulp.watch(path.styles.watch, styles);
	app.gulp.watch(path.scripts.watch, scripts);
}


// Launch to gulp
exports.server = server;
exports.clear = clear;
exports.htmlInclude = htmlInclude;
exports.styles = styles;
exports.scripts = scripts;
exports.image = image;
exports.fonts = fonts;
exports.copyHtml = copy.html;
exports.copyCss = copy.css;
exports.copyJs = copy.js;
exports.copyLib = copy.lib;
exports.copy = app.gulp.parallel(
	copy.html,
	copy.css,
	copy.js,
	copy.lib
);


const build = app.gulp.series(
	clear,
	htmlInclude,
	styles,
	scripts,
	app.gulp.parallel(
		copy.html,
		copy.css,
		copy.js,
		copy.lib,
	),
	fonts,
	image,
);
const dev = app.gulp.series(
	htmlInclude,
	styles,
	scripts,
	app.gulp.parallel(
		watcher,
		server
	),
);

exports.build = build;
exports.dev = dev;

exports.default = dev;