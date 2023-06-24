import { css } from '@emotion/react'

export const tables = theme => css`
  table {
    border-collapse: separate;
    margin: 0 0 ${theme.margin} 0;
    width: 100%;
    font-size: 0.8em;
  }
  th {
    color: ${theme.colors.base};
    font-size: 0.9em;
    font-weight: ${theme.typeography.weight.bold};
    padding: 0 0.7em 0.4em 0.7em;
    text-align: left;
  }
  td {
    padding: 0.4em 0.7em;
    border-left-width: 0;
    border-top-width: 0;
  }
  td:first-of-type {
    border-left-width: 1px;
  }
  tbody tr {
    border: solid 1px ${theme.colorBorder};
    border-left: 0;
    border-right: 0;
  }
  tbody tr:first-of-type td {
    border-top-width: 1px;
  }
  tbody tr:nth-of-type(2n + 1) {
    background-color: ${theme.colors.background};
  }
  tbody td {
    border: solid 1px ${theme.colorBorder};
    border-left-width: 0;
    border-top-width: 0;
  }
  tfoot {
    border-width: 0;
  }
`
export default tables
