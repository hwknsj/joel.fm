import { css } from '@emotion/react'
import { fontFace } from 'polished'
import { generateCSSFontSrc } from './utils'

export const fraktur = `'eskapade-fraktur', 'EskapadeFraktur', 'Eskapade Fraktur', serif`
export const serif = `eskapade, 'Eskapade', 'corporate-a', 'CorporateAPro', 'CorporateA', 'Corporate A', Times, 'Times New Roman', Georgia, serif`
export const sans = `'corporate-s', 'CorporateSPro', 'CorporateS', 'Corporate S', 'Helvetica Neue', Helvetica, sans-serif`
export const mono = `'SF Mono', Menlo, Courier, monospace`
export const [body, code, title] = [serif, mono, fraktur]

export const [fontFraktur, fontSans, fontSerif, fontMono] = [
  fraktur,
  sans,
  serif,
  mono
]
// eslint-disable-next-line no-unused-vars
export const [fontTitle, fontBody, fontCode] = [
  fontFraktur,
  fontSerif,
  fontMono
]
export const typefaces = {
  fraktur,
  serif,
  sans,
  mono,
  eskapade: `'eskapade', 'Eskapade', serif`,
  corporateA: `'corporate-a', 'CorporateAPro', 'Corporate A Pro', serif`,
  corporateS: `'corporate-s', 'CorporateSPro', 'Corporate S Pro', sans-serif`
}

export type FontDescription = {
  postScriptName: string
  formats: string[]
  family: string
  style: string
  weight: string
  paths: FontPath
  fontFamily: string
}

export type FontFormat = 'woff2' | 'woff' | 'eot' | 'otf' | 'ttf'

export type FontPath = Partial<Record<FontFormat, string>>

