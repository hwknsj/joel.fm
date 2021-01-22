import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import ProjectItem from '../components/ProjectItem'
import SEO from '../components/SEO'

const ModelingPage = (props, location) => {
  const indexQuery = graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/modeling/" } }
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

  const { site, allMarkdownRemark } = useStaticQuery(indexQuery)
  const posts = allMarkdownRemark.edges
  let postCounter = 0

  return (
    <div>
      <SEO
        title='Modeling'
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
            >
              Esteban Schimpf
            </a>{' '}
            (published by{' '}
            <a
              href='https://www.instagram.com/ordinary_america/'
              rel='noreferrer noopener'
              target='_blank'
            >
              @ordinary_america
            </a>
            ),{' '}
            <a
              href='https://www.instagram.com/agvstin'
              rel='noreferrer noopener'
              target='_blank'
            >
              @agvstin
            </a>
            , and
            <a href='https://www.instagram.com/caesyoney'>@caesyoney</a>, for
            purely artistic purposes as well as fashion designers including
            <a
              href='https://www.instagram.com/vetements_official/'
              rel='noreferrer noopener'
              target='_blank'
            >
              Vetements
            </a>{' '}
            and Last Heavy (
            <a
              href='https://www.instagram.com/lastheavy/'
              rel='noreferrer noopener'
              target='_blank'
            >
              @lastheavy
            </a>
            ). I've also appeared in various look-books, magazines, and other
            print and online publications.
          </p>
        </div>
      </article>
      {site && site.metadata && (
        <header className='page-head'>
          <h2 className='page-head-title'>{site.siteMetadata.description}</h2>
        </header>
      )}
      <div className='post-feed'>
        {posts.map(({ node }) => {
          // eslint-disable-next-line no-unused-vars
          postCounter++
          return (
            <ProjectItem
              key={node.fields.slug}
              node={node}
              postClass={'post'}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ModelingPage
