import { css } from '@emotion/react'
import { darken, lighten } from 'polished'
import type { Theme } from '../theme'

export const reset = (theme: Theme) => css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
    font-style: italic;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-spacing: 0;
    border-collapse: collapse;
  }
  img {
    max-width: 100%;
  }
  html {
    box-sizing: border-box;
    font-family: serif;

    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  a {
    background-color: transparent;
  }
  a:active,
  a:hover {
    outline: 0;
  }
  b,
  strong {
    font-weight: bold;
  }
  i,
  em,
  dfn {
    font-style: italic;
  }
  h1 {
    margin: 0.67em 0;
    font-size: 2em;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }
  img {
    border: 0;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  mark {
    background-color: #fdffb6;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    color: inherit;
    font: inherit;
  }
  button {
    overflow: visible;
    border: none;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  html input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    cursor: pointer;
    -webkit-appearance: button;
  }
  button[disabled],
  html input[disabled] {
    cursor: default;
  }
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  input {
    line-height: normal;
  }
  input:focus {
    outline: none;
  }
  input[type='checkbox'],
  input[type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  input[type='search'] {
    box-sizing: content-box;

    -webkit-appearance: textfield;
  }
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  legend {
    padding: 0;
    border: 0;
  }
  textarea {
    overflow: auto;
  }
  table {
    border-spacing: 0;
    border-collapse: collapse;
  }
  td,
  th {
    padding: 0;
  }
  /* ==========================================================================
   Base styles: opinionated defaults
   ========================================================================== */
  html {
    overflow-x: hidden;
    overflow-y: scroll;
    font-size: 62.5%;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  body {
    overflow-x: hidden;
    color: ${lighten(0.2, theme.colors.base)};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5rem;
    line-height: 1.6em;
    font-weight: 400;
    font-style: normal;
    font-feature-settings: 'liga' on;
    letter-spacing: 0;
    text-rendering: optimizeLegibility;
    background: #fff;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: 'liga' on;
  }
  ::selection {
    text-shadow: none;
    background: #cbeafb;
  }
  hr {
    position: relative;
    display: block;
    width: 100%;
    margin: 2.5em 0 3.5em;
    padding: 0;
    height: 1px;
    border: 0;
    border-top: 1px solid ${lighten(0.2, theme.colors.base)};
  }
  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }
  p,
  blockquote {
    margin: 0 0 1.5em 0;
  }
  blockquote {
    margin: 1.5em 0;
    padding: 0 1.6em 0 1.6em;
    border-left: ${theme.colors.base} 0.5em solid;
  }
  blockquote p {
    margin: 0.8em 0;
    font-size: 1.2em;
    font-weight: 300;
  }
  blockquote small {
    display: inline-block;
    margin: 0.8em 0 0.8em 1.5em;
    font-size: 0.9em;
    opacity: 0.8;
  }
  /* Quotation marks */
  blockquote small:before {
    content: '\2014 \00A0';
  }
  blockquote cite {
    font-weight: bold;
  }
  blockquote cite a {
    font-weight: normal;
  }
  a {
    color: ${darken(0.05, theme.colorPrimary)};
    text-decoration: none;
    transition: 0.4s ease;
  }
  a:hover {
    text-decoration: underline;
    transition: 0.2s ease;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    line-height: 1.4;
    font-weight: 700;
    text-rendering: optimizeLegibility;
  }
  h1 {
    margin: 0 0 0.5em 0;
    font-size: 5.7rem;
    font-weight: 800;
  }
  @media (max-width: ${theme.maxWidthXs}) {
    h1 {
      font-size: 2.7rem;
    }
  }
  h2 {
    margin: 1.5em 0 0.5em 0;
    font-size: 4rem;
  }
  @media (max-width: ${theme.maxWidthXs}) {
    h2 {
      font-size: 2rem;
    }
  }
  h3 {
    margin: 1.5em 0 1em 0;
    font-size: 3.2rem;
  }
  @media (max-width: ${theme.maxWidthXs}) {
    h3 {
      font-size: 1.8rem;
    }
  }
  h4 {
    margin: 1.5em 0 1em 0;
    font-size: 2.6rem;
  }
  h5 {
    margin: 1.5em 0 1em 0;
    font-size: 2.4rem;
  }
  h6 {
    margin: 1.5em 0 1em 0;
    font-size: 2.2rem;
  }
`

export default reset
