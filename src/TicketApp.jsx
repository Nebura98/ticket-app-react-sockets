import React from 'react'

import { RouterPage } from './pages/RouterPage'
import { SocketProvider } from './context/SocketContext'
import { UiProvider } from './context/UiContext'

export const TicketApp = () => {
  return (
    <SocketProvider>
      <UiProvider>
        <RouterPage />
      </UiProvider>
    </SocketProvider>
  )
}
