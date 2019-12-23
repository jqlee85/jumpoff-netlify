import React, { useCallback, useState } from 'react'
import useScrollPosition from '../hooks/useScrollPosition'

export const AppContext = React.createContext({
    appScrolled: false,
    navOpen: false,
    toggleNav: () => {},
})

const AppState = ({children}) => {

    const [appScrolled,setAppScrolled] = useState(false)

    useScrollPosition(({ currPos }) => {
        const isScrolled = typeof(currPos.y) === 'number' && currPos.y < -120
        if (isScrolled !== appScrolled ) setAppScrolled(!appScrolled)
    }, [appScrolled],false, false, 64)

    const [navOpen,setNavOpen] = useState(false)
    
    const toggleNav = useCallback(() => {
        setNavOpen(!navOpen)
    },[navOpen])
    
    return <AppContext.Provider 
        value={{
            appScrolled,
            navOpen,
            toggleNav
        }}
    >
        {children}
    </AppContext.Provider>

}

export default AppState