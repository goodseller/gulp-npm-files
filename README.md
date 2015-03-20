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

// Copy dependencies to build/node_modules/
gulp.task('copyNpmDependenciesOnly', function() {
  gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
});

// Copy dependencies and devDependencies to build/node_modules/
gulp.task('copyAllNpmDependencies', function() {
  gulp.src(gnf(true), {base:'./'}).pipe(gulp.dest('./build));
});

```
## LICENSE

(MIT License)

Copyright (c) 2015 Nipher <github@nipher.com.br>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
