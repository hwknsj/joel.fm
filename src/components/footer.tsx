import SocialLinks from './social-links'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { ReactElement } from 'react'


const rose = String(`இـــڰ-ۣڰڿ`)

export const Footer = ({ toggleNav, title, resumeUrl }: { toggleNav: boolean, title: string, resumeUrl: string }): ReactElement => (
    <footer className={`site-foot${toggleNav ? ` hidden` : ``}`}>
      {/* <div className='center my-0'> */}
      <SocialLinks resumeUrl={resumeUrl} />
      {/* </div> */}
      <p>
        <span style={{ textDecoration: 'line-through' }}>&copy;</span>{' '}
        {new Date().getFullYear()} <Link to={'/'}>{title}</Link> &mdash; no
        copyright, no nothing
      </p>
      <p className='mb-0 pb-0'>
        <small className='rose'>{`${rose}`}</small>
      </p>
    </footer>
  )

Footer.propTypes = {
  toggleNav: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  resumeUrl: PropTypes.string.isRequired
}

export default Footer
