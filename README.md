[![Build Status](https://travis-ci.org/ovidiubute/scry-css.svg?branch=master)](https://travis-ci.org/ovidiubute/scry-css) [![Coverage Status](https://coveralls.io/repos/github/ovidiubute/scry-css/badge.svg?branch=master)](https://coveralls.io/github/ovidiubute/scry-css?branch=master)

[![NPM](https://nodei.co/npm/scry-css.png)](https://nodei.co/npm/scry-css/)

## Scry-CSS
Suggestion engine for discovering LESS/SASS variables and mixins.

![http://g.recordit.co/Qi5Qv1nR4O.gif](http://g.recordit.co/Qi5Qv1nR4O.gif)

#### Need
As a developer, I want to find all available LESS/SASS variables/mixins from my project/dependencies while I'm working, without going through all of the project files, so that I can increase my productivity.

### How to use scry-css
```scry-css [options] <type> <directory> <files...>```

- options: 
- ```-r``` Reporter, can be JSON or console, default is console
- ```type``` less and (soon) sass
- ```directory``` Path to directory where less/sass variables may be located
- ```files``` List to paths of files, where you wish to use variables

### License
[MIT](https://github.com/ovidiubute/scry-css/blob/master/LICENSE)
