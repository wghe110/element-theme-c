'use strict';

const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

function compile() {
  return src('./src/element-theme/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./public/element-theme'));
}

function copyfont() {
  return src('./src/element-theme/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./public/element-theme/fonts'));
}

function watchScss() {
  watch(['/src/element-theme/*.scss'], function (cb) {
    series(compile, copyfont);
    cb();
  })
}

exports.build = series(compile, copyfont);
exports.watch = series(watchScss);
