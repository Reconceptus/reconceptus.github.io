module.exports = function(gulp, plugins, path_src, path_dest, env) {
    if (env == '--prod') {
        return gulp
            .src(path_src)
            .pipe(plugins.htmlTagInclude())
            .pipe(gulp.dest(path_dest))
            .pipe(plugins.notify('HTML builded'));
    }

    return gulp
        .src(path_src)
        .pipe(plugins.htmlTagInclude())
        .pipe(gulp.dest(path_dest))
        .pipe(browserSync.reload({ stream: true }))
        .pipe(plugins.notify('HTML builded'));
};
