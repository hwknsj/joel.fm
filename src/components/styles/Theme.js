import { Global, css } from '@emotion/react'
import { darken } from 'polished'
import React, { memo } from 'react'

import actions from './css/actions'
import animations from './css/animations'
import buttons from './css/buttons'
import forms from './css/forms'
import ghost from './css/ghost'
import grid from './css/grid'
import hamburger from './css/hamburger'
import helpers from './css/helpers'
import lists from './css/lists'
import reset from './css/reset'
import screen from './css/screen'
import tables from './css/tables'
import { fontFaces } from './Fonts'

export const fontFraktur = `'EskapadeFraktur', eskapade-fraktur, serif`
export const fontSerif = `'CorporateA', corporate-a, Times, 'Times New Roman', Georgia, serif`
const fontSans = `'CorporateS', corporate-s, 'Helvetica Neue', Helvetica, sans-serif`
const fontMono = `Menlo, Courier, monospace`

const [sans, serif, mono] = [fontSans, fontSerif, fontMono]
// eslint-disable-next-line no-unused-vars
const [fontTitle, fontBody, fontCode] = [fontFraktur, fontSerif, fontMono]
const [fraktur, body, code] = [fontFraktur, serif, mono]
const title = fraktur

const bp = [480, 740, 980, 1280, 1680]
// eslint-disable-next-line no-unused-vars
const breakpoints = {
  xsmall: '480px',
  small: '740px',
  medium: '980px',
  large: '1280px',
  xlarge: '1680px',
  maxWidthXs: `${bp[0]}px`,
  maxWidthSm: `${bp[1]}px`,
  maxWidthMd: `${bp[2]}px`,
  maxWidthLg: `${bp[3]}px`,
  maxWidthXl: `${bp[4]}px`
}
// eslint-disable-next-line no-unused-vars
const colors = {
  primary: '#0A48DD',
  secondary: '#6A6A6A',
  base: '#131313',
  colorBase: '#131313',
  border: '#ddd',
  colorBorder: '#ddd',
  text: {
    primary: '#131313',
    secondary: '#9e9e9e',
    light: '#9e9e9e',
    alt: '#E1E1E1'
  },
  white: '#ffffff',
  lightGrey: '#E1E1E1',
  offWhite: '#FAFAFA',
  black: '#1E1E1F',
  altBlack: '#393939',
  nikeBlack: '#111111',
  trueBlack: '#000000',
  transparent: 'rgba(0, 0, 0, 0)',
  bg: '#ffffff',
  colorBg: '#ffffff',
  background: '#ffffff',
  light: '#9e9e9e',
  colorLight: '#9e9e9e'
}
// eslint-disable-next-line no-unused-vars
const layout = {
  body: {
    padding: {
      xs: '0vw',
      sm: '6vw',
      md: '3vw',
      lg: '3vw',
      xl: '3vw'
    }
  }
}
// eslint-disable-next-line no-unused-vars
const typeography = {
  fraktur,
  fontFraktur: fraktur,
  title,
  fontTitle: title,
  sans,
  fontSans: sans,
  serif,
  fontSerif,
  body,
  fontBody: body,
  mono,
  fontMono: mono,
  code,
  fontCode: code,
  fontLight: '200',
  fontNormal: '400',
  fontBold: '500',
  fontHeavy: '800',
  weight: {
    light: '200',
    normal: '400',
    bold: '500',
    heavy: '800'
  },
  lineHeight: '2'
}

let theme = {
  bodyPadding: '3vw',
  bodyPaddingSm: '6vw',
  blue: '#0A48DD',
  colorPrimary: '#0A48DD',
  colorBase: '#131313',
  colorBorder: '#ddd',
  white: '#ffffff',
  lightGrey: '#E1E1E1',
  offWhite: '#FAFAFA',
  color: '#1f1f1f',
  black: '#1E1E1F',
  altBlack: '#393939',
  nikeBlack: '#111111',
  trueBlack: '#000000',
  transparent: 'rgba(0, 0, 0, 0)',
  colorBg: '#ffffff',
  colorLight: '#9e9e9e',
  fraktur,
  fontFraktur,
  title,
  fontTitle,
  sans,
  fontSans,
  serif,
  fontSerif,
  body,
  fontBody: serif,
  mono,
  fontMono,
  code,
  fontCode: mono,
  fontLight: '200',
  fontNormal: '400',
  fontBold: '500',
  fontHeavy: '800',
  lineHeight: '2',
  xlarge: '1680px',
  large: '1280px',
  medium: '980px',
  small: '740px',
  xsmall: '480px',
  height: '4rem',
  margin: '2rem',
  borderRadius: '0.5rem',
  bb: `#131313 2px solid`, // border-bottom hover
  bbh: `#1E1E1F 2px solid`, // border-bottom hover
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)', // box-shadow
  bsh: '0 12px 24px 0 rgba(0, 0, 0, 0.2)', // box-shadow:hover
  cubicBezier: 'cubic-bezier(0.4, 0.01, 0.165, 0.99)',
  colors,
  layout,
  typeography
}

// just make some 'aliases'
theme = {
  ...theme,
  maxWidthXs: theme.xsmall,
  maxWidthSm: theme.small,
  maxWidthMd: theme.medium,
  maxWidthLg: theme.large,
  maxWidthXl: theme.xlarge,
  bgColor: theme.colors.background,
  blue: theme.colorPrimary,
  radius: theme.borderRadius,
  navbb: `${theme.transparent} 2px solid`,
  navbbh: `${theme.colors.base} 2px solid`
}

export { theme }

export const globalCss = css`
  ${fontFaces}
  ${helpers(theme)};
  ${reset(theme)};
  ${ghost(theme)};
  ${lists(theme)};
  ${grid(theme)};
  ${tables(theme)};
  ${forms(theme)};
  ${buttons(theme)};
  ${actions(theme)};
  ${hamburger(theme)};
  ${animations};
  ${screen(theme)};
  html {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    font-size: 10px;
    font-size: 62.5%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    font-size: 1.6rem;
    background: ${theme.colors.background};
  }
  a {
    text-decoration: none;
  }
  :target:before {
    content: '';
    display: block;
    height: 20rem;
    margin-top: -20rem;
  }
  .post-content {
    a {
      text-decoration: none;
      color: ${theme.colorPrimary};
      transition: color 0.4s ${theme.cubicBezier},
        opacity 0.4s ${theme.cubicBezier},
        text-decoration 0.3s ${theme.cubicBezier} !important;
      &:hover {
        color: ${darken(0.2, theme.colorPrimary)};
      }
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${theme.typeography.fraktur};
    color: ${theme.black};
  }
  input,
  button,
  option,
  select,
  textarea {
    color: ${theme.altBlack};
    font-family: ${theme.typeography.fraktur};
  }
  blockquote,
  q {
    font-style: italic;
    span,
    a {
      font-style: normal;
    }
  }
`

const GlobalStylesMemo = memo(() => <Global styles={globalCss} />)
GlobalStylesMemo.displayName = `GlobalStyles`
export default GlobalStylesMemo
