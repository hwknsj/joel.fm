import { fontFace } from 'polished'

export const fontFaces = [
  {
    fontFamily: 'EskapadeFraktur',
    fontFilePath: 'fonts/EskapadeFraktur-Regular',
    fontDisplay: 'swap',
    localFonts: ['Eskapade Fraktur', 'Eskapade Fraktur Regular'],
    fontVariant: 'tabular-nums',
    fontStyle: 'normal',
    fileFormats: ['otf']
  },
  {
    fontFamily: 'EskapadeFraktur',
    fontFilePath: 'fonts/EskapadeFraktur-Italic',
    fontDisplay: 'swap',
    localFonts: ['Eskapade Fraktur Italic'],
    fontVariant: 'tabular-nums',
    fontStyle: 'italic',
    fileFormats: ['otf']
  },
  {
    fontFamily: 'CorporateS',
    fontFilePath: 'fonts/CorporateS-ProRegular',
    fontDisplay: 'swap',
    localFonts: ['Corporate S', 'Corporate S Pro'],
    fontStyle: 'normal',
    fileFormats: ['ttf']
  },
  {
    fontFamily: 'CorporateS',
    fontFilePath: 'fonts/CorporateSMedium',
    fontDisplay: 'swap',
    localFonts: ['Corporate S', 'Corporate S Pro'],
    fontWeight: '600',
    fileFormats: ['ttf']
  },
  {
    fontFamily: 'CorporateS',
    fontFilePath: '/fonts/CorporateSBold',
    fontDisplay: 'swap',
    localFonts: ['Corporate S', 'Corporate S Pro'],
    fontWeight: 'bold',
    fileFormats: ['ttf']
  },
  {
    fontFamily: 'CorporateS',
    fontFilePath: 'fonts/CorporateSItalic',
    fontDisplay: 'swap',
    localFonts: ['Corporate S', 'Corporate S Pro'],
    fontStyle: 'italic',
    fileFormats: ['ttf']
  },
  {
    fontFamily: 'CorporateS',
    fontFilePath: 'fonts/CorporateSLight',
    fontDisplay: 'swap',
    localFonts: ['Corporate S', 'Corporate S Pro'],
    fontWeight: '200',
    fileFormats: ['ttf']
  },
  {
    fontFamily: 'CorporateA',
    fontFilePath: 'fonts/CorporateARegular',
    fontDisplay: 'swap',
    localFonts: ['Corporate A', 'Corporate A Pro'],
    fileFormats: ['ttf']
  }
].map(font => fontFace(font))

// For code splitting purposes, separate font-face definitions
const fonts = String.raw`
  @font-face {
    font-family: 'EskapadeFraktur';
    src: url('fonts/EskapadeFraktur-Regular.otf');
    font-weight: 400;
  }

  @font-face {
    font-family: 'EskapadeFraktur';
    src: url('fonts/EskapadeFraktur-Italic.otf');
    font-style: italic;
  }

  @font-face {
    font-family: 'CorporateS';
    src: url('fonts/CorporateS-ProRegular.ttf');
    font-weight: 400;
  }

  @font-face {
    font-family: 'CorporateS';
    src: url('fonts/CorporateSBold.ttf');
    font-weight: bold;
  }

  @font-face {
    font-family: 'CorporateS';
    src: url('fonts/CorporateSItalic.ttf');
    font-style: italic;
  }

  @font-face {
    font-family: 'CorporateS';
    src: url('fonts/CorporateSLight.ttf');
    font-weight: 200;
  }

  @font-face {
    font-family: 'CorporateS';
    src: url('fonts/CorporateSMedium.ttf');
    font-weight: 600;
  }

  @font-face {
    font-family: 'CorporateA';
    src: url('fonts/CorporateARegular.ttf');
    font-weight: 400;
  }
`

export default fonts
