# hexo-cake-canvas-ribbon

Canvas Ribbon for [hexo theme cake](https://www.dnocm.com/cake/)

[![Theme](https://img.shields.io/badge/Theme-Cake:1.1.0-blue.svg)](https://github.com/jiangtj/hexo-theme-cake)

## How to use
```bash
yarn add hexo-cake-canvas-ribbon
```

## Config
You can config by `canvas_ribbon` in `hexo` `theme` or `data` config files, and [here](default.yaml) is default config file.

In hexo or theme:
```yml
canvas_ribbon:
  size: 300
  alpha: 0.6
  zIndex: -1
  url: //cdn.jsdelivr.net/gh/theme-next/theme-next-canvas-ribbon@1/canvas-ribbon.js
```

In data file:
```yml
size: 300
alpha: 0.6
zIndex: -1
url: //cdn.jsdelivr.net/gh/theme-next/theme-next-canvas-ribbon@1/canvas-ribbon.js
```

## Debug
```bash
# init this project
yarn install
yarn link
# get example
git clone --recursive git@github.com:jiangtj-lab/hexo-theme-cake-example.git example
cd example
yarn install
# take hexo-cake-canvas-ribbon to example
yarn add hexo-cake-canvas-ribbon
yarn link hexo-cake-canvas-ribbon
# run, see http://localhost:4000
hexo s
```
