import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import PostCard from '../components/PostCard'
import SEO from '../components/SEO'

const IndexPage = ({
  data: {
    site: {
      siteMetadata: { title, description }
    },
    allMarkdownRemark: { posts }
  }
}) => {
  let postCounter = 0

  return (
    <>
      <SEO
        title={`Home | ${title}`}
        keywords={[
          'blog',
          'joel',
          'hawkins',
          'torres',
          'joel hawkins',
          'joel hawkins torres',
          'joel.biz',
          '@joel.biz',
          'joel.fm',
          'gatsby',
          'javascript',
          'react'
        ]}
      />
      {description && (
        <header className='page-head'>
          <h2 className='page-head-title'>{description}</h2>
        </header>
      )}
      <div className='post-feed'>
        {posts.map(
          ({
            node: {
              frontmatter,
              fields: { slug }
            }
          }) => {
            postCounter++
            return (
              <PostCard
                key={slug}
                count={postCounter}
                frontmatter={frontmatter}
                slug={slug}
                postClass={'post'}
              />
            )
          }
        )}
      </div>
    </>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
      })
    }),
    allMarkdownRemark: PropTypes.shape({
      posts: PropTypes.arrayOf(PropTypes.object)
    })
  })
}

export const indexPageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      posts: edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
