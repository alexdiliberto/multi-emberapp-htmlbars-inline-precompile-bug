/* global require, module */
var mergeTrees = require('broccoli-merge-trees');

module.exports = function(defaults) {
  // builds out desktop-app.js & desktop-app.css
  var desktopApp = require('./build/desktop')(defaults);
  // builds out mobile-app.js & mobile-app.css
  var mobileApp  = require('./build/mobile')(defaults);

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  if (process.env.MOBILE) {
    return mobileApp.toTree();
  } else if (process.env.DESKTOP) {
    return desktopApp.toTree();
  } else {
    return mergeTrees([mobileApp.toTree(), desktopApp.toTree()], { overwrite: true });
  }

  return app.toTree();
};
