import React, { createContext, useReducer } from 'react'

const initialState = {
  isOpen: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_DRAWER':
      return { ...state, isOpen: !state.isOpen }
    default:
      return state
  }
}

export const DrawerContext = createContext({})

const DrawerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <DrawerContext.Provider value={{ state, dispatch }}>
      {children}
    </DrawerContext.Provider>
  )
}

export default DrawerProvider
