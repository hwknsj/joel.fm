import { FontsQueryData } from '@/components/styles/fonts'
import { graphql, useStaticQuery } from 'gatsby'

export const useFonts = () => {
  const { data } = useStaticQuery<{
    data: { fonts: { nodes: FontsQueryData[] } }
  }>(graphql`
    query {
      fonts: allFile(
        filter: { extension: { in: ["otf", "ttf", "woff", "woff2"] } }
      ) {
        nodes {
          name
          relativePath
          publicURL
          base
          extension
        }
      }
    }
  `)
  return data.fonts.nodes
}
