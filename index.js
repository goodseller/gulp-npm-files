var fs = require('fs');

var arrayContains = function(a, obj) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] === obj) {
      return true;
    }
  }
  return false;
};

var getDependenciesGlob = function(devDependencies, packageJsonFilePath) {
  var buffer, packages, keys;
  
  buffer = fs.readFileSync(packageJsonFilePath || './package.json');
  packages = JSON.parse(buffer.toString());
  keys = [];
  
  for (key in packages.dependencies) {
    if (!arrayContains(keys, key)) {
      keys.push('./node_modules/' + key + '/**/*');
      keys = keys.concat(getDependenciesGlob(devDependencies, './node_modules/' + key + '/package.json'));
    }
  }

  if (devDependencies) {
    for (key in packages.devDependencies) {
      if (!arrayContains(keys, key)) {
        keys.push('./node_modules/' + key + '/**/*');
        keys = keys.concat(getDependenciesGlob(devDependencies, './node_modules/' + key + '/package.json'));
      }
    }
  }

  return keys;
};

module.exports = getDependenciesGlob;
