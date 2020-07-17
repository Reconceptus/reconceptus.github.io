module.exports = function(gulp, plugins) {
    function getTask(task, path_src, path_dest, condition) {
        const env = process.argv[3];

        if (typeof path_dest == 'object') {
            path_dest = env == '--prod' ? path_dest[1] : path_dest[0];
        }

        return require('./tasks/' + task)(gulp, plugins, path_src, path_dest, env, condition);
    }

    /* browser sync ------------------------------------- */

    gulp.task('browser:sync', () => {
        return getTask('browser-sync', PATH_CONFIG.browser, PATH_CONFIG.port);
    });

    /* clean all files ------------------------------------- */

    gulp.task('files:clean', () => {
        return getTask('clean', '', [PATH_CONFIG.dev.common, PATH_CONFIG.prod.common]);
    });

    /* svg:compile --------------------------------------*/

    // svg sprite build

    gulp.task('svg:sprite', () => {
        return getTask('svg-sprite', PATH_CONFIG.src.svg_sprite, PATH_CONFIG.src.svg);
    });

    // svg copy all files to build

    gulp.task('svg:copy', () => {
        return getTask('copy', PATH_CONFIG.src.svg_files, [
            PATH_CONFIG.dev.svg,
            PATH_CONFIG.prod.svg,
        ]);
    });

    // svg inject to html template

    gulp.task(
        'svg:inject',
        gulp.series('svg:sprite', () => {
            return getTask('svg-inject', PATH_CONFIG.src.svg, PATH_CONFIG.src.html_templates);
        }),
    );

    // svg build sprite and copy all files to build

    gulp.task(
        'svg:build',
        gulp.series('svg:inject', 'svg:copy', done => {
            done();
        }),
    );

    // svg build and html build

    gulp.task(
        'svg:build-to-html',
        gulp.series('svg:inject', 'svg:copy', () => {
            return getTask('html-build', PATH_CONFIG.src.html_pages, [
                PATH_CONFIG.dev.html,
                PATH_CONFIG.prod.html,
            ]);
        }),
    );

    /* img:compile --------------------------------------*/

    gulp.task('img:optimize', () => {
        return getTask(
            'img-optimize',
            PATH_CONFIG.src.img,
            [PATH_CONFIG.dev.img, PATH_CONFIG.prod.img],
            true,
        );
    });
    gulp.task('img:optimize-force', () => {
        return getTask('img-optimize', PATH_CONFIG.src.img, [
            PATH_CONFIG.dev.img,
            PATH_CONFIG.prod.img,
        ]);
    });

    /* media:copy --------------------------------------*/

    gulp.task('media:copy', () => {
        return getTask('copy', PATH_CONFIG.src.media, [
            PATH_CONFIG.dev.media,
            PATH_CONFIG.prod.media,
        ]);
    });

    /* fonts:copy --------------------------------------*/

    gulp.task('fonts:copy', () => {
        return getTask('copy', PATH_CONFIG.src.fonts, [
            PATH_CONFIG.dev.fonts,
            PATH_CONFIG.prod.fonts,
        ]);
    });

    /* json:copy --------------------------------------*/

    gulp.task('json:copy', () => {
        return getTask('copy', PATH_CONFIG.src.json, [PATH_CONFIG.dev.html, PATH_CONFIG.prod.html]);
    });

    /* css:compile ------------------------------------- */

    gulp.task('css', () => {
        return getTask('css-build', PATH_CONFIG.src.sass, [
            PATH_CONFIG.dev.css,
            PATH_CONFIG.prod.css,
        ]);
    });

    /* html:compile ------------------------------------- */

    gulp.task(
        'html',
        gulp.series('svg:inject', () => {
            return getTask('html-build', PATH_CONFIG.src.html_pages, [
                PATH_CONFIG.dev.html,
                PATH_CONFIG.prod.html,
            ]);
        }),
    );

    /* js:compile ------------------------------------- */

    // build app src file

    gulp.task('js:rigger', () => {
        return getTask('js-rigger', PATH_CONFIG.src.js_partials, PATH_CONFIG.src.js);
    });

    gulp.task('webpack', () => {
        return getTask('webpack', PATH_CONFIG.src.js, [PATH_CONFIG.dev.js, PATH_CONFIG.prod.js]);
    });

    // svg build sprite and copy all files to build

    gulp.task(
        'js',
        gulp.series('js:rigger', 'webpack', done => {
            done();
        }),
    );

    /* watchers --------------------------------------*/

    gulp.task(
        'watch:css',
        gulp.parallel('css', () => {
            return getTask('watch', PATH_CONFIG.watch.style, 'css');
        }),
    );

    gulp.task(
        'watch:html',
        gulp.parallel('html', 'browser:sync', () => {
            return getTask(
                'watch',
                [PATH_CONFIG.watch.html, PATH_CONFIG.watch.html_no_svg],
                'html',
            );
        }),
    );

    gulp.task(
        'watch:js',
        gulp.parallel('js', 'browser:sync', () => {
            return getTask('watch', [PATH_CONFIG.watch.js, PATH_CONFIG.watch.js_no_app], 'js');
        }),
    );

    gulp.task(
        'watch:img',
        gulp.parallel('img:optimize', 'browser:sync', () => {
            return getTask('watch', PATH_CONFIG.watch.img, 'img:optimize');
        }),
    );

    gulp.task(
        'watch:svg',
        gulp.parallel('svg:build', 'browser:sync', () => {
            return getTask(
                'watch',
                [PATH_CONFIG.watch.svg, PATH_CONFIG.watch.svg_no_sprite],
                'svg:build',
            );
        }),
    );

    gulp.task(
        'watch',
        gulp.series(
            'files:clean',
            'html',
            'js',
            gulp.parallel(
                'css',
                'svg:copy',
                'fonts:copy',
                'img:optimize-force',
                'media:copy',
                'json:copy',
                'browser:sync',
                () => {
                    getTask('watch', PATH_CONFIG.watch.style, 'css');
                    getTask(
                        'watch',
                        [PATH_CONFIG.watch.html, PATH_CONFIG.watch.html_no_svg],
                        'html',
                    );
                    getTask('watch', [PATH_CONFIG.watch.js, PATH_CONFIG.watch.js_no_app], 'js');
                    getTask('watch', PATH_CONFIG.watch.img, 'img:optimize');
                    getTask(
                        'watch',
                        [PATH_CONFIG.watch.svg, PATH_CONFIG.watch.svg_no_sprite],
                        'svg:build-to-html',
                    );
                },
            ),
        ),
    );

    /* build --------------------------------------*/

    gulp.task(
        'build',
        gulp.series(
            'files:clean',
            gulp.parallel(
                'html',
                'css',
                'js',
                'svg:copy',
                'img:optimize-force',
                'fonts:copy',
                'media:copy',
                'json:copy',
                done => {
                    done();
                },
            ),
        ),
    );

    /* gulp default --------------------------------------*/

    gulp.task('default', gulp.series('watch'), done => {
        done();
    });
};
