import { useSiteMetadata } from '@/lib/use-site-metadata'
import PropTypes from 'prop-types'
import React from 'react'

interface SEOProps {
  title?: string
  description?: string
  lang?: string
  pathname?: string
  type?: string
}

export const SEO = ({
  title = 'joel.fm',
  description = 'web design & development',
  lang = 'en-US',
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
      <title>
        {seo.title} | {seo.description}
      </title>
      <link rel='icon' type='image/svg+xml' href={seo.favicon.svg} />
      <link rel='alternate icon' href={seo.favicon.ico} />
      <link rel='stylesheet' href='https://use.typekit.net/ctg8wag.css' />
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
  description: 'web design & development',
  lang: 'en-US',
  pathname: '/',
  type: 'website'
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  pathname: PropTypes.string,
  type: PropTypes.string
}