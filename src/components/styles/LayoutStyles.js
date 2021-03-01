import styled from '@emotion/styled'

import { mq } from './Theme'

// replaces div.site-wrapper
export const LayoutStyles = styled.div`
  padding: ${({ theme }) => theme.bodyPadding};
  min-height: 100vh;
  background: ${({ theme }) => theme.colorBg};
  &.site-head-open {
    transition: background 0.5s ease-out;
    transition-delay: 0.25;
    overflow: hidden;
    height: 100vh;

    .site-head-container {
      height: 100vh;
      transition: height 0.2s ease-in;
    }
    .site-head-left {
      opacity: 1 !important;
    }
    .site-head-right a {
      opacity: 0.5;
    }
    .site-head-left,
    .site-head-right {
      z-index: 9999;
      height: auto;
      transition: height 0.2s cubic-bezier(0.4, 0.01, 0.165, 0.99);
      a {
        opacity: 1;
        transition: transform 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99),
          opacity 0.9s cubic-bezier(0.4, 0.01, 0.165, 0.99);
        transform: scale(1) translateY(0px);
      }
      li {
        a[aria-current='page'] {
          border-bottom: ${({ theme }) => theme.colorBase} 2px solid;
        }
      }
    }
    .site-foot {
      display: block;
      position: fixed;
      text-align: center;
      z-index: 9999;
      bottom: 0;
      font-size: 1.4rem;
      transition: transform 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
      /* transform: translateY(-4vw); */
    }
  }
  ${mq('sm')} {
    .site-head-left,
    .site-head-right {
      opacity: 0 !important;
      visibility: hidden;
    }
  }
`
