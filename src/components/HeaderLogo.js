import { Link } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'

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

HeaderLogo.propTypes = {
  logo: PropTypes.object,
  title: PropTypes.string
}

export default HeaderLogo
