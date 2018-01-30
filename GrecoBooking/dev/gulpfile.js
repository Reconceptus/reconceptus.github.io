var gulp = require('gulp'),
    notify = require('gulp-notify'),
    svgstore = require('gulp-svgstore'),
    imagemin = require('gulp-imagemin'),
    include = require('gulp-html-tag-include'),
    rigger = require('gulp-rigger'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require("gulp-rename"),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    newer = require('gulp-newer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync');

var postcss = require('gulp-postcss'),
    autoprefix = require('autoprefixer'),
    stylefmt = require('stylefmt'),
    configFmt = require('./stylefmt.config'),
    mqpacker = require('css-mqpacker');

/* create svg sprite */

gulp.task('svgstore', function(){
    gulp.src(['src/svg/sprite/*.svg'])
        .pipe(svgstore())
        .pipe(gulp.dest('build/assets/svg'))

    gulp.src(['src/svg/**/*.svg','!src/svg/sprite'])
        .pipe(gulp.dest('build/assets/svg'))
});

/* minimize images */

gulp.task('imagemin', function () {
    gulp.src('src/images/**/*.+(jpg|jpeg|png|gif)')
        .pipe(newer('build/assets/images'))
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5
        }))
        .pipe(gulp.dest('build/assets/images'))
        .pipe(browserSync.reload({stream: true}));
});

/* media */

gulp.task('media', function(){
    gulp.src(['src/media/*.*'])
        .pipe(gulp.dest('build/assets/media'))
});


/* builders */

gulp.task('includer:html', function () {
    gulp.src('src/pages/*.html')
        // .pipe(newer('build'))
        .pipe(include())
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('rigger:js', function () {
    gulp.src('src/js/libs/libs.js')
        .pipe(rigger())
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('optimize:js', ['rigger:js'], function () {
    setTimeout(function () {
        gulp.src('src/js/*.js')
            .pipe(gulp.dest('build/assets/js'))
            // .pipe(uglify())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('build/assets/js'))
            .pipe(browserSync.reload({stream: true}));
    },1000)

});




/* browser sync */

gulp.task('browser-sync',function () {
    browserSync({
        server: 'build',
        host: 'localhost',
        port: 3377,
        notify: false
    })

});




/* compile sass with notify errors */

gulp.task( 'sass', function() {
    gulp.src('src/sass/**/*.+(sass|scss)')
        .pipe( sass().on( 'error', notify.onError(
            {
                message: "<%= error.message %>",
                title  : "Sass ошибка!"
            } ) )
        )
        .pipe( gulp.dest( 'src/css' ) )
        .pipe( notify( 'Готово!' ) )
    // .pipe(browserSync.reload({stream: true}));
});

gulp.task('optimize:css', ['sass'], function () {
    setTimeout(function () {
        gulp.src('src/css/styles.css')
            .pipe(autoprefixer({
                browsers: ['last 10 versions']
            }))
            .pipe(gulp.dest('build/assets/css'))
            .pipe(cssmin())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('build/assets/css'))
            .pipe(browserSync.reload({stream: true}));
    },1000)

});

/* all styles optimize */

gulp.task('optimize:styles', function () {
    gulp.src('src/sass/**/*.+(sass|scss)')
        .pipe( sass({
                outputStyle:'expanded'
            }).on( 'error', notify.onError(
            {
                message: "<%= error.message %>",
                title  : "Sass ошибка!"
            } ) )
        )
        .pipe(sourcemaps.init())
        .pipe(
            postcss([
                autoprefix({
                    browsers:['>2%']
                })
            ])
        )
        .pipe(autoprefixer({
            browsers: ['last 10 versions']
        }))

        .pipe( gulp.dest( 'src/css' ) )
        .pipe( notify( 'Готово!' ) )
        .on('finish',function () {
            gulp.src('src/css/styles.css')
                .pipe(
                    postcss([
                        mqpacker(),
                        stylefmt(configFmt)
                    ])
                )
                .pipe(sourcemaps.write())
                .pipe(gulp.dest('build/assets/css'))
                .pipe(cssmin())
                .pipe(rename({suffix: '.min'}))
                .pipe(gulp.dest('build/assets/css'))
                .pipe(browserSync.reload({stream: true}));
        });
});


/* watch changes */

gulp.task('watch', ['optimize:styles', 'includer:html', 'rigger:js', 'browser-sync'], function () {
    gulp.watch('src/sass/**/*.+(sass|scss)',['optimize:styles']);
    gulp.watch('src/**/*.html', ['includer:html']);
    gulp.watch('src/js/**/*.js', ['optimize:js']);
    gulp.watch('src/images/**/*.+(jpg|jpeg|png|gif)', ['optimize:js']);
});