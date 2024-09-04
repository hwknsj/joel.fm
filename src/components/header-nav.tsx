import HeaderImage from './header-image'
import HeaderLogo from './header-logo'
import SocialLinks from './social-links'
import { css } from '@emotion/react'
import cx from 'classnames'
import { Link } from 'gatsby'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import { useMemo } from 'react'

interface HeaderNavSocialProps {
  toggleNav: boolean
  resumeUrl: string
}

interface HeaderNavProps extends HeaderNavSocialProps {
  setToggleNav: (value: boolean) => void
  logo: {
    childImageSharp: Queries.ImageSharp
  }
  title: string
  headerImgs: Queries.FileConnection
}

const HeaderNavSocial = ({ toggleNav, resumeUrl }: HeaderNavSocialProps) => {
  return (
    <aside
      className={cx({
        'site-head-open': toggleNav,
        'site-head-right': true
      })}
      style={{ display: 'flex' }}
    >
      <nav className='nav-right-links' style={{ display: 'flex' }}>
        <SocialLinks resumeUrl={resumeUrl} />
      </nav>
    </aside>
  )
}

const HeaderNav = ({
  toggleNav,
  setToggleNav,
  logo,
  title,
  headerImgs,
  resumeUrl
}: HeaderNavProps) => {
  const navLinks = [
    { text: 'Home', slug: '' },
    { text: 'About', slug: 'about' },
    { text: 'Web Design', slug: 'web-design' },
    { text: 'Artwork', slug: 'artwork' },
    { text: 'Modeling', slug: 'modeling' },
    { text: 'Music', slug: 'music' }
  ]

  const randomIndex = useMemo(
    () => (Math.random() * headerImgs.totalCount) | 0,
    [headerImgs.totalCount]
  )
  const randomHeaderImg = useMemo(
    () =>
      headerImgs?.edges[randomIndex]?.node?.childImageSharp
        ?.gatsbyImageData as IGatsbyImageData,
    [randomIndex]
  )
  return (
    <header className='site-head'>
      <div className='site-head-container'>
        <button
          aria-controls='swup'
          aria-expanded={false}
          className='nav-burger'
          onClick={() => setToggleNav(!toggleNav)}
          role='navigation'
          aria-label='navigation'
          css={css`
            border: 0;
            box-shadow: none;
            &:hover {
              box-shadow: none;
            }
          `}
        >
          <div
            className='hamburger hamburger--collapse'
            role='button'
            aria-label='Menu'
          >
            <div className='hamburger-box'>
              <i className='hamburger-inner' />
            </div>
          </div>
        </button>
        <nav
          id='swup'
          className={cx(
            {
              'site-head-open': toggleNav
            },
            'site-head-left'
          )}
          role='navigation'
          aria-label='Main navigation'
        >
          <ul className='nav' role='menu'>
            {navLinks.map(({ text, slug }, i) => (
              <li
                className={`nav-li`}
                id={`nav-li-${slug}`}
                role='menuitem'
                key={`nav-li-${slug}`}
              >
                <Link
                  to={`/${slug}`}
                  onClick={() => setToggleNav(!toggleNav)}
                  accessKey={`${i}`}
                  tabIndex={i}
                >
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
