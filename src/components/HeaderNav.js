import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import HeaderImage from './HeaderImage'
import HeaderLogo from './HeaderLogo'
import SocialLinks from './SocialLinks'

const HeaderNavSocial = ({ toggleNav, resumeUrl }) => {
  return (
    <div
      className={`${toggleNav ? `site-head-open ` : ``}site-head-right`}
      style={{ display: 'flex' }}
    >
      <div className='nav-right-links' style={{ display: 'flex' }}>
        <SocialLinks resumeUrl={resumeUrl} />
      </div>
    </div>
  )
}

const HeaderNav = ({
  toggleNav,
  setToggleNav,
  logo,
  title,
  headerImgs,
  resumeUrl
}) => {
  const navLinks = [
    { text: 'Home', slug: '' },
    { text: 'About', slug: 'about' },
    { text: 'Web Design', slug: 'web-design' },
    { text: 'Artwork', slug: 'artwork' },
    { text: 'Modeling', slug: 'modeling' },
    { text: 'Music', slug: 'music' }
  ]

  const randomIndex = (Math.random() * headerImgs.totalCount) | 0
  const randomHeaderImg =
    headerImgs.edges[randomIndex].node.childImageSharp.gatsbyImageData
  return (
    <header className='site-head'>
      <div className='site-head-container'>
        <a
          className='nav-burger'
          href={'#'}
          onClick={() => setToggleNav(!toggleNav)}
          alt='navigation'
          aria-label='navigation'
        >
          <div
            className='hamburger hamburger--collapse'
            aria-label='Menu'
            role='button'
            aria-controls='navigation'
          >
            <div className='hamburger-box'>
              <div className='hamburger-inner' />
            </div>
          </div>
        </a>
        <nav
          id='swup'
          className={`${toggleNav ? `site-head-open ` : ``}site-head-left`}
        >
          <ul className='nav' role='menu'>
            {navLinks.map(({ text, slug }) => (
              <li className={`nav-${slug}`} role='menuitem' key={slug}>
                <Link to={`/${slug}`} onClick={() => setToggleNav(!toggleNav)}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <HeaderLogo logo={logo} title={title} />
        <HeaderNavSocial toggleNav={toggleNav} resumeUrl={resumeUrl} />
      </div>
      <HeaderImage headerImg={randomHeaderImg} />
    </header>
  )
}

HeaderNav.propTypes = {
  toggleNav: PropTypes.bool.isRequired,
  setToggleNav: PropTypes.func.isRequired,
  logo: PropTypes.object,
  title: PropTypes.string,
  headerImgs: PropTypes.object,
  resumeUrl: PropTypes.string.isRequired
}

HeaderNavSocial.propTypes = {
  ...HeaderNav.propTypes.toggleNav,
  ...HeaderNav.propTypes.resumeUrl
}

export default HeaderNav
