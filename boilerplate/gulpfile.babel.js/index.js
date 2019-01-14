import gulp from 'gulp';
import del from 'del';
import path from 'path';

import buildJS, { watchJS } from './js';
import buildCSS, { watchCSS } from './style';
var workingDir = process.cwd();


const clean = () => del([path.join(workingDir, 'public')]);

/* Clean */

/* Watch */
const watch = gulp.series(clean, gulp.parallel(watchCSS, watchJS));
const build = gulp.series(clean, gulp.parallel(buildCSS, buildJS));


/* Prod Task */
exports.watch = watch;
exports.default = build;