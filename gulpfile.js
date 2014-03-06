var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');

var watcher = gulp.watch('./css/**/*.less', ['less']);

gulp.task('default', ['less']);

gulp.task('less', function() {
	gulp.src('./css/styles.less')
		.pipe(less())
		.pipe(gulp.dest('./css/'));
});

watcher.on('change', function(event) {
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
