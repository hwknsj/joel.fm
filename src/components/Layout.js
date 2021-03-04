import { ThemeProvider } from '@emotion/react'
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
      logo: file(relativePath: { eq: "jhlogo.png" }) {
        childImageSharp {
          gatsbyImageData(height: 100, quality: 80, layout: FIXED)
        }
      }
      resumePublicUrl: file(
        relativePath: { eq: "files/joel-hawkins-resume.pdf" }
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
  const memoizedQuery = useMemo(() => useStaticQuery(query))
  const {
    logo,
    headerImgs,
    site: {
      siteMetadata: { title }
    },
    resumePublicUrl: { publicURL }
  } = memoizedQuery
  const resumeUrl = publicURL
  const [toggleNav, setToggleNav] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      {/* <Global styles={globalCss} /> */}
      <GlobalStylesMemo />
      <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
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
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  logo: PropTypes.object,
  headerImgs: PropTypes.object
}

// export const layoutQuery = graphql`
//   query layoutQuery {
//     # resumeUrl: file(relativePath: { eq: "files/joel-hawkins-resume.pdf" }) {
//     #   publicURL
//     # }
//     title: site {
//       siteMetadata {
//         title
//       }
//     }
//     logo: file(relativePath: { eq: "jhlogo.png" }) {
//       childImageSharp {
//         fixed(height: 100, quality: 100) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//     headerImgs: allFile(
//       filter: {
//         extension: { regex: "/(jpg)|(jpeg)|(png)/" }
//         relativeDirectory: { eq: "headers" }
//       }
//     ) {
//       totalCount
//       edges {
//         node {
//           childImageSharp {
//             fluid(quality: 100, maxWidth: 1380) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default Layout
