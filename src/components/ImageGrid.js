import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

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
    query {
      images: allFile(
        filter: {
          relativeDirectory: { eq: "ig" }
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        }
        sort: { fields: name, order: DESC }
      ) {
        nodes {
          childImageSharp {
            fixed(width: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `
  // TODO: can't get videos to work. tried too hard and too long and nothing is worth it.
  // 1) just query nodes, use if (node.childImageSharp) then <Img ... />
  // else if (node.childVideoFfmpeg...) then <Video sources={[...]} />
  // 2) use two queries, slice array up until file number of video, map videos,
  // then continue mapping the rest of the sliced images.
  const data = useStaticQuery(query)
  const images = data.images.nodes || []

  return (
    <ImageGridStyles>
      {images &&
        images.map(
          node =>
            node.childImageSharp && (
              <Img
                key={`${Date.now() * Math.random()}`}
                fixed={node.childImageSharp.fixed}
              />
            )
        )}
    </ImageGridStyles>
  )
}

export default ImageGrid
