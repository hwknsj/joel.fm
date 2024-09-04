// TODO: add a 'dark theme' switch

import { fraktur, serif, fontSerif } from './fonts'
import { theme } from './theme'

export const colorSchema = {
  light: {
    primary: theme.black,
    secondary: '#6A6A6A',
    textPrimary: theme.black,
    textSecondary: theme.altBlack,
    btnPrimary: '#FFFFFF',
    btnSecondary: '#111111',
    button: {
      bgPrimary: '#111111',
      bgSecondary: '#FFFFFF'
    },
    link: '#0861B5',
    black: '#111111', // Used for default text, icons and backgrounds.
    white: '#FFFFFF', // Used for backgrounds and icons.
    grey1: '#757575', // Used for disabled button text and product cards.
    grey2: '#CCCCCC', // Used for unselected icons and states.
    grey3: '#E5E5E5', // Used for borders, dividers and keylines.
    grey4: '#F5F5F5', // Used for product image backgrounds.
    grey5: '#FAFAFA', // Used for product image backgrounds.
    green: '#128A09', // Used for success states and confirmations.
    red: '#D43F21', // Used for error states.
    orange: '#FE5000',
    lightGreen: '#76FF03',
    indigo: '#304FFE',
    deepPurple: '#651FFF',
    deepOrange: '#FF3d00',
    kleinBlue: 'rgb(69, 68, 147)',
    blue: '#0861B5',
    pink: '#FF4081',
    red2: '#FF0015',
    gradient:
      'linear-gradient(113.7deg, #FF0015 3.64%, #FE5000 50.92%, #FF6A00 97.26%)',
    bg: '#FFFFFF',
    hoverBg: '#F5F5F5',
    hoverBorder: '#757575',
    focusBorder: '#0861B5',
    activeBg: '#E5E5E5',
    activeBorder: '#111111',
    success: {
      background: '#128A09',
      text: '#1C7013',
      border: '#309E26'
    },
    danger: {
      background: '#D43F21',
      text: '#AD391F',
      border: '#E16443'
    },
    warning: {
      background: '#FACA40',
      text: '#895600',
      border: '#BC7C00'
    }
  },
  dark: {
    primary: '#6A6A6A',
    secondary: '#111111',
    textPrimary: '#FFFFFF',
    textSecondary: '#B2B2B2',
    btnPrimary: '#FFFFFF',
    btnSecondary: '#757575',
    button: {
      bgPrimary: '#FFFFFF',
      bgSecondary: '#111111'
    },
    link: '#3C8DD7',
    black: '#111111', // Used for default text, icons and backgrounds.
    white: '#FFFFFF', // Used for backgrounds and icons.
    grey1: '#B2B2B2', // Used for disabled button text and product cards.
    grey2: '#8B8B8B', // Used for unselected icons and states.
    grey3: '#757575', // Used for borders, dividers and keylines.
    grey4: '#3A3A3A', // Used for product image backgrounds.
    grey5: '#222222', // Used for product image backgrounds.
    green: '#41A139', // Used for success states and confirmations.
    red: '#FF4D29', // Used for error states.
    orange: '#FE5000',
    lightGreen: '#76FF03',
    indigo: '#304FFE',
    deepPurple: '#651FFF',
    deepOrange: '#FF3d00',
    kleinBlue: 'rgb(69, 68, 147)',
    blue: '#0861B5',
    pink: '#FF4081',
    red2: '#FF0015',
    gradient:
      'linear-gradient(113.7deg, #FF0015 3.64%, #FE5000 50.92%, #FF6A00 97.26%)',
    bg: '#111111',
    hoverBg: '#3A3A3A',
    hoverBorder: '#B2B2B2',
    focusBorder: '#51A9E8',
    activeBg: '#222222',
    activeBorder: '#FFFFFF',
    success: {
      background: '#128A09',
      text: '#1C7013',
      border: '#309E26'
    },
    danger: {
      background: '#D43F21',
      text: '#E16443',
      border: '#AD391F'
    },
    warning: {
      background: '#FACA40',
      text: '#BC7C00',
      border: '#895600'
    }
  }
} as const
// eslint-disable-next-line no-unused-vars
export const colorPalette = (dark = false) =>
  dark ? colorSchema.dark : colorSchema.light
