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

  const postTitle = `Metagram`
  const postDescription = `Continuous digital art piece presented via Instagram.`
  const postClass = `post`
  const url = `https://instagram.com/joel.biz`

  const {
    site: {
      siteMetadata: { title }
    }
  } = useStaticQuery(indexQuery)

  return (
    <>
      <SEO
        title={`${postTitle} | ${title}`}
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
      <article className={`post-content ${postClass} page-template no-image`}>
        <header className='post-content-header'>
          <h2 className='post-content-title'>{`${postTitle}`}</h2>
        </header>
        <p className='post-content-excerpt px-4 justify mx-4'>
          {`${postDescription} `}
          See the real thing{' '}
          <a
            href={url}
            target='_blank'
            title='@joel.biz'
            alt='@joel.biz on Instagram'
            rel='noopener noreferrer'
          >
            @joel.biz
          </a>
          .
        </p>
        <h6 className='center-text'>
          <a href={url} target='_blank' rel='noopener noreferrer' alt={title}>
            {url}
          </a>
        </h6>
        <div className='post-content-body'>
          <blockquote>
            I spend a lot of time on Instagram.<p>~ @joel.biz</p>
          </blockquote>
          <hr />
          <ImageGrid />
        </div>
      </article>
    </>
  )
}

export default MetaGramIndex
