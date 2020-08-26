# Deprecated

Canvas Ribbon for [hexo-theme-cake](https://www.dnocm.com/cake/) or all theme. you have to install hexo > 4.2.0 .

A simple example for use [hexo-extend-injector2](https://github.com/jiangtj/hexo-extend-injector2)

## How to use
Add those to `scripts/any.js`
```js
const { injector } = hexo.extend;
// or use hexo-extend-injector2
const injector = require('hexo-extend-injector2')(hexo);

const config = Object.assign({
    size: 300,
    alpha: 0.6,
    zIndex: -1,
    url: '//cdn.jsdelivr.net/gh/theme-next/theme-next-canvas-ribbon@1/canvas-ribbon.js'
}, hexo.config.canvas_ribbon);
let script = `<script id="ribbon" size="${config.size}" alpha="${config.alpha}" zIndex="${config.zIndex}" src="${config.url}"></script>`
injector.register('body_end', script);
```

## Config
```yml
canvas_ribbon:
  size: 300
  alpha: 0.6
  zIndex: -1
  url: //cdn.jsdelivr.net/gh/theme-next/theme-next-canvas-ribbon@1/canvas-ribbon.js
```
