/*--- instructions ---*/

npm install
npm install stylefmt
npm install css-mqpacker

/*--- bower ---*/

npm i -g bower
npm i -g preen

bower install       install bower packages
preen               remove unneeded plugin's files

/*--- one-use commands ---*/
gulp svgstore       compile svg sprite (after in sprite.svg reformat code)
gulp imagemin       images optimization

gulp includer:html  compile html from templates
gulp rigger:js      compile js from libs and scripts
gulp watch          compile all sass and browsersync in localhost

