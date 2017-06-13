var gulp = require('gulp'),
	deploy = require('gulp-gh-pages')
	sass        = require('gulp-sass'),
	concat      = require('gulp-concat'),
	uglify      = require('gulp-uglifyjs'),
	cssnano     = require('gulp-cssnano'),
	rename      = require('gulp-rename'),
	del         = require('del'), 
	imagemin    = require('gulp-imagemin'),
	pngquant    = require('imagemin-pngquant'),
	cache       = require('gulp-cache'),
	autoprefixer= require('gulp-autoprefixer');

	gulp.task('deploy', function() {
		return gulp.src('.dist/**/*')
		.pipe(deploy())
	});