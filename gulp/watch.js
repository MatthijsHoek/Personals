var { task, series } = require('gulp');
var watch = require('gulp-watch');

const watchTask = task('watch', () => {
    watch('src/styles/sass/*.scss')
    .on('change', series('sass', 'cssmin'));
    watch('src/js/*.js')
    .on('change', series('uglify'));
});

module.exports = watchTask;