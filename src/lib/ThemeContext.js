/* eslint-disable */
import { theme } from '@/styles/theme'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { createContext, useContext, useEffect, useState } from 'react'

const defaultContextData = {
  dark: false,
  toggle: () => {}
}

const ThemeContext = createContext(defaultContextData)
const useTheme = () => useContext(ThemeContext)

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = useState({
    dark: false,
    hasThemeMounted: false
  })
  useEffect(() => {
    const lsDark = localStorage.getItem('dark') === 'true'
    setThemeState(t => ({ ...themeState, dark: lsDark, hasThemeMounted: true }))
  }, [])

  return [themeState, setThemeState]
}

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode()

  if (!themeState.hasThemeMounted) {
    return <></>
  }

  const toggle = () => {
    const dark = !themeState.dark
    localStorage.setItem('dark', JSON.stringify(dark))
    setThemeState({ ...themeState, dark })
  }

  const computedTheme = theme(themeState.dark)

  return (
    <EmotionThemeProvider theme={computedTheme}>
      <ThemeContext.Provider
        value={{
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
