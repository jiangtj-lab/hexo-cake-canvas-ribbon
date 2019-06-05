/* global hexo */

'use strict';

const path = require('path');
const utils = require('./utils');

hexo.extend.filter.register('theme_inject', function(injects) {
  utils.defaultConfigFile(hexo, 'canvas_ribbon', path.join(__dirname, 'default.yaml'))
  injects.bodyEnd.file('canvas-ribbon', path.join(__dirname, 'canvas-ribbon.swig'), {}, {cache: true});
});
