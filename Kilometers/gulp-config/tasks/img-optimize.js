module.exports = function (gulp, plugins, path_src, path_dest) {

    return gulp.src(path_src)
            .pipe(plugins.newer(path_dest))
            .pipe(plugins.imagemin({
                interlaced: true,
                progressive: true,
                optimizationLevel: 5
            }))
            .pipe(gulp.dest(path_dest))
            .pipe(plugins.webp())
            .pipe(gulp.dest(path_dest))
            .pipe(browserSync.reload({ stream: true }));
};