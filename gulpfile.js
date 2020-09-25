const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
// const concat = require('gulp-concat'); 
// const uglify = require('gulp-uglifyjs'); 

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task ('styles', function() { 
    return gulp.src("src/sass/*.+(scss|sass)")
            .pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
            .pipe(rename({
                prefix: "",
                suffix: ".min",
            }))
            .pipe(autoprefixer({
                cascade: false
            }))
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest("src/css"))
            .pipe (browserSync.stream());
});

// gulp.task('scripts', function() {
// 	return gulp.src([ // Берем все необходимые библиотеки
//         'src/JS/jquery.min.js', 'src/JS/slick.min.js',
//         'src/JS/wow.min.js', 'src/JS/jquery.validate.min.js',
//         'src/JS/jquery.maskedinput.min.js'
//         ])
// 		.pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
// 		.pipe(uglify()) // Сжимаем JS файл
//         .pipe(gulp.dest('src/libs')); // Выгружаем в папку
        
// });

gulp.task ('watch', function() {
    gulp.watch("src/sass/*.+(scss|sass)",gulp.parallel('styles'));
    gulp.watch("src/*.html").on("change", browserSync.reload);
    // gulp.watch(['src/JS/script_slick.js', 'src/libs/*.js'], gulp.parallel('scripts'));
    gulp.watch("src/JS/script_slick.js").on("change", browserSync.reload);
});

gulp.task('default', gulp.parallel( 'watch', 'server', 'styles'));

