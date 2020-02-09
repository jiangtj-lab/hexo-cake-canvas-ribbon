/* global hexo */

'use strict';

const utils = require('hexo-cake-utils')(hexo, __dirname);
const injector = require('hexo-extend-injector2')(hexo);

let config = utils.defaultConfigFile('canvas_ribbon', 'default.yaml');
let script = `<script id="ribbon" size="${config.canvas_ribbon.size}" alpha="${config.canvas_ribbon.alpha}" zIndex="${config.canvas_ribbon.zIndex}" src="${config.canvas_ribbon.url}"></script>`
injector.register('bodyEnd', script);
