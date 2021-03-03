import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import PostCard from '../components/PostCard'
import SEO from '../components/SEO'

const MusicPage = () => {
  let postCounter = 0
  const indexQuery = graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/music/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
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
                  fluid(maxWidth: 1600, quality: 100) {
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
  const { site, allMarkdownRemark } = useStaticQuery(indexQuery)
  const posts = allMarkdownRemark.edges

  return (
    <div>
      <SEO
        title='Music'
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

      {site.siteMetadata.description && (
        <header className='page-head'>
          <h2 className='page-head-title'>{site.siteMetadata.description}</h2>
        </header>
      )}
      <div className='post-feed'>
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={'post'}
            />
          )
        })}
      </div>
    </div>
  )
}

MusicPage.propTypes = {}

export default MusicPage
