# joel.fm
by **[joél hawkins](mailto:joel@joel.fm)**

This is the source code to my personal website, [https://joel.fm](https://joel.fm). It's very much a work in progress (and probably always will be). Since this is an entirely personal project, it is ~~*in no way* representative~~ now a closer representation of what I consider to be a "production quality" or "shippable" codebase.

## Technologies

* Gatsby.js
* React.js
  * extensive use of React hooks
* Node.js
* Styled-components
* PostCss
* Stylus (sort of)
## Usage guide

Make sure to install the Gatsby-cli `npm install -g gatsby-cli` as well as a recent version of Node and Yarn. This was developed with Node v15 so I can't guarantee it will work properly with very old versions of Node.

### Running development environment
Clone this repo, open it in your terminal, and run `yarn` to install dependencies. Then run `yarn start` to start the gatsby development environment at `http://localhost:8000`.

### Included scripts
In order to run the following formatting / linting scripts, you may need to globally install `eslint`, `prettier`, and `import-sort`

* `yarn run format` – formats code according to StandardJS syntax
* `yarn run lint` – runs `eslint` on `src/`
* `yarn run build` – shortcut for `gatsby build`, creates a production version with optimized images, minified files, and all sorts of other optimizations

## Todos
* Write tests
* migrate to gatsby-plugin-image

## Changelog
v1.1.0: 2021-03-03
* Converted all CSS to ~~styled-components~~ emotion
* Cleaned unused files / comments / junk code
* Upgraded to gatsby v3
* Custom `.babelrc` and more coherent `.eslintrc.js`


## Known issues
* There are some files in the repository that are unused in the actual build. I chose to leave them there because they serve as a starting point / reference for features I plan to implement or changes I plan to make. Also it's my website and my repo, so there.
* ~~For uBlock Origin users, the cosmetic filtering feature removes some links in the navbar which obnoxiously offsets the site logo and left nav. I'm unsure how to avoid this since uBlock's cosmetic filtering seems to hide any elements with social media links or text.~~
  * Don't use `social-*` in your CSS definitions, easy enough
* gatsby says it's all cool with webpack v5, and yet
```sh
warning "gatsby > webpack-dev-server > webpack-dev-middleware@3.7.2" has incorrect peer dependency "webpack@^4.0.0".
```
