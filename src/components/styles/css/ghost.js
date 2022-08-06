import { css } from '@emotion/react'

const ghost = theme => css`
  /* Styling for Ghost-specific elements
/* ---------------------------------------------------------- */

  .kg-card {
    margin: 7vw 0;
  }
  .kg-embed-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100%;
  }
  .kg-image {
    max-width: 100%;
    width: 100%;
  }
  .kg-card figcaption {
    padding: 1.5rem;
    font-size: 1.3rem;
    line-height: 1.4em;
    font-weight: 600;
    color: ${theme.colors.base};
    text-align: center;
    opacity: 0.4;
  }
  .kg-width-wide {
    position: relative;
    width: 75vw;
    min-width: 100%;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    transform: translateX(calc(50vw - 50%));
  }
  .kg-width-full {
    position: relative;
    width: 94vw;
    min-width: 100%;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    transform: translateX(calc(50vw - 50%));
  }
  .kg-width-full figcaption {
    padding-left: 0;
    padding-right: 0;
    text-align: left;
  }
  @media (max-width: ${theme.maxWidthMd}) {
    .kg-width-full {
      width: 100vw;
    }
    .kg-width-full figcaption {
      padding-left: 6vw;
    }
  }
  .kg-gallery-container {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 75vw;
    min-width: 100%;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    transform: translateX(calc(50vw - 50%));
  }
  .kg-gallery-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .kg-gallery-image img {
    display: block;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  .kg-gallery-row:not(:first-of-type) {
    margin: 0.75em 0 0 0;
  }
  .kg-gallery-image:not(:first-of-type) {
    margin: 0 0 0 0.75em;
  }
  .kg-gallery-card + .kg-image-card.kg-width-wide,
  .kg-gallery-card + .kg-gallery-card,
  .kg-image-card.kg-width-wide + .kg-gallery-card,
  .kg-image-card.kg-width-wide + .kg-image-card.kg-width-wide {
    margin-top: calc(-7vw + 0.75em);
  }
`

export default ghost
