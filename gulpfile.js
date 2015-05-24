/**
 * learning-sass - gulpfile.js
 * Created by mengdesen on 15/5/24.
 */

'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

gulp.task('build', function(){
    gulp.src('./scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
});

gulp.task('default', function () {
    gulp.watch('./scss/*.scss', ['build']);
});