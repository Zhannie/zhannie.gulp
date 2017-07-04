var gulp        = require('gulp'),
	deploy      = require('gulp-deploy-git'),
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

	gulp.task('sass', function() {
	return gulp.src('app/sass/input.scss')
	.pipe(sass())
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
	.pipe(gulp.dest('dist/css'))
	});

	gulp.task('scripts', function() {
	return gulp.src([
		'app/libs/jquery-3.2.0.js',
		'app/libs/jquery.color.js'
		])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
	});

	gulp.task('clear', function() {
	return cache.clearAll();
	});

	gulp.task('img', function() {
	return gulp.src('app/imgs/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox:false}],
		une: [pngquant()]
	})))
	.pipe(gulp.dest('dist/imgs'));
	});

	gulp.task('deploy', ['img', 'sass', 'scripts'], function() {
		var buildCss = gulp.src(['app/css/**/*'])
		.pipe(gulp.dest('dist/css'));

		var buildJs = gulp.src(['app/js/script.js'])
		.pipe(gulp.dest('dist/js'));

		var buildHtml = gulp.src(['index.html'])
		.pipe(gulp.dest('dist/js'));

		return gulp.src('dist/**/*')
		.pipe(deploy({
			repository: 'https://github.com/Zhannie/zhannie.gulp.git'
		}));
	});


