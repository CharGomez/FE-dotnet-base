/// <binding/>
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

"use strict";

var gulp = require('gulp'),
    sass = require("gulp-sass"),
	concat = require("gulp-concat"),
	cssmin = require("gulp-cssmin"),
	rename = require("gulp-rename");

var paths = {
    sass: "scss/",
    outputDirectory: "dist/assets/css"
};

gulp.task("sass:compile", function () {
    return gulp.src(paths.sass + "main.scss")
        .pipe(sass())
        .pipe(gulp.dest(paths.sass));
});

gulp.task("bundle:css", ["sass:compile"], function () {
    return gulp.src(paths.sass + "main.css")
		.pipe(concat("styles.css"))
		.pipe(gulp.dest(paths.outputDirectory))
		.pipe(rename({ suffix: ".min" }))
		.pipe(cssmin())
		.pipe(gulp.dest(paths.outputDirectory));
});

gulp.task("watch", function () {
    gulp.watch(paths.sass + "**/*.scss", ["bundle:css"]);
});