import gulp from 'gulp';
import del from 'del';
import path from 'path';

import buildJS, { watchJS } from './js';
import buildCSS, { watchCSS } from './css';
import buildPug, { watchPug } from './html';

const workingDir = process.cwd();

// src paths to be in common obj


const clean = () => del([path.join(workingDir, 'public')]);

/* Clean */

/* Watch */
const watch = gulp.series(clean, gulp.parallel(watchCSS, watchJS, watchPug));
const build = gulp.series(clean, gulp.parallel(buildCSS, buildJS, buildPug));


/* Prod Task */
exports.watch = watch;
exports.default = build;