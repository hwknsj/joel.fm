import PostCard from '@/components/post-card'
import { SEO } from '@/components/seo'
import { graphql, PageProps } from 'gatsby'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import * as React from 'react'
import { Post, MarkdownPost } from 'types/posts'

const IndexPage = ({
  data: {
    site: {
      // @ts-ignore
      siteMetadata: { title, description }
    },
    allMarkdownRemark: { posts }
  }
}: PageProps<Queries.IndexPageQuery>) => {
  let postCounter = 0

  return (
    <>
      {description && (
        <header className='page-head'>
          <h2 className='page-head-title'>{description}</h2>
        </header>
      )}
      <section className='post-feed'>
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
      </section>
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

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: [{ frontmatter: { date: DESC } }]) {
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

export const Head = ({ data }: PageProps<Queries.IndexPageQuery>) => (
  <SEO title={data.site?.siteMetadata.title} />
)
