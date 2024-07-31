import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
          image
          favicon {
            ico
            png
            svg
          }
          social {
            twitter
            instagram
            linkedIn {
              url
              user
            }
          }
          resumeFilename
        }
      }
    }
  `)

  return data.site.siteMetadata
}
