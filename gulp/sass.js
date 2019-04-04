var { src, dest, task } = require('gulp');
var sass = require('gulp-sass');

const sassTask = task('sass', () => {
    return src("src/styles/sass/*.scss")
    .pipe(sass())
    .pipe(dest("src/dist"))
});

module.exports = sassTask;