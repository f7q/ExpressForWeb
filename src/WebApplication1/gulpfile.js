/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task(
  "copy-extensions", function (cb) {
      gulp.src(["../WebApplication1/bin/Debug/netcoreapp1.0/WebApplication1.dll"]).pipe(gulp.dest("Extensions"));
      cb();
  }
);