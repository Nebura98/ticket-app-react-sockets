import React, { createContext, useState } from 'react'

export const UiContext = createContext()

export const UiProvider = ({ children }) => {

  const [ocultarMenu, setOcultarMenu] = useState(true)

  const mostraMenu = () => {
    setOcultarMenu(false)
  }

  const esconderMenu = () => {
    setOcultarMenu(true)
  }

  return (
    <UiContext.Provider value={{ ocultarMenu, mostraMenu, esconderMenu }}>
      {children}
    </UiContext.Provider>
  )
}
