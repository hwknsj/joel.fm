import ProjectItem from '@/components/project-item'
import { SEO } from '@/components/seo'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const ModelingPage = ({
  data: {
    site,
    allMarkdownRemark: { posts }
  }
}) => {
  const { title } = site.siteMetadata
  // eslint-disable-next-line no-unused-vars
  let postCounter = 0

  return (
    <>
      <article className='post-content page-template no-image'>
        <div className='post-content-body'>
          <h2>Modeling</h2>
          <p className='serif'>
            Various selections from my modeling portfolio are included below.
            Much of my modeling work is not shown either because I do not own
            the rights to display it or because the work is not publicly
            released. I will continuously update this page as more work becomes
            publicly available. Find me on Instagram{' '}
            <a
              href='https://www.instagram.com/joel.biz/'
              rel='noreferrer noopener'
              target='_blank'
              alt='@joel.biz'
            >
              @joel.biz
            </a>{' '}
            to see work by various photographers as well as my own artwork. I
            have modeled for numerous amateur and professional photographers,
            such as{' '}
            <a
              href='https://estebanschimpf.com/home.html'
              rel='noreferrer noopener'
              target='_blank'
              alt='Esteban Schimpf'
            >
              Esteban Schimpf
            </a>{' '}
            (published by{' '}
            <a
              href='https://www.instagram.com/ordinary_america/'
              rel='noreferrer noopener'
              target='_blank'
              alt='@ordinary_america'
            >
              @ordinary_america
            </a>
            ),{' '}
            <a
              href='https://www.instagram.com/agvstin'
              rel='noreferrer noopener'
              target='_blank'
              alt='@agvstin'
            >
              @agvstin
            </a>
            , and
            <a
              href='https://www.instagram.com/caesyoney'
              rel='noreferrer noopener'
              target='_blank'
              alt='@caesyoney'
            >
              @caesyoney
            </a>
            , for purely artistic purposes as well as fashion designers
            including
            <a
              href='https://www.instagram.com/vetements_official/'
              rel='noreferrer noopener'
              target='_blank'
              alt='Vetements'
            >
              Vetements
            </a>{' '}
            and Last Heavy (
            <a
              href='https://www.instagram.com/lastheavy/'
              rel='noreferrer noopener'
              target='_blank'
              alt='@lastheavy'
            >
              @lastheavy
            </a>
            ). I&apos;ve also appeared in various look-books, magazines, and
            other print and online publications.
          </p>
        </div>
      </article>
      <header className='page-head'>
        <h2 className='page-head-title'>{title}</h2>
      </header>
      <div className='post-feed'>
        {posts.map(
          ({
            node: {
              frontmatter,
              fields: { slug }
            }
          }) => {
            // eslint-disable-next-line no-unused-vars
            postCounter++
            return (
              <ProjectItem
                key={slug}
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

export const query = graphql`
  query ModelingPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/modeling/" } }
      sort: [{ frontmatter: { date: DESC } }]
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
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`

ModelingPage.propTypes = {
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

export default ModelingPage

export const Head = () => <SEO title={`modeling`} />
