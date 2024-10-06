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

* Gatsby.js (*v5 as of 2024*) - https://gatsbyjs.org/
* React.js (v18.3.1) - https://reactjs.org
  * *everything hooks*
* Node.js (`v20+`) - https://nodejs.org/
* Yarn 4 - https://yarnpkg.com/
* emotion – https://emotion.sh/
* polished - https://polished.org/

## Usage guide

Clone then `yarn && yarn dev`

### Running development environment
Clone this repo, open it in your terminal, and run `yarn` to install dependencies. Then run `yarn start` to start the gatsby development environment at `http://localhost:8000`.

### Included scripts

* `yarn run format` – format with prettier
* `yarn run lint` – run `eslint` on `src/`
* `yarn run build` – shortcut for `gatsby build`, creates a production version with optimized images, minified files, and all sorts of other optimizations

## Todos
* Optimize font files–why is this so difficult with Gatsby? I have beef with the Gatsby devs because there are several sources/doc pages that give conflicting advice on how to serve local fonts. Not everybody uses *Inter*!
* update content because it's so old.

## Changelog
### v1.4.0: 2024-09-03
* converted codebase to typescript
* upgrade to Gatsby v5, latest node, latest react (v18.3.x)
* update assets (resume, font files)
* do away with annoying useless tooling like husky and lint-staged and prettier, other unused packages.
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
* (2024-09-03) still not convinced fonts are loading on all devices. Hard to find any tools to test this (e.g. block/allow use of local fonts with devtools for debugging, restrict fetching remote fonts, formats to use, or best implementation, `@font-face` vs other methods)
* ~~There are some files in the repository that are unused in the actual build. I chose to leave them there because they serve as a starting point / reference for features I plan to implement or changes I plan to make. Also it's my website and my repo, so there.~~
* ~~For uBlock Origin users, the cosmetic filtering feature removes some links in the navbar which obnoxiously offsets the site logo and left nav. I'm unsure how to avoid this since uBlock's cosmetic filtering seems to hide any elements with social media links or text.~~
  * Don't use `social-*` in your CSS definitions, easy enough

### Bug bounty program

If you encounter a bug, I offer a $100,000 reward*

*<em>subject to change at any time</em>
