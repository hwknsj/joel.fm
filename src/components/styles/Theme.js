import { Global, css } from '@emotion/react'

// import styled, { createGlobalStyle, css, keyframes } from 'styled-components'
import fonts from './Fonts'
// import styled from '@emotion/styled'

export const theme = {
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
  fontSansSerif: `'CorporateS', sans-serif`,
  fontSerif: `'CorporateA', Georgia, Times, serif`,
  fontMono: `'CorporateS', Menlo, Courier, monospace`,
  fontLight: '200',
  fontNormal: '400',
  fontBold: '700',
  fontHeavy: '800',
  xlarge: '1680px',
  maxWidthXl: this.xlarge,
  large: '1280px',
  maxWidthLg: this.large,
  medium: '980px',
  maxWidthMd: this.medium,
  small: '740px',
  maxWidthSm: this.small,
  xsmall: '480px',
  maxWidthXs: this.xsmall,
  height: '4rem', // TODO: rename
  margin: '2rem', // TODO: rename
  borderRadius: '0.5rem'
}

export const GlobalStylesCss = css`
  ${fonts()};
  html {
    box-sizing: border-box;
    font-size: 10px;
    padding: 0;
    margin: 0;
  }
  body,
  html {
    height: 100%;
    width: 100%;
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
  }
  h1,
  h2,
  h3,
  h4,
  h5 > * {
    font-family: ${({ theme }) => theme.fontFraktur}, sans-serif;
    color: ${theme.black};
  }
  input,
  button,
  option,
  select,
  textarea {
    color: ${theme.altBlack};
    font-family: ${({ theme }) => theme.fontFraktur}, sans-serif;
  }

  /* Layout */
  .site-wrapper {
    padding: 3vw;
    min-height: 100vh;
  }
  @media (max-width: ${({ theme }) => theme.maxWidthSm}) {
    .site-wrapper {
      padding: 6vw;
    }
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
    font-family: ${({ theme }) => theme.fontFraktur}, serif !important;
  }
  .serif {
    font-family: ${({ theme }) => theme.fontSerif}, sans-serif !important;
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
    color: ${props => props.theme.white} !important;
  }
  .blue {
    color: ${props => props.theme.blue} !important;
  }
  .black {
    color: ${props => props.theme.black} !important;
  }
  .alt-black {
    color: ${props => props.theme.altBlack} !important;
  }
  .line-height {
    line-height: ${({ theme }) => theme.lineHeight * 1.2} !important;
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

const GlobalStyles = (globalCss = GlobalStylesCss) => (
  <Global styles={globalCss} />
)

export default GlobalStyles
