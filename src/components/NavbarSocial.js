import styled from '@emotion/styled'
import React from 'react'

// INFO: .site-head-right
const NavbarSocialStyles = styled.div`
  position: relative;
  z-index: 100;
  /* flex-shrink: 0; */
  display: flex;
  align-items: flex-start;
  a {
    display: block;
    margin: 0;
    padding: 10px 12px;
    color: ${({ theme }) => theme.colorBase};
    font-weight: 600;
    opacity: 0.4;
  }
  .nav-right-links {
    /* flex-shrink: 0; */
    display: flex;
    align-items: flex-start;
    justify-content: right;
  }
  @media (max-width: ${({ theme }) => theme.maxWidthMd}) {
    order: 3;
    width: 100%;
    margin-top: 3vw;
    position: relative;
    z-index: -1;
    height: auto;
    transition: height 0.2s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    transition-delay: 1s;
    a {
      margin: 8px 0;
      padding: 1px 0;
      font-size: 2.6rem;
      line-height: 1.15em;
      font-weight: 200;
      opacity: 0;
      transition: transform 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99),
        opacity 0.2s cubic-bezier(0.4, 0.01, 0.165, 0.99);
      transform: scale(1.1) translateY(-25px);
      &:hover {
        border-bottom: ${({ theme }) => theme.black} 2px solid;
      }
    }
  }
`

// FIXME: this is hidden by uBlock origin cosmetic filtering which renders the logo and left nav off-center
const NavbarSocial = ({ toggleNav, socialLinks }) => {
  return (
    // <div className={`${toggleNav && `site-head-open`} site-head-right`} style={{ display: 'flex' }}>
    <NavbarSocialStyles>
      <div className='nav-right-links' style={{ display: 'flex' }}>
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
    </NavbarSocialStyles>
    // </div>
  )
}

export default NavbarSocial
