import { css } from '@emotion/react'
import { fontFace } from 'polished'
import type { FontFaceConfiguration } from 'polished/lib/types/fontFaceConfiguration'

export const fontFraktur = `'eskapade-fraktur', 'EskapadeFraktur', 'Eskapade Fraktur', serif`
export const fontSerif = `'corporate-a', 'CorporateA', 'Corporate A', Times, 'Times New Roman', Georgia, serif`
export const fontSans = `'corporate-s', 'CorporateS', 'Corporate S', 'Helvetica Neue', Helvetica, sans-serif`
export const fontMono = `'SF Mono', Menlo, Courier, monospace`

export const [sans, serif, mono] = [fontSans, fontSerif, fontMono]
// eslint-disable-next-line no-unused-vars
export const [fontTitle, fontBody, fontCode] = [
  fontFraktur,
  fontSerif,
  fontMono
]
export const [fraktur, body, code, title] = [
  fontFraktur,
  serif,
  mono,
  fontFraktur
]

export type FileQueryFields = Partial<
  Record<keyof Queries.FileFieldSelector, string>
>

export type FontsQueryData = FileQueryFields & {
  name: string
  relativePath: string
  publicURL: string
  base: string
  extension: string
}

export const fontsQuery = (fonts: FontsQueryData[]) => {
  const fontDefs = fonts.map(
    ({ name, publicURL, extension }: FileQueryFields) => {
      const font: FontFaceConfiguration = {
        fontWeight: '400',
        fontFamily: '',
        fileFormats: [extension ?? ''],
        fontDisplay: 'swap',
        fontFilePath: publicURL
      }
      if (name?.includes('Eskapade')) {
        font.fontFamily = 'eskapade'
        if (name.includes('Fraktur')) {
          font.fontFamily = 'eskapade-fraktur'
        }
      }
      if (name?.includes('Corporate')) {
        font.fontFamily = 'corporate'
        if (name.includes('CorporateS')) font.fontFamily += '-s'
        if (name.includes('CorporateA')) font.fontFamily += '-a'
      }
      if (name?.toLowerCase().includes('regular')) {
        font.fontStyle = 'normal'
        font.fontWeight = 'normal 400'
      }
      if (name?.toLowerCase().includes('italic') || name?.endsWith('It'))
        font.fontStyle = 'italic'
      if (
        name?.toLowerCase().includes('bold') ||
        name?.toLowerCase().includes('Bd')
      )
        font.fontWeight = 'bold 700'
      if (name?.toLowerCase().includes('light')) font.fontWeight = '300'
      if (name?.toLowerCase().includes('medium')) font.fontWeight = '500'
      return font
    }
  )
  return fontDefs.map(font => fontFace(font))
}

export const fontFaces = [
  {
    fontFamily: 'EskapadeFraktur',
    fontFilePath: 'fonts/EskapadeFraktur-Regular',
    fontDisplay: 'swap',
    // localFonts: ['Eskapade Fraktur', 'Eskapade Fraktur Regular'],
    fontVariant: 'tabular-nums',
    fontStyle: 'normal',
    fileFormats: ['otf']
  },
  {
    fontFamily: 'EskapadeFraktur',
    fontFilePath: 'fonts/EskapadeFraktur-Italic',
    fontDisplay: 'swap',
    // localFonts: ['Eskapade Fraktur Italic'],
    fontVariant: 'tabular-nums',
    fontStyle: 'italic',
    fileFormats: ['otf']
  },
  {
    fontFamily: 'CorporateS',
    fontFilePath: 'fonts/CorporateS-ProRegular',
    fontDisplay: 'swap',
    // localFonts: ['Corporate S', 'Corporate S Pro'],
    fontStyle: 'normal',
    fileFormats: ['ttf']
  },
  {
    fontFamily: 'CorporateS',
    fontFilePath: 'fonts/CorporateSMedium',
    fontDisplay: 'swap',
    // localFonts: ['Corporate S', 'Corporate S Pro'],
    fontWeight: '600',
    fileFormats: ['ttf']
  },
  {
    fontFamily: 'CorporateS',
    fontFilePath: 'fonts/CorporateSBold',
    fontDisplay: 'swap',
    // localFonts: ['Corporate S', 'Corporate S Pro'],
    fontWeight: 'bold',
    fileFormats: ['ttf']
  },
  {
    fontFamily: 'CorporateS',
    fontFilePath: 'fonts/CorporateSItalic',
    fontDisplay: 'swap',
    // localFonts: ['Corporate S', 'Corporate S Pro'],
    fontStyle: 'italic',
    fileFormats: ['ttf']
  },
  {
    fontFamily: 'CorporateS',
    fontFilePath: 'fonts/CorporateSLight',
    fontDisplay: 'swap',
    // localFonts: ['Corporate S', 'Corporate S Pro'],
    fontWeight: '200',
    fileFormats: ['ttf']
  },
  {
    fontFamily: 'CorporateA',
    fontFilePath: 'fonts/CorporateARegular',
    fontDisplay: 'swap',
    // localFonts: ['Corporate A', 'Corporate A Pro'],
    fileFormats: ['ttf']
  }
].map(font => fontFace(font))

// For code splitting purposes, separate font-face definitions
export const fonts = css`
  @font-face {
    font-family: 'EskapadeFraktur';
    src: url('fonts/EskapadeFraktur-Regular.otf');
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'EskapadeFraktur';
    src: url('fonts/EskapadeFraktur-Italic.otf');
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'CorporateS';
    src: url('fonts/CorporateS-ProRegular.ttf');
    font-display: swap;
    font-style: normal;
  }
  @font-face {
    font-family: 'CorporateS';
    src: url('fonts/CorporateSBold.ttf');
    font-weight: bold;
    font-display: swap;
  }
  @font-face {
    font-family: 'CorporateS';
    src: url('fonts/CorporateSItalic.ttf');
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'CorporateS';
    src: url('fonts/CorporateSLight.ttf');
    font-weight: 200;
    font-display: swap;
  }
  @font-face {
    font-family: 'CorporateS';
    src: url('fonts/CorporateSMedium.ttf');
    font-weight: 600;
    font-display: swap;
  }
  @font-face {
    font-family: 'CorporateA';
    src: url('fonts/CorporateARegular.ttf');
    font-style: normal;
    font-display: swap;
  }
  .serif {
    font-family: ${serif};
    p {
      font-family: ${serif};
    }
  }
  .font-serif {
    font-family: ${serif};
    p {
      font-family: ${serif};
    }
  }
  .sans {
    font-family: ${sans};
    p {
      font-family: ${sans};
    }
  }
  .font-sans {
    font-family: ${sans};
    p {
      font-family: ${sans};
    }
  }
  .fraktur {
    font-family: ${fraktur};
  }
  .font-fraktur {
    font-family: ${fraktur};
  }
  .mono {
    font-family: ${mono};
  }
  .font-mono {
    font-family: ${mono};
  }
`
