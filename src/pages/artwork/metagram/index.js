import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import ImageGrid from '../../../components/ImageGrid'
import SEO from '../../../components/SEO'

const MetaGramIndex = () => {
  const indexQuery = graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `

  const {
    site: {
      siteMetadata: { title }
    }
  } = useStaticQuery(indexQuery)
  const pageTitle = `Metagram`
  const siteDescription = `just a stupid thing on i've been doing on instagram for years to try to impress
  people.`

  return (
    <>
      <SEO
        title={`${title} | ${pageTitle}`}
        keywords={[
          'blog',
          'instagram',
          '#netart',
          'javascript',
          'react',
          'its',
          'all',
          'photoshop',
          'joel.biz',
          'joel hawkins',
          'joel',
          'hawkins'
        ]}
      />
      {pageTitle && (
        <header className='page-head'>
          <h2 className='page-head-title'>{`${pageTitle}`}</h2>
        </header>
      )}
      <article className='post-content page-template no-image'>
        <div className='post-content-body'>
          <div className='center-text'>
            <p className='center-text'>{`${siteDescription}`}</p>
            <p className='center-text'>
              see the real thing{' '}
              <a
                href='https://instagram.com/joel.biz/'
                target='_blank'
                title='@joel.biz'
                rel='noopener noreferrer'
              >
                here
              </a>
              .
            </p>
            <p className='italic center-text'>~ @joel.biz</p>
            <p className='italic center-text'>இڿڰۣ-ڰۣ—</p>
            <hr />
          </div>
          <ImageGrid />
        </div>
      </article>
    </>
  )
}

export default MetaGramIndex
