import { css } from '@emotion/react'

const actions = theme => css`
  .actions {
    display: flex;
    cursor: default;
    list-style: none;
    margin: calc(${theme.margin} * -0.5);
    padding-left: 0;
  }

  .actions li {
    padding: 0 0 0 calc(${theme.margin} * 0.5);
    vertical-align: middle;
  }

  .actions.special {
    justify-content: center;
    width: 100%;
    margin-left: 0;
  }

  .actions.special li:first-of-type {
    padding-left: 0;
  }

  .actions.stacked {
    flex-direction: column;
    margin-left: 0;
  }

  .actions.stacked li {
    padding: calc(${theme.margin} * 0.65) 0 0 0;
  }

  .actions.stacked li:first-of-type {
    padding-top: 0;
  }

  .actions.fit {
    width: calc(100% + calc(${theme.margin} * 0.5));
  }

  .actions.fit li {
    flex: 1 1 auto;
    width: 100%;
  }

  .actions.fit li > * {
    width: 100%;
  }

  .actions.fit.stacked {
    width: 100%;
  }

  @media (max-width: ${theme.maxWidthXs}) {
    .actions:not(.fixed) {
      flex-direction: column;
      margin-left: 0;
      width: 100% !important;
    }

    .actions:not(.fixed) li {
      flex: 1 1 auto;
      padding: calc(${theme.margin} * 0.5) 0 0 0;
      text-align: center;
      width: 100%;
    }

    .actions:not(.fixed) li > * {
      width: 100%;
    }

    .actions:not(.fixed) li:first-of-type {
      padding-top: 0;
    }

    .actions:not(.fixed) li input[type='submit'],
    .actions:not(.fixed) li input[type='reset'],
    .actions:not(.fixed) li input[type='button'],
    .actions:not(.fixed) li button,
    .actions:not(.fixed) li .button {
      width: 100%;
    }

    .actions:not(.fixed) li input[type='submit'].icon:before,
    .actions:not(.fixed) li input[type='reset'].icon:before,
    .actions:not(.fixed) li input[type='button'].icon:before,
    .actions:not(.fixed) li button.icon:before,
    .actions:not(.fixed) li .button.icon:before {
      margin-left: -0.5rem;
    }
  }
`
export default actions
