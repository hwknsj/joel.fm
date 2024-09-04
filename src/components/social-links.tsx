import { useSiteMetadata } from '@/lib/use-site-metadata'
import { ImLinkedin } from '@react-icons/all-files/im/ImLinkedin'
import { ImGithub } from '@react-icons/all-files/im/ImGithub'
import { ImInstagram } from '@react-icons/all-files/im/ImInstagram'
import { ImBehance } from '@react-icons/all-files/im/ImBehance'
import { ImCalendar } from '@react-icons/all-files/im/ImCalendar'
import { ImFilePdf } from '@react-icons/all-files/im/ImFilePdf'
import PropTypes from 'prop-types'
import * as React from 'react'
import { IconBaseProps } from '@react-icons/all-files/lib'

type SocialLink = {
  label: string
  id: string
  url: string
  Icon: React.FunctionComponent<IconBaseProps>
}

export const SocialLinks: React.FC<{ resumeUrl: string }> = ({ resumeUrl }) => {
  const {
    social: {
      linkedIn: { url: linkedInUrl },
      github: { url: githubUrl },
      instagram: { url: instagramUrl },
      behance: { url: behanceUrl },
      cal: { url: calUrl }
    }
  } = useSiteMetadata()
  const links: SocialLink[] = [
    {
      label: 'LinkedIn',
      id: 'linkedin',
      url: linkedInUrl,
      Icon: () => (
        <ImLinkedin title='linkedin' id='linkedin-icon' aria-label='linkedin' />
      )
    },
    {
      label: 'Github',
      id: 'github',
      url: githubUrl,
      Icon: () => (
        <ImGithub title='github' id='github-icon' aria-label='github' />
      )
    },
    {
      label: 'Instagram',
      id: 'instagram',
      url: instagramUrl,
      Icon: () => (
        <ImInstagram
          title='instagram'
          id='instagram-icon'
          aria-label='instagram'
        />
      )
    },
    {
      label: 'Behance',
      id: 'behance',
      url: behanceUrl,
      Icon: () => (
        <ImBehance title='behance' id='behance-icon' aria-label='behance' />
      )
    },
    {
      label: 'Calendar',
      id: 'calendar',
      url: calUrl,
      Icon: () => (
        <ImCalendar title='calendar' id='calendar-icon' aria-label='calendar' />
      )
    },
    {
      label: 'Résumé',
      id: 'resume',
      url: resumeUrl,
      Icon: () => (
        <ImFilePdf title='resume' id='resume-icon' aria-label='resume' />
      )
    }
  ]

  // TODO: make this accessible
  return (
    <ul className='inline-list'>
      {links.map(({ label, id, url, Icon }, i) => {
        const labelId = `${id}-label`
        const iconId = `${id}-icon`
        return (
          <li
            className='inline inline-item social-links'
            key={url}
            aria-activedescendant={id}
          >
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              tabIndex={i - 1}
              aria-flowsto={links[(i + 1) % links.length]}
              id={id}
            >
              <label id={labelId} htmlFor={iconId}>
                {label}
              </label>
              <Icon id={iconId} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

SocialLinks.propTypes = {
  resumeUrl: PropTypes.string.isRequired
}

export default SocialLinks
