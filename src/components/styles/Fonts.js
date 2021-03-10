import { fontFace } from 'polished'

export const fontDefs = [
  {
    fontFamily: 'EskapadeFraktur',
    fontFilePath: '../../lib/fonts/EskapadeFraktur-Regular.otf',
    fontDisplay: 'swap',
    localFonts: ['Eskapade Fraktur'],
    fontVariant: 'tabular-nums',
    fontStyle: 'normal',
    fileFormats: ['otf']
  },
  {
    fontFamily: 'EskapadeFraktur',
    fontFilePath: '../../lib/fonts/EskapadeFraktur-Italic.otf',
    fontDisplay: 'swap',
    localFonts: ['Eskapade Fraktur'],
    fontVariant: 'tabular-nums',
    fontStyle: 'italic',
    fileFormats: ['otf']
  },
  {
    fontFamily: 'CorporateS',
    fontFilePath: '../../lib/fonts/CorporateS-ProRegular.ttf',
    fontDisplay: 'swap',
    localFonts: ['Corporate S', 'Corporate S Pro'],
    fontStyle: 'normal',
    fileFormats: ['ttf']
  },
  {
    fontFamily: 'CorporateS',
    fontFilePath: '../../lib/fonts/CorporateSMedium.ttf',
    fontDisplay: 'swap',
    localFonts: ['Corporate S', 'Corporate S Pro'],
    fontWeight: '600',
    fileFormats: ['ttf']
  },
  {
    fontFamily: 'CorporateS',
    fontFilePath: '../../lib/fonts/CorporateSBold.ttf',
    fontDisplay: 'swap',
    localFonts: ['Corporate S', 'Corporate S Pro'],
    fontWeight: 'bold',
    fileFormats: ['ttf']
  },
  {
    fontFamily: 'CorporateS',
    fontFilePath: '../../lib/fonts/CorporateSItalic.ttf',
    fontDisplay: 'swap',
    localFonts: ['Corporate S', 'Corporate S Pro'],
    fontStyle: 'italic',
    fileFormats: ['ttf']
  },
  {
    fontFamily: 'CorporateS',
    fontFilePath: '../../lib/fonts/CorporateSLight.ttf',
    fontDisplay: 'swap',
    localFonts: ['Corporate S', 'Corporate S Pro'],
    fontWeight: '200',
    fileFormats: ['ttf']
  },
  {
    fontFamily: 'CorporateA',
    fontFilePath: '../../lib/fonts/CorporateARegular.ttf',
    fontDisplay: 'swap',
    localFonts: ['Corporate A', 'Corporate A Pro'],
    fileFormats: ['ttf']
  }
].map(font => fontFace(font))

// For code splitting purposes, separate font-face definitions
const fonts = String.raw`
  @font-face {
    font-family: 'EskapadeFraktur';
    src: url('../../lib/fonts/EskapadeFraktur-Regular.otf');
    font-weight: 400;
  }

  @font-face {
    font-family: 'EskapadeFraktur';
    src: url('../../lib/fonts/EskapadeFraktur-Italic.otf');
    font-style: italic;
  }

  @font-face {
    font-family: 'CorporateS';
    src: url('../../lib/fonts/CorporateS-ProRegular.ttf');
    font-weight: 400;
  }

  @font-face {
    font-family: 'CorporateS';
    src: url('../../lib/fonts/CorporateSBold.ttf');
    font-weight: bold;
  }

  @font-face {
    font-family: 'CorporateS';
    src: url('../../lib/fonts/CorporateSItalic.ttf');
    font-style: italic;
  }

  @font-face {
    font-family: 'CorporateS';
    src: url('../../lib/fonts/CorporateSLight.ttf');
    font-weight: 200;
  }

  @font-face {
    font-family: 'CorporateS';
    src: url('../../lib/fonts/CorporateSMedium.ttf');
    font-weight: 600;
  }

  @font-face {
    font-family: 'CorporateA';
    src: url('../../lib/fonts/CorporateARegular.ttf');
    font-weight: 400;
  }
`

export default fonts
