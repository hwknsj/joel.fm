// import { createGlobalStyle } from 'styled-components'
import { Global, css } from '@emotion/react'

const resetCss = css`
  html {
    font-size: 15px;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    font-family: ${({ theme }) => theme.fontFraktur}, serif;
  }

  body {
    font-family: ${({ theme }) => theme.fontSerif}, serif;
    margin: 0;
    padding: 0;
    /* font-size: 15px; */
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  p {
    line-height: 2;
    margin: 0 0 1.7em 0;
  }

  p > img {
    max-width: 100%;
  }

  input,
  textarea,
  select,
  button {
    font-family: 'Fira Sans', sans-serif;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    box-shadow: none;
  }

  a:hover {
    text-decoration: none;
  }

  blockquote {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #f5f5f5;
  }

  pre[class*='language-'] {
    padding: 1.5em;
    margin: 2em 0;
    overflow: auto;
  }

  table {
    display: block;
    overflow: auto;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin-bottom: 2.7em;
    line-height: 1.6;
  }

  table tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
  }

  table tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  table th {
    font-weight: 500;
  }

  table td,
  table th {
    border: 1px solid #dfe2e5;
    padding: 0.4em 1em;
  }

  hr {
    overflow: visible;
    border: 0;
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
    border: 0;
    content: '';
    background-color: #757575;
    display: block;
    height: 4px;
    width: 4px;
    border-radius: 50%;
    position: relative;
  }

  hr:before {
    content: '';
    background-color: #757575;
    display: block;
    height: 4px;
    width: 4px;
    border-radius: 50%;
    position: absolute;
    left: -32px;
  }

  hr:after {
    content: '';
    background-color: #757575;
    display: block;
    height: 4px;
    width: 4px;
    border-radius: 50%;
    position: absolute;
    left: 32px;
  }

  .nav-sticky {
    .header {
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
      .navbar {
        @media (min-width: 1400px) {
          padding-top: 25px;
          padding-bottom: 25px;
        }
        @media (min-width: 1200px) {
          padding-top: 20px;
          padding-bottom: 20px;
        }
      }
    }
  }
`

const ResetCSS = <Global style={resetCss} />

export default ResetCSS
