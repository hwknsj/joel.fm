import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import PostCard from '../components/PostCard'
import SEO from '../components/SEO'

const BlogIndex = (props, location) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
  `)

  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <div>
      <SEO
        title='Home'
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
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className='page-head'>
          <h2 className='page-head-title'>
            {data.site.siteMetadata.description}
          </h2>
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

export default BlogIndex
