import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  query {
    resume: file(
      name: { eq: "joel-hawkins-torres-resume" }
      extension: { eq: "pdf" }
    ) {
      publicURL
    }
  }
`

export const useResume = () => {
  const data = useStaticQuery(query)
  return data.resume.publicURL as string
}
