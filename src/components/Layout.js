import { ThemeProvider } from '@emotion/react'
import cx from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useMemo, useState } from 'react'

import Footer from './Footer'
import HeaderNav from './HeaderNav'
import GlobalStylesMemo, { theme } from './styles/Theme'

const Layout = ({ children }) => {
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
        relativePath: { eq: "files/joel-hawkins-torres-resume-2022.pdf" }
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
  const memoizedQuery = useMemo(() => indexQuery)
  const {
    logo,
    headerImgs,
    site: {
      siteMetadata: { title }
    },
    resumeFile: { publicURL: resumeUrl }
  } = memoizedQuery
  const [toggleNav, setToggleNav] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStylesMemo />
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
