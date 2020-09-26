const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

// Static server
gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: "dist"
        }
    });
    gulp.watch("dist/*.html").on("change", browserSync.reload);
});

gulp.task ('styles', function() { 
    return gulp.src("src/sass/*.+(scss|sass)")
            .pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
            .pipe(rename({
                suffix: ".min",
                prefix: ""
            }))
            .pipe(autoprefixer())                
            .pipe(gulp.dest("dist/css"))
            .pipe (browserSync.stream());
});

gulp.task ('watch', function() {
    gulp.watch("src/sass/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on("change", gulp.parallel('html'));
    gulp.watch("dist/JS/*.js").on("change", browserSync.reload);
});

gulp.task ('html', function() {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});

gulp.task ('scripts', function() {
    return gulp.src("src/JS/*.js")
        .pipe(gulp.dest('dist/JS'));
});

gulp.task ('fonts', function() {
    return gulp.src("src/fonts/*")
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task ('icons', function() {
    return gulp.src("src/icons/**/*")
        .pipe(gulp.dest('dist/icons'));
});

gulp.task ('mailer', function() {
    return gulp.src("src/mailer/**/*")
        .pipe(gulp.dest('dist/mailer'));
});

gulp.task ('img', function() {
    return gulp.src("src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});


gulp.task ('audio', function() {
    return gulp.src("src/audio/our_guys.mp3")
        .pipe(gulp.dest('dist/audio'));
});

gulp.task('default', gulp.parallel( 'watch', 'server', 'styles', 'img',
'mailer', 'icons', 'fonts', 'scripts', 'html'));

