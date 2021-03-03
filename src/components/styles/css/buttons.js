import { css } from '@emotion/react'
import { darken } from 'polished'

const buttons = theme => css`
  input[type='submit'],
  input[type='reset'],
  input[type='button'],
  button,
  .button {
    display: inline-block;
    height: ${theme.height};
    padding: 0 2rem;
    border: 0;
    border-radius: ${theme.radius};
    cursor: pointer;
    font-family: ${theme.fontFraktur};
    font-size: 1.4rem;
    font-weight: ${theme.fontNormal};
    line-height: ${theme.height};
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    appearance: none;
    transition: 0.4s ease;
  }

  input[type='submit'].fit,
  input[type='reset'].fit,
  input[type='button'].fit,
  button.fit,
  .button.fit {
    width: 100%;
  }

  input[type='submit'].small,
  input[type='reset'].small,
  input[type='button'].small,
  button.small,
  .button.small {
    height: calc(${theme.height} * 0.9);
    line-height: calc(${theme.height} * 0.9);
    padding: 0 1.5rem;
    font-size: 1.2rem;
  }

  input[type='submit'].large,
  input[type='reset'].large,
  input[type='button'].large,
  button.large,
  .button.large {
    height: calc(${theme.height} * 1.14);
    line-height: calc(${theme.height} * 1.14);
    padding: 0 3rem;
    font-size: 1.6rem;
  }

  input[type='submit'].disabled,
  input[type='submit']:disabled,
  input[type='reset'].disabled,
  input[type='reset']:disabled,
  input[type='button'].disabled,
  input[type='button']:disabled,
  button.disabled,
  button:disabled,
  .button.disabled,
  .button:disabled {
    pointer-events: none;
    opacity: 0.4;
  }

  input[type='submit'],
  input[type='reset'],
  input[type='button'],
  button,
  .button {
    color: ${theme.colorPrimary} !important;
    background-color: transparent;
    box-shadow: inset 0 0 0 2px ${theme.colorPrimary};
  }

  input[type='submit']:hover,
  input[type='reset']:hover,
  input[type='button']:hover,
  button:hover,
  .button:hover {
    text-decoration: none;
    color: ${darken(0.15, theme.colorPrimary)} !important;
    box-shadow: inset 0 0 0 2px ${darken(0.1, theme.colorPrimary)};
    transition: 0.2s ease;
  }

  input[type='submit'].primary,
  input[type='reset'].primary,
  input[type='button'].primary,
  button.primary,
  .button.primary {
    color: ${theme.white} !important;
    background-color: ${theme.colorPrimary};
    box-shadow: none;
  }

  input[type='submit'].primary:hover,
  input[type='reset'].primary:hover,
  input[type='button'].primary:hover,
  button.primary:hover,
  .button.primary:hover {
    background-color: ${darken(0.1, theme.colorPrimary)};
  }
`

export default buttons
