import styled, { createGlobalStyle, css, keyframes } from 'styled-components'

export const theme = {
  colorPrimary: 'rgb(10, 72, 221)',
  colorBase: '#131313',
  colorBorder: '#ddd',
  /* color-bg: '#f8f8f8', */
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
  large: '1280px',
  medium: '980px',
  small: '740px',
  xsmall: '480px',
  height: '4rem',
  margin: '2rem',
  radius: '0.5rem'
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'EskapadeFraktur';
  src: url('../../utils/fonts/EskapadeFraktur-Regular.otf');
  font-weight: 400;
}

@font-face {
  font-family: 'EskapadeFraktur';
  src: url('../../utils/fonts/EskapadeFraktur-Italic.otf');
  font-style: italic;
}

@font-face {
  font-family: 'CorporateS';
  src: url('../../utils/fonts/CorporateS-ProRegular.ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'CorporateS';
  src: url('../../utils/fonts/CorporateSBold.ttf');
  font-weight: bold;
}

@font-face {
  font-family: 'CorporateS';
  src: url('../../utils/fonts/CorporateSItalic.ttf');
  font-style: italic;
}

@font-face {
  font-family: 'CorporateS';
  src: url('../../utils/fonts/CorporateSLight.ttf');
  font-weight: 200;
}

@font-face {
  font-family: 'CorporateS';
  src: url('../../utils/fonts/CorporateSMedium.ttf');
  font-weight: 600;
}

@font-face {
  font-family: 'CorporateA';
  src: url('../../utils/fonts/CorporateARegular.ttf');
  font-weight: 400;
}
  html {
    box-sizing: border-box;
    font-size: 10px;
    padding: 0;
    margin: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit
  }
`
