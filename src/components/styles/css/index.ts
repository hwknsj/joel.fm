import { css } from '@emotion/react'
import { actions } from './actions'
import { animations } from './animations'
import { buttons } from './buttons'
import { forms } from './forms'
import { ghost } from './ghost'
import { grid } from './grid'
import { hamburger } from './hamburger'
import { helpers } from './helpers'
import { lists } from './lists'
import { nav } from './nav'
import { reset } from './reset'
import { screen } from './screen'
import { tables } from './tables'

export {
  actions,
  animations,
  buttons,
  forms,
  ghost,
  grid,
  hamburger,
  helpers,
  lists,
  nav,
  reset,
  screen,
  tables
}

// export const styleSheet = theme => css`
//   ${actions(theme)}
// ${animations}
// ${buttons(theme)}
// ${forms(theme)}
// ${ghost(theme)}
// ${grid(theme)}
// ${hamburger(theme)}
// ${helpers(theme)}
// ${lists(theme)}
// ${nav(theme)}
// ${reset(theme)}
// ${screen(theme)}
// ${tables(theme)}
// `

export default theme => ({
  ...actions(theme),
  ...animations,
  ...buttons(theme),
  ...forms(theme),
  ...ghost(theme),
  ...grid(theme),
  ...hamburger(theme),
  ...helpers(theme),
  ...lists(theme),
  ...nav(theme),
  ...reset(theme),
  ...screen(theme),
  ...tables(theme)
})
