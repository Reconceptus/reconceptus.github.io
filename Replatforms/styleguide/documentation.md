# Frontend Documentation

A documentation for getting into frontend development in california project.

## Getting started

Go to our Gitlab Repositiory -  https://git.votum-media.net/sour/platform - where you can find installation instructions and how to set up your local environment.
additionally have a read at our global confluence documentation https://confluence.votum.info:9443/display/SOUR/Getting+started

## Coding Guidelines

Our projects coding guidelines can be read in confluence: https://confluence.votum.info:9443/pages/viewpage.action?pageId=14319994

## Frontend basics

California project is set up with [Spryker](https://academy.spryker.com/), a "commerce operating system for customer focused companies". Spryker hast two important main parts:

1. ZED - Backend
2. Yves - Frontend

Frontend development will take place in YVES part based on the technologies spryker provides - which are mainly Webpack for building all frontend resources and Twig as template engine.
Yves and Zed are connected through a client service which provides data for Yves.

### -

### Templating

Yves is divided into bundles, which are mainly the features the shop provides, e.g. Product, Catalog, Cart or Checkout. 
Every bundle includes a theme folder where the twig templates are located. 

The Application bundle provides all basic templates:
```bash
// base templates in Application bundle
src/Pyz/Yves/Application/Theme
    
// base layout file with html scaffolding and base layout
src/Pyz/Yves/Application/Theme/default/layout/layout.twig
    
// homepage template is also located in Application bundle
src/Pyz/Yves/Application/Theme/default/index/index.twig
    
// data is provided by YVES controller, in Application bundle e.g.
src/Pyz/Yves/Application/Controller/IndexController.php
```

### -

### Assets

Including all Frontend resources: CSS/SCSS, JS, Images, Fonts and build configuration.

**Asset locations**

```
// build output: static production/distribution assets
// static assets are linked in Application bundle's layout.twig
public/Yves/assets/default
    
// source assets
assets/Yves/default
      
// for building public static assets Webpack2 is used with Oryx as Sprykers asset building tool as addon for Webpack
assets/Yves/default/build
    
// plugin dependencies and build scripts
package.json
```

##### Source asset structure - place to be for frontend development 

- **CSS/SCSS** /assets/Yves/default/app/style
- **Javascript** /assets/Yves/default/app/js
- **Images** /assets/Yves/default/img
- **Translation files** /assets/Yves/default/translations - JSON / containing Spyker translations for using in JS Modules
- **Other files** /assets/Yves/default/files - other static files, e.g. example xls files for download
- **Build configuration** /assets/Yves/default/build - Webpack/Oryx configuration files
- **Documentation files** /assets/Yves/default/documentation - FE Documentation/Styleguide/VueJS component docs

##### JS Entrypoints

These are the applications startpoints containing all needed resources. The build process compiles static production bundles out of that.

```
app.entry.js // global entry file 
styleguide.entry.js // styleguide entry file which contains also styleguide only related stuff
```

##### YARN

As package manager we use YARN. All dependencies shold be installed via **yarn install**. Run the build scripts with **yarn run %script%**

#### Asset building with Webpack and Oryx

**Note:** We use Docker for our development environment (see documentation part about Docker). Run all Script in Dockers command line interface.
(```$ make cli```)

There are several build scripts defined in our package.json:
```
// building all yves assets default mode
"yves": "node ./assets/Yves/default/build",
    
// build and watch yves assets - development mode with watcher
"yves:dev": "node ./assets/Yves/default/build --dev",
    
// build yves assets for production deployment
"yves:prod": "node ./assets/Yves/default/build --prod",
    
// asset building for zed backend (not important - will go to single page application)
"zed": "node ./node_modules/@spryker/oryx-for-zed/build",
"zed:dev": "node ./node_modules/@spryker/oryx-for-zed/build --dev",
"zed:prod": "node ./node_modules/@spryker/oryx-for-zed/build --prod"
```

Webpack/Oryx configuration is located in **assets/Yves/default/build** and has the two entrypoints **app.entry.js** and **styleguide.entry.js**
defined and looks for them before build process. These entry point files contain all resources which shall go into the static bundles (JS and CSS).

For now the difference between both entry points is, that the styleguide entry point contains additionally resources necessary only used in this styleguide.

Check out the detailed documentation for Asset building at Spryker academy: http://spryker.github.io/user-interface/oryx/

### -

## CSS/SCSS

Short introduction to our CSS/SCSS Architecture.

#### OOCSS/INUITCSS

We adopt inuitcss, which is an extensible, scalable, Sass-based, OOCSS framework for large and long-lasting UI projects: https://github.com/inuitcss/inuitcss

#### BEM

http://getbem.com/naming/

We use the BEM methodology for writing CSS/SCSS and markup:

- Block
- Element
- Modifier

```
.block__element--modifier
```

#### Folder / File Structure

We follow the default inuit.css folder structure. All folders and stylesheets are located in **/assets/Yves/default/app/style**

```
/settings: Global variables, site-wide settings, config switches, etc.
/tools: Site-wide mixins and functions.
/generic: Low-specificity, far-reaching rulesets (e.g. resets).
/elements: Unclassed HTML elements (e.g. a {}, blockquote {}, address {}).
/objects: Objects, abstractions, and design patterns (e.g. .o-layout {}).
/components: Discrete, complete chunks of UI (e.g. .c-carousel {}). This is the one layer that inuitcss doesn’t provide code for, as this is completely your terrain.
/utilities: High-specificity, very explicit selectors. Overrides and helper classes
```

Everything defined in **elements, objects, components and utilities** is listed visually in this styleguide following the same navigation structure.

##### Class namespaces

- .o-: Objects
- .c-: Components
- .u-: Utilities

##### app.scss

All stylesheets from our oocss architecture are imported in the main **app.scss**. This is our main entry point for styles and is
required in the **app.entry.js** to go in our project bundle, build by webpack.

##### Styleguide

Additionaly there is a **styleguide** folder which contains the styleguide configuration and theme based on **KSS Node**
https://github.com/kss-node/kss-node.

For more information checkout detailed styleguide documentation later.

#### Media Queries / Breakpoints with Sass MQ

For responsive / mobile development we use the sass mq mixin. it is included as dev dependency node module and imported in the tools layer. For now we use sass mq's default breakpoints: https://github.com/sass-mq/sass-mq

```scss
$mq-breakpoints: (
    mobile:  320px,
            tablet:  740px,
            desktop: 1025px,
            wide:    1300px
) !default;
```

**Usage**

```scss
.element {
  @include mq($from: mobile) {
    color: red;
  }
  @include mq($until: tablet) {
    color: blue;
  }
  @include mq(mobile, tablet) {
    color: green;
  }
  @include mq($from: tablet, $and: '(orientation: landscape)') {
    color: teal;
  }
  @include mq(950px) {
    color: hotpink;
  }
  @include mq(tablet, $media-type: screen) {
    color: hotpink;
  }
  // Advanced use:
  $my-breakpoints: (L: 900px, XL: 1200px);
  @include mq(L, $breakpoints: $my-breakpoints, $static-breakpoint: L) {
    color: hotpink;
  }
}
```

## Javascript

As default Javascript development specification Spryker adopted CommonJS: https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailcommonjs
and basically we follow this approach.

As coding standard we use ECMAScript 6: In PhpStorm go to **Settings > Languages & Frameworks > JavaScript** and change JavaScript language version to ECMAScript 6

#### JS folder structure

- **/assets/Yves/default/app/js/clients** - http request clients using axios / component related
- **/assets/Yves/default/app/js/components** - mostly VueJS modules and some plain JS modules
- **/assets/Yves/default/app/js/directives** - custom directives usable in components
- **/assets/Yves/default/app/js/filters** - custom VueJS filters for using in template parts of vue modules
- **/assets/Yves/default/app/js/helpers** - some js helper modules, e.g. formatter or validations
- **/assets/Yves/default/app/js/plugins** - third party plugins folder
- **/assets/Yves/default/app/js/store** - application store for state management based on vuex
- **/assets/Yves/default/app/js/utilities** - global usable functions, e.g. sorting, scrollhandling, etc...


#### JS Tests

- located in **/tests/js**
- You have to check if this.$store exists (Vuex). Otherwise JS Test will be create a warning / error

```
yarn run tests
```

#### Known issues
- Vue.js > 2.5.4 generates an JS-Test error in VueInputQuantity.vue. Vue.js will updated if 2.6 will released
    

#### Codeception Acceptance Tests

See https://confluence.votum.info:9443/display/SOUR/Acceptance+Tests
