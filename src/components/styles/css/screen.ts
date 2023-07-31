import { css } from '@emotion/react'
import { darken, lighten } from 'polished'
import type { Theme } from '../theme'

export const screen = (theme: Theme) => css`
  body {
    font-family: ${theme.typeography.fraktur};
    background: ${theme.colors.background};
    transition: background 0.3s ease-out;
    transition-delay: 0.25;
  }
  .img {
    display: block;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    border-radius: 100%;
  }
  .hidden {
    visibility: hidden;
    position: absolute;
    text-indent: -9999px;
  }
  .site-wrapper {
    padding: 3vw;
    min-height: 100vh;
  }
  @media (max-width: ${theme.maxWidthSm}) {
    .site-wrapper {
      padding: 6vw;
    }
  }
  .page-head {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 0;
    max-width: 70%;
    margin: auto;
    text-align: center;
  }
  .error-head {
    height: 75vh;
    h1 {
      margin: 0;
      font-size: 7rem;
      line-height: 1.1em;
      font-weight: ${theme.typeography.weight.bold};
      letter-spacing: 10px;
    }
    p {
      font-size: 1.4rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: ${lighten(0.5, theme.colors.base)};
    }
  }
  .error-link {
    margin-top: 1rem;
    font-size: 1.5rem;
    text-decoration: underline;
  }
  .page-head-title {
    margin: 0;
    padding: 0;
    font-size: 3.8rem;
    color: ${theme.colors.base};
  }
  @media (max-width: ${theme.maxWidthXs}) {
    .page-head-title {
      font-size: 2rem;
    }
  }
  .page-head-description {
    margin: 0 0 1.6vw;
    color: ${darken(0.2, theme.colorBorder)};
    font-size: 2.2rem;
    line-height: 1.35em;
  }
  @media (max-width: ${theme.maxWidthXs}) {
    .page-head-description {
      font-size: 1.6rem;
    }
  }
  .site-foot {
    margin: 3vw 0 1vw;
    text-align: center;
    color: ${darken(0.2, theme.colorBorder)};
    font-size: 2rem;
    transition: opacity 0.4s ${theme.cubicBezier};
    p {
      margin-bottom: calc(${theme.margin} * 2);
      &:last-of-type {
        margin-bottom: 0;
      }
    }
    a {
      color: ${theme.colors.base};
      opacity: 1;
    }
  }
  .author-meta {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    color: ${darken(0.2, theme.colorBorder)};
  }
  .page-template .post-content-body h1,
  .page-template .post-content-body h2,
  .page-template .post-content-body h3 {
    text-align: center;
  }
`

export default screen
