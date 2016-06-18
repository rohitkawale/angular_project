var gulp= require('gulp'),
	uglify=require('gulp-uglify'),
	sass= require('gulp-ruby-sass'),
	sass2= require('gulp-sass'),
	//imagemin= require('gulp-imagemin'),
	plumber= require('gulp-plumber'),
	prefix= require('gulp-autoprefixer');

gulp.task('default',['scripts','styles',/*'image',*/'watch']);


gulp.task('scripts',function(){
	gulp.src('Src/js/*.js')
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest('build/js/'));
});

/*gulp.task('image',function(){

	gulp.src('Src/images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('build/images'));

});*/

gulp.task('styles',function(){
	console.log("ji");
	gulp.src('Src/scss/*.scss')
	.pipe(sass2())
	.on('error',console.error.bind(console))
	.pipe(gulp.dest('build/css'));
	
});


gulp.task('watch',function(){
	gulp.watch('Src/js/*.js',['scripts']);
	gulp.watch('Src/scss/*.scss',['styles']);
});