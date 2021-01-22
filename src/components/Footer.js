import { Link } from 'gatsby'
import React from 'react'

import { socialLinks } from './HeaderNav'

const Footer = ({ toggleNav, title }) => {
  return (
    <footer className={`site-foot ${toggleNav && 'hidden'}`}>
      <div>
        <span style={{ textDecoration: 'line-through' }}>&copy;</span>{' '}
        {new Date().getFullYear()} <Link to={'/'}>{title}</Link> &mdash; no
        copyright, no nothing
      </div>
      <div className='center'>
        <ul className='inline center'>
          {socialLinks.map(({ name, url }) => (
            <li key={url}>
              <a
                href={url}
                title={name}
                target='_blank'
                rel='noopener noreferrer'
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
