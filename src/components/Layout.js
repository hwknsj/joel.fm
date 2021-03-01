import { ThemeProvider } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'

import Footer from './Footer'
import HeaderNav from './HeaderNav'
import { LayoutStyles } from './styles/LayoutStyles'
import GlobalStyles, { theme } from './styles/Theme'

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
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LayoutStyles className={`${toggleNav ? `site-head-open` : ``}`}>
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
      </LayoutStyles>
    </ThemeProvider>
  )
}

export default Layout
