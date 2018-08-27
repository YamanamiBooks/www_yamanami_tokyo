const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename')

var paths = "public/**/*.html"
var css_path = "layouts/partials/*.css"
var css_min_path = "layouts/partials"

gulp.task('minify-css', () => {
  return gulp.src(css_path)
    .pipe(cleanCSS({}))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(css_min_path))
});

gulp.task('minify-html', () => {
  return gulp.src(paths)
    .pipe(htmlmin({
      collapseWhitespace: true,
      caseSensitive: true,
      preserveLineBreaks: true,
      minifyJS: true}))
    .pipe(gulp.dest('public'));
});

gulp.task('default', ['minify-html'], function () {
});
