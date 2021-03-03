import { css } from '@emotion/react'

const forms = theme => css`
  form {
    margin: 0 0 ${theme.margin} 0;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: 0;
  }

  label {
    color: ${theme.colorPrimary};
    display: block;
    font-size: 0.9em;
    font-weight: ${theme.fontBold};
    margin: 0 0 calc(${theme.margin} * 0.5) 0;
  }

  input[type='text'],
  input[type='password'],
  input[type='email'],
  input[type='tel'],
  input[type='search'],
  input[type='url'],
  select,
  textarea {
    background: ${theme.colorBg};
    border-radius: ${theme.radius};
    border: none;
    border: solid 1px ${theme.colorBorder};
    color: inherit;
    display: block;
    outline: 0;
    padding: 0 0.6em;
    text-decoration: none;
    width: 100%;
  }

  input[type='text']:invalid,
  input[type='password']:invalid,
  input[type='email']:invalid,
  input[type='tel']:invalid,
  input[type='search']:invalid,
  input[type='url']:invalid,
  select:invalid,
  textarea:invalid {
    box-shadow: none;
  }

  input[type='text']:focus,
  input[type='password']:focus,
  input[type='email']:focus,
  input[type='tel']:focus,
  input[type='search']:focus,
  input[type='url']:focus,
  select:focus,
  textarea:focus {
    border-color: ${theme.colorPrimary};
    box-shadow: 0 0 0 1px ${theme.colorPrimary};
  }

  select {
    height: ${theme.height};
    padding-right: ${theme.height};
    text-overflow: ellipsis;
  }

  select option {
    color: ${theme.colorPrimary};
    background: ${theme.colorBg};
  }

  select:focus::-ms-value {
    background-color: transparent;
  }

  select::-ms-expand {
    display: none;
  }

  input[type='text'],
  input[type='password'],
  input[type='email'],
  input[type='tel'],
  input[type='search'],
  input[type='url'],
  select {
    height: ${theme.height};
  }

  textarea {
    padding: 0.3em 0.6em;
    resize: vertical;
  }

  input[type='checkbox'],
  input[type='radio'] {
    display: block;
    margin-right: -2em;
    opacity: 0;
    width: 1em;
    z-index: -1;
  }

  input[type='checkbox'] + label,
  input[type='radio'] + label {
    display: flex;
    align-items: center;
    color: ${theme.colorBase};
    cursor: pointer;
    font-size: 1em;
    font-weight: ${theme.fontNormal};
    padding-left: calc((${theme.height} * 0.6) + 0.75em);
    padding-right: 2rem;
    position: relative;
    user-select: none;
  }

  input[type='checkbox'] + label:before,
  input[type='radio'] + label:before {
    background: ${theme.colorBg};
    border-radius: ${theme.radius};
    border: solid 1px ${theme.colorBorder};
    content: '';
    display: inline-block;
    height: calc(${theme.height} * 0.6);
    line-height: calc(${theme.height} * 0.56);
    text-align: center;
    width: calc(${theme.height} * 0.6);
    margin-right: 1rem;
  }

  input[type='checkbox']:checked + label:before,
  input[type='radio']:checked + label:before {
    background: ${theme.colorPrimary};
    border-color: ${theme.colorPrimary};
    color: ${theme.colorBg};
    content: '✓';
  }

  input[type='checkbox']:focus + label:before,
  input[type='radio']:focus + label:before {
    border-color: ${theme.colorPrimary};
    box-shadow: 0 0 0 1px ${theme.colorPrimary};
  }

  input[type='checkbox'] + label:before {
    border-radius: ${theme.radius};
  }

  input[type='radio'] + label:before {
    border-radius: 100%;
  }
`
export default forms
