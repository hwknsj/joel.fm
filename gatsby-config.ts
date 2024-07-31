import siteConfig from './site-config'
import type { GatsbyConfig } from 'gatsby'
import path from 'node:path'

export default {
  graphqlTypegen: true,
  siteMetadata: {
    ...siteConfig
    // name: siteConfig.name,
    // shortName: siteConfig.shortName,
    // description: siteConfig.description,
    // siteUrl: siteConfig.siteUrl,
    // title: siteConfig.title,
    // favicon: siteConfig.favicon,
    // logo: siteConfig.logo,
    // image: siteConfig.image,
    // resumeFilename: siteConfig.resumeFilename,
    // prefix: siteConfig.prefix,
    // author: siteConfig.author,
    // email: siteConfig.email,
    // social: siteConfig.social
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
        path: path.resolve('./content/assets/fonts'),
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
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `UA-104153508-1`
    //   }
    // },
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
              family: 'EskapadeFraktur',
              urls: {
                otf: './content/assets/fonts/EskapadeFraktur-Regular.otf',
                woff2: './content/assets/fonts/EskapadeFraktur-Regular.woff2',
                woff: './content/assets/fonts/EskapadeFraktur-Regular.woff',
                ttf: './content/assets/fonts/EskapadeFraktur-Regular.ttf',
                eot: './content/assets/fonts/EskapadeFraktur-Regular.eot'
              },
              fontWeight: 'normal',
              fontStyle: 'normal',
              fontDisplay: 'swap',
              fontVariant: 'tabular-nums'
            },
            {
              family: 'EskapadeFraktur',
              urls: {
                otf: './content/assets/fonts/EskapadeFraktur-Italic.otf',
                woff2:
                  './content/assets/fonts/EskapadeFraktur-RegularItalic.woff2',
                woff: './content/assets/fonts/EskapadeFraktur-RegularItalic.woff',
                ttf: './content/assets/fonts/EskapadeFraktur-RegularItalic.ttf',
                eot: './content/assets/fonts/EskapadeFraktur-RegularItalic.eot'
              },
              fontWeight: 'normal',
              fontStyle: 'italic',
              fontDisplay: 'swap',
              fontVariant: 'tabular-nums'
            },
            {
              family: 'EskapadeFraktur',
              urls: {
                woff2: './content/assets/fonts/EskapadeFraktur-Thin.woff2',
                woff: './content/assets/fonts/EskapadeFraktur-Thin.woff',
                ttf: './content/assets/fonts/EskapadeFraktur-Thin.ttf',
                eot: './content/assets/fonts/EskapadeFraktur-Thin.eot'
              },
              fontWeight: '200',
              fontStyle: 'normal',
              fontDisplay: 'swap',
              fontVariant: 'tabular-nums'
            },
            {
              family: 'EskapadeFraktur',
              urls: {
                woff2:
                  './content/assets/fonts/EskapadeFraktur-ThinItalic.woff2',
                woff: './content/assets/fonts/EskapadeFraktur-ThinItalic.woff',
                ttf: './content/assets/fonts/EskapadeFraktur-ThinItalic.ttf',
                eot: './content/assets/fonts/EskapadeFraktur-ThinItalic.eot'
              },
              fontWeight: '200',
              fontStyle: 'italic',
              fontDisplay: 'swap',
              fontVariant: 'tabular-nums'
            },
            {
              family: 'EskapadeFraktur',
              urls: {
                woff2: './content/assets/fonts/EskapadeFraktur-Black.woff2',
                woff: './content/assets/fonts/EskapadeFraktur-Black.woff',
                ttf: './content/assets/fonts/EskapadeFraktur-Black.ttf',
                eot: './content/assets/fonts/EskapadeFraktur-Black.eot'
              },
              fontWeight: 'bold',
              fontStyle: 'normal',
              fontDisplay: 'swap',
              fontVariant: 'tabular-nums'
            },
            {
              family: 'EskapadeFraktur',
              urls: {
                woff2:
                  './content/assets/fonts/EskapadeFraktur-BlackItalic.woff2',
                woff: './content/assets/fonts/EskapadeFraktur-BlackItalic.woff',
                ttf: './content/assets/fonts/EskapadeFraktur-BlackItalic.ttf',
                eot: './content/assets/fonts/EskapadeFraktur-BlackItalic.eot'
              },
              fontWeight: 'bold',
              fontStyle: 'italic',
              fontDisplay: 'swap',
              fontVariant: 'tabular-nums'
            },
            {
              family: 'CorporateS',
              urls: {
                ttf: './content/assets/fonts/CorporateSPro-Light.ttf',
                eot: './content/assets/fonts/CorporateSPro-Light.eot',
                woff: './content/assets/fonts/CorporateSPro-Light.woff',
                woff2: './content/assets/fonts/CorporateSPro-Light.woff2'
              },
              fontWeight: '300',
              fontStyle: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateS',
              urls: {
                ttf: './content/assets/fonts/CorporateSPro-LightItalic.ttf',
                eot: './content/assets/fonts/CorporateSPro-LightItalic.eot',
                woff: './content/assets/fonts/CorporateSPro-LightItalic.woff',
                woff2: './content/assets/fonts/CorporateSPro-LightItalic.woff2'
              },
              fontWeight: '300',
              fontStyle: 'italic',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateS',
              urls: {
                ttf: './content/assets/fonts/CorporateSPro-Regular.ttf',
                eot: './content/assets/fonts/CorporateSPro-Regular.eot',
                woff: './content/assets/fonts/CorporateSPro-Regular.woff',
                woff2: './content/assets/fonts/CorporateSPro-Regular.woff2'
              },
              fontWeight: 'normal',
              fontStyle: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateS',
              urls: {
                ttf: './content/assets/fonts/CorporateSPro-RegularItalic.ttf',
                eot: './content/assets/fonts/CorporateSPro-RegularItalic.eot',
                woff: './content/assets/fonts/CorporateSPro-RegularItalic.woff',
                woff2:
                  './content/assets/fonts/CorporateSPro-RegularItalic.woff2'
              },
              fontStyle: 'italic',
              fontWeight: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateS',
              urls: {
                ttf: './content/assets/fonts/CorporateSPro-Demi.ttf',
                eot: './content/assets/fonts/CorporateSPro-Demi.eot',
                woff: './content/assets/fonts/CorporateSPro-Demi.woff',
                woff2: './content/assets/fonts/CorporateSPro-Demi.woff2'
              },
              fontWeight: '500',
              fontStyle: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateS',
              urls: {
                ttf: './content/assets/fonts/CorporateSPro-DemiItalic.ttf',
                eot: './content/assets/fonts/CorporateSPro-DemiItalic.eot',
                woff: './content/assets/fonts/CorporateSPro-DemiItalic.woff',
                woff2: './content/assets/fonts/CorporateSPro-DemiItalic.woff2'
              },
              fontWeight: '500',
              fontStyle: 'italic',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateS',
              urls: {
                ttf: '/content/assets/fonts/CorporateSPro-Medium.ttf',
                eot: '/content/assets/fonts/CorporateSPro-Medium.eot',
                ttf: './content/assets/fonts/CorporateSPro-Medium.woff',
                woff2: './content/assets/fonts/CorporateSPro-Medium.woff2'
              },
              fontWeight: '600',
              fontStyle: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateS',
              urls: {
                ttf: './content/assets/fonts/CorporateSPro-MediumItalic.ttf',
                eot: './content/assets/fonts/CorporateSPro-MediumItalic.eot',
                woff: './content/assets/fonts/CorporateSPro-MediumItalic.woff',
                woff2: './content/assets/fonts/CorporateSPro-MediumItalic.woff2'
              },
              fontWeight: '600',
              fontStyle: 'italic',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateS',
              urls: {
                ttf: './content/assets/fonts/CorporateSPro-Bold.ttf',
                eot: './content/assets/fonts/CorporateSPro-Bold.eot',
                woff: './content/assets/fonts/CorporateSPro-Bold.woff',
                woff2: './content/assets/fonts/CorporateSPro-Bold.woff2'
              },
              fontWeight: 'bold',
              fontStyle: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateS',
              urls: {
                ttf: './content/assets/fonts/CorporateSPro-BoldItalic.ttf',
                eot: './content/assets/fonts/CorporateSPro-BoldItalic.eot',
                woff: './content/assets/fonts/CorporateSPro-BoldItalic.woff',
                woff2: './content/assets/fonts/CorporateSPro-BoldItalic.woff2'
              },
              fontWeight: 'bold',
              fontStyle: 'italic',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateS',
              urls: {
                ttf: './content/assets/fonts/CorporateSPro-ExtraBold.ttf',
                eot: './content/assets/fonts/CorporateSPro-ExtraBold.eot',
                woff: './content/assets/fonts/CorporateSPro-ExtraBold.woff',
                woff2: './content/assets/fonts/CorporateSPro-ExtraBold.woff2'
              },
              fontWeight: '800',
              fontStyle: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateS',
              urls: {
                ttf: './content/assets/fonts/CorporateSPro-ExtraBoldItalic.ttf',
                eot: './content/assets/fonts/CorporateSPro-ExtraBoldItalic.eot',
                woff: './content/assets/fonts/CorporateSPro-ExtraBoldItalic.woff',
                woff2:
                  './content/assets/fonts/CorporateSPro-ExtraBoldItalic.woff2'
              },
              fontWeight: '800',
              fontStyle: 'italic',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateA',
              urls: {
                ttf: './content/assets/fonts/CorporateAPro-Regular.ttf',
                eot: './content/assets/fonts/CorporateAPro-Regular.eot',
                woff: './content/assets/fonts/CorporateAPro-Regular.woff',
                woff2: './content/assets/fonts/CorporateAPro-Regular.woff2'
              },
              fontWeight: 'normal',
              fontStyle: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateA',
              urls: {
                ttf: './content/assets/fonts/CorporateAPro-RegularItalic.ttf',
                eot: './content/assets/fonts/CorporateAPro-RegularItalic.eot',
                woff: './content/assets/fonts/CorporateAPro-RegularItalic.woff',
                woff2:
                  './content/assets/fonts/CorporateAPro-RegularItalic.woff2'
              },
              fontStyle: 'italic',
              fontWeight: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateA',
              urls: {
                ttf: './content/assets/fonts/CorporateAPro-Demi.ttf',
                eot: './content/assets/fonts/CorporateAPro-Demi.eot',
                woff: './content/assets/fonts/CorporateAPro-Demi.woff',
                woff2: './content/assets/fonts/CorporateAPro-Demi.woff2'
              },
              fontWeight: '500',
              fontStyle: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateA',
              urls: {
                ttf: './content/assets/fonts/CorporateAPro-DemiItalic.ttf',
                eot: './content/assets/fonts/CorporateAPro-DemiItalic.eot',
                woff: './content/assets/fonts/CorporateAPro-DemiItalic.woff',
                woff2: './content/assets/fonts/CorporateAPro-DemiItalic.woff2'
              },
              fontWeight: '500',
              fontStyle: 'italic',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateA',
              urls: {
                ttf: '/content/assets/fonts/CorporateAPro-Medium.ttf',
                eot: '/content/assets/fonts/CorporateAPro-Medium.eot',
                ttf: './content/assets/fonts/CorporateAPro-Medium.woff',
                woff2: './content/assets/fonts/CorporateAPro-Medium.woff2'
              },
              fontWeight: '600',
              fontStyle: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateA',
              urls: {
                ttf: './content/assets/fonts/CorporateAPro-MediumItalic.ttf',
                eot: './content/assets/fonts/CorporateAPro-MediumItalic.eot',
                woff: './content/assets/fonts/CorporateAPro-MediumItalic.woff',
                woff2: './content/assets/fonts/CorporateAPro-MediumItalic.woff2'
              },
              fontWeight: '600',
              fontStyle: 'italic',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateA',
              urls: {
                ttf: './content/assets/fonts/CorporateAPro-Bold.ttf',
                eot: './content/assets/fonts/CorporateAPro-Bold.eot',
                woff: './content/assets/fonts/CorporateAPro-Bold.woff',
                woff2: './content/assets/fonts/CorporateAPro-Bold.woff2'
              },
              fontWeight: 'bold',
              fontStyle: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateA',
              urls: {
                ttf: './content/assets/fonts/CorporateAPro-BoldItalic.ttf',
                eot: './content/assets/fonts/CorporateAPro-BoldItalic.eot',
                woff: './content/assets/fonts/CorporateAPro-BoldItalic.woff',
                woff2: './content/assets/fonts/CorporateAPro-BoldItalic.woff2'
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
