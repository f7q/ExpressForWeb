﻿/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task(
  "copy-extensions", function (cb) {
      /*gulp.src(["../WebApplication.NLog/bin/Debug/netstandard1.6/WebApplication.NLog.dll"]).pipe(gulp.dest("Extensions"));
      gulp.src(["../WebApplication.Elm/bin/Debug/netstandard1.6/WebApplication.Elm.dll"]).pipe(gulp.dest("Extensions"));
      gulp.src(["../WebApplication.ExtensionA/bin/Debug/netstandard1.6/WebApplication.ExtensionA.dll"]).pipe(gulp.dest("Extensions"));
      gulp.src(["../WebApplication.ExtensionB/bin/Debug/netstandard1.6/WebApplication.ExtensionB.dll"]).pipe(gulp.dest("Extensions"));
      gulp.src(["../WebApplication.Swagger/bin/Debug/netstandard1.6/WebApplication.Swagger.dll"]).pipe(gulp.dest("Extensions"));
      gulp.src(["../WebApplication.WebAPI/bin/Debug/netstandard1.6/WebApplication.WebAPI.dll"]).pipe(gulp.dest("Extensions"));
      */
      gulp.src(["../WebApplication1/bin/Debug/netcoreapp1.0/WebApplication1.dll"]).pipe(gulp.dest("Extensions"));
      cb();
  }
);