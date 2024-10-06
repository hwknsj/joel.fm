import siteConfig from './site-config'
import type { GatsbyConfig } from 'gatsby'
import path from 'node:path'

export default {
  graphqlTypegen: true,
  siteMetadata: {
    ...siteConfig
  },
  flags: {
    PARTIAL_HYDRATION: true
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`./content/projects`),
        name: `projects`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`./content/assets`),
        name: `assets`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve('./content/assets/files'),
        name: `files`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve('./content/assets/files'),
        name: siteConfig.resumeFilename
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`./content/assets/fonts/`),
        name: `fonts`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1360,
              withWebp: true,
              showCaptions: false,
              quality: 75,
              wrapperStyle: `margin: 7vw 0;`
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
        whitelist: ['whitelist'] // Don't remove this selector
      }
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        sourceMap: true,
        autoLabel: `dev-only`,
        labelFormat: `[local]`,
        cssPropOptimization: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.name,
        short_name: siteConfig.shortName,
        start_url: siteConfig.prefix,
        background_color: `#ffffff`,
        theme_color: `#efefef`,
        display: `minimal-ui`,
        icon: path.resolve(__dirname, 'static/logo.png')
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'ctg8wag'
        }
      }
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          selfHosted: [
            {
              family: 'eskapade-fraktur',
              urls: {
                otf: './static/fonts/EskapadeFraktur-Regular.otf',
                woff2: './static/fonts/EskapadeFraktur-Regular.woff2',
                woff: './static/fonts/EskapadeFraktur-Regular.woff',
                ttf: './static/fonts/EskapadeFraktur-Regular.ttf',
                eot: './static/fonts/EskapadeFraktur-Regular.eot'
              },
              fontWeight: 'normal',
              fontStyle: 'normal',
              fontDisplay: 'swap',
              fontVariant: 'tabular-nums'
            },
            {
              family: 'eskapade-fraktur',
              urls: {
                otf: './static/fonts/EskapadeFraktur-Italic.otf',
                woff2: './static/fonts/EskapadeFraktur-RegularItalic.woff2',
                woff: './static/fonts/EskapadeFraktur-RegularItalic.woff',
                ttf: './static/fonts/EskapadeFraktur-RegularItalic.ttf',
                eot: './static/fonts/EskapadeFraktur-RegularItalic.eot'
              },
              fontWeight: 'normal',
              fontStyle: 'italic',
              fontDisplay: 'swap',
              fontVariant: 'tabular-nums'
            },
            {
              family: 'eskapade-fraktur',
              urls: {
                woff2: './static/fonts/EskapadeFraktur-Thin.woff2',
                woff: './static/fonts/EskapadeFraktur-Thin.woff',
                ttf: './static/fonts/EskapadeFraktur-Thin.ttf',
                eot: './static/fonts/EskapadeFraktur-Thin.eot'
              },
              fontWeight: '200',
              fontStyle: 'normal',
              fontDisplay: 'swap',
              fontVariant: 'tabular-nums'
            },
            {
              family: 'eskapade-fraktur',
              urls: {
                woff2: './static/fonts/EskapadeFraktur-ThinItalic.woff2',
                woff: './static/fonts/EskapadeFraktur-ThinItalic.woff',
                ttf: './static/fonts/EskapadeFraktur-ThinItalic.ttf',
                eot: './static/fonts/EskapadeFraktur-ThinItalic.eot'
              },
              fontWeight: '200',
              fontStyle: 'italic',
              fontDisplay: 'swap',
              fontVariant: 'tabular-nums'
            },
            {
              family: 'eskapade-fraktur',
              urls: {
                woff2: './static/fonts/EskapadeFraktur-Black.woff2',
                woff: './static/fonts/EskapadeFraktur-Black.woff',
                ttf: './static/fonts/EskapadeFraktur-Black.ttf',
                eot: './static/fonts/EskapadeFraktur-Black.eot'
              },
              fontWeight: 'bold',
              fontStyle: 'normal',
              fontDisplay: 'swap',
              fontVariant: 'tabular-nums'
            },
            {
              family: 'eskapade-fraktur',
              urls: {
                woff2: './static/fonts/EskapadeFraktur-BlackItalic.woff2',
                woff: './static/fonts/EskapadeFraktur-BlackItalic.woff',
                ttf: './static/fonts/EskapadeFraktur-BlackItalic.ttf',
                eot: './static/fonts/EskapadeFraktur-BlackItalic.eot'
              },
              fontWeight: 'bold',
              fontStyle: 'italic',
              fontDisplay: 'swap',
              fontVariant: 'tabular-nums'
            },
            {
              family: 'corporate-s',
              urls: {
                ttf: './static/fonts/CorporateSPro-Light.ttf',
                eot: './static/fonts/CorporateSPro-Light.eot',
                woff: './static/fonts/CorporateSPro-Light.woff',
                woff2: './static/fonts/CorporateSPro-Light.woff2'
              },
              fontWeight: '300',
              fontStyle: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'corporate-s',
              urls: {
                ttf: './static/fonts/CorporateSPro-LightItalic.ttf',
                eot: './static/fonts/CorporateSPro-LightItalic.eot',
                woff: './static/fonts/CorporateSPro-LightItalic.woff',
                woff2: './static/fonts/CorporateSPro-LightItalic.woff2'
              },
              fontWeight: '300',
              fontStyle: 'italic',
              fontDisplay: 'swap'
            },
            {
              family: 'corporate-s',
              urls: {
                ttf: './static/fonts/CorporateSPro-Regular.ttf',
                eot: './static/fonts/CorporateSPro-Regular.eot',
                woff: './static/fonts/CorporateSPro-Regular.woff',
                woff2: './static/fonts/CorporateSPro-Regular.woff2'
              },
              fontWeight: 'normal',
              fontStyle: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'corporate-s',
              urls: {
                ttf: './static/fonts/CorporateSPro-RegularItalic.ttf',
                eot: './static/fonts/CorporateSPro-RegularItalic.eot',
                woff: './static/fonts/CorporateSPro-RegularItalic.woff',
                woff2: './static/fonts/CorporateSPro-RegularItalic.woff2'
              },
              fontStyle: 'italic',
              fontWeight: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'corporate-s',
              urls: {
                ttf: './static/fonts/CorporateSPro-Demi.ttf',
                eot: './static/fonts/CorporateSPro-Demi.eot',
                woff: './static/fonts/CorporateSPro-Demi.woff',
                woff2: './static/fonts/CorporateSPro-Demi.woff2'
              },
              fontWeight: '500',
              fontStyle: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'corporate-s',
              urls: {
                ttf: './static/fonts/CorporateSPro-DemiItalic.ttf',
                eot: './static/fonts/CorporateSPro-DemiItalic.eot',
                woff: './static/fonts/CorporateSPro-DemiItalic.woff',
                woff2: './static/fonts/CorporateSPro-DemiItalic.woff2'
              },
              fontWeight: '500',
              fontStyle: 'italic',
              fontDisplay: 'swap'
            },
            {
              family: 'corporate-s',
              urls: {
                ttf: './static/fonts/CorporateSPro-Medium.ttf',
                eot: './static/fonts/CorporateSPro-Medium.eot',
                woff: './static/fonts/CorporateSPro-Medium.woff',
                woff2: './static/fonts/CorporateSPro-Medium.woff2'
              },
              fontWeight: '600',
              fontStyle: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'corporate-s',
              urls: {
                ttf: './static/fonts/CorporateSPro-MediumItalic.ttf',
                eot: './static/fonts/CorporateSPro-MediumItalic.eot',
                woff: './static/fonts/CorporateSPro-MediumItalic.woff',
                woff2: './static/fonts/CorporateSPro-MediumItalic.woff2'
              },
              fontWeight: '600',
              fontStyle: 'italic',
              fontDisplay: 'swap'
            },
            {
              family: 'corporate-s',
              urls: {
                ttf: './static/fonts/CorporateSPro-Bold.ttf',
                eot: './static/fonts/CorporateSPro-Bold.eot',
                woff: './static/fonts/CorporateSPro-Bold.woff',
                woff2: './static/fonts/CorporateSPro-Bold.woff2'
              },
              fontWeight: 'bold',
              fontStyle: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'corporate-s',
              urls: {
                ttf: './static/fonts/CorporateSPro-BoldItalic.ttf',
                eot: './static/fonts/CorporateSPro-BoldItalic.eot',
                woff: './static/fonts/CorporateSPro-BoldItalic.woff',
                woff2: './static/fonts/CorporateSPro-BoldItalic.woff2'
              },
              fontWeight: 'bold',
              fontStyle: 'italic',
              fontDisplay: 'swap'
            },
            {
              family: 'corporate-s',
              urls: {
                ttf: './static/fonts/CorporateSPro-ExtraBold.ttf',
                eot: './static/fonts/CorporateSPro-ExtraBold.eot',
                woff: './static/fonts/CorporateSPro-ExtraBold.woff',
                woff2: './static/fonts/CorporateSPro-ExtraBold.woff2'
              },
              fontWeight: '800',
              fontStyle: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'corporate-s',
              urls: {
                ttf: './static/fonts/CorporateSPro-ExtraBoldItalic.ttf',
                eot: './static/fonts/CorporateSPro-ExtraBoldItalic.eot',
                woff: './static/fonts/CorporateSPro-ExtraBoldItalic.woff',
                woff2: './static/fonts/CorporateSPro-ExtraBoldItalic.woff2'
              },
              fontWeight: '800',
              fontStyle: 'italic',
              fontDisplay: 'swap'
            },
            {
              family: 'corporate-a',
              urls: {
                ttf: './static/fonts/CorporateAPro-Regular.ttf',
                eot: './static/fonts/CorporateAPro-Regular.eot',
                woff: './static/fonts/CorporateAPro-Regular.woff',
                woff2: './static/fonts/CorporateAPro-Regular.woff2'
              },
              fontWeight: 'normal',
              fontStyle: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'corporate-a',
              urls: {
                ttf: './static/fonts/CorporateAPro-RegularItalic.ttf',
                eot: './static/fonts/CorporateAPro-RegularItalic.eot',
                woff: './static/fonts/CorporateAPro-RegularItalic.woff',
                woff2: './static/fonts/CorporateAPro-RegularItalic.woff2'
              },
              fontStyle: 'italic',
              fontWeight: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'corporate-a',
              urls: {
                ttf: './static/fonts/CorporateAPro-Demi.ttf',
                eot: './static/fonts/CorporateAPro-Demi.eot',
                woff: './static/fonts/CorporateAPro-Demi.woff',
                woff2: './static/fonts/CorporateAPro-Demi.woff2'
              },
              fontWeight: '500',
              fontStyle: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'corporate-a',
              urls: {
                ttf: './static/fonts/CorporateAPro-DemiItalic.ttf',
                eot: './static/fonts/CorporateAPro-DemiItalic.eot',
                woff: './static/fonts/CorporateAPro-DemiItalic.woff',
                woff2: './static/fonts/CorporateAPro-DemiItalic.woff2'
              },
              fontWeight: '500',
              fontStyle: 'italic',
              fontDisplay: 'swap'
            },
            {
              family: 'corporate-a',
              urls: {
                ttf: './static/fonts/CorporateAPro-Medium.ttf',
                eot: './static/fonts/CorporateAPro-Medium.eot',
                woff: './static/fonts/CorporateAPro-Medium.woff',
                woff2: './static/fonts/CorporateAPro-Medium.woff2'
              },
              fontWeight: '600',
              fontStyle: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'corporate-a',
              urls: {
                ttf: './static/fonts/CorporateAPro-MediumItalic.ttf',
                eot: './static/fonts/CorporateAPro-MediumItalic.eot',
                woff: './static/fonts/CorporateAPro-MediumItalic.woff',
                woff2: './static/fonts/CorporateAPro-MediumItalic.woff2'
              },
              fontWeight: '600',
              fontStyle: 'italic',
              fontDisplay: 'swap'
            },
            {
              family: 'corporate-a',
              urls: {
                ttf: './static/fonts/CorporateAPro-Bold.ttf',
                eot: './static/fonts/CorporateAPro-Bold.eot',
                woff: './static/fonts/CorporateAPro-Bold.woff',
                woff2: './static/fonts/CorporateAPro-Bold.woff2'
              },
              fontWeight: 'bold',
              fontStyle: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'corporate-a',
              urls: {
                ttf: './static/fonts/CorporateAPro-BoldItalic.ttf',
                eot: './static/fonts/CorporateAPro-BoldItalic.eot',
                woff: './static/fonts/CorporateAPro-BoldItalic.woff',
                woff2: './static/fonts/CorporateAPro-BoldItalic.woff2'
              },
              fontWeight: 'bold',
              fontStyle: 'italic',
              fontDisplay: 'swap'
            }
          ]
        }
      }
    },
    `gatsby-plugin-offline`
  ]
} as GatsbyConfig
