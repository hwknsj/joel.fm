import { css } from '@emotion/react'
import { darken, lighten } from 'polished'

const screen = theme => css`
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
  /* Layout */
  /* ---------------------------------------------------------- */
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
      margin-bottom: ${theme.margin * 2};
      &:last-of-type {
        margin-bottom: 0;
      }
    }
    a {
      color: ${theme.colors.base};
      opacity: 1;
    }
  }
  /* Site Navigation */
  /* ---------------------------------------------------------- */
  .site-head {
    position: relative;
    z-index: 300;
    margin-top: -10px;
    font-size: 1.8rem;
    width: 100%;
    li {
      display: block;
      margin: 0;
      padding: 0;
      a[aria-current='page'] {
        color: ${theme.colors.base};
        opacity: 1;
      }
    }
  }
  .site-head-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    min-height: 200px;
    width: 100%;
  }
  .site-head-left {
    position: relative;
    z-index: 100;
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    align-items: flex-start;
  }
  .nav {
    display: flex;
    margin: 0 0 0 -12px;
    padding: 0;
    list-style: none;
    align-items: flex-start;
  }
  .site-head-left,
  .site-head-right {
    a {
      display: block;
      margin: 0;
      padding: 10px 12px;
      color: ${theme.colors.base};
      font-weight: ${theme.typeography.weight.heavy};
      opacity: 0.4;
    }
  }
  .nav-current a,
  .site-head a:hover {
    text-decoration: none;
    opacity: 1;
  }
  .site-head-center {
    text-align: center;
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
  }
  .site-head-logo {
    flex: 1 1 auto;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin-top: -10px;
    overflow: visible;
    color: ${theme.colors.base};
    font-size: 3rem;
    line-height: 1em;
    a {
      color: ${theme.colors.base};
      text-decoration: none;
    }
    &:hover {
      text-decoration: none;
    }
  }
  .site-head-title {
    margin: 2rem auto;
  }
  .site-head-logo-image {
    text-align: center;
    margin: 0 auto;
    overflow: visible;
    display: flex !important;
    flex-direction: column;
    height: 100%;
  }
  .site-head-open {
    .site-head-logo {
      top: 0;
      overflow: visible;
      min-height: 100%;
    }
  }
  .site-head-right {
    position: relative;
    z-index: 100;
    display: flex;
    align-items: flex-start;
  }
  .nav-right-links {
    display: flex;
    align-items: flex-start;
    justify-content: right;
  }
  .subscribe-button {
    display: block;
    padding: 4px 10px;
    border: ${theme.colors.base} 1px solid;
    color: ${theme.colors.base};
    font-size: 1.2rem;
    line-height: 1em;
    border-radius: 10px;
    opacity: 0.8;
    &:hover {
      text-decoration: none;
      opacity: 1;
    }
  }
  /* Modeling last-heavy page */
  /* --------------------------------------------------------- */
  .img-container {
    display: grid;
    grid-template-columns: auto;
    gap: 1rem;
    margin: 0 auto;
    padding: 0;
    text-align: center;
    width: 90vw !important;
    .img-item {
      margin: 0;
      padding: 0;
      max-width: 50%;
    }
  }
  /* Mobile Nav Menu */
  /* ---------------------------------------------------------- */
  .nav-burger {
    display: none;
    position: absolute;
    left: 0;
    z-index: 9999;
    padding: 12px 12px 12px 0;
  }
  @media (max-width: ${theme.maxWidthLg}) {
    .site-head {
      padding: 0;
    }
    .nav-burger {
      display: block;
      z-index: 9999;
    }
    .site-head-container {
      flex-direction: column;
      justify-content: flex-start;
      height: 40px;
      background: ${theme.transparent};
      z-index: -11;
      transition: all 0.4s ease-out;
    }
    .site-head-left,
    .site-head-right {
      position: relative;
      z-index: -1;
      height: auto;
      transition: height 0.2s ${theme.cubicBezier},
        opacity 0.2s ${theme.cubicBezier},
        border-bottom 0.4s ${theme.cubicBezier};
      transition-delay: 1s;
      a {
        margin: 8px 0;
        padding: 1px 0;
        font-size: 2.6rem;
        line-height: 1.15em;
        font-weight: 200;
        opacity: 0;
        transition: transform 0.3s ${theme.cubicBezier},
          opacity 0.2s ${theme.cubicBezier},
          border-bottom 0.4s ${theme.cubicBezier};
        transform: scale(1.1) translateY(-25px);
      }
    }
    .site-head-right {
      a,
      ul li a,
      nav a {
        border-top: ${theme.transparent} 2px solid;
        padding: 4rem 2rem 0 2rem;
        margin: 2px 2rem 2px 0;
        font-size: 2rem;
        &:last-of-type {
          margin-right: 0;
        }
      }
    }
    .site-head-right {
      a:hover figcaption,
      ul li a:hover figcaption,
      nav a:hover figcaption {
        border-bottom: ${theme.navbbh};
        opacity: 1;
      }
      a {
        padding: 4rem 2rem 0 2rem;
        margin: 2px 2rem 2px 0;
        font-size: 2rem;
        &:last-of-type {
          margin-right: 0;
        }
      }
    }
    .nav {
      width: 100%;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin: 3vw 0 0 1rem;
    }
    .site-head-left {
      order: 2;
      margin: 0;
      width: 100%;
    }
    .site-head-center {
      order: 1;
      position: static;
      z-index: auto;
      display: flex;
      justify-content: center;
      transform: translateX(0);
    }
    .site-head-right {
      order: 3;
      width: 100%;
      margin-top: 3vw;
      .nav-right-links {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 3vw 0 0 1rem;
        width: 100%;
        figcaption,
        div {
          z-index: 9999;
        }
      }
    }
    .site-head-open {
      background: ${theme.white};
      transition: background 0.5s ease-out;
      transition-delay: 0.25;
      overflow: hidden;
      height: 100vh;
    }
    .site-head-open .site-head-container {
      height: 100vh;
      transition: height 0.2s ease-in;
    }
    .site-head-open.site-head-left {
      opacity: 1 !important;
    }
    .site-head-left:not(.site-head-open),
    .site-head-right:not(.site-head-open) {
      opacity: 0 !important;
      visibility: hidden;
    }
    .site-head-open .site-head-left,
    .site-head-open .site-head-right {
      z-index: 9999;
      height: auto;
      transition: height 0.2s ${theme.cubicBezier};
      a {
        opacity: 0.4;
        transition: transform 0.6s ${theme.cubicBezier},
          opacity 0.4s ${theme.cubicBezier},
          border-bottom 0.4s ${theme.cubicBezier};
        transform: scale(1) translateY(0px);
        &:hover {
          opacity: 1;
        }
      }
      a[aria-current='page'] {
        border-bottom: ${theme.navbbh};
        opacity: 1;
      }
    }
    .site-head-open li a[aria-current='page'] {
      border-bottom: ${theme.navbbh};
      opacity: 1;
    }
    .site-head-open .site-foot {
      display: block;
      position: fixed;
      text-align: center;
      z-index: 9999;
      bottom: 0;
      font-size: 1.4rem;
      transition: transform 0.3s ${theme.cubicBezier};
      transform: translateY(-4vw);
    }
  }
  /* Post Feed */
  /* ---------------------------------------------------------- */
  .post-feed {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .post-card {
    position: relative;
    flex: 1 1 50%;
    display: flex;
    height: 60vw;
    background: linear-gradient(135deg, #1f1f1f 0%, #111 100%) center center
      no-repeat;
    background-size: contain;
    overflow: hidden;
    counter-increment: posts;
  }
  @media (max-width: ${theme.maxWidthMd}) {
    .post-card {
      flex: 1 1 100%;
      height: 80vw;
      margin: 2rem 0;
    }
  }
  .post-card-large {
    flex: 1 1 100%;
    margin: 2rem 0;
  }
  @media (max-width: ${theme.maxWidthMd}) {
    .post-card-large {
      flex: 0 1 100%;
      margin: 1rem 0;
    }
  }
  .post-card-link {
    flex: 1 1 auto;
    display: block;
  }
  .post-card-content {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: #fff;
    background: rgba(0, 0, 0, 0.1);
    opacity: 1;
    transition: opacity 0.5s cubic-bezier(0.33, 0, 0.2, 1);
  }
  .post-card.with-image .post-card-content {
    opacity: 0;
  }
  @media (max-width: ${theme.maxWidthMd}) {
    .post-card.with-image {
      .post-card-content {
        opacity: 1;
        background: transparent;
        &:hover {
          background: rgba(0, 0, 0, 0.1);
          transition: background 0.5s cubic-bezier(0.33, 0, 0.2, 1);
        }
      }
      .post-card-title {
        font-size: 5rem;
        opacity: 1;
        transition: opacity 0.5s cubic-bezier(0.33, 0, 0.2, 1);
      }
    }
  }
  .post-card-link:hover {
    .post-card-content {
      opacity: 1;
      transition: opacity 0.3s cubic-bezier(0.33, 0, 0.2, 1);
    }
  }
  .post-card-title {
    margin: 0;
    display: inline-block;
    font-size: 5rem;
    max-width: 70%;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.33, 0, 0.2, 1);
  }
  /* Posts without images */
  .post-card.no-image:before {
    display: block;
    /* content: counter(posts); */
    position: absolute;
    bottom: -0.15em;
    right: 5vw;
    font-size: 28vw;
    line-height: 1em;
    font-weight: ${theme.typeography.weight.heavy};
    letter-spacing: -0.1em;
    color: rgba(0, 0, 0, 0.2);
  }
  .post-card.no-image {
    background: transparent !important;
    .post-card-content {
      justify-content: flex-start;
      align-items: flex-start;
      padding: 4vw;
    }
    .post-card-title {
      font-size: 5rem;
      line-height: 1.15em;
      text-align: center;
      margin: auto;
      color: #111;
      opacity: 0.5;
    }
    &:hover {
      .post-card-title {
        color: #111;
        opacity: 1;
      }
    }
  }
  @media (max-width: ${theme.maxWidthXl}) {
    .post-card {
      .post-card-title {
        font-size: 5rem;
      }
      &.no-image {
        .post-card-title {
          font-size: 3.4rem;
        }
      }
    }
  }
  @media (max-width: ${theme.maxWidthMd}) {
    .post-card {
      &.no-image:before {
        font-size: 50vw;
      }
    }
  }
  /* Post Content */
  /* ---------------------------------------------------------- */
  .post-content {
    max-width: ${theme.maxWidthMd};
    margin: 0 auto;
    padding: 6vw 0;
  }
  @media (max-width: ${theme.maxWidthLg}) {
    .post-content {
      /* max-width: 720px; */
      max-width: ${theme.maxWidthMd};
      margin: 0 auto;
    }
  }
  .post-content-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .post-content-title {
    margin: 0 0 3vw;
    color: ${theme.colors.base};
    text-align: center;
  }
  .post-content-excerpt {
    margin: -2vw 0 3vw;
    font-size: 2.2rem;
    line-height: 1.6em;
    color: ${theme.colors.base};
    text-align: center;
    opacity: 0.5;
  }
  @media (max-width: ${theme.maxWidthXs}) {
    .post-content-excerpt {
      font-size: 1.8rem;
    }
  }
  .post-content-image {
    margin: 4vw 0;
    position: relative;
    width: 75vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    transform: translateX(calc(50vw - 50%));
    max-width: ${theme.maxWidthLg};
  }
  .post-content-body {
    margin: 0 auto;
    font-size: 1.8rem;
    line-height: 1.65em;
    max-width: 960px;
    color: ${theme.colors.base};
    p {
      text-align: justify;
      font-family: ${theme.typeography.serif};
      code {
        word-break: break-all;
      }
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors.base};
    }
    li {
      word-break: break-word;
      p {
        margin: 0;
      }
    }
    iframe {
      margin: 0 auto !important;
    }
    blockquote {
      margin: 0 0 1.5em;
      padding: 0 1.5em;
      border-left: ${theme.colors.border} 3px solid;
      font-family: ${theme.typeography.serif};
      p {
        margin: 0 0 1em 0;
        color: ${theme.colors.text.secondary};
        font-size: inherit;
        line-height: inherit;
        font-style: normal;
        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
    code {
      padding: 0 5px 2px;
      font-size: 0.8em;
      line-height: 1em;
      font-weight: 400 !important;
      background: ${theme.colors.background};
      border-radius: 3px;
    }
    pre {
      overflow-x: auto;
      margin: 1.5em 0 3em;
      padding: 20px;
      max-width: 100%;
      border: ${darken(0.1, theme.colors.base)} 1px solid;
      color: ${theme.colors.background};
      font-size: 1.4rem;
      line-height: 1.5em;
      background: ${darken(0.03, theme.colors.base)};
      border-radius: 5px;
      code {
        padding: 0;
        font-size: inherit;
        line-height: inherit;
        background: transparent;
        &:not(span) {
          color: inherit;
        }
      }
    }
    .fluid-width-video-wrapper {
      margin: 1.5em 0 3em;
    }
    hr {
      margin: 4vw 0;
      &:after {
        content: '';
        position: absolute;
        top: -15px;
        left: 50%;
        display: block;
        margin-left: -10px;
        width: 1px;
        height: 30px;
        background: ${lighten(0.1, theme.colorBorder)};
        box-shadow: #fff 0 0 0 5px;
        transform: rotate(45deg);
      }
    }
  }
  @media (max-width: ${theme.maxWidthXs}) {
    .post-content-body {
      font-size: 1.6rem;
    }
  }
  .footnotes-sep {
    margin-bottom: 30px;
  }
  .footnotes {
    font-size: 1.5rem;
    p {
      margin: 0;
    }
  }
  .footnote-backref {
    color: ${theme.colorPrimary} !important;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none !important;
    box-shadow: none !important;
  }
  /* Author Archive
/* ---------------------------------------------------------- */

  .author-meta {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    color: ${darken(0.2, theme.colorBorder)};
  }
  .author-links {
    display: flex;
    align-items: center;
    margin-top: 20px;
    a {
      display: block;
      margin: 0;
      color: ${theme.colors.base};
      opacity: 0.4;
      transition: opacity 0.4s ${theme.cubicBezier};
      figcaption,
      div {
        opacity: 0;
        position: absolute;
        margin-top: calc(-1 * ${theme.height});
        min-width: fit-content;
        left: 50%;
        transform: translateX(-50%);
        margin-left: auto;
        margin-right: auto;
        font-size: 2rem;
        transition: opacity 0.4s ${theme.cubicBezier};
      }
      &:hover {
        text-decoration: none;
        opacity: 1;
        figcaption,
        div {
          opacity: 0.9;
        }
      }
      .divider {
        display: inline-block;
        margin: 0 3px;
      }
    }
  }
  /* Page Template
/* ---------------------------------------------------------- */
  .page-template .post-content-body h1,
  .page-template .post-content-body h2,
  .page-template .post-content-body h3 {
    text-align: center;
  }
`

export default screen
