import { Link } from 'gatsby'
import React from 'react'

import HeaderImage from './HeaderImage'
import HeaderLogo from './HeaderLogo'
import socialLinks from './socialLinks'

// export const socialLinks = [
//   { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hwknsj/' },
//   { name: 'Github', url: 'https://github.com/hwknsj' },
//   { name: 'Instagram', url: 'https://www.instagram.com/joel.biz/' },
//   { name: 'Behance', url: 'https://www.behance.net/hwknsj' }
// ]

const HeaderNavSocial = ({ toggleNav }) => {
  return (
    <div
      className={`${toggleNav && `site-head-open`} site-head-right`}
      style={{ display: 'flex' }}
    >
      <div className='nav-right-links' style={{ display: 'flex' }}>
        {socialLinks.map(({ name, url, icon }) => (
          <a
            key={url}
            href={url}
            alt={name}
            title={name}
            target='_blank'
            rel='noopener noreferrer'
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  )
}

const HeaderNav = ({ toggleNav, setToggleNav, logo, title, headerImgs }) => {
  const navLinks = [
    { text: 'Home', slug: `` },
    { text: 'About', slug: 'about' },
    { text: 'Web Design', slug: 'web-design' },
    { text: 'Artwork', slug: 'artwork' },
    { text: 'Modeling', slug: 'modeling' },
    { text: 'Music', slug: 'music' }
  ]

  const randomIndex = (Math.random() * headerImgs.totalCount) | 0
  const randomHeaderImg =
    headerImgs.edges[randomIndex].node.childImageSharp.fluid
  return (
    <header className='site-head'>
      <div className='site-head-container'>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <button
          className='nav-burger'
          href={'#'}
          onClick={() => setToggleNav(!toggleNav)}
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
        </button>
        <nav
          id='swup'
          className={`${toggleNav && `site-head-open`} site-head-left`}
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
        <HeaderNavSocial toggleNav={toggleNav} />
      </div>
      <HeaderImage headerImg={randomHeaderImg} />
    </header>
  )
}

export default HeaderNav
