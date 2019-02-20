const cpydir = require('copy-dir');
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

const destOpts = {
    overwrite: true,
    sourcemaps: "stylesheet.css.map"
};

gulp.task('copyHTML', () => {
  cpydir.sync("./html/", "./dist");
});

gulp.task('sass', () => {
    return gulp.src('scss/stylesheet.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist', destOpts))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('dist', gulp.task('sass'), gulp.task('copyHTML'));

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
  })
});

gulp.task('watch', () => {
    gulp.task('browserSync')();
    gulp.watch('scss/**/*.scss', gulp.task('sass'));
    gulp.watch('**/*.html', browserSync.reload);
    gulp.watch('**/*.js', browserSync.reload);
});