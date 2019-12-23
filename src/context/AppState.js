import React, {useState} from 'react'

export const AppContext = React.createContext({
    navInitialized: false,
    navOpen: false,
    theme: 'light',
    toggleNav: () => {}
})

const AppState = ({children}) => {

    const [state,setState] = useState({
        navInitialized: false,
        navOpen: false,
        theme: 'light',
    })

    const toggleNav = () => {
        setState({
            ...state,
            navOpen: !state.navOpen
        })
    }
    
    return <AppContext.Provider 
        value={{
            ...state,
            toggleNav: toggleNav
        }}
    >
        {children}
    </AppContext.Provider>

}

export default AppState