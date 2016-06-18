var gulp= require('gulp'),
	uglify=require('gulp-uglify'),
	sass= require('gulp-ruby-sass'),
	sass2= require('gulp-sass'),
	plumber= require('gulp-plumber');

gulp.task('default',['scripts','styles','watch']);


gulp.task('scripts',function(){
	gulp.src('Src/js/*.js')
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest('build/js/'));
});

gulp.task('styles',function(){
	console.log("ji");
	gulp.src('Src/scss/*.scss')
	.pipe(plumber())
	.pipe(sass2({
		style:'compressed'
	}))
	.pipe(gulp.dest('build/css'));
	
});


gulp.task('watch',function(){
	gulp.watch('Src/js/*.js',['scripts']);
});