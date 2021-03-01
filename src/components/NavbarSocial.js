import React from 'react'

// FIXME: this is hidden by uBlock origin cosmetic filtering which renders the logo and left nav off-center
const NavbarSocial = ({ toggleNav, socialLinks }) => {
  return (
    <div
      className={`${toggleNav && `site-head-open`} site-head-right`}
      style={{ display: 'flex' }}
    >
      <div className='social-links' style={{ display: 'flex' }}>
        {socialLinks.map(({ name, url }) => (
          <a
            key={url}
            href={url}
            title={name}
            target='_blank'
            rel='noopener noreferrer'
          >
            {name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default NavbarSocial
