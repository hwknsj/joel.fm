import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import ProjectItem from '../components/ProjectItem'
import SEO from '../components/SEO'

const WebDesignIndexPage = (props, location) => {
  let postCounter = 0

  const indexQuery = graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/web-design/" } }
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
  // const siteTitle = site.siteMetadata.title
  const posts = allMarkdownRemark.edges

  return (
    <div>
      <SEO
        title='Web Design'
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
          <h2>Web Design & Development</h2>
          <div>
            <p className='serif'>
              I strive to create interactive, engaging user experiences Below
              are a few examples of my web design work. A significant amount of
              my work is not shown here, such as designs created for Nike, Inc.
              or pages that contain sensitive information.
            </p>
            <p className='serif'>
              I have developed numerous highly technical back-end tools such as
              REST APIs, automation software, or other highly specific
              server-side applications. All of that work–developed for Nike or
              Puppet Labs–is highly confidential and cannot be disclosed; I do
              not own the codebase for such applications and could not share it
              even if I were to violate the non-disclosure agreement. Without
              explicitly providing the source code, the server-side applications
              I've developed are unfortunately quite difficult to demonstrate in
              any satisfying way.
            </p>
            <p className='serif'>
              However, I can share some information about the technologies used
              and the high-level functions of the applications. If you would
              like more information on my back-end development experience,
              please contact me at joel@joel.fm or use the Contact form page.
            </p>
            <p className='serif subtitle'>
              All works below are shown with the expressed permission of the
              client.
            </p>
          </div>
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
          if (
            typeof node.frontmatter.thumbnail !== 'undefined' &&
            !node.fields.slug.includes('swiderhaver')
          ) {
            return (
              <ProjectItem
                key={node.fields.slug}
                count={postCounter}
                node={node}
                postClass={'post'}
              />
            )
          } else {
            return ''
          }
        })}
      </div>
    </div>
  )
}

export default WebDesignIndexPage
