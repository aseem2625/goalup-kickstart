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
goalup-kickart project_name
cd project_name
``` 


<br />

----

### Features Supported
- es6+ JS
- CSS preprocessor (stylus)
- CSS auto-prefixers
- Template engine and partials (.pug)
- Data reading (.json / .yml)
- Production-ready build (Minification + File hashing)
- Lazy load images (+ Option to provide placeholder low quality image)
- static file serving (Copied as it is to build folder. Use goalup-minify in case you need to minify assets inside)
- sitemap and robot.txt
- Dynamic pages from data (Helpful in creating pages with similar content FB share)
- FE auto-redirect script
- Pretty Urls (Directy Indexes)
- Get gzipped versions of assets HTML, CSS, Javascript and other files.


### Full control on how files are bundled.
- (Internal + External CSS + External source CSS) + Helper CSS files
- (JS in html + External JS + External source JS) + Reusable JS helpers
- Common banner and footer across pages + Escape it on some pages
- Boilerplate generated is fully extendible/modifiable

<br />

----- 

<br />


### Further TODOs:
- Production-ready build - Add support for Environment variables
- CSS preprocessors - Add option to use sass
- Add support markdown
- Live-reloading
- Unit testing (chai + mocha)
- ESLint
- CSSLint


### Kudos!
Kudos is an amazing way to exchange appreciation for the and inspire others. 
<br />
Using goalup-kickstarter in public projects? Add url below!



### Further Reads!
- Study the code organization for CSS and JS in boilerplate to see how you can manage yours.
- Study DOM elements of boilerplate web page for Fast page load times.
- Animation Optimizations / Sequencing.
- Lighthouse for page loading speeds.
- PWA.
- Workbox.
- GA events.
- Cross browser Testing! [Browserstack](http://browserstack.com/)
- For IE 8 support, use [es5-shims](https://github.com/es-shims/es5-shim)


### Further Goals:
- Check goalup-tour and goalup-snackbar if you need.
- Check out goalup-css for UI Elements


https://middlemanapp.com/basics/frontmatter/
https://github.com/middleman/middleman
https://github.com/cveneziani/middleman-boilerplate
https://github.com/vigetlabs/blendid
https://github.com/jbrodriguez/hugulp