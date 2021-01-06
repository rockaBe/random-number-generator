# Example project to publish npm module in different styles

## write es5, 'build' es5
In `v0.0.1` there was no build involved, I simply used `node.js`'s
- `require`
- `module.exports`

to generate a es5 compatible module, that then could get `require`d in any consuming project.

## write es6, build es5
In v0.0.2 I introduced babel to generate a module, that could be written in es6 (using `import`) and processed to es5.

This module could be `import`ed and `require`d (but using `require('moduleName').default`) either way in a consuming project.
