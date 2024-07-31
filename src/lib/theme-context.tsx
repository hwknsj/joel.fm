// NOTE: this code assumes there is a 'dark' or 'light' theme which i've yet to implement
// import { theme } from '@/styles/theme'
import { theme } from '../components/styles/theme'
import {
  ThemeProvider as EmotionThemeProvider,
  ThemeProviderProps
} from '@emotion/react'
import React, { createContext, useContext, useEffect, useState } from 'react'

type ThemeContextState = {
  dark: boolean
  hasThemeMounted: boolean
  toggle?: VoidFunction
}

const defaultContextData: ThemeContextState = {
  dark: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
  hasThemeMounted: false
}

const ThemeContext = createContext(defaultContextData)
const useTheme = () => useContext(ThemeContext)

const useEffectDarkMode = (): [
  ThemeContextState,
  React.Dispatch<ThemeContextState>
] => {
  const [themeState, setThemeState] = useState<{
    dark: boolean
    hasThemeMounted: boolean
  }>({
    dark: false,
    hasThemeMounted: false
  })
  useEffect(() => {
    const lsDark = localStorage?.getItem('dark') === 'true'
    setThemeState(t => ({ ...themeState, dark: lsDark, hasThemeMounted: true }))
  }, [])

  return [themeState, setThemeState]
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeState, setThemeState] = useEffectDarkMode()

  if (!themeState.hasThemeMounted) {
    return <></>
  }

  const toggle = () => {
    const dark = !themeState.dark
    localStorage.setItem('dark', JSON.stringify(dark))
    setThemeState({ ...themeState, dark })
  }

  // TODO: make theme switchable
  // const computedTheme = theme(themeState.dark)

  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeContext.Provider
        value={{
          hasThemeMounted: true,
          dark: themeState.dark,
          toggle
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  )
}

export { ThemeProvider, useTheme }
