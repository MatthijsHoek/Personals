var { src, dest, task } = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

const cssminTask = task('cssmin', () => {
    return src('src/dist/*.css')
    .pipe(rename('main.min.css'))
    .pipe(cssmin())
    .pipe(dest('src/dist/min'));
});

module.exports = cssminTask;
