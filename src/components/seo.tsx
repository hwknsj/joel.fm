import { useSiteMetadata } from '@/lib/use-site-metadata'
import PropTypes from 'prop-types'
import * as React from 'react'

interface SEOProps {
  title?: string
  description?: string
  lang?: string
  pathname?: string
  type?: string
}

export const SEO = ({
  description = 'web design & development',
  lang = 'en',
  title = 'joel.fm',
  pathname = '/',
  type = 'website'
}: SEOProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    favicon,
    siteUrl,
    image,
    social,
    author
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    type: type,
    favicon: favicon,
    image: image
  }
  return (
    <>
      <html lang={lang} />
      <title>{seo.title}</title>
      <link rel='icon' type='image/svg+xml' href={seo.favicon.svg} />
      <link rel='alternate icon' href={seo.favicon.ico} />
      <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      <meta name='og:description' content={seo.description} />
      <meta name='og:url' content={seo.url} />
      <meta name='og:site_name' content={seo.title} />
      <meta name='og:type' content={`website`} />
      <meta name='og:image' content={seo.image} />
      <meta name='og:image:type' content='image/png' />
      <meta name='og:image' content={seo.favicon.svg} />
      <meta name='og:image:type' content='image/svg+xml' />
    </>
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
