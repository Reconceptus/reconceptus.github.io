module.exports = function (gulp, plugins, path_src, path_dest) {

    return gulp.src(path_src + 'main.js')
            .pipe(plugins.rigger())
            .pipe(plugins.rename('app.js'))
            .pipe(gulp.dest(path_dest));
};