import { Global, ThemeProvider } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import Footer from './Footer'
import HeaderNav from './HeaderNav'
import { globalCss, theme } from './styles/Theme'

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
              fluid(quality: 100, maxWidth: 1380) {
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
    <ThemeProvider theme={theme}>
      <Global styles={globalCss} />
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
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
