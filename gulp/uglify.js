var { src, dest, task } = require('gulp');
var uglify = require('gulp-uglify-es').default;
var rename = require('gulp-rename');

const uglifyTask = task('uglify', () => {
    return src('src/js/*.js')
    .pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe(dest('src/dist/min'));
});

module.exports = uglifyTask;