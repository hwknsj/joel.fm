import { SEO } from '@/components/index'
import styled from '@emotion/styled'
import cx from 'classnames'
import { graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import React from 'react'

interface BlogPostQuery {
  data: {
    site: {
      siteMetadata: {
        title: string
        author: string
      }
    }
    post: {
      id: string | number
      excerpt?: string
      frontmatter: {
        title: string
        date: string
        description?: string
        url: string
        thumbnail?: {
          childImageSharp?: {
            gatsbyImageData?: IGatsbyImageData
          }
        }
      }
      html: string
    }
  }
}

const BlogPostTemplateStyles = styled.article`
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

const BlogPostTemplate = ({
  data: {
    site,
    post: {
      excerpt,
      html,
      frontmatter: { thumbnail, title, description, url }
    }
  }
}: BlogPostQuery) => {
  return (
    <>
      <SEO
        title={`${title} | ${site.siteMetadata.title}`}
        description={description || excerpt}
      />
      <BlogPostTemplateStyles
        className={cx(`page-template`, `post-content`, {
          [`no-image`]: !thumbnail
        })}
      >
        <header className='post-content-header'>
          <h2 className='post-content-title'>{title}</h2>
        </header>

        <p className='post-content-excerpt px-4 justify mx-4'>
          {description || excerpt}
        </p>

        {thumbnail?.childImageSharp?.gatsbyImageData && (
          <section className='post-content-image'>
            <GatsbyImage
              image={thumbnail?.childImageSharp?.gatsbyImageData}
              className='kg-image'
              alt={title}
            />
          </section>
        )}
        {url && (
          <h6 className='text-center'>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={title}
            >
              {url}
            </a>
          </h6>
        )}
        <section
          className='post-content-body'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </BlogPostTemplateStyles>
      {/*
          TODO: add post 'tags' feature
          <footer className='post-content-footer' />
        */}
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(format: HTML, pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        url
        thumbnail {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }
      }
      html
    }
  }
`

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        author: PropTypes.string
      })
    }),
    post: PropTypes.shape({
      excerpt: PropTypes.string,
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.oneOf([PropTypes.string, PropTypes.any]),
        thumbnail: PropTypes.shape({
          childImageSharp: PropTypes.object
        })
      }).isRequired
    }).isRequired
  }).isRequired
}

export default BlogPostTemplate
