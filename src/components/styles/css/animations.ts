import { css, keyframes } from '@emotion/react'

const slideUp = keyframes`
  0% {
    transform: translate3d(0, 4vh, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`
export const animations = css`
  .transition-fade {
    transition: 0.25s;
    opacity: 1;
    animation: ${slideUp || `slideUp`} 0.9s cubic-bezier(0.075, 0.82, 0.165, 1)
      forwards;
    transform: translate3d(0, 4vh, 0);
  }
  html.is-animating .transition-fade {
    opacity: 0;
  }
  @keyframes slideUp {
    0% {
      transform: translate3d(0, 4vh, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
`
export default animations
