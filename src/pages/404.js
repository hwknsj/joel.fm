import { Link, graphql } from 'gatsby'
import React from 'react'

import SEO from '../components/SEO'

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <div>
      <SEO
        title={`${siteTitle} | 404: Not Found`}
        keywords={[
          'blog',
          'joel',
          'hawkins',
          'joel hawkins',
          'joel.biz',
          'gatsby',
          'javascript',
          'react'
        ]}
      />

      <article className='post-content page-template no-image'>
        <div className='post-content-body'>
          <h2>404: no page here, cuz</h2>
          <p className='center-text'>
            you're in the wrong place <br />
            i'd just <Link to='/'>go home</Link>
          </p>
        </div>
      </article>
    </div>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
