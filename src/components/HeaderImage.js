import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import React from 'react'

const HeaderImageStyles = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  justify-content: center;
  max-width: ${({ theme }) => theme.maxWidthLg};
  width: 100%;
  text-align: center;
  margin: 0 auto;
  padding: 0;
  @media (max-width: ${({ theme }) => theme.maxWidthMd}) {
    max-width: 100vw;
    margin: 0 auto;
  }
`

const HeaderImage = ({ headerImg }) => {
  return (
    <HeaderImageStyles>
      <GatsbyImage image={headerImg} alt='artsy header image' />
    </HeaderImageStyles>
  )
}

HeaderImage.propTypes = {
  headerImg: PropTypes.object.isRequired
}

export default HeaderImage
