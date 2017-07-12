let gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    hash         = require("gulp-hash"),
    del          = require("del")

// Compile SCSS files to CSS
gulp.task("scss", function () {
  del(["static/css/**/*"])
  gulp.src("src/scss/**/*.scss")
    .pipe(sass({ outputStyle : "compressed" }))
    .pipe(autoprefixer({ browsers : ["last 20 versions"] }))
    .pipe(hash())
    .pipe(gulp.dest("static/css"))
    .pipe(hash.manifest('hash.json'))
    .pipe(gulp.dest('data/css'))
})

gulp.task("images", function() {
  gulp.src("src/img/**/*")
    .pipe(hash())
    .pipe(gulp.dest("static/img"))
    .pipe(hash.manifest('hash.json'))
    .pipe(gulp.dest('data/img'))
})

gulp.task("js", function() {
  gulp.src("src/js/**/*")
    .pipe(hash())
    .pipe(gulp.dest("static/js"))
    .pipe(hash.manifest('hash.json'))
    .pipe(gulp.dest('data/js'))
})

// Watch asset folder for changes
gulp.task("watch", ["scss"], function () {
  gulp.watch("src/scss/**/*", ["scss"])
})

// Watch asset folder for changes
gulp.task("watch", ["scss", "images", "js"], function () {
  gulp.watch("src/scss/**/*", ["scss"])
  gulp.watch("src/img/**/*", ["images"])
  gulp.watch("src/js/**/*", ["js"])
})

gulp.task("default", ["watch"])
