import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import PostCard from '../components/PostCard'
import SEO from '../components/SEO'

const ArtworkPage = ({
  data: {
    site,
    allMarkdownRemark: { posts },
    metagramImage
  }
}) => {
  let postCounter = 0
  return (
    <div>
      <SEO
        title='Artwork'
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
          <h2>Artwork</h2>
          <p className='serif'>
            Beyond my digital artwork, I have a large portfolio of physical and
            digital designs for both promotional/commercial and artistic
            purposes. Aside from web design, I specialize in logo & poster
            design which I honed as the aesthetic and digital content manager
            for a booking and party-planning collective at Reed College. I
            created all promotional content including posters, digital flyers,
            web pages, merchandise, and cultivated a cohesive, recognizable
            brand.
          </p>
          <p className='serif'>
            I also handled set design and decoration of event spaces,
            created/curated audio-visual displays to enhance live
            performances–extending beyond events affiliated with Reed College.
            By developing a widely recognized aesthetic, we cultivated
            widespread student support which allowed us to book more acclaimed
            artists and create increasingly elaborate and engaging experiences.
          </p>
        </div>
      </article>
      {site.siteMetadata.description && (
        <header className='page-head'>
          <h2 className='page-head-title'>{site.siteMetadata.description}</h2>
        </header>
      )}
      <div className='post-feed'>
        <PostCard
          key={`/artwork/metagram`}
          count={postCounter}
          frontmatter={{
            date: `December 10, 2020`,
            title: `Metagram`,
            description: `Continuous digital art piece presented via Instagram.`,
            thumbnail: metagramImage
          }}
          slug={
            // excerpt: `Continuous digital art piece presented via Instagram.`,
            `/artwork/metagram`
          }
          postClass={'post'}
        />
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
    </div>
  )
}

ArtworkPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
      })
    }),
    allMarkdownRemark: PropTypes.shape({
      posts: PropTypes.object
    }),
    metagramImage: PropTypes.object
  })
}

export const artworkPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    metagramImage: file(relativePath: { eq: "metagram.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/artwork/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ArtworkPage
