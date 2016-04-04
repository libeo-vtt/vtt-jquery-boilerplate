var gulp = require('gulp');
var bump = require('gulp-bump');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');

gulp.task('clean', function() {
    return gulp.src('dist/**/*', { read: false })
        .pipe(clean());
});

gulp.task('uglify', function() {
	return gulp.src('src/*.js')
	// This will output the non-minified version
	.pipe(gulp.dest('dist'))
	// This will minify and rename to foo.min.js
	.pipe(uglify())
	.pipe(rename({ extname: '.min.js' }))
	.pipe(gulp.dest('dist'));
});

gulp.task('bump:patch', function() {
    gulp.src(['./bower.json', './package.json'])
        .pipe(bump({ type: 'patch' }))
        .pipe(gulp.dest('./'));
});

gulp.task('bump:minor', function() {
    gulp.src(['./bower.json', './package.json'])
        .pipe(bump({ type: 'minor' }))
        .pipe(gulp.dest('./'));
});

gulp.task('bump:major', function() {
    gulp.src(['./bower.json', './package.json'])
        .pipe(bump({ type: 'major' }))
        .pipe(gulp.dest('./'));
});


gulp.task('default', function() {

	runSequence('clean', 'uglify');
});
