import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'

import SEO from '../components/SEO'

const BlogPostTemplateStyles = styled.div`
  max-width: 90vw;
  @media (max-width: ${({ theme }) => theme.maxWidthLg}) {
    max-width: ${({ theme }) => theme.maxWidthLg};
  }
  @media (max-width: ${({ theme }) => theme.maxWidthMd}) {
    .post-content-image {
      max-width: 100vw;
      width: 100vw;
    }
  }
`

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark
  // const siteTitle = props.data.site.siteMetadata.title
  return (
    <div>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className={`post-content ${post.frontmatter.thumbnail || 'no-image'}`}
      >
        <BlogPostTemplateStyles>
          <header className='post-content-header'>
            <h1 className='post-content-title'>{post.frontmatter.title}</h1>
          </header>

          {post.frontmatter.description && (
            <p className='post-content-excerpt'>
              {post.frontmatter.description}
            </p>
          )}

          {post.frontmatter.thumbnail && (
            <div className='post-content-image'>
              <Img
                className='kg-image'
                fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
                alt={post.frontmatter.title}
              />
            </div>
          )}

          <div
            className='post-content-body'
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </BlogPostTemplateStyles>

        <footer className='post-content-footer' />
      </article>
    </div>
  )
}

export default BlogPostTemplate

BlogPostTemplate.propTypes = {
  data: PropTypes.object
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1360, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
