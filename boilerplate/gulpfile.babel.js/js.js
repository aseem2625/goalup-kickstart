import * as rollup from 'rollup';
import path from 'path';
import glob from 'glob';
import include from 'rollup-plugin-includepaths';

import buble from 'rollup-plugin-buble';

const plugins = [
  include({
    paths: ['source/js/helpers']
  }),
  buble()
];


// Config for single .js file
const watchOptions = file => ({
  input: file,
  output: {
    format: 'iife',
    file: path.join('public', path.parse(file).base),
    name: 'window'
  },
  plugins
});

// Configs for all files in glob (async)
let rollupConfig;
glob('source/js/*.js', function(er, files) {
  rollupConfig = files.map(watchOptions);
});


/**/

export function watchJs(cb) {
  rollupConfig.forEach(config =>
    rollup.watch(config).on('event', e => {
      switch (e.code) {
        case 'BUNDLE_END':
          console.log(
            `Generated ${path.parse(e.output[0]).base} in ${e.duration} ms`
          );
          break;
        case 'ERROR':
        case 'FATAL':
          console.log(e);
          break;
      }
    })
  );

}