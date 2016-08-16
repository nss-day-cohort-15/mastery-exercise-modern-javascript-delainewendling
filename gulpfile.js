var gulp = require('gulp'),
    uglify = require("gulp-uglify"),
    jshint = require('gulp-jshint');

//Scripts Task
//Uglifies
gulp.task('scripts', function(){
  gulp.src('javascript/*.js')
    .pipe(uglify()) //calls the uglify function
    .pipe(gulp.dest('minjs')); //saves the files into minjs
})

gulp.task("styles", function(){
  console.log("runs styles");
})

gulp.task('lint', function() {
  gulp.src('javascript/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

//Watch task watches for changes
gulp.task("watch", function(){
  gulp.watch('javascript/*.js', ['scripts']);
})

gulp.task('default', ["scripts", "styles", "lint"]) //this runs both tasks
