import path from 'node:path'
import siteConfig from './site-config'
import type { GatsbyConfig } from 'gatsby'

export default {
  graphqlTypegen: true,
  siteMetadata: {
    title: siteConfig.name,
    author: siteConfig.author,
    description: siteConfig.description,
    siteUrl: siteConfig.url,
    favicon: siteConfig.favicon,
    social: {
      twitter: siteConfig.twitter,
      instagram: siteConfig.instagram
    }
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(__dirname, 'content', 'projects'),
        name: `projects`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(__dirname, 'content', 'assets'),
        name: `assets`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(__dirname, 'content', 'assets', 'files'),
        name: `files`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(__dirname, 'content', 'assets', 'fonts'),
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
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-104153508-1`
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
        icon: siteConfig.favicon.svg
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
                otf: '/static/fonts/EskapadeFraktur-Regular.otf'
              },
              fontDisplay: 'swap',
              fontVariant: 'tabular-nums',
              fontStyle: 'normal'
            },
            {
              family: 'EskapadeFraktur',
              urls: {
                otf: '/static/fonts/EskapadeFraktur-Italic.otf'
              },
              fontStyle: 'italic',
              fontDisplay: 'swap',
              fontVariant: 'tabular-nums'
            },
            {
              family: 'CorporateS',
              urls: {
                ttf: '/static/fonts/CorporateS-ProRegular.ttf'
              },
              fontStyle: 'normal',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateS',
              urls: {
                ttf: '/static/fonts/CorporateSMedium.ttf'
              },
              fontWeight: '600',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateS',
              urls: {
                ttf: '/static/fonts/CorporateSBold.ttf'
              },
              fontWeight: 'bold',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateS',
              urls: {
                ttf: '/static/fonts/CorporateSItalic.ttf'
              },
              fontStyle: 'italic',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateS',
              urls: {
                ttf: '/static/fonts/CorporateSLight.ttf'
              },
              fontWeight: '200',
              fontDisplay: 'swap'
            },
            {
              family: 'CorporateA',
              urls: {
                ttf: '/static/fonts/CorporateARegular.ttf'
              },
              fontDisplay: 'swap'
            }
          ]
        }
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ]
} as GatsbyConfig
