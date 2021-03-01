import React, { useContext } from 'react'

import { DrawerContext } from './DrawerContext'
import HamburgerStyles from './styles/HamburgerStyles'

const HamburgerMenu = () => {
  const { state, dispatch } = useContext(DrawerContext)

  const toggleDrawer = () => {
    console.log(state)
    dispatch({
      type: 'TOGGLE_DRAWER'
    })
  }

  return (
    <HamburgerStyles
      className='nav-burger'
      href={'#'}
      onClick={() => toggleDrawer()}
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
    </HamburgerStyles>
  )
}
export default HamburgerMenu
