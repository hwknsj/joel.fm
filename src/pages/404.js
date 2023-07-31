import SEO from '@/components/seo'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const NotFoundPage = ({
  data: {
    site: {
      siteMetadata: { title }
    }
  },
  location
}) => {
  return (
    <>
      <SEO
        title={`Page not found | ${title}`}
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
          <h2>404: no page {location.toString() || `here`}, cuz</h2>
          <p className='text-center'>
            you{`&apos;`}re in the wrong place <br />i{`&apos;`}d just{' '}
            <Link to='/'>go home</Link>
          </p>
        </div>
      </article>
    </>
  )
}

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string
      })
    })
  }),
  location: PropTypes.string
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default NotFoundPage