// eslint-disable-next-line no-unused-vars
export const typeographySchema = (colors: typeof colorSchema.light) => ({
  fontFamily: theme.typeography.serif,
  bodyFontSize: '1.6rem',
  displayFont: fraktur,
  color: colors.textPrimary,
  display1: {
    fontFamily: fraktur,
    fontSize: '6.2rem',
    color: colors.textPrimary
  },
  display2: {
    fontFamily: fraktur,
    fontSize: '5.6rem',
    color: colors.textPrimary
  },
  display3: {
    fontFamily: fraktur,
    fontSize: '4.8rem',
    color: colors.textPrimary
  },
  display4: {
    fontFamily: fraktur,
    fontSize: '4.0rem',
    color: colors.textPrimary
  },
  display5: {
    fontFamily: fraktur,
    fontSize: '2.4rem',
    color: colors.textPrimary
  },
  title1: {
    fontSize: '4.8rem',
    fontWeight: 500,
    fontFamily: fraktur,
    color: colors.textPrimary
  },
  title2: {
    fontSize: '3.2rem',
    fontWeight: 500,
    fontFamily: fraktur,
    color: colors.textPrimary
  },
  title3: {
    fontSize: '2.8rem',
    fontWeight: 500,
    fontFamily: fraktur,
    color: colors.textPrimary
  },
  title4: {
    fontSize: '2.4rem',
    fontWeight: 500,
    fontFamily: fraktur,
    color: colors.textPrimary
  },
  title5: {
    fontSize: '2.0rem',
    fontWeight: 500,
    fontFamily: fraktur,
    color: colors.textPrimary
  },
  title6: {
    fontSize: '1.6rem',
    fontWeight: 500,
    fontFamily: fraktur,
    color: colors.textPrimary
  },
  subtitle1: {
    fontSize: '1.6rem',
    fontWeight: 500,
    lineHeight: '2.4rem',
    fontFamily: fraktur,
    color: colors.textPrimary
  },
  subtitle2: {
    fontSize: '1.4rem',
    fontWeight: 500,
    lineHeight: '2.0rem',
    fontFamily: fraktur,
    color: colors.textPrimary
  },
  subtitle3: {
    fontSize: '1.4rem',
    lineHeight: '1.6rem',
    fontFamily: fraktur,
    color: colors.textPrimary
  },
  body1: {
    fontSize: '2.0rem',
    lineHeight: '2.8rem',
    fontWeight: 400,
    fontFamily: fraktur,
    color: colors.textPrimary
  },
  body2: {
    fontSize: '1.6rem',
    lineHeight: '2.4rem',
    fontWeight: 400,
    fontFamily: fraktur,
    color: colors.textPrimary
  },
  body3: {
    fontSize: '1.4rem',
    lineHeight: '2.0rem',
    fontWeight: 400,
    fontFamily: fraktur,
    color: colors.textPrimary
  },
  legal: {
    fontSize: '1.2rem',
    lineHeight: '1.8rem',
    fontWeight: 400,
    fontFamily: fraktur,
    color: colors.textPrimary
  },
  label: {
    fontSize: '1.0rem',
    lineHeight: '1.2rem',
    fontWeight: 400,
    fontFamily: fraktur,
    color: colors.textPrimary
  },
  button1: {
    fontSize: '1.6rem',
    fontWeight: 500,
    lineHeight: '2.4rem',
    fontFamily: fraktur
  },
  button2: {
    fontSize: '1.4rem',
    fontWeight: 500,
    lineHeight: '2.0rem',
    fontFamily: fraktur
  },
  button3: {
    fontSize: '1.2rem',
    fontWeight: 500,
    lineHeight: '1.8rem',
    fontFamily: fraktur
  },
  titleFont: fraktur,
  subtitleFont: fraktur,
  bodyFont: serif,
  legalFont: serif,
  buttonFont: fraktur
})
