import { Global, css } from '@emotion/react'
import facepaint from 'facepaint'

// import styled, { createGlobalStyle, css, keyframes } from 'styled-components'
import fonts from './Fonts'

// import styled from '@emotion/styled'

export const theme = {
  bodyPadding: '3vw',
  bodyPaddingSm: '6vw',
  colorPrimary: '#0A48DD',
  colorBase: '#131313',
  colorBorder: '#ddd',
  /* color-bg: '#f8f8f8', */
  white: '#ffffff',
  lightGrey: '#E1E1E1',
  offWhite: '#FAFAFA',
  black: '#1E1E1F',
  altBlack: '#393939',
  // altBlack: '#333',
  colorBg: '#ffffff',
  colorLight: '#9e9e9e',
  fontFraktur: `'EskapadeFraktur', serif`,
  fontSans: `'CorporateS', sans-serif`,
  fontSerif: `'CorporateA', Georgia, Times, serif`,
  fontMono: `Menlo, Courier, monospace`,
  fontLight: '200',
  fontNormal: '400',
  fontBold: '700',
  fontHeavy: '800',
  lineHeight: '2',
  xlarge: '1680px',
  large: '1280px',
  medium: '980px',
  small: '740px',
  xsmall: '480px',
  height: '4rem', // TODO: rename
  margin: '2rem', // TODO: rename
  borderRadius: '0.5rem',
  bb: `#131313 2px solid`, // border-bottom hover
  bbh: `#1E1E1F 2px solid`, // border-bottom hover
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  bsh: '0 12px 24px 0 rgba(0, 0, 0, 0.2)'
}

// just make some 'aliases'
theme.maxWidthXs = theme.xsmall
theme.maxWidthSm = theme.small
theme.maxWidthMd = theme.medium
theme.maxWidthLg = theme.large
theme.maxWidthXL = theme.xlarge
theme.bgColor = theme.colorBg

// const lineHeightMixin = multiplier => `line-height: ${theme.lineHeight * multiplier}`

export const breakpoints = {
  xs: theme.maxWidthXs,
  sm: theme.maxWidthSm,
  md: theme.maxWidthMd,
  lg: theme.maxWidthLg,
  xl: theme.maxWidthXL
}

export const breakpointsArray = Object.values(breakpoints)

// media queries
export const mq = bp => `@media (max-width: ${breakpoints[bp]}px)`
// usage: (in css`` or styled`` context: ${mq(sm)} { ... }

export const mqFp = facepaint(
  breakpointsArray.map(bp => `@media (max-width: ${bp}px)`)
)
// usage: css` mqFp({ css-property: [ 'cssValueXs', 'cssValueSm', 'cssValueMd', ...]}) `

export const globalCss = css`
  ${fonts};
  html {
    box-sizing: border-box;
    font-size: 10px;
    padding: 0;
    margin: 0;
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
    color: ${theme.colorBase};
    font-family: ${theme.fontFraktur};
    &:hover {
      color: ${theme.black};
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5 > * {
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

  /* some helper classes */
  .img {
    display: block;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    border-radius: 100%;
  }

  .hidden {
    visibility: hidden;
    position: absolute;
    text-indent: -9999px;
  }

  .bold {
    font-weight: bold !important;
  }
  .italic {
    font-style: italic !important;
  }
  .fraktur {
    font-family: ${theme.fontFraktur} !important;
  }
  .serif {
    font-family: ${theme.fontSerif} !important;
  }
  .sans-serif {
    font-family: ${theme.fontSans} !important;
  }
  .inline {
    display: inline !important;
  }
  .block {
    display: block !important;
  }
  .center-x {
    margin: 0 auto !important;
    text-align: center !important;
  }
  .white {
    color: ${theme.white} !important;
  }
  .blue {
    color: ${theme.blue} !important;
  }
  .black {
    color: ${theme.black} !important;
  }
  .alt-black {
    color: ${theme.altBlack} !important;
  }
  .p0 {
    padding: 0 !important;
  }
  .p2 {
    padding: 2rem !important;
  }
  .py-1 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .px-1 {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
`

const GlobalStyles = () => <Global styles={globalCss} />

export default GlobalStyles
