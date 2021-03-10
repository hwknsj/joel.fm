import { IoDocumentAttachSharp } from '@react-icons/all-files/io5/IoDocumentAttachSharp'
import { IoLogoBehance } from '@react-icons/all-files/io5/IoLogoBehance'
import { IoLogoGithub } from '@react-icons/all-files/io5/IoLogoGithub'
import { IoLogoInstagram } from '@react-icons/all-files/io5/IoLogoInstagram'
import { IoLogoLinkedin } from '@react-icons/all-files/io5/IoLogoLinkedin'
import { IoCalendar } from '@react-icons/all-files/io5/IoCalendar'
// import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const SocialLinks = ({ resumeUrl }) => {
  // const query = graphql`
  //   {
  //     file(relativePath: { eq: "files/joel-hawkins-resume.pdf" }) {
  //       publicURL
  //     }
  //   }
  // `

  // const resumePublicUrl = useStaticQuery(query)

  const links = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/hwknsj/',
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
      name: 'Calendly',
      url: 'https://calendly.com/joel-fm',
      icon: <IoCalendar />
    },
    {
      name: 'Résumé',
      url: resumeUrl,
      icon: <IoDocumentAttachSharp />
    }
  ]

  return (
    <ul className='inline-list'>
      {links.map(({ name, url, icon }) => (
        <li className='inline inline-item author-links' key={url}>
          <a
            href={url}
            title={name}
            target='_blank'
            rel='noopener noreferrer'
            alt={name}
            className=''
          >
            <div>{name}</div>
            {icon}
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
