var { src, dest, task, watch, series } = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify-es').default;
var rename = require('gulp-rename');

task('sass', () => {
  return src("src/styles/sass/*.scss")
  .pipe(sass())
  .pipe(dest("src/dist"))
});

task('cssmin', () => {
  return src('src/dist/main.css')
  .pipe(rename('main.min.css'))
  .pipe(cssmin())
  .pipe(dest('src/dist/min'));
});

task('uglify', () => {
  return src('src/js/*.js')
  .pipe(rename('main.min.js'))
  .pipe(uglify())
  .pipe(dest('src/dist/min'));
});

task('watch', () => {
  watch('src/styles/sass/*.scss', ['sass', 'cssmin']);
  watch('src/js/*.js', ['uglify']);
});

task('default', series('watch'));
