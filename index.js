/* global hexo */

'use strict';

const utils = require('./utils')(hexo, __dirname);

hexo.extend.filter.register('theme_inject', function(injects) {
  utils.defaultConfigFile('canvas_ribbon', 'default.yaml');
  injects.bodyEnd.file('canvas-ribbon', utils.getFilePath('canvas-ribbon.swig'), {}, {cache: true});
});
