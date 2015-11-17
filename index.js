var fs = require('fs');

module.exports = function(devDependencies, packageJsonFilePath) {
  var buffer, packages, keys;
  
  buffer = fs.readFileSync(packageJsonFilePath || './package.json');
  packages = JSON.parse(buffer.toString());
  keys = [];
  
  for (key in packages.dependencies) {
    keys.push('./node_modules/' + key + '/**/*');
  }

  if (devDependencies) {
    for (key in packages.devDependencies) {
      keys.push('./node_modules/' + key + '/**/*');
    }
  }

  return keys;
};