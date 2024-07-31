import { useSiteMetadata } from '@/lib/use-site-metadata'
import { IoCalendar } from '@react-icons/all-files/io5/IoCalendar'
import { IoDocumentAttachSharp } from '@react-icons/all-files/io5/IoDocumentAttachSharp'
import { IoLogoBehance } from '@react-icons/all-files/io5/IoLogoBehance'
import { IoLogoGithub } from '@react-icons/all-files/io5/IoLogoGithub'
import { IoLogoInstagram } from '@react-icons/all-files/io5/IoLogoInstagram'
import { IoLogoLinkedin } from '@react-icons/all-files/io5/IoLogoLinkedin'
import PropTypes from 'prop-types'
import React, { type FC } from 'react'

export const SocialLinks: FC<{ resumeUrl: string }> = ({ resumeUrl }) => {
  const {
    social: {
      linkedIn: { url: linkedInUrl }
    }
  } = useSiteMetadata()
  const links = [
    {
      name: 'LinkedIn',
      url: linkedInUrl,
      icon: <IoLogoLinkedin />
    },
    {
      name: 'Github',
      url: 'https://github.com/hwknsj',
      icon: <IoLogoGithub />
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/joel.biz/',
      icon: <IoLogoInstagram />
    },
    {
      name: 'Behance',
      url: 'https://www.behance.net/hwknsj',
      icon: <IoLogoBehance />
    },
    {
      name: 'Calendar',
      url: 'https://cal.com/joel.fm',
      icon: <IoCalendar />
    },
    {
      name: 'Résumé',
      url: resumeUrl,
      icon: <IoDocumentAttachSharp />
    }
  ]

  // TODO: make this accessible
  return (
    <ul className='inline-list'>
      {links.map(({ name, url, icon }, i) => (
        <li className='inline inline-item social-links' key={url}>
          <a
            href={url}
            title={name}
            target='_blank'
            rel='noopener noreferrer'
            className=''
            tabIndex={i - 1}
          >
            <label htmlFor={name}>{name}</label>
            <span id={name}>{icon}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

SocialLinks.propTypes = {
  resumeUrl: PropTypes.string.isRequired
}

export default SocialLinks
