
var gulp = require("gulp"),
    htmlmin = require("gulp-htmlmin"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
pkg = require("./package.json");

var name = pkg.name;
gulp.task("minifyHtml", ()=> {
         gulp.src("index.html")
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("dist"))
});

gulp.task("scripts",()=>{
    gulp.src("src/string-methods.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/scripts"))
});

gulp.task("build",()=>{
    gulp.start("minifyHtml","scripts");

});


gulp.task("default",()=>{
gulp.start("build");
  });
