import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
          shortName
          title
          author
          email
          description
          siteUrl
          prefix
          url
          image
          logo
          favicon {
            ico
            png
            svg
          }
          resumeFilename
          social {
            twitter {
              url
              user
            }
            instagram {
              url
              user
            }
            linkedIn {
              url
              user
            }
            github {
              url
              user
            }
            cal {
              url
              user
            }
            behance {
              url
              user
            }
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}
