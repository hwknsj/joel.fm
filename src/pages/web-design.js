import ProjectItem from '@/components/ProjectItem'
import SEO from '@/components/SEO'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const WebDesignPage = ({
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
        title={`Web Design | ${title}`}
        keywords={[
          'portfolio',
          'blog',
          'joel',
          'hawkins',
          'joel hawkins',
          'joel.fm',
          'joel.biz',
          'web design',
          'web developer',
          'gatsby',
          'javascript',
          'react'
        ]}
      />

      <article className='post-content page-template no-image'>
        <section className='post-content-body'>
          <h2>Web Design & Development</h2>
          <p className='serif'>
            I strive to create interactive, engaging user experiences Below are
            a few examples of my web design work. A significant amount of my
            work is not shown here, such as designs created for Nike, Inc. or
            pages that contain sensitive information.
          </p>
          <p className='serif'>
            I have developed numerous highly technical back-end tools such as
            REST APIs, automation software, or other highly specific server-side
            applications. All of that work–developed for Nike or Puppet Labs–is
            highly confidential and cannot be disclosed; I do not own the
            codebase for such applications and could not share it even if I were
            to violate the non-disclosure agreement. Without explicitly
            providing the source code, the server-side applications I&apos;ve
            developed are unfortunately quite difficult to demonstrate in any
            satisfying way.{' '}
            <span className='text-light text-center'>
              Check &nbsp;
              <a
                href='https://github.com/hwknsj'
                target='_blank'
                rel='noopener noreferrer'
                alt='Github @hwknsj'
              >
                Github @hwknsj
              </a>
              &nbsp; for a whole mess of random work, including{' '}
              <a
                href='https://github.com/hwknsj/joel.fm'
                target='_blank'
                rel='noopener noreferrer'
                alt='joel.fm source code on Github'
              >
                the source code for this website
              </a>
              .
            </span>
          </p>
          <p className='serif'>
            However, I can share some information about the technologies used
            and the high-level functions of the applications. If you would like
            more information on my back-end development experience, drop me a
            message at joel (at) joel.fm.
          </p>
          <p className='serif subtitle'>
            All works below are shown with the expressed permission of the
            client.
          </p>
        </section>
      </article>

      {description && (
        <header className='page-head'>
          <h2 className='page-head-title'>{title}</h2>
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
              <ProjectItem
                key={slug}
                count={postCounter}
                slug={slug}
                frontmatter={frontmatter}
                postClass={'post'}
              />
            )
          }
        )}
      </section>
    </>
  )
}

export const webDesignPageQuery = graphql`
  {
    site: site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/web-design/" } }
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

WebDesignPage.propTypes = {
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

export default WebDesignPage
