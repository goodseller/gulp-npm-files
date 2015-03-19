# gulp-npm-files

Gulp plugin for listing package.json dependencies

## Get started

### Install

```
npm install gulp-npm-files
```

### Examples

```javascript
var gulp = require('gulp');
var gnf = require('gulp-npm-files');

// Copy all dependencies to build/node_modules/
gulp.task('moveNpmDependenciesOnly', function() {
  gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
});

// Copy all dependencies and devDependencies to build/node_modules/
gulp.task('moveAllNpmDependencies', function() {
  gulp.src(gnf(true), {base:'./'}).pipe(gulp.dest('./build));
});

```
