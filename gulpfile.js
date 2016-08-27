var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sass = require('gulp-sass');

gulp.task('js', function() {
    return gulp.src(['src/**/module.js', 'src/**/*.js'])
            .pipe(sourcemaps.init())
            .pipe(concat('app.js'))
            //.pipe(ngAnnotate())
            //.pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('.'))
            .pipe(browserSync.stream());
});

gulp.task('sass', function() {
    return gulp.src("src/sass/*.scss")
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest("."))
            .pipe(browserSync.stream());
});

gulp.task('watch', ['js', 'sass'], function() {
    gulp.watch('src/**/*.js', ['js']);
});

gulp.task('serve', ['js', 'sass'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('./app.js').on('change', browserSync.reload);
    gulp.watch('./style.css').on('change', browserSync.reload);
    gulp.watch('./index.html').on('change', browserSync.reload);
});
