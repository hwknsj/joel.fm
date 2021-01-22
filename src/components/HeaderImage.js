import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

const HeaderImageStyles = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  justify-content: center;
  max-width: 1360px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  padding: 0;
  @media (max-width: 900px) {
    max-width: 100vw;
    margin: 0 auto;
  }
`

const HeaderImage = ({ headerImg }) => {
  return (
    <HeaderImageStyles>
      <Img fluid={headerImg} alt='artsy header image' />
    </HeaderImageStyles>
  )
}

export default HeaderImage
