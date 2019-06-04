const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

function imageSquash() {
  return gulp
    .src("./public/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./src/images"));
}

gulp.task("imageSquash", imageSquash);
