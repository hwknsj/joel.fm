import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

export const LogoStyles = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  .site-head-logo {
    flex: 1 1 auto;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin-top: -10px;
    overflow: visible;
    color: ${({ theme }) => theme.colorBase};
    font-size: 3rem;
    line-height: 1em;
  }
  .site-head-title {
    margin: 2rem auto;
  }

  .site-head-logo a {
    color: ${({ theme }) => theme.colorBase};
    text-decoration: none;
  }

  .site-head-logo:hover {
    text-decoration: none;
  }

  /* .site-head-logo Img,
.site-head-logo img,
.site-head-logo picture {
  display: block;
}
*/
  .site-head-logo-image {
    text-align: center;
    margin: 0 auto;
    overflow: visible;
    display: flex !important;
    flex-direction: column;
    height: 100%;
    /* width: 100px;
  height: 100px;
  max-height: 100px;
  min-width: fit-content; */
  }

  .site-head-open .site-head-logo {
    /* position: absolute; */
    top: 0;
    overflow: visible;
    min-height: 100%;
    /* margin-top: 10px; */
  }
`

const HeaderLogo = ({ logo, title }) => {
  return (
    <div className='center center-el-x site-head-center'>
      <div className='site-head-logo'>
        <Img
          className='site-head-logo-image'
          fixed={logo.childImageSharp.fixed}
          alt='jh logo'
          imgStyle={{
            overflow: 'visible',
            display: 'grid',
            gridTemplateColumns: '1fr'
          }}
        />
        <div className='site-head-title'>
          <Link to={'/'}>{title}</Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderLogo
