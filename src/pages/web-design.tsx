import ProjectItem from '@/components/project-item'
import SEO from '@/components/seo'
import { graphql, PageProps } from 'gatsby'
import { ImageDataLike } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import React from 'react'

// type PageProps = {
//   data: {
//     site: {
//       siteMetadata: { title: string; description: string }
//     }
//     allMarkdownRemark: {
//       posts: [
//         {
//           node: {
//             frontmatter: {
//               title: string
//               thumbnail?: ImageDataLike
//             }
//             fields: { slug: string }
//           }
//         }
//       ]
//     }
//   }
// }

const WebDesignPage = ({
  data: {
    site: {
      siteMetadata: { title, description }
    },
    allMarkdownRemark: { posts }
  }
}: PageProps<Queries.WebDesignPageQuery>) => {
  let postCounter = 0
  return (
    <>
      <SEO title={`Web Design | ${title}`} />

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
                aria-label='Github @hwknsj'
              >
                Github @hwknsj
              </a>
              &nbsp; for a whole mess of random work, including{' '}
              <a
                href='https://github.com/hwknsj/joel.fm'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='joel.fm source code on Github'
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
          (
            {
              node: {
                frontmatter,
                fields: { slug }
              }
            },
            index
          ) => {
            postCounter === index ? postCounter++ : false
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

export const query = graphql`
  query WebDesignPage {
    site: site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/web-design/" } }
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
