# Installing Composer-UI


## Dependencies

### Node 
`brew install node` (may require sudo)

### Gulp - Task Runner
`npm install -g gulp` (may require sudo)

### Bower - Front-End Package Manager
`npm install -g bower` (may require sudo)

## .gitignored files


In the composer-ui folder, `touch jasmine-active-specs.js`

# Background
Composer UI repo contains code for 2 applications:

- umbrella - aka opendata.arcgis.com
- custom sites - the code that powers any particular site

Much of the code is shared between both applications, but there are enough differences that we have two distinct build processes. 



# Umbrella
Umbrella acts like a traditional "single-page app". In production, it is an index.html + assets, served from S3. Thus to run umbrella locally, we run it from the composer-ui project, and use various configurations to tell it to use different back-end APIs. This allows us to easily develop or test against APIs hosted locally in rails, on opendatadev.arcgis.com, opendataqa.arcgis.com or opendata.arcgis.com.


## Quick Start

- form the composer-ui repo
- clone your fork locally
- cd into the folder
- `npm install`
- `bower install`
- `gulp serve:umb`

That should start a local server, and open a browser at `localui.arcgis.com` serving the umbrella site, that will use  `opendataqa.arcgis.com` as the api. This will also have all necessary `watch`es running so that changes to sass/js/jst files will re-build the css/js/templates and fire a reload to the browser. This is the normal workflow for developing the "umbrella" application.

## Connecting to a Local Rails API

We assume rails is running at `http://localdata.arcgis.com:3000` and that is all configued and working.

### Steps

-  cd into the `composer-ui` directory
- `gulp serve:umb:rails`

Will start a local node server, open a browser at `localui.arcgis.com` serving the umbrella site, that will use  `localdata.arcgis.com` as the api ()


# Custom Sites

Custom sites are currently rendered in Rails, via ERB, with the compiled assets pulled from S3. To run a custom site locally, these are the general steps:

- inform rails of the base asset url - essentially the root of the urls to the images, css, javascript that will be injected into the page
- have composer-ui running in `dist` mode so it's serving the compiled assets

### Steps

- set `assets_url` in application.yml to `//localui.arcgis.com:9100/latest`
- cd into the `composer-ui` folder 
- `gulp serve:ui:rails:dist` serves the compiled assets for ui, configued for a rails api at `dev.localdata.arcgis.com:3000`
- a browser will be opened to a file listing - this just lets yo uknow that the node server is running.
- open `http://dev.localdata.arcgis.com` and the custom site should load up

