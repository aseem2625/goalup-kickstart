<p align="center">	
  <p align="center">
  	<b>Kickstarter CLI</b> for your static-websites with best practices. <b>Easily extendible!</b>
  </p>
</p>

## What is goalup-kickstart?
A CLI tool to generate <b>Simple and Lightweight</b> boilerplate with standard web practices, with gulp blended underneath. 

Serve your web pages in Vintage style, and with Full-control on What and How your CSS and JS bundles with each route in a structured way. And Production-run simply bakes your static website ready to be served.
<br />

**(WIP: Work recently started. Watch out the space.)**

## Installation:

```sh
npm install -g goalup-kickstart
```

## Getting Started:

```sh
goalup-kickart new project_name
cd project_name
``` 


<br />

----

### Features Supported
- es6+ JS
- CSS preprocessor (stylus) and auto-prefixers
- Template engine and partials (.pug)
- Data reading (.yml)
- Production-ready build (Minification + File hashing)
- Lazy load images (+ Option to provide placeholder low quality image)
- static file serving (Copied directly to build folder. Use goalup-minify in case you need to minify assets inside)
- sitemap and robot.txt
- FE auto-redirect script
- Pretty Urls (Directory Indexes)
- Get gzipped versions of assets HTML, CSS, Javascript and other files.


### Full control on how files are bundled.
- (Internal + External CSS + External source CSS) + Helper CSS files
- (JS in html + External JS + External source JS) + Reusable JS helpers
- Common banner and footer across pages + Escape it on some pages
- Boilerplate generated is fully extendible/modifiable

<br />

----- 

<br />


### Scope for this boilerplate:
- Production-ready build - Add support for Environment variables
- Add support markdown
- Live-reloading
- Unit testing (chai + mocha)
- Puppeteer test to check all routes are loaded fine without JS/CSS errors.
- ESLint
- CSSLint



### Next Steps for You!
- Animation Optimizations / Sequencing
- Lighthouse for page loading speeds
- PWA
- Workbox
- GA events
- Polyfills
- Cross browser Testing! [Browserstack](http://browserstack.com/)
- For IE 8 support, use [es5-shims](https://github.com/es-shims/es5-shim)


### Kudos!
Kudos is an amazing way to exchange appreciation for the project and inspire others. 
<br />
Using goalup-kickstarter in public projects? Add url below!


### Further Goals with goalups:
- goalup-tour 
- goalup-snackbar


https://middlemanapp.com/basics/frontmatter/
https://github.com/middleman/middleman
https://github.com/cveneziani/middleman-boilerplate
https://github.com/vigetlabs/blendid
https://github.com/jbrodriguez/hugulp
