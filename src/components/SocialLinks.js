import { IoDocumentAttachSharp } from '@react-icons/all-files/io5/IoDocumentAttachSharp'
import { IoLogoBehance } from '@react-icons/all-files/io5/IoLogoBehance'
import { IoLogoGithub } from '@react-icons/all-files/io5/IoLogoGithub'
import { IoLogoInstagram } from '@react-icons/all-files/io5/IoLogoInstagram'
import { IoLogoLinkedin } from '@react-icons/all-files/io5/IoLogoLinkedin'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useMemo } from 'react'

const SocialLinks = () => {
  const indexQuery = graphql`
    query {
      resumeUrl: file(relativePath: { eq: "files/joel-hawkins-resume.pdf" }) {
        publicURL
      }
    }
  `
  // const {
  //   resumeUrl: { publicURL }
  // } = useStaticQuery(indexQuery)

  const { resumeUrl } = useMemo(() => useStaticQuery(indexQuery))
  const resumePublicUrlMemo = resumeUrl.publicURL

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
      name: 'Résumé',
      url: resumePublicUrlMemo,
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
            <figcaption>{name}</figcaption>
            {icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
export default SocialLinks