export const fontFilenames: FontDescription[] = [
  {
    postScriptName: 'EskapadeFraktur-Regular',
    formats: ['woff2'],
    family: 'EskapadeFraktur',
    style: 'normal',
    weight: 'normal 400',
    paths: {
      woff2: '/fonts/EskapadeFraktur-Regular.woff2'
    },
    fontFamily: 'eskapade-fraktur'
  },
  {
    postScriptName: 'EskapadeFraktur-RegularItalic',
    formats: ['woff2'],
    family: 'EskapadeFraktur',
    style: 'italic',
    weight: 'normal 400',
    paths: {
      woff2: '/fonts/EskapadeFraktur-RegularItalic.woff2'
    },
    fontFamily: 'eskapade-fraktur'
  },
  {
    postScriptName: 'EskapadeFraktur-Black',
    formats: ['woff2'],
    family: 'EskapadeFraktur',
    style: 'normal',
    weight: 'bold 700',
    paths: {
      woff2: '/fonts/EskapadeFraktur-Black.woff2'
    },
    fontFamily: 'eskapade-fraktur'
  },
  {
    postScriptName: 'EskapadeFraktur-BlackItalic',
    formats: ['woff2'],
    family: 'EskapadeFraktur',
    style: 'italic',
    weight: 'bold 700',
    paths: {
      woff2: '/fonts/EskapadeFraktur-BlackItalic.woff2'
    },
    fontFamily: 'eskapade-fraktur'
  },
  {
    postScriptName: 'Eskapade-Regular',
    formats: ['woff2'],
    family: 'Eskapade',
    style: 'normal',
    weight: 'normal 400',
    paths: {
      woff2: '/fonts/Eskapade-Regular.woff2'
    },
    fontFamily: 'eskapade'
  },
  {
    postScriptName: 'Eskapade-RegularItalic',
    formats: ['woff2'],
    family: 'Eskapade',
    style: 'italic',
    weight: 'normal 400',
    paths: {
      woff2: '/fonts/Eskapade-RegularItalic.woff2'
    },
    fontFamily: 'eskapade'
  },
  {
    postScriptName: 'Eskapade-Bold',
    formats: ['woff2'],
    family: 'Eskapade',
    style: 'normal',
    weight: 'bold 700',
    paths: {
      woff2: '/fonts/Eskapade-Bold.woff2'
    },
    fontFamily: 'eskapade'
  },
  {
    postScriptName: 'Eskapade-BoldItalic',
    formats: ['woff2'],
    family: 'Eskapade',
    style: 'italic',
    weight: 'bold 700',
    paths: {
      woff2: '/fonts/Eskapade-BoldItalic.woff2'
    },
    fontFamily: 'eskapade'
  },
  {
    postScriptName: 'CorporateSPro-Regular',
    formats: ['woff2'],
    family: 'CorporateSPro',
    style: 'normal',
    weight: 'normal 400',
    paths: {
      woff2: '/fonts/CorporateSPro-Regular.woff2'
    },
    fontFamily: 'corporate-s-pro'
  },
  {
    postScriptName: 'CorporateSPro-Bold',
    formats: ['woff2'],
    family: 'CorporateSPro',
    style: 'normal',
    weight: 'bold 700',
    paths: {
      woff2: '/fonts/CorporateSPro-Bold.woff2'
    },
    fontFamily: 'corporate-s-pro'
  },
  {
    postScriptName: 'CorporateSPro-BoldItalic',
    formats: ['woff2'],
    family: 'CorporateSPro',
    style: 'italic',
    weight: 'bold 700',
    paths: {
      woff2: '/fonts/CorporateSPro-BoldItalic.woff2'
    },
    fontFamily: 'corporate-s-pro'
  },
  {
    postScriptName: 'CorporateSPro-Italic',
    formats: ['woff2'],
    family: 'CorporateSPro',
    style: 'italic',
    weight: 'normal 400',
    paths: {
      woff2: '/fonts/CorporateSPro-Italic.woff2'
    },
    fontFamily: 'corporate-s-pro'
  },
  {
    postScriptName: 'CorporateSPro-Light',
    formats: ['woff2'],
    family: 'CorporateSPro',
    style: 'normal',
    weight: '200',
    paths: {
      woff2: '/fonts/CorporateSPro-Light.woff2'
    },
    fontFamily: 'corporate-s-pro'
  },
  {
    postScriptName: 'CorporateSPro-LightItalic',
    formats: ['woff2'],
    family: 'CorporateSPro',
    style: 'italic',
    weight: '200',
    paths: {
      woff2: '/fonts/CorporateSPro-LightItalic.woff2'
    },
    fontFamily: 'corporate-s-pro'
  },
  {
    postScriptName: 'CorporateSPro-Medium',
    formats: ['woff2'],
    family: 'CorporateSPro',
    style: 'normal',
    weight: '600',
    paths: {
      woff2: '/fonts/CorporateSPro-Medium.woff2'
    },
    fontFamily: 'corporate-s-pro'
  },
  {
    postScriptName: 'CorporateSPro-MediumItalic',
    formats: ['woff2'],
    family: 'CorporateSPro',
    style: 'italic',
    weight: '600',
    paths: {
      woff2: '/fonts/CorporateSPro-MediumItalic.woff2'
    },
    fontFamily: 'corporate-s-pro'
  },
  {
    postScriptName: 'CorporateAPro-Regular',
    formats: ['woff2'],
    family: 'CorporateAPro',
    style: 'normal',
    weight: 'normal 400',
    paths: {
      woff2: '/fonts/CorporateAPro-Regular.woff2'
    },
    fontFamily: 'corporate-a-pro'
  },
  {
    postScriptName: 'CorporateAPro-RegularItalic',
    formats: ['woff2'],
    family: 'CorporateAPro',
    style: 'italic',
    weight: 'normal 400',
    paths: {
      woff2: '/fonts/CorporateAPro-RegularItalic.woff2'
    },
    fontFamily: 'corporate-a-pro'
  },
  {
    postScriptName: 'CorporateAPro-Bold',
    formats: ['woff2'],
    family: 'CorporateAPro',
    style: 'normal',
    weight: 'bold 700',
    paths: {
      woff2: '/fonts/CorporateAPro-Bold.woff2'
    },
    fontFamily: 'corporate-a-pro'
  },
  {
    postScriptName: 'CorporateAPro-BoldItalic',
    formats: ['woff2'],
    family: 'CorporateAPro',
    style: 'italic',
    weight: 'bold 700',
    paths: {
      woff2: '/fonts/CorporateAPro-BoldItalic.woff2'
    },
    fontFamily: 'corporate-a-pro'
  }
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

// export const fontsQuery = (fonts: FontsQueryData[]) => {
//   const fontDefs = fonts.map(
//     ({ name, publicURL, extension }: FileQueryFields) => {
//       const font: FontFaceConfiguration = {
//         fontWeight: '400',
//         fontFamily: '',
//         fileFormats: [extension ?? ''],
//         fontDisplay: 'swap',
//         fontFilePath: publicURL
//       }
//       if (name?.includes('Eskapade')) {
//         font.fontFamily = 'eskapade'
//         if (name.includes('Fraktur')) {
//           font.fontFamily = 'eskapade-fraktur'
//         }
//       }
//       if (name?.includes('Corporate')) {
//         font.fontFamily = 'corporate'
//         if (name.includes('CorporateS')) font.fontFamily += '-s'
//         if (name.includes('CorporateA')) font.fontFamily += '-a'
//       }
//       if (name?.toLowerCase().includes('regular')) {
//         font.fontStyle = 'normal'
//         font.fontWeight = 'normal 400'
//       }
//       if (name?.toLowerCase().includes('italic') || name?.endsWith('It'))
//         font.fontStyle = 'italic'
//       if (
//         name?.toLowerCase().includes('bold') ||
//         name?.toLowerCase().includes('Bd')
//       )
//         font.fontWeight = 'bold 700'
//       if (name?.toLowerCase().includes('light')) font.fontWeight = '300'
//       if (name?.toLowerCase().includes('medium')) font.fontWeight = '500'
//       return font
//     }
//   )
//   return fontDefs.map(font => fontFace(font))
// }

export const fontFaces = fontFilenames.map(
  ({ postScriptName, fontFamily, style, weight, formats }) =>
    fontFace({
      fontFamily: fontFamily, // e.g. 'EskapadeFraktur'
      fontFilePath: `/fonts/${postScriptName}`,
      fontDisplay: 'swap',
      fontVariant: 'tabular-nums',
      fontStyle: style,
      fontWeight: weight,
      fileFormats: formats
    })
)

export const CSSFontFaceDeclarations = fontFilenames.reduce(
  (acc, { postScriptName, fontFamily, style, weight, formats }) =>
    (acc += `@font-face {
    font-family: ${fontFamily};
    src: ${generateCSSFontSrc({ postScriptName, formats })};
    font-style: '${style}';
    font-weight: '${weight}';
    font-display: swap;
  }`),
  ``
)

// For code splitting purposes, separate font-face definitions
export const fonts = css`
  ${CSSFontFaceDeclarations}
  .serif, .font-serif {
    font-family: ${serif};
    p {
      font-family: ${serif};
    }
  }
  .sans,
  .font-sans {
    font-family: ${sans};
    p {
      font-family: ${sans};
    }
  }
  .fraktur,
  .font-fraktur {
    font-family: ${fraktur};
  }
  .mono,
  .font-mono {
    font-family: ${mono};
  }
`

/* unused font css string
@font-face {
    font-family: 'EskapadeFraktur';
    src: url('/fonts/EskapadeFraktur-Regular.woff2');
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'EskapadeFraktur';
    src: url('/fonts/EskapadeFraktur-Italic.woff2');
    font-style: italic;
    font-weight: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'EskapadeFraktur';
    src: url('/fonts/EskapadeFraktur-Black.woff2');
    font-style: normal;
    font-weight: bold;
    font-display: swap;
  }
  @font-face {
    font-family: 'EskapadeFraktur';
    src: url('/fonts/EskapadeFraktur-BlackItalic.woff2');
    font-style: italic;
    font-weight: bold;
    font-display: swap;
  }
  @font-face {
    font-family: 'Eskapade';
    src: url('/fonts/Eskapade-Regular.woff2');
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Eskapade';
    src: url('/fonts/Eskapade-RegularItalic.woff2');
    font-style: italic;
    font-weight: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Eskapade';
    src: url('/fonts/Eskapade-Bold.woff2');
    font-style: normal;
    font-weight: bold;
    font-display: swap;
  }
  @font-face {
    font-family: 'Eskapade';
    src: url('/fonts/Eskapade-BoldItalic.woff2');
    font-style: italic;
    font-weight: bold;
    font-display: swap;
  }
  @font-face {
    font-family: 'CorporateS';
    src: url('/fonts/CorporateSPro-Regular.woff2');
    font-display: swap;
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: 'CorporateS';
    src: url('/fonts/CorporateSPro-Italic.woff2');
    font-style: italic;
    font-weight: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'CorporateS';
    src: url('/fonts/CorporateSPro-Bold.woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'CorporateS';
    src: url('/fonts/CorporateSPro-BoldItalic.woff2');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'CorporateS';
    src: url('/fonts/CorporateSPro-Light.woff2');
    font-weight: 200;
    font-display: swap;
  }
  @font-face {
    font-family: 'CorporateS';
    src: url('/fonts/CorporateSPro-LightItalic.woff2');
    font-weight: 200;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'CorporateS';
    src: url('/fonts/CorporateSPro-Medium.woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'CorporateS';
    src: url('/fonts/CorporateSPro-MediumItalic.woff2');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'CorporateA';
    src: url('/fonts/CorporateAPro-Regular.woff2');
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'CorporateA';
    src: url('/fonts/CorporateAPro-RegularItalic.woff2');
    font-style: italic;
    font-weight: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'CorporateA';
    src: url('/fonts/CorporateAPro-Bold.woff2');
    font-style: normal;
    font-weight: bold;
    font-display: swap;
  }
  @font-face {
    font-family: 'CorporateA';
    src: url('/fonts/CorporateAPro-BoldItalic.woff2');
    font-style: italic;
    font-weight: bold;
    font-display: swap;
  } */
