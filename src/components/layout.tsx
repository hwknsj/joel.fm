import { Global, ThemeProvider } from '@emotion/react'
import cx from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

// import { ThemeProvider } from '@/lib/theme-context'
import Footer from './footer'
import HeaderNav from './header-nav'
import { theme, globalCss } from './styles/theme'

// const GlobalStyles = memo(() => <Global styles={globalCss} />)
// GlobalStyles.displayName = `GlobalStyles`

export const query = graphql`
  query LayoutQuery {
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

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const layoutQuery = useStaticQuery(query)
  const {
    logo,
    headerImgs,
    site: {
      siteMetadata: { title }
    },
    resumeFile: { publicURL: resumeUrl }
  } = layoutQuery
  const [toggleNav, setToggleNav] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalCss} />
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
  children: PropTypes.node
}

export default Layout
