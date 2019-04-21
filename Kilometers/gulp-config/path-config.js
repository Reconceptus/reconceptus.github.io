module.exports = {
    build: {
        html: 'dev/',                                   /* path to ready htmls */
        js: 'dev/assets/js/',                           /* path to ready js */
        css: 'dev/assets/css/',                         /* path to ready css */
        img: 'dev/assets/images/',                      /* path to ready images */
        media: 'dev/assets/media/',                     /* path to ready media-files */
        svg: 'dev/assets/svg/',                         /* path to ready svg */
        fonts: 'dev/assets/fonts/'                      /* path to ready fonts */
    },
    src: {
        common: 'src/',                                 /* path to source folder */
        svg: 'src/svg/',                                /* path to source svg folder */
        svg_sprite: 'src/svg/sprite/*.svg',             /* path to source svg sprite files */
        svg_files: 'src/svg/**/*.svg',                  /* path to source all svg files */
        media: 'src/media/**/*.*',                      /* path to source media files */
        fonts: 'src/fonts/**/*.*',                      /* path to source fonts folder */
        js_partials: 'src/js/partials/',                 /* path to source js partials folder */
        js: 'src/js/',                                  /* path to source js folder */
        html_templates: 'src/_code/templates/',         /* path to source html all files */
        html_pages: 'src/_code/pages/*.html',           /* path to source html page-files */
        sass: 'src/sass/**/*.+(sass|scss)',             /* path to source sass files */
        img: 'src/images/**/*.+(jpg|jpeg|png|gif)'      /* path to source images files */
    },
    watch: {
        html: 'src/_code/**/*.html',                    /* path for watch html files */
        html_no_svg: '!src/_code/**/sprite-svg.html',   /* path for exclude sprite-svg template */
        js: 'src/js/**/*.js',                           /* path for watch js files */
        js_no_app: '!src/js/**/app.js',                 /* path for exclude app js file */
        style: 'src/sass/**/*.scss',                    /* path for watch sass files */
        svg: 'src/svg/**/*.svg',                        /* path for watch svg files */
        img: 'src/images/**/*.+(jpg|jpeg|png|gif)'      /* path for watch image files */
    },
    clean: 'dev/',                                    /* path for browsersync directory */
    port: '6061'
};