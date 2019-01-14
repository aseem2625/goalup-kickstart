import gulp from 'gulp';
import del from 'del';
import path from 'path';
import pump from 'pump';

import { watchJs } from './js';
var workingDir = process.cwd();

export const paths = {
  scripts: {
    src: 'source/scripts/**/*.js',
    dest: 'assets/scripts/'
  }
};

const clean = () => del([path.join(workingDir, 'public')]);

/* Clean */

/* Watch */
const watch = gulp.series(clean, watchJs);


/* Prod Task */
exports.watch = watch;