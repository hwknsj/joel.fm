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
import { fontDefs } from './Fonts'

export const fontFraktur = `'EskapadeFraktur', eskapade-fraktur, serif`
export const fontSerif = `'CorporateA', corporate-a, Georgia, Times, 'Times New Roman', serif`
const fontSans = `'CorporateS', corporate-s, sans-serif`
const fontMono = `Menlo, Courier, monospace`

// eslint-disable-next-line no-unused-vars
const [fontTitle, fontBody, fontCode] = [fontFraktur, fontSerif, fontMono]

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
  fontFraktur,
  fontTitle: fontFraktur,
  fontSans,
  fontSerif,
  fontBody: fontSerif,
  fontMono,
  fontCode: fontMono,
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
  cubicBezier: 'cubic-bezier(0.4, 0.01, 0.165, 0.99)'
}

// just make some 'aliases'
theme = {
  ...theme,
  maxWidthXs: theme.xsmall,
  maxWidthSm: theme.small,
  maxWidthMd: theme.medium,
  maxWidthLg: theme.large,
  maxWidthXl: theme.xlarge,
  bgColor: theme.colorBg,
  blue: theme.colorPrimary,
  radius: theme.borderRadius,
  navbb: `${theme.transparent} 2px solid`,
  navbbh: `${theme.colorBase} 2px solid`
}

export { theme }

const fonts = fontDefs.map(font => ({ ...font }))

export const globalCss = css`
  ${fonts}
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
    font-size: 10px;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    font-size: 62.5%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    font-size: 1.6rem;
    background: ${theme.colorBg};
  }
  a {
    text-decoration: none;
  }
  :target:before {
    content: '';
    display: block;
    height: 200px;
    margin-top: -200px;
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
    font-family: ${theme.fontFraktur};
    color: ${theme.black};
  }
  input,
  button,
  option,
  select,
  textarea {
    color: ${theme.altBlack};
    font-family: ${theme.fontFraktur};
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
