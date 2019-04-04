var { task, series } = require('gulp');
var requireDir = require('require-dir');
var tasks = requireDir('./gulp');

task('default', series('watch'));
