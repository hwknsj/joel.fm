import { css } from '@emotion/react'
import { darken } from 'polished'

import {
  actions,
  animations,
  buttons,
  forms,
  ghost,
  grid,
  hamburger,
  helpers,
  lists,
  nav,
  reset,
  screen,
  tables
} from './css/index'

import {
  fontFaces,
  fonts,
  typefaces,
  fontFraktur,
  fontSerif,
  fontSans,
  fontMono,
  fontTitle,
  body,
  code,
  title
} from './fonts'

const { fraktur, serif, sans, mono, eskapade, corporateA, corporateS } =
  typefaces

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

export type Breakpoints = typeof breakpoints

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
} as const

type Colors = typeof colors

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
} as const

type Layout = typeof layout

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
  typefaces,
  family: {
    fraktur,
    eskapade,
    title,
    mono,
    sans,
    serif,
    body,
    code
  },
  style: {
    italic: 'italic',
    normal: 'normal'
  },
  fontLight: '200',
  fontNormal: '400',
  fontBold: 'bold',
  fontHeavy: '800',
  weight: {
    light: '200',
    '200': '200',
    '300': '300',
    normal: '400',
    '400': '400',
    bold: 'bold',
    '600': '600',
    '700': '700',
    heavy: '800',
    '800': '800',
    '900': '900'
  },
  lineHeight: '2'
} as const

type Typeography = typeof typeography

interface InitialTheme {
  bodyPadding: '3vw'
  bodyPaddingSm: '6vw'
  blue: '#0A48DD'
  colorPrimary: '#0A48DD'
  colorBase: '#131313'
  colorBorder: '#ddd'
  white: '#ffffff'
  lightGrey: '#E1E1E1'
  offWhite: '#FAFAFA'
  color: '#1f1f1f'
  black: '#1E1E1F'
  altBlack: '#393939'
  nikeBlack: '#111111'
  trueBlack: '#000000'
  transparent: 'rgba(0, 0, 0, 0)'
  colorBg: '#ffffff'
  colorLight: '#9e9e9e'
  fraktur: typeof fraktur
  fontFraktur: typeof fontFraktur
  title: typeof title
  fontTitle: typeof fontTitle
  sans: typeof sans
  fontSans: typeof fontSans
  serif: typeof serif
  fontSerif: typeof fontSerif
  body: typeof body
  fontBody: typeof serif
  mono: typeof mono
  fontMono: typeof fontMono
  code: typeof mono
  fontCode: typeof mono
  fontLight: '200'
  fontNormal: '400'
  fontBold: '500'
  fontHeavy: '800'
  lineHeight: '2'
  xlarge: '1680px'
  large: '1280px'
  medium: '980px'
  small: '740px'
  xsmall: '480px'
  height: '4rem'
  margin: '2rem'
  borderRadius: '0.5rem'
  bb: `#131313 2px solid` // border-bottom hover
  bbh: `#1E1E1F 2px solid` // border-bottom hover
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)' // box-shadow
  bsh: '0 12px 24px 0 rgba(0, 0, 0, 0.2)' // box-shadow:hover
  cubicBezier: 'cubic-bezier(0.4, 0.01, 0.165, 0.99)'
  colors: Colors
  layout: Layout
  typeography: Typeography
}

const initialTheme: InitialTheme = {
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

// extending InitialTheme with some 'aliases'
// because i am stupid & forget property names sometimes
export interface Theme extends InitialTheme {
  maxWidthXs: typeof initialTheme.xsmall
  maxWidthSm: typeof initialTheme.small
  maxWidthMd: typeof initialTheme.medium
  maxWidthLg: typeof initialTheme.large
  maxWidthXl: typeof initialTheme.xlarge
  bgColor: typeof initialTheme.colors.background
  blue: typeof initialTheme.colorPrimary
  radius: typeof initialTheme.borderRadius
  navbb: string
  navbbh: string
}

// extending initialTheme with some 'aliases'
export const theme: Theme = {
  ...initialTheme,
  maxWidthXs: initialTheme.xsmall,
  maxWidthSm: initialTheme.small,
  maxWidthMd: initialTheme.medium,
  maxWidthLg: initialTheme.large,
  maxWidthXl: initialTheme.xlarge,
  bgColor: initialTheme.colors.background,
  blue: initialTheme.colorPrimary,
  radius: initialTheme.borderRadius,
  navbb: `${initialTheme.transparent} 2px solid`,
  navbbh: `${initialTheme.colors.base} 2px solid`
}

// IDEA: there ought to be (possibly is) a better way to achieve this
export const globalCss = css`
  ${fontFaces};
  ${fonts};
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
      color: ${theme.colors.primary};
      transition:
        color 0.4s ${theme.cubicBezier},
        opacity 0.4s ${theme.cubicBezier},
        text-decoration 0.3s ${theme.cubicBezier} !important;
      &:hover {
        color: ${darken(0.2, theme.colors.primary)};
      }
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${theme.typeography.fraktur};
    color: ${theme.colors.black};
  }
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${theme.typeography.weight.normal};
  }
  ${helpers(theme)};
  ${reset(theme)};
  ${ghost(theme)};
  ${lists(theme)};
  ${nav(theme)};
  ${grid(theme)};
  ${tables(theme)};
  ${forms(theme)};
  ${buttons(theme)};
  ${actions(theme)};
  ${hamburger(theme)};
  ${animations};
  ${screen(theme)};
`

// input,
// button,
// option,
// select,
// textarea {
//   color: ${theme.colors.altBlack};
// }
// blockquote,
// q {
//   font-style: italic;
//   span,
//   a {
//     font-style: normal;
//   }
// }
