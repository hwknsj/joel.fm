# joel.fm
by **[joél hawkins](mailto:joel@joel.fm)**

This is the source code to my personal website, [https://joel.fm](https://joel.fm). It's very much a work in progress (and probably always will be). Since this is an entirely personal project, it is *in no way* representative of what I consider to be a "production quality" or "shippable" codebase.

## Technologies

* Gatsby.js
* React.js
  * extensive use of React hooks
* Node.js
* Styled-components
* PostCss
* Stylus (sort of)
## Usage guide

Make sure to install the Gatsby-cli `npm install -g gatsby-cli` as well as a recent version of Node and Yarn`. This was developed with Node v15 so I can't guarantee it will work properly with very old versions of Node.

### Running development environment
Clone this repo, open it in your terminal, and run `yarn` to install dependencies. Then run `yarn start` to start the gatsby development environment at `http://localhost:8000`.

### Included scripts
In order to run the following formatting / linting scripts, you may need to globally install `eslint`, `prettier`, and `import-sort`

* `yarn run format` – formats code according to StandardJS syntax
* `yarn run lint` – runs `eslint` on `src/`
* `yarn run build` – shortcut for `gatsby build`, creates a production version with optimized images, minified files, and all sorts of other optimizations

## Todos
* Write tests
* Convert all CSS to styled-components
* Cleanup unused files / comments / junk code

## Known issues
* For uBlock Origin users, the cosmetic filtering feature removes some links in the navbar which obnoxiously offsets the site logo and left nav. I'm unsure how to avoid this since uBlock's cosmetic filtering seems to hide any elements with social media links or text.
* There are some files in the repository that are unused in the actual build. I chose to leave them there because they serve as a starting point / reference for features I plan to implement or changes I plan to make. Also it's my website and my repo, so there.

