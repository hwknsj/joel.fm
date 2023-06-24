import { Global, ThemeProvider } from '@emotion/react'
import cx from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'

import Footer from './footer'
import HeaderNav from './header-nav'
import { theme, globalCss } from './styles/theme'

const GlobalStyles = memo(() => <Global styles={globalCss} />)
GlobalStyles.displayName = `GlobalStyles`

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const query = graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(height: 100, quality: 80, layout: FIXED)
        }
      }
      resumeFile: file(
        relativePath: { eq: "files/joel-hawkins-torres-resume.pdf" }
      ) {
        publicURL
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
              gatsbyImageData(quality: 80, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `
  const indexQuery = useStaticQuery(query)
  const {
    logo,
    headerImgs,
    site: {
      siteMetadata: { title }
    },
    resumeFile: { publicURL: resumeUrl }
  } = indexQuery
  const [toggleNav, setToggleNav] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div
        className={cx('site-wrapper', {
          'site-head-open': toggleNav
        })}
      >
        <HeaderNav
          toggleNav={toggleNav}
          setToggleNav={setToggleNav}
          logo={logo}
          title={title}
          headerImgs={headerImgs}
          resumeUrl={resumeUrl}
        />
        <main id='site-main' className='site-main'>
          <div id='swup' className='transition-fade'>
            {children}
          </div>
        </main>
        <Footer toggleNav={toggleNav} title={title} resumeUrl={resumeUrl} />
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
