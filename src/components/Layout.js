import { graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'

import Footer from './Footer'
import HeaderNav from './HeaderNav'

const Layout = ({ children }) => {
  const query = graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      logo: file(relativePath: { eq: "jhlogo.png" }) {
        childImageSharp {
          fixed(height: 100, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      headerImgs: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "headers" }
        }
      ) {
        totalCount
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `
  const { logo, headerImgs, site } = useStaticQuery(query)
  const title = site.siteMetadata.title

  const [toggleNav, setToggleNav] = useState(false)

  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <HeaderNav
        toggleNav={toggleNav}
        setToggleNav={setToggleNav}
        logo={logo}
        title={title}
        headerImgs={headerImgs}
      />
      <main id='site-main' className='site-main'>
        <div id='swup' className='transition-fade'>
          {children}
        </div>
      </main>
      <Footer toggleNav={toggleNav} title={title} />
    </div>
  )
}

export default Layout
