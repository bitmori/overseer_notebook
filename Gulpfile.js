var gulp = require('gulp');
var del = require('del');
var less = require('gulp-less');
var path = require('path');
var runSequence = require('run-sequence');
var webpack = require('webpack-stream');
var webpack_config = require('./webpack.config.js');

gulp.task('clean:all', function () {
    return del([
        'dist/**/*.*'
    ]);
});

gulp.task('clean:js', function (){
    return del([
        'dist/**/*.js*'
    ]);
});

gulp.task('clean:css', function () {
    return del([
        'dist/**/*.css*'
    ]);
});

gulp.task('less', function () {
    return gulp.src('./main/less/**/*.less')
        .pipe(less({
            paths: [
                './node_modules/elemental/less'
            ]
        }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy:static', function () {
    return gulp.src('./main/static/index.html')
        .pipe(gulp.dest('dist'));

});

gulp.task('copy:favicon', function () {
    return gulp.src('./main/assets/favicon.ico').pipe(gulp.dest('dist'));
});

gulp.task('build', function () {
    return gulp.src('./main/app.ts')
        .pipe(webpack(webpack_config))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('clean-build:js', function(callback) {
    runSequence('clean:js', 'build', callback);
});

gulp.task('clean-build:all', function (callback) {
    runSequence('clean:all','less', 'build', 'copy:static', /*'copy:favicon',*/ callback);
});

gulp.task('default', ['clean-build:js']);
