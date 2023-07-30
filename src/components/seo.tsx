import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet, { HelmetProps } from 'react-helmet'
import React from 'react'

interface SEOProps extends HelmetProps {
  title?: string
  keywords?: string[]
  description?: string
  lang?: string
}

const defaultKeywords = [
  'joel.biz',
  '@joel.biz',
  'joel.fm',
  'joel hawkins',
  'joél',
  'hawkins',
  'torres',
  'hwknsj',
  'web design',
  'web developer',
  'web development',
  'web designer',
  'portland',
  'pdx',
  'javascript',
  'typescript',
  'reed college',
  'jtor',
  'nike',
  'apple',
  'react',
  'software engineer',
  'los angeles',
  'LA',
  'designer'
]

const SEO = ({
  description = 'web design & development',
  lang = 'en',
  keywords = [],
  title = 'joel.fm'
}: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            social {
              instagram
              twitter
            }
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title || metaTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:url',
          content: site.siteMetadata.siteUrl
        },
        {
          property: 'og:title',
          content: title || metaTitle
        },
        {
          property: 'og:site_name',
          content: title || metaTitle
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:type',
          content: 'website'
        }
      ].concat({
        name: 'keywords',
        content: [...keywords, ...defaultKeywords].join(', ')
      })}
    >
      <html lang='en' />
      <title>{metaTitle}</title>
      <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      <link rel='alternate icon' href='/favicon.ico' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta charSet='utf-8' />
      <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
    </Helmet>
  )
}

SEO.defaultProps = {
  title: 'joel.fm',
  lang: 'en',
  keywords: [],
  description: 'web design & development'
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default SEO
