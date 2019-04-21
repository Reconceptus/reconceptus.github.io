module.exports = {
    build: {
        html: 'public/',                              /* path to ready htmls */
        js: 'public/js/',                                  /* path to ready js */
        css: 'public/css/',                                /* path to ready css */
        img: 'public/images/',                             /* path to ready images */
        media: 'public/media/',                            /* path to ready media-files */
        svg: 'public/svg/',                                /* path to ready svg */
        fonts: 'public/fonts/'                             /* path to ready fonts */
    },
    src: {
        common: 'resources/',                                 /* path to source folder */
        svg: 'resources/svg/',                                /* path to source svg folder */
        svg_sprite: 'resources/svg/sprite/*.svg',             /* path to source svg sprite files */
        svg_files: 'resources/svg/**/*.svg',                  /* path to source all svg files */
        media: 'resources/media/**/*.*',                      /* path to source media files */
        fonts: 'resources/fonts/**/*.*',                      /* path to source fonts folder */
        js: 'resources/js/',                                  /* path to source js folder */
        html_templates: 'resources/_code/templates/',         /* path to source html all files */
        html_pages: 'resources/_code/pages/*.html',           /* path to source html page-files */
        sass: 'resources/sass/**/*.+(sass|scss)',             /* path to source sass files */
        img: 'resources/images/**/*.+(jpg|jpeg|png|gif)'      /* path to source images files */
    },
    watch: {
        html: 'resources/_code/**/*.html',                    /* path for watch html files */
        html_no_svg: '!resources/_code/**/sprite-svg.html',   /* path for exclude sprite-svg template */
        js: 'resources/js/**/*.js',                           /* path for watch js files */
        style: 'resources/sass/**/*.scss',                    /* path for watch sass files */
        svg: 'resources/svg/**/*.svg',                        /* path for watch svg files */
        img: 'resources/images/**/*.+(jpg|jpeg|png|gif)'      /* path for watch image files */
    },
    clean: 'public/',                                    /* path for browsersync directory */
    port: '6060'
};