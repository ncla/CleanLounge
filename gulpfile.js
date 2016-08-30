var gulp = require('gulp');
	compass = require('gulp-compass');
	concat = require("gulp-concat");
	minifyCss = require('gulp-minify-css');

gulp.task('default', function() {
	gulp.src("./sass/inject.sass")
		.pipe(compass({
			config_file: './config.rb',
			css: '',
			sass: 'sass'
		}))
		.pipe(gulp.dest("./"))
	;
});
