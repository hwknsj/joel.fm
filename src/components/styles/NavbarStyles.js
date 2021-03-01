import styled from '@emotion/styled'

export const HeaderContainerStyles = styled.header`
  position: relative;
  z-index: 9999;
  transition: 250ms ease-in-out;
  width: 100%;
`
export const NavBarStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.8rem;
  width: 100%;

  /* .site-head-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  min-height: 200px;
  width: 100%;
} */

  .site-head-left {
    position: relative;
    z-index: 100;
    display: flex;
    /* align-items: center; */
    margin-right: 10px;
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

  .site-head li {
    display: block;
    margin: 0;
    padding: 0;
  }

  .site-head-left a,
  .site-head-right a {
    display: block;
    margin: 0;
    padding: 10px 12px;
    color: ${({ theme }) => theme.colorBase};
    font-weight: ${({ theme }) => theme.bold};
    opacity: 0.4;
  }

  /* @media (max-width: 900px) {
  .site-head-left {
    visibility: hidden;
  }
} */

  .site-head-left li a[aria-current='page'] {
    color: ${({ theme }) => theme.colorBase};
    opacity: 1;
  }

  .nav-current a,
  .site-head a:hover {
    text-decoration: none;
    opacity: 1;
  }

  /* @media screen {
  .site-head-left li a[aria-current='page'] {
    text-decoration: underline;
  }
} */

  .site-head-center {
    /* position: absolute; */
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    /* min-height: fit-content;
  max-height: max-content; */
    /* justify: center; */
    /* max-width: 100%; */
    /* align-items: flex-start; */
    /* align-content: center; */
    /* align-items: center; */
    /* margin-top: -2rem; */
  }

  .site-head-logo {
    flex: 1 1 auto;
    flex-direction: column;
    display: flex;
    /* align-content: flex-end; */
    align-items: flex-start;
    /* height: fit-content; */
    width: 100%;
    margin-top: -10px;
    overflow: visible;
    /* padding: 10px; */
    color: var(--color-base);
    font-size: 3rem;
    line-height: 1em;
    /* font-weight: 700; */
    /* text-transform: uppercase; */
    /* letter-spacing: 1px; */
    /* margin-top: -2rem; */
  }

  .site-head-title {
    margin: 2rem auto;
  }

  .site-head-logo a {
    color: var(--color-base);
    text-decoration: none;
  }

  .site-head-logo:hover {
    text-decoration: none;
  }

  /* .site-head-logo Img,
.site-head-logo img,
.site-head-logo picture {
  display: block;
}
*/
  .site-head-logo-image {
    text-align: center;
    margin: 0 auto;
    overflow: visible;
    display: flex !important;
    flex-direction: column;
    height: 100%;
    /* width: 100px;
  height: 100px;
  max-height: 100px;
  min-width: fit-content; */
  }

  .site-head-open .site-head-logo {
    /* position: absolute; */
    top: 0;
    overflow: visible;
    min-height: 100%;
    /* margin-top: 10px; */
  }

  /* @media (max-width: 1200px) { */
  /* .site-head-logo {
    margin-top: 1rem;
  } */
  /* .site-head-center { */
  /* text-align: center; */
  /* width: 100px;
    height: 100px; */
  /* margin: 0 auto; */
  /* transform: translate(50%, 0); */
  /* } */
  /* .site-head-title { */
  /* margin: 1rem auto; */
  /* } */
  /* } */

  /* .site-head-center .site-head-subtitle {
  display: block;
  flex: 0 1 auto;
  font-style: italic;
  text-align: center;
  align-self: flex-end;
} */

  .site-head-right {
    position: relative;
    z-index: 100;
    /* flex-shrink: 0; */
    display: flex;
    align-items: flex-start;
  }

  .nav-right-links {
    /* flex-shrink: 0; */
    display: flex;
    align-items: flex-start;
    justify-content: right;
  }

  .site-head-open .hamburger-inner,
  .site-head-open .hamburger-inner::before,
  .site-head-open .hamburger-inner::after {
    background-color: ${({ theme }) => theme.colorBase};
  }

  .site-head-open .hamburger-inner {
    transition-delay: 0.32s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, -6px, 0) rotate(-45deg);
  }

  .site-head-open .hamburger-inner::after {
    top: 0;
    opacity: 0;
    transition: top 0.3s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      opacity 0.1s 0.27s linear;
  }
  .site-head-open .hamburger-inner::before {
    top: 0;
    transition: top 0.12s 0.18s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.15s 0.42s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: rotate(-90deg);
  }
`
