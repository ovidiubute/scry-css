[![Build Status](https://travis-ci.org/ovidiubute/scry-css.svg?branch=master)](https://travis-ci.org/ovidiubute/scry-css) [![Coverage Status](https://coveralls.io/repos/github/ovidiubute/scry-css/badge.svg?branch=master)](https://coveralls.io/github/ovidiubute/scry-css?branch=master)

[![NPM](https://nodei.co/npm/scry-css.png)](https://nodei.co/npm/scry-css/)

## Scry-CSS
Command line tool useful for discovering LESS/SASS variables and mixins in large scale projects.

![demo.gif](demo.gif)

### Need

````gherkin
As a developer
I want to find all available LESS/SASS variables/mixins from my project/dependencies 
while I'm working, without going through all of the project files
So that I can increase my productivity.
```

### What's this all about?
This tool is useful in large projects that make heavy use of LESS or SASS variables and mixins. Onboarding new members in such projects is often difficult because of lack of documentation, and this can lead to developers rewriting their own LESS/SASS variables due to insufficient knowledge of the project. This is both counterproductive and dangerous because your project may have a style guide that you wish to enforce. 

Imagine a scenario where your devs just write the code that they want, and during a code review, you run `scry-css` to find out if they followed your project's style guide or not (ideally they'd run the tool during development, though). This leads to a more interactive learning experience compared to the old way of forcing them to read the documentation or all of your "base" CSS files beforehand. 

### How to use scry-css
```npm install -g scry-css```
```scry-css [options] <type> <directory> <files...>```

Command line options: 
- ```-r```: How to report results, options are `json` or `console`, the default is `console` and will output to stdout
- ```type```: The CSS dialect used, options are `less` and `sass` 
- ```directory```: Absolute path to the directory where less/sass variables/mixins are located
- ```files```: List of absolute paths to your working files, separated by spaces

### Contribute
Pull requests are very appreciated :-)

### FAQ
Q: I don't get it. I use Sublime/WebStorm/Atom and I just type `@` and I get variables suggested. Why would I use your tool?

A: If you're happy with your IDE in control, then that's fine. I used to rely on my IDE for everything, too. But how does an IDE help you review somebody else's code? Do you checkout his branch locally and verify it? Are you absolutely sure your IDE suggests variables that are inside `node_modules`? This tool is IDE agnostic and can be run in a CI environment using the `json` reporter option. It is a much more flexible solution that can be expanded further (see the Github Issues tab for my vision).

Q: How are variables suggested?

A: I use the fuzzy search algorithm supplied by ***fuzzaldrin***

Q: I think the name of a variable is not enough for it to be suggested. Any plans on including the value of the variable too?

A: Yes, there are plans. Watch the [Issues](https://github.com/ovidiubute/scry-css/issues) in GitHub for more info.

## License
This project uses the [MIT](https://github.com/ovidiubute/scry-css/blob/master/LICENSE) license.
