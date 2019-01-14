import gulp from 'gulp';
import del from 'del';
import path from 'path';
import pump from 'pump';

import buildJS, { watchJs } from './js';
var workingDir = process.cwd();


const clean = () => del([path.join(workingDir, 'public')]);

/* Clean */

/* Watch */
const watch = gulp.series(clean,watchJs);
const build = gulp.series(clean, buildJS);


/* Prod Task */
exports.watch = watch;
exports.default = build;