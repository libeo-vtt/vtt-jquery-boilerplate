var gulp = require('gulp');
var clean = require('gulp-clean');
var minify = require('gulp-minify');

gulp.task('clean', function() {
    return gulp.src('dist/**/*', { read: false })
        .pipe(clean());
});

gulp.task('minify', function() {
    return gulp.src('src/*.js')
        .pipe(minify())
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ['clean', 'minify']);
