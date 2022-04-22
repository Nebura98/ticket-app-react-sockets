import { useContext, useEffect } from 'react'

import { UiContext } from '../context/UiContext'

export const useHideMenu = (ocultar) => {

    const { mostraMenu, esconderMenu } = useContext(UiContext)

    useEffect(() => {
        if (ocultar) {
            esconderMenu()
        } else {
            mostraMenu()
        }
    }, [ocultar, mostraMenu, esconderMenu])

}
