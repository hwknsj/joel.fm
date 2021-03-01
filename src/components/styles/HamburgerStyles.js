import styled from '@emotion/styled'
import { lighten } from 'polished'

const HamburgerStyles = styled.a`
  display: flex;
  overflow: visible;
  margin: 0;
  padding: 1rem 1rem 1rem 0;
  border: 0;
  z-index: 9999;
  color: inherit;
  font: inherit;
  text-transform: none;
  background-color: transparent;
  cursor: pointer;
  transition: opacity 0.15s linear, filter 0.15s linear;
  .hamburger {
    display: flex;
    overflow: visible;
    margin: 0;
    padding: 1rem 1rem 1rem 0;
    border: 0;
    z-index: 9999;
    color: inherit;
    font: inherit;
    text-transform: none;
    background-color: transparent;
    cursor: pointer;
    transition: opacity 0.15s linear, filter 0.15s linear;
  }

  .hamburger-box {
    position: relative;
    display: inline-block;
    width: 24px;
    height: 16px;
  }

  .hamburger-inner {
    top: 50%;
    display: block;
    margin-top: -2px;
    left: 2rem;
  }

  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    position: absolute;
    width: 22px;
    height: 1px;
    background-color: ${({ theme }) => lighten(-0.2, theme.colorBorder)};
    border-radius: 4px;
    transition: transform 0.15s ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: '';
    display: block;
  }
  .hamburger-inner::before {
    top: -6px;
  }
  .hamburger-inner::after {
    bottom: -6px;
  }

  /*
 * Collapse
 */
  .hamburger--collapse .hamburger-inner {
    top: auto;
    bottom: 0;
    transition-delay: 0.15s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    transition-duration: 0.15s;
  }
  .hamburger--collapse .hamburger-inner::after {
    top: -12px;
    transition: top 0.3s 0.3s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      opacity 0.1s linear;
  }
  .hamburger--collapse .hamburger-inner::before {
    transition: top 0.12s 0.3s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
`

export default HamburgerStyles
