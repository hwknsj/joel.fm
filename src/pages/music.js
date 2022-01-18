import PostCard from '@/components/PostCard'
import SEO from '@/components/SEO'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const MusicPage = ({
  data: {
    site,
    allMarkdownRemark: { posts }
  }
}) => {
  let postCounter = 0

  const { title } = site.siteMetadata

  return (
    <>
      <SEO
        title={`Music | ${title}`}
        keywords={[
          'blog',
          'joel',
          'hawkins',
          'joel hawkins',
          'joel hawkins torres',
          'joel.fm',
          'joel.biz',
          '@joel.biz',
          'gatsby',
          'javascript',
          'react',
          'soundcloud'
        ]}
      />

      <article className='post-content page-template no-image'>
        <div className='post-content-body'>
          <h2>Music</h2>
          <p className='serif'>
            I began composing music at a young age and have played a variety of
            different instruments throughout my life, though I actively focus on
            a few specific areas; throughout high school, I focused on drums &
            percussion in the jazz tradition–specifically jazz fusion and bop
            styles. As a classically trained vocalist, I sang in the Reed
            College Collegium (a small selective choir) throughout my college
            career.
          </p>

          <p className='serif'>
            I currently produce hip-hop and electronic music and occasionally DJ
            live events. My musical work can be found on my SoundCloud,
            Mixcloud, and on joelhawkins.info.
          </p>

          <p className='serif'>
            Below are select works that I believe best represent my current
            musical interests and influences.
          </p>
        </div>
      </article>

      {title && (
        <header className='page-head'>
          <h2 className='page-head-title'>{title}</h2>
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

export const musicPageQuery = graphql`
  {
    site: site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/music/" } }
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
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`

MusicPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
      })
    }),
    allMarkdownRemark: PropTypes.shape({
      posts: PropTypes.object
    })
  })
}

export default MusicPage
