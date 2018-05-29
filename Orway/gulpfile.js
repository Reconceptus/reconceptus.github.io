/* gulp variables */

var gulp = require('gulp'),
    notify = require('gulp-notify'),
    svgstore = require('gulp-svgstore'),
    injectSvg = require('gulp-inject-svg'),
    imagemin = require('gulp-imagemin'),
    include = require('gulp-html-tag-include'),
    rigger = require('gulp-rigger'),
    sass = require('gulp-sass'),
    rename = require("gulp-rename"),
    cssmin = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    newer = require('gulp-newer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync');


/* postcss variables */

var postcss = require('gulp-postcss'),
    autoprefix = require('autoprefixer'),
    stylefmt = require('stylefmt'),
    configFmt = require('./stylefmt.config'),
    mqpacker = require('css-mqpacker');


/* paths */

var path = {
    build: {
        html: 'dev/build/',
        js: 'dev/build/assets/js/',
        css: 'dev/build/assets/css/',
        img: 'dev/build/assets/images/',
        media: 'dev/build/assets/media/',
        svg: 'dev/build/assets/svg/',
        fonts: 'dev/build/assets/fonts/'
    },
    src: {
        common: 'dev/src/',
        html_pages: 'dev/src/pages/*.html',
        html_all: 'dev/src/**/*.html',
        js: 'dev/src/js/',
        sass: 'dev/src/sass/**/*.+(sass|scss)',
        img: 'dev/src/images/**/*.+(jpg|jpeg|png|gif)',
        svg: 'dev/src/svg/',
        media: 'dev/src/media/',
        fonts: 'dev/src/fonts/**/*.*'
    },
    watch: {
        html: 'dev/src/**/*.html',
        js: 'dev/src/js/**/*.js',
        style: 'dev/src/**/*.scss'
    },
    clean: 'dev/build'
};


/* browser sync */

gulp.task('browser-sync',function () {
    browserSync({
        server: path.clean,
        host: 'localhost',
        browser: 'chrome',
        port: 5678,
        notify: false
    })
});


/* create svg sprite */

gulp.task('svg', function(){
    gulp.src(path.src.svg + 'sprite/*.svg')
        .pipe(newer(path.build.svg))
        .pipe(svgstore())
        .pipe(gulp.dest(path.src.svg))
        .pipe(gulp.dest(path.build.svg));

    gulp.src(path.src.svg + 'sprite-svg.html')
        .pipe(injectSvg({
            base: path.src.common
        }))
        .pipe(gulp.dest(path.src.common + 'templates'));

    gulp.src([path.src.svg + '**/*.svg','!' + path.src.svg + 'sprite'])
        .pipe(newer(path.build.svg))
        .pipe(gulp.dest(path.build.svg));
});

/* minimize images */

gulp.task('img', function () {
    gulp.src(path.src.img)
        .pipe(newer(path.build.img))
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(browserSync.reload({stream: true}));
});

/* media */

gulp.task('media', function(){
    gulp.src(path.src.media + '*.*')
        .pipe(gulp.dest(path.build.media))
});

/* fonts */

gulp.task('fonts', function(){
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});


/* builders */

gulp.task('builder:html-sprite', function () {


})


gulp.task('builder:html', function () {
    gulp.src(path.src.html_pages)

        .pipe(include())

        .pipe(gulp.dest(path.clean))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('builder:js', function () {
    gulp.src(path.src.js + 'main.js')
        .pipe(sourcemaps.init())
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('builder:css', function () {
    gulp.src(path.src.sass)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sass().on('error', notify.onError(
            {
                message: "<%= error.message %>",
                title  : "Sass ошибка!"
            }))
        )
        .pipe(
            postcss([
                autoprefix({
                    browsers:['last 10 versions']
                }),
                mqpacker(),
                stylefmt(configFmt)
            ])
        )
        .pipe(gulp.dest(path.build.css))
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.build.css))
        .pipe(notify( 'Готово!' ) )
        .pipe(browserSync.reload({stream: true}));
});



/* watch changes */

gulp.task('watch', ['svg', 'builder:css', 'builder:html', 'builder:js', 'browser-sync'], function () {
    gulp.watch(path.src.sass,['builder:css']);
    gulp.watch(path.src.html_all, ['builder:html']);
    gulp.watch(path.src.js + '**/*.js', ['builder:js']);
});

/* dafault tasks */

gulp.task('default',function () {
    gulp.run('watch');
});
