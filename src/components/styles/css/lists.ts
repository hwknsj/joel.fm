import { css } from '@emotion/react'
import type { Theme } from '../theme'

export const lists = (theme: Theme) => css`
  ul,
  ol,
  dl {
    margin: 0 0 ${theme.margin} 0;
    font-family: ${theme.typeography.body};
  }
  ol,
  ul {
    padding-left: 1.3em;
    padding-right: 1.5em;
  }
  ol ol,
  ul ul,
  ul ol,
  ol ul {
    margin: 0.5em 0 1em;
  }
  ul {
    list-style: disc;
  }
  ol {
    list-style: decimal;
  }
  ul,
  ol {
    max-width: 100%;
  }
  li {
    margin: 0.5em 0;
    padding-left: 0.3em;
    line-height: 1.6em;
  }
  dt {
    display: block;
    font-weight: ${theme.typeography.weight.bold};
    margin: 0 0 calc(${theme.margin} * 0.5) 0;
  }
  dd {
    margin-left: ${theme.margin};
  }
`
export default lists