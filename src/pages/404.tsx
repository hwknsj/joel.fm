import { SEO } from '@/components/seo'
import { Link, graphql, type PageProps } from 'gatsby'
import PropTypes from 'prop-types'
import * as React from 'react'

// type DataProps = {
//   site: {
//     siteMetaData: {
//       title
//     }
//   }
// }

const NotFoundPage = () => {
  return (
    <article className='post-content page-template no-image'>
      <div className='post-content-body'>
        <h2>404: no page {`here`}, cuz</h2>
        <p className='text-center'>
          you{`&apos;`}re in the wrong place <br />i{`&apos;`}d just{' '}
          <Link to='/'>go home</Link>
        </p>
      </div>
    </article>
  )
}

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string
      })
    })
  })
  // location: PropTypes.object
}

export default NotFoundPage

// export const query = graphql`
//   query NotFoundPage {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `

export const Head = () => <SEO title={`Page not found`} />
