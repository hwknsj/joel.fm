import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useMemo } from 'react'

const ImageGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 0;
  padding: 0;
  justify-content: center;
  text-align: center;
  @media (max-width: 900px) {
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    width: 100%;
    gap: 0.5rem;
  }
`

const ImageGrid = () => {
  const query = graphql`
    {
      images: allFile(
        filter: {
          relativeDirectory: { eq: "ig" }
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        }
        sort: { fields: name, order: DESC }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(width: 400, layout: FIXED)
          }
          name
        }
      }
    }
  `
  const data = useStaticQuery(query)

  const memoizedData = useMemo(() => data)

  const images = memoizedData.images.nodes || []

  return (
    <ImageGridStyles>
      {images &&
        images.map(
          node =>
            node.childImageSharp && (
              <GatsbyImage
                image={node.childImageSharp.gatsbyImageData}
                key={`${node.name}`}
                alt={`Metagram image number ${node.name}`}
              />
            )
        )}
    </ImageGridStyles>
  )
}

export default ImageGrid
