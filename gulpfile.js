/**
 * Created by Jelle on 30-06-2016.
 */
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('default', ['watch']);
gulp.task('less', function() {
    gulp.src('src/less/mainTheme.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))

});

gulp.task('watch', function() {
    gulp.watch('src/less/mainTheme.less', ['less']);
});