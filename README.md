![joel.fm header](src/images/header_img.jpg)

---
# joel.fm
***by [joél hawkins torres](mailto:joel@joel.fm)***

*professional*:
[https://joel.fm](https://joel.fm) | [**github**/@hwknsj](https://github.com/hwknsj) | [**in**/@hwknsj](https://www.linkedin.com/in/hwknsj) | [**behance**/@hwknsj](https://behance.com/hwknsj)

*lifestyle*:
[https://jpng.info/](https://jpng.info) | [**ig**/@joel.biz](https://instagram.com/joel.biz) | [**soundcloud**/@joelbiz](https://soundcloud.com/joelbiz)

This is the source code to my personal website, [https://joel.fm](https://joel.fm). It's very much a work in progress (and probably always will be). Since this is an entirely personal project, it is ~~*in no way* representative~~ now a closer representation of what I consider to be a "production quality" or "shippable" codebase.

## Technologies

* Gatsby.js (*v3 as of March 2021*) - https://gatsbyjs.org/
* React.js - https://reactjs.org
  * *everything hooks*
* Node.js (`v15`, compatible `>=v12`) - https://nodejs.org/
* Yarn - https://yarnpkg.com/
* emotion – https://emotion.sh/
* polished - https://polished.org/
* ~~Styled-components~~
* ~~PostCss~~
* ~~Stylus (sort of)~~
## Usage guide

Make sure to install the Gatsby-cli `npm install -g gatsby-cli` as well as a recent version of Node and Yarn. This was developed with Node v15 so I can't guarantee it will work properly with very old versions of Node.

### Running development environment
Clone this repo, open it in your terminal, and run `yarn` to install dependencies. Then run `yarn start` to start the gatsby development environment at `http://localhost:8000`.

### Included scripts
In order to run the following formatting / linting scripts, you may need to globally install `eslint`, `prettier`, and `import-sort` which are implemented via `husky`.

* `yarn run format` – formats code according to StandardJS syntax
* `yarn run lint` – runs `eslint` on `src/`
* `yarn run build` – shortcut for `gatsby build`, creates a production version with optimized images, minified files, and all sorts of other optimizations

## Todos
* Write tests
* Page transitions
* ~~migrate to gatsby-plugin-image~~ ✅ v1.1.1

## Changelog
### v1.1.1: 2021-03-04
* Updated gatsby 3.0.0 -> 3.0.2
* Implemented page queries to increase page load performance (as opposed to static queries)
* Migrated to the gatsby 3 recommended `gatsby-plugin-image` over `gatsby-image`
### v1.1.0: 2021-03-03
* Converted all CSS to ~~styled-components~~ emotion
* Cleaned unused files / comments / junk code
* Upgraded to gatsby v3
* Custom `.babelrc` and more coherent `.eslintrc.js`



## Known issues
* ~~There are some files in the repository that are unused in the actual build. I chose to leave them there because they serve as a starting point / reference for features I plan to implement or changes I plan to make. Also it's my website and my repo, so there.~~
* ~~For uBlock Origin users, the cosmetic filtering feature removes some links in the navbar which obnoxiously offsets the site logo and left nav. I'm unsure how to avoid this since uBlock's cosmetic filtering seems to hide any elements with social media links or text.~~
  * Don't use `social-*` in your CSS definitions, easy enough
### Bug bounty program

If you encounter a bug, I offer a $100,000 reward*

*<em>subject to change at any time</em>
